/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10767010";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    c = {},
    t = {};
  function d(a) {
    var e = t[a];
    if (void 0 !== e) return e.exports;
    var n = (t[a] = { id: a, loaded: !1, exports: {} });
    return c[a].call(n.exports, n, n.exports, d), (n.loaded = !0), n.exports;
  }
  (d.m = c),
    (a = []),
    (d.O = (e, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (s = 0; s < a.length; s++) {
          for (var [n, o, i] = a[s], t = !0, r = 0; r < n.length; r++)
            (!1 & i || c >= i) && Object.keys(d.O).every((a) => d.O[a](n[r]))
              ? n.splice(r--, 1)
              : ((t = !1), i < c && (c = i));
          if (t) {
            a.splice(s--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      i = i || 0;
      for (var s = a.length; s > 0 && a[s - 1][2] > i; s--) a[s] = a[s - 1];
      a[s] = [n, o, i];
    }),
    (d.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return d.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (d.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      d.r(i);
      var c = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var t = 2 & o && a; "object" == typeof t && !~e.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((e) => (c[e] = () => a[e]));
      return (c.default = () => a), d.d(i, c), i;
    }),
    (d.d = (a, e) => {
      for (var n in e)
        d.o(e, n) &&
          !d.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (d.f = {}),
    (d.e = (a) =>
      Promise.all(Object.keys(d.f).reduce((e, n) => (d.f[n](a, e), e), []))),
    (d.u = (a) =>
      "javascript/applications/help/" +
      ({
        60: "localization/main_spanish-json",
        129: "localization/shared_swedish-json",
        139: "localization/shared_koreana-json",
        198: "localization/main_schinese-json",
        286: "localization/main_ukrainian-json",
        664: "localization/main_malay-json",
        759: "localization/main_koreana-json",
        823: "localization/shared_portuguese-json",
        831: "localization/main_danish-json",
        833: "localization/main_vietnamese-json",
        976: "greenenvelope",
        1389: "localization/shared_japanese-json",
        1423: "localization/shared_czech-json",
        1574: "footer",
        1602: "localization/main_arabic-json",
        1721: "localization/shared_arabic-json",
        1724: "localization/main_turkish-json",
        2021: "localization/shared_romanian-json",
        2199: "localization/shared_finnish-json",
        2446: "localization/main_brazilian-json",
        2481: "localization/shared_bulgarian-json",
        2664: "localization/shared_english-json",
        2959: "localization/shared_polish-json",
        3140: "localization/main_greek-json",
        3589: "localization/main_bulgarian-json",
        3594: "localization/shared_brazilian-json",
        3867: "localization/main_polish-json",
        4102: "localization/main_indonesian-json",
        4516: "localization/shared_malay-json",
        4694: "localization/main_french-json",
        4952: "localization/shared_thai-json",
        5052: "localization/main_english-json",
        5103: "localization/main_sc_schinese-json",
        5388: "localization/main_norwegian-json",
        5553: "localization/shared_tchinese-json",
        5803: "localization/shared_latam-json",
        6120: "localization/shared_norwegian-json",
        6428: "localization/main_italian-json",
        6430: "localization/shared_dutch-json",
        6472: "localization/shared_turkish-json",
        6577: "localization/shared_russian-json",
        6752: "localization/shared_spanish-json",
        6888: "localization/shared_german-json",
        7345: "localization/main_hungarian-json",
        7442: "localization/shared_schinese-json",
        7553: "localization/main_romanian-json",
        7696: "localization/shared_italian-json",
        7724: "localization/main_thai-json",
        7767: "libraries~d7eb6b340",
        8021: "localization/main_russian-json",
        8291: "localization/shared_danish-json",
        8443: "localization/shared_sc_schinese-json",
        8522: "localization/shared_indonesian-json",
        8547: "localization/main_finnish-json",
        8674: "localization/shared_french-json",
        8724: "localization/main_german-json",
        8749: "localization/main_tchinese-json",
        8872: "localization/shared_greek-json",
        9053: "localization/shared_hungarian-json",
        9298: "localization/shared_ukrainian-json",
        9387: "localization/main_portuguese-json",
        9453: "localization/main_swedish-json",
        9515: "localization/main_czech-json",
        9783: "localization/main_latam-json",
        9857: "localization/main_japanese-json",
        9869: "localization/shared_vietnamese-json",
        9914: "localization/main_dutch-json",
      }[a] || a) +
      ".js?contenthash=" +
      {
        60: "8e908c5d1d442b400bae",
        129: "537ae2286222ee796bbb",
        139: "f79aa1303a7094cfbd01",
        198: "8d26ef97b04eb2067028",
        286: "f4a0f84d3e2c6e742926",
        412: "ca4d2bcac75b68a8a040",
        664: "68647f3a2c4a67203281",
        759: "fd3f408752f6b43583fe",
        823: "454e63a174fee522dd17",
        831: "7cfa0c85d85517546354",
        833: "74d461c663a2417b9f90",
        976: "7d7bc85d610d7f9a78b7",
        1389: "f5fbbfcd4d8cca41f44c",
        1423: "3a8db8e73d9554567e7f",
        1574: "216309263d8893e07294",
        1580: "2cb4b32d04ceb5da97ad",
        1602: "a3f65dbbdc30baf06531",
        1655: "1104137d6364ceb68b85",
        1721: "b05c7665bb92fa1cfcc8",
        1724: "907f946f5e3526752fe4",
        1924: "46a5d13fd06baddb7ca4",
        2021: "a5cc99d0df442e531aa7",
        2164: "cce240f89b536ce914a6",
        2173: "1f2d927fcde8cdf7ec46",
        2199: "8f4032c2098c400f146b",
        2446: "0c0e95abac2fae641c1b",
        2481: "9459bf71c0c96fee8e79",
        2560: "1cbb2dab2df434b2faa3",
        2626: "5785a317ec77be86dac4",
        2664: "18c0ad0269af1ea6f0e5",
        2811: "0d450242c1753c10c968",
        2936: "9209417d53bde5ceadb6",
        2959: "6a57dfd2ef258c245ea8",
        3140: "874e18817db6e30f3153",
        3366: "dda071d9ed749e45ea9c",
        3589: "5c9aa244b1be38a26b7b",
        3594: "67081986e943d793992e",
        3867: "e0036bcef9b844408cc9",
        4102: "b3073890634c618329c8",
        4468: "22ee3b05fcb61567131b",
        4516: "c2cd95e134b69b64ee99",
        4694: "9db38d22eb4c7f08b862",
        4952: "0484c66fc68fb99429a1",
        5052: "486c6cda36aa1c8f20da",
        5059: "0411b485c04a1a6c180e",
        5061: "ffe6f2c2c03e6f2e45cf",
        5103: "bc1748fd1346242bae2a",
        5388: "62a1d364159a002bbe59",
        5474: "ac91c926a2d2357667ec",
        5553: "ed4942fd0f44b4f49c53",
        5666: "96fbdc81061db36cf03d",
        5803: "c54742b821da807b1356",
        5964: "afcb4f08c4f70fa38531",
        6120: "6561f7bc84064e093459",
        6139: "26c27bf53f2a52227bc9",
        6428: "46273cfaf3078d623a20",
        6430: "cadb361ed22f48676778",
        6472: "68f820474f3b8dbe7c7a",
        6509: "403ea2dd355cdbba1bcf",
        6515: "1fd72199a9cd19a7e8e3",
        6577: "e4525e032876f13a3ac7",
        6752: "0ae753fd0f8a3db25ed1",
        6888: "573c9fbf1c4c623d8d36",
        7267: "844e678821427933fb77",
        7345: "daf74fa95928b6c9d2e0",
        7442: "bbe76182f4e5b74fa54b",
        7553: "8392c46f0cab9c73f7c7",
        7696: "c5679a128c28ad23abb7",
        7724: "909966216dde549f8a42",
        7767: "098373d8fea23849d95a",
        7925: "3b7b9dba7bfa58a605bc",
        8021: "b602d2b3e0e6a6455cca",
        8233: "decb3c39dc0fb746d742",
        8291: "2877f406963ea8cbbc39",
        8443: "698a25c8a0961cd6eb35",
        8522: "eb26e2aa4ab3f870a30e",
        8547: "c19eef1d7c52f88e5396",
        8674: "98ae9540d98ceb663873",
        8724: "42203cb2c177614f4c68",
        8727: "c0f598cb109eeeeb6a2a",
        8749: "8a8997871100b719173d",
        8844: "99f961824f522350a40b",
        8872: "2f470b263e6322ab6d15",
        8973: "3c8f20afdcbb2b567cb5",
        9053: "c0ac7c3d95e77685bac7",
        9259: "05af198d8fac815c43f9",
        9298: "22a62ce5938c2ca041d1",
        9387: "7ee204fa924ee95b1337",
        9453: "b944926146b7a40384c4",
        9468: "942c19be54037449fce7",
        9515: "3e86c94819e34aa71ffc",
        9605: "d10bde0eef19104710c6",
        9720: "a7c3ba82e106c10da36b",
        9783: "3bc55d62f108b383e1c5",
        9857: "5516ad09985c0750310c",
        9869: "2cbc9d58f1c355ebe5dc",
        9914: "b8ac64de4bbd10692dd2",
        9945: "b1ddd10bd4dfde7b3d57",
      }[a]),
    (d.miniCssF = (a) =>
      "css/applications/help/" +
      { 976: "greenenvelope", 1574: "footer" }[a] +
      ".css?contenthash=" +
      { 976: "f73864f8a2d22563fedb", 1574: "0bc65425e48ffdf4d152" }[a]),
    (d.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (d.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (d.l = (a, e, n, c) => {
      if (o[a]) o[a].push(e);
      else {
        var t, r;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), s = 0;
            s < l.length;
            s++
          ) {
            var f = l[s];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == i + n
            ) {
              t = f;
              break;
            }
          }
        t ||
          ((r = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          d.nc && t.setAttribute("nonce", d.nc),
          t.setAttribute("data-webpack", i + n),
          (t.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (t.onerror = t.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              t.parentNode && t.parentNode.removeChild(t),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: t }),
            12e4,
          );
        (t.onerror = b.bind(null, t.onerror)),
          (t.onload = b.bind(null, t.onload)),
          r && document.head.appendChild(t);
      }
    }),
    (d.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (d.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (d.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var a = (a) =>
            new Promise((e, n) => {
              var o = d.miniCssF(a),
                i = d.p + o;
              if (
                ((a, e) => {
                  for (
                    var n = document.getElementsByTagName("link"), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var i =
                      (t = n[o]).getAttribute("data-href") ||
                      t.getAttribute("href");
                    if ("stylesheet" === t.rel && (i === a || i === e))
                      return t;
                  }
                  var c = document.getElementsByTagName("style");
                  for (o = 0; o < c.length; o++) {
                    var t;
                    if (
                      (i = (t = c[o]).getAttribute("data-href")) === a ||
                      i === e
                    )
                      return t;
                  }
                })(o, i)
              )
                return e();
              ((a, e, n, o, i) => {
                var c = document.createElement("link");
                (c.rel = "stylesheet"),
                  (c.type = "text/css"),
                  (c.onerror = c.onload =
                    (n) => {
                      if (((c.onerror = c.onload = null), "load" === n.type))
                        o();
                      else {
                        var t = n && n.type,
                          d = (n && n.target && n.target.href) || e,
                          r = new Error(
                            "Loading CSS chunk " +
                              a +
                              " failed.\n(" +
                              t +
                              ": " +
                              d +
                              ")",
                          );
                        (r.name = "ChunkLoadError"),
                          (r.code = "CSS_CHUNK_LOAD_FAILED"),
                          (r.type = t),
                          (r.request = d),
                          c.parentNode && c.parentNode.removeChild(c),
                          i(r);
                      }
                    }),
                  (c.href = e),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(a, i, null, e, n);
            }),
          e = { 4556: 0 };
        d.f.miniCss = (n, o) => {
          e[n]
            ? o.push(e[n])
            : 0 !== e[n] &&
              { 976: 1, 1574: 1 }[n] &&
              o.push(
                (e[n] = a(n).then(
                  () => {
                    e[n] = 0;
                  },
                  (a) => {
                    throw (delete e[n], a);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var a = { 4556: 0 };
      (d.f.j = (e, n) => {
        var o = d.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (4556 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var c = d.p + d.u(e),
              t = new Error();
            d.l(
              c,
              (n) => {
                if (d.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + c + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = i),
                    (t.request = c),
                    o[1](t);
                }
              },
              "chunk-" + e,
              e,
            );
          } else a[e] = 0;
      }),
        (d.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [c, t, r] = n,
            l = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (o in t) d.o(t, o) && (d.m[o] = t[o]);
            if (r) var s = r(d);
          }
          for (e && e(n); l < c.length; l++)
            (i = c[l]), d.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return d.O(s);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
