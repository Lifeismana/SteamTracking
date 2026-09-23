/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "11025291";
(() => {
  "use strict";
  var e,
    a,
    n,
    o,
    c,
    t = {},
    i = {};
  function d(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { exports: {} });
    return t[e].call(n.exports, n, n.exports, d), n.exports;
  }
  (d.m = t),
    (e = []),
    (d.O = (a, n, o, c) => {
      if (!n) {
        var t = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, o, c] = e[b], i = !0, r = 0; r < n.length; r++)
            (!1 & c || t >= c) && Object.keys(d.O).every((e) => d.O[e](n[r]))
              ? n.splice(r--, 1)
              : ((i = !1), c < t && (t = c));
          if (i) {
            e.splice(b--, 1);
            var f = o();
            void 0 !== f && (a = f);
          }
        }
        return a;
      }
      c = c || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > c; b--) e[b] = e[b - 1];
      e[b] = [n, o, c];
    }),
    (d.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return d.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (d.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var c = Object.create(null);
      d.r(c);
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var i = 2 & o && e; "object" == typeof i && !~a.indexOf(i); i = n(i))
        Object.getOwnPropertyNames(i).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), d.d(c, t), c;
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
        20: "b3bcc36b76c4ea6a4839",
        60: "8e908c5d1d442b400bae",
        198: "33f81b748afcbde89a44",
        286: "dac1684aa7283a27e80f",
        361: "212d34971d92154bff68",
        412: "c3cf3f1438d29c11401c",
        662: "45966b03e2d6adbab996",
        664: "c1efd1bfb43b20ef84d7",
        684: "97a7173f2df6cb55b727",
        759: "48443ccd170d82524da8",
        764: "89c9b9dde30353921c98",
        831: "0d30dd3b0237394bfa0b",
        833: "484cec26466b8049d9ce",
        976: "4d044b35495335203371",
        1031: "2090d74e7ab178c024e8",
        1047: "8c8240d4646f9fc68fb3",
        1143: "7a565e66d7f3e614cd43",
        1229: "e9e5450a998ac9929b90",
        1359: "09b198a3447bb536e793",
        1574: "e116544aaebab5eae2e1",
        1580: "8d6854d8473506d286a9",
        1602: "2907b7e5f94528f6237a",
        1655: "e5c9da9555deb2d13d3c",
        1724: "6ebf4b627e0ea2a431c5",
        1924: "2e6e5c8b5f8ce5dff849",
        2164: "7f0485f39eb4a2050686",
        2173: "c2e7c4b42013924c28cb",
        2330: "513420a24533c6fdb617",
        2378: "6c0a4a48c1dfd8524453",
        2446: "4150a874c3fff26ca51d",
        2560: "1c264be3f9e002523812",
        2589: "c5ed46c556ce174c634d",
        2626: "06b22e1ee589c48aab3f",
        2711: "908362a616b5f37574d5",
        2736: "b7b6151ae7ede3fd4d5d",
        2811: "c0a8104e8bef4224b424",
        2936: "af7dd0bfdcad06ad2da0",
        3140: "874e18817db6e30f3153",
        3248: "6137202b0050b68b8676",
        3296: "2ee4e2d211b73d4b0d22",
        3301: "7ee27ab27d161e673fad",
        3366: "cc6131a7b7160b8d77b8",
        3589: "e5707d2d6bc0aff90558",
        3867: "e79703e3a068f910b274",
        4102: "d51b2a3453eb66e7c401",
        4122: "f127728d5f2daad4f487",
        4175: "9c2a522c6c6e49482a16",
        4401: "26f3cb673bb1313610f5",
        4468: "afe3ef90cbefb844b18c",
        4694: "6e8393d7072402b7b8e0",
        5052: "7a27b6813738525b8b94",
        5059: "d8fb3dd59a2af67dc3c1",
        5103: "adad8625b3d29f9ee9f5",
        5319: "a2113b0b65ae028f9c9e",
        5388: "46fb8bae2df785537278",
        5474: "617f15e3f3d9bac983ec",
        5666: "96fbdc81061db36cf03d",
        5964: "9334b9bf99d82156412b",
        6139: "84325a5eabc81da657f3",
        6428: "46273cfaf3078d623a20",
        6509: "50c9e53c91e28704ce0a",
        6515: "bdbe2d54558b62bb6ade",
        7046: "73888c555f2defcbb636",
        7267: "3b665d11947edc7a8a0e",
        7345: "46f5ef07cf0a491501b8",
        7442: "86db324190bb9fd4b340",
        7553: "a0219b8bb880fcaefd8c",
        7688: "fa99e68312005d40d00f",
        7700: "8f3ca36cf1a8fcf1d5a1",
        7724: "db4b9115e216e2855fd2",
        7767: "67e84b40d50a23bd8aef",
        7925: "ce552d2432e918dba5c9",
        8010: "290124cf69bbffbb26d8",
        8021: "f595559351c96eae0f0a",
        8233: "f6112ead72ba2521336f",
        8356: "108af8ee9ff8d708979b",
        8515: "078544bea07fd4d78c20",
        8547: "946bb909337d54d60854",
        8724: "1650095e9809081fd080",
        8727: "7fc4eef13b36ae97e1f7",
        8749: "b88a178c8d789977d374",
        8844: "0cfdba36801023ccdbf0",
        8973: "89b501d6b72347cc43d0",
        9259: "422c6b5c88735891f521",
        9333: "403cce4c77c14c5e1008",
        9387: "7ee204fa924ee95b1337",
        9431: "ce268dc05127a70f936f",
        9453: "b944926146b7a40384c4",
        9468: "f70e96e02aaaa8041111",
        9515: "3c9b5252d62d98402d1c",
        9605: "83cd93998ffad7cd2832",
        9720: "c568d7c48c4d3533d364",
        9783: "221bffdc5c7b8a1b43e3",
        9854: "ef6e1ef4662a3518906a",
        9857: "a3b712a0343419034e0b",
        9914: "39adc3cfc3c4c76e04fc",
        9945: "9c7227a9d181b3f8c390",
        9965: "a60d846cd7bf1862542d",
        9998: "38aa6c8ccc786566fd3e",
      }[e]),
    (d.miniCssF = (e) =>
      "css/applications/help/" +
      { 976: "greenenvelope", 1574: "footer" }[e] +
      ".css?contenthash=" +
      { 976: "bb7de05dc237a18ee3a9", 1574: "732f32a3d480c3c63de5" }[e]),
    (d.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (d.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (o = {}),
    (c = "Help:"),
    (d.l = (e, a, n, t) => {
      if (o[e]) o[e].push(a);
      else {
        var i, r;
        if (void 0 !== n)
          for (
            var f = document.getElementsByTagName("script"), b = 0;
            b < f.length;
            b++
          ) {
            var l = f[b];
            if (
              l.getAttribute("src") == e ||
              l.getAttribute("data-webpack") == c + n
            ) {
              i = l;
              break;
            }
          }
        i ||
          ((r = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          d.nc && i.setAttribute("nonce", d.nc),
          i.setAttribute("data-webpack", c + n),
          (i.src = e)),
          (o[e] = [a]);
        var s = (a, n) => {
            (i.onerror = i.onload = null), clearTimeout(u);
            var c = o[e];
            if (
              (delete o[e],
              i.parentNode && i.parentNode.removeChild(i),
              c && c.forEach((e) => e(n)),
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
          r && document.head.appendChild(i);
      }
    }),
    (d.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (d.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var o = d.miniCssF(e),
                c = d.p + o;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var c =
                      (i = n[o]).getAttribute("data-href") ||
                      i.getAttribute("href");
                    if ("stylesheet" === i.rel && (c === e || c === a))
                      return i;
                  }
                  var t = document.getElementsByTagName("style");
                  for (o = 0; o < t.length; o++) {
                    var i;
                    if (
                      (c = (i = t[o]).getAttribute("data-href")) === e ||
                      c === a
                    )
                      return i;
                  }
                })(o, c)
              )
                return a();
              ((e, a, n, o, c) => {
                var t = document.createElement("link");
                (t.rel = "stylesheet"),
                  (t.type = "text/css"),
                  (t.onerror = t.onload =
                    (n) => {
                      if (((t.onerror = t.onload = null), "load" === n.type))
                        o();
                      else {
                        var i = n && n.type,
                          d = (n && n.target && n.target.href) || a,
                          r = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              i +
                              ": " +
                              d +
                              ")",
                          );
                        (r.name = "ChunkLoadError"),
                          (r.code = "CSS_CHUNK_LOAD_FAILED"),
                          (r.type = i),
                          (r.request = d),
                          t.parentNode && t.parentNode.removeChild(t),
                          c(r);
                      }
                    }),
                  (t.href = a),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(e, c, null, a, n);
            }),
          a = { 4556: 0 };
        d.f.miniCss = (n, o) => {
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
      (d.f.j = (a, n) => {
        var o = d.o(e, a) ? e[a] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (4556 != a) {
            var c = new Promise((n, c) => (o = e[a] = [n, c]));
            n.push((o[2] = c));
            var t = d.p + d.u(a),
              i = new Error();
            d.l(
              t,
              (n) => {
                if (d.o(e, a) && (0 !== (o = e[a]) && (e[a] = void 0), o)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (i.message =
                    "Loading chunk " + a + " failed.\n(" + c + ": " + t + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = c),
                    (i.request = t),
                    o[1](i);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (d.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var o,
            c,
            [t, i, r] = n,
            f = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (o in i) d.o(i, o) && (d.m[o] = i[o]);
            if (r) var b = r(d);
          }
          for (a && a(n); f < t.length; f++)
            (c = t[f]), d.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return d.O(b);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
