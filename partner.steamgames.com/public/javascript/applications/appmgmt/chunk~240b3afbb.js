/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9150],
  {
    67361: (e, t, n) => {
      n.d(t, {
        TW: () => h,
        KC: () => d,
        $z: () => u,
        _l: () => c,
        R2: () => l,
      });
      var i = n(3049);
      const a = {};
      (a.arabic = () => n.e(6696).then(n.t.bind(n, 6696, 19))),
        (a.brazilian = () => n.e(8906).then(n.t.bind(n, 58906, 19))),
        (a.bulgarian = () => n.e(3473).then(n.t.bind(n, 53473, 19))),
        (a.czech = () => n.e(3899).then(n.t.bind(n, 83899, 19))),
        (a.danish = () => n.e(4925).then(n.t.bind(n, 84925, 19))),
        (a.dutch = () => n.e(9902).then(n.t.bind(n, 69902, 19))),
        (a.english = () => n.e(716).then(n.t.bind(n, 80716, 19))),
        (a.finnish = () => n.e(1663).then(n.t.bind(n, 81663, 19))),
        (a.french = () => n.e(8484).then(n.t.bind(n, 48484, 19))),
        (a.german = () => n.e(6810).then(n.t.bind(n, 66810, 19))),
        (a.greek = () => n.e(3744).then(n.t.bind(n, 13744, 19))),
        (a.hungarian = () => n.e(2101).then(n.t.bind(n, 62101, 19))),
        (a.indonesian = () => n.e(8948).then(n.t.bind(n, 68948, 19))),
        (a.italian = () => n.e(2916).then(n.t.bind(n, 2916, 19))),
        (a.japanese = () => n.e(195).then(n.t.bind(n, 40195, 19))),
        (a.koreana = () => n.e(4259).then(n.t.bind(n, 84259, 19))),
        (a.latam = () => n.e(4475).then(n.t.bind(n, 24475, 19))),
        (a.norwegian = () => n.e(6884).then(n.t.bind(n, 36884, 19))),
        (a.polish = () => n.e(5269).then(n.t.bind(n, 15269, 19))),
        (a.portuguese = () => n.e(6865).then(n.t.bind(n, 96865, 19))),
        (a.romanian = () => n.e(1391).then(n.t.bind(n, 71391, 19))),
        (a.russian = () => n.e(4933).then(n.t.bind(n, 64933, 19))),
        (a.sc_schinese = () => n.e(7503).then(n.t.bind(n, 27503, 19))),
        (a.schinese = () => n.e(4768).then(n.t.bind(n, 44768, 19))),
        (a.spanish = () => n.e(876).then(n.t.bind(n, 20876, 19))),
        (a.swedish = () => n.e(5181).then(n.t.bind(n, 75181, 19))),
        (a.tchinese = () => n.e(9779).then(n.t.bind(n, 89779, 19))),
        (a.thai = () => n.e(8970).then(n.t.bind(n, 98970, 19))),
        (a.turkish = () => n.e(7996).then(n.t.bind(n, 87996, 19))),
        (a.ukrainian = () => n.e(7306).then(n.t.bind(n, 47306, 19))),
        (a.vietnamese = () => n.e(2539).then(n.t.bind(n, 72539, 19)));
      const r = (0, n(13843).l)(async function (e) {
        if (a[e]) return a[e]();
      });
      var o,
        s = n(83710);
      function h(e, t, n) {
        let a;
        a =
          void 0 === t || !0 === t || !1 === t
            ? { weekday: n ? "long" : "short", year: t ? void 0 : "numeric" }
            : t;
        let r = new Date(1e3 * e);
        const o = {
          weekday: "short",
          month: "long",
          day: "numeric",
          year: "numeric",
          ...a,
        };
        return r.toLocaleDateString((0, i.J)(), o);
      }
      function u(e, t) {
        const n = { year: "numeric", month: "short", day: "numeric", ...t };
        return new Date(1e3 * e).toLocaleDateString((0, i.J)(), n);
      }
      function c(e, t) {
        const {
            fullmonthname: n = !1,
            bUseRelativeNames: a = !0,
            bIncludeDayName: o = !1,
          } = t ?? {},
          s = new Date(),
          h = new Date(1e3 * e);
        if (h.getFullYear() != s.getFullYear())
          return u(e, { month: n ? "long" : "short" });
        const c = new Date();
        if ((c.setHours(0, 0, 0, 0), a))
          if (h >= c) {
            if ((c.setDate(c.getDate() + 1), h < c))
              return r.Localize("#Time_Today");
            if ((c.setDate(c.getDate() + 1), h < c))
              return r.Localize("#Time_Tomorrow");
          } else if ((c.setDate(c.getDate() - 1), h >= c))
            return r.Localize("#Time_Yesterday");
        const d = { month: n ? "long" : "short", day: "numeric" };
        return o && (d.weekday = "long"), h.toLocaleDateString((0, i.J)(), d);
      }
      function d(e, t, n) {
        const a = new Date(1e3 * e),
          r = (0, i.J)(),
          o = {
            ...(t?.bForce24HourClock ||
            (function (e) {
              const t = new Date();
              return (
                t.setHours(15),
                t.toLocaleTimeString(e, { hour: "numeric" }) ==
                  t.toLocaleTimeString(e, { hour: "numeric", hour12: !1 })
              );
            })(r[0])
              ? { hour: "numeric", minute: "2-digit", hourCycle: "h23" }
              : { hour: "numeric", minute: "2-digit" }),
            ...n,
          };
        return a.toLocaleTimeString(r, o);
      }
      function l(e) {
        const t = Math.floor(e / s.Kp.PerYear),
          n = Math.floor(e / s.Kp.PerMonth),
          i = Math.floor((e % s.Kp.PerMonth) / s.Kp.PerDay),
          a = Math.floor((e % s.Kp.PerDay) / s.Kp.PerHour),
          o = Math.floor((e % s.Kp.PerHour) / s.Kp.PerMinute);
        return (
          (e %= s.Kp.PerMinute),
          t > 0
            ? r.Localize("#TimeRemaining_MoreThanOneYear")
            : n > 0
              ? r.Localize("#TimeRemaining_MonthsDays", n, i)
              : i > 0
                ? r.Localize(
                    "#TimeRemaining_DaysHoursMinutes",
                    i,
                    a.toString().padStart(2, "0"),
                    o.toString().padStart(2, "0"),
                  )
                : a > 0
                  ? r.Localize(
                      "#TimeRemaining_HoursMinutesSeconds",
                      a.toString().padStart(2, "0"),
                      o.toString().padStart(2, "0"),
                      e.toString().padStart(2, "0"),
                    )
                  : r.Localize(
                      "#TimeRemaining_MinutesSeconds",
                      o.toString().padStart(2, "0"),
                      e.toString().padStart(2, "0"),
                    )
        );
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Ago = 1)] = "Ago"),
          (e[(e.Remaining = 2)] = "Remaining");
      })(o || (o = {}));
    },
    83710: (e, t, n) => {
      n.d(t, { Kp: () => i });
      const i = {
        PerYear: 31536e3,
        PerMonth: 2628e3,
        PerWeek: 604800,
        PerDay: 86400,
        PerHour: 3600,
        PerMinute: 60,
      };
    },
    39020: (e, t, n) => {
      n.d(t, { Fv: () => h, MB: () => c });
      var i = n(37085),
        a = n(56545),
        r = n(41071),
        o = n(23809),
        s = n(20194);
      function h(e) {
        const t = (0, o.TR)(),
          n = (0, o.rX)();
        return (0, s.I)(u(t.GetAnonymousServiceTransport(), n, e));
      }
      function u(e, t, n) {
        return {
          queryKey: ["LocalizedTagNames", n],
          queryFn: async () => {
            const o = `LocalizedTagNames2_${n}`,
              s = await t.GetObject(o),
              h = a.w.Init(r.Gr);
            h.Body().set_language(n),
              s?.version_hash && h.Body().set_have_version_hash(s.version_hash);
            const u = await r.nd.GetTagList(e, h);
            let c;
            if (u.GetEResult() == i.R)
              (c = u.Body().toObject()), t && t.StoreObject(o, c);
            else if (u.GetEResult() == i.Ze) c = s || void 0;
            else {
              if (!s) throw u.GetErrorMessage();
              console.warn(
                "Couldn't load updated tag localization, will continue with what we have from storage.",
              ),
                (c = s);
            }
            const d = {};
            return (
              (c?.tags || []).forEach(({ tagid: e, name: t }) => (d[e] = t)), d
            );
          },
          staleTime: 36e5,
        };
      }
      function c(e, t) {
        const { data: n } = h(t);
        return n && n[e];
      }
    },
  },
]);
