/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [140],
    {
      23980: (y, D, e) => {
        "use strict";
        e.d(D, { A: () => _ });
        var s = e(7850),
          i = e(90626),
          l = e(561),
          a = e(87100),
          h = e.n(a),
          M = e(56718),
          B = e(36707);
        function _(c) {
          const [x, P] = (0, i.useState)(!1),
            m = (0, i.useRef)(null),
            C = (f) => (
              P(!0),
              f.stopPropagation(),
              navigator.clipboard.writeText(c.text),
              setTimeout(() => P(!1), 1e3),
              !1
            );
          return (0, s.jsx)("span", {
            children: (0, s.jsxs)("button", {
              onClick: C,
              className: (0, B.A)(
                a.CopyButton,
                c.size === "large" ? a.BigButton : a.NormalButton,
              ),
              ref: m,
              title: c.text,
              children: [
                x &&
                  m.current &&
                  (0, s.jsx)(l.g, {
                    target: m.current,
                    direction: "bottom",
                    children: (0, s.jsx)("div", {
                      className: a.CopiedNotice,
                      children: "Copied.",
                    }),
                  }),
                (0, s.jsx)(M.cKB, {}),
              ],
            }),
          });
        }
      },
      92083: (y, D, e) => {
        "use strict";
        e.r(D),
          e.d(D, {
            default: () => P,
            useAcquitForumComment: () => C,
            useSanctionForumComment: () => f,
          });
        var s = e(7850),
          i = e(64981),
          l = e(46085),
          a = e(68312),
          h = e(29385),
          M = e(61739),
          B = e(35038),
          _ = e(90109),
          c = e(23980),
          x = e(25614);
        function P(t) {
          var r, d;
          const u = (0, l.kZ)(i.lN, t.topicId),
            E = f(t.clanSteamId, t.forumId, t.topicId, t.subjectId),
            I = C(t.clanSteamId, t.forumId, t.topicId, t.subjectId),
            o = {
              subject_type: i.lN,
              subject_group_id: t.topicId,
              subject_id: t.subjectId,
            },
            n = (
              (d = (r = u.data) == null ? void 0 : r.subjects) != null ? d : []
            ).find((j) => j.subject_id === t.subjectId);
          return (0, s.jsx)(x.l, {
            sanctionMutation: E,
            acquitMutation: I,
            subjectKey: o,
            subject: n,
            authorSteamID: t.authorSteamId,
            clanSteamID: t.clanSteamId,
            children: (0, s.jsx)(m, { ...t }),
          });
        }
        function m(t) {
          return (0, s.jsx)("table", {
            children: (0, s.jsxs)("tbody", {
              children: [
                (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("td", { children: "Clan SteamID:" }),
                    (0, s.jsxs)("td", {
                      children: [
                        t.clanSteamId,
                        " ",
                        (0, s.jsx)(c.A, { text: t.clanSteamId, size: "small" }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("td", { children: "Forum GID:" }),
                    (0, s.jsxs)("td", {
                      children: [
                        t.forumId,
                        " ",
                        (0, s.jsx)(c.A, { text: t.forumId, size: "small" }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("td", { children: "Topic GID:" }),
                    (0, s.jsxs)("td", {
                      children: [
                        t.topicId,
                        " ",
                        (0, s.jsx)(c.A, { text: t.topicId, size: "small" }),
                      ],
                    }),
                  ],
                }),
                t.subjectId !== "0" &&
                  (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("td", { children: "Comment GID:" }),
                      (0, s.jsxs)("td", {
                        children: [
                          t.subjectId,
                          " ",
                          (0, s.jsx)(c.A, { text: t.subjectId, size: "small" }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function C(t, r, d, u) {
          const E = (0, a.KV)(),
            I = (0, h.jE)();
          return (0, M.n)({
            mutationFn: async () => {
              const o = B.w.Init(_.Km);
              o.Body().set_steamid(t),
                o.Body().set_gidforum(r),
                o.Body().set_gidtopic(d),
                o.Body().set_gidpost(u);
              const n = await _.el.ResolveReportedPost(E, o);
              if (!n.BSuccess())
                throw new Error(
                  "Failed to acquit forum comment: " + n.GetEMsg(),
                );
            },
            onSuccess: async (o) => {
              await (0, l.iW)(I, i.lN, d, u);
            },
          });
        }
        function f(t, r, d, u) {
          const E = (0, a.KV)(),
            I = (0, h.jE)();
          return (0, M.n)({
            mutationFn: async (o) => {
              const n = B.w.Init(_.FD);
              n.Body().set_steamid(t),
                n.Body().set_gidforum(r),
                n.Body().set_gidtopic(d),
                n.Body().set_gidpost(u),
                n.Body().set_reason(o.reason),
                n.Body().set_note(o.message);
              for (const O of o.sanctions) {
                const R = new _.RQ();
                R.set_sanction(O.sanction),
                  O.days !== void 0 && R.set_days(O.days),
                  n.Body().add_sanctions(R);
              }
              const j = await _.el.SanctionReportedPost(E, n);
              if (!j.BSuccess())
                throw new Error(
                  "Failed to sanction forum comment: (" +
                    j.GetEResult() +
                    ") " +
                    j.GetErrorMessage(),
                );
            },
            onSuccess: async (o) => {
              await (0, l.iW)(I, i.lN, d, u);
            },
          });
        }
      },
      87100: (y) => {
        y.exports = {
          CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
          CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
          BigButton: "_3QFnwUCRHpPU2YWoxMv2b8",
          NormalButton: "TLP9bd53vhNfYhUroF4Np",
        };
      },
    },
  ]);
})();
