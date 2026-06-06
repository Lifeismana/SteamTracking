var _ = _(_(), 1);
var _ = {
  LightboxDialog: "Oy9w-xG72Zg-",
  LightboxImageContainer: "PrZwlDJ-3cc-",
  LightboxMainImage: "_-853ROpHSwk-",
  LightboxPrevImage: "fw-nLSVHxnU-",
  LightboxNextImage: "sJQqgAVZxtM-",
  LightboxToolbar: "pzvPGhiderA-",
  LightboxImageTitle: "jm7pr-1Vnhs-",
  LightboxToolbarButtons: "x6MEQ3opfrY-",
  LightboxCloseButton: "a9ln5r-OGAo-",
  LightboxLeftButton: "_6lrdfkevazY-",
  LightboxRightButton: "-v4lS-8zmow-",
};
var _ = _(_(), 1);
function _(_) {
  let _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _.current?.showModal();
    let _ = document.body.style.overflow;
    return (
      (document.body.style.overflow = "hidden"),
      () => {
        document.body.style.overflow = _;
      }
    );
  }, []);
  let _ =
      typeof _.prevSrc == "string"
        ? (0, _.jsx)("img", {
            src: _.prevSrc,
          })
        : _.prevSrc,
    _ =
      typeof _.mainSrc == "string"
        ? (0, _.jsx)("img", {
            src: _.mainSrc,
          })
        : _.mainSrc,
    _ =
      typeof _.nextSrc == "string"
        ? (0, _.jsx)("img", {
            src: _.nextSrc,
          })
        : _.nextSrc,
    _ = [
      _.LightboxDialog,
      ...(_.backgroundClassName ? [_.backgroundClassName] : []),
    ];
  return (0, _.jsxs)("dialog", {
    ref: _,
    className: _(..._),
    onClose: (_) => _.onCloseRequest(_),
    onKeyDown: (_) => {
      _.key === "ArrowRight" && _.nextSrc
        ? _.onMoveNextRequest(_)
        : _.key === "ArrowLeft" && _.prevSrc && _.onMovePrevRequest(_);
    },
    children: [
      _.prevSrc &&
        (0, _.jsx)("div", {
          className: _(_.LightboxImageContainer, _.LightboxPrevImage),
          children: _,
        }),
      (0, _.jsx)("div", {
        className: _(_.LightboxImageContainer, _.LightboxMainImage),
        tabIndex: 0,
        onClick: (_) => {
          _.target.nodeName !== "IMG" && _.onCloseRequest(_);
        },
        children: _,
      }),
      _.nextSrc &&
        (0, _.jsx)("div", {
          className: _(_.LightboxImageContainer, _.LightboxNextImage),
          children: _,
        }),
      (0, _.jsxs)("div", {
        className: _.LightboxToolbar,
        children: [
          (0, _.jsx)("span", {
            className: _.LightboxImageTitle,
            children: _.imageTitle,
          }),
          (0, _.jsxs)("div", {
            className: _.LightboxToolbarButtons,
            children: [
              _.toolbarButtons,
              (0, _.jsx)("button", {
                className: _.LightboxCloseButton,
                onClick: _.onCloseRequest,
              }),
            ],
          }),
        ],
      }),
      _.prevSrc &&
        (0, _.jsx)("button", {
          className: _.LightboxLeftButton,
          onClick: _.onMovePrevRequest,
        }),
      _.nextSrc &&
        (0, _.jsx)("button", {
          className: _.LightboxRightButton,
          onClick: _.onMoveNextRequest,
        }),
    ],
  });
}
export { _ };
