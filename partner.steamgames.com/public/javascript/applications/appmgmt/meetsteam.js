/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    30565: (e) => {
      e.exports = {
        EventList: "_3iKeBOMuwqPC87BLxvCKll",
        EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
        EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
        Title: "_1bLTz07sQnRA0DjTpjXCza",
        StartDate: "_6accgtG1qR7tHFL1wnO58",
        TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
        ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
        CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
        CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
        Full: "ndEhtgivpXhCilYDnAAVe",
        MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
        MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
      };
    },
    34283: (e) => {
      e.exports = { ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_" };
    },
    85761: (e) => {
      e.exports = {
        Ctn: "_8n9wPNrWDu91tlwBW9bHt",
        Indicator: "_355XkH0xfIpJF1YsMX7I7k",
        EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
        EmailField: "_1E-g4exFlAQhvXDqspYTR0",
        RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
        RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
      };
    },
    13038: (e) => {
      e.exports = {
        Ctn: "_1olTwzPkPjzL36u0WgyDG0",
        Indicator: "_3d0cYrmQzzda_P3DQ994kX",
      };
    },
    30603: (e) => {
      e.exports = {
        ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
        Table: "_2JSoC65mCQdxh-B_srjUjf",
      };
    },
    31718: (e) => {
      e.exports = {
        FancyTableRow: "_36QJs1BZ3so19Xl2es3ihH",
        ExpandableRow: "g86xV6xEGOZ54uRvK3oQ4",
        FancyTableHeader: "_2mHaS291U0AFO1q99AVdLy",
        StickyHeader: "_4y4yrbyr89wNqTGLp049k",
        FancyTableCell: "_3m5AH2HSnsvjImS7uUpvxv",
        SortButton: "_2xr81ssapVQO5aalcANmCk",
        ColumnHeader: "_2XdcqH-eLWVp_qatDebc6J",
        ResizeHandle: "USh_UNRX22s8Wml0mCY3M",
        PrevResizeHandle: "_3wzyEuMO8BdQHAkXnneNRR",
        SortIndicator: "_6z0ftV9RCqbZFmC4EOzYZ",
        GroupExpandIndicator: "_3I86V1lT4xbDJ6FDjMIaMq",
        RowGroup: "_uckWydn-lyPGWjFKZ4Tm",
      };
    },
    40323: function (e, t) {
      var n, s, r;
      /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (s = []),
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
            s = !n.document && !!n.postMessage,
            r = n.IS_PAPA_WORKER || !1,
            i = {},
            a = 0,
            o = {};
          function l(e) {
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
                var t = v(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new m(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var s = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < s) {
                  let t = this._config.newline;
                  t ||
                    ((i = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, i))),
                    (e = [...e.split(t).slice(s)].join(t));
                }
                this.isFirstChunk &&
                  S(this._config.beforeFirstChunk) &&
                  void 0 !== (i = this._config.beforeFirstChunk(e)) &&
                  (e = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (s = this._partialLine + e);
                var i =
                  ((this._partialLine = ""),
                  this._handle.parse(s, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = i.meta.cursor),
                    this._finished ||
                      ((this._partialLine = s.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    i && i.data && (this._rowCount += i.data.length),
                    (s =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    r)
                  )
                    n.postMessage({
                      results: i,
                      workerId: o.WORKER_ID,
                      finished: s,
                    });
                  else if (S(this._config.chunk) && !t) {
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
                      !s ||
                      !S(this._config.complete) ||
                      (i && i.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    s || (i && i.meta.paused) || this._nextChunk(),
                    i
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                S(this._config.error)
                  ? this._config.error(e)
                  : r &&
                    this._config.error &&
                    n.postMessage({
                      workerId: o.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function c(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
              l.call(this, e),
              (this._nextChunk = s
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
                    s ||
                      ((t.onload = j(this._chunkLoaded, this)),
                      (t.onerror = j(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !s,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      n = this._config.downloadRequestHeaders;
                    for (e in n) t.setRequestHeader(e, n[e]);
                  }
                  var r;
                  this._config.chunkSize &&
                    ((r = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + r,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  s && 0 === t.status && this._chunkError();
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
          function d(e) {
            (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
              l.call(this, e);
            var t,
              n,
              s = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                s
                  ? (((t = new FileReader()).onload = j(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = j(this._chunkError, this)))
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
                  r =
                    (this._config.chunkSize &&
                      ((r = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = n.call(e, this._start, r))),
                    t.readAsText(e, this._config.encoding));
                s || this._chunkLoaded({ target: { result: r } });
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
          function u(e) {
            var t;
            l.call(this, (e = e || {})),
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
          function h(e) {
            l.call(this, (e = e || {}));
            var t = [],
              n = !0,
              s = !1;
            (this.pause = function () {
              l.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                l.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (e) {
                (this._input = e),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                s && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (n = !0);
              }),
              (this._streamData = j(function (e) {
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
              (this._streamError = j(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = j(function () {
                this._streamCleanUp(), (s = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = j(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function m(e) {
            var t,
              n,
              s,
              r,
              i = Math.pow(2, 53),
              a = -i,
              l = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              c =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              d = this,
              u = 0,
              h = 0,
              m = !1,
              f = !1,
              x = [],
              _ = { data: [], errors: [], meta: {} };
            function j(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function y() {
              if (
                (_ &&
                  s &&
                  (b(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      o.DefaultDelimiter +
                      "'",
                  ),
                  (s = !1)),
                e.skipEmptyLines &&
                  (_.data = _.data.filter(function (e) {
                    return !j(e);
                  })),
                w())
              ) {
                if (_)
                  if (Array.isArray(_.data[0])) {
                    for (var t = 0; w() && t < _.data.length; t++)
                      _.data[t].forEach(n);
                    _.data.splice(0, 1);
                  } else _.data.forEach(n);
                function n(t, n) {
                  S(e.transformHeader) && (t = e.transformHeader(t, n)),
                    x.push(t);
                }
              }
              function r(t, n) {
                for (var s = e.header ? {} : [], r = 0; r < t.length; r++) {
                  var o = r,
                    d = t[r];
                  (d = ((t, n) =>
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
                              l.test(e) &&
                              ((e = parseFloat(e)), a < e && e < i)
                            )
                              return 1;
                          })(n)
                            ? parseFloat(n)
                            : c.test(n)
                              ? new Date(n)
                              : "" === n
                                ? null
                                : n))
                      : n)(
                    (o = e.header
                      ? r >= x.length
                        ? "__parsed_extra"
                        : x[r]
                      : o),
                    (d = e.transform ? e.transform(d, o) : d),
                  )),
                    "__parsed_extra" === o
                      ? ((s[o] = s[o] || []), s[o].push(d))
                      : (s[o] = d);
                }
                return (
                  e.header &&
                    (r > x.length
                      ? b(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            x.length +
                            " fields but parsed " +
                            r,
                          h + n,
                        )
                      : r < x.length &&
                        b(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            x.length +
                            " fields but parsed " +
                            r,
                          h + n,
                        )),
                  s
                );
              }
              var d;
              _ &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((d = 1),
                !_.data.length || Array.isArray(_.data[0])
                  ? ((_.data = _.data.map(r)), (d = _.data.length))
                  : (_.data = r(_.data, 0)),
                e.header && _.meta && (_.meta.fields = x),
                (h += d));
            }
            function w() {
              return e.header && 0 === x.length;
            }
            function b(e, t, n, s) {
              (e = { type: e, code: t, message: n }),
                void 0 !== s && (e.row = s),
                _.errors.push(e);
            }
            S(e.step) &&
              ((r = e.step),
              (e.step = function (t) {
                (_ = t),
                  w()
                    ? y()
                    : (y(),
                      0 !== _.data.length &&
                        ((u += t.data.length),
                        e.preview && u > e.preview
                          ? n.abort()
                          : ((_.data = _.data[0]), r(_, d))));
              })),
              (this.parse = function (r, i, a) {
                var l = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(r, l)),
                  (s = !1),
                  e.delimiter
                    ? S(e.delimiter) &&
                      ((e.delimiter = e.delimiter(r)),
                      (_.meta.delimiter = e.delimiter))
                    : ((l = ((t, n, s, r, i) => {
                        var a, l, c, d;
                        i = i || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          o.RECORD_SEP,
                          o.UNIT_SEP,
                        ];
                        for (var u = 0; u < i.length; u++) {
                          for (
                            var h,
                              m = i[u],
                              g = 0,
                              f = 0,
                              x = 0,
                              _ =
                                ((c = void 0),
                                new p({
                                  comments: r,
                                  delimiter: m,
                                  newline: n,
                                  preview: 10,
                                }).parse(t)),
                              v = 0;
                            v < _.data.length;
                            v++
                          )
                            s && j(_.data[v])
                              ? x++
                              : ((f += h = _.data[v].length),
                                void 0 === c
                                  ? (c = h)
                                  : 0 < h && ((g += Math.abs(h - c)), (c = h)));
                          0 < _.data.length && (f /= _.data.length - x),
                            (void 0 === l || g <= l) &&
                              (void 0 === d || d < f) &&
                              1.99 < f &&
                              ((l = g), (a = m), (d = f));
                        }
                        return {
                          successful: !!(e.delimiter = a),
                          bestDelimiter: a,
                        };
                      })(
                        r,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = l.bestDelimiter)
                        : ((s = !0), (e.delimiter = o.DefaultDelimiter)),
                      (_.meta.delimiter = e.delimiter)),
                  (l = v(e)),
                  e.preview && e.header && l.preview++,
                  (t = r),
                  (n = new p(l)),
                  (_ = n.parse(t, i, a)),
                  y(),
                  m ? { meta: { paused: !0 } } : _ || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return m;
              }),
              (this.pause = function () {
                (m = !0),
                  n.abort(),
                  (t = S(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                d.streamer._halted
                  ? ((m = !1), d.streamer.parseChunk(t, !0))
                  : setTimeout(d.resume, 3);
              }),
              (this.aborted = function () {
                return f;
              }),
              (this.abort = function () {
                (f = !0),
                  n.abort(),
                  (_.meta.aborted = !0),
                  S(e.complete) && e.complete(_),
                  (t = "");
              }),
              (this.guessLineEndings = function (e, t) {
                (e = e.substring(0, 1048576)),
                  (t = new RegExp(g(t) + "([^]*?)" + g(t), "gm"));
                var n = (e = e.replace(t, "")).split("\r");
                if (
                  ((e =
                    1 < (t = e.split("\n")).length &&
                    t[0].length < n[0].length),
                  1 === n.length || e)
                )
                  return "\n";
                for (var s = 0, r = 0; r < n.length; r++)
                  "\n" === n[r][0] && s++;
                return s >= n.length / 2 ? "\r\n" : "\r";
              });
          }
          function g(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function p(e) {
            var t = (e = e || {}).delimiter,
              n = e.newline,
              s = e.comments,
              r = e.step,
              i = e.preview,
              a = e.fastMode,
              l = null,
              c = !1,
              d = null == e.quoteChar ? '"' : e.quoteChar,
              u = d;
            if (
              (void 0 !== e.escapeChar && (u = e.escapeChar),
              ("string" != typeof t || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              s === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === s
              ? (s = "#")
              : ("string" != typeof s || -1 < o.BAD_DELIMITERS.indexOf(s)) &&
                (s = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var h = 0,
              m = !1;
            (this.parse = function (o, p, f) {
              if ("string" != typeof o)
                throw new Error("Input must be a string");
              var x = o.length,
                _ = t.length,
                v = n.length,
                j = s.length,
                y = S(r),
                w = [],
                b = [],
                E = [],
                C = (h = 0);
              if (!o) return O();
              if (a || (!1 !== a && -1 === o.indexOf(d))) {
                for (var I = o.split(n), D = 0; D < I.length; D++) {
                  if (((E = I[D]), (h += E.length), D !== I.length - 1))
                    h += n.length;
                  else if (f) return O();
                  if (!s || E.substring(0, j) !== s) {
                    if (y) {
                      if (((w = []), N(E.split(t)), P(), m)) return O();
                    } else N(E.split(t));
                    if (i && i <= D) return (w = w.slice(0, i)), O(!0);
                  }
                }
                return O();
              }
              for (
                var R = o.indexOf(t, h),
                  A = o.indexOf(n, h),
                  T = new RegExp(g(u) + g(d), "g"),
                  k = o.indexOf(d, h);
                ;
              )
                if (o[h] === d)
                  for (k = h, h++; ; ) {
                    if (-1 === (k = o.indexOf(d, k + 1)))
                      return (
                        f ||
                          b.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: w.length,
                            index: h,
                          }),
                        z()
                      );
                    if (k === x - 1) return z(o.substring(h, k).replace(T, d));
                    if (d === u && o[k + 1] === u) k++;
                    else if (d === u || 0 === k || o[k - 1] !== u) {
                      -1 !== R && R < k + 1 && (R = o.indexOf(t, k + 1));
                      var M = B(
                        -1 ===
                          (A = -1 !== A && A < k + 1 ? o.indexOf(n, k + 1) : A)
                          ? R
                          : Math.min(R, A),
                      );
                      if (o.substr(k + 1 + M, _) === t) {
                        E.push(o.substring(h, k).replace(T, d)),
                          o[(h = k + 1 + M + _)] !== d && (k = o.indexOf(d, h)),
                          (R = o.indexOf(t, h)),
                          (A = o.indexOf(n, h));
                        break;
                      }
                      if (
                        ((M = B(A)),
                        o.substring(k + 1 + M, k + 1 + M + v) === n)
                      ) {
                        if (
                          (E.push(o.substring(h, k).replace(T, d)),
                          F(k + 1 + M + v),
                          (R = o.indexOf(t, h)),
                          (k = o.indexOf(d, h)),
                          y && (P(), m))
                        )
                          return O();
                        if (i && w.length >= i) return O(!0);
                        break;
                      }
                      b.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: w.length,
                        index: h,
                      }),
                        k++;
                    }
                  }
                else if (s && 0 === E.length && o.substring(h, h + j) === s) {
                  if (-1 === A) return O();
                  (h = A + v), (A = o.indexOf(n, h)), (R = o.indexOf(t, h));
                } else if (-1 !== R && (R < A || -1 === A))
                  E.push(o.substring(h, R)), (h = R + _), (R = o.indexOf(t, h));
                else {
                  if (-1 === A) break;
                  if ((E.push(o.substring(h, A)), F(A + v), y && (P(), m)))
                    return O();
                  if (i && w.length >= i) return O(!0);
                }
              return z();
              function N(e) {
                w.push(e), (C = h);
              }
              function B(e) {
                var t = 0;
                return -1 !== e &&
                  (e = o.substring(k + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function z(e) {
                return (
                  f ||
                    (void 0 === e && (e = o.substring(h)),
                    E.push(e),
                    (h = x),
                    N(E),
                    y && P()),
                  O()
                );
              }
              function F(e) {
                (h = e), N(E), (E = []), (A = o.indexOf(n, h));
              }
              function O(s) {
                if (e.header && !p && w.length && !c) {
                  var r = w[0],
                    i = Object.create(null),
                    a = new Set(r);
                  let t = !1;
                  for (let n = 0; n < r.length; n++) {
                    let s = r[n];
                    if (
                      i[
                        (s = S(e.transformHeader) ? e.transformHeader(s, n) : s)
                      ]
                    ) {
                      let e,
                        o = i[s];
                      for (; (e = s + "_" + o), o++, a.has(e); );
                      a.add(e),
                        (r[n] = e),
                        i[s]++,
                        (t = !0),
                        ((l = null === l ? {} : l)[e] = s);
                    } else (i[s] = 1), (r[n] = s);
                    a.add(s);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (c = !0);
                }
                return {
                  data: w,
                  errors: b,
                  meta: {
                    delimiter: t,
                    linebreak: n,
                    aborted: m,
                    truncated: !!s,
                    cursor: C + (p || 0),
                    renamedHeaders: l,
                  },
                };
              }
              function P() {
                r(O()), (w = []), (b = []);
              }
            }),
              (this.abort = function () {
                m = !0;
              }),
              (this.getCharIndex = function () {
                return h;
              });
          }
          function f(e) {
            var t = e.data,
              n = i[t.workerId],
              s = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var r = {
                abort: function () {
                  (s = !0),
                    x(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: _,
                resume: _,
              };
              if (S(n.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    r,
                  ),
                  !s);
                  a++
                );
                delete t.results;
              } else
                S(n.userChunk) &&
                  (n.userChunk(t.results, r, t.file), delete t.results);
            }
            t.finished && !s && x(t.workerId, t.results);
          }
          function x(e, t) {
            var n = i[e];
            S(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
          }
          function _() {
            throw new Error("Not implemented.");
          }
          function v(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              n = Array.isArray(e) ? [] : {};
            for (t in e) n[t] = v(e[t]);
            return n;
          }
          function j(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function S(e) {
            return "function" == typeof e;
          }
          return (
            (o.parse = function (t, s) {
              var r = (s = s || {}).dynamicTyping || !1;
              if (
                (S(r) && ((s.dynamicTypingFunction = r), (r = {})),
                (s.dynamicTyping = r),
                (s.transform = !!S(s.transform) && s.transform),
                !s.worker || !o.WORKERS_SUPPORTED)
              )
                return (
                  (r = null),
                  o.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (r = new (s.download ? c : u)(s)))
                    : !0 === t.readable && S(t.read) && S(t.on)
                      ? (r = new h(s))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (r = new d(s)),
                  r.stream(t)
                );
              ((r = (() => {
                var t;
                return (
                  !!o.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = n.URL || n.webkitURL || null,
                      s = e.toString();
                    return (
                      o.BLOB_URL ||
                      (o.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            s,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new n.Worker(t)).onmessage = f),
                  (t.id = a++),
                  (i[t.id] = t))
                );
              })()).userStep = s.step),
                (r.userChunk = s.chunk),
                (r.userComplete = s.complete),
                (r.userError = s.error),
                (s.step = S(s.step)),
                (s.chunk = S(s.chunk)),
                (s.complete = S(s.complete)),
                (s.error = S(s.error)),
                delete s.worker,
                r.postMessage({ input: t, config: s, workerId: r.id });
            }),
            (o.unparse = function (e, t) {
              var n = !1,
                s = !0,
                r = ",",
                i = "\r\n",
                a = '"',
                l = a + a,
                c = !1,
                d = null,
                u = !1,
                h =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          o.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (r = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (c = t.skipEmptyLines),
                        "string" == typeof t.newline && (i = t.newline),
                        "string" == typeof t.quoteChar && (a = t.quoteChar),
                        "boolean" == typeof t.header && (s = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        d = t.columns;
                      }
                      void 0 !== t.escapeChar && (l = t.escapeChar + a),
                        t.escapeFormulae instanceof RegExp
                          ? (u = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (u = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(g(a), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return m(null, e, c);
                if ("object" == typeof e[0])
                  return m(d || Object.keys(e[0]), e, c);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || d),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  m(e.fields || [], e.data || [], c)
                );
              throw new Error("Unable to serialize unrecognized input");
              function m(e, t, n) {
                var a = "",
                  o =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  l = !Array.isArray(t[0]);
                if (o && s) {
                  for (var c = 0; c < e.length; c++)
                    0 < c && (a += r), (a += p(e[c], c));
                  0 < t.length && (a += i);
                }
                for (var d = 0; d < t.length; d++) {
                  var u = (o ? e : t[d]).length,
                    h = !1,
                    m = o ? 0 === Object.keys(t[d]).length : 0 === t[d].length;
                  if (
                    (n &&
                      !o &&
                      (h =
                        "greedy" === n
                          ? "" === t[d].join("").trim()
                          : 1 === t[d].length && 0 === t[d][0].length),
                    "greedy" === n && o)
                  ) {
                    for (var g = [], f = 0; f < u; f++) {
                      var x = l ? e[f] : f;
                      g.push(t[d][x]);
                    }
                    h = "" === g.join("").trim();
                  }
                  if (!h) {
                    for (var _ = 0; _ < u; _++) {
                      0 < _ && !m && (a += r);
                      var v = o && l ? e[_] : _;
                      a += p(t[d][v], _);
                    }
                    d < t.length - 1 && (!n || (0 < u && !m)) && (a += i);
                  }
                }
                return a;
              }
              function p(e, t) {
                var s, i;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((i = !1),
                      u &&
                        "string" == typeof e &&
                        u.test(e) &&
                        ((e = "'" + e), (i = !0)),
                      (s = e.toString().replace(h, l)),
                      (i =
                        i ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(s, o.BAD_DELIMITERS) ||
                        -1 < s.indexOf(r) ||
                        " " === s.charAt(0) ||
                        " " === s.charAt(s.length - 1))
                        ? a + s + a
                        : s);
              }
            }),
            (o.RECORD_SEP = String.fromCharCode(30)),
            (o.UNIT_SEP = String.fromCharCode(31)),
            (o.BYTE_ORDER_MARK = "\ufeff"),
            (o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK]),
            (o.WORKERS_SUPPORTED = !s && !!n.Worker),
            (o.NODE_STREAM_INPUT = 1),
            (o.LocalChunkSize = 10485760),
            (o.RemoteChunkSize = 5242880),
            (o.DefaultDelimiter = ","),
            (o.Parser = p),
            (o.ParserHandle = m),
            (o.NetworkStreamer = c),
            (o.FileStreamer = d),
            (o.StringStreamer = u),
            (o.ReadableStreamStreamer = h),
            n.jQuery &&
              ((t = n.jQuery).fn.parse = function (e) {
                var s = e.config || {},
                  r = [];
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
                      r.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: t.extend({}, s),
                      });
                  }),
                  i(),
                  this
                );
                function i() {
                  if (0 === r.length) S(e.complete) && e.complete();
                  else {
                    var n,
                      s,
                      i,
                      l,
                      c = r[0];
                    if (S(e.before)) {
                      var d = e.before(c.file, c.inputElem);
                      if ("object" == typeof d) {
                        if ("abort" === d.action)
                          return (
                            (n = "AbortError"),
                            (s = c.file),
                            (i = c.inputElem),
                            (l = d.reason),
                            void (S(e.error) && e.error({ name: n }, s, i, l))
                          );
                        if ("skip" === d.action) return void a();
                        "object" == typeof d.config &&
                          (c.instanceConfig = t.extend(
                            c.instanceConfig,
                            d.config,
                          ));
                      } else if ("skip" === d) return void a();
                    }
                    var u = c.instanceConfig.complete;
                    (c.instanceConfig.complete = function (e) {
                      S(u) && u(e, c.file, c.inputElem), a();
                    }),
                      o.parse(c.file, c.instanceConfig);
                  }
                }
                function a() {
                  r.splice(0, 1), i();
                }
              }),
            r &&
              (n.onmessage = function (e) {
                (e = e.data),
                  void 0 === o.WORKER_ID && e && (o.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? n.postMessage({
                        workerId: o.WORKER_ID,
                        results: o.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((n.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = o.parse(e.input, e.config)) &&
                      n.postMessage({
                        workerId: o.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((c.prototype = Object.create(l.prototype)).constructor = c),
            ((d.prototype = Object.create(l.prototype)).constructor = d),
            ((u.prototype = Object.create(u.prototype)).constructor = u),
            ((h.prototype = Object.create(l.prototype)).constructor = h),
            o
          );
        }),
        void 0 === (r = "function" == typeof n ? n.apply(t, s) : n) ||
          (e.exports = r);
    },
    20153: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => vn, default: () => jn });
      var s = n(7850),
        r = n(43527),
        i = n(90626),
        a = n(17083),
        o = n(92757),
        l = n(11577),
        c = n(14932),
        d = n(97058),
        u = n(84811),
        h = n(95695),
        m = n.n(h),
        g = n(38135),
        p = n(45737),
        f = n.n(p),
        x = n(24484),
        _ = n(22837),
        v = n(37085),
        j = n(56545),
        S = n(85737),
        y = n(64753),
        w = n(20194),
        b = n(75233),
        E = n(41735),
        C = n.n(E),
        I = n(17720),
        D = n(78327),
        R = n(32179),
        A = n(21711),
        T = n(44165),
        k = n(95034);
      function M() {
        const [e] = i.useState(() =>
            (0, D.Tc)("events_list", "application_config"),
          ),
          [t] = (0, k.QD)("filter"),
          n = (0, T.f1)(),
          [s, r] = i.useMemo(() => {
            let t = new Array(),
              s = new Array();
            return (
              e.forEach((e) => {
                e.endtime &&
                (function (e, t = !1) {
                  const [n, s = "00:00:00"] = e.trim().split(/\s+/),
                    [r, i, a] = n.split("-").map(Number),
                    [o, l, c] = s.split(":").map(Number),
                    d = t
                      ? Date.UTC(r, i - 1, a, o, l, c ?? 0)
                      : new Date(r, i - 1, a, o, l, c ?? 0).getTime();
                  return Math.floor(d / 1e3);
                })(e.endtime) < n
                  ? s.push(e)
                  : t.push(e);
              }),
              [s, t]
            );
          }, [e, n]);
        return {
          rgOldEvents: s,
          rgEvents: r,
          selectConference: (0, i.useMemo)(
            () => e.find((e) => e.id === t?.toLocaleLowerCase()),
            [e, t],
          ),
        };
      }
      function N(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function B(e) {
        const t = `${D.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: (0, D.KC)(), partnerid: e },
          s = await C().get(t, { params: n });
        return s?.data?.data;
      }
      function z(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function F(e, t, n) {
        return (0, w.I)({
          queryKey: ["useMeetSteamGetAllRegistration", t, n],
          queryFn: async () => {
            const n = j.w.Init(S.q3);
            n.Body().set_clan_event_gid(t);
            const s = await S.ZK.GetRegistrations(e, n);
            return s.BSuccess()
              ? s
                  .Body()
                  .registrations()
                  .map((e) => e.toObject())
              : [];
          },
          enabled: null != t && 0 != n,
        });
      }
      var O = n(19367),
        P = n.n(O),
        L = n(38390),
        G = n(50304),
        $ = n(96001),
        H = n(16676),
        U = n(35239),
        q = n(26161),
        V = n(78395),
        K = n(21869),
        W = n(22797),
        Y = n(26408),
        J = n(52038),
        Q = n(65),
        Z = n(61859),
        X = n(91675),
        ee = n(30470),
        te = n(30565),
        ne = n.n(te);
      function se(e) {
        const t = re();
        return (0, s.jsx)("div", {
          children: (0, s.jsx)("ol", {
            children: Array.from(t.entries()).map(([e, t]) =>
              (0, s.jsx)(
                "li",
                {
                  children: (0, s.jsx)("a", {
                    href: `${D.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
                    target: "_blank",
                    children: t,
                  }),
                },
                e,
              ),
            ),
          }),
        });
      }
      function re() {
        const [e] = (0, i.useState)(() => {
          const e = (0, D.Tc)("survey_list", "application_config") || {},
            t = new Map();
          for (const n of Object.keys(e)) t.set(n, e[n]);
          return t;
        });
        return e;
      }
      function ie(e, t) {
        const n = (function () {
            const [e, t] = (0, i.useState)(location.search);
            return (
              (0, i.useEffect)(() => {
                function e(e) {
                  "urlchange" === e.data && t(location.search);
                }
                return (
                  window.addEventListener("message", e),
                  () => {
                    window.removeEventListener("message", e);
                  }
                );
              }, []),
              e
            );
          })(),
          s = (0, i.useMemo)(() => {
            const s = new URLSearchParams(n.substring(1)).get(e);
            return null != s
              ? null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== s)
                  : t.constructor(s)
                : s
              : t;
          }, [e, t, n]),
          [r, a] = (0, i.useState)(s),
          o = i.useCallback(
            (t, s = !1) => {
              const r = new URLSearchParams(n.substring(1));
              if (null != t) {
                if (r.get(e) == t) return;
                r.set(e, String(t));
              } else {
                if (!r.has(e)) return;
                r.delete(e);
              }
              s
                ? history.replaceState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${r}`),
                  )
                : history.pushState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${r}`),
                  ),
                (0, i.startTransition)(() => {
                  a(t), window.postMessage("urlchange");
                });
            },
            [e, n],
          );
        return [r, o];
      }
      const ae = i.createContext(void 0);
      function oe(e) {
        const { children: t } = e,
          [n, r] = ie("showpastevents", !1);
        return (0, s.jsx)(ae.Provider, {
          value: { bShowArchived: n, setShowArchived: r },
          children: t,
        });
      }
      const le = () => {
        const e = (0, i.useContext)(ae);
        if (!e)
          throw new Error(
            "useMeetSteamArchived must be used within MeetSteamArchivedProvider",
          );
        return e;
      };
      var ce = n(34283),
        de = n.n(ce),
        ue = n(68797),
        he = n(9161),
        me = n(41403),
        ge = n(81393),
        pe = n(96059);
      class fe {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            fe.s_Singleton ||
              ((fe.s_Singleton = new fe()), fe.s_Singleton.Init()),
            fe.s_Singleton
          );
        }
        Init() {
          const e = (0, x.Tc)("store_feature_token", "application_config");
          (0, ge.wT)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new pe.D(ee.TS.WEBAPI_BASE_URL, e));
        }
      }
      function xe() {
        return fe.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      var _e = n(6083);
      function ve(e) {
        const { hideModal: t, gid: n } = e,
          [r, a] = (0, i.useState)(!1),
          [o, l] = (0, i.useState)(null),
          [c, d] = i.useState(0),
          [u, m] = i.useState(""),
          [g, p] = i.useState(""),
          [f, x] = i.useState(!1),
          _ = xe(),
          j = (0, w.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, c],
            queryFn: async () => {
              const e = {
                  steamid: I.b.InitFromAccountID(c).ConvertTo64BitString(),
                  gid: n,
                  type: me.Dk.rV,
                },
                t = await me.Nl.GetUserActionData(_, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(n) && c > 0,
          });
        i.useEffect(() => {
          j.isLoading ||
            (j.isSuccess &&
              (m(j.data.partner_id ? j.data.partner_id.toString() : ""),
              p(j.data.email_override ?? ""),
              x(j.data.allow_registration_if_full ?? !1)));
        }, [j.isLoading, j.isSuccess, j.data]);
        return (0, s.jsxs)(V.o0, {
          strTitle: "Invite User",
          bOKDisabled: !c || r || j.isLoading,
          onOK: async () => {
            a(!0);
            const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
              s = await we(
                n,
                [
                  {
                    nAccountID: c,
                    nPartnerID: e,
                    strEmailOverride: g,
                    bAllowRegistrationIfFull: f,
                  },
                ],
                !0,
              ),
              r = s && s.success == v.R;
            r || l("We hit error during invite, check console: " + s?.msg),
              a(!1),
              j.refetch(),
              r && t();
          },
          onCancel: t,
          children: [
            Boolean(o) &&
              (0, s.jsx)("div", {
                className: h.ErrorStylesWithIcon,
                children: o,
              }),
            !r &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(H.pd, {
                    type: "number",
                    label: "Account ID",
                    onChange: (e) => d(Number.parseInt(e.currentTarget.value)),
                    value: c,
                  }),
                  0 != c &&
                    !j.isLoading &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(H.pd, {
                          type: "number",
                          label: "Partner ID (optional)",
                          onChange: (e) => m(e.currentTarget.value),
                          value: u,
                        }),
                        (0, s.jsx)(H.pd, {
                          type: "text",
                          label: "Email override (optional)",
                          onChange: (e) => p(e.currentTarget.value.trim()),
                          value: g,
                        }),
                        (0, s.jsx)(H.Yh, {
                          controlled: !0,
                          checked: f,
                          onChange: x,
                          label: "Allow if registration is full",
                        }),
                      ],
                    }),
                ],
              }),
            r &&
              (0, s.jsx)(W.t, {
                size: "small",
                position: "center",
                string: (0, Z.we)("#Saving"),
              }),
            j.isLoading &&
              (0, s.jsx)(W.t, {
                size: "small",
                position: "center",
                string: (0, Z.we)("#Loading"),
              }),
          ],
        });
      }
      function je(e) {
        const { hideModal: t, gid: n } = e,
          [r, a] = (0, i.useState)(null),
          [o, l] = (0, i.useState)(!1),
          [c, d] = (0, i.useState)(null),
          [u, m] = (0, i.useState)(null),
          [g, p] = (0, i.useState)(null);
        return (0, s.jsxs)(V.o0, {
          strTitle: "Invite Users",
          bOKDisabled: !r || 0 == r.length || null != u,
          strCancelButtonText: null !== u ? "Close" : "Cancel",
          onOK: async () => {
            l(!0);
            const e = await we(n, r, !1);
            e?.success == v.R
              ? (m(e.rgInvitedAccounts.length), p(e.rgSkippedAccounts.length))
              : d("We hit error during invite, check console: " + e?.msg),
              l(!1);
          },
          onCancel: () => {
            m(null), p(null), l(!1), a(null), t();
          },
          children: [
            Boolean(c) &&
              (0, s.jsx)("div", {
                className: h.ErrorStylesWithIcon,
                children: c,
              }),
            null != u &&
              (0, s.jsxs)("div", {
                children: [
                  "Invited ",
                  (0, _e.D)(u),
                  " accounts, skipped previously invited ",
                  (0, _e.D)(g),
                ],
              }),
            o &&
              (0, s.jsx)(W.t, {
                size: "small",
                position: "center",
                string: (0, Z.we)("#Saving"),
              }),
            null == r
              ? (0, s.jsx)(ye, { setInvites: a })
              : (0, s.jsx)(Se, { rgInvites: r }),
          ],
        });
      }
      function Se(e) {
        const { rgInvites: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              children: ["Total Invites Parsed: ", t.length, " "],
            }),
            (0, s.jsxs)("table", {
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "AccountID" }),
                      (0, s.jsx)("th", { children: "PartnerID" }),
                      (0, s.jsx)("th", { children: "Email Override" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: t.map((e, t) =>
                    (0, s.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, s.jsx)("td", { children: e.nAccountID }),
                          (0, s.jsx)("td", { children: e.nPartnerID }),
                          (0, s.jsx)("td", { children: e.strEmailOverride }),
                        ],
                      },
                      "invite" + e.nAccountID + "_" + t,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function ye(e) {
        const { setInvites: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              children: "Format for CSV File, please use the template below:",
            }),
            (0, s.jsxs)("ul", {
              children: [
                (0, s.jsxs)("li", {
                  children: [
                    (0, s.jsx)("b", { children: "nAccountID" }),
                    " - required, 32-bit integer value, not the 64-bit steam id",
                  ],
                }),
                (0, s.jsxs)("li", {
                  children: [
                    (0, s.jsx)("b", { children: "nPartnerID" }),
                    " - (preferred for biz contact)",
                  ],
                }),
                (0, s.jsxs)("li", {
                  children: [
                    (0, s.jsx)("b", { children: "strOverrideEmail" }),
                    " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
                  ],
                }),
              ],
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("a", {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation();
                const t = [];
                t.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                  t.push(["388445686", "1", "adils@valvesoftware.com"]);
                he.g.WriteCSVToFile(t, "invite_template.csv");
              },
              children: "Download Template Example",
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(H.$n, {
              children: (0, s.jsxs)("label", {
                className: de().ImportButtonLabel,
                htmlFor: "import-discount-input",
                children: [
                  "Choose CSV File",
                  (0, s.jsx)("input", {
                    id: "import-discount-input",
                    type: "file",
                    style: { display: "none" },
                    onChange: async (e) => {
                      if (e.target.files.length >= 1) {
                        const n = e.target.files[0],
                          s = await he.g.ParseCSVFile(n);
                        if (s?.data) {
                          const e = new Array();
                          s.data.forEach((t) => {
                            if (t.nAccountID) {
                              const n = {
                                nAccountID: Number.parseInt(t.nAccountID),
                              };
                              t.nPartnerID &&
                                (n.nPartnerID = Number.parseInt(t.nPartnerID)),
                                t.strEmailOverride &&
                                  (n.strEmailOverride = t.strEmailOverride),
                                e.push(n);
                            }
                          }),
                            t(e);
                        }
                      }
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      }
      async function we(e, t, n) {
        const s = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          i = t.map((e) => e.strEmailOverride).join(","),
          a = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let o = new FormData();
        o.append("sessionid", (0, D.KC)()),
          o.append("gid", e),
          o.append("accounts", s),
          o.append("partnerids", r),
          o.append("emailoverride", i),
          o.append("allowregistrationiffull", a),
          o.append("forceupdate", n ? "1" : "0");
        const l = `${ee.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await C().post(l, o, { withCredentials: !0 });
          if (e?.data?.success != v.R) {
            let t = (0, ue.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, ue.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var be = n(16666),
        Ee = n(66051),
        Ce = n(54806),
        Ie = n(58632),
        De = n.n(Ie);
      function Re(e) {
        const t = xe(),
          n = i.useContext(Te),
          s = (0, w.I)(ke(n, t, e));
        return s.isLoading ? null : s.data;
      }
      function Ae(e) {
        const t = xe(),
          n = i.useContext(Te);
        return (0, Ce.E)({ queries: e.map((e) => ke(n, t, e)) });
      }
      const Te = i.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            Me ||
              (Me = new (De())(
                async (t) => {
                  const n = j.w.Init(me.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(me.Dk.rV);
                  const s = await me.Nl.GetMultipleUserActionData(e, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${s.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    s
                      .Body()
                      .entries()
                      .forEach((e) => {
                        try {
                          const t = JSON.parse(e.jsondata());
                          if (!("steamid" in t) || !t.steamid) {
                            t.steamid = e.steamid();
                            const n = new I.b(t.steamid);
                            t.accountid = n.GetAccountID();
                          }
                          const n = e.gid();
                          return (
                            r.has(n) ? r.get(n).push(t) : r.set(n, [t]), [t]
                          );
                        } catch (t) {
                          throw `Failed to parse GetMultipleUserActionData with details: ${e.steamid()}`;
                        }
                      }),
                    t.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              ));
            return Me;
          })(e).load(t),
      });
      function ke(e, t, n) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", n],
          queryFn: () => e.loadMeetSteamAllRegistration(t, n),
          enabled: !!n,
        };
      }
      let Me;
      var Ne = n(7860);
      function Be(e, t) {
        const n = (0, $.a)(),
          s = i.useContext(Fe),
          r = (0, w.I)(Oe(s, n, e, t));
        return r.isLoading ? null : r.data;
      }
      function ze(e, t) {
        return Ne.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const Fe = i.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            Pe ||
              (Pe = new (De())(
                async (t) => {
                  const n = j.w.Init(S.g9);
                  n.Body().set_accountids(t.map((e) => e.accountID)),
                    n.Body().set_partnerids(t.map((e) => e.partnerID));
                  const s = await S.ZK.GetBatchPartnerEmailAndName(e, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${s.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    s
                      .Body()
                      .info()
                      .forEach((e) => {
                        r.set(
                          e.accountid() + "_" + e.partnerid(),
                          e.toObject(),
                        );
                      }),
                    t.map((e) => r.get(e.accountID + "_" + e.partnerID) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return Pe;
          })(e).load({ accountID: t, partnerID: n }),
      });
      function Oe(e, t, n, s) {
        return {
          queryKey: ["PartnerEmailAndName", n, s],
          queryFn: () => e.loadPartnerEmailAndName(t, n, s),
          enabled: !!n || !!s,
        };
      }
      let Pe;
      function Le(e) {
        const { rgEventGIDs: t } = e,
          [n, r, a] = (0, y.uD)(),
          [o, l] = (0, i.useState)(null);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: " | " }),
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Analyse Top Partner Coverage",
            }),
            (0, s.jsx)(K.E, {
              active: n,
              children: (0, s.jsx)(u.tH, {
                children: (0, s.jsx)(V.o0, {
                  closeModal: a,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, s.jsx)(Ve, { rgEventGIDs: t, fnSelectedEvents: l })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(qe, { rgGidMeetSteamEvents: o }),
                          (0, s.jsx)(H.$n, {
                            onClick: () => l(null),
                            children: "Reset Selection",
                          }),
                        ],
                      }),
                }),
              }),
            }),
          ],
        });
      }
      const Ge = (0, be.FB)();
      function $e(e) {
        return (
          (e = e?.filter(
            (t, n) =>
              0 == n || !e.slice(0, n).some((e) => e.accountid == t.accountid),
          )),
          e
            ?.map(
              (e) =>
                e.name ||
                ze(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function He(e) {
        return $e(e.cell.getValue());
      }
      function Ue(e, t) {
        const n = Ae(t),
          [s, r, a] = (0, i.useMemo)(() => {
            if (n.filter((e) => !e.isLoading).length != n.length)
              return [null, [], []];
            const t = new Map(),
              s = new Set(e),
              r = new Map();
            n.forEach((e) =>
              e.data.forEach((e) => {
                if (
                  s.has(e.partner_id) &&
                  (r.has(e.partner_id)
                    ? r.get(e.partner_id).push(e)
                    : r.set(e.partner_id, [e]),
                  !e.name)
                ) {
                  const n = e.accountid;
                  t.set(`${n}_${e.partner_id}`, {
                    accountID: n,
                    partnerID: e.partner_id,
                  });
                }
              }),
            );
            const i = Array.from(t.values());
            return [r, i.map((e) => e.accountID), i.map((e) => e.partnerID)];
          }, [n, e]),
          o = (function (e, t) {
            const n = (0, $.a)(),
              s = i.useContext(Fe);
            return (0, Ce.E)({ queries: e.map((e, r) => Oe(s, n, e, t[r])) });
          })(r, a);
        return o.filter((e) => !e.isLoading).length == o.length ? s : null;
      }
      function qe(e) {
        const { rgGidMeetSteamEvents: t } = e,
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, x.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          r = (0, R.vh)(n),
          a = Ue(n, t),
          o = (0, i.useMemo)(() => {
            if (!r || !a) return null;
            const e = [];
            return (
              n.forEach((t) => {
                const n = a.get(t);
                e.push({
                  partner_id: t,
                  partner_name: (0, R.Yd)(t)?.name || "Unknown",
                  invitations:
                    n?.filter(
                      (e) =>
                        e.invited &&
                        !Object.keys(e).some((e) =>
                          e.startsWith("registration_emailed"),
                        ),
                    ) || [],
                  registrations:
                    n?.filter((e) =>
                      Object.keys(e).some((e) =>
                        e.startsWith("registration_emailed"),
                      ),
                    ) || [],
                });
              }),
              e
            );
          }, [r, a, n]),
          l = (0, i.useMemo)(
            () => [
              Ge.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Ge.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              Ge.accessor("invitations", {
                header: "Invitations",
                cell: He,
                size: 300,
              }),
              Ge.accessor("registrations", {
                header: "Registered to Attend",
                cell: He,
                size: 300,
              }),
            ],
            [],
          );
        function c() {
          const e = [],
            t = [];
          for (const e of l) t.push(e.header);
          e.push(t);
          for (const t of o) {
            const n = [];
            for (const e of l) {
              const s = t[e.accessorKey];
              n.push(
                "invitations" == e.accessorKey ||
                  "registrations" == e.accessorKey
                  ? $e(s)
                  : s.toString(),
              );
            }
            e.push(n);
          }
          he.g.WriteCSVToFile(e, "partneranalysis.csv");
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(H.JU, { children: "Partner Analysis" }),
            Boolean(o)
              ? (0, s.jsxs)(u.tH, {
                  children: [
                    (0, s.jsx)(H.$n, {
                      id: "download-csv",
                      onClick: c,
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                    (0, s.jsx)(Ee.k, {
                      columns: l,
                      data: o,
                      getRowKey: (e) => e,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: n.length,
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(H.$n, {
                      id: "download-csv",
                      onClick: c,
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                  ],
                })
              : (0, s.jsx)(W.t, {
                  string: (0, Z.we)("#Loading"),
                  position: "center",
                }),
          ],
        });
      }
      function Ve(e) {
        const { rgEventGIDs: t, fnSelectedEvents: n } = e,
          [r, a] = (0, i.useState)([]),
          { bShowArchived: o, setShowArchived: l } = le(),
          { bIsLoading: c, events: d } = (0, L.PB)(t),
          u = (0, i.useMemo)(() => {
            const e = Math.floor(new Date().getTime() / 1e3);
            return o && d ? [...d] : d?.filter((t) => t.endTime >= e);
          }, [d, o]);
        return c
          ? (0, s.jsx)(W.t, { string: "Loading..." })
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(H.Yh, {
                  checked: o,
                  onChange: l,
                  label: "Show Past Events",
                }),
                (0, s.jsx)(H.JU, { children: "Choose Events" }),
                u.map((e) =>
                  (0, s.jsx)(
                    Ke,
                    { gidClanEvent: e.GID, rgSelected: r, fnSetSelected: a },
                    e.GID,
                  ),
                ),
                (0, s.jsx)(H.$n, {
                  disabled: 0 == r.length,
                  onClick: () => n(r),
                  children: "Continue",
                }),
              ],
            });
      }
      function Ke(e) {
        const { gidClanEvent: t, rgSelected: n, fnSetSelected: r } = e,
          i = (0, L.RR)(t).GetNameWithFallback(_.Bhc);
        return (0, s.jsx)(H.Yh, {
          label: i,
          checked: n.includes(t),
          onChange: (e) => {
            const s = n.indexOf(t),
              i = Boolean(s >= 0);
            e && !i
              ? r([...n, t])
              : !e && i && r([...n.slice(0, s), ...n.slice(s + 1)]);
          },
        });
      }
      var We = n(39832),
        Ye = n(29233),
        Je = n(30603),
        Qe = n.n(Je);
      function Ze(e) {
        const { hideModal: t, gid: n } = e,
          r = Re(n),
          a = (0, b.jE)(),
          [o, l] = (0, i.useMemo)(
            () =>
              r
                ? [r.length, r.filter((e) => !e.invitation_emailed).length]
                : [0, 0],
            [r],
          );
        return (0, s.jsxs)(V.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription:
            "This will show the users we have invited and their status. As well as individual who were just sent the registration page on their own.",
          strTitle: "Invitation And Registration Status",
          children: [
            !r &&
              (0, s.jsx)(W.t, {
                size: "medium",
                position: "center",
                string: (0, Z.we)("#Loading"),
              }),
            r &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)("div", {
                    children: ["There are ", o, " registrations."],
                  }),
                  l > 0 &&
                    (0, s.jsxs)(H.$n, {
                      onClick: async () => {
                        await (async function (e, t) {
                          let n = new FormData();
                          n.append("sessionid", (0, D.KC)()),
                            n.append("gid", t);
                          const s = `${ee.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                          try {
                            const r = await C().post(s, n, {
                              withCredentials: !0,
                            });
                            if (r?.data?.success != v.R) {
                              let e = (0, ue.H)(r);
                              console.error(
                                "AsyncSendInviteEmails error: " + e.strErrorMsg,
                                e,
                              );
                            }
                            return (
                              e.invalidateQueries({
                                queryKey: [
                                  "useMeetSteamAllRegistrationStatus",
                                  t,
                                ],
                              }),
                              r?.data
                            );
                          } catch (e) {
                            let t = (0, ue.H)(e);
                            console.error(
                              "AsyncSendInviteEmails error: " + t.strErrorMsg,
                              t,
                            );
                          }
                          return null;
                        })(a, n);
                      },
                      children: [l, " Invites To Sent. Send now?"],
                    }),
                  (0, s.jsxs)("table", {
                    children: [
                      (0, s.jsx)("thead", {
                        children: (0, s.jsxs)("tr", {
                          children: [
                            (0, s.jsx)("th", { children: "SteamID" }),
                            (0, s.jsx)("th", { children: "Name" }),
                            (0, s.jsx)("th", { children: "invited" }),
                            (0, s.jsx)("th", { children: "Invite Emailed" }),
                            (0, s.jsx)("th", { children: "Partner" }),
                            (0, s.jsx)("th", { children: "Email Override" }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("tbody", {
                        children: r?.map((e) =>
                          (0, s.jsx)(Xe, { reg: e }, "regentry_" + e.steamid),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function Xe(e) {
        const { reg: t } = e,
          [n] = (0, R.UA)(t.partner_id);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: t.steamid }),
            (0, s.jsx)("td", { children: t.name }),
            (0, s.jsx)("td", { children: Boolean(t.invited) ? "YES" : "" }),
            (0, s.jsx)("td", {
              children: Boolean(t.invitation_emailed) ? "YES" : "",
            }),
            (0, s.jsxs)("td", { children: [n?.name, " (", t.partner_id, ")"] }),
            (0, s.jsx)("td", { children: t.email_override }),
          ],
        });
      }
      function et(e) {
        const { hideModal: t, gid: n, title: r, group: a, session: o } = e,
          l = (0, $.a)(),
          c = Re(n),
          d = F(l, n, a?.group_id),
          [u, h] = (0, i.useMemo)(() => {
            const e = d?.data?.filter((e) => e.session_id == o.id),
              t = new Map(),
              n = new Map();
            return (
              e?.forEach((e) => {
                const s = new Ye.b2(e.steamid).GetAccountID();
                if ((t.set(s, e), e.jsondata)) {
                  const t = JSON.parse(e.jsondata);
                  t.pre_event_partner_questions &&
                    n.set(s, t.pre_event_partner_questions);
                }
              }),
              [t, n]
            );
          }, [o, d]),
          m = c?.filter((e) => u.has(new Ye.b2(e.steamid).GetAccountID()));
        return (0, s.jsxs)(V.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription: "Show who is registered for this session",
          strTitle: "Session Registration",
          children: [
            (0, s.jsx)("div", {
              className: Qe().ExportToCSV,
              children: (0, s.jsx)("a", {
                onClick: () =>
                  (function (e, t, n, s, r, i) {
                    const a = [],
                      o = [
                        "SteamID",
                        "Name",
                        "Invited",
                        "Partner",
                        "Game",
                        "Email Override",
                        "Guest Count",
                        "Reg Confirmation Email Sent",
                      ];
                    e.ask_registration_question && o.push("Pre Reg Answer");
                    a.push(o),
                      s.forEach((t) => {
                        const n = [],
                          s = t.partner_id ? (0, R.Yd)(t.partner_id) : void 0;
                        n.push("" + t.steamid),
                          n.push(t.name),
                          n.push(t.invited ? "YES" : ""),
                          n.push(s ? `${s?.name} (${t.partner_id})` : ""),
                          n.push(t.game ? `Game: ${t.game}` : ""),
                          n.push(t.email_override),
                          n.push(
                            "" +
                              (t.guests_registered
                                ? t.guests_registered - 1
                                : 0),
                          );
                        const o = new Ye.b2(t.steamid);
                        if (r.has(o.GetAccountID())) {
                          const e = tt(r.get(o.GetAccountID()), t);
                          if (e) {
                            const t = new Date(1e3 * e)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            n.push(t);
                          } else n.push("");
                        } else n.push("");
                        if (e.ask_registration_question) {
                          const t = i
                            .get(o.GetAccountID())
                            ?.find((t) => t.group_id == e.group_id);
                          t && n.push(t.question);
                        }
                        a.push(n);
                        for (let e = 0; e < t.guest_names?.length; e++) {
                          const n = [];
                          n.push("(guest)"),
                            n.push(t.guest_names[e]),
                            a.push(n);
                        }
                      });
                    const l =
                      `meetsteam_${n}_${(0, Z.TW)(t.rtime_start)}_at_${(0, We.KC)(t.rtime_start)}.csv`.replace(
                        /[ <>:"/\\|?*\x00-\x1F]/g,
                        "_",
                      );
                    he.g.WriteCSVToFile(a, l);
                  })(a, o, r, m, u, h),
                children: "Export to CSV",
              }),
            }),
            (0, s.jsxs)("table", {
              className: Qe().Table,
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "SteamID" }),
                      (0, s.jsx)("th", { children: "Name" }),
                      (0, s.jsx)("th", { children: "Invited" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Game" }),
                      (0, s.jsx)("th", { children: "Email Override" }),
                      (0, s.jsxs)("th", {
                        children: [
                          "Guest Count ",
                          (0, s.jsx)(Y.o, {
                            tooltip:
                              "Additional guests, doesn't include main registrant",
                          }),
                        ],
                      }),
                      (0, s.jsx)("th", { children: "Reg Confirm Email Sent" }),
                      a.ask_registration_question &&
                        (0, s.jsx)("th", { children: "Answer" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: m?.flatMap((e) => {
                    const t = new Ye.b2(e.steamid).GetAccountID(),
                      n = [
                        (0, s.jsx)(
                          nt,
                          {
                            group: a,
                            regInfo: u.get(t),
                            inviteInfo: e,
                            preRegQuestions: h.get(t),
                          },
                          "regrow" + e.steamid,
                        ),
                      ];
                    for (let t = 0; t < e.guest_names?.length; t++)
                      n.push(
                        (0, s.jsx)(
                          st,
                          { guestName: e.guest_names[t] },
                          "regguestrow" + e.steamid + "_" + t,
                        ),
                      );
                    return n;
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function tt(e, t) {
        const n = `registration_emailed_${e.group_id}_${e.session_id}`;
        let s = null;
        return n in t && (s = t[n]), s;
      }
      function nt(e) {
        const { inviteInfo: t, regInfo: n, group: r, preRegQuestions: i } = e,
          [a] = (0, R.UA)(t.partner_id),
          o = tt(n, t);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: t.steamid }),
            (0, s.jsx)("td", { children: t.name }),
            (0, s.jsx)("td", { children: Boolean(t.invited) ? "YES" : "" }),
            (0, s.jsx)("td", { children: a?.name ?? `(${t.partner_id})` }),
            (0, s.jsx)("td", { children: t.game ? `Game: ${t.game}` : "" }),
            (0, s.jsx)("td", { children: t.email_override }),
            (0, s.jsx)("td", {
              children: n.guests_registered ? n.guests_registered - 1 : 0,
            }),
            (0, s.jsx)("td", { children: o ? (0, Z.TW)(o) : "" }),
            r.ask_registration_question &&
              (0, s.jsx)("td", {
                children:
                  i?.find((e) => e.group_id == r.group_id)?.question || "",
              }),
          ],
        });
      }
      function st(e) {
        const { guestName: t } = e;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: "(guest)" }),
            (0, s.jsx)("td", { children: t }),
          ],
        });
      }
      var rt = n(2516),
        it = n(98019),
        at = n(66418);
      function ot(e) {
        return (0, w.I)({
          queryKey: [],
          queryFn: async () =>
            await (async function (e) {
              const t = { sessionid: (0, x.KC)(), gids: e },
                n = `${at.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
                s = await fetch(n, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(t),
                });
              if (!s.ok)
                throw new Error(
                  `Failed to read registrations for gids ${e.join(",")}`,
                );
              const r = await s.json();
              if (r.success != v.R)
                throw new Error(
                  `Failed to read registrations for gids ${e.join(",")}: ${r.msg}`,
                );
              return r.lists ?? [];
            })(e),
          enabled: e && e.length > 0,
        });
      }
      function lt(e) {
        const { rgEventGIDs: t } = e,
          [n, r, a] = (0, y.uD)(),
          [o, l] = (0, i.useState)(null);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: " | " }),
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Show Registration Across Events",
            }),
            (0, s.jsx)(K.E, {
              active: n,
              children: (0, s.jsx)(u.tH, {
                children: (0, s.jsx)(V.o0, {
                  closeModal: a,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, s.jsx)(Ve, { rgEventGIDs: t, fnSelectedEvents: l })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(dt, { rgGidMeetSteamEvents: o }),
                          (0, s.jsx)(H.$n, {
                            onClick: () => l(null),
                            children: "Reset Selection",
                          }),
                        ],
                      }),
                }),
              }),
            }),
          ],
        });
      }
      const ct = (0, be.FB)();
      function dt(e) {
        const { rgGidMeetSteamEvents: t } = e,
          {
            rgAllRegistrations: n,
            rgPartnerIDs: r,
            rgValveAccounts: a,
            rgMapAccountToSessionTimes: o,
          } = (function (e) {
            const t = Ae(e),
              n = (0, it.qh)(),
              { bIsLoading: s, events: r } = (0, L.PB)(e),
              { data: a } = ot(e),
              [o, l, c] = (0, i.useMemo)(() => {
                if (
                  s ||
                  !a ||
                  0 == a.length ||
                  t.filter((e) => !e.isLoading).length != t.length
                )
                  return [null, null, null];
                const e = new Array(),
                  n = new Set(),
                  i = new Map();
                t.forEach((t) => {
                  t.data.forEach((t) => {
                    t.guests_registered > 0 &&
                      (e.push(t), t.partner_id && n.add(t.partner_id));
                  });
                });
                const o = new Map();
                return (
                  r.forEach((e) => {
                    e.jsondata.meet_steam_groups?.forEach((t) => {
                      t.sessions?.forEach((n) => {
                        o.set(
                          `${e.GID}_${t.group_id}_${n.id}`,
                          `${t.localized_session_title[_.Bhc]}@${(0, We.TW)(n.rtime_start)} ${(0, We.KC)(n.rtime_start)}`,
                        );
                      });
                    });
                  }),
                  a.forEach((e) => {
                    e.rgRegistrations.forEach((t) => {
                      const n = new I.b(t.steamid).GetAccountID(),
                        s =
                          o.get(`${e.gid}_${t.group_id}_${t.session_id}`) ||
                          `${t.group_id}:${t.session_id}`;
                      i.has(n) ? i.set(n, i.get(n) + `,${s}`) : i.set(n, s);
                    });
                  }),
                  [Array.from(n), e, i]
                );
              }, [t, s, a, r]);
            return (0, A.fI)(o)
              ? {
                  rgAllRegistrations: l,
                  rgPartnerIDs: o,
                  rgValveAccounts: n,
                  rgMapAccountToSessionTimes: c,
                }
              : {
                  rgAllRegistrations: void 0,
                  rgPartnerIDs: void 0,
                  rgValveAccounts: void 0,
                  rgMapAccountToSessionTimes: void 0,
                };
          })(t),
          l = (0, R.vh)(r),
          c = (0, i.useMemo)(() => {
            if (!(l && n && a && o)) return null;
            const e = new Map();
            a.forEach((t) => e.set(t.id, t));
            const t = [];
            return (
              n.forEach((n) => {
                const s = (0, R.Yd)(n.partner_id),
                  r = (0, A.Gl)(n.partner_id);
                t.push({
                  partner_id: n.partner_id ? "" + n.partner_id : "",
                  partner_name: s?.name || "Unknown",
                  name: n.name,
                  game: n.game || "",
                  accountid: n.accountid,
                  email: n.email_override,
                  guest_registrated: n.guests_registered - 1,
                  guest_names:
                    n.guest_names?.length > 0 ? n.guest_names.join(",") : "",
                  business_contact:
                    r && r.length > 0
                      ? r
                          .filter((e) => e.is_business_contact)
                          .map((t) => {
                            const n = new I.b(t.steamid),
                              s = e.get(n.GetAccountID());
                            return s?.displayName || t.steamid;
                          })
                          .join(",")
                      : "",
                  sessions: o.get(n.accountid) || "missing data",
                });
              }),
              t
            );
          }, [l, n, a, o]),
          d = ut();
        return l && r && c
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(H.JU, { children: "Registations" }),
                Boolean(c)
                  ? (0, s.jsxs)(u.tH, {
                      children: [
                        (0, s.jsx)(ht, { rgData: c }),
                        (0, s.jsx)(Ee.k, {
                          columns: d,
                          data: c,
                          getRowKey: (e) => e,
                          stickyHeader: !0,
                          nItemHeight: 28,
                          overscan: r.length,
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)(ht, { rgData: c }),
                      ],
                    })
                  : (0, s.jsx)(W.t, {
                      string: (0, Z.we)("#Loading"),
                      position: "center",
                    }),
              ],
            })
          : (0, s.jsx)(W.t, { string: (0, Z.we)("#Loading") });
      }
      function ut() {
        return (0, i.useMemo)(
          () => [
            ct.accessor("name", { header: "Name", size: 200 }),
            ct.accessor("accountid", { header: "Account ID", size: 150 }),
            ct.accessor("email", { header: "Email", size: 150 }),
            ct.accessor("guest_registrated", {
              header: "Guest Count",
              size: 100,
            }),
            ct.accessor("guest_names", { header: "Guest's Names", size: 100 }),
            ct.accessor("partner_id", { header: "Partner ID", size: 100 }),
            ct.accessor("partner_name", { header: "Partner Name", size: 300 }),
            ct.accessor("game", { header: "Game Name", size: 150 }),
            ct.accessor("business_contact", {
              header: "Business Contact",
              size: 150,
            }),
            ct.accessor("sessions", { header: "Sessions", size: 150 }),
          ],
          [],
        );
      }
      function ht(e) {
        const { rgData: t } = e,
          n = ut();
        return (0, s.jsx)(H.$n, {
          id: "download-csv",
          onClick: () =>
            (0, rt.K)(
              "registrationdump.csv",
              t,
              n.map((e) => ({
                accessorKey: e.accessorKey,
                header:
                  "string" == typeof e.header
                    ? e.header
                    : (e.accessorKey ?? ""),
              })),
            ),
          style: { width: "120px" },
          children: "Download CSV",
        });
      }
      function mt(e) {
        const t = I.b.InitFromClanID((0, q.H)()),
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, x.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          { bShowArchived: r, setShowArchived: a } = le(),
          { bIsLoading: o, events: l } = (0, L.PB)(n),
          c = i.useMemo(() => {
            if (!l) return null;
            const e =
                r && l
                  ? [...l]
                  : l?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = Array.from(
                (0, Q.bv)(e, (e) => (0, Q.J2)(new Date(1e3 * e.startTime))),
              );
            return t?.sort((e) => -e[0]), t;
          }, [l, r]);
        return o
          ? (0, s.jsx)(W.t, {})
          : c
            ? (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("a", {
                        href: `${ee.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                        children: "Open Meet Steam Event Dashboard",
                      }),
                      (0, s.jsx)(Le, { rgEventGIDs: n }),
                      (0, s.jsx)(lt, { rgEventGIDs: n }),
                    ],
                  }),
                  (0, s.jsx)(H.Yh, {
                    checked: r,
                    onChange: a,
                    label: "Show Past Events",
                  }),
                  (0, s.jsx)("hr", {}),
                  c.map((e) =>
                    (0, s.jsx)(
                      gt,
                      { month: new Date(1e3 * e[0]), events: e[1] },
                      e[0],
                    ),
                  ),
                ],
              })
            : null;
      }
      function gt(e) {
        const { month: t, events: n } = e,
          r = i.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
          a = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", { className: ne().MonthTitle, children: a }),
            (0, s.jsx)("div", {
              className: ne().MonthEvents,
              children: r.map((e) => (0, s.jsx)(pt, { oEvent: e }, e.GID)),
            }),
          ],
        });
      }
      function pt(e) {
        const { oEvent: t } = e,
          n = t.GID,
          r = I.b.InitFromClanID((0, q.H)()),
          a = (0, $.a)(),
          o = (0, G.my)(a, (0, q.H)(), n),
          l = o.isSuccess ? o.data : null,
          c = t.GetNameWithFallback(_.Bhc),
          d = (0, i.useMemo)(() => {
            const e = new Array();
            return (
              t.jsondata.meet_steam_groups?.forEach((t) => {
                t.sessions.forEach((n, s) => {
                  e.push({ group: t, session: n, firstSession: 0 == s });
                });
              }),
              e
            );
          }, [t.jsondata.meet_steam_groups]);
        return (0, s.jsxs)("div", {
          className: ne().EventRow,
          children: [
            (0, s.jsxs)("div", {
              className: ne().EventMainDetails,
              children: [
                (0, s.jsxs)("div", {
                  className: ne().TitleLine,
                  children: [
                    (0, s.jsx)("div", { className: ne().Title, children: c }),
                    (0, s.jsx)("div", {
                      className: ne().StartDate,
                      children: (0, Z.TW)(t?.startTime),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: ne().ActionLine,
                  children: [
                    (0, s.jsx)("div", {
                      children: (0, s.jsx)("a", {
                        href: `${ee.TS.COMMUNITY_BASE_URL}gid/${r.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                        children: "Edit",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        " | ",
                        (0, s.jsx)("a", {
                          href: `${ee.TS.STORE_BASE_URL}meetsteam/${n}`,
                          children: "View",
                        }),
                      ],
                    }),
                    Boolean(
                      t.BIsUnlistedEvent() &&
                        t.jsondata.meet_steam_groups?.length > 0,
                    ) &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(jt, { gid: n }),
                          " | ",
                          (0, s.jsx)("a", {
                            href: `${ee.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${ee.iA.accountid}`,
                            children: "QR Page",
                          }),
                          " | ",
                          (0, s.jsx)("a", {
                            href: `${ee.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                            children: "Attendance List",
                          }),
                          (0, s.jsx)(ft, { gid: n }),
                          (0, s.jsx)(_t, { gid: n }),
                          (0, s.jsx)(xt, { gid: n }),
                          (0, s.jsx)(vt, { gid: n }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, s.jsx)("thead", {
                    children: (0, s.jsxs)("tr", {
                      children: [
                        (0, s.jsx)("th", { children: "Group" }),
                        (0, s.jsx)("th", { children: "Session Start" }),
                        (0, s.jsx)("th", { children: "Session Duration" }),
                        (0, s.jsx)("th", { children: "Seats" }),
                        (0, s.jsx)("th", {
                          style: { width: "50px" },
                          children: "Registered",
                        }),
                        (0, s.jsx)("th", {
                          style: { width: "50px" },
                          children: "Guests",
                        }),
                        (0, s.jsx)("th", {
                          style: { width: "100px" },
                          children: "Details",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("tbody", {
                    children: [
                      (0, s.jsxs)("tr", {
                        children: [
                          Boolean(d.length > 0)
                            ? (0, s.jsx)(
                                yt,
                                {
                                  gid: n,
                                  group: d[0].group,
                                  session: d[0].session,
                                  rgAvailability: l,
                                },
                                d[0].session.id,
                              )
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("td", { children: "None" }),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                ],
                              }),
                          (0, s.jsx)("td", {
                            children:
                              !Boolean(
                                t?.BIsUnlistedEvent() &&
                                  t.jsondata.meet_steam_groups?.length > 0,
                              ) &&
                              (0, s.jsx)("div", {
                                children:
                                  "Invite Disabled. Event need to publish into Unlisted State",
                              }),
                          }),
                        ],
                      }),
                      d
                        .filter((e, t) => t > 0)
                        .map((e) =>
                          (0, s.jsx)(
                            "tr",
                            {
                              children: (0, s.jsx)(yt, {
                                group: e.group,
                                gid: n,
                                session: e.session,
                                rgAvailability: l,
                                firstSession: e.firstSession,
                              }),
                            },
                            e.session.id,
                          ),
                        ),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function ft(e) {
        const { gid: t } = e,
          n = re();
        return Array.from(n.keys()).includes(t)
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                " | ",
                (0, s.jsx)("a", {
                  href: `${ee.TS.PARTNER_BASE_URL}meetsteam/survey/${t}`,
                  children: "Survey",
                }),
              ],
            })
          : null;
      }
      function xt(e) {
        const { gid: t } = e,
          [n, r, i] = (0, y.uD)();
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsxs)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: [
                "Invite via CSV",
                (0, s.jsx)(Y.o, {
                  tooltip:
                    "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                }),
              ],
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(K.E, {
                active: n,
                children: (0, s.jsx)(je, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function _t(e) {
        const { gid: t } = e,
          [n, r, i] = (0, y.uD)();
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Invite",
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(K.E, {
                active: n,
                children: (0, s.jsx)(ve, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function vt(e) {
        const { gid: t } = e,
          [n, r, i] = (0, y.uD)();
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Show Invites",
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(K.E, {
                active: n,
                children: (0, s.jsx)(Ze, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function jt(e) {
        const { gid: t } = e,
          n = (0, $.a)(),
          [r, a] = (0, i.useState)(!1),
          [o, l] = (0, i.useState)(null);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("a", {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation(), a(!0);
                const s = await (async function (e, t) {
                  const n = j.w.Init(S.VI),
                    s = I.b.InitFromClanID((0, q.H)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(s.ConvertTo64BitString());
                  const r = await S.ZK.TestFireEmails(e, n);
                  return console.log("test fire", r), r.GetEResult();
                })(n, t);
                l(s);
              },
              children: "Email Self",
            }),
            (0, s.jsx)(K.E, {
              active: r,
              children: (0, s.jsxs)(V.o0, {
                bAlertDialog: !0,
                strTitle: "Test Emails",
                closeModal: () => {
                  a(!1), l(null);
                },
                onOK: () => {},
                children: [
                  (0, s.jsx)("div", {
                    children:
                      "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
                  }),
                  Boolean(null == o) &&
                    (0, s.jsx)(W.t, { string: (0, Z.we)("#Loading") }),
                  Boolean(o == v.R) &&
                    (0, s.jsx)("div", { children: "Test Emails Sent" }),
                  Boolean(o && o != v.R) &&
                    (0, s.jsx)("div", {
                      children: "Email Failed to Send. Check console",
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function St(e, t) {
        const n = P().unix(e),
          s = P().unix(e).tz(t),
          r = s.utcOffset() - n.utcOffset(),
          i = new Date(1e3 * (e + 60 * r)),
          a = new Date();
        return `${i.getFullYear() == a.getFullYear() ? ((0, X.$w))(i, !1, !1) : ((0, X._9))(i, !1, !1)} ${(0, X.KC)(e + 60 * r)} ${s.format("z")}`;
      }
      function yt(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: r,
            session: i,
            firstSession: a = !0,
          } = e,
          o = Z.NT.GetWithFallback(n?.localized_session_title, _.Bhc),
          l = Z.NT.GetWithFallback(n?.localized_session_description, _.Bhc),
          c = Z.NT.GetWithFallback(n?.localized_intended_audience, _.Bhc),
          d = r?.find((e) => e.group_id == n.group_id && e.session_id == i.id),
          [h, m, g] = (0, y.uD)(),
          p = F((0, $.a)(), t, n?.group_id);
        let f = Math.min((d?.guest_count / i.max_capacity) * 100, 100),
          x = d?.guest_count > 0 ? `${f}%` : "0%",
          v = d?.guest_count >= i.max_capacity;
        const j = Intl.DateTimeFormat().resolvedOptions().timeZone,
          S =
            "in_person" === i.location_type
              ? (i.in_person_time_zone ?? U.hh)
              : j;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            a && Boolean(n)
              ? (0, s.jsxs)("td", {
                  children: [
                    o,
                    (0, s.jsx)(Y.o, { tooltip: l }),
                    Boolean(c) && (0, s.jsx)("div", { children: c }),
                  ],
                })
              : (0, s.jsx)("td", {}),
            (0, s.jsx)("td", {
              children: (0, s.jsx)("span", { children: St(i.rtime_start, S) }),
            }),
            (0, s.jsx)("td", {
              children: (0, X.IH)(i.rtime_end - i.rtime_start),
            }),
            (0, s.jsxs)("td", {
              children: [
                d?.guest_count || 0,
                " / ",
                i.max_capacity,
                (0, s.jsx)("br", {}),
                (0, s.jsx)("div", {
                  className: ne().CapacityBarMax,
                  children: (0, s.jsx)("div", {
                    className: (0, J.A)(
                      ne().CapacityBarCurrent,
                      v ? ne().Full : "",
                    ),
                    style: { width: x },
                  }),
                }),
              ],
            }),
            (0, s.jsx)("td", {
              children:
                p.isSuccess &&
                (0, s.jsx)(s.Fragment, {
                  children: p.data?.filter((e) => e.session_id == i.id).length,
                }),
            }),
            (0, s.jsx)("td", {
              children:
                p.isSuccess &&
                (0, s.jsx)(s.Fragment, {
                  children: p.data
                    ?.filter((e) => e.session_id == i.id)
                    .reduce((e, t) => e + t.guests_registered - 1, 0),
                }),
            }),
            (0, s.jsxs)("td", {
              children: [
                (0, s.jsx)(H.$n, { onClick: m, children: "Details" }),
                (0, s.jsx)(u.tH, {
                  children: (0, s.jsx)(K.E, {
                    active: h,
                    children: (0, s.jsx)(et, {
                      gid: t,
                      title: o,
                      group: n,
                      session: i,
                      hideModal: g,
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var wt = n(39777),
        bt = n(35380),
        Et = n(14336),
        Ct = n(16021),
        It = n(65522),
        Dt = n(48479);
      function Rt(e) {
        const { rgEvents: t } = M(),
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, x.Tc)("interest_results", "application_config"),
            );
            return (0, i.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [r, a] = (0, i.useState)(""),
          o = D.TS.PARTNER_BASE_URL + "meetsteam",
          l = (0, i.useMemo)(() => {
            const e = new Map();
            return (
              n.forEach((t) => {
                t.results?.attending?.forEach((t) => {
                  e.has(t) ? e.set(t, e.get(t) + 1) : e.set(t, 1);
                });
              }),
              e
            );
          }, [n]);
        return (0, s.jsxs)("div", {
          className: ne().EventList,
          children: [
            (0, s.jsx)(H.pd, {
              type: "text",
              value: r,
              onChange: (e) => a(e.currentTarget.value.trim()),
              label: "Filter",
            }),
            (0, s.jsxs)("div", {
              children: ["Total Survey Responses: ", (0, _e.D)(n?.length || 0)],
            }),
            (0, s.jsxs)("div", {
              children: [
                "Link to partner-facing survey: ",
                (0, s.jsx)("a", { href: o, children: o }),
              ],
            }),
            t
              .filter(
                (e) => 0 == r.length || e.name.includes(r) || e.id.includes(r),
              )
              .map((e) =>
                (0, s.jsx)(
                  At,
                  {
                    conf: e,
                    nInterestCount: l.get(e.id) ?? 0,
                    rgSurveyInterest: n,
                  },
                  e.id,
                ),
              ),
            (0, s.jsx)(Ot, { rgSurveyInterest: n }),
          ],
        });
      }
      function At(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: r } = e;
        return (0, s.jsx)(Dt.qx, {
          title: `${t.name} in ${t.place} around ${t.time}: Interest: ${(0, _e.D)(n)}`,
          bStartMinimized: !0,
          children: (0, s.jsx)(kt, { conf: t, rgSurveyInterest: r }),
        });
      }
      function Tt(e) {
        if ("number" == typeof e) return e;
        const t = e.slice(-1).toUpperCase(),
          n = parseFloat(e.slice(0, -1));
        switch (t) {
          case "K":
            return 1e3 * n;
          case "M":
            return 1e6 * n;
          case "B":
            return 1e9 * n;
          default:
            return parseFloat(e);
        }
      }
      function kt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, i.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          ),
          a = (0, it.qh)(),
          { bComplete: o, nCount: l } = (function (e) {
            const [t, n] = (0, i.useState)(!1),
              [s, r] = (0, i.useState)(0),
              a = (0, b.jE)();
            return (
              (0, i.useEffect)(() => {
                (async () => {
                  let t = 0;
                  for (const n of e) {
                    const e = n.results.partner_id;
                    new I.b(n.steamid).GetAccountID(),
                      await Promise.all([
                        (0, R.qG)(e),
                        a.prefetchQuery({
                          queryKey: N(e),
                          queryFn: async () => B(e),
                        }),
                        (0, A.PQ)(a, e),
                      ]),
                      ++t,
                      r(t);
                  }
                  n(!0);
                })();
              }, [a, e]),
              { bComplete: t, nCount: s }
            );
          })(r);
        return o
          ? a?.length
            ? r && 0 != r.length
              ? (0, s.jsx)(Mt, { conf: t, rgSurveyInterest: r })
              : (0, s.jsx)("div", { children: "No users with interest" })
            : (0, s.jsx)(W.t, {
                position: "center",
                string: "Loading Valve Account info (this shouldn't take long)",
              })
          : (0, s.jsx)(W.t, {
              position: "center",
              string: `Loading ${l} of ${r.length}`,
            });
      }
      function Mt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, b.jE)();
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)(H.$n, {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Valve Partner Contacts",
                  "Email Override",
                  "Account Name",
                  "Name",
                  "Have you met steam",
                  "Survey Time",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Best AppID Name",
                  "Long Term Sales Rank",
                ]),
                  n.forEach((t) => {
                    const n = [],
                      s = new Ye.b2(t.steamid);
                    n.push("" + s.GetAccountID());
                    const i = (0, Et.z0)(s.GetAccountID()),
                      a = t.results.partner_id;
                    n.push("" + a);
                    const o = (0, A.N6)(a).map(
                      (e) => (0, it.YA)(r, e)?.displayName || "" + e,
                    );
                    n.push(o.join("|"));
                    const l = t.results.email_override || "";
                    n.push("" + l),
                      n.push(i?.m_strPlayerName ? i.m_strPlayerName : "");
                    const c = ze(s.GetAccountID(), a);
                    if (
                      (n.push(c ? c.realname : ""),
                      n.push(t.results.have_you_met_steam ? "yes" : "no"),
                      t.results.submit_time)
                    ) {
                      const e = t.results.submit_time,
                        s = new Date(1e3 * e)
                          .toISOString()
                          .replace("T", " ")
                          .split(".")[0];
                      n.push(s);
                    } else n.push("");
                    n.push("" + t.results.attending?.length),
                      n.push(t.results.country_code),
                      n.push(
                        t.results.preferred_language
                          ? (0, _.LgB)(t.results.preferred_language)
                          : "",
                      );
                    const d = (0, R.Yd)(a);
                    n.push(d ? d.name : "");
                    const u = z(r, a);
                    u
                      ? (n.push("" + Tt(u.strGrossUSD)),
                        n.push("" + u.nBestAppID),
                        n.push(Ct.A.Get().GetApp(u.nBestAppID)?.GetName()),
                        n.push("" + u.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const s = t.name.replace(" ", "_") + "_conference_interest.csv";
                he.g.WriteCSVToFile(e, s);
              },
              children: "Export to CSV",
            }),
            (0, s.jsxs)("table", {
              className: "landingTable",
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "Name and Email" }),
                      (0, s.jsx)("th", { children: "Have you met steam?" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Valve Contacts" }),
                      (0, s.jsx)("th", { children: "Partner Revenue" }),
                      (0, s.jsx)("th", { children: "Biggest Game" }),
                      (0, s.jsx)("th", { children: "Long Term Sales Rank" }),
                      (0, s.jsx)("th", { children: "Attending count?" }),
                      (0, s.jsx)("th", { children: "Alt Language" }),
                      (0, s.jsx)("th", { children: "Country" }),
                      (0, s.jsx)("th", { children: "Submit Survey Time" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: n.map((e) =>
                    (0, s.jsx)(
                      Nt,
                      {
                        strsteamid: e.steamid,
                        partnerID: e.results.partner_id,
                        registration: e.results,
                      },
                      t.id + "_" + e.steamid,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function Nt(e) {
        const { partnerID: t, registration: n } = e;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: (0, s.jsx)(Bt, { ...e }) }),
            (0, s.jsx)("td", { children: n.have_you_met_steam ? "" : "NO" }),
            (0, s.jsx)(zt, { nPartnerID: t }),
            (0, s.jsx)("td", { children: n.attending.length }),
            (0, s.jsx)("td", {
              children:
                n.english_not_good && n.preferred_language
                  ? (0, _.LgB)(n.preferred_language)
                  : "",
            }),
            (0, s.jsx)("td", { children: n.country_code }),
            (0, s.jsx)("td", { children: (0, Z.TW)(n.submit_time) }),
          ],
        });
      }
      function Bt(e) {
        const { strsteamid: t, partnerID: n, registration: r } = e,
          i = (0, Et.hW)(t),
          a = Be(new Ye.b2(t).GetAccountID(), n),
          o = a?.realname || i.data?.m_strPlayerName;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: o }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("span", { children: r.email_override || a?.email }),
          ],
        });
      }
      function zt(e) {
        const { nPartnerID: t } = e,
          [n] = (0, R.UA)(t),
          r = (function (e) {
            const t = (0, w.I)({
              queryKey: N(e),
              queryFn: async () => B(e),
              enabled: Boolean(e),
            });
            return t.isLoading ? null : t.data;
          })(t),
          i = (0, A.Z4)(t),
          a = (0, b.jE)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("td", { children: n ? n?.name + ` (${t})` : t }),
            (0, s.jsx)("td", {
              children: i
                ?.map((e) => (0, it.YA)(a, e)?.displayName || "" + e)
                .join(","),
            }),
            (0, s.jsxs)("td", { children: ["$", r?.strGrossUSD] }),
            (0, s.jsx)("td", {
              children:
                r?.nBestAppID > 0
                  ? (0, s.jsx)(Ft, { appid: r?.nBestAppID })
                  : "N/A",
            }),
            (0, s.jsx)("td", { children: r?.nBestAppLongTermSalesRank }),
          ],
        });
      }
      function Ft(e) {
        const { appid: t } = e,
          n = (0, bt.$5)(t),
          { data: r } = (0, wt.J$)(n);
        return (0, s.jsx)(It.Q, {
          id: n,
          children: (0, s.jsx)("span", { children: r?.name || t }),
        });
      }
      function Ot(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, b.jE)(),
          r =
            ((0, it.qh)(),
            (0, i.useMemo)(
              () =>
                t.filter((e) =>
                  Boolean(e.results?.suggestion?.trim().length > 0),
                ),
              [t],
            ));
        return (0, s.jsxs)(Dt.qx, {
          title: `Alternative Suggestions (${r.length})`,
          bStartMinimized: !0,
          children: [
            (0, s.jsx)(H.$n, {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Email Override",
                  "Account Name",
                  "name",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Long Term Sales Rank",
                  "Suggestion",
                ]),
                  r.forEach((t) => {
                    const s = [],
                      r = new Ye.b2(t.steamid);
                    s.push("" + r.GetAccountID());
                    const i = (0, Et.z0)(r.GetAccountID()),
                      a = t.results.partner_id;
                    s.push("" + a);
                    const o = t.results.email_override || "";
                    s.push("" + o),
                      s.push(i?.m_strPlayerName ? i.m_strPlayerName : "");
                    const l = ze(r.GetAccountID(), a);
                    s.push(l ? l.realname : ""),
                      s.push("" + t.results.attending?.length),
                      s.push(t.results.country_code),
                      s.push(
                        t.results.preferred_language
                          ? (0, _.LgB)(t.results.preferred_language)
                          : "",
                      );
                    const c = (0, R.Yd)(a);
                    s.push(c ? c.name : "");
                    const d = z(n, a);
                    d
                      ? (s.push("" + Tt(d.strGrossUSD)),
                        s.push("" + d.nBestAppID),
                        s.push("" + d.nBestAppLongTermSalesRank))
                      : (s.push(""), s.push(""), s.push("")),
                      s.push(t.results.suggestion),
                      e.push(s);
                  });
                he.g.WriteCSVToFile(e, "suggestsion.csv");
              },
              children: "Export to CSV (wait until the table populates fully)",
            }),
            (0, s.jsxs)("table", {
              className: "landingTable",
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "Name and Email" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Valve Contacts" }),
                      (0, s.jsx)("th", { children: "Partner Revenue" }),
                      (0, s.jsx)("th", { children: "Biggest Game" }),
                      (0, s.jsx)("th", { children: "Long Term Sales Rank" }),
                      (0, s.jsx)("th", { children: "Suggestions" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: r.map((e) =>
                    (0, s.jsx)(Pt, { survey: e }, "suggested" + e.steamid),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function Pt(e) {
        const { survey: t } = e;
        new Ye.b2(t.steamid);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", {
              children: (0, s.jsx)(Bt, {
                strsteamid: t.steamid,
                partnerID: t.results.partner_id,
                registration: t.results,
              }),
            }),
            (0, s.jsx)(zt, { nPartnerID: t.results.partner_id }),
            (0, s.jsx)("td", { children: t.results.suggestion.trim() }),
          ],
        });
      }
      const Lt = i.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            $t ||
              ($t = new (De())(
                async (e) => {
                  const t = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = { sessionid: (0, D.KC)(), strAccountIDs: e.join(",") },
                    s = await C().get(t, { params: n, withCredentials: !0 });
                  if (!s || 200 != s?.status || s?.data?.success != v.R)
                    throw `Failed to load app to user email and langs: ${((0, ue.H))(s).strErrorMsg}`;
                  const r = new Map();
                  return (
                    s.data.users.forEach((e) => {
                      const t = new I.b(e.steamid);
                      r.set(t.GetAccountID(), e);
                    }),
                    e.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return $t;
          })().load(e),
      });
      function Gt(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let $t;
      var Ht = n(73745),
        Ut = n(3049);
      function qt(e) {
        const t = (0, $.a)(),
          n = (0, it.qh)(),
          r = (function (e) {
            const t = (0, w.I)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const t = j.w.Init(S.Rl),
                  n = new Date();
                n.setFullYear(n.getFullYear() - 2),
                  t.Body().set_rt_oldest_date(0);
                const s = await S.ZK.GetSaleEventOrganizers(e, t);
                return s.BSuccess()
                  ? s
                      .Body()
                      .info()
                      .map((e) => e.toObject())
                  : [];
              },
            });
            return t.isLoading ? null : t.data;
          })(t),
          a = (0, i.useMemo)(() => {
            if (!r || !n) return null;
            const e = new Set(n.map((e) => e.id));
            return r
              .filter((t) => !e.has(t.accountid))
              .sort(
                (e, t) => t.clan_event_gids?.length - e.clan_event_gids.length,
              );
          }, [r, n]);
        return a
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)(H.$n, {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      a.forEach((t) => {
                        const n = (0, Et.z0)(t.accountid),
                          s =
                            ((r = t.accountid),
                            Ne.L.getQueryData(["UserEmailAndLangs", r]));
                        var r;
                        e.push([
                          n?.m_strPlayerName || "",
                          "" + t.accountid,
                          s?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString((0, Ut.J)()),
                        ]);
                      });
                    he.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                  children: [
                    "CSV Export",
                    (0, s.jsx)(Y.o, {
                      tooltip:
                        "Wait until the page finishes loading before export",
                    }),
                  ],
                }),
                (0, s.jsxs)("table", {
                  children: [
                    (0, s.jsx)("thead", {
                      children: (0, s.jsxs)("tr", {
                        children: [
                          (0, s.jsx)("th", { children: "User" }),
                          (0, s.jsx)("th", { children: "Email" }),
                          (0, s.jsx)("th", { children: "Events" }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("tbody", {
                      children: a.map((e) =>
                        (0, s.jsx)(Vt, { organizer: e }, e.accountid),
                      ),
                    }),
                  ],
                }),
              ],
            })
          : (0, s.jsx)(W.t, { string: (0, Z.we)("#Loading"), size: "medium" });
      }
      function Vt(e) {
        const { organizer: t } = e,
          n = (0, i.useMemo)(
            () => I.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          r = (0, Et.hW)(n),
          a = (function (e) {
            const t = i.useContext(Lt);
            return (0, w.I)(Gt(t, e));
          })(t.accountid),
          o = r.data?.m_strPlayerName || "";
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsxs)("td", { children: [o, " (", t.accountid, ")"] }),
            (0, s.jsx)("td", { children: a?.data?.email_address }),
            (0, s.jsx)("td", {
              children: (0, s.jsx)(Kt, {
                name: o,
                rgClanEventGIDs: t.clan_event_gids,
              }),
            }),
          ],
        });
      }
      function Kt(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [r, i, a] = (0, Ht.uD)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(H.$n, {
              onClick: i,
              children: ["See ", (0, _e.D)(n.length), " Events"],
            }),
            (0, s.jsx)(K.E, {
              active: r,
              children: (0, s.jsx)(V.o0, {
                bAlertDialog: !0,
                closeModal: a,
                strTitle: `${t}'s Events`,
                children: n.map((e) => (0, s.jsx)(Wt, { gid: e }, e)),
              }),
            }),
          ],
        });
      }
      function Wt(e) {
        const { gid: t } = e,
          n = (0, L.RR)(t);
        return n
          ? (0, s.jsxs)("a", {
              href: `${ee.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
              target: "_blank",
              children: [
                (0, s.jsx)("div", { children: n.GetNameWithFallback(_.Bhc) }),
                (0, s.jsx)("img", { src: n.GetImageURL("capsule", _.Bhc) }),
              ],
            })
          : (0, s.jsxs)("div", { children: ["Loading ", t] });
      }
      function Yt(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(Rt, {}) }),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(mt, {}) }),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(qt, {}) }),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(se, {}) }),
              onClick: t,
            },
          ];
        return (0, s.jsx)(oe, {
          children: (0, s.jsxs)("div", {
            className: f().AdminPageCtn,
            children: [
              (0, s.jsxs)("div", {
                className: f().PageTitle,
                children: [
                  "Meet Steam Admin Dashboard ",
                  (0, x.Fd)("current_year", "application_config"),
                ],
              }),
              (0, s.jsx)("hr", {}),
              (0, s.jsx)(g.V, { tabs: n }),
              (0, s.jsx)("div", { className: m().ClearThings }),
              (0, s.jsx)("br", {}),
            ],
          }),
        });
      }
      var Jt = n(65946),
        Qt = n(79645),
        Zt = n(1909),
        Xt = n(56330),
        en = n(85761),
        tn = n.n(en);
      function nn(e) {
        const t = (function () {
            const [e] = (0, i.useState)(() =>
              (0, D.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: r } = (0, Et.js)(D.iA.accountid),
          [a, o] = (0, i.useState)(!1),
          [l, c] = (0, i.useState)(!1),
          [d, u] = (0, i.useState)(!1),
          [h, m] = (0, i.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !r || r.m_bPlayerNamePending
            ? (0, s.jsx)(W.t, {
                size: "medium",
                position: "center",
                string: (0, Z.we)("#Loading"),
              })
            : (0, s.jsxs)("div", {
                className: (0, J.A)(f().AdminPageCtn, tn().Ctn),
                children: [
                  (0, s.jsx)("div", {
                    className: f().PageTitle,
                    children: (0, Z.we)("#MeetSteam_MainTitle"),
                  }),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("div", {
                    className: f().ColumnCtn,
                    children: (0, s.jsxs)("div", {
                      className: f().LeftCol,
                      children: [
                        (0, s.jsxs)("div", {
                          className: f().SectionCtn,
                          children: [
                            (0, s.jsxs)("h1", {
                              children: [
                                " ",
                                (0, Z.PP)(
                                  "#MeetSteam_Intro",
                                  r.m_strPlayerName,
                                  (0, s.jsx)("br", {}),
                                ),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: f().IntroText,
                              children: (0, Z.we)("#MeetSteam_Desc1"),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: f().SectionCtn,
                          children: (0, s.jsx)(on, {
                            oRegistration: h,
                            fnSetRegistration: m,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: f().SectionCtn,
                          children: (0, s.jsx)(sn, {
                            oRegistration: h,
                            fnSetRegistration: m,
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: (0, J.A)(f().SectionCtn, f().ActionBar),
                          children: [
                            (0, s.jsx)(H.jn, {
                              onClick: async () => {
                                c(!0), o(!1), u(!1);
                                const e = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                  t = new FormData();
                                t.append("sessionid", (0, D.KC)()),
                                  t.append(
                                    "registrationJson",
                                    JSON.stringify(h),
                                  );
                                try {
                                  const n = await C().post(e, t, {
                                    withCredentials: !0,
                                  });
                                  n.data.success != v.R
                                    ? (console.error(
                                        "MeetSteamLanding failed " +
                                          n.data.success,
                                      ),
                                      o(!0))
                                    : u(!0);
                                } catch (e) {
                                  console.error(
                                    "MeetSteamLanding failed caught",
                                    e,
                                  );
                                }
                                c(!1);
                              },
                              children: (0, Z.we)("#Button_Submit"),
                            }),
                            l &&
                              (0, s.jsx)(W.t, {
                                size: "medium",
                                position: "center",
                                string: (0, Z.we)("#Saving"),
                              }),
                            d &&
                              (0, s.jsx)("div", {
                                children: (0, Z.we)("#Button_Saved"),
                              }),
                            a &&
                              (0, s.jsx)("div", {
                                className: Xt.ErrorStylesWithIcon,
                                children: (0, Z.we)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
          : (0, s.jsx)("div", {
              className: tn().Ctn,
              children: (0, Z.we)("#MeetSteam_closed"),
            });
      }
      function sn(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          { rgEvents: r, rgOldEvents: i, selectConference: a } = M();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("h1", {
              children: (0, Z.we)("#MeetSteam_Events_Interest"),
            }),
            (0, s.jsx)("p", {
              children: (0, Z.PP)(
                "#MeetSteam_Events_title",
                (0, D.Tc)("meet_steam_year", "application_config") || "2025",
              ),
            }),
            (0, s.jsxs)("p", {
              children: [
                (0, s.jsx)("span", {
                  className: tn().Indicator,
                  children: "*",
                }),
                " ",
                (0, Z.PP)("#MeetSteam_Events_desc"),
              ],
            }),
            Boolean(a) &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("p", {
                    children: (0, Z.we)("#MeetSteam_ConferenceOrg"),
                  }),
                  (0, s.jsx)(rn, { ...e, rgConference: [a] }),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("h2", {
                    children: (0, Z.we)("#MeetSteam_OtherConference"),
                  }),
                ],
              }),
            (0, s.jsx)(rn, { ...e, rgConference: r }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(H.pd, {
              type: "text",
              value: t.suggestion || "",
              onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
              label: (0, Z.we)("#MeetSteam_others"),
            }),
            Boolean(i?.length > 0) &&
              (0, s.jsx)(Dt.qx, {
                bStartMinimized: !0,
                title: (0, Z.we)("#MeetSteam_PastEvents", i.length),
                children: (0, s.jsx)(rn, { ...e, rgConference: i }),
              }),
          ],
        });
      }
      function rn(e) {
        const { rgConference: t } = e;
        return (0, s.jsxs)("table", {
          children: [
            (0, s.jsx)("thead", {
              children: (0, s.jsxs)("tr", {
                children: [
                  (0, s.jsx)("th", {}),
                  (0, s.jsx)("th", {}),
                  (0, s.jsx)("th", {}),
                  (0, s.jsx)("th", {}),
                ],
              }),
            }),
            (0, s.jsx)("tbody", {
              children: t.map((t) =>
                (0, s.jsxs)(
                  "tr",
                  {
                    children: [
                      (0, s.jsx)("td", {
                        children: t.attending
                          ? (0, s.jsx)("span", {
                              className: tn().Indicator,
                              children: "*",
                            })
                          : "",
                      }),
                      (0, s.jsxs)("td", {
                        children: [
                          (0, s.jsx)("div", { children: t.name }),
                          (0, s.jsx)("div", { children: t.place }),
                        ],
                      }),
                      (0, s.jsx)("td", {
                        children: (0, s.jsx)("div", { children: t.time }),
                      }),
                      (0, s.jsx)("td", {
                        children: (0, s.jsx)(an, { ...e, conf: t }),
                      }),
                    ],
                  },
                  t.id,
                ),
              ),
            }),
          ],
        });
      }
      function an(e) {
        const { oRegistration: t, fnSetRegistration: n, conf: r } = e;
        return (0, s.jsx)(H.Yh, {
          checked: t.attending?.includes(r.id),
          onChange: (e) => {
            let s = t.attending ? [...t.attending] : [];
            e && !s.includes(r.id)
              ? (s.push(r.id), n({ ...t, attending: s }))
              : !e &&
                s.includes(r.id) &&
                (s.splice(s.indexOf(r.id), 1), n({ ...t, attending: s }));
          },
          tooltip: (0, Z.we)("#MeetSteam_attend_ttip"),
        });
      }
      function on(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          r = (0, Et.js)(D.iA.accountid),
          a = (function (e) {
            const t = (function () {
                const [e] = (0, i.useState)(
                  () =>
                    (0, D.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, i.useState)(() =>
                  (0, D.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              s = Be(D.iA.accountid, e != n ? e : null);
            return e == n ? t : s?.email;
          })(t?.partner_id),
          [o, l] = (0, i.useState)(() =>
            Boolean((t.email_override && t.email_override != a) || !a),
          ),
          [c, d, u] = (0, Jt.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return r.data
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("h1", { children: (0, Z.we)("#MeetSteam_You") }),
                (0, s.jsx)("p", { children: (0, Z.we)("#MeetSteam_You_Desc") }),
                (0, s.jsx)(ln, {
                  nPartnerID: t.partner_id,
                  label: (0, Z.we)("#MeetSteam_You_Company"),
                  setPartnerID: (e) => n({ ...t, partner_id: e }),
                }),
                (0, s.jsxs)("div", {
                  className: tn().EmailInfoRow,
                  children: [
                    (0, s.jsx)("div", {
                      className: tn().EmailField,
                      children: (0, s.jsx)(H.pd, {
                        type: "string",
                        label: (0, Z.we)("#MeetSteam_You_Email"),
                        disabled: !o,
                        value: t.email_override || a || "",
                        placeholder: (0, Z.we)("#MeetSteam_You_EmailMissing"),
                        mustBeEmail: !0,
                        onChange: (e) =>
                          n({ ...t, email_override: e.currentTarget.value }),
                      }),
                    }),
                    !o &&
                      (0, s.jsx)(H.Yh, {
                        checked: o,
                        onChange: l,
                        label: (0, Z.we)("#MeetSteam_You_Update"),
                        tooltip: (0, Z.we)("#MeetSteam_You_Update_ttip"),
                      }),
                  ],
                }),
                (0, s.jsx)(H.JU, {
                  children: (0, Z.we)("#MeetSteam_NeverMet"),
                }),
                (0, s.jsx)(H.Yh, {
                  label: (0, Z.we)("#MeetSteam_NeverMetNo"),
                  checked: c,
                  onChange: (e) => n({ ...t, have_you_met_steam: !e }),
                }),
                (0, s.jsx)(H.JU, {
                  children: (0, Z.we)("#MeetSteam_CapabableEnglish"),
                }),
                (0, s.jsxs)("div", {
                  className: tn().RadioButtonCtn,
                  children: [
                    (0, s.jsx)(H.Od, {
                      className: tn().RadioButtons,
                      checked: !d,
                      onChange: (e) =>
                        e &&
                        n({
                          ...t,
                          english_not_good: void 0,
                          preferred_language: void 0,
                        }),
                      label: (0, Z.we)("#MeetSteam_CapabableEnglish_Yes"),
                    }),
                    (0, s.jsx)(H.Od, {
                      className: tn().RadioButtons,
                      checked: d,
                      onChange: (e) =>
                        e &&
                        n({
                          ...t,
                          english_not_good: !0,
                          preferred_language: (0, _.sfN)(D.TS.LANGUAGE),
                        }),
                      label: (0, Z.we)("#MeetSteam_CapabableEnglish_No"),
                    }),
                  ],
                }),
                d &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("br", {}),
                      (0, s.jsx)(H.JU, {
                        children: (0, Z.we)("#MeetSteam_LanguagePref"),
                      }),
                      (0, s.jsx)(Zt.Ng, {
                        selectedLang: u,
                        bAllowUnsetOption: !1,
                        strTooltip: (0, Z.we)("#MeetSteam_LanguagePref_ttip"),
                        fnOnLanguageChanged: (e) =>
                          n({ ...t, preferred_language: e }),
                      }),
                    ],
                  }),
              ],
            })
          : (0, s.jsx)(W.t, {
              size: "medium",
              position: "center",
              string: (0, Z.we)("#Loading"),
            });
      }
      function ln(e) {
        const { nPartnerID: t, setPartnerID: n, label: r } = e,
          i = (0, Qt.c)(D.iA.accountid);
        if (!i)
          return (0, s.jsx)(W.t, {
            size: "small",
            position: "center",
            string: (0, Z.we)("#Loading"),
          });
        if (1 == i.length) return null;
        const a = [];
        return (
          i.forEach((e) =>
            a.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          (0, s.jsx)(H.m, {
            layout: "inline",
            label: r,
            rgOptions: a,
            selectedOption: t,
            onChange: (e) => {
              n(e.data);
            },
          })
        );
      }
      var cn = n(20587),
        dn = n(13038),
        un = n.n(dn);
      function hn(e) {
        const { data: t } = (0, Et.js)(D.iA.accountid),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("survey_event_name", "application_config") || "",
            );
            return e;
          })(),
          r = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("survey_data", "application_config") || "",
            );
            return e;
          })(),
          [a, l] = (0, i.useState)(() => r || ""),
          { surveyGID: c } = (0, o.g)(),
          [d, u] = (0, i.useState)(!1),
          [h, m] = (0, i.useState)(!1),
          [g, p] = (0, i.useState)(!1);
        return !t || t.m_bPlayerNamePending
          ? (0, s.jsx)(W.t, {
              size: "medium",
              position: "center",
              string: (0, Z.we)("#Loading"),
            })
          : (0, s.jsxs)("div", {
              className: (0, J.A)(f().AdminPageCtn, un().Ctn),
              children: [
                (0, s.jsx)("div", {
                  className: f().PageTitle,
                  children: (0, Z.we)("#MeetSteam_PostSurvey_Title", n),
                }),
                (0, s.jsx)("hr", {}),
                (0, s.jsx)("div", {
                  className: f().ColumnCtn,
                  children: (0, s.jsxs)("div", {
                    className: f().LeftCol,
                    children: [
                      (0, s.jsxs)("div", {
                        className: f().SectionCtn,
                        children: [
                          (0, s.jsx)("div", {
                            children: (0, Z.we)(
                              "#MeetSteam_PostSurvey_Question",
                            ),
                          }),
                          (0, s.jsx)("textarea", {
                            rows: 10,
                            onChange: (e) => l(e.currentTarget.value),
                            value: a,
                            autoFocus: !0,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: (0, J.A)(f().SectionCtn, f().ActionBar),
                        children: [
                          (0, s.jsx)(H.jn, {
                            onClick: async () => {
                              m(!0), u(!1), p(!1);
                              const e = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${c}`,
                                t = new FormData();
                              t.append("gid", c),
                                t.append("sessionid", (0, D.KC)());
                              let n = {
                                gid: c,
                                simple_response: a,
                                submit_time: Math.floor(
                                  new Date().getTime() / 1e3,
                                ),
                              };
                              t.append("surveyjson", JSON.stringify(n));
                              try {
                                const n = await C().post(e, t, {
                                  withCredentials: !0,
                                });
                                n.data.success != v.R
                                  ? (console.error(
                                      "MeetSteamLanding failed " +
                                        n.data.success,
                                    ),
                                    u(!0))
                                  : p(!0);
                              } catch (e) {
                                console.error(
                                  "MeetSteamLanding failed caught",
                                  e,
                                );
                              }
                              m(!1);
                            },
                            children: (0, Z.we)("#Button_Submit"),
                          }),
                          h &&
                            (0, s.jsx)(W.t, {
                              size: "medium",
                              position: "center",
                              string: (0, Z.we)("#Saving"),
                            }),
                          g &&
                            (0, s.jsx)("div", {
                              children: (0, Z.we)("#Button_Saved"),
                            }),
                          d &&
                            (0, s.jsx)("div", {
                              className: Xt.ErrorStylesWithIcon,
                              children: (0, Z.we)(
                                "#Error_ErrorCommunicatingWithNetwork",
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      var mn = n(27144),
        gn = n(5695);
      function pn(e) {
        const t = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("event_gids", "application_config") || [],
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("survey_results", "application_config") || [],
            );
            return e;
          })(),
          r = (function () {
            const e = (function () {
              const [e] = (0, i.useState)(() => {
                const e = new Map(),
                  t =
                    (0, D.Tc)("registration_by_gid", "application_config") ||
                    {};
                for (const n in t) {
                  const s = t[n];
                  e.set(n, s);
                }
                return e;
              });
              return e;
            })();
            return (0, i.useMemo)(() => {
              const t = new Map();
              return (
                e.forEach((e, n) => {
                  e.forEach((e) => {
                    const s = new I.b(e.steamid);
                    t.has(s.GetAccountID()) || t.set(s.GetAccountID(), []),
                      (e.gidEvent = n),
                      t.get(s.GetAccountID()).push(e);
                  });
                }),
                t
              );
            }, [e]);
          })(),
          { surveyGID: a } = (0, o.g)(),
          { bIsLoading: l, events: c } = (0, L.PB)(t),
          [d, u] = (0, i.useMemo)(
            () => [
              n
                .map((e) => {
                  const t = new I.b(e.steamid);
                  if (r.has(t.GetAccountID())) {
                    const e = r.get(t.GetAccountID());
                    return JSON.parse(e[0].jsondata).partner_id;
                  }
                  return null;
                })
                .filter(Boolean),
              n.map((e) => new I.b(e.steamid).GetAccountID()),
            ],
            [r, n],
          ),
          h = (0, R.vh)(d),
          m = (0, mn.B3)(u);
        return !l && h && m
          ? (0, s.jsx)(xn, {
              rgSurveyResults: n,
              mapAccountsToReg: r,
              meetSteamEvents: c,
            })
          : (0, s.jsx)(W.t, { string: "Loading Event, Partner and User Info" });
      }
      const fn = (0, be.FB)();
      function xn(e) {
        const {
            rgSurveyResults: t,
            mapAccountsToReg: n,
            meetSteamEvents: r,
          } = e,
          a = (0, i.useMemo)(() => {
            if (!t) return null;
            const e = new Map();
            r.forEach((t) => e.set(t.GID, t));
            const s = [];
            return (
              t.forEach((t) => {
                const r = JSON.parse(t.jsondata),
                  i = new I.b(t.steamid);
                let a = {
                  feedback: r.simple_response,
                  accountid: i.GetAccountID(),
                };
                if (n.has(i.GetAccountID())) {
                  const t = n.get(i.GetAccountID()),
                    s = JSON.parse(t[0].jsondata);
                  (a.partner_id = s.partner_id),
                    (a.email = s.email_override),
                    (a.name = s.name),
                    (a.registrations = "");
                  const r = (0, R.Yd)(s.partner_id);
                  r && (a.partner_name = r.name),
                    t.forEach((t) => {
                      const n = e.get(t.gidEvent);
                      if (n) {
                        const e = n.jsondata.meet_steam_groups.find(
                          (e) => e.group_id === t.group_id,
                        ).localized_session_title[_.Bhc];
                        a.registrations.length > 0 && (a.registrations += "|"),
                          (a.registrations += e);
                      }
                    });
                } else {
                  const e = (0, mn.CF)(i.GetAccountID());
                  e && (a.name = e.persona_name);
                }
                s.push(a);
              }),
              s
            );
          }, [n, r, t]),
          o = (0, i.useMemo)(
            () => [
              fn.accessor("name", { header: "Name", size: 150 }),
              fn.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: gn.Gb,
              }),
              fn.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: _n,
              }),
              fn.accessor("accountid", { header: "Account ID", size: 150 }),
              fn.accessor("email", { header: "Email", size: 150 }),
              fn.accessor("partner_name", {
                header: "Partner Name",
                size: 200,
              }),
            ],
            [],
          );
        return a
          ? (0, s.jsx)(u.tH, {
              children: (0, s.jsxs)("div", {
                className: f().AdminPageCtn,
                children: [
                  (0, s.jsx)("div", {
                    className: f().PageTitle,
                    children: "Survey Results",
                  }),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)(H.$n, {
                    id: "download-csv",
                    onClick: () =>
                      (0, rt.K)(
                        "meetsteam_survey_results.csv",
                        a,
                        o.map((e) => ({
                          accessorKey: e.accessorKey,
                          header:
                            "string" == typeof e.header
                              ? e.header
                              : (e.accessorKey ?? ""),
                        })),
                      ),
                    style: { width: "120px" },
                    children: "Download CSV",
                  }),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(Ee.k, {
                    columns: o,
                    data: a,
                    getRowKey: (e) => e,
                    stickyHeader: !0,
                    nItemHeight: 28,
                    overscan: a.length,
                  }),
                ],
              }),
            })
          : (0, s.jsx)(W.t, { string: (0, Z.we)("#Loading") });
      }
      function _n(e) {
        const t = e.getValue();
        return t?.length > 0
          ? (0, s.jsx)(gn.DP, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      const vn = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function jn(e) {
        return (
          (0, i.useEffect)(() => {
            cn.O3.Init();
          }, []),
          (0, s.jsx)(l.m, {
            children: (0, s.jsx)(a.Kd, {
              basename: (0, r.C)() + "meetsteam/",
              children: (0, s.jsxs)(o.dO, {
                children: [
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: r.B.DiagData(),
                    render: (e) =>
                      (0, s.jsx)(c.z, {
                        ...e,
                        strConfigID: "application_config",
                      }),
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: vn.AdminDashboard(),
                    component: Yt,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: vn.YearlySurvery(":year(\\d+)"),
                    component: nn,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: vn.PostEventSurvey(":surveyGID(\\d+)"),
                    component: hn,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: vn.PostEventSurveyResults(":surveyGID(\\d+)"),
                    component: pn,
                  }),
                  (0, s.jsx)(o.qh, { component: d.a }),
                ],
              }),
            }),
          })
        );
      }
    },
    66051: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => R });
      var s = n(7850),
        r = n(8871),
        i = n(67796),
        a = n(16666),
        o = n(92148),
        l = n(59366),
        c = n(64238),
        d = n.n(c),
        u = n(90626),
        h = n(31718),
        m = n.n(h),
        g = n(76217),
        p = n(23310),
        f = n(94104),
        x = n(9646);
      const _ = u.memo(function (e) {
        const {
            virtualizer: t,
            bDynamic: n,
            idx: r,
            rowGap: i,
            renderItem: a,
          } = e,
          o = u.useCallback(
            (e, n, s) => (t.scrollToIndex(r, { align: "center" }), !0),
            [t, r],
          );
        return (0, s.jsx)(g.Z, {
          ref: n ? t.measureElement : void 0,
          navKey: `VirtualizedListIndex-${r}`,
          "data-index": r,
          fnScrollIntoViewHandler: o,
          scrollIntoViewWhenChildFocused: "force",
          style: { width: "100%", paddingBottom: i },
          children: a(r),
        });
      });
      u.forwardRef(function (e, t) {
        const {
            nRows: n,
            nItemHeight: i,
            nRowGap: a,
            overscan: o,
            renderItem: l,
            bDynamic: c,
            measureElement: d,
            className: h,
            forceVirtualizeType: m,
            initialOffset: p,
            onOffsetChange: x,
            ..._
          } = e,
          [S, y] = (0, u.useState)(m),
          [w, b] = u.useState(),
          [E, C] = u.useState(),
          I = u.useRef(null),
          D = u.useCallback(
            (e) => {
              if (!e) return;
              const t = (0, f._f)(e, "y");
              (0, u.startTransition)(() => {
                "window" != m && b(t || void 0),
                  C(e.offsetTop),
                  m || y(t ? "element" : "window");
              });
            },
            [m],
          ),
          R =
            ((A = (e) => {
              I.current &&
                (0, u.startTransition)(() => {
                  I.current && C(I.current?.offsetTop);
                });
            }),
            (0, r.QS)(
              (e) => {
                if (!e) return;
                const t = new e.ownerDocument.defaultView.ResizeObserver(
                  (e) => {
                    A(e[0]);
                  },
                );
                let n = [],
                  s = e;
                for (; s && null != s; )
                  t.observe(s), n.push(s), (s = s.parentElement);
                return () => {
                  n.forEach((e) => t.unobserve(e));
                };
              },
              [A],
            ));
        var A;
        const T = (0, r.Ue)(D, I, R, t),
          k = {
            nRows: n,
            nItemHeight: i,
            nRowGap: a,
            overscan: o,
            renderItem: l,
            bDynamic: c,
            measureElement: d,
            forceVirtualizeType: m,
            initialOffset: p,
            onOffsetChange: x,
          };
        return (0, s.jsx)(g.Z, {
          className: h,
          ref: T,
          ..._,
          children: (0, s.jsxs)(u.Suspense, {
            children: [
              "element" === S &&
                (0, s.jsx)(j, { ...k, nScrollMargin: E || 0, elScrollable: w }),
              "window" === S && (0, s.jsx)(v, { ...k, nScrollMargin: E }),
            ],
          }),
        });
      });
      function v(e) {
        const {
            nScrollMargin: t,
            nRows: n,
            nItemHeight: r,
            nRowGap: i = 10,
            overscan: a = 6,
            initialOffset: l,
            onOffsetChange: c,
            measureElement: d,
          } = e,
          h = ((0, x.d)(), r + i),
          m = (0, o.XW)({
            count: n,
            scrollMargin: t,
            estimateSize: u.useCallback(() => h, [h]),
            measureElement: d,
            overscan: a,
            initialOffset: l,
            initialRect: void 0,
            observeElementOffset: w,
            observeElementRect: b,
            onChange(e, t) {
              c?.(e.scrollOffset);
            },
          });
        return (
          u.useEffect(() => {
            (0, u.startTransition)(() => {
              m.measure();
            });
          }, [m, h]),
          (0, s.jsx)(S, { ...e, virtualizer: m })
        );
      }
      function j(e) {
        const {
            nRows: t,
            nScrollMargin: n,
            elScrollable: r,
            nItemHeight: i,
            nRowGap: a = 10,
            overscan: l = 6,
            initialOffset: c,
            onOffsetChange: d,
            measureElement: h,
          } = e,
          m = i + a,
          g = (0, x.d)(),
          p = (0, o.Te)({
            count: t,
            scrollMargin: n - (r?.offsetTop || 0),
            getScrollElement: () => r,
            estimateSize: u.useCallback(() => m, [m]),
            measureElement: h,
            overscan: l,
            initialRect: r
              ? void 0
              : {
                  height: g.viewportHeight?.value ?? 1e3,
                  width: g.viewportWidth?.value ?? 1e3,
                },
            initialOffset: c,
            observeElementOffset: w,
            observeElementRect: E,
            onChange(e, t) {
              d?.(e.scrollOffset);
            },
          });
        return (
          u.useEffect(() => {
            (0, u.startTransition)(() => {
              p.measure();
            });
          }, [p, m]),
          (0, s.jsx)(S, { ...e, virtualizer: p })
        );
      }
      function S(e) {
        const { virtualizer: t, nRowGap: n, renderItem: r, bDynamic: i } = e,
          a = t.getVirtualItems(),
          o = a.length ? a[0].start - t.options.scrollMargin : 0,
          l = Math.max(0, t.getTotalSize());
        return (0, s.jsx)(g.Z, {
          "flow-children": "column",
          navEntryPreferPosition: p.iU.MAINTAIN_Y,
          style: { height: `${l}px`, width: "100%", position: "relative" },
          children: (0, s.jsx)("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY( ${o}px )`,
            },
            children: a.map((e) =>
              (0, s.jsx)(
                _,
                {
                  virtualizer: t,
                  bDynamic: i,
                  idx: e.index,
                  rowGap: n,
                  renderItem: r,
                },
                e.key,
              ),
            ),
          }),
        });
      }
      function y(e) {
        return (...t) => {
          queueMicrotask(() => {
            (0, u.startTransition)(() => {
              e(...t);
            });
          });
        };
      }
      function w(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        let s;
        s = y(
          "scrollX" in n
            ? (s) => t(n[e.options.horizontal ? "scrollX" : "scrollY"], s)
            : (s) => t(n[e.options.horizontal ? "scrollLeft" : "scrollTop"], s),
        );
        const r = () => s(!0),
          i = () => s(!1);
        return (
          i(),
          n.addEventListener("scroll", r, { passive: !0 }),
          n.addEventListener("scrollend", i, { passive: !0 }),
          () => {
            n.removeEventListener("scroll", r),
              n.removeEventListener("scrollend", i);
          }
        );
      }
      function b(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const s = y(() => t({ width: n.innerWidth, height: n.innerHeight }));
        return (
          s(),
          n.addEventListener("resize", s, { passive: !0 }),
          () => {
            n.removeEventListener("resize", s);
          }
        );
      }
      function E(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const s = y((e) =>
          t({ width: Math.round(e.width), height: Math.round(e.height) }),
        );
        s(n.getBoundingClientRect());
        const r = n.ownerDocument.defaultView;
        if (!r?.ResizeObserver) return () => {};
        const i = new r.ResizeObserver((e) => {
          e[0]?.borderBoxSize[0]
            ? s({
                width: e[0].borderBoxSize[0].inlineSize,
                height: e[0].borderBoxSize[0].blockSize,
              })
            : s(n.getBoundingClientRect());
        });
        return (
          i.observe(n, { box: "border-box" }),
          () => {
            i.unobserve(n);
          }
        );
      }
      var C = n(26408);
      const I = u.createContext(void 0);
      function D(e) {
        const { table: t, setColumnSizeOverride: n } = e,
          r = (0, u.useRef)(t);
        r.current = t;
        const i = (0, u.useMemo)(
          () => ({ table: r.current, setColumnSizeOverride: n }),
          [n],
        );
        return (0, s.jsx)(I.Provider, { value: i, children: e.children });
      }
      const R = u.forwardRef(function (e, t) {
        const {
            data: n,
            columns: r,
            className: c,
            width: d,
            height: h,
            nScrollMargin: m,
            nItemHeight: g,
            nHeaderHeight: p,
            overscan: f = 6,
            stickyHeader: x,
            getRowKey: _,
            initialSorting: v,
            initialColumnFilters: j,
            initialGrouping: S,
            initialExpanded: y,
            initialColumnPinning: C,
            initialColumnVisibility: I,
            onGroupingChange: R,
            onVisibleRowsChange: A,
            renderGroup: M,
            virtualizeType: N = "element",
          } = e,
          B = (0, u.useRef)(null),
          [z, F] = (0, u.useState)({}),
          [O, P] = (0, u.useState)({}),
          L = r.map((e) =>
            "accessorKey" in e
              ? { ...e, filterFn: z[e.accessorKey] ?? e.filterFn }
              : e,
          ),
          G = L.map((e) => {
            let t = O[e.id];
            return (
              void 0 === t && "accessorKey" in e && (t = O[e.accessorKey]),
              (t ??= e.size),
              { ...e, size: t }
            );
          }),
          $ = (0, i.N4)({
            data: n,
            columns: G,
            defaultColumn: { minSize: 60, maxSize: 800 },
            initialState: {
              sorting: v,
              grouping: S ?? [],
              expanded: y,
              columnPinning: C ?? {},
              columnFilters: j,
              columnVisibility: I,
            },
            getCoreRowModel: (0, a.HT)(),
            getSortedRowModel: (0, a.h5)(),
            getFilteredRowModel: (0, a.hM)(),
            getGroupedRowModel: (0, a.cU)(),
            columnResizeMode: "onChange",
          }),
          { rows: H, flatRows: U } = $.getRowModel(),
          q = H.flatMap((e) => (e.getIsExpanded() ? [e, ...e.subRows] : e)),
          V = $.getState().grouping;
        (0, u.useEffect)(() => {
          R?.(V);
        }, [R, V]),
          (0, u.useEffect)(() => {
            A?.(q);
          }, [A, q.length]);
        const K = (0, o.Te)({
            count: q.length,
            scrollMargin: m,
            getScrollElement: u.useCallback(
              () => ("element" === N ? ee.current : window),
              [N],
            ),
            scrollToFn: (e, t, n) =>
              "window" === N ? (0, l.e8)(e, t, n) : (0, l.Ox)(e, t, n),
            estimateSize: u.useCallback(() => g, [g]),
            overscan: f,
            initialRect: void 0,
            observeElementOffset: w,
            observeElementRect: (e, t) => ("window" === N ? b(e, t) : E(e, t)),
            getItemKey(e) {
              const t = q[e];
              return `${t.parentId ?? ""}${_(e, t.original)}`;
            },
          }),
          W = (0, u.useRef)(0),
          Y = u.useMemo(() => {
            const e = $.getFlatHeaders(),
              t = {};
            for (let n = 0; n < e.length; n++) {
              const s = e[n];
              (t[`--header-${s.id}-size`] = `${s.getSize()}px`),
                (t[`--col-${s.column.id}-size`] = `${s.column.getSize()}px`);
            }
            return (W.current += 1), t;
          }, [$.getState().columnSizingInfo, $.getState().columnSizing, r]);
        u.useEffect(() => {
          (0, u.startTransition)(() => {
            K.measure();
          });
        }, [K, g]);
        const J = K.getVirtualItems(),
          Q = J[0]?.start ?? 0,
          Z = K.getTotalSize(),
          X = (0, o.Te)({
            estimateSize: (e) =>
              q[0]?.getVisibleCells()[e].column.getSize() ?? 0,
            count: q[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: u.useCallback(
              () => ("element" === N ? ee.current : window),
              [N],
            ),
            scrollToFn: (e, t, n) =>
              "window" === N ? (0, l.e8)(e, t, n) : (0, l.Ox)(e, t, n),
            rangeExtractor(e) {
              const t = q[0]?.getVisibleCells() ?? [],
                n = new Set((0, l.vp)(e));
              return (
                t.forEach((e, t) => {
                  e.column.getIsPinned() && n.add(t);
                }),
                Array.from(n).sort((e, t) => e - t)
              );
            },
            observeElementOffset: w,
            observeElementRect: (e, t) => ("window" === N ? b(e, t) : E(e, t)),
          });
        (0, u.useEffect)(() => {
          X.measure();
        }, [W.current]),
          (0, u.useImperativeHandle)(
            t,
            () => ({
              getData: () => U.map((e) => e.original),
              getVisibleRows: () => q,
              getState: $.getState,
              getColumns: $.getAllColumns,
              getColumnDefs: () => L,
              setColumnFilters: $.setColumnFilters,
              resetColumnFilters: $.resetColumnFilters,
              setColumnFilterFnOverride: F,
              getColumnFilterFnOverride: () => z,
              getContainerElement: () => ee.current,
              getTableElement: () => B.current,
              scrollToColumn(e, t) {
                X.scrollToIndex(e.getIndex(), t);
              },
            }),
            [
              U,
              q,
              $.setColumnFilters,
              $.resetColumnFilters,
              $.getState,
              $.getAllColumns,
              z,
              L,
              X,
            ],
          );
        const ee = (0, u.useRef)(null),
          te = x ? (p ?? 0) : 0;
        let ne = 0;
        const se = q[0]?.getVisibleCells(),
          re = X.getVirtualItems(),
          ie = re[re.length - 1]?.end;
        for (const e of re) {
          const t = se[e.index];
          t?.column.getIsPinned() && (ne += e.size);
        }
        return (0, s.jsx)(D, {
          table: $,
          setColumnSizeOverride: P,
          children: (0, s.jsx)("div", {
            className: c,
            ref: ee,
            style: {
              width: d,
              height: h,
              overflow: "element" === N ? "auto" : void 0,
              maxWidth: "fit-content",
              scrollPadding: `${te}px 0 0 ${ne}px`,
            },
            children: (0, s.jsxs)("div", {
              role: "table",
              ref: B,
              "aria-rowcount": n.length,
              style: {
                minHeight: Z,
                width: $.getTotalSize(),
                "--virtualPos": `${Q}px`,
                ...Y,
              },
              children: [
                $.getHeaderGroups().map((e) =>
                  (0, s.jsx)(
                    T,
                    { group: e, sticky: x, nHeaderHeight: p },
                    e.id,
                  ),
                ),
                J.map((e) =>
                  (0, s.jsx)(
                    k,
                    {
                      row: q[e.index],
                      size: e.size,
                      rowVirtualizer: X,
                      index: e.index,
                      measureRef: K.measureElement,
                      scrollContainerRef: ee,
                      nItemHeight: g,
                      renderGroup: M,
                      rowEnd: ie,
                    },
                    e.key,
                  ),
                ),
              ],
            }),
          }),
        });
      });
      function A(e) {
        const t = e.getIsPinned();
        return {
          borderRight:
            "left" === t && e.getIsLastColumn("left")
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          borderLeft:
            "right" === t && e.getIsFirstColumn("right")
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          left: "left" === t ? `${e.getStart("left")}px` : void 0,
          right: "right" === t ? `${e.getAfter("right")}px` : void 0,
          position: t ? "sticky" : "relative",
          minWidth: e.getSize(),
          zIndex: t ? 1 : 0,
        };
      }
      function T(e) {
        const { group: t, sticky: n, nHeaderHeight: r } = e;
        return (0, s.jsx)("div", {
          role: "row",
          className: d()(
            m().FancyTableRow,
            m().FancyTableHeader,
            n && m().StickyHeader,
          ),
          children: t.headers.map((e, n) => {
            const i = t.headers[n - 1],
              a = {},
              o = e.column.getIsSorted();
            o &&
              !e.column.columnDef.meta?.bDisableSortButton &&
              (a["aria-sort"] = "asc" === o ? "ascending" : "descending");
            let l = "div";
            return (
              e.column.getCanSort() &&
                !e.column.columnDef.meta?.bDisableSortButton &&
                ((l = "button"),
                (a.onClick = e.column.getToggleSortingHandler())),
              (0, s.jsx)(
                B,
                {
                  header: e,
                  prevHeader: i,
                  HeaderElement: l,
                  nHeaderHeight: r,
                  sortDirection: o,
                  strTooltip: e.column.columnDef.meta?.strHeaderTooltip,
                  conditionalProps: a,
                },
                e.id,
              )
            );
          }),
        });
      }
      const k = u.memo(function (e) {
        const {
          row: t,
          size: n,
          rowVirtualizer: r,
          measureRef: i,
          index: a,
          nItemHeight: o,
          renderGroup: l,
        } = e;
        return (0, s.jsx)("div", {
          role: "row",
          className: d()(
            m().FancyTableRow,
            t.getCanExpand() && m().ExpandableRow,
          ),
          style: {
            minHeight: t.getCanExpand() ? void 0 : `${n}px`,
            transform: "translateY(var(--virtualPos))",
          },
          "data-even": a % 2 == 0,
          "data-index": a,
          ref: i,
          children: (0, s.jsx)(M, {
            row: t,
            rowVirtualizer: r,
            nItemHeight: o,
            renderGroup: l,
          }),
        });
      });
      function M(e) {
        const { row: t, rowVirtualizer: n, renderGroup: r } = e;
        if (t.getCanExpand()) {
          const e = r ?? (() => t.groupingValue);
          return (0, s.jsxs)("button", {
            className: m().RowGroup,
            "aria-expanded": t.getIsExpanded(),
            onClick: t.getToggleExpandedHandler(),
            children: [
              (0, s.jsx)("div", { className: m().GroupExpandIndicator }),
              e(t),
            ],
          });
        }
        const i = n.getVirtualItems(),
          a = t.getVisibleCells();
        let o,
          l = 0;
        return (0, s.jsx)(s.Fragment, {
          children: i.map((e) => {
            const t = a[e.index],
              r = t.column.getIsPinned();
            return (
              r ? (l += e.size) : void 0 === o && (o = e.start),
              (0, s.jsx)(
                z,
                {
                  cell: t,
                  rowVirtualizer: n,
                  index: e.index,
                  transform: r ? void 0 : `translateX(${o - l}px)`,
                },
                t.id,
              )
            );
          }),
        });
      }
      function N(e, t) {
        const n = (0, u.useContext)(I),
          s = e.columnDef.meta?.bGrowToFit,
          r = e.id,
          i = s ? e.getSize() : 0,
          a = e.getIsSorted();
        (0, u.useLayoutEffect)(() => {
          if (!s) return;
          if (!t.current) return;
          const e = t.current?.scrollWidth;
          if (!e) return;
          const a = t.current.getBoundingClientRect().width,
            o = window.getComputedStyle(t.current);
          let l = e;
          if (e > a) {
            if (o.paddingLeft) {
              let e = parseInt(o.paddingLeft);
              isNaN(e) || (l += e);
            }
            if (o.paddingRight) {
              let e = parseInt(o.paddingRight);
              isNaN(e) || (l += e);
            }
          }
          l > i &&
            n.setColumnSizeOverride((e) => (e[r] > l ? e : { ...e, [r]: l }));
        }, [s, r, n, i, t, a]);
      }
      function B(e) {
        const {
            header: t,
            prevHeader: n,
            HeaderElement: r,
            nHeaderHeight: a,
            sortDirection: o,
            strTooltip: l,
            conditionalProps: c,
          } = e,
          h = (0, u.useRef)(null);
        return (
          N(t.column, h),
          (0, s.jsxs)(
            r,
            {
              role: "columnheader",
              ref: h,
              "data-pinned": !!t.column.getIsPinned(),
              className: d()(
                m().ColumnHeader,
                "button" === r && m().SortButton,
                t.column.columnDef.meta?.headerClassname,
              ),
              style: {
                width: `var(--header-${t.id}-size)`,
                height: void 0 !== a ? `${a}px` : void 0,
                ...A(t.column),
              },
              ...c,
              children: [
                n?.column.getCanResize() &&
                  (0, s.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => n.column.resetSize(),
                    onMouseDown: n.getResizeHandler(),
                    onTouchStart: n.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: d()(m().ResizeHandle, m().PrevResizeHandle),
                  }),
                t.isPlaceholder
                  ? null
                  : (0, i.Kv)(t.column.columnDef.header, t.getContext()),
                l && (0, s.jsx)(C.o, { tooltip: l }),
                o &&
                  !t.column.columnDef.meta?.bDisableSortButton &&
                  (0, s.jsx)("div", { className: m().SortIndicator }),
                t.column.getCanResize() &&
                  (0, s.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => t.column.resetSize(),
                    onMouseDown: t.getResizeHandler(),
                    onTouchStart: t.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: d()(
                      m().ResizeHandle,
                      t.column.getIsResizing() && m().IsResizing,
                    ),
                  }),
              ],
            },
            t.id,
          )
        );
      }
      function z(e) {
        const { cell: t, rowVirtualizer: n, index: i, transform: a } = e,
          o = u.useRef(null),
          l = (0, r.XB)(o, n.measure);
        return (
          N(t.column, o),
          (0, s.jsx)("div", {
            className: d()(
              m().FancyTableCell,
              t.column.columnDef.meta?.cellClassname,
            ),
            "data-index": i,
            "data-table-column-id": t.column.id,
            ref: l,
            style: {
              width: `var(--col-${t.column.id}-size)`,
              transform: a,
              ...A(t.column),
            },
            children: (0, s.jsx)(F, {
              CellComponent: t.column.columnDef.cell,
              context: t.getContext(),
            }),
          })
        );
      }
      const F = u.memo(
        function (e) {
          return (0, i.Kv)(e.CellComponent, e.context);
        },
        (e, t) => e.context.getValue() === t.context.getValue(),
      );
    },
  },
]);
