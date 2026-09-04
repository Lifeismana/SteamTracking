/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7383],
    {
      88994: (m, e, o) => {
        "use strict";
        o.r(e), o.d(e, { default: () => l });
        var r = o(7850),
          d = o(48976),
          u = o(90626),
          c = o(85599),
          n = o(98609),
          E = o(95012),
          _ = o(73850),
          M = o.n(_);
        function l(P) {
          const s = (0, d.jo)(),
            i = (0, u.useMemo)(() => {
              if (s) {
                const a = Math.floor(Date.now() / 1e3) - 345600,
                  D = a + 480 * 60 * 60;
                return s
                  .filter(
                    (t) =>
                      t.start_date > a &&
                      t.start_date < D &&
                      ((!t.owner_account_id &&
                        t.creator_account_id == n.iA.accountid) ||
                        t.owner_account_id == n.iA.accountid ||
                        (t.artwork_owner_account_id == n.iA.accountid &&
                          !t.artwork_completed_time) ||
                        t.operator_account_id == n.iA.accountid ||
                        t.watch_list?.includes(n.iA.accountid)),
                  )
                  .map((t) => t.id);
              }
              return null;
            }, [s]);
          return n.iA.is_support
            ? !i || s.length == 0
              ? (0, r.jsx)(c.t, {
                  string: "loading",
                  size: "medium",
                  position: "center",
                })
              : i.length == 0
                ? (0, r.jsx)("div", {
                    children:
                      "You're all good! Nothing of yours needs attention :)",
                  })
                : (0, r.jsx)("div", {
                    className: _.Ctn,
                    children: (0, r.jsx)(E.U, {
                      planIDs: i,
                      bExcludeHideButton: !0,
                      bHideTypeField: !0,
                      bHideDoneByDefault: !0,
                    }),
                  })
            : null;
        }
      },
      73850: () => {},
    },
  ]);
})();
