/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [80702],
    {
      97825: (K, _, t) => {
        "use strict";
        t.d(_, { S: () => p });
        var e = t(35038),
          n = t(19563),
          v = t(56062),
          a = t(68312),
          C = t(51614),
          d = t(24179);
        function p(x) {
          const T = (0, a.KV)(),
            h = (0, d._7)();
          return (0, C.n)({
            mutationFn: () => g(T, x),
            onSuccess(l) {
              const [
                o,
                {
                  packageids_added: r,
                  appids_added: i,
                  purchase_result_detail: c,
                },
              ] = l;
              i && h(i);
            },
          });
        }
        async function g(x, T) {
          const h = e.w.Init(n.lO);
          h.Body().set_item_id(v.O4.fromObject(T));
          const l = await n._o.AddFreeLicense(x, h);
          return [l.GetEResult(), l.Body().toObject()];
        }
      },
      91405: (K, _, t) => {
        "use strict";
        t.d(_, { A: () => o, w: () => r });
        var e = t(72604),
          n = t(80411),
          v = t(68312),
          a = t(5827),
          C = t(40358),
          d = t(72865),
          p = t(75233),
          g = t(51614),
          x = t(48366),
          T = t(9843),
          h = t(78280),
          l = t(83665);
        function o(i, c, D, M, I) {
          return r(
            [{ packageid: i, bundleid: c, bIsGift: D, nAccountIDGiftee: M }],
            I,
          );
        }
        function r(i, c) {
          const D = (0, h.j4)(),
            M = (0, v.KV)(),
            I = (0, p.jE)(),
            { storeBrowseContext: f, dataLoader: U } = (0, a.yn)(),
            { country: Y } = f,
            W = (0, d.Gd)(c);
          return (0, g.n)({
            mutationFn: async () => {
              if (i.length == 0 || !i.every((z) => z.packageid || z.bundleid))
                throw "Every item must have a valid package or bundle id";
              let Z;
              if ((0, x.c2)(D)) {
                const [z, k] = await (0, T.ce)(M, Y, i, W);
                if (z == e.R) (Z = k.line_item_ids), (0, l.LN)(I, D, k.cart);
                else throw `AddItemsToAccountCart failed with ${z}`;
              } else if ((0, x.kx)(D)) {
                const z = i.map((te) => te.packageid).filter(n.z),
                  k = i.map((te) => te.bundleid).filter(n.z);
                if (k.length > 1)
                  throw "The anonymous cart can only take one bundle per call";
                const [q, F] = await (0, T.SI)(
                  M,
                  z.length > 0 ? z : void 0,
                  k[0],
                  i.some((te) => te.bIsGift),
                  i.find((te) => te.nAccountIDGiftee)?.nAccountIDGiftee,
                );
                if (q == e.R && F) {
                  const te = new Set(z),
                    N = new Set(k);
                  (Z =
                    F.lineitems
                      ?.filter(
                        (b) =>
                          (b.package_item &&
                            !b.package_item.gidbundle &&
                            te.has(b.package_item.packageid)) ||
                          (b.bundle_item && N.has(b.bundle_item.bundleid)),
                      )
                      ?.map((b) => b.gidlineitem) || []),
                    (0, l.LN)(I, D, (0, T.qS)(F));
                } else throw `AddItemsToAnonymousCart failed with ${q}`;
              } else throw "Invalid cart type";
              return Z;
            },
            onMutate: () => {
              (async () => {
                const Z = i.map((k) =>
                  k.packageid
                    ? { packageid: k.packageid }
                    : { bundleid: k.bundleid },
                );
                (
                  await Promise.all(Z.map((k) => I.fetchQuery((0, C.us)(U, k))))
                ).forEach((k, q) => {
                  const F =
                    k?.included_appids?.length == 1
                      ? { appid: k.included_appids[0] }
                      : Z[q];
                  I.prefetchQuery((0, C.AQ)(U, F)),
                    I.prefetchQuery((0, C.rK)(U, F));
                });
              })();
            },
          });
        }
      },
      55483: (K, _, t) => {
        "use strict";
        t.d(_, {
          yT: () => c,
          MR: () => R,
          AB: () => E,
          Rc: () => L,
          Gt: () => b,
          ko: () => s,
          fy: () => A,
          ec: () => z,
          aA: () => W,
          TB: () => Z,
        });
        var e = t(99412),
          n = t(76559),
          v = t(75233),
          a = t(80902),
          C = t(72604),
          d = t(72609);
        async function p(u) {
          const S = `${d.TS.COMMUNITY_BASE_URL}ogg/${u}/ajaxgetvanityandclanid/?origin=${l()}`;
          return h(S);
        }
        async function g(u) {
          const S = n.b.InitFromClanID(u),
            O = `${d.TS.COMMUNITY_BASE_URL}gid/${S.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${l()}`;
          return h(O);
        }
        async function x(u) {
          const S = `${d.TS.COMMUNITY_BASE_URL}groups/${u}/ajaxgetvanityandclanid/?origin=${l()}`;
          return h(S);
        }
        async function T(u) {
          const S = `${d.TS.COMMUNITY_BASE_URL}games/${u}/ajaxgetvanityandclanid/?origin=${l()}`;
          return h(S);
        }
        async function h(u) {
          const S = await fetch(u, { method: "GET" });
          if (S.status == 404) return null;
          if (!S.ok) throw new Error(`Server returned ${S.status}`);
          const O = await S.json();
          return O.success != C.R ? null : O;
        }
        function l() {
          return typeof window < "u" && typeof self < "u"
            ? self.origin
            : "ssr_server";
        }
        function o(u) {
          return ["clantoclaninfo", u];
        }
        function r(u) {
          return ["apptoclanid", u];
        }
        function i(u, S = "group") {
          return ["vanitytoclanid", S, u?.toLocaleLowerCase()];
        }
        function c(u) {
          const S = u?.[0];
          return (
            S == "clantoclaninfo" || S == "apptoclanid" || S == "vanitytoclanid"
          );
        }
        const D = new WeakSet();
        function M(u) {
          if (!D.has(u)) {
            D.add(u);
            for (const S of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              u.setQueryDefaults(S, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const I = new WeakMap();
        function f(u) {
          if (!u) return null;
          let S = I.get(u);
          return (
            S ||
              ((S = {
                ...u,
                clanSteamID: u.clanSteamIDString
                  ? new n.b(u.clanSteamIDString)
                  : n.b.InitFromClanID(u.clanAccountID),
              }),
              I.set(u, S)),
            S
          );
        }
        function U(u) {
          const { msg: S, success: O, ...B } = u;
          return {
            ...B,
            rss_language: u.rss_language ? u.rss_language : e.Bhc,
          };
        }
        function Y(u, S) {
          if (!S) return null;
          M(u);
          const O = U(S);
          return (
            u.setQueryData(o(O.clanAccountID), O),
            O.appid && u.setQueryData(r(O.appid), O.clanAccountID),
            O.vanity_url &&
              u.setQueryData(i(O.vanity_url, "group"), O.clanAccountID),
            O
          );
        }
        function W(u, S) {
          for (const O of S) Y(u, O);
        }
        function Z(u) {
          const S = (0, v.jE)();
          return (0, a.I)(z(u, S));
        }
        function z(u, S) {
          return (
            M(S),
            {
              queryKey: o(u ?? null),
              queryFn: async () => (u ? Y(S, await g(u)) : null),
              enabled: u !== void 0,
              select: f,
            }
          );
        }
        function k(u, S) {
          return (
            M(S),
            {
              queryKey: r(u),
              queryFn: async () => Y(S, await p(u))?.clanAccountID ?? null,
              enabled: !!u,
            }
          );
        }
        function q(u, S, O = "group") {
          return (
            M(S),
            {
              queryKey: i(u, O),
              queryFn: async () => {
                if (O == "store") {
                  const y = S.getQueryData(i(u, "group"));
                  if (y) return y;
                }
                const B = O == "store" ? await T(u) : await x(u);
                return Y(S, B)?.clanAccountID ?? null;
              },
              enabled: !!u,
            }
          );
        }
        function F(u) {
          return u.isPending ? void 0 : (u.data ?? null);
        }
        function te(u) {
          return Z(u.BIsClanAccount() ? u.GetAccountID() : void 0);
        }
        function N(u) {
          const S = useQueryClient(),
            O = useQuery(k(u, S));
          return Z(u ? F(O) : void 0);
        }
        function G(u, S = "group") {
          const O = useQueryClient(),
            B = useQuery(q(u, O, S));
          return Z(u ? F(B) : void 0);
        }
        function b(u, S) {
          if (u) return f(S.getQueryData(o(u))) ?? void 0;
        }
        function s(u, S) {
          if (u) return b(S.getQueryData(r(u)), S);
        }
        function A(u, S, O) {
          if (!u) return;
          const B = O ? [O] : ["store", "group"];
          for (const y of B) {
            const Q = b(S.getQueryData(i(u, y)), S);
            if (Q) return Q;
          }
        }
        async function R(u, S) {
          return u ? f(await S.fetchQuery(z(u, S))) : null;
        }
        async function E(u, S) {
          return u ? R(await S.fetchQuery(k(u, S)), S) : null;
        }
        async function L(u, S, O = "group") {
          return u ? R(await S.fetchQuery(q(u, S, O)), S) : null;
        }
      },
      29696: (K, _, t) => {
        "use strict";
        t.d(_, { LO: () => g, A5: () => C });
        var e = t(80902),
          n = t(72604),
          v = t(72609);
        async function a(x) {
          let T = { get_appids: !0, l: v.TS.LANGUAGE };
          const h = new URLSearchParams(T).toString(),
            l = `${v.TS.STORE_BASE_URL}curator/${x}/ajaxgetcreatorhomeinfo/?${h}`,
            o = await fetch(l, { method: "GET" });
          if (!o.ok) throw new Error(`Server returned ${o.status}`);
          const r = await o.json();
          return r.success != n.R ? null : r;
        }
        function C(x) {
          return (0, e.I)(d(x));
        }
        function d(x) {
          return {
            queryKey: p(x),
            queryFn: async () => {
              const T = await a(x);
              if (T) {
                const {
                  success: h,
                  err_msg: l,
                  warning: o,
                  warning_msg: r,
                  ...i
                } = T;
                return i;
              }
              return null;
            },
            enabled: !!x,
          };
        }
        function p(x) {
          return ["creatorhomebyaccount", x];
        }
        function g(x, T) {
          if (x.vanity) {
            switch (T) {
              case "publisher":
                return `${v.TS.STORE_BASE_URL}publisher/${x.vanity}/`;
              case "franchise":
                return `${v.TS.STORE_BASE_URL}franchise/${x.vanity}/`;
            }
            return `${v.TS.STORE_BASE_URL}developer/${x.vanity}/`;
          }
          return `${v.TS.STORE_BASE_URL}curator/${x.creator_clan_id}/`;
        }
      },
      86681: (K, _, t) => {
        "use strict";
        t.d(_, { J: () => a });
        var e = t(34104);
        const n = {
            [e.rg]: {},
            [e.CS]: { strSymbol: "$" },
            [e.dz]: { strSymbol: "\xA3" },
            [e.a4]: {
              strSymbol: "\u20AC",
              strDecimalSymbol: ",",
              strThousandsSeparator: " ",
            },
            [e.ln]: { strSymbol: "CHF" },
            [e.Fq]: {
              strSymbol: "\u0440\u0443\u0431.",
              bSuffixSymbol: !0,
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: "",
            },
            [e.sY]: {
              strSymbol: "z\u0142",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: " ",
            },
            [e.iU]: {
              strSymbol: "R$",
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.xm]: {
              strSymbol: "\xA5",
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
            },
            [e.KE]: {
              strSymbol: "kr",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.DP]: {
              strSymbol: "Rp",
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ".",
              strThousandsSeparator: " ",
            },
            [e.Jw]: { strSymbol: "RM" },
            [e.En]: { strSymbol: "P" },
            [e.wA]: { strSymbol: "S$" },
            [e.cm]: { strSymbol: "\u0E3F" },
            [e.aQ]: {
              strSymbol: "\u20AB",
              bWholeUnitsOnly: !0,
              bSuffixSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.yR]: {
              strSymbol: "\u20A9",
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
            },
            [e.bj]: {
              strSymbol: "TL",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.SJ]: {
              strSymbol: "\u20B4",
              bSuffixSymbol: !0,
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: " ",
            },
            [e.ds]: { strSymbol: "Mex$", bSpaceForSymbol: !0 },
            [e.cX]: { strSymbol: "CDN$", bSpaceForSymbol: !0 },
            [e.m1]: { strSymbol: "A$", bSpaceForSymbol: !0 },
            [e.WS]: { strSymbol: "NZ$", bSpaceForSymbol: !0 },
            [e.C6]: { strSymbol: "\xA5", bSpaceForSymbol: !0 },
            [e.T_]: {
              strSymbol: "\u20B9",
              bSpaceForSymbol: !0,
              bWholeUnitsOnly: !0,
            },
            [e.D5]: {
              strSymbol: "CLP$",
              bSpaceForSymbol: !0,
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.D4]: { strSymbol: "S/." },
            [e.G1]: {
              strSymbol: "COL$",
              bSpaceForSymbol: !0,
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.de]: {
              strSymbol: "R",
              bSpaceForSymbol: !0,
              strDecimalSymbol: ".",
              strThousandsSeparator: " ",
            },
            [e.bO]: { strSymbol: "HK$", bSpaceForSymbol: !0 },
            [e.Jb]: {
              strSymbol: "NT$",
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
            },
            [e.CR]: { strSymbol: "SR", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.Cv]: {
              strSymbol: "AED",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.JW]: { strSymbol: "kr", bSpaceForSymbol: !0, bSuffixSymbol: !0 },
            [e.aU]: {
              strSymbol: "ARS$",
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.G7]: { strSymbol: "\u20AA" },
            [e.jT]: { strSymbol: "Br" },
            [e.X0]: {
              strSymbol: "\u20B8",
              bSuffixSymbol: !0,
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: " ",
            },
            [e.Gx]: { strSymbol: "KD", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.w7]: { strSymbol: "QR", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.uZ]: {
              strSymbol: "\u20A1",
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.lK]: {
              strSymbol: "$U",
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.xt]: {
              strSymbol: "\u043B\u0432",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.Bz]: { strSymbol: "kn", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.OD]: {
              strSymbol: "K\u010D",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.S1]: {
              strSymbol: "kr.",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.HQ]: { strSymbol: "Ft", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.tn]: {
              strSymbol: "lei",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.mh]: {},
          },
          v = {
            strSymbol: "",
            bSuffixSymbol: !1,
            bSpaceForSymbol: !1,
            bWholeUnitsOnly: !1,
            eCurrency: e.rg,
            strDecimalSymbol: ".",
            strThousandsSeparator: ",",
          };
        function a(C) {
          return { ...v, ...n[C], eCurrency: C };
        }
      },
      1706: (K, _, t) => {
        "use strict";
        t.d(_, { d: () => v, x: () => n });
        var e = t(86681);
        function n(a, C) {
          const d = (0, e.J)(C);
          return v(a, d);
        }
        function v(a, C) {
          const {
              strSymbol: d,
              bSuffixSymbol: p,
              bSpaceForSymbol: g,
              bWholeUnitsOnly: x,
              strDecimalSymbol: T,
              strThousandsSeparator: h,
            } = C,
            l = a < 0,
            o = x && a % 100 === 0;
          l && (a = -a);
          const r = [];
          for (let I = 0; I < 2; I++)
            o || r.push(a % 10), (a = Math.floor(a / 10));
          !o && T && r.push(T);
          let i = 0;
          do
            i++ % 3 === 0 && i > 2 && h && r.push(h),
              r.push(a % 10),
              (a = Math.floor(a / 10));
          while (a > 0);
          const c = r.reverse().join(""),
            D = g ? " " : "",
            M = l ? "-" : "";
          return p ? `${M}${c}${D}${d}` : `${M}${d}${D}${c}`;
        }
      },
      33220: (K, _, t) => {
        "use strict";
        t.d(_, { rt: () => n });
        var e = t(34104);
        function n(h) {
          switch (h?.toUpperCase()) {
            case "AE":
              return e.Cv;
            case "AU":
              return e.m1;
            case "BR":
              return e.iU;
            case "CA":
              return e.cX;
            case "CH":
            case "LI":
              return e.ln;
            case "CL":
              return e.D5;
            case "CN":
            case "XC":
              return e.C6;
            case "CO":
              return e.G1;
            case "CR":
              return e.uZ;
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
              return e.a4;
            case "GB":
            case "GG":
            case "GS":
            case "IM":
            case "JE":
              return e.dz;
            case "HK":
              return e.bO;
            case "ID":
              return e.DP;
            case "IL":
              return e.G7;
            case "IN":
              return e.T_;
            case "JP":
              return e.xm;
            case "KR":
              return e.yR;
            case "KW":
              return e.Gx;
            case "KZ":
              return e.X0;
            case "MX":
              return e.ds;
            case "MY":
              return e.Jw;
            case "NO":
              return e.KE;
            case "NZ":
              return e.WS;
            case "PE":
              return e.D4;
            case "PH":
              return e.En;
            case "PL":
              return e.sY;
            case "QA":
              return e.w7;
            case "RU":
              return e.Fq;
            case "SA":
              return e.CR;
            case "SG":
              return e.wA;
            case "TH":
              return e.cm;
            case "TW":
              return e.Jb;
            case "UA":
              return e.SJ;
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
              return e.CS;
            case "UY":
              return e.lK;
            case "VN":
              return e.aQ;
            case "ZA":
              return e.de;
            default:
              return console.assert(!1, `Unhandled country code: ${h}`), e.CS;
          }
        }
        function v(h) {
          switch (h) {
            case k_ECurrencyCodeGBP:
              return "GBP";
            case k_ECurrencyCodeEUR:
              return "EUR";
            case k_ECurrencyCodeCHF:
              return "CHF";
            case k_ECurrencyCodeRUB:
              return "RUB";
            case k_ECurrencyCodePLN:
              return "PLN";
            case k_ECurrencyCodeBRL:
              return "BRL";
            case k_ECurrencyCodeJPY:
              return "JPY";
            case k_ECurrencyCodeNOK:
              return "NOK";
            case k_ECurrencyCodeIDR:
              return "IDR";
            case k_ECurrencyCodeMYR:
              return "MYR";
            case k_ECurrencyCodePHP:
              return "PHP";
            case k_ECurrencyCodeSGD:
              return "SGD";
            case k_ECurrencyCodeTHB:
              return "THB";
            case k_ECurrencyCodeVND:
              return "VND";
            case k_ECurrencyCodeKRW:
              return "KRW";
            case k_ECurrencyCodeTRY:
              return "TRY";
            case k_ECurrencyCodeUAH:
              return "UAH";
            case k_ECurrencyCodeMXN:
              return "MXN";
            case k_ECurrencyCodeCAD:
              return "CAD";
            case k_ECurrencyCodeAUD:
              return "AUD";
            case k_ECurrencyCodeNZD:
              return "NZD";
            case k_ECurrencyCodeCNY:
              return "CNY";
            case k_ECurrencyCodeINR:
              return "INR";
            case k_ECurrencyCodeCLP:
              return "CLP";
            case k_ECurrencyCodePEN:
              return "PEN";
            case k_ECurrencyCodeCOP:
              return "COP";
            case k_ECurrencyCodeZAR:
              return "ZAR";
            case k_ECurrencyCodeHKD:
              return "HKD";
            case k_ECurrencyCodeTWD:
              return "TWD";
            case k_ECurrencyCodeSAR:
              return "SAR";
            case k_ECurrencyCodeAED:
              return "AED";
            case k_ECurrencyCodeSEK:
              return "SEK";
            case k_ECurrencyCodeARS:
              return "ARS";
            case k_ECurrencyCodeILS:
              return "ILS";
            case k_ECurrencyCodeBYN:
              return "BYN";
            case k_ECurrencyCodeKZT:
              return "KZT";
            case k_ECurrencyCodeKWD:
              return "KWD";
            case k_ECurrencyCodeQAR:
              return "QAR";
            case k_ECurrencyCodeCRC:
              return "CRC";
            case k_ECurrencyCodeUYU:
              return "UYU";
            case k_ECurrencyCodeBGN:
              return "BGN";
            case k_ECurrencyCodeHRK:
              return "HRK";
            case k_ECurrencyCodeCZK:
              return "CZK";
            case k_ECurrencyCodeDKK:
              return "DKK";
            case k_ECurrencyCodeHUF:
              return "HUF";
            case k_ECurrencyCodeRON:
              return "RON";
            default:
              return "USD";
          }
        }
        function a(h) {
          switch (h) {
            case k_ECurrencyCodeUSD:
              return "US Dollar";
            case k_ECurrencyCodeGBP:
              return "GB Pounds";
            case k_ECurrencyCodeEUR:
              return "Euros";
            case k_ECurrencyCodeCHF:
              return "Swiss Francs";
            case k_ECurrencyCodeRUB:
              return "Russian Rubles";
            case k_ECurrencyCodePLN:
              return "Polish zloty";
            case k_ECurrencyCodeBRL:
              return "Brazilian Reals";
            case k_ECurrencyCodeJPY:
              return "Japanese Yen";
            case k_ECurrencyCodeNOK:
              return "Norwegian Krone";
            case k_ECurrencyCodeIDR:
              return "Indonesian Rupiah";
            case k_ECurrencyCodeMYR:
              return "Malaysian Ringgit";
            case k_ECurrencyCodePHP:
              return "Philippine Peso";
            case k_ECurrencyCodeSGD:
              return "Singapore Dollar";
            case k_ECurrencyCodeTHB:
              return "Thai Baht";
            case k_ECurrencyCodeVND:
              return "Vietnamese Dong";
            case k_ECurrencyCodeKRW:
              return "Korean Won";
            case k_ECurrencyCodeTRY:
              return "Turkish Lira";
            case k_ECurrencyCodeUAH:
              return "Ukrainian Hryvnia";
            case k_ECurrencyCodeMXN:
              return "Mexican Peso";
            case k_ECurrencyCodeCAD:
              return "Canadian Dollar";
            case k_ECurrencyCodeAUD:
              return "Australian Dollar";
            case k_ECurrencyCodeNZD:
              return "New Zealand Dollar";
            case k_ECurrencyCodeCNY:
              return "Chinese Yuan";
            case k_ECurrencyCodeINR:
              return "Indian Rupee";
            case k_ECurrencyCodeCLP:
              return "Chilean Peso";
            case k_ECurrencyCodePEN:
              return "Peruvian Sol";
            case k_ECurrencyCodeCOP:
              return "Colombian Peso";
            case k_ECurrencyCodeZAR:
              return "South African Rand";
            case k_ECurrencyCodeHKD:
              return "Hong Kong Dollar";
            case k_ECurrencyCodeTWD:
              return "Taiwanese Dollar";
            case k_ECurrencyCodeSAR:
              return "Saudi Arabian Riyal";
            case k_ECurrencyCodeAED:
              return "Emirati Dirham";
            case k_ECurrencyCodeSEK:
              return "Swedish Krona";
            case k_ECurrencyCodeARS:
              return "Argentine Peso";
            case k_ECurrencyCodeILS:
              return "Israeli New Shequel";
            case k_ECurrencyCodeBYN:
              return "Belarusian Ruble";
            case k_ECurrencyCodeKZT:
              return "Kazakhstani Tenge";
            case k_ECurrencyCodeKWD:
              return "Kuwaiti Dinar";
            case k_ECurrencyCodeQAR:
              return "Qatari Rial";
            case k_ECurrencyCodeCRC:
              return "Costa Rican Colon";
            case k_ECurrencyCodeUYU:
              return "Uruguayan Peso";
            case k_ECurrencyCodeBGN:
              return "Bulgarian lev";
            case k_ECurrencyCodeHRK:
              return "Croatian kuna";
            case k_ECurrencyCodeCZK:
              return "Czech koruna";
            case k_ECurrencyCodeDKK:
              return "Danish krone";
            case k_ECurrencyCodeHUF:
              return "Hungarian forint";
            case k_ECurrencyCodeRON:
              return "Romanian leu";
            default:
              return "";
          }
        }
        function C(h, l = k_ERegionCodeInvalid) {
          switch (h) {
            case k_ECurrencyCodeGBP:
              return "gbp";
            case k_ECurrencyCodeEUR:
              return "eur";
            case k_ECurrencyCodeCHF:
              return "chf";
            case k_ECurrencyCodeRUB:
              return "rub";
            case k_ECurrencyCodePLN:
              return "pln";
            case k_ECurrencyCodeBRL:
              return "brl";
            case k_ECurrencyCodeJPY:
              return "jpy";
            case k_ECurrencyCodeNOK:
              return "nok";
            case k_ECurrencyCodeIDR:
              return "idr";
            case k_ECurrencyCodeMYR:
              return "myr";
            case k_ECurrencyCodePHP:
              return "php";
            case k_ECurrencyCodeSGD:
              return "sgd";
            case k_ECurrencyCodeTHB:
              return "thb";
            case k_ECurrencyCodeVND:
              return "vnd";
            case k_ECurrencyCodeKRW:
              return "krw";
            case k_ECurrencyCodeTRY:
              return "try";
            case k_ECurrencyCodeUAH:
              return "uah";
            case k_ECurrencyCodeMXN:
              return "mxn";
            case k_ECurrencyCodeCAD:
              return "cad";
            case k_ECurrencyCodeAUD:
              return "aud";
            case k_ECurrencyCodeNZD:
              return "nzd";
            case k_ECurrencyCodeCNY:
              return "cny";
            case k_ECurrencyCodeINR:
              return "inr";
            case k_ECurrencyCodeCLP:
              return "clp";
            case k_ECurrencyCodePEN:
              return "pen";
            case k_ECurrencyCodeCOP:
              return "cop";
            case k_ECurrencyCodeZAR:
              return "zar";
            case k_ECurrencyCodeHKD:
              return "hkd";
            case k_ECurrencyCodeTWD:
              return "twd";
            case k_ECurrencyCodeSAR:
              return "sar";
            case k_ECurrencyCodeAED:
              return "aed";
            case k_ECurrencyCodeSEK:
              return "sek";
            case k_ECurrencyCodeARS:
              return "ars";
            case k_ECurrencyCodeILS:
              return "ils";
            case k_ECurrencyCodeBYN:
              return "byn";
            case k_ECurrencyCodeKZT:
              return "kzt";
            case k_ECurrencyCodeKWD:
              return "kwd";
            case k_ECurrencyCodeQAR:
              return "qar";
            case k_ECurrencyCodeCRC:
              return "crc";
            case k_ECurrencyCodeUYU:
              return "uyu";
            case k_ECurrencyCodeBGN:
              return "bgn";
            case k_ECurrencyCodeHRK:
              return "hrk";
            case k_ECurrencyCodeCZK:
              return "czk";
            case k_ECurrencyCodeDKK:
              return "dkk";
            case k_ECurrencyCodeHUF:
              return "huf";
            case k_ECurrencyCodeRON:
              return "ron";
            default:
              return l == k_ERegionCodeCIS
                ? "usd_cis"
                : l == k_ERegionCodeSAsia
                  ? "usd_sasia"
                  : l == k_ERegionCodeLATAM
                    ? "usd_latam"
                    : l == k_ERegionCodeMENA
                      ? "usd_mena"
                      : "usd";
          }
        }
        function d(h) {
          switch (h) {
            case k_ERegionCodeCIS:
              return "CIS";
            case k_ERegionCodeSAsia:
              return "SASIA";
            case k_ERegionCodeLATAM:
              return "LATAM";
            case k_ERegionCodeMENA:
              return "MENA";
          }
          return "Unknown";
        }
        function p(h) {
          switch (h) {
            case "USD":
              return k_ECurrencyCodeUSD;
            case "GBP":
              return k_ECurrencyCodeGBP;
            case "EUR":
              return k_ECurrencyCodeEUR;
            case "CHF":
              return k_ECurrencyCodeCHF;
            case "RUB":
              return k_ECurrencyCodeRUB;
            case "PLN":
              return k_ECurrencyCodePLN;
            case "BRL":
              return k_ECurrencyCodeBRL;
            case "JPY":
              return k_ECurrencyCodeJPY;
            case "NOK":
              return k_ECurrencyCodeNOK;
            case "IDR":
              return k_ECurrencyCodeIDR;
            case "MYR":
              return k_ECurrencyCodeMYR;
            case "PHP":
              return k_ECurrencyCodePHP;
            case "SGD":
              return k_ECurrencyCodeSGD;
            case "THB":
              return k_ECurrencyCodeTHB;
            case "VND":
              return k_ECurrencyCodeVND;
            case "KRW":
              return k_ECurrencyCodeKRW;
            case "TRY":
              return k_ECurrencyCodeTRY;
            case "UAH":
              return k_ECurrencyCodeUAH;
            case "MXN":
              return k_ECurrencyCodeMXN;
            case "CAD":
              return k_ECurrencyCodeCAD;
            case "AUD":
              return k_ECurrencyCodeAUD;
            case "NZD":
              return k_ECurrencyCodeNZD;
            case "CNY":
              return k_ECurrencyCodeCNY;
            case "INR":
              return k_ECurrencyCodeINR;
            case "CLP":
              return k_ECurrencyCodeCLP;
            case "PEN":
              return k_ECurrencyCodePEN;
            case "COP":
              return k_ECurrencyCodeCOP;
            case "ZAR":
              return k_ECurrencyCodeZAR;
            case "HKD":
              return k_ECurrencyCodeHKD;
            case "TWD":
              return k_ECurrencyCodeTWD;
            case "SAR":
              return k_ECurrencyCodeSAR;
            case "AED":
              return k_ECurrencyCodeAED;
            case "SEK":
              return k_ECurrencyCodeSEK;
            case "ARS":
              return k_ECurrencyCodeARS;
            case "ILS":
              return k_ECurrencyCodeILS;
            case "BYN":
              return k_ECurrencyCodeBYN;
            case "KZT":
              return k_ECurrencyCodeKZT;
            case "KWD":
              return k_ECurrencyCodeKWD;
            case "QAR":
              return k_ECurrencyCodeQAR;
            case "CRC":
              return k_ECurrencyCodeCRC;
            case "UYU":
              return k_ECurrencyCodeUYU;
            case "BGN":
              return k_ECurrencyCodeBGN;
            case "HRK":
              return k_ECurrencyCodeHRK;
            case "CZK":
              return k_ECurrencyCodeCZK;
            case "DKK":
              return k_ECurrencyCodeDKK;
            case "HUF":
              return k_ECurrencyCodeHUF;
            case "RON":
              return k_ECurrencyCodeRON;
            case "USD_CIS":
            case "USD_MENA":
            case "USD_LATAM":
            case "USD_SASIA":
              return k_ECurrencyCodeUSD;
            default:
              return g(h)
                ? p(h.substring(0, 3))
                : Number.isInteger(Number(h))
                  ? Number(h)
                  : (AssertMsg(
                      !1,
                      `ASCIICurrencyCodeToECurrencyCode unexpected code ${h}`,
                    ),
                    k_ECurrencyCodeInvalid);
          }
        }
        function g(h) {
          return h.length == 6;
        }
        function x(h) {
          const l = p(h.slice(0, 3)),
            o = h.slice(4, 6);
          return { eCurrencyCode: l, strCountryCode: o };
        }
        function T(h) {
          const l = p(h.toUpperCase());
          return `${a(l)} (${h})`;
        }
      },
      34104: (K, _, t) => {
        "use strict";
        t.d(_, {
          Bz: () => ue,
          C6: () => Z,
          CR: () => b,
          CS: () => n,
          Cv: () => s,
          D4: () => q,
          D5: () => k,
          DP: () => h,
          En: () => o,
          Fq: () => d,
          G1: () => F,
          G7: () => E,
          Gx: () => S,
          HQ: () => P,
          JW: () => A,
          Jb: () => G,
          Jw: () => l,
          KE: () => T,
          OD: () => X,
          S1: () => H,
          SJ: () => I,
          T_: () => z,
          WS: () => W,
          X0: () => u,
          a4: () => a,
          aQ: () => c,
          aU: () => R,
          bO: () => N,
          bj: () => M,
          cX: () => U,
          cm: () => i,
          de: () => te,
          ds: () => f,
          dz: () => v,
          iU: () => g,
          jT: () => L,
          lK: () => y,
          ln: () => C,
          m1: () => Y,
          mh: () => w,
          rg: () => e,
          sY: () => p,
          tn: () => m,
          uZ: () => B,
          w7: () => O,
          wA: () => r,
          xm: () => x,
          xt: () => Q,
          yR: () => D,
        });
        const e = 0,
          n = 1,
          v = 2,
          a = 3,
          C = 4,
          d = 5,
          p = 6,
          g = 7,
          x = 8,
          T = 9,
          h = 10,
          l = 11,
          o = 12,
          r = 13,
          i = 14,
          c = 15,
          D = 16,
          M = 17,
          I = 18,
          f = 19,
          U = 20,
          Y = 21,
          W = 22,
          Z = 23,
          z = 24,
          k = 25,
          q = 26,
          F = 27,
          te = 28,
          N = 29,
          G = 30,
          b = 31,
          s = 32,
          A = 33,
          R = 34,
          E = 35,
          L = 36,
          u = 37,
          S = 38,
          O = 39,
          B = 40,
          y = 41,
          Q = 42,
          ue = 43,
          X = 44,
          H = 45,
          P = 46,
          m = 47,
          w = 48;
        function j(de) {
          return typeof de == "number" && de > e && de < w;
        }
        function ee() {
          return [
            "USD",
            "GBP",
            "EUR",
            "CHF",
            "RUB",
            "PLN",
            "BRL",
            "JPY",
            "NOK",
            "IDR",
            "MYR",
            "PHP",
            "SGD",
            "THB",
            "VND",
            "KRW",
            "TRY",
            "UAH",
            "MXN",
            "CAD",
            "AUD",
            "NZD",
            "CNY",
            "INR",
            "CLP",
            "PEN",
            "COP",
            "ZAR",
            "HKD",
            "TWD",
            "SAR",
            "AED",
            "SEK",
            "ARS",
            "ILS",
            "BYN",
            "KZT",
            "KWD",
            "QAR",
            "CRC",
            "UYU",
            "BGN",
            "HRK",
            "CZK",
            "DKK",
            "HUF",
            "RON",
          ];
        }
        const ae = [M, R];
        function le() {
          return [
            n,
            v,
            a,
            C,
            d,
            p,
            g,
            x,
            T,
            h,
            l,
            o,
            r,
            i,
            c,
            D,
            I,
            f,
            U,
            Y,
            W,
            Z,
            z,
            k,
            q,
            F,
            te,
            N,
            G,
            b,
            s,
            E,
            u,
            S,
            O,
            B,
            y,
          ];
        }
        function ce() {
          return [...le(), ...ae, A, Q, ue, X, H, P, m];
        }
      },
      16114: (K, _, t) => {
        "use strict";
        t.d(_, {
          a8: () => p,
          cc: () => U,
          TW: () => T,
          KC: () => M,
          IH: () => b,
          $z: () => o,
          _l: () => r,
          R2: () => q,
          Hq: () => x,
        });
        var e = t(84346);
        const n = {};
        (n.arabic = () => t.e(6696).then(t.t.bind(t, 6696, 19))),
          (n.brazilian = () => t.e(58906).then(t.t.bind(t, 58906, 19))),
          (n.bulgarian = () => t.e(53473).then(t.t.bind(t, 53473, 19))),
          (n.czech = () => t.e(83899).then(t.t.bind(t, 83899, 19))),
          (n.danish = () => t.e(84925).then(t.t.bind(t, 84925, 19))),
          (n.dutch = () => t.e(69902).then(t.t.bind(t, 69902, 19))),
          (n.english = () => t.e(80716).then(t.t.bind(t, 80716, 19))),
          (n.finnish = () => t.e(81663).then(t.t.bind(t, 81663, 19))),
          (n.french = () => t.e(48484).then(t.t.bind(t, 48484, 19))),
          (n.german = () => t.e(66810).then(t.t.bind(t, 66810, 19))),
          (n.greek = () => t.e(13744).then(t.t.bind(t, 13744, 19))),
          (n.hungarian = () => t.e(62101).then(t.t.bind(t, 62101, 19))),
          (n.indonesian = () => t.e(68948).then(t.t.bind(t, 68948, 19))),
          (n.italian = () => t.e(2916).then(t.t.bind(t, 2916, 19))),
          (n.japanese = () => t.e(40195).then(t.t.bind(t, 40195, 19))),
          (n.koreana = () => t.e(84259).then(t.t.bind(t, 84259, 19))),
          (n.latam = () => t.e(24475).then(t.t.bind(t, 24475, 19))),
          (n.malay = () => t.e(60580).then(t.t.bind(t, 60580, 19))),
          (n.norwegian = () => t.e(36884).then(t.t.bind(t, 36884, 19))),
          (n.polish = () => t.e(15269).then(t.t.bind(t, 15269, 19))),
          (n.portuguese = () => t.e(96865).then(t.t.bind(t, 96865, 19))),
          (n.romanian = () => t.e(71391).then(t.t.bind(t, 71391, 19))),
          (n.russian = () => t.e(64933).then(t.t.bind(t, 64933, 19))),
          (n.sc_schinese = () => t.e(27503).then(t.t.bind(t, 27503, 19))),
          (n.schinese = () => t.e(44768).then(t.t.bind(t, 44768, 19))),
          (n.spanish = () => t.e(20876).then(t.t.bind(t, 20876, 19))),
          (n.swedish = () => t.e(75181).then(t.t.bind(t, 75181, 19))),
          (n.tchinese = () => t.e(89779).then(t.t.bind(t, 89779, 19))),
          (n.thai = () => t.e(98970).then(t.t.bind(t, 98970, 19))),
          (n.turkish = () => t.e(87996).then(t.t.bind(t, 87996, 19))),
          (n.ukrainian = () => t.e(47306).then(t.t.bind(t, 47306, 19))),
          (n.vietnamese = () => t.e(72539).then(t.t.bind(t, 72539, 19)));
        async function v(s) {
          if (n[s]) return n[s]();
        }
        var a = t(31275);
        const C = (0, a.l)(v);
        var d = t(44983),
          p = ((s) => (
            (s[(s.None = 0)] = "None"),
            (s[(s.Ago = 1)] = "Ago"),
            (s[(s.Remaining = 2)] = "Remaining"),
            s
          ))(p || {});
        function g(s, A) {
          const R = Date.now() / 1e3 - s;
          return x(R, A);
        }
        function x(s, A, R) {
          let E;
          typeof A == "boolean"
            ? (E = {
                eSuffix: A ? 0 : 1,
                bForceSingleUnits: R,
                bHighGranularity: !1,
              })
            : (E = {
                eSuffix: 1,
                bForceSingleUnits: !1,
                bHighGranularity: !1,
                ...A,
              });
          let L = "TimeInterval_";
          E.eSuffix == 1
            ? (L = "TimeSince_")
            : E.eSuffix == 2 && (L = "TimeRemaining_");
          let u = (S) => Math.floor(S);
          if (
            (E.bAllowDecimal && (u = (S) => Math.round(S * 10) / 10),
            s >= d.Kp.PerYear * 2)
          )
            return C.Localize(`#${L}XYears`, u(s / d.Kp.PerYear));
          if (s >= d.Kp.PerYear)
            return (
              (s -= d.Kp.PerYear),
              s >= d.Kp.PerMonth * 2 && !E.bForceSingleUnits
                ? C.Localize(`#${L}1YearXMonths`, u(s / d.Kp.PerMonth))
                : C.Localize(`#${L}1Year`)
            );
          if (s >= d.Kp.PerMonth * 2)
            return C.Localize(`#${L}XMonths`, u(s / d.Kp.PerMonth));
          if (s >= d.Kp.PerWeek * 2)
            return C.Localize(`#${L}XWeeks`, u(s / d.Kp.PerWeek));
          if (s >= d.Kp.PerWeek)
            return C.Localize(`#${L}1Week`, u(s / d.Kp.PerWeek));
          if (s >= d.Kp.PerDay * 2)
            return C.Localize(`#${L}XDays`, u(s / d.Kp.PerDay));
          if (s >= d.Kp.PerDay)
            return (
              (s -= d.Kp.PerDay),
              s >= d.Kp.PerHour * 2 && !E.bForceSingleUnits
                ? C.Localize(`#${L}1DayXHours`, u(s / d.Kp.PerHour))
                : C.Localize(`#${L}1Day`)
            );
          if (s >= d.Kp.PerHour * 2)
            return C.Localize(`#${L}XHours`, u(s / d.Kp.PerHour));
          if (s >= d.Kp.PerHour)
            return (
              (s -= d.Kp.PerHour),
              s >= d.Kp.PerMinute * 2 && !E.bForceSingleUnits
                ? C.Localize(`#${L}1HourXMinutes`, u(s / d.Kp.PerMinute))
                : C.Localize(`#${L}1Hour`)
            );
          if (s >= d.Kp.PerMinute * 2) {
            const S = Math.floor(s / d.Kp.PerMinute),
              O = s % d.Kp.PerMinute;
            return !E.bHighGranularity || O == 0
              ? C.Localize(`#${L}XMinutes`, u(s / d.Kp.PerMinute))
              : O == 1
                ? C.Localize(`#${L}XMinutes1Second`, S)
                : C.Localize(`#${L}XMinutesXSeconds`, S, O);
          } else if (s >= d.Kp.PerMinute) {
            const S = s % d.Kp.PerMinute;
            return !E.bHighGranularity || S == 0
              ? C.Localize(`#${L}1Minute`)
              : S == 1
                ? C.Localize(`#${L}1Minute1Second`)
                : C.Localize(`#${L}1MinuteXSeconds`, S);
          } else
            return E.bHighGranularity
              ? s == 1
                ? C.Localize(`#${L}1Second`)
                : C.Localize(`#${L}XSeconds`, s)
              : C.Localize(`#${L}LessThanAMinute`);
        }
        function T(s, A, R) {
          let E;
          A === void 0 || A === !0 || A === !1
            ? (E = {
                weekday: R ? "long" : "short",
                year: A ? void 0 : "numeric",
              })
            : (E = A);
          let L = new Date(s * 1e3);
          const u = {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
            ...E,
          };
          return L.toLocaleDateString((0, e.J)(), u);
        }
        function h(s, A) {
          let R = new Date(s * 1e3),
            E = new Date(A * 1e3);
          return R.getFullYear() != E.getFullYear() ||
            R.getMonth() != E.getMonth() ||
            R.getDate() != E.getDate()
            ? l(s, A)
            : M(s) + " - " + M(A);
        }
        function l(s, A) {
          let R = new Date(s * 1e3),
            E = new Date(A * 1e3);
          const L = new Date();
          if (
            R.getFullYear() != E.getFullYear() ||
            L.getFullYear() == R.getFullYear()
          )
            return `${o(s)} - ${o(A)}`;
          const u = { month: "short", day: "numeric" },
            S = R.toLocaleDateString(GetPreferredLocales(), u) + " - ";
          if (R.getMonth() == E.getMonth()) {
            const O = { day: "numeric" };
            return S + E.toLocaleDateString(GetPreferredLocales(), O);
          } else return S + E.toLocaleDateString(GetPreferredLocales(), u);
        }
        function o(s, A) {
          let R = new Date(s * 1e3);
          const E = { year: "numeric", month: "short", day: "numeric", ...A };
          return R.toLocaleDateString((0, e.J)(), E);
        }
        function r(s, A) {
          const {
              fullmonthname: R = !1,
              bUseRelativeNames: E = !0,
              bIncludeDayName: L = !1,
            } = A ?? {},
            u = new Date(),
            S = new Date(s * 1e3);
          if (S.getFullYear() != u.getFullYear())
            return o(s, { month: R ? "long" : "short" });
          const O = new Date();
          if ((O.setHours(0, 0, 0, 0), E)) {
            if (S >= O) {
              if ((O.setDate(O.getDate() + 1), S < O))
                return C.Localize("#Time_Today");
              if ((O.setDate(O.getDate() + 1), S < O))
                return C.Localize("#Time_Tomorrow");
            } else if ((O.setDate(O.getDate() - 1), S >= O))
              return C.Localize("#Time_Yesterday");
          }
          const B = { month: R ? "long" : "short", day: "numeric" };
          return L && (B.weekday = "long"), S.toLocaleDateString((0, e.J)(), B);
        }
        function i(s) {
          let A = new Date(s * 1e3);
          return z(A);
        }
        function c(s) {
          let A = new Date(s * 1e3);
          return Z(A);
        }
        function D(s) {
          const A = new Date();
          A.setHours(15);
          const R = A.toLocaleTimeString(s, { hour: "numeric" }),
            E = A.toLocaleTimeString(s, { hour: "numeric", hour12: !1 });
          return R == E;
        }
        function M(s, A, R) {
          const E = new Date(s * 1e3),
            L = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
            u = { hour: "numeric", minute: "2-digit" },
            S = (0, e.J)(),
            B = { ...(A?.bForce24HourClock || D(S[0]) ? L : u), ...R };
          return E.toLocaleTimeString(S, B);
        }
        function I(s, A, R) {
          const E = new Date(s * 1e3);
          return f(E, !1, !1) + " " + M(s, { bForce24HourClock: A }) + " " + R;
        }
        function f(s, A = !1, R = !0) {
          const E = {
            weekday: R ? "long" : "short",
            day: "numeric",
            month: A ? "long" : "short",
          };
          return s.toLocaleDateString(GetPreferredLocales(), E);
        }
        function U(s) {
          return s.toLocaleDateString((0, e.J)(), { weekday: "long" });
        }
        function Y(s) {
          return s.toLocaleDateString(GetPreferredLocales(), { month: "long" });
        }
        function W(s) {
          return s.toLocaleDateString(GetPreferredLocales(), {
            month: "short",
          });
        }
        function Z(s) {
          return s.toLocaleDateString(GetPreferredLocales(), {
            year: "numeric",
          });
        }
        function z(s) {
          return s.toLocaleDateString(GetPreferredLocales(), {
            month: "long",
            year: "numeric",
          });
        }
        function k(s, A) {
          switch (s.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return PkgLocalization.Localize(
                A
                  ? "#Time_QuarterOfYear_Expanded_Q1"
                  : "#Time_QuarterOfYear_Q1",
                s.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return PkgLocalization.Localize(
                A
                  ? "#Time_QuarterOfYear_Expanded_Q2"
                  : "#Time_QuarterOfYear_Q2",
                s.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return PkgLocalization.Localize(
                A
                  ? "#Time_QuarterOfYear_Expanded_Q3"
                  : "#Time_QuarterOfYear_Q3",
                s.getUTCFullYear(),
              );
            default:
              return PkgLocalization.Localize(
                A
                  ? "#Time_QuarterOfYear_Expanded_Q4"
                  : "#Time_QuarterOfYear_Q4",
                s.getUTCFullYear(),
              );
          }
        }
        function q(s) {
          const A = Math.floor(s / d.Kp.PerYear),
            R = Math.floor(s / d.Kp.PerMonth),
            E = Math.floor((s % d.Kp.PerMonth) / d.Kp.PerDay),
            L = Math.floor((s % d.Kp.PerDay) / d.Kp.PerHour),
            u = Math.floor((s % d.Kp.PerHour) / d.Kp.PerMinute);
          return (
            (s = s % d.Kp.PerMinute),
            A > 0
              ? C.Localize("#TimeRemaining_MoreThanOneYear")
              : R > 0
                ? C.Localize("#TimeRemaining_MonthsDays", R, E)
                : E > 0
                  ? C.Localize(
                      "#TimeRemaining_DaysHoursMinutes",
                      E,
                      L.toString().padStart(2, "0"),
                      u.toString().padStart(2, "0"),
                    )
                  : L > 0
                    ? C.Localize(
                        "#TimeRemaining_HoursMinutesSeconds",
                        L.toString().padStart(2, "0"),
                        u.toString().padStart(2, "0"),
                        s.toString().padStart(2, "0"),
                      )
                    : C.Localize(
                        "#TimeRemaining_MinutesSeconds",
                        u.toString().padStart(2, "0"),
                        s.toString().padStart(2, "0"),
                      )
          );
        }
        function F(s, A, R) {
          for (; s.length < A; ) s = R + s;
          return s;
        }
        function te(s) {
          return (
            (s === void 0 || isNaN(s)) && (s = 0),
            {
              hours: Math.floor(s / 3600),
              minutes: Math.floor((s % 3600) / 60),
              seconds: Math.floor(s % 60),
              fraction: s - Math.floor(s),
            }
          );
        }
        function N(s, A, R) {
          let E = s < 0;
          s = E ? 0 - s : s;
          const L = te(s),
            u = L.fraction.toFixed(2).split(".")[1],
            S = A ?? !0;
          let O = !S || u == "00";
          E &&
            L.hours == 0 &&
            L.minutes == 0 &&
            L.seconds == 0 &&
            O &&
            (E = !1);
          let B = "";
          if (L.hours) {
            const y = L.hours.toString(),
              Q = F(L.minutes.toString(), 2, "0"),
              ue = F(L.seconds.toString(), 2, "0"),
              X = S
                ? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
                : "#Duration_Abbreviation_HourMinuteSecond";
            B = PkgLocalization.Localize(X, y, Q, ue, u);
          } else if (L.minutes) {
            const y = L.minutes.toString(),
              Q = F(L.seconds.toString(), 2, "0"),
              ue = S
                ? "#Duration_Abbreviation_MinuteSecondMillisecond"
                : "#Duration_Abbreviation_MinuteSecond";
            B = PkgLocalization.Localize(ue, y, Q, u);
          } else if (L.seconds) {
            const y = L.seconds.toString(),
              Q = S
                ? "#Duration_Abbreviation_SecondMillisecond"
                : "#Duration_Abbreviation_Second";
            B = PkgLocalization.Localize(Q, y, u);
          }
          return (
            E &&
              (R
                ? (B = PkgLocalization.Localize("#Duration_WrittenNegation", B))
                : (B = "-" + B)),
            B
          );
        }
        function G(s, A, R) {
          let E = s < 0;
          s = E ? 0 - s : s;
          const L = te(s),
            u = F(L.seconds.toString(), 2, "0"),
            S = L.fraction.toFixed(2).split(".")[1],
            O = A ?? !0;
          let B = !O || S == "00";
          E &&
            L.hours == 0 &&
            L.minutes == 0 &&
            L.seconds == 0 &&
            B &&
            (E = !1);
          let y = "";
          if (L.hours) {
            const Q = F(L.minutes.toString(), 2, "0"),
              ue = O
                ? "#Duration_HourMinuteSecondMillisecond"
                : "#Duration_HourMinuteSecond";
            y = PkgLocalization.Localize(ue, L.hours, Q, u, S);
          } else {
            const Q = L.minutes.toString(),
              ue = O
                ? "#Duration_MinuteSecondMillisecond"
                : "#Duration_MinuteSecond";
            y = PkgLocalization.Localize(ue, Q, u, S);
          }
          return (
            E &&
              (R
                ? (y = PkgLocalization.Localize("#Duration_WrittenNegation", y))
                : (y = "-" + y)),
            y
          );
        }
        function b(s) {
          const A = te(s),
            R = A.hours * 60 + A.minutes,
            E = A.hours,
            L = Math.floor(A.hours / 24),
            u = Math.floor(L / 30);
          return u > 1
            ? C.Localize("#ReadableDuration_Months", u)
            : u === 1
              ? C.Localize("#ReadableDuration_OneMonth")
              : L > 1
                ? C.Localize("#ReadableDuration_Days", L)
                : E > 2
                  ? C.Localize("#ReadableDuration_Hours", E)
                  : R > 2
                    ? C.Localize("#ReadableDuration_Minutes", R)
                    : R > 1
                      ? C.Localize("#ReadableDuration_OneMinute")
                      : C.Localize("#ReadableDuration_LessThanOneMinute");
        }
      },
      44983: (K, _, t) => {
        "use strict";
        t.d(_, { Kp: () => e, _2: () => x });
        const e = {
          PerYear: 31536e3,
          PerMonth: 2628e3,
          PerWeek: 604800,
          PerDay: 86400,
          PerHour: 3600,
          PerMinute: 60,
        };
        function n(l, o) {
          return (
            l.getFullYear() == o.getFullYear() &&
            l.getMonth() == o.getMonth() &&
            l.getDate() == o.getDate()
          );
        }
        function v(l, o) {
          let r = new Date(l);
          return r.setDate(r.getDate() - 1), n(r, o);
        }
        function a(l, o) {
          return l.getFullYear() == o.getFullYear();
        }
        function C(l) {
          return new Date(
            l.getFullYear(),
            l.getMonth(),
            l.getDate(),
            l.getHours(),
            0,
            0,
            0,
          );
        }
        function d(l) {
          return new Date(
            l.getFullYear(),
            l.getMonth(),
            l.getDate(),
            0,
            0,
            0,
            0,
          );
        }
        function p(l) {
          return new Date(l.getFullYear(), l.getMonth(), 1, 0, 0, 0, 0);
        }
        function g(l) {
          return new Promise((o) => setTimeout(o, l));
        }
        function x() {
          return Math.floor(Date.now() / 1e3);
        }
        function T(l) {
          return Math.floor(l.getTime() / 1e3);
        }
        function h(l) {
          const o = Math.round(l / 1e3),
            r = Math.floor(o % 60),
            i = Math.floor((o / 60) % 60),
            c = Math.floor(o / 3600);
          let D = !1,
            M = "";
          return (
            c > 0 && ((M += c + ":"), (D = !0)),
            (M += D && i < 10 ? "0" + i + ":" : i + ":"),
            (M += r < 10 ? "0" + r : r),
            M
          );
        }
      },
      89926: (K, _, t) => {
        "use strict";
        t.d(_, { l: () => T, v: () => h });
        var e = t(7850),
          n = t(64868),
          v = t(39905),
          a = t(1880),
          C = t(69168),
          d = t(74107),
          p = t(47875),
          g = t(79611);
        function x(l) {
          const { closeModal: o, strDescOverride: r } = l;
          return (0, e.jsx)(a.o0, {
            strTitle: d.F5.Localize("#LoginRedirect_Dialog_Title"),
            strDescription:
              r || d.F5.Localize("#LoginRedirect_Dialog_Description"),
            onCancel: o,
            strOKButtonText: v.Z.Localize("#Button_OK"),
            onOK: () => {
              (0, p.l)(), o();
            },
          });
        }
        function T(l) {
          const [o, r, i] = (0, n.uD)();
          return {
            elDialogElement: (0, e.jsx)(C.E, {
              active: o,
              children: (0, e.jsx)(x, { closeModal: i, strDescOverride: l }),
            }),
            fnShowLogonDialog: r,
          };
        }
        function h(l) {
          const { label: o, strDialogDesc: r } = l,
            { elDialogElement: i, fnShowLogonDialog: c } = T(r);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.$, {
                onClick: c,
                children: o || v.Z.Localize("#Login_SignIn"),
              }),
              i,
            ],
          });
        }
      },
      80702: (K, _, t) => {
        "use strict";
        t.d(_, { Q: () => tt });
        var e = t(7850),
          n = t(56062),
          v = t(48357),
          a = t(80104),
          C = t(27284),
          d = t(77459),
          p = t(63026),
          g = t(44267),
          x = t(90626),
          T = t(6469),
          h = t(36118),
          l = t(47689),
          o = t(36707),
          r = t(18210),
          i = t(3166),
          c = t(39722),
          D = t.n(c),
          M = t(89926),
          I = t(19298),
          f = t(10134),
          U = t(62292);
        function Y(ne) {
          const { id: V, snr: $, classOverride: re } = ne,
            [oe, se] = (0, x.useState)(!1),
            ie = (0, l.m)("GameHoverIgnoreButton"),
            { elDialogElement: Ce, fnShowLogonDialog: me } = (0, M.l)(),
            fe = V && "appid" in V ? V.appid : void 0,
            ge = (0, f.BD)(fe),
            { mutateAsync: he } = (0, U.Q)(fe, !ge, $),
            ve = V && "appid" in V && T.Fm.Get().BIsGameIgnored(V.appid),
            Le = async (Ee) => {
              Ee.preventDefault(),
                Ee.stopPropagation(),
                i.iA.logged_in
                  ? V &&
                    "appid" in V &&
                    (se(!0), await he(), ie.token.reason || se(!1))
                  : me();
            };
          return (0, e.jsxs)(I.Z, {
            className: (0, o.A)(D().IgnoreButton, re),
            onClick: Le,
            children: [
              (0, e.jsx)(h.NtH, {}),
              (0, e.jsx)("div", {
                className: (0, o.A)(
                  D().IgnoreButtonText,
                  oe && D().IgnoreLoadingText,
                ),
                children: (0, r.we)(
                  ve ? "#Sale_RemoveFromIgnored" : "#Sale_Ignore",
                ),
              }),
              Ce,
            ],
          });
        }
        var W = t(72609),
          Z = t(21721),
          z = t(25046),
          k = t(87249),
          q = t(68094),
          F = t(40358),
          te = t(29522),
          N = t(5827),
          G = t(54806),
          b = t(61855),
          s = t(14874),
          A = t(8323),
          R = t(30096),
          E = t(64769),
          L = t.n(E);
        const u = 5500,
          S = 2e3,
          O = 10;
        function B(ne, V) {
          return ne && V && V.main_capsule
            ? {
                stringifyID: `maincap_${ne.id}_${ne.item_type}`,
                rctImage: (0, e.jsx)(
                  "img",
                  {
                    className: L().FullDivImage,
                    loading: "lazy",
                    src: (0, Z.b0)(V, "main_capsule"),
                    alt: ne.name,
                  },
                  "fallback",
                ),
                nDurationMs: S,
              }
            : null;
        }
        function y(ne, V) {
          return {
            stringifyID: `vid_${(0, q.ER)(ne)}`,
            rctImage: (0, e.jsx)(k.mj, { id: ne, active: !0 }),
            nDurationMs: u,
          };
        }
        function Q(ne, V, $, re) {
          return $.slice(0, re).map((oe, se) => {
            const ie = (0, Z.bu)(oe, "1920x1080");
            return {
              stringifyID: `screen${se}_${(0, q.ER)(ne)}`,
              rctImage: (0, e.jsx)(
                "img",
                {
                  className: L().FullDivImage,
                  loading: "lazy",
                  src: ie,
                  alt: `${V}'s screenshot ${se + 1}`,
                },
                ie,
              ),
              nDurationMs: S,
            };
          });
        }
        function ue(ne, V, $, re, oe) {
          const se = [];
          if (
            (oe && se.push(y(ne, oe)),
            re && re.length > 0 && se.push(...Q(ne, V.name, re, O)),
            se.length == 0 && $ && $.main_capsule)
          ) {
            const ie = B(V, $);
            ie && se.push(ie);
          }
          return ne && se.length == 0, se;
        }
        function X(ne, V, $, re, oe, se) {
          const ie = [];
          se && ie.push(y(V, se)),
            re && re.length > 0 && ie.push(...Q(ne, $.name, re, O));
          const Ce = O - (re?.length || 0);
          return (
            Ce > 0 && oe && oe.length > 0 && ie.push(...Q(ne, $.name, oe, Ce)),
            ne && ie.length == 0,
            ie
          );
        }
        function H(ne) {
          return (0, e.jsx)("img", {
            className: L().FullDivImage,
            loading: "lazy",
            src: (0, W.YJ)(b.A),
            alt: "default",
          });
        }
        function P(ne) {
          const { id: V } = ne,
            { data: $ } = (0, F.U2)(V);
          if (!$ || $.unvailable_for_country_restriction || !$.visible)
            return (0, e.jsx)("div", {
              className: L().TrailerCtn,
              children: (0, e.jsx)(H, {}, "default"),
            });
          const re = $.item_type,
            oe = $.type;
          return re == n.c6.xO || re == n.c6.RD
            ? (0, e.jsx)(ee, { includeAppIDs: $.included_appids })
            : (oe == n.uE.ue || oe == n.uE.Vi) &&
                $.related_items &&
                $.related_items.parent_appid
              ? (0, e.jsx)(w, {
                  demoItemDefaultInfo: $,
                  parentAppID: $.related_items.parent_appid,
                })
              : (0, e.jsx)(m, { storeItemDefaultData: $ });
        }
        function m(ne) {
          const { storeItemDefaultData: V } = ne,
            $ = (0, s.QO)(V),
            re = (0, z.TH)($),
            { data: oe } = (0, F.lv)($),
            se = (0, Z.DT)($),
            ie = (0, x.useMemo)(() => ue($, V, oe, se, re), [$, se, re, oe, V]);
          return (0, e.jsx)(ae, { rgTrailerAndImages: ie });
        }
        function w(ne) {
          const { demoItemDefaultInfo: V, parentAppID: $ } = ne,
            re = (0, s.QO)(V);
          return (0, z.TH)(re)
            ? (0, e.jsx)(m, { storeItemDefaultData: V })
            : (0, e.jsx)(j, {
                demoID: re,
                demoItemDefaultInfo: V,
                parentAppID: $,
              });
        }
        function j(ne) {
          const { parentAppID: V, demoID: $, demoItemDefaultInfo: re } = ne,
            oe = (0, te.$5)(V),
            se = (0, Z.DT)($),
            ie = (0, Z.DT)(oe),
            Ce = (0, z.TH)(oe),
            me = (0, x.useMemo)(
              () => X($, oe, re, se, ie, Ce),
              [$, oe, re, Ce, se, ie],
            );
          return (0, e.jsx)(ae, { rgTrailerAndImages: me });
        }
        function ee(ne) {
          const { includeAppIDs: V } = ne,
            $ = (0, N.eG)(),
            re = (0, G.E)({
              queries: V.map((ie) => (0, F.AQ)($, { appid: ie })),
            }),
            oe = (0, G.E)({
              queries: V.map((ie) => (0, F.us)($, { appid: ie })),
            }),
            se = (0, x.useMemo)(
              () =>
                re
                  .map((ie, Ce) => {
                    const me = oe[Ce].data,
                      fe = ie.data;
                    return B(me, fe);
                  })
                  .filter((ie) => !!ie),
              [re, oe],
            );
          return (0, e.jsx)(ae, { rgTrailerAndImages: se });
        }
        function ae(ne) {
          const { rgTrailerAndImages: V } = ne,
            $ = (0, x.useRef)(0),
            re = (0, R.CH)(),
            [oe] = x.useState(new A.LU()),
            se = (0, x.useCallback)(
              (ie = !1) => {
                if ((ie && ($.current = 0), V?.length > 0)) {
                  const Ce = V[$.current].nDurationMs;
                  oe.Schedule(Ce, () => {
                    const me = $.current;
                    ($.current = ($.current + 1) % V.length),
                      me != $.current && (se(), re());
                  });
                }
              },
              [V, oe, re],
            );
          return (
            (0, x.useEffect)(
              () => (V.length > 0 && se(), () => oe.Cancel()),
              [V, se, oe],
            ),
            (0, e.jsx)("div", {
              className: L().TrailerCtn,
              children: V?.map((ie, Ce) =>
                (0, e.jsx)(
                  "div",
                  {
                    className: (0, o.A)({
                      [L().FullDivImage]: !0,
                      [L().Transparent]: Ce != $.current,
                    }),
                    children: ie.rctImage,
                  },
                  "e-" + Ce + "-" + ie.stringifyID,
                ),
              ),
            })
          );
        }
        var le = t(16179),
          ce = t(67344),
          de = t(41301),
          J = t(561),
          Be = t(76867),
          Se = t(25792),
          pe = t(21659),
          He = t(10350),
          xe = t.n(He);
        const Ke = 150;
        function Fe(ne) {
          const {
              hoverContent: V,
              hoverProps: $,
              nDelayShowMs: re,
              nWidthMultiplier: oe,
              children: se,
              className: ie,
            } = ne,
            Ce = (0, i.Qn)(),
            me = (0, pe.zI)(),
            fe = !Ce && !me,
            [ge, he] = x.useState(!1),
            [ve, Le] = x.useState(void 0),
            Ee = (ye) => {
              he(!0), Le(ye.currentTarget);
            },
            Te = () => he(!1),
            je = (ye) => {
              ye.keyCode == de.zV &&
                (he(!1), ye.preventDefault(), ye.stopPropagation());
            },
            _e = () => he(!1);
          return (0, e.jsxs)("div", {
            "data-key": "hover div",
            role: "button",
            tabIndex: 0,
            className: (0, o.A)(xe().ItemHoverSource, ie),
            onMouseEnter: Ee,
            onMouseLeave: Te,
            onTouchStart: _e,
            onKeyDown: je,
            children: [
              fe &&
                ve &&
                (0, e.jsx)(Ie, {
                  visible: ge,
                  target: ve,
                  nDelayShowMs: re,
                  nWidthMultiplier: oe,
                  hoverProps: $,
                  children: V,
                }),
              (0, e.jsx)(Se.tH, { children: se }),
            ],
          });
        }
        function Ie(ne) {
          const {
              hoverProps: V,
              nDelayShowMs: $ = Ke,
              nWidthMultiplier: re = 1.15,
              target: oe,
              visible: se,
              children: ie,
            } = ne,
            [Ce, me] = x.useState(se);
          if (
            (x.useEffect(() => {
              if (se)
                if ($) {
                  const he = window.setTimeout(() => me(!0), $);
                  return () => window.clearTimeout(he);
                } else {
                  me(!0);
                  return;
                }
              else {
                if ((0, ce.p)()) return;
                me(!1);
                return;
              }
            }, [se]),
            x.useEffect(() => {
              if (!Ce) return;
              const he = 50,
                ve = oe.ownerDocument.defaultView;
              if (ve) {
                const Le = ve.scrollY,
                  Ee = () => {
                    Math.abs(ve.scrollY - Le) > he && me(!1);
                  };
                return (
                  window.addEventListener("scroll", Ee),
                  () => window.removeEventListener("scroll", Ee)
                );
              }
              return () => {};
            }, [Ce, oe?.ownerDocument.defaultView]),
            !oe || !ie || !Ce)
          )
            return null;
          const fe = oe.clientWidth < 200 ? "8px" : "10px",
            ge = {
              direction: "overlay-center",
              bEnablePointerEvents: !0,
              ...(V || {}),
              style: {
                zIndex: 98,
                width: oe.clientWidth * re,
                fontSize: fe,
                minHeight: De() == "hiding" ? void 0 : 300,
                height:
                  De() == "hiding"
                    ? oe.clientWidth * 1.15 * (125 / 184)
                    : void 0,
                ...V?.style,
              },
              target: oe,
            };
          return (0, e.jsx)(Ne, {
            hoverProps: ge,
            children: (0, e.jsx)(Se.tH, { children: ie }),
          });
        }
        function Ne(ne) {
          const { hoverProps: V, children: $ } = ne,
            re = x.useCallback((se) => se?.focus(), []);
          return (0, e.jsx)(J.g, {
            ...V,
            children: (0, e.jsx)(Be.M, {
              timeout: 500,
              in: !0,
              appear: !0,
              classNames: {
                appearActive: (0, o.A)(xe().Opening, L().Opening),
                enterDone: (0, o.A)(xe().Open, L().Open),
              },
              children: (se) =>
                (0, e.jsx)("div", {
                  ref: (0, R.XB)(se, re),
                  className: xe().HoverContentTransition,
                  tabIndex: -1,
                  children: $,
                }),
            }),
          });
        }
        function De() {
          return window.sessionStorage?.getItem(Ae) || "default";
        }
        const Ae = "DEBUG_UseNewGameHover";
        function Re(ne) {
          window.sessionStorage.setItem(Ae, ne);
        }
        window.SetHoverPresentation = Re;
        var Ze = t(3348),
          ze = t(41944),
          ke = t(18654),
          Ge = t.n(ke),
          Ye = t(29245),
          Qe = t(41188);
        function Je(ne) {
          const { id: V } = ne,
            { data: $ } = (0, F.xz)(V);
          return $
            ? (0, e.jsx)("div", {
                className: L().TagRow,
                children: (0, e.jsx)("div", {
                  className: L().Tags,
                  children: $.slice(0, 10)
                    .filter((re) => re.tagid)
                    .map((re) =>
                      (0, e.jsx)(
                        Qe.p,
                        { tagid: re.tagid, className: L().Tag },
                        "tag_" + re.tagid,
                      ),
                    ),
                }),
              })
            : null;
        }
        function Xe(ne) {
          const {
              id: V,
              displayID: $,
              name: re,
              strStoreUrl: oe,
              elElementToAppend: se,
              bShowDemoButton: ie,
              bHideBottomHalf: Ce,
              bHidePrice: me,
              bShowDeckCompatibilityDialog: fe,
              bUseSubscriptionLayout: ge,
              nCreatorAccountID: he,
              bPreventNavigation: ve,
              bShowDescription: Le,
            } = ne,
            [Ee, Te] = (0, x.useState)(!1),
            je = "",
            [_e, ye] = (0, x.useState)(je),
            Ve = (Me) => ye(`translateY( -${Me?.clientHeight || 0}px )`),
            { data: Pe } = (0, F.J$)(V),
            { data: be } = (0, F.lv)($),
            we = !ge && !ie && !se,
            Ue = Pe && Pe.item_type == n.c6.qI;
          return (0, e.jsxs)("div", {
            className: L().BottomShelf,
            style: { transform: Ce && Ee ? _e : je },
            onMouseEnter: () => Te(!0),
            onFocus: () => Te(!0),
            onMouseLeave: () => Te(!1),
            onBlur: () => Te(!1),
            children: [
              (0, e.jsxs)("a", {
                href: oe,
                className: L().Midline,
                onClick: (Me) => {
                  ve && Me.preventDefault();
                },
                "aria-disabled": ve,
                children: [
                  be &&
                    (0, e.jsx)("div", {
                      className: L().CapsuleImageAnchorPoint,
                      children: (0, e.jsx)("div", {
                        className: (0, o.A)(
                          L().CapsuleImageCtn,
                          L().WithCornerShine,
                        ),
                        children: (0, e.jsx)("img", {
                          loading: "lazy",
                          src: (0, Z.b0)(be, "header"),
                          alt: Pe?.name,
                        }),
                      }),
                    }),
                  !me &&
                    !ge &&
                    (0, e.jsx)("div", {
                      className: L().Price,
                      children: (0, e.jsx)(v.NF, {
                        id: V,
                        onlyOneDiscountPct: !0,
                      }),
                    }),
                ],
              }),
              (0, e.jsx)("div", {
                className: L().BottomShelfOffScreen,
                ref: Ve,
                children: (0, e.jsxs)("div", {
                  className: L().TextContent,
                  children: [
                    (0, e.jsx)("a", {
                      href: oe,
                      onClick: (Me) => {
                        ve && Me.preventDefault();
                      },
                      "aria-disabled": ve,
                      children: (0, e.jsx)("div", {
                        className: L().GameTitle,
                        children: Pe?.name || re,
                      }),
                    }),
                    Le && (0, e.jsx)(qe, { id: V }),
                    (0, e.jsx)(Je, { id: V }),
                    !fe && (0, e.jsx)(a.J, { id: V }),
                    !!(!fe && we) &&
                      (0, e.jsxs)("div", {
                        className: L().ReviewsAndRelease,
                        children: [
                          (0, e.jsx)(Ye.Q, {
                            id: V,
                            strClassName: L().PlatformDisplay,
                          }),
                          (0, e.jsx)($e, { id: V }),
                        ],
                      }),
                    ie && (0, e.jsx)(C.j, { id: V, className: L().DemoButton }),
                    !!(fe && Ue) && (0, e.jsx)(ze.Q8, { id: V }),
                    !!se && se,
                    ge &&
                      Ue &&
                      V &&
                      "appid" in V &&
                      V.appid &&
                      (0, e.jsx)(d.E, { appid: V.appid, bIsMuted: !1 }),
                    he && (0, e.jsx)(p.Q, { nCreatorAccountID: he }),
                  ],
                }),
              }),
            ],
          });
        }
        function $e(ne) {
          const { id: V } = ne,
            { data: $ } = (0, F.by)(V);
          if (!$) return null;
          const re = (0, Ze.CC)($);
          return (0, e.jsx)("div", {
            className: L().ReleaseDate,
            children: re,
          });
        }
        function qe(ne) {
          const { id: V } = ne,
            { data: $ } = (0, F.wl)(V);
          return $
            ? (0, e.jsx)("div", {
                className: L().ShortDescription,
                children: $?.short_description,
              })
            : null;
        }
        function et(ne) {
          const {
              id: V,
              displayID: $,
              strStoreUrl: re,
              bHideBottomHalf: oe,
              bShowDeckCompatibilityDialog: se,
              bShowWishlistButton: ie = !0,
              bShowIgnoreButton: Ce = !1,
            } = ne,
            { data: me } = (0, F.Yo)(V),
            { data: fe } = (0, F.j4)(V),
            ge = me === void 0 && fe === void 0;
          return (0, e.jsxs)("div", {
            className: (0, o.A)(
              L().GameHoverCapsuleCtn,
              ge && L().Loading,
              Ge().InGameHover,
              oe && L().UseHidingBottomHalf,
            ),
            children: [
              (0, e.jsxs)("a", {
                href: re,
                className: L().TrailerAnchorStoreLink,
                children: [
                  !!(ie && !se) && (0, e.jsx)(g.E, { id: $, snr: ne.strSNR }),
                  !!(Ce && !se) && (0, e.jsx)(Y, { id: $, snr: ne.strSNR }),
                  V && (0, e.jsx)(P, { id: V }),
                ],
              }),
              (0, e.jsx)(Xe, { ...ne }),
            ],
          });
        }
        function tt(ne) {
          const {
              id: V,
              name: $,
              bPreventNavigation: re,
              elElementToAppend: oe,
              bShowDemoButton: se,
              bPreferDemoStorePage: ie,
              bHidePrice: Ce,
              bUseSubscriptionLayout: me,
              strExtraParams: fe,
              children: ge,
              nCreatorAccountID: he,
              nWidthMultiplier: ve,
              bShowDeckCompatibilityDialog: Le,
              bShowWishlistButton: Ee = !0,
              bShowIgnoreButton: Te = !1,
              bShowDescription: je = !1,
              ..._e
            } = ne,
            { data: ye } = (0, F.J$)(V),
            Ve = (0, i.Qn)(),
            { strStoreURL: Pe, snr: be } = (0, le.x)(ye, ie);
          if ((!ye && !$) || Ve)
            return (0, e.jsx)(e.Fragment, { children: ge });
          let we = V;
          ye &&
            ye.item_type == n.c6.RD &&
            ye.included_appids?.length == 1 &&
            (we = { appid: ye.included_appids[0] });
          const Ue = De() == "hiding",
            Me = re || !ye ? void 0 : Pe,
            nt = {
              id: V,
              displayID: we,
              name: $,
              bPreventNavigation: re,
              strStoreUrl: Me,
              elElementToAppend: oe,
              bShowDemoButton: se,
              bShowDeckCompatibilityDialog: Le,
              bHideBottomHalf: Ue,
              bHidePrice: Ce,
              bUseSubscriptionLayout: me,
              strSNR: be,
              nCreatorAccountID: he,
              bShowWishlistButton: Ee,
              bShowIgnoreButton: Te,
              bShowDescription: je,
            },
            rt = (0, e.jsx)(et, { ...nt }),
            ot = Me ? (0, e.jsx)("a", { href: Me, children: ge }) : ge;
          return (0, e.jsx)(Fe, {
            hoverContent: rt,
            nWidthMultiplier: ve,
            ..._e,
            children: ot,
          });
        }
      },
      63026: (K, _, t) => {
        "use strict";
        t.d(_, { Q: () => x });
        var e = t(7850),
          n = t(55483),
          v = t(29696),
          a = t(35413),
          C = t(37934),
          d = t(64769),
          p = t.n(d),
          g = t(36707);
        function x(T) {
          const {
              nCreatorAccountID: h,
              classOverride: l,
              styleOverride: o,
              followType: r,
            } = T,
            { data: i } = (0, n.TB)(h),
            { data: c } = (0, v.A5)(h);
          return !i || !c
            ? null
            : (0, e.jsxs)("div", {
                className: (0, g.A)(p().GameHoverCreatorFollowButtonCtn, l),
                style: o,
                children: [
                  (0, e.jsx)("a", {
                    href: (0, v.LO)(c, "developer"),
                    children: (0, e.jsx)("img", {
                      src:
                        i == null
                          ? (0, a.t)(void 0, "medium")
                          : i?.avatar_medium_url,
                      alt: i?.group_name,
                    }),
                  }),
                  (0, e.jsx)(C.of, { clanAccountID: h, followType: r }),
                ],
              });
        }
      },
      80104: (K, _, t) => {
        "use strict";
        t.d(_, { J: () => i });
        var e = t(7850),
          n = t(84346),
          v = t(56062),
          a = t(83784),
          C = t(40358),
          d = t(29522),
          p = t(6469),
          g = t(12818),
          x = t(71421),
          T = t(36707),
          h = t(64769),
          l = t.n(h),
          o = t(39905),
          r = t(72609);
        function i(c) {
          const { id: D, bTruncateTotalReviews: M, bShowTooltip: I } = c,
            { data: f } = (0, C.ik)(D),
            { data: U } = (0, C.J$)(D),
            Y = (0, d.h0)(D),
            { data: W } = (0, C.J$)(Y);
          if (!f || !U || (U.type == v.uE.ue && !(0, a.J)(W))) return null;
          let Z = f.summary_unfiltered || f.summary_filtered,
            z = "#ReviewScore_UserReviewScoreAria",
            k = !1;
          const q = o.Z.Localize("#Language_" + r.TS.LANGUAGE);
          if (
            (p.Fm.Get().BShowFilteredUserReviewScores() &&
              (f.summary_language_specific
                ? ((k = !0),
                  (z = "#ReviewScore_UserReviewScoreAria_LanguageSpecific"),
                  (Z = f.summary_language_specific))
                : (Z = f.summary_filtered)),
            !Z || !Z.review_score)
          )
            return null;
          let F = l().ReviewScoreNone;
          Z.review_score > 0 && Z.review_score < v.j6.hc
            ? (F = l().ReviewScoreLow)
            : Z.review_score == v.j6.hc
              ? (F = l().ReviewScoreMixed)
              : (F = l().ReviewScoreHigh);
          const te = `${r.TS.STORE_BASE_URL}app/${U.appid}/#app_reviews_hash`,
            N = (0, e.jsxs)("div", {
              className: (0, T.A)(l().ReviewScoreValue, F),
              children: [
                (0, e.jsx)("div", {
                  className: l().ReviewScoreLabel,
                  "aria-label": o.Z.Localize(z, Z.review_score_label, q),
                  children: Z.review_score_label,
                }),
                (0, e.jsxs)("div", {
                  className: l().ReviewScoreCount,
                  "aria-label": o.Z.Localize(
                    "#GameHover_UserReviewCount",
                    Z.review_count.toLocaleString((0, n.J)()),
                  ),
                  children: [
                    "(",
                    M
                      ? "(" + Z.review_count.toLocaleString((0, n.J)()) + ")"
                      : k
                        ? o.Z.Localize(
                            "#GameHover_UserReviewCount_Lang",
                            Z.review_count.toLocaleString((0, n.J)()),
                            q,
                          )
                        : o.Z.Localize(
                            "#GameHover_UserReviewCount",
                            Z.review_count.toLocaleString((0, n.J)()),
                          ),
                    ")",
                  ],
                }),
                !M &&
                  (0, e.jsxs)("div", {
                    className: l().ReviewScoreHeader,
                    children: [
                      " ",
                      o.Z.Localize("#GameHover_UserReviewsHeader"),
                    ],
                  }),
              ],
            });
          let G = "#ReviewScore_PercentPositive";
          if (U.item_type === v.c6.xO)
            G = "#ReviewScore_PercentPositive_bundle";
          else if (U.item_type === v.c6.qI)
            switch (U.type) {
              case v.uE.Sv:
                G = "#ReviewScore_PercentPositive_software";
                break;
              case v.uE.Wz:
                G = "#ReviewScore_PercentPositive_video";
                break;
              case v.uE.Hk:
                G = "#ReviewScore_PercentPositive_hardware";
                break;
              case v.uE.gQ:
                G = "#ReviewScore_PercentPositive_series";
                break;
            }
          return (0, e.jsx)(g.q, {
            url: te,
            className: (0, T.A)(l().ReviewScore, "ReviewScore"),
            children:
              I && Z.percent_positive != null && Z.review_count != null && G
                ? (0, e.jsx)(x.he, {
                    bTopmost: !0,
                    toolTipContent: o.Z.Localize(
                      G,
                      Z.percent_positive,
                      Z.review_count,
                    ),
                    children: N,
                  })
                : N,
          });
        }
      },
      44267: (K, _, t) => {
        "use strict";
        t.d(_, { E: () => M });
        var e = t(7850),
          n = t(19298),
          v = t(56062),
          a = t(89926),
          C = t(40358),
          d = t(29522),
          p = t(24179),
          g = t(54528),
          x = t(96362),
          T = t(90626),
          h = t(36118),
          l = t(47689),
          o = t(36707),
          r = t(3166),
          i = t(64769),
          c = t.n(i),
          D = t(39905);
        function M(I) {
          const {
              id: f,
              snr: U,
              classOverride: Y,
              styleOverride: W,
              bShowInGamepadUI: Z,
            } = I,
            { data: z } = (0, C.J$)(f),
            { elDialogElement: k, fnShowLogonDialog: q } = (0, a.l)(),
            [F, te] = (0, T.useState)(() => {
              if (
                z &&
                (z.type == v.uE.ue || z.type == v.uE.Vi) &&
                z.related_items?.parent_appid
              )
                return z.related_items?.parent_appid;
              if (f && "appid" in f) return f.appid;
            }),
            N = (0, d.$5)(F),
            G = (0, g.bB)(F),
            { bIsOwned: b } = (0, p.ZJ)(N),
            [s, A] = (0, T.useState)(!1),
            R = (0, l.m)("GameHoverWishlistButton"),
            { mutateAsync: E } = (0, x.s)(F, !G, U);
          (0, T.useEffect)(() => {
            f &&
              "appid" in f &&
              (z?.type == v.uE.ue || z?.type == v.uE.Vi) &&
              te(z.related_items?.parent_appid || f.appid);
          }, [z, f]);
          const L = (0, T.useCallback)(
            async (u) => {
              r.iA.logged_in
                ? (u.preventDefault(),
                  u.stopPropagation(),
                  A(!0),
                  await E(),
                  R.token.reason || A(!1))
                : q();
            },
            [R.token.reason, q, E],
          );
          return b && z?.type != v.uE.Hk
            ? null
            : (0, e.jsxs)(n.Z, {
                className: (0, o.A)(
                  c().WishlistButton,
                  Z && c().ShowInGamepadUI,
                  Y,
                ),
                onActivate: L,
                style: W,
                children: [
                  G ? (0, e.jsx)(h.qnF, {}) : (0, e.jsx)(h.T4m, {}),
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      c().WishlistButtonText,
                      s && c().WishlistLoadingText,
                      "WishlistButtonText",
                    ),
                    children: D.Z.Localize(
                      G ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                    ),
                  }),
                  k,
                ],
              });
        }
      },
      74107: (K, _, t) => {
        "use strict";
        t.d(_, { F5: () => a });
        var e = t(31275);
        const n = {};
        (n.arabic = () => t.e(22940).then(t.t.bind(t, 22940, 19))),
          (n.brazilian = () => t.e(59990).then(t.t.bind(t, 59990, 19))),
          (n.bulgarian = () => t.e(38573).then(t.t.bind(t, 38573, 19))),
          (n.czech = () => t.e(40975).then(t.t.bind(t, 40975, 19))),
          (n.danish = () => t.e(38721).then(t.t.bind(t, 38721, 19))),
          (n.dutch = () => t.e(354).then(t.t.bind(t, 354, 19))),
          (n.english = () => t.e(49768).then(t.t.bind(t, 49768, 19))),
          (n.finnish = () => t.e(12931).then(t.t.bind(t, 12931, 19))),
          (n.french = () => t.e(6064).then(t.t.bind(t, 6064, 19))),
          (n.german = () => t.e(62942).then(t.t.bind(t, 62942, 19))),
          (n.greek = () => t.e(13924).then(t.t.bind(t, 13924, 19))),
          (n.hungarian = () => t.e(99441).then(t.t.bind(t, 99441, 19))),
          (n.indonesian = () => t.e(42584).then(t.t.bind(t, 42584, 19))),
          (n.italian = () => t.e(97688).then(t.t.bind(t, 97688, 19))),
          (n.japanese = () => t.e(5407).then(t.t.bind(t, 5407, 19))),
          (n.koreana = () => t.e(65815).then(t.t.bind(t, 65815, 19))),
          (n.latam = () => t.e(44287).then(t.t.bind(t, 44287, 19))),
          (n.malay = () => t.e(58160).then(t.t.bind(t, 35779, 19))),
          (n.norwegian = () => t.e(33648).then(t.t.bind(t, 33648, 19))),
          (n.polish = () => t.e(22649).then(t.t.bind(t, 22649, 19))),
          (n.portuguese = () => t.e(23629).then(t.t.bind(t, 23629, 19))),
          (n.romanian = () => t.e(81555).then(t.t.bind(t, 81555, 19))),
          (n.russian = () => t.e(11809).then(t.t.bind(t, 11809, 19))),
          (n.schinese = () => t.e(79004).then(t.t.bind(t, 79004, 19))),
          (n.spanish = () => t.e(97760).then(t.t.bind(t, 97760, 19))),
          (n.swedish = () => t.e(86881).then(t.t.bind(t, 86881, 19))),
          (n.tchinese = () => t.e(28183).then(t.t.bind(t, 28183, 19))),
          (n.thai = () => t.e(10950).then(t.t.bind(t, 10950, 19))),
          (n.turkish = () => t.e(22568).then(t.t.bind(t, 22568, 19))),
          (n.ukrainian = () => t.e(17038).then(t.t.bind(t, 17038, 19))),
          (n.vietnamese = () => t.e(62327).then(t.t.bind(t, 62327, 19)));
        async function v(p) {
          if (n[p]) return n[p]();
        }
        const a = (0, e.l)(v);
        async function C() {
          return Promise.all([a.Ready()]);
        }
        function d() {
          return useLocalizationReady(a);
        }
      },
      27284: (K, _, t) => {
        "use strict";
        t.d(_, { j: () => ue });
        var e = t(7850),
          n = t(56062),
          v = t(40358),
          a = t(13977),
          C = t(71421),
          d = t(36707),
          p = t(94162),
          g = t(9975),
          x = t(72365),
          T = t.n(x),
          h = t(97825),
          l = t(99412),
          o = t(64868),
          r = t(66243),
          i = t(29522),
          c = t(24179),
          D = t(20125),
          M = t(90626),
          I = t(33405),
          f = t(23761),
          U = t(25792),
          Y = t(16346),
          W = t(18210),
          Z = t(34360),
          z = t(58579),
          k = t.n(z);
        const q = {
          bFitToWindow: !0,
          bOverlapHorizontal: !0,
          bMatchWidth: !1,
          bShiftToFitWindow: !0,
          bDisablePopTop: !0,
        };
        function F(X) {
          const { setRemoteClientID: H, rgSessions: P } = X,
            m = (0, M.useCallback)(
              (w) => {
                P?.length &&
                  (0, Y.lX)(
                    (0, e.jsx)(te, {
                      sessions: P,
                      setRemoteDownloadClientId: H,
                    }),
                    w,
                    q,
                  );
              },
              [H, P],
            );
          return P?.length
            ? (0, e.jsx)("button", {
                onClick: m,
                className: k().ClientSelectDropdown,
                children: (0, e.jsx)(G, {}),
              })
            : null;
        }
        function te({ sessions: X, setRemoteDownloadClientId: H }) {
          return (0, e.jsx)("ul", {
            className: k().ClientListDropdownMenu,
            children: X.map((P) =>
              (0, e.jsx)(
                Z.kt,
                {
                  onSelected: () => {
                    H(P.client_instanceid);
                  },
                  children: (0, W.we)(
                    "#GamesList_Client_Indicator",
                    N(P.device_type) ?? "",
                    P.machine_name,
                  ),
                },
                P.client_instanceid,
              ),
            ),
          });
        }
        function N(X) {
          switch (X) {
            case l.g0U:
              return (0, W.we)("#Library_DeviceType_PC");
            case l.LS$:
              return (0, W.we)("#Library_DeviceType_SteamDeck");
            case l.bOm:
              return (0, W.we)("#Library_DeviceType_SteamMachine");
            case l.jYC:
              return (0, W.we)("#Library_DeviceType_SteamFrame");
            default:
              return;
          }
        }
        function G(X) {
          return (0, e.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 13 8",
            fill: "none",
            ...X,
            children: (0, e.jsx)("path", {
              fill: "currentColor",
              d: "M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z",
            }),
          });
        }
        var b = t(96538),
          s = t(36118),
          A = t(85599),
          R = t(98609),
          E = t(39285),
          L = t.n(E);
        function u(X) {
          const { appid: H } = X,
            P = (0, i.$5)(H),
            { data: m } = (0, v.J$)(P),
            [w, j, ee] = (0, o.uD)(!1),
            { mutateAsync: ae } = (0, h.S)({ appid: H }),
            [le, ce] = (0, M.useState)(!1),
            de = (0, c.S6)(H);
          return !m || de
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsxs)(r.sP, {
                    onClick: async () => {
                      try {
                        ce(!0), await ae(), (0, D.WZ)(), ce(!1), j();
                      } catch (J) {
                        ce(!1),
                          console.error(
                            "Error AddToLibraryActionWithRemoteInstall",
                            J,
                          );
                      }
                    },
                    children: [
                      le && (0, e.jsx)(A.t, { size: "small" }),
                      (0, W.we)("#Sale_AddToLibrary_NoPlus"),
                    ],
                  }),
                  (0, e.jsx)(U.tH, {
                    children: (0, e.jsx)(b.EN, {
                      active: w,
                      children: (0, e.jsx)(b.o0, {
                        strTitle: (0, W.we)("#Sale_AddedToLibrary"),
                        strDescription: (0, W.PP)(
                          "#Sale_AddToLibrary_DialogDesc",
                          (0, e.jsx)("span", {
                            className: L().GameName,
                            children: m.name || "",
                          }),
                        ),
                        closeModal: ee,
                        bAlertDialog: !0,
                        children: (0, e.jsx)(S, { id: P }),
                      }),
                    }),
                  }),
                ],
              });
        }
        function S(X) {
          const { id: H } = X,
            P = (0, f.Vc)(),
            [m, w] = (0, M.useState)(0),
            [j, ee] = (0, M.useState)(!1),
            { data: ae } = (0, v.qI)(H);
          if (!H || !("appid" in H) || R.TS.IN_CLIENT || !ae) return null;
          const le = P.data?.sessions?.filter((ce) => {
            switch (ce.device_type) {
              default:
              case l.g0U:
                {
                  if (!ce.os_type) return !1;
                  const de = (0, I.gU)(ce.os_type);
                  if (ae.windows && de.includes("Windows")) return !0;
                  if (ae.mac && de.includes("Mac")) return !0;
                  if (ae.steamos_linux && de.includes("Linux")) return !0;
                }
                break;
              case l.LS$:
                return ae.windows || ae.steamos_linux;
            }
            return !1;
          });
          if (le && le?.length > 0) {
            const ce = le[m];
            return (0, e.jsx)("div", {
              className: L().RemoteOptions,
              children: j
                ? (0, e.jsx)(B, { session: ce })
                : (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(O, {
                        rgAcceptableSession: le,
                        session: ce,
                        setSessionIndex: w,
                      }),
                      (0, e.jsx)("div", {
                        className: L().ActionRow,
                        children: (0, e.jsx)(y, {
                          appid: H.appid,
                          session: ce,
                          setRemoteDownloadRequested: ee,
                        }),
                      }),
                    ],
                  }),
            });
          }
          return null;
        }
        function O(X) {
          const { rgAcceptableSession: H, session: P, setSessionIndex: m } = X;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, W.we)("#Sale_AddToLibrary_RemoteDownload"),
              }),
              (0, e.jsxs)("div", {
                className: L().ClientSelector,
                children: [
                  (0, e.jsx)("span", {
                    className: L().ClientName,
                    children: P.machine_name,
                  }),
                  (0, e.jsx)(F, {
                    rgSessions: H,
                    setRemoteClientID: (w) => {
                      const j = H.findIndex((ee) => ee.client_instanceid === w);
                      j >= 0 && m(j);
                    },
                  }),
                ],
              }),
            ],
          });
        }
        function B(X) {
          const { session: H } = X;
          return (0, e.jsxs)("div", {
            className: L().DownloadStartedCtn,
            children: [
              (0, W.we)("#Sale_AddToLibrary_DownloadStarted"),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("a", {
                href: `${R.TS.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${H.client_instanceid}`,
                children: (0, W.we)("#Sale_AddToLibrary_SeeDownloadProgress"),
              }),
            ],
          });
        }
        function y(X) {
          const { appid: H, session: P, setRemoteDownloadRequested: m } = X,
            w = (0, f.we)(H, P.client_instanceid);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(r.sP, {
                onClick: () => {
                  w.mutateAsync(), m(!0);
                },
                children: [
                  (0, e.jsx)(s.f5X, {}),
                  (0, W.we)("#Button_StartDownload"),
                ],
              }),
              (0, e.jsx)("div", {
                className: L().LearnMoreCtn,
                children: (0, e.jsx)("a", {
                  href: "https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409",
                  className: L().InlineLink,
                  children: (0, W.we)("#Button_Learn"),
                }),
              }),
            ],
          });
        }
        var Q = t(39905);
        function ue(X) {
          const { id: H, className: P } = X,
            { data: m } = (0, v.J$)(H);
          if (!m) return null;
          const w =
              m.related_items?.demo_appid && m.related_items.demo_appid
                ? m.related_items.demo_appid
                : [],
            j = w.length > 0,
            ee = j || m.type === n.uE.ue,
            ae = ee
              ? Q.Z.Localize("#Sale_InstallDemo_ttip", m.name || "")
              : j
                ? Q.Z.Localize("#Sale_CannotInstallDemo_ttip", m.name || "")
                : Q.Z.Localize("#Loading");
          if ((0, p.$W)()) {
            if (ee && j) {
              const le = m.type === n.uE.ue ? m.appid : w[0];
              return (0, e.jsx)("div", {
                className: P,
                children: (0, e.jsx)(u, { appid: le }),
              });
            }
            return null;
          }
          return !ee && j && m.is_free
            ? (0, e.jsx)(g.h, { id: H, className: P })
            : (0, e.jsx)(C.he, {
                toolTipContent: ae,
                onClick: (le) => {
                  le.preventDefault(),
                    le.stopPropagation(),
                    ee && (0, a.o)(m.type === n.uE.ue ? m.appid : w[0], m.name);
                },
                className: (0, d.A)(
                  P,
                  T().DemoButton,
                  !ee && T().DisabledButton,
                ),
                children: ee
                  ? Q.Z.Localize("#Sale_InstallDemo")
                  : Q.Z.Localize("#Sale_DemoNotFound"),
              });
        }
      },
      29245: (K, _, t) => {
        "use strict";
        t.d(_, { Q: () => x });
        var e = t(7850),
          n = t(39905),
          v = t(40358),
          a = t(18654),
          C = t.n(a),
          d = t(36118),
          p = t(36707),
          g = t(3166);
        function x(T) {
          const {
              id: h,
              strClassName: l,
              bMinimizePlatforms: o,
              bHideWindows: r,
            } = T,
            { data: i } = (0, v.qI)(h);
          if (!i) return null;
          if (o) {
            let c = r
              ? null
              : i?.windows &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_Windows"),
                  children: (0, e.jsx)(d.Xz0, {
                    "aria-label": n.Z.Localize("#Platform_Windows"),
                  }),
                });
            return (
              ((0, g.CI)() || (0, g.Hn)() || (0, g.rf)()) && i?.steamos_linux
                ? (c = (0, e.jsx)("span", {
                    title: n.Z.Localize("#Platform_Linux"),
                    children: (0, e.jsx)(d.Qte, {
                      "aria-label": n.Z.Localize("#Platform_Linux"),
                    }),
                  }))
                : (0, g.Pr)() && i?.mac
                  ? (c = (0, e.jsx)("span", {
                      title: n.Z.Localize("#Platform_Mac"),
                      children: (0, e.jsx)(d.kPc, {
                        "aria-label": n.Z.Localize("#Platform_Mac"),
                      }),
                    }))
                  : i.vr_support?.vrhmd &&
                    (c = (0, e.jsx)("span", {
                      title: n.Z.Localize("#Platform_VR"),
                      children: (0, e.jsx)(d.VR, {
                        "aria-label": n.Z.Localize("#Platform_VR"),
                      }),
                    })),
              c
                ? (0, e.jsx)("span", {
                    className: (0, p.A)(C().CapsulePlatform, l),
                    children: c,
                  })
                : null
            );
          }
          return (0, e.jsxs)("span", {
            className: (0, p.A)(C().CapsulePlatform, l),
            children: [
              !r &&
                i.windows &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_Windows"),
                  children: (0, e.jsx)(d.Xz0, {
                    "aria-label": n.Z.Localize("#Platform_Windows"),
                  }),
                }),
              i.mac &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_Mac"),
                  children: (0, e.jsx)(d.kPc, {
                    "aria-label": n.Z.Localize("#Platform_Mac"),
                  }),
                }),
              i.steamos_linux &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_Linux"),
                  children: (0, e.jsx)(d.Qte, {
                    "aria-label": n.Z.Localize("#Platform_Linux"),
                  }),
                }),
              i.vr_support?.vrhmd &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_VR"),
                  children: (0, e.jsx)(d.VR, {
                    "aria-label": n.Z.Localize("#Platform_VR"),
                  }),
                }),
            ],
          });
        }
      },
      48357: (K, _, t) => {
        "use strict";
        t.d(_, { AO: () => M, NF: () => D });
        var e = t(7850),
          n = t(56062),
          v = t(3348),
          a = t(81055),
          C = t(40358),
          d = t(11512),
          p = t(18654),
          g = t.n(p),
          x = t(36118),
          T = t(71421),
          h = t(36707),
          l = t(39905),
          o = t(72609),
          r = t(33220),
          i = t(86681),
          c = t(1706);
        function D(f) {
          const { id: U, bSelfPurchaseOption: Y } = f,
            { data: W } = (0, C.Q_)(U),
            { data: Z } = (0, C.J$)(U);
          if (!Z) return null;
          const z = Y && Z.item_type == n.c6.RD ? Z.self_purchase_option : W;
          return (0, e.jsx)(M, { purchaseOption: z, ...f });
        }
        function M(f) {
          const {
              bSingleLineMode: U,
              onlyOneDiscountPct: Y,
              id: W,
              purchaseOption: Z,
              bHidePrePurchase: z,
              bHideReleaseDate: k,
              bHideIfDemo: q,
              bPurchaseOptionDisplay: F,
              strContainerClassName: te,
              strDiscountAndPriceClassName: N,
              strPriceFormattedClassName: G,
              bPreferWholeNumbers: b,
              bSelfPurchaseOption: s,
              bHideNewTag: A,
            } = f,
            R = o.TS.NOW,
            { data: E } = (0, C.by)(W),
            { data: L } = (0, C.J$)(W);
          if (!L) return null;
          const u = Z,
            S = !A && (0, a.fk)(E, R),
            O = (0, h.A)({
              [g().StoreSalePriceWidgetContainer]: !0,
              [g().SingleLineMode]: U,
              StoreSalePriceWidgetContainer: !0,
              [g().NewItem]: S,
              [g().PurchaseOption]: F,
              [te ?? ""]: !!te,
            });
          if (f.bShowInLibrary)
            return (0, e.jsx)("div", {
              className: O,
              children: (0, e.jsx)("div", {
                className: g().StoreSalePriceBox,
                children: l.Z.Localize("#EventDisplay_CallToAction_InLibrary"),
              }),
            });
          if (E && E.is_coming_soon && (!u || !u.packageid)) {
            if (k) return null;
            const X =
              E.coming_soon_display &&
              ["text_comingsoon", "text_tba"].includes(E.coming_soon_display)
                ? (0, d.d)(E)
                : l.Z.Localize(
                    "#EventDisplay_CallToAction_ComingSoon_Date",
                    (0, v.CC)(E),
                  );
            return (0, e.jsx)("div", {
              className: O,
              children: (0, e.jsx)("div", {
                className: g().StoreSalePriceBox,
                children: X,
              }),
            });
          }
          if (L.is_free)
            if (L.is_free_temporarily) {
              if (u && u.is_free_to_keep && !u.formatted_original_price)
                return (0, e.jsx)("div", {
                  className: O,
                  children: (0, e.jsx)("div", {
                    className: g().StoreSalePriceBox,
                    children: l.Z.Localize("#EventDisplay_CallToAction_Free"),
                  }),
                });
            } else
              return L.item_type == n.c6.qI && L.type == n.uE.ue
                ? q
                  ? null
                  : (0, e.jsxs)("div", {
                      className: O,
                      children: [
                        S &&
                          (0, e.jsx)("div", {
                            className: g().StoreSaleNewItem,
                            children: l.Z.Localize("#Flag_New"),
                          }),
                        (0, e.jsx)("div", {
                          className: g().StoreSalePriceBox,
                          children: l.Z.Localize(
                            "#EventDisplay_CallToAction_FreeDemo",
                          ),
                        }),
                      ],
                    })
                : (0, e.jsxs)("div", {
                    className: O,
                    children: [
                      S &&
                        (0, e.jsx)("div", {
                          className: g().StoreSaleNewItem,
                          children: l.Z.Localize("#Flag_New"),
                        }),
                      (0, e.jsx)("div", {
                        className: g().StoreSalePriceBox,
                        children: l.Z.Localize(
                          "#EventDisplay_CallToAction_FreeToPlay",
                        ),
                      }),
                    ],
                  });
          if (!u || !u.formatted_final_price) return null;
          let B = u.discount_pct || 0,
            y = (!Y && L.item_type == n.c6.xO && u.bundle_discount_pct) || 0,
            Q = u.formatted_final_price;
          if (b) {
            const X = (0, r.rt)(o.iA.country_code.toUpperCase()),
              H = { ...(0, i.J)(X), bWholeUnitsOnly: !0 };
            Q = (0, c.d)(Number.parseInt(u.final_price_in_cents || "0"), H);
          }
          const ue = (0, a.Nq)(E, u);
          return (0, e.jsx)(I, {
            bSingleLineMode: !!U,
            nBaseDiscountPercentage: y,
            nDiscountPercentage: B,
            bIsPrePurchase: ue,
            strBestPurchaseOriginalPriceFormatted:
              u.formatted_original_price || "",
            strBestPurchasePriceFormatted: Q,
            bHideDiscountPercentForCompliance:
              !!u.hide_discount_pct_for_compliance,
            bShowNewFlag: S,
            bHidePrePurchase: !!z,
            strDiscountAndPriceClassName: N,
            strPriceFormattedClassName: G,
            bPurchaseOptionDisplay: F,
          });
        }
        function I(f) {
          const {
              bSingleLineMode: U,
              nDiscountPercentage: Y,
              bIsPrePurchase: W,
              nBaseDiscountPercentage: Z,
              strBestPurchaseOriginalPriceFormatted: z,
              strBestPurchasePriceFormatted: k,
              bHideDiscountPercentForCompliance: q,
              bShowNewFlag: F,
              bHidePrePurchase: te,
              strDiscountAndPriceClassName: N,
              strPriceFormattedClassName: G,
              bPurchaseOptionDisplay: b,
            } = f,
            s = q;
          let A;
          return (
            Y &&
              (s
                ? (A = l.Z.Localize("#Discount_ARIA_Label_SpecialPrice", z))
                : (A = l.Z.Localize("#Discount_ARIA_Label", Y, z, k))),
            (0, e.jsxs)("div", {
              className: (0, h.A)({
                [g().StoreSalePriceWidgetContainer]: !0,
                [g().SingleLineMode]: U,
                StoreSalePriceWidgetContainer: !0,
                [g().Discounted]: !!Y,
                Discounted: !!Y,
                [g().PrePurchase]: !!W,
                [g().NewItem]: !!F,
                [g().PurchaseOption]: b,
                [N ?? ""]: !!N,
              }),
              "aria-label": A,
              children: [
                !!(W && !te) &&
                  (0, e.jsx)("div", {
                    className: (0, h.A)(g().StoreSalePrepurchaseLabel),
                    children: (0, e.jsx)("span", {
                      children: l.Z.Localize(
                        "#EventDisplay_CallToAction_Prepurchase_Short",
                      ),
                    }),
                  }),
                !!(!W && F) &&
                  (0, e.jsx)("div", {
                    className: g().StoreSaleNewItem,
                    children: l.Z.Localize("#Flag_New"),
                  }),
                !!(Z && !s) &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(T.Gq, {
                        toolTipContent: l.Z.Localize(
                          "#Sale_Bundle_Discount_ttip",
                        ),
                        children: (0, e.jsx)("span", {
                          className: (0, h.A)(g().BaseDiscount),
                          children: `-${Z}%`,
                        }),
                      }),
                      !!Y &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("span", { children: "\xA0" }),
                            (0, e.jsx)(T.Gq, {
                              toolTipContent: l.Z.Localize(
                                "#Sale_Bundle_Discount_Limited_ttip",
                              ),
                              children: (0, e.jsx)("span", {
                                className: (0, h.A)(g().StoreSaleDiscountBox),
                                children: `-${Y}%`,
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                !!(!Z && Y && !s) &&
                  (0, e.jsx)("div", {
                    className: g().StoreSaleDiscountBox,
                    children: `-${Y}%`,
                  }),
                !!(Y && s) &&
                  (0, e.jsx)("div", {
                    className: g().DiscountIconCtn,
                    children: (0, e.jsx)(x.XH_, {}),
                  }),
                (Y || Z) && z && !s
                  ? (0, e.jsxs)("div", {
                      className: (0, h.A)(g().StoreSaleDiscountedPriceCtn),
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, h.A)({
                            [g().SingleLineOriginalPrice]: U,
                            [g().StoreOriginalPrice]: !U,
                          }),
                          children: z,
                        }),
                        (0, e.jsx)("div", {
                          className: (0, h.A)({
                            [g().StoreSalePriceBox]: !0,
                            [g().SingleLineMode]: U,
                            [G ?? ""]: !!G,
                          }),
                          children: k,
                        }),
                      ],
                    })
                  : (0, e.jsx)("div", {
                      className: (0, h.A)({
                        [g().StoreSalePriceBox]: !0,
                        [G ?? ""]: !!G,
                      }),
                      children: k,
                    }),
              ],
            })
          );
        }
      },
      41188: (K, _, t) => {
        "use strict";
        t.d(_, { n: () => T, p: () => h });
        var e = t(7850),
          n = t(99412),
          v = t(39567),
          a = t(18654),
          C = t.n(a),
          d = t(12818),
          p = t(36707),
          g = t(39905),
          x = t(72609);
        function T(o) {
          const {
            rgTagIDs: r,
            bShowEvenIfNoTags: i,
            bHideTitle: c,
            bLargeText: D,
            bNoStoreLinks: M,
          } = o;
          return r?.length > 0 || i
            ? (0, e.jsxs)("div", {
                className: (0, p.A)(
                  C().SaleTagBlockCtn,
                  D ? C().LargeText : "",
                  "SaleTagBlockCtn",
                ),
                children: [
                  !c &&
                    (0, e.jsx)("div", {
                      className: (0, p.A)(C().TagTitle, "WidgetTagTitle"),
                      children: g.Z.Localize("#GameHover_Tags"),
                    }),
                  r?.length > 0
                    ? (0, e.jsx)("div", {
                        className: (0, p.A)(C().TagBox, "TagBox"),
                        children: r.map((I) =>
                          (0, e.jsx)(l, { tagid: I, bNoStoreLinks: M }, I),
                        ),
                      })
                    : (0, e.jsx)("div", {
                        children: g.Z.Localize("#Broadcast_None"),
                      }),
                ],
              })
            : null;
        }
        function h(o) {
          const { tagid: r, className: i } = o,
            c = (0, v.MB)(r, x.TS.LANGUAGE);
          if (!c) return null;
          const D = (0, n.wwZ)((0, n.sfN)(x.TS.LANGUAGE)),
            M = `${x.TS.STORE_BASE_URL}tags/${D}/${c}`;
          return (0, e.jsx)(d.q, {
            url: M,
            className: (0, p.A)(C().Tag, "WidgetTag", i),
            children: c,
          });
        }
        function l(o) {
          const { tagid: r, className: i, bNoStoreLinks: c } = o,
            D = (0, n.wwZ)((0, n.sfN)(x.TS.LANGUAGE)),
            M = (0, v.MB)(r, x.TS.LANGUAGE),
            I = `${x.TS.STORE_BASE_URL}tags/${D}/${M}`;
          return M
            ? c
              ? (0, e.jsx)("div", {
                  className: (0, p.A)(C().Tag, "WidgetTag", i),
                  children: M,
                })
              : (0, e.jsx)(d.q, {
                  url: I,
                  className: (0, p.A)(C().Tag, "WidgetTag", i),
                  children: M,
                })
            : null;
        }
      },
      77459: (K, _, t) => {
        "use strict";
        t.d(_, { E: () => h });
        var e = t(7850),
          n = t(97825),
          v = t(29522),
          a = t(40358),
          C = t(24179),
          d = t(13977),
          p = t(18654),
          g = t.n(p),
          x = t(36707),
          T = t(18210);
        function h(l) {
          const { appid: o, bIsMuted: r } = l,
            i = (0, v.$5)(o),
            c = (0, C.S6)(o),
            { data: D } = (0, a.J$)(i),
            { mutate: M } = (0, n.S)(i),
            I = (U) => {
              U.preventDefault(), c ? (0, d.o)(o, D?.name) : M();
            },
            f = (0, x.A)(
              g().CapsuleBottomBar,
              r && g().Muted,
              c ? g().PlayNowButton : g().AddToLibraryButton,
            );
          return (0, e.jsx)("div", {
            role: "button",
            tabIndex: 0,
            onClick: I,
            className: f,
            onKeyDown: (U) => {
              (U.key === "Enter" || U.key === " ") &&
                (U.preventDefault(), I(U));
            },
            children: (0, T.we)(c ? "#Sale_PlayNow" : "#Sale_AddToLibrary"),
          });
        }
      },
      16179: (K, _, t) => {
        "use strict";
        t.d(_, { x: () => d });
        var e = t(47875),
          n = t(72865),
          v = t(95535),
          a = t(83482),
          C = t(77200);
        function d(p, g) {
          const x = (0, n.n9)(),
            T = (0, C.w)(),
            h = (0, v.tB)((0, e._)(p, g));
          return { snr: (0, a.L3)(x), strStoreURL: (0, a.It)(h, x, T) };
        }
      },
      12818: (K, _, t) => {
        "use strict";
        t.d(_, { F: () => T, q: () => g });
        var e = t(7850),
          n = t(24660),
          v = t(72865),
          a = t(52393),
          C = t.n(a),
          d = t(72609),
          p = t(39905);
        function g(h) {
          const {
              className: l,
              url: o,
              style: r,
              children: i,
              bSkipForcingStoreLink: c,
              bOpenInline: D,
              bFocusable: M = !0,
            } = h,
            I = c ? o : o ? x(o, d.TS.STORE_BASE_URL) : void 0,
            f = (0, v.aL)(I);
          return f
            ? (0, e.jsx)(n.Ii, {
                href: f,
                target: d.TS.IN_CLIENT || D ? void 0 : "_blank",
                className: l,
                style: r,
                rel: "noopener noreferrer",
                focusable: M,
                children: i,
              })
            : (0, e.jsx)("span", { style: r, className: l, children: i });
        }
        function x(h, l) {
          try {
            const o = new URL(l),
              r = new URL(h);
            return o.href.replace(/\/$/, "") + r.pathname + r.search + r.hash;
          } catch {
            return "";
          }
        }
        function T(h) {
          const { section: l } = h;
          return l.label_link && !l.label_link_style
            ? (0, e.jsx)("div", {
                className: C().SaleViewAll,
                children: (0, e.jsx)(g, {
                  url: l.label_link,
                  children: p.Z.Localize("#btn_live_streams_all"),
                }),
              })
            : null;
        }
      },
      66243: (K, _, t) => {
        "use strict";
        t.d(_, { Oh: () => T, n9: () => g, sP: () => C, x0: () => x });
        var e = t(7850),
          n = t(24660),
          v = t(44375),
          a = t.n(v);
        function C(l) {
          const { children: o, ...r } = l;
          return (0, e.jsx)(n.fu, {
            className: v.GreenButton,
            type: "button",
            ...r,
            children: (0, e.jsx)("span", { children: o }),
          });
        }
        function d(l) {
          const { children: o, ...r } = l;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ...r,
            children: jsx("span", { children: o }),
          });
        }
        function p(l) {
          const { children: o, ...r } = l;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...r,
            children: jsx("span", { children: o }),
          });
        }
        function g(l) {
          const { children: o, ...r } = l;
          return (0, e.jsx)(n.fu, {
            className: v.BlueButton,
            type: "button",
            ...r,
            children: (0, e.jsx)("span", { children: o }),
          });
        }
        function x(l) {
          const { children: o, ...r } = l;
          return (0, e.jsx)(n.Ii, {
            className: v.BlueButton,
            ...r,
            children: (0, e.jsx)("span", { children: o }),
          });
        }
        function T(l) {
          const { children: o, ...r } = l;
          return (0, e.jsx)(n.fu, {
            className: v.GreyButton,
            type: "button",
            ...r,
            children: (0, e.jsx)("span", { children: o }),
          });
        }
        function h(l) {
          const { children: o, ...r } = l;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ...r,
            children: jsx("span", { children: o }),
          });
        }
      },
      87249: (K, _, t) => {
        "use strict";
        t.d(_, { C0: () => h, Ck: () => o, mj: () => l });
        var e = t(7850),
          n = t(56062),
          v = t(72609),
          a = t(40358),
          C = t(64238),
          d = t.n(C),
          p = t(90626),
          g = t(25046),
          x = t(73187),
          T = t.n(x),
          h = ((r) => (
            (r[(r.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (r[(r.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (r[(r.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            r
          ))(h || {});
        function l(r) {
          const { id: i, active: c, bIsHoverMode: D, eGrowOnActivate: M } = r,
            { data: I } = (0, a.J$)(i),
            f = p.useRef(0),
            U = p.useRef(null);
          p.useLayoutEffect(() => {
            c && U.current && (U.current.currentTime = f.current);
          }, [c]);
          const Y = (q) => {
              f.current = q.currentTarget.currentTime;
            },
            W = (0, g.kB)(c ? i : void 0);
          if ((D && v.TS.IN_MOBILE) || !c || !I || !I.visible || !W)
            return null;
          const Z = W.filter(
            (q) => q.microtrailer && q.microtrailer.length > 0,
          );
          if (Z.length === 0)
            return I &&
              I.related_items?.parent_appid &&
              (I.type == n.uE.ue || I.type == n.uE.Vi)
              ? (0, e.jsx)(l, {
                  ...r,
                  id: { appid: I.related_items.parent_appid },
                })
              : null;
          let z;
          switch (M) {
            case 1:
              z = T().GrowOnHoverImplicit;
              break;
            case 2:
              z = T().GrowOnHoverMedium;
              break;
          }
          const k = Z[0];
          return (0, e.jsx)("video", {
            className: d()(T().CapsuleMicroTrailer, z),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: U,
            playsInline: !0,
            onTimeUpdate: Y,
            children: (0, e.jsx)(o, { trailer: k }),
          });
        }
        function o(r) {
          const { trailer: i } = r;
          return !i || !i.microtrailer
            ? null
            : (0, e.jsx)(e.Fragment, {
                children: i.microtrailer?.map((c) =>
                  v.TS.IN_CLIENT && c.type == "video/mp4"
                    ? null
                    : (0, e.jsx)(
                        "source",
                        { src: (0, g.M4)(i, c.filename || ""), type: c.type },
                        c.filename,
                      ),
                ),
              });
        }
      },
      83784: (K, _, t) => {
        "use strict";
        t.d(_, { J: () => e, S: () => n });
        function e(v) {
          return v
            ? !!(
                v.related_items &&
                v.related_items.standalone_demo_appid &&
                v.related_items.standalone_demo_appid.length > 0 &&
                v.related_items.standalone_demo_appid[0]
              )
            : !1;
        }
        function n(v) {
          return !v || !v.related_items?.standalone_demo_appid
            ? []
            : v.related_items?.standalone_demo_appid;
        }
      },
      3348: (K, _, t) => {
        "use strict";
        t.d(_, { CC: () => l, VM: () => C });
        var e = t(16114),
          n = t(84346),
          v = t(39905),
          a = t(11512);
        function C(o) {
          return o?.is_coming_soon
            ? p(
                o.coming_soon_display,
                o.steam_release_date,
                o.custom_release_date_message,
              )
            : o?.steam_release_date
              ? g(o.steam_release_date)
              : "";
        }
        function d(o) {
          return C(o.releaseInfo);
        }
        function p(o, r, i) {
          switch (o) {
            case "date_full":
              return g(r);
            case "date_month":
              return T(new Date(r * 1e3));
            case "date_quarter":
              return h(new Date(r * 1e3));
            case "date_year":
              return x(new Date(r * 1e3));
            case "text_comingsoon":
              return i || v.Z.Localize("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return i || v.Z.Localize("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        }
        function g(o) {
          return new Date(o * 1e3).toLocaleDateString((0, n.J)());
        }
        function x(o) {
          return o.toLocaleDateString((0, n.J)(), { year: "numeric" });
        }
        function T(o) {
          return o.toLocaleDateString((0, n.J)(), {
            month: "long",
            year: "numeric",
          });
        }
        function h(o) {
          switch (o.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return v.Z.Localize("#Time_QuarterOfYear_Q1", o.getUTCFullYear());
            case 3:
            case 4:
            case 5:
              return v.Z.Localize("#Time_QuarterOfYear_Q2", o.getUTCFullYear());
            case 6:
            case 7:
            case 8:
              return v.Z.Localize("#Time_QuarterOfYear_Q3", o.getUTCFullYear());
            default:
              return v.Z.Localize("#Time_QuarterOfYear_Q4", o.getUTCFullYear());
          }
        }
        function l(o) {
          if (!o) return "";
          if (o && o.is_coming_soon) {
            if (o.coming_soon_display) return (0, a.d)(o);
            if (o.custom_release_date_message)
              return o.custom_release_date_message;
            const i = o.steam_release_date;
            return i
              ? o.is_abridged_release_date
                ? T(new Date(i * 1e3))
                : (0, e.$z)(i)
              : "";
          }
          let r = o.steam_release_date;
          return r || (r = o.original_release_date), r ? (0, e.$z)(r) : "";
        }
      },
      81055: (K, _, t) => {
        "use strict";
        t.d(_, { Nq: () => d, fk: () => C });
        var e = t(44983);
        function n(p, g = !1) {
          if (p.is_coming_soon && !g) return 0;
          let x = p.steam_release_date;
          return x || (x = p.original_release_date), x;
        }
        function v(p) {
          let g = p.original_steam_release_date;
          return g || (g = n(p)), g;
        }
        const a = 7;
        function C(p, g) {
          if (!p) return !1;
          const x = n(p);
          return x ? !p.is_coming_soon && x + a * e.Kp.PerDay > g : !1;
        }
        function d(p, g) {
          return !!(p && p.is_coming_soon && g && g.packageid);
        }
      },
      47875: (K, _, t) => {
        "use strict";
        t.d(_, { _: () => v, l: () => a });
        var e = t(72609),
          n = t(83784);
        function v(C, d = !1) {
          if (C)
            return d && (0, n.J)(C)
              ? `${e.TS.STORE_BASE_URL}app/${((0, n.S))(C)[0]}`
              : `${e.TS.STORE_BASE_URL}${C.store_url_path}`;
        }
        function a() {
          window.location.href = `${e.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        }
      },
      29522: (K, _, t) => {
        "use strict";
        t.d(_, {
          $5: () => p,
          Qm: () => C,
          _Z: () => a,
          h0: () => d,
          oc: () => g,
        });
        var e = t(40358),
          n = t(56062),
          v = t(90626);
        function a(T) {
          const { data: h } = (0, e.J$)(T);
          return (0, v.useMemo)(
            () =>
              h
                ? h.item_type == n.c6.qI
                  ? [h.appid]
                  : h.included_appids || []
                : [],
            [h],
          );
        }
        function C(T) {
          if (!T?.length) return [];
          const h = T.map((l) => l.creator_clan_account_id).filter((l) => !!l);
          return Array.from(new Set(h));
        }
        function d(T) {
          const { data: h } = (0, e.J$)(T);
          return (0, v.useMemo)(() => {
            if (h && h.related_items && h.related_items.parent_appid)
              return { appid: h.related_items.parent_appid };
          }, [h]);
        }
        function p(T) {
          return (0, v.useMemo)(() => (T ? { appid: T } : void 0), [T]);
        }
        function g(T) {
          return (0, v.useMemo)(() => (T ? { packageid: T } : void 0), [T]);
        }
        function x(T) {
          return useMemo(() => (T ? { bundleid: T } : void 0), [T]);
        }
      },
      11996: (K, _, t) => {
        "use strict";
        t.d(_, { Fh: () => x, zg: () => T });
        var e = t(80902),
          n = t(75233),
          v = t(68312),
          a = t(98609),
          C = t(20125);
        async function d(l, o) {
          const r = (0, C.Am)(a.TS.STORE_BASE_URL, o, a.iA.country_code);
          return (await (await fetch(r)).json()).rgFollowedApps || [];
        }
        function p() {
          const l = (0, v.KV)(),
            o = a.iA.accountid;
          return (0, e.I)(g(l, o));
        }
        function g(l, o) {
          return {
            queryKey: h(o),
            queryFn: async () => {
              if (!o) return new Set();
              const r = await d(l, o);
              return new Set(r);
            },
            staleTime: 600 * 1e3,
          };
        }
        function x(l) {
          const { data: o } = p();
          return o === void 0 || l == null ? void 0 : o.has(l);
        }
        function T() {
          const l = (0, n.jE)(),
            o = a.iA.accountid;
          return (r, i) => {
            l.setQueryData(h(o), (c) => {
              if (!c) return;
              const D = new Set(c);
              if (i) for (const M of i) D.delete(M);
              if (r) for (const M of r) D.add(M);
              return D;
            });
          };
        }
        function h(l) {
          return ["AccountFollowApps", l ?? 0];
        }
      },
      19047: (K, _, t) => {
        "use strict";
        t.d(_, { L: () => d });
        var e = t(20125),
          n = t(51614),
          v = t(98609),
          a = t(67705),
          C = t(11996);
        function d(p, g, x) {
          const T = (0, C.zg)(),
            h = v.iA.accountid;
          return (0, n.n)({
            mutationKey: ["useUpdateAppFollow", p, h, g],
            mutationFn: async () => {
              if (p == null) return;
              const l = v.TS.STORE_BASE_URL + "explore/followgame",
                o = new FormData();
              o.append("appid", "" + p),
                o.append("sessionid", (0, a.KC)()),
                g || o.append("unfollow", "1"),
                x && o.append("snr", x);
              const r = await fetch(l, {
                method: "POST",
                body: o,
                credentials: "include",
              });
              if (!r.ok)
                throw new Error(
                  `Follow App ${g ? "add" : "remove"} of appid ${p} failed (${r.status})`,
                );
            },
            onMutate: () => {
              p != null && T(g ? [p] : void 0, g ? void 0 : [p]);
            },
            onError: () => {
              p != null && T(g ? void 0 : [p], g ? [p] : void 0);
            },
            onSuccess: () => {
              (0, e.WZ)();
            },
          });
        }
      },
      10134: (K, _, t) => {
        "use strict";
        t.d(_, { BD: () => x, h3: () => T });
        var e = t(80902),
          n = t(75233),
          v = t(68312),
          a = t(98609),
          C = t(20125);
        async function d(l, o) {
          const r = (0, C.Am)(a.TS.STORE_BASE_URL, o, a.iA.country_code),
            c = await (await fetch(r)).json();
          return Object.keys(c.rgIgnoredApps).map(Number) || [];
        }
        function p() {
          const l = (0, v.KV)(),
            o = a.iA.accountid;
          return (0, e.I)(g(l, o));
        }
        function g(l, o) {
          return {
            queryKey: h(o),
            queryFn: async () => {
              if (!o) return new Set();
              const r = await d(l, o);
              return new Set(r);
            },
            staleTime: 600 * 1e3,
          };
        }
        function x(l) {
          const { data: o } = p();
          return o === void 0 || l == null ? void 0 : o.has(l);
        }
        function T() {
          const l = (0, n.jE)(),
            o = a.iA.accountid;
          return (r, i) => {
            l.setQueryData(h(o), (c) => {
              if (!c) return;
              const D = new Set(c);
              if (i) for (const M of i) D.delete(M);
              if (r) for (const M of r) D.add(M);
              return D;
            });
          };
        }
        function h(l) {
          return ["AccountIgnoreApps", l ?? 0];
        }
      },
      62292: (K, _, t) => {
        "use strict";
        t.d(_, { Q: () => p });
        var e = t(20125),
          n = t(51614),
          v = t(98609),
          a = t(67705),
          C = t(10134),
          d = t(43462);
        function p(g, x, T, h = d.RI.$m) {
          const l = (0, C.h3)(),
            o = v.iA.accountid;
          return (0, n.n)({
            mutationKey: ["useUpdateAppIgnore", g, o, x],
            mutationFn: async () => {
              if (g == null) return;
              const r =
                  v.TS.STORE_BASE_URL + "recommended/ignorerecommendation",
                i = new FormData();
              i.append("appid", "" + g),
                i.append("sessionid", (0, a.KC)()),
                i.append("remove", x ? "0" : "1"),
                T && i.append("snr", T),
                i.append("ignore_reason", "" + h);
              const c = await fetch(r, {
                method: "POST",
                body: i,
                credentials: "include",
              });
              if (!c.ok)
                throw new Error(
                  `Ignore App ${x ? "add" : "remove"} of appid ${g} failed (${c.status})`,
                );
            },
            onMutate: () => {
              g != null && l(x ? [g] : void 0, x ? void 0 : [g]);
            },
            onError: () => {
              g != null && l(x ? void 0 : [g], x ? [g] : void 0);
            },
            onSuccess: () => {
              (0, e.WZ)();
            },
          });
        }
      },
      24179: (K, _, t) => {
        "use strict";
        t.d(_, { S6: () => r, ZJ: () => D, $Y: () => h, _7: () => i });
        var e = t(90626),
          n = t(80902),
          v = t(75233),
          a = t(68312),
          C = t(20125),
          d = t(98609);
        async function p(M, I) {
          const f = (0, C.Am)(d.TS.STORE_BASE_URL, I, d.iA.country_code);
          return (await (await fetch(f)).json()).rgOwnedApps || [];
        }
        async function g(M, I, f) {
          return (await p(M, I)).includes(f);
        }
        var x = t(40358),
          T = t(72609);
        function h() {
          const M = (0, a.KV)(),
            I = T.iA.accountid;
          return (0, n.I)(l(M, I));
        }
        function l(M, I) {
          return {
            queryKey: c(I),
            queryFn: async () => {
              if (!I) return new Set();
              const f = await p(M, I);
              return new Set(f);
            },
            staleTime: 600 * 1e3,
          };
        }
        function o(M, I, f) {
          return {
            queryKey: ["AccountOwnsApp", I, f],
            queryFn: async () => (I ? await g(M, I, f) : !1),
            staleTime: 600 * 1e3,
          };
        }
        function r(M) {
          const I = (0, a.KV)(),
            f = T.iA.accountid,
            { data: U } = (0, n.I)(o(I, f, M));
          return U === void 0 ? void 0 : U;
        }
        function i(M) {
          const I = (0, v.jE)(),
            f = T.iA.accountid;
          return e.useCallback(
            (U) => {
              I.setQueryData(c(f), (Y) =>
                Y ? new Set([...Y.values(), ...U]) : M ? new Set(U) : void 0,
              );
            },
            [I, f, M],
          );
        }
        function c(M) {
          return ["AccountOwnedApps", M ?? 0];
        }
        function D(M) {
          const { data: I } = (0, x.J$)(M && "appid" in M ? void 0 : M),
            { data: f } = h();
          let U;
          return (
            M && "appid" in M ? (U = [M.appid]) : I && (U = I.included_appids),
            U === void 0 || f === void 0 || U.length == 0
              ? { bIsOwned: void 0, unAppID: void 0 }
              : { bIsOwned: !U.some((Y) => !f.has(Y)), unAppID: U[0] }
          );
        }
      },
      35675: (K, _, t) => {
        "use strict";
        t.d(_, {
          Us: () => c,
          xU: () => i,
          Gw: () => x,
          eT: () => h,
          mQ: () => l,
          BU: () => D,
        });
        var e = t(32093),
          n = t(80902),
          v = t(75233),
          a = t(68312),
          C = t(72609),
          d = t(20125),
          p = t(98609);
        async function g(I, f) {
          const U = (0, d.Am)(p.TS.STORE_BASE_URL, f, p.iA.country_code),
            W = await (await fetch(U)).json(),
            Z = new Set();
          W.rgCreatorsIgnored?.forEach((F) => Z.add(F)),
            W.rgCreatorsFollowed?.forEach((F) => Z.add(F));
          const z = new Set();
          return (
            W.rgCreatorsIgnored?.forEach((F) => z.add(F)),
            [
              ...(W.rgCuratorsIgnored ?? []),
              ...(W.rgCurators
                ? Object.values(W.rgCurators ?? {}).map((F) => F.clanid)
                : []),
            ].map((F) => {
              const te = z.has(F);
              return {
                clanid: F,
                ignored: te,
                followed: !te,
                is_creator: Z.has(F),
              };
            })
          );
        }
        function x() {
          const I = (0, a.KV)(),
            f = C.iA.accountid;
          return (0, n.I)(T(I, f));
        }
        function T(I, f) {
          return {
            queryKey: M(f),
            queryFn: async () => {
              const U = new Map();
              if (f)
                try {
                  (await g(I, f)).forEach((W) => U.set(W.clanid, W));
                } catch (Y) {
                  console.error("GetCuratorAffinityQuery", Y);
                }
              return U;
            },
            enabled: !!f,
          };
        }
        function h(I) {
          const { data: f } = x();
          return f === void 0 || I == null ? void 0 : !!f.get(I)?.followed;
        }
        function l(I) {
          const { data: f } = x();
          return f === void 0 || I == null ? void 0 : !!f.get(I)?.ignored;
        }
        function o(I) {
          const { data: f } = x();
          if (f === void 0 || I == null || !f.has(I)) return;
          const U = f.get(I);
          return !!(U.followed && U.is_creator);
        }
        function r(I) {
          const { data: f } = x();
          if (f === void 0 || I == null || !f.has(I)) return;
          const U = f.get(I);
          return !!(U.ignored && U.is_creator);
        }
        function i() {
          return C.TS.EREALM != e.TU.k_ESteamRealmChina;
        }
        function c() {
          return C.TS.EREALM != e.TU.k_ESteamRealmChina;
        }
        function D() {
          const I = (0, v.jE)(),
            f = C.iA.accountid;
          return (U, Y, W, Z) => {
            I.setQueryData(M(f), (z) => {
              if (!z) return;
              const k = new Map(z);
              return (
                U?.forEach((q) => {
                  k.has(q.clanAccountID)
                    ? (k.get(q.clanAccountID).followed = !0)
                    : k.set(q.clanAccountID, {
                        clanid: q.clanAccountID,
                        followed: !0,
                        ignored: !1,
                        is_creator: !1,
                      });
                }),
                Y?.forEach((q) => {
                  k.has(q.clanAccountID)
                    ? (k.get(q.clanAccountID).ignored = !0)
                    : k.set(q.clanAccountID, {
                        clanid: q.clanAccountID,
                        followed: !1,
                        ignored: !0,
                        is_creator: !1,
                      });
                }),
                W?.forEach((q) => k.delete(q.clanAccountID)),
                Z?.forEach((q) => {
                  let F = k.get(q.clanAccountID);
                  F && (F.is_creator = !0);
                }),
                k
              );
            });
          };
        }
        function M(I) {
          return ["CuratorAffinityQueryKey", I ?? 0];
        }
      },
      96362: (K, _, t) => {
        "use strict";
        t.d(_, { s: () => d });
        var e = t(51614),
          n = t(67705),
          v = t(54528),
          a = t(20125),
          C = t(98609);
        function d(p, g, x) {
          const T = (0, v.$3)(),
            h = C.iA.accountid;
          return (0, e.n)({
            mutationKey: ["useUpdateWishlist", p, h, g],
            mutationFn: async () => {
              if (p == null) return;
              const l =
                  C.TS.STORE_BASE_URL +
                  "api/" +
                  (g ? "addtowishlist" : "removefromwishlist"),
                o = new FormData();
              o.append("appid", "" + p),
                o.append("sessionid", (0, n.KC)()),
                x && o.append("snr", x);
              const r = await fetch(l, {
                method: "POST",
                body: o,
                credentials: "include",
              });
              if (!r.ok)
                throw new Error(
                  `Wishlist ${g ? "add" : "remove"} of appid ${p} failed (${r.status})`,
                );
            },
            onMutate: () => {
              p != null && T(g ? [p] : void 0, g ? void 0 : [p]);
            },
            onError: () => {
              p != null && T(g ? void 0 : [p], g ? [p] : void 0);
            },
            onSuccess: () => {
              (0, a.WZ)();
            },
          });
        }
      },
      54528: (K, _, t) => {
        "use strict";
        t.d(_, { bB: () => T, $3: () => h, F0: () => g });
        var e = t(80902),
          n = t(75233),
          v = t(68312),
          a = t(72609),
          C = t(20125),
          d = t(98609);
        async function p(o, r) {
          const i = (0, C.Am)(d.TS.STORE_BASE_URL, r, d.iA.country_code);
          return (await (await fetch(i)).json()).rgWishlist || [];
        }
        function g() {
          const o = (0, v.KV)(),
            r = a.iA.accountid;
          return (0, e.I)(x(o, r));
        }
        function x(o, r) {
          return {
            queryKey: l(r),
            queryFn: async () => {
              if (!r) return new Set();
              const i = await p(o, r);
              return new Set(i);
            },
            staleTime: 600 * 1e3,
          };
        }
        function T(o) {
          const { data: r } = g();
          return r === void 0 || o == null ? void 0 : r.has(o);
        }
        function h() {
          const o = (0, n.jE)(),
            r = a.iA.accountid;
          return (i, c) => {
            o.setQueryData(l(r), (D) => {
              if (!D) return;
              const M = new Set(D);
              if (c) for (const I of c) M.delete(I);
              if (i) for (const I of i) M.add(I);
              return M;
            });
          };
        }
        function l(o) {
          return ["AccountWishlistApps", o ?? 0];
        }
      },
      95535: (K, _, t) => {
        "use strict";
        t.d(_, { Pm: () => h, d$: () => l, tB: () => T });
        var e = t(7850),
          n = t(43434),
          v = t(83482),
          a = t(71421),
          C = t(53113),
          d = t(3166),
          p = t(24660);
        function g(o) {
          if (!o) return;
          let r = o?.jsondata?.read_more_link
            ? (0, C.wm)(o.jsondata.read_more_link).toLocaleLowerCase()
            : void 0;
          if (r) return [r];
        }
        function x(o, r) {
          return (0, n.p)(o, g(r));
        }
        function T(o, r) {
          return o
            ? ((0, n.p)(o)
                ? x(o, r)
                  ? (o =
                      (d.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                      (0, n.E)(o))
                  : (o =
                      (d.TS.IN_CLIENT ? "steam://openurl_external/" : "") + o)
                : (o = (0, C.NT)(o)),
              o)
            : "";
        }
        function h(o, r, i) {
          let c = o;
          return (
            c.toLowerCase().startsWith("http") || (c = "http://" + c),
            (0, e.jsx)(l, { url: c, event: r, children: i || o })
          );
        }
        const l = (o) => {
          const { url: r, event: i, className: c, style: D } = o;
          let M = (0, v.OZ)(r);
          M = T(M, i);
          let I;
          (0, n.p)(M) && (I = "noopener nofollow");
          const f =
            typeof o.children == "string" &&
            o.children.length > 0 &&
            r &&
            !r.startsWith("steam://")
              ? (0, C.Qz)(r)
              : void 0;
          return (0, e.jsx)(a.Gq, {
            toolTipContent: f,
            direction: "top",
            children: (0, e.jsx)(p.Ii, {
              className: c,
              href: M,
              rel: I,
              id: o.id,
              style: D,
              children: o.children,
            }),
          });
        };
      },
      13977: (K, _, t) => {
        "use strict";
        t.d(_, { M: () => l, o: () => h });
        var e = t(7850),
          n = t(16412),
          v = t(96538),
          a = t(88003),
          C = t(36118),
          d = t(36707),
          p = t(18210),
          g = t(3166),
          x = t(54599),
          T = t.n(x);
        async function h(i, c) {
          const D = "steam://run/" + i;
          g.TS.IN_CLIENT
            ? (console.log(`Running game ${i} locally.`),
              (window.location.href = D))
            : (console.log(
                `Cannot identify local client. Prompting user to launch ${i}.`,
              ),
              o(i, D, c));
        }
        async function l(i, c) {
          const D = "steam://install/" + i;
          g.TS.IN_CLIENT ? (window.location.href = D) : o(i, D, c);
        }
        async function o(i, c, D) {
          console.log("prompting for", D);
          const M = g.TS.STORE_BASE_URL + "about/";
          (0, a.mK)(
            (0, e.jsx)(r, {
              appid: i,
              strGameName: D || "",
              strOnOKUrl: c,
              strDownloadSteamUrl: M,
            }),
            window,
          );
        }
        const r = (i) => {
          const c = () => i.closeModal && i.closeModal();
          return (0, e.jsx)(v.x_, {
            onEscKeypress: c,
            className: T().GotSteamDialog,
            children: (0, e.jsxs)(n.UC, {
              children: [
                (0, e.jsxs)(n.Y9, {
                  children: [" ", (0, p.we)("#GotSteam_Title"), " "],
                }),
                (0, e.jsxs)(n.nB, {
                  children: [
                    (0, e.jsx)(n.a3, {
                      children: (0, p.PP)(
                        "#GotSteam_PromptWithDownloadLink",
                        (0, e.jsx)("a", {
                          href: i.strDownloadSteamUrl,
                          className: T().DownloadSteamUrl,
                          children: (0, p.we)("#GotSteam_DownloadLinkText"),
                        }),
                        (0, e.jsx)("span", {
                          className: T().GameName,
                          children: i.strGameName,
                        }),
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: T().Buttons,
                      children: [
                        (0, e.jsxs)("a", {
                          href: i.strOnOKUrl,
                          onClick: c,
                          className: (0, d.A)(T().Button, T().LeftButton),
                          children: [
                            (0, e.jsxs)("div", {
                              className: T().AnswerText,
                              children: [" ", (0, p.we)("#GotSteam_Yes"), " "],
                            }),
                            (0, e.jsxs)("div", {
                              className: T().ActionText,
                              children: [
                                " ",
                                (0, p.we)("#GotSteam_Yes_Play"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsxs)("a", {
                          href: i.strDownloadSteamUrl,
                          onClick: c,
                          className: T().Button,
                          children: [
                            (0, e.jsxs)("div", {
                              className: T().AnswerText,
                              children: [" ", (0, p.we)("#GotSteam_No"), " "],
                            }),
                            (0, e.jsxs)("div", {
                              className: T().ActionText,
                              children: [
                                " ",
                                (0, p.we)("#GotSteam_No_Download"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: T().Footer,
                      children: [
                        (0, e.jsx)(C.Qte, { className: T().Logo }),
                        (0, p.we)("#GotSteam_Blurb"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      },
      74732: (K, _, t) => {
        "use strict";
        t.d(_, { g4: () => x });
        var e = t(80755),
          n = t(64415),
          v = t(8323),
          a = t(57589),
          C = t(30096),
          d = Object.defineProperty,
          p = Object.getOwnPropertyDescriptor,
          g = (r, i, c, D) => {
            for (
              var M = D > 1 ? void 0 : D ? p(i, c) : i, I = r.length - 1, f;
              I >= 0;
              I--
            )
              (f = r[I]) && (M = (D ? f(i, c, M) : f(M)) || M);
            return D && M && d(i, c, M), M;
          },
          x = ((r) => (
            (r[(r.A = 0)] = "A"),
            (r[(r.B = 1)] = "B"),
            (r[(r.X = 2)] = "X"),
            (r[(r.Y = 3)] = "Y"),
            (r[(r.Left = 4)] = "Left"),
            (r[(r.Right = 5)] = "Right"),
            (r[(r.Up = 6)] = "Up"),
            (r[(r.Down = 7)] = "Down"),
            (r[(r.HomeMenu = 8)] = "HomeMenu"),
            (r[(r.QuickMenu = 9)] = "QuickMenu"),
            (r[(r.Select = 10)] = "Select"),
            (r[(r.Start = 11)] = "Start"),
            (r[(r.LeftBumper = 12)] = "LeftBumper"),
            (r[(r.RightBumper = 13)] = "RightBumper"),
            (r[(r.LeftTrigger = 14)] = "LeftTrigger"),
            (r[(r.RightTrigger = 15)] = "RightTrigger"),
            (r[(r.LeftStick = 16)] = "LeftStick"),
            (r[(r.LeftStickClick = 17)] = "LeftStickClick"),
            (r[(r.RightStick = 18)] = "RightStick"),
            (r[(r.RightStickClick = 19)] = "RightStickClick"),
            (r[(r.LeftTrackpad = 20)] = "LeftTrackpad"),
            (r[(r.LeftTrackpadClick = 21)] = "LeftTrackpadClick"),
            (r[(r.RightTrackpad = 22)] = "RightTrackpad"),
            (r[(r.RightTrackpadClick = 23)] = "RightTrackpadClick"),
            (r[(r.RearLeftUpper = 24)] = "RearLeftUpper"),
            (r[(r.RearLeftLower = 25)] = "RearLeftLower"),
            (r[(r.RearRightUpper = 26)] = "RearRightUpper"),
            (r[(r.RearRightLower = 27)] = "RearRightLower"),
            r
          ))(x || {});
        function T(r) {
          switch (r) {
            case 0:
              return EGamepadButton.OK;
            case 1:
              return EGamepadButton.CANCEL;
            case 2:
              return EGamepadButton.SECONDARY;
            case 3:
              return EGamepadButton.OPTIONS;
            case 4:
              return EGamepadButton.DIR_LEFT;
            case 5:
              return EGamepadButton.DIR_RIGHT;
            case 6:
              return EGamepadButton.DIR_UP;
            case 7:
              return EGamepadButton.DIR_DOWN;
            case 8:
              return EGamepadButton.STEAM_GUIDE;
            case 9:
              return EGamepadButton.STEAM_QUICK_MENU;
            case 10:
              return EGamepadButton.SELECT;
            case 11:
              return EGamepadButton.START;
            case 12:
              return EGamepadButton.BUMPER_LEFT;
            case 13:
              return EGamepadButton.BUMPER_RIGHT;
            case 14:
              return EGamepadButton.TRIGGER_LEFT;
            case 15:
              return EGamepadButton.TRIGGER_RIGHT;
            case 24:
              return EGamepadButton.REAR_LEFT_UPPER;
            case 25:
              return EGamepadButton.REAR_LEFT_LOWER;
            case 26:
              return EGamepadButton.REAR_RIGHT_UPPER;
            case 27:
              return EGamepadButton.REAR_RIGHT_LOWER;
            default:
              return EGamepadButton.INVALID;
          }
        }
        function h(r) {
          switch (r) {
            case n.pR.OK:
              return 0;
            case n.pR.CANCEL:
              return 1;
            case n.pR.SECONDARY:
              return 2;
            case n.pR.OPTIONS:
              return 3;
            case n.pR.DIR_LEFT:
              return 4;
            case n.pR.DIR_RIGHT:
              return 5;
            case n.pR.DIR_UP:
              return 6;
            case n.pR.DIR_DOWN:
              return 7;
            case n.pR.STEAM_GUIDE:
              return 8;
            case n.pR.STEAM_QUICK_MENU:
              return 9;
            case n.pR.SELECT:
              return 10;
            case n.pR.START:
              return 11;
            case n.pR.BUMPER_LEFT:
              return 12;
            case n.pR.BUMPER_RIGHT:
              return 13;
            case n.pR.TRIGGER_LEFT:
              return 14;
            case n.pR.TRIGGER_RIGHT:
              return 15;
            case n.pR.REAR_LEFT_UPPER:
              return 24;
            case n.pR.REAR_LEFT_LOWER:
              return 25;
            case n.pR.REAR_RIGHT_UPPER:
              return 26;
            case n.pR.REAR_RIGHT_LOWER:
              return 27;
            default:
              return 0;
          }
        }
        const l = class We {
          m_boundActions = new Map();
          m_defaultActions = new Map();
          m_globalActionsSubscriptions = [];
          m_actionDescriptionChangedCallbackRegistrations = [];
          static Log = new a.wd("ActionDescription").Debug;
          m_nodeForCurrentDescriptions;
          InitContext(i) {
            const c = new v.e0();
            return (
              c.Push(
                i.FocusChangedCallbacks.Register(this.OnFocusNavigationChanged)
                  .Unregister,
              ),
              c.Push(
                i.NavTreeActivatedOrReactivatedCallbacks.Register(
                  this.OnActiveNavTreeChanged,
                ).Unregister,
              ),
              c.GetUnregisterFunc()
            );
          }
          BFromActiveNavTree(i, c) {
            let D = c?.Tree;
            return (
              D || (D = i?.Tree), D && D.Controller.IsActiveFocusNavTree(D)
            );
          }
          OnFocusNavigationChanged(i, c, D) {
            this.BFromActiveNavTree(c, D) && this.UpdateForFocusedNode(D);
          }
          OnActiveNavTreeChanged(i) {
            if (!i.Controller.IsActiveFocusNavTree(i)) return;
            const c = i.GetLastFocusedNode() ?? i.Root;
            c != this.m_nodeForCurrentDescriptions &&
              this.UpdateForFocusedNode(c);
          }
          UpdateForFocusedNode(i) {
            if (
              ((this.m_nodeForCurrentDescriptions = i),
              this.m_actionDescriptionChangedCallbackRegistrations.forEach(
                (c) => c.Unregister(),
              ),
              (this.m_actionDescriptionChangedCallbackRegistrations = []),
              i)
            ) {
              const c = () =>
                this.SetActionDescriptionsFromMap(
                  i.GetActiveActionDescriptions() ?? {},
                );
              c();
              for (let D = i; D != null; D = D.Parent)
                this.m_actionDescriptionChangedCallbackRegistrations.push(
                  D.ActionDescriptionChangedCallbackList.Register(() => c()),
                );
            } else this.SetActionDescriptionsFromMap({ [n.pR.OK]: null });
          }
          GetActionDescription(i) {
            let c;
            return (
              this.m_boundActions.has(i)
                ? (c = this.m_boundActions.get(i))
                : this.m_defaultActions.has(i) &&
                  (c = this.m_defaultActions.get(i)),
              We.Log("GetActionDescription", c),
              c
            );
          }
          GetActionDescriptions() {
            const i = Object.values(x).filter((D) => typeof D == "number"),
              c = {};
            for (const D of i) c[D] = this.GetActionDescription(D);
            return c;
          }
          Notify() {
            const i = this.GetActionDescriptions();
            this.m_globalActionsSubscriptions.forEach((c) => c(i));
          }
          IsDefaultAction(i) {
            return (
              this.GetActionDescription(i) === this.m_defaultActions.get(i)
            );
          }
          SetDefaultAction(i, c) {
            return (
              c === void 0
                ? this.m_defaultActions.delete(i)
                : this.m_defaultActions.set(i, c),
              !this.m_boundActions.has(i)
            );
          }
          SetDefaultActionsFromMap(i) {
            let c = !1;
            for (const D in i) {
              const M = parseInt(D);
              this.SetDefaultAction(M, i[M]) && (c = !0);
            }
            c && this.Notify();
          }
          ClearActions() {
            We.Log("ClearActionDescriptions"),
              this.m_boundActions.clear(),
              this.Notify();
          }
          SetActionsFromMap(i) {
            let c = !1;
            const D = Array.from(this.m_boundActions.keys());
            for (let M of D)
              i[M] === void 0 && this.SetAction(M, void 0) && (c = !0);
            for (let M in i) {
              const I = parseInt(M);
              this.SetAction(I, i[I]) && (c = !0);
            }
            c && this.Notify();
          }
          SetActionDescriptionsFromMap(i) {
            const c = {};
            for (const D in i) {
              const M = parseInt(D),
                I = h(M);
              c[I] = i[M];
            }
            this.SetActionsFromMap(c);
          }
          SetAction(i, c) {
            if ((We.Log("SetActionDescription", i, c), c === void 0)) {
              if (!this.m_boundActions.has(i)) return !1;
              this.m_boundActions.delete(i);
            } else {
              if ((0, e.SI)(this.m_boundActions.get(i), c)) return !1;
              this.m_boundActions.set(i, c);
            }
            return !0;
          }
          SubscribeToActions(i) {
            return (
              this.m_globalActionsSubscriptions.push(i),
              i(this.GetActionDescriptions()),
              () => {
                const D = this.m_globalActionsSubscriptions?.indexOf(i);
                this.m_globalActionsSubscriptions && D != null && D >= 0
                  ? this.m_globalActionsSubscriptions.splice(D, 1)
                  : console.error(
                      "Unsubscribing an actions handler that was already unsubscribed",
                    );
              }
            );
          }
        };
        g([C.oI], l.prototype, "OnFocusNavigationChanged", 1),
          g([C.oI], l.prototype, "OnActiveNavTreeChanged", 1),
          g([C.oI], l.prototype, "SetActionDescriptionsFromMap", 1);
        let o = null;
      },
      76867: (K, _, t) => {
        "use strict";
        t.d(_, { M: () => a });
        var e = t(7850),
          n = t(90626),
          v = t(90740);
        function a(C) {
          const { children: d, ...p } = C,
            g = n.useRef(null);
          return (0, e.jsx)(v.A, { nodeRef: g, ...p, children: C.children(g) });
        }
      },
      41944: (K, _, t) => {
        "use strict";
        t.d(_, {
          Ez: () => L,
          Dy: () => Q,
          wW: () => ue,
          UN: () => S,
          Q8: () => A,
          Tz: () => R,
          Pu: () => y,
          Nt: () => B,
          aw: () => u,
          cP: () => O,
        });
        var e = t(7850),
          n = t(24660),
          v = t(19298),
          a = t(75779),
          C = t(55546),
          d = t(56062),
          p = t(64868),
          g = t(40358),
          x = t(90626),
          T = t(21690),
          h = t(41735),
          l = t.n(h),
          o = t(72604),
          r = t(34592),
          i = t(8323),
          c = t(30096),
          D = t(3166),
          M = Object.defineProperty,
          I = Object.getOwnPropertyDescriptor,
          f = (X, H, P, m) => {
            for (
              var w = m > 1 ? void 0 : m ? I(H, P) : H, j = X.length - 1, ee;
              j >= 0;
              j--
            )
              (ee = X[j]) && (w = (m ? ee(H, P, w) : ee(w)) || w);
            return m && w && M(H, P, w), w;
          };
        const U = class Oe {
          m_mapAppResults = new Map();
          m_mapAppCallbackList = new Map();
          m_mapAppResultsPromises = new Map();
          GetCompatabilityResultForApp(H) {
            return this.m_mapAppResults.get(H);
          }
          BHasCompatabilityResultForApp(H) {
            return this.m_mapAppResults.has(H);
          }
          GetCallbackForAppList(H) {
            return (
              this.m_mapAppCallbackList.has(H) ||
                this.m_mapAppCallbackList.set(H, new i.lu()),
              this.m_mapAppCallbackList.get(H)
            );
          }
          AddCompatabilityResult(H) {
            H.appid &&
              (this.m_mapAppResults.set(H.appid, H),
              this.GetCallbackForAppList(H.appid).Dispatch(H));
          }
          async LoadAppCompabitilityResult(H) {
            return this.m_mapAppResults.has(H)
              ? !0
              : (this.m_mapAppResultsPromises.has(H) ||
                  this.m_mapAppResultsPromises.set(
                    H,
                    this.InternalLoadAppCompatability(H),
                  ),
                this.m_mapAppResultsPromises.get(H));
          }
          async InternalLoadAppCompatability(H) {
            let P = null;
            try {
              const m = { nAppID: H, l: D.TS.LANGUAGE, cc: D.TS.COUNTRY };
              let w =
                D.TS.STORE_BASE_URL +
                "saleaction/ajaxgetdeckappcompatibilityreport";
              const j = await l().get(w, { params: m, withCredentials: !0 });
              if (j?.status == 200 && j.data?.success == o.R && j.data?.results)
                return this.AddCompatabilityResult(j.data.results), !0;
              P = (0, r.H)(j);
            } catch (m) {
              P = (0, r.H)(m);
            }
            return (
              console.error(
                "CDeckVerifiedDetailsStore.InternalLoadAppCompatability failed: " +
                  P?.strErrorMsg,
                P,
              ),
              !1
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Oe.s_Singleton || (Oe.s_Singleton = new Oe()), Oe.s_Singleton
            );
          }
          constructor() {
            if (document.getElementById("application_config")) {
              let H = (0, D.Tc)("hardwarecompatibility", "application_config");
              Oe.ValidateCompatabilityResult(H) &&
                this.AddCompatabilityResult(H);
            }
          }
          static ValidateCompatabilityResult(H) {
            const P = H;
            return (
              P &&
              typeof P.appid == "number" &&
              typeof P.resolved_category == "number" &&
              typeof P.resolved_items == "object"
            );
          }
        };
        f([c.oI], U.prototype, "LoadAppCompabitilityResult", 1);
        let Y = U;
        function W(X) {
          const [H, P] = x.useState(Y.Get().GetCompatabilityResultForApp(X));
          return (
            (0, c.hL)(Y.Get().GetCallbackForAppList(X), P),
            x.useEffect(() => {
              Y.Get().BHasCompatabilityResultForApp(X) ||
                Y.Get()
                  .LoadAppCompabitilityResult(X)
                  .then(() => P(Y.Get().GetCompatabilityResultForApp(X)));
            }, [X]),
            H
          );
        }
        var Z = t(16412),
          z = t(96538),
          k = t(36118),
          q = t(6046),
          F = t(85599),
          te = t(36707),
          N = t(39905),
          G = t(48473),
          b = t(35111),
          s = t.n(b);
        function A(X) {
          const { id: H } = X,
            { data: P } = (0, g.J$)(H),
            { data: m } = (0, g.qI)(H),
            [w, j, ee] = (0, p.uD)();
          if (!P || !m || P.item_type !== d.c6.qI) return null;
          const ae = m.steam_deck_compat_category || a.YX;
          return (0, e.jsxs)("div", {
            className: (0, te.A)(s().LearnMoreCtn, "LearnMoreCtn"),
            children: [
              (0, e.jsx)(T.$o, { category: ae }),
              (0, e.jsx)(n.Ii, {
                onClick: j,
                children: (0, e.jsx)("span", {
                  className: s().LearnMorePC,
                  children: N.Z.Localize(
                    "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
                  ),
                }),
              }),
              (0, e.jsx)(z.EN, {
                active: w,
                children: (0, e.jsx)(E, { nAppID: P.appid, closeModal: ee }),
              }),
            ],
          });
        }
        function R(X) {
          const {
              url: H,
              containerClass: P,
              bIncludeIcon: m,
              onOpenBlogPost: w,
            } = X,
            j = () => {
              w ? w() : H && (window.location.href = H);
            };
          return (0, e.jsxs)(n.Ii, {
            className: P,
            onClick: j,
            children: [
              m && (0, e.jsx)("div", { className: s().DeveloperComments_Icon }),
              (0, e.jsx)("div", {
                className: m
                  ? s().DeveloperComments_LinkIcon
                  : s().DeveloperComments_LinkNoIcon,
                children: N.Z.Localize(
                  "#SteamDeckVerified_Store_CompatSection_DeveloperComments",
                ),
              }),
            ],
          });
        }
        function E(X) {
          const { nAppID: H, closeModal: P } = X,
            m = W(H),
            w = x.useId();
          return (0, e.jsx)(z.eV, {
            "aria-labelledby": w,
            modalClassName: "DeckVerifiedModalDialog",
            closeModal: P,
            onCancel: P,
            children: (0, e.jsx)(Z.nB, {
              children: (0, e.jsx)(v.Z, {
                focusable: !1,
                "flow-children": "column",
                children: m
                  ? (0, e.jsx)(q.Ay, { titleId: w, results: m })
                  : (0, e.jsx)(F.t, {
                      size: "medium",
                      position: "center",
                      string: N.Z.Localize("#Loading"),
                    }),
              }),
            }),
          });
        }
        function L(X) {
          const { category: H } = X;
          switch (H) {
            case a.I2:
              return (0, e.jsx)(k.o5Q, {
                className: s().CategoryIcon,
                role: "presentation",
              });
            case a.sd:
              return (0, e.jsx)(k.aVR, {
                className: s().CategoryIcon,
                role: "presentation",
              });
            case a.V8:
              return (0, e.jsx)(k.jIP, {
                className: s().CategoryIcon,
                role: "presentation",
              });
            case a.YX:
              return (0, e.jsx)(k.WX$, {
                className: s().CategoryIcon,
                role: "presentation",
              });
          }
        }
        function u(X) {
          const { category: H } = X;
          switch (H) {
            case C.Hi:
              return (0, e.jsx)(k.ZjT, {
                className: s().CategoryIcon,
                role: "presentation",
              });
            case C.u_:
              return (0, e.jsx)(k.jIP, {
                className: s().CategoryIcon,
                role: "presentation",
              });
            case C.xs:
              return (0, e.jsx)(k.WX$, {
                className: s().CategoryIcon,
                role: "presentation",
              });
          }
        }
        function S(X) {
          const { id: H, category: P, appName: m, descriptionToken: w } = X;
          if (P == a.YX)
            return (0, e.jsx)("div", {
              id: H,
              className: s().CompatibilityDetailRatingSummary,
              children: m
                ? N.Z.LocalizeReact(
                    "#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName",
                    (0, e.jsx)("b", { children: (0, G.EK)(m) }),
                  )
                : N.Z.Localize("#SteamDeckVerified_DescriptionHeader_Unknown"),
            });
          let j = "",
            ee = null;
          switch (P) {
            case a.I2:
              (j = "#SteamDeckVerified_DescriptionHeader_Verified"),
                (ee = s().Verified);
              break;
            case a.sd:
              (j = "#SteamDeckVerified_DescriptionHeader_Playable"),
                (ee = s().Playable);
              break;
            case a.V8:
              (j = "#SteamDeckVerified_DescriptionHeader_Unsupported"),
                (ee = s().Unsupported);
              break;
          }
          const ae = (0, e.jsx)("span", {
              className: ee,
              children: N.Z.Localize(Q(P)),
            }),
            le = (0, e.jsx)("span", {
              className: s().CompatibilityDetailRatingSummary,
              children: N.Z.Localize(w || j),
            }),
            ce = m
              ? N.Z.LocalizeReact(
                  "#SteamDeckVerified_DescriptionHeader_WithAppName",
                  (0, e.jsx)("b", { children: (0, G.EK)(m) }),
                  ae,
                  le,
                )
              : N.Z.LocalizeReact(
                  "#SteamDeckVerified_DescriptionHeader",
                  ae,
                  le,
                );
          return (0, e.jsx)("div", {
            id: H,
            className: s().CompatibilityDetailRatingSummary,
            children: ce,
          });
        }
        function O(X) {
          const { id: H, category: P, appName: m, descriptionToken: w } = X;
          if (P == C.xs)
            return (0, e.jsx)("div", {
              className: s().CompatibilityDetailRatingSummary,
              children: m
                ? N.Z.LocalizeReact(
                    "#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName",
                    (0, e.jsx)("b", { children: (0, G.EK)(m) }),
                  )
                : N.Z.Localize(
                    "#SteamOSCompatibility_DescriptionHeader_Unknown",
                  ),
            });
          let j = "",
            ee = null;
          switch (P) {
            case C.Hi:
              (j = "#SteamOSCompatibility_DescriptionHeader_Compatible"),
                (ee = s().Compatible);
              break;
            case C.u_:
              (j = "#SteamOSCompatibility_DescriptionHeader_Unsupported"),
                (ee = s().Unsupported);
              break;
          }
          const ae = (0, e.jsx)("span", {
              className: ee,
              children: N.Z.Localize(ue(P)),
            }),
            le = (0, e.jsx)("span", {
              className: s().CompatibilityDetailRatingSummary,
              children: N.Z.Localize(w || j),
            }),
            ce = m
              ? N.Z.LocalizeReact(
                  "#SteamOSCompatibility_DescriptionHeader_WithAppName",
                  (0, e.jsx)("b", { children: (0, G.EK)(m) }),
                  ae,
                  le,
                )
              : N.Z.LocalizeReact(
                  "#SteamOSCompatibility_DescriptionHeader",
                  ae,
                  le,
                );
          return (0, e.jsx)("div", {
            id: H,
            className: s().CompatibilityDetailRatingSummary,
            children: ce,
          });
        }
        function B(X) {
          const { id: H, category: P, appName: m, descriptionToken: w } = X;
          if (P == a.YX)
            return (0, e.jsx)("div", {
              className: s().CompatibilityDetailRatingSummary,
              children: m
                ? N.Z.LocalizeReact(
                    "#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName",
                    (0, e.jsx)("b", { children: (0, G.EK)(m) }),
                  )
                : N.Z.Localize(
                    "#SteamMachineVerified_DescriptionHeader_Unknown",
                  ),
            });
          let j = "",
            ee = null;
          switch (P) {
            case a.I2:
              (j = "#SteamMachineVerified_DescriptionHeader_Verified"),
                (ee = s().Verified);
              break;
            case a.sd:
              (j = "#SteamMachineVerified_DescriptionHeader_Playable"),
                (ee = s().Playable);
              break;
            case a.V8:
              (j = "#SteamMachineVerified_DescriptionHeader_Unsupported"),
                (ee = s().Unsupported);
              break;
          }
          const ae = (0, e.jsx)("span", {
              className: ee,
              children: N.Z.Localize(Q(P)),
            }),
            le = (0, e.jsx)("span", {
              className: s().CompatibilityDetailRatingSummary,
              children: N.Z.Localize(w || j),
            }),
            ce = m
              ? N.Z.LocalizeReact(
                  "#SteamMachineVerified_DescriptionHeader_WithAppName",
                  (0, e.jsx)("b", { children: (0, G.EK)(m) }),
                  ae,
                  le,
                )
              : N.Z.LocalizeReact(
                  "#SteamMachineVerified_DescriptionHeader",
                  ae,
                  le,
                );
          return (0, e.jsx)("div", {
            id: H,
            className: s().CompatibilityDetailRatingSummary,
            children: ce,
          });
        }
        function y(X) {
          const { id: H, category: P, appName: m, descriptionToken: w } = X;
          if (P == a.YX)
            return (0, e.jsx)("div", {
              className: s().CompatibilityDetailRatingSummary,
              children: m
                ? N.Z.LocalizeReact(
                    "#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName",
                    (0, e.jsx)("b", { children: (0, G.EK)(m) }),
                  )
                : N.Z.Localize("#SteamFrameVerified_DescriptionHeader_Unknown"),
            });
          let j = "",
            ee = null;
          switch (P) {
            case a.I2:
              (j = "#SteamFrameVerified_DescriptionHeader_Verified"),
                (ee = s().Verified);
              break;
            case a.sd:
              (j = "#SteamFrameVerified_DescriptionHeader_Playable"),
                (ee = s().Playable);
              break;
            case a.V8:
              (j = "#SteamFrameVerified_DescriptionHeader_Unsupported"),
                (ee = s().Unsupported);
              break;
          }
          const ae = (0, e.jsx)("span", {
              className: ee,
              children: N.Z.Localize(Q(P)),
            }),
            le = (0, e.jsx)("span", {
              className: s().CompatibilityDetailRatingSummary,
              children: N.Z.Localize(w || j),
            }),
            ce = m
              ? N.Z.LocalizeReact(
                  "#SteamFrameVerified_DescriptionHeader_WithAppName",
                  (0, e.jsx)("b", { children: (0, G.EK)(m) }),
                  ae,
                  le,
                )
              : N.Z.LocalizeReact(
                  "#SteamFrameVerified_DescriptionHeader",
                  ae,
                  le,
                );
          return (0, e.jsx)("div", {
            id: H,
            className: s().CompatibilityDetailRatingSummary,
            children: ce,
          });
        }
        function Q(X) {
          switch (X) {
            case a.I2:
              return "#SteamDeckVerified_Category_Verified";
            case a.sd:
              return "#SteamDeckVerified_Category_Playable";
            case a.V8:
              return "#SteamDeckVerified_Category_Unsupported";
            default:
              return "#SteamDeckVerified_Category_Unknown";
          }
        }
        function ue(X) {
          switch (X) {
            case C.Hi:
              return "#SteamOSCompatibility_Category_Compatible";
            case C.u_:
              return "#SteamOSCompatibility_Category_Unsupported";
            default:
              return "#SteamOSCompatibility_Category_Unknown";
          }
        }
      },
      9975: (K, _, t) => {
        "use strict";
        t.d(_, { h: () => b });
        var e = t(7850),
          n = t(91405),
          v = t(56062),
          a = t(27894),
          C = t(40358),
          d = t(72865),
          p = t(24179),
          g = t(90626),
          x = t(83482),
          T = t(72604),
          h = t(35038),
          l = t(80613),
          o = t.n(l),
          r = t(75245);
        class i extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(R = null) {
            super(),
              i.prototype.packageid || r.Sg(i.M()),
              l.Message.initialize(this, R, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              i.sm_m ||
                (i.sm_m = {
                  proto: i,
                  fields: {
                    packageid: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    country_code: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              i.sm_m
            );
          }
          static MBF() {
            return i.sm_mbf || (i.sm_mbf = r.w0(i.M())), i.sm_mbf;
          }
          toObject(R = !1) {
            return i.toObject(R, this);
          }
          static toObject(R, E) {
            return r.BT(i.M(), R, E);
          }
          static fromObject(R) {
            return r.Uq(i.M(), R);
          }
          static deserializeBinary(R) {
            let E = new (o().BinaryReader)(R),
              L = new i();
            return i.deserializeBinaryFromReader(L, E);
          }
          static deserializeBinaryFromReader(R, E) {
            return r.zj(i.MBF(), R, E);
          }
          serializeBinary() {
            var R = new (o().BinaryWriter)();
            return i.serializeBinaryToWriter(this, R), R.getResultBuffer();
          }
          static serializeBinaryToWriter(R, E) {
            r.i0(i.M(), R, E);
          }
          serializeBase64String() {
            var R = new (o().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, R), R.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
          }
        }
        class c extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(R = null) {
            super(),
              c.prototype.inventory_available || r.Sg(c.M()),
              l.Message.initialize(this, R, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    inventory_available: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    high_pending_orders: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = r.w0(c.M())), c.sm_mbf;
          }
          toObject(R = !1) {
            return c.toObject(R, this);
          }
          static toObject(R, E) {
            return r.BT(c.M(), R, E);
          }
          static fromObject(R) {
            return r.Uq(c.M(), R);
          }
          static deserializeBinary(R) {
            let E = new (o().BinaryReader)(R),
              L = new c();
            return c.deserializeBinaryFromReader(L, E);
          }
          static deserializeBinaryFromReader(R, E) {
            return r.zj(c.MBF(), R, E);
          }
          serializeBinary() {
            var R = new (o().BinaryWriter)();
            return c.serializeBinaryToWriter(this, R), R.getResultBuffer();
          }
          static serializeBinaryToWriter(R, E) {
            r.i0(c.M(), R, E);
          }
          serializeBase64String() {
            var R = new (o().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, R), R.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
          }
        }
        var D;
        ((A) => {
          function R(E, L, u) {
            return E.SendMsg(
              "PhysicalGoods.CheckInventoryAvailableByPackage#1",
              (0, h.I8)(i, L, u),
              c,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          A.CheckInventoryAvailableByPackage = R;
        })(D || (D = {}));
        var M = t(80902),
          I = t(68312),
          f = t(67529),
          U = t(98609);
        const Y = { high_pending_orders: !1, inventory_available: !0 };
        function W(A) {
          const R = (0, I.rW)(),
            { data: E } = (0, C.J$)(A),
            L = (0, M.I)({
              queryKey: [
                E?.id || f.sc,
                E?.type || "invalid",
                E?.item_type || "invalid",
              ],
              queryFn: () => Z(E, R),
              enabled: !!(E && E.type === v.uE.Hk),
            });
          return L.isLoading ? null : L.data;
        }
        async function Z(A, R) {
          if (!A || A.item_type !== v.c6.RD || A.type !== v.uE.Hk) return Y;
          const E = h.w.Init(i);
          E.Body().set_packageid(A.id || 0),
            E.Body().set_country_code(U.iA.country_code);
          const L = await D.CheckInventoryAvailableByPackage(R, E);
          if (L.GetEResult() !== T.R)
            throw (
              (console.error(
                "Received error from FetchPhysicalGoodsStock",
                L.GetEResult(),
              ),
              new Error(
                `Error from FetchPhysicalGoodsStock: ${L.GetEResult()}`,
              ))
            );
          return L.Body().toObject();
        }
        var z = t(53107),
          k = t(36707),
          q = t(3166),
          F = t(85599),
          te = t(82080),
          N = t.n(te),
          G = t(39905);
        function b(A) {
          const { id: R, className: E } = A,
            L = (0, d.n9)(),
            { data: u } = (0, C.J$)(R),
            { data: S } = (0, C.by)(R),
            { data: O } = (0, C.EO)(R),
            B = W(R),
            { bIsOwned: y } = (0, p.ZJ)(R),
            Q = (0, a.n)(u),
            ue = (0, g.useCallback)(() => {
              if (u) {
                let H = u.appid;
                u.related_items?.parent_appid &&
                  u.type != v.uE.Ov &&
                  (H = u.related_items.parent_appid),
                  (0, z.Id)(window, `steam://run/${H}`);
              }
            }, [u]);
          if (!u || !S || !O || u.type == v.uE.gQ) return null;
          const X =
            u.is_free ||
            (O.final_price_in_cents != null && O.final_price_in_cents == "0") ||
            (O.discount_pct && O.discount_pct >= 100);
          if (u.item_type == v.c6.RD) {
            if (u.type == v.uE.Hk)
              if (B) {
                if (!B.inventory_available)
                  return (0, e.jsx)("div", {
                    className: (0, k.A)(N().ActionOutOfStock, E),
                    children: (0, e.jsxs)("span", {
                      children: [" ", G.Z.Localize("#Sale_ReserveExhausted")],
                    }),
                  });
              } else
                return (0, e.jsx)(F.t, { size: "small", position: "center" });
            else if (X && u.included_appids && u.included_appids.length > 1)
              return null;
          }
          if (u.item_type == v.c6.qI) {
            if ((S.is_coming_soon && !O.packageid) || (y && u.type === v.uE.Hk))
              return null;
            if (!y && O.is_free_to_keep)
              if (q.TS.IN_CLIENT || (0, q.yK)() != "store") {
                const H = `${q.TS.IN_CLIENT ? "steam://openurl/" : ""}${Q}`;
                return (0, e.jsx)("div", {
                  onClick: (P) => (0, z.Id)(P, H),
                  className: (0, k.A)(N().Action, E),
                  children: (0, e.jsx)("span", {
                    children: G.Z.Localize(
                      "#EventDisplay_CallToAction_VisitStore",
                    ),
                  }),
                });
              } else {
                const H = (0, x.wJ)(
                  `${q.TS.STORE_BASE_URL}freelicense/addfreelicense`,
                  L,
                );
                return (0, e.jsxs)("form", {
                  action: H,
                  method: "POST",
                  children: [
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: "subid",
                      value: O.packageid,
                    }),
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: "sessionid",
                      value: (0, q.KC)(),
                    }),
                    (0, e.jsx)("button", {
                      className: (0, k.A)(N().Action, E),
                      type: "submit",
                      children: G.Z.Localize(
                        "#EventDisplay_CallToAction_AddToAccount",
                      ),
                    }),
                  ],
                });
              }
            if ((y || X) && !u.is_coming_soon) {
              let H = G.Z.Localize("#EventDisplay_CallToAction_PlayNowForFree");
              return (
                y
                  ? (H = G.Z.Localize("#EventDisplay_CallToAction_PlayNow"))
                  : u.is_free_temporarily &&
                    (H = G.Z.Localize(
                      "#EventDisplay_CallToAction_AddToAccount",
                    )),
                (0, e.jsx)("div", {
                  className: (0, k.A)(N().Action, E),
                  onClick: ue,
                  children: (0, e.jsx)("span", { children: H }),
                })
              );
            }
            if (O.formatted_final_price == "")
              return (0, e.jsx)("a", {
                href: Q,
                className: (0, k.A)(N().Action, E),
                children: G.Z.Localize("#EventDisplay_CallToAction_VisitStore"),
              });
          }
          return (0, e.jsx)(s, {
            className: E,
            storeItemBestPurchaseOption: O,
            storeItemDefaultData: u,
          });
        }
        function s(A) {
          const {
              className: R,
              storeItemBestPurchaseOption: E,
              storeItemDefaultData: L,
            } = A,
            u = (0, d.n9)(),
            { mutate: S } = (0, n.A)(
              E?.packageid,
              E?.bundleid,
              !1,
              void 0,
              u.feature,
            );
          return (0, e.jsx)("div", {
            className: (0, k.A)(N().Action, R),
            onClick: () => S(),
            children: (0, e.jsx)("span", {
              children: G.Z.Localize("#Store_AddToCart"),
            }),
          });
        }
      },
      37934: (K, _, t) => {
        "use strict";
        t.d(_, { do: () => G, of: () => N });
        var e = t(7850),
          n = t(55483),
          v = t(24660),
          a = t(64868),
          C = t(72609),
          d = t(89926),
          p = t(72865),
          g = t(25294),
          x = t(11996),
          T = t(19047),
          h = t(10134),
          l = t(35675),
          o = t(20125),
          r = t(51614),
          i = t(98609),
          c = t(67705),
          D = ((b) => (
            (b[(b.k_ECuratorFollow = 1)] = "k_ECuratorFollow"),
            (b[(b.k_ECuratorUnfollow = 2)] = "k_ECuratorUnfollow"),
            (b[(b.k_ECuratorIgnore = 3)] = "k_ECuratorIgnore"),
            (b[(b.k_ECuratorUnignore = 4)] = "k_ECuratorUnignore"),
            b
          ))(D || {});
        function M(b, s) {
          const A = (0, l.BU)(),
            R = i.iA.accountid;
          return (0, r.n)({
            mutationKey: ["useUpdateCuratorAffinity", b, R, s],
            mutationFn: async () => {
              if (b == null) return !1;
              const E = s == D.k_ECuratorFollow || s == D.k_ECuratorUnfollow,
                L = s == D.k_ECuratorFollow || s == D.k_ECuratorIgnore,
                u = `${i.TS.STORE_BASE_URL}curators/${E ? "ajaxfollow/" : "ajaxignore/"}`,
                S = new FormData();
              S.append("clanid", "" + b),
                S.append("sessionid", (0, c.KC)()),
                S.append(E ? "follow" : "ignore", L ? "1" : "0");
              const O = await fetch(u, {
                  method: "POST",
                  body: S,
                  credentials: "include",
                }),
                B = await O.json();
              if (!O.ok)
                throw new Error(
                  `Curator Affinity: ${E ? "Follow" : "Ignore"} Currator ${L ? "add" : "remove"} failed (${O.status} / ${B.msg})`,
                );
              return B.is_creator;
            },
            onMutate: () => {
              if (b != null) {
                const E =
                  s == D.k_ECuratorUnfollow || s == D.k_ECuratorUnignore;
                A(
                  s == D.k_ECuratorFollow ? [{ clanAccountID: b }] : void 0,
                  s == D.k_ECuratorIgnore ? [{ clanAccountID: b }] : void 0,
                  E ? [{ clanAccountID: b }] : void 0,
                );
              }
            },
            onError: (E) => {
              if (b != null) {
                const L = s == D.k_ECuratorFollow || s == D.k_ECuratorIgnore;
                A(
                  s == D.k_ECuratorUnfollow ? [{ clanAccountID: b }] : void 0,
                  s == D.k_ECuratorUnignore ? [{ clanAccountID: b }] : void 0,
                  L ? [{ clanAccountID: b }] : void 0,
                  E ? [{ clanAccountID: b, is_creator: !0 }] : void 0,
                );
              }
            },
            onSuccess: (E) => {
              E &&
                b &&
                A(void 0, void 0, void 0, [
                  { clanAccountID: b, is_creator: !0 },
                ]),
                (0, o.WZ)();
            },
          });
        }
        var I = t(90626),
          f = t(85705),
          U = t(36118),
          Y = t(36707),
          W = t(18210),
          Z = t(96538),
          z = t(71421),
          k = t(56524),
          q = t(63109),
          F = t(95695);
        const te = (b) => {
          const {
              className: s,
              bIgnored: A,
              bApplyingFollowing: R,
              bFollowing: E,
              onFollowClick: L,
              followType: u,
            } = b,
            { elDialogElement: S, fnShowLogonDialog: O } = (0, d.l)();
          if (!(0, l.xU)()) return null;
          let B = null;
          switch (u) {
            case "app":
              B = (0, W.we)("#text_store_follow_desc");
              break;
            case "creatorhome":
              B = (0, W.we)("#CreatorHome_Follow_tooltip");
              break;
            case "steamcurator":
              B = (0, W.we)("#steam_curator_follow_ttip");
              break;
            case "group":
              B = (0, W.we)("#steam_group_follow_ttip");
          }
          return B
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(z.Gq, {
                    toolTipContent: !A && !E ? B : void 0,
                    children: (0, e.jsxs)(v.ml, {
                      className: (0, Y.A)(
                        F.Button,
                        k.FollowButton,
                        "FollowButton",
                        s,
                        E ? "Followed" : "",
                      ),
                      onClick: () => {
                        C.iA.logged_in ? L() : O();
                      },
                      children: [
                        R && (0, e.jsx)(f.k, { size: 15 }),
                        !R && (E || A) && (0, e.jsx)(U.Jlk, {}),
                        (0, e.jsx)("div", {
                          className: (0, Y.A)(k.FollowBtnText, "FollowBtnText"),
                          children:
                            !R &&
                            (E
                              ? (0, W.we)("#Button_Followed")
                              : A
                                ? (0, W.we)("#Button_Ignored")
                                : (0, W.we)("#Button_Follow")),
                        }),
                      ],
                    }),
                  }),
                  S,
                ],
              })
            : (console.error("CommonFollowButton unexpected type", u), null);
        };
        function N(b) {
          const {
              followType: s,
              fnSuccessCallback: A,
              clanAccountID: R,
              className: E,
            } = b,
            [L, u] = I.useState(!1),
            { data: S } = (0, n.TB)(s ? void 0 : R),
            O = (0, l.eT)(R),
            B = (0, l.mQ)(R),
            { mutateAsync: y } = M(
              R,
              O ? D.k_ECuratorUnfollow : D.k_ECuratorFollow,
            ),
            [Q, ue, X] = (0, a.uD)(),
            H = I.useCallback(async () => {
              O != null && (u(!0), await y(), u(!1), A && A(O));
            }, [O, A, y]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(te, {
                className: E,
                bIgnored: !!B,
                bFollowing: !!O,
                bApplyingFollowing: L,
                onFollowClick: () => {
                  C.iA.is_limited ? ue() : H();
                },
                followType:
                  s ?? (S?.is_creator_home ? "creatorhome" : "steamcurator"),
              }),
              (0, e.jsx)(Z.EN, {
                active: Q,
                children: (0, e.jsx)(q.g, { closeModal: X }),
              }),
            ],
          });
        }
        function G(b) {
          const { appid: s, className: A } = b,
            [R, E] = I.useState(!1),
            L = (0, x.Fh)(s),
            u = (0, h.BD)(s),
            S = (0, p.n9)(),
            O = g.A.GetSNRLinkParam(S),
            { mutateAsync: B } = (0, T.L)(s, !L, O),
            y = I.useCallback(async () => {
              const { appid: Q } = b;
              E(!0), await B(), E(!1);
            }, [b, B]);
          return (0, e.jsx)(te, {
            className: A,
            bIgnored: !!u,
            bFollowing: !!L,
            bApplyingFollowing: R,
            onFollowClick: y,
            followType: "app",
          });
        }
      },
      63109: (K, _, t) => {
        "use strict";
        t.d(_, { g: () => C });
        var e = t(7850),
          n = t(96538),
          v = t(18210),
          a = t(3166);
        const C = (d) => {
          let p = a.TS.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
          return (0, e.jsx)(n.o0, {
            strTitle: (0, v.we)("#Informational_Message"),
            onCancel: d.closeModal,
            onOK: d.closeModal,
            bAlertDialog: !0,
            children: (0, e.jsx)("div", {
              children: (0, v.PP)(
                d.strTokenOverride || "#User_LimitedAccount",
                (0, e.jsx)("a", {
                  href: p,
                  target: a.TS.IN_CLIENT ? void 0 : "_blank",
                  children: (0, v.we)("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        };
      },
      31377: (K, _, t) => {
        "use strict";
        t.d(_, { $m: () => h, wt: () => p, xY: () => g });
        var e = t(7850),
          n = t(74732),
          v = t(28285),
          a = t.n(v),
          C = t(36707),
          d = t(18210),
          p = ((B) => (
            (B[(B.Knockout = 0)] = "Knockout"),
            (B[(B.Light = 1)] = "Light"),
            (B[(B.Dark = 2)] = "Dark"),
            B
          ))(p || {}),
          g = ((B) => (
            (B[(B.Small = 0)] = "Small"),
            (B[(B.Medium = 1)] = "Medium"),
            (B[(B.Large = 2)] = "Large"),
            B
          ))(g || {});
        function x(B) {
          switch (B) {
            case 0:
              return a().SizeSmall;
            case 1:
              return a().SizeMedium;
            case 2:
              return a().SizeLarge;
            default:
              return a().SizeMedium;
          }
        }
        function T(B) {
          switch (B) {
            case 0:
              return a().Knockout;
            case 1:
              return a().Light;
            case 2:
              return a().Dark;
            default:
              return a().Light;
          }
        }
        function h(B) {
          const y = (0, C.A)(
              B.size != null ? x(B.size) : x(1),
              B.type != null ? T(B.type) : T(1),
              B.additionalClassName,
            ),
            Q = B.type == 0;
          switch (B.button) {
            case n.g4.A:
              return (0, e.jsx)(l, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_A"),
              });
            case n.g4.B:
              return (0, e.jsx)(o, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_B"),
              });
            case n.g4.X:
              return (0, e.jsx)(r, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_X"),
              });
            case n.g4.Y:
              return (0, e.jsx)(i, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_Y"),
              });
            case n.g4.Left:
              return (0, e.jsx)(M, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_DpadLeft"),
              });
            case n.g4.Right:
              return (0, e.jsx)(I, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_DpadRight"),
              });
            case n.g4.Up:
              return (0, e.jsx)(c, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_DpadUp"),
              });
            case n.g4.Down:
              return (0, e.jsx)(D, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_DpadDown"),
              });
            case n.g4.HomeMenu:
              return (0, e.jsx)(f, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_Steam"),
              });
            case n.g4.QuickMenu:
              return (0, e.jsx)(U, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_QAM"),
              });
            case n.g4.Select:
              return (0, e.jsx)(Y, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_View"),
              });
            case n.g4.Start:
              return (0, e.jsx)(W, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_Menu"),
              });
            case n.g4.LeftBumper:
              return (0, e.jsx)(Z, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_L1"),
              });
            case n.g4.RightBumper:
              return (0, e.jsx)(z, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_R1"),
              });
            case n.g4.LeftTrigger:
              return (0, e.jsx)(k, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_L2"),
              });
            case n.g4.RightTrigger:
              return (0, e.jsx)(q, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_R2"),
              });
            case n.g4.LeftStick:
              return (0, e.jsx)(G, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_LS"),
              });
            case n.g4.RightStick:
              return (0, e.jsx)(N, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_RS"),
              });
            case n.g4.LeftStickClick:
              return (0, e.jsx)(F, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_L3"),
              });
            case n.g4.RightStickClick:
              return (0, e.jsx)(te, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_R3"),
              });
            case n.g4.LeftTrackpad:
              return (0, e.jsx)(E, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_LPad"),
              });
            case n.g4.RightTrackpad:
              return (0, e.jsx)(u, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_RPad"),
              });
            case n.g4.LeftTrackpadClick:
              return (0, e.jsx)(L, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_LPad_Click"),
              });
            case n.g4.RightTrackpadClick:
              return (0, e.jsx)(S, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_RPad_Click"),
              });
            case n.g4.RearLeftUpper:
              return (0, e.jsx)(b, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_L4"),
              });
            case n.g4.RearRightUpper:
              return (0, e.jsx)(A, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_R4"),
              });
            case n.g4.RearLeftLower:
              return (0, e.jsx)(s, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_L5"),
              });
            case n.g4.RearRightLower:
              return (0, e.jsx)(R, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_R5"),
              });
            default:
              return (0, e.jsx)(O, {
                bIsKnockout: Q,
                className: y,
                "aria-label": (0, d.we)("#ControllerButton_Default"),
              });
          }
        }
        function l({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.2697 24H24.1317L19.2717 11.4H16.6077L11.8917 24H14.6457L15.4737 21.552H20.4057L21.2697 24ZM16.1937 19.446L17.9217 14.406L19.6857 19.446H16.1937Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("circle", {
                    className: a().Background,
                    cx: "18",
                    cy: "18",
                    r: "18",
                    fill: "currentColor",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z",
                  }),
                ],
              });
        }
        function o({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.173 20.382C23.173 18.81 22.369 17.778 20.761 17.286C21.349 16.974 21.775 16.584 22.039 16.116C22.303 15.648 22.435 15.132 22.435 14.568C22.435 13.56 22.081 12.78 21.373 12.228C20.665 11.676 19.573 11.4 18.097 11.4H13.435V24H18.601C19.993 24 21.103 23.682 21.931 23.046C22.759 22.41 23.173 21.522 23.173 20.382ZM16.117 16.674V13.596H17.881C19.165 13.596 19.807 14.082 19.807 15.054C19.807 15.57 19.645 15.972 19.321 16.26C18.997 16.536 18.535 16.674 17.935 16.674H16.117ZM19.843 21.372C19.507 21.672 19.003 21.822 18.331 21.822H16.117V18.582H18.403C19.039 18.582 19.525 18.72 19.861 18.996C20.197 19.26 20.365 19.656 20.365 20.184C20.365 20.676 20.191 21.072 19.843 21.372Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("circle", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z",
                  }),
                ],
              });
        }
        function r({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "currentColor",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.7101 11.4H20.3621L17.8601 15.45L15.3581 11.4H12.1001L16.4021 17.484L11.9201 24H15.0881L17.9141 19.41L20.8661 24H24.1061L19.2821 17.394L23.7101 11.4Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("circle", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z",
                  }),
                ],
              });
        }
        function i({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "currentColor",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.69 24H19.318V18.996L23.71 11.4H20.848L18.094 16.44L15.358 11.4H12.298L16.69 18.978V24Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("circle", {
                    className: a().Background,
                    cx: "18",
                    cy: "18",
                    r: "18",
                    fill: "currentColor",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z",
                  }),
                ],
              });
        }
        function c({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM25 20.1998L19.5555 14.7554V27.1998H16.4444V14.7554L11 20.1998L8.66663 17.8665L18 8.66661L27.3333 17.8665L25 20.1998Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("circle", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z",
                  }),
                ],
              });
        }
        function D({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM10.9999 15.6666L16.4444 21.1111L16.4444 8.66663H19.5555L19.5555 21.1111L24.9999 15.6666L27.3333 18L17.9999 27.1998L8.66659 18L10.9999 15.6666Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("circle", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z",
                  }),
                ],
              });
        }
        function M({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.2664 10.9332L14.8219 16.3777H27.2664V19.4888H14.8219L20.2664 24.9332L17.933 27.2665L8.73314 17.9332L17.933 8.59988L20.2664 10.9332Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("circle", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z",
                  }),
                ],
              });
        }
        function I({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM15.7332 24.9332L21.1776 19.4888H8.73315V16.3777H21.1776L15.7332 10.9332L18.0665 8.59991L27.2664 17.9333L18.0665 27.2666L15.7332 24.9332Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("circle", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z",
                  }),
                ],
              });
        }
        function f({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "currentColor",
                  d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H82C91.9411 36 100 27.9411 100 18C100 8.05888 91.9411 0 82 0H18ZM21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5ZM35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388ZM50.8108 11.788H42.3148V24.388H50.8108V22.102H44.9608V19.15H50.0008V16.882H44.9608V14.038H50.8108V11.788ZM65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794ZM79.7729 11.788L75.8489 20.734L71.6009 11.788H69.0629V24.388H71.4749V16.468L74.9309 24.028H76.5329L79.9169 16.378V24.388H82.4549V11.788H79.7729Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z",
                  }),
                ],
              });
        }
        function U({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 81 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H61C70.9411 36 79 27.9411 79 18C79 8.05888 70.9411 0 61 0H18ZM21.5 22.5C23.9853 22.5 26 20.4853 26 18C26 15.5147 23.9853 13.5 21.5 13.5C19.0147 13.5 17 15.5147 17 18C17 20.4853 19.0147 22.5 21.5 22.5ZM44 18C44 20.4853 41.9853 22.5 39.5 22.5C37.0147 22.5 35 20.4853 35 18C35 15.5147 37.0147 13.5 39.5 13.5C41.9853 13.5 44 15.5147 44 18ZM57.5 22.5C59.9853 22.5 62 20.4853 62 18C62 15.5147 59.9853 13.5 57.5 13.5C55.0147 13.5 53 15.5147 53 18C53 20.4853 55.0147 22.5 57.5 22.5Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 81 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z",
                  }),
                  (0, e.jsx)("circle", {
                    className: a().Foreground,
                    fill: "currentColor",
                    cx: "21.5",
                    cy: "18",
                    r: "4.5",
                  }),
                  (0, e.jsx)("circle", {
                    className: a().Foreground,
                    fill: "currentColor",
                    cx: "39.5",
                    cy: "18",
                    r: "4.5",
                  }),
                  (0, e.jsx)("circle", {
                    className: a().Foreground,
                    fill: "currentColor",
                    cx: "57.5",
                    cy: "18",
                    r: "4.5",
                  }),
                ],
              });
        }
        function Y({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V25H31V11Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("rect", {
                    className: a().Background,
                    fill: "currentColor",
                    y: "6",
                    width: "48",
                    height: "24",
                    rx: "12",
                  }),
                  (0, e.jsx)("rect", {
                    className: a().Foreground,
                    fill: "currentColor",
                    x: "17",
                    y: "11",
                    width: "14",
                    height: "14",
                  }),
                ],
              });
        }
        function W({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V13.8H31V11ZM17 22.2H31V25H17V22.2ZM31 16.6H17V19.4H31V16.6Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("rect", {
                    className: a().Background,
                    fill: "currentColor",
                    y: "6",
                    width: "48",
                    height: "24",
                    rx: "12",
                  }),
                  (0, e.jsx)("rect", {
                    className: a().Foreground,
                    fill: "currentColor",
                    x: "17",
                    y: "11",
                    width: "14",
                    height: "2.8",
                  }),
                  (0, e.jsx)("rect", {
                    className: a().Foreground,
                    fill: "currentColor",
                    x: "17",
                    y: "22.2",
                    width: "14",
                    height: "2.8",
                  }),
                  (0, e.jsx)("rect", {
                    className: a().Foreground,
                    fill: "currentColor",
                    x: "17",
                    y: "16.6",
                    width: "14",
                    height: "2.8",
                  }),
                ],
              });
        }
        function Z({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.5 0C3.35786 0 0 4.47715 0 10V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895431 35.3284 0 34.5 0H7.5ZM9.36182 23H17.8218V20.624H12.0078V10.4H9.36182V23ZM25.7635 20.714V10.4H23.7296L19.5896 12.452L20.4356 14.432L23.0816 13.316V20.714H20.1115V23H28.1576V20.714H25.7635Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z",
                  }),
                ],
              });
        }
        function z({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M28.5 0C32.6421 0 36 4.47715 36 10V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671573 32 0 31.1046 0 30V2C0 0.895431 0.671573 0 1.5 0H28.5ZM15.8185 23H18.7525L15.7825 18.23C16.5505 17.894 17.1445 17.402 17.5645 16.754C17.9965 16.106 18.2125 15.296 18.2125 14.324C18.2125 13.088 17.8045 12.128 16.9885 11.444C16.1725 10.748 14.9005 10.4 13.1725 10.4H8.45654V23H11.1025V18.752H12.9745H13.2805L15.8185 23ZM11.1025 16.484V12.65H13.0105C13.8385 12.65 14.4385 12.806 14.8105 13.118C15.1945 13.418 15.3865 13.874 15.3865 14.486C15.3865 15.11 15.1885 15.602 14.7925 15.962C14.4085 16.31 13.8685 16.484 13.1725 16.484H11.1025ZM26.6688 20.714V10.4H24.6348L20.4948 12.452L21.3408 14.432L23.9868 13.316V20.714H21.0168V23H29.0628V20.714H26.6688Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z",
                  }),
                ],
              });
        }
        function k({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.5 32C3.35786 32 0 27.5228 0 22V2C0 0.895431 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H7.5ZM29.0743 20.714H23.0083L25.6183 18.554C26.6623 17.69 27.4363 16.91 27.9403 16.214C28.4443 15.506 28.6963 14.72 28.6963 13.856C28.6963 12.68 28.2583 11.774 27.3823 11.138C26.5063 10.502 25.3423 10.184 23.8903 10.184C23.0743 10.184 22.3063 10.298 21.5863 10.526C20.8783 10.754 20.2483 11.06 19.6963 11.444L20.5963 13.388C20.9683 13.136 21.4003 12.926 21.8923 12.758C22.3963 12.59 22.9123 12.506 23.4403 12.506C24.1483 12.506 24.7243 12.668 25.1683 12.992C25.6243 13.304 25.8523 13.772 25.8523 14.396C25.8523 14.78 25.7623 15.134 25.5823 15.458C25.4023 15.782 25.1623 16.088 24.8623 16.376C24.5743 16.664 24.1543 17.042 23.6023 17.51L23.2963 17.78L19.6603 20.804V23H29.0743V20.714ZM9.32458 23H17.7846V20.624H11.9706V10.4H9.32458V23Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z",
                  }),
                ],
              });
        }
        function q({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M28.5 32C32.6421 32 36 27.5228 36 22V2C36 0.895431 35.3284 0 34.5 0H1.5C0.671573 0 0 0.895431 0 2V30C0 31.1046 0.671573 32 1.5 32H28.5ZM28.9796 20.714H22.9136L25.5236 18.554C26.5676 17.69 27.3416 16.91 27.8456 16.214C28.3496 15.506 28.6016 14.72 28.6016 13.856C28.6016 12.68 28.1636 11.774 27.2876 11.138C26.4116 10.502 25.2476 10.184 23.7956 10.184C22.9796 10.184 22.2116 10.298 21.4916 10.526C20.7836 10.754 20.1536 11.06 19.6016 11.444L20.5016 13.388C20.8736 13.136 21.3056 12.926 21.7976 12.758C22.3016 12.59 22.8176 12.506 23.3456 12.506C24.0536 12.506 24.6296 12.668 25.0736 12.992C25.5296 13.304 25.7576 13.772 25.7576 14.396C25.7576 14.78 25.6676 15.134 25.4876 15.458C25.3076 15.782 25.0676 16.088 24.7676 16.376C24.4796 16.664 24.0596 17.042 23.5076 17.51L23.2016 17.78L19.5656 20.804V23H28.9796V20.714ZM14.7813 23H17.7153L14.7453 18.23C15.5133 17.894 16.1073 17.402 16.5273 16.754C16.9593 16.106 17.1753 15.296 17.1753 14.324C17.1753 13.088 16.7673 12.128 15.9513 11.444C15.1353 10.748 13.8633 10.4 12.1353 10.4H7.41931V23H10.0653V18.752H11.9373H12.2433L14.7813 23ZM10.0653 16.484V12.65H11.9733C12.8013 12.65 13.4013 12.806 13.7733 13.118C14.1573 13.418 14.3493 13.874 14.3493 14.486C14.3493 15.11 14.1513 15.602 13.7553 15.962C13.3713 16.31 12.8313 16.484 12.1353 16.484H10.0653Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z",
                  }),
                ],
              });
        }
        function F({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM25.4679 14.284C24.7852 13.7613 23.7879 13.5 22.4759 13.5C21.6972 13.5 20.9666 13.6173 20.2839 13.852C19.6119 14.0867 19.0092 14.4227 18.4759 14.86L19.4679 16.364C19.8199 16.0973 20.2146 15.8893 20.6519 15.74C21.0999 15.58 21.5639 15.5 22.0439 15.5C22.6732 15.5 23.1639 15.6227 23.5159 15.868C23.8786 16.1133 24.0599 16.4387 24.0599 16.844C24.0599 17.2813 23.8679 17.6227 23.4839 17.868C23.1106 18.1027 22.6146 18.22 21.9959 18.22H20.6999V19.996H22.1399C23.7079 19.996 24.4919 20.508 24.4919 21.532C24.4919 22.0547 24.2839 22.4653 23.8679 22.764C23.4626 23.0627 22.8972 23.212 22.1719 23.212C21.0306 23.212 20.0439 22.876 19.2119 22.204L18.2039 23.932C18.7052 24.3373 19.3186 24.652 20.0439 24.876C20.7799 25.1 21.5532 25.212 22.3639 25.212C23.2172 25.212 23.9959 25.068 24.6999 24.78C25.4039 24.4813 25.9586 24.0653 26.3639 23.532C26.7692 22.988 26.9719 22.364 26.9719 21.66C26.9719 20.892 26.7479 20.2787 26.2999 19.82C25.8626 19.3507 25.2866 19.0413 24.5719 18.892V18.844C25.1799 18.6093 25.6492 18.2733 25.9799 17.836C26.3212 17.388 26.4919 16.8813 26.4919 16.316C26.4919 15.484 26.1506 14.8067 25.4679 14.284ZM9.48901 24.956H17.009V22.844H11.841V13.756H9.48901V24.956Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("ellipse", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "19.5",
                    rx: "18",
                    ry: "11.25",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z",
                  }),
                ],
              });
        }
        function te({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM26.5882 14.284C25.9056 13.7613 24.9082 13.5 23.5962 13.5C22.8176 13.5 22.0869 13.6173 21.4043 13.852C20.7323 14.0867 20.1296 14.4227 19.5963 14.86L20.5882 16.364C20.9403 16.0973 21.3349 15.8893 21.7723 15.74C22.2202 15.58 22.6842 15.5 23.1642 15.5C23.7936 15.5 24.2843 15.6227 24.6362 15.868C24.9989 16.1133 25.1803 16.4387 25.1803 16.844C25.1803 17.2813 24.9883 17.6227 24.6043 17.868C24.2309 18.1027 23.7349 18.22 23.1162 18.22H21.8203V19.996H23.2603C24.8283 19.996 25.6122 20.508 25.6122 21.532C25.6122 22.0547 25.4042 22.4653 24.9883 22.764C24.5829 23.0627 24.0176 23.212 23.2923 23.212C22.1509 23.212 21.1643 22.876 20.3323 22.204L19.3242 23.932C19.8256 24.3373 20.4389 24.652 21.1642 24.876C21.9002 25.1 22.6736 25.212 23.4842 25.212C24.3376 25.212 25.1162 25.068 25.8202 24.78C26.5243 24.4813 27.0789 24.0653 27.4842 23.532C27.8896 22.988 28.0923 22.364 28.0923 21.66C28.0923 20.892 27.8682 20.2787 27.4202 19.82C26.9829 19.3507 26.4069 19.0413 25.6922 18.892V18.844C26.3002 18.6093 26.7696 18.2733 27.1003 17.836C27.4416 17.388 27.6122 16.8813 27.6122 16.316C27.6122 15.484 27.2709 14.8067 26.5882 14.284ZM15.544 24.956H18.152L15.512 20.716C16.1947 20.4173 16.7227 19.98 17.096 19.404C17.48 18.828 17.672 18.108 17.672 17.244C17.672 16.1453 17.3093 15.292 16.584 14.684C15.8587 14.0653 14.728 13.756 13.192 13.756H9V24.956H11.352V21.18H13.016H13.288L15.544 24.956ZM11.352 19.164V15.756H13.048C13.784 15.756 14.3173 15.8947 14.648 16.172C14.9893 16.4387 15.16 16.844 15.16 17.388C15.16 17.9427 14.984 18.38 14.632 18.7C14.2907 19.0093 13.8107 19.164 13.192 19.164H11.352Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("ellipse", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "19.5",
                    rx: "18",
                    ry: "11.25",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z",
                  }),
                ],
              });
        }
        function N({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM20.8833 18.9875H23.6775L20.849 14.4447C21.5804 14.1247 22.1461 13.6561 22.5461 13.039C22.9575 12.4218 23.1633 11.6504 23.1633 10.7247C23.1633 9.54755 22.7747 8.63326 21.9975 7.98183C21.2204 7.31898 20.009 6.98755 18.3633 6.98755H13.8718V18.9875H16.3918V14.9418H18.1747H18.4661L20.8833 18.9875ZM16.3918 12.7818V9.13041H18.209C18.9975 9.13041 19.569 9.27898 19.9233 9.57612C20.289 9.86183 20.4718 10.2961 20.4718 10.879C20.4718 11.4733 20.2833 11.9418 19.9061 12.2847C19.5404 12.6161 19.0261 12.7818 18.3633 12.7818H16.3918Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("ellipse", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "13.5",
                    rx: "18",
                    ry: "11.25",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
                  }),
                ],
              });
        }
        function G({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM14 19H23V16.7371H16.8149V7H14V19Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("ellipse", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "13.5",
                    rx: "18",
                    ry: "11.25",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M23 19H14V7H16.8149V16.7371H23V19Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
                  }),
                ],
              });
        }
        function b({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.62341 24.75H17.0834V22.374H11.2694V12.15H8.62341V24.75ZM27.3111 19.854V12.15H24.8631L18.6891 20.16V21.888H24.6291V24.75H27.3111V21.888H29.1291V19.854H27.3111ZM21.2631 19.854L24.7371 15.3V19.854H21.2631Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z",
                  }),
                ],
              });
        }
        function s({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.23669 24.75H16.6967V22.374H10.8827V12.15H8.23669V24.75ZM27.3744 14.4V12.15H19.3284V18.648L21.0024 19.566C21.3744 19.266 21.7524 19.044 22.1364 18.9C22.5204 18.744 22.9404 18.666 23.3964 18.666C24.0084 18.666 24.4884 18.828 24.8364 19.152C25.1964 19.476 25.3764 19.944 25.3764 20.556C25.3764 21.252 25.1424 21.786 24.6744 22.158C24.2064 22.53 23.5464 22.716 22.6944 22.716C21.5664 22.716 20.5404 22.404 19.6164 21.78L18.6804 23.796C19.1484 24.192 19.7364 24.498 20.4444 24.714C21.1524 24.93 21.9144 25.038 22.7304 25.038C23.8344 25.038 24.7884 24.852 25.5924 24.48C26.4084 24.096 27.0264 23.562 27.4464 22.878C27.8784 22.194 28.0944 21.396 28.0944 20.484C28.0944 19.26 27.7524 18.33 27.0684 17.694C26.3964 17.046 25.4964 16.722 24.3684 16.722C23.9244 16.722 23.4804 16.776 23.0364 16.884C22.6044 16.98 22.2144 17.136 21.8664 17.352V14.4H27.3744Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z",
                  }),
                ],
              });
        }
        function A({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.5176 24.75H17.4516L14.4816 19.98C15.2496 19.644 15.8436 19.152 16.2636 18.504C16.6956 17.856 16.9116 17.046 16.9116 16.074C16.9116 14.838 16.5036 13.878 15.6876 13.194C14.8716 12.498 13.5996 12.15 11.8716 12.15H7.15564V24.75H9.80164V20.502H11.6736H11.9796L14.5176 24.75ZM9.80164 18.234V14.4H11.7096C12.5376 14.4 13.1376 14.556 13.5096 14.868C13.8936 15.168 14.0856 15.624 14.0856 16.236C14.0856 16.86 13.8876 17.352 13.4916 17.712C13.1076 18.06 12.5676 18.234 11.8716 18.234H9.80164ZM27.6539 19.854V12.15H25.2059L19.0319 20.16V21.888H24.9719V24.75H27.6539V21.888H29.4719V19.854H27.6539ZM21.6059 19.854L25.0799 15.3V19.854H21.6059Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z",
                  }),
                ],
              });
        }
        function R({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.6934 24.75H17.6274L14.6574 19.98C15.4254 19.644 16.0194 19.152 16.4394 18.504C16.8714 17.856 17.0874 17.046 17.0874 16.074C17.0874 14.838 16.6794 13.878 15.8634 13.194C15.0474 12.498 13.7754 12.15 12.0474 12.15H7.33142V24.75H9.97742V20.502H11.8494H12.1554L14.6934 24.75ZM9.97742 18.234V14.4H11.8854C12.7134 14.4 13.3134 14.556 13.6854 14.868C14.0694 15.168 14.2614 15.624 14.2614 16.236C14.2614 16.86 14.0634 17.352 13.6674 17.712C13.2834 18.06 12.7434 18.234 12.0474 18.234H9.97742ZM28.2797 14.4V12.15H20.2337V18.648L21.9077 19.566C22.2797 19.266 22.6577 19.044 23.0417 18.9C23.4257 18.744 23.8457 18.666 24.3017 18.666C24.9137 18.666 25.3937 18.828 25.7417 19.152C26.1017 19.476 26.2817 19.944 26.2817 20.556C26.2817 21.252 26.0477 21.786 25.5797 22.158C25.1117 22.53 24.4517 22.716 23.5997 22.716C22.4717 22.716 21.4457 22.404 20.5217 21.78L19.5857 23.796C20.0537 24.192 20.6417 24.498 21.3497 24.714C22.0577 24.93 22.8197 25.038 23.6357 25.038C24.7397 25.038 25.6937 24.852 26.4977 24.48C27.3137 24.096 27.9317 23.562 28.3517 22.878C28.7837 22.194 28.9997 21.396 28.9997 20.484C28.9997 19.26 28.6577 18.33 27.9737 17.694C27.3017 17.046 26.4017 16.722 25.2737 16.722C24.8297 16.722 24.3857 16.776 23.9417 16.884C23.5097 16.98 23.1197 17.136 22.7717 17.352V14.4H28.2797Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z",
                  }),
                ],
              });
        }
        function E({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.73583 3C3.6326 3 1.88863 4.6288 1.74515 6.72713L0.292161 27.9771C0.134133 30.2883 1.96629 32.25 4.28284 32.25H31.7172C34.0337 32.25 35.8659 30.2883 35.7078 27.9771L34.2548 6.72713C34.1114 4.6288 32.3674 3 30.2642 3H5.73583ZM14.8236 24.0625H23.2836V21.6865H17.4696V11.4625H14.8236V24.0625Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z",
                  }),
                ],
              });
        }
        function L({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM14.8237 28.0625H23.2837V25.6865H17.4697V15.4625H14.8237V28.0625Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M24 0H12L18 6L24 0Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M24 0H12L18 6L24 0Z",
                  }),
                ],
              });
        }
        function u({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.7359 3C3.63266 3 1.88869 4.6288 1.74521 6.72713L0.292222 27.9771C0.134194 30.2883 1.96635 32.25 4.2829 32.25H31.7172C34.0338 32.25 35.8659 30.2883 35.7079 27.9771L34.2549 6.72713C34.1114 4.6288 32.3675 3 30.2642 3H5.7359ZM20.7179 24.0625H23.6519L20.6819 19.2925C21.4499 18.9565 22.0439 18.4645 22.4639 17.8165C22.8959 17.1685 23.1119 16.3585 23.1119 15.3865C23.1119 14.1505 22.7039 13.1905 21.8879 12.5065C21.0719 11.8105 19.7999 11.4625 18.0719 11.4625H13.3559V24.0625H16.0019V19.8145H17.8739H18.1799L20.7179 24.0625ZM16.0019 17.5465V13.7125H17.9099C18.7379 13.7125 19.3379 13.8685 19.7099 14.1805C20.0939 14.4805 20.2859 14.9365 20.2859 15.5485C20.2859 16.1725 20.0879 16.6645 19.6919 17.0245C19.3079 17.3725 18.7679 17.5465 18.0719 17.5465H16.0019Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z",
                  }),
                ],
              });
        }
        function S({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM20.7179 28.0625H23.6519L20.6819 23.2925C21.4499 22.9565 22.0439 22.4645 22.4639 21.8165C22.8959 21.1685 23.1119 20.3585 23.1119 19.3865C23.1119 18.1505 22.7039 17.1905 21.8879 16.5065C21.0719 15.8105 19.7999 15.4625 18.0719 15.4625H13.3559V28.0625H16.0019V23.8145H17.8739H18.1799L20.7179 28.0625ZM16.0019 21.5465V17.7125H17.9099C18.7379 17.7125 19.3379 17.8685 19.7099 18.1805C20.0939 18.4805 20.2859 18.9365 20.2859 19.5485C20.2859 20.1725 20.0879 20.6645 19.6919 21.0245C19.3079 21.3725 18.7679 21.5465 18.0719 21.5465H16.0019Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M24 0H12L18 6L24 0Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Background,
                    fill: "currentColor",
                    d: "M24 0H12L18 6L24 0Z",
                  }),
                ],
              });
        }
        function O({ bIsKnockout: B, ...y }) {
          return B
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "currentColor",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.4999 10.8201C19.7519 10.4974 18.8719 10.3361 17.8599 10.3361C16.9799 10.3361 16.1219 10.4681 15.2859 10.7321C14.4499 10.9961 13.7166 11.3407 13.0859 11.7661L14.0759 13.9881C15.0586 13.2547 16.1073 12.8881 17.2219 12.8881C17.9699 12.8881 18.5493 13.0494 18.9599 13.3721C19.3853 13.6801 19.5979 14.1201 19.5979 14.6921C19.5979 15.1027 19.4953 15.4474 19.2899 15.7261C19.0846 16.0047 18.7693 16.3201 18.3439 16.6721C17.8893 17.0681 17.5153 17.4347 17.2219 17.7721C16.9286 18.1094 16.6793 18.5641 16.4739 19.1361C16.2686 19.7081 16.1659 20.4047 16.1659 21.2261H18.8499C18.8499 20.6541 18.9453 20.1554 19.1359 19.7301C19.3266 19.2901 19.5539 18.9234 19.8179 18.6301C20.0966 18.3221 20.4633 17.9701 20.9179 17.5741C21.3579 17.1781 21.7026 16.8407 21.9519 16.5621C22.2159 16.2834 22.4359 15.9461 22.6119 15.5501C22.7879 15.1541 22.8759 14.6994 22.8759 14.1861C22.8759 13.4234 22.6706 12.7561 22.2599 12.1841C21.8493 11.5974 21.2626 11.1427 20.4999 10.8201ZM18.7839 23.2721C18.4759 22.9494 18.0653 22.7881 17.5519 22.7881C17.0386 22.7881 16.6279 22.9494 16.3199 23.2721C16.0119 23.5801 15.8579 23.9907 15.8579 24.5041C15.8579 25.0467 16.0119 25.4794 16.3199 25.8021C16.6279 26.1101 17.0386 26.2641 17.5519 26.2641C18.0653 26.2641 18.4759 26.1101 18.7839 25.8021C19.0919 25.4794 19.2459 25.0467 19.2459 24.5041C19.2459 23.9907 19.0919 23.5801 18.7839 23.2721Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...y,
                children: [
                  (0, e.jsx)("circle", {
                    className: a().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: a().Foreground,
                    fill: "currentColor",
                    d: "M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z",
                  }),
                ],
              });
        }
      },
      85705: (K, _, t) => {
        "use strict";
        t.d(_, { k: () => C });
        var e = t(7850),
          n = t(36707),
          v = t(37999),
          a = t.n(v);
        function C(d) {
          const { size: p, color: g, trackColor: x } = d,
            T = { borderColor: x, borderLeftColor: g };
          if (typeof p == "number") {
            const h = `${p}px`;
            (T.width = h),
              (T.height = h),
              (T.minHeight = h),
              (T.minWidth = h),
              (T.borderWidth = `${p / 10}px`);
          }
          return (0, e.jsx)("div", {
            className: (0, n.A)(
              v.Loading,
              p == "small" && v.Small,
              (p == "medium" || !p) && v.Medium,
              p == "large" && v.Large,
            ),
            style: T,
          });
        }
      },
      6046: (K, _, t) => {
        "use strict";
        t.d(_, { Ay: () => L });
        var e = t(7850),
          n = t(19298),
          v = t(7967),
          a = t(75779);
        const C = 0,
          d = 1,
          p = 2,
          g = 3;
        var x = t(55546);
        const T = 0,
          h = 1,
          l = 2,
          o = 3,
          r = 4;
        var i = t(90626),
          c = t(21690),
          D = t(74732),
          M = t(41944),
          I = t(35111),
          f = t.n(I),
          U = t(31377),
          Y = t(36118),
          W = t(39905),
          Z = t(3166),
          z = t(25792),
          k = t(21418),
          q = t(35038),
          F = t(80613),
          te = t.n(F),
          N = t(75245);
        class G extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              G.prototype.appid || N.Sg(G.M()),
              F.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    appid: { n: 1, br: N.qM.readUint32, bw: N.gp.writeUint32 },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = N.w0(G.M())), G.sm_mbf;
          }
          toObject(m = !1) {
            return G.toObject(m, this);
          }
          static toObject(m, w) {
            return N.BT(G.M(), m, w);
          }
          static fromObject(m) {
            return N.Uq(G.M(), m);
          }
          static deserializeBinary(m) {
            let w = new (te().BinaryReader)(m),
              j = new G();
            return G.deserializeBinaryFromReader(j, w);
          }
          static deserializeBinaryFromReader(m, w) {
            return N.zj(G.MBF(), m, w);
          }
          serializeBinary() {
            var m = new (te().BinaryWriter)();
            return G.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, w) {
            N.i0(G.M(), m, w);
          }
          serializeBase64String() {
            var m = new (te().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePerformanceStats_GetGameFrameRateStats_Request";
          }
        }
        class b extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              b.prototype.frame_rates || N.Sg(b.M()),
              F.Message.initialize(this, m, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: { frame_rates: { n: 1, c: s, r: !0, q: !0 } },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = N.w0(b.M())), b.sm_mbf;
          }
          toObject(m = !1) {
            return b.toObject(m, this);
          }
          static toObject(m, w) {
            return N.BT(b.M(), m, w);
          }
          static fromObject(m) {
            return N.Uq(b.M(), m);
          }
          static deserializeBinary(m) {
            let w = new (te().BinaryReader)(m),
              j = new b();
            return b.deserializeBinaryFromReader(j, w);
          }
          static deserializeBinaryFromReader(m, w) {
            return N.zj(b.MBF(), m, w);
          }
          serializeBinary() {
            var m = new (te().BinaryWriter)();
            return b.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, w) {
            N.i0(b.M(), m, w);
          }
          serializeBase64String() {
            var m = new (te().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePerformanceStats_GetGameFrameRateStats_Response";
          }
        }
        class s extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              s.prototype.clusterid || N.Sg(s.M()),
              F.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    clusterid: {
                      n: 1,
                      br: N.qM.readUint64String,
                      bw: N.gp.writeUint64String,
                    },
                    report_days: {
                      n: 4,
                      br: N.qM.readUint32,
                      bw: N.gp.writeUint32,
                    },
                    report_count: {
                      n: 5,
                      br: N.qM.readUint64String,
                      bw: N.gp.writeUint64String,
                    },
                    mean_frame_rate: {
                      n: 6,
                      br: N.qM.readDouble,
                      bw: N.gp.writeDouble,
                    },
                    mean_frame_rate_stddev: {
                      n: 7,
                      br: N.qM.readDouble,
                      bw: N.gp.writeDouble,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = N.w0(s.M())), s.sm_mbf;
          }
          toObject(m = !1) {
            return s.toObject(m, this);
          }
          static toObject(m, w) {
            return N.BT(s.M(), m, w);
          }
          static fromObject(m) {
            return N.Uq(s.M(), m);
          }
          static deserializeBinary(m) {
            let w = new (te().BinaryReader)(m),
              j = new s();
            return s.deserializeBinaryFromReader(j, w);
          }
          static deserializeBinaryFromReader(m, w) {
            return N.zj(s.MBF(), m, w);
          }
          serializeBinary() {
            var m = new (te().BinaryWriter)();
            return s.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, w) {
            N.i0(s.M(), m, w);
          }
          serializeBase64String() {
            var m = new (te().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate";
          }
        }
        var A;
        ((P) => {
          function m(w, j, ee) {
            return w.SendMsg(
              "GamePerformanceStats.GetGameFrameRateStats#1",
              (0, q.I8)(G, j, ee),
              b,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          P.GetGameFrameRateStats = m;
        })(A || (A = {}));
        function R(P) {
          const m = useActiveServiceTransport();
          return useQuery({
            queryKey: ["performancestats_" + P],
            queryFn: async () => {
              const w = CProtoBufMsg.Init(
                CGamePerformanceStats_GetGameFrameRateStats_Request,
              );
              w.Body().set_appid(P);
              const j = await GamePerformanceStatsService.GetGameFrameRateStats(
                m,
                w,
              );
              return j.BSuccess() ? j.Body().toObject() : null;
            },
          });
        }
        var E = t(26356);
        function L(P) {
          const {
            results: m,
            titleId: w,
            descriptionId: j,
            appName: ee,
            buttonProps: ae,
            autoFocus: le,
            onOpenBlogPost: ce,
            eStartingTab: de = E.ZJ,
          } = P;
          if (!m) return null;
          const J = () => {
            ce
              ? ce()
              : m.steam_deck_blog_url &&
                (window.location.href = m.steam_deck_blog_url);
          };
          let Be = ae ?? {},
            Se = null,
            pe = null;
          if (
            (m.steam_deck_blog_url &&
              ((Be.onOptionsActionDescription = W.Z.Localize(
                "#SteamDeckVerified_ViewDeveloperPost",
              )),
              (Be.onOptionsButton = J),
              (Se = (0, e.jsx)(Q, {
                blogURL: m.steam_deck_blog_url,
                eHWCompatibiltyDisplay: E.ZJ,
              })),
              (pe = (0, e.jsx)(Q, {
                blogURL: m.steam_deck_blog_url,
                eHWCompatibiltyDisplay: E.c9,
              }))),
            !m.resolved_items?.length && !m.frame_resolved_items?.length)
          ) {
            let De = "",
              Ae = null,
              Re = null;
            return (
              de == E.JR
                ? ((De = W.Z.Localize(
                    "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
                  )),
                  (Re = (0, e.jsx)(M.Nt, {
                    id: j,
                    category: m.machine_resolved_category,
                    appName: ee,
                  })))
                : de == E.c9
                  ? ((De = W.Z.Localize(
                      "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
                    )),
                    (Re = (0, e.jsx)(M.cP, {
                      id: j,
                      category: m.steamos_resolved_category,
                      appName: ee,
                    })),
                    (Ae = pe))
                  : de == E.bY
                    ? ((De = W.Z.Localize(
                        "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
                      )),
                      (Re = (0, e.jsx)(M.Pu, {
                        id: j,
                        category: m.frame_resolved_category,
                        appName: ee,
                      })))
                    : ((De = W.Z.Localize(
                        "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
                      )),
                      (Re = (0, e.jsx)(M.UN, {
                        category: m.resolved_category,
                        appName: ee,
                      })),
                      (Ae = Se)),
              (0, e.jsxs)(n.Z, {
                autoFocus: le,
                focusableIfEmpty: le,
                noFocusRing: !0,
                className: f().CompatibilityDetailsContainer,
                ...Be,
                children: [
                  (0, e.jsxs)("div", {
                    id: w,
                    className: f().DialogHeader,
                    children: [
                      (0, e.jsx)("div", {
                        className: f().DialogTitle,
                        children: De,
                      }),
                      (0, e.jsx)("div", {
                        className: f().AppTitleCategory,
                        children: (0, e.jsx)(M.Ez, {
                          category: m.resolved_category,
                        }),
                      }),
                    ],
                  }),
                  Re,
                  Ae,
                  !1,
                ],
              })
            );
          }
          const He = (0, c.z5)(m.resolved_category),
            xe = (0, c._R)(m.steamos_resolved_category),
            Ke = (0, c.z5)(m.machine_resolved_category),
            Fe = (0, c.z5)(m.frame_resolved_category || a.YX),
            Ie = (De) =>
              window.sessionStorage.setItem(
                "steamdeckcompatibility",
                `?tab=${De.key}`,
              ),
            Ne = [
              {
                name: (0, e.jsxs)("div", {
                  className: f().pillContent,
                  children: [
                    (0, e.jsx)(Y.lRD, { className: f().SteamDeckDeviceIcon }),
                    (0, e.jsx)(He, { className: f().RatingIcon }),
                  ],
                }),
                key: E.ZJ.toString(),
                contents: (0, e.jsx)(z.tH, {
                  children: (0, e.jsx)(O, { ...P, deckBlogContent: Se }),
                }),
                onClick: Ie,
              },
              {
                name: (0, e.jsxs)("div", {
                  className: f().pillContent,
                  children: [
                    (0, e.jsx)(Y.fhy, {
                      className: f().SteamMachineDeviceIcon,
                    }),
                    (0, e.jsx)(Ke, { className: f().RatingIcon }),
                  ],
                }),
                key: E.JR.toString(),
                contents: (0, e.jsx)(z.tH, {
                  children: (0, e.jsx)(B, { ...P }),
                }),
                onClick: Ie,
              },
              {
                name: (0, e.jsxs)("div", {
                  className: f().pillContent,
                  children: [
                    "steamos",
                    (0, e.jsx)(xe, { className: f().RatingIcon }),
                  ],
                }),
                key: E.c9.toString(),
                contents: (0, e.jsx)(z.tH, {
                  children: (0, e.jsx)(S, { ...P, deckBlogContent: pe }),
                }),
                onClick: Ie,
              },
            ];
          return (
            de == E.bY &&
              Ne.push({
                name: (0, e.jsxs)("div", {
                  className: f().pillContent,
                  children: [
                    (0, e.jsx)(Y.Ves, { className: f().SteamFrameDeviceIcon }),
                    (0, e.jsx)(Fe, { className: f().RatingIcon }),
                  ],
                }),
                key: E.bY.toString(),
                contents: (0, e.jsx)(z.tH, {
                  children: (0, e.jsx)(y, { ...P }),
                }),
                onClick: Ie,
              }),
            (0, e.jsx)(k.V, {
              tabs: Ne,
              classNameCtn: f().CompatibilityTabs,
              classNameTabContent: f().CompatibilityTabContent,
              startingTab: de.toString(),
              preferredFocus: !0,
            })
          );
        }
        function u(P) {
          const {
              titleId: m,
              title: w,
              autoFocus: j,
              buttonProps: ee,
              ratingIcon: ae,
              ratingSummary: le,
              deckBlogContent: ce,
              children: de,
            } = P,
            [J, Be] = i.useState(!1),
            Se = i.useCallback(() => J, [J]),
            pe = i.useRef(null),
            He = (0, Z.Qn)();
          let xe = ee ?? {};
          return (
            i.useEffect(() => {
              pe?.current?.scrollHeight !== void 0 &&
                pe?.current?.clientHeight !== void 0 &&
                Be(pe?.current?.scrollHeight > pe?.current?.clientHeight);
            }, []),
            (0, e.jsxs)(n.Z, {
              className: f().CompatibilityDetailsContainer,
              ...xe,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsxs)("div", {
                      id: m,
                      className: f().DialogHeader,
                      children: [
                        (0, e.jsx)("div", {
                          className: f().DialogTitle,
                          children: w,
                        }),
                        (0, e.jsx)("div", {
                          className: f().AppTitleCategory,
                          children: ae,
                        }),
                      ],
                    }),
                    le,
                  ],
                }),
                ce,
                (0, e.jsx)(v.Qg, {
                  ref: pe,
                  className: Se()
                    ? f().CompatibilityDetailsInterior_Scroll
                    : f().CompatibilityDetailsInterior_NoScroll,
                  children: (0, e.jsx)(n.Z, {
                    autoFocus: j,
                    focusableIfEmpty: j || Se(),
                    noFocusRing: !0,
                    children: de,
                  }),
                }),
              ],
            })
          );
        }
        function S(P) {
          const { titleId: m, descriptionId: w, results: j, appName: ee } = P,
            ae =
              j.steamos_resolved_items &&
              j.steamos_resolved_items?.findIndex(
                (J) => J.display_type == d,
              ) !== -1,
            le = (0, e.jsx)(M.cP, {
              id: w,
              category: j.steamos_resolved_category ?? x.xs,
              appName: ee,
            }),
            ce = (0, e.jsx)(M.aw, {
              category: j.steamos_resolved_category ?? x.xs,
            }),
            de =
              j.steamos_resolved_items && j.steamos_resolved_items?.length > 0;
          return (0, e.jsx)(u, {
            titleId: m,
            title: W.Z.Localize(
              "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            ratingIcon: ce,
            ratingSummary: le,
            ...P,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                de &&
                  (0, e.jsx)("div", {
                    className: f().CompatibilityDetailsSeparator,
                  }),
                j.steamos_resolved_items &&
                  j.steamos_resolved_items
                    .filter((J) => J.display_type != d)
                    .map((J) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: f().CompatibilityDetailsRow,
                          children: [
                            (0, e.jsx)(X, { displaytype: J.display_type }),
                            (0, e.jsx)("span", {
                              children: W.Z.Localize(J.loc_token),
                            }),
                          ],
                        },
                        J.loc_token + J.display_type,
                      ),
                    ),
                ae &&
                  (0, e.jsx)("div", {
                    className: f().CompatibilityNotes,
                    children: j.steamos_resolved_items
                      ?.filter((J) => J.display_type == d)
                      .map((J) =>
                        (0, e.jsxs)(
                          "div",
                          {
                            className: f().CompatibilityDetailsRow,
                            children: [
                              (0, e.jsx)(X, { displaytype: J.display_type }),
                              (0, e.jsx)("span", {
                                children: W.Z.Localize(J.loc_token),
                              }),
                            ],
                          },
                          J.loc_token + J.display_type,
                        ),
                      ),
                  }),
              ],
            }),
          });
        }
        function O(P) {
          const { titleId: m, descriptionId: w, results: j, appName: ee } = P,
            ae = j.resolved_items?.findIndex((J) => J.display_type == h) !== -1,
            le = (0, e.jsx)(M.UN, {
              id: w,
              category: j.resolved_category,
              appName: ee,
            }),
            ce = (0, e.jsx)(M.Ez, { category: j.resolved_category }),
            de = j.resolved_items && j.resolved_items?.length > 0;
          return (0, e.jsx)(u, {
            titleId: m,
            title: W.Z.Localize(
              "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
            ),
            ratingIcon: ce,
            ratingSummary: le,
            ...P,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                de &&
                  (0, e.jsx)("div", {
                    className: f().CompatibilityDetailsSeparator,
                  }),
                j.resolved_items &&
                  j.resolved_items
                    .filter((J) => J.display_type !== h)
                    .map((J) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: f().CompatibilityDetailsRow,
                          children: [
                            (0, e.jsx)(ue, { displaytype: J.display_type }),
                            (0, e.jsx)("span", {
                              children:
                                J.loc_token.charAt(0) != "#"
                                  ? W.Z.Localize("#" + J.loc_token)
                                  : W.Z.Localize(J.loc_token),
                            }),
                          ],
                        },
                        J.loc_token + J.display_type,
                      ),
                    ),
                ae &&
                  j.resolved_items &&
                  (0, e.jsx)("div", {
                    className: f().CompatibilityNotes,
                    children: j.resolved_items
                      .filter((J) => J.display_type == h)
                      .map((J) =>
                        (0, e.jsx)(
                          "div",
                          {
                            className: f().CompatibilityDetailsNoteRow,
                            children: (0, e.jsx)("span", {
                              children: W.Z.Localize(J.loc_token),
                            }),
                          },
                          J.loc_token + J.display_type,
                        ),
                      ),
                  }),
                !1,
              ],
            }),
          });
        }
        function B(P) {
          const { titleId: m, descriptionId: w, results: j, appName: ee } = P,
            ae =
              j.machine_resolved_items?.findIndex(
                (J) => J.display_type == h,
              ) !== -1,
            le = (0, e.jsx)(M.Nt, {
              id: w,
              category: j.machine_resolved_category,
              appName: ee,
            }),
            ce = (0, e.jsx)(M.Ez, { category: j.machine_resolved_category }),
            de =
              j.machine_resolved_items && j.machine_resolved_items?.length > 0;
          return (0, e.jsx)(u, {
            titleId: m,
            title: W.Z.Localize(
              "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            ratingIcon: ce,
            ratingSummary: le,
            ...P,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                de &&
                  (0, e.jsx)("div", {
                    className: f().CompatibilityDetailsSeparator,
                  }),
                j.machine_resolved_items &&
                  j.machine_resolved_items
                    .filter((J) => J.display_type !== h)
                    .map((J) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: f().CompatibilityDetailsRow,
                          children: [
                            (0, e.jsx)(ue, { displaytype: J.display_type }),
                            (0, e.jsx)("span", {
                              children: W.Z.Localize(J.loc_token),
                            }),
                          ],
                        },
                        J.loc_token + J.display_type,
                      ),
                    ),
                ae &&
                  j.machine_resolved_items &&
                  (0, e.jsx)("div", {
                    className: f().CompatibilityNotes,
                    children: j.machine_resolved_items
                      .filter((J) => J.display_type == h)
                      .map((J) =>
                        (0, e.jsx)(
                          "div",
                          {
                            className: f().CompatibilityDetailsNoteRow,
                            children: (0, e.jsx)("span", {
                              children: W.Z.Localize(J.loc_token),
                            }),
                          },
                          J.loc_token + J.display_type,
                        ),
                      ),
                  }),
              ],
            }),
          });
        }
        function y(P) {
          const { titleId: m, descriptionId: w, results: j, appName: ee } = P,
            ae =
              j.frame_resolved_items?.findIndex((J) => J.display_type == h) !==
              -1,
            le = (0, e.jsx)(M.Pu, {
              id: w,
              category: j.frame_resolved_category ?? a.YX,
              appName: ee,
            }),
            ce = (0, e.jsx)(M.Ez, {
              category: j.frame_resolved_category ?? a.YX,
            }),
            de = j.frame_resolved_items && j.frame_resolved_items?.length > 0;
          return (0, e.jsx)(u, {
            titleId: m,
            title: W.Z.Localize(
              "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            ratingIcon: ce,
            ratingSummary: le,
            ...P,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                de &&
                  (0, e.jsx)("div", {
                    className: f().CompatibilityDetailsSeparator,
                  }),
                j.frame_resolved_items &&
                  j.frame_resolved_items
                    .filter((J) => J.display_type !== h)
                    .map((J) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: f().CompatibilityDetailsRow,
                          children: [
                            (0, e.jsx)(ue, { displaytype: J.display_type }),
                            (0, e.jsx)("span", {
                              children: W.Z.Localize(J.loc_token),
                            }),
                          ],
                        },
                        J.loc_token + J.display_type,
                      ),
                    ),
                ae &&
                  j.frame_resolved_items &&
                  (0, e.jsx)("div", {
                    className: f().CompatibilityNotes,
                    children: j.frame_resolved_items
                      .filter((J) => J.display_type == h)
                      .map((J) =>
                        (0, e.jsx)(
                          "div",
                          {
                            className: f().CompatibilityDetailsNoteRow,
                            children: (0, e.jsx)("span", {
                              children: W.Z.Localize(J.loc_token),
                            }),
                          },
                          J.loc_token + J.display_type,
                        ),
                      ),
                  }),
              ],
            }),
          });
        }
        function Q(P) {
          const { blogURL: m, eHWCompatibiltyDisplay: w } = P,
            j = (0, Z.Qn)();
          if (!m) return null;
          if (j) {
            const ae =
              w == E.c9
                ? W.Z.Localize("#SteamOS_DescriptionHeader_DeveloperBlog")
                : W.Z.Localize(
                    "#SteamDeckVerified_DescriptionHeader_DeveloperBlog",
                  );
            return (0, e.jsxs)("div", {
              className: f().CompatibilityDetailRatingSummary,
              children: [
                ae,
                (0, e.jsx)("div", {
                  className: f().DeveloperBlogYButton,
                  children: (0, e.jsx)(U.$m, {
                    button: D.g4.Y,
                    type: U.wt.Knockout,
                  }),
                }),
              ],
            });
          }
          const ee =
            w == E.c9
              ? W.Z.Localize("#SteamOS_DescriptionHeader_DeveloperBlog_Desktop")
              : W.Z.Localize(
                  "#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop",
                );
          return (0, e.jsxs)("div", {
            className: f().CompatibilityDetailRatingSummary,
            children: [
              ee,
              (0, e.jsx)("a", {
                href: m,
                className: f().DeveloperBlockLinkDesktop,
                children: W.Z.Localize("#SteamDeckVerified_ViewDeveloperPost"),
              }),
            ],
          });
        }
        function ue(P) {
          const { displaytype: m } = P;
          switch (m) {
            case r:
              return (0, e.jsx)(Y.o5Q, {
                className: f().CompatibilityDetailsResultIcon,
              });
            case o:
              return (0, e.jsx)(Y.aVR, {
                className: f().CompatibilityDetailsResultIcon,
              });
            case l:
              return (0, e.jsx)(Y.jIP, {
                className: f().CompatibilityDetailsResultIcon,
              });
            case T:
              return (0, e.jsx)(Y.WX$, {
                className: f().CompatibilityDetailsResultIcon,
              });
            case h:
              return null;
          }
        }
        function X(P) {
          const { displaytype: m } = P;
          switch (m) {
            case g:
              return (0, e.jsx)(Y.ZjT, {
                className: f().CompatibilityDetailsResultIcon,
              });
            case d:
              return (0, e.jsx)(Y.bcZ, {
                className: f().CompatibilityDetailsResultIcon,
              });
            default:
              return null;
          }
        }
        function H(P) {
          const m = usePerformanceStats(P.appid);
          return useMemo(
            () =>
              m?.data?.frame_rates
                ?.find((ee) => ee.clusterid == "1")
                ?.mean_frame_rate?.toFixed(0),
            [m],
          )
            ? jsx("div", { className: styles.GamePerformance, children: null })
            : null;
        }
      },
      21418: (K, _, t) => {
        "use strict";
        t.d(_, { V: () => o });
        var e = t(7850),
          n = t(90626),
          v = t(36707),
          a = t(18210),
          C = t(179),
          d = t(1990),
          p = t.n(d),
          g = t(71421),
          x = t(53107),
          T = t(19298),
          h = t(20169),
          l = t(92757);
        function o(c) {
          const {
              tabs: D,
              bDisableRouting: M,
              startingTab: I,
              controlledTab: f,
              OnTabChanged: U,
              classNameCtn: Y,
              classNameTab: W,
              classNameTabContent: Z,
              preferredFocus: z,
              bVerticalTabs: k,
              bSticky: q,
              bChecklistMode: F,
            } = c,
            te = (0, l.zy)(),
            N = (0, l.W6)(),
            [G, b] = (0, n.useState)(
              () =>
                I ||
                (!M && (0, C.f3)(te, "tab")
                  ? ((0, C.f3)(te, "tab") ?? "")
                  : ""),
            );
          (0, n.useEffect)(() => {
            if (!c.bDisableRouting && te) {
              const S = (0, C.f3)(te, "tab");
              S && b(S);
            }
          }, [te, te.key, c.bDisableRouting, b]);
          const s = n.useCallback(
              (S) => {
                b(S.key),
                  M || (0, C.Bm)(N, "tab", S.key),
                  U?.(S.key),
                  S.onClick && S.onClick(S);
              },
              [M, N, U],
            ),
            A = D.filter((S) => !S.hidden);
          if (!A.length) return null;
          const R = f ?? G,
            E = A.find((S) => S.key === R) || A[0],
            L = z ? (I ?? A[0].key) : void 0,
            u = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(T.Z, {
                  className: (0, v.A)(
                    p().GraphicalAssetsTabs,
                    k && p().GraphicalAssetsTabsVertical,
                    F && p().ChecklistMode,
                    q && p().Sticky,
                    Y,
                  ),
                  navEntryPreferPosition: z ? h.iU.PREFERRED_CHILD : h.iU.FIRST,
                  children: A.map((S, O) =>
                    (0, e.jsx)(
                      i,
                      {
                        tab: S,
                        OnTabClick: s,
                        classNameTab: W,
                        active: S.key === E.key,
                        preferredFocus: L === S.key,
                      },
                      S.key,
                    ),
                  ),
                }),
                E && (0, e.jsx)(T.Z, { className: Z, children: E.contents }),
              ],
            });
          return k
            ? (0, e.jsx)(T.Z, {
                className: (0, v.A)(p().GraphicalAssetsTabsLayoutVertical),
                children: u,
              })
            : u;
        }
        function r(c) {
          const {
            statusType: D = "success",
            bShowStatusBox: M,
            children: I,
          } = c;
          let f = "";
          return (
            D === "success"
              ? (f = styles.StatusSuccess)
              : D === "danger"
                ? (f = styles.StatusDanger)
                : D === "caution"
                  ? (f = styles.StatusCaution)
                  : D === "info"
                    ? (f = styles.StatusInfo)
                    : D === "incomplete" && (f = styles.StatusIncomplete),
            jsx("div", {
              className: classnames(
                styles.GraphicalAssetStatus,
                f,
                M ? styles.checklistBox : "",
              ),
              children: I,
            })
          );
        }
        function i(c) {
          const {
            tab: D,
            OnTabClick: M,
            classNameTab: I,
            active: f,
            preferredFocus: U,
          } = c;
          return (0, e.jsx)(x.e7, {
            condition: !!(D.statusToolTip || D.tooltip),
            wrap: (Y) =>
              (0, e.jsx)(g.he, {
                toolTipContent: D.statusToolTip || D.tooltip,
                children: Y,
              }),
            children: (0, e.jsxs)(T.Z, {
              className: (0, v.A)(
                p().GraphicalAssetsTab,
                f && p().Active,
                f && "ActiveTab",
                I,
              ),
              onActivate: () => M(D),
              preferredFocus: U,
              children: [
                !!D.vo_warning &&
                  (0, e.jsx)(g.he, {
                    toolTipContent: D.vo_warning,
                    children: (0, e.jsx)("div", {
                      className: p().VOWarning,
                      children: (0, a.we)("#EventEditor_VOWarning"),
                    }),
                  }),
                D.status,
                D.name,
              ],
            }),
          });
        }
      },
      64769: (K) => {
        K.exports = {
          "duration-app-launch": "800ms",
          GameHoverCapsuleCtn: "_1isLDN8xbFyCDG5jtMO7J3",
          Loading: "_6exjsiWCk6IgWiQenqfQH",
          UseHidingBottomHalf: "_3707obuB-7wD8GDUYRaLH4",
          TrailerAnchorStoreLink: "_1VNyOcfe2cBKY52VedXjyc",
          TrailerCtn: "_3ANIAZhTtXLvORlbv-Du-N",
          FullDivImage: "JIMdRVl5GQwMrWUt3A6RH",
          Transparent: "_2pVFEfWO0oGPOwTylls-tE",
          Midline: "_3qz5n49jfXUrhCnqkmibgt",
          Price: "_3mEkhLPOOR45uhGnhsHkao",
          CapsuleImageAnchorPoint: "Ea3rwozDuOg8FLc8b7n2c",
          CapsuleImageCtn: "_3EW-HHeEwhOW7IbL8k5VnZ",
          WithCornerShine: "_30TPn4BD1o-X0WcWYvJ-gF",
          Opening: "LiQedMzPoDBtg4XmNlHSU",
          Open: "_2HPVMueZXbMmvgW8C6iOw7",
          DemoButton: "_2Mu1VwOBzB0kLcDCRbJD6w",
          WishlistButton: "_3FAid_cwwxW8-9Sp6pSPqS",
          ShowInGamepadUI: "_2f6Nut1kQFb4WnCmz4uXDG",
          WishlistButtonText: "_2GqXfP0dBAJl9ozuBV3Jqh",
          WishlistLoadingText: "_2k23LU1oBxEHe-_Qff-1k3",
          WishlistButtonNotTop: "_3W_yknADVFtPgqx9Wh2ayW",
          FollowGameButtonNotTop: "iNS5yHAxKgg4H1nukkyxN",
          BottomShelf: "_3QqbGLgtSpReBWRaPB5GnI",
          BottomShelfOffScreen: "_3ncpfgFYDbcm9Iv5ca27Y0",
          ShortDescription: "APpfln1FqbXnR9klsbeM_",
          TextContent: "_3WlfumeMCR40WR-uBdg3Gx",
          GameTitle: "_38GHf0V2kn6MNNjQF7QajG",
          TagRow: "_1keH60e_I90mkEgfpsw88B",
          Tags: "_1GfeALEEHA6uNXnvOXvTSW",
          Tag: "_2bi1NxjYgiXf0VZFoYAKWE",
          PlatformDisplay: "_1Y5yJHywrdBJlgg1JbWnM5",
          ReviewsAndRelease: "_39DFdWNzMu5Bpkg0MYRE__",
          ReleaseDate: "_3b8-ojNFf-CIMu9sOMJhM6",
          ReleasePrefix: "_1mRD6kBN_rXYh69QwQx9CJ",
          ReviewScore: "_6ctF1zf2MKZRofZdWQXqG",
          ReviewScoreHeader: "_3RQ_AUZpM18Y9IO5ufZ5X6",
          ReviewScoreCount: "yYag_VAd2NXLTrOBd-6mu",
          ReviewScoreLanguage: "_3-FV36ByKDMBDoEKOpnY9s",
          ReviewScoreValue: "XwgGstGDpIVOjAfg3pK1e",
          ReviewScoreDivider: "EbDXdng1ktTe_DvwN32Tv",
          ReviewScoreNone: "_j-FE6iveSoKTCgGAx_NK",
          ReviewScoreLow: "eb3U2C9mNpcsxnVO-QAvh",
          ReviewScoreMixed: "_33l5fpEoTZORkBTRCg4adM",
          ReviewScoreHigh: "_2Mc-wW0wAsgehC46aTwBVa",
          ReviewScorePercentage: "_2jmj3hWBpHbR2XUcZaAXFp",
          ReviewScoreLabel: "uEsfJ0VAuX37ItihZkK2J",
          GameHoverCreatorFollowButtonCtn: "_1RMWITT8PsJOgR4SoIR3Sw",
          BackgroundAnimation: "_2-NF7UzSGK3WLmqugAW3EM",
          "ItemFocusAnim-darkerGrey-nocolor": "bfQTK-Cop8MYUAa9j7rQb",
          "ItemFocusAnim-darkerGrey": "_1_wN_hVuLwcfYlTDIE-HTs",
          "ItemFocusAnim-darkGreySettings": "YO_BEpx_0vuXWdgMFEjkL",
          "ItemFocusAnim-darkGrey": "_32cDe-nAMlG7JYrA6niEGN",
          "ItemFocusAnim-grey": "_2LnPTi1cPqqxqvII8cqnlh",
          "ItemFocusAnim-translucent-white-10": "-jNJst4AtmAMI-o6ETEiC",
          "ItemFocusAnim-translucent-white-20": "_1dwebsW8iZHHqsEF46LGhs",
          "ItemFocusAnimBorder-darkGrey": "wiEMwKtkhMy1kSbxfOR43",
          "ItemFocusAnim-green": "PJqmv3PnTw0P2SQBGF3nn",
          focusAnimation: "_2mMG8YO1MWnzaegzgcISk2",
          hoverAnimation: "_2aCSOFWsYITdHt3aWn3-vu",
        };
      },
      39722: (K) => {
        K.exports = {
          "duration-app-launch": "800ms",
          IgnoreButton: "_2TD7UsjzdR3Zr5ZOZ09n1J",
          IgnoreButtonText: "_2L6vwdfaFPRJ1zesEu6_Bf",
          IgnoreLoadingText: "uh8VGMa5zc623SZkB_hEQ",
          BackgroundAnimation: "_10sTNSs7WhNZPw6GdPTOJX",
          "ItemFocusAnim-darkerGrey-nocolor": "_1MdU34KFhJRKlGMaHngbls",
          "ItemFocusAnim-darkerGrey": "G_fmZBeNGKwyXP6EjOOZ_",
          "ItemFocusAnim-darkGreySettings": "_3n4qtxFhgpKOJlGlGVcI1H",
          "ItemFocusAnim-darkGrey": "_20-FW4mkUJEpsgtwPjoMD6",
          "ItemFocusAnim-grey": "_1QVohJAkrDR6QXMK3fZLMu",
          "ItemFocusAnim-translucent-white-10": "_2vttABcjIJHbd-xXLvTfgb",
          "ItemFocusAnim-translucent-white-20": "_2uyItrki6ohcX2MO3FPcKx",
          "ItemFocusAnimBorder-darkGrey": "_8sJgPArY-c3-X6w3X3la9",
          "ItemFocusAnim-green": "_3ZGmJEBxcg9Rgo7ObB8qJ0",
          focusAnimation: "_23SWPBJXy3Zmgp6Guu_3nw",
          hoverAnimation: "_3BrzCFDf-VVWJEnHMnE5xt",
        };
      },
      10350: (K) => {
        K.exports = {
          ItemHoverSource: "_31qyh2htA-NLfzSAvjjJcl",
          Selectable: "b_zOCi3Z3BKdeweHShKDf",
          HoverContentTransition: "_14fzjUJx__1_iVvRQOFvNZ",
          Opening: "_1-VyPy3KZSzyBfUxYeZGHQ",
          Open: "_2lBsXkkcijYbtJ_ml1-6nE",
        };
      },
      72365: (K) => {
        K.exports = {
          DemoButton: "_28CiBI8NLjLb6f6rlg_Ymg",
          DisabledButton: "_2vOGUa8HwoudpQtMOK5Nqw",
        };
      },
      39285: (K) => {
        K.exports = {
          RemoteOptions: "_1n4VsDtc0Av8cBgMJsgkDD",
          InlineLink: "_2nR4GT4DVg9Yl-bTs7Af6_",
          GameName: "_3uXW4QW6my5P4roTw70MxY",
          DownloadStartedCtn: "_1Vx6FpWjxhV9SI5Ld9_nsI",
          LearnMoreCtn: "_3oCB1RA8pibBfr_I0D7Jzr",
          ActionRow: "_1awvs90V6ciEDjEPbnZJ8J",
          ClientSelector: "_3aMZqhwSarToWISh50lejs",
          ClientName: "pR2rsYluolxfGVABLBUAc",
          Icon: "J_P3D4Qf7oCaZDIB-9dzG",
        };
      },
      44375: (K) => {
        K.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
      73187: (K) => {
        K.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      54599: (K) => {
        K.exports = {
          GotSteamDialog: "_2Qusm1gosCAtAqLKo5hioQ",
          DownloadSteamUrl: "_10lP7BWsYbhm_AclLUpjRi",
          GameName: "_1_uzwF-1oILlCEkcaApC-n",
          Buttons: "_2_Obm3_emYUZKMgT1bdKgG",
          Button: "_2nVaF4foORFEq78yZ3A7yA",
          LeftButton: "_3WYyumzIcbu_0Zysgbr4_h",
          AnswerText: "hCqVo4reICITJSgSg8g6t",
          ActionText: "_2s5NsgqEDdI6nKvz-9YFa4",
          Footer: "_3OKQsxzgQZkt2GtKz9679g",
          Logo: "_2AEA_k1tEcjAtTL7-Bnitk",
        };
      },
      35111: (K) => {
        K.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          BannerContainer: "_29jK3MyNRDW7PAcrm59l_O",
          BannerHeader: "_3yxJH3baj7mwTTYzBIyi_Z",
          BannerContentDesktop: "Cek1s5Ixk2xYmkqjjESD0",
          BannerContent: "_2dGPTYWTKq3CirJwPXKw2b",
          LearnMore: "_2gXzKgnqPNSUzBWEYvQ4OP",
          DeveloperBlockLinkDesktop: "_1lpfU0ZtNKyd69pGItpBIh",
          CategoryIcon: "_3qF711tcWJEMKEv_r_S2tz",
          LearnMoreCtn: "_2IcEuX6gnbktAOaz9t0dTB",
          LearnMorePC: "CrSPfZhq2070MqXIkkryS",
          DialogHeader: "ZEuE1Cb-TDw4-XHl51qc4",
          DialogTitle: "_2WJTd3a8tzPCkIBmvfBD79",
          AppTitleCategory: "_23sFZwpTqnM3Ameqew-ZuX",
          CompatibilityDetailsStillLearning: "_1WWwtz2-hqx1OnhlEOCTLl",
          CompatibilityDetailsContainer: "_1-O8t3AxzpNsipTPfHVktW",
          CompatibilityDetailsInterior_NoScroll: "_3oQPVwTgG0CmSxwl3e1cI4",
          CompatibilityDetailsInterior_Scroll: "_2uCLczcyA7K90OppYPMeBA",
          GamePerformance: "_5LMNcPZPMKt07G9Atmv_d",
          GamePerformanceValue: "rRMEH3oJvrQFGd520RdY0",
          CompatibilityDetailsRow: "_32fPpbyivR63XHk0qiRv5n",
          CompatibilityDetailRatingSummary: "mJGYScROtrnXBuQ-LU507",
          Verified: "ewmg-iZH8r2ghippaDEbq",
          Playable: "_1n8vatQzJB_Xptbs8lnm9n",
          Unsupported: "_2Q0ld2nJ3334gwZJ4LVzPW",
          Compatible: "_2XeA02URQukjyKp0fh__XL",
          CompatibilityDetailRatingDescription: "_3456EX4aC94XtIz6d_Qhsl",
          CompatibilityDetailsSeparator: "_2mwbdnqm9Lk1-Bzs8FIdCU",
          CompatibilityDetailsResultIcon: "-L3Xub7NtXchyErJuHnKk",
          CompatabilityDetailsNoteContainer: "_6_vookxUbQB-_K6ZSHoOs",
          CompatibilityNotes: "_1aoamIeDfCjdgyuxLvC71m",
          CompatibilityDetailsNoteRow: "_1Wu_jj1kk9n3WIoga3RL_J",
          DeveloperBlogYButton: "_3avWDmRhG0NCncSbd3Wsz5",
          Divider: "_1ikdMiUUJQCzu5m-OgP8az",
          DeveloperComments_Anchor: "_JTh9okiXkhbwI3pLwToq",
          DeveloperComments_Icon: "_2R6eCuptMWK0ZkTe0GeqEi",
          DeveloperComments_LinkNoIcon: "_1zjwW1q8ccnB76k2rPv9oM",
          DeveloperComments_LinkIcon: "_3OZNUKYm6BQ2AVO-NCNw2t",
          CompatibilityTabContent: "_3c5UMEMwi7F5tnSJiw26TQ",
          CompatibilityTabs: "_1ALZVqWCl2J8DJg4XxemH1",
          pillContent: "_1M5TZawv5Y4CRNXAISchG2",
          RatingIcon: "JpPKQ9u62K6FUa-N8VbN8",
          SteamMachineDeviceIcon: "_1nTDsg_9olpJdf7qqVpGfL",
          SteamFrameDeviceIcon: "_34S3mEk7xRyS1Lnlnkd0hu",
          SteamDeckDeviceIcon: "_3IOFFIoATruXDCEVO_7Jqd",
          BackgroundAnimation: "_2FyGcNFIRkW3k-FdDagwCV",
          "ItemFocusAnim-darkerGrey-nocolor": "_1yIgtU9bZ6s1FD5YwYN7Ux",
          "ItemFocusAnim-darkerGrey": "DhRlb0k8yiOildRAPKbUv",
          "ItemFocusAnim-darkGreySettings": "_1rM6kybplpPqKeO6oRkrNQ",
          "ItemFocusAnim-darkGrey": "_2FbbkQw3hYI7YAtytr5IDn",
          "ItemFocusAnim-grey": "_2suu44WFaHB4fkFfIvCI7U",
          "ItemFocusAnim-translucent-white-10": "_2j1TKoZjmYdt4yBTKkRCgR",
          "ItemFocusAnim-translucent-white-20": "_1qTgWOW3x6-b_CW5qQoSSo",
          "ItemFocusAnimBorder-darkGrey": "_1Lxbh0NQsK7RWCdF8QEIej",
          "ItemFocusAnim-green": "_1ZB1uzf3hgyFkekpi0xZg5",
          focusAnimation: "WewegkENW7QZMuoX3r_v8",
          hoverAnimation: "NCIvCtzfGkBvu5KDz_CE1",
        };
      },
      82080: (K) => {
        K.exports = {
          AddToCartAnchorCtn: "_2ZqO4e00c6-Fr4hJvTJsAu",
          Action: "yoe6d_43t3I6-mjbZGkLs",
          ActionOutOfStock: "_3XwnF5hpyOwvxFT_v7PMhS",
        };
      },
      56524: (K) => {
        K.exports = {
          DevSummaryCtn: "_1k0S-tUF_ENycLJ7PWqbzS",
          LargeFormat: "_1090TwnnSh07Rya_5ss37E",
          CreatorDescCtn: "_3nKoQbWM1xYxsCfDoImGQ-",
          SmallFormat: "_18tLexJfL4tGNabZ9Ywvlm",
          MinimalDisplay: "ROZPQ29NfT-_S-vY5rMJp",
          DevSummaryWidgetCtn: "A2B2VZqisd8LEU7zknWqk",
          DevSummaryContent: "_23xa4AVp7kYtbslOOB8xly",
          DevSummaryBackground: "_1TsqAyLSPMv7JrgVI6Jpnv",
          AvatarLink: "_1N0rYLgFmHTfQng24QRoEh",
          Avatar: "_3JepbxeEa0I4l8TnG9DeT5",
          CreatorTitleCtn: "_2T8Ub04W0G2L6_3692y23L",
          CreatorNameName: "_8196lUGpYeVntSAwJq-64",
          CreatorTagline: "NX5WeT2qHbZGaVykMxMA2",
          Title: "_37vyVYzsOKNDlPWnQ5zcMF",
          Followers: "_2ZpFi_vScMetinFMtGp2WE",
          FollowerCount: "_3cARehxbzcQp_dC3sKo3QH",
          SocialFollowersCtn: "BT3Bjo-dSXZV11Cqy_Awo",
          FollowBtnCtn: "_2artmqqQS2Rl8YMsi1nV-U",
          FollowButton: "_1HwWXjF06mJ9sG_9KXlgA-",
          FollowBtnText: "_1a5djsChaeoZViyFSGNom5",
          SocialContainer: "_1o1Ds-OdAZcjo18bw9QiEH",
          SocialImg: "_2v_K1-p6KHigjcjV3HlHsV",
          SocialLink: "_3eCVbMRawBIqtu1HpE7qJR",
          CuratorHoverCtn: "_30j_Rriv37jV9sEvTdi8Kw",
          MembersListLink: "_3DO0NUX-db2kVZWScbJetR",
          CreatorCarouselCtn: "_11Cu9S1VPnTs2MtOD6DUWN",
          CreatorCarouselCrumbs: "_2EheiN3i0vJ-6LTaCsey78",
          CreatorCarouselCrumb: "_3CIQhWZfRLsRxOmCy1obyV",
        };
      },
      95695: (K) => {
        K.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
          BackgroundAnimation: "_3jOnURPodgSJ0VVO2lchIh",
          "ItemFocusAnim-darkerGrey-nocolor": "_2J2q_u-IE_3MWcK8YJwYX5",
          "ItemFocusAnim-darkerGrey": "hml57jb3ouTfP1qbnI4_V",
          "ItemFocusAnim-darkGreySettings": "_1ex6ItU2bR-tAYkBYAfqnF",
          "ItemFocusAnim-darkGrey": "_3ILf95Fdqnqg9OfLO3lrZH",
          "ItemFocusAnim-grey": "_159SLrXx_wC4ZI3ZLaz1A_",
          "ItemFocusAnim-translucent-white-10": "_2LlOq5G2PXnoXnElUH9sZS",
          "ItemFocusAnim-translucent-white-20": "oskDWTSKtzqVUSfD5nKvN",
          "ItemFocusAnimBorder-darkGrey": "_22jWCdivanrS6yxyLk3zMH",
          "ItemFocusAnim-green": "_3JEJrM-AMsqF1VHbRBXYvZ",
          focusAnimation: "KS3LLxXLFm_S6AWOrqeVo",
          hoverAnimation: "_9UqiMHhWNZyuE_A0XwG9N",
        };
      },
      52393: (K) => {
        K.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SaleSection: "_1cOoCFwafBlSkwllIMf3XM",
          CarouselDisplay: "mntHD0WiARnsfz_kMYssq",
          SaleSectionCtn: "i2PTzRNXOK1OXvXb9-wzd",
          NoTopPadding: "_28qZDRJ1HAArkoQZjlLJ09",
          SaleHeaderContainer: "W4mvnnQ0uYKKoCfVm8QgX",
          DisabledBackground: "OPH8r3-pnCjCM7T8GrpWo",
          SaleSectionTabs: "_1FPIVJTLsw1nvAN24BGGKg",
          SaleViewAll: "_1bsBzvGKJui5_QaWVRBFDo",
          SaleSectionLoginPrompt: "_2-dSBTJ6PQzCGvK48gjCCf",
          LoginButton: "_3h6sHYHa8EFm2_xoGiVAnh",
          SaleSectionLivePreview: "_2dBAh0VOfhvgWv2ck8hp7n",
          Hover: "_15FfaTmQGzroKql83EUpaR",
          JumpedTo: "d-8MOKpyXkBvtl8y9qw8C",
          JumpToSection: "tlI9rzg19pPTqlI5UfDP",
          JumpToButton: "eOemW7abP9ncGnYuKqjCO",
          SaleOverlayCtn: "_3GTIcdmGdFdIHRLd5vgEDq",
          SaleOverlay: "_1sZo8rydBtEGprct3pN_1a",
          CarouselCapsuleBordered: "_31OAy5ksRg6RGhCGnDqRr3",
          CarouselCapsuleAnimated: "_3V1O5NH39Eec7m68CKLMDQ",
          AppSummaryWidgetCtn: "_2H8BmYvTdIYKMgG-XiCkc-",
          CarouselSalePageCapsule: "_3r4Ny9tQdQZc50XDM5B2q2",
          SaleBroadcastCtn: "_1SFMhugeWIHJIHrHl6ZQvD",
          SaleOuterTopMargin: "_2-wCQql61VqgdUYz9XDAE6",
          SaleOuterContainer: "_150kddWk8JgylTvh_eC20b",
          CustomStyle_together: "_1lAygDKkL4NolLsYyh0b_x",
          SaleNewSizing: "_1v-BVc2xZoBmJV2CPwNpq0",
          SalePageLogoSet: "JxIGHUxdTjFyWl1KO_tkn",
          SaleBackground: "_2N8SepiLeBUusG1vbHCgiY",
          SaleSectionTitleCtn: "bE2EA4JB9SDa1PZ7HSFL-",
          SaleSectionSubtext: "_17Fnl-wNZIrLjca5rOwwlT",
          SaleSectionContainer: "W9_WAYXgEe-t-7aqqC4Jp",
          vr_supported: "_1BDSJfdkuBN1tCLPLLopYW",
          vr_required: "_1P__hyqsgd049GH0Bn007_",
          preview_placeholder_section: "_3QLsjvek1OeH0pVbeOTBJj",
          LinkCapsule: "_2zVSaxkr0mGLlJ4ivF37dx",
          fullscreen_bg: "j2ykTCJIixZLTJZbDR4Tp",
          fullscreen_bg_video: "_3BU-yduiJJKNkd7_HrsZOY",
          SalePageBroadcastContextHover: "hbVdlTqhylKeYY8mtvLqP",
          AlbumCoverImage: "_2JfUA1GR2GBllJws5Gspq-",
          AlbumTitle: "keaMw-O2oHvRxLDK6gqEG",
          SaleSectionTabListContainer: "_2VZtqrDRVSIicZZHPUY9SY",
          MobileTabSelector: "_2fm5TVukvQanOpOSUahWeX",
          Visible: "_2Jmo5M2wPydPpQXUh8BQt3",
          MobileTabSelectorButton: "_1t4-3uyyq_jmSjRl6tRVef",
          MobileTabSelectorShortcut: "_1P5tcXycY4v5y9lSKeW2bG",
          DesktopTabs: "_2utXvAVvZJb3Wlt5jGxCs",
          MobileTabSelectorDropDown: "_3KO7Yj0s2ECNBrnZ3x6jIy",
          MobileTabSelectorOption: "GiTJlPmmuQyCr-OSCN08c",
          TabContentsContainer: "_2xJbuKOjgnmynp-q7384DI",
          HorizontalScrollInDragForceCursor: "nemO6I3-P1dWDt4lymNBD",
          SaleBroadcastSection: "_1u0IZcPxb5nhSDdfCHHBY9",
          CarouselPage: "HlkukqE4fB5si76sBJzKX",
          TabButtonsCtn: "_21-6tYOa1oCDYC9YCj1Vur",
          TabButton: "_1Gz4sRWceGeI3Si8NI3ZNk",
          SaleTabLabel: "_2mYMQE06Py3h0CfEokpNiM",
          DefaultCreatorCtn: "_3KzJ1sfvwr94TVth1tZA9",
          EventSectionViewAllCtn: "_1B6gV2QA_GwFQvK3wA5qWs",
          SaleSectionBackgroundImageGroupEdit: "_2a4meRP6BAw2re4BFrrwtA",
          BackgroundAnimation: "_1iEXo2C5dYh1sLdEds2zo_",
          "ItemFocusAnim-darkerGrey-nocolor": "_6ALY2cB6oP10XwjHy38XP",
          "ItemFocusAnim-darkerGrey": "_15R1kTQu4fktTozfpKwx_x",
          "ItemFocusAnim-darkGreySettings": "_25-J06c8AyBhzEbrxt0OlL",
          "ItemFocusAnim-darkGrey": "_3yxHI8TA-jq3Ka361SNOoS",
          "ItemFocusAnim-grey": "HdE5j3QJ5wzLUrUd8A9S6",
          "ItemFocusAnim-translucent-white-10": "_3Pg_mdzZKHlcgBMGWoeuM-",
          "ItemFocusAnim-translucent-white-20": "OZ_TTGcJc45o9tMuXjaVs",
          "ItemFocusAnimBorder-darkGrey": "_36t4Gu0DFfDO9-hIb82st6",
          "ItemFocusAnim-green": "_30VQHyiQ7SgMZgv2Q9RwMo",
          focusAnimation: "_1bLCgV4sZsGIHim8xs3go9",
          hoverAnimation: "_3--MfPAMg27VUuOckksz2m",
        };
      },
      18654: (K) => {
        K.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          headerCapsuleImgWidth: "460",
          headerCapsuleImgHeight: "215",
          mainCapsuleImgWidth: "616",
          mainCapsuleImgHeight: "353",
          libraryAssetImgWidth: "300",
          libraryAssetImgHeight: "450",
          heroCapsuleImgWidth: "374",
          heroCapsuleImgHeight: "448",
          StoreSaleWidgetContainer: "_2hhNOdcC6yLwL_rugP3YLf",
          LibraryAssetExpandedDisplay: "PZY_7wH_NY7OgzH9MBiB8",
          SaleItemDefaultCapsuleDisplay: "_37iggltdgh0RtNIECJCfOj",
          BundleContentPreview: "jQ5GanUKBEe7hhgCh6b5z",
          PreviewCtn: "_1NM531LjOd5QmDktUetCOm",
          MarketingMessage: "_3_q87LhuWitbYSEHOVKYlM",
          StoreSaleWidgetRight: "v9uRg57bwOaPsvAnkXESO",
          StoreSaleWidgetHalfLeft: "_111nfdz8Xyg7lDjTWv_OmK",
          StoreSaleWidgetTitle: "_2ekpT6PjwtcFaT4jLQehUK",
          StoreSaleWidgetLibraryAssetExtendedTop: "_1uLNByMlXsYSmrGPWyDNhE",
          StoreSaleWidgetLeft: "_3DkfNrtTOLjNYd3yZliMzy",
          StoreSaleDiscountBox: "cnkoFkzVCby40gJ0jGGS4",
          PurchaseOption: "_2R_C2rCrJEg8G8_d7-QQKn",
          StoreSaleWidgetImage: "yvqq8z2k4i7-Mzx-JHeNC",
          CapsuleMicroTrailer: "_1M7n5f3gWCHv1wN1smoxWg",
          CapsulePlatform: "_2bCf9u4rlC8De687HY6wnh",
          StoreSaleWidgetContents: "AgwfelHhJjcEq6ZQ9ohVr",
          StoreMetaDataCtn: "_2W2g30XYcaT1E3_IWsyVMK",
          StoreSaleItemRelease: "vCEpeeiHJkcIDdtTkRfjT",
          StoreSaleItemDev: "_3tIbO7JWeYXTD8fDol5_-f",
          StoreSaleItemReview: "Kx5NfQxifS6Xw2JxtcV31",
          TitleCtn: "_3rrH9dPdtHVRMzAEw82AId",
          StoreSaleWidgetCrossCenterRight: "oW0H1sBVE8K8u0qbq_Tm5",
          CapsuleBottomBar: "_3lmdEmwrmqe-kicNCZ9v-I",
          PlayNowButton: "_38ePadMVKPpN2BnpideoQw",
          AddToLibraryButton: "_1DrDh5P3SNgRdVAaUyel3G",
          StoreActionWidgetContainer: "kW6m4Sjqacp5hykrj5LEo",
          StoreSalePriceWidgetContainer: "_2s-O5T3qJJYR2AUq4b9jIN",
          StoreSaleWidgetBgTint: "MvLJDXjfbme8Uw3OERaCb",
          LibraryFallbackAssetImageContainer: "_1APLSpJeTPfN76xzyzVSfx",
          FallbackBackground: "_3chRZTd1smybX8C-swWcAm",
          SaleTagBlockCtn: "_1ZqQL1ugqx5VZZK7e7nZuc",
          StoreSaleWidgetCenter: "_2asUTzZuAkj9cDRKsLvwRE",
          StoreSaleLibraryAssetWidgetRight: "_1gLxXYZKQJSLc5MKYXEesv",
          StoreSaleWidgetReleaseAndTags: "_3wryhCRrTuMULeq_YjNk-s",
          Bundle: "_2GbhLyknhFLhpEOlbBXC3z",
          WidgetReleaseDateAndPlatformCtn: "_3a6HRK-P6LK0-pxRKXYgyP",
          SaleItemBrowserRow: "gASJ2lL_xmVNuZkWGvrWg",
          StoreSaleWidgetRelease: "_1qvTFgmehUzbdYM9cw0eS7",
          StoreSaleWidgetTags: "_2bkP-3b7dvr0a_qPdZEfHY",
          AppTag: "_3FJnZuxmPA_MjxsF8BQQ5L",
          StoreSaleWidgetShortDesc: "_3AsE5JhqLAiICKUYvZLpap",
          LargeText: "_3FqDALHzNLR5fMMZTeBw8Z",
          TagTitle: "v1i4WK3tk4FpXSJ5wC60U",
          TagBox: "_1lqaDGTzuprpWRYk4_2JrN",
          Tag: "_33yqka47vWurNqhnhLJb_m",
          Categories: "_2hr4JZMbG9l2GKALFD0dO7",
          SaleItemFullCapsuleDisplay: "_2sVvRzH7oPUUIVDDVO0MJj",
          Category: "_2lQNYB6g6C7aiw0GDPe9fq",
          CategoryIcon: "_2RJxWCkjuP3H-i8oLU5W2Q",
          ReviewScores: "_3MxPBWjpjU_Gm8SIgi5g8A",
          StoreSaleBroadcastWidgetRight: "_9VjYX3CYMn2y-wWpAn00Y",
          StoreSalePriceActionWidgetContainer: "_1JuIpzMtS7-xZrnUmEQ4my",
          Action: "_2zssEuiPfY5YdQlnihDfVD",
          Discounted: "_1g0B-RjwkUV0_MDURgy3Bi",
          WishList: "_1djkdp7OAd0mF3a90RKf27",
          StoreSalePriceBox: "_3j4dI1yA7cRfCvK8h406OB",
          SingleLineMode: "_1ZlGJxv-xQaABSvaVvMlNq",
          StoreSaleDiscountedPriceCtn: "_3NhLu7mTdty7JufpSpz6Re",
          StoreSaleNewItem: "_2_KY_e11FV0ftXR2_7TMmP",
          StoreOriginalPrice: "_3fFFsvII7Y2KXNLDk_krOW",
          PrePurchase: "_2f7BMv_bJMTrHmaOF8B3Ws",
          NewItem: "_2xCT1pUf2c9TICHoMcQE0d",
          PurchaseOptionDetails: "_17_ynHC8fq9_LghcLrJYmW",
          InGameHover: "axjdi0dhiB17GHjL5FRCr",
          StoreSalePrepurchaseLabel: "_1Fru-E7WQMr8G_aR2sMg5F",
          SingleLineOriginalPrice: "t7Gt8aeopD7JPlhcNTqGV",
          BaseDiscount: "_3mInDnGL3LlUC7uPs1CfOP",
          StoreSalePriceButton: "_1BejQFnnmkHMi9stswiJzf",
          OuterCapsuleContainer: "_1dKR2IPNQSHs1MAIXBvt_R",
          BottomBarPriceInfo: "_1X3j2g29SBtsrFMgNiKi_Y",
          CapsuleContainer: "_22AcxR1RBDH6i-gjKRHYk0",
          Linked: "_3b7bzOQeDc139QX27AIMtM",
          EventRow: "_1UMFnczt69Ka8nOWKMzKJR",
          BottomCreatorRow: "_1JrUubE3c7FdJsMxYYxbt",
          CreatorLogo: "_3Krfug3wchu0qwGYQbbsHL",
          CreatorName: "Fmi-agZ0W7_4TkZ7CNquC",
          AddToCartButton: "_2iWMRE6knpPZLgHWASy5BH",
          AddToWishlistButton: "_2YfaLBUZmFkJ3NpkieGzS3",
          HeaderCapsuleImageContainer: "_2oW_y7Mm3ihf1XQ0C1VWhx",
          MainCapsuleImageContainer: "_1vpxH37o7mJotC0IoqWbqy",
          HeroCapsuleImageContainer: "vnhlb8EFU45PU6qG2GBDW",
          DiscoveryQueueCtn: "_2uX2GFSEk3nkWxRsaBXaeG",
          VerticalCapsule: "_3sy8XcvOMnFJv1_Edwpzqv",
          ForceLibrarySizing: "_25KI3ndwISqbgBdtNxpujP",
          CapsuleImage: "_2eQ4mkpf4IzUp1e9NnM2Wr",
          LinkCapsuleImage: "_2xO8H8kHMGocbbjupWJ7Nt",
          CapsuleParentInfo: "_2erfWpFrn1tZTPEbq97SuW",
          ParentType: "_3FCPPT5eoSXF0nNcICVdP6",
          Banner: "_2gxv9cF-4n9wq4yxruOTNl",
          Blue: "_2o-5t6bgEJxfbWVSmxT88V",
          EarlyAccessGradient: "_2Hl_ERfCdYklXHAYAqvd4R",
          LinesImg: "_3LecBjgbnwvS6bCFqxs6SC",
          CapsuleDecorators: "_1xNQcxU9_OtQ-_PrMbviS4",
          BundleContentsCtnTransition: "_24KNcWMI5Yvb_AnPAb23Fm",
          Expanding: "_38KIqxQJ2UZxWKjh4XFZrh",
          Expanded: "hPc1lu4wYeTfpyzGPwPIa",
          Collapsing: "_2NmI1RTJL46CD1bmy9p7U7",
          BundleContentsCtn: "_34acuCI4lsvrR8ezmi7K1E",
          BundleContentsTitle: "hhdk89lN3EL3ieRxGPbyl",
          BundleShowButton: "_2Vu78ZkZCgLm-FV4KStixO",
          ShowContentsButton: "-VlK4AN84fDgapWwCDax2",
          ShowContentsSection: "fsPeLo8K4uDXedwKw4_sG",
          BundleContentItem: "_2sdNOCzaF2AIAuenP19tA6",
          StoreSaleWidgetOuterContainer: "_1_P15GG6AKyF_NMX2j4-Mu",
          ContentsCount: "_353LzpA83V-kiAWaKcQAFg",
          PreviewItem: "_2yhQb4aKtskchqwmpCVbMq",
          DeckCompatIcon: "_1Nju8xukRGXgeu2mN0nVjT",
          BundleTag: "_1qR-LifiFC4bCiow5xRIy0",
          PreviewImg: "_1jx70oYOJWzNj7A5gNRxhg",
          DemoLayoutPopup: "_2tmp27YgSoUCJSBJA4t5yt",
          FreeWeekendBar: "_2SCofLY66uBY_jjrTzNjBN",
          FreeWeekendLabel: "_21B6LWEBK8rKCmK8COTVRq",
          RecommendationReason: "_3Q_taCjMHNZqbKEr1-r2GQ",
          LocalizationSpan: "_3bCSmg_cQ3aTa3waFLT6o7",
          CapsuleName: "_31P1R5vTMyJ5RwWAfVoKYG",
          DiscountIconCtn: "_3Qt9S4lxTBuJqoY2PidC5h",
          MaxActionButtonWidth: "_3GOwBXz8cR_9njnfMGlp7b",
          BackgroundAnimation: "_1k6sq680iiVKySIMXNcHkL",
          "ItemFocusAnim-darkerGrey-nocolor": "_34Tp7N_mW2y7TOcBFxCQVo",
          "ItemFocusAnim-darkerGrey": "WQW1YbFeZjtPKckWVFjzB",
          "ItemFocusAnim-darkGreySettings": "_2hTOwEn75PZ0XqJLLH6Yzc",
          "ItemFocusAnim-darkGrey": "_3T33tEqMtzz3ijG8DkMXYZ",
          "ItemFocusAnim-grey": "_1VqQfVz7N0T1g4AHmuCQu8",
          "ItemFocusAnim-translucent-white-10": "jiBNibpWxZkJeyBzbrB5j",
          "ItemFocusAnim-translucent-white-20": "_1y2_IkearpG-2NoiPwZu0U",
          "ItemFocusAnimBorder-darkGrey": "_1LiqE1tXtbXey4AKzgFJfX",
          "ItemFocusAnim-green": "_34pf2FqL7CWP6V9VNzPEIS",
          focusAnimation: "_1wLvhANps-c7yKLact-7v8",
          hoverAnimation: "_2FuCM99jbjgMa0JFZoisSA",
        };
      },
      28285: (K) => {
        K.exports = {
          Dark: "_2UAf_T9P3-2l5Rr-IlNksx",
          Background: "yjs9mmsKYDARPUPSoBFw3",
          Foreground: "JgT6ZW65muFgrXnrRrXyD",
          Light: "_1LgIo8fAGnrgqGzZ7rU_9D",
          Knockout: "_3BGwJlJ63TcWND8KK0xjaH",
          SizeSmall: "_1Zc5j2ll9yRxA_ZKHEYhw2",
          SizeMedium: "_12wgofPV3GgsAWFUJhpSz2",
          SizeLarge: "_3E-9rilOaYgJAzNjrYPRYE",
          ChordSummary: "_2NB_hM-9uJkdXPKC3tdS7-",
        };
      },
      58579: (K) => {
        K.exports = {
          ClientSelectDropdown: "_36ai7Zh_5P9n3Lpg52IdgV",
          ClientListDropdownMenu: "bEY2j4LBFVv4rCwEfxS64",
        };
      },
      37999: (K) => {
        K.exports = {
          Loading: "_24C5lxFpKz_kHyuT-8GJKK",
          LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
          Small: "_2FPxEVbkMdVDAw1TLfl_B5",
          Medium: "_2FfWbZHeiT3_nRXH-pI7av",
          Large: "_30IMocjbXd0leP4E5U2Yrx",
        };
      },
      1990: (K) => {
        K.exports = {
          narrowWidth: "500px",
          GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
          GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
          Active: "_8XjrTFzaSA8ubHvHCu44L",
          Sticky: "_3dlxz6KBJpvmA-qsVAzxs8",
          GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
          GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
          ChecklistMode: "_3blAkLFfSQrJjGklUKOP7e",
          GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
          checklistBox: "_1idkU7IA8dDPOIbsU-dRkJ",
          StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
          VOWarning: "_3LaJynPDFfccGWUEtdltlt",
          StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
          StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
          StatusInfo: "_38gm-PDPbi6lw1-aiH81HR",
          StatusIncomplete: "ZGxYVjsUSjHLRHIWkx4-L",
        };
      },
    },
  ]);
})();
