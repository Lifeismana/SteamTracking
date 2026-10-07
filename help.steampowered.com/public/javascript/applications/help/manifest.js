/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  globalThis.CLSTAMP = "11093993";
  (() => {
    "use strict";
    var _ = {},
      h = {};
    function i(e) {
      var d = h[e];
      if (d !== void 0) return d.exports;
      var a = (h[e] = { exports: {} });
      return _[e].call(a.exports, a, a.exports, i), a.exports;
    }
    (i.m = _),
      (() => {
        var e = [];
        i.O = (d, a, c, o) => {
          if (a) {
            o = o || 0;
            for (var t = e.length; t > 0 && e[t - 1][2] > o; t--)
              e[t] = e[t - 1];
            e[t] = [a, c, o];
            return;
          }
          for (var n = 1 / 0, t = 0; t < e.length; t++) {
            for (var [a, c, o] = e[t], l = !0, r = 0; r < a.length; r++)
              (o & !1 || n >= o) && Object.keys(i.O).every((u) => i.O[u](a[r]))
                ? a.splice(r--, 1)
                : ((l = !1), o < n && (n = o));
            if (l) {
              e.splice(t--, 1);
              var f = c();
              f !== void 0 && (d = f);
            }
          }
          return d;
        };
      })(),
      (i.n = (e) => {
        var d = e && e.__esModule ? () => e.default : () => e;
        return i.d(d, { a: d }), d;
      }),
      (() => {
        var e = Object.getPrototypeOf
            ? (a) => Object.getPrototypeOf(a)
            : (a) => a.__proto__,
          d;
        i.t = function (a, c) {
          if (
            (c & 1 && (a = this(a)),
            c & 8 ||
              (typeof a == "object" &&
                a &&
                ((c & 4 && a.__esModule) ||
                  (c & 16 && typeof a.then == "function"))))
          )
            return a;
          var o = Object.create(null);
          i.r(o);
          var t = {};
          d = d || [null, e({}), e([]), e(e)];
          for (
            var n = c & 2 && a;
            typeof n == "object" && !~d.indexOf(n);
            n = e(n)
          )
            Object.getOwnPropertyNames(n).forEach((l) => (t[l] = () => a[l]));
          return (t.default = () => a), i.d(o, t), o;
        };
      })(),
      (i.d = (e, d) => {
        for (var a in d)
          i.o(d, a) &&
            !i.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: d[a] });
      }),
      (i.f = {}),
      (i.e = (e) =>
        Promise.all(Object.keys(i.f).reduce((d, a) => (i.f[a](e, d), d), []))),
      (i.u = (e) =>
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
          20: "a554a75e8a95dc1073cf",
          60: "dd496a706491c3113b8f",
          198: "0fc9c51e8223bcf47dc7",
          286: "7538e9f542b4ee21575b",
          361: "cf94d1fdda35706bb872",
          412: "efe666d6440c05552c32",
          662: "16ab0c1efc8df40ef3fa",
          664: "82cd60d162345fcc8080",
          684: "77ce98cc513ea45a0155",
          759: "c0f82aa7b78d2f887fd2",
          764: "cff69b4b35198c3e709a",
          831: "3e85db622eb1fc634d4a",
          833: "dd12eb244a78fd5b208d",
          976: "7310fc9dc0d346a79df9",
          1031: "d5fe81acedaa7f204033",
          1047: "483694fe26779a87b4b8",
          1143: "99852ba61683226041b6",
          1229: "ea863b85676eef82227d",
          1359: "36d998985052a2c5735b",
          1574: "6cb79e4266d07a66c241",
          1580: "412387197fe5e69ccaf6",
          1602: "e6eea6fee2fdbfae2309",
          1655: "6581a8933eed9a8db7b5",
          1724: "455bb793732c62a47313",
          1924: "b8b6d1c5c533faeebbae",
          2164: "20487e8ed38db39fdea5",
          2173: "a4dbee52e0e8a887ac85",
          2330: "ac4e21da0f3c1173ae84",
          2378: "3575dc1fe18e1036847f",
          2446: "45f84c24b2dd6c0a844a",
          2560: "8630e84fcb3e92e3ca0d",
          2589: "163967bf8d10bfe82d53",
          2626: "1788a2c39dcc140f745f",
          2711: "1b85626a086f478452cc",
          2736: "c6d37001323d48863702",
          2811: "5ab63133108e3887e2c3",
          2936: "0f819a9667a80b271dd6",
          3140: "9b132f5787d6bd2098ff",
          3248: "7d9e4e28a52e54afb732",
          3296: "e347fa63842e23d653fe",
          3301: "27fe3d7d8fe7945e659d",
          3366: "54b9db68b0886199294a",
          3589: "a47cb6b859e9d5b94d69",
          3867: "81527d65913a67959db4",
          4102: "dad9b2f219fb9c8ae210",
          4122: "41e25e3b35e39c366141",
          4175: "4d32d1eb9079d5332ca0",
          4401: "c57d7e3f3a4e62ef3544",
          4468: "3294493e44a67f27d556",
          4694: "8f67bc28d01fa263ba13",
          5052: "f03f95f08f2a26964b6e",
          5059: "2b1e3c10675a099e05b1",
          5103: "633e12c04b2858c9731a",
          5319: "934b5eecf07aa9e2656e",
          5388: "651764f6dae323277a7d",
          5474: "a30e83235a9bac5e42f7",
          5666: "99072b54280fd7bd51a3",
          5964: "cd47407bf5b081bba4a9",
          6139: "806cfea7097f52f40bdd",
          6428: "0c4cff7e03d05e6aac36",
          6509: "81e19738b5f38b91c755",
          6515: "630bab8a44740a1fb1d7",
          7046: "44c3fc0c26c76842c18d",
          7267: "02ccbd25e4c3b4d9cc83",
          7345: "f9aa80baec2024e59476",
          7442: "67eba33a9c1e51a7719a",
          7553: "0703274ae03a7f6febae",
          7688: "58124d4e14f57e377cdd",
          7700: "4852313788b9bfa5475d",
          7724: "bbbfb80562c0cb9566d4",
          7925: "d75682db9e6115287251",
          8010: "9e20273ff4699ac07f9e",
          8021: "3c4f4573ea0be37a6d69",
          8233: "29e4c281bb27460455b4",
          8356: "a070f8943e8191b01367",
          8515: "c16734fe4f1c0be66bc8",
          8547: "4e9d5dd2f50f38beef85",
          8724: "50b892f6a7139c72c58a",
          8727: "a4f9ff8c88b0f0901df9",
          8749: "f2312a7206a09a65da9c",
          8844: "20f4567eecb949b62468",
          8973: "a01fb0de85aa135ad2c0",
          9259: "3d5eef82b9c988f2441f",
          9333: "2b5f0385e9a3a05e2449",
          9387: "4316205b785a90285745",
          9431: "2544f327a7ff1c0fef0c",
          9453: "906270e7fcd1a0ab4c9c",
          9468: "e32729bc5db20f53a428",
          9515: "7ebce2ce84a63df8d749",
          9605: "858776876f7046f8c3fc",
          9720: "28660cfc8dadb4b53094",
          9783: "36beac8a4a5b76394291",
          9854: "6429c4563db74d86e88a",
          9857: "0037155a8d60c713f0e7",
          9914: "143ddc17f64959c5da47",
          9945: "690327418bc0638f2930",
          9965: "818c4b1c2251c69ebd0b",
          9998: "fc1bb5d711df7f2b2416",
        }[e]),
      (i.miniCssF = (e) =>
        "css/applications/help/" +
        { 976: "greenenvelope", 1574: "footer" }[e] +
        ".css?contenthash=" +
        { 976: "bb7de05dc237a18ee3a9", 1574: "436ae22804e8e02fe8f1" }[e]),
      (i.g = (function () {
        if (typeof globalThis == "object") return globalThis;
        try {
          return this || new Function("return this")();
        } catch {
          if (typeof window == "object") return window;
        }
      })()),
      (i.o = (e, d) => Object.prototype.hasOwnProperty.call(e, d)),
      (() => {
        var e = {},
          d = "Help:";
        i.l = (a, c, o, t) => {
          if (e[a]) {
            e[a].push(c);
            return;
          }
          var n, l;
          if (o !== void 0)
            for (
              var r = document.getElementsByTagName("script"), f = 0;
              f < r.length;
              f++
            ) {
              var b = r[f];
              if (
                b.getAttribute("src") == a ||
                b.getAttribute("data-webpack") == d + o
              ) {
                n = b;
                break;
              }
            }
          n ||
            ((l = !0),
            (n = document.createElement("script")),
            (n.charset = "utf-8"),
            (n.timeout = 120),
            i.nc && n.setAttribute("nonce", i.nc),
            n.setAttribute("data-webpack", d + o),
            (n.src = a)),
            (e[a] = [c]);
          var s = (p, u) => {
              (n.onerror = n.onload = null), clearTimeout(m);
              var g = e[a];
              if (
                (delete e[a],
                n.parentNode && n.parentNode.removeChild(n),
                g && g.forEach((j) => j(u)),
                p)
              )
                return p(u);
            },
            m = setTimeout(
              s.bind(null, void 0, { type: "timeout", target: n }),
              12e4,
            );
          (n.onerror = s.bind(null, n.onerror)),
            (n.onload = s.bind(null, n.onload)),
            l && document.head.appendChild(n);
        };
      })(),
      (i.r = (e) => {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.p = ""),
      (() => {
        if (!(typeof document > "u")) {
          var e = (o, t, n, l, r) => {
              var f = document.createElement("link");
              (f.rel = "stylesheet"), (f.type = "text/css");
              var b = (s) => {
                if (((f.onerror = f.onload = null), s.type === "load")) l();
                else {
                  var m = s && s.type,
                    p = (s && s.target && s.target.href) || t,
                    u = new Error(
                      "Loading CSS chunk " +
                        o +
                        ` failed.
(` +
                        m +
                        ": " +
                        p +
                        ")",
                    );
                  (u.name = "ChunkLoadError"),
                    (u.code = "CSS_CHUNK_LOAD_FAILED"),
                    (u.type = m),
                    (u.request = p),
                    f.parentNode && f.parentNode.removeChild(f),
                    r(u);
                }
              };
              return (
                (f.onerror = f.onload = b),
                (f.href = t),
                n
                  ? n.parentNode.insertBefore(f, n.nextSibling)
                  : document.head.appendChild(f),
                f
              );
            },
            d = (o, t) => {
              for (
                var n = document.getElementsByTagName("link"), l = 0;
                l < n.length;
                l++
              ) {
                var r = n[l],
                  f = r.getAttribute("data-href") || r.getAttribute("href");
                if (r.rel === "stylesheet" && (f === o || f === t)) return r;
              }
              for (
                var b = document.getElementsByTagName("style"), l = 0;
                l < b.length;
                l++
              ) {
                var r = b[l],
                  f = r.getAttribute("data-href");
                if (f === o || f === t) return r;
              }
            },
            a = (o) =>
              new Promise((t, n) => {
                var l = i.miniCssF(o),
                  r = i.p + l;
                if (d(l, r)) return t();
                e(o, r, null, t, n);
              }),
            c = { 4556: 0 };
          i.f.miniCss = (o, t) => {
            var n = { 976: 1, 1574: 1 };
            c[o]
              ? t.push(c[o])
              : c[o] !== 0 &&
                n[o] &&
                t.push(
                  (c[o] = a(o).then(
                    () => {
                      c[o] = 0;
                    },
                    (l) => {
                      throw (delete c[o], l);
                    },
                  )),
                );
          };
        }
      })(),
      (() => {
        var e = { 4556: 0 };
        (i.f.j = (c, o) => {
          var t = i.o(e, c) ? e[c] : void 0;
          if (t !== 0)
            if (t) o.push(t[2]);
            else if (c != 4556) {
              var n = new Promise((b, s) => (t = e[c] = [b, s]));
              o.push((t[2] = n));
              var l = i.p + i.u(c),
                r = new Error(),
                f = (b) => {
                  if (
                    i.o(e, c) &&
                    ((t = e[c]), t !== 0 && (e[c] = void 0), t)
                  ) {
                    var s = b && (b.type === "load" ? "missing" : b.type),
                      m = b && b.target && b.target.src;
                    (r.message =
                      "Loading chunk " +
                      c +
                      ` failed.
(` +
                      s +
                      ": " +
                      m +
                      ")"),
                      (r.name = "ChunkLoadError"),
                      (r.type = s),
                      (r.request = m),
                      t[1](r);
                  }
                };
              i.l(l, f, "chunk-" + c, c);
            } else e[c] = 0;
        }),
          (i.O.j = (c) => e[c] === 0);
        var d = (c, o) => {
            var [t, n, l] = o,
              r,
              f,
              b = 0;
            if (t.some((m) => e[m] !== 0)) {
              for (r in n) i.o(n, r) && (i.m[r] = n[r]);
              if (l) var s = l(i);
            }
            for (c && c(o); b < t.length; b++)
              (f = t[b]), i.o(e, f) && e[f] && e[f][0](), (e[f] = 0);
            return i.O(s);
          },
          a = (self.webpackChunkHelp = self.webpackChunkHelp || []);
        a.forEach(d.bind(null, 0)), (a.push = d.bind(null, a.push.bind(a)));
      })();
  })();
})();
