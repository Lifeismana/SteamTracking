/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [22162],
  {
    65274: (e) => {
      e.exports = {
        Text: "f6hU22EA7Z8peFWZVBJU",
        Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
        "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
        "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
        "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
        "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
        "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
        "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
        "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
        "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
        "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
        TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
        TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
        LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
        WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
      };
    },
    50122: (e) => {
      e.exports = {
        TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
        TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
        Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
        "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
        "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
        "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
        "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
      };
    },
    20187: (e, s, a) => {
      "use strict";
      a.d(s, { Ae: () => S, EY: () => l, U6: () => T });
      var c = a(7850),
        r = a(55348),
        n = a(11526),
        t = a(75659),
        u = a(64238),
        o = a.n(u),
        i = a(65274);
      function l(e) {
        const { as: s = "span", ref: a, className: r, ...t } = e,
          u = s;
        return (0, c.jsx)(u, {
          ref: a,
          ...(0, n.mz)({ ...t, className: o()(i.Text, r) }, S),
        });
      }
      const T = [
          {
            prop: "weight",
            responsive: !0,
            className: i.TextWeight,
            cssProperty: (e) => ["--text-weight", `var(--font-weight-${e})`],
          },
          {
            prop: "align",
            responsive: !0,
            className: i.TextAlign,
            cssProperty: "--text-align",
          },
          {
            prop: "color",
            responsive: !0,
            cssProperty: (e, s, a) => {
              var c;
              return [
                "--text-color",
                (0, n.To)(
                  e,
                  null !== (c = (0, r.I)(s.contrast, a)) && void 0 !== c
                    ? c
                    : "body",
                ),
              ];
            },
          },
          {
            prop: "contrast",
            responsive: !0,
            cssProperty: (e, s, a) => {
              var c;
              return [
                "--text-color",
                (0, n.To)(
                  null !== (c = (0, r.I)(s.color, a)) && void 0 !== c
                    ? c
                    : "text-body",
                  e,
                ),
              ];
            },
          },
          { prop: "truncate", className: i.Truncate },
          {
            prop: "lineClamp",
            responsive: !0,
            className: i.LineClamp,
            cssProperty: "--line-clamp",
          },
          {
            prop: "whiteSpace",
            className: i.WhiteSpace,
            cssProperty: "--white-space",
          },
        ],
        S = [
          ...T,
          ...t.L,
          {
            prop: "size",
            responsive: !0,
            className: (e) => i[`TextSize-${e}`],
          },
        ];
    },
    28491: (e, s, a) => {
      "use strict";
      a.d(s, { W: () => S, Y: () => l });
      var c = a(7850),
        r = a(50122),
        n = a(20187),
        t = a(11526),
        u = a(45699),
        o = a(39479),
        i = a(78327);
      function l(e) {
        var s;
        const { underline: a = "auto", focusable: n, navProps: o, ...l } = e,
          S = (0, i.Qn)(),
          p =
            null !== (s = null != n ? n : null == o ? void 0 : o.focusable) &&
            void 0 !== s
              ? s
              : !!l.href,
          M = (0, t.mz)({ ...l, underline: a, className: r.TextLink }, T);
        return S && (p || o)
          ? (0, c.jsx)(u.Ii, { ...M, ...(o || {}), focusable: p })
          : (0, c.jsx)("a", { ...M });
      }
      const T = [
        ...n.Ae,
        { prop: "underline", className: (e) => r[`Underline-${e}`] },
      ];
      function S(e) {
        var s;
        const { underline: a = "auto", focusable: n, navProps: u, ...l } = e,
          S = (0, i.Qn)(),
          p =
            null !== (s = null != n ? n : null == u ? void 0 : u.focusable) &&
            void 0 !== s
              ? s
              : !!l.onClick,
          M = (0, c.jsx)("span", {
            role: "button",
            ...(0, t.mz)(
              { ...l, underline: a, className: r.TextLinkButton },
              T,
            ),
          });
        return S && (p || u)
          ? (0, c.jsx)(o.J, { ...(u || {}), focusable: p, children: M })
          : M;
      }
    },
    72255: (e, s, a) => {
      "use strict";
      a.d(s, { rt: () => r });
      var c = a(88267);
      function r(e) {
        switch (null == e ? void 0 : e.toUpperCase()) {
          case "AE":
            return c.Cv;
          case "AU":
            return c.m1;
          case "BR":
            return c.iU;
          case "CA":
            return c.cX;
          case "CH":
          case "LI":
            return c.ln;
          case "CL":
            return c.D5;
          case "CN":
          case "XC":
            return c.C6;
          case "CO":
            return c.G1;
          case "CR":
            return c.uZ;
          case "AD":
          case "AL":
          case "AT":
          case "AX":
          case "BA":
          case "BE":
          case "BG":
          case "CY":
          case "CZ":
          case "DE":
          case "DK":
          case "EE":
          case "ES":
          case "FI":
          case "FO":
          case "FR":
          case "GF":
          case "GI":
          case "GP":
          case "GR":
          case "HR":
          case "HU":
          case "IE":
          case "IT":
          case "LT":
          case "LU":
          case "LV":
          case "MC":
          case "ME":
          case "MK":
          case "MQ":
          case "MT":
          case "NC":
          case "NL":
          case "PF":
          case "PT":
          case "RE":
          case "RO":
          case "RS":
          case "SE":
          case "SI":
          case "SJ":
          case "SK":
          case "SM":
          case "VA":
            return c.a4;
          case "GB":
          case "GG":
          case "GS":
          case "IM":
          case "JE":
            return c.dz;
          case "HK":
            return c.bO;
          case "ID":
            return c.DP;
          case "IL":
            return c.G7;
          case "IN":
            return c.T_;
          case "JP":
            return c.xm;
          case "KR":
            return c.yR;
          case "KW":
            return c.Gx;
          case "KZ":
            return c.X0;
          case "MX":
            return c.ds;
          case "MY":
            return c.Jw;
          case "NO":
            return c.KE;
          case "NZ":
            return c.WS;
          case "PE":
            return c.D4;
          case "PH":
            return c.En;
          case "PL":
            return c.sY;
          case "QA":
            return c.w7;
          case "RU":
            return c.Fq;
          case "SA":
            return c.CR;
          case "SG":
            return c.wA;
          case "TH":
            return c.cm;
          case "TW":
            return c.Jb;
          case "UA":
            return c.SJ;
          case "AF":
          case "AG":
          case "AI":
          case "AM":
          case "AN":
          case "AO":
          case "AQ":
          case "AR":
          case "AS":
          case "AW":
          case "AZ":
          case "BB":
          case "BD":
          case "BF":
          case "BH":
          case "BI":
          case "BJ":
          case "BM":
          case "BN":
          case "BO":
          case "BS":
          case "BT":
          case "BV":
          case "BW":
          case "BY":
          case "BZ":
          case "CC":
          case "CD":
          case "CF":
          case "CG":
          case "CI":
          case "CK":
          case "CM":
          case "CV":
          case "CX":
          case "DJ":
          case "DM":
          case "DO":
          case "DZ":
          case "EC":
          case "EG":
          case "EH":
          case "ER":
          case "ET":
          case "FJ":
          case "FK":
          case "FM":
          case "GA":
          case "GD":
          case "GE":
          case "GH":
          case "GL":
          case "GM":
          case "GN":
          case "GQ":
          case "GT":
          case "GU":
          case "GW":
          case "GY":
          case "HM":
          case "HN":
          case "HT":
          case "IO":
          case "IQ":
          case "IS":
          case "JM":
          case "JO":
          case "KE":
          case "KG":
          case "KH":
          case "KI":
          case "KM":
          case "KN":
          case "KY":
          case "LA":
          case "LB":
          case "LC":
          case "LK":
          case "LR":
          case "LS":
          case "LY":
          case "MA":
          case "MD":
          case "MG":
          case "MH":
          case "ML":
          case "MM":
          case "MN":
          case "MO":
          case "MP":
          case "MR":
          case "MS":
          case "MU":
          case "MV":
          case "MW":
          case "MZ":
          case "NA":
          case "NE":
          case "NF":
          case "NG":
          case "NI":
          case "NP":
          case "NR":
          case "NU":
          case "OM":
          case "PA":
          case "PG":
          case "PK":
          case "PM":
          case "PN":
          case "PR":
          case "PS":
          case "PW":
          case "PY":
          case "RW":
          case "SB":
          case "SC":
          case "SD":
          case "SH":
          case "SL":
          case "SN":
          case "SO":
          case "SR":
          case "ST":
          case "SV":
          case "SY":
          case "SZ":
          case "TC":
          case "TD":
          case "TF":
          case "TG":
          case "TJ":
          case "TK":
          case "TL":
          case "TM":
          case "TN":
          case "TO":
          case "TR":
          case "TT":
          case "TV":
          case "TZ":
          case "UG":
          case "UM":
          case "US":
          case "UZ":
          case "VC":
          case "VE":
          case "VG":
          case "VI":
          case "VU":
          case "WF":
          case "WS":
          case "YE":
          case "YT":
          case "ZM":
          case "ZW":
            return c.CS;
          case "UY":
            return c.lK;
          case "VN":
            return c.aQ;
          case "ZA":
            return c.de;
          default:
            return console.assert(!1, `Unhandled country code: ${e}`), c.CS;
        }
      }
    },
    88267: (e, s, a) => {
      "use strict";
      a.d(s, {
        Bz: () => k,
        C6: () => P,
        CR: () => O,
        CS: () => r,
        Cv: () => Z,
        D4: () => B,
        D5: () => L,
        DP: () => p,
        En: () => C,
        Fq: () => o,
        G1: () => z,
        G7: () => f,
        Gx: () => w,
        HQ: () => g,
        JW: () => H,
        Jb: () => D,
        Jw: () => M,
        KE: () => S,
        OD: () => V,
        S1: () => X,
        SJ: () => x,
        T_: () => v,
        WS: () => _,
        X0: () => F,
        a4: () => t,
        aQ: () => U,
        aU: () => W,
        bO: () => K,
        bj: () => d,
        cX: () => R,
        cm: () => G,
        de: () => I,
        ds: () => m,
        dz: () => n,
        iU: () => l,
        jT: () => h,
        lK: () => y,
        ln: () => u,
        m1: () => E,
        mh: () => Q,
        rg: () => c,
        sY: () => i,
        tn: () => j,
        uZ: () => Y,
        w7: () => J,
        wA: () => A,
        xm: () => T,
        xt: () => b,
        yR: () => N,
      });
      const c = 0,
        r = 1,
        n = 2,
        t = 3,
        u = 4,
        o = 5,
        i = 6,
        l = 7,
        T = 8,
        S = 9,
        p = 10,
        M = 11,
        C = 12,
        A = 13,
        G = 14,
        U = 15,
        N = 16,
        d = 17,
        x = 18,
        m = 19,
        R = 20,
        E = 21,
        _ = 22,
        P = 23,
        v = 24,
        L = 25,
        B = 26,
        z = 27,
        I = 28,
        K = 29,
        D = 30,
        O = 31,
        Z = 32,
        H = 33,
        W = 34,
        f = 35,
        h = 36,
        F = 37,
        w = 38,
        J = 39,
        Y = 40,
        y = 41,
        b = 42,
        k = 43,
        V = 44,
        X = 45,
        g = 46,
        j = 47,
        Q = 48;
    },
    69345: (e, s, a) => {
      "use strict";
      a.d(s, { n: () => n });
      a(7850);
      var c = a(60014),
        r = a(66418);
      function n(e, s, a) {
        return (0, c.aL)(
          e ? `${r.TS.STORE_BASE_URL}${e.store_url_path}` : void 0,
          s,
          a,
        );
      }
    },
  },
]);
