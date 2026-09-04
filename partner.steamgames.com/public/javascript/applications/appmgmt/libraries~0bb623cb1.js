/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [3667],
    {
      33551: (ue) => {
        "use strict";
        ue.exports = function ie(b, I) {
          if (b === I) return !0;
          if (b && I && typeof b == "object" && typeof I == "object") {
            if (b.constructor !== I.constructor) return !1;
            var B, P, y;
            if (Array.isArray(b)) {
              if (((B = b.length), B != I.length)) return !1;
              for (P = B; P-- !== 0; ) if (!ie(b[P], I[P])) return !1;
              return !0;
            }
            if (b.constructor === RegExp)
              return b.source === I.source && b.flags === I.flags;
            if (b.valueOf !== Object.prototype.valueOf)
              return b.valueOf() === I.valueOf();
            if (b.toString !== Object.prototype.toString)
              return b.toString() === I.toString();
            if (
              ((y = Object.keys(b)),
              (B = y.length),
              B !== Object.keys(I).length)
            )
              return !1;
            for (P = B; P-- !== 0; )
              if (!Object.prototype.hasOwnProperty.call(I, y[P])) return !1;
            for (P = B; P-- !== 0; ) {
              var $ = y[P];
              if (!ie(b[$], I[$])) return !1;
            }
            return !0;
          }
          return b !== b && I !== I;
        };
      },
      40323: function (ue, ie) {
        var b, I, B; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((P, y) => {
          (I = []),
            (b = y),
            (B = typeof b == "function" ? b.apply(ie, I) : b),
            B !== void 0 && (ue.exports = B);
        })(this, function P() {
          var y =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : y !== void 0
                    ? y
                    : {},
            $,
            X = !y.document && !!y.postMessage,
            he = y.IS_PAPA_WORKER || !1,
            ne = {},
            ye = 0,
            o = {};
          function Q(e) {
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
              function (t) {
                var r = de(t);
                (r.chunkSize = parseInt(r.chunkSize)),
                  t.step || t.chunk || (r.chunkSize = null),
                  (this._handle = new ce(r)),
                  ((this._handle.streamer = this)._config = r);
              }.call(this, e),
              (this.parseChunk = function (t, r) {
                var n = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < n) {
                  let h = this._config.newline;
                  h ||
                    ((i = this._config.quoteChar || '"'),
                    (h = this._handle.guessLineEndings(t, i))),
                    (t = [...t.split(h).slice(n)].join(h));
                }
                this.isFirstChunk &&
                  k(this._config.beforeFirstChunk) &&
                  (i = this._config.beforeFirstChunk(t)) !== void 0 &&
                  (t = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var n = this._partialLine + t,
                  i =
                    ((this._partialLine = ""),
                    this._handle.parse(n, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((t = i.meta.cursor),
                    (n =
                      (this._finished ||
                        ((this._partialLine = n.substring(t - this._baseIndex)),
                        (this._baseIndex = t)),
                      i && i.data && (this._rowCount += i.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    he)
                  )
                    y.postMessage({
                      results: i,
                      workerId: o.WORKER_ID,
                      finished: n,
                    });
                  else if (k(this._config.chunk) && !r) {
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
                      !n ||
                      !k(this._config.complete) ||
                      (i && i.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    n || (i && i.meta.paused) || this._nextChunk(),
                    i
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (t) {
                k(this._config.error)
                  ? this._config.error(t)
                  : he &&
                    this._config.error &&
                    y.postMessage({
                      workerId: o.WORKER_ID,
                      error: t,
                      finished: !1,
                    });
              });
          }
          function se(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
              Q.call(this, e),
              (this._nextChunk = X
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (r) {
                (this._input = r), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((t = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (t.withCredentials = this._config.withCredentials),
                    X ||
                      ((t.onload = Y(this._chunkLoaded, this)),
                      (t.onerror = Y(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !X,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var r,
                      n = this._config.downloadRequestHeaders;
                    for (r in n) t.setRequestHeader(r, n[r]);
                  }
                  var i;
                  this._config.chunkSize &&
                    ((i = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + i,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (h) {
                    this._chunkError(h.message);
                  }
                  X && t.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                t.readyState === 4 &&
                  (t.status < 200 || 400 <= t.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || t.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((r) =>
                            (r = r.getResponseHeader("Content-Range")) !== null
                              ? parseInt(r.substring(r.lastIndexOf("/") + 1))
                              : -1)(t)),
                      this.parseChunk(t.responseText)));
              }),
              (this._chunkError = function (r) {
                (r = t.statusText || r), this._sendError(new Error(r));
              });
          }
          function ae(e) {
            (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
              Q.call(this, e);
            var t,
              r,
              n = typeof FileReader < "u";
            (this.stream = function (i) {
              (this._input = i),
                (r = i.slice || i.webkitSlice || i.mozSlice),
                n
                  ? (((t = new FileReader()).onload = Y(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = Y(this._chunkError, this)))
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
                var i = this._input,
                  h =
                    (this._config.chunkSize &&
                      ((h = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (i = r.call(i, this._start, h))),
                    t.readAsText(i, this._config.encoding));
                n || this._chunkLoaded({ target: { result: h } });
              }),
              (this._chunkLoaded = function (i) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(i.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(t.error);
              });
          }
          function V(e) {
            var t;
            Q.call(this, (e = e || {})),
              (this.stream = function (r) {
                return (t = r), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var r, n;
                if (!this._finished)
                  return (
                    (r = this._config.chunkSize),
                    (t = r
                      ? ((n = t.substring(0, r)), t.substring(r))
                      : ((n = t), "")),
                    (this._finished = !t),
                    this.parseChunk(n)
                  );
              });
          }
          function oe(e) {
            Q.call(this, (e = e || {}));
            var t = [],
              r = !0,
              n = !1;
            (this.pause = function () {
              Q.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                Q.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (i) {
                (this._input = i),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                n && t.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (r = !0);
              }),
              (this._streamData = Y(function (i) {
                try {
                  t.push(
                    typeof i == "string"
                      ? i
                      : i.toString(this._config.encoding),
                  ),
                    r &&
                      ((r = !1),
                      this._checkIsFinished(),
                      this.parseChunk(t.shift()));
                } catch (h) {
                  this._streamError(h);
                }
              }, this)),
              (this._streamError = Y(function (i) {
                this._streamCleanUp(), this._sendError(i);
              }, this)),
              (this._streamEnd = Y(function () {
                this._streamCleanUp(), (n = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = Y(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function ce(e) {
            var t,
              r,
              n,
              i,
              h = Math.pow(2, 53),
              C = -h,
              U = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              q =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              l = this,
              R = 0,
              a = 0,
              F = !1,
              u = !1,
              c = [],
              s = { data: [], errors: [], meta: {} };
            function x(p) {
              return e.skipEmptyLines === "greedy"
                ? p.join("").trim() === ""
                : p.length === 1 && p[0].length === 0;
            }
            function S() {
              if (
                (s &&
                  n &&
                  (N(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      o.DefaultDelimiter +
                      "'",
                  ),
                  (n = !1)),
                e.skipEmptyLines &&
                  (s.data = s.data.filter(function (E) {
                    return !x(E);
                  })),
                L())
              ) {
                let E = function (D, v) {
                  k(e.transformHeader) && (D = e.transformHeader(D, v)),
                    c.push(D);
                };
                var f = E;
                if (s)
                  if (Array.isArray(s.data[0])) {
                    for (var p = 0; L() && p < s.data.length; p++)
                      s.data[p].forEach(E);
                    s.data.splice(0, 1);
                  } else s.data.forEach(E);
              }
              function _(E, D) {
                for (var v = e.header ? {} : [], m = 0; m < E.length; m++) {
                  var d = m,
                    j = E[m],
                    j = ((g, w) =>
                      ((A) => (
                        e.dynamicTypingFunction &&
                          e.dynamicTyping[A] === void 0 &&
                          (e.dynamicTyping[A] = e.dynamicTypingFunction(A)),
                        (e.dynamicTyping[A] || e.dynamicTyping) === !0
                      ))(g)
                        ? w === "true" ||
                          w === "TRUE" ||
                          (w !== "false" &&
                            w !== "FALSE" &&
                            (((A) => {
                              if (
                                U.test(A) &&
                                ((A = parseFloat(A)), C < A && A < h)
                              )
                                return 1;
                            })(w)
                              ? parseFloat(w)
                              : q.test(w)
                                ? new Date(w)
                                : w === ""
                                  ? null
                                  : w))
                        : w)(
                      (d = e.header
                        ? m >= c.length
                          ? "__parsed_extra"
                          : c[m]
                        : d),
                      (j = e.transform ? e.transform(j, d) : j),
                    );
                  d === "__parsed_extra"
                    ? ((v[d] = v[d] || []), v[d].push(j))
                    : (v[d] = j);
                }
                return (
                  e.header &&
                    (m > c.length
                      ? N(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            c.length +
                            " fields but parsed " +
                            m,
                          a + D,
                        )
                      : m < c.length &&
                        N(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            c.length +
                            " fields but parsed " +
                            m,
                          a + D,
                        )),
                  v
                );
              }
              var O;
              s &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((O = 1),
                !s.data.length || Array.isArray(s.data[0])
                  ? ((s.data = s.data.map(_)), (O = s.data.length))
                  : (s.data = _(s.data, 0)),
                e.header && s.meta && (s.meta.fields = c),
                (a += O));
            }
            function L() {
              return e.header && c.length === 0;
            }
            function N(p, _, O, f) {
              (p = { type: p, code: _, message: O }),
                f !== void 0 && (p.row = f),
                s.errors.push(p);
            }
            k(e.step) &&
              ((i = e.step),
              (e.step = function (p) {
                (s = p),
                  L()
                    ? S()
                    : (S(),
                      s.data.length !== 0 &&
                        ((R += p.data.length),
                        e.preview && R > e.preview
                          ? r.abort()
                          : ((s.data = s.data[0]), i(s, l))));
              })),
              (this.parse = function (p, _, O) {
                var f = e.quoteChar || '"',
                  f =
                    (e.newline || (e.newline = this.guessLineEndings(p, f)),
                    (n = !1),
                    e.delimiter
                      ? k(e.delimiter) &&
                        ((e.delimiter = e.delimiter(p)),
                        (s.meta.delimiter = e.delimiter))
                      : ((f = ((E, D, v, m, d) => {
                          var j, g, w, A;
                          d = d || [
                            ",",
                            "	",
                            "|",
                            ";",
                            o.RECORD_SEP,
                            o.UNIT_SEP,
                          ];
                          for (var Z = 0; Z < d.length; Z++) {
                            for (
                              var K,
                                te = d[Z],
                                M = 0,
                                W = 0,
                                T = 0,
                                z =
                                  ((w = void 0),
                                  new fe({
                                    comments: m,
                                    delimiter: te,
                                    newline: D,
                                    preview: 10,
                                  }).parse(E)),
                                J = 0;
                              J < z.data.length;
                              J++
                            )
                              v && x(z.data[J])
                                ? T++
                                : ((K = z.data[J].length),
                                  (W += K),
                                  w === void 0
                                    ? (w = K)
                                    : 0 < K &&
                                      ((M += Math.abs(K - w)), (w = K)));
                            0 < z.data.length && (W /= z.data.length - T),
                              (g === void 0 || M <= g) &&
                                (A === void 0 || A < W) &&
                                1.99 < W &&
                                ((g = M), (j = te), (A = W));
                          }
                          return {
                            successful: !!(e.delimiter = j),
                            bestDelimiter: j,
                          };
                        })(
                          p,
                          e.newline,
                          e.skipEmptyLines,
                          e.comments,
                          e.delimitersToGuess,
                        )).successful
                          ? (e.delimiter = f.bestDelimiter)
                          : ((n = !0), (e.delimiter = o.DefaultDelimiter)),
                        (s.meta.delimiter = e.delimiter)),
                    de(e));
                return (
                  e.preview && e.header && f.preview++,
                  (t = p),
                  (r = new fe(f)),
                  (s = r.parse(t, _, O)),
                  S(),
                  F ? { meta: { paused: !0 } } : s || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return F;
              }),
              (this.pause = function () {
                (F = !0),
                  r.abort(),
                  (t = k(e.chunk) ? "" : t.substring(r.getCharIndex()));
              }),
              (this.resume = function () {
                l.streamer._halted
                  ? ((F = !1), l.streamer.parseChunk(t, !0))
                  : setTimeout(l.resume, 3);
              }),
              (this.aborted = function () {
                return u;
              }),
              (this.abort = function () {
                (u = !0),
                  r.abort(),
                  (s.meta.aborted = !0),
                  k(e.complete) && e.complete(s),
                  (t = "");
              }),
              (this.guessLineEndings = function (E, f) {
                E = E.substring(0, 1048576);
                var f = new RegExp(ee(f) + "([^]*?)" + ee(f), "gm"),
                  O = (E = E.replace(f, "")).split("\r"),
                  f = E.split(`
`),
                  E = 1 < f.length && f[0].length < O[0].length;
                if (O.length === 1 || E)
                  return `
`;
                for (var D = 0, v = 0; v < O.length; v++)
                  O[v][0] ===
                    `
` && D++;
                return D >= O.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function ee(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function fe(e) {
            var t = (e = e || {}).delimiter,
              r = e.newline,
              n = e.comments,
              i = e.step,
              h = e.preview,
              C = e.fastMode,
              U = null,
              q = !1,
              l = e.quoteChar == null ? '"' : e.quoteChar,
              R = l;
            if (
              (e.escapeChar !== void 0 && (R = e.escapeChar),
              (typeof t != "string" || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              n === t)
            )
              throw new Error("Comment character same as delimiter");
            n === !0
              ? (n = "#")
              : (typeof n != "string" || -1 < o.BAD_DELIMITERS.indexOf(n)) &&
                (n = !1),
              r !==
                `
` &&
                r !== "\r" &&
                r !==
                  `\r
` &&
                (r = `
`);
            var a = 0,
              F = !1;
            (this.parse = function (u, c, s) {
              if (typeof u != "string")
                throw new Error("Input must be a string");
              var x = u.length,
                S = t.length,
                L = r.length,
                N = n.length,
                p = k(i),
                _ = [],
                O = [],
                f = [],
                E = (a = 0);
              if (!u) return M();
              if (C || (C !== !1 && u.indexOf(l) === -1)) {
                for (var D = u.split(r), v = 0; v < D.length; v++) {
                  if (((f = D[v]), (a += f.length), v !== D.length - 1))
                    a += r.length;
                  else if (s) return M();
                  if (!n || f.substring(0, N) !== n) {
                    if (p) {
                      if (((_ = []), A(f.split(t)), W(), F)) return M();
                    } else A(f.split(t));
                    if (h && h <= v) return (_ = _.slice(0, h)), M(!0);
                  }
                }
                return M();
              }
              for (
                var m = u.indexOf(t, a),
                  d = u.indexOf(r, a),
                  j = new RegExp(ee(R) + ee(l), "g"),
                  g = u.indexOf(l, a);
                ;
              )
                if (u[a] === l)
                  for (g = a, a++; ; ) {
                    if ((g = u.indexOf(l, g + 1)) === -1)
                      return (
                        s ||
                          O.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: _.length,
                            index: a,
                          }),
                        K()
                      );
                    if (g === x - 1) return K(u.substring(a, g).replace(j, l));
                    if (l === R && u[g + 1] === R) g++;
                    else if (l === R || g === 0 || u[g - 1] !== R) {
                      m !== -1 && m < g + 1 && (m = u.indexOf(t, g + 1));
                      var w = Z(
                        (d =
                          d !== -1 && d < g + 1 ? u.indexOf(r, g + 1) : d) ===
                          -1
                          ? m
                          : Math.min(m, d),
                      );
                      if (u.substr(g + 1 + w, S) === t) {
                        f.push(u.substring(a, g).replace(j, l)),
                          u[(a = g + 1 + w + S)] !== l && (g = u.indexOf(l, a)),
                          (m = u.indexOf(t, a)),
                          (d = u.indexOf(r, a));
                        break;
                      }
                      if (
                        ((w = Z(d)),
                        u.substring(g + 1 + w, g + 1 + w + L) === r)
                      ) {
                        if (
                          (f.push(u.substring(a, g).replace(j, l)),
                          te(g + 1 + w + L),
                          (m = u.indexOf(t, a)),
                          (g = u.indexOf(l, a)),
                          p && (W(), F))
                        )
                          return M();
                        if (h && _.length >= h) return M(!0);
                        break;
                      }
                      O.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: _.length,
                        index: a,
                      }),
                        g++;
                    }
                  }
                else if (n && f.length === 0 && u.substring(a, a + N) === n) {
                  if (d === -1) return M();
                  (a = d + L), (d = u.indexOf(r, a)), (m = u.indexOf(t, a));
                } else if (m !== -1 && (m < d || d === -1))
                  f.push(u.substring(a, m)), (a = m + S), (m = u.indexOf(t, a));
                else {
                  if (d === -1) break;
                  if ((f.push(u.substring(a, d)), te(d + L), p && (W(), F)))
                    return M();
                  if (h && _.length >= h) return M(!0);
                }
              return K();
              function A(T) {
                _.push(T), (E = a);
              }
              function Z(T) {
                var z = 0;
                return (z =
                  T !== -1 && (T = u.substring(g + 1, T)) && T.trim() === ""
                    ? T.length
                    : z);
              }
              function K(T) {
                return (
                  s ||
                    (T === void 0 && (T = u.substring(a)),
                    f.push(T),
                    (a = x),
                    A(f),
                    p && W()),
                  M()
                );
              }
              function te(T) {
                (a = T), A(f), (f = []), (d = u.indexOf(r, a));
              }
              function M(T) {
                if (e.header && !c && _.length && !q) {
                  var z = _[0],
                    J = Object.create(null),
                    le = new Set(z);
                  let ge = !1;
                  for (let G = 0; G < z.length; G++) {
                    let H = z[G];
                    if (
                      J[
                        (H = k(e.transformHeader) ? e.transformHeader(H, G) : H)
                      ]
                    ) {
                      let re,
                        me = J[H];
                      for (; (re = H + "_" + me), me++, le.has(re); );
                      le.add(re),
                        (z[G] = re),
                        J[H]++,
                        (ge = !0),
                        ((U = U === null ? {} : U)[re] = H);
                    } else (J[H] = 1), (z[G] = H);
                    le.add(H);
                  }
                  ge && console.warn("Duplicate headers found and renamed."),
                    (q = !0);
                }
                return {
                  data: _,
                  errors: O,
                  meta: {
                    delimiter: t,
                    linebreak: r,
                    aborted: F,
                    truncated: !!T,
                    cursor: E + (c || 0),
                    renamedHeaders: U,
                  },
                };
              }
              function W() {
                i(M()), (_ = []), (O = []);
              }
            }),
              (this.abort = function () {
                F = !0;
              }),
              (this.getCharIndex = function () {
                return a;
              });
          }
          function ke(e) {
            var t = e.data,
              r = ne[t.workerId],
              n = !1;
            if (t.error) r.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var i = {
                abort: function () {
                  (n = !0),
                    pe(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: _e,
                resume: _e,
              };
              if (k(r.userStep)) {
                for (
                  var h = 0;
                  h < t.results.data.length &&
                  (r.userStep(
                    {
                      data: t.results.data[h],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    i,
                  ),
                  !n);
                  h++
                );
                delete t.results;
              } else
                k(r.userChunk) &&
                  (r.userChunk(t.results, i, t.file), delete t.results);
            }
            t.finished && !n && pe(t.workerId, t.results);
          }
          function pe(e, t) {
            var r = ne[e];
            k(r.userComplete) && r.userComplete(t), r.terminate(), delete ne[e];
          }
          function _e() {
            throw new Error("Not implemented.");
          }
          function de(e) {
            if (typeof e != "object" || e === null) return e;
            var t,
              r = Array.isArray(e) ? [] : {};
            for (t in e) r[t] = de(e[t]);
            return r;
          }
          function Y(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function k(e) {
            return typeof e == "function";
          }
          return (
            (o.parse = function (e, t) {
              var r = (t = t || {}).dynamicTyping || !1;
              if (
                (k(r) && ((t.dynamicTypingFunction = r), (r = {})),
                (t.dynamicTyping = r),
                (t.transform = !!k(t.transform) && t.transform),
                !t.worker || !o.WORKERS_SUPPORTED)
              )
                return (
                  (r = null),
                  o.NODE_STREAM_INPUT,
                  typeof e == "string"
                    ? ((e = ((n) =>
                        n.charCodeAt(0) !== 65279 ? n : n.slice(1))(e)),
                      (r = new (t.download ? se : V)(t)))
                    : e.readable === !0 && k(e.read) && k(e.on)
                      ? (r = new oe(t))
                      : ((y.File && e instanceof File) ||
                          e instanceof Object) &&
                        (r = new ae(t)),
                  r.stream(e)
                );
              ((r = (() => {
                var n;
                return (
                  !!o.WORKERS_SUPPORTED &&
                  ((n = (() => {
                    var i = y.URL || y.webkitURL || null,
                      h = P.toString();
                    return (
                      o.BLOB_URL ||
                      (o.BLOB_URL = i.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            h,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((n = new y.Worker(n)).onmessage = ke),
                  (n.id = ye++),
                  (ne[n.id] = n))
                );
              })()).userStep = t.step),
                (r.userChunk = t.chunk),
                (r.userComplete = t.complete),
                (r.userError = t.error),
                (t.step = k(t.step)),
                (t.chunk = k(t.chunk)),
                (t.complete = k(t.complete)),
                (t.error = k(t.error)),
                delete t.worker,
                r.postMessage({ input: e, config: t, workerId: r.id });
            }),
            (o.unparse = function (e, t) {
              var r = !1,
                n = !0,
                i = ",",
                h = `\r
`,
                C = '"',
                U = C + C,
                q = !1,
                l = null,
                R = !1,
                a =
                  ((() => {
                    if (typeof t == "object") {
                      if (
                        (typeof t.delimiter != "string" ||
                          o.BAD_DELIMITERS.filter(function (c) {
                            return t.delimiter.indexOf(c) !== -1;
                          }).length ||
                          (i = t.delimiter),
                        (typeof t.quotes != "boolean" &&
                          typeof t.quotes != "function" &&
                          !Array.isArray(t.quotes)) ||
                          (r = t.quotes),
                        (typeof t.skipEmptyLines != "boolean" &&
                          typeof t.skipEmptyLines != "string") ||
                          (q = t.skipEmptyLines),
                        typeof t.newline == "string" && (h = t.newline),
                        typeof t.quoteChar == "string" && (C = t.quoteChar),
                        typeof t.header == "boolean" && (n = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (t.columns.length === 0)
                          throw new Error("Option columns is empty");
                        l = t.columns;
                      }
                      t.escapeChar !== void 0 && (U = t.escapeChar + C),
                        t.escapeFormulae instanceof RegExp
                          ? (R = t.escapeFormulae)
                          : typeof t.escapeFormulae == "boolean" &&
                            t.escapeFormulae &&
                            (R = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(ee(C), "g"));
              if (
                (typeof e == "string" && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return F(null, e, q);
                if (typeof e[0] == "object")
                  return F(l || Object.keys(e[0]), e, q);
              } else if (typeof e == "object")
                return (
                  typeof e.data == "string" && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || l),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : typeof e.data[0] == "object"
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      typeof e.data[0] == "object" ||
                      (e.data = [e.data])),
                  F(e.fields || [], e.data || [], q)
                );
              throw new Error("Unable to serialize unrecognized input");
              function F(c, s, x) {
                var S = "",
                  L =
                    (typeof c == "string" && (c = JSON.parse(c)),
                    typeof s == "string" && (s = JSON.parse(s)),
                    Array.isArray(c) && 0 < c.length),
                  N = !Array.isArray(s[0]);
                if (L && n) {
                  for (var p = 0; p < c.length; p++)
                    0 < p && (S += i), (S += u(c[p], p));
                  0 < s.length && (S += h);
                }
                for (var _ = 0; _ < s.length; _++) {
                  var O = (L ? c : s[_]).length,
                    f = !1,
                    E = L ? Object.keys(s[_]).length === 0 : s[_].length === 0;
                  if (
                    (x &&
                      !L &&
                      (f =
                        x === "greedy"
                          ? s[_].join("").trim() === ""
                          : s[_].length === 1 && s[_][0].length === 0),
                    x === "greedy" && L)
                  ) {
                    for (var D = [], v = 0; v < O; v++) {
                      var m = N ? c[v] : v;
                      D.push(s[_][m]);
                    }
                    f = D.join("").trim() === "";
                  }
                  if (!f) {
                    for (var d = 0; d < O; d++) {
                      0 < d && !E && (S += i);
                      var j = L && N ? c[d] : d;
                      S += u(s[_][j], d);
                    }
                    _ < s.length - 1 && (!x || (0 < O && !E)) && (S += h);
                  }
                }
                return S;
              }
              function u(c, s) {
                var x, S;
                return c == null
                  ? ""
                  : c.constructor === Date
                    ? JSON.stringify(c).slice(1, 25)
                    : ((S = !1),
                      R &&
                        typeof c == "string" &&
                        R.test(c) &&
                        ((c = "'" + c), (S = !0)),
                      (x = c.toString().replace(a, U)),
                      (S =
                        S ||
                        r === !0 ||
                        (typeof r == "function" && r(c, s)) ||
                        (Array.isArray(r) && r[s]) ||
                        ((L, N) => {
                          for (var p = 0; p < N.length; p++)
                            if (-1 < L.indexOf(N[p])) return !0;
                          return !1;
                        })(x, o.BAD_DELIMITERS) ||
                        -1 < x.indexOf(i) ||
                        x.charAt(0) === " " ||
                        x.charAt(x.length - 1) === " ")
                        ? C + x + C
                        : x);
              }
            }),
            (o.RECORD_SEP = ""),
            (o.UNIT_SEP = ""),
            (o.BYTE_ORDER_MARK = "\uFEFF"),
            (o.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              o.BYTE_ORDER_MARK,
            ]),
            (o.WORKERS_SUPPORTED = !X && !!y.Worker),
            (o.NODE_STREAM_INPUT = 1),
            (o.LocalChunkSize = 10485760),
            (o.RemoteChunkSize = 5242880),
            (o.DefaultDelimiter = ","),
            (o.Parser = fe),
            (o.ParserHandle = ce),
            (o.NetworkStreamer = se),
            (o.FileStreamer = ae),
            (o.StringStreamer = V),
            (o.ReadableStreamStreamer = oe),
            y.jQuery &&
              (($ = y.jQuery).fn.parse = function (e) {
                var t = e.config || {},
                  r = [];
                return (
                  this.each(function (h) {
                    if (
                      !(
                        $(this).prop("tagName").toUpperCase() === "INPUT" &&
                        $(this).attr("type").toLowerCase() === "file" &&
                        y.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var C = 0; C < this.files.length; C++)
                      r.push({
                        file: this.files[C],
                        inputElem: this,
                        instanceConfig: $.extend({}, t),
                      });
                  }),
                  n(),
                  this
                );
                function n() {
                  if (r.length === 0) k(e.complete) && e.complete();
                  else {
                    var h,
                      C,
                      U,
                      q,
                      l = r[0];
                    if (k(e.before)) {
                      var R = e.before(l.file, l.inputElem);
                      if (typeof R == "object") {
                        if (R.action === "abort")
                          return (
                            (h = "AbortError"),
                            (C = l.file),
                            (U = l.inputElem),
                            (q = R.reason),
                            void (k(e.error) && e.error({ name: h }, C, U, q))
                          );
                        if (R.action === "skip") return void i();
                        typeof R.config == "object" &&
                          (l.instanceConfig = $.extend(
                            l.instanceConfig,
                            R.config,
                          ));
                      } else if (R === "skip") return void i();
                    }
                    var a = l.instanceConfig.complete;
                    (l.instanceConfig.complete = function (F) {
                      k(a) && a(F, l.file, l.inputElem), i();
                    }),
                      o.parse(l.file, l.instanceConfig);
                  }
                }
                function i() {
                  r.splice(0, 1), n();
                }
              }),
            he &&
              (y.onmessage = function (e) {
                (e = e.data),
                  o.WORKER_ID === void 0 && e && (o.WORKER_ID = e.workerId),
                  typeof e.input == "string"
                    ? y.postMessage({
                        workerId: o.WORKER_ID,
                        results: o.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((y.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = o.parse(e.input, e.config)) &&
                      y.postMessage({
                        workerId: o.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((se.prototype = Object.create(Q.prototype)).constructor = se),
            ((ae.prototype = Object.create(Q.prototype)).constructor = ae),
            ((V.prototype = Object.create(V.prototype)).constructor = V),
            ((oe.prototype = Object.create(Q.prototype)).constructor = oe),
            o
          );
        });
      },
    },
  ]);
})();
