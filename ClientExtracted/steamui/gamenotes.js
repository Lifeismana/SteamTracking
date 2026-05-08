(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [1220],
  {
    39889: (e) => {
      e.exports = { GameNotesPopup: "_3hIt9g_59KauEV2uSNK6Ct" };
    },
    44840: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => f });
      var o = s(62540),
        n = s(63098),
        p = s(34394),
        i = s(55518),
        r = s(63696),
        a = s(49519),
        u = s(67808),
        d = s(73259),
        c = s(45264),
        l = s(38134),
        h = s(64608),
        m = s(10606),
        x = s(46108),
        j = s(39889);
      function f(e) {
        const { popup: t } = e,
          [s, p] = r.useState();
        return (
          r.useEffect(() => {
            if (s)
              return n.U.RegisterPopup(t, () =>
                s.SteamClient.Window.BringToFront(),
              );
          }, [t, s]),
          void 0 === t.noteid
            ? (0, o.jsx)(_, { popup: t, refPopup: p })
            : (0, o.jsx)(P, { popup: t, refPopup: p })
        );
      }
      function P(e) {
        const { popup: t, refPopup: s } = e,
          n = (0, x.we)("#GameNotes_NoteForGame", t.display_name);
        return (0, o.jsx)(u.p, {
          body_class: j.GameNotesPopup,
          children: (0, o.jsxs)(m.hM, {
            strName: t.id,
            strTitle: n,
            onDismiss: () => t.close(),
            popupWidth: 500,
            popupHeight: 500,
            resizable: !0,
            refPopup: s,
            className: "TODO",
            children: [
              (0, o.jsx)(h.Y9, { children: n }),
              (0, o.jsx)(p.A, {
                mode: "single",
                closePopup: () => t.close(),
                children: (0, o.jsx)(N, {
                  noteParent: t.noteParent,
                  noteid: t.noteid,
                }),
              }),
            ],
          }),
        });
      }
      function N(e) {
        const { noteParent: t, noteid: s } = e,
          { data: n } = (0, c.P6)(t, s);
        return n ? (0, o.jsx)(l.U, { note: n }) : null;
      }
      function _(e) {
        const { popup: t, refPopup: s } = e,
          n = t.noteParent,
          u = r.useMemo(() => [(0, d.o)(n)], [n]);
        return (0, o.jsx)(m.hM, {
          strName: t.id,
          strTitle: t.display_name,
          onDismiss: () => t.close(),
          popupWidth: 900,
          popupHeight: 830,
          resizable: !0,
          refPopup: s,
          className: "TODO",
          children: (0, o.jsx)(a.fS, {
            initialEntries: u,
            children: (0, o.jsx)(p.A, {
              mode: "page",
              closePopup: () => t.close(),
              children: (0, o.jsx)(i.default, { noteParent: n }),
            }),
          }),
        });
      }
    },
    55518: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => j });
      var o = s(62540),
        n = s(49519),
        p = s(73259),
        i = s(74751),
        r = s(63696),
        a = s(39941),
        u = s(45264),
        d = s(35395),
        c = s(26853),
        l = s(46108);
      function h() {
        const { data: e, isLoading: t } = (0, u.Yh)(),
          s = r.useMemo(
            () => e?.slice().sort((e, t) => t.last_modified - e.last_modified),
            [e],
          );
        return t
          ? (0, o.jsx)(c.t, { msDelayAppear: 300 })
          : (0, o.jsxs)("div", {
              children: [
                (0, o.jsx)("h1", {
                  children: (0, l.we)("#UserGameNotes_NotesList"),
                }),
                (0, o.jsx)("ul", {
                  children: s.map((e) =>
                    (0, o.jsx)(m, { game: e }, e.appid || e.shortcut_name),
                  ),
                }),
              ],
            });
      }
      function m(e) {
        const { game: t } = e;
        return (0, o.jsx)("li", {
          children: (0, o.jsx)(a.N_, {
            to: (0, p.o)(
              t.appid ? { appid: t.appid } : { shortcut: t.shortcut_name },
            ),
            children: t.appid
              ? (0, o.jsx)(x, { appid: t.appid })
              : t.shortcut_name,
          }),
        });
      }
      function x(e) {
        const { appid: t } = e,
          s = (0, d.X)(t);
        return s?.name;
      }
      function j(e) {
        return (0, o.jsxs)(n.dO, {
          children: [
            (0, o.jsx)(n.qh, { path: p.O.List(), children: (0, o.jsx)(h, {}) }),
            (0, o.jsx)(n.qh, {
              path: p.O.AppNotes(":appid", ":noteid?"),
              children: (0, o.jsx)(i.u, {}),
            }),
            (0, o.jsx)(n.qh, {
              path: p.O.ShortcutNotes(":shortcut_name", ":noteid?"),
              children: (0, o.jsx)(i.u, {}),
            }),
            (0, o.jsx)(n.qh, {
              children: (0, o.jsx)(n.rd, { to: `${(0, p.o)(e.noteParent)}` }),
            }),
          ],
        });
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-deckard-hotfix/build/client/steamui/sourcemaps/gamenotes.js.map
