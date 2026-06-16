/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7224],
  {
    40323: function (e, t) {
      var n, r, o;
      /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (r = []),
        (n = function e() {
          var t,
            n =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== n
                    ? n
                    : {},
            r = !n.document && !!n.postMessage,
            o = n.IS_PAPA_WORKER || !1,
            i = {},
            s = 0,
            u = {};
          function c(e) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (e) {
                var t = b(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new h(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var r = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < r) {
                  let t = this._config.newline;
                  t ||
                    ((i = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, i))),
                    (e = [...e.split(t).slice(r)].join(t));
                }
                this.isFirstChunk &&
                  w(this._config.beforeFirstChunk) &&
                  void 0 !== (i = this._config.beforeFirstChunk(e)) &&
                  (e = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (r = this._partialLine + e);
                var i =
                  ((this._partialLine = ""),
                  this._handle.parse(r, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = i.meta.cursor),
                    this._finished ||
                      ((this._partialLine = r.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    i && i.data && (this._rowCount += i.data.length),
                    (r =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    o)
                  )
                    n.postMessage({
                      results: i,
                      workerId: u.WORKER_ID,
                      finished: r,
                    });
                  else if (w(this._config.chunk) && !t) {
                    if (
                      (this._config.chunk(i, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = i = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(i.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(i.errors)),
                      (this._completeResults.meta = i.meta)),
                    this._completed ||
                      !r ||
                      !w(this._config.complete) ||
                      (i && i.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    r || (i && i.meta.paused) || this._nextChunk(),
                    i
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                w(this._config.error)
                  ? this._config.error(e)
                  : o &&
                    this._config.error &&
                    n.postMessage({
                      workerId: u.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function l(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = u.RemoteChunkSize),
              c.call(this, e),
              (this._nextChunk = r
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (e) {
                (this._input = e), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((t = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (t.withCredentials = this._config.withCredentials),
                    r ||
                      ((t.onload = E(this._chunkLoaded, this)),
                      (t.onerror = E(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !r,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      n = this._config.downloadRequestHeaders;
                    for (e in n) t.setRequestHeader(e, n[e]);
                  }
                  var o;
                  this._config.chunkSize &&
                    ((o = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + o,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  r && 0 === t.status && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                4 === t.readyState &&
                  (t.status < 200 || 400 <= t.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || t.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((e) =>
                            null !== (e = e.getResponseHeader("Content-Range"))
                              ? parseInt(e.substring(e.lastIndexOf("/") + 1))
                              : -1)(t)),
                      this.parseChunk(t.responseText)));
              }),
              (this._chunkError = function (e) {
                (e = t.statusText || e), this._sendError(new Error(e));
              });
          }
          function a(e) {
            (e = e || {}).chunkSize || (e.chunkSize = u.LocalChunkSize),
              c.call(this, e);
            var t,
              n,
              r = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                r
                  ? (((t = new FileReader()).onload = E(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = E(this._chunkError, this)))
                  : (t = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var e = this._input,
                  o =
                    (this._config.chunkSize &&
                      ((o = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = n.call(e, this._start, o))),
                    t.readAsText(e, this._config.encoding));
                r || this._chunkLoaded({ target: { result: o } });
              }),
              (this._chunkLoaded = function (e) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(e.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(t.error);
              });
          }
          function f(e) {
            var t;
            c.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var e, n;
                if (!this._finished)
                  return (
                    (e = this._config.chunkSize),
                    (t = e
                      ? ((n = t.substring(0, e)), t.substring(e))
                      : ((n = t), "")),
                    (this._finished = !t),
                    this.parseChunk(n)
                  );
              });
          }
          function d(e) {
            c.call(this, (e = e || {}));
            var t = [],
              n = !0,
              r = !1;
            (this.pause = function () {
              c.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                c.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (e) {
                (this._input = e),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                r && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (n = !0);
              }),
              (this._streamData = E(function (e) {
                try {
                  t.push(
                    "string" == typeof e
                      ? e
                      : e.toString(this._config.encoding),
                  ),
                    n &&
                      ((n = !1),
                      this._checkIsFinished(),
                      this.parseChunk(t.shift()));
                } catch (e) {
                  this._streamError(e);
                }
              }, this)),
              (this._streamError = E(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = E(function () {
                this._streamCleanUp(), (r = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = E(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function h(e) {
            var t,
              n,
              r,
              o,
              i = Math.pow(2, 53),
              s = -i,
              c = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              l =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              a = this,
              f = 0,
              d = 0,
              h = !1,
              v = !1,
              g = [],
              y = { data: [], errors: [], meta: {} };
            function E(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function R() {
              if (
                (y &&
                  r &&
                  (_(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      u.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines &&
                  (y.data = y.data.filter(function (e) {
                    return !E(e);
                  })),
                k())
              ) {
                if (y)
                  if (Array.isArray(y.data[0])) {
                    for (var t = 0; k() && t < y.data.length; t++)
                      y.data[t].forEach(n);
                    y.data.splice(0, 1);
                  } else y.data.forEach(n);
                function n(t, n) {
                  w(e.transformHeader) && (t = e.transformHeader(t, n)),
                    g.push(t);
                }
              }
              function o(t, n) {
                for (var r = e.header ? {} : [], o = 0; o < t.length; o++) {
                  var u = o,
                    a = t[o];
                  (a = ((t, n) =>
                    ((t) => (
                      e.dynamicTypingFunction &&
                        void 0 === e.dynamicTyping[t] &&
                        (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
                      !0 === (e.dynamicTyping[t] || e.dynamicTyping)
                    ))(t)
                      ? "true" === n ||
                        "TRUE" === n ||
                        ("false" !== n &&
                          "FALSE" !== n &&
                          (((e) => {
                            if (
                              c.test(e) &&
                              ((e = parseFloat(e)), s < e && e < i)
                            )
                              return 1;
                          })(n)
                            ? parseFloat(n)
                            : l.test(n)
                              ? new Date(n)
                              : "" === n
                                ? null
                                : n))
                      : n)(
                    (u = e.header
                      ? o >= g.length
                        ? "__parsed_extra"
                        : g[o]
                      : u),
                    (a = e.transform ? e.transform(a, u) : a),
                  )),
                    "__parsed_extra" === u
                      ? ((r[u] = r[u] || []), r[u].push(a))
                      : (r[u] = a);
                }
                return (
                  e.header &&
                    (o > g.length
                      ? _(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            g.length +
                            " fields but parsed " +
                            o,
                          d + n,
                        )
                      : o < g.length &&
                        _(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            g.length +
                            " fields but parsed " +
                            o,
                          d + n,
                        )),
                  r
                );
              }
              var a;
              y &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((a = 1),
                !y.data.length || Array.isArray(y.data[0])
                  ? ((y.data = y.data.map(o)), (a = y.data.length))
                  : (y.data = o(y.data, 0)),
                e.header && y.meta && (y.meta.fields = g),
                (d += a));
            }
            function k() {
              return e.header && 0 === g.length;
            }
            function _(e, t, n, r) {
              (e = { type: e, code: t, message: n }),
                void 0 !== r && (e.row = r),
                y.errors.push(e);
            }
            w(e.step) &&
              ((o = e.step),
              (e.step = function (t) {
                (y = t),
                  k()
                    ? R()
                    : (R(),
                      0 !== y.data.length &&
                        ((f += t.data.length),
                        e.preview && f > e.preview
                          ? n.abort()
                          : ((y.data = y.data[0]), o(y, a))));
              })),
              (this.parse = function (o, i, s) {
                var c = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(o, c)),
                  (r = !1),
                  e.delimiter
                    ? w(e.delimiter) &&
                      ((e.delimiter = e.delimiter(o)),
                      (y.meta.delimiter = e.delimiter))
                    : ((c = ((t, n, r, o, i) => {
                        var s, c, l, a;
                        i = i || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          u.RECORD_SEP,
                          u.UNIT_SEP,
                        ];
                        for (var f = 0; f < i.length; f++) {
                          for (
                            var d,
                              h = i[f],
                              p = 0,
                              v = 0,
                              g = 0,
                              y =
                                ((l = void 0),
                                new m({
                                  comments: o,
                                  delimiter: h,
                                  newline: n,
                                  preview: 10,
                                }).parse(t)),
                              b = 0;
                            b < y.data.length;
                            b++
                          )
                            r && E(y.data[b])
                              ? g++
                              : ((v += d = y.data[b].length),
                                void 0 === l
                                  ? (l = d)
                                  : 0 < d && ((p += Math.abs(d - l)), (l = d)));
                          0 < y.data.length && (v /= y.data.length - g),
                            (void 0 === c || p <= c) &&
                              (void 0 === a || a < v) &&
                              1.99 < v &&
                              ((c = p), (s = h), (a = v));
                        }
                        return {
                          successful: !!(e.delimiter = s),
                          bestDelimiter: s,
                        };
                      })(
                        o,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = c.bestDelimiter)
                        : ((r = !0), (e.delimiter = u.DefaultDelimiter)),
                      (y.meta.delimiter = e.delimiter)),
                  (c = b(e)),
                  e.preview && e.header && c.preview++,
                  (t = o),
                  (n = new m(c)),
                  (y = n.parse(t, i, s)),
                  R(),
                  h ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return h;
              }),
              (this.pause = function () {
                (h = !0),
                  n.abort(),
                  (t = w(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                a.streamer._halted
                  ? ((h = !1), a.streamer.parseChunk(t, !0))
                  : setTimeout(a.resume, 3);
              }),
              (this.aborted = function () {
                return v;
              }),
              (this.abort = function () {
                (v = !0),
                  n.abort(),
                  (y.meta.aborted = !0),
                  w(e.complete) && e.complete(y),
                  (t = "");
              }),
              (this.guessLineEndings = function (e, t) {
                (e = e.substring(0, 1048576)),
                  (t = new RegExp(p(t) + "([^]*?)" + p(t), "gm"));
                var n = (e = e.replace(t, "")).split("\r");
                if (
                  ((e =
                    1 < (t = e.split("\n")).length &&
                    t[0].length < n[0].length),
                  1 === n.length || e)
                )
                  return "\n";
                for (var r = 0, o = 0; o < n.length; o++)
                  "\n" === n[o][0] && r++;
                return r >= n.length / 2 ? "\r\n" : "\r";
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function m(e) {
            var t = (e = e || {}).delimiter,
              n = e.newline,
              r = e.comments,
              o = e.step,
              i = e.preview,
              s = e.fastMode,
              c = null,
              l = !1,
              a = null == e.quoteChar ? '"' : e.quoteChar,
              f = a;
            if (
              (void 0 !== e.escapeChar && (f = e.escapeChar),
              ("string" != typeof t || -1 < u.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              r === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === r
              ? (r = "#")
              : ("string" != typeof r || -1 < u.BAD_DELIMITERS.indexOf(r)) &&
                (r = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var d = 0,
              h = !1;
            (this.parse = function (u, m, v) {
              if ("string" != typeof u)
                throw new Error("Input must be a string");
              var g = u.length,
                y = t.length,
                b = n.length,
                E = r.length,
                R = w(o),
                k = [],
                _ = [],
                x = [],
                C = (d = 0);
              if (!u) return F();
              if (s || (!1 !== s && -1 === u.indexOf(a))) {
                for (var I = u.split(n), S = 0; S < I.length; S++) {
                  if (((x = I[S]), (d += x.length), S !== I.length - 1))
                    d += n.length;
                  else if (v) return F();
                  if (!r || x.substring(0, E) !== r) {
                    if (R) {
                      if (((k = []), D(x.split(t)), j(), h)) return F();
                    } else D(x.split(t));
                    if (i && i <= S) return (k = k.slice(0, i)), F(!0);
                  }
                }
                return F();
              }
              for (
                var O = u.indexOf(t, d),
                  M = u.indexOf(n, d),
                  L = new RegExp(p(f) + p(a), "g"),
                  T = u.indexOf(a, d);
                ;
              )
                if (u[d] === a)
                  for (T = d, d++; ; ) {
                    if (-1 === (T = u.indexOf(a, T + 1)))
                      return (
                        v ||
                          _.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: k.length,
                            index: d,
                          }),
                        N()
                      );
                    if (T === g - 1) return N(u.substring(d, T).replace(L, a));
                    if (a === f && u[T + 1] === f) T++;
                    else if (a === f || 0 === T || u[T - 1] !== f) {
                      -1 !== O && O < T + 1 && (O = u.indexOf(t, T + 1));
                      var A = P(
                        -1 ===
                          (M = -1 !== M && M < T + 1 ? u.indexOf(n, T + 1) : M)
                          ? O
                          : Math.min(O, M),
                      );
                      if (u.substr(T + 1 + A, y) === t) {
                        x.push(u.substring(d, T).replace(L, a)),
                          u[(d = T + 1 + A + y)] !== a && (T = u.indexOf(a, d)),
                          (O = u.indexOf(t, d)),
                          (M = u.indexOf(n, d));
                        break;
                      }
                      if (
                        ((A = P(M)),
                        u.substring(T + 1 + A, T + 1 + A + b) === n)
                      ) {
                        if (
                          (x.push(u.substring(d, T).replace(L, a)),
                          q(T + 1 + A + b),
                          (O = u.indexOf(t, d)),
                          (T = u.indexOf(a, d)),
                          R && (j(), h))
                        )
                          return F();
                        if (i && k.length >= i) return F(!0);
                        break;
                      }
                      _.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: k.length,
                        index: d,
                      }),
                        T++;
                    }
                  }
                else if (r && 0 === x.length && u.substring(d, d + E) === r) {
                  if (-1 === M) return F();
                  (d = M + b), (M = u.indexOf(n, d)), (O = u.indexOf(t, d));
                } else if (-1 !== O && (O < M || -1 === M))
                  x.push(u.substring(d, O)), (d = O + y), (O = u.indexOf(t, d));
                else {
                  if (-1 === M) break;
                  if ((x.push(u.substring(d, M)), q(M + b), R && (j(), h)))
                    return F();
                  if (i && k.length >= i) return F(!0);
                }
              return N();
              function D(e) {
                k.push(e), (C = d);
              }
              function P(e) {
                var t = 0;
                return -1 !== e &&
                  (e = u.substring(T + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function N(e) {
                return (
                  v ||
                    (void 0 === e && (e = u.substring(d)),
                    x.push(e),
                    (d = g),
                    D(x),
                    R && j()),
                  F()
                );
              }
              function q(e) {
                (d = e), D(x), (x = []), (M = u.indexOf(n, d));
              }
              function F(r) {
                if (e.header && !m && k.length && !l) {
                  var o = k[0],
                    i = Object.create(null),
                    s = new Set(o);
                  let t = !1;
                  for (let n = 0; n < o.length; n++) {
                    let r = o[n];
                    if (
                      i[
                        (r = w(e.transformHeader) ? e.transformHeader(r, n) : r)
                      ]
                    ) {
                      let e,
                        u = i[r];
                      for (; (e = r + "_" + u), u++, s.has(e); );
                      s.add(e),
                        (o[n] = e),
                        i[r]++,
                        (t = !0),
                        ((c = null === c ? {} : c)[e] = r);
                    } else (i[r] = 1), (o[n] = r);
                    s.add(r);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (l = !0);
                }
                return {
                  data: k,
                  errors: _,
                  meta: {
                    delimiter: t,
                    linebreak: n,
                    aborted: h,
                    truncated: !!r,
                    cursor: C + (m || 0),
                    renamedHeaders: c,
                  },
                };
              }
              function j() {
                o(F()), (k = []), (_ = []);
              }
            }),
              (this.abort = function () {
                h = !0;
              }),
              (this.getCharIndex = function () {
                return d;
              });
          }
          function v(e) {
            var t = e.data,
              n = i[t.workerId],
              r = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var o = {
                abort: function () {
                  (r = !0),
                    g(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: y,
                resume: y,
              };
              if (w(n.userStep)) {
                for (
                  var s = 0;
                  s < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[s],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    o,
                  ),
                  !r);
                  s++
                );
                delete t.results;
              } else
                w(n.userChunk) &&
                  (n.userChunk(t.results, o, t.file), delete t.results);
            }
            t.finished && !r && g(t.workerId, t.results);
          }
          function g(e, t) {
            var n = i[e];
            w(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
          }
          function y() {
            throw new Error("Not implemented.");
          }
          function b(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              n = Array.isArray(e) ? [] : {};
            for (t in e) n[t] = b(e[t]);
            return n;
          }
          function E(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function w(e) {
            return "function" == typeof e;
          }
          return (
            (u.parse = function (t, r) {
              var o = (r = r || {}).dynamicTyping || !1;
              if (
                (w(o) && ((r.dynamicTypingFunction = o), (o = {})),
                (r.dynamicTyping = o),
                (r.transform = !!w(r.transform) && r.transform),
                !r.worker || !u.WORKERS_SUPPORTED)
              )
                return (
                  (o = null),
                  u.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (o = new (r.download ? l : f)(r)))
                    : !0 === t.readable && w(t.read) && w(t.on)
                      ? (o = new d(r))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (o = new a(r)),
                  o.stream(t)
                );
              ((o = (() => {
                var t;
                return (
                  !!u.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = n.URL || n.webkitURL || null,
                      r = e.toString();
                    return (
                      u.BLOB_URL ||
                      (u.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            r,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new n.Worker(t)).onmessage = v),
                  (t.id = s++),
                  (i[t.id] = t))
                );
              })()).userStep = r.step),
                (o.userChunk = r.chunk),
                (o.userComplete = r.complete),
                (o.userError = r.error),
                (r.step = w(r.step)),
                (r.chunk = w(r.chunk)),
                (r.complete = w(r.complete)),
                (r.error = w(r.error)),
                delete r.worker,
                o.postMessage({ input: t, config: r, workerId: o.id });
            }),
            (u.unparse = function (e, t) {
              var n = !1,
                r = !0,
                o = ",",
                i = "\r\n",
                s = '"',
                c = s + s,
                l = !1,
                a = null,
                f = !1,
                d =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          u.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (o = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (l = t.skipEmptyLines),
                        "string" == typeof t.newline && (i = t.newline),
                        "string" == typeof t.quoteChar && (s = t.quoteChar),
                        "boolean" == typeof t.header && (r = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        a = t.columns;
                      }
                      void 0 !== t.escapeChar && (c = t.escapeChar + s),
                        t.escapeFormulae instanceof RegExp
                          ? (f = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (f = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(p(s), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return h(null, e, l);
                if ("object" == typeof e[0])
                  return h(a || Object.keys(e[0]), e, l);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || a),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  h(e.fields || [], e.data || [], l)
                );
              throw new Error("Unable to serialize unrecognized input");
              function h(e, t, n) {
                var s = "",
                  u =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  c = !Array.isArray(t[0]);
                if (u && r) {
                  for (var l = 0; l < e.length; l++)
                    0 < l && (s += o), (s += m(e[l], l));
                  0 < t.length && (s += i);
                }
                for (var a = 0; a < t.length; a++) {
                  var f = (u ? e : t[a]).length,
                    d = !1,
                    h = u ? 0 === Object.keys(t[a]).length : 0 === t[a].length;
                  if (
                    (n &&
                      !u &&
                      (d =
                        "greedy" === n
                          ? "" === t[a].join("").trim()
                          : 1 === t[a].length && 0 === t[a][0].length),
                    "greedy" === n && u)
                  ) {
                    for (var p = [], v = 0; v < f; v++) {
                      var g = c ? e[v] : v;
                      p.push(t[a][g]);
                    }
                    d = "" === p.join("").trim();
                  }
                  if (!d) {
                    for (var y = 0; y < f; y++) {
                      0 < y && !h && (s += o);
                      var b = u && c ? e[y] : y;
                      s += m(t[a][b], y);
                    }
                    a < t.length - 1 && (!n || (0 < f && !h)) && (s += i);
                  }
                }
                return s;
              }
              function m(e, t) {
                var r, i;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((i = !1),
                      f &&
                        "string" == typeof e &&
                        f.test(e) &&
                        ((e = "'" + e), (i = !0)),
                      (r = e.toString().replace(d, c)),
                      (i =
                        i ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(r, u.BAD_DELIMITERS) ||
                        -1 < r.indexOf(o) ||
                        " " === r.charAt(0) ||
                        " " === r.charAt(r.length - 1))
                        ? s + r + s
                        : r);
              }
            }),
            (u.RECORD_SEP = String.fromCharCode(30)),
            (u.UNIT_SEP = String.fromCharCode(31)),
            (u.BYTE_ORDER_MARK = "\ufeff"),
            (u.BAD_DELIMITERS = ["\r", "\n", '"', u.BYTE_ORDER_MARK]),
            (u.WORKERS_SUPPORTED = !r && !!n.Worker),
            (u.NODE_STREAM_INPUT = 1),
            (u.LocalChunkSize = 10485760),
            (u.RemoteChunkSize = 5242880),
            (u.DefaultDelimiter = ","),
            (u.Parser = m),
            (u.ParserHandle = h),
            (u.NetworkStreamer = l),
            (u.FileStreamer = a),
            (u.StringStreamer = f),
            (u.ReadableStreamStreamer = d),
            n.jQuery &&
              ((t = n.jQuery).fn.parse = function (e) {
                var r = e.config || {},
                  o = [];
                return (
                  this.each(function (e) {
                    if (
                      "INPUT" !== t(this).prop("tagName").toUpperCase() ||
                      "file" !== t(this).attr("type").toLowerCase() ||
                      !n.FileReader ||
                      !this.files ||
                      0 === this.files.length
                    )
                      return !0;
                    for (var i = 0; i < this.files.length; i++)
                      o.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: t.extend({}, r),
                      });
                  }),
                  i(),
                  this
                );
                function i() {
                  if (0 === o.length) w(e.complete) && e.complete();
                  else {
                    var n,
                      r,
                      i,
                      c,
                      l = o[0];
                    if (w(e.before)) {
                      var a = e.before(l.file, l.inputElem);
                      if ("object" == typeof a) {
                        if ("abort" === a.action)
                          return (
                            (n = "AbortError"),
                            (r = l.file),
                            (i = l.inputElem),
                            (c = a.reason),
                            void (w(e.error) && e.error({ name: n }, r, i, c))
                          );
                        if ("skip" === a.action) return void s();
                        "object" == typeof a.config &&
                          (l.instanceConfig = t.extend(
                            l.instanceConfig,
                            a.config,
                          ));
                      } else if ("skip" === a) return void s();
                    }
                    var f = l.instanceConfig.complete;
                    (l.instanceConfig.complete = function (e) {
                      w(f) && f(e, l.file, l.inputElem), s();
                    }),
                      u.parse(l.file, l.instanceConfig);
                  }
                }
                function s() {
                  o.splice(0, 1), i();
                }
              }),
            o &&
              (n.onmessage = function (e) {
                (e = e.data),
                  void 0 === u.WORKER_ID && e && (u.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? n.postMessage({
                        workerId: u.WORKER_ID,
                        results: u.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((n.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = u.parse(e.input, e.config)) &&
                      n.postMessage({
                        workerId: u.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((l.prototype = Object.create(c.prototype)).constructor = l),
            ((a.prototype = Object.create(c.prototype)).constructor = a),
            ((f.prototype = Object.create(f.prototype)).constructor = f),
            ((d.prototype = Object.create(c.prototype)).constructor = d),
            u
          );
        }),
        void 0 === (o = "function" == typeof n ? n.apply(t, r) : n) ||
          (e.exports = o);
    },
    94621: (e, t, n) => {
      "use strict";
      n.d(t, {
        BN: () => p,
        Ej: () => v,
        UU: () => m,
        cY: () => h,
        we: () => d,
      });
      var r = n(28505),
        o = n(33559),
        i = n(90626),
        s = n(72739),
        u = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function c(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 !== r--; ) if (!c(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 !== r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--; ) {
            const n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !c(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function l(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function a(e, t) {
        const n = l(e);
        return Math.round(t * n) / n;
      }
      function f(e) {
        const t = i.useRef(e);
        return (
          u(() => {
            t.current = e;
          }),
          t
        );
      }
      function d(e) {
        void 0 === e && (e = {});
        const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: o = [],
            platform: d,
            elements: { reference: h, floating: p } = {},
            transform: m = !0,
            whileElementsMounted: v,
            open: g,
          } = e,
          [y, b] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [E, w] = i.useState(o);
        c(E, o) || w(o);
        const [R, k] = i.useState(null),
          [_, x] = i.useState(null),
          C = i.useCallback((e) => {
            e !== M.current && ((M.current = e), k(e));
          }, []),
          I = i.useCallback((e) => {
            e !== L.current && ((L.current = e), x(e));
          }, []),
          S = h || R,
          O = p || _,
          M = i.useRef(null),
          L = i.useRef(null),
          T = i.useRef(y),
          A = null != v,
          D = f(v),
          P = f(d),
          N = f(g),
          q = i.useCallback(() => {
            if (!M.current || !L.current) return;
            const e = { placement: t, strategy: n, middleware: E };
            P.current && (e.platform = P.current),
              (0, r.rD)(M.current, L.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== N.current };
                F.current &&
                  !c(T.current, t) &&
                  ((T.current = t),
                  s.flushSync(() => {
                    b(t);
                  }));
              });
          }, [E, t, n, P, N]);
        u(() => {
          !1 === g &&
            T.current.isPositioned &&
            ((T.current.isPositioned = !1),
            b((e) => ({ ...e, isPositioned: !1 })));
        }, [g]);
        const F = i.useRef(!1);
        u(
          () => (
            (F.current = !0),
            () => {
              F.current = !1;
            }
          ),
          [],
        ),
          u(() => {
            if ((S && (M.current = S), O && (L.current = O), S && O)) {
              if (D.current) return D.current(S, O, q);
              q();
            }
          }, [S, O, q, D, A]);
        const j = i.useMemo(
            () => ({
              reference: M,
              floating: L,
              setReference: C,
              setFloating: I,
            }),
            [C, I],
          ),
          U = i.useMemo(() => ({ reference: S, floating: O }), [S, O]),
          K = i.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!U.floating) return e;
            const t = a(U.floating, y.x),
              r = a(U.floating, y.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(l(U.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, m, U.floating, y.x, y.y]);
        return i.useMemo(
          () => ({ ...y, update: q, refs: j, elements: U, floatingStyles: K }),
          [y, q, j, U, K],
        );
      }
      const h = (e, t) => ({ ...(0, o.cY)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      "use strict";
      n.d(t, {
        s3: () => st,
        ph: () => he,
        iB: () => Lt,
        kp: () => lt,
        s9: () => ht,
        we: () => pt,
        iQ: () => mt,
        Mk: () => Le,
        bv: () => bt,
        rm: () => pe,
        C1: () => Ct,
        SV: () => Q,
        It: () => St,
        lY: () => Ot,
      });
      var r = n(90626),
        o = n.t(r, 2),
        i = n(977);
      function s(e) {
        let t = e.activeElement;
        for (
          ;
          null !=
          (null == (n = t) || null == (n = n.shadowRoot)
            ? void 0
            : n.activeElement);
        ) {
          var n;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function u(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, i.Ng)(n)) {
          let n = t;
          for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
          }
        }
        return !1;
      }
      function c() {
        const e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform;
      }
      function l() {
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map((e) => {
                let { brand: t, version: n } = e;
                return t + "/" + n;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function a(e) {
        return (
          !(0 !== e.mozInputSource || !e.isTrusted) ||
          (h() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function f(e) {
        return (
          !l().includes("jsdom/") &&
          ((!h() && 0 === e.width && 0 === e.height) ||
            (h() &&
              1 === e.width &&
              1 === e.height &&
              0 === e.pressure &&
              0 === e.detail &&
              "mouse" === e.pointerType) ||
            (e.width < 1 &&
              e.height < 1 &&
              0 === e.pressure &&
              0 === e.detail &&
              "touch" === e.pointerType))
        );
      }
      function d() {
        return /apple/i.test(navigator.vendor);
      }
      function h() {
        const e = /android/i;
        return e.test(c()) || e.test(l());
      }
      function p(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e);
      }
      function m(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function v(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target);
      }
      function g(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const y =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function b(e) {
        return (0, i.sb)(e) && e.matches(y);
      }
      function E(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function w(e) {
        return !!e && "combobox" === e.getAttribute("role") && b(e);
      }
      var R = n(58015),
        k = n(7850),
        _ = [
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
        x = _.join(","),
        C = "undefined" == typeof Element,
        I = C
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        S =
          !C && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        O = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        M = function (e, t, n) {
          if (O(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(x));
          return t && I.call(e, x) && r.unshift(e), (r = r.filter(n));
        },
        L = function e(t, n, r) {
          for (var o = [], i = Array.from(t); i.length; ) {
            var s = i.shift();
            if (!O(s, !1))
              if ("SLOT" === s.tagName) {
                var u = s.assignedElements(),
                  c = e(u.length ? u : s.children, !0, r);
                r.flatten
                  ? o.push.apply(o, c)
                  : o.push({ scopeParent: s, candidates: c });
              } else {
                I.call(s, x) &&
                  r.filter(s) &&
                  (n || !t.includes(s)) &&
                  o.push(s);
                var l =
                    s.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(s)),
                  a =
                    !O(l, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
                if (l && a) {
                  var f = e(!0 === l ? s.children : l.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, f)
                    : o.push({ scopeParent: s, candidates: f });
                } else i.unshift.apply(i, s.children);
              }
          }
          return o;
        },
        T = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        A = function (e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
              (function (e) {
                var t,
                  n =
                    null == e || null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              })(e)) &&
            !T(e)
            ? 0
            : e.tabIndex;
        },
        D = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        P = function (e) {
          return "INPUT" === e.tagName;
        },
        N = function (e) {
          return (
            (function (e) {
              return P(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || S(e),
                r = function (e) {
                  return n.querySelectorAll(
                    'input[type="radio"][name="' + e + '"]',
                  );
                };
              if (
                "undefined" != typeof window &&
                void 0 !== window.CSS &&
                "function" == typeof window.CSS.escape
              )
                t = r(window.CSS.escape(e.name));
              else
                try {
                  t = r(e.name);
                } catch (e) {
                  return (
                    console.error(
                      "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                      e.message,
                    ),
                    !1
                  );
                }
              var o = (function (e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n];
              })(t, e.form);
              return !o || o === e;
            })(e)
          );
        },
        q = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
          return 0 === n && 0 === r;
        },
        F = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = I.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (I.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return q(e);
          } else {
            if ("function" == typeof r) {
              for (var i = e; e; ) {
                var s = e.parentElement,
                  u = S(e);
                if (s && !s.shadowRoot && !0 === r(s)) return q(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : s || u === e.ownerDocument
                    ? s
                    : u.host;
              }
              e = i;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = e && S(e),
                  s = null === (t = i) || void 0 === t ? void 0 : t.host,
                  u = !1;
                if (i && i !== e)
                  for (
                    u = !!(
                      (null !== (n = s) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(s)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !u && s;
                  ) {
                    var c, l, a;
                    u = !(
                      null ===
                        (l = s =
                          null === (c = i = S(s)) || void 0 === c
                            ? void 0
                            : c.host) ||
                      void 0 === l ||
                      null === (a = l.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(s)
                    );
                  }
                return u;
              })(e)
            )
              return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
          }
          return !1;
        },
        j = function (e, t) {
          return !(
            t.disabled ||
            O(t) ||
            (function (e) {
              return P(e) && "hidden" === e.type;
            })(t) ||
            F(t, e) ||
            (function (e) {
              return (
                "DETAILS" === e.tagName &&
                Array.prototype.slice.apply(e.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })
              );
            })(t) ||
            (function (e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                for (var t = e.parentElement; t; ) {
                  if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                      var r = t.children.item(n);
                      if ("LEGEND" === r.tagName)
                        return (
                          !!I.call(t, "fieldset[disabled] *") || !r.contains(e)
                        );
                    }
                    return !0;
                  }
                  t = t.parentElement;
                }
              return !1;
            })(t)
          );
        },
        U = function (e, t) {
          return !(N(t) || A(t) < 0 || !j(e, t));
        },
        K = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        z = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var i = !!t.scopeParent,
                s = i ? t.scopeParent : t,
                u = (function (e, t) {
                  var n = A(e);
                  return n < 0 && t && !T(e) ? 0 : n;
                })(s, i),
                c = i ? e(t.candidates) : s;
              0 === u
                ? i
                  ? n.push.apply(n, c)
                  : n.push(s)
                : r.push({
                    documentOrder: o,
                    tabIndex: u,
                    item: t,
                    isScope: i,
                    content: c,
                  });
            }),
            r
              .sort(D)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        B = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? L([e], t.includeContainer, {
                  filter: U.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: K,
                })
              : M(e, t.includeContainer, U.bind(null, t))),
            z(n)
          );
        },
        W = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== I.call(e, x) && U(t, e);
        },
        H = (n(72739), n(94621));
      function Q(e) {
        const t = r.useRef(void 0),
          n = r.useCallback((t) => {
            const n = e.map((e) => {
              if (null != e) {
                if ("function" == typeof e) {
                  const n = e,
                    r = n(t);
                  return "function" == typeof r
                    ? r
                    : () => {
                        n(null);
                      };
                }
                return (
                  (e.current = t),
                  () => {
                    e.current = null;
                  }
                );
              }
            });
            return () => {
              n.forEach((e) => (null == e ? void 0 : e()));
            };
          }, e);
        return r.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (e) => {
                  t.current && (t.current(), (t.current = void 0)),
                    null != e && (t.current = n(e));
                },
          e,
        );
      }
      const Y = { ...o },
        $ = Y.useInsertionEffect || ((e) => e());
      function X(e) {
        const t = r.useRef(() => {
          0;
        });
        return (
          $(() => {
            t.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      const V = "ArrowUp",
        J = "ArrowDown",
        G = "ArrowLeft",
        Z = "ArrowRight";
      function ee(e, t, n) {
        return Math.floor(e / t) !== n;
      }
      function te(e, t) {
        return t < 0 || t >= e.current.length;
      }
      function ne(e, t) {
        return oe(e, { disabledIndices: t });
      }
      function re(e, t) {
        return oe(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: t,
        });
      }
      function oe(e, t) {
        let {
          startingIndex: n = -1,
          decrement: r = !1,
          disabledIndices: o,
          amount: i = 1,
        } = void 0 === t ? {} : t;
        const s = e.current;
        let u = n;
        do {
          u += r ? -i : i;
        } while (u >= 0 && u <= s.length - 1 && le(s, u, o));
        return u;
      }
      function ie(e, t) {
        let {
            event: n,
            orientation: r,
            loop: o,
            rtl: i,
            cols: s,
            disabledIndices: u,
            minIndex: c,
            maxIndex: l,
            prevIndex: a,
            stopEvent: f = !1,
          } = t,
          d = a;
        if (n.key === V) {
          if ((f && E(n), -1 === a)) d = l;
          else if (
            ((d = oe(e, {
              startingIndex: d,
              amount: s,
              decrement: !0,
              disabledIndices: u,
            })),
            o && (a - s < c || d < 0))
          ) {
            const e = a % s,
              t = l % s,
              n = l - (t - e);
            d = t === e ? l : t > e ? n : n - s;
          }
          te(e, d) && (d = a);
        }
        if (
          (n.key === J &&
            (f && E(n),
            -1 === a
              ? (d = c)
              : ((d = oe(e, {
                  startingIndex: a,
                  amount: s,
                  disabledIndices: u,
                })),
                o &&
                  a + s > l &&
                  (d = oe(e, {
                    startingIndex: (a % s) - s,
                    amount: s,
                    disabledIndices: u,
                  }))),
            te(e, d) && (d = a)),
          "both" === r)
        ) {
          const t = (0, R.RI)(a / s);
          n.key === (i ? G : Z) &&
            (f && E(n),
            a % s !== s - 1
              ? ((d = oe(e, { startingIndex: a, disabledIndices: u })),
                o &&
                  ee(d, s, t) &&
                  (d = oe(e, {
                    startingIndex: a - (a % s) - 1,
                    disabledIndices: u,
                  })))
              : o &&
                (d = oe(e, {
                  startingIndex: a - (a % s) - 1,
                  disabledIndices: u,
                })),
            ee(d, s, t) && (d = a)),
            n.key === (i ? Z : G) &&
              (f && E(n),
              a % s !== 0
                ? ((d = oe(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: u,
                  })),
                  o &&
                    ee(d, s, t) &&
                    (d = oe(e, {
                      startingIndex: a + (s - (a % s)),
                      decrement: !0,
                      disabledIndices: u,
                    })))
                : o &&
                  (d = oe(e, {
                    startingIndex: a + (s - (a % s)),
                    decrement: !0,
                    disabledIndices: u,
                  })),
              ee(d, s, t) && (d = a));
          const r = (0, R.RI)(l / s) === t;
          te(e, d) &&
            (d =
              o && r
                ? n.key === (i ? Z : G)
                  ? l
                  : oe(e, {
                      startingIndex: a - (a % s) - 1,
                      disabledIndices: u,
                    })
                : a);
        }
        return d;
      }
      function se(e, t, n) {
        const r = [];
        let o = 0;
        return (
          e.forEach((e, i) => {
            let { width: s, height: u } = e,
              c = !1;
            for (n && (o = 0); !c; ) {
              const e = [];
              for (let n = 0; n < s; n++)
                for (let r = 0; r < u; r++) e.push(o + n + r * t);
              (o % t) + s <= t && e.every((e) => null == r[e])
                ? (e.forEach((e) => {
                    r[e] = i;
                  }),
                  (c = !0))
                : o++;
            }
          }),
          [...r]
        );
      }
      function ue(e, t, n, r, o) {
        if (-1 === e) return -1;
        const i = n.indexOf(e),
          s = t[e];
        switch (o) {
          case "tl":
            return i;
          case "tr":
            return s ? i + s.width - 1 : i;
          case "bl":
            return s ? i + (s.height - 1) * r : i;
          case "br":
            return n.lastIndexOf(e);
        }
      }
      function ce(e, t) {
        return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
      }
      function le(e, t, n) {
        if (n) return n.includes(t);
        const r = e[t];
        return (
          null == r ||
          r.hasAttribute("disabled") ||
          "true" === r.getAttribute("aria-disabled")
        );
      }
      var ae = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function fe(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING ||
          n & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : n & Node.DOCUMENT_POSITION_PRECEDING ||
              n & Node.DOCUMENT_POSITION_CONTAINS
            ? 1
            : 0;
      }
      const de = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function he(e) {
        const { children: t, elementsRef: n, labelsRef: o } = e,
          [i, s] = r.useState(() => new Set()),
          u = r.useCallback((e) => {
            s((t) => new Set(t).add(e));
          }, []),
          c = r.useCallback((e) => {
            s((t) => {
              const n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          l = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(i.keys())
                .sort(fe)
                .forEach((t, n) => {
                  e.set(t, n);
                }),
              e
            );
          }, [i]);
        return (0, k.jsx)(de.Provider, {
          value: r.useMemo(
            () => ({
              register: u,
              unregister: c,
              map: l,
              elementsRef: n,
              labelsRef: o,
            }),
            [u, c, l, n, o],
          ),
          children: t,
        });
      }
      function pe(e) {
        void 0 === e && (e = {});
        const { label: t } = e,
          {
            register: n,
            unregister: o,
            map: i,
            elementsRef: s,
            labelsRef: u,
          } = r.useContext(de),
          [c, l] = r.useState(null),
          a = r.useRef(null),
          f = r.useCallback(
            (e) => {
              if (((a.current = e), null !== c && ((s.current[c] = e), u))) {
                var n;
                const r = void 0 !== t;
                u.current[c] = r
                  ? t
                  : null != (n = null == e ? void 0 : e.textContent)
                    ? n
                    : null;
              }
            },
            [c, s, u, t],
          );
        return (
          ae(() => {
            const e = a.current;
            if (e)
              return (
                n(e),
                () => {
                  o(e);
                }
              );
          }, [n, o]),
          ae(() => {
            const e = a.current ? i.get(a.current) : null;
            null != e && l(e);
          }, [i]),
          r.useMemo(() => ({ ref: f, index: null == c ? -1 : c }), [c, f])
        );
      }
      const me = [G, Z],
        ve = [V, J];
      let ge = !1,
        ye = 0;
      const be = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + ye++;
      const Ee =
        Y.useId ||
        function () {
          const [e, t] = r.useState(() => (ge ? be() : void 0));
          return (
            ae(() => {
              null == e && t(be());
            }, []),
            r.useEffect(() => {
              ge = !0;
            }, []),
            e
          );
        };
      function we() {
        const e = new Map();
        return {
          emit(t, n) {
            var r;
            null == (r = e.get(t)) || r.forEach((e) => e(n));
          },
          on(t, n) {
            e.set(t, [...(e.get(t) || []), n]);
          },
          off(t, n) {
            var r;
            e.set(
              t,
              (null == (r = e.get(t)) ? void 0 : r.filter((e) => e !== n)) ||
                [],
            );
          },
        };
      }
      const Re = r.createContext(null),
        ke = r.createContext(null),
        _e = () => {
          var e;
          return (null == (e = r.useContext(Re)) ? void 0 : e.id) || null;
        },
        xe = () => r.useContext(ke);
      function Ce(e) {
        return "data-floating-ui-" + e;
      }
      function Ie(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Se(e) {
        const t = (0, r.useRef)(e);
        return (
          ae(() => {
            t.current = e;
          }),
          t
        );
      }
      const Oe = Ce("safe-polygon");
      function Me(e, t, n) {
        return n && !p(n)
          ? 0
          : "number" == typeof e
            ? e
            : null == e
              ? void 0
              : e[t];
      }
      function Le(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: s,
            events: c,
            elements: l,
          } = e,
          {
            enabled: a = !0,
            delay: f = 0,
            handleClose: d = null,
            mouseOnly: h = !1,
            restMs: v = 0,
            move: g = !0,
          } = t,
          y = xe(),
          b = _e(),
          E = Se(d),
          w = Se(f),
          R = Se(n),
          k = r.useRef(),
          _ = r.useRef(-1),
          x = r.useRef(),
          C = r.useRef(-1),
          I = r.useRef(!0),
          S = r.useRef(!1),
          O = r.useRef(() => {}),
          M = r.useRef(!1),
          L = r.useCallback(() => {
            var e;
            const t = null == (e = s.current.openEvent) ? void 0 : e.type;
            return (
              (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
            );
          }, [s]);
        r.useEffect(() => {
          if (a)
            return (
              c.on("openchange", e),
              () => {
                c.off("openchange", e);
              }
            );
          function e(e) {
            let { open: t } = e;
            t || (Ie(_), Ie(C), (I.current = !0), (M.current = !1));
          }
        }, [a, c]),
          r.useEffect(() => {
            if (!a) return;
            if (!E.current) return;
            if (!n) return;
            function e(e) {
              L() && o(!1, e, "hover");
            }
            const t = m(l.floating).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [l.floating, n, o, a, E, L]);
        const T = r.useCallback(
            function (e, t, n) {
              void 0 === t && (t = !0), void 0 === n && (n = "hover");
              const r = Me(w.current, "close", k.current);
              r && !x.current
                ? (Ie(_), (_.current = window.setTimeout(() => o(!1, e, n), r)))
                : t && (Ie(_), o(!1, e, n));
            },
            [w, o],
          ),
          A = X(() => {
            O.current(), (x.current = void 0);
          }),
          D = X(() => {
            if (S.current) {
              const e = m(l.floating).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(Oe),
                (S.current = !1);
            }
          }),
          P = X(
            () =>
              !!s.current.openEvent &&
              ["click", "mousedown"].includes(s.current.openEvent.type),
          );
        r.useEffect(() => {
          if (a && (0, i.vq)(l.domReference)) {
            var e;
            const o = l.domReference;
            return (
              n && o.addEventListener("mouseleave", c),
              null == (e = l.floating) || e.addEventListener("mouseleave", c),
              g && o.addEventListener("mousemove", t, { once: !0 }),
              o.addEventListener("mouseenter", t),
              o.addEventListener("mouseleave", r),
              () => {
                var e;
                n && o.removeEventListener("mouseleave", c),
                  null == (e = l.floating) ||
                    e.removeEventListener("mouseleave", c),
                  g && o.removeEventListener("mousemove", t),
                  o.removeEventListener("mouseenter", t),
                  o.removeEventListener("mouseleave", r);
              }
            );
          }
          function t(e) {
            if (
              (Ie(_),
              (I.current = !1),
              (h && !p(k.current)) || (v > 0 && !Me(w.current, "open")))
            )
              return;
            const t = Me(w.current, "open", k.current);
            t
              ? (_.current = window.setTimeout(() => {
                  R.current || o(!0, e, "hover");
                }, t))
              : n || o(!0, e, "hover");
          }
          function r(e) {
            if (P()) return;
            O.current();
            const t = m(l.floating);
            if (
              (Ie(C), (M.current = !1), E.current && s.current.floatingContext)
            ) {
              n || Ie(_),
                (x.current = E.current({
                  ...s.current.floatingContext,
                  tree: y,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    D(), A(), P() || T(e, !0, "safe-polygon");
                  },
                }));
              const r = x.current;
              return (
                t.addEventListener("mousemove", r),
                void (O.current = () => {
                  t.removeEventListener("mousemove", r);
                })
              );
            }
            ("touch" !== k.current || !u(l.floating, e.relatedTarget)) && T(e);
          }
          function c(e) {
            P() ||
              (s.current.floatingContext &&
                (null == E.current ||
                  E.current({
                    ...s.current.floatingContext,
                    tree: y,
                    x: e.clientX,
                    y: e.clientY,
                    onClose() {
                      D(), A(), P() || T(e);
                    },
                  })(e)));
          }
        }, [l, a, e, h, v, g, T, A, D, o, n, R, y, w, E, s, P]),
          ae(() => {
            var e;
            if (
              a &&
              n &&
              null != (e = E.current) &&
              e.__options.blockPointerEvents &&
              L()
            ) {
              S.current = !0;
              const e = l.floating;
              if ((0, i.vq)(l.domReference) && e) {
                var t;
                const n = m(l.floating).body;
                n.setAttribute(Oe, "");
                const r = l.domReference,
                  o =
                    null == y ||
                    null == (t = y.nodesRef.current.find((e) => e.id === b)) ||
                    null == (t = t.context)
                      ? void 0
                      : t.elements.floating;
                return (
                  o && (o.style.pointerEvents = ""),
                  (n.style.pointerEvents = "none"),
                  (r.style.pointerEvents = "auto"),
                  (e.style.pointerEvents = "auto"),
                  () => {
                    (n.style.pointerEvents = ""),
                      (r.style.pointerEvents = ""),
                      (e.style.pointerEvents = "");
                  }
                );
              }
            }
          }, [a, n, b, l, y, E, L]),
          ae(() => {
            n || ((k.current = void 0), (M.current = !1), A(), D());
          }, [n, A, D]),
          r.useEffect(
            () => () => {
              A(), Ie(_), Ie(C), D();
            },
            [a, l.domReference, A, D],
          );
        const N = r.useMemo(() => {
            function e(e) {
              k.current = e.pointerType;
            }
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                const { nativeEvent: t } = e;
                function r() {
                  I.current || R.current || o(!0, t, "hover");
                }
                (h && !p(k.current)) ||
                  n ||
                  0 === v ||
                  (M.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                  (Ie(C),
                  "touch" === k.current
                    ? r()
                    : ((M.current = !0),
                      (C.current = window.setTimeout(r, v))));
              },
            };
          }, [h, o, n, R, v]),
          q = r.useMemo(
            () => ({
              onMouseEnter() {
                Ie(_);
              },
              onMouseLeave(e) {
                P() || T(e.nativeEvent, !1);
              },
            }),
            [T, P],
          );
        return r.useMemo(
          () => (a ? { reference: N, floating: q } : {}),
          [a, N, q],
        );
      }
      let Te = 0;
      function Ae(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = t;
        r && cancelAnimationFrame(Te);
        const i = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? i() : (Te = requestAnimationFrame(i));
      }
      function De(e, t) {
        var n;
        let r = [],
          o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
        for (; o; ) {
          const t = e.find((e) => e.id === o);
          (o = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
        }
        return r;
      }
      function Pe(e, t) {
        let n = e.filter((e) => {
            var n;
            return (
              e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
            );
          }),
          r = n;
        for (; r.length; )
          (r = e.filter((e) => {
            var t;
            return null == (t = r)
              ? void 0
              : t.some((t) => {
                  var n;
                  return (
                    e.parentId === t.id &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                });
          })),
            (n = n.concat(r));
        return n;
      }
      let Ne = new WeakMap(),
        qe = new WeakSet(),
        Fe = {},
        je = 0;
      const Ue = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        Ke = (e) => e && (e.host || Ke(e.parentNode)),
        ze = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = Ke(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function Be(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = m(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            s = r ? "inert" : n ? "aria-hidden" : null,
            u = ze(t, e),
            c = new Set(),
            l = new Set(u),
            a = [];
          Fe[o] || (Fe[o] = new WeakMap());
          const f = Fe[o];
          return (
            u.forEach(function e(t) {
              t && !c.has(t) && (c.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !l.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, i.mq)(t))
                    if (c.has(t)) e(t);
                    else {
                      const e = s ? t.getAttribute(s) : null,
                        n = null !== e && "false" !== e,
                        r = Ne.get(t) || 0,
                        i = s ? r + 1 : r,
                        u = (f.get(t) || 0) + 1;
                      Ne.set(t, i),
                        f.set(t, u),
                        a.push(t),
                        1 === i && n && qe.add(t),
                        1 === u && t.setAttribute(o, ""),
                        !n && s && t.setAttribute(s, "true");
                    }
                });
            })(t),
            c.clear(),
            je++,
            () => {
              a.forEach((e) => {
                const t = Ne.get(e) || 0,
                  n = s ? t - 1 : t,
                  r = (f.get(e) || 0) - 1;
                Ne.set(e, n),
                  f.set(e, r),
                  n || (!qe.has(e) && s && e.removeAttribute(s), qe.delete(e)),
                  r || e.removeAttribute(o);
              }),
                je--,
                je ||
                  ((Ne = new WeakMap()),
                  (Ne = new WeakMap()),
                  (qe = new WeakSet()),
                  (Fe = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const We = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function He(e, t) {
        const n = B(e, We());
        "prev" === t && n.reverse();
        const r = n.indexOf(s(m(e)));
        return n.slice(r + 1)[0];
      }
      function Qe() {
        return He(document.body, "next");
      }
      function Ye() {
        return He(document.body, "prev");
      }
      function $e(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !u(n, r);
      }
      const Xe = {
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
        Ve = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          ae(() => {
            d() && o("button");
          }, []);
          const i = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [Ce("focus-guard")]: "",
            style: Xe,
          };
          return (0, k.jsx)("span", { ...e, ...i });
        }),
        Je = r.createContext(null);
      const Ge = () => r.useContext(Je),
        Ze = "data-floating-ui-focusable";
      function et(e) {
        return e
          ? e.hasAttribute(Ze)
            ? e
            : e.querySelector("[" + Ze + "]") || e
          : null;
      }
      function tt(e) {
        return r.useMemo(
          () => (t) => {
            e.forEach((e) => {
              e && (e.current = t);
            });
          },
          e,
        );
      }
      const nt = 20;
      let rt = [];
      function ot() {
        return rt
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const it = r.forwardRef(function (e, t) {
        return (0, k.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: Xe,
        });
      });
      function st(e) {
        const {
            context: t,
            children: n,
            disabled: o = !1,
            order: c = ["content"],
            guards: l = !0,
            initialFocus: d = 0,
            returnFocus: h = !0,
            restoreFocus: p = !1,
            modal: v = !0,
            visuallyHiddenDismiss: y = !1,
            closeOnFocusOut: b = !0,
            outsideElementsInert: R = !1,
          } = e,
          {
            open: _,
            onOpenChange: x,
            events: C,
            dataRef: I,
            elements: { domReference: S, floating: O },
          } = t,
          M = X(() => {
            var e;
            return null == (e = I.current.floatingContext) ? void 0 : e.nodeId;
          }),
          L = "number" == typeof d && d < 0,
          T = w(S) && L,
          A = Ue(),
          D = !A || l,
          P = !D || (A && R),
          N = Se(c),
          q = Se(d),
          F = Se(h),
          j = xe(),
          U = Ge(),
          K = r.useRef(null),
          z = r.useRef(null),
          H = r.useRef(!1),
          Q = r.useRef(!1),
          Y = r.useRef(-1),
          $ = null != U,
          V = et(O),
          J = X(function (e) {
            return void 0 === e && (e = V), e ? B(e, We()) : [];
          }),
          G = X((e) => {
            const t = J(e);
            return N.current
              .map((e) =>
                S && "reference" === e ? S : V && "floating" === e ? V : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!v) return;
          function e(e) {
            if ("Tab" === e.key) {
              u(V, s(m(V))) && 0 === J().length && !T && E(e);
              const t = G(),
                n = g(e);
              "reference" === N.current[0] &&
                n === S &&
                (E(e), e.shiftKey ? Ae(t[t.length - 1]) : Ae(t[1])),
                "floating" === N.current[1] &&
                  n === V &&
                  e.shiftKey &&
                  (E(e), Ae(t[0]));
            }
          }
          const t = m(V);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, S, V, v, N, T, J, G]),
          r.useEffect(() => {
            if (!o && O)
              return (
                O.addEventListener("focusin", e),
                () => {
                  O.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = g(e),
                n = J().indexOf(t);
              -1 !== n && (Y.current = n);
            }
          }, [o, O, J]),
          r.useEffect(() => {
            if (!o && b)
              return O && (0, i.sb)(S)
                ? (S.addEventListener("focusout", t),
                  S.addEventListener("pointerdown", e),
                  O.addEventListener("focusout", t),
                  () => {
                    S.removeEventListener("focusout", t),
                      S.removeEventListener("pointerdown", e),
                      O.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (Q.current = !0),
                setTimeout(() => {
                  Q.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = M(),
                  r = !(
                    u(S, t) ||
                    u(O, t) ||
                    u(t, O) ||
                    u(null == U ? void 0 : U.portalNode, t) ||
                    (null != t && t.hasAttribute(Ce("focus-guard"))) ||
                    (j &&
                      (Pe(j.nodesRef.current, n).find((e) => {
                        var n, r;
                        return (
                          u(
                            null == (n = e.context)
                              ? void 0
                              : n.elements.floating,
                            t,
                          ) ||
                          u(
                            null == (r = e.context)
                              ? void 0
                              : r.elements.domReference,
                            t,
                          )
                        );
                      }) ||
                        De(j.nodesRef.current, n).find((e) => {
                          var n, r, o;
                          return (
                            [
                              null == (n = e.context)
                                ? void 0
                                : n.elements.floating,
                              et(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.floating,
                              ),
                            ].includes(t) ||
                            (null == (o = e.context)
                              ? void 0
                              : o.elements.domReference) === t
                          );
                        })))
                  );
                if (p && r && s(m(V)) === m(V).body) {
                  (0, i.sb)(V) && V.focus();
                  const e = Y.current,
                    t = J(),
                    n = t[e] || t[t.length - 1] || V;
                  (0, i.sb)(n) && n.focus();
                }
                (!T && v) ||
                  !t ||
                  !r ||
                  Q.current ||
                  t === ot() ||
                  ((H.current = !0), x(!1, e, "focus-out"));
              });
            }
          }, [o, S, O, V, v, j, U, x, b, p, J, T, M]);
        const Z = r.useRef(null),
          ee = r.useRef(null),
          te = tt([Z, null == U ? void 0 : U.beforeInsideRef]),
          ne = tt([ee, null == U ? void 0 : U.afterInsideRef]);
        function re(e) {
          return !o && y && v
            ? (0, k.jsx)(it, {
                ref: "start" === e ? K : z,
                onClick: (e) => x(!1, e.nativeEvent),
                children: "string" == typeof y ? y : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!O) return;
          const t = Array.from(
              (null == U || null == (e = U.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Ce("portal") + "]")) || [],
            ),
            n =
              j && !v
                ? De(null == j ? void 0 : j.nodesRef.current, M()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              O,
              ...t,
              ...n,
              K.current,
              z.current,
              Z.current,
              ee.current,
              null == U ? void 0 : U.beforeOutsideRef.current,
              null == U ? void 0 : U.afterOutsideRef.current,
              N.current.includes("reference") || T ? S : null,
            ].filter((e) => null != e),
            i = v || T ? Be(r, !P, P) : Be(r);
          return () => {
            i();
          };
        }, [o, S, O, v, N, U, T, D, P, j, M]),
          ae(() => {
            if (o || !(0, i.sb)(V)) return;
            const e = s(m(V));
            queueMicrotask(() => {
              const t = G(V),
                n = q.current,
                r = ("number" == typeof n ? t[n] : n.current) || V,
                o = u(V, e);
              L || o || !_ || Ae(r, { preventScroll: r === V });
            });
          }, [o, _, V, L, G, q]),
          ae(() => {
            if (o || !V) return;
            let e = !1,
              t = !1;
            const n = m(V),
              r = s(n);
            let c = I.current.openEvent;
            var l;
            function d(n) {
              let { open: r, reason: o, event: i, nested: s } = n;
              if (
                (r && (c = i),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === i.type &&
                  (H.current = !0),
                "outside-press" === o)
              )
                if (s) (H.current = !1), (e = !0);
                else if (a(i) || f(i)) H.current = !1;
                else {
                  let t = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (t = !0), !1;
                    },
                  }),
                    t ? ((H.current = !1), (e = !0)) : (H.current = !0);
                }
            }
            (l = r),
              (rt = rt.filter((e) => e.isConnected)),
              l &&
                "body" !== (0, i.mq)(l) &&
                (rt.push(l), rt.length > nt && (rt = rt.slice(-nt))),
              C.on("openchange", d);
            const h = n.createElement("span");
            return (
              h.setAttribute("tabindex", "-1"),
              h.setAttribute("aria-hidden", "true"),
              Object.assign(h.style, Xe),
              $ && S && S.insertAdjacentElement("afterend", h),
              () => {
                C.off("openchange", d);
                const r = s(n),
                  o =
                    u(O, r) ||
                    (j &&
                      Pe(j.nodesRef.current, M()).some((e) => {
                        var t;
                        return u(
                          null == (t = e.context)
                            ? void 0
                            : t.elements.floating,
                          r,
                        );
                      }));
                (o || (c && ["click", "mousedown"].includes(c.type))) &&
                  (t = !0);
                const l =
                  "boolean" == typeof F.current
                    ? t && S
                      ? S
                      : ot() || h
                    : F.current.current || h;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = We();
                    return W(e, t) ? e : B(e, t)[0] || e;
                  })(l);
                  F.current &&
                    !H.current &&
                    (0, i.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    h.remove();
                });
              }
            );
          }, [o, O, V, F, I, C, j, $, S, M]),
          r.useEffect(() => {
            queueMicrotask(() => {
              H.current = !1;
            });
          }, [o]),
          ae(() => {
            if (!o && U)
              return (
                U.setFocusManagerState({
                  modal: v,
                  closeOnFocusOut: b,
                  open: _,
                  onOpenChange: x,
                  domReference: S,
                }),
                () => {
                  U.setFocusManagerState(null);
                }
              );
          }, [o, U, v, _, x, b, S]),
          ae(() => {
            if (o) return;
            if (!V) return;
            if ("function" != typeof MutationObserver) return;
            if (L) return;
            const e = () => {
              const e = V.getAttribute("tabindex"),
                t = J(),
                n = s(m(O)),
                r = t.indexOf(n);
              -1 !== r && (Y.current = r),
                N.current.includes("floating") || (n !== S && 0 === t.length)
                  ? "0" !== e && V.setAttribute("tabindex", "0")
                  : "-1" !== e && V.setAttribute("tabindex", "-1");
            };
            e();
            const t = new MutationObserver(e);
            return (
              t.observe(V, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                t.disconnect();
              }
            );
          }, [o, O, V, S, N, J, L]);
        const oe = !o && D && (!v || !T) && ($ || v);
        return (0, k.jsxs)(k.Fragment, {
          children: [
            oe &&
              (0, k.jsx)(Ve, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (v) {
                    const e = G();
                    Ae("reference" === c[0] ? e[0] : e[e.length - 1]);
                  } else if (null != U && U.preserveTabOrder && U.portalNode)
                    if (((H.current = !1), $e(e, U.portalNode))) {
                      const e = Qe() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = U.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !T && re("start"),
            n,
            re("end"),
            oe &&
              (0, k.jsx)(Ve, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (v) Ae(G()[0]);
                  else if (null != U && U.preserveTabOrder && U.portalNode)
                    if ((b && (H.current = !0), $e(e, U.portalNode))) {
                      const e = Ye() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = U.afterOutsideRef.current) || t.focus();
                    }
                },
              }),
          ],
        });
      }
      function ut(e) {
        return (0, i.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function ct(e) {
        return b(e);
      }
      function lt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: i,
            elements: { domReference: s },
          } = e,
          {
            enabled: u = !0,
            event: c = "click",
            toggle: l = !0,
            ignoreMouse: a = !1,
            keyboardHandlers: f = !0,
            stickIfOpen: d = !0,
          } = t,
          h = r.useRef(),
          m = r.useRef(!1),
          v = r.useMemo(
            () => ({
              onPointerDown(e) {
                h.current = e.pointerType;
              },
              onMouseDown(e) {
                const t = h.current;
                0 === e.button &&
                  "click" !== c &&
                  ((p(t, !0) && a) ||
                    (!n ||
                    !l ||
                    (i.current.openEvent &&
                      d &&
                      "mousedown" !== i.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = h.current;
                "mousedown" === c && h.current
                  ? (h.current = void 0)
                  : (p(t, !0) && a) ||
                    (!n ||
                    !l ||
                    (i.current.openEvent &&
                      d &&
                      "click" !== i.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (h.current = void 0),
                  e.defaultPrevented ||
                    !f ||
                    ut(e) ||
                    (" " !== e.key ||
                      ct(s) ||
                      (e.preventDefault(), (m.current = !0)),
                    "Enter" === e.key && o(!n || !l, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  ut(e) ||
                  ct(s) ||
                  (" " === e.key &&
                    m.current &&
                    ((m.current = !1), o(!n || !l, e.nativeEvent, "click")));
              },
            }),
            [i, s, c, a, f, o, n, d, l],
          );
        return r.useMemo(() => (u ? { reference: v } : {}), [u, v]);
      }
      const at = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        ft = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        dt = (e) => {
          var t, n;
          return {
            escapeKey:
              "boolean" == typeof e
                ? e
                : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress:
              "boolean" == typeof e
                ? e
                : null == (n = null == e ? void 0 : e.outsidePress) || n,
          };
        };
      function ht(e, t) {
        void 0 === t && (t = {});
        const { open: n, onOpenChange: o, elements: s, dataRef: c } = e,
          {
            enabled: l = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: h = !1,
            referencePressEvent: p = "pointerdown",
            ancestorScroll: y = !1,
            bubbles: b,
            capture: E,
          } = t,
          w = xe(),
          R = X("function" == typeof f ? f : () => !1),
          k = "function" == typeof f ? R : f,
          _ = r.useRef(!1),
          x = r.useRef(!1),
          { escapeKey: C, outsidePress: I } = dt(b),
          { escapeKey: S, outsidePress: O } = dt(E),
          M = r.useRef(!1),
          L = X((e) => {
            var t;
            if (!n || !l || !a || "Escape" !== e.key) return;
            if (M.current) return;
            const r =
                null == (t = c.current.floatingContext) ? void 0 : t.nodeId,
              i = w ? Pe(w.nodesRef.current, r) : [];
            if (!C && (e.stopPropagation(), i.length > 0)) {
              let e = !0;
              if (
                (i.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__escapeKeyBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(
              !1,
              (function (e) {
                return "nativeEvent" in e;
              })(e)
                ? e.nativeEvent
                : e,
              "escape-key",
            );
          }),
          T = X((e) => {
            var t;
            const n = () => {
              var t;
              L(e), null == (t = g(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = g(e)) || t.addEventListener("keydown", n);
          }),
          A = X((e) => {
            var t;
            const n = _.current;
            _.current = !1;
            const r = x.current;
            if (((x.current = !1), "click" === d && r)) return;
            if (n) return;
            if ("function" == typeof k && !k(e)) return;
            const l = g(e),
              a = "[" + Ce("inert") + "]",
              f = m(s.floating).querySelectorAll(a);
            let h = (0, i.vq)(l) ? l : null;
            for (; h && !(0, i.eu)(h); ) {
              const e = (0, i.$4)(h);
              if ((0, i.eu)(e) || !(0, i.vq)(e)) break;
              h = e;
            }
            if (
              f.length &&
              (0, i.vq)(l) &&
              !l.matches("html,body") &&
              !u(l, s.floating) &&
              Array.from(f).every((e) => !u(h, e))
            )
              return;
            if ((0, i.sb)(l) && N) {
              const t = (0, i.eu)(l),
                n = (0, i.L9)(l),
                r = /auto|scroll/,
                o = t || r.test(n.overflowX),
                s = t || r.test(n.overflowY),
                u = o && l.clientWidth > 0 && l.scrollWidth > l.clientWidth,
                c = s && l.clientHeight > 0 && l.scrollHeight > l.clientHeight,
                a = "rtl" === n.direction,
                f =
                  c &&
                  (a
                    ? e.offsetX <= l.offsetWidth - l.clientWidth
                    : e.offsetX > l.clientWidth),
                d = u && e.offsetY > l.clientHeight;
              if (f || d) return;
            }
            const p =
                null == (t = c.current.floatingContext) ? void 0 : t.nodeId,
              y =
                w &&
                Pe(w.nodesRef.current, p).some((t) => {
                  var n;
                  return v(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (v(e, s.floating) || v(e, s.domReference) || y) return;
            const b = w ? Pe(w.nodesRef.current, p) : [];
            if (b.length > 0) {
              let e = !0;
              if (
                (b.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__outsidePressBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(!1, e, "outside-press");
          }),
          D = X((e) => {
            var t;
            const n = () => {
              var t;
              A(e), null == (t = g(e)) || t.removeEventListener(d, n);
            };
            null == (t = g(e)) || t.addEventListener(d, n);
          });
        r.useEffect(() => {
          if (!n || !l) return;
          (c.current.__escapeKeyBubbles = C),
            (c.current.__outsidePressBubbles = I);
          let e = -1;
          function t(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (M.current = !0);
          }
          function u() {
            e = window.setTimeout(
              () => {
                M.current = !1;
              },
              (0, i.Tc)() ? 5 : 0,
            );
          }
          const f = m(s.floating);
          a &&
            (f.addEventListener("keydown", S ? T : L, S),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", u)),
            k && f.addEventListener(d, O ? D : A, O);
          let h = [];
          return (
            y &&
              ((0, i.vq)(s.domReference) && (h = (0, i.v9)(s.domReference)),
              (0, i.vq)(s.floating) && (h = h.concat((0, i.v9)(s.floating))),
              !(0, i.vq)(s.reference) &&
                s.reference &&
                s.reference.contextElement &&
                (h = h.concat((0, i.v9)(s.reference.contextElement)))),
            (h = h.filter((e) => {
              var t;
              return (
                e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport)
              );
            })),
            h.forEach((e) => {
              e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
              a &&
                (f.removeEventListener("keydown", S ? T : L, S),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", u)),
                k && f.removeEventListener(d, O ? D : A, O),
                h.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [c, s, a, k, d, n, o, y, l, C, I, L, S, T, A, O, D]),
          r.useEffect(() => {
            _.current = !1;
          }, [k, d]);
        const P = r.useMemo(
            () => ({
              onKeyDown: L,
              ...(h && {
                [at[p]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== p && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [L, o, h, p],
          ),
          N = r.useMemo(
            () => ({
              onKeyDown: L,
              onMouseDown() {
                x.current = !0;
              },
              onMouseUp() {
                x.current = !0;
              },
              [ft[d]]: () => {
                _.current = !0;
              },
            }),
            [L, d],
          );
        return r.useMemo(
          () => (l ? { reference: P, floating: N } : {}),
          [l, P, N],
        );
      }
      function pt(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              i = Ee(),
              s = r.useRef({}),
              [u] = r.useState(() => we()),
              c = null != _e(),
              [l, a] = r.useState(o.reference),
              f = X((e, t, r) => {
                (s.current.openEvent = e ? t : void 0),
                  u.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: c,
                  }),
                  null == n || n(e, t, r);
              }),
              d = r.useMemo(() => ({ setPositionReference: a }), []),
              h = r.useMemo(
                () => ({
                  reference: l || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [l, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: s,
                open: t,
                onOpenChange: f,
                elements: h,
                events: u,
                floatingId: i,
                refs: d,
              }),
              [t, f, h, u, i, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || n,
          s = o.elements,
          [u, c] = r.useState(null),
          [l, a] = r.useState(null),
          f = (null == s ? void 0 : s.domReference) || u,
          d = r.useRef(null),
          h = xe();
        ae(() => {
          f && (d.current = f);
        }, [f]);
        const p = (0, H.we)({
            ...e,
            elements: { ...s, ...(l && { reference: l }) },
          }),
          m = r.useCallback(
            (e) => {
              const t = (0, i.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), p.refs.setReference(t);
            },
            [p.refs],
          ),
          v = r.useCallback(
            (e) => {
              ((0, i.vq)(e) || null === e) && ((d.current = e), c(e)),
                ((0, i.vq)(p.refs.reference.current) ||
                  null === p.refs.reference.current ||
                  (null !== e && !(0, i.vq)(e))) &&
                  p.refs.setReference(e);
            },
            [p.refs],
          ),
          g = r.useMemo(
            () => ({
              ...p.refs,
              setReference: v,
              setPositionReference: m,
              domReference: d,
            }),
            [p.refs, v, m],
          ),
          y = r.useMemo(
            () => ({ ...p.elements, domReference: f }),
            [p.elements, f],
          ),
          b = r.useMemo(
            () => ({ ...p, ...o, refs: g, elements: y, nodeId: t }),
            [p, g, y, t, o],
          );
        return (
          ae(() => {
            o.dataRef.current.floatingContext = b;
            const e =
              null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = b);
          }),
          r.useMemo(
            () => ({ ...p, context: b, refs: g, elements: y }),
            [p, g, y, b],
          )
        );
      }
      function mt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            events: l,
            dataRef: a,
            elements: h,
          } = e,
          { enabled: p = !0, visibleOnly: v = !0 } = t,
          y = r.useRef(!1),
          E = r.useRef(-1),
          w = r.useRef(!0);
        r.useEffect(() => {
          if (!p) return;
          const e = (0, i.zk)(h.domReference);
          function t() {
            !n &&
              (0, i.sb)(h.domReference) &&
              h.domReference === s(m(h.domReference)) &&
              (y.current = !0);
          }
          function r() {
            w.current = !0;
          }
          return (
            e.addEventListener("blur", t),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", t),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [h.domReference, n, p]),
          r.useEffect(() => {
            if (p)
              return (
                l.on("openchange", e),
                () => {
                  l.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: t } = e;
              ("reference-press" !== t && "escape-key" !== t) ||
                (y.current = !0);
            }
          }, [l, p]),
          r.useEffect(
            () => () => {
              Ie(E);
            },
            [],
          );
        const R = r.useMemo(
          () => ({
            onPointerDown(e) {
              f(e.nativeEvent) || (w.current = !1);
            },
            onMouseLeave() {
              y.current = !1;
            },
            onFocus(e) {
              if (y.current) return;
              const t = g(e.nativeEvent);
              if (v && (0, i.vq)(t))
                try {
                  if (
                    d() &&
                    c().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!w.current && !b(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              y.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, i.vq)(t) &&
                  t.hasAttribute(Ce("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              E.current = window.setTimeout(() => {
                var e;
                const i = s(
                  h.domReference ? h.domReference.ownerDocument : document,
                );
                (t || i !== h.domReference) &&
                  (u(
                    null == (e = a.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    i,
                  ) ||
                    u(h.domReference, i) ||
                    r ||
                    o(!1, n, "focus"));
              });
            },
          }),
          [a, h.domReference, o, v],
        );
        return r.useMemo(() => (p ? { reference: R } : {}), [p, R]);
      }
      const vt = "active",
        gt = "selected";
      function yt(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let i = e;
        if (o && e) {
          const { [vt]: t, [gt]: n, ...r } = e;
          i = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [Ze]: "" }),
          ...i,
          ...t
            .map((t) => {
              const r = t ? t[n] : null;
              return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, t) =>
                t
                  ? (Object.entries(t).forEach((t) => {
                      let [n, i] = t;
                      var s;
                      (o && [vt, gt].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof i &&
                              (null == (s = r.get(n)) || s.push(i),
                              (e[n] = function () {
                                for (
                                  var e,
                                    t = arguments.length,
                                    o = new Array(t),
                                    i = 0;
                                  i < t;
                                  i++
                                )
                                  o[i] = arguments[i];
                                return null == (e = r.get(n))
                                  ? void 0
                                  : e
                                      .map((e) => e(...o))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[n] = i));
                    }),
                    e)
                  : e,
              {},
            ),
        };
      }
      function bt(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          i = r.useCallback((t) => yt(t, e, "reference"), t),
          s = r.useCallback((t) => yt(t, e, "floating"), n),
          u = r.useCallback((t) => yt(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: i,
            getFloatingProps: s,
            getItemProps: u,
          }),
          [i, s, u],
        );
      }
      const Et = "Escape";
      function wt(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n;
        }
      }
      function Rt(e, t) {
        return wt(t, e === V || e === J, e === G || e === Z);
      }
      function kt(e, t, n) {
        return (
          wt(t, e === J, n ? e === G : e === Z) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function _t(e, t, n) {
        return wt(t, n ? e === G : e === Z, e === J);
      }
      function xt(e, t, n, r) {
        return "both" === t || ("horizontal" === t && r && r > 1)
          ? e === Et
          : wt(t, n ? e === Z : e === G, e === V);
      }
      function Ct(e, t) {
        const { open: n, onOpenChange: o, elements: c } = e,
          {
            listRef: l,
            activeIndex: d,
            onNavigate: h = () => {},
            enabled: p = !0,
            selectedIndex: v = null,
            allowEscape: g = !1,
            loop: y = !1,
            nested: b = !1,
            rtl: R = !1,
            virtual: k = !1,
            focusItemOnOpen: _ = "auto",
            focusItemOnHover: x = !0,
            openOnArrowKeyDown: C = !0,
            disabledIndices: I,
            orientation: S = "vertical",
            cols: O = 1,
            scrollItemIntoView: M = !0,
            virtualItemRef: L,
            itemSizes: T,
            dense: A = !1,
          } = t;
        const D = Se(et(c.floating)),
          P = _e(),
          N = xe();
        ae(() => {
          e.dataRef.current.orientation = S;
        }, [e, S]);
        const q = X(() => {
            h(-1 === U.current ? null : U.current);
          }),
          F = w(c.domReference),
          j = r.useRef(_),
          U = r.useRef(null != v ? v : -1),
          K = r.useRef(null),
          z = r.useRef(!0),
          B = r.useRef(q),
          W = r.useRef(!!c.floating),
          H = r.useRef(n),
          Q = r.useRef(!1),
          Y = r.useRef(!1),
          $ = Se(I),
          V = Se(n),
          ee = Se(M),
          fe = Se(v),
          [de, he] = r.useState(),
          [pe, me] = r.useState(),
          ve = X(() => {
            function e(e) {
              k
                ? (he(e.id),
                  null == N || N.events.emit("virtualfocus", e),
                  L && (L.current = e))
                : Ae(e, { sync: Q.current, preventScroll: !0 });
            }
            const t = l.current[U.current];
            t && e(t);
            (Q.current ? (e) => e() : requestAnimationFrame)(() => {
              const n = l.current[U.current] || t;
              if (!n) return;
              t || e(n);
              const r = ee.current;
              r &&
                ye &&
                (Y.current || !z.current) &&
                (null == n.scrollIntoView ||
                  n.scrollIntoView(
                    "boolean" == typeof r
                      ? { block: "nearest", inline: "nearest" }
                      : r,
                  ));
            });
          });
        ae(() => {
          p &&
            (n && c.floating
              ? j.current &&
                null != v &&
                ((Y.current = !0), (U.current = v), q())
              : W.current && ((U.current = -1), B.current()));
        }, [p, n, c.floating, v, q]),
          ae(() => {
            if (p && n && c.floating)
              if (null == d) {
                if (((Q.current = !1), null != fe.current)) return;
                if (
                  (W.current && ((U.current = -1), ve()),
                  (!H.current || !W.current) &&
                    j.current &&
                    (null != K.current ||
                      (!0 === j.current && null == K.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    if (null == l.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(t);
                      }
                      e++;
                    } else
                      (U.current =
                        null == K.current || kt(K.current, S, R) || b
                          ? ne(l, $.current)
                          : re(l, $.current)),
                        (K.current = null),
                        q();
                  };
                  t();
                }
              } else te(l, d) || ((U.current = d), ve(), (Y.current = !1));
          }, [p, n, c.floating, d, fe, b, l, S, R, q, ve, $]),
          ae(() => {
            var e;
            if (!p || c.floating || !N || k || !W.current) return;
            const t = N.nodesRef.current,
              n =
                null == (e = t.find((e) => e.id === P)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = s(m(c.floating)),
              o = t.some((e) => e.context && u(e.context.elements.floating, r));
            n && !o && z.current && n.focus({ preventScroll: !0 });
          }, [p, c.floating, N, P, k]),
          ae(() => {
            if (p && N && k && !P)
              return (
                N.events.on("virtualfocus", e),
                () => {
                  N.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              me(e.id), L && (L.current = e);
            }
          }, [p, N, k, P, L]),
          ae(() => {
            (B.current = q), (H.current = n), (W.current = !!c.floating);
          }),
          ae(() => {
            n || (K.current = null);
          }, [n]);
        const ge = null != d,
          ye = r.useMemo(() => {
            function e(e) {
              if (!n) return;
              const t = l.current.indexOf(e);
              -1 !== t && U.current !== t && ((U.current = t), q());
            }
            return {
              onFocus(t) {
                let { currentTarget: n } = t;
                (Q.current = !0), e(n);
              },
              onClick: (e) => {
                let { currentTarget: t } = e;
                return t.focus({ preventScroll: !0 });
              },
              ...(x && {
                onMouseMove(t) {
                  let { currentTarget: n } = t;
                  (Q.current = !0), (Y.current = !1), e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  var n;
                  z.current &&
                    "touch" !== t &&
                    ((Q.current = !0),
                    (U.current = -1),
                    q(),
                    k ||
                      null == (n = D.current) ||
                      n.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [n, D, x, l, q, k]),
          be = X((e) => {
            if (((z.current = !1), (Q.current = !0), 229 === e.which)) return;
            if (!V.current && e.currentTarget === D.current) return;
            if (b && xt(e.key, S, R, O))
              return (
                E(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, i.sb)(c.domReference) &&
                  (k
                    ? null == N || N.events.emit("virtualfocus", c.domReference)
                    : c.domReference.focus())
                )
              );
            const t = U.current,
              r = ne(l, I),
              u = re(l, I);
            if (
              (F ||
                ("Home" === e.key && (E(e), (U.current = r), q()),
                "End" === e.key && (E(e), (U.current = u), q())),
              O > 1)
            ) {
              const t =
                  T ||
                  Array.from({ length: l.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                n = se(t, O, A),
                o = n.findIndex((e) => null != e && !le(l.current, e, I)),
                i = n.reduce(
                  (e, t, n) => (null == t || le(l.current, t, I) ? e : n),
                  -1,
                ),
                s =
                  n[
                    ie(
                      {
                        current: n.map((e) =>
                          null != e ? l.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: S,
                        loop: y,
                        rtl: R,
                        cols: O,
                        disabledIndices: ce(
                          [
                            ...(I ||
                              l.current.map((e, t) =>
                                le(l.current, t) ? t : void 0,
                              )),
                            void 0,
                          ],
                          n,
                        ),
                        minIndex: o,
                        maxIndex: i,
                        prevIndex: ue(
                          U.current > u ? r : U.current,
                          t,
                          n,
                          O,
                          e.key === J
                            ? "bl"
                            : e.key === (R ? G : Z)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != s && ((U.current = s), q()), "both" === S)) return;
            }
            if (Rt(e.key, S)) {
              if (
                (E(e),
                n && !k && s(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (U.current = kt(e.key, S, R) ? r : u), void q();
              kt(e.key, S, R)
                ? (U.current = y
                    ? t >= u
                      ? g && t !== l.current.length
                        ? -1
                        : r
                      : oe(l, { startingIndex: t, disabledIndices: I })
                    : Math.min(
                        u,
                        oe(l, { startingIndex: t, disabledIndices: I }),
                      ))
                : (U.current = y
                    ? t <= r
                      ? g && -1 !== t
                        ? l.current.length
                        : u
                      : oe(l, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: I,
                        })
                    : Math.max(
                        r,
                        oe(l, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: I,
                        }),
                      )),
                te(l, U.current) && (U.current = -1),
                q();
            }
          }),
          Ee = r.useMemo(
            () => k && n && ge && { "aria-activedescendant": pe || de },
            [k, n, ge, pe, de],
          ),
          we = r.useMemo(
            () => ({
              "aria-orientation": "both" === S ? void 0 : S,
              ...(F ? {} : Ee),
              onKeyDown: be,
              onPointerMove() {
                z.current = !0;
              },
            }),
            [Ee, be, S, F],
          ),
          Re = r.useMemo(() => {
            function e(e) {
              "auto" === _ && a(e.nativeEvent) && (j.current = !0);
            }
            function t(e) {
              (j.current = _),
                "auto" === _ && f(e.nativeEvent) && (j.current = !0);
            }
            return {
              ...Ee,
              onKeyDown(e) {
                var t;
                z.current = !1;
                const r = e.key.startsWith("Arrow"),
                  i = ["Home", "End"].includes(e.key),
                  s = r || i,
                  u =
                    null == N ||
                    null == (t = N.nodesRef.current.find((e) => e.id === P)) ||
                    null == (t = t.context) ||
                    null == (t = t.dataRef)
                      ? void 0
                      : t.current.orientation,
                  c = _t(e.key, S, R),
                  a = xt(e.key, S, R, O),
                  f = _t(e.key, u, R),
                  d = Rt(e.key, S),
                  h = (b ? f : d) || "Enter" === e.key || "" === e.key.trim();
                if (k && n) {
                  const t =
                      null == N
                        ? void 0
                        : N.nodesRef.current.find((e) => null == e.parentId),
                    n =
                      N && t
                        ? (function (e, t) {
                            let n,
                              r = -1;
                            return (
                              (function t(o, i) {
                                i > r && ((n = o), (r = i)),
                                  Pe(e, o).forEach((e) => {
                                    t(e.id, i + 1);
                                  });
                              })(t, 0),
                              e.find((e) => e.id === n)
                            );
                          })(N.nodesRef.current, t.id)
                        : null;
                  if (s && n && L) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (c || a) {
                      var p, m;
                      const r =
                          (null == (p = n.context)
                            ? void 0
                            : p.elements.domReference) === e.currentTarget,
                        o =
                          a && !r
                            ? null == (m = n.context)
                              ? void 0
                              : m.elements.domReference
                            : c
                              ? l.current.find(
                                  (e) => (null == e ? void 0 : e.id) === de,
                                )
                              : null;
                      o && (E(e), o.dispatchEvent(t), me(void 0));
                    }
                    var g;
                    if ((d || i) && n.context)
                      if (
                        n.context.open &&
                        n.parentId &&
                        e.currentTarget !== n.context.elements.domReference
                      )
                        return (
                          E(e),
                          void (
                            null == (g = n.context.elements.domReference) ||
                            g.dispatchEvent(t)
                          )
                        );
                  }
                  return be(e);
                }
                if (n || C || !r) {
                  if (h) {
                    const t = Rt(e.key, u);
                    K.current = b && t ? null : e.key;
                  }
                  b
                    ? f &&
                      (E(e),
                      n
                        ? ((U.current = ne(l, $.current)), q())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : d &&
                      (null != v && (U.current = v),
                      E(e),
                      !n && C ? o(!0, e.nativeEvent, "list-navigation") : be(e),
                      n && q());
                }
              },
              onFocus() {
                n && !k && ((U.current = -1), q());
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e,
            };
          }, [de, Ee, O, be, $, _, l, b, q, o, n, C, S, P, R, v, N, k, L]);
        return r.useMemo(
          () => (p ? { reference: Re, floating: we, item: ye } : {}),
          [p, Re, we, ye],
        );
      }
      const It = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function St(e, t) {
        var n;
        void 0 === t && (t = {});
        const { open: o, floatingId: i } = e,
          { enabled: s = !0, role: u = "dialog" } = t,
          c = null != (n = It.get(u)) ? n : u,
          l = Ee(),
          a = null != _e(),
          f = r.useMemo(
            () =>
              "tooltip" === c || "label" === u
                ? {
                    ["aria-" + ("label" === u ? "labelledby" : "describedby")]:
                      o ? i : void 0,
                  }
                : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === c ? "dialog" : c,
                    "aria-controls": o ? i : void 0,
                    ...("listbox" === c && { role: "combobox" }),
                    ...("menu" === c && { id: l }),
                    ...("menu" === c && a && { role: "menuitem" }),
                    ...("select" === u && { "aria-autocomplete": "none" }),
                    ...("combobox" === u && { "aria-autocomplete": "list" }),
                  },
            [c, i, a, o, l, u],
          ),
          d = r.useMemo(() => {
            const e = { id: i, ...(c && { role: c }) };
            return "tooltip" === c || "label" === u
              ? e
              : { ...e, ...("menu" === c && { "aria-labelledby": l }) };
          }, [c, i, l, u]),
          h = r.useCallback(
            (e) => {
              let { active: t, selected: n } = e;
              const r = { role: "option", ...(t && { id: i + "-option" }) };
              switch (u) {
                case "select":
                  return { ...r, "aria-selected": t && n };
                case "combobox":
                  return { ...r, ...(t && { "aria-selected": !0 }) };
              }
              return {};
            },
            [i, u],
          );
        return r.useMemo(
          () => (s ? { reference: f, floating: d, item: h } : {}),
          [s, f, d, h],
        );
      }
      function Ot(e, t) {
        var n;
        const { open: o, dataRef: i } = e,
          {
            listRef: s,
            activeIndex: u,
            onMatch: c,
            onTypingChange: l,
            enabled: a = !0,
            findMatch: f = null,
            resetMs: d = 750,
            ignoreKeys: h = [],
            selectedIndex: p = null,
          } = t,
          m = r.useRef(-1),
          v = r.useRef(""),
          g = r.useRef(null != (n = null != p ? p : u) ? n : -1),
          y = r.useRef(null),
          b = X(c),
          w = X(l),
          R = Se(f),
          k = Se(h);
        ae(() => {
          o && (Ie(m), (y.current = null), (v.current = ""));
        }, [o]),
          ae(() => {
            var e;
            o &&
              "" === v.current &&
              (g.current = null != (e = null != p ? p : u) ? e : -1);
          }, [o, p, u]);
        const _ = X((e) => {
            e
              ? i.current.typing || ((i.current.typing = e), w(e))
              : i.current.typing && ((i.current.typing = e), w(e));
          }),
          x = X((e) => {
            function t(e, t, n) {
              const r = R.current
                ? R.current(t, n)
                : t.find(
                    (e) =>
                      0 ===
                      (null == e
                        ? void 0
                        : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())),
                  );
              return r ? e.indexOf(r) : -1;
            }
            const n = s.current;
            if (
              (v.current.length > 0 &&
                " " !== v.current[0] &&
                (-1 === t(n, n, v.current) ? _(!1) : " " === e.key && E(e)),
              null == n ||
                k.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (E(e), _(!0));
            n.every((e) => {
              var t, n;
              return (
                !e ||
                (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                  (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
              );
            }) &&
              v.current === e.key &&
              ((v.current = ""), (g.current = y.current)),
              (v.current += e.key),
              Ie(m),
              (m.current = window.setTimeout(() => {
                (v.current = ""), (g.current = y.current), _(!1);
              }, d));
            const r = g.current,
              i = t(
                n,
                [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)],
                v.current,
              );
            -1 !== i
              ? (b(i), (y.current = i))
              : " " !== e.key && ((v.current = ""), _(!1));
          }),
          C = r.useMemo(() => ({ onKeyDown: x }), [x]),
          I = r.useMemo(
            () => ({
              onKeyDown: x,
              onKeyUp(e) {
                " " === e.key && _(!1);
              },
            }),
            [x, _],
          );
        return r.useMemo(
          () => (a ? { reference: C, floating: I } : {}),
          [a, C, I],
        );
      }
      function Mt(e, t) {
        const [n, r] = e;
        let o = !1;
        const i = t.length;
        for (let e = 0, s = i - 1; e < i; s = e++) {
          const [i, u] = t[e] || [0, 0],
            [c, l] = t[s] || [0, 0];
          u >= r != l >= r &&
            n <= ((c - i) * (r - u)) / (l - u) + i &&
            (o = !o);
        }
        return o;
      }
      function Lt(e) {
        void 0 === e && (e = {});
        const {
          buffer: t = 0.5,
          blockPointerEvents: n = !1,
          requireIntent: r = !0,
        } = e;
        let o,
          s = !1,
          c = null,
          l = null,
          a = performance.now();
        const f = (e) => {
          let {
            x: n,
            y: f,
            placement: d,
            elements: h,
            onClose: p,
            nodeId: m,
            tree: v,
          } = e;
          return function (e) {
            function y() {
              clearTimeout(o), p();
            }
            if (
              (clearTimeout(o),
              !h.domReference ||
                !h.floating ||
                null == d ||
                null == n ||
                null == f)
            )
              return;
            const { clientX: b, clientY: E } = e,
              w = [b, E],
              R = g(e),
              k = "mouseleave" === e.type,
              _ = u(h.floating, R),
              x = u(h.domReference, R),
              C = h.domReference.getBoundingClientRect(),
              I = h.floating.getBoundingClientRect(),
              S = d.split("-")[0],
              O = n > I.right - I.width / 2,
              M = f > I.bottom - I.height / 2,
              L = (function (e, t) {
                return (
                  e[0] >= t.x &&
                  e[0] <= t.x + t.width &&
                  e[1] >= t.y &&
                  e[1] <= t.y + t.height
                );
              })(w, C),
              T = I.width > C.width,
              A = I.height > C.height,
              D = (T ? C : I).left,
              P = (T ? C : I).right,
              N = (A ? C : I).top,
              q = (A ? C : I).bottom;
            if (_ && ((s = !0), !k)) return;
            if ((x && (s = !1), x && !k)) return void (s = !0);
            if (
              k &&
              (0, i.vq)(e.relatedTarget) &&
              u(h.floating, e.relatedTarget)
            )
              return;
            if (
              v &&
              Pe(v.nodesRef.current, m).some((e) => {
                let { context: t } = e;
                return null == t ? void 0 : t.open;
              })
            )
              return;
            if (
              ("top" === S && f >= C.bottom - 1) ||
              ("bottom" === S && f <= C.top + 1) ||
              ("left" === S && n >= C.right - 1) ||
              ("right" === S && n <= C.left + 1)
            )
              return y();
            let F = [];
            switch (S) {
              case "top":
                F = [
                  [D, C.top + 1],
                  [D, I.bottom - 1],
                  [P, I.bottom - 1],
                  [P, C.top + 1],
                ];
                break;
              case "bottom":
                F = [
                  [D, I.top + 1],
                  [D, C.bottom - 1],
                  [P, C.bottom - 1],
                  [P, I.top + 1],
                ];
                break;
              case "left":
                F = [
                  [I.right - 1, q],
                  [I.right - 1, N],
                  [C.left + 1, N],
                  [C.left + 1, q],
                ];
                break;
              case "right":
                F = [
                  [C.right - 1, q],
                  [C.right - 1, N],
                  [I.left + 1, N],
                  [I.left + 1, q],
                ];
            }
            if (!Mt([b, E], F)) {
              if (s && !L) return y();
              if (!k && r) {
                const t = (function (e, t) {
                  const n = performance.now(),
                    r = n - a;
                  if (null === c || null === l || 0 === r)
                    return (c = e), (l = t), (a = n), null;
                  const o = e - c,
                    i = t - l,
                    s = Math.sqrt(o * o + i * i);
                  return (c = e), (l = t), (a = n), s / r;
                })(e.clientX, e.clientY);
                if (null !== t && t < 0.1) return y();
              }
              Mt(
                [b, E],
                (function (e) {
                  let [n, r] = e;
                  switch (S) {
                    case "top":
                      return [
                        [T ? n + t / 2 : O ? n + 4 * t : n - 4 * t, r + t + 1],
                        [T ? n - t / 2 : O ? n + 4 * t : n - 4 * t, r + t + 1],
                        ...[
                          [I.left, O || T ? I.bottom - t : I.top],
                          [
                            I.right,
                            O ? (T ? I.bottom - t : I.top) : I.bottom - t,
                          ],
                        ],
                      ];
                    case "bottom":
                      return [
                        [T ? n + t / 2 : O ? n + 4 * t : n - 4 * t, r - t],
                        [T ? n - t / 2 : O ? n + 4 * t : n - 4 * t, r - t],
                        ...[
                          [I.left, O || T ? I.top + t : I.bottom],
                          [I.right, O ? (T ? I.top + t : I.bottom) : I.top + t],
                        ],
                      ];
                    case "left": {
                      const e = [
                          n + t + 1,
                          A ? r + t / 2 : M ? r + 4 * t : r - 4 * t,
                        ],
                        o = [
                          n + t + 1,
                          A ? r - t / 2 : M ? r + 4 * t : r - 4 * t,
                        ];
                      return [
                        ...[
                          [M || A ? I.right - t : I.left, I.top],
                          [
                            M ? (A ? I.right - t : I.left) : I.right - t,
                            I.bottom,
                          ],
                        ],
                        e,
                        o,
                      ];
                    }
                    case "right":
                      return [
                        [n - t, A ? r + t / 2 : M ? r + 4 * t : r - 4 * t],
                        [n - t, A ? r - t / 2 : M ? r + 4 * t : r - 4 * t],
                        ...[
                          [M || A ? I.left + t : I.right, I.top],
                          [
                            M ? (A ? I.left + t : I.right) : I.left + t,
                            I.bottom,
                          ],
                        ],
                      ];
                  }
                })([n, f]),
              )
                ? !s && r && (o = window.setTimeout(y, 40))
                : y();
            }
          };
        };
        return (f.__options = { blockPointerEvents: n }), f;
      }
    },
    54806: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => v });
      var r = n(90626),
        o = n(86709),
        i = n(45747),
        s = n(74500),
        u = n(57168);
      function c(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var l = class extends s.Q {
          #e;
          #t;
          #n;
          #r;
          #o;
          #i;
          #s;
          #u;
          constructor(e, t, n) {
            super(),
              (this.#e = e),
              (this.#r = n),
              (this.#n = []),
              (this.#o = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#o.forEach((e) => {
                e.subscribe((t) => {
                  this.#c(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#o.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, n) {
            (this.#n = e),
              (this.#r = t),
              o.j.batch(() => {
                const e = this.#o,
                  t = this.#l(this.#n);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, n),
                );
                const r = t.map((e) => e.observer),
                  o = r.map((e) => e.getCurrentResult()),
                  i = r.some((t, n) => t !== e[n]);
                (e.length !== r.length || i) &&
                  ((this.#o = r),
                  (this.#t = o),
                  this.hasListeners() &&
                    (c(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    c(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#c(e, t);
                      });
                    }),
                    this.#a()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#o.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#o;
          }
          getOptimisticResult(e, t) {
            const n = this.#l(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [n, (e) => this.#f(e ?? n, t), () => this.#d(n, e)];
          }
          #d(e, t) {
            const n = this.#l(t);
            return n.map((t, r) => {
              const o = e[r];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? o
                : t.observer.trackResult(o, (e) => {
                    n.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #f(e, t) {
            return t
              ? ((this.#i && this.#t === this.#u && t === this.#s) ||
                  ((this.#s = t),
                  (this.#u = this.#t),
                  (this.#i = (0, u.BH)(this.#i, t(e)))),
                this.#i)
              : e;
          }
          #l(e) {
            const t = new Map(this.#o.map((e) => [e.options.queryHash, e])),
              n = [];
            return (
              e.forEach((e) => {
                const r = this.#e.defaultQueryOptions(e),
                  o = t.get(r.queryHash);
                o
                  ? n.push({ defaultedQueryOptions: r, observer: o })
                  : n.push({
                      defaultedQueryOptions: r,
                      observer: new i.$(this.#e, r),
                    });
              }),
              n
            );
          }
          #c(e, t) {
            const n = this.#o.indexOf(e);
            -1 !== n &&
              ((this.#t = (function (e, t, n) {
                const r = e.slice(0);
                return (r[t] = n), r;
              })(this.#t, n, t)),
              this.#a());
          }
          #a() {
            if (this.hasListeners()) {
              this.#i !==
                this.#f(this.#d(this.#t, this.#n), this.#r?.combine) &&
                o.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        a = n(75233),
        f = n(22730),
        d = n(43424),
        h = n(19086),
        p = n(44407),
        m = n(19866);
      function v({ queries: e, ...t }, n) {
        const s = (0, a.jE)(n),
          u = (0, f.w)(),
          c = (0, d.h)(),
          v = r.useMemo(
            () =>
              e.map((e) => {
                const t = s.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = u ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, s, u],
          );
        v.forEach((e) => {
          (0, p.jv)(e), (0, h.LJ)(e, c);
        }),
          (0, h.wZ)(c);
        const [g] = r.useState(() => new l(s, v, t)),
          [y, b, E] = g.getOptimisticResult(v, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (u ? m.l : g.subscribe(o.j.batchCalls(e))),
            [g, u],
          ),
          () => g.getCurrentResult(),
          () => g.getCurrentResult(),
        ),
          r.useEffect(() => {
            g.setQueries(v, t, { listeners: !1 });
          }, [v, t, g]);
        const w = y.some((e, t) => (0, p.EU)(v[t], e))
          ? y.flatMap((e, t) => {
              const n = v[t];
              if (n) {
                const t = new i.$(s, n);
                if ((0, p.EU)(n, e)) return (0, p.iL)(n, t, c);
                (0, p.nE)(e, u) && (0, p.iL)(n, t, c);
              }
              return [];
            })
          : [];
        if (w.length > 0) throw Promise.all(w);
        const R = y.find((e, t) => {
          const n = v[t];
          return (
            n &&
            (0, h.$1)({
              result: e,
              errorResetBoundary: c,
              throwOnError: n.throwOnError,
              query: s.getQueryCache().get(n.queryHash),
            })
          );
        });
        if (R?.error) throw R.error;
        return b(E());
      }
    },
  },
]);
