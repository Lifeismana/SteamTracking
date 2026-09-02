(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [2995],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            Init_LibraryLogoEditor: () => _,
            LogoEditor: () => _,
            LogoEditorPopup: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid");
        const _ = "Play",
          _ = "Launch",
          _ = "Cancel",
          _ = "Stop",
          _ = "Pause",
          _ = "Resume",
          _ = "Download",
          _ = "Update",
          _ = "PreLoad",
          _ = "Install",
          _ = "Uninstall",
          _ = "RemoveShortcut",
          _ = "BorrowApp",
          _ = "PurchaseApp",
          _ = "GameProperties",
          _ = "CreateDesktopShortcut",
          _ = "BackUpFiles",
          _ = "Stream",
          _ = "Connect",
          _ = "PlayMusic",
          _ = "BrowseLocalFiles",
          _ = "Launching",
          _ = "Terminating",
          _ = "ResumeGameInProgress",
          _ = 75,
          _ = 100,
          _ = 250,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 4,
          _ = 8,
          _ = 16,
          _ = 32,
          _ = 64,
          _ = 128,
          _ = 256,
          _ = 512,
          _ = 1024,
          _ = 2048,
          _ = 4096,
          _ = 8192,
          _ = 16384,
          _ = 32768,
          _ = 65536,
          _ = 131072,
          _ = 262144,
          _ = 524288,
          _ = 1048576,
          _ = 2097152,
          _ = "UpperLeft",
          _ = "BottomLeft",
          _ = "UpperCenter",
          _ = "CenterCenter",
          _ = "BottomCenter",
          _ = null,
          _ = void 0;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        const _ = {
            exit: _().FullscreenExitStart,
            exitActive: _().FullscreenExitActive,
            exitDone: _().FullscreenExitDone,
            enter: _().FullscreenEnterStart,
            enterDone: _().FullscreenEnterDone,
            enterActive: _().FullscreenEnterActive,
          },
          _ = (0, _._)(_()["duration-app-launch"]),
          _ = {
            pinnedPosition: _,
            nWidthPct: 50,
            nHeightPct: 50,
          },
          _ = _.createContext({
            bFullscreen: !1,
          });
        class _ extends _.Component {
          m_refTopCapsule = _.createRef();
          constructor(_) {
            super(_),
              (this.state = {
                logoPosition: void 0,
              });
          }
          componentDidUpdate(_) {
            (_.appid != this.props.appid ||
              _.editMode != this.props.editMode) &&
              this.setState({
                logoPosition: void 0,
              });
          }
          get background_src() {
            return (
              this.m_refTopCapsule.current &&
              this.m_refTopCapsule.current.background_src
            );
          }
          get logo_src() {
            return (
              this.m_refTopCapsule.current &&
              this.m_refTopCapsule.current.logo_src
            );
          }
          GetLogoPosition() {
            return this.state.logoPosition || this.props.logoPosition || _;
          }
          SetPinnedPosition(_) {
            this.setState(
              {
                logoPosition: {
                  ...this.GetLogoPosition(),
                  pinnedPosition: _,
                },
              },
              this.PostPositionChangeCallback,
            );
          }
          SetDimensions(_, _) {
            this.setState(
              {
                logoPosition: {
                  ...this.GetLogoPosition(),
                  nWidthPct: _,
                  nHeightPct: _,
                },
              },
              this.PostPositionChangeCallback,
            );
          }
          OnPositionChanged(_) {
            this.SetDimensions(_.nWidthPct, _.nHeightPct);
          }
          PostPositionChangeCallback() {
            this.props.fnOnPositionChanged &&
              this.props.fnOnPositionChanged(this.GetLogoPosition());
          }
          render() {
            if (!this.props.editMode)
              return (0, _.jsx)(_.Provider, {
                value: {
                  bFullscreen: this.props.bFullscreen,
                },
                children: (0, _.jsx)(_, {
                  ref: this.m_refTopCapsule,
                  ...this.props,
                }),
              });
            const {
                children: _,
                logoPosition: _,
                editMode: _,
                ..._
              } = this.props,
              _ = this.GetLogoPosition();
            return (0, _.jsx)(_.Provider, {
              value: {
                bFullscreen: this.props.bFullscreen,
              },
              children: (0, _.jsxs)(_, {
                ref: this.m_refTopCapsule,
                ..._,
                editMode: !0,
                logoPosition: _,
                fnOnPositionChanged: this.OnPositionChanged,
                children: [
                  (0, _.jsx)("div", {
                    className: `${_().PinBox} ${_().BottomLeft}`,
                    onClick: () => this.SetPinnedPosition(_),
                    title: "Pin to Bottom Left",
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().PinBox} ${_().UpperCenter}`,
                    onClick: () => this.SetPinnedPosition(_),
                    title: "Pin to Top Center",
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().PinBox} ${_().CenterCenter}`,
                    onClick: () => this.SetPinnedPosition(_),
                    title: "Pin to Center",
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().PinBox} ${_().BottomCenter}`,
                    onClick: () => this.SetPinnedPosition(_),
                    title: "Pin to Bottom Center",
                  }),
                  _,
                ],
              }),
            });
          }
        }
        _([_._], _.prototype, "SetDimensions", 1),
          _([_._], _.prototype, "OnPositionChanged", 1),
          _([_._], _.prototype, "PostPositionChangeCallback", 1);
        let _ = class extends _.Component {
          m_refBackgroundImage = _.createRef();
          m_refLogoImage = _.createRef();
          constructor(_) {
            super(_),
              (0, _._)(
                !_.editMode || _.rgLogoImages.length <= 1,
                "Can't use multiple logo images in edit mode",
              ),
              (this.state = {
                bHasHeaderImage: _.rgHeaderImages.length > 0,
                bHasLogoImage: _.rgLogoImages.length > 0,
                bLogoLoaded: !1,
              });
          }
          componentDidUpdate(_) {
            let _ = null;
            (JSON.stringify(_.rgHeaderImages) !=
              JSON.stringify(this.props.rgHeaderImages) ||
              JSON.stringify(_.rgBlurImages) !=
                JSON.stringify(this.props.rgBlurImages)) &&
              ((_ = _ || {}),
              (_.bHasHeaderImage = this.props.rgHeaderImages.length > 0)),
              JSON.stringify(_.rgLogoImages) !=
                JSON.stringify(this.props.rgLogoImages) &&
                ((_ = _ || {}),
                (_.bHasLogoImage = this.props.rgLogoImages.length > 0),
                (_.bLogoLoaded = !1)),
              _ && this.setState(_);
          }
          OnHeaderError() {
            this.setState({
              bHasHeaderImage: !1,
            }),
              this.props.fnOnLoaded && this.props.fnOnLoaded();
          }
          OnIncrementalLogoError(_, _, _) {
            this.props.fnReportLogoCacheMiss &&
              this.props.fnReportLogoCacheMiss(this.props.appid, _),
              this.props.fnOnLoaded && this.props.fnOnLoaded();
          }
          OnLogoError() {
            this.setState(
              {
                bHasLogoImage: !1,
              },
              () => {
                this.props.fnOnLogoLoaded && this.props.fnOnLogoLoaded();
              },
            );
          }
          OnLogoLoad() {
            this.setState(
              {
                bLogoLoaded: !0,
              },
              () => {
                this.props.fnOnLogoLoaded && this.props.fnOnLogoLoaded();
              },
            );
          }
          OnLoaded() {
            this.props.fnOnLoaded && this.props.fnOnLoaded();
          }
          get background_src() {
            return (
              this.state.bHasHeaderImage &&
              this.m_refBackgroundImage.current &&
              this.m_refBackgroundImage.current.src
            );
          }
          get logo_src() {
            return (
              this.state.bLogoLoaded &&
              this.m_refLogoImage.current?.imgRef?.current?.src
            );
          }
          render() {
            const {
                rgLogoImages: _,
                editMode: _,
                logoPosition: _,
                className: _,
                classNameNoLogo: _,
                fnOnPositionChanged: _,
                height: _,
              } = this.props,
              { bHasLogoImage: _ } = this.state,
              _ = this.props.rgHeaderImages.length == 1,
              _ = (0, _._)(
                _().TopCapsule,
                _,
                !this.state.bHasHeaderImage && _().NoArt,
                (!this.props.hasHeroImage || _) && _().FallbackArt,
                !_ && _,
              ),
              _ = {
                "--header-height": _ == null ? void 0 : _ + "px",
              };
            return (0, _.jsx)(_._, {
              timeout: _,
              appear: !0,
              _: this.props.bFullscreen,
              classNames: _,
              children: (_) =>
                (0, _.jsxs)("div", {
                  ref: _,
                  className: _,
                  style: _,
                  children: [
                    (0, _.jsx)(_, {
                      ref: this.m_refBackgroundImage,
                      bLowPerfMode: this.props.bLowPerfMode,
                      appid: this.props.appid,
                      rgHeaderImages: this.props.rgHeaderImages,
                      rgBlurImages: this.props.rgBlurImages,
                      onReportHeroImageMiss: this.props.fnReportHeroImageMiss,
                      onError: this.OnHeaderError,
                      onLoad: this.OnLoaded,
                    }),
                    _ &&
                      _ !== _ &&
                      (0, _.jsx)(
                        _,
                        {
                          strLogoImageURL: _[0],
                          editMode: _,
                          logoPosition: _ || _,
                          fnOnPositionChanged: _ && _,
                          fullscreen: this.props.bFullscreen,
                          children: (0, _.jsx)(_._, {
                            ref: this.m_refLogoImage,
                            className: (0, _._)(
                              _().TitleLogo,
                              this.state.bLogoLoaded && _().Loaded,
                            ),
                            rgSources: _,
                            onLoad: this.OnLogoLoad,
                            onIncrementalError: this.OnIncrementalLogoError,
                            onError: this.OnLogoError,
                          }),
                        },
                        _[0],
                      ),
                    this.props.children,
                    (0, _.jsx)("div", {
                      className: _().TopGradient,
                    }),
                  ],
                }),
            });
          }
        };
        _([_._], _.prototype, "OnHeaderError", 1),
          _([_._], _.prototype, "OnIncrementalLogoError", 1),
          _([_._], _.prototype, "OnLogoError", 1),
          _([_._], _.prototype, "OnLogoLoad", 1),
          _([_._], _.prototype, "OnLoaded", 1),
          (_ = _([_._], _));
        class _ extends _.Component {
          m_refBackgroundImage = _.createRef();
          m_refCanvasBlurImage;
          constructor(_) {
            super(_),
              (this.state = {
                bBackgroundLoaded: !1,
                nBlurImageIndex: 0,
                bUseCanvasBlur: !this.HasBlurImages(),
              });
          }
          componentDidMount() {
            !this.HasHeaderImages() && this.props.onLoad && this.props.onLoad();
          }
          componentDidUpdate(_) {
            (_.appid != this.props.appid ||
              JSON.stringify(_.rgHeaderImages) !=
                JSON.stringify(this.props.rgHeaderImages) ||
              JSON.stringify(_.rgBlurImages) !=
                JSON.stringify(this.props.rgBlurImages) ||
              this.props.bLowPerfMode != _.bLowPerfMode) &&
              (this.setState({
                bBackgroundLoaded: !1,
                nBlurImageIndex: 0,
                bUseCanvasBlur: !this.HasBlurImages(),
              }),
              !this.HasHeaderImages() &&
                this.props.onLoad &&
                this.props.onLoad());
          }
          get src() {
            return (
              this.m_refBackgroundImage.current &&
              this.m_refBackgroundImage.current?.imgRef.current?.src
            );
          }
          OnIncrementalError(_, _, _) {
            this.props.onReportHeroImageMiss &&
              this.props.onReportHeroImageMiss(this.props.appid, _),
              this.HasBlurImages() &&
                this.setState({
                  nBlurImageIndex: this.state.nBlurImageIndex + 1,
                });
          }
          OnHeaderLoad() {
            this.props.onLoad && this.props.onLoad(),
              (this.m_refCanvasBlurImage =
                this.m_refBackgroundImage.current?.imgRef.current),
              (!this.HasBlurImages() ||
                !this.props.rgBlurImages[this.state.nBlurImageIndex]) &&
                this.setState({
                  bUseCanvasBlur: !0,
                }),
              this.setState({
                bBackgroundLoaded: !0,
              });
          }
          OnBlurImageFailed() {
            this.setState({
              bUseCanvasBlur: !0,
            });
          }
          HasHeaderImages() {
            let _ = this.props.rgHeaderImages;
            return _ && _.length > 0;
          }
          HasBlurImages() {
            let _ = this.props.rgBlurImages;
            return _ && _.length > 0;
          }
          render() {
            let _ = null;
            return (
              (_ = (0, _.jsxs)(_.Fragment, {
                children: [
                  !this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    this.props.rgBlurImages[this.state.nBlurImageIndex] &&
                    (0, _.jsx)("img", {
                      src: this.props.rgBlurImages[this.state.nBlurImageIndex],
                      className: (0, _._)(
                        _().ImgSrc,
                        _().ImgBlur,
                        _().ImgBlurBackdrop,
                      ),
                      onError: this.OnBlurImageFailed,
                    }),
                  this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    !this.props.bLowPerfMode &&
                    (0, _.jsx)(_._, {
                      className: (0, _._)(
                        _().ImgSrc,
                        _().ImgBlur,
                        _().ImgBlurBackdrop,
                      ),
                      elementRef: this.m_refCanvasBlurImage,
                      updateRate: 0,
                      width: 192,
                      height: 62,
                      reductionFactor: 10,
                      blurAmount: 3,
                    }),
                ],
              })),
              (0, _.jsx)(_.Consumer, {
                children: (_) =>
                  (0, _.jsx)(_._, {
                    timeout: _,
                    appear: !0,
                    _: _.bFullscreen,
                    classNames: _,
                    children: (_) =>
                      (0, _.jsxs)("div", {
                        ref: _,
                        className: (0, _._)(
                          _().HeaderBackgroundImage,
                          _().Glassy,
                        ),
                        children: [
                          !this.state.bUseCanvasBlur &&
                            this.state.bBackgroundLoaded &&
                            this.props.rgBlurImages[
                              this.state.nBlurImageIndex
                            ] &&
                            (0, _.jsx)("img", {
                              src: this.props.rgBlurImages[
                                this.state.nBlurImageIndex
                              ],
                              className: (0, _._)(_().ImgSrc, _().ImgBlur),
                              onError: this.OnBlurImageFailed,
                            }),
                          this.state.bUseCanvasBlur &&
                            this.state.bBackgroundLoaded &&
                            !this.props.bLowPerfMode &&
                            (0, _.jsx)(_._, {
                              className: (0, _._)(_().ImgSrc, _().ImgBlur),
                              elementRef: this.m_refCanvasBlurImage,
                              updateRate: 0,
                              width: 192,
                              height: 62,
                              reductionFactor: 10,
                              blurAmount: 3,
                            }),
                          (0, _.jsx)("div", {
                            className: _().ImgContainer,
                            children:
                              this.HasHeaderImages() &&
                              (0, _.jsx)(_._, {
                                ref: this.m_refBackgroundImage,
                                rgSources: this.props.rgHeaderImages,
                                className: _().ImgSrc,
                                onLoad: this.OnHeaderLoad,
                                onIncrementalError: this.OnIncrementalError,
                                onError: this.props.onError,
                              }),
                          }),
                          _,
                        ],
                      }),
                  }),
              })
            );
          }
        }
        _([_._], _.prototype, "OnIncrementalError", 1),
          _([_._], _.prototype, "OnHeaderLoad", 1),
          _([_._], _.prototype, "OnBlurImageFailed", 1);
        function _(_) {
          const {
              logoPosition: _,
              strLogoImageURL: _,
              children: _,
              fnOnPositionChanged: _,
              fullscreen: _,
            } = _,
            {
              nBottomPct: _,
              nTopPct: _,
              nLeftPct: _,
              nRightPct: _,
            } = _(_.pinnedPosition, _.nWidthPct, _.nHeightPct),
            _ = _.useContext(_),
            _ = {
              left: `${_}%`,
              top: `${_}%`,
              width: `${_.nWidthPct}%`,
              height: `${_.nHeightPct}%`,
            },
            _ = (0, _._)(_().BoxSizer, _()[_.pinnedPosition]);
          return (0, _.jsx)("div", {
            className: _().BoxSizerContainer,
            children: (0, _.jsxs)("div", {
              className: _().BoxSizerValidRegion,
              children: [
                !_.editMode &&
                  (0, _.jsx)("div", {
                    className: _,
                    style: _,
                    children: (0, _.jsx)(_._, {
                      timeout: _,
                      appear: !0,
                      _: _,
                      classNames: _,
                      children: (_) =>
                        (0, _.jsx)("div", {
                          ref: _,
                          className: _().TitleImageContainer,
                          children: _,
                        }),
                    }),
                  }),
                _.editMode &&
                  (0, _.jsx)(_, {
                    _: _,
                    pinType: _.pinnedPosition,
                    index: 0,
                    widthPct: _.nWidthPct,
                    heightPct: _.nHeightPct,
                    fnOnPositionChanged: _,
                    children: _,
                  }),
              ],
            }),
          });
        }
        function _(_, _, _) {
          let _, _, _, _;
          switch (_) {
            case _:
              (_ = 0), (_ = 100 - _), (_ = 0), (_ = 100 - _);
              break;
            case _:
              (_ = 100 - _), (_ = 0), (_ = 0), (_ = 100 - _);
              break;
            case _:
              (_ = (100 - _) / 2),
                (_ = (100 - _) / 2),
                (_ = (100 - _) / 2),
                (_ = (100 - _) / 2);
              break;
            case _:
              (_ = 100 - _), (_ = 0), (_ = (100 - _) / 2), (_ = (100 - _) / 2);
              break;
            case _:
              (_ = 0), (_ = 100 - _), (_ = (100 - _) / 2), (_ = (100 - _) / 2);
              break;
            default:
              break;
          }
          return {
            nBottomPct: _,
            nTopPct: _,
            nLeftPct: _,
            nRightPct: _,
          };
        }
        var _ = ((_) => (
          (_.topleft = "Topleft"),
          (_.top = "Top"),
          (_.topright = "TopRight"),
          (_.left = "Left"),
          (_.middle = "Middle"),
          (_.right = "Right"),
          (_.bottomleft = "BottomLeft"),
          (_.bottom = "Bottom"),
          (_.bottomright = "BottomRight"),
          _
        ))(_ || {});
        class _ extends _.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new _._();
          m_pinType;
          constructor(_) {
            super(_), (this.state = {});
          }
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          componentDidUpdate() {
            this.props.pinType != this.state.pinType &&
              ((this.m_pinType = this.props.pinType),
              this.setState({
                pinType: this.props.pinType,
              }),
              this.UpdateBoxPosition());
          }
          static getDerivedStateFromProps(_, _) {
            const { pinType: _, widthPct: _, heightPct: _, _: _ } = _;
            if (_ && _._ == _) return null;
            const {
              nBottomPct: _,
              nTopPct: _,
              nLeftPct: _,
              nRightPct: _,
            } = _(_, _, _);
            return {
              _: _,
              curBottomPosPct: _,
              curTopPosPct: _,
              curLeftPosPct: _,
              curRightPosPct: _,
              curWidthPct: _,
              curHeightPct: _,
              EdgeDown: null,
              pinType: _,
            };
          }
          LinkRegionBoxRef(_) {
            this.m_elLinkRegionBox = _;
          }
          OnMouseDown(_, _) {
            (this.m_fnMouseUp = (_) => {
              this.OnMouseUp(_, _);
            }),
              (this.m_fnMouseMove = (_) => {
                this.OnMouseMove(_, _);
              }),
              this.setState({
                EdgeDown: _,
              }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((_.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((_.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              ),
              _.preventDefault(),
              _.stopPropagation();
          }
          UpdateBoxPosition() {
            const {
              nBottomPct: _,
              nTopPct: _,
              nLeftPct: _,
              nRightPct: _,
            } = _(
              this.m_pinType,
              this.state.curWidthPct,
              this.state.curHeightPct,
            );
            this.setState({
              curBottomPosPct: _,
              curTopPosPct: _,
              curLeftPosPct: _,
              curRightPosPct: _,
            });
          }
          OnMouseMove(_, _) {
            if (this.state.EdgeDown === void 0) return;
            _.shiftKey && this.m_fnMouseUp();
            let {
              curTopPosPct: _,
              curRightPosPct: _,
              curBottomPosPct: _,
              curLeftPosPct: _,
            } = this.state;
            const _ = (_) => {
                let _ =
                  ((_ - this.m_rectLinkRegion.left) /
                    (this.m_rectLinkRegion.right -
                      this.m_rectLinkRegion.left)) *
                    100 -
                  this.m_nLocalOffsetXPct;
                if (this.props.pinType == _ || this.props.pinType == _)
                  return 0;
                if (
                  this.props.pinType == _ ||
                  this.props.pinType == _ ||
                  this.props.pinType == _
                ) {
                  let _ = Math.min(Math.max(_, 0), 45);
                  return (_ = _), _;
                }
                return _;
              },
              _ = (_) => {
                let _ =
                  100 -
                  (((_ - this.m_rectLinkRegion.left) /
                    (this.m_rectLinkRegion.right -
                      this.m_rectLinkRegion.left)) *
                    100 +
                    (this.state.curWidthPct - this.m_nLocalOffsetXPct));
                if (
                  this.props.pinType == _ ||
                  this.props.pinType == _ ||
                  this.props.pinType == _
                ) {
                  let _ = Math.min(Math.max(_, 0), 45);
                  return (_ = _), _;
                }
                return _;
              },
              _ = (_) => {
                let _ =
                  ((_ - this.m_rectLinkRegion.top) /
                    (this.m_rectLinkRegion.bottom -
                      this.m_rectLinkRegion.top)) *
                    100 -
                  this.m_nLocalOffsetYPct;
                if (this.props.pinType == _ || this.props.pinType == _)
                  return 0;
                if (this.props.pinType == _) {
                  let _ = Math.min(Math.max(_, 0), 45);
                  return (_ = _), _;
                }
                return _;
              },
              _ = (_) => {
                let _ =
                  100 -
                  (((_ - this.m_rectLinkRegion.top) /
                    (this.m_rectLinkRegion.bottom -
                      this.m_rectLinkRegion.top)) *
                    100 +
                    (this.state.curHeightPct - this.m_nLocalOffsetYPct));
                if (this.props.pinType == _ || this.props.pinType == _)
                  return 0;
                if (this.props.pinType == _) {
                  let _ = Math.min(Math.max(_, 0), 45);
                  return (_ = _), _;
                }
                return _;
              };
            function _() {
              _ = Math.min(_, 98 - _);
            }
            function _() {
              _ = Math.min(_, 99 - _);
            }
            function _() {
              _ = Math.min(_, 98 - _);
            }
            function _() {
              _ = Math.min(_, 99 - _);
            }
            switch (_) {
              case "Left":
                (_ = _(_.clientX)), _();
                break;
              case "Right":
                (_ = _(_.clientX)), _();
                break;
              case "Top":
                (_ = _(_.clientY)), _();
                break;
              case "Bottom":
                (_ = _(_.clientY)), _();
                break;
              case "Topleft":
                (_ = _(_.clientY)), (_ = _(_.clientX)), _(), _();
                break;
              case "TopRight":
                (_ = _(_.clientY)), (_ = _(_.clientX)), _(), _();
                break;
              case "BottomLeft":
                (_ = _(_.clientY)), (_ = _(_.clientX)), _(), _();
                break;
              case "BottomRight":
                (_ = _(_.clientY)), (_ = _(_.clientX)), _(), _();
                break;
              case "Middle":
                (_ = _(_.clientX)),
                  (_ = _(_.clientY)),
                  this.state.pinType != _ && (_ = _(_.clientY)),
                  this.state.pinType != _ &&
                    this.state.pinType != _ &&
                    this.state.pinType != _ &&
                    (_ = _(_.clientX)),
                  _(),
                  _(),
                  _(),
                  _();
                break;
              default:
                break;
            }
            (_ = (0, _._)(_, 0, 98)),
              (_ = (0, _._)(_, 0, 98)),
              (_ = (0, _._)(_, 0, 99)),
              (_ = (0, _._)(_, 0, 99)),
              this.setState({
                curTopPosPct: _,
                curRightPosPct: _,
                curBottomPosPct: _,
                curLeftPosPct: _,
              }),
              _.preventDefault(),
              _.stopPropagation();
          }
          OnMouseUp(_, _) {
            this.setState(
              {
                curWidthPct:
                  100 - this.state.curRightPosPct - this.state.curLeftPosPct,
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              },
              this.OnResizeComplete,
            ),
              this.setState({
                EdgeDown: void 0,
              }),
              this.m_listeners.Unregister();
          }
          OnResizeComplete() {
            this.props.fnOnPositionChanged &&
              this.props.fnOnPositionChanged({
                pinnedPosition: this.state.pinType,
                nWidthPct: this.state.curWidthPct,
                nHeightPct: this.state.curHeightPct,
              });
          }
          render() {
            let _ = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              _ = (0, _._)(
                _().BoxSizerDragBox,
                this.state.EdgeDown &&
                  (0, _._)(_().EdgeDown, _()[this.state.EdgeDown]),
                _()[this.props.pinType],
              );
            return (0, _.jsx)("div", {
              className: _,
              style: _,
              ref: this.LinkRegionBoxRef,
              draggable: !1,
              children: (0, _.jsxs)("div", {
                className: _().BoxSizerGridBox,
                children: [
                  (0, _.jsx)("div", {
                    className: `${_().BoxSizerEdge} ${_().TopLeft}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, "Topleft");
                    },
                    draggable: !1,
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().BoxSizerEdge} ${_().Top}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, "Top");
                    },
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().BoxSizerEdge} ${_().TopRight}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, "TopRight");
                    },
                    draggable: !1,
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().BoxSizerEdge} ${_().Left}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, "Left");
                    },
                    draggable: !1,
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().BoxSizerEdge} ${_().Middle}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, "Middle");
                    },
                    draggable: !1,
                    children: (0, _.jsx)("div", {
                      className: _().TitleImageContainer,
                      children: this.props.children,
                    }),
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().BoxSizerEdge} ${_().Right}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, "Right");
                    },
                    draggable: !1,
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().BoxSizerEdge} ${_().BottomLeft}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, "BottomLeft");
                    },
                    draggable: !1,
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().BoxSizerEdge} ${_().Bottom}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, "Bottom");
                    },
                    draggable: !1,
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().BoxSizerEdge} ${_().BottomRight}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, "BottomRight");
                    },
                    draggable: !1,
                  }),
                ],
              }),
            });
          }
        }
        _([_._], _.prototype, "LinkRegionBoxRef", 1),
          _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "UpdateBoxPosition", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "OnResizeComplete", 1);
        const _ = (_) => {
          const { title: _, className: _ } = _;
          let _ = 300,
            _ = 14,
            _ = 26;
          _.length > 8 && (_ = Math.max(_ - (_.length - 5) / 2, 5.8));
          const [_, _] = (0, _._)();
          return (0, _.jsxs)("svg", {
            className: (0, _._)(_().SVGTitle, _),
            viewBox: "0 0 " + _ + " " + _,
            children: [
              (0, _.jsx)("defs", {
                children: (0, _.jsxs)("linearGradient", {
                  _: _,
                  _: "0",
                  _: "0",
                  _: "0",
                  _: "100%",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, _.jsx)("stop", {
                      stopColor: "#fff",
                      offset: "0%",
                    }),
                    (0, _.jsx)("stop", {
                      stopColor: "#fff",
                      offset: "20%",
                    }),
                    (0, _.jsx)("stop", {
                      stopColor: "#fff",
                      offset: "40%",
                    }),
                    (0, _.jsx)("stop", {
                      stopColor: "#eee",
                      offset: "60%",
                    }),
                    (0, _.jsx)("stop", {
                      stopColor: "#ddd",
                      offset: "80%",
                    }),
                    (0, _.jsx)("stop", {
                      stopColor: "#ccc",
                      offset: "100%",
                    }),
                  ],
                }),
              }),
              (0, _.jsx)("text", {
                _: "-1",
                _: _,
                fontSize: _,
                textAnchor: "bottom",
                fontWeight: "200",
                fill: _,
                children: _,
              }),
            ],
          });
        };
        function _(_) {
          const { title: _, children: _ } = _,
            _ = _.useContext(_),
            _ = _.useRef(null);
          return (0, _.jsx)(_._, {
            nodeRef: _,
            timeout: _,
            appear: !0,
            _: _.bFullscreen,
            classNames: _,
            children: (0, _.jsxs)("div", {
              ref: _,
              className: (0, _._)(_().TitleSection, _ ? _().NoLogo : ""),
              children: [
                (0, _.jsx)("div", {
                  className: _().TextNameSpace,
                  children:
                    !!_ &&
                    (0, _.jsx)(_, {
                      title: _,
                    }),
                }),
                (0, _.jsx)("div", {
                  className: _().Features,
                  children: _,
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
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
        class _ {
          m_strLibraryLogoURL;
          m_strLibraryHeroURL;
          m_unAppID;
          m_strAppName;
          m_logoPosition = void 0;
          m_strSaveURL;
          constructor(_) {
            (0, _._)(this),
              (this.m_strLibraryHeroURL = _.strLibraryHeroURL),
              (this.m_strLibraryLogoURL = _.strLibraryLogoURL),
              (this.m_unAppID = _.unAppID),
              (this.m_strAppName = _.strAppName),
              (this.m_logoPosition = _.logoPosition || _),
              (this.m_strSaveURL = _.strSaveURL || null),
              this.m_logoPosition.pinnedPosition ||
                (this.m_logoPosition.pinnedPosition = _.pinnedPosition),
              this.m_logoPosition.nHeightPct ||
                (this.m_logoPosition.nHeightPct = _.nHeightPct),
              this.m_logoPosition.nWidthPct ||
                (this.m_logoPosition.nWidthPct = _.nWidthPct);
          }
          GetHeroURL() {
            return this.m_strLibraryHeroURL;
          }
          GetLogoURL() {
            return this.m_strLibraryLogoURL;
          }
          GetAppID() {
            return this.m_unAppID;
          }
          GetAppName() {
            return this.m_strAppName;
          }
          GetLogoPosition() {
            return this.m_logoPosition;
          }
          SetLogoPosition(_) {
            this.m_logoPosition = _;
          }
          GetSaveURL() {
            return this.m_strSaveURL;
          }
        }
        _([_._], _.prototype, "m_logoPosition", 2);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _() {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("span", {
                style: {
                  fontSize: 0,
                },
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().Container),
                children: (0, _.jsxs)("div", {
                  className: _().Row,
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)("div", {
                      className: _().RightControls,
                      children: (0, _.jsxs)("div", {
                        className: _().AppButtonsContainer,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().MenuButton,
                            children: (0, _.jsx)(_.wB_, {}),
                          }),
                          (0, _.jsxs)("div", {
                            className: _().GameInfoButton,
                            children: [
                              "Game Info",
                              (0, _.jsx)("div", {
                                className: _().Arrow,
                                children: (0, _.jsx)(_.V5W, {
                                  angle: 180,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsx)("div", {
            className: (0, _._)(_().StatusAndStats),
            children: (0, _.jsx)(_, {}),
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: _().GameStatsSection,
            children: [
              (0, _.jsx)("div", {
                className: _().LastPlayed,
                children: (0, _.jsxs)("div", {
                  className: _().LastPlayedRight,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().LastPlayedLabel,
                      children: "LAST PLAYED",
                    }),
                    (0, _.jsx)("div", {
                      className: _().LastPlayedInfo,
                      children: "Mar 24",
                    }),
                  ],
                }),
              }),
              (0, _.jsxs)("div", {
                className: _().Playtime,
                children: [
                  (0, _.jsx)("div", {
                    className: _().PlaytimeLeft,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().PlaytimeRight,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().PlaytimeLabel,
                        children: "PLAY TIME",
                      }),
                      (0, _.jsx)("div", {
                        className: _().PlaytimeInfo,
                        children: "37 hours",
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _().MiniAchievements,
                children: [
                  (0, _.jsx)("div", {
                    className: _().AchievementLeft,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().AchievementRight,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().AchievementLabel,
                        children: "ACHIEVEMENTS",
                      }),
                      (0, _.jsxs)("div", {
                        className: _().AchievementProgressRow,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().AchievementCountLabel,
                            children: "30/47",
                          }),
                          (0, _.jsx)(_, {
                            progressPct: 3e3 / 47,
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
        class _ extends _.Component {
          render() {
            return (0, _.jsx)("div", {
              className: _().DetailsProgressContainer,
              children: (0, _.jsx)("div", {
                className: _().DetailsProgressBar,
                style: {
                  width: this.props.progressPct + "%",
                },
              }),
            });
          }
        }
        function _() {
          return (0, _.jsx)("div", {
            className: _().ActionSection,
            children: (0, _.jsx)("div", {
              className: _().PlayButtonContainer,
              children: (0, _.jsx)("div", {
                className: (0, _._)(_().PlayButton, _().Green),
                children: (0, _.jsx)("div", {
                  className: _().ButtonText,
                  children: "PLAY",
                }),
              }),
            }),
          });
        }
        function _() {
          return jsxs("div", {
            className: styles.RecentlyUpdated,
            children: [
              jsx("div", {
                className: styles.RecentlyUpdatedIcon,
              }),
              jsx("div", {
                className: styles.RecentlyUpdatedText,
                children: "This game has been updated since you last played",
              }),
              jsx("div", {
                className: styles.RecentlyUpdatedLink,
                children: "Read about the changes",
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = JSON.parse(
          `["Apex Legends\u2122","Baldur's Gate 3","Battlefield\u2122 6","Black Desert","Black Myth: Wukong","Borderlands 4","Clair Obscur: Expedition 33","Counter-Strike 2","Cronos: The New Dawn","Crusader Kings III","Cyberpunk 2077","Dead by Daylight","Delta Force","Destiny 2","Dota 2","Dune: Awakening","Dying Light: The Beast","EA SPORTS FC\u2122 26","ELDEN RING","ELDEN RING NIGHTREIGN","Euro Truck Simulator 2","F1\xAE 25","FINAL FANTASY XIV Online","Forza Horizon 5","Grand Theft Auto V Enhanced","Grounded 2","HELLDIVERS\u2122 2","Hollow Knight","Hollow Knight: Silksong","Killing Floor 3","Kingdom Come: Deliverance II","Limbus Company","Lost Ark","METAL GEAR SOLID \u0394: SNAKE EATER","Madden NFL 26","Mafia: The Old Country","Mage Arena","Magic: The Gathering Arena","Marvel Rivals","NARAKA: BLADEPOINT","NBA 2K26","No Man's Sky","Once Human","Overwatch\xAE 2","PEAK","PUBG: BATTLEGROUNDS","Path of Exile 2","R.E.P.O.","Ready or Not","Red Dead Redemption 2","RimWorld","Rust","Schedule I","Shape of Dreams","Split Fiction","Stardew Valley","Street Fighter\u2122 6","THE FINALS","THRONE AND LIBERTY","Team Fortress 2","The Elder Scrolls\xAE Online","The First Descendant","The Sims\u2122 4","Titan Quest II","Tom Clancy's Rainbow Six\xAE Siege X","Umamusume: Pretty Derby","WUCHANG: Fallen Feathers","Wallpaper Engine","War Thunder","Warframe","Warhammer 40,000: Dawn of War - Definitive Edition","Warhammer 40,000: Space Marine 2","Wuthering Waves","Yu-Gi-Oh! Master Duel","\u96C0\u9B42\u9EBB\u5C07(MahjongSoul)"]`,
        );
        function _(_) {
          const { highlightedName: _ } = _,
            _ = _.useCallback((_) => {
              _ &&
                _.scrollIntoView({
                  block: "center",
                });
            }, []),
            _ = _.useMemo(() => {
              if (_.indexOf(_) !== -1) return _;
              {
                const _ = [..._, _];
                return _.sort(), _;
              }
            }, [_]);
          return (0, _.jsx)("div", {
            className: _().GameList,
            children: _.map((_) => {
              let _ = _ === _;
              return (0, _.jsx)(
                "div",
                {
                  className: (0, _._)(
                    _().GameListEntry,
                    _ ? _().Selected : _().Uninstalled,
                  ),
                  ref: _ ? _ : void 0,
                  children: _,
                },
                _,
              );
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
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
        function _(_, _) {
          const _ = (0, _._)("editorconfig", _);
          let _ = new _(_);
          _.createRoot(_).render(
            _.createElement(_ ? _ : _, {
              LogoEditorStore: _,
            }),
          );
        }
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                saving: !1,
                saved: !1,
                unsavedChanges: !1,
              });
          }
          componentDidMount() {
            window.addEventListener("beforeunload", this.OnBeforeUnload);
          }
          componentWillUnmount() {
            window.removeEventListener("beforeunload", this.OnBeforeUnload);
          }
          OnBeforeUnload(_) {
            this.state.unsavedChanges &&
              (_.preventDefault(),
              (_.returnValue =
                "You have unsaved changes.  Are you sure you want to close this window?"));
          }
          async OnOK() {
            if (this.state.saving) return;
            const { LogoEditorStore: _ } = this.props;
            this.setState(
              {
                saving: !0,
              },
              async () => {
                if (_.GetSaveURL()) {
                  let _ = _.GetLogoPosition();
                  try {
                    let _ = new FormData();
                    _.append("json", "1"),
                      _.append("sessionid", (0, _._)()),
                      _.append(
                        "app[assets][library_logo][logo_position][pinned_position]",
                        _.pinnedPosition,
                      ),
                      _.append(
                        "app[assets][library_logo][logo_position][width_pct]",
                        "" + _.nWidthPct,
                      ),
                      _.append(
                        "app[assets][library_logo][logo_position][height_pct]",
                        "" + _.nHeightPct,
                      );
                    let _ = await _().post(_.GetSaveURL(), _);
                    this.setState({
                      saving: !1,
                      saved: !0,
                      unsavedChanges: !1,
                    });
                  } catch (_) {
                    console.error(_),
                      alert("There was a problem saving changes"),
                      this.setState({
                        saving: !1,
                      });
                  }
                } else
                  window.opener &&
                    window.opener.postMessage(
                      {
                        appid: _.GetAppID(),
                        ...(0, _._)(_.GetLogoPosition()),
                      },
                      "*",
                    ),
                    this.OnCancel();
              },
            );
          }
          OnCancel() {
            window.removeEventListener("beforeunload", this.OnBeforeUnload),
              window.close();
          }
          OnPositionChanged() {
            this.state.unsavedChanges ||
              this.setState({
                unsavedChanges: !0,
                saved: !1,
              });
          }
          render() {
            return (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().LogoEditorPopup,
                  this.state.saving && _().Saving,
                ),
                children: [
                  (0, _.jsxs)("div", {
                    className: _().LogoEditorSaveActions,
                    children: [
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().LogoEditorSavedMessage,
                          this.state.saved && _().Saved,
                        ),
                        children: (0, _._)(
                          "#StoreAdmin_LibraryPlacementTool_ChangesSaved",
                        ),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().LogoEditorButtons,
                        children: [
                          (0, _.jsx)(_._, {
                            onClick: this.OnOK,
                            className: _().LogoEditorButton,
                            children: (0, _._)("#Button_Save"),
                          }),
                          (0, _.jsx)(_._, {
                            onClick: this.OnCancel,
                            className: _().LogoEditorButton,
                            children: this.state.unsavedChanges
                              ? (0, _._)("#Button_Cancel")
                              : (0, _._)("#Button_Close"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().SavingThrobberContainer,
                    children: (0, _.jsx)(_._, {
                      size: "xlarge",
                      className: _().SavingThrobber,
                    }),
                  }),
                  (0, _.jsx)(_, {
                    ...this.props,
                    fnOnPositionChanged: this.OnPositionChanged,
                  }),
                ],
              }),
            });
          }
        }
        _([_._], _.prototype, "OnBeforeUnload", 1),
          _([_._], _.prototype, "OnOK", 1),
          _([_._], _.prototype, "OnCancel", 1),
          _([_._], _.prototype, "OnPositionChanged", 1);
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                bEditModeEnabled: !0,
              });
          }
          OnPositionChanged(_) {
            const { LogoEditorStore: _, fnOnPositionChanged: _ } = this.props;
            _.SetLogoPosition(_), _ && _(_);
          }
          render() {
            const { LogoEditorStore: _ } = this.props;
            let _ = !!_.GetLogoURL();
            return (0, _.jsxs)("div", {
              className: _().LogoEditorContainer,
              children: [
                (0, _.jsx)("div", {
                  className: _().LogoEditorGameListContainer,
                  children: (0, _.jsx)(_, {
                    highlightedName: _.GetAppName(),
                  }),
                }),
                (0, _.jsx)("div", {
                  className: _().ListDivider,
                }),
                (0, _.jsxs)("div", {
                  className: _().LogoEditorDetailsContainer,
                  children: [
                    (0, _.jsx)(_, {
                      LogoEditorStore: _,
                    }),
                    (0, _.jsx)("div", {
                      className: _().LogoEditorHeaderContainer,
                      children: (0, _.jsx)(_, {
                        editMode: _ && this.state.bEditModeEnabled,
                        hasHeroImage: !0,
                        rgHeaderImages: [_.GetHeroURL()],
                        rgLogoImages: _ ? [_.GetLogoURL()] : [],
                        classNameNoLogo: _().NoLogoImage,
                        fnOnPositionChanged: this.OnPositionChanged,
                        logoPosition: _.GetLogoPosition(),
                        children: (0, _.jsx)(_, {
                          title: _.GetLogoURL() ? "" : _.GetAppName(),
                        }),
                      }),
                    }),
                    (0, _.jsx)(_, {}),
                    (0, _.jsxs)("div", {
                      className: _().DetailsArea,
                      children: [
                        (0, _.jsx)("br", {}),
                        (0, _.jsx)("br", {}),
                        (0, _.jsx)("br", {}),
                        (0, _.jsx)("br", {}),
                        (0, _.jsx)("br", {}),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnPositionChanged", 1);
        const _ = (0, _._)((_) => {
          const _ = _.LogoEditorStore.GetLogoPosition();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("input", {
                type: "hidden",
                name: "app[assets][library_logo][logo_position][pinned_position]",
                value: _.pinnedPosition,
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: "app[assets][library_logo][logo_position][width_pct]",
                value: _.nWidthPct,
              }),
              (0, _.jsx)("input", {
                type: "hidden",
                name: "app[assets][library_logo][logo_position][height_pct]",
                value: _.nHeightPct,
              }),
            ],
          });
        });
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
        class _ extends _.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new _._();
          m_bSetupComplete = !1;
          componentDidMount() {
            this.props.updateRate == 0 && this.updateCanvas();
          }
          componentWillUnmount() {
            this.m_schUpdate.Cancel();
          }
          componentDidUpdate() {
            this.updateCanvas();
          }
          BindCanvasRef(_) {
            this.m_elCanvas = _;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let _ = this.props.scaleFactor || [1, 1],
              _ = this.props.elementRef,
              _ = this.props.updateRate;
            const _ = this.m_elCanvas.getContext("2d");
            if (!_) return;
            this.m_Context = _;
            let _ = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              _ = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = _),
              (this.m_elCanvas.height = _),
              (this.props.blurAmount ?? 0) > 0 &&
                (_.filter = "blur(" + this.props.blurAmount + "px)");
            let _ = () => {
              _.drawImage(_, 0, 0, _ * _[0], _ * _[1]),
                _ > 0 && this.m_schUpdate.Schedule(_, _);
            };
            _(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, _.jsx)("canvas", {
              _: this.props._,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        _([_._], _.prototype, "BindCanvasRef", 1),
          _([_._], _.prototype, "updateCanvas", 1);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { children: _, ..._ } = _,
            _ = _.useRef(null);
          return (0, _.jsx)(_._, {
            nodeRef: _,
            ..._,
            children: _.children(_),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              rgSources: _,
              onIncrementalError: _,
              onError: _,
              strAltText: _,
              ref: _,
              ..._
            } = _,
            _ = _.useRef(null),
            [_, _] = _.useState(0),
            [_, _] = _.useState(0);
          _.useImperativeHandle(
            _,
            () => ({
              imgRef: _,
              nSourceIndex: _,
              nSourceLength: _.length,
            }),
            [_, _, _],
          );
          const _ = _.useMemo(() => JSON.stringify(_), [_]);
          _.useEffect(() => {
            _(0), _((_) => _ + 1);
          }, [_]);
          const _ = _.useMemo(() => {
              let _ = "";
              return (
                _ && _.length > _ && (_ = _[_]),
                _ ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    _,
                    _,
                  ),
                  (_ =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                _
              );
            }, [_, _, _]),
            _ = _.useCallback(
              (_) => {
                _?.(_, _[_], _);
                const _ = _ + 1;
                _ >= _.length && _ && _(_), _ < _.length && _(_);
              },
              [_, _, _, _],
            );
          return (0, _.jsx)(
            "img",
            {
              ref: _,
              ..._,
              src: _,
              onError: _,
              alt: _,
            },
            _,
          );
        }
      },
      chunkid: (module) => {
        module.exports = {
          Container: "ImYU51-pS-0X9msMmxX5U",
          StickyHeader: "_2C2bsvp1XpB7NsNiirMAj6",
          Row: "_3i6Bc-bUSZZufhOjYDDRrI",
          ActionSection: "_18DZH0tsHhnLbHhjprfCRF",
          StatusAndStats: "_2dtS1KDBcIhTDkOnFTk7Ua",
          PermanentlyUnavailable: "dy473P5st43tTAJQsiyc",
          GameStatsSection: "_12DXxXXehZReMOx0cv1ua9",
          RightControls: "_18x3wwmqB0GFmNWajYzdXH",
          AppButtonsContainer: "_2UjH56C2fdwZd71OvxjJEd",
          GameInfoButton: "n3SLdJhMc8AbyBVKvtDlc",
          Arrow: "C0opAYh09LX9eIKNjbCoo",
          MenuButton: "_19jdYGZ9QxMVLi4FSegTK7",
          DetailsSection: "_3Ajg1f_C9nJ7a4if21xAgr",
          DetailsSectionStatus: "_2ZJjHct-OxGywoEu8l2mBP",
          DetailsSectionExtra: "_1wzuGRGHrCWzrbJ6qNQjKW",
          DetailsProgressContainer: "_1pcsxtyzCGpeC4LckvIlx1",
          DetailsProgressBar: "_2KOE1-80Tg9sYWzP6pOOyK",
          InvalidPlatform: "_31Ep4CsFJ5Lnp9G_oAKg6",
          Icons: "_3sb86ANNDt2jmea4cqXhen",
          Icon: "fJP-Y0gsxw4u2kJyP4P87",
          MiniAchievements: "omt3iZWkuU82eAga19_qR",
          AchievementLeft: "wiXRiLNn1CmlgeSNkPpsz",
          AchievementRight: "_2LYsH2qimRzqo3mYoLGYs1",
          AchievementProgressRow: "_2cJRwyNRpMI3ugyFyyRA-k",
          AchievementLabel: "_2ZFedrb3wNI-IeqX4Y7T9Z",
          AchievementCountLabel: "_1hPIvyPzs8wsHJgpb5keGa",
          Playtime: "_2JGJBdEjwfj_hBZTBW7J4D",
          PlaytimeLeft: "_2QY4pWRCZO2A7Ty6NOoj1a",
          PlaytimeRight: "_1LPuQL5qNQWgfbOJ8rasxe",
          PlaytimeLabel: "_3MSPYfEyMCKeRFKUQdqkOk",
          PlaytimeInfo: "_1SIEL9hMmB2l6wVjuRegg-",
          LastPlayed: "oWVFWCB2yNB-8wRIYTTJx",
          LastPlayedRight: "WRJ1Xt1UmbuaEZbR9_dnb",
          LastPlayedLabel: "_2-xkMAdfmS2CQmkYOWBGaq",
          LastPlayedInfo: "_1fGHkdu15mnItlF4reGbAB",
          RecentlyUpdated: "_1bxok-6eJWWLXSRsnza8Te",
          RecentlyUpdatedIcon: "aYj4F35HU2LPQaSLUWbsS",
          RecentlyUpdatedText: "_3rzHtELvn7kPM3aPi_6PL0",
          RecentlyUpdatedLink: "_3YyraL8CvXr7ispfZsVJD_",
          PlayButtonContainer: "_3dlYJa3Q0oFTATvDrSB6Rj",
          PlayButton: "_3MzeFk7QqBUU3-eahz5UWy",
          Green: "Y4siik6dD1l-cXer5nPxZ",
          Disabled: "o6V6tnMncxMeACPbqGtaV",
          NoAction: "GALfzJzn7Kgna0dhEzPpE",
          ThrobberContainer: "_2OBm7JJBuCZLh1HNG1eGxx",
          Throbber: "_1uJfKMWhYxjCM2KFfBM6mS",
          ButtonText: "_3PV-5LTASyzLs3qOdUAQBy",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GameList: "_2Ke99VagjO6dSjAa2PNqxC",
          GameListEntry: "_14lr0njLPbO3nOvfNr1AzG",
          Selected: "_3QI8hmWvFHwAfrradTNDas",
          Updating: "yTNHkI0JwNFkQUrUwQqN7",
          Uninstalled: "_2hOgDeHebiGfan9FuHhgQd",
          GameIcon: "_2ROZT5MqP-gQIPzHhHBUo5",
          GameIconPlaceholder: "_2AyMQ524UTKZGtMnnRVlpV",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LogoEditorContainer: "_3G8aWAJwLQa8Gis9zgJK3F",
          LogoEditorHeaderContainer: "_31GWsBgTN2gKGw6BvieS8V",
          LogoEditorDetailsContainer: "_1uN9ilsJ0eyEjXA2IV9FNJ",
          NoLogoImage: "_3HX66KemiUEZ3js_TEQAFO",
          Title: "_32fDUKf4cNVinbOTd9xBkG",
          LogoEditorGameListContainer: "_26dKgXG2_zNCw6SjXmJIeE",
          TitleSection: "_3EpYa33cJPKgNejOK1sHyV",
          Features: "_1XHDuTLpau5Y75yupaoJ7q",
          DetailsArea: "_1ToHZ-HcV8Y95iXoPS7OrW",
          LogoEditorPopup: "_3h6edcqYQAzGq2KaiIBpqF",
          SavingThrobberContainer: "_8igOrfTBDrZfqMDZzuMXW",
          SavingThrobber: "_1Oc14dzW12OCleTzcVOtw2",
          Saving: "QovVgMGM08zBuCOEZsvfS",
          LogoEditorSaveActions: "tWdDs8OaXUUQGnG1pjEBE",
          LogoEditorSavedMessage: "_1ZpFTgfevq-D5Ud9kYiorw",
          Saved: "_1ES2_9pHjkOqPCE4g7aTRL",
          LogoEditorButtons: "_2LdrCslr7wCaAZc_B2cmqj",
          LogoEditorButton: "_3XBe65d7s3nYEUha_3ifXO",
          CancelBtn: "_3xnGmB9d7nC7aTOSORqrzd",
          ListDivider: "_3JOU7NACBwpsdYzDlpSlPA",
          Instructions: "HQq3bQMQYEeuUBgBP4KPa",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          BackgroundAnimation: "as_cPCTdExBaAhzMjehmx",
          "ItemFocusAnim-darkerGrey-nocolor": "_3REe8K0T1RfUEtDDejtQ03",
          "ItemFocusAnim-darkerGrey": "_2rMzB6_Y9isiMJ1V-tpDsh",
          "ItemFocusAnim-darkGreySettings": "_2gt9V0RJbJDAxgjiI0W--m",
          "ItemFocusAnim-darkGrey": "_2DWprVVroDu51CgcS9gJnY",
          "ItemFocusAnim-grey": "_2sp5v3tjZITO1dxzcMKD1R",
          "ItemFocusAnim-translucent-white-10": "VrJdwT4EYP3CUR8WMU0-s",
          "ItemFocusAnim-translucent-white-20": "AbnX7J1LvonPhSklnSLzg",
          "ItemFocusAnimBorder-darkGrey": "_1pTAHJRrSYmjCfVHODbAhe",
          "ItemFocusAnim-green": "_39gEuXLK0UB_Vkul0GzqpM",
          focusAnimation: "_2fRYPUp4Ldlej6Ho45Kx4f",
          hoverAnimation: "_32SJsEzVOUF3IzBjOhAcAV",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          TopCapsule: "NZMJ6g2iVnFsOOp-lDmIP",
          NoArt: "_1amMH3zqcKV3WYkLKNId8R",
          ImgSrc: "HNbe3eZf6H7dtJ042x1vM",
          ImgContainer: "QlR9EFwTdUNm_J5vx54_Z",
          FallbackArt: "_1ZNHIcPSbQl11wXtomcqgH",
          BoxSizerEdge: "_253kKVMtNEOuJ2sC467VSH",
          Middle: "_193Yt09oJHb2WZtls8raUe",
          BoxSizerValidRegion: "_2aPcBP45fdgOK22RN0jbhm",
          Background: "_1ssCErQIw1aTDS36tCKZJy",
          FullscreenEnterStart: "_2g7gySnDtVCA9jauebIRjQ",
          FullscreenEnterActive: "pIQBPa0KJg8An6kGeeEsE",
          FullscreenExitActive: "_2VyorTjyllT8k6ZM6x3RZ4",
          FullscreenExitDone: "_1OMoDO9rXi2J4_33DBJPCk",
          FullscreenEnterDone: "_2ra4k5nFh53dvfWfZNqgir",
          FullscreenExitStart: "_-4NyJgPeOwUu148SipZ4t",
          TitleImageContainer: "_2DVdg_N1qLNDdnxJqN-RBX",
          UpperCenter: "_3b-fVlE1HfENx84jhklHeo",
          CenterCenter: "_27g5SXTsPA8g4MN9PxPjAD",
          BottomCenter: "_1nosIKD_xejGRDzGB0gy1v",
          TitleLogo: "_3NBxSLAZLbbbnul8KfDFjw",
          Loaded: "_2dzwXkCVAuZGFC-qKgo8XB",
          BottomLeft: "_2levHjhEzRAVzWSj6oMXzj",
          UpperLeft: "_2GZ34GrLXIVQect79u65lS",
          HeaderBackgroundImage: "_1IX7FPSY9Jb82KhBVBSkZa",
          ImgBlurBackdrop: "_3_IUVzR9tpG_JKEjhwXEAb",
          ImgBlur: "HSQWw9HUAP6jtA2OZjS-u",
          PinBox: "_2O6k6YchzA5nhfbrdAGHAn",
          BoxSizerContainer: "A14yd24JRjhFI-Q1ae6tN",
          BoxSizer: "_2Eh7Soh97QONu_grMi2m66",
          BoxSizerDragBox: "_3ICyuuBD3KZ7x_rORri0v-",
          EdgeDown: "_3BLqofLRCI5R3h0DMuTJWm",
          BoxSizerGridBox: "pnIGuR-v2DtHkCmOVZ_Uq",
          TopLeft: "_8zlhLCBgQIGfymwpvPHzT",
          Top: "_1Ou140h0MBUXFs81gXE0ev",
          TopRight: "_1cMfnzr3uBol-BSQXnZ5rw",
          Left: "_2ddbRtNsT9ZzhqCp31dLzq",
          BoxSizerDelete: "_3IBT6Z45wvXS85eeX2Yros",
          BoxSizerSettings: "_7bAuQkYr-ddYTnV1ggPdp",
          Right: "_16lytfxCiD4S0VEZYju8sq",
          Bottom: "_1Qse1FDSsobXaqkCaQSXC2",
          BottomRight: "_2MuQa9As5X-kSFHDLHw48q",
          AddBoxSizer: "_3Y_PJPCRvFji4gIiu3GUq8",
          SaveBoxSizer: "_3F0ncqFvrT3lUq0zGJk7Jp",
          BoxSizerButtonContainer: "_30Ci5EXeBOQ2rJlPY2nMkY",
          DialogButton: "_21DkRjmS_w3EZ_E5Ns0912",
          BoxSizerInfo: "_4fGFbPKOaxfKGxabnB6Hi",
          TextNameSpace: "_3sUYxfgWcbeGFzYMkx1YDG",
          TitleSection: "_30acA_E0q_GuOxBqxgDJj4",
          Features: "fqwOycZBL_zQfcUiVVWyz",
          SVGTitle: "_121fln1p_mlV8b9CUxpCDS",
          TopGradient: "_1IWSiRVmH1DlNlWSaBeUuZ",
          BackgroundAnimation: "GlgXFqTBI3R9rxd2KA04y",
          "ItemFocusAnim-darkerGrey-nocolor": "_1kB8oUdy8IZfiwFDL_pAGJ",
          "ItemFocusAnim-darkerGrey": "xcelgnkLpBj6UtSAndv3L",
          "ItemFocusAnim-darkGreySettings": "_3a9Z1ZIsMkaKPGnbs2nxYH",
          "ItemFocusAnim-darkGrey": "_2mP9oADy7mRytC1Pn0bpY4",
          "ItemFocusAnim-grey": "_1ewbLnSXfnTXBStxVN9F4g",
          "ItemFocusAnim-translucent-white-10": "FrNBc1zAMRHwtajBKUdFi",
          "ItemFocusAnim-translucent-white-20": "_3oZazG1fCXcfZtHT9PF4Ny",
          "ItemFocusAnimBorder-darkGrey": "_1BIVh95ZorgGIwQ5w0cUqT",
          "ItemFocusAnim-green": "J6Y_JgX-ESrD7SpsuhpWJ",
          focusAnimation: "_1WSn45Atrt8LOxBRy0Vl9P",
          hoverAnimation: "_2H1VOI9e_fr1MHawpRigy0",
        };
      },
    },
  ]);
})();
