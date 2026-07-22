var _ = _(_(), 1),
  _ = _();
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      (0, _.startTransition)(() => _(!0));
    }, []),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
var _ = (0, _.createContext)(!1);
function _(_) {
  switch (_) {
    case 0:
      return Uint8Array;
    case 1:
      return Int8Array;
    case 2:
      return Uint8ClampedArray;
    case 3:
      return Int16Array;
    case 4:
      return Uint16Array;
    case 5:
      return Int32Array;
    case 6:
      return Uint32Array;
    case 7:
      return Float32Array;
    case 8:
      return Float64Array;
    case 9:
      return Set;
    case 10:
      return Map;
  }
}
function _(_) {
  return JSON.stringify(_, (_, _) =>
    _ instanceof Uint8Array
      ? {
          _: 0,
          _: [..._],
        }
      : _ instanceof Int8Array
        ? {
            _: 1,
            _: [..._],
          }
        : _ instanceof Uint8ClampedArray
          ? {
              _: 2,
              _: [..._],
            }
          : _ instanceof Int16Array
            ? {
                _: 3,
                _: [..._],
              }
            : _ instanceof Uint16Array
              ? {
                  _: 4,
                  _: [..._],
                }
              : _ instanceof Int32Array
                ? {
                    _: 5,
                    _: [..._],
                  }
                : _ instanceof Uint32Array
                  ? {
                      _: 6,
                      _: [..._],
                    }
                  : _ instanceof Float32Array
                    ? {
                        _: 7,
                        _: [..._],
                      }
                    : _ instanceof Float64Array
                      ? {
                          _: 8,
                          _: [..._],
                        }
                      : _ instanceof Set
                        ? {
                            _: 9,
                            _: Array.from(_.values()),
                          }
                        : _ instanceof Map
                          ? {
                              _: 10,
                              _: Array.from(_.entries()),
                            }
                          : _,
  );
}
function _(_) {
  return JSON.parse(_, (_, _) => {
    if (_ && typeof _ == `object` && `_t` in _) {
      let _ = _(_._);
      return _ ? new _(_._) : _;
    }
    return _;
  });
}
function _(_) {
  if (typeof _ == `object` && _ && `pageRoute` in _) {
    let _ = _.pageRoute;
    if (`assetData` in _ && `metadata` in _) return _;
  }
}
function _(_, _) {
  _(!_, `Should not call pushPageHistoryState with navigationAPI`),
    history.pushState(
      {
        pageRoute: _,
      },
      ``,
      _,
    );
}
function _(_) {
  _((_) => ({
    ..._,
    pageRoute: {
      ..._.pageRoute,
      ..._,
    },
  }));
}
function _(_) {
  _((_) => ({
    ..._,
    pageRoute: {
      ..._.pageRoute,
      scrollPosition: _,
    },
  }));
}
function _() {
  return _(_());
}
var _ = class extends _ {
    constructor(_ = {}) {
      super(), (this.config = _), (this.#e = new Map());
    }
    #e;
    build(_, _, _) {
      let _ = _.queryKey,
        _ = _.queryHash ?? _(_, _),
        _ = this.get(_);
      return (
        _ ||
          ((_ = new _({
            cache: this,
            queryKey: _,
            queryHash: _,
            options: _.defaultQueryOptions(_),
            state: _,
            defaultOptions: _.getQueryDefaults(_),
          })),
          this.add(_)),
        _
      );
    }
    add(_) {
      this.#e.has(_.queryHash) ||
        (this.#e.set(_.queryHash, _),
        this.notify({
          type: `added`,
          query: _,
        }));
    }
    remove(_) {
      let _ = this.#e.get(_.queryHash);
      _ &&
        (_.destroy(),
        _ === _ && this.#e.delete(_.queryHash),
        this.notify({
          type: `removed`,
          query: _,
        }));
    }
    clear() {
      _.batch(() => {
        this.getAll().forEach((_) => {
          this.remove(_);
        });
      });
    }
    get(_) {
      return this.#e.get(_);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(_) {
      let _ = {
        exact: !0,
        ..._,
      };
      return this.getAll().find((_) => _(_, _));
    }
    findAll(_ = {}) {
      let _ = this.getAll();
      return Object.keys(_).length > 0 ? _.filter((_) => _(_, _)) : _;
    }
    notify(_) {
      _.batch(() => {
        this.listeners.forEach((_) => {
          _(_);
        });
      });
    }
    onFocus() {
      _.batch(() => {
        this.getAll().forEach((_) => {
          _.onFocus();
        });
      });
    }
    onOnline() {
      _.batch(() => {
        this.getAll().forEach((_) => {
          _.onOnline();
        });
      });
    }
  },
  _ = class extends _ {
    constructor(_ = {}) {
      super(), (this.config = _), (this.#e = new Map()), (this.#t = Date.now());
    }
    #e;
    #t;
    build(_, _, _) {
      let _ = new _({
        mutationCache: this,
        mutationId: ++this.#t,
        options: _.defaultMutationOptions(_),
        state: _,
      });
      return this.add(_), _;
    }
    add(_) {
      let _ = _(_),
        _ = this.#e.get(_) ?? [];
      _.push(_),
        this.#e.set(_, _),
        this.notify({
          type: `added`,
          mutation: _,
        });
    }
    remove(_) {
      let _ = _(_);
      if (this.#e.has(_)) {
        let _ = this.#e.get(_)?.filter((_) => _ !== _);
        _ && (_.length === 0 ? this.#e.delete(_) : this.#e.set(_, _));
      }
      this.notify({
        type: `removed`,
        mutation: _,
      });
    }
    canRun(_) {
      let _ = this.#e.get(_(_))?.find((_) => _.state.status === `pending`);
      return !_ || _ === _;
    }
    runNext(_) {
      return (
        this.#e
          .get(_(_))
          ?.find((_) => _ !== _ && _.state.isPaused)
          ?.continue() ?? Promise.resolve()
      );
    }
    clear() {
      _.batch(() => {
        this.getAll().forEach((_) => {
          this.remove(_);
        });
      });
    }
    getAll() {
      return [...this.#e.values()].flat();
    }
    find(_) {
      let _ = {
        exact: !0,
        ..._,
      };
      return this.getAll().find((_) => _(_, _));
    }
    findAll(_ = {}) {
      return this.getAll().filter((_) => _(_, _));
    }
    notify(_) {
      _.batch(() => {
        this.listeners.forEach((_) => {
          _(_);
        });
      });
    }
    resumePausedMutations() {
      let _ = this.getAll().filter((_) => _.state.isPaused);
      return _.batch(() => Promise.all(_.map((_) => _.continue().catch(_))));
    }
  };
function _(_) {
  return _.options.scope?._ ?? String(_.mutationId);
}
function _(_) {
  return {
    onFetch: (_, _) => {
      let _ = _.options,
        _ = _.fetchOptions?.meta?.fetchMore?.direction,
        _ = _.state.data?.pages || [],
        _ = _.state.data?.pageParams || [],
        _ = {
          pages: [],
          pageParams: [],
        },
        _ = 0,
        _ = async () => {
          let _ = !1,
            _ = (_) => {
              Object.defineProperty(_, "signal", {
                enumerable: !0,
                get: () => (
                  _.signal.aborted
                    ? (_ = !0)
                    : _.signal.addEventListener(`abort`, () => {
                        _ = !0;
                      }),
                  _.signal
                ),
              });
            },
            _ = _(_.options, _.fetchOptions),
            _ = async (_, _, _) => {
              if (_) return Promise.reject();
              if (_ == null && _.pages.length) return Promise.resolve(_);
              let _ = {
                queryKey: _.queryKey,
                pageParam: _,
                direction: _ ? `backward` : `forward`,
                meta: _.options.meta,
              };
              _(_);
              let _ = await _(_),
                { maxPages: _ } = _.options,
                _ = _ ? _ : _;
              return {
                pages: _(_.pages, _, _),
                pageParams: _(_.pageParams, _, _),
              };
            };
          if (_ && _.length) {
            let _ = _ === `backward`,
              _ = _ ? _ : _,
              _ = {
                pages: _,
                pageParams: _,
              };
            _ = await _(_, _(_, _), _);
          } else {
            let _ = _ ?? _.length;
            do {
              let _ = _ === 0 ? (_[0] ?? _.initialPageParam) : _(_, _);
              if (_ > 0 && _ == null) break;
              (_ = await _(_, _)), _++;
            } while (_ < _);
          }
          return _;
        };
      _.options.persister
        ? (_.fetchFn = () =>
            _.options.persister?.(
              _,
              {
                queryKey: _.queryKey,
                meta: _.options.meta,
                signal: _.signal,
              },
              _,
            ))
        : (_.fetchFn = _);
    },
  };
}
function _(_, { pages: _, pageParams: _ }) {
  let _ = _.length - 1;
  return _.length > 0 ? _.getNextPageParam(_[_], _, _[_], _) : void 0;
}
function _(_, { pages: _, pageParams: _ }) {
  return _.length > 0 ? _.getPreviousPageParam?.(_[0], _, _[0], _) : void 0;
}
function _(_, _) {
  return _ ? _(_, _) != null : !1;
}
function _(_, _) {
  return !_ || !_.getPreviousPageParam ? !1 : _(_, _) != null;
}
var _ = class {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(_ = {}) {
    (this.#e = _.queryCache || new _()),
      (this.#t = _.mutationCache || new _()),
      (this.#n = _.defaultOptions || {}),
      (this.#r = new Map()),
      (this.#i = new Map()),
      (this.#a = 0);
  }
  mount() {
    this.#a++,
      this.#a === 1 &&
        ((this.#o = _.subscribe(async (_) => {
          _ && (await this.resumePausedMutations(), this.#e.onFocus());
        })),
        (this.#s = _.subscribe(async (_) => {
          _ && (await this.resumePausedMutations(), this.#e.onOnline());
        })));
  }
  unmount() {
    this.#a--,
      this.#a === 0 &&
        (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0));
  }
  isFetching(_) {
    return this.#e.findAll({
      ..._,
      fetchStatus: `fetching`,
    }).length;
  }
  isMutating(_) {
    return this.#t.findAll({
      ..._,
      status: `pending`,
    }).length;
  }
  getQueryData(_) {
    let _ = this.defaultQueryOptions({
      queryKey: _,
    });
    return this.#e.get(_.queryHash)?.state.data;
  }
  ensureQueryData(_) {
    let _ = this.getQueryData(_.queryKey);
    if (_ === void 0) return this.fetchQuery(_);
    {
      let _ = this.defaultQueryOptions(_),
        _ = this.#e.build(this, _);
      return (
        _.revalidateIfStale &&
          _.isStaleByTime(_(_.staleTime, _)) &&
          this.prefetchQuery(_),
        Promise.resolve(_)
      );
    }
  }
  getQueriesData(_) {
    return this.#e.findAll(_).map(({ queryKey: _, state: _ }) => [_, _.data]);
  }
  setQueryData(_, _, _) {
    let _ = this.defaultQueryOptions({
        queryKey: _,
      }),
      _ = this.#e.get(_.queryHash)?.state.data,
      _ = _(_, _);
    if (_ !== void 0)
      return this.#e.build(this, _).setData(_, {
        ..._,
        manual: !0,
      });
  }
  setQueriesData(_, _, _) {
    return _.batch(() =>
      this.#e
        .findAll(_)
        .map(({ queryKey: _ }) => [_, this.setQueryData(_, _, _)]),
    );
  }
  getQueryState(_) {
    let _ = this.defaultQueryOptions({
      queryKey: _,
    });
    return this.#e.get(_.queryHash)?.state;
  }
  removeQueries(_) {
    let _ = this.#e;
    _.batch(() => {
      _.findAll(_).forEach((_) => {
        _.remove(_);
      });
    });
  }
  resetQueries(_, _) {
    let _ = this.#e,
      _ = {
        type: `active`,
        ..._,
      };
    return _.batch(
      () => (
        _.findAll(_).forEach((_) => {
          _.reset();
        }),
        this.refetchQueries(_, _)
      ),
    );
  }
  cancelQueries(_ = {}, _ = {}) {
    let _ = {
        revert: !0,
        ..._,
      },
      _ = _.batch(() => this.#e.findAll(_).map((_) => _.cancel(_)));
    return Promise.all(_).then(_).catch(_);
  }
  invalidateQueries(_ = {}, _ = {}) {
    return _.batch(() => {
      if (
        (this.#e.findAll(_).forEach((_) => {
          _.invalidate();
        }),
        _.refetchType === `none`)
      )
        return Promise.resolve();
      let _ = {
        ..._,
        type: _.refetchType ?? _.type ?? `active`,
      };
      return this.refetchQueries(_, _);
    });
  }
  refetchQueries(_ = {}, _) {
    let _ = {
        ..._,
        cancelRefetch: _?.cancelRefetch ?? !0,
      },
      _ = _.batch(() =>
        this.#e
          .findAll(_)
          .filter((_) => !_.isDisabled())
          .map((_) => {
            let _ = _.fetch(void 0, _);
            return (
              _.throwOnError || (_ = _.catch(_)),
              _.state.fetchStatus === `paused` ? Promise.resolve() : _
            );
          }),
      );
    return Promise.all(_).then(_);
  }
  fetchQuery(_) {
    let _ = this.defaultQueryOptions(_);
    _.retry === void 0 && (_.retry = !1);
    let _ = this.#e.build(this, _);
    return _.isStaleByTime(_(_.staleTime, _))
      ? _.fetch(_)
      : Promise.resolve(_.state.data);
  }
  prefetchQuery(_) {
    return this.fetchQuery(_).then(_).catch(_);
  }
  fetchInfiniteQuery(_) {
    return (_.behavior = _(_.pages)), this.fetchQuery(_);
  }
  prefetchInfiniteQuery(_) {
    return this.fetchInfiniteQuery(_).then(_).catch(_);
  }
  ensureInfiniteQueryData(_) {
    return (_.behavior = _(_.pages)), this.ensureQueryData(_);
  }
  resumePausedMutations() {
    return _.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return this.#e;
  }
  getMutationCache() {
    return this.#t;
  }
  getDefaultOptions() {
    return this.#n;
  }
  setDefaultOptions(_) {
    this.#n = _;
  }
  setQueryDefaults(_, _) {
    this.#r.set(_(_), {
      queryKey: _,
      defaultOptions: _,
    });
  }
  getQueryDefaults(_) {
    let _ = [...this.#r.values()],
      _ = {};
    return (
      _.forEach((_) => {
        _(_, _.queryKey) &&
          (_ = {
            ..._,
            ..._.defaultOptions,
          });
      }),
      _
    );
  }
  setMutationDefaults(_, _) {
    this.#i.set(_(_), {
      mutationKey: _,
      defaultOptions: _,
    });
  }
  getMutationDefaults(_) {
    let _ = [...this.#i.values()],
      _ = {};
    return (
      _.forEach((_) => {
        _(_, _.mutationKey) &&
          (_ = {
            ..._,
            ..._.defaultOptions,
          });
      }),
      _
    );
  }
  defaultQueryOptions(_) {
    if (_._defaulted) return _;
    let _ = {
      ...this.#n.queries,
      ...this.getQueryDefaults(_.queryKey),
      ..._,
      _defaulted: !0,
    };
    return (
      (_.queryHash ||= _(_.queryKey, _)),
      _.refetchOnReconnect === void 0 &&
        (_.refetchOnReconnect = _.networkMode !== `always`),
      _.throwOnError === void 0 && (_.throwOnError = !!_.suspense),
      !_.networkMode && _.persister && (_.networkMode = `offlineFirst`),
      _.enabled !== !0 && _.queryFn === _ && (_.enabled = !1),
      _
    );
  }
  defaultMutationOptions(_) {
    return _?._defaulted
      ? _
      : {
          ...this.#n.mutations,
          ...(_?.mutationKey && this.getMutationDefaults(_.mutationKey)),
          ..._,
          _defaulted: !0,
        };
  }
  clear() {
    this.#e.clear(), this.#t.clear();
  }
};
function _(_) {
  return _;
}
function _(_, _, _) {
  if (typeof _ != `object` || !_) return;
  let _ = _.getMutationCache(),
    _ = _.getQueryCache(),
    _ =
      _?.defaultOptions?.deserializeData ??
      _.getDefaultOptions().hydrate?.deserializeData ??
      _,
    _ = _.mutations || [],
    _ = _.queries || [];
  _.forEach(({ state: _, ..._ }) => {
    _.build(
      _,
      {
        ..._.getDefaultOptions().hydrate?.mutations,
        ..._?.defaultOptions?.mutations,
        ..._,
      },
      _,
    );
  }),
    _.forEach(
      ({ queryKey: _, state: _, queryHash: _, meta: _, promise: _ }) => {
        let _ = _.get(_),
          _ = _.data === void 0 ? _.data : _(_.data);
        if (_) {
          if (_.state.dataUpdatedAt < _.dataUpdatedAt) {
            let { fetchStatus: _, ..._ } = _;
            _.setState({
              ..._,
              data: _,
            });
          }
        } else
          _ = _.build(
            _,
            {
              ..._.getDefaultOptions().hydrate?.queries,
              ..._?.defaultOptions?.queries,
              queryKey: _,
              queryHash: _,
              meta: _,
            },
            {
              ..._,
              data: _,
              fetchStatus: `idle`,
            },
          );
        if (_) {
          let _ = Promise.resolve(_).then(_);
          _.fetch(void 0, {
            initialPromise: _,
          });
        }
      },
    );
}
var _ = ({ children: _, options: _ = {}, state: _, queryClient: _ }) => {
    let _ = _(_),
      [_, _] = _.useState(),
      _ = _.useRef(_);
    return (
      (_.current = _),
      _.useMemo(() => {
        if (_) {
          if (typeof _ != `object`) return;
          let _ = _.getQueryCache(),
            _ = _.queries || [],
            _ = [],
            _ = [];
          for (let _ of _) {
            let _ = _.get(_.queryHash);
            if (!_) _.push(_);
            else {
              let _ = _.state.dataUpdatedAt > _.state.dataUpdatedAt,
                _ = _?.find((_) => _.queryHash === _.queryHash);
              _ &&
                (!_ || _.state.dataUpdatedAt > _.state.dataUpdatedAt) &&
                _.push(_);
            }
          }
          _.length > 0 &&
            _(
              _,
              {
                queries: _,
              },
              _.current,
            ),
            _.length > 0 && _((_) => (_ ? [..._, ..._] : _));
        }
      }, [_, _, _]),
      _.useEffect(() => {
        _ &&
          (_(
            _,
            {
              queries: _,
            },
            _.current,
          ),
          _(void 0));
      }, [_, _]),
      _
    );
  },
  _ = function () {
    return null;
  };
function _(_) {
  let { queryClient: _ = _, steamUI: _ } = _;
  _.useEffect(() => {
    _ == _ &&
      _.setDefaultOptions({
        ..._,
        queries: {
          ..._.queries,
          networkMode: _ ? `offlineFirst` : void 0,
        },
        mutations: {
          ..._.mutations,
          networkMode: _ ? `offlineFirst` : void 0,
        },
      });
  }, [_, _]);
  let _ = _.children;
  return (
    _.debug &&
      (_ = [
        ..._.Children.toArray(_),
        _.createElement(_, {
          key: `ReactQueryDevtools`,
        }),
      ]),
    _.createElement(
      _,
      {
        client: _,
      },
      _,
    )
  );
}
var _ = {
    queries: {
      staleTime: 1 / 0,
    },
  },
  _ = new _({
    defaultOptions: _,
  }),
  _;
function _() {
  (0, _.useEffect)(() => {
    if (_) return;
    window.history.scrollRestoration = `manual`;
    async function _(_) {
      _?.abort();
      let _ = (_ = new AbortController());
      if (!_.state) return;
      let _ = _(history.state);
      if (_ && _.loaderData)
        try {
          await _(_, _.signal), _ == _ && (_ = void 0);
          return;
        } catch (_) {
          console.error(_);
        }
      let _ = new URL(location.href);
      await _(_.pathname + _.search + _.hash, _?.signal),
        _ == _ && (_ = void 0);
    }
    return (
      window.addEventListener(`popstate`, _),
      () => {
        _?.abort(), window.removeEventListener(`popstate`, _);
      }
    );
  }, []);
  let _ = (0, _.useCallback)(() => {
    _({
      ..._(),
      scrollPosition: {
        _: window.scrollX,
        _: window.scrollY,
      },
    });
  }, []);
  _(window, `scroll`, _ ? void 0 : _);
}
async function _(_) {
  if (_) {
    _(_);
    return;
  }
  _?.abort(), (_ = new AbortController());
  try {
    await _(_, _.signal);
  } catch (_) {
    console.error(_), (location.href = _);
  }
  _ = void 0;
}
function _(_) {
  let { clientAssets: _, staticMode: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.preload.map((_, _) =>
        _._ === `hmr`
          ? (0, _.jsx)(
              `script`,
              {
                type: `module`,
                src: _.href,
              },
              _,
            )
          : _._ === `script`
            ? _
              ? null
              : (0, _.jsx)(
                  `link`,
                  {
                    rel: `modulepreload`,
                    href: _.href,
                    _: _._,
                    integrity: _.integrity,
                    crossOrigin: `anonymous`,
                  },
                  _,
                )
            : (0, _.jsx)(
                `link`,
                {
                  rel: `preload`,
                  href: _.href,
                  _: _._,
                  integrity: _.integrity,
                  crossOrigin: `anonymous`,
                  precedence: `1`,
                },
                _,
              ),
      ),
      _.css.map((_, _) =>
        (0, _.jsx)(
          `link`,
          {
            rel: `stylesheet`,
            href: _.href,
            integrity: _.integrity,
            crossOrigin: `anonymous`,
            precedence: `1`,
          },
          _.href,
        ),
      ),
    ],
  });
}
var _ = `x-valve-request-type`,
  _ = `x-valve-action-type`,
  _ = `x-valve-loader-index`,
  _ = `x-valve-refetch-payload`;
async function* _(_) {
  let _ = ``;
  for (;;) {
    let { done: _, value: _ } = await _.read();
    if (_ || _ === void 0) break;
    _ += _;
    let _ = _.split(`
`);
    if (_.length !== 0) {
      _ = _.pop();
      for (let _ of _) yield _;
    }
  }
  _ !== `` && (yield _);
}
async function* _(_, _) {
  let { abortSignal: _, additionalHeaders: _, requestType: _ } = _;
  `TextDecoderStream` in window ||
    (await _(() => import(`./DRqMP-gB.js`), [], import.meta.url));
  let _ = new Headers(_);
  _.append(_, _);
  let _,
    _ = _ === `routeAction`;
  _ &&
    (_.append(_, `${_.routeID}:${_.action}`),
    _.append(`Content-Type`, `application/json; charset=utf-8`),
    (_ = _(_.data)));
  let _ = await fetch(_, {
    credentials: `same-origin`,
    headers: _,
    signal: _,
    body: _,
    method: _ ? `POST` : `GET`,
    redirect: `manual`,
  });
  _.type === `opaqueredirect` && (location.href = _);
  let _ = _.body?.pipeThrough(new TextDecoderStream()).getReader();
  if (!_) throw Error(`no response body reader`);
  for await (let _ of _(_)) {
    if (_?.aborted) return;
    yield _;
  }
}
async function* _(_, _, _) {
  for await (let _ of _(_, {
    abortSignal: _,
    additionalHeaders: _,
    requestType: `routeData`,
  }))
    yield _;
}
async function _(_, _, _, _) {
  let _ = [],
    _ = _.map((_) => [_, _.toString()]);
  _ !== void 0 && _.push([_, _]);
  for await (let _ of _(_, _, _)) _.push(_(_));
  return _;
}
async function _(_, _, _, _) {
  return (await _(_, [_], _, _))[0];
}
async function _(_, _) {
  for await (let _ of _(_, {
    ..._,
    requestType: `routeAction`,
  }))
    return _(_);
}
var _ = _(
  _((_, _) => {
    var _ = `__lodash_hash_undefined__`,
      _ = 9007199254740991,
      _ = `[object Arguments]`,
      _ = `[object Array]`,
      _ = `[object Boolean]`,
      _ = `[object Date]`,
      _ = `[object Error]`,
      _ = `[object Function]`,
      _ = `[object GeneratorFunction]`,
      _ = `[object Map]`,
      _ = `[object Number]`,
      _ = `[object Object]`,
      _ = `[object Promise]`,
      _ = `[object RegExp]`,
      _ = `[object Set]`,
      _ = `[object String]`,
      _ = `[object Symbol]`,
      _ = `[object WeakMap]`,
      _ = `[object ArrayBuffer]`,
      _ = `[object DataView]`,
      _ = `[object Float32Array]`,
      _ = `[object Float64Array]`,
      _ = `[object Int8Array]`,
      _ = `[object Int16Array]`,
      _ = `[object Int32Array]`,
      _ = `[object Uint8Array]`,
      _ = `[object Uint8ClampedArray]`,
      _ = `[object Uint16Array]`,
      _ = `[object Uint32Array]`,
      _ = /[\\^$.*+?()[\]{}|]/g,
      _ = /\w*$/,
      _ = /^\[object .+?Constructor\]$/,
      _ = /^(?:0|[1-9]\d*)$/,
      _ = {};
    (_[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
      _[_] =
        !0),
      (_[_] = _[_] = _[_] = !1);
    var _ =
        typeof global == `object` &&
        global &&
        global.Object === Object &&
        global,
      _ = typeof self == `object` && self && self.Object === Object && self,
      _ = _ || _ || Function(`return this`)(),
      _ = typeof _ == `object` && _ && !_.nodeType && _,
      _ = _ && typeof _ == `object` && _ && !_.nodeType && _,
      _ = _ && _.exports === _;
    function _(_, _) {
      return _.set(_[0], _[1]), _;
    }
    function _(_, _) {
      return _.add(_), _;
    }
    function _(_, _) {
      for (var _ = -1, _ = _ ? _.length : 0; ++_ < _ && _(_[_], _, _) !== !1; );
      return _;
    }
    function _(_, _) {
      for (var _ = -1, _ = _.length, _ = _.length; ++_ < _; ) _[_ + _] = _[_];
      return _;
    }
    function _(_, _, _, _) {
      var _ = -1,
        _ = _ ? _.length : 0;
      for (_ && _ && (_ = _[++_]); ++_ < _; ) _ = _(_, _[_], _, _);
      return _;
    }
    function _(_, _) {
      for (var _ = -1, _ = Array(_); ++_ < _; ) _[_] = _(_);
      return _;
    }
    function _(_, _) {
      return _?.[_];
    }
    function _(_) {
      var _ = !1;
      if (_ != null && typeof _.toString != `function`)
        try {
          _ = !!(_ + ``);
        } catch {}
      return _;
    }
    function _(_) {
      var _ = -1,
        _ = Array(_.size);
      return (
        _.forEach(function (_, _) {
          _[++_] = [_, _];
        }),
        _
      );
    }
    function _(_, _) {
      return function (_) {
        return _(_(_));
      };
    }
    function _(_) {
      var _ = -1,
        _ = Array(_.size);
      return (
        _.forEach(function (_) {
          _[++_] = _;
        }),
        _
      );
    }
    var _ = Array.prototype,
      _ = Function.prototype,
      _ = Object.prototype,
      _ = _[`__core-js_shared__`],
      _ = (function () {
        var _ = /[^.]+$/.exec((_ && _.keys && _.keys.IE_PROTO) || ``);
        return _ ? `Symbol(src)_1.` + _ : ``;
      })(),
      _ = _.toString,
      _ = _.hasOwnProperty,
      _ = _.toString,
      _ = RegExp(
        `^` +
          _.call(_)
            .replace(_, `\\$&`)
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              `$1.*?`,
            ) +
          `$`,
      ),
      _ = _ ? _.Buffer : void 0,
      _ = _.Symbol,
      _ = _.Uint8Array,
      _ = _(Object.getPrototypeOf, Object),
      _ = Object.create,
      _ = _.propertyIsEnumerable,
      _ = _.splice,
      _ = Object.getOwnPropertySymbols,
      _ = _ ? _.isBuffer : void 0,
      _ = _(Object.keys, Object),
      _ = _(_, `DataView`),
      _ = _(_, `Map`),
      _ = _(_, `Promise`),
      _ = _(_, `Set`),
      _ = _(_, `WeakMap`),
      _ = _(Object, `create`),
      _ = _(_),
      _ = _(_),
      _ = _(_),
      _ = _(_),
      _ = _(_),
      _ = _ ? _.prototype : void 0,
      _ = _ ? _.valueOf : void 0;
    function _(_) {
      var _ = -1,
        _ = _ ? _.length : 0;
      for (this.clear(); ++_ < _; ) {
        var _ = _[_];
        this.set(_[0], _[1]);
      }
    }
    function _() {
      this.__data__ = _ ? _(null) : {};
    }
    function _(_) {
      return this.has(_) && delete this.__data__[_];
    }
    function _(_) {
      var _ = this.__data__;
      if (_) {
        var _ = _[_];
        return _ === _ ? void 0 : _;
      }
      return _.call(_, _) ? _[_] : void 0;
    }
    function _(_) {
      var _ = this.__data__;
      return _ ? _[_] !== void 0 : _.call(_, _);
    }
    function _(_, _) {
      var _ = this.__data__;
      return (_[_] = _ && _ === void 0 ? _ : _), this;
    }
    (_.prototype.clear = _),
      (_.prototype.delete = _),
      (_.prototype.get = _),
      (_.prototype.has = _),
      (_.prototype.set = _);
    function _(_) {
      var _ = -1,
        _ = _ ? _.length : 0;
      for (this.clear(); ++_ < _; ) {
        var _ = _[_];
        this.set(_[0], _[1]);
      }
    }
    function _() {
      this.__data__ = [];
    }
    function _(_) {
      var _ = this.__data__,
        _ = _(_, _);
      return _ < 0 ? !1 : (_ == _.length - 1 ? _.pop() : _.call(_, _, 1), !0);
    }
    function _(_) {
      var _ = this.__data__,
        _ = _(_, _);
      return _ < 0 ? void 0 : _[_][1];
    }
    function _(_) {
      return _(this.__data__, _) > -1;
    }
    function _(_, _) {
      var _ = this.__data__,
        _ = _(_, _);
      return _ < 0 ? _.push([_, _]) : (_[_][1] = _), this;
    }
    (_.prototype.clear = _),
      (_.prototype.delete = _),
      (_.prototype.get = _),
      (_.prototype.has = _),
      (_.prototype.set = _);
    function _(_) {
      var _ = -1,
        _ = _ ? _.length : 0;
      for (this.clear(); ++_ < _; ) {
        var _ = _[_];
        this.set(_[0], _[1]);
      }
    }
    function _() {
      this.__data__ = {
        hash: new _(),
        map: new (_ || _)(),
        string: new _(),
      };
    }
    function _(_) {
      return _(this, _).delete(_);
    }
    function _(_) {
      return _(this, _).get(_);
    }
    function _(_) {
      return _(this, _).has(_);
    }
    function _(_, _) {
      return _(this, _).set(_, _), this;
    }
    (_.prototype.clear = _),
      (_.prototype.delete = _),
      (_.prototype.get = _),
      (_.prototype.has = _),
      (_.prototype.set = _);
    function _(_) {
      this.__data__ = new _(_);
    }
    function _() {
      this.__data__ = new _();
    }
    function _(_) {
      return this.__data__.delete(_);
    }
    function _(_) {
      return this.__data__.get(_);
    }
    function _(_) {
      return this.__data__.has(_);
    }
    function _(_, _) {
      var _ = this.__data__;
      if (_ instanceof _) {
        var _ = _.__data__;
        if (!_ || _.length < 199) return _.push([_, _]), this;
        _ = this.__data__ = new _(_);
      }
      return _.set(_, _), this;
    }
    (_.prototype.clear = _),
      (_.prototype.delete = _),
      (_.prototype.get = _),
      (_.prototype.has = _),
      (_.prototype.set = _);
    function _(_, _) {
      var _ = _(_) || _(_) ? _(_.length, String) : [],
        _ = _.length,
        _ = !!_;
      for (var _ in _)
        (_ || _.call(_, _)) && !(_ && (_ == `length` || _(_, _))) && _.push(_);
      return _;
    }
    function _(_, _, _) {
      var _ = _[_];
      (!(_.call(_, _) && _(_, _)) || (_ === void 0 && !(_ in _))) && (_[_] = _);
    }
    function _(_, _) {
      for (var _ = _.length; _--; ) if (_(_[_][0], _)) return _;
      return -1;
    }
    function _(_, _) {
      return _ && _(_, _(_), _);
    }
    function _(_, _, _, _, _, _, _) {
      var _;
      if ((_ && (_ = _ ? _(_, _, _, _) : _(_)), _ !== void 0)) return _;
      if (!_(_)) return _;
      var _ = _(_);
      if (_) {
        if (((_ = _(_)), !_)) return _(_, _);
      } else {
        var _ = _(_),
          _ = _ == _ || _ == _;
        if (_(_)) return _(_, _);
        if (_ == _ || _ == _ || (_ && !_)) {
          if (_(_)) return _ ? _ : {};
          if (((_ = _(_ ? {} : _)), !_)) return _(_, _(_, _));
        } else {
          if (!_[_]) return _ ? _ : {};
          _ = _(_, _, _, _);
        }
      }
      _ ||= new _();
      var _ = _.get(_);
      if (_) return _;
      if ((_.set(_, _), !_)) var _ = _ ? _(_) : _(_);
      return (
        _(_ || _, function (_, _) {
          _ && ((_ = _), (_ = _[_])), _(_, _, _(_, _, _, _, _, _, _));
        }),
        _
      );
    }
    function _(_) {
      return _(_) ? _(_) : {};
    }
    function _(_, _, _) {
      var _ = _(_);
      return _(_) ? _ : _(_, _(_));
    }
    function _(_) {
      return _.call(_);
    }
    function _(_) {
      return !_(_) || _(_) ? !1 : (_(_) || _(_) ? _ : _).test(_(_));
    }
    function _(_) {
      if (!_(_)) return _(_);
      var _ = [];
      for (var _ in Object(_)) _.call(_, _) && _ != `constructor` && _.push(_);
      return _;
    }
    function _(_, _) {
      if (_) return _.slice();
      var _ = new _.constructor(_.length);
      return _.copy(_), _;
    }
    function _(_) {
      var _ = new _.constructor(_.byteLength);
      return new _(_).set(new _(_)), _;
    }
    function _(_, _) {
      var _ = _ ? _(_.buffer) : _.buffer;
      return new _.constructor(_, _.byteOffset, _.byteLength);
    }
    function _(_, _, _) {
      return _(_ ? _(_(_), !0) : _(_), _, new _.constructor());
    }
    function _(_) {
      var _ = new _.constructor(_.source, _.exec(_));
      return (_.lastIndex = _.lastIndex), _;
    }
    function _(_, _, _) {
      return _(_ ? _(_(_), !0) : _(_), _, new _.constructor());
    }
    function _(_) {
      return _ ? Object(_.call(_)) : {};
    }
    function _(_, _) {
      var _ = _ ? _(_.buffer) : _.buffer;
      return new _.constructor(_, _.byteOffset, _.length);
    }
    function _(_, _) {
      var _ = -1,
        _ = _.length;
      for (_ ||= Array(_); ++_ < _; ) _[_] = _[_];
      return _;
    }
    function _(_, _, _, _) {
      _ ||= {};
      for (var _ = -1, _ = _.length; ++_ < _; ) {
        var _ = _[_],
          _ = _ ? _(_[_], _[_], _, _, _) : void 0;
        _(_, _, _ === void 0 ? _[_] : _);
      }
      return _;
    }
    function _(_, _) {
      return _(_, _(_), _);
    }
    function _(_) {
      return _(_, _, _);
    }
    function _(_, _) {
      var _ = _.__data__;
      return _(_) ? _[typeof _ == `string` ? `string` : `hash`] : _.map;
    }
    function _(_, _) {
      var _ = _(_, _);
      return _(_) ? _ : void 0;
    }
    var _ = _ ? _(_, Object) : _,
      _ = _;
    ((_ && _(new _(new ArrayBuffer(1))) != _) ||
      (_ && _(new _()) != _) ||
      (_ && _(_.resolve()) != _) ||
      (_ && _(new _()) != _) ||
      (_ && _(new _()) != _)) &&
      (_ = function (_) {
        var _ = _.call(_),
          _ = _ == _ ? _.constructor : void 0,
          _ = _ ? _(_) : void 0;
        if (_)
          switch (_) {
            case _:
              return _;
            case _:
              return _;
            case _:
              return _;
            case _:
              return _;
            case _:
              return _;
          }
        return _;
      });
    function _(_) {
      var _ = _.length,
        _ = _.constructor(_);
      return (
        _ &&
          typeof _[0] == `string` &&
          _.call(_, `index`) &&
          ((_.index = _.index), (_.input = _.input)),
        _
      );
    }
    function _(_) {
      return typeof _.constructor == `function` && !_(_) ? _(_(_)) : {};
    }
    function _(_, _, _, _) {
      var _ = _.constructor;
      switch (_) {
        case _:
          return _(_);
        case _:
        case _:
          return new _(+_);
        case _:
          return _(_, _);
        case _:
        case _:
        case _:
        case _:
        case _:
        case _:
        case _:
        case _:
        case _:
          return _(_, _);
        case _:
          return _(_, _, _);
        case _:
        case _:
          return new _(_);
        case _:
          return _(_);
        case _:
          return _(_, _, _);
        case _:
          return _(_);
      }
    }
    function _(_, _) {
      return (
        (_ ??= _),
        !!_ &&
          (typeof _ == `number` || _.test(_)) &&
          _ > -1 &&
          _ % 1 == 0 &&
          _ < _
      );
    }
    function _(_) {
      var _ = typeof _;
      return _ == `string` || _ == `number` || _ == `symbol` || _ == `boolean`
        ? _ !== `__proto__`
        : _ === null;
    }
    function _(_) {
      return !!_ && _ in _;
    }
    function _(_) {
      var _ = _ && _.constructor;
      return _ === ((typeof _ == `function` && _.prototype) || _);
    }
    function _(_) {
      if (_ != null) {
        try {
          return _.call(_);
        } catch {}
        try {
          return _ + ``;
        } catch {}
      }
      return ``;
    }
    function _(_) {
      return _(_, !0, !0);
    }
    function _(_, _) {
      return _ === _ || (_ !== _ && _ !== _);
    }
    function _(_) {
      return (
        _(_) && _.call(_, `callee`) && (!_.call(_, `callee`) || _.call(_) == _)
      );
    }
    var _ = Array.isArray;
    function _(_) {
      return _ != null && _(_.length) && !_(_);
    }
    function _(_) {
      return _(_) && _(_);
    }
    var _ = _ || _;
    function _(_) {
      var _ = _(_) ? _.call(_) : ``;
      return _ == _ || _ == _;
    }
    function _(_) {
      return typeof _ == `number` && _ > -1 && _ % 1 == 0 && _ <= _;
    }
    function _(_) {
      var _ = typeof _;
      return !!_ && (_ == `object` || _ == `function`);
    }
    function _(_) {
      return !!_ && typeof _ == `object`;
    }
    function _(_) {
      return _(_) ? _(_) : _(_);
    }
    function _() {
      return [];
    }
    function _() {
      return !1;
    }
    _.exports = _;
  })(),
  1,
);
function _(_) {
  return _ ? _(_) : null;
}
var _ = Symbol.for(`No loader context`),
  _ = (0, _.createContext)(_);
function _(_) {
  let [_, _] = (0, _.useState)(_.loaderData),
    _ = (0, _.useRef)(_.loaderData),
    _ = _.current !== _.loaderData;
  _.current = _.loaderData;
  let [_, _] = (0, _.useState)(),
    _ = (0, _.useCallback)(
      async (_) => {
        let _ = new URL(location.href),
          _ = _.pathname + _.search + _.hash,
          _ = _ ? JSON.stringify(_) : ``,
          _ = _ + _;
        if (_) {
          if (_.fetchKey === _) return _.promise;
          _.abortController.abort();
        }
        let _ = new AbortController(),
          _ = _(_, _._, _ ? _ : void 0, _.signal);
        _({
          promise: _,
          abortController: _,
          fetchKey: _,
        });
        try {
          let _ = await _;
          return _(_), _(void 0), _;
        } catch (_) {
          if (!_.signal.aborted) throw (_(void 0), _);
        }
        return _;
      },
      [_._, _],
    ),
    _ = (0, _.useRef)(_);
  _.current = _;
  let _ = _.useCallback((..._) => _.current(..._), []);
  return (
    (0, _.useEffect)(() => {
      _(_.loaderData);
      {
        let _ = _();
        if (_?.loaderData) {
          let _ = [..._.loaderData];
          (_[_._] = (0, _.default)(_.loaderData)),
            _({
              ..._,
              loaderData: _,
            });
        }
      }
    }, [_.loaderData, _._]),
    (0, _.jsx)(_.Provider, {
      value: {
        loaderData: _ ? _.loaderData : _,
        refetchFn: _,
        fetchState: _,
        _: _._,
      },
      children: _.children,
    })
  );
}
function _(_) {
  let _ = (0, _.useContext)(_);
  if (_ === _) throw `Used ${_} outside of LoaderContext`;
  return _;
}
function _() {
  return _(`useLoaderData`).loaderData;
}
function _() {
  return _(`useRefetchLoader`).refetchFn;
}
var _ = _.createContext(void 0);
function _({ children: _, ..._ }) {
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  let _ = (0, _.useContext)(_);
  if (!_) throw Error(`Used <Head /> outside of router context`);
  let { metadata: _, clientAssets: _, nonce: _ } = _,
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`meta`, {
        name: `viewport`,
        content: `width=device-width,initial-scale=1${_.IN_MOBILE_WEBVIEW ? `,user-scalable=no` : ``}`,
      }),
      (0, _.jsx)(`meta`, {
        name: `theme-color`,
        content: `#171a21`,
      }),
      (0, _.jsx)(`meta`, {
        property: `csp-nonce`,
        nonce: _ ?? document.querySelector(`meta[property=csp-nonce]`)?.nonce,
      }),
      _?.title &&
        (0, _.jsx)(`title`, {
          children: _.title,
        }),
      _?.description &&
        (0, _.jsx)(`meta`, {
          property: `description`,
          content: _.description,
        }),
      (0, _.jsx)(_, {
        metadata: _,
      }),
      _?.snr &&
        (0, _.jsx)(`meta`, {
          property: `valve:snr`,
          content: _.ComputeLinkPrefix(
            _.snr.domain,
            _.snr.controller,
            _.snr.method,
            _.snr.submethod,
          ),
        }),
      (0, _.jsx)(_, {
        clientAssets: _,
        staticMode: _.static,
      }),
    ],
  });
}
function _(_) {
  let { metadata: _ } = _;
  if (!_) return null;
  let { shareImage: _, shareTitle: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:title`,
          content: _,
        }),
      (Array.isArray(_) ? _ : [_]).map((_, _) =>
        (0, _.jsx)(
          `meta`,
          {
            property: `og:image`,
            content: _,
          },
          _,
        ),
      ),
    ],
  });
}
function _(_) {
  let {
    pageRoutes: _,
    clientAssets: _,
    metadata: _,
    loaderData: _,
    renderContext: _,
    scrollPosition: _,
    onComplete: _,
    nonce: _,
  } = _;
  return (
    _(),
    _(_),
    (0, _.useLayoutEffect)(() => {
      _ && _();
    }, [_]),
    (0, _.jsx)(_.Fragment, {
      children: (0, _.jsx)(_, {
        renderContext: _,
        children: (0, _.jsx)(_, {
          queryClient: _.queryClient,
          children: (0, _.jsx)(_, {
            state:
              typeof _.queryData == `string` ? _(_.queryData) : _.queryData,
            children: (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  metadata: _,
                  clientAssets: _,
                  nonce: _,
                  children: (0, _.jsx)(_, {
                    ..._?.snr,
                    children: (0, _.jsxs)(_.Suspense, {
                      children: [
                        !1,
                        (0, _.jsx)(_, {
                          pageRoutes: _,
                          loaderData: _,
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
var _ = _.Fragment;
function _(_) {
  (0, _.useLayoutEffect)(() => {
    if (_) {
      let { _: _ = 0, _: _ = 0 } = _;
      window.scrollTo(_, _);
    }
  }, [_]);
}
function _(_) {
  let { pageRoutes: _, index: _ = 0, loaderData: _ } = _,
    [_, ..._] = _,
    [_, ..._] = _;
  return (0, _.jsx)(_, {
    loaderData: _,
    _: _,
    children: (0, _.jsx)(_.Component, {
      children:
        _.length > 0 &&
        (0, _.jsx)(_, {
          pageRoutes: _,
          loaderData: _,
          index: _ + 1,
        }),
    }),
  });
}
function _(_, _, _, _, _, _, _) {
  let _ = _.filter((_) => _.route?.Component).map((_) => _.route);
  if (_.length === 0) throw `no routemodule with a component, can't render`;
  (window.SSR ??= {}),
    (window.SSR.clientAssets = _),
    _.startTransition(() => {
      window.SSR?.reactRoot?.render(
        (0, _.jsx)(_, {
          pageRoutes: _,
          clientAssets: _,
          loaderData: _,
          metadata: _,
          renderContext: _,
          scrollPosition: _,
          onComplete: _,
        }),
      );
    }),
    _.forEach((_) => {
      if (`onNavigate` in _) {
        let _ = _.onNavigate;
        _(_);
      }
    });
}
async function _(_, _, _ = !1) {
  let _,
    _,
    _,
    _,
    _ = [];
  (_ &&= (clearInterval(_), void 0)), (_ &&= (clearTimeout(_), void 0));
  let _ = 0;
  _(_),
    (_ = window.setTimeout(() => {
      _ = window.setInterval(() => {
        (_ += Math.random() * 0.01), _(_);
      }, 50);
    }, 200));
  let _ = [],
    _ = 0,
    _ = (history.state?._ ?? -1) + 1;
  try {
    for await (let _ of _(_, _))
      if (_)
        _ === void 0
          ? (_ = JSON.parse(_))
          : _ === void 0
            ? (_ = JSON.parse(_))
            : (_.push(_), (_ = _.length / (_ || 1)), _(_));
      else {
        _ = JSON.parse(_);
        let _ = await _(_);
        (_ = _.cssPromises), (_ = _.routeModules), (_ = _.routeCount);
      }
    await Promise.all(_);
  } catch (_) {
    if (_ instanceof DOMException && _.name === `AbortError`) _(1);
    else throw _;
  }
  if (
    ((_ &&= (clearInterval(_), void 0)),
    (_ &&= (clearTimeout(_), void 0)),
    _?.aborted)
  )
    return;
  let _ = await Promise.all(_.map(_)),
    _ = {
      _: 0,
      _: 0,
    },
    _ = {
      assetData: _,
      metadata: _,
      loaderData: _,
      renderContext: _,
      _: _,
      scrollPosition: _,
    };
  _ ? _(_) : _(_, _), await new Promise((_) => _(_, _, _, _, _, _, _));
}
async function _(_, _) {
  let { cssPromises: _, routeModules: _ } = await _(_.assetData);
  _.aborted ||
    (await Promise.all(_),
    !_.aborted &&
      (await new Promise((_) =>
        _(
          _,
          _.assetData,
          _.loaderData ?? [],
          _.metadata,
          _.renderContext,
          _.scrollPosition,
          _,
        ),
      )));
}
function _(_) {
  let _ = Math.min(_, 1).toString();
  document.body.style.setProperty(`--load-percentage`, _);
}
var _, _;
async function _(_) {
  let _ = 0,
    _ = _.css.map(
      (_) =>
        new Promise((_) => {
          let _ = _.href.replace(/\\/g, `/`);
          if (
            Array.from(document.head.querySelectorAll(`link[href]`)).some(
              (_) => _.href === _,
            )
          )
            return _();
          let _ = document.createElement(`link`);
          (_.rel = `preload`),
            (_._ = `style`),
            (_.href = _),
            (_.integrity = _.integrity),
            (_.crossOrigin = `anonymous`);
          function _() {
            document.head.removeChild(_), _();
          }
          _.addEventListener(`load`, _),
            _.addEventListener(`error`, _),
            document.head.appendChild(_);
        }),
    ),
    _ = await Promise.all(
      _._.map(async (_) => {
        let _ = await _(() => import(_.href), [], import.meta.url);
        return `route` in _ && _++, _;
      }),
    );
  return (
    await _(),
    {
      cssPromises: _,
      routeModules: _,
      routeCount: _,
    }
  );
}
var _ = !!(typeof window < `u` && window.navigation);
function _(_) {
  _ && window.navigation.addEventListener(`navigate`, (_) => _(_, _));
}
function _(_) {
  window.navigation.navigate(_, {
    info: {
      SSR: !0,
      targetRoute: _,
    },
  });
}
function _(_) {
  if (_) {
    let _ = _(window.navigation.currentEntry?.getState() ?? {});
    window.navigation.updateCurrentEntry({
      state: _,
    });
  } else history.replaceState(_(history.state ?? {}), ``);
}
function _(_) {
  let _ = typeof _ == `string` ? _ : _.toString();
  _
    ? window.navigation.currentEntry?.url != _ &&
      (console.assert(
        !window.navigation.transition,
        `ReplaceHistoryURL during transition`,
      ),
      window.navigation.navigate(_, {
        state: window.navigation.currentEntry?.getState(),
        info: {
          SSR: !0,
        },
        history: `replace`,
      }))
    : window.location.href != _ && history.replaceState(history.state, ``, _);
}
function _(_, _) {
  if (_) {
    console.assert(
      !window.navigation.transition,
      `ReplaceHistoryStateAndURL during transition`,
    );
    let _ = _(window.navigation.currentEntry?.getState());
    window.navigation.navigate(typeof _ == `string` ? _ : _.toString(), {
      state: _,
      info: {
        SSR: !0,
      },
      history: `replace`,
    });
  } else history.replaceState(_(history.state), ``, _);
}
function _(_, _, _) {
  if (_) {
    console.assert(
      !window.navigation.transition,
      `ReplaceHistoryStateAndURL during transition`,
    );
    let _ = _(_ ? window.navigation.currentEntry?.getState() : {});
    window.navigation.navigate(typeof _ == `string` ? _ : _.toString(), {
      state: _,
      info: {
        SSR: !0,
        bSkipFetch: _,
      },
      history: `push`,
    });
  } else history.pushState(_(history.state), ``, _);
}
function _() {
  return _
    ? window.navigation?.currentEntry?.getState()
    : window.history?.state;
}
function _(_) {
  if (_) {
    let _ = (_) => {
      _.navigationType == `traverse` &&
        _.canIntercept &&
        _.intercept({
          handler: async () => {
            window.navigation.transition.finished.then(_);
          },
        });
    };
    return (
      window.navigation.addEventListener(`navigate`, _),
      () => window.navigation.removeEventListener(`navigate`, _)
    );
  } else
    return (
      window.addEventListener(`popstate`, _),
      () => window.removeEventListener(`popstate`, _)
    );
}
var _ = new Set(),
  _;
function _() {
  location.href !== _ &&
    _.forEach((_) => {
      try {
        _();
      } catch {}
    }),
    (_ = location.href),
    _.size > 0 && requestAnimationFrame(_);
}
function _(_) {
  let _ = () => {
    _();
  };
  return _
    ? (window.navigation.addEventListener(`currententrychange`, _),
      () => window.navigation.removeEventListener(`currententrychange`, _))
    : ((_ = location.href),
      requestAnimationFrame(_),
      _.add(_),
      () => _.delete(_));
}
function _(_, _) {
  return _?.routes.some((_) => _.pathname.match(_.regex));
}
function _() {
  _({
    _: window.scrollX,
    _: window.scrollY,
  });
}
function _(_, _) {
  let _ =
    typeof _.info == `object` && _.info && `SSR` in _.info && _.info.SSR
      ? _.info
      : void 0;
  if (_.navigationType == `push`) {
    let _ = _?.targetRoute;
    if (!_) {
      let _ = new URL(_.destination.url);
      _(_, _) && (_ = `${_.pathname}${_.search}`);
    }
    if (_?.bSkipFetch) {
      _(),
        _.intercept({
          scroll: `manual`,
          focusReset: `manual`,
          async handler() {},
        });
      return;
    }
    _ &&
      _.canIntercept &&
      (console.assert(
        !!window.navigation.currentEntry?.getState(),
        `Beginning navigation but missing history state`,
      ),
      _(),
      _.intercept({
        scroll: `manual`,
        focusReset: `manual`,
        async handler() {
          await _(_, _.signal, !0);
        },
      }));
  } else if (_.navigationType == `traverse`) {
    let _ = _(_.destination.getState());
    _ && _.loaderData
      ? (_(),
        _.intercept({
          scroll: `manual`,
          async handler() {
            await _(_, _.signal);
          },
        }))
      : console.assert(!1, `Traversal with no state available`);
  } else if (_.navigationType == `replace`) {
    let _ = _();
    if (_ && !_)
      _.intercept({
        async handler() {
          _((_) => ({
            ..._,
            pageRoute: _,
          }));
        },
        focusReset: `manual`,
      });
    else if (_) {
      let _ = !!_?.targetRoute;
      _.intercept({
        async handler() {
          _ && (await _(_.targetRoute, _.signal, !0));
        },
        focusReset: `manual`,
        scroll: _ ? void 0 : `manual`,
      });
    }
  } else
    _.navigationType == `reload`
      ? _()
      : _(_.navigationType, `unhandled navigation type: ${_.navigationType}`);
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
