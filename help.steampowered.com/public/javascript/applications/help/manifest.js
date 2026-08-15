/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10901822";
(() => {
  "use strict";
  var e,
    a,
    n,
    c,
    o,
    t = {},
    i = {};
  function d(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, d), (n.loaded = !0), n.exports;
  }
  (d.m = t),
    (e = []),
    (d.O = (a, n, c, o) => {
      if (!n) {
        var t = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, c, o] = e[l], i = !0, f = 0; f < n.length; f++)
            (!1 & o || t >= o) && Object.keys(d.O).every((e) => d.O[e](n[f]))
              ? n.splice(f--, 1)
              : ((i = !1), o < t && (t = o));
          if (i) {
            e.splice(l--, 1);
            var r = c();
            void 0 !== r && (a = r);
          }
        }
        return a;
      }
      o = o || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
      e[l] = [n, c, o];
    }),
    (d.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return d.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (d.t = function (e, c) {
      if ((1 & c && (e = this(e)), 8 & c)) return e;
      if ("object" == typeof e && e) {
        if (4 & c && e.__esModule) return e;
        if (16 & c && "function" == typeof e.then) return e;
      }
      var o = Object.create(null);
      d.r(o);
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var i = 2 & c && e; "object" == typeof i && !~a.indexOf(i); i = n(i))
        Object.getOwnPropertyNames(i).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), d.d(o, t), o;
    }),
    (d.d = (e, a) => {
      for (var n in a)
        d.o(a, n) &&
          !d.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (d.f = {}),
    (d.e = (e) =>
      Promise.all(Object.keys(d.f).reduce((a, n) => (d.f[n](e, a), a), []))),
    (d.u = (e) =>
      "javascript/applications/help/" +
      ({
        60: "localization/main_spanish-json",
        198: "localization/main_schinese-json",
        286: "localization/main_ukrainian-json",
        664: "localization/main_malay-json",
        759: "localization/main_koreana-json",
        831: "localization/main_danish-json",
        833: "localization/main_vietnamese-json",
        976: "greenenvelope",
        1574: "footer",
        1602: "localization/main_arabic-json",
        1724: "localization/main_turkish-json",
        2446: "localization/main_brazilian-json",
        3140: "localization/main_greek-json",
        3589: "localization/main_bulgarian-json",
        3867: "localization/main_polish-json",
        4102: "localization/main_indonesian-json",
        4694: "localization/main_french-json",
        5052: "localization/main_english-json",
        5103: "localization/main_sc_schinese-json",
        5388: "localization/main_norwegian-json",
        6428: "localization/main_italian-json",
        7345: "localization/main_hungarian-json",
        7553: "localization/main_romanian-json",
        7724: "localization/main_thai-json",
        7767: "libraries~d7eb6b340",
        8021: "localization/main_russian-json",
        8547: "localization/main_finnish-json",
        8724: "localization/main_german-json",
        8749: "localization/main_tchinese-json",
        9387: "localization/main_portuguese-json",
        9453: "localization/main_swedish-json",
        9515: "localization/main_czech-json",
        9783: "localization/main_latam-json",
        9857: "localization/main_japanese-json",
        9914: "localization/main_dutch-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        20: "78cb08057c5026cdf0e9",
        60: "8e908c5d1d442b400bae",
        198: "8d26ef97b04eb2067028",
        286: "f4a0f84d3e2c6e742926",
        361: "7f618b027e237b7e73be",
        412: "ca4d2bcac75b68a8a040",
        662: "41fa6624fc816cfce309",
        664: "68647f3a2c4a67203281",
        684: "95107bdadbca0c102000",
        759: "fd3f408752f6b43583fe",
        764: "5f2c07f709d9f2fb1979",
        831: "7cfa0c85d85517546354",
        833: "74d461c663a2417b9f90",
        976: "6088b59f277da71f453f",
        1031: "e31f3abc28ca1d304a26",
        1047: "d3f004e26b345207effe",
        1229: "ab9341710bf5e856af9b",
        1359: "2da7c43173341c0e8199",
        1574: "a78b67a9ef33d45b8a80",
        1580: "2cb4b32d04ceb5da97ad",
        1602: "a3f65dbbdc30baf06531",
        1655: "1104137d6364ceb68b85",
        1724: "907f946f5e3526752fe4",
        1924: "46a5d13fd06baddb7ca4",
        2164: "cce240f89b536ce914a6",
        2173: "1f2d927fcde8cdf7ec46",
        2330: "cc3e6b5aa8529c52f1f8",
        2378: "98e9bc3cf8a82137b31d",
        2446: "0c0e95abac2fae641c1b",
        2560: "1cbb2dab2df434b2faa3",
        2589: "f2c8d7b18bce7e771d9c",
        2626: "5785a317ec77be86dac4",
        2711: "d0ac4b577505f1630aa8",
        2736: "2d113377f606afad4e0e",
        2811: "0d450242c1753c10c968",
        2936: "9209417d53bde5ceadb6",
        3140: "874e18817db6e30f3153",
        3248: "b76aff75e6621437c5ae",
        3296: "437dfe139ea87796a502",
        3301: "8f7476370280c201b716",
        3366: "dda071d9ed749e45ea9c",
        3589: "5c9aa244b1be38a26b7b",
        3867: "e0036bcef9b844408cc9",
        4102: "b3073890634c618329c8",
        4122: "9dde12c6489fe12bba95",
        4175: "e209668efa3fb495602b",
        4401: "a394f8b7748a2e03e0b5",
        4468: "22ee3b05fcb61567131b",
        4694: "9db38d22eb4c7f08b862",
        5052: "486c6cda36aa1c8f20da",
        5059: "0411b485c04a1a6c180e",
        5103: "bc1748fd1346242bae2a",
        5319: "3e8eded85f714fec2360",
        5388: "62a1d364159a002bbe59",
        5474: "ac91c926a2d2357667ec",
        5666: "96fbdc81061db36cf03d",
        5964: "afcb4f08c4f70fa38531",
        6139: "26c27bf53f2a52227bc9",
        6428: "46273cfaf3078d623a20",
        6509: "403ea2dd355cdbba1bcf",
        6515: "1fd72199a9cd19a7e8e3",
        7046: "1247761159dc94e09992",
        7267: "29bfa427c5c421ba672f",
        7345: "daf74fa95928b6c9d2e0",
        7442: "85d4f835a16b59a23270",
        7553: "8392c46f0cab9c73f7c7",
        7688: "6e711652380aafe34741",
        7700: "e763a05e03405ec5da42",
        7724: "909966216dde549f8a42",
        7767: "03f6ac5505debe7383a4",
        7925: "3b7b9dba7bfa58a605bc",
        8010: "1cffb69652c616aa15a5",
        8021: "b602d2b3e0e6a6455cca",
        8233: "decb3c39dc0fb746d742",
        8356: "b785f7d527ae20afc3f7",
        8515: "d900f2a34497f16cc9cd",
        8547: "c19eef1d7c52f88e5396",
        8724: "42203cb2c177614f4c68",
        8727: "c0f598cb109eeeeb6a2a",
        8749: "8a8997871100b719173d",
        8844: "99f961824f522350a40b",
        8973: "3c8f20afdcbb2b567cb5",
        9259: "05af198d8fac815c43f9",
        9333: "445a7a02e37df99daf50",
        9387: "7ee204fa924ee95b1337",
        9431: "c34945a370600b06e202",
        9453: "b944926146b7a40384c4",
        9468: "942c19be54037449fce7",
        9515: "3e86c94819e34aa71ffc",
        9605: "d10bde0eef19104710c6",
        9720: "a7c3ba82e106c10da36b",
        9783: "3bc55d62f108b383e1c5",
        9854: "a02654de113e128ef58a",
        9857: "5516ad09985c0750310c",
        9914: "b8ac64de4bbd10692dd2",
        9945: "b1ddd10bd4dfde7b3d57",
        9965: "a271a2cda8d81b0f7776",
        9998: "9e0b9f4ca3e1b48e61bc",
      }[e]),
    (d.miniCssF = (e) =>
      "css/applications/help/" +
      { 976: "greenenvelope", 1574: "footer" }[e] +
      ".css?contenthash=" +
      { 976: "bb7de05dc237a18ee3a9", 1574: "7aaae870d58e8313676e" }[e]),
    (d.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (d.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (c = {}),
    (o = "Help:"),
    (d.l = (e, a, n, t) => {
      if (c[e]) c[e].push(a);
      else {
        var i, f;
        if (void 0 !== n)
          for (
            var r = document.getElementsByTagName("script"), l = 0;
            l < r.length;
            l++
          ) {
            var b = r[l];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == o + n
            ) {
              i = b;
              break;
            }
          }
        i ||
          ((f = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          d.nc && i.setAttribute("nonce", d.nc),
          i.setAttribute("data-webpack", o + n),
          (i.src = e)),
          (c[e] = [a]);
        var s = (a, n) => {
            (i.onerror = i.onload = null), clearTimeout(u);
            var o = c[e];
            if (
              (delete c[e],
              i.parentNode && i.parentNode.removeChild(i),
              o && o.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          u = setTimeout(
            s.bind(null, void 0, { type: "timeout", target: i }),
            12e4,
          );
        (i.onerror = s.bind(null, i.onerror)),
          (i.onload = s.bind(null, i.onload)),
          f && document.head.appendChild(i);
      }
    }),
    (d.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (d.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (d.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var c = d.miniCssF(e),
                o = d.p + c;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), c = 0;
                    c < n.length;
                    c++
                  ) {
                    var o =
                      (i = n[c]).getAttribute("data-href") ||
                      i.getAttribute("href");
                    if ("stylesheet" === i.rel && (o === e || o === a))
                      return i;
                  }
                  var t = document.getElementsByTagName("style");
                  for (c = 0; c < t.length; c++) {
                    var i;
                    if (
                      (o = (i = t[c]).getAttribute("data-href")) === e ||
                      o === a
                    )
                      return i;
                  }
                })(c, o)
              )
                return a();
              ((e, a, n, c, o) => {
                var t = document.createElement("link");
                (t.rel = "stylesheet"),
                  (t.type = "text/css"),
                  (t.onerror = t.onload =
                    (n) => {
                      if (((t.onerror = t.onload = null), "load" === n.type))
                        c();
                      else {
                        var i = n && n.type,
                          d = (n && n.target && n.target.href) || a,
                          f = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              i +
                              ": " +
                              d +
                              ")",
                          );
                        (f.name = "ChunkLoadError"),
                          (f.code = "CSS_CHUNK_LOAD_FAILED"),
                          (f.type = i),
                          (f.request = d),
                          t.parentNode && t.parentNode.removeChild(t),
                          o(f);
                      }
                    }),
                  (t.href = a),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(e, o, null, a, n);
            }),
          a = { 4556: 0 };
        d.f.miniCss = (n, c) => {
          a[n]
            ? c.push(a[n])
            : 0 !== a[n] &&
              { 976: 1, 1574: 1 }[n] &&
              c.push(
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
      (d.f.j = (a, n) => {
        var c = d.o(e, a) ? e[a] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (4556 != a) {
            var o = new Promise((n, o) => (c = e[a] = [n, o]));
            n.push((c[2] = o));
            var t = d.p + d.u(a),
              i = new Error();
            d.l(
              t,
              (n) => {
                if (d.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (i.message =
                    "Loading chunk " + a + " failed.\n(" + o + ": " + t + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = o),
                    (i.request = t),
                    c[1](i);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (d.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var c,
            o,
            [t, i, f] = n,
            r = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (c in i) d.o(i, c) && (d.m[c] = i[c]);
            if (f) var l = f(d);
          }
          for (a && a(n); r < t.length; r++)
            (o = t[r]), d.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return d.O(l);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
