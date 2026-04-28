var _ = _(_(), 1);
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
  let _ = [],
    _ = (_) => {
      _.forEach((_) => {
        _.push(_);
        let _ = _(_);
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
    let _ = _(_);
    if (!(_.length !== _.length || _.some((_, _) => _[_] !== _))) return _;
    _ = _;
    let _;
    if (
      (_.key && _.debug && (_ = Date.now()),
      (_ = _(..._)),
      _ == null || _.onChange == null || _.onChange(_),
      _.key && _.debug && _ != null && _.debug())
    ) {
      let _ = Math.round((Date.now() - _) * 100) / 100,
        _ = Math.round((Date.now() - _) * 100) / 100,
        _ = _ / 16,
        _ = (_, _) => {
          for (_ = String(_); _.length < _; ) _ = " " + _;
          return _;
        };
      console.info(
        `%c⏱ ${_(_, 5)} /${_(_, 5)} ms`,
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
  let _ = () => {
      var _;
      return (_ = _.getValue()) != null ? _ : _.options.renderFallbackValue;
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
  let _ = {
      ..._._getDefaultColumnDef(),
      ..._,
    },
    _ = _.accessorKey,
    _ =
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
              for (let _ of _.split(".")) {
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
  for (let _ of _._features) _.createColumn == null || _.createColumn(_, _);
  return _;
}
var _ = "debugHeaders";
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
      let _ = [],
        _ = (_) => {
          _.subHeaders && _.subHeaders.length && _.subHeaders.map(_), _.push(_);
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
var _ = {
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
        let _ =
            (_ = _?.map((_) => _.find((_) => _._ === _)).filter(Boolean)) !=
            null
              ? _
              : [],
          _ =
            (_ = _?.map((_) => _.find((_) => _._ === _)).filter(Boolean)) !=
            null
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
          let _ =
            (_ = _?.map((_) => _.find((_) => _._ === _)).filter(Boolean)) !=
            null
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
          let _ =
            (_ = _?.map((_) => _.find((_) => _._ === _)).filter(Boolean)) !=
            null
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
            ...((_ = (_ = _[0]) == null ? void 0 : _.headers) != null ? _ : []),
            ...((_ = (_ = _[0]) == null ? void 0 : _.headers) != null ? _ : []),
            ...((_ = (_ = _[0]) == null ? void 0 : _.headers) != null ? _ : []),
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
  let _ = 0,
    _ = function (_, _) {
      _ === void 0 && (_ = 1),
        (_ = Math.max(_, _)),
        _.filter((_) => _.getIsVisible()).forEach((_) => {
          var _;
          (_ = _.columns) != null && _.length && _(_.columns, _ + 1);
        }, 0);
    };
  _(_);
  let _ = [],
    _ = (_, _) => {
      let _ = {
          depth: _,
          _: [_, `${_}`].filter(Boolean).join("_"),
          headers: [],
        },
        _ = [];
      _.forEach((_) => {
        let _ = [..._].reverse()[0],
          _ = _.column.depth === _.depth,
          _,
          _ = !1;
        if (
          (_ && _.column.parent
            ? (_ = _.column.parent)
            : ((_ = _.column), (_ = !0)),
          _ && _?.column === _)
        )
          _.subHeaders.push(_);
        else {
          let _ = _(_, _, {
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
  let _ = (_) =>
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
      let _ = Math.min(..._);
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
  return _((_ = (_ = _[0]) == null ? void 0 : _.headers) != null ? _ : []), _;
}
var _ = (_, _, _, _, _, _, _) => {
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
        let _ = _.getColumn(_);
        if (_ != null && _.accessorFn)
          return (
            (_._valuesCache[_] = _.accessorFn(_.original, _)), _._valuesCache[_]
          );
      },
      getUniqueValues: (_) => {
        if (_._uniqueValuesCache.hasOwnProperty(_))
          return _._uniqueValuesCache[_];
        let _ = _.getColumn(_);
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
        return (_ = _.getValue(_)) != null ? _ : _.options.renderFallbackValue;
      },
      subRows: _ ?? [],
      getLeafRows: () => _(_.subRows, (_) => _.subRows),
      getParentRow: () => (_.parentId ? _.getRow(_.parentId, !0) : void 0),
      getParentRows: () => {
        let _ = [],
          _ = _;
        for (;;) {
          let _ = _.getParentRow();
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
      let _ = _._features[_];
      _ == null || _.createRow == null || _.createRow(_, _);
    }
    return _;
  },
  _ = {
    createColumn: (_, _) => {
      (_._getFacetedRowModel =
        _.options.getFacetedRowModel && _.options.getFacetedRowModel(_, _._)),
        (_.getFacetedRowModel = () =>
          _._getFacetedRowModel
            ? _._getFacetedRowModel()
            : _.getPreFilteredRowModel()),
        (_._getFacetedUniqueValues =
          _.options.getFacetedUniqueValues &&
          _.options.getFacetedUniqueValues(_, _._)),
        (_.getFacetedUniqueValues = () =>
          _._getFacetedUniqueValues ? _._getFacetedUniqueValues() : new Map()),
        (_._getFacetedMinMaxValues =
          _.options.getFacetedMinMaxValues &&
          _.options.getFacetedMinMaxValues(_, _._)),
        (_.getFacetedMinMaxValues = () => {
          if (_._getFacetedMinMaxValues) return _._getFacetedMinMaxValues();
        });
    },
  },
  _ = (_, _, _) => {
    var _, _;
    let _ = _ == null || (_ = _.toString()) == null ? void 0 : _.toLowerCase();
    return !!(
      !(
        (_ = _.getValue(_)) == null ||
        (_ = _.toString()) == null ||
        (_ = _.toLowerCase()) == null
      ) && _.includes(_)
    );
  };
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => {
  var _;
  return !!(
    !((_ = _.getValue(_)) == null || (_ = _.toString()) == null) &&
    _.includes(_)
  );
};
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => {
  var _;
  return (
    ((_ = _.getValue(_)) == null || (_ = _.toString()) == null
      ? void 0
      : _.toLowerCase()) === _?.toLowerCase()
  );
};
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => {
  var _;
  return (_ = _.getValue(_)) == null ? void 0 : _.includes(_);
};
_.autoRemove = (_) => _(_) || !(_ != null && _.length);
var _ = (_, _, _) =>
  !_.some((_) => {
    var _;
    return !((_ = _.getValue(_)) != null && _.includes(_));
  });
_.autoRemove = (_) => _(_) || !(_ != null && _.length);
var _ = (_, _, _) =>
  _.some((_) => {
    var _;
    return (_ = _.getValue(_)) == null ? void 0 : _.includes(_);
  });
_.autoRemove = (_) => _(_) || !(_ != null && _.length);
var _ = (_, _, _) => _.getValue(_) === _;
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => _.getValue(_) == _;
_.autoRemove = (_) => _(_);
var _ = (_, _, _) => {
  let [_, _] = _,
    _ = _.getValue(_);
  return _ >= _ && _ <= _;
};
_.resolveFilterValue = (_) => {
  let [_, _] = _,
    _ = typeof _ != "number" ? parseFloat(_) : _,
    _ = typeof _ != "number" ? parseFloat(_) : _,
    _ = _ === null || Number.isNaN(_) ? -1 / 0 : _,
    _ = _ === null || Number.isNaN(_) ? 1 / 0 : _;
  if (_ > _) {
    let _ = _;
    (_ = _), (_ = _);
  }
  return [_, _];
};
_.autoRemove = (_) => _(_) || (_(_[0]) && _(_[1]));
var _ = {
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
var _ = {
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
      let _ = _.getCoreRowModel().flatRows[0],
        _ = _?.getValue(_._);
      return typeof _ == "string"
        ? _.includesString
        : typeof _ == "number"
          ? _.inNumberRange
          : typeof _ == "boolean" || (_ !== null && typeof _ == "object")
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
          let _ = _.getFilterFn(),
            _ = _?.find((_) => _._ === _._),
            _ = _(_, _ ? _.value : void 0);
          if (_(_, _, _)) {
            var _;
            return (_ = _?.filter((_) => _._ !== _._)) != null ? _ : [];
          }
          let _ = {
            _: _._,
            value: _,
          };
          if (_) {
            var _;
            return (_ = _?.map((_) => (_._ === _._ ? _ : _))) != null ? _ : [];
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
      let _ = _.getAllLeafColumns(),
        _ = (_) => {
          var _;
          return (_ = _(_, _)) == null
            ? void 0
            : _.filter((_) => {
                let _ = _.find((_) => _._ === _._);
                if (_) {
                  let _ = _.getFilterFn();
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
            : (_ = (_ = _.initialState) == null ? void 0 : _.columnFilters) !=
                null
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
var _ = (_, _, _) =>
    _.reduce((_, _) => {
      let _ = _.getValue(_);
      return _ + (typeof _ == "number" ? _ : 0);
    }, 0),
  _ = (_, _, _) => {
    let _;
    return (
      _.forEach((_) => {
        let _ = _.getValue(_);
        _ != null && (_ > _ || (_ === void 0 && _ >= _)) && (_ = _);
      }),
      _
    );
  },
  _ = (_, _, _) => {
    let _;
    return (
      _.forEach((_) => {
        let _ = _.getValue(_);
        _ != null && (_ < _ || (_ === void 0 && _ >= _)) && (_ = _);
      }),
      _
    );
  },
  _ = (_, _, _) => {
    let _, _;
    return (
      _.forEach((_) => {
        let _ = _.getValue(_);
        _ != null &&
          (_ === void 0
            ? _ >= _ && (_ = _ = _)
            : (_ > _ && (_ = _), _ < _ && (_ = _)));
      }),
      [_, _]
    );
  },
  _ = (_, _) => {
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
  _ = (_, _) => {
    if (!_.length) return;
    let _ = _.map((_) => _.getValue(_));
    if (!_(_)) return;
    if (_.length === 1) return _[0];
    let _ = Math.floor(_.length / 2),
      _ = _.sort((_, _) => _ - _);
    return _.length % 2 !== 0 ? _[_] : (_[_ - 1] + _[_]) / 2;
  },
  _ = (_, _) => Array.from(new Set(_.map((_) => _.getValue(_))).values()),
  _ = (_, _) => new Set(_.map((_) => _.getValue(_))).size,
  _ = (_, _) => _.length,
  _ = {
    sum: _,
    min: _,
    max: _,
    extent: _,
    mean: _,
    median: _,
    unique: _,
    uniqueCount: _,
    count: _,
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
          return (_ = _.getState().grouping) == null ? void 0 : _.includes(_._);
        }),
        (_.getGroupedIndex = () => {
          var _;
          return (_ = _.getState().grouping) == null ? void 0 : _.indexOf(_._);
        }),
        (_.getToggleGroupingHandler = () => {
          let _ = _.getCanGroup();
          return () => {
            _ && _.toggleGrouping();
          };
        }),
        (_.getAutoAggregationFn = () => {
          let _ = _.getCoreRowModel().flatRows[0],
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
              : (_ = (_ = _.initialState) == null ? void 0 : _.grouping) != null
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
          let _ = _.getColumn(_);
          return _ != null && _.columnDef.getGroupingValue
            ? ((_._groupingValuesCache[_] = _.columnDef.getGroupingValue(
                _.original,
              )),
              _._groupingValuesCache[_])
            : _.getValue(_);
        }),
        (_._groupingValuesCache = {});
    },
    createCell: (_, _, _, _) => {
      (_.getIsGrouped = () => _.getIsGrouped() && _._ === _.groupingColumnId),
        (_.getIsPlaceholder = () => !_.getIsGrouped() && _.getIsGrouped()),
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
  let _ = _.filter((_) => !_.includes(_._));
  return _ === "remove"
    ? _
    : [..._.map((_) => _.find((_) => _._ === _)).filter(Boolean), ..._];
}
var _ = {
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
          let _ = _(_, _);
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
              let _ = [..._],
                _ = [..._];
              for (; _.length && _.length; ) {
                let _ = _.shift(),
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
        let _ = _.getLeafColumns()
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
          let _ = _.getLeafColumns().map((_) => _._),
            { left: _, right: _ } = _.getState().columnPinning,
            _ = _.some((_) => _?.includes(_)),
            _ = _.some((_) => _?.includes(_));
          return _ ? "left" : _ ? "right" : !1;
        }),
        (_.getPinnedIndex = () => {
          var _, _;
          let _ = _.getIsPinned();
          return _
            ? (_ =
                (_ = _.getState().columnPinning) == null || (_ = _[_]) == null
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
          let _ = [...(_ ?? []), ...(_ ?? [])];
          return _.filter((_) => !_.includes(_.column._));
        },
        _(_.options, "debugRows", "getCenterVisibleCells"),
      )),
        (_.getLeftVisibleCells = _(
          () => [_._getAllVisibleCells(), _.getState().columnPinning.left],
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
          () => [_._getAllVisibleCells(), _.getState().columnPinning.right],
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
              : (_ = (_ = _.initialState) == null ? void 0 : _.columnPinning) !=
                  null
                ? _
                : _(),
          );
        }),
        (_.getIsSomeColumnsPinned = (_) => {
          var _;
          let _ = _.getState().columnPinning;
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
          () => [_.getAllLeafColumns(), _.getState().columnPinning.left],
          (_, _) =>
            (_ ?? []).map((_) => _.find((_) => _._ === _)).filter(Boolean),
          _(_.options, "debugColumns", "getLeftLeafColumns"),
        )),
        (_.getRightLeafColumns = _(
          () => [_.getAllLeafColumns(), _.getState().columnPinning.right],
          (_, _) =>
            (_ ?? []).map((_) => _.find((_) => _._ === _)).filter(Boolean),
          _(_.options, "debugColumns", "getRightLeafColumns"),
        )),
        (_.getCenterLeafColumns = _(
          () => [
            _.getAllLeafColumns(),
            _.getState().columnPinning.left,
            _.getState().columnPinning.right,
          ],
          (_, _, _) => {
            let _ = [...(_ ?? []), ...(_ ?? [])];
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
        let _ = _.getState().columnSizing[_._];
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
            _.slice(0, _.getIndex(_)).reduce((_, _) => _ + _.getSize(), 0),
          _(_.options, "debugColumns", "getStart"),
        )),
        (_.getAfter = _(
          (_) => [_, _(_, _), _.getState().columnSizing],
          (_, _) =>
            _.slice(_.getIndex(_) + 1).reduce((_, _) => _ + _.getSize(), 0),
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
        let _ = 0,
          _ = (_) => {
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
            let _ = _.headerGroup.headers[_.index - 1];
            return _.getStart() + _.getSize();
          }
          return 0;
        }),
        (_.getResizeHandler = (_) => {
          let _ = _.getColumn(_.column._),
            _ = _?.getCanResize();
          return (_) => {
            if (
              !_ ||
              !_ ||
              (_.persist == null || _.persist(),
              _(_) && _.touches && _.touches.length > 1)
            )
              return;
            let _ = _.getSize(),
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
                    let _ = _.options.columnResizeDirection === "rtl" ? -1 : 1,
                      _ = (_ - ((_ = _?.startOffset) != null ? _ : 0)) * _,
                      _ = Math.max(
                        _ / ((_ = _?.startSize) != null ? _ : 0),
                        -0.999999,
                      );
                    return (
                      _.columnSizingStart.forEach((_) => {
                        let [_, _] = _;
                        _[_] = Math.round(Math.max(_ + _ * _, 0) * 100) / 100;
                      }),
                      {
                        ..._,
                        deltaOffset: _,
                        deltaPercentage: _,
                      }
                    );
                  }),
                  (_.options.columnResizeMode === "onChange" || _ === "end") &&
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
                  _.cancelable && (_.preventDefault(), _.stopPropagation()),
                  _(_.touches[0].clientX),
                  !1
                ),
                upHandler: (_) => {
                  var _;
                  _?.removeEventListener("touchmove", _.moveHandler),
                    _?.removeEventListener("touchend", _.upHandler),
                    _.cancelable && (_.preventDefault(), _.stopPropagation()),
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
            _ ? _() : (_ = _.initialState.columnSizingInfo) != null ? _ : _(),
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
  },
  _ = null;
function _() {
  if (typeof _ == "boolean") return _;
  let _ = !1;
  try {
    let _ = {
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
var _ = {
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
        let _ = _.columns;
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
        _.toggleVisibility == null || _.toggleVisibility(_.target.checked);
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
    let _ = (_, _) =>
      _(
        () => [
          _(),
          _()
            .filter((_) => _.getIsVisible())
            .map((_) => _._)
            .join("_"),
        ],
        (_) =>
          _.filter((_) => (_.getIsVisible == null ? void 0 : _.getIsVisible())),
        _(_.options, "debugColumns", _),
      );
    (_.getVisibleFlatColumns = _("getVisibleFlatColumns", () =>
      _.getAllFlatColumns(),
    )),
      (_.getVisibleLeafColumns = _("getVisibleLeafColumns", () =>
        _.getAllLeafColumns(),
      )),
      (_.getLeftVisibleLeafColumns = _("getLeftVisibleLeafColumns", () =>
        _.getLeftLeafColumns(),
      )),
      (_.getRightVisibleLeafColumns = _("getRightVisibleLeafColumns", () =>
        _.getRightLeafColumns(),
      )),
      (_.getCenterVisibleLeafColumns = _("getCenterVisibleLeafColumns", () =>
        _.getCenterLeafColumns(),
      )),
      (_.setColumnVisibility = (_) =>
        _.options.onColumnVisibilityChange == null
          ? void 0
          : _.options.onColumnVisibilityChange(_)),
      (_.resetColumnVisibility = (_) => {
        var _;
        _.setColumnVisibility(
          _ ? {} : (_ = _.initialState.columnVisibility) != null ? _ : {},
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
        _.toggleAllColumnsVisible((_ = _.target) == null ? void 0 : _.checked);
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
var _ = {
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
        let _ =
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
          let { globalFilterFn: _ } = _.options;
          return _(_)
            ? _
            : _ === "auto"
              ? _.getGlobalAutoFilterFn()
              : (_ = (_ = _.options.filterFns) == null ? void 0 : _[_]) != null
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
              : (_ = (_ = _.initialState) == null ? void 0 : _.expanded) != null
                ? _
                : {},
          );
        }),
        (_.getCanSomeRowsExpand = () =>
          _.getPrePaginationRowModel().flatRows.some((_) => _.getCanExpand())),
        (_.getToggleAllRowsExpandedHandler = () => (_) => {
          _.persist == null || _.persist(), _.toggleAllRowsExpanded();
        }),
        (_.getIsSomeRowsExpanded = () => {
          let _ = _.getState().expanded;
          return _ === !0 || Object.values(_).some(Boolean);
        }),
        (_.getIsAllRowsExpanded = () => {
          let _ = _.getState().expanded;
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
              let _ = _.split(".");
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
          let _ = _ === !0 ? !0 : !!(_ != null && _[_._]),
            _ = {};
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
            let { [_._]: _, ..._ } = _;
            return _;
          }
          return _;
        });
      }),
        (_.getIsExpanded = () => {
          var _;
          let _ = _.getState().expanded;
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
          let _ = _.getCanExpand();
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
          let _ = (_) => _(_, _);
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
            let _ = _(_, _.pageIndex),
              _ =
                typeof _.options.pageCount > "u" || _.options.pageCount === -1
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
                    (_ = _.initialState) == null || (_ = _.pagination) == null
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
                    (_ = _.initialState) == null || (_ = _.pagination) == null
                      ? void 0
                      : _.pageSize) != null
                ? _
                : _,
          );
        }),
        (_.setPageSize = (_) => {
          _.setPagination((_) => {
            let _ = Math.max(1, _(_, _.pageSize)),
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
              _ && _ > 0 && (_ = [...new Array(_)].fill(null).map((_, _) => _)),
              _
            );
          },
          _(_.options, "debugTable", "getPageOptions"),
        )),
        (_.getCanPreviousPage = () => _.getState().pagination.pageIndex > 0),
        (_.getCanNextPage = () => {
          let { pageIndex: _ } = _.getState().pagination,
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
            (_._getPaginationRowModel = _.options.getPaginationRowModel(_)),
          _.options.manualPagination || !_._getPaginationRowModel
            ? _.getPrePaginationRowModel()
            : _._getPaginationRowModel()
        )),
        (_.getPageCount = () => {
          var _;
          return (_ = _.options.pageCount) != null
            ? _
            : Math.ceil(_.getRowCount() / _.getState().pagination.pageSize);
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
        let _ = _
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
          let { enableRowPinning: _, enablePinning: _ } = _.options;
          return typeof _ == "function" ? _(_) : (_ = _ ?? _) != null ? _ : !0;
        }),
        (_.getIsPinned = () => {
          let _ = [_._],
            { top: _, bottom: _ } = _.getState().rowPinning,
            _ = _.some((_) => _?.includes(_)),
            _ = _.some((_) => _?.includes(_));
          return _ ? "top" : _ ? "bottom" : !1;
        }),
        (_.getPinnedIndex = () => {
          var _, _;
          let _ = _.getIsPinned();
          if (!_) return -1;
          let _ =
            (_ = _ === "top" ? _.getTopRows() : _.getBottomRows()) == null
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
              : (_ = (_ = _.initialState) == null ? void 0 : _.rowPinning) !=
                  null
                ? _
                : _(),
          );
        }),
        (_.getIsSomeRowsPinned = (_) => {
          var _;
          let _ = _.getState().rowPinning;
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
                  let _ = _.getRow(_, !0);
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
            let _ = new Set([...(_ ?? []), ...(_ ?? [])]);
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
            let _ = {
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
            let _ = typeof _ < "u" ? _ : !_.getIsAllPageRowsSelected(),
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
          let _ = _.getFilteredRowModel().flatRows,
            { rowSelection: _ } = _.getState(),
            _ = !!(_.length && Object.keys(_).length);
          return _ && _.some((_) => _.getCanSelect() && !_[_._]) && (_ = !1), _;
        }),
        (_.getIsAllPageRowsSelected = () => {
          let _ = _.getPaginationRowModel().flatRows.filter((_) =>
              _.getCanSelect(),
            ),
            { rowSelection: _ } = _.getState(),
            _ = !!_.length;
          return _ && _.some((_) => !_[_._]) && (_ = !1), _;
        }),
        (_.getIsSomeRowsSelected = () => {
          var _;
          let _ = Object.keys(
            (_ = _.getState().rowSelection) != null ? _ : {},
          ).length;
          return _ > 0 && _ < _.getFilteredRowModel().flatRows.length;
        }),
        (_.getIsSomePageRowsSelected = () => {
          let _ = _.getPaginationRowModel().flatRows;
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
        let _ = _.getIsSelected();
        _.setRowSelection((_) => {
          var _;
          if (((_ = typeof _ < "u" ? _ : !_), _.getCanSelect() && _ === _))
            return _;
          let _ = {
            ..._,
          };
          return _(_, _._, _, (_ = _?.selectChildren) != null ? _ : !0, _), _;
        });
      }),
        (_.getIsSelected = () => {
          let { rowSelection: _ } = _.getState();
          return _(_, _);
        }),
        (_.getIsSomeSelected = () => {
          let { rowSelection: _ } = _.getState();
          return _(_, _) === "some";
        }),
        (_.getIsAllSubRowsSelected = () => {
          let { rowSelection: _ } = _.getState();
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
          let _ = _.getCanSelect();
          return (_) => {
            var _;
            _ && _.toggleSelected((_ = _.target) == null ? void 0 : _.checked);
          };
        });
    },
  },
  _ = (_, _, _, _, _) => {
    var _;
    let _ = _.getRow(_, !0);
    _
      ? (_.getCanMultiSelect() || Object.keys(_).forEach((_) => delete _[_]),
        _.getCanSelect() && (_[_] = !0))
      : delete _[_],
      _ &&
        (_ = _.subRows) != null &&
        _.length &&
        _.getCanSelectSubRows() &&
        _.subRows.forEach((_) => _(_, _._, _, _, _));
  };
function _(_, _) {
  let _ = _.getState().rowSelection,
    _ = [],
    _ = {},
    _ = function (_, _) {
      return _.map((_) => {
        var _;
        let _ = _(_, _);
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
        let _ = _(_, _);
        _ === "all" ? (_ = !0) : (_ === "some" && (_ = !0), (_ = !1));
      }
    }),
    _ ? "all" : _ ? "some" : !1
  );
}
var _ = /([0-9]+)/gm,
  _ = (_, _, _) =>
    _(_(_.getValue(_)).toLowerCase(), _(_.getValue(_)).toLowerCase()),
  _ = (_, _, _) => _(_(_.getValue(_)), _(_.getValue(_))),
  _ = (_, _, _) =>
    _(_(_.getValue(_)).toLowerCase(), _(_.getValue(_)).toLowerCase()),
  _ = (_, _, _) => _(_(_.getValue(_)), _(_.getValue(_))),
  _ = (_, _, _) => {
    let _ = _.getValue(_),
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
  let _ = _.split(_).filter(Boolean),
    _ = _.split(_).filter(Boolean);
  for (; _.length && _.length; ) {
    let _ = _.shift(),
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
var _ = {
    alphanumeric: _,
    alphanumericCaseSensitive: _,
    text: _,
    textCaseSensitive: _,
    datetime: _,
    basic: _,
  },
  _ = {
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
        let _ = _.getFilteredRowModel().flatRows.slice(10),
          _ = !1;
        for (let _ of _) {
          let _ = _?.getValue(_._);
          if (Object.prototype.toString.call(_) === "[object Date]")
            return _.datetime;
          if (typeof _ == "string" && ((_ = !0), _.split(_).length > 1))
            return _.alphanumeric;
        }
        return _ ? _.text : _.basic;
      }),
        (_.getAutoSortDir = () => {
          let _ = _.getFilteredRowModel().flatRows[0];
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
          let _ = _.getNextSortingOrder(),
            _ = typeof _ < "u" && _ !== null;
          _.setSorting((_) => {
            let _ = _?.find((_) => _._ === _._),
              _ = _?.findIndex((_) => _._ === _._),
              _ = [],
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
          let _ = _.getFirstSortDir(),
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
          let _ =
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
          let _ = _.getCanSort();
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
              : (_ = (_ = _.initialState) == null ? void 0 : _.sorting) != null
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
  _ = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
function _(_) {
  var _, _;
  let _ = [..._, ...((_ = _._features) != null ? _ : [])],
    _ = {
      _features: _,
    },
    _ = _._features.reduce(
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
          },
    _ = {
      ...{},
      ...((_ = _.initialState) != null ? _ : {}),
    };
  _._features.forEach((_) => {
    var _;
    _ =
      (_ = _.getInitialState == null ? void 0 : _.getInitialState(_)) != null
        ? _
        : _;
  });
  let _ = [],
    _ = !1,
    _ = {
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
        let _ = _(_, _.options);
        _.options = _(_);
      },
      getState: () => _.options.state,
      setState: (_) => {
        _.options.onStateChange == null || _.options.onStateChange(_);
      },
      _getRowId: (_, _, _) => {
        var _;
        return (_ =
          _.options.getRowId == null ? void 0 : _.options.getRowId(_, _, _)) !=
          null
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
        let _ = (_ ? _.getPrePaginationRowModel() : _.getRowModel()).rowsById[
          _
        ];
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
                let _ = _.header.column.columnDef;
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
          let _ = function (_, _, _) {
            return (
              _ === void 0 && (_ = 0),
              _.map((_) => {
                let _ = _(_, _, _, _),
                  _ = _;
                return (_.columns = _.columns ? _(_.columns, _, _ + 1) : []), _;
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
    let _ = _._features[_];
    _ == null || _.createTable == null || _.createTable(_);
  }
  return _;
}
function _() {
  return (_) =>
    _(
      () => [_.options.data],
      (_) => {
        let _ = {
            rows: [],
            flatRows: [],
            rowsById: {},
          },
          _ = function (_, _, _) {
            _ === void 0 && (_ = 0);
            let _ = [];
            for (let _ = 0; _ < _.length; _++) {
              let _ = _(_, _._getRowId(_[_], _, _), _[_], _, _, void 0, _?._);
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
      _(_.options, "debugTable", "getRowModel", () => _._autoResetPageIndex()),
    );
}
function _(_, _, _) {
  return _.options.filterFromLeafRows ? _(_, _, _) : _(_, _, _);
}
function _(_, _, _) {
  var _;
  let _ = [],
    _ = {},
    _ = (_ = _.options.maxLeafRowFilterDepth) != null ? _ : 100,
    _ = function (_, _) {
      _ === void 0 && (_ = 0);
      let _ = [];
      for (let _ = 0; _ < _.length; _++) {
        var _;
        let _ = _[_],
          _ = _(_, _._, _.original, _.index, _.depth, void 0, _.parentId);
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
  let _ = [],
    _ = {},
    _ = (_ = _.options.maxLeafRowFilterDepth) != null ? _ : 100,
    _ = function (_, _) {
      _ === void 0 && (_ = 0);
      let _ = [];
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        if (_(_)) {
          var _;
          if ((_ = _.subRows) != null && _.length && _ < _) {
            let _ = _(_, _._, _.original, _.index, _.depth, void 0, _.parentId);
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
        let _ = [],
          _ = [];
        (_ ?? []).forEach((_) => {
          var _;
          let _ = _.getColumn(_._);
          if (!_) return;
          let _ = _.getFilterFn();
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
        let _ = (_ ?? []).map((_) => _._),
          _ = _.getGlobalFilterFn(),
          _ = _.getAllLeafColumns().filter((_) => _.getCanGlobalFilter());
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
          let _ = _.flatRows[_];
          if (((_.columnFilters = {}), _.length))
            for (let _ = 0; _ < _.length; _++) {
              _ = _[_];
              let _ = _._;
              _.columnFilters[_] = _.filterFn(_, _, _.resolvedValue, (_) => {
                _.columnFiltersMeta[_] = _;
              });
            }
          if (_.length) {
            for (let _ = 0; _ < _.length; _++) {
              _ = _[_];
              let _ = _._;
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
        let _ = (_) => {
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
        let _ = _.filter((_) => _.getColumn(_)),
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
            let _ = _[_],
              _ = _(_, _);
            return Array.from(_.entries()).map((_, _) => {
              let [_, _] = _,
                _ = `${_}:${_}`;
              _ = _ ? `${_}>${_}` : _;
              let _ = _(_, _ + 1, _);
              _.forEach((_) => {
                _.parentId = _;
              });
              let _ = _ ? _(_, (_) => _.subRows) : _,
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
                    let _ = _.getColumn(_),
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
  let _ = new Map();
  return _.reduce((_, _) => {
    let _ = `${_.getGroupingValue(_)}`,
      _ = _.get(_);
    return _ ? _.push(_) : _.set(_, [_]), _;
  }, _);
}
function _() {
  return (_) =>
    _(
      () => [_.getState().sorting, _.getPreSortedRowModel()],
      (_, _) => {
        if (!_.rows.length || !(_ != null && _.length)) return _;
        let _ = _.getState().sorting,
          _ = [],
          _ = _.filter((_) => {
            var _;
            return (_ = _.getColumn(_._)) == null ? void 0 : _.getCanSort();
          }),
          _ = {};
        _.forEach((_) => {
          let _ = _.getColumn(_._);
          _ &&
            (_[_._] = {
              sortUndefined: _.columnDef.sortUndefined,
              invertSorting: _.columnDef.invertSorting,
              sortingFn: _.getSortingFn(),
            });
        });
        let _ = (_) => {
          let _ = _.map((_) => ({
            ..._,
          }));
          return (
            _.sort((_, _) => {
              for (let _ = 0; _ < _.length; _ += 1) {
                var _;
                let _ = _[_],
                  _ = _[_._],
                  _ = _.sortUndefined,
                  _ = (_ = _?.desc) != null ? _ : !1,
                  _ = 0;
                if (_) {
                  let _ = _.getValue(_._),
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
                  return _ && (_ *= -1), _.invertSorting && (_ *= -1), _;
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
      let _ = Object.getPrototypeOf(_);
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
  let _ = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ..._,
    },
    [_] = _.useState(() => ({
      current: _(_),
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
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_, _, _) {
  let _ = _.initialDeps ?? [],
    _;
  function _() {
    var _, _, _, _;
    let _;
    _.key && (_ = _.debug) != null && _.call(_) && (_ = Date.now());
    let _ = _();
    if (!(_.length !== _.length || _.some((_, _) => _[_] !== _))) return _;
    _ = _;
    let _;
    if (
      (_.key && (_ = _.debug) != null && _.call(_) && (_ = Date.now()),
      (_ = _(..._)),
      _.key && (_ = _.debug) != null && _.call(_))
    ) {
      let _ = Math.round((Date.now() - _) * 100) / 100,
        _ = Math.round((Date.now() - _) * 100) / 100,
        _ = _ / 16,
        _ = (_, _) => {
          for (_ = String(_); _.length < _; ) _ = " " + _;
          return _;
        };
      console.info(
        `%c⏱ ${_(_, 5)} /${_(_, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _, 120))}deg 100% 31%);`,
        _?.key,
      );
    }
    return (_ = _?.onChange) == null || _.call(_, _), _;
  }
  return (
    (_.updateDeps = (_) => {
      _ = _;
    }),
    _
  );
}
function _(_, _) {
  if (_ === void 0) throw new Error(`Unexpected undefined${_ ? `: ${_}` : ""}`);
  return _;
}
var _ = (_, _) => Math.abs(_ - _) < 1.01,
  _ = (_, _, _) => {
    let _;
    return function (..._) {
      _.clearTimeout(_), (_ = _.setTimeout(() => _.apply(this, _), _));
    };
  };
var _ = (_) => {
    let { offsetWidth: _, offsetHeight: _ } = _;
    return {
      width: _,
      height: _,
    };
  },
  _ = (_) => _,
  _ = (_) => {
    let _ = Math.max(_.startIndex - _.overscan, 0),
      _ = Math.min(_.endIndex + _.overscan, _.count - 1),
      _ = [];
    for (let _ = _; _ <= _; _++) _.push(_);
    return _;
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = (_) => {
      let { width: _, height: _ } = _;
      _({
        width: Math.round(_),
        height: Math.round(_),
      });
    };
    if ((_(_(_)), !_.ResizeObserver)) return () => {};
    let _ = new _.ResizeObserver((_) => {
      let _ = () => {
        let _ = _[0];
        if (_?.borderBoxSize) {
          let _ = _.borderBoxSize[0];
          if (_) {
            _({
              width: _.inlineSize,
              height: _.blockSize,
            });
            return;
          }
        }
        _(_(_));
      };
      _.options.useAnimationFrameWithResizeObserver
        ? requestAnimationFrame(_)
        : _();
    });
    return (
      _.observe(_, {
        box: "border-box",
      }),
      () => {
        _.unobserve(_);
      }
    );
  },
  _ = {
    passive: !0,
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = () => {
      _({
        width: _.innerWidth,
        height: _.innerHeight,
      });
    };
    return (
      _(),
      _.addEventListener("resize", _, _),
      () => {
        _.removeEventListener("resize", _);
      }
    );
  },
  _ = typeof window > "u" ? !0 : "onscrollend" in window,
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = 0,
      _ =
        _.options.useScrollendEvent && _
          ? () => {}
          : _(
              _,
              () => {
                _(_, !1);
              },
              _.options.isScrollingResetDelay,
            ),
      _ = (_) => () => {
        let { horizontal: _, isRtl: _ } = _.options;
        (_ = _ ? _.scrollLeft * ((_ && -1) || 1) : _.scrollTop), _(), _(_, _);
      },
      _ = _(!0),
      _ = _(!1);
    _(), _.addEventListener("scroll", _, _);
    let _ = _.options.useScrollendEvent && _;
    return (
      _ && _.addEventListener("scrollend", _, _),
      () => {
        _.removeEventListener("scroll", _),
          _ && _.removeEventListener("scrollend", _);
      }
    );
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = 0,
      _ =
        _.options.useScrollendEvent && _
          ? () => {}
          : _(
              _,
              () => {
                _(_, !1);
              },
              _.options.isScrollingResetDelay,
            ),
      _ = (_) => () => {
        (_ = _[_.options.horizontal ? "scrollX" : "scrollY"]), _(), _(_, _);
      },
      _ = _(!0),
      _ = _(!1);
    _(), _.addEventListener("scroll", _, _);
    let _ = _.options.useScrollendEvent && _;
    return (
      _ && _.addEventListener("scrollend", _, _),
      () => {
        _.removeEventListener("scroll", _),
          _ && _.removeEventListener("scrollend", _);
      }
    );
  },
  _ = (_, _, _) => {
    if (_?.borderBoxSize) {
      let _ = _.borderBoxSize[0];
      if (_)
        return Math.round(_[_.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return _[_.options.horizontal ? "offsetWidth" : "offsetHeight"];
  },
  _ = (_, { adjustments: _ = 0, behavior: _ }, _) => {
    var _, _;
    let _ = _ + _;
    (_ = (_ = _.scrollElement) == null ? void 0 : _.scrollTo) == null ||
      _.call(_, {
        [_.options.horizontal ? "left" : "top"]: _,
        behavior: _,
      });
  },
  _ = (_, { adjustments: _ = 0, behavior: _ }, _) => {
    var _, _;
    let _ = _ + _;
    (_ = (_ = _.scrollElement) == null ? void 0 : _.scrollTo) == null ||
      _.call(_, {
        [_.options.horizontal ? "left" : "top"]: _,
        behavior: _,
      });
  },
  _ = class {
    constructor(_) {
      (this.unsubs = []),
        (this.scrollElement = null),
        (this.targetWindow = null),
        (this.isScrolling = !1),
        (this.measurementsCache = []),
        (this.itemSizeCache = new Map()),
        (this.pendingMeasuredCacheIndexes = []),
        (this.scrollRect = null),
        (this.scrollOffset = null),
        (this.scrollDirection = null),
        (this.scrollAdjustments = 0),
        (this.elementsCache = new Map()),
        (this.observer = (() => {
          let _ = null,
            _ = () =>
              _ ||
              (!this.targetWindow || !this.targetWindow.ResizeObserver
                ? null
                : (_ = new this.targetWindow.ResizeObserver((_) => {
                    _.forEach((_) => {
                      let _ = () => {
                        this._measureElement(_.target, _);
                      };
                      this.options.useAnimationFrameWithResizeObserver
                        ? requestAnimationFrame(_)
                        : _();
                    });
                  })));
          return {
            disconnect: () => {
              var _;
              (_ = _()) == null || _.disconnect(), (_ = null);
            },
            observe: (_) => {
              var _;
              return (_ = _()) == null
                ? void 0
                : _.observe(_, {
                    box: "border-box",
                  });
            },
            unobserve: (_) => {
              var _;
              return (_ = _()) == null ? void 0 : _.unobserve(_);
            },
          };
        })()),
        (this.range = null),
        (this.setOptions = (_) => {
          Object.entries(_).forEach(([_, _]) => {
            typeof _ > "u" && delete _[_];
          }),
            (this.options = {
              debug: !1,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: !1,
              getItemKey: _,
              rangeExtractor: _,
              onChange: () => {},
              measureElement: _,
              initialRect: {
                width: 0,
                height: 0,
              },
              scrollMargin: 0,
              gap: 0,
              indexAttribute: "data-index",
              initialMeasurementsCache: [],
              lanes: 1,
              isScrollingResetDelay: 150,
              enabled: !0,
              isRtl: !1,
              useScrollendEvent: !1,
              useAnimationFrameWithResizeObserver: !1,
              ..._,
            });
        }),
        (this.notify = (_) => {
          var _, _;
          (_ = (_ = this.options).onChange) == null || _.call(_, this, _);
        }),
        (this.maybeNotify = _(
          () => (
            this.calculateRange(),
            [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ]
          ),
          (_) => {
            this.notify(_);
          },
          {
            key: !1,
            debug: () => this.options.debug,
            initialDeps: [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ],
          },
        )),
        (this.cleanup = () => {
          this.unsubs.filter(Boolean).forEach((_) => _()),
            (this.unsubs = []),
            this.observer.disconnect(),
            (this.scrollElement = null),
            (this.targetWindow = null);
        }),
        (this._didMount = () => () => {
          this.cleanup();
        }),
        (this._willUpdate = () => {
          var _;
          let _ = this.options.enabled ? this.options.getScrollElement() : null;
          if (this.scrollElement !== _) {
            if ((this.cleanup(), !_)) {
              this.maybeNotify();
              return;
            }
            (this.scrollElement = _),
              this.scrollElement && "ownerDocument" in this.scrollElement
                ? (this.targetWindow =
                    this.scrollElement.ownerDocument.defaultView)
                : (this.targetWindow =
                    ((_ = this.scrollElement) == null ? void 0 : _.window) ??
                    null),
              this.elementsCache.forEach((_) => {
                this.observer.observe(_);
              }),
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: void 0,
                behavior: void 0,
              }),
              this.unsubs.push(
                this.options.observeElementRect(this, (_) => {
                  (this.scrollRect = _), this.maybeNotify();
                }),
              ),
              this.unsubs.push(
                this.options.observeElementOffset(this, (_, _) => {
                  (this.scrollAdjustments = 0),
                    (this.scrollDirection = _
                      ? this.getScrollOffset() < _
                        ? "forward"
                        : "backward"
                      : null),
                    (this.scrollOffset = _),
                    (this.isScrolling = _),
                    this.maybeNotify();
                }),
              );
          }
        }),
        (this.getSize = () =>
          this.options.enabled
            ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect),
              this.scrollRect[this.options.horizontal ? "width" : "height"])
            : ((this.scrollRect = null), 0)),
        (this.getScrollOffset = () =>
          this.options.enabled
            ? ((this.scrollOffset =
                this.scrollOffset ??
                (typeof this.options.initialOffset == "function"
                  ? this.options.initialOffset()
                  : this.options.initialOffset)),
              this.scrollOffset)
            : ((this.scrollOffset = null), 0)),
        (this.getFurthestMeasurement = (_, _) => {
          let _ = new Map(),
            _ = new Map();
          for (let _ = _ - 1; _ >= 0; _--) {
            let _ = _[_];
            if (_.has(_.lane)) continue;
            let _ = _.get(_.lane);
            if (
              (_ == null || _.end > _.end
                ? _.set(_.lane, _)
                : _.end < _.end && _.set(_.lane, !0),
              _.size === this.options.lanes)
            )
              break;
          }
          return _.size === this.options.lanes
            ? Array.from(_.values()).sort((_, _) =>
                _.end === _.end ? _.index - _.index : _.end - _.end,
              )[0]
            : void 0;
        }),
        (this.getMeasurementOptions = _(
          () => [
            this.options.count,
            this.options.paddingStart,
            this.options.scrollMargin,
            this.options.getItemKey,
            this.options.enabled,
          ],
          (_, _, _, _, _) => (
            (this.pendingMeasuredCacheIndexes = []),
            {
              count: _,
              paddingStart: _,
              scrollMargin: _,
              getItemKey: _,
              enabled: _,
            }
          ),
          {
            key: !1,
          },
        )),
        (this.getMeasurements = _(
          () => [this.getMeasurementOptions(), this.itemSizeCache],
          (
            {
              count: _,
              paddingStart: _,
              scrollMargin: _,
              getItemKey: _,
              enabled: _,
            },
            _,
          ) => {
            if (!_)
              return (
                (this.measurementsCache = []), this.itemSizeCache.clear(), []
              );
            this.measurementsCache.length === 0 &&
              ((this.measurementsCache = this.options.initialMeasurementsCache),
              this.measurementsCache.forEach((_) => {
                this.itemSizeCache.set(_.key, _.size);
              }));
            let _ =
              this.pendingMeasuredCacheIndexes.length > 0
                ? Math.min(...this.pendingMeasuredCacheIndexes)
                : 0;
            this.pendingMeasuredCacheIndexes = [];
            let _ = this.measurementsCache.slice(0, _);
            for (let _ = _; _ < _; _++) {
              let _ = _(_),
                _ =
                  this.options.lanes === 1
                    ? _[_ - 1]
                    : this.getFurthestMeasurement(_, _),
                _ = _ ? _.end + this.options.gap : _ + _,
                _ = _.get(_),
                _ = typeof _ == "number" ? _ : this.options.estimateSize(_),
                _ = _ + _,
                _ = _ ? _.lane : _ % this.options.lanes;
              _[_] = {
                index: _,
                start: _,
                size: _,
                end: _,
                key: _,
                lane: _,
              };
            }
            return (this.measurementsCache = _), _;
          },
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.calculateRange = _(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
            this.options.lanes,
          ],
          (_, _, _, _) =>
            (this.range =
              _.length > 0 && _ > 0
                ? _({
                    measurements: _,
                    outerSize: _,
                    scrollOffset: _,
                    lanes: _,
                  })
                : null),
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.getVirtualIndexes = _(
          () => {
            let _ = null,
              _ = null,
              _ = this.calculateRange();
            return (
              _ && ((_ = _.startIndex), (_ = _.endIndex)),
              this.maybeNotify.updateDeps([this.isScrolling, _, _]),
              [
                this.options.rangeExtractor,
                this.options.overscan,
                this.options.count,
                _,
                _,
              ]
            );
          },
          (_, _, _, _, _) =>
            _ === null || _ === null
              ? []
              : _({
                  startIndex: _,
                  endIndex: _,
                  overscan: _,
                  count: _,
                }),
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.indexFromElement = (_) => {
          let _ = this.options.indexAttribute,
            _ = _.getAttribute(_);
          return _
            ? parseInt(_, 10)
            : (console.warn(
                `Missing attribute name '${_}={index}' on measured element.`,
              ),
              -1);
        }),
        (this._measureElement = (_, _) => {
          let _ = this.indexFromElement(_),
            _ = this.measurementsCache[_];
          if (!_) return;
          let _ = _.key,
            _ = this.elementsCache.get(_);
          _ !== _ &&
            (_ && this.observer.unobserve(_),
            this.observer.observe(_),
            this.elementsCache.set(_, _)),
            _.isConnected &&
              this.resizeItem(_, this.options.measureElement(_, _, this));
        }),
        (this.resizeItem = (_, _) => {
          let _ = this.measurementsCache[_];
          if (!_) return;
          let _ = this.itemSizeCache.get(_.key) ?? _.size,
            _ = _ - _;
          _ !== 0 &&
            ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
              ? this.shouldAdjustScrollPositionOnItemSizeChange(_, _, this)
              : _.start < this.getScrollOffset() + this.scrollAdjustments) &&
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += _),
                behavior: void 0,
              }),
            this.pendingMeasuredCacheIndexes.push(_.index),
            (this.itemSizeCache = new Map(this.itemSizeCache.set(_.key, _))),
            this.notify(!1));
        }),
        (this.measureElement = (_) => {
          if (!_) {
            this.elementsCache.forEach((_, _) => {
              _.isConnected ||
                (this.observer.unobserve(_), this.elementsCache.delete(_));
            });
            return;
          }
          this._measureElement(_, void 0);
        }),
        (this.getVirtualItems = _(
          () => [this.getVirtualIndexes(), this.getMeasurements()],
          (_, _) => {
            let _ = [];
            for (let _ = 0, _ = _.length; _ < _; _++) {
              let _ = _[_],
                _ = _[_];
              _.push(_);
            }
            return _;
          },
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.getVirtualItemForOffset = (_) => {
          let _ = this.getMeasurements();
          if (_.length !== 0)
            return _(_[_(0, _.length - 1, (_) => _(_[_]).start, _)]);
        }),
        (this.getOffsetForAlignment = (_, _, _ = 0) => {
          let _ = this.getSize(),
            _ = this.getScrollOffset();
          _ === "auto" && (_ = _ >= _ + _ ? "end" : "start"),
            _ === "center" ? (_ += (_ - _) / 2) : _ === "end" && (_ -= _);
          let _ = this.getTotalSize() + this.options.scrollMargin - _;
          return Math.max(Math.min(_, _), 0);
        }),
        (this.getOffsetForIndex = (_, _ = "auto") => {
          _ = Math.max(0, Math.min(_, this.options.count - 1));
          let _ = this.measurementsCache[_];
          if (!_) return;
          let _ = this.getSize(),
            _ = this.getScrollOffset();
          if (_ === "auto")
            if (_.end >= _ + _ - this.options.scrollPaddingEnd) _ = "end";
            else if (_.start <= _ + this.options.scrollPaddingStart)
              _ = "start";
            else return [_, _];
          let _ =
            _ === "end"
              ? _.end + this.options.scrollPaddingEnd
              : _.start - this.options.scrollPaddingStart;
          return [this.getOffsetForAlignment(_, _, _.size), _];
        }),
        (this.isDynamicMode = () => this.elementsCache.size > 0),
        (this.scrollToOffset = (
          _,
          { align: _ = "start", behavior: _ } = {},
        ) => {
          _ === "smooth" &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            this._scrollToOffset(this.getOffsetForAlignment(_, _), {
              adjustments: void 0,
              behavior: _,
            });
        }),
        (this.scrollToIndex = (_, { align: _ = "auto", behavior: _ } = {}) => {
          _ === "smooth" &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            (_ = Math.max(0, Math.min(_, this.options.count - 1)));
          let _ = 0,
            _ = 10,
            _ = (_) => {
              if (!this.targetWindow) return;
              let _ = this.getOffsetForIndex(_, _);
              if (!_) {
                console.warn("Failed to get offset for index:", _);
                return;
              }
              let [_, _] = _;
              this._scrollToOffset(_, {
                adjustments: void 0,
                behavior: _,
              }),
                this.targetWindow.requestAnimationFrame(() => {
                  let _ = this.getScrollOffset(),
                    _ = this.getOffsetForIndex(_, _);
                  if (!_) {
                    console.warn("Failed to get offset for index:", _);
                    return;
                  }
                  _(_[0], _) || _(_);
                });
            },
            _ = (_) => {
              this.targetWindow &&
                (_++,
                _ < _
                  ? this.targetWindow.requestAnimationFrame(() => _(_))
                  : console.warn(
                      `Failed to scroll to index ${_} after ${_} attempts.`,
                    ));
            };
          _(_);
        }),
        (this.scrollBy = (_, { behavior: _ } = {}) => {
          _ === "smooth" &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            this._scrollToOffset(this.getScrollOffset() + _, {
              adjustments: void 0,
              behavior: _,
            });
        }),
        (this.getTotalSize = () => {
          var _;
          let _ = this.getMeasurements(),
            _;
          if (_.length === 0) _ = this.options.paddingStart;
          else if (this.options.lanes === 1)
            _ = ((_ = _[_.length - 1]) == null ? void 0 : _.end) ?? 0;
          else {
            let _ = Array(this.options.lanes).fill(null),
              _ = _.length - 1;
            for (; _ >= 0 && _.some((_) => _ === null); ) {
              let _ = _[_];
              _[_.lane] === null && (_[_.lane] = _.end), _--;
            }
            _ = Math.max(..._.filter((_) => _ !== null));
          }
          return Math.max(
            _ - this.options.scrollMargin + this.options.paddingEnd,
            0,
          );
        }),
        (this._scrollToOffset = (_, { adjustments: _, behavior: _ }) => {
          this.options.scrollToFn(
            _,
            {
              behavior: _,
              adjustments: _,
            },
            this,
          );
        }),
        (this.measure = () => {
          (this.itemSizeCache = new Map()), this.notify(!1);
        }),
        this.setOptions(_);
    }
  },
  _ = (_, _, _, _) => {
    for (; _ <= _; ) {
      let _ = ((_ + _) / 2) | 0,
        _ = _(_);
      if (_ < _) _ = _ + 1;
      else if (_ > _) _ = _ - 1;
      else return _;
    }
    return _ > 0 ? _ - 1 : 0;
  };
function _({ measurements: _, outerSize: _, scrollOffset: _, lanes: _ }) {
  let _ = _.length - 1,
    _ = (_) => _[_].start;
  if (_.length <= _)
    return {
      startIndex: 0,
      endIndex: _,
    };
  let _ = _(0, _, _, _),
    _ = _;
  if (_ === 1) for (; _ < _ && _[_].end < _ + _; ) _++;
  else if (_ > 1) {
    let _ = Array(_).fill(0);
    for (; _ < _ && _.some((_) => _ < _ + _); ) {
      let _ = _[_];
      (_[_.lane] = _.end), _++;
    }
    let _ = Array(_).fill(_ + _);
    for (; _ >= 0 && _.some((_) => _ >= _); ) {
      let _ = _[_];
      (_[_.lane] = _.start), _--;
    }
    (_ = Math.max(0, _ - (_ % _))), (_ = Math.min(_, _ + (_ - 1 - (_ % _))));
  }
  return {
    startIndex: _,
    endIndex: _,
  };
}
var _ = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
function _(_) {
  let _ = _.useReducer(() => ({}), {})[1],
    _ = {
      ..._,
      onChange: (_, _) => {
        var _;
        _ ? (0, _.flushSync)(_) : _(),
          (_ = _.onChange) == null || _.call(_, _, _);
      },
    },
    [_] = _.useState(() => new _(_));
  return (
    _.setOptions(_), _(() => _._didMount(), []), _(() => _._willUpdate()), _
  );
}
function _(_) {
  return _({
    observeElementRect: _,
    observeElementOffset: _,
    scrollToFn: _,
    ..._,
  });
}
function _(_) {
  return _({
    getScrollElement: () => (typeof document < "u" ? window : null),
    observeElementRect: _,
    observeElementOffset: _,
    scrollToFn: _,
    initialOffset: () => (typeof document < "u" ? window.scrollY : 0),
    ..._,
  });
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = {
  FancyTableRow: "kMs3yPwRNJU-",
  ExpandableRow: "-aEZYAopuvs-",
  FancyTableHeader: "ATS0RvqnDxI-",
  StickyHeader: "IhMvEfnqfeY-",
  FancyTableCell: "YkOPf-olMJk-",
  SortButton: "_4qcE4cDJLcc-",
  ColumnHeader: "aGleglMJRQ8-",
  ResizeHandle: "hg972clPxY0-",
  PrevResizeHandle: "J29IGkWfmgY-",
  SortIndicator: "NaW1Gd1ndhY-",
  GroupExpandIndicator: "RftEcN2cOXo-",
  RowGroup: "ZgA5JQ-Lm0c-",
};
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _.default.memo(function (_) {
    let { virtualizer: _, bDynamic: _, idx: _, rowGap: _, renderItem: _ } = _,
      _ = _.default.useCallback(
        (_, _, _) => (
          _.scrollToIndex(_, {
            align: "center",
          }),
          !0
        ),
        [_, _],
      );
    return (0, _.jsx)(_, {
      ref: _ ? _.measureElement : void 0,
      navKey: `VirtualizedListIndex-${_}`,
      "data-index": _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewWhenChildFocused: "force",
      style: {
        width: "100%",
        paddingBottom: _,
      },
      children: _(_),
    });
  }),
  _ = _.default.forwardRef(function (_, _) {
    let {
        nRows: _,
        nItemHeight: _,
        nRowGap: _,
        overscan: _,
        renderItem: _,
        bDynamic: _,
        measureElement: _,
        className: _,
        forceVirtualizeType: _,
        initialOffset: _,
        onOffsetChange: _,
        ..._
      } = _,
      [_, _] = (0, _.useState)(_),
      [_, _] = _.default.useState(),
      [_, _] = _.default.useState(),
      _ = _.default.useCallback(
        (_) => {
          if (!_ || _ == "window") return;
          let _ = _(_, "y");
          (0, _.startTransition)(() => {
            _(_ || void 0), _(_.offsetTop), _ || _(_ ? "element" : "window");
          });
        },
        [_],
      ),
      _ = _(_, _),
      _ = {
        nRows: _,
        nItemHeight: _,
        nRowGap: _,
        overscan: _,
        renderItem: _,
        bDynamic: _,
        measureElement: _,
        forceVirtualizeType: _,
        initialOffset: _,
        onOffsetChange: _,
      };
    return (0, _.jsx)(_, {
      className: _,
      ref: _,
      ..._,
      children: (0, _.jsxs)(_.Suspense, {
        children: [
          _ === "element" &&
            (0, _.jsx)(_, {
              ..._,
              nScrollMargin: _ || 0,
              elScrollable: _,
            }),
          _ === "window" &&
            (0, _.jsx)(_, {
              ..._,
              nScrollMargin: _,
            }),
        ],
      }),
    });
  });
function _(_) {
  let {
      nScrollMargin: _,
      nRows: _,
      nItemHeight: _,
      nRowGap: _ = 10,
      overscan: _ = 6,
      initialOffset: _,
      onOffsetChange: _,
      measureElement: _,
    } = _,
    _ = _(),
    _ = _ + _,
    _ = _({
      count: _,
      scrollMargin: _,
      estimateSize: _.default.useCallback(() => _, [_]),
      measureElement: _,
      overscan: _,
      initialOffset: _,
      initialRect: {
        height: _.viewportHeight?.value ?? 1e3,
        width: _.viewportWidth?.value ?? 1e3,
      },
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    _.default.useEffect(() => {
      (0, _.startTransition)(() => {
        _.measure();
      });
    }, [_, _]),
    (0, _.jsx)(_, {
      ..._,
      virtualizer: _,
    })
  );
}
function _(_) {
  let {
      nRows: _,
      nScrollMargin: _,
      elScrollable: _,
      nItemHeight: _,
      nRowGap: _ = 10,
      overscan: _ = 6,
      initialOffset: _,
      onOffsetChange: _,
      measureElement: _,
    } = _,
    _ = _ + _,
    _ = _(),
    _ = _({
      count: _,
      scrollMargin: _ - (_?.offsetTop || 0),
      getScrollElement: () => _,
      estimateSize: _.default.useCallback(() => _, [_]),
      measureElement: _,
      overscan: _,
      initialRect: {
        height: _.viewportHeight?.value ?? 1e3,
        width: _.viewportWidth?.value ?? 1e3,
      },
      initialOffset: _,
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    _.default.useEffect(() => {
      (0, _.startTransition)(() => {
        _.measure();
      });
    }, [_, _]),
    (0, _.jsx)(_, {
      ..._,
      virtualizer: _,
    })
  );
}
function _(_) {
  let { virtualizer: _, nRowGap: _, renderItem: _, bDynamic: _ } = _,
    _ = _.getVirtualItems(),
    _ = _.length ? _[0].start - _.options.scrollMargin : 0,
    _ = Math.max(0, _.getTotalSize());
  return (0, _.jsx)(_, {
    "flow-children": "column",
    navEntryPreferPosition: 3,
    style: {
      height: `${_}px`,
      width: "100%",
      position: "relative",
    },
    children: (0, _.jsx)("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY( ${_}px )`,
      },
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            virtualizer: _,
            bDynamic: _,
            idx: _.index,
            rowGap: _,
            renderItem: _,
          },
          _.key,
        ),
      ),
    }),
  });
}
function _(_) {
  return (..._) => {
    queueMicrotask(() => {
      (0, _.startTransition)(() => {
        _(..._);
      });
    });
  };
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _;
  "scrollX" in _
    ? (_ = _((_) => _(_[_.options.horizontal ? "scrollX" : "scrollY"], _)))
    : (_ = _((_) =>
        _(_[_.options.horizontal ? "scrollLeft" : "scrollTop"], _),
      ));
  let _ = () => _(!0),
    _ = () => _(!1);
  return (
    _(),
    _.addEventListener("scroll", _, {
      passive: !0,
    }),
    _.addEventListener("scrollend", _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener("scroll", _), _.removeEventListener("scrollend", _);
    }
  );
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _ = _(() =>
    _({
      width: _.innerWidth,
      height: _.innerHeight,
    }),
  );
  return (
    _(),
    _.addEventListener("resize", _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener("resize", _);
    }
  );
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _ = _((_) =>
    _({
      width: Math.round(_.width),
      height: Math.round(_.height),
    }),
  );
  _(_.getBoundingClientRect());
  let _ = _.ownerDocument.defaultView;
  if (!_?.ResizeObserver) return () => {};
  let _ = new _.ResizeObserver((_) => {
    if (_[0]?.borderBoxSize[0]) {
      _({
        width: _[0].borderBoxSize[0].inlineSize,
        height: _[0].borderBoxSize[0].blockSize,
      });
      return;
    }
    _(_.getBoundingClientRect());
  });
  return (
    _.observe(_, {
      box: "border-box",
    }),
    () => {
      _.unobserve(_);
    }
  );
}
var _ = _(_(), 1),
  _ = _.default.createContext(void 0);
function _(_) {
  let { table: _, setColumnSizeOverride: _ } = _,
    _ = (0, _.useRef)(_);
  _.current = _;
  let _ = (0, _.useMemo)(
    () => ({
      table: _.current,
      setColumnSizeOverride: _,
    }),
    [_],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
var _ = _.default.forwardRef(function (_, _) {
  let {
      data: _,
      columns: _,
      className: _,
      width: _,
      height: _,
      nScrollMargin: _,
      nItemHeight: _,
      nHeaderHeight: _,
      overscan: _ = 6,
      stickyHeader: _,
      getRowKey: _,
      initialSorting: _,
      initialColumnFilters: _,
      initialGrouping: _,
      initialExpanded: _,
      initialColumnPinning: _,
      initialColumnVisibility: _,
      onGroupingChange: _,
      onVisibleRowsChange: _,
      renderGroup: _,
      virtualizeType: _ = "element",
    } = _,
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)({}),
    [_, _] = (0, _.useState)({}),
    _ = _.map((_) =>
      "accessorKey" in _
        ? {
            ..._,
            filterFn: _[_.accessorKey] ?? _.filterFn,
          }
        : _,
    ),
    _ = _.map((_) => {
      let _ = _[_._];
      return (
        _ === void 0 && "accessorKey" in _ && (_ = _[_.accessorKey]),
        (_ ??= _.size),
        {
          ..._,
          size: _,
        }
      );
    }),
    _ = _({
      data: _,
      columns: _,
      defaultColumn: {
        minSize: 60,
        maxSize: 800,
      },
      initialState: {
        sorting: _,
        grouping: _ ?? [],
        expanded: _,
        columnPinning: _ ?? {},
        columnFilters: _,
        columnVisibility: _,
      },
      getCoreRowModel: _(),
      getSortedRowModel: _(),
      getFilteredRowModel: _(),
      getGroupedRowModel: _(),
      columnResizeMode: "onChange",
    }),
    { rows: _, flatRows: _ } = _.getRowModel(),
    _ = _.flatMap((_) => (_.getIsExpanded() ? [_, ..._.subRows] : _)),
    _ = _.getState().grouping;
  (0, _.useEffect)(() => {
    _?.(_);
  }, [_, _]),
    (0, _.useEffect)(() => {
      _?.(_);
    }, [_, _.length]);
  let _ = _({
      count: _.length,
      scrollMargin: _,
      getScrollElement: _.default.useCallback(
        () => (_ === "element" ? _.current : window),
        [_],
      ),
      scrollToFn(_, _, _) {
        return _ === "window" ? _(_, _, _) : _(_, _, _);
      },
      estimateSize: _.default.useCallback(() => _, [_]),
      overscan: _,
      initialRect: {
        height: 1e3,
        width: 1e3,
      },
      observeElementOffset: _,
      observeElementRect(_, _) {
        return _ === "window" ? _(_, _) : _(_, _);
      },
      getItemKey(_) {
        let _ = _[_];
        return `${_.parentId ?? ""}${_(_, _.original)}`;
      },
    }),
    _ = (0, _.useRef)(0),
    _ = _.default.useMemo(() => {
      let _ = _.getFlatHeaders(),
        _ = {};
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        (_[`--header-${_._}-size`] = `${_.getSize()}px`),
          (_[`--col-${_.column._}-size`] = `${_.column.getSize()}px`);
      }
      return (_.current += 1), _;
    }, [_.getState().columnSizingInfo, _.getState().columnSizing, _]);
  _.default.useEffect(() => {
    (0, _.startTransition)(() => {
      _.measure();
    });
  }, [_, _]);
  let _ = _.getVirtualItems(),
    _ = _[0]?.start ?? 0,
    _ = _.getTotalSize(),
    _ = _({
      estimateSize(_) {
        return _[0]?.getVisibleCells()[_].column.getSize() ?? 0;
      },
      count: _[0]?.getVisibleCells().length ?? 0,
      overscan: 6,
      horizontal: !0,
      getScrollElement: _.default.useCallback(
        () => (_ === "element" ? _.current : window),
        [_],
      ),
      scrollToFn(_, _, _) {
        return _ === "window" ? _(_, _, _) : _(_, _, _);
      },
      rangeExtractor(_) {
        let _ = _[0]?.getVisibleCells() ?? [],
          _ = new Set(_(_));
        return (
          _.forEach((_, _) => {
            _.column.getIsPinned() && _.add(_);
          }),
          Array.from(_).sort((_, _) => _ - _)
        );
      },
      observeElementOffset: _,
      observeElementRect(_, _) {
        return _ === "window" ? _(_, _) : _(_, _);
      },
    });
  (0, _.useEffect)(() => {
    _.measure();
  }, [_.current]),
    (0, _.useImperativeHandle)(
      _,
      () => ({
        getData() {
          return _.map((_) => _.original);
        },
        getVisibleRows() {
          return _;
        },
        getState: _.getState,
        getColumns: _.getAllColumns,
        getColumnDefs() {
          return _;
        },
        setColumnFilters: _.setColumnFilters,
        resetColumnFilters: _.resetColumnFilters,
        setColumnFilterFnOverride: _,
        getColumnFilterFnOverride() {
          return _;
        },
        getContainerElement() {
          return _.current;
        },
        getTableElement() {
          return _.current;
        },
        scrollToColumn(_, _) {
          _.scrollToIndex(_.getIndex(), _);
        },
      }),
      [
        _,
        _,
        _.setColumnFilters,
        _.resetColumnFilters,
        _.getState,
        _.getAllColumns,
        _,
        _,
        _,
      ],
    );
  let _ = (0, _.useRef)(null),
    _ = _ ? (_ ?? 0) : 0,
    _ = 0,
    _ = _[0]?.getVisibleCells(),
    _ = _.getVirtualItems(),
    _ = _[_.length - 1]?.end;
  for (let _ of _) _[_.index]?.column.getIsPinned() && (_ += _.size);
  return (0, _.jsx)(_, {
    table: _,
    setColumnSizeOverride: _,
    children: (0, _.jsx)("div", {
      className: _,
      ref: _,
      style: {
        width: _,
        height: _,
        overflow: _ === "element" ? "auto" : void 0,
        maxWidth: "fit-content",
        scrollPadding: `${_}px 0 0 ${_}px`,
      },
      children: (0, _.jsxs)("div", {
        role: "table",
        ref: _,
        "aria-rowcount": _.length,
        style: {
          minHeight: _,
          width: _.getTotalSize(),
          "--virtualPos": `${_}px`,
          ..._,
        },
        children: [
          _.getHeaderGroups().map((_) =>
            (0, _.jsx)(
              _,
              {
                group: _,
                sticky: _,
                nHeaderHeight: _,
              },
              _._,
            ),
          ),
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                row: _[_.index],
                size: _.size,
                rowVirtualizer: _,
                index: _.index,
                measureRef: _.measureElement,
                scrollContainerRef: _,
                nItemHeight: _,
                renderGroup: _,
                rowEnd: _,
              },
              _.key,
            ),
          ),
        ],
      }),
    }),
  });
});
function _(_) {
  let _ = _.getIsPinned(),
    _ = _ === "left" && _.getIsLastColumn("left"),
    _ = _ === "right" && _.getIsFirstColumn("right");
  return {
    borderRight: _
      ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
      : void 0,
    borderLeft: _
      ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
      : void 0,
    left: _ === "left" ? `${_.getStart("left")}px` : void 0,
    right: _ === "right" ? `${_.getAfter("right")}px` : void 0,
    position: _ ? "sticky" : "relative",
    minWidth: _.getSize(),
    zIndex: _ ? 1 : 0,
  };
}
function _(_) {
  let { group: _, sticky: _, nHeaderHeight: _ } = _;
  return (0, _.jsx)("div", {
    role: "row",
    className: (0, _.default)(
      _.FancyTableRow,
      _.FancyTableHeader,
      _ && _.StickyHeader,
    ),
    children: _.headers.map((_, _) => {
      let _ = _.headers[_ - 1],
        _ = {},
        _ = _.column.getIsSorted();
      _ &&
        !_.column.columnDef.meta?.bDisableSortButton &&
        (_["aria-sort"] = _ === "asc" ? "ascending" : "descending");
      let _ = "div";
      return (
        _.column.getCanSort() &&
          !_.column.columnDef.meta?.bDisableSortButton &&
          ((_ = "button"), (_.onClick = _.column.getToggleSortingHandler())),
        _.column.columnDef.meta?.strHeaderTooltip &&
          (_.title = _.column.columnDef.meta?.strHeaderTooltip),
        (0, _.jsx)(
          _,
          {
            header: _,
            prevHeader: _,
            HeaderElement: _,
            nHeaderHeight: _,
            sortDirection: _,
            conditionalProps: _,
          },
          _._,
        )
      );
    }),
  });
}
var _ = _.default.memo(function (_) {
  let {
    row: _,
    size: _,
    rowVirtualizer: _,
    measureRef: _,
    index: _,
    nItemHeight: _,
    renderGroup: _,
  } = _;
  return (0, _.jsx)("div", {
    role: "row",
    className: (0, _.default)(
      _.FancyTableRow,
      _.getCanExpand() && _.ExpandableRow,
    ),
    style: {
      minHeight: _.getCanExpand() ? void 0 : `${_}px`,
      transform: "translateY(var(--virtualPos))",
    },
    "data-even": _ % 2 === 0,
    "data-index": _,
    ref: _,
    children: (0, _.jsx)(_, {
      row: _,
      rowVirtualizer: _,
      nItemHeight: _,
      renderGroup: _,
    }),
  });
});
function _(_) {
  let { row: _, rowVirtualizer: _, renderGroup: _ } = _;
  if (_.getCanExpand()) {
    let _ = _ ?? (() => _.groupingValue);
    return (0, _.jsxs)("button", {
      className: _.RowGroup,
      "aria-expanded": _.getIsExpanded(),
      onClick: _.getToggleExpandedHandler(),
      children: [
        (0, _.jsx)("div", {
          className: _.GroupExpandIndicator,
        }),
        _(_),
      ],
    });
  }
  let _ = _.getVirtualItems(),
    _ = _.getVisibleCells(),
    _ = 0,
    _;
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) => {
      let _ = _[_.index],
        _ = _.column.getIsPinned();
      return (
        _ ? (_ += _.size) : _ === void 0 && (_ = _.start),
        (0, _.jsx)(
          _,
          {
            cell: _,
            rowVirtualizer: _,
            index: _.index,
            transform: _ ? void 0 : `translateX(${_ - _}px)`,
          },
          _._,
        )
      );
    }),
  });
}
function _(_, _) {
  let _ = (0, _.useContext)(_),
    _ = _.columnDef.meta?.bGrowToFit,
    _ = _._,
    _ = _ ? _.getSize() : 0,
    _ = _.getIsSorted();
  (0, _.useLayoutEffect)(() => {
    if (!_ || !_.current) return;
    let _ = _.current?.scrollWidth;
    if (!_) return;
    let _ = _.current.getBoundingClientRect().width,
      _ = window.getComputedStyle(_.current),
      _ = _;
    if (_ > _) {
      if (_.paddingLeft) {
        let _ = parseInt(_.paddingLeft);
        isNaN(_) || (_ += _);
      }
      if (_.paddingRight) {
        let _ = parseInt(_.paddingRight);
        isNaN(_) || (_ += _);
      }
    }
    _ > _ &&
      _.setColumnSizeOverride((_) =>
        _[_] > _
          ? _
          : {
              ..._,
              [_]: _,
            },
      );
  }, [_, _, _, _, _, _]);
}
function _(_) {
  let {
      header: _,
      prevHeader: _,
      HeaderElement: _,
      nHeaderHeight: _,
      sortDirection: _,
      conditionalProps: _,
    } = _,
    _ = (0, _.useRef)(null);
  return (
    _(_.column, _),
    (0, _.jsxs)(
      _,
      {
        role: "columnheader",
        ref: _,
        "data-pinned": !!_.column.getIsPinned(),
        className: (0, _.default)(
          _.ColumnHeader,
          _ === "button" && _.SortButton,
          _.column.columnDef.meta?.headerClassname,
        ),
        style: {
          width: `var(--header-${_._}-size)`,
          height: _ !== void 0 ? `${_}px` : void 0,
          ..._(_.column),
        },
        ..._,
        children: [
          _?.column.getCanResize() &&
            (0, _.jsx)("div", {
              role: "presentation",
              onDoubleClick: () => _.column.resetSize(),
              onMouseDown: _.getResizeHandler(),
              onTouchStart: _.getResizeHandler(),
              onClick: (_) => _.stopPropagation(),
              className: (0, _.default)(_.ResizeHandle, _.PrevResizeHandle),
            }),
          _.isPlaceholder ? null : _(_.column.columnDef.header, _.getContext()),
          _ &&
            !_.column.columnDef.meta?.bDisableSortButton &&
            (0, _.jsx)("div", {
              className: _.SortIndicator,
            }),
          _.column.getCanResize() &&
            (0, _.jsx)("div", {
              role: "presentation",
              onDoubleClick: () => _.column.resetSize(),
              onMouseDown: _.getResizeHandler(),
              onTouchStart: _.getResizeHandler(),
              onClick: (_) => _.stopPropagation(),
              className: (0, _.default)(
                _.ResizeHandle,
                _.column.getIsResizing() && _.IsResizing,
              ),
            }),
        ],
      },
      _._,
    )
  );
}
function _(_) {
  let { cell: _, rowVirtualizer: _, index: _, transform: _ } = _,
    _ = _.default.useRef(null),
    _ = _(_, _.measure);
  return (
    _(_.column, _),
    (0, _.jsx)("div", {
      className: (0, _.default)(
        _.FancyTableCell,
        _.column.columnDef.meta?.cellClassname,
      ),
      "data-index": _,
      "data-table-column-id": _.column._,
      ref: _,
      style: {
        width: `var(--col-${_.column._}-size)`,
        transform: _,
        ..._(_.column),
      },
      children: (0, _.jsx)(_, {
        CellComponent: _.column.columnDef.cell,
        context: _.getContext(),
      }),
    })
  );
}
function _(_) {
  return _(_.CellComponent, _.context);
}
var _ = _.default.memo(
  _,
  (_, _) => _.context.getValue() === _.context.getValue(),
);
var _ = {
    0: {},
    1: {
      strSymbol: "$",
    },
    2: {
      strSymbol: "£",
    },
    3: {
      strSymbol: "€",
    },
    4: {
      strSymbol: "CHF",
    },
    5: {
      strSymbol: "руб.",
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: "",
    },
    6: {
      strSymbol: "zł",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: " ",
    },
    7: {
      strSymbol: "R$",
      bSpaceForSymbol: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: ".",
    },
    8: {
      strSymbol: "¥",
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
    },
    9: {
      strSymbol: "kr",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: ".",
    },
    10: {
      strSymbol: "Rp",
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: ".",
      strThousandsSeparator: " ",
    },
    11: {
      strSymbol: "RM",
    },
    12: {
      strSymbol: "P",
    },
    13: {
      strSymbol: "S$",
    },
    14: {
      strSymbol: "฿",
    },
    15: {
      strSymbol: "₫",
      bWholeUnitsOnly: !0,
      bSuffixSymbol: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: ".",
    },
    16: {
      strSymbol: "₩",
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
    },
    17: {
      strSymbol: "TL",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: ".",
    },
    18: {
      strSymbol: "₴",
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: " ",
    },
    19: {
      strSymbol: "Mex$",
      bSpaceForSymbol: !0,
    },
    20: {
      strSymbol: "CDN$",
      bSpaceForSymbol: !0,
    },
    21: {
      strSymbol: "A$",
      bSpaceForSymbol: !0,
    },
    22: {
      strSymbol: "NZ$",
      bSpaceForSymbol: !0,
    },
    23: {
      strSymbol: "¥",
      bSpaceForSymbol: !0,
    },
    24: {
      strSymbol: "₹",
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
    },
    25: {
      strSymbol: "CLP$",
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: ".",
    },
    26: {
      strSymbol: "S/.",
    },
    27: {
      strSymbol: "COL$",
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: ".",
    },
    28: {
      strSymbol: "R",
      bSpaceForSymbol: !0,
      strDecimalSymbol: ".",
      strThousandsSeparator: " ",
    },
    29: {
      strSymbol: "HK$",
      bSpaceForSymbol: !0,
    },
    30: {
      strSymbol: "NT$",
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
    },
    31: {
      strSymbol: "SR",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    32: {
      strSymbol: "AED",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    33: {
      strSymbol: "kr",
      bSpaceForSymbol: !0,
      bSuffixSymbol: !0,
    },
    34: {
      strSymbol: "ARS$",
      bSpaceForSymbol: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: ".",
    },
    35: {
      strSymbol: "₪",
    },
    36: {
      strSymbol: "Br",
    },
    37: {
      strSymbol: "₸",
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: " ",
    },
    38: {
      strSymbol: "KD",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    39: {
      strSymbol: "QR",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    40: {
      strSymbol: "₡",
      bWholeUnitsOnly: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: ".",
    },
    41: {
      strSymbol: "$U",
      bWholeUnitsOnly: !0,
      strDecimalSymbol: ",",
      strThousandsSeparator: ".",
    },
    42: {
      strSymbol: "лв",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    43: {
      strSymbol: "kn",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    44: {
      strSymbol: "Kč",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    45: {
      strSymbol: "kr.",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    46: {
      strSymbol: "Ft",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    47: {
      strSymbol: "lei",
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    48: {},
  },
  _ = {
    strSymbol: "",
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: ".",
    strThousandsSeparator: ",",
  };
function _(_) {
  return {
    ..._,
    ..._[_],
    eCurrency: _,
  };
}
function _(_, _) {
  let _ = _(_);
  return _(_, _);
}
function _(_, _) {
  let {
      strSymbol: _,
      bSuffixSymbol: _,
      bSpaceForSymbol: _,
      bWholeUnitsOnly: _,
      strDecimalSymbol: _,
      strThousandsSeparator: _,
    } = _,
    _ = _ < 0,
    _ = _ && _ % 100 === 0;
  _ && (_ = -_);
  let _ = [];
  for (let _ = 0; _ < 2; _++) _ || _.push(_ % 10), (_ = Math.floor(_ / 10));
  !_ && _ && _.push(_);
  let _ = 0;
  do
    _++ % 3 === 0 && _ > 2 && _ && _.push(_),
      _.push(_ % 10),
      (_ = Math.floor(_ / 10));
  while (_ > 0);
  let _ = _.reverse().join(""),
    _ = _ ? " " : "",
    _ = _ ? "-" : "";
  return _ ? `${_}${_}${_}${_}` : `${_}${_}${_}${_}`;
}
var _ = "./currency_arabic-XXXXXXXX.json";
var _ = "./currency_brazilian-XXXXXXXX.json";
var _ = "./currency_bulgarian-XXXXXXXX.json";
var _ = "./currency_czech-XXXXXXXX.json";
var _ = "./currency_danish-XXXXXXXX.json";
var _ = "./currency_dutch-XXXXXXXX.json";
var _ = "./currency_english-XXXXXXXX.json";
var _ = "./currency_finnish-XXXXXXXX.json";
var _ = "./currency_french-XXXXXXXX.json";
var _ = "./currency_german-XXXXXXXX.json";
var _ = "./currency_greek-XXXXXXXX.json";
var _ = "./currency_hungarian-XXXXXXXX.json";
var _ = "./currency_indonesian-XXXXXXXX.json";
var _ = "./currency_italian-XXXXXXXX.json";
var _ = "./currency_japanese-XXXXXXXX.json";
var _ = "./currency_koreana-XXXXXXXX.json";
var _ = "./currency_latam-XXXXXXXX.json";
var _ = "./currency_norwegian-XXXXXXXX.json";
var _ = "./currency_polish-XXXXXXXX.json";
var _ = "./currency_portuguese-XXXXXXXX.json";
var _ = "./currency_romanian-XXXXXXXX.json";
var _ = "./currency_russian-XXXXXXXX.json";
var _ = "./currency_schinese-XXXXXXXX.json";
var _ = "./currency_spanish-XXXXXXXX.json";
var _ = "./currency_swedish-XXXXXXXX.json";
var _ = "./currency_tchinese-XXXXXXXX.json";
var _ = "./currency_thai-XXXXXXXX.json";
var _ = "./currency_turkish-XXXXXXXX.json";
var _ = "./currency_ukrainian-XXXXXXXX.json";
var _ = "./currency_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.koreana = _;
_.latam = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_);
function _(_) {
  return _.Localize(`#CurrencyCodeDescription_${_(_)}`);
}
var _ = _(_(), 1);
function _(_) {
  return _(_.getValue());
}
function _(_) {
  let _ = _.getValue(),
    _ = _(_),
    _ = _.Localize(`#Region_Pricing_Tooltip_${_}`);
  return (0, _.jsxs)("span", {
    children: [
      _,
      " ",
      (0, _.jsx)(_, {
        tooltip: _,
      }),
    ],
  });
}
var _ = _(_(), 1);
var _ = "_2I7QbE12pvc-";
var _ = "t-Dp22MdUb4-";
var _ = _(_(), 1);
function _(_) {
  let { value: _, onValueChange: _, options: _, getOptionLabel: _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    value: _,
    onValueChange: _,
    ..._,
    children: _.map((_) => {
      let _ = _ ? _(_) : _;
      return (0, _.jsx)(
        _.Option,
        {
          value: _,
          children: _,
        },
        _,
      );
    }),
  });
}
function _(_) {
  let { value: _, onValueChange: _, render: _, ..._ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useCallback)((_, _) => {
      if (!_.current) return;
      let _ = [..._.current.querySelectorAll("[data-radio-id]")];
      if (_.length !== 0)
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          if (!_.dataset.radioId) continue;
          if (_.dataset.radioId === _) {
            let _ = (_ + _ + _.length) % _.length,
              _ = _[_];
            _.click(), _.focus();
          }
        }
    }, []),
    _ = (0, _.useCallback)((_) => _(_, 1), [_]),
    _ = (0, _.useCallback)((_) => _(_, -1), [_]),
    _ = (0, _.useMemo)(
      () => ({
        value: _,
        onValueChange: _,
        onSelectNext: _,
        onSelectPrev: _,
      }),
      [_, _, _, _],
    ),
    _ = {
      role: "radiogroup",
      ref: _,
      ..._,
    },
    _ = (0, _.jsx)(_, {
      direction: "column",
      gap: "2",
      role: "radiogroup",
      ..._,
    }),
    _ = _(_, _, _);
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { value: _, ref: _, children: _, render: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useId)();
  if (!_)
    return (
      console.error(
        "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
      ),
      null
    );
  let { value: _, onValueChange: _, onSelectNext: _, onSelectPrev: _ } = _,
    _ = _ === _,
    _ = () => {
      _ || _(_);
    };
  return _(
    _,
    (0, _.jsx)(_, {}),
    {
      role: "radio",
      "aria-checked": _,
      "data-radio-id": _,
      onClick: _,
      onKeyDown: (_) => {
        switch (_.key) {
          case " ": {
            _(), _.preventDefault(), _.stopPropagation();
            break;
          }
          case "ArrowRight":
          case "ArrowDown": {
            _(_), _.preventDefault(), _.stopPropagation();
            break;
          }
          case "ArrowLeft":
          case "ArrowUp": {
            _(_), _.preventDefault(), _.stopPropagation();
            break;
          }
        }
      },
      tabIndex: _ ? 0 : -1,
      ref: _,
      children: _,
    },
    {
      bSelected: _,
    },
  );
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    cursor: "default",
    gap: "2",
    className: _,
    ..._,
    children: [
      (0, _.jsx)("div", {
        className: _,
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
    ],
  });
}
var _ = Object.assign(_, {
    Root: _,
    Option: _,
  }),
  _ = (0, _.createContext)(null);
var _ = _(_(), 1);
var _ = _(_());
var _ = _(_()),
  _ = _(_());
var _ = _(_());
function _(_) {
  let { active: _, children: _ } = _,
    _ = _() || _(window),
    _ = _(),
    [_, _] = _.useState(null),
    [_, _] = _.useState(!1),
    _ = _.useRef(void 0);
  if (
    (_.useEffect(() => {
      if (_) {
        let _ = _.ShowPortalModal(),
          _ = _.OnElementReadyCallbacks.Register(_),
          _ = _.OnModalActiveCallbacks.Register(_);
        return (
          (_.current = _.key),
          () => {
            _(null), _(!1), _.Close(), _.Unregister(), _.Unregister();
          }
        );
      } else return;
    }, [_, _]),
    !_ || !_)
  )
    return null;
  let _ = (0, _.jsx)(_, {
    children: _,
  });
  return (
    _ &&
      (_ = (0, _.jsx)(_, {
        active: _,
        modalKey: _.current,
        children: _,
      })),
    _.createPortal(_, _)
  );
}
var _ = _(_()),
  _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_());
function _(_, _) {
  return _({
    mutationKey: ["settofree", _],
    mutationFn: async (_) => {
      let { displayOption: _, fnOnStoreSaveSucceed: _ } = _;
      if (!_ || !_) throw new Error("Invalid parameters provided");
      {
        let _ = new FormData();
        if (
          (_.set("sessionid", _()),
          _.set("appid", "" + _),
          _.set(
            "displaytext",
            _ == "free" ? "#PurchaseButton_Free" : "#PurchaseButton_FreeToPlay",
          ),
          !(
            await fetch(`${_.PARTNER_BASE_URL}store/ajaxupdatef2pstore`, {
              method: "POST",
              credentials: "include",
              body: _,
            })
          )._)
        )
          throw new Error(_.Localize("#FreeOnDemand_Store_Error", _));
      }
      _ && _();
      {
        let _ = new FormData();
        if (
          (_.set("sessionid", _()),
          _.set("action", "save"),
          _.set("billing_type", "12"),
          !(
            await fetch(`${_.PARTNER_BASE_URL}store/ajaxpackagesave/${_}`, {
              method: "POST",
              credentials: "include",
              body: _,
            })
          )._)
        )
          throw new Error(_.Localize("#FreeOnDemand_Package_Error", _));
      }
    },
  });
}
var _ = _(_());
var _ = "BopfeBsAgqE-";
var _ = "ByXQOnGI3Ew-";
var _ = _(_());
var _ = {
  LoadingWrapper: "_4OUX3El-ctM-",
  Static: "S-6ZVNlseRA-",
  bottomCircle: "ytW2ZjHd1W0-",
  noString: "qzZp4zRi0TI-",
  Throbber: "SKGqYgO0Pnw-",
  throbber_small: "tpSzbsPHbkE-",
  throbber_medium: "V1kW7-BE-4M-",
  throbber_large: "hvWBlEgWRXM-",
  throbber_center_wrapper: "_8ZRONRXnjyw-",
  ThrobberText: "JAWUR2YLJRk-",
  blur: "pcgb2bwrvuU-",
  ThrobberRoundLoop: "_0DHNUQDQJ8E-",
  roundOuterOutline: "BVlqlU3-Ipc-",
  roundOuter: "YGYjrKrUpH8-",
  roundFill: "Qweqhy1p3NA-",
  ThrobberFillLoop: "mSFAQbdPBQw-",
  topCircle: "_0pBaAtJ9R60-",
  circlePulse: "q8K5uxuAz20-",
  ThrobberTopCircleLoop: "sGOn6YG082s-",
  ThrobberBottomCircleLoop: "v7P-CuB1Oyc-",
  roundThrobber15: "E31AjDnB9mA-",
  roundThrobber14: "yfJ5g5HLung-",
  roundThrobber13: "p4IXmIBs-5w-",
  roundThrobber12: "weR08ojWBUI-",
  roundThrobber11: "cMeOOkfIIUs-",
  roundThrobber10: "y3nCg-hbk1A-",
  roundThrobber09: "toLjwkno9y4-",
  roundThrobber08: "_6FJiJ99jqrI-",
  roundThrobber07: "_1SJjEo3hqLE-",
  roundThrobber06: "_7t9M1IBCMIU-",
  roundThrobber05: "U7iA6tr3Q-M-",
  roundThrobber04: "qfszxQXK0MU-",
  roundThrobber03: "P576NNLVVrg-",
  roundThrobber02: "bOaiskb7X7U-",
  roundThrobber01: "VjfLmnfhcSo-",
  ThrobberRoundLoopThickness: "aGGryfTim7A-",
  throbber_xlarge: "uy32yrMsSHs-",
  throbber_xxlarge: "bYCfnZCzAh8-",
  ThrobberDelayAppear: "s1nvIjzilU0-",
  Visible: "kFQFeJvpX3c-",
  NewThrobber: "degxgPm6tJc-",
};
var _ = "/UNC3F5BA.png";
function _() {
  return _.IN_CLIENT && _(_.LAUNCHER_TYPE);
}
var _ = _(_()),
  _ = _.default.memo(function (_) {
    let {
        className: _,
        size: _,
        string: _,
        position: _,
        static: _,
        msDelayAppear: _,
      } = _,
      _ = [_.LoadingWrapper, "SteamLogoThrobber", _(_)],
      [_, _] = _.default.useState(!_),
      _ = !_();
    return (
      (0, _.useEffect)(() => {
        if (_) return;
        let _ = setTimeout(() => _(!0), _);
        return () => clearTimeout(_);
      }, [_, _]),
      _ === void 0 && _.push(_.noString),
      _ && _.push(_),
      _ && _.push(_.Static),
      (0, _.jsxs)("div", {
        className: _(
          _ == "center" && _.throbber_center_wrapper,
          !!_ && _.ThrobberDelayAppear,
          _ && _.Visible,
        ),
        children: [
          _ &&
            _ &&
            (0, _.jsx)("div", {
              className: _.join(" "),
              children: (0, _.jsx)("div", {
                className: _.NewThrobber,
                children: (0, _.jsx)("img", {
                  src: _(_),
                }),
              }),
            }),
          !!_ &&
            (0, _.jsx)("div", {
              className: _.ThrobberText,
              children: _,
            }),
        ],
      })
    );
  }),
  _ = _.default.memo(function (_) {
    let {
        className: _,
        size: _,
        string: _,
        position: _,
        static: _,
        msDelayAppear: _,
      } = _,
      _ = [_.LoadingWrapper, "SteamLogoThrobber", _(_)],
      [_, _] = _.default.useState(!_);
    return (
      (0, _.useEffect)(() => {
        if (_) return;
        let _ = setTimeout(() => _(!0), _);
        return () => clearTimeout(_);
      }, [_, _]),
      _ === void 0 && _.push(_.noString),
      _ && _.push(_),
      _ && _.push(_.Static),
      (0, _.jsxs)("div", {
        className: _(
          _ == "center" && _.throbber_center_wrapper,
          !!_ && _.ThrobberDelayAppear,
          _ && _.Visible,
        ),
        children: [
          _ &&
            (0, _.jsx)("div", {
              className: _.join(" "),
              children: (0, _.jsxs)("div", {
                className: _.Throbber,
                children: [
                  (0, _.jsx)(_, {
                    className: _.base,
                  }),
                  (0, _.jsx)(_, {
                    className: _.blur,
                  }),
                ],
              }),
            }),
          !!_ &&
            (0, _.jsx)("div", {
              className: _.ThrobberText,
              children: _,
            }),
        ],
      })
    );
  });
function _(_) {
  switch (_) {
    case "small":
      return _.throbber_small;
    case "medium":
      return _.throbber_medium;
    case "xlarge":
      return _.throbber_xlarge;
    case "xxlarge":
      return _.throbber_xxlarge;
    default:
      return _.throbber_large;
  }
}
function _(_) {
  let _ = "SVGIcon_Button SVGIcon_Throbber ";
  return (
    _.className && (_ += _.className),
    (0, _.jsxs)("svg", {
      version: "1.1",
      _: "base",
      xmlns: "http://www.w3.org/2000/svg",
      className: _,
      _: "0px",
      _: "0px",
      width: "256px",
      height: "256px",
      viewBox: "0 0 256 256",
      children: [
        (0, _.jsxs)("g", {
          className: _.partCircle,
          children: [
            (0, _.jsx)("path", {
              className: _.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
            }),
            (0, _.jsx)("path", {
              className: _.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M201.432,101.166",
            }),
            (0, _.jsx)("path", {
              className: _.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
            }),
          ],
        }),
        (0, _.jsxs)("g", {
          className: _.mainOutline,
          children: [
            (0, _.jsx)("path", {
              className: _.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            (0, _.jsx)("path", {
              className: _.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              _: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
          ],
        }),
        (0, _.jsx)("g", {
          className: _.bottomCircle,
          children: (0, _.jsx)("path", {
            fill: "#ffffff",
            _: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
          }),
        }),
        (0, _.jsx)("g", {
          className: _.topCircle,
          children: (0, _.jsx)("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "6",
            strokeMiterlimit: "10",
            _: "161.731",
            _: "101.274",
            _: "23.019",
          }),
        }),
      ],
    })
  );
}
var _ = _(_());
function _(_) {
  let [_, _] = (0, _.useState)(() => !!_),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null);
  return {
    bLoading: _,
    bError: _,
    bSuccess: _,
    strError: _,
    strSuccess: _,
    elSuccess: _,
    elError: _,
    strThrobber: _,
    fnSetLoading: _,
    fnSetError: _,
    fnSetSuccess: _,
    fnSetStrError: _,
    fnSetStrSuccess: _,
    fnSetElSuccess: _,
    fnSetElError: _,
    fnSetThrobber: _,
  };
}
function _(_) {
  let { strDialogTitle: _, state: _, closeModal: _, strThrobber: _ } = _,
    {
      bLoading: _,
      bError: _,
      bSuccess: _,
      strError: _,
      strSuccess: _,
      elSuccess: _,
      elError: _,
      strThrobber: _,
    } = _;
  return _ || _ || _
    ? (0, _.jsxs)(_, {
        strTitle: _,
        bAlertDialog: !0,
        closeModal: _,
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)("div", {
              className: _,
              children: _ || _("#Error_ErrorCommunicatingWithNetwork"),
            }),
          !!_ && _,
        ],
      })
    : _ || _ || _
      ? (0, _.jsx)(_, {
          strTitle: _,
          strDescription: _ || _("#EventDisplay_Share_Success"),
          bAlertDialog: !0,
          closeModal: _,
          className: _,
          children: (0, _.jsx)(_.Fragment, {
            children: !!_ && _,
          }),
        })
      : (0, _.jsx)(_, {
          strTitle: _,
          className: _,
          bProgressDialog: !0,
          closeModal: () => {},
          children: (0, _.jsx)(_, {
            string: _ || _ || _("#Loading"),
            size: "medium",
            position: "center",
          }),
        });
}
var _ = _(_(), 1);
function _(_) {
  let { strButtonOverride: _, appids: _, nPackageID: _, onClick: _ } = _,
    _ = _(),
    [_, _, _] = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _
          ? _.Localize("#FreeOnDemand_Button_ttip")
          : _.Localize("#FreeOnDemand_Button_disabled_ttip"),
        children: (0, _.jsx)(_, {
          onClick: () => {
            _?.(), _();
          },
          color: "dull",
          children: _ || _.Localize("#FreeOnDemand_Button"),
        }),
      }),
      (0, _.jsx)(_, {
        active: _,
        children:
          _ && _ && _.length == 1
            ? (0, _.jsx)(_, {
                closeModal: _,
                nPackageID: _,
                nAppID: _[0],
              })
            : (0, _.jsx)(_, {
                closeModal: _,
              }),
      }),
    ],
  });
}
function _(_) {
  let { closeModal: _, nAppID: _, nPackageID: _ } = _,
    [_, _] = (0, _.useState)("freetoplay"),
    _ = _(_, _),
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _.Localize("#FreeOnDemand_Title"),
        closeModal: () => {
          window.location.replace(
            `${_.PARTNER_BASE_URL}store/packagelanding/${_}`,
          ),
            _();
        },
      })
    : (0, _.jsxs)(_, {
        strTitle: _.Localize("#FreeOnDemand_Title"),
        strDescription: _.Localize("#FreeOnDemand_Desc"),
        strOKButtonText: _.Localize("#FreeOnDemand_Button_Confirm"),
        onCancel: _,
        onOK: async () => {
          try {
            _.fnSetLoading(!0),
              _.fnSetThrobber(_.Localize("#FreeOnDemand_Convert_Store")),
              await _.mutateAsync({
                displayOption: _,
                fnOnStoreSaveSucceed: () => {
                  _.fnSetThrobber(_.Localize("#FreeOnDemand_Convert_Package"));
                },
              }),
              _.fnSetSuccess(!0),
              _.fnSetStrSuccess(_.Localize("#FreeOnDemand_ConvertSuccess"));
          } catch (_) {
            _.fnSetError(!0),
              _.fnSetStrError(
                _ instanceof Error
                  ? _.message
                  : _.Localize("#Error_ErrorCommunicatingWithNetwork"),
              );
          }
        },
        children: [
          (0, _.jsx)("br", {}),
          (0, _.jsxs)(_, {
            paddingTop: "4",
            children: [
              (0, _.jsx)(_, {
                size: "4",
                children: _.Localize("#FreeOnDemand_Radio"),
              }),
              (0, _.jsx)(_, {
                padding: "4",
                background: "greyneutral-6",
                radius: "sm",
                children: (0, _.jsx)(_, {
                  value: _,
                  options: ["freetoplay", "free"],
                  getOptionLabel: (_) =>
                    _ == "free"
                      ? _.Localize("#FreeOnDemand_Radio_Free")
                      : _.Localize("#FreeOnDemand_Radio_FreeToPlay"),
                  onValueChange: _,
                }),
              }),
            ],
          }),
        ],
      });
}
function _(_) {
  let { closeModal: _ } = _,
    _ = `${_.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
  return (0, _.jsxs)(_, {
    strTitle: _.Localize("#FreeOnDemand_Title"),
    strDescription: _.Localize("#FreeOnDemand_Desc_NotPermitted"),
    closeModal: _,
    children: [
      (0, _.jsx)("br", {}),
      (0, _.jsx)("br", {}),
      (0, _.jsx)("a", {
        href: _,
        target: "_blank",
        rel: "noreferrer",
        children: _,
      }),
    ],
  });
}
function _() {
  let [_] = (0, _.useState)(_("bCanSetFree", "application_config"));
  return _;
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = _(_(), 1);
function _(_, _) {
  return (_) => {
    _?.(_), _?.(_);
  };
}
function _(_) {
  let {
      direction: _,
      interactionMode: _ = 0,
      ignoreHorizontal: _,
      ignoreVertical: _,
      dismissOnClick: _,
      menuTarget: _,
      className: _,
      children: _,
      renderWhenClosed: _ = !0,
      ..._
    } = _,
    { isShowingMenu: _, triggerProps: _, menuProps: _, closeMenu: _ } = _(_),
    _ = _.useRef(null),
    _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _
        ? _.current?.TakeFocus()
        : _.current?.BFocusWithin() && _.current?.TakeFocus();
    }, [_]),
    (0, _.jsxs)(_.Fragment, {
      children: [
        _.cloneElement(_, {
          ..._,
          onMouseEnter: _(_.props.onMouseEnter, _.onMouseEnter),
          onMouseLeave: _(_.props.onMouseLeave, _.onMouseLeave),
          navRef: _,
        }),
        (0, _.jsx)(_, {
          ..._,
          ..._,
          className: (0, _.default)(_.className, _),
          navRef: _,
          onCancel: _,
          onFocusWithin: (_) => !_ && _(),
          childFocusDisabled: !_,
          children: (0, _.jsx)(_, {
            children: (_ || _) && _,
          }),
        }),
      ],
    })
  );
}
var _ = {
  PriceGuidelinesPicker: "SDzAlk9r6hE-",
  SelectionIndicator: "_30W0MEzKuJs-",
  GuidelinesPanel: "cVaT4Gg6an0-",
  GuidelinesDescription: "WPN5YvCwSMM-",
  GuidelinesGrid: "Ux8iPls7JuE-",
  GridElement: "INXuF-wiiqs-",
  CurrentPrice: "ZOoWbmAsLv0-",
};
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let { strButton: _, strTooltip: _ } = _,
    _ = (0, _.jsxs)(_, {
      onClick: () => {},
      children: [
        (0, _.jsx)(_, {
          toolTipContent: _,
          children: (0, _.jsx)("span", {
            children: _,
          }),
        }),
        (0, _.jsx)("div", {
          className: _(_.SelectionIndicator, "DialogDropDown_Arrow"),
          children: (0, _.jsx)(_, {}),
        }),
      ],
    });
  return (0, _.jsx)(_, {
    menuTarget: _,
    ..._,
  });
}
function _(_) {
  let { menuTarget: _ } = _,
    _ = _.default.useRef(null);
  return (0, _.jsx)(_, {
    menuTarget: _,
    direction: "down",
    interactionMode: 1,
    ref: _,
    children: (0, _.jsx)(_, {
      onSelect: () => _.current?.close(),
      ..._,
    }),
  });
}
function _(_) {
  let {
      fnGetUSDPriceInCents: _,
      fnOnUpdate: _,
      strDescription: _,
      bCanSetToFree: _,
      nPackageID: _,
      onSelect: _,
      appids: _,
    } = _,
    _ = _(),
    _ = _();
  if (!_) return null;
  let _ = _.GetUSDPricePointsInCents();
  return (0, _.jsxs)("div", {
    className: _.GuidelinesPanel,
    children: [
      (0, _.jsx)("div", {
        className: _.GuidelinesDescription,
        children: _ || _.Localize("#PricingGuideline_Default"),
      }),
      (0, _.jsxs)("div", {
        className: _.GuidelinesGrid,
        children: [
          _ !== void 0 &&
            (0, _.jsx)(
              "div",
              {
                className: _.GridElement,
                children: (0, _.jsx)(_, {
                  nPackageID: _,
                  strButtonOverride: _.Localize("#FreeOnDemand_InlineOption"),
                  appids: _,
                }),
              },
              "settofree",
            ),
          _.map((_) =>
            (0, _.jsx)(
              "button",
              {
                onClick: () => {
                  _(), _(_);
                },
                className: _({
                  [_.GridElement]: !0,
                  [_.CurrentPrice]: _ == _,
                }),
                children: _(_, 1),
              },
              _,
            ),
          ),
        ],
      }),
    ],
  });
}
var _ = _(_(), 1);
var _ = {
  AdminPageCtn: "_8NkHkTOFHII-",
  WidePageCtn: "_8gVw6dsPjd8-",
  PageTitleFlexCtn: "I0LcpBQAGCk-",
  PageTitle: "_0Dqv-bD7-Nw-",
  Beta: "HwTgdMJIqQE-",
  PageSubTitle: "yRCOgGnAMOo-",
  ValveOnlyTitle: "c3Qd4CnaUfI-",
  ValveOnlyBackground: "nkDztPZQSXo-",
  SectionCtn: "aVJjJgVeLZI-",
  ColumnCtn: "dScFIjLsnRc-",
  LeftCol: "_3RkhT4pHqKg-",
  ColHeader: "dGfoDk-hw5k-",
  Blue: "nW5T-fmPhBs-",
  ColHeaderImg: "oL4d47jJdo8-",
  Bright: "kunya00Ylyg-",
  ActionBar: "rXkawlpnVaU-",
  SectionIntroRequirements: "zoXDSKVG9Hk-",
  warning: "sQxfI3bW-fI-",
  IntroText: "w-Qb4qIl-es-",
  RightCol: "IU93dOjcuyo-",
  NoSticky: "_09Tv2KRybAQ-",
  SmallText: "bCt3fYyM8Jo-",
  Button: "IjcDYKuviEY-",
  TitleSmall: "-zFIfEV13sE-",
  DefaultSectionCtn: "SpbTrUuDgEg-",
  Indent: "xmx-z2FF3AA-",
  DashLink: "MWgdbNacj-w-",
  FlexRow: "_0gqoCTYeOeE-",
  MarginBottom: "yLIiS5-4Hqs-",
  UploadedImageDisplayCtn: "g7lVFj3gUn0-",
  UploaderLeftCol: "_9wweFcdu2KA-",
  MarketingMessage: "_0vyvak22QWg-",
  BannerPreview: "-RdMoVa2jWo-",
  UploaderRightCol: "mL-K946TLE0-",
  LangCountTitle: "acuKbPkW-RI-",
  LangSelectCtn: "en2qJt7eg3M-",
  UploaderImgLang: "bQIbH0lhY5A-",
  LangSelected: "_2Edv1hPHNXI-",
  DeleteAll: "g-1U7nKdJiw-",
  EditCtn: "IJXZB2-jdus-",
  StatusBtn: "Dv8M6W-9PvQ-",
  HalfWidthBtnCtn: "Il0BuIb6o-U-",
  StatReportCtn: "vTKRISaCP1I-",
  Stat: "AdbkYHV6XyY-",
  BigStat: "_3WYnNR6DoO8-",
  IncreaseRateInfo: "-JqJFZb-uwI-",
};
var _ = {
  ErrorCell: "_7g5rOXLwS9s-",
  Group: "BT9iojto7FI-",
  SelectedCurrency: "_2EAQbaWVWHs-",
};
var _ = _(_(), 1),
  _ = _({
    Component: _,
  });
function _() {
  return _.useLoaderData().success != 1
    ? (0, _.jsx)("div", {
        children: _.Localize("#Footer_Sitemap_ContactSupport"),
      })
    : (0, _.jsxs)("div", {
        className: _.AdminPageCtn,
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      });
}
var _ = _();
function _(_, _) {
  return (0, _.useMemo)(() => {
    let _ = new Array(),
      _ = new Array();
    if (_) {
      for (let _ = 2; _ < 48; ++_) {
        if (!_.BIsSupportCurrencyAndOrRegion(_)) continue;
        let _ = {
          eCurrencyCode: _,
          nNuanced: _.GetRecommendPrice(_, _, void 0, 1)?.price || -1,
          nParity: _.GetRecommendPrice(_, _, void 0, 2)?.price || -1,
          nFx: _.GetRecommendPrice(_, _, void 0, 3)?.price || -1,
        };
        (_.nFx != -1 || _.nNuanced != -1 || _.nParity != -1) && _.push(_);
      }
      for (let _ = 1; _ < 5; ++_) {
        if (!_.BIsSupportCurrencyAndOrRegion(1, _)) continue;
        let _ = 1,
          _ = {
            eRegionCode: _,
            eCurrencyCode: _,
            nNuanced: _.GetRecommendPrice(_, _, _, 1)?.price || -1,
            nParity: _.GetRecommendPrice(_, _, _, 2)?.price || -1,
            nFx: _.GetRecommendPrice(_, _, _, 3)?.price || -1,
          };
        (_.nFx != -1 || _.nNuanced != -1 || _.nParity != -1) && _.push(_);
      }
    }
    return {
      rgCurrencyPrices: _,
      rgRegionPrices: _,
    };
  }, [_, _]);
}
function _(_) {
  return _.getValue() == -1
    ? (0, _.jsx)("span", {
        className: _.ErrorCell,
        children: "Missing",
      })
    : _(_.getValue(), _.row.original.eCurrencyCode);
}
function _(_) {
  let _ = _(),
    [_, _] = (0, _.useState)(599),
    { rgCurrencyPrices: _, rgRegionPrices: _ } = _(_, _),
    _ = [
      _.accessor("nFx", {
        header: _.Localize("#PricingExplorer_Column4"),
        cell: _,
      }),
      _.accessor("nParity", {
        header: _.Localize("#PricingExplorer_Column3"),
        cell: _,
      }),
      _.accessor("nNuanced", {
        header: _.Localize("#PricingExplorer_Column2"),
        cell: _,
      }),
    ];
  return (0, _.jsx)("div", {
    className: _.ColumnCtn,
    children: (0, _.jsx)("div", {
      className: _.LeftCol,
      children: (0, _.jsxs)("div", {
        className: _.SectionCtn,
        children: [
          (0, _.jsxs)("div", {
            className: _.Group,
            children: [
              (0, _.jsxs)(_, {
                direction: "column",
                children: [
                  (0, _.jsx)(_, {
                    size: "3",
                    children: _.Localize("#PricingDashboard_Select_Price"),
                  }),
                  (0, _.jsx)(_, {
                    strButton: _.Localize(
                      "#PricingDashboard_Select_Price_button",
                    ),
                    strTooltip: _.Localize(
                      "#PricingDashboard_Select_Price_button_ttip",
                    ),
                    fnGetUSDPriceInCents: () => _,
                    fnOnUpdate: _,
                    nPackageID: 0,
                    appids: void 0,
                    bCanSetToFree: void 0,
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _.SelectedCurrency,
                children: _(_, 1),
              }),
            ],
          }),
          (0, _.jsx)("br", {}),
          (0, _.jsx)("div", {
            children: _.Localize("#PricingExplorer_TableHeader"),
          }),
          (0, _.jsx)(_, {
            data: _,
            className: _.DefaultFancyTable,
            columns: [
              _.accessor("eCurrencyCode", {
                header: _.Localize("#PricingExplorer_Column1"),
                cell: _,
              }),
              ..._,
            ],
            getRowKey: (_, _) => `${_.eCurrencyCode}`,
            nItemHeight: 20,
          }),
          (0, _.jsx)(_, {
            paddingTop: "5",
            children: _.Localize("#PricingExplorer_Regions_TableHeader"),
          }),
          (0, _.jsx)("div", {
            children: _.Localize("#PricingExplorer_TableHeader"),
          }),
          (0, _.jsx)(_, {
            data: _,
            className: _.DefaultFancyTable,
            columns: [
              _.accessor("eRegionCode", {
                header: _.Localize("#PricingExplorer_Regions_Column1"),
                cell: _,
              }),
              ..._,
            ],
            getRowKey: (_, _) => `${_.eCurrencyCode}_${_.eRegionCode}`,
            nItemHeight: 20,
          }),
        ],
      }),
    }),
  });
}
var _ = 37,
  _ = 4;
function _(_) {
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsxs)("div", {
      className: _.ColumnCtn,
      children: [
        (0, _.jsxs)("div", {
          className: _.LeftCol,
          children: [
            (0, _.jsx)("div", {
              className: _(_.ColHeader, _.Blue),
              children: _.Localize("#PricingExplorer_About_Title"),
            }),
            (0, _.jsxs)("div", {
              className: _.SectionCtn,
              children: [
                (0, _.jsx)("p", {
                  className: _.IntroText,
                  children: _(
                    _.Localize("#PricingExplorer_About_Desc1", _, _),
                    (0, _.jsx)("a", {
                      href: `${_.PARTNER_BASE_URL}doc/store/pricing/currencies`,
                    }),
                  ),
                }),
                (0, _.jsx)("p", {
                  children: _.Localize("#PricingExplorer_About_Desc2"),
                }),
              ],
            }),
            (0, _.jsxs)("div", {
              className: _.SectionCtn,
              children: [
                (0, _.jsx)("h2", {
                  children: _.Localize("#PricingExplorer_Explore_title"),
                }),
                (0, _.jsx)("p", {
                  children: _.Localize("#PricingExplorer_Explore_desc1"),
                }),
                (0, _.jsxs)("ol", {
                  children: [
                    (0, _.jsx)("li", {
                      children: _.LocalizeReact(
                        "#PricingExplorer_Explore_line3",
                        (0, _.jsx)("b", {
                          children: _.Localize("#PricingExplorer_Column4"),
                        }),
                      ),
                    }),
                    (0, _.jsx)("li", {
                      children: _.LocalizeReact(
                        "#PricingExplorer_Explore_line2",
                        (0, _.jsx)("b", {
                          children: _.Localize("#PricingExplorer_Column3"),
                        }),
                      ),
                    }),
                    (0, _.jsx)("li", {
                      children: _.LocalizeReact(
                        "#PricingExplorer_Explore_line1",
                        (0, _.jsx)("b", {
                          children: _.Localize("#PricingExplorer_Column2"),
                        }),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsxs)("div", {
          className: _.RightCol,
          children: [
            (0, _.jsx)("div", {
              className: _(_.ColHeader, _.Blue),
            }),
            (0, _.jsxs)("div", {
              className: _.SectionCtn,
              children: [
                (0, _.jsx)("p", {
                  children: _.LocalizeReact(
                    "#PricingExplorer_About_Link1",
                    (0, _.jsx)("a", {
                      href: `${_.PARTNER_BASE_URL}doc/store/pricing`,
                      children: _.Localize("#PricingExplorer_About_LinkName1"),
                    }),
                  ),
                }),
                (0, _.jsx)("p", {
                  children: _.Localize("#PricingExplorer_About_Dash"),
                }),
                (0, _.jsx)(_, {
                  href: `${_.PARTNER_BASE_URL}pricing/dashboard`,
                  children: _.Localize("#PricingExplorer_About_LinkName2"),
                }),
              ],
            }),
            (0, _.jsxs)("div", {
              className: _.SectionCtn,
              children: [
                (0, _.jsx)(_, {
                  size: "7",
                  children: _.Localize("#PricingExplorer_Time_Title"),
                }),
                (0, _.jsx)("p", {
                  children: _.Localize("#PricingExplorer_Time_Disc"),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { _ as route };
