var _ = _(_(), 1),
  _ = _.createContext(void 0),
  _ = _.Provider,
  _ = () => {
    let _ = _.useContext(_);
    if (!_)
      throw Error(
        `called useActiveServiceTransportContext outside of ServiceTransportProvider`,
      );
    return _;
  };
function _(_) {
  let { useStorage: _, children: _ } = _,
    _,
    _;
  if (`useActiveCMInterface` in _) _ = _ = _.useActiveCMInterface;
  else if (`useActiveSteamInterface` in _) _ = _.useActiveSteamInterface;
  else
    return (
      _(
        _,
        `neither useActiveCMInterface nor useActiveSteamInterface were provided`,
      ),
      _
    );
  let _ = _.useMemo(
    () => ({
      useActiveSteamInterface: _,
      useActiveCMInterface: _,
      useStorage: _,
    }),
    [_, _, _],
  );
  return _.createElement(
    _,
    {
      value: _,
    },
    _,
  );
}
var _ = () => _().useActiveSteamInterface()?.GetServiceTransport();
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, `gs`),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || ``,
      _ = _(_, ..._),
      _ =
        _ >= 1 && _ <= _.length && _[_ - 1]
          ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
          : _;
    _.push(_);
  }
  return _.push(_.substr(_)), _.createElement(_.Fragment, null, ..._);
}
var _ = _();
function _(_) {
  let {
      accentColor: _,
      dullColor: _,
      bodyTextColor: _,
      children: _,
      breakpoints: _,
      variants: _,
    } = _,
    _ = {
      display: `contents`,
    },
    _;
  typeof _ == `string` ? (_ = _) : _ && _(_, `accent`, _);
  let _;
  typeof _ == `string` ? (_ = _) : _ && _(_, `dull`, _);
  let _;
  typeof _ == `string` ? (_ = _) : _ && _(_, _);
  let _ = (0, _.jsx)(_, {
    variants: _,
    children: (0, _.jsx)(`div`, {
      "data-accent-color": _,
      "data-dull-color": _,
      "data-body-text-color": _,
      style: _,
      children: (0, _.jsx)(`div`, {
        style: {
          display: `contents`,
          color: `var(--color-text-body-body)`,
        },
        children: _,
      }),
    }),
  });
  return _
    ? (0, _.jsx)(_, {
        breakpoints: _,
        children: _,
      })
    : _;
}
function _(_, _, _) {
  for (let [_, _] of Object.entries(_)) _[`--color-${_}-${_}`] = _;
}
function _(_, _) {
  for (let [_, _] of Object.entries(_)) _[`--color-text-body-${_}`] = _;
}
var _ = _((_, _) => {
  var _ = (function () {
      function _(_, _) {
        if (typeof _ != `function`)
          throw TypeError(
            `DataLoader must be constructed with a function which accepts ` +
              (`Array<key> and returns Promise<Array<value>>, but got: ` +
                _ +
                `.`),
          );
        (this._batchLoadFn = _),
          (this._maxBatchSize = _(_)),
          (this._batchScheduleFn = _(_)),
          (this._cacheKeyFn = _(_)),
          (this._cacheMap = _(_)),
          (this._batch = null),
          (this.name = _(_));
      }
      var _ = _.prototype;
      return (
        (_.load = function (_) {
          if (_ == null)
            throw TypeError(
              `The loader.load() function must be called with a value, ` +
                (`but got: ` + String(_) + `.`),
            );
          var _ = _(this),
            _ = this._cacheMap,
            _ = this._cacheKeyFn(_);
          if (_) {
            var _ = _.get(_);
            if (_) {
              var _ = (_.cacheHits ||= []);
              return new Promise(function (_) {
                _.push(function () {
                  _(_);
                });
              });
            }
          }
          _.keys.push(_);
          var _ = new Promise(function (_, _) {
            _.callbacks.push({
              resolve: _,
              reject: _,
            });
          });
          return _ && _.set(_, _), _;
        }),
        (_.loadMany = function (_) {
          if (!_(_))
            throw TypeError(
              `The loader.loadMany() function must be called with Array<key> ` +
                (`but got: ` + _ + `.`),
            );
          for (var _ = [], _ = 0; _ < _.length; _++)
            _.push(
              this.load(_[_]).catch(function (_) {
                return _;
              }),
            );
          return Promise.all(_);
        }),
        (_.clear = function (_) {
          var _ = this._cacheMap;
          if (_) {
            var _ = this._cacheKeyFn(_);
            _.delete(_);
          }
          return this;
        }),
        (_.clearAll = function () {
          var _ = this._cacheMap;
          return _ && _.clear(), this;
        }),
        (_.prime = function (_, _) {
          var _ = this._cacheMap;
          if (_) {
            var _ = this._cacheKeyFn(_);
            if (_.get(_) === void 0) {
              var _;
              _ instanceof Error
                ? ((_ = Promise.reject(_)), _.catch(function () {}))
                : (_ = Promise.resolve(_)),
                _.set(_, _);
            }
          }
          return this;
        }),
        _
      );
    })(),
    _ =
      typeof process == `object` && typeof process.nextTick == `function`
        ? function (_) {
            (_ ||= Promise.resolve()),
              _.then(function () {
                process.nextTick(_);
              });
          }
        : typeof setImmediate == `function`
          ? function (_) {
              setImmediate(_);
            }
          : function (_) {
              setTimeout(_);
            },
    _;
  function _(_) {
    var _ = _._batch;
    if (_ !== null && !_.hasDispatched && _.keys.length < _._maxBatchSize)
      return _;
    var _ = {
      hasDispatched: !1,
      keys: [],
      callbacks: [],
    };
    return (
      (_._batch = _),
      _._batchScheduleFn(function () {
        _(_, _);
      }),
      _
    );
  }
  function _(_, _) {
    if (((_.hasDispatched = !0), _.keys.length === 0)) {
      _(_);
      return;
    }
    var _;
    try {
      _ = _._batchLoadFn(_.keys);
    } catch (_) {
      return _(
        _,
        _,
        TypeError(
          `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function ` +
            (`errored synchronously: ` + String(_) + `.`),
        ),
      );
    }
    if (!_ || typeof _.then != `function`)
      return _(
        _,
        _,
        TypeError(
          `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ` +
            (`not return a Promise: ` + String(_) + `.`),
        ),
      );
    _.then(function (_) {
      if (!_(_))
        throw TypeError(
          `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ` +
            (`not return a Promise of an Array: ` + String(_) + `.`),
        );
      if (_.length !== _.keys.length)
        throw TypeError(
          `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.` +
            (`

Keys:
` +
              String(_.keys)) +
            (`

Values:
` +
              String(_)),
        );
      _(_);
      for (var _ = 0; _ < _.callbacks.length; _++) {
        var _ = _[_];
        _ instanceof Error
          ? _.callbacks[_].reject(_)
          : _.callbacks[_].resolve(_);
      }
    }).catch(function (_) {
      _(_, _, _);
    });
  }
  function _(_, _, _) {
    _(_);
    for (var _ = 0; _ < _.keys.length; _++)
      _.clear(_.keys[_]), _.callbacks[_].reject(_);
  }
  function _(_) {
    if (_.cacheHits)
      for (var _ = 0; _ < _.cacheHits.length; _++) _.cacheHits[_]();
  }
  function _(_) {
    if (!(!_ || _.batch !== !1)) return 1;
    var _ = _ && _.maxBatchSize;
    if (_ === void 0) return 1 / 0;
    if (typeof _ != `number` || _ < 1)
      throw TypeError(`maxBatchSize must be a positive number: ` + _);
    return _;
  }
  function _(_) {
    var _ = _ && _.batchScheduleFn;
    if (_ === void 0) return _;
    if (typeof _ != `function`)
      throw TypeError(`batchScheduleFn must be a function: ` + _);
    return _;
  }
  function _(_) {
    var _ = _ && _.cacheKeyFn;
    if (_ === void 0)
      return function (_) {
        return _;
      };
    if (typeof _ != `function`)
      throw TypeError(`cacheKeyFn must be a function: ` + _);
    return _;
  }
  function _(_) {
    if (!(!_ || _.cache !== !1)) return null;
    var _ = _ && _.cacheMap;
    if (_ === void 0) return new Map();
    if (_ !== null) {
      var _ = [`get`, `set`, `delete`, `clear`].filter(function (_) {
        return _ && typeof _[_] != `function`;
      });
      if (_.length !== 0)
        throw TypeError(`Custom cacheMap missing methods: ` + _.join(`, `));
    }
    return _;
  }
  function _(_) {
    return _ && _.name ? _.name : null;
  }
  function _(_) {
    return (
      typeof _ == `object` &&
      !!_ &&
      typeof _.length == `number` &&
      (_.length === 0 ||
        (_.length > 0 && Object.prototype.hasOwnProperty.call(_, _.length - 1)))
    );
  }
  _.exports = _;
});
function _(_) {
  return `appid` in _
    ? `app_${_.appid}`
    : `packageid` in _
      ? `package_${_.packageid}`
      : `bundleid` in _
        ? `bundle_${_.bundleid}`
        : `tagid` in _
          ? `tag_${_.tagid}`
          : `creatorid` in _
            ? `creator_${_.creatorid}`
            : `hubcategoryid` in _
              ? `hubcategory_${_.hubcategoryid}`
              : (_(_, `Unknown store item id type`), ``);
}
function _(_, _) {
  switch (_) {
    case 0:
      return `app_${_}`;
    case 1:
      return `package_${_}`;
    case 2:
      return `bundle_${_}`;
    case 4:
      return `tag_${_}`;
    case 5:
      return `creator_${_}`;
    case 6:
      return `hubcategory_${_}`;
    case 3:
    case -1:
      return ``;
    default:
      return _(_, `Unknown EStoreItemType ${_} ${_(_)} `), ``;
  }
}
var _ = /^(app|package|bundle|mtx|tag|creator|hubcategory)_(\d*)$/;
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case `app`:
        return {
          appid: parseInt(_[2]),
        };
      case `package`:
        return {
          packageid: parseInt(_[2]),
        };
      case `bundle`:
        return {
          bundleid: parseInt(_[2]),
        };
      case `tag`:
        return {
          tagid: parseInt(_[2]),
        };
      case `creator`:
        return {
          creatorid: parseInt(_[2]),
        };
      case `hubcategory`:
        return {
          hubcategoryid: parseInt(_[2]),
        };
    }
  _(!1, `Failed to parse StoreItemID ${_}`);
}
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case `app`:
        return {
          item_type: 0,
          _: parseInt(_[2]),
        };
      case `package`:
        return {
          item_type: 1,
          _: parseInt(_[2]),
        };
      case `bundle`:
        return {
          item_type: 2,
          _: parseInt(_[2]),
        };
      case `tag`:
        return {
          item_type: 4,
          _: parseInt(_[2]),
        };
      case `creator`:
        return {
          item_type: 5,
          _: parseInt(_[2]),
        };
      case `hubcategory`:
        return {
          item_type: 6,
          _: parseInt(_[2]),
        };
    }
  return {
    item_type: -1,
    _: _ ? parseInt(_[2]) : 0,
  };
}
function _(_) {
  let _ = _.item_type ?? -1,
    _ = _._ || 0;
  switch (_) {
    case 0:
      return {
        appid: _,
      };
    case 1:
      return {
        packageid: _,
      };
    case 2:
      return {
        bundleid: _,
      };
    case 4:
      return {
        tagid: _,
      };
    case 5:
      return {
        creatorid: _,
      };
    case 6:
      return {
        hubcategoryid: _,
      };
    case 3:
    case -1:
      return;
    default:
      _(_, `Unknown EStoreItemType ${_} ${_(_)} `);
      return;
  }
}
function _(_, _) {
  _.Body().set_context(_(_));
}
function _(_) {
  let _ = new _();
  return (
    _.bUsePartnerAPI || _.set_country_code(_.country),
    _.set_language(_.language),
    _
  );
}
function _(_, _) {
  _.Body().set_data_request(_.fromObject(_));
}
var _ = _(_(), 1);
function _(_, _, _, _) {
  return new _.default(
    async (_) => {
      let _ = new Set(),
        _ = new Map(),
        _ = new Set();
      _.add(`default_info`);
      let _ = {};
      if (
        (_.forEach((_) => {
          let [_, _ = `default_info`] = _(_, `|`);
          _.add(_),
            _.has(_) ||
              (_ == `top_tags`
                ? (_.include_tag_count = 20)
                : _ != `default_info` && (_[_] = !0),
              _.add(_));
          let _ = _.get(_);
          _ || ((_ = new Set()), _.set(_, _)), _.add(_);
        }),
        _.include_included_items)
      ) {
        let { include_included_items: _, ..._ } = _;
        _.included_item_data_request = _;
      }
      let _ = _.Init(_);
      _(_, _),
        _(_, _),
        _.forEach((_) => {
          let _ = _(_);
          _ && _.Body().add_ids(_.fromObject(_));
        });
      let _;
      if (_.bUsePartnerAPI) {
        let _ = _.Init(_);
        _.Body().set_getitems_request(_.Body()), (_ = await _.GetItems(_, _));
      } else _ = await _.GetItems(_, _);
      let _ = new Map();
      return (
        _.Body()
          .store_items()
          .forEach((_) => {
            _.set(_(_.item_type(), _._()), _);
          }),
        _ && _(_, _, _, _),
        _.map((_) => {
          let [_] = _(_, `|`),
            _ = _.get(_);
          return _
            ? _.toObject()
            : {
                ..._(_),
                success: 2,
              };
        })
      );
    },
    {
      maxBatchSize: 500,
      cache: !1,
      ..._,
    },
  );
}
function _(_, _, _, _) {
  _.forEach((_, _) => {
    let _ = _.get(_);
    if ((_(_, `Missing request data for ${_}`), !_)) return;
    let _ = !1,
      _ = {};
    _.forEach((_) => {
      _.has(_) ||
        ((_ = !0),
        _ == `top_tags`
          ? (_.include_tag_count = 20)
          : _ && _ != `default_info` && (_[_] = !0));
    }),
      _ && _(_, _);
  });
}
function _(_) {
  return _(_(_(), _));
}
function _(_, _, _) {
  _(_, _, _, `include_basic_info`, `basic_info`);
}
function _(_, _, _) {
  _(_, _, _, `include_full_description`, `full_description_bbcode`);
}
function _(_, _, _) {
  _(_, _, _, `include_assets`, `assets`);
}
function _(_, _, _) {
  _(_, _, _, `include_screenshots`, `screenshots`);
}
function _(_, _, _) {
  _(_, _, _, `include_trailers`, `trailers`);
}
function _(_, _, _) {
  _(_, _, _, `include_assets_without_overrides`, `assets_without_overrides`);
}
function _(_, _, _) {
  _(_, _, _, `include_reviews`, `reviews`);
}
function _(_, _, _) {
  _(_, _, _, `include_release`, `release`);
}
function _(_, _, _) {
  _(_, _, _, `top_tags`, `tags`);
}
function _(_, _, _) {
  _(_, _, _, `include_platforms`, `platforms`);
}
function _(_, _, _) {
  _(_, _, _, `apply_user_filters`, `user_filter_failure`);
}
function _(_, _, _) {
  _.setQueryData(_(_, `include_all_purchase_options`), {
    purchase_options: _.purchase_options,
    package_groups: _.package_groups,
  });
}
function _(_, _, _) {
  _(_, _, _, `include_supported_languages`, `supported_languages`);
}
function _(_) {
  return _
    ? `appid` in _ && !_.appid
      ? (_(!1, `Invalid appid passed to useStoreItem`), !1)
      : `bundleid` in _ && !_.bundleid
        ? (_(!1, `Invalid bundleid passed to useStoreItem`), !1)
        : !0
    : !1;
}
function _(_, _, _, _, _) {
  _.setQueryData(_(_, _), _[_] ?? null);
}
function _(_, _) {
  return {
    queryKey: _(_, `default_info`),
    queryFn: async () => _(await _(_, _, `default_info`)),
    staleTime: 360 * 60 * 1e3,
    enabled: _(_),
  };
}
function _(_, _) {
  return [`StoreItem`, _ && _(_), _];
}
function _(_, _, _) {
  let _ = _(_);
  _ &&
    (_(_, _, _),
    _.include_basic_info && _(_, _, _),
    _.include_assets && _(_, _, _),
    _.include_screenshots && _(_, _, _),
    _.include_trailers && _(_, _, _),
    _.include_assets_without_overrides && _(_, _, _),
    _.include_reviews && _(_, _, _),
    _.include_release && _(_, _, _),
    _.include_tag_count && _.include_tag_count > 0 && _(_, _, _),
    _.include_platforms && _(_, _, _),
    _.apply_user_filters && _(_, _, _),
    _.include_all_purchase_options && _(_, _, _),
    _.include_full_description && _(_, _, _),
    _.include_supported_languages && _(_, _, _),
    _.include_included_items &&
      _.included_item_data_request &&
      (_.included_items?.included_apps?.forEach((_) =>
        _(_, _, _.included_item_data_request),
      ),
      _.included_items?.included_packages?.forEach((_) =>
        _(_, _, _.included_item_data_request),
      ),
      _.included_items?.included_bundles?.forEach((_) =>
        _(_, _, _.included_item_data_request),
      )));
}
var _ = [
  `assets`,
  `tagids`,
  `tags`,
  `basic_info`,
  `reviews`,
  `game_rating`,
  `purchase_options`,
  `screenshots`,
  `trailers`,
  `supported_languages`,
  `full_description_bbcode`,
  `assets_without_overrides`,
  `user_filter_failure`,
  `links`,
  `platforms`,
  `release`,
  `package_groups`,
];
function _(_) {
  let _ = {
    ..._,
  };
  for (let _ of _) delete _[_];
  return _;
}
function _(_, _, _) {
  _.setQueryData(_(_, `default_info`), _(_));
}
async function _(_, _, _) {
  return await _.load(`${_(_)}|${_}`);
}
var _ = _.createContext({});
function _() {
  return _.useContext(_).dataLoader;
}
function _(_) {
  let {
      context: _,
      msDelayBatch: _,
      serviceTransportOverride: _,
      legacyCacheStoreItemData: _,
      children: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _.useCallback(
      (_, _) => {
        _(_, _.toObject(), _), _ && _(_, _);
      },
      [_, _],
    ),
    _ = _ || _,
    { country: _, language: _, bUsePartnerAPI: _ } = _,
    _ = _.useMemo(
      () => ({
        country: _,
        language: _,
        bUsePartnerAPI: _,
      }),
      [_, _, _],
    ),
    _ = _.useMemo(() => {
      let _ = _ ? _(_) : void 0;
      return _(
        _,
        _,
        {
          cache: !1,
          batchScheduleFn: _,
        },
        _,
      );
    }, [_, _, _, _]),
    _ = _.useMemo(
      () => ({
        dataLoader: _,
        storeBrowseContext: _,
        cacheStoreItemData: _,
      }),
      [_, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let _ = 0;
  return (_) => {
    let _,
      _ = performance.now() - _;
    _ < _ && (_ = _ - _),
      setTimeout(() => {
        (_ = performance.now()), _();
      }, _);
  };
}
export { _, _, _, _, _, _, _ };
