/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [22995],
    {
      85232: (B, N, r) => {
        "use strict";
        r.r(N),
          r.d(N, {
            Init_LibraryLogoEditor: () => Je,
            LogoEditor: () => ae,
            LogoEditorPopup: () => W,
          });
        var t = r(7850),
          d = r(90626),
          b = r(44844),
          y = r(41735),
          m = r.n(y),
          k = r(75844),
          S = r(72739),
          O = r(80724),
          g = r(54963),
          A = r(13465),
          L = r(71742),
          h = r(36707),
          u = r(62510),
          v = r(8323);
        const R = "Play",
          K = "Launch",
          ge = "Cancel",
          Y = "Stop",
          I = "Pause",
          q = "Resume",
          Ke = "Download",
          Ye = "Update",
          Xe = "PreLoad",
          Ze = "Install",
          Qe = "Uninstall",
          $e = "RemoveShortcut",
          qe = "BorrowApp",
          et = "PurchaseApp",
          tt = "GameProperties",
          ot = "CreateDesktopShortcut",
          st = "BackUpFiles",
          nt = "Stream",
          it = "Connect",
          at = "PlayMusic",
          rt = "BrowseLocalFiles",
          lt = "Launching",
          ct = "Terminating",
          dt = "ResumeGameInProgress",
          pt = 75,
          ht = 100,
          gt = 250,
          mt = 0,
          ut = 1,
          ft = 2,
          Lt = 3,
          Pt = 0,
          At = 1,
          Bt = 2,
          It = 0,
          xt = 1,
          vt = 2,
          _t = 0,
          Ct = 1,
          Et = 2,
          St = 4,
          Ot = 8,
          yt = 16,
          Rt = 32,
          Tt = 64,
          jt = 128,
          Dt = 256,
          Nt = 512,
          bt = 1024,
          kt = 2048,
          Mt = 4096,
          wt = 8192,
          Ft = 16384,
          Ut = 32768,
          Ht = 65536,
          Gt = 131072,
          zt = 262144,
          Wt = 524288,
          Jt = 1048576,
          Vt = 2097152,
          le = "UpperLeft",
          X = "BottomLeft",
          H = "UpperCenter",
          M = "CenterCenter",
          G = "BottomCenter",
          Pe = null,
          Kt = void 0;
        var Ae = r(20521),
          n = r.n(Ae),
          Be = r(48077),
          Ie = r.n(Be),
          xe = r(53107),
          ve = r(54212),
          ce = r(76867),
          ee = r(13854),
          _e = Object.defineProperty,
          Ce = Object.getOwnPropertyDescriptor,
          f = (a, e, i, o) => {
            for (
              var s = o > 1 ? void 0 : o ? Ce(e, i) : e, l = a.length - 1, c;
              l >= 0;
              l--
            )
              (c = a[l]) && (s = (o ? c(e, i, s) : c(s)) || s);
            return o && s && _e(e, i, s), s;
          };
        const te = {
            exit: n().FullscreenExitStart,
            exitActive: n().FullscreenExitActive,
            exitDone: n().FullscreenExitDone,
            enter: n().FullscreenEnterStart,
            enterDone: n().FullscreenEnterDone,
            enterActive: n().FullscreenEnterActive,
          },
          oe = (0, xe.i_)(Ie()["duration-app-launch"]),
          z = { pinnedPosition: X, nWidthPct: 50, nHeightPct: 50 },
          Z = d.createContext({ bFullscreen: !1 });
        class se extends d.Component {
          m_refTopCapsule = d.createRef();
          constructor(e) {
            super(e), (this.state = { logoPosition: void 0 });
          }
          componentDidUpdate(e) {
            (e.appid != this.props.appid ||
              e.editMode != this.props.editMode) &&
              this.setState({ logoPosition: void 0 });
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
            return this.state.logoPosition || this.props.logoPosition || z;
          }
          SetPinnedPosition(e) {
            this.setState(
              {
                logoPosition: { ...this.GetLogoPosition(), pinnedPosition: e },
              },
              this.PostPositionChangeCallback,
            );
          }
          SetDimensions(e, i) {
            this.setState(
              {
                logoPosition: {
                  ...this.GetLogoPosition(),
                  nWidthPct: e,
                  nHeightPct: i,
                },
              },
              this.PostPositionChangeCallback,
            );
          }
          OnPositionChanged(e) {
            this.SetDimensions(e.nWidthPct, e.nHeightPct);
          }
          PostPositionChangeCallback() {
            this.props.fnOnPositionChanged &&
              this.props.fnOnPositionChanged(this.GetLogoPosition());
          }
          render() {
            if (!this.props.editMode)
              return (0, t.jsx)(Z.Provider, {
                value: { bFullscreen: this.props.bFullscreen },
                children: (0, t.jsx)(T, {
                  ref: this.m_refTopCapsule,
                  ...this.props,
                }),
              });
            const {
                children: e,
                logoPosition: i,
                editMode: o,
                ...s
              } = this.props,
              l = this.GetLogoPosition();
            return (0, t.jsx)(Z.Provider, {
              value: { bFullscreen: this.props.bFullscreen },
              children: (0, t.jsxs)(T, {
                ref: this.m_refTopCapsule,
                ...s,
                editMode: !0,
                logoPosition: l,
                fnOnPositionChanged: this.OnPositionChanged,
                children: [
                  (0, t.jsx)("div", {
                    className: `${n().PinBox} ${n().BottomLeft}`,
                    onClick: () => this.SetPinnedPosition(X),
                    title: "Pin to Bottom Left",
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().PinBox} ${n().UpperCenter}`,
                    onClick: () => this.SetPinnedPosition(H),
                    title: "Pin to Top Center",
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().PinBox} ${n().CenterCenter}`,
                    onClick: () => this.SetPinnedPosition(M),
                    title: "Pin to Center",
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().PinBox} ${n().BottomCenter}`,
                    onClick: () => this.SetPinnedPosition(G),
                    title: "Pin to Bottom Center",
                  }),
                  e,
                ],
              }),
            });
          }
        }
        f([g.oI], se.prototype, "SetDimensions", 1),
          f([g.oI], se.prototype, "OnPositionChanged", 1),
          f([g.oI], se.prototype, "PostPositionChangeCallback", 1);
        let T = class extends d.Component {
          m_refBackgroundImage = d.createRef();
          m_refLogoImage = d.createRef();
          constructor(a) {
            super(a),
              (0, L.wT)(
                !a.editMode || a.rgLogoImages.length <= 1,
                "Can't use multiple logo images in edit mode",
              ),
              (this.state = {
                bHasHeaderImage: a.rgHeaderImages.length > 0,
                bHasLogoImage: a.rgLogoImages.length > 0,
                bLogoLoaded: !1,
              });
          }
          componentDidUpdate(a) {
            let e = null;
            (JSON.stringify(a.rgHeaderImages) !=
              JSON.stringify(this.props.rgHeaderImages) ||
              JSON.stringify(a.rgBlurImages) !=
                JSON.stringify(this.props.rgBlurImages)) &&
              ((e = e || {}),
              (e.bHasHeaderImage = this.props.rgHeaderImages.length > 0)),
              JSON.stringify(a.rgLogoImages) !=
                JSON.stringify(this.props.rgLogoImages) &&
                ((e = e || {}),
                (e.bHasLogoImage = this.props.rgLogoImages.length > 0),
                (e.bLogoLoaded = !1)),
              e && this.setState(e);
          }
          OnHeaderError() {
            this.setState({ bHasHeaderImage: !1 }),
              this.props.fnOnLoaded && this.props.fnOnLoaded();
          }
          OnIncrementalLogoError(a, e, i) {
            this.props.fnReportLogoCacheMiss &&
              this.props.fnReportLogoCacheMiss(this.props.appid, e),
              this.props.fnOnLoaded && this.props.fnOnLoaded();
          }
          OnLogoError() {
            this.setState({ bHasLogoImage: !1 }, () => {
              this.props.fnOnLogoLoaded && this.props.fnOnLogoLoaded();
            });
          }
          OnLogoLoad() {
            this.setState({ bLogoLoaded: !0 }, () => {
              this.props.fnOnLogoLoaded && this.props.fnOnLogoLoaded();
            });
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
                rgLogoImages: a,
                editMode: e,
                logoPosition: i,
                className: o,
                classNameNoLogo: s,
                fnOnPositionChanged: l,
                height: c,
              } = this.props,
              { bHasLogoImage: x } = this.state,
              _ = this.props.rgHeaderImages.length == 1,
              j = (0, h.A)(
                n().TopCapsule,
                o,
                !this.state.bHasHeaderImage && n().NoArt,
                (!this.props.hasHeroImage || _) && n().FallbackArt,
                !x && s,
              ),
              D = { "--header-height": c == null ? void 0 : c + "px" };
            return (0, t.jsx)(ce.M, {
              timeout: oe,
              appear: !0,
              in: this.props.bFullscreen,
              classNames: te,
              children: (w) =>
                (0, t.jsxs)("div", {
                  ref: w,
                  className: j,
                  style: D,
                  children: [
                    (0, t.jsx)(Q, {
                      ref: this.m_refBackgroundImage,
                      bLowPerfMode: this.props.bLowPerfMode,
                      appid: this.props.appid,
                      rgHeaderImages: this.props.rgHeaderImages,
                      rgBlurImages: this.props.rgBlurImages,
                      onReportHeroImageMiss: this.props.fnReportHeroImageMiss,
                      onError: this.OnHeaderError,
                      onLoad: this.OnLoaded,
                    }),
                    x &&
                      i !== Pe &&
                      (0, t.jsx)(
                        Ee,
                        {
                          strLogoImageURL: a[0],
                          editMode: e,
                          logoPosition: i || z,
                          fnOnPositionChanged: e && l,
                          fullscreen: this.props.bFullscreen,
                          children: (0, t.jsx)(A.c, {
                            ref: this.m_refLogoImage,
                            className: (0, h.A)(
                              n().TitleLogo,
                              this.state.bLogoLoaded && n().Loaded,
                            ),
                            rgSources: a,
                            onLoad: this.OnLogoLoad,
                            onIncrementalError: this.OnIncrementalLogoError,
                            onError: this.OnLogoError,
                          }),
                        },
                        a[0],
                      ),
                    this.props.children,
                    (0, t.jsx)("div", { className: n().TopGradient }),
                  ],
                }),
            });
          }
        };
        f([g.oI], T.prototype, "OnHeaderError", 1),
          f([g.oI], T.prototype, "OnIncrementalLogoError", 1),
          f([g.oI], T.prototype, "OnLogoError", 1),
          f([g.oI], T.prototype, "OnLogoLoad", 1),
          f([g.oI], T.prototype, "OnLoaded", 1),
          (T = f([k.PA], T));
        class Q extends d.Component {
          m_refBackgroundImage = d.createRef();
          m_refCanvasBlurImage;
          m_elBackgroundImage = null;
          constructor(e) {
            super(e),
              (this.state = {
                bBackgroundLoaded: !1,
                strLoadedBlurImage: null,
                nBlurImageIndex: 0,
                bUseCanvasBlur: !this.HasBlurImages(),
              });
          }
          componentDidMount() {
            !this.HasHeaderImages() && this.props.onLoad && this.props.onLoad(),
              this.CheckForLoadedImage();
          }
          componentDidUpdate(e) {
            (e.appid != this.props.appid ||
              JSON.stringify(e.rgHeaderImages) !=
                JSON.stringify(this.props.rgHeaderImages) ||
              JSON.stringify(e.rgBlurImages) !=
                JSON.stringify(this.props.rgBlurImages) ||
              this.props.bLowPerfMode != e.bLowPerfMode) &&
              (this.setState({
                bBackgroundLoaded: !1,
                nBlurImageIndex: 0,
                bUseCanvasBlur: !this.HasBlurImages(),
              }),
              !this.HasHeaderImages() &&
                this.props.onLoad &&
                this.props.onLoad(),
              (this.m_elBackgroundImage = null)),
              this.CheckForLoadedImage();
          }
          CheckForLoadedImage() {
            const e = this.m_refBackgroundImage.current?.imgRef.current ?? null;
            e !== this.m_elBackgroundImage &&
              ((this.m_elBackgroundImage = e),
              e?.complete && e.naturalWidth > 0 && this.ShowHeaderImage(e));
          }
          ShowHeaderImage(e) {
            (this.m_refCanvasBlurImage = e),
              this.setState((i) => ({
                bBackgroundLoaded: !0,
                bUseCanvasBlur:
                  i.bUseCanvasBlur ||
                  !this.HasBlurImages() ||
                  !this.props.rgBlurImages[i.nBlurImageIndex],
              }));
          }
          get src() {
            return (
              this.m_refBackgroundImage.current &&
              this.m_refBackgroundImage.current?.imgRef.current?.src
            );
          }
          OnIncrementalError(e, i, o) {
            this.props.onReportHeroImageMiss &&
              this.props.onReportHeroImageMiss(this.props.appid, i),
              this.HasBlurImages() &&
                this.setState({
                  nBlurImageIndex: this.state.nBlurImageIndex + 1,
                });
          }
          OnHeaderLoad() {
            this.props.onLoad && this.props.onLoad(),
              this.state.bBackgroundLoaded ||
                (0, S.flushSync)(() =>
                  this.ShowHeaderImage(
                    this.m_refBackgroundImage.current?.imgRef.current,
                  ),
                );
          }
          OnBlurImageLoaded(e) {
            this.setState({
              strLoadedBlurImage: e.currentTarget.getAttribute("src"),
            });
          }
          OnBlurImageFailed() {
            this.setState({ bUseCanvasBlur: !0 });
          }
          HasHeaderImages() {
            let e = this.props.rgHeaderImages;
            return e && e.length > 0;
          }
          HasBlurImages() {
            let e = this.props.rgBlurImages;
            return e && e.length > 0;
          }
          render() {
            const e = this.HasBlurImages()
                ? this.props.rgBlurImages[this.state.nBlurImageIndex]
                : null,
              i = this.state.strLoadedBlurImage != e;
            let o = null;
            return (
              (o = (0, t.jsxs)(d.Fragment, {
                children: [
                  !this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    this.props.rgBlurImages[this.state.nBlurImageIndex] &&
                    (0, t.jsx)("img", {
                      src: this.props.rgBlurImages[this.state.nBlurImageIndex],
                      className: (0, h.A)(
                        n().ImgSrc,
                        n().ImgBlur,
                        n().ImgBlurBackdrop,
                        i && n().Hidden,
                      ),
                      onLoad: this.OnBlurImageLoaded,
                      onError: this.OnBlurImageFailed,
                    }),
                  this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    !this.props.bLowPerfMode &&
                    (0, t.jsx)(u.m, {
                      className: (0, h.A)(
                        n().ImgSrc,
                        n().ImgBlur,
                        n().ImgBlurBackdrop,
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
              (0, t.jsx)(Z.Consumer, {
                children: (s) =>
                  (0, t.jsx)(ce.M, {
                    timeout: oe,
                    appear: !0,
                    in: s.bFullscreen,
                    classNames: te,
                    children: (l) =>
                      (0, t.jsxs)("div", {
                        ref: l,
                        className: (0, h.A)(
                          n().HeaderBackgroundImage,
                          n().Glassy,
                        ),
                        children: [
                          !this.state.bUseCanvasBlur &&
                            this.state.bBackgroundLoaded &&
                            this.props.rgBlurImages[
                              this.state.nBlurImageIndex
                            ] &&
                            (0, t.jsx)("img", {
                              src: this.props.rgBlurImages[
                                this.state.nBlurImageIndex
                              ],
                              className: (0, h.A)(
                                n().ImgSrc,
                                n().ImgBlur,
                                i && n().Hidden,
                              ),
                              onLoad: this.OnBlurImageLoaded,
                              onError: this.OnBlurImageFailed,
                            }),
                          this.state.bUseCanvasBlur &&
                            this.state.bBackgroundLoaded &&
                            !this.props.bLowPerfMode &&
                            (0, t.jsx)(u.m, {
                              className: (0, h.A)(n().ImgSrc, n().ImgBlur),
                              elementRef: this.m_refCanvasBlurImage,
                              updateRate: 0,
                              width: 192,
                              height: 62,
                              reductionFactor: 10,
                              blurAmount: 3,
                            }),
                          (0, t.jsx)("div", {
                            className: n().ImgContainer,
                            children:
                              this.HasHeaderImages() &&
                              (0, t.jsx)(A.c, {
                                ref: this.m_refBackgroundImage,
                                rgSources: this.props.rgHeaderImages,
                                className: (0, h.A)(
                                  n().ImgSrc,
                                  !this.state.bBackgroundLoaded && n().Hidden,
                                ),
                                onLoad: this.OnHeaderLoad,
                                onIncrementalError: this.OnIncrementalError,
                                onError: this.props.onError,
                              }),
                          }),
                          o,
                        ],
                      }),
                  }),
              })
            );
          }
        }
        f([g.oI], Q.prototype, "OnIncrementalError", 1),
          f([g.oI], Q.prototype, "OnHeaderLoad", 1),
          f([g.oI], Q.prototype, "OnBlurImageLoaded", 1),
          f([g.oI], Q.prototype, "OnBlurImageFailed", 1);
        function Ee(a) {
          const {
              logoPosition: e,
              strLogoImageURL: i,
              children: o,
              fnOnPositionChanged: s,
              fullscreen: l,
            } = a,
            {
              nBottomPct: c,
              nTopPct: x,
              nLeftPct: _,
              nRightPct: j,
            } = de(e.pinnedPosition, e.nWidthPct, e.nHeightPct),
            D = d.useContext(Z),
            w = {
              left: `${_}%`,
              top: `${x}%`,
              width: `${e.nWidthPct}%`,
              height: `${e.nHeightPct}%`,
            },
            J = (0, h.A)(n().BoxSizer, n()[e.pinnedPosition]);
          return (0, t.jsx)("div", {
            className: n().BoxSizerContainer,
            children: (0, t.jsxs)("div", {
              className: n().BoxSizerValidRegion,
              children: [
                !a.editMode &&
                  (0, t.jsx)("div", {
                    className: J,
                    style: w,
                    children: (0, t.jsx)(ce.M, {
                      timeout: oe,
                      appear: !0,
                      in: l,
                      classNames: te,
                      children: (V) =>
                        (0, t.jsx)("div", {
                          ref: V,
                          className: n().TitleImageContainer,
                          children: o,
                        }),
                    }),
                  }),
                a.editMode &&
                  (0, t.jsx)(F, {
                    id: i,
                    pinType: e.pinnedPosition,
                    index: 0,
                    widthPct: e.nWidthPct,
                    heightPct: e.nHeightPct,
                    fnOnPositionChanged: s,
                    children: o,
                  }),
              ],
            }),
          });
        }
        function de(a, e, i) {
          let o, s, l, c;
          switch (a) {
            case X:
              (o = 0), (s = 100 - i), (l = 0), (c = 100 - e);
              break;
            case le:
              (o = 100 - i), (s = 0), (l = 0), (c = 100 - e);
              break;
            case M:
              (o = (100 - i) / 2),
                (s = (100 - i) / 2),
                (l = (100 - e) / 2),
                (c = (100 - e) / 2);
              break;
            case H:
              (o = 100 - i), (s = 0), (l = (100 - e) / 2), (c = (100 - e) / 2);
              break;
            case G:
              (o = 0), (s = 100 - i), (l = (100 - e) / 2), (c = (100 - e) / 2);
              break;
            default:
              break;
          }
          return { nBottomPct: o, nTopPct: s, nLeftPct: l, nRightPct: c };
        }
        var Se = ((a) => (
          (a.topleft = "Topleft"),
          (a.top = "Top"),
          (a.topright = "TopRight"),
          (a.left = "Left"),
          (a.middle = "Middle"),
          (a.right = "Right"),
          (a.bottomleft = "BottomLeft"),
          (a.bottom = "Bottom"),
          (a.bottomright = "BottomRight"),
          a
        ))(Se || {});
        class F extends d.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new v.Ji();
          m_pinType;
          constructor(e) {
            super(e), (this.state = {});
          }
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          componentDidUpdate() {
            this.props.pinType != this.state.pinType &&
              ((this.m_pinType = this.props.pinType),
              this.setState({ pinType: this.props.pinType }),
              this.UpdateBoxPosition());
          }
          static getDerivedStateFromProps(e, i) {
            const { pinType: o, widthPct: s, heightPct: l, id: c } = e;
            if (i && i.id == c) return null;
            const {
              nBottomPct: x,
              nTopPct: _,
              nLeftPct: j,
              nRightPct: D,
            } = de(o, s, l);
            return {
              id: c,
              curBottomPosPct: x,
              curTopPosPct: _,
              curLeftPosPct: j,
              curRightPosPct: D,
              curWidthPct: s,
              curHeightPct: l,
              EdgeDown: null,
              pinType: o,
            };
          }
          LinkRegionBoxRef(e) {
            this.m_elLinkRegionBox = e;
          }
          OnMouseDown(e, i) {
            (this.m_fnMouseUp = (o) => {
              this.OnMouseUp(o, i);
            }),
              (this.m_fnMouseMove = (o) => {
                this.OnMouseMove(o, i);
              }),
              this.setState({ EdgeDown: i }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((e.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((e.clientY - this.m_rectLinkRegion.top) /
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
              e.preventDefault(),
              e.stopPropagation();
          }
          UpdateBoxPosition() {
            const {
              nBottomPct: e,
              nTopPct: i,
              nLeftPct: o,
              nRightPct: s,
            } = de(
              this.m_pinType,
              this.state.curWidthPct,
              this.state.curHeightPct,
            );
            this.setState({
              curBottomPosPct: e,
              curTopPosPct: i,
              curLeftPosPct: o,
              curRightPosPct: s,
            });
          }
          OnMouseMove(e, i) {
            if (this.state.EdgeDown === void 0) return;
            e.shiftKey && this.m_fnMouseUp();
            let {
              curTopPosPct: o,
              curRightPosPct: s,
              curBottomPosPct: l,
              curLeftPosPct: c,
            } = this.state;
            const x = (U) => {
                let C =
                  ((U - this.m_rectLinkRegion.left) /
                    (this.m_rectLinkRegion.right -
                      this.m_rectLinkRegion.left)) *
                    100 -
                  this.m_nLocalOffsetXPct;
                if (this.props.pinType == le || this.props.pinType == X)
                  return 0;
                if (
                  this.props.pinType == M ||
                  this.props.pinType == G ||
                  this.props.pinType == H
                ) {
                  let E = Math.min(Math.max(C, 0), 45);
                  return (s = E), E;
                }
                return C;
              },
              _ = (U) => {
                let C =
                  100 -
                  (((U - this.m_rectLinkRegion.left) /
                    (this.m_rectLinkRegion.right -
                      this.m_rectLinkRegion.left)) *
                    100 +
                    (this.state.curWidthPct - this.m_nLocalOffsetXPct));
                if (
                  this.props.pinType == M ||
                  this.props.pinType == G ||
                  this.props.pinType == H
                ) {
                  let E = Math.min(Math.max(C, 0), 45);
                  return (c = E), E;
                }
                return C;
              },
              j = (U) => {
                let C =
                  ((U - this.m_rectLinkRegion.top) /
                    (this.m_rectLinkRegion.bottom -
                      this.m_rectLinkRegion.top)) *
                    100 -
                  this.m_nLocalOffsetYPct;
                if (this.props.pinType == H || this.props.pinType == le)
                  return 0;
                if (this.props.pinType == M) {
                  let E = Math.min(Math.max(C, 0), 45);
                  return (l = E), E;
                }
                return C;
              },
              D = (U) => {
                let C =
                  100 -
                  (((U - this.m_rectLinkRegion.top) /
                    (this.m_rectLinkRegion.bottom -
                      this.m_rectLinkRegion.top)) *
                    100 +
                    (this.state.curHeightPct - this.m_nLocalOffsetYPct));
                if (this.props.pinType == X || this.props.pinType == G)
                  return 0;
                if (this.props.pinType == M) {
                  let E = Math.min(Math.max(C, 0), 45);
                  return (o = E), E;
                }
                return C;
              };
            function w() {
              l = Math.min(l, 98 - o);
            }
            function J() {
              s = Math.min(s, 99 - c);
            }
            function V() {
              o = Math.min(o, 98 - l);
            }
            function re() {
              c = Math.min(c, 99 - s);
            }
            switch (i) {
              case "Left":
                (c = x(e.clientX)), re();
                break;
              case "Right":
                (s = _(e.clientX)), J();
                break;
              case "Top":
                (o = j(e.clientY)), V();
                break;
              case "Bottom":
                (l = D(e.clientY)), w();
                break;
              case "Topleft":
                (o = j(e.clientY)), (c = x(e.clientX)), V(), re();
                break;
              case "TopRight":
                (o = j(e.clientY)), (s = _(e.clientX)), V(), J();
                break;
              case "BottomLeft":
                (l = D(e.clientY)), (c = x(e.clientX)), w(), re();
                break;
              case "BottomRight":
                (l = D(e.clientY)), (s = _(e.clientX)), w(), J();
                break;
              case "Middle":
                (s = _(e.clientX)),
                  (l = D(e.clientY)),
                  this.state.pinType != M && (o = j(e.clientY)),
                  this.state.pinType != M &&
                    this.state.pinType != G &&
                    this.state.pinType != H &&
                    (c = x(e.clientX)),
                  V(),
                  w(),
                  re(),
                  J();
                break;
              default:
                break;
            }
            (o = (0, ee.OQ)(o, 0, 98)),
              (l = (0, ee.OQ)(l, 0, 98)),
              (c = (0, ee.OQ)(c, 0, 99)),
              (s = (0, ee.OQ)(s, 0, 99)),
              this.setState({
                curTopPosPct: o,
                curRightPosPct: s,
                curBottomPosPct: l,
                curLeftPosPct: c,
              }),
              e.preventDefault(),
              e.stopPropagation();
          }
          OnMouseUp(e, i) {
            this.setState(
              {
                curWidthPct:
                  100 - this.state.curRightPosPct - this.state.curLeftPosPct,
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              },
              this.OnResizeComplete,
            ),
              this.setState({ EdgeDown: void 0 }),
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
            let e = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              i = (0, h.A)(
                n().BoxSizerDragBox,
                this.state.EdgeDown &&
                  (0, h.A)(n().EdgeDown, n()[this.state.EdgeDown]),
                n()[this.props.pinType],
              );
            return (0, t.jsx)("div", {
              className: i,
              style: e,
              ref: this.LinkRegionBoxRef,
              draggable: !1,
              children: (0, t.jsxs)("div", {
                className: n().BoxSizerGridBox,
                children: [
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().TopLeft}`,
                    onMouseDown: (o) => {
                      this.OnMouseDown(o, "Topleft");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Top}`,
                    onMouseDown: (o) => {
                      this.OnMouseDown(o, "Top");
                    },
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().TopRight}`,
                    onMouseDown: (o) => {
                      this.OnMouseDown(o, "TopRight");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Left}`,
                    onMouseDown: (o) => {
                      this.OnMouseDown(o, "Left");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Middle}`,
                    onMouseDown: (o) => {
                      this.OnMouseDown(o, "Middle");
                    },
                    draggable: !1,
                    children: (0, t.jsx)("div", {
                      className: n().TitleImageContainer,
                      children: this.props.children,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Right}`,
                    onMouseDown: (o) => {
                      this.OnMouseDown(o, "Right");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().BottomLeft}`,
                    onMouseDown: (o) => {
                      this.OnMouseDown(o, "BottomLeft");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Bottom}`,
                    onMouseDown: (o) => {
                      this.OnMouseDown(o, "Bottom");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().BottomRight}`,
                    onMouseDown: (o) => {
                      this.OnMouseDown(o, "BottomRight");
                    },
                    draggable: !1,
                  }),
                ],
              }),
            });
          }
        }
        f([g.oI], F.prototype, "LinkRegionBoxRef", 1),
          f([g.oI], F.prototype, "OnMouseDown", 1),
          f([g.oI], F.prototype, "UpdateBoxPosition", 1),
          f([g.oI], F.prototype, "OnMouseMove", 1),
          f([g.oI], F.prototype, "OnMouseUp", 1),
          f([g.oI], F.prototype, "OnResizeComplete", 1);
        const Oe = (a) => {
          const { title: e, className: i } = a;
          let o = 300,
            s = 14,
            l = 26;
          e.length > 8 && (l = Math.max(l - (e.length - 5) / 2, 5.8));
          const [c, x] = (0, ve.l)();
          return (0, t.jsxs)("svg", {
            className: (0, h.A)(n().SVGTitle, i),
            viewBox: "0 0 " + o + " " + s,
            children: [
              (0, t.jsx)("defs", {
                children: (0, t.jsxs)("linearGradient", {
                  id: c,
                  x1: "0",
                  x2: "0",
                  y1: "0",
                  y2: "100%",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#fff", offset: "0%" }),
                    (0, t.jsx)("stop", { stopColor: "#fff", offset: "20%" }),
                    (0, t.jsx)("stop", { stopColor: "#fff", offset: "40%" }),
                    (0, t.jsx)("stop", { stopColor: "#eee", offset: "60%" }),
                    (0, t.jsx)("stop", { stopColor: "#ddd", offset: "80%" }),
                    (0, t.jsx)("stop", { stopColor: "#ccc", offset: "100%" }),
                  ],
                }),
              }),
              (0, t.jsx)("text", {
                x: "-1",
                y: s,
                fontSize: l,
                textAnchor: "bottom",
                fontWeight: "200",
                fill: x,
                children: e,
              }),
            ],
          });
        };
        function ye(a) {
          const { title: e, children: i } = a,
            o = d.useContext(Z),
            s = d.useRef(null);
          return (0, t.jsx)(O.A, {
            nodeRef: s,
            timeout: oe,
            appear: !0,
            in: o.bFullscreen,
            classNames: te,
            children: (0, t.jsxs)("div", {
              ref: s,
              className: (0, h.A)(n().TitleSection, e ? n().NoLogo : ""),
              children: [
                (0, t.jsx)("div", {
                  className: n().TextNameSpace,
                  children: !!e && (0, t.jsx)(Oe, { title: e }),
                }),
                (0, t.jsx)("div", { className: n().Features, children: i }),
              ],
            }),
          });
        }
        var pe = r(14947),
          Re = Object.defineProperty,
          Te = Object.getOwnPropertyDescriptor,
          je = (a, e, i, o) => {
            for (
              var s = o > 1 ? void 0 : o ? Te(e, i) : e, l = a.length - 1, c;
              l >= 0;
              l--
            )
              (c = a[l]) && (s = (o ? c(e, i, s) : c(s)) || s);
            return o && s && Re(e, i, s), s;
          };
        class me {
          m_strLibraryLogoURL;
          m_strLibraryHeroURL;
          m_unAppID;
          m_strAppName;
          m_logoPosition = void 0;
          m_strSaveURL;
          constructor(e) {
            (0, pe.Gn)(this),
              (this.m_strLibraryHeroURL = e.strLibraryHeroURL),
              (this.m_strLibraryLogoURL = e.strLibraryLogoURL),
              (this.m_unAppID = e.unAppID),
              (this.m_strAppName = e.strAppName),
              (this.m_logoPosition = e.logoPosition || z),
              (this.m_strSaveURL = e.strSaveURL || null),
              this.m_logoPosition.pinnedPosition ||
                (this.m_logoPosition.pinnedPosition = z.pinnedPosition),
              this.m_logoPosition.nHeightPct ||
                (this.m_logoPosition.nHeightPct = z.nHeightPct),
              this.m_logoPosition.nWidthPct ||
                (this.m_logoPosition.nWidthPct = z.nWidthPct);
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
          SetLogoPosition(e) {
            this.m_logoPosition = e;
          }
          GetSaveURL() {
            return this.m_strSaveURL;
          }
        }
        je([pe.sH], me.prototype, "m_logoPosition", 2);
        var De = r(41983),
          P = r.n(De),
          Ne = r(17221),
          p = r.n(Ne),
          ue = r(36118);
        function be() {
          return (0, t.jsxs)(d.Fragment, {
            children: [
              (0, t.jsx)("span", { style: { fontSize: 0 } }),
              (0, t.jsx)("div", {
                className: (0, h.A)(p().Container),
                children: (0, t.jsxs)("div", {
                  className: p().Row,
                  children: [
                    (0, t.jsx)(Fe, {}),
                    (0, t.jsx)(ke, {}),
                    (0, t.jsx)("div", {
                      className: p().RightControls,
                      children: (0, t.jsxs)("div", {
                        className: p().AppButtonsContainer,
                        children: [
                          (0, t.jsx)("div", {
                            className: p().MenuButton,
                            children: (0, t.jsx)(ue.wB_, {}),
                          }),
                          (0, t.jsxs)("div", {
                            className: p().GameInfoButton,
                            children: [
                              "Game Info",
                              (0, t.jsx)("div", {
                                className: p().Arrow,
                                children: (0, t.jsx)(ue.V5W, { angle: 180 }),
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
        function ke() {
          return (0, t.jsx)("div", {
            className: (0, h.A)(p().StatusAndStats),
            children: (0, t.jsx)(Me, {}),
          });
        }
        function Me() {
          return (0, t.jsxs)("div", {
            className: p().GameStatsSection,
            children: [
              (0, t.jsx)("div", {
                className: p().LastPlayed,
                children: (0, t.jsxs)("div", {
                  className: p().LastPlayedRight,
                  children: [
                    (0, t.jsx)("div", {
                      className: p().LastPlayedLabel,
                      children: "LAST PLAYED",
                    }),
                    (0, t.jsx)("div", {
                      className: p().LastPlayedInfo,
                      children: "Mar 24",
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("div", {
                className: p().Playtime,
                children: [
                  (0, t.jsx)("div", { className: p().PlaytimeLeft }),
                  (0, t.jsxs)("div", {
                    className: p().PlaytimeRight,
                    children: [
                      (0, t.jsx)("div", {
                        className: p().PlaytimeLabel,
                        children: "PLAY TIME",
                      }),
                      (0, t.jsx)("div", {
                        className: p().PlaytimeInfo,
                        children: "37 hours",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: p().MiniAchievements,
                children: [
                  (0, t.jsx)("div", { className: p().AchievementLeft }),
                  (0, t.jsxs)("div", {
                    className: p().AchievementRight,
                    children: [
                      (0, t.jsx)("div", {
                        className: p().AchievementLabel,
                        children: "ACHIEVEMENTS",
                      }),
                      (0, t.jsxs)("div", {
                        className: p().AchievementProgressRow,
                        children: [
                          (0, t.jsx)("div", {
                            className: p().AchievementCountLabel,
                            children: "30/47",
                          }),
                          (0, t.jsx)(we, { progressPct: 3e3 / 47 }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        class we extends d.Component {
          render() {
            return (0, t.jsx)("div", {
              className: p().DetailsProgressContainer,
              children: (0, t.jsx)("div", {
                className: p().DetailsProgressBar,
                style: { width: this.props.progressPct + "%" },
              }),
            });
          }
        }
        function Fe() {
          return (0, t.jsx)("div", {
            className: p().ActionSection,
            children: (0, t.jsx)("div", {
              className: p().PlayButtonContainer,
              children: (0, t.jsx)("div", {
                className: (0, h.A)(p().PlayButton, p().Green),
                children: (0, t.jsx)("div", {
                  className: p().ButtonText,
                  children: "PLAY",
                }),
              }),
            }),
          });
        }
        function Yt() {
          return jsxs("div", {
            className: styles.RecentlyUpdated,
            children: [
              jsx("div", { className: styles.RecentlyUpdatedIcon }),
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
        var Ue = r(79058),
          ne = r.n(Ue);
        const he = JSON.parse(
          `["Apex Legends\u2122","Baldur's Gate 3","Battlefield\u2122 6","Black Desert","Black Myth: Wukong","Borderlands 4","Clair Obscur: Expedition 33","Counter-Strike 2","Cronos: The New Dawn","Crusader Kings III","Cyberpunk 2077","Dead by Daylight","Delta Force","Destiny 2","Dota 2","Dune: Awakening","Dying Light: The Beast","EA SPORTS FC\u2122 26","ELDEN RING","ELDEN RING NIGHTREIGN","Euro Truck Simulator 2","F1\xAE 25","FINAL FANTASY XIV Online","Forza Horizon 5","Grand Theft Auto V Enhanced","Grounded 2","HELLDIVERS\u2122 2","Hollow Knight","Hollow Knight: Silksong","Killing Floor 3","Kingdom Come: Deliverance II","Limbus Company","Lost Ark","METAL GEAR SOLID \u0394: SNAKE EATER","Madden NFL 26","Mafia: The Old Country","Mage Arena","Magic: The Gathering Arena","Marvel Rivals","NARAKA: BLADEPOINT","NBA 2K26","No Man's Sky","Once Human","Overwatch\xAE 2","PEAK","PUBG: BATTLEGROUNDS","Path of Exile 2","R.E.P.O.","Ready or Not","Red Dead Redemption 2","RimWorld","Rust","Schedule I","Shape of Dreams","Split Fiction","Stardew Valley","Street Fighter\u2122 6","THE FINALS","THRONE AND LIBERTY","Team Fortress 2","The Elder Scrolls\xAE Online","The First Descendant","The Sims\u2122 4","Titan Quest II","Tom Clancy's Rainbow Six\xAE Siege X","Umamusume: Pretty Derby","WUCHANG: Fallen Feathers","Wallpaper Engine","War Thunder","Warframe","Warhammer 40,000: Dawn of War - Definitive Edition","Warhammer 40,000: Space Marine 2","Wuthering Waves","Yu-Gi-Oh! Master Duel","\u96C0\u9B42\u9EBB\u5C07(MahjongSoul)"]`,
        );
        function He(a) {
          const { highlightedName: e } = a,
            i = d.useCallback((s) => {
              s && s.scrollIntoView({ block: "center" });
            }, []),
            o = d.useMemo(() => {
              if (he.indexOf(e) !== -1) return he;
              {
                const s = [...he, e];
                return s.sort(), s;
              }
            }, [e]);
          return (0, t.jsx)("div", {
            className: ne().GameList,
            children: o.map((s) => {
              let l = e === s;
              return (0, t.jsx)(
                "div",
                {
                  className: (0, h.A)(
                    ne().GameListEntry,
                    l ? ne().Selected : ne().Uninstalled,
                  ),
                  ref: l ? i : void 0,
                  children: s,
                },
                s,
              );
            }),
          });
        }
        var ie = r(18210),
          fe = r(3166),
          Ge = r(85599),
          Le = r(58534),
          ze = Object.defineProperty,
          We = Object.getOwnPropertyDescriptor,
          $ = (a, e, i, o) => {
            for (
              var s = o > 1 ? void 0 : o ? We(e, i) : e, l = a.length - 1, c;
              l >= 0;
              l--
            )
              (c = a[l]) && (s = (o ? c(e, i, s) : c(s)) || s);
            return o && s && ze(e, i, s), s;
          };
        function Je(a, e) {
          const i = (0, fe.Tc)("editorconfig", e);
          let o = new me(i);
          b.createRoot(e).render(
            d.createElement(a ? W : ae, { LogoEditorStore: o }),
          );
        }
        class W extends d.Component {
          constructor(e) {
            super(e),
              (this.state = { saving: !1, saved: !1, unsavedChanges: !1 });
          }
          componentDidMount() {
            window.addEventListener("beforeunload", this.OnBeforeUnload);
          }
          componentWillUnmount() {
            window.removeEventListener("beforeunload", this.OnBeforeUnload);
          }
          OnBeforeUnload(e) {
            this.state.unsavedChanges &&
              (e.preventDefault(),
              (e.returnValue =
                "You have unsaved changes.  Are you sure you want to close this window?"));
          }
          async OnOK() {
            if (this.state.saving) return;
            const { LogoEditorStore: e } = this.props;
            this.setState({ saving: !0 }, async () => {
              if (e.GetSaveURL()) {
                let i = e.GetLogoPosition();
                try {
                  let o = new FormData();
                  o.append("json", "1"),
                    o.append("sessionid", (0, fe.KC)()),
                    o.append(
                      "app[assets][library_logo][logo_position][pinned_position]",
                      i.pinnedPosition,
                    ),
                    o.append(
                      "app[assets][library_logo][logo_position][width_pct]",
                      "" + i.nWidthPct,
                    ),
                    o.append(
                      "app[assets][library_logo][logo_position][height_pct]",
                      "" + i.nHeightPct,
                    );
                  let s = await m().post(e.GetSaveURL(), o);
                  this.setState({ saving: !1, saved: !0, unsavedChanges: !1 });
                } catch (o) {
                  console.error(o),
                    alert("There was a problem saving changes"),
                    this.setState({ saving: !1 });
                }
              } else
                window.opener &&
                  window.opener.postMessage(
                    { appid: e.GetAppID(), ...(0, pe.HO)(e.GetLogoPosition()) },
                    "*",
                  ),
                  this.OnCancel();
            });
          }
          OnCancel() {
            window.removeEventListener("beforeunload", this.OnBeforeUnload),
              window.close();
          }
          OnPositionChanged() {
            this.state.unsavedChanges ||
              this.setState({ unsavedChanges: !0, saved: !1 });
          }
          render() {
            return (0, t.jsx)(d.Fragment, {
              children: (0, t.jsxs)("div", {
                className: (0, h.A)(
                  P().LogoEditorPopup,
                  this.state.saving && P().Saving,
                ),
                children: [
                  (0, t.jsxs)("div", {
                    className: P().LogoEditorSaveActions,
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, h.A)(
                          P().LogoEditorSavedMessage,
                          this.state.saved && P().Saved,
                        ),
                        children: (0, ie.we)(
                          "#StoreAdmin_LibraryPlacementTool_ChangesSaved",
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        className: P().LogoEditorButtons,
                        children: [
                          (0, t.jsx)(Le.jn, {
                            onClick: this.OnOK,
                            className: P().LogoEditorButton,
                            children: (0, ie.we)("#Button_Save"),
                          }),
                          (0, t.jsx)(Le.$n, {
                            onClick: this.OnCancel,
                            className: P().LogoEditorButton,
                            children: this.state.unsavedChanges
                              ? (0, ie.we)("#Button_Cancel")
                              : (0, ie.we)("#Button_Close"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: P().SavingThrobberContainer,
                    children: (0, t.jsx)(Ge.t, {
                      size: "xlarge",
                      className: P().SavingThrobber,
                    }),
                  }),
                  (0, t.jsx)(ae, {
                    ...this.props,
                    fnOnPositionChanged: this.OnPositionChanged,
                  }),
                ],
              }),
            });
          }
        }
        $([g.oI], W.prototype, "OnBeforeUnload", 1),
          $([g.oI], W.prototype, "OnOK", 1),
          $([g.oI], W.prototype, "OnCancel", 1),
          $([g.oI], W.prototype, "OnPositionChanged", 1);
        class ae extends d.Component {
          constructor(e) {
            super(e), (this.state = { bEditModeEnabled: !0 });
          }
          OnPositionChanged(e) {
            const { LogoEditorStore: i, fnOnPositionChanged: o } = this.props;
            i.SetLogoPosition(e), o && o(e);
          }
          render() {
            const { LogoEditorStore: e } = this.props;
            let i = !!e.GetLogoURL();
            return (0, t.jsxs)("div", {
              className: P().LogoEditorContainer,
              children: [
                (0, t.jsx)("div", {
                  className: P().LogoEditorGameListContainer,
                  children: (0, t.jsx)(He, { highlightedName: e.GetAppName() }),
                }),
                (0, t.jsx)("div", { className: P().ListDivider }),
                (0, t.jsxs)("div", {
                  className: P().LogoEditorDetailsContainer,
                  children: [
                    (0, t.jsx)(Ve, { LogoEditorStore: e }),
                    (0, t.jsx)("div", {
                      className: P().LogoEditorHeaderContainer,
                      children: (0, t.jsx)(se, {
                        editMode: i && this.state.bEditModeEnabled,
                        hasHeroImage: !0,
                        rgHeaderImages: [e.GetHeroURL()],
                        rgLogoImages: i ? [e.GetLogoURL()] : [],
                        classNameNoLogo: P().NoLogoImage,
                        fnOnPositionChanged: this.OnPositionChanged,
                        logoPosition: e.GetLogoPosition(),
                        children: (0, t.jsx)(ye, {
                          title: e.GetLogoURL() ? "" : e.GetAppName(),
                        }),
                      }),
                    }),
                    (0, t.jsx)(be, {}),
                    (0, t.jsxs)("div", {
                      className: P().DetailsArea,
                      children: [
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)("br", {}),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        $([g.oI], ae.prototype, "OnPositionChanged", 1);
        const Ve = (0, k.PA)((a) => {
          const e = a.LogoEditorStore.GetLogoPosition();
          return (0, t.jsxs)(d.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "hidden",
                name: "app[assets][library_logo][logo_position][pinned_position]",
                value: e.pinnedPosition,
              }),
              (0, t.jsx)("input", {
                type: "hidden",
                name: "app[assets][library_logo][logo_position][width_pct]",
                value: e.nWidthPct,
              }),
              (0, t.jsx)("input", {
                type: "hidden",
                name: "app[assets][library_logo][logo_position][height_pct]",
                value: e.nHeightPct,
              }),
            ],
          });
        });
      },
      62510: (B, N, r) => {
        "use strict";
        r.d(N, { m: () => O });
        var t = r(7850),
          d = r(90626),
          b = r(54963),
          y = r(8323),
          m = Object.defineProperty,
          k = Object.getOwnPropertyDescriptor,
          S = (g, A, L, h) => {
            for (
              var u = h > 1 ? void 0 : h ? k(A, L) : A, v = g.length - 1, R;
              v >= 0;
              v--
            )
              (R = g[v]) && (u = (h ? R(A, L, u) : R(u)) || u);
            return h && u && m(A, L, u), u;
          };
        class O extends d.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new y.LU();
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
          BindCanvasRef(A) {
            this.m_elCanvas = A;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let A = this.props.scaleFactor || [1, 1],
              L = this.props.elementRef,
              h = this.props.updateRate;
            const u = this.m_elCanvas.getContext("2d");
            if (!u) return;
            this.m_Context = u;
            let v = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              R = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = v),
              (this.m_elCanvas.height = R),
              (this.props.blurAmount ?? 0) > 0 &&
                (u.filter = "blur(" + this.props.blurAmount + "px)");
            let K = () => {
              u.drawImage(L, 0, 0, v * A[0], R * A[1]),
                h > 0 && this.m_schUpdate.Schedule(h, K);
            };
            K(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, t.jsx)("canvas", {
              id: this.props.id,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        S([b.oI], O.prototype, "BindCanvasRef", 1),
          S([b.oI], O.prototype, "updateCanvas", 1);
      },
      76867: (B, N, r) => {
        "use strict";
        r.d(N, { M: () => y });
        var t = r(7850),
          d = r(90626),
          b = r(80724);
        function y(m) {
          const { children: k, ...S } = m,
            O = d.useRef(null);
          return (0, t.jsx)(b.A, { nodeRef: O, ...S, children: m.children(O) });
        }
      },
      13465: (B, N, r) => {
        "use strict";
        r.d(N, { c: () => b });
        var t = r(7850),
          d = r(90626);
        function b(y) {
          const {
              rgSources: m,
              onIncrementalError: k,
              onError: S,
              strAltText: O,
              ref: g,
              ...A
            } = y,
            [L, h] = d.useState(0),
            u = d.useMemo(() => JSON.stringify(m), [m]),
            [v, R] = d.useState(u);
          v != u && (R(u), h(0));
          const K = d.useMemo(() => {
              let I = "";
              return (
                m && m.length > L && (I = m[L]),
                I ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    y,
                    L,
                  ),
                  (I =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                I
              );
            }, [m, L, y]),
            ge = d.useCallback(
              (I) => {
                k?.(I, m[L], L);
                const q = L + 1;
                q >= m.length && S && S(I), q < m.length && h(q);
              },
              [L, S, k, m],
            ),
            Y = d.useRef(null);
          return (
            d.useImperativeHandle(
              g,
              () => ({ imgRef: Y, nSourceIndex: L, nSourceLength: m.length }),
              [Y, L, m],
            ),
            d.useEffect(() => {
              const I = Y.current;
              I?.complete && I.naturalWidth == 0 && (I.src = I.src);
            }, []),
            (0, t.jsx)("img", { ref: Y, ...A, src: K, onError: ge, alt: O }, v)
          );
        }
      },
      17221: (B) => {
        B.exports = {
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
      79058: (B) => {
        B.exports = {
          GameList: "_2Ke99VagjO6dSjAa2PNqxC",
          GameListEntry: "_14lr0njLPbO3nOvfNr1AzG",
          Selected: "_3QI8hmWvFHwAfrradTNDas",
          Updating: "yTNHkI0JwNFkQUrUwQqN7",
          Uninstalled: "_2hOgDeHebiGfan9FuHhgQd",
          GameIcon: "_2ROZT5MqP-gQIPzHhHBUo5",
          GameIconPlaceholder: "_2AyMQ524UTKZGtMnnRVlpV",
        };
      },
      41983: (B) => {
        B.exports = {
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
      48077: (B) => {
        B.exports = {
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
      20521: (B) => {
        B.exports = {
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
          Hidden: "Avd7LN0ZZdCgbK1s-5m4T",
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
