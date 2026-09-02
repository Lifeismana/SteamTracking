/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7224],
    {
      40323: function (me, pe) {
        var U, ee, ie; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((le, S) => {
          (ee = []),
            (U = S),
            (ie = typeof U == "function" ? U.apply(pe, ee) : U),
            ie !== void 0 && (me.exports = ie);
        })(this, function le() {
          var S =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : S !== void 0
                    ? S
                    : {},
            se,
            te = !S.document && !!S.postMessage,
            de = S.IS_PAPA_WORKER || !1,
            ae = {},
            ge = 0,
            o = {};
          function J(e) {
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
                var r = B(t);
                (r.chunkSize = parseInt(r.chunkSize)),
                  t.step || t.chunk || (r.chunkSize = null),
                  (this._handle = new m(r)),
                  ((this._handle.streamer = this)._config = r);
              }.call(this, e),
              (this.parseChunk = function (t, r) {
                var s = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < s) {
                  let a = this._config.newline;
                  a ||
                    ((i = this._config.quoteChar || '"'),
                    (a = this._handle.guessLineEndings(t, i))),
                    (t = [...t.split(a).slice(s)].join(a));
                }
                this.isFirstChunk &&
                  h(this._config.beforeFirstChunk) &&
                  (i = this._config.beforeFirstChunk(t)) !== void 0 &&
                  (t = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var s = this._partialLine + t,
                  i =
                    ((this._partialLine = ""),
                    this._handle.parse(s, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((t = i.meta.cursor),
                    (s =
                      (this._finished ||
                        ((this._partialLine = s.substring(t - this._baseIndex)),
                        (this._baseIndex = t)),
                      i && i.data && (this._rowCount += i.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    de)
                  )
                    S.postMessage({
                      results: i,
                      workerId: o.WORKER_ID,
                      finished: s,
                    });
                  else if (h(this._config.chunk) && !r) {
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
                      !h(this._config.complete) ||
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
              (this._sendError = function (t) {
                h(this._config.error)
                  ? this._config.error(t)
                  : de &&
                    this._config.error &&
                    S.postMessage({
                      workerId: o.WORKER_ID,
                      error: t,
                      finished: !1,
                    });
              });
          }
          function re(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
              J.call(this, e),
              (this._nextChunk = te
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
                    te ||
                      ((t.onload = T(this._chunkLoaded, this)),
                      (t.onerror = T(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !te,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var r,
                      s = this._config.downloadRequestHeaders;
                    for (r in s) t.setRequestHeader(r, s[r]);
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
                  } catch (a) {
                    this._chunkError(a.message);
                  }
                  te && t.status === 0 && this._chunkError();
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
          function Y(e) {
            (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
              J.call(this, e);
            var t,
              r,
              s = typeof FileReader < "u";
            (this.stream = function (i) {
              (this._input = i),
                (r = i.slice || i.webkitSlice || i.mozSlice),
                s
                  ? (((t = new FileReader()).onload = T(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = T(this._chunkError, this)))
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
                  a =
                    (this._config.chunkSize &&
                      ((a = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (i = r.call(i, this._start, a))),
                    t.readAsText(i, this._config.encoding));
                s || this._chunkLoaded({ target: { result: a } });
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
          function ne(e) {
            var t;
            J.call(this, (e = e || {})),
              (this.stream = function (r) {
                return (t = r), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var r, s;
                if (!this._finished)
                  return (
                    (r = this._config.chunkSize),
                    (t = r
                      ? ((s = t.substring(0, r)), t.substring(r))
                      : ((s = t), "")),
                    (this._finished = !t),
                    this.parseChunk(s)
                  );
              });
          }
          function oe(e) {
            J.call(this, (e = e || {}));
            var t = [],
              r = !0,
              s = !1;
            (this.pause = function () {
              J.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                J.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (i) {
                (this._input = i),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                s && t.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (r = !0);
              }),
              (this._streamData = T(function (i) {
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
                } catch (a) {
                  this._streamError(a);
                }
              }, this)),
              (this._streamError = T(function (i) {
                this._streamCleanUp(), this._sendError(i);
              }, this)),
              (this._streamEnd = T(function () {
                this._streamCleanUp(), (s = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = T(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function m(e) {
            var t,
              r,
              s,
              i,
              a = Math.pow(2, 53),
              E = -a,
              A = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              K =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              c = this,
              I = 0,
              u = 0,
              N = !1,
              l = !1,
              g = [],
              n = { data: [], errors: [], meta: {} };
            function M(_) {
              return e.skipEmptyLines === "greedy"
                ? _.join("").trim() === ""
                : _.length === 1 && _[0].length === 0;
            }
            function F() {
              if (
                (n &&
                  s &&
                  ($(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      o.DefaultDelimiter +
                      "'",
                  ),
                  (s = !1)),
                e.skipEmptyLines &&
                  (n.data = n.data.filter(function (w) {
                    return !M(w);
                  })),
                Q())
              ) {
                let w = function (P, O) {
                  h(e.transformHeader) && (P = e.transformHeader(P, O)),
                    g.push(P);
                };
                var d = w;
                if (n)
                  if (Array.isArray(n.data[0])) {
                    for (var _ = 0; Q() && _ < n.data.length; _++)
                      n.data[_].forEach(w);
                    n.data.splice(0, 1);
                  } else n.data.forEach(w);
              }
              function y(w, P) {
                for (var O = e.header ? {} : [], b = 0; b < w.length; b++) {
                  var f = b,
                    W = w[b],
                    W = ((v, C) =>
                      ((j) => (
                        e.dynamicTypingFunction &&
                          e.dynamicTyping[j] === void 0 &&
                          (e.dynamicTyping[j] = e.dynamicTypingFunction(j)),
                        (e.dynamicTyping[j] || e.dynamicTyping) === !0
                      ))(v)
                        ? C === "true" ||
                          C === "TRUE" ||
                          (C !== "false" &&
                            C !== "FALSE" &&
                            (((j) => {
                              if (
                                A.test(j) &&
                                ((j = parseFloat(j)), E < j && j < a)
                              )
                                return 1;
                            })(C)
                              ? parseFloat(C)
                              : K.test(C)
                                ? new Date(C)
                                : C === ""
                                  ? null
                                  : C))
                        : C)(
                      (f = e.header
                        ? b >= g.length
                          ? "__parsed_extra"
                          : g[b]
                        : f),
                      (W = e.transform ? e.transform(W, f) : W),
                    );
                  f === "__parsed_extra"
                    ? ((O[f] = O[f] || []), O[f].push(W))
                    : (O[f] = W);
                }
                return (
                  e.header &&
                    (b > g.length
                      ? $(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            g.length +
                            " fields but parsed " +
                            b,
                          u + P,
                        )
                      : b < g.length &&
                        $(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            g.length +
                            " fields but parsed " +
                            b,
                          u + P,
                        )),
                  O
                );
              }
              var L;
              n &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((L = 1),
                !n.data.length || Array.isArray(n.data[0])
                  ? ((n.data = n.data.map(y)), (L = n.data.length))
                  : (n.data = y(n.data, 0)),
                e.header && n.meta && (n.meta.fields = g),
                (u += L));
            }
            function Q() {
              return e.header && g.length === 0;
            }
            function $(_, y, L, d) {
              (_ = { type: _, code: y, message: L }),
                d !== void 0 && (_.row = d),
                n.errors.push(_);
            }
            h(e.step) &&
              ((i = e.step),
              (e.step = function (_) {
                (n = _),
                  Q()
                    ? F()
                    : (F(),
                      n.data.length !== 0 &&
                        ((I += _.data.length),
                        e.preview && I > e.preview
                          ? r.abort()
                          : ((n.data = n.data[0]), i(n, c))));
              })),
              (this.parse = function (_, y, L) {
                var d = e.quoteChar || '"',
                  d =
                    (e.newline || (e.newline = this.guessLineEndings(_, d)),
                    (s = !1),
                    e.delimiter
                      ? h(e.delimiter) &&
                        ((e.delimiter = e.delimiter(_)),
                        (n.meta.delimiter = e.delimiter))
                      : ((d = ((w, P, O, b, f) => {
                          var W, v, C, j;
                          f = f || [
                            ",",
                            "	",
                            "|",
                            ";",
                            o.RECORD_SEP,
                            o.UNIT_SEP,
                          ];
                          for (var he = 0; he < f.length; he++) {
                            for (
                              var Z,
                                fe = f[he],
                                H = 0,
                                G = 0,
                                z = 0,
                                q =
                                  ((C = void 0),
                                  new R({
                                    comments: b,
                                    delimiter: fe,
                                    newline: P,
                                    preview: 10,
                                  }).parse(w)),
                                V = 0;
                              V < q.data.length;
                              V++
                            )
                              O && M(q.data[V])
                                ? z++
                                : ((Z = q.data[V].length),
                                  (G += Z),
                                  C === void 0
                                    ? (C = Z)
                                    : 0 < Z &&
                                      ((H += Math.abs(Z - C)), (C = Z)));
                            0 < q.data.length && (G /= q.data.length - z),
                              (v === void 0 || H <= v) &&
                                (j === void 0 || j < G) &&
                                1.99 < G &&
                                ((v = H), (W = fe), (j = G));
                          }
                          return {
                            successful: !!(e.delimiter = W),
                            bestDelimiter: W,
                          };
                        })(
                          _,
                          e.newline,
                          e.skipEmptyLines,
                          e.comments,
                          e.delimitersToGuess,
                        )).successful
                          ? (e.delimiter = d.bestDelimiter)
                          : ((s = !0), (e.delimiter = o.DefaultDelimiter)),
                        (n.meta.delimiter = e.delimiter)),
                    B(e));
                return (
                  e.preview && e.header && d.preview++,
                  (t = _),
                  (r = new R(d)),
                  (n = r.parse(t, y, L)),
                  F(),
                  N ? { meta: { paused: !0 } } : n || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return N;
              }),
              (this.pause = function () {
                (N = !0),
                  r.abort(),
                  (t = h(e.chunk) ? "" : t.substring(r.getCharIndex()));
              }),
              (this.resume = function () {
                c.streamer._halted
                  ? ((N = !1), c.streamer.parseChunk(t, !0))
                  : setTimeout(c.resume, 3);
              }),
              (this.aborted = function () {
                return l;
              }),
              (this.abort = function () {
                (l = !0),
                  r.abort(),
                  (n.meta.aborted = !0),
                  h(e.complete) && e.complete(n),
                  (t = "");
              }),
              (this.guessLineEndings = function (w, d) {
                w = w.substring(0, 1048576);
                var d = new RegExp(p(d) + "([^]*?)" + p(d), "gm"),
                  L = (w = w.replace(d, "")).split("\r"),
                  d = w.split(`
`),
                  w = 1 < d.length && d[0].length < L[0].length;
                if (L.length === 1 || w)
                  return `
`;
                for (var P = 0, O = 0; O < L.length; O++)
                  L[O][0] ===
                    `
` && P++;
                return P >= L.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function R(e) {
            var t = (e = e || {}).delimiter,
              r = e.newline,
              s = e.comments,
              i = e.step,
              a = e.preview,
              E = e.fastMode,
              A = null,
              K = !1,
              c = e.quoteChar == null ? '"' : e.quoteChar,
              I = c;
            if (
              (e.escapeChar !== void 0 && (I = e.escapeChar),
              (typeof t != "string" || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              s === t)
            )
              throw new Error("Comment character same as delimiter");
            s === !0
              ? (s = "#")
              : (typeof s != "string" || -1 < o.BAD_DELIMITERS.indexOf(s)) &&
                (s = !1),
              r !==
                `
` &&
                r !== "\r" &&
                r !==
                  `\r
` &&
                (r = `
`);
            var u = 0,
              N = !1;
            (this.parse = function (l, g, n) {
              if (typeof l != "string")
                throw new Error("Input must be a string");
              var M = l.length,
                F = t.length,
                Q = r.length,
                $ = s.length,
                _ = h(i),
                y = [],
                L = [],
                d = [],
                w = (u = 0);
              if (!l) return H();
              if (E || (E !== !1 && l.indexOf(c) === -1)) {
                for (var P = l.split(r), O = 0; O < P.length; O++) {
                  if (((d = P[O]), (u += d.length), O !== P.length - 1))
                    u += r.length;
                  else if (n) return H();
                  if (!s || d.substring(0, $) !== s) {
                    if (_) {
                      if (((y = []), j(d.split(t)), G(), N)) return H();
                    } else j(d.split(t));
                    if (a && a <= O) return (y = y.slice(0, a)), H(!0);
                  }
                }
                return H();
              }
              for (
                var b = l.indexOf(t, u),
                  f = l.indexOf(r, u),
                  W = new RegExp(p(I) + p(c), "g"),
                  v = l.indexOf(c, u);
                ;
              )
                if (l[u] === c)
                  for (v = u, u++; ; ) {
                    if ((v = l.indexOf(c, v + 1)) === -1)
                      return (
                        n ||
                          L.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: y.length,
                            index: u,
                          }),
                        Z()
                      );
                    if (v === M - 1) return Z(l.substring(u, v).replace(W, c));
                    if (c === I && l[v + 1] === I) v++;
                    else if (c === I || v === 0 || l[v - 1] !== I) {
                      b !== -1 && b < v + 1 && (b = l.indexOf(t, v + 1));
                      var C = he(
                        (f =
                          f !== -1 && f < v + 1 ? l.indexOf(r, v + 1) : f) ===
                          -1
                          ? b
                          : Math.min(b, f),
                      );
                      if (l.substr(v + 1 + C, F) === t) {
                        d.push(l.substring(u, v).replace(W, c)),
                          l[(u = v + 1 + C + F)] !== c && (v = l.indexOf(c, u)),
                          (b = l.indexOf(t, u)),
                          (f = l.indexOf(r, u));
                        break;
                      }
                      if (
                        ((C = he(f)),
                        l.substring(v + 1 + C, v + 1 + C + Q) === r)
                      ) {
                        if (
                          (d.push(l.substring(u, v).replace(W, c)),
                          fe(v + 1 + C + Q),
                          (b = l.indexOf(t, u)),
                          (v = l.indexOf(c, u)),
                          _ && (G(), N))
                        )
                          return H();
                        if (a && y.length >= a) return H(!0);
                        break;
                      }
                      L.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: y.length,
                        index: u,
                      }),
                        v++;
                    }
                  }
                else if (s && d.length === 0 && l.substring(u, u + $) === s) {
                  if (f === -1) return H();
                  (u = f + Q), (f = l.indexOf(r, u)), (b = l.indexOf(t, u));
                } else if (b !== -1 && (b < f || f === -1))
                  d.push(l.substring(u, b)), (u = b + F), (b = l.indexOf(t, u));
                else {
                  if (f === -1) break;
                  if ((d.push(l.substring(u, f)), fe(f + Q), _ && (G(), N)))
                    return H();
                  if (a && y.length >= a) return H(!0);
                }
              return Z();
              function j(z) {
                y.push(z), (w = u);
              }
              function he(z) {
                var q = 0;
                return (q =
                  z !== -1 && (z = l.substring(v + 1, z)) && z.trim() === ""
                    ? z.length
                    : q);
              }
              function Z(z) {
                return (
                  n ||
                    (z === void 0 && (z = l.substring(u)),
                    d.push(z),
                    (u = M),
                    j(d),
                    _ && G()),
                  H()
                );
              }
              function fe(z) {
                (u = z), j(d), (d = []), (f = l.indexOf(r, u));
              }
              function H(z) {
                if (e.header && !g && y.length && !K) {
                  var q = y[0],
                    V = Object.create(null),
                    _e = new Set(q);
                  let ye = !1;
                  for (let ue = 0; ue < q.length; ue++) {
                    let X = q[ue];
                    if (
                      V[
                        (X = h(e.transformHeader)
                          ? e.transformHeader(X, ue)
                          : X)
                      ]
                    ) {
                      let ce,
                        ve = V[X];
                      for (; (ce = X + "_" + ve), ve++, _e.has(ce); );
                      _e.add(ce),
                        (q[ue] = ce),
                        V[X]++,
                        (ye = !0),
                        ((A = A === null ? {} : A)[ce] = X);
                    } else (V[X] = 1), (q[ue] = X);
                    _e.add(X);
                  }
                  ye && console.warn("Duplicate headers found and renamed."),
                    (K = !0);
                }
                return {
                  data: y,
                  errors: L,
                  meta: {
                    delimiter: t,
                    linebreak: r,
                    aborted: N,
                    truncated: !!z,
                    cursor: w + (g || 0),
                    renamedHeaders: A,
                  },
                };
              }
              function G() {
                i(H()), (y = []), (L = []);
              }
            }),
              (this.abort = function () {
                N = !0;
              }),
              (this.getCharIndex = function () {
                return u;
              });
          }
          function k(e) {
            var t = e.data,
              r = ae[t.workerId],
              s = !1;
            if (t.error) r.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var i = {
                abort: function () {
                  (s = !0),
                    x(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: D,
                resume: D,
              };
              if (h(r.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (r.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    i,
                  ),
                  !s);
                  a++
                );
                delete t.results;
              } else
                h(r.userChunk) &&
                  (r.userChunk(t.results, i, t.file), delete t.results);
            }
            t.finished && !s && x(t.workerId, t.results);
          }
          function x(e, t) {
            var r = ae[e];
            h(r.userComplete) && r.userComplete(t), r.terminate(), delete ae[e];
          }
          function D() {
            throw new Error("Not implemented.");
          }
          function B(e) {
            if (typeof e != "object" || e === null) return e;
            var t,
              r = Array.isArray(e) ? [] : {};
            for (t in e) r[t] = B(e[t]);
            return r;
          }
          function T(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function h(e) {
            return typeof e == "function";
          }
          return (
            (o.parse = function (e, t) {
              var r = (t = t || {}).dynamicTyping || !1;
              if (
                (h(r) && ((t.dynamicTypingFunction = r), (r = {})),
                (t.dynamicTyping = r),
                (t.transform = !!h(t.transform) && t.transform),
                !t.worker || !o.WORKERS_SUPPORTED)
              )
                return (
                  (r = null),
                  o.NODE_STREAM_INPUT,
                  typeof e == "string"
                    ? ((e = ((s) =>
                        s.charCodeAt(0) !== 65279 ? s : s.slice(1))(e)),
                      (r = new (t.download ? re : ne)(t)))
                    : e.readable === !0 && h(e.read) && h(e.on)
                      ? (r = new oe(t))
                      : ((S.File && e instanceof File) ||
                          e instanceof Object) &&
                        (r = new Y(t)),
                  r.stream(e)
                );
              ((r = (() => {
                var s;
                return (
                  !!o.WORKERS_SUPPORTED &&
                  ((s = (() => {
                    var i = S.URL || S.webkitURL || null,
                      a = le.toString();
                    return (
                      o.BLOB_URL ||
                      (o.BLOB_URL = i.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            a,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((s = new S.Worker(s)).onmessage = k),
                  (s.id = ge++),
                  (ae[s.id] = s))
                );
              })()).userStep = t.step),
                (r.userChunk = t.chunk),
                (r.userComplete = t.complete),
                (r.userError = t.error),
                (t.step = h(t.step)),
                (t.chunk = h(t.chunk)),
                (t.complete = h(t.complete)),
                (t.error = h(t.error)),
                delete t.worker,
                r.postMessage({ input: e, config: t, workerId: r.id });
            }),
            (o.unparse = function (e, t) {
              var r = !1,
                s = !0,
                i = ",",
                a = `\r
`,
                E = '"',
                A = E + E,
                K = !1,
                c = null,
                I = !1,
                u =
                  ((() => {
                    if (typeof t == "object") {
                      if (
                        (typeof t.delimiter != "string" ||
                          o.BAD_DELIMITERS.filter(function (g) {
                            return t.delimiter.indexOf(g) !== -1;
                          }).length ||
                          (i = t.delimiter),
                        (typeof t.quotes != "boolean" &&
                          typeof t.quotes != "function" &&
                          !Array.isArray(t.quotes)) ||
                          (r = t.quotes),
                        (typeof t.skipEmptyLines != "boolean" &&
                          typeof t.skipEmptyLines != "string") ||
                          (K = t.skipEmptyLines),
                        typeof t.newline == "string" && (a = t.newline),
                        typeof t.quoteChar == "string" && (E = t.quoteChar),
                        typeof t.header == "boolean" && (s = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (t.columns.length === 0)
                          throw new Error("Option columns is empty");
                        c = t.columns;
                      }
                      t.escapeChar !== void 0 && (A = t.escapeChar + E),
                        t.escapeFormulae instanceof RegExp
                          ? (I = t.escapeFormulae)
                          : typeof t.escapeFormulae == "boolean" &&
                            t.escapeFormulae &&
                            (I = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(p(E), "g"));
              if (
                (typeof e == "string" && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return N(null, e, K);
                if (typeof e[0] == "object")
                  return N(c || Object.keys(e[0]), e, K);
              } else if (typeof e == "object")
                return (
                  typeof e.data == "string" && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || c),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : typeof e.data[0] == "object"
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      typeof e.data[0] == "object" ||
                      (e.data = [e.data])),
                  N(e.fields || [], e.data || [], K)
                );
              throw new Error("Unable to serialize unrecognized input");
              function N(g, n, M) {
                var F = "",
                  Q =
                    (typeof g == "string" && (g = JSON.parse(g)),
                    typeof n == "string" && (n = JSON.parse(n)),
                    Array.isArray(g) && 0 < g.length),
                  $ = !Array.isArray(n[0]);
                if (Q && s) {
                  for (var _ = 0; _ < g.length; _++)
                    0 < _ && (F += i), (F += l(g[_], _));
                  0 < n.length && (F += a);
                }
                for (var y = 0; y < n.length; y++) {
                  var L = (Q ? g : n[y]).length,
                    d = !1,
                    w = Q ? Object.keys(n[y]).length === 0 : n[y].length === 0;
                  if (
                    (M &&
                      !Q &&
                      (d =
                        M === "greedy"
                          ? n[y].join("").trim() === ""
                          : n[y].length === 1 && n[y][0].length === 0),
                    M === "greedy" && Q)
                  ) {
                    for (var P = [], O = 0; O < L; O++) {
                      var b = $ ? g[O] : O;
                      P.push(n[y][b]);
                    }
                    d = P.join("").trim() === "";
                  }
                  if (!d) {
                    for (var f = 0; f < L; f++) {
                      0 < f && !w && (F += i);
                      var W = Q && $ ? g[f] : f;
                      F += l(n[y][W], f);
                    }
                    y < n.length - 1 && (!M || (0 < L && !w)) && (F += a);
                  }
                }
                return F;
              }
              function l(g, n) {
                var M, F;
                return g == null
                  ? ""
                  : g.constructor === Date
                    ? JSON.stringify(g).slice(1, 25)
                    : ((F = !1),
                      I &&
                        typeof g == "string" &&
                        I.test(g) &&
                        ((g = "'" + g), (F = !0)),
                      (M = g.toString().replace(u, A)),
                      (F =
                        F ||
                        r === !0 ||
                        (typeof r == "function" && r(g, n)) ||
                        (Array.isArray(r) && r[n]) ||
                        ((Q, $) => {
                          for (var _ = 0; _ < $.length; _++)
                            if (-1 < Q.indexOf($[_])) return !0;
                          return !1;
                        })(M, o.BAD_DELIMITERS) ||
                        -1 < M.indexOf(i) ||
                        M.charAt(0) === " " ||
                        M.charAt(M.length - 1) === " ")
                        ? E + M + E
                        : M);
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
            (o.WORKERS_SUPPORTED = !te && !!S.Worker),
            (o.NODE_STREAM_INPUT = 1),
            (o.LocalChunkSize = 10485760),
            (o.RemoteChunkSize = 5242880),
            (o.DefaultDelimiter = ","),
            (o.Parser = R),
            (o.ParserHandle = m),
            (o.NetworkStreamer = re),
            (o.FileStreamer = Y),
            (o.StringStreamer = ne),
            (o.ReadableStreamStreamer = oe),
            S.jQuery &&
              ((se = S.jQuery).fn.parse = function (e) {
                var t = e.config || {},
                  r = [];
                return (
                  this.each(function (a) {
                    if (
                      !(
                        se(this).prop("tagName").toUpperCase() === "INPUT" &&
                        se(this).attr("type").toLowerCase() === "file" &&
                        S.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var E = 0; E < this.files.length; E++)
                      r.push({
                        file: this.files[E],
                        inputElem: this,
                        instanceConfig: se.extend({}, t),
                      });
                  }),
                  s(),
                  this
                );
                function s() {
                  if (r.length === 0) h(e.complete) && e.complete();
                  else {
                    var a,
                      E,
                      A,
                      K,
                      c = r[0];
                    if (h(e.before)) {
                      var I = e.before(c.file, c.inputElem);
                      if (typeof I == "object") {
                        if (I.action === "abort")
                          return (
                            (a = "AbortError"),
                            (E = c.file),
                            (A = c.inputElem),
                            (K = I.reason),
                            void (h(e.error) && e.error({ name: a }, E, A, K))
                          );
                        if (I.action === "skip") return void i();
                        typeof I.config == "object" &&
                          (c.instanceConfig = se.extend(
                            c.instanceConfig,
                            I.config,
                          ));
                      } else if (I === "skip") return void i();
                    }
                    var u = c.instanceConfig.complete;
                    (c.instanceConfig.complete = function (N) {
                      h(u) && u(N, c.file, c.inputElem), i();
                    }),
                      o.parse(c.file, c.instanceConfig);
                  }
                }
                function i() {
                  r.splice(0, 1), s();
                }
              }),
            de &&
              (S.onmessage = function (e) {
                (e = e.data),
                  o.WORKER_ID === void 0 && e && (o.WORKER_ID = e.workerId),
                  typeof e.input == "string"
                    ? S.postMessage({
                        workerId: o.WORKER_ID,
                        results: o.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((S.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = o.parse(e.input, e.config)) &&
                      S.postMessage({
                        workerId: o.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((re.prototype = Object.create(J.prototype)).constructor = re),
            ((Y.prototype = Object.create(J.prototype)).constructor = Y),
            ((ne.prototype = Object.create(ne.prototype)).constructor = ne),
            ((oe.prototype = Object.create(J.prototype)).constructor = oe),
            o
          );
        });
      },
      54806: (me, pe, U) => {
        "use strict";
        U.d(pe, { E: () => oe });
        var ee = U(90626),
          ie = U(86709),
          le = U(45747),
          S = U(74500),
          se = U(57168);
        function te(m, p) {
          return m.filter((R) => !p.includes(R));
        }
        function de(m, p, R) {
          const k = m.slice(0);
          return (k[p] = R), k;
        }
        var ae = class extends S.Q {
            #s;
            #e;
            #i;
            #n;
            #t;
            #r;
            #o;
            #h;
            constructor(m, p, R) {
              super(),
                (this.#s = m),
                (this.#n = R),
                (this.#i = []),
                (this.#t = []),
                (this.#e = []),
                this.setQueries(p);
            }
            onSubscribe() {
              this.listeners.size === 1 &&
                this.#t.forEach((m) => {
                  m.subscribe((p) => {
                    this.#d(m, p);
                  });
                });
            }
            onUnsubscribe() {
              this.listeners.size || this.destroy();
            }
            destroy() {
              (this.listeners = new Set()),
                this.#t.forEach((m) => {
                  m.destroy();
                });
            }
            setQueries(m, p, R) {
              (this.#i = m),
                (this.#n = p),
                ie.j.batch(() => {
                  const k = this.#t,
                    x = this.#a(this.#i);
                  x.forEach((h) =>
                    h.observer.setOptions(h.defaultedQueryOptions, R),
                  );
                  const D = x.map((h) => h.observer),
                    B = D.map((h) => h.getCurrentResult()),
                    T = D.some((h, e) => h !== k[e]);
                  (k.length === D.length && !T) ||
                    ((this.#t = D),
                    (this.#e = B),
                    this.hasListeners() &&
                      (te(k, D).forEach((h) => {
                        h.destroy();
                      }),
                      te(D, k).forEach((h) => {
                        h.subscribe((e) => {
                          this.#d(h, e);
                        });
                      }),
                      this.#f()));
                });
            }
            getCurrentResult() {
              return this.#e;
            }
            getQueries() {
              return this.#t.map((m) => m.getCurrentQuery());
            }
            getObservers() {
              return this.#t;
            }
            getOptimisticResult(m, p) {
              const k = this.#a(m).map((x) =>
                x.observer.getOptimisticResult(x.defaultedQueryOptions),
              );
              return [k, (x) => this.#l(x ?? k, p), () => this.#u(k, m)];
            }
            #u(m, p) {
              const R = this.#a(p);
              return R.map((k, x) => {
                const D = m[x];
                return k.defaultedQueryOptions.notifyOnChangeProps
                  ? D
                  : k.observer.trackResult(D, (B) => {
                      R.forEach((T) => {
                        T.observer.trackProp(B);
                      });
                    });
              });
            }
            #l(m, p) {
              return p
                ? ((!this.#r || this.#e !== this.#h || p !== this.#o) &&
                    ((this.#o = p),
                    (this.#h = this.#e),
                    (this.#r = (0, se.BH)(this.#r, p(m)))),
                  this.#r)
                : m;
            }
            #a(m) {
              const p = new Map(this.#t.map((k) => [k.options.queryHash, k])),
                R = [];
              return (
                m.forEach((k) => {
                  const x = this.#s.defaultQueryOptions(k),
                    D = p.get(x.queryHash);
                  D
                    ? R.push({ defaultedQueryOptions: x, observer: D })
                    : R.push({
                        defaultedQueryOptions: x,
                        observer: new le.$(this.#s, x),
                      });
                }),
                R
              );
            }
            #d(m, p) {
              const R = this.#t.indexOf(m);
              R !== -1 && ((this.#e = de(this.#e, R, p)), this.#f());
            }
            #f() {
              if (this.hasListeners()) {
                const m = this.#r,
                  p = this.#l(this.#u(this.#e, this.#i), this.#n?.combine);
                m !== p &&
                  ie.j.batch(() => {
                    this.listeners.forEach((R) => {
                      R(this.#e);
                    });
                  });
              }
            }
          },
          ge = U(75233),
          o = U(22730),
          J = U(43424),
          re = U(19086),
          Y = U(44407),
          ne = U(19866);
        function oe({ queries: m, ...p }, R) {
          const k = (0, ge.jE)(R),
            x = (0, o.w)(),
            D = (0, J.h)(),
            B = ee.useMemo(
              () =>
                m.map((a) => {
                  const E = k.defaultQueryOptions(a);
                  return (
                    (E._optimisticResults = x ? "isRestoring" : "optimistic"), E
                  );
                }),
              [m, k, x],
            );
          B.forEach((a) => {
            (0, Y.jv)(a), (0, re.LJ)(a, D);
          }),
            (0, re.wZ)(D);
          const [T] = ee.useState(() => new ae(k, B, p)),
            [h, e, t] = T.getOptimisticResult(B, p.combine);
          ee.useSyncExternalStore(
            ee.useCallback(
              (a) => (x ? ne.l : T.subscribe(ie.j.batchCalls(a))),
              [T, x],
            ),
            () => T.getCurrentResult(),
            () => T.getCurrentResult(),
          ),
            ee.useEffect(() => {
              T.setQueries(B, p, { listeners: !1 });
            }, [B, p, T]);
          const s = h.some((a, E) => (0, Y.EU)(B[E], a))
            ? h.flatMap((a, E) => {
                const A = B[E];
                if (A) {
                  const K = new le.$(k, A);
                  if ((0, Y.EU)(A, a)) return (0, Y.iL)(A, K, D);
                  (0, Y.nE)(a, x) && (0, Y.iL)(A, K, D);
                }
                return [];
              })
            : [];
          if (s.length > 0) throw Promise.all(s);
          const i = h.find((a, E) => {
            const A = B[E];
            return (
              A &&
              (0, re.$1)({
                result: a,
                errorResetBoundary: D,
                throwOnError: A.throwOnError,
                query: k.getQueryCache().get(A.queryHash),
              })
            );
          });
          if (i?.error) throw i.error;
          return e(t());
        }
      },
    },
  ]);
})();
