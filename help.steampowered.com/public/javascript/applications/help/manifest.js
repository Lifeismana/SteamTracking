/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10620554";
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
          for (var [n, o, i] = e[s], t = !0, d = 0; d < n.length; d++)
            (!1 & i || c >= i) && Object.keys(r.O).every((e) => r.O[e](n[d]))
              ? n.splice(d--, 1)
              : ((t = !1), i < c && (c = i));
          if (t) {
            e.splice(s--, 1);
            var l = o();
            void 0 !== l && (a = l);
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
      }[e] || e) +
      ".js?contenthash=" +
      {
        60: "52d36db8a3eb8ce8bc5e",
        129: "bbbc4da9d739205371c3",
        139: "84fdf46dac2c2fd08a36",
        198: "83dbddd087af3cc381ea",
        286: "f528cf3967e461df2ca3",
        517: "3350063fa425d69c0344",
        759: "9cb42abad86b3dabb6c8",
        823: "60abafe7e5191655caec",
        831: "10dc211dfd129c6a445e",
        833: "f3f0b28b561cb224bdc4",
        864: "306f65d1028baa0316e3",
        976: "8026801390cf43088ad4",
        1389: "a297892d8c39ccafd88c",
        1423: "7b31d80701fab6e43c26",
        1574: "6af76ef534ba192b535d",
        1602: "c9e714b4f4196c855fac",
        1721: "348fe0706df6985f590f",
        1724: "edf9cc0e15f8d752612d",
        1990: "b1a89df4f6091f02eab4",
        2021: "db79193962b285955021",
        2199: "5b5c5fda8841569323a7",
        2446: "1e14cfdf0fc0983649b4",
        2481: "12f64c565f31e425649e",
        2664: "e3d24f193363163266f5",
        2683: "33ee9c0a2912927a9282",
        2933: "dfd07ef3da0a6bc831a2",
        2959: "bd12db8ccc7f17170ad1",
        3092: "d9b71bc591b1fd7974f3",
        3095: "a9e89487b086fa0f271d",
        3110: "e503ef0c413902bf3c37",
        3140: "5ff8d86b8d7df01c5d0b",
        3589: "2d4113d858d09aaabfcb",
        3594: "1ce6607c5a05309f53e7",
        3621: "3c298befc54202bf9ecd",
        3838: "795b684ce4a4d47ee628",
        3867: "5fdc84016800f0b3c40b",
        3910: "cd847597216a65f019bc",
        4102: "be3069fad7610e99339b",
        4631: "8281f24ebcc235863412",
        4694: "59882d00b140e10d48f6",
        4788: "aca47f5cba9650805ade",
        4847: "fe370e759644efd407d0",
        4952: "5edece282142cab8cf9d",
        5052: "9fb80ef333ae1a1994c6",
        5103: "562df98ec7b9d228b91b",
        5388: "710efa21ee07c9414d56",
        5553: "edd74a8e364b9fe1c27a",
        5803: "74fffe5c73ed5b044eed",
        6085: "9a57747e64a45821c82f",
        6120: "259796c86164ba9a1e25",
        6421: "b1aaedd44ea54dbadd62",
        6428: "6afb711ae8d4f17c01cd",
        6430: "f7d8e527c637f3a688c9",
        6472: "424a0c609420f69eddd1",
        6577: "bafaa58c98b0a6d4ea50",
        6740: "cb49ddd633adcf47ffff",
        6752: "12136f3ccad034d4eb01",
        6888: "e66b0afd92ba3c1cc362",
        6939: "85709377f972455c9aae",
        7098: "b216cfb8ff5623a11341",
        7247: "c3ee2e17b75fe9d86d65",
        7248: "07e4eaa4cb6b5d7dd8a2",
        7345: "99ee2c8fc99ede9a068c",
        7384: "1d057c4175b2fad95f71",
        7442: "91db7c5683bf3514762c",
        7524: "f9ca39247c32bdbce461",
        7553: "1428a4ee622040531f51",
        7696: "51c43490d45704abf40b",
        7724: "89f01c4ce3a9b216de12",
        7767: "efa2019e2654edab2202",
        7997: "ea292342f1607f5c17a6",
        8021: "a9f8dff17bd16871e4c5",
        8291: "aff52ea16aa4d52290c8",
        8443: "7b2dc0119a370b1f2d68",
        8522: "2831fc9ca07224590c81",
        8547: "03361207aad5f54dc1a7",
        8674: "71fabccc096d843f29dd",
        8724: "0b65723fc78210be4b29",
        8749: "3fc185a76a54a0d88045",
        8766: "463880efb3dc303e48b7",
        8787: "69c68897cc4ed3b7c3c7",
        8872: "d58feb717ecb4aa341b3",
        8928: "22c849584ed6977e7e3b",
        8953: "d8ce5ae46b29e44b342b",
        9053: "e79edc5f0a5ca066a8c7",
        9058: "96abd0f632f87cc053e8",
        9209: "7fbf7e7d3ac51256b9d4",
        9298: "e82d1e42d3e6405ff000",
        9387: "bc0a6b1e79938252231e",
        9453: "e7f2b091158c018a274a",
        9515: "f4d42e6a69b6661681a8",
        9783: "f4daed142667ba86fecc",
        9857: "cb15ede643a0292bc2ab",
        9869: "282e857350c40838ee2f",
        9914: "073440f813341702a1c0",
      }[e]),
    (r.miniCssF = (e) =>
      "css/applications/help/" +
      { 976: "greenenvelope", 1574: "footer" }[e] +
      ".css?contenthash=" +
      { 976: "f73864f8a2d22563fedb", 1574: "37b3530dd12d7c9b46fd" }[e]),
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
        var t, d;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), s = 0;
            s < l.length;
            s++
          ) {
            var f = l[s];
            if (
              f.getAttribute("src") == e ||
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
          d && document.head.appendChild(t);
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
                          d = new Error(
                            "Loading CSS chunk " +
                              e +
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
            [c, t, d] = n,
            l = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (o in t) r.o(t, o) && (r.m[o] = t[o]);
            if (d) var s = d(r);
          }
          for (a && a(n); l < c.length; l++)
            (i = c[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return r.O(s);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
