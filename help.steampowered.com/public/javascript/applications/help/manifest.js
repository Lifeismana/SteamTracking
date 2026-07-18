/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10823492";
(() => {
  "use strict";
  var e,
    a,
    n,
    o,
    i,
    c = {},
    t = {};
  function r(e) {
    var a = t[e];
    if (void 0 !== a) return a.exports;
    var n = (t[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports;
  }
  (r.m = c),
    (e = []),
    (r.O = (a, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [n, o, i] = e[s], t = !0, l = 0; l < n.length; l++)
            (!1 & i || c >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((t = !1), i < c && (c = i));
          if (t) {
            e.splice(s--, 1);
            var d = o();
            void 0 !== d && (a = d);
          }
        }
        return a;
      }
      i = i || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > i; s--) e[s] = e[s - 1];
      e[s] = [n, o, i];
    }),
    (r.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return r.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (r.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      r.r(i);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var t = 2 & o && e; "object" == typeof t && !~a.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), r.d(i, c), i;
    }),
    (r.d = (e, a) => {
      for (var n in a)
        r.o(a, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((a, n) => (r.f[n](e, a), a), []))),
    (r.u = (e) =>
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
      }[e] || e) +
      ".js?contenthash=" +
      {
        60: "8e908c5d1d442b400bae",
        129: "b6da42521051a8b56f79",
        139: "a279e150ce65c7b43568",
        198: "8d26ef97b04eb2067028",
        286: "f4a0f84d3e2c6e742926",
        412: "ca4d2bcac75b68a8a040",
        664: "68647f3a2c4a67203281",
        759: "fd3f408752f6b43583fe",
        823: "19d20257f8490f32d33f",
        831: "7cfa0c85d85517546354",
        833: "74d461c663a2417b9f90",
        976: "41469623441934500715",
        1389: "b0be6a16bfe0bbb39c35",
        1423: "fd24ae32f1e3ab594ce4",
        1574: "b307f8525f4354975bd1",
        1580: "2cb4b32d04ceb5da97ad",
        1602: "a3f65dbbdc30baf06531",
        1655: "1104137d6364ceb68b85",
        1721: "5008e5255d71369cbae4",
        1724: "907f946f5e3526752fe4",
        1924: "46a5d13fd06baddb7ca4",
        2021: "fb970894180a9d83cd31",
        2164: "cce240f89b536ce914a6",
        2173: "1f2d927fcde8cdf7ec46",
        2199: "ff360bc708dbc267c8b7",
        2446: "0c0e95abac2fae641c1b",
        2481: "382c0e4d4ad901adf3f1",
        2560: "1cbb2dab2df434b2faa3",
        2626: "5785a317ec77be86dac4",
        2664: "ac95f7cb7a9dfa7dba44",
        2811: "0d450242c1753c10c968",
        2936: "9209417d53bde5ceadb6",
        2959: "9db7f89771b3a2ebda30",
        3140: "874e18817db6e30f3153",
        3366: "dda071d9ed749e45ea9c",
        3589: "5c9aa244b1be38a26b7b",
        3594: "9b0a741fdf9e41c53115",
        3867: "e0036bcef9b844408cc9",
        4102: "b3073890634c618329c8",
        4468: "22ee3b05fcb61567131b",
        4516: "c7948709f4445d43c286",
        4694: "9db38d22eb4c7f08b862",
        4952: "658100b7613bb194638d",
        5052: "486c6cda36aa1c8f20da",
        5059: "0411b485c04a1a6c180e",
        5061: "ffe6f2c2c03e6f2e45cf",
        5103: "bc1748fd1346242bae2a",
        5388: "62a1d364159a002bbe59",
        5474: "ac91c926a2d2357667ec",
        5553: "ebaa5fac74e08beddff7",
        5666: "96fbdc81061db36cf03d",
        5803: "b846dab8f24c06254154",
        5964: "afcb4f08c4f70fa38531",
        6120: "8e60bdd60e4d95a2674c",
        6139: "26c27bf53f2a52227bc9",
        6428: "46273cfaf3078d623a20",
        6430: "2d9f9575cb4ff1962974",
        6472: "483ae0597b5667a03e74",
        6509: "403ea2dd355cdbba1bcf",
        6515: "1fd72199a9cd19a7e8e3",
        6577: "91ad9d4241108beecb14",
        6752: "41d263c153c668b63bdc",
        6888: "f2a5ad6a4404d72a93e1",
        7267: "844e678821427933fb77",
        7345: "daf74fa95928b6c9d2e0",
        7442: "41c7bb4ab79388cb8893",
        7553: "8392c46f0cab9c73f7c7",
        7696: "9f9f21d33dc69c7ab83a",
        7724: "909966216dde549f8a42",
        7767: "098373d8fea23849d95a",
        7925: "3b7b9dba7bfa58a605bc",
        8021: "b602d2b3e0e6a6455cca",
        8233: "decb3c39dc0fb746d742",
        8291: "f59599aff8c7a49f45a0",
        8443: "698a25c8a0961cd6eb35",
        8522: "1177ff369ab3bd22f581",
        8547: "c19eef1d7c52f88e5396",
        8674: "e5aef6486dc1d99be8f1",
        8724: "42203cb2c177614f4c68",
        8727: "c0f598cb109eeeeb6a2a",
        8749: "8a8997871100b719173d",
        8844: "99f961824f522350a40b",
        8872: "994052a77fd3404f619c",
        8973: "3c8f20afdcbb2b567cb5",
        9053: "1cffd2e60bacf98aebf3",
        9259: "05af198d8fac815c43f9",
        9298: "45db9166f31f555c923f",
        9387: "7ee204fa924ee95b1337",
        9453: "b944926146b7a40384c4",
        9468: "942c19be54037449fce7",
        9515: "3e86c94819e34aa71ffc",
        9605: "d10bde0eef19104710c6",
        9720: "a7c3ba82e106c10da36b",
        9783: "3bc55d62f108b383e1c5",
        9857: "5516ad09985c0750310c",
        9869: "9f1aa6b7506065374fbd",
        9914: "b8ac64de4bbd10692dd2",
        9945: "b1ddd10bd4dfde7b3d57",
      }[e]),
    (r.miniCssF = (e) =>
      "css/applications/help/" +
      { 976: "greenenvelope", 1574: "footer" }[e] +
      ".css?contenthash=" +
      { 976: "f73864f8a2d22563fedb", 1574: "db7ebabe088e5a77ff80" }[e]),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (o = {}),
    (i = "Help:"),
    (r.l = (e, a, n, c) => {
      if (o[e]) o[e].push(a);
      else {
        var t, l;
        if (void 0 !== n)
          for (
            var d = document.getElementsByTagName("script"), s = 0;
            s < d.length;
            s++
          ) {
            var f = d[s];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == i + n
            ) {
              t = f;
              break;
            }
          }
        t ||
          ((l = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          r.nc && t.setAttribute("nonce", r.nc),
          t.setAttribute("data-webpack", i + n),
          (t.src = e)),
          (o[e] = [a]);
        var b = (a, n) => {
            (t.onerror = t.onload = null), clearTimeout(h);
            var i = o[e];
            if (
              (delete o[e],
              t.parentNode && t.parentNode.removeChild(t),
              i && i.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: t }),
            12e4,
          );
        (t.onerror = b.bind(null, t.onerror)),
          (t.onload = b.bind(null, t.onload)),
          l && document.head.appendChild(t);
      }
    }),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (r.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var o = r.miniCssF(e),
                i = r.p + o;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var i =
                      (t = n[o]).getAttribute("data-href") ||
                      t.getAttribute("href");
                    if ("stylesheet" === t.rel && (i === e || i === a))
                      return t;
                  }
                  var c = document.getElementsByTagName("style");
                  for (o = 0; o < c.length; o++) {
                    var t;
                    if (
                      (i = (t = c[o]).getAttribute("data-href")) === e ||
                      i === a
                    )
                      return t;
                  }
                })(o, i)
              )
                return a();
              ((e, a, n, o, i) => {
                var c = document.createElement("link");
                (c.rel = "stylesheet"),
                  (c.type = "text/css"),
                  (c.onerror = c.onload =
                    (n) => {
                      if (((c.onerror = c.onload = null), "load" === n.type))
                        o();
                      else {
                        var t = n && n.type,
                          r = (n && n.target && n.target.href) || a,
                          l = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              t +
                              ": " +
                              r +
                              ")",
                          );
                        (l.name = "ChunkLoadError"),
                          (l.code = "CSS_CHUNK_LOAD_FAILED"),
                          (l.type = t),
                          (l.request = r),
                          c.parentNode && c.parentNode.removeChild(c),
                          i(l);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, i, null, a, n);
            }),
          a = { 4556: 0 };
        r.f.miniCss = (n, o) => {
          a[n]
            ? o.push(a[n])
            : 0 !== a[n] &&
              { 976: 1, 1574: 1 }[n] &&
              o.push(
                (a[n] = e(n).then(
                  () => {
                    a[n] = 0;
                  },
                  (e) => {
                    throw (delete a[n], e);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 4556: 0 };
      (r.f.j = (a, n) => {
        var o = r.o(e, a) ? e[a] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (4556 != a) {
            var i = new Promise((n, i) => (o = e[a] = [n, i]));
            n.push((o[2] = i));
            var c = r.p + r.u(a),
              t = new Error();
            r.l(
              c,
              (n) => {
                if (r.o(e, a) && (0 !== (o = e[a]) && (e[a] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + a + " failed.\n(" + i + ": " + c + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = i),
                    (t.request = c),
                    o[1](t);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (r.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var o,
            i,
            [c, t, l] = n,
            d = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (o in t) r.o(t, o) && (r.m[o] = t[o]);
            if (l) var s = l(r);
          }
          for (a && a(n); d < c.length; d++)
            (i = c[d]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return r.O(s);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
