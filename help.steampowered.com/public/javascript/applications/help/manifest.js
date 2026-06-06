/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10711681";
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
        60: "2902fe0ccccc7a69dd2d",
        129: "e84ae24d070c57249699",
        139: "60441cb8cd1fbb18f835",
        198: "f301b0409aa982c5da90",
        286: "b8b4fb2f1dd3b8016236",
        517: "56fbc10f628e2eaf9997",
        664: "d39c933f1a345950825a",
        759: "ff5511785e6e121434f2",
        823: "2d209775376862d9bbb5",
        831: "01ec1a8277a2a63662a4",
        833: "16b811c8c6cc93fd1bc7",
        864: "306f65d1028baa0316e3",
        976: "7f51a620b968247953a2",
        1389: "39331e18d243aa53f2e5",
        1423: "b3a56ed7eede87581b67",
        1574: "02b3a2a49de662597c02",
        1602: "c9e714b4f4196c855fac",
        1721: "2b73a3648bda179e8c5b",
        1724: "09a5d3628eb6d561d45c",
        1990: "52c7df77cbf71d5753bd",
        2021: "3e685861ffb8bb6451b1",
        2199: "7be99b4dd073fec808ab",
        2446: "0748c10b00a73e42e0d6",
        2481: "96c00b90eaaf8ce9bf60",
        2664: "e747ac2bf11dd1f175ca",
        2683: "d12cc2d1204fedf49186",
        2933: "86f3b908d80e2deca2b8",
        2959: "018a827b8a4a2a49fdad",
        3092: "d9b71bc591b1fd7974f3",
        3095: "e855c3af5d3946b600ed",
        3110: "b01c05916aa693565fba",
        3140: "1d0a160ec66223656aff",
        3589: "2a9a85a5996d1c71a905",
        3594: "3ef6f035bae936e30d1e",
        3621: "87d947d492d256ff43e2",
        3838: "5d94a1e8005f0f5d78b0",
        3867: "2a5a9173892b40b835a7",
        3910: "30b5944ba11a643980ae",
        4102: "2d64dbdc862d35769533",
        4516: "9eb7f8e97b65736d68e5",
        4631: "8281f24ebcc235863412",
        4694: "dca2bf3e5e1db60facc5",
        4788: "88caf1de818e9f5df8c2",
        4847: "cd8176e71089dee73a1c",
        4952: "dafce2bc29cf6de42fef",
        5052: "4a2b54f2972c1be0098d",
        5103: "cca9fa929c0e3a7028e1",
        5388: "a2eef6559ae692c32e8b",
        5553: "887402d7071bff76f810",
        5803: "c3e08b0684ca0678512f",
        6085: "f21316094d318b63c5ef",
        6120: "e07fac654407f27d156d",
        6421: "e753b4cdc04793546ebc",
        6428: "2a4dafb6444e49918c47",
        6430: "d8a59f1b60a972d577ff",
        6472: "d66e6e40261c65e4e1f0",
        6577: "d32c39847a5d21425538",
        6740: "095f148cdb67ae3560fd",
        6752: "e3d1919fc5d2d9a355bb",
        6888: "e3003bc44d1735b6bce9",
        6939: "faf6bccfbc2d2551abcd",
        7098: "d78394bcbcb60c0ff7e9",
        7141: "2177d494262db9868414",
        7247: "bc7d16b0646eb907aafc",
        7248: "549194d8bc92f3296823",
        7345: "1459dd030358a0232b65",
        7384: "025e5a0823492a3202ef",
        7442: "6545b2700e6f080405dd",
        7524: "d60f1a3547db7ffd719f",
        7553: "b21cbaa69ecf4a4307f9",
        7696: "4e0606f8eff70c7cb8fb",
        7724: "f968ca9ef519a22ea215",
        7767: "daa2b016b01a0d753e29",
        7997: "978627faea3d9b61b687",
        8021: "f1b2e9dc12d372d304b7",
        8291: "686b7d2c497d1a775346",
        8443: "1900ea7e648550f67805",
        8522: "0c192125d685dfb9985f",
        8547: "f87e0a3fbf64ebf9b332",
        8674: "2e43ae92a395e88e80d5",
        8724: "ac4a6f29118e212c9723",
        8749: "987027fbae6de8975c09",
        8766: "3d484b1ed53d587df2d7",
        8787: "0374df4df287aeea9873",
        8872: "9ec349c4b56d1552e91f",
        8928: "40a8572d0e9f21ab8d24",
        8953: "b3ebb56af8fafcf25bec",
        9053: "e573a29a0f27e0579356",
        9058: "a5d7042a2034bccec964",
        9209: "f77db886ebf31a961ca1",
        9298: "16a05c829d1f210225fa",
        9387: "9c54bbdaae73c623721b",
        9453: "c7427accfdce83e04efd",
        9515: "4469f8726294899be477",
        9783: "ba747516c75804fff01d",
        9857: "581e0dbcf9bf79588e4a",
        9869: "4b77dce2e3ada39111b7",
        9914: "7d75de1f47dd2e688b8a",
      }[a]),
    (d.miniCssF = (a) =>
      "css/applications/help/" +
      { 976: "greenenvelope", 1574: "footer" }[a] +
      ".css?contenthash=" +
      { 976: "f73864f8a2d22563fedb", 1574: "0cbf3d74027ccee95d42" }[a]),
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
