/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9459],
    {
      84346: ($, S, n) => {
        n.d(S, { J: () => y });
        var L = n(72609),
          l = n(31275);
        function y() {
          return (0, l.A)().languages.map((d) => Y(d.strISOCode));
        }
        function Y(d) {
          return d.length == 2 && L.TS.COUNTRY ? `${d}-${L.TS.COUNTRY}` : d;
        }
      },
      16114: ($, S, n) => {
        n.d(S, {
          cc: () => W,
          TW: () => O,
          P0: () => N,
          KC: () => D,
          $z: () => g,
          _l: () => m,
          R2: () => x,
        });
        var L = n(84346);
        const l = {};
        (l.arabic = () => n.e(6696).then(n.t.bind(n, 6696, 19))),
          (l.brazilian = () => n.e(8906).then(n.t.bind(n, 58906, 19))),
          (l.bulgarian = () => n.e(3473).then(n.t.bind(n, 53473, 19))),
          (l.czech = () => n.e(3899).then(n.t.bind(n, 83899, 19))),
          (l.danish = () => n.e(4925).then(n.t.bind(n, 84925, 19))),
          (l.dutch = () => n.e(9902).then(n.t.bind(n, 69902, 19))),
          (l.english = () => n.e(716).then(n.t.bind(n, 80716, 19))),
          (l.finnish = () => n.e(1663).then(n.t.bind(n, 81663, 19))),
          (l.french = () => n.e(8484).then(n.t.bind(n, 48484, 19))),
          (l.german = () => n.e(6810).then(n.t.bind(n, 66810, 19))),
          (l.greek = () => n.e(3744).then(n.t.bind(n, 13744, 19))),
          (l.hungarian = () => n.e(2101).then(n.t.bind(n, 62101, 19))),
          (l.indonesian = () => n.e(8948).then(n.t.bind(n, 68948, 19))),
          (l.italian = () => n.e(2916).then(n.t.bind(n, 2916, 19))),
          (l.japanese = () => n.e(195).then(n.t.bind(n, 40195, 19))),
          (l.koreana = () => n.e(4259).then(n.t.bind(n, 84259, 19))),
          (l.latam = () => n.e(4475).then(n.t.bind(n, 24475, 19))),
          (l.malay = () => n.e(580).then(n.t.bind(n, 60580, 19))),
          (l.norwegian = () => n.e(6884).then(n.t.bind(n, 36884, 19))),
          (l.polish = () => n.e(5269).then(n.t.bind(n, 15269, 19))),
          (l.portuguese = () => n.e(6865).then(n.t.bind(n, 96865, 19))),
          (l.romanian = () => n.e(1391).then(n.t.bind(n, 71391, 19))),
          (l.russian = () => n.e(4933).then(n.t.bind(n, 64933, 19))),
          (l.sc_schinese = () => n.e(7503).then(n.t.bind(n, 27503, 19))),
          (l.schinese = () => n.e(4768).then(n.t.bind(n, 44768, 19))),
          (l.spanish = () => n.e(876).then(n.t.bind(n, 20876, 19))),
          (l.swedish = () => n.e(5181).then(n.t.bind(n, 75181, 19))),
          (l.tchinese = () => n.e(9779).then(n.t.bind(n, 89779, 19))),
          (l.thai = () => n.e(8970).then(n.t.bind(n, 98970, 19))),
          (l.turkish = () => n.e(7996).then(n.t.bind(n, 87996, 19))),
          (l.ukrainian = () => n.e(7306).then(n.t.bind(n, 47306, 19))),
          (l.vietnamese = () => n.e(2539).then(n.t.bind(n, 72539, 19)));
        async function y(t) {
          if (l[t]) return l[t]();
        }
        var Y = n(31275);
        const d = (0, Y.l)(y);
        var z = n(44983),
          A = ((t) => (
            (t[(t.None = 0)] = "None"),
            (t[(t.Ago = 1)] = "Ago"),
            (t[(t.Remaining = 2)] = "Remaining"),
            t
          ))(A || {});
        function U(t, o) {
          const a = Date.now() / 1e3 - t;
          return v(a, o);
        }
        function v(t, o, a) {
          let i;
          typeof o == "boolean"
            ? (i = {
                eSuffix: o ? 0 : 1,
                bForceSingleUnits: a,
                bHighGranularity: !1,
              })
            : (i = {
                eSuffix: 1,
                bForceSingleUnits: !1,
                bHighGranularity: !1,
                ...o,
              });
          let e = "TimeInterval_";
          i.eSuffix == 1
            ? (e = "TimeSince_")
            : i.eSuffix == 2 && (e = "TimeRemaining_");
          let r = (s) => Math.floor(s);
          if (
            (i.bAllowDecimal && (r = (s) => Math.round(s * 10) / 10),
            t >= Seconds.PerYear * 2)
          )
            return PkgLocalization.Localize(
              `#${e}XYears`,
              r(t / Seconds.PerYear),
            );
          if (t >= Seconds.PerYear)
            return (
              (t -= Seconds.PerYear),
              t >= Seconds.PerMonth * 2 && !i.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${e}1YearXMonths`,
                    r(t / Seconds.PerMonth),
                  )
                : PkgLocalization.Localize(`#${e}1Year`)
            );
          if (t >= Seconds.PerMonth * 2)
            return PkgLocalization.Localize(
              `#${e}XMonths`,
              r(t / Seconds.PerMonth),
            );
          if (t >= Seconds.PerWeek * 2)
            return PkgLocalization.Localize(
              `#${e}XWeeks`,
              r(t / Seconds.PerWeek),
            );
          if (t >= Seconds.PerWeek)
            return PkgLocalization.Localize(
              `#${e}1Week`,
              r(t / Seconds.PerWeek),
            );
          if (t >= Seconds.PerDay * 2)
            return PkgLocalization.Localize(
              `#${e}XDays`,
              r(t / Seconds.PerDay),
            );
          if (t >= Seconds.PerDay)
            return (
              (t -= Seconds.PerDay),
              t >= Seconds.PerHour * 2 && !i.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${e}1DayXHours`,
                    r(t / Seconds.PerHour),
                  )
                : PkgLocalization.Localize(`#${e}1Day`)
            );
          if (t >= Seconds.PerHour * 2)
            return PkgLocalization.Localize(
              `#${e}XHours`,
              r(t / Seconds.PerHour),
            );
          if (t >= Seconds.PerHour)
            return (
              (t -= Seconds.PerHour),
              t >= Seconds.PerMinute * 2 && !i.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${e}1HourXMinutes`,
                    r(t / Seconds.PerMinute),
                  )
                : PkgLocalization.Localize(`#${e}1Hour`)
            );
          if (t >= Seconds.PerMinute * 2) {
            const s = Math.floor(t / Seconds.PerMinute),
              c = t % Seconds.PerMinute;
            return !i.bHighGranularity || c == 0
              ? PkgLocalization.Localize(
                  `#${e}XMinutes`,
                  r(t / Seconds.PerMinute),
                )
              : c == 1
                ? PkgLocalization.Localize(`#${e}XMinutes1Second`, s)
                : PkgLocalization.Localize(`#${e}XMinutesXSeconds`, s, c);
          } else if (t >= Seconds.PerMinute) {
            const s = t % Seconds.PerMinute;
            return !i.bHighGranularity || s == 0
              ? PkgLocalization.Localize(`#${e}1Minute`)
              : s == 1
                ? PkgLocalization.Localize(`#${e}1Minute1Second`)
                : PkgLocalization.Localize(`#${e}1MinuteXSeconds`, s);
          } else
            return i.bHighGranularity
              ? t == 1
                ? PkgLocalization.Localize(`#${e}1Second`)
                : PkgLocalization.Localize(`#${e}XSeconds`, t)
              : PkgLocalization.Localize(`#${e}LessThanAMinute`);
        }
        function O(t, o, a) {
          let i;
          o === void 0 || o === !0 || o === !1
            ? (i = {
                weekday: a ? "long" : "short",
                year: o ? void 0 : "numeric",
              })
            : (i = o);
          let e = new Date(t * 1e3);
          const r = {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
            ...i,
          };
          return e.toLocaleDateString((0, L.J)(), r);
        }
        function Q(t, o) {
          let a = new Date(t * 1e3),
            i = new Date(o * 1e3);
          return a.getFullYear() != i.getFullYear() ||
            a.getMonth() != i.getMonth() ||
            a.getDate() != i.getDate()
            ? u(t, o)
            : D(t) + " - " + D(o);
        }
        function u(t, o) {
          let a = new Date(t * 1e3),
            i = new Date(o * 1e3);
          const e = new Date();
          if (
            a.getFullYear() != i.getFullYear() ||
            e.getFullYear() == a.getFullYear()
          )
            return `${g(t)} - ${g(o)}`;
          const r = { month: "short", day: "numeric" },
            s = a.toLocaleDateString(GetPreferredLocales(), r) + " - ";
          if (a.getMonth() == i.getMonth()) {
            const c = { day: "numeric" };
            return s + i.toLocaleDateString(GetPreferredLocales(), c);
          } else return s + i.toLocaleDateString(GetPreferredLocales(), r);
        }
        function g(t, o) {
          let a = new Date(t * 1e3);
          const i = { year: "numeric", month: "short", day: "numeric", ...o };
          return a.toLocaleDateString((0, L.J)(), i);
        }
        function m(t, o) {
          const {
              fullmonthname: a = !1,
              bUseRelativeNames: i = !0,
              bIncludeDayName: e = !1,
            } = o != null ? o : {},
            r = new Date(),
            s = new Date(t * 1e3);
          if (s.getFullYear() != r.getFullYear())
            return g(t, { month: a ? "long" : "short" });
          const c = new Date();
          if ((c.setHours(0, 0, 0, 0), i)) {
            if (s >= c) {
              if ((c.setDate(c.getDate() + 1), s < c))
                return d.Localize("#Time_Today");
              if ((c.setDate(c.getDate() + 1), s < c))
                return d.Localize("#Time_Tomorrow");
            } else if ((c.setDate(c.getDate() - 1), s >= c))
              return d.Localize("#Time_Yesterday");
          }
          const f = { month: a ? "long" : "short", day: "numeric" };
          return e && (f.weekday = "long"), s.toLocaleDateString((0, L.J)(), f);
        }
        function R(t) {
          let o = new Date(t * 1e3);
          return K(o);
        }
        function F(t) {
          let o = new Date(t * 1e3);
          return X(o);
        }
        function H(t) {
          const o = new Date();
          o.setHours(15);
          const a = o.toLocaleTimeString(t, { hour: "numeric" }),
            i = o.toLocaleTimeString(t, { hour: "numeric", hour12: !1 });
          return a == i;
        }
        function D(t, o, a) {
          const i = new Date(t * 1e3),
            e = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
            r = { hour: "numeric", minute: "2-digit" },
            s = (0, L.J)(),
            f = {
              ...((o == null ? void 0 : o.bForce24HourClock) || H(s[0])
                ? e
                : r),
              ...a,
            };
          return i.toLocaleTimeString(s, f);
        }
        function N(t, o, a) {
          const i = new Date(t * 1e3);
          return G(i, !1, !1) + " " + D(t, { bForce24HourClock: o }) + " " + a;
        }
        function G(t, o = !1, a = !0) {
          const i = {
            weekday: a ? "long" : "short",
            day: "numeric",
            month: o ? "long" : "short",
          };
          return t.toLocaleDateString((0, L.J)(), i);
        }
        function W(t) {
          return t.toLocaleDateString((0, L.J)(), { weekday: "long" });
        }
        function J(t) {
          return t.toLocaleDateString(GetPreferredLocales(), { month: "long" });
        }
        function B(t) {
          return t.toLocaleDateString(GetPreferredLocales(), {
            month: "short",
          });
        }
        function X(t) {
          return t.toLocaleDateString(GetPreferredLocales(), {
            year: "numeric",
          });
        }
        function K(t) {
          return t.toLocaleDateString(GetPreferredLocales(), {
            month: "long",
            year: "numeric",
          });
        }
        function Z(t, o) {
          switch (t.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return PkgLocalization.Localize(
                o
                  ? "#Time_QuarterOfYear_Expanded_Q1"
                  : "#Time_QuarterOfYear_Q1",
                t.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return PkgLocalization.Localize(
                o
                  ? "#Time_QuarterOfYear_Expanded_Q2"
                  : "#Time_QuarterOfYear_Q2",
                t.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return PkgLocalization.Localize(
                o
                  ? "#Time_QuarterOfYear_Expanded_Q3"
                  : "#Time_QuarterOfYear_Q3",
                t.getUTCFullYear(),
              );
            default:
              return PkgLocalization.Localize(
                o
                  ? "#Time_QuarterOfYear_Expanded_Q4"
                  : "#Time_QuarterOfYear_Q4",
                t.getUTCFullYear(),
              );
          }
        }
        function x(t) {
          const o = Math.floor(t / z.Kp.PerYear),
            a = Math.floor(t / z.Kp.PerMonth),
            i = Math.floor((t % z.Kp.PerMonth) / z.Kp.PerDay),
            e = Math.floor((t % z.Kp.PerDay) / z.Kp.PerHour),
            r = Math.floor((t % z.Kp.PerHour) / z.Kp.PerMinute);
          return (
            (t = t % z.Kp.PerMinute),
            o > 0
              ? d.Localize("#TimeRemaining_MoreThanOneYear")
              : a > 0
                ? d.Localize("#TimeRemaining_MonthsDays", a, i)
                : i > 0
                  ? d.Localize(
                      "#TimeRemaining_DaysHoursMinutes",
                      i,
                      e.toString().padStart(2, "0"),
                      r.toString().padStart(2, "0"),
                    )
                  : e > 0
                    ? d.Localize(
                        "#TimeRemaining_HoursMinutesSeconds",
                        e.toString().padStart(2, "0"),
                        r.toString().padStart(2, "0"),
                        t.toString().padStart(2, "0"),
                      )
                    : d.Localize(
                        "#TimeRemaining_MinutesSeconds",
                        r.toString().padStart(2, "0"),
                        t.toString().padStart(2, "0"),
                      )
          );
        }
        function T(t, o, a) {
          for (; t.length < o; ) t = a + t;
          return t;
        }
        function C(t) {
          return (
            (t === void 0 || isNaN(t)) && (t = 0),
            {
              hours: Math.floor(t / 3600),
              minutes: Math.floor((t % 3600) / 60),
              seconds: Math.floor(t % 60),
              fraction: t - Math.floor(t),
            }
          );
        }
        function E(t, o, a) {
          let i = t < 0;
          t = i ? 0 - t : t;
          const e = C(t),
            r = e.fraction.toFixed(2).split(".")[1],
            s = o != null ? o : !0;
          let c = !s || r == "00";
          i &&
            e.hours == 0 &&
            e.minutes == 0 &&
            e.seconds == 0 &&
            c &&
            (i = !1);
          let f = "";
          if (e.hours) {
            const h = e.hours.toString(),
              M = T(e.minutes.toString(), 2, "0"),
              P = T(e.seconds.toString(), 2, "0"),
              I = s
                ? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
                : "#Duration_Abbreviation_HourMinuteSecond";
            f = PkgLocalization.Localize(I, h, M, P, r);
          } else if (e.minutes) {
            const h = e.minutes.toString(),
              M = T(e.seconds.toString(), 2, "0"),
              P = s
                ? "#Duration_Abbreviation_MinuteSecondMillisecond"
                : "#Duration_Abbreviation_MinuteSecond";
            f = PkgLocalization.Localize(P, h, M, r);
          } else if (e.seconds) {
            const h = e.seconds.toString(),
              M = s
                ? "#Duration_Abbreviation_SecondMillisecond"
                : "#Duration_Abbreviation_Second";
            f = PkgLocalization.Localize(M, h, r);
          }
          return (
            i &&
              (a
                ? (f = PkgLocalization.Localize("#Duration_WrittenNegation", f))
                : (f = "-" + f)),
            f
          );
        }
        function j(t, o, a) {
          let i = t < 0;
          t = i ? 0 - t : t;
          const e = C(t),
            r = T(e.seconds.toString(), 2, "0"),
            s = e.fraction.toFixed(2).split(".")[1],
            c = o != null ? o : !0;
          let f = !c || s == "00";
          i &&
            e.hours == 0 &&
            e.minutes == 0 &&
            e.seconds == 0 &&
            f &&
            (i = !1);
          let h = "";
          if (e.hours) {
            const M = T(e.minutes.toString(), 2, "0"),
              P = c
                ? "#Duration_HourMinuteSecondMillisecond"
                : "#Duration_HourMinuteSecond";
            h = PkgLocalization.Localize(P, e.hours, M, r, s);
          } else {
            const M = e.minutes.toString(),
              P = c
                ? "#Duration_MinuteSecondMillisecond"
                : "#Duration_MinuteSecond";
            h = PkgLocalization.Localize(P, M, r, s);
          }
          return (
            i &&
              (a
                ? (h = PkgLocalization.Localize("#Duration_WrittenNegation", h))
                : (h = "-" + h)),
            h
          );
        }
        function V(t) {
          const o = C(t),
            a = o.hours * 60 + o.minutes,
            i = o.hours,
            e = Math.floor(o.hours / 24),
            r = Math.floor(e / 30);
          return r > 1
            ? PkgLocalization.Localize("#ReadableDuration_Months", r)
            : r === 1
              ? PkgLocalization.Localize("#ReadableDuration_OneMonth")
              : e > 1
                ? PkgLocalization.Localize("#ReadableDuration_Days", e)
                : i > 2
                  ? PkgLocalization.Localize("#ReadableDuration_Hours", i)
                  : a > 2
                    ? PkgLocalization.Localize("#ReadableDuration_Minutes", a)
                    : a > 1
                      ? PkgLocalization.Localize("#ReadableDuration_OneMinute")
                      : PkgLocalization.Localize(
                          "#ReadableDuration_LessThanOneMinute",
                        );
        }
      },
      44983: ($, S, n) => {
        n.d(S, { Kp: () => L });
        const L = {
          PerYear: 31536e3,
          PerMonth: 2628e3,
          PerWeek: 604800,
          PerDay: 86400,
          PerHour: 3600,
          PerMinute: 60,
        };
        function l(u, g) {
          return (
            u.getFullYear() == g.getFullYear() &&
            u.getMonth() == g.getMonth() &&
            u.getDate() == g.getDate()
          );
        }
        function y(u, g) {
          let m = new Date(u);
          return m.setDate(m.getDate() - 1), l(m, g);
        }
        function Y(u, g) {
          return u.getFullYear() == g.getFullYear();
        }
        function d(u) {
          return new Date(
            u.getFullYear(),
            u.getMonth(),
            u.getDate(),
            u.getHours(),
            0,
            0,
            0,
          );
        }
        function z(u) {
          return new Date(
            u.getFullYear(),
            u.getMonth(),
            u.getDate(),
            0,
            0,
            0,
            0,
          );
        }
        function A(u) {
          return new Date(u.getFullYear(), u.getMonth(), 1, 0, 0, 0, 0);
        }
        function U(u) {
          return new Promise((g) => setTimeout(g, u));
        }
        function v() {
          return Math.floor(Date.now() / 1e3);
        }
        function O(u) {
          return Math.floor(u.getTime() / 1e3);
        }
        function Q(u) {
          const g = Math.round(u / 1e3),
            m = Math.floor(g % 60),
            R = Math.floor((g / 60) % 60),
            F = Math.floor(g / 3600);
          let H = !1,
            D = "";
          return (
            F > 0 && ((D += F + ":"), (H = !0)),
            (D += H && R < 10 ? "0" + R + ":" : R + ":"),
            (D += m < 10 ? "0" + m : m),
            D
          );
        }
      },
    },
  ]);
})();
