/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10840549";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    c = {},
    t = {};
  function r(a) {
    var e = t[a];
    if (void 0 !== e) return e.exports;
    var n = (t[a] = { id: a, loaded: !1, exports: {} });
    return c[a].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports;
  }
  (r.m = c),
    (a = []),
    (r.O = (e, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (s = 0; s < a.length; s++) {
          for (var [n, o, i] = a[s], t = !0, d = 0; d < n.length; d++)
            (!1 & i || c >= i) && Object.keys(r.O).every((a) => r.O[a](n[d]))
              ? n.splice(d--, 1)
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
    (r.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return r.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (r.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      r.r(i);
      var c = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var t = 2 & o && a; "object" == typeof t && !~e.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((e) => (c[e] = () => a[e]));
      return (c.default = () => a), r.d(i, c), i;
    }),
    (r.d = (a, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (r.f = {}),
    (r.e = (a) =>
      Promise.all(Object.keys(r.f).reduce((e, n) => (r.f[n](a, e), e), []))),
    (r.u = (a) =>
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
        129: "c57c3cf606775c1826f3",
        139: "4f8ed21e195566a41c30",
        198: "8d26ef97b04eb2067028",
        286: "f4a0f84d3e2c6e742926",
        412: "ca4d2bcac75b68a8a040",
        664: "68647f3a2c4a67203281",
        759: "fd3f408752f6b43583fe",
        823: "46184b24dfab6b785d1a",
        831: "7cfa0c85d85517546354",
        833: "74d461c663a2417b9f90",
        976: "872f3d954996e3d62a5c",
        1389: "5635ecb4407783084de7",
        1423: "1c9f01b99f3a4e8b637d",
        1574: "4ea54a516fc0d4675ffa",
        1580: "2cb4b32d04ceb5da97ad",
        1602: "a3f65dbbdc30baf06531",
        1655: "1104137d6364ceb68b85",
        1721: "8b8994589b4174ebc95b",
        1724: "907f946f5e3526752fe4",
        1924: "46a5d13fd06baddb7ca4",
        2021: "4ed48c3e9a6aa6129727",
        2164: "cce240f89b536ce914a6",
        2173: "1f2d927fcde8cdf7ec46",
        2199: "8196b5be3e285b8fd4db",
        2446: "0c0e95abac2fae641c1b",
        2481: "bbade58ce167e3a749a5",
        2560: "1cbb2dab2df434b2faa3",
        2626: "5785a317ec77be86dac4",
        2664: "ef037d0dcd0d182e70d0",
        2811: "0d450242c1753c10c968",
        2936: "9209417d53bde5ceadb6",
        2959: "ab694561665915948022",
        3140: "874e18817db6e30f3153",
        3366: "dda071d9ed749e45ea9c",
        3589: "5c9aa244b1be38a26b7b",
        3594: "be07fbd741ec808cbc84",
        3867: "e0036bcef9b844408cc9",
        4102: "b3073890634c618329c8",
        4468: "22ee3b05fcb61567131b",
        4516: "970cbb59052e91c63409",
        4694: "9db38d22eb4c7f08b862",
        4952: "3e6221f11484b98a9604",
        5052: "486c6cda36aa1c8f20da",
        5059: "0411b485c04a1a6c180e",
        5061: "ffe6f2c2c03e6f2e45cf",
        5103: "bc1748fd1346242bae2a",
        5388: "62a1d364159a002bbe59",
        5474: "ac91c926a2d2357667ec",
        5553: "80f36d34de760d0e8ec4",
        5666: "96fbdc81061db36cf03d",
        5803: "a7d880b1d54b25fe94d9",
        5964: "afcb4f08c4f70fa38531",
        6120: "f92bcc9a3a512ae9649e",
        6139: "26c27bf53f2a52227bc9",
        6428: "46273cfaf3078d623a20",
        6430: "4091e8b12a066624546a",
        6472: "4ed19d5a58dc0423739e",
        6509: "403ea2dd355cdbba1bcf",
        6515: "1fd72199a9cd19a7e8e3",
        6577: "803cb8b215743ff0cb90",
        6752: "25e1df1cff0725796adb",
        6888: "db985e2bc869ebac48df",
        7267: "29bfa427c5c421ba672f",
        7345: "daf74fa95928b6c9d2e0",
        7442: "87b1a3a7891c4f84f713",
        7553: "8392c46f0cab9c73f7c7",
        7696: "ad8daecc8c56df2268b7",
        7724: "909966216dde549f8a42",
        7767: "03f6ac5505debe7383a4",
        7925: "3b7b9dba7bfa58a605bc",
        8021: "b602d2b3e0e6a6455cca",
        8233: "decb3c39dc0fb746d742",
        8291: "4b8ff077a3001da1acff",
        8443: "698a25c8a0961cd6eb35",
        8522: "86c94aad1c8f4631f260",
        8547: "c19eef1d7c52f88e5396",
        8674: "2a19c4e5302c9810ac98",
        8724: "42203cb2c177614f4c68",
        8727: "c0f598cb109eeeeb6a2a",
        8749: "8a8997871100b719173d",
        8844: "99f961824f522350a40b",
        8872: "77f3bb28cfc68141a25b",
        8973: "3c8f20afdcbb2b567cb5",
        9053: "083595f6863f912b61a0",
        9259: "05af198d8fac815c43f9",
        9298: "08944fb68056e17ebf70",
        9387: "7ee204fa924ee95b1337",
        9453: "b944926146b7a40384c4",
        9468: "942c19be54037449fce7",
        9515: "3e86c94819e34aa71ffc",
        9605: "d10bde0eef19104710c6",
        9720: "a7c3ba82e106c10da36b",
        9783: "3bc55d62f108b383e1c5",
        9857: "5516ad09985c0750310c",
        9869: "f859ebcdcf74b23f1f59",
        9914: "b8ac64de4bbd10692dd2",
        9945: "b1ddd10bd4dfde7b3d57",
      }[a]),
    (r.miniCssF = (a) =>
      "css/applications/help/" +
      { 976: "greenenvelope", 1574: "footer" }[a] +
      ".css?contenthash=" +
      { 976: "f73864f8a2d22563fedb", 1574: "db7ebabe088e5a77ff80" }[a]),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (r.l = (a, e, n, c) => {
      if (o[a]) o[a].push(e);
      else {
        var t, d;
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
          ((d = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          r.nc && t.setAttribute("nonce", r.nc),
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
          d && document.head.appendChild(t);
      }
    }),
    (r.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (r.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (r.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var a = (a) =>
            new Promise((e, n) => {
              var o = r.miniCssF(a),
                i = r.p + o;
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
                          r = (n && n.target && n.target.href) || e,
                          d = new Error(
                            "Loading CSS chunk " +
                              a +
                              " failed.\n(" +
                              t +
                              ": " +
                              r +
                              ")",
                          );
                        (d.name = "ChunkLoadError"),
                          (d.code = "CSS_CHUNK_LOAD_FAILED"),
                          (d.type = t),
                          (d.request = r),
                          c.parentNode && c.parentNode.removeChild(c),
                          i(d);
                      }
                    }),
                  (c.href = e),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(a, i, null, e, n);
            }),
          e = { 4556: 0 };
        r.f.miniCss = (n, o) => {
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
      (r.f.j = (e, n) => {
        var o = r.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (4556 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var c = r.p + r.u(e),
              t = new Error();
            r.l(
              c,
              (n) => {
                if (r.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
        (r.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [c, t, d] = n,
            l = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (o in t) r.o(t, o) && (r.m[o] = t[o]);
            if (d) var s = d(r);
          }
          for (e && e(n); l < c.length; l++)
            (i = c[l]), r.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return r.O(s);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
