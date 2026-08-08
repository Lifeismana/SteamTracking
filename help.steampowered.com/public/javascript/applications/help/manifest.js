/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10882374";
(() => {
  "use strict";
  var e,
    a,
    n,
    c,
    o,
    t = {},
    i = {};
  function f(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = t),
    (e = []),
    (f.O = (a, n, c, o) => {
      if (!n) {
        var t = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, c, o] = e[b], i = !0, d = 0; d < n.length; d++)
            (!1 & o || t >= o) && Object.keys(f.O).every((e) => f.O[e](n[d]))
              ? n.splice(d--, 1)
              : ((i = !1), o < t && (t = o));
          if (i) {
            e.splice(b--, 1);
            var r = c();
            void 0 !== r && (a = r);
          }
        }
        return a;
      }
      o = o || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > o; b--) e[b] = e[b - 1];
      e[b] = [n, c, o];
    }),
    (f.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return f.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (f.t = function (e, c) {
      if ((1 & c && (e = this(e)), 8 & c)) return e;
      if ("object" == typeof e && e) {
        if (4 & c && e.__esModule) return e;
        if (16 & c && "function" == typeof e.then) return e;
      }
      var o = Object.create(null);
      f.r(o);
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var i = 2 & c && e; "object" == typeof i && !~a.indexOf(i); i = n(i))
        Object.getOwnPropertyNames(i).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), f.d(o, t), o;
    }),
    (f.d = (e, a) => {
      for (var n in a)
        f.o(a, n) &&
          !f.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (f.f = {}),
    (f.e = (e) =>
      Promise.all(Object.keys(f.f).reduce((a, n) => (f.f[n](e, a), a), []))),
    (f.u = (e) =>
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
        361: "6b62b4aef3caa92a3acf",
        412: "ca4d2bcac75b68a8a040",
        662: "48536c948db0603cb26d",
        664: "68647f3a2c4a67203281",
        684: "10efafa19a9468278155",
        759: "fd3f408752f6b43583fe",
        764: "30adda1d45bfd9ae4b56",
        831: "7cfa0c85d85517546354",
        833: "74d461c663a2417b9f90",
        976: "e9de1c1cd3f927281653",
        1031: "7513723633a2426deb8f",
        1047: "8b71f676b39fea84a99e",
        1229: "4065d17115bda537f1a9",
        1359: "8de8fa4ac6b7e349ea6f",
        1574: "22d0710c6062ba0c6c0c",
        1580: "2cb4b32d04ceb5da97ad",
        1602: "a3f65dbbdc30baf06531",
        1655: "1104137d6364ceb68b85",
        1724: "907f946f5e3526752fe4",
        1924: "46a5d13fd06baddb7ca4",
        2164: "cce240f89b536ce914a6",
        2173: "1f2d927fcde8cdf7ec46",
        2330: "4a82c3f6d33a10202b27",
        2378: "01c90b3e805bb838ed54",
        2446: "0c0e95abac2fae641c1b",
        2560: "1cbb2dab2df434b2faa3",
        2589: "ba6f42f2ebe016666b5d",
        2626: "5785a317ec77be86dac4",
        2711: "66060e08bef2b16983a1",
        2736: "db234978f1ba6c5465b1",
        2811: "0d450242c1753c10c968",
        2936: "9209417d53bde5ceadb6",
        3140: "874e18817db6e30f3153",
        3248: "e8e48234e92767c7e87c",
        3296: "9a268474af345b8f1ad0",
        3301: "171b79629f243230d70f",
        3366: "dda071d9ed749e45ea9c",
        3589: "5c9aa244b1be38a26b7b",
        3867: "e0036bcef9b844408cc9",
        4102: "b3073890634c618329c8",
        4122: "445de4d5202465ca65a1",
        4175: "8f953f0eb96aa5021284",
        4401: "8952b8e45811864da845",
        4468: "22ee3b05fcb61567131b",
        4694: "9db38d22eb4c7f08b862",
        5052: "486c6cda36aa1c8f20da",
        5059: "0411b485c04a1a6c180e",
        5103: "bc1748fd1346242bae2a",
        5319: "23483e91b08b52f04cab",
        5388: "62a1d364159a002bbe59",
        5474: "ac91c926a2d2357667ec",
        5666: "96fbdc81061db36cf03d",
        5964: "afcb4f08c4f70fa38531",
        6139: "26c27bf53f2a52227bc9",
        6428: "46273cfaf3078d623a20",
        6509: "403ea2dd355cdbba1bcf",
        6515: "1fd72199a9cd19a7e8e3",
        7046: "7f4dc433b94025aeae61",
        7267: "29bfa427c5c421ba672f",
        7345: "daf74fa95928b6c9d2e0",
        7442: "85d4f835a16b59a23270",
        7553: "8392c46f0cab9c73f7c7",
        7688: "f9b2d61399277cbaeef3",
        7700: "51689af44910c3d7508f",
        7724: "909966216dde549f8a42",
        7767: "03f6ac5505debe7383a4",
        7925: "3b7b9dba7bfa58a605bc",
        8010: "b8126136f4dd4873fb8c",
        8021: "b602d2b3e0e6a6455cca",
        8233: "decb3c39dc0fb746d742",
        8356: "8d39e90b1c5d5d6a51ad",
        8515: "1cb1032a6962906aaba4",
        8547: "c19eef1d7c52f88e5396",
        8724: "42203cb2c177614f4c68",
        8727: "c0f598cb109eeeeb6a2a",
        8749: "8a8997871100b719173d",
        8844: "99f961824f522350a40b",
        8973: "3c8f20afdcbb2b567cb5",
        9259: "05af198d8fac815c43f9",
        9333: "e901125404524c3b9be9",
        9387: "7ee204fa924ee95b1337",
        9431: "86bb73d5987f2b4efc64",
        9453: "b944926146b7a40384c4",
        9468: "942c19be54037449fce7",
        9515: "3e86c94819e34aa71ffc",
        9605: "d10bde0eef19104710c6",
        9720: "a7c3ba82e106c10da36b",
        9783: "3bc55d62f108b383e1c5",
        9854: "8a8accf2a8aa9d48441a",
        9857: "5516ad09985c0750310c",
        9914: "b8ac64de4bbd10692dd2",
        9945: "b1ddd10bd4dfde7b3d57",
        9965: "e7d4b5964d85c26e72e7",
        9998: "fac00e965e9bed978bf8",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/help/" +
      { 976: "greenenvelope", 1574: "footer" }[e] +
      ".css?contenthash=" +
      { 976: "bb7de05dc237a18ee3a9", 1574: "7aaae870d58e8313676e" }[e]),
    (f.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (f.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (c = {}),
    (o = "Help:"),
    (f.l = (e, a, n, t) => {
      if (c[e]) c[e].push(a);
      else {
        var i, d;
        if (void 0 !== n)
          for (
            var r = document.getElementsByTagName("script"), b = 0;
            b < r.length;
            b++
          ) {
            var l = r[b];
            if (
              l.getAttribute("src") == e ||
              l.getAttribute("data-webpack") == o + n
            ) {
              i = l;
              break;
            }
          }
        i ||
          ((d = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          f.nc && i.setAttribute("nonce", f.nc),
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
          d && document.head.appendChild(i);
      }
    }),
    (f.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (f.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (f.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var c = f.miniCssF(e),
                o = f.p + c;
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
                          f = (n && n.target && n.target.href) || a,
                          d = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              i +
                              ": " +
                              f +
                              ")",
                          );
                        (d.name = "ChunkLoadError"),
                          (d.code = "CSS_CHUNK_LOAD_FAILED"),
                          (d.type = i),
                          (d.request = f),
                          t.parentNode && t.parentNode.removeChild(t),
                          o(d);
                      }
                    }),
                  (t.href = a),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(e, o, null, a, n);
            }),
          a = { 4556: 0 };
        f.f.miniCss = (n, c) => {
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
      (f.f.j = (a, n) => {
        var c = f.o(e, a) ? e[a] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (4556 != a) {
            var o = new Promise((n, o) => (c = e[a] = [n, o]));
            n.push((c[2] = o));
            var t = f.p + f.u(a),
              i = new Error();
            f.l(
              t,
              (n) => {
                if (f.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
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
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var c,
            o,
            [t, i, d] = n,
            r = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (c in i) f.o(i, c) && (f.m[c] = i[c]);
            if (d) var b = d(f);
          }
          for (a && a(n); r < t.length; r++)
            (o = t[r]), f.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return f.O(b);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
