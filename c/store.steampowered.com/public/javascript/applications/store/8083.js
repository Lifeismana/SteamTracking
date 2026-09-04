"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [8083],
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
        var _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          let { reference: _, floating: _ } = _;
          const _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_),
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
          const _ = (0, _._)(_);
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
            } = (0, _._)(_, _),
            _ = (0, _._)(_),
            _ = _[_ ? (_ === "floating" ? "reference" : "floating") : _],
            _ = (0, _._)(
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
            _ = (0, _._)(
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
                    } = (0, _._)(_, _);
                  if ((_ = _.arrow) != null && _.alignmentOffset) return {};
                  const _ = (0, _._)(_),
                    _ = (0, _._)(_),
                    _ = (0, _._)(_) === _,
                    _ = await (_.isRTL == null ? void 0 : _.isRTL(_.floating)),
                    _ = _ || (_ || !_ ? [(0, _._)(_)] : (0, _._)(_)),
                    _ = _ !== "none";
                  !_ && _ && _.push(...(0, _._)(_, _, _, _));
                  const _ = [_, ..._],
                    _ = await _.detectOverflow(_, _),
                    _ = [];
                  let _ = ((_ = _.flip) == null ? void 0 : _.overflows) || [];
                  if ((_ && _.push(_[_]), _)) {
                    const _ = (0, _._)(_, _, _);
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
                      (!(_ === "alignment" ? _ !== (0, _._)(_) : !1) ||
                        _.every((_) =>
                          (0, _._)(_.placement) === _ ? _.overflows[0] > 0 : !0,
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
                                const _ = (0, _._)(_.placement);
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
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_) === "y",
            _ = _.has(_) ? -1 : 1,
            _ = _ && _ ? -1 : 1,
            _ = (0, _._)(_, _);
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
                    } = (0, _._)(_, _),
                    _ = {
                      _: _,
                      _: _,
                    },
                    _ = await _.detectOverflow(_, _),
                    _ = (0, _._)(_),
                    _ = (0, _._)(_);
                  let _ = _[_],
                    _ = _[_];
                  const _ = (_, _) =>
                    (0, _._)(
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
                    { apply: _ = () => {}, ..._ } = (0, _._)(_, _),
                    _ = await _.detectOverflow(_, _),
                    _ = (0, _._)(_),
                    _ = (0, _._)(_),
                    _ = (0, _._)(_) === "y",
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
                    _ = (0, _._)(_ - _[_], _),
                    _ = (0, _._)(_ - _[_], _),
                    _ = _.middlewareData.shift,
                    _ = !_;
                  let _ = _,
                    _ = _;
                  _ != null && _.enabled._ && (_ = _),
                    _ != null && _.enabled._ && (_ = _),
                    _ &&
                      !_ &&
                      (_
                        ? (_ = _ - 2 * (0, _._)(_.left, _.right))
                        : (_ = _ - 2 * (0, _._)(_.top, _.bottom))),
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
            _ = (0, _._)(_) !== _ || (0, _._)(_) !== _;
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
          if (!(0, _._)(_)) return (0, _._)(1);
          const _ = _.getBoundingClientRect(),
            { width: _, height: _, _: _ } = _(_);
          let _ = (_ ? (0, _._)(_.width) : _.width) / _,
            _ = (_ ? (0, _._)(_.height) : _.height) / _;
          return (
            (!_ || !Number.isFinite(_)) && (_ = 1),
            (!_ || !Number.isFinite(_)) && (_ = 1),
            {
              _: _,
              _: _,
            }
          );
        }
        const _ = (0, _._)(0);
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
          let _ = (0, _._)(1);
          _ && (_ ? (0, _._)(_) && (_ = _(_)) : (_ = _(_)));
          const _ = _(_, _, _) ? _(_) : (0, _._)(0);
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
          return (0, _._)({
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
            _ = (0, _._)(1);
          const _ = (0, _._)(0),
            _ = (0, _._)(_);
          if (
            (_ || !_) &&
            (((0, _._)(_) !== "body" || (0, _._)(_)) && (_ = (0, _._)(_)), _)
          ) {
            const _ = _(_);
            (_ = _(_)), (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
          }
          const _ = _ && !_ && !_ ? _(_, _) : (0, _._)(0);
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
            _ = (0, _._)(
              _.scrollWidth,
              _.clientWidth,
              _.scrollWidth,
              _.clientWidth,
            ),
            _ = (0, _._)(
              _.scrollHeight,
              _.clientHeight,
              _.scrollHeight,
              _.clientHeight,
            );
          let _ = -_.scrollLeft + _(_);
          const _ = -_.scrollTop;
          return (
            (0, _._)(_).direction === "rtl" &&
              (_ += (0, _._)(_.clientWidth, _.clientWidth) - _),
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
          return (0, _._)(_);
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
            (_ = (0, _._)(_.top, _)),
              (_ = (0, _._)(_.right, _)),
              (_ = (0, _._)(_.bottom, _)),
              (_ = (0, _._)(_.left, _));
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
          const _ = (0, _._)(0);
          if (
            (_ || !_) &&
            (((0, _._)(_) !== "body" || (0, _._)(_)) && (_ = (0, _._)(_)), _)
          ) {
            const _ = _(_, !0, _, _);
            (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
          }
          !_ && _ && (_._ = _(_));
          const _ = _ && !_ && !_ ? _(_, _) : (0, _._)(0),
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
            const _ = (0, _._)(_),
              _ = (0, _._)(_.clientWidth - (_ + _)),
              _ = (0, _._)(_.clientHeight - (_ + _)),
              _ = (0, _._)(_),
              _ = {
                rootMargin: -_ + "px " + -_ + "px " + -_ + "px " + -_ + "px",
                threshold: (0, _._)(0, (0, _._)(1, _)) || 1,
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
            _,
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
      },
    },
  ]);
})();
