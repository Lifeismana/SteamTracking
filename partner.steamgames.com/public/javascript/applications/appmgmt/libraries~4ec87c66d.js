/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1084],
  {
    67406: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => l });
      var r = n(98403),
        o = n(20283),
        i = n(90150),
        a = n(73077),
        s = n(12260),
        l = (0, r.gu)({
          chartName: "BarChart",
          GraphicalChild: o.y,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            { axisType: "xAxis", AxisComp: i.W },
            { axisType: "yAxis", AxisComp: a.h },
          ],
          formatAxisMap: s.pr,
        });
    },
    62759: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => l });
      var r = n(98403),
        o = n(90865),
        i = n(90150),
        a = n(73077),
        s = n(12260),
        l = (0, r.gu)({
          chartName: "LineChart",
          GraphicalChild: o.N,
          axisComponents: [
            { axisType: "xAxis", AxisComp: i.W },
            { axisType: "yAxis", AxisComp: a.h },
          ],
          formatAxisMap: s.pr,
        });
    },
    22586: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, n) {
          t.prototype.isBetween = function (e, t, r, o) {
            var i = n(e),
              a = n(t),
              s = "(" === (o = o || "()")[0],
              l = ")" === o[1];
            return (
              ((s ? this.isAfter(i, r) : !this.isBefore(i, r)) &&
                (l ? this.isBefore(a, r) : !this.isAfter(a, r))) ||
              ((s ? this.isBefore(i, r) : !this.isAfter(i, r)) &&
                (l ? this.isAfter(a, r) : !this.isBefore(a, r)))
            );
          };
        };
      })();
    },
    20237: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t) {
          t.prototype.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          };
        };
      })();
    },
    83632: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t) {
          t.prototype.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          };
        };
      })();
    },
    43334: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, n) {
          var r = t.prototype,
            o = function (e) {
              return e && (e.indexOf ? e : e.s);
            },
            i = function (e, t, n, r, i) {
              var a = e.name ? e : e.$locale(),
                s = o(a[t]),
                l = o(a[n]),
                c =
                  s ||
                  l.map(function (e) {
                    return e.slice(0, r);
                  });
              if (!i) return c;
              var u = a.weekStart;
              return c.map(function (e, t) {
                return c[(t + (u || 0)) % 7];
              });
            },
            a = function () {
              return n.Ls[n.locale()];
            },
            s = function (e, t) {
              return (
                e.formats[t] ||
                (function (e) {
                  return e.replace(
                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                    function (e, t, n) {
                      return t || n.slice(1);
                    },
                  );
                })(e.formats[t.toUpperCase()])
              );
            },
            l = function () {
              var e = this;
              return {
                months: function (t) {
                  return t ? t.format("MMMM") : i(e, "months");
                },
                monthsShort: function (t) {
                  return t ? t.format("MMM") : i(e, "monthsShort", "months", 3);
                },
                firstDayOfWeek: function () {
                  return e.$locale().weekStart || 0;
                },
                weekdays: function (t) {
                  return t ? t.format("dddd") : i(e, "weekdays");
                },
                weekdaysMin: function (t) {
                  return t
                    ? t.format("dd")
                    : i(e, "weekdaysMin", "weekdays", 2);
                },
                weekdaysShort: function (t) {
                  return t
                    ? t.format("ddd")
                    : i(e, "weekdaysShort", "weekdays", 3);
                },
                longDateFormat: function (t) {
                  return s(e.$locale(), t);
                },
                meridiem: this.$locale().meridiem,
                ordinal: this.$locale().ordinal,
              };
            };
          (r.localeData = function () {
            return l.bind(this)();
          }),
            (n.localeData = function () {
              var e = a();
              return {
                firstDayOfWeek: function () {
                  return e.weekStart || 0;
                },
                weekdays: function () {
                  return n.weekdays();
                },
                weekdaysShort: function () {
                  return n.weekdaysShort();
                },
                weekdaysMin: function () {
                  return n.weekdaysMin();
                },
                months: function () {
                  return n.months();
                },
                monthsShort: function () {
                  return n.monthsShort();
                },
                longDateFormat: function (t) {
                  return s(e, t);
                },
                meridiem: e.meridiem,
                ordinal: e.ordinal,
              };
            }),
            (n.months = function () {
              return i(a(), "months");
            }),
            (n.monthsShort = function () {
              return i(a(), "monthsShort", "months", 3);
            }),
            (n.weekdays = function (e) {
              return i(a(), "weekdays", null, null, e);
            }),
            (n.weekdaysShort = function (e) {
              return i(a(), "weekdaysShort", "weekdays", 3, e);
            }),
            (n.weekdaysMin = function (e) {
              return i(a(), "weekdaysMin", "weekdays", 2, e);
            });
        };
      })();
    },
    39920: function (e) {
      e.exports = (function () {
        "use strict";
        var e = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        };
        return function (t, n, r) {
          var o = n.prototype,
            i = o.format;
          (r.en.formats = e),
            (o.format = function (t) {
              void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
              var n = this.$locale().formats,
                r = (function (t, n) {
                  return t.replace(
                    /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                    function (t, r, o) {
                      var i = o && o.toUpperCase();
                      return (
                        r ||
                        n[o] ||
                        e[o] ||
                        n[i].replace(
                          /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                          function (e, t, n) {
                            return t || n.slice(1);
                          },
                        )
                      );
                    },
                  );
                })(t, void 0 === n ? {} : n);
              return i.call(this, r);
            });
        };
      })();
    },
    4042: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, n) {
          var r = function (e, t) {
            if (
              !t ||
              !t.length ||
              (1 === t.length && !t[0]) ||
              (1 === t.length && Array.isArray(t[0]) && !t[0].length)
            )
              return null;
            var n;
            1 === t.length && t[0].length > 0 && (t = t[0]),
              (n = (t = t.filter(function (e) {
                return e;
              }))[0]);
            for (var r = 1; r < t.length; r += 1)
              (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
            return n;
          };
          (n.max = function () {
            var e = [].slice.call(arguments, 0);
            return r("isAfter", e);
          }),
            (n.min = function () {
              var e = [].slice.call(arguments, 0);
              return r("isBefore", e);
            });
        };
      })();
    },
    14240: function (e) {
      e.exports = (function () {
        "use strict";
        var e = "minute",
          t = /[+-]\d\d(?::?\d\d)?/g,
          n = /([+-]|\d\d)/g;
        return function (r, o, i) {
          var a = o.prototype;
          (i.utc = function (e) {
            return new o({ date: e, utc: !0, args: arguments });
          }),
            (a.utc = function (t) {
              var n = i(this.toDate(), { locale: this.$L, utc: !0 });
              return t ? n.add(this.utcOffset(), e) : n;
            }),
            (a.local = function () {
              return i(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var s = a.parse;
          a.parse = function (e) {
            e.utc && (this.$u = !0),
              this.$utils().u(e.$offset) || (this.$offset = e.$offset),
              s.call(this, e);
          };
          var l = a.init;
          a.init = function () {
            if (this.$u) {
              var e = this.$d;
              (this.$y = e.getUTCFullYear()),
                (this.$M = e.getUTCMonth()),
                (this.$D = e.getUTCDate()),
                (this.$W = e.getUTCDay()),
                (this.$H = e.getUTCHours()),
                (this.$m = e.getUTCMinutes()),
                (this.$s = e.getUTCSeconds()),
                (this.$ms = e.getUTCMilliseconds());
            } else l.call(this);
          };
          var c = a.utcOffset;
          a.utcOffset = function (r, o) {
            var i = this.$utils().u;
            if (i(r))
              return this.$u
                ? 0
                : i(this.$offset)
                  ? c.call(this)
                  : this.$offset;
            if (
              "string" == typeof r &&
              ((r = (function (e) {
                void 0 === e && (e = "");
                var r = e.match(t);
                if (!r) return null;
                var o = ("" + r[0]).match(n) || ["-", 0, 0],
                  i = o[0],
                  a = 60 * +o[1] + +o[2];
                return 0 === a ? 0 : "+" === i ? a : -a;
              })(r)),
              null === r)
            )
              return this;
            var a = Math.abs(r) <= 16 ? 60 * r : r;
            if (0 === a) return this.utc(o);
            var s = this.clone();
            if (o) return (s.$offset = a), (s.$u = !1), s;
            var l = this.$u
              ? this.toDate().getTimezoneOffset()
              : -1 * this.utcOffset();
            return (
              ((s = this.local().add(a + l, e)).$offset = a),
              (s.$x.$localOffset = l),
              s
            );
          };
          var u = a.format;
          (a.format = function (e) {
            var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return u.call(this, t);
          }),
            (a.valueOf = function () {
              var e = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * e;
            }),
            (a.isUTC = function () {
              return !!this.$u;
            }),
            (a.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (a.toString = function () {
              return this.toDate().toUTCString();
            });
          var f = a.toDate;
          a.toDate = function (e) {
            return "s" === e && this.$offset
              ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : f.call(this);
          };
          var d = a.diff;
          a.diff = function (e, t, n) {
            if (e && this.$u === e.$u) return d.call(this, e, t, n);
            var r = this.local(),
              o = i(e).local();
            return d.call(r, o, t, n);
          };
        };
      })();
    },
    33551: (e) => {
      "use strict";
      e.exports = function e(t, n) {
        if (t === n) return !0;
        if (t && n && "object" == typeof t && "object" == typeof n) {
          if (t.constructor !== n.constructor) return !1;
          var r, o, i;
          if (Array.isArray(t)) {
            if ((r = t.length) != n.length) return !1;
            for (o = r; 0 !== o--; ) if (!e(t[o], n[o])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === n.source && t.flags === n.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === n.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === n.toString();
          if ((r = (i = Object.keys(t)).length) !== Object.keys(n).length)
            return !1;
          for (o = r; 0 !== o--; )
            if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
          for (o = r; 0 !== o--; ) {
            var a = i[o];
            if (!e(t[a], n[a])) return !1;
          }
          return !0;
        }
        return t != t && n != n;
      };
    },
    38921: (e) => {
      "use strict";
      e.exports = function (e, t, n, r, o, i, a, s) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var c = [n, r, o, i, a, s],
              u = 0;
            (l = new Error(
              t.replace(/%s/g, function () {
                return c[u++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
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
            a = 0,
            s = {};
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
                  A(this._config.beforeFirstChunk) &&
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
                      workerId: s.WORKER_ID,
                      finished: r,
                    });
                  else if (A(this._config.chunk) && !t) {
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
                      !A(this._config.complete) ||
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
                A(this._config.error)
                  ? this._config.error(e)
                  : o &&
                    this._config.error &&
                    n.postMessage({
                      workerId: s.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function c(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = s.RemoteChunkSize),
              l.call(this, e),
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
                      ((t.onload = w(this._chunkLoaded, this)),
                      (t.onerror = w(this._chunkError, this))),
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
          function u(e) {
            (e = e || {}).chunkSize || (e.chunkSize = s.LocalChunkSize),
              l.call(this, e);
            var t,
              n,
              r = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                r
                  ? (((t = new FileReader()).onload = w(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = w(this._chunkError, this)))
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
          function d(e) {
            l.call(this, (e = e || {}));
            var t = [],
              n = !0,
              r = !1;
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
                r && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (n = !0);
              }),
              (this._streamData = w(function (e) {
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
              (this._streamError = w(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = w(function () {
                this._streamCleanUp(), (r = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = w(function () {
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
              a = -i,
              l = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              c =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              u = this,
              f = 0,
              d = 0,
              h = !1,
              v = !1,
              g = [],
              y = { data: [], errors: [], meta: {} };
            function w(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function E() {
              if (
                (y &&
                  r &&
                  (S(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      s.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines &&
                  (y.data = y.data.filter(function (e) {
                    return !w(e);
                  })),
                D())
              ) {
                if (y)
                  if (Array.isArray(y.data[0])) {
                    for (var t = 0; D() && t < y.data.length; t++)
                      y.data[t].forEach(n);
                    y.data.splice(0, 1);
                  } else y.data.forEach(n);
                function n(t, n) {
                  A(e.transformHeader) && (t = e.transformHeader(t, n)),
                    g.push(t);
                }
              }
              function o(t, n) {
                for (var r = e.header ? {} : [], o = 0; o < t.length; o++) {
                  var s = o,
                    u = t[o];
                  (u = ((t, n) =>
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
                    (s = e.header
                      ? o >= g.length
                        ? "__parsed_extra"
                        : g[o]
                      : s),
                    (u = e.transform ? e.transform(u, s) : u),
                  )),
                    "__parsed_extra" === s
                      ? ((r[s] = r[s] || []), r[s].push(u))
                      : (r[s] = u);
                }
                return (
                  e.header &&
                    (o > g.length
                      ? S(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            g.length +
                            " fields but parsed " +
                            o,
                          d + n,
                        )
                      : o < g.length &&
                        S(
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
              var u;
              y &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((u = 1),
                !y.data.length || Array.isArray(y.data[0])
                  ? ((y.data = y.data.map(o)), (u = y.data.length))
                  : (y.data = o(y.data, 0)),
                e.header && y.meta && (y.meta.fields = g),
                (d += u));
            }
            function D() {
              return e.header && 0 === g.length;
            }
            function S(e, t, n, r) {
              (e = { type: e, code: t, message: n }),
                void 0 !== r && (e.row = r),
                y.errors.push(e);
            }
            A(e.step) &&
              ((o = e.step),
              (e.step = function (t) {
                (y = t),
                  D()
                    ? E()
                    : (E(),
                      0 !== y.data.length &&
                        ((f += t.data.length),
                        e.preview && f > e.preview
                          ? n.abort()
                          : ((y.data = y.data[0]), o(y, u))));
              })),
              (this.parse = function (o, i, a) {
                var l = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(o, l)),
                  (r = !1),
                  e.delimiter
                    ? A(e.delimiter) &&
                      ((e.delimiter = e.delimiter(o)),
                      (y.meta.delimiter = e.delimiter))
                    : ((l = ((t, n, r, o, i) => {
                        var a, l, c, u;
                        i = i || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          s.RECORD_SEP,
                          s.UNIT_SEP,
                        ];
                        for (var f = 0; f < i.length; f++) {
                          for (
                            var d,
                              h = i[f],
                              p = 0,
                              v = 0,
                              g = 0,
                              y =
                                ((c = void 0),
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
                            r && w(y.data[b])
                              ? g++
                              : ((v += d = y.data[b].length),
                                void 0 === c
                                  ? (c = d)
                                  : 0 < d && ((p += Math.abs(d - c)), (c = d)));
                          0 < y.data.length && (v /= y.data.length - g),
                            (void 0 === l || p <= l) &&
                              (void 0 === u || u < v) &&
                              1.99 < v &&
                              ((l = p), (a = h), (u = v));
                        }
                        return {
                          successful: !!(e.delimiter = a),
                          bestDelimiter: a,
                        };
                      })(
                        o,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = l.bestDelimiter)
                        : ((r = !0), (e.delimiter = s.DefaultDelimiter)),
                      (y.meta.delimiter = e.delimiter)),
                  (l = b(e)),
                  e.preview && e.header && l.preview++,
                  (t = o),
                  (n = new m(l)),
                  (y = n.parse(t, i, a)),
                  E(),
                  h ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return h;
              }),
              (this.pause = function () {
                (h = !0),
                  n.abort(),
                  (t = A(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                u.streamer._halted
                  ? ((h = !1), u.streamer.parseChunk(t, !0))
                  : setTimeout(u.resume, 3);
              }),
              (this.aborted = function () {
                return v;
              }),
              (this.abort = function () {
                (v = !0),
                  n.abort(),
                  (y.meta.aborted = !0),
                  A(e.complete) && e.complete(y),
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
              a = e.fastMode,
              l = null,
              c = !1,
              u = null == e.quoteChar ? '"' : e.quoteChar,
              f = u;
            if (
              (void 0 !== e.escapeChar && (f = e.escapeChar),
              ("string" != typeof t || -1 < s.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              r === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === r
              ? (r = "#")
              : ("string" != typeof r || -1 < s.BAD_DELIMITERS.indexOf(r)) &&
                (r = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var d = 0,
              h = !1;
            (this.parse = function (s, m, v) {
              if ("string" != typeof s)
                throw new Error("Input must be a string");
              var g = s.length,
                y = t.length,
                b = n.length,
                w = r.length,
                E = A(o),
                D = [],
                S = [],
                k = [],
                _ = (d = 0);
              if (!s) return I();
              if (a || (!1 !== a && -1 === s.indexOf(u))) {
                for (var O = s.split(n), x = 0; x < O.length; x++) {
                  if (((k = O[x]), (d += k.length), x !== O.length - 1))
                    d += n.length;
                  else if (v) return I();
                  if (!r || k.substring(0, w) !== r) {
                    if (E) {
                      if (((D = []), N(k.split(t)), F(), h)) return I();
                    } else N(k.split(t));
                    if (i && i <= x) return (D = D.slice(0, i)), I(!0);
                  }
                }
                return I();
              }
              for (
                var M = s.indexOf(t, d),
                  R = s.indexOf(n, d),
                  C = new RegExp(p(f) + p(u), "g"),
                  T = s.indexOf(u, d);
                ;
              )
                if (s[d] === u)
                  for (T = d, d++; ; ) {
                    if (-1 === (T = s.indexOf(u, T + 1)))
                      return (
                        v ||
                          S.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: D.length,
                            index: d,
                          }),
                        z()
                      );
                    if (T === g - 1) return z(s.substring(d, T).replace(C, u));
                    if (u === f && s[T + 1] === f) T++;
                    else if (u === f || 0 === T || s[T - 1] !== f) {
                      -1 !== M && M < T + 1 && (M = s.indexOf(t, T + 1));
                      var P = L(
                        -1 ===
                          (R = -1 !== R && R < T + 1 ? s.indexOf(n, T + 1) : R)
                          ? M
                          : Math.min(M, R),
                      );
                      if (s.substr(T + 1 + P, y) === t) {
                        k.push(s.substring(d, T).replace(C, u)),
                          s[(d = T + 1 + P + y)] !== u && (T = s.indexOf(u, d)),
                          (M = s.indexOf(t, d)),
                          (R = s.indexOf(n, d));
                        break;
                      }
                      if (
                        ((P = L(R)),
                        s.substring(T + 1 + P, T + 1 + P + b) === n)
                      ) {
                        if (
                          (k.push(s.substring(d, T).replace(C, u)),
                          j(T + 1 + P + b),
                          (M = s.indexOf(t, d)),
                          (T = s.indexOf(u, d)),
                          E && (F(), h))
                        )
                          return I();
                        if (i && D.length >= i) return I(!0);
                        break;
                      }
                      S.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: D.length,
                        index: d,
                      }),
                        T++;
                    }
                  }
                else if (r && 0 === k.length && s.substring(d, d + w) === r) {
                  if (-1 === R) return I();
                  (d = R + b), (R = s.indexOf(n, d)), (M = s.indexOf(t, d));
                } else if (-1 !== M && (M < R || -1 === R))
                  k.push(s.substring(d, M)), (d = M + y), (M = s.indexOf(t, d));
                else {
                  if (-1 === R) break;
                  if ((k.push(s.substring(d, R)), j(R + b), E && (F(), h)))
                    return I();
                  if (i && D.length >= i) return I(!0);
                }
              return z();
              function N(e) {
                D.push(e), (_ = d);
              }
              function L(e) {
                var t = 0;
                return -1 !== e &&
                  (e = s.substring(T + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function z(e) {
                return (
                  v ||
                    (void 0 === e && (e = s.substring(d)),
                    k.push(e),
                    (d = g),
                    N(k),
                    E && F()),
                  I()
                );
              }
              function j(e) {
                (d = e), N(k), (k = []), (R = s.indexOf(n, d));
              }
              function I(r) {
                if (e.header && !m && D.length && !c) {
                  var o = D[0],
                    i = Object.create(null),
                    a = new Set(o);
                  let t = !1;
                  for (let n = 0; n < o.length; n++) {
                    let r = o[n];
                    if (
                      i[
                        (r = A(e.transformHeader) ? e.transformHeader(r, n) : r)
                      ]
                    ) {
                      let e,
                        s = i[r];
                      for (; (e = r + "_" + s), s++, a.has(e); );
                      a.add(e),
                        (o[n] = e),
                        i[r]++,
                        (t = !0),
                        ((l = null === l ? {} : l)[e] = r);
                    } else (i[r] = 1), (o[n] = r);
                    a.add(r);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (c = !0);
                }
                return {
                  data: D,
                  errors: S,
                  meta: {
                    delimiter: t,
                    linebreak: n,
                    aborted: h,
                    truncated: !!r,
                    cursor: _ + (m || 0),
                    renamedHeaders: l,
                  },
                };
              }
              function F() {
                o(I()), (D = []), (S = []);
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
              if (A(n.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    o,
                  ),
                  !r);
                  a++
                );
                delete t.results;
              } else
                A(n.userChunk) &&
                  (n.userChunk(t.results, o, t.file), delete t.results);
            }
            t.finished && !r && g(t.workerId, t.results);
          }
          function g(e, t) {
            var n = i[e];
            A(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
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
          function w(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function A(e) {
            return "function" == typeof e;
          }
          return (
            (s.parse = function (t, r) {
              var o = (r = r || {}).dynamicTyping || !1;
              if (
                (A(o) && ((r.dynamicTypingFunction = o), (o = {})),
                (r.dynamicTyping = o),
                (r.transform = !!A(r.transform) && r.transform),
                !r.worker || !s.WORKERS_SUPPORTED)
              )
                return (
                  (o = null),
                  s.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (o = new (r.download ? c : f)(r)))
                    : !0 === t.readable && A(t.read) && A(t.on)
                      ? (o = new d(r))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (o = new u(r)),
                  o.stream(t)
                );
              ((o = (() => {
                var t;
                return (
                  !!s.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = n.URL || n.webkitURL || null,
                      r = e.toString();
                    return (
                      s.BLOB_URL ||
                      (s.BLOB_URL = t.createObjectURL(
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
                  (t.id = a++),
                  (i[t.id] = t))
                );
              })()).userStep = r.step),
                (o.userChunk = r.chunk),
                (o.userComplete = r.complete),
                (o.userError = r.error),
                (r.step = A(r.step)),
                (r.chunk = A(r.chunk)),
                (r.complete = A(r.complete)),
                (r.error = A(r.error)),
                delete r.worker,
                o.postMessage({ input: t, config: r, workerId: o.id });
            }),
            (s.unparse = function (e, t) {
              var n = !1,
                r = !0,
                o = ",",
                i = "\r\n",
                a = '"',
                l = a + a,
                c = !1,
                u = null,
                f = !1,
                d =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          s.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (o = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (c = t.skipEmptyLines),
                        "string" == typeof t.newline && (i = t.newline),
                        "string" == typeof t.quoteChar && (a = t.quoteChar),
                        "boolean" == typeof t.header && (r = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        u = t.columns;
                      }
                      void 0 !== t.escapeChar && (l = t.escapeChar + a),
                        t.escapeFormulae instanceof RegExp
                          ? (f = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (f = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(p(a), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return h(null, e, c);
                if ("object" == typeof e[0])
                  return h(u || Object.keys(e[0]), e, c);
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
                  h(e.fields || [], e.data || [], c)
                );
              throw new Error("Unable to serialize unrecognized input");
              function h(e, t, n) {
                var a = "",
                  s =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  l = !Array.isArray(t[0]);
                if (s && r) {
                  for (var c = 0; c < e.length; c++)
                    0 < c && (a += o), (a += m(e[c], c));
                  0 < t.length && (a += i);
                }
                for (var u = 0; u < t.length; u++) {
                  var f = (s ? e : t[u]).length,
                    d = !1,
                    h = s ? 0 === Object.keys(t[u]).length : 0 === t[u].length;
                  if (
                    (n &&
                      !s &&
                      (d =
                        "greedy" === n
                          ? "" === t[u].join("").trim()
                          : 1 === t[u].length && 0 === t[u][0].length),
                    "greedy" === n && s)
                  ) {
                    for (var p = [], v = 0; v < f; v++) {
                      var g = l ? e[v] : v;
                      p.push(t[u][g]);
                    }
                    d = "" === p.join("").trim();
                  }
                  if (!d) {
                    for (var y = 0; y < f; y++) {
                      0 < y && !h && (a += o);
                      var b = s && l ? e[y] : y;
                      a += m(t[u][b], y);
                    }
                    u < t.length - 1 && (!n || (0 < f && !h)) && (a += i);
                  }
                }
                return a;
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
                      (r = e.toString().replace(d, l)),
                      (i =
                        i ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(r, s.BAD_DELIMITERS) ||
                        -1 < r.indexOf(o) ||
                        " " === r.charAt(0) ||
                        " " === r.charAt(r.length - 1))
                        ? a + r + a
                        : r);
              }
            }),
            (s.RECORD_SEP = String.fromCharCode(30)),
            (s.UNIT_SEP = String.fromCharCode(31)),
            (s.BYTE_ORDER_MARK = "\ufeff"),
            (s.BAD_DELIMITERS = ["\r", "\n", '"', s.BYTE_ORDER_MARK]),
            (s.WORKERS_SUPPORTED = !r && !!n.Worker),
            (s.NODE_STREAM_INPUT = 1),
            (s.LocalChunkSize = 10485760),
            (s.RemoteChunkSize = 5242880),
            (s.DefaultDelimiter = ","),
            (s.Parser = m),
            (s.ParserHandle = h),
            (s.NetworkStreamer = c),
            (s.FileStreamer = u),
            (s.StringStreamer = f),
            (s.ReadableStreamStreamer = d),
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
                  if (0 === o.length) A(e.complete) && e.complete();
                  else {
                    var n,
                      r,
                      i,
                      l,
                      c = o[0];
                    if (A(e.before)) {
                      var u = e.before(c.file, c.inputElem);
                      if ("object" == typeof u) {
                        if ("abort" === u.action)
                          return (
                            (n = "AbortError"),
                            (r = c.file),
                            (i = c.inputElem),
                            (l = u.reason),
                            void (A(e.error) && e.error({ name: n }, r, i, l))
                          );
                        if ("skip" === u.action) return void a();
                        "object" == typeof u.config &&
                          (c.instanceConfig = t.extend(
                            c.instanceConfig,
                            u.config,
                          ));
                      } else if ("skip" === u) return void a();
                    }
                    var f = c.instanceConfig.complete;
                    (c.instanceConfig.complete = function (e) {
                      A(f) && f(e, c.file, c.inputElem), a();
                    }),
                      s.parse(c.file, c.instanceConfig);
                  }
                }
                function a() {
                  o.splice(0, 1), i();
                }
              }),
            o &&
              (n.onmessage = function (e) {
                (e = e.data),
                  void 0 === s.WORKER_ID && e && (s.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? n.postMessage({
                        workerId: s.WORKER_ID,
                        results: s.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((n.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = s.parse(e.input, e.config)) &&
                      n.postMessage({
                        workerId: s.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((c.prototype = Object.create(l.prototype)).constructor = c),
            ((u.prototype = Object.create(l.prototype)).constructor = u),
            ((f.prototype = Object.create(f.prototype)).constructor = f),
            ((d.prototype = Object.create(l.prototype)).constructor = d),
            s
          );
        }),
        void 0 === (o = "function" == typeof n ? n.apply(t, r) : n) ||
          (e.exports = o);
    },
    84974: (e, t, n) => {
      "use strict";
      n.d(t, { Vv: () => Ba, Pp: () => Go, ye: () => $a });
      var r = n(54883),
        o = n(2829),
        i = n(11052),
        a = n(30549),
        s = n(50181),
        l = n(35549),
        c = n(96101),
        u = n(15596),
        f = n(90626),
        d = n(38921),
        h = n.n(d),
        p = function () {};
      function m(e, t) {
        return void 0 !== e[t];
      }
      function v(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      var g = n(81115),
        y = n(58584),
        b = n(42891);
      function w() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null != e && this.setState(e);
      }
      function A(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null != n ? n : null;
          }.bind(this),
        );
      }
      function E(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (w.__suppressDeprecationWarning = !0),
        (A.__suppressDeprecationWarning = !0),
        (E.__suppressDeprecationWarning = !0);
      var D = n(34164),
        S = n(61410),
        k = n.n(S),
        _ = "milliseconds",
        O = "seconds",
        x = "minutes",
        M = "hours",
        R = "day",
        C = "week",
        T = "month",
        P = "year",
        N = "decade",
        L = "century",
        z = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        j = { month: 1, year: 12, decade: 120, century: 1200 };
      function I(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function F(e, t, n) {
        switch (((e = new Date(e)), n)) {
          case _:
          case O:
          case x:
          case M:
          case R:
          case C:
            return (function (e, t) {
              var n = new Date(+e + t);
              return (function (e, t) {
                var n = e.getTimezoneOffset(),
                  r = t.getTimezoneOffset();
                return new Date(+t + (r - n) * z.minutes);
              })(e, n);
            })(e, t * z[n]);
          case T:
          case P:
          case N:
          case L:
            return (function (e, t) {
              var n = e.getFullYear(),
                r = e.getMonth(),
                o = e.getDate(),
                i = 12 * n + r + t,
                a = Math.trunc(i / 12),
                s = i % 12,
                l = Math.min(
                  o,
                  (function (e) {
                    return [31, I(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(a)[s],
                ),
                c = new Date(e);
              return (
                c.setFullYear(a), c.setDate(1), c.setMonth(s), c.setDate(l), c
              );
            })(e, t * j[n]);
        }
        throw new TypeError('Invalid units: "' + n + '"');
      }
      function W(e, t, n) {
        return F(e, -t, n);
      }
      function H(e, t, n) {
        switch (((e = new Date(e)), t)) {
          case L:
          case N:
          case P:
            e = oe(e, 0);
          case T:
            e = re(e, 1);
          case C:
          case R:
            e = te(e, 0);
          case M:
            e = ee(e, 0);
          case x:
            e = J(e, 0);
          case O:
            e = Q(e, 0);
        }
        return (
          t === N && (e = W(e, ie(e) % 10, "year")),
          t === L && (e = W(e, ie(e) % 100, "year")),
          t === C &&
            (e = (function (e, t, n) {
              var r = (ne(e) + 7 - (n || 0)) % 7;
              return void 0 === t ? r : F(e, t - r, R);
            })(e, 0, n)),
          e
        );
      }
      function U(e, t, n) {
        switch (((e = H((e = new Date(e)), t, n)), t)) {
          case L:
          case N:
          case P:
          case T:
          case C:
            (e = W((e = F(e, 1, t)), 1, R)).setHours(23, 59, 59, 999);
            break;
          case R:
            e.setHours(23, 59, 59, 999);
            break;
          case M:
          case x:
          case O:
            e = W((e = F(e, 1, t)), 1, _);
        }
        return e;
      }
      var Y = se(function (e, t) {
          return e === t;
        }),
        B = se(function (e, t) {
          return e !== t;
        }),
        q = se(function (e, t) {
          return e > t;
        }),
        K = se(function (e, t) {
          return e >= t;
        }),
        V = se(function (e, t) {
          return e < t;
        }),
        $ = se(function (e, t) {
          return e <= t;
        });
      function G() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function X() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function Z(e, t, n, r) {
        return (r = r || "day"), (!t || K(e, t, r)) && (!n || $(e, n, r));
      }
      var Q = ae("Milliseconds"),
        J = ae("Seconds"),
        ee = ae("Minutes"),
        te = ae("Hours"),
        ne = ae("Day"),
        re = ae("Date"),
        oe = ae("Month"),
        ie = ae("FullYear");
      function ae(e) {
        var t = (function (e) {
          switch (e) {
            case "Milliseconds":
              return 36e5;
            case "Seconds":
              return 3600;
            case "Minutes":
              return 60;
            case "Hours":
              return 1;
            default:
              return null;
          }
        })(e);
        return function (n, r) {
          if (void 0 === r) return n["get" + e]();
          var o = new Date(n);
          return (
            o["set" + e](r),
            t &&
              o["get" + e]() != r &&
              ("Hours" === e ||
                (r >= t && o.getHours() - n.getHours() < Math.floor(r / t))) &&
              o["set" + e](r + t),
            o
          );
        };
      }
      function se(e) {
        return function (t, n, r) {
          return e(+H(t, r), +H(n, r));
        };
      }
      var le = n(55635),
        ce = n(8950);
      const ue = function (e, t, n) {
        var r = -1,
          o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = e[r + t];
        return i;
      };
      var fe = n(7e4),
        de = n(55205),
        he = 1 / 0;
      const pe = function (e) {
        return e
          ? (e = (0, de.A)(e)) === he || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
      const me = function (e) {
        var t = pe(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
      var ve = Math.ceil,
        ge = Math.max;
      const ye = function (e, t, n) {
        t = (n ? (0, fe.A)(e, t, n) : void 0 === t) ? 1 : ge(me(t), 0);
        var r = null == e ? 0 : e.length;
        if (!r || t < 1) return [];
        for (var o = 0, i = 0, a = Array(ve(r / t)); o < r; )
          a[i++] = ue(e, o, (o += t));
        return a;
      };
      function be(e) {
        return (e && e.ownerDocument) || document;
      }
      function we(e, t) {
        return (function (e) {
          var t = be(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var Ae = /([A-Z])/g;
      var Ee = /^ms-/;
      function De(e) {
        return (function (e) {
          return e.replace(Ae, "-$1").toLowerCase();
        })(e).replace(Ee, "-ms-");
      }
      var Se =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const ke = function (e, t) {
        var n = "",
          r = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(De(t)) || we(e).getPropertyValue(De(t))
          );
        Object.keys(t).forEach(function (o) {
          var i = t[o];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !Se.test(e));
              })(o)
              ? (n += De(o) + ": " + i + ";")
              : (r += o + "(" + i + ") ")
            : e.style.removeProperty(De(o));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function _e(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
            ? e === t || !!(16 & e.compareDocumentPosition(t))
            : void 0;
      }
      function Oe(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function xe(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (n, r) {
          var o = Oe(n);
          if (void 0 === r) return o ? o[e] : n[t];
          o ? o.scrollTo(o[e], r) : (n[t] = r);
        };
      }
      const Me = xe("pageXOffset"),
        Re = xe("pageYOffset");
      function Ce(e) {
        var t = be(e),
          n = { top: 0, left: 0, height: 0, width: 0 },
          r = t && t.documentElement;
        return r && _e(r, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (n = e.getBoundingClientRect()),
            (n = {
              top: n.top + Re(r) - (r.clientTop || 0),
              left: n.left + Me(r) - (r.clientLeft || 0),
              width: n.width,
              height: n.height,
            }))
          : n;
      }
      var Te = function (e) {
        return !!e && "offsetParent" in e;
      };
      function Pe(e, t) {
        var n,
          r = { top: 0, left: 0 };
        if ("fixed" === ke(e, "position")) n = e.getBoundingClientRect();
        else {
          var o =
            t ||
            (function (e) {
              for (
                var t = be(e), n = e && e.offsetParent;
                Te(n) &&
                "HTML" !== n.nodeName &&
                "static" === ke(n, "position");
              )
                n = n.offsetParent;
              return n || t.documentElement;
            })(e);
          (n = Ce(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(o) && (r = Ce(o));
          var i = String(ke(o, "borderTopWidth") || 0);
          r.top += parseInt(i, 10) - Re(o) || 0;
          var a = String(ke(o, "borderLeftWidth") || 0);
          r.left += parseInt(a, 10) - Me(o) || 0;
        }
        var s = String(ke(e, "marginTop") || 0),
          l = String(ke(e, "marginLeft") || 0);
        return (0, y.A)({}, n, {
          top: n.top - r.top - (parseInt(s, 10) || 0),
          left: n.left - r.left - (parseInt(l, 10) || 0),
        });
      }
      const Ne = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var Le = new Date().getTime();
      var ze = "clearTimeout",
        je = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - Le)),
            r = setTimeout(e, n);
          return (Le = t), r;
        },
        Ie = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      Ne &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Ie(e, "request");
          return (
            t in window &&
              ((ze = Ie(e, "cancel")),
              (je = function (e) {
                return window[t](e);
              })),
            !!je
          );
        });
      var Fe = function (e) {
          "function" == typeof window[ze] && window[ze](e);
        },
        We = je,
        He = n(72739);
      function Ue() {
        return (0, f.useState)(null);
      }
      const Ye = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const Be = function (e, t) {
        return (0, f.useMemo)(
          () =>
            (function (e, t) {
              const n = Ye(e),
                r = Ye(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(e, t),
          [e, t],
        );
      };
      var qe = "top",
        Ke = "bottom",
        Ve = "right",
        $e = "left",
        Ge = "auto",
        Xe = [qe, Ke, Ve, $e],
        Ze = "start",
        Qe = "end",
        Je = "viewport",
        et = "popper",
        tt = Xe.reduce(function (e, t) {
          return e.concat([t + "-" + Ze, t + "-" + Qe]);
        }, []),
        nt = [].concat(Xe, [Ge]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Ze, t + "-" + Qe]);
        }, []),
        rt = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      const ot = function (e) {
        const t = (function () {
          const e = (0, f.useRef)(!0),
            t = (0, f.useRef)(() => e.current);
          return (
            (0, f.useEffect)(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              [],
            ),
            t.current
          );
        })();
        return [
          e[0],
          (0, f.useCallback)(
            (n) => {
              if (t()) return e[1](n);
            },
            [t, e[1]],
          ),
        ];
      };
      function it(e) {
        return e.split("-")[0];
      }
      function at(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function st(e) {
        return e instanceof at(e).Element || e instanceof Element;
      }
      function lt(e) {
        return e instanceof at(e).HTMLElement || e instanceof HTMLElement;
      }
      function ct(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof at(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var ut = Math.max,
        ft = Math.min,
        dt = Math.round;
      function ht() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function pt() {
        return !/^((?!chrome|android).)*safari/i.test(ht());
      }
      function mt(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          lt(e) &&
          ((o = (e.offsetWidth > 0 && dt(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && dt(r.height) / e.offsetHeight) || 1));
        var a = (st(e) ? at(e) : window).visualViewport,
          s = !pt() && n,
          l = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          c = (r.top + (s && a ? a.offsetTop : 0)) / i,
          u = r.width / o,
          f = r.height / i;
        return {
          width: u,
          height: f,
          top: c,
          right: l + u,
          bottom: c + f,
          left: l,
          x: l,
          y: c,
        };
      }
      function vt(e) {
        var t = mt(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function gt(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && ct(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function yt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function bt(e) {
        return at(e).getComputedStyle(e);
      }
      function wt(e) {
        return ["table", "td", "th"].indexOf(yt(e)) >= 0;
      }
      function At(e) {
        return ((st(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Et(e) {
        return "html" === yt(e)
          ? e
          : e.assignedSlot || e.parentNode || (ct(e) ? e.host : null) || At(e);
      }
      function Dt(e) {
        return lt(e) && "fixed" !== bt(e).position ? e.offsetParent : null;
      }
      function St(e) {
        for (
          var t = at(e), n = Dt(e);
          n && wt(n) && "static" === bt(n).position;
        )
          n = Dt(n);
        return n &&
          ("html" === yt(n) ||
            ("body" === yt(n) && "static" === bt(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(ht());
                if (
                  /Trident/i.test(ht()) &&
                  lt(e) &&
                  "fixed" === bt(e).position
                )
                  return null;
                var n = Et(e);
                for (
                  ct(n) && (n = n.host);
                  lt(n) && ["html", "body"].indexOf(yt(n)) < 0;
                ) {
                  var r = bt(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function kt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function _t(e, t, n) {
        return ut(e, ft(t, n));
      }
      function Ot(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function xt(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      const Mt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = it(n.placement),
            l = kt(s),
            c = [$e, Ve].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var u = (function (e, t) {
                return Ot(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            }),
                          )
                        : e)
                    ? e
                    : xt(e, Xe),
                );
              })(o.padding, n),
              f = vt(i),
              d = "y" === l ? qe : $e,
              h = "y" === l ? Ke : Ve,
              p =
                n.rects.reference[c] +
                n.rects.reference[l] -
                a[l] -
                n.rects.popper[c],
              m = a[l] - n.rects.reference[l],
              v = St(i),
              g = v
                ? "y" === l
                  ? v.clientHeight || 0
                  : v.clientWidth || 0
                : 0,
              y = p / 2 - m / 2,
              b = u[d],
              w = g - f[c] - u[h],
              A = g / 2 - f[c] / 2 + y,
              E = _t(b, A, w),
              D = l;
            n.modifiersData[r] =
              (((t = {})[D] = E), (t.centerOffset = E - A), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            gt(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Rt(e) {
        return e.split("-")[1];
      }
      var Ct = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Tt(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          i = e.variation,
          a = e.offsets,
          s = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          f = e.isFixed,
          d = a.x,
          h = void 0 === d ? 0 : d,
          p = a.y,
          m = void 0 === p ? 0 : p,
          v = "function" == typeof u ? u({ x: h, y: m }) : { x: h, y: m };
        (h = v.x), (m = v.y);
        var g = a.hasOwnProperty("x"),
          y = a.hasOwnProperty("y"),
          b = $e,
          w = qe,
          A = window;
        if (c) {
          var E = St(n),
            D = "clientHeight",
            S = "clientWidth";
          if (
            (E === at(n) &&
              "static" !== bt((E = At(n))).position &&
              "absolute" === s &&
              ((D = "scrollHeight"), (S = "scrollWidth")),
            o === qe || ((o === $e || o === Ve) && i === Qe))
          )
            (w = Ke),
              (m -=
                (f && E === A && A.visualViewport
                  ? A.visualViewport.height
                  : E[D]) - r.height),
              (m *= l ? 1 : -1);
          if (o === $e || ((o === qe || o === Ke) && i === Qe))
            (b = Ve),
              (h -=
                (f && E === A && A.visualViewport
                  ? A.visualViewport.width
                  : E[S]) - r.width),
              (h *= l ? 1 : -1);
        }
        var k,
          _ = Object.assign({ position: s }, c && Ct),
          O =
            !0 === u
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: dt(n * o) / o || 0, y: dt(r * o) / o || 0 };
                })({ x: h, y: m }, at(n))
              : { x: h, y: m };
        return (
          (h = O.x),
          (m = O.y),
          l
            ? Object.assign(
                {},
                _,
                (((k = {})[w] = y ? "0" : ""),
                (k[b] = g ? "0" : ""),
                (k.transform =
                  (A.devicePixelRatio || 1) <= 1
                    ? "translate(" + h + "px, " + m + "px)"
                    : "translate3d(" + h + "px, " + m + "px, 0)"),
                k),
              )
            : Object.assign(
                {},
                _,
                (((t = {})[w] = y ? m + "px" : ""),
                (t[b] = g ? h + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const Pt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            o = void 0 === r || r,
            i = n.adaptive,
            a = void 0 === i || i,
            s = n.roundOffsets,
            l = void 0 === s || s,
            c = {
              placement: it(t.placement),
              variation: Rt(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Tt(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: a,
                  roundOffsets: l,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Tt(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var Nt = { passive: !0 };
      const Lt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            o = r.scroll,
            i = void 0 === o || o,
            a = r.resize,
            s = void 0 === a || a,
            l = at(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, Nt);
              }),
            s && l.addEventListener("resize", n.update, Nt),
            function () {
              i &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Nt);
                }),
                s && l.removeEventListener("resize", n.update, Nt);
            }
          );
        },
        data: {},
      };
      var zt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function jt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return zt[e];
        });
      }
      var It = { start: "end", end: "start" };
      function Ft(e) {
        return e.replace(/start|end/g, function (e) {
          return It[e];
        });
      }
      function Wt(e) {
        var t = at(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Ht(e) {
        return mt(At(e)).left + Wt(e).scrollLeft;
      }
      function Ut(e) {
        var t = bt(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function Yt(e) {
        return ["html", "body", "#document"].indexOf(yt(e)) >= 0
          ? e.ownerDocument.body
          : lt(e) && Ut(e)
            ? e
            : Yt(Et(e));
      }
      function Bt(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Yt(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = at(r),
          a = o ? [i].concat(i.visualViewport || [], Ut(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(Bt(Et(a)));
      }
      function qt(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Kt(e, t, n) {
        return t === Je
          ? qt(
              (function (e, t) {
                var n = at(e),
                  r = At(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  l = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var c = pt();
                  (c || (!c && "fixed" === t)) &&
                    ((s = o.offsetLeft), (l = o.offsetTop));
                }
                return { width: i, height: a, x: s + Ht(e), y: l };
              })(e, n),
            )
          : st(t)
            ? (function (e, t) {
                var n = mt(e, !1, "fixed" === t);
                return (
                  (n.top = n.top + e.clientTop),
                  (n.left = n.left + e.clientLeft),
                  (n.bottom = n.top + e.clientHeight),
                  (n.right = n.left + e.clientWidth),
                  (n.width = e.clientWidth),
                  (n.height = e.clientHeight),
                  (n.x = n.left),
                  (n.y = n.top),
                  n
                );
              })(t, n)
            : qt(
                (function (e) {
                  var t,
                    n = At(e),
                    r = Wt(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    i = ut(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    a = ut(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    s = -r.scrollLeft + Ht(e),
                    l = -r.scrollTop;
                  return (
                    "rtl" === bt(o || n).direction &&
                      (s += ut(n.clientWidth, o ? o.clientWidth : 0) - i),
                    { width: i, height: a, x: s, y: l }
                  );
                })(At(e)),
              );
      }
      function Vt(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = Bt(Et(e)),
                    n =
                      ["absolute", "fixed"].indexOf(bt(e).position) >= 0 &&
                      lt(e)
                        ? St(e)
                        : e;
                  return st(n)
                    ? t.filter(function (e) {
                        return st(e) && gt(e, n) && "body" !== yt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          a = i[0],
          s = i.reduce(
            function (t, n) {
              var o = Kt(e, n, r);
              return (
                (t.top = ut(o.top, t.top)),
                (t.right = ft(o.right, t.right)),
                (t.bottom = ft(o.bottom, t.bottom)),
                (t.left = ut(o.left, t.left)),
                t
              );
            },
            Kt(e, a, r),
          );
        return (
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top),
          (s.x = s.left),
          (s.y = s.top),
          s
        );
      }
      function $t(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? it(o) : null,
          a = o ? Rt(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          l = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case qe:
            t = { x: s, y: n.y - r.height };
            break;
          case Ke:
            t = { x: s, y: n.y + n.height };
            break;
          case Ve:
            t = { x: n.x + n.width, y: l };
            break;
          case $e:
            t = { x: n.x - r.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = i ? kt(i) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (a) {
            case Ze:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case Qe:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function Gt(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          a = void 0 === i ? e.strategy : i,
          s = n.boundary,
          l = void 0 === s ? "clippingParents" : s,
          c = n.rootBoundary,
          u = void 0 === c ? Je : c,
          f = n.elementContext,
          d = void 0 === f ? et : f,
          h = n.altBoundary,
          p = void 0 !== h && h,
          m = n.padding,
          v = void 0 === m ? 0 : m,
          g = Ot("number" != typeof v ? v : xt(v, Xe)),
          y = d === et ? "reference" : et,
          b = e.rects.popper,
          w = e.elements[p ? y : d],
          A = Vt(
            st(w) ? w : w.contextElement || At(e.elements.popper),
            l,
            u,
            a,
          ),
          E = mt(e.elements.reference),
          D = $t({
            reference: E,
            element: b,
            strategy: "absolute",
            placement: o,
          }),
          S = qt(Object.assign({}, b, D)),
          k = d === et ? S : E,
          _ = {
            top: A.top - k.top + g.top,
            bottom: k.bottom - A.bottom + g.bottom,
            left: A.left - k.left + g.left,
            right: k.right - A.right + g.right,
          },
          O = e.modifiersData.offset;
        if (d === et && O) {
          var x = O[o];
          Object.keys(_).forEach(function (e) {
            var t = [Ve, Ke].indexOf(e) >= 0 ? 1 : -1,
              n = [qe, Ke].indexOf(e) >= 0 ? "y" : "x";
            _[e] += x[n] * t;
          });
        }
        return _;
      }
      const Xt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var o = n.mainAxis,
                i = void 0 === o || o,
                a = n.altAxis,
                s = void 0 === a || a,
                l = n.fallbackPlacements,
                c = n.padding,
                u = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                h = n.flipVariations,
                p = void 0 === h || h,
                m = n.allowedAutoPlacements,
                v = t.options.placement,
                g = it(v),
                y =
                  l ||
                  (g === v || !p
                    ? [jt(v)]
                    : (function (e) {
                        if (it(e) === Ge) return [];
                        var t = jt(e);
                        return [Ft(e), t, Ft(t)];
                      })(v)),
                b = [v].concat(y).reduce(function (e, n) {
                  return e.concat(
                    it(n) === Ge
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            l = n.allowedAutoPlacements,
                            c = void 0 === l ? nt : l,
                            u = Rt(r),
                            f = u
                              ? s
                                ? tt
                                : tt.filter(function (e) {
                                    return Rt(e) === u;
                                  })
                              : Xe,
                            d = f.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = f);
                          var h = d.reduce(function (t, n) {
                            return (
                              (t[n] = Gt(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: a,
                              })[it(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(h).sort(function (e, t) {
                            return h[e] - h[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: f,
                          padding: c,
                          flipVariations: p,
                          allowedAutoPlacements: m,
                        })
                      : n,
                  );
                }, []),
                w = t.rects.reference,
                A = t.rects.popper,
                E = new Map(),
                D = !0,
                S = b[0],
                k = 0;
              k < b.length;
              k++
            ) {
              var _ = b[k],
                O = it(_),
                x = Rt(_) === Ze,
                M = [qe, Ke].indexOf(O) >= 0,
                R = M ? "width" : "height",
                C = Gt(t, {
                  placement: _,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: c,
                }),
                T = M ? (x ? Ve : $e) : x ? Ke : qe;
              w[R] > A[R] && (T = jt(T));
              var P = jt(T),
                N = [];
              if (
                (i && N.push(C[O] <= 0),
                s && N.push(C[T] <= 0, C[P] <= 0),
                N.every(function (e) {
                  return e;
                }))
              ) {
                (S = _), (D = !1);
                break;
              }
              E.set(_, N);
            }
            if (D)
              for (
                var L = function (e) {
                    var t = b.find(function (t) {
                      var n = E.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (S = t), "break";
                  },
                  z = p ? 3 : 1;
                z > 0;
                z--
              ) {
                if ("break" === L(z)) break;
              }
            t.placement !== S &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = S),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Zt(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function Qt(e) {
        return [qe, Ve, Ke, $e].some(function (t) {
          return e[t] >= 0;
        });
      }
      const Jt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            i = void 0 === o ? [0, 0] : o,
            a = nt.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = it(e),
                    o = [$e, qe].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    a = i[0],
                    s = i[1];
                  return (
                    (a = a || 0),
                    (s = (s || 0) * o),
                    [$e, Ve].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            s = a[t.placement],
            l = s.x,
            c = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[r] = a);
        },
      };
      const en = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 !== a && a,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            d = n.tether,
            h = void 0 === d || d,
            p = n.tetherOffset,
            m = void 0 === p ? 0 : p,
            v = Gt(t, {
              boundary: l,
              rootBoundary: c,
              padding: f,
              altBoundary: u,
            }),
            g = it(t.placement),
            y = Rt(t.placement),
            b = !y,
            w = kt(g),
            A = "x" === w ? "y" : "x",
            E = t.modifiersData.popperOffsets,
            D = t.rects.reference,
            S = t.rects.popper,
            k =
              "function" == typeof m
                ? m(Object.assign({}, t.rects, { placement: t.placement }))
                : m,
            _ =
              "number" == typeof k
                ? { mainAxis: k, altAxis: k }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
            O = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            x = { x: 0, y: 0 };
          if (E) {
            if (i) {
              var M,
                R = "y" === w ? qe : $e,
                C = "y" === w ? Ke : Ve,
                T = "y" === w ? "height" : "width",
                P = E[w],
                N = P + v[R],
                L = P - v[C],
                z = h ? -S[T] / 2 : 0,
                j = y === Ze ? D[T] : S[T],
                I = y === Ze ? -S[T] : -D[T],
                F = t.elements.arrow,
                W = h && F ? vt(F) : { width: 0, height: 0 },
                H = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                U = H[R],
                Y = H[C],
                B = _t(0, D[T], W[T]),
                q = b
                  ? D[T] / 2 - z - B - U - _.mainAxis
                  : j - B - U - _.mainAxis,
                K = b
                  ? -D[T] / 2 + z + B + Y + _.mainAxis
                  : I + B + Y + _.mainAxis,
                V = t.elements.arrow && St(t.elements.arrow),
                $ = V ? ("y" === w ? V.clientTop || 0 : V.clientLeft || 0) : 0,
                G = null != (M = null == O ? void 0 : O[w]) ? M : 0,
                X = P + K - G,
                Z = _t(h ? ft(N, P + q - G - $) : N, P, h ? ut(L, X) : L);
              (E[w] = Z), (x[w] = Z - P);
            }
            if (s) {
              var Q,
                J = "x" === w ? qe : $e,
                ee = "x" === w ? Ke : Ve,
                te = E[A],
                ne = "y" === A ? "height" : "width",
                re = te + v[J],
                oe = te - v[ee],
                ie = -1 !== [qe, $e].indexOf(g),
                ae = null != (Q = null == O ? void 0 : O[A]) ? Q : 0,
                se = ie ? re : te - D[ne] - S[ne] - ae + _.altAxis,
                le = ie ? te + D[ne] + S[ne] - ae - _.altAxis : oe,
                ce =
                  h && ie
                    ? (function (e, t, n) {
                        var r = _t(e, t, n);
                        return r > n ? n : r;
                      })(se, te, le)
                    : _t(h ? se : re, te, h ? le : oe);
              (E[A] = ce), (x[A] = ce - te);
            }
            t.modifiersData[r] = x;
          }
        },
        requiresIfExists: ["offset"],
      };
      function tn(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          i = lt(t),
          a =
            lt(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = dt(t.width) / e.offsetWidth || 1,
                r = dt(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          s = At(t),
          l = mt(e, a, n),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (i || (!i && !n)) &&
            (("body" !== yt(t) || Ut(s)) &&
              (c =
                (r = t) !== at(r) && lt(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : Wt(r)),
            lt(t)
              ? (((u = mt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : s && (u.x = Ht(s))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function nn(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      var rn = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function on() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function an(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? rn : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            a,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, rn, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: s,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(s.options) : n;
                f(),
                  (s.options = Object.assign({}, i, s.options, o)),
                  (s.scrollParents = {
                    reference: st(e)
                      ? Bt(e)
                      : e.contextElement
                        ? Bt(e.contextElement)
                        : [],
                    popper: Bt(t),
                  });
                var a,
                  c,
                  d = (function (e) {
                    var t = nn(e);
                    return rt.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        }),
                      );
                    }, []);
                  })(
                    ((a = [].concat(r, s.options.modifiers)),
                    (c = a.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(c).map(function (e) {
                      return c[e];
                    })),
                  );
                return (
                  (s.orderedModifiers = d.filter(function (e) {
                    return e.enabled;
                  })),
                  s.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var i = o({ state: s, name: t, instance: u, options: r }),
                        a = function () {};
                      l.push(i || a);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (on(t, n)) {
                    (s.rects = {
                      reference: tn(t, St(n), "fixed" === s.options.strategy),
                      popper: vt(n),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (e) {
                        return (s.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var r = 0; r < s.orderedModifiers.length; r++)
                      if (!0 !== s.reset) {
                        var o = s.orderedModifiers[r],
                          i = o.fn,
                          a = o.options,
                          l = void 0 === a ? {} : a,
                          f = o.name;
                        "function" == typeof i &&
                          (s =
                            i({ state: s, options: l, name: f, instance: u }) ||
                            s);
                      } else (s.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(s);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (a = void 0), e(o());
                        });
                      })),
                    a
                  );
                }),
              destroy: function () {
                f(), (c = !0);
              },
            };
          if (!on(e, t)) return u;
          function f() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var sn = an({
          defaultModifiers: [
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  a = Gt(t, { elementContext: "reference" }),
                  s = Gt(t, { altBoundary: !0 }),
                  l = Zt(a, r),
                  c = Zt(s, o, i),
                  u = Qt(l),
                  f = Qt(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": f,
                    },
                  ));
              },
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = $t({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            Pt,
            Lt,
            Jt,
            Xt,
            en,
            Mt,
          ],
        }),
        ln = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        cn = { name: "applyStyles", enabled: !1 },
        un = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements,
                n = e.reference,
                r = e.popper;
              if ("removeAttribute" in n) {
                var o = (n.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== r.id;
                  });
                o.length
                  ? n.setAttribute("aria-describedby", o.join(","))
                  : n.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              n = e.state.elements,
              r = n.popper,
              o = n.reference,
              i =
                null == (t = r.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (r.id && "tooltip" === i && "setAttribute" in o) {
              var a = o.getAttribute("aria-describedby");
              if (a && -1 !== a.split(",").indexOf(r.id)) return;
              o.setAttribute("aria-describedby", a ? a + "," + r.id : r.id);
            }
          },
        },
        fn = [];
      const dn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.enabled,
          i = void 0 === o || o,
          a = r.placement,
          s = void 0 === a ? "bottom" : a,
          l = r.strategy,
          c = void 0 === l ? "absolute" : l,
          u = r.modifiers,
          d = void 0 === u ? fn : u,
          h = (0, g.A)(r, ["enabled", "placement", "strategy", "modifiers"]),
          p = (0, f.useRef)(),
          m = (0, f.useCallback)(function () {
            var e;
            null == (e = p.current) || e.update();
          }, []),
          v = (0, f.useCallback)(function () {
            var e;
            null == (e = p.current) || e.forceUpdate();
          }, []),
          b = ot(
            (0, f.useState)({
              placement: s,
              update: m,
              forceUpdate: v,
              attributes: {},
              styles: { popper: ln(c), arrow: {} },
            }),
          ),
          w = b[0],
          A = b[1],
          E = (0, f.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    n = {},
                    r = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (n[e] = t.styles[e]), (r[e] = t.attributes[e]);
                  }),
                    A({
                      state: t,
                      styles: n,
                      attributes: r,
                      update: m,
                      forceUpdate: v,
                      placement: t.placement,
                    });
                },
              };
            },
            [m, v, A],
          );
        return (
          (0, f.useEffect)(
            function () {
              p.current &&
                i &&
                p.current.setOptions({
                  placement: s,
                  strategy: c,
                  modifiers: [].concat(d, [E, cn]),
                });
            },
            [c, s, E, i],
          ),
          (0, f.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (p.current = sn(
                    e,
                    t,
                    (0, y.A)({}, h, {
                      placement: s,
                      strategy: c,
                      modifiers: [].concat(d, [un, E]),
                    }),
                  )),
                  function () {
                    null != p.current &&
                      (p.current.destroy(),
                      (p.current = void 0),
                      A(function (e) {
                        return (0, y.A)({}, e, {
                          attributes: {},
                          styles: { popper: ln(c) },
                        });
                      }));
                  }
                );
            },
            [i, e, t],
          ),
          w
        );
      };
      var hn = !1,
        pn = !1;
      try {
        var mn = {
          get passive() {
            return (hn = !0);
          },
          get once() {
            return (pn = hn = !0);
          },
        };
        Ne &&
          (window.addEventListener("test", mn, mn),
          window.removeEventListener("test", mn, !0));
      } catch (e) {}
      const vn = function (e, t, n, r) {
        if (r && "boolean" != typeof r && !pn) {
          var o = r.once,
            i = r.capture,
            a = n;
          !pn &&
            o &&
            ((a =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, i), n.call(this, r);
              }),
            (n.__once = a)),
            e.addEventListener(t, a, hn ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      const gn = function (e, t, n, r) {
        var o = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, o),
          n.__once && e.removeEventListener(t, n.__once, o);
      };
      const yn = function (e, t, n, r) {
        return (
          vn(e, t, n, r),
          function () {
            gn(e, t, n, r);
          }
        );
      };
      const bn = function (e) {
        const t = (0, f.useRef)(e);
        return (
          (0, f.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function wn(e) {
        const t = bn(e);
        return (0, f.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var An = n(67501),
        En = n.n(An);
      const Dn = function (e) {
        return be(
          (function (e) {
            return e && "setState" in e
              ? He.findDOMNode(e)
              : null != e
                ? e
                : null;
          })(e),
        );
      };
      var Sn = function () {};
      var kn = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const _n = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.disabled,
          i = r.clickTrigger,
          a = void 0 === i ? "click" : i,
          s = (0, f.useRef)(!1),
          l = t || Sn,
          c = (0, f.useCallback)(
            function (t) {
              var n,
                r,
                o = kn(e);
              En()(
                !!o,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node",
              ),
                (s.current = !(
                  o &&
                  ((r = t),
                  !(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  !_e(
                    o,
                    null !=
                      (n =
                        null == t.composedPath ? void 0 : t.composedPath()[0])
                      ? n
                      : t.target,
                  )
                ));
            },
            [e],
          ),
          u = wn(function (e) {
            s.current || l(e);
          }),
          d = wn(function (e) {
            27 === e.keyCode && l(e);
          });
        (0, f.useEffect)(
          function () {
            if (!o && null != e) {
              var t = window.event,
                n = Dn(kn(e)),
                r = yn(n, a, c, !0),
                i = yn(n, a, function (e) {
                  e !== t ? u(e) : (t = void 0);
                }),
                s = yn(n, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                l = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (l = [].slice.call(n.body.children).map(function (e) {
                    return yn(e, "mousemove", Sn);
                  })),
                function () {
                  r(),
                    i(),
                    s(),
                    l.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, o, a, c, u, d],
        );
      };
      var On = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
            ? be().body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (t = e) && t.nodeType && e) || null);
      };
      function xn(e, t) {
        var n = (0, f.useState)(function () {
            return On(e);
          }),
          r = n[0],
          o = n[1];
        if (!r) {
          var i = On(e);
          i && o(i);
        }
        return (
          (0, f.useEffect)(
            function () {
              t && r && t(r);
            },
            [t, r],
          ),
          (0, f.useEffect)(
            function () {
              var t = On(e);
              t !== r && o(t);
            },
            [e, r],
          ),
          r
        );
      }
      function Mn(e) {
        var t,
          n,
          r,
          o,
          i,
          a = e.enabled,
          s = e.enableEvents,
          l = e.placement,
          c = e.flip,
          u = e.offset,
          f = e.fixed,
          d = e.containerPadding,
          h = e.arrowElement,
          p = e.popperConfig,
          m = void 0 === p ? {} : p,
          v = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(m.modifiers);
        return (0, y.A)({}, m, {
          placement: l,
          enabled: a,
          strategy: f ? "fixed" : m.strategy,
          modifiers:
            ((i = (0, y.A)({}, v, {
              eventListeners: { enabled: s },
              preventOverflow: (0, y.A)({}, v.preventOverflow, {
                options: d
                  ? (0, y.A)(
                      { padding: d },
                      null == (t = v.preventOverflow) ? void 0 : t.options,
                    )
                  : null == (n = v.preventOverflow)
                    ? void 0
                    : n.options,
              }),
              offset: {
                options: (0, y.A)(
                  { offset: u },
                  null == (r = v.offset) ? void 0 : r.options,
                ),
              },
              arrow: (0, y.A)({}, v.arrow, {
                enabled: !!h,
                options: (0, y.A)(
                  {},
                  null == (o = v.arrow) ? void 0 : o.options,
                  { element: h },
                ),
              }),
              flip: (0, y.A)({ enabled: !!c }, v.flip),
            })),
            void 0 === i && (i = {}),
            Array.isArray(i)
              ? i
              : Object.keys(i).map(function (e) {
                  return (i[e].name = e), i[e];
                })),
        });
      }
      var Rn = f.forwardRef(function (e, t) {
        var n = e.flip,
          r = e.offset,
          o = e.placement,
          i = e.containerPadding,
          a = void 0 === i ? 5 : i,
          s = e.popperConfig,
          l = void 0 === s ? {} : s,
          c = e.transition,
          u = Ue(),
          d = u[0],
          h = u[1],
          p = Ue(),
          m = p[0],
          v = p[1],
          b = Be(h, t),
          w = xn(e.container),
          A = xn(e.target),
          E = (0, f.useState)(!e.show),
          D = E[0],
          S = E[1],
          k = dn(
            A,
            d,
            Mn({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: a || 5,
              flip: n,
              offset: r,
              arrowElement: m,
              popperConfig: l,
            }),
          ),
          _ = k.styles,
          O = k.attributes,
          x = (0, g.A)(k, ["styles", "attributes"]);
        e.show ? D && S(!1) : e.transition || D || S(!0);
        var M = e.show || (c && !D);
        if (
          (_n(d, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !M)
        )
          return null;
        var R = e.children(
          (0, y.A)({}, x, {
            show: !!e.show,
            props: (0, y.A)({}, O.popper, { style: _.popper, ref: b }),
            arrowProps: (0, y.A)({}, O.arrow, { style: _.arrow, ref: v }),
          }),
        );
        if (c) {
          var C = e.onExit,
            T = e.onExiting,
            P = e.onEnter,
            N = e.onEntering,
            L = e.onEntered;
          R = f.createElement(
            c,
            {
              in: e.show,
              appear: !0,
              onExit: C,
              onExiting: T,
              onExited: function () {
                S(!0), e.onExited && e.onExited.apply(e, arguments);
              },
              onEnter: P,
              onEntering: N,
              onEntered: L,
            },
            R,
          );
        }
        return w ? He.createPortal(R, w) : null;
      });
      (Rn.displayName = "Overlay"),
        (Rn.propTypes = {
          show: k().bool,
          placement: k().oneOf(nt),
          target: k().any,
          container: k().any,
          flip: k().bool,
          children: k().func.isRequired,
          containerPadding: k().number,
          popperConfig: k().object,
          rootClose: k().bool,
          rootCloseEvent: k().oneOf(["click", "mousedown"]),
          rootCloseDisabled: k().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o;
            return e.rootClose
              ? (o = k().func).isRequired.apply(o, [e].concat(n))
              : k().func.apply(k(), [e].concat(n));
          },
          transition: k().elementType,
          onEnter: k().func,
          onEntering: k().func,
          onEntered: k().func,
          onExit: k().func,
          onExiting: k().func,
          onExited: k().func,
        });
      const Cn = Rn;
      var Tn = n(13964);
      const Pn = function (e, t) {
        return (0, Tn.A)(e, t);
      };
      function Nn(e, t) {
        var n = Oe(e);
        return n ? n.innerHeight : t ? e.clientHeight : Ce(e).height;
      }
      var Ln,
        zn = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function jn(e, t) {
        if (!Ln) {
          var n = document.body,
            r =
              n.matches ||
              n.matchesSelector ||
              n.webkitMatchesSelector ||
              n.mozMatchesSelector ||
              n.msMatchesSelector;
          Ln = function (e, t) {
            return r.call(e, t);
          };
        }
        return Ln(e, t);
      }
      function In(e, t, n) {
        e.closest && !n && e.closest(t);
        var r = e;
        do {
          if (jn(r, t)) return r;
          r = r.parentElement;
        } while (r && r !== n && r.nodeType === document.ELEMENT_NODE);
        return null;
      }
      const Fn = function (e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
      var Wn = n(17267),
        Hn = Math.max;
      const Un = function (e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var o = null == n ? 0 : me(n);
        return o < 0 && (o = Hn(r + o, 0)), Fn(e, (0, Wn.A)(t, 3), o);
      };
      var Yn = Math.ceil,
        Bn = Math.max;
      const qn = function (e, t, n, r) {
        for (var o = -1, i = Bn(Yn((t - e) / (n || 1)), 0), a = Array(i); i--; )
          (a[r ? i : ++o] = e), (e += n);
        return a;
      };
      const Kn = function (e) {
        return function (t, n, r) {
          return (
            r && "number" != typeof r && (0, fe.A)(t, n, r) && (n = r = void 0),
            (t = pe(t)),
            void 0 === n ? ((n = t), (t = 0)) : (n = pe(n)),
            (r = void 0 === r ? (t < n ? 1 : -1) : pe(r)),
            qn(t, n, r, e)
          );
        };
      };
      const Vn = Kn();
      var $n =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function Gn(e, t) {
        return e === t || !(!$n(e) || !$n(t));
      }
      function Xn(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (!Gn(e[n], t[n])) return !1;
        return !0;
      }
      function Zn(e, t) {
        void 0 === t && (t = Xn);
        var n = null;
        function r() {
          for (var r = [], o = 0; o < arguments.length; o++)
            r[o] = arguments[o];
          if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
          var i = e.apply(this, r);
          return (n = { lastResult: i, lastArgs: r, lastThis: this }), i;
        }
        return (
          (r.clear = function () {
            n = null;
          }),
          r
        );
      }
      var Qn = n(59913),
        Jn = n(17488),
        er = n(35953),
        tr = n(47546),
        nr = n(27761),
        rr = er.A ? er.A.isConcatSpreadable : void 0;
      const or = function (e) {
        return (0, nr.A)(e) || (0, tr.A)(e) || !!(rr && e && e[rr]);
      };
      const ir = function e(t, n, r, o, i) {
        var a = -1,
          s = t.length;
        for (r || (r = or), i || (i = []); ++a < s; ) {
          var l = t[a];
          n > 0 && r(l)
            ? n > 1
              ? e(l, n - 1, r, o, i)
              : (0, Jn.A)(i, l)
            : o || (i[i.length] = l);
        }
        return i;
      };
      var ar = n(4516),
        sr = n(78350),
        lr = n(64600);
      const cr = function (e, t) {
        var n = e.length;
        for (e.sort(t); n--; ) e[n] = e[n].value;
        return e;
      };
      var ur = n(93365),
        fr = n(73914);
      const dr = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            r = null === e,
            o = e == e,
            i = (0, fr.A)(e),
            a = void 0 !== t,
            s = null === t,
            l = t == t,
            c = (0, fr.A)(t);
          if (
            (!s && !c && !i && e > t) ||
            (i && a && l && !s && !c) ||
            (r && a && l) ||
            (!n && l) ||
            !o
          )
            return 1;
          if (
            (!r && !i && !c && e < t) ||
            (c && n && o && !r && !i) ||
            (s && n && o) ||
            (!a && o) ||
            !l
          )
            return -1;
        }
        return 0;
      };
      const hr = function (e, t, n) {
        for (
          var r = -1,
            o = e.criteria,
            i = t.criteria,
            a = o.length,
            s = n.length;
          ++r < a;
        ) {
          var l = dr(o[r], i[r]);
          if (l) return r >= s ? l : l * ("desc" == n[r] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var pr = n(41040);
      const mr = function (e, t, n) {
        t = t.length
          ? (0, ar.A)(t, function (e) {
              return (0, nr.A)(e)
                ? function (t) {
                    return (0, sr.A)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [pr.A];
        var r = -1;
        t = (0, ar.A)(t, (0, ur.A)(Wn.A));
        var o = (0, lr.A)(e, function (e, n, o) {
          return {
            criteria: (0, ar.A)(t, function (t) {
              return t(e);
            }),
            index: ++r,
            value: e,
          };
        });
        return cr(o, function (e, t) {
          return hr(e, t, n);
        });
      };
      var vr = n(83270);
      const gr = (0, vr.A)(function (e, t) {
        if (null == e) return [];
        var n = t.length;
        return (
          n > 1 && (0, fe.A)(e, t[0], t[1])
            ? (t = [])
            : n > 2 && (0, fe.A)(t[0], t[1], t[2]) && (t = [t[0]]),
          mr(e, ir(t, 1), [])
        );
      });
      var yr;
      function br(e) {
        if (((!yr && 0 !== yr) || e) && Ne) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (yr = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return yr;
      }
      function wr(e, t) {
        var n = Oe(e);
        return n ? n.innerWidth : t ? e.clientWidth : Ce(e).width;
      }
      var Ar = n(87537),
        Er = n(76805),
        Dr = n(78296),
        Sr = n(79474);
      function kr(e) {
        return (0, Ar.A)(e) || (0, Er.A)(e) || (0, Dr.A)(e) || (0, Sr.A)();
      }
      var _r = n(39234),
        Or = n(16673),
        xr = n(9175),
        Mr = n(13217),
        Rr = n(99763),
        Cr = n(84207),
        Tr = n(74603);
      const Pr = function (e, t) {
        return e && (0, Cr.A)(t, (0, Tr.A)(t), e);
      };
      var Nr = n(70158);
      const Lr = function (e, t) {
        return e && (0, Cr.A)(t, (0, Nr.A)(t), e);
      };
      var zr = n(27066),
        jr = n(80335),
        Ir = n(25606);
      const Fr = function (e, t) {
        return (0, Cr.A)(e, (0, Ir.A)(e), t);
      };
      var Wr = n(57695),
        Hr = n(72097);
      const Ur = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, Jn.A)(t, (0, Ir.A)(e)), (e = (0, Wr.A)(e));
            return t;
          }
        : Hr.A;
      const Yr = function (e, t) {
        return (0, Cr.A)(e, Ur(e), t);
      };
      var Br = n(81218),
        qr = n(80647);
      const Kr = function (e) {
        return (0, qr.A)(e, Nr.A, Ur);
      };
      var Vr = n(14645),
        $r = Object.prototype.hasOwnProperty;
      const Gr = function (e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            $r.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      };
      var Xr = n(18277);
      const Zr = function (e, t) {
        var n = t ? (0, Xr.A)(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      };
      var Qr = /\w*$/;
      const Jr = function (e) {
        var t = new e.constructor(e.source, Qr.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
      var eo = er.A ? er.A.prototype : void 0,
        to = eo ? eo.valueOf : void 0;
      const no = function (e) {
        return to ? Object(to.call(e)) : {};
      };
      var ro = n(12649);
      const oo = function (e, t, n) {
        var r = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return (0, Xr.A)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new r(+e);
          case "[object DataView]":
            return Zr(e, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, ro.A)(e, n);
          case "[object Map]":
          case "[object Set]":
            return new r();
          case "[object Number]":
          case "[object String]":
            return new r(e);
          case "[object RegExp]":
            return Jr(e);
          case "[object Symbol]":
            return no(e);
        }
      };
      var io = n(43577),
        ao = n(6314),
        so = n(83658);
      const lo = function (e) {
        return (0, so.A)(e) && "[object Map]" == (0, Vr.A)(e);
      };
      var co = n(23785),
        uo = co.A && co.A.isMap;
      const fo = uo ? (0, ur.A)(uo) : lo;
      var ho = n(35181);
      const po = function (e) {
        return (0, so.A)(e) && "[object Set]" == (0, Vr.A)(e);
      };
      var mo = co.A && co.A.isSet;
      const vo = mo ? (0, ur.A)(mo) : po;
      var go = "[object Arguments]",
        yo = "[object Function]",
        bo = "[object Object]",
        wo = {};
      (wo[go] =
        wo["[object Array]"] =
        wo["[object ArrayBuffer]"] =
        wo["[object DataView]"] =
        wo["[object Boolean]"] =
        wo["[object Date]"] =
        wo["[object Float32Array]"] =
        wo["[object Float64Array]"] =
        wo["[object Int8Array]"] =
        wo["[object Int16Array]"] =
        wo["[object Int32Array]"] =
        wo["[object Map]"] =
        wo["[object Number]"] =
        wo[bo] =
        wo["[object RegExp]"] =
        wo["[object Set]"] =
        wo["[object String]"] =
        wo["[object Symbol]"] =
        wo["[object Uint8Array]"] =
        wo["[object Uint8ClampedArray]"] =
        wo["[object Uint16Array]"] =
        wo["[object Uint32Array]"] =
          !0),
        (wo["[object Error]"] = wo[yo] = wo["[object WeakMap]"] = !1);
      const Ao = function e(t, n, r, o, i, a) {
        var s,
          l = 1 & n,
          c = 2 & n,
          u = 4 & n;
        if ((r && (s = i ? r(t, o, i, a) : r(t)), void 0 !== s)) return s;
        if (!(0, ho.A)(t)) return t;
        var f = (0, nr.A)(t);
        if (f) {
          if (((s = Gr(t)), !l)) return (0, jr.A)(t, s);
        } else {
          var d = (0, Vr.A)(t),
            h = d == yo || "[object GeneratorFunction]" == d;
          if ((0, ao.A)(t)) return (0, zr.A)(t, l);
          if (d == bo || d == go || (h && !i)) {
            if (((s = c || h ? {} : (0, io.A)(t)), !l))
              return c ? Yr(t, Lr(s, t)) : Fr(t, Pr(s, t));
          } else {
            if (!wo[d]) return i ? t : {};
            s = oo(t, d, l);
          }
        }
        a || (a = new xr.A());
        var p = a.get(t);
        if (p) return p;
        a.set(t, s),
          vo(t)
            ? t.forEach(function (o) {
                s.add(e(o, n, r, o, t, a));
              })
            : fo(t) &&
              t.forEach(function (o, i) {
                s.set(i, e(o, n, r, i, t, a));
              });
        var m = u ? (c ? Kr : Br.A) : c ? Nr.A : Tr.A,
          v = f ? void 0 : m(t);
        return (
          (0, Mr.A)(v || t, function (o, i) {
            v && (o = t[(i = o)]), (0, Rr.A)(s, i, e(o, n, r, i, t, a));
          }),
          s
        );
      };
      var Eo = n(1931);
      const Do = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const So = function (e, t) {
        return t.length < 2 ? e : (0, sr.A)(e, ue(t, 0, -1));
      };
      var ko = n(5269);
      const _o = function (e, t) {
        return (
          (t = (0, Eo.A)(t, e)),
          null == (e = So(e, t)) || delete e[(0, ko.A)(Do(t))]
        );
      };
      var Oo = n(77011);
      const xo = function (e) {
        return (0, Oo.A)(e) ? void 0 : e;
      };
      const Mo = function (e) {
        return (null == e ? 0 : e.length) ? ir(e, 1) : [];
      };
      var Ro = n(75702),
        Co = n(99660);
      const To = (function (e) {
        return (0, Co.A)((0, Ro.A)(e, void 0, Mo), e + "");
      })(function (e, t) {
        var n = {};
        if (null == e) return n;
        var r = !1;
        (t = (0, ar.A)(t, function (t) {
          return (t = (0, Eo.A)(t, e)), r || (r = t.length > 1), t;
        })),
          (0, Cr.A)(e, Kr(e), n),
          r && (n = Ao(n, 7, xo));
        for (var o = t.length; o--; ) _o(n, t[o]);
        return n;
      });
      var Po = n(58760),
        No = Object.prototype,
        Lo = No.hasOwnProperty;
      const zo = (0, vr.A)(function (e, t) {
        e = Object(e);
        var n = -1,
          r = t.length,
          o = r > 2 ? t[2] : void 0;
        for (o && (0, fe.A)(t[0], t[1], o) && (r = 1); ++n < r; )
          for (
            var i = t[n], a = (0, Nr.A)(i), s = -1, l = a.length;
            ++s < l;
          ) {
            var c = a[s],
              u = e[c];
            (void 0 === u || ((0, Po.A)(u, No[c]) && !Lo.call(e, c))) &&
              (e[c] = i[c]);
          }
        return e;
      });
      var jo = n(5536),
        Io = n(25665),
        Fo = n(30186),
        Wo = n(48693);
      const Ho = function (e, t, n) {
        var r = (0, nr.A)(e),
          o = r || (0, ao.A)(e) || (0, Wo.A)(e);
        if (((t = (0, Wn.A)(t, 4)), null == n)) {
          var i = e && e.constructor;
          n = o
            ? r
              ? new i()
              : []
            : (0, ho.A)(e) && (0, Fo.A)(i)
              ? (0, jo.A)((0, Wr.A)(e))
              : {};
        }
        return (
          (o ? Mr.A : Io.A)(e, function (e, r, o) {
            return t(n, e, r, o);
          }),
          n
        );
      };
      var Uo = n(63376);
      const Yo = function (e, t) {
        var n = {};
        return (
          (t = (0, Wn.A)(t, 3)),
          (0, Io.A)(e, function (e, r, o) {
            (0, Uo.A)(n, r, t(e, r, o));
          }),
          n
        );
      };
      n(22586), n(20237), n(83632), n(43334), n(39920), n(4042), n(14240);
      function Bo(e) {
        return e.children;
      }
      var qo = "PREV",
        Ko = "NEXT",
        Vo = "TODAY",
        $o = "DATE",
        Go = {
          MONTH: "month",
          WEEK: "week",
          WORK_WEEK: "work_week",
          DAY: "day",
          AGENDA: "agenda",
        },
        Xo = Object.keys(Go).map(function (e) {
          return Go[e];
        });
      function Zo(e, t) {
        e && e.apply(null, [].concat(t));
      }
      k().oneOfType([k().string, k().func]),
        k().any,
        k().func,
        k().oneOfType([
          k().arrayOf(k().oneOf(Xo)),
          k().objectOf(function (e, t) {
            if (-1 !== Xo.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
              o < n;
              o++
            )
              r[o - 2] = arguments[o];
            return k().elementType.apply(k(), [e, t].concat(r));
          }),
        ]),
        k().oneOfType([k().oneOf(["overlap", "no-overlap"]), k().func]);
      var Qo = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function Jo(e, t) {
        var n = H(e, "month");
        return H(n, "week", t.startOfWeek());
      }
      function ei(e, t) {
        var n = U(e, "month");
        return U(n, "week", t.startOfWeek());
      }
      function ti(e, t) {
        for (var n = Jo(e, t), r = ei(e, t), o = []; $(n, r, "day"); )
          o.push(n), (n = F(n, 1, "day"));
        return o;
      }
      function ni(e, t) {
        var n = H(e, t);
        return Y(n, e) ? n : F(n, 1, t);
      }
      function ri(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            r = e,
            o = [];
          $(r, t, n);
        )
          o.push(r), (r = F(r, 1, n));
        return o;
      }
      function oi(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = H(e, "day")),
            (e = te(e, te(t))),
            (e = ee(e, ee(t))),
            (e = J(e, J(t))),
            Q(e, Q(t)));
      }
      function ii(e) {
        return 0 === te(e) && 0 === ee(e) && 0 === J(e) && 0 === Q(e);
      }
      function ai(e, t, n) {
        return n && "milliseconds" !== n
          ? Math.round(Math.abs(+H(e, n) / Qo[n] - +H(t, n) / Qo[n]))
          : Math.abs(+e - +t);
      }
      var si = k().oneOfType([k().string, k().func]);
      function li(e, t, n, r, o) {
        var i = "function" == typeof r ? r(n, o, e) : t.call(e, n, r, o);
        return (
          h()(
            null == i || "string" == typeof i,
            "`localizer format(..)` must return a string, null, or undefined",
          ),
          i
        );
      }
      function ci(e, t, n) {
        return new Date(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          0,
          t + n,
          0,
          0,
        );
      }
      function ui(e, t) {
        return e.getTimezoneOffset() - t.getTimezoneOffset();
      }
      function fi(e, t) {
        return ai(e, t, "minutes") + ui(e, t);
      }
      function di(e) {
        var t = H(e, "day");
        return ai(t, e, "minutes") + ui(t, e);
      }
      function hi(e, t) {
        return V(e, t, "day");
      }
      function pi(e, t, n) {
        return Y(e, t, "minutes") ? K(t, n, "minutes") : q(t, n, "minutes");
      }
      function mi(e) {
        var t = e.evtA,
          n = t.start,
          r = t.end,
          o = t.allDay,
          i = e.evtB,
          a = i.start,
          s = i.end,
          l = i.allDay,
          c = +H(n, "day") - +H(a, "day"),
          u = ai(n, ni(r, "day"), "day"),
          f = ai(a, ni(s, "day"), "day");
        return (
          c ||
          Math.max(f, 1) - Math.max(u, 1) ||
          !!l - !!o ||
          +n - +a ||
          +r - +s
        );
      }
      function vi(e) {
        var t = e.event,
          n = t.start,
          r = t.end,
          o = e.range,
          i = o.start,
          a = o.end,
          s = H(n, "day"),
          l = $(s, a, "day"),
          c = B(s, r, "minutes") ? q(r, i, "minutes") : K(r, i, "minutes");
        return l && c;
      }
      function gi(e, t) {
        return Y(e, t, "day");
      }
      function yi(e, t) {
        return ii(e) && ii(t);
      }
      var bi = (0, s.A)(function e(t) {
        var n = this;
        (0, a.A)(this, e),
          h()(
            "function" == typeof t.format,
            "date localizer `format(..)` must be a function",
          ),
          h()(
            "function" == typeof t.firstOfWeek,
            "date localizer `firstOfWeek(..)` must be a function",
          ),
          (this.propType = t.propType || si),
          (this.formats = t.formats),
          (this.format = function () {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return li.apply(void 0, [n, t.format].concat(r));
          }),
          (this.startOfWeek = t.firstOfWeek),
          (this.merge = t.merge || oi),
          (this.inRange = t.inRange || Z),
          (this.lt = t.lt || V),
          (this.lte = t.lte || $),
          (this.gt = t.gt || q),
          (this.gte = t.gte || K),
          (this.eq = t.eq || Y),
          (this.neq = t.neq || B),
          (this.startOf = t.startOf || H),
          (this.endOf = t.endOf || U),
          (this.add = t.add || F),
          (this.range = t.range || ri),
          (this.diff = t.diff || ai),
          (this.ceil = t.ceil || ni),
          (this.min = t.min || G),
          (this.max = t.max || X),
          (this.minutes = t.minutes || ee),
          (this.firstVisibleDay = t.firstVisibleDay || Jo),
          (this.lastVisibleDay = t.lastVisibleDay || ei),
          (this.visibleDays = t.visibleDays || ti),
          (this.getSlotDate = t.getSlotDate || ci),
          (this.getTimezoneOffset =
            t.getTimezoneOffset ||
            function (e) {
              return e.getTimezoneOffset();
            }),
          (this.getDstOffset = t.getDstOffset || ui),
          (this.getTotalMin = t.getTotalMin || fi),
          (this.getMinutesFromMidnight = t.getMinutesFromMidnight || di),
          (this.continuesPrior = t.continuesPrior || hi),
          (this.continuesAfter = t.continuesAfter || pi),
          (this.sortEvents = t.sortEvents || mi),
          (this.inEventRange = t.inEventRange || vi),
          (this.isSameDate = t.isSameDate || gi),
          (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || yi),
          (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
      });
      function wi(e, t, n, o) {
        var i = (0, r.A)((0, r.A)({}, e.formats), n);
        return (0, r.A)(
          (0, r.A)({}, e),
          {},
          {
            messages: o,
            startOfWeek: function () {
              return e.startOfWeek(t);
            },
            format: function (n, r) {
              return e.format(n, i[r] || r, t);
            },
          },
        );
      }
      var Ai = {
        date: "Date",
        time: "Time",
        event: "Event",
        allDay: "All Day",
        week: "Week",
        work_week: "Work Week",
        day: "Day",
        month: "Month",
        previous: "Back",
        next: "Next",
        yesterday: "Yesterday",
        tomorrow: "Tomorrow",
        today: "Today",
        agenda: "Agenda",
        noEventsInRange: "There are no events in this range.",
        showMore: function (e) {
          return "+".concat(e, " more");
        },
      };
      var Ei = [
          "style",
          "className",
          "event",
          "selected",
          "isAllDay",
          "onSelect",
          "onDoubleClick",
          "onKeyPress",
          "localizer",
          "continuesPrior",
          "continuesAfter",
          "accessors",
          "getters",
          "children",
          "components",
          "slotStart",
          "slotEnd",
        ],
        Di = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.style,
                    n = e.className,
                    i = e.event,
                    a = e.selected,
                    s = e.isAllDay,
                    l = e.onSelect,
                    c = e.onDoubleClick,
                    u = e.onKeyPress,
                    d = e.localizer,
                    h = e.continuesPrior,
                    p = e.continuesAfter,
                    m = e.accessors,
                    v = e.getters,
                    g = e.children,
                    y = e.components,
                    b = y.event,
                    w = y.eventWrapper,
                    A = e.slotStart,
                    E = e.slotEnd,
                    S = (0, o.A)(e, Ei);
                  delete S.resizable;
                  var k = m.title(i),
                    _ = m.tooltip(i),
                    O = m.end(i),
                    x = m.start(i),
                    M = m.allDay(i),
                    R = s || M || d.diff(x, d.ceil(O, "day"), "day") > 1,
                    C = v.eventProp(i, x, O, a),
                    T = f.createElement(
                      "div",
                      { className: "rbc-event-content", title: _ || void 0 },
                      b
                        ? f.createElement(b, {
                            event: i,
                            continuesPrior: h,
                            continuesAfter: p,
                            title: k,
                            isAllDay: M,
                            localizer: d,
                            slotStart: A,
                            slotEnd: E,
                          })
                        : k,
                    );
                  return f.createElement(
                    w,
                    Object.assign({}, this.props, { type: "date" }),
                    f.createElement(
                      "div",
                      Object.assign({}, S, {
                        tabIndex: 0,
                        style: (0, r.A)((0, r.A)({}, C.style), t),
                        className: (0, D.A)("rbc-event", n, C.className, {
                          "rbc-selected": a,
                          "rbc-event-allday": R,
                          "rbc-event-continues-prior": h,
                          "rbc-event-continues-after": p,
                        }),
                        onClick: function (e) {
                          return l && l(i, e);
                        },
                        onDoubleClick: function (e) {
                          return c && c(i, e);
                        },
                        onKeyPress: function (e) {
                          return u && u(i, e);
                        },
                      }),
                      "function" == typeof g ? g(T) : T,
                    ),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function Si(e, t) {
        return !(!e || null == t) && Pn(e, t);
      }
      function ki(e, t) {
        return (e.right - e.left) / t;
      }
      function _i(e, t, n, r) {
        var o = ki(e, r);
        return n
          ? r - 1 - Math.floor((t - e.left) / o)
          : Math.floor((t - e.left) / o);
      }
      function Oi(e) {
        var t,
          n,
          r,
          o = e.containerRef,
          i = e.accessors,
          a = e.getters,
          s = e.selected,
          l = e.components,
          c = e.localizer,
          u = e.position,
          d = e.show,
          h = e.events,
          p = e.slotStart,
          m = e.slotEnd,
          v = e.onSelect,
          g = e.onDoubleClick,
          y = e.onKeyPress,
          b = e.handleDragStart,
          w = e.popperRef,
          A = e.target,
          E = e.offset;
        (n = (t = { ref: w, callback: d }).ref),
          (r = t.callback),
          (0, f.useEffect)(
            function () {
              var e = function (e) {
                n.current && !n.current.contains(e.target) && r();
              };
              return (
                document.addEventListener("mousedown", e),
                function () {
                  document.removeEventListener("mousedown", e);
                }
              );
            },
            [n, r],
          ),
          (0, f.useLayoutEffect)(
            function () {
              var e = (function (e) {
                  var t = e.target,
                    n = e.offset,
                    r = e.container,
                    o = e.box,
                    i = Ce(t),
                    a = i.top,
                    s = i.left,
                    l = i.width,
                    c = i.height,
                    u = Ce(r),
                    f = u.top,
                    d = u.left,
                    h = u.width,
                    p = u.height,
                    m = Ce(o),
                    v = m.width,
                    g = m.height,
                    y = f + p,
                    b = d + h,
                    w = a + g,
                    A = s + v,
                    E = n.x,
                    D = n.y;
                  return {
                    topOffset: w > y ? a - g - D : a + D + c,
                    leftOffset: A > b ? s + E - v + l : s + E,
                  };
                })({
                  target: A,
                  offset: E,
                  container: o.current,
                  box: w.current,
                }),
                t = e.topOffset,
                n = e.leftOffset;
              (w.current.style.top = "".concat(t, "px")),
                (w.current.style.left = "".concat(n, "px"));
            },
            [E.x, E.y, A],
          );
        var D = u.width,
          S = { minWidth: D + D / 2 };
        return f.createElement(
          "div",
          { style: S, className: "rbc-overlay", ref: w },
          f.createElement(
            "div",
            { className: "rbc-overlay-header" },
            c.format(p, "dayHeaderFormat"),
          ),
          h.map(function (e, t) {
            return f.createElement(Di, {
              key: t,
              type: "popup",
              localizer: c,
              event: e,
              getters: a,
              onSelect: v,
              accessors: i,
              components: l,
              onDoubleClick: g,
              onKeyPress: y,
              continuesPrior: c.lt(i.end(e), p, "day"),
              continuesAfter: c.gte(i.start(e), m, "day"),
              slotStart: p,
              slotEnd: m,
              selected: Si(e, s),
              draggable: !0,
              onDragStart: function () {
                return b(e);
              },
              onDragEnd: function () {
                return d();
              },
            });
          }),
        );
      }
      var xi = f.forwardRef(function (e, t) {
        return f.createElement(Oi, Object.assign({}, e, { popperRef: t }));
      });
      function Mi(e) {
        var t = e.containerRef,
          n = e.popupOffset,
          r = void 0 === n ? 5 : n,
          o = e.overlay,
          i = e.accessors,
          a = e.localizer,
          s = e.components,
          l = e.getters,
          c = e.selected,
          u = e.handleSelectEvent,
          d = e.handleDoubleClickEvent,
          h = e.handleKeyPressEvent,
          p = e.handleDragStart,
          m = e.onHide,
          v = e.overlayDisplay,
          g = (0, f.useRef)(null);
        if (!o.position) return null;
        var y = r;
        isNaN(r) || (y = { x: r, y: r });
        var b = o.position,
          w = o.events,
          A = o.date,
          E = o.end;
        return f.createElement(
          Cn,
          {
            rootClose: !0,
            flip: !0,
            show: !0,
            placement: "bottom",
            onHide: m,
            target: o.target,
          },
          function (e) {
            var n = e.props;
            return f.createElement(
              xi,
              Object.assign({}, n, {
                containerRef: t,
                ref: g,
                target: o.target,
                offset: y,
                accessors: i,
                getters: l,
                selected: c,
                components: s,
                localizer: a,
                position: b,
                show: v,
                events: w,
                slotStart: A,
                slotEnd: E,
                onSelect: u,
                onDoubleClick: d,
                onKeyPress: h,
                handleDragStart: p,
              }),
            );
          },
        );
      }
      xi.propTypes = {
        accessors: k().object.isRequired,
        getters: k().object.isRequired,
        selected: k().object,
        components: k().object.isRequired,
        localizer: k().object.isRequired,
        position: k().object.isRequired,
        show: k().func.isRequired,
        events: k().array.isRequired,
        slotStart: k().instanceOf(Date).isRequired,
        slotEnd: k().instanceOf(Date),
        onSelect: k().func,
        onDoubleClick: k().func,
        onKeyPress: k().func,
        handleDragStart: k().func,
        style: k().object,
        offset: k().shape({ x: k().number, y: k().number }),
      };
      var Ri = f.forwardRef(function (e, t) {
        return f.createElement(Mi, Object.assign({}, e, { containerRef: t }));
      });
      function Ci(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : document;
        return yn(n, e, t, { passive: !1 });
      }
      function Ti(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return In(document.elementFromPoint(n, r), ".rbc-event", e);
        })(e, t);
      }
      function Pi(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return In(document.elementFromPoint(n, r), ".rbc-show-more", e);
        })(e, t);
      }
      function Ni(e) {
        var t = e;
        return (
          e.touches && e.touches.length && (t = e.touches[0]),
          {
            clientX: t.clientX,
            clientY: t.clientY,
            pageX: t.pageX,
            pageY: t.pageY,
          }
        );
      }
      Ri.propTypes = {
        popupOffset: k().oneOfType([
          k().number,
          k().shape({ x: k().number, y: k().number }),
        ]),
        overlay: k().shape({
          position: k().object,
          events: k().array,
          date: k().instanceOf(Date),
          end: k().instanceOf(Date),
        }),
        accessors: k().object.isRequired,
        localizer: k().object.isRequired,
        components: k().object.isRequired,
        getters: k().object.isRequired,
        selected: k().object,
        handleSelectEvent: k().func,
        handleDoubleClickEvent: k().func,
        handleKeyPressEvent: k().func,
        handleDragStart: k().func,
        onHide: k().func,
        overlayDisplay: k().func,
      };
      var Li = (function () {
        function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.global,
            o = void 0 !== r && r,
            i = n.longPressThreshold,
            s = void 0 === i ? 250 : i,
            l = n.validContainers,
            c = void 0 === l ? [] : l;
          (0, a.A)(this, e),
            (this.isDetached = !1),
            (this.container = t),
            (this.globalMouse = !t || o),
            (this.longPressThreshold = s),
            (this.validContainers = c),
            (this._listeners = Object.create(null)),
            (this._handleInitialEvent = this._handleInitialEvent.bind(this)),
            (this._handleMoveEvent = this._handleMoveEvent.bind(this)),
            (this._handleTerminatingEvent =
              this._handleTerminatingEvent.bind(this)),
            (this._keyListener = this._keyListener.bind(this)),
            (this._dropFromOutsideListener =
              this._dropFromOutsideListener.bind(this)),
            (this._dragOverFromOutsideListener =
              this._dragOverFromOutsideListener.bind(this)),
            (this._removeTouchMoveWindowListener = Ci(
              "touchmove",
              function () {},
              window,
            )),
            (this._removeKeyDownListener = Ci("keydown", this._keyListener)),
            (this._removeKeyUpListener = Ci("keyup", this._keyListener)),
            (this._removeDropFromOutsideListener = Ci(
              "drop",
              this._dropFromOutsideListener,
            )),
            (this._removeDragOverFromOutsideListener = Ci(
              "dragover",
              this._dragOverFromOutsideListener,
            )),
            this._addInitialEventListener();
        }
        return (
          (0, s.A)(e, [
            {
              key: "on",
              value: function (e, t) {
                var n = this._listeners[e] || (this._listeners[e] = []);
                return (
                  n.push(t),
                  {
                    remove: function () {
                      var e = n.indexOf(t);
                      -1 !== e && n.splice(e, 1);
                    },
                  }
                );
              },
            },
            {
              key: "emit",
              value: function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                var o;
                return (
                  (this._listeners[e] || []).forEach(function (e) {
                    void 0 === o && (o = e.apply(void 0, n));
                  }),
                  o
                );
              },
            },
            {
              key: "teardown",
              value: function () {
                (this.isDetached = !0),
                  (this._listeners = Object.create(null)),
                  this._removeTouchMoveWindowListener &&
                    this._removeTouchMoveWindowListener(),
                  this._removeInitialEventListener &&
                    this._removeInitialEventListener(),
                  this._removeEndListener && this._removeEndListener(),
                  this._onEscListener && this._onEscListener(),
                  this._removeMoveListener && this._removeMoveListener(),
                  this._removeKeyUpListener && this._removeKeyUpListener(),
                  this._removeKeyDownListener && this._removeKeyDownListener(),
                  this._removeDropFromOutsideListener &&
                    this._removeDropFromOutsideListener(),
                  this._removeDragOverFromOutsideListener &&
                    this._removeDragOverFromOutsideListener();
              },
            },
            {
              key: "isSelected",
              value: function (e) {
                var t = this._selectRect;
                return !(!t || !this.selecting) && zi(t, ji(e));
              },
            },
            {
              key: "filter",
              value: function (e) {
                return this._selectRect && this.selecting
                  ? e.filter(this.isSelected, this)
                  : [];
              },
            },
            {
              key: "_addLongPressListener",
              value: function (e, t) {
                var n = this,
                  r = null,
                  o = null,
                  i = null,
                  a = function (t) {
                    (r = setTimeout(function () {
                      l(), e(t);
                    }, n.longPressThreshold)),
                      (o = Ci("touchmove", function () {
                        return l();
                      })),
                      (i = Ci("touchend", function () {
                        return l();
                      }));
                  },
                  s = Ci("touchstart", a),
                  l = function () {
                    r && clearTimeout(r),
                      o && o(),
                      i && i(),
                      (r = null),
                      (o = null),
                      (i = null);
                  };
                return (
                  t && a(t),
                  function () {
                    l(), s();
                  }
                );
              },
            },
            {
              key: "_addInitialEventListener",
              value: function () {
                var e = this,
                  t = Ci("mousedown", function (t) {
                    e._removeInitialEventListener(),
                      e._handleInitialEvent(t),
                      (e._removeInitialEventListener = Ci(
                        "mousedown",
                        e._handleInitialEvent,
                      ));
                  }),
                  n = Ci("touchstart", function (t) {
                    e._removeInitialEventListener(),
                      (e._removeInitialEventListener = e._addLongPressListener(
                        e._handleInitialEvent,
                        t,
                      ));
                  });
                this._removeInitialEventListener = function () {
                  t(), n();
                };
              },
            },
            {
              key: "_dropFromOutsideListener",
              value: function (e) {
                var t = Ni(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY;
                this.emit("dropFromOutside", {
                  x: n,
                  y: r,
                  clientX: o,
                  clientY: i,
                }),
                  e.preventDefault();
              },
            },
            {
              key: "_dragOverFromOutsideListener",
              value: function (e) {
                var t = Ni(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY;
                this.emit("dragOverFromOutside", {
                  x: n,
                  y: r,
                  clientX: o,
                  clientY: i,
                }),
                  e.preventDefault();
              },
            },
            {
              key: "_handleInitialEvent",
              value: function (e) {
                if (!this.isDetached) {
                  var t,
                    n = Ni(e),
                    r = n.clientX,
                    o = n.clientY,
                    a = n.pageX,
                    s = n.pageY,
                    l = this.container();
                  if (
                    3 !== e.which &&
                    2 !== e.button &&
                    ((u = r),
                    (f = o),
                    !(c = l) || _e(c, document.elementFromPoint(u, f)))
                  ) {
                    var c, u, f;
                    if (!this.globalMouse && l && !_e(l, e.target)) {
                      var d = (function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          "object" !== (0, i.A)(e) &&
                            (e = { top: e, left: e, right: e, bottom: e });
                          return e;
                        })(0),
                        h = d.top,
                        p = d.left,
                        m = d.bottom,
                        v = d.right;
                      if (
                        !zi(
                          {
                            top: (t = ji(l)).top - h,
                            left: t.left - p,
                            bottom: t.bottom + m,
                            right: t.right + v,
                          },
                          { top: s, left: a },
                        )
                      )
                        return;
                    }
                    if (
                      !1 !==
                      this.emit(
                        "beforeSelect",
                        (this._initialEventData = {
                          isTouch: /^touch/.test(e.type),
                          x: a,
                          y: s,
                          clientX: r,
                          clientY: o,
                        }),
                      )
                    )
                      switch (e.type) {
                        case "mousedown":
                          (this._removeEndListener = Ci(
                            "mouseup",
                            this._handleTerminatingEvent,
                          )),
                            (this._onEscListener = Ci(
                              "keydown",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Ci(
                              "mousemove",
                              this._handleMoveEvent,
                            ));
                          break;
                        case "touchstart":
                          this._handleMoveEvent(e),
                            (this._removeEndListener = Ci(
                              "touchend",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Ci(
                              "touchmove",
                              this._handleMoveEvent,
                            ));
                      }
                  }
                }
              },
            },
            {
              key: "_isWithinValidContainer",
              value: function (e) {
                var t = e.target,
                  n = this.validContainers;
                return (
                  !(n && n.length && t) ||
                  n.some(function (e) {
                    return !!t.closest(e);
                  })
                );
              },
            },
            {
              key: "_handleTerminatingEvent",
              value: function (e) {
                var t = Ni(e),
                  n = t.pageX,
                  r = t.pageY;
                if (
                  ((this.selecting = !1),
                  this._removeEndListener && this._removeEndListener(),
                  this._removeMoveListener && this._removeMoveListener(),
                  this._initialEventData)
                ) {
                  var o = !this.container || _e(this.container(), e.target),
                    i = this._isWithinValidContainer(e),
                    a = this._selectRect,
                    s = this.isClick(n, r);
                  return (
                    (this._initialEventData = null),
                    "Escape" !== e.key && i
                      ? s && o
                        ? this._handleClickEvent(e)
                        : s
                          ? this.emit("reset")
                          : this.emit("select", a)
                      : this.emit("reset")
                  );
                }
              },
            },
            {
              key: "_handleClickEvent",
              value: function (e) {
                var t = Ni(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY,
                  a = new Date().getTime();
                return this._lastClickData &&
                  a - this._lastClickData.timestamp < 250
                  ? ((this._lastClickData = null),
                    this.emit("doubleClick", {
                      x: n,
                      y: r,
                      clientX: o,
                      clientY: i,
                    }))
                  : ((this._lastClickData = { timestamp: a }),
                    this.emit("click", { x: n, y: r, clientX: o, clientY: i }));
              },
            },
            {
              key: "_handleMoveEvent",
              value: function (e) {
                if (null !== this._initialEventData && !this.isDetached) {
                  var t = this._initialEventData,
                    n = t.x,
                    r = t.y,
                    o = Ni(e),
                    i = o.pageX,
                    a = o.pageY,
                    s = Math.abs(n - i),
                    l = Math.abs(r - a),
                    c = Math.min(i, n),
                    u = Math.min(a, r),
                    f = this.selecting;
                  (!this.isClick(i, a) || f || s || l) &&
                    ((this.selecting = !0),
                    (this._selectRect = {
                      top: u,
                      left: c,
                      x: i,
                      y: a,
                      right: c + s,
                      bottom: u + l,
                    }),
                    f || this.emit("selectStart", this._initialEventData),
                    this.isClick(i, a) ||
                      this.emit("selecting", this._selectRect),
                    e.preventDefault());
                }
              },
            },
            {
              key: "_keyListener",
              value: function (e) {
                this.ctrl = e.metaKey || e.ctrlKey;
              },
            },
            {
              key: "isClick",
              value: function (e, t) {
                var n = this._initialEventData,
                  r = n.x,
                  o = n.y;
                return (
                  !n.isTouch && Math.abs(e - r) <= 5 && Math.abs(t - o) <= 5
                );
              },
            },
          ]),
          e
        );
      })();
      function zi(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = ji(e),
          o = r.top,
          i = r.left,
          a = r.right,
          s = void 0 === a ? i : a,
          l = r.bottom,
          c = void 0 === l ? o : l,
          u = ji(t),
          f = u.top,
          d = u.left,
          h = u.right,
          p = void 0 === h ? d : h,
          m = u.bottom;
        return !(
          c - n < f ||
          o + n > (void 0 === m ? f : m) ||
          s - n < d ||
          i + n > p
        );
      }
      function ji(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          n = t.left + Ii("left"),
          r = t.top + Ii("top");
        return {
          top: r,
          left: n,
          right: (e.offsetWidth || 0) + n,
          bottom: (e.offsetHeight || 0) + r,
        };
      }
      function Ii(e) {
        return "left" === e
          ? window.pageXOffset || document.body.scrollLeft || 0
          : "top" === e
            ? window.pageYOffset || document.body.scrollTop || 0
            : void 0;
      }
      var Fi = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n(e, r) {
            var o;
            return (
              (0, a.A)(this, n),
              ((o = t.call(this, e, r)).state = { selecting: !1 }),
              (o.containerRef = (0, f.createRef)()),
              o
            );
          }
          return (
            (0, s.A)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.selectable && this._selectable();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._teardownSelectable();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  !e.selectable && this.props.selectable && this._selectable(),
                    e.selectable &&
                      !this.props.selectable &&
                      this._teardownSelectable();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.range,
                    n = e.getNow,
                    r = e.getters,
                    o = e.date,
                    i = e.components.dateCellWrapper,
                    a = e.localizer,
                    s = this.state,
                    l = s.selecting,
                    c = s.startIdx,
                    u = s.endIdx,
                    d = n();
                  return f.createElement(
                    "div",
                    { className: "rbc-row-bg", ref: this.containerRef },
                    t.map(function (e, n) {
                      var s = l && n >= c && n <= u,
                        h = r.dayProp(e),
                        p = h.className,
                        m = h.style;
                      return f.createElement(
                        i,
                        { key: n, value: e, range: t },
                        f.createElement("div", {
                          style: m,
                          className: (0, D.A)(
                            "rbc-day-bg",
                            p,
                            s && "rbc-selected-cell",
                            a.isSameDate(e, d) && "rbc-today",
                            o && a.neq(o, e, "month") && "rbc-off-range-bg",
                          ),
                        }),
                      );
                    }),
                  );
                },
              },
              {
                key: "_selectable",
                value: function () {
                  var e = this,
                    t = this.containerRef.current,
                    n = (this._selector = new Li(this.props.container, {
                      longPressThreshold: this.props.longPressThreshold,
                    })),
                    o = function (n, r) {
                      if (!Ti(t, n) && !Pi(t, n)) {
                        var o = ji(t),
                          i = e.props,
                          a = i.range,
                          s = i.rtl;
                        if (
                          ((c = o),
                          (f = (u = n).x),
                          (d = u.y) >= c.top &&
                            d <= c.bottom &&
                            f >= c.left &&
                            f <= c.right)
                        ) {
                          var l = _i(o, n.x, s, a.length);
                          e._selectSlot({
                            startIdx: l,
                            endIdx: l,
                            action: r,
                            box: n,
                          });
                        }
                      }
                      var c, u, f, d;
                      (e._initial = {}), e.setState({ selecting: !1 });
                    };
                  n.on("selecting", function (r) {
                    var o = e.props,
                      i = o.range,
                      a = o.rtl,
                      s = -1,
                      l = -1;
                    if (
                      (e.state.selecting ||
                        (Zo(e.props.onSelectStart, [r]),
                        (e._initial = { x: r.x, y: r.y })),
                      n.isSelected(t))
                    ) {
                      var c = ji(t),
                        u = (function (e, t, n, r, o) {
                          var i = -1,
                            a = -1,
                            s = r - 1,
                            l = ki(t, r),
                            c = _i(t, n.x, o, r),
                            u = t.top < n.y && t.bottom > n.y,
                            f = t.top < e.y && t.bottom > e.y,
                            d = e.y > t.bottom,
                            h = t.top > e.y;
                          return (
                            n.top < t.top &&
                              n.bottom > t.bottom &&
                              ((i = 0), (a = s)),
                            u &&
                              (h
                                ? ((i = 0), (a = c))
                                : d && ((i = c), (a = s))),
                            f &&
                              ((i = a =
                                o
                                  ? s - Math.floor((e.x - t.left) / l)
                                  : Math.floor((e.x - t.left) / l)),
                              u
                                ? c < i
                                  ? (i = c)
                                  : (a = c)
                                : e.y < n.y
                                  ? (a = s)
                                  : (i = 0)),
                            { startIdx: i, endIdx: a }
                          );
                        })(e._initial, c, r, i.length, a);
                      (s = u.startIdx), (l = u.endIdx);
                    }
                    e.setState({ selecting: !0, startIdx: s, endIdx: l });
                  }),
                    n.on("beforeSelect", function (t) {
                      if ("ignoreEvents" === e.props.selectable)
                        return !Ti(e.containerRef.current, t);
                    }),
                    n.on("click", function (e) {
                      return o(e, "click");
                    }),
                    n.on("doubleClick", function (e) {
                      return o(e, "doubleClick");
                    }),
                    n.on("select", function (t) {
                      e._selectSlot(
                        (0, r.A)(
                          (0, r.A)({}, e.state),
                          {},
                          { action: "select", bounds: t },
                        ),
                      ),
                        (e._initial = {}),
                        e.setState({ selecting: !1 }),
                        Zo(e.props.onSelectEnd, [e.state]);
                    });
                },
              },
              {
                key: "_teardownSelectable",
                value: function () {
                  this._selector &&
                    (this._selector.teardown(), (this._selector = null));
                },
              },
              {
                key: "_selectSlot",
                value: function (e) {
                  var t = e.endIdx,
                    n = e.startIdx,
                    r = e.action,
                    o = e.bounds,
                    i = e.box;
                  -1 !== t &&
                    -1 !== n &&
                    this.props.onSelectSlot &&
                    this.props.onSelectSlot({
                      start: n,
                      end: t,
                      action: r,
                      bounds: o,
                      box: i,
                      resourceId: this.props.resourceId,
                    });
                },
              },
            ]),
            n
          );
        })(f.Component),
        Wi =
          (k().object.isRequired,
          k().object,
          k().bool,
          k().object.isRequired,
          k().object.isRequired,
          k().object.isRequired,
          k().object.isRequired,
          k().func,
          k().func,
          k().func,
          { segments: [], selected: {} }),
        Hi = function (e, t) {
          var n = e.selected;
          e.isAllDay;
          var r = e.accessors,
            o = e.getters,
            i = e.onSelect,
            a = e.onDoubleClick,
            s = e.onKeyPress,
            l = e.localizer,
            c = e.slotMetrics,
            u = e.components,
            d = e.resizable,
            h = c.continuesPrior(t),
            p = c.continuesAfter(t);
          return f.createElement(Di, {
            event: t,
            getters: o,
            localizer: l,
            accessors: r,
            components: u,
            onSelect: i,
            onDoubleClick: a,
            onKeyPress: s,
            continuesPrior: h,
            continuesAfter: p,
            slotStart: c.first,
            slotEnd: c.last,
            selected: Si(t, n),
            resizable: d,
          });
        },
        Ui = function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : " ",
            o = (Math.abs(t) / e) * 100 + "%";
          return f.createElement(
            "div",
            {
              key: n,
              className: "rbc-row-segment",
              style: { WebkitFlexBasis: o, flexBasis: o, maxWidth: o },
            },
            r,
          );
        },
        Yi = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.segments,
                    r = t.slotMetrics.slots,
                    o = t.className,
                    i = 1;
                  return f.createElement(
                    "div",
                    { className: (0, D.A)(o, "rbc-row") },
                    n.reduce(function (t, n, o) {
                      var a = n.event,
                        s = n.left,
                        l = n.right,
                        c = n.span,
                        u = "_lvl_" + o,
                        f = s - i,
                        d = Hi(e.props, a);
                      return (
                        f && t.push(Ui(r, f, "".concat(u, "_gap"))),
                        t.push(Ui(r, c, u, d)),
                        (i = l + 1),
                        t
                      );
                    }, []),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function Bi(e) {
        var t = e.dateRange,
          n = e.unit,
          r = void 0 === n ? "day" : n,
          o = e.localizer;
        return { first: t[0], last: o.add(t[t.length - 1], 1, r) };
      }
      function qi(e) {
        var t,
          n,
          r,
          o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0,
          i = [],
          a = [];
        for (t = 0; t < e.length; t++) {
          for (r = e[t], n = 0; n < i.length && Vi(r, i[n]); n++);
          n >= o ? a.push(r) : (i[n] || (i[n] = [])).push(r);
        }
        for (t = 0; t < i.length; t++)
          i[t].sort(function (e, t) {
            return e.left - t.left;
          });
        return { levels: i, extra: a };
      }
      function Ki(e, t, n, r, o) {
        var i = { start: r.start(e), end: r.end(e) },
          a = { start: t, end: n };
        return o.inEventRange({ event: i, range: a });
      }
      function Vi(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function $i(e, t, n, r) {
        var o = { start: n.start(e), end: n.end(e), allDay: n.allDay(e) },
          i = { start: n.start(t), end: n.end(t), allDay: n.allDay(t) };
        return r.sortEvents({ evtA: o, evtB: i });
      }
      Yi.defaultProps = (0, r.A)({}, Wi);
      var Gi = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        Xi = function (e, t) {
          return e.filter(function (e) {
            return Gi(e, t);
          }).length;
        },
        Zi = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  for (
                    var e = this.props,
                      t = e.segments,
                      n = e.slotMetrics.slots,
                      r = qi(t).levels[0],
                      o = 1,
                      i = 1,
                      a = [];
                    o <= n;
                  ) {
                    var s = "_lvl_" + o,
                      l =
                        r.filter(function (e) {
                          return Gi(e, o);
                        })[0] || {},
                      c = l.event,
                      u = l.left,
                      d = l.right,
                      h = l.span;
                    if (c) {
                      var p = Math.max(0, u - i);
                      if (this.canRenderSlotEvent(u, h)) {
                        var m = Hi(this.props, c);
                        p && a.push(Ui(n, p, s + "_gap")),
                          a.push(Ui(n, h, s, m)),
                          (i = o = d + 1);
                      } else
                        p && a.push(Ui(n, p, s + "_gap")),
                          a.push(Ui(n, 1, s, this.renderShowMore(t, o))),
                          (i = o += 1);
                    } else o++;
                  }
                  return f.createElement("div", { className: "rbc-row" }, a);
                },
              },
              {
                key: "canRenderSlotEvent",
                value: function (e, t) {
                  var n = this.props.segments;
                  return Vn(e, e + t).every(function (e) {
                    return 1 === Xi(n, e);
                  });
                },
              },
              {
                key: "renderShowMore",
                value: function (e, t) {
                  var n = this,
                    r = this.props.localizer,
                    o = Xi(e, t);
                  return (
                    !!o &&
                    f.createElement(
                      "button",
                      {
                        type: "button",
                        key: "sm_" + t,
                        className: (0, D.A)("rbc-button-link", "rbc-show-more"),
                        onClick: function (e) {
                          return n.showMore(t, e);
                        },
                      },
                      r.messages.showMore(o),
                    )
                  );
                },
              },
              {
                key: "showMore",
                value: function (e, t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    this.props.onShowMore(e, t.target);
                },
              },
            ]),
            n
          );
        })(f.Component);
      Zi.defaultProps = (0, r.A)({}, Wi);
      var Qi = function (e) {
          var t = e.children;
          return f.createElement(
            "div",
            { className: "rbc-row-content-scroll-container" },
            t,
          );
        },
        Ji = function (e, t) {
          return e[0].range === t[0].range && e[0].events === t[0].events;
        };
      function ea() {
        return Zn(function (e) {
          for (
            var t = e.range,
              n = e.events,
              o = e.maxRows,
              i = e.minRows,
              a = e.accessors,
              s = e.localizer,
              l = Bi({ dateRange: t, localizer: s }),
              c = l.first,
              u = l.last,
              f = n.map(function (e) {
                return (function (e, t, n, r) {
                  var o = Bi({ dateRange: t, localizer: r }),
                    i = o.first,
                    a = o.last,
                    s = r.diff(i, a, "day"),
                    l = r.max(r.startOf(n.start(e), "day"), i),
                    c = r.min(r.ceil(n.end(e), "day"), a),
                    u = Un(t, function (e) {
                      return r.isSameDate(e, l);
                    }),
                    f = r.diff(l, c, "day");
                  return (
                    (f = Math.min(f, s)),
                    {
                      event: e,
                      span: (f = Math.max(f - r.segmentOffset, 1)),
                      left: u + 1,
                      right: Math.max(u + f, 1),
                    }
                  );
                })(e, t, a, s);
              }),
              d = qi(f, Math.max(o - 1, 1)),
              h = d.levels,
              p = d.extra,
              m = p.length > 0 ? i - 1 : i;
            h.length < m;
          )
            h.push([]);
          return {
            first: c,
            last: u,
            levels: h,
            extra: p,
            range: t,
            slots: t.length,
            clone: function (t) {
              return ea()((0, r.A)((0, r.A)({}, e), t));
            },
            getDateForSlot: function (e) {
              return t[e];
            },
            getSlotForDate: function (e) {
              return t.find(function (t) {
                return s.isSameDate(t, e);
              });
            },
            getEventsForSlot: function (e) {
              return f
                .filter(function (t) {
                  return (function (e, t) {
                    return e.left <= t && e.right >= t;
                  })(t, e);
                })
                .map(function (e) {
                  return e.event;
                });
            },
            continuesPrior: function (e) {
              return s.continuesPrior(a.start(e), c);
            },
            continuesAfter: function (e) {
              var t = a.start(e),
                n = a.end(e);
              return s.continuesAfter(t, n, u);
            },
          };
        }, Ji);
      }
      var ta = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(o))).handleSelectSlot =
              function (t) {
                var n = e.props,
                  r = n.range;
                (0, n.onSelectSlot)(r.slice(t.start, t.end + 1), t);
              }),
            (e.handleShowMore = function (t, n) {
              var r,
                o,
                i,
                a = e.props,
                s = a.range,
                l = a.onShowMore,
                c = e.slotMetrics(e.props),
                u = ((r = e.containerRef.current),
                (o = ".rbc-row-bg"),
                zn(r.querySelectorAll(o)))[0];
              u && (i = u.children[t - 1]),
                l(c.getEventsForSlot(t), s[t - 1], i, t, n);
            }),
            (e.getContainer = function () {
              var t = e.props.container;
              return t ? t() : e.containerRef.current;
            }),
            (e.renderHeadingCell = function (t, n) {
              var r = e.props,
                o = r.renderHeader,
                i = r.getNow,
                a = r.localizer;
              return o({
                date: t,
                key: "header_".concat(n),
                className: (0, D.A)(
                  "rbc-date-cell",
                  a.isSameDate(t, i()) && "rbc-now",
                ),
              });
            }),
            (e.renderDummy = function () {
              var t = e.props,
                n = t.className,
                r = t.range,
                o = t.renderHeader,
                i = t.showAllEvents;
              return f.createElement(
                "div",
                { className: n, ref: e.containerRef },
                f.createElement(
                  "div",
                  {
                    className: (0, D.A)(
                      "rbc-row-content",
                      i && "rbc-row-content-scrollable",
                    ),
                  },
                  o &&
                    f.createElement(
                      "div",
                      { className: "rbc-row", ref: e.headingRowRef },
                      r.map(e.renderHeadingCell),
                    ),
                  f.createElement(
                    "div",
                    { className: "rbc-row", ref: e.eventRowRef },
                    f.createElement(
                      "div",
                      { className: "rbc-row-segment" },
                      f.createElement(
                        "div",
                        { className: "rbc-event" },
                        f.createElement(
                          "div",
                          { className: "rbc-event-content" },
                          " ",
                        ),
                      ),
                    ),
                  ),
                ),
              );
            }),
            (e.containerRef = (0, f.createRef)()),
            (e.headingRowRef = (0, f.createRef)()),
            (e.eventRowRef = (0, f.createRef)()),
            (e.slotMetrics = ea()),
            e
          );
        }
        return (
          (0, s.A)(n, [
            {
              key: "getRowLimit",
              value: function () {
                var e,
                  t = Nn(this.eventRowRef.current),
                  n =
                    null !== (e = this.headingRowRef) &&
                    void 0 !== e &&
                    e.current
                      ? Nn(this.headingRowRef.current)
                      : 0,
                  r = Nn(this.containerRef.current) - n;
                return Math.max(Math.floor(r / t), 1);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.date,
                  n = e.rtl,
                  r = e.range,
                  o = e.className,
                  i = e.selected,
                  a = e.selectable,
                  s = e.renderForMeasure,
                  l = e.accessors,
                  c = e.getters,
                  u = e.components,
                  d = e.getNow,
                  h = e.renderHeader,
                  p = e.onSelect,
                  m = e.localizer,
                  v = e.onSelectStart,
                  g = e.onSelectEnd,
                  y = e.onDoubleClick,
                  b = e.onKeyPress,
                  w = e.resourceId,
                  A = e.longPressThreshold,
                  E = e.isAllDay,
                  S = e.resizable,
                  k = e.showAllEvents;
                if (s) return this.renderDummy();
                var _ = this.slotMetrics(this.props),
                  O = _.levels,
                  x = _.extra,
                  M = k ? Qi : Bo,
                  R = u.weekWrapper,
                  C = {
                    selected: i,
                    accessors: l,
                    getters: c,
                    localizer: m,
                    components: u,
                    onSelect: p,
                    onDoubleClick: y,
                    onKeyPress: b,
                    resourceId: w,
                    slotMetrics: _,
                    resizable: S,
                  };
                return f.createElement(
                  "div",
                  { className: o, role: "rowgroup", ref: this.containerRef },
                  f.createElement(Fi, {
                    localizer: m,
                    date: t,
                    getNow: d,
                    rtl: n,
                    range: r,
                    selectable: a,
                    container: this.getContainer,
                    getters: c,
                    onSelectStart: v,
                    onSelectEnd: g,
                    onSelectSlot: this.handleSelectSlot,
                    components: u,
                    longPressThreshold: A,
                    resourceId: w,
                  }),
                  f.createElement(
                    "div",
                    {
                      className: (0, D.A)(
                        "rbc-row-content",
                        k && "rbc-row-content-scrollable",
                      ),
                      role: "row",
                    },
                    h &&
                      f.createElement(
                        "div",
                        { className: "rbc-row ", ref: this.headingRowRef },
                        r.map(this.renderHeadingCell),
                      ),
                    f.createElement(
                      M,
                      null,
                      f.createElement(
                        R,
                        Object.assign({ isAllDay: E }, C, {
                          rtl: this.props.rtl,
                        }),
                        O.map(function (e, t) {
                          return f.createElement(
                            Yi,
                            Object.assign({ key: t, segments: e }, C),
                          );
                        }),
                        !!x.length &&
                          f.createElement(
                            Zi,
                            Object.assign(
                              { segments: x, onShowMore: this.handleShowMore },
                              C,
                            ),
                          ),
                      ),
                    ),
                  ),
                );
              },
            },
          ]),
          n
        );
      })(f.Component);
      ta.defaultProps = { minRows: 0, maxRows: 1 / 0 };
      var na = function (e) {
          var t = e.label;
          return f.createElement(
            "span",
            { role: "columnheader", "aria-sort": "none" },
            t,
          );
        },
        ra = function (e) {
          var t = e.label,
            n = e.drilldownView,
            r = e.onDrillDown;
          return n
            ? f.createElement(
                "button",
                {
                  type: "button",
                  className: "rbc-button-link",
                  onClick: r,
                  role: "cell",
                },
                t,
              )
            : f.createElement("span", null, t);
        },
        oa = ["date", "className"],
        ia = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(i))).getContainer =
                function () {
                  return e.containerRef.current;
                }),
              (e.renderWeek = function (t, n) {
                var r = e.props,
                  o = r.events,
                  i = r.components,
                  a = r.selectable,
                  s = r.getNow,
                  l = r.selected,
                  c = r.date,
                  u = r.localizer,
                  d = r.longPressThreshold,
                  h = r.accessors,
                  p = r.getters,
                  m = r.showAllEvents,
                  v = e.state,
                  g = v.needLimitMeasure,
                  y = v.rowLimit,
                  b = (function (e, t, n, r, o) {
                    return e.filter(function (e) {
                      return Ki(e, t, n, r, o);
                    });
                  })((0, ce.A)(o), t[0], t[t.length - 1], h, u);
                return (
                  b.sort(function (e, t) {
                    return $i(e, t, h, u);
                  }),
                  f.createElement(ta, {
                    key: n,
                    ref: 0 === n ? e.slotRowRef : void 0,
                    container: e.getContainer,
                    className: "rbc-month-row",
                    getNow: s,
                    date: c,
                    range: t,
                    events: b,
                    maxRows: m ? 1 / 0 : y,
                    selected: l,
                    selectable: a,
                    components: i,
                    accessors: h,
                    getters: p,
                    localizer: u,
                    renderHeader: e.readerDateHeading,
                    renderForMeasure: g,
                    onShowMore: e.handleShowMore,
                    onSelect: e.handleSelectEvent,
                    onDoubleClick: e.handleDoubleClickEvent,
                    onKeyPress: e.handleKeyPressEvent,
                    onSelectSlot: e.handleSelectSlot,
                    longPressThreshold: d,
                    rtl: e.props.rtl,
                    resizable: e.props.resizable,
                    showAllEvents: m,
                  })
                );
              }),
              (e.readerDateHeading = function (t) {
                var n = t.date,
                  r = t.className,
                  i = (0, o.A)(t, oa),
                  a = e.props,
                  s = a.date,
                  l = a.getDrilldownView,
                  c = a.localizer,
                  u = c.neq(n, s, "month"),
                  d = c.isSameDate(n, s),
                  h = l(n),
                  p = c.format(n, "dateFormat"),
                  m = e.props.components.dateHeader || ra;
                return f.createElement(
                  "div",
                  Object.assign({}, i, {
                    className: (0, D.A)(
                      r,
                      u && "rbc-off-range",
                      d && "rbc-current",
                    ),
                    role: "cell",
                  }),
                  f.createElement(m, {
                    label: p,
                    date: n,
                    drilldownView: h,
                    isOffRange: u,
                    onDrillDown: function (t) {
                      return e.handleHeadingClick(n, h, t);
                    },
                  }),
                );
              }),
              (e.handleSelectSlot = function (t, n) {
                (e._pendingSelection = e._pendingSelection.concat(t)),
                  clearTimeout(e._selectTimer),
                  (e._selectTimer = setTimeout(function () {
                    return e.selectDates(n);
                  }));
              }),
              (e.handleHeadingClick = function (t, n, r) {
                r.preventDefault(),
                  e.clearSelection(),
                  Zo(e.props.onDrillDown, [t, n]);
              }),
              (e.handleSelectEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onSelectEvent, n);
              }),
              (e.handleDoubleClickEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onDoubleClickEvent, n);
              }),
              (e.handleKeyPressEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onKeyPressEvent, n);
              }),
              (e.handleShowMore = function (t, n, r, o, i) {
                var a = e.props,
                  s = a.popup,
                  l = a.onDrillDown,
                  c = a.onShowMore,
                  u = a.getDrilldownView,
                  f = a.doShowMoreDrillDown;
                if ((e.clearSelection(), s)) {
                  var d = Pe(r, e.containerRef.current);
                  e.setState({
                    overlay: { date: n, events: t, position: d, target: i },
                  });
                } else f && Zo(l, [n, u(n) || Go.DAY]);
                Zo(c, [t, n, o]);
              }),
              (e.overlayDisplay = function () {
                e.setState({ overlay: null });
              }),
              (e.state = { rowLimit: 5, needLimitMeasure: !0, date: null }),
              (e.containerRef = (0, f.createRef)()),
              (e.slotRowRef = (0, f.createRef)()),
              (e._bgRows = []),
              (e._pendingSelection = []),
              e
            );
          }
          return (
            (0, s.A)(
              n,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e,
                      t = this;
                    this.state.needLimitMeasure &&
                      this.measureRowLimit(this.props),
                      window.addEventListener(
                        "resize",
                        (this._resizeListener = function () {
                          e ||
                            We(function () {
                              (e = !1), t.setState({ needLimitMeasure: !0 });
                            });
                        }),
                        !1,
                      );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    this.state.needLimitMeasure &&
                      this.measureRowLimit(this.props);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    window.removeEventListener(
                      "resize",
                      this._resizeListener,
                      !1,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.date,
                      n = e.localizer,
                      r = e.className,
                      o = n.visibleDays(t, n),
                      i = ye(o, 7);
                    return (
                      (this._weekCount = i.length),
                      f.createElement(
                        "div",
                        {
                          className: (0, D.A)("rbc-month-view", r),
                          role: "table",
                          "aria-label": "Month View",
                          ref: this.containerRef,
                        },
                        f.createElement(
                          "div",
                          {
                            className: "rbc-row rbc-month-header",
                            role: "row",
                          },
                          this.renderHeaders(i[0]),
                        ),
                        i.map(this.renderWeek),
                        this.props.popup && this.renderOverlay(),
                      )
                    );
                  },
                },
                {
                  key: "renderHeaders",
                  value: function (e) {
                    var t = this.props,
                      n = t.localizer,
                      r = t.components,
                      o = e[0],
                      i = e[e.length - 1],
                      a = r.header || na;
                    return n.range(o, i, "day").map(function (e, t) {
                      return f.createElement(
                        "div",
                        { key: "header_" + t, className: "rbc-header" },
                        f.createElement(a, {
                          date: e,
                          localizer: n,
                          label: n.format(e, "weekdayFormat"),
                        }),
                      );
                    });
                  },
                },
                {
                  key: "renderOverlay",
                  value: function () {
                    var e,
                      t,
                      n = this,
                      r =
                        null !==
                          (e =
                            null === (t = this.state) || void 0 === t
                              ? void 0
                              : t.overlay) && void 0 !== e
                          ? e
                          : {},
                      o = this.props,
                      i = o.accessors,
                      a = o.localizer,
                      s = o.components,
                      l = o.getters,
                      c = o.selected,
                      u = o.popupOffset,
                      d = o.handleDragStart;
                    return f.createElement(Ri, {
                      overlay: r,
                      accessors: i,
                      localizer: a,
                      components: s,
                      getters: l,
                      selected: c,
                      popupOffset: u,
                      ref: this.containerRef,
                      handleKeyPressEvent: this.handleKeyPressEvent,
                      handleSelectEvent: this.handleSelectEvent,
                      handleDoubleClickEvent: this.handleDoubleClickEvent,
                      handleDragStart: d,
                      show: !!r.position,
                      overlayDisplay: this.overlayDisplay,
                      onHide: function () {
                        return n.setState({ overlay: null });
                      },
                    });
                  },
                },
                {
                  key: "measureRowLimit",
                  value: function () {
                    this.setState({
                      needLimitMeasure: !1,
                      rowLimit: this.slotRowRef.current.getRowLimit(),
                    });
                  },
                },
                {
                  key: "selectDates",
                  value: function (e) {
                    var t = this._pendingSelection.slice();
                    (this._pendingSelection = []),
                      t.sort(function (e, t) {
                        return +e - +t;
                      });
                    var n = new Date(t[0]),
                      r = new Date(t[t.length - 1]);
                    r.setDate(t[t.length - 1].getDate() + 1),
                      Zo(this.props.onSelectSlot, {
                        slots: t,
                        start: n,
                        end: r,
                        action: e.action,
                        bounds: e.bounds,
                        box: e.box,
                      });
                  },
                },
                {
                  key: "clearSelection",
                  value: function () {
                    clearTimeout(this._selectTimer),
                      (this._pendingSelection = []);
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = e.date;
                    return {
                      date: n,
                      needLimitMeasure: e.localizer.neq(n, t.date, "month"),
                    };
                  },
                },
              ],
            ),
            n
          );
        })(f.Component);
      (ia.range = function (e, t) {
        var n = t.localizer;
        return { start: n.firstVisibleDay(e, n), end: n.lastVisibleDay(e, n) };
      }),
        (ia.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case qo:
              return r.add(e, -1, "month");
            case Ko:
              return r.add(e, 1, "month");
            default:
              return e;
          }
        }),
        (ia.title = function (e, t) {
          return t.localizer.format(e, "monthHeaderFormat");
        });
      var aa = function (e) {
        var t = e.min,
          n = e.max,
          r = e.step,
          o = e.slots,
          i = e.localizer;
        return (
          "".concat(+i.startOf(t, "minutes")) +
          "".concat(+i.startOf(n, "minutes")) +
          "".concat(r, "-").concat(o)
        );
      };
      function sa(e) {
        for (
          var t = e.min,
            n = e.max,
            r = e.step,
            o = e.timeslots,
            i = e.localizer,
            a = aa({ start: t, end: n, step: r, timeslots: o, localizer: i }),
            s = 1 + i.getTotalMin(t, n),
            l = i.getMinutesFromMidnight(t),
            c = Math.ceil((s - 1) / (r * o)),
            u = c * o,
            f = new Array(c),
            d = new Array(u),
            h = 0;
          h < c;
          h++
        ) {
          f[h] = new Array(o);
          for (var p = 0; p < o; p++) {
            var m = h * o + p,
              v = m * r;
            d[m] = f[h][p] = i.getSlotDate(t, l, v);
          }
        }
        var g = d.length * r;
        function y(e) {
          var n = i.diff(t, e, "minutes") + i.getDstOffset(t, e);
          return Math.min(n, s);
        }
        return (
          d.push(i.getSlotDate(t, l, g)),
          {
            groups: f,
            update: function (e) {
              return aa(e) !== a ? sa(e) : this;
            },
            dateIsInGroup: function (e, t) {
              var r = f[t + 1];
              return i.inRange(e, f[t][0], r ? r[0] : n, "minutes");
            },
            nextSlot: function (e) {
              var t = d[Math.min(d.indexOf(e) + 1, d.length - 1)];
              return t === e && (t = i.add(e, r, "minutes")), t;
            },
            closestSlotToPosition: function (e) {
              var t = Math.min(d.length - 1, Math.max(0, Math.floor(e * u)));
              return d[t];
            },
            closestSlotFromPoint: function (e, t) {
              var n = Math.abs(t.top - t.bottom);
              return this.closestSlotToPosition((e.y - t.top) / n);
            },
            closestSlotFromDate: function (e) {
              var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              if (i.lt(e, t, "minutes")) return d[0];
              if (i.gt(e, n, "minutes")) return d[d.length - 1];
              var a = i.diff(t, e, "minutes");
              return d[(a - (a % r)) / r + o];
            },
            startsBeforeDay: function (e) {
              return i.lt(e, t, "day");
            },
            startsAfterDay: function (e) {
              return i.gt(e, n, "day");
            },
            startsBefore: function (e) {
              return i.lt(i.merge(t, e), t, "minutes");
            },
            startsAfter: function (e) {
              return i.gt(i.merge(n, e), n, "minutes");
            },
            getRange: function (e, o, a, s) {
              a || (e = i.min(n, i.max(t, e))),
                s || (o = i.min(n, i.max(t, o)));
              var l = y(e),
                c = y(o),
                f =
                  c > r * u && !i.eq(n, o)
                    ? ((l - r) / (r * u)) * 100
                    : (l / (r * u)) * 100;
              return {
                top: f,
                height: (c / (r * u)) * 100 - f,
                start: y(e),
                startDate: e,
                end: y(o),
                endDate: o,
              };
            },
            getCurrentTimePosition: function (e) {
              return (y(e) / (r * u)) * 100;
            },
          }
        );
      }
      var la = (function () {
        function e(t, n) {
          var r = n.accessors,
            o = n.slotMetrics;
          (0, a.A)(this, e);
          var i = o.getRange(r.start(t), r.end(t)),
            s = i.start,
            l = i.startDate,
            c = i.end,
            u = i.endDate,
            f = i.top,
            d = i.height;
          (this.start = s),
            (this.end = c),
            (this.startMs = +l),
            (this.endMs = +u),
            (this.top = f),
            (this.height = d),
            (this.data = t);
        }
        return (
          (0, s.A)(e, [
            {
              key: "_width",
              get: function () {
                if (this.rows) {
                  var e =
                    this.rows.reduce(function (e, t) {
                      return Math.max(e, t.leaves.length + 1);
                    }, 0) + 1;
                  return 100 / e;
                }
                return this.leaves
                  ? (100 - this.container._width) / (this.leaves.length + 1)
                  : this.row._width;
              },
            },
            {
              key: "width",
              get: function () {
                var e = this._width,
                  t = Math.min(100, 1.7 * this._width);
                if (this.rows) return t;
                if (this.leaves) return this.leaves.length > 0 ? t : e;
                var n = this.row.leaves;
                return n.indexOf(this) === n.length - 1 ? e : t;
              },
            },
            {
              key: "xOffset",
              get: function () {
                if (this.rows) return 0;
                if (this.leaves) return this.container._width;
                var e = this.row,
                  t = e.leaves,
                  n = e.xOffset,
                  r = e._width;
                return n + (t.indexOf(this) + 1) * r;
              },
            },
          ]),
          e
        );
      })();
      function ca(e, t, n) {
        return (
          Math.abs(t.start - e.start) < n ||
          (t.start > e.start && t.start < e.end)
        );
      }
      function ua(e) {
        for (
          var t = e.events,
            n = e.minimumStartDifference,
            r = e.slotMetrics,
            o = e.accessors,
            i = (function (e) {
              for (
                var t = gr(e, [
                    "startMs",
                    function (e) {
                      return -e.endMs;
                    },
                  ]),
                  n = [];
                t.length > 0;
              ) {
                var r = t.shift();
                n.push(r);
                for (var o = 0; o < t.length; o++) {
                  var i = t[o];
                  if (!(r.endMs > i.startMs)) {
                    if (o > 0) {
                      var a = t.splice(o, 1)[0];
                      n.push(a);
                    }
                    break;
                  }
                }
              }
              return n;
            })(
              t.map(function (e) {
                return new la(e, { slotMetrics: r, accessors: o });
              }),
            ),
            a = [],
            s = function () {
              var e = i[l],
                t = a.find(function (t) {
                  return t.end > e.start || Math.abs(e.start - t.start) < n;
                });
              if (!t) return (e.rows = []), a.push(e), 1;
              e.container = t;
              for (var r = null, o = t.rows.length - 1; !r && o >= 0; o--)
                ca(t.rows[o], e, n) && (r = t.rows[o]);
              r
                ? (r.leaves.push(e), (e.row = r))
                : ((e.leaves = []), t.rows.push(e));
            },
            l = 0;
          l < i.length;
          l++
        )
          s();
        return i.map(function (e) {
          return {
            event: e.data,
            style: {
              top: e.top,
              height: e.height,
              width: e.width,
              xOffset: Math.max(0, e.xOffset),
            },
          };
        });
      }
      function fa(e, t, n) {
        for (var r = 0; r < e.friends.length; ++r)
          if (!(n.indexOf(e.friends[r]) > -1)) {
            (t = t > e.friends[r].idx ? t : e.friends[r].idx),
              n.push(e.friends[r]);
            var o = fa(e.friends[r], t, n);
            t = t > o ? t : o;
          }
        return t;
      }
      var da = {
        overlap: ua,
        "no-overlap": function (e) {
          var t = ua({
            events: e.events,
            minimumStartDifference: e.minimumStartDifference,
            slotMetrics: e.slotMetrics,
            accessors: e.accessors,
          });
          t.sort(function (e, t) {
            return (
              (e = e.style),
              (t = t.style),
              e.top !== t.top
                ? e.top > t.top
                  ? 1
                  : -1
                : e.top + e.height < t.top + t.height
                  ? 1
                  : -1
            );
          });
          for (var n = 0; n < t.length; ++n)
            (t[n].friends = []),
              delete t[n].style.left,
              delete t[n].style.left,
              delete t[n].idx,
              delete t[n].size;
          for (var r = 0; r < t.length - 1; ++r)
            for (
              var o = t[r],
                i = o.style.top,
                a = o.style.top + o.style.height,
                s = r + 1;
              s < t.length;
              ++s
            ) {
              var l = t[s],
                c = l.style.top,
                u = l.style.top + l.style.height;
              ((c >= i && u <= a) || (u > i && u <= a) || (c >= i && c < a)) &&
                (o.friends.push(l), l.friends.push(o));
            }
          for (var f = 0; f < t.length; ++f) {
            for (var d = t[f], h = [], p = 0; p < 100; ++p) h.push(1);
            for (var m = 0; m < d.friends.length; ++m)
              void 0 !== d.friends[m].idx && (h[d.friends[m].idx] = 0);
            d.idx = h.indexOf(1);
          }
          for (var v = 0; v < t.length; ++v) {
            var g;
            if (!t[v].size) {
              var y = [];
              (g = 100 / (fa(t[v], 0, y) + 1)), (t[v].size = g);
              for (var b = 0; b < y.length; ++b) y[b].size = g;
            }
          }
          for (var w = 0; w < t.length; ++w) {
            var A = t[w];
            A.style.left = A.idx * A.size;
            for (var E = 0, D = 0; D < A.friends.length; ++D) {
              var S = A.friends[D].idx;
              E = E > S ? E : S;
            }
            E <= A.idx && (A.size = 100 - A.idx * A.size);
            var k = 0 === A.idx ? 0 : 3;
            (A.style.width = "calc(".concat(A.size, "% - ").concat(k, "px)")),
              (A.style.height = "calc(".concat(A.style.height, "% - 2px)")),
              (A.style.xOffset = "calc("
                .concat(A.style.left, "% + ")
                .concat(k, "px)"));
          }
          return t;
        },
      };
      var ha = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n() {
          return (0, a.A)(this, n), t.apply(this, arguments);
        }
        return (
          (0, s.A)(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.renderSlot,
                  n = e.resource,
                  r = e.group,
                  o = e.getters,
                  i = e.components,
                  a = (void 0 === i ? {} : i).timeSlotWrapper,
                  s = void 0 === a ? Bo : a,
                  l = o ? o.slotGroupProp(r) : {};
                return f.createElement(
                  "div",
                  Object.assign({ className: "rbc-timeslot-group" }, l),
                  r.map(function (e, r) {
                    var i = o ? o.slotProp(e, n) : {};
                    return f.createElement(
                      s,
                      { key: r, value: e, resource: n },
                      f.createElement(
                        "div",
                        Object.assign({}, i, {
                          className: (0, D.A)("rbc-time-slot", i.className),
                        }),
                        t && t(e, r),
                      ),
                    );
                  }),
                );
              },
            },
          ]),
          n
        );
      })(f.Component);
      function pa(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function ma(e) {
        var t = e.style,
          n = e.className,
          o = e.event,
          i = e.accessors,
          a = e.rtl,
          s = e.selected,
          l = e.label,
          c = e.continuesPrior,
          u = e.continuesAfter,
          d = e.getters,
          h = e.onClick,
          p = e.onDoubleClick,
          m = e.isBackgroundEvent,
          v = e.onKeyPress,
          g = e.components,
          y = g.event,
          b = g.eventWrapper,
          w = i.title(o),
          A = i.tooltip(o),
          E = i.end(o),
          S = i.start(o),
          k = d.eventProp(o, S, E, s),
          _ = t.height,
          O = t.top,
          x = t.width,
          M = t.xOffset,
          R = [
            f.createElement(
              "div",
              { key: "1", className: "rbc-event-label" },
              l,
            ),
            f.createElement(
              "div",
              { key: "2", className: "rbc-event-content" },
              y ? f.createElement(y, { event: o, title: w }) : w,
            ),
          ],
          C = m
            ? (0, r.A)(
                (0, r.A)({}, k.style),
                {},
                (0, le.A)(
                  {
                    top: pa(O),
                    height: pa(_),
                    width: "calc(".concat(x, " + 10px)"),
                  },
                  a ? "right" : "left",
                  pa(Math.max(0, M)),
                ),
              )
            : (0, r.A)(
                (0, r.A)({}, k.style),
                {},
                (0, le.A)(
                  { top: pa(O), width: pa(x), height: pa(_) },
                  a ? "right" : "left",
                  pa(M),
                ),
              );
        return f.createElement(
          b,
          Object.assign({ type: "time" }, e),
          f.createElement(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: h,
              onDoubleClick: p,
              style: C,
              onKeyPress: v,
              title: A ? ("string" == typeof l ? l + ": " : "") + A : void 0,
              className: (0, D.A)(
                m ? "rbc-background-event" : "rbc-event",
                n,
                k.className,
                {
                  "rbc-selected": s,
                  "rbc-event-continues-earlier": c,
                  "rbc-event-continues-later": u,
                },
              ),
            },
            R,
          ),
        );
      }
      var va = function (e) {
          var t = e.children,
            n = e.className,
            r = e.style,
            o = e.innerRef;
          return f.createElement("div", { className: n, style: r, ref: o }, t);
        },
        ga = f.forwardRef(function (e, t) {
          return f.createElement(va, Object.assign({}, e, { innerRef: t }));
        }),
        ya = ["dayProp"],
        ba = ["eventContainerWrapper"],
        wa = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
            for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
              i[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = {
                selecting: !1,
                timeIndicatorPosition: null,
              }),
              (e.intervalTriggered = !1),
              (e.renderEvents = function (t) {
                var n = t.events,
                  o = t.isBackgroundEvent,
                  i = e.props,
                  a = i.rtl,
                  s = i.selected,
                  l = i.accessors,
                  c = i.localizer,
                  u = i.getters,
                  d = i.components,
                  h = i.step,
                  p = i.timeslots,
                  m = i.dayLayoutAlgorithm,
                  v = i.resizable,
                  g = (0, Qn.A)(e).slotMetrics,
                  y = c.messages,
                  b = (function (e) {
                    e.events,
                      e.minimumStartDifference,
                      e.slotMetrics,
                      e.accessors;
                    var t,
                      n = e.dayLayoutAlgorithm,
                      r = n;
                    return (
                      n in da && (r = da[n]),
                      (t = r) && t.constructor && t.call && t.apply
                        ? r.apply(this, arguments)
                        : []
                    );
                  })({
                    events: n,
                    accessors: l,
                    slotMetrics: g,
                    minimumStartDifference: Math.ceil((h * p) / 2),
                    dayLayoutAlgorithm: m,
                  });
                return b.map(function (t, n) {
                  var i,
                    h = t.event,
                    p = t.style,
                    m = l.end(h),
                    b = l.start(h),
                    w = "eventTimeRangeFormat",
                    A = g.startsBeforeDay(b),
                    E = g.startsAfterDay(m);
                  A
                    ? (w = "eventTimeRangeEndFormat")
                    : E && (w = "eventTimeRangeStartFormat"),
                    (i = A && E ? y.allDay : c.format({ start: b, end: m }, w));
                  var D = A || g.startsBefore(b),
                    S = E || g.startsAfter(m);
                  return f.createElement(ma, {
                    style: p,
                    event: h,
                    label: i,
                    key: "evt_" + n,
                    getters: u,
                    rtl: a,
                    components: d,
                    continuesPrior: D,
                    continuesAfter: S,
                    accessors: l,
                    resource: e.props.resource,
                    selected: Si(h, s),
                    onClick: function (t) {
                      return e._select(
                        (0, r.A)(
                          (0, r.A)({}, h),
                          {},
                          { sourceResource: e.props.resource },
                        ),
                        t,
                      );
                    },
                    onDoubleClick: function (t) {
                      return e._doubleClick(h, t);
                    },
                    isBackgroundEvent: o,
                    onKeyPress: function (t) {
                      return e._keyPress(h, t);
                    },
                    resizable: v,
                  });
                });
              }),
              (e._selectable = function () {
                var t = e.containerRef.current,
                  n = e.props,
                  o = n.longPressThreshold,
                  i = n.localizer,
                  a = (e._selector = new Li(
                    function () {
                      return t;
                    },
                    { longPressThreshold: o },
                  )),
                  s = function (t) {
                    var n = e.props.onSelecting,
                      r = e.state || {},
                      o = l(t),
                      a = o.startDate,
                      s = o.endDate;
                    (n &&
                      ((i.eq(r.startDate, a, "minutes") &&
                        i.eq(r.endDate, s, "minutes")) ||
                        !1 ===
                          n({
                            start: a,
                            end: s,
                            resourceId: e.props.resource,
                          }))) ||
                      (e.state.start === o.start &&
                        e.state.end === o.end &&
                        e.state.selecting === o.selecting) ||
                      e.setState(o);
                  },
                  l = function (n) {
                    var o = e.slotMetrics.closestSlotFromPoint(n, ji(t));
                    e.state.selecting || (e._initialSlot = o);
                    var a = e._initialSlot;
                    i.lte(a, o)
                      ? (o = e.slotMetrics.nextSlot(o))
                      : i.gt(a, o) && (a = e.slotMetrics.nextSlot(a));
                    var s = e.slotMetrics.getRange(i.min(a, o), i.max(a, o));
                    return (0, r.A)(
                      (0, r.A)({}, s),
                      {},
                      {
                        selecting: !0,
                        top: "".concat(s.top, "%"),
                        height: "".concat(s.height, "%"),
                      },
                    );
                  },
                  c = function (t, n) {
                    if (!Ti(e.containerRef.current, t)) {
                      var r = l(t),
                        o = r.startDate,
                        i = r.endDate;
                      e._selectSlot({
                        startDate: o,
                        endDate: i,
                        action: n,
                        box: t,
                      });
                    }
                    e.setState({ selecting: !1 });
                  };
                a.on("selecting", s),
                  a.on("selectStart", s),
                  a.on("beforeSelect", function (t) {
                    if ("ignoreEvents" === e.props.selectable)
                      return !Ti(e.containerRef.current, t);
                  }),
                  a.on("click", function (e) {
                    return c(e, "click");
                  }),
                  a.on("doubleClick", function (e) {
                    return c(e, "doubleClick");
                  }),
                  a.on("select", function (t) {
                    e.state.selecting &&
                      (e._selectSlot(
                        (0, r.A)(
                          (0, r.A)({}, e.state),
                          {},
                          { action: "select", bounds: t },
                        ),
                      ),
                      e.setState({ selecting: !1 }));
                  }),
                  a.on("reset", function () {
                    e.state.selecting && e.setState({ selecting: !1 });
                  });
              }),
              (e._teardownSelectable = function () {
                e._selector && (e._selector.teardown(), (e._selector = null));
              }),
              (e._selectSlot = function (t) {
                for (
                  var n = t.startDate,
                    r = t.endDate,
                    o = t.action,
                    i = t.bounds,
                    a = t.box,
                    s = n,
                    l = [];
                  e.props.localizer.lte(s, r);
                )
                  l.push(s), (s = new Date(+s + 60 * e.props.step * 1e3));
                Zo(e.props.onSelectSlot, {
                  slots: l,
                  start: n,
                  end: r,
                  resourceId: e.props.resource,
                  action: o,
                  bounds: i,
                  box: a,
                });
              }),
              (e._select = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onSelectEvent, n);
              }),
              (e._doubleClick = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onDoubleClickEvent, n);
              }),
              (e._keyPress = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onKeyPressEvent, n);
              }),
              (e.slotMetrics = sa(e.props)),
              (e.containerRef = (0, f.createRef)()),
              e
            );
          }
          return (
            (0, s.A)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.selectable && this._selectable(),
                    this.props.isNow &&
                      this.setTimeIndicatorPositionUpdateInterval();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._teardownSelectable(), this.clearTimeIndicatorInterval();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  e.selectable && !this.props.selectable && this._selectable(),
                    !e.selectable &&
                      this.props.selectable &&
                      this._teardownSelectable(),
                    (this.slotMetrics = this.slotMetrics.update(e));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var n = this.props,
                    r = n.getNow,
                    o = n.isNow,
                    i = n.localizer,
                    a = n.date,
                    s = n.min,
                    l = n.max,
                    c = i.neq(e.getNow(), r(), "minutes");
                  if (e.isNow !== o || c) {
                    if ((this.clearTimeIndicatorInterval(), o)) {
                      var u =
                        !c &&
                        i.eq(e.date, a, "minutes") &&
                        t.timeIndicatorPosition ===
                          this.state.timeIndicatorPosition;
                      this.setTimeIndicatorPositionUpdateInterval(u);
                    }
                  } else
                    o &&
                      (i.neq(e.min, s, "minutes") ||
                        i.neq(e.max, l, "minutes")) &&
                      this.positionTimeIndicator();
                },
              },
              {
                key: "setTimeIndicatorPositionUpdateInterval",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  this.intervalTriggered || t || this.positionTimeIndicator(),
                    (this._timeIndicatorTimeout = window.setTimeout(
                      function () {
                        (e.intervalTriggered = !0),
                          e.positionTimeIndicator(),
                          e.setTimeIndicatorPositionUpdateInterval();
                      },
                      6e4,
                    ));
                },
              },
              {
                key: "clearTimeIndicatorInterval",
                value: function () {
                  (this.intervalTriggered = !1),
                    window.clearTimeout(this._timeIndicatorTimeout);
                },
              },
              {
                key: "positionTimeIndicator",
                value: function () {
                  var e = this.props,
                    t = e.min,
                    n = e.max,
                    r = (0, e.getNow)();
                  if (r >= t && r <= n) {
                    var o = this.slotMetrics.getCurrentTimePosition(r);
                    (this.intervalTriggered = !0),
                      this.setState({ timeIndicatorPosition: o });
                  } else this.clearTimeIndicatorInterval();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.max,
                    r = e.rtl,
                    i = e.isNow,
                    a = e.resource,
                    s = e.accessors,
                    l = e.localizer,
                    c = e.getters,
                    u = c.dayProp,
                    d = (0, o.A)(c, ya),
                    h = e.components,
                    p = h.eventContainerWrapper,
                    m = (0, o.A)(h, ba),
                    v = this.slotMetrics,
                    g = this.state,
                    y = g.selecting,
                    b = g.top,
                    w = g.height,
                    A = { start: g.startDate, end: g.endDate },
                    E = u(n),
                    S = E.className,
                    k = E.style,
                    _ = m.dayColumnWrapper || ga;
                  return f.createElement(
                    _,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: k,
                      className: (0, D.A)(
                        S,
                        "rbc-day-slot",
                        "rbc-time-column",
                        i && "rbc-now",
                        i && "rbc-today",
                        y && "rbc-slot-selecting",
                      ),
                      slotMetrics: v,
                    },
                    v.groups.map(function (e, t) {
                      return f.createElement(ha, {
                        key: t,
                        group: e,
                        resource: a,
                        getters: d,
                        components: m,
                      });
                    }),
                    f.createElement(
                      p,
                      {
                        localizer: l,
                        resource: a,
                        accessors: s,
                        getters: d,
                        components: m,
                        slotMetrics: v,
                      },
                      f.createElement(
                        "div",
                        {
                          className: (0, D.A)(
                            "rbc-events-container",
                            r && "rtl",
                          ),
                        },
                        this.renderEvents({
                          events: this.props.backgroundEvents,
                          isBackgroundEvent: !0,
                        }),
                        this.renderEvents({ events: this.props.events }),
                      ),
                    ),
                    y &&
                      f.createElement(
                        "div",
                        {
                          className: "rbc-slot-selection",
                          style: { top: b, height: w },
                        },
                        f.createElement(
                          "span",
                          null,
                          l.format(A, "selectRangeFormat"),
                        ),
                      ),
                    i &&
                      this.intervalTriggered &&
                      f.createElement("div", {
                        className: "rbc-current-time-indicator",
                        style: {
                          top: "".concat(this.state.timeIndicatorPosition, "%"),
                        },
                      }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      wa.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
      var Aa = function (e) {
          var t = e.min,
            n = e.max,
            r = e.timeslots,
            o = e.step,
            i = e.localizer,
            a = e.getNow,
            s = e.resource,
            l = e.components,
            c = e.getters,
            d = e.gutterRef,
            h = l.timeGutterWrapper,
            p = (0, f.useMemo)(
              function () {
                return (function (e) {
                  var t = e.min,
                    n = e.max,
                    r = e.localizer;
                  return r.getTimezoneOffset(t) !== r.getTimezoneOffset(n)
                    ? { start: r.add(t, -1, "day"), end: r.add(n, -1, "day") }
                    : { start: t, end: n };
                })({ min: t, max: n, localizer: i });
              },
              [
                null == t ? void 0 : t.toISOString(),
                null == n ? void 0 : n.toISOString(),
                i,
              ],
            ),
            m = p.start,
            v = p.end,
            g = (0, f.useState)(
              sa({ min: m, max: v, timeslots: r, step: o, localizer: i }),
            ),
            y = (0, u.A)(g, 2),
            b = y[0],
            w = y[1];
          (0, f.useEffect)(
            function () {
              b &&
                w(
                  b.update({
                    min: m,
                    max: v,
                    timeslots: r,
                    step: o,
                    localizer: i,
                  }),
                );
            },
            [
              null == m ? void 0 : m.toISOString(),
              null == v ? void 0 : v.toISOString(),
              r,
              o,
            ],
          );
          var A = (0, f.useCallback)(
            function (e, t) {
              if (t) return null;
              var n = b.dateIsInGroup(a(), t);
              return f.createElement(
                "span",
                { className: (0, D.A)("rbc-label", n && "rbc-now") },
                i.format(e, "timeGutterFormat"),
              );
            },
            [b, i, a],
          );
          return f.createElement(
            h,
            { slotMetrics: b },
            f.createElement(
              "div",
              { className: "rbc-time-gutter rbc-time-column", ref: d },
              b.groups.map(function (e, t) {
                return f.createElement(ha, {
                  key: t,
                  group: e,
                  resource: s,
                  components: l,
                  renderSlot: A,
                  getters: c,
                });
              }),
            ),
          );
        },
        Ea = f.forwardRef(function (e, t) {
          return f.createElement(Aa, Object.assign({ gutterRef: t }, e));
        }),
        Da = function (e) {
          var t = e.label;
          return f.createElement(f.Fragment, null, t);
        },
        Sa = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(o))).handleHeaderClick =
                function (t, n, r) {
                  r.preventDefault(), Zo(e.props.onDrillDown, [t, n]);
                }),
              (e.renderRow = function (t) {
                var n = e.props,
                  r = n.events,
                  o = n.rtl,
                  i = n.selectable,
                  a = n.getNow,
                  s = n.range,
                  l = n.getters,
                  c = n.localizer,
                  u = n.accessors,
                  d = n.components,
                  h = n.resizable,
                  p = u.resourceId(t),
                  m = t
                    ? r.filter(function (e) {
                        return u.resource(e) === p;
                      })
                    : r;
                return f.createElement(ta, {
                  isAllDay: !0,
                  rtl: o,
                  getNow: a,
                  minRows: 2,
                  maxRows: e.props.allDayMaxRows + 1,
                  range: s,
                  events: m,
                  resourceId: p,
                  className: "rbc-allday-cell",
                  selectable: i,
                  selected: e.props.selected,
                  components: d,
                  accessors: u,
                  getters: l,
                  localizer: c,
                  onSelect: e.props.onSelectEvent,
                  onShowMore: e.props.onShowMore,
                  onDoubleClick: e.props.onDoubleClickEvent,
                  onKeyPress: e.props.onKeyPressEvent,
                  onSelectSlot: e.props.onSelectSlot,
                  longPressThreshold: e.props.longPressThreshold,
                  resizable: h,
                });
              }),
              e
            );
          }
          return (
            (0, s.A)(n, [
              {
                key: "renderHeaderCells",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.localizer,
                    o = n.getDrilldownView,
                    i = n.getNow,
                    a = n.getters.dayProp,
                    s = n.components.header,
                    l = void 0 === s ? na : s,
                    c = i();
                  return e.map(function (e, n) {
                    var i = o(e),
                      s = r.format(e, "dayFormat"),
                      u = a(e),
                      d = u.className,
                      h = u.style,
                      p = f.createElement(l, {
                        date: e,
                        label: s,
                        localizer: r,
                      });
                    return f.createElement(
                      "div",
                      {
                        key: n,
                        style: h,
                        className: (0, D.A)(
                          "rbc-header",
                          d,
                          r.isSameDate(e, c) && "rbc-today",
                        ),
                      },
                      i
                        ? f.createElement(
                            "button",
                            {
                              type: "button",
                              className: "rbc-button-link",
                              onClick: function (n) {
                                return t.handleHeaderClick(e, i, n);
                              },
                            },
                            p,
                          )
                        : f.createElement("span", null, p),
                    );
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.width,
                    r = t.rtl,
                    o = t.resources,
                    i = t.range,
                    a = t.events,
                    s = t.getNow,
                    l = t.accessors,
                    c = t.selectable,
                    d = t.components,
                    h = t.getters,
                    p = t.scrollRef,
                    m = t.localizer,
                    v = t.isOverflowing,
                    g = t.components,
                    y = g.timeGutterHeader,
                    b = g.resourceHeader,
                    w = void 0 === b ? Da : b,
                    A = t.resizable,
                    E = {};
                  v &&
                    (E[r ? "marginLeft" : "marginRight"] = "".concat(
                      br() - 1,
                      "px",
                    ));
                  var S = o.groupEvents(a);
                  return f.createElement(
                    "div",
                    {
                      style: E,
                      ref: p,
                      className: (0, D.A)(
                        "rbc-time-header",
                        v && "rbc-overflowing",
                      ),
                    },
                    f.createElement(
                      "div",
                      {
                        className: "rbc-label rbc-time-header-gutter",
                        style: { width: n, minWidth: n, maxWidth: n },
                      },
                      y && f.createElement(y, null),
                    ),
                    o.map(function (t, n) {
                      var o = (0, u.A)(t, 2),
                        a = o[0],
                        p = o[1];
                      return f.createElement(
                        "div",
                        { className: "rbc-time-header-content", key: a || n },
                        p &&
                          f.createElement(
                            "div",
                            {
                              className: "rbc-row rbc-row-resource",
                              key: "resource_".concat(n),
                            },
                            f.createElement(
                              "div",
                              { className: "rbc-header" },
                              f.createElement(w, {
                                index: n,
                                label: l.resourceTitle(p),
                                resource: p,
                              }),
                            ),
                          ),
                        f.createElement(
                          "div",
                          {
                            className: "rbc-row rbc-time-header-cell".concat(
                              i.length <= 1
                                ? " rbc-time-header-cell-single-day"
                                : "",
                            ),
                          },
                          e.renderHeaderCells(i),
                        ),
                        f.createElement(ta, {
                          isAllDay: !0,
                          rtl: r,
                          getNow: s,
                          minRows: 2,
                          maxRows: e.props.allDayMaxRows + 1,
                          range: i,
                          events: S.get(a) || [],
                          resourceId: p && a,
                          className: "rbc-allday-cell",
                          selectable: c,
                          selected: e.props.selected,
                          components: d,
                          accessors: l,
                          getters: h,
                          localizer: m,
                          onSelect: e.props.onSelectEvent,
                          onShowMore: e.props.onShowMore,
                          onDoubleClick: e.props.onDoubleClickEvent,
                          onKeyPress: e.props.onKeyPressEvent,
                          onSelectSlot: e.props.onSelectSlot,
                          longPressThreshold: e.props.longPressThreshold,
                          resizable: A,
                        }),
                      );
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component),
        ka = {};
      var _a = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n(e) {
          var o;
          return (
            (0, a.A)(this, n),
            ((o = t.call(this, e)).handleScroll = function (e) {
              o.scrollRef.current &&
                (o.scrollRef.current.scrollLeft = e.target.scrollLeft);
            }),
            (o.handleResize = function () {
              Fe(o.rafHandle), (o.rafHandle = We(o.checkOverflow));
            }),
            (o.handleKeyPressEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Zo(o.props.onKeyPressEvent, t);
            }),
            (o.handleSelectEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Zo(o.props.onSelectEvent, t);
            }),
            (o.handleDoubleClickEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Zo(o.props.onDoubleClickEvent, t);
            }),
            (o.handleShowMore = function (e, t, n, i, a) {
              var s = o.props,
                l = s.popup,
                c = s.onDrillDown,
                u = s.onShowMore,
                f = s.getDrilldownView,
                d = s.doShowMoreDrillDown;
              if ((o.clearSelection(), l)) {
                var h = Pe(n, o.containerRef.current);
                o.setState({
                  overlay: {
                    date: t,
                    events: e,
                    position: (0, r.A)((0, r.A)({}, h), {}, { width: "200px" }),
                    target: a,
                  },
                });
              } else d && Zo(c, [t, f(t) || Go.DAY]);
              Zo(u, [e, t, i]);
            }),
            (o.handleSelectAllDaySlot = function (e, t) {
              var n = o.props.onSelectSlot,
                r = new Date(e[0]),
                i = new Date(e[e.length - 1]);
              i.setDate(e[e.length - 1].getDate() + 1),
                Zo(n, {
                  slots: e,
                  start: r,
                  end: i,
                  action: t.action,
                  resourceId: t.resourceId,
                });
            }),
            (o.overlayDisplay = function () {
              o.setState({ overlay: null });
            }),
            (o.checkOverflow = function () {
              if (!o._updatingOverflow) {
                var e = o.contentRef.current;
                if (null != e && e.scrollHeight) {
                  var t = e.scrollHeight > e.clientHeight;
                  o.state.isOverflowing !== t &&
                    ((o._updatingOverflow = !0),
                    o.setState({ isOverflowing: t }, function () {
                      o._updatingOverflow = !1;
                    }));
                }
              }
            }),
            (o.memoizedResources = Zn(function (e, t) {
              return (function (e, t) {
                return {
                  map: function (n) {
                    return e
                      ? e.map(function (e, r) {
                          return n([t.resourceId(e), e], r);
                        })
                      : [n([ka, null], 0)];
                  },
                  groupEvents: function (n) {
                    var r = new Map();
                    return e
                      ? (n.forEach(function (e) {
                          var n = t.resource(e) || ka;
                          if (Array.isArray(n))
                            n.forEach(function (t) {
                              var n = r.get(t) || [];
                              n.push(e), r.set(t, n);
                            });
                          else {
                            var o = r.get(n) || [];
                            o.push(e), r.set(n, o);
                          }
                        }),
                        r)
                      : (r.set(ka, n), r);
                  },
                };
              })(e, t);
            })),
            (o.state = { gutterWidth: void 0, isOverflowing: null }),
            (o.scrollRef = f.createRef()),
            (o.contentRef = f.createRef()),
            (o.containerRef = f.createRef()),
            (o._scrollRatio = null),
            (o.gutterRef = (0, f.createRef)()),
            o
          );
        }
        return (
          (0, s.A)(n, [
            {
              key: "getSnapshotBeforeUpdate",
              value: function () {
                return this.checkOverflow(), null;
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                null == this.props.width && this.measureGutter(),
                  this.calculateScroll(),
                  this.applyScroll(),
                  window.addEventListener("resize", this.handleResize);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                window.removeEventListener("resize", this.handleResize),
                  Fe(this.rafHandle),
                  this.measureGutterAnimationFrameRequest &&
                    window.cancelAnimationFrame(
                      this.measureGutterAnimationFrameRequest,
                    );
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.applyScroll();
              },
            },
            {
              key: "renderEvents",
              value: function (e, t, n, r) {
                var o = this,
                  i = this.props,
                  a = i.min,
                  s = i.max,
                  l = i.components,
                  c = i.accessors,
                  d = i.localizer,
                  h = i.dayLayoutAlgorithm,
                  p = this.memoizedResources(this.props.resources, c),
                  m = p.groupEvents(t),
                  v = p.groupEvents(n);
                return p.map(function (t, n) {
                  var i = (0, u.A)(t, 2),
                    p = i[0],
                    g = i[1];
                  return e.map(function (e, t) {
                    var i = (m.get(p) || []).filter(function (t) {
                        return d.inRange(e, c.start(t), c.end(t), "day");
                      }),
                      u = (v.get(p) || []).filter(function (t) {
                        return d.inRange(e, c.start(t), c.end(t), "day");
                      });
                    return f.createElement(
                      wa,
                      Object.assign({}, o.props, {
                        localizer: d,
                        min: d.merge(e, a),
                        max: d.merge(e, s),
                        resource: g && p,
                        components: l,
                        isNow: d.isSameDate(e, r),
                        key: n + "-" + t,
                        date: e,
                        events: i,
                        backgroundEvents: u,
                        dayLayoutAlgorithm: h,
                      }),
                    );
                  });
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = this.props,
                  n = t.events,
                  r = t.backgroundEvents,
                  o = t.range,
                  i = t.width,
                  a = t.rtl,
                  s = t.selected,
                  l = t.getNow,
                  c = t.resources,
                  u = t.components,
                  d = t.accessors,
                  h = t.getters,
                  p = t.localizer,
                  m = t.min,
                  v = t.max,
                  g = t.showMultiDayTimes,
                  y = t.longPressThreshold,
                  b = t.resizable;
                i = i || this.state.gutterWidth;
                var w = o[0],
                  A = o[o.length - 1];
                this.slots = o.length;
                var E = [],
                  S = [],
                  k = [];
                return (
                  n.forEach(function (e) {
                    if (Ki(e, w, A, d, p)) {
                      var t = d.start(e),
                        n = d.end(e);
                      d.allDay(e) ||
                      p.startAndEndAreDateOnly(t, n) ||
                      (!g && !p.isSameDate(t, n))
                        ? E.push(e)
                        : S.push(e);
                    }
                  }),
                  r.forEach(function (e) {
                    Ki(e, w, A, d, p) && k.push(e);
                  }),
                  E.sort(function (e, t) {
                    return $i(e, t, d, p);
                  }),
                  f.createElement(
                    "div",
                    {
                      className: (0, D.A)(
                        "rbc-time-view",
                        c && "rbc-time-view-resources",
                      ),
                      ref: this.containerRef,
                    },
                    f.createElement(Sa, {
                      range: o,
                      events: E,
                      width: i,
                      rtl: a,
                      getNow: l,
                      localizer: p,
                      selected: s,
                      allDayMaxRows: this.props.showAllEvents
                        ? 1 / 0
                        : null !== (e = this.props.allDayMaxRows) &&
                            void 0 !== e
                          ? e
                          : 1 / 0,
                      resources: this.memoizedResources(c, d),
                      selectable: this.props.selectable,
                      accessors: d,
                      getters: h,
                      components: u,
                      scrollRef: this.scrollRef,
                      isOverflowing: this.state.isOverflowing,
                      longPressThreshold: y,
                      onSelectSlot: this.handleSelectAllDaySlot,
                      onSelectEvent: this.handleSelectEvent,
                      onShowMore: this.handleShowMore,
                      onDoubleClickEvent: this.props.onDoubleClickEvent,
                      onKeyPressEvent: this.props.onKeyPressEvent,
                      onDrillDown: this.props.onDrillDown,
                      getDrilldownView: this.props.getDrilldownView,
                      resizable: b,
                    }),
                    this.props.popup && this.renderOverlay(),
                    f.createElement(
                      "div",
                      {
                        ref: this.contentRef,
                        className: "rbc-time-content",
                        onScroll: this.handleScroll,
                      },
                      f.createElement(Ea, {
                        date: w,
                        ref: this.gutterRef,
                        localizer: p,
                        min: p.merge(w, m),
                        max: p.merge(w, v),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: u,
                        className: "rbc-time-gutter",
                        getters: h,
                      }),
                      this.renderEvents(o, S, k, l()),
                    ),
                  )
                );
              },
            },
            {
              key: "renderOverlay",
              value: function () {
                var e,
                  t,
                  n = this,
                  r =
                    null !==
                      (e =
                        null === (t = this.state) || void 0 === t
                          ? void 0
                          : t.overlay) && void 0 !== e
                      ? e
                      : {},
                  o = this.props,
                  i = o.accessors,
                  a = o.localizer,
                  s = o.components,
                  l = o.getters,
                  c = o.selected,
                  u = o.popupOffset,
                  d = o.handleDragStart;
                return f.createElement(Ri, {
                  overlay: r,
                  accessors: i,
                  localizer: a,
                  components: s,
                  getters: l,
                  selected: c,
                  popupOffset: u,
                  ref: this.containerRef,
                  handleKeyPressEvent: this.handleKeyPressEvent,
                  handleSelectEvent: this.handleSelectEvent,
                  handleDoubleClickEvent: this.handleDoubleClickEvent,
                  handleDragStart: d,
                  show: !!r.position,
                  overlayDisplay: this.overlayDisplay,
                  onHide: function () {
                    return n.setState({ overlay: null });
                  },
                });
              },
            },
            {
              key: "clearSelection",
              value: function () {
                clearTimeout(this._selectTimer), (this._pendingSelection = []);
              },
            },
            {
              key: "measureGutter",
              value: function () {
                var e = this;
                this.measureGutterAnimationFrameRequest &&
                  window.cancelAnimationFrame(
                    this.measureGutterAnimationFrameRequest,
                  ),
                  (this.measureGutterAnimationFrameRequest =
                    window.requestAnimationFrame(function () {
                      var t,
                        n =
                          null !== (t = e.gutterRef) &&
                          void 0 !== t &&
                          t.current
                            ? wr(e.gutterRef.current)
                            : void 0;
                      n &&
                        e.state.gutterWidth !== n &&
                        e.setState({ gutterWidth: n });
                    }));
              },
            },
            {
              key: "applyScroll",
              value: function () {
                if (
                  null != this._scrollRatio &&
                  !0 === this.props.enableAutoScroll
                ) {
                  var e = this.contentRef.current;
                  (e.scrollTop = e.scrollHeight * this._scrollRatio),
                    (this._scrollRatio = null);
                }
              },
            },
            {
              key: "calculateScroll",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.props,
                  t = e.min,
                  n = e.max,
                  r = e.scrollToTime,
                  o = e.localizer,
                  i = o.diff(o.merge(r, t), r, "milliseconds"),
                  a = o.diff(t, n, "milliseconds");
                this._scrollRatio = i / a;
              },
            },
          ]),
          n
        );
      })(f.Component);
      _a.defaultProps = { step: 30, timeslots: 2 };
      var Oa = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        xa = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.localizer,
                    i = e.min,
                    a = void 0 === i ? r.startOf(new Date(), "day") : i,
                    s = e.max,
                    l = void 0 === s ? r.endOf(new Date(), "day") : s,
                    c = e.scrollToTime,
                    u = void 0 === c ? r.startOf(new Date(), "day") : c,
                    d = e.enableAutoScroll,
                    h = void 0 === d || d,
                    p = (0, o.A)(e, Oa),
                    m = n.range(t, { localizer: r });
                  return f.createElement(
                    _a,
                    Object.assign({}, p, {
                      range: m,
                      eventOffset: 10,
                      localizer: r,
                      min: a,
                      max: l,
                      scrollToTime: u,
                      enableAutoScroll: h,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      (xa.range = function (e, t) {
        return [t.localizer.startOf(e, "day")];
      }),
        (xa.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case qo:
              return r.add(e, -1, "day");
            case Ko:
              return r.add(e, 1, "day");
            default:
              return e;
          }
        }),
        (xa.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var Ma = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ra = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.localizer,
                    i = e.min,
                    a = void 0 === i ? r.startOf(new Date(), "day") : i,
                    s = e.max,
                    l = void 0 === s ? r.endOf(new Date(), "day") : s,
                    c = e.scrollToTime,
                    u = void 0 === c ? r.startOf(new Date(), "day") : c,
                    d = e.enableAutoScroll,
                    h = void 0 === d || d,
                    p = (0, o.A)(e, Ma),
                    m = n.range(t, this.props);
                  return f.createElement(
                    _a,
                    Object.assign({}, p, {
                      range: m,
                      eventOffset: 15,
                      localizer: r,
                      min: a,
                      max: l,
                      scrollToTime: u,
                      enableAutoScroll: h,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      (Ra.defaultProps = _a.defaultProps),
        (Ra.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case qo:
              return r.add(e, -1, "week");
            case Ko:
              return r.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (Ra.range = function (e, t) {
          var n = t.localizer,
            r = n.startOfWeek(),
            o = n.startOf(e, "week", r),
            i = n.endOf(e, "week", r);
          return n.range(o, i);
        }),
        (Ra.title = function (e, t) {
          var n = t.localizer,
            r = kr(Ra.range(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        });
      var Ca = [
        "date",
        "localizer",
        "min",
        "max",
        "scrollToTime",
        "enableAutoScroll",
      ];
      function Ta(e, t) {
        return Ra.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var Pa,
        Na = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.localizer,
                    r = e.min,
                    i = void 0 === r ? n.startOf(new Date(), "day") : r,
                    a = e.max,
                    s = void 0 === a ? n.endOf(new Date(), "day") : a,
                    l = e.scrollToTime,
                    c = void 0 === l ? n.startOf(new Date(), "day") : l,
                    u = e.enableAutoScroll,
                    d = void 0 === u || u,
                    h = (0, o.A)(e, Ca),
                    p = Ta(t, this.props);
                  return f.createElement(
                    _a,
                    Object.assign({}, h, {
                      range: p,
                      eventOffset: 15,
                      localizer: n,
                      min: i,
                      max: s,
                      scrollToTime: c,
                      enableAutoScroll: d,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function La(e) {
        var t = e.accessors,
          n = e.components,
          r = e.date,
          o = e.events,
          i = e.getters,
          a = e.length,
          s = e.localizer,
          l = e.onDoubleClickEvent,
          c = e.onSelectEvent,
          u = e.selected,
          d = (0, f.useRef)(null),
          h = (0, f.useRef)(null),
          p = (0, f.useRef)(null),
          m = (0, f.useRef)(null),
          v = (0, f.useRef)(null);
        (0, f.useEffect)(function () {
          y();
        });
        var g = function (e, r) {
            var o = "",
              i = n.time,
              a = s.messages.allDay,
              l = t.end(r),
              c = t.start(r);
            return (
              t.allDay(r) ||
                (s.eq(c, l)
                  ? (a = s.format(c, "agendaTimeFormat"))
                  : s.isSameDate(c, l)
                    ? (a = s.format(
                        { start: c, end: l },
                        "agendaTimeRangeFormat",
                      ))
                    : s.isSameDate(e, c)
                      ? (a = s.format(c, "agendaTimeFormat"))
                      : s.isSameDate(e, l) &&
                        (a = s.format(l, "agendaTimeFormat"))),
              s.gt(e, c, "day") && (o = "rbc-continues-prior"),
              s.lt(e, l, "day") && (o += " rbc-continues-after"),
              f.createElement(
                "span",
                { className: o.trim() },
                i ? f.createElement(i, { event: r, day: e, label: a }) : a,
              )
            );
          },
          y = function () {
            if (v.current) {
              var e = d.current,
                t = v.current.firstChild;
              if (t) {
                var n = m.current.scrollHeight > m.current.clientHeight,
                  r = [],
                  o = r;
                (r = [wr(t.children[0]), wr(t.children[1])]),
                  (o[0] === r[0] && o[1] === r[1]) ||
                    ((h.current.style.width = r[0] + "px"),
                    (p.current.style.width = r[1] + "px")),
                  n
                    ? ((0, _r.A)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = br() + "px"))
                    : (0, Or.A)(e, "rbc-header-overflowing");
              }
            }
          },
          b = s.messages,
          w = s.add(r, a, "day"),
          A = s.range(r, w, "day");
        return (
          (o = o.filter(function (e) {
            return Ki(e, s.startOf(r, "day"), s.endOf(w, "day"), t, s);
          })).sort(function (e, n) {
            return +t.start(e) - +t.start(n);
          }),
          f.createElement(
            "div",
            { className: "rbc-agenda-view" },
            0 !== o.length
              ? f.createElement(
                  f.Fragment,
                  null,
                  f.createElement(
                    "table",
                    { ref: d, className: "rbc-agenda-table" },
                    f.createElement(
                      "thead",
                      null,
                      f.createElement(
                        "tr",
                        null,
                        f.createElement(
                          "th",
                          { className: "rbc-header", ref: h },
                          b.date,
                        ),
                        f.createElement(
                          "th",
                          { className: "rbc-header", ref: p },
                          b.time,
                        ),
                        f.createElement(
                          "th",
                          { className: "rbc-header" },
                          b.event,
                        ),
                      ),
                    ),
                  ),
                  f.createElement(
                    "div",
                    { className: "rbc-agenda-content", ref: m },
                    f.createElement(
                      "table",
                      { className: "rbc-agenda-table" },
                      f.createElement(
                        "tbody",
                        { ref: v },
                        A.map(function (e, r) {
                          return (function (e, r, o) {
                            var a = n.event,
                              d = n.date;
                            return (r = r.filter(function (n) {
                              return Ki(
                                n,
                                s.startOf(e, "day"),
                                s.endOf(e, "day"),
                                t,
                                s,
                              );
                            })).map(function (n, h) {
                              var p = t.title(n),
                                m = t.end(n),
                                v = t.start(n),
                                y = i.eventProp(n, v, m, Si(n, u)),
                                b = 0 === h && s.format(e, "agendaDateFormat"),
                                w =
                                  0 === h &&
                                  f.createElement(
                                    "td",
                                    {
                                      rowSpan: r.length,
                                      className: "rbc-agenda-date-cell",
                                    },
                                    d
                                      ? f.createElement(d, { day: e, label: b })
                                      : b,
                                  );
                              return f.createElement(
                                "tr",
                                {
                                  key: o + "_" + h,
                                  className: y.className,
                                  style: y.style,
                                },
                                w,
                                f.createElement(
                                  "td",
                                  { className: "rbc-agenda-time-cell" },
                                  g(e, n),
                                ),
                                f.createElement(
                                  "td",
                                  {
                                    className: "rbc-agenda-event-cell",
                                    onClick: function (e) {
                                      return c && c(n, e);
                                    },
                                    onDoubleClick: function (e) {
                                      return l && l(n, e);
                                    },
                                  },
                                  a
                                    ? f.createElement(a, { event: n, title: p })
                                    : p,
                                ),
                              );
                            }, []);
                          })(e, o, r);
                        }),
                      ),
                    ),
                  ),
                )
              : f.createElement(
                  "span",
                  { className: "rbc-agenda-empty" },
                  b.noEventsInRange,
                ),
          )
        );
      }
      (Na.defaultProps = _a.defaultProps),
        (Na.range = Ta),
        (Na.navigate = Ra.navigate),
        (Na.title = function (e, t) {
          var n = t.localizer,
            r = kr(Ta(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        }),
        (La.defaultProps = { length: 30 }),
        (La.range = function (e, t) {
          var n = t.length,
            r = void 0 === n ? La.defaultProps.length : n;
          return { start: e, end: t.localizer.add(e, r, "day") };
        }),
        (La.navigate = function (e, t, n) {
          var r = n.length,
            o = void 0 === r ? La.defaultProps.length : r,
            i = n.localizer;
          switch (t) {
            case qo:
              return i.add(e, -o, "day");
            case Ko:
              return i.add(e, o, "day");
            default:
              return e;
          }
        }),
        (La.title = function (e, t) {
          var n = t.length,
            r = void 0 === n ? La.defaultProps.length : n,
            o = t.localizer,
            i = o.add(e, r, "day");
          return o.format({ start: e, end: i }, "agendaHeaderFormat");
        });
      var za =
          ((Pa = {}),
          (0, le.A)(Pa, Go.MONTH, ia),
          (0, le.A)(Pa, Go.WEEK, Ra),
          (0, le.A)(Pa, Go.WORK_WEEK, Na),
          (0, le.A)(Pa, Go.DAY, xa),
          (0, le.A)(Pa, Go.AGENDA, La),
          Pa),
        ja = ["action", "date", "today"];
      var Ia = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(o))).navigate = function (t) {
              e.props.onNavigate(t);
            }),
            (e.view = function (t) {
              e.props.onView(t);
            }),
            e
          );
        }
        return (
          (0, s.A)(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.localizer.messages,
                  n = e.label;
                return f.createElement(
                  "div",
                  { className: "rbc-toolbar" },
                  f.createElement(
                    "span",
                    { className: "rbc-btn-group" },
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Vo) },
                      t.today,
                    ),
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, qo) },
                      t.previous,
                    ),
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Ko) },
                      t.next,
                    ),
                  ),
                  f.createElement(
                    "span",
                    { className: "rbc-toolbar-label" },
                    n,
                  ),
                  f.createElement(
                    "span",
                    { className: "rbc-btn-group" },
                    this.viewNamesGroup(t),
                  ),
                );
              },
            },
            {
              key: "viewNamesGroup",
              value: function (e) {
                var t = this,
                  n = this.props.views,
                  r = this.props.view;
                if (n.length > 1)
                  return n.map(function (n) {
                    return f.createElement(
                      "button",
                      {
                        type: "button",
                        key: n,
                        className: (0, D.A)({ "rbc-active": r === n }),
                        onClick: t.view.bind(null, n),
                      },
                      e[n],
                    );
                  });
              },
            },
          ]),
          n
        );
      })(f.Component);
      var Fa = function (e) {
          return function (t) {
            return (function (e, t) {
              var n = null;
              return (
                "function" == typeof t
                  ? (n = t(e))
                  : "string" == typeof t &&
                    "object" === (0, i.A)(e) &&
                    null != e &&
                    t in e &&
                    (n = e[t]),
                n
              );
            })(t, e);
          };
        },
        Wa = ["view", "date", "getNow", "onNavigate"],
        Ha = [
          "view",
          "toolbar",
          "events",
          "backgroundEvents",
          "style",
          "className",
          "elementProps",
          "date",
          "getNow",
          "length",
          "showMultiDayTimes",
          "onShowMore",
          "doShowMoreDrillDown",
          "components",
          "formats",
          "messages",
          "culture",
        ];
      function Ua(e) {
        if (Array.isArray(e)) return e;
        for (var t = [], n = 0, r = Object.entries(e); n < r.length; n++) {
          var o = (0, u.A)(r[n], 2),
            i = o[0];
          o[1] && t.push(i);
        }
        return t;
      }
      var Ya = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
          for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
            l[c] = arguments[c];
          return (
            ((e = t.call.apply(t, [this].concat(l))).getViews = function () {
              var t = e.props.views;
              return Array.isArray(t)
                ? Ho(
                    t,
                    function (e, t) {
                      return (e[t] = za[t]);
                    },
                    {},
                  )
                : "object" === (0, i.A)(t)
                  ? Yo(t, function (e, t) {
                      return !0 === e ? za[t] : e;
                    })
                  : za;
            }),
            (e.getView = function () {
              return e.getViews()[e.props.view];
            }),
            (e.getDrilldownView = function (t) {
              var n = e.props,
                r = n.view,
                o = n.drilldownView,
                i = n.getDrilldownView;
              return i ? i(t, r, Object.keys(e.getViews())) : o;
            }),
            (e.handleRangeChange = function (t, n, r) {
              var o = e.props,
                i = o.onRangeChange,
                a = o.localizer;
              i && n.range && i(n.range(t, { localizer: a }), r);
            }),
            (e.handleNavigate = function (t, n) {
              var i = e.props,
                a = i.view,
                s = i.date,
                l = i.getNow,
                c = i.onNavigate,
                u = (0, o.A)(i, Wa),
                f = e.getView(),
                d = l();
              (s = (function (e, t) {
                var n = t.action,
                  r = t.date,
                  i = t.today,
                  a = (0, o.A)(t, ja);
                switch (((e = "string" == typeof e ? za[e] : e), n)) {
                  case Vo:
                    r = i || new Date();
                    break;
                  case $o:
                    break;
                  default:
                    h()(
                      e && "function" == typeof e.navigate,
                      "Calendar View components must implement a static `.navigate(date, action)` method.s",
                    ),
                      (r = e.navigate(r, n, a));
                }
                return r;
              })(
                f,
                (0, r.A)(
                  (0, r.A)({}, u),
                  {},
                  { action: t, date: n || s || d, today: d },
                ),
              )),
                c(s, a, t),
                e.handleRangeChange(s, f);
            }),
            (e.handleViewChange = function (t) {
              t !== e.props.view &&
                (function (e, t) {
                  return -1 !== Ua(t.views).indexOf(e);
                })(t, e.props) &&
                e.props.onView(t);
              var n = e.getViews();
              e.handleRangeChange(e.props.date || e.props.getNow(), n[t], t);
            }),
            (e.handleSelectEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Zo(e.props.onSelectEvent, n);
            }),
            (e.handleDoubleClickEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Zo(e.props.onDoubleClickEvent, n);
            }),
            (e.handleKeyPressEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Zo(e.props.onKeyPressEvent, n);
            }),
            (e.handleSelectSlot = function (t) {
              Zo(e.props.onSelectSlot, t);
            }),
            (e.handleDrillDown = function (t, n) {
              var r = e.props.onDrillDown;
              r
                ? r(t, n, e.drilldownView)
                : (n && e.handleViewChange(n), e.handleNavigate($o, t));
            }),
            (e.state = { context: n.getContext(e.props) }),
            e
          );
        }
        return (
          (0, s.A)(
            n,
            [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.view,
                    n = e.toolbar,
                    r = e.events,
                    i = e.backgroundEvents,
                    a = e.style,
                    s = e.className,
                    l = e.elementProps,
                    c = e.date,
                    u = e.getNow,
                    d = e.length,
                    h = e.showMultiDayTimes,
                    p = e.onShowMore,
                    m = e.doShowMoreDrillDown;
                  e.components, e.formats, e.messages, e.culture;
                  var v = (0, o.A)(e, Ha);
                  c = c || u();
                  var g = this.getView(),
                    y = this.state.context,
                    b = y.accessors,
                    w = y.components,
                    A = y.getters,
                    E = y.localizer,
                    S = y.viewNames,
                    k = w.toolbar || Ia,
                    _ = g.title(c, { localizer: E, length: d });
                  return f.createElement(
                    "div",
                    Object.assign({}, l, {
                      className: (0, D.A)(
                        s,
                        "rbc-calendar",
                        v.rtl && "rbc-rtl",
                      ),
                      style: a,
                    }),
                    n &&
                      f.createElement(k, {
                        date: c,
                        view: t,
                        views: S,
                        label: _,
                        onView: this.handleViewChange,
                        onNavigate: this.handleNavigate,
                        localizer: E,
                      }),
                    f.createElement(
                      g,
                      Object.assign({}, v, {
                        events: r,
                        backgroundEvents: i,
                        date: c,
                        getNow: u,
                        length: d,
                        localizer: E,
                        getters: A,
                        components: w,
                        accessors: b,
                        showMultiDayTimes: h,
                        getDrilldownView: this.getDrilldownView,
                        onNavigate: this.handleNavigate,
                        onDrillDown: this.handleDrillDown,
                        onSelectEvent: this.handleSelectEvent,
                        onDoubleClickEvent: this.handleDoubleClickEvent,
                        onKeyPressEvent: this.handleKeyPressEvent,
                        onSelectSlot: this.handleSelectSlot,
                        onShowMore: p,
                        doShowMoreDrillDown: m,
                      }),
                    ),
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e) {
                  return { context: n.getContext(e) };
                },
              },
              {
                key: "getContext",
                value: function (e) {
                  var t = e.startAccessor,
                    n = e.endAccessor,
                    o = e.allDayAccessor,
                    i = e.tooltipAccessor,
                    a = e.titleAccessor,
                    s = e.resourceAccessor,
                    l = e.resourceIdAccessor,
                    c = e.resourceTitleAccessor,
                    u = e.eventPropGetter,
                    f = e.backgroundEventPropGetter,
                    d = e.slotPropGetter,
                    h = e.slotGroupPropGetter,
                    p = e.dayPropGetter,
                    m = e.view,
                    v = e.views,
                    g = e.localizer,
                    y = e.culture,
                    b = e.messages,
                    w = void 0 === b ? {} : b,
                    A = e.components,
                    E = void 0 === A ? {} : A,
                    D = e.formats,
                    S = void 0 === D ? {} : D,
                    k = Ua(v);
                  return {
                    viewNames: k,
                    localizer: wi(
                      g,
                      y,
                      S,
                      (function (e) {
                        return (0, r.A)((0, r.A)({}, Ai), e);
                      })(w),
                    ),
                    getters: {
                      eventProp: function () {
                        return (u && u.apply(void 0, arguments)) || {};
                      },
                      backgroundEventProp: function () {
                        return (f && f.apply(void 0, arguments)) || {};
                      },
                      slotProp: function () {
                        return (d && d.apply(void 0, arguments)) || {};
                      },
                      slotGroupProp: function () {
                        return (h && h.apply(void 0, arguments)) || {};
                      },
                      dayProp: function () {
                        return (p && p.apply(void 0, arguments)) || {};
                      },
                    },
                    components: zo(E[m] || {}, To(E, k), {
                      eventWrapper: Bo,
                      backgroundEventWrapper: Bo,
                      eventContainerWrapper: Bo,
                      dateCellWrapper: Bo,
                      weekWrapper: Bo,
                      timeSlotWrapper: Bo,
                      timeGutterWrapper: Bo,
                    }),
                    accessors: {
                      start: Fa(t),
                      end: Fa(n),
                      allDay: Fa(o),
                      tooltip: Fa(i),
                      title: Fa(a),
                      resource: Fa(s),
                      resourceId: Fa(l),
                      resourceTitle: Fa(c),
                    },
                  };
                },
              },
            ],
          ),
          n
        );
      })(f.Component);
      Ya.defaultProps = {
        events: [],
        backgroundEvents: [],
        elementProps: {},
        popup: !1,
        toolbar: !0,
        view: Go.MONTH,
        views: [Go.MONTH, Go.WEEK, Go.DAY, Go.AGENDA],
        step: 30,
        length: 30,
        allDayMaxRows: 1 / 0,
        doShowMoreDrillDown: !0,
        drilldownView: Go.DAY,
        titleAccessor: "title",
        tooltipAccessor: "title",
        allDayAccessor: "allDay",
        startAccessor: "start",
        endAccessor: "end",
        resourceAccessor: "resourceId",
        resourceIdAccessor: "id",
        resourceTitleAccessor: "title",
        longPressThreshold: 250,
        getNow: function () {
          return new Date();
        },
        dayLayoutAlgorithm: "overlap",
      };
      var Ba = (function e(t, n, r) {
          void 0 === r && (r = []);
          var o,
            i = t.displayName || t.name || "Component",
            a =
              !!(o = t) &&
              ("function" != typeof o ||
                (o.prototype && o.prototype.isReactComponent)),
            s = Object.keys(n),
            l = s.map(v);
          !a && r.length && h()(!1);
          var c = (function (e) {
            function o() {
              for (
                var t, o = arguments.length, i = new Array(o), a = 0;
                a < o;
                a++
              )
                i[a] = arguments[a];
              ((t = e.call.apply(e, [this].concat(i)) || this).handlers =
                Object.create(null)),
                s.forEach(function (e) {
                  var r = n[e];
                  t.handlers[r] = function (n) {
                    if (t.props[r]) {
                      var o;
                      t._notifying = !0;
                      for (
                        var i = arguments.length,
                          a = new Array(i > 1 ? i - 1 : 0),
                          s = 1;
                        s < i;
                        s++
                      )
                        a[s - 1] = arguments[s];
                      (o = t.props)[r].apply(o, [n].concat(a)),
                        (t._notifying = !1);
                    }
                    t.unmounted ||
                      t.setState(function (t) {
                        var r,
                          o = t.values;
                        return {
                          values: (0, y.A)(
                            Object.create(null),
                            o,
                            ((r = {}), (r[e] = n), r),
                          ),
                        };
                      });
                  };
                }),
                r.length &&
                  (t.attachRef = function (e) {
                    t.inner = e;
                  });
              var l = Object.create(null);
              return (
                s.forEach(function (e) {
                  l[e] = t.props[v(e)];
                }),
                (t.state = { values: l, prevProps: {} }),
                t
              );
            }
            (0, b.A)(o, e);
            var i = o.prototype;
            return (
              (i.shouldComponentUpdate = function () {
                return !this._notifying;
              }),
              (o.getDerivedStateFromProps = function (e, t) {
                var n = t.values,
                  r = t.prevProps,
                  o = {
                    values: (0, y.A)(Object.create(null), n),
                    prevProps: {},
                  };
                return (
                  s.forEach(function (t) {
                    (o.prevProps[t] = e[t]),
                      !m(e, t) && m(r, t) && (o.values[t] = e[v(t)]);
                  }),
                  o
                );
              }),
              (i.componentWillUnmount = function () {
                this.unmounted = !0;
              }),
              (i.render = function () {
                var e = this,
                  n = this.props,
                  r = n.innerRef,
                  o = (0, g.A)(n, ["innerRef"]);
                l.forEach(function (e) {
                  delete o[e];
                });
                var i = {};
                return (
                  s.forEach(function (t) {
                    var n = e.props[t];
                    i[t] = void 0 !== n ? n : e.state.values[t];
                  }),
                  f.createElement(
                    t,
                    (0, y.A)({}, o, i, this.handlers, {
                      ref: r || this.attachRef,
                    }),
                  )
                );
              }),
              o
            );
          })(f.Component);
          !(function (e) {
            var t = e.prototype;
            if (!t || !t.isReactComponent)
              throw new Error("Can only polyfill class components");
            if (
              "function" != typeof e.getDerivedStateFromProps &&
              "function" != typeof t.getSnapshotBeforeUpdate
            )
              return e;
            var n = null,
              r = null,
              o = null;
            if (
              ("function" == typeof t.componentWillMount
                ? (n = "componentWillMount")
                : "function" == typeof t.UNSAFE_componentWillMount &&
                  (n = "UNSAFE_componentWillMount"),
              "function" == typeof t.componentWillReceiveProps
                ? (r = "componentWillReceiveProps")
                : "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                  (r = "UNSAFE_componentWillReceiveProps"),
              "function" == typeof t.componentWillUpdate
                ? (o = "componentWillUpdate")
                : "function" == typeof t.UNSAFE_componentWillUpdate &&
                  (o = "UNSAFE_componentWillUpdate"),
              null !== n || null !== r || null !== o)
            ) {
              var i = e.displayName || e.name,
                a =
                  "function" == typeof e.getDerivedStateFromProps
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
              throw Error(
                "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
                  i +
                  " uses " +
                  a +
                  " but also contains the following legacy lifecycles:" +
                  (null !== n ? "\n  " + n : "") +
                  (null !== r ? "\n  " + r : "") +
                  (null !== o ? "\n  " + o : "") +
                  "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
              );
            }
            if (
              ("function" == typeof e.getDerivedStateFromProps &&
                ((t.componentWillMount = w), (t.componentWillReceiveProps = A)),
              "function" == typeof t.getSnapshotBeforeUpdate)
            ) {
              if ("function" != typeof t.componentDidUpdate)
                throw new Error(
                  "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
                );
              t.componentWillUpdate = E;
              var s = t.componentDidUpdate;
              t.componentDidUpdate = function (e, t, n) {
                var r = this.__reactInternalSnapshotFlag
                  ? this.__reactInternalSnapshot
                  : n;
                s.call(this, e, t, r);
              };
            }
          })(c),
            (c.displayName = "Uncontrolled(" + i + ")"),
            (c.propTypes = (0, y.A)(
              { innerRef: function () {} },
              (function (e) {
                var t = {};
                return (
                  Object.keys(e).forEach(function (e) {
                    t[v(e)] = p;
                  }),
                  t
                );
              })(n),
            )),
            r.forEach(function (e) {
              c.prototype[e] = function () {
                var t;
                return (t = this.inner)[e].apply(t, arguments);
              };
            });
          var u = c;
          return (
            f.forwardRef &&
              ((u = f.forwardRef(function (e, t) {
                return f.createElement(
                  c,
                  (0, y.A)({}, e, {
                    innerRef: t,
                    __source: {
                      fileName:
                        "/Users/jquense/src/uncontrollable/src/uncontrollable.js",
                      lineNumber: 128,
                    },
                    __self: this,
                  }),
                );
              })).propTypes = c.propTypes),
            (u.ControlledComponent = t),
            (u.deferControlTo = function (t, r, o) {
              return void 0 === r && (r = {}), e(t, (0, y.A)({}, n, r), o);
            }),
            u
          );
        })(Ya, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        qa = function (e, t, n) {
          var r = e.start,
            o = e.end;
          return n.format(r, "LT", t) + " – " + n.format(o, "LT", t);
        },
        Ka = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: qa,
          eventTimeRangeFormat: qa,
          eventTimeRangeStartFormat: function (e, t, n) {
            var r = e.start;
            return n.format(r, "LT", t) + " – ";
          },
          eventTimeRangeEndFormat: function (e, t, n) {
            var r = e.end;
            return " – " + n.format(r, "LT", t);
          },
          timeGutterFormat: "LT",
          monthHeaderFormat: "MMMM YYYY",
          dayHeaderFormat: "dddd MMM DD",
          dayRangeHeaderFormat: function (e, t, n) {
            var r = e.start,
              o = e.end;
            return (
              n.format(r, "MMMM DD", t) +
              " – " +
              n.format(o, n.eq(r, o, "month") ? "DD" : "MMMM DD", t)
            );
          },
          agendaHeaderFormat: function (e, t, n) {
            var r = e.start,
              o = e.end;
            return n.format(r, "L", t) + " – " + n.format(o, "L", t);
          },
          agendaDateFormat: "ddd MMM DD",
          agendaTimeFormat: "LT",
          agendaTimeRangeFormat: qa,
        };
      function Va(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function $a(e) {
        function t(t, n) {
          var r,
            o,
            i = e(t).local(),
            a = e(n).local();
          if (!e.tz)
            return (
              i.toDate().getTimezoneOffset() - a.toDate().getTimezoneOffset()
            );
          var s =
            null !==
              (r =
                null == i || null === (o = i._z) || void 0 === o
                  ? void 0
                  : o.name) && void 0 !== r
              ? r
              : e.tz.guess();
          return e.tz.zone(s).utcOffset(+i) - e.tz.zone(s).utcOffset(+a);
        }
        function n(t, n, r) {
          var o = Va(r);
          return [o ? e(t).startOf(o) : e(t), o ? e(n).startOf(o) : e(n), o];
        }
        function r() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            n = Va(arguments.length > 1 ? arguments[1] : void 0);
          return n ? e(t).startOf(n).toDate() : e(t).toDate();
        }
        function o(e, t, r) {
          var o = n(e, t, r),
            i = (0, u.A)(o, 3),
            a = i[0],
            s = i[1],
            l = i[2];
          return a.isSame(s, l);
        }
        function i(e, t, r) {
          var o = n(e, t, r),
            i = (0, u.A)(o, 3),
            a = i[0],
            s = i[1],
            l = i[2];
          return a.isSameOrBefore(s, l);
        }
        function a(t, n, r) {
          var o = Va(r);
          return e(t).add(n, o).toDate();
        }
        function s(e, t) {
          var n = Va(t),
            i = r(e, n);
          return o(i, e) ? i : a(i, 1, n);
        }
        function l(t, n) {
          var r = Va(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            ),
            o = e(t);
          return e(n).diff(o, r);
        }
        function c(t) {
          return e(t).startOf("month").startOf("week").toDate();
        }
        function f(t) {
          return e(t).endOf("month").endOf("week").toDate();
        }
        return new bi({
          formats: Ka,
          firstOfWeek: function (t) {
            var n = t ? e.localeData(t) : e.localeData();
            return n ? n.firstDayOfWeek() : 0;
          },
          firstVisibleDay: c,
          lastVisibleDay: f,
          visibleDays: function (e) {
            for (var t = c(e), n = f(e), r = []; i(t, n); )
              r.push(t), (t = a(t, 1, "d"));
            return r;
          },
          format: function (t, n, r) {
            return ((o = e(t)), (i = r), i ? o.locale(i) : o).format(n);
            var o, i;
          },
          lt: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              l = i[2];
            return a.isBefore(s, l);
          },
          lte: i,
          gt: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              l = i[2];
            return a.isAfter(s, l);
          },
          gte: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              l = i[2];
            return a.isSameOrBefore(s, l);
          },
          eq: o,
          neq: function (e, t, n) {
            return !o(e, t, n);
          },
          merge: function (t, n) {
            if (!t && !n) return null;
            var r = e(n).format("HH:mm:ss"),
              o = e(t).startOf("day").format("MM/DD/YYYY");
            return e(
              "".concat(o, " ").concat(r),
              "MM/DD/YYYY HH:mm:ss",
            ).toDate();
          },
          inRange: function (t, n, r) {
            var o = Va(
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "day",
              ),
              i = e(t),
              a = e(n),
              s = e(r);
            return i.isBetween(a, s, o, "[]");
          },
          startOf: r,
          endOf: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              n = Va(arguments.length > 1 ? arguments[1] : void 0);
            return n ? e(t).endOf(n).toDate() : e(t).toDate();
          },
          range: function (t, n) {
            for (
              var r = Va(
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "day",
                ),
                o = e(t).toDate(),
                s = [];
              i(o, n);
            )
              s.push(o), (o = a(o, 1, r));
            return s;
          },
          add: a,
          diff: l,
          ceil: s,
          min: function (t, n) {
            var r = e(t),
              o = e(n);
            return e.min(r, o).toDate();
          },
          max: function (t, n) {
            var r = e(t),
              o = e(n);
            return e.max(r, o).toDate();
          },
          minutes: function (t) {
            return e(t).minutes();
          },
          getSlotDate: function (t, n, r) {
            return e(t)
              .startOf("day")
              .minute(n + r)
              .toDate();
          },
          getTimezoneOffset: function (t) {
            return e(t).toDate().getTimezoneOffset();
          },
          getDstOffset: t,
          getTotalMin: function (e, t) {
            return l(e, t, "minutes");
          },
          getMinutesFromMidnight: function (n) {
            var r = e(n).startOf("day");
            return (
              e(n).diff(r, "minutes") +
              (function (n) {
                return t(e(n).startOf("day"), n);
              })(n)
            );
          },
          continuesPrior: function (t, n) {
            var r = e(t),
              o = e(n);
            return r.isBefore(o, "day");
          },
          continuesAfter: function (t, n, r) {
            var o = e(n),
              i = e(r);
            return o.isSameOrAfter(i, "minutes");
          },
          sortEvents: function (e) {
            var t = e.evtA,
              n = t.start,
              o = t.end,
              i = t.allDay,
              a = e.evtB,
              c = a.start,
              u = a.end,
              f = a.allDay,
              d = +r(n, "day") - +r(c, "day"),
              h = l(n, s(o, "day"), "day"),
              p = l(c, s(u, "day"), "day");
            return (
              d ||
              Math.max(p, 1) - Math.max(h, 1) ||
              !!f - !!i ||
              +n - +c ||
              +o - +u
            );
          },
          inEventRange: function (t) {
            var n = t.event,
              r = n.start,
              o = n.end,
              i = t.range,
              a = i.start,
              s = i.end,
              l = e(r).startOf("day"),
              c = e(o),
              u = e(a),
              f = e(s),
              d = l.isSameOrBefore(f, "day"),
              h = !l.isSame(c, "minutes")
                ? c.isAfter(u, "minutes")
                : c.isSameOrAfter(u, "minutes");
            return d && h;
          },
          isSameDate: function (t, n) {
            var r = e(t),
              o = e(n);
            return r.isSame(o, "day");
          },
          browserTZOffset: function () {
            var t = new Date(),
              n = /-/.test(t.toString()) ? "-" : "",
              r = t.getTimezoneOffset(),
              o = Number("".concat(n).concat(Math.abs(r)));
            return e().utcOffset() > o ? 1 : 0;
          },
        });
      }
    },
    67501: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
  },
]);
