"use strict";
(() => {
  (self.webpackChunkHelp = self.webpackChunkHelp || []).push([
    [7767],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        const _ = null,
          _ = null,
          _ = null,
          _ = Math.min,
          _ = Math.max,
          _ = Math.round,
          _ = Math.floor,
          _ = (_) => ({
            _: _,
            _: _,
          }),
          _ = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
        function _(_, _, _) {
          return _(_, _(_, _));
        }
        function _(_, _) {
          return typeof _ == "function" ? _(_) : _;
        }
        function _(_) {
          return _.split("-")[0];
        }
        function _(_) {
          return _.split("-")[1];
        }
        function _(_) {
          return _ === "x" ? "y" : "x";
        }
        function _(_) {
          return _ === "y" ? "height" : "width";
        }
        function _(_) {
          const _ = _[0];
          return _ === "t" || _ === "b" ? "y" : "x";
        }
        function _(_) {
          return _(_(_));
        }
        function _(_, _, _) {
          _ === void 0 && (_ = !1);
          const _ = _(_),
            _ = _(_),
            _ = _(_);
          let _ =
            _ === "x"
              ? _ === (_ ? "end" : "start")
                ? "right"
                : "left"
              : _ === "start"
                ? "bottom"
                : "top";
          return _.reference[_] > _.floating[_] && (_ = _(_)), [_, _(_)];
        }
        function _(_) {
          const _ = _(_);
          return [_(_), _, _(_)];
        }
        function _(_) {
          return _.includes("start")
            ? _.replace("start", "end")
            : _.replace("end", "start");
        }
        const _ = ["left", "right"],
          _ = ["right", "left"],
          _ = ["top", "bottom"],
          _ = ["bottom", "top"];
        function _(_, _, _) {
          switch (_) {
            case "top":
            case "bottom":
              return _ ? (_ ? _ : _) : _ ? _ : _;
            case "left":
            case "right":
              return _ ? _ : _;
            default:
              return [];
          }
        }
        function _(_, _, _, _) {
          const _ = _(_);
          let _ = _(_(_), _ === "start", _);
          return (
            _ &&
              ((_ = _.map((_) => _ + "-" + _)), _ && (_ = _.concat(_.map(_)))),
            _
          );
        }
        function _(_) {
          const _ = _(_);
          return _[_] + _.slice(_.length);
        }
        function _(_) {
          var _, _, _, _;
          return {
            top: (_ = _.top) != null ? _ : 0,
            right: (_ = _.right) != null ? _ : 0,
            bottom: (_ = _.bottom) != null ? _ : 0,
            left: (_ = _.left) != null ? _ : 0,
          };
        }
        function _(_) {
          return typeof _ != "number"
            ? _(_)
            : {
                top: _,
                right: _,
                bottom: _,
                left: _,
              };
        }
        function _(_) {
          const { _: _, _: _, width: _, height: _ } = _;
          return {
            width: _,
            height: _,
            top: _,
            left: _,
            right: _ + _,
            bottom: _ + _,
            _: _,
            _: _,
          };
        }
        function _(_, _, _) {
          let { reference: _, floating: _ } = _;
          const _ = _(_),
            _ = _(_),
            _ = _(_),
            _ = _(_),
            _ = _ === "y",
            _ = _._ + _.width / 2 - _.width / 2,
            _ = _._ + _.height / 2 - _.height / 2,
            _ = _[_] / 2 - _[_] / 2;
          let _;
          switch (_) {
            case "top":
              _ = {
                _: _,
                _: _._ - _.height,
              };
              break;
            case "bottom":
              _ = {
                _: _,
                _: _._ + _.height,
              };
              break;
            case "right":
              _ = {
                _: _._ + _.width,
                _: _,
              };
              break;
            case "left":
              _ = {
                _: _._ - _.width,
                _: _,
              };
              break;
            default:
              _ = {
                _: _._,
                _: _._,
              };
          }
          const _ = _(_);
          return (
            _ && (_[_] += _ * (_ === "end" ? 1 : -1) * (_ && _ ? -1 : 1)), _
          );
        }
        async function _(_, _) {
          var _;
          _ === void 0 && (_ = {});
          const {
              _: _,
              _: _,
              platform: _,
              rects: _,
              elements: _,
              strategy: _,
            } = _,
            {
              boundary: _ = "clippingAncestors",
              rootBoundary: _ = "viewport",
              elementContext: _ = "floating",
              altBoundary: _ = !1,
              padding: _ = 0,
            } = _(_, _),
            _ = _(_),
            _ = _[_ ? (_ === "floating" ? "reference" : "floating") : _],
            _ = _(
              await _.getClippingRect({
                element:
                  (_ = await (_.isElement == null ? void 0 : _.isElement(_))) ==
                    null || _
                    ? _
                    : _.contextElement ||
                      (await (_.getDocumentElement == null
                        ? void 0
                        : _.getDocumentElement(_.floating))),
                boundary: _,
                rootBoundary: _,
                strategy: _,
              }),
            ),
            _ =
              _ === "floating"
                ? {
                    _: _,
                    _: _,
                    width: _.floating.width,
                    height: _.floating.height,
                  }
                : _.reference,
            _ = await (_.getOffsetParent == null
              ? void 0
              : _.getOffsetParent(_.floating)),
            _ = ((await (_.isElement == null ? void 0 : _.isElement(_))) &&
              (await (_.getScale == null ? void 0 : _.getScale(_)))) || {
              _: 1,
              _: 1,
            },
            _ = _(
              _.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await _.convertOffsetParentRelativeRectToViewportRelativeRect(
                    {
                      elements: _,
                      rect: _,
                      offsetParent: _,
                      strategy: _,
                    },
                  )
                : _,
            );
          return {
            top: (_.top - _.top + _.top) / _._,
            bottom: (_.bottom - _.bottom + _.bottom) / _._,
            left: (_.left - _.left + _.left) / _._,
            right: (_.right - _.right + _.right) / _._,
          };
        }
        const _ = 50,
          _ = async (_, _, _) => {
            const {
                placement: _ = "bottom",
                strategy: _ = "absolute",
                middleware: _ = [],
                platform: _,
              } = _,
              _ = _.detectOverflow
                ? _
                : {
                    ..._,
                    detectOverflow: _,
                  },
              _ = await (_.isRTL == null ? void 0 : _.isRTL(_));
            let _ = await _.getElementRects({
                reference: _,
                floating: _,
                strategy: _,
              }),
              { _: _, _: _ } = _(_, _, _),
              _ = _,
              _ = 0;
            const _ = {};
            for (let _ = 0; _ < _.length; _++) {
              const _ = _[_];
              if (!_) continue;
              const { name: _, _: _ } = _,
                {
                  _: _,
                  _: _,
                  data: _,
                  reset: _,
                } = await _({
                  _: _,
                  _: _,
                  initialPlacement: _,
                  placement: _,
                  strategy: _,
                  middlewareData: _,
                  rects: _,
                  platform: _,
                  elements: {
                    reference: _,
                    floating: _,
                  },
                });
              (_ = _ ?? _),
                (_ = _ ?? _),
                (_[_] = {
                  ..._[_],
                  ..._,
                }),
                _ &&
                  _ < _ &&
                  (_++,
                  typeof _ == "object" &&
                    (_.placement && (_ = _.placement),
                    _.rects &&
                      (_ =
                        _.rects === !0
                          ? await _.getElementRects({
                              reference: _,
                              floating: _,
                              strategy: _,
                            })
                          : _.rects),
                    ({ _: _, _: _ } = _(_, _, _))),
                  (_ = -1));
            }
            return {
              _: _,
              _: _,
              placement: _,
              strategy: _,
              middlewareData: _,
            };
          },
          _ = (_) => ({
            name: "arrow",
            options: _,
            async _(_) {
              const {
                  _: _,
                  _: _,
                  placement: _,
                  rects: _,
                  platform: _,
                  elements: _,
                  middlewareData: _,
                } = _,
                { element: _, padding: _ = 0 } = evaluate(_, _) || {};
              if (_ == null) return {};
              const _ = getPaddingObject(_),
                _ = {
                  _: _,
                  _: _,
                },
                _ = getAlignmentAxis(_),
                _ = getAxisLength(_),
                _ = await _.getDimensions(_),
                _ = _ === "y",
                _ = _ ? "top" : "left",
                _ = _ ? "bottom" : "right",
                _ = _ ? "clientHeight" : "clientWidth",
                _ = _.reference[_] + _.reference[_] - _[_] - _.floating[_],
                _ = _[_] - _.reference[_],
                _ = await (_.getOffsetParent == null
                  ? void 0
                  : _.getOffsetParent(_));
              let _ = _ ? _[_] : 0;
              (!_ ||
                !(await (_.isElement == null ? void 0 : _.isElement(_)))) &&
                (_ = _.floating[_] || _.floating[_]);
              const _ = _ / 2 - _ / 2,
                _ = _ / 2 - _[_] / 2 - 1,
                _ = min(_[_], _),
                _ = min(_[_], _),
                _ = _ - _[_] - _,
                _ = _ / 2 - _[_] / 2 + _,
                _ = clamp(_, _, _),
                _ =
                  !_.arrow &&
                  getAlignment(_) != null &&
                  _ !== _ &&
                  _.reference[_] / 2 - (_ < _ ? _ : _) - _[_] / 2 < 0,
                _ = _ ? (_ < _ ? _ - _ : _ - _) : 0;
              return {
                [_]: _[_] + _,
                data: {
                  [_]: _,
                  centerOffset: _ - _ - _,
                  ...(_ && {
                    alignmentOffset: _,
                  }),
                },
                reset: _,
              };
            },
          });
        function _(_, _, _) {
          return (
            _
              ? [
                  ..._.filter((_) => getAlignment(_) === _),
                  ..._.filter((_) => getAlignment(_) !== _),
                ]
              : _.filter((_) => getSide(_) === _)
          ).filter((_) =>
            _
              ? getAlignment(_) === _ ||
                (_ ? getOppositeAlignmentPlacement(_) !== _ : !1)
              : !0,
          );
        }
        const _ = function (_) {
            return (
              _ === void 0 && (_ = {}),
              {
                name: "autoPlacement",
                options: _,
                async _(_) {
                  var _, _, _;
                  const {
                      rects: _,
                      middlewareData: _,
                      placement: _,
                      platform: _,
                      elements: _,
                    } = _,
                    {
                      crossAxis: _ = !1,
                      alignment: _,
                      allowedPlacements: _ = placements,
                      autoAlignment: _ = !0,
                      ..._
                    } = evaluate(_, _),
                    _ =
                      _ !== void 0 || _ === placements ? _(_ || null, _, _) : _,
                    _ = ((_ = _.autoPlacement) == null ? void 0 : _.index) || 0,
                    _ = _[_];
                  if (_ == null) return {};
                  if (_ !== _)
                    return {
                      reset: {
                        placement: _[0],
                      },
                    };
                  const _ = await _.detectOverflow(_, _),
                    _ = getAlignmentSides(
                      _,
                      _,
                      await (_.isRTL == null ? void 0 : _.isRTL(_.floating)),
                    ),
                    _ = [_[getSide(_)], _[_[0]], _[_[1]]],
                    _ = [
                      ...(((_ = _.autoPlacement) == null
                        ? void 0
                        : _.overflows) || []),
                      {
                        placement: _,
                        overflows: _,
                      },
                    ],
                    _ = _[_ + 1];
                  if (_)
                    return {
                      data: {
                        index: _ + 1,
                        overflows: _,
                      },
                      reset: {
                        placement: _,
                      },
                    };
                  const _ = _.map((_) => {
                      const _ = getAlignment(_.placement);
                      return [
                        _.placement,
                        _ && _
                          ? _.overflows.slice(0, 2).reduce((_, _) => _ + _, 0)
                          : _.overflows[0],
                        _.overflows,
                      ];
                    }).sort((_, _) => _[1] - _[1]),
                    _ =
                      ((_ = _.filter((_) =>
                        _[2]
                          .slice(0, getAlignment(_[0]) ? 2 : 3)
                          .every((_) => _ <= 0),
                      )[0]) == null
                        ? void 0
                        : _[0]) || _[0][0];
                  return _ !== _
                    ? {
                        data: {
                          index: _ + 1,
                          overflows: _,
                        },
                        reset: {
                          placement: _,
                        },
                      }
                    : {};
                },
              }
            );
          },
          _ = function (_) {
            return (
              _ === void 0 && (_ = {}),
              {
                name: "flip",
                options: _,
                async _(_) {
                  var _, _;
                  const {
                      placement: _,
                      middlewareData: _,
                      rects: _,
                      initialPlacement: _,
                      platform: _,
                      elements: _,
                    } = _,
                    {
                      mainAxis: _ = !0,
                      crossAxis: _ = !0,
                      fallbackPlacements: _,
                      fallbackStrategy: _ = "bestFit",
                      fallbackAxisSideDirection: _ = "none",
                      flipAlignment: _ = !0,
                      ..._
                    } = _(_, _);
                  if ((_ = _.arrow) != null && _.alignmentOffset) return {};
                  const _ = _(_),
                    _ = _(_),
                    _ = _(_) === _,
                    _ = await (_.isRTL == null ? void 0 : _.isRTL(_.floating)),
                    _ = _ || (_ || !_ ? [_(_)] : _(_)),
                    _ = _ !== "none";
                  !_ && _ && _.push(..._(_, _, _, _));
                  const _ = [_, ..._],
                    _ = await _.detectOverflow(_, _),
                    _ = [];
                  let _ = ((_ = _.flip) == null ? void 0 : _.overflows) || [];
                  if ((_ && _.push(_[_]), _)) {
                    const _ = _(_, _, _);
                    _.push(_[_[0]], _[_[1]]);
                  }
                  if (
                    ((_ = [
                      ..._,
                      {
                        placement: _,
                        overflows: _,
                      },
                    ]),
                    !_.every((_) => _ <= 0))
                  ) {
                    var _, _;
                    const _ =
                        (((_ = _.flip) == null ? void 0 : _.index) || 0) + 1,
                      _ = _[_];
                    if (
                      _ &&
                      (!(_ === "alignment" ? _ !== _(_) : !1) ||
                        _.every((_) =>
                          _(_.placement) === _ ? _.overflows[0] > 0 : !0,
                        ))
                    )
                      return {
                        data: {
                          index: _,
                          overflows: _,
                        },
                        reset: {
                          placement: _,
                        },
                      };
                    let _ =
                      (_ = _.filter((_) => _.overflows[0] <= 0).sort(
                        (_, _) => _.overflows[1] - _.overflows[1],
                      )[0]) == null
                        ? void 0
                        : _.placement;
                    if (!_)
                      switch (_) {
                        case "bestFit": {
                          var _;
                          const _ =
                            (_ = _.filter((_) => {
                              if (_) {
                                const _ = _(_.placement);
                                return _ === _ || _ === "y";
                              }
                              return !0;
                            })
                              .map((_) => [
                                _.placement,
                                _.overflows
                                  .filter((_) => _ > 0)
                                  .reduce((_, _) => _ + _, 0),
                              ])
                              .sort((_, _) => _[1] - _[1])[0]) == null
                              ? void 0
                              : _[0];
                          _ && (_ = _);
                          break;
                        }
                        case "initialPlacement":
                          _ = _;
                          break;
                      }
                    if (_ !== _)
                      return {
                        reset: {
                          placement: _,
                        },
                      };
                  }
                  return {};
                },
              }
            );
          };
        function _(_, _) {
          return {
            top: _.top - _.height,
            right: _.right - _.width,
            bottom: _.bottom - _.height,
            left: _.left - _.width,
          };
        }
        function _(_) {
          return sides.some((_) => _[_] >= 0);
        }
        const _ = function (_) {
          return (
            _ === void 0 && (_ = {}),
            {
              name: "hide",
              options: _,
              async _(_) {
                const { rects: _, platform: _ } = _,
                  { strategy: _ = "referenceHidden", ..._ } = evaluate(_, _);
                switch (_) {
                  case "referenceHidden": {
                    const _ = await _.detectOverflow(_, {
                        ..._,
                        elementContext: "reference",
                      }),
                      _ = _(_, _.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: _,
                        referenceHidden: _(_),
                      },
                    };
                  }
                  case "escaped": {
                    const _ = await _.detectOverflow(_, {
                        ..._,
                        altBoundary: !0,
                      }),
                      _ = _(_, _.floating);
                    return {
                      data: {
                        escapedOffsets: _,
                        escaped: _(_),
                      },
                    };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        };
        function _(_) {
          const _ = min(..._.map((_) => _.left)),
            _ = min(..._.map((_) => _.top)),
            _ = max(..._.map((_) => _.right)),
            _ = max(..._.map((_) => _.bottom));
          return {
            _: _,
            _: _,
            width: _ - _,
            height: _ - _,
          };
        }
        function _(_) {
          const _ = _.slice().sort((_, _) => _._ - _._),
            _ = [];
          let _ = null;
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_];
            !_ || _._ - _._ > _.height / 2
              ? _.push([_])
              : _[_.length - 1].push(_),
              (_ = _);
          }
          return _.map((_) => rectToClientRect(_(_)));
        }
        const _ = function (_) {
            return (
              _ === void 0 && (_ = {}),
              {
                name: "inline",
                options: _,
                async _(_) {
                  const {
                      placement: _,
                      elements: _,
                      rects: _,
                      platform: _,
                      strategy: _,
                    } = _,
                    { padding: _ = 2, _: _, _: _ } = evaluate(_, _),
                    _ = Array.from(
                      (await (_.getClientRects == null
                        ? void 0
                        : _.getClientRects(_.reference))) || [],
                    );
                  if (!_.length) return {};
                  const _ = _(_),
                    _ = rectToClientRect(_(_)),
                    _ = getPaddingObject(_);
                  function _() {
                    if (
                      _.length === 2 &&
                      (_[0].left > _[1].right || _[1].left > _[0].right) &&
                      _ != null &&
                      _ != null
                    )
                      return (
                        _.find(
                          (_) =>
                            _ > _.left - _.left &&
                            _ < _.right + _.right &&
                            _ > _.top - _.top &&
                            _ < _.bottom + _.bottom,
                        ) || _
                      );
                    if (_.length >= 2) {
                      if (getSideAxis(_) === "y") {
                        const _ = _[0],
                          _ = _[_.length - 1],
                          _ = getSide(_) === "top",
                          _ = _.top,
                          _ = _.bottom,
                          _ = _ ? _.left : _.left,
                          _ = _ ? _.right : _.right;
                        return rectToClientRect({
                          _: _,
                          _: _,
                          width: _ - _,
                          height: _ - _,
                        });
                      }
                      const _ = getSide(_) === "left",
                        _ = max(..._.map((_) => _.right)),
                        _ = min(..._.map((_) => _.left)),
                        _ = _.filter((_) => (_ ? _.left === _ : _.right === _)),
                        _ = _[0].top,
                        _ = _[_.length - 1].bottom;
                      return rectToClientRect({
                        _: _,
                        _: _,
                        width: _ - _,
                        height: _ - _,
                      });
                    }
                    return _;
                  }
                  const _ = await _.getElementRects({
                    reference: {
                      getBoundingClientRect: _,
                    },
                    floating: _.floating,
                    strategy: _,
                  });
                  return _.reference._ !== _.reference._ ||
                    _.reference._ !== _.reference._ ||
                    _.reference.width !== _.reference.width ||
                    _.reference.height !== _.reference.height
                    ? {
                        reset: {
                          rects: _,
                        },
                      }
                    : {};
                },
              }
            );
          },
          _ = new Set(["left", "top"]);
        async function _(_, _) {
          const { placement: _, platform: _, elements: _ } = _,
            _ = await (_.isRTL == null ? void 0 : _.isRTL(_.floating)),
            _ = _(_),
            _ = _(_),
            _ = _(_) === "y",
            _ = _.has(_) ? -1 : 1,
            _ = _ && _ ? -1 : 1,
            _ = _(_, _);
          let {
            mainAxis: _,
            crossAxis: _,
            alignmentAxis: _,
          } = typeof _ == "number"
            ? {
                mainAxis: _,
                crossAxis: 0,
                alignmentAxis: null,
              }
            : {
                mainAxis: _.mainAxis || 0,
                crossAxis: _.crossAxis || 0,
                alignmentAxis: _.alignmentAxis,
              };
          return (
            _ && typeof _ == "number" && (_ = _ === "end" ? _ * -1 : _),
            _
              ? {
                  _: _ * _,
                  _: _ * _,
                }
              : {
                  _: _ * _,
                  _: _ * _,
                }
          );
        }
        const _ = function (_) {
            return (
              _ === void 0 && (_ = 0),
              {
                name: "offset",
                options: _,
                async _(_) {
                  var _, _;
                  const { _: _, _: _, placement: _, middlewareData: _ } = _,
                    _ = await _(_, _);
                  return _ ===
                    ((_ = _.offset) == null ? void 0 : _.placement) &&
                    (_ = _.arrow) != null &&
                    _.alignmentOffset
                    ? {}
                    : {
                        _: _ + _._,
                        _: _ + _._,
                        data: {
                          ..._,
                          placement: _,
                        },
                      };
                },
              }
            );
          },
          _ = function (_) {
            return (
              _ === void 0 && (_ = {}),
              {
                name: "shift",
                options: _,
                async _(_) {
                  const { _: _, _: _, placement: _, platform: _ } = _,
                    {
                      mainAxis: _ = !0,
                      crossAxis: _ = !1,
                      limiter: _ = {
                        _: (_) => {
                          let { _: _, _: _ } = _;
                          return {
                            _: _,
                            _: _,
                          };
                        },
                      },
                      ..._
                    } = _(_, _),
                    _ = {
                      _: _,
                      _: _,
                    },
                    _ = await _.detectOverflow(_, _),
                    _ = _(_),
                    _ = _(_);
                  let _ = _[_],
                    _ = _[_];
                  const _ = (_, _) =>
                    _(
                      _ + _[_ === "y" ? "top" : "left"],
                      _,
                      _ - _[_ === "y" ? "bottom" : "right"],
                    );
                  _ && (_ = _(_, _)), _ && (_ = _(_, _));
                  const _ = _._({
                    ..._,
                    [_]: _,
                    [_]: _,
                  });
                  return {
                    ..._,
                    data: {
                      _: _._ - _,
                      _: _._ - _,
                      enabled: {
                        [_]: _,
                        [_]: _,
                      },
                    },
                  };
                },
              }
            );
          },
          _ = function (_) {
            return (
              _ === void 0 && (_ = {}),
              {
                options: _,
                _(_) {
                  var _, _;
                  const {
                      _: _,
                      _: _,
                      placement: _,
                      rects: _,
                      middlewareData: _,
                    } = _,
                    {
                      offset: _ = 0,
                      mainAxis: _ = !0,
                      crossAxis: _ = !0,
                    } = evaluate(_, _),
                    _ = {
                      _: _,
                      _: _,
                    },
                    _ = getSideAxis(_),
                    _ = getOppositeAxis(_);
                  let _ = _[_],
                    _ = _[_];
                  const _ = evaluate(_, _),
                    _ =
                      typeof _ == "number"
                        ? {
                            mainAxis: _,
                            crossAxis: 0,
                          }
                        : {
                            mainAxis: (_ = _.mainAxis) != null ? _ : 0,
                            crossAxis: (_ = _.crossAxis) != null ? _ : 0,
                          };
                  if (_) {
                    const _ = _ === "y" ? "height" : "width",
                      _ = _.reference[_] - _.floating[_] + _.mainAxis,
                      _ = _.reference[_] + _.reference[_] - _.mainAxis;
                    _ < _ ? (_ = _) : _ > _ && (_ = _);
                  }
                  if (_) {
                    var _, _;
                    const _ = _ === "y" ? "width" : "height",
                      _ = _.has(getSide(_)),
                      _ =
                        _.reference[_] -
                        _.floating[_] +
                        ((_ && ((_ = _.offset) == null ? void 0 : _[_])) || 0) +
                        (_ ? 0 : _.crossAxis),
                      _ =
                        _.reference[_] +
                        _.reference[_] +
                        (_
                          ? 0
                          : ((_ = _.offset) == null ? void 0 : _[_]) || 0) -
                        (_ ? _.crossAxis : 0);
                    _ < _ ? (_ = _) : _ > _ && (_ = _);
                  }
                  return {
                    [_]: _,
                    [_]: _,
                  };
                },
              }
            );
          },
          _ = function (_) {
            return (
              _ === void 0 && (_ = {}),
              {
                name: "size",
                options: _,
                async _(_) {
                  const {
                      placement: _,
                      rects: _,
                      platform: _,
                      elements: _,
                    } = _,
                    { apply: _ = () => {}, ..._ } = _(_, _),
                    _ = await _.detectOverflow(_, _),
                    _ = _(_),
                    _ = _(_),
                    _ = _(_) === "y",
                    { width: _, height: _ } = _.floating;
                  let _, _;
                  _ === "top" || _ === "bottom"
                    ? ((_ = _),
                      (_ =
                        _ ===
                        ((await (_.isRTL == null
                          ? void 0
                          : _.isRTL(_.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((_ = _), (_ = _ === "end" ? "top" : "bottom"));
                  const _ = _ - _.top - _.bottom,
                    _ = _ - _.left - _.right,
                    _ = _(_ - _[_], _),
                    _ = _(_ - _[_], _),
                    _ = _.middlewareData.shift,
                    _ = !_;
                  let _ = _,
                    _ = _;
                  _ != null && _.enabled._ && (_ = _),
                    _ != null && _.enabled._ && (_ = _),
                    _ &&
                      !_ &&
                      (_
                        ? (_ = _ - 2 * _(_.left, _.right))
                        : (_ = _ - 2 * _(_.top, _.bottom))),
                    await _({
                      ..._,
                      availableWidth: _,
                      availableHeight: _,
                    });
                  const _ = await _.getDimensions(_.floating);
                  return _ !== _.width || _ !== _.height
                    ? {
                        reset: {
                          rects: !0,
                        },
                      }
                    : {};
                },
              }
            );
          };
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(_);
          let _ = parseFloat(_.width) || 0,
            _ = parseFloat(_.height) || 0;
          const _ = (0, _._)(_),
            _ = _ ? _.offsetWidth : _,
            _ = _ ? _.offsetHeight : _,
            _ = _(_) !== _ || _(_) !== _;
          return (
            _ && ((_ = _), (_ = _)),
            {
              width: _,
              height: _,
              _: _,
            }
          );
        }
        function _(_) {
          return (0, _._)(_) ? _ : _.contextElement;
        }
        function _(_) {
          const _ = _(_);
          if (!(0, _._)(_)) return _(1);
          const _ = _.getBoundingClientRect(),
            { width: _, height: _, _: _ } = _(_);
          let _ = (_ ? _(_.width) : _.width) / _,
            _ = (_ ? _(_.height) : _.height) / _;
          return (
            (!_ || !Number.isFinite(_)) && (_ = 1),
            (!_ || !Number.isFinite(_)) && (_ = 1),
            {
              _: _,
              _: _,
            }
          );
        }
        const _ = _(0);
        function _(_) {
          const _ = (0, _._)(_);
          return !(0, _._)() || !_.visualViewport
            ? _
            : {
                _: _.visualViewport.offsetLeft,
                _: _.visualViewport.offsetTop,
              };
        }
        function _(_, _, _) {
          return _ === void 0 && (_ = !1), !!_ && _ && _ === (0, _._)(_);
        }
        function _(_, _, _, _) {
          _ === void 0 && (_ = !1), _ === void 0 && (_ = !1);
          const _ = _.getBoundingClientRect(),
            _ = _(_);
          let _ = _(1);
          _ && (_ ? (0, _._)(_) && (_ = _(_)) : (_ = _(_)));
          const _ = _(_, _, _) ? _(_) : _(0);
          let _ = (_.left + _._) / _._,
            _ = (_.top + _._) / _._,
            _ = _.width / _._,
            _ = _.height / _._;
          if (_ && _) {
            const _ = (0, _._)(_),
              _ = (0, _._)(_) ? (0, _._)(_) : _;
            let _ = _,
              _ = (0, _._)(_);
            for (; _ && _ !== _; ) {
              const _ = _(_),
                _ = _.getBoundingClientRect(),
                _ = (0, _._)(_),
                _ = _.left + (_.clientLeft + parseFloat(_.paddingLeft)) * _._,
                _ = _.top + (_.clientTop + parseFloat(_.paddingTop)) * _._;
              (_ *= _._),
                (_ *= _._),
                (_ *= _._),
                (_ *= _._),
                (_ += _),
                (_ += _),
                (_ = (0, _._)(_)),
                (_ = (0, _._)(_));
            }
          }
          return _({
            width: _,
            height: _,
            _: _,
            _: _,
          });
        }
        function _(_, _) {
          const _ = (0, _._)(_).scrollLeft;
          return _ ? _.left + _ : _((0, _._)(_)).left + _;
        }
        function _(_, _) {
          const _ = _.getBoundingClientRect(),
            _ = _.left + _.scrollLeft - _(_, _),
            _ = _.top + _.scrollTop;
          return {
            _: _,
            _: _,
          };
        }
        function _(_) {
          let { elements: _, rect: _, offsetParent: _, strategy: _ } = _;
          const _ = _ === "fixed",
            _ = (0, _._)(_),
            _ = _ ? (0, _._)(_.floating) : !1;
          if (_ === _ || (_ && _)) return _;
          let _ = {
              scrollLeft: 0,
              scrollTop: 0,
            },
            _ = _(1);
          const _ = _(0),
            _ = (0, _._)(_);
          if (
            (_ || !_) &&
            (((0, _._)(_) !== "body" || (0, _._)(_)) && (_ = (0, _._)(_)), _)
          ) {
            const _ = _(_);
            (_ = _(_)), (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
          }
          const _ = _ && !_ && !_ ? _(_, _) : _(0);
          return {
            width: _.width * _._,
            height: _.height * _._,
            _: _._ * _._ - _.scrollLeft * _._ + _._ + _._,
            _: _._ * _._ - _.scrollTop * _._ + _._ + _._,
          };
        }
        function _(_) {
          return _.getClientRects ? Array.from(_.getClientRects()) : [];
        }
        function _(_) {
          const _ = (0, _._)(_),
            _ = _.ownerDocument.body,
            _ = _(_.scrollWidth, _.clientWidth, _.scrollWidth, _.clientWidth),
            _ = _(
              _.scrollHeight,
              _.clientHeight,
              _.scrollHeight,
              _.clientHeight,
            );
          let _ = -_.scrollLeft + _(_);
          const _ = -_.scrollTop;
          return (
            (0, _._)(_).direction === "rtl" &&
              (_ += _(_.clientWidth, _.clientWidth) - _),
            {
              width: _,
              height: _,
              _: _,
              _: _,
            }
          );
        }
        const _ = 25;
        function _(_, _, _) {
          _ === void 0 && (_ = "viewport");
          const _ = _ === "layoutViewport",
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = _.visualViewport;
          let _ = _.clientWidth,
            _ = _.clientHeight,
            _ = 0,
            _ = 0;
          if (_) {
            const _ = !(0, _._)() || _ === "fixed";
            _
              ? _ || ((_ = -_.offsetLeft), (_ = -_.offsetTop))
              : ((_ = _.width),
                (_ = _.height),
                _ && ((_ = _.offsetLeft), (_ = _.offsetTop)));
          }
          if (_(_) <= 0) {
            const _ = _.ownerDocument,
              _ = _.body,
              _ = getComputedStyle(_),
              _ =
                (_.compatMode === "CSS1Compat" &&
                  parseFloat(_.marginLeft) + parseFloat(_.marginRight)) ||
                0,
              _ = Math.abs(_.clientWidth - _.clientWidth - _),
              _ =
                getComputedStyle(_).scrollbarGutter === "stable both-edges"
                  ? _ / 2
                  : _;
            _ <= _ && (_ -= _);
          }
          return {
            width: _,
            height: _,
            _: _,
            _: _,
          };
        }
        function _(_, _) {
          const _ = _(_, !0, _ === "fixed"),
            _ = _.top + _.clientTop,
            _ = _.left + _.clientLeft,
            _ = _(_),
            _ = _.clientWidth * _._,
            _ = _.clientHeight * _._,
            _ = _ * _._,
            _ = _ * _._;
          return {
            width: _,
            height: _,
            _: _,
            _: _,
          };
        }
        function _(_, _, _) {
          let _;
          if (_ === "viewport" || _ === "layoutViewport") _ = _(_, _, _);
          else if (_ === "document") _ = _((0, _._)(_));
          else if ((0, _._)(_)) _ = _(_, _);
          else {
            const _ = _(_);
            _ = {
              _: _._ - _._,
              _: _._ - _._,
              width: _.width,
              height: _.height,
            };
          }
          return _(_);
        }
        function _(_, _) {
          const _ = _.get(_);
          if (_) return _;
          let _ = (0, _._)(_, [], !1).filter(
              (_) => (0, _._)(_) && (0, _._)(_) !== "body",
            ),
            _ = null;
          const _ = (0, _._)(_).position === "fixed";
          let _ = _ ? (0, _._)(_) : _;
          for (; (0, _._)(_) && !(0, _._)(_); ) {
            const _ = (0, _._)(_),
              _ = (0, _._)(_),
              _ = _ ? _.position : _ ? "fixed" : "";
            !_ &&
            (_ === "fixed" || (_ === "absolute" && _.position === "static"))
              ? (_ = _.filter((_) => _ !== _))
              : (_ = _),
              (_ = (0, _._)(_));
          }
          return _.set(_, _), _;
        }
        function _(_) {
          let { element: _, boundary: _, rootBoundary: _, strategy: _ } = _;
          const _ = [
              ...(_ === "clippingAncestors"
                ? (0, _._)(_)
                  ? []
                  : _(_, this._)
                : [].concat(_)),
              _,
            ],
            _ = _(_, _[0], _);
          let _ = _.top,
            _ = _.right,
            _ = _.bottom,
            _ = _.left;
          for (let _ = 1; _ < _.length; _++) {
            const _ = _(_, _[_], _);
            (_ = _(_.top, _)),
              (_ = _(_.right, _)),
              (_ = _(_.bottom, _)),
              (_ = _(_.left, _));
          }
          return {
            width: _ - _,
            height: _ - _,
            _: _,
            _: _,
          };
        }
        function _(_) {
          const { width: _, height: _ } = _(_);
          return {
            width: _,
            height: _,
          };
        }
        function _(_, _, _) {
          const _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = _ === "fixed",
            _ = _(_, !0, _, _);
          let _ = {
            scrollLeft: 0,
            scrollTop: 0,
          };
          const _ = _(0);
          if (
            (_ || !_) &&
            (((0, _._)(_) !== "body" || (0, _._)(_)) && (_ = (0, _._)(_)), _)
          ) {
            const _ = _(_, !0, _, _);
            (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
          }
          !_ && _ && (_._ = _(_));
          const _ = _ && !_ && !_ ? _(_, _) : _(0),
            _ = _.left + _.scrollLeft - _._ - _._,
            _ = _.top + _.scrollTop - _._ - _._;
          return {
            _: _,
            _: _,
            width: _.width,
            height: _.height,
          };
        }
        function _(_) {
          return (0, _._)(_).position === "static";
        }
        function _(_, _) {
          if (!(0, _._)(_) || (0, _._)(_).position === "fixed") return null;
          if (_) return _(_);
          let _ = _.offsetParent;
          return (0, _._)(_) === _ && (_ = _.ownerDocument.body), _;
        }
        function _(_, _) {
          const _ = (0, _._)(_);
          if ((0, _._)(_)) return _;
          if (!(0, _._)(_)) {
            let _ = (0, _._)(_);
            for (; _ && !(0, _._)(_); ) {
              if ((0, _._)(_) && !_(_)) return _;
              _ = (0, _._)(_);
            }
            return _;
          }
          let _ = _(_, _);
          for (; _ && (0, _._)(_) && _(_); ) _ = _(_, _);
          return _ && (0, _._)(_) && _(_) && !(0, _._)(_)
            ? _
            : _ || (0, _._)(_) || _;
        }
        const _ = async function (_) {
          const _ = this.getOffsetParent || _,
            _ = this.getDimensions,
            _ = await _(_.floating);
          return {
            reference: _(_.reference, await _(_.floating), _.strategy),
            floating: {
              _: 0,
              _: 0,
              width: _.width,
              height: _.height,
            },
          };
        };
        function _(_) {
          return (0, _._)(_).direction === "rtl";
        }
        const _ = {
          convertOffsetParentRelativeRectToViewportRelativeRect: _,
          getDocumentElement: _._,
          getClippingRect: _,
          getOffsetParent: _,
          getElementRects: _,
          getClientRects: _,
          getDimensions: _,
          getScale: _,
          isElement: _._,
          isRTL: _,
        };
        function _(_, _) {
          return (
            _._ === _._ &&
            _._ === _._ &&
            _.width === _.width &&
            _.height === _.height
          );
        }
        function _(_, _, _) {
          let _ = null,
            _;
          const _ = (0, _._)(_);
          function _() {
            var _;
            clearTimeout(_), (_ = _) == null || _.disconnect(), (_ = null);
          }
          function _(_, _) {
            _ === void 0 && (_ = !1), _ === void 0 && (_ = 1), _();
            const _ = _.getBoundingClientRect(),
              { left: _, top: _, width: _, height: _ } = _;
            if ((_ || _(), !_ || !_)) return;
            const _ = _(_),
              _ = _(_.clientWidth - (_ + _)),
              _ = _(_.clientHeight - (_ + _)),
              _ = _(_),
              _ = {
                rootMargin: -_ + "px " + -_ + "px " + -_ + "px " + -_ + "px",
                threshold: _(0, _(1, _)) || 1,
              };
            let _ = !0;
            function _(_) {
              const _ = _[0].intersectionRatio;
              if (!_(_, _.getBoundingClientRect())) return _();
              if (_ !== _) {
                if (!_) return _();
                _
                  ? _(!1, _)
                  : (_ = setTimeout(() => {
                      _(!1, 1e-7);
                    }, 1e3));
              }
              _ = !1;
            }
            try {
              _ = new IntersectionObserver(_, {
                ..._,
                root: _.ownerDocument,
              });
            } catch {
              _ = new IntersectionObserver(_, _);
            }
            _.observe(_);
          }
          const _ = (0, _._)(_),
            _ = () => _(_);
          return (
            _.addEventListener("resize", _),
            _(!0),
            () => {
              _.removeEventListener("resize", _), _();
            }
          );
        }
        function _(_, _, _, _) {
          _ === void 0 && (_ = {});
          const {
              ancestorScroll: _ = !0,
              ancestorResize: _ = !0,
              elementResize: _ = typeof ResizeObserver == "function",
              layoutShift: _ = typeof IntersectionObserver == "function",
              animationFrame: _ = !1,
            } = _,
            _ = _(_),
            _ =
              _ || _
                ? [...(_ ? (0, _._)(_) : []), ...(_ ? (0, _._)(_) : [])]
                : [];
          _.forEach((_) => {
            _ && _.addEventListener("scroll", _),
              _ && _.addEventListener("resize", _);
          });
          const _ = _ && _ ? _(_, _, _) : null;
          let _ = -1,
            _ = null;
          _ &&
            ((_ = new ResizeObserver((_) => {
              let [_] = _;
              _ &&
                _.target === _ &&
                _ &&
                _ &&
                (_.unobserve(_),
                cancelAnimationFrame(_),
                (_ = requestAnimationFrame(() => {
                  var _;
                  (_ = _) == null || _.observe(_);
                }))),
                _();
            })),
            _ && !_ && _.observe(_),
            _ && _.observe(_));
          let _,
            _ = _ ? _(_) : null;
          _ && _();
          function _() {
            const _ = _(_);
            _ && !_(_, _) && _(), (_ = _), (_ = requestAnimationFrame(_));
          }
          return (
            _(),
            () => {
              var _;
              _.forEach((_) => {
                _ && _.removeEventListener("scroll", _),
                  _ && _.removeEventListener("resize", _);
              }),
                _?.(),
                (_ = _) == null || _.disconnect(),
                (_ = null),
                _ && cancelAnimationFrame(_);
            }
          );
        }
        const _ = null,
          _ = _,
          _ = null,
          _ = _,
          _ = _,
          _ = _,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = (_, _, _) => {
            const _ = new Map(),
              _ = _ ?? {},
              _ = {
                ..._,
                ..._.platform,
                _: _,
              };
            return _(_, _, {
              ..._,
              platform: _,
            });
          };
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
          _ = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
        function _(_, _) {
          if (_ === _) return !0;
          if (typeof _ != typeof _) return !1;
          if (typeof _ == "function" && _.toString() === _.toString())
            return !0;
          let _, _, _;
          if (_ && _ && typeof _ == "object") {
            if (Array.isArray(_)) {
              if (((_ = _.length), _ !== _.length)) return !1;
              for (_ = _; _-- !== 0; ) if (!_(_[_], _[_])) return !1;
              return !0;
            }
            if (
              ((_ = Object.keys(_)),
              (_ = _.length),
              _ !== Object.keys(_).length)
            )
              return !1;
            for (_ = _; _-- !== 0; )
              if (!{}.hasOwnProperty.call(_, _[_])) return !1;
            for (_ = _; _-- !== 0; ) {
              const _ = _[_];
              if (!(_ === "_owner" && _.$$typeof) && !_(_[_], _[_])) return !1;
            }
            return !0;
          }
          return _ !== _ && _ !== _;
        }
        function _(_) {
          return typeof window > "u"
            ? 1
            : (_.ownerDocument.defaultView || window).devicePixelRatio || 1;
        }
        function _(_, _) {
          const _ = _(_);
          return Math.round(_ * _) / _;
        }
        function _(_) {
          const _ = _.useRef(_);
          return (
            _(() => {
              _.current = _;
            }),
            _
          );
        }
        function _(_) {
          _ === void 0 && (_ = {});
          const {
              placement: _ = "bottom",
              strategy: _ = "absolute",
              middleware: _ = [],
              platform: _,
              elements: { reference: _, floating: _ } = {},
              transform: _ = !0,
              whileElementsMounted: _,
              open: _,
            } = _,
            [_, _] = _.useState({
              _: 0,
              _: 0,
              strategy: _,
              placement: _,
              middlewareData: {},
              isPositioned: !1,
            }),
            [_, _] = _.useState(_);
          _(_, _) || _(_);
          const [_, _] = _.useState(null),
            [_, _] = _.useState(null),
            _ = _.useCallback((_) => {
              _ !== _.current && ((_.current = _), _(_));
            }, []),
            _ = _.useCallback((_) => {
              _ !== _.current && ((_.current = _), _(_));
            }, []),
            _ = _ || _,
            _ = _ || _,
            _ = _.useRef(null),
            _ = _.useRef(null),
            _ = _.useRef(_),
            _ = _ != null,
            _ = _(_),
            _ = _(_),
            _ = _(_),
            _ = _.useCallback(() => {
              if (!_.current || !_.current) return;
              const _ = {
                placement: _,
                strategy: _,
                middleware: _,
              };
              _.current && (_.platform = _.current),
                (0, _._)(_.current, _.current, _).then((_) => {
                  const _ = {
                    ..._,
                    isPositioned: _.current !== !1,
                  };
                  _.current &&
                    !_(_.current, _) &&
                    ((_.current = _),
                    _.flushSync(() => {
                      _(_);
                    }));
                });
            }, [_, _, _, _, _]);
          _(() => {
            _ === !1 &&
              _.current.isPositioned &&
              ((_.current.isPositioned = !1),
              _((_) => ({
                ..._,
                isPositioned: !1,
              })));
          }, [_]);
          const _ = _.useRef(!1);
          _(
            () => (
              (_.current = !0),
              () => {
                _.current = !1;
              }
            ),
            [],
          ),
            _(() => {
              if ((_ && (_.current = _), _ && (_.current = _), _ && _)) {
                if (_.current) return _.current(_, _, _);
                _();
              }
            }, [_, _, _, _, _]);
          const _ = _.useMemo(
              () => ({
                reference: _,
                floating: _,
                setReference: _,
                setFloating: _,
              }),
              [_, _],
            ),
            _ = _.useMemo(
              () => ({
                reference: _,
                floating: _,
              }),
              [_, _],
            ),
            _ = _.useMemo(() => {
              const _ = {
                position: _,
                left: 0,
                top: 0,
              };
              if (!_.floating) return _;
              const _ = _(_.floating, _._),
                _ = _(_.floating, _._);
              return _
                ? {
                    ..._,
                    transform: "translate(" + _ + "px, " + _ + "px)",
                    ...(_(_.floating) >= 1.5 && {
                      willChange: "transform",
                    }),
                  }
                : {
                    position: _,
                    left: _,
                    top: _,
                  };
            }, [_, _, _.floating, _._, _._]);
          return _.useMemo(
            () => ({
              ..._,
              update: _,
              refs: _,
              elements: _,
              floatingStyles: _,
            }),
            [_, _, _, _, _],
          );
        }
        const _ = (_) => {
            function _(_) {
              return {}.hasOwnProperty.call(_, "current");
            }
            return {
              name: "arrow",
              options: _,
              _(_) {
                const { element: _, padding: _ } =
                  typeof _ == "function" ? _(_) : _;
                return _ && _(_)
                  ? _.current != null
                    ? arrow$2({
                        element: _.current,
                        padding: _,
                      })._(_)
                    : {}
                  : _
                    ? arrow$2({
                        element: _,
                        padding: _,
                      })._(_)
                    : {};
              },
            };
          },
          _ = (_, _) => ({
            ...(0, _._)(_),
            options: [_, _],
          }),
          _ = (_, _) => ({
            ...(0, _._)(_),
            options: [_, _],
          }),
          _ = (_, _) => ({
            ...limitShift$1(_),
            options: [_, _],
          }),
          _ = (_, _) => ({
            ...(0, _._)(_),
            options: [_, _],
          }),
          _ = (_, _) => ({
            ...(0, _._)(_),
            options: [_, _],
          }),
          _ = (_, _) => ({
            ...autoPlacement$1(_),
            options: [_, _],
          }),
          _ = (_, _) => ({
            ...hide$1(_),
            options: [_, _],
          }),
          _ = (_, _) => ({
            ...inline$1(_),
            options: [_, _],
          }),
          _ = (_, _) => ({
            ..._(_),
            options: [_, _],
          });
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_, 2),
          _ = __webpack_require__("chunkid");
        function _(_) {
          let _ = _.activeElement;
          for (
            ;
            ((_ = _) == null || (_ = _.shadowRoot) == null
              ? void 0
              : _.activeElement) != null;
          ) {
            var _;
            _ = _.shadowRoot.activeElement;
          }
          return _;
        }
        function _(_, _) {
          if (!_ || !_) return !1;
          const _ = _.getRootNode == null ? void 0 : _.getRootNode();
          if (_.contains(_)) return !0;
          if (_ && (0, _._)(_)) {
            let _ = _;
            for (; _; ) {
              if (_ === _) return !0;
              _ = _.parentNode || _.host;
            }
          }
          return !1;
        }
        function _() {
          const _ = navigator.userAgentData;
          return _ != null && _.platform ? _.platform : navigator.platform;
        }
        function _() {
          const _ = navigator.userAgentData;
          return _ && Array.isArray(_.brands)
            ? _.brands
                .map((_) => {
                  let { brand: _, version: _ } = _;
                  return _ + "/" + _;
                })
                .join(" ")
            : navigator.userAgent;
        }
        function _(_) {
          return _.mozInputSource === 0 && _.isTrusted
            ? !0
            : _() && _.pointerType
              ? _.type === "click" && _.buttons === 1
              : _.detail === 0 && !_.pointerType;
        }
        function _(_) {
          return _()
            ? !1
            : (!_() && _.width === 0 && _.height === 0) ||
                (_() &&
                  _.width === 1 &&
                  _.height === 1 &&
                  _.pressure === 0 &&
                  _.detail === 0 &&
                  _.pointerType === "mouse") ||
                (_.width < 1 &&
                  _.height < 1 &&
                  _.pressure === 0 &&
                  _.detail === 0 &&
                  _.pointerType === "touch");
        }
        function _() {
          return /apple/i.test(navigator.vendor);
        }
        function _() {
          const _ = /android/i;
          return _.test(_()) || _.test(_());
        }
        function _() {
          return (
            _().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
          );
        }
        function _() {
          return _().includes("jsdom/");
        }
        function _(_, _) {
          const _ = ["mouse", "pen"];
          return _ || _.push("", void 0), _.includes(_);
        }
        function _(_) {
          return "nativeEvent" in _;
        }
        function _(_) {
          return _.matches("html,body");
        }
        function _(_) {
          return _?.ownerDocument || document;
        }
        function _(_, _) {
          if (_ == null) return !1;
          if ("composedPath" in _) return _.composedPath().includes(_);
          const _ = _;
          return _.target != null && _.contains(_.target);
        }
        function _(_) {
          return "composedPath" in _ ? _.composedPath()[0] : _.target;
        }
        const _ =
          "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
        function _(_) {
          return (0, _._)(_) && _.matches(_);
        }
        function _(_) {
          _.preventDefault(), _.stopPropagation();
        }
        function _(_) {
          return _ ? _.getAttribute("role") === "combobox" && _(_) : !1;
        }
        var _ = __webpack_require__("chunkid");
        var _ = [
            "input:not([inert])",
            "select:not([inert])",
            "textarea:not([inert])",
            "a[href]:not([inert])",
            "button:not([inert])",
            "[tabindex]:not(slot):not([inert])",
            "audio[controls]:not([inert])",
            "video[controls]:not([inert])",
            '[contenteditable]:not([contenteditable="false"]):not([inert])',
            "details>summary:first-of-type:not([inert])",
            "details:not([inert])",
          ],
          _ = _.join(","),
          _ = typeof Element > "u",
          _ = _
            ? function () {}
            : Element.prototype.matches ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector,
          _ =
            !_ && Element.prototype.getRootNode
              ? function (_) {
                  var _;
                  return _ == null ||
                    (_ = _.getRootNode) === null ||
                    _ === void 0
                    ? void 0
                    : _.call(_);
                }
              : function (_) {
                  return _?.ownerDocument;
                },
          _ = function _(_, _) {
            var _;
            _ === void 0 && (_ = !0);
            var _ =
                _ == null || (_ = _.getAttribute) === null || _ === void 0
                  ? void 0
                  : _.call(_, "inert"),
              _ = _ === "" || _ === "true",
              _ = _ || (_ && _ && _(_.parentNode));
            return _;
          },
          _ = function (_) {
            var _,
              _ =
                _ == null || (_ = _.getAttribute) === null || _ === void 0
                  ? void 0
                  : _.call(_, "contenteditable");
            return _ === "" || _ === "true";
          },
          _ = function (_, _, _) {
            if (_(_)) return [];
            var _ = Array.prototype.slice.apply(_.querySelectorAll(_));
            return _ && _.call(_, _) && _.unshift(_), (_ = _.filter(_)), _;
          },
          _ = function _(_, _, _) {
            for (var _ = [], _ = Array.from(_); _.length; ) {
              var _ = _.shift();
              if (!_(_, !1))
                if (_.tagName === "SLOT") {
                  var _ = _.assignedElements(),
                    _ = _.length ? _ : _.children,
                    _ = _(_, !0, _);
                  _.flatten
                    ? _.push.apply(_, _)
                    : _.push({
                        scopeParent: _,
                        candidates: _,
                      });
                } else {
                  var _ = _.call(_, _);
                  _ && _.filter(_) && (_ || !_.includes(_)) && _.push(_);
                  var _ =
                      _.shadowRoot ||
                      (typeof _.getShadowRoot == "function" &&
                        _.getShadowRoot(_)),
                    _ =
                      !_(_, !1) &&
                      (!_.shadowRootFilter || _.shadowRootFilter(_));
                  if (_ && _) {
                    var _ = _(_ === !0 ? _.children : _.children, !0, _);
                    _.flatten
                      ? _.push.apply(_, _)
                      : _.push({
                          scopeParent: _,
                          candidates: _,
                        });
                  } else _.unshift.apply(_, _.children);
                }
            }
            return _;
          },
          _ = function (_) {
            return !isNaN(parseInt(_.getAttribute("tabindex"), 10));
          },
          _ = function (_) {
            if (!_) throw new Error("No node provided");
            return _.tabIndex < 0 &&
              (/^(AUDIO|VIDEO|DETAILS)$/.test(_.tagName) || _(_)) &&
              !_(_)
              ? 0
              : _.tabIndex;
          },
          _ = function (_, _) {
            var _ = _(_);
            return _ < 0 && _ && !_(_) ? 0 : _;
          },
          _ = function (_, _) {
            return _.tabIndex === _.tabIndex
              ? _.documentOrder - _.documentOrder
              : _.tabIndex - _.tabIndex;
          },
          _ = function (_) {
            return _.tagName === "INPUT";
          },
          _ = function (_) {
            return _(_) && _.type === "hidden";
          },
          _ = function (_) {
            var _ =
              _.tagName === "DETAILS" &&
              Array.prototype.slice.apply(_.children).some(function (_) {
                return _.tagName === "SUMMARY";
              });
            return _;
          },
          _ = function (_, _) {
            for (var _ = 0; _ < _.length; _++)
              if (_[_].checked && _[_].form === _) return _[_];
          },
          _ = function (_) {
            if (!_.name) return !0;
            var _ = _.form || _(_),
              _ = function (_) {
                return _.querySelectorAll(
                  'input[type="radio"][name="' + _ + '"]',
                );
              },
              _;
            if (
              typeof window < "u" &&
              typeof window.CSS < "u" &&
              typeof window.CSS.escape == "function"
            )
              _ = _(window.CSS.escape(_.name));
            else
              try {
                _ = _(_.name);
              } catch (_) {
                return (
                  console.error(
                    "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                    _.message,
                  ),
                  !1
                );
              }
            var _ = _(_, _.form);
            return !_ || _ === _;
          },
          _ = function (_) {
            return _(_) && _.type === "radio";
          },
          _ = function (_) {
            return _(_) && !_(_);
          },
          _ = function (_) {
            var _,
              _ = _ && _(_),
              _ = (_ = _) === null || _ === void 0 ? void 0 : _.host,
              _ = !1;
            if (_ && _ !== _) {
              var _, _, _;
              for (
                _ = !!(
                  ((_ = _) !== null &&
                    _ !== void 0 &&
                    (_ = _.ownerDocument) !== null &&
                    _ !== void 0 &&
                    _.contains(_)) ||
                  (_ != null &&
                    (_ = _.ownerDocument) !== null &&
                    _ !== void 0 &&
                    _.contains(_))
                );
                !_ && _;
              ) {
                var _, _, _;
                (_ = _(_)),
                  (_ = (_ = _) === null || _ === void 0 ? void 0 : _.host),
                  (_ = !!(
                    (_ = _) !== null &&
                    _ !== void 0 &&
                    (_ = _.ownerDocument) !== null &&
                    _ !== void 0 &&
                    _.contains(_)
                  ));
              }
            }
            return _;
          },
          _ = function (_) {
            var _ = _.getBoundingClientRect(),
              _ = _.width,
              _ = _.height;
            return _ === 0 && _ === 0;
          },
          _ = function (_, _) {
            var _ = _.displayCheck,
              _ = _.getShadowRoot;
            if (getComputedStyle(_).visibility === "hidden") return !0;
            var _ = _.call(_, "details>summary:first-of-type"),
              _ = _ ? _.parentElement : _;
            if (_.call(_, "details:not([open]) *")) return !0;
            if (!_ || _ === "full" || _ === "legacy-full") {
              if (typeof _ == "function") {
                for (var _ = _; _; ) {
                  var _ = _.parentElement,
                    _ = _(_);
                  if (_ && !_.shadowRoot && _(_) === !0) return _(_);
                  _.assignedSlot
                    ? (_ = _.assignedSlot)
                    : !_ && _ !== _.ownerDocument
                      ? (_ = _.host)
                      : (_ = _);
                }
                _ = _;
              }
              if (_(_)) return !_.getClientRects().length;
              if (_ !== "legacy-full") return !0;
            } else if (_ === "non-zero-area") return _(_);
            return !1;
          },
          _ = function (_) {
            if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(_.tagName))
              for (var _ = _.parentElement; _; ) {
                if (_.tagName === "FIELDSET" && _.disabled) {
                  for (var _ = 0; _ < _.children.length; _++) {
                    var _ = _.children.item(_);
                    if (_.tagName === "LEGEND")
                      return _.call(_, "fieldset[disabled] *")
                        ? !0
                        : !_.contains(_);
                  }
                  return !0;
                }
                _ = _.parentElement;
              }
            return !1;
          },
          _ = function (_, _) {
            return !(_.disabled || _(_) || _(_) || _(_, _) || _(_) || _(_));
          },
          _ = function (_, _) {
            return !(_(_) || _(_) < 0 || !_(_, _));
          },
          _ = function (_) {
            var _ = parseInt(_.getAttribute("tabindex"), 10);
            return !!(isNaN(_) || _ >= 0);
          },
          _ = function _(_) {
            var _ = [],
              _ = [];
            return (
              _.forEach(function (_, _) {
                var _ = !!_.scopeParent,
                  _ = _ ? _.scopeParent : _,
                  _ = _(_, _),
                  _ = _ ? _(_.candidates) : _;
                _ === 0
                  ? _
                    ? _.push.apply(_, _)
                    : _.push(_)
                  : _.push({
                      documentOrder: _,
                      tabIndex: _,
                      item: _,
                      isScope: _,
                      content: _,
                    });
              }),
              _.sort(_)
                .reduce(function (_, _) {
                  return (
                    _.isScope ? _.push.apply(_, _.content) : _.push(_.content),
                    _
                  );
                }, [])
                .concat(_)
            );
          },
          _ = function (_, _) {
            _ = _ || {};
            var _;
            return (
              _.getShadowRoot
                ? (_ = _([_], _.includeContainer, {
                    filter: _.bind(null, _),
                    flatten: !1,
                    getShadowRoot: _.getShadowRoot,
                    shadowRootFilter: _,
                  }))
                : (_ = _(_, _.includeContainer, _.bind(null, _))),
              _(_)
            );
          },
          _ = function (_, _) {
            _ = _ || {};
            var _;
            return (
              _.getShadowRoot
                ? (_ = _([_], _.includeContainer, {
                    filter: _.bind(null, _),
                    flatten: !0,
                    getShadowRoot: _.getShadowRoot,
                  }))
                : (_ = _(_, _.includeContainer, _.bind(null, _))),
              _
            );
          },
          _ = function (_, _) {
            if (((_ = _ || {}), !_)) throw new Error("No node provided");
            return _.call(_, _) === !1 ? !1 : _(_, _);
          },
          _ = null,
          _ = function (_, _) {
            if (((_ = _ || {}), !_)) throw new Error("No node provided");
            return _.call(_, _) === !1 ? !1 : _(_, _);
          },
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.useRef(void 0),
            _ = _.useCallback((_) => {
              const _ = _.map((_) => {
                if (_ != null) {
                  if (typeof _ == "function") {
                    const _ = _,
                      _ = _(_);
                    return typeof _ == "function"
                      ? _
                      : () => {
                          _(null);
                        };
                  }
                  return (
                    (_.current = _),
                    () => {
                      _.current = null;
                    }
                  );
                }
              });
              return () => {
                _.forEach((_) => _?.());
              };
            }, _);
          return _.useMemo(
            () =>
              _.every((_) => _ == null)
                ? null
                : (_) => {
                    _.current && (_.current(), (_.current = void 0)),
                      _ != null && (_.current = _(_));
                  },
            _,
          );
        }
        const _ = {
            ..._,
          },
          _ = _.useInsertionEffect || ((_) => _());
        function _(_) {
          const _ = _.useRef(() => {});
          return (
            _(() => {
              _.current = _;
            }),
            _.useCallback(function () {
              for (
                var _ = arguments.length, _ = new Array(_), _ = 0;
                _ < _;
                _++
              )
                _[_] = arguments[_];
              return _.current == null ? void 0 : _.current(..._);
            }, [])
          );
        }
        const _ = "ArrowUp",
          _ = "ArrowDown",
          _ = "ArrowLeft",
          _ = "ArrowRight";
        function _(_, _, _) {
          return Math.floor(_ / _) !== _;
        }
        function _(_, _) {
          return _ < 0 || _ >= _.current.length;
        }
        function _(_, _) {
          return _(_, {
            disabledIndices: _,
          });
        }
        function _(_, _) {
          return _(_, {
            decrement: !0,
            startingIndex: _.current.length,
            disabledIndices: _,
          });
        }
        function _(_, _) {
          let {
            startingIndex: _ = -1,
            decrement: _ = !1,
            disabledIndices: _,
            amount: _ = 1,
          } = _ === void 0 ? {} : _;
          const _ = _.current;
          let _ = _;
          do _ += _ ? -_ : _;
          while (_ >= 0 && _ <= _.length - 1 && _(_, _, _));
          return _;
        }
        function _(_, _) {
          let {
              event: _,
              orientation: _,
              loop: _,
              rtl: _,
              cols: _,
              disabledIndices: _,
              minIndex: _,
              maxIndex: _,
              prevIndex: _,
              stopEvent: _ = !1,
            } = _,
            _ = _;
          if (_.key === _) {
            if ((_ && stopEvent(_), _ === -1)) _ = _;
            else if (
              ((_ = _(_, {
                startingIndex: _,
                amount: _,
                decrement: !0,
                disabledIndices: _,
              })),
              _ && (_ - _ < _ || _ < 0))
            ) {
              const _ = _ % _,
                _ = _ % _,
                _ = _ - (_ - _);
              _ === _ ? (_ = _) : (_ = _ > _ ? _ : _ - _);
            }
            _(_, _) && (_ = _);
          }
          if (
            (_.key === _ &&
              (_ && stopEvent(_),
              _ === -1
                ? (_ = _)
                : ((_ = _(_, {
                    startingIndex: _,
                    amount: _,
                    disabledIndices: _,
                  })),
                  _ &&
                    _ + _ > _ &&
                    (_ = _(_, {
                      startingIndex: (_ % _) - _,
                      amount: _,
                      disabledIndices: _,
                    }))),
              _(_, _) && (_ = _)),
            _ === "both")
          ) {
            const _ = floor(_ / _);
            _.key === (_ ? _ : _) &&
              (_ && stopEvent(_),
              _ % _ !== _ - 1
                ? ((_ = _(_, {
                    startingIndex: _,
                    disabledIndices: _,
                  })),
                  _ &&
                    _(_, _, _) &&
                    (_ = _(_, {
                      startingIndex: _ - (_ % _) - 1,
                      disabledIndices: _,
                    })))
                : _ &&
                  (_ = _(_, {
                    startingIndex: _ - (_ % _) - 1,
                    disabledIndices: _,
                  })),
              _(_, _, _) && (_ = _)),
              _.key === (_ ? _ : _) &&
                (_ && stopEvent(_),
                _ % _ !== 0
                  ? ((_ = _(_, {
                      startingIndex: _,
                      decrement: !0,
                      disabledIndices: _,
                    })),
                    _ &&
                      _(_, _, _) &&
                      (_ = _(_, {
                        startingIndex: _ + (_ - (_ % _)),
                        decrement: !0,
                        disabledIndices: _,
                      })))
                  : _ &&
                    (_ = _(_, {
                      startingIndex: _ + (_ - (_ % _)),
                      decrement: !0,
                      disabledIndices: _,
                    })),
                _(_, _, _) && (_ = _));
            const _ = floor(_ / _) === _;
            _(_, _) &&
              (_ && _
                ? (_ =
                    _.key === (_ ? _ : _)
                      ? _
                      : _(_, {
                          startingIndex: _ - (_ % _) - 1,
                          disabledIndices: _,
                        }))
                : (_ = _));
          }
          return _;
        }
        function _(_, _, _) {
          const _ = [];
          let _ = 0;
          return (
            _.forEach((_, _) => {
              let { width: _, height: _ } = _;
              _ > _;
              let _ = !1;
              for (_ && (_ = 0); !_; ) {
                const _ = [];
                for (let _ = 0; _ < _; _++)
                  for (let _ = 0; _ < _; _++) _.push(_ + _ + _ * _);
                (_ % _) + _ <= _ && _.every((_) => _[_] == null)
                  ? (_.forEach((_) => {
                      _[_] = _;
                    }),
                    (_ = !0))
                  : _++;
              }
            }),
            [..._]
          );
        }
        function _(_, _, _, _, _) {
          if (_ === -1) return -1;
          const _ = _.indexOf(_),
            _ = _[_];
          switch (_) {
            case "tl":
              return _;
            case "tr":
              return _ ? _ + _.width - 1 : _;
            case "bl":
              return _ ? _ + (_.height - 1) * _ : _;
            case "br":
              return _.lastIndexOf(_);
          }
        }
        function _(_, _) {
          return _.flatMap((_, _) => (_.includes(_) ? [_] : []));
        }
        function _(_, _, _) {
          if (_) return _.includes(_);
          const _ = _[_];
          return (
            _ == null ||
            _.hasAttribute("disabled") ||
            _.getAttribute("aria-disabled") === "true"
          );
        }
        var _ = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
        function _(_, _) {
          const _ = _.compareDocumentPosition(_);
          return _ & Node.DOCUMENT_POSITION_FOLLOWING ||
            _ & Node.DOCUMENT_POSITION_CONTAINED_BY
            ? -1
            : _ & Node.DOCUMENT_POSITION_PRECEDING ||
                _ & Node.DOCUMENT_POSITION_CONTAINS
              ? 1
              : 0;
        }
        const _ = _.createContext({
          register: () => {},
          unregister: () => {},
          map: new Map(),
          elementsRef: {
            current: [],
          },
        });
        function _(_) {
          const { children: _, elementsRef: _, labelsRef: _ } = _,
            [_, _] = React.useState(() => new Set()),
            _ = React.useCallback((_) => {
              _((_) => new Set(_).add(_));
            }, []),
            _ = React.useCallback((_) => {
              _((_) => {
                const _ = new Set(_);
                return _.delete(_), _;
              });
            }, []),
            _ = React.useMemo(() => {
              const _ = new Map();
              return (
                Array.from(_.keys())
                  .sort(_)
                  .forEach((_, _) => {
                    _.set(_, _);
                  }),
                _
              );
            }, [_]);
          return jsx(_.Provider, {
            value: React.useMemo(
              () => ({
                register: _,
                unregister: _,
                map: _,
                elementsRef: _,
                labelsRef: _,
              }),
              [_, _, _, _, _],
            ),
            children: _,
          });
        }
        function _(_) {
          _ === void 0 && (_ = {});
          const { label: _ } = _,
            {
              register: _,
              unregister: _,
              map: _,
              elementsRef: _,
              labelsRef: _,
            } = React.useContext(_),
            [_, _] = React.useState(null),
            _ = React.useRef(null),
            _ = React.useCallback(
              (_) => {
                if (((_.current = _), _ !== null && ((_.current[_] = _), _))) {
                  var _;
                  const _ = _ !== void 0;
                  _.current[_] = _
                    ? _
                    : (_ = _?.textContent) != null
                      ? _
                      : null;
                }
              },
              [_, _, _, _],
            );
          return (
            _(() => {
              const _ = _.current;
              if (_)
                return (
                  _(_),
                  () => {
                    _(_);
                  }
                );
            }, [_, _]),
            _(() => {
              const _ = _.current ? _.get(_.current) : null;
              _ != null && _(_);
            }, [_]),
            React.useMemo(
              () => ({
                ref: _,
                index: _ ?? -1,
              }),
              [_, _],
            )
          );
        }
        function _(_, _) {
          return typeof _ == "function"
            ? _(_)
            : _
              ? React.cloneElement(_, _)
              : jsx("div", {
                  ..._,
                });
        }
        const _ = _.createContext({
            activeIndex: 0,
            onNavigate: () => {},
          }),
          _ = [_, _],
          _ = [_, _],
          _ = [..._, ..._],
          _ = null,
          _ = null;
        let _ = !1,
          _ = 0;
        const _ = () =>
          "floating-ui-" + Math.random().toString(36).slice(2, 6) + _++;
        function _() {
          const [_, _] = _.useState(() => (_ ? _() : void 0));
          return (
            _(() => {
              _ == null && _(_());
            }, []),
            _.useEffect(() => {
              _ = !0;
            }, []),
            _
          );
        }
        const _ = _.useId || _;
        let _;
        function _() {
          for (var _, _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
            _[_] = arguments[_];
          const _ = "Floating UI: " + _.join(" ");
          if (!((_ = _) != null && _.has(_))) {
            var _;
            (_ = _) == null || _.add(_), console.warn(_);
          }
        }
        function _() {
          for (var _, _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
            _[_] = arguments[_];
          const _ = "Floating UI: " + _.join(" ");
          if (!((_ = _) != null && _.has(_))) {
            var _;
            (_ = _) == null || _.add(_), console.error(_);
          }
        }
        const _ = null;
        function _() {
          const _ = new Map();
          return {
            emit(_, _) {
              var _;
              (_ = _.get(_)) == null || _.forEach((_) => _(_));
            },
            _(_, _) {
              _.set(_, [...(_.get(_) || []), _]);
            },
            off(_, _) {
              var _;
              _.set(
                _,
                ((_ = _.get(_)) == null ? void 0 : _.filter((_) => _ !== _)) ||
                  [],
              );
            },
          };
        }
        const _ = _.createContext(null),
          _ = _.createContext(null),
          _ = () => {
            var _;
            return ((_ = _.useContext(_)) == null ? void 0 : _._) || null;
          },
          _ = () => _.useContext(_);
        function _(_) {
          const _ = _(),
            _ = _(),
            _ = _(),
            _ = _ || _;
          return (
            _(() => {
              if (!_) return;
              const _ = {
                _: _,
                parentId: _,
              };
              return (
                _?.addNode(_),
                () => {
                  _?.removeNode(_);
                }
              );
            }, [_, _, _]),
            _
          );
        }
        function _(_) {
          const { children: _, _: _ } = _,
            _ = _();
          return jsx(_.Provider, {
            value: React.useMemo(
              () => ({
                _: _,
                parentId: _,
              }),
              [_, _],
            ),
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _,
            _ = React.useRef([]),
            _ = React.useCallback((_) => {
              _.current = [..._.current, _];
            }, []),
            _ = React.useCallback((_) => {
              _.current = _.current.filter((_) => _ !== _);
            }, []),
            _ = React.useState(() => _())[0];
          return jsx(_.Provider, {
            value: React.useMemo(
              () => ({
                nodesRef: _,
                addNode: _,
                removeNode: _,
                events: _,
              }),
              [_, _, _],
            ),
            children: _,
          });
        }
        function _(_) {
          return "data-floating-ui-" + _;
        }
        function _(_) {
          _.current !== -1 && (clearTimeout(_.current), (_.current = -1));
        }
        function _(_) {
          const _ = (0, _.useRef)(_);
          return (
            _(() => {
              _.current = _;
            }),
            _
          );
        }
        const _ = _("safe-polygon");
        function _(_, _, _) {
          return _ && !_(_) ? 0 : typeof _ == "number" ? _ : _?.[_];
        }
        function _(_, _) {
          _ === void 0 && (_ = {});
          const {
              open: _,
              onOpenChange: _,
              dataRef: _,
              events: _,
              elements: _,
            } = _,
            {
              enabled: _ = !0,
              delay: _ = 0,
              handleClose: _ = null,
              mouseOnly: _ = !1,
              restMs: _ = 0,
              move: _ = !0,
            } = _,
            _ = _(),
            _ = _(),
            _ = _(_),
            _ = _(_),
            _ = _(_),
            _ = _.useRef(),
            _ = _.useRef(-1),
            _ = _.useRef(),
            _ = _.useRef(-1),
            _ = _.useRef(!0),
            _ = _.useRef(!1),
            _ = _.useRef(() => {}),
            _ = _.useRef(!1),
            _ = _.useCallback(() => {
              var _;
              const _ = (_ = _.current.openEvent) == null ? void 0 : _.type;
              return _?.includes("mouse") && _ !== "mousedown";
            }, [_]);
          _.useEffect(() => {
            if (!_) return;
            function _(_) {
              let { open: _ } = _;
              _ || (_(_), _(_), (_.current = !0), (_.current = !1));
            }
            return (
              _._("openchange", _),
              () => {
                _.off("openchange", _);
              }
            );
          }, [_, _]),
            _.useEffect(() => {
              if (!_ || !_.current || !_) return;
              function _(_) {
                _() && _(!1, _, "hover");
              }
              const _ = _(_.floating).documentElement;
              return (
                _.addEventListener("mouseleave", _),
                () => {
                  _.removeEventListener("mouseleave", _);
                }
              );
            }, [_.floating, _, _, _, _, _]);
          const _ = _.useCallback(
              function (_, _, _) {
                _ === void 0 && (_ = !0), _ === void 0 && (_ = "hover");
                const _ = _(_.current, "close", _.current);
                _ && !_.current
                  ? (_(_),
                    (_.current = window.setTimeout(() => _(!1, _, _), _)))
                  : _ && (_(_), _(!1, _, _));
              },
              [_, _],
            ),
            _ = _(() => {
              _.current(), (_.current = void 0);
            }),
            _ = _(() => {
              if (_.current) {
                const _ = _(_.floating).body;
                (_.style.pointerEvents = ""),
                  _.removeAttribute(_),
                  (_.current = !1);
              }
            }),
            _ = _(() =>
              _.current.openEvent
                ? ["click", "mousedown"].includes(_.current.openEvent.type)
                : !1,
            );
          _.useEffect(() => {
            if (!_) return;
            function _(_) {
              if (
                (_(_),
                (_.current = !1),
                (_ && !_(_.current)) || (_ > 0 && !_(_.current, "open")))
              )
                return;
              const _ = _(_.current, "open", _.current);
              _
                ? (_.current = window.setTimeout(() => {
                    _.current || _(!0, _, "hover");
                  }, _))
                : _ || _(!0, _, "hover");
            }
            function _(_) {
              if (_()) return;
              _.current();
              const _ = _(_.floating);
              if (
                (_(_), (_.current = !1), _.current && _.current.floatingContext)
              ) {
                _ || _(_),
                  (_.current = _.current({
                    ..._.current.floatingContext,
                    tree: _,
                    _: _.clientX,
                    _: _.clientY,
                    onClose() {
                      _(), _(), _() || _(_, !0, "safe-polygon");
                    },
                  }));
                const _ = _.current;
                _.addEventListener("mousemove", _),
                  (_.current = () => {
                    _.removeEventListener("mousemove", _);
                  });
                return;
              }
              (_.current !== "touch" || !_(_.floating, _.relatedTarget)) &&
                _(_);
            }
            function _(_) {
              _() ||
                (_.current.floatingContext &&
                  (_.current == null ||
                    _.current({
                      ..._.current.floatingContext,
                      tree: _,
                      _: _.clientX,
                      _: _.clientY,
                      onClose() {
                        _(), _(), _() || _(_);
                      },
                    })(_)));
            }
            if ((0, _._)(_.domReference)) {
              var _;
              const _ = _.domReference;
              return (
                _ && _.addEventListener("mouseleave", _),
                (_ = _.floating) == null || _.addEventListener("mouseleave", _),
                _ &&
                  _.addEventListener("mousemove", _, {
                    once: !0,
                  }),
                _.addEventListener("mouseenter", _),
                _.addEventListener("mouseleave", _),
                () => {
                  var _;
                  _ && _.removeEventListener("mouseleave", _),
                    (_ = _.floating) == null ||
                      _.removeEventListener("mouseleave", _),
                    _ && _.removeEventListener("mousemove", _),
                    _.removeEventListener("mouseenter", _),
                    _.removeEventListener("mouseleave", _);
                }
              );
            }
          }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
            _(() => {
              var _;
              if (
                _ &&
                _ &&
                (_ = _.current) != null &&
                _.__options.blockPointerEvents &&
                _()
              ) {
                _.current = !0;
                const _ = _.floating;
                if ((0, _._)(_.domReference) && _) {
                  var _;
                  const _ = _(_.floating).body;
                  _.setAttribute(_, "");
                  const _ = _.domReference,
                    _ =
                      _ == null ||
                      (_ = _.nodesRef.current.find((_) => _._ === _)) == null ||
                      (_ = _.context) == null
                        ? void 0
                        : _.elements.floating;
                  return (
                    _ && (_.style.pointerEvents = ""),
                    (_.style.pointerEvents = "none"),
                    (_.style.pointerEvents = "auto"),
                    (_.style.pointerEvents = "auto"),
                    () => {
                      (_.style.pointerEvents = ""),
                        (_.style.pointerEvents = ""),
                        (_.style.pointerEvents = "");
                    }
                  );
                }
              }
            }, [_, _, _, _, _, _, _]),
            _(() => {
              _ || ((_.current = void 0), (_.current = !1), _(), _());
            }, [_, _, _]),
            _.useEffect(
              () => () => {
                _(), _(_), _(_), _();
              },
              [_, _.domReference, _, _],
            );
          const _ = _.useMemo(() => {
              function _(_) {
                _.current = _.pointerType;
              }
              return {
                onPointerDown: _,
                onPointerEnter: _,
                onMouseMove(_) {
                  const { nativeEvent: _ } = _;
                  function _() {
                    !_.current && !_.current && _(!0, _, "hover");
                  }
                  (_ && !_(_.current)) ||
                    _ ||
                    _ === 0 ||
                    (_.current && _.movementX ** 2 + _.movementY ** 2 < 2) ||
                    (_(_),
                    _.current === "touch"
                      ? _()
                      : ((_.current = !0),
                        (_.current = window.setTimeout(_, _))));
                },
              };
            }, [_, _, _, _, _]),
            _ = _.useMemo(
              () => ({
                onMouseEnter() {
                  _(_);
                },
                onMouseLeave(_) {
                  _() || _(_.nativeEvent, !1);
                },
              }),
              [_, _],
            );
          return _.useMemo(
            () =>
              _
                ? {
                    reference: _,
                    floating: _,
                  }
                : {},
            [_, _, _],
          );
        }
        const _ = () => {},
          _ = _.createContext({
            delay: 0,
            initialDelay: 0,
            timeoutMs: 0,
            currentId: null,
            setCurrentId: _,
            setState: _,
            isInstantPhase: !1,
          }),
          _ = () => React.useContext(_);
        function _(_) {
          const { children: _, delay: _, timeoutMs: _ = 0 } = _,
            [_, _] = React.useReducer(
              (_, _) => ({
                ..._,
                ..._,
              }),
              {
                delay: _,
                timeoutMs: _,
                initialDelay: _,
                currentId: null,
                isInstantPhase: !1,
              },
            ),
            _ = React.useRef(null),
            _ = React.useCallback((_) => {
              _({
                currentId: _,
              });
            }, []);
          return (
            _(() => {
              _.currentId
                ? _.current === null
                  ? (_.current = _.currentId)
                  : _.isInstantPhase ||
                    _({
                      isInstantPhase: !0,
                    })
                : (_.isInstantPhase &&
                    _({
                      isInstantPhase: !1,
                    }),
                  (_.current = null));
            }, [_.currentId, _.isInstantPhase]),
            jsx(_.Provider, {
              value: React.useMemo(
                () => ({
                  ..._,
                  setState: _,
                  setCurrentId: _,
                }),
                [_, _],
              ),
              children: _,
            })
          );
        }
        function _(_, _) {
          _ === void 0 && (_ = {});
          const { open: _, onOpenChange: _, floatingId: _ } = _,
            { _: _, enabled: _ = !0 } = _,
            _ = _ ?? _,
            _ = _(),
            {
              currentId: _,
              setCurrentId: _,
              initialDelay: _,
              setState: _,
              timeoutMs: _,
            } = _;
          return (
            _(() => {
              _ &&
                _ &&
                (_({
                  delay: {
                    open: 1,
                    close: _(_, "close"),
                  },
                }),
                _ !== _ && _(!1));
            }, [_, _, _, _, _, _]),
            _(() => {
              function _() {
                _(!1),
                  _({
                    delay: _,
                    currentId: null,
                  });
              }
              if (_ && _ && !_ && _ === _) {
                if (_) {
                  const _ = window.setTimeout(_, _);
                  return () => {
                    clearTimeout(_);
                  };
                }
                _();
              }
            }, [_, _, _, _, _, _, _, _]),
            _(() => {
              _ && (_ === _ || !_ || _(_));
            }, [_, _, _, _]),
            _
          );
        }
        let _ = 0;
        function _(_, _) {
          _ === void 0 && (_ = {});
          const {
            preventScroll: _ = !1,
            cancelPrevious: _ = !0,
            sync: _ = !1,
          } = _;
          _ && cancelAnimationFrame(_);
          const _ = () =>
            _?.focus({
              preventScroll: _,
            });
          _ ? _() : (_ = requestAnimationFrame(_));
        }
        function _(_, _) {
          var _;
          let _ = [],
            _ = (_ = _.find((_) => _._ === _)) == null ? void 0 : _.parentId;
          for (; _; ) {
            const _ = _.find((_) => _._ === _);
            (_ = _?.parentId), _ && (_ = _.concat(_));
          }
          return _;
        }
        function _(_, _) {
          let _ = _.filter((_) => {
              var _;
              return (
                _.parentId === _ && ((_ = _.context) == null ? void 0 : _.open)
              );
            }),
            _ = _;
          for (; _.length; )
            (_ = _.filter((_) => {
              var _;
              return (_ = _) == null
                ? void 0
                : _.some((_) => {
                    var _;
                    return (
                      _.parentId === _._ &&
                      ((_ = _.context) == null ? void 0 : _.open)
                    );
                  });
            })),
              (_ = _.concat(_));
          return _;
        }
        function _(_, _) {
          let _,
            _ = -1;
          function _(_, _) {
            _ > _ && ((_ = _), (_ = _)),
              _(_, _).forEach((_) => {
                _(_._, _ + 1);
              });
          }
          return _(_, 0), _.find((_) => _._ === _);
        }
        let _ = new WeakMap(),
          _ = new WeakSet(),
          _ = {},
          _ = 0;
        const _ = () =>
            typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
          _ = (_) => _ && (_.host || _(_.parentNode)),
          _ = (_, _) =>
            _.map((_) => {
              if (_.contains(_)) return _;
              const _ = _(_);
              return _.contains(_) ? _ : null;
            }).filter((_) => _ != null);
        function _(_, _, _, _) {
          const _ = "data-floating-ui-inert",
            _ = _ ? "inert" : _ ? "aria-hidden" : null,
            _ = _(_, _),
            _ = new Set(),
            _ = new Set(_),
            _ = [];
          _[_] || (_[_] = new WeakMap());
          const _ = _[_];
          _.forEach(_), _(_), _.clear();
          function _(_) {
            !_ || _.has(_) || (_.add(_), _.parentNode && _(_.parentNode));
          }
          function _(_) {
            !_ ||
              _.has(_) ||
              [].forEach.call(_.children, (_) => {
                if ((0, _._)(_) !== "script")
                  if (_.has(_)) _(_);
                  else {
                    const _ = _ ? _.getAttribute(_) : null,
                      _ = _ !== null && _ !== "false",
                      _ = _.get(_) || 0,
                      _ = _ ? _ + 1 : _,
                      _ = (_.get(_) || 0) + 1;
                    _.set(_, _),
                      _.set(_, _),
                      _.push(_),
                      _ === 1 && _ && _.add(_),
                      _ === 1 && _.setAttribute(_, ""),
                      !_ && _ && _.setAttribute(_, "true");
                  }
              });
          }
          return (
            _++,
            () => {
              _.forEach((_) => {
                const _ = _.get(_) || 0,
                  _ = _ ? _ - 1 : _,
                  _ = (_.get(_) || 0) - 1;
                _.set(_, _),
                  _.set(_, _),
                  _ || (!_.has(_) && _ && _.removeAttribute(_), _.delete(_)),
                  _ || _.removeAttribute(_);
              }),
                _--,
                _ ||
                  ((_ = new WeakMap()),
                  (_ = new WeakMap()),
                  (_ = new WeakSet()),
                  (_ = {}));
            }
          );
        }
        function _(_, _, _) {
          _ === void 0 && (_ = !1), _ === void 0 && (_ = !1);
          const _ = _(_[0]).body;
          return _(
            _.concat(Array.from(_.querySelectorAll("[aria-live]"))),
            _,
            _,
            _,
          );
        }
        const _ = () => ({
          getShadowRoot: !0,
          displayCheck:
            typeof ResizeObserver == "function" &&
            ResizeObserver.toString().includes("[native code]")
              ? "full"
              : "none",
        });
        function _(_, _) {
          const _ = _(_, _());
          _ === "prev" && _.reverse();
          const _ = _.indexOf(_(_(_)));
          return _.slice(_ + 1)[0];
        }
        function _() {
          return _(document.body, "next");
        }
        function _() {
          return _(document.body, "prev");
        }
        function _(_, _) {
          const _ = _ || _.currentTarget,
            _ = _.relatedTarget;
          return !_ || !_(_, _);
        }
        function _(_) {
          tabbable(_, _()).forEach((_) => {
            (_.dataset.tabindex = _.getAttribute("tabindex") || ""),
              _.setAttribute("tabindex", "-1");
          });
        }
        function _(_) {
          _.querySelectorAll("[data-tabindex]").forEach((_) => {
            const _ = _.dataset.tabindex;
            delete _.dataset.tabindex,
              _ ? _.setAttribute("tabindex", _) : _.removeAttribute("tabindex");
          });
        }
        const _ = {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "fixed",
            whiteSpace: "nowrap",
            width: "1px",
            top: 0,
            left: 0,
          },
          _ = _.forwardRef(function (_, _) {
            const [_, _] = _.useState();
            _(() => {
              _() && _("button");
            }, []);
            const _ = {
              ref: _,
              tabIndex: 0,
              role: _,
              "aria-hidden": _ ? void 0 : !0,
              [_("focus-guard")]: "",
              style: _,
            };
            return (0, _.jsx)("span", {
              ..._,
              ..._,
            });
          }),
          _ = _.createContext(null),
          _ = null;
        function _(_) {
          _ === void 0 && (_ = {});
          const { _: _, root: _ } = _,
            _ = _(),
            _ = _(),
            [_, _] = React.useState(null),
            _ = React.useRef(null);
          return (
            _(
              () => () => {
                _?.remove(),
                  queueMicrotask(() => {
                    _.current = null;
                  });
              },
              [_],
            ),
            _(() => {
              if (!_ || _.current) return;
              const _ = _ ? document.getElementById(_) : null;
              if (!_) return;
              const _ = document.createElement("div");
              (_._ = _),
                _.setAttribute(_, ""),
                _.appendChild(_),
                (_.current = _),
                _(_);
            }, [_, _]),
            _(() => {
              if (_ === null || !_ || _.current) return;
              let _ = _ || _?.portalNode;
              _ && !isElement(_) && (_ = _.current), (_ = _ || document.body);
              let _ = null;
              _ &&
                ((_ = document.createElement("div")),
                (_._ = _),
                _.appendChild(_));
              const _ = document.createElement("div");
              (_._ = _),
                _.setAttribute(_, ""),
                (_ = _ || _),
                _.appendChild(_),
                (_.current = _),
                _(_);
            }, [_, _, _, _]),
            _
          );
        }
        function _(_) {
          const { children: _, _: _, root: _, preserveTabOrder: _ = !0 } = _,
            _ = _({
              _: _,
              root: _,
            }),
            [_, _] = React.useState(null),
            _ = React.useRef(null),
            _ = React.useRef(null),
            _ = React.useRef(null),
            _ = React.useRef(null),
            _ = _?.modal,
            _ = _?.open,
            _ = !!_ && !_.modal && _.open && _ && !!(_ || _);
          return (
            React.useEffect(() => {
              if (!_ || !_ || _) return;
              function _(_) {
                _ && _(_) && (_.type === "focusin" ? _ : _)(_);
              }
              return (
                _.addEventListener("focusin", _, !0),
                _.addEventListener("focusout", _, !0),
                () => {
                  _.removeEventListener("focusin", _, !0),
                    _.removeEventListener("focusout", _, !0);
                }
              );
            }, [_, _, _]),
            React.useEffect(() => {
              _ && (_ || _(_));
            }, [_, _]),
            jsxs(_.Provider, {
              value: React.useMemo(
                () => ({
                  preserveTabOrder: _,
                  beforeOutsideRef: _,
                  afterOutsideRef: _,
                  beforeInsideRef: _,
                  afterInsideRef: _,
                  portalNode: _,
                  setFocusManagerState: _,
                }),
                [_, _],
              ),
              children: [
                _ &&
                  _ &&
                  jsx(_, {
                    "data-type": "outside",
                    ref: _,
                    onFocus: (_) => {
                      if (_(_, _)) {
                        var _;
                        (_ = _.current) == null || _.focus();
                      } else {
                        const _ = _() || _?.domReference;
                        _?.focus();
                      }
                    },
                  }),
                _ &&
                  _ &&
                  jsx("span", {
                    "aria-owns": _._,
                    style: _,
                  }),
                _ && ReactDOM.createPortal(_, _),
                _ &&
                  _ &&
                  jsx(_, {
                    "data-type": "outside",
                    ref: _,
                    onFocus: (_) => {
                      if (_(_, _)) {
                        var _;
                        (_ = _.current) == null || _.focus();
                      } else {
                        const _ = _() || _?.domReference;
                        _?.focus(),
                          _?.closeOnFocusOut &&
                            _?.onOpenChange(!1, _.nativeEvent, "focus-out");
                      }
                    },
                  }),
              ],
            })
          );
        }
        const _ = () => _.useContext(_),
          _ = "data-floating-ui-focusable";
        function _(_) {
          return _
            ? _.hasAttribute(_)
              ? _
              : _.querySelector("[" + _ + "]") || _
            : null;
        }
        function _(_) {
          return _.useMemo(
            () => (_) => {
              _.forEach((_) => {
                _ && (_.current = _);
              });
            },
            _,
          );
        }
        const _ = 20;
        let _ = [];
        function _(_) {
          (_ = _.filter((_) => _.isConnected)),
            _ &&
              (0, _._)(_) !== "body" &&
              (_.push(_), _.length > _ && (_ = _.slice(-_)));
        }
        function _() {
          return _.slice()
            .reverse()
            .find((_) => _.isConnected);
        }
        function _(_) {
          const _ = _();
          return _(_, _) ? _ : _(_, _)[0] || _;
        }
        const _ = _.forwardRef(function (_, _) {
          return (0, _.jsx)("button", {
            ..._,
            type: "button",
            ref: _,
            tabIndex: -1,
            style: _,
          });
        });
        function _(_) {
          const {
              context: _,
              children: _,
              disabled: _ = !1,
              order: _ = ["content"],
              guards: _ = !0,
              initialFocus: _ = 0,
              returnFocus: _ = !0,
              restoreFocus: _ = !1,
              modal: _ = !0,
              visuallyHiddenDismiss: _ = !1,
              closeOnFocusOut: _ = !0,
              outsideElementsInert: _ = !1,
            } = _,
            {
              open: _,
              onOpenChange: _,
              events: _,
              dataRef: _,
              elements: { domReference: _, floating: _ },
            } = _,
            _ = _(() => {
              var _;
              return (_ = _.current.floatingContext) == null
                ? void 0
                : _.nodeId;
            }),
            _ = typeof _ == "number" && _ < 0,
            _ = _(_) && _,
            _ = _(),
            _ = _ ? _ : !0,
            _ = !_ || (_ && _),
            _ = _(_),
            _ = _(_),
            _ = _(_),
            _ = _(),
            _ = _(),
            _ = _.useRef(null),
            _ = _.useRef(null),
            _ = _.useRef(!1),
            _ = _.useRef(!1),
            _ = _.useRef(-1),
            _ = _ != null,
            _ = _(_),
            _ = _(function (_) {
              return _ === void 0 && (_ = _), _ ? _(_, _()) : [];
            }),
            _ = _((_) => {
              const _ = _(_);
              return _.current
                .map((_) =>
                  _ && _ === "reference" ? _ : _ && _ === "floating" ? _ : _,
                )
                .filter(Boolean)
                .flat();
            });
          _.useEffect(() => {
            if (_ || !_) return;
            function _(_) {
              if (_.key === "Tab") {
                _(_, _(_(_))) && _().length === 0 && !_ && _(_);
                const _ = _(),
                  _ = _(_);
                _.current[0] === "reference" &&
                  _ === _ &&
                  (_(_), _.shiftKey ? _(_[_.length - 1]) : _(_[1])),
                  _.current[1] === "floating" &&
                    _ === _ &&
                    _.shiftKey &&
                    (_(_), _(_[0]));
              }
            }
            const _ = _(_);
            return (
              _.addEventListener("keydown", _),
              () => {
                _.removeEventListener("keydown", _);
              }
            );
          }, [_, _, _, _, _, _, _, _]),
            _.useEffect(() => {
              if (_ || !_) return;
              function _(_) {
                const _ = _(_),
                  _ = _().indexOf(_);
                _ !== -1 && (_.current = _);
              }
              return (
                _.addEventListener("focusin", _),
                () => {
                  _.removeEventListener("focusin", _);
                }
              );
            }, [_, _, _]),
            _.useEffect(() => {
              if (_ || !_) return;
              function _() {
                (_.current = !0),
                  setTimeout(() => {
                    _.current = !1;
                  });
              }
              function _(_) {
                const _ = _.relatedTarget;
                queueMicrotask(() => {
                  const _ = _(),
                    _ = !(
                      _(_, _) ||
                      _(_, _) ||
                      _(_, _) ||
                      _(_?.portalNode, _) ||
                      (_ != null && _.hasAttribute(_("focus-guard"))) ||
                      (_ &&
                        (_(_.nodesRef.current, _).find((_) => {
                          var _, _;
                          return (
                            _(
                              (_ = _.context) == null
                                ? void 0
                                : _.elements.floating,
                              _,
                            ) ||
                            _(
                              (_ = _.context) == null
                                ? void 0
                                : _.elements.domReference,
                              _,
                            )
                          );
                        }) ||
                          _(_.nodesRef.current, _).find((_) => {
                            var _, _, _;
                            return (
                              [
                                (_ = _.context) == null
                                  ? void 0
                                  : _.elements.floating,
                                _(
                                  (_ = _.context) == null
                                    ? void 0
                                    : _.elements.floating,
                                ),
                              ].includes(_) ||
                              ((_ = _.context) == null
                                ? void 0
                                : _.elements.domReference) === _
                            );
                          })))
                    );
                  if (_ && _ && _(_(_)) === _(_).body) {
                    (0, _._)(_) && _.focus();
                    const _ = _.current,
                      _ = _(),
                      _ = _[_] || _[_.length - 1] || _;
                    (0, _._)(_) && _.focus();
                  }
                  (_ || !_) &&
                    _ &&
                    _ &&
                    !_.current &&
                    _ !== _() &&
                    ((_.current = !0), _(!1, _, "focus-out"));
                });
              }
              if (_ && (0, _._)(_))
                return (
                  _.addEventListener("focusout", _),
                  _.addEventListener("pointerdown", _),
                  _.addEventListener("focusout", _),
                  () => {
                    _.removeEventListener("focusout", _),
                      _.removeEventListener("pointerdown", _),
                      _.removeEventListener("focusout", _);
                  }
                );
            }, [_, _, _, _, _, _, _, _, _, _, _, _, _]);
          const _ = _.useRef(null),
            _ = _.useRef(null),
            _ = _([_, _?.beforeInsideRef]),
            _ = _([_, _?.afterInsideRef]);
          _.useEffect(() => {
            var _;
            if (_ || !_) return;
            const _ = Array.from(
                (_ == null || (_ = _.portalNode) == null
                  ? void 0
                  : _.querySelectorAll("[" + _("portal") + "]")) || [],
              ),
              _ =
                _ && !_
                  ? _(_?.nodesRef.current, _()).map((_) => {
                      var _;
                      return (_ = _.context) == null
                        ? void 0
                        : _.elements.floating;
                    })
                  : [],
              _ = [
                _,
                ..._,
                ..._,
                _.current,
                _.current,
                _.current,
                _.current,
                _?.beforeOutsideRef.current,
                _?.afterOutsideRef.current,
                _.current.includes("reference") || _ ? _ : null,
              ].filter((_) => _ != null),
              _ = _ || _ ? _(_, !_, _) : _(_);
            return () => {
              _();
            };
          }, [_, _, _, _, _, _, _, _, _, _, _]),
            _(() => {
              if (_ || !(0, _._)(_)) return;
              const _ = _(_),
                _ = _(_);
              queueMicrotask(() => {
                const _ = _(_),
                  _ = _.current,
                  _ = (typeof _ == "number" ? _[_] : _.current) || _,
                  _ = _(_, _);
                !_ &&
                  !_ &&
                  _ &&
                  _(_, {
                    preventScroll: _ === _,
                  });
              });
            }, [_, _, _, _, _, _]),
            _(() => {
              if (_ || !_) return;
              let _ = !1,
                _ = !1;
              const _ = _(_),
                _ = _(_);
              let _ = _.current.openEvent;
              _(_);
              function _(_) {
                let { open: _, reason: _, event: _, nested: _ } = _;
                if (
                  (_ && (_ = _),
                  _ === "escape-key" && (_ = !0),
                  ["hover", "safe-polygon"].includes(_) &&
                    _.type === "mouseleave" &&
                    (_.current = !0),
                  _ === "outside-press")
                )
                  if (_) (_.current = !1), (_ = !0);
                  else if (_(_) || _(_)) _.current = !1;
                  else {
                    let _ = !1;
                    document.createElement("div").focus({
                      get preventScroll() {
                        return (_ = !0), !1;
                      },
                    }),
                      _ ? ((_.current = !1), (_ = !0)) : (_.current = !0);
                  }
              }
              _._("openchange", _);
              const _ = _.createElement("span");
              _.setAttribute("tabindex", "-1"),
                _.setAttribute("aria-hidden", "true"),
                Object.assign(_.style, _),
                _ && _ && _.insertAdjacentElement("afterend", _);
              function _() {
                return typeof _.current == "boolean"
                  ? _ && _
                    ? _
                    : _() || _
                  : _.current.current || _;
              }
              return () => {
                _.off("openchange", _);
                const _ = _(_),
                  _ =
                    _(_, _) ||
                    (_ &&
                      _(_.nodesRef.current, _()).some((_) => {
                        var _;
                        return _(
                          (_ = _.context) == null
                            ? void 0
                            : _.elements.floating,
                          _,
                        );
                      }));
                (_ || (_ && ["click", "mousedown"].includes(_.type))) &&
                  (_ = !0);
                const _ = _();
                queueMicrotask(() => {
                  const _ = _(_);
                  _.current &&
                    !_.current &&
                    (0, _._)(_) &&
                    (!(_ !== _ && _ !== _.body) || _) &&
                    _.focus({
                      preventScroll: _,
                    }),
                    _.remove();
                });
              };
            }, [_, _, _, _, _, _, _, _, _, _]),
            _.useEffect(() => {
              queueMicrotask(() => {
                _.current = !1;
              });
            }, [_]),
            _(() => {
              if (!_ && _)
                return (
                  _.setFocusManagerState({
                    modal: _,
                    closeOnFocusOut: _,
                    open: _,
                    onOpenChange: _,
                    domReference: _,
                  }),
                  () => {
                    _.setFocusManagerState(null);
                  }
                );
            }, [_, _, _, _, _, _, _]),
            _(() => {
              if (_ || !_ || typeof MutationObserver != "function" || _) return;
              const _ = () => {
                const _ = _.getAttribute("tabindex"),
                  _ = _(),
                  _ = _(_(_)),
                  _ = _.indexOf(_);
                _ !== -1 && (_.current = _),
                  _.current.includes("floating") || (_ !== _ && _.length === 0)
                    ? _ !== "0" && _.setAttribute("tabindex", "0")
                    : _ !== "-1" && _.setAttribute("tabindex", "-1");
              };
              _();
              const _ = new MutationObserver(_);
              return (
                _.observe(_, {
                  childList: !0,
                  subtree: !0,
                  attributes: !0,
                }),
                () => {
                  _.disconnect();
                }
              );
            }, [_, _, _, _, _, _, _]);
          function _(_) {
            return _ || !_ || !_
              ? null
              : (0, _.jsx)(_, {
                  ref: _ === "start" ? _ : _,
                  onClick: (_) => _(!1, _.nativeEvent),
                  children: typeof _ == "string" ? _ : "Dismiss",
                });
          }
          const _ = !_ && _ && (_ ? !_ : !0) && (_ || _);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  "data-type": "inside",
                  ref: _,
                  onFocus: (_) => {
                    if (_) {
                      const _ = _();
                      _(_[0] === "reference" ? _[0] : _[_.length - 1]);
                    } else if (_ != null && _.preserveTabOrder && _.portalNode)
                      if (((_.current = !1), _(_, _.portalNode))) {
                        const _ = _() || _;
                        _?.focus();
                      } else {
                        var _;
                        (_ = _.beforeOutsideRef.current) == null || _.focus();
                      }
                  },
                }),
              !_ && _("start"),
              _,
              _("end"),
              _ &&
                (0, _.jsx)(_, {
                  "data-type": "inside",
                  ref: _,
                  onFocus: (_) => {
                    if (_) _(_()[0]);
                    else if (_ != null && _.preserveTabOrder && _.portalNode)
                      if ((_ && (_.current = !0), _(_, _.portalNode))) {
                        const _ = _() || _;
                        _?.focus();
                      } else {
                        var _;
                        (_ = _.afterOutsideRef.current) == null || _.focus();
                      }
                  },
                }),
            ],
          });
        }
        let _ = 0;
        function _() {
          const _ = /iP(hone|ad|od)|iOS/.test(getPlatform()),
            _ = document.body.style,
            _ =
              Math.round(
                document.documentElement.getBoundingClientRect().left,
              ) + document.documentElement.scrollLeft
                ? "paddingLeft"
                : "paddingRight",
            _ = window.innerWidth - document.documentElement.clientWidth,
            _ = _.left ? parseFloat(_.left) : window.scrollX,
            _ = _.top ? parseFloat(_.top) : window.scrollY;
          if (((_.overflow = "hidden"), _ && (_[_] = _ + "px"), _)) {
            var _, _;
            const _ =
                ((_ = window.visualViewport) == null ? void 0 : _.offsetLeft) ||
                0,
              _ =
                ((_ = window.visualViewport) == null ? void 0 : _.offsetTop) ||
                0;
            Object.assign(_, {
              position: "fixed",
              top: -(_ - Math.floor(_)) + "px",
              left: -(_ - Math.floor(_)) + "px",
              right: "0",
            });
          }
          return () => {
            Object.assign(_, {
              overflow: "",
              [_]: "",
            }),
              _ &&
                (Object.assign(_, {
                  position: "",
                  top: "",
                  left: "",
                  right: "",
                }),
                window.scrollTo(_, _));
          };
        }
        let _ = () => {};
        const _ = null;
        function _(_) {
          return (0, _._)(_.target) && _.target.tagName === "BUTTON";
        }
        function _(_) {
          return _(_);
        }
        function _(_, _) {
          _ === void 0 && (_ = {});
          const {
              open: _,
              onOpenChange: _,
              dataRef: _,
              elements: { domReference: _ },
            } = _,
            {
              enabled: _ = !0,
              event: _ = "click",
              toggle: _ = !0,
              ignoreMouse: _ = !1,
              keyboardHandlers: _ = !0,
              stickIfOpen: _ = !0,
            } = _,
            _ = _.useRef(),
            _ = _.useRef(!1),
            _ = _.useMemo(
              () => ({
                onPointerDown(_) {
                  _.current = _.pointerType;
                },
                onMouseDown(_) {
                  const _ = _.current;
                  _.button === 0 &&
                    _ !== "click" &&
                    ((_(_, !0) && _) ||
                      (_ &&
                      _ &&
                      (!(_.current.openEvent && _) ||
                        _.current.openEvent.type === "mousedown")
                        ? _(!1, _.nativeEvent, "click")
                        : (_.preventDefault(), _(!0, _.nativeEvent, "click"))));
                },
                onClick(_) {
                  const _ = _.current;
                  if (_ === "mousedown" && _.current) {
                    _.current = void 0;
                    return;
                  }
                  (_(_, !0) && _) ||
                    (_ &&
                    _ &&
                    (!(_.current.openEvent && _) ||
                      _.current.openEvent.type === "click")
                      ? _(!1, _.nativeEvent, "click")
                      : _(!0, _.nativeEvent, "click"));
                },
                onKeyDown(_) {
                  (_.current = void 0),
                    !(_.defaultPrevented || !_ || _(_)) &&
                      (_.key === " " &&
                        !_(_) &&
                        (_.preventDefault(), (_.current = !0)),
                      _.key === "Enter" &&
                        _(!(_ && _), _.nativeEvent, "click"));
                },
                onKeyUp(_) {
                  _.defaultPrevented ||
                    !_ ||
                    _(_) ||
                    _(_) ||
                    (_.key === " " &&
                      _.current &&
                      ((_.current = !1), _(!(_ && _), _.nativeEvent, "click")));
                },
              }),
              [_, _, _, _, _, _, _, _, _],
            );
          return _.useMemo(
            () =>
              _
                ? {
                    reference: _,
                  }
                : {},
            [_, _],
          );
        }
        function _(_, _) {
          let _ = null,
            _ = null,
            _ = !1;
          return {
            contextElement: _ || void 0,
            getBoundingClientRect() {
              var _;
              const _ = _?.getBoundingClientRect() || {
                  width: 0,
                  height: 0,
                  _: 0,
                  _: 0,
                },
                _ = _.axis === "x" || _.axis === "both",
                _ = _.axis === "y" || _.axis === "both",
                _ =
                  ["mouseenter", "mousemove"].includes(
                    ((_ = _.dataRef.current.openEvent) == null
                      ? void 0
                      : _.type) || "",
                  ) && _.pointerType !== "touch";
              let _ = _.width,
                _ = _.height,
                _ = _._,
                _ = _._;
              return (
                _ == null && _._ && _ && (_ = _._ - _._),
                _ == null && _._ && _ && (_ = _._ - _._),
                (_ -= _ || 0),
                (_ -= _ || 0),
                (_ = 0),
                (_ = 0),
                !_ || _
                  ? ((_ = _.axis === "y" ? _.width : 0),
                    (_ = _.axis === "x" ? _.height : 0),
                    (_ = _ && _._ != null ? _._ : _),
                    (_ = _ && _._ != null ? _._ : _))
                  : _ &&
                    !_ &&
                    ((_ = _.axis === "x" ? _.height : _),
                    (_ = _.axis === "y" ? _.width : _)),
                (_ = !0),
                {
                  width: _,
                  height: _,
                  _: _,
                  _: _,
                  top: _,
                  right: _ + _,
                  bottom: _ + _,
                  left: _,
                }
              );
            },
          };
        }
        function _(_) {
          return _ != null && _.clientX != null;
        }
        function _(_, _) {
          _ === void 0 && (_ = {});
          const {
              open: _,
              dataRef: _,
              elements: { floating: _, domReference: _ },
              refs: _,
            } = _,
            { enabled: _ = !0, axis: _ = "both", _: _ = null, _: _ = null } = _,
            _ = React.useRef(!1),
            _ = React.useRef(null),
            [_, _] = React.useState(),
            [_, _] = React.useState([]),
            _ = _((_, _) => {
              _.current ||
                (_.current.openEvent && !_(_.current.openEvent)) ||
                _.setPositionReference(
                  _(_, {
                    _: _,
                    _: _,
                    axis: _,
                    dataRef: _,
                    pointerType: _,
                  }),
                );
            }),
            _ = _((_) => {
              _ != null ||
                _ != null ||
                (_ ? _.current || _([]) : _(_.clientX, _.clientY));
            }),
            _ = isMouseLikePointerType(_) ? _ : _,
            _ = React.useCallback(() => {
              if (!_ || !_ || _ != null || _ != null) return;
              const _ = getWindow(_);
              function _(_) {
                const _ = getTarget(_);
                contains(_, _)
                  ? (_.removeEventListener("mousemove", _), (_.current = null))
                  : _(_.clientX, _.clientY);
              }
              if (!_.current.openEvent || _(_.current.openEvent)) {
                _.addEventListener("mousemove", _);
                const _ = () => {
                  _.removeEventListener("mousemove", _), (_.current = null);
                };
                return (_.current = _), _;
              }
              _.setPositionReference(_);
            }, [_, _, _, _, _, _, _, _, _]);
          React.useEffect(() => _(), [_, _]),
            React.useEffect(() => {
              _ && !_ && (_.current = !1);
            }, [_, _]),
            React.useEffect(() => {
              !_ && _ && (_.current = !0);
            }, [_, _]),
            _(() => {
              _ && (_ != null || _ != null) && ((_.current = !1), _(_, _));
            }, [_, _, _, _]);
          const _ = React.useMemo(() => {
            function _(_) {
              let { pointerType: _ } = _;
              _(_);
            }
            return {
              onPointerDown: _,
              onPointerEnter: _,
              onMouseMove: _,
              onMouseEnter: _,
            };
          }, [_]);
          return React.useMemo(
            () =>
              _
                ? {
                    reference: _,
                  }
                : {},
            [_, _],
          );
        }
        const _ = {
            pointerdown: "onPointerDown",
            mousedown: "onMouseDown",
            click: "onClick",
          },
          _ = {
            pointerdown: "onPointerDownCapture",
            mousedown: "onMouseDownCapture",
            click: "onClickCapture",
          },
          _ = (_) => {
            var _, _;
            return {
              escapeKey:
                typeof _ == "boolean" ? _ : (_ = _?.escapeKey) != null ? _ : !1,
              outsidePress:
                typeof _ == "boolean"
                  ? _
                  : (_ = _?.outsidePress) != null
                    ? _
                    : !0,
            };
          };
        function _(_, _) {
          _ === void 0 && (_ = {});
          const { open: _, onOpenChange: _, elements: _, dataRef: _ } = _,
            {
              enabled: _ = !0,
              escapeKey: _ = !0,
              outsidePress: _ = !0,
              outsidePressEvent: _ = "pointerdown",
              referencePress: _ = !1,
              referencePressEvent: _ = "pointerdown",
              ancestorScroll: _ = !1,
              bubbles: _,
              capture: _,
            } = _,
            _ = _(),
            _ = _(typeof _ == "function" ? _ : () => !1),
            _ = typeof _ == "function" ? _ : _,
            _ = _.useRef(!1),
            _ = _.useRef(!1),
            { escapeKey: _, outsidePress: _ } = _(_),
            { escapeKey: _, outsidePress: _ } = _(_),
            _ = _.useRef(!1),
            _ = _((_) => {
              var _;
              if (!_ || !_ || !_ || _.key !== "Escape" || _.current) return;
              const _ =
                  (_ = _.current.floatingContext) == null ? void 0 : _.nodeId,
                _ = _ ? _(_.nodesRef.current, _) : [];
              if (!_ && (_.stopPropagation(), _.length > 0)) {
                let _ = !0;
                if (
                  (_.forEach((_) => {
                    var _;
                    if (
                      (_ = _.context) != null &&
                      _.open &&
                      !_.context.dataRef.current.__escapeKeyBubbles
                    ) {
                      _ = !1;
                      return;
                    }
                  }),
                  !_)
                )
                  return;
              }
              _(!1, _(_) ? _.nativeEvent : _, "escape-key");
            }),
            _ = _((_) => {
              var _;
              const _ = () => {
                var _;
                _(_), (_ = _(_)) == null || _.removeEventListener("keydown", _);
              };
              (_ = _(_)) == null || _.addEventListener("keydown", _);
            }),
            _ = _((_) => {
              var _;
              const _ = _.current;
              _.current = !1;
              const _ = _.current;
              if (
                ((_.current = !1),
                (_ === "click" && _) || _ || (typeof _ == "function" && !_(_)))
              )
                return;
              const _ = _(_),
                _ = "[" + _("inert") + "]",
                _ = _(_.floating).querySelectorAll(_);
              let _ = (0, _._)(_) ? _ : null;
              for (; _ && !(0, _._)(_); ) {
                const _ = (0, _._)(_);
                if ((0, _._)(_) || !(0, _._)(_)) break;
                _ = _;
              }
              if (
                _.length &&
                (0, _._)(_) &&
                !_(_) &&
                !_(_, _.floating) &&
                Array.from(_).every((_) => !_(_, _))
              )
                return;
              if ((0, _._)(_) && _) {
                const _ = (0, _._)(_),
                  _ = (0, _._)(_),
                  _ = /auto|scroll/,
                  _ = _ || _.test(_.overflowX),
                  _ = _ || _.test(_.overflowY),
                  _ = _ && _.clientWidth > 0 && _.scrollWidth > _.clientWidth,
                  _ =
                    _ && _.clientHeight > 0 && _.scrollHeight > _.clientHeight,
                  _ = _.direction === "rtl",
                  _ =
                    _ &&
                    (_
                      ? _.offsetX <= _.offsetWidth - _.clientWidth
                      : _.offsetX > _.clientWidth),
                  _ = _ && _.offsetY > _.clientHeight;
                if (_ || _) return;
              }
              const _ =
                  (_ = _.current.floatingContext) == null ? void 0 : _.nodeId,
                _ =
                  _ &&
                  _(_.nodesRef.current, _).some((_) => {
                    var _;
                    return _(
                      _,
                      (_ = _.context) == null ? void 0 : _.elements.floating,
                    );
                  });
              if (_(_, _.floating) || _(_, _.domReference) || _) return;
              const _ = _ ? _(_.nodesRef.current, _) : [];
              if (_.length > 0) {
                let _ = !0;
                if (
                  (_.forEach((_) => {
                    var _;
                    if (
                      (_ = _.context) != null &&
                      _.open &&
                      !_.context.dataRef.current.__outsidePressBubbles
                    ) {
                      _ = !1;
                      return;
                    }
                  }),
                  !_)
                )
                  return;
              }
              _(!1, _, "outside-press");
            }),
            _ = _((_) => {
              var _;
              const _ = () => {
                var _;
                _(_), (_ = _(_)) == null || _.removeEventListener(_, _);
              };
              (_ = _(_)) == null || _.addEventListener(_, _);
            });
          _.useEffect(() => {
            if (!_ || !_) return;
            (_.current.__escapeKeyBubbles = _),
              (_.current.__outsidePressBubbles = _);
            let _ = -1;
            function _(_) {
              _(!1, _, "ancestor-scroll");
            }
            function _() {
              window.clearTimeout(_), (_.current = !0);
            }
            function _() {
              _ = window.setTimeout(
                () => {
                  _.current = !1;
                },
                (0, _._)() ? 5 : 0,
              );
            }
            const _ = _(_.floating);
            _ &&
              (_.addEventListener("keydown", _ ? _ : _, _),
              _.addEventListener("compositionstart", _),
              _.addEventListener("compositionend", _)),
              _ && _.addEventListener(_, _ ? _ : _, _);
            let _ = [];
            return (
              _ &&
                ((0, _._)(_.domReference) && (_ = (0, _._)(_.domReference)),
                (0, _._)(_.floating) && (_ = _.concat((0, _._)(_.floating))),
                !(0, _._)(_.reference) &&
                  _.reference &&
                  _.reference.contextElement &&
                  (_ = _.concat((0, _._)(_.reference.contextElement)))),
              (_ = _.filter((_) => {
                var _;
                return (
                  _ !==
                  ((_ = _.defaultView) == null ? void 0 : _.visualViewport)
                );
              })),
              _.forEach((_) => {
                _.addEventListener("scroll", _, {
                  passive: !0,
                });
              }),
              () => {
                _ &&
                  (_.removeEventListener("keydown", _ ? _ : _, _),
                  _.removeEventListener("compositionstart", _),
                  _.removeEventListener("compositionend", _)),
                  _ && _.removeEventListener(_, _ ? _ : _, _),
                  _.forEach((_) => {
                    _.removeEventListener("scroll", _);
                  }),
                  window.clearTimeout(_);
              }
            );
          }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
            _.useEffect(() => {
              _.current = !1;
            }, [_, _]);
          const _ = _.useMemo(
              () => ({
                onKeyDown: _,
                ...(_ && {
                  [_[_]]: (_) => {
                    _(!1, _.nativeEvent, "reference-press");
                  },
                  ...(_ !== "click" && {
                    onClick(_) {
                      _(!1, _.nativeEvent, "reference-press");
                    },
                  }),
                }),
              }),
              [_, _, _, _],
            ),
            _ = _.useMemo(
              () => ({
                onKeyDown: _,
                onMouseDown() {
                  _.current = !0;
                },
                onMouseUp() {
                  _.current = !0;
                },
                [_[_]]: () => {
                  _.current = !0;
                },
              }),
              [_, _],
            );
          return _.useMemo(
            () =>
              _
                ? {
                    reference: _,
                    floating: _,
                  }
                : {},
            [_, _, _],
          );
        }
        function _(_) {
          const { open: _ = !1, onOpenChange: _, elements: _ } = _,
            _ = _(),
            _ = _.useRef({}),
            [_] = _.useState(() => _()),
            _ = _() != null,
            [_, _] = _.useState(_.reference),
            _ = _((_, _, _) => {
              (_.current.openEvent = _ ? _ : void 0),
                _.emit("openchange", {
                  open: _,
                  event: _,
                  reason: _,
                  nested: _,
                }),
                _?.(_, _, _);
            }),
            _ = _.useMemo(
              () => ({
                setPositionReference: _,
              }),
              [],
            ),
            _ = _.useMemo(
              () => ({
                reference: _ || _.reference || null,
                floating: _.floating || null,
                domReference: _.reference,
              }),
              [_, _.reference, _.floating],
            );
          return _.useMemo(
            () => ({
              dataRef: _,
              open: _,
              onOpenChange: _,
              elements: _,
              events: _,
              floatingId: _,
              refs: _,
            }),
            [_, _, _, _, _, _],
          );
        }
        function _(_) {
          _ === void 0 && (_ = {});
          const { nodeId: _ } = _,
            _ = _({
              ..._,
              elements: {
                reference: null,
                floating: null,
                ..._.elements,
              },
            }),
            _ = _.rootContext || _,
            _ = _.elements,
            [_, _] = _.useState(null),
            [_, _] = _.useState(null),
            _ = _?.domReference || _,
            _ = _.useRef(null),
            _ = _();
          _(() => {
            _ && (_.current = _);
          }, [_]);
          const _ = (0, _._)({
              ..._,
              elements: {
                ..._,
                ...(_ && {
                  reference: _,
                }),
              },
            }),
            _ = _.useCallback(
              (_) => {
                const _ = (0, _._)(_)
                  ? {
                      getBoundingClientRect: () => _.getBoundingClientRect(),
                      contextElement: _,
                    }
                  : _;
                _(_), _.refs.setReference(_);
              },
              [_.refs],
            ),
            _ = _.useCallback(
              (_) => {
                ((0, _._)(_) || _ === null) && ((_.current = _), _(_)),
                  ((0, _._)(_.refs.reference.current) ||
                    _.refs.reference.current === null ||
                    (_ !== null && !(0, _._)(_))) &&
                    _.refs.setReference(_);
              },
              [_.refs],
            ),
            _ = _.useMemo(
              () => ({
                ..._.refs,
                setReference: _,
                setPositionReference: _,
                domReference: _,
              }),
              [_.refs, _, _],
            ),
            _ = _.useMemo(
              () => ({
                ..._.elements,
                domReference: _,
              }),
              [_.elements, _],
            ),
            _ = _.useMemo(
              () => ({
                ..._,
                ..._,
                refs: _,
                elements: _,
                nodeId: _,
              }),
              [_, _, _, _, _],
            );
          return (
            _(() => {
              _.dataRef.current.floatingContext = _;
              const _ = _?.nodesRef.current.find((_) => _._ === _);
              _ && (_.context = _);
            }),
            _.useMemo(
              () => ({
                ..._,
                context: _,
                refs: _,
                elements: _,
              }),
              [_, _, _, _],
            )
          );
        }
        function _(_, _) {
          _ === void 0 && (_ = {});
          const {
              open: _,
              onOpenChange: _,
              events: _,
              dataRef: _,
              elements: _,
            } = _,
            { enabled: _ = !0, visibleOnly: _ = !0 } = _,
            _ = _.useRef(!1),
            _ = _.useRef(-1),
            _ = _.useRef(!0);
          _.useEffect(() => {
            if (!_) return;
            const _ = (0, _._)(_.domReference);
            function _() {
              !_ &&
                (0, _._)(_.domReference) &&
                _.domReference === _(_(_.domReference)) &&
                (_.current = !0);
            }
            function _() {
              _.current = !0;
            }
            return (
              _.addEventListener("blur", _),
              _.addEventListener("keydown", _, !0),
              () => {
                _.removeEventListener("blur", _),
                  _.removeEventListener("keydown", _, !0);
              }
            );
          }, [_.domReference, _, _]),
            _.useEffect(() => {
              if (!_) return;
              function _(_) {
                let { reason: _ } = _;
                (_ === "reference-press" || _ === "escape-key") &&
                  (_.current = !0);
              }
              return (
                _._("openchange", _),
                () => {
                  _.off("openchange", _);
                }
              );
            }, [_, _]),
            _.useEffect(
              () => () => {
                _(_);
              },
              [],
            );
          const _ = _.useMemo(
            () => ({
              onPointerDown(_) {
                _(_.nativeEvent) || (_.current = !1);
              },
              onMouseLeave() {
                _.current = !1;
              },
              onFocus(_) {
                if (_.current) return;
                const _ = _(_.nativeEvent);
                if (_ && (0, _._)(_))
                  try {
                    if (_() && _()) throw Error();
                    if (!_.matches(":focus-visible")) return;
                  } catch {
                    if (!_.current && !_(_)) return;
                  }
                _(!0, _.nativeEvent, "focus");
              },
              onBlur(_) {
                _.current = !1;
                const _ = _.relatedTarget,
                  _ = _.nativeEvent,
                  _ =
                    (0, _._)(_) &&
                    _.hasAttribute(_("focus-guard")) &&
                    _.getAttribute("data-type") === "outside";
                _.current = window.setTimeout(() => {
                  var _;
                  const _ = _(
                    _.domReference ? _.domReference.ownerDocument : document,
                  );
                  (!_ && _ === _.domReference) ||
                    _(
                      (_ = _.current.floatingContext) == null
                        ? void 0
                        : _.refs.floating.current,
                      _,
                    ) ||
                    _(_.domReference, _) ||
                    _ ||
                    _(!1, _, "focus");
                });
              },
            }),
            [_, _.domReference, _, _],
          );
          return _.useMemo(
            () =>
              _
                ? {
                    reference: _,
                  }
                : {},
            [_, _],
          );
        }
        const _ = "active",
          _ = "selected";
        function _(_, _, _) {
          const _ = new Map(),
            _ = _ === "item";
          let _ = _;
          if (_ && _) {
            const { [_]: _, [_]: _, ..._ } = _;
            _ = _;
          }
          return {
            ...(_ === "floating" && {
              tabIndex: -1,
              [_]: "",
            }),
            ..._,
            ..._.map((_) => {
              const _ = _ ? _[_] : null;
              return typeof _ == "function" ? (_ ? _(_) : null) : _;
            })
              .concat(_)
              .reduce(
                (_, _) => (
                  _ &&
                    Object.entries(_).forEach((_) => {
                      let [_, _] = _;
                      if (!(_ && [_, _].includes(_)))
                        if (_.indexOf("on") === 0) {
                          if (
                            (_.has(_) || _.set(_, []), typeof _ == "function")
                          ) {
                            var _;
                            (_ = _.get(_)) == null || _.push(_),
                              (_[_] = function () {
                                for (
                                  var _,
                                    _ = arguments.length,
                                    _ = new Array(_),
                                    _ = 0;
                                  _ < _;
                                  _++
                                )
                                  _[_] = arguments[_];
                                return (_ = _.get(_)) == null
                                  ? void 0
                                  : _.map((_) => _(..._)).find(
                                      (_) => _ !== void 0,
                                    );
                              });
                          }
                        } else _[_] = _;
                    }),
                  _
                ),
                {},
              ),
          };
        }
        function _(_) {
          _ === void 0 && (_ = []);
          const _ = _.map((_) => _?.reference),
            _ = _.map((_) => _?.floating),
            _ = _.map((_) => _?.item),
            _ = _.useCallback((_) => _(_, _, "reference"), _),
            _ = _.useCallback((_) => _(_, _, "floating"), _),
            _ = _.useCallback((_) => _(_, _, "item"), _);
          return _.useMemo(
            () => ({
              getReferenceProps: _,
              getFloatingProps: _,
              getItemProps: _,
            }),
            [_, _, _],
          );
        }
        const _ = "Escape";
        function _(_, _, _) {
          switch (_) {
            case "vertical":
              return _;
            case "horizontal":
              return _;
            default:
              return _ || _;
          }
        }
        function _(_, _) {
          return _(_, _ === _ || _ === _, _ === _ || _ === _);
        }
        function _(_, _, _) {
          return (
            _(_, _ === _, _ ? _ === _ : _ === _) ||
            _ === "Enter" ||
            _ === " " ||
            _ === ""
          );
        }
        function _(_, _, _) {
          return _(_, _ ? _ === _ : _ === _, _ === _);
        }
        function _(_, _, _, _) {
          const _ = _ ? _ === _ : _ === _,
            _ = _ === _;
          return _ === "both" || (_ === "horizontal" && _ && _ > 1)
            ? _ === _
            : _(_, _, _);
        }
        function _(_, _) {
          const { open: _, onOpenChange: _, elements: _ } = _,
            {
              listRef: _,
              activeIndex: _,
              onNavigate: _ = () => {},
              enabled: _ = !0,
              selectedIndex: _ = null,
              allowEscape: _ = !1,
              loop: _ = !1,
              nested: _ = !1,
              rtl: _ = !1,
              virtual: _ = !1,
              focusItemOnOpen: _ = "auto",
              focusItemOnHover: _ = !0,
              openOnArrowKeyDown: _ = !0,
              disabledIndices: _ = void 0,
              orientation: _ = "vertical",
              cols: _ = 1,
              scrollItemIntoView: _ = !0,
              virtualItemRef: _,
              itemSizes: _,
              dense: _ = !1,
            } = _,
            _ = _(_.floating),
            _ = _(_),
            _ = _(),
            _ = _();
          _(() => {
            _.dataRef.current.orientation = _;
          }, [_, _]);
          const _ = _(() => {
              _(_.current === -1 ? null : _.current);
            }),
            _ = isTypeableCombobox(_.domReference),
            _ = React.useRef(_),
            _ = React.useRef(_ ?? -1),
            _ = React.useRef(null),
            _ = React.useRef(!0),
            _ = React.useRef(_),
            _ = React.useRef(!!_.floating),
            _ = React.useRef(_),
            _ = React.useRef(!1),
            _ = React.useRef(!1),
            _ = _(_),
            _ = _(_),
            _ = _(_),
            _ = _(_),
            [_, _] = React.useState(),
            [_, _] = React.useState(),
            _ = _(() => {
              function _(_) {
                _
                  ? (_(_._),
                    _?.events.emit("virtualfocus", _),
                    _ && (_.current = _))
                  : _(_, {
                      sync: _.current,
                      preventScroll: !0,
                    });
              }
              const _ = _.current[_.current];
              _ && _(_),
                (_.current ? (_) => _() : requestAnimationFrame)(() => {
                  const _ = _.current[_.current] || _;
                  if (!_) return;
                  _ || _(_);
                  const _ = _.current;
                  _ &&
                    _ &&
                    (_.current || !_.current) &&
                    (_.scrollIntoView == null ||
                      _.scrollIntoView(
                        typeof _ == "boolean"
                          ? {
                              block: "nearest",
                              inline: "nearest",
                            }
                          : _,
                      ));
                });
            });
          _(() => {
            _ &&
              (_ && _.floating
                ? _.current &&
                  _ != null &&
                  ((_.current = !0), (_.current = _), _())
                : _.current && ((_.current = -1), _.current()));
          }, [_, _, _.floating, _, _]),
            _(() => {
              if (_ && _ && _.floating)
                if (_ == null) {
                  if (((_.current = !1), _.current != null)) return;
                  if (
                    (_.current && ((_.current = -1), _()),
                    (!_.current || !_.current) &&
                      _.current &&
                      (_.current != null ||
                        (_.current === !0 && _.current == null)))
                  ) {
                    let _ = 0;
                    const _ = () => {
                      _.current[0] == null
                        ? (_ < 2 &&
                            (_ ? requestAnimationFrame : queueMicrotask)(_),
                          _++)
                        : ((_.current =
                            _.current == null || _(_.current, _, _) || _
                              ? _(_, _.current)
                              : _(_, _.current)),
                          (_.current = null),
                          _());
                    };
                    _();
                  }
                } else _(_, _) || ((_.current = _), _(), (_.current = !1));
            }, [_, _, _.floating, _, _, _, _, _, _, _, _, _]),
            _(() => {
              var _;
              if (!_ || _.floating || !_ || _ || !_.current) return;
              const _ = _.nodesRef.current,
                _ =
                  (_ = _.find((_) => _._ === _)) == null ||
                  (_ = _.context) == null
                    ? void 0
                    : _.elements.floating,
                _ = activeElement(getDocument(_.floating)),
                _ = _.some(
                  (_) => _.context && contains(_.context.elements.floating, _),
                );
              _ &&
                !_ &&
                _.current &&
                _.focus({
                  preventScroll: !0,
                });
            }, [_, _.floating, _, _, _]),
            _(() => {
              if (!_ || !_ || !_ || _) return;
              function _(_) {
                _(_._), _ && (_.current = _);
              }
              return (
                _.events._("virtualfocus", _),
                () => {
                  _.events.off("virtualfocus", _);
                }
              );
            }, [_, _, _, _, _]),
            _(() => {
              (_.current = _), (_.current = _), (_.current = !!_.floating);
            }),
            _(() => {
              _ || (_.current = null);
            }, [_]);
          const _ = _ != null,
            _ = React.useMemo(() => {
              function _(_) {
                if (!_) return;
                const _ = _.current.indexOf(_);
                _ !== -1 && _.current !== _ && ((_.current = _), _());
              }
              return {
                onFocus(_) {
                  let { currentTarget: _ } = _;
                  (_.current = !0), _(_);
                },
                onClick: (_) => {
                  let { currentTarget: _ } = _;
                  return _.focus({
                    preventScroll: !0,
                  });
                },
                ...(_ && {
                  onMouseMove(_) {
                    let { currentTarget: _ } = _;
                    (_.current = !0), (_.current = !1), _(_);
                  },
                  onPointerLeave(_) {
                    let { pointerType: _ } = _;
                    if (
                      !(!_.current || _ === "touch") &&
                      ((_.current = !0), (_.current = -1), _(), !_)
                    ) {
                      var _;
                      (_ = _.current) == null ||
                        _.focus({
                          preventScroll: !0,
                        });
                    }
                  },
                }),
              };
            }, [_, _, _, _, _, _]),
            _ = _((_) => {
              if (
                ((_.current = !1),
                (_.current = !0),
                _.which === 229 ||
                  (!_.current && _.currentTarget === _.current))
              )
                return;
              if (_ && _(_.key, _, _, _)) {
                stopEvent(_),
                  _(!1, _.nativeEvent, "list-navigation"),
                  isHTMLElement(_.domReference) &&
                    (_
                      ? _?.events.emit("virtualfocus", _.domReference)
                      : _.domReference.focus());
                return;
              }
              const _ = _.current,
                _ = _(_, _),
                _ = _(_, _);
              if (
                (_ ||
                  (_.key === "Home" && (stopEvent(_), (_.current = _), _()),
                  _.key === "End" && (stopEvent(_), (_.current = _), _())),
                _ > 1)
              ) {
                const _ =
                    _ ||
                    Array.from(
                      {
                        length: _.current.length,
                      },
                      () => ({
                        width: 1,
                        height: 1,
                      }),
                    ),
                  _ = _(_, _, _),
                  _ = _.findIndex((_) => _ != null && !_(_.current, _, _)),
                  _ = _.reduce(
                    (_, _, _) => (_ != null && !_(_.current, _, _) ? _ : _),
                    -1,
                  ),
                  _ =
                    _[
                      _(
                        {
                          current: _.map((_) =>
                            _ != null ? _.current[_] : null,
                          ),
                        },
                        {
                          event: _,
                          orientation: _,
                          loop: _,
                          rtl: _,
                          cols: _,
                          disabledIndices: _(
                            [
                              ...(_ ||
                                _.current.map((_, _) =>
                                  _(_.current, _) ? _ : void 0,
                                )),
                              void 0,
                            ],
                            _,
                          ),
                          minIndex: _,
                          maxIndex: _,
                          prevIndex: _(
                            _.current > _ ? _ : _.current,
                            _,
                            _,
                            _,
                            _.key === _
                              ? "bl"
                              : _.key === (_ ? _ : _)
                                ? "tr"
                                : "tl",
                          ),
                          stopEvent: !0,
                        },
                      )
                    ];
                if ((_ != null && ((_.current = _), _()), _ === "both")) return;
              }
              if (_(_.key, _)) {
                if (
                  (stopEvent(_),
                  _ &&
                    !_ &&
                    activeElement(_.currentTarget.ownerDocument) ===
                      _.currentTarget)
                ) {
                  (_.current = _(_.key, _, _) ? _ : _), _();
                  return;
                }
                _(_.key, _, _)
                  ? _
                    ? (_.current =
                        _ >= _
                          ? _ && _ !== _.current.length
                            ? -1
                            : _
                          : _(_, {
                              startingIndex: _,
                              disabledIndices: _,
                            }))
                    : (_.current = Math.min(
                        _,
                        _(_, {
                          startingIndex: _,
                          disabledIndices: _,
                        }),
                      ))
                  : _
                    ? (_.current =
                        _ <= _
                          ? _ && _ !== -1
                            ? _.current.length
                            : _
                          : _(_, {
                              startingIndex: _,
                              decrement: !0,
                              disabledIndices: _,
                            }))
                    : (_.current = Math.max(
                        _,
                        _(_, {
                          startingIndex: _,
                          decrement: !0,
                          disabledIndices: _,
                        }),
                      )),
                  _(_, _.current) && (_.current = -1),
                  _();
              }
            }),
            _ = React.useMemo(
              () =>
                _ &&
                _ &&
                _ && {
                  "aria-activedescendant": _ || _,
                },
              [_, _, _, _, _],
            ),
            _ = React.useMemo(
              () => ({
                "aria-orientation": _ === "both" ? void 0 : _,
                ...(_ ? {} : _),
                onKeyDown: _,
                onPointerMove() {
                  _.current = !0;
                },
              }),
              [_, _, _, _],
            ),
            _ = React.useMemo(() => {
              function _(_) {
                _ === "auto" &&
                  isVirtualClick(_.nativeEvent) &&
                  (_.current = !0);
              }
              function _(_) {
                (_.current = _),
                  _ === "auto" &&
                    isVirtualPointerEvent(_.nativeEvent) &&
                    (_.current = !0);
              }
              return {
                ..._,
                onKeyDown(_) {
                  var _;
                  _.current = !1;
                  const _ = _.key.startsWith("Arrow"),
                    _ = ["Home", "End"].includes(_.key),
                    _ = _ || _,
                    _ =
                      _ == null ||
                      (_ = _.nodesRef.current.find((_) => _._ === _)) == null ||
                      (_ = _.context) == null ||
                      (_ = _.dataRef) == null
                        ? void 0
                        : _.current.orientation,
                    _ = _(_.key, _, _),
                    _ = _(_.key, _, _, _),
                    _ = _(_.key, _, _),
                    _ = _(_.key, _),
                    _ = (_ ? _ : _) || _.key === "Enter" || _.key.trim() === "";
                  if (_ && _) {
                    const _ = _?.nodesRef.current.find(
                        (_) => _.parentId == null,
                      ),
                      _ = _ && _ ? _(_.nodesRef.current, _._) : null;
                    if (_ && _ && _) {
                      const _ = new KeyboardEvent("keydown", {
                        key: _.key,
                        bubbles: !0,
                      });
                      if (_ || _) {
                        var _, _;
                        const _ =
                            ((_ = _.context) == null
                              ? void 0
                              : _.elements.domReference) === _.currentTarget,
                          _ =
                            _ && !_
                              ? (_ = _.context) == null
                                ? void 0
                                : _.elements.domReference
                              : _
                                ? _.current.find((_) => _?._ === _)
                                : null;
                        _ && (stopEvent(_), _.dispatchEvent(_), _(void 0));
                      }
                      if (
                        (_ || _) &&
                        _.context &&
                        _.context.open &&
                        _.parentId &&
                        _.currentTarget !== _.context.elements.domReference
                      ) {
                        var _;
                        stopEvent(_),
                          (_ = _.context.elements.domReference) == null ||
                            _.dispatchEvent(_);
                        return;
                      }
                    }
                    return _(_);
                  }
                  if (!(!_ && !_ && _)) {
                    if (_) {
                      const _ = _(_.key, _);
                      _.current = _ && _ ? null : _.key;
                    }
                    if (_) {
                      _ &&
                        (stopEvent(_),
                        _
                          ? ((_.current = _(_, _.current)), _())
                          : _(!0, _.nativeEvent, "list-navigation"));
                      return;
                    }
                    _ &&
                      (_ != null && (_.current = _),
                      stopEvent(_),
                      !_ && _ ? _(!0, _.nativeEvent, "list-navigation") : _(_),
                      _ && _());
                  }
                },
                onFocus() {
                  _ && !_ && ((_.current = -1), _());
                },
                onPointerDown: _,
                onPointerEnter: _,
                onMouseDown: _,
                onClick: _,
              };
            }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]);
          return React.useMemo(
            () =>
              _
                ? {
                    reference: _,
                    floating: _,
                    item: _,
                  }
                : {},
            [_, _, _, _],
          );
        }
        const _ = new Map([
          ["select", "listbox"],
          ["combobox", "listbox"],
          ["label", !1],
        ]);
        function _(_, _) {
          var _;
          _ === void 0 && (_ = {});
          const { open: _, floatingId: _ } = _,
            { enabled: _ = !0, role: _ = "dialog" } = _,
            _ = (_ = _.get(_)) != null ? _ : _,
            _ = _(),
            _ = _() != null,
            _ = React.useMemo(
              () =>
                _ === "tooltip" || _ === "label"
                  ? {
                      ["aria-" +
                        (_ === "label" ? "labelledby" : "describedby")]: _
                        ? _
                        : void 0,
                    }
                  : {
                      "aria-expanded": _ ? "true" : "false",
                      "aria-haspopup": _ === "alertdialog" ? "dialog" : _,
                      "aria-controls": _ ? _ : void 0,
                      ...(_ === "listbox" && {
                        role: "combobox",
                      }),
                      ...(_ === "menu" && {
                        _: _,
                      }),
                      ...(_ === "menu" &&
                        _ && {
                          role: "menuitem",
                        }),
                      ...(_ === "select" && {
                        "aria-autocomplete": "none",
                      }),
                      ...(_ === "combobox" && {
                        "aria-autocomplete": "list",
                      }),
                    },
              [_, _, _, _, _, _],
            ),
            _ = React.useMemo(() => {
              const _ = {
                _: _,
                ...(_ && {
                  role: _,
                }),
              };
              return _ === "tooltip" || _ === "label"
                ? _
                : {
                    ..._,
                    ...(_ === "menu" && {
                      "aria-labelledby": _,
                    }),
                  };
            }, [_, _, _, _]),
            _ = React.useCallback(
              (_) => {
                let { active: _, selected: _ } = _;
                const _ = {
                  role: "option",
                  ...(_ && {
                    _: _ + "-option",
                  }),
                };
                switch (_) {
                  case "select":
                    return {
                      ..._,
                      "aria-selected": _ && _,
                    };
                  case "combobox":
                    return {
                      ..._,
                      ...(_ && {
                        "aria-selected": !0,
                      }),
                    };
                }
                return {};
              },
              [_, _],
            );
          return React.useMemo(
            () =>
              _
                ? {
                    reference: _,
                    floating: _,
                    item: _,
                  }
                : {},
            [_, _, _, _],
          );
        }
        const _ = (_) =>
          _.replace(
            /[A-Z]+(?![a-z])|[A-Z]/g,
            (_, _) => (_ ? "-" : "") + _.toLowerCase(),
          );
        function _(_, _) {
          return typeof _ == "function" ? _(_) : _;
        }
        function _(_, _) {
          const [_, _] = React.useState(_);
          return (
            _ && !_ && _(!0),
            React.useEffect(() => {
              if (!_ && _) {
                const _ = setTimeout(() => _(!1), _);
                return () => clearTimeout(_);
              }
            }, [_, _, _]),
            _
          );
        }
        function _(_, _) {
          _ === void 0 && (_ = {});
          const {
              open: _,
              elements: { floating: _ },
            } = _,
            { duration: _ = 250 } = _,
            _ = (typeof _ == "number" ? _ : _.close) || 0,
            [_, _] = React.useState("unmounted"),
            _ = _(_, _);
          return (
            !_ && _ === "close" && _("unmounted"),
            _(() => {
              if (_) {
                if (_) {
                  _("initial");
                  const _ = requestAnimationFrame(() => {
                    _("open");
                  });
                  return () => {
                    cancelAnimationFrame(_);
                  };
                }
                _("close");
              }
            }, [_, _]),
            {
              isMounted: _,
              status: _,
            }
          );
        }
        function _(_, _) {
          _ === void 0 && (_ = {});
          const {
              initial: _ = {
                opacity: 0,
              },
              open: _,
              close: _,
              common: _,
              duration: _ = 250,
            } = _,
            _ = _.placement,
            _ = _.split("-")[0],
            _ = React.useMemo(
              () => ({
                side: _,
                placement: _,
              }),
              [_, _],
            ),
            _ = typeof _ == "number",
            _ = (_ ? _ : _.open) || 0,
            _ = (_ ? _ : _.close) || 0,
            [_, _] = React.useState(() => ({
              ..._(_, _),
              ..._(_, _),
            })),
            { isMounted: _, status: _ } = _(_, {
              duration: _,
            }),
            _ = _(_),
            _ = _(_),
            _ = _(_),
            _ = _(_);
          return (
            _(() => {
              const _ = _(_.current, _),
                _ = _(_.current, _),
                _ = _(_.current, _),
                _ =
                  _(_.current, _) ||
                  Object.keys(_).reduce((_, _) => ((_[_] = ""), _), {});
              if (
                (_ === "initial" &&
                  _((_) => ({
                    transitionProperty: _.transitionProperty,
                    ..._,
                    ..._,
                  })),
                _ === "open" &&
                  _({
                    transitionProperty: Object.keys(_).map(_).join(","),
                    transitionDuration: _ + "ms",
                    ..._,
                    ..._,
                  }),
                _ === "close")
              ) {
                const _ = _ || _;
                _({
                  transitionProperty: Object.keys(_).map(_).join(","),
                  transitionDuration: _ + "ms",
                  ..._,
                  ..._,
                });
              }
            }, [_, _, _, _, _, _, _, _]),
            {
              isMounted: _,
              styles: _,
            }
          );
        }
        function _(_, _) {
          var _;
          const { open: _, dataRef: _ } = _,
            {
              listRef: _,
              activeIndex: _,
              onMatch: _,
              onTypingChange: _,
              enabled: _ = !0,
              findMatch: _ = null,
              resetMs: _ = 750,
              ignoreKeys: _ = [],
              selectedIndex: _ = null,
            } = _,
            _ = React.useRef(-1),
            _ = React.useRef(""),
            _ = React.useRef((_ = _ ?? _) != null ? _ : -1),
            _ = React.useRef(null),
            _ = _(_),
            _ = _(_),
            _ = _(_),
            _ = _(_);
          _(() => {
            _ && (_(_), (_.current = null), (_.current = ""));
          }, [_]),
            _(() => {
              if (_ && _.current === "") {
                var _;
                _.current = (_ = _ ?? _) != null ? _ : -1;
              }
            }, [_, _, _]);
          const _ = _((_) => {
              _
                ? _.current.typing || ((_.current.typing = _), _(_))
                : _.current.typing && ((_.current.typing = _), _(_));
            }),
            _ = _((_) => {
              function _(_, _, _) {
                const _ = _.current
                  ? _.current(_, _)
                  : _.find(
                      (_) =>
                        _?.toLocaleLowerCase().indexOf(
                          _.toLocaleLowerCase(),
                        ) === 0,
                    );
                return _ ? _.indexOf(_) : -1;
              }
              const _ = _.current;
              if (
                (_.current.length > 0 &&
                  _.current[0] !== " " &&
                  (_(_, _, _.current) === -1
                    ? _(!1)
                    : _.key === " " && stopEvent(_)),
                _ == null ||
                  _.current.includes(_.key) ||
                  _.key.length !== 1 ||
                  _.ctrlKey ||
                  _.metaKey ||
                  _.altKey)
              )
                return;
              _ && _.key !== " " && (stopEvent(_), _(!0)),
                _.every((_) => {
                  var _, _;
                  return _
                    ? ((_ = _[0]) == null ? void 0 : _.toLocaleLowerCase()) !==
                        ((_ = _[1]) == null ? void 0 : _.toLocaleLowerCase())
                    : !0;
                }) &&
                  _.current === _.key &&
                  ((_.current = ""), (_.current = _.current)),
                (_.current += _.key),
                _(_),
                (_.current = window.setTimeout(() => {
                  (_.current = ""), (_.current = _.current), _(!1);
                }, _));
              const _ = _.current,
                _ = _(
                  _,
                  [..._.slice((_ || 0) + 1), ..._.slice(0, (_ || 0) + 1)],
                  _.current,
                );
              _ !== -1
                ? (_(_), (_.current = _))
                : _.key !== " " && ((_.current = ""), _(!1));
            }),
            _ = React.useMemo(
              () => ({
                onKeyDown: _,
              }),
              [_],
            ),
            _ = React.useMemo(
              () => ({
                onKeyDown: _,
                onKeyUp(_) {
                  _.key === " " && _(!1);
                },
              }),
              [_, _],
            );
          return React.useMemo(
            () =>
              _
                ? {
                    reference: _,
                    floating: _,
                  }
                : {},
            [_, _, _],
          );
        }
        function _(_, _) {
          return {
            ..._,
            rects: {
              ..._.rects,
              floating: {
                ..._.rects.floating,
                height: _,
              },
            },
          };
        }
        const _ = (_) => ({
          name: "inner",
          options: _,
          async _(_) {
            const {
                listRef: _,
                overflowRef: _,
                onFallbackChange: _,
                offset: _ = 0,
                index: _ = 0,
                minItemsVisible: _ = 4,
                referenceOverflowThreshold: _ = 0,
                scrollRef: _,
                ..._
              } = evaluate(_, _),
              {
                rects: _,
                elements: { floating: _ },
              } = _,
              _ = _.current[_],
              _ = _?.current || _,
              _ = _.clientTop || _.clientTop,
              _ = _.clientTop !== 0,
              _ = _.clientTop !== 0,
              _ = _ === _;
            if (!_) return {};
            const _ = {
                ..._,
                ...(await offset(
                  -_.offsetTop -
                    _.clientTop -
                    _.reference.height / 2 -
                    _.offsetHeight / 2 -
                    _,
                )._(_)),
              },
              _ = await detectOverflow(
                _(_, _.scrollHeight + _ + _.clientTop),
                _,
              ),
              _ = await detectOverflow(_, {
                ..._,
                elementContext: "reference",
              }),
              _ = max(0, _.top),
              _ = _._ + _,
              _ = (_.scrollHeight > _.clientHeight ? (_) => _ : round)(
                max(
                  0,
                  _.scrollHeight +
                    ((_ && _) || _ ? _ * 2 : 0) -
                    _ -
                    max(0, _.bottom),
                ),
              );
            if (((_.style.maxHeight = _ + "px"), (_.scrollTop = _), _)) {
              const _ =
                _.offsetHeight <
                  _.offsetHeight * min(_, _.current.length) - 1 ||
                _.top >= -_ ||
                _.bottom >= -_;
              ReactDOM.flushSync(() => _(_));
            }
            return (
              _ &&
                (_.current = await detectOverflow(
                  _(
                    {
                      ..._,
                      _: _,
                    },
                    _.offsetHeight + _ + _.clientTop,
                  ),
                  _,
                )),
              {
                _: _,
              }
            );
          },
        });
        function _(_, _) {
          const { open: _, elements: _ } = _,
            { enabled: _ = !0, overflowRef: _, scrollRef: _, onChange: _ } = _,
            _ = _(_),
            _ = React.useRef(!1),
            _ = React.useRef(null),
            _ = React.useRef(null);
          React.useEffect(() => {
            if (!_) return;
            function _(_) {
              if (_.ctrlKey || !_ || _.current == null) return;
              const _ = _.deltaY,
                _ = _.current.top >= -0.5,
                _ = _.current.bottom >= -0.5,
                _ = _.scrollHeight - _.clientHeight,
                _ = _ < 0 ? -1 : 1,
                _ = _ < 0 ? "max" : "min";
              _.scrollHeight <= _.clientHeight ||
                ((!_ && _ > 0) || (!_ && _ < 0)
                  ? (_.preventDefault(),
                    ReactDOM.flushSync(() => {
                      _((_) => _ + Math[_](_, _ * _));
                    }))
                  : /firefox/i.test(getUserAgent()) && (_.scrollTop += _));
            }
            const _ = _?.current || _.floating;
            if (_ && _)
              return (
                _.addEventListener("wheel", _),
                requestAnimationFrame(() => {
                  (_.current = _.scrollTop),
                    _.current != null &&
                      (_.current = {
                        ..._.current,
                      });
                }),
                () => {
                  (_.current = null),
                    (_.current = null),
                    _.removeEventListener("wheel", _);
                }
              );
          }, [_, _, _.floating, _, _, _]);
          const _ = React.useMemo(
            () => ({
              onKeyDown() {
                _.current = !0;
              },
              onWheel() {
                _.current = !1;
              },
              onPointerMove() {
                _.current = !1;
              },
              onScroll() {
                const _ = _?.current || _.floating;
                if (!(!_.current || !_ || !_.current)) {
                  if (_.current !== null) {
                    const _ = _.scrollTop - _.current;
                    ((_.current.bottom < -0.5 && _ < -1) ||
                      (_.current.top < -0.5 && _ > 1)) &&
                      ReactDOM.flushSync(() => _((_) => _ + _));
                  }
                  requestAnimationFrame(() => {
                    _.current = _.scrollTop;
                  });
                }
              },
            }),
            [_.floating, _, _, _],
          );
          return React.useMemo(
            () =>
              _
                ? {
                    floating: _,
                  }
                : {},
            [_, _],
          );
        }
        function _(_, _) {
          const [_, _] = _;
          let _ = !1;
          const _ = _.length;
          for (let _ = 0, _ = _ - 1; _ < _; _ = _++) {
            const [_, _] = _[_] || [0, 0],
              [_, _] = _[_] || [0, 0];
            _ >= _ != _ >= _ &&
              _ <= ((_ - _) * (_ - _)) / (_ - _) + _ &&
              (_ = !_);
          }
          return _;
        }
        function _(_, _) {
          return (
            _[0] >= _._ &&
            _[0] <= _._ + _.width &&
            _[1] >= _._ &&
            _[1] <= _._ + _.height
          );
        }
        function _(_) {
          _ === void 0 && (_ = {});
          const {
            buffer: _ = 0.5,
            blockPointerEvents: _ = !1,
            requireIntent: _ = !0,
          } = _;
          let _,
            _ = !1,
            _ = null,
            _ = null,
            _ = performance.now();
          function _(_, _) {
            const _ = performance.now(),
              _ = _ - _;
            if (_ === null || _ === null || _ === 0)
              return (_ = _), (_ = _), (_ = _), null;
            const _ = _ - _,
              _ = _ - _,
              _ = Math.sqrt(_ * _ + _ * _) / _;
            return (_ = _), (_ = _), (_ = _), _;
          }
          const _ = (_) => {
            let {
              _: _,
              _: _,
              placement: _,
              elements: _,
              onClose: _,
              nodeId: _,
              tree: _,
            } = _;
            return function (_) {
              function _() {
                clearTimeout(_), _();
              }
              if (
                (clearTimeout(_),
                !_.domReference ||
                  !_.floating ||
                  _ == null ||
                  _ == null ||
                  _ == null)
              )
                return;
              const { clientX: _, clientY: _ } = _,
                _ = [_, _],
                _ = _(_),
                _ = _.type === "mouseleave",
                _ = _(_.floating, _),
                _ = _(_.domReference, _),
                _ = _.domReference.getBoundingClientRect(),
                _ = _.floating.getBoundingClientRect(),
                _ = _.split("-")[0],
                _ = _ > _.right - _.width / 2,
                _ = _ > _.bottom - _.height / 2,
                _ = _(_, _),
                _ = _.width > _.width,
                _ = _.height > _.height,
                _ = (_ ? _ : _).left,
                _ = (_ ? _ : _).right,
                _ = (_ ? _ : _).top,
                _ = (_ ? _ : _).bottom;
              if (_ && ((_ = !0), !_)) return;
              if ((_ && (_ = !1), _ && !_)) {
                _ = !0;
                return;
              }
              if (
                (_ &&
                  (0, _._)(_.relatedTarget) &&
                  _(_.floating, _.relatedTarget)) ||
                (_ &&
                  _(_.nodesRef.current, _).some((_) => {
                    let { context: _ } = _;
                    return _?.open;
                  }))
              )
                return;
              if (
                (_ === "top" && _ >= _.bottom - 1) ||
                (_ === "bottom" && _ <= _.top + 1) ||
                (_ === "left" && _ >= _.right - 1) ||
                (_ === "right" && _ <= _.left + 1)
              )
                return _();
              let _ = [];
              switch (_) {
                case "top":
                  _ = [
                    [_, _.top + 1],
                    [_, _.bottom - 1],
                    [_, _.bottom - 1],
                    [_, _.top + 1],
                  ];
                  break;
                case "bottom":
                  _ = [
                    [_, _.top + 1],
                    [_, _.bottom - 1],
                    [_, _.bottom - 1],
                    [_, _.top + 1],
                  ];
                  break;
                case "left":
                  _ = [
                    [_.right - 1, _],
                    [_.right - 1, _],
                    [_.left + 1, _],
                    [_.left + 1, _],
                  ];
                  break;
                case "right":
                  _ = [
                    [_.right - 1, _],
                    [_.right - 1, _],
                    [_.left + 1, _],
                    [_.left + 1, _],
                  ];
                  break;
              }
              function _(_) {
                let [_, _] = _;
                switch (_) {
                  case "top": {
                    const _ = [
                        _ ? _ + _ / 2 : _ ? _ + _ * 4 : _ - _ * 4,
                        _ + _ + 1,
                      ],
                      _ = [
                        _ ? _ - _ / 2 : _ ? _ + _ * 4 : _ - _ * 4,
                        _ + _ + 1,
                      ],
                      _ = [
                        [_.left, _ || _ ? _.bottom - _ : _.top],
                        [
                          _.right,
                          _ ? (_ ? _.bottom - _ : _.top) : _.bottom - _,
                        ],
                      ];
                    return [_, _, ..._];
                  }
                  case "bottom": {
                    const _ = [
                        _ ? _ + _ / 2 : _ ? _ + _ * 4 : _ - _ * 4,
                        _ - _,
                      ],
                      _ = [_ ? _ - _ / 2 : _ ? _ + _ * 4 : _ - _ * 4, _ - _],
                      _ = [
                        [_.left, _ || _ ? _.top + _ : _.bottom],
                        [_.right, _ ? (_ ? _.top + _ : _.bottom) : _.top + _],
                      ];
                    return [_, _, ..._];
                  }
                  case "left": {
                    const _ = [
                        _ + _ + 1,
                        _ ? _ + _ / 2 : _ ? _ + _ * 4 : _ - _ * 4,
                      ],
                      _ = [
                        _ + _ + 1,
                        _ ? _ - _ / 2 : _ ? _ + _ * 4 : _ - _ * 4,
                      ];
                    return [
                      ...[
                        [_ || _ ? _.right - _ : _.left, _.top],
                        [
                          _ ? (_ ? _.right - _ : _.left) : _.right - _,
                          _.bottom,
                        ],
                      ],
                      _,
                      _,
                    ];
                  }
                  case "right": {
                    const _ = [
                        _ - _,
                        _ ? _ + _ / 2 : _ ? _ + _ * 4 : _ - _ * 4,
                      ],
                      _ = [_ - _, _ ? _ - _ / 2 : _ ? _ + _ * 4 : _ - _ * 4],
                      _ = [
                        [_ || _ ? _.left + _ : _.right, _.top],
                        [_ ? (_ ? _.left + _ : _.right) : _.left + _, _.bottom],
                      ];
                    return [_, _, ..._];
                  }
                }
              }
              if (!_([_, _], _)) {
                if (_ && !_) return _();
                if (!_ && _) {
                  const _ = _(_.clientX, _.clientY);
                  if (_ !== null && _ < 0.1) return _();
                }
                _([_, _], _([_, _]))
                  ? !_ && _ && (_ = window.setTimeout(_, 40))
                  : _();
              }
            };
          };
          return (
            (_.__options = {
              blockPointerEvents: _,
            }),
            _
          );
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
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        function _() {
          return typeof window < "u";
        }
        function _(_) {
          return _(_) ? (_.nodeName || "").toLowerCase() : "#document";
        }
        function _(_) {
          var _;
          return (
            (_ == null || (_ = _.ownerDocument) == null
              ? void 0
              : _.defaultView) || window
          );
        }
        function _(_) {
          var _;
          return (_ =
            (_(_) ? _.ownerDocument : _.document) || window.document) == null
            ? void 0
            : _.documentElement;
        }
        function _(_) {
          return _() ? _ instanceof Node || _ instanceof _(_).Node : !1;
        }
        function _(_) {
          return _() ? _ instanceof Element || _ instanceof _(_).Element : !1;
        }
        function _(_) {
          return _()
            ? _ instanceof HTMLElement || _ instanceof _(_).HTMLElement
            : !1;
        }
        function _(_) {
          return !_() || typeof ShadowRoot > "u"
            ? !1
            : _ instanceof ShadowRoot || _ instanceof _(_).ShadowRoot;
        }
        function _(_) {
          const { overflow: _, overflowX: _, overflowY: _, display: _ } = _(_);
          return (
            /auto|scroll|overlay|hidden|clip/.test(_ + _ + _) &&
            _ !== "inline" &&
            _ !== "contents"
          );
        }
        function _(_) {
          return /^(table|td|th)$/.test(_(_));
        }
        function _(_) {
          try {
            if (_.matches(":popover-open")) return !0;
          } catch {}
          try {
            return _.matches(":modal");
          } catch {
            return !1;
          }
        }
        const _ = /transform|translate|scale|rotate|perspective|filter/,
          _ = /paint|layout|strict|content/,
          _ = (_) => !!_ && _ !== "none";
        let _;
        function _(_) {
          const _ = _(_) ? _(_) : _;
          return (
            _(_.transform) ||
            _(_.translate) ||
            _(_.scale) ||
            _(_.rotate) ||
            _(_.perspective) ||
            (!_() && (_(_.backdropFilter) || _(_.filter))) ||
            _.test(_.willChange || "") ||
            _.test(_.contain || "")
          );
        }
        function _(_) {
          let _ = _(_);
          for (; _(_) && !_(_); ) {
            if (_(_)) return _;
            if (_(_)) return null;
            _ = _(_);
          }
          return null;
        }
        function _() {
          return (
            _ == null &&
              (_ =
                typeof CSS < "u" &&
                CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")),
            _
          );
        }
        function _(_) {
          return /^(html|body|#document)$/.test(_(_));
        }
        function _(_) {
          return _(_).getComputedStyle(_);
        }
        function _(_) {
          return _(_)
            ? {
                scrollLeft: _.scrollLeft,
                scrollTop: _.scrollTop,
              }
            : {
                scrollLeft: _.scrollX,
                scrollTop: _.scrollY,
              };
        }
        function _(_) {
          if (_(_) === "html") return _;
          const _ = _.assignedSlot || _.parentNode || (_(_) && _.host) || _(_);
          return _(_) ? _.host : _;
        }
        function _(_) {
          const _ = _(_);
          return _(_) ? (_.ownerDocument || _).body : _(_) && _(_) ? _ : _(_);
        }
        function _(_, _, _) {
          var _;
          _ === void 0 && (_ = []), _ === void 0 && (_ = !0);
          const _ = _(_),
            _ = _ === ((_ = _.ownerDocument) == null ? void 0 : _.body),
            _ = _(_);
          if (_) {
            const _ = _(_);
            return _.concat(
              _,
              _.visualViewport || [],
              _(_) ? _ : [],
              _ && _ ? _(_) : [],
            );
          } else return _.concat(_, _(_, [], _));
        }
        function _(_) {
          return _.parent && Object.getPrototypeOf(_.parent)
            ? _.frameElement
            : null;
        }
      },
    },
  ]);
})();
