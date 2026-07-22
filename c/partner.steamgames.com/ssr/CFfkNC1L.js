function _(_, _, ..._) {
  console.assert
    ? _.length == 0
      ? console.assert(!!_, _)
      : console.assert(!!_, _, ..._)
    : _ || console.warn(_, ..._);
}
function _(_, _, ..._) {
  _(!1, _, ..._);
}
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
var _ = /^(steam|ftp|https?):\/\//;
function _(_) {
  return _.test(_) ? _ : `https://` + _;
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
var _ = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(_) {
      return (
        this.listeners.add(_),
        this.onSubscribe(),
        () => {
          this.listeners.delete(_), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  _ = typeof window > `u` || `Deno` in globalThis;
function _() {}
function _(_, _) {
  return typeof _ == `function` ? _(_) : _;
}
function _(_) {
  return typeof _ == `number` && _ >= 0 && _ !== 1 / 0;
}
function _(_, _) {
  return Math.max(_ + (_ || 0) - Date.now(), 0);
}
function _(_, _) {
  return typeof _ == `function` ? _(_) : _;
}
function _(_, _) {
  return typeof _ == `function` ? _(_) : _;
}
function _(_, _) {
  let {
    type: _ = `all`,
    exact: _,
    fetchStatus: _,
    predicate: _,
    queryKey: _,
    stale: _,
  } = _;
  if (_) {
    if (_) {
      if (_.queryHash !== _(_, _.options)) return !1;
    } else if (!_(_.queryKey, _)) return !1;
  }
  if (_ !== `all`) {
    let _ = _.isActive();
    if ((_ === `active` && !_) || (_ === `inactive` && _)) return !1;
  }
  return !(
    (typeof _ == `boolean` && _.isStale() !== _) ||
    (_ && _ !== _.state.fetchStatus) ||
    (_ && !_(_))
  );
}
function _(_, _) {
  let { exact: _, status: _, predicate: _, mutationKey: _ } = _;
  if (_) {
    if (!_.options.mutationKey) return !1;
    if (_) {
      if (_(_.options.mutationKey) !== _(_)) return !1;
    } else if (!_(_.options.mutationKey, _)) return !1;
  }
  return !((_ && _.state.status !== _) || (_ && !_(_)));
}
function _(_, _) {
  return (_?.queryKeyHashFn || _)(_);
}
function _(_) {
  return JSON.stringify(_, (_, _) =>
    _(_)
      ? Object.keys(_)
          .sort()
          .reduce((_, _) => ((_[_] = _[_]), _), {})
      : _,
  );
}
function _(_, _) {
  return _ === _
    ? !0
    : typeof _ == typeof _ &&
        _ &&
        _ &&
        typeof _ == `object` &&
        typeof _ == `object`
      ? !Object.keys(_).some((_) => !_(_[_], _[_]))
      : !1;
}
function _(_, _) {
  if (_ === _) return _;
  let _ = _(_) && _(_);
  if (_ || (_(_) && _(_))) {
    let _ = _ ? _ : Object.keys(_),
      _ = _.length,
      _ = _ ? _ : Object.keys(_),
      _ = _.length,
      _ = _ ? [] : {},
      _ = 0;
    for (let _ = 0; _ < _; _++) {
      let _ = _ ? _ : _[_];
      ((!_ && _.includes(_)) || _) && _[_] === void 0 && _[_] === void 0
        ? ((_[_] = void 0), _++)
        : ((_[_] = _(_[_], _[_])), _[_] === _[_] && _[_] !== void 0 && _++);
    }
    return _ === _ && _ === _ ? _ : _;
  }
  return _;
}
function _(_, _) {
  if (!_ || Object.keys(_).length !== Object.keys(_).length) return !1;
  for (let _ in _) if (_[_] !== _[_]) return !1;
  return !0;
}
function _(_) {
  return Array.isArray(_) && _.length === Object.keys(_).length;
}
function _(_) {
  if (!_(_)) return !1;
  let _ = _.constructor;
  if (_ === void 0) return !0;
  let _ = _.prototype;
  return !(
    !_(_) ||
    !_.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(_) !== Object.prototype
  );
}
function _(_) {
  return Object.prototype.toString.call(_) === `[object Object]`;
}
function _(_) {
  return new Promise((_) => {
    setTimeout(_, _);
  });
}
function _(_, _, _) {
  return typeof _.structuralSharing == `function`
    ? _.structuralSharing(_, _)
    : _.structuralSharing === !1
      ? _
      : _(_, _);
}
function _(_, _, _ = 0) {
  let _ = [..._, _];
  return _ && _.length > _ ? _.slice(1) : _;
}
function _(_, _, _ = 0) {
  let _ = [_, ..._];
  return _ && _.length > _ ? _.slice(0, -1) : _;
}
var _ = Symbol();
function _(_, _) {
  return !_.queryFn && _?.initialPromise
    ? () => _.initialPromise
    : !_.queryFn || _.queryFn === _
      ? () => Promise.reject(Error(`Missing queryFn: '${_.queryHash}'`))
      : _.queryFn;
}
var _ = new (class extends _ {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (_) => {
          if (!_ && window.addEventListener) {
            let _ = () => _();
            return (
              window.addEventListener(`visibilitychange`, _, !1),
              () => {
                window.removeEventListener(`visibilitychange`, _);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(_) {
      (this.#n = _),
        this.#t?.(),
        (this.#t = _((_) => {
          typeof _ == `boolean` ? this.setFocused(_) : this.onFocus();
        }));
    }
    setFocused(_) {
      this.#e !== _ && ((this.#e = _), this.onFocus());
    }
    onFocus() {
      let _ = this.isFocused();
      this.listeners.forEach((_) => {
        _(_);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  _ = new (class extends _ {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (_) => {
          if (!_ && window.addEventListener) {
            let _ = () => _(!0),
              _ = () => _(!1);
            return (
              window.addEventListener(`online`, _, !1),
              window.addEventListener(`offline`, _, !1),
              () => {
                window.removeEventListener(`online`, _),
                  window.removeEventListener(`offline`, _);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(_) {
      (this.#n = _), this.#t?.(), (this.#t = _(this.setOnline.bind(this)));
    }
    setOnline(_) {
      this.#e !== _ &&
        ((this.#e = _),
        this.listeners.forEach((_) => {
          _(_);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function _() {
  let _,
    _,
    _ = new Promise((_, _) => {
      (_ = _), (_ = _);
    });
  (_.status = `pending`), _.catch(() => {});
  function _(_) {
    Object.assign(_, _), delete _.resolve, delete _.reject;
  }
  return (
    (_.resolve = (_) => {
      _({
        status: `fulfilled`,
        value: _,
      }),
        _(_);
    }),
    (_.reject = (_) => {
      _({
        status: `rejected`,
        reason: _,
      }),
        _(_);
    }),
    _
  );
}
function _(_) {
  return Math.min(1e3 * 2 ** _, 3e4);
}
function _(_) {
  return (_ ?? `online`) !== `online` || _.isOnline();
}
var _ = class extends Error {
  constructor(_) {
    super(`CancelledError`),
      (this.revert = _?.revert),
      (this.silent = _?.silent);
  }
};
function _(_) {
  return _ instanceof _;
}
function _(_) {
  let _ = !1,
    _ = 0,
    _ = !1,
    _,
    _ = _(),
    _ = (_) => {
      _ || (_(new _(_)), _.abort?.());
    },
    _ = () => {
      _ = !0;
    },
    _ = () => {
      _ = !1;
    },
    _ = () =>
      _.isFocused() &&
      (_.networkMode === `always` || _.isOnline()) &&
      _.canRun(),
    _ = () => _(_.networkMode) && _.canRun(),
    _ = (_) => {
      _ || ((_ = !0), _.onSuccess?.(_), _?.(), _.resolve(_));
    },
    _ = (_) => {
      _ || ((_ = !0), _.onError?.(_), _?.(), _.reject(_));
    },
    _ = () =>
      new Promise((_) => {
        (_ = (_) => {
          (_ || _()) && _(_);
        }),
          _.onPause?.();
      }).then(() => {
        (_ = void 0), _ || _.onContinue?.();
      }),
    _ = () => {
      if (_) return;
      let _,
        _ = _ === 0 ? _.initialPromise : void 0;
      try {
        _ = _ ?? _._();
      } catch (_) {
        _ = Promise.reject(_);
      }
      Promise.resolve(_)
        .then(_)
        .catch((_) => {
          if (_) return;
          let _ = _.retry ?? (_ ? 0 : 3),
            _ = _.retryDelay ?? _,
            _ = typeof _ == `function` ? _(_, _) : _,
            _ =
              _ === !0 ||
              (typeof _ == `number` && _ < _) ||
              (typeof _ == `function` && _(_, _));
          if (_ || !_) {
            _(_);
            return;
          }
          _++,
            _.onFail?.(_, _),
            _(_)
              .then(() => (_() ? void 0 : _()))
              .then(() => {
                _ ? _(_) : _();
              });
        });
    };
  return {
    promise: _,
    cancel: _,
    continue: () => (_?.(), _),
    cancelRetry: _,
    continueRetry: _,
    canStart: _,
    start: () => (_() ? _() : _().then(_), _),
  };
}
function _() {
  let _ = [],
    _ = 0,
    _ = (_) => {
      _();
    },
    _ = (_) => {
      _();
    },
    _ = (_) => setTimeout(_, 0),
    _ = (_) => {
      _
        ? _.push(_)
        : _(() => {
            _(_);
          });
    },
    _ = () => {
      let _ = _;
      (_ = []),
        _.length &&
          _(() => {
            _(() => {
              _.forEach((_) => {
                _(_);
              });
            });
          });
    };
  return {
    batch: (_) => {
      let _;
      _++;
      try {
        _ = _();
      } finally {
        _--, _ || _();
      }
      return _;
    },
    batchCalls:
      (_) =>
      (..._) => {
        _(() => {
          _(..._);
        });
      },
    schedule: _,
    setNotifyFunction: (_) => {
      _ = _;
    },
    setBatchNotifyFunction: (_) => {
      _ = _;
    },
    setScheduler: (_) => {
      _ = _;
    },
  };
}
var _ = _(),
  _ = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        _(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(_) {
      this.gcTime = Math.max(this.gcTime || 0, _ ?? (_ ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e &&= (clearTimeout(this.#e), void 0);
    }
  },
  _ = class extends _ {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    constructor(_) {
      super(),
        (this.#a = !1),
        (this.#i = _.defaultOptions),
        this.setOptions(_.options),
        (this.observers = []),
        (this.#n = _.cache),
        (this.queryKey = _.queryKey),
        (this.queryHash = _.queryHash),
        (this.#e = _(this.options)),
        (this.state = _.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(_) {
      (this.options = {
        ...this.#i,
        ..._,
      }),
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === `idle` &&
        this.#n.remove(this);
    }
    setData(_, _) {
      let _ = _(this.state.data, _, this.options);
      return (
        this.#o({
          data: _,
          type: `success`,
          dataUpdatedAt: _?.updatedAt,
          manual: _?.manual,
        }),
        _
      );
    }
    setState(_, _) {
      this.#o({
        type: `setState`,
        state: _,
        setStateOptions: _,
      });
    }
    cancel(_) {
      let _ = this.#r?.promise;
      return this.#r?.cancel(_), _ ? _.then(_).catch(_) : Promise.resolve();
    }
    destroy() {
      super.destroy(),
        this.cancel({
          silent: !0,
        });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((_) => _(_.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === _ ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
      return this.state.isInvalidated
        ? !0
        : this.getObserversCount() > 0
          ? this.observers.some((_) => _.getCurrentResult().isStale)
          : this.state.data === void 0;
    }
    isStaleByTime(_ = 0) {
      return (
        this.state.isInvalidated ||
        this.state.data === void 0 ||
        !_(this.state.dataUpdatedAt, _)
      );
    }
    onFocus() {
      this.observers
        .find((_) => _.shouldFetchOnWindowFocus())
        ?.refetch({
          cancelRefetch: !1,
        }),
        this.#r?.continue();
    }
    onOnline() {
      this.observers
        .find((_) => _.shouldFetchOnReconnect())
        ?.refetch({
          cancelRefetch: !1,
        }),
        this.#r?.continue();
    }
    addObserver(_) {
      this.observers.includes(_) ||
        (this.observers.push(_),
        this.clearGcTimeout(),
        this.#n.notify({
          type: `observerAdded`,
          query: this,
          observer: _,
        }));
    }
    removeObserver(_) {
      this.observers.includes(_) &&
        ((this.observers = this.observers.filter((_) => _ !== _)),
        this.observers.length ||
          (this.#r &&
            (this.#a
              ? this.#r.cancel({
                  revert: !0,
                })
              : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({
          type: `observerRemoved`,
          query: this,
          observer: _,
        }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated ||
        this.#o({
          type: `invalidate`,
        });
    }
    fetch(_, _) {
      if (this.state.fetchStatus !== `idle`) {
        if (this.state.data !== void 0 && _?.cancelRefetch)
          this.cancel({
            silent: !0,
          });
        else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
      }
      if ((_ && this.setOptions(_), !this.options.queryFn)) {
        let _ = this.observers.find((_) => _.options.queryFn);
        _ && this.setOptions(_.options);
      }
      let _ = new AbortController(),
        _ = (_) => {
          Object.defineProperty(_, "signal", {
            enumerable: !0,
            get: () => ((this.#a = !0), _.signal),
          });
        },
        _ = {
          fetchOptions: _,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: () => {
            let _ = _(this.options, _),
              _ = {
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              _(_),
              (this.#a = !1),
              this.options.persister ? this.options.persister(_, _, this) : _(_)
            );
          },
        };
      _(_),
        this.options.behavior?.onFetch(_, this),
        (this.#t = this.state),
        (this.state.fetchStatus === `idle` ||
          this.state.fetchMeta !== _.fetchOptions?.meta) &&
          this.#o({
            type: `fetch`,
            meta: _.fetchOptions?.meta,
          });
      let _ = (_) => {
        (_(_) && _.silent) ||
          this.#o({
            type: `error`,
            error: _,
          }),
          _(_) ||
            (this.#n.config.onError?.(_, this),
            this.#n.config.onSettled?.(this.state.data, _, this)),
          this.scheduleGc();
      };
      return (
        (this.#r = _({
          initialPromise: _?.initialPromise,
          _: _.fetchFn,
          abort: _.abort.bind(_),
          onSuccess: (_) => {
            if (_ === void 0) {
              _(Error(`${this.queryHash} data is undefined`));
              return;
            }
            try {
              this.setData(_);
            } catch (_) {
              _(_);
              return;
            }
            this.#n.config.onSuccess?.(_, this),
              this.#n.config.onSettled?.(_, this.state.error, this),
              this.scheduleGc();
          },
          onError: _,
          onFail: (_, _) => {
            this.#o({
              type: `failed`,
              failureCount: _,
              error: _,
            });
          },
          onPause: () => {
            this.#o({
              type: `pause`,
            });
          },
          onContinue: () => {
            this.#o({
              type: `continue`,
            });
          },
          retry: _.options.retry,
          retryDelay: _.options.retryDelay,
          networkMode: _.options.networkMode,
          canRun: () => !0,
        })),
        this.#r.start()
      );
    }
    #o(_) {
      let _ = (_) => {
        switch (_.type) {
          case `failed`:
            return {
              ..._,
              fetchFailureCount: _.failureCount,
              fetchFailureReason: _.error,
            };
          case `pause`:
            return {
              ..._,
              fetchStatus: `paused`,
            };
          case `continue`:
            return {
              ..._,
              fetchStatus: `fetching`,
            };
          case `fetch`:
            return {
              ..._,
              ..._(_.data, this.options),
              fetchMeta: _.meta ?? null,
            };
          case `success`:
            return {
              ..._,
              data: _.data,
              dataUpdateCount: _.dataUpdateCount + 1,
              dataUpdatedAt: _.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: `success`,
              ...(!_.manual && {
                fetchStatus: `idle`,
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case `error`:
            let _ = _.error;
            return _(_) && _.revert && this.#t
              ? {
                  ...this.#t,
                  fetchStatus: `idle`,
                }
              : {
                  ..._,
                  error: _,
                  errorUpdateCount: _.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: _.fetchFailureCount + 1,
                  fetchFailureReason: _,
                  fetchStatus: `idle`,
                  status: `error`,
                };
          case `invalidate`:
            return {
              ..._,
              isInvalidated: !0,
            };
          case `setState`:
            return {
              ..._,
              ..._.state,
            };
        }
      };
      (this.state = _(this.state)),
        _.batch(() => {
          this.observers.forEach((_) => {
            _.onQueryUpdate();
          }),
            this.#n.notify({
              query: this,
              type: `updated`,
              action: _,
            });
        });
    }
  };
function _(_, _) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: _(_.networkMode) ? `fetching` : `paused`,
    ...(_ === void 0 && {
      error: null,
      status: `pending`,
    }),
  };
}
function _(_) {
  let _ = typeof _.initialData == `function` ? _.initialData() : _.initialData,
    _ = _ !== void 0,
    _ = _
      ? typeof _.initialDataUpdatedAt == `function`
        ? _.initialDataUpdatedAt()
        : _.initialDataUpdatedAt
      : 0;
  return {
    data: _,
    dataUpdateCount: 0,
    dataUpdatedAt: _ ? (_ ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: _ ? `success` : `pending`,
    fetchStatus: `idle`,
  };
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
    #e;
    #t;
    #n;
    constructor(_) {
      super(),
        (this.mutationId = _.mutationId),
        (this.#t = _.mutationCache),
        (this.#e = []),
        (this.state = _.state || _()),
        this.setOptions(_.options),
        this.scheduleGc();
    }
    setOptions(_) {
      (this.options = _), this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(_) {
      this.#e.includes(_) ||
        (this.#e.push(_),
        this.clearGcTimeout(),
        this.#t.notify({
          type: `observerAdded`,
          mutation: this,
          observer: _,
        }));
    }
    removeObserver(_) {
      (this.#e = this.#e.filter((_) => _ !== _)),
        this.scheduleGc(),
        this.#t.notify({
          type: `observerRemoved`,
          mutation: this,
          observer: _,
        });
    }
    optionalRemove() {
      this.#e.length ||
        (this.state.status === `pending`
          ? this.scheduleGc()
          : this.#t.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(_) {
      this.#n = _({
        _: () =>
          this.options.mutationFn
            ? this.options.mutationFn(_)
            : Promise.reject(Error(`No mutationFn found`)),
        onFail: (_, _) => {
          this.#r({
            type: `failed`,
            failureCount: _,
            error: _,
          });
        },
        onPause: () => {
          this.#r({
            type: `pause`,
          });
        },
        onContinue: () => {
          this.#r({
            type: `continue`,
          });
        },
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#t.canRun(this),
      });
      let _ = this.state.status === `pending`,
        _ = !this.#n.canStart();
      try {
        if (!_) {
          this.#r({
            type: `pending`,
            variables: _,
            isPaused: _,
          }),
            await this.#t.config.onMutate?.(_, this);
          let _ = await this.options.onMutate?.(_);
          _ !== this.state.context &&
            this.#r({
              type: `pending`,
              context: _,
              variables: _,
              isPaused: _,
            });
        }
        let _ = await this.#n.start();
        return (
          await this.#t.config.onSuccess?.(_, _, this.state.context, this),
          await this.options.onSuccess?.(_, _, this.state.context),
          await this.#t.config.onSettled?.(
            _,
            null,
            this.state.variables,
            this.state.context,
            this,
          ),
          await this.options.onSettled?.(_, null, _, this.state.context),
          this.#r({
            type: `success`,
            data: _,
          }),
          _
        );
      } catch (_) {
        try {
          throw (
            (await this.#t.config.onError?.(_, _, this.state.context, this),
            await this.options.onError?.(_, _, this.state.context),
            await this.#t.config.onSettled?.(
              void 0,
              _,
              this.state.variables,
              this.state.context,
              this,
            ),
            await this.options.onSettled?.(void 0, _, _, this.state.context),
            _)
          );
        } finally {
          this.#r({
            type: `error`,
            error: _,
          });
        }
      } finally {
        this.#t.runNext(this);
      }
    }
    #r(_) {
      let _ = (_) => {
        switch (_.type) {
          case `failed`:
            return {
              ..._,
              failureCount: _.failureCount,
              failureReason: _.error,
            };
          case `pause`:
            return {
              ..._,
              isPaused: !0,
            };
          case `continue`:
            return {
              ..._,
              isPaused: !1,
            };
          case `pending`:
            return {
              ..._,
              context: _.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: _.isPaused,
              status: `pending`,
              variables: _.variables,
              submittedAt: Date.now(),
            };
          case `success`:
            return {
              ..._,
              data: _.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: `success`,
              isPaused: !1,
            };
          case `error`:
            return {
              ..._,
              data: void 0,
              error: _.error,
              failureCount: _.failureCount + 1,
              failureReason: _.error,
              isPaused: !1,
              status: `error`,
            };
        }
      };
      (this.state = _(this.state)),
        _.batch(() => {
          this.#e.forEach((_) => {
            _.onMutationUpdate(_);
          }),
            this.#t.notify({
              mutation: this,
              type: `updated`,
              action: _,
            });
        });
    }
  };
function _() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var _ = class extends _ {
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
var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext(void 0),
  _ = (_) => {
    let _ = _.useContext(_);
    if (_) return _;
    if (!_)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return _;
  },
  _ = ({ client: _, children: _ }) => (
    _.useEffect(
      () => (
        _.mount(),
        () => {
          _.unmount();
        }
      ),
      [_],
    ),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _,
    })
  ),
  _ = ({ children: _, options: _ = {}, state: _, queryClient: _ }) => {
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
  _ = (function () {
    let _ = typeof document < `u` && document.createElement(`link`).relList;
    return _ && _.supports && _.supports(`modulepreload`)
      ? `modulepreload`
      : `preload`;
  })(),
  _ = function (_, _) {
    return new URL(_, _).href;
  },
  _ = {},
  _ = function (_, _, _) {
    let _ = Promise.resolve();
    if (_ && _.length > 0) {
      let _ = document.getElementsByTagName(`link`),
        _ = document.querySelector(`meta[property=csp-nonce]`),
        _ = _?.nonce || _?.getAttribute(`nonce`);
      function _(_) {
        return Promise.all(
          _.map((_) =>
            Promise.resolve(_).then(
              (_) => ({
                status: `fulfilled`,
                value: _,
              }),
              (_) => ({
                status: `rejected`,
                reason: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        return import.meta.resolve
          ? import.meta.resolve(_)
          : new URL(_, import.meta.url).href;
      }
      _ = _(
        _.map((_) => {
          if (((_ = _(_, _)), (_ = _(_)), _ in _)) return;
          _[_] = !0;
          let _ = _.endsWith(`.css`);
          for (let _ = _.length - 1; _ >= 0; _--) {
            let _ = _[_];
            if (_.href === _ && (!_ || _.rel === `stylesheet`)) return;
          }
          let _ = document.createElement(`link`);
          if (
            ((_.rel = _ ? `stylesheet` : _),
            _ || (_._ = `script`),
            (_.crossOrigin = ``),
            (_.href = _),
            _ && _.setAttribute(`nonce`, _),
            document.head.appendChild(_),
            _)
          )
            return new Promise((_, _) => {
              _.addEventListener(`load`, _),
                _.addEventListener(`error`, () =>
                  _(Error(`Unable to preload CSS for ${_}`)),
                );
            });
        }),
      );
    }
    function _(_) {
      let _ = new Event(`vite:preloadError`, {
        cancelable: !0,
      });
      if (((_.payload = _), window.dispatchEvent(_), !_.defaultPrevented))
        throw _;
    }
    return _.then((_) => {
      for (let _ of _ || []) _.status === `rejected` && _(_.reason);
      return _().catch(_);
    });
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
  _ = {
    unknown: 0,
    "store.steampowered.com": 1,
    "steamcommunity.com": 2,
    global: 3,
    default: 4,
    application: 5,
    subscription: 6,
    search: 7,
    cart: 8,
    app: 9,
    "global-nav": 10,
    "global-account": 11,
    storemenu: 12,
    "search-suggestion": 13,
    about: 14,
    suggest: 15,
    dlc: 16,
    "storemenu-recommendedtags": 17,
    creator: 18,
    "footer-genre-dropdown": 20,
    "footer-category-dropdown": 21,
    "footer-about-dropdown": 22,
    "footer-help-dropdown": 23,
    "footer-publisher-catalogs": 24,
    wishlist: 25,
    stats: 26,
    spotlight: 40,
    message: 41,
    "marketing-message": 42,
    "daily-deal": 43,
    footer: 44,
    header: 45,
    name: 46,
    "more-details": 47,
    notification: 48,
    category: 49,
    steamdeck: 50,
    login: 60,
    prompt: 61,
    "join-steam": 62,
    "successful-login": 63,
    "successful-joinsteam": 64,
    recommendations: 70,
    categories: 71,
    hardware: 72,
    waystoplay: 73,
    specialsections: 74,
    more: 75,
    "big-category-link": 76,
    "small-category-link": 77,
    "package-purchase-recommendations": 78,
    popular: 79,
    recent: 80,
    "main-cluster": 100,
    "featured-win-games": 101,
    "featured-mac-games": 102,
    "tab-NewReleases": 103,
    "tab-TopSellers": 104,
    "tab-ComingSoon": 105,
    "tab-Discounts": 106,
    "smallcap-videos": 107,
    "smallcap-demos": 108,
    "home-headlines": 109,
    "community-activity": 110,
    "home-underten": 111,
    "home-specials": 112,
    "home-partners": 113,
    "home-steam-install": 114,
    "community-activity-recentlyplayed": 115,
    "community-activity-recentlybought": 116,
    "promo-banner": 117,
    "promo-takeover": 118,
    "featured-linux-games": 119,
    "updated-games": 120,
    "featured-updated-games": 121,
    "discovery-queue": 122,
    "new-on-steam": 123,
    "curated-app": 124,
    "home-gutter": 125,
    "upcoming-queue": 126,
    "home-specials-under10": 127,
    "main-cluster-recommended": 128,
    "main-cluster-topseller": 129,
    "main-cluster-newonsteam": 130,
    "recommended-spotlight": 131,
    "hardware-promo": 132,
    "popular-new-on-steam": 133,
    "main-cluster-recommended-byfriends": 134,
    "main-cluster-recommended-bycurators": 135,
    "main-cluster-recenttopseller": 136,
    "home-under10": 137,
    "friends-trending": 138,
    "spotlight-specials": 139,
    "curator-recommended": 140,
    "best-selling-vr": 141,
    "creator-recommendations": 142,
    "live-broadcast": 143,
    "main-cluster-followed-creator": 144,
    "tab-PopularNewReleases": 145,
    "home-big-blue-buttons": 146,
    "home-banner": 147,
    "top-new-releases": 148,
    "curated-main-app": 149,
    "search-results": 150,
    query: 151,
    "search-share": 152,
    genre: 200,
    "large-cluster": 201,
    "find-more": 202,
    "friend-activity": 203,
    specials: 2300,
    breadcrumbs: 205,
    freestuff: 220,
    demos: 1900,
    "tab-NewDemos": 222,
    "tab-TopDemos": 223,
    "browse-demos": 224,
    videos: 100002,
    "popular-videos": 226,
    "tab-NewVideos": 227,
    browse: 230,
    mac: 231,
    under10: 232,
    under5: 233,
    publisher: 234,
    publishers: 235,
    "publisher-listing": 236,
    tag: 237,
    gettaggames: 238,
    explore: 239,
    "browse-tags": 240,
    tags: 241,
    "content-hub-carousel": 242,
    Action: 250,
    Adventure: 251,
    Strategy: 252,
    RPG: 253,
    Indie: 254,
    "Massively Multiplayer": 255,
    Casual: 256,
    Family: 257,
    Simulation: 258,
    Racing: 259,
    Sports: 260,
    recommended: 300,
    "recommendation-main": 301,
    "friend-recommendations": 302,
    "recommended-friendplaytime": 303,
    "recommended-recentlyviewed": 304,
    "recommended-morerecentlyviewed": 305,
    "recommended-genrehighlights": 306,
    morelike: 307,
    "morelike-mainitem": 308,
    "friendactivity.js": 309,
    "friendactivity-wishlist-spotlight": 310,
    "friendactivity-purchases": 311,
    "friendactivity-playedandwanted": 312,
    byafriend: 313,
    "friend-recommendation": 314,
    ajaxgetfriendactivity: 315,
    "recommend-franchise": 316,
    "more-from-franchise": 317,
    "wishlist-capsule": 318,
    "game-highlights": 400,
    "recommend-game": 401,
    "view-own-recommendation": 402,
    "game-purchase": 403,
    "game-purchase-guide": 404,
    "game-purchase-dlc": 405,
    "game-friend-recommendations": 406,
    "game-add-to-wishlist": 407,
    "game-details": 408,
    "game-highlight-tags": 409,
    "game-tags-dialog": 410,
    "game-tags-yours": 411,
    "bundle-component-preview": 412,
    "dlc-parent-app-link": 413,
    "similar-recent-apps": 414,
    "demo-parent-app-link": 415,
    "package-purchase": 420,
    "package-contents": 421,
    "package-details": 422,
    "category-list": 423,
    bundle: 430,
    "bundle-contents": 431,
    "cart-remove-item": 500,
    "cart-items": 501,
    "cart-continue-shopping": 502,
    "cart-purchase": 503,
    "checkout-logo-abandon": 504,
    "checkout-success": 505,
    checkout: 506,
    gift: 507,
    self: 508,
    "checkout-complete-return": 509,
    "checkout-complete-logo": 510,
    purchaserequest: 511,
    display: 512,
    initial: 513,
    gifts: 514,
    "upsell-recommended": 520,
    "upsell-specials": 521,
    "external-site": 550,
    facebook: 551,
    twitter: 552,
    referral: 553,
    summersale: 600,
    prizebooth: 610,
    "activity-game-link": 611,
    "activity-game-discount": 612,
    "prize-info": 613,
    promotion: 614,
    sale: 615,
    "sale-item": 616,
    "sale-dailydeals": 617,
    "sale-publishers": 618,
    "sale-genres": 619,
    email: 620,
    "cart-icon": 621,
    "sale-category-links": 622,
    "sale-notification-callout": 623,
    "sale-yesterdaydeals": 624,
    "sale-flashsales": 625,
    "sale-fromyourwishlist": 626,
    "closed-beta-access": 627,
    "sale-tag-bucket": 628,
    "sale-hero": 629,
    "sale-franchises": 630,
    "sale-dlcforyou": 631,
    "sale-recommended-by-steam-labs": 632,
    "sale-recommended-by-deep-dive": 633,
    "sale-dailydeals-tier2": 634,
    "sale-deep-discounts": 635,
    "sale-deck-mostplayed": 636,
    "home-chart-deckmostplayed": 637,
    "home-deck-banner": 638,
    "sale-tag-bucket-top": 639,
    "sale-dailydeals-none": 640,
    "sale-dailydeals-tags": 641,
    "sale-dailydeals-ir": 642,
    "sale-dailydeals-tier2-none": 645,
    "sale-dailydeals-tier2-tags": 646,
    "sale-dailydeals-tier2-ir": 647,
    "sale-hero-none": 650,
    "sale-hero-tags": 651,
    "sale-hero-ir": 652,
    autumnsale: 660,
    wintersale: 661,
    yearinreview: 662,
    springsale: 663,
    mobileapp: 700,
    summary: 701,
    mobilestorefront: 702,
    home: 703,
    "winter2012-today-square": 800,
    "winter2012-today-square-button": 801,
    "winter2012-hires": 802,
    "winter2012-hires-button": 803,
    "winter2012-yesterday-square": 804,
    "winter2012-yesterday-square-button": 805,
    "winter2012-flash": 806,
    "winter2012-flash-button": 807,
    "winter2012-pack": 808,
    "winter2012-pack-button": 809,
    "winter2012-topsellers": 810,
    "winter2012-topsellers-button": 811,
    "winter2012-vote-winner": 812,
    "winter2012-vote-winner-button": 821,
    "winter2012-vote-option-voting": 813,
    "winter2012-vote-option-voted": 814,
    "winter2012-nav": 815,
    "winter2012-500-callout": 816,
    "winter2012-500-callout-button": 820,
    "winter2012-featured": 817,
    "winter2012-lower-nav": 822,
    "winter2012-vote-option-vote-results": 823,
    "fall2014-48": 850,
    "fall2014-24": 851,
    "fall2014-TopSellers": 852,
    "fall2014-Upcoming": 853,
    "fall2014-Under10": 854,
    "fall2014-Under5": 855,
    "fall2014-PopularNewReleases": 856,
    "fall2014-specials-more": 857,
    "fall2014-recommend-wishlist": 858,
    "fall2014-recommend-contentforyourgames": 859,
    renderspecials: 860,
    recommend: 861,
    "recommended-ranked-played": 862,
    "redeem-wallet-complete-return": 900,
    "redeem-wallet-complete-return-app": 901,
    updated: 1e3,
    curators: 1050,
    curatorrecommendations: 1051,
    ajaxgetcuratorrecommendations: 1052,
    curatorscombinedrecommendations: 1053,
    ajaxgetcombinedrecommendations: 1054,
    curatorlist: 1055,
    curator: 1056,
    curatorfeaturedlist: 1057,
    curator_featured_list: 1057,
    mycuratorsreviewing: 1058,
    creatorfeaturedrecs: 1059,
    new_dlc: 1060,
    "browse-dlc": 1061,
    curatorlistcapsule: 1062,
    widget: 1100,
    appvisibilitystats: 1101,
    render: 1200,
    "recommendationfeed-single-friends": 1210,
    "recommendationfeed-single-curators": 1211,
    "recommendationfeed-single-recent": 1212,
    "recommendationfeed-single-wishlist": 1213,
    "recommendationfeed-single-played": 1214,
    "recommendationfeed-two": 1250,
    "recommendationfeed-four": 1251,
    "winter2014-featured": 1300,
    "winter2014-yesterday": 1301,
    "winter2014-flash": 1302,
    "winter2014-flash2": 1303,
    "winter2014-vote": 1304,
    "winter2014-specials-more": 1305,
    "winter2014-recommend-wishlist": 1306,
    "winter2014-frontpage-wishlist": 1307,
    "winter2014-TopSellers": 1308,
    "winter2014-Upcoming": 1309,
    "winter2014-Under10": 1310,
    "winter2014-Under5": 1311,
    "winter2014-PopularNewReleases": 1312,
    "winter2017-FeaturedBanner": 1313,
    "summer2018-standardview-curated": 1314,
    "summer2018-standardview-recommend-basic": 1315,
    "summer2018-standardview-recommend-neural": 1316,
    "summer2018-mergedview-curated": 1317,
    "summer2018-mergedview-recommend-neural": 1318,
    "summer2018-salien-giveaway": 1319,
    "summer2018-creator-recommend": 1320,
    "summer2018-live-stream": 1321,
    "sale-vr": 1322,
    "sale-moddable": 1323,
    "discovery-queue-0": 1324,
    "wishlist-onsale": 1400,
    "wishlist-newrelease": 1401,
    "greenlight-newrelease": 1402,
    "sales-event-enhanced": 1403,
    "creator-newrelease": 1404,
    "generic-onsale": 1405,
    "topsellers-onsale": 1406,
    "recommended-onsale": 1407,
    "demo-newrelease": 1408,
    "Free to Play": 1420,
    "tab-mostplayednewreleases": 1421,
    "tab-mostplayed": 1422,
    "tab-comingsoon": 1423,
    "tab-discounts": 1424,
    "tab-ConcurrentUsers": 1454,
    _: 1453,
    "hub-vr-recommended": 1455,
    "hub-vr-specials": 1459,
    "hub-vr-featured": 1463,
    "hub-vr-takeover": 1467,
    games: 1452,
    "hub-games-recommended": 1456,
    "hub-games-specials": 1460,
    "hub-games-featured": 1464,
    "hub-games-takeover": 1468,
    software: 1451,
    "hub-software-recommended": 1457,
    "hub-software-specials": 1461,
    "hub-software-featured": 1465,
    "hub-software-takeover": 1469,
    "hub-videos-recommended": 1458,
    "hub-videos-specials": 1462,
    "hub-videos-featured": 1466,
    "hub-videos-takeover": 1470,
    macos: 1480,
    "hub-macos-recommended": 1481,
    "hub-macos-specials": 1482,
    "hub-macos-featured": 1483,
    "hub-macos-takeover": 1484,
    linux: 1490,
    "hub-linux-recommended": 1491,
    "hub-linux-specials": 1492,
    "hub-linux-featured": 1493,
    "hub-linux-takeover": 1494,
    controller: 1500,
    "hub-controller-recommended": 1501,
    "hub-controller-specials": 1502,
    "hub-controller-featured": 1503,
    "hub-controller-takeover": 1504,
    freetoplay: 1510,
    "hub-freetoplay-recommended": 1511,
    "hub-freetoplay-specials": 1512,
    "hub-freetoplay-featured": 1513,
    "hub-freetoplay-takeover": 1514,
    earlyaccess: 1520,
    "hub-earlyaccess-recommended": 1521,
    "hub-earlyaccess-specials": 1522,
    "hub-earlyaccess-featured": 1523,
    "hub-earlyaccess-takeover": 1524,
    pccafe: 1530,
    "hub-pccafe-recommended": 1531,
    "hub-pccafe-specials": 1532,
    "hub-pccafe-featured": 1533,
    "hub-pccafe-takeover": 1534,
    remoteplayphone: 1540,
    "hub-remoteplayphone-recommended": 1541,
    "hub-remoteplayphone-specials": 1542,
    "hub-remoteplayphone-featured": 1543,
    "hub-remoteplayphone-takeover": 1544,
    remoteplaytablet: 1550,
    "hub-remoteplaytablet-recommended": 1551,
    "hub-remoteplaytablet-specials": 1552,
    "hub-remoteplaytablet-featured": 1553,
    "hub-remoteplaytablet-takeover": 1554,
    remoteplaytv: 1560,
    "hub-remoteplaytv-recommended": 1561,
    "hub-remoteplaytv-specials": 1562,
    "hub-remoteplaytv-featured": 1563,
    "hub-remoteplaytv-takeover": 1564,
    remoteplaytogether: 1570,
    "hub-remoteplaytogether-recommended": 1571,
    "hub-remoteplaytogether-specials": 1572,
    "hub-remoteplaytogether-featured": 1573,
    "hub-remoteplaytogether-takeover": 1574,
    "remote-play-about": 1580,
    remoteplay: 1581,
    turnbasedrpg: 1582,
    arcaderhythm: 1583,
    greatondeck: 1584,
    remoteplaylanding: 1585,
    fightingmartialarts: 1586,
    actionfps: 1587,
    hackandslash: 1588,
    actionrunjump: 1589,
    shmup: 1590,
    adventure: 1591,
    action: 1592,
    adventurerpg: 1593,
    hiddenobject: 1594,
    metroidvania: 1595,
    puzzlematching: 1596,
    storyrich: 1597,
    visualnovel: 1598,
    casual: 1559,
    querypaginated: 1600,
    n_section: 1601,
    rpgjrpg: 1602,
    rpgpartybased: 1603,
    roguelikeroguelite: 1604,
    rpgaction: 1605,
    rpg: 1606,
    rpgstrategytactics: 1607,
    rpgturnbased: 1608,
    simulation: 1609,
    simbuildingautomation: 1610,
    simdating: 1611,
    simfarmingcrafting: 1612,
    simhobbysim: 1613,
    simlife: 1614,
    simphysicssandbox: 1615,
    simspaceflight: 1616,
    strategy: 1617,
    strategycardboard: 1618,
    strategycitiessettlements: 1619,
    soundtracks: 1620,
    "hub-soundtracks-recommended": 1621,
    "hub-soundtracks-specials": 1622,
    "hub-soundtracks-featured": 1623,
    "hub-soundtracks-takeover": 1624,
    strategygrand4x: 1625,
    strategymilitary: 1626,
    strategyrealtime: 1627,
    towerdefense: 1628,
    strategyturnbased: 1629,
    sportsandracing: 1630,
    sports: 1631,
    sportsfishinghunting: 1632,
    sportsindividual: 1633,
    racing: 1634,
    racingsim: 1635,
    sportssim: 1636,
    sportsteam: 1637,
    anime: 1638,
    horror: 1639,
    mysterydetective: 1640,
    explorationopenworld: 1641,
    sciencefiction: 1642,
    space: 1643,
    survival: 1644,
    multiplayercoop: 1645,
    multiplayerlan: 1646,
    multiplayerlocalparty: 1647,
    multiplayermmo: 1648,
    multiplayer: 1649,
    multiplayeronlinecompetitive: 1650,
    singleplayer: 1651,
    upcoming: 1700,
    "comingsoon-recommendedcomingsoon": 1701,
    "comingsoon-popularwishlist": 1702,
    "comingsoon-newdlc": 1703,
    "comingsoon-followedcreator": 1704,
    "comingsoon-mywishlist": 1705,
    "comingsoon-largecap": 1706,
    "tab-PopularUpcoming": 1707,
    "tab-AllUpcoming": 1708,
    "in-library-game-event-update": 1800,
    "on-wishlist-game-event-update": 1801,
    "in-library-game-remind-me": 1802,
    "hub-demos-recommended": 1901,
    "hub-demos-specials": 1902,
    "hub-demos-featured": 1903,
    "hub-demos-takeover": 1904,
    "creator-home-product-page": 2e3,
    "franchise-home-link": 2001,
    ajaxgetappinfoforcap: 2100,
    "partner-events": 2101,
    "library-partner-events": 2102,
    "store-partner-events": 2103,
    "steamtv-partner-events": 2104,
    "community-partner-events": 2105,
    "partnerweb-partner-events": 2106,
    "store-calendar-partner-events": 2107,
    events: 2108,
    subscriptions: 2109,
    _: 2110,
    subscriptionplansea: 2111,
    download_event: 2112,
    reminder: 2113,
    steamtv: 2200,
    "hub-specials-recommended": 2301,
    "hub-specials-specials": 2302,
    "hub-specials-featured": 2303,
    "hub-specials-takeover": 2304,
    recommender: 2400,
    "recommended-by-steam-labs": 2401,
    labs: 2500,
    automaticshow: 2501,
    microtrailers: 2502,
    "now-playing": 2503,
    deepdive: 2504,
    "game-add-to-wishlist-deepdive": 2505,
    dbdetailsmulti: 2506,
    dbgetlinkparam: 2507,
    "recommended-by-deep-dive": 2508,
    "recommended-by-deep-dive-carousel": 2509,
    "recommended-by-deep-dive-carousel_default": 2510,
    "recommended-by-deep-dive-carousel_cluster_recent": 2511,
    "recommended-by-deep-dive-carousel_cluster_games": 2512,
    "recommended-by-deep-dive-carousel_cluster_playtime": 2513,
    "recommended-by-deep-dive-carousel-default": 2514,
    "recommended-by-deep-dive-carousel-cluster-recent": 2515,
    "recommended-by-deep-dive-carousel-cluster-games": 2516,
    "recommended-by-deep-dive-carousel-cluster-playtime": 2517,
    trendingreviews: 2600,
    ajaxgetrecentreviews: 2601,
    "community-recommendations": 2602,
    lunarnewyear2020: 2700,
    lunarnewyear: 2701,
    lunarnewyearmarket: 2702,
    "steam-logo": 2750,
    "sale-banner": 2751,
    "sale-button-top": 2752,
    "sale-button-bottom": 2753,
    "wishlist-button-bottom": 2754,
    "footer-steam-logo": 2755,
    steamclient: 5e3,
    library: 5100,
    friendsui: 5200,
    friendcontextmenu: 5201,
    nextfest: 6e3,
    topsellers: 7e3,
    steamcharts: 7001,
    weeklytopsellers: 7002,
    topchartlist: 7003,
    overview: 7004,
    mostplayed: 7005,
    salesmartdailyactiveuserdemo: 7006,
    salesmartmostplayeddemo: 7007,
    salesmartdecktopplayed: 7008,
    salesmartcategory: 7009,
    vrhardwarelanding: 7010,
    monthlytopreleases: 7011,
    bestofyear: 7012,
    apphome: 1e5,
    images: 100001,
    allnews: 100003,
    news: 100004,
    announcements: 100005,
    discussions: 100006,
    reporteddiscussions: 100007,
    tradingforum: 100008,
    guides: 100009,
    reviews: 100010,
    positivereviews: 100011,
    negativereviews: 100012,
    workshop: 100013,
    broadcasts: 100014,
    eventcomments: 100015,
    sharedfiles: 100100,
    filedetails: 100101,
    screenshot: 100102,
    workshopitem: 100103,
    mtxitem: 100104,
    collection: 100105,
    guide: 100106,
    integratedguide: 100107,
    merch: 100108,
    artwork: 100109,
    video: 100110,
    topicsearch: 100201,
    singletopic: 100202,
    profiles: 100300,
    review: 100301,
    profileshowcase: 100302,
    broadcast: 100400,
    watch: 100401,
    friendactivityfeed: 100500,
    announcement: 100501,
    curatorreview: 100502,
    friendpurchase: 100503,
    workshopitempublished: 100504,
    artworkpublished: 100505,
    screenshotpublished: 100506,
    guidepublished: 100507,
    collectionpublished: 100508,
    itemfavorited: 100509,
    userreviewpublished: 100510,
    "partner.steamgames.com": 100600,
    "help.steampowered.com": 100601,
    salecreatorhome: 100700,
    saleitembrowse: 100701,
    salefacetbrowse: 100702,
    salesection: 100703,
    saletabsection: 100704,
    salebroadcast: 100705,
    salecuratorrec: 100706,
    saleeventsched: 100707,
    salesubscription: 100708,
    saleitemsearch: 100709,
    salesmartwishlist: 100710,
    salesmartir: 100711,
    salesmartdlc: 100712,
    salesmarttagrec: 100713,
    salebrowsetopwishlisted: 100714,
    salebrowsetrendingwishlisted: 100715,
    salebrowsepopularcomingsoon: 100716,
    salebrowsemostplayeddemo: 100717,
    salebrowsedailyactiveuserdemo: 100718,
    salebrowseplayednowdemo: 100719,
    salebrowserecentlyreleased: 100720,
    salebrowsepopularpurchased: 100721,
    salebrowsepopularpurchaseddiscounted: 100722,
    salebrowsediscounted: 100723,
    salebrowseprice: 100724,
    salebrowsenewandtrending: 100725,
    salebrowsetopsellers: 100726,
    salebrowsetoprated: 100727,
    discoveryqueue2022: 100728,
    saleeventsection: 100729,
    salesectionlinks: 100730,
    salesectionrewards: 100731,
    salesectiontext: 100732,
    salesectioneventschedule: 100733,
    salesmartpersonalizedcarousel: 100734,
    "promo-takeunder": 100735,
    salesmartwr: 100736,
    salesmartwishlist_allsale: 100737,
    salesmartir_allsale: 100738,
    autopopulatetag: 100739,
    autopopulatecategory: 100740,
    salesmartrecentevents: 100741,
    seasonpassproductpage: 100742,
    itemcollections: 100743,
    crosspromotesalepage: 100744,
    "mm-auto-render": 100745,
    salequiz: 100746,
    templatemediacontent: 100747,
    templatefaq: 100748,
    templatetechspec: 100749,
    topnewreleases: 100750,
    newreleases: 100751,
    salebrowsetrendingfree: 100752,
    trendingfree: 100753,
    reactroot: 100754,
    bundlelist: 100755,
    verifiedprogram: 100756,
    trailercarousel: 100757,
    "personalcalendar-lastmonth": 100800,
    "personalcalendar-lastweek": 100801,
    "personalcalendar-calendar": 100802,
    "personalcalendar-homepage": 100803,
    greatonframe: 100804,
  },
  _ = [4145017, 35143931, 39049601, 4, 41316928];
function _(_) {
  return _ in _;
}
var _ = class _ {
    static InstrumentLink(_, _, _ = null) {
      let _ = _.GetSNRLinkParam(_, _),
        _ = _.GetCuratorClanIDParam(_);
      return _.AddNavParamToURL(_, _, _);
    }
    static ParseSNR(_) {
      let _ = _.split(`_`) || [];
      return {
        domain: _.DecodeEventComponent(_[0]),
        controller: _.DecodeEventComponent(_[1]),
        method: _.DecodeEventComponent(_[2]),
        submethod: _.DecodeEventComponent(_[3]),
        feature: _.DecodeEventComponent(_[4]),
        depth: _[5] ? Number(_[5]) : void 0,
      };
    }
    static GetSNRLinkParam(_, _ = null) {
      let _ = _.ComputeLinkPrefix(
        _.domain,
        _.controller,
        _.method,
        _.submethod,
      );
      _ = _ ?? _.depth ?? null;
      let _ = _.EncodeEventComponent(_.feature);
      return _ && ((_ += `_` + _), _ && (_ += `_` + _)), _;
    }
    static GetCuratorClanIDParam(_) {
      return _.curator_clanid ?? null;
    }
    static AddNavParamToURL(_, _, _) {
      if (!_ || _.length == 0) return _;
      try {
        let _ = new URL(_(_)),
          _ = new URLSearchParams(_.search);
        return (
          _.set(`snr`, encodeURIComponent(_ ?? ``)),
          _ &&
            !_.includes(_) &&
            _.set(`curator_clanid`, encodeURIComponent(_ ?? ``)),
          _.origin + _.pathname + `?` + _.toString() + _.hash
        );
      } catch (_) {
        return console.error(_, _), _;
      }
    }
    static ComputeLinkPrefix(_, _, _, _) {
      let _ = ``;
      return (
        (_ += _.EncodeEventComponent(_)),
        (_ += `_`),
        (_ += _.EncodeEventComponent(_)),
        (_ += `_`),
        (_ += _.EncodeEventComponent(_)),
        (_ += `_`),
        (_ += _.EncodeEventComponent(_)),
        _
      );
    }
    static EncodeEventComponent(_) {
      return _
        ? _(_)
          ? `` + _[_]
          : (_.match(/^[0-9]+$/) || (_ = _.replace(/^[0-9]+/, ``)),
            _.replace(/[^a-zA-Z0-9\- ]+/g, ``))
        : ``;
    }
    static DecodeEventComponent(_) {
      let _ = _ && parseInt(_);
      if (_ && _) {
        for (let _ in _) if (_[_] == _) return _;
      }
      return _.SanitizeEventComponent(_);
    }
    static SanitizeEventComponent(_) {
      return !_ || !_.match(/^[a-zA-Z0-9\-.]*$/) ? `` : _;
    }
  },
  _ = _.createContext({});
_.createContext(void 0);
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(),
    _ = _.useMemo(
      () => ({
        ..._,
        ..._,
      }),
      [
        _,
        _.domain,
        _.controller,
        _.method,
        _.submethod,
        _.feature,
        _.depth,
        _.curator_clanid,
      ],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
function _(_, _, _, _) {
  let _ = _.GetSNRLinkParam(
      {
        ..._,
        feature: _ || _.feature,
      },
      _,
    ),
    _ = _.GetCuratorClanIDParam(_);
  return _.AddNavParamToURL(_, _, _);
}
function _(_, _) {
  _ != null &&
    (typeof _ == `function` ? _(_) : `current` in _ && (_.current = _));
}
function _(..._) {
  return _.useCallback((_) => {
    for (let _ of _) _(_, _);
  }, _);
}
function _(..._) {
  if (!(!_ || _.length === 0))
    return _.length === 1
      ? _[0]
      : (_) =>
          _.forEach((_) => {
            if (_) typeof _ == `function` ? _(_) : (_.current = _);
            else return;
          });
}
function _(_, _) {
  let _ = _.useRef(void 0);
  return _.useCallback((_) => {
    _.current && _.current(), (_.current = _(_));
  }, _);
}
function _(_) {
  let _ = _.useRef(null);
  return {
    refWithValue: _,
    refForElement: _(_, _),
  };
}
function _(_, _) {
  let _ = _.useRef(!1);
  _.useLayoutEffect(
    () => () => {
      _.current && _(_, void 0);
    },
    [_],
  ),
    _.useLayoutEffect(() => {
      (_ || _.current) && (_(_, _), (_.current = !!_));
    }, [_, _]);
}
function _(_, _, _) {
  return _(
    (_) => {
      if (!(!_ || !_))
        return _.addEventListener(_, _, _), () => _.removeEventListener(_, _);
    },
    [_, _],
  );
}
function _(_, _, _, _) {
  _.useEffect(() => {
    if (!(!_ || !_))
      return _.addEventListener(_, _, _), () => _.removeEventListener(_, _, _);
  }, [_, _, _]);
}
function _(_, _, _, _) {
  return _(
    _,
    `message`,
    _.useCallback(
      function (_) {
        _.data === _ && _(_, _);
      },
      [_, _, _],
    ),
    _,
  );
}
function _(_) {
  let [_, _] = _.useState(document.documentElement[_]);
  return (
    _.useEffect(() => {
      function _() {
        _(document.documentElement[_]);
      }
      return (
        window.addEventListener(`resize`, _, {
          passive: !0,
        }),
        () => window.removeEventListener(`resize`, _)
      );
    }, [_]),
    _
  );
}
var _;
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
function _() {
  return _
    ? window.navigation?.currentEntry?.getState()
    : window.history?.state;
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
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
