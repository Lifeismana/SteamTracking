/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8620],
  {
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    29645: (e) => {
      e.exports = {
        Ctn: "_35KiKa7cq-3mn4lChNW67c",
        EventName: "e-36dCsEtoK52wg6Qx1iq",
        AtendeeSearchRow: "_1KbfPGq52sl-NB4ku90gN3",
        AtendeeListButtonRow: "_2JLogmiR30ClrphBajhwYK",
        BackToListIcon: "_3bl-GtsF8LkmzsRFkqjeCz",
        AttendeeRow: "_35gHo_M6tBBUOL8PWGEmA9",
        DisplayAllDaysCtn: "_3bvF759mojZQZv_TGXaM5Q",
        DisplayDaysCtn: "_1b8sKAzr4LILvJyl7fkRrL",
        DateName: "_32Ut51xzdWXCL6OOaz4vY2",
        DisplayDaySessions: "_32v8UGu0FfxnCHtltxqiEV",
        NotToday: "_1PB1JESsJ8abJrTzTqOVBk",
        DisplayDaySessionsRow: "_3DhIykQH8p8dQb2VOZg4-L",
        DisplaySession: "_27ybiS1mMlsYotyoQGVmI_",
        Header: "_1jOgBHcEXg1l6kSowBxwn6",
        SessionName: "vl9qom9droT0L3xZs2JhG",
        SessionTime: "PG1xFNh9UdoEjEvvw22V5",
        CapacityCtn: "_2jxcROaKoRgZCIKUHALVRH",
        CapacityBarMax: "_2Kd3cw8fPPyzDXTWBxltj7",
        CapacityBarCurrent: "_3jKSoLI8ytiyq9ELWTJNVY",
        Full: "_27_ZZ6xz-L8KC1u6uQmDz",
        SetCapacityButton: "_1BPqndgvTdc3n4fPDlcvAQ",
        SetCapacityInput: "QnMJIDEn4Rz26VtL1RdUu",
      };
    },
    15588: (e) => {
      e.exports = {
        Ctn: "_3cmUbcgdPxM7o5hl986RgB",
        User: "_3E6Usl36asxUFK3vPKa7Us",
        EventName: "_2GHTaky49GZrPLyiOgKWB7",
        SessionInfo: "Kk38rrvnYm3-E2jJMahSH",
        SessionName: "_2uJvCA4FncHONmSI37VVyw",
        SessionTime: "_2vYmHfXJIHj2eCv8NsiqZv",
        RegisteredUsers: "HLiipgmnfEQ2O-9WritfU",
        CheckedIn: "_17S0ayInAou4_ptPoMguR0",
        GuestTitle: "_2fMFlfbH8xUEtW28kSLf5-",
        GuestEmail: "Tm-tj9XNHRPGqdqqNiTEp",
        DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
      };
    },
    27144: (e, t, s) => {
      "use strict";
      s.d(t, { B3: () => y, KM: () => S, KT: () => v });
      var n = s(41735),
        a = s.n(n),
        i = s(58632),
        r = s.n(i),
        o = s(90626),
        c = s(80902),
        d = s(75233),
        l = s(37085),
        u = s(17720),
        m = s(68797),
        p = s(78327),
        g = s(56545),
        h = s(42457),
        x = s(23809);
      const _ = "nicknames";
      function S(e) {
        const t = (0, x.KV)(),
          { data: s, isLoading: n } = (0, c.I)({
            queryKey: [_],
            queryFn: async () => {
              const e = new Map();
              if (p.iA.logged_in) {
                const s = g.w.Init(h.dN),
                  n = (await h.xt.GetNicknameList(t, s)).Body().toObject();
                n?.nicknames &&
                  n.nicknames.length > 0 &&
                  n.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return s ? s.get(e) : null;
      }
      const j = new (r())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, p.yK)()
                  ? p.TS.COMMUNITY_BASE_URL
                  : p.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const s = { accountid: e[0], origin: self.origin },
                  n = await a().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: s,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  n.data?.success != l.R ||
                  !n.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(n).strErrorMsg}`;
                return [n.data.userinfo];
              }
              {
                const s = { accountids: e.join(","), origin: self.origin },
                  n = await a().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: s,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  n.data?.success != l.R ||
                  !n.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(n).strErrorMsg}`;
                const i = new Map();
                return (
                  n.data.userinfos.forEach((e) =>
                    i.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => i.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        f = "avatarandpersonas";
      function v(e) {
        const { data: t, isLoading: s } = (0, c.I)({
          queryKey: [f, e],
          queryFn: () => j.load(e),
        });
        return [t, s];
      }
      function y(e) {
        const t = (0, d.jE)(),
          { data: s, isLoading: n } = (0, c.I)({
            queryKey: [f, e],
            queryFn: async () => {
              const s = await j.loadMany(e);
              return (
                s.forEach((e) => {
                  const s = [f, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(s, e);
                }),
                s
              );
            },
            enabled: e?.length > 0,
          }),
          a = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              s?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [s]);
        return n ? null : a;
      }
    },
    8905: (e, t, s) => {
      "use strict";
      s.d(t, { p: () => d });
      var n = s(7850),
        a = s(90626),
        i = s(17720),
        r = s(27144),
        o = s(15736),
        c = s(78327);
      function d(e) {
        const {
            accountID: t,
            bHideWhenNotAvailable: s,
            bHideName: d,
            bLink: l = !0,
          } = e,
          [u] = (0, r.KT)(t),
          m = (0, r.KM)(t),
          p = a.useMemo(() => i.b.InitFromAccountID(t), [t]),
          g = `${c.TS.COMMUNITY_BASE_URL}profiles/${p.ConvertTo64BitString()}`,
          h = l ? "a" : "span";
        return (0, n.jsx)(n.Fragment, {
          children: Boolean(!u)
            ? (0, n.jsx)(n.Fragment, {
                children: Boolean(!s) && (0, n.jsx)("span", { children: t }),
              })
            : (0, n.jsxs)(h, {
                href: l ? g : void 0,
                children: [
                  (0, n.jsx)("img", {
                    className: o.SmallAvatar,
                    src: u.avatar_url,
                    "data-miniprofile": "s" + p.ConvertTo64BitString(),
                  }),
                  Boolean(!d) &&
                    (0, n.jsx)("span", {
                      children: m ? `${m} (${u.persona_name})` : u.persona_name,
                    }),
                ],
              }),
        });
      }
    },
    48479: (e, t, s) => {
      "use strict";
      s.d(t, { qx: () => h });
      var n = s(7850),
        a = s(56283),
        i = s(61859),
        r = s(12155),
        o = s(90626),
        c = s(52038),
        d = s(95695),
        l = s(84811),
        u = s(64734),
        m = s(65946),
        p = s(26408);
      function g(e) {
        const {
            title: t,
            tooltip: s,
            getMinimized: a,
            toggleMinimized: i,
            className: r,
            children: o,
            elAdditionalButtons: g,
          } = e,
          h = (0, m.q3)(() => a());
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: (0, c.A)(
                r,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, n.jsxs)("div", {
                  className: (0, c.A)(
                    d.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(s) && (0, n.jsx)(p.o, { tooltip: s })],
                }),
                (0, n.jsxs)("div", {
                  className: u.SectionTitleButtons,
                  children: [
                    g,
                    (0, n.jsx)(x, { bIsMinimized: h, fnToggleMinimize: i }),
                  ],
                }),
              ],
            }),
            !h && (0, n.jsx)(l.tH, { children: o }),
          ],
        });
      }
      function h(e) {
        const [t, s] = o.useState(Boolean(e.bStartMinimized));
        return (0, n.jsx)(g, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => s(!t),
          children: e.children,
        });
      }
      function x(e) {
        const { bIsMinimized: t, fnToggleMinimize: s } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, n.jsx)(a.$n, {
          "data-tooltip-text": (0, i.we)(o),
          onClick: s,
          children: e.bIsMinimized
            ? (0, n.jsx)(r.hz4, {})
            : (0, n.jsx)(r.Xjb, {}),
        });
      }
    },
    57912: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { MeetSteamRoutes: () => pe, default: () => ge });
      var n = s(7850),
        a = s(43527),
        i = s(92757),
        r = s(22837),
        o = s(2160),
        c = s(8527),
        d = s(90626),
        l = s(82429),
        u = s(6379),
        m = s(60092),
        p = s(92557),
        g = s(22797),
        h = s(61859),
        x = s(43068),
        _ = s(84811);
      function S(e) {
        const { gid: t } = (0, i.g)(),
          [s, a] = (0, d.useState)(!0);
        if (
          (d.useEffect(() => {
            s &&
              (u.O3.Init(), Promise.all([l.KN.InitGlobal()]).then(() => a(!1)));
          }, [s]),
          s)
        )
          return (0, n.jsx)(g.t, {
            string: (0, h.we)("#Loading"),
            position: "center",
          });
        const S = u.O3.GetClanEventModel(t);
        return S
          ? (0, n.jsxs)(_.tH, {
              children: [
                !S.BIsUnlistedEvent() &&
                  (0, n.jsx)("div", {
                    children:
                      "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                  }),
                (0, n.jsx)(p.jA, {
                  lang: (0, r.sfN)(c.TS.LANGUAGE),
                  event: S,
                  adminPanel:
                    c.TS.EREALM === o.TU.k_ESteamRealmChina
                      ? (0, n.jsx)(x.P, { eventModel: S })
                      : (0, n.jsx)(m.g, { eventModel: S, bSupportsSticky: !0 }),
                }),
              ],
            })
          : null;
      }
      var j = s(37085),
        f = s(51614),
        v = s(41735),
        y = s.n(v),
        M = s(62216),
        T = s(44165),
        N = s(30470),
        w = s(24484);
      function C(e, t, s) {
        for (const n of e)
          if (n.group_id === t) {
            const e = n.sessions.find((e) => e.id === s);
            if (e) return { group: n, session: e };
          }
        return { group: null, session: null };
      }
      function E(e, t) {
        const s = (0, T.f1)(),
          [n] = (0, d.useState)(() =>
            (0, w.Tc)("registrations", "application_config")
              .map((e) => ((e.userReg = JSON.parse(e.jsondata)), e))
              .sort((t, s) => {
                const n = C(
                    e.jsondata.meet_steam_groups,
                    t.group_id,
                    t.session_id,
                  ),
                  a = C(e.jsondata.meet_steam_groups, s.group_id, s.session_id);
                return (
                  (a?.session?.rtime_start || 0) -
                  (n?.session?.rtime_start || 0)
                );
              })
              .map((t) => {
                const n = C(
                  e.jsondata.meet_steam_groups,
                  t.group_id,
                  t.session_id,
                );
                return (
                  (t.relativeToToday = (function (e, t) {
                    if (!e) return "past";
                    const s = (0, M.Sk)(e),
                      n = (0, M.Ue)(e.rtime_start, s),
                      a = void 0 !== t ? new Date(1e3 * t) : new Date(),
                      i = new Date(a.getFullYear(), a.getMonth(), a.getDate()),
                      r = new Date(
                        a.getFullYear(),
                        a.getMonth(),
                        a.getDate() + 1,
                      );
                    return n >= i && n < r
                      ? "today"
                      : n < i
                        ? "past"
                        : "future";
                  })(n?.session, s)),
                  (t.rtSesssionTime = n.session.rtime_start),
                  t
                );
              }),
          ),
          a = t?.trim().toLowerCase() || "";
        return (0, d.useMemo)(
          () =>
            n.filter(
              (e) =>
                !a.length ||
                e.userReg.name?.toLowerCase().includes(a) ||
                e.userReg.company?.toLowerCase().includes(a) ||
                e.userReg.guest_names?.find((e) =>
                  e.toLowerCase().includes(a),
                ) ||
                e.userReg.email_override?.toLowerCase().includes(a),
            ),
          [n, t],
        );
      }
      function D(e, t) {
        return (0, d.useMemo)(
          () =>
            e.reduce(
              (e, t) => (
                e[t.relativeToToday] || (e[t.relativeToToday] = []),
                e[t.relativeToToday].push(t),
                e
              ),
              { today: [], past: [], future: [] },
            ),
          [e, t],
        );
      }
      var A = s(38390),
        R = s(27144),
        b = s(56283),
        L = s(71298),
        k = s(95034),
        B = s(8905),
        I = s(78395),
        U = s(21869),
        G = s(48479),
        F = s(52038),
        H = s(91675),
        $ = s(84933),
        z = s(15588),
        O = s.n(z),
        K = s(29233);
      function q(e) {
        const [t] = (0, k.QD)("gid"),
          s = (0, A.RR)(t),
          a = (0, r.sfN)(N.TS.LANGUAGE);
        return s
          ? (0, n.jsxs)("div", {
              className: O().Ctn,
              children: [
                (0, n.jsxs)("div", {
                  className: O().EventName,
                  children: [
                    (0, n.jsx)("h2", { children: s.GetNameWithFallback(a) }),
                    (0, n.jsx)("a", {
                      href: `${N.TS.STORE_BASE_URL}meetsteam/${t}`,
                      target: "_blank",
                      children: "See Event Details",
                    }),
                  ],
                }),
                (0, n.jsx)(P, { eventModel: s }),
              ],
            })
          : (0, n.jsx)(g.t, { string: (0, h.we)("#Loading") });
      }
      function P(e) {
        const { eventModel: t } = e,
          s = D(E(t)),
          [a] = (0, k.QD)("accountid"),
          i = (0, T.f1)();
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("div", {
              className: O().User,
              children: (0, n.jsx)(B.p, { accountID: a }),
            }),
            (0, n.jsx)(Q, {
              eventModel: t,
              rgUserRegs: s.today,
              strTitle: "Today " + (0, H.$z)(i),
            }),
            (0, n.jsx)(Q, {
              eventModel: t,
              rgUserRegs: s.future,
              bHideIfEmpty: !0,
              strTitle: "Future",
            }),
            (0, n.jsx)(Q, {
              eventModel: t,
              rgUserRegs: s.past,
              bHideIfEmpty: !0,
              strTitle: "Past",
            }),
          ],
        });
      }
      function Q(e) {
        const {
          eventModel: t,
          rgUserRegs: s,
          bHideIfEmpty: a,
          strTitle: i,
        } = e;
        return 0 == s.length && a
          ? null
          : (0, n.jsx)(G.qx, {
              title: `${i} (${s.length})`,
              bStartMinimized: a,
              children: Boolean(!s || 0 == s.length)
                ? (0, n.jsx)("div", { children: a ? "" : "No registrations" })
                : (0, n.jsx)("div", {
                    children: s
                      .sort((e, t) => e.rtSesssionTime - t.rtSesssionTime)
                      .map((e) =>
                        (0, n.jsx)(
                          V,
                          { eventModel: t, reg: e },
                          `${e.group_id}_${e.session_id}`,
                        ),
                      ),
                  }),
            });
      }
      function J(e) {
        const { desc: t } = e,
          [s, a] = (0, d.useState)(!1),
          i = (0, d.useCallback)(() => a((e) => !e), []);
        return (0, n.jsx)("div", {
          className: (0, F.A)({
            [O().DescriptionWrapper]: !0,
            [O().Expanded]: s,
          }),
          onClick: i,
          onMouseEnter: () => a(!0),
          onMouseLeave: () => a(!1),
          children: t,
        });
      }
      function V(e) {
        const { reg: t, eventModel: s } = e,
          a = new K.b2(t.steamid).GetAccountID(),
          [i] = (0, R.KT)(t.userReg.accountid),
          [r, o] = (0, d.useState)(!0),
          [c, l] = (0, d.useState)([]),
          [u, m] = (0, d.useState)(!1),
          p = t.userReg,
          { group: g, session: h } = C(
            s.jsondata.meet_steam_groups,
            t.group_id,
            t.session_id,
          ),
          [x, S, v] = (0, $.uD)(),
          M =
            ((T = s.GID),
            (w = a),
            (E = t.group_id),
            (D = t.session_id),
            (0, f.n)({
              mutationFn: async ({ bIncludeSelf: e, rgGuests: t }) => {
                const s = new FormData();
                s.append("sessionid", N.TS.SESSIONID),
                  s.append("gid", T),
                  s.append("accountid", "" + w),
                  s.append("meetsteam_group_id", "" + E),
                  s.append("meetsteam_session_id", "" + D),
                  s.append("include_self", "" + (e ? 1 : 0)),
                  t?.length && s.append("guests", t.join("|"));
                const n = `${N.TS.STORE_BASE_URL}meetsteam/ajaxupdateattendance`,
                  a = await y().post(n, s, { withCredentials: !0 });
                return a?.data?.success == j.R;
              },
            }));
        var T, w, E, D;
        const A = new Set(
            t.guests_attendance?.length > 0
              ? t.guests_attendance.split("|")
              : [],
          ),
          L = t.attendance_count > A.size,
          k = (e, t, s, a) =>
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("span", {
                  className: O().GuestTitle,
                  children: [e, ":", " "],
                }),
                t,
                s &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      " ",
                      (0, n.jsxs)("span", {
                        className: O().GuestEmail,
                        children: ["(", s, ")"],
                      }),
                    ],
                  }),
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    " ",
                    "-",
                    (0, n.jsx)("span", {
                      children: a ? "✅ checked in" : "☐ not checked in",
                    }),
                  ],
                }),
              ],
            });
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(Y, { group: g, session: h }),
            Boolean(u)
              ? (0, n.jsx)("div", {
                  className: O().CheckedIn,
                  children: "Attendee has been checked in",
                })
              : (0, n.jsxs)("div", {
                  className: O().RegisteredUsers,
                  children: [
                    (0, n.jsx)(b.Yh, {
                      label: (0, n.jsx)(n.Fragment, {
                        children: k(
                          "Attendee",
                          p.name || i.persona_name,
                          p.email_override,
                          L,
                        ),
                      }),
                      checked: r,
                      onChange: o,
                    }),
                    Boolean(p.guest_names?.length > 0) &&
                      (0, n.jsx)(n.Fragment, {
                        children: p.guest_names.map((e) =>
                          (0, n.jsx)(
                            b.Yh,
                            {
                              label: (0, n.jsx)(n.Fragment, {
                                children: k("Guest", e, void 0, A.has(e)),
                              }),
                              checked: c.includes(e),
                              onChange: (t) => {
                                l((s) =>
                                  t
                                    ? s.includes(e)
                                      ? s
                                      : [...s, e]
                                    : s.filter((t) => t !== e),
                                );
                              },
                            },
                            t.group_id + "_" + t.session_id + "_" + e,
                          ),
                        ),
                      }),
                    (0, n.jsx)(b.jn, {
                      onClick: S,
                      children: "Check in selected people",
                    }),
                  ],
                }),
            (0, n.jsx)(U.E, {
              active: x,
              children: (0, n.jsx)(_.tH, {
                children: (0, n.jsx)(W, {
                  closeModal: v,
                  bIncludeSelf: r,
                  rgGuestsAttending: c,
                  fnMarkAttendance: M,
                  fnOnSuccess: () => m(!0),
                }),
              }),
            }),
          ],
        });
      }
      function W(e) {
        const {
            closeModal: t,
            bIncludeSelf: s,
            rgGuestsAttending: a,
            fnMarkAttendance: i,
            fnOnSuccess: r,
          } = e,
          o = (0, L.vs)();
        return o.bLoading
          ? (0, n.jsx)(L.Hh, {
              state: o,
              strDialogTitle: (0, h.we)("#Saving"),
              closeModal: t,
            })
          : (0, n.jsx)(I.o0, {
              onCancel: t,
              strTitle: (0, h.we)("#Button_Submit"),
              bAllowFullSize: !0,
              onOK: async () => {
                o.fnSetLoading(!0),
                  i
                    .mutateAsync({ bIncludeSelf: s, rgGuests: a })
                    .then((e) => {
                      e
                        ? (r(),
                          o.fnSetStrSuccess(
                            "Success! This person has been checked in.",
                          ))
                        : o.fnSetStrError(
                            (0, h.we)("#Login_Error_Network_Description"),
                          );
                    })
                    .catch(() =>
                      o.fnSetStrError(
                        (0, h.we)("#Login_Error_Network_Description"),
                      ),
                    );
              },
              children: "Mark as checked in?",
            });
      }
      function Y(e) {
        const { session: t, group: s } = e,
          {
            sDisplayTimeZone: a,
            rtime_start: i,
            rtime_end: o,
          } = (0, M._t)(e.session),
          c = (0, M.rF)(i, a),
          d = (0, M.Mr)(i, o, a);
        return t && s
          ? (0, n.jsxs)("div", {
              className: O().SessionInfo,
              children: [
                (0, n.jsx)("div", {
                  className: O().SessionName,
                  children: s.localized_session_title[r.Bhc],
                }),
                (0, n.jsxs)("div", {
                  className: O().SessionTime,
                  children: [c, " @ ", (0, n.jsx)("b", { children: d })],
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(J, {
                    desc: `Description: ${s.localized_session_description[r.Bhc] || ""}`,
                  }),
                }),
                "dev" == N.TS.WEB_UNIVERSE &&
                  (0, n.jsxs)("div", {
                    children: ["Rtime Start (Dev only): ", t.rtime_start],
                  }),
              ],
            })
          : (0, n.jsx)("div", { children: "Session Infomrmation Missing" });
      }
      var Z = s(97058),
        X = s(29645),
        ee = s.n(X),
        te = s(12155),
        se = s(14771),
        ne = s(78327);
      function ae(e) {
        const t = new Date(e.getTime());
        return t.setHours(0, 0, 0, 0), t;
      }
      function ie(e) {
        const [t] = (0, k.QD)("gid"),
          s = (0, A.RR)(t),
          a = (0, r.sfN)(N.TS.LANGUAGE),
          [i, o] = (0, d.useState)("");
        return s
          ? (0, n.jsxs)("div", {
              className: ee().Ctn,
              children: [
                (0, n.jsxs)("div", {
                  className: ee().EventName,
                  children: [
                    (0, n.jsx)("h1", { children: s.GetNameWithFallback(a) }),
                    (0, n.jsx)("a", {
                      href: `${N.TS.STORE_BASE_URL}meetsteam/${t}`,
                      target: "_blank",
                      children: "See Event Details",
                    }),
                  ],
                }),
                (0, n.jsx)(ce, { eventModel: s }),
                (0, n.jsx)("div", {
                  className: ee().AtendeeSearchRow,
                  children: (0, n.jsx)(b.pd, {
                    type: "text",
                    label: "Search for an attendee",
                    value: i,
                    bShowClearAction: !0,
                    onChange: (e) => o(e.currentTarget.value || ""),
                    placeholder: "Type name or partner or email address",
                  }),
                }),
                (0, n.jsx)(re, { eventModel: s, strSearch: i.toLowerCase() }),
              ],
            })
          : (0, n.jsx)(g.t, { string: (0, h.we)("#Loading") });
      }
      function re(e) {
        const { eventModel: t, strSearch: s } = e,
          a = E(t, s),
          [i, r] = (0, d.useState)(null),
          [o, c] = (0, d.useMemo)(() => {
            const e = new Map();
            return (
              a.forEach((t) => {
                [t.userReg.name, ...(t.userReg.guest_names || [])].forEach(
                  (s) => {
                    const n = s.toLowerCase();
                    e.has(n) ? e.get(n).push(t) : e.set(n, [t]);
                  },
                );
              }),
              [e, Array.from(e.keys()).sort()]
            );
          }, [a]);
        return (
          d.useEffect(() => {
            r(null);
          }, [s]),
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("h3", { children: "Attendees" }),
              Boolean(i)
                ? (0, n.jsx)(oe, {
                    eventModel: t,
                    rgSelected: i,
                    strSearch: s,
                    onCleanSelection: () => r(null),
                  })
                : (0, n.jsx)(n.Fragment, {
                    children: c
                      .filter((e) => !s || e.includes(s))
                      .map((e) =>
                        (0, n.jsx)(
                          "div",
                          {
                            className: ee().AttendeeRow,
                            children: (0, n.jsx)(b.$n, {
                              onClick: () => r(o.get(e.toLowerCase())),
                              children: e,
                            }),
                          },
                          e,
                        ),
                      ),
                  }),
            ],
          })
        );
      }
      function oe(e) {
        const {
            eventModel: t,
            rgSelected: s,
            strSearch: a,
            onCleanSelection: i,
          } = e,
          r = (0, T.f1)(),
          o = D(s, a);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("div", {
              className: ee().AtendeeListButtonRow,
              children: (0, n.jsxs)(b.$n, {
                onClick: i,
                children: [
                  (0, n.jsx)(te.uMb, { className: ee().BackToListIcon }),
                  "Back to full list",
                ],
              }),
            }),
            (0, n.jsx)(Q, {
              eventModel: t,
              rgUserRegs: o.today,
              strTitle: "Today " + (0, h.$z)(r),
            }),
            (0, n.jsx)(Q, {
              eventModel: t,
              rgUserRegs: o.future,
              bHideIfEmpty: !0,
              strTitle: "Future",
            }),
            (0, n.jsx)(Q, {
              eventModel: t,
              rgUserRegs: o.past,
              bHideIfEmpty: !0,
              strTitle: "Past",
            }),
          ],
        });
      }
      function ce(e) {
        const { eventModel: t } = e,
          s = (0, T.s4)(),
          [a, i] = d.useState(!1),
          { rgGroupedSessions: r, bMoreSessions: o } = d.useMemo(() => {
            const e = t?.jsondata?.meet_steam_groups?.flatMap((e) =>
                e.sessions.map((t) => {
                  const s = (0, M.Sk)(t),
                    n = (0, M.Ue)(t.rtime_start, s);
                  return { group: e, session: t, displayDate: n };
                }),
              ),
              n = e?.filter((e) => a || ae(e.displayDate) >= ae(s)),
              i = a || (e && e.length > n.length);
            var r;
            return {
              rgGroupedSessions:
                ((r = (e) => ae(e.displayDate)),
                (n ?? []).reduce((e, t) => {
                  const s = r(t),
                    n = Math.floor(s.getTime() / 1e3),
                    a = e.get(n) || [];
                  return e.set(n, [...a, t]), e;
                }, new Map())),
              bMoreSessions: i,
            };
          }, [t?.jsondata?.meet_steam_groups, s, a]),
          c = d.useMemo(() => {
            const e = (0, ne.Tc)("registrations", "application_config");
            if (e && "object" == typeof e)
              return e.reduce((e, t) => {
                const s = `${t.group_id}_${t.session_id}`,
                  n = e.get(s) ?? [];
                return n.push(t), e.set(s, n), e;
              }, new Map());
          }, []);
        if (!c || (0 == r.size && !o)) return;
        const l =
            Array.from(r.keys()).reduce(
              (e, t) => (null == e || (1e3 * t > s.getTime() && t < e) ? t : e),
              void 0,
            ) ?? 0,
          u = Array.from(r.keys()).some((e) =>
            (0, se.JD)(s, new Date(1e3 * e)),
          );
        return (0, n.jsxs)("div", {
          className: ee().DisplayAllDaysCtn,
          children: [
            o &&
              (0, n.jsx)(b.Yh, {
                label: "Show past events",
                checked: a,
                onChange: i,
              }),
            (0, n.jsx)("div", {
              className: ee().DisplayDaysCtn,
              children: Array.from(r.keys()).map((e) =>
                (0, n.jsx)(
                  de,
                  {
                    eventModel: t,
                    date: new Date(1e3 * e),
                    sessionsAndGroups: r.get(e),
                    rgRegistrationInfo: c,
                    isToday: (0, se.JD)(
                      u ? s : new Date(1e3 * l),
                      new Date(1e3 * e),
                    ),
                  },
                  e,
                ),
              ),
            }),
          ],
        });
      }
      function de(e) {
        const {
          eventModel: t,
          date: s,
          sessionsAndGroups: a,
          rgRegistrationInfo: i,
          isToday: r,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, F.A)(ee().DisplayDaySessions, !r && ee().NotToday),
          children: [
            (0, n.jsx)("div", {
              className: ee().DateName,
              children: (0, h.$w)(s),
            }),
            (0, n.jsx)("div", {
              className: ee().DisplayDaySessionsRow,
              children: a.map((e) =>
                (0, n.jsx)(
                  le,
                  {
                    eventModel: t,
                    date: s,
                    registrations:
                      i.get(`${e.group.group_id}_${e.session.id}`) ?? [],
                    group: e.group,
                    session: e.session,
                  },
                  `${e.group.group_id}_${e.session.id}`,
                ),
              ),
            }),
          ],
        });
      }
      function le(e) {
        const {
            eventModel: t,
            date: s,
            group: a,
            session: i,
            registrations: o,
          } = e,
          c = (0, r.sfN)(N.TS.LANGUAGE),
          d = (0, T.s4)(),
          { sDisplayTimeZone: l, rtime_start: u } = (0, M._t)(i),
          m = (0, M.us)(u, l),
          p = o.reduce((e, t) => e + (t.guests_registered ?? 0), 0),
          g = o.reduce(
            (e, t) =>
              e +
              (t.rt_attendance_marked > 0 && t.guests_registered
                ? t.guests_registered
                : 0),
            0,
          ),
          [h, x, S] = (0, $.uD)(),
          v =
            ((w = t.GID),
            (C = a.group_id),
            (E = i.id),
            (0, f.n)({
              mutationFn: async ({ nCapacity: e }) => {
                const t = new FormData();
                t.append("sessionid", N.TS.SESSIONID),
                  t.append("gid", w),
                  t.append("meetsteam_group_id", "" + C),
                  t.append("meetsteam_session_id", "" + E),
                  t.append("capacity", "" + e);
                const s = `${N.TS.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`,
                  n = await y().post(s, t, { withCredentials: !0 });
                return n?.data?.success == j.R;
              },
            }));
        var w, C, E;
        return (0, n.jsxs)("div", {
          className: ee().DisplaySession,
          children: [
            (0, n.jsxs)("div", {
              className: ee().Header,
              children: [
                (0, n.jsx)("div", {
                  className: ee().SessionName,
                  children:
                    a.localized_session_title[c] ??
                    a.localized_session_title[r.Bhc],
                }),
                (0, n.jsx)("div", { className: ee().SessionTime, children: m }),
              ],
            }),
            (0, n.jsx)(me, {
              title: "Registered:",
              nCount: p,
              nCapacity: i.max_capacity,
            }),
            (0, n.jsx)(me, {
              title: "Checked in:",
              nCount: g,
              nCapacity: i.max_capacity,
            }),
            ae(s) >= ae(d) &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(b.$n, {
                    className: (0, F.A)(ee().SetCapacityButton),
                    onClick: x,
                    children: "Update capacity...",
                  }),
                  (0, n.jsx)(U.E, {
                    active: h,
                    children: (0, n.jsx)(_.tH, {
                      children: (0, n.jsx)(ue, {
                        closeModal: S,
                        nCapacity: i.max_capacity ?? 0,
                        fnUpdateCapacity: v,
                        fnOnSuccess: () => window.location.reload(),
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      function ue(e) {
        const {
            closeModal: t,
            nCapacity: s,
            fnUpdateCapacity: a,
            fnOnSuccess: i,
          } = e,
          [r, o] = d.useState(s.toString()),
          c = (0, L.vs)();
        return c.bLoading
          ? (0, n.jsx)(L.Hh, {
              state: c,
              strDialogTitle: (0, h.we)("#Saving"),
              closeModal: t,
            })
          : (0, n.jsx)(I.o0, {
              onCancel: t,
              strTitle: (0, h.we)("Update Capacity"),
              bAllowFullSize: !0,
              onOK: async () => {
                c.fnSetLoading(!0);
                const e = Number.isNaN(Number.parseInt(r))
                  ? void 0
                  : Number.parseInt(r);
                a.mutateAsync({ nCapacity: e })
                  .then((e) => {
                    e
                      ? (i(), c.fnSetStrSuccess("Max capacity updated."))
                      : c.fnSetStrError(
                          (0, h.we)("#Login_Error_Network_Description"),
                        );
                  })
                  .catch(() =>
                    c.fnSetStrError(
                      (0, h.we)("#Login_Error_Network_Description"),
                    ),
                  );
              },
              children: (0, n.jsx)(b.pd, {
                className: ee().SetCapacityInput,
                label: "New capacity",
                type: "text",
                autoComplete: "off",
                value: r,
                onChange: (e) => o(e.currentTarget.value),
              }),
            });
      }
      function me(e) {
        const { title: t, nCount: s, nCapacity: a } = e,
          i = s >= a,
          r = Math.min((s / a) * 100, 100),
          o = s > 0 ? `${r}%` : "0%";
        return (0, n.jsxs)("div", {
          className: ee().CapacityCtn,
          children: [
            (0, n.jsxs)("span", { children: [t, " ", s, " / ", a] }),
            (0, n.jsx)("div", {
              className: ee().CapacityBarMax,
              children: (0, n.jsx)("div", {
                className: (0, F.A)(
                  ee().CapacityBarCurrent,
                  i ? ee().Full : "",
                ),
                style: { width: o },
              }),
            }),
          ],
        });
      }
      const pe = {
        MeetSteamAttendance: () => `${a.B.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${a.B.MeetSteamRoute()}:gid(\\d+)`,
        MeetSteamAttendeeList: () => `${a.B.MeetSteamRoute()}attendeelist`,
      };
      function ge(e) {
        return (0, n.jsxs)(i.dO, {
          children: [
            (0, n.jsx)(i.qh, {
              path: pe.MeetSteamAttendance(),
              render: (e) => (0, n.jsx)(q, { ...e }),
            }),
            (0, n.jsx)(i.qh, {
              path: pe.MeetSteamAttendeeList(),
              render: (e) => (0, n.jsx)(ie, { ...e }),
            }),
            (0, n.jsx)(i.qh, {
              path: pe.MeetSteamEvent(),
              render: (e) => (0, n.jsx)(S, { ...e }),
            }),
            (0, n.jsx)(i.qh, { children: (0, n.jsx)(Z.a, {}) }),
          ],
        });
      }
    },
  },
]);
