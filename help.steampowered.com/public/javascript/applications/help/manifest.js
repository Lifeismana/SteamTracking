/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10686194";
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
        60: "2902fe0ccccc7a69dd2d",
        129: "8c2d4e9f82a8bc6baed9",
        139: "03536c0c47f8b9f11742",
        198: "f301b0409aa982c5da90",
        286: "b8b4fb2f1dd3b8016236",
        517: "56fbc10f628e2eaf9997",
        759: "ff5511785e6e121434f2",
        823: "ffdfcc5453ff93f20b3b",
        831: "01ec1a8277a2a63662a4",
        833: "16b811c8c6cc93fd1bc7",
        864: "306f65d1028baa0316e3",
        976: "e1478c2ea6ac57558c3c",
        1389: "0f274f073d39fb912379",
        1423: "f6d35995eaf7e14d71a7",
        1574: "1b534474435a6e80328e",
        1602: "c9e714b4f4196c855fac",
        1721: "2f590efbe9057763cef1",
        1724: "09a5d3628eb6d561d45c",
        1990: "52c7df77cbf71d5753bd",
        2021: "4c55ec97de6f71703a3e",
        2199: "273649827c6f5443c5ff",
        2446: "0748c10b00a73e42e0d6",
        2481: "c7cf35c72ab83c8df50d",
        2664: "4212f42375e9f5b1a19a",
        2683: "d12cc2d1204fedf49186",
        2933: "86f3b908d80e2deca2b8",
        2959: "f8a80b066eaed4401702",
        3092: "d9b71bc591b1fd7974f3",
        3095: "e855c3af5d3946b600ed",
        3110: "b01c05916aa693565fba",
        3140: "1d0a160ec66223656aff",
        3589: "2a9a85a5996d1c71a905",
        3594: "467a3b5144c7364cafa9",
        3621: "87d947d492d256ff43e2",
        3838: "5d94a1e8005f0f5d78b0",
        3867: "2a5a9173892b40b835a7",
        3910: "30b5944ba11a643980ae",
        4102: "2d64dbdc862d35769533",
        4631: "8281f24ebcc235863412",
        4694: "dca2bf3e5e1db60facc5",
        4788: "88caf1de818e9f5df8c2",
        4847: "cd8176e71089dee73a1c",
        4952: "e06ab2d43e52e341760f",
        5052: "4a2b54f2972c1be0098d",
        5103: "cca9fa929c0e3a7028e1",
        5388: "a2eef6559ae692c32e8b",
        5553: "1c415869843cfb6bc361",
        5803: "355690cacfdd2c884a92",
        6085: "f21316094d318b63c5ef",
        6120: "3e7969afd82f951f9c16",
        6421: "e753b4cdc04793546ebc",
        6428: "2a4dafb6444e49918c47",
        6430: "f1d5d9ac70d7064538e3",
        6472: "f00731c8fb8127423af6",
        6577: "ffd2f81b75fb395f6b2c",
        6740: "095f148cdb67ae3560fd",
        6752: "5df6ca44f6bfa42c7482",
        6888: "fb0700510c805b3ce835",
        6939: "faf6bccfbc2d2551abcd",
        7098: "d78394bcbcb60c0ff7e9",
        7247: "bc7d16b0646eb907aafc",
        7248: "549194d8bc92f3296823",
        7345: "1459dd030358a0232b65",
        7384: "025e5a0823492a3202ef",
        7442: "5f709b15c17b65a88d0a",
        7524: "d60f1a3547db7ffd719f",
        7553: "b21cbaa69ecf4a4307f9",
        7696: "8d2c9c6e635705fbc260",
        7724: "f968ca9ef519a22ea215",
        7767: "daa2b016b01a0d753e29",
        7997: "978627faea3d9b61b687",
        8021: "f1b2e9dc12d372d304b7",
        8291: "6fd609edaf9807650ceb",
        8443: "dfe53f9ae3ea90f1596b",
        8522: "4afff06ac57bcedbe778",
        8547: "f87e0a3fbf64ebf9b332",
        8674: "fab649c96a1d2997199e",
        8724: "ac4a6f29118e212c9723",
        8749: "987027fbae6de8975c09",
        8766: "3d484b1ed53d587df2d7",
        8787: "0374df4df287aeea9873",
        8872: "ff55ecf78888641dcafb",
        8928: "40a8572d0e9f21ab8d24",
        8953: "b3ebb56af8fafcf25bec",
        9053: "a1866a0c0052eba13181",
        9058: "a5d7042a2034bccec964",
        9209: "f77db886ebf31a961ca1",
        9298: "c14d71180cda52a9283a",
        9387: "9c54bbdaae73c623721b",
        9453: "c7427accfdce83e04efd",
        9515: "4469f8726294899be477",
        9783: "ba747516c75804fff01d",
        9857: "581e0dbcf9bf79588e4a",
        9869: "594be25956823d695cf7",
        9914: "7d75de1f47dd2e688b8a",
      }[a]),
    (r.miniCssF = (a) =>
      "css/applications/help/" +
      { 976: "greenenvelope", 1574: "footer" }[a] +
      ".css?contenthash=" +
      { 976: "f73864f8a2d22563fedb", 1574: "0cbf3d74027ccee95d42" }[a]),
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
