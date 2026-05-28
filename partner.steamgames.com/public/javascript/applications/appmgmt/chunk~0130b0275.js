/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3556],
  {
    70484: (e, r, s) => {
      s.d(r, { J: () => n });
      var a = s(88267);
      const c = {
          [a.rg]: {},
          [a.CS]: { strSymbol: "$" },
          [a.dz]: { strSymbol: "£" },
          [a.a4]: {
            strSymbol: "€",
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [a.ln]: { strSymbol: "CHF" },
          [a.Fq]: {
            strSymbol: "руб.",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: "",
          },
          [a.sY]: {
            strSymbol: "zł",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [a.iU]: {
            strSymbol: "R$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [a.xm]: { strSymbol: "¥", bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
          [a.KE]: {
            strSymbol: "kr",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [a.DP]: {
            strSymbol: "Rp",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [a.Jw]: { strSymbol: "RM" },
          [a.En]: { strSymbol: "P" },
          [a.wA]: { strSymbol: "S$" },
          [a.cm]: { strSymbol: "฿" },
          [a.aQ]: {
            strSymbol: "₫",
            bWholeUnitsOnly: !0,
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [a.yR]: { strSymbol: "₩", bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
          [a.bj]: {
            strSymbol: "TL",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [a.SJ]: {
            strSymbol: "₴",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [a.ds]: { strSymbol: "Mex$", bSpaceForSymbol: !0 },
          [a.cX]: { strSymbol: "CDN$", bSpaceForSymbol: !0 },
          [a.m1]: { strSymbol: "A$", bSpaceForSymbol: !0 },
          [a.WS]: { strSymbol: "NZ$", bSpaceForSymbol: !0 },
          [a.C6]: { strSymbol: "¥", bSpaceForSymbol: !0 },
          [a.T_]: { strSymbol: "₹", bSpaceForSymbol: !0, bWholeUnitsOnly: !0 },
          [a.D5]: {
            strSymbol: "CLP$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [a.D4]: { strSymbol: "S/." },
          [a.G1]: {
            strSymbol: "COL$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [a.de]: {
            strSymbol: "R",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [a.bO]: { strSymbol: "HK$", bSpaceForSymbol: !0 },
          [a.Jb]: {
            strSymbol: "NT$",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [a.CR]: { strSymbol: "SR", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.Cv]: { strSymbol: "AED", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.JW]: { strSymbol: "kr", bSpaceForSymbol: !0, bSuffixSymbol: !0 },
          [a.aU]: {
            strSymbol: "ARS$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [a.G7]: { strSymbol: "₪" },
          [a.jT]: { strSymbol: "Br" },
          [a.X0]: {
            strSymbol: "₸",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [a.Gx]: { strSymbol: "KD", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.w7]: { strSymbol: "QR", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.uZ]: {
            strSymbol: "₡",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [a.lK]: {
            strSymbol: "$U",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [a.xt]: { strSymbol: "лв", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.Bz]: { strSymbol: "kn", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.OD]: { strSymbol: "Kč", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.S1]: { strSymbol: "kr.", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.HQ]: { strSymbol: "Ft", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.tn]: { strSymbol: "lei", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
          [a.mh]: {},
        },
        t = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: a.rg,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function n(e) {
        return { ...t, ...c[e], eCurrency: e };
      }
    },
    61459: (e, r, s) => {
      s.d(r, { d: () => t, x: () => c });
      var a = s(70484);
      function c(e, r) {
        return t(e, (0, a.J)(r));
      }
      function t(e, r) {
        const {
            strSymbol: s,
            bSuffixSymbol: a,
            bSpaceForSymbol: c,
            bWholeUnitsOnly: t,
            strDecimalSymbol: n,
            strThousandsSeparator: u,
          } = r,
          o = e < 0,
          S = t && e % 100 == 0;
        o && (e = -e);
        const l = [];
        for (let r = 0; r < 2; r++)
          S || l.push(e % 10), (e = Math.floor(e / 10));
        !S && n && l.push(n);
        let i = 0;
        do {
          i++ % 3 == 0 && i > 2 && u && l.push(u),
            l.push(e % 10),
            (e = Math.floor(e / 10));
        } while (e > 0);
        const m = l.reverse().join(""),
          b = c ? " " : "",
          y = o ? "-" : "";
        return a ? `${y}${m}${b}${s}` : `${y}${s}${b}${m}`;
      }
    },
    72255: (e, r, s) => {
      s.d(r, {
        IG: () => m,
        M1: () => u,
        Ug: () => o,
        ei: () => i,
        gM: () => b,
        mG: () => l,
        pd: () => S,
        rt: () => n,
        t_: () => y,
      });
      var a = s(81393),
        c = s(88267),
        t = s(29848);
      function n(e) {
        switch (e?.toUpperCase()) {
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
      function u(e) {
        switch (e) {
          case c.dz:
            return "GBP";
          case c.a4:
            return "EUR";
          case c.ln:
            return "CHF";
          case c.Fq:
            return "RUB";
          case c.sY:
            return "PLN";
          case c.iU:
            return "BRL";
          case c.xm:
            return "JPY";
          case c.KE:
            return "NOK";
          case c.DP:
            return "IDR";
          case c.Jw:
            return "MYR";
          case c.En:
            return "PHP";
          case c.wA:
            return "SGD";
          case c.cm:
            return "THB";
          case c.aQ:
            return "VND";
          case c.yR:
            return "KRW";
          case c.bj:
            return "TRY";
          case c.SJ:
            return "UAH";
          case c.ds:
            return "MXN";
          case c.cX:
            return "CAD";
          case c.m1:
            return "AUD";
          case c.WS:
            return "NZD";
          case c.C6:
            return "CNY";
          case c.T_:
            return "INR";
          case c.D5:
            return "CLP";
          case c.D4:
            return "PEN";
          case c.G1:
            return "COP";
          case c.de:
            return "ZAR";
          case c.bO:
            return "HKD";
          case c.Jb:
            return "TWD";
          case c.CR:
            return "SAR";
          case c.Cv:
            return "AED";
          case c.JW:
            return "SEK";
          case c.aU:
            return "ARS";
          case c.G7:
            return "ILS";
          case c.jT:
            return "BYN";
          case c.X0:
            return "KZT";
          case c.Gx:
            return "KWD";
          case c.w7:
            return "QAR";
          case c.uZ:
            return "CRC";
          case c.lK:
            return "UYU";
          case c.xt:
            return "BGN";
          case c.Bz:
            return "HRK";
          case c.OD:
            return "CZK";
          case c.S1:
            return "DKK";
          case c.HQ:
            return "HUF";
          case c.tn:
            return "RON";
          default:
            return "USD";
        }
      }
      function o(e) {
        switch (e) {
          case c.CS:
            return "US Dollar";
          case c.dz:
            return "GB Pounds";
          case c.a4:
            return "Euros";
          case c.ln:
            return "Swiss Francs";
          case c.Fq:
            return "Russian Rubles";
          case c.sY:
            return "Polish zloty";
          case c.iU:
            return "Brazilian Reals";
          case c.xm:
            return "Japanese Yen";
          case c.KE:
            return "Norwegian Krone";
          case c.DP:
            return "Indonesian Rupiah";
          case c.Jw:
            return "Malaysian Ringgit";
          case c.En:
            return "Philippine Peso";
          case c.wA:
            return "Singapore Dollar";
          case c.cm:
            return "Thai Baht";
          case c.aQ:
            return "Vietnamese Dong";
          case c.yR:
            return "Korean Won";
          case c.bj:
            return "Turkish Lira";
          case c.SJ:
            return "Ukrainian Hryvnia";
          case c.ds:
            return "Mexican Peso";
          case c.cX:
            return "Canadian Dollar";
          case c.m1:
            return "Australian Dollar";
          case c.WS:
            return "New Zealand Dollar";
          case c.C6:
            return "Chinese Yuan";
          case c.T_:
            return "Indian Rupee";
          case c.D5:
            return "Chilean Peso";
          case c.D4:
            return "Peruvian Sol";
          case c.G1:
            return "Colombian Peso";
          case c.de:
            return "South African Rand";
          case c.bO:
            return "Hong Kong Dollar";
          case c.Jb:
            return "Taiwanese Dollar";
          case c.CR:
            return "Saudi Arabian Riyal";
          case c.Cv:
            return "Emirati Dirham";
          case c.JW:
            return "Swedish Krona";
          case c.aU:
            return "Argentine Peso";
          case c.G7:
            return "Israeli New Shequel";
          case c.jT:
            return "Belarusian Ruble";
          case c.X0:
            return "Kazakhstani Tenge";
          case c.Gx:
            return "Kuwaiti Dinar";
          case c.w7:
            return "Qatari Rial";
          case c.uZ:
            return "Costa Rican Colon";
          case c.lK:
            return "Uruguayan Peso";
          case c.xt:
            return "Bulgarian lev";
          case c.Bz:
            return "Croatian kuna";
          case c.OD:
            return "Czech koruna";
          case c.S1:
            return "Danish krone";
          case c.HQ:
            return "Hungarian forint";
          case c.tn:
            return "Romanian leu";
          default:
            return "";
        }
      }
      function S(e, r = t.YS) {
        switch (e) {
          case c.dz:
            return "gbp";
          case c.a4:
            return "eur";
          case c.ln:
            return "chf";
          case c.Fq:
            return "rub";
          case c.sY:
            return "pln";
          case c.iU:
            return "brl";
          case c.xm:
            return "jpy";
          case c.KE:
            return "nok";
          case c.DP:
            return "idr";
          case c.Jw:
            return "myr";
          case c.En:
            return "php";
          case c.wA:
            return "sgd";
          case c.cm:
            return "thb";
          case c.aQ:
            return "vnd";
          case c.yR:
            return "krw";
          case c.bj:
            return "try";
          case c.SJ:
            return "uah";
          case c.ds:
            return "mxn";
          case c.cX:
            return "cad";
          case c.m1:
            return "aud";
          case c.WS:
            return "nzd";
          case c.C6:
            return "cny";
          case c.T_:
            return "inr";
          case c.D5:
            return "clp";
          case c.D4:
            return "pen";
          case c.G1:
            return "cop";
          case c.de:
            return "zar";
          case c.bO:
            return "hkd";
          case c.Jb:
            return "twd";
          case c.CR:
            return "sar";
          case c.Cv:
            return "aed";
          case c.JW:
            return "sek";
          case c.aU:
            return "ars";
          case c.G7:
            return "ils";
          case c.jT:
            return "byn";
          case c.X0:
            return "kzt";
          case c.Gx:
            return "kwd";
          case c.w7:
            return "qar";
          case c.uZ:
            return "crc";
          case c.lK:
            return "uyu";
          case c.xt:
            return "bgn";
          case c.Bz:
            return "hrk";
          case c.OD:
            return "czk";
          case c.S1:
            return "dkk";
          case c.HQ:
            return "huf";
          case c.tn:
            return "ron";
          default:
            return r == t._S
              ? "usd_cis"
              : r == t.aL
                ? "usd_sasia"
                : r == t.M_
                  ? "usd_latam"
                  : r == t.aY
                    ? "usd_mena"
                    : "usd";
        }
      }
      function l(e) {
        switch (e) {
          case t._S:
            return "CIS";
          case t.aL:
            return "SASIA";
          case t.M_:
            return "LATAM";
          case t.aY:
            return "MENA";
        }
        return "Unknown";
      }
      function i(e) {
        switch (e) {
          case "USD":
          case "USD_CIS":
          case "USD_MENA":
          case "USD_LATAM":
          case "USD_SASIA":
            return c.CS;
          case "GBP":
            return c.dz;
          case "EUR":
            return c.a4;
          case "CHF":
            return c.ln;
          case "RUB":
            return c.Fq;
          case "PLN":
            return c.sY;
          case "BRL":
            return c.iU;
          case "JPY":
            return c.xm;
          case "NOK":
            return c.KE;
          case "IDR":
            return c.DP;
          case "MYR":
            return c.Jw;
          case "PHP":
            return c.En;
          case "SGD":
            return c.wA;
          case "THB":
            return c.cm;
          case "VND":
            return c.aQ;
          case "KRW":
            return c.yR;
          case "TRY":
            return c.bj;
          case "UAH":
            return c.SJ;
          case "MXN":
            return c.ds;
          case "CAD":
            return c.cX;
          case "AUD":
            return c.m1;
          case "NZD":
            return c.WS;
          case "CNY":
            return c.C6;
          case "INR":
            return c.T_;
          case "CLP":
            return c.D5;
          case "PEN":
            return c.D4;
          case "COP":
            return c.G1;
          case "ZAR":
            return c.de;
          case "HKD":
            return c.bO;
          case "TWD":
            return c.Jb;
          case "SAR":
            return c.CR;
          case "AED":
            return c.Cv;
          case "SEK":
            return c.JW;
          case "ARS":
            return c.aU;
          case "ILS":
            return c.G7;
          case "BYN":
            return c.jT;
          case "KZT":
            return c.X0;
          case "KWD":
            return c.Gx;
          case "QAR":
            return c.w7;
          case "CRC":
            return c.uZ;
          case "UYU":
            return c.lK;
          case "BGN":
            return c.xt;
          case "HRK":
            return c.Bz;
          case "CZK":
            return c.OD;
          case "DKK":
            return c.S1;
          case "HUF":
            return c.HQ;
          case "RON":
            return c.tn;
          default:
            return m(e)
              ? i(e.substring(0, 3))
              : Number.isInteger(Number(e))
                ? Number(e)
                : ((0, a.wT)(
                    !1,
                    `ASCIICurrencyCodeToECurrencyCode unexpected code ${e}`,
                  ),
                  c.rg);
        }
      }
      function m(e) {
        return 6 == e.length;
      }
      function b(e) {
        return {
          eCurrencyCode: i(e.slice(0, 3)),
          strCountryCode: e.slice(4, 6),
        };
      }
      function y(e) {
        return `${o(i(e.toUpperCase()))} (${e})`;
      }
    },
    88267: (e, r, s) => {
      s.d(r, {
        Bz: () => Z,
        C6: () => F,
        CR: () => B,
        CS: () => c,
        Cv: () => E,
        D4: () => M,
        D5: () => I,
        DP: () => b,
        En: () => p,
        Fq: () => o,
        G1: () => G,
        G7: () => W,
        Gx: () => J,
        HQ: () => Q,
        JW: () => L,
        Jb: () => O,
        Jw: () => y,
        KE: () => m,
        OD: () => $,
        S1: () => k,
        SJ: () => U,
        T_: () => N,
        WS: () => f,
        X0: () => g,
        X5: () => ee,
        a4: () => n,
        aQ: () => D,
        aU: () => w,
        bO: () => P,
        bj: () => R,
        cX: () => T,
        cm: () => h,
        de: () => K,
        ds: () => A,
        dz: () => t,
        iU: () => l,
        jT: () => x,
        lK: () => z,
        ln: () => u,
        m1: () => _,
        mh: () => j,
        rg: () => a,
        sY: () => S,
        tn: () => X,
        uZ: () => Y,
        w7: () => H,
        wA: () => d,
        xm: () => i,
        xt: () => v,
        yR: () => C,
        yv: () => q,
      });
      const a = 0,
        c = 1,
        t = 2,
        n = 3,
        u = 4,
        o = 5,
        S = 6,
        l = 7,
        i = 8,
        m = 9,
        b = 10,
        y = 11,
        p = 12,
        d = 13,
        h = 14,
        D = 15,
        C = 16,
        R = 17,
        U = 18,
        A = 19,
        T = 20,
        _ = 21,
        f = 22,
        F = 23,
        N = 24,
        I = 25,
        M = 26,
        G = 27,
        K = 28,
        P = 29,
        O = 30,
        B = 31,
        E = 32,
        L = 33,
        w = 34,
        W = 35,
        x = 36,
        g = 37,
        J = 38,
        H = 39,
        Y = 40,
        z = 41,
        v = 42,
        Z = 43,
        $ = 44,
        k = 45,
        Q = 46,
        X = 47,
        j = 48;
      const V = [R, w];
      function q() {
        return [
          c,
          t,
          n,
          u,
          o,
          S,
          l,
          i,
          m,
          b,
          y,
          p,
          d,
          h,
          D,
          C,
          U,
          A,
          T,
          _,
          f,
          F,
          N,
          I,
          M,
          G,
          K,
          P,
          O,
          B,
          E,
          W,
          g,
          J,
          H,
          Y,
          z,
        ];
      }
      function ee() {
        return [...q(), ...V, L, v, Z, $, k, Q, X];
      }
    },
    29848: (e, r, s) => {
      s.d(r, {
        Hc: () => o,
        M_: () => n,
        R$: () => S,
        YS: () => a,
        _S: () => c,
        aL: () => t,
        aY: () => u,
      });
      const a = 0,
        c = 1,
        t = 2,
        n = 3,
        u = 4,
        o = 5;
      function S() {
        return [c, t, n, u];
      }
    },
    45334: (e, r, s) => {
      s.d(r, { $e: () => a, B7: () => t, Pe: () => n, Pv: () => c });
      const a = 1,
        c = 2,
        t = 4,
        n = 1073741824;
    },
    17690: (e, r, s) => {
      s.d(r, { IU: () => S, by: () => l, sc: () => u });
      var a = s(78327),
        c = s(85044),
        t = s(81393),
        n = s(45334);
      const u = 0,
        o = "061818254b2c99ac49e6626adb128ed1282a392f",
        S = 120;
      class l {
        m_unAppID;
        m_bInitialized = !1;
        m_strName;
        m_strIconURL;
        m_dtUpdatedFromServer;
        m_eAppType;
        constructor(e) {
          this.m_unAppID = e;
        }
        get appid() {
          return this.m_unAppID;
        }
        get is_initialized() {
          return this.m_bInitialized;
        }
        get is_valid() {
          return this.m_bInitialized && !!this.m_strName;
        }
        get name() {
          return this.m_strName;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, o);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, o);
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return this.apptype == n.B7 || this.apptype == n.Pv;
        }
        BuildAppURL(e, r) {
          return e
            ? a.TS.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, c.t)(r);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && e.app_type() != n.Pe
            ? ((this.m_bInitialized = !0),
              (this.m_strName = e.display_name()),
              (this.m_strIconURL = e.icon_hash()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = e.app_type()))
            : (this.m_bInitialized = !1);
        }
        DeserializeFromCacheObject(e) {
          try {
            (this.m_strName = e.strName),
              (this.m_strIconURL = e.strIconURL),
              (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
              (this.m_eAppType = e.eAppType),
              (this.m_bInitialized = !0);
          } catch {}
        }
        SerializeToCacheObject() {
          return (
            (0, t.wT)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!",
            ),
            this.m_bInitialized
              ? {
                  strName: this.m_strName,
                  strIconURL: this.m_strIconURL,
                  strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                  eAppType: this.m_eAppType,
                }
              : null
          );
        }
      }
    },
    85044: (e, r, s) => {
      s.d(r, { d: () => c, t: () => t });
      var a = s(78327);
      const c = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function t(e, r) {
        let s = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = c),
          44 == e.length && ((s = e.substr(-4)), (e = e.substr(0, 40)));
        let t = a.TS.AVATAR_BASE_URL;
        return (
          t ||
            ((t = a.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (t += e.substr(0, 2) + "/")),
          (t += e),
          r && "small" != r && (t += "_" + r),
          (t += s),
          t
        );
      }
    },
  },
]);
