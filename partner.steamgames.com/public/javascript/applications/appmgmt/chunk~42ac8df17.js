/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [42012],
    {
      55483: (V, Y, t) => {
        "use strict";
        t.d(Y, {
          yT: () => P,
          MR: () => E,
          AB: () => $,
          Rc: () => K,
          Gt: () => Lr,
          ko: () => Vr,
          fy: () => Mr,
          ec: () => G,
          aA: () => o,
          TB: () => y,
          vF: () => xr,
          W$: () => kr,
        });
        var n = t(99412),
          m = t(76559),
          s = t(75233),
          x = t(20194),
          z = t(72604),
          U = t(72609);
        async function w(S) {
          const D = `${U.TS.COMMUNITY_BASE_URL}ogg/${S}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return T(D);
        }
        async function O(S) {
          const D = m.b.InitFromClanID(S),
            b = `${U.TS.COMMUNITY_BASE_URL}gid/${D.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return T(b);
        }
        async function I(S) {
          const D = `${U.TS.COMMUNITY_BASE_URL}groups/${S}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return T(D);
        }
        async function g(S) {
          const D = `${U.TS.COMMUNITY_BASE_URL}games/${S}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return T(D);
        }
        async function T(S) {
          const D = await fetch(S, { method: "GET" });
          if (D.status == 404) return null;
          if (!D.ok) throw new Error(`Server returned ${D.status}`);
          const b = await D.json();
          return b.success != z.R ? null : b;
        }
        function d(S) {
          return ["clantoclaninfo", S];
        }
        function M(S) {
          return ["apptoclanid", S];
        }
        function B(S, D = "group") {
          return ["vanitytoclanid", D, S?.toLocaleLowerCase()];
        }
        function P(S) {
          const D = S?.[0];
          return (
            D == "clantoclaninfo" || D == "apptoclanid" || D == "vanitytoclanid"
          );
        }
        const F = new WeakSet();
        function v(S) {
          if (!F.has(S)) {
            F.add(S);
            for (const D of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              S.setQueryDefaults(D, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const c = new WeakMap();
        function l(S) {
          if (!S) return null;
          let D = c.get(S);
          return (
            D ||
              ((D = {
                ...S,
                clanSteamID: S.clanSteamIDString
                  ? new m.b(S.clanSteamIDString)
                  : m.b.InitFromClanID(S.clanAccountID),
              }),
              c.set(S, D)),
            D
          );
        }
        function e(S) {
          const { msg: D, success: b, ...W } = S;
          return {
            ...W,
            rss_language: S.rss_language ? S.rss_language : n.Bhc,
          };
        }
        function H(S, D) {
          if (!D) return null;
          v(S);
          const b = e(D);
          return (
            S.setQueryData(d(b.clanAccountID), b),
            b.appid && S.setQueryData(M(b.appid), b.clanAccountID),
            b.vanity_url &&
              S.setQueryData(B(b.vanity_url, "group"), b.clanAccountID),
            b
          );
        }
        function o(S, D) {
          for (const b of D) H(S, b);
        }
        function y(S) {
          const D = (0, s.jE)();
          return (0, x.I)(G(S, D));
        }
        function G(S, D) {
          return (
            v(D),
            {
              queryKey: d(S ?? null),
              queryFn: async () => (S ? H(D, await O(S)) : null),
              enabled: S !== void 0,
              select: l,
            }
          );
        }
        function C(S, D) {
          return (
            v(D),
            {
              queryKey: M(S),
              queryFn: async () => H(D, await w(S))?.clanAccountID ?? null,
              enabled: !!S,
            }
          );
        }
        function j(S, D, b = "group") {
          return (
            v(D),
            {
              queryKey: B(S, b),
              queryFn: async () => {
                if (b == "store") {
                  const N = D.getQueryData(B(S, "group"));
                  if (N) return N;
                }
                const W = b == "store" ? await g(S) : await I(S);
                return H(D, W)?.clanAccountID ?? null;
              },
              enabled: !!S,
            }
          );
        }
        function L(S) {
          return S.isPending ? void 0 : (S.data ?? null);
        }
        function dr(S) {
          return y(S.BIsClanAccount() ? S.GetAccountID() : void 0);
        }
        function xr(S) {
          const D = (0, s.jE)(),
            b = (0, x.I)(C(S, D));
          return y(S ? L(b) : void 0);
        }
        function kr(S, D = "group") {
          const b = (0, s.jE)(),
            W = (0, x.I)(j(S, b, D));
          return y(S ? L(W) : void 0);
        }
        function Lr(S, D) {
          if (S) return l(D.getQueryData(d(S))) ?? void 0;
        }
        function Vr(S, D) {
          if (S) return Lr(D.getQueryData(M(S)), D);
        }
        function Mr(S, D, b) {
          if (!S) return;
          const W = b ? [b] : ["store", "group"];
          for (const N of W) {
            const A = Lr(D.getQueryData(B(S, N)), D);
            if (A) return A;
          }
        }
        async function E(S, D) {
          return S ? l(await D.fetchQuery(G(S, D))) : null;
        }
        async function $(S, D) {
          return S ? E(await D.fetchQuery(C(S, D)), D) : null;
        }
        async function K(S, D, b = "group") {
          return S ? E(await D.fetchQuery(j(S, D, b)), D) : null;
        }
      },
      29696: (V, Y, t) => {
        "use strict";
        t.d(Y, { LO: () => O, A5: () => z });
        var n = t(20194),
          m = t(72604),
          s = t(72609);
        async function x(I) {
          let g = { get_appids: !0, l: s.TS.LANGUAGE };
          const T = new URLSearchParams(g).toString(),
            d = `${s.TS.STORE_BASE_URL}curator/${I}/ajaxgetcreatorhomeinfo/?${T}`,
            M = await fetch(d, { method: "GET" });
          if (!M.ok) throw new Error(`Server returned ${M.status}`);
          const B = await M.json();
          return B.success != m.R ? null : B;
        }
        function z(I) {
          return (0, n.I)(U(I));
        }
        function U(I) {
          return {
            queryKey: w(I),
            queryFn: async () => {
              const g = await x(I);
              if (g) {
                const {
                  success: T,
                  err_msg: d,
                  warning: M,
                  warning_msg: B,
                  ...P
                } = g;
                return P;
              }
              return null;
            },
            enabled: !!I,
          };
        }
        function w(I) {
          return ["creatorhomebyaccount", I];
        }
        function O(I, g) {
          if (I.vanity) {
            switch (g) {
              case "publisher":
                return `${s.TS.STORE_BASE_URL}publisher/${I.vanity}/`;
              case "franchise":
                return `${s.TS.STORE_BASE_URL}franchise/${I.vanity}/`;
            }
            return `${s.TS.STORE_BASE_URL}developer/${I.vanity}/`;
          }
          return `${s.TS.STORE_BASE_URL}curator/${I.creator_clan_id}/`;
        }
      },
      90900: (V, Y, t) => {
        "use strict";
        t.d(Y, { J_: () => s, TP: () => T, st: () => M });
        var n = t(79024);
        function m(l) {
          if (l.preferenceControls.isTechnicallyNecessary) return !0;
          const e = GetCurrentCookiePreferences();
          if (!e) return !1;
          switch (e.preference_state) {
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_AllowAll:
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_DefaultAllowAll:
              return !0;
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_RejectAll:
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_DefaultRejectAll:
              return !1;
          }
          return (
            "IsAllowed" in l.preferenceControls &&
            l.preferenceControls.IsAllowed(e)
          );
        }
        const s = {
            name: "cookieSettings",
            options: {
              secure: !0,
              httpOnly: !1,
              path: "/",
              sameSite: "none",
              maxAge: 1e3 * 3600 * 24 * 365,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          x = {
            name: "steamLoginSecure",
            options: { secure: !0, httpOnly: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          z = {
            name: "steamDidLoginRefresh",
            options: {
              secure: !0,
              httpOnly: !0,
              path: "/",
              sameSite: "none",
              maxAge: 5 * 1e3,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          U = {
            name: "sessionid",
            options: { secure: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          w = {
            name: "strResponsiveViewPrefs",
            options: { maxAge: 365 * 24 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          O = {
            name: "mobileClient",
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          I = {
            name: "presentation_mode",
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          g = {
            name: "Steam_Language",
            options: { secure: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          T = {
            name: "shoppingCartGID",
            options: { path: "/", secure: !0, maxAge: 1e3 * 3600 * 24 * 7 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          d = {
            name: "app_impressions",
            options: { path: "/", secure: !0 },
            preferenceControls: {
              isTechnicallyNecessary: !1,
              IsAllowed: (l) =>
                !!l.valve_analytics?.product_impressions_tracking,
            },
          },
          M = {
            name: "steamLoginSpoofSteamID",
            options: { path: "/", secure: !0 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          B = {
            name: "steamCountry",
            options: { secure: !0, httpOnly: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          P = {
            name: "steamCountryUseIPCountry",
            options: { secure: !0, httpOnly: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          F = {
            name: "browserid",
            options: {
              path: "/",
              secure: !0,
              maxAge: 3600 * 24 * 7 * 365,
              sameSite: "none",
            },
            preferenceControls: {
              isTechnicallyNecessary: !1,
              IsAllowed(l) {
                return l.valve_analytics?.product_impressions_tracking ?? !1;
              },
            },
          },
          v = {
            name: "clientHints",
            options: {
              path: "/",
              secure: !0,
              httpOnly: !1,
              maxAge: 3600 * 24 * 7 * 365,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          c = {
            name: "webTradeEligibility",
            options: {
              path: "/",
              secure: !0,
              httpOnly: !0,
              maxAge: 3600 * 24 * 1,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          };
      },
      16114: (V, Y, t) => {
        "use strict";
        t.d(Y, {
          sq: () => C,
          TW: () => g,
          KC: () => c,
          $z: () => M,
          R2: () => L,
        });
        var n = t(84346);
        const m = {};
        (m.arabic = () => t.e(6696).then(t.t.bind(t, 6696, 19))),
          (m.brazilian = () => t.e(58906).then(t.t.bind(t, 58906, 19))),
          (m.bulgarian = () => t.e(53473).then(t.t.bind(t, 53473, 19))),
          (m.czech = () => t.e(83899).then(t.t.bind(t, 83899, 19))),
          (m.danish = () => t.e(84925).then(t.t.bind(t, 84925, 19))),
          (m.dutch = () => t.e(69902).then(t.t.bind(t, 69902, 19))),
          (m.english = () => t.e(80716).then(t.t.bind(t, 80716, 19))),
          (m.finnish = () => t.e(81663).then(t.t.bind(t, 81663, 19))),
          (m.french = () => t.e(48484).then(t.t.bind(t, 48484, 19))),
          (m.german = () => t.e(66810).then(t.t.bind(t, 66810, 19))),
          (m.greek = () => t.e(13744).then(t.t.bind(t, 13744, 19))),
          (m.hungarian = () => t.e(62101).then(t.t.bind(t, 62101, 19))),
          (m.indonesian = () => t.e(68948).then(t.t.bind(t, 68948, 19))),
          (m.italian = () => t.e(2916).then(t.t.bind(t, 2916, 19))),
          (m.japanese = () => t.e(40195).then(t.t.bind(t, 40195, 19))),
          (m.koreana = () => t.e(84259).then(t.t.bind(t, 84259, 19))),
          (m.latam = () => t.e(24475).then(t.t.bind(t, 24475, 19))),
          (m.malay = () => t.e(60580).then(t.t.bind(t, 60580, 19))),
          (m.norwegian = () => t.e(36884).then(t.t.bind(t, 36884, 19))),
          (m.polish = () => t.e(15269).then(t.t.bind(t, 15269, 19))),
          (m.portuguese = () => t.e(96865).then(t.t.bind(t, 96865, 19))),
          (m.romanian = () => t.e(71391).then(t.t.bind(t, 71391, 19))),
          (m.russian = () => t.e(64933).then(t.t.bind(t, 64933, 19))),
          (m.sc_schinese = () => t.e(27503).then(t.t.bind(t, 27503, 19))),
          (m.schinese = () => t.e(44768).then(t.t.bind(t, 44768, 19))),
          (m.spanish = () => t.e(20876).then(t.t.bind(t, 20876, 19))),
          (m.swedish = () => t.e(75181).then(t.t.bind(t, 75181, 19))),
          (m.tchinese = () => t.e(89779).then(t.t.bind(t, 89779, 19))),
          (m.thai = () => t.e(98970).then(t.t.bind(t, 98970, 19))),
          (m.turkish = () => t.e(87996).then(t.t.bind(t, 87996, 19))),
          (m.ukrainian = () => t.e(47306).then(t.t.bind(t, 47306, 19))),
          (m.vietnamese = () => t.e(72539).then(t.t.bind(t, 72539, 19)));
        async function s(E) {
          if (m[E]) return m[E]();
        }
        var x = t(37901);
        const z = (0, x.l)(s);
        var U = t(44983),
          w = ((E) => (
            (E[(E.None = 0)] = "None"),
            (E[(E.Ago = 1)] = "Ago"),
            (E[(E.Remaining = 2)] = "Remaining"),
            E
          ))(w || {});
        function O(E, $) {
          const K = Date.now() / 1e3 - E;
          return I(K, $);
        }
        function I(E, $, K) {
          let S;
          typeof $ == "boolean"
            ? (S = {
                eSuffix: $ ? 0 : 1,
                bForceSingleUnits: K,
                bHighGranularity: !1,
              })
            : (S = {
                eSuffix: 1,
                bForceSingleUnits: !1,
                bHighGranularity: !1,
                ...$,
              });
          let D = "TimeInterval_";
          S.eSuffix == 1
            ? (D = "TimeSince_")
            : S.eSuffix == 2 && (D = "TimeRemaining_");
          let b = (W) => Math.floor(W);
          if (
            (S.bAllowDecimal && (b = (W) => Math.round(W * 10) / 10),
            E >= Seconds.PerYear * 2)
          )
            return PkgLocalization.Localize(
              `#${D}XYears`,
              b(E / Seconds.PerYear),
            );
          if (E >= Seconds.PerYear)
            return (
              (E -= Seconds.PerYear),
              E >= Seconds.PerMonth * 2 && !S.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${D}1YearXMonths`,
                    b(E / Seconds.PerMonth),
                  )
                : PkgLocalization.Localize(`#${D}1Year`)
            );
          if (E >= Seconds.PerMonth * 2)
            return PkgLocalization.Localize(
              `#${D}XMonths`,
              b(E / Seconds.PerMonth),
            );
          if (E >= Seconds.PerWeek * 2)
            return PkgLocalization.Localize(
              `#${D}XWeeks`,
              b(E / Seconds.PerWeek),
            );
          if (E >= Seconds.PerWeek)
            return PkgLocalization.Localize(
              `#${D}1Week`,
              b(E / Seconds.PerWeek),
            );
          if (E >= Seconds.PerDay * 2)
            return PkgLocalization.Localize(
              `#${D}XDays`,
              b(E / Seconds.PerDay),
            );
          if (E >= Seconds.PerDay)
            return (
              (E -= Seconds.PerDay),
              E >= Seconds.PerHour * 2 && !S.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${D}1DayXHours`,
                    b(E / Seconds.PerHour),
                  )
                : PkgLocalization.Localize(`#${D}1Day`)
            );
          if (E >= Seconds.PerHour * 2)
            return PkgLocalization.Localize(
              `#${D}XHours`,
              b(E / Seconds.PerHour),
            );
          if (E >= Seconds.PerHour)
            return (
              (E -= Seconds.PerHour),
              E >= Seconds.PerMinute * 2 && !S.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${D}1HourXMinutes`,
                    b(E / Seconds.PerMinute),
                  )
                : PkgLocalization.Localize(`#${D}1Hour`)
            );
          if (E >= Seconds.PerMinute * 2) {
            const W = Math.floor(E / Seconds.PerMinute),
              N = E % Seconds.PerMinute;
            return !S.bHighGranularity || N == 0
              ? PkgLocalization.Localize(
                  `#${D}XMinutes`,
                  b(E / Seconds.PerMinute),
                )
              : N == 1
                ? PkgLocalization.Localize(`#${D}XMinutes1Second`, W)
                : PkgLocalization.Localize(`#${D}XMinutesXSeconds`, W, N);
          } else if (E >= Seconds.PerMinute) {
            const W = E % Seconds.PerMinute;
            return !S.bHighGranularity || W == 0
              ? PkgLocalization.Localize(`#${D}1Minute`)
              : W == 1
                ? PkgLocalization.Localize(`#${D}1Minute1Second`)
                : PkgLocalization.Localize(`#${D}1MinuteXSeconds`, W);
          } else
            return S.bHighGranularity
              ? E == 1
                ? PkgLocalization.Localize(`#${D}1Second`)
                : PkgLocalization.Localize(`#${D}XSeconds`, E)
              : PkgLocalization.Localize(`#${D}LessThanAMinute`);
        }
        function g(E, $, K) {
          let S;
          $ === void 0 || $ === !0 || $ === !1
            ? (S = {
                weekday: K ? "long" : "short",
                year: $ ? void 0 : "numeric",
              })
            : (S = $);
          let D = new Date(E * 1e3);
          const b = {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
            ...S,
          };
          return D.toLocaleDateString((0, n.J)(), b);
        }
        function T(E, $) {
          let K = new Date(E * 1e3),
            S = new Date($ * 1e3);
          return K.getFullYear() != S.getFullYear() ||
            K.getMonth() != S.getMonth() ||
            K.getDate() != S.getDate()
            ? d(E, $)
            : c(E) + " - " + c($);
        }
        function d(E, $) {
          let K = new Date(E * 1e3),
            S = new Date($ * 1e3);
          const D = new Date();
          if (
            K.getFullYear() != S.getFullYear() ||
            D.getFullYear() == K.getFullYear()
          )
            return `${M(E)} - ${M($)}`;
          const b = { month: "short", day: "numeric" },
            W = K.toLocaleDateString(GetPreferredLocales(), b) + " - ";
          if (K.getMonth() == S.getMonth()) {
            const N = { day: "numeric" };
            return W + S.toLocaleDateString(GetPreferredLocales(), N);
          } else return W + S.toLocaleDateString(GetPreferredLocales(), b);
        }
        function M(E, $) {
          let K = new Date(E * 1e3);
          const S = { year: "numeric", month: "short", day: "numeric", ...$ };
          return K.toLocaleDateString((0, n.J)(), S);
        }
        function B(E, $) {
          const {
              fullmonthname: K = !1,
              bUseRelativeNames: S = !0,
              bIncludeDayName: D = !1,
            } = $ ?? {},
            b = new Date(),
            W = new Date(E * 1e3);
          if (W.getFullYear() != b.getFullYear())
            return M(E, { month: K ? "long" : "short" });
          const N = new Date();
          if ((N.setHours(0, 0, 0, 0), S)) {
            if (W >= N) {
              if ((N.setDate(N.getDate() + 1), W < N))
                return PkgLocalization.Localize("#Time_Today");
              if ((N.setDate(N.getDate() + 1), W < N))
                return PkgLocalization.Localize("#Time_Tomorrow");
            } else if ((N.setDate(N.getDate() - 1), W >= N))
              return PkgLocalization.Localize("#Time_Yesterday");
          }
          const A = { month: K ? "long" : "short", day: "numeric" };
          return (
            D && (A.weekday = "long"),
            W.toLocaleDateString(GetPreferredLocales(), A)
          );
        }
        function P(E) {
          let $ = new Date(E * 1e3);
          return C($);
        }
        function F(E) {
          let $ = new Date(E * 1e3);
          return G($);
        }
        function v(E) {
          const $ = new Date();
          $.setHours(15);
          const K = $.toLocaleTimeString(E, { hour: "numeric" }),
            S = $.toLocaleTimeString(E, { hour: "numeric", hour12: !1 });
          return K == S;
        }
        function c(E, $, K) {
          const S = new Date(E * 1e3),
            D = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
            b = { hour: "numeric", minute: "2-digit" },
            W = (0, n.J)(),
            A = { ...($?.bForce24HourClock || v(W[0]) ? D : b), ...K };
          return S.toLocaleTimeString(W, A);
        }
        function l(E, $, K) {
          const S = new Date(E * 1e3);
          return e(S, !1, !1) + " " + c(E, { bForce24HourClock: $ }) + " " + K;
        }
        function e(E, $ = !1, K = !0) {
          const S = {
            weekday: K ? "long" : "short",
            day: "numeric",
            month: $ ? "long" : "short",
          };
          return E.toLocaleDateString(GetPreferredLocales(), S);
        }
        function H(E) {
          return E.toLocaleDateString(GetPreferredLocales(), {
            weekday: "long",
          });
        }
        function o(E) {
          return E.toLocaleDateString(GetPreferredLocales(), { month: "long" });
        }
        function y(E) {
          return E.toLocaleDateString(GetPreferredLocales(), {
            month: "short",
          });
        }
        function G(E) {
          return E.toLocaleDateString(GetPreferredLocales(), {
            year: "numeric",
          });
        }
        function C(E) {
          return E.toLocaleDateString((0, n.J)(), {
            month: "long",
            year: "numeric",
          });
        }
        function j(E, $) {
          switch (E.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return PkgLocalization.Localize(
                $
                  ? "#Time_QuarterOfYear_Expanded_Q1"
                  : "#Time_QuarterOfYear_Q1",
                E.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return PkgLocalization.Localize(
                $
                  ? "#Time_QuarterOfYear_Expanded_Q2"
                  : "#Time_QuarterOfYear_Q2",
                E.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return PkgLocalization.Localize(
                $
                  ? "#Time_QuarterOfYear_Expanded_Q3"
                  : "#Time_QuarterOfYear_Q3",
                E.getUTCFullYear(),
              );
            default:
              return PkgLocalization.Localize(
                $
                  ? "#Time_QuarterOfYear_Expanded_Q4"
                  : "#Time_QuarterOfYear_Q4",
                E.getUTCFullYear(),
              );
          }
        }
        function L(E) {
          const $ = Math.floor(E / U.Kp.PerYear),
            K = Math.floor(E / U.Kp.PerMonth),
            S = Math.floor((E % U.Kp.PerMonth) / U.Kp.PerDay),
            D = Math.floor((E % U.Kp.PerDay) / U.Kp.PerHour),
            b = Math.floor((E % U.Kp.PerHour) / U.Kp.PerMinute);
          return (
            (E = E % U.Kp.PerMinute),
            $ > 0
              ? z.Localize("#TimeRemaining_MoreThanOneYear")
              : K > 0
                ? z.Localize("#TimeRemaining_MonthsDays", K, S)
                : S > 0
                  ? z.Localize(
                      "#TimeRemaining_DaysHoursMinutes",
                      S,
                      D.toString().padStart(2, "0"),
                      b.toString().padStart(2, "0"),
                    )
                  : D > 0
                    ? z.Localize(
                        "#TimeRemaining_HoursMinutesSeconds",
                        D.toString().padStart(2, "0"),
                        b.toString().padStart(2, "0"),
                        E.toString().padStart(2, "0"),
                      )
                    : z.Localize(
                        "#TimeRemaining_MinutesSeconds",
                        b.toString().padStart(2, "0"),
                        E.toString().padStart(2, "0"),
                      )
          );
        }
        function dr(E, $, K) {
          for (; E.length < $; ) E = K + E;
          return E;
        }
        function xr(E) {
          return (
            (E === void 0 || isNaN(E)) && (E = 0),
            {
              hours: Math.floor(E / 3600),
              minutes: Math.floor((E % 3600) / 60),
              seconds: Math.floor(E % 60),
              fraction: E - Math.floor(E),
            }
          );
        }
        function kr(E, $, K) {
          let S = E < 0;
          E = S ? 0 - E : E;
          const D = xr(E),
            b = D.fraction.toFixed(2).split(".")[1],
            W = $ ?? !0;
          let N = !W || b == "00";
          S &&
            D.hours == 0 &&
            D.minutes == 0 &&
            D.seconds == 0 &&
            N &&
            (S = !1);
          let A = "";
          if (D.hours) {
            const tr = D.hours.toString(),
              ir = dr(D.minutes.toString(), 2, "0"),
              cr = dr(D.seconds.toString(), 2, "0"),
              wr = W
                ? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
                : "#Duration_Abbreviation_HourMinuteSecond";
            A = PkgLocalization.Localize(wr, tr, ir, cr, b);
          } else if (D.minutes) {
            const tr = D.minutes.toString(),
              ir = dr(D.seconds.toString(), 2, "0"),
              cr = W
                ? "#Duration_Abbreviation_MinuteSecondMillisecond"
                : "#Duration_Abbreviation_MinuteSecond";
            A = PkgLocalization.Localize(cr, tr, ir, b);
          } else if (D.seconds) {
            const tr = D.seconds.toString(),
              ir = W
                ? "#Duration_Abbreviation_SecondMillisecond"
                : "#Duration_Abbreviation_Second";
            A = PkgLocalization.Localize(ir, tr, b);
          }
          return (
            S &&
              (K
                ? (A = PkgLocalization.Localize("#Duration_WrittenNegation", A))
                : (A = "-" + A)),
            A
          );
        }
        function Lr(E, $, K) {
          let S = E < 0;
          E = S ? 0 - E : E;
          const D = xr(E),
            b = dr(D.seconds.toString(), 2, "0"),
            W = D.fraction.toFixed(2).split(".")[1],
            N = $ ?? !0;
          let A = !N || W == "00";
          S &&
            D.hours == 0 &&
            D.minutes == 0 &&
            D.seconds == 0 &&
            A &&
            (S = !1);
          let tr = "";
          if (D.hours) {
            const ir = dr(D.minutes.toString(), 2, "0"),
              cr = N
                ? "#Duration_HourMinuteSecondMillisecond"
                : "#Duration_HourMinuteSecond";
            tr = PkgLocalization.Localize(cr, D.hours, ir, b, W);
          } else {
            const ir = D.minutes.toString(),
              cr = N
                ? "#Duration_MinuteSecondMillisecond"
                : "#Duration_MinuteSecond";
            tr = PkgLocalization.Localize(cr, ir, b, W);
          }
          return (
            S &&
              (K
                ? (tr = PkgLocalization.Localize(
                    "#Duration_WrittenNegation",
                    tr,
                  ))
                : (tr = "-" + tr)),
            tr
          );
        }
        function Vr(E) {
          const $ = xr(E),
            K = $.hours * 60 + $.minutes,
            S = $.hours,
            D = Math.floor($.hours / 24),
            b = Math.floor(D / 30);
          return b > 1
            ? PkgLocalization.Localize("#ReadableDuration_Months", b)
            : b === 1
              ? PkgLocalization.Localize("#ReadableDuration_OneMonth")
              : D > 1
                ? PkgLocalization.Localize("#ReadableDuration_Days", D)
                : S > 2
                  ? PkgLocalization.Localize("#ReadableDuration_Hours", S)
                  : K > 2
                    ? PkgLocalization.Localize("#ReadableDuration_Minutes", K)
                    : K > 1
                      ? PkgLocalization.Localize("#ReadableDuration_OneMinute")
                      : PkgLocalization.Localize(
                          "#ReadableDuration_LessThanOneMinute",
                        );
        }
        function Mr(E) {
          if (E >= 120) {
            const K = (Math.round((E / 60) * 10) / 10).toLocaleString(
              GetPreferredLocales(),
              { minimumFractionDigits: 0, maximumFractionDigits: 1 },
            );
            return PkgLocalization.Localize("#Playtime_Hours", K);
          }
          return PkgLocalization.Localize(
            "#Playtime_Minutes",
            E.toLocaleString(GetPreferredLocales()),
          );
        }
      },
      44983: (V, Y, t) => {
        "use strict";
        t.d(Y, { Kp: () => n });
        const n = {
          PerYear: 31536e3,
          PerMonth: 2628e3,
          PerWeek: 604800,
          PerDay: 86400,
          PerHour: 3600,
          PerMinute: 60,
        };
        function m(d, M) {
          return (
            d.getFullYear() == M.getFullYear() &&
            d.getMonth() == M.getMonth() &&
            d.getDate() == M.getDate()
          );
        }
        function s(d, M) {
          let B = new Date(d);
          return B.setDate(B.getDate() - 1), m(B, M);
        }
        function x(d, M) {
          return d.getFullYear() == M.getFullYear();
        }
        function z(d) {
          return new Date(
            d.getFullYear(),
            d.getMonth(),
            d.getDate(),
            d.getHours(),
            0,
            0,
            0,
          );
        }
        function U(d) {
          return new Date(
            d.getFullYear(),
            d.getMonth(),
            d.getDate(),
            0,
            0,
            0,
            0,
          );
        }
        function w(d) {
          return new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0);
        }
        function O(d) {
          return new Promise((M) => setTimeout(M, d));
        }
        function I() {
          return Math.floor(Date.now() / 1e3);
        }
        function g(d) {
          return Math.floor(d.getTime() / 1e3);
        }
        function T(d) {
          const M = Math.round(d / 1e3),
            B = Math.floor(M % 60),
            P = Math.floor((M / 60) % 60),
            F = Math.floor(M / 3600);
          let v = !1,
            c = "";
          return (
            F > 0 && ((c += F + ":"), (v = !0)),
            (c += v && P < 10 ? "0" + P + ":" : P + ":"),
            (c += B < 10 ? "0" + B : B),
            c
          );
        }
      },
      1e3: (V, Y, t) => {
        "use strict";
        t.d(Y, { do: () => Yr, of: () => Kr });
        var n = t(7850),
          m = t(55483),
          s = t(24660),
          x = t(64868),
          z = t(72609),
          U = t(89926),
          w = t(72865),
          O = t(25294),
          I = t(20194),
          g = t(75233),
          T = t(68312),
          d = t(98609),
          M = t(20125);
        async function B(X, R) {
          const er = (0, M.Am)(d.TS.STORE_BASE_URL, R, d.iA.country_code);
          return (await (await fetch(er)).json()).rgFollowedApps || [];
        }
        function P() {
          const X = (0, T.KV)(),
            R = d.iA.accountid;
          return (0, I.I)(F(X, R));
        }
        function F(X, R) {
          return {
            queryKey: l(R),
            queryFn: async () => {
              if (!R) return new Set();
              const er = await B(X, R);
              return new Set(er);
            },
            staleTime: 600 * 1e3,
          };
        }
        function v(X) {
          const { data: R } = P();
          return R === void 0 || X == null ? void 0 : R.has(X);
        }
        function c() {
          const X = (0, g.jE)(),
            R = d.iA.accountid;
          return (er, gr) => {
            X.setQueryData(l(R), (rr) => {
              if (!rr) return;
              const Br = new Set(rr);
              if (gr) for (const mr of gr) Br.delete(mr);
              if (er) for (const mr of er) Br.add(mr);
              return Br;
            });
          };
        }
        function l(X) {
          return ["AccountFollowApps", X ?? 0];
        }
        var e = t(51614),
          H = t(67705);
        function o(X, R, er) {
          const gr = c(),
            rr = d.iA.accountid;
          return (0, e.n)({
            mutationKey: ["useUpdateAppFollow", X, rr, R],
            mutationFn: async () => {
              if (X == null) return;
              const Br = d.TS.STORE_BASE_URL + "explore/followgame",
                mr = new FormData();
              mr.append("appid", "" + X),
                mr.append("sessionid", (0, H.KC)()),
                R || mr.append("unfollow", "1"),
                er && mr.append("snr", er);
              const yr = await fetch(Br, {
                method: "POST",
                body: mr,
                credentials: "include",
              });
              if (!yr.ok)
                throw new Error(
                  `Follow App ${R ? "add" : "remove"} of appid ${X} failed (${yr.status})`,
                );
            },
            onMutate: () => {
              X != null && gr(R ? [X] : void 0, R ? void 0 : [X]);
            },
            onError: () => {
              X != null && gr(R ? void 0 : [X], R ? [X] : void 0);
            },
            onSuccess: () => {
              (0, M.WZ)();
            },
          });
        }
        var y = t(10134),
          G = t(32093);
        async function C(X, R) {
          const er = (0, M.Am)(d.TS.STORE_BASE_URL, R, d.iA.country_code),
            rr = await (await fetch(er)).json(),
            Br = new Set();
          rr.rgCreatorsIgnored?.forEach((nr) => Br.add(nr)),
            rr.rgCreatorsFollowed?.forEach((nr) => Br.add(nr));
          const mr = new Set();
          return (
            rr.rgCreatorsIgnored?.forEach((nr) => mr.add(nr)),
            [
              ...(rr.rgCuratorsIgnored ?? []),
              ...(rr.rgCurators
                ? Object.values(rr.rgCurators ?? {}).map((nr) => nr.clanid)
                : []),
            ].map((nr) => {
              const Ur = mr.has(nr);
              return {
                clanid: nr,
                ignored: Ur,
                followed: !Ur,
                is_creator: Br.has(nr),
              };
            })
          );
        }
        function j() {
          const X = (0, T.KV)(),
            R = z.iA.accountid;
          return (0, I.I)(L(X, R));
        }
        function L(X, R) {
          return {
            queryKey: $(R),
            queryFn: async () => {
              const er = new Map();
              if (R)
                try {
                  (await C(X, R)).forEach((rr) => er.set(rr.clanid, rr));
                } catch (gr) {
                  console.error("GetCuratorAffinityQuery", gr);
                }
              return er;
            },
            enabled: !!R,
          };
        }
        function dr(X) {
          const { data: R } = j();
          return R === void 0 || X == null ? void 0 : !!R.get(X)?.followed;
        }
        function xr(X) {
          const { data: R } = j();
          return R === void 0 || X == null ? void 0 : !!R.get(X)?.ignored;
        }
        function kr(X) {
          const { data: R } = j();
          if (R === void 0 || X == null || !R.has(X)) return;
          const er = R.get(X);
          return !!(er.followed && er.is_creator);
        }
        function Lr(X) {
          const { data: R } = j();
          if (R === void 0 || X == null || !R.has(X)) return;
          const er = R.get(X);
          return !!(er.ignored && er.is_creator);
        }
        function Vr() {
          return z.TS.EREALM != G.TU.k_ESteamRealmChina;
        }
        function Mr() {
          return Config.EREALM != ESteamRealm.k_ESteamRealmChina;
        }
        function E() {
          const X = (0, g.jE)(),
            R = z.iA.accountid;
          return (er, gr, rr, Br) => {
            X.setQueryData($(R), (mr) => {
              if (!mr) return;
              const yr = new Map(mr);
              return (
                er?.forEach((sr) => {
                  yr.has(sr.clanAccountID)
                    ? (yr.get(sr.clanAccountID).followed = !0)
                    : yr.set(sr.clanAccountID, {
                        clanid: sr.clanAccountID,
                        followed: !0,
                        ignored: !1,
                        is_creator: !1,
                      });
                }),
                gr?.forEach((sr) => {
                  yr.has(sr.clanAccountID)
                    ? (yr.get(sr.clanAccountID).ignored = !0)
                    : yr.set(sr.clanAccountID, {
                        clanid: sr.clanAccountID,
                        followed: !1,
                        ignored: !0,
                        is_creator: !1,
                      });
                }),
                rr?.forEach((sr) => yr.delete(sr.clanAccountID)),
                Br?.forEach((sr) => {
                  let nr = yr.get(sr.clanAccountID);
                  nr && (nr.is_creator = !0);
                }),
                yr
              );
            });
          };
        }
        function $(X) {
          return ["CuratorAffinityQueryKey", X ?? 0];
        }
        var K = ((X) => (
          (X[(X.k_ECuratorFollow = 1)] = "k_ECuratorFollow"),
          (X[(X.k_ECuratorUnfollow = 2)] = "k_ECuratorUnfollow"),
          (X[(X.k_ECuratorIgnore = 3)] = "k_ECuratorIgnore"),
          (X[(X.k_ECuratorUnignore = 4)] = "k_ECuratorUnignore"),
          X
        ))(K || {});
        function S(X, R) {
          const er = E(),
            gr = d.iA.accountid;
          return (0, e.n)({
            mutationKey: ["useUpdateCuratorAffinity", X, gr, R],
            mutationFn: async () => {
              if (X == null) return !1;
              const rr = R == K.k_ECuratorFollow || R == K.k_ECuratorUnfollow,
                Br = R == K.k_ECuratorFollow || R == K.k_ECuratorIgnore,
                mr = `${d.TS.STORE_BASE_URL}curators/${rr ? "ajaxfollow/" : "ajaxignore/"}`,
                yr = new FormData();
              yr.append("clanid", "" + X),
                yr.append("sessionid", (0, H.KC)()),
                yr.append(rr ? "follow" : "ignore", Br ? "1" : "0");
              const sr = await fetch(mr, {
                  method: "POST",
                  body: yr,
                  credentials: "include",
                }),
                nr = await sr.json();
              if (!sr.ok)
                throw new Error(
                  `Curator Affinity: ${rr ? "Follow" : "Ignore"} Currator ${Br ? "add" : "remove"} failed (${sr.status} / ${nr.msg})`,
                );
              return nr.is_creator;
            },
            onMutate: () => {
              if (X != null) {
                const rr =
                  R == K.k_ECuratorUnfollow || R == K.k_ECuratorUnignore;
                er(
                  R == K.k_ECuratorFollow ? [{ clanAccountID: X }] : void 0,
                  R == K.k_ECuratorIgnore ? [{ clanAccountID: X }] : void 0,
                  rr ? [{ clanAccountID: X }] : void 0,
                );
              }
            },
            onError: (rr) => {
              if (X != null) {
                const Br = R == K.k_ECuratorFollow || R == K.k_ECuratorIgnore;
                er(
                  R == K.k_ECuratorUnfollow ? [{ clanAccountID: X }] : void 0,
                  R == K.k_ECuratorUnignore ? [{ clanAccountID: X }] : void 0,
                  Br ? [{ clanAccountID: X }] : void 0,
                  rr ? [{ clanAccountID: X, is_creator: !0 }] : void 0,
                );
              }
            },
            onSuccess: (rr) => {
              rr &&
                X &&
                er(void 0, void 0, void 0, [
                  { clanAccountID: X, is_creator: !0 },
                ]),
                (0, M.WZ)();
            },
          });
        }
        var D = t(90626),
          b = t(85705),
          W = t(36118),
          N = t(36707),
          A = t(18210),
          tr = t(2801),
          ir = t(71421),
          cr = t(99371),
          wr = t.n(cr),
          Or = t(85385),
          Rr = t(95695),
          Wt = t.n(Rr);
        const Zr = (X) => {
          const {
              className: R,
              bIgnored: er,
              bApplyingFollowing: gr,
              bFollowing: rr,
              onFollowClick: Br,
              followType: mr,
            } = X,
            { elDialogElement: yr, fnShowLogonDialog: sr } = (0, U.l)();
          if (!Vr()) return null;
          let nr = null;
          switch (mr) {
            case "app":
              nr = (0, A.we)("#text_store_follow_desc");
              break;
            case "creatorhome":
              nr = (0, A.we)("#CreatorHome_Follow_tooltip");
              break;
            case "steamcurator":
              nr = (0, A.we)("#steam_curator_follow_ttip");
              break;
            case "group":
              nr = (0, A.we)("#steam_group_follow_ttip");
          }
          return nr
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(ir.Gq, {
                    toolTipContent: !er && !rr ? nr : void 0,
                    children: (0, n.jsxs)(s.ml, {
                      className: (0, N.A)(
                        Wt().Button,
                        wr().FollowButton,
                        "FollowButton",
                        R,
                        rr ? "Followed" : "",
                      ),
                      onClick: () => {
                        z.iA.logged_in ? Br() : sr();
                      },
                      children: [
                        gr && (0, n.jsx)(b.k, { size: 15 }),
                        !gr && (rr || er) && (0, n.jsx)(W.Jlk, {}),
                        (0, n.jsx)("div", {
                          className: (0, N.A)(
                            wr().FollowBtnText,
                            "FollowBtnText",
                          ),
                          children:
                            !gr &&
                            (rr
                              ? (0, A.we)("#Button_Followed")
                              : er
                                ? (0, A.we)("#Button_Ignored")
                                : (0, A.we)("#Button_Follow")),
                        }),
                      ],
                    }),
                  }),
                  yr,
                ],
              })
            : (console.error("CommonFollowButton unexpected type", mr), null);
        };
        function Kr(X) {
          const {
              followType: R,
              fnSuccessCallback: er,
              clanAccountID: gr,
              className: rr,
            } = X,
            [Br, mr] = D.useState(!1),
            { data: yr } = (0, m.TB)(R ? void 0 : gr),
            sr = dr(gr),
            nr = xr(gr),
            { mutateAsync: Ur } = S(
              gr,
              sr ? K.k_ECuratorUnfollow : K.k_ECuratorFollow,
            ),
            [$r, Gr, Jr] = (0, x.uD)(),
            qr = D.useCallback(async () => {
              sr != null && (mr(!0), await Ur(), mr(!1), er?.(sr));
            }, [sr, er, Ur]);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(Zr, {
                className: rr,
                bIgnored: !!nr,
                bFollowing: !!sr,
                bApplyingFollowing: Br,
                onFollowClick: () => {
                  z.iA.is_limited ? Gr() : qr();
                },
                followType:
                  R ?? (yr?.is_creator_home ? "creatorhome" : "steamcurator"),
              }),
              (0, n.jsx)(tr.EN, {
                active: $r,
                children: (0, n.jsx)(Or.g, { closeModal: Jr }),
              }),
            ],
          });
        }
        function Yr(X) {
          const { appid: R, className: er } = X,
            [gr, rr] = D.useState(!1),
            Br = v(R),
            mr = (0, y.BD)(R),
            yr = (0, w.n9)(),
            sr = O.A.GetSNRLinkParam(yr),
            { mutateAsync: nr } = o(R, !Br, sr),
            Ur = D.useCallback(async () => {
              rr(!0), await nr(), rr(!1);
            }, [nr]);
          return (0, n.jsx)(Zr, {
            className: er,
            bIgnored: !!mr,
            bFollowing: !!Br,
            bApplyingFollowing: gr,
            onFollowClick: Ur,
            followType: "app",
          });
        }
      },
      85385: (V, Y, t) => {
        "use strict";
        t.d(Y, { g: () => z });
        var n = t(7850),
          m = t(2801),
          s = t(18210),
          x = t(72609);
        const z = (U) => {
          let w = x.TS.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
          return (0, n.jsx)(m.o0, {
            strTitle: (0, s.we)("#Informational_Message"),
            onCancel: U.closeModal,
            onOK: U.closeModal,
            bAlertDialog: !0,
            children: (0, n.jsx)("div", {
              children: (0, s.PP)(
                U.strTokenOverride || "#User_LimitedAccount",
                (0, n.jsx)("a", {
                  href: w,
                  target: x.TS.IN_CLIENT ? void 0 : "_blank",
                  rel: "noopener noreferrer",
                  children: (0, s.we)("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        };
      },
      83764: (V, Y, t) => {
        "use strict";
        t.d(Y, {
          $YD: () => ta,
          BGM: () => ie,
          BWK: () => Ee,
          Buq: () => xt,
          CSO: () => Gt,
          CYA: () => oa,
          DHU: () => ae,
          EEh: () => Yi,
          Ftl: () => Te,
          FzB: () => or,
          G1H: () => rr,
          Gkz: () => m,
          Gxx: () => ei,
          HuG: () => ft,
          IEJ: () => s,
          IbE: () => sr,
          Izv: () => Nt,
          J1r: () => Yt,
          JEe: () => Vi,
          Jtk: () => he,
          Jzd: () => I,
          KCN: () => br,
          KoH: () => _i,
          LGs: () => er,
          LqT: () => Kr,
          MNG: () => j,
          Mhp: () => ye,
          MnB: () => $,
          PYD: () => Vt,
          PoK: () => Xr,
          QA9: () => $i,
          QBr: () => M,
          R$d: () => Ut,
          R1B: () => sa,
          RW$: () => aa,
          RsL: () => ca,
          Sv2: () => Vr,
          UEV: () => et,
          UfY: () => Ft,
          Vg1: () => tr,
          VmN: () => me,
          Vov: () => kr,
          W5v: () => ra,
          Wo$: () => Bt,
          Wq7: () => Ci,
          X$z: () => Mr,
          Xkc: () => x,
          Ywc: () => ni,
          ZBT: () => v,
          ZUO: () => _r,
          a5M: () => Xi,
          aNN: () => Nr,
          aWw: () => ne,
          bPv: () => pe,
          btm: () => Re,
          cNr: () => ee,
          cTj: () => yt,
          ceg: () => K,
          dBS: () => fe,
          dWZ: () => U,
          dm2: () => ea,
          dpF: () => D,
          dxW: () => Ri,
          eQ$: () => l,
          equ: () => N,
          f_e: () => _e,
          gEw: () => Q,
          gGw: () => e,
          hSB: () => be,
          hwI: () => We,
          iZ9: () => Ai,
          jXd: () => na,
          jx3: () => Ae,
          jzL: () => J,
          kpV: () => ut,
          lXI: () => Ji,
          mG_: () => P,
          mYY: () => Be,
          mvf: () => cr,
          nL9: () => d,
          nNq: () => qi,
          nPW: () => Qi,
          ng1: () => h,
          nuP: () => z,
          qhO: () => kt,
          rAU: () => Gi,
          rNe: () => pi,
          t_B: () => Xt,
          u7l: () => Ve,
          uZq: () => H,
          ubQ: () => dr,
          vk_: () => Zi,
          vx7: () => ia,
          wz4: () => la,
          yUQ: () => R,
          z3Q: () => w,
          zah: () => De,
          zwR: () => Rr,
        });
        const n = 492,
          m = 19,
          s = 21,
          x = 597,
          z = 9,
          U = 599,
          w = 122,
          O = 493,
          I = 113,
          g = 4182,
          T = 4667,
          d = 701,
          M = 128,
          B = 4345,
          P = 699,
          F = 1756,
          v = 6650,
          c = 4166,
          l = 3871,
          e = 12095,
          H = 1664,
          o = 3859,
          y = 1742,
          G = 4026,
          C = 4085,
          j = 1684,
          L = 21978,
          dr = 1667,
          xr = 4136,
          kr = 3942,
          Lr = 3964,
          Vr = 1774,
          Mr = 1695,
          E = 7208,
          $ = 3839,
          K = 1625,
          S = 87,
          D = 1685,
          b = 5350,
          W = 4004,
          N = 1662,
          A = 84,
          tr = 1663,
          ir = 1677,
          cr = 1773,
          wr = 1719,
          Or = 3810,
          Rr = 3834,
          Wt = 3843,
          Zr = 4726,
          Kr = 3799,
          Yr = 4711,
          X = 1693,
          R = 1654,
          er = 1698,
          gr = 7481,
          rr = 1721,
          Br = 1723,
          mr = 1697,
          yr = 4305,
          sr = 1755,
          nr = 1734,
          Ur = 1036,
          $r = 1659,
          Gr = 872,
          Jr = 10397,
          qr = 7368,
          Cr = 1708,
          Hr = 4342,
          rt = 1027,
          tt = 3968,
          Xr = 5716,
          et = 4175,
          nt = 4234,
          it = 8013,
          at = 1643,
          _r = 3978,
          st = 4255,
          J = 12472,
          Q = 10695,
          q = 3841,
          or = 4106,
          br = 4231,
          Tr = 3798,
          vr = 6426,
          Nr = 1716,
          ht = 1678,
          Nt = 1702,
          Ft = 5900,
          Zt = 784,
          Ut = 1741,
          $t = 3987,
          Pt = 4791,
          ie = 1676,
          ue = 1621,
          de = 3878,
          ae = 3959,
          yt = 4885,
          Gt = 1775,
          se = 4747,
          ne = 1738,
          me = 1687,
          pt = 1646,
          oe = 4094,
          fe = 4604,
          Yt = 4434,
          Jt = 1743,
          Xt = 9551,
          kt = 3835,
          Se = 5125,
          Lt = 3916,
          Oe = 3814,
          ye = 1645,
          Te = 1720,
          Ue = 4190,
          ot = 5411,
          ct = 6971,
          Me = 4947,
          Pe = 4295,
          Ie = 4840,
          Fe = 1669,
          Ee = 4172,
          ke = 4252,
          Ne = 4195,
          je = 7332,
          le = 4325,
          ge = 1710,
          Le = 8945,
          Ze = 4057,
          ce = 4637,
          At = 5851,
          De = 1666,
          Ke = 5923,
          k = 4242,
          r = 4168,
          a = 4150,
          h = 4115,
          ur = 1445,
          pr = 1754,
          Fr = 5752,
          lt = 5711,
          jr = 1644,
          zr = 4695,
          fr = 4158,
          Ar = 13782,
          xt = 1628,
          It = 14139,
          Kt = 3965,
          He = 4064,
          $e = 6815,
          Vt = 4486,
          ni = 5395,
          Pi = 1759,
          pe = 4328,
          oi = 7948,
          Ye = 13906,
          Je = 11014,
          Xe = 1673,
          li = 4758,
          we = 1770,
          be = 5613,
          Qt = 31275,
          We = 4191,
          Ii = 4036,
          Sr = 6378,
          _ = 5363,
          u = 15045,
          Mt = 4562,
          wt = 4236,
          Rt = 6691,
          bt = 11123,
          ut = 44868,
          vt = 5547,
          dt = 8122,
          zt = 5186,
          St = 4161,
          mt = 4400,
          ft = 6730,
          Ot = 4975,
          Tt = 4364,
          gt = 7743,
          qt = 5030,
          Bt = 6129,
          _t = 9541,
          Et = 4598,
          jt = 1718,
          Ct = 1777,
          re = 7432,
          Dt = 809,
          te = 7107,
          ve = 19995,
          Ae = 1665,
          ci = 10816,
          Ve = 560542,
          ui = 4736,
          Re = 5154,
          Ge = 16598,
          di = 7250,
          qe = 1752,
          mi = 1616,
          he = 17305,
          _e = 21725,
          Be = 3813,
          xe = 5794,
          Fi = 4684,
          fi = 25085,
          ki = 1670,
          Ni = 5348,
          Li = 5708,
          Ki = 1714,
          gi = 4821,
          Bi = 176981,
          Ht = 3854,
          yi = 13276,
          Mi = 5055,
          Ce = 4046,
          wi = 1681,
          bi = 1688,
          vi = 1732,
          zi = 4508,
          Si = 12057,
          ri = 5160,
          Oi = 29482,
          Ti = 8666,
          ti = 16689,
          Ei = 4608,
          ee = 31579,
          ji = 5179,
          ei = 4474,
          Di = 1671,
          Wi = 1751,
          hi = 5502,
          ze = 3955,
          xi = 9271,
          Z = 10808,
          i = 5608,
          f = 1717,
          p = 6052,
          ar = 5300,
          lr = 1647,
          Dr = 5765,
          Pr = 8075,
          Wr = 97070,
          Ir = 4878,
          hr = 15954,
          Er = 1651,
          Qr = 4145,
          Ui = 6910,
          Qe = 22602,
          ii = 6869,
          ai = 5673,
          Hi = 7569,
          si = 6276,
          ua = 150626,
          da = 9564,
          ma = 11333,
          fa = 3952,
          ga = 30358,
          Ba = 16094,
          ya = 8093,
          Ma = 5796,
          wa = 10679,
          ba = 5390,
          va = 1254552,
          za = 15277,
          Sa = 17894,
          Oa = 1680,
          Ta = 1637,
          Ea = 507423,
          ja = 4559,
          Da = 4155,
          Wa = 9157,
          ha = 4202,
          xa = 6915,
          Ua = 12686,
          Qi = 1254546,
          Pa = 5382,
          Ia = 15564,
          Zi = 18594,
          Fa = 4777,
          ka = 3796,
          Na = 6625,
          La = 5372,
          Ka = 8369,
          Ha = 5432,
          Qa = 7423,
          Za = 24003,
          $a = 5981,
          pa = 4845,
          Ya = 5230,
          Ja = 198631,
          Xa = 776177,
          Aa = 180368,
          Va = 7926,
          Ra = 7622,
          Ga = 8253,
          qa = 9592,
          _a = 17770,
          Ca = 6621,
          rs = 6041,
          ts = 4835,
          es = 13577,
          is = 4184,
          as = 6310,
          ss = 6702,
          ns = 16250,
          os = 42152,
          ls = 1674,
          cs = 56690,
          us = 9204,
          ds = 6948,
          ms = 17015,
          fs = 21006,
          gs = 1730,
          $i = 7038,
          Bs = 5407,
          pi = 1746,
          ys = 14906,
          Ms = 4137,
          ws = 603297,
          bs = 13070,
          vs = 123332,
          zs = 198913,
          Ss = 22955,
          Os = 19780,
          Ts = 47827,
          Yi = 5727,
          Es = 255534,
          js = 7328,
          Ds = 5914,
          Ws = 19568,
          hs = 4852,
          xs = 9803,
          Us = 324176,
          Ps = 17337,
          Is = 27758,
          Fs = 1753,
          ks = 15868,
          Ns = 71389,
          Ls = 10383,
          Ks = 96359,
          Hs = 252854,
          Qs = 856791,
          Zs = 28444,
          $s = 745697,
          ps = 7309,
          Ys = 129761,
          Js = 620519,
          Xs = 353880,
          As = 1084988,
          Ji = 791774,
          Vs = 1100689,
          Xi = 5652,
          Ai = 615955,
          Vi = 4102,
          Rs = 10437,
          Ri = 3877,
          Gi = 5537,
          Gs = 6506,
          qi = 5379,
          _i = 10235,
          qs = 3920,
          Ci = 220585,
          _s = 1100686,
          ra = 87918,
          ta = 1100687,
          ea = 26921,
          ia = 1100688,
          Cs = 12190,
          rn = 13382,
          tn = 3993,
          en = 11104,
          an = 4994,
          sn = 32322,
          nn = 17389,
          on = 42804,
          ln = 454187,
          aa = 9130,
          cn = 916648,
          un = 1023537,
          dn = 33572,
          mn = 158638,
          fn = 6054,
          gn = 4535,
          sa = 91114,
          na = 7178,
          Bn = 11634,
          oa = 723991,
          yn = 1320952,
          la = 1239876,
          ca = 23491,
          Mn = 889937,
          wn = 25959,
          bn = 760247,
          vn = 37376,
          zn = 1776,
          Sn = 10617,
          On = 46348,
          Tn = 20486,
          En = 1352486,
          jn = 9626,
          Dn = 52406,
          Wn = 6835,
          hn = 21635,
          xn = 97376,
          Un = 552282,
          Pn = 3934,
          In = 3954,
          Fn = 4162,
          kn = 4291,
          Nn = 4520,
          Ln = 5941,
          Kn = 6214,
          Hn = 7108,
          Qn = 7556,
          Zn = 7702,
          $n = 11095,
          pn = 14720,
          Yn = 35079,
          Jn = 37799,
          Xn = 40500,
          An = 42089,
          Vn = 42329,
          Rn = 49213,
          Gn = 61357,
          qn = 117648,
          _n = 189941,
          Cn = 323922,
          ro = 337964,
          to = 769306,
          eo = 847164,
          io = 1091588,
          ao = 1199779,
          so = 1220528;
      },
      79024: (V, Y, t) => {
        "use strict";
        t.d(Y, { T4: () => G, CY: () => n, ie: () => m });
        var n = {};
        t.r(n),
          t.d(n, {
            PK: () => O,
            UI: () => g,
            __: () => w,
            _H: () => T,
            rE: () => I,
          });
        var m = {};
        t.r(m), t.d(m, { CL: () => d, mO: () => B });
        var s = t(80613),
          x = t.n(s),
          z = t(75245),
          U = t(35038);
        const w = 0,
          O = 1,
          I = 2,
          g = 3,
          T = 4,
          d = 0,
          M = 1,
          B = 1;
        function P(C) {
          return "unknown EPrivacyCookiePreferenceState ( " + C + " )";
        }
        function F(C) {
          return "unknown EPrivacyCookiePreferencesVersion ( " + C + " )";
        }
        class v extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(j = null) {
            super(),
              v.prototype.version || z.Sg(v.M()),
              s.Message.initialize(this, j, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    version: { n: 1, br: z.qM.readEnum, bw: z.gp.writeEnum },
                    preference_state: {
                      n: 2,
                      br: z.qM.readEnum,
                      bw: z.gp.writeEnum,
                    },
                    content_customization: { n: 3, c },
                    valve_analytics: { n: 4, c: l },
                    third_party_analytics: { n: 5, c: e },
                    third_party_content: { n: 6, c: H },
                    utm_enabled: {
                      n: 7,
                      d: !0,
                      br: z.qM.readBool,
                      bw: z.gp.writeBool,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = z.w0(v.M())), v.sm_mbf;
          }
          toObject(j = !1) {
            return v.toObject(j, this);
          }
          static toObject(j, L) {
            return z.BT(v.M(), j, L);
          }
          static fromObject(j) {
            return z.Uq(v.M(), j);
          }
          static deserializeBinary(j) {
            let L = new (x().BinaryReader)(j),
              dr = new v();
            return v.deserializeBinaryFromReader(dr, L);
          }
          static deserializeBinaryFromReader(j, L) {
            return z.zj(v.MBF(), j, L);
          }
          serializeBinary() {
            var j = new (x().BinaryWriter)();
            return v.serializeBinaryToWriter(this, j), j.getResultBuffer();
          }
          static serializeBinaryToWriter(j, L) {
            z.i0(v.M(), j, L);
          }
          serializeBase64String() {
            var j = new (x().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, j), j.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences";
          }
        }
        class c extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(j = null) {
            super(),
              c.prototype.recentapps || z.Sg(c.M()),
              s.Message.initialize(this, j, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    recentapps: { n: 1, br: z.qM.readBool, bw: z.gp.writeBool },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = z.w0(c.M())), c.sm_mbf;
          }
          toObject(j = !1) {
            return c.toObject(j, this);
          }
          static toObject(j, L) {
            return z.BT(c.M(), j, L);
          }
          static fromObject(j) {
            return z.Uq(c.M(), j);
          }
          static deserializeBinary(j) {
            let L = new (x().BinaryReader)(j),
              dr = new c();
            return c.deserializeBinaryFromReader(dr, L);
          }
          static deserializeBinaryFromReader(j, L) {
            return z.zj(c.MBF(), j, L);
          }
          serializeBinary() {
            var j = new (x().BinaryWriter)();
            return c.serializeBinaryToWriter(this, j), j.getResultBuffer();
          }
          static serializeBinaryToWriter(j, L) {
            z.i0(c.M(), j, L);
          }
          serializeBase64String() {
            var j = new (x().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, j), j.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ContentCustomization";
          }
        }
        class l extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(j = null) {
            super(),
              l.prototype.product_impressions_tracking || z.Sg(l.M()),
              s.Message.initialize(this, j, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    product_impressions_tracking: {
                      n: 1,
                      br: z.qM.readBool,
                      bw: z.gp.writeBool,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = z.w0(l.M())), l.sm_mbf;
          }
          toObject(j = !1) {
            return l.toObject(j, this);
          }
          static toObject(j, L) {
            return z.BT(l.M(), j, L);
          }
          static fromObject(j) {
            return z.Uq(l.M(), j);
          }
          static deserializeBinary(j) {
            let L = new (x().BinaryReader)(j),
              dr = new l();
            return l.deserializeBinaryFromReader(dr, L);
          }
          static deserializeBinaryFromReader(j, L) {
            return z.zj(l.MBF(), j, L);
          }
          serializeBinary() {
            var j = new (x().BinaryWriter)();
            return l.serializeBinaryToWriter(this, j), j.getResultBuffer();
          }
          static serializeBinaryToWriter(j, L) {
            z.i0(l.M(), j, L);
          }
          serializeBase64String() {
            var j = new (x().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, j), j.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ValveAnalytics";
          }
        }
        class e extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(j = null) {
            super(),
              e.prototype.google_analytics || z.Sg(e.M()),
              s.Message.initialize(this, j, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    google_analytics: {
                      n: 1,
                      br: z.qM.readBool,
                      bw: z.gp.writeBool,
                    },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = z.w0(e.M())), e.sm_mbf;
          }
          toObject(j = !1) {
            return e.toObject(j, this);
          }
          static toObject(j, L) {
            return z.BT(e.M(), j, L);
          }
          static fromObject(j) {
            return z.Uq(e.M(), j);
          }
          static deserializeBinary(j) {
            let L = new (x().BinaryReader)(j),
              dr = new e();
            return e.deserializeBinaryFromReader(dr, L);
          }
          static deserializeBinaryFromReader(j, L) {
            return z.zj(e.MBF(), j, L);
          }
          serializeBinary() {
            var j = new (x().BinaryWriter)();
            return e.serializeBinaryToWriter(this, j), j.getResultBuffer();
          }
          static serializeBinaryToWriter(j, L) {
            z.i0(e.M(), j, L);
          }
          serializeBase64String() {
            var j = new (x().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, j), j.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
          }
        }
        class H extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(j = null) {
            super(),
              H.prototype.youtube || z.Sg(H.M()),
              s.Message.initialize(this, j, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    youtube: { n: 1, br: z.qM.readBool, bw: z.gp.writeBool },
                    vimeo: { n: 2, br: z.qM.readBool, bw: z.gp.writeBool },
                    sketchfab: { n: 3, br: z.qM.readBool, bw: z.gp.writeBool },
                    twitter: { n: 4, br: z.qM.readBool, bw: z.gp.writeBool },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = z.w0(H.M())), H.sm_mbf;
          }
          toObject(j = !1) {
            return H.toObject(j, this);
          }
          static toObject(j, L) {
            return z.BT(H.M(), j, L);
          }
          static fromObject(j) {
            return z.Uq(H.M(), j);
          }
          static deserializeBinary(j) {
            let L = new (x().BinaryReader)(j),
              dr = new H();
            return H.deserializeBinaryFromReader(dr, L);
          }
          static deserializeBinaryFromReader(j, L) {
            return z.zj(H.MBF(), j, L);
          }
          serializeBinary() {
            var j = new (x().BinaryWriter)();
            return H.serializeBinaryToWriter(this, j), j.getResultBuffer();
          }
          static serializeBinaryToWriter(j, L) {
            z.i0(H.M(), j, L);
          }
          serializeBase64String() {
            var j = new (x().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, j), j.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
          }
        }
        class o extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(j = null) {
            super(), s.Message.initialize(this, j, 0, -1, void 0, null);
          }
          toObject(j = !1) {
            return o.toObject(j, this);
          }
          static toObject(j, L) {
            return j ? { $jspbMessageInstance: L } : {};
          }
          static fromObject(j) {
            return new o();
          }
          static deserializeBinary(j) {
            let L = new (x().BinaryReader)(j),
              dr = new o();
            return o.deserializeBinaryFromReader(dr, L);
          }
          static deserializeBinaryFromReader(j, L) {
            return j;
          }
          serializeBinary() {
            var j = new (x().BinaryWriter)();
            return o.serializeBinaryToWriter(this, j), j.getResultBuffer();
          }
          static serializeBinaryToWriter(j, L) {}
          serializeBase64String() {
            var j = new (x().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, j), j.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacy_GetCookiePreferences_Request";
          }
        }
        class y extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(j = null) {
            super(),
              y.prototype.preferences || z.Sg(y.M()),
              s.Message.initialize(this, j, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: { preferences: { n: 1, c: v } },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = z.w0(y.M())), y.sm_mbf;
          }
          toObject(j = !1) {
            return y.toObject(j, this);
          }
          static toObject(j, L) {
            return z.BT(y.M(), j, L);
          }
          static fromObject(j) {
            return z.Uq(y.M(), j);
          }
          static deserializeBinary(j) {
            let L = new (x().BinaryReader)(j),
              dr = new y();
            return y.deserializeBinaryFromReader(dr, L);
          }
          static deserializeBinaryFromReader(j, L) {
            return z.zj(y.MBF(), j, L);
          }
          serializeBinary() {
            var j = new (x().BinaryWriter)();
            return y.serializeBinaryToWriter(this, j), j.getResultBuffer();
          }
          static serializeBinaryToWriter(j, L) {
            z.i0(y.M(), j, L);
          }
          serializeBase64String() {
            var j = new (x().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, j), j.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacy_GetCookiePreferences_Response";
          }
        }
        var G;
        ((C) => {
          function j(L, dr, xr) {
            return L.SendMsg(
              "AccountPrivacy.GetCookiePreferences#1",
              (0, U.I8)(o, dr, xr),
              y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          C.GetCookiePreferences = j;
        })(G || (G = {}));
      },
      41944: (V, Y, t) => {
        "use strict";
        t.d(Y, { _o: () => e, lO: () => c });
        var n = t(80613),
          m = t.n(n),
          s = t(75245),
          x = t(35038),
          z = t(3367),
          U = t(18025);
        class w extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              w.prototype.context || s.Sg(w.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    context: { n: 2, c: z.TS },
                    data_request: { n: 3, c: z.gn },
                    gift_info: { n: 4, c: U.$z },
                    gidshoppingcart: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    gidreplayoftransid: {
                      n: 5,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    for_init_purchase: {
                      n: 6,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
          }
          toObject(o = !1) {
            return w.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(w.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(w.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new w();
            return w.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(w.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return w.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(w.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Request";
          }
        }
        class O extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              O.prototype.cart_items || s.Sg(O.M()),
              n.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    cart_items: { n: 1, c: I, r: !0, q: !0 },
                    estimated_totals: { n: 5, c: M },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = s.w0(O.M())), O.sm_mbf;
          }
          toObject(o = !1) {
            return O.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(O.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(O.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new O();
            return O.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(O.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return O.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(O.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response";
          }
        }
        class I extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              I.prototype.line_item_id || s.Sg(I.M()),
              n.Message.initialize(this, o, 0, -1, [15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    item_id: { n: 2, c: z.O4 },
                    store_item: { n: 3, c: z.vB },
                    gift_info: { n: 4, c: U.$z },
                    errors: { n: 5, c: g },
                    warnings: { n: 6, c: T },
                    subtotal: { n: 7, c: U.Hi },
                    price_when_added: { n: 8, c: U.Hi },
                    original_price: { n: 9, c: U.Hi },
                    coupon_applied: { n: 10, c: U.HX },
                    coupon_discount: { n: 11, c: U.Hi },
                    can_purchase_as_gift: {
                      n: 12,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    restrict_add_additional_to_cart: {
                      n: 13,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    quantity: {
                      n: 14,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    included_packageids: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = s.w0(I.M())), I.sm_mbf;
          }
          toObject(o = !1) {
            return I.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(I.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(I.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new I();
            return I.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(I.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return I.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(I.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem";
          }
        }
        class g extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              g.prototype.owned_appids || s.Sg(g.M()),
              n.Message.initialize(this, o, 0, -1, [1, 2, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    owned_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: s.qM.readInt32,
                      pbr: s.qM.readPackedInt32,
                      bw: s.gp.writeRepeatedInt32,
                    },
                    duplicate_appids_in_cart: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.qM.readInt32,
                      pbr: s.qM.readPackedInt32,
                      bw: s.gp.writeRepeatedInt32,
                    },
                    unavailable_in_country: {
                      n: 3,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    invalid_coupon: {
                      n: 4,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    invalid_coupon_for_item: {
                      n: 5,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    coupon_exclusive_promo: {
                      n: 6,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    cannot_purchase_as_gift: {
                      n: 7,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    invalid_item: {
                      n: 8,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    too_many_in_cart: {
                      n: 9,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    has_existing_billing_agreement: {
                      n: 10,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    missing_must_own_appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: s.qM.readInt32,
                      pbr: s.qM.readPackedInt32,
                      bw: s.gp.writeRepeatedInt32,
                    },
                    adult_content_restricted: {
                      n: 12,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    commercial_license_restricted: {
                      n: 13,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    gift_not_valid_for_recipient_region: {
                      n: 14,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
          }
          toObject(o = !1) {
            return g.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(g.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(g.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new g();
            return g.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(g.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return g.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(g.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Errors";
          }
        }
        class T extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              T.prototype.owned_appids || s.Sg(T.M()),
              n.Message.initialize(this, o, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    owned_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: s.qM.readInt32,
                      pbr: s.qM.readPackedInt32,
                      bw: s.gp.writeRepeatedInt32,
                    },
                    owned_appids_extra_copy: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.qM.readInt32,
                      pbr: s.qM.readPackedInt32,
                      bw: s.gp.writeRepeatedInt32,
                    },
                    appids_in_mastersub: { n: 3, c: d, r: !0, q: !0 },
                    price_has_changed: {
                      n: 4,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    non_refundable: {
                      n: 5,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    gift_recipient_higher_price: {
                      n: 6,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = s.w0(T.M())), T.sm_mbf;
          }
          toObject(o = !1) {
            return T.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(T.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(T.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new T();
            return T.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(T.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return T.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(T.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Warnings";
          }
        }
        class d extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              d.prototype.cart_appid || s.Sg(d.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    cart_appid: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    mastersub_appid: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = s.w0(d.M())), d.sm_mbf;
          }
          toObject(o = !1) {
            return d.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(d.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(d.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new d();
            return d.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(d.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return d.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(d.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub";
          }
        }
        class M extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              M.prototype.subtotal || s.Sg(M.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    subtotal: { n: 1, c: U.Hi },
                    wallet_balance: { n: 2, c: U.Hi },
                    exceeding_wallet_balance: { n: 3, c: U.Hi },
                    remaining_wallet_balance: { n: 4, c: U.Hi },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
          }
          toObject(o = !1) {
            return M.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(M.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(M.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new M();
            return M.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(M.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return M.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(M.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_EstimatedTotals";
          }
        }
        class B extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              B.prototype.item_ids || s.Sg(B.M()),
              n.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: { item_ids: { n: 1, c: z.O4, r: !0, q: !0 } },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
          }
          toObject(o = !1) {
            return B.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(B.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(B.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new B();
            return B.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(B.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return B.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(B.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Request";
          }
        }
        class P extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              P.prototype.ownership_info || s.Sg(P.M()),
              n.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: { ownership_info: { n: 1, c: v, r: !0, q: !0 } },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = s.w0(P.M())), P.sm_mbf;
          }
          toObject(o = !1) {
            return P.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(P.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(P.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new P();
            return P.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(P.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return P.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(P.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response";
          }
        }
        class F extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              F.prototype.accountid || s.Sg(F.M()),
              n.Message.initialize(this, o, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    accountid: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    already_owns: {
                      n: 2,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    wishes_for: { n: 3, br: s.qM.readBool, bw: s.gp.writeBool },
                    partial_owns_appids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                    partial_wishes_for: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = s.w0(F.M())), F.sm_mbf;
          }
          toObject(o = !1) {
            return F.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(F.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(F.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new F();
            return F.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(F.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return F.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(F.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership";
          }
        }
        class v extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              v.prototype.item_id || s.Sg(v.M()),
              n.Message.initialize(this, o, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    item_id: { n: 1, c: z.O4 },
                    friend_ownership: { n: 2, c: F, r: !0, q: !0 },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = s.w0(v.M())), v.sm_mbf;
          }
          toObject(o = !1) {
            return v.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(v.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(v.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new v();
            return v.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(v.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return v.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(v.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo";
          }
        }
        class c extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              c.prototype.item_id || s.Sg(c.M()),
              n.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = { proto: c, fields: { item_id: { n: 1, c: z.O4 } } }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
          }
          toObject(o = !1) {
            return c.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(c.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(c.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new c();
            return c.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(c.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return c.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(c.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_AddFreeLicense_Request";
          }
        }
        class l extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              l.prototype.packageids_added || s.Sg(l.M()),
              n.Message.initialize(this, o, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    packageids_added: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                    appids_added: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                    purchase_result_detail: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = s.w0(l.M())), l.sm_mbf;
          }
          toObject(o = !1) {
            return l.toObject(o, this);
          }
          static toObject(o, y) {
            return s.BT(l.M(), o, y);
          }
          static fromObject(o) {
            return s.Uq(l.M(), o);
          }
          static deserializeBinary(o) {
            let y = new (m().BinaryReader)(o),
              G = new l();
            return l.deserializeBinaryFromReader(G, y);
          }
          static deserializeBinaryFromReader(o, y) {
            return s.zj(l.MBF(), o, y);
          }
          serializeBinary() {
            var o = new (m().BinaryWriter)();
            return l.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, y) {
            s.i0(l.M(), o, y);
          }
          serializeBase64String() {
            var o = new (m().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_AddFreeLicense_Response";
          }
        }
        var e;
        ((H) => {
          function o(C, j, L) {
            return C.SendMsg("Checkout.ValidateCart#1", (0, x.I8)(w, j, L), O, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          H.ValidateCart = o;
          function y(C, j, L) {
            return C.SendMsg(
              "Checkout.GetFriendOwnershipForGifting#1",
              (0, x.I8)(B, j, L),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          H.GetFriendOwnershipForGifting = y;
          function G(C, j, L) {
            return C.SendMsg(
              "Checkout.AddFreeLicense#1",
              (0, x.I8)(c, j, L),
              l,
              { ePrivilege: 1 },
            );
          }
          H.AddFreeLicense = G;
        })(e || (e = {}));
      },
      18025: (V, Y, t) => {
        "use strict";
        t.d(Y, { $z: () => z, HX: () => O, Hi: () => w });
        var n = t(80613),
          m = t.n(n),
          s = t(75245);
        function x(I) {
          return "unknown ELineItemPurchaseNotice ( " + I + " )";
        }
        class z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(g = null) {
            super(),
              z.prototype.accountid_giftee || s.Sg(z.M()),
              n.Message.initialize(this, g, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    accountid_giftee: {
                      n: 1,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                    gift_message: { n: 2, c: U },
                    time_scheduled_send: {
                      n: 3,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                    email_giftee: {
                      n: 4,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = s.w0(z.M())), z.sm_mbf;
          }
          toObject(g = !1) {
            return z.toObject(g, this);
          }
          static toObject(g, T) {
            return s.BT(z.M(), g, T);
          }
          static fromObject(g) {
            return s.Uq(z.M(), g);
          }
          static deserializeBinary(g) {
            let T = new (m().BinaryReader)(g),
              d = new z();
            return z.deserializeBinaryFromReader(d, T);
          }
          static deserializeBinaryFromReader(g, T) {
            return s.zj(z.MBF(), g, T);
          }
          serializeBinary() {
            var g = new (m().BinaryWriter)();
            return z.serializeBinaryToWriter(this, g), g.getResultBuffer();
          }
          static serializeBinaryToWriter(g, T) {
            s.i0(z.M(), g, T);
          }
          serializeBase64String() {
            var g = new (m().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, g), g.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftInfo";
          }
        }
        class U extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(g = null) {
            super(),
              U.prototype.gifteename || s.Sg(U.M()),
              n.Message.initialize(this, g, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    gifteename: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    message: {
                      n: 2,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    sentiment: {
                      n: 3,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    signature: {
                      n: 4,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = s.w0(U.M())), U.sm_mbf;
          }
          toObject(g = !1) {
            return U.toObject(g, this);
          }
          static toObject(g, T) {
            return s.BT(U.M(), g, T);
          }
          static fromObject(g) {
            return s.Uq(U.M(), g);
          }
          static deserializeBinary(g) {
            let T = new (m().BinaryReader)(g),
              d = new U();
            return U.deserializeBinaryFromReader(d, T);
          }
          static deserializeBinaryFromReader(g, T) {
            return s.zj(U.MBF(), g, T);
          }
          serializeBinary() {
            var g = new (m().BinaryWriter)();
            return U.serializeBinaryToWriter(this, g), g.getResultBuffer();
          }
          static serializeBinaryToWriter(g, T) {
            s.i0(U.M(), g, T);
          }
          serializeBase64String() {
            var g = new (m().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, g), g.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftMessage";
          }
        }
        class w extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(g = null) {
            super(),
              w.prototype.amount_in_cents || s.Sg(w.M()),
              n.Message.initialize(this, g, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    amount_in_cents: {
                      n: 1,
                      br: s.qM.readInt64String,
                      bw: s.gp.writeInt64String,
                    },
                    currency_code: {
                      n: 2,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                    formatted_amount: {
                      n: 3,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
          }
          toObject(g = !1) {
            return w.toObject(g, this);
          }
          static toObject(g, T) {
            return s.BT(w.M(), g, T);
          }
          static fromObject(g) {
            return s.Uq(w.M(), g);
          }
          static deserializeBinary(g) {
            let T = new (m().BinaryReader)(g),
              d = new w();
            return w.deserializeBinaryFromReader(d, T);
          }
          static deserializeBinaryFromReader(g, T) {
            return s.zj(w.MBF(), g, T);
          }
          serializeBinary() {
            var g = new (m().BinaryWriter)();
            return w.serializeBinaryToWriter(this, g), g.getResultBuffer();
          }
          static serializeBinaryToWriter(g, T) {
            s.i0(w.M(), g, T);
          }
          serializeBase64String() {
            var g = new (m().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, g), g.getResultBase64String()
            );
          }
          getClassName() {
            return "CartAmount";
          }
        }
        class O extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(g = null) {
            super(),
              O.prototype.couponid || s.Sg(O.M()),
              n.Message.initialize(this, g, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    couponid: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    title: { n: 5, br: s.qM.readString, bw: s.gp.writeString },
                    coupon_description: {
                      n: 6,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    large_icon_url: {
                      n: 7,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    discount_pct: {
                      n: 8,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = s.w0(O.M())), O.sm_mbf;
          }
          toObject(g = !1) {
            return O.toObject(g, this);
          }
          static toObject(g, T) {
            return s.BT(O.M(), g, T);
          }
          static fromObject(g) {
            return s.Uq(O.M(), g);
          }
          static deserializeBinary(g) {
            let T = new (m().BinaryReader)(g),
              d = new O();
            return O.deserializeBinaryFromReader(d, T);
          }
          static deserializeBinaryFromReader(g, T) {
            return s.zj(O.MBF(), g, T);
          }
          serializeBinary() {
            var g = new (m().BinaryWriter)();
            return O.serializeBinaryToWriter(this, g), g.getResultBuffer();
          }
          static serializeBinaryToWriter(g, T) {
            s.i0(O.M(), g, T);
          }
          serializeBase64String() {
            var g = new (m().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, g), g.getResultBase64String()
            );
          }
          getClassName() {
            return "CartCoupon";
          }
        }
      },
      43462: (V, Y, t) => {
        "use strict";
        t.d(Y, { RI: () => n });
        var n = {};
        t.r(n), t.d(n, { $m: () => U });
        var m = t(80613),
          s = t.n(m),
          x = t(75245),
          z = t(35038);
        const U = 0,
          w = 1,
          O = 2,
          I = 3,
          g = 4;
        function T(F) {
          return "unknown ERecommendationIgnoreReason ( " + F + " )";
        }
        class d extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(), m.Message.initialize(this, v, 0, -1, void 0, null);
          }
          toObject(v = !1) {
            return d.toObject(v, this);
          }
          static toObject(v, c) {
            return v ? { $jspbMessageInstance: c } : {};
          }
          static fromObject(v) {
            return new d();
          }
          static deserializeBinary(v) {
            let c = new (s().BinaryReader)(v),
              l = new d();
            return d.deserializeBinaryFromReader(l, c);
          }
          static deserializeBinaryFromReader(v, c) {
            return v;
          }
          serializeBinary() {
            var v = new (s().BinaryWriter)();
            return d.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, c) {}
          serializeBase64String() {
            var v = new (s().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Request";
          }
        }
        class M extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(),
              M.prototype.ignore_list || x.Sg(M.M()),
              m.Message.initialize(this, v, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: { ignore_list: { n: 1, c: B, r: !0, q: !0 } },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = x.w0(M.M())), M.sm_mbf;
          }
          toObject(v = !1) {
            return M.toObject(v, this);
          }
          static toObject(v, c) {
            return x.BT(M.M(), v, c);
          }
          static fromObject(v) {
            return x.Uq(M.M(), v);
          }
          static deserializeBinary(v) {
            let c = new (s().BinaryReader)(v),
              l = new M();
            return M.deserializeBinaryFromReader(l, c);
          }
          static deserializeBinaryFromReader(v, c) {
            return x.zj(M.MBF(), v, c);
          }
          serializeBinary() {
            var v = new (s().BinaryWriter)();
            return M.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, c) {
            x.i0(M.M(), v, c);
          }
          serializeBase64String() {
            var v = new (s().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Response";
          }
        }
        class B extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(),
              B.prototype.appid || x.Sg(B.M()),
              m.Message.initialize(this, v, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    appid: { n: 1, br: x.qM.readUint32, bw: x.gp.writeUint32 },
                    packageid: {
                      n: 2,
                      br: x.qM.readUint32,
                      bw: x.gp.writeUint32,
                    },
                    reason: { n: 3, br: x.qM.readEnum, bw: x.gp.writeEnum },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = x.w0(B.M())), B.sm_mbf;
          }
          toObject(v = !1) {
            return B.toObject(v, this);
          }
          static toObject(v, c) {
            return x.BT(B.M(), v, c);
          }
          static fromObject(v) {
            return x.Uq(B.M(), v);
          }
          static deserializeBinary(v) {
            let c = new (s().BinaryReader)(v),
              l = new B();
            return B.deserializeBinaryFromReader(l, c);
          }
          static deserializeBinaryFromReader(v, c) {
            return x.zj(B.MBF(), v, c);
          }
          serializeBinary() {
            var v = new (s().BinaryWriter)();
            return B.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, c) {
            x.i0(B.M(), v, c);
          }
          serializeBase64String() {
            var v = new (s().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Response_IgnoreListEntry";
          }
        }
        var P;
        ((F) => {
          function v(c, l, e) {
            return c.SendMsg(
              "StorePreferences.GetIgnoreList#1",
              (0, z.I8)(d, l, e),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          F.GetIgnoreList = v;
        })(P || (P = {}));
      },
      98735: (V, Y, t) => {
        "use strict";
        t.d(Y, { oj: () => P, zG: () => B, nz: () => M });
        var n = t(7850),
          m = t(3367),
          s = t(72865),
          x = t(90626);
        const z = x.createContext({
          AddImpression: () => {
            console.log("Impression Tracking not enabled");
          },
          BIsValid: () => !1,
        });
        function U() {
          return x.useContext(z);
        }
        function w(F) {
          return jsx(z.Provider, {
            value: F.ImpressionTracker,
            children: F.children,
          });
        }
        var O = t(40365),
          I = t(18938);
        function g(F) {
          const { appID: v, feature: c, depth: l, children: e } = F,
            H = (0, s.ru)(c, l),
            o = U(),
            [y, G] = x.useState(void 0),
            C = x.useCallback(
              (xr) => {
                xr.isIntersecting &&
                  G((kr) =>
                    kr?.appID == v && kr?.snr == H ? kr : { appID: v, snr: H },
                  );
              },
              [v, H],
            );
          (0, x.useEffect)(() => {
            y && y.appID != null && o.AddImpression(y.appID, y.snr);
          }, [o, y]);
          const j = (0, O.BL)(C),
            L = v && (!y || (y.appID != v && y.snr != H)),
            dr = (0, I.Ue)(e.props.ref, L ? j : void 0);
          return x.cloneElement(e, { ref: dr });
        }
        var T = t(26356);
        function d(F) {
          return F == "bundle"
            ? "bundle"
            : F == "sub"
              ? "sub"
              : (BIsSaleItemType(F), "app");
        }
        function M(F) {
          return F == m.c6.xO
            ? "bundle"
            : F == m.c6.RD
              ? "sub"
              : (F == m.c6.qI, "app");
        }
        function B(F, v) {
          const c = v || (F ? T.ZJ : T.iA);
          return [!!c, c];
        }
        const P = (F) => {
          const { appid: v } = F,
            c = (0, n.jsx)("div", {
              className: "ImpressionTrackedElement",
              children: F.children,
            });
          return v ? (0, n.jsx)(g, { appID: v, children: c }) : c;
        };
      },
      89926: (V, Y, t) => {
        "use strict";
        t.d(Y, { l: () => I });
        var n = t(7850),
          m = t(64868),
          s = t(39905),
          x = t(1880),
          z = t(69168),
          U = t(74107),
          w = t(47875);
        function O(T) {
          const { closeModal: d, strDescOverride: M } = T;
          return (0, n.jsx)(x.o0, {
            strTitle: U.F5.Localize("#LoginRedirect_Dialog_Title"),
            strDescription:
              M || U.F5.Localize("#LoginRedirect_Dialog_Description"),
            onCancel: d,
            strOKButtonText: s.Z.Localize("#Button_OK"),
            onOK: () => {
              (0, w.l)(), d();
            },
          });
        }
        function I(T) {
          const [d, M, B] = (0, m.uD)();
          return {
            elDialogElement: (0, n.jsx)(z.E, {
              active: d,
              children: (0, n.jsx)(O, { closeModal: B, strDescOverride: T }),
            }),
            fnShowLogonDialog: M,
          };
        }
        function g(T) {
          const { label: d, strDialogDesc: M } = T,
            { elDialogElement: B, fnShowLogonDialog: P } = I(M);
          return jsxs(Fragment, {
            children: [
              jsx(Button, {
                onClick: P,
                children: d || SharedLocalization.Localize("#Login_SignIn"),
              }),
              B,
            ],
          });
        }
      },
      24237: (V, Y, t) => {
        "use strict";
        t.d(Y, { Q: () => st });
        var n = t(7850),
          m = t(64868),
          s = t(3367),
          x = t(62178),
          z = t(48357),
          U = t(80104),
          w = t(68260),
          O = t(77459),
          I = t(55483),
          g = t(29696),
          T = t(35413),
          d = t(1e3),
          M = t(64769),
          B = t.n(M),
          P = t(36707);
        function F(J) {
          const {
              nCreatorAccountID: Q,
              classOverride: q,
              styleOverride: or,
              followType: br,
            } = J,
            { data: Tr } = (0, I.TB)(Q),
            { data: vr } = (0, g.A5)(Q);
          if (!Tr || !vr) return null;
          const Nr =
            Tr.avatar_medium_url ||
            Tr.avatar_full_url ||
            (0, T.t)(void 0, "medium");
          return (0, n.jsxs)("div", {
            className: (0, P.A)(B().GameHoverCreatorFollowButtonCtn, q),
            style: or,
            children: [
              (0, n.jsx)("a", {
                href: (0, g.LO)(vr, "developer"),
                children: (0, n.jsx)("img", { src: Nr, alt: Tr.group_name }),
              }),
              (0, n.jsx)(d.of, { clanAccountID: Q, followType: br }),
            ],
          });
        }
        var v = t(44267),
          c = t(90626),
          l = t(19619),
          e = t(36118),
          H = t(47689),
          o = t(18210),
          y = t(3166),
          G = t(39722),
          C = t.n(G),
          j = t(89926),
          L = t(19298),
          dr = t(10134),
          xr = t(20125),
          kr = t(51614),
          Lr = t(98609),
          Vr = t(67705),
          Mr = t(43462);
        function E(J, Q, q, or = Mr.RI.$m) {
          const br = (0, dr.h3)(),
            Tr = Lr.iA.accountid;
          return (0, kr.n)({
            mutationKey: ["useUpdateAppIgnore", J, Tr, Q],
            mutationFn: async () => {
              if (J == null) return;
              const vr =
                  Lr.TS.STORE_BASE_URL + "recommended/ignorerecommendation",
                Nr = new FormData();
              Nr.append("appid", "" + J),
                Nr.append("sessionid", (0, Vr.KC)()),
                Nr.append("remove", Q ? "0" : "1"),
                q && Nr.append("snr", q),
                Nr.append("ignore_reason", "" + or);
              const ht = await fetch(vr, {
                method: "POST",
                body: Nr,
                credentials: "include",
              });
              if (!ht.ok)
                throw new Error(
                  `Ignore App ${Q ? "add" : "remove"} of appid ${J} failed (${ht.status})`,
                );
            },
            onMutate: () => {
              J != null && br(Q ? [J] : void 0, Q ? void 0 : [J]);
            },
            onError: () => {
              J != null && br(Q ? void 0 : [J], Q ? [J] : void 0);
            },
            onSuccess: () => {
              (0, xr.WZ)();
            },
          });
        }
        function $(J) {
          const { id: Q, snr: q, classOverride: or } = J,
            [br, Tr] = (0, c.useState)(!1),
            vr = (0, H.m)("GameHoverIgnoreButton"),
            { elDialogElement: Nr, fnShowLogonDialog: ht } = (0, j.l)(),
            Nt = Q && "appid" in Q ? Q.appid : void 0,
            Ft = (0, dr.BD)(Nt),
            { mutateAsync: Zt } = E(Nt, !Ft, q),
            Ut = Q && "appid" in Q && l.Fm.Get().BIsGameIgnored(Q.appid),
            $t = async (Pt) => {
              Pt.preventDefault(),
                Pt.stopPropagation(),
                y.iA.logged_in
                  ? Q &&
                    "appid" in Q &&
                    (Tr(!0), await Zt(), vr.token.reason || Tr(!1))
                  : ht();
            };
          return (0, n.jsxs)(L.Z, {
            className: (0, P.A)(C().IgnoreButton, or),
            onClick: $t,
            children: [
              (0, n.jsx)(e.NtH, {}),
              (0, n.jsx)("div", {
                className: (0, P.A)(
                  C().IgnoreButtonText,
                  br && C().IgnoreLoadingText,
                ),
                children: (0, o.we)(
                  Ut ? "#Sale_RemoveFromIgnored" : "#Sale_Ignore",
                ),
              }),
              Nr,
            ],
          });
        }
        var K = t(72609),
          S = t(21721),
          D = t(25046),
          b = t(87249),
          W = t(68094),
          N = t(40358),
          A = t(29522),
          tr = t(14616),
          ir = t(54806);
        const cr =
          t.p +
          "images/applications/appmgmt/defaultappheader.png?v=valveisgoodatcaching";
        var wr = t(14874),
          Or = t(8323),
          Rr = t(54963);
        const Wt = 5500,
          Zr = 2e3,
          Kr = 10;
        function Yr(J, Q) {
          return J && Q && Q.main_capsule
            ? {
                stringifyID: `maincap_${J.id}_${J.item_type}`,
                rctImage: (0, n.jsx)(
                  "img",
                  {
                    className: B().FullDivImage,
                    loading: "lazy",
                    src: (0, S.b0)(Q, "main_capsule"),
                    alt: J.name,
                  },
                  "fallback",
                ),
                nDurationMs: Zr,
              }
            : null;
        }
        function X(J, Q) {
          return {
            stringifyID: `vid_${(0, W.ER)(J)}`,
            rctImage: (0, n.jsx)(b.mj, { id: J, active: !0 }),
            nDurationMs: Wt,
          };
        }
        function R(J, Q, q, or) {
          return q.slice(0, or).map((br, Tr) => {
            const vr = (0, S.bu)(br, "1920x1080");
            return {
              stringifyID: `screen${Tr}_${(0, W.ER)(J)}`,
              rctImage: (0, n.jsx)(
                "img",
                {
                  className: B().FullDivImage,
                  loading: "lazy",
                  src: vr,
                  alt: `${Q}'s screenshot ${Tr + 1}`,
                },
                vr,
              ),
              nDurationMs: Zr,
            };
          });
        }
        function er(J, Q, q, or, br) {
          const Tr = [];
          if (
            (br && Tr.push(X(J, br)),
            or && or.length > 0 && Tr.push(...R(J, Q.name, or, Kr)),
            Tr.length == 0 && q && q.main_capsule)
          ) {
            const vr = Yr(Q, q);
            vr && Tr.push(vr);
          }
          return J && Tr.length == 0, Tr;
        }
        function gr(J, Q, q, or, br, Tr) {
          const vr = [];
          Tr && vr.push(X(Q, Tr)),
            or && or.length > 0 && vr.push(...R(J, q.name, or, Kr));
          const Nr = Kr - (or?.length || 0);
          return (
            Nr > 0 && br && br.length > 0 && vr.push(...R(J, q.name, br, Nr)),
            J && vr.length == 0,
            vr
          );
        }
        function rr(J) {
          return (0, n.jsx)("img", {
            className: B().FullDivImage,
            loading: "lazy",
            src: (0, K.YJ)(cr),
            alt: "default",
          });
        }
        function Br(J) {
          const { id: Q } = J,
            { data: q } = (0, N.U2)(Q);
          if (!q || q.unvailable_for_country_restriction || !q.visible)
            return (0, n.jsx)("div", {
              className: B().TrailerCtn,
              children: (0, n.jsx)(rr, {}, "default"),
            });
          const or = q.item_type,
            br = q.type;
          return or == s.c6.xO || or == s.c6.RD
            ? (0, n.jsx)(nr, { includeAppIDs: q.included_appids })
            : (br == s.uE.ue || br == s.uE.Vi) &&
                q.related_items &&
                q.related_items.parent_appid
              ? (0, n.jsx)(yr, {
                  demoItemDefaultInfo: q,
                  parentAppID: q.related_items.parent_appid,
                })
              : (0, n.jsx)(mr, { storeItemDefaultData: q });
        }
        function mr(J) {
          const { storeItemDefaultData: Q } = J,
            q = (0, wr.QO)(Q),
            or = (0, D.TH)(q),
            { data: br } = (0, N.lv)(q),
            Tr = (0, S.DT)(q),
            vr = (0, c.useMemo)(() => er(q, Q, br, Tr, or), [q, Tr, or, br, Q]);
          return (0, n.jsx)(Ur, { rgTrailerAndImages: vr });
        }
        function yr(J) {
          const { demoItemDefaultInfo: Q, parentAppID: q } = J,
            or = (0, wr.QO)(Q);
          return (0, D.TH)(or)
            ? (0, n.jsx)(mr, { storeItemDefaultData: Q })
            : (0, n.jsx)(sr, {
                demoID: or,
                demoItemDefaultInfo: Q,
                parentAppID: q,
              });
        }
        function sr(J) {
          const { parentAppID: Q, demoID: q, demoItemDefaultInfo: or } = J,
            br = (0, A.$5)(Q),
            Tr = (0, S.DT)(q),
            vr = (0, S.DT)(br),
            Nr = (0, D.TH)(br),
            ht = (0, c.useMemo)(
              () => gr(q, br, or, Tr, vr, Nr),
              [q, br, or, Nr, Tr, vr],
            );
          return (0, n.jsx)(Ur, { rgTrailerAndImages: ht });
        }
        function nr(J) {
          const { includeAppIDs: Q } = J,
            q = (0, tr.eG)(),
            or = (0, ir.E)({
              queries: Q.map((vr) => (0, N.AQ)(q, { appid: vr })),
            }),
            br = (0, ir.E)({
              queries: Q.map((vr) => (0, N.us)(q, { appid: vr })),
            }),
            Tr = (0, c.useMemo)(
              () =>
                or
                  .map((vr, Nr) => {
                    const ht = br[Nr].data,
                      Nt = vr.data;
                    return Yr(ht, Nt);
                  })
                  .filter((vr) => !!vr),
              [or, br],
            );
          return (0, n.jsx)(Ur, { rgTrailerAndImages: Tr });
        }
        function Ur(J) {
          const { rgTrailerAndImages: Q } = J,
            q = (0, c.useRef)(0),
            or = (0, Rr.CH)(),
            [br] = c.useState(new Or.LU()),
            Tr = (0, c.useCallback)(
              (vr = !1) => {
                if ((vr && (q.current = 0), Q?.length > 0)) {
                  const Nr = Q[q.current].nDurationMs;
                  br.Schedule(Nr, () => {
                    const ht = q.current;
                    (q.current = (q.current + 1) % Q.length),
                      ht != q.current && (Tr(), or());
                  });
                }
              },
              [Q, br, or],
            );
          return (
            (0, c.useEffect)(
              () => (Q.length > 0 && Tr(), () => br.Cancel()),
              [Q, Tr, br],
            ),
            (0, n.jsx)("div", {
              className: B().TrailerCtn,
              children: Q?.map((vr, Nr) =>
                (0, n.jsx)(
                  "div",
                  {
                    className: (0, P.A)({
                      [B().FullDivImage]: !0,
                      [B().Transparent]: Nr != q.current,
                    }),
                    children: vr.rctImage,
                  },
                  "e-" + Nr + "-" + vr.stringifyID,
                ),
              ),
            })
          );
        }
        var $r = t(16179),
          Gr = t(3348),
          Jr = t(19563),
          qr = t(76532),
          Cr = t.n(qr),
          Hr = t(29245),
          rt = t(41188),
          tt = t(26356),
          Xr = t(98735);
        function et(J) {
          const { id: Q } = J,
            { data: q } = (0, N.xz)(Q);
          return q
            ? (0, n.jsx)("div", {
                className: B().TagRow,
                children: (0, n.jsx)("div", {
                  className: B().Tags,
                  children: q
                    .slice(0, 10)
                    .filter((or) => or.tagid)
                    .map((or) =>
                      (0, n.jsx)(
                        rt.p,
                        { tagid: or.tagid, className: B().Tag },
                        "tag_" + or.tagid,
                      ),
                    ),
                }),
              })
            : null;
        }
        function nt(J) {
          const {
              id: Q,
              displayID: q,
              name: or,
              strStoreUrl: br,
              elElementToAppend: Tr,
              bShowDemoButton: vr,
              bHideBottomHalf: Nr,
              bHidePrice: ht,
              bShowDeckCompatibilityDialog: Nt,
              eHardwareCompatibilityDisplay: Ft,
              onShowDeckCompatibilityDialog: Zt,
              bUseSubscriptionLayout: Ut,
              nCreatorAccountID: $t,
              bPreventNavigation: Pt,
              bShowDescription: ie,
            } = J,
            ue = (0, x.RJ)(),
            de =
              Zt &&
              (() => {
                ue?.(), Zt();
              }),
            [ae, yt] = (0, c.useState)(!1),
            Gt = "",
            [se, ne] = (0, c.useState)(Gt),
            me = (kt) => ne(`translateY( -${kt?.clientHeight || 0}px )`),
            { data: pt } = (0, N.J$)(Q),
            { data: oe } = (0, N.lv)(q),
            fe = !Ut && !vr && !Tr,
            Yt = pt && pt.item_type == s.c6.qI,
            [Jt, Xt] = (0, Xr.zG)(Nt, Ft);
          return (0, n.jsxs)("div", {
            className: B().BottomShelf,
            style: { transform: Nr && ae ? se : Gt },
            onMouseEnter: () => yt(!0),
            onFocus: () => yt(!0),
            onMouseLeave: () => yt(!1),
            onBlur: () => yt(!1),
            children: [
              (0, n.jsxs)("a", {
                href: br,
                className: B().Midline,
                onClick: (kt) => {
                  Pt && kt.preventDefault();
                },
                "aria-disabled": Pt,
                children: [
                  oe &&
                    (0, n.jsx)("div", {
                      className: B().CapsuleImageAnchorPoint,
                      children: (0, n.jsx)("div", {
                        className: (0, P.A)(
                          B().CapsuleImageCtn,
                          B().WithCornerShine,
                        ),
                        children: (0, n.jsx)("img", {
                          loading: "lazy",
                          src: (0, S.b0)(oe, "header"),
                          alt: pt?.name,
                        }),
                      }),
                    }),
                  !ht &&
                    !Ut &&
                    (0, n.jsx)("div", {
                      className: B().Price,
                      children: (0, n.jsx)(z.NF, {
                        id: Q,
                        onlyOneDiscountPct: !0,
                      }),
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className: B().BottomShelfOffScreen,
                ref: me,
                children: (0, n.jsxs)("div", {
                  className: B().TextContent,
                  children: [
                    (0, n.jsx)("a", {
                      href: br,
                      onClick: (kt) => {
                        Pt && kt.preventDefault();
                      },
                      "aria-disabled": Pt,
                      children: (0, n.jsx)("div", {
                        className: B().GameTitle,
                        children: pt?.name || or,
                      }),
                    }),
                    ie && (0, n.jsx)(at, { id: Q }),
                    (0, n.jsx)(et, { id: Q }),
                    !Jt && (0, n.jsx)(U.J, { id: Q }),
                    !!(!Jt && fe) &&
                      (0, n.jsxs)("div", {
                        className: B().ReviewsAndRelease,
                        children: [
                          (0, n.jsx)(Hr.Q, {
                            id: Q,
                            strClassName: B().PlatformDisplay,
                          }),
                          (0, n.jsx)(it, { id: Q }),
                        ],
                      }),
                    vr && (0, n.jsx)(w.j, { id: Q, className: B().DemoButton }),
                    !!(Jt && Yt) &&
                      (0, n.jsx)(Jr.Pj, {
                        id: Q,
                        compatibility: Xt,
                        onShowDialog: de,
                      }),
                    !!Tr && Tr,
                    Ut &&
                      Yt &&
                      Q &&
                      "appid" in Q &&
                      Q.appid &&
                      (0, n.jsx)(O.E, { appid: Q.appid, bIsMuted: !1 }),
                    $t && (0, n.jsx)(F, { nCreatorAccountID: $t }),
                  ],
                }),
              }),
            ],
          });
        }
        function it(J) {
          const { id: Q } = J,
            { data: q } = (0, N.by)(Q);
          if (!q) return null;
          const or = (0, Gr.CC)(q);
          return (0, n.jsx)("div", {
            className: B().ReleaseDate,
            children: or,
          });
        }
        function at(J) {
          const { id: Q } = J,
            { data: q } = (0, N.wl)(Q);
          return q
            ? (0, n.jsx)("div", {
                className: B().ShortDescription,
                children: q?.short_description,
              })
            : null;
        }
        function _r(J) {
          const {
              id: Q,
              displayID: q,
              strStoreUrl: or,
              bHideBottomHalf: br,
              bShowDeckCompatibilityDialog: Tr,
              eHardwareCompatibilityDisplay: vr,
              bShowWishlistButton: Nr = !0,
              bShowIgnoreButton: ht = !1,
            } = J,
            { data: Nt } = (0, N.Yo)(Q),
            { data: Ft } = (0, N.j4)(Q),
            Zt = Nt === void 0 && Ft === void 0,
            [Ut] = (0, Xr.zG)(!!Tr, vr);
          return (0, n.jsxs)("div", {
            className: (0, P.A)(
              B().GameHoverCapsuleCtn,
              Zt && B().Loading,
              Cr().InGameHover,
              br && B().UseHidingBottomHalf,
            ),
            children: [
              (0, n.jsxs)("a", {
                href: or,
                className: B().TrailerAnchorStoreLink,
                children: [
                  !!(Nr && !Ut) && (0, n.jsx)(v.E, { id: q, snr: J.strSNR }),
                  !!(ht && !Ut) && (0, n.jsx)($, { id: q, snr: J.strSNR }),
                  Q && (0, n.jsx)(Br, { id: Q }),
                ],
              }),
              (0, n.jsx)(nt, { ...J }),
            ],
          });
        }
        function st(J) {
          const {
              id: Q,
              name: q,
              bPreventNavigation: or,
              elElementToAppend: br,
              bShowDemoButton: Tr,
              bPreferDemoStorePage: vr,
              bHidePrice: Nr,
              bUseSubscriptionLayout: ht,
              strExtraParams: Nt,
              children: Ft,
              nCreatorAccountID: Zt,
              nWidthMultiplier: Ut,
              bShowDeckCompatibilityDialog: $t,
              eHardwareCompatibilityDisplay: Pt,
              bShowWishlistButton: ie = !0,
              bShowIgnoreButton: ue = !1,
              bShowDescription: de = !1,
              ...ae
            } = J,
            { data: yt } = (0, N.J$)(Q),
            Gt = (0, y.Qn)(),
            [se, ne, me] = (0, m.uD)(),
            { strStoreURL: pt, snr: oe } = (0, $r.x)(yt, vr);
          if ((!yt && !q) || Gt)
            return (0, n.jsx)(n.Fragment, { children: Ft });
          let fe = Q;
          yt &&
            yt.item_type == s.c6.RD &&
            yt.included_appids?.length == 1 &&
            (fe = { appid: yt.included_appids[0] });
          const Yt = (0, x.nq)() == "hiding",
            Jt = or || !yt ? void 0 : pt,
            [, Xt] = (0, Xr.zG)($t, Pt);
          let kt;
          Xt != tt.iA &&
            yt?.appid &&
            yt?.item_type == s.c6.qI &&
            (kt = yt.appid);
          const Se = {
              id: Q,
              displayID: fe,
              name: q,
              bPreventNavigation: or,
              strStoreUrl: Jt,
              elElementToAppend: br,
              bShowDemoButton: Tr,
              bShowDeckCompatibilityDialog: $t,
              eHardwareCompatibilityDisplay: Pt,
              bHideBottomHalf: Yt,
              bHidePrice: Nr,
              bUseSubscriptionLayout: ht,
              strSNR: oe,
              nCreatorAccountID: Zt,
              bShowWishlistButton: ie,
              bShowIgnoreButton: ue,
              bShowDescription: de,
              onShowDeckCompatibilityDialog: kt ? ne : void 0,
            },
            Lt = (0, n.jsx)(_r, { ...Se }),
            Oe = Jt ? (0, n.jsx)("a", { href: Jt, children: Ft }) : Ft;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(x.JU, {
                hoverContent: Lt,
                nWidthMultiplier: Ut,
                ...ae,
                children: Oe,
              }),
              kt &&
                (0, n.jsx)(Jr.cO, {
                  nAppID: kt,
                  appName: yt?.name || q,
                  startingTab: Xt,
                  active: se,
                  closeModal: me,
                }),
            ],
          });
        }
      },
      80104: (V, Y, t) => {
        "use strict";
        t.d(Y, { J: () => F });
        var n = t(7850),
          m = t(84346),
          s = t(32288),
          x = t(3367),
          z = t(83784),
          U = t(40358),
          w = t(29522),
          O = t(12818),
          I = t(71421),
          g = t(36707),
          T = t(64769),
          d = t.n(T),
          M = t(39905),
          B = t(72609),
          P = t(32994);
        function F(c) {
          const { id: l, bTruncateTotalReviews: e, bShowTooltip: H } = c,
            { data: o } = (0, U.ik)(l),
            { data: y } = (0, U.J$)(l),
            G = (0, w.h0)(l),
            { data: C } = (0, U.J$)(G),
            { data: j } = (0, P.lI)();
          if (!o || !y || (y.type == x.uE.ue && !(0, z.J)(C))) return null;
          let L = o.summary_unfiltered || o.summary_filtered,
            dr = "#ReviewScore_UserReviewScoreAria",
            xr = !1;
          const kr = M.Z.Localize("#Language_" + B.TS.LANGUAGE);
          if (
            (v(j?.preferences?.review_score_preference) &&
              (o.summary_language_specific
                ? ((xr = !0),
                  (dr = "#ReviewScore_UserReviewScoreAria_LanguageSpecific"),
                  (L = o.summary_language_specific))
                : (L = o.summary_filtered)),
            !L || !L.review_score)
          )
            return null;
          let Lr = d().ReviewScoreNone;
          L.review_score > 0 && L.review_score < x.j6.hc
            ? (Lr = d().ReviewScoreLow)
            : L.review_score == x.j6.hc
              ? (Lr = d().ReviewScoreMixed)
              : (Lr = d().ReviewScoreHigh);
          const Vr = `${B.TS.STORE_BASE_URL}app/${y.appid}/#app_reviews_hash`,
            Mr = (0, n.jsxs)("div", {
              className: (0, g.A)(d().ReviewScoreValue, Lr),
              children: [
                (0, n.jsx)("div", {
                  className: d().ReviewScoreLabel,
                  "aria-label": M.Z.Localize(dr, L.review_score_label, kr),
                  children: L.review_score_label,
                }),
                (0, n.jsxs)("div", {
                  className: d().ReviewScoreCount,
                  "aria-label": M.Z.Localize(
                    "#GameHover_UserReviewCount",
                    L.review_count.toLocaleString((0, m.J)()),
                  ),
                  children: [
                    "(",
                    e
                      ? "(" + L.review_count.toLocaleString((0, m.J)()) + ")"
                      : xr
                        ? M.Z.Localize(
                            "#GameHover_UserReviewCount_Lang",
                            L.review_count.toLocaleString((0, m.J)()),
                            kr,
                          )
                        : M.Z.Localize(
                            "#GameHover_UserReviewCount",
                            L.review_count.toLocaleString((0, m.J)()),
                          ),
                    ")",
                  ],
                }),
                !e &&
                  (0, n.jsxs)("div", {
                    className: d().ReviewScoreHeader,
                    children: [
                      " ",
                      M.Z.Localize("#GameHover_UserReviewsHeader"),
                    ],
                  }),
              ],
            });
          let E = "#ReviewScore_PercentPositive";
          if (y.item_type === x.c6.xO)
            E = "#ReviewScore_PercentPositive_bundle";
          else if (y.item_type === x.c6.qI)
            switch (y.type) {
              case x.uE.Sv:
                E = "#ReviewScore_PercentPositive_software";
                break;
              case x.uE.Wz:
                E = "#ReviewScore_PercentPositive_video";
                break;
              case x.uE.Hk:
                E = "#ReviewScore_PercentPositive_hardware";
                break;
              case x.uE.gQ:
                E = "#ReviewScore_PercentPositive_series";
                break;
            }
          return (0, n.jsx)(O.q, {
            url: Vr,
            className: (0, g.A)(d().ReviewScore, "ReviewScore"),
            children:
              H && L.percent_positive != null && L.review_count != null && E
                ? (0, n.jsx)(I.he, {
                    bTopmost: !0,
                    toolTipContent: M.Z.Localize(
                      E,
                      L.percent_positive,
                      L.review_count,
                    ),
                    children: Mr,
                  })
                : Mr,
          });
        }
        function v(c) {
          return c === void 0 || c === s.Wf.SL || c === s.Wf.cG;
        }
      },
      44267: (V, Y, t) => {
        "use strict";
        t.d(Y, { E: () => c });
        var n = t(7850),
          m = t(19298),
          s = t(3367),
          x = t(89926),
          z = t(40358),
          U = t(29522),
          w = t(24179),
          O = t(54528),
          I = t(96362),
          g = t(90626),
          T = t(36118),
          d = t(47689),
          M = t(36707),
          B = t(3166),
          P = t(64769),
          F = t.n(P),
          v = t(39905);
        function c(l) {
          const {
              id: e,
              snr: H,
              classOverride: o,
              styleOverride: y,
              bShowInGamepadUI: G,
            } = l,
            { data: C } = (0, z.J$)(e),
            { elDialogElement: j, fnShowLogonDialog: L } = (0, x.l)(),
            [dr, xr] = (0, g.useState)(() => {
              if (
                C &&
                (C.type == s.uE.ue || C.type == s.uE.Vi) &&
                C.related_items?.parent_appid
              )
                return C.related_items?.parent_appid;
              if (e && "appid" in e) return e.appid;
            }),
            kr = (0, U.$5)(dr),
            Lr = (0, O.bB)(dr),
            { bIsOwned: Vr } = (0, w.ZJ)(kr),
            [Mr, E] = (0, g.useState)(!1),
            $ = (0, d.m)("GameHoverWishlistButton"),
            { mutateAsync: K } = (0, I.s)(dr, !Lr, H);
          (0, g.useEffect)(() => {
            e &&
              "appid" in e &&
              (C?.type == s.uE.ue || C?.type == s.uE.Vi) &&
              xr(C.related_items?.parent_appid || e.appid);
          }, [C, e]);
          const S = (0, g.useCallback)(
            async (D) => {
              B.iA.logged_in
                ? (D.preventDefault(),
                  D.stopPropagation(),
                  E(!0),
                  await K(),
                  $.token.reason || E(!1))
                : L();
            },
            [$.token.reason, L, K],
          );
          return Vr && C?.type != s.uE.Hk
            ? null
            : (0, n.jsxs)(m.Z, {
                className: (0, M.A)(
                  F().WishlistButton,
                  G && F().ShowInGamepadUI,
                  o,
                ),
                onActivate: S,
                style: y,
                children: [
                  Lr ? (0, n.jsx)(T.qnF, {}) : (0, n.jsx)(T.T4m, {}),
                  (0, n.jsx)("div", {
                    className: (0, M.A)(
                      F().WishlistButtonText,
                      Mr && F().WishlistLoadingText,
                      "WishlistButtonText",
                    ),
                    children: v.Z.Localize(
                      Lr ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                    ),
                  }),
                  j,
                ],
              });
        }
      },
      62178: (V, Y, t) => {
        "use strict";
        t.d(Y, { JU: () => l, RJ: () => c, nq: () => o });
        var n = t(7850),
          m = t(67344),
          s = t(90626),
          x = t(41301),
          z = t(561),
          U = t(76867),
          w = t(25792),
          O = t(21659),
          I = t(36707),
          g = t(54963),
          T = t(3166),
          d = t(64769),
          M = t.n(d),
          B = t(10350),
          P = t.n(B);
        const F = 150,
          v = s.createContext(void 0);
        function c() {
          return s.useContext(v);
        }
        function l(C) {
          const {
              hoverContent: j,
              hoverProps: L,
              nDelayShowMs: dr,
              nWidthMultiplier: xr,
              children: kr,
              className: Lr,
            } = C,
            Vr = (0, T.Qn)(),
            Mr = (0, O.zI)(),
            E = !Vr && !Mr,
            [$, K] = s.useState(!1),
            [S, D] = s.useState(void 0),
            b = (ir) => {
              K(!0), D(ir.currentTarget);
            },
            W = () => K(!1),
            N = s.useCallback(() => K(!1), []),
            A = (ir) => {
              ir.keyCode == x.zV &&
                (K(!1), ir.preventDefault(), ir.stopPropagation());
            },
            tr = () => K(!1);
          return (0, n.jsxs)("div", {
            "data-key": "hover div",
            role: "button",
            tabIndex: 0,
            className: (0, I.A)(P().ItemHoverSource, Lr),
            onMouseEnter: b,
            onMouseLeave: W,
            onTouchStart: tr,
            onKeyDown: A,
            children: [
              E &&
                S &&
                (0, n.jsx)(v.Provider, {
                  value: N,
                  children: (0, n.jsx)(e, {
                    visible: $,
                    target: S,
                    nDelayShowMs: dr,
                    nWidthMultiplier: xr,
                    hoverProps: L,
                    children: j,
                  }),
                }),
              (0, n.jsx)(w.tH, { children: kr }),
            ],
          });
        }
        function e(C) {
          const {
              hoverProps: j,
              nDelayShowMs: L = F,
              nWidthMultiplier: dr = 1.15,
              target: xr,
              visible: kr,
              children: Lr,
            } = C,
            [Vr, Mr] = s.useState(kr);
          if (
            (s.useEffect(() => {
              if (kr)
                if (L) {
                  const K = window.setTimeout(() => Mr(!0), L);
                  return () => window.clearTimeout(K);
                } else {
                  Mr(!0);
                  return;
                }
              else {
                if ((0, m.p)()) return;
                Mr(!1);
                return;
              }
            }, [kr]),
            s.useEffect(() => {
              if (!Vr) return;
              const K = 50,
                S = xr.ownerDocument.defaultView;
              if (S) {
                const D = S.scrollY,
                  b = () => {
                    Math.abs(S.scrollY - D) > K && Mr(!1);
                  };
                return (
                  window.addEventListener("scroll", b),
                  () => window.removeEventListener("scroll", b)
                );
              }
              return () => {};
            }, [Vr, xr?.ownerDocument.defaultView]),
            !xr || !Lr || !Vr)
          )
            return null;
          const E = xr.clientWidth < 200 ? "8px" : "10px",
            $ = {
              direction: "overlay-center",
              bEnablePointerEvents: !0,
              ...(j || {}),
              style: {
                zIndex: 98,
                width: xr.clientWidth * dr,
                fontSize: E,
                minHeight: o() == "hiding" ? void 0 : 300,
                height:
                  o() == "hiding"
                    ? xr.clientWidth * 1.15 * (125 / 184)
                    : void 0,
                ...j?.style,
              },
              target: xr,
            };
          return (0, n.jsx)(H, {
            hoverProps: $,
            children: (0, n.jsx)(w.tH, { children: Lr }),
          });
        }
        function H(C) {
          const { hoverProps: j, children: L } = C,
            dr = s.useCallback((kr) => kr?.focus(), []);
          return (0, n.jsx)(z.g, {
            ...j,
            children: (0, n.jsx)(U.M, {
              timeout: 500,
              in: !0,
              appear: !0,
              classNames: {
                appearActive: (0, I.A)(P().Opening, M().Opening),
                enterDone: (0, I.A)(P().Open, M().Open),
              },
              children: (kr) =>
                (0, n.jsx)("div", {
                  ref: (0, g.XB)(kr, dr),
                  className: P().HoverContentTransition,
                  tabIndex: -1,
                  children: L,
                }),
            }),
          });
        }
        function o() {
          return window.sessionStorage?.getItem(y) || "default";
        }
        const y = "DEBUG_UseNewGameHover";
        function G(C) {
          window.sessionStorage.setItem(y, C);
        }
        window.SetHoverPresentation = G;
      },
      26591: (V, Y, t) => {
        "use strict";
        t.d(Y, { h: () => De });
        var n = t(7850),
          m = t(72604);
        function s(k) {
          return !!k;
        }
        var x = t(68312),
          z = t(14616),
          U = t(40358),
          w = t(72865),
          O = t(75233),
          I = t(51614);
        function g(k) {
          return k.type === "account";
        }
        function T(k) {
          return k.type === "anonymous";
        }
        function d(k) {
          return k.type === "request";
        }
        function M(k) {
          return k.type === "replay";
        }
        function B() {
          const k = useShoppingCartID();
          return !d(k) && !M(k);
        }
        function P() {
          const k = useShoppingCartID();
          return M(k);
        }
        function F() {
          const k = useShoppingCartID();
          return d(k) ? k.requestID : void 0;
        }
        var v = t(35038),
          c = t(80613),
          l = t.n(c),
          e = t(75245),
          H = t(18025);
        class o extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.clanid || e.Sg(o.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    clanid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    listid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = e.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(o.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new o();
            return o.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(o.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(o.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserInterface_CuratorData";
          }
        }
        class y extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.domain || e.Sg(y.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    domain: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    controller: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    method: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    submethod: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    feature: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    depth: { n: 6, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    countrycode: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    webkey: {
                      n: 8,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    is_client: { n: 9, br: e.qM.readBool, bw: e.gp.writeBool },
                    curator_data: { n: 10, c: o },
                    is_likely_bot: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    is_utm: { n: 12, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = e.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(y.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new y();
            return y.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserInterface_NavData";
          }
        }
        const G = 0,
          C = 1,
          j = 2,
          L = 0,
          dr = 1,
          xr = 2,
          kr = 3;
        function Lr(k) {
          return "unknown EAccountCartLineItemType ( " + k + " )";
        }
        function Vr(k) {
          return "unknown EAccountCartValidationFailure ( " + k + " )";
        }
        class Mr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.validation_failure || e.Sg(Mr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    validation_failure: {
                      n: 1,
                      d: L,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = e.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Mr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Mr();
            return Mr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartValidationDetails";
          }
        }
        class E extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.is_gift || e.Sg(E.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    is_gift: { n: 1, br: e.qM.readBool, bw: e.gp.writeBool },
                    is_private: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = e.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(E.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new E();
            return E.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(E.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(E.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartLineItemFlags";
          }
        }
        class $ extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.line_item_id || e.Sg($.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    type: { n: 2, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    packageid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_valid: { n: 8, br: e.qM.readBool, bw: e.gp.writeBool },
                    validation_details: { n: 9, c: Mr },
                    time_added: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    price_when_added: { n: 11, c: H.Hi },
                    gift_info: { n: 12, c: H.$z },
                    flags: { n: 13, c: E },
                    gidcoupon_applied: {
                      n: 14,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = e.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT($.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new $();
            return $.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj($.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0($.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartLineItem";
          }
        }
        class K extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.line_items || e.Sg(K.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    line_items: { n: 1, c: $, r: !0, q: !0 },
                    subtotal: { n: 2, c: H.Hi },
                    is_valid: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    validation_details: { n: 4, c: Mr },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = e.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(K.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new K();
            return K.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(K.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(K.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartContents";
          }
        }
        class S extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.user_country || e.Sg(S.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    user_country: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = e.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(S.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new S();
            return S.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(S.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(S.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetCart_Request";
          }
        }
        class D extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.cart || e.Sg(D.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = { proto: D, fields: { cart: { n: 1, c: K } } }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = e.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(D.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new D();
            return D.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(D.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(D.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetCart_Response";
          }
        }
        class b extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.user_country || e.Sg(b.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    user_country: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    items: { n: 2, c: W, r: !0, q: !0 },
                    navdata: { n: 3, c: y },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = e.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(b.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new b();
            return b.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(b.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(b.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Request";
          }
        }
        class W extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.packageid || e.Sg(W.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    packageid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gift_info: { n: 10, c: H.$z },
                    flags: { n: 11, c: E },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = e.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(W.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new W();
            return W.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(W.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(W.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Request_ItemToAdd";
          }
        }
        class N extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.line_item_ids || e.Sg(N.M()),
              c.Message.initialize(this, r, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    line_item_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                    cart: { n: 2, c: K },
                    replaced_packages: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    existing_billing_agreementid: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    new_billing_agreement_recurring_packageid: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = e.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(N.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new N();
            return N.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(N.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(N.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Response";
          }
        }
        class A extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.line_item_id || e.Sg(A.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    user_country: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    gift_info: { n: 10, c: H.$z },
                    flags: { n: 11, c: E },
                    apply_gidcoupon: {
                      n: 12,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = e.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(A.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new A();
            return A.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(A.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(A.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_ModifyLineItem_Request";
          }
        }
        class tr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.cart || e.Sg(tr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = { proto: tr, fields: { cart: { n: 1, c: K } } }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = e.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(tr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new tr();
            return tr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(tr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(tr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_ModifyLineItem_Response";
          }
        }
        class ir extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.line_item_id || e.Sg(ir.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    user_country: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = e.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(ir.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new ir();
            return ir.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_RemoveItemFromCart_Request";
          }
        }
        class cr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.cart || e.Sg(cr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = { proto: cr, fields: { cart: { n: 1, c: K } } }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = e.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(cr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new cr();
            return cr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_RemoveItemFromCart_Response";
          }
        }
        class wr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.gidshoppingcart || e.Sg(wr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    user_country: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = e.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(wr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new wr();
            return wr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_MergeShoppingCartContents_Request";
          }
        }
        class Or extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.cart || e.Sg(Or.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = { proto: Or, fields: { cart: { n: 1, c: K } } }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = e.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Or.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Or();
            return Or.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_MergeShoppingCartContents_Response";
          }
        }
        class Rr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Rr();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Rr();
            return Rr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_DeleteCart_Request";
          }
        }
        class Wt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Wt.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Wt();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Wt();
            return Wt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_DeleteCart_Response";
          }
        }
        class Zr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.language || e.Sg(Zr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    language: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = e.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Zr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Zr();
            return Zr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Request";
          }
        }
        class Kr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.line_items || e.Sg(Kr.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: { line_items: { n: 1, c: Yr, r: !0, q: !0 } },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = e.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Kr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Kr();
            return Kr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Kr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Kr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Response";
          }
        }
        class Yr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.line_item_id || e.Sg(Yr.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    coupons: { n: 2, c: H.HX, r: !0, q: !0 },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = e.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Yr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Yr();
            return Yr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Response_LineItemCoupons";
          }
        }
        var X;
        ((k) => {
          function r(jr, zr, fr) {
            return jr.SendMsg(
              "AccountCart.GetCart#1",
              (0, v.I8)(S, zr, fr),
              D,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          k.GetCart = r;
          function a(jr, zr, fr) {
            return jr.SendMsg(
              "AccountCart.AddItemsToCart#1",
              (0, v.I8)(b, zr, fr),
              N,
              { ePrivilege: 1 },
            );
          }
          k.AddItemsToCart = a;
          function h(jr, zr, fr) {
            return jr.SendMsg(
              "AccountCart.ModifyLineItem#1",
              (0, v.I8)(A, zr, fr),
              tr,
              { ePrivilege: 1 },
            );
          }
          k.ModifyLineItem = h;
          function ur(jr, zr, fr) {
            return jr.SendMsg(
              "AccountCart.RemoveItemFromCart#1",
              (0, v.I8)(ir, zr, fr),
              cr,
              { ePrivilege: 1 },
            );
          }
          k.RemoveItemFromCart = ur;
          function pr(jr, zr, fr) {
            return jr.SendMsg(
              "AccountCart.MergeShoppingCartContents#1",
              (0, v.I8)(wr, zr, fr),
              Or,
              { ePrivilege: 1 },
            );
          }
          k.MergeShoppingCartContents = pr;
          function Fr(jr, zr, fr) {
            return jr.SendMsg(
              "AccountCart.DeleteCart#1",
              (0, v.I8)(Rr, zr, fr),
              Wt,
              { ePrivilege: 1 },
            );
          }
          k.DeleteCart = Fr;
          function lt(jr, zr, fr) {
            return jr.SendMsg(
              "AccountCart.GetRelevantCoupons#1",
              (0, v.I8)(Zr, zr, fr),
              Kr,
              { ePrivilege: 1 },
            );
          }
          k.GetRelevantCoupons = lt;
        })(X || (X = {}));
        var R = t(41944);
        class er extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.steamid_requester || e.Sg(er.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    steamid_requester: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = e.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(er.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new er();
            return er.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(er.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(er.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Request";
          }
        }
        class gr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.gidshoppingcart || e.Sg(gr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = e.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(gr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new gr();
            return gr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Response";
          }
        }
        class rr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.amount || e.Sg(rr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    amount: {
                      n: 1,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    currencycode: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = e.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(rr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new rr();
            return rr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(rr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(rr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Amount";
          }
        }
        class Br extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.packageid || e.Sg(Br.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    packageid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    costwhenadded: { n: 2, c: rr },
                    is_gift: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    gidbundle: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    quantity: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gift_info: { n: 6, c: H.$z },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = e.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Br.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Br();
            return Br.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_PackageItem";
          }
        }
        class mr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.walletcredit || e.Sg(mr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: { walletcredit: { n: 1, c: rr } },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = e.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(mr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new mr();
            return mr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_WalletCreditItem";
          }
        }
        class yr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.couponid || e.Sg(yr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    couponid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gidcoupontarget: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    packageid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = e.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(yr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new yr();
            return yr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CouponItem";
          }
        }
        class sr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.microtxnappid || e.Sg(sr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    microtxnappid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    microtxnassetclassid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = e.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(sr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new sr();
            return sr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_MicroTxnAsset";
          }
        }
        class nr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.bundleid || e.Sg(nr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    bundleid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    quantity: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_gift: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    gift_info: { n: 4, c: H.$z },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = e.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(nr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new nr();
            return nr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_BundleItem";
          }
        }
        class Ur extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.reward_id || e.Sg(Ur.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    reward_id: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = e.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Ur.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Ur();
            return Ur.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_LoyaltyRewardItem";
          }
        }
        class $r extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.gidparent || e.Sg($r.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    gidparent: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    children: { n: 2, c: $r, r: !0, q: !0 },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = e.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT($r.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new $r();
            return $r.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj($r.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0($r.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RelationShip";
          }
        }
        class Gr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.couponid || e.Sg(Gr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    couponid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = e.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Gr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Gr();
            return Gr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AvailableCoupon";
          }
        }
        class Jr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.gidlineitem || e.Sg(Jr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    gidlineitem: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    package_item: { n: 2, c: Br },
                    wallet_credit_item: { n: 3, c: mr },
                    coupon_item: { n: 4, c: yr },
                    micro_item: { n: 5, c: sr },
                    bundle_item: { n: 7, c: nr },
                    loyalty_item: { n: 8, c: Ur },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = e.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Jr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Jr();
            return Jr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Jr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Jr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Item";
          }
        }
        class qr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.coupons || e.Sg(qr.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: { coupons: { n: 1, c: Gr, r: !0, q: !0 } },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = e.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(qr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new qr();
            return qr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(qr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(qr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Potentials";
          }
        }
        class Cr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.gidshoppingcart || e.Sg(Cr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = e.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Cr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Cr();
            return Cr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Request";
          }
        }
        class Hr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.lineitems || e.Sg(Hr.M()),
              c.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    lineitems: { n: 1, c: Jr, r: !0, q: !0 },
                    treeview: { n: 2, c: $r, r: !0, q: !0 },
                    potentials: { n: 3, c: qr },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = e.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Hr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Hr();
            return Hr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Hr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Hr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Contents";
          }
        }
        class rt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rt.prototype.gidshoppingcart || e.Sg(rt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Hr },
                    time_created: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    merged_into_account_cart: {
                      n: 4,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    steamid_requester: {
                      n: 5,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 6,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = e.w0(rt.M())), rt.sm_mbf;
          }
          toObject(r = !1) {
            return rt.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(rt.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(rt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new rt();
            return rt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(rt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(rt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Response";
          }
        }
        class tt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tt.prototype.gidshoppingcart || e.Sg(tt.M()),
              c.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    browserid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    cart_items: { n: 4, c: Br, r: !0, q: !0 },
                    store_country_code: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    beta_mode: {
                      n: 6,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = e.w0(tt.M())), tt.sm_mbf;
          }
          toObject(r = !1) {
            return tt.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(tt.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(tt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new tt();
            return tt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(tt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(tt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Request";
          }
        }
        class Xr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.gidshoppingcart || e.Sg(Xr.M()),
              c.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Hr },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = e.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Xr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Xr();
            return Xr.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Response";
          }
        }
        class et extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              et.prototype.gidshoppingcart || e.Sg(et.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    quantity: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = e.w0(et.M())), et.sm_mbf;
          }
          toObject(r = !1) {
            return et.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(et.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(et.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new et();
            return et.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(et.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(et.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Request";
          }
        }
        class nt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nt.prototype.gidshoppingcart || e.Sg(nt.M()),
              c.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Hr },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = e.w0(nt.M())), nt.sm_mbf;
          }
          toObject(r = !1) {
            return nt.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(nt.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(nt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new nt();
            return nt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(nt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(nt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Response";
          }
        }
        class it extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              it.prototype.gidshoppingcart || e.Sg(it.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    bundleid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    browserid: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    store_country: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    quantity: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    beta_mode: {
                      n: 7,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    gift_info: { n: 8, c: H.$z },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = e.w0(it.M())), it.sm_mbf;
          }
          toObject(r = !1) {
            return it.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(it.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(it.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new it();
            return it.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(it.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return it.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(it.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Request";
          }
        }
        class at extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              at.prototype.contents || e.Sg(at.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    contents: { n: 1, c: Hr },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = e.w0(at.M())), at.sm_mbf;
          }
          toObject(r = !1) {
            return at.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(at.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(at.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new at();
            return at.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(at.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return at.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(at.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Response";
          }
        }
        class _r extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.gidshoppingcart || e.Sg(_r.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gift_info: { n: 3, c: H.$z },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = e.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(_r.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new _r();
            return _r.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(_r.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(_r.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Request";
          }
        }
        class st extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              st.prototype.contents || e.Sg(st.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: { contents: { n: 1, c: Hr } },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = e.w0(st.M())), st.sm_mbf;
          }
          toObject(r = !1) {
            return st.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(st.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(st.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new st();
            return st.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(st.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return st.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(st.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Response";
          }
        }
        class J extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.gidshoppingcart || e.Sg(J.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitems: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                    browserid: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = e.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(J.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new J();
            return J.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(J.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(J.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Request";
          }
        }
        class Q extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.contents || e.Sg(Q.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    contents: { n: 1, c: Hr },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = e.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Q.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new Q();
            return Q.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Response";
          }
        }
        var q;
        ((k) => {
          function r(jr, zr, fr) {
            return jr.SendMsg(
              "ShoppingCart.CreateNewShoppingCart#1",
              (0, v.I8)(er, zr, fr),
              gr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          k.CreateNewShoppingCart = r;
          function a(jr, zr, fr) {
            return jr.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, v.I8)(Cr, zr, fr),
              rt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          k.GetShoppingCartContents = a;
          function h(jr, zr, fr) {
            return jr.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, v.I8)(tt, zr, fr),
              Xr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          k.AddPackages = h;
          function ur(jr, zr, fr) {
            return jr.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, v.I8)(et, zr, fr),
              nt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          k.UpdatePackageQuantity = ur;
          function pr(jr, zr, fr) {
            return jr.SendMsg(
              "ShoppingCart.AddBundle#1",
              (0, v.I8)(it, zr, fr),
              at,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          k.AddBundle = pr;
          function Fr(jr, zr, fr) {
            return jr.SendMsg(
              "ShoppingCart.ModifyLineItem#1",
              (0, v.I8)(_r, zr, fr),
              st,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          k.ModifyLineItem = Fr;
          function lt(jr, zr, fr) {
            return jr.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, v.I8)(J, zr, fr),
              Q,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          k.RemoveLineItems = lt;
        })(q || (q = {}));
        var or = t(72609),
          br = t(25294);
        function Tr(k, r, a) {
          return {
            queryKey: GetShoppingCartKey(r),
            queryFn: () => $t(k, r),
            staleTime: 1800 * 1e3,
            ...a,
          };
        }
        function vr(k) {
          const r = useActiveServiceTransport(),
            a = useShoppingCartID();
          return useQuery(Tr(r, a, k));
        }
        function Nr(k, r, a) {
          if (k !== void 0)
            return r
              ? k.line_items.some(
                  (h) =>
                    h.type ==
                      EAccountCartLineItemType.k_EAccountCartLineItem_Package &&
                    h.packageid === r,
                )
              : a
                ? k.line_items.some(
                    (h) =>
                      h.type ==
                        EAccountCartLineItemType.k_EAccountCartLineItem_Bundle &&
                      h.bundleid === a,
                  )
                : void 0;
        }
        function ht(k) {
          return vr({ select: (r) => r.line_items?.length ?? 0, ...k });
        }
        function Nt(k, r, a, h, ur, pr) {
          const {
            navData: Fr,
            nAccountIDGiftee: lt,
            bIsGift: jr = !1,
          } = pr ?? {};
          if (BIsAccountCart(a)) {
            const zr = (h || []).map((fr) => ({
              packageid: fr,
              bIsGift: jr,
              nAccountIDGiftee: lt,
            }));
            return (
              ur &&
                zr.push({ bundleid: ur, bIsGift: jr, nAccountIDGiftee: lt }),
              Ut(k, UserConfig.country_code, zr, Fr).then(
                ([fr, Ar]) => (
                  InvalidateDynamicStoreVersion(),
                  fr == k_EResultOK
                    ? (ReplaceShoppingCart(r, a, Ar.cart),
                      {
                        success: !0,
                        items: Ar.line_item_ids,
                        replaced_packageids: Ar.replaced_packages,
                      })
                    : fr === k_EResultAlreadyOwned
                      ? {
                          success: !1,
                          result: fr,
                          existing_billing_agreementid:
                            Ar.existing_billing_agreementid,
                          new_billing_agreement_recurring_packageid:
                            Ar.new_billing_agreement_recurring_packageid,
                        }
                      : { success: !1, result: fr }
                ),
              )
            );
          } else
            return Ft(k, h, ur, jr, lt).then(([zr, fr]) => {
              if ((InvalidateDynamicStoreVersion(), zr)) {
                ReplaceShoppingCart(r, a, Pt(fr));
                const Ar = (h || []).map((It) =>
                  fr?.lineitems?.find(
                    (Kt) => Kt.package_item?.packageid === It,
                  ),
                );
                return (
                  ur &&
                    Ar.push(
                      fr?.lineitems?.find(
                        (It) => It.bundle_item?.bundleid === ur,
                      ),
                    ),
                  {
                    success: !0,
                    items: Ar.filter(isTruthy).map((It) => It.gidlineitem),
                  }
                );
              }
              return { success: !1 };
            });
        }
        async function Ft(k, r, a, h, ur) {
          const pr = new FormData();
          r &&
            (r.length === 1
              ? pr.set("subid", r[0].toString())
              : r.forEach((jr) => pr.append("subid[]", jr.toString()))),
            a && pr.set("bundleid", a.toString()),
            (h || ur) &&
              (pr.set("isgift", "1"),
              ur && pr.set("gifteeaccountid", ur.toString())),
            pr.set("action", "add_to_cart");
          const Fr = await fetch(`${or.TS.STORE_BASE_URL}cart/addtocart`, {
            method: "post",
            body: pr,
          });
          if (!Fr.ok) throw new Error("Failed to fetch /cart/addtocart");
          const lt = await Fr.json();
          return [lt?.success ? m.R : m.zi, lt?.contents];
        }
        async function Zt(k, r, a, h) {
          return Ut(k, r, [a], h);
        }
        async function Ut(k, r, a, h) {
          const ur = v.w.Init(b);
          if (!a || a.length === 0)
            return (
              console.error(
                "No valid Package or Bundle provided to add to cart",
              ),
              [m.nO, null]
            );
          a.forEach((Fr) => {
            const lt = ur.Body().add_items();
            Fr.packageid
              ? lt.set_packageid(Fr.packageid)
              : Fr.bundleid
                ? lt.set_bundleid(Fr.bundleid)
                : console.error(
                    "Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart",
                  ),
              Fr.bIsGift &&
                (lt.flags(!0).set_is_gift(!0),
                Fr.nAccountIDGiftee &&
                  lt.gift_info(!0).set_accountid_giftee(Fr.nAccountIDGiftee));
          }),
            h && ur.Body().set_navdata(y.fromObject((0, br.R)(h))),
            ur.Body().set_user_country(r);
          const pr = await X.AddItemsToCart(k, ur);
          return (
            pr.BSuccess() ||
              console.warn(
                `Failed to add item to account cart: ${pr.GetEResult()}`,
              ),
            [pr.GetEResult(), pr.Body().toObject()]
          );
        }
        async function $t(k, r) {
          if (BIsAccountCart(r)) {
            const a = CProtoBufMsg.Init(CAccountCart_GetCart_Request);
            a.Body().set_user_country(UserConfig.country_code);
            const h = await AccountCartService.GetCart(k, a);
            if (!h.BSuccess())
              throw `Error loading AccountCart: ${h.GetErrorMessage()}`;
            return h.Body().toObject()?.cart;
          } else if (BIsReplayCart(r)) {
            const a = CProtoBufMsg.Init(CCheckout_ValidateCart_Request);
            SetStoreBrowseContext(
              { country: UserConfig.country_code, language: Config.LANGUAGE },
              a,
            ),
              a.Body().set_gidreplayoftransid(r.gid);
            const h = await CheckoutService.ValidateCart(k, a);
            if (!h.BSuccess())
              throw `Error loading ReplayCart: ${h.GetErrorMessage()}`;
            return ue(h.Body().toObject());
          } else {
            if (!r.gid) return Pt(void 0);
            const a = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
            a.Body().set_gidshoppingcart(r.gid);
            const h = await ShoppingCartService.GetShoppingCartContents(k, a);
            if (!h.BSuccess())
              throw `Error loading Legacy Cart: ${h.GetErrorMessage()}`;
            return Pt(h.Body().toObject().contents);
          }
        }
        function Pt(k) {
          const r = { line_items: [] };
          return (
            k?.lineitems?.length &&
              (r.line_items = k.lineitems
                .map((a) => (a.package_item?.gidbundle ? null : ie(a)))
                .filter(s)),
            r
          );
        }
        function ie(k) {
          const r = { price_when_added: {}, flags: {} };
          return (
            (r.line_item_id = k.gidlineitem),
            k.bundle_item?.bundleid
              ? ((r.bundleid = k.bundle_item.bundleid),
                (r.type = j),
                k.bundle_item.is_gift &&
                  ((r.flags.is_gift = k.bundle_item.is_gift),
                  (r.gift_info = k.bundle_item.gift_info)))
              : k.package_item &&
                ((r.packageid = k.package_item.packageid),
                (r.price_when_added.amount_in_cents =
                  k.package_item.costwhenadded?.amount ?? ""),
                (r.price_when_added.currency_code =
                  k.package_item.costwhenadded?.currencycode ?? 0),
                (r.type = C),
                k.package_item.is_gift &&
                  ((r.flags.is_gift = k.package_item.is_gift),
                  (r.gift_info = k.package_item.gift_info))),
            r
          );
        }
        function ue(k) {
          const r = { subtotal: k.estimated_totals.subtotal, line_items: [] };
          return (
            (r.line_items = k.cart_items
              ?.map((a) => {
                let h;
                if (a.item_id?.packageid)
                  h = EAccountCartLineItemType.k_EAccountCartLineItem_Package;
                else if (a.item_id?.bundleid)
                  h = EAccountCartLineItemType.k_EAccountCartLineItem_Bundle;
                else return;
                return {
                  line_item_id: a.line_item_id,
                  type: h,
                  packageid: a.item_id.packageid,
                  bundleid: a.item_id.bundleid,
                  is_valid: !0,
                  price_when_added: a.price_when_added,
                  gift_info: a.gift_info,
                  flags: { is_gift: !!a.gift_info?.accountid_giftee },
                  gidcoupon_applied: a.coupon_applied?.gidcoupon,
                };
              })
              .filter(isTruthy)),
            r
          );
        }
        var de = t(52438),
          ae = t(90900),
          yt = t(90626);
        function Gt(k) {
          return k
            ? { type: "replay", gid: k }
            : or.iA.logged_in
              ? { type: "account" }
              : { type: "anonymous", gid: (0, de.j_)(ae.TP) };
        }
        const se = yt.createContext({ cartID: void 0 });
        function ne() {
          return yt.useContext(se).cartID || Gt();
        }
        function me(k) {
          const { cartID: r, children: a } = k,
            h = React.useMemo(() => ({ cartID: r }), [r]);
          return jsx(se.Provider, { value: h, children: a });
        }
        function pt(k) {
          return g(k) ? k.type : k.gid;
        }
        function oe(k) {
          return ["shopping_cart", pt(k), or.iA.accountid];
        }
        function fe(k, r) {
          return BIsAccountCart(k)
            ? ["validate_checkout", pt(k), UserConfig.accountid]
            : ["validate_checkout", pt(k), r?.accountid_giftee];
        }
        function Yt(k, r) {
          k.invalidateQueries({ queryKey: ["validate_checkout"], exact: !1 });
        }
        function Jt(k, r) {
          k.invalidateQueries({ queryKey: oe(r) }), Yt(k, r);
        }
        function Xt(k, r, a) {
          k.setQueryData(oe(r), a), Yt(k, r);
        }
        function kt(k, r, a, h, ur) {
          return Se(
            [{ packageid: k, bundleid: r, bIsGift: a, nAccountIDGiftee: h }],
            ur,
          );
        }
        function Se(k, r) {
          const a = ne(),
            h = (0, x.KV)(),
            ur = (0, O.jE)(),
            { storeBrowseContext: pr, dataLoader: Fr } = (0, z.yn)(),
            { country: lt } = pr,
            jr = (0, w.Gd)(r);
          return (0, I.n)({
            mutationFn: async () => {
              if (
                k.length == 0 ||
                !k.every((fr) => fr.packageid || fr.bundleid)
              )
                throw "Every item must have a valid package or bundle id";
              let zr;
              if (g(a)) {
                const [fr, Ar] = await Ut(h, lt, k, jr);
                if (fr == m.R) (zr = Ar.line_item_ids), Xt(ur, a, Ar.cart);
                else throw `AddItemsToAccountCart failed with ${fr}`;
              } else if (T(a)) {
                const fr = k.map((Kt) => Kt.packageid).filter(s),
                  Ar = k.map((Kt) => Kt.bundleid).filter(s);
                if (Ar.length > 1)
                  throw "The anonymous cart can only take one bundle per call";
                const [xt, It] = await Ft(
                  h,
                  fr.length > 0 ? fr : void 0,
                  Ar[0],
                  k.some((Kt) => Kt.bIsGift),
                  k.find((Kt) => Kt.nAccountIDGiftee)?.nAccountIDGiftee,
                );
                if (xt == m.R && It) {
                  const Kt = new Set(fr),
                    He = new Set(Ar);
                  (zr =
                    It.lineitems
                      ?.filter(
                        (Vt) =>
                          (Vt.package_item &&
                            !Vt.package_item.gidbundle &&
                            Kt.has(Vt.package_item.packageid)) ||
                          (Vt.bundle_item && He.has(Vt.bundle_item.bundleid)),
                      )
                      ?.map((Vt) => Vt.gidlineitem) || []),
                    Xt(ur, a, Pt(It));
                } else throw `AddItemsToAnonymousCart failed with ${xt}`;
              } else throw "Invalid cart type";
              return zr;
            },
            onMutate: () => {
              (async () => {
                const zr = k.map((Ar) =>
                  Ar.packageid
                    ? { packageid: Ar.packageid }
                    : { bundleid: Ar.bundleid },
                );
                (
                  await Promise.all(
                    zr.map((Ar) => ur.fetchQuery((0, U.us)(Fr, Ar))),
                  )
                ).forEach((Ar, xt) => {
                  const It =
                    Ar?.included_appids?.length == 1
                      ? { appid: Ar.included_appids[0] }
                      : zr[xt];
                  ur.prefetchQuery((0, U.AQ)(Fr, It)),
                    ur.prefetchQuery((0, U.rK)(Fr, It));
                });
              })();
            },
          });
        }
        var Lt = t(3367);
        function Oe(k) {
          const {
              storeItem: r,
              feature: a,
              depth: h,
              children: ur,
              noImpressionTracking: pr,
              ...Fr
            } = k,
            lt = r?.appid,
            jr = ye(r);
          if (!r) return ur;
          const zr = jsx(FocusableAnchor, { ...Fr, href: jr, children: ur });
          return lt && !pr
            ? jsx(ImpressionTrackedElement, {
                appID: lt,
                feature: a,
                depth: h,
                children: zr,
              })
            : zr;
        }
        function ye(k, r, a) {
          return (0, w.aL)(
            k ? `${or.TS.STORE_BASE_URL}${k.store_url_path}` : void 0,
            r,
            a,
          );
        }
        var Te = t(24179),
          Ue = t(83482);
        class ot extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ot.prototype.packageid || e.Sg(ot.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    packageid: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    country_code: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = e.w0(ot.M())), ot.sm_mbf;
          }
          toObject(r = !1) {
            return ot.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(ot.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ot.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new ot();
            return ot.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ot.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ot.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
          }
        }
        class ct extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ct.prototype.inventory_available || e.Sg(ct.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    inventory_available: {
                      n: 1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    high_pending_orders: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = e.w0(ct.M())), ct.sm_mbf;
          }
          toObject(r = !1) {
            return ct.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(ct.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ct.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              h = new ct();
            return ct.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ct.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ct.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
          }
        }
        var Me;
        ((k) => {
          function r(a, h, ur) {
            return a.SendMsg(
              "PhysicalGoods.CheckInventoryAvailableByPackage#1",
              (0, v.I8)(ot, h, ur),
              ct,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          k.CheckInventoryAvailableByPackage = r;
        })(Me || (Me = {}));
        var Pe = t(20194),
          Ie = t(69561),
          Fe = t(98609);
        const Ee = { high_pending_orders: !1, inventory_available: !0 };
        function ke(k) {
          const r = (0, x.rW)(),
            { data: a } = (0, U.J$)(k),
            h = (0, Pe.I)({
              queryKey: [
                a?.id || Ie.sc,
                a?.type || "invalid",
                a?.item_type || "invalid",
              ],
              queryFn: () => Ne(a, r),
              enabled: !!(a && a.type === Lt.uE.Hk),
            });
          return h.isLoading ? null : h.data;
        }
        async function Ne(k, r) {
          if (!k || k.item_type !== Lt.c6.RD || k.type !== Lt.uE.Hk) return Ee;
          const a = v.w.Init(ot);
          a.Body().set_packageid(k.id || 0),
            a.Body().set_country_code(Fe.iA.country_code);
          const h = await Me.CheckInventoryAvailableByPackage(r, a);
          if (h.GetEResult() !== m.R)
            throw (
              (console.error(
                "Received error from FetchPhysicalGoodsStock",
                h.GetEResult(),
              ),
              new Error(
                `Error from FetchPhysicalGoodsStock: ${h.GetEResult()}`,
              ))
            );
          return h.Body().toObject();
        }
        var je = t(53107),
          le = t(36707),
          ge = t(3166),
          Le = t(85599),
          Ze = t(95706),
          ce = t.n(Ze),
          At = t(39905);
        function De(k) {
          const { id: r, className: a } = k,
            h = (0, w.n9)(),
            { data: ur } = (0, U.J$)(r),
            { data: pr } = (0, U.by)(r),
            { data: Fr } = (0, U.EO)(r),
            lt = ke(r),
            { bIsOwned: jr } = (0, Te.ZJ)(r),
            zr = ye(ur),
            fr = (0, yt.useCallback)(() => {
              if (ur) {
                let xt = ur.appid;
                ur.related_items?.parent_appid &&
                  ur.type != Lt.uE.Ov &&
                  (xt = ur.related_items.parent_appid),
                  (0, je.Id)(window, `steam://run/${xt}`);
              }
            }, [ur]);
          if (!ur || !pr || !Fr || ur.type == Lt.uE.gQ) return null;
          const Ar =
            ur.is_free ||
            (Fr.final_price_in_cents != null &&
              Fr.final_price_in_cents == "0") ||
            (Fr.discount_pct && Fr.discount_pct >= 100);
          if (ur.item_type == Lt.c6.RD) {
            if (ur.type == Lt.uE.Hk)
              if (lt) {
                if (!lt.inventory_available)
                  return (0, n.jsx)("div", {
                    className: (0, le.A)(ce().ActionOutOfStock, a),
                    children: (0, n.jsxs)("span", {
                      children: [" ", At.Z.Localize("#Sale_ReserveExhausted")],
                    }),
                  });
              } else
                return (0, n.jsx)(Le.t, { size: "small", position: "center" });
            else if (Ar && ur.included_appids && ur.included_appids.length > 1)
              return null;
          }
          if (ur.item_type == Lt.c6.qI) {
            if (
              (pr.is_coming_soon && !Fr.packageid) ||
              (jr && ur.type === Lt.uE.Hk)
            )
              return null;
            if (!jr && Fr.is_free_to_keep)
              if (ge.TS.IN_CLIENT || (0, ge.yK)() != "store") {
                const xt = `${ge.TS.IN_CLIENT ? "steam://openurl/" : ""}${zr}`;
                return (0, n.jsx)("div", {
                  onClick: (It) => (0, je.Id)(It, xt),
                  className: (0, le.A)(ce().Action, a),
                  children: (0, n.jsx)("span", {
                    children: At.Z.Localize(
                      "#EventDisplay_CallToAction_VisitStore",
                    ),
                  }),
                });
              } else {
                const xt = (0, Ue.wJ)(
                  `${ge.TS.STORE_BASE_URL}freelicense/addfreelicense`,
                  h,
                );
                return (0, n.jsxs)("form", {
                  action: xt,
                  method: "POST",
                  children: [
                    (0, n.jsx)("input", {
                      type: "hidden",
                      name: "subid",
                      value: Fr.packageid,
                    }),
                    (0, n.jsx)("input", {
                      type: "hidden",
                      name: "sessionid",
                      value: (0, ge.KC)(),
                    }),
                    (0, n.jsx)("button", {
                      className: (0, le.A)(ce().Action, a),
                      type: "submit",
                      children: At.Z.Localize(
                        "#EventDisplay_CallToAction_AddToAccount",
                      ),
                    }),
                  ],
                });
              }
            if ((jr || Ar) && !ur.is_coming_soon) {
              let xt = At.Z.Localize(
                "#EventDisplay_CallToAction_PlayNowForFree",
              );
              return (
                jr
                  ? (xt = At.Z.Localize("#EventDisplay_CallToAction_PlayNow"))
                  : ur.is_free_temporarily &&
                    (xt = At.Z.Localize(
                      "#EventDisplay_CallToAction_AddToAccount",
                    )),
                (0, n.jsx)("div", {
                  className: (0, le.A)(ce().Action, a),
                  onClick: fr,
                  children: (0, n.jsx)("span", { children: xt }),
                })
              );
            }
            if (Fr.formatted_final_price == "")
              return (0, n.jsx)("a", {
                href: zr,
                className: (0, le.A)(ce().Action, a),
                children: At.Z.Localize(
                  "#EventDisplay_CallToAction_VisitStore",
                ),
              });
          }
          return (0, n.jsx)(Ke, {
            className: a,
            storeItemBestPurchaseOption: Fr,
            storeItemDefaultData: ur,
          });
        }
        function Ke(k) {
          const {
              className: r,
              storeItemBestPurchaseOption: a,
              storeItemDefaultData: h,
            } = k,
            ur = (0, w.n9)(),
            { mutate: pr } = kt(
              a?.packageid,
              a?.bundleid,
              !1,
              void 0,
              ur.feature,
            );
          return (0, n.jsx)("div", {
            className: (0, le.A)(ce().Action, r),
            onClick: () => pr(),
            children: (0, n.jsx)("span", {
              children: At.Z.Localize("#Store_AddToCart"),
            }),
          });
        }
      },
      68260: (V, Y, t) => {
        "use strict";
        t.d(Y, { j: () => xi });
        var n = t(7850),
          m = t(72609),
          s = t(3367),
          x = t(40358),
          z = t(13977),
          U = t(71421),
          w = t(36707),
          O = t(26591),
          I = t(72365),
          g = t.n(I),
          T = t(13620),
          d = t(99412),
          M = t(64868),
          B = t(66243),
          P = t(29522),
          F = t(24179),
          v = t(20125),
          c = t(90626);
        const l = null,
          e = -700,
          H = null,
          o = null,
          y = null,
          G = null,
          C = null,
          j = null,
          L = null,
          dr = null,
          xr = null,
          kr = null,
          Lr = null,
          Vr = null,
          Mr = null,
          E = null,
          $ = null,
          K = null,
          S = -600,
          D = -599,
          b = -598,
          W = -597,
          N = -596,
          A = -595,
          tr = -594,
          ir = -593,
          cr = -592,
          wr = -591,
          Or = -590,
          Rr = -589,
          Wt = -588,
          Zr = -587,
          Kr = -586,
          Yr = -585,
          X = -584,
          R = -583,
          er = -582,
          gr = -581,
          rr = -580,
          Br = -579,
          mr = -578,
          yr = -577,
          sr = -576,
          nr = -575,
          Ur = -574,
          $r = -573,
          Gr = -572,
          Jr = -571,
          qr = null,
          Cr = -500,
          Hr = -499,
          rt = -498,
          tt = -497,
          Xr = -496,
          et = null,
          nt = null,
          it = -300,
          at = -203,
          _r = -202,
          st = -201,
          J = -200,
          Q = -199,
          q = -198,
          or = -197,
          br = -196,
          Tr = -195,
          vr = -194,
          Nr = -193,
          ht = -192,
          Nt = -191,
          Ft = -190,
          Zt = -189,
          Ut = -188,
          $t = -187,
          Pt = -186,
          ie = -185,
          ue = -184,
          de = -183,
          ae = -182,
          yt = null,
          Gt = -102,
          se = -101,
          ne = -100,
          me = -99,
          pt = null,
          oe = null,
          fe = null,
          Yt = -95,
          Jt = -94,
          Xt = -93,
          kt = -92,
          Se = null,
          Lt = -90,
          Oe = -89,
          ye = -88,
          Te = -87,
          Ue = -86,
          ot = -85,
          ct = -84,
          Me = -83,
          Pe = -82,
          Ie = -81,
          Fe = -80,
          Ee = -79,
          ke = -75,
          Ne = -74,
          je = -70,
          le = -69,
          ge = -68,
          Le = -67,
          Ze = null,
          ce = -1,
          At = 0,
          De = 1,
          Ke = 2,
          k = 3,
          r = 4,
          a = 5,
          h = 6,
          ur = 7,
          pr = 8,
          Fr = 9,
          lt = 10,
          jr = 11,
          zr = 12,
          fr = 13,
          Ar = 14,
          xt = 15,
          It = 16,
          Kt = 17,
          He = 18,
          $e = 19,
          Vt = 20,
          ni = 21,
          Pi = 32;
        function pe(Z) {
          switch (Z) {
            case At:
              return "Windows";
            case De:
              return "Windows 3.11";
            case Ke:
              return "Windows 95";
            case k:
              return "Windows 98";
            case r:
              return "Windows ME";
            case a:
              return "Windows NT";
            case h:
              return "Windows 2000";
            case ur:
              return "Windows XP";
            case pr:
              return "Windows 2003";
            case Fr:
              return "Windows Vista";
            case lt:
              return "Windows 7";
            case jr:
              return "Windows 2008";
            case zr:
              return "Windows 2012";
            case xt:
              return "Windows 2012 R2";
            case fr:
              return "Windows 8";
            case Ar:
              return "Windows 8.1";
            case It:
              return "Windows 10";
            case Kt:
              return "Windows 2016";
            case He:
              return "Windows 2019";
            case $e:
              return "Windows 2022";
            case Vt:
              return "Windows 11";
            case Gt:
              return "Mac OS";
            case se:
              return "MacOS 10.4";
            case ne:
              return "MacOS 10.5";
            case me:
              return "MacOS 10.5.8";
            case Yt:
              return "MacOS 10.6";
            case Jt:
              return "MacOS 10.6.3";
            case Xt:
              return "MacOS 10.6.4 with Apple's Snow Leopard Graphics Update";
            case kt:
              return "MacOS 10.6.7";
            case Lt:
              return "MacOS 10.7";
            case Oe:
              return "MacOS 10.8";
            case ye:
              return "MacOS 10.9";
            case Te:
              return "MacOS 10.10";
            case Ue:
              return "MacOS 10.11";
            case ot:
              return "MacOS 10.12";
            case ct:
              return "MacOS 10.13";
            case Me:
              return "MacOS 10.14";
            case Pe:
              return "MacOS 10.15";
            case Ie:
              return "MacOS 11 (as 10.16)";
            case ke:
              return "MacOS 12 (as 10.17)";
            case je:
              return "MacOS 13 (as 10.18)";
            case Fe:
              return "MacOS 11";
            case Ee:
              return "MacOS 11.1";
            case Ne:
              return "MacOS 12";
            case le:
              return "MacOS 13";
            case ge:
              return "MacOS 14";
            case Le:
              return "MacOS 15";
            case at:
              return "Linux";
            case _r:
              return "Linux 2.2";
            case st:
              return "Linux 2.4";
            case J:
              return "Linux 2.6";
            case Q:
              return "Linux 3.2";
            case q:
              return "Linux 3.5";
            case or:
              return "Linux 3.6";
            case br:
              return "Linux 3.10";
            case Tr:
              return "Linux 3.16";
            case vr:
              return "Linux 3.18";
            case Nr:
              return "Linux 3.x";
            case Nt:
              return "Linux 4.1";
            case Ft:
              return "Linux 4.4";
            case Zt:
              return "Linux 4.9";
            case Ut:
              return "Linux 4.14";
            case $t:
              return "Linux 4.19";
            case ht:
              return "Linux 4.x";
            case Pt:
              return "Linux 5.x";
            case ie:
              return "Linux 5.4";
            case ue:
              return "Linux 6.x";
            case de:
              return "Linux 7.x";
            case ae:
              return "Linux 5.10";
            case it:
              return "PS3";
            case e:
              return "Web Client";
            case Cr:
              return "Android";
            case Hr:
              return "Android 6.x";
            case rt:
              return "Android 7.x";
            case tt:
              return "Android 8.x";
            case Xr:
              return "Android 9.x";
            case S:
              return "iOS";
            case D:
              return "iOS 1";
            case b:
              return "iOS 2";
            case W:
              return "iOS 3";
            case N:
              return "iOS 4";
            case A:
              return "iOS 5";
            case tr:
              return "iOS 6";
            case ir:
              return "iOS 6.1";
            case cr:
              return "iOS 7";
            case wr:
              return "iOS 7.1";
            case Or:
              return "iOS 8";
            case Rr:
              return "iOS 8.1";
            case Wt:
              return "iOS 8.2";
            case Zr:
              return "iOS 8.3";
            case Kr:
              return "iOS 8.4";
            case Yr:
              return "iOS 9";
            case X:
              return "iOS 9.1";
            case R:
              return "iOS 9.2";
            case er:
              return "iOS 9_.3";
            case gr:
              return "iOS 10";
            case rr:
              return "iOS 10.1";
            case Br:
              return "iOS 10.2";
            case mr:
              return "iOS 10.3";
            case yr:
              return "iOS 11";
            case sr:
              return "iOS 11.1";
            case nr:
              return "iOS 11.2";
            case Ur:
              return "iOS 11.3";
            case $r:
              return "iOS 11.4";
            case Gr:
              return "iOS 12";
            case Jr:
              return "iOS 12.1";
            default:
            case ce:
              return "Unknown";
          }
        }
        var oi = ((Z) => (
            (Z[(Z.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown"),
            (Z[(Z.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32"),
            (Z[(Z.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64"),
            (Z[(Z.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64"),
            (Z[(Z.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX"),
            (Z[(Z.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3"),
            (Z[(Z.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32"),
            (Z[(Z.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32"),
            (Z[(Z.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64"),
            (Z[(Z.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32"),
            (Z[(Z.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64"),
            (Z[(Z.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS"),
            (Z[(Z.k_EPlatformTypeEmbeddedClient = 12)] =
              "k_EPlatformTypeEmbeddedClient"),
            (Z[(Z.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser"),
            (Z[(Z.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax"),
            Z
          ))(oi || {}),
          Ye = t(20194),
          Je = t(54806),
          Xe = t(75233),
          li = t(51614),
          we = t(72604),
          be = t(42993),
          Qt = t(35038),
          We = t(68312),
          Ii = t(33512),
          Sr = t(80613),
          _ = t.n(Sr),
          u = t(75245);
        class Mt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Mt.prototype.client_instanceid || u.Sg(Mt.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = u.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(i = !1) {
            return Mt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(Mt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(Mt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new Mt();
            return Mt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(Mt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(Mt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Request";
          }
        }
        class wt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              wt.prototype.protocol_version || u.Sg(wt.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    protocol_version: {
                      n: 1,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    os: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    machine_name: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = u.w0(wt.M())), wt.sm_mbf;
          }
          toObject(i = !1) {
            return wt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(wt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(wt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new wt();
            return wt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(wt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(wt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Response";
          }
        }
        class Rt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Rt.toObject(i, this);
          }
          static toObject(i, f) {
            return i ? { $jspbMessageInstance: f } : {};
          }
          static fromObject(i) {
            return new Rt();
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new Rt();
            return Rt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return i;
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {}
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Request";
          }
        }
        class bt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              bt.prototype.sessions || u.Sg(bt.M()),
              Sr.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    sessions: { n: 1, c: ut, r: !0, q: !0 },
                    refetch_interval_sec: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = u.w0(bt.M())), bt.sm_mbf;
          }
          toObject(i = !1) {
            return bt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(bt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(bt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new bt();
            return bt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(bt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(bt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response";
          }
        }
        class ut extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ut.prototype.client_instanceid || u.Sg(ut.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    protocol_version: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    os_name: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    machine_name: {
                      n: 4,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    os_type: { n: 5, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                    device_type: {
                      n: 6,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    realm: { n: 7, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = u.w0(ut.M())), ut.sm_mbf;
          }
          toObject(i = !1) {
            return ut.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(ut.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(ut.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new ut();
            return ut.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(ut.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(ut.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response_Session";
          }
        }
        class vt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              vt.prototype.client_instanceid || u.Sg(vt.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = u.w0(vt.M())), vt.sm_mbf;
          }
          toObject(i = !1) {
            return vt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(vt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(vt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new vt();
            return vt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(vt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(vt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Request";
          }
        }
        class dt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              dt.prototype.package_version || u.Sg(dt.M()),
              Sr.Message.initialize(this, i, 0, -1, [7, 10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    package_version: {
                      n: 1,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    os: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    machine_name: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    ip_public: {
                      n: 4,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    ip_private: {
                      n: 5,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    bytes_available: {
                      n: 6,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    running_games: { n: 7, c: zt, r: !0, q: !0 },
                    protocol_version: {
                      n: 8,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    clientcomm_version: {
                      n: 9,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    local_users: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: u.qM.readUint32,
                      pbr: u.qM.readPackedUint32,
                      bw: u.gp.writeRepeatedUint32,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = u.w0(dt.M())), dt.sm_mbf;
          }
          toObject(i = !1) {
            return dt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(dt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(dt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new dt();
            return dt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(dt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(dt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData";
          }
        }
        class zt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              zt.prototype.appid || u.Sg(zt.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    extra_info: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    time_running_sec: {
                      n: 3,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = u.w0(zt.M())), zt.sm_mbf;
          }
          toObject(i = !1) {
            return zt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(zt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(zt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new zt();
            return zt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(zt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(zt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData_RunningGames";
          }
        }
        class St extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              St.prototype.client_info || u.Sg(St.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: { client_info: { n: 1, c: dt } },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = u.w0(St.M())), St.sm_mbf;
          }
          toObject(i = !1) {
            return St.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(St.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(St.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new St();
            return St.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(St.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return St.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(St.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Response";
          }
        }
        class mt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              mt.prototype.fields || u.Sg(mt.M()),
              Sr.Message.initialize(this, i, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    fields: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                    filters: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    client_instanceid: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    include_client_info: {
                      n: 4,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    filter_appids: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: u.qM.readUint32,
                      pbr: u.qM.readPackedUint32,
                      bw: u.gp.writeRepeatedUint32,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = u.w0(mt.M())), mt.sm_mbf;
          }
          toObject(i = !1) {
            return mt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(mt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(mt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new mt();
            return mt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(mt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(mt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Request";
          }
        }
        class ft extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ft.prototype.bytes_available || u.Sg(ft.M()),
              Sr.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    bytes_available: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    apps: { n: 2, c: Ot, r: !0, q: !0 },
                    client_info: { n: 3, c: dt },
                    refetch_interval_sec_full: {
                      n: 4,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    refetch_interval_sec_changing: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    refetch_interval_sec_updating: {
                      n: 6,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = u.w0(ft.M())), ft.sm_mbf;
          }
          toObject(i = !1) {
            return ft.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(ft.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(ft.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new ft();
            return ft.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(ft.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(ft.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response";
          }
        }
        class Ot extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ot.prototype.appid || u.Sg(Ot.M()),
              Sr.Message.initialize(this, i, 0, -1, [17], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    app: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    category: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    app_type: {
                      n: 4,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    num_downloading: {
                      n: 8,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    bytes_download_rate: {
                      n: 11,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    bytes_downloaded: {
                      n: 12,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    bytes_to_download: {
                      n: 13,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    dlcs: { n: 17, c: Tt, r: !0, q: !0 },
                    favorite: { n: 18, br: u.qM.readBool, bw: u.gp.writeBool },
                    auto_update: {
                      n: 19,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    installed: { n: 20, br: u.qM.readBool, bw: u.gp.writeBool },
                    download_paused: {
                      n: 21,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    changing: { n: 22, br: u.qM.readBool, bw: u.gp.writeBool },
                    available_on_platform: {
                      n: 23,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    bytes_staged: {
                      n: 24,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    bytes_to_stage: {
                      n: 25,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    bytes_required: {
                      n: 26,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    source_buildid: {
                      n: 27,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    target_buildid: {
                      n: 28,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    estimated_seconds_remaining: {
                      n: 29,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    queue_position: {
                      n: 30,
                      d: -1,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    uninstalling: {
                      n: 31,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    rt_time_scheduled: {
                      n: 32,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    running: { n: 33, br: u.qM.readBool, bw: u.gp.writeBool },
                    update_percentage: {
                      n: 34,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = u.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(i = !1) {
            return Ot.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(Ot.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(Ot.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new Ot();
            return Ot.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(Ot.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(Ot.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData";
          }
        }
        class Tt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Tt.prototype.appid || u.Sg(Tt.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    app: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    installed: {
                      n: 3,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = u.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(i = !1) {
            return Tt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(Tt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(Tt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new Tt();
            return Tt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(Tt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(Tt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData_DLCData";
          }
        }
        class gt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              gt.prototype.appid || u.Sg(gt.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 2,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = u.w0(gt.M())), gt.sm_mbf;
          }
          toObject(i = !1) {
            return gt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(gt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(gt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new gt();
            return gt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(gt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(gt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Request";
          }
        }
        class qt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return qt.toObject(i, this);
          }
          static toObject(i, f) {
            return i ? { $jspbMessageInstance: f } : {};
          }
          static fromObject(i) {
            return new qt();
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new qt();
            return qt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return i;
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {}
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Response";
          }
        }
        class Bt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Bt.prototype.appid || u.Sg(Bt.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 2,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = u.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(i = !1) {
            return Bt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(Bt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(Bt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new Bt();
            return Bt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(Bt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(Bt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Request";
          }
        }
        class _t extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return _t.toObject(i, this);
          }
          static toObject(i, f) {
            return i ? { $jspbMessageInstance: f } : {};
          }
          static fromObject(i) {
            return new _t();
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new _t();
            return _t.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return i;
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {}
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Response";
          }
        }
        class Et extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Et.prototype.appid || u.Sg(Et.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    action: {
                      n: 2,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = u.w0(Et.M())), Et.sm_mbf;
          }
          toObject(i = !1) {
            return Et.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(Et.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(Et.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new Et();
            return Et.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(Et.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(Et.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Request";
          }
        }
        class jt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              jt.prototype.client_instanceid || u.Sg(jt.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    appid: {
                      n: 2,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    query_params: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = u.w0(jt.M())), jt.sm_mbf;
          }
          toObject(i = !1) {
            return jt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(jt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(jt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new jt();
            return jt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(jt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(jt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Request";
          }
        }
        class Ct extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Ct.toObject(i, this);
          }
          static toObject(i, f) {
            return i ? { $jspbMessageInstance: f } : {};
          }
          static fromObject(i) {
            return new Ct();
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new Ct();
            return Ct.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return i;
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {}
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Response";
          }
        }
        class re extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return re.toObject(i, this);
          }
          static toObject(i, f) {
            return i ? { $jspbMessageInstance: f } : {};
          }
          static fromObject(i) {
            return new re();
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new re();
            return re.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return i;
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return re.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {}
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Response";
          }
        }
        class Dt extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Dt.prototype.client_instanceid || u.Sg(Dt.M()),
              Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    enable: { n: 2, br: u.qM.readBool, bw: u.gp.writeBool },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = u.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(i = !1) {
            return Dt.toObject(i, this);
          }
          static toObject(i, f) {
            return u.BT(Dt.M(), i, f);
          }
          static fromObject(i) {
            return u.Uq(Dt.M(), i);
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new Dt();
            return Dt.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return u.zj(Dt.MBF(), i, f);
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {
            u.i0(Dt.M(), i, f);
          }
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Request";
          }
        }
        class te extends Sr.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Sr.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return te.toObject(i, this);
          }
          static toObject(i, f) {
            return i ? { $jspbMessageInstance: f } : {};
          }
          static fromObject(i) {
            return new te();
          }
          static deserializeBinary(i) {
            let f = new (_().BinaryReader)(i),
              p = new te();
            return te.deserializeBinaryFromReader(p, f);
          }
          static deserializeBinaryFromReader(i, f) {
            return i;
          }
          serializeBinary() {
            var i = new (_().BinaryWriter)();
            return te.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, f) {}
          serializeBase64String() {
            var i = new (_().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Response";
          }
        }
        var ve;
        ((Z) => {
          function i(hr, Er, Qr) {
            return hr.SendMsg(
              "ClientComm.GetClientLogonInfo#1",
              (0, Qt.I8)(Mt, Er, Qr),
              wt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Z.GetClientLogonInfo = i;
          function f(hr, Er, Qr) {
            return hr.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, Qt.I8)(Rt, Er, Qr),
              bt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Z.GetAllClientLogonInfo = f;
          function p(hr, Er, Qr) {
            return hr.SendMsg(
              "ClientComm.GetClientInfo#1",
              (0, Qt.I8)(vt, Er, Qr),
              St,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Z.GetClientInfo = p;
          function ar(hr, Er, Qr) {
            return hr.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, Qt.I8)(mt, Er, Qr),
              ft,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Z.GetClientAppList = ar;
          function lr(hr, Er, Qr) {
            return hr.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, Qt.I8)(gt, Er, Qr),
              qt,
              { ePrivilege: 1 },
            );
          }
          Z.InstallClientApp = lr;
          function Dr(hr, Er, Qr) {
            return hr.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, Qt.I8)(Bt, Er, Qr),
              _t,
              { ePrivilege: 1 },
            );
          }
          Z.UninstallClientApp = Dr;
          function Pr(hr, Er, Qr) {
            return hr.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, Qt.I8)(jt, Er, Qr),
              Ct,
              { ePrivilege: 1 },
            );
          }
          Z.LaunchClientApp = Pr;
          function Wr(hr, Er, Qr) {
            return hr.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, Qt.I8)(Et, Er, Qr),
              re,
              { ePrivilege: 1 },
            );
          }
          Z.SetClientAppUpdateState = Wr;
          function Ir(hr, Er, Qr) {
            return hr.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, Qt.I8)(Dt, Er, Qr),
              te,
              { ePrivilege: 1 },
            );
          }
          Z.EnableOrDisableDownloads = Ir;
        })(ve || (ve = {}));
        const Ae = "RemoteDownload_OnlineClient",
          ci = "RemoteDownload_ClientAppList",
          Ve = "RemoteDownload_ClientAppData",
          ui = "RemoteDownload_PatchNotes";
        class Re extends Error {
          constructor(i, f) {
            super(i), (this.result = f);
          }
          result;
        }
        function Ge() {
          const Z = (0, We.KV)(),
            i = (0, be.LH)();
          return (0, Ye.I)({
            queryKey: [Ae, i],
            queryFn: async () => {
              const p = Qt.w.Init(Rt),
                ar = await ve.GetAllClientLogonInfo(Z, p);
              if (ar.GetEResult() !== we.R)
                throw (
                  (console.error(
                    "Received error from GetAllClientLogonInfo",
                    ar.GetEResult(),
                    ar.Hdr().transport_error(),
                  ),
                  new Error(
                    `Error from GetAllClientLogonInfo: ${ar.GetEResult()}`,
                  ))
                );
              const lr = [];
              for (const Dr of ar.Body().sessions())
                Dr.device_type() !== d.eSB && lr.push(Dr.toObject());
              return {
                sessions: lr,
                refetchInterval: ar.Body().refetch_interval_sec() || 300,
              };
            },
            staleTime: 300 * 1e3,
            refetchInterval: (p) =>
              (p.state.data?.refetchInterval || 300) * 1e3,
          });
        }
        class di {
          constructor(i) {
            Object.assign(this, i.toObject()),
              (this.bytes_to_download = parseInt(i.bytes_to_download() ?? "0")),
              (this.bytes_downloaded = parseInt(i.bytes_downloaded() ?? "0")),
              (this.bytes_staged = parseInt(i.bytes_staged() ?? "0")),
              (this.bytes_to_stage = parseInt(i.bytes_to_stage() ?? "0")),
              (this.bytes_required = parseInt(i.bytes_required() ?? "0"));
          }
          appid;
          app;
          category;
          app_type;
          num_downloading;
          bytes_download_rate;
          bytes_downloaded;
          bytes_to_download;
          favorite;
          auto_update;
          installed;
          download_paused;
          changing;
          available_on_platform;
          bytes_staged;
          bytes_to_stage;
          bytes_required;
          source_buildid;
          target_buildid;
          estimated_seconds_remaining;
          queue_position;
          uninstalling;
          rt_time_scheduled;
          update_percentage;
          BIsDownloading() {
            return this.num_downloading !== void 0 && this.num_downloading > 0;
          }
          SetDownloading() {
            (this.num_downloading = 1), (this.download_paused = !1);
          }
          SetPaused(i) {
            (this.download_paused = i), (this.num_downloading = i ? 0 : 1);
          }
          BIsAtTopOfQueue() {
            return this.queue_position === 0;
          }
          BIsPaused() {
            return (
              !!this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage ||
                this.queue_position != -1)
            );
          }
          BHasPendingUpdate() {
            return (
              !this.BIsDownloading() &&
              !this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage)
            );
          }
          GetPercentComplete() {
            return this.update_percentage
              ? this.update_percentage
              : this.bytes_to_download
                ? Math.floor(
                    (this.bytes_downloaded * 100) / this.bytes_to_download,
                  )
                : 0;
          }
        }
        async function qe(Z, i, f) {
          const p = i.client_instanceid,
            ar = Qt.w.Init(mt);
          ar.Body().set_fields("games"),
            ar.Body().set_filters(f),
            ar.Body().set_client_instanceid(p),
            ar.Body().set_include_client_info(!0);
          const lr = await ve.GetClientAppList(Z, ar);
          if (lr.GetEResult() !== we.R)
            throw (
              (console.error(
                "Received error from GetClientAppList",
                lr.GetEResult(),
                lr.Hdr().transport_error(),
              ),
              new Re(
                `Error from GetClientAppList: ${lr.GetEResult()}`,
                lr.GetEResult(),
              ))
            );
          const Dr = new Map();
          for (const Pr of lr.Body().apps()) {
            const Wr = new di(Pr);
            Dr.set(Pr.appid(), Wr);
          }
          return {
            session: i,
            mapApps: Dr,
            clientInfo: lr.Body().client_info()?.toObject(),
            refetchIntervals: {
              full: lr.Body().refetch_interval_sec_full() || 3600,
              changing: lr.Body().refetch_interval_sec_changing() || 60,
              updating: lr.Body().refetch_interval_sec_updating() || 10,
            },
          };
        }
        async function mi(Z, i, f, p) {
          if (!p) return;
          const ar = await qe(Z, i, f);
          for (const [lr, Dr] of ar.mapApps) p.mapApps.set(lr, Dr);
          return { ...ar, mapApps: p.mapApps };
        }
        function he(Z, i, f) {
          return [ci, Z, i, f];
        }
        function _e(Z, i = !0) {
          const f = Ge(),
            p = (0, We.KV)(),
            ar = (0, be.LH)(),
            lr = (Er) => {
              i && (Er.result == we.Dy || Er.result == we._3) && f.refetch();
            },
            Dr = (0, Je.E)({
              queries: (f.data?.sessions || []).map((Er) => ({
                queryKey: he(ar, Er.client_instanceid, "none"),
                queryFn: async () => qe(p, Er, "none"),
                staletime: 3600 * 1e3,
                refetchInterval: (Qr) =>
                  (Qr.state.data?.refetchIntervals.full || 3600) * 1e3,
                enabled: f.isSuccess && !f.isFetching,
                onError: lr,
                retry: i,
              })),
            }),
            Pr = (0, c.useCallback)(
              (Er) => {
                if (!Z) return Er;
                const Qr = new Map(
                  Array.from(Er?.mapApps.entries() ?? []).filter(Z),
                );
                return { ...Er, mapApps: Qr };
              },
              [Z],
            ),
            Wr = (0, Xe.jE)(),
            Ir = (0, Je.E)({
              queries: (f.data?.sessions || []).map((Er, Qr) => ({
                queryKey: he(ar, Er.client_instanceid, "changing"),
                queryFn: async () => mi(p, Er, "changing", Dr[Qr].data),
                enabled: Dr[Qr].isSuccess && !Dr[Qr].isFetching,
                staletime: 10 * 1e3,
                select: Pr,
                refetchInterval: (Ui) => {
                  const Qe = Ui.state.data;
                  if (!Qe) return 60 * 1e3;
                  let ii = !1;
                  for (const si of Qe.mapApps.values())
                    if (si.BIsDownloading() || si.uninstalling) {
                      ii = !0;
                      break;
                    }
                  const ai = Qe.refetchIntervals;
                  return (ii ? ai.updating : ai.changing) * 1e3;
                },
                onError: lr,
                retry: i,
              })),
            }),
            hr = () => {
              for (const Er of f.data?.sessions || []) {
                const Qr = he(ar, Er.client_instanceid, "changing");
                Wr.removeQueries({ queryKey: Qr });
              }
              for (const Er of Dr) Er.refetch();
            };
          return {
            rgQueries: Ir.map((Er, Qr) =>
              Dr[Qr].isError && !Dr[Qr].isFetching ? Dr[Qr] : Er,
            ),
            refetch: hr,
          };
        }
        function Be(Z, i) {
          return [Ve, Z, i];
        }
        function xe(Z, i = !0) {
          const f = (0, be.LH)(),
            { rgQueries: p } = _e(void 0, i);
          return (0, Ye.I)({
            queryKey: Be(f, Z),
            queryFn: () => {
              const ar = new Map();
              for (const lr of p)
                if (lr.isSuccess) {
                  const Dr = lr.data?.session?.client_instanceid,
                    Wr = lr.data?.mapApps?.get(Z);
                  Wr &&
                    ar.set(Dr, {
                      session: lr.data.session,
                      app: Wr,
                      clientInfo: lr.data.clientInfo,
                    });
                }
              return ar;
            },
            enabled: p.reduce(
              (ar, lr) => ar && lr.isSuccess && !lr.isFetching,
              !0,
            ),
            staleTime: 0,
            gcTime: 0,
          });
        }
        function Fi(Z, i, f) {
          const p = useActiveAccount(),
            ar = useActiveServiceTransport();
          return useQuery({
            queryKey: [ui, p, Z, i, f],
            queryFn: async () => {
              if (!i || !f || i == f) return {};
              const Dr = CProtoBufMsg.Init(
                  CClan_GetPartnerEventsByBuildIDRange_Request,
                ),
                Pr = Dr.Body().add_requests();
              Pr.set_appid(Z),
                Pr.set_start_build_id(i + 1),
                Dr.Body().set_count(100);
              const Wr = await ClanService.GetPartnerEventsByBuildIDRange(
                ar,
                Dr,
              );
              if (Wr.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from GetPartnerEventsByBuildIDRange",
                    Wr.GetEResult(),
                  ),
                  new Error(
                    `Error from GetPartnerEventsByBuildIDRange: ${Wr.GetEResult()}`,
                  ))
                );
              return {
                appid: Z,
                source_buildid: i,
                target_buildid: f,
                patch_notes: Wr.Body()
                  .toObject()
                  .matches?.sort((Ir, hr) => hr.build_id - Ir.build_id),
              };
            },
          });
        }
        function fi(Z, i, f) {
          const p = (0, We.KV)(),
            ar = xe(Z),
            lr = (0, be.LH)(),
            Dr = (0, Xe.jE)();
          return (0, li.n)({
            mutationFn: async () => {
              const Pr = Qt.w.Init(gt);
              Pr.Body().set_appid(Z), Pr.Body().set_client_instanceid(i);
              const Wr = await ve.InstallClientApp(p, Pr);
              if (Wr.GetEResult() != we.R)
                throw (
                  (console.error(
                    "Received error from InstallClientApp",
                    Wr.GetEResult(),
                  ),
                  new Error(`Error from InstallClientApp: ${Wr.GetEResult()}`))
                );
              const Ir = ar?.data;
              Ir && Ir.get(i) && Ir.get(i).app.SetDownloading(),
                Dr.setQueryData(Be(lr, Z), Ir),
                ar.refetch();
            },
            onSuccess: f,
          });
        }
        function ki(Z, i, f) {
          const p = useActiveServiceTransport(),
            ar = xe(Z),
            lr = useActiveAccount(),
            Dr = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const Pr = CProtoBufMsg.Init(
                CClientComm_UninstallClientApp_Request,
              );
              Pr.Body().set_appid(Z), Pr.Body().set_client_instanceid(i);
              const Wr = await ClientCommService.UninstallClientApp(p, Pr);
              if (Wr.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from UninstallClientApp",
                    Wr.GetEResult(),
                  ),
                  new Error(
                    `Error from UninstallClientApp: ${Wr.GetEResult()}`,
                  ))
                );
              const Ir = ar?.data;
              Ir && Ir.get(i) && (Ir.get(i).app.uninstalling = !0),
                Dr.setQueryData(Be(lr, Z), Ir),
                ar.refetch();
            },
            onSuccess: f,
          });
        }
        function Ni(Z, i, f) {
          const p = useActiveServiceTransport(),
            ar = xe(Z),
            lr = useActiveAccount(),
            Dr = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const Pr = ar?.data,
                Wr = Pr && Pr.get(i),
                Ir = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
              Ir.Body().set_appid(Z),
                Ir.Body().set_client_instanceid(i),
                Ir.Body().set_action(1);
              const hr = await ClientCommService.SetClientAppUpdateState(p, Ir);
              if (hr.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from SetClientAppUpdateState",
                    hr.GetEResult(),
                  ),
                  new Error(
                    `Error from SetClientAppUpdateState: ${hr.GetEResult()}`,
                  ))
                );
              Wr && Pr.get(i).app.SetDownloading(),
                Dr.setQueryData(Be(lr, Z), Pr),
                ar.refetch();
            },
            onSuccess: f,
          });
        }
        function Li(Z, i, f, p) {
          const ar = useActiveServiceTransport(),
            lr = xe(Z),
            Dr = useActiveAccount(),
            Pr = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const Wr = lr?.data,
                Ir = Wr && Wr.get(i);
              if (
                Ir?.clientInfo?.clientcomm_version &&
                Ir.clientInfo.clientcomm_version >= 1
              ) {
                const hr = CProtoBufMsg.Init(
                  CClientComm_EnableOrDisableDownloads_Request,
                );
                hr.Body().set_client_instanceid(i), hr.Body().set_enable(!f);
                const Er = await ClientCommService.EnableOrDisableDownloads(
                  ar,
                  hr,
                );
                if (Er.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from EnableOrDisableDownloads",
                      Er.GetEResult(),
                    ),
                    new Error(
                      `Error from EnableOrDisableDownloads: ${Er.GetEResult()}`,
                    ))
                  );
              } else {
                const hr = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
                hr.Body().set_appid(Z),
                  hr.Body().set_client_instanceid(i),
                  hr.Body().set_action(f ? 0 : 1);
                const Er = await ClientCommService.SetClientAppUpdateState(
                  ar,
                  hr,
                );
                if (Er.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from SetClientAppUpdateState",
                      Er.GetEResult(),
                    ),
                    new Error(
                      `Error from SetClientAppUpdateState: ${Er.GetEResult()}`,
                    ))
                  );
              }
              Ir && Wr.get(i)?.app.SetPaused(f),
                Pr.setQueryData(Be(Dr, Z), Wr),
                lr.refetch();
            },
            onSuccess: p,
          });
        }
        async function Ki(Z, i, f, p) {
          const ar = CProtoBufMsg.Init(CClientComm_LaunchClientApp_Request);
          ar.Body().set_appid(f),
            ar.Body().set_client_instanceid(i),
            ar.Body().set_query_params(p);
          const lr = await ClientCommService.LaunchClientApp(Z, ar);
          if (lr.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from LaunchClientApp",
                lr.GetEResult(),
                lr.Hdr().transport_error(),
              ),
              new Error(`Error from LaunchClientApp: ${lr.GetEResult()}`))
            );
        }
        var gi = t(25792),
          Bi = t(16346),
          Ht = t(18210),
          yi = t(99047),
          Mi = t(58579),
          Ce = t.n(Mi);
        const wi = {
          bFitToWindow: !0,
          bOverlapHorizontal: !0,
          bMatchWidth: !1,
          bShiftToFitWindow: !0,
          bDisablePopTop: !0,
        };
        function bi(Z) {
          const { setRemoteClientID: i, rgSessions: f } = Z,
            p = (0, c.useCallback)(
              (ar) => {
                f?.length &&
                  (0, Bi.lX)(
                    (0, n.jsx)(vi, {
                      sessions: f,
                      setRemoteDownloadClientId: i,
                    }),
                    ar,
                    wi,
                  );
              },
              [i, f],
            );
          return f?.length
            ? (0, n.jsx)("button", {
                onClick: p,
                className: Ce().ClientSelectDropdown,
                children: (0, n.jsx)(Si, {}),
              })
            : null;
        }
        function vi({ sessions: Z, setRemoteDownloadClientId: i }) {
          return (0, n.jsx)("ul", {
            className: Ce().ClientListDropdownMenu,
            children: Z.map((f) =>
              (0, n.jsx)(
                yi.kt,
                {
                  onSelected: () => {
                    i(f.client_instanceid);
                  },
                  children: (0, Ht.we)(
                    "#GamesList_Client_Indicator",
                    zi(f.device_type) ?? "",
                    f.machine_name,
                  ),
                },
                f.client_instanceid,
              ),
            ),
          });
        }
        function zi(Z) {
          switch (Z) {
            case d.g0U:
              return (0, Ht.we)("#Library_DeviceType_PC");
            case d.LS$:
              return (0, Ht.we)("#Library_DeviceType_SteamDeck");
            case d.bOm:
              return (0, Ht.we)("#Library_DeviceType_SteamMachine");
            case d.jYC:
              return (0, Ht.we)("#Library_DeviceType_SteamFrame");
            default:
              return;
          }
        }
        function Si(Z) {
          return (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 13 8",
            fill: "none",
            ...Z,
            children: (0, n.jsx)("path", {
              fill: "currentColor",
              d: "M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z",
            }),
          });
        }
        var ri = t(2801),
          Oi = t(36118),
          Ti = t(85599),
          ti = t(98609),
          Ei = t(39285),
          ee = t.n(Ei);
        function ji(Z) {
          const { appid: i } = Z,
            f = (0, P.$5)(i),
            { data: p } = (0, x.J$)(f),
            [ar, lr, Dr] = (0, M.uD)(!1),
            { mutateAsync: Pr } = (0, T.S)({ appid: i }),
            [Wr, Ir] = (0, c.useState)(!1),
            hr = (0, F.S6)(i);
          return !p || hr
            ? null
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)(B.sP, {
                    onClick: async () => {
                      try {
                        Ir(!0), await Pr(), (0, v.WZ)(), Ir(!1), lr();
                      } catch (Er) {
                        Ir(!1),
                          console.error(
                            "Error AddToLibraryActionWithRemoteInstall",
                            Er,
                          );
                      }
                    },
                    children: [
                      Wr && (0, n.jsx)(Ti.t, { size: "small" }),
                      (0, Ht.we)("#Sale_AddToLibrary_NoPlus"),
                    ],
                  }),
                  (0, n.jsx)(gi.tH, {
                    children: (0, n.jsx)(ri.EN, {
                      active: ar,
                      children: (0, n.jsx)(ri.o0, {
                        strTitle: (0, Ht.we)("#Sale_AddedToLibrary"),
                        strDescription: (0, Ht.PP)(
                          "#Sale_AddToLibrary_DialogDesc",
                          (0, n.jsx)("span", {
                            className: ee().GameName,
                            children: p.name || "",
                          }),
                        ),
                        closeModal: Dr,
                        bAlertDialog: !0,
                        children: (0, n.jsx)(ei, { id: f }),
                      }),
                    }),
                  }),
                ],
              });
        }
        function ei(Z) {
          const { id: i } = Z,
            f = Ge(),
            [p, ar] = (0, c.useState)(0),
            [lr, Dr] = (0, c.useState)(!1),
            { data: Pr } = (0, x.qI)(i);
          if (!i || !("appid" in i) || ti.TS.IN_CLIENT || !Pr) return null;
          const Wr = f.data?.sessions?.filter((Ir) => {
            switch (Ir.device_type) {
              default:
              case d.g0U:
                {
                  if (!Ir.os_type) return !1;
                  const hr = pe(Ir.os_type);
                  if (Pr.windows && hr.includes("Windows")) return !0;
                  if (Pr.mac && hr.includes("Mac")) return !0;
                  if (Pr.steamos_linux && hr.includes("Linux")) return !0;
                }
                break;
              case d.LS$:
                return Pr.windows || Pr.steamos_linux;
            }
            return !1;
          });
          if (Wr && Wr?.length > 0) {
            const Ir = Wr[p];
            return (0, n.jsx)("div", {
              className: ee().RemoteOptions,
              children: lr
                ? (0, n.jsx)(Wi, { session: Ir })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(Di, {
                        rgAcceptableSession: Wr,
                        session: Ir,
                        setSessionIndex: ar,
                      }),
                      (0, n.jsx)("div", {
                        className: ee().ActionRow,
                        children: (0, n.jsx)(hi, {
                          appid: i.appid,
                          session: Ir,
                          setRemoteDownloadRequested: Dr,
                        }),
                      }),
                    ],
                  }),
            });
          }
          return null;
        }
        function Di(Z) {
          const { rgAcceptableSession: i, session: f, setSessionIndex: p } = Z;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                children: (0, Ht.we)("#Sale_AddToLibrary_RemoteDownload"),
              }),
              (0, n.jsxs)("div", {
                className: ee().ClientSelector,
                children: [
                  (0, n.jsx)("span", {
                    className: ee().ClientName,
                    children: f.machine_name,
                  }),
                  (0, n.jsx)(bi, {
                    rgSessions: i,
                    setRemoteClientID: (ar) => {
                      const lr = i.findIndex(
                        (Dr) => Dr.client_instanceid === ar,
                      );
                      lr >= 0 && p(lr);
                    },
                  }),
                ],
              }),
            ],
          });
        }
        function Wi(Z) {
          const { session: i } = Z;
          return (0, n.jsxs)("div", {
            className: ee().DownloadStartedCtn,
            children: [
              (0, Ht.we)("#Sale_AddToLibrary_DownloadStarted"),
              (0, n.jsx)("br", {}),
              (0, n.jsx)("a", {
                href: `${ti.TS.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${i.client_instanceid}`,
                children: (0, Ht.we)("#Sale_AddToLibrary_SeeDownloadProgress"),
              }),
            ],
          });
        }
        function hi(Z) {
          const { appid: i, session: f, setRemoteDownloadRequested: p } = Z,
            ar = fi(i, f.client_instanceid);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(B.sP, {
                onClick: () => {
                  ar.mutateAsync(), p(!0);
                },
                children: [
                  (0, n.jsx)(Oi.f5X, {}),
                  (0, Ht.we)("#Button_StartDownload"),
                ],
              }),
              (0, n.jsx)("div", {
                className: ee().LearnMoreCtn,
                children: (0, n.jsx)("a", {
                  href: "https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409",
                  className: ee().InlineLink,
                  children: (0, Ht.we)("#Button_Learn"),
                }),
              }),
            ],
          });
        }
        var ze = t(39905);
        function xi(Z) {
          const { id: i, className: f } = Z,
            { data: p } = (0, x.J$)(i);
          if (!p) return null;
          const ar =
              p.related_items?.demo_appid && p.related_items.demo_appid
                ? p.related_items.demo_appid
                : [],
            lr = ar.length > 0,
            Dr = lr || p.type === s.uE.ue,
            Pr = Dr
              ? ze.Z.Localize("#Sale_InstallDemo_ttip", p.name || "")
              : lr
                ? ze.Z.Localize("#Sale_CannotInstallDemo_ttip", p.name || "")
                : ze.Z.Localize("#Loading");
          if (m.TS.IN_MOBILE_WEBVIEW) {
            if (Dr && lr) {
              const Wr = p.type === s.uE.ue ? p.appid : ar[0];
              return (0, n.jsx)("div", {
                className: f,
                children: (0, n.jsx)(ji, { appid: Wr }),
              });
            }
            return null;
          }
          return !Dr && lr && p.is_free
            ? (0, n.jsx)(O.h, { id: i, className: f })
            : (0, n.jsx)(U.he, {
                toolTipContent: Pr,
                onClick: (Wr) => {
                  Wr.preventDefault(),
                    Wr.stopPropagation(),
                    Dr &&
                      (0, z.o)(p.type === s.uE.ue ? p.appid : ar[0], p.name);
                },
                className: (0, w.A)(
                  f,
                  g().DemoButton,
                  !Dr && g().DisabledButton,
                ),
                children: Dr
                  ? ze.Z.Localize("#Sale_InstallDemo")
                  : ze.Z.Localize("#Sale_DemoNotFound"),
              });
        }
      },
      29245: (V, Y, t) => {
        "use strict";
        t.d(Y, { Q: () => I });
        var n = t(7850),
          m = t(39905),
          s = t(40358),
          x = t(76532),
          z = t.n(x),
          U = t(36118),
          w = t(36707),
          O = t(72609);
        function I(g) {
          const {
              id: T,
              strClassName: d,
              bMinimizePlatforms: M,
              bHideWindows: B,
            } = g,
            { data: P } = (0, s.qI)(T);
          if (!P) return null;
          if (M) {
            let F = B
              ? null
              : P?.windows &&
                (0, n.jsx)("span", {
                  title: m.Z.Localize("#Platform_Windows"),
                  children: (0, n.jsx)(U.Xz0, {
                    "aria-label": m.Z.Localize("#Platform_Windows"),
                  }),
                });
            return (
              O.TS.PLATFORM === "linux" && P?.steamos_linux
                ? (F = (0, n.jsx)("span", {
                    title: m.Z.Localize("#Platform_Linux"),
                    children: (0, n.jsx)(U.Qte, {
                      "aria-label": m.Z.Localize("#Platform_Linux"),
                    }),
                  }))
                : O.TS.PLATFORM === "macos" && P?.mac
                  ? (F = (0, n.jsx)("span", {
                      title: m.Z.Localize("#Platform_Mac"),
                      children: (0, n.jsx)(U.kPc, {
                        "aria-label": m.Z.Localize("#Platform_Mac"),
                      }),
                    }))
                  : P.vr_support?.vrhmd &&
                    (F = (0, n.jsx)("span", {
                      title: m.Z.Localize("#Platform_VR"),
                      children: (0, n.jsx)(U.VR, {
                        "aria-label": m.Z.Localize("#Platform_VR"),
                      }),
                    })),
              F
                ? (0, n.jsx)("span", {
                    className: (0, w.A)(z().CapsulePlatform, d),
                    children: F,
                  })
                : null
            );
          }
          return (0, n.jsxs)("span", {
            className: (0, w.A)(z().CapsulePlatform, d),
            children: [
              !B &&
                P.windows &&
                (0, n.jsx)("span", {
                  title: m.Z.Localize("#Platform_Windows"),
                  children: (0, n.jsx)(U.Xz0, {
                    "aria-label": m.Z.Localize("#Platform_Windows"),
                  }),
                }),
              P.mac &&
                (0, n.jsx)("span", {
                  title: m.Z.Localize("#Platform_Mac"),
                  children: (0, n.jsx)(U.kPc, {
                    "aria-label": m.Z.Localize("#Platform_Mac"),
                  }),
                }),
              P.steamos_linux &&
                (0, n.jsx)("span", {
                  title: m.Z.Localize("#Platform_Linux"),
                  children: (0, n.jsx)(U.Qte, {
                    "aria-label": m.Z.Localize("#Platform_Linux"),
                  }),
                }),
              P.vr_support?.vrhmd &&
                (0, n.jsx)("span", {
                  title: m.Z.Localize("#Platform_VR"),
                  children: (0, n.jsx)(U.VR, {
                    "aria-label": m.Z.Localize("#Platform_VR"),
                  }),
                }),
            ],
          });
        }
      },
      48357: (V, Y, t) => {
        "use strict";
        t.d(Y, { Bq: () => e, NF: () => c });
        var n = t(7850),
          m = t(3367),
          s = t(3348),
          x = t(81055),
          z = t(40358),
          U = t(11512),
          w = t(76532),
          O = t.n(w),
          I = t(36118),
          g = t(71421),
          T = t(36707),
          d = t(39905),
          M = t(74107),
          B = t(72609),
          P = t(33220),
          F = t(86681),
          v = t(1706);
        function c(H) {
          const { id: o, bSelfPurchaseOption: y } = H,
            { data: G } = (0, z.Q_)(o),
            { data: C } = (0, z.J$)(o);
          if (!C) return null;
          const j = y && C.item_type == m.c6.RD ? C.self_purchase_option : G;
          return (0, n.jsx)(l, { purchaseOption: j, ...H });
        }
        function l(H) {
          const {
              bSingleLineMode: o,
              onlyOneDiscountPct: y,
              id: G,
              purchaseOption: C,
              bHidePrePurchase: j,
              bHideReleaseDate: L,
              bHideIfDemo: dr,
              bPurchaseOptionDisplay: xr,
              strContainerClassName: kr,
              strDiscountAndPriceClassName: Lr,
              strPriceFormattedClassName: Vr,
              bPreferWholeNumbers: Mr,
              bSelfPurchaseOption: E,
              bHideNewTag: $,
            } = H,
            K = B.TS.NOW,
            { data: S } = (0, z.by)(G),
            { data: D } = (0, z.J$)(G);
          if (!D) return null;
          const b = C,
            W = !$ && (0, x.fk)(S, K),
            N = (0, T.A)({
              [O().StoreSalePriceWidgetContainer]: !0,
              [O().SingleLineMode]: o,
              StoreSalePriceWidgetContainer: !0,
              [O().NewItem]: W,
              [O().PurchaseOption]: xr,
              [kr ?? ""]: !!kr,
            });
          if (H.bShowInLibrary)
            return (0, n.jsx)("div", {
              className: N,
              children: (0, n.jsx)("div", {
                className: O().StoreSalePriceBox,
                children: d.Z.Localize("#EventDisplay_CallToAction_InLibrary"),
              }),
            });
          if (S && S.is_coming_soon && (!b || !b.packageid)) {
            if (L) return null;
            const wr =
              S.coming_soon_display &&
              ["text_comingsoon", "text_tba"].includes(S.coming_soon_display)
                ? (0, U.d)(S)
                : d.Z.Localize(
                    "#EventDisplay_CallToAction_ComingSoon_Date",
                    (0, s.CC)(S),
                  );
            return (0, n.jsx)("div", {
              className: N,
              children: (0, n.jsx)("div", {
                className: O().StoreSalePriceBox,
                children: wr,
              }),
            });
          }
          if (D.is_free)
            if (D.is_free_temporarily) {
              if (b && b.is_free_to_keep && !b.formatted_original_price)
                return (0, n.jsx)("div", {
                  className: N,
                  children: (0, n.jsx)("div", {
                    className: O().StoreSalePriceBox,
                    children: d.Z.Localize("#EventDisplay_CallToAction_Free"),
                  }),
                });
            } else
              return D.item_type == m.c6.qI && D.type == m.uE.ue
                ? dr
                  ? null
                  : (0, n.jsxs)("div", {
                      className: N,
                      children: [
                        W &&
                          (0, n.jsx)("div", {
                            className: O().StoreSaleNewItem,
                            children: d.Z.Localize("#Flag_New"),
                          }),
                        (0, n.jsx)("div", {
                          className: O().StoreSalePriceBox,
                          children: d.Z.Localize(
                            "#EventDisplay_CallToAction_FreeDemo",
                          ),
                        }),
                      ],
                    })
                : (0, n.jsxs)("div", {
                    className: N,
                    children: [
                      W &&
                        (0, n.jsx)("div", {
                          className: O().StoreSaleNewItem,
                          children: d.Z.Localize("#Flag_New"),
                        }),
                      (0, n.jsx)("div", {
                        className: O().StoreSalePriceBox,
                        children: d.Z.Localize(
                          "#EventDisplay_CallToAction_FreeToPlay",
                        ),
                      }),
                    ],
                  });
          if (!b || !b.formatted_final_price) return null;
          let A = b.discount_pct || 0,
            tr = (!y && D.item_type == m.c6.xO && b.bundle_discount_pct) || 0,
            ir = b.formatted_final_price;
          if (Mr) {
            const wr = (0, P.rt)(B.iA.country_code.toUpperCase()),
              Or = { ...(0, F.J)(wr), bWholeUnitsOnly: !0 };
            ir = (0, v.d)(Number.parseInt(b.final_price_in_cents || "0"), Or);
          }
          const cr = (0, x.Nq)(S, b);
          return (0, n.jsx)(e, {
            bSingleLineMode: !!o,
            nBaseDiscountPercentage: tr,
            nDiscountPercentage: A,
            bIsPrePurchase: cr,
            strBestPurchaseOriginalPriceFormatted:
              b.formatted_original_price || "",
            strBestPurchasePriceFormatted: ir,
            bHideDiscountPercentForCompliance:
              !!b.hide_discount_pct_for_compliance,
            bShowNewFlag: W,
            bHidePrePurchase: !!j,
            strDiscountAndPriceClassName: Lr,
            strPriceFormattedClassName: Vr,
            bPurchaseOptionDisplay: xr,
          });
        }
        function e(H) {
          const {
              bSingleLineMode: o,
              nDiscountPercentage: y,
              bIsPrePurchase: G,
              nBaseDiscountPercentage: C,
              strBestPurchaseOriginalPriceFormatted: j,
              strBestPurchasePriceFormatted: L,
              bHideDiscountPercentForCompliance: dr,
              bShowNewFlag: xr,
              bHidePrePurchase: kr,
              strDiscountAndPriceClassName: Lr,
              strPriceFormattedClassName: Vr,
              bPurchaseOptionDisplay: Mr,
            } = H,
            E = dr;
          let $;
          y &&
            (E
              ? ($ = d.Z.Localize("#Discount_ARIA_Label_SpecialPrice", j))
              : ($ = d.Z.Localize("#Discount_ARIA_Label", y, j, L)));
          const K = !!((y || C) && !E),
            S = K && !!j,
            D = K && !S && Mr;
          return (0, n.jsxs)("div", {
            className: (0, T.A)({
              [O().StoreSalePriceWidgetContainer]: !0,
              [O().SingleLineMode]: o,
              StoreSalePriceWidgetContainer: !0,
              [O().Discounted]: !!y,
              Discounted: !!y,
              [O().PrePurchase]: !!G,
              [O().NewItem]: !!xr,
              [O().PurchaseOption]: Mr,
              [Lr ?? ""]: !!Lr,
            }),
            "aria-label": $,
            children: [
              !!(G && !kr) &&
                (0, n.jsx)("div", {
                  className: (0, T.A)(O().StoreSalePrepurchaseLabel),
                  children: (0, n.jsx)("span", {
                    children: d.Z.Localize(
                      "#EventDisplay_CallToAction_Prepurchase_Short",
                    ),
                  }),
                }),
              !!(!G && xr) &&
                (0, n.jsx)("div", {
                  className: O().StoreSaleNewItem,
                  children: d.Z.Localize("#Flag_New"),
                }),
              !!(C && !E) &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(g.Gq, {
                      toolTipContent: d.Z.Localize(
                        "#Sale_Bundle_Discount_ttip",
                      ),
                      children: (0, n.jsx)("span", {
                        className: (0, T.A)(O().BaseDiscount),
                        children: `-${C}%`,
                      }),
                    }),
                    !!y &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("span", { children: "\xA0" }),
                          (0, n.jsx)(g.Gq, {
                            toolTipContent: d.Z.Localize(
                              "#Sale_Bundle_Discount_Limited_ttip",
                            ),
                            children: (0, n.jsx)("span", {
                              className: (0, T.A)(O().StoreSaleDiscountBox),
                              children: `-${y}%`,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              !!(!C && y && !E) &&
                (0, n.jsx)("div", {
                  className: O().StoreSaleDiscountBox,
                  children: `-${y}%`,
                }),
              !!(y && E) &&
                (0, n.jsx)("div", {
                  className: O().DiscountIconCtn,
                  children: (0, n.jsx)(I.XH_, {}),
                }),
              S || D
                ? (0, n.jsxs)("div", {
                    className: (0, T.A)(O().StoreSaleDiscountedPriceCtn),
                    children: [
                      S
                        ? (0, n.jsx)("div", {
                            className: (0, T.A)({
                              [O().SingleLineOriginalPrice]: o,
                              [O().StoreOriginalPrice]: !o,
                            }),
                            children: j,
                          })
                        : (0, n.jsx)("div", {
                            className: O().YourPriceLabel,
                            children: M.F5.Localize("#PriceDisplay_YourPrice"),
                          }),
                      (0, n.jsx)("div", {
                        className: (0, T.A)({
                          [O().StoreSalePriceBox]: !0,
                          [O().SingleLineMode]: o,
                          [Vr ?? ""]: !!Vr,
                        }),
                        children: L,
                      }),
                    ],
                  })
                : (0, n.jsx)("div", {
                    className: (0, T.A)({
                      [O().StoreSalePriceBox]: !0,
                      [Vr ?? ""]: !!Vr,
                    }),
                    children: L,
                  }),
            ],
          });
        }
      },
      41188: (V, Y, t) => {
        "use strict";
        t.d(Y, { n: () => g, p: () => T });
        var n = t(7850),
          m = t(99412),
          s = t(39567),
          x = t(76532),
          z = t.n(x),
          U = t(12818),
          w = t(36707),
          O = t(39905),
          I = t(72609);
        function g(M) {
          const {
            rgTagIDs: B,
            bShowEvenIfNoTags: P,
            bHideTitle: F,
            bLargeText: v,
            bNoStoreLinks: c,
          } = M;
          return B?.length > 0 || P
            ? (0, n.jsxs)("div", {
                className: (0, w.A)(
                  z().SaleTagBlockCtn,
                  v ? z().LargeText : "",
                  "SaleTagBlockCtn",
                ),
                children: [
                  !F &&
                    (0, n.jsx)("div", {
                      className: (0, w.A)(z().TagTitle, "WidgetTagTitle"),
                      children: O.Z.Localize("#GameHover_Tags"),
                    }),
                  B?.length > 0
                    ? (0, n.jsx)("div", {
                        className: (0, w.A)(z().TagBox, "TagBox"),
                        children: B.map((l) =>
                          (0, n.jsx)(d, { tagid: l, bNoStoreLinks: c }, l),
                        ),
                      })
                    : (0, n.jsx)("div", {
                        children: O.Z.Localize("#Broadcast_None"),
                      }),
                ],
              })
            : null;
        }
        function T(M) {
          const { tagid: B, className: P } = M,
            F = (0, s.MB)(B, I.TS.LANGUAGE);
          if (!F) return null;
          const v = (0, m.wwZ)((0, m.sfN)(I.TS.LANGUAGE)),
            c = `${I.TS.STORE_BASE_URL}tags/${v}/${F}`;
          return (0, n.jsx)(U.q, {
            url: c,
            className: (0, w.A)(z().Tag, "WidgetTag", P),
            children: F,
          });
        }
        function d(M) {
          const { tagid: B, className: P, bNoStoreLinks: F } = M,
            v = (0, m.wwZ)((0, m.sfN)(I.TS.LANGUAGE)),
            c = (0, s.MB)(B, I.TS.LANGUAGE),
            l = `${I.TS.STORE_BASE_URL}tags/${v}/${c}`;
          return c
            ? F
              ? (0, n.jsx)("div", {
                  className: (0, w.A)(z().Tag, "WidgetTag", P),
                  children: c,
                })
              : (0, n.jsx)(U.q, {
                  url: l,
                  className: (0, w.A)(z().Tag, "WidgetTag", P),
                  children: c,
                })
            : null;
        }
      },
      77459: (V, Y, t) => {
        "use strict";
        t.d(Y, { E: () => T });
        var n = t(7850),
          m = t(13620),
          s = t(29522),
          x = t(40358),
          z = t(24179),
          U = t(13977),
          w = t(76532),
          O = t.n(w),
          I = t(36707),
          g = t(18210);
        function T(d) {
          const { appid: M, bIsMuted: B } = d,
            P = (0, s.$5)(M),
            F = (0, z.S6)(M),
            { data: v } = (0, x.J$)(P),
            { mutate: c } = (0, m.S)(P),
            l = (H) => {
              H.preventDefault(), F ? (0, U.o)(M, v?.name) : c();
            },
            e = (0, I.A)(
              O().CapsuleBottomBar,
              B && O().Muted,
              F ? O().PlayNowButton : O().AddToLibraryButton,
            );
          return (0, n.jsx)("div", {
            role: "button",
            tabIndex: 0,
            onClick: l,
            className: e,
            onKeyDown: (H) => {
              (H.key === "Enter" || H.key === " ") &&
                (H.preventDefault(), l(H));
            },
            children: (0, g.we)(F ? "#Sale_PlayNow" : "#Sale_AddToLibrary"),
          });
        }
      },
      16179: (V, Y, t) => {
        "use strict";
        t.d(Y, { x: () => U });
        var n = t(47875),
          m = t(72865),
          s = t(86722),
          x = t(83482),
          z = t(77200);
        function U(w, O) {
          const I = (0, m.n9)(),
            g = (0, z.w)(),
            T = (0, s.tB)((0, n._)(w, O));
          return { snr: (0, x.L3)(I), strStoreURL: (0, x.It)(T, I, g) };
        }
      },
      12818: (V, Y, t) => {
        "use strict";
        t.d(Y, { q: () => w });
        var n = t(7850),
          m = t(24660),
          s = t(72865),
          x = t(52393),
          z = t.n(x),
          U = t(72609);
        function w(g) {
          const {
              className: T,
              url: d,
              style: M,
              children: B,
              bSkipForcingStoreLink: P,
              bOpenInline: F,
              bFocusable: v = !0,
            } = g,
            c = P ? d : d ? O(d, U.TS.STORE_BASE_URL) : void 0,
            l = (0, s.aL)(c);
          return l
            ? (0, n.jsx)(m.Ii, {
                href: l,
                target: U.TS.IN_CLIENT || F ? void 0 : "_blank",
                className: T,
                style: M,
                rel: "noopener noreferrer",
                focusable: v,
                children: B,
              })
            : (0, n.jsx)("span", { style: M, className: T, children: B });
        }
        function O(g, T) {
          try {
            const d = new URL(T),
              M = new URL(g);
            return d.href.replace(/\/$/, "") + M.pathname + M.search + M.hash;
          } catch {
            return "";
          }
        }
        function I(g) {
          const { section: T } = g;
          return T.label_link && !T.label_link_style
            ? jsx("div", {
                className: styles.SaleViewAll,
                children: jsx(w, {
                  url: T.label_link,
                  children: SharedLocalization.Localize(
                    "#btn_live_streams_all",
                  ),
                }),
              })
            : null;
        }
      },
      42993: (V, Y, t) => {
        "use strict";
        t.d(Y, { LH: () => z });
        var n = t(90626);
        const m = (0, n.createContext)(void 0),
          s = m.Provider;
        function x(U) {
          const { steamid: w, children: O } = U,
            I = useMemo(
              () => ({ useActiveAccount: () => (!w || w == "0" ? "" : w) }),
              [w],
            );
          return createElement(s, { value: I }, O);
        }
        function z() {
          const U = (0, n.useContext)(m);
          if (!U)
            throw new Error(
              "called useActiveAccount outside of ActiveAccountProvider",
            );
          return U.useActiveAccount();
        }
      },
      66243: (V, Y, t) => {
        "use strict";
        t.d(Y, { Oh: () => g, n9: () => O, sP: () => z });
        var n = t(7850),
          m = t(24660),
          s = t(44375),
          x = t.n(s);
        function z(d) {
          const { children: M, ...B } = d;
          return (0, n.jsx)(m.fu, {
            className: s.GreenButton,
            type: "button",
            ...B,
            children: (0, n.jsx)("span", { children: M }),
          });
        }
        function U(d) {
          const { children: M, ...B } = d;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ...B,
            children: jsx("span", { children: M }),
          });
        }
        function w(d) {
          const { children: M, ...B } = d;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...B,
            children: jsx("span", { children: M }),
          });
        }
        function O(d) {
          const { children: M, ...B } = d;
          return (0, n.jsx)(m.fu, {
            className: s.BlueButton,
            type: "button",
            ...B,
            children: (0, n.jsx)("span", { children: M }),
          });
        }
        function I(d) {
          const { children: M, ...B } = d;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ...B,
            children: jsx("span", { children: M }),
          });
        }
        function g(d) {
          const { children: M, ...B } = d;
          return (0, n.jsx)(m.fu, {
            className: s.GreyButton,
            type: "button",
            ...B,
            children: (0, n.jsx)("span", { children: M }),
          });
        }
        function T(d) {
          const { children: M, ...B } = d;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ...B,
            children: jsx("span", { children: M }),
          });
        }
      },
      21721: (V, Y, t) => {
        "use strict";
        t.d(Y, { DT: () => w, b0: () => z, bu: () => U });
        var n = t(72609),
          m = t(40358),
          s = t(71742),
          x = t(41032);
        function z(g, T) {
          if (g[T]) {
            if (T == "community_icon") {
              const d = g.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${g[T]}.jpg`)
                .replace(/\?.*$/, "");
              return `${n.TS.MEDIA_CDN_COMMUNITY_URL}${d}`;
            } else if (typeof g[T] == "string") {
              const d = g.asset_url_format.replace("${FILENAME}", g[T]);
              return `${n.TS.STORE_ITEM_BASE_URL}${d}`;
            }
          }
        }
        function U(g, T = "full") {
          let d = "";
          switch (T) {
            case "thumb":
              d = ".116x65";
              break;
            case "600x338":
              d = ".600x338";
              break;
            case "1920x1080":
              d = ".1920x1080";
              break;
            case "full":
              d = "";
              break;
            default:
              (0, s.z_)(T, `Invalid size: ${T}`);
              break;
          }
          return (
            n.TS.STORE_ITEM_BASE_URL +
            g.filename.replace(/\.([^.]+)(\?.*)?$/, `${d}.$1$2`)
          );
        }
        function w(g) {
          const { data: T } = (0, m.j4)(g),
            d = (0, x.dy)();
          if (T)
            return [
              ...(T.all_ages_screenshots || []),
              ...(!d && T.mature_content_screenshots
                ? T.mature_content_screenshots
                : []),
            ].sort((M, B) => M.ordinal - B.ordinal);
        }
        function O(g, T = !1) {
          const { data: d } = useStoreItemAssets({ appid: g });
          if (d !== void 0)
            return d === null
              ? null
              : T && d.library_capsule_2x
                ? z(d, "library_capsule_2x")
                : d.library_capsule
                  ? z(d, "library_capsule")
                  : `${Config.STORE_ITEM_BASE_URL}steam/apps/${g}/portrait.png`;
        }
        function I(g, ...T) {
          const { data: d } = useStoreItemAssets(g);
          if (!d?.asset_url_format) return;
          const M = T.find((B) => {
            const P = d[B];
            return typeof P == "string" && P.trim() !== "";
          });
          return M && z(d, M);
        }
      },
      87249: (V, Y, t) => {
        "use strict";
        t.d(Y, { C0: () => T, mj: () => d });
        var n = t(7850),
          m = t(3367),
          s = t(72609),
          x = t(40358),
          z = t(64238),
          U = t.n(z),
          w = t(90626),
          O = t(25046),
          I = t(73187),
          g = t.n(I),
          T = ((B) => (
            (B[(B.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (B[(B.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (B[(B.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            B
          ))(T || {});
        function d(B) {
          const { id: P, active: F, bIsHoverMode: v, eGrowOnActivate: c } = B,
            { data: l } = (0, x.J$)(P),
            e = w.useRef(0),
            H = w.useRef(null);
          w.useLayoutEffect(() => {
            F && H.current && (H.current.currentTime = e.current);
          }, [F]);
          const o = (L) => {
              e.current = L.currentTarget.currentTime;
            },
            y = (0, O.kB)(F ? P : void 0);
          if ((v && s.TS.IN_MOBILE) || !F || !l || !l.visible || !y)
            return null;
          const G = y.filter(
            (L) => L.microtrailer && L.microtrailer.length > 0,
          );
          if (G.length === 0)
            return l &&
              l.related_items?.parent_appid &&
              (l.type == m.uE.ue || l.type == m.uE.Vi)
              ? (0, n.jsx)(d, {
                  ...B,
                  id: { appid: l.related_items.parent_appid },
                })
              : null;
          let C;
          switch (c) {
            case 1:
              C = g().GrowOnHoverImplicit;
              break;
            case 2:
              C = g().GrowOnHoverMedium;
              break;
          }
          const j = G[0];
          return (0, n.jsx)("video", {
            className: U()(g().CapsuleMicroTrailer, C),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: H,
            playsInline: !0,
            onTimeUpdate: o,
            children: (0, n.jsx)(M, { trailer: j }),
          });
        }
        function M(B) {
          const { trailer: P } = B;
          return !P || !P.microtrailer
            ? null
            : (0, n.jsx)(n.Fragment, {
                children: P.microtrailer?.map((F) =>
                  s.TS.IN_CLIENT && F.type == "video/mp4"
                    ? null
                    : (0, n.jsx)(
                        "source",
                        { src: (0, O.M4)(P, F.filename || ""), type: F.type },
                        F.filename,
                      ),
                ),
              });
        }
      },
      83784: (V, Y, t) => {
        "use strict";
        t.d(Y, { J: () => n, S: () => m });
        function n(s) {
          return s
            ? !!(
                s.related_items &&
                s.related_items.standalone_demo_appid &&
                s.related_items.standalone_demo_appid.length > 0 &&
                s.related_items.standalone_demo_appid[0]
              )
            : !1;
        }
        function m(s) {
          return !s || !s.related_items?.standalone_demo_appid
            ? []
            : s.related_items?.standalone_demo_appid;
        }
      },
      3348: (V, Y, t) => {
        "use strict";
        t.d(Y, { CC: () => U });
        var n = t(16114),
          m = t(11512);
        function s(w) {
          return w?.is_coming_soon
            ? z(
                w.coming_soon_display,
                w.steam_release_date,
                w.custom_release_date_message,
              )
            : w?.steam_release_date
              ? LocalizeRtime32ToShortDate(w.steam_release_date)
              : "";
        }
        function x(w) {
          return s(w.releaseInfo);
        }
        function z(w, O, I) {
          switch (w) {
            case "date_full":
              return LocalizeRtime32ToShortDate(O);
            case "date_month":
              return LocalizeCalendarMonthAndYear(new Date(O * 1e3));
            case "date_quarter":
              return LocalizeCalendarQuarter(new Date(O * 1e3));
            case "date_year":
              return LocalizeCalendarYear(new Date(O * 1e3));
            case "text_comingsoon":
              return (
                I || SharedLocalization.Localize("#Store_ComingSoon_ComingSoon")
              );
            case "text_tba":
              return I || SharedLocalization.Localize("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        }
        function U(w) {
          if (!w) return "";
          if (w && w.is_coming_soon) {
            if (w.coming_soon_display) return (0, m.d)(w);
            if (w.custom_release_date_message)
              return w.custom_release_date_message;
            const I = w.steam_release_date;
            return I
              ? w.is_abridged_release_date
                ? (0, n.sq)(new Date(I * 1e3))
                : (0, n.$z)(I)
              : "";
          }
          let O = w.steam_release_date;
          return O || (O = w.original_release_date), O ? (0, n.$z)(O) : "";
        }
      },
      81055: (V, Y, t) => {
        "use strict";
        t.d(Y, { Nq: () => U, fk: () => z });
        var n = t(44983);
        function m(w, O = !1) {
          if (w.is_coming_soon && !O) return 0;
          let I = w.steam_release_date;
          return I || (I = w.original_release_date), I;
        }
        function s(w) {
          let O = w.original_steam_release_date;
          return O || (O = m(w)), O;
        }
        const x = 7;
        function z(w, O) {
          if (!w) return !1;
          const I = m(w);
          return I ? !w.is_coming_soon && I + x * n.Kp.PerDay > O : !1;
        }
        function U(w, O) {
          return !!(w && w.is_coming_soon && O && O.packageid);
        }
      },
      47875: (V, Y, t) => {
        "use strict";
        t.d(Y, { _: () => s, l: () => x });
        var n = t(72609),
          m = t(83784);
        function s(z, U = !1) {
          if (z)
            return U && (0, m.J)(z)
              ? `${n.TS.STORE_BASE_URL}app/${((0, m.S))(z)[0]}`
              : `${n.TS.STORE_BASE_URL}${z.store_url_path}`;
        }
        function x() {
          window.location.href = `${n.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        }
      },
      39567: (V, Y, t) => {
        "use strict";
        t.d(Y, { Fv: () => w, MB: () => g });
        var n = t(72604),
          m = t(35038),
          s = t(83764),
          x = t(32288),
          z = t(68312),
          U = t(20194);
        function w(M) {
          const B = (0, z.TR)(),
            P = (0, z.rX)();
          return (0, U.I)(O(B.GetAnonymousServiceTransport(), P, M));
        }
        function O(M, B, P) {
          return {
            queryKey: ["LocalizedTagNames", P],
            queryFn: async () => {
              const F = `LocalizedTagNames2_${P}`,
                v = await B.GetObject(F),
                c = m.w.Init(x.Gr);
              c.Body().set_language(P),
                v?.version_hash &&
                  c.Body().set_have_version_hash(v.version_hash);
              const l = await x.nd.GetTagList(M, c);
              let e;
              if (l.GetEResult() == n.R)
                (e = l.Body().toObject()), B && B.StoreObject(F, e);
              else if (l.GetEResult() == n.Ze) e = v || void 0;
              else if (v)
                console.warn(
                  "Couldn't load updated tag localization, will continue with what we have from storage.",
                ),
                  (e = v);
              else throw l.GetErrorMessage();
              const H = {};
              return (
                (e?.tags || []).forEach(({ tagid: y, name: G }) => (H[y] = G)),
                H
              );
            },
            staleTime: 3600 * 1e3,
          };
        }
        async function I(M, B, P) {
          return ReactQueryClient.fetchQuery(
            O(M.GetAnonymousServiceTransport(), B, P),
          );
        }
        function g(M, B) {
          const { data: P } = w(B);
          return P && P[M];
        }
        function T(M) {
          const { data: B } = w(M);
          return !!B;
        }
        const d = [s.RW$, s.ZBT, s.gGw];
      },
      29522: (V, Y, t) => {
        "use strict";
        t.d(Y, { $5: () => O, _Z: () => x, h0: () => w, oc: () => I });
        var n = t(40358),
          m = t(3367),
          s = t(90626);
        function x(T) {
          const { data: d } = (0, n.J$)(T);
          return (0, s.useMemo)(
            () =>
              d
                ? d.item_type == m.c6.qI
                  ? [d.appid]
                  : d.included_appids || []
                : [],
            [d],
          );
        }
        function z(T) {
          if (!T?.length) return [];
          const d = T.map((M) => M.creator_clan_account_id).filter((M) => !!M);
          return Array.from(new Set(d));
        }
        function U(T) {
          const { data: d } = useStoreItemDefaultInfo({ appid: T });
          return d?.appid || T;
        }
        function w(T) {
          const { data: d } = (0, n.J$)(T);
          return (0, s.useMemo)(() => {
            if (d && d.related_items && d.related_items.parent_appid)
              return { appid: d.related_items.parent_appid };
          }, [d]);
        }
        function O(T) {
          return (0, s.useMemo)(() => (T ? { appid: T } : void 0), [T]);
        }
        function I(T) {
          return (0, s.useMemo)(() => (T ? { packageid: T } : void 0), [T]);
        }
        function g(T) {
          return useMemo(() => (T ? { bundleid: T } : void 0), [T]);
        }
      },
      10134: (V, Y, t) => {
        "use strict";
        t.d(Y, { BD: () => I, h3: () => g });
        var n = t(20194),
          m = t(75233),
          s = t(68312),
          x = t(98609),
          z = t(20125);
        async function U(d, M) {
          const B = (0, z.Am)(x.TS.STORE_BASE_URL, M, x.iA.country_code),
            F = await (await fetch(B)).json();
          return Object.keys(F.rgIgnoredApps).map(Number) || [];
        }
        function w() {
          const d = (0, s.KV)(),
            M = x.iA.accountid;
          return (0, n.I)(O(d, M));
        }
        function O(d, M) {
          return {
            queryKey: T(M),
            queryFn: async () => {
              if (!M) return new Set();
              const B = await U(d, M);
              return new Set(B);
            },
            staleTime: 600 * 1e3,
          };
        }
        function I(d) {
          const { data: M } = w();
          return M === void 0 || d == null ? void 0 : M.has(d);
        }
        function g() {
          const d = (0, m.jE)(),
            M = x.iA.accountid;
          return (B, P) => {
            d.setQueryData(T(M), (F) => {
              if (!F) return;
              const v = new Set(F);
              if (P) for (const c of P) v.delete(c);
              if (B) for (const c of B) v.add(c);
              return v;
            });
          };
        }
        function T(d) {
          return ["AccountIgnoreApps", d ?? 0];
        }
      },
      13620: (V, Y, t) => {
        "use strict";
        t.d(Y, { S: () => w });
        var n = t(35038),
          m = t(41944),
          s = t(3367),
          x = t(68312),
          z = t(51614),
          U = t(24179);
        function w(I) {
          const g = (0, x.KV)(),
            T = (0, U._7)();
          return (0, z.n)({
            mutationFn: () => O(g, I),
            onSuccess(d) {
              const [
                M,
                {
                  packageids_added: B,
                  appids_added: P,
                  purchase_result_detail: F,
                },
              ] = d;
              P && T(P);
            },
          });
        }
        async function O(I, g) {
          const T = n.w.Init(m.lO);
          T.Body().set_item_id(s.O4.fromObject(g));
          const d = await m._o.AddFreeLicense(I, T);
          return [d.GetEResult(), d.Body().toObject()];
        }
      },
      24179: (V, Y, t) => {
        "use strict";
        t.d(Y, { S6: () => B, ZJ: () => v, $Y: () => T, _7: () => P });
        var n = t(90626),
          m = t(20194),
          s = t(75233),
          x = t(68312),
          z = t(20125),
          U = t(98609);
        async function w(c, l) {
          const e = (0, z.Am)(U.TS.STORE_BASE_URL, l, U.iA.country_code);
          return (await (await fetch(e)).json()).rgOwnedApps || [];
        }
        async function O(c, l, e) {
          return (await w(c, l)).includes(e);
        }
        var I = t(40358),
          g = t(72609);
        function T() {
          const c = (0, x.KV)(),
            l = g.iA.accountid;
          return (0, m.I)(d(c, l));
        }
        function d(c, l) {
          return {
            queryKey: F(l),
            queryFn: async () => {
              if (!l) return new Set();
              const e = await w(c, l);
              return new Set(e);
            },
            staleTime: 600 * 1e3,
          };
        }
        function M(c, l, e) {
          return {
            queryKey: ["AccountOwnsApp", l, e],
            queryFn: async () => (l ? await O(c, l, e) : !1),
            staleTime: 600 * 1e3,
          };
        }
        function B(c) {
          const l = (0, x.KV)(),
            e = g.iA.accountid,
            { data: H } = (0, m.I)(M(l, e, c));
          return H === void 0 ? void 0 : H;
        }
        function P(c) {
          const l = (0, s.jE)(),
            e = g.iA.accountid;
          return n.useCallback(
            (H) => {
              l.setQueryData(F(e), (o) =>
                o ? new Set([...o.values(), ...H]) : c ? new Set(H) : void 0,
              );
            },
            [l, e, c],
          );
        }
        function F(c) {
          return ["AccountOwnedApps", c ?? 0];
        }
        function v(c) {
          const { data: l } = (0, I.J$)(c && "appid" in c ? void 0 : c),
            { data: e } = T();
          let H;
          return (
            c && "appid" in c ? (H = [c.appid]) : l && (H = l.included_appids),
            H === void 0 || e === void 0 || H.length == 0
              ? { bIsOwned: void 0, unAppID: void 0 }
              : { bIsOwned: !H.some((o) => !e.has(o)), unAppID: H[0] }
          );
        }
      },
      20125: (V, Y, t) => {
        "use strict";
        t.d(Y, { Am: () => s, WZ: () => x });
        const n = "unUserdataVersion";
        function m() {
          return Number.parseInt(window.localStorage.getItem(n) || "0");
        }
        function s(z, U, w) {
          const O = m();
          let I = `${z}dynamicstore/userdata/?id=${U}&cc=${w}&origin=${self.origin}`;
          return O && (I += `&v=${O}`), I;
        }
        function x() {
          window.localStorage.setItem(
            n,
            (
              Number.parseInt(window.localStorage.getItem(n) || "0") + 1
            ).toString(),
          );
        }
      },
      32994: (V, Y, t) => {
        "use strict";
        t.d(Y, { lI: () => O });
        var n = t(99412),
          m = t(35038),
          s = t(18735),
          x = t(32288),
          z = t(72609),
          U = t(20194),
          w = t(68312);
        function O() {
          const c = (0, w.KV)(),
            l = z.iA.accountid,
            e = z.iA.country_code;
          return (0, U.I)(I(c, l, e));
        }
        function I(c, l, e) {
          return {
            queryKey: v(l),
            queryFn: async () => {
              if (!l) return F();
              const H = m.w.Init(x.xf);
              H.Body().set_country_code(e);
              const o = await x.nd.GetStorePreferences(c, H);
              if (!o.BSuccess())
                throw `Error loading store preferences: ${o.GetErrorMessage()}`;
              return o.Body().toObject();
            },
            staleTime: 3600 * 1e3,
          };
        }
        function g() {
          const c = useActiveServiceTransport(),
            l = UserConfig.accountid;
          return useQuery(M(c, l));
        }
        function T() {
          const c = useActiveServiceTransport(),
            l = UserConfig.accountid,
            e = UserConfig.country_code;
          return useQuery({
            ...I(c, l, e),
            select: (H) => B(H, PchLanguageToELanguage(Config.LANGUAGE)),
          });
        }
        const d = [s.T4, s.u7];
        function M(c, l) {
          const e = UserConfig.country_code;
          return { ...I(c, l, e), select: P };
        }
        function B(c, l) {
          const e = [l];
          if (
            c &&
            c.preferences &&
            c.preferences.primary_language !== void 0 &&
            c.preferences.primary_language !== k_ELanguage_None
          ) {
            const { primary_language: H, secondary_languages: o } =
              c.preferences;
            if ((H !== l && e.push(H), o)) {
              const y = BigInt(o);
              for (let G = k_ELanguage_English; G < k_ELanguage_MAX; G++)
                (y >> BigInt(G)) & BigInt(1) && G != l && G != H && e.push(G);
            }
          }
          return e;
        }
        function P(c) {
          return c?.content_descriptor_preferences
            ?.content_descriptors_to_exclude
            ? c.content_descriptor_preferences?.content_descriptors_to_exclude?.map(
                (l) => l.content_descriptorid,
              ) || []
            : d;
        }
        function F() {
          return {
            preferences: { primary_language: (0, n.sfN)(z.TS.LANGUAGE) },
            content_descriptor_preferences: {
              content_descriptors_to_exclude: d.map((c) => ({
                content_descriptorid: c,
              })),
            },
          };
        }
        function v(c) {
          return ["StorePreferencesQueryKey", c ?? 0];
        }
      },
      96362: (V, Y, t) => {
        "use strict";
        t.d(Y, { s: () => U });
        var n = t(51614),
          m = t(67705),
          s = t(54528),
          x = t(20125),
          z = t(98609);
        function U(w, O, I) {
          const g = (0, s.$3)(),
            T = z.iA.accountid;
          return (0, n.n)({
            mutationKey: ["useUpdateWishlist", w, T, O],
            mutationFn: async () => {
              if (w == null) return;
              const d =
                  z.TS.STORE_BASE_URL +
                  "api/" +
                  (O ? "addtowishlist" : "removefromwishlist"),
                M = new FormData();
              M.append("appid", "" + w),
                M.append("sessionid", (0, m.KC)()),
                I && M.append("snr", I);
              const B = await fetch(d, {
                method: "POST",
                body: M,
                credentials: "include",
              });
              if (!B.ok)
                throw new Error(
                  `Wishlist ${O ? "add" : "remove"} of appid ${w} failed (${B.status})`,
                );
            },
            onMutate: () => {
              w != null && g(O ? [w] : void 0, O ? void 0 : [w]);
            },
            onError: () => {
              w != null && g(O ? void 0 : [w], O ? [w] : void 0);
            },
            onSuccess: () => {
              (0, x.WZ)();
            },
          });
        }
      },
      54528: (V, Y, t) => {
        "use strict";
        t.d(Y, { bB: () => g, $3: () => T, F0: () => O });
        var n = t(20194),
          m = t(75233),
          s = t(68312),
          x = t(72609),
          z = t(20125),
          U = t(98609);
        async function w(M, B) {
          const P = (0, z.Am)(U.TS.STORE_BASE_URL, B, U.iA.country_code);
          return (await (await fetch(P)).json()).rgWishlist || [];
        }
        function O() {
          const M = (0, s.KV)(),
            B = x.iA.accountid;
          return (0, n.I)(I(M, B));
        }
        function I(M, B) {
          return {
            queryKey: d(B),
            queryFn: async () => {
              if (!B) return new Set();
              const P = await w(M, B);
              return new Set(P);
            },
            staleTime: 600 * 1e3,
          };
        }
        function g(M) {
          const { data: B } = O();
          return B === void 0 || M == null ? void 0 : B.has(M);
        }
        function T() {
          const M = (0, m.jE)(),
            B = x.iA.accountid;
          return (P, F) => {
            M.setQueryData(d(B), (v) => {
              if (!v) return;
              const c = new Set(v);
              if (F) for (const l of F) c.delete(l);
              if (P) for (const l of P) c.add(l);
              return c;
            });
          };
        }
        function d(M) {
          return ["AccountWishlistApps", M ?? 0];
        }
      },
      13977: (V, Y, t) => {
        "use strict";
        t.d(Y, { o: () => T });
        var n = t(7850),
          m = t(58534),
          s = t(2801),
          x = t(88003),
          z = t(36118),
          U = t(36707),
          w = t(18210),
          O = t(3166),
          I = t(54599),
          g = t.n(I);
        async function T(P, F) {
          const v = "steam://run/" + P;
          O.TS.IN_CLIENT
            ? (console.log(`Running game ${P} locally.`),
              (window.location.href = v))
            : (console.log(
                `Cannot identify local client. Prompting user to launch ${P}.`,
              ),
              M(P, v, F));
        }
        async function d(P, F) {
          const v = "steam://install/" + P;
          Config.IN_CLIENT ? (window.location.href = v) : M(P, v, F);
        }
        async function M(P, F, v) {
          console.log("prompting for", v);
          const c = O.TS.STORE_BASE_URL + "about/";
          (0, x.mK)(
            (0, n.jsx)(B, {
              appid: P,
              strGameName: v || "",
              strOnOKUrl: F,
              strDownloadSteamUrl: c,
            }),
            window,
          );
        }
        const B = (P) => {
          const F = () => P.closeModal && P.closeModal();
          return (0, n.jsx)(s.x_, {
            onEscKeypress: F,
            className: g().GotSteamDialog,
            children: (0, n.jsxs)(m.UC, {
              children: [
                (0, n.jsxs)(m.Y9, {
                  children: [" ", (0, w.we)("#GotSteam_Title"), " "],
                }),
                (0, n.jsxs)(m.nB, {
                  children: [
                    (0, n.jsx)(m.a3, {
                      children: (0, w.PP)(
                        "#GotSteam_PromptWithDownloadLink",
                        (0, n.jsx)("a", {
                          href: P.strDownloadSteamUrl,
                          className: g().DownloadSteamUrl,
                          children: (0, w.we)("#GotSteam_DownloadLinkText"),
                        }),
                        (0, n.jsx)("span", {
                          className: g().GameName,
                          children: P.strGameName,
                        }),
                      ),
                    }),
                    (0, n.jsxs)("div", {
                      className: g().Buttons,
                      children: [
                        (0, n.jsxs)("a", {
                          href: P.strOnOKUrl,
                          onClick: F,
                          className: (0, U.A)(g().Button, g().LeftButton),
                          children: [
                            (0, n.jsxs)("div", {
                              className: g().AnswerText,
                              children: [" ", (0, w.we)("#GotSteam_Yes"), " "],
                            }),
                            (0, n.jsxs)("div", {
                              className: g().ActionText,
                              children: [
                                " ",
                                (0, w.we)("#GotSteam_Yes_Play"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("a", {
                          href: P.strDownloadSteamUrl,
                          onClick: F,
                          className: g().Button,
                          children: [
                            (0, n.jsxs)("div", {
                              className: g().AnswerText,
                              children: [" ", (0, w.we)("#GotSteam_No"), " "],
                            }),
                            (0, n.jsxs)("div", {
                              className: g().ActionText,
                              children: [
                                " ",
                                (0, w.we)("#GotSteam_No_Download"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: g().Footer,
                      children: [
                        (0, n.jsx)(z.Qte, { className: g().Logo }),
                        (0, w.we)("#GotSteam_Blurb"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      },
      19619: (V, Y, t) => {
        "use strict";
        t.d(Y, { Fm: () => K, L2: () => D });
        var n = t(41735),
          m = t.n(n),
          s = t(14947),
          x = t(99412),
          z = t(72604),
          U = t(34592),
          w = t(3166),
          O = t(82734),
          I = t(25294),
          g = t(40497),
          T = t(3367),
          d = t(43462),
          M = t(20125),
          B = t(36191),
          P = t(93804),
          F = t(72609),
          v = t(20194),
          c = t(97996),
          l = ((b) => (
            (b[(b.AnyController = 0)] = "AnyController"),
            (b[(b.XboxController = 1)] = "XboxController"),
            (b[(b.Ps3Controller = 2)] = "Ps3Controller"),
            (b[(b.Ps4Controller = 3)] = "Ps4Controller"),
            (b[(b.Ps5Controller = 4)] = "Ps5Controller"),
            (b[(b.SwitchController = 5)] = "SwitchController"),
            (b[(b.SteamController = 6)] = "SteamController"),
            (b[(b.SteamDeckNeptune = 7)] = "SteamDeckNeptune"),
            (b[(b.SteamDeckGalileo = 8)] = "SteamDeckGalileo"),
            (b[(b.Switch2Controller = 9)] = "Switch2Controller"),
            (b[(b.SteamControllerTriton = 10)] = "SteamControllerTriton"),
            b
          ))(l || {});
        const e = {
          any_controller: 0,
          xbox_controller: 1,
          ps3_controller: 2,
          ps4_controller: 3,
          ps5_controller: 4,
          switch_controller: 5,
          steam_controller: 6,
          steam_deck_neptune: 7,
          steam_deck_galileo: 8,
          switch2_controller: 9,
          steam_controller_triton: 10,
        };
        function H() {
          const b = [...F.iA.excluded_content_descriptors];
          return {
            bLoaded: !1,
            setWishlist: new Set(),
            rgWishlistInOrder: [],
            setOwnedApps: new Set(),
            setOwnedPackages: new Set(),
            setExcludedTagIDs: new Set(),
            rgExcludedTagIDsSorted: [],
            setExcludedContentDescriptors: new Set(b),
            rgExcludedContentDescriptors: b,
            setRecommendedApps: new Set(),
            rgRecommendedAppsInOrder: [],
            mapIgnoredApps: new Map(),
            mapIgnoredPackages: new Map(),
            setCuratorsFollowed: new Set(),
            rgCuratorsFollowed: [],
            setCuratorsIgnored: new Set(),
            mapRecommendingCuratorsForApp: new Map(),
            setPreferredPlatforms: new Set(),
            setHardwareUsed: new Set(),
            rgRecommendedTags: [],
            ePrimaryLanguage: x.xPp,
            setSecondaryLanguages: new Set(),
            bShowFilteredUserReviewScores: !0,
            bAllowAppImpressions: !1,
          };
        }
        let o;
        function y() {
          return (o ??= H());
        }
        function G() {
          return !!(0, c.VY)("wants_mature_content");
        }
        function C(b) {
          const W = H();
          if (
            ((W.bLoaded = !0),
            b.rgCurators &&
              ((W.rgCuratorsFollowed = Object.keys(b.rgCurators).map(Number)),
              (W.setCuratorsFollowed = new Set(W.rgCuratorsFollowed))),
            b.rgCuratorsIgnored &&
              (W.setCuratorsIgnored = new Set(b.rgCuratorsIgnored.map(Number))),
            b.rgWishlist &&
              ((W.rgWishlistInOrder = b.rgWishlist.map(Number)),
              (W.setWishlist = new Set(W.rgWishlistInOrder))),
            b.rgOwnedApps &&
              (W.setOwnedApps = new Set(b.rgOwnedApps.map(Number))),
            b.rgOwnedPackages &&
              (W.setOwnedPackages = new Set(b.rgOwnedPackages.map(Number))),
            b.rgIgnoredApps && (W.mapIgnoredApps = j(b.rgIgnoredApps)),
            b.rgIgnoredPackages &&
              (W.mapIgnoredPackages = j(b.rgIgnoredPackages)),
            b.rgExcludedTags &&
              ((W.setExcludedTagIDs = new Set(
                b.rgExcludedTags.map((N) => Number(N.tagid)),
              )),
              (W.rgExcludedTagIDsSorted = Array.from(
                W.setExcludedTagIDs,
              ).sort())),
            G()
              ? ((W.setExcludedContentDescriptors = new Set()),
                (W.rgExcludedContentDescriptors = []))
              : b.rgExcludedContentDescriptorIDs &&
                ((W.rgExcludedContentDescriptors =
                  b.rgExcludedContentDescriptorIDs.map((N) => Number(N))),
                (W.setExcludedContentDescriptors = new Set(
                  W.rgExcludedContentDescriptors,
                ))),
            b.rgRecommendedApps &&
              ((W.rgRecommendedAppsInOrder = b.rgRecommendedApps.map(Number)),
              (W.setRecommendedApps = new Set(W.rgRecommendedAppsInOrder))),
            b.rgPreferredPlatforms &&
              (W.setPreferredPlatforms = new Set(b.rgPreferredPlatforms)),
            b.bAllowAppImpressions &&
              (W.bAllowAppImpressions = b.bAllowAppImpressions),
            (W.bShowFilteredUserReviewScores =
              !!b.bShowFilteredUserReviewScores),
            b.rgPrimaryLanguage !== void 0 &&
              (W.ePrimaryLanguage = b.rgPrimaryLanguage),
            b.rgSecondaryLanguages &&
              (W.setSecondaryLanguages = new Set(b.rgSecondaryLanguages)),
            b.rgRecommendedTags &&
              (W.rgRecommendedTags = b.rgRecommendedTags.map((N) => N.tagid)),
            b.rgCurations)
          )
            for (const N of Object.keys(b.rgCurations)) {
              const A = [];
              for (const tr of Object.keys(b.rgCurations[N]))
                b.rgCurations[N][tr] === P.tV.$D && A.push(Number(tr));
              W.mapRecommendingCuratorsForApp.set(Number(N), A);
            }
          if (b.rgHardwareUsed)
            for (const N of b.rgHardwareUsed) {
              const A = e[N];
              A !== void 0 && W.setHardwareUsed.add(A);
            }
          return W;
        }
        function j(b) {
          const W = new Map();
          for (const [N, A] of Object.entries(b)) {
            const tr = Number(N);
            tr && W.set(tr, Number(A));
          }
          return W;
        }
        const L = "dynamicuserdata";
        function dr(b) {
          return [L, b];
        }
        function xr(b) {
          return b?.[0] == L;
        }
        async function kr(b) {
          try {
            const W = await fetch(
              (0, M.Am)(F.TS.STORE_BASE_URL, b, F.iA.country_code),
              { credentials: "include" },
            );
            if (!W.ok) throw new Error(`Server returned ${W.status}`);
            return C(await W.json());
          } catch (W) {
            return (
              console.warn("LoadDynamicUserData", W),
              (0, B.aj)().ReportError(new Error(`LoadDynamicUserData ${W}`), {
                bIncludeMessageInIdentifier: !0,
              }),
              H()
            );
          }
        }
        function Lr() {
          const b = F.iA.accountid;
          return {
            queryKey: dr(b),
            queryFn: () => kr(b),
            staleTime: 1 / 0,
            gcTime: 1 / 0,
            retry: !1,
            enabled: !0,
          };
        }
        function Vr() {
          return (0, v.I)(Lr());
        }
        function Mr(b) {
          return b.getQueryData(dr(F.iA.accountid)) ?? y();
        }
        async function E(b) {
          return b.fetchQuery(Lr());
        }
        function $(b, W) {
          b.setQueryData(dr(F.iA.accountid), (N) => {
            if (!N) return;
            const A = W(N);
            return A ? { ...N, ...A } : N;
          });
        }
        class K {
          m_queryClient = g.L;
          m_boxCacheVersion = s.sH.box(0);
          m_bInitialized = !1;
          m_boxAjaxInFlight = s.sH.box(!1);
          LazyInit() {
            this.m_bInitialized ||
              ((this.m_bInitialized = !0),
              this.m_queryClient.getQueryCache().subscribe((W) => {
                (W?.type != "added" &&
                  W?.type != "updated" &&
                  W?.type != "removed") ||
                  (xr(W.query?.queryKey) &&
                    (0, s.h5)(() =>
                      this.m_boxCacheVersion.set(
                        this.m_boxCacheVersion.get() + 1,
                      ),
                    ));
              }));
          }
          ReadData() {
            return (
              this.LazyInit(),
              this.m_boxCacheVersion.get(),
              Mr(this.m_queryClient)
            );
          }
          BIsLoaded() {
            return this.ReadData().bLoaded;
          }
          GetWishlistGamesInUserOrder() {
            return this.ReadData().rgWishlistInOrder;
          }
          GetRecommendedGamesInIRPriorityOrder() {
            return this.ReadData().rgRecommendedAppsInOrder;
          }
          GetFollowedCuratorCount() {
            return this.ReadData().setCuratorsFollowed.size;
          }
          GetFollowedCuratorsAccountID() {
            return this.ReadData().rgCuratorsFollowed;
          }
          BIsFollowingCurator(W) {
            return this.ReadData().setCuratorsFollowed.has(S(W));
          }
          BIsIgnoringCurator(W) {
            return this.ReadData().setCuratorsIgnored.has(S(W));
          }
          get ExcludedContentDescriptor() {
            return this.ReadData().rgExcludedContentDescriptors;
          }
          BExcludeTagIDs(W) {
            const N = this.ReadData().setExcludedTagIDs;
            return W.some((A) => N.has(A));
          }
          GetExcludedTagsSortedByID() {
            return this.ReadData().rgExcludedTagIDsSorted;
          }
          BExcludesContentDescriptor(W) {
            const N = this.ReadData().setExcludedContentDescriptors;
            return W.some((A) => N.has(A));
          }
          BIncludesContentDescriptor(W) {
            return !this.ReadData().setExcludedContentDescriptors.has(W);
          }
          BIsGameWishlisted(W) {
            return this.ReadData().setWishlist.has(Number(W));
          }
          BIsGameRecommended(W) {
            return this.ReadData().setRecommendedApps.has(Number(W));
          }
          BIsGameIgnored(W) {
            return !!W && this.ReadData().mapIgnoredApps.has(Number(W));
          }
          BIsPackageIgnored(W) {
            return !!W && this.ReadData().mapIgnoredPackages.has(Number(W));
          }
          BIsGameOwned(W) {
            return !!W && this.ReadData().setOwnedApps.has(Number(W));
          }
          BIsStoreItemOwned(W) {
            switch (W.GetStoreItemType()) {
              case T.c6.qI:
                if (this.BIsGameOwned(W.GetAppID())) return !0;
                break;
              case T.c6.RD:
              case T.c6.xO:
                if (W.GetIncludedAppIDs().every((N) => this.BIsGameOwned(N)))
                  return !0;
                break;
            }
            return !1;
          }
          BOwnsApp(W) {
            return !!W && this.ReadData().setOwnedApps.has(Number(W));
          }
          BOwnsPackage(W) {
            return this.ReadData().setOwnedPackages.has(Number(W));
          }
          BHasUsedHardware(W) {
            return this.ReadData().setHardwareUsed.has(W);
          }
          BShowFilteredUserReviewScores() {
            return this.ReadData().bShowFilteredUserReviewScores;
          }
          BAppImpressionsAllowed() {
            return this.ReadData().bAllowAppImpressions;
          }
          GetPrimaryLanguage() {
            return this.ReadData().ePrimaryLanguage;
          }
          GetSecondaryLanguages() {
            return this.ReadData().setSecondaryLanguages;
          }
          BIsAnyLanguageEnabled(W) {
            const { ePrimaryLanguage: N, setSecondaryLanguages: A } =
              this.ReadData();
            return N == null || N <= x.xPp || x.bP9 <= N
              ? !0
              : W.some((tr) => N === tr || A.has(tr));
          }
          GetRecommendedTags() {
            return this.ReadData().rgRecommendedTags;
          }
          BIsAjaxInFlight() {
            return this.m_boxAjaxInFlight.get();
          }
          BIsAppRecommendedBySomeCurator(W) {
            return this.ReadData().mapRecommendingCuratorsForApp.has(Number(W));
          }
          GetRecommendingCuratorsForApp(W) {
            return this.ReadData().mapRecommendingCuratorsForApp.get(Number(W));
          }
          BHasPlatformPreferenceSet() {
            const W = this.ReadData().setPreferredPlatforms.size;
            return W > 0 && W < 3;
          }
          BIsPreferredPlatform(W) {
            return this.ReadData().setPreferredPlatforms.has(W);
          }
          async HintLoad() {
            return this.LazyInit(), await E(this.m_queryClient), this;
          }
          async UpdateFollowOrIgnoreCurator(W, N, A) {
            this.LazyInit();
            let tr =
              w.TS.STORE_BASE_URL +
              "curators/" +
              (N ? "ajaxfollow/" : "ajaxignore/");
            const ir = W.GetAccountID(),
              cr = new FormData();
            cr.append("clanid", "" + ir),
              cr.append("sessionid", (0, w.KC)()),
              cr.append(N ? "follow" : "ignore", A ? "1" : "0");
            let wr = await m().post(tr, cr, { withCredentials: !0 });
            return (
              wr &&
                wr.status == 200 &&
                (this.InvalidateCache(),
                $(this.m_queryClient, (Or) => {
                  const Rr = new Set(
                    N ? Or.setCuratorsFollowed : Or.setCuratorsIgnored,
                  );
                  return (
                    A ? Rr.add(ir) : Rr.delete(ir),
                    N
                      ? {
                          setCuratorsFollowed: Rr,
                          rgCuratorsFollowed: Array.from(Rr),
                        }
                      : { setCuratorsIgnored: Rr }
                  );
                })),
              wr.data
            );
          }
          async UpdateAppIgnore(W, N, A, tr = d.RI.$m) {
            this.LazyInit();
            let ir = w.TS.STORE_BASE_URL + "recommended/ignorerecommendation";
            const cr = new FormData();
            cr.append("sessionid", (0, w.KC)()),
              cr.append("appid", "" + W),
              cr.append("remove", N ? "0" : "1"),
              cr.append("snr", A),
              cr.append("ignore_reason", "" + tr);
            try {
              (0, s.h5)(() => this.m_boxAjaxInFlight.set(!0));
              let wr = await m().post(ir, cr, { withCredentials: !0 });
              return (
                wr &&
                  wr.status == 200 &&
                  (this.InvalidateCache(),
                  $(this.m_queryClient, (Or) => {
                    const Rr = new Map(Or.mapIgnoredApps);
                    return (
                      N ? Rr.set(Number(W), tr) : Rr.delete(Number(W)),
                      { mapIgnoredApps: Rr }
                    );
                  })),
                wr.data
              );
            } catch (wr) {
              let Or = (0, U.H)(wr);
              console.error("UpdateAppIgnore", Or.strErrorMsg, Or);
            } finally {
              (0, s.h5)(() => this.m_boxAjaxInFlight.set(!1));
            }
            return { success: z.zi };
          }
          async AddToCart(W, N, A, tr, ir, cr, wr) {
            if (
              typeof window.g_bUseNewCartAPI < "u" &&
              window.g_bUseNewCartAPI &&
              typeof window.AddItemToCart == "function"
            ) {
              let Wt;
              return (
                ir && (Wt = I.A.ParseSNR(ir)),
                window.AddItemToCart(N, cr, Wt),
                !0
              );
            }
            const Or = new FormData();
            Or.append("action", "add_to_cart"),
              cr
                ? Or.append("bundleid", cr.toString())
                : Or.append("subid", "" + N),
              ir && Or.append("snr", ir),
              Or.append("sessionid", (0, w.KC)()),
              Or.append("quantity", "1");
            const Rr = (0, O.uX)(W);
            W.preventDefault();
            try {
              await m().post(A, Or, { withCredentials: !0 }),
                this.InvalidateCache(),
                wr?.fnSetURL ? wr.fnSetURL(tr) : (Rr.location.href = tr);
            } catch (Wt) {
              return console.log("HandleOnAddToCart", Wt), !1;
            }
            return !0;
          }
          InvalidateCache() {
            (0, M.WZ)();
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              K.s_globalSingletonStore || (K.s_globalSingletonStore = new K()),
              K.s_globalSingletonStore
            );
          }
          static BConfirmedAdultContentAgeGate() {
            return G();
          }
          constructor() {}
        }
        function S(b) {
          return typeof b == "object" && "GetAccountID" in b
            ? b.GetAccountID()
            : Number(b);
        }
        function D() {
          const { isPending: b } = Vr();
          return [b, K.Get()];
        }
      },
      76867: (V, Y, t) => {
        "use strict";
        t.d(Y, { M: () => x });
        var n = t(7850),
          m = t(90626),
          s = t(80724);
        function x(z) {
          const { children: U, ...w } = z,
            O = m.useRef(null);
          return (0, n.jsx)(s.A, { nodeRef: O, ...w, children: z.children(O) });
        }
      },
      85705: (V, Y, t) => {
        "use strict";
        t.d(Y, { k: () => z });
        var n = t(7850),
          m = t(36707),
          s = t(37999),
          x = t.n(s);
        function z(U) {
          const { size: w, color: O, trackColor: I } = U,
            g = { borderColor: I, borderLeftColor: O };
          if (typeof w == "number") {
            const T = `${w}px`;
            (g.width = T),
              (g.height = T),
              (g.minHeight = T),
              (g.minWidth = T),
              (g.borderWidth = `${w / 10}px`);
          }
          return (0, n.jsx)("div", {
            className: (0, m.A)(
              s.Loading,
              w == "small" && s.Small,
              (w == "medium" || !w) && s.Medium,
              w == "large" && s.Large,
            ),
            style: g,
          });
        }
      },
      77200: (V, Y, t) => {
        "use strict";
        t.d(Y, { w: () => z });
        var n = t(7850),
          m = t(90626);
        const s = m.createContext({});
        function x(U) {
          const { children: w, ...O } = U;
          return jsx(s.Provider, { value: O, children: w });
        }
        function z() {
          return m.useContext(s);
        }
      },
      21659: (V, Y, t) => {
        "use strict";
        t.d(Y, { c5: () => z, zI: () => U });
        var n = t(90626),
          m = t(45387),
          s = t.n(m),
          x = t(54963);
        function z() {
          return window.innerWidth < parseInt(s().strMaxMobileWidth);
        }
        function U() {
          const O = (0, x.CH)();
          return (
            n.useEffect(
              () => (
                window.addEventListener("resize", O),
                () => window.removeEventListener("resize", O)
              ),
              [O],
            ),
            window.innerWidth < parseInt(s().strMaxMobileWidth)
          );
        }
        function w() {
          const O = useForceUpdate();
          return (
            React.useEffect(
              () => (
                window.addEventListener("resize", O),
                () => window.removeEventListener("resize", O)
              ),
              [O],
            ),
            window.innerWidth < parseInt(styles.strMaxResponsiveWidth)
          );
        }
      },
      99371: (V) => {
        V.exports = {
          DevSummaryCtn: "_34fexyvsk4ZCS1pkTxhzel",
          LargeFormat: "_1Gpg0Ssqz-6tv_-RNy2RNp",
          CreatorDescCtn: "_1RKG_vMqjYBgcXZH6CoS3U",
          SmallFormat: "_2uzyd3CZPlDXNcII3Zl5MV",
          MinimalDisplay: "_266wPb9e0vcATAZmthTQaq",
          DevSummaryWidgetCtn: "_3-CiOktJBVfuAsdgT4OW_f",
          DevSummaryContent: "_2jbedard-PdnyO3XpMLNPg",
          DevSummaryBackground: "_3F7LyeepqJvGpcXjroux4j",
          AvatarLink: "Y9lYkfS_6GRwnSuFBgyQz",
          Avatar: "_3x-VF5_m6i66QQrJJ-WgoN",
          CreatorTitleCtn: "_141X0qDDTpudXQuTa1cYJG",
          CreatorNameName: "_3F6BGfg9HSsjiOFeHmiuOZ",
          CreatorTagline: "_3RKG3sfzCT1ven1_L1lBW1",
          Title: "AW22-NNnUJaOiqzrVG1AX",
          Followers: "_3NzMkIJWeFg7rV--RVOM_g",
          FollowerCount: "B_sn9jeeUYTEEio2U3kqO",
          SocialFollowersCtn: "_1e-4cFtf9LKQ3rhJWKcr2h",
          FollowBtnCtn: "_1C9_c4mNpE6FRz-3PWv9sd",
          FollowButton: "nDye27oueac7bocDYPZ0V",
          FollowBtnText: "EZqO5MdZoyMOQJ38Sj0iH",
          SocialContainer: "_258mBlkhbYBiZXTs4qrAP1",
          SocialImg: "_1sKMwuRIbbgs9Z7qLAlsib",
          SocialLink: "_3FZ-m-aObV2XxGykp5A1pt",
          CuratorHoverCtn: "_3GV3_URzwPB-8VZj0tMins",
          MembersListLink: "YN9wF_mOsT6piqNqvyyNz",
        };
      },
      76532: (V) => {
        V.exports = {
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
          StoreSaleWidgetContainer: "t75Je5tr-0U-BmJ9zl5ia",
          LibraryAssetExpandedDisplay: "_39Jz5Qi6nhOd7XvaNnbSoR",
          SaleItemDefaultCapsuleDisplay: "_2kFm1akTi_PvgXVMGuiGXo",
          BundleContentPreview: "_4fgFjJosEpAnm3TuEhO4q",
          PreviewCtn: "_3y21gqoSEnLQ-LQl97kRb8",
          MarketingMessage: "_3IdTKNXhXzkVoep4-5yZuN",
          StoreSaleWidgetRight: "_3aTPAkD_nC4hFYjSSUGdIx",
          StoreSaleWidgetHalfLeft: "_2OmLxbQ8PCPJL9p8YRyEKP",
          StoreSaleWidgetTitle: "w75CJy5_YgzbJm91xnOQK",
          StoreSaleWidgetLibraryAssetExtendedTop: "_3R3jAV3aZuBYZUeAW1nD7h",
          StoreSaleWidgetLeft: "_1ERk_jpTDmAx8rJn5bJNLR",
          StoreSaleDiscountBox: "_1kSDZm0Cg9anUkTfWFtwdN",
          PurchaseOption: "z_iiAWZceRwDjLt3ZisRU",
          StoreSaleWidgetImage: "x_kq8V9RpcQ0NN1peDKg7",
          CapsuleMicroTrailer: "_1ZsPp8DWmkC4OPKARDotIS",
          CapsulePlatform: "_3vk4H4zJk_wDD6oaJrsjuj",
          StoreSaleWidgetContents: "_1nfJPebnVfFpujoINIrTwx",
          StoreMetaDataCtn: "_28XzNZpa2zm6dfU_Hl1aoF",
          StoreSaleItemRelease: "dY0SjUwvxyZTq7knLEKEc",
          StoreSaleItemDev: "_3B7TyRytxk7VNgUkEksk_g",
          StoreSaleItemReview: "_2ZlC6bcWXRrbEH_H3ikW_v",
          TitleCtn: "_2hY5KQtdBm61wdeNXehgrm",
          StoreSaleWidgetCrossCenterRight: "_3oOCqm5QnRABrDXfNWZCiV",
          CapsuleBottomBar: "_1_ehE8jTqsTDnx5E7Sqjy7",
          PlayNowButton: "_14BfXA3_1WV39l7v3kD_s_",
          AddToLibraryButton: "_1ByCcqMjsaSpyZw0HZlDyi",
          StoreActionWidgetContainer: "_1KKmxZOJSplMIyYiT9qVp9",
          StoreSalePriceWidgetContainer: "_1so1AGD_m_uIBFDEc1ImOu",
          StoreSaleWidgetBgTint: "_1RmkMAMYEGZOaFv3k49gfc",
          LibraryFallbackAssetImageContainer: "_2qZSepj4cX-WLkospQs0Ep",
          FallbackBackground: "-V2UzXJLqza_XoSPI7wz6",
          SaleTagBlockCtn: "_1hS3ayvVLxIJlkxUDEBACP",
          StoreSaleWidgetCenter: "_1kHYilvb5rc5aw0OmhmfNw",
          StoreSaleLibraryAssetWidgetRight: "_101xD6rIYm8X_jp483Kshs",
          StoreSaleWidgetReleaseAndTags: "_1N4IfOUIwuiYhgqyiJ_ilZ",
          Bundle: "_292AerR2EXt-7RVrZp7E8K",
          WidgetReleaseDateAndPlatformCtn: "_1OUpla9y9ki3n--MdoUpSs",
          SaleItemBrowserRow: "_3_-EEQpFNke34pzfmip5yh",
          StoreSaleWidgetRelease: "_3MahqhNDkJzVX6vf3ysCbc",
          StoreSaleWidgetTags: "_38RGrHCxetbJdFlekFhXMJ",
          AppTag: "_38998HcikvEZtZcJXwppxS",
          StoreSaleWidgetShortDesc: "_2VdeXQqeuqu2i4yjprISF-",
          LargeText: "x5UGgerCCNFPP0IR7S-PC",
          TagTitle: "_1Tifv9nWMUHpqL-5PdjhNO",
          TagBox: "_3vCIFKfpJCOL-zsUEUiAtt",
          Tag: "_22IRYeqPYSxG2vqNmALNsh",
          Categories: "UUvYZ6JvzIAlcFDV4wF7j",
          SaleItemFullCapsuleDisplay: "_1b7dbi80Ody0jI0vYb_7bG",
          Category: "_23oBdrL9Cnh9x11yw8hmaN",
          CategoryIcon: "_2guay37SfoNrroBIe0UbYH",
          ReviewScores: "_3uIw-iqrc6AKEcMLki94nj",
          StoreSaleBroadcastWidgetRight: "_1xIPeza3-7471L4fvQRWBQ",
          StoreSalePriceActionWidgetContainer: "_20HgIIui8JHLBf62qfz5Gr",
          Action: "_3-6Yf-FWOYdz69902FtDwy",
          Discounted: "w775QgXXCtmtG8yzEp-2u",
          WishList: "_2mKhatcQBAj0oKWP1V_tFV",
          StoreSalePriceBox: "kauOU9QnW8Fs0QpxzTBph",
          SingleLineMode: "_1Ph5iLt6Bh7woGXf5RnIPB",
          StoreSaleDiscountedPriceCtn: "_2KBGD_hHRCfMXm-DDYRbQX",
          StoreSaleNewItem: "kT9bBl6aBZQ-0xiRlMWzc",
          StoreOriginalPrice: "_1odBXcjq8-Q8SFXViJa7c6",
          PrePurchase: "_1QuRa-ebvBejdSjmUkqX5v",
          NewItem: "_1ScAL4Y0dGHeXycrpJYkAC",
          PurchaseOptionDetails: "t7tIxWgiQRt2p2A979EUU",
          InGameHover: "_yRMvMttBTHiO3_SMH6Or",
          StoreSalePrepurchaseLabel: "_2mG_q95stW67uyZmLXcO8y",
          SingleLineOriginalPrice: "_1jRZOgPPLTjiXtsrX_iB1O",
          YourPriceLabel: "_1RGKRbbcPP2ImptkZ3LP6P",
          BaseDiscount: "_3BJdajInVqrAsGwPFUAshC",
          StoreSalePriceButton: "_PS7WNXgzr2qOl4HOjEIp",
          OuterCapsuleContainer: "_1omVjlZWALGX34pum8v7SF",
          BottomBarPriceInfo: "_2ogs95OHz8bo5FTfppAZiJ",
          TrailerActive: "_13__6f3T57ykYT09Z7etmf",
          CapsuleContainer: "_1kCTkXxE8CbUnnhSjsL-Kb",
          Linked: "_2uiBcpls1KbtGPBEPSQyrA",
          EventRow: "_3Ld-x7gljlKqiGE3WBsENh",
          BottomCreatorRow: "_3HMU8TsxAklmNPNyGoeAZU",
          CreatorLogo: "V0GgcGqSWSpKmV8RTzFU0",
          CreatorName: "dxHZGdYWTxGXbxaQiceKZ",
          AddToCartButton: "_1LJo1FYFdLFJE1u-PJcyxN",
          AddToWishlistButton: "_1kZYzTTdH8XUXsYP9lgb-h",
          HeaderCapsuleImageContainer: "_1W35jfl6uiYKf7Iwt3NNEz",
          MainCapsuleImageContainer: "_3ghuGooDVCn0gUuocEnV8B",
          HeroCapsuleImageContainer: "S9g2oScKWNbE4BrExvI19",
          DiscoveryQueueCtn: "_1PaQQXx0817RqTxahOzbZT",
          NoShadow: "_3xAYvMZ9m_TYNbwjyDr3d4",
          VerticalCapsule: "IR8muj8HL9MD7GoRBp7LZ",
          ForceLibrarySizing: "_1hSAcJwcSL1bbi-w5C5fjv",
          CapsuleImage: "_2xiNqpMzhZh4tVcBPD6z1W",
          LinkCapsuleImage: "_1AFjCLdN5rlqKicNNN4qJR",
          CapsuleParentInfo: "ZsrUviKbsm6zNlc92WYd9",
          ParentType: "-oMlD-aBQ0XixJxkc0cy5",
          Banner: "_2qnY9VZwgA2qx1ydmUlsUm",
          Blue: "_1f8WQvpQv-I5pqCmscp6iV",
          EarlyAccessGradient: "_1Y1oAEI6qR7aE22ePmy-8S",
          LinesImg: "_10MiXmZw9nyJIMVqHTS3FH",
          CapsuleDecorators: "_1Ss9w5OINDsfSBbOR7VWp9",
          BundleContentsCtnTransition: "_1O1d5Wj6hmDvM1KQDSEWBh",
          Expanding: "_2B71vqrTAumZWP2eCwqPfY",
          Expanded: "_1UxAPCy6v0_Fm-iAXFJMog",
          Collapsing: "_2TTiL0BkOdhiWpE6m0k6j9",
          BundleContentsCtn: "_2Fqilki7o63IJqfaEIIBpa",
          BundleContentsTitle: "_3TirrWSdMt2tPeAOOY3D_-",
          BundleShowButton: "_2W1zHZrECwIsSOb8OillGT",
          ShowContentsButton: "_3h99aa2siCkcjDn4G8vKQY",
          ShowContentsSection: "_4wRhe4a4sFJolBfzgS3Oi",
          BundleContentItem: "OhPohJ5GY4yteVD6yWZA-",
          StoreSaleWidgetOuterContainer: "_1YNtl1bfteFkaCFYHhtUMf",
          ContentsCount: "PQWG8XlLSUl9LC-7e3cPB",
          PreviewItem: "_3vQHsd2T2R-6xZB6sWSPRc",
          DeckCompatIcon: "_2nXaXW4Ps268qjxYMblw3e",
          BundleTag: "-D5ypo5W6aLJPMR1_L0y_",
          PreviewImg: "_3Z8MJxQ_Ji953C5R6oQdgY",
          DemoLayoutPopup: "tDBuR3ivkJbl0t9E_ssXD",
          FreeWeekendBar: "_3zm9xR6YDSxfquPOjhHoRc",
          FreeWeekendLabel: "_2Mqx0PhPACBhZxd70rTNo_",
          RecommendationReason: "_19AVGu5eqFoeoiqvydT0Tv",
          LocalizationSpan: "_8ZbRxdp7AJCWfdcbMmcye",
          CapsuleName: "_16nzXvpmoPX2AHcWtWHQsU",
          DiscountIconCtn: "_12oL_Na-4ZnfDriQ80BEBc",
          MaxActionButtonWidth: "_1AiAr0lqTfJuoAry1CmxyW",
          BackgroundAnimation: "_1CIMWCeT1o82vKuoVFS0Or",
          "ItemFocusAnim-darkerGrey-nocolor": "QmvtbjNkXhoFsHYRkJ8pk",
          "ItemFocusAnim-darkerGrey": "_2muPTTrVake-UfXJizQg6g",
          "ItemFocusAnim-darkGreySettings": "_15cm3kzIBv3fn2fxYuqTJR",
          "ItemFocusAnim-darkGrey": "_3WidOXfqJtMrQ7t9WsTNx",
          "ItemFocusAnim-grey": "_3TjvvuiDzTihqHMxswC7z_",
          "ItemFocusAnim-translucent-white-10": "_3u6erDX_vfSreCNiukX2S",
          "ItemFocusAnim-translucent-white-20": "_1pBe5-hUwVCsRu0ZWAS7NK",
          "ItemFocusAnimBorder-darkGrey": "_11_f57sto7UJFfYAgmuQ8_",
          "ItemFocusAnim-green": "_1pwlLApsSR1PWl1ys4T9Ka",
          focusAnimation: "XOkNr-sTpt-rrz1iaVQv4",
          hoverAnimation: "_2A0UXZtbRj2Hc7vKFjV9xl",
        };
      },
      64769: (V) => {
        V.exports = {
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
      39722: (V) => {
        V.exports = {
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
      10350: (V) => {
        V.exports = {
          ItemHoverSource: "_31qyh2htA-NLfzSAvjjJcl",
          Selectable: "b_zOCi3Z3BKdeweHShKDf",
          HoverContentTransition: "_14fzjUJx__1_iVvRQOFvNZ",
          Opening: "_1-VyPy3KZSzyBfUxYeZGHQ",
          Open: "_2lBsXkkcijYbtJ_ml1-6nE",
        };
      },
      95706: (V) => {
        V.exports = {
          AddToCartAnchorCtn: "_2qDFksxM_Q3AG6L1u8NwZU",
          Action: "ttu4ikNa3-0XD2V-s6GcO",
          ActionOutOfStock: "_1PlPor5x810Tggmt8VYmNm",
        };
      },
      72365: (V) => {
        V.exports = {
          DemoButton: "_28CiBI8NLjLb6f6rlg_Ymg",
          DisabledButton: "_2vOGUa8HwoudpQtMOK5Nqw",
        };
      },
      39285: (V) => {
        V.exports = {
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
      44375: (V) => {
        V.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
      73187: (V) => {
        V.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      54599: (V) => {
        V.exports = {
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
      52393: (V) => {
        V.exports = {
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
      58579: (V) => {
        V.exports = {
          ClientSelectDropdown: "_36ai7Zh_5P9n3Lpg52IdgV",
          ClientListDropdownMenu: "bEY2j4LBFVv4rCwEfxS64",
        };
      },
      37999: (V) => {
        V.exports = {
          Loading: "_24C5lxFpKz_kHyuT-8GJKK",
          LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
          Small: "_2FPxEVbkMdVDAw1TLfl_B5",
          Medium: "_2FfWbZHeiT3_nRXH-pI7av",
          Large: "_30IMocjbXd0leP4E5U2Yrx",
        };
      },
      45387: (V) => {
        V.exports = {
          strMaxMobileWidth: "700px",
          strMaxResponsiveWidth: "910px",
          strMaxTabletWidth: "1080px",
        };
      },
    },
  ]);
})();
