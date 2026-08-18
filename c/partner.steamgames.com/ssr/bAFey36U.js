var _ = class extends _ {
  constructor(_, _) {
    super(),
      (this.options = _),
      (this.#e = _),
      (this.#s = null),
      (this.#o = _()),
      this.options.experimental_prefetchInRender ||
        this.#o.reject(
          Error(`experimental_prefetchInRender feature flag is not enabled`),
        ),
      this.bindMethods(),
      this.setOptions(_);
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      _(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return _(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return _(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this);
  }
  setOptions(_, _) {
    let _ = this.options,
      _ = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(_)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof _(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    this.#S(),
      this.#t.setOptions(this.options),
      _._defaulted &&
        !_(this.options, _) &&
        this.#e.getQueryCache().notify({
          type: `observerOptionsUpdated`,
          query: this.#t,
          observer: this,
        });
    let _ = this.hasListeners();
    _ && _(this.#t, _, this.options, _) && this.#h(),
      this.updateResult(_),
      _ &&
        (this.#t !== _ ||
          _(this.options.enabled, this.#t) !== _(_.enabled, this.#t) ||
          _(this.options.staleTime, this.#t) !== _(_.staleTime, this.#t)) &&
        this.#g();
    let _ = this.#_();
    _ &&
      (this.#t !== _ ||
        _(this.options.enabled, this.#t) !== _(_.enabled, this.#t) ||
        _ !== this.#p) &&
      this.#v(_);
  }
  getOptimisticResult(_) {
    let _ = this.#e.getQueryCache().build(this.#e, _),
      _ = this.createResult(_, _);
    return (
      _(this, _) &&
        ((this.#r = _), (this.#a = this.options), (this.#i = this.#t.state)),
      _
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(_, _) {
    let _ = {};
    return (
      Object.keys(_).forEach((_) => {
        Object.defineProperty(_, _, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackProp(_), _?.(_), _[_]),
        });
      }),
      _
    );
  }
  trackProp(_) {
    this.#m.add(_);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ..._ } = {}) {
    return this.fetch({
      ..._,
    });
  }
  fetchOptimistic(_) {
    let _ = this.#e.defaultQueryOptions(_),
      _ = this.#e.getQueryCache().build(this.#e, _);
    return _.fetch().then(() => this.createResult(_, _));
  }
  fetch(_) {
    return this.#h({
      ..._,
      cancelRefetch: _.cancelRefetch ?? !0,
    }).then(() => (this.updateResult(), this.#r));
  }
  #h(_) {
    this.#S();
    let _ = this.#t.fetch(this.options, _);
    return _?.throwOnError || (_ = _.catch(_)), _;
  }
  #g() {
    this.#b();
    let _ = _(this.options.staleTime, this.#t);
    if (_ || this.#r.isStale || !_(_)) return;
    let _ = _(this.#r.dataUpdatedAt, _) + 1;
    this.#d = setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, _);
  }
  #_() {
    return (
      (typeof this.options.refetchInterval == `function`
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(_) {
    this.#x(),
      (this.#p = _),
      !(
        _ ||
        _(this.options.enabled, this.#t) === !1 ||
        !_(this.#p) ||
        this.#p === 0
      ) &&
        (this.#f = setInterval(() => {
          (this.options.refetchIntervalInBackground || _.isFocused()) &&
            this.#h();
        }, this.#p));
  }
  #y() {
    this.#g(), this.#v(this.#_());
  }
  #b() {
    this.#d &&= (clearTimeout(this.#d), void 0);
  }
  #x() {
    this.#f &&= (clearInterval(this.#f), void 0);
  }
  createResult(_, _) {
    let _ = this.#t,
      _ = this.options,
      _ = this.#r,
      _ = this.#i,
      _ = this.#a,
      _ = _ === _ ? this.#n : _.state,
      { state: _ } = _,
      _ = {
        ..._,
      },
      _ = !1,
      _;
    if (_._optimisticResults) {
      let _ = this.hasListeners(),
        _ = !_ && _(_, _),
        _ = _ && _(_, _, _, _);
      (_ || _) &&
        (_ = {
          ..._,
          ..._(_.data, _.options),
        }),
        _._optimisticResults === `isRestoring` && (_.fetchStatus = `idle`);
    }
    let { error: _, errorUpdatedAt: _, status: _ } = _;
    if (_.select && _.data !== void 0)
      if (_ && _.data === _?.data && _.select === this.#c) _ = this.#l;
      else
        try {
          (this.#c = _.select),
            (_ = _.select(_.data)),
            (_ = _(_?.data, _, _)),
            (this.#l = _),
            (this.#s = null);
        } catch (_) {
          this.#s = _;
        }
    else _ = _.data;
    if (_.placeholderData !== void 0 && _ === void 0 && _ === `pending`) {
      let _;
      if (_?.isPlaceholderData && _.placeholderData === _?.placeholderData)
        _ = _.data;
      else if (
        ((_ =
          typeof _.placeholderData == `function`
            ? _.placeholderData(this.#u?.state.data, this.#u)
            : _.placeholderData),
        _.select && _ !== void 0)
      )
        try {
          (_ = _.select(_)), (this.#s = null);
        } catch (_) {
          this.#s = _;
        }
      _ !== void 0 && ((_ = `success`), (_ = _(_?.data, _, _)), (_ = !0));
    }
    this.#s && ((_ = this.#s), (_ = this.#l), (_ = Date.now()), (_ = `error`));
    let _ = _.fetchStatus === `fetching`,
      _ = _ === `pending`,
      _ = _ === `error`,
      _ = _ && _,
      _ = _ !== void 0,
      _ = {
        status: _,
        fetchStatus: _.fetchStatus,
        isPending: _,
        isSuccess: _ === `success`,
        isError: _,
        isInitialLoading: _,
        isLoading: _,
        data: _,
        dataUpdatedAt: _.dataUpdatedAt,
        error: _,
        errorUpdatedAt: _,
        failureCount: _.fetchFailureCount,
        failureReason: _.fetchFailureReason,
        errorUpdateCount: _.errorUpdateCount,
        isFetched: _.dataUpdateCount > 0 || _.errorUpdateCount > 0,
        isFetchedAfterMount:
          _.dataUpdateCount > _.dataUpdateCount ||
          _.errorUpdateCount > _.errorUpdateCount,
        isFetching: _,
        isRefetching: _ && !_,
        isLoadingError: _ && !_,
        isPaused: _.fetchStatus === `paused`,
        isPlaceholderData: _,
        isRefetchError: _ && _,
        isStale: _(_, _),
        refetch: this.refetch,
        promise: this.#o,
      };
    if (this.options.experimental_prefetchInRender) {
      let _ = (_) => {
          _.status === `error`
            ? _.reject(_.error)
            : _.data !== void 0 && _.resolve(_.data);
        },
        _ = () => {
          let _ = (this.#o = _.promise = _());
          _(_);
        },
        _ = this.#o;
      switch (_.status) {
        case `pending`:
          _.queryHash === _.queryHash && _(_);
          break;
        case `fulfilled`:
          (_.status === `error` || _.data !== _.value) && _();
          break;
        case `rejected`:
          (_.status !== `error` || _.error !== _.reason) && _();
          break;
      }
    }
    return _;
  }
  updateResult(_) {
    let _ = this.#r,
      _ = this.createResult(this.#t, this.options);
    if (
      ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      _(_, _))
    )
      return;
    this.#r = _;
    let _ = {};
    _?.listeners !== !1 &&
      (() => {
        if (!_) return !0;
        let { notifyOnChangeProps: _ } = this.options,
          _ = typeof _ == `function` ? _() : _;
        if (_ === `all` || (!_ && !this.#m.size)) return !0;
        let _ = new Set(_ ?? this.#m);
        return (
          this.options.throwOnError && _.add(`error`),
          Object.keys(this.#r).some((_) => {
            let _ = _;
            return this.#r[_] !== _[_] && _.has(_);
          })
        );
      })() &&
      (_.listeners = !0),
      this.#C({
        ..._,
        ..._,
      });
  }
  #S() {
    let _ = this.#e.getQueryCache().build(this.#e, this.options);
    if (_ === this.#t) return;
    let _ = this.#t;
    (this.#t = _),
      (this.#n = _.state),
      this.hasListeners() && (_?.removeObserver(this), _.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#y();
  }
  #C(_) {
    _.batch(() => {
      _.listeners &&
        this.listeners.forEach((_) => {
          _(this.#r);
        }),
        this.#e.getQueryCache().notify({
          query: this.#t,
          type: `observerResultsUpdated`,
        });
    });
  }
};
function _(_, _) {
  return (
    _(_.enabled, _) !== !1 &&
    _.state.data === void 0 &&
    !(_.state.status === `error` && _.retryOnMount === !1)
  );
}
function _(_, _) {
  return _(_, _) || (_.state.data !== void 0 && _(_, _, _.refetchOnMount));
}
function _(_, _, _) {
  if (_(_.enabled, _) !== !1) {
    let _ = typeof _ == `function` ? _(_) : _;
    return _ === `always` || (_ !== !1 && _(_, _));
  }
  return !1;
}
function _(_, _, _, _) {
  return (
    (_ !== _ || _(_.enabled, _) === !1) &&
    (!_.suspense || _.state.status !== `error`) &&
    _(_, _)
  );
}
function _(_, _) {
  return _(_.enabled, _) !== !1 && _.isStaleByTime(_(_.staleTime, _));
}
function _(_, _) {
  return !_(_.getCurrentResult(), _);
}
var _ = _(),
  _ = _(_(), 1),
  _ = _.createContext(!1),
  _ = () => _.useContext(_);
_.Provider;
function _() {
  let _ = !1;
  return {
    clearReset: () => {
      _ = !1;
    },
    reset: () => {
      _ = !0;
    },
    isReset: () => _,
  };
}
var _ = _.createContext(_()),
  _ = () => _.useContext(_);
function _(_, _) {
  return typeof _ == `function` ? _(..._) : !!_;
}
function _() {}
var _ = (_, _) => {
    (_.suspense || _.throwOnError || _.experimental_prefetchInRender) &&
      (_.isReset() || (_.retryOnMount = !1));
  },
  _ = (_) => {
    _.useEffect(() => {
      _.clearReset();
    }, [_]);
  },
  _ = ({ result: _, errorResetBoundary: _, throwOnError: _, query: _ }) =>
    _.isError && !_.isReset() && !_.isFetching && _ && _(_, [_.error, _]),
  _ = (_) => {
    _.suspense &&
      (_.staleTime === void 0 && (_.staleTime = 1e3),
      typeof _.gcTime == `number` && (_.gcTime = Math.max(_.gcTime, 1e3)));
  },
  _ = (_, _) => _.isLoading && _.isFetching && !_,
  _ = (_, _) => _?.suspense && _.isPending,
  _ = (_, _, _) =>
    _.fetchOptimistic(_).catch(() => {
      _.clearReset();
    });
function _(_, _, _) {
  let _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.defaultQueryOptions(_);
  _.getDefaultOptions().queries?._experimental_beforeQuery?.(_),
    (_._optimisticResults = _ ? `isRestoring` : `optimistic`),
    _(_),
    _(_, _),
    _(_);
  let _ = !_.getQueryCache().get(_.queryHash),
    [_] = _.useState(() => new _(_, _)),
    _ = _.getOptimisticResult(_);
  if (
    (_.useSyncExternalStore(
      _.useCallback(
        (_) => {
          let _ = _ ? _ : _.subscribe(_.batchCalls(_));
          return _.updateResult(), _;
        },
        [_, _],
      ),
      () => _.getCurrentResult(),
      () => _.getCurrentResult(),
    ),
    _.useEffect(() => {
      _.setOptions(_, {
        listeners: !1,
      });
    }, [_, _]),
    _(_, _))
  )
    throw _(_, _, _);
  if (
    _({
      result: _,
      errorResetBoundary: _,
      throwOnError: _.throwOnError,
      query: _.getQueryCache().get(_.queryHash),
    })
  )
    throw _.error;
  return (
    _.getDefaultOptions().queries?._experimental_afterQuery?.(_, _),
    _.experimental_prefetchInRender &&
      !_ &&
      _(_, _) &&
      (_ ? _(_, _, _) : _.getQueryCache().get(_.queryHash)?.promise)
        ?.catch(_)
        .finally(() => {
          _.updateResult();
        }),
    _.notifyOnChangeProps ? _ : _.trackResult(_)
  );
}
function _(_, _) {
  return _(_, _, _);
}
var _ = class extends _.Component {
  state = {};
  constructor(_) {
    super(_), (this.state.lastErrorKey = _.errorKey);
  }
  componentDidCatch(_, _) {
    _()
      .ReportError(_, {
        strComponentStack: _.componentStack || void 0,
      })
      .then(
        (_) =>
          _ &&
          this.setState({
            identifierHash: _.identifierHash,
          }),
      ),
      this.setState({
        error: {
          error: _,
          info: _,
        },
        lastErrorKey: this.props.errorKey,
      });
  }
  Reset() {
    this.setState({
      error: void 0,
    });
  }
  render() {
    let { children: _, fallback: _, errorKey: _ } = this.props,
      { error: _, identifierHash: _, lastErrorKey: _ } = this.state;
    return _ && _ == _
      ? _ === void 0
        ? _().reporting_enabled
          ? (0, _.jsx)(_, {
              error: _,
              identifierHash: _,
              store: _(),
              onRefresh: this.Reset,
            })
          : (0, _.jsx)(_, {
              error: _,
              onDismiss: this.Reset,
            })
        : typeof _ == `function`
          ? _(_.error)
          : _
      : _ || null;
  }
};
_([_], _.prototype, `Reset`, null);
var _ = ({ error: _, onDismiss: _ }) => {
    let _ = _.error ? _.error.stack : `Stack missing`,
      _ = _.info ? _.info.componentStack : ``,
      _ = (_.error && _.error.message) || `unknown error`;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [`Error: "`, _, `"`],
        }),
        `\xA0\xA0\xA0`,
        (0, _.jsx)(`span`, {
          style: {
            textDecoration: `underline`,
            cursor: `pointer`,
          },
          onClick: _,
          children: `(x) Dismiss`,
        }),
        (0, _.jsx)(`br`, {}),
        (0, _.jsx)(_, {
          children: _,
        }),
        (0, _.jsxs)(_, {
          children: [`The error occurred while rendering:`, _],
        }),
      ],
    });
  },
  _ = (_) => {
    let { error: _, onRefresh: _, identifierHash: _, store: _ } = _,
      _ = (_.error && _.error.message) || `unknown error`,
      _ = `${_.product}_${_.version}_${_}`;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [
            `Something went wrong while displaying this content. `,
            (0, _.jsx)(`span`, {
              style: {
                textDecoration: `underline`,
                cursor: `pointer`,
              },
              onClick: _,
              children: `Refresh`,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          children: [`Error Reference: `, _],
        }),
        (0, _.jsx)(_, {
          children: _,
        }),
      ],
    });
  },
  _ = ({ children: _ }) =>
    (0, _.jsx)(`div`, {
      style: {
        overflow: `auto`,
        marginLeft: `15px`,
        color: `white`,
        fontSize: `16px`,
        userSelect: `auto`,
        backgroundColor: `black`,
      },
      className: `ErrorBoundary`,
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)(`h1`, {
      style: {
        fontSize: `20px`,
        display: `inline-block`,
        marginTop: `15px`,
        userSelect: `auto`,
      },
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)(`pre`, {
      style: {
        marginTop: `15px`,
        opacity: 0.7,
        userSelect: `auto`,
      },
      children: _,
    });
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
