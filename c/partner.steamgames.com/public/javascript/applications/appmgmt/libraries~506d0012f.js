"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [4568],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return _ ? (_(_) ? _.createElement(_, _) : _) : null;
        }
        function _(_) {
          return _(_) || typeof _ == "function" || _(_);
        }
        function _(_) {
          return (
            typeof _ == "function" &&
            (() => {
              const _ = Object.getPrototypeOf(_);
              return _.prototype && _.prototype.isReactComponent;
            })()
          );
        }
        function _(_) {
          return (
            typeof _ == "object" &&
            typeof _.$$typeof == "symbol" &&
            ["react.memo", "react.forward_ref"].includes(_.$$typeof.description)
          );
        }
        function _(_) {
          const _ = {
              state: {},
              onStateChange: () => {},
              renderFallbackValue: null,
              ..._,
            },
            [_] = _.useState(() => ({
              current: (0, _._)(_),
            })),
            [_, _] = _.useState(() => _.current.initialState);
          return (
            _.current.setOptions((_) => ({
              ..._,
              ..._,
              state: {
                ..._,
                ..._.state,
              },
              onStateChange: (_) => {
                _(_), _.onStateChange == null || _.onStateChange(_);
              },
            })),
            _.current
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
        });
        function _() {
          return {
            accessor: (_, _) =>
              typeof _ == "function"
                ? {
                    ..._,
                    accessorFn: _,
                  }
                : {
                    ..._,
                    accessorKey: _,
                  },
            display: (_) => _,
            group: (_) => _,
          };
        }
        function _(_, _) {
          return typeof _ == "function" ? _(_) : _;
        }
        function _() {}
        function _(_, _) {
          return (_) => {
            _.setState((_) => ({
              ..._,
              [_]: _(_, _[_]),
            }));
          };
        }
        function _(_) {
          return _ instanceof Function;
        }
        function _(_) {
          return Array.isArray(_) && _.every((_) => typeof _ == "number");
        }
        function _(_, _) {
          const _ = [],
            _ = (_) => {
              _.forEach((_) => {
                _.push(_);
                const _ = _(_);
                _ != null && _.length && _(_);
              });
            };
          return _(_), _;
        }
        function _(_, _, _) {
          let _ = [],
            _;
          return (_) => {
            let _;
            _.key && _.debug && (_ = Date.now());
            const _ = _(_);
            if (!(_.length !== _.length || _.some((_, _) => _[_] !== _)))
              return _;
            _ = _;
            let _;
            if (
              (_.key && _.debug && (_ = Date.now()),
              (_ = _(..._)),
              _ == null || _.onChange == null || _.onChange(_),
              _.key && _.debug && _ != null && _.debug())
            ) {
              const _ = Math.round((Date.now() - _) * 100) / 100,
                _ = Math.round((Date.now() - _) * 100) / 100,
                _ = _ / 16,
                _ = (_, _) => {
                  for (_ = String(_); _.length < _; ) _ = " " + _;
                  return _;
                };
              console.info(
                `%c\u23F1 ${_(_, 5)} /${_(_, 5)} ms`,
                `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _, 120))}deg 100% 31%);`,
                _?.key,
              );
            }
            return _;
          };
        }
        function _(_, _, _, _) {
          return {
            debug: () => {
              var _;
              return (_ = _?.debugAll) != null ? _ : _[_];
            },
            key: !1,
            onChange: _,
          };
        }
        function _(_, _, _, _) {
          const _ = () => {
              var _;
              return (_ = _.getValue()) != null
                ? _
                : _.options.renderFallbackValue;
            },
            _ = {
              _: `${_._}_${_._}`,
              row: _,
              column: _,
              getValue: () => _.getValue(_),
              renderValue: _,
              getContext: _(
                () => [_, _, _, _],
                (_, _, _, _) => ({
                  table: _,
                  column: _,
                  row: _,
                  cell: _,
                  getValue: _.getValue,
                  renderValue: _.renderValue,
                }),
                _(_.options, "debugCells", "cell.getContext"),
              ),
            };
          return (
            _._features.forEach((_) => {
              _.createCell == null || _.createCell(_, _, _, _);
            }, {}),
            _
          );
        }
        function _(_, _, _, _) {
          var _, _;
          const _ = {
              ..._._getDefaultColumnDef(),
              ..._,
            },
            _ = _.accessorKey;
          let _ =
              (_ =
                (_ = _._) != null
                  ? _
                  : _
                    ? typeof String.prototype.replaceAll == "function"
                      ? _.replaceAll(".", "_")
                      : _.replace(/\./g, "_")
                    : void 0) != null
                ? _
                : typeof _.header == "string"
                  ? _.header
                  : void 0,
            _;
          if (
            (_.accessorFn
              ? (_ = _.accessorFn)
              : _ &&
                (_.includes(".")
                  ? (_ = (_) => {
                      let _ = _;
                      for (const _ of _.split(".")) {
                        var _;
                        _ = (_ = _) == null ? void 0 : _[_];
                      }
                      return _;
                    })
                  : (_ = (_) => _[_.accessorKey])),
            !_)
          )
            throw new Error();
          let _ = {
            _: `${String(_)}`,
            accessorFn: _,
            parent: _,
            depth: _,
            columnDef: _,
            columns: [],
            getFlatColumns: _(
              () => [!0],
              () => {
                var _;
                return [
                  _,
                  ...((_ = _.columns) == null
                    ? void 0
                    : _.flatMap((_) => _.getFlatColumns())),
                ];
              },
              _(_.options, "debugColumns", "column.getFlatColumns"),
            ),
            getLeafColumns: _(
              () => [_._getOrderColumnsFn()],
              (_) => {
                var _;
                if ((_ = _.columns) != null && _.length) {
                  let _ = _.columns.flatMap((_) => _.getLeafColumns());
                  return _(_);
                }
                return [_];
              },
              _(_.options, "debugColumns", "column.getLeafColumns"),
            ),
          };
          for (const _ of _._features)
            _.createColumn == null || _.createColumn(_, _);
          return _;
        }
        const _ = "debugHeaders";
        function _(_, _, _) {
          var _;
          let _ = {
            _: (_ = _._) != null ? _ : _._,
            column: _,
            index: _.index,
            isPlaceholder: !!_.isPlaceholder,
            placeholderId: _.placeholderId,
            depth: _.depth,
            subHeaders: [],
            colSpan: 0,
            rowSpan: 0,
            headerGroup: null,
            getLeafHeaders: () => {
              const _ = [],
                _ = (_) => {
                  _.subHeaders && _.subHeaders.length && _.subHeaders.map(_),
                    _.push(_);
                };
              return _(_), _;
            },
            getContext: () => ({
              table: _,
              header: _,
              column: _,
            }),
          };
          return (
            _._features.forEach((_) => {
              _.createHeader == null || _.createHeader(_, _);
            }),
            _
          );
        }
        const _ = {
          createTable: (_) => {
            (_.getHeaderGroups = _(
              () => [
                _.getAllColumns(),
                _.getVisibleLeafColumns(),
                _.getState().columnPinning.left,
                _.getState().columnPinning.right,
              ],
              (_, _, _, _) => {
                var _, _;
                const _ =
                    (_ = _?.map((_) => _.find((_) => _._ === _)).filter(
                      Boolean,
                    )) != null
                      ? _
                      : [],
                  _ =
                    (_ = _?.map((_) => _.find((_) => _._ === _)).filter(
                      Boolean,
                    )) != null
                      ? _
                      : [],
                  _ = _.filter(
                    (_) =>
                      !(_ != null && _.includes(_._)) &&
                      !(_ != null && _.includes(_._)),
                  );
                return _(_, [..._, ..._, ..._], _);
              },
              _(_.options, _, "getHeaderGroups"),
            )),
              (_.getCenterHeaderGroups = _(
                () => [
                  _.getAllColumns(),
                  _.getVisibleLeafColumns(),
                  _.getState().columnPinning.left,
                  _.getState().columnPinning.right,
                ],
                (_, _, _, _) => (
                  (_ = _.filter(
                    (_) =>
                      !(_ != null && _.includes(_._)) &&
                      !(_ != null && _.includes(_._)),
                  )),
                  _(_, _, _, "center")
                ),
                _(_.options, _, "getCenterHeaderGroups"),
              )),
              (_.getLeftHeaderGroups = _(
                () => [
                  _.getAllColumns(),
                  _.getVisibleLeafColumns(),
                  _.getState().columnPinning.left,
                ],
                (_, _, _) => {
                  var _;
                  const _ =
                    (_ = _?.map((_) => _.find((_) => _._ === _)).filter(
                      Boolean,
                    )) != null
                      ? _
                      : [];
                  return _(_, _, _, "left");
                },
                _(_.options, _, "getLeftHeaderGroups"),
              )),
              (_.getRightHeaderGroups = _(
                () => [
                  _.getAllColumns(),
                  _.getVisibleLeafColumns(),
                  _.getState().columnPinning.right,
                ],
                (_, _, _) => {
                  var _;
                  const _ =
                    (_ = _?.map((_) => _.find((_) => _._ === _)).filter(
                      Boolean,
                    )) != null
                      ? _
                      : [];
                  return _(_, _, _, "right");
                },
                _(_.options, _, "getRightHeaderGroups"),
              )),
              (_.getFooterGroups = _(
                () => [_.getHeaderGroups()],
                (_) => [..._].reverse(),
                _(_.options, _, "getFooterGroups"),
              )),
              (_.getLeftFooterGroups = _(
                () => [_.getLeftHeaderGroups()],
                (_) => [..._].reverse(),
                _(_.options, _, "getLeftFooterGroups"),
              )),
              (_.getCenterFooterGroups = _(
                () => [_.getCenterHeaderGroups()],
                (_) => [..._].reverse(),
                _(_.options, _, "getCenterFooterGroups"),
              )),
              (_.getRightFooterGroups = _(
                () => [_.getRightHeaderGroups()],
                (_) => [..._].reverse(),
                _(_.options, _, "getRightFooterGroups"),
              )),
              (_.getFlatHeaders = _(
                () => [_.getHeaderGroups()],
                (_) => _.map((_) => _.headers).flat(),
                _(_.options, _, "getFlatHeaders"),
              )),
              (_.getLeftFlatHeaders = _(
                () => [_.getLeftHeaderGroups()],
                (_) => _.map((_) => _.headers).flat(),
                _(_.options, _, "getLeftFlatHeaders"),
              )),
              (_.getCenterFlatHeaders = _(
                () => [_.getCenterHeaderGroups()],
                (_) => _.map((_) => _.headers).flat(),
                _(_.options, _, "getCenterFlatHeaders"),
              )),
              (_.getRightFlatHeaders = _(
                () => [_.getRightHeaderGroups()],
                (_) => _.map((_) => _.headers).flat(),
                _(_.options, _, "getRightFlatHeaders"),
              )),
              (_.getCenterLeafHeaders = _(
                () => [_.getCenterFlatHeaders()],
                (_) =>
                  _.filter((_) => {
                    var _;
                    return !((_ = _.subHeaders) != null && _.length);
                  }),
                _(_.options, _, "getCenterLeafHeaders"),
              )),
              (_.getLeftLeafHeaders = _(
                () => [_.getLeftFlatHeaders()],
                (_) =>
                  _.filter((_) => {
                    var _;
                    return !((_ = _.subHeaders) != null && _.length);
                  }),
                _(_.options, _, "getLeftLeafHeaders"),
              )),
              (_.getRightLeafHeaders = _(
                () => [_.getRightFlatHeaders()],
                (_) =>
                  _.filter((_) => {
                    var _;
                    return !((_ = _.subHeaders) != null && _.length);
                  }),
                _(_.options, _, "getRightLeafHeaders"),
              )),
              (_.getLeafHeaders = _(
                () => [
                  _.getLeftHeaderGroups(),
                  _.getCenterHeaderGroups(),
                  _.getRightHeaderGroups(),
                ],
                (_, _, _) => {
                  var _, _, _, _, _, _;
                  return [
                    ...((_ = (_ = _[0]) == null ? void 0 : _.headers) != null
                      ? _
                      : []),
                    ...((_ = (_ = _[0]) == null ? void 0 : _.headers) != null
                      ? _
                      : []),
                    ...((_ = (_ = _[0]) == null ? void 0 : _.headers) != null
                      ? _
                      : []),
                  ]
                    .map((_) => _.getLeafHeaders())
                    .flat();
                },
                _(_.options, _, "getLeafHeaders"),
              ));
          },
        };
        function _(_, _, _, _) {
          var _, _;
          let _ = 0;
          const _ = function (_, _) {
            _ === void 0 && (_ = 1),
              (_ = Math.max(_, _)),
              _.filter((_) => _.getIsVisible()).forEach((_) => {
                var _;
                (_ = _.columns) != null && _.length && _(_.columns, _ + 1);
              }, 0);
          };
          _(_);
          let _ = [];
          const _ = (_, _) => {
              const _ = {
                  depth: _,
                  _: [_, `${_}`].filter(Boolean).join("_"),
                  headers: [],
                },
                _ = [];
              _.forEach((_) => {
                const _ = [..._].reverse()[0],
                  _ = _.column.depth === _.depth;
                let _,
                  _ = !1;
                if (
                  (_ && _.column.parent
                    ? (_ = _.column.parent)
                    : ((_ = _.column), (_ = !0)),
                  _ && _?.column === _)
                )
                  _.subHeaders.push(_);
                else {
                  const _ = _(_, _, {
                    _: [_, _, _._, _?._].filter(Boolean).join("_"),
                    isPlaceholder: _,
                    placeholderId: _
                      ? `${_.filter((_) => _.column === _).length}`
                      : void 0,
                    depth: _,
                    index: _.length,
                  });
                  _.subHeaders.push(_), _.push(_);
                }
                _.headers.push(_), (_.headerGroup = _);
              }),
                _.push(_),
                _ > 0 && _(_, _ - 1);
            },
            _ = _.map((_, _) =>
              _(_, _, {
                depth: _,
                index: _,
              }),
            );
          _(_, _ - 1), _.reverse();
          const _ = (_) =>
            _.filter((_) => _.column.getIsVisible()).map((_) => {
              let _ = 0,
                _ = 0,
                _ = [0];
              _.subHeaders && _.subHeaders.length
                ? ((_ = []),
                  _(_.subHeaders).forEach((_) => {
                    let { colSpan: _, rowSpan: _ } = _;
                    (_ += _), _.push(_);
                  }))
                : (_ = 1);
              const _ = Math.min(..._);
              return (
                (_ = _ + _),
                (_.colSpan = _),
                (_.rowSpan = _),
                {
                  colSpan: _,
                  rowSpan: _,
                }
              );
            });
          return (
            _((_ = (_ = _[0]) == null ? void 0 : _.headers) != null ? _ : []), _
          );
        }
        const _ = (_, _, _, _, _, _, _) => {
            let _ = {
              _: _,
              index: _,
              original: _,
              depth: _,
              parentId: _,
              _valuesCache: {},
              _uniqueValuesCache: {},
              getValue: (_) => {
                if (_._valuesCache.hasOwnProperty(_)) return _._valuesCache[_];
                const _ = _.getColumn(_);
                if (_ != null && _.accessorFn)
                  return (
                    (_._valuesCache[_] = _.accessorFn(_.original, _)),
                    _._valuesCache[_]
                  );
              },
              getUniqueValues: (_) => {
                if (_._uniqueValuesCache.hasOwnProperty(_))
                  return _._uniqueValuesCache[_];
                const _ = _.getColumn(_);
                if (_ != null && _.accessorFn)
                  return _.columnDef.getUniqueValues
                    ? ((_._uniqueValuesCache[_] = _.columnDef.getUniqueValues(
                        _.original,
                        _,
                      )),
                      _._uniqueValuesCache[_])
                    : ((_._uniqueValuesCache[_] = [_.getValue(_)]),
                      _._uniqueValuesCache[_]);
              },
              renderValue: (_) => {
                var _;
                return (_ = _.getValue(_)) != null
                  ? _
                  : _.options.renderFallbackValue;
              },
              subRows: _ ?? [],
              getLeafRows: () => _(_.subRows, (_) => _.subRows),
              getParentRow: () =>
                _.parentId ? _.getRow(_.parentId, !0) : void 0,
              getParentRows: () => {
                let _ = [],
                  _ = _;
                for (;;) {
                  const _ = _.getParentRow();
                  if (!_) break;
                  _.push(_), (_ = _);
                }
                return _.reverse();
              },
              getAllCells: _(
                () => [_.getAllLeafColumns()],
                (_) => _.map((_) => _(_, _, _, _._)),
                _(_.options, "debugRows", "getAllCells"),
              ),
              _getAllCellsByColumnId: _(
                () => [_.getAllCells()],
                (_) => _.reduce((_, _) => ((_[_.column._] = _), _), {}),
                _(_.options, "debugRows", "getAllCellsByColumnId"),
              ),
            };
            for (let _ = 0; _ < _._features.length; _++) {
              const _ = _._features[_];
              _ == null || _.createRow == null || _.createRow(_, _);
            }
            return _;
          },
          _ = {
            createColumn: (_, _) => {
              (_._getFacetedRowModel =
                _.options.getFacetedRowModel &&
                _.options.getFacetedRowModel(_, _._)),
                (_.getFacetedRowModel = () =>
                  _._getFacetedRowModel
                    ? _._getFacetedRowModel()
                    : _.getPreFilteredRowModel()),
                (_._getFacetedUniqueValues =
                  _.options.getFacetedUniqueValues &&
                  _.options.getFacetedUniqueValues(_, _._)),
                (_.getFacetedUniqueValues = () =>
                  _._getFacetedUniqueValues
                    ? _._getFacetedUniqueValues()
                    : new Map()),
                (_._getFacetedMinMaxValues =
                  _.options.getFacetedMinMaxValues &&
                  _.options.getFacetedMinMaxValues(_, _._)),
                (_.getFacetedMinMaxValues = () => {
                  if (_._getFacetedMinMaxValues)
                    return _._getFacetedMinMaxValues();
                });
            },
          },
          _ = (_, _, _) => {
            var _, _;
            const _ =
              _ == null || (_ = _.toString()) == null
                ? void 0
                : _.toLowerCase();
            return !!(
              !(
                (_ = _.getValue(_)) == null ||
                (_ = _.toString()) == null ||
                (_ = _.toLowerCase()) == null
              ) && _.includes(_)
            );
          };
        _.autoRemove = (_) => _(_);
        const _ = (_, _, _) => {
          var _;
          return !!(
            !((_ = _.getValue(_)) == null || (_ = _.toString()) == null) &&
            _.includes(_)
          );
        };
        _.autoRemove = (_) => _(_);
        const _ = (_, _, _) => {
          var _;
          return (
            ((_ = _.getValue(_)) == null || (_ = _.toString()) == null
              ? void 0
              : _.toLowerCase()) === _?.toLowerCase()
          );
        };
        _.autoRemove = (_) => _(_);
        const _ = (_, _, _) => {
          var _;
          return (_ = _.getValue(_)) == null ? void 0 : _.includes(_);
        };
        _.autoRemove = (_) => _(_) || !(_ != null && _.length);
        const _ = (_, _, _) =>
          !_.some((_) => {
            var _;
            return !((_ = _.getValue(_)) != null && _.includes(_));
          });
        _.autoRemove = (_) => _(_) || !(_ != null && _.length);
        const _ = (_, _, _) =>
          _.some((_) => {
            var _;
            return (_ = _.getValue(_)) == null ? void 0 : _.includes(_);
          });
        _.autoRemove = (_) => _(_) || !(_ != null && _.length);
        const _ = (_, _, _) => _.getValue(_) === _;
        _.autoRemove = (_) => _(_);
        const _ = (_, _, _) => _.getValue(_) == _;
        _.autoRemove = (_) => _(_);
        const _ = (_, _, _) => {
          let [_, _] = _;
          const _ = _.getValue(_);
          return _ >= _ && _ <= _;
        };
        (_.resolveFilterValue = (_) => {
          let [_, _] = _,
            _ = typeof _ != "number" ? parseFloat(_) : _,
            _ = typeof _ != "number" ? parseFloat(_) : _,
            _ = _ === null || Number.isNaN(_) ? -1 / 0 : _,
            _ = _ === null || Number.isNaN(_) ? 1 / 0 : _;
          if (_ > _) {
            const _ = _;
            (_ = _), (_ = _);
          }
          return [_, _];
        }),
          (_.autoRemove = (_) => _(_) || (_(_[0]) && _(_[1])));
        const _ = {
          includesString: _,
          includesStringSensitive: _,
          equalsString: _,
          arrIncludes: _,
          arrIncludesAll: _,
          arrIncludesSome: _,
          equals: _,
          weakEquals: _,
          inNumberRange: _,
        };
        function _(_) {
          return _ == null || _ === "";
        }
        const _ = {
          getDefaultColumnDef: () => ({
            filterFn: "auto",
          }),
          getInitialState: (_) => ({
            columnFilters: [],
            ..._,
          }),
          getDefaultOptions: (_) => ({
            onColumnFiltersChange: _("columnFilters", _),
            filterFromLeafRows: !1,
            maxLeafRowFilterDepth: 100,
          }),
          createColumn: (_, _) => {
            (_.getAutoFilterFn = () => {
              const _ = _.getCoreRowModel().flatRows[0],
                _ = _?.getValue(_._);
              return typeof _ == "string"
                ? _.includesString
                : typeof _ == "number"
                  ? _.inNumberRange
                  : typeof _ == "boolean" ||
                      (_ !== null && typeof _ == "object")
                    ? _.equals
                    : Array.isArray(_)
                      ? _.arrIncludes
                      : _.weakEquals;
            }),
              (_.getFilterFn = () => {
                var _, _;
                return _(_.columnDef.filterFn)
                  ? _.columnDef.filterFn
                  : _.columnDef.filterFn === "auto"
                    ? _.getAutoFilterFn()
                    : (_ =
                          (_ = _.options.filterFns) == null
                            ? void 0
                            : _[_.columnDef.filterFn]) != null
                      ? _
                      : _[_.columnDef.filterFn];
              }),
              (_.getCanFilter = () => {
                var _, _, _;
                return (
                  ((_ = _.columnDef.enableColumnFilter) != null ? _ : !0) &&
                  ((_ = _.options.enableColumnFilters) != null ? _ : !0) &&
                  ((_ = _.options.enableFilters) != null ? _ : !0) &&
                  !!_.accessorFn
                );
              }),
              (_.getIsFiltered = () => _.getFilterIndex() > -1),
              (_.getFilterValue = () => {
                var _;
                return (_ = _.getState().columnFilters) == null ||
                  (_ = _.find((_) => _._ === _._)) == null
                  ? void 0
                  : _.value;
              }),
              (_.getFilterIndex = () => {
                var _, _;
                return (_ =
                  (_ = _.getState().columnFilters) == null
                    ? void 0
                    : _.findIndex((_) => _._ === _._)) != null
                  ? _
                  : -1;
              }),
              (_.setFilterValue = (_) => {
                _.setColumnFilters((_) => {
                  const _ = _.getFilterFn(),
                    _ = _?.find((_) => _._ === _._),
                    _ = _(_, _ ? _.value : void 0);
                  if (_(_, _, _)) {
                    var _;
                    return (_ = _?.filter((_) => _._ !== _._)) != null ? _ : [];
                  }
                  const _ = {
                    _: _._,
                    value: _,
                  };
                  if (_) {
                    var _;
                    return (_ = _?.map((_) => (_._ === _._ ? _ : _))) != null
                      ? _
                      : [];
                  }
                  return _ != null && _.length ? [..._, _] : [_];
                });
              });
          },
          createRow: (_, _) => {
            (_.columnFilters = {}), (_.columnFiltersMeta = {});
          },
          createTable: (_) => {
            (_.setColumnFilters = (_) => {
              const _ = _.getAllLeafColumns(),
                _ = (_) => {
                  var _;
                  return (_ = _(_, _)) == null
                    ? void 0
                    : _.filter((_) => {
                        const _ = _.find((_) => _._ === _._);
                        if (_) {
                          const _ = _.getFilterFn();
                          if (_(_, _.value, _)) return !1;
                        }
                        return !0;
                      });
                };
              _.options.onColumnFiltersChange == null ||
                _.options.onColumnFiltersChange(_);
            }),
              (_.resetColumnFilters = (_) => {
                var _, _;
                _.setColumnFilters(
                  _
                    ? []
                    : (_ =
                          (_ = _.initialState) == null
                            ? void 0
                            : _.columnFilters) != null
                      ? _
                      : [],
                );
              }),
              (_.getPreFilteredRowModel = () => _.getCoreRowModel()),
              (_.getFilteredRowModel = () => (
                !_._getFilteredRowModel &&
                  _.options.getFilteredRowModel &&
                  (_._getFilteredRowModel = _.options.getFilteredRowModel(_)),
                _.options.manualFiltering || !_._getFilteredRowModel
                  ? _.getPreFilteredRowModel()
                  : _._getFilteredRowModel()
              ));
          },
        };
        function _(_, _, _) {
          return (
            (_ && _.autoRemove ? _.autoRemove(_, _) : !1) ||
            typeof _ > "u" ||
            (typeof _ == "string" && !_)
          );
        }
        const _ = {
            sum: (_, _, _) =>
              _.reduce((_, _) => {
                const _ = _.getValue(_);
                return _ + (typeof _ == "number" ? _ : 0);
              }, 0),
            min: (_, _, _) => {
              let _;
              return (
                _.forEach((_) => {
                  const _ = _.getValue(_);
                  _ != null && (_ > _ || (_ === void 0 && _ >= _)) && (_ = _);
                }),
                _
              );
            },
            max: (_, _, _) => {
              let _;
              return (
                _.forEach((_) => {
                  const _ = _.getValue(_);
                  _ != null && (_ < _ || (_ === void 0 && _ >= _)) && (_ = _);
                }),
                _
              );
            },
            extent: (_, _, _) => {
              let _, _;
              return (
                _.forEach((_) => {
                  const _ = _.getValue(_);
                  _ != null &&
                    (_ === void 0
                      ? _ >= _ && (_ = _ = _)
                      : (_ > _ && (_ = _), _ < _ && (_ = _)));
                }),
                [_, _]
              );
            },
            mean: (_, _) => {
              let _ = 0,
                _ = 0;
              if (
                (_.forEach((_) => {
                  let _ = _.getValue(_);
                  _ != null && (_ = +_) >= _ && (++_, (_ += _));
                }),
                _)
              )
                return _ / _;
            },
            median: (_, _) => {
              if (!_.length) return;
              const _ = _.map((_) => _.getValue(_));
              if (!_(_)) return;
              if (_.length === 1) return _[0];
              const _ = Math.floor(_.length / 2),
                _ = _.sort((_, _) => _ - _);
              return _.length % 2 !== 0 ? _[_] : (_[_ - 1] + _[_]) / 2;
            },
            unique: (_, _) =>
              Array.from(new Set(_.map((_) => _.getValue(_))).values()),
            uniqueCount: (_, _) => new Set(_.map((_) => _.getValue(_))).size,
            count: (_, _) => _.length,
          },
          _ = {
            getDefaultColumnDef: () => ({
              aggregatedCell: (_) => {
                var _, _;
                return (_ =
                  (_ = _.getValue()) == null || _.toString == null
                    ? void 0
                    : _.toString()) != null
                  ? _
                  : null;
              },
              aggregationFn: "auto",
            }),
            getInitialState: (_) => ({
              grouping: [],
              ..._,
            }),
            getDefaultOptions: (_) => ({
              onGroupingChange: _("grouping", _),
              groupedColumnMode: "reorder",
            }),
            createColumn: (_, _) => {
              (_.toggleGrouping = () => {
                _.setGrouping((_) =>
                  _ != null && _.includes(_._)
                    ? _.filter((_) => _ !== _._)
                    : [...(_ ?? []), _._],
                );
              }),
                (_.getCanGroup = () => {
                  var _, _;
                  return (
                    ((_ = _.columnDef.enableGrouping) != null ? _ : !0) &&
                    ((_ = _.options.enableGrouping) != null ? _ : !0) &&
                    (!!_.accessorFn || !!_.columnDef.getGroupingValue)
                  );
                }),
                (_.getIsGrouped = () => {
                  var _;
                  return (_ = _.getState().grouping) == null
                    ? void 0
                    : _.includes(_._);
                }),
                (_.getGroupedIndex = () => {
                  var _;
                  return (_ = _.getState().grouping) == null
                    ? void 0
                    : _.indexOf(_._);
                }),
                (_.getToggleGroupingHandler = () => {
                  const _ = _.getCanGroup();
                  return () => {
                    _ && _.toggleGrouping();
                  };
                }),
                (_.getAutoAggregationFn = () => {
                  const _ = _.getCoreRowModel().flatRows[0],
                    _ = _?.getValue(_._);
                  if (typeof _ == "number") return _.sum;
                  if (Object.prototype.toString.call(_) === "[object Date]")
                    return _.extent;
                }),
                (_.getAggregationFn = () => {
                  var _, _;
                  if (!_) throw new Error();
                  return _(_.columnDef.aggregationFn)
                    ? _.columnDef.aggregationFn
                    : _.columnDef.aggregationFn === "auto"
                      ? _.getAutoAggregationFn()
                      : (_ =
                            (_ = _.options.aggregationFns) == null
                              ? void 0
                              : _[_.columnDef.aggregationFn]) != null
                        ? _
                        : _[_.columnDef.aggregationFn];
                });
            },
            createTable: (_) => {
              (_.setGrouping = (_) =>
                _.options.onGroupingChange == null
                  ? void 0
                  : _.options.onGroupingChange(_)),
                (_.resetGrouping = (_) => {
                  var _, _;
                  _.setGrouping(
                    _
                      ? []
                      : (_ =
                            (_ = _.initialState) == null
                              ? void 0
                              : _.grouping) != null
                        ? _
                        : [],
                  );
                }),
                (_.getPreGroupedRowModel = () => _.getFilteredRowModel()),
                (_.getGroupedRowModel = () => (
                  !_._getGroupedRowModel &&
                    _.options.getGroupedRowModel &&
                    (_._getGroupedRowModel = _.options.getGroupedRowModel(_)),
                  _.options.manualGrouping || !_._getGroupedRowModel
                    ? _.getPreGroupedRowModel()
                    : _._getGroupedRowModel()
                ));
            },
            createRow: (_, _) => {
              (_.getIsGrouped = () => !!_.groupingColumnId),
                (_.getGroupingValue = (_) => {
                  if (_._groupingValuesCache.hasOwnProperty(_))
                    return _._groupingValuesCache[_];
                  const _ = _.getColumn(_);
                  return _ != null && _.columnDef.getGroupingValue
                    ? ((_._groupingValuesCache[_] =
                        _.columnDef.getGroupingValue(_.original)),
                      _._groupingValuesCache[_])
                    : _.getValue(_);
                }),
                (_._groupingValuesCache = {});
            },
            createCell: (_, _, _, _) => {
              (_.getIsGrouped = () =>
                _.getIsGrouped() && _._ === _.groupingColumnId),
                (_.getIsPlaceholder = () =>
                  !_.getIsGrouped() && _.getIsGrouped()),
                (_.getIsAggregated = () => {
                  var _;
                  return (
                    !_.getIsGrouped() &&
                    !_.getIsPlaceholder() &&
                    !!((_ = _.subRows) != null && _.length)
                  );
                });
            },
          };
        function _(_, _, _) {
          if (!(_ != null && _.length) || !_) return _;
          const _ = _.filter((_) => !_.includes(_._));
          return _ === "remove"
            ? _
            : [..._.map((_) => _.find((_) => _._ === _)).filter(Boolean), ..._];
        }
        const _ = {
            getInitialState: (_) => ({
              columnOrder: [],
              ..._,
            }),
            getDefaultOptions: (_) => ({
              onColumnOrderChange: _("columnOrder", _),
            }),
            createColumn: (_, _) => {
              (_.getIndex = _(
                (_) => [_(_, _)],
                (_) => _.findIndex((_) => _._ === _._),
                _(_.options, "debugColumns", "getIndex"),
              )),
                (_.getIsFirstColumn = (_) => {
                  var _;
                  return ((_ = _(_, _)[0]) == null ? void 0 : _._) === _._;
                }),
                (_.getIsLastColumn = (_) => {
                  var _;
                  const _ = _(_, _);
                  return ((_ = _[_.length - 1]) == null ? void 0 : _._) === _._;
                });
            },
            createTable: (_) => {
              (_.setColumnOrder = (_) =>
                _.options.onColumnOrderChange == null
                  ? void 0
                  : _.options.onColumnOrderChange(_)),
                (_.resetColumnOrder = (_) => {
                  var _;
                  _.setColumnOrder(
                    _ ? [] : (_ = _.initialState.columnOrder) != null ? _ : [],
                  );
                }),
                (_._getOrderColumnsFn = _(
                  () => [
                    _.getState().columnOrder,
                    _.getState().grouping,
                    _.options.groupedColumnMode,
                  ],
                  (_, _, _) => (_) => {
                    let _ = [];
                    if (!(_ != null && _.length)) _ = _;
                    else {
                      const _ = [..._],
                        _ = [..._];
                      for (; _.length && _.length; ) {
                        const _ = _.shift(),
                          _ = _.findIndex((_) => _._ === _);
                        _ > -1 && _.push(_.splice(_, 1)[0]);
                      }
                      _ = [..._, ..._];
                    }
                    return _(_, _, _);
                  },
                  _(_.options, "debugTable", "_getOrderColumnsFn"),
                ));
            },
          },
          _ = () => ({
            left: [],
            right: [],
          }),
          _ = {
            getInitialState: (_) => ({
              columnPinning: _(),
              ..._,
            }),
            getDefaultOptions: (_) => ({
              onColumnPinningChange: _("columnPinning", _),
            }),
            createColumn: (_, _) => {
              (_.pin = (_) => {
                const _ = _.getLeafColumns()
                  .map((_) => _._)
                  .filter(Boolean);
                _.setColumnPinning((_) => {
                  var _, _;
                  if (_ === "right") {
                    var _, _;
                    return {
                      left: ((_ = _?.left) != null ? _ : []).filter(
                        (_) => !(_ != null && _.includes(_)),
                      ),
                      right: [
                        ...((_ = _?.right) != null ? _ : []).filter(
                          (_) => !(_ != null && _.includes(_)),
                        ),
                        ..._,
                      ],
                    };
                  }
                  if (_ === "left") {
                    var _, _;
                    return {
                      left: [
                        ...((_ = _?.left) != null ? _ : []).filter(
                          (_) => !(_ != null && _.includes(_)),
                        ),
                        ..._,
                      ],
                      right: ((_ = _?.right) != null ? _ : []).filter(
                        (_) => !(_ != null && _.includes(_)),
                      ),
                    };
                  }
                  return {
                    left: ((_ = _?.left) != null ? _ : []).filter(
                      (_) => !(_ != null && _.includes(_)),
                    ),
                    right: ((_ = _?.right) != null ? _ : []).filter(
                      (_) => !(_ != null && _.includes(_)),
                    ),
                  };
                });
              }),
                (_.getCanPin = () =>
                  _.getLeafColumns().some((_) => {
                    var _, _, _;
                    return (
                      ((_ = _.columnDef.enablePinning) != null ? _ : !0) &&
                      ((_ =
                        (_ = _.options.enableColumnPinning) != null
                          ? _
                          : _.options.enablePinning) != null
                        ? _
                        : !0)
                    );
                  })),
                (_.getIsPinned = () => {
                  const _ = _.getLeafColumns().map((_) => _._),
                    { left: _, right: _ } = _.getState().columnPinning,
                    _ = _.some((_) => _?.includes(_)),
                    _ = _.some((_) => _?.includes(_));
                  return _ ? "left" : _ ? "right" : !1;
                }),
                (_.getPinnedIndex = () => {
                  var _, _;
                  const _ = _.getIsPinned();
                  return _
                    ? (_ =
                        (_ = _.getState().columnPinning) == null ||
                        (_ = _[_]) == null
                          ? void 0
                          : _.indexOf(_._)) != null
                      ? _
                      : -1
                    : 0;
                });
            },
            createRow: (_, _) => {
              (_.getCenterVisibleCells = _(
                () => [
                  _._getAllVisibleCells(),
                  _.getState().columnPinning.left,
                  _.getState().columnPinning.right,
                ],
                (_, _, _) => {
                  const _ = [...(_ ?? []), ...(_ ?? [])];
                  return _.filter((_) => !_.includes(_.column._));
                },
                _(_.options, "debugRows", "getCenterVisibleCells"),
              )),
                (_.getLeftVisibleCells = _(
                  () => [
                    _._getAllVisibleCells(),
                    _.getState().columnPinning.left,
                  ],
                  (_, _) =>
                    (_ ?? [])
                      .map((_) => _.find((_) => _.column._ === _))
                      .filter(Boolean)
                      .map((_) => ({
                        ..._,
                        position: "left",
                      })),
                  _(_.options, "debugRows", "getLeftVisibleCells"),
                )),
                (_.getRightVisibleCells = _(
                  () => [
                    _._getAllVisibleCells(),
                    _.getState().columnPinning.right,
                  ],
                  (_, _) =>
                    (_ ?? [])
                      .map((_) => _.find((_) => _.column._ === _))
                      .filter(Boolean)
                      .map((_) => ({
                        ..._,
                        position: "right",
                      })),
                  _(_.options, "debugRows", "getRightVisibleCells"),
                ));
            },
            createTable: (_) => {
              (_.setColumnPinning = (_) =>
                _.options.onColumnPinningChange == null
                  ? void 0
                  : _.options.onColumnPinningChange(_)),
                (_.resetColumnPinning = (_) => {
                  var _, _;
                  return _.setColumnPinning(
                    _
                      ? _()
                      : (_ =
                            (_ = _.initialState) == null
                              ? void 0
                              : _.columnPinning) != null
                        ? _
                        : _(),
                  );
                }),
                (_.getIsSomeColumnsPinned = (_) => {
                  var _;
                  const _ = _.getState().columnPinning;
                  if (!_) {
                    var _, _;
                    return !!(
                      ((_ = _.left) != null && _.length) ||
                      ((_ = _.right) != null && _.length)
                    );
                  }
                  return !!((_ = _[_]) != null && _.length);
                }),
                (_.getLeftLeafColumns = _(
                  () => [
                    _.getAllLeafColumns(),
                    _.getState().columnPinning.left,
                  ],
                  (_, _) =>
                    (_ ?? [])
                      .map((_) => _.find((_) => _._ === _))
                      .filter(Boolean),
                  _(_.options, "debugColumns", "getLeftLeafColumns"),
                )),
                (_.getRightLeafColumns = _(
                  () => [
                    _.getAllLeafColumns(),
                    _.getState().columnPinning.right,
                  ],
                  (_, _) =>
                    (_ ?? [])
                      .map((_) => _.find((_) => _._ === _))
                      .filter(Boolean),
                  _(_.options, "debugColumns", "getRightLeafColumns"),
                )),
                (_.getCenterLeafColumns = _(
                  () => [
                    _.getAllLeafColumns(),
                    _.getState().columnPinning.left,
                    _.getState().columnPinning.right,
                  ],
                  (_, _, _) => {
                    const _ = [...(_ ?? []), ...(_ ?? [])];
                    return _.filter((_) => !_.includes(_._));
                  },
                  _(_.options, "debugColumns", "getCenterLeafColumns"),
                ));
            },
          },
          _ = {
            size: 150,
            minSize: 20,
            maxSize: Number.MAX_SAFE_INTEGER,
          },
          _ = () => ({
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            isResizingColumn: !1,
            columnSizingStart: [],
          }),
          _ = {
            getDefaultColumnDef: () => _,
            getInitialState: (_) => ({
              columnSizing: {},
              columnSizingInfo: _(),
              ..._,
            }),
            getDefaultOptions: (_) => ({
              columnResizeMode: "onEnd",
              columnResizeDirection: "ltr",
              onColumnSizingChange: _("columnSizing", _),
              onColumnSizingInfoChange: _("columnSizingInfo", _),
            }),
            createColumn: (_, _) => {
              (_.getSize = () => {
                var _, _, _;
                const _ = _.getState().columnSizing[_._];
                return Math.min(
                  Math.max(
                    (_ = _.columnDef.minSize) != null ? _ : _.minSize,
                    (_ = _ ?? _.columnDef.size) != null ? _ : _.size,
                  ),
                  (_ = _.columnDef.maxSize) != null ? _ : _.maxSize,
                );
              }),
                (_.getStart = _(
                  (_) => [_, _(_, _), _.getState().columnSizing],
                  (_, _) =>
                    _.slice(0, _.getIndex(_)).reduce(
                      (_, _) => _ + _.getSize(),
                      0,
                    ),
                  _(_.options, "debugColumns", "getStart"),
                )),
                (_.getAfter = _(
                  (_) => [_, _(_, _), _.getState().columnSizing],
                  (_, _) =>
                    _.slice(_.getIndex(_) + 1).reduce(
                      (_, _) => _ + _.getSize(),
                      0,
                    ),
                  _(_.options, "debugColumns", "getAfter"),
                )),
                (_.resetSize = () => {
                  _.setColumnSizing((_) => {
                    let { [_._]: _, ..._ } = _;
                    return _;
                  });
                }),
                (_.getCanResize = () => {
                  var _, _;
                  return (
                    ((_ = _.columnDef.enableResizing) != null ? _ : !0) &&
                    ((_ = _.options.enableColumnResizing) != null ? _ : !0)
                  );
                }),
                (_.getIsResizing = () =>
                  _.getState().columnSizingInfo.isResizingColumn === _._);
            },
            createHeader: (_, _) => {
              (_.getSize = () => {
                let _ = 0;
                const _ = (_) => {
                  if (_.subHeaders.length) _.subHeaders.forEach(_);
                  else {
                    var _;
                    _ += (_ = _.column.getSize()) != null ? _ : 0;
                  }
                };
                return _(_), _;
              }),
                (_.getStart = () => {
                  if (_.index > 0) {
                    const _ = _.headerGroup.headers[_.index - 1];
                    return _.getStart() + _.getSize();
                  }
                  return 0;
                }),
                (_.getResizeHandler = (_) => {
                  const _ = _.getColumn(_.column._),
                    _ = _?.getCanResize();
                  return (_) => {
                    if (
                      !_ ||
                      !_ ||
                      (_.persist == null || _.persist(),
                      _(_) && _.touches && _.touches.length > 1)
                    )
                      return;
                    const _ = _.getSize(),
                      _ = _
                        ? _.getLeafHeaders().map((_) => [
                            _.column._,
                            _.column.getSize(),
                          ])
                        : [[_._, _.getSize()]],
                      _ = _(_) ? Math.round(_.touches[0].clientX) : _.clientX,
                      _ = {},
                      _ = (_, _) => {
                        typeof _ == "number" &&
                          (_.setColumnSizingInfo((_) => {
                            var _, _;
                            const _ =
                                _.options.columnResizeDirection === "rtl"
                                  ? -1
                                  : 1,
                              _ =
                                (_ - ((_ = _?.startOffset) != null ? _ : 0)) *
                                _,
                              _ = Math.max(
                                _ / ((_ = _?.startSize) != null ? _ : 0),
                                -0.999999,
                              );
                            return (
                              _.columnSizingStart.forEach((_) => {
                                let [_, _] = _;
                                _[_] =
                                  Math.round(Math.max(_ + _ * _, 0) * 100) /
                                  100;
                              }),
                              {
                                ..._,
                                deltaOffset: _,
                                deltaPercentage: _,
                              }
                            );
                          }),
                          (_.options.columnResizeMode === "onChange" ||
                            _ === "end") &&
                            _.setColumnSizing((_) => ({
                              ..._,
                              ..._,
                            })));
                      },
                      _ = (_) => _("move", _),
                      _ = (_) => {
                        _("end", _),
                          _.setColumnSizingInfo((_) => ({
                            ..._,
                            isResizingColumn: !1,
                            startOffset: null,
                            startSize: null,
                            deltaOffset: null,
                            deltaPercentage: null,
                            columnSizingStart: [],
                          }));
                      },
                      _ = _ || typeof document < "u" ? document : null,
                      _ = {
                        moveHandler: (_) => _(_.clientX),
                        upHandler: (_) => {
                          _?.removeEventListener("mousemove", _.moveHandler),
                            _?.removeEventListener("mouseup", _.upHandler),
                            _(_.clientX);
                        },
                      },
                      _ = {
                        moveHandler: (_) => (
                          _.cancelable &&
                            (_.preventDefault(), _.stopPropagation()),
                          _(_.touches[0].clientX),
                          !1
                        ),
                        upHandler: (_) => {
                          var _;
                          _?.removeEventListener("touchmove", _.moveHandler),
                            _?.removeEventListener("touchend", _.upHandler),
                            _.cancelable &&
                              (_.preventDefault(), _.stopPropagation()),
                            _((_ = _.touches[0]) == null ? void 0 : _.clientX);
                        },
                      },
                      _ = _()
                        ? {
                            passive: !1,
                          }
                        : !1;
                    _(_)
                      ? (_?.addEventListener("touchmove", _.moveHandler, _),
                        _?.addEventListener("touchend", _.upHandler, _))
                      : (_?.addEventListener("mousemove", _.moveHandler, _),
                        _?.addEventListener("mouseup", _.upHandler, _)),
                      _.setColumnSizingInfo((_) => ({
                        ..._,
                        startOffset: _,
                        startSize: _,
                        deltaOffset: 0,
                        deltaPercentage: 0,
                        columnSizingStart: _,
                        isResizingColumn: _._,
                      }));
                  };
                });
            },
            createTable: (_) => {
              (_.setColumnSizing = (_) =>
                _.options.onColumnSizingChange == null
                  ? void 0
                  : _.options.onColumnSizingChange(_)),
                (_.setColumnSizingInfo = (_) =>
                  _.options.onColumnSizingInfoChange == null
                    ? void 0
                    : _.options.onColumnSizingInfoChange(_)),
                (_.resetColumnSizing = (_) => {
                  var _;
                  _.setColumnSizing(
                    _ ? {} : (_ = _.initialState.columnSizing) != null ? _ : {},
                  );
                }),
                (_.resetHeaderSizeInfo = (_) => {
                  var _;
                  _.setColumnSizingInfo(
                    _
                      ? _()
                      : (_ = _.initialState.columnSizingInfo) != null
                        ? _
                        : _(),
                  );
                }),
                (_.getTotalSize = () => {
                  var _, _;
                  return (_ =
                    (_ = _.getHeaderGroups()[0]) == null
                      ? void 0
                      : _.headers.reduce((_, _) => _ + _.getSize(), 0)) != null
                    ? _
                    : 0;
                }),
                (_.getLeftTotalSize = () => {
                  var _, _;
                  return (_ =
                    (_ = _.getLeftHeaderGroups()[0]) == null
                      ? void 0
                      : _.headers.reduce((_, _) => _ + _.getSize(), 0)) != null
                    ? _
                    : 0;
                }),
                (_.getCenterTotalSize = () => {
                  var _, _;
                  return (_ =
                    (_ = _.getCenterHeaderGroups()[0]) == null
                      ? void 0
                      : _.headers.reduce((_, _) => _ + _.getSize(), 0)) != null
                    ? _
                    : 0;
                }),
                (_.getRightTotalSize = () => {
                  var _, _;
                  return (_ =
                    (_ = _.getRightHeaderGroups()[0]) == null
                      ? void 0
                      : _.headers.reduce((_, _) => _ + _.getSize(), 0)) != null
                    ? _
                    : 0;
                });
            },
          };
        let _ = null;
        function _() {
          if (typeof _ == "boolean") return _;
          let _ = !1;
          try {
            const _ = {
                get passive() {
                  return (_ = !0), !1;
                },
              },
              _ = () => {};
            window.addEventListener("test", _, _),
              window.removeEventListener("test", _);
          } catch {
            _ = !1;
          }
          return (_ = _), _;
        }
        function _(_) {
          return _.type === "touchstart";
        }
        const _ = {
          getInitialState: (_) => ({
            columnVisibility: {},
            ..._,
          }),
          getDefaultOptions: (_) => ({
            onColumnVisibilityChange: _("columnVisibility", _),
          }),
          createColumn: (_, _) => {
            (_.toggleVisibility = (_) => {
              _.getCanHide() &&
                _.setColumnVisibility((_) => ({
                  ..._,
                  [_._]: _ ?? !_.getIsVisible(),
                }));
            }),
              (_.getIsVisible = () => {
                var _, _;
                const _ = _.columns;
                return (_ = _.length
                  ? _.some((_) => _.getIsVisible())
                  : (_ = _.getState().columnVisibility) == null
                    ? void 0
                    : _[_._]) != null
                  ? _
                  : !0;
              }),
              (_.getCanHide = () => {
                var _, _;
                return (
                  ((_ = _.columnDef.enableHiding) != null ? _ : !0) &&
                  ((_ = _.options.enableHiding) != null ? _ : !0)
                );
              }),
              (_.getToggleVisibilityHandler = () => (_) => {
                _.toggleVisibility == null ||
                  _.toggleVisibility(_.target.checked);
              });
          },
          createRow: (_, _) => {
            (_._getAllVisibleCells = _(
              () => [_.getAllCells(), _.getState().columnVisibility],
              (_) => _.filter((_) => _.column.getIsVisible()),
              _(_.options, "debugRows", "_getAllVisibleCells"),
            )),
              (_.getVisibleCells = _(
                () => [
                  _.getLeftVisibleCells(),
                  _.getCenterVisibleCells(),
                  _.getRightVisibleCells(),
                ],
                (_, _, _) => [..._, ..._, ..._],
                _(_.options, "debugRows", "getVisibleCells"),
              ));
          },
          createTable: (_) => {
            const _ = (_, _) =>
              _(
                () => [
                  _(),
                  _()
                    .filter((_) => _.getIsVisible())
                    .map((_) => _._)
                    .join("_"),
                ],
                (_) =>
                  _.filter((_) =>
                    _.getIsVisible == null ? void 0 : _.getIsVisible(),
                  ),
                _(_.options, "debugColumns", _),
              );
            (_.getVisibleFlatColumns = _("getVisibleFlatColumns", () =>
              _.getAllFlatColumns(),
            )),
              (_.getVisibleLeafColumns = _("getVisibleLeafColumns", () =>
                _.getAllLeafColumns(),
              )),
              (_.getLeftVisibleLeafColumns = _(
                "getLeftVisibleLeafColumns",
                () => _.getLeftLeafColumns(),
              )),
              (_.getRightVisibleLeafColumns = _(
                "getRightVisibleLeafColumns",
                () => _.getRightLeafColumns(),
              )),
              (_.getCenterVisibleLeafColumns = _(
                "getCenterVisibleLeafColumns",
                () => _.getCenterLeafColumns(),
              )),
              (_.setColumnVisibility = (_) =>
                _.options.onColumnVisibilityChange == null
                  ? void 0
                  : _.options.onColumnVisibilityChange(_)),
              (_.resetColumnVisibility = (_) => {
                var _;
                _.setColumnVisibility(
                  _
                    ? {}
                    : (_ = _.initialState.columnVisibility) != null
                      ? _
                      : {},
                );
              }),
              (_.toggleAllColumnsVisible = (_) => {
                var _;
                (_ = (_ = _) != null ? _ : !_.getIsAllColumnsVisible()),
                  _.setColumnVisibility(
                    _.getAllLeafColumns().reduce(
                      (_, _) => ({
                        ..._,
                        [_._]: _ || !(_.getCanHide != null && _.getCanHide()),
                      }),
                      {},
                    ),
                  );
              }),
              (_.getIsAllColumnsVisible = () =>
                !_.getAllLeafColumns().some(
                  (_) => !(_.getIsVisible != null && _.getIsVisible()),
                )),
              (_.getIsSomeColumnsVisible = () =>
                _.getAllLeafColumns().some((_) =>
                  _.getIsVisible == null ? void 0 : _.getIsVisible(),
                )),
              (_.getToggleAllColumnsVisibilityHandler = () => (_) => {
                var _;
                _.toggleAllColumnsVisible(
                  (_ = _.target) == null ? void 0 : _.checked,
                );
              });
          },
        };
        function _(_, _) {
          return _
            ? _ === "center"
              ? _.getCenterVisibleLeafColumns()
              : _ === "left"
                ? _.getLeftVisibleLeafColumns()
                : _.getRightVisibleLeafColumns()
            : _.getVisibleLeafColumns();
        }
        const _ = {
            createTable: (_) => {
              (_._getGlobalFacetedRowModel =
                _.options.getFacetedRowModel &&
                _.options.getFacetedRowModel(_, "__global__")),
                (_.getGlobalFacetedRowModel = () =>
                  _.options.manualFiltering || !_._getGlobalFacetedRowModel
                    ? _.getPreFilteredRowModel()
                    : _._getGlobalFacetedRowModel()),
                (_._getGlobalFacetedUniqueValues =
                  _.options.getFacetedUniqueValues &&
                  _.options.getFacetedUniqueValues(_, "__global__")),
                (_.getGlobalFacetedUniqueValues = () =>
                  _._getGlobalFacetedUniqueValues
                    ? _._getGlobalFacetedUniqueValues()
                    : new Map()),
                (_._getGlobalFacetedMinMaxValues =
                  _.options.getFacetedMinMaxValues &&
                  _.options.getFacetedMinMaxValues(_, "__global__")),
                (_.getGlobalFacetedMinMaxValues = () => {
                  if (_._getGlobalFacetedMinMaxValues)
                    return _._getGlobalFacetedMinMaxValues();
                });
            },
          },
          _ = {
            getInitialState: (_) => ({
              globalFilter: void 0,
              ..._,
            }),
            getDefaultOptions: (_) => ({
              onGlobalFilterChange: _("globalFilter", _),
              globalFilterFn: "auto",
              getColumnCanGlobalFilter: (_) => {
                var _;
                const _ =
                  (_ = _.getCoreRowModel().flatRows[0]) == null ||
                  (_ = _._getAllCellsByColumnId()[_._]) == null
                    ? void 0
                    : _.getValue();
                return typeof _ == "string" || typeof _ == "number";
              },
            }),
            createColumn: (_, _) => {
              _.getCanGlobalFilter = () => {
                var _, _, _, _;
                return (
                  ((_ = _.columnDef.enableGlobalFilter) != null ? _ : !0) &&
                  ((_ = _.options.enableGlobalFilter) != null ? _ : !0) &&
                  ((_ = _.options.enableFilters) != null ? _ : !0) &&
                  ((_ =
                    _.options.getColumnCanGlobalFilter == null
                      ? void 0
                      : _.options.getColumnCanGlobalFilter(_)) != null
                    ? _
                    : !0) &&
                  !!_.accessorFn
                );
              };
            },
            createTable: (_) => {
              (_.getGlobalAutoFilterFn = () => _.includesString),
                (_.getGlobalFilterFn = () => {
                  var _, _;
                  const { globalFilterFn: _ } = _.options;
                  return _(_)
                    ? _
                    : _ === "auto"
                      ? _.getGlobalAutoFilterFn()
                      : (_ =
                            (_ = _.options.filterFns) == null
                              ? void 0
                              : _[_]) != null
                        ? _
                        : _[_];
                }),
                (_.setGlobalFilter = (_) => {
                  _.options.onGlobalFilterChange == null ||
                    _.options.onGlobalFilterChange(_);
                }),
                (_.resetGlobalFilter = (_) => {
                  _.setGlobalFilter(_ ? void 0 : _.initialState.globalFilter);
                });
            },
          },
          _ = {
            getInitialState: (_) => ({
              expanded: {},
              ..._,
            }),
            getDefaultOptions: (_) => ({
              onExpandedChange: _("expanded", _),
              paginateExpandedRows: !0,
            }),
            createTable: (_) => {
              let _ = !1,
                _ = !1;
              (_._autoResetExpanded = () => {
                var _, _;
                if (!_) {
                  _._queue(() => {
                    _ = !0;
                  });
                  return;
                }
                if (
                  (_ =
                    (_ = _.options.autoResetAll) != null
                      ? _
                      : _.options.autoResetExpanded) != null
                    ? _
                    : !_.options.manualExpanding
                ) {
                  if (_) return;
                  (_ = !0),
                    _._queue(() => {
                      _.resetExpanded(), (_ = !1);
                    });
                }
              }),
                (_.setExpanded = (_) =>
                  _.options.onExpandedChange == null
                    ? void 0
                    : _.options.onExpandedChange(_)),
                (_.toggleAllRowsExpanded = (_) => {
                  (_ ?? !_.getIsAllRowsExpanded())
                    ? _.setExpanded(!0)
                    : _.setExpanded({});
                }),
                (_.resetExpanded = (_) => {
                  var _, _;
                  _.setExpanded(
                    _
                      ? {}
                      : (_ =
                            (_ = _.initialState) == null
                              ? void 0
                              : _.expanded) != null
                        ? _
                        : {},
                  );
                }),
                (_.getCanSomeRowsExpand = () =>
                  _.getPrePaginationRowModel().flatRows.some((_) =>
                    _.getCanExpand(),
                  )),
                (_.getToggleAllRowsExpandedHandler = () => (_) => {
                  _.persist == null || _.persist(), _.toggleAllRowsExpanded();
                }),
                (_.getIsSomeRowsExpanded = () => {
                  const _ = _.getState().expanded;
                  return _ === !0 || Object.values(_).some(Boolean);
                }),
                (_.getIsAllRowsExpanded = () => {
                  const _ = _.getState().expanded;
                  return typeof _ == "boolean"
                    ? _ === !0
                    : !(
                        !Object.keys(_).length ||
                        _.getRowModel().flatRows.some((_) => !_.getIsExpanded())
                      );
                }),
                (_.getExpandedDepth = () => {
                  let _ = 0;
                  return (
                    (_.getState().expanded === !0
                      ? Object.keys(_.getRowModel().rowsById)
                      : Object.keys(_.getState().expanded)
                    ).forEach((_) => {
                      const _ = _.split(".");
                      _ = Math.max(_, _.length);
                    }),
                    _
                  );
                }),
                (_.getPreExpandedRowModel = () => _.getSortedRowModel()),
                (_.getExpandedRowModel = () => (
                  !_._getExpandedRowModel &&
                    _.options.getExpandedRowModel &&
                    (_._getExpandedRowModel = _.options.getExpandedRowModel(_)),
                  _.options.manualExpanding || !_._getExpandedRowModel
                    ? _.getPreExpandedRowModel()
                    : _._getExpandedRowModel()
                ));
            },
            createRow: (_, _) => {
              (_.toggleExpanded = (_) => {
                _.setExpanded((_) => {
                  var _;
                  const _ = _ === !0 ? !0 : !!(_ != null && _[_._]);
                  let _ = {};
                  if (
                    (_ === !0
                      ? Object.keys(_.getRowModel().rowsById).forEach((_) => {
                          _[_] = !0;
                        })
                      : (_ = _),
                    (_ = (_ = _) != null ? _ : !_),
                    !_ && _)
                  )
                    return {
                      ..._,
                      [_._]: !0,
                    };
                  if (_ && !_) {
                    const { [_._]: _, ..._ } = _;
                    return _;
                  }
                  return _;
                });
              }),
                (_.getIsExpanded = () => {
                  var _;
                  const _ = _.getState().expanded;
                  return !!((_ =
                    _.options.getIsRowExpanded == null
                      ? void 0
                      : _.options.getIsRowExpanded(_)) != null
                    ? _
                    : _ === !0 || _?.[_._]);
                }),
                (_.getCanExpand = () => {
                  var _, _, _;
                  return (_ =
                    _.options.getRowCanExpand == null
                      ? void 0
                      : _.options.getRowCanExpand(_)) != null
                    ? _
                    : ((_ = _.options.enableExpanding) != null ? _ : !0) &&
                        !!((_ = _.subRows) != null && _.length);
                }),
                (_.getIsAllParentsExpanded = () => {
                  let _ = !0,
                    _ = _;
                  for (; _ && _.parentId; )
                    (_ = _.getRow(_.parentId, !0)), (_ = _.getIsExpanded());
                  return _;
                }),
                (_.getToggleExpandedHandler = () => {
                  const _ = _.getCanExpand();
                  return () => {
                    _ && _.toggleExpanded();
                  };
                });
            },
          },
          _ = 0,
          _ = 10,
          _ = () => ({
            pageIndex: _,
            pageSize: _,
          }),
          _ = {
            getInitialState: (_) => ({
              ..._,
              pagination: {
                ..._(),
                ..._?.pagination,
              },
            }),
            getDefaultOptions: (_) => ({
              onPaginationChange: _("pagination", _),
            }),
            createTable: (_) => {
              let _ = !1,
                _ = !1;
              (_._autoResetPageIndex = () => {
                var _, _;
                if (!_) {
                  _._queue(() => {
                    _ = !0;
                  });
                  return;
                }
                if (
                  (_ =
                    (_ = _.options.autoResetAll) != null
                      ? _
                      : _.options.autoResetPageIndex) != null
                    ? _
                    : !_.options.manualPagination
                ) {
                  if (_) return;
                  (_ = !0),
                    _._queue(() => {
                      _.resetPageIndex(), (_ = !1);
                    });
                }
              }),
                (_.setPagination = (_) => {
                  const _ = (_) => _(_, _);
                  return _.options.onPaginationChange == null
                    ? void 0
                    : _.options.onPaginationChange(_);
                }),
                (_.resetPagination = (_) => {
                  var _;
                  _.setPagination(
                    _ ? _() : (_ = _.initialState.pagination) != null ? _ : _(),
                  );
                }),
                (_.setPageIndex = (_) => {
                  _.setPagination((_) => {
                    let _ = _(_, _.pageIndex);
                    const _ =
                      typeof _.options.pageCount > "u" ||
                      _.options.pageCount === -1
                        ? Number.MAX_SAFE_INTEGER
                        : _.options.pageCount - 1;
                    return (
                      (_ = Math.max(0, Math.min(_, _))),
                      {
                        ..._,
                        pageIndex: _,
                      }
                    );
                  });
                }),
                (_.resetPageIndex = (_) => {
                  var _, _;
                  _.setPageIndex(
                    _
                      ? _
                      : (_ =
                            (_ = _.initialState) == null ||
                            (_ = _.pagination) == null
                              ? void 0
                              : _.pageIndex) != null
                        ? _
                        : _,
                  );
                }),
                (_.resetPageSize = (_) => {
                  var _, _;
                  _.setPageSize(
                    _
                      ? _
                      : (_ =
                            (_ = _.initialState) == null ||
                            (_ = _.pagination) == null
                              ? void 0
                              : _.pageSize) != null
                        ? _
                        : _,
                  );
                }),
                (_.setPageSize = (_) => {
                  _.setPagination((_) => {
                    const _ = Math.max(1, _(_, _.pageSize)),
                      _ = _.pageSize * _.pageIndex,
                      _ = Math.floor(_ / _);
                    return {
                      ..._,
                      pageIndex: _,
                      pageSize: _,
                    };
                  });
                }),
                (_.setPageCount = (_) =>
                  _.setPagination((_) => {
                    var _;
                    let _ = _(_, (_ = _.options.pageCount) != null ? _ : -1);
                    return (
                      typeof _ == "number" && (_ = Math.max(-1, _)),
                      {
                        ..._,
                        pageCount: _,
                      }
                    );
                  })),
                (_.getPageOptions = _(
                  () => [_.getPageCount()],
                  (_) => {
                    let _ = [];
                    return (
                      _ &&
                        _ > 0 &&
                        (_ = [...new Array(_)].fill(null).map((_, _) => _)),
                      _
                    );
                  },
                  _(_.options, "debugTable", "getPageOptions"),
                )),
                (_.getCanPreviousPage = () =>
                  _.getState().pagination.pageIndex > 0),
                (_.getCanNextPage = () => {
                  const { pageIndex: _ } = _.getState().pagination,
                    _ = _.getPageCount();
                  return _ === -1 ? !0 : _ === 0 ? !1 : _ < _ - 1;
                }),
                (_.previousPage = () => _.setPageIndex((_) => _ - 1)),
                (_.nextPage = () => _.setPageIndex((_) => _ + 1)),
                (_.firstPage = () => _.setPageIndex(0)),
                (_.lastPage = () => _.setPageIndex(_.getPageCount() - 1)),
                (_.getPrePaginationRowModel = () => _.getExpandedRowModel()),
                (_.getPaginationRowModel = () => (
                  !_._getPaginationRowModel &&
                    _.options.getPaginationRowModel &&
                    (_._getPaginationRowModel =
                      _.options.getPaginationRowModel(_)),
                  _.options.manualPagination || !_._getPaginationRowModel
                    ? _.getPrePaginationRowModel()
                    : _._getPaginationRowModel()
                )),
                (_.getPageCount = () => {
                  var _;
                  return (_ = _.options.pageCount) != null
                    ? _
                    : Math.ceil(
                        _.getRowCount() / _.getState().pagination.pageSize,
                      );
                }),
                (_.getRowCount = () => {
                  var _;
                  return (_ = _.options.rowCount) != null
                    ? _
                    : _.getPrePaginationRowModel().rows.length;
                });
            },
          },
          _ = () => ({
            top: [],
            bottom: [],
          }),
          _ = {
            getInitialState: (_) => ({
              rowPinning: _(),
              ..._,
            }),
            getDefaultOptions: (_) => ({
              onRowPinningChange: _("rowPinning", _),
            }),
            createRow: (_, _) => {
              (_.pin = (_, _, _) => {
                const _ = _
                    ? _.getLeafRows().map((_) => {
                        let { _: _ } = _;
                        return _;
                      })
                    : [],
                  _ = _
                    ? _.getParentRows().map((_) => {
                        let { _: _ } = _;
                        return _;
                      })
                    : [],
                  _ = new Set([..._, _._, ..._]);
                _.setRowPinning((_) => {
                  var _, _;
                  if (_ === "bottom") {
                    var _, _;
                    return {
                      top: ((_ = _?.top) != null ? _ : []).filter(
                        (_) => !(_ != null && _.has(_)),
                      ),
                      bottom: [
                        ...((_ = _?.bottom) != null ? _ : []).filter(
                          (_) => !(_ != null && _.has(_)),
                        ),
                        ...Array.from(_),
                      ],
                    };
                  }
                  if (_ === "top") {
                    var _, _;
                    return {
                      top: [
                        ...((_ = _?.top) != null ? _ : []).filter(
                          (_) => !(_ != null && _.has(_)),
                        ),
                        ...Array.from(_),
                      ],
                      bottom: ((_ = _?.bottom) != null ? _ : []).filter(
                        (_) => !(_ != null && _.has(_)),
                      ),
                    };
                  }
                  return {
                    top: ((_ = _?.top) != null ? _ : []).filter(
                      (_) => !(_ != null && _.has(_)),
                    ),
                    bottom: ((_ = _?.bottom) != null ? _ : []).filter(
                      (_) => !(_ != null && _.has(_)),
                    ),
                  };
                });
              }),
                (_.getCanPin = () => {
                  var _;
                  const { enableRowPinning: _, enablePinning: _ } = _.options;
                  return typeof _ == "function"
                    ? _(_)
                    : (_ = _ ?? _) != null
                      ? _
                      : !0;
                }),
                (_.getIsPinned = () => {
                  const _ = [_._],
                    { top: _, bottom: _ } = _.getState().rowPinning,
                    _ = _.some((_) => _?.includes(_)),
                    _ = _.some((_) => _?.includes(_));
                  return _ ? "top" : _ ? "bottom" : !1;
                }),
                (_.getPinnedIndex = () => {
                  var _, _;
                  const _ = _.getIsPinned();
                  if (!_) return -1;
                  const _ =
                    (_ = _ === "top" ? _.getTopRows() : _.getBottomRows()) ==
                    null
                      ? void 0
                      : _.map((_) => {
                          let { _: _ } = _;
                          return _;
                        });
                  return (_ = _?.indexOf(_._)) != null ? _ : -1;
                });
            },
            createTable: (_) => {
              (_.setRowPinning = (_) =>
                _.options.onRowPinningChange == null
                  ? void 0
                  : _.options.onRowPinningChange(_)),
                (_.resetRowPinning = (_) => {
                  var _, _;
                  return _.setRowPinning(
                    _
                      ? _()
                      : (_ =
                            (_ = _.initialState) == null
                              ? void 0
                              : _.rowPinning) != null
                        ? _
                        : _(),
                  );
                }),
                (_.getIsSomeRowsPinned = (_) => {
                  var _;
                  const _ = _.getState().rowPinning;
                  if (!_) {
                    var _, _;
                    return !!(
                      ((_ = _.top) != null && _.length) ||
                      ((_ = _.bottom) != null && _.length)
                    );
                  }
                  return !!((_ = _[_]) != null && _.length);
                }),
                (_._getPinnedRows = (_, _, _) => {
                  var _;
                  return (
                    (_ = _.options.keepPinnedRows) == null || _
                      ? (_ ?? []).map((_) => {
                          const _ = _.getRow(_, !0);
                          return _.getIsAllParentsExpanded() ? _ : null;
                        })
                      : (_ ?? []).map((_) => _.find((_) => _._ === _))
                  )
                    .filter(Boolean)
                    .map((_) => ({
                      ..._,
                      position: _,
                    }));
                }),
                (_.getTopRows = _(
                  () => [_.getRowModel().rows, _.getState().rowPinning.top],
                  (_, _) => _._getPinnedRows(_, _, "top"),
                  _(_.options, "debugRows", "getTopRows"),
                )),
                (_.getBottomRows = _(
                  () => [_.getRowModel().rows, _.getState().rowPinning.bottom],
                  (_, _) => _._getPinnedRows(_, _, "bottom"),
                  _(_.options, "debugRows", "getBottomRows"),
                )),
                (_.getCenterRows = _(
                  () => [
                    _.getRowModel().rows,
                    _.getState().rowPinning.top,
                    _.getState().rowPinning.bottom,
                  ],
                  (_, _, _) => {
                    const _ = new Set([...(_ ?? []), ...(_ ?? [])]);
                    return _.filter((_) => !_.has(_._));
                  },
                  _(_.options, "debugRows", "getCenterRows"),
                ));
            },
          },
          _ = {
            getInitialState: (_) => ({
              rowSelection: {},
              ..._,
            }),
            getDefaultOptions: (_) => ({
              onRowSelectionChange: _("rowSelection", _),
              enableRowSelection: !0,
              enableMultiRowSelection: !0,
              enableSubRowSelection: !0,
            }),
            createTable: (_) => {
              (_.setRowSelection = (_) =>
                _.options.onRowSelectionChange == null
                  ? void 0
                  : _.options.onRowSelectionChange(_)),
                (_.resetRowSelection = (_) => {
                  var _;
                  return _.setRowSelection(
                    _ ? {} : (_ = _.initialState.rowSelection) != null ? _ : {},
                  );
                }),
                (_.toggleAllRowsSelected = (_) => {
                  _.setRowSelection((_) => {
                    _ = typeof _ < "u" ? _ : !_.getIsAllRowsSelected();
                    const _ = {
                        ..._,
                      },
                      _ = _.getPreGroupedRowModel().flatRows;
                    return (
                      _
                        ? _.forEach((_) => {
                            _.getCanSelect() && (_[_._] = !0);
                          })
                        : _.forEach((_) => {
                            delete _[_._];
                          }),
                      _
                    );
                  });
                }),
                (_.toggleAllPageRowsSelected = (_) =>
                  _.setRowSelection((_) => {
                    const _ =
                        typeof _ < "u" ? _ : !_.getIsAllPageRowsSelected(),
                      _ = {
                        ..._,
                      };
                    return (
                      _.getRowModel().rows.forEach((_) => {
                        _(_, _._, _, !0, _);
                      }),
                      _
                    );
                  })),
                (_.getPreSelectedRowModel = () => _.getCoreRowModel()),
                (_.getSelectedRowModel = _(
                  () => [_.getState().rowSelection, _.getCoreRowModel()],
                  (_, _) =>
                    Object.keys(_).length
                      ? _(_, _)
                      : {
                          rows: [],
                          flatRows: [],
                          rowsById: {},
                        },
                  _(_.options, "debugTable", "getSelectedRowModel"),
                )),
                (_.getFilteredSelectedRowModel = _(
                  () => [_.getState().rowSelection, _.getFilteredRowModel()],
                  (_, _) =>
                    Object.keys(_).length
                      ? _(_, _)
                      : {
                          rows: [],
                          flatRows: [],
                          rowsById: {},
                        },
                  _(_.options, "debugTable", "getFilteredSelectedRowModel"),
                )),
                (_.getGroupedSelectedRowModel = _(
                  () => [_.getState().rowSelection, _.getSortedRowModel()],
                  (_, _) =>
                    Object.keys(_).length
                      ? _(_, _)
                      : {
                          rows: [],
                          flatRows: [],
                          rowsById: {},
                        },
                  _(_.options, "debugTable", "getGroupedSelectedRowModel"),
                )),
                (_.getIsAllRowsSelected = () => {
                  const _ = _.getFilteredRowModel().flatRows,
                    { rowSelection: _ } = _.getState();
                  let _ = !!(_.length && Object.keys(_).length);
                  return (
                    _ && _.some((_) => _.getCanSelect() && !_[_._]) && (_ = !1),
                    _
                  );
                }),
                (_.getIsAllPageRowsSelected = () => {
                  const _ = _.getPaginationRowModel().flatRows.filter((_) =>
                      _.getCanSelect(),
                    ),
                    { rowSelection: _ } = _.getState();
                  let _ = !!_.length;
                  return _ && _.some((_) => !_[_._]) && (_ = !1), _;
                }),
                (_.getIsSomeRowsSelected = () => {
                  var _;
                  const _ = Object.keys(
                    (_ = _.getState().rowSelection) != null ? _ : {},
                  ).length;
                  return _ > 0 && _ < _.getFilteredRowModel().flatRows.length;
                }),
                (_.getIsSomePageRowsSelected = () => {
                  const _ = _.getPaginationRowModel().flatRows;
                  return _.getIsAllPageRowsSelected()
                    ? !1
                    : _.filter((_) => _.getCanSelect()).some(
                        (_) => _.getIsSelected() || _.getIsSomeSelected(),
                      );
                }),
                (_.getToggleAllRowsSelectedHandler = () => (_) => {
                  _.toggleAllRowsSelected(_.target.checked);
                }),
                (_.getToggleAllPageRowsSelectedHandler = () => (_) => {
                  _.toggleAllPageRowsSelected(_.target.checked);
                });
            },
            createRow: (_, _) => {
              (_.toggleSelected = (_, _) => {
                const _ = _.getIsSelected();
                _.setRowSelection((_) => {
                  var _;
                  if (
                    ((_ = typeof _ < "u" ? _ : !_), _.getCanSelect() && _ === _)
                  )
                    return _;
                  const _ = {
                    ..._,
                  };
                  return (
                    _(_, _._, _, (_ = _?.selectChildren) != null ? _ : !0, _), _
                  );
                });
              }),
                (_.getIsSelected = () => {
                  const { rowSelection: _ } = _.getState();
                  return _(_, _);
                }),
                (_.getIsSomeSelected = () => {
                  const { rowSelection: _ } = _.getState();
                  return _(_, _) === "some";
                }),
                (_.getIsAllSubRowsSelected = () => {
                  const { rowSelection: _ } = _.getState();
                  return _(_, _) === "all";
                }),
                (_.getCanSelect = () => {
                  var _;
                  return typeof _.options.enableRowSelection == "function"
                    ? _.options.enableRowSelection(_)
                    : (_ = _.options.enableRowSelection) != null
                      ? _
                      : !0;
                }),
                (_.getCanSelectSubRows = () => {
                  var _;
                  return typeof _.options.enableSubRowSelection == "function"
                    ? _.options.enableSubRowSelection(_)
                    : (_ = _.options.enableSubRowSelection) != null
                      ? _
                      : !0;
                }),
                (_.getCanMultiSelect = () => {
                  var _;
                  return typeof _.options.enableMultiRowSelection == "function"
                    ? _.options.enableMultiRowSelection(_)
                    : (_ = _.options.enableMultiRowSelection) != null
                      ? _
                      : !0;
                }),
                (_.getToggleSelectedHandler = () => {
                  const _ = _.getCanSelect();
                  return (_) => {
                    var _;
                    _ &&
                      _.toggleSelected(
                        (_ = _.target) == null ? void 0 : _.checked,
                      );
                  };
                });
            },
          },
          _ = (_, _, _, _, _) => {
            var _;
            const _ = _.getRow(_, !0);
            _
              ? (_.getCanMultiSelect() ||
                  Object.keys(_).forEach((_) => delete _[_]),
                _.getCanSelect() && (_[_] = !0))
              : delete _[_],
              _ &&
                (_ = _.subRows) != null &&
                _.length &&
                _.getCanSelectSubRows() &&
                _.subRows.forEach((_) => _(_, _._, _, _, _));
          };
        function _(_, _) {
          const _ = _.getState().rowSelection,
            _ = [],
            _ = {},
            _ = function (_, _) {
              return _.map((_) => {
                var _;
                const _ = _(_, _);
                if (
                  (_ && (_.push(_), (_[_._] = _)),
                  (_ = _.subRows) != null &&
                    _.length &&
                    (_ = {
                      ..._,
                      subRows: _(_.subRows),
                    }),
                  _)
                )
                  return _;
              }).filter(Boolean);
            };
          return {
            rows: _(_.rows),
            flatRows: _,
            rowsById: _,
          };
        }
        function _(_, _) {
          var _;
          return (_ = _[_._]) != null ? _ : !1;
        }
        function _(_, _, _) {
          var _;
          if (!((_ = _.subRows) != null && _.length)) return !1;
          let _ = !0,
            _ = !1;
          return (
            _.subRows.forEach((_) => {
              if (
                !(_ && !_) &&
                (_.getCanSelect() && (_(_, _) ? (_ = !0) : (_ = !1)),
                _.subRows && _.subRows.length)
              ) {
                const _ = _(_, _);
                _ === "all" ? (_ = !0) : (_ === "some" && (_ = !0), (_ = !1));
              }
            }),
            _ ? "all" : _ ? "some" : !1
          );
        }
        const _ = /([0-9]+)/gm,
          _ = (_, _, _) =>
            _(_(_.getValue(_)).toLowerCase(), _(_.getValue(_)).toLowerCase()),
          _ = (_, _, _) => _(_(_.getValue(_)), _(_.getValue(_))),
          _ = (_, _, _) =>
            _(_(_.getValue(_)).toLowerCase(), _(_.getValue(_)).toLowerCase()),
          _ = (_, _, _) => _(_(_.getValue(_)), _(_.getValue(_))),
          _ = (_, _, _) => {
            const _ = _.getValue(_),
              _ = _.getValue(_);
            return _ > _ ? 1 : _ < _ ? -1 : 0;
          },
          _ = (_, _, _) => _(_.getValue(_), _.getValue(_));
        function _(_, _) {
          return _ === _ ? 0 : _ > _ ? 1 : -1;
        }
        function _(_) {
          return typeof _ == "number"
            ? isNaN(_) || _ === 1 / 0 || _ === -1 / 0
              ? ""
              : String(_)
            : typeof _ == "string"
              ? _
              : "";
        }
        function _(_, _) {
          const _ = _.split(_).filter(Boolean),
            _ = _.split(_).filter(Boolean);
          for (; _.length && _.length; ) {
            const _ = _.shift(),
              _ = _.shift(),
              _ = parseInt(_, 10),
              _ = parseInt(_, 10),
              _ = [_, _].sort();
            if (isNaN(_[0])) {
              if (_ > _) return 1;
              if (_ > _) return -1;
              continue;
            }
            if (isNaN(_[1])) return isNaN(_) ? -1 : 1;
            if (_ > _) return 1;
            if (_ > _) return -1;
          }
          return _.length - _.length;
        }
        const _ = {
            alphanumeric: _,
            alphanumericCaseSensitive: _,
            text: _,
            textCaseSensitive: _,
            datetime: _,
            basic: _,
          },
          _ = [
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            {
              getInitialState: (_) => ({
                sorting: [],
                ..._,
              }),
              getDefaultColumnDef: () => ({
                sortingFn: "auto",
                sortUndefined: 1,
              }),
              getDefaultOptions: (_) => ({
                onSortingChange: _("sorting", _),
                isMultiSortEvent: (_) => _.shiftKey,
              }),
              createColumn: (_, _) => {
                (_.getAutoSortingFn = () => {
                  const _ = _.getFilteredRowModel().flatRows.slice(10);
                  let _ = !1;
                  for (const _ of _) {
                    const _ = _?.getValue(_._);
                    if (Object.prototype.toString.call(_) === "[object Date]")
                      return _.datetime;
                    if (
                      typeof _ == "string" &&
                      ((_ = !0), _.split(_).length > 1)
                    )
                      return _.alphanumeric;
                  }
                  return _ ? _.text : _.basic;
                }),
                  (_.getAutoSortDir = () => {
                    const _ = _.getFilteredRowModel().flatRows[0];
                    return typeof _?.getValue(_._) == "string" ? "asc" : "desc";
                  }),
                  (_.getSortingFn = () => {
                    var _, _;
                    if (!_) throw new Error();
                    return _(_.columnDef.sortingFn)
                      ? _.columnDef.sortingFn
                      : _.columnDef.sortingFn === "auto"
                        ? _.getAutoSortingFn()
                        : (_ =
                              (_ = _.options.sortingFns) == null
                                ? void 0
                                : _[_.columnDef.sortingFn]) != null
                          ? _
                          : _[_.columnDef.sortingFn];
                  }),
                  (_.toggleSorting = (_, _) => {
                    const _ = _.getNextSortingOrder(),
                      _ = typeof _ < "u" && _ !== null;
                    _.setSorting((_) => {
                      const _ = _?.find((_) => _._ === _._),
                        _ = _?.findIndex((_) => _._ === _._);
                      let _ = [],
                        _,
                        _ = _ ? _ : _ === "desc";
                      if (
                        (_ != null && _.length && _.getCanMultiSort() && _
                          ? _
                            ? (_ = "toggle")
                            : (_ = "add")
                          : _ != null && _.length && _ !== _.length - 1
                            ? (_ = "replace")
                            : _
                              ? (_ = "toggle")
                              : (_ = "replace"),
                        _ === "toggle" && (_ || _ || (_ = "remove")),
                        _ === "add")
                      ) {
                        var _;
                        (_ = [
                          ..._,
                          {
                            _: _._,
                            desc: _,
                          },
                        ]),
                          _.splice(
                            0,
                            _.length -
                              ((_ = _.options.maxMultiSortColCount) != null
                                ? _
                                : Number.MAX_SAFE_INTEGER),
                          );
                      } else
                        _ === "toggle"
                          ? (_ = _.map((_) =>
                              _._ === _._
                                ? {
                                    ..._,
                                    desc: _,
                                  }
                                : _,
                            ))
                          : _ === "remove"
                            ? (_ = _.filter((_) => _._ !== _._))
                            : (_ = [
                                {
                                  _: _._,
                                  desc: _,
                                },
                              ]);
                      return _;
                    });
                  }),
                  (_.getFirstSortDir = () => {
                    var _, _;
                    return (
                      (_ =
                        (_ = _.columnDef.sortDescFirst) != null
                          ? _
                          : _.options.sortDescFirst) != null
                        ? _
                        : _.getAutoSortDir() === "desc"
                    )
                      ? "desc"
                      : "asc";
                  }),
                  (_.getNextSortingOrder = (_) => {
                    var _, _;
                    const _ = _.getFirstSortDir(),
                      _ = _.getIsSorted();
                    return _
                      ? _ !== _ &&
                        ((_ = _.options.enableSortingRemoval) == null || _) &&
                        (!(_ && (_ = _.options.enableMultiRemove) != null) || _)
                        ? !1
                        : _ === "desc"
                          ? "asc"
                          : "desc"
                      : _;
                  }),
                  (_.getCanSort = () => {
                    var _, _;
                    return (
                      ((_ = _.columnDef.enableSorting) != null ? _ : !0) &&
                      ((_ = _.options.enableSorting) != null ? _ : !0) &&
                      !!_.accessorFn
                    );
                  }),
                  (_.getCanMultiSort = () => {
                    var _, _;
                    return (_ =
                      (_ = _.columnDef.enableMultiSort) != null
                        ? _
                        : _.options.enableMultiSort) != null
                      ? _
                      : !!_.accessorFn;
                  }),
                  (_.getIsSorted = () => {
                    var _;
                    const _ =
                      (_ = _.getState().sorting) == null
                        ? void 0
                        : _.find((_) => _._ === _._);
                    return _ ? (_.desc ? "desc" : "asc") : !1;
                  }),
                  (_.getSortIndex = () => {
                    var _, _;
                    return (_ =
                      (_ = _.getState().sorting) == null
                        ? void 0
                        : _.findIndex((_) => _._ === _._)) != null
                      ? _
                      : -1;
                  }),
                  (_.clearSorting = () => {
                    _.setSorting((_) =>
                      _ != null && _.length ? _.filter((_) => _._ !== _._) : [],
                    );
                  }),
                  (_.getToggleSortingHandler = () => {
                    const _ = _.getCanSort();
                    return (_) => {
                      _ &&
                        (_.persist == null || _.persist(),
                        _.toggleSorting == null ||
                          _.toggleSorting(
                            void 0,
                            _.getCanMultiSort()
                              ? _.options.isMultiSortEvent == null
                                ? void 0
                                : _.options.isMultiSortEvent(_)
                              : !1,
                          ));
                    };
                  });
              },
              createTable: (_) => {
                (_.setSorting = (_) =>
                  _.options.onSortingChange == null
                    ? void 0
                    : _.options.onSortingChange(_)),
                  (_.resetSorting = (_) => {
                    var _, _;
                    _.setSorting(
                      _
                        ? []
                        : (_ =
                              (_ = _.initialState) == null
                                ? void 0
                                : _.sorting) != null
                          ? _
                          : [],
                    );
                  }),
                  (_.getPreSortedRowModel = () => _.getGroupedRowModel()),
                  (_.getSortedRowModel = () => (
                    !_._getSortedRowModel &&
                      _.options.getSortedRowModel &&
                      (_._getSortedRowModel = _.options.getSortedRowModel(_)),
                    _.options.manualSorting || !_._getSortedRowModel
                      ? _.getPreSortedRowModel()
                      : _._getSortedRowModel()
                  ));
              },
            },
            _,
            _,
            _,
            _,
            _,
            _,
          ];
        function _(_) {
          var _, _;
          const _ = [..._, ...((_ = _._features) != null ? _ : [])];
          let _ = {
            _features: _,
          };
          const _ = _._features.reduce(
              (_, _) =>
                Object.assign(
                  _,
                  _.getDefaultOptions == null ? void 0 : _.getDefaultOptions(_),
                ),
              {},
            ),
            _ = (_) =>
              _.options.mergeOptions
                ? _.options.mergeOptions(_, _)
                : {
                    ..._,
                    ..._,
                  };
          let _ = {
            ...{},
            ...((_ = _.initialState) != null ? _ : {}),
          };
          _._features.forEach((_) => {
            var _;
            _ =
              (_ = _.getInitialState == null ? void 0 : _.getInitialState(_)) !=
              null
                ? _
                : _;
          });
          const _ = [];
          let _ = !1;
          const _ = {
            _features: _,
            options: {
              ..._,
              ..._,
            },
            initialState: _,
            _queue: (_) => {
              _.push(_),
                _ ||
                  ((_ = !0),
                  Promise.resolve()
                    .then(() => {
                      for (; _.length; ) _.shift()();
                      _ = !1;
                    })
                    .catch((_) =>
                      setTimeout(() => {
                        throw _;
                      }),
                    ));
            },
            reset: () => {
              _.setState(_.initialState);
            },
            setOptions: (_) => {
              const _ = _(_, _.options);
              _.options = _(_);
            },
            getState: () => _.options.state,
            setState: (_) => {
              _.options.onStateChange == null || _.options.onStateChange(_);
            },
            _getRowId: (_, _, _) => {
              var _;
              return (_ =
                _.options.getRowId == null
                  ? void 0
                  : _.options.getRowId(_, _, _)) != null
                ? _
                : `${_ ? [_._, _].join(".") : _}`;
            },
            getCoreRowModel: () => (
              _._getCoreRowModel ||
                (_._getCoreRowModel = _.options.getCoreRowModel(_)),
              _._getCoreRowModel()
            ),
            getRowModel: () => _.getPaginationRowModel(),
            getRow: (_, _) => {
              let _ = (_ ? _.getPrePaginationRowModel() : _.getRowModel())
                .rowsById[_];
              if (!_ && ((_ = _.getCoreRowModel().rowsById[_]), !_))
                throw new Error();
              return _;
            },
            _getDefaultColumnDef: _(
              () => [_.options.defaultColumn],
              (_) => {
                var _;
                return (
                  (_ = (_ = _) != null ? _ : {}),
                  {
                    header: (_) => {
                      const _ = _.header.column.columnDef;
                      return _.accessorKey
                        ? _.accessorKey
                        : _.accessorFn
                          ? _._
                          : null;
                    },
                    cell: (_) => {
                      var _, _;
                      return (_ =
                        (_ = _.renderValue()) == null || _.toString == null
                          ? void 0
                          : _.toString()) != null
                        ? _
                        : null;
                    },
                    ..._._features.reduce(
                      (_, _) =>
                        Object.assign(
                          _,
                          _.getDefaultColumnDef == null
                            ? void 0
                            : _.getDefaultColumnDef(),
                        ),
                      {},
                    ),
                    ..._,
                  }
                );
              },
              _(_, "debugColumns", "_getDefaultColumnDef"),
            ),
            _getColumnDefs: () => _.options.columns,
            getAllColumns: _(
              () => [_._getColumnDefs()],
              (_) => {
                const _ = function (_, _, _) {
                  return (
                    _ === void 0 && (_ = 0),
                    _.map((_) => {
                      const _ = _(_, _, _, _),
                        _ = _;
                      return (
                        (_.columns = _.columns ? _(_.columns, _, _ + 1) : []), _
                      );
                    })
                  );
                };
                return _(_);
              },
              _(_, "debugColumns", "getAllColumns"),
            ),
            getAllFlatColumns: _(
              () => [_.getAllColumns()],
              (_) => _.flatMap((_) => _.getFlatColumns()),
              _(_, "debugColumns", "getAllFlatColumns"),
            ),
            _getAllFlatColumnsById: _(
              () => [_.getAllFlatColumns()],
              (_) => _.reduce((_, _) => ((_[_._] = _), _), {}),
              _(_, "debugColumns", "getAllFlatColumnsById"),
            ),
            getAllLeafColumns: _(
              () => [_.getAllColumns(), _._getOrderColumnsFn()],
              (_, _) => {
                let _ = _.flatMap((_) => _.getLeafColumns());
                return _(_);
              },
              _(_, "debugColumns", "getAllLeafColumns"),
            ),
            getColumn: (_) => _._getAllFlatColumnsById()[_],
          };
          Object.assign(_, _);
          for (let _ = 0; _ < _._features.length; _++) {
            const _ = _._features[_];
            _ == null || _.createTable == null || _.createTable(_);
          }
          return _;
        }
        function _() {
          return (_) =>
            _(
              () => [_.options.data],
              (_) => {
                const _ = {
                    rows: [],
                    flatRows: [],
                    rowsById: {},
                  },
                  _ = function (_, _, _) {
                    _ === void 0 && (_ = 0);
                    const _ = [];
                    for (let _ = 0; _ < _.length; _++) {
                      const _ = _(
                        _,
                        _._getRowId(_[_], _, _),
                        _[_],
                        _,
                        _,
                        void 0,
                        _?._,
                      );
                      if (
                        (_.flatRows.push(_),
                        (_.rowsById[_._] = _),
                        _.push(_),
                        _.options.getSubRows)
                      ) {
                        var _;
                        (_.originalSubRows = _.options.getSubRows(_[_], _)),
                          (_ = _.originalSubRows) != null &&
                            _.length &&
                            (_.subRows = _(_.originalSubRows, _ + 1, _));
                      }
                    }
                    return _;
                  };
                return (_.rows = _(_)), _;
              },
              _(_.options, "debugTable", "getRowModel", () =>
                _._autoResetPageIndex(),
              ),
            );
        }
        function _() {
          return (_) =>
            _(
              () => [
                _.getState().expanded,
                _.getPreExpandedRowModel(),
                _.options.paginateExpandedRows,
              ],
              (_, _, _) =>
                !_.rows.length ||
                (_ !== !0 && !Object.keys(_ ?? {}).length) ||
                !_
                  ? _
                  : _(_),
              _(_.options, "debugTable", "getExpandedRowModel"),
            );
        }
        function _(_) {
          const _ = [],
            _ = (_) => {
              var _;
              _.push(_),
                (_ = _.subRows) != null &&
                  _.length &&
                  _.getIsExpanded() &&
                  _.subRows.forEach(_);
            };
          return (
            _.rows.forEach(_),
            {
              rows: _,
              flatRows: _.flatRows,
              rowsById: _.rowsById,
            }
          );
        }
        function _() {
          return (_, _) =>
            _(
              () => {
                var _;
                return [
                  (_ = _.getColumn(_)) == null
                    ? void 0
                    : _.getFacetedRowModel(),
                ];
              },
              (_) => {
                if (!_) return;
                const _ = _.flatRows
                  .flatMap((_) => {
                    var _;
                    return (_ = _.getUniqueValues(_)) != null ? _ : [];
                  })
                  .map(Number)
                  .filter((_) => !Number.isNaN(_));
                if (!_.length) return;
                let _ = _[0],
                  _ = _[_.length - 1];
                for (const _ of _) _ < _ ? (_ = _) : _ > _ && (_ = _);
                return [_, _];
              },
              _(_.options, "debugTable", "getFacetedMinMaxValues"),
            );
        }
        function _(_, _, _) {
          return _.options.filterFromLeafRows ? _(_, _, _) : _(_, _, _);
        }
        function _(_, _, _) {
          var _;
          const _ = [],
            _ = {},
            _ = (_ = _.options.maxLeafRowFilterDepth) != null ? _ : 100,
            _ = function (_, _) {
              _ === void 0 && (_ = 0);
              const _ = [];
              for (let _ = 0; _ < _.length; _++) {
                var _;
                let _ = _[_];
                const _ = _(
                  _,
                  _._,
                  _.original,
                  _.index,
                  _.depth,
                  void 0,
                  _.parentId,
                );
                if (
                  ((_.columnFilters = _.columnFilters),
                  (_ = _.subRows) != null && _.length && _ < _)
                ) {
                  if (
                    ((_.subRows = _(_.subRows, _ + 1)),
                    (_ = _),
                    _(_) && !_.subRows.length)
                  ) {
                    _.push(_), (_[_._] = _), _.push(_);
                    continue;
                  }
                  if (_(_) || _.subRows.length) {
                    _.push(_), (_[_._] = _), _.push(_);
                    continue;
                  }
                } else (_ = _), _(_) && (_.push(_), (_[_._] = _), _.push(_));
              }
              return _;
            };
          return {
            rows: _(_),
            flatRows: _,
            rowsById: _,
          };
        }
        function _(_, _, _) {
          var _;
          const _ = [],
            _ = {},
            _ = (_ = _.options.maxLeafRowFilterDepth) != null ? _ : 100,
            _ = function (_, _) {
              _ === void 0 && (_ = 0);
              const _ = [];
              for (let _ = 0; _ < _.length; _++) {
                let _ = _[_];
                if (_(_)) {
                  var _;
                  if ((_ = _.subRows) != null && _.length && _ < _) {
                    const _ = _(
                      _,
                      _._,
                      _.original,
                      _.index,
                      _.depth,
                      void 0,
                      _.parentId,
                    );
                    (_.subRows = _(_.subRows, _ + 1)), (_ = _);
                  }
                  _.push(_), _.push(_), (_[_._] = _);
                }
              }
              return _;
            };
          return {
            rows: _(_),
            flatRows: _,
            rowsById: _,
          };
        }
        function _() {
          return (_, _) =>
            _(
              () => [
                _.getPreFilteredRowModel(),
                _.getState().columnFilters,
                _.getState().globalFilter,
                _.getFilteredRowModel(),
              ],
              (_, _, _) => {
                if (!_.rows.length || (!(_ != null && _.length) && !_))
                  return _;
                const _ = [
                    ..._.map((_) => _._).filter((_) => _ !== _),
                    _ ? "__global__" : void 0,
                  ].filter(Boolean),
                  _ = (_) => {
                    for (let _ = 0; _ < _.length; _++)
                      if (_.columnFilters[_[_]] === !1) return !1;
                    return !0;
                  };
                return _(_.rows, _, _);
              },
              _(_.options, "debugTable", "getFacetedRowModel"),
            );
        }
        function _() {
          return (_, _) =>
            _(
              () => {
                var _;
                return [
                  (_ = _.getColumn(_)) == null
                    ? void 0
                    : _.getFacetedRowModel(),
                ];
              },
              (_) => {
                if (!_) return new Map();
                let _ = new Map();
                for (let _ = 0; _ < _.flatRows.length; _++) {
                  const _ = _.flatRows[_].getUniqueValues(_);
                  for (let _ = 0; _ < _.length; _++) {
                    const _ = _[_];
                    if (_.has(_)) {
                      var _;
                      _.set(_, ((_ = _.get(_)) != null ? _ : 0) + 1);
                    } else _.set(_, 1);
                  }
                }
                return _;
              },
              _(_.options, "debugTable", `getFacetedUniqueValues_${_}`),
            );
        }
        function _() {
          return (_) =>
            _(
              () => [
                _.getPreFilteredRowModel(),
                _.getState().columnFilters,
                _.getState().globalFilter,
              ],
              (_, _, _) => {
                if (!_.rows.length || (!(_ != null && _.length) && !_)) {
                  for (let _ = 0; _ < _.flatRows.length; _++)
                    (_.flatRows[_].columnFilters = {}),
                      (_.flatRows[_].columnFiltersMeta = {});
                  return _;
                }
                const _ = [],
                  _ = [];
                (_ ?? []).forEach((_) => {
                  var _;
                  const _ = _.getColumn(_._);
                  if (!_) return;
                  const _ = _.getFilterFn();
                  _ &&
                    _.push({
                      _: _._,
                      filterFn: _,
                      resolvedValue:
                        (_ =
                          _.resolveFilterValue == null
                            ? void 0
                            : _.resolveFilterValue(_.value)) != null
                          ? _
                          : _.value,
                    });
                });
                const _ = (_ ?? []).map((_) => _._),
                  _ = _.getGlobalFilterFn(),
                  _ = _.getAllLeafColumns().filter((_) =>
                    _.getCanGlobalFilter(),
                  );
                _ &&
                  _ &&
                  _.length &&
                  (_.push("__global__"),
                  _.forEach((_) => {
                    var _;
                    _.push({
                      _: _._,
                      filterFn: _,
                      resolvedValue:
                        (_ =
                          _.resolveFilterValue == null
                            ? void 0
                            : _.resolveFilterValue(_)) != null
                          ? _
                          : _,
                    });
                  }));
                let _, _;
                for (let _ = 0; _ < _.flatRows.length; _++) {
                  const _ = _.flatRows[_];
                  if (((_.columnFilters = {}), _.length))
                    for (let _ = 0; _ < _.length; _++) {
                      _ = _[_];
                      const _ = _._;
                      _.columnFilters[_] = _.filterFn(
                        _,
                        _,
                        _.resolvedValue,
                        (_) => {
                          _.columnFiltersMeta[_] = _;
                        },
                      );
                    }
                  if (_.length) {
                    for (let _ = 0; _ < _.length; _++) {
                      _ = _[_];
                      const _ = _._;
                      if (
                        _.filterFn(_, _, _.resolvedValue, (_) => {
                          _.columnFiltersMeta[_] = _;
                        })
                      ) {
                        _.columnFilters.__global__ = !0;
                        break;
                      }
                    }
                    _.columnFilters.__global__ !== !0 &&
                      (_.columnFilters.__global__ = !1);
                  }
                }
                const _ = (_) => {
                  for (let _ = 0; _ < _.length; _++)
                    if (_.columnFilters[_[_]] === !1) return !1;
                  return !0;
                };
                return _(_.rows, _, _);
              },
              _(_.options, "debugTable", "getFilteredRowModel", () =>
                _._autoResetPageIndex(),
              ),
            );
        }
        function _() {
          return (_) =>
            _(
              () => [_.getState().grouping, _.getPreGroupedRowModel()],
              (_, _) => {
                if (!_.rows.length || !_.length)
                  return (
                    _.rows.forEach((_) => {
                      (_.depth = 0), (_.parentId = void 0);
                    }),
                    _
                  );
                const _ = _.filter((_) => _.getColumn(_)),
                  _ = [],
                  _ = {},
                  _ = function (_, _, _) {
                    if ((_ === void 0 && (_ = 0), _ >= _.length))
                      return _.map(
                        (_) => (
                          (_.depth = _),
                          _.push(_),
                          (_[_._] = _),
                          _.subRows && (_.subRows = _(_.subRows, _ + 1, _._)),
                          _
                        ),
                      );
                    const _ = _[_],
                      _ = _(_, _);
                    return Array.from(_.entries()).map((_, _) => {
                      let [_, _] = _,
                        _ = `${_}:${_}`;
                      _ = _ ? `${_}>${_}` : _;
                      const _ = _(_, _ + 1, _);
                      _.forEach((_) => {
                        _.parentId = _;
                      });
                      const _ = _ ? _(_, (_) => _.subRows) : _,
                        _ = _(_, _, _[0].original, _, _, void 0, _);
                      return (
                        Object.assign(_, {
                          groupingColumnId: _,
                          groupingValue: _,
                          subRows: _,
                          leafRows: _,
                          getValue: (_) => {
                            if (_.includes(_)) {
                              if (_._valuesCache.hasOwnProperty(_))
                                return _._valuesCache[_];
                              if (_[0]) {
                                var _;
                                _._valuesCache[_] =
                                  (_ = _[0].getValue(_)) != null ? _ : void 0;
                              }
                              return _._valuesCache[_];
                            }
                            if (_._groupingValuesCache.hasOwnProperty(_))
                              return _._groupingValuesCache[_];
                            const _ = _.getColumn(_),
                              _ = _?.getAggregationFn();
                            if (_)
                              return (
                                (_._groupingValuesCache[_] = _(_, _, _)),
                                _._groupingValuesCache[_]
                              );
                          },
                        }),
                        _.forEach((_) => {
                          _.push(_), (_[_._] = _);
                        }),
                        _
                      );
                    });
                  },
                  _ = _(_.rows, 0);
                return (
                  _.forEach((_) => {
                    _.push(_), (_[_._] = _);
                  }),
                  {
                    rows: _,
                    flatRows: _,
                    rowsById: _,
                  }
                );
              },
              _(_.options, "debugTable", "getGroupedRowModel", () => {
                _._queue(() => {
                  _._autoResetExpanded(), _._autoResetPageIndex();
                });
              }),
            );
        }
        function _(_, _) {
          const _ = new Map();
          return _.reduce((_, _) => {
            const _ = `${_.getGroupingValue(_)}`,
              _ = _.get(_);
            return _ ? _.push(_) : _.set(_, [_]), _;
          }, _);
        }
        function _(_) {
          return (_) =>
            _(
              () => [
                _.getState().pagination,
                _.getPrePaginationRowModel(),
                _.options.paginateExpandedRows ? void 0 : _.getState().expanded,
              ],
              (_, _) => {
                if (!_.rows.length) return _;
                const { pageSize: _, pageIndex: _ } = _;
                let { rows: _, flatRows: _, rowsById: _ } = _;
                const _ = _ * _,
                  _ = _ + _;
                _ = _.slice(_, _);
                let _;
                _.options.paginateExpandedRows
                  ? (_ = {
                      rows: _,
                      flatRows: _,
                      rowsById: _,
                    })
                  : (_ = _({
                      rows: _,
                      flatRows: _,
                      rowsById: _,
                    })),
                  (_.flatRows = []);
                const _ = (_) => {
                  _.flatRows.push(_), _.subRows.length && _.subRows.forEach(_);
                };
                return _.rows.forEach(_), _;
              },
              _(_.options, "debugTable", "getPaginationRowModel"),
            );
        }
        function _() {
          return (_) =>
            _(
              () => [_.getState().sorting, _.getPreSortedRowModel()],
              (_, _) => {
                if (!_.rows.length || !(_ != null && _.length)) return _;
                const _ = _.getState().sorting,
                  _ = [],
                  _ = _.filter((_) => {
                    var _;
                    return (_ = _.getColumn(_._)) == null
                      ? void 0
                      : _.getCanSort();
                  }),
                  _ = {};
                _.forEach((_) => {
                  const _ = _.getColumn(_._);
                  _ &&
                    (_[_._] = {
                      sortUndefined: _.columnDef.sortUndefined,
                      invertSorting: _.columnDef.invertSorting,
                      sortingFn: _.getSortingFn(),
                    });
                });
                const _ = (_) => {
                  const _ = _.map((_) => ({
                    ..._,
                  }));
                  return (
                    _.sort((_, _) => {
                      for (let _ = 0; _ < _.length; _ += 1) {
                        var _;
                        const _ = _[_],
                          _ = _[_._],
                          _ = _.sortUndefined,
                          _ = (_ = _?.desc) != null ? _ : !1;
                        let _ = 0;
                        if (_) {
                          const _ = _.getValue(_._),
                            _ = _.getValue(_._),
                            _ = _ === void 0,
                            _ = _ === void 0;
                          if (_ || _) {
                            if (_ === "first") return _ ? -1 : 1;
                            if (_ === "last") return _ ? 1 : -1;
                            _ = _ && _ ? 0 : _ ? _ : -_;
                          }
                        }
                        if ((_ === 0 && (_ = _.sortingFn(_, _, _._)), _ !== 0))
                          return (
                            _ && (_ *= -1), _.invertSorting && (_ *= -1), _
                          );
                      }
                      return _.index - _.index;
                    }),
                    _.forEach((_) => {
                      var _;
                      _.push(_),
                        (_ = _.subRows) != null &&
                          _.length &&
                          (_.subRows = _(_.subRows));
                    }),
                    _
                  );
                };
                return {
                  rows: _(_.rows),
                  flatRows: _,
                  rowsById: _.rowsById,
                };
              },
              _(_.options, "debugTable", "getSortedRowModel", () =>
                _._autoResetPageIndex(),
              ),
            );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return _.filter((_) => !_.includes(_));
        }
        function _(_, _, _) {
          const _ = _.slice(0);
          return (_[_] = _), _;
        }
        var _ = class extends _._ {
            #r;
            #e;
            #o;
            #i;
            #t;
            #n;
            #s;
            #u;
            constructor(_, _, _) {
              super(),
                (this.#r = _),
                (this.#i = _),
                (this.#o = []),
                (this.#t = []),
                (this.#e = []),
                this.setQueries(_);
            }
            onSubscribe() {
              this.listeners.size === 1 &&
                this.#t.forEach((_) => {
                  _.subscribe((_) => {
                    this.#d(_, _);
                  });
                });
            }
            onUnsubscribe() {
              this.listeners.size || this.destroy();
            }
            destroy() {
              (this.listeners = new Set()),
                this.#t.forEach((_) => {
                  _.destroy();
                });
            }
            setQueries(_, _, _) {
              (this.#o = _),
                (this.#i = _),
                _._.batch(() => {
                  const _ = this.#t,
                    _ = this.#l(this.#o);
                  _.forEach((_) =>
                    _.observer.setOptions(_.defaultedQueryOptions, _),
                  );
                  const _ = _.map((_) => _.observer),
                    _ = _.map((_) => _.getCurrentResult()),
                    _ = _.some((_, _) => _ !== _[_]);
                  (_.length === _.length && !_) ||
                    ((this.#t = _),
                    (this.#e = _),
                    this.hasListeners() &&
                      (_(_, _).forEach((_) => {
                        _.destroy();
                      }),
                      _(_, _).forEach((_) => {
                        _.subscribe((_) => {
                          this.#d(_, _);
                        });
                      }),
                      this.#f()));
                });
            }
            getCurrentResult() {
              return this.#e;
            }
            getQueries() {
              return this.#t.map((_) => _.getCurrentQuery());
            }
            getObservers() {
              return this.#t;
            }
            getOptimisticResult(_, _) {
              const _ = this.#l(_).map((_) =>
                _.observer.getOptimisticResult(_.defaultedQueryOptions),
              );
              return [_, (_) => this.#g(_ ?? _, _), () => this.#a(_, _)];
            }
            #a(_, _) {
              const _ = this.#l(_);
              return _.map((_, _) => {
                const _ = _[_];
                return _.defaultedQueryOptions.notifyOnChangeProps
                  ? _
                  : _.observer.trackResult(_, (_) => {
                      _.forEach((_) => {
                        _.observer.trackProp(_);
                      });
                    });
              });
            }
            #g(_, _) {
              return _
                ? ((!this.#n || this.#e !== this.#u || _ !== this.#s) &&
                    ((this.#s = _),
                    (this.#u = this.#e),
                    (this.#n = (0, _._)(this.#n, _(_)))),
                  this.#n)
                : _;
            }
            #l(_) {
              const _ = new Map(this.#t.map((_) => [_.options.queryHash, _])),
                _ = [];
              return (
                _.forEach((_) => {
                  const _ = this.#r.defaultQueryOptions(_),
                    _ = _.get(_.queryHash);
                  _
                    ? _.push({
                        defaultedQueryOptions: _,
                        observer: _,
                      })
                    : _.push({
                        defaultedQueryOptions: _,
                        observer: new _._(this.#r, _),
                      });
                }),
                _
              );
            }
            #d(_, _) {
              const _ = this.#t.indexOf(_);
              _ !== -1 && ((this.#e = _(this.#e, _, _)), this.#f());
            }
            #f() {
              if (this.hasListeners()) {
                const _ = this.#n,
                  _ = this.#g(this.#a(this.#e, this.#o), this.#i?.combine);
                _ !== _ &&
                  _._.batch(() => {
                    this.listeners.forEach((_) => {
                      _(this.#e);
                    });
                  });
              }
            }
          },
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _({ queries: _, ..._ }, _) {
          const _ = (0, _._)(_),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _.useMemo(
              () =>
                _.map((_) => {
                  const _ = _.defaultQueryOptions(_);
                  return (
                    (_._optimisticResults = _ ? "isRestoring" : "optimistic"), _
                  );
                }),
              [_, _, _],
            );
          _.forEach((_) => {
            (0, _._)(_), (0, _._)(_, _);
          }),
            (0, _._)(_);
          const [_] = _.useState(() => new _(_, _, _)),
            [_, _, _] = _.getOptimisticResult(_, _.combine);
          _.useSyncExternalStore(
            _.useCallback(
              (_) => (_ ? _._ : _.subscribe(_._.batchCalls(_))),
              [_, _],
            ),
            () => _.getCurrentResult(),
            () => _.getCurrentResult(),
          ),
            _.useEffect(() => {
              _.setQueries(_, _, {
                listeners: !1,
              });
            }, [_, _, _]);
          const _ = _.some((_, _) => (0, _._)(_[_], _))
            ? _.flatMap((_, _) => {
                const _ = _[_];
                if (_) {
                  const _ = new _._(_, _);
                  if ((0, _._)(_, _)) return (0, _._)(_, _, _);
                  (0, _._)(_, _) && (0, _._)(_, _, _);
                }
                return [];
              })
            : [];
          if (_.length > 0) throw Promise.all(_);
          const _ = _.find((_, _) => {
            const _ = _[_];
            return (
              _ &&
              (0, _._)({
                result: _,
                errorResetBoundary: _,
                throwOnError: _.throwOnError,
                query: _.getQueryCache().get(_.queryHash),
              })
            );
          });
          if (_?.error) throw _.error;
          return _(_());
        }
      },
    },
  ]);
})();
