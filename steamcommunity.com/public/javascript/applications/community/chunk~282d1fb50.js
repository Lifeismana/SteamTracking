/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7062],
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
          ReportedSubjectList: () => k,
          default: () => v,
          useCommentThread: () => N,
        });
      var o = r(7850),
        s = r(90182),
        c = r(43224),
        n = r(63987),
        i = r(56545),
        a = r(34410),
        l = r(37226),
        d = r(15993),
        u = r(43261),
        f = r(88942),
        m = r(23809),
        b = r(22797),
        _ = r(78327),
        h = r(30253),
        p = r(90626),
        y = r(12155),
        j = r(52038);
      function v(e) {
        const t = (0, s.w3)({ subject_type: a.lN, topic: e.gidTopic }),
          r = N(e.clanSteamID, l.Bv, e.gidForum, e.gidTopic);
        return (0, o.jsx)(k, {
          subjectType: a.lN,
          subjectGroupQuery: t,
          commentThreadQuery: r,
        });
      }
      function k(e) {
        var t, r, s;
        const { subjectGroupQuery: n } = e,
          i = "floatingforumreportedsubjectslist",
          [a, l] = (0, p.useState)(() => void 0 !== localStorage[i]);
        if (
          ((0, p.useMemo)(() => {
            var e, t;
            null ===
              (t =
                null === (e = n.data) || void 0 === e ? void 0 : e.subjects) ||
              void 0 === t ||
              t.sort(x);
          }, [null === (t = n.data) || void 0 === t ? void 0 : t.subjects]),
          !n.isSuccess ||
            !(null === (r = n.data) || void 0 === r ? void 0 : r.subjects) ||
            0 === n.data.subjects.length)
        )
          return null;
        let d = 0;
        return (0, o.jsx)("div", {
          className: a
            ? h.FloatingSubjectListCtn
            : null !== (s = e.inlineClassNames) && void 0 !== s
              ? s
              : "",
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
                      (0, o.jsx)("div", {
                        className: "title",
                        children: c.T.Localize("#reportedsubjectlist_header"),
                      }),
                      (0, o.jsx)("button", {
                        className: h.PopoutButton,
                        onClick: () => {
                          a
                            ? localStorage.removeItem(i)
                            : localStorage.setItem(i, "1"),
                            l(!a);
                        },
                        children: (0, o.jsx)(y.YNO, {}),
                      }),
                    ],
                  }),
                }),
                n.isError &&
                  (0, o.jsx)("div", {
                    className: "moderatorToolLink",
                    children: "Error",
                  }),
                n.isLoading && (0, o.jsx)(b.t, {}),
                n.isSuccess &&
                  (0, o.jsx)("div", {
                    style: { maxHeight: "20em", overflowY: "scroll" },
                    children: n.data.subjects.map((t) =>
                      t.coordinates
                        ? (0, o.jsx)(
                            S,
                            {
                              subject: t,
                              commentThreadQuery: e.commentThreadQuery,
                            },
                            t.reported_content_id,
                          )
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
                          ),
                    ),
                  }),
              ],
            }),
          }),
        });
      }
      function x(e, t) {
        var r, o, s, c;
        const n =
          e.unresolved_dispute_count + e.unresolved_report_count > 0 ? 1 : 0;
        return (
          (t.unresolved_dispute_count + t.unresolved_report_count > 0 ? 1 : 0) -
            n ||
          t.required_moderator_level - e.required_moderator_level ||
          (function (e, t) {
            if (e.length !== t.length) return e.length - t.length;
            for (let r = 0; r < e.length; r++) {
              const o = e.charCodeAt(r),
                s = t.charCodeAt(r);
              if (o !== s) return o - s;
            }
            return 0;
          })(
            null !==
              (o =
                null === (r = e.coordinates) || void 0 === r
                  ? void 0
                  : r.comment) && void 0 !== o
              ? o
              : "",
            null !==
              (c =
                null === (s = t.coordinates) || void 0 === s
                  ? void 0
                  : s.comment) && void 0 !== c
              ? c
              : "",
          )
        );
      }
      function g(e) {
        for (;;) {
          const t = e.indexOf("[/quote]");
          if (-1 === t) break;
          e = e.slice(t + 8);
        }
        return e.slice(0, 35);
      }
      function S(e) {
        var t, r, s, i;
        const { subject: l, commentThreadQuery: u } = e,
          f = null === (t = l.coordinates) || void 0 === t ? void 0 : t.comment;
        let m = null;
        f === n.Ie && (m = "Topic");
        let b,
          p = "#NA";
        if (null === m && u.isSuccess) {
          let e = 1;
          for (const t of null !== (r = u.data.comments) && void 0 !== r
            ? r
            : []) {
            if (t.gidcomment === f) {
              (m = g(t.text)), (p = `#${e}`);
              break;
            }
            e++;
          }
        }
        if (null === m && u.isSuccess)
          if (l.subject_type === a.NC) m = "[Deleted]";
          else
            for (const e of null !== (s = u.data.deleted_comments) &&
            void 0 !== s
              ? s
              : [])
              if (e.gidcomment === f) {
                m = g(e.text);
                break;
              }
        null === m && (m = "[Comment]"),
          l.subject_type === a.lN
            ? (b =
                f === n.Ie
                  ? `#forum_op_${null === (i = l.coordinates) || void 0 === i ? void 0 : i.topic}`
                  : `#c${f}`)
            : l.subject_type === a.NC && (b = `#comment_${f}`);
        const y =
            l.unresolved_dispute_count > 0 || l.unresolved_report_count > 0,
          v = l.required_moderator_level === d.PV,
          k = l.required_moderator_level === d.lp;
        return (0, o.jsxs)("div", {
          className: (0, j.A)("moderatorToolLink", h.ReportedSubjectRow),
          children: [
            (0, o.jsxs)("a", {
              href: b,
              children: [
                y &&
                  !v &&
                  !k &&
                  (0, o.jsx)("img", {
                    className: h.FlagIcon,
                    src: `${_.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                  }),
                !y &&
                  (0, o.jsx)("span", { className: h.FlagIcon, children: " " }),
                y &&
                  v &&
                  (0, o.jsx)("span", {
                    className: (0, j.A)(h.FlagIcon, h.ValveOnlyFlag),
                    children: "VO",
                  }),
                y &&
                  k &&
                  (0, o.jsx)("span", {
                    className: (0, j.A)(h.FlagIcon, h.SupervisorFlag),
                    children: "▲",
                  }),
                " ",
                p,
                " ",
                m,
              ],
            }),
            (0, o.jsxs)("div", {
              className: h.SubjectReportSummary,
              children: [
                " ",
                c.T.Localize(
                  "#forumsubjectlist_subjectreportsummary",
                  l.unresolved_report_count,
                  l.unresolved_dispute_count,
                ),
              ],
            }),
          ],
        });
      }
      function N(e, t, r, o) {
        const s = (0, m.KV)();
        return (0, f.I)({
          queryKey: ["comment_thread", e, t, r, o],
          queryFn: async () => {
            const c = i.w.Init(u.ZP);
            c.Body().set_steamid(e),
              c.Body().set_comment_thread_type(t),
              -1 !== r && c.Body().set_gidfeature(r),
              -1 !== o && c.Body().set_gidfeature2(o),
              c.Body().set_include_deleted(!0),
              c.Body().set_oldest_first(!0);
            return (await u.BE.GetCommentThread(s, c)).Body().toObject();
          },
        });
      }
    },
    90182: (e, t, r) => {
      "use strict";
      r.d(t, {
        EC: () => S,
        KQ: () => g,
        Kt: () => y,
        Ky: () => h,
        N8: () => v,
        c3: () => N,
        lY: () => j,
        w3: () => p,
        wy: () => x,
        y4: () => k,
      });
      var o = r(37085),
        s = r(56545),
        c = r(43261),
        n = r(99164),
        i = r(23809),
        a = r(88942),
        l = r(29385),
        d = r(61739),
        u = r(63987);
      const f = "get_reported_content",
        m = (e) => [f, JSON.stringify(e)],
        b = (e) => ["get_reported_content_by_id", e],
        _ = (e) => ["get_reported_content_audit_log", e];
      async function h(e, t) {
        return Promise.all([
          e.invalidateQueries({ queryKey: [f], exact: !1 }),
          e.invalidateQueries({ queryKey: b(t) }),
          e.invalidateQueries({ queryKey: _(t) }),
        ]);
      }
      function p(e) {
        const t = (0, i.KV)();
        return (0, a.I)(
          (function (e, t) {
            return {
              queryKey: m(t),
              enabled: (0, u.NX)(t),
              queryFn: async () => {
                const r = s.w.Init(n.Mw);
                r.Body().set_coordinates(n.UC.fromObject(t));
                const o = await n.fL.GetReportedContent(e, r);
                if (!o.BSuccess())
                  throw new Error(
                    "Failed in GetReportedContent, EResult: " + o.GetEResult(),
                  );
                return o.Body().toObject();
              },
            };
          })(t, e),
        );
      }
      function y(e) {
        const t = (0, i.KV)();
        return (0, a.I)(
          (function (e, t) {
            return {
              queryKey: _(t),
              queryFn: async () => {
                if (!t) return;
                const r = s.w.Init(n.v5);
                return (
                  r.Body().set_reported_content_id(t),
                  (await n.fL.GetAuditLogByID(e, r)).Body().toObject()
                );
              },
            };
          })(t, e),
        );
      }
      function j(e) {
        const t = (0, i.KV)(),
          r = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async (r) => {
            const c = s.w.Init(n.Qi);
            c.Body().set_reported_content_id(e),
              c.Body().set_new_level(r.eNewLevel),
              r.eReason && c.Body().set_reason(r.eReason),
              r.strNote && c.Body().set_note(r.strNote);
            const i = await n.fL.EscalateSubjectByID(t, c);
            if (i.GetEResult() !== o.R)
              throw new Error(`Failed to escalate subject: ${i.GetEMsg()}`);
          },
          onSuccess: async () => {
            await Promise.all([
              h(r, e),
              r.invalidateQueries({ queryKey: ["get_claimed"] }),
              r.invalidateQueries({ queryKey: ["get_subject_overview"] }),
            ]);
          },
        });
      }
      function v() {
        const e = (0, i.KV)(),
          t = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async (t) => {
            const r = s.w.Init(n.Nr);
            r.Body().set_reported_content_id(t.reportedContentID);
            const o = await n.fL.SustainModerationByID(e, r);
            if (!o.BSuccess()) throw new Error("EResult " + o.GetEResult());
          },
          onSuccess: async (e, r) => {
            await h(t, r.reportedContentID),
              await t.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
      function k(e, t) {
        const r = (0, i.KV)(),
          o = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async () => {
            const o = s.w.Init(n.LW);
            o.Body().set_reported_content_id(e), o.Body().set_details(t);
            const c = await n.fL.OwnerDisputeModeration(r, o);
            if (!c.BSuccess()) throw new Error("EResult " + c.GetEResult());
          },
          onSuccess: async () => {
            await h(o, e);
          },
        });
      }
      function x(e, t) {
        const r = (0, l.jE)(),
          o = (0, i.KV)();
        return (0, d.n)({
          mutationFn: async () => {
            const r = s.w.Init(n.ps);
            r.Body().set_reported_content_id(e),
              r.Body().set_owner_dispute_details(t);
            const c = await n.fL.UpdateSubjectByID(o, r);
            if (!c.BSuccess()) throw new Error("EResult " + c.GetEResult());
          },
          onSuccess: async () => {
            await h(r, e);
          },
        });
      }
      function g(e) {
        const t = (0, i.KV)();
        return (0, a.I)(
          (function (e, t) {
            return {
              queryKey: ["reporterstats", t],
              queryFn: async () => {
                const r = s.w.Init(n.KD);
                r.Body().set_steamid(t);
                const o = await n.fL.GetReporterStats(e, r);
                if (!o.BSuccess()) throw new Error("EResult " + o.GetEResult());
                return o.Body().toObject();
              },
            };
          })(t, e),
        );
      }
      function S(e, t, r) {
        const o = (0, i.KV)(),
          n = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async (n) => {
            const i = s.w.Init(c.Er);
            i.Body().set_steamid(e),
              i.Body().set_comment_thread_id(t),
              i.Body().set_gidcomment(r),
              i.Body().set_reason(n.reason),
              i.Body().set_note(n.message);
            for (const e of n.sanctions) {
              const t = new c.u6();
              t.set_sanction(e.sanction),
                e.days && t.set_days(e.days),
                i.Body().add_sanctions(t);
            }
            const a = await c.BE.SanctionComment(o, i);
            if (!a.BSuccess())
              throw new Error(
                `SanctionComment failed. EResult: ${a.GetEResult()} (${a.GetErrorMessage()})`,
              );
          },
          onSuccess: async () => {
            await n.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
      function N(e, t, r) {
        const o = (0, i.KV)(),
          n = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async () => {
            const n = s.w.Init(c.RX);
            n.Body().set_steamid(e),
              n.Body().set_comment_thread_id(t),
              n.Body().set_gidcomment(r),
              n.Body().set_report_action(c.du.Pn),
              n.Body().set_resolve(!0),
              await c.Vi.UpdateCommentReportState(o, n);
          },
          onSuccess: async () => {
            await n.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
    },
    37226: (e, t, r) => {
      "use strict";
      r.d(t, { Bv: () => s, Dq: () => o, Yd: () => c });
      const o = 5,
        s = 7,
        c = 10;
    },
    42248: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => c });
      var o = r(78327),
        s = r(22837);
      function c() {
        return o.TS.IN_CLIENT && (0, s.DOG)(o.TS.LAUNCHER_TYPE);
      }
    },
    22797: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => u });
      var o = r(7850),
        s = r(90626),
        c = r(52038),
        n = r(20978),
        i = r.n(n);
      const a =
        r.p +
        "images/applications/community/steam_spinner.png?v=valveisgoodatcaching";
      var l = r(42248),
        d = r(66418);
      const u = s.memo(function (e) {
        const {
          className: t,
          size: r,
          string: n,
          position: u,
          static: m,
          msDelayAppear: b,
        } = e;
        let _ = [i().LoadingWrapper, "SteamLogoThrobber", f(r)];
        const [h, p] = s.useState(!b),
          y = !(0, l.q)();
        return (
          (0, s.useEffect)(() => {
            if (h) return;
            const e = setTimeout(() => p(!0), b);
            return () => clearTimeout(e);
          }, [b, h]),
          void 0 === n && _.push(i().noString),
          t && _.push(t),
          m && _.push(i().Static),
          (0, o.jsxs)("div", {
            className: (0, c.A)(
              "center" == u && i().throbber_center_wrapper,
              !!b && i().ThrobberDelayAppear,
              h && i().Visible,
            ),
            children: [
              h &&
                y &&
                (0, o.jsx)("div", {
                  className: _.join(" "),
                  children: (0, o.jsx)("div", {
                    className: i().NewThrobber,
                    children: (0, o.jsx)("img", { src: (0, d.YJ)(a) }),
                  }),
                }),
              Boolean(n) &&
                (0, o.jsx)("div", { className: i().ThrobberText, children: n }),
            ],
          })
        );
      });
      s.memo(function (e) {
        const {
          className: t,
          size: r,
          string: n,
          position: a,
          static: l,
          msDelayAppear: d,
        } = e;
        let u = [i().LoadingWrapper, "SteamLogoThrobber", f(r)];
        const [b, _] = s.useState(!d);
        return (
          (0, s.useEffect)(() => {
            if (b) return;
            const e = setTimeout(() => _(!0), d);
            return () => clearTimeout(e);
          }, [d, b]),
          void 0 === n && u.push(i().noString),
          t && u.push(t),
          l && u.push(i().Static),
          (0, o.jsxs)("div", {
            className: (0, c.A)(
              "center" == a && i().throbber_center_wrapper,
              !!d && i().ThrobberDelayAppear,
              b && i().Visible,
            ),
            children: [
              b &&
                (0, o.jsx)("div", {
                  className: u.join(" "),
                  children: (0, o.jsxs)("div", {
                    className: i().Throbber,
                    children: [
                      (0, o.jsx)(m, { className: i().base }),
                      (0, o.jsx)(m, { className: i().blur }),
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
      function m(e) {
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
