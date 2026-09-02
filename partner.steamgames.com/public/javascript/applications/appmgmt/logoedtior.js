/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [2995],
    {
      85232: (A, D, a) => {
        "use strict";
        a.r(D),
          a.d(D, {
            Init_LibraryLogoEditor: () => Je,
            LogoEditor: () => ie,
            LogoEditorPopup: () => W,
          });
        var t = a(7850),
          p = a(90626),
          N = a(44844),
          S = a(41735),
          u = a.n(S),
          b = a(75844),
          C = a(80724),
          d = a(54963),
          k = a(13465),
          x = a(71742),
          g = a(36707),
          m = a(62510),
          L = a(8323);
        const O = "Play",
          R = "Launch",
          Y = "Cancel",
          he = "Stop",
          ge = "Pause",
          E = "Resume",
          Q = "Download",
          Ye = "Update",
          Ke = "PreLoad",
          Xe = "Install",
          Ze = "Uninstall",
          Qe = "RemoveShortcut",
          $e = "BorrowApp",
          qe = "PurchaseApp",
          et = "GameProperties",
          tt = "CreateDesktopShortcut",
          st = "BackUpFiles",
          ot = "Stream",
          nt = "Connect",
          it = "PlayMusic",
          rt = "BrowseLocalFiles",
          at = "Launching",
          lt = "Terminating",
          ct = "ResumeGameInProgress",
          pt = 75,
          dt = 100,
          ht = 250,
          gt = 0,
          mt = 1,
          ut = 2,
          ft = 3,
          Lt = 0,
          Pt = 1,
          At = 2,
          xt = 0,
          Bt = 1,
          vt = 2,
          _t = 0,
          It = 1,
          Ct = 2,
          Et = 4,
          St = 8,
          Ot = 16,
          Rt = 32,
          yt = 64,
          Tt = 128,
          jt = 256,
          Dt = 512,
          Nt = 1024,
          bt = 2048,
          kt = 4096,
          Mt = 8192,
          wt = 16384,
          Ut = 32768,
          Ft = 65536,
          Ht = 131072,
          Gt = 262144,
          zt = 524288,
          Wt = 1048576,
          Jt = 2097152,
          ae = "UpperLeft",
          K = "BottomLeft",
          H = "UpperCenter",
          M = "CenterCenter",
          G = "BottomCenter",
          Pe = null,
          Vt = void 0;
        var Ae = a(20521),
          n = a.n(Ae),
          xe = a(48077),
          Be = a.n(xe),
          ve = a(53107),
          _e = a(54212),
          le = a(76867),
          $ = a(13854),
          Ie = Object.defineProperty,
          Ce = Object.getOwnPropertyDescriptor,
          f = (r, e, i, s) => {
            for (
              var o = s > 1 ? void 0 : s ? Ce(e, i) : e, l = r.length - 1, c;
              l >= 0;
              l--
            )
              (c = r[l]) && (o = (s ? c(e, i, o) : c(o)) || o);
            return s && o && Ie(e, i, o), o;
          };
        const q = {
            exit: n().FullscreenExitStart,
            exitActive: n().FullscreenExitActive,
            exitDone: n().FullscreenExitDone,
            enter: n().FullscreenEnterStart,
            enterDone: n().FullscreenEnterDone,
            enterActive: n().FullscreenEnterActive,
          },
          ee = (0, ve.i_)(Be()["duration-app-launch"]),
          z = { pinnedPosition: K, nWidthPct: 50, nHeightPct: 50 },
          X = p.createContext({ bFullscreen: !1 });
        class te extends p.Component {
          m_refTopCapsule = p.createRef();
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
              return (0, t.jsx)(X.Provider, {
                value: { bFullscreen: this.props.bFullscreen },
                children: (0, t.jsx)(y, {
                  ref: this.m_refTopCapsule,
                  ...this.props,
                }),
              });
            const {
                children: e,
                logoPosition: i,
                editMode: s,
                ...o
              } = this.props,
              l = this.GetLogoPosition();
            return (0, t.jsx)(X.Provider, {
              value: { bFullscreen: this.props.bFullscreen },
              children: (0, t.jsxs)(y, {
                ref: this.m_refTopCapsule,
                ...o,
                editMode: !0,
                logoPosition: l,
                fnOnPositionChanged: this.OnPositionChanged,
                children: [
                  (0, t.jsx)("div", {
                    className: `${n().PinBox} ${n().BottomLeft}`,
                    onClick: () => this.SetPinnedPosition(K),
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
        f([d.oI], te.prototype, "SetDimensions", 1),
          f([d.oI], te.prototype, "OnPositionChanged", 1),
          f([d.oI], te.prototype, "PostPositionChangeCallback", 1);
        let y = class extends p.Component {
          m_refBackgroundImage = p.createRef();
          m_refLogoImage = p.createRef();
          constructor(r) {
            super(r),
              (0, x.wT)(
                !r.editMode || r.rgLogoImages.length <= 1,
                "Can't use multiple logo images in edit mode",
              ),
              (this.state = {
                bHasHeaderImage: r.rgHeaderImages.length > 0,
                bHasLogoImage: r.rgLogoImages.length > 0,
                bLogoLoaded: !1,
              });
          }
          componentDidUpdate(r) {
            let e = null;
            (JSON.stringify(r.rgHeaderImages) !=
              JSON.stringify(this.props.rgHeaderImages) ||
              JSON.stringify(r.rgBlurImages) !=
                JSON.stringify(this.props.rgBlurImages)) &&
              ((e = e || {}),
              (e.bHasHeaderImage = this.props.rgHeaderImages.length > 0)),
              JSON.stringify(r.rgLogoImages) !=
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
          OnIncrementalLogoError(r, e, i) {
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
                rgLogoImages: r,
                editMode: e,
                logoPosition: i,
                className: s,
                classNameNoLogo: o,
                fnOnPositionChanged: l,
                height: c,
              } = this.props,
              { bHasLogoImage: B } = this.state,
              v = this.props.rgHeaderImages.length == 1,
              T = (0, g.A)(
                n().TopCapsule,
                s,
                !this.state.bHasHeaderImage && n().NoArt,
                (!this.props.hasHeroImage || v) && n().FallbackArt,
                !B && o,
              ),
              j = { "--header-height": c == null ? void 0 : c + "px" };
            return (0, t.jsx)(le.M, {
              timeout: ee,
              appear: !0,
              in: this.props.bFullscreen,
              classNames: q,
              children: (w) =>
                (0, t.jsxs)("div", {
                  ref: w,
                  className: T,
                  style: j,
                  children: [
                    (0, t.jsx)(se, {
                      ref: this.m_refBackgroundImage,
                      bLowPerfMode: this.props.bLowPerfMode,
                      appid: this.props.appid,
                      rgHeaderImages: this.props.rgHeaderImages,
                      rgBlurImages: this.props.rgBlurImages,
                      onReportHeroImageMiss: this.props.fnReportHeroImageMiss,
                      onError: this.OnHeaderError,
                      onLoad: this.OnLoaded,
                    }),
                    B &&
                      i !== Pe &&
                      (0, t.jsx)(
                        Ee,
                        {
                          strLogoImageURL: r[0],
                          editMode: e,
                          logoPosition: i || z,
                          fnOnPositionChanged: e && l,
                          fullscreen: this.props.bFullscreen,
                          children: (0, t.jsx)(k.c, {
                            ref: this.m_refLogoImage,
                            className: (0, g.A)(
                              n().TitleLogo,
                              this.state.bLogoLoaded && n().Loaded,
                            ),
                            rgSources: r,
                            onLoad: this.OnLogoLoad,
                            onIncrementalError: this.OnIncrementalLogoError,
                            onError: this.OnLogoError,
                          }),
                        },
                        r[0],
                      ),
                    this.props.children,
                    (0, t.jsx)("div", { className: n().TopGradient }),
                  ],
                }),
            });
          }
        };
        f([d.oI], y.prototype, "OnHeaderError", 1),
          f([d.oI], y.prototype, "OnIncrementalLogoError", 1),
          f([d.oI], y.prototype, "OnLogoError", 1),
          f([d.oI], y.prototype, "OnLogoLoad", 1),
          f([d.oI], y.prototype, "OnLoaded", 1),
          (y = f([b.PA], y));
        class se extends p.Component {
          m_refBackgroundImage = p.createRef();
          m_refCanvasBlurImage;
          constructor(e) {
            super(e),
              (this.state = {
                bBackgroundLoaded: !1,
                nBlurImageIndex: 0,
                bUseCanvasBlur: !this.HasBlurImages(),
              });
          }
          componentDidMount() {
            !this.HasHeaderImages() && this.props.onLoad && this.props.onLoad();
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
                this.props.onLoad());
          }
          get src() {
            return (
              this.m_refBackgroundImage.current &&
              this.m_refBackgroundImage.current?.imgRef.current?.src
            );
          }
          OnIncrementalError(e, i, s) {
            this.props.onReportHeroImageMiss &&
              this.props.onReportHeroImageMiss(this.props.appid, i),
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
                this.setState({ bUseCanvasBlur: !0 }),
              this.setState({ bBackgroundLoaded: !0 });
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
            let e = null;
            return (
              (e = (0, t.jsxs)(p.Fragment, {
                children: [
                  !this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    this.props.rgBlurImages[this.state.nBlurImageIndex] &&
                    (0, t.jsx)("img", {
                      src: this.props.rgBlurImages[this.state.nBlurImageIndex],
                      className: (0, g.A)(
                        n().ImgSrc,
                        n().ImgBlur,
                        n().ImgBlurBackdrop,
                      ),
                      onError: this.OnBlurImageFailed,
                    }),
                  this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    !this.props.bLowPerfMode &&
                    (0, t.jsx)(m.m, {
                      className: (0, g.A)(
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
              (0, t.jsx)(X.Consumer, {
                children: (i) =>
                  (0, t.jsx)(le.M, {
                    timeout: ee,
                    appear: !0,
                    in: i.bFullscreen,
                    classNames: q,
                    children: (s) =>
                      (0, t.jsxs)("div", {
                        ref: s,
                        className: (0, g.A)(
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
                              className: (0, g.A)(n().ImgSrc, n().ImgBlur),
                              onError: this.OnBlurImageFailed,
                            }),
                          this.state.bUseCanvasBlur &&
                            this.state.bBackgroundLoaded &&
                            !this.props.bLowPerfMode &&
                            (0, t.jsx)(m.m, {
                              className: (0, g.A)(n().ImgSrc, n().ImgBlur),
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
                              (0, t.jsx)(k.c, {
                                ref: this.m_refBackgroundImage,
                                rgSources: this.props.rgHeaderImages,
                                className: n().ImgSrc,
                                onLoad: this.OnHeaderLoad,
                                onIncrementalError: this.OnIncrementalError,
                                onError: this.props.onError,
                              }),
                          }),
                          e,
                        ],
                      }),
                  }),
              })
            );
          }
        }
        f([d.oI], se.prototype, "OnIncrementalError", 1),
          f([d.oI], se.prototype, "OnHeaderLoad", 1),
          f([d.oI], se.prototype, "OnBlurImageFailed", 1);
        function Ee(r) {
          const {
              logoPosition: e,
              strLogoImageURL: i,
              children: s,
              fnOnPositionChanged: o,
              fullscreen: l,
            } = r,
            {
              nBottomPct: c,
              nTopPct: B,
              nLeftPct: v,
              nRightPct: T,
            } = ce(e.pinnedPosition, e.nWidthPct, e.nHeightPct),
            j = p.useContext(X),
            w = {
              left: `${v}%`,
              top: `${B}%`,
              width: `${e.nWidthPct}%`,
              height: `${e.nHeightPct}%`,
            },
            J = (0, g.A)(n().BoxSizer, n()[e.pinnedPosition]);
          return (0, t.jsx)("div", {
            className: n().BoxSizerContainer,
            children: (0, t.jsxs)("div", {
              className: n().BoxSizerValidRegion,
              children: [
                !r.editMode &&
                  (0, t.jsx)("div", {
                    className: J,
                    style: w,
                    children: (0, t.jsx)(le.M, {
                      timeout: ee,
                      appear: !0,
                      in: l,
                      classNames: q,
                      children: (V) =>
                        (0, t.jsx)("div", {
                          ref: V,
                          className: n().TitleImageContainer,
                          children: s,
                        }),
                    }),
                  }),
                r.editMode &&
                  (0, t.jsx)(U, {
                    id: i,
                    pinType: e.pinnedPosition,
                    index: 0,
                    widthPct: e.nWidthPct,
                    heightPct: e.nHeightPct,
                    fnOnPositionChanged: o,
                    children: s,
                  }),
              ],
            }),
          });
        }
        function ce(r, e, i) {
          let s, o, l, c;
          switch (r) {
            case K:
              (s = 0), (o = 100 - i), (l = 0), (c = 100 - e);
              break;
            case ae:
              (s = 100 - i), (o = 0), (l = 0), (c = 100 - e);
              break;
            case M:
              (s = (100 - i) / 2),
                (o = (100 - i) / 2),
                (l = (100 - e) / 2),
                (c = (100 - e) / 2);
              break;
            case H:
              (s = 100 - i), (o = 0), (l = (100 - e) / 2), (c = (100 - e) / 2);
              break;
            case G:
              (s = 0), (o = 100 - i), (l = (100 - e) / 2), (c = (100 - e) / 2);
              break;
            default:
              break;
          }
          return { nBottomPct: s, nTopPct: o, nLeftPct: l, nRightPct: c };
        }
        var Se = ((r) => (
          (r.topleft = "Topleft"),
          (r.top = "Top"),
          (r.topright = "TopRight"),
          (r.left = "Left"),
          (r.middle = "Middle"),
          (r.right = "Right"),
          (r.bottomleft = "BottomLeft"),
          (r.bottom = "Bottom"),
          (r.bottomright = "BottomRight"),
          r
        ))(Se || {});
        class U extends p.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new L.Ji();
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
            const { pinType: s, widthPct: o, heightPct: l, id: c } = e;
            if (i && i.id == c) return null;
            const {
              nBottomPct: B,
              nTopPct: v,
              nLeftPct: T,
              nRightPct: j,
            } = ce(s, o, l);
            return {
              id: c,
              curBottomPosPct: B,
              curTopPosPct: v,
              curLeftPosPct: T,
              curRightPosPct: j,
              curWidthPct: o,
              curHeightPct: l,
              EdgeDown: null,
              pinType: s,
            };
          }
          LinkRegionBoxRef(e) {
            this.m_elLinkRegionBox = e;
          }
          OnMouseDown(e, i) {
            (this.m_fnMouseUp = (s) => {
              this.OnMouseUp(s, i);
            }),
              (this.m_fnMouseMove = (s) => {
                this.OnMouseMove(s, i);
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
              nLeftPct: s,
              nRightPct: o,
            } = ce(
              this.m_pinType,
              this.state.curWidthPct,
              this.state.curHeightPct,
            );
            this.setState({
              curBottomPosPct: e,
              curTopPosPct: i,
              curLeftPosPct: s,
              curRightPosPct: o,
            });
          }
          OnMouseMove(e, i) {
            if (this.state.EdgeDown === void 0) return;
            e.shiftKey && this.m_fnMouseUp();
            let {
              curTopPosPct: s,
              curRightPosPct: o,
              curBottomPosPct: l,
              curLeftPosPct: c,
            } = this.state;
            const B = (F) => {
                let _ =
                  ((F - this.m_rectLinkRegion.left) /
                    (this.m_rectLinkRegion.right -
                      this.m_rectLinkRegion.left)) *
                    100 -
                  this.m_nLocalOffsetXPct;
                if (this.props.pinType == ae || this.props.pinType == K)
                  return 0;
                if (
                  this.props.pinType == M ||
                  this.props.pinType == G ||
                  this.props.pinType == H
                ) {
                  let I = Math.min(Math.max(_, 0), 45);
                  return (o = I), I;
                }
                return _;
              },
              v = (F) => {
                let _ =
                  100 -
                  (((F - this.m_rectLinkRegion.left) /
                    (this.m_rectLinkRegion.right -
                      this.m_rectLinkRegion.left)) *
                    100 +
                    (this.state.curWidthPct - this.m_nLocalOffsetXPct));
                if (
                  this.props.pinType == M ||
                  this.props.pinType == G ||
                  this.props.pinType == H
                ) {
                  let I = Math.min(Math.max(_, 0), 45);
                  return (c = I), I;
                }
                return _;
              },
              T = (F) => {
                let _ =
                  ((F - this.m_rectLinkRegion.top) /
                    (this.m_rectLinkRegion.bottom -
                      this.m_rectLinkRegion.top)) *
                    100 -
                  this.m_nLocalOffsetYPct;
                if (this.props.pinType == H || this.props.pinType == ae)
                  return 0;
                if (this.props.pinType == M) {
                  let I = Math.min(Math.max(_, 0), 45);
                  return (l = I), I;
                }
                return _;
              },
              j = (F) => {
                let _ =
                  100 -
                  (((F - this.m_rectLinkRegion.top) /
                    (this.m_rectLinkRegion.bottom -
                      this.m_rectLinkRegion.top)) *
                    100 +
                    (this.state.curHeightPct - this.m_nLocalOffsetYPct));
                if (this.props.pinType == K || this.props.pinType == G)
                  return 0;
                if (this.props.pinType == M) {
                  let I = Math.min(Math.max(_, 0), 45);
                  return (s = I), I;
                }
                return _;
              };
            function w() {
              l = Math.min(l, 98 - s);
            }
            function J() {
              o = Math.min(o, 99 - c);
            }
            function V() {
              s = Math.min(s, 98 - l);
            }
            function re() {
              c = Math.min(c, 99 - o);
            }
            switch (i) {
              case "Left":
                (c = B(e.clientX)), re();
                break;
              case "Right":
                (o = v(e.clientX)), J();
                break;
              case "Top":
                (s = T(e.clientY)), V();
                break;
              case "Bottom":
                (l = j(e.clientY)), w();
                break;
              case "Topleft":
                (s = T(e.clientY)), (c = B(e.clientX)), V(), re();
                break;
              case "TopRight":
                (s = T(e.clientY)), (o = v(e.clientX)), V(), J();
                break;
              case "BottomLeft":
                (l = j(e.clientY)), (c = B(e.clientX)), w(), re();
                break;
              case "BottomRight":
                (l = j(e.clientY)), (o = v(e.clientX)), w(), J();
                break;
              case "Middle":
                (o = v(e.clientX)),
                  (l = j(e.clientY)),
                  this.state.pinType != M && (s = T(e.clientY)),
                  this.state.pinType != M &&
                    this.state.pinType != G &&
                    this.state.pinType != H &&
                    (c = B(e.clientX)),
                  V(),
                  w(),
                  re(),
                  J();
                break;
              default:
                break;
            }
            (s = (0, $.OQ)(s, 0, 98)),
              (l = (0, $.OQ)(l, 0, 98)),
              (c = (0, $.OQ)(c, 0, 99)),
              (o = (0, $.OQ)(o, 0, 99)),
              this.setState({
                curTopPosPct: s,
                curRightPosPct: o,
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
              i = (0, g.A)(
                n().BoxSizerDragBox,
                this.state.EdgeDown &&
                  (0, g.A)(n().EdgeDown, n()[this.state.EdgeDown]),
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
                    onMouseDown: (s) => {
                      this.OnMouseDown(s, "Topleft");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Top}`,
                    onMouseDown: (s) => {
                      this.OnMouseDown(s, "Top");
                    },
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().TopRight}`,
                    onMouseDown: (s) => {
                      this.OnMouseDown(s, "TopRight");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Left}`,
                    onMouseDown: (s) => {
                      this.OnMouseDown(s, "Left");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Middle}`,
                    onMouseDown: (s) => {
                      this.OnMouseDown(s, "Middle");
                    },
                    draggable: !1,
                    children: (0, t.jsx)("div", {
                      className: n().TitleImageContainer,
                      children: this.props.children,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Right}`,
                    onMouseDown: (s) => {
                      this.OnMouseDown(s, "Right");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().BottomLeft}`,
                    onMouseDown: (s) => {
                      this.OnMouseDown(s, "BottomLeft");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().Bottom}`,
                    onMouseDown: (s) => {
                      this.OnMouseDown(s, "Bottom");
                    },
                    draggable: !1,
                  }),
                  (0, t.jsx)("div", {
                    className: `${n().BoxSizerEdge} ${n().BottomRight}`,
                    onMouseDown: (s) => {
                      this.OnMouseDown(s, "BottomRight");
                    },
                    draggable: !1,
                  }),
                ],
              }),
            });
          }
        }
        f([d.oI], U.prototype, "LinkRegionBoxRef", 1),
          f([d.oI], U.prototype, "OnMouseDown", 1),
          f([d.oI], U.prototype, "UpdateBoxPosition", 1),
          f([d.oI], U.prototype, "OnMouseMove", 1),
          f([d.oI], U.prototype, "OnMouseUp", 1),
          f([d.oI], U.prototype, "OnResizeComplete", 1);
        const Oe = (r) => {
          const { title: e, className: i } = r;
          let s = 300,
            o = 14,
            l = 26;
          e.length > 8 && (l = Math.max(l - (e.length - 5) / 2, 5.8));
          const [c, B] = (0, _e.l)();
          return (0, t.jsxs)("svg", {
            className: (0, g.A)(n().SVGTitle, i),
            viewBox: "0 0 " + s + " " + o,
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
                y: o,
                fontSize: l,
                textAnchor: "bottom",
                fontWeight: "200",
                fill: B,
                children: e,
              }),
            ],
          });
        };
        function Re(r) {
          const { title: e, children: i } = r,
            s = p.useContext(X),
            o = p.useRef(null);
          return (0, t.jsx)(C.A, {
            nodeRef: o,
            timeout: ee,
            appear: !0,
            in: s.bFullscreen,
            classNames: q,
            children: (0, t.jsxs)("div", {
              ref: o,
              className: (0, g.A)(n().TitleSection, e ? n().NoLogo : ""),
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
        var pe = a(14947),
          ye = Object.defineProperty,
          Te = Object.getOwnPropertyDescriptor,
          je = (r, e, i, s) => {
            for (
              var o = s > 1 ? void 0 : s ? Te(e, i) : e, l = r.length - 1, c;
              l >= 0;
              l--
            )
              (c = r[l]) && (o = (s ? c(e, i, o) : c(o)) || o);
            return s && o && ye(e, i, o), o;
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
        var De = a(41983),
          P = a.n(De),
          Ne = a(17221),
          h = a.n(Ne),
          ue = a(36118);
        function be() {
          return (0, t.jsxs)(p.Fragment, {
            children: [
              (0, t.jsx)("span", { style: { fontSize: 0 } }),
              (0, t.jsx)("div", {
                className: (0, g.A)(h().Container),
                children: (0, t.jsxs)("div", {
                  className: h().Row,
                  children: [
                    (0, t.jsx)(Ue, {}),
                    (0, t.jsx)(ke, {}),
                    (0, t.jsx)("div", {
                      className: h().RightControls,
                      children: (0, t.jsxs)("div", {
                        className: h().AppButtonsContainer,
                        children: [
                          (0, t.jsx)("div", {
                            className: h().MenuButton,
                            children: (0, t.jsx)(ue.wB_, {}),
                          }),
                          (0, t.jsxs)("div", {
                            className: h().GameInfoButton,
                            children: [
                              "Game Info",
                              (0, t.jsx)("div", {
                                className: h().Arrow,
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
            className: (0, g.A)(h().StatusAndStats),
            children: (0, t.jsx)(Me, {}),
          });
        }
        function Me() {
          return (0, t.jsxs)("div", {
            className: h().GameStatsSection,
            children: [
              (0, t.jsx)("div", {
                className: h().LastPlayed,
                children: (0, t.jsxs)("div", {
                  className: h().LastPlayedRight,
                  children: [
                    (0, t.jsx)("div", {
                      className: h().LastPlayedLabel,
                      children: "LAST PLAYED",
                    }),
                    (0, t.jsx)("div", {
                      className: h().LastPlayedInfo,
                      children: "Mar 24",
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("div", {
                className: h().Playtime,
                children: [
                  (0, t.jsx)("div", { className: h().PlaytimeLeft }),
                  (0, t.jsxs)("div", {
                    className: h().PlaytimeRight,
                    children: [
                      (0, t.jsx)("div", {
                        className: h().PlaytimeLabel,
                        children: "PLAY TIME",
                      }),
                      (0, t.jsx)("div", {
                        className: h().PlaytimeInfo,
                        children: "37 hours",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: h().MiniAchievements,
                children: [
                  (0, t.jsx)("div", { className: h().AchievementLeft }),
                  (0, t.jsxs)("div", {
                    className: h().AchievementRight,
                    children: [
                      (0, t.jsx)("div", {
                        className: h().AchievementLabel,
                        children: "ACHIEVEMENTS",
                      }),
                      (0, t.jsxs)("div", {
                        className: h().AchievementProgressRow,
                        children: [
                          (0, t.jsx)("div", {
                            className: h().AchievementCountLabel,
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
        class we extends p.Component {
          render() {
            return (0, t.jsx)("div", {
              className: h().DetailsProgressContainer,
              children: (0, t.jsx)("div", {
                className: h().DetailsProgressBar,
                style: { width: this.props.progressPct + "%" },
              }),
            });
          }
        }
        function Ue() {
          return (0, t.jsx)("div", {
            className: h().ActionSection,
            children: (0, t.jsx)("div", {
              className: h().PlayButtonContainer,
              children: (0, t.jsx)("div", {
                className: (0, g.A)(h().PlayButton, h().Green),
                children: (0, t.jsx)("div", {
                  className: h().ButtonText,
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
        var Fe = a(79058),
          oe = a.n(Fe);
        const de = JSON.parse(
          `["Apex Legends\u2122","Baldur's Gate 3","Battlefield\u2122 6","Black Desert","Black Myth: Wukong","Borderlands 4","Clair Obscur: Expedition 33","Counter-Strike 2","Cronos: The New Dawn","Crusader Kings III","Cyberpunk 2077","Dead by Daylight","Delta Force","Destiny 2","Dota 2","Dune: Awakening","Dying Light: The Beast","EA SPORTS FC\u2122 26","ELDEN RING","ELDEN RING NIGHTREIGN","Euro Truck Simulator 2","F1\xAE 25","FINAL FANTASY XIV Online","Forza Horizon 5","Grand Theft Auto V Enhanced","Grounded 2","HELLDIVERS\u2122 2","Hollow Knight","Hollow Knight: Silksong","Killing Floor 3","Kingdom Come: Deliverance II","Limbus Company","Lost Ark","METAL GEAR SOLID \u0394: SNAKE EATER","Madden NFL 26","Mafia: The Old Country","Mage Arena","Magic: The Gathering Arena","Marvel Rivals","NARAKA: BLADEPOINT","NBA 2K26","No Man's Sky","Once Human","Overwatch\xAE 2","PEAK","PUBG: BATTLEGROUNDS","Path of Exile 2","R.E.P.O.","Ready or Not","Red Dead Redemption 2","RimWorld","Rust","Schedule I","Shape of Dreams","Split Fiction","Stardew Valley","Street Fighter\u2122 6","THE FINALS","THRONE AND LIBERTY","Team Fortress 2","The Elder Scrolls\xAE Online","The First Descendant","The Sims\u2122 4","Titan Quest II","Tom Clancy's Rainbow Six\xAE Siege X","Umamusume: Pretty Derby","WUCHANG: Fallen Feathers","Wallpaper Engine","War Thunder","Warframe","Warhammer 40,000: Dawn of War - Definitive Edition","Warhammer 40,000: Space Marine 2","Wuthering Waves","Yu-Gi-Oh! Master Duel","\u96C0\u9B42\u9EBB\u5C07(MahjongSoul)"]`,
        );
        function He(r) {
          const { highlightedName: e } = r,
            i = p.useCallback((o) => {
              o && o.scrollIntoView({ block: "center" });
            }, []),
            s = p.useMemo(() => {
              if (de.indexOf(e) !== -1) return de;
              {
                const o = [...de, e];
                return o.sort(), o;
              }
            }, [e]);
          return (0, t.jsx)("div", {
            className: oe().GameList,
            children: s.map((o) => {
              let l = e === o;
              return (0, t.jsx)(
                "div",
                {
                  className: (0, g.A)(
                    oe().GameListEntry,
                    l ? oe().Selected : oe().Uninstalled,
                  ),
                  ref: l ? i : void 0,
                  children: o,
                },
                o,
              );
            }),
          });
        }
        var ne = a(18210),
          fe = a(3166),
          Ge = a(85599),
          Le = a(58534),
          ze = Object.defineProperty,
          We = Object.getOwnPropertyDescriptor,
          Z = (r, e, i, s) => {
            for (
              var o = s > 1 ? void 0 : s ? We(e, i) : e, l = r.length - 1, c;
              l >= 0;
              l--
            )
              (c = r[l]) && (o = (s ? c(e, i, o) : c(o)) || o);
            return s && o && ze(e, i, o), o;
          };
        function Je(r, e) {
          const i = (0, fe.Tc)("editorconfig", e);
          let s = new me(i);
          N.createRoot(e).render(
            p.createElement(r ? W : ie, { LogoEditorStore: s }),
          );
        }
        class W extends p.Component {
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
                  let s = new FormData();
                  s.append("json", "1"),
                    s.append("sessionid", (0, fe.KC)()),
                    s.append(
                      "app[assets][library_logo][logo_position][pinned_position]",
                      i.pinnedPosition,
                    ),
                    s.append(
                      "app[assets][library_logo][logo_position][width_pct]",
                      "" + i.nWidthPct,
                    ),
                    s.append(
                      "app[assets][library_logo][logo_position][height_pct]",
                      "" + i.nHeightPct,
                    );
                  let o = await u().post(e.GetSaveURL(), s);
                  this.setState({ saving: !1, saved: !0, unsavedChanges: !1 });
                } catch (s) {
                  console.error(s),
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
            return (0, t.jsx)(p.Fragment, {
              children: (0, t.jsxs)("div", {
                className: (0, g.A)(
                  P().LogoEditorPopup,
                  this.state.saving && P().Saving,
                ),
                children: [
                  (0, t.jsxs)("div", {
                    className: P().LogoEditorSaveActions,
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, g.A)(
                          P().LogoEditorSavedMessage,
                          this.state.saved && P().Saved,
                        ),
                        children: (0, ne.we)(
                          "#StoreAdmin_LibraryPlacementTool_ChangesSaved",
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        className: P().LogoEditorButtons,
                        children: [
                          (0, t.jsx)(Le.jn, {
                            onClick: this.OnOK,
                            className: P().LogoEditorButton,
                            children: (0, ne.we)("#Button_Save"),
                          }),
                          (0, t.jsx)(Le.$n, {
                            onClick: this.OnCancel,
                            className: P().LogoEditorButton,
                            children: this.state.unsavedChanges
                              ? (0, ne.we)("#Button_Cancel")
                              : (0, ne.we)("#Button_Close"),
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
                  (0, t.jsx)(ie, {
                    ...this.props,
                    fnOnPositionChanged: this.OnPositionChanged,
                  }),
                ],
              }),
            });
          }
        }
        Z([d.oI], W.prototype, "OnBeforeUnload", 1),
          Z([d.oI], W.prototype, "OnOK", 1),
          Z([d.oI], W.prototype, "OnCancel", 1),
          Z([d.oI], W.prototype, "OnPositionChanged", 1);
        class ie extends p.Component {
          constructor(e) {
            super(e), (this.state = { bEditModeEnabled: !0 });
          }
          OnPositionChanged(e) {
            const { LogoEditorStore: i, fnOnPositionChanged: s } = this.props;
            i.SetLogoPosition(e), s && s(e);
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
                      children: (0, t.jsx)(te, {
                        editMode: i && this.state.bEditModeEnabled,
                        hasHeroImage: !0,
                        rgHeaderImages: [e.GetHeroURL()],
                        rgLogoImages: i ? [e.GetLogoURL()] : [],
                        classNameNoLogo: P().NoLogoImage,
                        fnOnPositionChanged: this.OnPositionChanged,
                        logoPosition: e.GetLogoPosition(),
                        children: (0, t.jsx)(Re, {
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
        Z([d.oI], ie.prototype, "OnPositionChanged", 1);
        const Ve = (0, b.PA)((r) => {
          const e = r.LogoEditorStore.GetLogoPosition();
          return (0, t.jsxs)(p.Fragment, {
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
      62510: (A, D, a) => {
        "use strict";
        a.d(D, { m: () => d });
        var t = a(7850),
          p = a(90626),
          N = a(54963),
          S = a(8323),
          u = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          C = (k, x, g, m) => {
            for (
              var L = m > 1 ? void 0 : m ? b(x, g) : x, O = k.length - 1, R;
              O >= 0;
              O--
            )
              (R = k[O]) && (L = (m ? R(x, g, L) : R(L)) || L);
            return m && L && u(x, g, L), L;
          };
        class d extends p.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new S.LU();
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
          BindCanvasRef(x) {
            this.m_elCanvas = x;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let x = this.props.scaleFactor || [1, 1],
              g = this.props.elementRef,
              m = this.props.updateRate;
            const L = this.m_elCanvas.getContext("2d");
            if (!L) return;
            this.m_Context = L;
            let O = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              R = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = O),
              (this.m_elCanvas.height = R),
              (this.props.blurAmount ?? 0) > 0 &&
                (L.filter = "blur(" + this.props.blurAmount + "px)");
            let Y = () => {
              L.drawImage(g, 0, 0, O * x[0], R * x[1]),
                m > 0 && this.m_schUpdate.Schedule(m, Y);
            };
            Y(), (this.m_bSetupComplete = !0);
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
        C([N.oI], d.prototype, "BindCanvasRef", 1),
          C([N.oI], d.prototype, "updateCanvas", 1);
      },
      76867: (A, D, a) => {
        "use strict";
        a.d(D, { M: () => S });
        var t = a(7850),
          p = a(90626),
          N = a(80724);
        function S(u) {
          const { children: b, ...C } = u,
            d = p.useRef(null);
          return (0, t.jsx)(N.A, { nodeRef: d, ...C, children: u.children(d) });
        }
      },
      13465: (A, D, a) => {
        "use strict";
        a.d(D, { c: () => N });
        var t = a(7850),
          p = a(90626);
        function N(S) {
          const {
              rgSources: u,
              onIncrementalError: b,
              onError: C,
              strAltText: d,
              ref: k,
              ...x
            } = S,
            g = p.useRef(null),
            [m, L] = p.useState(0),
            [O, R] = p.useState(0);
          p.useImperativeHandle(
            k,
            () => ({ imgRef: g, nSourceIndex: m, nSourceLength: u.length }),
            [g, m, u],
          );
          const Y = p.useMemo(() => JSON.stringify(u), [u]);
          p.useEffect(() => {
            L(0), R((E) => E + 1);
          }, [Y]);
          const he = p.useMemo(() => {
              let E = "";
              return (
                u && u.length > m && (E = u[m]),
                E ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    S,
                    m,
                  ),
                  (E =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                E
              );
            }, [u, m, S]),
            ge = p.useCallback(
              (E) => {
                b?.(E, u[m], m);
                const Q = m + 1;
                Q >= u.length && C && C(E), Q < u.length && L(Q);
              },
              [m, C, b, u],
            );
          return (0, t.jsx)(
            "img",
            { ref: g, ...x, src: he, onError: ge, alt: d },
            O,
          );
        }
      },
      17221: (A) => {
        A.exports = {
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
      79058: (A) => {
        A.exports = {
          GameList: "_2Ke99VagjO6dSjAa2PNqxC",
          GameListEntry: "_14lr0njLPbO3nOvfNr1AzG",
          Selected: "_3QI8hmWvFHwAfrradTNDas",
          Updating: "yTNHkI0JwNFkQUrUwQqN7",
          Uninstalled: "_2hOgDeHebiGfan9FuHhgQd",
          GameIcon: "_2ROZT5MqP-gQIPzHhHBUo5",
          GameIconPlaceholder: "_2AyMQ524UTKZGtMnnRVlpV",
        };
      },
      41983: (A) => {
        A.exports = {
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
      48077: (A) => {
        A.exports = {
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
      20521: (A) => {
        A.exports = {
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
