(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9517],
  {
    chunkid: (module) => {
      module.exports = {
        StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
        Action: "_2Xpw9--lhL-kpt-lUannE1",
        WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
        StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
        StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
        StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
      };
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
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        var _ = Object.create(null);
        return (
          _ &&
            _.Children.map(_, function (_) {
              return _;
            }).forEach(function (_) {
              _[_.key] = (function (_) {
                return _ && (0, _.isValidElement)(_) ? _(_) : _;
              })(_);
            }),
          _
        );
      }
      function _(_, _, _) {
        return null != _[_] ? _[_] : _.props[_];
      }
      function _(_, _, _) {
        var _ = _(_.children),
          _ = (function (_, _) {
            function _(_) {
              return _ in _ ? _[_] : _[_];
            }
            (_ = _ || {}), (_ = _ || {});
            var _,
              _ = Object.create(null),
              _ = [];
            for (var _ in _)
              _ in _ ? _.length && ((_[_] = _), (_ = [])) : _.push(_);
            var _ = {};
            for (var _ in _) {
              if (_[_])
                for (_ = 0; _ < _[_].length; _++) {
                  var _ = _[_][_];
                  _[_[_][_]] = __webpack_require__(_);
                }
              _[_] = __webpack_require__(_);
            }
            for (_ = 0; _ < _.length; _++) _[_[_]] = __webpack_require__(_[_]);
            return _;
          })(_, _);
        return (
          Object.keys(_).forEach(function (_) {
            var _ = _[_];
            if ((0, _.isValidElement)(_)) {
              var _ = _ in _,
                _ = _ in _,
                _ = _[_],
                _ = (0, _.isValidElement)(_) && !_.props._;
              !_ || (_ && !_)
                ? _ || !_ || _
                  ? _ &&
                    _ &&
                    (0, _.isValidElement)(_) &&
                    (_[_] = (0, _.cloneElement)(_, {
                      onExited: __webpack_require__.bind(null, _),
                      _: _.props._,
                      exit: _(_, "exit", _),
                      enter: _(_, "enter", _),
                    }))
                  : (_[_] = (0, _.cloneElement)(_, {
                      _: !1,
                    }))
                : (_[_] = (0, _.cloneElement)(_, {
                    onExited: __webpack_require__.bind(null, _),
                    _: !0,
                    exit: _(_, "exit", _),
                    enter: _(_, "enter", _),
                  }));
            }
          }),
          _
        );
      }
      var _ =
          Object.values ||
          function (_) {
            return Object.keys(_).map(function (_) {
              return _[_];
            });
          },
        _ = (function (_) {
          function _(_, _) {
            var _,
              _ = (_ = _.call(this, _, _) || this).handleExited.bind(
                (0, _._)(_),
              );
            return (
              (_.state = {
                contextValue: {
                  isMounting: !0,
                },
                handleExited: _,
                firstRender: !0,
              }),
              _
            );
          }
          (0, _._)(_, _);
          var _ = _.prototype;
          return (
            (_.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({
                  contextValue: {
                    isMounting: !1,
                  },
                });
            }),
            (_.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (_.getDerivedStateFromProps = function (_, _) {
              var _,
                _,
                _ = _.children,
                _ = _.handleExited;
              return {
                children: _.firstRender
                  ? ((_ = _),
                    (_ = _),
                    _(_.children, function (_) {
                      return (0, _.cloneElement)(_, {
                        onExited: _.bind(null, _),
                        _: !0,
                        appear: _(_, "appear", _),
                        enter: _(_, "enter", _),
                        exit: _(_, "exit", _),
                      });
                    }))
                  : _(_, _, _),
                firstRender: !1,
              };
            }),
            (_.handleExited = function (_, _) {
              var _ = _(this.props.children);
              _.key in _ ||
                (_.props.onExited && _.props.onExited(_),
                this.mounted &&
                  this.setState(function (_) {
                    var _ = (0, _._)({}, _.children);
                    return (
                      delete _[_.key],
                      {
                        children: _,
                      }
                    );
                  }));
            }),
            (_.render = function () {
              var _ = this.props,
                _ = _.component,
                _ = _.childFactory,
                _ = (0, _._)(_, ["component", "childFactory"]),
                _ = this.state.contextValue,
                _ = _(this.state.children).map(_);
              return (
                delete _.appear,
                delete _.enter,
                delete _.exit,
                null === _
                  ? _.createElement(
                      _._.Provider,
                      {
                        value: _,
                      },
                      _,
                    )
                  : _.createElement(
                      _._.Provider,
                      {
                        value: _,
                      },
                      _.createElement(_, _, _),
                    )
              );
            }),
            _
          );
        })(_.Component);
      (_.propTypes = {}),
        (_.defaultProps = {
          component: "div",
          childFactory: function (_) {
            return _;
          },
        });
      const _ = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          BroadcastEmbeddablePopoutHeader: () => _,
          default: () => _,
        });
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
        const { appid: _ } = _,
          _ = (0, _._)(),
          _ = (0, _.useRef)({
            include_assets: !0,
            include_release: !0,
          }),
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          [_, _] = (0, _._)(_, _.current);
        let _ = (0, _._)(
            _().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          _ = _().StoreSaleWidgetImage_mini,
          _ = _().StoreSaleImage_mini;
        if (null == _)
          return (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)(_._, {
              size: "medium",
            }),
          });
        if (null == _ || !_.name)
          return (0, _.jsx)("div", {
            className: _.StoreSaleWidgetEmptyContainer,
          });
        const _ = _.type != _._._,
          _ = (0, _._)((0, _._)(_), _);
        return (0, _.jsxs)("div", {
          className: _,
          children: [
            (0, _.jsx)("a", {
              href: _,
              target: _._.IN_CLIENT ? void 0 : "_blank",
              children: (0, _.jsx)(_._, {
                _: _,
                children: (0, _.jsx)("div", {
                  className: _,
                  children:
                    _ &&
                    (0, _.jsx)("img", {
                      className: _,
                      src: (0, _._)(_, "small_capsule"),
                      alt: _.name,
                    }),
                }),
              }),
            }),
            (0, _.jsxs)("div", {
              className: _.StoreSaleBroadcastWidgetRight,
              children: [
                (0, _.jsx)("a", {
                  href: _,
                  target: _._.IN_CLIENT ? void 0 : "_blank",
                  children: (0, _.jsx)(_._, {
                    _: _,
                    children: (0, _.jsx)("div", {
                      className: (0, _._)(
                        _.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                      children: _.name,
                    }),
                  }),
                }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _.StoreSaleWidgetRelease,
                    children: (0, _._)(_),
                  }),
                Boolean(_) &&
                  (0, _.jsx)(_._, {
                    _: _,
                    bShowDemoButton: !0,
                  }),
              ],
            }),
          ],
        });
      });
      var _ = __webpack_require__("chunkid");
      function _() {
        let _ = window.GetUsabilityTracker;
        if (_) return _();
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = (0, _._)((_) => {
        const { event: _ } = _,
          _ = _.clanSteamID.GetAccountID(),
          _ = !_ || !_.jsondata || !_.jsondata.broadcast_item_drops_enabled,
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(
            _ ? _._.GetCreatorHome(_.clanSteamID) : null,
          );
        if (
          ((0, _.useEffect)(() => {
            const _ = _().CancelToken.source();
            _.current = _.cancel;
            return (
              (async () => {
                const _ = _._.InitFromClanID(_),
                  _ = await _._.LoadCreatorHome(_, !1, _);
                _.token.reason || _(_);
              })(),
              () => {
                _.current && _.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [_]),
          _ || !_ || !_.BIsLoaded())
        )
          return null;
        const _ =
          _._.COMMUNITY_BASE_URL +
          "gid/" +
          _.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          _.jsondata.broadcast_item_drops_details_event_gid;
        return (0, _.jsx)("div", {
          className: _().item_drop_ctn,
          children: (0, _.jsxs)("div", {
            children: [
              (0, _._)(
                _.GetName().length > 0
                  ? _.jsondata.broadcast_item_drops_min_watch_time_minutes %
                      60 ==
                    0
                    ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                    : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                  : _.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                    ? "#SalePage_WatchForDrop_Hours_Developer"
                    : "#SalePage_WatchForDrop_Minutes_Developer",
                _.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                  ? _.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                  : _.jsondata.broadcast_item_drops_min_watch_time_minutes,
                _.GetName(),
              ),
              Boolean(_.jsondata.broadcast_item_drops_details_clan_accountid) &&
                (0, _.jsx)("a", {
                  href: _,
                  target: _._.IN_CLIENT ? "" : "_blank",
                  children: (0, _._)("#SalePage_WatchForDrop_LearnMore"),
                }),
            ],
          }),
        });
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
        _ = __webpack_require__._(_);
      function _(_) {
        const { steamid: _, closeModal: _ } = _;
        return (0, _.jsxs)(_._, {
          strDescription: "",
          strTitle: (0, _._)("#Button_Share"),
          onCancel: _,
          onOK: _,
          bAlertDialog: !0,
          modalClassName: "EventDisplay_Share_Dialog",
          children: [
            (0, _.jsx)(_, {
              steamid: _,
            }),
            (0, _.jsx)(_, {
              steamid: _,
            }),
          ],
        });
      }
      function _(_) {
        const { steamid: _ } = _,
          _ = (function (_) {
            const _ = _._.COMMUNITY_BASE_URL + "broadcast/share/" + _;
            return {
              strFacebookUrl: _ + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: _ + "?site=twitter",
              strRedditUrl: _ + "?site=reddit",
            };
          })(_);
        return (0, _.jsxs)("div", {
          className: (0, _._)(_().FlexRowContainer, _().share_controls_ctn),
          children: [
            (0, _.jsx)(_._, {
              toolTipContent: (0, _._)("#EventDisplay_Share_OnFaceBook"),
              children: (0, _.jsx)(_._, {
                href: _.strFacebookUrl,
                className: _().ShareBtn,
                children: (0, _.jsx)("img", {
                  className: (0, _._)(_().Button),
                  src: _._,
                }),
              }),
            }),
            (0, _.jsx)(_._, {
              toolTipContent: (0, _._)("#EventDisplay_Share_OnTwitter"),
              children: (0, _.jsx)(_._, {
                href: _.strTwitterUrl,
                className: _().ShareBtn,
                children: (0, _.jsx)("img", {
                  className: (0, _._)(_().Button),
                  src: _._,
                }),
              }),
            }),
            (0, _.jsx)(_._, {
              toolTipContent: (0, _._)("#EventDisplay_Share_OnReddit"),
              children: (0, _.jsx)(_._, {
                href: _.strRedditUrl,
                className: _().ShareBtn,
                children: (0, _.jsx)("img", {
                  className: (0, _._)(_().Button),
                  src: _._,
                }),
              }),
            }),
          ],
        });
      }
      function _(_) {
        const { steamid: _ } = _,
          _ = _.createRef(),
          [_, _] = _.useState(""),
          _ = _.createRef(),
          _ = _.useCallback(
            (_) => {
              _.current &&
                _.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(_.current.value)
                  .then((_) => {
                    _((0, _._)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((_) => {
                    _((0, _._)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", _);
                  });
            },
            [_],
          ),
          _ = _._.COMMUNITY_BASE_URL + "broadcast/watch/" + _;
        return (0, _.jsxs)("div", {
          children: [
            (0, _.jsxs)("div", {
              className: (0, _._)(_().FlexRowContainer, _().linkField),
              onClick: _,
              children: [
                (0, _.jsx)("span", {
                  className: _().LinkInputLabel,
                  children: (0, _._)("#EventDisplay_Share_Link"),
                }),
                (0, _.jsx)("textarea", {
                  className: _().LinkInput,
                  ref: _,
                  value: _,
                  readOnly: !0,
                }),
                Boolean(document.queryCommandSupported("copy")) &&
                  (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)("#ToolTip_CopyLinkToClipboard"),
                    children: (0, _.jsx)("div", {
                      className: (0, _._)(_().Button, _().Icon, _().LinkButton),
                      children: (0, _.jsx)("img", {
                        className: _().ClipboardIcon,
                        src: _._,
                      }),
                    }),
                  }),
              ],
            }),
            (0, _.jsx)("div", {
              ref: _,
              className: _().ClipboardText,
              children: _,
            }),
          ],
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
        list: [
          {
            appid: 444090,
            url: "https://steam.tv/paladins",
          },
          {
            appid: 386360,
            url: "https://steam.tv/smite",
          },
          {
            appid: 813820,
            url: "https://steam.tv/realmroyale",
          },
          {
            appid: 583950,
            url: "https://steam.tv/artifact",
            broadcasterAccountID: 912972716,
          },
          {
            appid: 570,
            url: "https://steam.tv/dota",
            broadcasterAccountID: 238221269,
          },
          {
            appid: 1025790,
            url: "https://steam.tv/steamawards",
            broadcasterAccountID: 934427243,
          },
          {
            appid: 730,
            url: "https://steam.tv/csgo",
            broadcasterAccountID: 911609735,
          },
        ],
      };
      function _(_) {
        return (function () {
          const _ = (0, _._)();
          return !(0, _._)() && !_;
        })()
          ? (0, _.jsx)(_, {
              ..._,
            })
          : null;
      }
      let _ = class extends _.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = _().CancelToken.source()),
            (this.m_bMarkedUsabilitySeen = !1),
            (this.state = {
              bShowPopoutHeader: !1,
              bExpanded: !1,
              bLoadingPreference: !0,
              style: {
                maxHeight: "0vh",
                overflow: "hidden",
                transition: "max-height 1s ease-in-out",
              },
              innerStyle: {
                maxHeight: "0vh",
                overflow: "hidden",
                transition: "max-height 1s ease-in-out",
              },
              bStartMuted: !0,
            });
        }
        async componentDidMount() {
          await _._.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded:
                  !_._.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight:
                    _._.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? _._.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : _._.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              _._.Get().SetupEmbeddableVOD(
                this.props,
                !this.props.bSkipPreRoll,
              ),
            window.setTimeout(() => {
              this.m_cancelSignal.token.reason ||
                this.setState({
                  style: {
                    ...this.state.style,
                    maxHeight: "100vh",
                  },
                });
            }, 10);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let _ = _._.Get().GetPlayReadyStream(this.props);
          const _ = this.state.bExpanded,
            _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID;
          (0, _._)(_, _ ? _._._ : _._._, _.snr),
            _ && _() && _().AddEvent(_._._),
            window.setTimeout(
              () =>
                this.setState({
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: _ ? "0vh" : "100vh",
                  },
                }),
              10,
            ),
            _ ||
              this.setState(
                {
                  bExpanded: !this.state.bExpanded,
                },
                () =>
                  _._.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState(
              {
                bExpanded: !1,
              },
              () => _._.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(_) {
          this.setState({
            bStartMuted: !1,
          }),
            _._.Get().GetPlayReadyStream(this.props).accountid != _.accountid &&
              (await _._.Get().AttemptToPlayStream(this.props, _));
        }
        async PlayNextNonVOD() {
          this.setState({
            bStartMuted: !1,
          });
          const _ = _._.Get()
            .GetStreams(this.props)
            .filter(
              (_) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(_),
            );
          await _._.Get().PlayFromAvailableStreams(this.props, _, !0);
        }
        ConstructSidePanels(_, _) {
          let _ = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return _;
          const _ = _._.Get().GetConcurrentStreams(this.props) > 1;
          let _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
            _ = (0, _.jsx)(
              _,
              {
                ImgUrl: _.right_panel,
              },
              "right" + _,
            ),
            _ = (0, _.jsx)(
              _,
              {
                ImgUrl: _.left_panel,
              },
              "left" + _,
            );
          if (_ < 11) {
            const _ = _._.GetAppIDListForBroadcasterSteamID(_.steamid);
            _ && 1 === _.length && (_ = _[0]);
          }
          return (
            !(
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
              _ >= 11
            ) ||
              (this.props.event &&
                this.props.event.jsondata.broadcast_force_banner) ||
              ((_ = (0, _.jsx)(
                _,
                {
                  appid: _,
                },
                "mini" + _.accountid,
              )),
              (_.bRightPanelArtworkOrEmpty = !1)),
            _ && !_
              ? ((_.leftPanel = (0, _.jsx)(
                  _,
                  {
                    broadcastEmbedContext: this.props,
                    curStream: _,
                    onStreamSelect: this.onStreamSelect,
                    fnFilterStreams: this.props.fnFilterStreams,
                    bShowCapsuleArt: this.props.bShowCapsuleArt,
                  },
                  "selector" + _,
                )),
                (_.rightPanel = _))
              : _
                ? ((_.leftPanel = (0, _.jsx)("div", {})),
                  (_.rightPanel = (0, _.jsx)(_, {
                    stream: _,
                    orientation: "rightside",
                  })),
                  (_.bRightPanelArtworkOrEmpty = !1))
                : ((_.leftPanel = _), (_.rightPanel = _)),
            _
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0), _() && _().AddEvent(_._._));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let _ = _._.Get().GetPlayReadyStream(this.props);
          if (_) {
            this.MarkBroadcastSeen();
            let _ = "show" === _._.Get().GetChatVisibility();
            const {
              event: _,
              language: _,
              fnRenderBroadcastContext: _,
            } = this.props;
            _ &&
              (_ = {
                ..._,
                left_panel: __webpack_require__.GetImageURL(
                  "broadcast_left",
                  _ || (0, _.sfN)(_._.LANGUAGE),
                ),
                right_panel: __webpack_require__.GetImageURL(
                  "broadcast_right",
                  _ || (0, _.sfN)(_._.LANGUAGE),
                ),
                store_title: __webpack_require__.GetBroadcastTitle(
                  _ || (0, _.sfN)(_._.LANGUAGE),
                ),
                broadcast_chat_visibility:
                  __webpack_require__.GetBroadcastChatVisibility(),
              });
            let _ = this.ConstructSidePanels(_, _),
              _ = _.store_title ? _.store_title : _.title,
              _ = _._.Get().GetConcurrentStreams(this.props) > 1;
            const _ = () => {
              var _, _;
              _.nAppIDVOD && this.PlayNextNonVOD(),
                null === (_ = (_ = this.props).fnOnVideoEnd) ||
                  void 0 === _ ||
                  __webpack_require__.call(_);
            };
            return (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)("div", {
                className: "broadcast_embed_top_ctn_trgt",
                style: this.state.style,
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)({
                      [_().bordered_container]: !0,
                      [_().Event]: Boolean(_),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                    children: [
                      (0, _.jsxs)("div", {
                        className: (0, _._)(
                          _().bordered_title,
                          "bordered_title_trgt",
                        ),
                        children: [
                          (0, _.jsx)(_._, {}),
                          (0, _.jsx)("div", {
                            className: _().streamTitle,
                            children: _,
                          }),
                          (0, _.jsxs)("div", {
                            className: _().bordered_corner_container,
                            children: [
                              Boolean(!this.state.bExpanded) &&
                                (0, _.jsx)(_._, {
                                  toolTipContent: (0, _._)(
                                    "#StoreBroadcast_Change_store_Broadcast_settings",
                                  ),
                                  children: (0, _.jsx)("div", {
                                    className: _().broadcast_settings_icon,
                                    onClick: () =>
                                      window.open(
                                        `${_._.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                      ),
                                  }),
                                }),
                              (0, _.jsx)(_._, {
                                toolTipContent: (0, _._)(
                                  "#StoreBroadcast_Hide_Tooltip",
                                ),
                                children: (0, _.jsx)("div", {
                                  className: this.state.bExpanded
                                    ? _().bordered_corner_expanded
                                    : _().bordered_corner_shrinked,
                                  onClick: this.ToggleBroadcastExpandShrink,
                                }),
                              }),
                            ],
                          }),
                          Boolean(_.gamedata_subtitle) &&
                            (0, _.jsx)("div", {
                              className: _().bordered_subtitle,
                              children: _.gamedata_subtitle,
                            }),
                        ],
                      }),
                      Boolean(this.state.bExpanded) &&
                        (0, _.jsxs)("div", {
                          className: (0, _._)({
                            [_().container]: !0,
                            embeddable_ctn_trgt: !0,
                            multistream: _,
                            broadcast_right_panel_simple:
                              _.bRightPanelArtworkOrEmpty,
                            broadcast_chat_expanded: _,
                          }),
                          style: {
                            ...this.state.innerStyle,
                          },
                          onTransitionEnd: this.OnShrinkTransitionEnd,
                          children: [
                            (0, _.jsx)("div", {
                              className: _().LeftPanelCtn,
                              children: _.leftPanel,
                            }),
                            (0, _.jsx)(_, {
                              stream: _,
                              bStartMuted: this.state.bStartMuted,
                              fnRenderBroadcastContext: _,
                              fnOnVideoEnd: _,
                              bWidePlayer: this.props.bWidePlayer,
                            }),
                            (0, _.jsx)("div", {
                              className: _().RightPanelCtn,
                              children: _.rightPanel,
                            }),
                            Boolean(this.state.bExpanded) &&
                              (0, _.jsx)(_, {
                                stream: _,
                                bMultistream: _,
                                chatAnnouncementGivewayGID: _.rightPanel
                                  ? void 0
                                  : this.props.chat_announcement_giveaway,
                              }),
                          ],
                        }),
                    ],
                  }),
                  Boolean(
                    _ && _.jsondata && _.jsondata.broadcast_item_drops_enabled,
                  ) &&
                    (0, _.jsx)(_, {
                      event: _,
                    }),
                  (0, _.jsx)("div", {
                    className: _().clear_div,
                  }),
                ],
              }),
            });
          }
          return (0, _.jsx)("div", {
            className: "NoBroadcastAvailable",
          });
        }
      };
      (0, _._)([_._], _.prototype, "ToggleBroadcastExpandShrink", null),
        (0, _._)([_._], _.prototype, "OnShrinkTransitionEnd", null),
        (0, _._)([_._], _.prototype, "onStreamSelect", null),
        (0, _._)([_._], _.prototype, "PlayNextNonVOD", null),
        (_ = (0, _._)([_._], _));
      class _ extends _.Component {
        constructor(_) {
          super(_),
            (this.m_iVideoContainerRef = _.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const _ = _._.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, _._)(_, _._._, this.props.stream.snr),
            _() && _().AddEvent(_._._),
            this.setState({
              bPopout: !1,
              bPreventPopup: !0,
            });
        }
        OnEnter() {
          !this.state.bPreventPopup &&
            this.state.bPopout &&
            this.setState({
              bPopout: !1,
            });
        }
        OnLeave() {
          this.state.bPreventPopup ||
            this.state.bPopout ||
            this.setState({
              bPopout: !0,
            });
        }
        render() {
          return (0, _.jsx)("div", {
            className: _().wrapper,
            children: (0, _.jsx)(_._, {
              onEnter: this.OnEnter,
              onLeave: this.OnLeave,
              onIntersectionChange: (_) => {
                _.isIntersecting || this.OnLeave();
              },
              className: (0, _._)({
                [_().video_placeholder]: !0,
                video_placeholder_trgt: !0,
                [_().WidePlayer]: this.props.bWidePlayer,
              }),
              ref: this.m_iVideoContainerRef,
              children: (0, _.jsxs)("div", {
                className: this.state.bPopout
                  ? _().broadcast_floating
                  : _().video_container,
                children: [
                  this.state.bPopout &&
                    (0, _.jsx)(_, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  (0, _.jsx)("div", {
                    className: _().BroadcastPlayerContainer,
                    children: (0, _.jsx)(_.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation: _._._,
                      bStartMuted: this.props.bStartMuted,
                      fnRenderBroadcastContext:
                        this.props.fnRenderBroadcastContext,
                      fnOnVideoEnd: this.props.fnOnVideoEnd,
                      nAppIDVOD: this.props.stream.nAppIDVOD,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
      }
      function _(_) {
        const { stream: _ } = _,
          [_] = (0, _._)(() => [_.steamid]),
          _ = _._.GetOrCreateBroadcastInfo(_).m_nAppID,
          _ = _.list.find(
            (_) =>
              _.appid == _ &&
              (!_.broadcasterAccountID ||
                _.broadcasterAccountID == _.accountid),
          );
        if (_) {
          let _ = _.url;
          return (
            (_._.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (_ = "steam://openurl/" + _),
            (0, _.jsx)("a", {
              href: _,
              children: (0, _._)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            })
          );
        }
        {
          const _ = _._.COMMUNITY_BASE_URL + "broadcast/watch/" + _;
          return (0, _.jsx)(_._, {
            toolTipContent: (0, _._)("#BroadcastWatch_View_Broadcast_Page"),
            children: (0, _.jsx)("a", {
              href: _,
              className: _().external_link,
              children: (0, _.jsx)(_.GrD, {}),
            }),
          });
        }
      }
      (0, _._)([_._], _.prototype, "CloseBroadcastPopup", null),
        (0, _._)([_._], _.prototype, "OnEnter", null),
        (0, _._)([_._], _.prototype, "OnLeave", null);
      let _ = class extends _.Component {
        OnToggleChat(_) {
          _.preventDefault();
          const _ = _._.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, _._)(
            _,
            "show" === _._.Get().GetChatVisibility() ? _._._ : _._._,
            this.props.stream.snr,
          ),
            _._.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const _ = _._.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, _._)(_, _._._, this.props.stream.snr);
        }
        render() {
          const _ = "remove" != _._.Get().GetChatVisibility(),
            _ = "hide" === _._.Get().GetChatVisibility(),
            _ = !this.props.stream.nAppIDVOD,
            _ = _;
          let _ = Number.parseInt(
            "" +
              _._.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().viewer_bar, "viewer_bar"),
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_().viewer_count, "viewer_count"),
                children: [(0, _.jsx)(_.y_e, {}), (0, _._)(_)],
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().viewer_links, "viewer_links"),
                children: [
                  Boolean(_ && !_ && this.props.bMultistream) &&
                    (0, _.jsx)("div", {
                      className: _().chat_link,
                      children: (0, _.jsx)("a", {
                        href: "#",
                        className: _().ChatToggle,
                        onClick: this.OnToggleChat,
                        children: (0, _._)("#sale_three_section_show_streams"),
                      }),
                    }),
                  _ &&
                    (0, _.jsxs)("div", {
                      className: _().chat_link,
                      children: [
                        (0, _.jsx)(_.ROZ, {}),
                        (0, _.jsx)("a", {
                          href: "#",
                          className: _().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, _._)(
                            _
                              ? "#sale_three_section_show_chat"
                              : "#sale_three_section_hide_chat",
                          ),
                        }),
                      ],
                    }),
                  _ &&
                    (0, _.jsxs)("div", {
                      className: _().chat_link,
                      children: [
                        (0, _.jsx)(_.SYj, {}),
                        (0, _.jsx)("a", {
                          href: "#",
                          className: _().ChatToggle,
                          onClick: (_) =>
                            (0, _._)(
                              (0, _.jsx)(_, {
                                steamid: this.props.stream.steamid,
                              }),
                              (0, _._)(_),
                            ),
                          children: (0, _._)("#Broadcast_ShareBroadcast"),
                        }),
                      ],
                    }),
                  (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)(
                      "#StoreBroadcast_Change_store_Broadcast_settings",
                    ),
                    children: (0, _.jsx)("a", {
                      href:
                        _._.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: _._.IN_CLIENT ? void 0 : "_blank",
                      className: _().settings_link,
                      children: (0, _.jsx)(_.wB_, {}),
                    }),
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      ...this.props,
                    }),
                ],
              }),
              Boolean(this.props.chatAnnouncementGivewayGID) &&
                (0, _.jsx)(_._, {
                  gidGiveaway: this.props.chatAnnouncementGivewayGID,
                  stream: this.props.stream,
                }),
            ],
          });
        }
      };
      (0, _._)([_._], _.prototype, "OnToggleChat", null),
        (0, _._)([_._], _.prototype, "onWatchBroadcastPage", null),
        (_ = (0, _._)([_._], _));
      class _ extends _.Component {
        render() {
          let _ = this.props.ImgUrl;
          return (0, _.jsxs)("div", {
            className: _().SidePanelBackground,
            children: [
              _ &&
                (0, _.jsx)("img", {
                  className: _().side_panels,
                  src: this.props.ImgUrl,
                }),
              !_ &&
                (0, _.jsx)("div", {
                  className: _().side_panels,
                }),
            ],
          });
        }
      }
      const _ = (0, _._)((_) => {
        const { steamIDBroadcast: _ } = _;
        let _ = _._.GetOrCreateBroadcastInfo(_).m_nAppID;
        _ = _ != _._ ? _ : 0;
        const _ = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return (0, _.jsxs)("div", {
          className: [_().PopOutVideoTitleBar, _().NoSeslect].join(" "),
          children: [
            Boolean(_)
              ? (0, _.jsx)(_._, {
                  _: _,
                  className: _().PopOutVideoTitleText,
                  children: (0, _._)("#StoreBroadcast_Detault_popout_Title"),
                })
              : (0, _.jsx)("div", {
                  className: _().PopOutVideoTitleText,
                  children: (0, _._)("#StoreBroadcast_Detault_popout_Title"),
                }),
            (0, _.jsx)(_._, {
              toolTipContent: (0, _._)("#StoreBroadcast_close_broadcast_popup"),
              children: (0, _.jsx)("button", {
                className: _().PopOutVideoCloseButton,
                onClick: _.OnPreventPopup,
                children: (0, _.jsx)(_._, {}),
              }),
            }),
          ],
        });
      });
      function _(_, _) {
        var _;
        const _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
          _ = _._.Get().GetApp(_);
        return _ &&
          (null === (_ = null == _ ? void 0 : _.GetAssets()) || void 0 === _
            ? void 0
            : __webpack_require__.GetHeaderURL())
          ? parseInt(_().strStreamIconCapsuleArtHeight)
          : parseInt(_().strStreamIconScreenshotArtHeight);
      }
      function _(_) {
        const {
            curStream: _,
            onStreamSelect: _,
            fnFilterStreams: _,
            bShowCapsuleArt: _,
            broadcastEmbedContext: _,
          } = _,
          _ = (0, _.useRef)(void 0),
          _ = (0, _.useMemo)(() => {
            const _ = _._.Get()
              .GetStreams(_)
              .filter((_) => !_ || _(_));
            return (0, _._)(_), _;
          }, [_, _]);
        return (
          (0, _.useEffect)(() => {
            if (_ && _.current) {
              const _ = _.map(
                (_) => _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
              ).filter(Boolean);
              _._.Get()
                .QueueMultipleAppRequests(_, {
                  include_assets: !0,
                })
                .then(() => {
                  if (_.current) {
                    let _ = 0;
                    for (const _ of _) {
                      if (_.accountid == _.accountid) break;
                      _ += _(_, _);
                    }
                    _.current.scrollTop = _;
                  }
                });
            }
          }, [_, _, _.accountid, _]),
          (0, _.jsx)("div", {
            ref: _,
            className: (0, _._)({
              [_().side_panels]: !0,
              side_panels: !0,
              [_().multistream]: !0,
              [_().scrollingstreams]: _.length > 3,
            }),
            children: (0, _.jsx)("div", {
              className: _().MultiStreamCtn,
              children: _.map((_) => {
                var _;
                return (0, _.jsx)(
                  _,
                  {
                    stream: _,
                    bSelected: _.accountid == _.accountid,
                    onStreamSelect: _,
                    bShowCapsuleArt: _,
                  },
                  null !== (_ = _.accountid) && void 0 !== _ ? _ : _.steamid,
                );
              }),
            }),
          })
        );
      }
      function _(_) {
        const {
          onStreamSelect: _,
          bSelected: _,
          stream: _,
          bShowCapsuleArt: _,
        } = _;
        let _ = (0, _._)(
          () => _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
        );
        _ = _ != _._ ? _ : 0;
        const _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        if (!(0, _._)(_)) return null;
        const _ = _ && _ && (0, _._)(_, "header"),
          _ = Number.parseInt("" + _.viewer_count),
          _ = !Number.isNaN(_),
          _ = !!_.nAppIDVOD && (null == _ ? void 0 : _.name);
        return (0, _.jsxs)("div", {
          className: (0, _._)({
            [_().stream_icon_and_viewer_container]: !0,
            [_().stream_featured]:
              _.current_selection_priority == _._.k_eFeatured,
            [_().display_capsule_art]: Boolean(_),
          }),
          children: [
            (0, _.jsx)(_._, {
              _: _,
              hoverClassName: _().StreamCapsule,
              children: (0, _.jsx)(_._, {
                className: (0, _._)(
                  _().stream_icon_container,
                  _ && _().stream_selected,
                ),
                onClick: () => _ && _(_),
                rootMargin: "100px 0px 100px 0px",
                children: (0, _.jsx)(_, {
                  strThumbnail: _.thumbnail_http_address,
                  bSelected: _,
                  strCapsuleArtURL: _,
                }),
              }),
            }),
            (0, _.jsx)("div", {
              className: (0, _._)(_().viewer_count, !_ && _().vod_title),
              children: _
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_.y_e, {}),
                      (0, _.jsx)("div", {
                        className: _().ViewerNum,
                        children: (0, _._)(_),
                      }),
                    ],
                  })
                : _,
            }),
          ],
        });
      }
      function _(_) {
        const { strCapsuleArtURL: _, strThumbnail: _, bSelected: _ } = _,
          _ = _ ? _().stream_icon_selected : _().stream_icon;
        if (_) {
          const _ = [_];
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("img", {
                className: (0, _._)(_, _().stream_icon_hide_on_hover),
                src: _,
              }),
              (0, _.jsx)(_._, {
                className: (0, _._)(_, _().stream_icon_show_on_hover),
                srcs: _,
              }),
            ],
          });
        }
        return (0, _.jsx)("img", {
          className: _,
          src: _,
        });
      }
      function _(_) {
        const { stream: _, orientation: _ } = _,
          _ = "below" == _,
          [_, _] = (0, _._)(() => {
            var _;
            return [
              _._.GetBroadcast(_.steamid),
              null === (_ = _._.GetBroadcast(_.steamid)) || void 0 === _
                ? void 0
                : _.m_ulBroadcastID,
            ];
          }),
          _ = (0, _._)(() => _.steamid);
        return _
          ? (0, _.jsx)("div", {
              className: (0, _._)({
                [_().chat_below_container]: _,
                [_().chat_rightside_container]: !_,
                [_().store_chat_ctn]: !0,
              }),
              children: (0, _.jsx)("div", {
                className: _().ChatContainer,
                children: (0, _.jsx)(_._, {
                  emoticonStore: _._,
                  watchLocation: _._._,
                  steamID: _,
                  broadcastID: _,
                }),
              }),
            })
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        __webpack_require__._ +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      function _(_) {
        if (void 0 === _)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return _;
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
  },
]);
