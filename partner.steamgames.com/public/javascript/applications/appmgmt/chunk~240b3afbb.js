/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [9150],
    {
      16114: (Q, Y, n) => {
        n.d(Y, {
          TW: () => v,
          KC: () => m,
          $z: () => g,
          _l: () => z,
          R2: () => W,
        });
        var P = n(84346);
        const r = {};
        (r.arabic = () => n.e(6696).then(n.t.bind(n, 6696, 19))),
          (r.brazilian = () => n.e(8906).then(n.t.bind(n, 58906, 19))),
          (r.bulgarian = () => n.e(3473).then(n.t.bind(n, 53473, 19))),
          (r.czech = () => n.e(3899).then(n.t.bind(n, 83899, 19))),
          (r.danish = () => n.e(9687).then(n.t.bind(n, 84925, 19))),
          (r.dutch = () => n.e(9902).then(n.t.bind(n, 69902, 19))),
          (r.english = () => n.e(716).then(n.t.bind(n, 80716, 19))),
          (r.finnish = () => n.e(1663).then(n.t.bind(n, 81663, 19))),
          (r.french = () => n.e(8484).then(n.t.bind(n, 48484, 19))),
          (r.german = () => n.e(6810).then(n.t.bind(n, 66810, 19))),
          (r.greek = () => n.e(3744).then(n.t.bind(n, 13744, 19))),
          (r.hungarian = () => n.e(2101).then(n.t.bind(n, 62101, 19))),
          (r.indonesian = () => n.e(8948).then(n.t.bind(n, 68948, 19))),
          (r.italian = () => n.e(2916).then(n.t.bind(n, 2916, 19))),
          (r.japanese = () => n.e(195).then(n.t.bind(n, 40195, 19))),
          (r.koreana = () => n.e(4259).then(n.t.bind(n, 84259, 19))),
          (r.latam = () => n.e(4475).then(n.t.bind(n, 24475, 19))),
          (r.malay = () => n.e(580).then(n.t.bind(n, 60580, 19))),
          (r.norwegian = () => n.e(6884).then(n.t.bind(n, 36884, 19))),
          (r.polish = () => n.e(5269).then(n.t.bind(n, 15269, 19))),
          (r.portuguese = () => n.e(6865).then(n.t.bind(n, 96865, 19))),
          (r.romanian = () => n.e(1391).then(n.t.bind(n, 71391, 19))),
          (r.russian = () => n.e(4933).then(n.t.bind(n, 64933, 19))),
          (r.sc_schinese = () => n.e(7503).then(n.t.bind(n, 27503, 19))),
          (r.schinese = () => n.e(4768).then(n.t.bind(n, 44768, 19))),
          (r.spanish = () => n.e(876).then(n.t.bind(n, 20876, 19))),
          (r.swedish = () => n.e(5181).then(n.t.bind(n, 75181, 19))),
          (r.tchinese = () => n.e(9779).then(n.t.bind(n, 89779, 19))),
          (r.thai = () => n.e(8970).then(n.t.bind(n, 98970, 19))),
          (r.turkish = () => n.e(7996).then(n.t.bind(n, 87996, 19))),
          (r.ukrainian = () => n.e(7306).then(n.t.bind(n, 47306, 19))),
          (r.vietnamese = () => n.e(2539).then(n.t.bind(n, 72539, 19)));
        async function F(t) {
          if (r[t]) return r[t]();
        }
        var $ = n(31275);
        const L = (0, $.l)(F);
        var h = n(44983),
          C = ((t) => (
            (t[(t.None = 0)] = "None"),
            (t[(t.Ago = 1)] = "Ago"),
            (t[(t.Remaining = 2)] = "Remaining"),
            t
          ))(C || {});
        function G(t, o) {
          const a = Date.now() / 1e3 - t;
          return A(a, o);
        }
        function A(t, o, a) {
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
          let l = (s) => Math.floor(s);
          if (
            (i.bAllowDecimal && (l = (s) => Math.round(s * 10) / 10),
            t >= Seconds.PerYear * 2)
          )
            return PkgLocalization.Localize(
              `#${e}XYears`,
              l(t / Seconds.PerYear),
            );
          if (t >= Seconds.PerYear)
            return (
              (t -= Seconds.PerYear),
              t >= Seconds.PerMonth * 2 && !i.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${e}1YearXMonths`,
                    l(t / Seconds.PerMonth),
                  )
                : PkgLocalization.Localize(`#${e}1Year`)
            );
          if (t >= Seconds.PerMonth * 2)
            return PkgLocalization.Localize(
              `#${e}XMonths`,
              l(t / Seconds.PerMonth),
            );
          if (t >= Seconds.PerWeek * 2)
            return PkgLocalization.Localize(
              `#${e}XWeeks`,
              l(t / Seconds.PerWeek),
            );
          if (t >= Seconds.PerWeek)
            return PkgLocalization.Localize(
              `#${e}1Week`,
              l(t / Seconds.PerWeek),
            );
          if (t >= Seconds.PerDay * 2)
            return PkgLocalization.Localize(
              `#${e}XDays`,
              l(t / Seconds.PerDay),
            );
          if (t >= Seconds.PerDay)
            return (
              (t -= Seconds.PerDay),
              t >= Seconds.PerHour * 2 && !i.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${e}1DayXHours`,
                    l(t / Seconds.PerHour),
                  )
                : PkgLocalization.Localize(`#${e}1Day`)
            );
          if (t >= Seconds.PerHour * 2)
            return PkgLocalization.Localize(
              `#${e}XHours`,
              l(t / Seconds.PerHour),
            );
          if (t >= Seconds.PerHour)
            return (
              (t -= Seconds.PerHour),
              t >= Seconds.PerMinute * 2 && !i.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${e}1HourXMinutes`,
                    l(t / Seconds.PerMinute),
                  )
                : PkgLocalization.Localize(`#${e}1Hour`)
            );
          if (t >= Seconds.PerMinute * 2) {
            const s = Math.floor(t / Seconds.PerMinute),
              c = t % Seconds.PerMinute;
            return !i.bHighGranularity || c == 0
              ? PkgLocalization.Localize(
                  `#${e}XMinutes`,
                  l(t / Seconds.PerMinute),
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
        function v(t, o, a) {
          let i;
          o === void 0 || o === !0 || o === !1
            ? (i = {
                weekday: a ? "long" : "short",
                year: o ? void 0 : "numeric",
              })
            : (i = o);
          let e = new Date(t * 1e3);
          const l = {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
            ...i,
          };
          return e.toLocaleDateString((0, P.J)(), l);
        }
        function U(t, o) {
          let a = new Date(t * 1e3),
            i = new Date(o * 1e3);
          return a.getFullYear() != i.getFullYear() ||
            a.getMonth() != i.getMonth() ||
            a.getDate() != i.getDate()
            ? u(t, o)
            : m(t) + " - " + m(o);
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
          const l = { month: "short", day: "numeric" },
            s = a.toLocaleDateString(GetPreferredLocales(), l) + " - ";
          if (a.getMonth() == i.getMonth()) {
            const c = { day: "numeric" };
            return s + i.toLocaleDateString(GetPreferredLocales(), c);
          } else return s + i.toLocaleDateString(GetPreferredLocales(), l);
        }
        function g(t, o) {
          let a = new Date(t * 1e3);
          const i = { year: "numeric", month: "short", day: "numeric", ...o };
          return a.toLocaleDateString((0, P.J)(), i);
        }
        function z(t, o) {
          const {
              fullmonthname: a = !1,
              bUseRelativeNames: i = !0,
              bIncludeDayName: e = !1,
            } = o ?? {},
            l = new Date(),
            s = new Date(t * 1e3);
          if (s.getFullYear() != l.getFullYear())
            return g(t, { month: a ? "long" : "short" });
          const c = new Date();
          if ((c.setHours(0, 0, 0, 0), i)) {
            if (s >= c) {
              if ((c.setDate(c.getDate() + 1), s < c))
                return L.Localize("#Time_Today");
              if ((c.setDate(c.getDate() + 1), s < c))
                return L.Localize("#Time_Tomorrow");
            } else if ((c.setDate(c.getDate() - 1), s >= c))
              return L.Localize("#Time_Yesterday");
          }
          const d = { month: a ? "long" : "short", day: "numeric" };
          return e && (d.weekday = "long"), s.toLocaleDateString((0, P.J)(), d);
        }
        function y(t) {
          let o = new Date(t * 1e3);
          return O(o);
        }
        function H(t) {
          let o = new Date(t * 1e3);
          return X(o);
        }
        function T(t) {
          const o = new Date();
          o.setHours(15);
          const a = o.toLocaleTimeString(t, { hour: "numeric" }),
            i = o.toLocaleTimeString(t, { hour: "numeric", hour12: !1 });
          return a == i;
        }
        function m(t, o, a) {
          const i = new Date(t * 1e3),
            e = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
            l = { hour: "numeric", minute: "2-digit" },
            s = (0, P.J)(),
            d = { ...(o?.bForce24HourClock || T(s[0]) ? e : l), ...a };
          return i.toLocaleTimeString(s, d);
        }
        function x(t, o, a) {
          const i = new Date(t * 1e3);
          return N(i, !1, !1) + " " + m(t, { bForce24HourClock: o }) + " " + a;
        }
        function N(t, o = !1, a = !0) {
          const i = {
            weekday: a ? "long" : "short",
            day: "numeric",
            month: o ? "long" : "short",
          };
          return t.toLocaleDateString(GetPreferredLocales(), i);
        }
        function I(t) {
          return t.toLocaleDateString(GetPreferredLocales(), {
            weekday: "long",
          });
        }
        function B(t) {
          return t.toLocaleDateString(GetPreferredLocales(), { month: "long" });
        }
        function J(t) {
          return t.toLocaleDateString(GetPreferredLocales(), {
            month: "short",
          });
        }
        function X(t) {
          return t.toLocaleDateString(GetPreferredLocales(), {
            year: "numeric",
          });
        }
        function O(t) {
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
        function W(t) {
          const o = Math.floor(t / h.Kp.PerYear),
            a = Math.floor(t / h.Kp.PerMonth),
            i = Math.floor((t % h.Kp.PerMonth) / h.Kp.PerDay),
            e = Math.floor((t % h.Kp.PerDay) / h.Kp.PerHour),
            l = Math.floor((t % h.Kp.PerHour) / h.Kp.PerMinute);
          return (
            (t = t % h.Kp.PerMinute),
            o > 0
              ? L.Localize("#TimeRemaining_MoreThanOneYear")
              : a > 0
                ? L.Localize("#TimeRemaining_MonthsDays", a, i)
                : i > 0
                  ? L.Localize(
                      "#TimeRemaining_DaysHoursMinutes",
                      i,
                      e.toString().padStart(2, "0"),
                      l.toString().padStart(2, "0"),
                    )
                  : e > 0
                    ? L.Localize(
                        "#TimeRemaining_HoursMinutesSeconds",
                        e.toString().padStart(2, "0"),
                        l.toString().padStart(2, "0"),
                        t.toString().padStart(2, "0"),
                      )
                    : L.Localize(
                        "#TimeRemaining_MinutesSeconds",
                        l.toString().padStart(2, "0"),
                        t.toString().padStart(2, "0"),
                      )
          );
        }
        function S(t, o, a) {
          for (; t.length < o; ) t = a + t;
          return t;
        }
        function R(t) {
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
        function j(t, o, a) {
          let i = t < 0;
          t = i ? 0 - t : t;
          const e = R(t),
            l = e.fraction.toFixed(2).split(".")[1],
            s = o ?? !0;
          let c = !s || l == "00";
          i &&
            e.hours == 0 &&
            e.minutes == 0 &&
            e.seconds == 0 &&
            c &&
            (i = !1);
          let d = "";
          if (e.hours) {
            const f = e.hours.toString(),
              D = S(e.minutes.toString(), 2, "0"),
              M = S(e.seconds.toString(), 2, "0"),
              K = s
                ? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
                : "#Duration_Abbreviation_HourMinuteSecond";
            d = PkgLocalization.Localize(K, f, D, M, l);
          } else if (e.minutes) {
            const f = e.minutes.toString(),
              D = S(e.seconds.toString(), 2, "0"),
              M = s
                ? "#Duration_Abbreviation_MinuteSecondMillisecond"
                : "#Duration_Abbreviation_MinuteSecond";
            d = PkgLocalization.Localize(M, f, D, l);
          } else if (e.seconds) {
            const f = e.seconds.toString(),
              D = s
                ? "#Duration_Abbreviation_SecondMillisecond"
                : "#Duration_Abbreviation_Second";
            d = PkgLocalization.Localize(D, f, l);
          }
          return (
            i &&
              (a
                ? (d = PkgLocalization.Localize("#Duration_WrittenNegation", d))
                : (d = "-" + d)),
            d
          );
        }
        function V(t, o, a) {
          let i = t < 0;
          t = i ? 0 - t : t;
          const e = R(t),
            l = S(e.seconds.toString(), 2, "0"),
            s = e.fraction.toFixed(2).split(".")[1],
            c = o ?? !0;
          let d = !c || s == "00";
          i &&
            e.hours == 0 &&
            e.minutes == 0 &&
            e.seconds == 0 &&
            d &&
            (i = !1);
          let f = "";
          if (e.hours) {
            const D = S(e.minutes.toString(), 2, "0"),
              M = c
                ? "#Duration_HourMinuteSecondMillisecond"
                : "#Duration_HourMinuteSecond";
            f = PkgLocalization.Localize(M, e.hours, D, l, s);
          } else {
            const D = e.minutes.toString(),
              M = c
                ? "#Duration_MinuteSecondMillisecond"
                : "#Duration_MinuteSecond";
            f = PkgLocalization.Localize(M, D, l, s);
          }
          return (
            i &&
              (a
                ? (f = PkgLocalization.Localize("#Duration_WrittenNegation", f))
                : (f = "-" + f)),
            f
          );
        }
        function E(t) {
          const o = R(t),
            a = o.hours * 60 + o.minutes,
            i = o.hours,
            e = Math.floor(o.hours / 24),
            l = Math.floor(e / 30);
          return l > 1
            ? PkgLocalization.Localize("#ReadableDuration_Months", l)
            : l === 1
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
      44983: (Q, Y, n) => {
        n.d(Y, { Kp: () => P });
        const P = {
          PerYear: 31536e3,
          PerMonth: 2628e3,
          PerWeek: 604800,
          PerDay: 86400,
          PerHour: 3600,
          PerMinute: 60,
        };
        function r(u, g) {
          return (
            u.getFullYear() == g.getFullYear() &&
            u.getMonth() == g.getMonth() &&
            u.getDate() == g.getDate()
          );
        }
        function F(u, g) {
          let z = new Date(u);
          return z.setDate(z.getDate() - 1), r(z, g);
        }
        function $(u, g) {
          return u.getFullYear() == g.getFullYear();
        }
        function L(u) {
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
        function h(u) {
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
        function C(u) {
          return new Date(u.getFullYear(), u.getMonth(), 1, 0, 0, 0, 0);
        }
        function G(u) {
          return new Promise((g) => setTimeout(g, u));
        }
        function A() {
          return Math.floor(Date.now() / 1e3);
        }
        function v(u) {
          return Math.floor(u.getTime() / 1e3);
        }
        function U(u) {
          const g = Math.round(u / 1e3),
            z = Math.floor(g % 60),
            y = Math.floor((g / 60) % 60),
            H = Math.floor(g / 3600);
          let T = !1,
            m = "";
          return (
            H > 0 && ((m += H + ":"), (T = !0)),
            (m += T && y < 10 ? "0" + y + ":" : y + ":"),
            (m += z < 10 ? "0" + z : z),
            m
          );
        }
      },
    },
  ]);
})();
