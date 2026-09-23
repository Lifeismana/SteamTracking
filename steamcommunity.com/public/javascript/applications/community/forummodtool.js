/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [140],
  {
    87100: (t) => {
      t.exports = {
        CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
        CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
        BigButton: "_3QFnwUCRHpPU2YWoxMv2b8",
        NormalButton: "TLP9bd53vhNfYhUroF4Np",
      };
    },
    58317: (t, e, o) => {
      "use strict";
      o.d(e, { A: () => a });
      var s = o(7850),
        n = o(90626),
        c = o(6336),
        i = o(87100),
        d = o(4869),
        r = o(52038);
      function a(t) {
        const [e, o] = (0, n.useState)(!1),
          a = (0, n.useRef)(null);
        return (0, s.jsx)("span", {
          children: (0, s.jsxs)("button", {
            onClick: (e) => (
              o(!0),
              e.stopPropagation(),
              navigator.clipboard.writeText(t.text),
              setTimeout(() => o(!1), 1e3),
              !1
            ),
            className: (0, r.A)(
              i.CopyButton,
              "large" === t.size ? i.BigButton : i.NormalButton,
            ),
            ref: a,
            title: t.text,
            children: [
              e &&
                a.current &&
                (0, s.jsx)(c.g, {
                  target: a.current,
                  direction: "bottom",
                  children: (0, s.jsx)("div", {
                    className: i.CopiedNotice,
                    children: "Copied.",
                  }),
                }),
              (0, s.jsx)(d.cKB, {}),
            ],
          }),
        });
      }
    },
    98786: (t, e, o) => {
      "use strict";
      o.r(e),
        o.d(e, {
          default: () => x,
          useAcquitForumComment: () => p,
          useSanctionForumComment: () => h,
        });
      var s = o(7850),
        n = o(34410),
        c = o(90182),
        i = o(63987),
        d = o(23809),
        r = o(29385),
        a = o(61739),
        u = o(56545),
        l = o(60690),
        m = o(58317),
        j = o(25215);
      function x(t) {
        var e, o;
        const i = (
            null !==
              (o =
                null ===
                  (e = (0, c.w3)({
                    subject_type: n.lN,
                    topic: t.topicId,
                  }).data) || void 0 === e
                  ? void 0
                  : e.subjects) && void 0 !== o
              ? o
              : []
          ).find((e) => {
            var o;
            return (
              (null === (o = e.coordinates) || void 0 === o
                ? void 0
                : o.comment) === t.subjectId
            );
          }),
          d = h(
            t.clanSteamId,
            t.forumId,
            t.topicId,
            t.subjectId,
            null == i ? void 0 : i.reported_content_id,
          ),
          r = p(
            t.clanSteamId,
            t.forumId,
            t.topicId,
            t.subjectId,
            null == i ? void 0 : i.reported_content_id,
          );
        return (0, s.jsx)(j.l, {
          sanctionMutation: d,
          acquitMutation: r,
          subject: i,
          eSubjectType: n.lN,
          gidComment: t.subjectId,
          authorSteamID: t.authorSteamId,
          clanSteamID: t.clanSteamId,
          children: (0, s.jsx)(I, { ...t }),
        });
      }
      function I(t) {
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
                      (0, s.jsx)(m.A, { text: t.clanSteamId, size: "small" }),
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
                      (0, s.jsx)(m.A, { text: t.forumId, size: "small" }),
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
                      (0, s.jsx)(m.A, { text: t.topicId, size: "small" }),
                    ],
                  }),
                ],
              }),
              t.subjectId !== i.Ie &&
                (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("td", { children: "Comment GID:" }),
                    (0, s.jsxs)("td", {
                      children: [
                        t.subjectId,
                        " ",
                        (0, s.jsx)(m.A, { text: t.subjectId, size: "small" }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      function p(t, e, o, s, n) {
        const i = (0, d.KV)(),
          m = (0, r.jE)();
        return (0, a.n)({
          mutationFn: async () => {
            const n = u.w.Init(l.Km);
            n.Body().set_steamid(t),
              n.Body().set_gidforum(e),
              n.Body().set_gidtopic(o),
              n.Body().set_gidpost(s);
            const c = await l.el.ResolveReportedPost(i, n);
            if (!c.BSuccess())
              throw new Error("Failed to acquit forum comment: " + c.GetEMsg());
          },
          onSuccess: async (t) => {
            await (0, c.Ky)(m, n);
          },
        });
      }
      function h(t, e, o, s, n) {
        const i = (0, d.KV)(),
          m = (0, r.jE)();
        return (0, a.n)({
          mutationFn: async (n) => {
            const c = u.w.Init(l.FD);
            c.Body().set_steamid(t),
              c.Body().set_gidforum(e),
              c.Body().set_gidtopic(o),
              c.Body().set_gidpost(s),
              c.Body().set_reason(n.reason),
              c.Body().set_note(n.message);
            for (const t of n.sanctions) {
              const e = new l.RQ();
              e.set_sanction(t.sanction),
                void 0 !== t.days && e.set_days(t.days),
                c.Body().add_sanctions(e);
            }
            const d = await l.el.SanctionReportedPost(i, c);
            if (!d.BSuccess())
              throw new Error(
                "Failed to sanction forum comment: (" +
                  d.GetEResult() +
                  ") " +
                  d.GetErrorMessage(),
              );
          },
          onSuccess: async (t) => {
            await (0, c.Ky)(m, n);
          },
        });
      }
    },
  },
]);
