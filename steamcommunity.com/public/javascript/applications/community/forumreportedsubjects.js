/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [892],
  {
    30253: (e) => {
      e.exports = {
        FloatingSubjectListCtn: "_2Z4y2kIderxN4_alSJYYh8",
        SplitHeader: "_2B88BA7YbropfCtjJdn1yD",
        PopoutButton: "_3cujMozXvwTlTehPQtPJ7F",
        ReportedSubjectRow: "_32u0ZJiVZP0gaSLs5sdhUy",
        SubjectReportSummary: "_9Ygy5gJ500tkoDj_G546U",
        FlagIcon: "_2DMl8RTVaYtsJarLDt3hqF",
        ValveOnlyFlag: "-K7dp4xj1MBriG1APh1f4",
        SupervisorFlag: "_32OXEg2kS_2-BTKOec40kP",
      };
    },
    20978: (e) => {
      e.exports = {
        LoadingWrapper: "_2wAKy-0ZkO_vhbiQCP9MgE",
        Static: "_1QfwpLmLTSuiIRLDzdY_7l",
        none: "_1F0lzP-Krz_y5P9ewZEvBD",
        bottomCircle: "_2qjZm0dB7I6lcRkZhNTqvD",
        noString: "_1Sy0pXVZOdWbgouFyD2zJj",
        Throbber: "lYUEjD8Qh3GM_ZrZeLwpI",
        throbber_small: "_2zbyh5jEDlV5HVD3iUve-k",
        throbber_medium: "_2CphUsHNDgIWItNIzeIldY",
        throbber_large: "_1x18vR7Qop8v8_G8qSR6CL",
        throbber_center_wrapper: "_3IYPzqtvB2ZE7x710d5x2C",
        ThrobberText: "_21nVi2jNuF_prxLY1mAaKK",
        blur: "_1ctjA2yjeB21eCDj_r1mVz",
        ThrobberRoundLoop: "_1O-cWE6nuIVO3x6-Onw0IU",
        roundOuterOutline: "_1Vv--mA6PueyEKXXMTwljt",
        roundOuter: "_2K0LzwjOXDopMHoqY_v_CO",
        roundFill: "_3sQFkavAEPhliH6DiFmHRH",
        ThrobberFillLoop: "ofdi9VLSRZ5W98WsXVHiq",
        topCircle: "_1LZffuoDq-N25wNHckxsf",
        circlePulse: "_1XN6ZJ1l8nVoUxp1WnOBqw",
        ThrobberTopCircleLoop: "_1jALk36CiS_T9Pg7vBjpIQ",
        ThrobberBottomCircleLoop: "_1KvOgdKiNE9XuSYUau3hKW",
        roundThrobber15: "_2LGHpu_-ihfOhQwdfR3Kiy",
        roundThrobber14: "_2FGCneH2AemMrIrZnZskw_",
        roundThrobber13: "_1X-5j16jaQntVrZfadibyc",
        roundThrobber12: "_1pj1Q3Ef4FdHDdl9QEtpxp",
        roundThrobber11: "xFmZaMe5nZpoTc5PQBKn3",
        roundThrobber10: "_3MGYowzMQ6TwbH3fu9SVjt",
        roundThrobber09: "ktVJ42jiVhWEVV9O6z2FK",
        roundThrobber08: "_3s_7my869lIOj-1vnqJ39y",
        roundThrobber07: "_11MVp53Me_frOuaJfsQ4FE",
        roundThrobber06: "_2cl-maglen-RF0YQjShgqG",
        roundThrobber05: "_3-JE0FpIzECzeqtd5cyjGI",
        roundThrobber04: "_1xNIKvHdzLhBldONo6yIZs",
        roundThrobber03: "_1S17yicfcrPc11m83ydGp3",
        roundThrobber02: "_1-oUJqmCLOoGqVJz5dgj6J",
        roundThrobber01: "_2tXgejjqNKy6cSX1Lv7PrG",
        ThrobberRoundLoopThickness: "_1fs4RGcMBRzbQQirDBiFoM",
        throbber_xlarge: "_1gYeZMYKBDqNpVuw58_LCl",
        throbber_xxlarge: "_3j-p4JOqdpaF4obGtIeAB",
        ThrobberDelayAppear: "I3aEq3lbK7Pm8ujENvtri",
        Visible: "_2SwSJd-DlX2dRiDGxZWHI5",
        NewThrobber: "_1m8iQOSVziKDHiInrfskv_",
      };
    },
    10378: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          default: () => y,
          readAdditionalDataFromForumPost: () => S,
          useCommentThread: () => g,
        });
      var o = r(7850),
        c = r(90182),
        s = r(43224),
        n = r(56545),
        i = r(34410),
        l = r(37226),
        a = r(15993),
        u = r(34214),
        d = r(88942),
        f = r(23809),
        b = r(22797),
        _ = r(78327),
        h = r(30253),
        m = r(90626),
        p = r(12155),
        j = r(52038);
      function y(e) {
        var t, r;
        const n = "floatingforumreportedsubjectslist",
          l = (0, c.kZ)(i.lN, e.gidTopic),
          [a, u] = (0, m.useState)(() => void 0 !== localStorage[n]);
        if (
          ((0, m.useMemo)(() => {
            var e, t;
            null ===
              (t =
                null === (e = l.data) || void 0 === e ? void 0 : e.subjects) ||
              void 0 === t ||
              t.sort(k);
          }, [null === (t = l.data) || void 0 === t ? void 0 : t.subjects]),
          !l.isSuccess ||
            !(null === (r = l.data) || void 0 === r ? void 0 : r.subjects) ||
            0 === l.data.subjects.length)
        )
          return null;
        let d = 0;
        return (0, o.jsx)("div", {
          className: a ? h.FloatingSubjectListCtn : "",
          children: (0, o.jsx)("div", {
            className: "rightbox",
            children: (0, o.jsxs)("div", {
              className: "content",
              children: [
                (0, o.jsx)("div", {
                  className: "rightbox_list_header",
                  children: (0, o.jsxs)("span", {
                    className: h.SplitHeader,
                    children: [
                      s.T.Localize("#reportedsubjectlist_header"),
                      " ",
                      (0, o.jsx)("button", {
                        className: h.PopoutButton,
                        onClick: () => {
                          a
                            ? localStorage.removeItem(n)
                            : localStorage.setItem(n, "1"),
                            u(!a);
                        },
                        children: (0, o.jsx)(p.YNO, {}),
                      }),
                    ],
                  }),
                }),
                l.isError &&
                  (0, o.jsx)("div", {
                    className: "moderatorToolLink",
                    children: "Error",
                  }),
                l.isLoading && (0, o.jsx)(b.t, {}),
                l.isSuccess &&
                  (0, o.jsx)("div", {
                    style: { maxHeight: "20em", overflowY: "scroll" },
                    children: l.data.subjects.map((e) => {
                      var t, r;
                      return (
                        null ===
                          (r =
                            null === (t = e.additional_subject_data) ||
                            void 0 === t
                              ? void 0
                              : t.data) || void 0 === r
                          ? void 0
                          : r.length
                      )
                        ? (0, o.jsx)(x, { subject: e }, e.subject_id)
                        : (0, o.jsx)(
                            "div",
                            {
                              className: (0, j.A)(
                                "moderatorToolLink",
                                h.ReportedSubjectRow,
                              ),
                              children: "Bug - inform Valve",
                            },
                            "bad-" + d++,
                          );
                    }),
                  }),
              ],
            }),
          }),
        });
      }
      function k(e, t) {
        const r =
          e.unresolved_dispute_count + e.unresolved_report_count > 0 ? 1 : 0;
        return (
          (t.unresolved_dispute_count + t.unresolved_report_count > 0 ? 1 : 0) -
            r ||
          t.required_moderator_level - e.required_moderator_level ||
          (function (e, t) {
            if (e.length !== t.length) return e.length - t.length;
            for (let r = 0; r < e.length; r++) {
              const o = e.charCodeAt(r),
                c = t.charCodeAt(r);
              if (o !== c) return o - c;
            }
            return 0;
          })(e.subject_id, t.subject_id)
        );
      }
      function v(e) {
        for (;;) {
          const t = e.indexOf("[/quote]");
          if (-1 === t) break;
          e = e.slice(t + 8);
        }
        return e.slice(0, 35);
      }
      function x(e) {
        var t, r;
        const { subject: c } = e,
          n = S(e.subject),
          i = g(n.clanSteamId, l.Bv, n.forumId, c.subject_group_id);
        let u = null;
        "0" === c.subject_id && (u = "Topic");
        let d = "#NA";
        if (null === u && i.isSuccess) {
          let e = 1;
          for (const r of null !== (t = i.data.comments) && void 0 !== t
            ? t
            : []) {
            if (r.gidcomment === c.subject_id) {
              (u = v(r.text)), (d = `#${e}`);
              break;
            }
            e++;
          }
        }
        if (null === u && i.isSuccess)
          for (const e of null !== (r = i.data.deleted_comments) && void 0 !== r
            ? r
            : [])
            if (e.gidcomment === c.subject_id) {
              u = v(e.text);
              break;
            }
        null === u && (u = "[Comment]");
        const f =
            "0" === c.subject_id
              ? `#forum_op_${c.subject_group_id}`
              : `#c${c.subject_id}`,
          b = c.unresolved_dispute_count > 0 || c.unresolved_report_count > 0,
          m = c.required_moderator_level === a.PV,
          p = c.required_moderator_level === a.lp;
        return (0, o.jsxs)("div", {
          className: (0, j.A)("moderatorToolLink", h.ReportedSubjectRow),
          children: [
            (0, o.jsxs)("a", {
              href: f,
              children: [
                b &&
                  !m &&
                  !p &&
                  (0, o.jsx)("img", {
                    className: h.FlagIcon,
                    src: `${_.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                  }),
                !b &&
                  (0, o.jsx)("span", { className: h.FlagIcon, children: " " }),
                b &&
                  m &&
                  (0, o.jsx)("span", {
                    className: (0, j.A)(h.FlagIcon, h.ValveOnlyFlag),
                    children: "VO",
                  }),
                b &&
                  p &&
                  (0, o.jsx)("span", {
                    className: (0, j.A)(h.FlagIcon, h.SupervisorFlag),
                    children: "▲",
                  }),
                " ",
                d,
                " ",
                u,
              ],
            }),
            (0, o.jsxs)("div", {
              className: h.SubjectReportSummary,
              children: [
                " ",
                s.T.Localize(
                  "#forumsubjectlist_subjectreportsummary",
                  c.unresolved_report_count,
                  c.unresolved_dispute_count,
                ),
              ],
            }),
          ],
        });
      }
      function g(e, t, r, o) {
        const c = (0, f.KV)();
        return (0, d.I)({
          queryKey: ["comment_thread", e, t, r, o],
          queryFn: async () => {
            const s = n.w.Init(u.ZP);
            s.Body().set_steamid(e),
              s.Body().set_comment_thread_type(t),
              s.Body().set_gidfeature(r),
              s.Body().set_gidfeature2(o),
              s.Body().set_include_deleted(!0),
              s.Body().set_oldest_first(!0);
            return (await u.BE.GetCommentThread(c, s)).Body().toObject();
          },
        });
      }
      function S(e) {
        var t, r;
        let o = "",
          c = "";
        if (!e.additional_subject_data) return null;
        for (const s of null !==
          (r =
            null === (t = e.additional_subject_data) || void 0 === t
              ? void 0
              : t.data) && void 0 !== r
          ? r
          : [])
          "clanSteamId" === s.key
            ? (o = s.value)
            : "forumId" === s.key
              ? (c = s.value)
              : console.error(
                  `Unknown additional data key ${s.key} in forum post.`,
                );
        if ("" == o)
          return console.error("Missing clanSteamId in additional data."), null;
        if ("" == c)
          return console.error("Missing forumId in additional data."), null;
        return { clanSteamId: o, forumId: c };
      }
    },
    90182: (e, t, r) => {
      "use strict";
      r.d(t, {
        KQ: () => y,
        Kt: () => _,
        N8: () => m,
        iW: () => f,
        kZ: () => b,
        lY: () => h,
        wy: () => j,
        y4: () => p,
      });
      var o = r(56545),
        c = r(99164),
        s = r(23809),
        n = r(88942),
        i = r(29385),
        l = r(61739),
        a = r(37085);
      const u = "get_content_report_subject_group",
        d = "get_content_report_subject_audit_log";
      async function f(e, t, r, o) {
        return Promise.all([
          e.invalidateQueries({ queryKey: [u, t, r] }),
          e.invalidateQueries({ queryKey: [d, t, r, o] }),
        ]);
      }
      function b(e, t) {
        const r = (0, s.KV)();
        return (0, n.I)(
          (function (e, t, r) {
            return {
              queryKey: [u, t, r],
              queryFn: async () => {
                const s = o.w.Init(c.ge);
                s.Body().set_subject_type(t), s.Body().set_subject_group_id(r);
                const n = await c.fL.GetContentReportSubjectGroup(e, s);
                if (!n.BSuccess())
                  throw new Error(
                    "Failed in GetContentReportSubjectGroup, EResult: " +
                      n.GetEResult(),
                  );
                return n.Body().toObject();
              },
            };
          })(r, e, t),
        );
      }
      function _(e, t, r) {
        const i = (0, s.KV)();
        return (0, n.I)(
          (function (e, t, r, s) {
            return {
              queryKey: [d, t, r, s],
              queryFn: async () => {
                if (void 0 === t || void 0 === r || void 0 === s) return;
                const n = o.w.Init(c.Ru);
                return (
                  n.Body().set_subject_type(t),
                  n.Body().set_subject_group_id(r),
                  n.Body().set_subject_id(s),
                  (await c.fL.GetAuditLog(e, n)).Body().toObject()
                );
              },
            };
          })(i, e, t, r),
        );
      }
      function h(e, t, r) {
        const n = (0, s.KV)(),
          u = (0, i.jE)();
        return (0, l.n)({
          mutationFn: async (s) => {
            const i = o.w.Init(c.u5);
            i.Body().set_subject_type(e),
              i.Body().set_subject_group_id(t),
              i.Body().set_subject_id(r),
              i.Body().set_required_level(s.eNewLevel),
              s.eReason && i.Body().set_reason(s.eReason),
              s.strNote && i.Body().set_note(s.strNote);
            const l = await c.fL.EscalateSubject(n, i);
            if (l.GetEResult() !== a.R)
              throw new Error(`Failed to escalate subject: ${l.GetEMsg()}`);
          },
          onSuccess: async (o, c) => {
            await f(u, e, t, r);
          },
        });
      }
      function m() {
        const e = (0, s.KV)(),
          t = (0, i.jE)();
        return (0, l.n)({
          mutationFn: async (t) => {
            const r = o.w.Init(c.j);
            r.Body().set_subject_type(t.eSubjectType),
              r.Body().set_subject_group_id(t.ulSubjectGroupID),
              r.Body().set_subject_id(t.ulSubjectID);
            await c.fL.SustainModeration(e, r);
          },
          onSuccess: async (e, r) => {
            await f(t, r.eSubjectType, r.ulSubjectGroupID, r.ulSubjectID);
          },
        });
      }
      function p(e, t, r, n, a) {
        const u = (0, s.KV)(),
          d = (0, i.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const s = o.w.Init(c.ZV);
            s.Body().set_steamid(e),
              s.Body().set_subject_type(t),
              s.Body().set_subject_group_id(r),
              s.Body().set_subject_id(n),
              s.Body().set_details(a);
            await c.fL.DisputeModerationForSubject(u, s);
          },
          onSuccess: async () => {
            await f(d, t, r, n);
          },
        });
      }
      function j(e, t, r, n) {
        const a = (0, i.jE)(),
          u = (0, s.KV)();
        return (0, l.n)({
          mutationFn: async () => {
            const s = o.w.Init(c.zF);
            s.Body().set_subject_type(e),
              s.Body().set_subject_group_id(t),
              s.Body().set_subject_id(r),
              s.Body().set_owner_dispute_details(n);
            const i = await c.fL.UpdateSubject(u, s);
            if (!i.BSuccess()) throw new Error("EResult " + i.GetEResult());
          },
          onSuccess: async () => {
            await f(a, e, t, r);
          },
        });
      }
      function y(e) {
        const t = (0, s.KV)();
        return (0, n.I)(
          (function (e, t) {
            return {
              queryKey: ["reporterstats", t],
              queryFn: async () => {
                const r = o.w.Init(c.KD);
                r.Body().set_steamid(t);
                const s = await c.fL.GetReporterStats(e, r);
                if (!s.BSuccess()) throw new Error("EResult " + s.GetEResult());
                return s.Body().toObject();
              },
            };
          })(t, e),
        );
      }
    },
    37226: (e, t, r) => {
      "use strict";
      r.d(t, { Bv: () => c, Dq: () => o, Yd: () => s });
      const o = 5,
        c = 7,
        s = 10;
    },
    42248: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => s });
      var o = r(78327),
        c = r(22837);
      function s() {
        return o.TS.IN_CLIENT && (0, c.DOG)(o.TS.LAUNCHER_TYPE);
      }
    },
    22797: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => d });
      var o = r(7850),
        c = r(90626),
        s = r(52038),
        n = r(20978),
        i = r.n(n);
      const l =
        r.p +
        "images/applications/community/steam_spinner.png?v=valveisgoodatcaching";
      var a = r(42248),
        u = r(8527);
      const d = c.memo(function (e) {
        const {
          className: t,
          size: r,
          string: n,
          position: d,
          static: b,
          msDelayAppear: _,
        } = e;
        let h = [i().LoadingWrapper, "SteamLogoThrobber", f(r)];
        const [m, p] = c.useState(!_),
          j = !(0, a.q)();
        return (
          (0, c.useEffect)(() => {
            if (m) return;
            const e = setTimeout(() => p(!0), _);
            return () => clearTimeout(e);
          }, [_, m]),
          void 0 === n && h.push(i().noString),
          t && h.push(t),
          b && h.push(i().Static),
          (0, o.jsxs)("div", {
            className: (0, s.A)(
              "center" == d && i().throbber_center_wrapper,
              !!_ && i().ThrobberDelayAppear,
              m && i().Visible,
            ),
            children: [
              m &&
                j &&
                (0, o.jsx)("div", {
                  className: h.join(" "),
                  children: (0, o.jsx)("div", {
                    className: i().NewThrobber,
                    children: (0, o.jsx)("img", { src: (0, u.YJ)(l) }),
                  }),
                }),
              Boolean(n) &&
                (0, o.jsx)("div", { className: i().ThrobberText, children: n }),
            ],
          })
        );
      });
      c.memo(function (e) {
        const {
          className: t,
          size: r,
          string: n,
          position: l,
          static: a,
          msDelayAppear: u,
        } = e;
        let d = [i().LoadingWrapper, "SteamLogoThrobber", f(r)];
        const [_, h] = c.useState(!u);
        return (
          (0, c.useEffect)(() => {
            if (_) return;
            const e = setTimeout(() => h(!0), u);
            return () => clearTimeout(e);
          }, [u, _]),
          void 0 === n && d.push(i().noString),
          t && d.push(t),
          a && d.push(i().Static),
          (0, o.jsxs)("div", {
            className: (0, s.A)(
              "center" == l && i().throbber_center_wrapper,
              !!u && i().ThrobberDelayAppear,
              _ && i().Visible,
            ),
            children: [
              _ &&
                (0, o.jsx)("div", {
                  className: d.join(" "),
                  children: (0, o.jsxs)("div", {
                    className: i().Throbber,
                    children: [
                      (0, o.jsx)(b, { className: i().base }),
                      (0, o.jsx)(b, { className: i().blur }),
                    ],
                  }),
                }),
              Boolean(n) &&
                (0, o.jsx)("div", { className: i().ThrobberText, children: n }),
            ],
          })
        );
      });
      function f(e) {
        switch (e) {
          case "small":
            return i().throbber_small;
          case "medium":
            return i().throbber_medium;
          case "xlarge":
            return i().throbber_xlarge;
          case "xxlarge":
            return i().throbber_xxlarge;
          default:
            return i().throbber_large;
        }
      }
      function b(e) {
        let t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          (0, o.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, o.jsxs)("g", {
                className: i().partCircle,
                children: [
                  (0, o.jsx)("path", {
                    className: i().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M201.432,101.166",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
                  }),
                ],
              }),
              (0, o.jsxs)("g", {
                className: i().mainOutline,
                children: [
                  (0, o.jsx)("path", {
                    className: i().roundFill,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundOuterOutline,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber01,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber02,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber03,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber04,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber05,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber06,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber07,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber08,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber09,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber10,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber11,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber12,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber13,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber14,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, o.jsx)("path", {
                    className: i().roundThrobber15,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                ],
              }),
              (0, o.jsx)("g", {
                className: i().bottomCircle,
                children: (0, o.jsx)("path", {
                  fill: "#ffffff",
                  d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
                }),
              }),
              (0, o.jsx)("g", {
                className: i().topCircle,
                children: (0, o.jsx)("circle", {
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "6",
                  strokeMiterlimit: "10",
                  cx: "161.731",
                  cy: "101.274",
                  r: "23.019",
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
