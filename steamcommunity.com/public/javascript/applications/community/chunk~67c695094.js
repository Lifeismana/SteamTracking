/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7387],
  {
    1990: (e) => {
      e.exports = {
        narrowWidth: "500px",
        GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
        GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
        Active: "_8XjrTFzaSA8ubHvHCu44L",
        GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
        GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
        GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
        VOWarning: "_3LaJynPDFfccGWUEtdltlt",
        StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
        StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
        StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
      };
    },
    77490: (e, t, n) => {
      "use strict";
      n.d(t, { P0: () => h, $z: () => c, R2: () => l });
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
        (a.portuguese = () => n.e(9246).then(n.t.bind(n, 96865, 19))),
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
      const r = (0, n(48891).l)(async function (e) {
        if (a[e]) return a[e]();
      });
      var s,
        o = n(83710);
      function c(e, t) {
        const n = { year: "numeric", month: "short", day: "numeric", ...t };
        return new Date(1e3 * e).toLocaleDateString((0, i.J)(), n);
      }
      function u(e, t, n) {
        const a = new Date(1e3 * e),
          r = (0, i.J)(),
          s = {
            ...((null == t ? void 0 : t.bForce24HourClock) ||
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
        return a.toLocaleTimeString(r, s);
      }
      function h(e, t, n) {
        return (
          (function (e, t = !1, n = !0) {
            const a = {
              weekday: n ? "long" : "short",
              day: "numeric",
              month: t ? "long" : "short",
            };
            return e.toLocaleDateString((0, i.J)(), a);
          })(new Date(1e3 * e), !1, !1) +
          " " +
          u(e, { bForce24HourClock: t }) +
          " " +
          n
        );
      }
      function l(e) {
        const t = Math.floor(e / o.Kp.PerYear),
          n = Math.floor(e / o.Kp.PerMonth),
          i = Math.floor((e % o.Kp.PerMonth) / o.Kp.PerDay),
          a = Math.floor((e % o.Kp.PerDay) / o.Kp.PerHour),
          s = Math.floor((e % o.Kp.PerHour) / o.Kp.PerMinute);
        return (
          (e %= o.Kp.PerMinute),
          t > 0
            ? r.Localize("#TimeRemaining_MoreThanOneYear")
            : n > 0
              ? r.Localize("#TimeRemaining_MonthsDays", n, i)
              : i > 0
                ? r.Localize(
                    "#TimeRemaining_DaysHoursMinutes",
                    i,
                    a.toString().padStart(2, "0"),
                    s.toString().padStart(2, "0"),
                  )
                : a > 0
                  ? r.Localize(
                      "#TimeRemaining_HoursMinutesSeconds",
                      a.toString().padStart(2, "0"),
                      s.toString().padStart(2, "0"),
                      e.toString().padStart(2, "0"),
                    )
                  : r.Localize(
                      "#TimeRemaining_MinutesSeconds",
                      s.toString().padStart(2, "0"),
                      e.toString().padStart(2, "0"),
                    )
        );
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Ago = 1)] = "Ago"),
          (e[(e.Remaining = 2)] = "Remaining");
      })(s || (s = {}));
    },
    83710: (e, t, n) => {
      "use strict";
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
    38135: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => p, a: () => g });
      var i = n(7850),
        a = n(90626),
        r = n(52038),
        s = n(61859),
        o = n(95034),
        c = n(1990),
        u = n.n(c),
        h = n(32754),
        l = n(51272),
        d = n(76217),
        b = n(23310),
        m = n(92757);
      function p(e) {
        const {
            tabs: t,
            bDisableRouting: n,
            startingTab: s,
            classNameCtn: c,
            classNameTab: h,
            classNameTabContent: l,
            preferredFocus: p,
            bVerticalTabs: g,
          } = e,
          f = (0, m.zy)(),
          S = (0, m.W6)(),
          [y, k] = (0, a.useState)(() => {
            var e;
            return (
              s ||
              (!n &&
              (0, o.f3)(f, "tab") &&
              null !== (e = (0, o.f3)(f, "tab")) &&
              void 0 !== e
                ? e
                : "")
            );
          });
        (0, a.useEffect)(() => {
          if (!e.bDisableRouting && f) {
            const e = (0, o.f3)(f, "tab");
            e && k(e);
          }
        }, [f, f.key, e.bDisableRouting, k]);
        const v = a.useCallback(
            (e) => {
              k(e.key),
                n || (0, o.Bm)(S, "tab", e.key),
                e.onClick && e.onClick(e);
            },
            [n, S],
          ),
          P = t.filter((e) => !e.hidden);
        if (!P.length) return null;
        const A = P.find((e) => e.key === y) || P[0],
          D = p ? (null != s ? s : P[0].key) : void 0,
          _ = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(d.Z, {
                className: (0, r.A)(
                  u().GraphicalAssetsTabs,
                  g && u().GraphicalAssetsTabsVertical,
                  c,
                ),
                navEntryPreferPosition: p ? b.iU.PREFERRED_CHILD : b.iU.FIRST,
                children: P.map((e, t) =>
                  (0, i.jsx)(
                    T,
                    {
                      tab: e,
                      OnTabClick: v,
                      classNameTab: h,
                      active: e.key === A.key,
                      preferredFocus: D === e.key,
                    },
                    e.key,
                  ),
                ),
              }),
              A && (0, i.jsx)(d.Z, { className: l, children: A.contents }),
            ],
          });
        return g
          ? (0, i.jsx)(d.Z, {
              className: (0, r.A)(u().GraphicalAssetsTabsLayoutVertical),
              children: _,
            })
          : _;
      }
      function g(e) {
        const { statusType: t = "success", children: n } = e;
        let a = "";
        return (
          "success" === t
            ? (a = u().StatusSuccess)
            : "danger" === t
              ? (a = u().StatusDanger)
              : "caution" === t && (a = u().StatusCaution),
          (0, i.jsx)("div", {
            className: (0, r.A)(u().GraphicalAssetStatus, a),
            children: n,
          })
        );
      }
      function T(e) {
        const {
          tab: t,
          OnTabClick: n,
          classNameTab: a,
          active: o,
          preferredFocus: c,
        } = e;
        return (0, i.jsx)(l.e7, {
          condition: Boolean(t.statusToolTip || t.tooltip),
          wrap: (e) =>
            (0, i.jsx)(h.he, {
              toolTipContent: t.statusToolTip || t.tooltip,
              children: e,
            }),
          children: (0, i.jsxs)(d.Z, {
            className: (0, r.A)(
              u().GraphicalAssetsTab,
              o && u().Active,
              o && "ActiveTab",
              a,
            ),
            onActivate: () => n(t),
            preferredFocus: c,
            children: [
              Boolean(t.vo_warning) &&
                (0, i.jsx)(h.he, {
                  toolTipContent: t.vo_warning,
                  children: (0, i.jsx)("div", {
                    className: u().VOWarning,
                    children: (0, s.we)("#EventEditor_VOWarning"),
                  }),
                }),
              t.status,
              t.name,
            ],
          }),
        });
      }
    },
  },
]);
