/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3556],
  {
    70484: (e, r, C) => {
      C.d(r, { J: () => o });
      var c = C(88267);
      const n = {
          [c.AI.k_ECurrencyCodeInvalid]: {},
          [c.AI.k_ECurrencyCodeUSD]: { strSymbol: "$" },
          [c.AI.k_ECurrencyCodeGBP]: { strSymbol: "£" },
          [c.AI.k_ECurrencyCodeEUR]: { strSymbol: "€" },
          [c.AI.k_ECurrencyCodeCHF]: { strSymbol: "CHF" },
          [c.AI.k_ECurrencyCodeRUB]: {
            strSymbol: "руб.",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: "",
          },
          [c.AI.k_ECurrencyCodePLN]: {
            strSymbol: "zł",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [c.AI.k_ECurrencyCodeBRL]: {
            strSymbol: "R$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [c.AI.k_ECurrencyCodeJPY]: {
            strSymbol: "¥",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeNOK]: {
            strSymbol: "kr",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [c.AI.k_ECurrencyCodeIDR]: {
            strSymbol: "Rp",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [c.AI.k_ECurrencyCodeMYR]: { strSymbol: "RM" },
          [c.AI.k_ECurrencyCodePHP]: { strSymbol: "P" },
          [c.AI.k_ECurrencyCodeSGD]: { strSymbol: "S$" },
          [c.AI.k_ECurrencyCodeTHB]: { strSymbol: "฿" },
          [c.AI.k_ECurrencyCodeVND]: {
            strSymbol: "₫",
            bWholeUnitsOnly: !0,
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [c.AI.k_ECurrencyCodeKRW]: {
            strSymbol: "₩",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeTRY]: {
            strSymbol: "TL",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [c.AI.k_ECurrencyCodeUAH]: {
            strSymbol: "₴",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [c.AI.k_ECurrencyCodeMXN]: { strSymbol: "Mex$", bSpaceForSymbol: !0 },
          [c.AI.k_ECurrencyCodeCAD]: { strSymbol: "CDN$", bSpaceForSymbol: !0 },
          [c.AI.k_ECurrencyCodeAUD]: { strSymbol: "A$", bSpaceForSymbol: !0 },
          [c.AI.k_ECurrencyCodeNZD]: { strSymbol: "NZ$", bSpaceForSymbol: !0 },
          [c.AI.k_ECurrencyCodeCNY]: { strSymbol: "¥", bSpaceForSymbol: !0 },
          [c.AI.k_ECurrencyCodeINR]: {
            strSymbol: "₹",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
          },
          [c.AI.k_ECurrencyCodeCLP]: {
            strSymbol: "CLP$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [c.AI.k_ECurrencyCodePEN]: { strSymbol: "S/." },
          [c.AI.k_ECurrencyCodeCOP]: {
            strSymbol: "COL$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [c.AI.k_ECurrencyCodeZAR]: {
            strSymbol: "R",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [c.AI.k_ECurrencyCodeHKD]: { strSymbol: "HK$", bSpaceForSymbol: !0 },
          [c.AI.k_ECurrencyCodeTWD]: {
            strSymbol: "NT$",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeSAR]: {
            strSymbol: "SR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeAED]: {
            strSymbol: "AED",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeSEK]: {
            strSymbol: "kr",
            bSpaceForSymbol: !0,
            bSuffixSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeARS]: {
            strSymbol: "ARS$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [c.AI.k_ECurrencyCodeILS]: { strSymbol: "₪" },
          [c.AI.k_ECurrencyCodeBYN]: { strSymbol: "Br" },
          [c.AI.k_ECurrencyCodeKZT]: {
            strSymbol: "₸",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [c.AI.k_ECurrencyCodeKWD]: {
            strSymbol: "KD",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeQAR]: {
            strSymbol: "QR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeCRC]: {
            strSymbol: "₡",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [c.AI.k_ECurrencyCodeUYU]: {
            strSymbol: "$U",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [c.AI.k_ECurrencyCodeBGN]: {
            strSymbol: "лв",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeHRK]: {
            strSymbol: "kn",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeCZK]: {
            strSymbol: "Kč",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeDKK]: {
            strSymbol: "kr.",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeHUF]: {
            strSymbol: "Ft",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeRON]: {
            strSymbol: "lei",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [c.AI.k_ECurrencyCodeMax]: {},
        },
        u = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: c.AI.k_ECurrencyCodeInvalid,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function o(e) {
        return { ...u, ...n[e], eCurrency: e };
      }
    },
    61459: (e, r, C) => {
      C.d(r, { d: () => u, x: () => n });
      var c = C(70484);
      function n(e, r) {
        return u(e, (0, c.J)(r));
      }
      function u(e, r) {
        const {
            strSymbol: C,
            bSuffixSymbol: c,
            bSpaceForSymbol: n,
            bWholeUnitsOnly: u,
            strDecimalSymbol: o,
            strThousandsSeparator: a,
          } = r,
          s = e < 0,
          y = u && e % 100 == 0;
        s && (e = -e);
        const E = [];
        for (let r = 0; r < 2; r++)
          y || E.push(e % 10), (e = Math.floor(e / 10));
        !y && o && E.push(o);
        let d = 0;
        do {
          d++ % 3 == 0 && d > 2 && a && E.push(a),
            E.push(e % 10),
            (e = Math.floor(e / 10));
        } while (e > 0);
        const k = E.reverse().join(""),
          _ = n ? " " : "",
          t = s ? "-" : "";
        return c ? `${t}${k}${_}${C}` : `${t}${C}${_}${k}`;
      }
    },
    72255: (e, r, C) => {
      C.d(r, {
        IG: () => k,
        M1: () => a,
        Ug: () => s,
        ei: () => d,
        gM: () => _,
        mG: () => E,
        pd: () => y,
        rt: () => o,
        t_: () => t,
      });
      var c = C(81393),
        n = C(88267),
        u = C(29848);
      function o(e) {
        switch (e?.toUpperCase()) {
          case "AE":
            return n.AI.k_ECurrencyCodeAED;
          case "AU":
            return n.AI.k_ECurrencyCodeAUD;
          case "BR":
            return n.AI.k_ECurrencyCodeBRL;
          case "CA":
            return n.AI.k_ECurrencyCodeCAD;
          case "CH":
          case "LI":
            return n.AI.k_ECurrencyCodeCHF;
          case "CL":
            return n.AI.k_ECurrencyCodeCLP;
          case "CN":
          case "XC":
            return n.AI.k_ECurrencyCodeCNY;
          case "CO":
            return n.AI.k_ECurrencyCodeCOP;
          case "CR":
            return n.AI.k_ECurrencyCodeCRC;
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
            return n.AI.k_ECurrencyCodeEUR;
          case "GB":
          case "GG":
          case "GS":
          case "IM":
          case "JE":
            return n.AI.k_ECurrencyCodeGBP;
          case "HK":
            return n.AI.k_ECurrencyCodeHKD;
          case "ID":
            return n.AI.k_ECurrencyCodeIDR;
          case "IL":
            return n.AI.k_ECurrencyCodeILS;
          case "IN":
            return n.AI.k_ECurrencyCodeINR;
          case "JP":
            return n.AI.k_ECurrencyCodeJPY;
          case "KR":
            return n.AI.k_ECurrencyCodeKRW;
          case "KW":
            return n.AI.k_ECurrencyCodeKWD;
          case "KZ":
            return n.AI.k_ECurrencyCodeKZT;
          case "MX":
            return n.AI.k_ECurrencyCodeMXN;
          case "MY":
            return n.AI.k_ECurrencyCodeMYR;
          case "NO":
            return n.AI.k_ECurrencyCodeNOK;
          case "NZ":
            return n.AI.k_ECurrencyCodeNZD;
          case "PE":
            return n.AI.k_ECurrencyCodePEN;
          case "PH":
            return n.AI.k_ECurrencyCodePHP;
          case "PL":
            return n.AI.k_ECurrencyCodePLN;
          case "QA":
            return n.AI.k_ECurrencyCodeQAR;
          case "RU":
            return n.AI.k_ECurrencyCodeRUB;
          case "SA":
            return n.AI.k_ECurrencyCodeSAR;
          case "SG":
            return n.AI.k_ECurrencyCodeSGD;
          case "TH":
            return n.AI.k_ECurrencyCodeTHB;
          case "TW":
            return n.AI.k_ECurrencyCodeTWD;
          case "UA":
            return n.AI.k_ECurrencyCodeUAH;
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
            return n.AI.k_ECurrencyCodeUSD;
          case "UY":
            return n.AI.k_ECurrencyCodeUYU;
          case "VN":
            return n.AI.k_ECurrencyCodeVND;
          case "ZA":
            return n.AI.k_ECurrencyCodeZAR;
          default:
            return (
              console.assert(!1, `Unhandled country code: ${e}`),
              n.AI.k_ECurrencyCodeUSD
            );
        }
      }
      function a(e) {
        switch (e) {
          case n.AI.k_ECurrencyCodeGBP:
            return "GBP";
          case n.AI.k_ECurrencyCodeEUR:
            return "EUR";
          case n.AI.k_ECurrencyCodeCHF:
            return "CHF";
          case n.AI.k_ECurrencyCodeRUB:
            return "RUB";
          case n.AI.k_ECurrencyCodePLN:
            return "PLN";
          case n.AI.k_ECurrencyCodeBRL:
            return "BRL";
          case n.AI.k_ECurrencyCodeJPY:
            return "JPY";
          case n.AI.k_ECurrencyCodeNOK:
            return "NOK";
          case n.AI.k_ECurrencyCodeIDR:
            return "IDR";
          case n.AI.k_ECurrencyCodeMYR:
            return "MYR";
          case n.AI.k_ECurrencyCodePHP:
            return "PHP";
          case n.AI.k_ECurrencyCodeSGD:
            return "SGD";
          case n.AI.k_ECurrencyCodeTHB:
            return "THB";
          case n.AI.k_ECurrencyCodeVND:
            return "VND";
          case n.AI.k_ECurrencyCodeKRW:
            return "KRW";
          case n.AI.k_ECurrencyCodeTRY:
            return "TRY";
          case n.AI.k_ECurrencyCodeUAH:
            return "UAH";
          case n.AI.k_ECurrencyCodeMXN:
            return "MXN";
          case n.AI.k_ECurrencyCodeCAD:
            return "CAD";
          case n.AI.k_ECurrencyCodeAUD:
            return "AUD";
          case n.AI.k_ECurrencyCodeNZD:
            return "NZD";
          case n.AI.k_ECurrencyCodeCNY:
            return "CNY";
          case n.AI.k_ECurrencyCodeINR:
            return "INR";
          case n.AI.k_ECurrencyCodeCLP:
            return "CLP";
          case n.AI.k_ECurrencyCodePEN:
            return "PEN";
          case n.AI.k_ECurrencyCodeCOP:
            return "COP";
          case n.AI.k_ECurrencyCodeZAR:
            return "ZAR";
          case n.AI.k_ECurrencyCodeHKD:
            return "HKD";
          case n.AI.k_ECurrencyCodeTWD:
            return "TWD";
          case n.AI.k_ECurrencyCodeSAR:
            return "SAR";
          case n.AI.k_ECurrencyCodeAED:
            return "AED";
          case n.AI.k_ECurrencyCodeSEK:
            return "SEK";
          case n.AI.k_ECurrencyCodeARS:
            return "ARS";
          case n.AI.k_ECurrencyCodeILS:
            return "ILS";
          case n.AI.k_ECurrencyCodeBYN:
            return "BYN";
          case n.AI.k_ECurrencyCodeKZT:
            return "KZT";
          case n.AI.k_ECurrencyCodeKWD:
            return "KWD";
          case n.AI.k_ECurrencyCodeQAR:
            return "QAR";
          case n.AI.k_ECurrencyCodeCRC:
            return "CRC";
          case n.AI.k_ECurrencyCodeUYU:
            return "UYU";
          case n.AI.k_ECurrencyCodeBGN:
            return "BGN";
          case n.AI.k_ECurrencyCodeHRK:
            return "HRK";
          case n.AI.k_ECurrencyCodeCZK:
            return "CZK";
          case n.AI.k_ECurrencyCodeDKK:
            return "DKK";
          case n.AI.k_ECurrencyCodeHUF:
            return "HUF";
          case n.AI.k_ECurrencyCodeRON:
            return "RON";
          default:
            return "USD";
        }
      }
      function s(e) {
        switch (e) {
          case n.AI.k_ECurrencyCodeUSD:
            return "US Dollar";
          case n.AI.k_ECurrencyCodeGBP:
            return "GB Pounds";
          case n.AI.k_ECurrencyCodeEUR:
            return "Euros";
          case n.AI.k_ECurrencyCodeCHF:
            return "Swiss Francs";
          case n.AI.k_ECurrencyCodeRUB:
            return "Russian Rubles";
          case n.AI.k_ECurrencyCodePLN:
            return "Polish zloty";
          case n.AI.k_ECurrencyCodeBRL:
            return "Brazilian Reals";
          case n.AI.k_ECurrencyCodeJPY:
            return "Japanese Yen";
          case n.AI.k_ECurrencyCodeNOK:
            return "Norwegian Krone";
          case n.AI.k_ECurrencyCodeIDR:
            return "Indonesian Rupiah";
          case n.AI.k_ECurrencyCodeMYR:
            return "Malaysian Ringgit";
          case n.AI.k_ECurrencyCodePHP:
            return "Philippine Peso";
          case n.AI.k_ECurrencyCodeSGD:
            return "Singapore Dollar";
          case n.AI.k_ECurrencyCodeTHB:
            return "Thai Baht";
          case n.AI.k_ECurrencyCodeVND:
            return "Vietnamese Dong";
          case n.AI.k_ECurrencyCodeKRW:
            return "Korean Won";
          case n.AI.k_ECurrencyCodeTRY:
            return "Turkish Lira";
          case n.AI.k_ECurrencyCodeUAH:
            return "Ukrainian Hryvnia";
          case n.AI.k_ECurrencyCodeMXN:
            return "Mexican Peso";
          case n.AI.k_ECurrencyCodeCAD:
            return "Canadian Dollar";
          case n.AI.k_ECurrencyCodeAUD:
            return "Australian Dollar";
          case n.AI.k_ECurrencyCodeNZD:
            return "New Zealand Dollar";
          case n.AI.k_ECurrencyCodeCNY:
            return "Chinese Yuan";
          case n.AI.k_ECurrencyCodeINR:
            return "Indian Rupee";
          case n.AI.k_ECurrencyCodeCLP:
            return "Chilean Peso";
          case n.AI.k_ECurrencyCodePEN:
            return "Peruvian Sol";
          case n.AI.k_ECurrencyCodeCOP:
            return "Colombian Peso";
          case n.AI.k_ECurrencyCodeZAR:
            return "South African Rand";
          case n.AI.k_ECurrencyCodeHKD:
            return "Hong Kong Dollar";
          case n.AI.k_ECurrencyCodeTWD:
            return "Taiwanese Dollar";
          case n.AI.k_ECurrencyCodeSAR:
            return "Saudi Arabian Riyal";
          case n.AI.k_ECurrencyCodeAED:
            return "Emirati Dirham";
          case n.AI.k_ECurrencyCodeSEK:
            return "Swedish Krona";
          case n.AI.k_ECurrencyCodeARS:
            return "Argentine Peso";
          case n.AI.k_ECurrencyCodeILS:
            return "Israeli New Shequel";
          case n.AI.k_ECurrencyCodeBYN:
            return "Belarusian Ruble";
          case n.AI.k_ECurrencyCodeKZT:
            return "Kazakhstani Tenge";
          case n.AI.k_ECurrencyCodeKWD:
            return "Kuwaiti Dinar";
          case n.AI.k_ECurrencyCodeQAR:
            return "Qatari Rial";
          case n.AI.k_ECurrencyCodeCRC:
            return "Costa Rican Colon";
          case n.AI.k_ECurrencyCodeUYU:
            return "Uruguayan Peso";
          case n.AI.k_ECurrencyCodeBGN:
            return "Bulgarian lev";
          case n.AI.k_ECurrencyCodeHRK:
            return "Croatian kuna";
          case n.AI.k_ECurrencyCodeCZK:
            return "Czech koruna";
          case n.AI.k_ECurrencyCodeDKK:
            return "Danish krone";
          case n.AI.k_ECurrencyCodeHUF:
            return "Hungarian forint";
          case n.AI.k_ECurrencyCodeRON:
            return "Romanian leu";
          default:
            return "";
        }
      }
      function y(e, r = u.R.k_ERegionCodeInvalid) {
        switch (e) {
          case n.AI.k_ECurrencyCodeGBP:
            return "gbp";
          case n.AI.k_ECurrencyCodeEUR:
            return "eur";
          case n.AI.k_ECurrencyCodeCHF:
            return "chf";
          case n.AI.k_ECurrencyCodeRUB:
            return "rub";
          case n.AI.k_ECurrencyCodePLN:
            return "pln";
          case n.AI.k_ECurrencyCodeBRL:
            return "brl";
          case n.AI.k_ECurrencyCodeJPY:
            return "jpy";
          case n.AI.k_ECurrencyCodeNOK:
            return "nok";
          case n.AI.k_ECurrencyCodeIDR:
            return "idr";
          case n.AI.k_ECurrencyCodeMYR:
            return "myr";
          case n.AI.k_ECurrencyCodePHP:
            return "php";
          case n.AI.k_ECurrencyCodeSGD:
            return "sgd";
          case n.AI.k_ECurrencyCodeTHB:
            return "thb";
          case n.AI.k_ECurrencyCodeVND:
            return "vnd";
          case n.AI.k_ECurrencyCodeKRW:
            return "krw";
          case n.AI.k_ECurrencyCodeTRY:
            return "try";
          case n.AI.k_ECurrencyCodeUAH:
            return "uah";
          case n.AI.k_ECurrencyCodeMXN:
            return "mxn";
          case n.AI.k_ECurrencyCodeCAD:
            return "cad";
          case n.AI.k_ECurrencyCodeAUD:
            return "aud";
          case n.AI.k_ECurrencyCodeNZD:
            return "nzd";
          case n.AI.k_ECurrencyCodeCNY:
            return "cny";
          case n.AI.k_ECurrencyCodeINR:
            return "inr";
          case n.AI.k_ECurrencyCodeCLP:
            return "clp";
          case n.AI.k_ECurrencyCodePEN:
            return "pen";
          case n.AI.k_ECurrencyCodeCOP:
            return "cop";
          case n.AI.k_ECurrencyCodeZAR:
            return "zar";
          case n.AI.k_ECurrencyCodeHKD:
            return "hkd";
          case n.AI.k_ECurrencyCodeTWD:
            return "twd";
          case n.AI.k_ECurrencyCodeSAR:
            return "sar";
          case n.AI.k_ECurrencyCodeAED:
            return "aed";
          case n.AI.k_ECurrencyCodeSEK:
            return "sek";
          case n.AI.k_ECurrencyCodeARS:
            return "ars";
          case n.AI.k_ECurrencyCodeILS:
            return "ils";
          case n.AI.k_ECurrencyCodeBYN:
            return "byn";
          case n.AI.k_ECurrencyCodeKZT:
            return "kzt";
          case n.AI.k_ECurrencyCodeKWD:
            return "kwd";
          case n.AI.k_ECurrencyCodeQAR:
            return "qar";
          case n.AI.k_ECurrencyCodeCRC:
            return "crc";
          case n.AI.k_ECurrencyCodeUYU:
            return "uyu";
          case n.AI.k_ECurrencyCodeBGN:
            return "bgn";
          case n.AI.k_ECurrencyCodeHRK:
            return "hrk";
          case n.AI.k_ECurrencyCodeCZK:
            return "czk";
          case n.AI.k_ECurrencyCodeDKK:
            return "dkk";
          case n.AI.k_ECurrencyCodeHUF:
            return "huf";
          case n.AI.k_ECurrencyCodeRON:
            return "ron";
          default:
            return r == u.R.k_ERegionCodeCIS
              ? "usd_cis"
              : r == u.R.k_ERegionCodeSAsia
                ? "usd_sasia"
                : r == u.R.k_ERegionCodeLATAM
                  ? "usd_latam"
                  : r == u.R.k_ERegionCodeMENA
                    ? "usd_mena"
                    : "usd";
        }
      }
      function E(e) {
        switch (e) {
          case u.R.k_ERegionCodeCIS:
            return "CIS";
          case u.R.k_ERegionCodeSAsia:
            return "SASIA";
          case u.R.k_ERegionCodeLATAM:
            return "LATAM";
          case u.R.k_ERegionCodeMENA:
            return "MENA";
        }
        return "Unknown";
      }
      function d(e) {
        switch (e) {
          case "USD":
          case "USD_CIS":
          case "USD_MENA":
          case "USD_LATAM":
          case "USD_SASIA":
            return n.AI.k_ECurrencyCodeUSD;
          case "GBP":
            return n.AI.k_ECurrencyCodeGBP;
          case "EUR":
            return n.AI.k_ECurrencyCodeEUR;
          case "CHF":
            return n.AI.k_ECurrencyCodeCHF;
          case "RUB":
            return n.AI.k_ECurrencyCodeRUB;
          case "PLN":
            return n.AI.k_ECurrencyCodePLN;
          case "BRL":
            return n.AI.k_ECurrencyCodeBRL;
          case "JPY":
            return n.AI.k_ECurrencyCodeJPY;
          case "NOK":
            return n.AI.k_ECurrencyCodeNOK;
          case "IDR":
            return n.AI.k_ECurrencyCodeIDR;
          case "MYR":
            return n.AI.k_ECurrencyCodeMYR;
          case "PHP":
            return n.AI.k_ECurrencyCodePHP;
          case "SGD":
            return n.AI.k_ECurrencyCodeSGD;
          case "THB":
            return n.AI.k_ECurrencyCodeTHB;
          case "VND":
            return n.AI.k_ECurrencyCodeVND;
          case "KRW":
            return n.AI.k_ECurrencyCodeKRW;
          case "TRY":
            return n.AI.k_ECurrencyCodeTRY;
          case "UAH":
            return n.AI.k_ECurrencyCodeUAH;
          case "MXN":
            return n.AI.k_ECurrencyCodeMXN;
          case "CAD":
            return n.AI.k_ECurrencyCodeCAD;
          case "AUD":
            return n.AI.k_ECurrencyCodeAUD;
          case "NZD":
            return n.AI.k_ECurrencyCodeNZD;
          case "CNY":
            return n.AI.k_ECurrencyCodeCNY;
          case "INR":
            return n.AI.k_ECurrencyCodeINR;
          case "CLP":
            return n.AI.k_ECurrencyCodeCLP;
          case "PEN":
            return n.AI.k_ECurrencyCodePEN;
          case "COP":
            return n.AI.k_ECurrencyCodeCOP;
          case "ZAR":
            return n.AI.k_ECurrencyCodeZAR;
          case "HKD":
            return n.AI.k_ECurrencyCodeHKD;
          case "TWD":
            return n.AI.k_ECurrencyCodeTWD;
          case "SAR":
            return n.AI.k_ECurrencyCodeSAR;
          case "AED":
            return n.AI.k_ECurrencyCodeAED;
          case "SEK":
            return n.AI.k_ECurrencyCodeSEK;
          case "ARS":
            return n.AI.k_ECurrencyCodeARS;
          case "ILS":
            return n.AI.k_ECurrencyCodeILS;
          case "BYN":
            return n.AI.k_ECurrencyCodeBYN;
          case "KZT":
            return n.AI.k_ECurrencyCodeKZT;
          case "KWD":
            return n.AI.k_ECurrencyCodeKWD;
          case "QAR":
            return n.AI.k_ECurrencyCodeQAR;
          case "CRC":
            return n.AI.k_ECurrencyCodeCRC;
          case "UYU":
            return n.AI.k_ECurrencyCodeUYU;
          case "BGN":
            return n.AI.k_ECurrencyCodeBGN;
          case "HRK":
            return n.AI.k_ECurrencyCodeHRK;
          case "CZK":
            return n.AI.k_ECurrencyCodeCZK;
          case "DKK":
            return n.AI.k_ECurrencyCodeDKK;
          case "HUF":
            return n.AI.k_ECurrencyCodeHUF;
          case "RON":
            return n.AI.k_ECurrencyCodeRON;
          default:
            return k(e)
              ? d(e.substring(0, 3))
              : Number.isInteger(Number(e))
                ? Number(e)
                : ((0, c.wT)(
                    !1,
                    `ASCIICurrencyCodeToECurrencyCode unexpected code ${e}`,
                  ),
                  n.AI.k_ECurrencyCodeInvalid);
        }
      }
      function k(e) {
        return 6 == e.length;
      }
      function _(e) {
        return {
          eCurrencyCode: d(e.slice(0, 3)),
          strCountryCode: e.slice(4, 6),
        };
      }
      function t(e) {
        return `${s(d(e.toUpperCase()))} (${e})`;
      }
    },
    88267: (e, r, C) => {
      var c;
      C.d(r, { AI: () => c, X5: () => o, yv: () => u }),
        (function (e) {
          (e[(e.k_ECurrencyCodeInvalid = 0)] = "k_ECurrencyCodeInvalid"),
            (e[(e.k_ECurrencyCodeUSD = 1)] = "k_ECurrencyCodeUSD"),
            (e[(e.k_ECurrencyCodeGBP = 2)] = "k_ECurrencyCodeGBP"),
            (e[(e.k_ECurrencyCodeEUR = 3)] = "k_ECurrencyCodeEUR"),
            (e[(e.k_ECurrencyCodeCHF = 4)] = "k_ECurrencyCodeCHF"),
            (e[(e.k_ECurrencyCodeRUB = 5)] = "k_ECurrencyCodeRUB"),
            (e[(e.k_ECurrencyCodePLN = 6)] = "k_ECurrencyCodePLN"),
            (e[(e.k_ECurrencyCodeBRL = 7)] = "k_ECurrencyCodeBRL"),
            (e[(e.k_ECurrencyCodeJPY = 8)] = "k_ECurrencyCodeJPY"),
            (e[(e.k_ECurrencyCodeNOK = 9)] = "k_ECurrencyCodeNOK"),
            (e[(e.k_ECurrencyCodeIDR = 10)] = "k_ECurrencyCodeIDR"),
            (e[(e.k_ECurrencyCodeMYR = 11)] = "k_ECurrencyCodeMYR"),
            (e[(e.k_ECurrencyCodePHP = 12)] = "k_ECurrencyCodePHP"),
            (e[(e.k_ECurrencyCodeSGD = 13)] = "k_ECurrencyCodeSGD"),
            (e[(e.k_ECurrencyCodeTHB = 14)] = "k_ECurrencyCodeTHB"),
            (e[(e.k_ECurrencyCodeVND = 15)] = "k_ECurrencyCodeVND"),
            (e[(e.k_ECurrencyCodeKRW = 16)] = "k_ECurrencyCodeKRW"),
            (e[(e.k_ECurrencyCodeTRY = 17)] = "k_ECurrencyCodeTRY"),
            (e[(e.k_ECurrencyCodeUAH = 18)] = "k_ECurrencyCodeUAH"),
            (e[(e.k_ECurrencyCodeMXN = 19)] = "k_ECurrencyCodeMXN"),
            (e[(e.k_ECurrencyCodeCAD = 20)] = "k_ECurrencyCodeCAD"),
            (e[(e.k_ECurrencyCodeAUD = 21)] = "k_ECurrencyCodeAUD"),
            (e[(e.k_ECurrencyCodeNZD = 22)] = "k_ECurrencyCodeNZD"),
            (e[(e.k_ECurrencyCodeCNY = 23)] = "k_ECurrencyCodeCNY"),
            (e[(e.k_ECurrencyCodeINR = 24)] = "k_ECurrencyCodeINR"),
            (e[(e.k_ECurrencyCodeCLP = 25)] = "k_ECurrencyCodeCLP"),
            (e[(e.k_ECurrencyCodePEN = 26)] = "k_ECurrencyCodePEN"),
            (e[(e.k_ECurrencyCodeCOP = 27)] = "k_ECurrencyCodeCOP"),
            (e[(e.k_ECurrencyCodeZAR = 28)] = "k_ECurrencyCodeZAR"),
            (e[(e.k_ECurrencyCodeHKD = 29)] = "k_ECurrencyCodeHKD"),
            (e[(e.k_ECurrencyCodeTWD = 30)] = "k_ECurrencyCodeTWD"),
            (e[(e.k_ECurrencyCodeSAR = 31)] = "k_ECurrencyCodeSAR"),
            (e[(e.k_ECurrencyCodeAED = 32)] = "k_ECurrencyCodeAED"),
            (e[(e.k_ECurrencyCodeSEK = 33)] = "k_ECurrencyCodeSEK"),
            (e[(e.k_ECurrencyCodeARS = 34)] = "k_ECurrencyCodeARS"),
            (e[(e.k_ECurrencyCodeILS = 35)] = "k_ECurrencyCodeILS"),
            (e[(e.k_ECurrencyCodeBYN = 36)] = "k_ECurrencyCodeBYN"),
            (e[(e.k_ECurrencyCodeKZT = 37)] = "k_ECurrencyCodeKZT"),
            (e[(e.k_ECurrencyCodeKWD = 38)] = "k_ECurrencyCodeKWD"),
            (e[(e.k_ECurrencyCodeQAR = 39)] = "k_ECurrencyCodeQAR"),
            (e[(e.k_ECurrencyCodeCRC = 40)] = "k_ECurrencyCodeCRC"),
            (e[(e.k_ECurrencyCodeUYU = 41)] = "k_ECurrencyCodeUYU"),
            (e[(e.k_ECurrencyCodeBGN = 42)] = "k_ECurrencyCodeBGN"),
            (e[(e.k_ECurrencyCodeHRK = 43)] = "k_ECurrencyCodeHRK"),
            (e[(e.k_ECurrencyCodeCZK = 44)] = "k_ECurrencyCodeCZK"),
            (e[(e.k_ECurrencyCodeDKK = 45)] = "k_ECurrencyCodeDKK"),
            (e[(e.k_ECurrencyCodeHUF = 46)] = "k_ECurrencyCodeHUF"),
            (e[(e.k_ECurrencyCodeRON = 47)] = "k_ECurrencyCodeRON"),
            (e[(e.k_ECurrencyCodeMax = 48)] = "k_ECurrencyCodeMax");
        })(c || (c = {}));
      const n = [c.k_ECurrencyCodeTRY, c.k_ECurrencyCodeARS];
      function u() {
        return [
          c.k_ECurrencyCodeUSD,
          c.k_ECurrencyCodeGBP,
          c.k_ECurrencyCodeEUR,
          c.k_ECurrencyCodeCHF,
          c.k_ECurrencyCodeRUB,
          c.k_ECurrencyCodePLN,
          c.k_ECurrencyCodeBRL,
          c.k_ECurrencyCodeJPY,
          c.k_ECurrencyCodeNOK,
          c.k_ECurrencyCodeIDR,
          c.k_ECurrencyCodeMYR,
          c.k_ECurrencyCodePHP,
          c.k_ECurrencyCodeSGD,
          c.k_ECurrencyCodeTHB,
          c.k_ECurrencyCodeVND,
          c.k_ECurrencyCodeKRW,
          c.k_ECurrencyCodeUAH,
          c.k_ECurrencyCodeMXN,
          c.k_ECurrencyCodeCAD,
          c.k_ECurrencyCodeAUD,
          c.k_ECurrencyCodeNZD,
          c.k_ECurrencyCodeCNY,
          c.k_ECurrencyCodeINR,
          c.k_ECurrencyCodeCLP,
          c.k_ECurrencyCodePEN,
          c.k_ECurrencyCodeCOP,
          c.k_ECurrencyCodeZAR,
          c.k_ECurrencyCodeHKD,
          c.k_ECurrencyCodeTWD,
          c.k_ECurrencyCodeSAR,
          c.k_ECurrencyCodeAED,
          c.k_ECurrencyCodeILS,
          c.k_ECurrencyCodeKZT,
          c.k_ECurrencyCodeKWD,
          c.k_ECurrencyCodeQAR,
          c.k_ECurrencyCodeCRC,
          c.k_ECurrencyCodeUYU,
        ];
      }
      function o() {
        return [
          ...u(),
          ...n,
          c.k_ECurrencyCodeSEK,
          c.k_ECurrencyCodeBGN,
          c.k_ECurrencyCodeHRK,
          c.k_ECurrencyCodeCZK,
          c.k_ECurrencyCodeDKK,
          c.k_ECurrencyCodeHUF,
          c.k_ECurrencyCodeRON,
        ];
      }
    },
    29848: (e, r, C) => {
      var c;
      function n() {
        return [
          c.k_ERegionCodeCIS,
          c.k_ERegionCodeSAsia,
          c.k_ERegionCodeLATAM,
          c.k_ERegionCodeMENA,
        ];
      }
      C.d(r, { R: () => c, i: () => n }),
        (function (e) {
          (e[(e.k_ERegionCodeInvalid = 0)] = "k_ERegionCodeInvalid"),
            (e[(e.k_ERegionCodeCIS = 1)] = "k_ERegionCodeCIS"),
            (e[(e.k_ERegionCodeSAsia = 2)] = "k_ERegionCodeSAsia"),
            (e[(e.k_ERegionCodeLATAM = 3)] = "k_ERegionCodeLATAM"),
            (e[(e.k_ERegionCodeMENA = 4)] = "k_ERegionCodeMENA"),
            (e[(e.k_ERegionCodeMax = 5)] = "k_ERegionCodeMax");
        })(c || (c = {}));
    },
  },
]);
