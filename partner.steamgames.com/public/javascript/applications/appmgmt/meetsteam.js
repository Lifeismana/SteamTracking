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
        SearchLine: "_3WR8L9DXe8JRgcUuBlzxCV",
        SearchSummary: "_2ZYKXsT05br_fBl6Al_Ok2",
        SearchMatch: "_3NPtUvJyTjDkKKBkXpmMMh",
        CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
        CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
        Full: "ndEhtgivpXhCilYDnAAVe",
        MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
        MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
      };
    },
    34283: (e) => {
      e.exports = {
        ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_",
        AccountSummary: "_3ASk__24cRSvf749cMDwat",
        AccountAvatar: "_2xoRnY-a7zMtF4eXy564LW",
        AccountPersonaName: "_13y5R1N5OAhnGi8UjBv9ZK",
        PartnerList: "_EdCW3WiSPTQsVts-RIeJ",
        PartnerListHeader: "_4TErK934px6TrK1V9JGoD",
        PartnerListRow: "CZqR_ufpzWTsB5Z6N9Zut",
        PartnerListRowSelected: "_2d0ftwVO6CThilpy0rp1mx",
      };
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
      var r, i, n;
      /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (i = []),
        (r = function e() {
          var t,
            r =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== r
                    ? r
                    : {},
            i = !r.document && !!r.postMessage,
            n = r.IS_PAPA_WORKER || !1,
            s = {},
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
                var t = y(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new g(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var i = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < i) {
                  let t = this._config.newline;
                  t ||
                    ((s = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, s))),
                    (e = [...e.split(t).slice(i)].join(t));
                }
                this.isFirstChunk &&
                  w(this._config.beforeFirstChunk) &&
                  void 0 !== (s = this._config.beforeFirstChunk(e)) &&
                  (e = s),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (i = this._partialLine + e);
                var s =
                  ((this._partialLine = ""),
                  this._handle.parse(i, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = s.meta.cursor),
                    this._finished ||
                      ((this._partialLine = i.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    s && s.data && (this._rowCount += s.data.length),
                    (i =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    n)
                  )
                    r.postMessage({
                      results: s,
                      workerId: o.WORKER_ID,
                      finished: i,
                    });
                  else if (w(this._config.chunk) && !t) {
                    if (
                      (this._config.chunk(s, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = s = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(s.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(s.errors)),
                      (this._completeResults.meta = s.meta)),
                    this._completed ||
                      !i ||
                      !w(this._config.complete) ||
                      (s && s.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    i || (s && s.meta.paused) || this._nextChunk(),
                    s
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                w(this._config.error)
                  ? this._config.error(e)
                  : n &&
                    this._config.error &&
                    r.postMessage({
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
              (this._nextChunk = i
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
                    i ||
                      ((t.onload = B(this._chunkLoaded, this)),
                      (t.onerror = B(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !i,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      r = this._config.downloadRequestHeaders;
                    for (e in r) t.setRequestHeader(e, r[e]);
                  }
                  var n;
                  this._config.chunkSize &&
                    ((n = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + n,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  i && 0 === t.status && this._chunkError();
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
          function u(e) {
            (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
              l.call(this, e);
            var t,
              r,
              i = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (r = e.slice || e.webkitSlice || e.mozSlice),
                i
                  ? (((t = new FileReader()).onload = B(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = B(this._chunkError, this)))
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
                  n =
                    (this._config.chunkSize &&
                      ((n = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = r.call(e, this._start, n))),
                    t.readAsText(e, this._config.encoding));
                i || this._chunkLoaded({ target: { result: n } });
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
          function d(e) {
            var t;
            l.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var e, r;
                if (!this._finished)
                  return (
                    (e = this._config.chunkSize),
                    (t = e
                      ? ((r = t.substring(0, e)), t.substring(e))
                      : ((r = t), "")),
                    (this._finished = !t),
                    this.parseChunk(r)
                  );
              });
          }
          function m(e) {
            l.call(this, (e = e || {}));
            var t = [],
              r = !0,
              i = !1;
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
                i && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (r = !0);
              }),
              (this._streamData = B(function (e) {
                try {
                  t.push(
                    "string" == typeof e
                      ? e
                      : e.toString(this._config.encoding),
                  ),
                    r &&
                      ((r = !1),
                      this._checkIsFinished(),
                      this.parseChunk(t.shift()));
                } catch (e) {
                  this._streamError(e);
                }
              }, this)),
              (this._streamError = B(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = B(function () {
                this._streamCleanUp(), (i = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = B(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function g(e) {
            var t,
              r,
              i,
              n,
              s = Math.pow(2, 53),
              a = -s,
              l = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              c =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              u = this,
              d = 0,
              m = 0,
              g = !1,
              f = !1,
              _ = [],
              b = { data: [], errors: [], meta: {} };
            function B(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function M() {
              if (
                (b &&
                  i &&
                  (v(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      o.DefaultDelimiter +
                      "'",
                  ),
                  (i = !1)),
                e.skipEmptyLines &&
                  (b.data = b.data.filter(function (e) {
                    return !B(e);
                  })),
                S())
              ) {
                if (b)
                  if (Array.isArray(b.data[0])) {
                    for (var t = 0; S() && t < b.data.length; t++)
                      b.data[t].forEach(r);
                    b.data.splice(0, 1);
                  } else b.data.forEach(r);
                function r(t, r) {
                  w(e.transformHeader) && (t = e.transformHeader(t, r)),
                    _.push(t);
                }
              }
              function n(t, r) {
                for (var i = e.header ? {} : [], n = 0; n < t.length; n++) {
                  var o = n,
                    u = t[n];
                  (u = ((t, r) =>
                    ((t) => (
                      e.dynamicTypingFunction &&
                        void 0 === e.dynamicTyping[t] &&
                        (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
                      !0 === (e.dynamicTyping[t] || e.dynamicTyping)
                    ))(t)
                      ? "true" === r ||
                        "TRUE" === r ||
                        ("false" !== r &&
                          "FALSE" !== r &&
                          (((e) => {
                            if (
                              l.test(e) &&
                              ((e = parseFloat(e)), a < e && e < s)
                            )
                              return 1;
                          })(r)
                            ? parseFloat(r)
                            : c.test(r)
                              ? new Date(r)
                              : "" === r
                                ? null
                                : r))
                      : r)(
                    (o = e.header
                      ? n >= _.length
                        ? "__parsed_extra"
                        : _[n]
                      : o),
                    (u = e.transform ? e.transform(u, o) : u),
                  )),
                    "__parsed_extra" === o
                      ? ((i[o] = i[o] || []), i[o].push(u))
                      : (i[o] = u);
                }
                return (
                  e.header &&
                    (n > _.length
                      ? v(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            _.length +
                            " fields but parsed " +
                            n,
                          m + r,
                        )
                      : n < _.length &&
                        v(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            _.length +
                            " fields but parsed " +
                            n,
                          m + r,
                        )),
                  i
                );
              }
              var u;
              b &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((u = 1),
                !b.data.length || Array.isArray(b.data[0])
                  ? ((b.data = b.data.map(n)), (u = b.data.length))
                  : (b.data = n(b.data, 0)),
                e.header && b.meta && (b.meta.fields = _),
                (m += u));
            }
            function S() {
              return e.header && 0 === _.length;
            }
            function v(e, t, r, i) {
              (e = { type: e, code: t, message: r }),
                void 0 !== i && (e.row = i),
                b.errors.push(e);
            }
            w(e.step) &&
              ((n = e.step),
              (e.step = function (t) {
                (b = t),
                  S()
                    ? M()
                    : (M(),
                      0 !== b.data.length &&
                        ((d += t.data.length),
                        e.preview && d > e.preview
                          ? r.abort()
                          : ((b.data = b.data[0]), n(b, u))));
              })),
              (this.parse = function (n, s, a) {
                var l = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(n, l)),
                  (i = !1),
                  e.delimiter
                    ? w(e.delimiter) &&
                      ((e.delimiter = e.delimiter(n)),
                      (b.meta.delimiter = e.delimiter))
                    : ((l = ((t, r, i, n, s) => {
                        var a, l, c, u;
                        s = s || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          o.RECORD_SEP,
                          o.UNIT_SEP,
                        ];
                        for (var d = 0; d < s.length; d++) {
                          for (
                            var m,
                              g = s[d],
                              h = 0,
                              f = 0,
                              _ = 0,
                              b =
                                ((c = void 0),
                                new p({
                                  comments: n,
                                  delimiter: g,
                                  newline: r,
                                  preview: 10,
                                }).parse(t)),
                              y = 0;
                            y < b.data.length;
                            y++
                          )
                            i && B(b.data[y])
                              ? _++
                              : ((f += m = b.data[y].length),
                                void 0 === c
                                  ? (c = m)
                                  : 0 < m && ((h += Math.abs(m - c)), (c = m)));
                          0 < b.data.length && (f /= b.data.length - _),
                            (void 0 === l || h <= l) &&
                              (void 0 === u || u < f) &&
                              1.99 < f &&
                              ((l = h), (a = g), (u = f));
                        }
                        return {
                          successful: !!(e.delimiter = a),
                          bestDelimiter: a,
                        };
                      })(
                        n,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = l.bestDelimiter)
                        : ((i = !0), (e.delimiter = o.DefaultDelimiter)),
                      (b.meta.delimiter = e.delimiter)),
                  (l = y(e)),
                  e.preview && e.header && l.preview++,
                  (t = n),
                  (r = new p(l)),
                  (b = r.parse(t, s, a)),
                  M(),
                  g ? { meta: { paused: !0 } } : b || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return g;
              }),
              (this.pause = function () {
                (g = !0),
                  r.abort(),
                  (t = w(e.chunk) ? "" : t.substring(r.getCharIndex()));
              }),
              (this.resume = function () {
                u.streamer._halted
                  ? ((g = !1), u.streamer.parseChunk(t, !0))
                  : setTimeout(u.resume, 3);
              }),
              (this.aborted = function () {
                return f;
              }),
              (this.abort = function () {
                (f = !0),
                  r.abort(),
                  (b.meta.aborted = !0),
                  w(e.complete) && e.complete(b),
                  (t = "");
              }),
              (this.guessLineEndings = function (e, t) {
                (e = e.substring(0, 1048576)),
                  (t = new RegExp(h(t) + "([^]*?)" + h(t), "gm"));
                var r = (e = e.replace(t, "")).split("\r");
                if (
                  ((e =
                    1 < (t = e.split("\n")).length &&
                    t[0].length < r[0].length),
                  1 === r.length || e)
                )
                  return "\n";
                for (var i = 0, n = 0; n < r.length; n++)
                  "\n" === r[n][0] && i++;
                return i >= r.length / 2 ? "\r\n" : "\r";
              });
          }
          function h(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function p(e) {
            var t = (e = e || {}).delimiter,
              r = e.newline,
              i = e.comments,
              n = e.step,
              s = e.preview,
              a = e.fastMode,
              l = null,
              c = !1,
              u = null == e.quoteChar ? '"' : e.quoteChar,
              d = u;
            if (
              (void 0 !== e.escapeChar && (d = e.escapeChar),
              ("string" != typeof t || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              i === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === i
              ? (i = "#")
              : ("string" != typeof i || -1 < o.BAD_DELIMITERS.indexOf(i)) &&
                (i = !1),
              "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
            var m = 0,
              g = !1;
            (this.parse = function (o, p, f) {
              if ("string" != typeof o)
                throw new Error("Input must be a string");
              var _ = o.length,
                b = t.length,
                y = r.length,
                B = i.length,
                M = w(n),
                S = [],
                v = [],
                j = [],
                x = (m = 0);
              if (!o) return A();
              if (a || (!1 !== a && -1 === o.indexOf(u))) {
                for (var z = o.split(r), R = 0; R < z.length; R++) {
                  if (((j = z[R]), (m += j.length), R !== z.length - 1))
                    m += r.length;
                  else if (f) return A();
                  if (!i || j.substring(0, B) !== i) {
                    if (M) {
                      if (((S = []), O(j.split(t)), D(), g)) return A();
                    } else O(j.split(t));
                    if (s && s <= R) return (S = S.slice(0, s)), A(!0);
                  }
                }
                return A();
              }
              for (
                var F = o.indexOf(t, m),
                  T = o.indexOf(r, m),
                  C = new RegExp(h(d) + h(u), "g"),
                  I = o.indexOf(u, m);
                ;
              )
                if (o[m] === u)
                  for (I = m, m++; ; ) {
                    if (-1 === (I = o.indexOf(u, I + 1)))
                      return (
                        f ||
                          v.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: S.length,
                            index: m,
                          }),
                        W()
                      );
                    if (I === _ - 1) return W(o.substring(m, I).replace(C, u));
                    if (u === d && o[I + 1] === d) I++;
                    else if (u === d || 0 === I || o[I - 1] !== d) {
                      -1 !== F && F < I + 1 && (F = o.indexOf(t, I + 1));
                      var U = E(
                        -1 ===
                          (T = -1 !== T && T < I + 1 ? o.indexOf(r, I + 1) : T)
                          ? F
                          : Math.min(F, T),
                      );
                      if (o.substr(I + 1 + U, b) === t) {
                        j.push(o.substring(m, I).replace(C, u)),
                          o[(m = I + 1 + U + b)] !== u && (I = o.indexOf(u, m)),
                          (F = o.indexOf(t, m)),
                          (T = o.indexOf(r, m));
                        break;
                      }
                      if (
                        ((U = E(T)),
                        o.substring(I + 1 + U, I + 1 + U + y) === r)
                      ) {
                        if (
                          (j.push(o.substring(m, I).replace(C, u)),
                          q(I + 1 + U + y),
                          (F = o.indexOf(t, m)),
                          (I = o.indexOf(u, m)),
                          M && (D(), g))
                        )
                          return A();
                        if (s && S.length >= s) return A(!0);
                        break;
                      }
                      v.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: S.length,
                        index: m,
                      }),
                        I++;
                    }
                  }
                else if (i && 0 === j.length && o.substring(m, m + B) === i) {
                  if (-1 === T) return A();
                  (m = T + y), (T = o.indexOf(r, m)), (F = o.indexOf(t, m));
                } else if (-1 !== F && (F < T || -1 === T))
                  j.push(o.substring(m, F)), (m = F + b), (F = o.indexOf(t, m));
                else {
                  if (-1 === T) break;
                  if ((j.push(o.substring(m, T)), q(T + y), M && (D(), g)))
                    return A();
                  if (s && S.length >= s) return A(!0);
                }
              return W();
              function O(e) {
                S.push(e), (x = m);
              }
              function E(e) {
                var t = 0;
                return -1 !== e &&
                  (e = o.substring(I + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function W(e) {
                return (
                  f ||
                    (void 0 === e && (e = o.substring(m)),
                    j.push(e),
                    (m = _),
                    O(j),
                    M && D()),
                  A()
                );
              }
              function q(e) {
                (m = e), O(j), (j = []), (T = o.indexOf(r, m));
              }
              function A(i) {
                if (e.header && !p && S.length && !c) {
                  var n = S[0],
                    s = Object.create(null),
                    a = new Set(n);
                  let t = !1;
                  for (let r = 0; r < n.length; r++) {
                    let i = n[r];
                    if (
                      s[
                        (i = w(e.transformHeader) ? e.transformHeader(i, r) : i)
                      ]
                    ) {
                      let e,
                        o = s[i];
                      for (; (e = i + "_" + o), o++, a.has(e); );
                      a.add(e),
                        (n[r] = e),
                        s[i]++,
                        (t = !0),
                        ((l = null === l ? {} : l)[e] = i);
                    } else (s[i] = 1), (n[r] = i);
                    a.add(i);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (c = !0);
                }
                return {
                  data: S,
                  errors: v,
                  meta: {
                    delimiter: t,
                    linebreak: r,
                    aborted: g,
                    truncated: !!i,
                    cursor: x + (p || 0),
                    renamedHeaders: l,
                  },
                };
              }
              function D() {
                n(A()), (S = []), (v = []);
              }
            }),
              (this.abort = function () {
                g = !0;
              }),
              (this.getCharIndex = function () {
                return m;
              });
          }
          function f(e) {
            var t = e.data,
              r = s[t.workerId],
              i = !1;
            if (t.error) r.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var n = {
                abort: function () {
                  (i = !0),
                    _(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: b,
                resume: b,
              };
              if (w(r.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (r.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    n,
                  ),
                  !i);
                  a++
                );
                delete t.results;
              } else
                w(r.userChunk) &&
                  (r.userChunk(t.results, n, t.file), delete t.results);
            }
            t.finished && !i && _(t.workerId, t.results);
          }
          function _(e, t) {
            var r = s[e];
            w(r.userComplete) && r.userComplete(t), r.terminate(), delete s[e];
          }
          function b() {
            throw new Error("Not implemented.");
          }
          function y(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              r = Array.isArray(e) ? [] : {};
            for (t in e) r[t] = y(e[t]);
            return r;
          }
          function B(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function w(e) {
            return "function" == typeof e;
          }
          return (
            (o.parse = function (t, i) {
              var n = (i = i || {}).dynamicTyping || !1;
              if (
                (w(n) && ((i.dynamicTypingFunction = n), (n = {})),
                (i.dynamicTyping = n),
                (i.transform = !!w(i.transform) && i.transform),
                !i.worker || !o.WORKERS_SUPPORTED)
              )
                return (
                  (n = null),
                  o.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (n = new (i.download ? c : d)(i)))
                    : !0 === t.readable && w(t.read) && w(t.on)
                      ? (n = new m(i))
                      : ((r.File && t instanceof File) ||
                          t instanceof Object) &&
                        (n = new u(i)),
                  n.stream(t)
                );
              ((n = (() => {
                var t;
                return (
                  !!o.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = r.URL || r.webkitURL || null,
                      i = e.toString();
                    return (
                      o.BLOB_URL ||
                      (o.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            i,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new r.Worker(t)).onmessage = f),
                  (t.id = a++),
                  (s[t.id] = t))
                );
              })()).userStep = i.step),
                (n.userChunk = i.chunk),
                (n.userComplete = i.complete),
                (n.userError = i.error),
                (i.step = w(i.step)),
                (i.chunk = w(i.chunk)),
                (i.complete = w(i.complete)),
                (i.error = w(i.error)),
                delete i.worker,
                n.postMessage({ input: t, config: i, workerId: n.id });
            }),
            (o.unparse = function (e, t) {
              var r = !1,
                i = !0,
                n = ",",
                s = "\r\n",
                a = '"',
                l = a + a,
                c = !1,
                u = null,
                d = !1,
                m =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          o.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (n = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (r = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (c = t.skipEmptyLines),
                        "string" == typeof t.newline && (s = t.newline),
                        "string" == typeof t.quoteChar && (a = t.quoteChar),
                        "boolean" == typeof t.header && (i = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        u = t.columns;
                      }
                      void 0 !== t.escapeChar && (l = t.escapeChar + a),
                        t.escapeFormulae instanceof RegExp
                          ? (d = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (d = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(h(a), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return g(null, e, c);
                if ("object" == typeof e[0])
                  return g(u || Object.keys(e[0]), e, c);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || u),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  g(e.fields || [], e.data || [], c)
                );
              throw new Error("Unable to serialize unrecognized input");
              function g(e, t, r) {
                var a = "",
                  o =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  l = !Array.isArray(t[0]);
                if (o && i) {
                  for (var c = 0; c < e.length; c++)
                    0 < c && (a += n), (a += p(e[c], c));
                  0 < t.length && (a += s);
                }
                for (var u = 0; u < t.length; u++) {
                  var d = (o ? e : t[u]).length,
                    m = !1,
                    g = o ? 0 === Object.keys(t[u]).length : 0 === t[u].length;
                  if (
                    (r &&
                      !o &&
                      (m =
                        "greedy" === r
                          ? "" === t[u].join("").trim()
                          : 1 === t[u].length && 0 === t[u][0].length),
                    "greedy" === r && o)
                  ) {
                    for (var h = [], f = 0; f < d; f++) {
                      var _ = l ? e[f] : f;
                      h.push(t[u][_]);
                    }
                    m = "" === h.join("").trim();
                  }
                  if (!m) {
                    for (var b = 0; b < d; b++) {
                      0 < b && !g && (a += n);
                      var y = o && l ? e[b] : b;
                      a += p(t[u][y], b);
                    }
                    u < t.length - 1 && (!r || (0 < d && !g)) && (a += s);
                  }
                }
                return a;
              }
              function p(e, t) {
                var i, s;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((s = !1),
                      d &&
                        "string" == typeof e &&
                        d.test(e) &&
                        ((e = "'" + e), (s = !0)),
                      (i = e.toString().replace(m, l)),
                      (s =
                        s ||
                        !0 === r ||
                        ("function" == typeof r && r(e, t)) ||
                        (Array.isArray(r) && r[t]) ||
                        ((e, t) => {
                          for (var r = 0; r < t.length; r++)
                            if (-1 < e.indexOf(t[r])) return !0;
                          return !1;
                        })(i, o.BAD_DELIMITERS) ||
                        -1 < i.indexOf(n) ||
                        " " === i.charAt(0) ||
                        " " === i.charAt(i.length - 1))
                        ? a + i + a
                        : i);
              }
            }),
            (o.RECORD_SEP = String.fromCharCode(30)),
            (o.UNIT_SEP = String.fromCharCode(31)),
            (o.BYTE_ORDER_MARK = "\ufeff"),
            (o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK]),
            (o.WORKERS_SUPPORTED = !i && !!r.Worker),
            (o.NODE_STREAM_INPUT = 1),
            (o.LocalChunkSize = 10485760),
            (o.RemoteChunkSize = 5242880),
            (o.DefaultDelimiter = ","),
            (o.Parser = p),
            (o.ParserHandle = g),
            (o.NetworkStreamer = c),
            (o.FileStreamer = u),
            (o.StringStreamer = d),
            (o.ReadableStreamStreamer = m),
            r.jQuery &&
              ((t = r.jQuery).fn.parse = function (e) {
                var i = e.config || {},
                  n = [];
                return (
                  this.each(function (e) {
                    if (
                      "INPUT" !== t(this).prop("tagName").toUpperCase() ||
                      "file" !== t(this).attr("type").toLowerCase() ||
                      !r.FileReader ||
                      !this.files ||
                      0 === this.files.length
                    )
                      return !0;
                    for (var s = 0; s < this.files.length; s++)
                      n.push({
                        file: this.files[s],
                        inputElem: this,
                        instanceConfig: t.extend({}, i),
                      });
                  }),
                  s(),
                  this
                );
                function s() {
                  if (0 === n.length) w(e.complete) && e.complete();
                  else {
                    var r,
                      i,
                      s,
                      l,
                      c = n[0];
                    if (w(e.before)) {
                      var u = e.before(c.file, c.inputElem);
                      if ("object" == typeof u) {
                        if ("abort" === u.action)
                          return (
                            (r = "AbortError"),
                            (i = c.file),
                            (s = c.inputElem),
                            (l = u.reason),
                            void (w(e.error) && e.error({ name: r }, i, s, l))
                          );
                        if ("skip" === u.action) return void a();
                        "object" == typeof u.config &&
                          (c.instanceConfig = t.extend(
                            c.instanceConfig,
                            u.config,
                          ));
                      } else if ("skip" === u) return void a();
                    }
                    var d = c.instanceConfig.complete;
                    (c.instanceConfig.complete = function (e) {
                      w(d) && d(e, c.file, c.inputElem), a();
                    }),
                      o.parse(c.file, c.instanceConfig);
                  }
                }
                function a() {
                  n.splice(0, 1), s();
                }
              }),
            n &&
              (r.onmessage = function (e) {
                (e = e.data),
                  void 0 === o.WORKER_ID && e && (o.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? r.postMessage({
                        workerId: o.WORKER_ID,
                        results: o.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((r.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = o.parse(e.input, e.config)) &&
                      r.postMessage({
                        workerId: o.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((c.prototype = Object.create(l.prototype)).constructor = c),
            ((u.prototype = Object.create(l.prototype)).constructor = u),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((m.prototype = Object.create(l.prototype)).constructor = m),
            o
          );
        }),
        void 0 === (n = "function" == typeof r ? r.apply(t, i) : r) ||
          (e.exports = n);
    },
    77748: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { MeetSteamRoutes: () => $i, default: () => Hi });
      var i,
        n = r(7850),
        s = r(43527),
        a = r(90626),
        o = r(17083),
        l = r(92757),
        c = r(11577),
        u = r(14932),
        d = r(97058),
        m = r(84811),
        g = r(95695),
        h = r.n(g),
        p = r(38135),
        f = r(45737),
        _ = r.n(f),
        b = r(24484),
        y = r(22837),
        B = r(37085),
        w = r(56545),
        M = r(80613),
        S = r.n(M),
        v = r(89068);
      class j extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.clan_event_gid || v.Sg(j.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  registration_group_id: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  registration_session_id: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  guest_count: {
                    n: 5,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  jsondata: { n: 7, br: v.qM.readString, bw: v.gp.writeString },
                  skip_email: { n: 8, br: v.qM.readBool, bw: v.gp.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = v.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_UpdateRegistration_Request";
        }
      }
      class x extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_UpdateRegistration_Response";
        }
      }
      class z extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.clan_event_gid || v.Sg(z.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = v.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetAvailability_Request";
        }
      }
      class R extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.availability || v.Sg(R.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { availability: { n: 1, c: F, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = v.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetAvailability_Response";
        }
      }
      class F extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.group_id || v.Sg(F.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  group_id: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  session_id: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  guest_count: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = v.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetAvailability_Response_Session";
        }
      }
      class T extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.clan_event_gid || v.Sg(T.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = v.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetRegistrations_Request";
        }
      }
      class C extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.registrations || v.Sg(C.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { registrations: { n: 1, c: I, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = v.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetRegistrations_Response";
        }
      }
      class I extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.group_id || v.Sg(I.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  group_id: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  session_id: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  steamid: {
                    n: 3,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  guests_registered: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  jsondata: { n: 5, br: v.qM.readString, bw: v.gp.writeString },
                  rt_attendance_marked: {
                    n: 6,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  attendance_count: {
                    n: 7,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  guests_attendance: {
                    n: 8,
                    br: v.qM.readString,
                    bw: v.gp.writeString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = v.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetRegistrations_Response_Registration";
        }
      }
      class U extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.clan_event_gid || v.Sg(U.M()),
            M.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  accountids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: v.qM.readUint32,
                    pbr: v.qM.readPackedUint32,
                    bw: v.gp.writeRepeatedUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = v.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_EmailInvitees_Request";
        }
      }
      class O extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.num_emailed || v.Sg(O.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  num_emailed: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  num_skipped: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = v.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_EmailInvitees_Response";
        }
      }
      class E extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.clan_event_gid || v.Sg(E.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = v.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CParterMeetSteam_TestFireEmails_Request";
        }
      }
      class W extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.sessionids || v.Sg(W.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  sessionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: v.qM.readUint32,
                    pbr: v.qM.readPackedUint32,
                    bw: v.gp.writeRepeatedUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = v.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CParterMeetSteam_TestFireEmails_Response";
        }
      }
      class q extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.rt_oldest_date || v.Sg(q.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  rt_oldest_date: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = v.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetSaleEventOrganizers_Request";
        }
      }
      class A extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.accountid || v.Sg(A.M()),
            M.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  accountid: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  clan_event_gids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: v.qM.readFixed64String,
                    pbr: v.qM.readPackedFixed64String,
                    bw: v.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = v.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleEventOrganizerInfo";
        }
      }
      class D extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.info || v.Sg(D.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { info: { n: 1, c: A, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = v.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetSaleEventOrganizers_Response";
        }
      }
      class k extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.accountids || v.Sg(k.M()),
            M.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  accountids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: v.qM.readUint32,
                    pbr: v.qM.readPackedUint32,
                    bw: v.gp.writeRepeatedUint32,
                  },
                  partnerids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: v.qM.readUint32,
                    pbr: v.qM.readPackedUint32,
                    bw: v.gp.writeRepeatedUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = v.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request";
        }
      }
      class N extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.accountid || v.Sg(N.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  accountid: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  realname: { n: 3, br: v.qM.readString, bw: v.gp.writeString },
                  email: { n: 4, br: v.qM.readString, bw: v.gp.writeString },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = v.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerEmailAndName";
        }
      }
      class P extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.info || v.Sg(P.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { info: { n: 1, c: N, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = v.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response";
        }
      }
      !(function (e) {
        (e.UpdateRegistration = function (e, t, r) {
          return e.SendMsg(
            "PartnerMeetSteam.UpdateRegistration#1",
            (0, w.I8)(j, t, r),
            x,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetAvailability = function (e, t, r) {
            return e.SendMsg(
              "PartnerMeetSteam.GetAvailability#1",
              (0, w.I8)(z, t, r),
              R,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetRegistrations = function (e, t, r) {
            return e.SendMsg(
              "PartnerMeetSteam.GetRegistrations#1",
              (0, w.I8)(T, t, r),
              C,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.EmailInvitees = function (e, t, r) {
            return e.SendMsg(
              "PartnerMeetSteam.EmailInvitees#1",
              (0, w.I8)(U, t, r),
              O,
              { ePrivilege: 4 },
            );
          }),
          (e.TestFireEmails = function (e, t, r) {
            return e.SendMsg(
              "PartnerMeetSteam.TestFireEmails#1",
              (0, w.I8)(E, t, r),
              W,
              { ePrivilege: 4 },
            );
          }),
          (e.GetSaleEventOrganizers = function (e, t, r) {
            return e.SendMsg(
              "PartnerMeetSteam.GetSaleEventOrganizers#1",
              (0, w.I8)(q, t, r),
              D,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetBatchPartnerEmailAndName = function (e, t, r) {
            return e.SendMsg(
              "PartnerMeetSteam.GetBatchPartnerEmailAndName#1",
              (0, w.I8)(k, t, r),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {}));
      var G = r(64753),
        L = r(20194),
        $ = r(75233),
        H = r(41735),
        K = r.n(H),
        V = r(17720),
        Y = r(78327),
        J = r(32179),
        Q = r(21711),
        X = r(44165),
        Z = r(95034);
      function ee() {
        const [e] = a.useState(() =>
            (0, Y.Tc)("events_list", "application_config"),
          ),
          [t] = (0, Z.QD)("filter"),
          r = (0, X.f1)(),
          [i, n] = a.useMemo(() => {
            let t = new Array(),
              i = new Array();
            return (
              e.forEach((e) => {
                e.endtime &&
                (function (e, t = !1) {
                  const [r, i = "00:00:00"] = e.trim().split(/\s+/),
                    [n, s, a] = r.split("-").map(Number),
                    [o, l, c] = i.split(":").map(Number),
                    u = t
                      ? Date.UTC(n, s - 1, a, o, l, c ?? 0)
                      : new Date(n, s - 1, a, o, l, c ?? 0).getTime();
                  return Math.floor(u / 1e3);
                })(e.endtime) < r
                  ? i.push(e)
                  : t.push(e);
              }),
              [i, t]
            );
          }, [e, r]);
        return {
          rgOldEvents: i,
          rgEvents: n,
          selectConference: (0, a.useMemo)(
            () => e.find((e) => e.id === t?.toLocaleLowerCase()),
            [e, t],
          ),
        };
      }
      function te(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function re(e) {
        const t = `${Y.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          r = { sessionid: (0, Y.KC)(), partnerid: e },
          i = await K().get(t, { params: r });
        return i?.data?.data;
      }
      function ie(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function ne(e, t, r) {
        return (0, L.I)({
          queryKey: ["useMeetSteamGetAllRegistration", t, r],
          queryFn: async () => {
            const r = w.w.Init(T);
            r.Body().set_clan_event_gid(t);
            const n = await i.GetRegistrations(e, r);
            return n.BSuccess()
              ? n
                  .Body()
                  .registrations()
                  .map((e) => e.toObject())
              : [];
          },
          enabled: null != t && 0 != r,
        });
      }
      var se = r(19367),
        ae = r.n(se),
        oe = r(38390),
        le = r(62216),
        ce = r(96001),
        ue = r(16676),
        de = r(38647),
        me = r(26161),
        ge = r(78395),
        he = r(21869),
        pe = r(22797),
        fe = r(26408),
        _e = r(52038),
        be = r(65),
        ye = r(61859),
        Be = r(91675),
        we = r(30470),
        Me = r(30565),
        Se = r.n(Me);
      function ve(e) {
        const t = je();
        return (0, n.jsx)("div", {
          children: (0, n.jsx)("ol", {
            children: Array.from(t.entries()).map(([e, t]) =>
              (0, n.jsx)(
                "li",
                {
                  children: (0, n.jsx)("a", {
                    href: `${Y.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
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
      function je() {
        const [e] = (0, a.useState)(() => {
          const e = (0, Y.Tc)("survey_list", "application_config") || {},
            t = new Map();
          for (const r of Object.keys(e)) t.set(r, e[r]);
          return t;
        });
        return e;
      }
      function xe(e, t) {
        const r = (function () {
            const [e, t] = (0, a.useState)(location.search);
            return (
              (0, a.useEffect)(() => {
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
          i = (0, a.useMemo)(() => {
            const i = new URLSearchParams(r.substring(1)).get(e);
            return null != i
              ? null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== i)
                  : t.constructor(i)
                : i
              : t;
          }, [e, t, r]),
          [n, s] = (0, a.useState)(i),
          o = a.useCallback(
            (t, i = !1) => {
              const n = new URLSearchParams(r.substring(1));
              if (null != t) {
                if (n.get(e) == t) return;
                n.set(e, String(t));
              } else {
                if (!n.has(e)) return;
                n.delete(e);
              }
              i
                ? history.replaceState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${n}`),
                  )
                : history.pushState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${n}`),
                  ),
                (0, a.startTransition)(() => {
                  s(t), window.postMessage("urlchange");
                });
            },
            [e, r],
          );
        return [n, o];
      }
      const ze = a.createContext(void 0);
      function Re(e) {
        const { children: t } = e,
          [r, i] = xe("showpastevents", !1);
        return (0, n.jsx)(ze.Provider, {
          value: { bShowArchived: r, setShowArchived: i },
          children: t,
        });
      }
      const Fe = () => {
        const e = (0, a.useContext)(ze);
        if (!e)
          throw new Error(
            "useMeetSteamArchived must be used within MeetSteamArchivedProvider",
          );
        return e;
      };
      var Te = r(34283),
        Ce = r.n(Te),
        Ie = r(68797),
        Ue = r(9161);
      const Oe = 6;
      class Ee extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.total_playtime_seconds || v.Sg(Ee.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  total_playtime_seconds: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  total_sessions: {
                    n: 20,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  vr_sessions: {
                    n: 21,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  deck_sessions: {
                    n: 22,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  controller_sessions: {
                    n: 23,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  linux_sessions: {
                    n: 24,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  macos_sessions: {
                    n: 25,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  windows_sessions: {
                    n: 26,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  total_playtime_percentagex100: {
                    n: 27,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  vr_playtime_percentagex100: {
                    n: 28,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  deck_playtime_percentagex100: {
                    n: 29,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  controller_playtime_percentagex100: {
                    n: 30,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  linux_playtime_percentagex100: {
                    n: 31,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  macos_playtime_percentagex100: {
                    n: 32,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  windows_playtime_percentagex100: {
                    n: 33,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = v.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStats";
        }
      }
      class We extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.appid || v.Sg(We.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  appid: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = v.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStreakGame";
        }
      }
      class qe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.longest_consecutive_days || v.Sg(qe.M()),
            M.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  longest_consecutive_days: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  rtime_start: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  streak_games: { n: 3, c: We, r: !0, q: !0 },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = v.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStreak";
        }
      }
      class Ae extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.overall_rank || v.Sg(Ae.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  overall_rank: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  vr_rank: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  deck_rank: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  controller_rank: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  linux_rank: {
                    n: 5,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  mac_rank: { n: 6, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  windows_rank: {
                    n: 7,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = v.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ae.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeRanks";
        }
      }
      class De extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.appid || v.Sg(De.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  appid: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  stats: { n: 2, c: Ee },
                  playtime_streak: { n: 3, c: qe },
                  playtime_ranks: { n: 4, c: Ae },
                  rtime_first_played: {
                    n: 5,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  relative_game_stats: { n: 6, c: Ee },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = v.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGamePlaytimeStats";
        }
      }
      class ke extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.appid || v.Sg(ke.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  appid: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  new_this_year: {
                    n: 2,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  rtime_first_played_lifetime: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  demo: { n: 4, br: v.qM.readBool, bw: v.gp.writeBool },
                  playtest: { n: 5, br: v.qM.readBool, bw: v.gp.writeBool },
                  played_during_early_access: {
                    n: 6,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  played_vr: { n: 7, br: v.qM.readBool, bw: v.gp.writeBool },
                  played_deck: { n: 8, br: v.qM.readBool, bw: v.gp.writeBool },
                  played_controller: {
                    n: 9,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  played_linux: {
                    n: 10,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  played_mac: { n: 11, br: v.qM.readBool, bw: v.gp.writeBool },
                  played_windows: {
                    n: 12,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  total_playtime_percentagex100: {
                    n: 13,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  total_sessions: {
                    n: 14,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  rtime_release_date: {
                    n: 15,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  parent_appid: {
                    n: 16,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = v.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameSummary";
        }
      }
      class Ne extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.appid || v.Sg(Ne.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  appid: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  total_playtime_percentagex100: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  relative_playtime_percentagex100: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = v.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSimpleGameSummary";
        }
      }
      class Pe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.appid || v.Sg(Pe.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  appid: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  rank: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  relative_playtime_percentagex100: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = v.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRank";
        }
      }
      class Ge extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.category || v.Sg(Ge.M()),
            M.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  category: { n: 1, br: v.qM.readString, bw: v.gp.writeString },
                  rankings: { n: 2, c: Pe, r: !0, q: !0 },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = v.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CRankingCategory";
        }
      }
      class Le extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.overall_ranking || v.Sg(Le.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  overall_ranking: { n: 1, c: Ge },
                  vr_ranking: { n: 2, c: Ge },
                  deck_ranking: { n: 3, c: Ge },
                  controller_ranking: { n: 4, c: Ge },
                  linux_ranking: { n: 5, c: Ge },
                  mac_ranking: { n: 6, c: Ge },
                  windows_ranking: { n: 7, c: Ge },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = v.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Le.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRankings";
        }
      }
      class $e extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.total_achievements || v.Sg($e.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  total_achievements: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  total_games_with_achievements: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  total_rare_achievements: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = v.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT($e.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserPlaytimeSummaryStats";
        }
      }
      class He extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.stats || v.Sg(He.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: { stats: { n: 1, c: Ke, r: !0, q: !0 } },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = v.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(He.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserTagStats";
        }
      }
      class Ke extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.tag_id || v.Sg(Ke.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  tag_id: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  tag_weight: { n: 2, br: v.qM.readFloat, bw: v.gp.writeFloat },
                  tag_weight_pre_selection: {
                    n: 3,
                    br: v.qM.readFloat,
                    bw: v.gp.writeFloat,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = v.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ke.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserTagStats_Tag";
        }
      }
      class Ve extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.screenshots_shared || v.Sg(Ve.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  screenshots_shared: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  gifts_sent: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  loyalty_reactions: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  written_reviews: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  guides_submitted: {
                    n: 5,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  workshop_contributions: {
                    n: 6,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  badges_earned: {
                    n: 7,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  friends_added: {
                    n: 8,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  forum_posts: {
                    n: 9,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  workshop_subscriptions: {
                    n: 10,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  guide_subscribers: {
                    n: 11,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  workshop_subscribers: {
                    n: 12,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  games_played_pct: {
                    n: 13,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  achievements_pct: {
                    n: 14,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  game_streak_pct: {
                    n: 15,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  games_played_avg: {
                    n: 16,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  achievements_avg: {
                    n: 17,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  game_streak_avg: {
                    n: 18,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = v.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ve.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeByNumbers";
        }
      }
      class Ye extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.total_stats || v.Sg(Ye.M()),
            M.Message.initialize(this, e, 0, -1, [2, 5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  total_stats: { n: 1, c: Ee },
                  games: { n: 2, c: De, r: !0, q: !0 },
                  playtime_streak: { n: 3, c: qe },
                  months: { n: 5, c: Je, r: !0, q: !0 },
                  game_summary: { n: 6, c: ke, r: !0, q: !0 },
                  demos_played: {
                    n: 7,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  game_rankings: { n: 8, c: Le },
                  playtests_played: {
                    n: 9,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  summary_stats: { n: 10, c: $e },
                  substantial: {
                    n: 11,
                    d: !0,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  tag_stats: { n: 12, c: He },
                  by_numbers: { n: 13, c: Ve },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = v.w0(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ye.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserPlaytimeStats";
        }
      }
      class Je extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.rtime_month || v.Sg(Je.M()),
            M.Message.initialize(this, e, 0, -1, [4, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  rtime_month: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  stats: { n: 2, c: Ee },
                  appid: { n: 4, c: De, r: !0, q: !0 },
                  relative_monthly_stats: { n: 5, c: Ee },
                  game_summary: { n: 6, c: Ne, r: !0, q: !0 },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = v.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Je.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMonthlyPlaytimeStats";
        }
      }
      class Qe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.account_id || v.Sg(Qe.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  account_id: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  year: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  playtime_stats: { n: 3, c: Ye },
                  privacy_state: {
                    n: 4,
                    br: v.qM.readEnum,
                    bw: v.gp.writeEnum,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = v.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Qe.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserYearInReviewStats";
        }
      }
      class Xe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.from_dbo || v.Sg(Xe.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  from_dbo: { n: 1, br: v.qM.readBool, bw: v.gp.writeBool },
                  overall_time_ms: {
                    n: 2,
                    br: v.qM.readUint64String,
                    bw: v.gp.writeUint64String,
                  },
                  dbo_load_ms: {
                    n: 3,
                    br: v.qM.readUint64String,
                    bw: v.gp.writeUint64String,
                  },
                  query_execution_ms: {
                    n: 4,
                    br: v.qM.readUint64String,
                    bw: v.gp.writeUint64String,
                  },
                  message_population_ms: {
                    n: 5,
                    br: v.qM.readUint64String,
                    bw: v.gp.writeUint64String,
                  },
                  dbo_lock_load_ms: {
                    n: 6,
                    br: v.qM.readUint64String,
                    bw: v.gp.writeUint64String,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = v.w0(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Xe.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CYearInReviewPerformanceStats";
        }
      }
      class Ze extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.statid || v.Sg(Ze.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  statid: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  fieldid: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  achievement_name_internal: {
                    n: 3,
                    br: v.qM.readString,
                    bw: v.gp.writeString,
                  },
                  rtime_unlocked: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = v.w0(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ze.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAchievementDetails";
        }
      }
      class et extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.appid || v.Sg(et.M()),
            M.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  appid: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  achievements: { n: 2, c: Ze, r: !0, q: !0 },
                  all_time_unlocked_achievements: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  unlocked_more_in_future: {
                    n: 4,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = v.w0(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(et.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameAchievements";
        }
      }
      class tt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.median_achievements || v.Sg(tt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  median_achievements: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  median_games: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  median_streak: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = v.w0(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(tt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGlobalPercentiles";
        }
      }
      class rt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.new_releases || v.Sg(rt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  new_releases: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  recent_releases: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  classic_releases: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  recent_cutoff_year: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = v.w0(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(rt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGlobalPlaytimeDistribution";
        }
      }
      class it extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            it.prototype.games_played || v.Sg(it.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  games_played: {
                    n: 1,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  unlocked_achievements: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  longest_streak: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = v.w0(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(it.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(it.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(it.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(it.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPreviousYIRSummaryData";
        }
      }
      class nt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nt.prototype.steamid || v.Sg(nt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  year: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  force_regenerate: {
                    n: 3,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  access_source: {
                    n: 4,
                    br: v.qM.readInt32,
                    bw: v.gp.writeInt32,
                  },
                  fetch_previous_year_summary: {
                    n: 5,
                    d: !1,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = v.w0(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(nt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReview_Request";
        }
      }
      class st extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.stats || v.Sg(st.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: {
                  stats: { n: 1, c: Qe },
                  performance_stats: { n: 2, c: Xe },
                  percentiles: { n: 3, c: tt },
                  distribution: { n: 4, c: rt },
                  previous_year_summary: { n: 5, c: it },
                },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = v.w0(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(st.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(st.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new st();
          return st.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(st.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(st.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReview_Response";
        }
      }
      class at extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            at.prototype.steamid || v.Sg(at.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  year: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  privacy_state: {
                    n: 3,
                    br: v.qM.readEnum,
                    bw: v.gp.writeEnum,
                  },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = v.w0(at.M())), at.sm_mbf;
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(at.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(at.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new at();
          return at.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(at.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(at.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_SetUserSharingPermissions_Request";
        }
      }
      class ot extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ot.prototype.privacy_state || v.Sg(ot.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: v.qM.readEnum,
                    bw: v.gp.writeEnum,
                  },
                },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = v.w0(ot.M())), ot.sm_mbf;
        }
        toObject(e = !1) {
          return ot.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(ot.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ot();
          return ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_SetUserSharingPermissions_Response";
        }
      }
      class lt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lt.prototype.steamid || v.Sg(lt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  year: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = v.w0(lt.M())), lt.sm_mbf;
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(lt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new lt();
          return lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserSharingPermissions_Request";
        }
      }
      class ct extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ct.prototype.privacy_state || v.Sg(ct.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: v.qM.readEnum,
                    bw: v.gp.writeEnum,
                  },
                  generated_value: {
                    n: 2,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  steamid: {
                    n: 3,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  rt_privacy_updated: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = v.w0(ct.M())), ct.sm_mbf;
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(ct.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ct();
          return ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserSharingPermissions_Response";
        }
      }
      class ut extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ut.prototype.steamid || v.Sg(ut.M()),
            M.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = {
                proto: ut,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  year: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: v.qM.readUint32,
                    pbr: v.qM.readPackedUint32,
                    bw: v.gp.writeRepeatedUint32,
                  },
                  total_only: { n: 4, br: v.qM.readBool, bw: v.gp.writeBool },
                },
              }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = v.w0(ut.M())), ut.sm_mbf;
        }
        toObject(e = !1) {
          return ut.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(ut.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ut();
          return ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearAchievements_Request";
        }
      }
      class dt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dt.prototype.game_achievements || v.Sg(dt.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: {
                  game_achievements: { n: 1, c: et, r: !0, q: !0 },
                  total_achievements: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  total_rare_achievements: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  total_games_with_achievements: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = v.w0(dt.M())), dt.sm_mbf;
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(dt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new dt();
          return dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearAchievements_Response";
        }
      }
      class mt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mt.prototype.steamid || v.Sg(mt.M()),
            M.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mt.sm_m ||
              (mt.sm_m = {
                proto: mt,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  year: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: v.qM.readUint32,
                    pbr: v.qM.readPackedUint32,
                    bw: v.gp.writeRepeatedUint32,
                  },
                },
              }),
            mt.sm_m
          );
        }
        static MBF() {
          return mt.sm_mbf || (mt.sm_mbf = v.w0(mt.M())), mt.sm_mbf;
        }
        toObject(e = !1) {
          return mt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(mt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new mt();
          return mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Request";
        }
      }
      class gt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gt.prototype.apps || v.Sg(gt.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gt.sm_m ||
              (gt.sm_m = {
                proto: gt,
                fields: { apps: { n: 1, c: pt, r: !0, q: !0 } },
              }),
            gt.sm_m
          );
        }
        static MBF() {
          return gt.sm_mbf || (gt.sm_mbf = v.w0(gt.M())), gt.sm_mbf;
        }
        toObject(e = !1) {
          return gt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(gt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new gt();
          return gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Response";
        }
      }
      class ht extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ht.prototype.image_url || v.Sg(ht.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ht.sm_m ||
              (ht.sm_m = {
                proto: ht,
                fields: {
                  image_url: {
                    n: 1,
                    br: v.qM.readString,
                    bw: v.gp.writeString,
                  },
                  preview_url: {
                    n: 2,
                    br: v.qM.readString,
                    bw: v.gp.writeString,
                  },
                  image_width: {
                    n: 3,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  image_height: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  maybe_inappropriate_sex: {
                    n: 5,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  maybe_inappropriate_violence: {
                    n: 6,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                  visibility: {
                    n: 7,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  spoiler_tag: { n: 8, br: v.qM.readBool, bw: v.gp.writeBool },
                },
              }),
            ht.sm_m
          );
        }
        static MBF() {
          return ht.sm_mbf || (ht.sm_mbf = v.w0(ht.M())), ht.sm_mbf;
        }
        toObject(e = !1) {
          return ht.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(ht.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ht();
          return ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
        }
      }
      class pt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.appid || v.Sg(pt.M()),
            M.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  appid: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  screenshots: { n: 2, c: ht, r: !0, q: !0 },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = v.w0(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(pt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
        }
      }
      class ft extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.steamid || v.Sg(ft.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  gid: {
                    n: 2,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  type: { n: 3, br: v.qM.readEnum, bw: v.gp.writeEnum },
                },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = v.w0(ft.M())), ft.sm_mbf;
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(ft.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserActionData_Request";
        }
      }
      class _t extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _t.prototype.jsondata || v.Sg(_t.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _t.sm_m ||
              (_t.sm_m = {
                proto: _t,
                fields: {
                  jsondata: { n: 1, br: v.qM.readString, bw: v.gp.writeString },
                },
              }),
            _t.sm_m
          );
        }
        static MBF() {
          return _t.sm_mbf || (_t.sm_mbf = v.w0(_t.M())), _t.sm_mbf;
        }
        toObject(e = !1) {
          return _t.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(_t.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(_t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new _t();
          return _t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(_t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return _t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(_t.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return _t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserActionData_Response";
        }
      }
      class bt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            bt.prototype.steamid || v.Sg(bt.M()),
            M.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            bt.sm_m ||
              (bt.sm_m = {
                proto: bt,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  gids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: v.qM.readFixed64String,
                    pbr: v.qM.readPackedFixed64String,
                    bw: v.gp.writeRepeatedFixed64String,
                  },
                  type: { n: 3, br: v.qM.readEnum, bw: v.gp.writeEnum },
                },
              }),
            bt.sm_m
          );
        }
        static MBF() {
          return bt.sm_mbf || (bt.sm_mbf = v.w0(bt.M())), bt.sm_mbf;
        }
        toObject(e = !1) {
          return bt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(bt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new bt();
          return bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetMultipleUserActionData_Request";
        }
      }
      class yt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.entries || v.Sg(yt.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: { entries: { n: 1, c: Bt, r: !0, q: !0 } },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = v.w0(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(yt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetMultipleUserActionData_Response";
        }
      }
      class Bt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Bt.prototype.gid || v.Sg(Bt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Bt.sm_m ||
              (Bt.sm_m = {
                proto: Bt,
                fields: {
                  gid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  jsondata: { n: 2, br: v.qM.readString, bw: v.gp.writeString },
                  steamid: {
                    n: 3,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                },
              }),
            Bt.sm_m
          );
        }
        static MBF() {
          return Bt.sm_mbf || (Bt.sm_mbf = v.w0(Bt.M())), Bt.sm_mbf;
        }
        toObject(e = !1) {
          return Bt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Bt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Bt();
          return Bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
        }
      }
      class wt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wt.prototype.gid || v.Sg(wt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wt.sm_m ||
              (wt.sm_m = {
                proto: wt,
                fields: {
                  gid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  type: { n: 2, br: v.qM.readEnum, bw: v.gp.writeEnum },
                  count: { n: 3, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  last_account_index: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            wt.sm_m
          );
        }
        static MBF() {
          return wt.sm_mbf || (wt.sm_mbf = v.w0(wt.M())), wt.sm_mbf;
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(wt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetAllUserActionDataForType_Request";
        }
      }
      class Mt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.entries || v.Sg(Mt.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
                fields: {
                  entries: { n: 1, c: St, r: !0, q: !0 },
                  last_account_index: {
                    n: 2,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            Mt.sm_m
          );
        }
        static MBF() {
          return Mt.sm_mbf || (Mt.sm_mbf = v.w0(Mt.M())), Mt.sm_mbf;
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Mt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetAllUserActionDataForType_Response";
        }
      }
      class St extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.gid || v.Sg(St.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: {
                  gid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  jsondata: { n: 2, br: v.qM.readString, bw: v.gp.writeString },
                  steamid: {
                    n: 3,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = v.w0(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(St.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
        }
      }
      class vt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vt.prototype.steamid || v.Sg(vt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vt.sm_m ||
              (vt.sm_m = {
                proto: vt,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  year: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  return_private: {
                    n: 3,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                },
              }),
            vt.sm_m
          );
        }
        static MBF() {
          return vt.sm_mbf || (vt.sm_mbf = v.w0(vt.M())), vt.sm_mbf;
        }
        toObject(e = !1) {
          return vt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(vt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new vt();
          return vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetFriendsSharedYearInReview_Request";
        }
      }
      class jt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jt.prototype.steamid || v.Sg(jt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            jt.sm_m ||
              (jt.sm_m = {
                proto: jt,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  privacy_state: {
                    n: 3,
                    br: v.qM.readEnum,
                    bw: v.gp.writeEnum,
                  },
                  rt_privacy_updated: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  privacy_override: {
                    n: 5,
                    br: v.qM.readBool,
                    bw: v.gp.writeBool,
                  },
                },
              }),
            jt.sm_m
          );
        }
        static MBF() {
          return jt.sm_mbf || (jt.sm_mbf = v.w0(jt.M())), jt.sm_mbf;
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(jt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendSharedYearInView";
        }
      }
      class xt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xt.prototype.friend_shares || v.Sg(xt.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xt.sm_m ||
              (xt.sm_m = {
                proto: xt,
                fields: {
                  friend_shares: { n: 1, c: jt, r: !0, q: !0 },
                  year: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                },
              }),
            xt.sm_m
          );
        }
        static MBF() {
          return xt.sm_mbf || (xt.sm_mbf = v.w0(xt.M())), xt.sm_mbf;
        }
        toObject(e = !1) {
          return xt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(xt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new xt();
          return xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetFriendsSharedYearInReview_Response";
        }
      }
      class zt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.steamid || v.Sg(zt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                  year: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  language: { n: 3, br: v.qM.readString, bw: v.gp.writeString },
                },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = v.w0(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(zt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReviewShareImage_Request";
        }
      }
      class Rt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.images || v.Sg(Rt.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = {
                proto: Rt,
                fields: { images: { n: 1, c: Ft, r: !0, q: !0 } },
              }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = v.w0(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Rt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReviewShareImage_Response";
        }
      }
      class Ft extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ft.prototype.name || v.Sg(Ft.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ft.sm_m ||
              (Ft.sm_m = {
                proto: Ft,
                fields: {
                  name: { n: 1, br: v.qM.readString, bw: v.gp.writeString },
                  url_path: { n: 2, br: v.qM.readString, bw: v.gp.writeString },
                },
              }),
            Ft.sm_m
          );
        }
        static MBF() {
          return Ft.sm_mbf || (Ft.sm_mbf = v.w0(Ft.M())), Ft.sm_mbf;
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ft.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
        }
      }
      class Tt extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.steamid || v.Sg(Tt.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  steamid: {
                    n: 1,
                    br: v.qM.readFixed64String,
                    bw: v.gp.writeFixed64String,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = v.w0(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Tt.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
        }
      }
      class Ct extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.year || v.Sg(Ct.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  year: { n: 1, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  month: { n: 2, br: v.qM.readUint32, bw: v.gp.writeUint32 },
                  games_played: {
                    n: 4,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  top_played_appid: {
                    n: 5,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  longest_streak_days: {
                    n: 6,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  rt_streak_start: {
                    n: 7,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  achievements: {
                    n: 8,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                  screenshots: {
                    n: 9,
                    br: v.qM.readUint32,
                    bw: v.gp.writeUint32,
                  },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = v.w0(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return v.BT(Ct.M(), e, t);
        }
        static fromObject(e) {
          return v.Uq(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return v.zj(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          v.i0(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
        }
      }
      var It;
      !(function (e) {
        (e.GetUserYearInReview = function (e, t, r) {
          return e.SendMsg(
            "SaleFeature.GetUserYearInReview#1",
            (0, w.I8)(nt, t, r),
            st,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetUserSharingPermissions = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, w.I8)(lt, t, r),
              ct,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetUserSharingPermissions = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, w.I8)(at, t, r),
              ot,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserYearAchievements = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, w.I8)(ut, t, r),
              dt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUserYearScreenshots = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, w.I8)(mt, t, r),
              gt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUserActionData = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, w.I8)(ft, t, r),
              _t,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMultipleUserActionData = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, w.I8)(bt, t, r),
              yt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAllUserActionDataForType = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, w.I8)(wt, t, r),
              Mt,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetFriendsSharedYearInReview = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, w.I8)(vt, t, r),
              xt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserYearInReviewShareImage = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, w.I8)(zt, t, r),
              Rt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetYIRCurrentMonthlySummary = function (e, t, r) {
            return e.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, w.I8)(Tt, t, r),
              Ct,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(It || (It = {}));
      var Ut = r(27144),
        Ot = r(81393),
        Et = r(96059);
      class Wt {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            Wt.s_Singleton ||
              ((Wt.s_Singleton = new Wt()), Wt.s_Singleton.Init()),
            Wt.s_Singleton
          );
        }
        Init() {
          const e = (0, b.Tc)("store_feature_token", "application_config");
          (0, Ot.wT)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new Et.D(we.TS.WEBAPI_BASE_URL, e));
        }
      }
      function qt() {
        return Wt.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      var At = r(6083),
        Dt = r(66418);
      function kt(e) {
        return (0, L.I)({
          queryKey: ["MeetSteamPartnersForAccount", e],
          queryFn: () =>
            (async function (e) {
              const t = `${Dt.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${e}`,
                r = await fetch(t);
              if (!r.ok)
                throw new Error(
                  `Failed to read the partner list for account ${e}`,
                );
              const i = await r.json();
              if (i.success != B.R)
                throw new Error(
                  `Failed to read the partner list for account ${e}: ${i.msg}`,
                );
              return i.partners ?? [];
            })(e),
          enabled: e > 0,
        });
      }
      function Nt(e, t = {}) {
        const {
            nTimeoutMS: r = 350,
            nTimeoutExtensionMS: i = 125,
            nMaxTimeoutExtensions: n = 3,
          } = t,
          [s, o] = a.useState(e),
          l = a.useRef(void 0);
        return (
          a.useEffect(() => {
            const t = performance.now();
            l.current
              ? t - l.current.tsLastChange < n * r &&
                (l.current.tsScheduledTimeout = Math.max(
                  performance.now() + i,
                  l.current.tsScheduledTimeout,
                ))
              : (l.current = {
                  tsLastChange: t,
                  tsScheduledTimeout: performance.now() + r,
                });
            const s = l.current.tsScheduledTimeout - performance.now(),
              a = window.setTimeout(() => {
                (l.current = void 0), o(e);
              }, s);
            return () => window.clearTimeout(a);
          }, [e, r, i, n]),
          s
        );
      }
      function Pt(e) {
        const { hideModal: t, gid: r } = e,
          [i, s] = (0, a.useState)(!1),
          [o, l] = (0, a.useState)(null),
          [c, u] = a.useState(""),
          [d, m] = a.useState(""),
          [h, p] = a.useState(""),
          [f, _] = a.useState(!1),
          b = Nt(c),
          y = (function (e) {
            const t = e.trim();
            if (!/^\d+$/.test(t)) return 0;
            if (Number(t) > 4294967295) {
              const e = new V.b(t);
              return e.BIsValid() && e.BIsIndividualAccount()
                ? e.GetAccountID()
                : 0;
            }
            return Number(t);
          })(b),
          w = Boolean(b.trim()) && !y,
          M = qt(),
          S = kt(y),
          v = S.data,
          j = (0, L.I)({
            queryKey: ["MeetSteamInviteDirectDialog", r, y],
            queryFn: async () => {
              const e = {
                  steamid: V.b.InitFromAccountID(y).ConvertTo64BitString(),
                  gid: r,
                  type: Oe,
                },
                t = await It.GetUserActionData(M, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(r) && y > 0,
          });
        a.useEffect(() => {
          if (!j.isLoading && j.isSuccess) {
            const e = 1 == v?.length ? v[0].partnerid.toString() : "";
            m(j.data.partner_id ? j.data.partner_id.toString() : e),
              p(j.data.email_override ?? ""),
              _(j.data.allow_registration_if_full ?? !1);
          }
        }, [j.isLoading, j.isSuccess, j.data, v]);
        return (0, n.jsxs)(ge.o0, {
          strTitle: "Invite User",
          bOKDisabled: !y || i || j.isLoading,
          onOK: async () => {
            s(!0);
            const e = Number.parseInt(d) > 0 ? Number.parseInt(d) : 0,
              i = await Vt(
                r,
                [
                  {
                    nAccountID: y,
                    nPartnerID: e,
                    strEmailOverride: h,
                    bAllowRegistrationIfFull: f,
                  },
                ],
                !0,
              ),
              n = i && i.success == B.R;
            n || l("We hit error during invite, check console: " + i?.msg),
              s(!1),
              j.refetch(),
              n && t();
          },
          onCancel: t,
          children: [
            Boolean(o) &&
              (0, n.jsx)("div", {
                className: g.ErrorStylesWithIcon,
                children: o,
              }),
            !i &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    children:
                      "Saving sends an invitation email to this account only, and only if it has not been sent one for this event already. It does not send the invitation emails queued for anyone else. Use the Invitation And Registration Status dialog for those.",
                  }),
                  (0, n.jsx)(ue.pd, {
                    type: "text",
                    label: "Account ID or Steam ID",
                    description:
                      "Accepts either the 32-bit account id or the 64-bit steam id",
                    onChange: (e) => u(e.currentTarget.value),
                    value: c,
                  }),
                  w &&
                    (0, n.jsx)("div", {
                      className: g.ErrorStylesWithIcon,
                      children: "That is not a valid account id or steam id.",
                    }),
                  0 != y && (0, n.jsx)(Gt, { nAccountID: y }),
                  0 != y &&
                    !j.isLoading &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(ue.pd, {
                          type: "number",
                          label: "Partner ID (optional)",
                          onChange: (e) => m(e.currentTarget.value),
                          value: d,
                        }),
                        (0, n.jsx)(Lt, {
                          rgPartners: v,
                          bLoading: S.isLoading,
                          bFailed: S.isError,
                          strPartnerID: d,
                          SetPartnerID: m,
                        }),
                        (0, n.jsx)(ue.pd, {
                          type: "text",
                          label: "Email override (optional)",
                          onChange: (e) => p(e.currentTarget.value.trim()),
                          value: h,
                        }),
                        (0, n.jsx)(ue.Yh, {
                          controlled: !0,
                          checked: f,
                          onChange: _,
                          label: "Allow if registration is full",
                        }),
                      ],
                    }),
                ],
              }),
            i &&
              (0, n.jsx)(pe.t, {
                size: "small",
                position: "center",
                string: (0, ye.we)("#Saving"),
              }),
            j.isLoading &&
              (0, n.jsx)(pe.t, {
                size: "small",
                position: "center",
                string: (0, ye.we)("#Loading"),
              }),
          ],
        });
      }
      function Gt(e) {
        const { nAccountID: t } = e,
          [r, i] = (0, Ut.KT)(t);
        if (i)
          return (0, n.jsx)(pe.t, {
            size: "small",
            position: "center",
            string: (0, ye.we)("#Loading"),
          });
        if (!r)
          return (0, n.jsx)("div", {
            className: g.ErrorStylesWithIcon,
            children: `We could not find an account for ${t}.`,
          });
        const s = V.b.InitFromAccountID(t).ConvertTo64BitString();
        return (0, n.jsxs)("div", {
          className: Ce().AccountSummary,
          children: [
            (0, n.jsx)("img", {
              className: Ce().AccountAvatar,
              src: r.avatar_url?.replace(/\.jpg$/, "_medium.jpg"),
            }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("div", {
                  className: Ce().AccountPersonaName,
                  children: r.persona_name,
                }),
                (0, n.jsx)("a", {
                  href: `${we.TS.SUPPORT_BASE_URL}account/overview/${s}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: `Account ${t} / SteamID ${s}`,
                }),
              ],
            }),
          ],
        });
      }
      function Lt(e) {
        const {
          rgPartners: t,
          bLoading: r,
          bFailed: i,
          strPartnerID: s,
          SetPartnerID: a,
        } = e;
        return r
          ? (0, n.jsx)(pe.t, {
              size: "small",
              position: "center",
              string: "Looking up partner membership",
            })
          : i
            ? (0, n.jsx)("div", {
                className: Ce().PartnerListHeader,
                children:
                  "We could not look up partner membership, enter the partner id above.",
              })
            : t && 0 != t.length
              ? (0, n.jsxs)("div", {
                  className: Ce().PartnerList,
                  children: [
                    (0, n.jsx)("div", {
                      className: Ce().PartnerListHeader,
                      children: "Member of, click to use:",
                    }),
                    t.map((e) =>
                      (0, n.jsxs)(
                        "a",
                        {
                          href: "#",
                          className: (0, _e.A)(
                            Ce().PartnerListRow,
                            e.partnerid.toString() == s
                              ? Ce().PartnerListRowSelected
                              : "",
                          ),
                          onClick: (t) => {
                            t.preventDefault(), a(e.partnerid.toString());
                          },
                          children: [e.partner_name, " (", e.partnerid, ")"],
                        },
                        e.partnerid,
                      ),
                    ),
                  ],
                })
              : (0, n.jsx)("div", {
                  className: Ce().PartnerListHeader,
                  children: "This account is not a member of any partner.",
                });
      }
      function $t(e) {
        const { hideModal: t, gid: r } = e,
          [i, s] = (0, a.useState)(null),
          [o, l] = (0, a.useState)(!1),
          [c, u] = (0, a.useState)(null),
          [d, m] = (0, a.useState)(null),
          [h, p] = (0, a.useState)(null);
        return (0, n.jsxs)(ge.o0, {
          strTitle: "Invite Users",
          bOKDisabled: !i || 0 == i.length || null != d,
          strCancelButtonText: null !== d ? "Close" : "Cancel",
          onOK: async () => {
            l(!0);
            const e = await Vt(r, i, !1);
            e?.success == B.R
              ? (m(e.rgInvitedAccounts.length), p(e.rgSkippedAccounts.length))
              : u("We hit error during invite, check console: " + e?.msg),
              l(!1);
          },
          onCancel: () => {
            m(null), p(null), l(!1), s(null), t();
          },
          children: [
            Boolean(c) &&
              (0, n.jsx)("div", {
                className: g.ErrorStylesWithIcon,
                children: c,
              }),
            null != d &&
              (0, n.jsxs)("div", {
                children: [
                  "Invited ",
                  (0, At.D)(d),
                  " accounts, skipped previously invited ",
                  (0, At.D)(h),
                ],
              }),
            o &&
              (0, n.jsx)(pe.t, {
                size: "small",
                position: "center",
                string: (0, ye.we)("#Saving"),
              }),
            (0, n.jsx)("div", {
              children:
                "Saving sends an invitation email to the accounts imported here that have not been sent one for this event already. It does not send the invitation emails queued for anyone else on the event.",
            }),
            null == i
              ? (0, n.jsx)(Kt, { setInvites: s })
              : (0, n.jsx)(Ht, { rgInvites: i }),
          ],
        });
      }
      function Ht(e) {
        const { rgInvites: t } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              children: ["Total Invites Parsed: ", t.length, " "],
            }),
            (0, n.jsxs)("table", {
              children: [
                (0, n.jsx)("thead", {
                  children: (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("th", { children: "AccountID" }),
                      (0, n.jsx)("th", { children: "PartnerID" }),
                      (0, n.jsx)("th", { children: "Email Override" }),
                    ],
                  }),
                }),
                (0, n.jsx)("tbody", {
                  children: t.map((e, t) =>
                    (0, n.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, n.jsx)("td", { children: e.nAccountID }),
                          (0, n.jsx)("td", { children: e.nPartnerID }),
                          (0, n.jsx)("td", { children: e.strEmailOverride }),
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
      function Kt(e) {
        const { setInvites: t } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              children: "Format for CSV File, please use the template below:",
            }),
            (0, n.jsxs)("ul", {
              children: [
                (0, n.jsxs)("li", {
                  children: [
                    (0, n.jsx)("b", { children: "nAccountID" }),
                    " - required, 32-bit integer value, not the 64-bit steam id",
                  ],
                }),
                (0, n.jsxs)("li", {
                  children: [
                    (0, n.jsx)("b", { children: "nPartnerID" }),
                    " - (preferred for biz contact)",
                  ],
                }),
                (0, n.jsxs)("li", {
                  children: [
                    (0, n.jsx)("b", { children: "strOverrideEmail" }),
                    " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
                  ],
                }),
              ],
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("a", {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation();
                const t = [];
                t.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                  t.push(["388445686", "1", "adils@valvesoftware.com"]);
                Ue.g.WriteCSVToFile(t, "invite_template.csv");
              },
              children: "Download Template Example",
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("br", {}),
            (0, n.jsx)(ue.$n, {
              children: (0, n.jsxs)("label", {
                className: Ce().ImportButtonLabel,
                htmlFor: "import-discount-input",
                children: [
                  "Choose CSV File",
                  (0, n.jsx)("input", {
                    id: "import-discount-input",
                    type: "file",
                    style: { display: "none" },
                    onChange: async (e) => {
                      if (e.target.files.length >= 1) {
                        const r = e.target.files[0],
                          i = await Ue.g.ParseCSVFile(r);
                        if (i?.data) {
                          const e = new Array();
                          i.data.forEach((t) => {
                            if (t.nAccountID) {
                              const r = {
                                nAccountID: Number.parseInt(t.nAccountID),
                              };
                              t.nPartnerID &&
                                (r.nPartnerID = Number.parseInt(t.nPartnerID)),
                                t.strEmailOverride &&
                                  (r.strEmailOverride = t.strEmailOverride),
                                e.push(r);
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
      async function Vt(e, t, r) {
        const i = t.map((e) => e.nAccountID).join(","),
          n = t.map((e) => e.nPartnerID).join(","),
          s = t.map((e) => e.strEmailOverride).join(","),
          a = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let o = new FormData();
        o.append("sessionid", (0, Y.KC)()),
          o.append("gid", e),
          o.append("accounts", i),
          o.append("partnerids", n),
          o.append("emailoverride", s),
          o.append("allowregistrationiffull", a),
          o.append("forceupdate", r ? "1" : "0");
        const l = `${we.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await K().post(l, o, { withCredentials: !0 });
          if (e?.data?.success != B.R) {
            let t = (0, Ie.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, Ie.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var Yt = r(16666),
        Jt = r(66051),
        Qt = r(54806),
        Xt = r(58632),
        Zt = r.n(Xt);
      function er(e) {
        const t = qt(),
          r = a.useContext(rr),
          i = (0, L.I)(ir(r, t, e));
        return i.isLoading ? null : i.data;
      }
      function tr(e) {
        const t = qt(),
          r = a.useContext(rr);
        return (0, Qt.E)({ queries: e.map((e) => ir(r, t, e)) });
      }
      const rr = a.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            nr ||
              (nr = new (Zt())(
                async (t) => {
                  const r = w.w.Init(bt);
                  r.Body().set_gids([...t]), r.Body().set_type(Oe);
                  const i = await It.GetMultipleUserActionData(e, r);
                  if (!i.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${i.GetErrorMessage()}`;
                  const n = new Map();
                  return (
                    i
                      .Body()
                      .entries()
                      .forEach((e) => {
                        try {
                          const t = JSON.parse(e.jsondata());
                          if (!("steamid" in t) || !t.steamid) {
                            t.steamid = e.steamid();
                            const r = new V.b(t.steamid);
                            t.accountid = r.GetAccountID();
                          }
                          const r = e.gid();
                          return (
                            n.has(r) ? n.get(r).push(t) : n.set(r, [t]), [t]
                          );
                        } catch (t) {
                          throw `Failed to parse GetMultipleUserActionData with details: ${e.steamid()}`;
                        }
                      }),
                    t.map((e) => n.get(e) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              ));
            return nr;
          })(e).load(t),
      });
      function ir(e, t, r) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", r],
          queryFn: () => e.loadMeetSteamAllRegistration(t, r),
          enabled: !!r,
        };
      }
      let nr;
      var sr = r(7860);
      function ar(e, t) {
        const r = (0, ce.a)(),
          i = a.useContext(lr),
          n = (0, L.I)(cr(i, r, e, t));
        return n.isLoading ? null : n.data;
      }
      function or(e, t) {
        return sr.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const lr = a.createContext({
        loadPartnerEmailAndName: async (e, t, r) =>
          await (function (e) {
            ur ||
              (ur = new (Zt())(
                async (t) => {
                  const r = w.w.Init(k);
                  r.Body().set_accountids(t.map((e) => e.accountID)),
                    r.Body().set_partnerids(t.map((e) => e.partnerID));
                  const n = await i.GetBatchPartnerEmailAndName(e, r);
                  if (!n.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${n.GetErrorMessage()}`;
                  const s = new Map();
                  return (
                    n
                      .Body()
                      .info()
                      .forEach((e) => {
                        s.set(
                          e.accountid() + "_" + e.partnerid(),
                          e.toObject(),
                        );
                      }),
                    t.map((e) => s.get(e.accountID + "_" + e.partnerID) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return ur;
          })(e).load({ accountID: t, partnerID: r }),
      });
      function cr(e, t, r, i) {
        return {
          queryKey: ["PartnerEmailAndName", r, i],
          queryFn: () => e.loadPartnerEmailAndName(t, r, i),
          enabled: !!r || !!i,
        };
      }
      let ur;
      function dr(e) {
        const { rgEventGIDs: t } = e,
          [r, i, s] = (0, G.uD)(),
          [o, l] = (0, a.useState)(null);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", { children: " | " }),
            (0, n.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i();
              },
              children: "Analyse Top Partner Coverage",
            }),
            (0, n.jsx)(he.E, {
              active: r,
              children: (0, n.jsx)(m.tH, {
                children: (0, n.jsx)(ge.o0, {
                  closeModal: s,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, n.jsx)(_r, { rgEventGIDs: t, fnSelectedEvents: l })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(fr, { rgGidMeetSteamEvents: o }),
                          (0, n.jsx)(ue.$n, {
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
      const mr = (0, Yt.FB)();
      function gr(e) {
        return (
          (e = e?.filter(
            (t, r) =>
              0 == r || !e.slice(0, r).some((e) => e.accountid == t.accountid),
          )),
          e
            ?.map(
              (e) =>
                e.name ||
                or(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function hr(e) {
        return gr(e.cell.getValue());
      }
      function pr(e, t) {
        const r = tr(t),
          [i, n, s] = (0, a.useMemo)(() => {
            if (r.filter((e) => !e.isLoading).length != r.length)
              return [null, [], []];
            const t = new Map(),
              i = new Set(e),
              n = new Map();
            r.forEach((e) =>
              e.data.forEach((e) => {
                if (
                  i.has(e.partner_id) &&
                  (n.has(e.partner_id)
                    ? n.get(e.partner_id).push(e)
                    : n.set(e.partner_id, [e]),
                  !e.name)
                ) {
                  const r = e.accountid;
                  t.set(`${r}_${e.partner_id}`, {
                    accountID: r,
                    partnerID: e.partner_id,
                  });
                }
              }),
            );
            const s = Array.from(t.values());
            return [n, s.map((e) => e.accountID), s.map((e) => e.partnerID)];
          }, [r, e]),
          o = (function (e, t) {
            const r = (0, ce.a)(),
              i = a.useContext(lr);
            return (0, Qt.E)({ queries: e.map((e, n) => cr(i, r, e, t[n])) });
          })(n, s);
        return o.filter((e) => !e.isLoading).length == o.length ? i : null;
      }
      function fr(e) {
        const { rgGidMeetSteamEvents: t } = e,
          r = (function () {
            const [e] = (0, a.useState)(() =>
              (0, b.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          i = (0, J.vh)(r),
          s = pr(r, t),
          o = (0, a.useMemo)(() => {
            if (!i || !s) return null;
            const e = [];
            return (
              r.forEach((t) => {
                const r = s.get(t);
                e.push({
                  partner_id: t,
                  partner_name: (0, J.Yd)(t)?.name || "Unknown",
                  invitations:
                    r?.filter(
                      (e) =>
                        e.invited &&
                        !Object.keys(e).some((e) =>
                          e.startsWith("registration_emailed"),
                        ),
                    ) || [],
                  registrations:
                    r?.filter((e) =>
                      Object.keys(e).some((e) =>
                        e.startsWith("registration_emailed"),
                      ),
                    ) || [],
                });
              }),
              e
            );
          }, [i, s, r]),
          l = (0, a.useMemo)(
            () => [
              mr.accessor("partner_id", { header: "Partner ID", size: 100 }),
              mr.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              mr.accessor("invitations", {
                header: "Invitations",
                cell: hr,
                size: 300,
              }),
              mr.accessor("registrations", {
                header: "Registered to Attend",
                cell: hr,
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
            const r = [];
            for (const e of l) {
              const i = t[e.accessorKey];
              r.push(
                "invitations" == e.accessorKey ||
                  "registrations" == e.accessorKey
                  ? gr(i)
                  : i.toString(),
              );
            }
            e.push(r);
          }
          Ue.g.WriteCSVToFile(e, "partneranalysis.csv");
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(ue.JU, { children: "Partner Analysis" }),
            Boolean(o)
              ? (0, n.jsxs)(m.tH, {
                  children: [
                    (0, n.jsx)(ue.$n, {
                      id: "download-csv",
                      onClick: c,
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                    (0, n.jsx)(Jt.k, {
                      columns: l,
                      data: o,
                      getRowKey: (e) => e,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: r.length,
                    }),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)(ue.$n, {
                      id: "download-csv",
                      onClick: c,
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                  ],
                })
              : (0, n.jsx)(pe.t, {
                  string: (0, ye.we)("#Loading"),
                  position: "center",
                }),
          ],
        });
      }
      function _r(e) {
        const { rgEventGIDs: t, fnSelectedEvents: r } = e,
          [i, s] = (0, a.useState)([]),
          { bShowArchived: o, setShowArchived: l } = Fe(),
          { bIsLoading: c, events: u } = (0, oe.PB)(t),
          d = (0, a.useMemo)(() => {
            const e = Math.floor(new Date().getTime() / 1e3);
            return o && u ? [...u] : u?.filter((t) => t.endTime >= e);
          }, [u, o]);
        return c
          ? (0, n.jsx)(pe.t, { string: "Loading..." })
          : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(ue.Yh, {
                  checked: o,
                  onChange: l,
                  label: "Show Past Events",
                }),
                (0, n.jsx)(ue.JU, { children: "Choose Events" }),
                d.map((e) =>
                  (0, n.jsx)(
                    br,
                    { gidClanEvent: e.GID, rgSelected: i, fnSetSelected: s },
                    e.GID,
                  ),
                ),
                (0, n.jsx)(ue.$n, {
                  disabled: 0 == i.length,
                  onClick: () => r(i),
                  children: "Continue",
                }),
              ],
            });
      }
      function br(e) {
        const { gidClanEvent: t, rgSelected: r, fnSetSelected: i } = e,
          s = (0, oe.RR)(t).GetNameWithFallback(y.Bhc);
        return (0, n.jsx)(ue.Yh, {
          label: s,
          checked: r.includes(t),
          onChange: (e) => {
            const n = r.indexOf(t),
              s = Boolean(n >= 0);
            e && !s
              ? i([...r, t])
              : !e && s && i([...r.slice(0, n), ...r.slice(n + 1)]);
          },
        });
      }
      var yr = r(39832),
        Br = r(29233),
        wr = r(30603),
        Mr = r.n(wr);
      function Sr(e) {
        const { hideModal: t, gid: r } = e,
          i = er(r),
          s = (0, $.jE)(),
          [o, l] = (0, a.useMemo)(
            () =>
              i
                ? [
                    i.length,
                    i.filter(
                      (e) =>
                        !e.invitation_emailed &&
                        !e.invite_registration_auto_create,
                    ).length,
                  ]
                : [0, 0],
            [i],
          );
        return (0, n.jsxs)(ge.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription:
            "Every account with an invitation or a registration on this event, and where each one is. Rows with no invite are people who registered themselves from the registration link; they are never sent an invitation email.",
          strTitle: "Invitation And Registration Status",
          children: [
            !i &&
              (0, n.jsx)(pe.t, {
                size: "medium",
                position: "center",
                string: (0, ye.we)("#Loading"),
              }),
            i &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      "There are ",
                      o,
                      " invitation/registration records.",
                    ],
                  }),
                  l > 0 &&
                    (0, n.jsxs)(ue.$n, {
                      onClick: async () => {
                        await (async function (e, t) {
                          let r = new FormData();
                          r.append("sessionid", (0, Y.KC)()),
                            r.append("gid", t);
                          const i = `${we.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                          try {
                            const n = await K().post(i, r, {
                              withCredentials: !0,
                            });
                            if (n?.data?.success != B.R) {
                              let e = (0, Ie.H)(n);
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
                              n?.data
                            );
                          } catch (e) {
                            let t = (0, Ie.H)(e);
                            console.error(
                              "AsyncSendInviteEmails error: " + t.strErrorMsg,
                              t,
                            );
                          }
                          return null;
                        })(s, r);
                      },
                      children: [
                        l,
                        " invitation emails are queued for this event. Send them all now?",
                      ],
                    }),
                  (0, n.jsxs)("table", {
                    children: [
                      (0, n.jsx)("thead", {
                        children: (0, n.jsxs)("tr", {
                          children: [
                            (0, n.jsx)("th", { children: "SteamID" }),
                            (0, n.jsx)("th", { children: "Name" }),
                            (0, n.jsx)("th", { children: "invited" }),
                            (0, n.jsx)("th", { children: "Invite Emailed" }),
                            (0, n.jsx)("th", { children: "Partner" }),
                            (0, n.jsx)("th", { children: "Email Override" }),
                          ],
                        }),
                      }),
                      (0, n.jsx)("tbody", {
                        children: i?.map((e) =>
                          (0, n.jsx)(vr, { reg: e }, "regentry_" + e.steamid),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function vr(e) {
        const { reg: t } = e,
          [r] = (0, J.UA)(t.partner_id);
        return (0, n.jsxs)("tr", {
          children: [
            (0, n.jsx)("td", { children: t.steamid }),
            (0, n.jsx)("td", { children: t.name }),
            (0, n.jsx)("td", { children: Boolean(t.invited) ? "YES" : "" }),
            (0, n.jsx)("td", {
              children: Boolean(t.invitation_emailed) ? "YES" : "",
            }),
            (0, n.jsxs)("td", { children: [r?.name, " (", t.partner_id, ")"] }),
            (0, n.jsx)("td", { children: t.email_override }),
          ],
        });
      }
      function jr(e) {
        const { hideModal: t, gid: r, title: i, group: s, session: o } = e,
          l = (0, ce.a)(),
          c = er(r),
          u = ne(l, r, s?.group_id),
          [d, m] = (0, a.useMemo)(() => {
            const e = u?.data?.filter((e) => e.session_id == o.id),
              t = new Map(),
              r = new Map();
            return (
              e?.forEach((e) => {
                const i = new Br.b2(e.steamid).GetAccountID();
                if ((t.set(i, e), e.jsondata)) {
                  const t = JSON.parse(e.jsondata);
                  t.pre_event_partner_questions &&
                    r.set(i, t.pre_event_partner_questions);
                }
              }),
              [t, r]
            );
          }, [o, u]),
          g = c?.filter((e) => d.has(new Br.b2(e.steamid).GetAccountID()));
        return (0, n.jsxs)(ge.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription: "Show who is registered for this session",
          strTitle: "Session Registration",
          children: [
            (0, n.jsx)("div", {
              className: Mr().ExportToCSV,
              children: (0, n.jsx)("a", {
                onClick: () =>
                  (function (e, t, r, i, n, s) {
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
                      i.forEach((t) => {
                        const r = [],
                          i = t.partner_id ? (0, J.Yd)(t.partner_id) : void 0;
                        r.push("" + t.steamid),
                          r.push(t.name),
                          r.push(t.invited ? "YES" : ""),
                          r.push(i ? `${i?.name} (${t.partner_id})` : ""),
                          r.push(t.game ? `Game: ${t.game}` : ""),
                          r.push(t.email_override),
                          r.push(
                            "" +
                              (t.guests_registered
                                ? t.guests_registered - 1
                                : 0),
                          );
                        const o = new Br.b2(t.steamid);
                        if (n.has(o.GetAccountID())) {
                          const e = xr(n.get(o.GetAccountID()), t);
                          if (e) {
                            const t = new Date(1e3 * e)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            r.push(t);
                          } else r.push("");
                        } else r.push("");
                        if (e.ask_registration_question) {
                          const t = s
                            .get(o.GetAccountID())
                            ?.find((t) => t.group_id == e.group_id);
                          t && r.push(t.question);
                        }
                        a.push(r);
                        for (let e = 0; e < t.guest_names?.length; e++) {
                          const r = [];
                          r.push("(guest)"),
                            r.push(t.guest_names[e]),
                            a.push(r);
                        }
                      });
                    const l =
                      `meetsteam_${r}_${(0, ye.TW)(t.rtime_start)}_at_${(0, yr.KC)(t.rtime_start)}.csv`.replace(
                        /[ <>:"/\\|?*\x00-\x1F]/g,
                        "_",
                      );
                    Ue.g.WriteCSVToFile(a, l);
                  })(s, o, i, g, d, m),
                children: "Export to CSV",
              }),
            }),
            (0, n.jsxs)("table", {
              className: Mr().Table,
              children: [
                (0, n.jsx)("thead", {
                  children: (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("th", { children: "SteamID" }),
                      (0, n.jsx)("th", { children: "Name" }),
                      (0, n.jsx)("th", { children: "Invited" }),
                      (0, n.jsx)("th", { children: "Partner" }),
                      (0, n.jsx)("th", { children: "Game" }),
                      (0, n.jsx)("th", { children: "Email Override" }),
                      (0, n.jsxs)("th", {
                        children: [
                          "Guest Count ",
                          (0, n.jsx)(fe.o, {
                            tooltip:
                              "Additional guests, doesn't include main registrant",
                          }),
                        ],
                      }),
                      (0, n.jsx)("th", { children: "Reg Confirm Email Sent" }),
                      s.ask_registration_question &&
                        (0, n.jsx)("th", { children: "Answer" }),
                    ],
                  }),
                }),
                (0, n.jsx)("tbody", {
                  children: g?.flatMap((e) => {
                    const t = new Br.b2(e.steamid).GetAccountID(),
                      r = [
                        (0, n.jsx)(
                          zr,
                          {
                            group: s,
                            regInfo: d.get(t),
                            inviteInfo: e,
                            preRegQuestions: m.get(t),
                          },
                          "regrow" + e.steamid,
                        ),
                      ];
                    for (let t = 0; t < e.guest_names?.length; t++)
                      r.push(
                        (0, n.jsx)(
                          Rr,
                          { guestName: e.guest_names[t] },
                          "regguestrow" + e.steamid + "_" + t,
                        ),
                      );
                    return r;
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function xr(e, t) {
        const r = `registration_emailed_${e.group_id}_${e.session_id}`;
        let i = null;
        return r in t && (i = t[r]), i;
      }
      function zr(e) {
        const { inviteInfo: t, regInfo: r, group: i, preRegQuestions: s } = e,
          [a] = (0, J.UA)(t.partner_id),
          o = xr(r, t);
        return (0, n.jsxs)("tr", {
          children: [
            (0, n.jsx)("td", { children: t.steamid }),
            (0, n.jsx)("td", { children: t.name }),
            (0, n.jsx)("td", { children: Boolean(t.invited) ? "YES" : "" }),
            (0, n.jsx)("td", { children: a?.name ?? `(${t.partner_id})` }),
            (0, n.jsx)("td", { children: t.game ? `Game: ${t.game}` : "" }),
            (0, n.jsx)("td", { children: t.email_override }),
            (0, n.jsx)("td", {
              children: r.guests_registered ? r.guests_registered - 1 : 0,
            }),
            (0, n.jsx)("td", { children: o ? (0, ye.TW)(o) : "" }),
            i.ask_registration_question &&
              (0, n.jsx)("td", {
                children:
                  s?.find((e) => e.group_id == i.group_id)?.question || "",
              }),
          ],
        });
      }
      function Rr(e) {
        const { guestName: t } = e;
        return (0, n.jsxs)("tr", {
          children: [
            (0, n.jsx)("td", { children: "(guest)" }),
            (0, n.jsx)("td", { children: t }),
          ],
        });
      }
      var Fr = r(2516),
        Tr = r(98019);
      function Cr(e) {
        return (0, L.I)({
          queryKey: [],
          queryFn: async () =>
            await (async function (e) {
              const t = { sessionid: (0, b.KC)(), gids: e },
                r = `${Dt.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
                i = await fetch(r, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(t),
                });
              if (!i.ok)
                throw new Error(
                  `Failed to read registrations for gids ${e.join(",")}`,
                );
              const n = await i.json();
              if (n.success != B.R)
                throw new Error(
                  `Failed to read registrations for gids ${e.join(",")}: ${n.msg}`,
                );
              return n.lists ?? [];
            })(e),
          enabled: e && e.length > 0,
        });
      }
      function Ir(e) {
        const { rgEventGIDs: t } = e,
          [r, i, s] = (0, G.uD)(),
          [o, l] = (0, a.useState)(null);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", { children: " | " }),
            (0, n.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i();
              },
              children: "Show Registration Across Events",
            }),
            (0, n.jsx)(he.E, {
              active: r,
              children: (0, n.jsx)(m.tH, {
                children: (0, n.jsx)(ge.o0, {
                  closeModal: s,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, n.jsx)(_r, { rgEventGIDs: t, fnSelectedEvents: l })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(Or, { rgGidMeetSteamEvents: o }),
                          (0, n.jsx)(ue.$n, {
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
      const Ur = (0, Yt.FB)();
      function Or(e) {
        const { rgGidMeetSteamEvents: t } = e,
          {
            rgAllRegistrations: r,
            rgPartnerIDs: i,
            rgValveAccounts: s,
            rgMapAccountToSessionTimes: o,
          } = (function (e) {
            const t = tr(e),
              r = (0, Tr.qh)(),
              { bIsLoading: i, events: n } = (0, oe.PB)(e),
              { data: s } = Cr(e),
              [o, l, c] = (0, a.useMemo)(() => {
                if (
                  i ||
                  !s ||
                  0 == s.length ||
                  t.filter((e) => !e.isLoading).length != t.length
                )
                  return [null, null, null];
                const e = new Array(),
                  r = new Set(),
                  a = new Map();
                t.forEach((t) => {
                  t.data.forEach((t) => {
                    t.guests_registered > 0 &&
                      (e.push(t), t.partner_id && r.add(t.partner_id));
                  });
                });
                const o = new Map();
                return (
                  n.forEach((e) => {
                    e.jsondata.meet_steam_groups?.forEach((t) => {
                      t.sessions?.forEach((r) => {
                        o.set(
                          `${e.GID}_${t.group_id}_${r.id}`,
                          `${t.localized_session_title[y.Bhc]}@${(0, yr.TW)(r.rtime_start)} ${(0, yr.KC)(r.rtime_start)}`,
                        );
                      });
                    });
                  }),
                  s.forEach((e) => {
                    e.rgRegistrations.forEach((t) => {
                      const r = new V.b(t.steamid).GetAccountID(),
                        i =
                          o.get(`${e.gid}_${t.group_id}_${t.session_id}`) ||
                          `${t.group_id}:${t.session_id}`;
                      a.has(r) ? a.set(r, a.get(r) + `,${i}`) : a.set(r, i);
                    });
                  }),
                  [Array.from(r), e, a]
                );
              }, [t, i, s, n]);
            return (0, Q.fI)(o)
              ? {
                  rgAllRegistrations: l,
                  rgPartnerIDs: o,
                  rgValveAccounts: r,
                  rgMapAccountToSessionTimes: c,
                }
              : {
                  rgAllRegistrations: void 0,
                  rgPartnerIDs: void 0,
                  rgValveAccounts: void 0,
                  rgMapAccountToSessionTimes: void 0,
                };
          })(t),
          l = (0, J.vh)(i),
          c = (0, a.useMemo)(() => {
            if (!(l && r && s && o)) return null;
            const e = new Map();
            s.forEach((t) => e.set(t.id, t));
            const t = [];
            return (
              r.forEach((r) => {
                const i = (0, J.Yd)(r.partner_id),
                  n = (0, Q.Gl)(r.partner_id);
                t.push({
                  partner_id: r.partner_id ? "" + r.partner_id : "",
                  partner_name: i?.name || "Unknown",
                  name: r.name,
                  game: r.game || "",
                  accountid: r.accountid,
                  email: r.email_override,
                  guest_registrated: r.guests_registered - 1,
                  guest_names:
                    r.guest_names?.length > 0 ? r.guest_names.join(",") : "",
                  business_contact:
                    n && n.length > 0
                      ? n
                          .filter((e) => e.is_business_contact)
                          .map((t) => {
                            const r = new V.b(t.steamid),
                              i = e.get(r.GetAccountID());
                            return i?.displayName || t.steamid;
                          })
                          .join(",")
                      : "",
                  sessions: o.get(r.accountid) || "missing data",
                });
              }),
              t
            );
          }, [l, r, s, o]),
          u = Er();
        return l && i && c
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(ue.JU, { children: "Registations" }),
                Boolean(c)
                  ? (0, n.jsxs)(m.tH, {
                      children: [
                        (0, n.jsx)(Wr, { rgData: c }),
                        (0, n.jsx)(Jt.k, {
                          columns: u,
                          data: c,
                          getRowKey: (e) => e,
                          stickyHeader: !0,
                          nItemHeight: 28,
                          overscan: i.length,
                        }),
                        (0, n.jsx)("br", {}),
                        (0, n.jsx)(Wr, { rgData: c }),
                      ],
                    })
                  : (0, n.jsx)(pe.t, {
                      string: (0, ye.we)("#Loading"),
                      position: "center",
                    }),
              ],
            })
          : (0, n.jsx)(pe.t, { string: (0, ye.we)("#Loading") });
      }
      function Er() {
        return (0, a.useMemo)(
          () => [
            Ur.accessor("name", { header: "Name", size: 200 }),
            Ur.accessor("accountid", { header: "Account ID", size: 150 }),
            Ur.accessor("email", { header: "Email", size: 150 }),
            Ur.accessor("guest_registrated", {
              header: "Guest Count",
              size: 100,
            }),
            Ur.accessor("guest_names", { header: "Guest's Names", size: 100 }),
            Ur.accessor("partner_id", { header: "Partner ID", size: 100 }),
            Ur.accessor("partner_name", { header: "Partner Name", size: 300 }),
            Ur.accessor("game", { header: "Game Name", size: 150 }),
            Ur.accessor("business_contact", {
              header: "Business Contact",
              size: 150,
            }),
            Ur.accessor("sessions", { header: "Sessions", size: 150 }),
          ],
          [],
        );
      }
      function Wr(e) {
        const { rgData: t } = e,
          r = Er();
        return (0, n.jsx)(ue.$n, {
          id: "download-csv",
          onClick: () =>
            (0, Fr.K)(
              "registrationdump.csv",
              t,
              r.map((e) => ({
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
      const qr = a.createContext(void 0);
      function Ar(e) {
        const { children: t } = e,
          [r, i] = xe("search", ""),
          [s, o] = (0, a.useState)(() => r || ""),
          l = (0, a.useCallback)(
            (e) => {
              o(e), i(e || void 0, !0);
            },
            [i],
          ),
          c = (0, a.useMemo)(() => ({ strSearch: s, setSearch: l }), [s, l]);
        return (0, n.jsx)(qr.Provider, { value: c, children: t });
      }
      const Dr = () => {
        const e = (0, a.useContext)(qr);
        if (!e)
          throw new Error(
            "useMeetSteamSearch must be used within MeetSteamSearchProvider",
          );
        return e;
      };
      function kr(e) {
        const { text: t } = e,
          { strSearch: r } = Dr(),
          i = (0, a.useMemo)(
            () =>
              (function (e, t) {
                const r = t?.trim().toLowerCase();
                if (!e || !r) return [{ strText: e || "", bMatch: !1 }];
                const i = new Array(),
                  n = e.toLowerCase();
                let s = 0;
                for (let t = n.indexOf(r); t >= 0; t = n.indexOf(r, s))
                  t > s && i.push({ strText: e.slice(s, t), bMatch: !1 }),
                    i.push({ strText: e.slice(t, t + r.length), bMatch: !0 }),
                    (s = t + r.length);
                return (
                  s < e.length && i.push({ strText: e.slice(s), bMatch: !1 }), i
                );
              })(t, r),
            [t, r],
          );
        return (0, n.jsx)(n.Fragment, {
          children: i.map((e, t) =>
            e.bMatch
              ? (0, n.jsx)(
                  "span",
                  { className: Se().SearchMatch, children: e.strText },
                  t,
                )
              : (0, n.jsx)(a.Fragment, { children: e.strText }, t),
          ),
        });
      }
      function Nr(e) {
        const t = V.b.InitFromClanID((0, me.H)()),
          r = (function () {
            const [e] = (0, a.useState)(() =>
              (0, b.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          { bShowArchived: i, setShowArchived: s } = Fe(),
          { strSearch: o, setSearch: l } = Dr(),
          { bIsLoading: c, events: u } = (0, oe.PB)(r),
          {
            rgEventsByMonth: d,
            cEvents: m,
            cMatchingEvents: g,
          } = a.useMemo(() => {
            if (!u)
              return { rgEventsByMonth: null, cEvents: 0, cMatchingEvents: 0 };
            const e =
                i && u
                  ? [...u]
                  : u?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = e.filter((e) =>
                (function (e, t) {
                  if (!t?.trim()) return !0;
                  const r = [
                    e.GID,
                    e.GetNameWithFallback(y.Bhc),
                    e.GetDescriptionWithFallback(y.Bhc),
                  ];
                  return (
                    e.jsondata.meet_steam_groups?.forEach((e) => {
                      r.push(
                        ye.NT.GetWithFallback(e.localized_session_title, y.Bhc),
                      ),
                        r.push(
                          ye.NT.GetWithFallback(
                            e.localized_session_description,
                            y.Bhc,
                          ),
                        ),
                        r.push(
                          ye.NT.GetWithFallback(
                            e.localized_intended_audience,
                            y.Bhc,
                          ),
                        ),
                        r.push(
                          ye.NT.GetWithFallback(
                            e.localized_sesssion_faq,
                            y.Bhc,
                          ),
                        );
                    }),
                    r.some((e) =>
                      (function (e, t) {
                        const r = t?.trim().toLowerCase();
                        return (
                          !r || (Boolean(e) && e.toLowerCase().includes(r))
                        );
                      })(e, t),
                    )
                  );
                })(e, o),
              ),
              r = Array.from(
                (0, be.bv)(t, (e) => (0, be.J2)(new Date(1e3 * e.startTime))),
              );
            return (
              r?.sort((e) => -e[0]),
              {
                rgEventsByMonth: r,
                cEvents: e.length,
                cMatchingEvents: t.length,
              }
            );
          }, [u, i, o]);
        return c
          ? (0, n.jsx)(pe.t, {})
          : d
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("a", {
                        href: `${we.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                        children: "Open Meet Steam Event Dashboard",
                      }),
                      (0, n.jsx)(dr, { rgEventGIDs: r }),
                      (0, n.jsx)(Ir, { rgEventGIDs: r }),
                    ],
                  }),
                  (0, n.jsx)(ue.Yh, {
                    checked: i,
                    onChange: s,
                    label: "Show Past Events",
                  }),
                  (0, n.jsxs)("div", {
                    className: Se().SearchLine,
                    children: [
                      (0, n.jsx)(ue.pd, {
                        type: "text",
                        placeholder: "Search events",
                        tooltip:
                          "In-memory search of the event id, title and description, and of the session group titles, descriptions and intended audience",
                        value: o,
                        onChange: (e) => l(e?.currentTarget?.value || ""),
                      }),
                      Boolean(o.trim()) &&
                        (0, n.jsxs)("div", {
                          className: Se().SearchSummary,
                          children: [
                            "Showing ",
                            g,
                            " of ",
                            m,
                            " events  ",
                            (0, n.jsx)("a", {
                              href: "#",
                              onClick: (e) => {
                                e.preventDefault(), l("");
                              },
                              children: "Clear",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, n.jsx)("hr", {}),
                  d.map((e) =>
                    (0, n.jsx)(
                      Pr,
                      { month: new Date(1e3 * e[0]), events: e[1] },
                      e[0],
                    ),
                  ),
                ],
              })
            : null;
      }
      function Pr(e) {
        const { month: t, events: r } = e,
          i = a.useMemo(() => [...r].sort((e) => -e.startTime), [r]),
          s = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("div", { className: Se().MonthTitle, children: s }),
            (0, n.jsx)("div", {
              className: Se().MonthEvents,
              children: i.map((e) => (0, n.jsx)(Gr, { oEvent: e }, e.GID)),
            }),
          ],
        });
      }
      function Gr(e) {
        const { oEvent: t } = e,
          r = t.GID,
          i = V.b.InitFromClanID((0, me.H)()),
          s = (0, le.my)((0, me.H)(), r),
          o = s.isSuccess ? s.data : null,
          l = t.GetNameWithFallback(y.Bhc),
          c = (0, a.useMemo)(() => {
            const e = new Array();
            return (
              t.jsondata.meet_steam_groups?.forEach((t) => {
                t.sessions.forEach((r, i) => {
                  e.push({ group: t, session: r, firstSession: 0 == i });
                });
              }),
              e
            );
          }, [t.jsondata.meet_steam_groups]);
        return (0, n.jsxs)("div", {
          className: Se().EventRow,
          children: [
            (0, n.jsxs)("div", {
              className: Se().EventMainDetails,
              children: [
                (0, n.jsxs)("div", {
                  className: Se().TitleLine,
                  children: [
                    (0, n.jsx)("div", {
                      className: Se().Title,
                      children: (0, n.jsx)(kr, { text: l }),
                    }),
                    (0, n.jsx)("div", {
                      className: Se().StartDate,
                      children: (0, ye.TW)(t?.startTime),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: Se().ActionLine,
                  children: [
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)("a", {
                        href: `${we.TS.COMMUNITY_BASE_URL}gid/${i.ConvertTo64BitString()}/partnerevents/edit/${r}`,
                        children: "Edit",
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        " | ",
                        (0, n.jsx)("a", {
                          href: `${we.TS.STORE_BASE_URL}meetsteam/${r}`,
                          children: "View",
                        }),
                      ],
                    }),
                    Boolean(
                      t.BIsUnlistedEvent() &&
                        t.jsondata.meet_steam_groups?.length > 0,
                    ) &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(Vr, { gid: r }),
                          " | ",
                          (0, n.jsx)("a", {
                            href: `${we.TS.STORE_BASE_URL}meetsteam/attendance?gid=${r}&accountid=${we.iA.accountid}`,
                            children: "QR Page",
                          }),
                          " | ",
                          (0, n.jsx)("a", {
                            href: `${we.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${r}`,
                            children: "Attendance List",
                          }),
                          (0, n.jsx)(Lr, { gid: r }),
                          (0, n.jsx)(Hr, { gid: r }),
                          (0, n.jsx)($r, { gid: r }),
                          (0, n.jsx)(Kr, { gid: r }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              children: (0, n.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, n.jsx)("thead", {
                    children: (0, n.jsxs)("tr", {
                      children: [
                        (0, n.jsx)("th", { children: "Group" }),
                        (0, n.jsx)("th", { children: "Session Start" }),
                        (0, n.jsx)("th", { children: "Session Duration" }),
                        (0, n.jsx)("th", { children: "Seats" }),
                        (0, n.jsx)("th", {
                          style: { width: "50px" },
                          children: "Registered",
                        }),
                        (0, n.jsx)("th", {
                          style: { width: "50px" },
                          children: "Guests",
                        }),
                        (0, n.jsx)("th", {
                          style: { width: "100px" },
                          children: "Details",
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)("tbody", {
                    children: [
                      (0, n.jsxs)("tr", {
                        children: [
                          Boolean(c.length > 0)
                            ? (0, n.jsx)(
                                Jr,
                                {
                                  gid: r,
                                  group: c[0].group,
                                  session: c[0].session,
                                  rgAvailability: o,
                                },
                                c[0].session.id,
                              )
                            : (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)("td", { children: "None" }),
                                  (0, n.jsx)("td", {}),
                                  (0, n.jsx)("td", {}),
                                  (0, n.jsx)("td", {}),
                                  (0, n.jsx)("td", {}),
                                  (0, n.jsx)("td", {}),
                                ],
                              }),
                          (0, n.jsx)("td", {
                            children:
                              !Boolean(
                                t?.BIsUnlistedEvent() &&
                                  t.jsondata.meet_steam_groups?.length > 0,
                              ) &&
                              (0, n.jsx)("div", {
                                children:
                                  "Invite Disabled. Event need to publish into Unlisted State",
                              }),
                          }),
                        ],
                      }),
                      c
                        .filter((e, t) => t > 0)
                        .map((e) =>
                          (0, n.jsx)(
                            "tr",
                            {
                              children: (0, n.jsx)(Jr, {
                                group: e.group,
                                gid: r,
                                session: e.session,
                                rgAvailability: o,
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
      function Lr(e) {
        const { gid: t } = e,
          r = je();
        return Array.from(r.keys()).includes(t)
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                " | ",
                (0, n.jsx)("a", {
                  href: `${we.TS.PARTNER_BASE_URL}meetsteam/survey/${t}`,
                  children: "Survey",
                }),
              ],
            })
          : null;
      }
      function $r(e) {
        const { gid: t } = e,
          [r, i, s] = (0, G.uD)();
        return (0, n.jsxs)("div", {
          children: [
            " | ",
            (0, n.jsxs)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i();
              },
              children: [
                "Invite via CSV",
                (0, n.jsx)(fe.o, {
                  tooltip:
                    "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                }),
              ],
            }),
            (0, n.jsx)(m.tH, {
              children: (0, n.jsx)(he.E, {
                active: r,
                children: (0, n.jsx)($t, { hideModal: s, gid: t }),
              }),
            }),
          ],
        });
      }
      function Hr(e) {
        const { gid: t } = e,
          [r, i, s] = (0, G.uD)();
        return (0, n.jsxs)("div", {
          children: [
            " | ",
            (0, n.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i();
              },
              children: "Invite",
            }),
            (0, n.jsx)(m.tH, {
              children: (0, n.jsx)(he.E, {
                active: r,
                children: (0, n.jsx)(Pt, { hideModal: s, gid: t }),
              }),
            }),
          ],
        });
      }
      function Kr(e) {
        const { gid: t } = e,
          [r, i, s] = (0, G.uD)();
        return (0, n.jsxs)("div", {
          children: [
            " | ",
            (0, n.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i();
              },
              children: "Show Invites",
            }),
            (0, n.jsx)(m.tH, {
              children: (0, n.jsx)(he.E, {
                active: r,
                children: (0, n.jsx)(Sr, { hideModal: s, gid: t }),
              }),
            }),
          ],
        });
      }
      function Vr(e) {
        const { gid: t } = e,
          r = (0, ce.a)(),
          [s, o] = (0, a.useState)(!1),
          [l, c] = (0, a.useState)(null);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("a", {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation(), o(!0);
                const n = await (async function (e, t) {
                  const r = w.w.Init(E),
                    n = V.b.InitFromClanID((0, me.H)());
                  r.Body().set_clan_event_gid(t),
                    r.Body().set_steamid(n.ConvertTo64BitString());
                  const s = await i.TestFireEmails(e, r);
                  return console.log("test fire", s), s.GetEResult();
                })(r, t);
                c(n);
              },
              children: "Email Self",
            }),
            (0, n.jsx)(he.E, {
              active: s,
              children: (0, n.jsxs)(ge.o0, {
                bAlertDialog: !0,
                strTitle: "Test Emails",
                closeModal: () => {
                  o(!1), c(null);
                },
                onOK: () => {},
                children: [
                  (0, n.jsx)("div", {
                    children:
                      "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
                  }),
                  Boolean(null == l) &&
                    (0, n.jsx)(pe.t, { string: (0, ye.we)("#Loading") }),
                  Boolean(l == B.R) &&
                    (0, n.jsx)("div", { children: "Test Emails Sent" }),
                  Boolean(l && l != B.R) &&
                    (0, n.jsx)("div", {
                      children: "Email Failed to Send. Check console",
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function Yr(e, t) {
        const r = ae().unix(e),
          i = ae().unix(e).tz(t),
          n = i.utcOffset() - r.utcOffset(),
          s = new Date(1e3 * (e + 60 * n)),
          a = new Date();
        return `${s.getFullYear() == a.getFullYear() ? ((0, Be.$w))(s, !1, !1) : ((0, Be._9))(s, !1, !1)} ${(0, Be.KC)(e + 60 * n)} ${i.format("z")}`;
      }
      function Jr(e) {
        const {
            gid: t,
            group: r,
            rgAvailability: i,
            session: s,
            firstSession: a = !0,
          } = e,
          o = ye.NT.GetWithFallback(r?.localized_session_title, y.Bhc),
          l = ye.NT.GetWithFallback(r?.localized_session_description, y.Bhc),
          c = ye.NT.GetWithFallback(r?.localized_intended_audience, y.Bhc),
          u = i?.find((e) => e.group_id == r.group_id && e.session_id == s.id),
          [d, g, h] = (0, G.uD)(),
          p = ne((0, ce.a)(), t, r?.group_id);
        let f = Math.min((u?.guest_count / s.max_capacity) * 100, 100),
          _ = u?.guest_count > 0 ? `${f}%` : "0%",
          b = u?.guest_count >= s.max_capacity;
        const B = Intl.DateTimeFormat().resolvedOptions().timeZone,
          w =
            "in_person" === s.location_type
              ? (s.in_person_time_zone ?? de.hh)
              : B;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            a && Boolean(r)
              ? (0, n.jsxs)("td", {
                  children: [
                    (0, n.jsx)(kr, { text: o }),
                    (0, n.jsx)(fe.o, { tooltip: l }),
                    Boolean(c) &&
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)(kr, { text: c }),
                      }),
                  ],
                })
              : (0, n.jsx)("td", {}),
            (0, n.jsx)("td", {
              children: (0, n.jsx)("span", { children: Yr(s.rtime_start, w) }),
            }),
            (0, n.jsx)("td", {
              children: (0, Be.IH)(s.rtime_end - s.rtime_start),
            }),
            (0, n.jsxs)("td", {
              children: [
                u?.guest_count || 0,
                " / ",
                s.max_capacity,
                (0, n.jsx)("br", {}),
                (0, n.jsx)("div", {
                  className: Se().CapacityBarMax,
                  children: (0, n.jsx)("div", {
                    className: (0, _e.A)(
                      Se().CapacityBarCurrent,
                      b ? Se().Full : "",
                    ),
                    style: { width: _ },
                  }),
                }),
              ],
            }),
            (0, n.jsx)("td", {
              children:
                p.isSuccess &&
                (0, n.jsx)(n.Fragment, {
                  children: p.data?.filter((e) => e.session_id == s.id).length,
                }),
            }),
            (0, n.jsx)("td", {
              children:
                p.isSuccess &&
                (0, n.jsx)(n.Fragment, {
                  children: p.data
                    ?.filter((e) => e.session_id == s.id)
                    .reduce((e, t) => e + t.guests_registered - 1, 0),
                }),
            }),
            (0, n.jsxs)("td", {
              children: [
                (0, n.jsx)(ue.$n, { onClick: g, children: "Details" }),
                (0, n.jsx)(m.tH, {
                  children: (0, n.jsx)(he.E, {
                    active: d,
                    children: (0, n.jsx)(jr, {
                      gid: t,
                      title: o,
                      group: r,
                      session: s,
                      hideModal: h,
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var Qr = r(14987),
        Xr = r(39777),
        Zr = r(44419),
        ei = r(16021),
        ti = r(26186),
        ri = r(48479);
      function ii(e) {
        const { rgEvents: t } = ee(),
          r = (function () {
            const [e] = (0, a.useState)(() =>
              (0, b.Tc)("interest_results", "application_config"),
            );
            return (0, a.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [i, s] = (0, a.useState)(""),
          o = Y.TS.PARTNER_BASE_URL + "meetsteam",
          l = (0, a.useMemo)(() => {
            const e = new Map();
            return (
              r.forEach((t) => {
                t.results?.attending?.forEach((t) => {
                  e.has(t) ? e.set(t, e.get(t) + 1) : e.set(t, 1);
                });
              }),
              e
            );
          }, [r]);
        return (0, n.jsxs)("div", {
          className: Se().EventList,
          children: [
            (0, n.jsx)(ue.pd, {
              type: "text",
              value: i,
              onChange: (e) => s(e.currentTarget.value.trim()),
              label: "Filter",
            }),
            (0, n.jsxs)("div", {
              children: ["Total Survey Responses: ", (0, At.D)(r?.length || 0)],
            }),
            (0, n.jsxs)("div", {
              children: [
                "Link to partner-facing survey: ",
                (0, n.jsx)("a", { href: o, children: o }),
              ],
            }),
            t
              .filter(
                (e) => 0 == i.length || e.name.includes(i) || e.id.includes(i),
              )
              .map((e) =>
                (0, n.jsx)(
                  ni,
                  {
                    conf: e,
                    nInterestCount: l.get(e.id) ?? 0,
                    rgSurveyInterest: r,
                  },
                  e.id,
                ),
              ),
            (0, n.jsx)(mi, { rgSurveyInterest: r }),
          ],
        });
      }
      function ni(e) {
        const { conf: t, nInterestCount: r, rgSurveyInterest: i } = e;
        return (0, n.jsx)(ri.qx, {
          title: `${t.name} in ${t.place} around ${t.time}: Interest: ${(0, At.D)(r)}`,
          bStartMinimized: !0,
          children: (0, n.jsx)(ai, { conf: t, rgSurveyInterest: i }),
        });
      }
      function si(e) {
        if ("number" == typeof e) return e;
        const t = e.slice(-1).toUpperCase(),
          r = parseFloat(e.slice(0, -1));
        switch (t) {
          case "K":
            return 1e3 * r;
          case "M":
            return 1e6 * r;
          case "B":
            return 1e9 * r;
          default:
            return parseFloat(e);
        }
      }
      function ai(e) {
        const { conf: t, rgSurveyInterest: r } = e,
          i = (0, a.useMemo)(
            () => r.filter((e) => e.results?.attending?.includes(t.id)),
            [t, r],
          ),
          s = (0, Tr.qh)(),
          { bComplete: o, nCount: l } = (function (e) {
            const [t, r] = (0, a.useState)(!1),
              [i, n] = (0, a.useState)(0),
              s = (0, $.jE)();
            return (
              (0, a.useEffect)(() => {
                (async () => {
                  let t = 0;
                  for (const r of e) {
                    const e = r.results.partner_id;
                    new V.b(r.steamid).GetAccountID(),
                      await Promise.all([
                        (0, J.qG)(e),
                        s.prefetchQuery({
                          queryKey: te(e),
                          queryFn: async () => re(e),
                        }),
                        (0, Q.PQ)(s, e),
                      ]),
                      ++t,
                      n(t);
                  }
                  r(!0);
                })();
              }, [s, e]),
              { bComplete: t, nCount: i }
            );
          })(i);
        return o
          ? s?.length
            ? i && 0 != i.length
              ? (0, n.jsx)(oi, { conf: t, rgSurveyInterest: i })
              : (0, n.jsx)("div", { children: "No users with interest" })
            : (0, n.jsx)(pe.t, {
                position: "center",
                string: "Loading Valve Account info (this shouldn't take long)",
              })
          : (0, n.jsx)(pe.t, {
              position: "center",
              string: `Loading ${l} of ${i.length}`,
            });
      }
      function oi(e) {
        const { conf: t, rgSurveyInterest: r } = e,
          i = (0, $.jE)();
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(ue.$n, {
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
                  r.forEach((t) => {
                    const r = [],
                      n = new Br.b2(t.steamid);
                    r.push("" + n.GetAccountID());
                    const s = (0, Zr.z0)(n.GetAccountID()),
                      a = t.results.partner_id;
                    r.push("" + a);
                    const o = (0, Q.N6)(a).map(
                      (e) => (0, Tr.YA)(i, e)?.displayName || "" + e,
                    );
                    r.push(o.join("|"));
                    const l = t.results.email_override || "";
                    r.push("" + l),
                      r.push(s?.m_strPlayerName ? s.m_strPlayerName : "");
                    const c = or(n.GetAccountID(), a);
                    if (
                      (r.push(c ? c.realname : ""),
                      r.push(t.results.have_you_met_steam ? "yes" : "no"),
                      t.results.submit_time)
                    ) {
                      const e = t.results.submit_time,
                        i = new Date(1e3 * e)
                          .toISOString()
                          .replace("T", " ")
                          .split(".")[0];
                      r.push(i);
                    } else r.push("");
                    r.push("" + t.results.attending?.length),
                      r.push(t.results.country_code),
                      r.push(
                        t.results.preferred_language
                          ? (0, y.LgB)(t.results.preferred_language)
                          : "",
                      );
                    const u = (0, J.Yd)(a);
                    r.push(u ? u.name : "");
                    const d = ie(i, a);
                    d
                      ? (r.push("" + si(d.strGrossUSD)),
                        r.push("" + d.nBestAppID),
                        r.push(ei.A.Get().GetApp(d.nBestAppID)?.GetName()),
                        r.push("" + d.nBestAppLongTermSalesRank))
                      : (r.push(""), r.push(""), r.push(""), r.push("")),
                      e.push(r);
                  });
                const n = t.name.replace(" ", "_") + "_conference_interest.csv";
                Ue.g.WriteCSVToFile(e, n);
              },
              children: "Export to CSV",
            }),
            (0, n.jsxs)("table", {
              className: "landingTable",
              children: [
                (0, n.jsx)("thead", {
                  children: (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("th", { children: "Name and Email" }),
                      (0, n.jsx)("th", { children: "Have you met steam?" }),
                      (0, n.jsx)("th", { children: "Partner" }),
                      (0, n.jsx)("th", { children: "Valve Contacts" }),
                      (0, n.jsx)("th", { children: "Partner Revenue" }),
                      (0, n.jsx)("th", { children: "Biggest Game" }),
                      (0, n.jsx)("th", { children: "Long Term Sales Rank" }),
                      (0, n.jsx)("th", { children: "Attending count?" }),
                      (0, n.jsx)("th", { children: "Alt Language" }),
                      (0, n.jsx)("th", { children: "Country" }),
                      (0, n.jsx)("th", { children: "Submit Survey Time" }),
                    ],
                  }),
                }),
                (0, n.jsx)("tbody", {
                  children: r.map((e) =>
                    (0, n.jsx)(
                      li,
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
      function li(e) {
        const { partnerID: t, registration: r } = e;
        return (0, n.jsxs)("tr", {
          children: [
            (0, n.jsx)("td", { children: (0, n.jsx)(ci, { ...e }) }),
            (0, n.jsx)("td", { children: r.have_you_met_steam ? "" : "NO" }),
            (0, n.jsx)(ui, { nPartnerID: t }),
            (0, n.jsx)("td", { children: r.attending.length }),
            (0, n.jsx)("td", {
              children:
                r.english_not_good && r.preferred_language
                  ? (0, y.LgB)(r.preferred_language)
                  : "",
            }),
            (0, n.jsx)("td", { children: r.country_code }),
            (0, n.jsx)("td", { children: (0, ye.TW)(r.submit_time) }),
          ],
        });
      }
      function ci(e) {
        const { strsteamid: t, partnerID: r, registration: i } = e,
          s = (0, Zr.hW)(t),
          a = ar(new Br.b2(t).GetAccountID(), r),
          o = a?.realname || s.data?.m_strPlayerName;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", { children: o }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("span", { children: i.email_override || a?.email }),
          ],
        });
      }
      function ui(e) {
        const { nPartnerID: t } = e,
          [r] = (0, J.UA)(t),
          i = (function (e) {
            const t = (0, L.I)({
              queryKey: te(e),
              queryFn: async () => re(e),
              enabled: Boolean(e),
            });
            return t.isLoading ? null : t.data;
          })(t),
          s = (0, Q.Z4)(t),
          a = (0, $.jE)();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("td", { children: r ? r?.name + ` (${t})` : t }),
            (0, n.jsx)("td", {
              children: s
                ?.map((e) => (0, Tr.YA)(a, e)?.displayName || "" + e)
                .join(","),
            }),
            (0, n.jsxs)("td", { children: ["$", i?.strGrossUSD] }),
            (0, n.jsx)("td", {
              children:
                i?.nBestAppID > 0
                  ? (0, n.jsx)(di, { appid: i?.nBestAppID })
                  : "N/A",
            }),
            (0, n.jsx)("td", { children: i?.nBestAppLongTermSalesRank }),
          ],
        });
      }
      function di(e) {
        const { appid: t } = e,
          r = (0, Qr.$5)(t),
          { data: i } = (0, Xr.J$)(r);
        return (0, n.jsx)(ti.Q, {
          id: r,
          children: (0, n.jsx)("span", { children: i?.name || t }),
        });
      }
      function mi(e) {
        const { rgSurveyInterest: t } = e,
          r = (0, $.jE)(),
          i =
            ((0, Tr.qh)(),
            (0, a.useMemo)(
              () =>
                t.filter((e) =>
                  Boolean(e.results?.suggestion?.trim().length > 0),
                ),
              [t],
            ));
        return (0, n.jsxs)(ri.qx, {
          title: `Alternative Suggestions (${i.length})`,
          bStartMinimized: !0,
          children: [
            (0, n.jsx)(ue.$n, {
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
                  i.forEach((t) => {
                    const i = [],
                      n = new Br.b2(t.steamid);
                    i.push("" + n.GetAccountID());
                    const s = (0, Zr.z0)(n.GetAccountID()),
                      a = t.results.partner_id;
                    i.push("" + a);
                    const o = t.results.email_override || "";
                    i.push("" + o),
                      i.push(s?.m_strPlayerName ? s.m_strPlayerName : "");
                    const l = or(n.GetAccountID(), a);
                    i.push(l ? l.realname : ""),
                      i.push("" + t.results.attending?.length),
                      i.push(t.results.country_code),
                      i.push(
                        t.results.preferred_language
                          ? (0, y.LgB)(t.results.preferred_language)
                          : "",
                      );
                    const c = (0, J.Yd)(a);
                    i.push(c ? c.name : "");
                    const u = ie(r, a);
                    u
                      ? (i.push("" + si(u.strGrossUSD)),
                        i.push("" + u.nBestAppID),
                        i.push("" + u.nBestAppLongTermSalesRank))
                      : (i.push(""), i.push(""), i.push("")),
                      i.push(t.results.suggestion),
                      e.push(i);
                  });
                Ue.g.WriteCSVToFile(e, "suggestsion.csv");
              },
              children: "Export to CSV (wait until the table populates fully)",
            }),
            (0, n.jsxs)("table", {
              className: "landingTable",
              children: [
                (0, n.jsx)("thead", {
                  children: (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("th", { children: "Name and Email" }),
                      (0, n.jsx)("th", { children: "Partner" }),
                      (0, n.jsx)("th", { children: "Valve Contacts" }),
                      (0, n.jsx)("th", { children: "Partner Revenue" }),
                      (0, n.jsx)("th", { children: "Biggest Game" }),
                      (0, n.jsx)("th", { children: "Long Term Sales Rank" }),
                      (0, n.jsx)("th", { children: "Suggestions" }),
                    ],
                  }),
                }),
                (0, n.jsx)("tbody", {
                  children: i.map((e) =>
                    (0, n.jsx)(gi, { survey: e }, "suggested" + e.steamid),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function gi(e) {
        const { survey: t } = e;
        new Br.b2(t.steamid);
        return (0, n.jsxs)("tr", {
          children: [
            (0, n.jsx)("td", {
              children: (0, n.jsx)(ci, {
                strsteamid: t.steamid,
                partnerID: t.results.partner_id,
                registration: t.results,
              }),
            }),
            (0, n.jsx)(ui, { nPartnerID: t.results.partner_id }),
            (0, n.jsx)("td", { children: t.results.suggestion.trim() }),
          ],
        });
      }
      const hi = a.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            fi ||
              (fi = new (Zt())(
                async (e) => {
                  const t = `${Y.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    r = { sessionid: (0, Y.KC)(), strAccountIDs: e.join(",") },
                    i = await K().get(t, { params: r, withCredentials: !0 });
                  if (!i || 200 != i?.status || i?.data?.success != B.R)
                    throw `Failed to load app to user email and langs: ${((0, Ie.H))(i).strErrorMsg}`;
                  const n = new Map();
                  return (
                    i.data.users.forEach((e) => {
                      const t = new V.b(e.steamid);
                      n.set(t.GetAccountID(), e);
                    }),
                    e.map((e) => n.get(e) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return fi;
          })().load(e),
      });
      function pi(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let fi;
      var _i = r(73745),
        bi = r(3049);
      function yi(e) {
        const t = (0, ce.a)(),
          r = (0, Tr.qh)(),
          s = (function (e) {
            const t = (0, L.I)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const t = w.w.Init(q),
                  r = new Date();
                r.setFullYear(r.getFullYear() - 2),
                  t.Body().set_rt_oldest_date(0);
                const n = await i.GetSaleEventOrganizers(e, t);
                return n.BSuccess()
                  ? n
                      .Body()
                      .info()
                      .map((e) => e.toObject())
                  : [];
              },
            });
            return t.isLoading ? null : t.data;
          })(t),
          o = (0, a.useMemo)(() => {
            if (!s || !r) return null;
            const e = new Set(r.map((e) => e.id));
            return s
              .filter((t) => !e.has(t.accountid))
              .sort(
                (e, t) => t.clan_event_gids?.length - e.clan_event_gids.length,
              );
          }, [s, r]);
        return o
          ? (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)(ue.$n, {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      o.forEach((t) => {
                        const r = (0, Zr.z0)(t.accountid),
                          i =
                            ((n = t.accountid),
                            sr.L.getQueryData(["UserEmailAndLangs", n]));
                        var n;
                        e.push([
                          r?.m_strPlayerName || "",
                          "" + t.accountid,
                          i?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString((0, bi.J)()),
                        ]);
                      });
                    Ue.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                  children: [
                    "CSV Export",
                    (0, n.jsx)(fe.o, {
                      tooltip:
                        "Wait until the page finishes loading before export",
                    }),
                  ],
                }),
                (0, n.jsxs)("table", {
                  children: [
                    (0, n.jsx)("thead", {
                      children: (0, n.jsxs)("tr", {
                        children: [
                          (0, n.jsx)("th", { children: "User" }),
                          (0, n.jsx)("th", { children: "Email" }),
                          (0, n.jsx)("th", { children: "Events" }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("tbody", {
                      children: o.map((e) =>
                        (0, n.jsx)(Bi, { organizer: e }, e.accountid),
                      ),
                    }),
                  ],
                }),
              ],
            })
          : (0, n.jsx)(pe.t, {
              string: (0, ye.we)("#Loading"),
              size: "medium",
            });
      }
      function Bi(e) {
        const { organizer: t } = e,
          r = (0, a.useMemo)(
            () => V.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          i = (0, Zr.hW)(r),
          s = (function (e) {
            const t = a.useContext(hi);
            return (0, L.I)(pi(t, e));
          })(t.accountid),
          o = i.data?.m_strPlayerName || "";
        return (0, n.jsxs)("tr", {
          children: [
            (0, n.jsxs)("td", { children: [o, " (", t.accountid, ")"] }),
            (0, n.jsx)("td", { children: s?.data?.email_address }),
            (0, n.jsx)("td", {
              children: (0, n.jsx)(wi, {
                name: o,
                rgClanEventGIDs: t.clan_event_gids,
              }),
            }),
          ],
        });
      }
      function wi(e) {
        const { name: t, rgClanEventGIDs: r } = e,
          [i, s, a] = (0, _i.uD)();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(ue.$n, {
              onClick: s,
              children: ["See ", (0, At.D)(r.length), " Events"],
            }),
            (0, n.jsx)(he.E, {
              active: i,
              children: (0, n.jsx)(ge.o0, {
                bAlertDialog: !0,
                closeModal: a,
                strTitle: `${t}'s Events`,
                children: r.map((e) => (0, n.jsx)(Mi, { gid: e }, e)),
              }),
            }),
          ],
        });
      }
      function Mi(e) {
        const { gid: t } = e,
          r = (0, oe.RR)(t);
        return r
          ? (0, n.jsxs)("a", {
              href: `${we.TS.COMMUNITY_BASE_URL}gid/${r.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
              target: "_blank",
              children: [
                (0, n.jsx)("div", { children: r.GetNameWithFallback(y.Bhc) }),
                (0, n.jsx)("img", { src: r.GetImageURL("capsule", y.Bhc) }),
              ],
            })
          : (0, n.jsxs)("div", { children: ["Loading ", t] });
      }
      function Si(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          r = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: (0, n.jsx)(m.tH, { children: (0, n.jsx)(ii, {}) }),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: (0, n.jsx)(m.tH, { children: (0, n.jsx)(Nr, {}) }),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: (0, n.jsx)(m.tH, { children: (0, n.jsx)(yi, {}) }),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: (0, n.jsx)(m.tH, { children: (0, n.jsx)(ve, {}) }),
              onClick: t,
            },
          ];
        return (0, n.jsx)(Re, {
          children: (0, n.jsx)(Ar, {
            children: (0, n.jsxs)("div", {
              className: _().AdminPageCtn,
              children: [
                (0, n.jsxs)("div", {
                  className: _().PageTitle,
                  children: [
                    "Meet Steam Admin Dashboard ",
                    (0, b.Fd)("current_year", "application_config"),
                  ],
                }),
                (0, n.jsx)("hr", {}),
                (0, n.jsx)(p.V, { tabs: r }),
                (0, n.jsx)("div", { className: h().ClearThings }),
                (0, n.jsx)("br", {}),
              ],
            }),
          }),
        });
      }
      var vi = r(65946),
        ji = r(79645),
        xi = r(1909),
        zi = r(56330),
        Ri = r(85761),
        Fi = r.n(Ri);
      function Ti(e) {
        const t = (function () {
            const [e] = (0, a.useState)(() =>
              (0, Y.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          r = (function () {
            const [e] = (0, a.useState)(
              () => (0, Y.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: i } = (0, Zr.js)(Y.iA.accountid),
          [s, o] = (0, a.useState)(!1),
          [l, c] = (0, a.useState)(!1),
          [u, d] = (0, a.useState)(!1),
          [m, g] = (0, a.useState)(() => JSON.parse(JSON.stringify(r)));
        return t
          ? !i || i.m_bPlayerNamePending
            ? (0, n.jsx)(pe.t, {
                size: "medium",
                position: "center",
                string: (0, ye.we)("#Loading"),
              })
            : (0, n.jsxs)("div", {
                className: (0, _e.A)(_().AdminPageCtn, Fi().Ctn),
                children: [
                  (0, n.jsx)("div", {
                    className: _().PageTitle,
                    children: (0, ye.we)("#MeetSteam_MainTitle"),
                  }),
                  (0, n.jsx)("hr", {}),
                  (0, n.jsx)("div", {
                    className: _().ColumnCtn,
                    children: (0, n.jsxs)("div", {
                      className: _().LeftCol,
                      children: [
                        (0, n.jsxs)("div", {
                          className: _().SectionCtn,
                          children: [
                            (0, n.jsxs)("h1", {
                              children: [
                                " ",
                                (0, ye.PP)(
                                  "#MeetSteam_Intro",
                                  i.m_strPlayerName,
                                  (0, n.jsx)("br", {}),
                                ),
                              ],
                            }),
                            (0, n.jsx)("p", {
                              className: _().IntroText,
                              children: (0, ye.we)("#MeetSteam_Desc1"),
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: _().SectionCtn,
                          children: (0, n.jsx)(Oi, {
                            oRegistration: m,
                            fnSetRegistration: g,
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: _().SectionCtn,
                          children: (0, n.jsx)(Ci, {
                            oRegistration: m,
                            fnSetRegistration: g,
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: (0, _e.A)(_().SectionCtn, _().ActionBar),
                          children: [
                            (0, n.jsx)(ue.jn, {
                              onClick: async () => {
                                c(!0), o(!1), d(!1);
                                const e = `${Y.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                  t = new FormData();
                                t.append("sessionid", (0, Y.KC)()),
                                  t.append(
                                    "registrationJson",
                                    JSON.stringify(m),
                                  );
                                try {
                                  const r = await K().post(e, t, {
                                    withCredentials: !0,
                                  });
                                  r.data.success != B.R
                                    ? (console.error(
                                        "MeetSteamLanding failed " +
                                          r.data.success,
                                      ),
                                      o(!0))
                                    : d(!0);
                                } catch (e) {
                                  console.error(
                                    "MeetSteamLanding failed caught",
                                    e,
                                  );
                                }
                                c(!1);
                              },
                              children: (0, ye.we)("#Button_Submit"),
                            }),
                            l &&
                              (0, n.jsx)(pe.t, {
                                size: "medium",
                                position: "center",
                                string: (0, ye.we)("#Saving"),
                              }),
                            u &&
                              (0, n.jsx)("div", {
                                children: (0, ye.we)("#Button_Saved"),
                              }),
                            s &&
                              (0, n.jsx)("div", {
                                className: zi.ErrorStylesWithIcon,
                                children: (0, ye.we)(
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
          : (0, n.jsx)("div", {
              className: Fi().Ctn,
              children: (0, ye.we)("#MeetSteam_closed"),
            });
      }
      function Ci(e) {
        const { oRegistration: t, fnSetRegistration: r } = e,
          { rgEvents: i, rgOldEvents: s, selectConference: a } = ee();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("h1", {
              children: (0, ye.we)("#MeetSteam_Events_Interest"),
            }),
            (0, n.jsx)("p", {
              children: (0, ye.PP)(
                "#MeetSteam_Events_title",
                (0, Y.Tc)("meet_steam_year", "application_config") || "2025",
              ),
            }),
            (0, n.jsxs)("p", {
              children: [
                (0, n.jsx)("span", {
                  className: Fi().Indicator,
                  children: "*",
                }),
                " ",
                (0, ye.PP)("#MeetSteam_Events_desc"),
              ],
            }),
            Boolean(a) &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("hr", {}),
                  (0, n.jsx)("p", {
                    children: (0, ye.we)("#MeetSteam_ConferenceOrg"),
                  }),
                  (0, n.jsx)(Ii, { ...e, rgConference: [a] }),
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("hr", {}),
                  (0, n.jsx)("h2", {
                    children: (0, ye.we)("#MeetSteam_OtherConference"),
                  }),
                ],
              }),
            (0, n.jsx)(Ii, { ...e, rgConference: i }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)(ue.pd, {
              type: "text",
              value: t.suggestion || "",
              onChange: (e) => r({ ...t, suggestion: e.currentTarget.value }),
              label: (0, ye.we)("#MeetSteam_others"),
            }),
            Boolean(s?.length > 0) &&
              (0, n.jsx)(ri.qx, {
                bStartMinimized: !0,
                title: (0, ye.we)("#MeetSteam_PastEvents", s.length),
                children: (0, n.jsx)(Ii, { ...e, rgConference: s }),
              }),
          ],
        });
      }
      function Ii(e) {
        const { rgConference: t } = e;
        return (0, n.jsxs)("table", {
          children: [
            (0, n.jsx)("thead", {
              children: (0, n.jsxs)("tr", {
                children: [
                  (0, n.jsx)("th", {}),
                  (0, n.jsx)("th", {}),
                  (0, n.jsx)("th", {}),
                  (0, n.jsx)("th", {}),
                ],
              }),
            }),
            (0, n.jsx)("tbody", {
              children: t.map((t) =>
                (0, n.jsxs)(
                  "tr",
                  {
                    children: [
                      (0, n.jsx)("td", {
                        children: t.attending
                          ? (0, n.jsx)("span", {
                              className: Fi().Indicator,
                              children: "*",
                            })
                          : "",
                      }),
                      (0, n.jsxs)("td", {
                        children: [
                          (0, n.jsx)("div", { children: t.name }),
                          (0, n.jsx)("div", { children: t.place }),
                        ],
                      }),
                      (0, n.jsx)("td", {
                        children: (0, n.jsx)("div", { children: t.time }),
                      }),
                      (0, n.jsx)("td", {
                        children: (0, n.jsx)(Ui, { ...e, conf: t }),
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
      function Ui(e) {
        const { oRegistration: t, fnSetRegistration: r, conf: i } = e;
        return (0, n.jsx)(ue.Yh, {
          checked: t.attending?.includes(i.id),
          onChange: (e) => {
            let n = t.attending ? [...t.attending] : [];
            e && !n.includes(i.id)
              ? (n.push(i.id), r({ ...t, attending: n }))
              : !e &&
                n.includes(i.id) &&
                (n.splice(n.indexOf(i.id), 1), r({ ...t, attending: n }));
          },
          tooltip: (0, ye.we)("#MeetSteam_attend_ttip"),
        });
      }
      function Oi(e) {
        const { oRegistration: t, fnSetRegistration: r } = e,
          i = (0, Zr.js)(Y.iA.accountid),
          s = (function (e) {
            const t = (function () {
                const [e] = (0, a.useState)(
                  () =>
                    (0, Y.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              r = (function () {
                const [e] = (0, a.useState)(() =>
                  (0, Y.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              i = ar(Y.iA.accountid, e != r ? e : null);
            return e == r ? t : i?.email;
          })(t?.partner_id),
          [o, l] = (0, a.useState)(() =>
            Boolean((t.email_override && t.email_override != s) || !s),
          ),
          [c, u, d] = (0, vi.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return i.data
          ? (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("h1", { children: (0, ye.we)("#MeetSteam_You") }),
                (0, n.jsx)("p", {
                  children: (0, ye.we)("#MeetSteam_You_Desc"),
                }),
                (0, n.jsx)(Ei, {
                  nPartnerID: t.partner_id,
                  label: (0, ye.we)("#MeetSteam_You_Company"),
                  setPartnerID: (e) => r({ ...t, partner_id: e }),
                }),
                (0, n.jsxs)("div", {
                  className: Fi().EmailInfoRow,
                  children: [
                    (0, n.jsx)("div", {
                      className: Fi().EmailField,
                      children: (0, n.jsx)(ue.pd, {
                        type: "string",
                        label: (0, ye.we)("#MeetSteam_You_Email"),
                        disabled: !o,
                        value: t.email_override || s || "",
                        placeholder: (0, ye.we)("#MeetSteam_You_EmailMissing"),
                        mustBeEmail: !0,
                        onChange: (e) =>
                          r({ ...t, email_override: e.currentTarget.value }),
                      }),
                    }),
                    !o &&
                      (0, n.jsx)(ue.Yh, {
                        checked: o,
                        onChange: l,
                        label: (0, ye.we)("#MeetSteam_You_Update"),
                        tooltip: (0, ye.we)("#MeetSteam_You_Update_ttip"),
                      }),
                  ],
                }),
                (0, n.jsx)(ue.JU, {
                  children: (0, ye.we)("#MeetSteam_NeverMet"),
                }),
                (0, n.jsx)(ue.Yh, {
                  label: (0, ye.we)("#MeetSteam_NeverMetNo"),
                  checked: c,
                  onChange: (e) => r({ ...t, have_you_met_steam: !e }),
                }),
                (0, n.jsx)(ue.JU, {
                  children: (0, ye.we)("#MeetSteam_CapabableEnglish"),
                }),
                (0, n.jsxs)("div", {
                  className: Fi().RadioButtonCtn,
                  children: [
                    (0, n.jsx)(ue.Od, {
                      className: Fi().RadioButtons,
                      checked: !u,
                      onChange: (e) =>
                        e &&
                        r({
                          ...t,
                          english_not_good: void 0,
                          preferred_language: void 0,
                        }),
                      label: (0, ye.we)("#MeetSteam_CapabableEnglish_Yes"),
                    }),
                    (0, n.jsx)(ue.Od, {
                      className: Fi().RadioButtons,
                      checked: u,
                      onChange: (e) =>
                        e &&
                        r({
                          ...t,
                          english_not_good: !0,
                          preferred_language: (0, y.sfN)(Y.TS.LANGUAGE),
                        }),
                      label: (0, ye.we)("#MeetSteam_CapabableEnglish_No"),
                    }),
                  ],
                }),
                u &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("br", {}),
                      (0, n.jsx)(ue.JU, {
                        children: (0, ye.we)("#MeetSteam_LanguagePref"),
                      }),
                      (0, n.jsx)(xi.Ng, {
                        selectedLang: d,
                        bAllowUnsetOption: !1,
                        strTooltip: (0, ye.we)("#MeetSteam_LanguagePref_ttip"),
                        fnOnLanguageChanged: (e) =>
                          r({ ...t, preferred_language: e }),
                      }),
                    ],
                  }),
              ],
            })
          : (0, n.jsx)(pe.t, {
              size: "medium",
              position: "center",
              string: (0, ye.we)("#Loading"),
            });
      }
      function Ei(e) {
        const { nPartnerID: t, setPartnerID: r, label: i } = e,
          s = (0, ji.c)(Y.iA.accountid);
        if (!s)
          return (0, n.jsx)(pe.t, {
            size: "small",
            position: "center",
            string: (0, ye.we)("#Loading"),
          });
        if (1 == s.length) return null;
        const a = [];
        return (
          s.forEach((e) =>
            a.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          (0, n.jsx)(ue.m, {
            layout: "inline",
            label: i,
            rgOptions: a,
            selectedOption: t,
            onChange: (e) => {
              r(e.data);
            },
          })
        );
      }
      var Wi = r(20587),
        qi = r(13038),
        Ai = r.n(qi);
      function Di(e) {
        const { data: t } = (0, Zr.js)(Y.iA.accountid),
          r = (function () {
            const [e] = (0, a.useState)(
              () => (0, Y.Tc)("survey_event_name", "application_config") || "",
            );
            return e;
          })(),
          i = (function () {
            const [e] = (0, a.useState)(
              () => (0, Y.Tc)("survey_data", "application_config") || "",
            );
            return e;
          })(),
          [s, o] = (0, a.useState)(() => i || ""),
          { surveyGID: c } = (0, l.g)(),
          [u, d] = (0, a.useState)(!1),
          [m, g] = (0, a.useState)(!1),
          [h, p] = (0, a.useState)(!1);
        return !t || t.m_bPlayerNamePending
          ? (0, n.jsx)(pe.t, {
              size: "medium",
              position: "center",
              string: (0, ye.we)("#Loading"),
            })
          : (0, n.jsxs)("div", {
              className: (0, _e.A)(_().AdminPageCtn, Ai().Ctn),
              children: [
                (0, n.jsx)("div", {
                  className: _().PageTitle,
                  children: (0, ye.we)("#MeetSteam_PostSurvey_Title", r),
                }),
                (0, n.jsx)("hr", {}),
                (0, n.jsx)("div", {
                  className: _().ColumnCtn,
                  children: (0, n.jsxs)("div", {
                    className: _().LeftCol,
                    children: [
                      (0, n.jsxs)("div", {
                        className: _().SectionCtn,
                        children: [
                          (0, n.jsx)("div", {
                            children: (0, ye.we)(
                              "#MeetSteam_PostSurvey_Question",
                            ),
                          }),
                          (0, n.jsx)("textarea", {
                            rows: 10,
                            onChange: (e) => o(e.currentTarget.value),
                            value: s,
                            autoFocus: !0,
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: (0, _e.A)(_().SectionCtn, _().ActionBar),
                        children: [
                          (0, n.jsx)(ue.jn, {
                            onClick: async () => {
                              g(!0), d(!1), p(!1);
                              const e = `${Y.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${c}`,
                                t = new FormData();
                              t.append("gid", c),
                                t.append("sessionid", (0, Y.KC)());
                              let r = {
                                gid: c,
                                simple_response: s,
                                submit_time: Math.floor(
                                  new Date().getTime() / 1e3,
                                ),
                              };
                              t.append("surveyjson", JSON.stringify(r));
                              try {
                                const r = await K().post(e, t, {
                                  withCredentials: !0,
                                });
                                r.data.success != B.R
                                  ? (console.error(
                                      "MeetSteamLanding failed " +
                                        r.data.success,
                                    ),
                                    d(!0))
                                  : p(!0);
                              } catch (e) {
                                console.error(
                                  "MeetSteamLanding failed caught",
                                  e,
                                );
                              }
                              g(!1);
                            },
                            children: (0, ye.we)("#Button_Submit"),
                          }),
                          m &&
                            (0, n.jsx)(pe.t, {
                              size: "medium",
                              position: "center",
                              string: (0, ye.we)("#Saving"),
                            }),
                          h &&
                            (0, n.jsx)("div", {
                              children: (0, ye.we)("#Button_Saved"),
                            }),
                          u &&
                            (0, n.jsx)("div", {
                              className: zi.ErrorStylesWithIcon,
                              children: (0, ye.we)(
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
      var ki = r(5695);
      function Ni(e) {
        const t = (function () {
            const [e] = (0, a.useState)(
              () => (0, Y.Tc)("event_gids", "application_config") || [],
            );
            return e;
          })(),
          r = (function () {
            const [e] = (0, a.useState)(
              () => (0, Y.Tc)("survey_results", "application_config") || [],
            );
            return e;
          })(),
          i = (function () {
            const e = (function () {
              const [e] = (0, a.useState)(() => {
                const e = new Map(),
                  t =
                    (0, Y.Tc)("registration_by_gid", "application_config") ||
                    {};
                for (const r in t) {
                  const i = t[r];
                  e.set(r, i);
                }
                return e;
              });
              return e;
            })();
            return (0, a.useMemo)(() => {
              const t = new Map();
              return (
                e.forEach((e, r) => {
                  e.forEach((e) => {
                    const i = new V.b(e.steamid);
                    t.has(i.GetAccountID()) || t.set(i.GetAccountID(), []),
                      (e.gidEvent = r),
                      t.get(i.GetAccountID()).push(e);
                  });
                }),
                t
              );
            }, [e]);
          })(),
          { surveyGID: s } = (0, l.g)(),
          { bIsLoading: o, events: c } = (0, oe.PB)(t),
          [u, d] = (0, a.useMemo)(
            () => [
              r
                .map((e) => {
                  const t = new V.b(e.steamid);
                  if (i.has(t.GetAccountID())) {
                    const e = i.get(t.GetAccountID());
                    return JSON.parse(e[0].jsondata).partner_id;
                  }
                  return null;
                })
                .filter(Boolean),
              r.map((e) => new V.b(e.steamid).GetAccountID()),
            ],
            [i, r],
          ),
          m = (0, J.vh)(u),
          g = (0, Ut.B3)(d);
        return !o && m && g
          ? (0, n.jsx)(Gi, {
              rgSurveyResults: r,
              mapAccountsToReg: i,
              meetSteamEvents: c,
            })
          : (0, n.jsx)(pe.t, {
              string: "Loading Event, Partner and User Info",
            });
      }
      const Pi = (0, Yt.FB)();
      function Gi(e) {
        const {
            rgSurveyResults: t,
            mapAccountsToReg: r,
            meetSteamEvents: i,
          } = e,
          s = (0, a.useMemo)(() => {
            if (!t) return null;
            const e = new Map();
            i.forEach((t) => e.set(t.GID, t));
            const n = [];
            return (
              t.forEach((t) => {
                const i = JSON.parse(t.jsondata),
                  s = new V.b(t.steamid);
                let a = {
                  feedback: i.simple_response,
                  accountid: s.GetAccountID(),
                };
                if (r.has(s.GetAccountID())) {
                  const t = r.get(s.GetAccountID()),
                    i = JSON.parse(t[0].jsondata);
                  (a.partner_id = i.partner_id),
                    (a.email = i.email_override),
                    (a.name = i.name),
                    (a.registrations = "");
                  const n = (0, J.Yd)(i.partner_id);
                  n && (a.partner_name = n.name),
                    t.forEach((t) => {
                      const r = e.get(t.gidEvent);
                      if (r) {
                        const e = r.jsondata.meet_steam_groups.find(
                          (e) => e.group_id === t.group_id,
                        ).localized_session_title[y.Bhc];
                        a.registrations.length > 0 && (a.registrations += "|"),
                          (a.registrations += e);
                      }
                    });
                } else {
                  const e = (0, Ut.CF)(s.GetAccountID());
                  e && (a.name = e.persona_name);
                }
                n.push(a);
              }),
              n
            );
          }, [r, i, t]),
          o = (0, a.useMemo)(
            () => [
              Pi.accessor("name", { header: "Name", size: 150 }),
              Pi.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: ki.Gb,
              }),
              Pi.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: Li,
              }),
              Pi.accessor("accountid", { header: "Account ID", size: 150 }),
              Pi.accessor("email", { header: "Email", size: 150 }),
              Pi.accessor("partner_name", {
                header: "Partner Name",
                size: 200,
              }),
            ],
            [],
          );
        return s
          ? (0, n.jsx)(m.tH, {
              children: (0, n.jsxs)("div", {
                className: _().AdminPageCtn,
                children: [
                  (0, n.jsx)("div", {
                    className: _().PageTitle,
                    children: "Survey Results",
                  }),
                  (0, n.jsx)("hr", {}),
                  (0, n.jsx)(ue.$n, {
                    id: "download-csv",
                    onClick: () =>
                      (0, Fr.K)(
                        "meetsteam_survey_results.csv",
                        s,
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
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)(Jt.k, {
                    columns: o,
                    data: s,
                    getRowKey: (e) => e,
                    stickyHeader: !0,
                    nItemHeight: 28,
                    overscan: s.length,
                  }),
                ],
              }),
            })
          : (0, n.jsx)(pe.t, { string: (0, ye.we)("#Loading") });
      }
      function Li(e) {
        const t = e.getValue();
        return t?.length > 0
          ? (0, n.jsx)(ki.DP, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      const $i = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function Hi(e) {
        return (
          (0, a.useEffect)(() => {
            Wi.O3.Init();
          }, []),
          (0, n.jsx)(c.m, {
            children: (0, n.jsx)(o.Kd, {
              basename: (0, s.C)() + "meetsteam/",
              children: (0, n.jsxs)(l.dO, {
                children: [
                  (0, n.jsx)(l.qh, {
                    exact: !0,
                    path: s.B.DiagData(),
                    render: (e) =>
                      (0, n.jsx)(u.z, {
                        ...e,
                        strConfigID: "application_config",
                      }),
                  }),
                  (0, n.jsx)(l.qh, {
                    exact: !0,
                    path: $i.AdminDashboard(),
                    component: Si,
                  }),
                  (0, n.jsx)(l.qh, {
                    exact: !0,
                    path: $i.YearlySurvery(":year(\\d+)"),
                    component: Ti,
                  }),
                  (0, n.jsx)(l.qh, {
                    exact: !0,
                    path: $i.PostEventSurvey(":surveyGID(\\d+)"),
                    component: Di,
                  }),
                  (0, n.jsx)(l.qh, {
                    exact: !0,
                    path: $i.PostEventSurveyResults(":surveyGID(\\d+)"),
                    component: Ni,
                  }),
                  (0, n.jsx)(l.qh, { component: d.a }),
                ],
              }),
            }),
          })
        );
      }
    },
    66051: (e, t, r) => {
      "use strict";
      r.d(t, { k: () => C });
      var i = r(7850),
        n = r(8871),
        s = r(67796),
        a = r(16666),
        o = r(92148),
        l = r(59366),
        c = r(64238),
        u = r.n(c),
        d = r(90626),
        m = r(31718),
        g = r.n(m),
        h = r(76217),
        p = r(23310),
        f = r(94104),
        _ = r(9646);
      const b = d.memo(function (e) {
        const {
            virtualizer: t,
            bDynamic: r,
            scrollAlign: n,
            bNativeScrollIntoView: s,
            idx: a,
            rowGap: o,
            renderItem: l,
          } = e,
          c = d.useCallback(
            (e, r, i) => (t.scrollToIndex(a, { align: n }), !0),
            [t, a, n],
          );
        return (0, i.jsx)(h.Z, {
          ref: r ? t.measureElement : void 0,
          navKey: `VirtualizedListIndex-${a}`,
          "data-index": a,
          fnScrollIntoViewHandler: s ? void 0 : c,
          scrollIntoViewWhenChildFocused: "force",
          style: { width: "100%", paddingBottom: o },
          children: l(a),
        });
      });
      function y(e, t) {
        const r = e.getBoundingClientRect().top;
        return t
          ? r - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
          : r + (e.ownerDocument.defaultView?.scrollY ?? 0);
      }
      d.forwardRef(function (e, t) {
        const {
            nRows: r,
            nItemHeight: s,
            nRowGap: a,
            overscan: o,
            renderItem: l,
            bDynamic: c,
            measureElement: u,
            className: m,
            forceVirtualizeType: g,
            hintVirtualizeType: p,
            scrollAlign: _,
            bNativeScrollIntoView: b,
            initialOffset: B,
            onOffsetChange: S,
            ...v
          } = e,
          [j, x] = (0, d.useState)(g ?? p),
          [z, R] = d.useState(),
          [F, T] = d.useState(),
          C = d.useRef(null),
          I = d.useCallback(
            (e) => {
              if (!e) return;
              const t = (0, f._f)(e, "y"),
                r = y(e, "window" == g ? null : t);
              (0, d.startTransition)(() => {
                "window" != g && R(t || void 0),
                  T(r),
                  g || x(t ? "element" : "window");
              });
            },
            [g],
          ),
          U =
            ((O = (e) => {
              if (!C.current) return;
              const t = y(C.current, z);
              (0, d.startTransition)(() => {
                T(t);
              });
            }),
            (0, n.QS)(
              (e) => {
                if (!e) return;
                const t = new e.ownerDocument.defaultView.ResizeObserver(
                  (e) => {
                    O(e[0]);
                  },
                );
                let r = [],
                  i = e;
                for (; i && null != i; )
                  t.observe(i), r.push(i), (i = i.parentElement);
                return () => {
                  r.forEach((e) => t.unobserve(e));
                };
              },
              [O],
            ));
        var O;
        const E = (0, n.Ue)(I, C, U, t),
          W = {
            nRows: r,
            nItemHeight: s,
            nRowGap: a,
            overscan: o,
            renderItem: l,
            bDynamic: c,
            measureElement: u,
            forceVirtualizeType: g,
            hintVirtualizeType: p,
            scrollAlign: _,
            bNativeScrollIntoView: b,
            initialOffset: B,
            onOffsetChange: S,
          };
        return (0, i.jsx)(h.Z, {
          className: m,
          ref: E,
          ...v,
          children: (0, i.jsxs)(d.Suspense, {
            children: [
              "element" === j &&
                (0, i.jsx)(M, { ...W, nScrollMargin: F || 0, elScrollable: z }),
              "window" === j && (0, i.jsx)(w, { ...W, nScrollMargin: F }),
            ],
          }),
        });
      });
      function B(e, t, r) {
        d.useEffect(() => {
          r ||
            (0, d.startTransition)(() => {
              e.measure();
            });
        }, [e, t, r]);
      }
      function w(e) {
        const {
            nScrollMargin: t,
            nRows: r,
            nItemHeight: n,
            nRowGap: s = 10,
            overscan: a = 6,
            initialOffset: l,
            onOffsetChange: c,
            measureElement: u,
            bDynamic: m,
          } = e,
          g = ((0, _.d)(), n + s),
          h = (0, o.XW)({
            count: r,
            scrollMargin: t,
            estimateSize: d.useCallback(() => g, [g]),
            measureElement: u,
            overscan: a,
            initialOffset: l ?? (() => window.scrollY),
            initialRect: void 0,
            observeElementOffset: j,
            observeElementRect: x,
            onChange(e, t) {
              c?.(e.scrollOffset);
            },
          });
        return (
          (h.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
            void 0 !== t && e.start < (h.scrollOffset ?? 0)),
          B(h, g, m),
          (0, i.jsx)(S, { ...e, virtualizer: h })
        );
      }
      function M(e) {
        const {
            nRows: t,
            nScrollMargin: r,
            elScrollable: n,
            nItemHeight: s,
            nRowGap: a = 10,
            overscan: l = 6,
            initialOffset: c,
            onOffsetChange: u,
            measureElement: m,
            bDynamic: g,
          } = e,
          h = s + a,
          p = (0, _.d)(),
          f = (0, o.Te)({
            count: t,
            scrollMargin: r,
            getScrollElement: () => (
              n &&
                f.scrollElement !== n &&
                void 0 === c &&
                (f.scrollOffset = n.scrollTop),
              n ?? null
            ),
            estimateSize: d.useCallback(() => h, [h]),
            measureElement: m,
            overscan: l,
            initialRect: n
              ? void 0
              : {
                  height: p.viewportHeight?.value ?? 1e3,
                  width: p.viewportWidth?.value ?? 1e3,
                },
            initialOffset: c,
            observeElementOffset: j,
            observeElementRect: z,
            onChange(e, t) {
              u?.(e.scrollOffset);
            },
          });
        return (
          (f.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
            void 0 !== n && e.start < (f.scrollOffset ?? 0)),
          B(f, h, g),
          (0, i.jsx)(S, { ...e, virtualizer: f })
        );
      }
      function S(e) {
        const {
            virtualizer: t,
            nRowGap: r,
            renderItem: n,
            bDynamic: s,
            scrollAlign: a = "center",
            bNativeScrollIntoView: o,
          } = e,
          l = t.getVirtualItems(),
          c = l.length ? l[0].start - t.options.scrollMargin : 0,
          u = Math.max(0, t.getTotalSize());
        return (0, i.jsx)(h.Z, {
          "flow-children": "column",
          navEntryPreferPosition: p.iU.MAINTAIN_Y,
          style: { height: `${u}px`, width: "100%", position: "relative" },
          children: (0, i.jsx)("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY( ${c}px )`,
            },
            children: l.map((e) =>
              (0, i.jsx)(
                b,
                {
                  virtualizer: t,
                  bDynamic: s,
                  scrollAlign: a,
                  bNativeScrollIntoView: o,
                  idx: e.index,
                  rowGap: r,
                  renderItem: n,
                },
                e.key,
              ),
            ),
          }),
        });
      }
      function v(e) {
        return (...t) => {
          queueMicrotask(() => {
            (0, d.startTransition)(() => {
              e(...t);
            });
          });
        };
      }
      function j(e, t) {
        const r = e.scrollElement;
        if (!r) return;
        let i;
        i = v(
          "scrollX" in r
            ? (i) => t(r[e.options.horizontal ? "scrollX" : "scrollY"], i)
            : (i) => t(r[e.options.horizontal ? "scrollLeft" : "scrollTop"], i),
        );
        const n = () => i(!0),
          s = () => i(!1);
        return (
          s(),
          r.addEventListener("scroll", n, { passive: !0 }),
          r.addEventListener("scrollend", s, { passive: !0 }),
          () => {
            r.removeEventListener("scroll", n),
              r.removeEventListener("scrollend", s);
          }
        );
      }
      function x(e, t) {
        const r = e.scrollElement;
        if (!r) return;
        const i = v(() => t({ width: r.innerWidth, height: r.innerHeight }));
        return (
          i(),
          r.addEventListener("resize", i, { passive: !0 }),
          () => {
            r.removeEventListener("resize", i);
          }
        );
      }
      function z(e, t) {
        const r = e.scrollElement;
        if (!r) return;
        const i = v((e) =>
          t({ width: Math.round(e.width), height: Math.round(e.height) }),
        );
        i(r.getBoundingClientRect());
        const n = r.ownerDocument.defaultView;
        if (!n?.ResizeObserver) return () => {};
        const s = new n.ResizeObserver((e) => {
          e[0]?.borderBoxSize[0]
            ? i({
                width: e[0].borderBoxSize[0].inlineSize,
                height: e[0].borderBoxSize[0].blockSize,
              })
            : i(r.getBoundingClientRect());
        });
        return (
          s.observe(r, { box: "border-box" }),
          () => {
            s.unobserve(r);
          }
        );
      }
      var R = r(26408);
      const F = d.createContext(void 0);
      function T(e) {
        const { table: t, setColumnSizeOverride: r } = e,
          n = (0, d.useRef)(t);
        n.current = t;
        const s = (0, d.useMemo)(
          () => ({ table: n.current, setColumnSizeOverride: r }),
          [r],
        );
        return (0, i.jsx)(F.Provider, { value: s, children: e.children });
      }
      const C = d.forwardRef(function (e, t) {
        const {
            data: r,
            columns: n,
            className: c,
            width: u,
            height: m,
            nScrollMargin: g,
            nItemHeight: h,
            nHeaderHeight: p,
            overscan: f = 6,
            stickyHeader: _,
            getRowKey: b,
            initialSorting: y,
            initialColumnFilters: B,
            initialGrouping: w,
            initialExpanded: M,
            initialColumnPinning: S,
            initialColumnVisibility: v,
            onGroupingChange: R,
            onVisibleRowsChange: F,
            renderGroup: C,
            virtualizeType: I = "element",
          } = e,
          E = (0, d.useRef)(null),
          [W, q] = (0, d.useState)({}),
          [A, D] = (0, d.useState)({}),
          k = n.map((e) =>
            "accessorKey" in e
              ? { ...e, filterFn: W[e.accessorKey] ?? e.filterFn }
              : e,
          ),
          N = k.map((e) => {
            let t = A[e.id];
            return (
              void 0 === t && "accessorKey" in e && (t = A[e.accessorKey]),
              (t ??= e.size),
              { ...e, size: t }
            );
          }),
          P = (0, s.N4)({
            data: r,
            columns: N,
            defaultColumn: { minSize: 60, maxSize: 800 },
            initialState: {
              sorting: y,
              grouping: w ?? [],
              expanded: M,
              columnPinning: S ?? {},
              columnFilters: B,
              columnVisibility: v,
            },
            getCoreRowModel: (0, a.HT)(),
            getSortedRowModel: (0, a.h5)(),
            getFilteredRowModel: (0, a.hM)(),
            getGroupedRowModel: (0, a.cU)(),
            columnResizeMode: "onChange",
          }),
          { rows: G, flatRows: L } = P.getRowModel(),
          $ = G.flatMap((e) => (e.getIsExpanded() ? [e, ...e.subRows] : e)),
          H = P.getState().grouping;
        (0, d.useEffect)(() => {
          R?.(H);
        }, [R, H]),
          (0, d.useEffect)(() => {
            F?.($);
          }, [F, $.length]);
        const K = (0, o.Te)({
            count: $.length,
            scrollMargin: g,
            getScrollElement: d.useCallback(
              () => ("element" === I ? ee.current : window),
              [I],
            ),
            scrollToFn: (e, t, r) =>
              "window" === I ? (0, l.e8)(e, t, r) : (0, l.Ox)(e, t, r),
            estimateSize: d.useCallback(() => h, [h]),
            overscan: f,
            initialRect: void 0,
            observeElementOffset: j,
            observeElementRect: (e, t) => ("window" === I ? x(e, t) : z(e, t)),
            getItemKey(e) {
              const t = $[e];
              return `${t.parentId ?? ""}${b(e, t.original)}`;
            },
          }),
          V = (0, d.useRef)(0),
          Y = d.useMemo(() => {
            const e = P.getFlatHeaders(),
              t = {};
            for (let r = 0; r < e.length; r++) {
              const i = e[r];
              (t[`--header-${i.id}-size`] = `${i.getSize()}px`),
                (t[`--col-${i.column.id}-size`] = `${i.column.getSize()}px`);
            }
            return (V.current += 1), t;
          }, [P.getState().columnSizingInfo, P.getState().columnSizing, n]);
        d.useEffect(() => {
          (0, d.startTransition)(() => {
            K.measure();
          });
        }, [K, h]);
        const J = K.getVirtualItems(),
          Q = J[0]?.start ?? 0,
          X = K.getTotalSize(),
          Z = (0, o.Te)({
            estimateSize: (e) =>
              $[0]?.getVisibleCells()[e].column.getSize() ?? 0,
            count: $[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: d.useCallback(
              () => ("element" === I ? ee.current : window),
              [I],
            ),
            scrollToFn: (e, t, r) =>
              "window" === I ? (0, l.e8)(e, t, r) : (0, l.Ox)(e, t, r),
            rangeExtractor(e) {
              const t = $[0]?.getVisibleCells() ?? [],
                r = new Set((0, l.vp)(e));
              return (
                t.forEach((e, t) => {
                  e.column.getIsPinned() && r.add(t);
                }),
                Array.from(r).sort((e, t) => e - t)
              );
            },
            observeElementOffset: j,
            observeElementRect: (e, t) => ("window" === I ? x(e, t) : z(e, t)),
          });
        (0, d.useEffect)(() => {
          Z.measure();
        }, [V.current]),
          (0, d.useImperativeHandle)(
            t,
            () => ({
              getData: () => L.map((e) => e.original),
              getVisibleRows: () => $,
              getState: P.getState,
              getColumns: P.getAllColumns,
              getColumnDefs: () => k,
              setColumnFilters: P.setColumnFilters,
              resetColumnFilters: P.resetColumnFilters,
              setColumnFilterFnOverride: q,
              getColumnFilterFnOverride: () => W,
              getContainerElement: () => ee.current,
              getTableElement: () => E.current,
              scrollToColumn(e, t) {
                Z.scrollToIndex(e.getIndex(), t);
              },
            }),
            [
              L,
              $,
              P.setColumnFilters,
              P.resetColumnFilters,
              P.getState,
              P.getAllColumns,
              W,
              k,
              Z,
            ],
          );
        const ee = (0, d.useRef)(null),
          te = _ ? (p ?? 0) : 0;
        let re = 0;
        const ie = $[0]?.getVisibleCells(),
          ne = Z.getVirtualItems(),
          se = ne[ne.length - 1]?.end;
        for (const e of ne) {
          const t = ie[e.index];
          t?.column.getIsPinned() && (re += e.size);
        }
        return (0, i.jsx)(T, {
          table: P,
          setColumnSizeOverride: D,
          children: (0, i.jsx)("div", {
            className: c,
            ref: ee,
            style: {
              width: u,
              height: m,
              overflow: "element" === I ? "auto" : void 0,
              maxWidth: "fit-content",
              scrollPadding: `${te}px 0 0 ${re}px`,
            },
            children: (0, i.jsxs)("div", {
              role: "table",
              ref: E,
              "aria-rowcount": r.length,
              style: {
                minHeight: X,
                width: P.getTotalSize(),
                "--virtualPos": `${Q}px`,
                ...Y,
              },
              children: [
                P.getHeaderGroups().map((e) =>
                  (0, i.jsx)(
                    U,
                    { group: e, sticky: _, nHeaderHeight: p },
                    e.id,
                  ),
                ),
                J.map((e) =>
                  (0, i.jsx)(
                    O,
                    {
                      row: $[e.index],
                      size: e.size,
                      rowVirtualizer: Z,
                      index: e.index,
                      measureRef: K.measureElement,
                      scrollContainerRef: ee,
                      nItemHeight: h,
                      renderGroup: C,
                      rowEnd: se,
                    },
                    e.key,
                  ),
                ),
              ],
            }),
          }),
        });
      });
      function I(e) {
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
      function U(e) {
        const { group: t, sticky: r, nHeaderHeight: n } = e;
        return (0, i.jsx)("div", {
          role: "row",
          className: u()(
            g().FancyTableRow,
            g().FancyTableHeader,
            r && g().StickyHeader,
          ),
          children: t.headers.map((e, r) => {
            const s = t.headers[r - 1],
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
              (0, i.jsx)(
                q,
                {
                  header: e,
                  prevHeader: s,
                  HeaderElement: l,
                  nHeaderHeight: n,
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
      const O = d.memo(function (e) {
        const {
          row: t,
          size: r,
          rowVirtualizer: n,
          measureRef: s,
          index: a,
          nItemHeight: o,
          renderGroup: l,
        } = e;
        return (0, i.jsx)("div", {
          role: "row",
          className: u()(
            g().FancyTableRow,
            t.getCanExpand() && g().ExpandableRow,
          ),
          style: {
            minHeight: t.getCanExpand() ? void 0 : `${r}px`,
            transform: "translateY(var(--virtualPos))",
          },
          "data-even": a % 2 == 0,
          "data-index": a,
          ref: s,
          children: (0, i.jsx)(E, {
            row: t,
            rowVirtualizer: n,
            nItemHeight: o,
            renderGroup: l,
          }),
        });
      });
      function E(e) {
        const { row: t, rowVirtualizer: r, renderGroup: n } = e;
        if (t.getCanExpand()) {
          const e = n ?? (() => t.groupingValue);
          return (0, i.jsxs)("button", {
            className: g().RowGroup,
            "aria-expanded": t.getIsExpanded(),
            onClick: t.getToggleExpandedHandler(),
            children: [
              (0, i.jsx)("div", { className: g().GroupExpandIndicator }),
              e(t),
            ],
          });
        }
        const s = r.getVirtualItems(),
          a = t.getVisibleCells();
        let o,
          l = 0;
        return (0, i.jsx)(i.Fragment, {
          children: s.map((e) => {
            const t = a[e.index],
              n = t.column.getIsPinned();
            return (
              n ? (l += e.size) : void 0 === o && (o = e.start),
              (0, i.jsx)(
                A,
                {
                  cell: t,
                  rowVirtualizer: r,
                  index: e.index,
                  transform: n ? void 0 : `translateX(${o - l}px)`,
                },
                t.id,
              )
            );
          }),
        });
      }
      function W(e, t) {
        const r = (0, d.useContext)(F),
          i = e.columnDef.meta?.bGrowToFit,
          n = e.id,
          s = i ? e.getSize() : 0,
          a = e.getIsSorted();
        (0, d.useLayoutEffect)(() => {
          if (!i) return;
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
          l > s &&
            r.setColumnSizeOverride((e) => (e[n] > l ? e : { ...e, [n]: l }));
        }, [i, n, r, s, t, a]);
      }
      function q(e) {
        const {
            header: t,
            prevHeader: r,
            HeaderElement: n,
            nHeaderHeight: a,
            sortDirection: o,
            strTooltip: l,
            conditionalProps: c,
          } = e,
          m = (0, d.useRef)(null);
        return (
          W(t.column, m),
          (0, i.jsxs)(
            n,
            {
              role: "columnheader",
              ref: m,
              "data-pinned": !!t.column.getIsPinned(),
              className: u()(
                g().ColumnHeader,
                "button" === n && g().SortButton,
                t.column.columnDef.meta?.headerClassname,
              ),
              style: {
                width: `var(--header-${t.id}-size)`,
                height: void 0 !== a ? `${a}px` : void 0,
                ...I(t.column),
              },
              ...c,
              children: [
                r?.column.getCanResize() &&
                  (0, i.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => r.column.resetSize(),
                    onMouseDown: r.getResizeHandler(),
                    onTouchStart: r.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: u()(g().ResizeHandle, g().PrevResizeHandle),
                  }),
                t.isPlaceholder
                  ? null
                  : (0, s.Kv)(t.column.columnDef.header, t.getContext()),
                l && (0, i.jsx)(R.o, { tooltip: l }),
                o &&
                  !t.column.columnDef.meta?.bDisableSortButton &&
                  (0, i.jsx)("div", { className: g().SortIndicator }),
                t.column.getCanResize() &&
                  (0, i.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => t.column.resetSize(),
                    onMouseDown: t.getResizeHandler(),
                    onTouchStart: t.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: u()(
                      g().ResizeHandle,
                      t.column.getIsResizing() && g().IsResizing,
                    ),
                  }),
              ],
            },
            t.id,
          )
        );
      }
      function A(e) {
        const { cell: t, rowVirtualizer: r, index: s, transform: a } = e,
          o = d.useRef(null),
          l = (0, n.XB)(o, r.measure);
        return (
          W(t.column, o),
          (0, i.jsx)("div", {
            className: u()(
              g().FancyTableCell,
              t.column.columnDef.meta?.cellClassname,
            ),
            "data-index": s,
            "data-table-column-id": t.column.id,
            ref: l,
            style: {
              width: `var(--col-${t.column.id}-size)`,
              transform: a,
              ...I(t.column),
            },
            children: (0, i.jsx)(D, {
              CellComponent: t.column.columnDef.cell,
              context: t.getContext(),
            }),
          })
        );
      }
      const D = d.memo(
        function (e) {
          return (0, s.Kv)(e.CellComponent, e.context);
        },
        (e, t) => e.context.getValue() === t.context.getValue(),
      );
    },
    3577: (e, t, r) => {
      "use strict";
      function i() {
        let e, t;
        return {
          promise: new Promise((r, i) => {
            (e = r), (t = i);
          }),
          resolve: e,
          reject: t,
        };
      }
      function n(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      r.d(t, { x0: () => i, yI: () => n });
    },
    63556: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => m, O: () => d });
      var i = r(34629),
        n = r(14947),
        s = r(65946),
        a = r(22837),
        o = r(62490),
        l = r(6419),
        c = r(78327),
        u = r(91986);
      class d {
        m_eCurLang = (0, a.sfN)(c.TS.LANGUAGE);
        m_rgHasData = (0, o.$Y)([], a.bP9, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new u.l();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(e) {
          return (
            this.m_eCurLang != e &&
            ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
          );
        }
        SetHasLanguage(e) {
          e.forEach((e, t) => {
            this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
          });
        }
        BHasLanguageData(e) {
          return this.m_rgHasData[e];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(e) {
          e != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = e);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            d.s_globalSingletonStore || (d.s_globalSingletonStore = new d()),
            d.s_globalSingletonStore
          );
        }
        constructor() {
          (0, n.Gn)(this);
        }
      }
      function m() {
        return (0, s.q3)(() => d.Get().GetCurEditLanguage());
      }
      (0, i.Cg)([n.sH], d.prototype, "m_eCurLang", void 0),
        (0, i.Cg)([n.sH], d.prototype, "m_rgHasData", void 0),
        (0, i.Cg)([n.sH], d.prototype, "m_bHasLocalizationContext", void 0),
        (0, i.Cg)([l.o], d.prototype, "GetCurEditLanguage", null),
        (0, i.Cg)([l.o], d.prototype, "SetCurEditLanguage", null),
        (0, i.Cg)([n.XI.bound], d.prototype, "SetHasLanguage", null),
        (0, i.Cg)([l.o], d.prototype, "BHasLanguageData", null);
    },
    82817: (e, t, r) => {
      "use strict";
      r.d(t, {
        EG: () => o,
        II: () => h,
        N1: () => p,
        S2: () => m,
        Uz: () => d,
        aL: () => u,
        ab: () => s,
        qR: () => a,
        zB: () => g,
      });
      var i = r(3577),
        n = r(34214);
      function s(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg") || t.endsWith(".jpeg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function a(e) {
        switch (e) {
          case "image/jpeg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "video/mp4":
            return ".mp4";
          case "video/webm":
            return ".webm";
          case "text/vtt":
            return ".vtt";
          case "text/srt":
            return ".srt";
          case "image/webp":
            return ".webp";
        }
        return (
          console.error("ConvertMimeTypeToExtension:Unexepected mime type ", e),
          ".jpg"
        );
      }
      function o(e) {
        switch (e) {
          case n.bg.iS:
            return ".jpg";
          case n.bg.CK:
            return ".gif";
          case n.bg.dU:
            return ".png";
          case n.bg.pJ:
            return ".webm";
          case n.bg.nn:
            return ".mp4";
          case n.bg.pi:
            return ".srt";
          case n.bg.k7:
            return ".vtt";
          case n.bg.wD:
            return ".webp";
        }
      }
      function l(e) {
        const t = (0, i.x0)(),
          r = new Image();
        return (
          (r.onload = () => t.resolve(r)),
          (r.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              t.resolve(void 0);
          }),
          (r.src = e),
          t.promise
        );
      }
      function c(e) {
        const t = (0, i.x0)(),
          r = document.createElement("video");
        return (
          (r.preload = "metadata"),
          r.addEventListener("loadedmetadata", () => t.resolve(r)),
          (r.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              t.resolve(void 0);
          }),
          (r.src = e),
          t.promise
        );
      }
      function u(e) {
        return e.startsWith("image/");
      }
      function d(e) {
        return e.startsWith("video/");
      }
      function m(e, t) {
        return t ? c(e) : l(e);
      }
      async function g(e, t) {
        if (t) return c(URL.createObjectURL(e));
        {
          const t = (0, i.x0)(),
            r = new FileReader();
          (r.onload = () => t.resolve(r.result ?? void 0)),
            (r.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                r.error,
              ),
                t.resolve(void 0);
            }),
            r.readAsDataURL(e);
          const n = await t.promise;
          if (!n) return;
          return l(n.toString());
        }
      }
      function h(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
      function p(e, t) {
        if (!t) return e;
        const r = new Set([
          "content-length",
          "host",
          "origin",
          "referer",
          "user-agent",
          "cookie",
          "set-cookie",
          "connection",
          "upgrade",
        ]);
        for (const i of t) r.has(i.name.toLowerCase()) || (e[i.name] = i.value);
        return e;
      }
    },
  },
]);
