/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [6662],
    {
      41505: (Y, ot, u) => {
        "use strict";
        u.r(ot), u.d(ot, { default: () => Hm });
        var e = u(7850),
          E = u(90626),
          ie = u(58732),
          M = u(75372),
          Fe = u(53071),
          L = u(99412),
          Ee = u(41735),
          le = u.n(Ee),
          R = u(75844),
          _e = u(17083),
          ae = u(90825),
          W = u(48421),
          X = u(38884),
          k = u(76559),
          J = u(813),
          ne = u(45812),
          p = u(19316),
          me = u(70747),
          Q = u(95695),
          f = u.n(Q),
          s = u(18210),
          Qe = u(5065),
          D = u(3166),
          U = u(88003),
          B = u(53107),
          K = u(7582),
          ue = u(77495),
          pe = u(84676),
          Ie = u(43308),
          F = u(2801),
          z = u(85599),
          Ue = u(22880),
          Ge = u(92264),
          Pe = u(36174),
          Ke = u(92451),
          lt = u.n(Ke);
        const Xe = { include_basic_info: !0 };
        function ce(a) {
          const { clanInfo: t, closeModal: n } = a,
            [i] = (0, pe.t7)(t.appid, Xe),
            [o, l] = E.useState(!0),
            [r, d] = E.useState(!0),
            _ = 1063339200,
            c = K.HD.GetTimeNowWithOverride(),
            [g, h] = E.useState(c - Pe.Kp.PerMonth),
            [v, m] = E.useState(c),
            [x, j] = E.useState(-1),
            S = x >= 0;
          return (0, e.jsx)(F.o0, {
            strTitle: (0, s.we)("#EventDashboard_Stats_title"),
            strDescription: (0, s.we)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: S,
            onOK: () =>
              I(t, i, o ? _ : g, r ? Number.MAX_SAFE_INTEGER : v, j).then(() =>
                n(),
              ),
            children:
              t.appid && !i
                ? (0, e.jsx)(z.t, {
                    string: (0, s.we)("#Loading"),
                    position: "center",
                    size: "medium",
                  })
                : (0, e.jsxs)("div", {
                    className: lt().DialogCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: "DialogLabel",
                        children: (0, s.we)(
                          "#EventDashboard_Stats_Oldest_Title",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: "_DialogInputContainer _DialogLayout",
                        children: [
                          (0, e.jsx)(p.Yh, {
                            label: (0, s.we)("#EventDashboard_Stats_Oldest"),
                            onChange: l,
                            checked: o,
                            disabled: S,
                          }),
                          !o &&
                            (0, e.jsxs)("div", {
                              children: [
                                (0, s.we)(
                                  "#EventDashboard_Stats_Oldest_Override",
                                ),
                                (0, e.jsx)(Ie.K, {
                                  nEarliestTime: _,
                                  nLatestTime: r ? void 0 : v,
                                  bShowTimeZone: !0,
                                  fnGetTimeToUpdate: () => g,
                                  fnSetTimeToUpdate: h,
                                  disabled: S,
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: "DialogLabel",
                        children: (0, s.we)(
                          "#EventDashboard_Stats_Newest_Title",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: "_DialogInputContainer _DialogLayout",
                        children: [
                          (0, e.jsx)(p.Yh, {
                            label: (0, s.we)("#EventDashboard_Stats_Newest"),
                            onChange: d,
                            checked: r,
                            disabled: S,
                          }),
                          !r &&
                            (0, e.jsxs)("div", {
                              children: [
                                (0, s.we)(
                                  "#EventDashboard_Stats_Newest_Override",
                                ),
                                (0, e.jsx)(Ie.K, {
                                  nEarliestTime: o ? _ : g,
                                  bShowTimeZone: !0,
                                  fnGetTimeToUpdate: () => v,
                                  fnSetTimeToUpdate: m,
                                  disabled: S,
                                }),
                              ],
                            }),
                        ],
                      }),
                      S &&
                        (0, e.jsx)(z.t, {
                          position: "center",
                          size: "medium",
                          string: (0, s.we)(
                            "#EventDashboard_Stats_Progress",
                            x,
                          ),
                        }),
                    ],
                  }),
          });
        }
        async function I(a, t, n, i, o) {
          const l = new Array(),
            r = le().CancelToken.source();
          let d = 0;
          o(d);
          const _ = 100;
          let c = 0,
            g,
            h = new Array();
          const v = (0, L.sfN)(D.TS.LANGUAGE);
          do
            if (
              ((c += 1),
              (h = await ue.O3.LoadAdjacentPartnerEvents(
                g,
                a.clanSteamID,
                void 0,
                0,
                _,
                { rtime_oldestevent: n, only_summaries: !0 },
                r,
              )),
              (h == null ? void 0 : h.length) > 0)
            ) {
              (d += h.length), o(d), (g = h[h.length - 1].GID);
              const m = h
                .filter((x) => x.startTime <= i && x.BIsVisibleEvent())
                .map((x) => x.GID);
              m.length > 0 &&
                (await ne.Uq.LoadStatsForEvents(a.clanSteamID, m, r),
                (d += m.length),
                o(d),
                m.forEach((x) => {
                  const j = ne.Uq.GetStatsFor(a.clanSteamID, x),
                    S = ue.O3.GetClanEventModel(x),
                    y = S.GetStartTimeAndDateUnixSeconds(),
                    N = S.GetEndTimeAndDateUnixSeconds();
                  l.push({
                    appid: a.appid,
                    app_name: (t == null ? void 0 : t.GetName()) || "",
                    event_name: S.GetNameWithFallback(v),
                    event_type: S.GetEventTypeAsString(),
                    event_start_date: (0, s.TW)(y) + " @ " + (0, Ge.KC)(y),
                    event_end_date: (0, s.TW)(N) + " @ " + (0, Ge.KC)(N),
                    ...j.m_stats,
                    event_gid: "'" + x,
                  });
                }));
            }
          while (h.length == _ && c < 100);
          return (
            Ue.g.WriteCSVToFile(
              l,
              "event_stats_" +
                a.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                ".csv",
            ),
            !0
          );
        }
        var V = u(82734),
          Z = u(11243),
          Oe = u(179),
          qe = u(359);
        function tt(a) {
          const {
              summary: t,
              clanSteamID: n,
              bEventIsInModerationQueue: i,
              bIsAllowedInLibrary: o,
              bCompact: l,
            } = a,
            [r] = (0, Oe.QD)("expanded", !1),
            [d, _] = E.useState(!!r || l),
            c = J.ac.GetClanInfoByClanAccountID(n.GetAccountID());
          return (0, e.jsx)(qe.a, {
            summary: t,
            bCompact: l,
            bExpanded: d,
            bIsAllowedInLibrary: o,
            bEventIsInModerationQueue: i,
            header: l
              ? void 0
              : (0, e.jsxs)("div", {
                  className: Qe.StatsCtnTitle,
                  children: [
                    (0, e.jsxs)("div", {
                      className: Qe.StatTitle,
                      children: [
                        (0, s.we)("#EventDashBoard_SummaryStats_Title"),
                        (0, e.jsx)(Z.o, {
                          tooltip: (0, s.we)(
                            "#EventDashBoard_SummaryStats_Desc",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: Qe.StatsActionRow,
                      children: [
                        (0, e.jsx)(p.$n, {
                          onClick: (g) =>
                            (0, B.EP)(
                              g,
                              `${D.TS.PARTNER_BASE_URL}/doc/marketing/event_tools/stats`,
                            ),
                          children: (0, s.we)(
                            "#EventDashBoard_SummaryStats_AboutStats",
                          ),
                        }),
                        (0, e.jsx)(p.$n, {
                          onClick: (g) =>
                            (0, U.pg)(
                              (0, e.jsx)(ce, { clanInfo: c }),
                              (0, V.uX)(g),
                            ),
                          children: (0, s.we)(
                            "#EventDashBoard_SummaryStats_Export",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: Qe.StatsActionRow,
                      children: (0, e.jsx)(p.$n, {
                        onClick: () => _(!d),
                        children: (0, s.we)(
                          "#EventDashBoard_SummaryStats_Details",
                        ),
                      }),
                    }),
                  ],
                }),
          });
        }
        var He = u(96378),
          ge = u(85143),
          wo = u(95892),
          xa = u(71742),
          Be = u(34592),
          Qa = u(8323),
          b = u(36707),
          se = u(54963),
          Ya = u(36943),
          Do = u(65267),
          os = u(51648),
          _t = u(72429),
          ls = u(12932),
          aa = u(71684),
          gn = u(31467),
          Le = u.n(gn);
        const yo = (a) => {
            const { closeModal: t } = a,
              n = (0, Do.d)(D.UF.CLANACCOUNTID);
            return (0, e.jsx)(F.o0, {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              className: "auditContents",
              strDescription:
                "Here are the publishing audit history. Recorded starting from mid-June 2021",
              children:
                n == null
                  ? (0, e.jsx)(z.t, {
                      string: (0, s.we)("#Loading"),
                      position: "center",
                      size: "medium",
                    })
                  : n.length == 0
                    ? (0, e.jsx)("div", {
                        children: "No Publishing History available",
                      })
                    : n.map((i) =>
                        (0, e.jsx)(To, { record: i }, i.clan_event_gid),
                      ),
            });
          },
          To = (a) => {
            var t;
            const { record: n } = a,
              i = E.useMemo(() => k.b.InitFromClanID(D.UF.CLANACCOUNTID), []);
            return (0, e.jsxs)("div", {
              className: gn.AuditInfoItem,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    "Clan Event GID:",
                    (0, e.jsx)("a", {
                      href: `${D.TS.COMMUNITY_BASE_URL}gid/${i.ConvertTo64BitString()}/partnerevents/edit/${n.clan_event_gid}`,
                      target: "_blank",
                      children: n.clan_event_gid,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: ["Type: ", (0, aa.rG)(n.event_type)],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    "Publish Time: ",
                    (0, e.jsx)(_t.K4, {
                      dateAndTime: n.publish_time,
                      bSingleLine: !0,
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  children: (0, e.jsx)(os.B, {
                    accountID: n.publish_account_id,
                    locToken: "#EventDashbard_PublishingAccount",
                  }),
                }),
                (0, e.jsxs)("div", {
                  children: [
                    "tags: ",
                    (t = n.tags) == null ? void 0 : t.join(", "),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: gn.AuditItemStatsCtn,
                  children: (0, e.jsx)(ls.qx, {
                    title: "Show Event Stats",
                    bStartMinimized: !0,
                    children: (0, e.jsx)(Io, { clanSteamID: i, record: n }),
                  }),
                }),
                (0, e.jsx)("hr", {}),
              ],
            });
          };
        function Io(a) {
          const { clanSteamID: t, record: n } = a,
            i = (0, ne.Cl)(t, n.clan_event_gid);
          return (0, e.jsxs)("div", {
            children: [
              i == null &&
                (0, e.jsx)(z.t, {
                  string: "loading",
                  position: "center",
                  size: "medium",
                }),
              i == null &&
                (0, e.jsx)("div", { children: "Failed to load events stats" }),
              !!i &&
                (0, e.jsx)(tt, { summary: i, clanSteamID: t, bCompact: !0 }),
            ],
          });
        }
        var rt = u(25817),
          $ = u(14947),
          jt = u(26145),
          ft = u(7638),
          rs = u(26251),
          je = u(71421),
          Ao = u(20398),
          C = u(55884),
          Go = Object.defineProperty,
          Lo = Object.getOwnPropertyDescriptor,
          Sn = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Lo(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && Go(t, n, o), o;
          };
        const Bo = "title",
          No = "subtitle",
          Mo = "summary",
          Oo = "body",
          ds = "email_headline_",
          cs = "email_body_",
          Po = "sale_section_label_",
          us = "sale_section_label_id_",
          hs = "sale_section_subtitle_id_",
          ms = "sale_section_text_id_",
          _s = "email_subject",
          ps = "sale_tab_name_",
          vs = "sale_facet_name_",
          gs = "sale_facetvalue_name_",
          Ss = "sale_facetvalue_subtitle_",
          Es = "sale_reservation_bbcode_",
          fs = "sale_reservation_outofstock_",
          xs = "sale_reservation_delivery_",
          En = "sale_reservation_product_",
          Ro = "sale_reservation_variation_",
          bs = "sale_reservatin_callout_",
          js = "sale_white_supplies_last_bbcode_",
          Cs = "sale_section_desc_",
          ws = "sale_section_title_desc_",
          Ds = "broadcast_custom_title",
          ys = "question_",
          Ts = "answer_",
          Is = "badgename_",
          As = "badgeinitial_",
          Gs = "badgeprogress_",
          Ls = "badgemax_",
          Bs = "quest_close_",
          Ns = "quest_open_",
          Ms = "discoqueue_desc_",
          Os = "socialshare_header_",
          Ps = "socialshare_title_",
          Rs = "socialshare_desc_",
          ks = "socialshare_image_",
          Fs = "socialshare_imagealttext_",
          Us = "rewardshelf_itemdef_",
          Hs = "claimitem_button_",
          fn = "disclaimer_name_",
          zs = "medialayout_item_",
          Vs = "mediacontent_title_",
          Ws = "mediacontent_sutitle_",
          Qs = "mediacontent_desc_",
          na = "meetsteam_",
          Ys = na + "title_",
          Ja = na + "desc_",
          ko = na + "faq_",
          Fo = na + "ia_",
          xn = na + "break_",
          sa = "techspecblock_",
          Js = "_name_",
          Ks = "_desc_",
          bn = "submenu_",
          qs = "mediacontent_alt_text_",
          Zs = "mediacontent_title_alt_text_",
          jn = "userpoll_",
          Cn = "userpoll_option_",
          wn = "tabs_jumplist_";
        function Xs(a, t, n, i) {
          var o, l, r, d, _;
          let c = new Ao.G();
          if (t) {
            let h = a.GetEventModel();
            for (let v = L.Bhc; v < L.bP9; ++v)
              (a.BHasLanguageTitle(v) || v == L.Bhc) &&
                c.SetLocalization("title", v, a.GetName(v)),
                (h.BHasSubTitle(v) || v == L.Bhc) &&
                  c.SetLocalization("subtitle", v, a.GetSubTitle(v)),
                (a.BHasLanguageDescription(v) || v == L.Bhc) &&
                  c.SetLocalization("body", v, a.GetDescription(v)),
                (h.BHasSummary(v) || v == L.Bhc) &&
                  c.SetLocalization("summary", v, a.GetSummary(v)),
                a.GetEventModel().jsondata.meet_steam_groups &&
                  a.GetEventModel().jsondata.meet_steam_groups.forEach((m) => {
                    m.localized_session_title &&
                      s.NT.Get(m.localized_session_title, v) &&
                      c.SetLocalization(
                        Ys + m.group_id,
                        v,
                        s.NT.Get(m.localized_session_title, v),
                      ),
                      m.localized_session_description &&
                        s.NT.Get(m.localized_session_description, v) &&
                        c.SetLocalization(
                          Ja + m.group_id,
                          v,
                          s.NT.Get(m.localized_session_description, v),
                        ),
                      m.localized_intended_audience &&
                        s.NT.Get(m.localized_intended_audience, v) &&
                        c.SetLocalization(
                          Ja + m.group_id,
                          v,
                          s.NT.Get(m.localized_intended_audience, v),
                        ),
                      m.localized_sesssion_faq &&
                        s.NT.Get(m.localized_sesssion_faq, v) &&
                        c.SetLocalization(
                          Ja + m.group_id,
                          v,
                          s.NT.Get(m.localized_sesssion_faq, v),
                        );
                  }),
                a.GetEventModel().jsondata.meet_steam_schedules &&
                  a
                    .GetEventModel()
                    .jsondata.meet_steam_schedules.forEach((m) => {
                      var x;
                      (x = m == null ? void 0 : m.session_breaks) == null ||
                        x.forEach((j) => {
                          j.localized_break_description &&
                            s.NT.Get(j.localized_break_description, v) &&
                            c.SetLocalization(
                              xn + m.schedule_id + "_" + j.break_id,
                              v,
                              s.NT.Get(j.localized_break_description, v),
                            );
                        });
                    });
          }
          if (n && a.BHasEmailEnabled()) {
            const h = a.GetEmailSettings();
            if (D.UF.IS_VALVE_GROUP) {
              let v = new jt.WQ(a.GetEmailSettings());
              for (let m = L.Bhc; m < L.bP9; ++m)
                v.BHasLocalizedSubject(m) &&
                  c.SetLocalization(_s, m, v.GetLocalizedSubject(m));
            }
            h.sections.forEach((v, m) => {
              let x = new jt.JW(v);
              for (let j = L.Bhc; j < L.bP9; ++j)
                x.BHasHeadlineInLanguage(j) &&
                  c.SetLocalization(ds + m, j, x.GetHeadline(j)),
                  x.BHasBodyInLanguage(j) &&
                    c.SetLocalization(cs + m, j, x.GetBody(j));
            });
          }
          const g = a.GetEventModel().jsondata;
          if (
            g != null &&
            g.bBroadcastEnabled &&
            ((o = g == null ? void 0 : g.localized_broadcast_title) == null
              ? void 0
              : o.length) > 0
          ) {
            for (let h = L.Bhc; h < L.bP9; ++h)
              if (s.NT.Get(g.localized_broadcast_title, h)) {
                const v = g.localized_broadcast_title[h];
                c.SetLocalization(Ds, h, v);
              }
          }
          if (
            (t &&
              ((l = g.user_polls) == null ? void 0 : l.length) > 0 &&
              g.user_polls.forEach((h) => {
                var v;
                for (let m = L.Bhc; m < L.bP9; ++m)
                  h.localized_poll_description &&
                    s.NT.Get(h.localized_poll_description, m) &&
                    c.SetLocalization(
                      jn + h.poll_id,
                      m,
                      h.localized_poll_description[m],
                    ),
                    (v = h == null ? void 0 : h.options) == null ||
                      v.forEach((x) => {
                        x.localized_option &&
                          s.NT.Get(x.localized_option, m) &&
                          c.SetLocalization(
                            Cn + x.option_id,
                            m,
                            x.localized_option[m],
                          );
                      });
              }),
            i && a.BHasSaleEnabled())
          ) {
            if (
              (r = g == null ? void 0 : g.sale_presenters) != null &&
              r.length
            )
              for (let h = L.Bhc; h < L.bP9; ++h)
                g.sale_presenters.forEach((v) => {
                  if (s.NT.Get(v.localized_presenter_name, h)) {
                    const m = v.localized_presenter_name[h];
                    c.SetLocalization(fn + v.unique_id, h, m);
                  }
                });
            ((_ = (d = g.sale_sub_menu) == null ? void 0 : d.menu_items) == null
              ? void 0
              : _.length) > 0 &&
              g.sale_sub_menu.menu_items
                .filter((h) => {
                  var v;
                  return (
                    ((v = h.localized_sub_menu_name) == null
                      ? void 0
                      : v.length) > 0
                  );
                })
                .map((h) => {
                  for (let v = L.Bhc; v < L.bP9; ++v)
                    h.localized_sub_menu_name &&
                      s.NT.Get(h.localized_sub_menu_name, v) &&
                      c.SetLocalization(
                        bn + h.unique_id,
                        v,
                        h.localized_sub_menu_name[v],
                      );
                }),
              a
                .GetSaleSections()
                .filter((h) => !h.disable_localization)
                .forEach((h) => {
                  var v,
                    m,
                    x,
                    j,
                    S,
                    y,
                    N,
                    A,
                    te,
                    oe,
                    De,
                    Se,
                    $e,
                    mt,
                    et,
                    gt,
                    Je,
                    Pt,
                    Dt,
                    nt,
                    zt;
                  const St = a.GetSaleSectionIndexByID(h.unique_id, !1);
                  for (let T = L.Bhc; T < L.bP9; ++T) {
                    if (
                      (a.BHasSaleSectionLabelLocalization(T, St) &&
                        c.SetLocalization(
                          us + h.unique_id,
                          T,
                          h.localized_label[T],
                        ),
                      a.BHasSaleSectionSubtitleLocalization(T, St) &&
                        c.SetLocalization(
                          hs + h.unique_id,
                          T,
                          h.localized_subtitle[T],
                        ),
                      a.BHasSaleSectionTextLocalizationForLang(T, St) &&
                        c.SetLocalization(
                          ms + h.unique_id,
                          T,
                          h.text_section_contents[T],
                        ),
                      a.BHasSaleSectionDescriptionBBCode(T, St) &&
                        c.SetLocalization(
                          Cs + h.unique_id,
                          T,
                          h.localized_description[T],
                        ),
                      a.BHasSaleSectionInnerTitle(T, St) &&
                        c.SetLocalization(
                          ws + h.unique_id,
                          T,
                          h.localized_title[T],
                        ),
                      h.section_type === "tabs" && h.tabs)
                    )
                      for (let G of h.tabs)
                        a.BHasSaleSectionTabName(T, G) &&
                          c.SetLocalization(
                            ps + h.unique_id + "_" + G.unique_id,
                            T,
                            G.localized_label[T],
                          ),
                          G.tab_jump_list &&
                            G.tab_jump_list.menu_items &&
                            G.tab_jump_list.menu_items.length > 0 &&
                            G.tab_jump_list.menu_items
                              .filter((ee) => {
                                var be;
                                return (
                                  ((be = ee.localized_sub_menu_name) == null
                                    ? void 0
                                    : be.length) > 0
                                );
                              })
                              .map((ee) => {
                                for (let be = L.Bhc; be < L.bP9; ++be)
                                  ee.localized_sub_menu_name &&
                                    s.NT.Get(ee.localized_sub_menu_name, be) &&
                                    c.SetLocalization(
                                      wn + G.unique_id + "_" + ee.unique_id,
                                      be,
                                      ee.localized_sub_menu_name[be],
                                    );
                              });
                    if (
                      (h.enable_faceted_browsing &&
                        (h.facets.forEach((G) => {
                          a.BHasSaleSectionFacetName(T, G) &&
                            c.SetLocalization(
                              vs + h.unique_id + "_" + G.unique_id,
                              T,
                              G.name[T],
                            );
                        }),
                        h.facets.forEach((G) => {
                          G.facetValues.forEach((ee) => {
                            a.BHasSaleSectionFacetValueName(T, ee) &&
                              c.SetLocalization(
                                gs +
                                  h.unique_id +
                                  "_" +
                                  G.unique_id +
                                  "_" +
                                  ee.unique_id,
                                T,
                                ee.name[T],
                              ),
                              a.BHasSaleSectionFacetValueSubtitle(T, ee) &&
                                c.SetLocalization(
                                  Ss +
                                    h.unique_id +
                                    "_" +
                                    G.unique_id +
                                    "_" +
                                    ee.unique_id,
                                  T,
                                  ee.subtitle[T],
                                );
                          });
                        })),
                      h.section_type == "vo_internal" &&
                        ((v = h.internal_section_data) == null
                          ? void 0
                          : v.internal_type) == "reservation_widget" &&
                        (((m = h.internal_section_data.reservation_options) ==
                        null
                          ? void 0
                          : m.length) > 0 ||
                          h.internal_section_data.reservation_layout) &&
                        ((x = h.internal_section_data.reservation_options) ==
                          null ||
                          x.forEach((G) => {
                            G.localized_reservation_desc &&
                              s.NT.Get(G.localized_reservation_desc, T) &&
                              c.SetLocalization(
                                Es + h.unique_id + "_" + G.unique_id,
                                T,
                                G.localized_reservation_desc[T],
                              ),
                              G.callout &&
                                G.callout.localized_callout &&
                                s.NT.Get(G.callout.localized_callout, T) &&
                                c.SetLocalization(
                                  bs + h.unique_id + "_" + G.unique_id,
                                  T,
                                  G.callout.localized_callout[T],
                                ),
                              G.localized_out_of_stock_override &&
                                s.NT.Get(
                                  G.localized_out_of_stock_override,
                                  T,
                                ) &&
                                c.SetLocalization(
                                  fs + h.unique_id + "_" + G.unique_id,
                                  T,
                                  G.localized_out_of_stock_override[T],
                                ),
                              G.localized_delivery_override_desc &&
                                s.NT.Get(
                                  G.localized_delivery_override_desc,
                                  T,
                                ) &&
                                c.SetLocalization(
                                  xs + h.unique_id + "_" + G.unique_id,
                                  T,
                                  G.localized_delivery_override_desc[T],
                                );
                          }),
                        (S =
                          (j = h.internal_section_data.reservation_layout) ==
                          null
                            ? void 0
                            : j.product_configs) == null ||
                          S.forEach((G) => {
                            var ee;
                            G.localized_product_config_title &&
                              s.NT.Get(G.localized_product_config_title, T) &&
                              c.SetLocalization(
                                En + h.unique_id + "_" + G.unique_id,
                                T,
                                G.localized_product_config_title[T],
                              ),
                              (ee = G.variations) == null ||
                                ee.forEach((be) => {
                                  be.localized_variation_name &&
                                    s.NT.Get(be.localized_variation_name, T) &&
                                    c.SetLocalization(
                                      Ro +
                                        h.unique_id +
                                        "_" +
                                        G.unique_id +
                                        "_" +
                                        be.unique_id,
                                      T,
                                      be.localized_variation_name[T],
                                    );
                                });
                          })),
                      h.section_type == "vo_internal" &&
                        ((y = h.internal_section_data) == null
                          ? void 0
                          : y.internal_type) == "while_supplies_last" &&
                        ((N =
                          h.internal_section_data.while_supplies_last_option) ==
                        null
                          ? void 0
                          : N.length) > 0 &&
                        h.internal_section_data.while_supplies_last_option.forEach(
                          (G) => {
                            G.localized_supply_desc &&
                              s.NT.Get(G.localized_supply_desc, T) &&
                              c.SetLocalization(
                                js + h.unique_id + "_" + G.unique_id,
                                T,
                                G.localized_supply_desc[T],
                              );
                          },
                        ),
                      (h.section_type == "quiz" ||
                        h.section_type == "template_faq") &&
                        ((te = (A = h.quiz) == null ? void 0 : A.questions) ==
                        null
                          ? void 0
                          : te.length) > 0 &&
                        ((oe = h.quiz) == null ||
                          oe.questions.forEach((G) => {
                            G.localized_question &&
                              s.NT.Get(G.localized_question, T) &&
                              c.SetLocalization(
                                ys + h.unique_id + "_" + G.unique_id,
                                T,
                                G.localized_question[T],
                              ),
                              G != null &&
                                G.answers &&
                                G.answers.forEach((ee) => {
                                  ee.localized_answer &&
                                    s.NT.Get(ee.localized_answer, T) &&
                                    c.SetLocalization(
                                      Ts + h.unique_id + "_" + ee.unique_id,
                                      T,
                                      ee.localized_answer[T],
                                    );
                                });
                          })),
                      h.section_type == "template_techspec" &&
                        ((Se =
                          (De = h.tech_specs) == null
                            ? void 0
                            : De.tech_spec_block_list) == null
                          ? void 0
                          : Se.length) > 0 &&
                        (($e = h.tech_specs) == null ||
                          $e.tech_spec_block_list.forEach((G) => {
                            G.localized_block_title &&
                              s.NT.Get(G.localized_block_title, T) &&
                              c.SetLocalization(
                                sa + h.unique_id + "_" + G.unique_id,
                                T,
                                G.localized_block_title[T],
                              ),
                              G != null &&
                                G.spec_list &&
                                G.spec_list.forEach((ee) => {
                                  if (
                                    ee.localized_spec_name &&
                                    s.NT.Get(ee.localized_spec_name, T)
                                  ) {
                                    const be =
                                      sa + h.unique_id + Js + ee.unique_id;
                                    c.SetLocalization(
                                      be,
                                      T,
                                      ee.localized_spec_name[T],
                                    );
                                  }
                                  if (
                                    ee.localized_spec_description &&
                                    s.NT.Get(ee.localized_spec_description, T)
                                  ) {
                                    const be =
                                      sa + h.unique_id + Ks + ee.unique_id;
                                    c.SetLocalization(
                                      be,
                                      T,
                                      ee.localized_spec_description[T].replace(
                                        /\n/g,
                                        "<br />",
                                      ),
                                    );
                                  }
                                });
                          })),
                      h.section_type == "badge_progress" && h.badge_progress)
                    ) {
                      const G = h.badge_progress;
                      G.localized_name &&
                        s.NT.Get(G.localized_name, T) &&
                        c.SetLocalization(
                          Is + h.unique_id,
                          T,
                          G.localized_name[T],
                        ),
                        G.localized_initial_description &&
                          s.NT.Get(G.localized_initial_description, T) &&
                          c.SetLocalization(
                            As + h.unique_id,
                            T,
                            G.localized_initial_description[T],
                          ),
                        G.localized_progress_description &&
                          s.NT.Get(G.localized_progress_description, T) &&
                          c.SetLocalization(
                            Gs + h.unique_id,
                            T,
                            G.localized_progress_description[T],
                          ),
                        G.localized_maxtier_description &&
                          s.NT.Get(G.localized_maxtier_description, T) &&
                          c.SetLocalization(
                            Ls + h.unique_id,
                            T,
                            G.localized_maxtier_description[T],
                          );
                    }
                    h.section_type == "quest" &&
                      ((et = (mt = h.quest) == null ? void 0 : mt.door_info) ==
                      null
                        ? void 0
                        : et.length) > 0 &&
                      h.quest.door_info.forEach((G) => {
                        G.localized_open_door_description &&
                          s.NT.Get(G.localized_open_door_description, T) &&
                          c.SetLocalization(
                            Bs + h.unique_id + "_" + G.unique_id,
                            T,
                            G.localized_open_door_description[T],
                          ),
                          G.localized_closed_door_description &&
                            s.NT.Get(G.localized_closed_door_description, T) &&
                            c.SetLocalization(
                              Ns + h.unique_id + "_" + G.unique_id,
                              T,
                              G.localized_closed_door_description[T],
                            );
                      }),
                      h.section_type == "rewards" &&
                        ((Je =
                          (gt = h.rewards) == null
                            ? void 0
                            : gt.reward_items) == null
                          ? void 0
                          : Je.length) > 0 &&
                        h.rewards.reward_items.forEach((G) => {
                          G.localized_reward_description &&
                            s.NT.Get(G.localized_reward_description, T) &&
                            c.SetLocalization(
                              Us +
                                h.unique_id +
                                "_" +
                                G.virtual_item_reward_def_id,
                              T,
                              G.localized_reward_description[T],
                            );
                        }),
                      h.section_type == "claim_item" &&
                        ((Dt =
                          (Pt = h.claim_item_section_data) == null
                            ? void 0
                            : Pt.localized_claim_button) == null
                          ? void 0
                          : Dt.length) > 0 &&
                        h.claim_item_section_data.localized_claim_button &&
                        s.NT.Get(
                          h.claim_item_section_data.localized_claim_button,
                          T,
                        ) &&
                        c.SetLocalization(
                          Hs + h.unique_id,
                          T,
                          h.claim_item_section_data.localized_claim_button[T],
                        ),
                      h.section_type == "discoveryqueue" &&
                        h.discovery_queue_localized_desc &&
                        s.NT.Get(h.discovery_queue_localized_desc, T) &&
                        c.SetLocalization(
                          Ms + h.unique_id,
                          T,
                          h.discovery_queue_localized_desc[T],
                        ),
                      h.section_type == "social_share" &&
                        h.social_share.content_options.forEach((G) => {
                          const ee = G.localized_option_fields;
                          ee.localized_header &&
                            s.NT.Get(ee.localized_header, T) &&
                            c.SetLocalization(
                              Os + h.unique_id + "_" + G.unique_id,
                              T,
                              ee.localized_header[T],
                            ),
                            ee.title &&
                              s.NT.Get(ee.title, T) &&
                              c.SetLocalization(
                                Ps + h.unique_id + "_" + G.unique_id,
                                T,
                                ee.title[T],
                              ),
                            ee.description &&
                              s.NT.Get(ee.description, T) &&
                              c.SetLocalization(
                                Rs + h.unique_id + "_" + G.unique_id,
                                T,
                                ee.description[T],
                              ),
                            ee.image &&
                              s.NT.Get(ee.image, T) &&
                              c.SetLocalization(
                                ks + h.unique_id + "_" + G.unique_id,
                                T,
                                ee.image[T],
                              ),
                            ee.twitter_alt_text &&
                              s.NT.Get(ee.twitter_alt_text, T) &&
                              c.SetLocalization(
                                Fs + h.unique_id + "_" + G.unique_id,
                                T,
                                ee.twitter_alt_text[T],
                              );
                        }),
                      h.section_type == "media_layout" &&
                        h.media_layout.media_content.forEach((G, ee) => {
                          const be = G.localized_media_desc;
                          be &&
                            s.NT.Get(be, T) &&
                            c.SetLocalization(
                              zs + h.unique_id + "_" + ee,
                              T,
                              be[T],
                            );
                        }),
                      h.section_type == "template_media_content" &&
                        ((zt =
                          (nt = h.media_container) == null
                            ? void 0
                            : nt.media_rows) == null ||
                          zt.forEach((G, ee) => {
                            var be;
                            (be = G == null ? void 0 : G.media_columns) ==
                              null ||
                              be.forEach((Et) => {
                                ia(c, T, h.unique_id + "_" + Et.unique_id, Et),
                                  Et.mobile_content_varient &&
                                    ia(
                                      c,
                                      T,
                                      h.unique_id +
                                        "_" +
                                        Et.unique_id +
                                        "_mobile",
                                      Et.mobile_content_varient,
                                    ),
                                  Et.tablet_content_varient &&
                                    ia(
                                      c,
                                      T,
                                      h.unique_id +
                                        "_" +
                                        Et.unique_id +
                                        "_tablet",
                                      Et.tablet_content_varient,
                                    );
                              });
                          })),
                      h.section_type == "template_media_overlay" &&
                        h.media_overlay &&
                        (ia(c, T, h.unique_id + "_overlay", h.media_overlay),
                        h.media_overlay_mobile_content_varient &&
                          ia(
                            c,
                            T,
                            h.unique_id + "_overlay_mobile",
                            h.media_overlay_mobile_content_varient,
                          ),
                        h.media_overlay_tablet_content_varient &&
                          ia(
                            c,
                            T,
                            h.unique_id + "_overlay_tablet",
                            h.media_overlay_tablet_content_varient,
                          ));
                  }
                });
          }
          return c;
        }
        function ia(a, t, n, i) {
          var o;
          let l = i.localized_media_title;
          l && s.NT.Get(l, t) && a.SetLocalization(Vs + n, t, l[t]),
            (l = i.localized_media_subtitle),
            l && s.NT.Get(l, t) && a.SetLocalization(Ws + n, t, l[t]),
            (l = i.localized_media_description),
            l && s.NT.Get(l, t) && a.SetLocalization(Qs + n, t, l[t]),
            (l = i.localized_alt_text),
            l && s.NT.Get(l, t) && a.SetLocalization(qs + n, t, l[t]),
            (l = (o = i.title_media) == null ? void 0 : o.localized_alt_text),
            l && s.NT.Get(l, t) && a.SetLocalization(Zs + n, t, l[t]);
        }
        function $s(a, t, n) {
          let i = new Array();
          const o = t.GetSortedTokenList();
          return (
            (0, $.h5)(() => {
              n.forEach((l) => {
                let r = !1;
                o.forEach((d) => {
                  var _, c, g, h, v;
                  const m = t.GetLocalization(d, l) || "";
                  if (
                    (d === Bo &&
                      (m || a.BHasLanguageTitle(l)) &&
                      a.SetName(l, m) &&
                      (r = !0),
                    d === Oo &&
                      (m || a.BHasLanguageDescription(l)) &&
                      a.SetDescription(l, m) &&
                      (r = !0),
                    d === No &&
                      (m || a.BHasLanguageSubTitle(l)) &&
                      a.SetSubTitle(l, m) &&
                      (r = !0),
                    d === Mo &&
                      (m || a.BHasLanguageSummary(l)) &&
                      a.SetSummary(l, m) &&
                      (r = !0),
                    d === Ds)
                  ) {
                    const x = a.GetEventModel().jsondata;
                    (m ||
                      (x.localized_broadcast_title &&
                        s.NT.Get(x.localized_broadcast_title, l))) &&
                      s.NT.Get(x.localized_broadcast_title, l) !== m &&
                      ((x.localized_broadcast_title = s.NT.Set(
                        x.localized_broadcast_title || [],
                        l,
                        m,
                      )),
                      a.SetDirty(C.IQ.jsondata_sales),
                      (r = !0));
                  }
                  if (d.startsWith(jn)) {
                    const x = a.GetEventModel().jsondata;
                    (_ = x == null ? void 0 : x.user_polls) == null ||
                      _.forEach((j) => {
                        var S;
                        d.startsWith(Cn)
                          ? (S = j.options) == null ||
                            S.forEach((y) => {
                              d == Cn + y.option_id &&
                                (m ||
                                  (y.localized_option &&
                                    s.NT.Get(y.localized_option, l))) &&
                                s.NT.Get(y.localized_option, l) !== m &&
                                ((y.localized_option = s.NT.Set(
                                  y.localized_option || [],
                                  l,
                                  m,
                                )),
                                a.SetDirty(C.IQ.description),
                                (r = !0));
                            })
                          : d == jn + j.poll_id &&
                            (m ||
                              (j.localized_poll_description &&
                                s.NT.Get(j.localized_poll_description, l))) &&
                            s.NT.Get(j.localized_poll_description, l) !== m &&
                            ((j.localized_poll_description = s.NT.Set(
                              j.localized_poll_description || [],
                              l,
                              m,
                            )),
                            a.SetDirty(C.IQ.description),
                            (r = !0));
                      });
                  }
                  if (
                    d.startsWith(xn) &&
                    a.GetEventModel().jsondata.meet_steam_schedules
                  )
                    for (
                      let x = 0;
                      x <
                      a.GetEventModel().jsondata.meet_steam_schedules.length;
                      ++x
                    ) {
                      const j =
                        a.GetEventModel().jsondata.meet_steam_schedules[x];
                      for (
                        let S = 0;
                        S <
                        ((c = j == null ? void 0 : j.session_breaks) == null
                          ? void 0
                          : c.length);
                        ++S
                      ) {
                        const y = j.session_breaks[S];
                        if (d == xn + j.schedule_id + "_" + y.break_id) {
                          (m || s.NT.Get(y.localized_break_description, l)) &&
                            s.NT.Get(y.localized_break_description, l) !== m &&
                            ((y.localized_break_description = s.NT.Set(
                              y.localized_break_description || [],
                              l,
                              m,
                            )),
                            a.SetDirty(C.IQ.description),
                            (r = !0));
                          break;
                        }
                      }
                    }
                  if (
                    d.startsWith(na) &&
                    a.GetEventModel().jsondata.meet_steam_groups
                  )
                    for (
                      let x = 0;
                      x < a.GetEventModel().jsondata.meet_steam_groups.length;
                      ++x
                    ) {
                      const j = a.GetEventModel().jsondata.meet_steam_groups[x];
                      if (d == Ys + j.group_id) {
                        (m || s.NT.Get(j.localized_session_title, l)) &&
                          s.NT.Get(j.localized_session_title, l) !== m &&
                          ((j.localized_session_title = s.NT.Set(
                            j.localized_session_title || [],
                            l,
                            m,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (d == Ja + j.group_id) {
                        (m || s.NT.Get(j.localized_session_description, l)) &&
                          s.NT.Get(j.localized_session_description, l) !== m &&
                          ((j.localized_session_description = s.NT.Set(
                            j.localized_session_description || [],
                            l,
                            m,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (d == ko + j.group_id) {
                        (m || s.NT.Get(j.localized_sesssion_faq, l)) &&
                          s.NT.Get(j.localized_sesssion_faq, l) !== m &&
                          ((j.localized_sesssion_faq = s.NT.Set(
                            j.localized_sesssion_faq || [],
                            l,
                            m,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                      if (d == Fo + j.group_id) {
                        (m || s.NT.Get(j.localized_intended_audience, l)) &&
                          s.NT.Get(j.localized_intended_audience, l) !== m &&
                          ((j.localized_intended_audience = s.NT.Set(
                            j.localized_intended_audience || [],
                            l,
                            m,
                          )),
                          a.SetDirty(C.IQ.description),
                          (r = !0));
                        break;
                      }
                    }
                  if (a.BHasEmailEnabled()) {
                    let x = a.GetEmailSettings();
                    if (D.UF.IS_VALVE_GROUP && d === _s) {
                      let j = new rt.pC(a);
                      (m || j.BHasLocalizedSubject(l)) &&
                        j.SetLocalizedSubject(l, m) &&
                        (r = !0);
                    }
                    x.sections.forEach((j, S) => {
                      let y = new rt.e$(j, a);
                      y.BHasHeadline() &&
                        d === ds + S &&
                        (m || y.BHasHeadlineInLanguage(l)) &&
                        y.SetHeadline(m, l) &&
                        (r = !0),
                        y.BHasBody() &&
                          d === cs + S &&
                          (m || y.BHasBodyInLanguage(l)) &&
                          y.SetBody(m, l) &&
                          (r = !0);
                    });
                  }
                  if (a.BHasSaleEnabled()) {
                    const x = a.GetEventModel().jsondata;
                    (g = x == null ? void 0 : x.sale_presenters) != null &&
                      g.length &&
                      x.sale_presenters.forEach((S) => {
                        if (d === fn + S.unique_id) {
                          (m || s.NT.Get(S.localized_presenter_name, l)) &&
                            s.NT.Get(S.localized_presenter_name, l) != m &&
                            ((S.localized_presenter_name = s.NT.Set(
                              S.localized_presenter_name || [],
                              l,
                              m,
                            )),
                            a.SetDirty(C.IQ.jsondata_sales),
                            (r = !0));
                          const y = S.localized_presenter_name[l];
                          t.SetLocalization(fn + S.unique_id, l, y);
                        }
                      }),
                      ((v =
                        (h = x.sale_sub_menu) == null
                          ? void 0
                          : h.menu_items) == null
                        ? void 0
                        : v.length) > 0 &&
                        x.sale_sub_menu.menu_items
                          .filter((S) => {
                            var y;
                            return (
                              ((y = S.localized_sub_menu_name) == null
                                ? void 0
                                : y.length) > 0
                            );
                          })
                          .map((S) => {
                            if (d === bn + S.unique_id) {
                              (m || s.NT.Get(S.localized_sub_menu_name, l)) &&
                                s.NT.Get(S.localized_sub_menu_name, l) != m &&
                                ((S.localized_sub_menu_name = s.NT.Set(
                                  S.localized_sub_menu_name || [],
                                  l,
                                  m,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0));
                              const y = S.localized_sub_menu_name[l];
                              t.SetLocalization(bn + S.unique_id, l, y);
                            }
                          }),
                      a
                        .GetSaleSections()
                        .filter((S) => !S.disable_localization)
                        .forEach((S) => {
                          var y,
                            N,
                            A,
                            te,
                            oe,
                            De,
                            Se,
                            $e,
                            mt,
                            et,
                            gt,
                            Je,
                            Pt,
                            Dt,
                            nt,
                            zt,
                            St,
                            T,
                            G,
                            ee,
                            be,
                            Et,
                            Me,
                            st;
                          const We = a.GetSaleSectionIndexByID(S.unique_id, !1);
                          if (
                            ((d === Po + We || d === us + S.unique_id) &&
                              (m ||
                                a.BHasSaleSectionLabelLocalization(l, We)) &&
                              a.SetSaleSectionLabelLocalization(l, We, m) &&
                              (r = !0),
                            d === hs + S.unique_id &&
                              (m ||
                                a.BHasSaleSectionSubtitleLocalization(l, We)) &&
                              a.SetSaleSectionSubtitleLocalization(l, We, m) &&
                              (r = !0),
                            d === Cs + S.unique_id &&
                              (m ||
                                a.BHasSaleSectionDescriptionBBCode(l, We)) &&
                              a.SetSaleSectionDescriptionBBCode(l, We, m) &&
                              (r = !0),
                            d === ws + S.unique_id &&
                              (m || a.BHasSaleSectionInnerTitle(l, We)) &&
                              a.SetSaleSectionInnerTitle(l, We, m) &&
                              (r = !0),
                            S.section_type === "tabs" && S.tabs)
                          )
                            for (const w of S.tabs)
                              d === ps + S.unique_id + "_" + w.unique_id &&
                                (m || a.BHasSaleSectionTabName(l, w)) &&
                                a.SetSaleSectionTabName(l, w, m) &&
                                (r = !0),
                                ((N =
                                  (y = w.tab_jump_list) == null
                                    ? void 0
                                    : y.menu_items) == null
                                  ? void 0
                                  : N.length) > 0 &&
                                  x.sale_sub_menu.menu_items
                                    .filter((P) => {
                                      var q;
                                      return (
                                        ((q = P.localized_sub_menu_name) == null
                                          ? void 0
                                          : q.length) > 0
                                      );
                                    })
                                    .map((P) => {
                                      if (
                                        d ===
                                        wn + w.unique_id + "_" + P.unique_id
                                      ) {
                                        (m ||
                                          s.NT.Get(
                                            P.localized_sub_menu_name,
                                            l,
                                          )) &&
                                          s.NT.Get(
                                            P.localized_sub_menu_name,
                                            l,
                                          ) != m &&
                                          ((P.localized_sub_menu_name =
                                            s.NT.Set(
                                              P.localized_sub_menu_name || [],
                                              l,
                                              m,
                                            )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                        const q = P.localized_sub_menu_name[l];
                                        t.SetLocalization(
                                          wn + w.unique_id + "_" + P.unique_id,
                                          l,
                                          q,
                                        );
                                      }
                                    });
                          if (
                            (a.BHasSaleSectionTextLocalization(We) &&
                              d === ms + S.unique_id &&
                              (m ||
                                a.BHasSaleSectionTextLocalizationForLang(
                                  l,
                                  We,
                                )) &&
                              a.SetSaleSectionTextLocalization(l, We, m) &&
                              (r = !0),
                            S.enable_faceted_browsing &&
                              S.facets.forEach((w) => {
                                d === vs + S.unique_id + "_" + w.unique_id &&
                                  (m || a.BHasSaleSectionFacetName(l, w)) &&
                                  a.SetSaleSectionFacetName(l, w, m) &&
                                  (r = !0),
                                  w.facetValues.forEach((P) => {
                                    d ===
                                      gs +
                                        S.unique_id +
                                        "_" +
                                        w.unique_id +
                                        "_" +
                                        P.unique_id &&
                                      (m ||
                                        a.BHasSaleSectionFacetValueName(
                                          l,
                                          P,
                                        )) &&
                                      a.SetSaleSectionFacetValueName(l, P, m) &&
                                      (r = !0),
                                      d ===
                                        Ss +
                                          S.unique_id +
                                          "_" +
                                          w.unique_id +
                                          "_" +
                                          P.unique_id &&
                                        (m ||
                                          a.BHasSaleSectionFacetValueSubtitle(
                                            l,
                                            P,
                                          )) &&
                                        a.SetSaleSectionFacetValueSubtitle(
                                          l,
                                          P,
                                          m,
                                        ) &&
                                        (r = !0);
                                  });
                              }),
                            S.section_type == "vo_internal" &&
                              ((A = S.internal_section_data) == null
                                ? void 0
                                : A.internal_type) == "reservation_widget" &&
                              (((te =
                                S.internal_section_data.reservation_options) ==
                              null
                                ? void 0
                                : te.length) > 0 ||
                                S.internal_section_data.reservation_layout) &&
                              ((oe =
                                S.internal_section_data.reservation_options) ==
                                null ||
                                oe.forEach((w) => {
                                  d === Es + S.unique_id + "_" + w.unique_id &&
                                    (m ||
                                      (w.localized_reservation_desc &&
                                        s.NT.Get(
                                          w.localized_reservation_desc,
                                          l,
                                        ))) &&
                                    s.NT.Get(
                                      w.localized_reservation_desc,
                                      l,
                                    ) !== m &&
                                    ((w.localized_reservation_desc = s.NT.Set(
                                      w.localized_reservation_desc || [],
                                      l,
                                      m,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0)),
                                    d ===
                                      bs + S.unique_id + "_" + w.unique_id &&
                                      (m && !w.callout && (w.callout = {}),
                                      (m ||
                                        (w.callout.localized_callout &&
                                          s.NT.Get(
                                            w.callout.localized_callout,
                                            l,
                                          ))) &&
                                        s.NT.Get(
                                          w.callout.localized_callout,
                                          l,
                                        ) !== m &&
                                        ((w.callout.localized_callout =
                                          s.NT.Set(
                                            w.callout.localized_callout || [],
                                            l,
                                            m,
                                          )),
                                        a.SetDirty(C.IQ.jsondata_sales),
                                        (r = !0))),
                                    d ===
                                      fs + S.unique_id + "_" + w.unique_id &&
                                      (m ||
                                        (w.localized_out_of_stock_override &&
                                          s.NT.Get(
                                            w.localized_out_of_stock_override,
                                            l,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_out_of_stock_override,
                                        l,
                                      ) !== m &&
                                      ((w.localized_out_of_stock_override =
                                        s.NT.Set(
                                          w.localized_out_of_stock_override ||
                                            [],
                                          l,
                                          m,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      xs + S.unique_id + "_" + w.unique_id &&
                                      (m ||
                                        (w.localized_delivery_override_desc &&
                                          s.NT.Get(
                                            w.localized_delivery_override_desc,
                                            l,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_delivery_override_desc,
                                        l,
                                      ) !== m &&
                                      ((w.localized_delivery_override_desc =
                                        s.NT.Set(
                                          w.localized_delivery_override_desc ||
                                            [],
                                          l,
                                          m,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0));
                                }),
                              (Se =
                                (De =
                                  S.internal_section_data.reservation_layout) ==
                                null
                                  ? void 0
                                  : De.product_configs) == null ||
                                Se.forEach((w) => {
                                  var P;
                                  d === En + S.unique_id + "_" + w.unique_id &&
                                    (m ||
                                      (w.localized_product_config_title &&
                                        s.NT.Get(
                                          w.localized_product_config_title,
                                          l,
                                        ))) &&
                                    s.NT.Get(
                                      w.localized_product_config_title,
                                      l,
                                    ) !== m &&
                                    ((w.localized_product_config_title =
                                      s.NT.Set(
                                        w.localized_product_config_title || [],
                                        l,
                                        m,
                                      )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0)),
                                    (P = w.variations) == null ||
                                      P.forEach((q) => {
                                        d ===
                                          En +
                                            S.unique_id +
                                            "_" +
                                            w.unique_id +
                                            "_" +
                                            q.unique_id &&
                                          (m ||
                                            (q.localized_variation_name &&
                                              s.NT.Get(
                                                q.localized_variation_name,
                                                l,
                                              ))) &&
                                          s.NT.Get(
                                            q.localized_variation_name,
                                            l,
                                          ) !== m &&
                                          ((q.localized_variation_name =
                                            s.NT.Set(
                                              q.localized_variation_name || [],
                                              l,
                                              m,
                                            )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                      });
                                })),
                            S.section_type == "vo_internal" &&
                              (($e = S.internal_section_data) == null
                                ? void 0
                                : $e.internal_type) == "while_supplies_last" &&
                              ((mt =
                                S.internal_section_data
                                  .while_supplies_last_option) == null
                                ? void 0
                                : mt.length) > 0 &&
                              S.internal_section_data.while_supplies_last_option.forEach(
                                (w) => {
                                  d === js + S.unique_id + "_" + w.unique_id &&
                                    (m ||
                                      (w.localized_supply_desc &&
                                        s.NT.Get(
                                          w.localized_supply_desc,
                                          l,
                                        ))) &&
                                    s.NT.Get(w.localized_supply_desc, l) !==
                                      m &&
                                    ((w.localized_supply_desc = s.NT.Set(
                                      w.localized_supply_desc || [],
                                      l,
                                      m,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0));
                                },
                              ),
                            ((gt =
                              (et = S.quiz) == null ? void 0 : et.questions) ==
                            null
                              ? void 0
                              : gt.length) > 0 &&
                              ((Je = S.quiz) == null ||
                                Je.questions.forEach((w) => {
                                  var P;
                                  d === ys + S.unique_id + "_" + w.unique_id
                                    ? (m ||
                                        (w.localized_question &&
                                          s.NT.Get(w.localized_question, l))) &&
                                      s.NT.Get(w.localized_question, l) !== m &&
                                      ((w.localized_question = s.NT.Set(
                                        w.localized_question || [],
                                        l,
                                        m,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0))
                                    : ((P = w.answers) == null
                                        ? void 0
                                        : P.length) > 0 &&
                                      w.answers.forEach((q) => {
                                        d ===
                                          Ts +
                                            S.unique_id +
                                            "_" +
                                            q.unique_id &&
                                          (m ||
                                            (q.localized_answer &&
                                              s.NT.Get(
                                                q.localized_answer,
                                                l,
                                              ))) &&
                                          s.NT.Get(q.localized_answer, l) !==
                                            m &&
                                          ((q.localized_answer = s.NT.Set(
                                            q.localized_answer || [],
                                            l,
                                            m,
                                          )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                      });
                                })),
                            ((Dt =
                              (Pt = S.tech_specs) == null
                                ? void 0
                                : Pt.tech_spec_block_list) == null
                              ? void 0
                              : Dt.length) > 0 &&
                              S.tech_specs.tech_spec_block_list.forEach((w) => {
                                var P;
                                d === sa + S.unique_id + "_" + w.unique_id
                                  ? (m ||
                                      (w.localized_block_title &&
                                        s.NT.Get(
                                          w.localized_block_title,
                                          l,
                                        ))) &&
                                    s.NT.Get(w.localized_block_title, l) !==
                                      m &&
                                    ((w.localized_block_title = s.NT.Set(
                                      w.localized_block_title || [],
                                      l,
                                      m,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0))
                                  : ((P = w.spec_list) == null
                                      ? void 0
                                      : P.length) > 0 &&
                                    w.spec_list.forEach((q) => {
                                      d === sa + S.unique_id + Js + q.unique_id
                                        ? (m ||
                                            (q.localized_spec_name &&
                                              s.NT.Get(
                                                q.localized_spec_name,
                                                l,
                                              ))) &&
                                          s.NT.Get(q.localized_spec_name, l) !==
                                            m &&
                                          ((q.localized_spec_name = s.NT.Set(
                                            q.localized_spec_name || [],
                                            l,
                                            m,
                                          )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0))
                                        : d ===
                                            sa +
                                              S.unique_id +
                                              Ks +
                                              q.unique_id &&
                                          (m ||
                                            (q.localized_spec_description &&
                                              s.NT.Get(
                                                q.localized_spec_description,
                                                l,
                                              ))) &&
                                          s.NT.Get(
                                            q.localized_spec_description,
                                            l,
                                          ) !== m &&
                                          ((q.localized_spec_description =
                                            s.NT.Set(
                                              q.localized_spec_description ||
                                                [],
                                              l,
                                              m.replace(
                                                /<br\s*\/?>/g,
                                                `
`,
                                              ),
                                            )),
                                          a.SetDirty(C.IQ.jsondata_sales),
                                          (r = !0));
                                    });
                              }),
                            ((zt =
                              (nt = S.quest) == null ? void 0 : nt.door_info) ==
                            null
                              ? void 0
                              : zt.length) > 0 &&
                              ((St = S.quest) == null ||
                                St.door_info.forEach((w) => {
                                  d === Bs + S.unique_id + "_" + w.unique_id
                                    ? (m ||
                                        (w.localized_closed_door_description &&
                                          s.NT.Get(
                                            w.localized_closed_door_description,
                                            l,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_closed_door_description,
                                        l,
                                      ) !== m &&
                                      ((w.localized_closed_door_description =
                                        s.NT.Set(
                                          w.localized_closed_door_description ||
                                            [],
                                          l,
                                          m,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0))
                                    : d ===
                                        Ns + S.unique_id + "_" + w.unique_id &&
                                      (m ||
                                        (w.localized_open_door_description &&
                                          s.NT.Get(
                                            w.localized_open_door_description,
                                            l,
                                          ))) &&
                                      s.NT.Get(
                                        w.localized_open_door_description,
                                        l,
                                      ) !== m &&
                                      ((w.localized_open_door_description =
                                        s.NT.Set(
                                          w.localized_open_door_description ||
                                            [],
                                          l,
                                          m,
                                        )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0));
                                })),
                            ((G =
                              (T = S.rewards) == null
                                ? void 0
                                : T.reward_items) == null
                              ? void 0
                              : G.length) > 0 &&
                              S.rewards.reward_items.forEach((w) => {
                                d ===
                                  Us +
                                    S.unique_id +
                                    "_" +
                                    w.virtual_item_reward_def_id &&
                                  (m ||
                                    (w.localized_reward_description &&
                                      s.NT.Get(
                                        w.localized_reward_description,
                                        l,
                                      ))) &&
                                  s.NT.Get(
                                    w.localized_reward_description,
                                    l,
                                  ) !== m &&
                                  ((w.localized_reward_description = s.NT.Set(
                                    w.localized_reward_description || [],
                                    l,
                                    m,
                                  )),
                                  a.SetDirty(C.IQ.jsondata_sales),
                                  (r = !0));
                              }),
                            ((be =
                              (ee = S.claim_item_section_data) == null
                                ? void 0
                                : ee.localized_claim_button) == null
                              ? void 0
                              : be.length) > 0 &&
                              d === Hs + S.unique_id &&
                              (m ||
                                (S.claim_item_section_data
                                  .localized_claim_button &&
                                  s.NT.Get(
                                    S.claim_item_section_data
                                      .localized_claim_button,
                                    l,
                                  ))) &&
                              s.NT.Get(
                                S.claim_item_section_data
                                  .localized_claim_button,
                                l,
                              ) !== m &&
                              ((S.claim_item_section_data.localized_claim_button =
                                s.NT.Set(
                                  S.claim_item_section_data
                                    .localized_claim_button || [],
                                  l,
                                  m,
                                )),
                              a.SetDirty(C.IQ.jsondata_sales),
                              (r = !0)),
                            S.section_type == "badge_progress" &&
                              S.badge_progress)
                          ) {
                            const w = S.badge_progress;
                            d === Is + S.unique_id &&
                              (m ||
                                (w.localized_name &&
                                  s.NT.Get(w.localized_name, l))) &&
                              s.NT.Get(w.localized_name, l) !== m &&
                              ((w.localized_name = s.NT.Set(
                                w.localized_name || [],
                                l,
                                m,
                              )),
                              a.SetDirty(C.IQ.jsondata_sales),
                              (r = !0)),
                              d === As + S.unique_id &&
                                (m ||
                                  (w.localized_initial_description &&
                                    s.NT.Get(
                                      w.localized_initial_description,
                                      l,
                                    ))) &&
                                s.NT.Get(w.localized_initial_description, l) !==
                                  m &&
                                ((w.localized_initial_description = s.NT.Set(
                                  w.localized_initial_description || [],
                                  l,
                                  m,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0)),
                              d === Gs + S.unique_id &&
                                (m ||
                                  (w.localized_progress_description &&
                                    s.NT.Get(
                                      w.localized_progress_description,
                                      l,
                                    ))) &&
                                s.NT.Get(
                                  w.localized_progress_description,
                                  l,
                                ) !== m &&
                                ((w.localized_progress_description = s.NT.Set(
                                  w.localized_progress_description || [],
                                  l,
                                  m,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0)),
                              d === Ls + S.unique_id &&
                                (m ||
                                  (w.localized_maxtier_description &&
                                    s.NT.Get(
                                      w.localized_maxtier_description,
                                      l,
                                    ))) &&
                                s.NT.Get(w.localized_maxtier_description, l) !==
                                  m &&
                                ((w.localized_maxtier_description = s.NT.Set(
                                  w.localized_maxtier_description || [],
                                  l,
                                  m,
                                )),
                                a.SetDirty(C.IQ.jsondata_sales),
                                (r = !0));
                          }
                          if (
                            (S.section_type == "discoveryqueue" &&
                              d === Ms + S.unique_id &&
                              (m ||
                                (S.discovery_queue_localized_desc &&
                                  s.NT.Get(
                                    S.discovery_queue_localized_desc,
                                    l,
                                  ))) &&
                              s.NT.Get(S.discovery_queue_localized_desc, l) !==
                                m &&
                              ((S.discovery_queue_localized_desc = s.NT.Set(
                                S.discovery_queue_localized_desc || [],
                                l,
                                m,
                              )),
                              a.SetDirty(C.IQ.jsondata_sales),
                              (r = !0)),
                            S.section_type == "social_share" &&
                              ((Et = S.social_share.content_options) == null ||
                                Et.forEach((w) => {
                                  const P = w.localized_option_fields;
                                  d === Os + S.unique_id + "_" + w.unique_id &&
                                    (m ||
                                      (P.localized_header &&
                                        s.NT.Get(P.localized_header, l))) &&
                                    s.NT.Get(P.localized_header, l) !== m &&
                                    ((P.localized_header = s.NT.Set(
                                      P.localized_header || [],
                                      l,
                                      m,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0)),
                                    d ===
                                      Ps + S.unique_id + "_" + w.unique_id &&
                                      (m ||
                                        (P.title && s.NT.Get(P.title, l))) &&
                                      s.NT.Get(P.title, l) !== m &&
                                      ((P.title = s.NT.Set(
                                        P.title || [],
                                        l,
                                        m,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      Rs + S.unique_id + "_" + w.unique_id &&
                                      (m ||
                                        (P.description &&
                                          s.NT.Get(P.description, l))) &&
                                      s.NT.Get(P.description, l) !== m &&
                                      ((P.description = s.NT.Set(
                                        P.description || [],
                                        l,
                                        m,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      ks + S.unique_id + "_" + w.unique_id &&
                                      (m ||
                                        (P.image && s.NT.Get(P.image, l))) &&
                                      s.NT.Get(P.image, l) !== m &&
                                      ((P.image = s.NT.Set(
                                        P.image || [],
                                        l,
                                        m,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0)),
                                    d ===
                                      Fs + S.unique_id + "_" + w.unique_id &&
                                      (m ||
                                        (P.twitter_alt_text &&
                                          s.NT.Get(P.twitter_alt_text, l))) &&
                                      s.NT.Get(P.twitter_alt_text, l) !== m &&
                                      ((P.twitter_alt_text = s.NT.Set(
                                        P.twitter_alt_text || [],
                                        l,
                                        m,
                                      )),
                                      a.SetDirty(C.IQ.jsondata_sales),
                                      (r = !0));
                                })),
                            S.section_type == "media_layout" &&
                              ((Me = S.media_layout.media_content) == null ||
                                Me.forEach((w, P) => {
                                  const q = w.localized_media_desc;
                                  d === zs + S.unique_id + "_" + P &&
                                    (m || (q && s.NT.Get(q, l))) &&
                                    s.NT.Get(q, l) !== m &&
                                    ((w.localized_media_desc = s.NT.Set(
                                      q || [],
                                      l,
                                      m,
                                    )),
                                    a.SetDirty(C.IQ.jsondata_sales),
                                    (r = !0));
                                })),
                            S.section_type == "template_media_content" &&
                              ((st = S.media_container.media_rows) == null ||
                                st.forEach((w) => {
                                  w == null ||
                                    w.media_columns.forEach((P) => {
                                      let q = oa(
                                        a,
                                        d,
                                        m,
                                        S.unique_id + "_" + P.unique_id,
                                        l,
                                        P,
                                      );
                                      r || (r = q),
                                        P.mobile_content_varient &&
                                          ((q = oa(
                                            a,
                                            d,
                                            m,
                                            S.unique_id +
                                              "_" +
                                              P.unique_id +
                                              "_mobile",
                                            l,
                                            P.mobile_content_varient,
                                          )),
                                          r || (r = q)),
                                        P.tablet_content_varient &&
                                          ((q = oa(
                                            a,
                                            d,
                                            m,
                                            S.unique_id +
                                              "_" +
                                              P.unique_id +
                                              "_tablet",
                                            l,
                                            P.tablet_content_varient,
                                          )),
                                          r || (r = q));
                                    });
                                })),
                            S.section_type == "template_media_overlay" &&
                              S.media_overlay)
                          ) {
                            let w = oa(
                              a,
                              d,
                              m,
                              S.unique_id + "_overlay",
                              l,
                              S.media_overlay,
                            );
                            if (
                              (r || (r = w),
                              S.media_overlay_mobile_content_varient)
                            ) {
                              let P = oa(
                                a,
                                d,
                                m,
                                S.unique_id + "_overlay_mobile",
                                l,
                                S.media_overlay_mobile_content_varient,
                              );
                              r || (r = P);
                            }
                            if (S.media_overlay_tablet_content_varient) {
                              let P = oa(
                                a,
                                d,
                                m,
                                S.unique_id + "_overlay_tablet",
                                l,
                                S.media_overlay_tablet_content_varient,
                              );
                              r || (r = P);
                            }
                          }
                        });
                  }
                }),
                  r && i.push(l);
              });
            }),
            i
          );
        }
        function oa(a, t, n, i, o, l) {
          let r = !1;
          if (t === Vs + i) {
            const d = l.localized_media_title;
            (n || (d && s.NT.Get(d, o))) &&
              s.NT.Get(d, o) !== n &&
              ((l.localized_media_title = s.NT.Set(d || [], o, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === Ws + i) {
            const d = l.localized_media_subtitle;
            (n || (d && s.NT.Get(d, o))) &&
              s.NT.Get(d, o) !== n &&
              ((l.localized_media_subtitle = s.NT.Set(d || [], o, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === Qs + i) {
            const d = l.localized_media_description;
            (n || (d && s.NT.Get(d, o))) &&
              s.NT.Get(d, o) !== n &&
              ((l.localized_media_description = s.NT.Set(d || [], o, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === qs + i) {
            const d = l.localized_alt_text;
            (n || (d && s.NT.Get(d, o))) &&
              s.NT.Get(d, o) !== n &&
              ((l.localized_alt_text = s.NT.Set(d || [], o, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          if (t === Zs + i) {
            const d = l.title_media.localized_alt_text;
            (n || (d && s.NT.Get(d, o))) &&
              s.NT.Get(d, o) !== n &&
              ((l.title_media.localized_alt_text = s.NT.Set(d || [], o, n)),
              a.SetDirty(C.IQ.jsondata_sales),
              (r = !0));
          }
          return r;
        }
        function Uo(a) {
          return (0, e.jsx)("div", {
            className: (0, b.A)(Q.FlexRowContainer),
            children: (0, e.jsx)(ei, { editModel: a.editModel }),
          });
        }
        const ei = (a) => {
          const t = (n) => {
            n.preventDefault(),
              (0, U.pg)(
                (0, e.jsx)(ba, { editModel: a.editModel }),
                (0, V.uX)(n),
              );
          };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(je.he, {
                className: (0, b.A)(Q.EditPreviewButton),
                toolTipContent: (0, s.we)("#EventEditor_Loc_Export_Desc0"),
                children: (0, e.jsx)("a", {
                  onClick: t,
                  children: (0, s.we)("#EventEditor_Loc_Export_Short"),
                }),
              }),
              (0, e.jsx)(rs.t3, {
                strToolTip: (0, s.we)("#EventEditor_Loc_Import_ttip"),
                strLabel: (0, s.we)("#EventEditor_Loc_Import_Short"),
                fnOnImportLocData: (n, i) => $s(a.editModel, n, i),
              }),
            ],
          });
        };
        let ba = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                bShowCSV: !0,
                bExportEventBody: !0,
                bExportEmail: this.props.editModel.BHasEmailEnabled(),
                bExportSale: this.props.editModel.BHasSaleEnabled(),
              });
          }
          GetLocalizationFilePrefix() {
            const { editModel: a } = this.props;
            let t = a.GetName(L.Bhc);
            return (!t || t.trim() == "") && (t = "event"), t;
          }
          GetLocalizationModel() {
            return Xs(
              this.props.editModel,
              this.state.bExportEventBody,
              this.state.bExportEmail,
              this.state.bExportSale,
            );
          }
          OnExportTypeChange(a) {
            this.setState({ bShowCSV: a == "csv" });
          }
          render() {
            const { closeModal: a, editModel: t } = this.props,
              n = ft.KN.Get().GetPartnerEventPermissions(t.GetClanSteamID());
            return (0, e.jsx)(F.eV, {
              title: (0, s.we)("#EventEditor_Loc_Export"),
              onCancel: a,
              closeModal: a,
              children: (0, e.jsxs)(p.nB, {
                children: [
                  (0, e.jsx)(p.a3, {
                    children: (0, e.jsxs)("div", {
                      className: (0, b.A)(Q.FlexColumnContainer),
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, s.we)("#EventEditor_Loc_Export_Desc0"),
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, b.A)(
                            Q.FlexRowContainer,
                            Q.RadioOption,
                          ),
                          children: [
                            (0, e.jsx)("input", {
                              type: "radio",
                              name: "ExportOption",
                              id: "EventEditor_ExportCSVOption",
                              value: "csv",
                              checked: this.state.bShowCSV,
                              onChange: () => this.OnExportTypeChange("csv"),
                            }),
                            (0, e.jsx)("label", {
                              htmlFor: "EventEditor_ExportCSVOption",
                              children: (0, e.jsx)("span", {
                                children: (0, s.we)(
                                  "#EventEditor_Loc_Export_CSV",
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, b.A)(
                            Q.FlexRowContainer,
                            Q.RadioOption,
                          ),
                          children: [
                            (0, e.jsx)("input", {
                              type: "radio",
                              name: "ExportOption",
                              id: "EventEditor_ExportXMLOption",
                              value: "xml",
                              checked: !this.state.bShowCSV,
                              onChange: () => this.OnExportTypeChange("xml"),
                            }),
                            (0, e.jsx)("label", {
                              htmlFor: "EventEditor_ExportXMLOption",
                              children: (0, e.jsx)("span", {
                                children: (0, s.we)(
                                  "#EventEditor_Loc_Export_XML",
                                ),
                              }),
                            }),
                          ],
                        }),
                        !!(
                          n.support_user &&
                          (t.BHasSaleEnabled() || t.BHasEmailEnabled)
                        ) &&
                          (0, e.jsxs)("div", {
                            className: Q.ValveOnlyBackground,
                            children: [
                              (0, e.jsx)("p", {
                                children:
                                  "(VO) Identify which sections to export",
                              }),
                              (0, e.jsx)(p.Yh, {
                                label: "Export Event Body",
                                onChange: (i) =>
                                  this.setState({ bExportEventBody: i }),
                                checked: this.state.bExportEventBody,
                              }),
                              (0, e.jsx)(p.Yh, {
                                disabled: !t.BHasEmailEnabled(),
                                label: "Export Email",
                                onChange: (i) =>
                                  this.setState({ bExportEmail: i }),
                                checked: this.state.bExportEmail,
                              }),
                              (0, e.jsx)(p.Yh, {
                                disabled: !t.BHasSaleEnabled(),
                                label: "Export Sales",
                                onChange: (i) =>
                                  this.setState({ bExportSale: i }),
                                checked: this.state.bExportSale,
                              }),
                            ],
                          }),
                        this.state.bShowCSV
                          ? (0, e.jsxs)(E.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_Desc",
                                  ),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_Desc2",
                                  ),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_Desc3",
                                  ),
                                }),
                              ],
                            })
                          : (0, e.jsxs)(E.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_XMLDesc",
                                  ),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, s.we)(
                                    "#EventEditor_Loc_Export_XMLDesc2",
                                  ),
                                }),
                              ],
                            }),
                      ],
                    }),
                  }),
                  (0, e.jsxs)(p.wi, {
                    children: [
                      (0, e.jsx)(rs.Yg, {
                        fnGetLocData: this.GetLocalizationModel,
                        bShowCSV: this.state.bShowCSV,
                        bShowXML: !this.state.bShowCSV,
                        strFileNamePrefix: this.GetLocalizationFilePrefix(),
                        lang: this.props.editModel.GetCurEditLanguage(),
                        closeModal: this.props.closeModal,
                      }),
                      (0, e.jsx)(p.$n, {
                        onClick: a,
                        children: (0, s.we)("#Button_Cancel"),
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
        };
        Sn([se.oI], ba.prototype, "GetLocalizationModel", 1),
          Sn([se.oI], ba.prototype, "OnExportTypeChange", 1),
          (ba = Sn([R.PA], ba));
        var re = u(86649);
        const zm = 1,
          Vm = 2,
          Wm = 3,
          Qm = 4,
          Ym = 5,
          Jm = 6,
          Km = 7,
          qm = 8,
          Zm = 9,
          Xm = 10,
          $m = 11,
          e_ = 12,
          t_ = 13,
          a_ = 14,
          n_ = 15,
          s_ = 16,
          i_ = 17,
          o_ = 18,
          l_ = 19,
          r_ = 20,
          d_ = 21,
          c_ = 22,
          u_ = 23,
          h_ = 24,
          m_ = 25,
          __ = 26,
          p_ = 27,
          v_ = 28,
          g_ = 29,
          S_ = 30,
          E_ = 31,
          f_ = 32,
          x_ = 33,
          b_ = 34,
          j_ = 35,
          Ho = 36;
        function zo(a) {
          const { eventModel: t, fnOnGotoPage: n } = a;
          return t.bOldAnnouncement
            ? null
            : (0, e.jsx)("div", {
                className: (0, b.A)(re.ManageButton, re.Clone),
                onClick: (i) => {
                  i.stopPropagation(), ti(t, n);
                },
                children: (0, s.we)("#Button_Clone"),
              });
        }
        function ti(a, t) {
          M.mh
            .LoadEditorModel(a.clanSteamID, a.GID)
            .then((n) => {
              const i = Xs(n, !0, !0, !0),
                o = i.GetLanguagesWithTokens();
              o.length > 1
                ? (o.sort((l, r) =>
                    (0, s.we)("#Language_" + (0, L.LgB)(l)).localeCompare(
                      (0, s.we)("#Language_" + (0, L.LgB)(r)),
                    ),
                  ),
                  (0, U.pg)(
                    (0, e.jsx)(Vo, { langs: o, locData: i, fnOnGotoPage: t }),
                    window,
                  ))
                : ai(t, i);
            })
            .catch((n) => {
              let i = (0, Be.H)(n);
              (0, U.pg)(
                (0, e.jsx)(F.KG, {
                  strTitle: (0, s.we)("#EventEditor_CloneError"),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  strDescription: (0, s.we)(
                    "#EventEditor_CloneError_Desc",
                    i.strErrorMsg,
                  ),
                }),
                window,
                { strTitle: (0, s.we)("#EventEditor_CloneError") },
              );
            });
        }
        function ai(a, t, n) {
          const i = M.mh.CreateClone(),
            o = i.GetEventModel();
          if (
            ((o.jsondata.sale_header_offset = o.GetEventType() != Ho ? 530 : 0),
            n && n.length > 0)
          ) {
            const l = t.GetLanguagesWithTokens();
            t.ClearLanguagesTokens(n);
            const r = o.jsondata.bSaleEnabled;
            (o.jsondata.bSaleEnabled = !0),
              $s(i, t, l),
              (o.jsondata.bSaleEnabled = r);
          }
          a("clone");
        }
        function Vo(a) {
          const { langs: t, locData: n, closeModal: i, fnOnGotoPage: o } = a,
            l = (0, L.sfN)(D.TS.LANGUAGE),
            [r, d] = E.useState(new Set(t.filter((_) => _ != l)));
          return (0, e.jsxs)(F.o0, {
            strTitle: (0, s.we)("#Button_Clone"),
            onOK: () => ai(o, n, Array.from(r)),
            strDescription: (0, s.we)("#EventEditor_Clone_MultiLanguages"),
            closeModal: i,
            children: [
              (0, e.jsx)("div", {
                className: re.CloneLangAlert,
                children: (0, s.we)("#EventEditor_Clone_Alert"),
              }),
              (0, e.jsx)("div", {
                className: re.CloneLangListCtn,
                children: t.map((_) =>
                  (0, e.jsx)(
                    p.Yh,
                    {
                      className: re.CloneCheckBox,
                      onChange: (c) => {
                        const g = new Set(r);
                        c ? g.delete(_) : g.add(_), d(g);
                      },
                      label: (0, s.we)("#Language_" + (0, L.LgB)(_)),
                      checked: !r.has(_),
                    },
                    _,
                  ),
                ),
              }),
              (0, e.jsx)(p.$n, {
                onClick: () => d(new Set()),
                children: (0, s.we)("#EventEditor_Clone_SelectAll"),
              }),
              (0, e.jsx)(p.$n, {
                onClick: () => d(new Set(t)),
                children: (0, s.we)("#EventEditor_Clone_DeSelectAll"),
              }),
            ],
          });
        }
        var ja = u(80963),
          Re = u(92757),
          pt = u(10142),
          xe = u(25792),
          Wo = u(16760),
          he = u(56492),
          Qo = u(68266),
          Yo = u(39239),
          Jo = u(64868);
        function Ko(a) {
          const [t, n] = (0, W.qm)(a.GetEventModel());
          return [
            t,
            n,
            (o, l) => {
              (t != o || n != l) &&
                ((a.GetEventModel().m_nBuildID = o),
                (a.GetEventModel().m_strBuildBranch = l),
                a.SetDirty(C.IQ.description));
            },
          ];
        }
        var Ze = u(72604),
          qo = u(11113),
          Rt = u.n(qo),
          Wt = u(84346);
        function Zo(a) {
          switch (a) {
            case L.Fwr:
            case L.u0:
            case L.zeJ:
              return !0;
          }
          return !1;
        }
        function ni(a) {
          const { eventModel: t, bAllowUpdate: n } = a,
            [i, o] = (0, W.qm)(t);
          if (!Zo(t.type) && !i) return null;
          let l = (0, e.jsx)("span", {
            className: (0, b.A)(Rt().BuildDisplay, Rt().BuildUnlinked),
            children: (0, s.we)("#EventEditor_AssociateBuildBlank"),
          });
          if (i) {
            const r = (0, e.jsx)("a", {
              className: (0, b.A)(Rt().BuildIDLink),
              href: `${D.TS.PARTNER_BASE_URL}apps/builddetails/${t.appid}/${i}`,
              onClick: (d) => d.stopPropagation(),
              children: i,
            });
            o
              ? (l = (0, e.jsx)("span", {
                  className: (0, b.A)(
                    Rt().BuildDisplay,
                    Rt().BuildLinkedBranch,
                  ),
                  children: (0, s.PP)("#EventEditor_AssociatedBuild", r, o),
                }))
              : (l = (0, e.jsx)("span", {
                  className: (0, b.A)(
                    Rt().BuildDisplay,
                    Rt().BuildLinkedDefault,
                  ),
                  children: (0, s.PP)(
                    "#EventEditor_AssociatedBuild_Default",
                    r,
                  ),
                }));
          } else if (!n) return null;
          return (0, e.jsxs)("div", {
            className: Rt().AssociatedBuildBody,
            children: [
              a.children,
              l,
              (0, e.jsx)(Z.o, {
                tooltip: (0, s.we)("#EventEditor_AssociateBuild_ttip"),
                className: f().tooltip_Ctn,
              }),
            ],
          });
        }
        const Xo = (0, R.PA)((a) => {
          const { editModel: t } = a,
            n = t.GetEventModel();
          return (0, e.jsx)(ni, {
            eventModel: n,
            bAllowUpdate: !0,
            children: (0, e.jsx)(p.$n, {
              onClick: (i) =>
                (0, U.pg)(
                  (0, e.jsx)(tl, { editModel: a.editModel }),
                  (0, V.uX)(i),
                ),
              children: (0, s.we)("#EventEditor_AssociateBuild"),
            }),
          });
        });
        function $o(a) {
          const [t, n] = E.useState(null);
          return (
            E.useEffect(() => {
              if ((n(null), !a)) return;
              const i = le().CancelToken.source(),
                o = D.TS.COMMUNITY_BASE_URL + `ogg/${a}/ajaxgetappbranches`;
              return (
                le()
                  .get(o, { withCredentials: !0, cancelToken: i.token })
                  .then((r) => {
                    var d;
                    if (!i.token.reason) {
                      const _ =
                        ((d = r == null ? void 0 : r.data) == null
                          ? void 0
                          : d.success) == Ze.R;
                      n(
                        _
                          ? r.data.branches.sort((c, g) => g.date - c.date)
                          : [],
                      );
                    }
                  })
                  .catch((r) => {
                    if (!i.token.reason) {
                      const d = (0, Be.H)(r);
                      console.error("useBranchInfo: " + d.strErrorMsg, d);
                    }
                  }),
                () => i.cancel("useBranchInfo: unmounting")
              );
            }, [a]),
            t
          );
        }
        function el(a) {
          const n = new Date(a.date * 1e3).toLocaleDateString((0, Wt.J)());
          return a.branch
            ? (0, s.we)(
                "#EventEditor_AssociateBuildBranch",
                a.branch,
                a.build_id,
                n,
              )
            : (0, s.we)(
                "#EventEditor_AssociateBuildDefaultBranch",
                a.build_id,
                n,
              );
        }
        const tl = (a) => {
          const { editModel: t, closeModal: n } = a,
            i = $o(t.GetEventModel().appid),
            [o, l] = E.useState(void 0),
            [r, d, _] = Ko(t),
            c = () => {
              _(o == null ? void 0 : o.build_id, o == null ? void 0 : o.branch),
                n();
            };
          if (i != null && i.length && o === void 0) {
            const v = i.find((m) => m.branch == "");
            v && l(v);
          }
          const g = !!i,
            h = new Array();
          return (
            h.push({
              label: (0, s.we)("#EventEditor_AssociateBuildClear"),
              data: null,
            }),
            i == null ||
              i.forEach((v) => {
                h.push({ label: el(v), data: v });
              }),
            (0, e.jsx)(xe.tH, {
              children: (0, e.jsx)(U.x_, {
                onEscKeypress: n,
                children: (0, e.jsxs)(p.UC, {
                  children: [
                    (0, e.jsx)(p.Y9, {
                      children: (0, s.we)("#EventEditor_AssociateBuildDialog"),
                    }),
                    (0, e.jsxs)(p.nB, {
                      children: [
                        (0, e.jsx)(p.a3, {
                          children: (0, s.we)(
                            "#EventEditor_AssociateBuildDialogDesc",
                          ),
                        }),
                        g &&
                          (0, e.jsx)(p.m, {
                            rgOptions: h,
                            selectedOption: o,
                            onChange: (v) => l(v.data),
                          }),
                        !g && (0, e.jsx)(z.t, {}),
                      ],
                    }),
                    (0, e.jsx)(p.wi, {
                      children: (0, e.jsx)(p.CB, {
                        onCancel: n,
                        bOKDisabled: !g,
                        onOK: c,
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
        var Ct = u(24642);
        const al = (0, R.PA)(function (t) {
          var n;
          const {
              eventModel: i,
              appid_or_vanity_str: o,
              bShowGameName: l,
              bShowEventMetaDataSizes: r,
            } = t,
            [d, _] = E.useState(null),
            c = E.useRef(!1),
            g = E.useCallback((Je) => {
              (c.current = !1), _(Je);
            }, []),
            h = E.useCallback(
              (Je) => {
                Je.target instanceof HTMLButtonElement ||
                  Je.target instanceof HTMLAnchorElement ||
                  (g("edit"), Je.stopPropagation());
              },
              [g],
            ),
            v = E.useCallback((Je) => {
              Je.stopPropagation();
            }, []),
            m = i.GID,
            x = i.bOldAnnouncement;
          if (d && !c.current)
            switch (((c.current = !0), d)) {
              case "clone":
                return (0, e.jsx)(Re.rd, { push: !0, to: ie.GY.Edit(o, "") });
              case "edit":
                return (0, e.jsx)(he.OG, {
                  eventModel: i,
                  route: he.PH.k_eCommunityEdit,
                });
              case "view":
                return i.BIsVisibleEvent()
                  ? (0, e.jsx)(he.OG, { eventModel: i, route: he.PH.k_eView })
                  : (0, e.jsx)(he.OG, {
                      eventModel: i,
                      route: he.PH.k_eCommunityPreview,
                    });
              default:
                console.log("EventDisplayTile - Unexpected Case - " + d);
            }
          let j = (0, L.sfN)(D.TS.LANGUAGE);
          i.BIsLanguageValidForRealms(j) ||
            (j = i.BInRealmGlobal() ? L.Bhc : L.ZLm);
          let S = i.GetNameWithFallback(j);
          const y = i.BHasSubTitle(j),
            N = !0,
            A = i.BHasSaleEnabled(),
            te = i.visibility_state != ae.zv.k_EEventStateUnpublished,
            oe = i.visibility_state != ae.zv.k_EEventStateVisible,
            De = i.visibility_state == ae.zv.k_EEventStateUnlisted,
            Se = i.BShowLibrarySpotlight(!0),
            $e = te && oe && !De;
          l &&
            (S =
              (((n = pt.A.Get().GetApp(i.appid)) == null
                ? void 0
                : n.GetName()) || "") +
              ": " +
              S);
          const mt =
              i.BIsPartnerEvent() &&
              i.BIsVisibleEvent() &&
              ne.Uq.GetStatsFor(i.clanSteamID, m),
            et = J.ac.GetOGGClanInfo(i.appid),
            gt = !!(
              x &&
              et &&
              et.is_ogg &&
              et.clanAccountID != i.announcementClanSteamID.GetAccountID()
            );
          return (0, e.jsx)(xe.tH, {
            children: (0, e.jsxs)("div", {
              className: (0, b.A)({
                [re.TileContainer]: !0,
                [re.TileAgeAppropriate]: N,
                [re.TileAgeNotAppropriate]: !N,
                [re.ShowEventMetaDataSizes]: r,
                [re.ShowLibrarySpotlight]: Se,
              }),
              children: [
                Se && (0, e.jsx)(nl, {}),
                (0, e.jsxs)("div", {
                  className: re.TileEventRow,
                  children: [
                    (0, e.jsx)(ol, {
                      fnOnFallbackClick: h,
                      lang: j,
                      eventModel: i,
                    }),
                    (0, e.jsx)("div", {
                      className: re.TileTextContainer,
                      onClick: h,
                      children: (0, e.jsxs)("div", {
                        className: re.TileDescriptionContainer,
                        children: [
                          (0, e.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              (0, e.jsx)("div", {
                                className: re.TileTextAppName,
                                children: S,
                              }),
                              (0, e.jsxs)("div", {
                                className: re.TileTextEventType,
                                children: [
                                  i.GetCategoryAsString(!0),
                                  A &&
                                    (0, e.jsxs)("span", {
                                      className: re.TileHasSale,
                                      children: [
                                        " | ",
                                        (0, s.we)(
                                          "#EventEditor_Status_HasSale",
                                        ),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          y && !1,
                          (0, e.jsxs)("div", {
                            className: Q.ContainerSpaceBetween,
                            children: [
                              (0, e.jsxs)("div", {
                                className: re.TileTextStartsIn,
                                children: [
                                  (0, e.jsx)(_t.K4, {
                                    dateAndTime:
                                      i.GetStartTimeAndDateUnixSeconds(),
                                    bSingleLine: !0,
                                  }),
                                  !oe &&
                                    te &&
                                    (0, e.jsx)(sl, { eventModel: i }),
                                  i.BHasTag("auto_rssfeed") &&
                                    (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("br", {}),
                                        (0, e.jsx)("a", {
                                          href:
                                            D.TS.STORE_BASE_URL +
                                            "curator/" +
                                            i.clanSteamID.GetAccountID() +
                                            "/admin/manage_rss/",
                                          children:
                                            " " +
                                            (0, s.we)(
                                              "#EventEditor_Status_FromRSSFeed",
                                            ),
                                        }),
                                      ],
                                    }),
                                  (0, e.jsx)(ni, {
                                    eventModel: i,
                                    bAllowUpdate: !1,
                                  }),
                                ],
                              }),
                              !!mt &&
                                (0, e.jsxs)("div", {
                                  className: re.TileStats,
                                  children: [
                                    (0, s.PP)(
                                      "#EventDashBoard_Summary_Tile_Impressions",
                                      (0, e.jsx)("span", {
                                        children: (0, Ct.D)(
                                          mt.m_stats.total_showm,
                                        ),
                                      }),
                                    ),
                                    (0, e.jsx)("br", {}),
                                    (0, s.PP)(
                                      "#EventDashBoard_Summary_Tile_Read",
                                      (0, e.jsx)("span", {
                                        children: (0, Ct.D)(
                                          mt.m_stats.total_read,
                                        ),
                                      }),
                                    ),
                                  ],
                                }),
                            ],
                          }),
                          $e && (0, e.jsx)(il, { eventModel: i }),
                          gt
                            ? (0, e.jsxs)("div", {
                                className: re.TileButtonContainer,
                                onClick: v,
                                children: [
                                  (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#EventEditor_DataFromConnectAnnouncement",
                                    ),
                                  }),
                                  (0, e.jsx)(he.tj, {
                                    className: (0, b.A)(
                                      re.ManageButton,
                                      re.Edit,
                                    ),
                                    eventModel: i,
                                    route: he.PH.k_eView,
                                    children: (0, s.we)("#Button_ViewPage"),
                                  }),
                                ],
                              })
                            : (0, e.jsx)(ll, { fnOnGotoPage: g, ...t }),
                          r &&
                            (0, e.jsx)(ge.E, {
                              requireAdmin: !0,
                              clanSteamID: i.clanSteamID,
                              children: (0, e.jsx)(cl, { eventModel: i }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        });
        function nl() {
          return (0, e.jsxs)("div", {
            className: re.PartnerEventFeaturedHeader,
            children: [
              (0, s.we)("#EventDisplay_Visible_Featured"),
              (0, e.jsx)(je.he, {
                toolTipContent: (0, s.we)(
                  "#EventDisplay_Visible_Featured_Tooltip",
                ),
                children: "\xA0(?)",
              }),
            ],
          });
        }
        const sl = (0, R.PA)(function (t) {
            const { eventModel: n } = t,
              i = K.HD.GetTimeNowWithOverride();
            return n.GetStartTimeAndDateUnixSeconds() > i
              ? (0, e.jsx)("span", {
                  className: re.EventStateUpcoming,
                  children: (0, s.we)("#EventDisplay_Upcoming"),
                })
              : (0, aa.JS)(n.type) && n.GetEndTimeAndDateUnixSeconds() > i
                ? (0, e.jsx)("span", {
                    className: re.EventStateActive,
                    children: (0, s.we)("#EventDisplay_Active"),
                  })
                : n.GetStartTimeAndDateUnixSeconds() > i + 3600
                  ? (0, e.jsx)("span", {
                      className: re.EventStateRecent,
                      children: (0, s.we)("#EventDisplay_RecentlyActive"),
                    })
                  : null;
          }),
          il = (0, R.PA)(function (t) {
            const { eventModel: n } = t;
            return n.visibilityStartTime == n.startTime
              ? (0, e.jsx)("div", {
                  className: re.TileTextStartsIn,
                  children: (0, s.we)(
                    "#EventEditor_Status_WillBeVisible_EventStart",
                  ),
                })
              : (0, e.jsx)("div", {
                  className: re.TileTextStartsIn,
                  children: (0, s.PP)(
                    "#EventEditor_Status_WillBeVisible_At",
                    (0, e.jsx)(_t.K4, {
                      dateAndTime: n.GetVisibilityStartTimeAndDateUnixSeconds(),
                      bSingleLine: !0,
                    }),
                  ),
                });
          });
        function ol(a) {
          const { fnOnFallbackClick: t, eventModel: n, lang: i } = a;
          let l = [(0, Qo.m0)(n, "capsule", i)];
          return (0, e.jsx)("div", {
            className: re.TileImageCtn,
            onClick: (r) => t(r),
            children: (0, e.jsx)(Yo.o, { className: re.TileImage, srcs: l }),
          });
        }
        const ll = (0, R.PA)(function (t) {
          const { eventModel: n, fnOnGotoPage: i, refresh: o } = t,
            l = E.useCallback((h) => {
              h.stopPropagation();
            }, []),
            r = E.useCallback(() => {
              i("view");
            }, [i]),
            d = n.bOldAnnouncement,
            _ = n.visibility_state != ae.zv.k_EEventStateVisible,
            c = n.visibility_state == ae.zv.k_EEventStateUnlisted,
            g = n.visibility_state != ae.zv.k_EEventStateUnpublished;
          return (0, e.jsxs)("div", {
            className: re.TileButtonContainer,
            onClick: l,
            children: [
              !d &&
                (0, e.jsx)(he.tj, {
                  className: (0, b.A)(re.ManageButton, re.Edit),
                  eventModel: n,
                  route: he.PH.k_eCommunityEdit,
                  onClick: l,
                  children: (0, s.we)("#Button_Edit"),
                }),
              d &&
                (0, e.jsx)(he.tj, {
                  className: (0, b.A)(re.ManageButton, re.Edit),
                  eventModel: n,
                  route: he.PH.k_eCommunityMigrate,
                  onClick: l,
                  children: (0, e.jsx)(je.he, {
                    toolTipContent: (0, s.we)(
                      "#EventEditor_Button_MigrateAndEdit_Announcement_ttip",
                    ),
                    children: (0, s.we)("#EventEditor_Button_MigrateAndEdit"),
                  }),
                }),
              _ &&
                !c &&
                (0, e.jsx)(he.tj, {
                  className: (0, b.A)(re.ManageButton, re.View),
                  eventModel: n,
                  route: he.PH.k_eCommunityPreview,
                  onClick: l,
                  children: (0, e.jsx)(je.he, {
                    toolTipContent: (0, s.we)(
                      "#EventEditor_Button_PreviewButton_ttip",
                    ),
                    children: (0, s.we)("#EventDisplay_Preview"),
                  }),
                }),
              (!_ || c) &&
                (0, e.jsx)(he.tj, {
                  className: (0, b.A)(re.ManageButton, re.View),
                  eventModel: n,
                  route: he.PH.k_eView,
                  onClick: l,
                  children: (0, s.we)("#EventDisplay_View"),
                }),
              !g &&
                !d &&
                (0, e.jsx)(rl, { eventModel: n, OnPublishSuccess: r }),
              (0, e.jsx)("div", { className: re.Spacer, children: "\xA0" }),
              (0, e.jsx)(zo, { eventModel: n, fnOnGotoPage: i }),
              (0, e.jsx)(dl, { eventModel: n, refresh: o }),
            ],
          });
        });
        function rl(a) {
          const { eventModel: t, OnPublishSuccess: n } = a,
            [i, o] = E.useState({ kind: "none" }),
            l = E.useCallback(() => o({ kind: "none" }), []),
            r = E.useCallback(
              (d) => {
                d.stopPropagation(),
                  M.mh
                    .LoadEditorModel(t.clanSteamID, t.GID)
                    .then(() => {
                      o({ kind: "publish" });
                    })
                    .catch((_) => {
                      const c = (0, Be.H)(_);
                      o({ kind: "error", strMessage: c.strErrorMsg });
                    });
              },
              [t],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, b.A)(re.ManageButton, re.Publish),
                onClick: r,
                children: (0, s.we)("#EventDisplay_Publish"),
              }),
              (0, e.jsx)(F.EN, {
                active: i.kind == "publish",
                children:
                  i.kind == "publish" &&
                  (0, e.jsx)(ja.i, {
                    editModel: M.mh.GetEditModel(),
                    partnerEventEditorStore: M.mh,
                    closeModal: l,
                    OnPublishSuccess: n,
                  }),
              }),
              (0, e.jsx)(F.EN, {
                active: i.kind == "error",
                children:
                  i.kind == "error" &&
                  (0, e.jsx)(F.KG, {
                    strTitle: (0, s.we)("#EventEditor_PublishingError"),
                    bAlertDialog: !0,
                    bDestructiveWarning: !0,
                    strDescription: (0, s.we)(
                      "#EventEditor_PublishingError_Desc",
                      i.strMessage,
                    ),
                    closeModal: l,
                  }),
              }),
            ],
          });
        }
        function dl(a) {
          const { eventModel: t, refresh: n } = a,
            [i, o, l] = (0, Jo.uD)(),
            r = E.useCallback(
              (d) => {
                d.stopPropagation(), o();
              },
              [o],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(je.he, {
                toolTipContent: (0, s.we)(
                  "#EventEditor_Button_DeleteButton_ttip",
                ),
                children: (0, e.jsx)("div", {
                  className: (0, b.A)(re.ManageButton, re.Delete),
                  onClick: r,
                  children: (0, s.we)("#Button_Delete"),
                }),
              }),
              (0, e.jsx)(F.EN, {
                active: i,
                children: (0, e.jsx)(Wo.p, {
                  eventModel: t,
                  partnerEventStore: M.mh,
                  closeModal: l,
                  onDeleteSuccessAndCloseDialog: n,
                }),
              }),
            ],
          });
        }
        function si(a, t) {
          if (!a || t <= 0) return [];
          const n = new Array();
          return (
            Object.keys(a).forEach((i) => {
              var o;
              const l = a[i],
                r = ((o = JSON.stringify(l)) == null ? void 0 : o.length) || 0;
              n.push({ key: i, size: r }),
                l &&
                  (typeof l == "object" || Array.isArray(l)) &&
                  r > 100 &&
                  si(l, t - 1).forEach((d) => {
                    n.push({ key: i + ":" + d.key, size: d.size });
                  });
            }),
            n
          );
        }
        const cl = (a) => {
          var t, n;
          const { eventModel: i } = a;
          if (!(i != null && i.jsondata)) return null;
          const o = si(i.jsondata, 3);
          return (
            o.sort((r, d) => d.size - r.size),
            (0, e.jsxs)("div", {
              className: re.MetaDataCtn,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    "Total Size: ",
                    (n =
                      (t = JSON.stringify(i.jsondata)) == null
                        ? void 0
                        : t.length) == null
                      ? void 0
                      : n.toLocaleString((0, Wt.J)()),
                  ],
                }),
                o
                  .slice(0, 10)
                  .map((r) =>
                    (0, e.jsxs)(
                      "div",
                      { children: [r.key, ": ", (0, Ct.D)(r.size)] },
                      r.key,
                    ),
                  ),
              ],
            })
          );
        };
        var kt = u(50974);
        const Dn = 10,
          ul = (0, R.PA)((a) => {
            const { match: t } = a,
              [n, i] = E.useState(!1),
              [o, l] = E.useState(""),
              [r, d] = E.useState(""),
              [_, c] = E.useState(!1),
              [g, h] = E.useState(0),
              v = E.useRef(void 0),
              m = E.useMemo(() => new k.b(D.UF.CLANSTEAMID), []),
              x = E.useMemo(() => new Qa.LU(), []),
              j = E.useMemo(() => le().CancelToken.source(), []),
              {
                bIsFetching: S,
                nHiddenEventCount: y,
                rgEventModels: N,
                fnRefetch: A,
              } = (0, M.lX)(m, !n),
              {
                rgClanEventData: te,
                bHasNextPage: oe,
                fnFetchNextPage: De,
                bIsFetching: Se,
                bIsFetchingNextPage: $e,
                clanEventSummaryStatus: mt,
                clanEventSummaryLoadError: et,
                fnRefetch: gt,
              } = (0, W.SG)(m, Dn, j);
            E.useEffect(
              () => (A(), gt(), () => j.cancel("EventListView to unload")),
              [j, gt, A],
            );
            const Je = hl(Se, S),
              Pt = (0, se.Sz)(Se),
              Dt = E.useMemo(() => {
                (0, xa.wT)(
                  !N || N.every((Te) => Te != null),
                  "draftClanEvents has a null event",
                );
                const Me = (Te) => _ || Te.GetEventType() != L.ajI,
                  st = new Map(),
                  We =
                    te == null
                      ? void 0
                      : te.pages
                          .flatMap((Te) => Te)
                          .map((Te) => (0, X.oE)(m, Te)),
                  w = We == null ? void 0 : We.filter(Me);
                w == null || w.forEach((Te) => st.set(Te.GID, Te));
                const P = N == null ? void 0 : N.filter(Me);
                P == null || P.forEach((Te) => st.set(Te.GID, Te));
                const q =
                  (We != null ? We : []).length + (N != null ? N : []).length;
                return (
                  h(
                    q -
                      (w != null ? w : []).length -
                      (P != null ? P : []).length,
                  ),
                  Array.from(st.values())
                );
              }, [N, te == null ? void 0 : te.pages, _, m]);
            E.useEffect(() => {
              const Me = Dt.filter(
                (st) => !!(st && st.BIsVisibleEvent() && st.BIsPartnerEvent()),
              ).map((st) => st.GID);
              Me.length > 0 && ne.Uq.LoadStatsForEvents(m, Me, j);
            }, [j, m, Dt]),
              E.useEffect(() => {
                if (mt == "error") {
                  const Me = (0, Be.H)(et);
                  (0, U.pg)(
                    (0, e.jsx)(F.KG, {
                      children: (0, s.we)(
                        "#Error_Description",
                        Me.errorCode,
                        Me.strErrorMsg,
                      ),
                    }),
                    window,
                  );
                }
              }, [et, mt]);
            const nt = (Me, st) => {
                var We;
                const w = [];
                let P = Dt;
                if ((P == null ? void 0 : P.length) > 0) {
                  (P = P.slice().filter((q) => {
                    var Te;
                    return !(
                      q.visibility_state !== Me ||
                      (r &&
                        !(
                          (Te = q.GetNameWithFallback(
                            (0, L.sfN)(D.TS.LANGUAGE),
                          )) != null && Te.toLocaleLowerCase().includes(r)
                        ))
                    );
                  })),
                    P.sort(
                      (q, Te) => (
                        (0, xa.wT)(
                          q !== Te,
                          `Unexpected duplicates in the list: ${q} ${Te}`,
                        ),
                        q.BShowLibrarySpotlight(!0) &&
                        !Te.BShowLibrarySpotlight(!0)
                          ? -1
                          : !q.BShowLibrarySpotlight(!0) &&
                              Te.BShowLibrarySpotlight(!0)
                            ? 1
                            : Te.startTime - q.startTime
                      ),
                    );
                  for (const q of P)
                    w.push(
                      (0, e.jsx)(
                        al,
                        {
                          appid_or_vanity_str: t.params.appid_or_vanity_str,
                          gid: q.GID,
                          eventModel: q,
                          bShowEventMetaDataSizes: n,
                          refresh: () => {
                            gt(), A();
                          },
                        },
                        q.GID,
                      ),
                    );
                }
                for (
                  let q = 0;
                  q <
                  st - ((We = P == null ? void 0 : P.length) != null ? We : 0);
                  q++
                )
                  w.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: re.TileContainer,
                        children: (0, e.jsx)(He.h, {
                          capsules_per_row: [1],
                          is_event_dash_row: !0,
                        }),
                      },
                      `tile_${Me}_ghost_${q}`,
                    ),
                  );
                return w;
              },
              zt = E.useCallback(
                (Me) => {
                  Me && !$e && De();
                },
                [$e, De],
              );
            E.useEffect(() => {
              x.Schedule(200, () =>
                d(o == null ? void 0 : o.trim().toLocaleLowerCase()),
              );
            }, [x, o]);
            const St = nt(ae.zv.k_EEventStateUnpublished, S ? y : 0),
              T = nt(ae.zv.k_EEventStateStaged),
              G = nt(ae.zv.k_EEventStateUnlisted),
              ee = nt(ae.zv.k_EEventStateVisible),
              be = E.useMemo(() => {
                if (!ee) return;
                if (Se || !oe) return ee;
                const Me = ee.length >= Dn ? ee.length - Dn : ee.length,
                  st = (0, e.jsx)(
                    wo.J,
                    { trigger: "repeated", onVisibilityChange: zt },
                    "visibilityTracker",
                  );
                return [...ee.slice(0, Me), st, ...ee.slice(Me)];
              }, [oe, Se, ee, zt]),
              Et =
                St.length > 0 || T.length > 0 || G.length > 0 || ee.length > 0;
            return (0, e.jsx)(xe.tH, {
              children: (0, e.jsxs)("div", {
                ref: v,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, b.A)("maincontent", Le().EventDashboardCtn),
                    children: [
                      (0, e.jsx)(ml, {
                        appid_or_vanity_str: t.params.appid_or_vanity_str,
                      }),
                      (0, e.jsxs)(ge.E, {
                        requireAdmin: !0,
                        clanSteamID: m,
                        children: [
                          (0, e.jsxs)("div", {
                            className: (0, b.A)(
                              "maincontent",
                              Le().EventDashboardCtn,
                              Le().EventDashAdminToolsCtn,
                              f().FlexRowContainer,
                            ),
                            children: [
                              (0, e.jsx)(p.Yh, {
                                label: "Show Event Metadata Size",
                                tooltip:
                                  "Surfaces the size of the biggest sections in the event's metadata",
                                onChange: i,
                                checked: n,
                              }),
                              (0, e.jsx)(p.$n, {
                                onClick: (Me) =>
                                  (0, U.pg)((0, e.jsx)(yo, {}), (0, V.uX)(Me)),
                                children: "Show Publishing Audit History",
                              }),
                            ],
                          }),
                          m.GetAccountID() == kt.bv &&
                            (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("a", {
                                  href: "https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m",
                                  target: "_blank",
                                  children: "Content Hub Graphana Stats Page",
                                }),
                                (0, e.jsx)("br", {}),
                                (0, e.jsx)("a", {
                                  href: `${D.TS.COMMUNITY_BASE_URL}groups/store_contenthubs/partnerevents/edit/3016840454305565993?tab=sale`,
                                  children:
                                    "Open 'Default Contnet Hub Sale Page Editor'",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (Se || Et || o.length > 0) &&
                    (0, e.jsx)("div", {
                      className: (0, b.A)(
                        Le().EventDashboardCtn,
                        Le().EventDashboardSearchCtn,
                        "maincontent",
                      ),
                      children: (0, e.jsx)(p.pd, {
                        type: "text",
                        label: (0, s.we)("#EventCalendar_UniversalSearch"),
                        value: o,
                        onChange: (Me) => l(Me.target.value),
                      }),
                    }),
                  !_ &&
                    g > 0 &&
                    (0, e.jsx)("div", {
                      className: (0, b.A)(
                        Le().EventDashboardCtn,
                        "maincontent",
                      ),
                      children: (0, e.jsx)(ge.E, {
                        requireAdmin: !0,
                        clanSteamID: m,
                        children: (0, e.jsx)("a", {
                          onClick: () => c(!0),
                          children: `Show ${g} hidden Creator Home events`,
                        }),
                      }),
                    }),
                  S &&
                    (0, e.jsx)(z.t, {
                      position: "center",
                      string: (0, s.we)("#Loading"),
                    }),
                  !Je &&
                    (0, e.jsxs)("div", {
                      className: Le().MainLists,
                      children: [
                        St.length > 0 &&
                          !S &&
                          (0, e.jsx)("div", {
                            className: (0, b.A)(Le().Section, Le().Unpublished),
                            children: (0, e.jsxs)("div", {
                              className: (0, b.A)(
                                "maincontent",
                                "eventlist",
                                Le().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: Le().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)(
                                      "#EventDisplay_Unpublished_Title",
                                    ),
                                    (0, e.jsx)(Z.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Unpublished_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                St.length > 0 && St,
                              ],
                            }),
                          }),
                        T.length > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, b.A)(Le().Section, Le().Staged),
                            children: (0, e.jsxs)("div", {
                              className: (0, b.A)(
                                "maincontent",
                                "eventlist",
                                Le().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: Le().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)("#EventDisplay_Stage_Title"),
                                    (0, e.jsx)(Z.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Stage_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                T.length > 0 && T,
                              ],
                            }),
                          }),
                        G.length > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, b.A)(Le().Section, Le().Staged),
                            children: (0, e.jsxs)("div", {
                              className: (0, b.A)(
                                "maincontent",
                                "eventlist",
                                Le().EventDashboardCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: Le().DisplaySectionHeader,
                                  children: [
                                    (0, s.we)("#EventDisplay_Unlisted_Title"),
                                    (0, e.jsx)(Z.o, {
                                      tooltip: (0, s.we)(
                                        "#EventDisplay_Unlisted_SubTitle",
                                      ),
                                    }),
                                  ],
                                }),
                                G.length > 0 && G,
                              ],
                            }),
                          }),
                        (0, e.jsx)("div", {
                          className: (0, b.A)(
                            Le().Section,
                            Le().DisplaySectionHeaderContainer,
                            Le().Visible,
                          ),
                          children: (0, e.jsxs)("div", {
                            className: (0, b.A)(
                              "maincontent",
                              "eventlist",
                              Le().EventDashboardCtn,
                            ),
                            children: [
                              (0, e.jsx)("div", {
                                className: Le().DisplaySectionHeader,
                                children: (0, s.we)(
                                  "#EventDisplay_Visible_Title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: Le().DisplaySectionSubHeader,
                                children: (0, s.we)(
                                  "#EventDisplay_Visible_Title_WithRange",
                                ),
                              }),
                              be,
                              !Se &&
                                !be &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)("#EventDisplay_NoPublic"),
                                }),
                              (Se || (Pt && oe)) &&
                                (0, e.jsx)(z.t, {
                                  position: "center",
                                  string: (0, s.we)("#Loading"),
                                }),
                              !oe &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)(
                                    "#EventDisplay_AllPublicShown",
                                  ),
                                }),
                              et &&
                                (0, e.jsx)("div", {
                                  children: (0, s.we)(
                                    "#EventDisplay_HitErrorInfiniteScroll",
                                  ),
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            });
          });
        function hl(a, t) {
          const [n, i] = E.useState(!0);
          return (
            (0, se.Z3)(() => i(!1), 4e3),
            E.useEffect(() => {
              !a && !t && i(!1);
            }, [t, a]),
            n
          );
        }
        const ml = (0, R.PA)((a) => {
            const { appid_or_vanity_str: t } = a,
              n = new k.b(D.UF.CLANSTEAMID),
              i = J.ac.GetClanInfoByClanAccountID(n.GetAccountID()),
              o = ne.Uq.GetTotalStats(n);
            return (0, e.jsxs)("div", {
              className: f().EventDashboardHeader,
              children: [
                (0, e.jsx)(me.xL, { identifier: t }),
                (0, e.jsxs)("div", {
                  className: f().EventDashboardTitles,
                  children: [
                    (0, e.jsxs)("div", {
                      className: f().maintitle,
                      children: [
                        (0, s.we)("#EventDisplay_Events"),
                        (0, e.jsx)("div", {
                          className: f().subtitle,
                          children: (0, s.we)("#EventDisplay_Edit_Desc"),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventDashboardActions,
                      children: (0, e.jsx)(_e.N_, {
                        className: (0, b.A)(f().Button, f().Primary),
                        to: ie.GY.Create(t),
                        onClick: () => M.mh.ResetModel(),
                        children: (0, s.we)("#EventDisplay_CreateNewEvent"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().EventDashboardStatsCtn,
                  children: (0, e.jsx)(tt, {
                    summary: o.m_stats,
                    clanSteamID: n,
                    bIsAllowedInLibrary: i == null ? void 0 : i.is_ogg,
                  }),
                }),
              ],
            });
          }),
          ii = (0, Ya.L)(ul);
        var _l = u(26547),
          pl = u(77477),
          vl = u(47559),
          gl = u(98854),
          oi = u(58483),
          Sl = u(98112),
          El = u(38618),
          fl = Object.defineProperty,
          xl = Object.getOwnPropertyDescriptor,
          bl = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? xl(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && fl(t, n, o), o;
          };
        let yn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.m_clanSteamID = new k.b(D.UF.CLANSTEAMID));
          }
          componentDidMount() {
            M.mh.GetEditModel() &&
              this.props.mode === "view" &&
              M.mh.GetEditModel().ClearDirty();
          }
          componentDidUpdate(a) {
            M.mh.GetEditModel() &&
              this.props.mode === "view" &&
              M.mh.GetEditModel().ClearDirty();
          }
          render() {
            const { mode: a } = this.props;
            if (a === "view") {
              let t = M.mh.GetEditModel().GetEventModel(),
                n = (0, L.sfN)(D.TS.LANGUAGE);
              return t.BHasSaleEnabled()
                ? (0, e.jsx)(xe.tH, {
                    children: (0, e.jsx)(El._, {
                      eventModel: t,
                      bIsPreview: !0,
                      language: n,
                    }),
                  })
                : (0, e.jsx)(oi.sU, {
                    children: (i) =>
                      (0, e.jsx)(_l.jA, {
                        event: t,
                        lang: n,
                        partnerEventStore: M.mh,
                        emoticonStore: i,
                        adminPanel: (0, e.jsx)(vl.g, {
                          eventModel: t,
                          partnerEventStore: M.mh,
                        }),
                        otherEventRow: (0, e.jsx)(gl.r, {
                          clanAccountID: t.clanSteamID.GetAccountID(),
                          trackingLocation: Sl.Tc.My,
                          gidAnnouncement: t.AnnouncementGID,
                          partnerEventStore: M.Av,
                          bViewAllShowInfiniteScroll: !t.BIsOGGEvent(),
                        }),
                      }),
                  });
            } else
              return (0, e.jsx)(pl.l, {
                editModel: M.mh.GetEditModel(),
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
                gid: this.props.match.params.gid,
                bDisplaySale: a === "previewsale",
              });
          }
        };
        yn = bl([R.PA], yn);
        const Tn = (0, Ya.L)(yn);
        var la = u(33512),
          li = u(21438),
          jl = u(39093),
          ra = u(62616),
          O = u(65946);
        const Cl = 0,
          Ka = 1,
          qa = 2;
        var wl = ((a) => (
            (a[(a.k_EClanAccountTypePrivate = 0)] =
              "k_EClanAccountTypePrivate"),
            (a[(a.k_EClanAccountTypePublic = 1)] = "k_EClanAccountTypePublic"),
            (a[(a.k_EClanAccountTypeLocked = 2)] = "k_EClanAccountTypeLocked"),
            (a[(a.k_EClanAccountTypeDisabled = 3)] =
              "k_EClanAccountTypeDisabled"),
            (a[(a.k_EClanAccountTypeOfficial = 4)] =
              "k_EClanAccountTypeOfficial"),
            (a[(a.k_EClanAccountTypeDeleted = 5)] =
              "k_EClanAccountTypeDeleted"),
            (a[(a.k_EClanAccountTypeValveOfficial = 6)] =
              "k_EClanAccountTypeValveOfficial"),
            (a[(a.k_EClanAccountTypeInviteOnly = 7)] =
              "k_EClanAccountTypeInviteOnly"),
            a
          ))(wl || {}),
          Dl = ((a) => (
            (a[(a.k_EAMFindAccountTypeInvalid = 0)] =
              "k_EAMFindAccountTypeInvalid"),
            (a[(a.k_EAMFindAccountTypeAccountName = 1)] =
              "k_EAMFindAccountTypeAccountName"),
            (a[(a.k_EAMFindAccountTypeEmail = 2)] =
              "k_EAMFindAccountTypeEmail"),
            (a[(a.k_EAMFindAccountTypePersonaName = 3)] =
              "k_EAMFindAccountTypePersonaName"),
            (a[(a.k_EAMFindAccountTypeURL = 4)] = "k_EAMFindAccountTypeURL"),
            (a[(a.k_EAMFindAccountTypeAllOnline_Obsolete = 5)] =
              "k_EAMFindAccountTypeAllOnline_Obsolete"),
            (a[(a.k_EAMFindAccountTypeAll = 6)] = "k_EAMFindAccountTypeAll"),
            (a[(a.k_EAMFindClanTypeClanName = 7)] =
              "k_EAMFindClanTypeClanName"),
            (a[(a.k_EAMFindClanTypeURL = 8)] = "k_EAMFindClanTypeURL"),
            (a[(a.k_EAMFindClanTypeOfficialURL = 9)] =
              "k_EAMFindClanTypeOfficialURL"),
            (a[(a.k_EAMFindClanTypeAppID = 10)] = "k_EAMFindClanTypeAppID"),
            (a[(a.k_EAMFindCheckAccountNameInUse = 11)] =
              "k_EAMFindCheckAccountNameInUse"),
            (a[(a.k_EAMFindCheckEmailAddressInUse = 12)] =
              "k_EAMFindCheckEmailAddressInUse"),
            (a[(a.k_EAMNotFindCreateAccount = 13)] =
              "k_EAMNotFindCreateAccount"),
            (a[(a.k_EAMFindClanTypeCreatorVanity = 14)] =
              "k_EAMFindClanTypeCreatorVanity"),
            a
          ))(Dl || {}),
          dt = u(60480),
          ri = u(1880),
          yl = u(64641),
          da = u.n(yl),
          Ca = u(49628),
          In = u(95682),
          Ye = u(79573),
          Tl = u(25359),
          fe = u.n(Tl),
          An = u(21418),
          Gn = u(47689),
          Il = u(26759),
          di = u(46066),
          Qt = u(54016),
          ze = u(29630);
        const wa = (a) => {
            let t = null;
            a.artworkType === "capsule"
              ? (t = (0, e.jsxs)(E.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_capsule_1"),
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${ze.zU.GetBaseURL()}31721797/2ef00d65527edf9aecdaddee086b0f5ee0cc2fe6.jpg`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${ze.zU.GetBaseURL()}7614223/fe3aa1776d96e4aa215edbdacc363a9ed005213e.png`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${ze.zU.GetBaseURL()}27000850/dc17534edaabe8d351fdfb1c6186c4eb3e637c8d.png`,
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "50%" },
                          src: `${ze.zU.GetBaseURL()}31013613/a98ecca7730e4857cb5f83e50f3304ce13bf56bf.jpg`,
                        }),
                      ],
                    }),
                  ],
                }))
              : a.artworkType === "background"
                ? (t = (0, e.jsxs)(E.Fragment, {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, s.we)("#selectimage_tip_background_1"),
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${ze.zU.GetBaseURL()}3703047/72feb03fa4eced13596f0ff7b9ec434865cb73e4.png`,
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${ze.zU.GetBaseURL()}5193306/62436147b454715822a198a2767e5c7a8560617e.jpg`,
                      }),
                      (0, e.jsx)("img", {
                        style: { width: "100%" },
                        src: `${ze.zU.GetBaseURL()}31721797/77cbe3f768e16b149c78f127b09c047826646ba5.png`,
                      }),
                    ],
                  }))
                : a.artworkType === "spotlight" &&
                  (t = (0, e.jsx)(E.Fragment, {
                    children: (0, e.jsxs)("div", {
                      className: fe().AssetExampleSpotlightCtn,
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#selectimage_tip_store_spotlight_2",
                          ),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#selectimage_tip_store_spotlight_3",
                          ),
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "100%" },
                          src: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/spotlight_example_3.jpg",
                        }),
                        (0, e.jsx)("img", {
                          style: { width: "100%" },
                          src: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/spotlight_example_4.jpg",
                        }),
                      ],
                    }),
                  }));
            const n = (i) => {
              (0, U.pg)(
                (0, e.jsx)(F.o0, {
                  onOK: () => {},
                  onCancel: () => {},
                  bAlertDialog: !0,
                  strTitle: (0, s.we)(
                    `#EventEditor_ExampleTitle_${a.artworkType}`,
                  ),
                  strDescription: (0, s.we)("#EventEditor_ExampleDescription"),
                  children: i,
                }),
                window,
              );
            };
            return t
              ? (0, e.jsxs)("div", {
                  className: f().FlexRowContainer,
                  children: [
                    (0, e.jsx)(p.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: () => n(t),
                      children: (0, s.we)("#EventEditor_ViewExamples"),
                    }),
                    (0, e.jsx)(p.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: (i) =>
                        (0, B.EP)(
                          i,
                          "https://partner.steamgames.com/doc/store/assets/eventassets",
                        ),
                      children: (0, s.we)("#EventEditor_Learn_More"),
                    }),
                  ],
                })
              : null;
          },
          Za = (a) => {
            let t = null;
            a.artworkType === "sale_header"
              ? (t = (0, e.jsxs)(E.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_sale_header_1"),
                    }),
                    (0, e.jsx)("p", {
                      children: (0, s.we)("#selectimage_tip_sale_header_2"),
                    }),
                    (0, e.jsxs)("div", {
                      className: fe().SaleHeaderExampleCtn,
                      children: [
                        (0, e.jsxs)("div", {
                          className: fe().SaleHeaderExampleCol,
                          children: [
                            (0, e.jsx)("a", {
                              href: `${ze.zU.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                              target: "_blank",
                              children: (0, e.jsx)("img", {
                                src: `${ze.zU.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                              }),
                            }),
                            (0, e.jsx)("a", {
                              href: `${ze.zU.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                              target: "_blank",
                              children: (0, e.jsx)("img", {
                                src: `${ze.zU.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: fe().SaleHeaderExampleCol,
                          children: (0, e.jsx)("a", {
                            href: `${ze.zU.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                            target: "_blank",
                            children: (0, e.jsx)("img", {
                              src: `${ze.zU.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }))
              : a.artworkType === "product_banner" &&
                (t = (0, e.jsxs)(E.Fragment, {
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#selectimage_tip_sale_product_banner",
                      ),
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${ze.zU.GetBaseURL()}4/8298b4d6ebf6f6dd2355054431d339ec9dcafdef.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${ze.zU.GetBaseURL()}4/cc803d270bf7f47ee508bbadf14577bbfe5f6500.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${ze.zU.GetBaseURL()}4/309cb650beb92e00ae352710387832aea78433ef.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${ze.zU.GetBaseURL()}4/ecd819245dd4aca57aed76f714a28b2356ad90f2.jpg`,
                    }),
                    (0, e.jsx)("img", {
                      style: { width: "100%" },
                      src: `${ze.zU.GetBaseURL()}4/7375e5c0f2adb7241870acfa931e167ff13c669f.gif`,
                    }),
                  ],
                }));
            const n = (i) => {
              (0, U.pg)(
                (0, e.jsx)(F.o0, {
                  onOK: () => {},
                  onCancel: () => {},
                  bAlertDialog: !0,
                  strTitle: (0, s.we)(
                    `#EventEditor_ExampleTitle_${a.artworkType}`,
                  ),
                  strDescription: (0, s.we)("#EventEditor_ExampleDescription"),
                  children: i,
                }),
                window,
              );
            };
            return t
              ? (0, e.jsxs)("div", {
                  className: f().FlexRowContainer,
                  children: [
                    (0, e.jsx)(p.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: () => n(t),
                      children: (0, s.we)("#EventEditor_ViewExamples"),
                    }),
                    (0, e.jsx)(p.wl, {
                      style: { width: "160px", margin: "0px 8px 0px 0px" },
                      onClick: (i) =>
                        (0, B.EP)(
                          i,
                          "https://partner.steamgames.com/doc/marketing/event_tools/sales/tools",
                        ),
                      children: (0, s.we)("#EventEditor_Learn_More"),
                    }),
                    (0, e.jsx)("br", {}),
                  ],
                })
              : null;
          };
        var ct = u(80738),
          Al = u(42440),
          Gl = u(83402),
          Ll = u(93153),
          ca = u(61819),
          yt = u(36631),
          Da = u(46777),
          Yt = u(91512),
          Ft = u(20949),
          Bl = u(8982);
        function Nl(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, O.q3)(() => n.jsondata.bAutoUpdateVanityURLForContentHub),
            o = (0, O.q3)(() => n.jsondata.sale_defines_specific_contenthub),
            l = (0, O.q3)(() => n.jsondata.sale_defines_temporary_contenthub),
            r = (0, O.q3)(() => n.BContentHubDiscountedOnly()),
            d = (0, O.q3)(() => n.jsondata.content_hub_restricted_width),
            _ = (0, O.q3)(() => n.jsondata.ignore_item_browser_overrides),
            c = (0, O.q3)(() => n.jsondata.contenthub_override_artwork),
            g = (0, O.q3)(() => n.jsondata.contenthub_override_section_styles),
            h = (0, O.q3)(() => n.jsondata.contenthub_override_tab_styles),
            v = (0, O.q3)(() => n.jsondata.contenthub_override_tab_definitions),
            m = (0, O.q3)(
              () => n.jsondata.contenthub_override_item_browser_flavors,
            ),
            x = (0, O.q3)(
              () => n.jsondata.contenthub_override_item_browser_facets,
            ),
            j = (0, O.q3)(() => n.jsondata.contenthub_disable_overrides),
            S = (0, O.q3)(
              () => n.jsondata.contenthub_dlc_for_your_flavor_override,
            ),
            [y, N] = (0, E.useState)(() => {
              var A;
              return (
                ((A = n.jsondata.prune_list_optin_name) == null
                  ? void 0
                  : A.length) > 0
              );
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.JU, {
                style: { marginTop: "0px" },
                children: "Content Hub Specification",
              }),
              (0, e.jsx)(p.Yh, {
                label: "Auto update vanity URL based on configured content hub",
                checked: i,
                onChange: (A) => {
                  (n.jsondata.bAutoUpdateVanityURLForContentHub = A),
                    A && (0, Ft.sL)(n.GetContentHub(), t),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "This is an individual content hub...",
                tooltip:
                  "If checked, this sale page will be used to render only a specific content hub. Check this if you are defining tabs/merchandising for some specific hub, or if you're defining a theme sale.",
                checked: o,
                onChange: (A) => {
                  (n.jsondata.sale_defines_specific_contenthub = A || void 0),
                    n.jsondata.bAutoUpdateVanityURLForContentHub &&
                      (0, Ft.sL)(n.GetContentHub(), t),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              o && (0, e.jsx)(Ml, { ...a }),
              (0, e.jsx)(p.Yh, {
                label: "This is a limited time sale event",
                tooltip:
                  "If checked, this sale page will be used when rendering content hubs only during the time period specified in the Options tab of the sale editor. Check this if you are defining a takeover for a seasonal sale, or if you're defining a theme sale.",
                checked: l,
                onChange: (A) => {
                  (n.jsondata.sale_defines_temporary_contenthub = A || void 0),
                    n.jsondata.bAutoUpdateVanityURLForContentHub &&
                      (0, Ft.sL)(n.GetContentHub(), t),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.JU, {
                style: { marginTop: "16px" },
                children: "App Inclusion",
              }),
              (0, e.jsx)(p.Yh, {
                label: "Show discounted (and free-to-play) items only",
                checked: r,
                onChange: (A) => {
                  (n.jsondata.content_hub_discounted_only = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Include/exclude items based on registration state... ",
                tooltip:
                  "If checked, this hub will include opted-in games and exclude pruned out games from the selected opt-in event. Typically used when defining a theme sale.",
                checked: y,
                onChange: (A) => {
                  N(A),
                    A || (n.jsondata.prune_list_optin_name = void 0),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              y && (0, e.jsx)(Ol, { ...a }),
              (0, e.jsx)(p.JU, {
                style: { marginTop: "16px" },
                children: "Overrides",
              }),
              (0, e.jsx)(p.Yh, {
                label: "Show restricted-width title and main carousel",
                checked: d,
                onChange: (A) => {
                  (n.jsondata.content_hub_restricted_width = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override artwork",
                tooltip:
                  "If checked, use artwork (background, fonts, colors, etc.) from this sale page instead of the artwork defined in the sale page it inherits from.",
                checked: c,
                onChange: (A) => {
                  (n.jsondata.contenthub_override_artwork = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override section styles",
                tooltip:
                  "If checked, for every section that exists in this sale page and the parent sale page, use section styles (colors, etc.) from this sale page instead of from the parent.",
                checked: g,
                onChange: (A) => {
                  (n.jsondata.contenthub_override_section_styles = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override tab styles",
                tooltip:
                  "If checked, and a tabs section exists in this sale page and the parent sale page, use tab styles (colors, fonts, etc.) from this sale page instead of from the parent.",
                checked: h,
                onChange: (A) => {
                  (n.jsondata.contenthub_override_tab_styles = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override tab definitions",
                tooltip:
                  "If checked, and a tabs section exists in this sale page and the parent sale page, use the tab definitions (names, filters, etc.) from this sale page instead of from the parent.",
                checked: v,
                onChange: (A) => {
                  (n.jsondata.contenthub_override_tab_definitions = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override item browser flavor tabs",
                tooltip:
                  "If checked, and an item browser section exists in this sale page and the parent sale page, use the flavor definitions (e.g. Popular, Recently Released, etc.) from this sale page instead of from the parent.",
                checked: m,
                onChange: (A) => {
                  (n.jsondata.contenthub_override_item_browser_flavors = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label:
                  "Ignore item browser tab overrides during sale takeovers",
                checked: _,
                onChange: (A) => {
                  (n.jsondata.ignore_item_browser_overrides = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Override item browser facets",
                tooltip:
                  "If checked, and an item browser section exists in this sale page and the parent sale page, use the facet menu from this sale page instead of from the parent.",
                checked: x,
                onChange: (A) => {
                  (n.jsondata.contenthub_override_item_browser_facets = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(p.Yh, {
                label: "Disable override logic",
                tooltip:
                  "If checked, the sections defined in this sale page will be used as-is, instead of being combined with parent sale pages via the override logic.",
                checked: j,
                onChange: (A) => {
                  (n.jsondata.contenthub_disable_overrides = A),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
              (0, e.jsx)(Bl.x, {
                strFlavor: S || "popular",
                fnSetFlavor: (A) => {
                  n.jsondata.contenthub_dlc_for_your_flavor_override = A;
                },
                strLabelOverride: "Override DLC For You filter/sort",
              }),
              (0, e.jsx)(Pl, { ...a }),
            ],
          });
        }
        function Ml(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, O.q3)(() => n.GetContentHubType()),
            o = (0, O.q3)(() => n.GetContentHubCategory()),
            l = (0, O.q3)(() => n.GetContentHubTag()),
            { contentHubNames: r } = (0, Gl._)(),
            d = (0, E.useMemo)(
              () => (r ? r.hubtypes.map((g) => ({ value: g, label: g })) : []),
              [r],
            ),
            _ = (0, E.useMemo)(
              () =>
                r
                  ? Array.from(r.categories.keys()).map((g) => ({
                      value: g,
                      label: `${r.categories.get(g)} (${g})`,
                    }))
                  : [],
              [r],
            ),
            c = (0, E.useMemo)(
              () =>
                r
                  ? Array.from(r.tags.keys()).map((g) => ({
                      value: `${g}`,
                      label: `${r.tags.get(g)} (${g})`,
                    }))
                  : [],
              [r],
            );
          return (0, e.jsxs)("div", {
            style: { marginLeft: "32px", marginRight: "32px" },
            children: [
              (0, e.jsx)(p.JU, {
                children: (0, s.we)("#Sale_BrowseSection_ContentHubType"),
              }),
              (0, e.jsx)("div", {
                style: { marginBottom: "12px" },
                children: (0, e.jsx)(ca.Ay, {
                  isSearchable: !0,
                  className: "react-select-container",
                  classNamePrefix: "react-select",
                  isDisabled: !d,
                  options: d,
                  value: d == null ? void 0 : d.find((g) => g.value === i),
                  onChange: (g) => {
                    (n.jsondata.source_content_hub = {
                      type: g.value,
                      category: g.value === "category" ? o : void 0,
                      tagid: g.value === "tags" ? l : void 0,
                    }),
                      t.SetDirty(C.IQ.jsondata_sales);
                  },
                }),
              }),
              i === "category" &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(p.JU, {
                      children: (0, s.we)(
                        "#Sale_BrowseSection_ContentHubCategory",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      style: { marginBottom: "12px" },
                      children: (0, e.jsx)(ca.Ay, {
                        isSearchable: !0,
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isDisabled: !_,
                        options: _,
                        value:
                          _ == null ? void 0 : _.find((g) => g.value === o),
                        onChange: (g) => {
                          (n.jsondata.source_content_hub = {
                            type: i,
                            category: g == null ? void 0 : g.value,
                          }),
                            t.SetDirty(C.IQ.jsondata_sales);
                        },
                      }),
                    }),
                  ],
                }),
              i === "tags" &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(p.JU, {
                      children: (0, s.we)("#Sale_BrowseSection_ContentHubTag"),
                    }),
                    (0, e.jsx)("div", {
                      style: { marginBottom: "12px" },
                      children: (0, e.jsx)(ca.Ay, {
                        isSearchable: !0,
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isDisabled: !c,
                        options: c,
                        value:
                          c == null
                            ? void 0
                            : c.find((g) => Number(g.value) === l),
                        onChange: (g) => {
                          (n.jsondata.source_content_hub = {
                            type: i,
                            tagid: Number(g == null ? void 0 : g.value),
                          }),
                            t.SetDirty(C.IQ.jsondata_sales);
                        },
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function Ol(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, O.q3)(() => n.jsondata.prune_list_optin_name),
            o = (0, O.q3)(() => n.jsondata.optin_only),
            { rgOptIns: l } = (0, Ll.Zs)(),
            r = (0, E.useMemo)(
              () =>
                l
                  ? l.map((d) => ({
                      value: d.pageid,
                      label: `${d.title[D.TS.LANGUAGE]} (${d.pageid})`,
                    }))
                  : [],
              [l],
            );
          return (0, e.jsxs)("div", {
            style: { marginLeft: "32px", marginRight: "32px" },
            children: [
              (0, e.jsx)(p.JU, { children: "Opt-In Event" }),
              (0, e.jsxs)("div", {
                style: { marginBottom: "12px" },
                children: [
                  (0, e.jsx)(ca.Ay, {
                    isSearchable: !0,
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isDisabled: !r,
                    options: r,
                    value: r == null ? void 0 : r.find((d) => d.value === i),
                    onChange: (d) => {
                      (n.jsondata.prune_list_optin_name = d.value),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                  }),
                  (0, e.jsx)(p.Yh, {
                    label: "Only show invited games",
                    tooltip:
                      "If checked, this hub will only show games that have been invited to register for the event. Typically used when defining a theme sale.",
                    checked: o,
                    onChange: (d) => {
                      (n.jsondata.optin_only = d),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                  }),
                ],
              }),
            ],
          });
        }
        function Pl(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, O.q3)(
              () =>
                !n.jsondata.sale_defines_specific_contenthub &&
                !n.jsondata.sale_defines_temporary_contenthub,
            ),
            o = (0, O.q3)(() => n.jsondata.contenthub_section_groups),
            [l, r] = (0, Al._)(!0);
          return !i && l
            ? null
            : (0, e.jsxs)("div", {
                style: { width: "100%" },
                children: [
                  (0, e.jsx)(p.JU, {
                    style: { marginTop: "16px" },
                    children: "Section Layout",
                  }),
                  (0, e.jsx)(Yt.A, {
                    items: o || [],
                    onDelete: (d) => {
                      (n.jsondata.contenthub_section_groups = [
                        ...n.jsondata.contenthub_section_groups.slice(0, d),
                        ...n.jsondata.contenthub_section_groups.slice(d + 1),
                      ]),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    onReorder: () => {
                      t.SetDirty(C.IQ.jsondata_sales);
                    },
                    render: (d) =>
                      (0, e.jsx)(Rl, {
                        editModel: t,
                        group: d,
                        isEditable: i,
                        baseEventJSON: r,
                        onChange: () => {
                          t.SetDirty(C.IQ.jsondata_sales);
                        },
                      }),
                  }),
                  (0, e.jsx)(p.$n, {
                    style: { maxWidth: "200px", margin: "0 auto" },
                    onClick: () => {
                      o || (n.jsondata.contenthub_section_groups = []),
                        (n.jsondata.contenthub_section_groups = [
                          ...n.jsondata.contenthub_section_groups,
                          { name: "", sections: [] },
                        ]),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    children: "Add Group",
                  }),
                ],
              });
        }
        function Rl(a) {
          const {
              editModel: t,
              group: n,
              isEditable: i,
              baseEventJSON: o,
              onChange: l,
            } = a,
            r = (0, O.q3)(() => n.name),
            d = (0, O.q3)(() => n.description),
            _ = (0, O.q3)(() => n.sections),
            c = (0, O.q3)(() => n.override_type),
            g = (0, E.useMemo)(
              () =>
                !i && o && o.contenthub_section_groups
                  ? o.contenthub_section_groups.map((v) => ({
                      data: v.name,
                      label: v.name,
                    }))
                  : [],
              [o, i],
            ),
            h = [
              { data: "replace", label: "Replace" },
              { data: "before", label: "Add Before" },
              { data: "after", label: "Add After" },
            ];
          return !i && !o
            ? null
            : (0, e.jsxs)("div", {
                style: { width: "100%" },
                children: [
                  i
                    ? (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)(p.pd, {
                            label: "Name",
                            value: r,
                            onChange: (v) => {
                              (n.name = v.target.value), l();
                            },
                          }),
                          (0, e.jsx)(p.pd, {
                            label: "Description",
                            value: d,
                            onChange: (v) => {
                              (n.description = v.target.value), l();
                            },
                          }),
                        ],
                      })
                    : (0, e.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          (0, e.jsxs)("div", {
                            style: { flexGrow: 1, marginRight: "4px" },
                            children: [
                              (0, e.jsx)(p.JU, {
                                children: "section group inherited from parent",
                              }),
                              (0, e.jsx)(p.m, {
                                rgOptions: g,
                                selectedOption: r,
                                onChange: (v) => {
                                  (n.name = v.data), l();
                                },
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            style: { flexGrow: 1, marginLeft: "4px" },
                            children: [
                              (0, e.jsx)(p.JU, { children: "Override Type" }),
                              (0, e.jsx)(p.m, {
                                rgOptions: h,
                                selectedOption: c,
                                onChange: (v) => {
                                  (n.override_type = v.data), l();
                                },
                              }),
                              !c &&
                                (0, e.jsx)("div", {
                                  className: f().ErrorStylesWithIcon,
                                  children: "Must choose Override Type",
                                }),
                            ],
                          }),
                        ],
                      }),
                  (0, e.jsxs)("div", {
                    style: { marginLeft: "32px", marginRight: "32px" },
                    children: [
                      (0, e.jsx)(p.JU, {
                        children: "Locally Defined Sections To Display",
                      }),
                      (0, e.jsx)(Yt.A, {
                        items: _,
                        onDelete: (v) => {
                          (n.sections = [
                            ...n.sections.slice(0, v),
                            ...n.sections.slice(v + 1),
                          ]),
                            l();
                        },
                        onReorder: () => {
                          l();
                        },
                        render: (v) =>
                          (0, e.jsx)(kl, {
                            editModel: t,
                            sectionRef: v,
                            onChange: l,
                          }),
                      }),
                      (0, e.jsx)(p.$n, {
                        style: { maxWidth: "150px", margin: "0 auto" },
                        onClick: () => {
                          (n.sections = [...n.sections, { sectionid: 0 }]), l();
                        },
                        children: "Add Section",
                      }),
                    ],
                  }),
                ],
              });
        }
        function kl(a) {
          const { editModel: t, sectionRef: n, onChange: i } = a,
            o = t.GetEventModel(),
            l = (0, O.q3)(() => o.GetSaleSections()),
            r = (0, yt.yD)(),
            d = l.map((c, g) => ({
              data: c.unique_id,
              label: (0, Da.h_)(
                r.eLocation,
                c,
                (0, L.sfN)(D.TS.LANGUAGE),
                t.GetEventModel(),
                g,
              ),
            })),
            _ = (0, O.q3)(() => n.sectionid);
          return (0, e.jsx)("div", {
            style: { width: "100%" },
            children: (0, e.jsx)(p.m, {
              rgOptions: d,
              selectedOption: _,
              onChange: (c) => {
                (n.sectionid = c.data), i();
              },
            }),
          });
        }
        var ya = u(76846),
          Fl = u(52695);
        function Ul(a) {
          const { model: t, fnOnDirty: n } = a,
            { openColorPicker: i } = (0, ya.p)(),
            [o, l] = (0, O.q3)(() => [
              t.sale_background_color,
              t.sale_background_repeat,
            ]);
          return (0, e.jsxs)("div", {
            className: (0, b.A)(f().FlexRowContainer, fe().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: fe().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)("#Sale_Section_Background_Color"),
                  }),
                  (0, e.jsxs)("div", {
                    className: fe().ButtonRow,
                    children: [
                      (0, e.jsx)(p.$n, {
                        className: fe().BackgroundColorBtn,
                        onClick: (r) => {
                          i(r, {
                            color: o,
                            onChange: (d) => {
                              (t.sale_background_color = d), n();
                            },
                          });
                        },
                        style: { backgroundColor: o },
                        children: (0, s.we)("#Sale_BackgroundColor"),
                      }),
                      (0, e.jsx)(p.$n, {
                        className: fe().BackgroundColorResetBtn,
                        onClick: (r) => {
                          (t.sale_background_color = ""), n();
                        },
                        children: (0, s.we)("#Sale_BackgroundColor_Reset"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: fe().OptionCtn,
                children: (0, e.jsx)(Fl.n, {
                  setting: l,
                  fnUpdateSetting: (r) => {
                    t.sale_background_repeat != r &&
                      ((t.sale_background_repeat = r), n());
                  },
                }),
              }),
            ],
          });
        }
        var ua = u(73593);
        function Hl(a) {
          const { strArrowColor: t, fnUpdateArrowColor: n, arrowStyle: i } = a,
            { openColorPicker: o } = (0, ya.p)(),
            [l, r] = E.useState(t == null);
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(p.$n, {
              className: fe().BackgroundColorBtn,
              onClick: (d) => o(d, { color: t, onChange: n }),
              children: [
                (0, e.jsx)(ua.m, {
                  direction: "left",
                  arrowFill: t,
                  arrowStyle: i,
                }),
                (0, s.we)("#EventEditor_BG_Arrow_Color"),
                (0, e.jsx)(Z.o, {
                  tooltip: (0, s.we)("#EventEditor_BG_Arrow_Color_ttip"),
                }),
                (0, e.jsx)(ua.m, {
                  direction: "right",
                  arrowFill: t,
                  arrowStyle: i,
                }),
              ],
            }),
          });
        }
        function ci(a) {
          const { label: t, fnUpdateColor: n, strColorToChange: i } = a,
            { openColorPicker: o } = (0, ya.p)();
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(p.$n, {
              className: fe().BackgroundColorBtn,
              onClick: (l) => o(l, { color: i, onChange: n }),
              children: [
                t,
                (0, e.jsx)(Z.o, {
                  tooltip: (0, s.we)("#EventEditor_BG_Arrow_Color_ttip"),
                }),
                (0, e.jsx)(ua.U, { ...a, bIsActive: !1 }),
                (0, e.jsx)(ua.U, { ...a, bIsActive: !0 }),
                (0, e.jsx)(ua.U, { ...a, bIsActive: !1 }),
                (0, e.jsx)(ua.U, { ...a, bIsActive: !1 }),
              ],
            }),
          });
        }
        var Tt = u(34452);
        function zl(a) {
          return (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)(Vl, { ...a }), (0, e.jsx)(Wl, { ...a })],
          });
        }
        function Vl(a) {
          const { model: t, fnOnDirty: n } = a,
            [i, o] = (0, O.q3)(() => [
              t.sale_carousel_arrow_color,
              t.sale_carousel_arrow_style || Tt.C.k_ECutArrowStyle,
            ]),
            l = (0, E.useMemo)(() => {
              const r = [];
              return (
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_CutArrowStyles"),
                  data: Tt.C.k_ECutArrowStyle,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_DoubleArrowStyles"),
                  data: Tt.C.k_EDoubleArrowStyle,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_ChevronStyles"),
                  data: Tt.C.k_EThickChevron,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_FlatArrowStyles"),
                  data: Tt.C.k_EFilledArrow,
                }),
                r.push({
                  label: (0, s.we)("#Sale_Section_Carousel_PointyArrowStyles"),
                  data: Tt.C.k_EPointyArrow,
                }),
                r
              );
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, b.A)(f().FlexRowContainer, fe().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: fe().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_Colors"),
                  }),
                  (0, e.jsx)(Hl, {
                    strArrowColor: i,
                    arrowStyle: o,
                    fnUpdateArrowColor: (r) => {
                      t.sale_carousel_arrow_color != r &&
                        ((t.sale_carousel_arrow_color = r), n());
                    },
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: fe().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_ArrowStyles"),
                  }),
                  (0, e.jsx)(p.m, {
                    strDropDownClassName: f().DropDownScroll,
                    rgOptions: l,
                    selectedOption: o,
                    onChange: (r) => {
                      t.sale_carousel_arrow_style != r.data &&
                        ((t.sale_carousel_arrow_style = r.data), n());
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                ],
              }),
            ],
          });
        }
        function Wl(a) {
          const { model: t, fnOnDirty: n } = a,
            [i, o, l] = (0, O.q3)(() => [
              t.sale_carousel_breadcrumb_color,
              t.sale_carousel_active_breadcrumb_color,
              t.sale_carousel_breadcrumb_style || Tt.m.k_EPillCrumb,
            ]),
            r = (0, E.useMemo)(() => {
              const d = [];
              return (
                d.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_PillStyles",
                  ),
                  data: Tt.m.k_EPillCrumb,
                }),
                d.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_CircularStyles",
                  ),
                  data: Tt.m.k_ECircularCrumb,
                }),
                d.push({
                  label: (0, s.we)(
                    "#Sale_Section_Carousel_BreadCrumb_SquareStyles",
                  ),
                  data: Tt.m.k_ESquareCrumb,
                }),
                d
              );
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, b.A)(f().FlexRowContainer, fe().BackgroundConfigCtn),
            children: [
              (0, e.jsxs)("div", {
                className: fe().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)("#Sale_Section_Carousel_BreadCrumb"),
                  }),
                  (0, e.jsx)(ci, {
                    label: (0, s.we)("#Sale_Section_Carousel_BreadCrumb_Color"),
                    strColorToChange: i,
                    breadcrumbColor: i,
                    breadcrumbActiveColor: o,
                    breadcrumbStyle: l,
                    fnUpdateColor: (d) => {
                      t.sale_carousel_breadcrumb_color != d &&
                        ((t.sale_carousel_breadcrumb_color = d), n());
                    },
                  }),
                  (0, e.jsx)(ci, {
                    label: (0, s.we)(
                      "#Sale_Section_Carousel_ActiveBreadCrumb_Color",
                    ),
                    strColorToChange: o,
                    breadcrumbColor: i,
                    breadcrumbActiveColor: o,
                    breadcrumbStyle: l,
                    fnUpdateColor: (d) => {
                      t.sale_carousel_active_breadcrumb_color != d &&
                        ((t.sale_carousel_active_breadcrumb_color = d), n());
                    },
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: fe().OptionCtn,
                children: [
                  (0, e.jsx)(p.JU, {
                    children: (0, s.we)(
                      "#Sale_Section_Carousel_BreadCrumbStyles",
                    ),
                  }),
                  (0, e.jsx)(p.m, {
                    strDropDownClassName: f().DropDownScroll,
                    rgOptions: r,
                    selectedOption: l,
                    onChange: (d) => {
                      t.sale_carousel_breadcrumb_style != d.data &&
                        ((t.sale_carousel_breadcrumb_style = d.data), n());
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                ],
              }),
            ],
          });
        }
        var Ql = u(13854);
        function Yl(a) {
          const { editModel: t } = a,
            [n, i, o] = (0, O.q3)(() => {
              var l;
              return [
                t.GetEventModel().jsondata.sale_header_offset,
                ((l = t.GetEventModel().jsondata.localized_sale_logo) == null
                  ? void 0
                  : l.filter(Boolean).length) || 0,
                t.GetEventModel().jsondata.sale_header_disable_top_margin,
              ];
            });
          return (0, e.jsxs)(ge.E, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, b.A)(
              f().PixelOffsetCtn,
              f().ValveOnlyBackground,
              f().SaleEditorSpacing,
            ),
            children: [
              (0, e.jsx)("div", {
                className: "DialogLabel",
                children: (0, s.we)("#Sale_HeaderOffset") + " (VO)",
              }),
              i > 0
                ? (0, e.jsx)("div", {
                    children: (0, s.we)("#Sale_HeaderOffset_disabled"),
                  })
                : (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, s.we)("#Sale_HeaderOffset_Desc"),
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, b.A)(
                          f().FlexRowContainer,
                          f().PixelOffsetRow,
                        ),
                        children: [
                          (0, e.jsx)(p.pd, {
                            value: n,
                            onChange: (l) => {
                              var r;
                              (t.GetEventModel().jsondata.sale_header_offset =
                                Number(
                                  (r = l == null ? void 0 : l.target) == null
                                    ? void 0
                                    : r.value,
                                ) || 0),
                                t.SetDirty(C.IQ.jsondata_sales);
                            },
                          }),
                          (0, e.jsxs)("div", {
                            className: f().PixelOffsetNote,
                            children: [
                              (0, e.jsx)("div", {
                                className: f().PixelOffsetCallout,
                                children: (0, s.we)(
                                  "#Sale_HeaderOffset_Max",
                                  "530",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                children: (0, s.we)(
                                  "#Sale_HeaderOffset_MaxDeck",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              (0, e.jsx)(p.Yh, {
                checked: o,
                label: "Disable Sale Page Top Pixels",
                onChange: (l) => {
                  (t.GetEventModel().jsondata.sale_header_disable_top_margin =
                    l),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
              }),
            ],
          });
        }
        function Jl(a) {
          const { editModel: t } = a,
            [n, i] = (0, O.q3)(() => [
              t.GetEventModel().jsondata.sale_background_color,
              t.GetEventModel().jsondata.sale_background_repeat,
            ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ul, {
                model: t.GetEventModel().jsondata,
                fnOnDirty: () => t.SetDirty(C.IQ.jsondata_sales),
              }),
              (0, e.jsx)(zl, {
                model: t.GetEventModel().jsondata,
                fnOnDirty: () => t.SetDirty(C.IQ.jsondata_sales),
              }),
              (0, e.jsx)(Yl, { editModel: t }),
              (0, e.jsx)(ql, { editModel: t }),
              (0, e.jsx)(Kl, { editModel: t }),
            ],
          });
        }
        function Kl(a) {
          const { editModel: t } = a,
            n = E.createRef(),
            [i, o, l, r] = (0, O.q3)(() => [
              Ql.OQ(t.GetNumberOfDays(), 5, 14),
              t.GetNumSalesBackgroundHeader(),
              t.GetEventStartTime(),
              t.GetNumberOfDays(),
            ]),
            d = E.useCallback(() => {
              const h = [
                { label: (0, s.we)("#Sale_HeaderArtwork_Single"), data: 1 },
              ];
              if (i > 1)
                for (let v = 2; v <= i; v++)
                  h.push({
                    label: (0, s.we)("#Sale_HeaderArtwork_Multi_Amount", v),
                    data: v,
                  });
              return h;
            }, [i]),
            _ = E.useCallback(
              (h) => {
                const v = h.data;
                o !== v &&
                  (0, U.pg)(
                    (0, e.jsx)(F.o0, {
                      strTitle: (0, s.we)("#Button_Confirm"),
                      strDescription: (0, s.we)("#Sale_HeaderArtwork_Warning"),
                      onOK: () => t.SetNumSalesBackgroundHeader(v),
                      onCancel: () => {
                        var m;
                        return (m = n == null ? void 0 : n.current) == null
                          ? void 0
                          : m.SetSelectedOption(o);
                      },
                    }),
                    window,
                  );
              },
              [t, o, n],
            ),
            c = E.useCallback(() => {
              const h = [];
              for (let v = 0; v < o; v++) {
                let x = l + 86400 * v;
                const S = {
                  label: (0, s.PP)(
                    v + 1 == o
                      ? "#Sale_HeaderArtwork_DayTimeOnward"
                      : "#Sale_HeaderArtwork_DayTime",
                    v + 1,
                    (0, e.jsx)(_t.K4, { dateAndTime: x, bSingleLine: !0 }),
                    (0, e.jsx)(_t.K4, {
                      dateAndTime: x + 86400,
                      bSingleLine: !0,
                    }),
                  ),
                  data: v,
                };
                h.push(S);
              }
              return h;
            }, [o, l]),
            g = (h) => {
              t.GetEventModel().m_overrideCurrentDay = h.data;
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.m, {
                dropDownControlRef: n,
                strDropDownClassName: f().DropDownScroll,
                label: (0, s.we)("#Sale_HeaderArtwork_Multi"),
                tooltip: (0, s.we)("#Sale_HeaderArtwork_Multi_hint"),
                rgOptions: d(),
                selectedOption: o,
                onChange: _,
                bDisableMouseOverlay: !0,
                disabled: r <= 1,
                contextMenuPositionOptions: {
                  bDisableMouseOverlay: !0,
                  bDisablePopTop: !0,
                },
                strClassName: fe().SaleDaySelection,
              }),
              o > 1 &&
                (0, e.jsx)(p.m, {
                  strDropDownClassName: f().DropDownScroll,
                  label: (0, s.we)("#Sale_HeaderArtwork_EditDay"),
                  tooltip: (0, s.we)("#Sale_HeaderArtwork_EditDay_hint"),
                  rgOptions: c(),
                  selectedOption: t.GetEventModel().GetDayIndexFromEventStart(),
                  onChange: g,
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: {
                    bDisableMouseOverlay: !0,
                    bDisablePopTop: !0,
                  },
                  strClassName: fe().SaleDaySelection,
                }),
            ],
          });
        }
        function ql(a) {
          const { editModel: t } = a,
            [n, i] = (0, O.q3)(() => [
              t.GetEventModel().jsondata.sale_background_video_webm,
              t.GetEventModel().jsondata.sale_background_video_mp4,
            ]);
          return (0, e.jsxs)(ge.E, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, b.A)(f().ValveOnlyBackground, f().SaleEditorSpacing),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Sale_BackgroundVideo_Title"),
              }),
              (0, s.we)("#Sale_BackgroundVideo_Instructions"),
              (0, e.jsx)(p.pd, {
                label: (0, s.we)("#Sale_BackgroundVideo_WebM"),
                onChange: (o) => {
                  var l;
                  (t.GetEventModel().jsondata.sale_background_video_webm =
                    ((l = o == null ? void 0 : o.target) == null
                      ? void 0
                      : l.value) || ""),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
                value: n,
              }),
              (0, e.jsx)(p.pd, {
                label: (0, s.we)("#Sale_BackgroundVideo_MP4"),
                onChange: (o) => {
                  var l;
                  (t.GetEventModel().jsondata.sale_background_video_mp4 =
                    ((l = o == null ? void 0 : o.target) == null
                      ? void 0
                      : l.value) || ""),
                    t.SetDirty(C.IQ.jsondata_sales);
                },
                value: i,
              }),
            ],
          });
        }
        var Jt = u(56330),
          Zl = u(52500),
          Ce = u(10206),
          Xl = u(2259),
          $l = u(26917),
          er = Object.defineProperty,
          tr = (a, t, n) =>
            t in a
              ? er(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          ar = (a, t, n) => tr(a, typeof t != "symbol" ? t + "" : t, n);
        class nr {
          constructor() {
            ar(this, "m_mapVisibleSections", new Map()),
              (0, $.Gn)(this, { m_mapVisibleSections: $.sH });
          }
        }
        const ui = (0, E.createContext)(null);
        function sr(a) {
          const [t] = (0, E.useState)(() => new nr());
          return (0, e.jsx)(ui.Provider, { value: t, children: a.children });
        }
        function hi() {
          const a = (0, E.useContext)(ui);
          if (!a)
            throw new Error(
              "useVisibleSectionStore must be used within a VisibleSectionStoreProvider",
            );
          return a;
        }
        function Kt(a) {
          const { strSectionId: t, children: n } = a,
            i = hi(),
            o = (0, Xl.OO)(
              {
                onEnter: () => i.m_mapVisibleSections.set(t, t),
                onLeave: () => i.m_mapVisibleSections.delete(t),
              },
              { rootMargin: "-100px 0px -100px 0px" },
            );
          return (0, e.jsx)(
            xe.tH,
            {
              children: (0, e.jsx)(
                "div",
                { className: $l.Waypoint, ref: o, children: n },
                "waypoint_sale_sect_" + t,
              ),
            },
            "eb_sale_sect_" + t,
          );
        }
        const ir = (0, R.PA)((a) => {
          var t, n, i, o;
          const { editModel: l } = a,
            [r, d] = (0, O.q3)(() => [l.GetAppID(), l.GetEventType()]),
            _ = !!(
              l.BHasSomeImage("product_banner") &&
              l.GetEventModel().BHasTag("hide_store")
            ),
            c = !!(
              l.BHasSomeImage("product_mobile_banner") &&
              l.GetEventModel().BHasTag("hide_store")
            ),
            g = d == L.ajI,
            h = (A, te = !1) => (0, ct.Nx)(A, te),
            v = (A, te = !1) => (0, ct.mi)(A, te),
            m =
              ((t = l.GetEventModel().jsondata.localized_sale_product_banner) ==
              null
                ? void 0
                : t.length) || 0,
            x =
              ((n =
                l.GetEventModel().jsondata
                  .localized_sale_product_mobile_banner) == null
                ? void 0
                : n.length) || 0,
            j =
              ((i = l.GetEventModel().jsondata.localized_sale_logo) == null
                ? void 0
                : i.length) || 0,
            S =
              ((o = l.GetEventModel().jsondata.localized_sale_overlay) == null
                ? void 0
                : o.length) || 0,
            y = (0, Zl.b)(l.GetEventModel().jsondata.sale_logo_url),
            N = [];
          return (
            g
              ? N.push("sale_header")
              : (N.push(
                  "sale_header",
                  "product_banner",
                  "product_mobile_banner",
                  "sale_logo",
                ),
                (0, ge.m)(l.GetClanSteamID(), !0) && N.push("sale_overlay")),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(In.t, {
                  clanSteamID: l.GetClanSteamID(),
                  rgSupportArtwork: N,
                  fnSetImageURL: l.SetImageURL,
                  bAllowPreviousClanImageSelection: !0,
                  rgRealmList: l.GetIncludedRealmList(),
                }),
                (0, e.jsx)(Kt, {
                  strSectionId: "SalePageEdit_SaleBgImg",
                  children: (0, e.jsx)(Ye.it, {
                    id: "SalePageEdit_SaleBgImg",
                    appid: r,
                    eventModel: l.GetEventModel(),
                    clanSteamID: l.GetClanSteamID(),
                    title: (0, s.we)("#EventEditor_ArtworkType_sale_header"),
                    artworkType: "sale_header",
                    elEventArtworkExample: (0, e.jsx)(Za, {
                      artworkType: "sale_header",
                    }),
                    bIsMinimized: h("sale_header"),
                    fnLangHasData: (A) => l.BHasImage("sale_header", A),
                    fnSetImageURL: l.SetImageURL,
                    fnGetImageHashAndExt: l.GetImageHashAndExt,
                    fnToggleMinimize: () => v("sale_header"),
                    partnerEventStore: M.mh,
                    elAdditionalControls: (0, e.jsx)(Jl, { editModel: l }),
                  }),
                }),
                !g &&
                  (0, e.jsx)(Kt, {
                    strSectionId: "SalePageEdit_SaleLogo",
                    children: (0, e.jsxs)("div", {
                      className: Ce.SalePageLogoCtn,
                      children: [
                        (0, e.jsx)(Ye.it, {
                          id: "SalePageEdit_SaleLogo",
                          clanSteamID: l.GetClanSteamID(),
                          eventModel: l.GetEventModel(),
                          appid: r,
                          title: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo",
                          ),
                          artworkType: "sale_logo",
                          elEventArtworkExample: (0, e.jsx)(Za, {
                            artworkType: "sale_logo",
                          }),
                          bIsMinimized: h("sale_logo"),
                          fnLangHasData: (A) => l.BHasImage("sale_logo", A),
                          fnSetImageURL: l.SetImageURL,
                          fnGetImageHashAndExt: l.GetImageHashAndExt,
                          fnToggleMinimize: () => v("sale_logo"),
                          partnerEventStore: M.mh,
                          fnRemoveAllArtwork:
                            j == 0
                              ? void 0
                              : () => {
                                  (0, $.h5)(() => {
                                    (l.GetEventModel().jsondata.localized_sale_logo =
                                      []),
                                      l.SetDirty(C.IQ.jsondata_sales);
                                  });
                                },
                        }),
                        (0, e.jsx)(p.pd, {
                          label: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo_url",
                          ),
                          value: l.GetEventModel().jsondata.sale_logo_url,
                          tooltip: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo_url_tooltip",
                          ),
                          description: (0, s.we)(
                            "#EventEditor_ArtworkType_sale_logo_url_example",
                          ),
                          onChange: (A) => {
                            (0, $.h5)(() => {
                              (l.GetEventModel().jsondata.sale_logo_url =
                                A.target.value),
                                l.SetDirty(C.IQ.jsondata_sales);
                            });
                          },
                        }),
                        y &&
                          (0, e.jsx)("div", {
                            className: Jt.ErrorStylesWithIcon,
                            children: y,
                          }),
                      ],
                    }),
                  }),
                !g &&
                  (0, e.jsx)(Kt, {
                    strSectionId: "SalePageEdit_SaleBanner",
                    children: (0, e.jsx)(Ye.it, {
                      id: "SalePageEdit_SaleBanner",
                      clanSteamID: l.GetClanSteamID(),
                      eventModel: l.GetEventModel(),
                      appid: r,
                      fnLangHasData: (A) => l.BHasImage("product_banner", A),
                      fnSetImageURL: l.SetImageURL,
                      fnGetImageHashAndExt: l.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_sale_product_banner",
                      ),
                      artworkType: "product_banner",
                      bIsMinimized: h("product_banner"),
                      fnToggleMinimize: () => v("product_banner"),
                      strWarning: _
                        ? (0, s.we)("#Sale_BannerVisibility_Warning")
                        : void 0,
                      elEventArtworkExample: (0, e.jsx)(Za, {
                        artworkType: "product_banner",
                      }),
                      partnerEventStore: M.mh,
                      fnRemoveAllArtwork:
                        m == 0
                          ? void 0
                          : () => {
                              (0, $.h5)(() => {
                                (l.GetEventModel().jsondata.localized_sale_product_banner =
                                  []),
                                  l.SetDirty(C.IQ.jsondata_sales);
                              });
                            },
                    }),
                  }),
                !g &&
                  (0, e.jsx)(Kt, {
                    strSectionId: "SalePageEdit_SaleMobileBanner",
                    children: (0, e.jsx)(Ye.it, {
                      id: "SalePageEdit_SaleMobileBanner",
                      clanSteamID: l.GetClanSteamID(),
                      eventModel: l.GetEventModel(),
                      appid: r,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_sale_product_mobile_banner",
                      ),
                      artworkType: "product_mobile_banner",
                      bIsMinimized: h("product_mobile_banner"),
                      fnToggleMinimize: () => v("product_mobile_banner"),
                      fnLangHasData: (A) =>
                        l.BHasImage("product_mobile_banner", A),
                      fnSetImageURL: l.SetImageURL,
                      fnGetImageHashAndExt: l.GetImageHashAndExt,
                      partnerEventStore: M.mh,
                      strWarning: c
                        ? (0, s.we)("#Sale_BannerVisibility_Warning")
                        : void 0,
                      fnRemoveAllArtwork:
                        x == 0
                          ? void 0
                          : () => {
                              (0, $.h5)(() => {
                                (l.GetEventModel().jsondata.localized_sale_product_mobile_banner =
                                  []),
                                  l.SetDirty(C.IQ.jsondata_sales);
                              });
                            },
                    }),
                  }),
                !g &&
                  (0, e.jsx)(Kt, {
                    strSectionId: "SalePageEdit_SaleOverlay",
                    children: (0, e.jsx)(ge.E, {
                      clanSteamID: l.GetClanSteamID(),
                      requireAdmin: !0,
                      className: Ce.SalePageLogoCtn,
                      children: (0, e.jsx)(Ye.it, {
                        id: "SalePageEdit_SaleOverlay",
                        clanSteamID: l.GetClanSteamID(),
                        eventModel: l.GetEventModel(),
                        appid: r,
                        title: (0, s.we)(
                          "#EventEditor_ArtworkType_sale_overlay",
                        ),
                        artworkType: "sale_overlay",
                        elEventArtworkExample: (0, e.jsx)(Za, {
                          artworkType: "sale_overlay",
                        }),
                        bIsMinimized: h("sale_overlay"),
                        fnToggleMinimize: () => v("sale_overlay"),
                        fnLangHasData: (A) => l.BHasImage("sale_overlay", A),
                        fnSetImageURL: l.SetImageURL,
                        fnGetImageHashAndExt: l.GetImageHashAndExt,
                        partnerEventStore: M.mh,
                        fnRemoveAllArtwork:
                          S == 0
                            ? void 0
                            : () => {
                                (0, $.h5)(() => {
                                  (l.GetEventModel().jsondata.localized_sale_overlay =
                                    []),
                                    l.SetDirty(C.IQ.jsondata_sales);
                                });
                              },
                      }),
                    }),
                  }),
              ],
            })
          );
        });
        var Xa = u(50109),
          we = u(8681),
          xt = u(73191),
          vt = u(11833),
          Ta = u(88942),
          wt = u(98609);
        async function or(a) {
          var t, n;
          const i = { accountid: a, origin: self.origin };
          let o = `${wt.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
          (0, D.yK)() == "partnerweb" &&
            (o = `${wt.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
          const l = await le().get(o, { params: i, withCredentials: !0 });
          if (
            !l ||
            l.status != 200 ||
            ((t = l.data) == null ? void 0 : t.success) != Ze.R ||
            !((n = l.data) != null && n.partners)
          )
            throw `Load single user partner info failed ${((0, Be.H))(l).strErrorMsg}`;
          return l.data.partners;
        }
        function mi(a) {
          const { data: t, isLoading: n } = (0, Ta.I)({
            queryKey: ["PartnerInfoList", a],
            queryFn: () => or(a),
          });
          return n ? null : t;
        }
        function C_(a, t) {
          const n = mi(a);
          return n == null ? void 0 : n.find((i) => i.partnerid === t);
        }
        function _i(a) {
          const {
              accountID: t,
              partnerID: n,
              fnSetPartnerID: i,
              strLabel: o,
              strTooltip: l,
            } = a,
            r = mi(t),
            d = (0, E.useMemo)(
              () =>
                (r == null ? void 0 : r.length) > 0
                  ? r.map((_) => ({ label: _.partner_name, data: _.partnerid }))
                  : null,
              [r],
            );
          return d == null
            ? null
            : (0, e.jsx)(p.m, {
                label: o,
                tooltip: l,
                rgOptions: d,
                selectedOption: n,
                onChange: (_) => i(_.data),
              });
        }
        function pi(a) {
          const { strExternalSaleEventType: t, fnSetExternalSaleEventType: n } =
              a,
            i = [
              {
                label: "Publisher/Developer Sale",
                data: "publisher",
                tooltip:
                  "A developer, publisher or franchise want to showcase their games on a sale page.",
              },
              {
                label: "Showcase/Festival/Convention",
                data: "showcase",
                tooltip:
                  "festivals, convensions, showcases. Typically events with a physical presence, but not always",
              },
              {
                label: "Regional Sale",
                data: "region",
                tooltip: "For Made in XYZ Location events",
              },
              {
                label: "Themed Sale",
                data: "theme",
                tooltip:
                  "For events organized around a particular genre, theme, style",
              },
              {
                label: "Franchise Sale",
                data: "franchise",
                tooltip: "For events organized around a particular franchise",
              },
              {
                label: "DEV Only: Locked Publisher/Developer Sale",
                data: "locked_publisher",
                tooltip:
                  "A developer, publisher or franchise want to showcase their games on a sale page and are limited to only their linked apps with their creator home.",
              },
              {
                label: "DEV Only: Locked Franchise Sale",
                data: "locked_franchise",
                tooltip:
                  "For events organized around a particular franchise and are limited to only their linked apps to their creator home",
              },
            ];
          return (0, e.jsxs)("div", {
            children: [
              "Please Select event type so that:",
              (0, e.jsxs)("ol", {
                children: [
                  (0, e.jsx)("li", {
                    children:
                      "we can show the right documentation to the partner",
                  }),
                  (0, e.jsx)("li", {
                    children:
                      "Dev/Pub/Franchise sales are limited to the created apps if the hosting group is a creator hoem",
                  }),
                ],
              }),
              (0, e.jsx)(p.m, {
                rgOptions: i,
                strDropDownClassName: Q.DropDownScroll,
                strDropDownMenuCtnClass: Q.DropDownScroll,
                strDropDownItemClassName: Q.DropDownScrollItem,
                selectedOption: t,
                onChange: (o) => n(o.data),
                contextMenuPositionOptions: { bDisablePopTop: !0 },
              }),
            ],
          });
        }
        function vi(a) {
          const { clanSteamID: t, gidClanEvent: n } = a,
            { bLoading: i } = (0, we.g7)(t.GetAccountID(), n);
          return i
            ? (0, e.jsx)(z.t, { string: (0, s.we)("#Loading") })
            : (0, e.jsx)(lr, { ...a });
        }
        function lr(a) {
          const { clanSteamID: t, gidClanEvent: n, fnOkCallbackList: i } = a,
            {
              bPublishRequiresValveApproval: o,
              fnSetStorePublishingRequiresValveApproval: l,
              bRequiresHostDisclaimer: r,
              fnSetStoreRequireHostDisclaimer: d,
              bHasSettingForRequiresValveApproval: _,
              strExternalSaleEventType: c,
              fnSetExternalSaleEventType: g,
            } = (0, we.g7)(t.GetAccountID(), n),
            [h, v] = (0, E.useState)(_ ? o : !0),
            [m, x] = (0, E.useState)(r);
          return (
            (0, se.hL)(i, () => {
              l(h), d(m);
            }),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(p.Yh, {
                  checked: i ? h : _ ? o : !0,
                  onChange: (j) => {
                    v(j), i || l(j);
                  },
                  label:
                    "Require Approval by Valve Admin in order to publish this sales events",
                  tooltip:
                    "They will see a warning indicating they cannot publish until Valve approves the page. Approval is done by Valve Admin in the same place.",
                }),
                (0, e.jsx)(p.Yh, {
                  checked: i ? m : r,
                  onChange: (j) => {
                    x(j), i || d(j);
                  },
                  label: (0, s.we)("#SalePresented_By_Admin"),
                  tooltip: (0, s.we)("#SalePresneted_By_Admin_ttip"),
                }),
                (0, e.jsx)(pi, {
                  strExternalSaleEventType: c,
                  fnSetExternalSaleEventType: g,
                }),
              ],
            })
          );
        }
        function gi(a) {
          var t, n;
          const {
              clanSteamID: i,
              gidClanEvent: o,
              rgSalePresenters: l,
              fnCleanSaleEventPresenters: r,
              bPublishTab: d,
              bIsEventVisible: _,
            } = a,
            {
              bLoading: c,
              bPublishRequiresValveApproval: g,
              nAccountApproved: h,
              bRequiresHostDisclaimer: v,
              fnSetStoreRequireHostDisclaimer: m,
            } = (0, we.g7)(i.GetAccountID(), o),
            { oPrivateData: x } = (0, we.fj)(i.GetAccountID(), o),
            j = Si(i, o);
          if (_)
            return (
              j &&
              (0, e.jsx)("div", {
                className: (0, b.A)(
                  vt.ApprovalRequiredCtn,
                  vt.PublishWithRestrictions,
                ),
                children: (0, e.jsx)("div", {
                  className: vt.Left,
                  children: (0, e.jsx)(Ei, { clanSteamID: i, gidClanEvent: o }),
                }),
              })
            );
          if (!c && g && !h) {
            const S = (A) => {
                (0, U.pg)(
                  (0, e.jsx)(ur, { clanSteamID: i, gidClanEvent: o }),
                  (0, V.uX)(A),
                );
              },
              y = (A) => {
                (0, U.pg)(
                  (0, e.jsx)(dr, { clanSteamID: i, gidClanEvent: o }),
                  (0, V.uX)(A),
                );
              },
              N =
                (t = x == null ? void 0 : x.jsonData) == null
                  ? void 0
                  : t.strSalePageApprovalHelpTicketReferenceCode;
            return (0, e.jsxs)("div", {
              className: (0, b.A)(
                vt.ApprovalRequiredCtn,
                N ? vt.PendingApproval : "",
              ),
              children: [
                (0, e.jsx)("div", {
                  className: vt.Left,
                  children: N
                    ? (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: vt.Title,
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Title_Pending",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Desc_Pending",
                            ),
                          }),
                        ],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: vt.Title,
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Desc",
                            ),
                          }),
                        ],
                      }),
                }),
                (0, e.jsxs)("div", {
                  className: vt.Right,
                  children: [
                    N
                      ? (0, e.jsx)(B.uU, {
                          href: `${D.TS.HELP_BASE_URL}en/wizard/HelpRequest/${((n = x == null ? void 0 : x.jsonData)) == null ? void 0 : n.strSalePageApprovalHelpTicketReferenceCode}`,
                          className: (0, b.A)(Q.EditPreviewButton, Q.Button),
                          bForceExternal: !0,
                          children: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Link",
                          ),
                        })
                      : (0, e.jsx)(je.he, {
                          toolTipContent: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Approval_ttip",
                          ),
                          children: (0, e.jsx)(p.jn, {
                            onClick: S,
                            children: (0, s.we)(
                              "#EventEditor_SaleValveApproval_Request_Button",
                            ),
                          }),
                        }),
                    (0, e.jsxs)(ge.E, {
                      clanSteamID: i,
                      children: [
                        (0, e.jsxs)(p.$n, {
                          onClick: y,
                          children: [
                            "Approve... ",
                            (0, e.jsx)(Z.o, {
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleValveApproval_Admin_Tooltip",
                              ),
                            }),
                          ],
                        }),
                        (l == null ? void 0 : l.length) > 0 &&
                          (0, e.jsx)(p.$n, {
                            onClick: r,
                            children: (0, s.we)(
                              "#SalePresented_By_ClearPresenters",
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          } else if (!c && g && h)
            return (0, e.jsx)("div", {
              className: (0, b.A)(vt.ApprovalRequiredCtn, vt.Approved),
              children: (0, e.jsxs)("div", {
                className: vt.Left,
                children: [
                  (0, e.jsxs)("div", {
                    className: vt.Title,
                    children: [
                      "\u2713 ",
                      (0, s.we)(
                        "#EventEditor_SaleValveApproval_Approved_Title",
                      ),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.we)(
                      d
                        ? "#EventEditor_SaleValveApproval_Approved_Desc_OnPublish"
                        : "#EventEditor_SaleValveApproval_Approved_Desc",
                    ),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(Ei, { clanSteamID: i, gidClanEvent: o }),
                ],
              }),
            });
          return null;
        }
        function Si(a, t) {
          const {
            bLoading: n,
            bAllowAddingAppsPackagesBundles: i,
            bAllowChangingVanityURL: o,
            bAllowMakingChangesToSalePage: l,
          } = (0, we.fp)(a.GetAccountID(), t);
          return !n && (!i || !o || !l);
        }
        function Ei(a) {
          const { clanSteamID: t, gidClanEvent: n } = a,
            i = Si(t, n),
            {
              bAllowAddingAppsPackagesBundles: o,
              bAllowChangingVanityURL: l,
              bAllowMakingChangesToSalePage: r,
            } = (0, we.fp)(t.GetAccountID(), n);
          return i
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#EventEditor_SaleEditor_Restriction"),
                  }),
                  (0, e.jsxs)("ul", {
                    children: [
                      !l &&
                        (0, e.jsxs)("li", {
                          children: [
                            (0, s.we)("#EventEditor_SaleEditor_Block_URL"),
                            " ",
                            (0, e.jsx)(Z.o, {
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleEditor_Block_URL_ttip",
                              ),
                            }),
                          ],
                        }),
                      !o &&
                        (0, e.jsxs)("li", {
                          children: [
                            (0, s.we)("#EventEditor_SaleEditor_Block_App"),
                            " ",
                            (0, e.jsx)(Z.o, {
                              tooltip: (0, s.we)(
                                "#EventEditor_SaleEditor_Block_App_ttip",
                              ),
                            }),
                          ],
                        }),
                      !r &&
                        (0, e.jsx)("li", {
                          children: (0, s.we)(
                            "#EventEditor_SaleEditor_Block_Sale",
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function fi(a) {
          const { clanSteamID: t, gidClanEvent: n, bShowThrobber: i } = a,
            {
              bLoading: o,
              bAllowChangingVanityURL: l,
              bAllowAddingAppsPackagesBundles: r,
              bAllowMakingChangesToSalePage: d,
              fnSetAllowAddingAppsPackagesBundles: _,
              fnSetAllowChangingVanityURL: c,
              fnSetAllowMakingChangesToSalePage: g,
            } = (0, we.fp)(t.GetAccountID(), n);
          return i && o
            ? (0, e.jsx)(z.t, {
                string: (0, s.we)("#Loading"),
                size: "medium",
                position: "center",
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h3", { children: "Post Approval Controls" }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(p.Yh, {
                    checked: l,
                    onChange: c,
                    label: "Allow Updating Vanity URL After Approval",
                    tooltip:
                      "Unset when we plan to feature with a direct link to the landing page",
                  }),
                  (0, e.jsx)(p.Yh, {
                    checked: r,
                    onChange: _,
                    label: "Allow Adding Apps/Packages/Bundles after Approval",
                    tooltip:
                      "Use when we agreed to a specific app/package/bundle list for them to use.",
                  }),
                  (0, e.jsx)(p.Yh, {
                    checked: d,
                    onChange: g,
                    label:
                      "Allow Updating layout/artwork/ordering/carousels After Approval",
                    tooltip:
                      "Use when we don't have full trust that they won't change the art or featuring in a way that breaks what we reviewed and agreed upon",
                  }),
                ],
              });
        }
        function rr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: i } = a,
            o = "Update Post Review Editability",
            [l, r, d] = (0, we.hr)(),
            _ = (0, xt.vs)();
          return _.bLoading
            ? (0, e.jsx)(xt.Hh, { state: _, strDialogTitle: o, closeModal: i })
            : (0, e.jsx)(F.o0, {
                strTitle: o,
                onOK: () => {
                  _.fnSetLoading(!0),
                    d(n)
                      .then((c) => {
                        c == Ze.R
                          ? i()
                          : (r(),
                            _.fnSetError(!0),
                            _.fnSetStrError(
                              "Failed to update Private Data: " + c,
                            ));
                      })
                      .catch((c) => {
                        r(),
                          _.fnSetError(!0),
                          _.fnSetStrError((0, Be.H)(c).strErrorMsg);
                      });
                },
                strOKButtonText: "Update",
                bDisableBackgroundDismiss: !0,
                closeModal: i,
                onCancel: r,
                bOKDisabled: !!_.bError,
                children: (0, e.jsx)(fi, {
                  clanSteamID: t,
                  gidClanEvent: n,
                  bShowThrobber: !0,
                }),
              });
        }
        function dr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: i } = a,
            { fnSetAccountApproved: o } = (0, we.g7)(t.GetAccountID(), n),
            [l, r, d] = (0, we.hr)(),
            _ = "APPROVE SALE PAGE?",
            c = (0, xt.vs)();
          if (c.bLoading)
            return (0, e.jsx)(xt.Hh, {
              state: c,
              strDialogTitle: _,
              closeModal: i,
            });
          const g = () => {
            c.fnSetLoading(!0),
              o(D.iA.accountid),
              d(n)
                .then((h) => {
                  h == Ze.R
                    ? i()
                    : (r(),
                      c.fnSetError(!0),
                      c.fnSetStrError("Failed to update Private Data: " + h));
                })
                .catch((h) => {
                  r(),
                    c.fnSetError(!0),
                    c.fnSetStrError((0, Be.H)(h).strErrorMsg);
                });
          };
          return (0, e.jsx)(F.o0, {
            strTitle: _,
            strDescription:
              "This will remove the publishing block and allow the partner to publish anytime afterward. As a reminder, these are the things we should check before approving:",
            onOK: g,
            strOKButtonText: "Yes, Approve",
            bDisableBackgroundDismiss: !0,
            closeModal: i,
            onCancel: r,
            bOKDisabled: !!c.bError,
            children: (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("br", {}),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("h3", { children: "Key requirements:" }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      children:
                        "Is the event organizer clearly communicated on the sale page?",
                    }),
                    (0, e.jsx)("li", {
                      children: "Are the dates set correctly?",
                    }),
                    (0, e.jsx)("li", {
                      children:
                        "Are the store page banners reasonable and avoid sponsor logos?",
                    }),
                  ],
                }),
                (0, e.jsx)("h3", {
                  children: "If we are promoting this event:",
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      children:
                        "Does the artwork fit the space and fade nicely on the edges?",
                    }),
                    (0, e.jsx)("li", {
                      children:
                        "Do we have all layered art files in hand if we are promoting this event?",
                    }),
                  ],
                }),
                (0, e.jsx)(fi, { clanSteamID: t, gidClanEvent: n }),
              ],
            }),
          });
        }
        async function cr(a, t, n, i) {
          const o =
              D.TS.COMMUNITY_BASE_URL +
              "partnereventdata/ajaxrequestsalepagereview",
            l = new URLSearchParams();
          l.append("sessionid", (0, D.KC)()),
            l.append("clanAccountID", "" + a.GetAccountID()),
            l.append("gidClanEvent", t),
            l.append("partnerID", "" + i),
            l.append("message", n);
          try {
            let r = await le().post(o, l, { withCredentials: !0 });
            return !r || r.status != 200 || r.data.success != Ze.R
              ? (console.error(
                  "CreateReviewRequestTicket failed.",
                  r && (0, Be.H)(r),
                ),
                r.data.success == Ze.Ze ? r.data : null)
              : r.data;
          } catch (r) {
            const d = (0, Be.H)(r);
            console.error(
              "CreateReviewRequestTicket failed: " + d.strErrorMsg,
              d,
            );
          }
          return null;
        }
        function ur(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: i } = a,
            {
              bLoading: o,
              oPrivateData: l,
              fnSetPrivateJsonNoDirty: r,
            } = (0, we.fj)(t.GetAccountID(), n),
            [d, _] = (0, E.useState)(""),
            [c, g] = (0, E.useState)(null),
            h = (0, xt.vs)();
          return h.bLoading
            ? (0, e.jsx)(xt.Hh, {
                state: h,
                strDialogTitle: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Approval",
                ),
                closeModal: i,
              })
            : (0, e.jsxs)(F.o0, {
                strTitle: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Approval",
                ),
                strDescription: (0, s.we)(
                  "#EventEditor_SaleValveApproval_Request_Desc",
                ),
                bDisableBackgroundDismiss: !0,
                bOKDisabled: o,
                onCancel: i,
                onOK: async () => {
                  h.fnSetLoading(!0),
                    cr(t, n, d, c)
                      .then((v) => {
                        v && v.success == Ze.R
                          ? (r({
                              ...l,
                              strSalePageApprovalHelpTicketReferenceCode:
                                v.reference_code,
                            }),
                            h.fnSetSuccess(!0),
                            h.fnSetElSuccess(
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#EventEditor_SaleValveApproval_Request_Success",
                                    ),
                                  }),
                                  (0, e.jsx)(B.uU, {
                                    href: v.help_url,
                                    bForceExternal: !0,
                                    children: (0, s.we)(
                                      "#EventEditor_SaleValveApproval_Request_Link",
                                    ),
                                  }),
                                ],
                              }),
                            ))
                          : v.success == Ze.Ze
                            ? (h.fnSetError(!0),
                              h.fnSetStrError(
                                (0, s.we)(
                                  "#EventEditor_SaleValveApproval_Request_DuplicateError",
                                ),
                              ))
                            : (h.fnSetError(!0),
                              h.fnSetStrError(
                                (0, s.we)(
                                  "#EventEditor_SaleValveApproval_Request_Error",
                                ),
                              ));
                      })
                      .catch((v) => {
                        h.fnSetError(!0),
                          h.fnSetStrError(
                            (0, s.we)(
                              "#EventEditor_SaleValveApproval_Request_Error",
                            ),
                          );
                      });
                },
                children: [
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("br", {}),
                  (0, s.we)("#EventEditor_SaleValveApproval_Request_Desc2"),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("br", {}),
                  (0, s.we)("#EventEditor_SaleValveApproval_Request_Desc3"),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(p.pd, {
                    type: "text",
                    label: (0, s.we)(
                      "#EventEditor_SaleValveApproval_Request_InputText",
                    ),
                    onChange: (v) => _(v.currentTarget.value || ""),
                    value: d,
                  }),
                  (0, e.jsx)(_i, {
                    accountID: D.iA.accountid,
                    partnerID: c,
                    fnSetPartnerID: g,
                    strLabel: (0, s.we)(
                      "#EventEditor_SaleValveApproval_Request_Partner",
                    ),
                    strTooltip: (0, s.we)(
                      "#EventEditor_SaleValveApproval_Request_Partner_ttip",
                    ),
                  }),
                ],
              });
        }
        var hr = u(74535),
          It = u(36118),
          Ne = u(22230);
        function mr(a) {
          const t = M.mh.GetEditModel(),
            {
              bLoading: n,
              nAcceptingGuidelineAccount: i,
              bRequiresHostDisclaimer: o,
            } = (0, we.lA)(t.GetClanAccountID(), t.GetGID()),
            [l, r] = (0, O.q3)(() => [
              t.BHasSaleEnabled(),
              t.GetEventModel().jsondata.sale_presenters,
            ]);
          if (!l) return (0, e.jsx)(e.Fragment, {});
          const d = (0, ge.m)(t.GetClanSteamID(), !0),
            _ = !!i;
          return d ||
            (_ && (!o || (r == null ? void 0 : r.length) >= 1)) ||
            t.GetEventType() == L.ajI
            ? (0, e.jsx)(e.Fragment, { children: a.children })
            : n
              ? (0, e.jsx)(z.t, {})
              : _
                ? (0, e.jsxs)("div", {
                    className: Ne.GuidelinesNoticeCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: Ne.Intro,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ne.State,
                            children: (0, e.jsx)(It.Jlk, {}),
                          }),
                          (0, e.jsx)("div", {
                            className: Ne.Description,
                            children: (0, s.we)(
                              "#EventDisclaimer_GuidelineAccepted",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: Ne.Intro,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ne.State,
                            children: "\xA0",
                          }),
                          (0, e.jsxs)("div", {
                            className: Ne.Description,
                            children: [
                              (0, s.we)("#EventDisclaimer_desc"),
                              (0, e.jsx)("div", {
                                className: Ne.OpenGuidelinesBtnCtn,
                                children: (0, e.jsx)(p.jn, {
                                  onClick: (c) =>
                                    (0, U.pg)((0, e.jsx)(Ln, {}), (0, V.uX)(c)),
                                  children: (0, s.we)(
                                    "#EventDisclaimer_button_enter",
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    className: Ne.GuidelinesNoticeCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: Ne.Intro,
                        children: [" ", (0, s.we)("#EventSaleGuidelines_desc")],
                      }),
                      (0, e.jsx)("div", {
                        className: Ne.OpenGuidelinesBtnCtn,
                        children: (0, e.jsx)(p.jn, {
                          onClick: (c) =>
                            (0, U.pg)(
                              (0, e.jsx)(ji, { bCheckListReadOnly: !1 }),
                              (0, V.uX)(c),
                            ),
                          children: (0, s.we)("#EventSaleGuidelines_Review"),
                        }),
                      }),
                    ],
                  });
        }
        function _r(a) {
          const t = M.mh.GetEditModel(),
            { bLoading: n, nAcceptingGuidelineAccount: i } = (0, we.lA)(
              t.GetClanAccountID(),
              t.GetGID(),
            ),
            { bVisible: o } = (0, J._5)(t.GetEventModel()),
            { bVisible: l } = (0, J.Ao)(t.GetEventModel());
          return n || o || l
            ? null
            : (0, ge.m)(t.GetClanSteamID(), !0)
              ? (0, e.jsx)(gr, {})
              : i
                ? (0, e.jsx)(xi, {})
                : null;
        }
        function xi() {
          const a = M.mh.GetEditModel(),
            {
              rtAcceptanceTime: t,
              strSalePageApprovalHelpTicketReferenceCode: n,
            } = (0, we.lA)(a.GetClanAccountID(), a.GetGID()),
            i = (0, O.q3)(() => {
              var o;
              const l = a.GetEventModel().jsondata.sale_presenters;
              return (
                (l == null ? void 0 : l.length) > 0 &&
                ((o = l[0].localized_presenter_name) == null
                  ? void 0
                  : o.length) > 0 &&
                l[0].localized_presenter_name[0].length > 0
              );
            });
          return (0, e.jsxs)("div", {
            className: Ne.GuidelinesDoneCtn,
            children: [
              (0, e.jsxs)("div", {
                className: Ne.Text,
                children: [
                  (0, s.PP)(
                    "#EventSaleGuidelines_AlreadyReviewed",
                    (0, e.jsx)(_t.K4, { dateAndTime: t, bSingleLine: !0 }),
                  ),
                  !i &&
                    (0, e.jsxs)("div", {
                      className: Ne.OrganizerInfoNeeded,
                      children: [
                        (0, s.we)("#SalePresented_By_Instructions"),
                        " \u{1F846}",
                      ],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: Ne.ProcessButtons,
                children: [
                  (0, e.jsx)(p.$n, {
                    onClick: (o) =>
                      (0, U.pg)(
                        (0, e.jsx)(ji, { bCheckListReadOnly: !0 }),
                        (0, V.uX)(o),
                      ),
                    children: (0, s.we)("#EventSaleGuidelines_Review"),
                  }),
                  i
                    ? (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)(p.$n, {
                          onClick: (o) =>
                            (0, U.pg)((0, e.jsx)(Ln, {}), (0, V.uX)(o)),
                          children: (0, s.we)("#EventDisclaimer_button"),
                        }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)(p.jn, {
                          onClick: (o) =>
                            (0, U.pg)((0, e.jsx)(Ln, {}), (0, V.uX)(o)),
                          children: (0, s.we)("#EventDisclaimer_button_enter"),
                        }),
                      }),
                  !!n &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsx)(p.$n, {
                        onClick: (o) =>
                          (0, B.Id)(
                            o,
                            `${D.TS.HELP_BASE_URL}en/wizard/HelpRequest/${n}`,
                          ),
                        children: (0, s.we)(
                          "#EventEditor_SaleValveApproval_Request_Link",
                        ),
                      }),
                    }),
                  (0, e.jsx)(ge.E, {
                    clanSteamID: a.GetClanSteamID(),
                    children: (0, e.jsx)(pr, {}),
                  }),
                ],
              }),
            ],
          });
        }
        function pr(a) {
          const t = M.mh.GetEditModel(),
            n = t.GetClanAccountID(),
            i = t.GetGID(),
            [o, l, r] = (0, se.uD)(!1),
            {
              bLoading: d,
              bPublishRequiresValveApproval: _,
              nAccountApproved: c,
              bRequiresHostDisclaimer: g,
              fnSetStoreRequireHostDisclaimer: h,
            } = (0, we.g7)(n, i);
          return !_ || !c
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(p.$n, {
                    onClick: l,
                    children: (0, e.jsx)(je.Gq, {
                      toolTipContent:
                        "Make the partner re-request reviewing the sale page because we are allowing them to make further changes",
                      children: (0, e.jsx)("span", {
                        children: "Remove Reviewed Stats",
                      }),
                    }),
                  }),
                  (0, e.jsx)(F.EN, {
                    active: o,
                    children: (0, e.jsx)(vr, {
                      clanSteamID: t.GetClanSteamID(),
                      gidClanEvent: t.GetGID(),
                      closeModal: r,
                    }),
                  }),
                ],
              });
        }
        function vr(a) {
          const { clanSteamID: t, gidClanEvent: n, closeModal: i } = a,
            o = "Revert SALE PAGE Approval?",
            [l, r, d] = (0, we.hr)(),
            { fnRemoveApprovalAccount: _ } = (0, we.g7)(t.GetAccountID(), n),
            {
              fnSetAllowAddingAppsPackagesBundles: c,
              fnSetAllowChangingVanityURL: g,
              fnSetAllowMakingChangesToSalePage: h,
            } = (0, we.fp)(t.GetAccountID(), n),
            v = (0, xt.vs)();
          if (v.bLoading)
            return (0, e.jsx)(xt.Hh, {
              state: v,
              strDialogTitle: o,
              closeModal: i,
            });
          const m = () => {
            v.fnSetLoading(!0),
              c(!0),
              g(!0),
              h(!0),
              _(D.iA.accountid),
              d(n)
                .then((x) => {
                  x == Ze.R
                    ? i()
                    : (r(),
                      v.fnSetError(!0),
                      v.fnSetStrError("Failed to update Private Data: " + x));
                })
                .catch((x) => {
                  r(),
                    v.fnSetError(!0),
                    v.fnSetStrError((0, Be.H)(x).strErrorMsg);
                });
          };
          return (0, e.jsx)(F.o0, {
            strTitle: o,
            strDescription:
              "The sale is currently approved. This will revert this state and will require the sale operator to request permissions again. Are you sure?",
            onOK: m,
            strOKButtonText: "Yes, Approve",
            bDisableBackgroundDismiss: !0,
            closeModal: i,
            onCancel: r,
            bOKDisabled: !!v.bError,
            children: (0, e.jsx)("div", {
              children:
                "This will also permit them to make any changes to the sale page",
            }),
          });
        }
        function bi(a) {
          const t = M.mh.GetEditModel(),
            { bLoading: n, bPublishRequiresValveApproval: i } = (0, we.g7)(
              t.GetClanAccountID(),
              t.GetGID(),
            ),
            [o, l] = E.useState(void 0);
          return (
            E.useEffect(() => {
              n ||
                (o === void 0
                  ? l(!!i)
                  : o != !!i && t.SetDirty(C.IQ.jsondata_sales));
            }, [t, n, o, i]),
            !t.BHidden() || t.BPublished()
              ? null
              : (0, e.jsx)(vi, {
                  gidClanEvent: t.GetGID(),
                  clanSteamID: t.GetClanSteamID(),
                })
          );
        }
        function gr() {
          const a = M.mh.GetEditModel(),
            { nAcceptingGuidelineAccount: t } = (0, we.lA)(
              a.GetClanAccountID(),
              a.GetGID(),
            );
          return kt.WN.includes(a.GetClanAccountID())
            ? null
            : t
              ? (0, e.jsxs)("div", {
                  className: Ne.ValveOnlyGuidelineSummary,
                  children: [
                    (0, e.jsx)(xi, {}),
                    (0, e.jsxs)("div", {
                      className: Ne.SignedBy,
                      children: [
                        "Accepted by:\xA0",
                        (0, e.jsx)(os.B, {
                          accountID: t,
                          locToken: "#EventModTile_Signer",
                        }),
                      ],
                    }),
                    (0, e.jsx)(bi, {}),
                  ],
                })
              : (0, e.jsxs)("div", {
                  className: Ne.ValveOnlyGuidelineSummary,
                  children: [
                    "The event organizer has not yet accepted the agreements for this sale page. The next time that any non-Valve account attempts to edit this sale, they should be required to accept the agreements.",
                    (0, e.jsx)(bi, {}),
                  ],
                });
        }
        function ji(a) {
          const { bCheckListReadOnly: t, closeModal: n } = a,
            i = M.mh.GetEditModel(),
            {
              nAcceptingGuidelineAccount: o,
              strPrimaryContactName: l,
              strPrimaryContactEmail: r,
              fnSetAcceptingGuideLine: d,
              fnSetContactEmailAndName: _,
              strExternalSaleEventType: c,
            } = (0, we.lA)(i.GetClanAccountID(), i.GetGID()),
            [g, h, v] = (0, we.hr)(),
            m = !!o,
            [x, j] = E.useState(m),
            [S, y] = E.useState(m),
            [N, A] = E.useState(m),
            te = `${D.TS.PARTNER_BASE_URL}doc/store/promo/${c}_page`,
            oe = (0, s.we)(`#EventSaleGuidelines_doc_${c}`),
            [De, Se] = E.useState(l || ""),
            [$e, mt] = E.useState(r || ""),
            [et, gt] = E.useState(!1),
            [Je, Pt] = E.useState(null),
            Dt = x && S && N && De.length > 0 && $e.length > 0;
          return (0, e.jsx)(F.o0, {
            strTitle: (0, s.we)("#EventSaleGuideLines_title"),
            strDescription: (0, s.we)("#EventSaleGuidelines_desc"),
            bOKDisabled: !Dt || et,
            onOK: () => {
              t || d(D.iA.accountid),
                _(De, $e),
                !t && i.GetGID()
                  ? (gt(!0),
                    v(i.GetGID())
                      .then(n)
                      .catch((nt) => {
                        Pt((0, Be.H)(nt).strErrorMsg);
                      }))
                  : n && n();
            },
            onCancel: n,
            closeModal: n,
            children:
              et || Je
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      et &&
                        (0, e.jsx)(z.t, {
                          string: (0, s.we)("#Saving"),
                          size: "medium",
                          position: "center",
                        }),
                      !!Je && (0, e.jsx)("div", { children: Je }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    className: Ne.AgreementsCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)(p.Yh, {
                            label: (0, s.we)("#EventSaleGuidelines_rule_5"),
                            checked: x,
                            onChange: j,
                            disabled: t,
                          }),
                          (0, e.jsx)(p.Yh, {
                            label: (0, s.we)("#EventSaleGuidelines_rule_1"),
                            checked: S,
                            onChange: y,
                            disabled: t,
                          }),
                          (0, e.jsx)(p.Yh, {
                            label: (0, e.jsx)("span", {
                              style: { display: "inline" },
                              children: (0, s.PP)(
                                "#EventSaleGuidelines_rule_6",
                                (0, e.jsx)("a", {
                                  href: te,
                                  target: "_blank",
                                  children: oe,
                                }),
                              ),
                            }),
                            checked: N,
                            onChange: A,
                            disabled: t,
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: Ne.ContactSectionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ne.SectionTitle,
                            children: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_desc",
                            ),
                          }),
                          (0, e.jsx)(p.pd, {
                            placeholder: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_name",
                            ),
                            value: De,
                            onChange: (nt) => Se(nt.currentTarget.value),
                          }),
                          (0, e.jsx)(p.pd, {
                            placeholder: (0, s.we)(
                              "#EventSaleGuidelines_PrimaryContact_email",
                            ),
                            value: $e,
                            onChange: (nt) => mt(nt.currentTarget.value),
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        }
        function Ln(a) {
          var t;
          const { closeModal: n } = a,
            i = M.mh.GetEditModel(),
            [o, l] = E.useState(!1),
            r = (0, O.q3)(
              () => i.GetEventModel().jsondata.sale_presenters || [],
            ),
            [d, _] = E.useState(r);
          return (0, e.jsxs)(F.o0, {
            strTitle: (0, s.we)("#EventDisclaimer_title"),
            strDescription: (0, s.we)("#EventDisclaimer_desc_details"),
            onCancel: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled:
              !o &&
              (d.length == 0 ||
                ((t = d[0].url) == null ? void 0 : t.length) == 0 ||
                d.some((c) => !p.pd.validateUrl(c.url)) ||
                d.some((c) => {
                  var g;
                  return !(
                    ((g = c.localized_presenter_name[L.Bhc]) == null
                      ? void 0
                      : g.length) > 0
                  );
                })),
            onOK: () => {
              (i.GetEventModel().jsondata.sale_presenters = d),
                i.SetDirty(C.IQ.jsondata_sales),
                n();
            },
            children: [
              (0, e.jsx)(Qt.$A, { editModel: i, eInitLangLanguage: L.Bhc }),
              (0, e.jsx)(Yt.A, {
                items: d,
                onDelete: (c) => _(d.length == 1 ? [] : [...d.splice(c, 1)]),
                onReorder: () => _([...d]),
                render: (c, g) =>
                  (0, e.jsx)(Sr, {
                    presenter: c,
                    setPresenter: (h) => {
                      (d[g] = { ...h }), _([...d]);
                    },
                  }),
              }),
              (0, e.jsx)(p.$n, {
                onClick: () => {
                  let c = Math.floor(1 + Math.random() * 1e5);
                  for (; d && d.some((g) => g.unique_id === c); )
                    c = Math.floor(1 + Math.random() * 1e5);
                  _([
                    ...d,
                    {
                      unique_id: c,
                      localized_presenter_name: new Array(L.bP9),
                      url: "",
                    },
                  ]);
                },
                children: (0, s.we)("#EventDisclaimer_add"),
              }),
              (d == null ? void 0 : d.length) > 0 &&
                (0, e.jsxs)("div", {
                  className: Ne.PresenterPreviewCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: Ne.PresenterPreviewDesc,
                      children: (0, s.we)("#EventDisclaimer_preview"),
                    }),
                    (0, e.jsx)(hr.W, { rgPresenters: d }),
                  ],
                }),
              (0, e.jsx)(ge.E, {
                clanSteamID: i.GetClanSteamID(),
                children: (0, e.jsx)(p.$n, {
                  onClick: () => {
                    _([]), l(!0);
                  },
                  children:
                    "(VO) Clear Presenters to hide event organizers display",
                }),
              }),
            ],
          });
        }
        function Sr(a) {
          const { presenter: t, setPresenter: n } = a,
            [i] = (0, O.q3)(() => [Xa.O.Get().GetCurEditLanguage()]);
          return (0, e.jsxs)("div", {
            className: Ne.PresenterInfoCtn,
            children: [
              (0, e.jsx)(p.pd, {
                label: (0, s.we)("#EventDisclaimer_name"),
                type: "text",
                value: s.NT.Get(t.localized_presenter_name, i) || "",
                onChange: (o) => {
                  (t.localized_presenter_name = s.NT.Set(
                    t.localized_presenter_name,
                    i,
                    o.currentTarget.value,
                  )),
                    n(t);
                },
              }),
              (0, e.jsx)(p.pd, {
                label: (0, s.we)("#EventDisclaimer_url"),
                type: "text",
                mustBeURL: !0,
                placeholder: "https://",
                value: t.url,
                onChange: (o) => {
                  (t.url = o.currentTarget.value), n(t);
                },
              }),
            ],
          });
        }
        var Er = u(34336),
          fr = Object.defineProperty,
          xr = (a, t, n) =>
            t in a
              ? fr(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          $a = (a, t, n) => xr(a, typeof t != "symbol" ? t + "" : t, n),
          Ia = ((a) => (
            (a.EditInfo = "apprighteditinfo"),
            (a.Publish = "apprightpublish"),
            (a.ViewErrorData = "apprightviewerrordata"),
            (a.Download = "apprightdownload"),
            (a.UploadCDKeys = "apprightuploadcdkeys"),
            (a.GenerateCDKeys = "apprightgeneratecdkeys"),
            (a.ViewFinancials = "apprightviewfinancials"),
            (a.ManageCEG = "apprightmanageceg"),
            (a.ManagingSigning = "apprightmanagesigning"),
            (a.ManageCDKeys = "apprightmanagecdkeys"),
            (a.EditMarketing = "apprighteditmarketing"),
            (a.EconomySupport = "apprighteconomysupport"),
            (a.EconomySupportSupervisor = "apprighteconomysupportsupervisor"),
            (a.ManagePricing = "appmanagepricing"),
            (a.BroadcastLive = "apprightbroadcastlive"),
            (a.AppRightEditStoreDisplayContent =
              "apprighteditstoredisplaycontent"),
            (a.AppRightViewMarketingTraffic = "apprightviewmarketingtraffic"),
            a
          ))(Ia || {}),
          br = ((a) => (
            (a.ManagerUsers = "pubrightmanageusers"),
            (a.ActualAuthority = "pubrightactualauthority"),
            (a.ViewFinancials = "pubrightviewfinancials"),
            (a.ApproveWalletFunding = "pubrightapprovewalletfunding"),
            (a.ManageLicensedSites = "pubrightmanagelicensedsites"),
            a
          ))(br || {});
        const qt = class Ha {
          static ConstructAppRightsMap() {
            const t = new Map();
            return Ha.AppRights.forEach((n) => t.set(n.token, n)), t;
          }
          static ConstructPubRightsMap() {
            const t = new Map();
            return Ha.PubRights.forEach((n) => t.set(n.token, n)), t;
          }
          static GetAppRightFlags(t) {
            let n = 0;
            return (
              t.forEach((i) => {
                n |= Ha.MapAppRights.get(i).flag;
              }),
              n
            );
          }
          static GetPublisherRightFlags(t) {
            let n = 0;
            return (
              t.forEach((i) => {
                n |= Ha.MapPubRights.get(i).flag;
              }),
              n
            );
          }
        };
        $a(qt, "AppRights", [
          { flag: 1, token: "apprighteditinfo" },
          { flag: 2, token: "apprightpublish" },
          { flag: 4, token: "apprightviewerrordata" },
          { flag: 8, token: "apprightdownload" },
          { flag: 16, token: "apprightuploadcdkeys" },
          { flag: 32, token: "apprightgeneratecdkeys" },
          { flag: 64, token: "apprightviewfinancials" },
          { flag: 128, token: "apprightmanageceg" },
          { flag: 256, token: "apprightmanagesigning" },
          { flag: 512, token: "apprightmanagecdkeys" },
          { flag: 1024, token: "apprighteditmarketing" },
          { flag: 2048, token: "apprighteconomysupport" },
          { flag: 4096, token: "apprighteconomysupportsupervisor" },
          { flag: 8192, token: "appmanagepricing" },
          { flag: 16384, token: "apprightbroadcastlive" },
          { flag: 32768, token: "apprightviewmarketingtraffic" },
          { flag: 65536, token: "apprighteditstoredisplaycontent" },
        ]),
          $a(qt, "MapAppRights", qt.ConstructAppRightsMap()),
          $a(qt, "PubRights", [
            { flag: 1, token: "pubrightmanageusers" },
            { flag: 2, token: "pubrightactualauthority" },
            { flag: 4, token: "pubrightviewfinancials" },
            { flag: 8, token: "pubrightapprovewalletfunding" },
            { flag: 16, token: "pubrightmanagelicensedsites" },
          ]),
          $a(qt, "MapPubRights", qt.ConstructPubRightsMap());
        let Bn = qt;
        var jr = u(39905),
          Cr = u(49236);
        function wr(a) {
          const { editModel: t } = a,
            [n] = (0, O.q3)(() => [
              t.GetEventModel().jsondata.sale_named_section_background_styles,
            ]),
            [i, o, l] = (0, se.uD)(),
            [r, d] = (0, E.useState)(void 0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.$n, {
                onClick: o,
                children: (0, s.we)("#Sale_ManageBackgroundStyles"),
              }),
              (0, e.jsx)(F.EN, {
                active: i,
                children: (0, e.jsxs)(F.o0, {
                  strTitle: (0, s.we)("#Sale_ManageBackgroundStyles"),
                  strDescription: (0, s.we)(
                    "#Sale_ManageBackgroundStyles_desc",
                  ),
                  bAlertDialog: !0,
                  closeModal: l,
                  children: [
                    (0, e.jsx)(p.$n, {
                      onClick: () => {
                        const _ = {};
                        do
                          _.background_style_identifier =
                            "CustomBackground_" +
                            Math.floor(1 + Math.random() * 1e5);
                        while (
                          n &&
                          n.find(
                            (c) =>
                              c.background_style_identifier ==
                              _.background_style_identifier,
                          )
                        );
                        n
                          ? (t.GetEventModel().jsondata.sale_named_section_background_styles =
                              [
                                ...t.GetEventModel().jsondata
                                  .sale_named_section_background_styles,
                                _,
                              ])
                          : (t.GetEventModel().jsondata.sale_named_section_background_styles =
                              [_]),
                          t.SetDirty(C.IQ.jsondata_sales);
                      },
                      children: jr.Z.Localize("#Button_Create"),
                    }),
                    !n || n.length == 0
                      ? (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#Sale_ManageBackgroundStyles_none",
                          ),
                        })
                      : (0, e.jsx)("ul", {
                          children: n.map((_, c) =>
                            (0, e.jsx)(
                              "ol",
                              {
                                onClick: () => d(c),
                                children: (0, e.jsx)("p", {
                                  children: _.background_style_identifier,
                                }),
                              },
                              _.background_style_identifier,
                            ),
                          ),
                        }),
                    r !== void 0 &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("hr", {}),
                          (0, e.jsx)(p.JU, {
                            children: (0, s.we)(
                              "#Sale_ManageBackgroundStyles_edit",
                              n[r].background_style_identifier,
                            ),
                          }),
                          (0, e.jsx)(Cr.CF, {
                            editModel: t,
                            backgroundSection: n[r],
                            bHasBackgroundImageControls: !0,
                            bDisallowNamedStyles: !0,
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        function Dr(a) {
          const { salePage: t, updateLandingPage: n } = a,
            i = M.mh.GetEditModel(),
            [o, l] = (0, O.q3)(() => [
              i.GetEventModel().jsondata.sale_opt_in_page_name,
              i.GetEventModel().jsondata.sale_show_creator,
            ]);
          return (0, e.jsxs)("div", {
            className: Ce.Columns,
            children: [
              (0, e.jsxs)("div", {
                className: Ce.LeftCol,
                children: [
                  t && (0, e.jsx)(Gr, {}),
                  n && (0, e.jsx)(Lr, {}),
                  t && (0, e.jsx)(Ar, {}),
                ],
              }),
              (0, e.jsxs)("div", {
                className: Ce.RightCol,
                children: [
                  t && (0, e.jsx)(Ir, {}),
                  t &&
                    (0, e.jsx)(ge.E, {
                      clanSteamID: i.GetClanSteamID(),
                      className: Q.EditPreviewButton,
                      children: (0, e.jsx)(p.pd, {
                        type: "text",
                        label: (0, s.we)("#Sale_OptInPageName"),
                        tooltip: (0, s.we)("#Sale_OptInPageName_ttip"),
                        value: o,
                        onChange: (r) => {
                          (0, $.h5)(() => {
                            (i.GetEventModel().jsondata.sale_opt_in_page_name =
                              r.target.value),
                              i.SetDirty(C.IQ.jsondata_sales);
                          });
                        },
                      }),
                    }),
                  t &&
                    (0, e.jsx)(je.he, {
                      toolTipContent: "#Sale_ShowCreatorHome_ttip",
                      direction: "top",
                      children: (0, e.jsx)("div", {
                        className: Q.InputBorder,
                        children: (0, e.jsx)(p.RF, {
                          onChange: (r) => {
                            (0, $.h5)(() => {
                              (i.GetEventModel().jsondata.sale_show_creator =
                                r),
                                i.SetDirty(C.IQ.jsondata_sales);
                            });
                          },
                          label: (0, s.we)("#Sale_ShowCreatorHome"),
                          checked: l,
                        }),
                      }),
                    }),
                  t &&
                    (0, e.jsxs)(ge.E, {
                      clanSteamID: i.GetClanSteamID(),
                      children: [
                        (0, e.jsx)(Tr, {}),
                        (0, e.jsx)(yr, {}),
                        (0, e.jsx)(je.he, {
                          toolTipContent:
                            "Update what a partner is able to change after a sale page is reviewed by Valve",
                          children: (0, e.jsx)(p.$n, {
                            onClick: (r) =>
                              (0, U.pg)(
                                (0, e.jsx)(rr, {
                                  clanSteamID: i.GetClanSteamID(),
                                  gidClanEvent: i.GetGID(),
                                }),
                                (0, V.uX)(r),
                              ),
                            children: "Update Sale Page Editability",
                          }),
                        }),
                      ],
                    }),
                  (0, e.jsx)(ge.E, {
                    clanSteamID: i.GetClanSteamID(),
                    children: (0, e.jsx)(Er.i, { editModel: i }),
                  }),
                  (0, e.jsx)(ge.E, {
                    clanSteamID: i.GetClanSteamID(),
                    children: (0, e.jsx)(wr, { editModel: i }),
                  }),
                ],
              }),
            ],
          });
        }
        function yr(a) {
          const t = M.mh.GetEditModel();
          return (0, e.jsx)(je.he, {
            toolTipContent:
              "Deep discount sale events are curated by Valve to promote successful older games, typically with a 90% discount",
            direction: "top",
            children: (0, e.jsx)("div", {
              className: Q.InputBorder,
              children: (0, e.jsx)(p.RF, {
                onChange: (n) => t.SetTag("vo_deep_discount_sale", n),
                checked: t.GetEventModel().BHasTag("vo_deep_discount_sale"),
                label: "(VO) This is a deep discount event?",
              }),
            }),
          });
        }
        function Tr(a) {
          var t, n;
          const i = M.mh.GetEditModel(),
            [o, l, r, d] = (0, O.q3)(() => {
              var v, m, x;
              return [
                (v = i.GetEventModel().jsondata.ownership_requirement_info) ==
                null
                  ? void 0
                  : v.bLockedToAppOwners,
                (m = i.GetEventModel().jsondata.ownership_requirement_info) ==
                null
                  ? void 0
                  : m.strRedirectURL,
                i.GetEventModel().jsondata.sale_use_subscription_layout,
                (x = i.GetEventModel().jsondata.app_right_requirement_info) ==
                null
                  ? void 0
                  : x.bLockedToPartnerAppRights,
              ];
            }),
            [_, c] = E.useState(
              i.GetEventModel().BIsLockedToGameOwners()
                ? (t = i.GetEventModel().GetRequiredAppIDs()) == null
                  ? void 0
                  : t.join(",")
                : "",
            ),
            [g, h] = E.useState(
              i.GetEventModel().BIsLockedToGameOwners()
                ? (n = i.GetEventModel().GetRequiredPackageIDs()) == null
                  ? void 0
                  : n.join(",")
                : "",
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(je.he, {
                toolTipContent: "#Sale_OwnershipRestrictions_ttip",
                direction: "top",
                children: (0, e.jsx)("div", {
                  className: Q.InputBorder,
                  children: (0, e.jsx)(p.RF, {
                    onChange: (v) => {
                      (0, $.h5)(() => {
                        const m = i.GetEventModel().jsondata;
                        m.ownership_requirement_info
                          ? (m.ownership_requirement_info.bLockedToAppOwners =
                              v)
                          : (m.ownership_requirement_info = {
                              bLockedToAppOwners: v,
                              rgRequiredAppIDs: [],
                              rgRequiredPackageIDs: [],
                              strRedirectURL: "",
                            }),
                          i.SetDirty(C.IQ.jsondata_sales);
                      });
                    },
                    label: (0, s.we)("#Sale_OwnershipRestrictions"),
                    checked: o,
                  }),
                }),
              }),
              o &&
                (0, e.jsxs)(E.Fragment, {
                  children: [
                    (0, e.jsx)(p.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_RequiredApps"),
                      tooltip: (0, s.we)("#Sale_RequiredApps_ttip"),
                      onChange: (v) => {
                        _ != v.target.value &&
                          (c(v.target.value),
                          (0, $.h5)(() => {
                            const m = i.GetEventModel().GetRequiredAppIDs(),
                              x = v.target.value
                                .split(",")
                                .map(Number)
                                .filter((j) => j > 0);
                            m.splice(0, m.length, ...x),
                              i.SetDirty(C.IQ.jsondata_sales);
                          }));
                      },
                      value: _,
                    }),
                    (0, e.jsx)(p.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_RequiredPackages"),
                      tooltip: (0, s.we)("#Sale_RequiredPackages_ttip"),
                      onChange: (v) => {
                        g != v.target.value &&
                          (h(v.target.value),
                          (0, $.h5)(() => {
                            const m = i.GetEventModel().GetRequiredPackageIDs(),
                              x = v.target.value
                                .split(",")
                                .map(Number)
                                .filter((j) => j > 0);
                            m.splice(0, m.length, ...x),
                              i.SetDirty(C.IQ.jsondata_sales);
                          }));
                      },
                      value: g,
                    }),
                    (0, e.jsx)(p.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_OwnershipLockRedirect"),
                      tooltip: (0, s.we)("#Sale_OwnershipLockRedirect_ttip"),
                      onChange: (v) => {
                        l != v.target.value &&
                          (0, $.h5)(() => {
                            (i.GetEventModel().jsondata.ownership_requirement_info.strRedirectURL =
                              v.target.value),
                              i.SetDirty(C.IQ.jsondata_sales);
                          });
                      },
                      value: l,
                    }),
                    (0, e.jsx)(ge.E, {
                      clanSteamID: i.GetClanSteamID(),
                      children: (0, e.jsx)(p.Yh, {
                        onChange: (v) => {
                          (0, $.h5)(() => {
                            (i.GetEventModel().jsondata.sale_use_subscription_layout =
                              v),
                              i.SetDirty(C.IQ.jsondata_sales);
                          });
                        },
                        label:
                          "(VO) " + (0, s.we)("#Sale_UseSubscriptionLayout"),
                        tooltip: (0, s.we)("#Sale_UseSubscriptionLayout_ttip"),
                        checked: !!r,
                      }),
                    }),
                  ],
                }),
              (0, e.jsx)(je.he, {
                toolTipContent: "#Sale_PartnerAppEditRestrictions_ttip",
                direction: "top",
                children: (0, e.jsx)("div", {
                  className: Q.InputBorder,
                  children: (0, e.jsx)(p.RF, {
                    onChange: (v) => {
                      (0, $.h5)(() => {
                        const m = i.GetEventModel().jsondata;
                        m.app_right_requirement_info
                          ? (m.app_right_requirement_info.bLockedToPartnerAppRights =
                              v)
                          : (m.app_right_requirement_info = {
                              bLockedToPartnerAppRights: v,
                              nAppRightFlag: Bn.GetAppRightFlags([Ia.EditInfo]),
                            }),
                          i.SetDirty(C.IQ.jsondata_sales);
                      });
                    },
                    label: (0, s.we)("#Sale_PartnerAppEditRestrictions"),
                    checked: !!d,
                  }),
                }),
              }),
            ],
          });
        }
        function Ir(a) {
          const t = M.mh.GetEditModel(),
            n = (0, O.q3)(
              () => t.GetEventModel().jsondata.sale_discount_event_id,
            ),
            i = async () => {
              const o = new Set(),
                l = new Array();
              t.GetEventModel().jsondata.sale_sections.forEach((g) => {
                g.capsules.forEach(async (h) => {
                  h.type === "bundle"
                    ? l.push(pt.A.Get().QueueBundleRequest(Number(h.id), {}))
                    : h.type === "sub" &&
                      l.push(pt.A.Get().QueuePackageRequest(Number(h.id), {}));
                });
              }),
                await Promise.all(l),
                t.GetEventModel().jsondata.sale_sections.forEach((g) => {
                  g.capsules.forEach(async (h) => {
                    if (h.type === "bundle" || h.type === "sub") {
                      const v =
                        h.type === "bundle"
                          ? pt.A.Get().GetBundle(Number(h.id))
                          : pt.A.Get().GetPackage(Number(h.id));
                      v && v.GetIncludedAppIDs().forEach((m) => o.add(m));
                    } else o.add(Number(h.id));
                  });
                });
              let r = Array.from(o);
              r.sort();
              const d = new FormData();
              d.append("sessionid", (0, D.KC)()),
                d.append("name", "[AUTO] " + t.GetName()),
                d.append("event", "1"),
                d.append("type", "discount"),
                d.append("header", t.GetName()),
                d.append("appids", r.join(",")),
                d.append("start_date", t.GetEventStartTime().toString()),
                d.append("end_date", t.GetEventEndTime().toString()),
                d.append("description", "#discount_desc_preset_special"),
                t.GetEventModel().jsondata.sale_discount_event_id &&
                  d.append(
                    "discount_id",
                    t
                      .GetEventModel()
                      .jsondata.sale_discount_event_id.toString(),
                  );
              const c =
                (
                  await le().post(
                    D.TS.COMMUNITY_BASE_URL +
                      "actions/ajaxcreateupdatediscountevent",
                    d,
                    { withCredentials: !0 },
                  )
                ).data.discountid ||
                t.GetEventModel().jsondata.sale_discount_event_id;
              t.GetEventModel().jsondata.sale_discount_event_id ||
                (t.GetEventModel().jsondata.sale_discount_event_id = c),
                (0, U.pg)(
                  (0, e.jsx)(ja.t, {
                    editModel: t,
                    bSkipChecks: !0,
                    partnerEventEditorStore: M.mh,
                    OnSuccess: () => {
                      window.open(
                        D.TS.PARTNER_BASE_URL + "admin/editdiscountevent/" + c,
                      );
                    },
                  }),
                  window,
                );
            };
          return (0, e.jsxs)(ge.E, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: Q.EditPreviewButton,
            children: [
              (0, e.jsxs)("div", {
                className: Q.EventEditorTextTitle,
                children: [
                  (0, s.we)("#Sale_CreateUpdateDiscountEventTitle"),
                  (0, e.jsx)(Z.o, {
                    tooltip: (0, s.we)(
                      "#Sale_CreateUpdateDiscountEventTitle_ttip",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)(p.jn, {
                onClick: i,
                children: t.GetEventModel().jsondata.sale_discount_event_id
                  ? (0, s.we)(
                      "#Sale_UpdateDiscountEvent",
                      t.GetEventModel().jsondata.sale_discount_event_id,
                    )
                  : (0, s.we)("#Sale_CreateDiscountEvent"),
              }),
              !!n &&
                (0, e.jsx)("a", {
                  href: `${D.TS.PARTNER_BASE_URL}admin/editdiscountevent/${n}`,
                  target: "_blank",
                  children: "Edit Discount Event",
                }),
            ],
          });
        }
        function Ar(a) {
          const t = M.mh.GetEditModel(),
            [n, i, o, l, r] = (0, O.q3)(() => {
              const g = t.GetEventModel().jsondata;
              return [
                g.sale_section_disable_capitalize,
                g.sale_section_font_size,
                g.sale_font,
                g.sale_font_weight,
                g.sale_associated_advertising_appid,
              ];
            }),
            d = [
              { label: "Default", data: { fontFamily: "" } },
              {
                label: "Default, Bold",
                data: {
                  fontFamily: "'Motiva Sans', 'Play', sans-serif",
                  fontWeight: "bold",
                },
              },
              {
                label: "Jolly Lodger (Halloween)",
                data: {
                  fontFamily:
                    "'Jolly Lodger', 'New Rocker', 'Chonburi', 'Motiva Sans'",
                },
              },
              {
                label: "Sigmar One",
                data: { fontFamily: "'Sigmar One', sans-serif" },
              },
            ].map((g) => ({
              ...g,
              label: (0, e.jsx)("div", {
                style: { ...g.data },
                children: g.label,
              }),
            })),
            _ = d.find((g) => g.data.fontFamily == o && g.data.fontWeight == l),
            c = _ && _.data;
          return (0, e.jsxs)(ge.E, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            children: [
              (0, e.jsx)(p.m, {
                label: (0, s.we)("#Sale_SaleFont"),
                tooltip: (0, s.we)("#Sale_SaleFont_ttip"),
                strDropDownClassName: Q.DropDownScroll,
                rgOptions: d,
                selectedOption: c,
                onChange: (g) => {
                  (0, $.h5)(() => {
                    (t.GetEventModel().jsondata.sale_font = g.data.fontFamily),
                      (t.GetEventModel().jsondata.sale_font_weight =
                        g.data.fontWeight),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                contextMenuPositionOptions: { bDisablePopTop: !0 },
              }),
              (0, e.jsx)(p.pd, {
                type: "text",
                label: (0, s.we)("#Sale_SectionTitleFontSize"),
                tooltip: (0, s.we)("#Sale_SectionTitleFontSize_ttip"),
                onChange: (g) => {
                  (0, $.h5)(() => {
                    (t.GetEventModel().jsondata.sale_section_font_size = Number(
                      g.target.value,
                    )),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                value: i,
              }),
              (0, e.jsx)(p.Yh, {
                label: (0, s.we)("#Sale_DontCapitalizeSectionTitles"),
                tooltip: (0, s.we)("#Sale_DontCapitalizeSectionTitles_ttip"),
                onChange: (g) => {
                  (0, $.h5)(() => {
                    (t.GetEventModel().jsondata.sale_section_disable_capitalize =
                      g),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                checked: n,
              }),
              (0, e.jsx)(p.pd, {
                type: "number",
                label: (0, s.we)("#Sale_AdvertisingApp_ID"),
                tooltip: (0, s.we)("#Sale_AdvertisingApp_ID_ttip"),
                onChange: (g) => {
                  (0, $.h5)(() => {
                    (t.GetEventModel().jsondata.sale_associated_advertising_appid =
                      Number(g.target.value)),
                      t.SetDirty(C.IQ.jsondata_sales);
                  });
                },
                value: r,
              }),
            ],
          });
        }
        function Gr(a) {
          const t = M.mh.GetEditModel(),
            { bAllowChangingVanityURL: n, bAllowMakingChangesToSalePage: i } =
              (0, we.fp)(t.GetClanAccountID(), t.GetGID()),
            [o, l, r] = (0, O.q3)(() => [
              t.GetEventModel().jsondata.sale_vanity_id,
              t.GetEventModel().jsondata
                .sale_vanity_id_valve_approved_for_sale_subpath,
              t.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub,
            ]),
            { creatorHome: d } = (0, dt.FV)(t.GetClanAccountID());
          let _ = null;
          return (
            o && !l
              ? d
                ? (_ = d.GetCreatorHomeURL("publisher") + "sale/" + o)
                : (_ = `${D.TS.STORE_BASE_URL}curator/${t.GetClanAccountID()}/sale/${o}`)
              : o && l && (_ = D.TS.STORE_BASE_URL + "sale/" + o),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(p.pd, {
                  type: "text",
                  label: (0, s.we)("#Sale_VanityID"),
                  tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                  onChange: (c) => t.SetSaleVanityID(c.target.value),
                  value: o,
                  disabled: r || !n || !i,
                }),
                t.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub &&
                  (0, e.jsx)("div", {
                    className: "LongURL Note",
                    children:
                      "The vanity URL for this sale page is automatically set based on its content hub configuration. Adjust the settings under Content Hub Settings to change this behavior.",
                  }),
                _
                  ? (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("span", {
                          className: "DialogLabel",
                          children: (0, s.we)("#Sale_VanityID_Link"),
                        }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("a", {
                          href: _,
                          className: "LongURL",
                          target: D.TS.IN_CLIENT ? "" : "_blank",
                          children: _,
                        }),
                      ],
                    })
                  : (0, e.jsx)("div", {
                      className: Jt.ErrorStylesWithIcon,
                      children: (0, s.we)(
                        "#EventEditor_SaleNotReady_SaleVanity_ttip",
                      ),
                    }),
                (0, e.jsx)(ge.E, {
                  requireAdmin: !0,
                  clanSteamID: t.GetClanSteamID(),
                  children: (0, e.jsx)(p.Yh, {
                    label: (0, s.we)("#Sale_ValveTopSalePath"),
                    tooltip: (0, s.we)("#Sale_ValveTopSalePath_ttip"),
                    onChange: (c) => {
                      (0, $.h5)(() => {
                        (t.GetEventModel().jsondata.sale_vanity_id_valve_approved_for_sale_subpath =
                          c),
                          t.SetDirty(C.IQ.jsondata_sales);
                      });
                    },
                    checked: l,
                  }),
                }),
              ],
            })
          );
        }
        function Lr(a) {
          const t = M.mh.GetEditModel(),
            n = (0, O.q3)(
              () =>
                t.GetEventModel().jsondata.sale_update_landing_page_vanity_id,
            ),
            [i, o] = (0, J.TB)(t.GetClanAccountID()),
            [l] = (0, pe.t7)(o.appid, { include_basic_info: !0 });
          if (i || !l) return;
          const r =
            n != null && n.length ? l.GetStorePageURL() + "/" + n : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.pd, {
                type: "text",
                label: (0, s.we)("#Sale_VanityID"),
                tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                onChange: (d) =>
                  t.SetSaleUpdateLandingPageVanityID(d.target.value),
                value: n,
              }),
              r
                ? (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("span", {
                        className: "DialogLabel",
                        children: (0, s.we)("#Sale_VanityID_Link"),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("a", {
                        href: r,
                        className: "LongURL",
                        target: D.TS.IN_CLIENT ? "" : "_blank",
                        children: r,
                      }),
                    ],
                  })
                : (0, e.jsx)("div", {
                    className: Jt.ErrorStylesWithIcon,
                    children: (0, s.we)(
                      "#EventEditor_SaleNotReady_UpdateLandingPage_ttip",
                    ),
                  }),
            ],
          });
        }
        var Ci = u(87426),
          Nn = u(15736);
        function At(a) {
          const {
              strSectionId: t,
              hasMinimize: n,
              strTitle: i,
              children: o,
              strToolTip: l,
              valveOnly: r,
              valveOnlyClanSteamID: d,
              requireAdmin: _,
              dataToCopy: c,
            } = a,
            g = (0, O.q3)(() => n && (0, ct.Nx)(t));
          if (d && !(0, ge.m)(d, _)) return null;
          const h = n
            ? (v) => {
                (0, ct.mi)(t), v.preventDefault(), v.stopPropagation();
              }
            : void 0;
          return (0, e.jsx)(Kt, {
            strSectionId: t,
            children: (0, e.jsxs)("div", {
              id: t,
              className: (0, b.A)({
                [Ce.SettingCtn]: !0,
                [Ce.ValveOnly]: r || !!d,
              }),
              children: [
                (0, e.jsxs)("div", {
                  className: (0, b.A)(Ce.Title, n && Ce.HasHover),
                  onClick: h,
                  children: [
                    i,
                    l && (0, e.jsx)(Z.o, { tooltip: l }),
                    !!c &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(Ci.R6, {
                            dataToCopy: Nn.E.k_EventData_SubMenu,
                          }),
                          (0, e.jsx)(Ci.oO, {
                            dataToPaste: Nn.E.k_EventData_SubMenu,
                          }),
                        ],
                      }),
                    n &&
                      (0, e.jsx)(ls.pn, {
                        bIsMinimized: g,
                        fnToggleMinimize: () => (0, ct.mi)(t),
                      }),
                  ],
                }),
                !g && o,
              ],
            }),
          });
        }
        var ha = u(88748);
        function Br(a) {
          const { editModel: t } = a,
            [n, i] = (0, O.q3)(() => [
              t.GetEventModel().BIsNextFest(),
              t.GetEventModel().jsondata.sale_ml_recommender_delay_hours,
            ]);
          return n
            ? (0, e.jsxs)("div", {
                className: Ce.SettingCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: Ce.Title,
                    children: "Next Fest",
                  }),
                  "For the Live Next Fest event make sure to clone, review and operate the Next Fest event using:",
                  (0, e.jsx)("a", {
                    target: "_blank",
                    href: "https://confluence.valve.org/display/SteamBiz/Next+Fest+Launch+Checklist",
                    children: " Operations Checklist",
                  }),
                  (0, e.jsxs)("div", {
                    className: ha.WarningContainer,
                    children: [
                      (0, e.jsx)(Nr, {
                        editModel: t,
                        fnPredicate: (o) =>
                          !(o.jsondata.sale_ml_recommender_delay_hours > 0),
                        fnFixIt: (o) =>
                          (o.jsondata.sale_ml_recommender_delay_hours = 48),
                        fixItText: "Set to 48 hours",
                        children: () =>
                          (0, e.jsx)("span", {
                            children:
                              "Next Fest should have ML Recommender Delay set.",
                          }),
                      }),
                      (0, e.jsx)(wi, {
                        editModel: t,
                        fnPredicate: (o) =>
                          (0, ae.ye)(o.section_type) && !o.show_as_demos,
                        fnFixIt: (o) => (o.show_as_demos = !0),
                        children: (o) =>
                          (0, e.jsxs)("span", {
                            children: [
                              "There are ",
                              o,
                              ` that don't have the "Show demo information" checkbox checked.`,
                            ],
                          }),
                      }),
                      (0, e.jsx)(wi, {
                        editModel: t,
                        fnPredicate: (o) =>
                          (0, ae.ye)(o.section_type) &&
                          !o.prefer_demo_store_page,
                        fnFixIt: (o) => (o.prefer_demo_store_page = !0),
                        children: (o) =>
                          (0, e.jsxs)("span", {
                            children: [
                              "There are ",
                              o,
                              ` that don't have the "Prefer demo standalone store pages" checkbox checked.`,
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(p.pd, {
                    type: "number",
                    mustBeNumeric: !0,
                    rangeMin: 0,
                    label: "Randomization delay (hours)",
                    tooltip:
                      "The number of hours from the start of Next Fest to show the items in random order instead of ML recommended order",
                    onChange: (o) => {
                      (t.GetEventModel().jsondata.sale_ml_recommender_delay_hours =
                        Number(o.target.value)),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    placeholder: String(1e4),
                    value: i,
                  }),
                ],
              })
            : null;
        }
        const Nr = (0, R.PA)((a) => {
            const {
              editModel: t,
              fnPredicate: n,
              fnFixIt: i,
              fixItText: o,
              children: l,
            } = a;
            if (!(n == null ? void 0 : n(t.GetEventModel()))) return null;
            const d = () => {
              i(t.GetEventModel()), t.SetDirty(C.IQ.jsondata_sales);
            };
            return (0, e.jsxs)("div", {
              className: ha.Warning,
              children: [
                l(),
                (0, e.jsx)("div", {
                  className: ha.Buttons,
                  children:
                    i &&
                    (0, e.jsx)(p.$n, {
                      onClick: () => d(),
                      children: o || "Fix it",
                    }),
                }),
              ],
            });
          }),
          wi = (0, R.PA)((a) => {
            const {
                editModel: t,
                fnPredicate: n,
                fnFixIt: i,
                fixItText: o,
                children: l,
              } = a,
              d = t.GetSaleSections().filter(n);
            if (d.length == 0) return null;
            const _ = 25,
              c = (0, e.jsx)(e.Fragment, {
                children: d
                  .slice(0, _)
                  .map((v, m) =>
                    (0, e.jsx)(
                      "div",
                      {
                        children: (0, e.jsx)(Da.fi, {
                          eventModel: t.GetEventModel(),
                          saleSection: v,
                          editLanguage: t.GetCurEditLanguage(),
                          index: m,
                        }),
                      },
                      v.unique_id,
                    ),
                  )
                  .concat(
                    d.length > _
                      ? [(0, e.jsx)("div", { children: "..." }, "elipses")]
                      : [],
                  ),
              }),
              g = (0, e.jsx)(je.Gq, {
                toolTipContent: c,
                children: (0, e.jsxs)("span", {
                  className: ha.TooltipIndicator,
                  children: [d.length, " sections"],
                }),
              }),
              h = () => {
                d.forEach(i), t.SetDirty(C.IQ.jsondata_sales);
              };
            return (0, e.jsxs)("div", {
              className: ha.Warning,
              children: [
                l(g),
                (0, e.jsx)("div", {
                  className: ha.Buttons,
                  children:
                    i &&
                    (0, e.jsx)(p.$n, {
                      onClick: () => h(),
                      children: o != null ? o : "Fix it",
                    }),
                }),
              ],
            });
          }),
          Mr = (0, R.PA)((a) => {
            var t, n;
            const { editModel: i, fnOnOKCallback: o } = a,
              l = i.GetEventModel(),
              {
                fnSetStorePublishingRequiresValveApproval: r,
                fnSetUserWhoEnabledSalePage: d,
              } = (0, we.g7)(i.GetClanAccountID(), i.GetGID()),
              [_, c] = E.useState(
                (t = l.jsondata.sale_vanity_id) != null ? t : "",
              ),
              [g] = E.useState(new Qa.lu()),
              h =
                !wt.iA.is_support &&
                !(
                  (n = dt.pF.GetCreatorHome(i.GetClanSteamID())) != null &&
                  n.BHasClanAccountFlagSet(la.Wv.Mv)
                ),
              v = Math.floor(Date.now() / 1e3),
              m = new Date();
            m.setHours(10), m.setMinutes(0), m.setSeconds(0);
            const x = new Date();
            x.setDate(m.getDate() + 1),
              x.setHours(10),
              x.setMinutes(0),
              x.setSeconds(0);
            const [j, S] = E.useState(
                l.startTime > v ? l.startTime : Math.floor(x.getTime() / 1e3),
              ),
              y = new Date();
            y.setDate(x.getDate() + 1),
              y.setHours(10),
              y.setMinutes(0),
              y.setSeconds(0);
            const [N, A] = E.useState(
                (l == null ? void 0 : l.endTime) > Math.floor(y.getTime() / 1e3)
                  ? l.endTime
                  : Math.floor(y.getTime() / 1e3),
              ),
              te = () => {
                (0, $.h5)(() => {
                  i.SetSaleVanityID(_),
                    i.SetEventStartTime(j),
                    i.SetEventEndTime(N),
                    d(wt.iA.accountid),
                    h && r(!0),
                    g.Dispatch(),
                    o();
                }),
                  a.closeModal && a.closeModal();
              },
              oe = () => {
                (0, $.h5)(() => {
                  (i.GetEventModel().jsondata.bSaleEnabled = !1),
                    i.SetDirty(C.IQ.jsondata_sales);
                }),
                  a.closeModal && a.closeModal();
              },
              De = _.replace(/[^\w-]/g, "").length > 0 && j && N;
            return (0, e.jsx)(xe.tH, {
              children: (0, e.jsx)(F.x_, {
                onEscKeypress: oe,
                children: (0, e.jsxs)(p.UC, {
                  children: [
                    (0, e.jsx)(p.Y9, {
                      children: (0, s.we)("#Sale_EnableTitle"),
                    }),
                    (0, e.jsx)(p.nB, {
                      children: (0, e.jsx)(p.a3, {
                        children: (0, e.jsxs)("div", {
                          className: Ce.SetupCtn,
                          children: [
                            (0, e.jsx)("span", {
                              children: (0, s.we)("#Sale_EnableDesc"),
                            }),
                            (0, e.jsxs)("ol", {
                              children: [
                                (0, e.jsx)("li", {
                                  children: (0, s.we)("#Sale_EnableDesc_1"),
                                }),
                                (0, e.jsx)("li", {
                                  children: (0, s.we)("#Sale_EnableDesc_2"),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)(p.pd, {
                              type: "text",
                              label: (0, s.we)("#Sale_VanityID"),
                              tooltip: (0, s.we)("#Sale_VanityID_ttip"),
                              onChange: (Se) => c(Se.target.value),
                              value: _,
                            }),
                            (0, e.jsx)(Ie.K, {
                              strDescription: (0, s.we)("#Sale_New_Start"),
                              nEarliestTime: 0,
                              fnGetTimeToUpdate: () => j,
                              fnSetTimeToUpdate: S,
                              fnIsValidDateTime: () => !0,
                              bShowTimeZone: !0,
                            }),
                            (0, e.jsx)(Ie.K, {
                              strDescription: (0, s.we)("#Sale_New_End"),
                              nEarliestTime: 0,
                              fnGetTimeToUpdate: () => N,
                              fnSetTimeToUpdate: A,
                              fnIsValidDateTime: () => N > j,
                              bShowTimeZone: !0,
                            }),
                            (0, e.jsx)(ge.E, {
                              clanSteamID: i.GetClanSteamID(),
                              requireAdmin: !0,
                              children: (0, e.jsx)(vi, {
                                clanSteamID: i.GetClanSteamID(),
                                gidClanEvent: i.GetGID(),
                                fnOkCallbackList: g,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsx)(p.wi, {
                      children: (0, e.jsx)(p.CB, {
                        onCancel: oe,
                        bOKDisabled: !De,
                        onOK: te,
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
          Or = (0, R.PA)((a) => {
            var t;
            const { editModel: n, fnOnOKCallback: i } = a,
              o = n.GetEventModel(),
              [l, r] = E.useState(
                (t = o.jsondata.sale_update_landing_page_vanity_id) != null
                  ? t
                  : "",
              ),
              d = () => {
                (0, $.h5)(() => {
                  n.SetSaleUpdateLandingPageVanityID(l), i();
                }),
                  a.closeModal && a.closeModal();
              },
              _ = () => {
                (0, $.h5)(() => {
                  (n.GetEventModel().jsondata.bSaleEnabled = !1),
                    n.SetDirty(C.IQ.jsondata_sales);
                }),
                  a.closeModal && a.closeModal();
              },
              c = l.replace(/[^\w-]/g, "").length > 0;
            return (0, e.jsx)(xe.tH, {
              children: (0, e.jsx)(F.x_, {
                onEscKeypress: _,
                children: (0, e.jsxs)(p.UC, {
                  children: [
                    (0, e.jsx)(p.Y9, {
                      children: (0, s.we)(
                        "#Sale_UpdateLandingPage_EnableTitle",
                      ),
                    }),
                    (0, e.jsx)(p.nB, {
                      children: (0, e.jsx)(p.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("span", {
                              children: (0, s.we)(
                                "#Sale_UpdateLandingPage_EnableDesc",
                              ),
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)(p.pd, {
                              type: "text",
                              label: (0, s.we)(
                                "#Sale_UpdateLandingPageVanityID",
                              ),
                              tooltip: (0, s.we)(
                                "#Sale_UpdateLandingPageVanityID_ttip",
                              ),
                              onChange: (g) => r(g.target.value),
                              value: l,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsx)(p.wi, {
                      children: (0, e.jsx)(p.CB, {
                        onCancel: _,
                        bOKDisabled: !c,
                        onOK: d,
                      }),
                    }),
                  ],
                }),
              }),
            });
          });
        function Di(a) {
          const { mode: t } = a,
            n = M.mh.GetEditModel(),
            [i, o] = E.useState(n.BHasSaleEnabled()),
            { creatorHome: l } = (0, dt.FV)(
              n.GetEventModel().clanSteamID.GetAccountID(),
            ),
            r = E.useRef(void 0),
            d = (h) => {
              var v;
              o(h),
                (v = r == null ? void 0 : r.current) == null ||
                  v.setState({ checked: h }),
                (0, $.h5)(() => {
                  (n.GetEventModel().jsondata.bSaleEnabled = h),
                    n.SetDirty(C.IQ.jsondata_sales);
                });
            },
            _ = (0, ge.m)(n.GetClanSteamID(), !0),
            c =
              !n.BIsSourceEventSaleEnabled() &&
              t != qa &&
              (!l || !l.BHasClanAccountFlagSet(la.Wv.Jn)) &&
              !_,
            g = t != qa;
          return (0, e.jsxs)("div", {
            className: Q.InputBorder,
            children: [
              (0, e.jsx)(p.RF, {
                ref: r,
                onChange: (h) => {
                  var v;
                  h && g
                    ? ((v = r == null ? void 0 : r.current) == null ||
                        v.setState({ checked: !1 }),
                      o(!1),
                      (0, U.pg)(
                        t == Ka
                          ? (0, e.jsx)(Or, {
                              editModel: n,
                              fnOnOKCallback: () => d(!0),
                            })
                          : (0, e.jsx)(Mr, {
                              editModel: n,
                              fnOnOKCallback: () => d(!0),
                            }),
                        window,
                      ))
                    : d(h);
                },
                label: (0, s.we)(
                  t == Ka ? "#Sale_option_updatelandingpage" : "#Sale_option",
                ),
                disabled: c,
                checked: i,
              }),
              c &&
                (0, e.jsx)("div", {
                  className: Jt.WarningStyles,
                  children: (0, s.we)("#Sale_Enable_Warning"),
                }),
            ],
          });
        }
        var yi = u(55737),
          en = u(16346),
          Mn = u(29543),
          On = u(34360),
          Pr = u(1743),
          Rr = u(78766),
          Ti = u(11436);
        function kr(a) {
          const t = () => a.closeModal && a.closeModal(),
            [n, i] = (0, E.useState)(!1),
            [o, l] = (0, E.useState)(null),
            [r, d] = (0, E.useState)(null),
            [_, c] = (0, E.useState)(null),
            [g, h] = (0, E.useState)(!1);
          (0, E.useEffect)(() => {
            const x = le().CancelToken.source();
            return (
              Ii().then(() => {
                x.token.reason || i(!0);
              }),
              () => x.cancel("SaleEventExplorerDialog: unmounting")
            );
          }, []);
          const v = (x, j, S, y) => {
              l(x), d(j), c(S), h(y);
            },
            m = () => {
              (0, U.pg)(
                (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEditor_GenericAreYouSure"),
                  strDescription: (0, s.we)("#Sale_Debug_Delete"),
                  onOK: () => {
                    zr(o), t();
                  },
                }),
                window,
              );
            };
          return (0, e.jsx)(xe.tH, {
            children: (0, e.jsx)(F.x_, {
              onEscKeypress: t,
              children: (0, e.jsxs)(p.UC, {
                children: [
                  (0, e.jsx)(p.Y9, {
                    children: (0, s.we)("#Sale_Debug_Title"),
                  }),
                  (0, e.jsx)(p.nB, {
                    children: (0, e.jsx)(p.a3, {
                      children: n
                        ? (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)("div", {
                                children: (0, s.we)("#Sale_Debug_Desc"),
                              }),
                              (0, e.jsx)(Fr, { fnSetSaleItem: v }),
                              o
                                ? (0, e.jsx)(Hr, {
                                    saleCapsule: o,
                                    list: r,
                                    tabList: _,
                                    bInLinkedItems: g,
                                  })
                                : (0, e.jsx)("div", {
                                    children: (0, s.we)(
                                      "#Sale_Debug_NoMatchingItem",
                                    ),
                                  }),
                            ],
                          })
                        : (0, e.jsx)(z.t, {
                            string: (0, s.we)("#Sale_Debug_Loading"),
                            size: "medium",
                          }),
                    }),
                  }),
                  (0, e.jsx)(p.wi, {
                    children: (0, e.jsx)(p.CB, {
                      onCancel: t,
                      bOKDisabled: !o,
                      strOKText: (0, s.we)("#Button_Delete"),
                      onOK: m,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        async function Ii() {
          const a = M.mh.GetEditModel();
          await pt.A.Get().HintLoadStoreItems(
            Array.from(a.GetAllSalePageFeaturedItems("apps")),
            Array.from(a.GetAllSalePageFeaturedItems("packages")),
            Array.from(a.GetAllSalePageFeaturedItems("bundles")),
            null,
            null,
            null,
            { include_assets: !0 },
          );
        }
        function Pn(a, t = "") {
          var n;
          return (
            ((n = pt.A.Get().GetStoreItem(a.id, (0, Mn.SW)(a.type))) == null
              ? void 0
              : n.GetName()) || t
          );
        }
        function Fr(a) {
          const { fnSetSaleItem: t } = a,
            n = (0, E.useRef)(null),
            i = (0, E.useRef)(null),
            o = (0, E.useRef)(0),
            l = (0, E.useRef)(void 0);
          (0, E.useEffect)(() => () => window.clearTimeout(o.current), []);
          const r = (0, E.useCallback)(
            async (d) => {
              let _ = d.target.value;
              !_ ||
                _.trim().length == 0 ||
                ((_ = _.toLocaleLowerCase()),
                window.clearTimeout(o.current),
                n.current && n.current("SearchForCurator: new request"),
                (o.current = window.setTimeout(async () => {
                  const c = M.mh.GetEditModel();
                  let g = Number.parseInt(_.trim()),
                    h = new Array();
                  if (c.GetEventModel().BHasSaleEnabled()) {
                    const v = (S) =>
                        S.id == g || Pn(S).toLowerCase().indexOf(_) >= 0,
                      m = (S) => {
                        h.findIndex((y) => y.id == S.id && y.type == S.type) <
                          0 && h.push(S);
                      };
                    c.GetEventModel().jsondata.sale_sections.forEach((S) => {
                      S.capsules && S.capsules.filter(v).forEach(m);
                    });
                    const x = c.GetTabSaleSection();
                    x &&
                      x.tabs.forEach((S) => {
                        S.capsules && S.capsules.filter(v).forEach(m);
                      });
                    const j = (S) => {
                      var y, N;
                      const A = (Se) => S.id == Se.id && S.type == Se.type;
                      let te = new Array();
                      c.GetEventModel().jsondata.sale_sections.forEach((Se) => {
                        var $e;
                        (($e = Se.capsules) == null
                          ? void 0
                          : $e.filter(A).length) > 0 && te.push(Se);
                      });
                      let oe = new Array();
                      x &&
                        ((y = x.tabs) == null ||
                          y.forEach((Se) => {
                            Se.capsules.filter(A).length > 0 && oe.push(Se);
                          }));
                      const De =
                        ((N = c.GetEventModel().jsondata.tagged_items) == null
                          ? void 0
                          : N.findIndex(
                              (Se) => Se && A(Se == null ? void 0 : Se.capsule),
                            )) >= 0;
                      t(S, te, oe, De);
                    };
                    i.current = (0, en.lX)(
                      (0, e.jsx)(Ur, { list: h, fnChooseCapsule: j }),
                      l.current.element,
                      {
                        bOverlapHorizontal: !0,
                        bMatchWidth: !0,
                        bFitToWindow: !0,
                        bDisablePopTop: !0,
                        bNoFocusWhenShown: !0,
                        bSkipFocusWhenReady: !0,
                      },
                    );
                  }
                }, 300)));
            },
            [t],
          );
          return (0, e.jsx)(p.pd, {
            type: "text",
            placeholder: (0, s.we)("#Sale_Debug_Placeholder"),
            tooltip: (0, s.we)("#Sale_Debug_InputToolTip"),
            onChange: r,
            onBlur: () => {
              setTimeout(() => i.current && i.current.Hide(), 200);
            },
            ref: l,
          });
        }
        function Ur(a) {
          const { list: t, fnChooseCapsule: n } = a;
          return (0, e.jsx)(On.tz, {
            className: Pr.SearchResults,
            children: t.map((i) =>
              (0, e.jsx)(
                On.kt,
                {
                  onSelected: () => n(i),
                  children: (0, e.jsx)("div", {
                    children: (0, s.we)(
                      "#Sale_Debug_ContextItem",
                      Pn(i, (0, s.we)("#Sale_Debug_Unknown")),
                      i.type,
                    ),
                  }),
                },
                "sale_" + i.id + "_tpe_" + i.type,
              ),
            ),
          });
        }
        function Hr(a) {
          const { saleCapsule: t, list: n, tabList: i, bInLinkedItems: o } = a,
            l = M.mh.GetEditModel(),
            r = l.GetCurEditLanguage();
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)(
                  "#Sale_Debug_MatchItem",
                  Pn(t, (0, s.we)("#Sale_Debug_Unknown")),
                  t.type,
                ),
              }),
              (0, e.jsx)("div", {
                children: (0, s.we)("#Sale_Debug_AppearsIn"),
              }),
              (0, e.jsx)("ol", {
                children:
                  n && n.length > 0
                    ? n.map((d) =>
                        (0, e.jsx)(
                          "li",
                          {
                            children: (0, e.jsx)(Da.fi, {
                              saleSection: d,
                              editLanguage: r,
                              eventModel: l.GetEventModel(),
                              index: l.GetSaleSectionIndexByID(d.unique_id, !0),
                            }),
                          },
                          d.unique_id,
                        ),
                      )
                    : (0, s.we)("#Sale_Debug_NoMatchingItem"),
              }),
              (0, e.jsx)("div", {
                children: (0, s.we)("#Sale_Debug_Tab_AppearsIn"),
              }),
              (0, e.jsx)("ol", {
                children:
                  i && i.length > 0
                    ? i.map((d) =>
                        (0, e.jsx)(
                          "li",
                          { children: (0, Rr.l8)(d, r) },
                          d.unique_id,
                        ),
                      )
                    : (0, s.we)("#Sale_Debug_NoMatchingItem"),
              }),
              (0, e.jsx)("div", {
                children: (0, s.we)(
                  o
                    ? "#Sale_Debug_LinkedSection"
                    : "#Sale_Debug_Not_LinkedSection",
                ),
              }),
            ],
          });
        }
        function zr(a) {
          if (!a) return;
          const t = M.mh.GetEditModel();
          (0, $.h5)(() => {
            let n = 0;
            const i = (l) => {
              let r = l.capsules.findIndex(
                (d) => d.id == a.id && d.type == a.type,
              );
              for (; r >= 0; )
                l.capsules.splice(r, 1),
                  (n += 1),
                  (r = l.capsules.findIndex(
                    (d) => d.id == a.id && d.type == a.type,
                  ));
            };
            t.GetEventModel().jsondata.sale_sections.forEach(i);
            let o = t.GetTabSaleSection();
            o && o.tabs.forEach(i), n && t.SetDirty(C.IQ.jsondata_sales);
          });
        }
        function Ai(a) {
          return `${a.type}:${a.id}`;
        }
        function Rn(a) {
          const t = a.split(":");
          return { type: t[0], id: parseInt(t[1]) };
        }
        function Vr() {
          var a, t;
          const n = [],
            i = new Map(),
            o = M.mh.GetEditModel(),
            l = o.GetTabSaleSection();
          return (
            (a = l == null ? void 0 : l.tabs) == null ||
              a.forEach((r) => {
                var d;
                const _ = {
                  type: "tab",
                  unique_id: r.unique_id,
                  strLabel: (0, s.we)(
                    ((d = r.localized_label) == null ? void 0 : d[L.Bhc]) ||
                      r.default_label,
                  ),
                };
                n.push(_),
                  r.capsules.forEach((c) => {
                    const g = Ai(c);
                    i.has(g) || i.set(g, new Set()), i.get(g).add(r.unique_id);
                  });
              }),
            (t = o.GetEventModel().jsondata.sale_sections) == null ||
              t.forEach((r) => {
                if (r.section_type != "items") return;
                const d = {
                  type: "section",
                  unique_id: r.unique_id,
                  strLabel: (0, s.we)(
                    (0, Ti.s0)(r, o.GetEventModel(), yt.uF) ||
                      r.localized_label[L.Bhc] ||
                      r.default_label,
                  ),
                };
                n.push(d),
                  r.capsules.forEach((_) => {
                    const c = Ai(_);
                    i.has(c) || i.set(c, new Set()), i.get(c).add(r.unique_id);
                  });
              }),
            { mapItemLocations: i, rgSections: n }
          );
        }
        function Wr(a) {
          const [t, n] = (0, E.useState)(!1),
            [i, o] = (0, E.useState)(null),
            l = () => a.closeModal && a.closeModal();
          (0, E.useEffect)(() => {
            const c = le().CancelToken.source();
            return (
              Ii().then(() => {
                c.token.reason || n(!0);
              }),
              o(Vr()),
              () =>
                c.cancel("SaleEventItemLocationCSVDownloadDialog: unmounting")
            );
          }, []);
          let r = null;
          if (i) {
            const c = i.rgSections.filter((v) => v.type == "tab").length,
              g = i.rgSections.length - c,
              h = i.mapItemLocations.size;
            r = (0, s.we)("#Sale_GameExport_ContentSummary", c, g, h);
          }
          const d = () => {
              var c;
              const { mapItemLocations: g, rgSections: h } = i,
                v = [];
              for (const S of Array.from(g.keys())) {
                const y = Rn(S);
                let N;
                try {
                  N =
                    (c = pt.A.Get().GetStoreItem(y.id, (0, Mn.SW)(y.type))) ==
                    null
                      ? void 0
                      : c.GetName();
                } catch {}
                v.push([`${y.type}: ${N || y.id}`, S]);
              }
              v.sort();
              const m = [],
                x = ["Item", "AppID", "Count"];
              for (const S of h) x.push(`${S.strLabel} (${S.type})`);
              m.push(x);
              for (const [S, y] of v) {
                const N = g.get(y),
                  A = Rn(y),
                  te = [S, A.id.toString(), N.size.toString()];
                for (const oe of h) te.push(N.has(oe.unique_id) ? "1" : " ");
                m.push(te);
              }
              const j = "item_locations.csv";
              Ue.g.WriteCSVToFile(m, j),
                (0, U.mK)(
                  (0, e.jsx)(F.o0, {
                    strTitle: (0, s.we)("#Sale_GameExport_Title"),
                    bAlertDialog: !0,
                    strDescription: (0, s.we)(
                      "#Sale_GameExport_FileExported",
                      j,
                    ),
                  }),
                  window,
                ),
                l();
            },
            _ = () => {
              const { mapItemLocations: c } = i,
                g = [],
                h = ["Type", "ID", "Name", "Dev", "Pub", "Franchise"];
              g.push(h);
              const v = [];
              for (const x of Array.from(c.keys())) {
                const j = Rn(x);
                try {
                  const S = pt.A.Get().GetStoreItem(j.id, (0, Mn.SW)(j.type));
                  v.push([j.type, S.GetName() || j.id.toString(), S]);
                } catch {}
              }
              v.sort();
              for (const [x, j, S] of v) {
                const y = S.GetDeveloperNames().join(","),
                  N = S.GetPublisherNames().join(","),
                  A = S.GetFranchiseNames().join(","),
                  te = [x.toString(), S.GetID().toString(), j, y, N, A];
                g.push(te);
              }
              const m = "item_pubs.csv";
              Ue.g.WriteCSVToFile(g, m),
                (0, U.mK)(
                  (0, e.jsx)(F.o0, {
                    strTitle: (0, s.we)("#Sale_GameExport_Title"),
                    bAlertDialog: !0,
                    strDescription: (0, s.we)(
                      "#Sale_GameExport_FileExported",
                      m,
                    ),
                  }),
                  window,
                ),
                l();
            };
          return (0, e.jsx)(xe.tH, {
            children: (0, e.jsx)(F.x_, {
              onEscKeypress: l,
              children: (0, e.jsxs)(p.UC, {
                children: [
                  (0, e.jsx)(p.Y9, {
                    children: (0, s.we)("#Sale_GameExport_Title"),
                  }),
                  (0, e.jsxs)(p.nB, {
                    children: [
                      (0, e.jsxs)(p.a3, {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)("#Sale_GameExport_Desc"),
                          }),
                          (0, e.jsx)("br", {}),
                          t
                            ? r
                            : (0, e.jsx)(z.t, {
                                position: "center",
                                string: (0, s.we)("#Sale_Debug_Loading"),
                                size: "medium",
                              }),
                          (0, e.jsx)(p.$n, {
                            onClick: d,
                            disabled: !t,
                            children: (0, s.we)("#Sale_Export"),
                          }),
                        ],
                      }),
                      (0, e.jsx)(ge.E, {
                        clanSteamID: M.mh.GetEditModel().GetClanSteamID(),
                        children: (0, e.jsxs)(p.a3, {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, s.we)("#Sale_GameExport_Desc2"),
                            }),
                            (0, e.jsx)(p.$n, {
                              onClick: _,
                              disabled: !t,
                              children: (0, s.we)("#Sale_Export"),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(p.wi, {
                    children: (0, e.jsx)(p.jn, {
                      onClick: l,
                      children: (0, s.we)("#Button_Close"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        var ve = u(63872),
          ye = u.n(ve),
          kn = u(18994),
          Zt = u(49285);
        const Qr = (a) => {
          const t = new Array();
          return (
            a.rows.forEach((n) => {
              const i = () => {
                a.onSelected && a.onSelected(n);
                let o = document.getElementById(n.strSectionId);
                o && (o.scrollIntoView(!0), window.scrollBy(0, -75));
              };
              t.push(
                (0, e.jsx)(
                  "div",
                  {
                    id: "tc_" + n.strSectionId,
                    role: "button",
                    tabIndex: 0,
                    className: (0, b.A)(
                      {
                        [Zt.TOCEntry]: !0,
                        [Zt.SectionOnScreen]: n.bSectionIsVisible,
                        [Zt.TOCIndent]: n.bIndent,
                      },
                      n.strClassName,
                    ),
                    onClick: i,
                    onKeyDown: (o) => {
                      (o.key === "Enter" || o.key === " ") &&
                        (o.preventDefault(), i());
                    },
                    children: (0, e.jsx)("div", {
                      style: n.style,
                      className: Zt.TOCEntryText,
                      children: n.strLabel,
                    }),
                  },
                  "tc_" + n.strSectionId,
                ),
              );
            }),
            (0, e.jsxs)("div", {
              className: (0, b.A)(Zt.TableOfContentsContainer, a.className),
              children: [
                a.elHeader,
                (0, e.jsxs)("div", {
                  className: Zt.TableOfContents,
                  children: [
                    (0, e.jsx)("div", {
                      className: Zt.Header,
                      children: a.strHeader,
                    }),
                    t,
                    a.elBottomContent,
                  ],
                }),
              ],
            })
          );
        };
        var Fn = u(74107),
          tn = u(9295);
        function Yr(a) {
          const t = a.eventType == L.ajI;
          return (0, e.jsxs)("div", {
            className: tn.ManageLocCtn,
            children: [
              (0, e.jsx)("div", {
                className: tn.Header,
                children: Fn.F5.Localize("#EventEditor_Loc_Title"),
              }),
              (0, e.jsxs)("div", {
                className: tn.ManageLocContents,
                children: [
                  t
                    ? Fn.F5.Localize("#EventEditor_Loc_Overview_Page")
                    : Fn.F5.Localize("#EventEditor_Loc_Overview"),
                  (0, e.jsx)("div", {
                    className: tn.LocButtonsCtn,
                    children: a.children,
                  }),
                ],
              }),
            ],
          });
        }
        var Ut = u(41635),
          an = u(6231),
          Jr = u(6103),
          nn = u.n(Jr),
          Kr = u(41878),
          Gi = u(57673),
          qr = u(28796),
          sn = u.n(qr),
          Li = u(54968);
        function Bi(a) {
          const { editModel: t } = a,
            n = [
              {
                label: (0, s.we)("#Sale_Debug_LivePreview_Device_Desktop"),
                data: "desktop",
                size: { width: 1500, height: 1100 },
              },
              {
                label: (0, s.we)("#Sale_Debug_LivePreview_Device_Mobile"),
                data: "mobile",
                size: { width: 402, height: 874 },
              },
              {
                label: (0, s.we)("#Sale_Debug_LivePreview_Device_SteamDeck"),
                data: "steamdeck",
                size: { width: 852, height: 532 },
                queryParams: [{ key: "force_gamepad_client_view", value: "1" }],
              },
              {
                label: (0, s.we)("#Sale_Debug_LivePreview_Device_NewTab"),
                tooltip: (0, s.we)(
                  "#Sale_Debug_LivePreview_Device_NewTab_ttip",
                ),
                data: "window",
                newWindow: !0,
              },
            ],
            i = (0, he.Bw)(
              t.GetEventModel(),
              he.PH.k_eStoreSalePage,
              "forceAbsolute",
            ),
            o = (d) => {
              var _;
              const c = n.find((h) => h.data == d),
                g = !((_ = c == null ? void 0 : c.newWindow) != null && _);
              Li.xr
                .Get()
                .ShowPreviewWindow(
                  i,
                  t.GetEventModel(),
                  g,
                  c == null ? void 0 : c.size,
                  c == null ? void 0 : c.queryParams,
                );
            },
            l = (0, Li.cv)(),
            r = (d) => {
              let _ = { bOverlapHorizontal: !0 };
              const c = (0, e.jsx)(p.n4, {
                rgOptions: n,
                onValueSelected: (g, h) => o(h.data),
              });
              (0, en.lX)(c, d, _);
            };
          return (0, e.jsxs)("div", {
            className: (0, b.A)(sn().LivePreview, l && sn().Connected),
            children: [
              (0, e.jsx)(p.$n, {
                className: (0, b.A)(sn().Button),
                onClick: () => o(void 0),
                children: (0, s.we)("#Sale_Debug_LivePreview"),
              }),
              (0, e.jsx)(p.$n, {
                className: (0, b.A)(sn().DeviceDropdown),
                onClick: (d) => r(d),
                children: (0, e.jsx)(It.GB9, {}),
              }),
            ],
          });
        }
        function Zr(a) {
          return (0, e.jsx)(yt.Cs, {
            location: yt.W3,
            children: (0, e.jsx)(Xr, { ...a }),
          });
        }
        const Xr = (0, R.PA)((a) => {
            const { editModel: t } = a,
              n = (0, D.Qn)(),
              i = hi(),
              [o, l, r, d] = (0, O.q3)(() => [
                (0, an.QD)(),
                (0, an.dy)(),
                !!t.GetEventModel().jsondata.sale_sub_menu,
                t.GetEventType(),
              ]),
              _ = d == L.ajI,
              c = (S) => {
                a.onSelected && a.onSelected(S);
              },
              g = (S, y, N, A = !1, te) => {
                S.push({
                  strLabel: y,
                  strSectionId: N,
                  style: te,
                  bIndent: A,
                  bSectionIsVisible: i.m_mapVisibleSections.has(N),
                });
              };
            let h = t.GetEventModel(),
              v = new Array();
            g(v, (0, s.we)("#Sale_PageConfigOptions"), "SalePageEdit_Config");
            const m = (0, ge.m)(t.GetClanSteamID(), !1);
            (m || h.GetTaggedItems().length > 0) &&
              g(
                v,
                (0, s.we)(
                  "#Sale_TaggedItemsSection",
                  h.GetTaggedItems().length,
                ),
                "SalePageEdit_TaggedItems",
              ),
              g(
                v,
                (0, s.we)(
                  _ ? "#Sale_Artwork_Sections_Page" : "#Sale_Artwork_Sections",
                ),
                "SalePageEdit_AllArtworkCtn",
              ),
              (h.BHasTag("contenthub") || h.BUsesContentHubForItemSource()) &&
                g(v, "Content Hub Settings", "SalePageEdit_ContentHub");
            let x = !1,
              j = 0;
            if (
              (h.GetSaleSections().forEach((S, y) => {
                if (x && o && !(0, Gi.bF)(l, S)) j += 1;
                else {
                  const N = (0, e.jsx)(Da.fi, {
                      saleSection: S,
                      eventModel: t.GetEventModel(),
                      editLanguage: t.GetCurEditLanguage(),
                      index: y,
                    }),
                    A = { ...(0, Ft.sq)(S, h, n), color: S.label_color },
                    te = kn.mj + S.unique_id;
                  g(v, N, te, x, A), S.section_type === "tabs" && (x = !0);
                }
              }),
              j > 0)
            ) {
              const S = (0, e.jsxs)("div", {
                className: nn().Ctn,
                onClick: (y) => {
                  (0, an.qT)(void 0), y.stopPropagation();
                },
                children: [
                  (0, e.jsx)("div", {
                    className: nn().ButtonIcon,
                    children: (0, e.jsx)(It.X, {}),
                  }),
                  (0, s.we)("#Sale_TOC_ClearFilter"),
                  (0, e.jsx)(Z.o, {
                    tooltip: (0, s.we)("#Sale_TOC_ClearFilter_ttip", j),
                  }),
                ],
              });
              g(v, S, "DummyTargetNotReal", !0);
            }
            return (
              m &&
                (r &&
                  g(v, "(VO) Sub Menu Editor", "SalePageEdit_SubMenuEditor"),
                g(v, "(VO) Custom CSS Editor", "SalePageEdit_CustomCSSCode")),
              (0, e.jsx)(xe.tH, {
                children: (0, e.jsx)(Qr, {
                  className: nn().SalePageTOCPlacement,
                  elHeader: (0, e.jsx)(Yr, {
                    eventType: a.editModel.GetEventType(),
                    children: (0, e.jsx)(ei, { editModel: a.editModel }),
                  }),
                  strHeader: (0, s.we)("#Sale_TOC"),
                  rows: v,
                  onSelected: c,
                  elBottomContent: (0, e.jsx)(Ni, { editModel: a.editModel }),
                }),
              })
            );
          }),
          Ni = (a) => {
            const { editModel: t } = a,
              [n, i, o] = (0, se.uD)(),
              l = (0, $.XI)((r) => {
                const d = {
                    ...ae.G6,
                    unique_id: t.GenerateSaleSectionUniqueID(),
                  },
                  _ = t.GetEventModel().jsondata.sale_sections.slice(-1)[0];
                _ &&
                  ((d.label_color = _.label_color),
                  (d.background_gradient_bottom = _.background_gradient_bottom),
                  (d.background_gradient_top = _.background_gradient_top),
                  (d.border_color = _.border_color),
                  (d.border_width = _.border_width)),
                  C.nG.SetSaleSectionType(t.GetEventType(), d, r),
                  t.GetEventModel().jsondata.sale_sections.push(d),
                  t.SetDirty(C.IQ.jsondata_sales),
                  (0, ct.mi)((0, ct.LY)(d), !0),
                  o();
              });
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(F.EN, {
                    active: n,
                    children: (0, e.jsx)($r, {
                      clanSteamID: t.GetClanSteamID(),
                      eventType: t.GetEventType(),
                      fnSectionTypeChosen: l,
                      closeModal: o,
                    }),
                  }),
                }),
                (0, e.jsx)(p.jn, {
                  onClick: i,
                  className: Q.AddSectionButton,
                  children: (0, s.we)("#Sale_AddNewSection"),
                }),
              ],
            });
          };
        function $r(a) {
          const {
              clanSteamID: t,
              eventType: n,
              fnSectionTypeChosen: i,
              closeModal: o,
            } = a,
            [l, r] = E.useState("unselected_empty"),
            d = (0, Kr.q)(t, n);
          return (0, e.jsxs)(F.o0, {
            strTitle: (0, s.we)("#Sale_AddNewSection_Title"),
            strDescription: (0, s.we)("#Sale_AddNewSection_Desc"),
            onOK: () => i(l),
            onCancel: o,
            closeModal: o,
            children: [
              (0, e.jsx)(Ft.gB, {
                rgSectionTypeInfos: d,
                sectionType: l,
                fnSetSectionType: (_) => r(_),
              }),
              (0, e.jsx)("div", {
                className: (0, b.A)(Q.FlexColumnContainer, nn().ReassignCtn),
              }),
            ],
          });
        }
        function ed(a) {
          const t = M.mh.GetEditModel(),
            [n, i, o] = (0, se.uD)(),
            { bSoloMode: l, SetSoloMode: r } = (0, ct.eQ)();
          return (0, e.jsxs)("div", {
            className: ve.BottomBarControls,
            children: [
              (0, e.jsx)("div", {
                children: (0, e.jsx)(je.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Debug_LivePreview_ttip"),
                  children: (0, e.jsx)(Bi, { editModel: t }),
                }),
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(je.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Debug_Tooltip"),
                  children: (0, e.jsx)(p.$n, {
                    onClick: (d) => (0, U.pg)((0, e.jsx)(kr, {}), (0, V.uX)(d)),
                    children: (0, e.jsx)(It.eSy, {}),
                  }),
                }),
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(je.Gq, {
                  toolTipContent: (0, s.we)("#Sale_GameExport_Desc"),
                  children: (0, e.jsx)(p.$n, {
                    onClick: (d) => (0, U.pg)((0, e.jsx)(Wr, {}), (0, V.uX)(d)),
                    children: (0, e.jsx)(It.f5X, {}),
                  }),
                }),
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(F.EN, {
                    active: n,
                    children: (0, e.jsx)(td, { editModel: t, closeModal: o }),
                  }),
                  (0, e.jsx)(je.Gq, {
                    toolTipContent: (0, s.we)("#Sale_ReorderSections_ttip"),
                    children: (0, e.jsx)(p.$n, {
                      onClick: () => i(),
                      children: (0, e.jsx)(It._EF, {}),
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: ve.MinimizeAll,
                children: (0, e.jsx)(je.Gq, {
                  toolTipContent: (0, s.we)(
                    "#Sale_Section_MinimizeAll_Tooltip",
                  ),
                  children: (0, e.jsx)(p.$n, {
                    onClick: ct.TA,
                    children: (0, e.jsx)(It.Xjb, {}),
                  }),
                }),
              }),
              (0, e.jsx)("div", {
                className: ve.MinimizeAll,
                children: (0, e.jsx)(je.Gq, {
                  toolTipContent: (0, s.we)("#Sale_Section_SoloMode_ttip"),
                  children: (0, e.jsx)(p.Yh, {
                    label: (0, s.we)("#Sale_Section_SoloMode"),
                    checked: l,
                    onChange: (d) => r(d),
                  }),
                }),
              }),
            ],
          });
        }
        function td(a) {
          const { editModel: t, closeModal: n } = a,
            i = (0, O.q3)(() => t.GetSaleSections()),
            [o, l] = E.useState(null);
          E.useEffect(() => (l([...i]), () => l(null)), [i]);
          const r = (0, D.Qn)(),
            d = (_) => {
              const c = t.GetSaleSections().findIndex((h) => _ === h),
                g = {
                  ...(0, Ft.sq)(_, t.GetEventModel(), r),
                  color: _.label_color,
                };
              return (0, e.jsx)("div", {
                className: ve.SectionTitle,
                style: g,
                children: (0, e.jsx)(Da.fi, {
                  saleSection: _,
                  editLanguage: t.GetCurEditLanguage(),
                  eventModel: t.GetEventModel(),
                  index: c,
                }),
              });
            };
          return (0, e.jsx)(yt.Cs, {
            location: yt.Ay,
            children: (0, e.jsx)(F.o0, {
              strTitle: (0, s.we)("#Sale_ReorderSections"),
              onOK: () => {
                (t.GetEventModel().jsondata.sale_sections = o),
                  t.SetDirty(C.IQ.jsondata_sales),
                  l(null);
              },
              onCancel: () => l(null),
              closeModal: n,
              children: o
                ? (0, e.jsx)("div", {
                    className: ve.ReorderSectionCtn,
                    children: (0, e.jsx)("div", {
                      className: ve.SectionList,
                      children: (0, e.jsx)(Yt.A, {
                        items: o,
                        onMove: (_, c) => {
                          let g = [...o];
                          (0, Ut.yY)(g, _, c), l(g);
                        },
                        render: d,
                      }),
                    }),
                  })
                : (0, e.jsx)(z.t, {
                    string: (0, s.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
            }),
          });
        }
        const ad = E.lazy(() =>
          Promise.all([u.e(91), u.e(8502)]).then(u.bind(u, 17065)),
        );
        function nd(a) {
          const { editModel: t } = a,
            n = (v) => {
              t.GetEventModel().jsondata.sale_custom_css != v &&
                ((t.GetEventModel().jsondata.sale_custom_css = v),
                t.SetDirty(C.IQ.jsondata_sales));
            },
            i = t.GetEventModel().jsondata,
            [o, l, r] = (0, O.q3)(() => [
              i.sale_custom_css,
              i.sale_vanity_id_valve_approved_for_sale_subpath,
              t.GetName(),
            ]),
            [d, _] = E.useState(() => r + "_custom.css"),
            c = (v) => {
              var m;
              const x = (m = v.target.files) == null ? void 0 : m[0];
              if (x) {
                _(v.target.files[0].name);
                const j = new FileReader();
                (j.onload = (S) => {
                  const y = S.target.result.toString();
                  (t.GetEventModel().jsondata.sale_custom_css = y),
                    t.SetDirty(C.IQ.jsondata_sales),
                    (v.target.value = "");
                }),
                  j.readAsText(x);
              }
            },
            g = () => {
              const v = document.createElement("a"),
                m = new Blob([o], { type: "text/css" });
              (v.href = URL.createObjectURL(m)),
                (v.download = d),
                document.body.appendChild(v),
                v.click();
            },
            h = {
              selectOnLineNumbers: !0,
              tabCompletion: "on",
              colorDecorators: !0,
              scrollBeyondLastLine: !1,
              automaticLayout: !0,
            };
          return (0, e.jsx)(e.Fragment, {
            children: l
              ? (0, e.jsxs)("div", {
                  className: Ce.CustomCssCtn,
                  children: [
                    (0, e.jsx)("p", {
                      children:
                        "Add custom CSS which is only added to the store's sale page header. Please include nocache=1 in url when viewing your latest changes on the store. Avoid targeting the generated class names like 'broadcast_embeddable_Event_1A0NY' as the 1A0NY is programmatically generated and can be changed by the compiler with future props.",
                    }),
                    (0, e.jsx)("h3", { children: "Custom Fonts" }),
                    (0, e.jsx)("p", {
                      children:
                        " If you're going to import custom fonts you need to declare each family separately or they won't import correctly. ",
                    }),
                    (0, e.jsxs)("div", {
                      className: Ce.CodeSnippet,
                      children: [
                        (0, e.jsx)("code", { children: "'//For Example'" }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("code", {
                          children:
                            "@import url('https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap'); ",
                        }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("code", {
                          children:
                            "@import url('https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap');",
                        }),
                      ],
                    }),
                    (0, e.jsx)("p", {
                      children:
                        "Additionally, when you declare a font-family in your custom CSS do not wrap the name of the family in quotation marks.",
                    }),
                    (0, e.jsxs)("div", {
                      className: Ce.CodeSnippet,
                      children: [
                        (0, e.jsx)("code", { children: "'//For Example'" }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("code", {
                          children: "font-family: Protest Strike",
                        }),
                        " will work, ",
                        (0, e.jsx)("code", {
                          children: 'font-family: "Protest Strike"',
                        }),
                        " will NOT",
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: Ce.ButtonGroup,
                      children: [
                        (0, e.jsx)("input", { type: "file", onChange: c }),
                        (0, e.jsx)(p.$n, { onClick: g, children: "Export" }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: Ce.CodeEditor,
                      children: (0, e.jsx)(E.Suspense, {
                        fallback: null,
                        children: (0, e.jsx)(ad, {
                          width: "100%",
                          height: "100%",
                          language: "css",
                          theme: "vs-dark",
                          value: o || "",
                          options: h,
                          onChange: n,
                        }),
                      }),
                    }),
                  ],
                })
              : (0, e.jsx)("div", {
                  className: Ce.SettingCtn,
                  children: (0, e.jsx)("p", {
                    children:
                      "The custom CSS editor is disabled. The sale page needs to be setup to use store/sale. This is a Valve Only setting found in the General Configuration Section",
                  }),
                }),
          });
        }
        var sd = u(30366),
          id = u(72739),
          ma = u(54736),
          od = u(40604);
        const Mi = E.createContext(void 0);
        function ld(a) {
          return (0, e.jsx)(Mi, { value: a.elContent, children: a.children });
        }
        function rd(a) {
          const t = E.useContext(Mi);
          return t ? id.createPortal(a.children, t) : null;
        }
        const dd = (0, R.PA)((a) => {
            const t = M.mh.GetEditModel(),
              n = t.GetCategoryAsType(),
              i = t.BPublished(),
              o = t.BUnlisted(),
              l = t.BVisible(),
              r = n == L.ajI;
            return (0, e.jsxs)("div", {
              className: (0, b.A)(
                ma.EventEditorTopBarContainer,
                i && (l || o) ? ma.EventPublished : ma.EventUnPublished,
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventBarBackAndTitle,
                  children: [
                    (0, e.jsx)(he.tj, {
                      eventModel: t.GetEventModel(),
                      route: he.PH.k_eCommunityAdminPage,
                      className: f().EventBarBack,
                      children: (0, s.we)("#EventDisplay_EventsDashBtn"),
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventBarTitleCtn,
                      children: (0, e.jsx)(Qt.zm, { editModel: t }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().EventOptions,
                  children: (0, e.jsx)(Qt.$A, { editModel: t }),
                }),
                (0, e.jsxs)("div", {
                  className: f().EventEditButtons,
                  children: [
                    !r &&
                      (0, e.jsx)(he.tj, {
                        eventModel: t.GetEventModel(),
                        route: he.PH.k_eCommunityPreview,
                        className: f().EditPreviewButton,
                        children:
                          n == L.uYK
                            ? (0, s.we)("#EventEditor_Preview_News")
                            : (0, s.we)("#EventEditor_Preview"),
                      }),
                    t.BHasSaleEnabled() &&
                      (0, e.jsx)(he.tj, {
                        eventModel: t.GetEventModel(),
                        route: he.PH.k_eCommunityPreviewSale,
                        className: f().EditPreviewButton,
                        children: r
                          ? (0, s.we)("#EventEditor_PreviewSale_Page")
                          : (0, s.we)("#EventEditor_PreviewSale"),
                      }),
                    t.BHasSaleEnabled() &&
                      (0, e.jsx)(je.Gq, {
                        toolTipContent: (0, s.we)(
                          "#Sale_Debug_LivePreview_ttip",
                        ),
                        children: (0, e.jsx)(Bi, { editModel: t }),
                      }),
                  ],
                }),
              ],
            });
          }),
          cd = (0, R.PA)((a) => {
            const { setAdditionalContentDiv: t } = a,
              n = M.mh.GetEditModel(),
              i = n.GetEventModel(),
              o = n.GetEventType() == L.ajI,
              { creatorHome: l } = (0, dt.FV)(n.GetClanAccountID()),
              r = o && (l == null ? void 0 : l.GetLinkedEventGID()) == i.GID,
              d =
                (n.GetVisibilityState() == ae.zv.k_EEventStateVisible ||
                  n.BUnlisted()) &&
                (!o || r);
            return (0, e.jsxs)("div", {
              className: ma.EventEditorBottomBar,
              children: [
                (0, e.jsx)(od.c, { editModel: M.mh.GetEditModel() }),
                !o &&
                  (0, e.jsx)(he.tj, {
                    eventModel: i,
                    route: he.PH.k_eCommunityPreview,
                    className: f().EditPreviewButton,
                    children: (0, s.we)("#EventEditor_Preview"),
                  }),
                d &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      (0, e.jsx)(he.tj, {
                        className: f().EditPreviewButton,
                        eventModel: i,
                        route: he.PH.k_eStoreView,
                        children: o
                          ? (0, s.we)("#EventEditor_ViewLive_CreatorHome")
                          : (0, s.we)("#EventEditor_ViewLive"),
                      }),
                      (0, e.jsx)("span", {
                        className: ma.DisplayAdminPanel_Spacer,
                        children: " ",
                      }),
                    ],
                  }),
                (0, e.jsx)("div", { className: ma.AdditionalContent, ref: t }),
              ],
            });
          });
        var ud = u(47797),
          hd = u(18368),
          Gt = u.n(hd),
          _a = u(47534),
          md = u(24660);
        function w_(a) {
          const { rgSocialMedia: t } = a,
            [n, i] = React.useState(t ? [...t] : []),
            [o, l] = React.useState(n.length),
            r = React.useCallback(
              (d) => {
                d.length > o && l(d.length), i(d);
              },
              [o],
            );
          return jsxs("div", {
            children: [
              jsx(Oi, { ...a, rgSocialMediaItems: n, fnSetItems: r }),
              jsx(gd, { items: n, maxSeen: o }),
            ],
          });
        }
        function Oi(a) {
          const {
              rgSocialMediaItems: t,
              fnSetItems: n,
              rgSupportedSocialMediaTypes: i,
              rgValidationData: o,
            } = a,
            l = E.useMemo(
              () =>
                i
                  .filter(
                    (g) =>
                      t.findIndex((h) => h.type === g.type) === -1 ||
                      g.type === "qq" ||
                      g.type === "qqlink",
                  )
                  .map((g) => ({
                    label: (0, s.we)(`#StoreAdmin_SocialMedia_Type_${g.type}`),
                    data: g.type,
                  }))
                  .sort((g, h) => (g.label < h.label ? -1 : 1)),
              [i, t],
            ),
            r = (g) => {
              let h = t.slice();
              h.splice(g, 1), n(h);
            },
            d = (g, h) => {
              let v = t.slice();
              (0, Ut.yY)(v, g, h), n(v);
            },
            _ = (g, h) => {
              const v = t.map((m, x) => (x === g ? { ...m, link: h } : m));
              n(v);
            },
            c = (g) => {
              let h = t.slice();
              h.push({ type: g, link: "" }), n(h);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_d, { options: l, onAddLink: c }),
              (0, e.jsx)(Yt.A, {
                items: t,
                onDelete: r,
                onMove: d,
                render: (g, h) =>
                  (0, e.jsx)(
                    pd,
                    {
                      item: g,
                      onUpdateLink: (v) => _(h, v),
                      validationData: o[g.type],
                    },
                    g.type,
                  ),
              }),
            ],
          });
        }
        function _d(a) {
          const { options: t, onAddLink: n } = a,
            i = (o) => {
              const l = o.data;
              l && n(l);
            };
          return (0, e.jsx)("div", {
            className: _a.AddLinkDropDown,
            children: (0, e.jsx)(p.ZU, {
              strDefaultLabel: (0, s.we)("#StoreAdmin_SocialMedia_Add"),
              controlled: !0,
              rgOptions: t,
              onChange: i,
              selectedOption: null,
            }),
          });
        }
        function Pi(a, t) {
          let n = !0,
            i = "";
          return (
            t.prefix
              ? (a.type === "mastodon"
                  ? (i = (0, s.we)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      t.prefix.join(", "),
                    ))
                  : (i = (0, s.we)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      t.prefix.join(", "),
                    )),
                a.link &&
                  ((n = !1),
                  t.prefix.forEach((o) => {
                    a.link.startsWith(o) && (n = !0);
                  })))
              : t.number
                ? ((i = (0, s.we)("#StoreAdmin_SocialMedia_ValidationNumber")),
                  a.link && (n = /^\d+$/.test(a.link)))
                : t.text
                  ? (i = (0, s.we)("#StoreAdmin_SocialMedia_ValidationText"))
                  : t.regex &&
                    a.type === "tumblr" &&
                    (i = (0, s.we)("#StoreAdmin_SocialMedia_ValidationTumblr")),
            { bValid: n, strTooltip: i }
          );
        }
        function pd(a) {
          const { item: t, onUpdateLink: n, validationData: i } = a;
          let o;
          i.number
            ? (o = (0, s.we)("#StoreAdmin_SocialMedia_EnterNumber"))
            : i.text
              ? (o = (0, s.we)("#StoreAdmin_SocialMedia_EnterName"))
              : (o = (0, s.we)("#StoreAdmin_SocialMedia_EnterLink"));
          const { bValid: l, strTooltip: r } = Pi(t, i);
          return (0, e.jsxs)("div", {
            className: _a.SocialMediaRow,
            children: [
              (0, e.jsx)("div", {
                className: _a.SocialMediaType,
                children: (0, s.we)(`#StoreAdmin_SocialMedia_Type_${t.type}`),
              }),
              (0, e.jsx)(md.BA, {
                className: _a.SocialMediaLink,
                type: "text",
                value: t.link,
                placeholder: o,
                onChange: (d) => n(d.target.value),
              }),
              r &&
                (0, e.jsx)(je.he, {
                  className: _a.SocialMediaTooltip,
                  toolTipContent: r,
                  children: "(?)",
                }),
              !l &&
                (0, e.jsx)("div", {
                  className: _a.ValidationError,
                  children: r,
                }),
            ],
          });
        }
        function vd(a, t) {
          let n = Array(),
            i = 0;
          for (
            a.forEach((o) => {
              o.link &&
                (n.push(
                  React.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${i}][type]`,
                    value: o.type,
                  }),
                ),
                n.push(
                  React.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${i}][link]`,
                    value: o.link,
                  }),
                ),
                i++);
            });
            i < t;
          )
            n.push(
              React.createElement("input", {
                type: "hidden",
                name: `app[content][ordered_social_links][${i}]`,
                value: "",
              }),
            ),
              i++;
          return (
            [
              "discord_server",
              "youtube",
              "facebook",
              "twitter",
              "twitch",
            ].forEach((o) => {
              n.push(
                React.createElement("input", {
                  type: "hidden",
                  name: `app[content][links][${o}]`,
                  value: "",
                }),
              );
            }),
            n
          );
        }
        function gd(a) {
          const { items: t, maxSeen: n } = a,
            i = React.useMemo(() => vd(t, n), [t, n]);
          return jsxs(Fragment, { children: [...i] });
        }
        function Sd() {
          const a = (0, Ta.I)({
            queryKey: ["useSocialMediaSupports"],
            queryFn: async () => {
              var t;
              const n = `${wt.TS.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
                i = { origin: self.origin },
                o = await le().get(n, { params: i });
              return (o == null ? void 0 : o.status) == 200 &&
                ((t = o.data) == null ? void 0 : t.success) == Ze.R
                ? o.data
                : (console.error(
                    "useSocialMediaSupports:",
                    o == null ? void 0 : o.status,
                  ),
                  { success: Ze.zi });
            },
          });
          return a.isLoading ? null : a.data;
        }
        function Ed(a) {
          const { editModel: t } = a;
          return (0, O.q3)(() => t.GetEventType()) == L.ajI
            ? (0, e.jsx)(xd, { editModel: t })
            : (0, e.jsx)(fd, { editModel: t });
        }
        function fd(a) {
          const { editModel: t } = a,
            n = t.GetCurEditLanguage(),
            [i, o, l, r] = (0, O.q3)(() => [
              t.GetName(n) || "",
              t.GetSummary(n) || "",
              t.GetDescription(n) || "",
              t.GetImageURL("capsule", n) || null,
            ]),
            d = o || ae.lh.GenerateSummaryFromText(l);
          return (0, e.jsx)(Ri, {
            editModel: t,
            title: i,
            titleTip: (0, s.we)("#Sale_DefaultSocialModule_DefaultTitle"),
            summary: d,
            summaryTip: (0, s.we)("#Sale_DefaultSocialModule_DefaultDesc"),
            imageUrl: r,
            socialMediaLinksEditor: !0,
          });
        }
        function xd(a) {
          const { editModel: t } = a,
            [n, i] = (0, J.TB)(t.GetClanAccountID());
          return (0, e.jsx)(Ri, {
            editModel: t,
            title: i.curator_title,
            titleTip: (0, s.we)(
              "#Sale_DefaultSocialModule_DefaultTitle_CreatorHome",
            ),
            summary: i.curator_description,
            summaryTip: (0, s.we)(
              "#Sale_DefaultSocialModule_DefaultDesc_CreatorHome",
            ),
            imageUrl: i.avatar_full_url,
            smallImage: !0,
          });
        }
        function Ri(a) {
          const {
              editModel: t,
              title: n,
              titleTip: i,
              summary: o,
              summaryTip: l,
              imageUrl: r,
              socialMediaLinksEditor: d,
              smallImage: _,
            } = a,
            c = t.GetEventModel(),
            [g, h] = (0, O.q3)(() => [
              c.GetSaleSectionsByType("social_share") || [],
              c.jsondata.sale_default_social_media_disabled,
            ]),
            v = (j) => {
              (c.jsondata.sale_default_social_media_disabled = !j),
                t.SetDirty(C.IQ.jsondata_sales);
            },
            m = g.length > 0,
            x = !(h || m);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("p", {
                children: (0, s.we)("#Sale_DefaultSocialModule_Description"),
              }),
              (0, e.jsx)(ge.E, {
                clanSteamID: t.GetClanSteamID(),
                requireAdmin: !0,
                children: (0, e.jsx)("p", {
                  className: Gt().DefaultSocialOverrideMsg,
                  children: (0, s.we)(
                    m
                      ? "#Sale_DefaultSocialModule_DisabledByOverride"
                      : "#Sale_DefaultSocialModule_Override",
                  ),
                }),
              }),
              x &&
                (0, e.jsxs)("div", {
                  className: Gt().SocialShareCtn,
                  children: [
                    (0, e.jsx)("img", {
                      className: (0, b.A)(
                        Gt().DefaultSocialImgCtn,
                        _ && Gt().Small,
                      ),
                      src: r,
                    }),
                    (0, e.jsxs)("div", {
                      className: Gt().SocialShareText,
                      children: [
                        (0, e.jsxs)("div", {
                          className: Gt().SocialTitle,
                          children: [
                            n,
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("span", { children: i }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: Gt().SocialDesc,
                          children: [
                            o,
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("span", { children: l }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              (0, e.jsx)(p.RF, {
                onChange: v,
                label: (0, s.we)("#Sale_DefaultSocialModule_Toggle"),
                checked: x,
                disabled: m,
              }),
              !d && (0, e.jsx)(bd, { editModel: t }),
            ],
          });
        }
        function bd(a) {
          const { editModel: t } = a,
            [n, i] = (0, E.useState)(() => {
              var o;
              return (
                ((o = t.GetEventModel().jsondata.sale_social_media_items) ==
                null
                  ? void 0
                  : o.length) > 0
              );
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("p", {
                children: (0, s.we)("#Sale_DefaultSocialModule_LinkDesc"),
              }),
              n
                ? (0, e.jsx)(jd, { editModel: t })
                : (0, e.jsx)(p.RF, {
                    onChange: () => i(!0),
                    label: (0, s.we)(
                      "#Sale_DefaultSocialModule_EnableSocialMediaLink",
                    ),
                    checked: n,
                  }),
            ],
          });
        }
        function jd(a) {
          const { editModel: t } = a,
            n = Sd();
          (0, E.useEffect)(() => {
            const r = t.GetEventModel().jsondata;
            r.sale_social_media_items || (r.sale_social_media_items = []);
          }, [t]);
          const i = (0, O.q3)(
              () => t.GetEventModel().jsondata.sale_social_media_items || [],
            ),
            [o, l] = (0, E.useState)(() => i);
          return n
            ? n.success != Ze.R
              ? (0, e.jsx)("div", {
                  className: Gt().ErrorContainer,
                  children: (0, e.jsx)("div", {
                    className: Gt().ErrorText,
                    children: (0, s.we)("#GrantAwardError_Busy"),
                  }),
                })
              : (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(Oi, {
                      rgValidationData: n.rgValidationData,
                      rgSupportedSocialMediaTypes:
                        n.rgSupportedSocialMediaTypes,
                      rgSocialMediaItems: o,
                      fnSetItems: (r) => {
                        const d = n.rgValidationData;
                        (t.GetEventModel().jsondata.sale_social_media_items = r
                          .filter((_) => !!_.link)
                          .filter((_) => Pi(_, d[_.type]).bValid)),
                          t.SetDirty(C.IQ.jsondata_sales),
                          l(r);
                      },
                    }),
                    i.length == 0 &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#Sale_DefaultSocialModule_NoLinks",
                        ),
                      }),
                  ],
                })
            : (0, e.jsx)(z.t, {
                string: (0, s.we)("#Loading"),
                position: "center",
              });
        }
        var Cd = u(54345),
          it = u(49199),
          wd = u(25518),
          Dd = u(4748),
          yd = u(89084),
          Td = u(45638),
          on = u(32093),
          ln = u(6469),
          ki = Object.defineProperty,
          Id = Object.getOwnPropertyDescriptor,
          Ad = (a, t, n) =>
            t in a
              ? ki(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          Aa = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Id(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && ki(t, n, o), o;
          },
          Ga = (a, t, n) => Ad(a, typeof t != "symbol" ? t + "" : t, n);
        const Xt = class Vt {
          constructor() {
            Ga(this, "m_mapNewsCurators", new Map()),
              Ga(this, "m_bIsLoadComplete", !1),
              Ga(this, "m_mapLangToNewsCurators", new Map()),
              Ga(this, "m_LoadingPromise", null),
              (0, $.Gn)(this);
          }
          static Get() {
            return (
              Vt.s_newsCuratorStore ||
                ((Vt.s_newsCuratorStore = new Vt()),
                (Vt.s_newsCuratorStore.m_LoadingPromise =
                  Vt.s_newsCuratorStore.Init()),
                (window.g_NewsCuratorStore = Vt.s_newsCuratorStore)),
              Vt.s_newsCuratorStore
            );
          }
          IsLoaded() {
            return this.m_bIsLoadComplete;
          }
          WaitForInitialLoad() {
            return this.m_LoadingPromise;
          }
          get allNewsCurators() {
            return Array.from(this.m_mapNewsCurators.values());
          }
          GetCuratorsForLang(t) {
            return this.m_mapLangToNewsCurators.get(t);
          }
          GetNewsCuratorForAccount(t) {
            return this.m_mapNewsCurators.get(t);
          }
          BIsTrustedPressAccount(t) {
            return this.GetNewsCuratorForAccount(t) !== void 0;
          }
          async Init() {
            s.A0.GetLanguageListForRealms([D.TS.EREALM]).forEach((l) =>
              this.m_mapLangToNewsCurators.set(l, []),
            );
            const n = D.TS.STORE_BASE_URL + "events/ajaxgetnewscurators";
            let i = { origin: self.origin };
            const o = await le().get(n, { params: i });
            (0, $.h5)(() => {
              o.data && o.data.success && this.HandleCuratorResponse(o.data),
                (this.m_bIsLoadComplete = !0);
            });
          }
          HandleCuratorResponse(t) {
            var n;
            if (
              (t.groupvanityinfo && J.ac.RegisterClanData(t.groupvanityinfo),
              t.newscuratorinfo)
            )
              for (const i of t.newscuratorinfo) {
                if (this.m_mapNewsCurators.has(i.clanAccountID)) continue;
                this.m_mapNewsCurators.set(i.clanAccountID, i);
                const o = J.ac.GetClanInfoByClanAccountID(i.clanAccountID);
                o &&
                  ((n = this.m_mapLangToNewsCurators.get(o.rss_language)) ==
                    null ||
                    n.push(i));
              }
          }
        };
        Ga(Xt, "s_newsCuratorStore"),
          Aa([$.sH], Xt.prototype, "m_mapNewsCurators", 2),
          Aa([$.sH], Xt.prototype, "m_bIsLoadComplete", 2),
          Aa([$.sH], Xt.prototype, "m_mapLangToNewsCurators", 2),
          Aa([$.EW], Xt.prototype, "allNewsCurators", 1),
          Aa([$.XI], Xt.prototype, "HandleCuratorResponse", 1);
        let Gd = Xt;
        var Fi = u(48473),
          Ld = u(16345),
          Lt = u.n(Ld),
          Ui = Object.defineProperty,
          Bd = Object.getOwnPropertyDescriptor,
          Nd = (a, t, n) =>
            t in a
              ? Ui(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          Md = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Bd(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && Ui(t, n, o), o;
          },
          rn = (a, t, n) => Nd(a, typeof t != "symbol" ? t + "" : t, n);
        function dn(a) {
          const t = new Set();
          return (
            (a.indexOf("games") >= 0 || a.indexOf("dlc") >= 0) && t.add("apps"),
            a.indexOf("curators") >= 0 && t.add("curators"),
            t
          );
        }
        function Od(a) {
          return a == "game" || a == "software"
            ? "games"
            : a == "dlc" || a == "music"
              ? "dlc"
              : null;
        }
        const Pd = 300;
        class Hi extends E.Component {
          constructor() {
            super(...arguments),
              rn(this, "state", {
                strSearchString: "",
                rgAppSuggestions: null,
                rgCuratorSuggestions: null,
              }),
              rn(this, "m_nHighestSentRequestID", 0),
              rn(
                this,
                "m_mapHighestReceivedRequestIDFromBackEnd",
                new Map([
                  ["apps", 0],
                  ["curators", 0],
                ]),
              ),
              rn(this, "m_timerForChange", new Qa.LU());
          }
          componentWillUnmount() {
            this.m_timerForChange.Cancel();
          }
          CloseSuggestions() {
            this.setState({
              rgCuratorSuggestions: null,
              rgAppSuggestions: null,
              strSearchString: "",
            });
          }
          async GetSuggestionsFromServer(t) {
            const n = dn(this.props.rgCorporaToSearch);
            n.has("apps") && this.GetAppSuggestionsFromServer(t),
              n.has("curators") && this.GetCuratorSuggestions(t);
          }
          async GetCuratorSuggestions(t) {
            var n;
            const i = Gd.Get().allNewsCurators,
              o = [];
            for (const l of i) {
              const r = J.ac.GetClanInfoByClanAccountID(l.clanAccountID),
                d = {
                  corpus: "curators",
                  id: l.clanAccountID,
                  name: r == null ? void 0 : r.group_name,
                  img: r == null ? void 0 : r.avatar_full_url,
                };
              if (
                (
                  ((n = r == null ? void 0 : r.group_name) == null
                    ? void 0
                    : n.toLocaleLowerCase()) || ""
                ).indexOf(t) >= 0
              ) {
                if (
                  (this.props.fnFilterSuggestion &&
                    !this.props.fnFilterSuggestion(d)) ||
                  ln.Fm.Get().BIsIgnoringCurator(r.clanAccountID)
                )
                  continue;
                const c = ln.Fm.Get().BIsFollowingCurator(r.clanAccountID),
                  g = (0, e.jsx)(
                    zi,
                    {
                      suggestion: d,
                      fnOnSelected: this.props.fnOnSelected,
                      bShowFollowingLabel: c,
                    },
                    "curatorsug_" + d.id,
                  );
                o.push(
                  this.props.fnDecorateSuggestion
                    ? this.props.fnDecorateSuggestion(d, g)
                    : g,
                );
              }
            }
            this.m_mapHighestReceivedRequestIDFromBackEnd.set(
              "curators",
              this.m_nHighestSentRequestID,
            ),
              this.setState({ rgCuratorSuggestions: o });
          }
          async GetAppSuggestionsFromServer(t) {
            var n;
            const i = this.m_nHighestSentRequestID,
              o = [];
            this.props.rgCorporaToSearch.indexOf("games") >= 0 &&
              (o.push("game"), o.push("software")),
              this.props.rgCorporaToSearch.indexOf("dlc") >= 0 &&
                (o.push("dlc"), o.push("music"));
            const l = {
                cc: D.TS.COUNTRY,
                l: D.TS.LANGUAGE,
                realm: on.TU.k_ESteamRealmGlobal,
                origin: self.origin,
                f: "jsonfull",
                term: t.replace(" ", "+"),
                require_type: o.join(","),
                excluded_tags: ln.Fm.Get().GetExcludedTagsSortedByID(),
                excluded_content_descriptors:
                  ln.Fm.Get().ExcludedContentDescriptor,
              },
              r = `${D.TS.STORE_BASE_URL}search/suggest`,
              d = await le().get(r, { params: l, withCredentials: !0 });
            if (i < this.m_mapHighestReceivedRequestIDFromBackEnd.get("apps"))
              return;
            this.m_mapHighestReceivedRequestIDFromBackEnd.set("apps", i);
            let _;
            (n = d == null ? void 0 : d.data) != null &&
              n.length &&
              (_ = d.data.map((c) => {
                const g = { corpus: Od(c.type), ...c, id: parseInt(c.id) };
                if (
                  this.props.fnFilterSuggestion &&
                  !this.props.fnFilterSuggestion(g)
                )
                  return null;
                const h = (0, e.jsx)(
                  zi,
                  { suggestion: g, fnOnSelected: this.props.fnOnSelected },
                  g.type + g.id,
                );
                return this.props.fnDecorateSuggestion
                  ? this.props.fnDecorateSuggestion(g, h)
                  : h;
              })),
              this.setState({ rgAppSuggestions: _ });
          }
          async UpdateSuggestions(t) {
            const n =
              t.target.value && t.target.value.trim().toLocaleLowerCase();
            if ((this.m_nHighestSentRequestID++, !(n != null && n.length))) {
              Array.from(dn(this.props.rgCorporaToSearch)).forEach((i) =>
                this.m_mapHighestReceivedRequestIDFromBackEnd.set(
                  i,
                  this.m_nHighestSentRequestID,
                ),
              ),
                this.m_timerForChange.Cancel(),
                this.setState({ strSearchString: "" }),
                this.ResetSuggestions();
              return;
            }
            this.setState({ strSearchString: n }),
              this.m_timerForChange.Schedule(Pd, () =>
                this.GetSuggestionsFromServer(n),
              );
          }
          ResetSuggestions() {
            this.setState({
              rgAppSuggestions: null,
              rgCuratorSuggestions: null,
            });
          }
          GetLimitedSuggestions() {
            let { rgAppSuggestions: t, rgCuratorSuggestions: n } = this.state;
            const i = 10;
            let o = t ? t.length : i,
              l = n ? n.length : i;
            return (
              o + l > i && (o = i - Math.min(l, 2)),
              (l = i - o),
              (t = t == null ? void 0 : t.slice(0, o)),
              (n = n == null ? void 0 : n.slice(0, l)),
              { rgAppSuggestions: t, rgCuratorSuggestions: n }
            );
          }
          render() {
            const {
                strLabel: t,
                focusOnMount: n,
                rgCorporaToSearch: i,
                strResultsClass: o,
              } = this.props,
              { strSearchString: l } = this.state,
              { rgAppSuggestions: r, rgCuratorSuggestions: d } =
                this.GetLimitedSuggestions(),
              _ = (l == null ? void 0 : l.length) > 0,
              c = (r == null ? void 0 : r.length) > 0,
              g = (d == null ? void 0 : d.length) > 0,
              h = dn(i).size > 1,
              v =
                h &&
                c &&
                (0, s.we)(
                  i.indexOf("dlc") >= 0
                    ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                    : "#EventCalendar_SearchResultsHeader_GameSection",
                ),
              m = Array.from(dn(i)).some(
                (j) =>
                  this.m_nHighestSentRequestID >
                  this.m_mapHighestReceivedRequestIDFromBackEnd.get(j),
              ),
              x = !g && !c && !m;
            return (0, e.jsxs)("div", {
              className: Lt().SuggestContainer,
              children: [
                (0, e.jsx)(p.pd, {
                  type: "text",
                  label: t,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: _,
                  focusOnMount: n,
                }),
                _ &&
                  (0, e.jsxs)("div", {
                    className: (0, b.A)(Lt().Results, o),
                    children: [
                      c &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              h &&
                                (0, e.jsx)("div", {
                                  className: Lt().ResultSectionHeader,
                                  children: v,
                                }),
                              r,
                            ],
                          },
                          "game-suggestions",
                        ),
                      g &&
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              h &&
                                (0, e.jsx)("div", {
                                  className: Lt().ResultSectionHeader,
                                  children: (0, s.we)(
                                    "#EventCalendar_SearchResultsHeader_CuratorSection",
                                  ),
                                }),
                              d,
                            ],
                          },
                          "curator-suggestions",
                        ),
                      x &&
                        (0, e.jsx)(
                          "div",
                          {
                            className: Lt().EmptyResults,
                            children: (0, s.we)(
                              "#EventCalendar_GameSearch_NoneFound",
                            ),
                          },
                          "empty-results",
                        ),
                      m && (0, e.jsx)(z.t, { size: "small" }),
                    ],
                  }),
              ],
            });
          }
        }
        Md([se.oI], Hi.prototype, "UpdateSuggestions", 1);
        const zi = (a) =>
          (0, e.jsxs)(
            "div",
            {
              className: Lt().ResultRow,
              onClick: () => a.fnOnSelected(a.suggestion),
              children: [
                (0, e.jsx)("img", {
                  src: a.suggestion.img,
                  className: Lt().AvatarImage,
                }),
                (0, e.jsxs)("div", {
                  className: Lt().GameName,
                  children: [" ", (0, Fi.EK)(a.suggestion.name), " "],
                }),
                a.bShowFollowingLabel &&
                  (0, e.jsx)("div", {
                    className: Lt().Label,
                    children: (0, s.we)("#EventCalendar_FollowingCurator"),
                  }),
              ],
            },
            `suggestion-${a.suggestion.id}`,
          );
        function Rd(a) {
          const { editModel: t } = a,
            n = t.GetEventModel(),
            i = (0, O.q3)(() => n.jsondata.associated_appid || 0),
            [o, l] = (0, E.useState)(!!i);
          return n.appid
            ? null
            : o
              ? (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("div", {
                      className: f().EventEditorTextTitleCtn,
                      children: [
                        (0, e.jsx)("span", {
                          className: f().EventEditorTextTitle,
                          children: (0, s.we)("#EventEditor_Associated_App"),
                        }),
                        (0, e.jsx)(Z.o, {
                          tooltip: (0, s.we)(
                            "#EventEditor_Associated_App_ttip",
                          ),
                          className: f().tooltip_Ctn,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: f().InputBorder,
                      children: (0, e.jsx)("input", {
                        type: "number",
                        className: (0, b.A)(
                          ve.EventEditorTitleInput,
                          ve.Subtitle,
                        ),
                        value: i,
                        onChange: (r) => {
                          const d = Number.parseInt(r.currentTarget.value);
                          d !== n.jsondata.associated_appid &&
                            ((n.jsondata.associated_appid = d || void 0),
                            t.SetDirty(C.IQ.description));
                        },
                      }),
                    }),
                  ],
                })
              : (0, e.jsx)(p.Yh, {
                  checked: o,
                  onChange: l,
                  label: (0, s.we)("#EventEditor_Associated_App_Question"),
                  tooltip: (0, s.we)("#EventEditor_Associated_App_ttip"),
                });
        }
        var kd = u(56585),
          La = u(77128),
          Fd = u(6864),
          Ud = u(78606),
          Vi = u.n(Ud),
          pa = u(72609);
        function Hd(a) {
          return (0, e.jsx)("div", {
            className: Vi().HighlightBox,
            children: (0, s.oW)(
              "#PartnerEvent_MM_TitleTip",
              (0, e.jsx)("i", {}),
            ),
          });
        }
        function zd(a) {
          return (0, e.jsxs)("div", {
            className: Vi().HighlightBox,
            children: [
              (0, e.jsx)("p", {
                children: (0, s.we)("#PartnerEvent_MM_DescriptionTip1"),
              }),
              (0, e.jsxs)("ul", {
                children: [
                  (0, e.jsx)("li", {
                    children: (0, s.we)("#PartnerEvent_MM_DescriptionTip2"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, s.we)("#PartnerEvent_MM_DescriptionTip3"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, s.we)("#PartnerEvent_MM_DescriptionTip4"),
                  }),
                ],
              }),
              (0, e.jsx)("p", {
                children: (0, s.we)("#PartnerEvent_MM_DescriptionTip5"),
              }),
              (0, e.jsx)("p", {
                children: (0, e.jsx)("a", {
                  href: `${pa.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                  children: (0, s.we)("#PartnerEvent_MM_LearnMore"),
                }),
              }),
            ],
          });
        }
        function Vd(a) {
          const t = E.useRef(void 0),
            { editModel: n, bCanManuallyTagAssociatedApps: i } = a,
            o = E.useCallback((r, d) => {
              t.current && t.current(r, d);
            }, []),
            l = (0, O.q3)(() => n.BHasTag("vo_marketing_message"));
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Wd, { editModel: n }),
              (0, e.jsx)(Wi, { editModel: n }),
              (0, e.jsx)(Qd, { editModel: n }),
              (0, e.jsx)(Yd, { editModel: n }),
              !!i && (0, e.jsx)(Jd, { editModel: n }),
              (0, e.jsx)(Xo, { editModel: n }),
              (0, e.jsx)(Rd, { editModel: n }),
              l && (0, e.jsx)(zd, {}),
              (0, e.jsxs)("div", {
                className: f().Columns,
                children: [
                  (0, e.jsx)(Zd, { editModel: n, refOnInsertImage: t }),
                  (0, e.jsx)($d, { editModel: n, fnInsertImage: o }),
                ],
              }),
            ],
          });
        }
        function Wd(a) {
          const { editModel: t } = a,
            n = (0, kd.IB)(a.editModel.GetClanSteamID().ConvertTo64BitString()),
            i = n.isSuccess && !!n.data.crowdin_project_id;
          return (0, e.jsx)("div", {
            children: (0, e.jsx)("div", {
              className: f().FlexColumnContainer,
              children: (0, e.jsxs)("div", {
                className: La.LanguageControlsCtn,
                children: [
                  (0, s.we)("#EventEditor_LangaugeDesc"),
                  (0, e.jsxs)("div", {
                    className: (0, b.A)(f().FlexRowContainer, La.ToolContainer),
                    children: [
                      (0, e.jsx)(Qt.$A, { editModel: t }),
                      (0, e.jsx)(Uo, { editModel: t }),
                    ],
                  }),
                  i && (0, e.jsx)(Fd.s, { editModel: a.editModel }),
                ],
              }),
            }),
          });
        }
        function Wi(a) {
          const { editModel: t } = a,
            [n, i] = (0, O.q3)(() => [
              t.GetName(t.GetCurEditLanguage()) || "",
              t.GetEventType(),
            ]),
            o = n.length >= ae.dm,
            l = (0, O.q3)(() => t.BHasTag("vo_marketing_message"));
          let r = (0, s.we)("#EventEditor_EventTitle"),
            d = (0, s.we)("#EventEditor_Title_General_ttip");
          return (
            i == L.uYK
              ? (r = (0, s.we)("#EventEditor_AnnouncementTitle"))
              : i == L.ajI &&
                ((r = (0, s.we)("#EventEditor_CreatorHomeTitle")),
                (d = (0, s.we)("#EventEditor_Title_CreatorHome_ttip"))),
            (0, e.jsxs)(e.Fragment, {
              children: [
                l && (0, e.jsx)(Hd, {}),
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitle,
                  children: [
                    r,
                    !!o &&
                      (0, e.jsx)("span", {
                        className: f().EventEditorTextTitleLengthInfo,
                        children: (0, s.we)(
                          "#EventEditor_EventTitle_Max_Characters_Reached",
                          ae.dm,
                        ),
                      }),
                    (0, e.jsx)(Z.o, { tooltip: d, className: f().tooltip_Ctn }),
                    (0, e.jsx)("span", {
                      className: (0, b.A)(
                        ve.CharactorRemaining,
                        o ? ve.CharactorExhausted : "",
                      ),
                      children: (0, s.we)(
                        "#EventEditor_Input_Characters_Left",
                        ae.dm - n.length,
                      ),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().InputBorder,
                  children: (0, e.jsx)("input", {
                    type: "text",
                    className: (0, b.A)({
                      [ve.EventEditorTitleInput]: !0,
                      [ve.MainTitle]: !0,
                      [ve.EventEditorInputMaxLength]: o,
                    }),
                    value: n,
                    placeholder: (0, s.we)("#EventEditor_Name_Placeholder"),
                    onFocus: (_) => {
                      var c;
                      return (c = _ == null ? void 0 : _.target) == null
                        ? void 0
                        : c.select();
                    },
                    onChange: (_) => {
                      var c;
                      return t.SetName(
                        t.GetCurEditLanguage(),
                        ((c = _ == null ? void 0 : _.currentTarget) == null
                          ? void 0
                          : c.value) || "",
                      );
                    },
                    maxLength: ae.dm,
                  }),
                }),
              ],
            })
          );
        }
        function Qd(a) {
          const { editModel: t } = a,
            n = (0, O.q3)(() => t.GetSubTitle(t.GetCurEditLanguage()) || ""),
            i = n.length >= ae.Pd;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: f().EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_Event_SubTitle"),
                  }),
                  (0, e.jsx)("span", {
                    className: f().EventEditorTextTitleLengthInfo,
                    children: (0, s.we)(
                      i
                        ? "#EventEditor_Event_SubTitle_Details_Reached"
                        : "#EventEditor_Event_SubTitle_Details",
                      ae.Pd,
                    ),
                  }),
                  (0, e.jsx)(Z.o, {
                    tooltip: (0, s.we)(
                      "#EventEditor_SubTitle_General_ttip",
                      ae.Pd,
                    ),
                    className: f().tooltip_Ctn,
                  }),
                  (0, e.jsx)("span", {
                    className: (0, b.A)(
                      ve.CharactorRemaining,
                      i ? ve.CharactorExhausted : "",
                    ),
                    children: (0, s.we)(
                      "#EventEditor_Input_Characters_Left",
                      ae.Pd - n.length,
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: f().InputBorder,
                children: (0, e.jsx)("input", {
                  type: "text",
                  className: (0, b.A)(
                    ve.EventEditorTitleInput,
                    ve.Subtitle,
                    i ? ve.EventEditorInputMaxLength : "",
                  ),
                  value: n,
                  placeholder: (0, s.we)(
                    "#EventEditor_Name_SubTitle_Placeholder",
                  ),
                  onFocus: (o) => {
                    var l;
                    return (l = o == null ? void 0 : o.target) == null
                      ? void 0
                      : l.select();
                  },
                  onChange: (o) => {
                    var l;
                    return t.SetSubTitle(
                      t.GetCurEditLanguage(),
                      ((l = o == null ? void 0 : o.currentTarget) == null
                        ? void 0
                        : l.value) || "",
                    );
                  },
                  maxLength: ae.Pd,
                }),
              }),
            ],
          });
        }
        function Yd(a) {
          const { editModel: t } = a,
            [n, i] = (0, O.q3)(() => [
              t.GetSummary(t.GetCurEditLanguage()) || "",
              t.GetDescription(t.GetCurEditLanguage()) || "",
            ]);
          let o = "";
          n.trim().length == 0 &&
            (i.length == 0
              ? (o = (0, s.we)("#EventEditor_Summary_Placeholder", ae.p$))
              : (o =
                  (0, s.we)("#EventEditor_Summary_Autogenerated") +
                  ae.lh.GenerateSummaryFromText(i)));
          let l = n.length >= ae.p$;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: ve.EventEditorInputPaneContents,
                children: [
                  (0, e.jsxs)("div", {
                    className: f().EventEditorTextTitleCtn,
                    children: [
                      (0, e.jsx)("span", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#EventEditor_Summary_Title"),
                      }),
                      (0, e.jsx)("span", {
                        className: f().EventEditorTextTitleLengthInfo,
                        children: (0, s.we)(
                          l
                            ? "#EventEditor_Summary_Title_Length_Reached"
                            : "#EventEditor_Summary_Title_Length",
                          ae.p$,
                        ),
                      }),
                      (0, e.jsx)(Z.o, {
                        tooltip: (0, s.we)("#EventEditor_Summary_Ttip", ae.p$),
                        className: f().tooltip_Ctn,
                      }),
                      (0, e.jsx)("span", {
                        className: (0, b.A)(
                          ve.CharactorRemaining,
                          l ? ve.CharactorExhausted : "",
                        ),
                        children: (0, s.we)(
                          "#EventEditor_Input_Characters_Left",
                          ae.p$ - n.length,
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsx)("textarea", {
                    className: (0, b.A)(
                      ve.EventEditorTitleInput,
                      ve.Summary,
                      l ? ve.EventEditorInputMaxLength : "",
                    ),
                    value: n,
                    placeholder: o,
                    onFocus: (r) => {
                      var d;
                      return (d = r == null ? void 0 : r.target) == null
                        ? void 0
                        : d.select();
                    },
                    onChange: (r) => {
                      var d;
                      return t.SetSummary(
                        t.GetCurEditLanguage(),
                        ((d = r == null ? void 0 : r.currentTarget) == null
                          ? void 0
                          : d.value) || "",
                      );
                    },
                    maxLength: ae.p$,
                    cols: 40,
                    rows: 2,
                  }),
                ],
              }),
              (0, e.jsx)("div", { className: f().ClearThings }),
            ],
          });
        }
        function Jd(a) {
          const { editModel: t } = a;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: f().EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_ReferencedAppIDs_Header"),
                  }),
                  (0, e.jsx)(Z.o, {
                    tooltip: (0, s.we)("#EventEditor_ReferencedAppIDs_Tooltip"),
                    className: f().tooltip_Ctn,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: ve.SaleImportURL,
                children: (0, e.jsx)(Hi, {
                  strLabel: (0, s.we)(
                    "#EventEditor_ReferencedAppIDs_SearchLabel",
                  ),
                  fnFilterSuggestion: (n) =>
                    !t.GetReferencedAppIDArray().includes(Number(n.id)),
                  fnOnSelected: (n) => {
                    t.GetReferencedAppIDArray().includes(Number(n.id)) ||
                      (t.GetReferencedAppIDArray().push(Number(n.id)),
                      t.SetDirty(C.IQ.jsondata_other));
                  },
                  rgCorporaToSearch: ["games", "dlc"],
                }),
              }),
              t.GetReferencedAppIDArray().length > 0 &&
                (0, e.jsx)(Yt.A, {
                  items: t.GetReferencedAppIDArray(),
                  onDelete: (n) => {
                    t.GetReferencedAppIDArray().splice(n),
                      t.SetDirty(C.IQ.jsondata_other);
                  },
                  onReorder: () => t.SetDirty(C.IQ.jsondata_other),
                  render: (n) =>
                    (0, e.jsx)(Kd, { appid: n }, `suggestion-${n}`),
                }),
            ],
          });
        }
        function Kd(a) {
          const { appid: t } = a,
            [n] = (0, pe.t7)(t, {});
          return (0, e.jsx)("div", {
            className: ve.ResultRow,
            children: (0, e.jsxs)("div", {
              className: ve.GameName,
              children: [
                " ",
                (0, Fi.EK)((n == null ? void 0 : n.GetName()) || "") +
                  ` (${t})`,
                " ",
              ],
            }),
          });
        }
        const qd = E.lazy(() => u.e(7257).then(u.bind(u, 27257)));
        function Zd(a) {
          const { editModel: t, refOnInsertImage: n } = a,
            i = (0, oi.LJ)(),
            [o, l] = Xd(t),
            r = (0, O.q3)(() => t.GetEventType()),
            d = (0, se.QS)(
              (c) => {
                if (!c) return;
                const g = (h, v) => (0, yd.fW)(c, h, v);
                return (
                  (n.current = g),
                  () => {
                    n.current == g && (n.current = void 0);
                  }
                );
              },
              [n],
            ),
            _ = E.useMemo(() => {
              const c = D.iA.is_support;
              return (0, wd.BY)({
                bIncludeMedia: D.UF.CAN_UPLOAD_IMAGES,
                bIncludeValveOnly: c,
              });
            }, []);
          return (0, e.jsxs)("div", {
            className: (0, b.A)(f().LeftCol, La.DescEditorPadding),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children:
                  r == L.uYK
                    ? (0, s.we)("#EventEditor_DescriptionNews")
                    : (0, s.we)("#EventEditor_Description"),
              }),
              (0, e.jsxs)("label", {
                children: [
                  (0, e.jsx)("input", {
                    type: "checkbox",
                    checked: o,
                    onChange: (c) => l(c.currentTarget.checked),
                  }),
                  (0, s.we)("#EventEditor_UseVisualEditor"),
                ],
              }),
              o
                ? (0, e.jsx)(E.Suspense, {
                    children: (0, e.jsx)(qd, {
                      editModel: t,
                      refOnInsertImage: n,
                      limitBBCode: _,
                    }),
                  })
                : (0, e.jsx)(Td.I, {
                    fnGetCurText: () =>
                      t.GetDescription(t.GetCurEditLanguage()),
                    fnOnTextChange: (c) => {
                      var g;
                      return t.SetDescription(
                        t.GetCurEditLanguage(),
                        ((g = c == null ? void 0 : c.currentTarget) == null
                          ? void 0
                          : g.value) || "",
                      );
                    },
                    fnSetText: (c) =>
                      t.SetDescription(t.GetCurEditLanguage(), c),
                    strPlaceholder: (0, s.we)(
                      "#EventEditor_Description_PlaceHolder",
                    ),
                    ref: d,
                    emoticonStore: i,
                    bSupportHTMLImport: !0,
                    showFormatHelp: "PartnerEvents",
                    limitBBCode: _,
                    classNameForTextArea: ve.EventEditorDescription,
                    clanSteamID: t.GetClanSteamID(),
                  }),
            ],
          });
        }
        function Xd(a) {
          const t = "partnerEventsRichEditorOptIn",
            [i, o] = E.useState(() => {
              var r;
              return ((r = localStorage.getItem(t)) != null ? r : "1") == "1";
            }),
            l = E.useCallback(
              (r) => {
                localStorage.setItem(t, r ? "1" : "0"), o(r);
              },
              [t],
            );
          return [i, l];
        }
        function $d(a) {
          const { editModel: t, fnInsertImage: n } = a,
            [i, o, l] = (0, O.q3)(() => [
              t.GetClanSteamID(),
              t.GetAppID(),
              t.GetIncludedRealmList(),
            ]);
          return D.UF.CAN_UPLOAD_IMAGES
            ? (0, e.jsxs)("div", {
                className: (0, b.A)(
                  f().RightCol,
                  La.DescEditorPadding,
                  La.ImagePickerCtn,
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: f().EventEditorTextTitle,
                    children: [
                      (0, s.we)("#ImagePicker_PreviousImages2"),
                      (0, e.jsx)(Z.o, {
                        tooltip: (0, s.we)("#ImagePicker_Images_ttip"),
                        className: f().tooltip_Ctn,
                      }),
                    ],
                  }),
                  (0, e.jsx)(Dd.G, {
                    bShowLightBox: !0,
                    appid: o,
                    clanSteamID: i,
                    imageInsertCallBack: n,
                    fnSetImageURL: t.SetImageURL,
                    rgRealmList: l,
                    fnLangHasData: t.BHasTitleImage,
                    fnGetImageHash: t.GetImageHashAndExt,
                    partnerEventStore: M.mh,
                  }),
                ],
              })
            : null;
        }
        function ec(a) {
          return (0, e.jsx)("div", {
            className: it.TutoralCtn,
            children: (0, e.jsxs)("div", {
              className: it.ExplanationCtn,
              children: [
                (0, e.jsx)("h2", {
                  children: (0, s.oW)("#EventEditor_CreatorHome_Intro_Welcome"),
                }),
                (0, e.jsx)("p", {
                  children: (0, s.oW)(
                    "#EventEditor_CreatorHome_Intro_Desc1",
                    (0, e.jsx)("strong", {}),
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, s.oW)(
                    "#EventEditor_CreatorHome_Intro_Desc2",
                    (0, e.jsx)("strong", {}),
                    (0, e.jsx)("a", {
                      href: "https://partner.steamgames.com/doc/store/creator_homepage",
                    }),
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, s.oW)(
                    "#EventEditor_CreatorHome_Intro_Desc3",
                    (0, e.jsx)("strong", {}),
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, e.jsx)("a", {
                    href: "https://partner.steamgames.com/doc/marketing/event_tools/creatorhome/tools",
                    children: (0, s.oW)(
                      "#EventEditor_CreatorHome_Intro_Documentation",
                    ),
                  }),
                }),
              ],
            }),
          });
        }
        function Qi(a) {
          const { editModel: t } = a,
            [n, i] = (0, O.q3)(() => [t.GetGID(), t.GetClanAccountID()]),
            o = !!n,
            { creatorHome: l } = (0, dt.FV)(i),
            r = null,
            d = l ? l.GetCreatorHomeURL(r) + "admin/curator_edit" : void 0,
            _ = l ? l.GetCreatorHomeURL(r) + "#edit" : void 0;
          return (0, e.jsxs)("div", {
            className: it.CreatorHomeEditCtn,
            children: [
              (0, e.jsx)(Yi, { editModel: t }),
              (0, e.jsx)(Wi, { editModel: t }),
              o &&
                l &&
                (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("div", {
                    className: it.AdminLinkCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: it.LeftCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: it.Label,
                            children: (0, s.we)(
                              "#EventEditor_Event_CreatorHome_AdminAvatarLabel",
                            ),
                          }),
                          (0, e.jsx)("img", {
                            src: l.GetAvatarURLFullSize(),
                            className: it.AvatarImage,
                          }),
                          (0, e.jsx)("div", {
                            className: it.EditLink,
                            children: (0, s.oW)(
                              "#EventEditor_Event_CreatorHome_AdminLinkAvatarLabel",
                              _ ? (0, e.jsx)("a", { href: _ }) : void 0,
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: it.RightCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: it.Label,
                            children: (0, s.we)(
                              "#EventEditor_Event_CreatorHome_AdminTaglineLabel",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: it.Tagline,
                            children: l.GetTagLine(),
                          }),
                          (0, e.jsx)("div", {
                            className: it.EditLink,
                            children: (0, s.oW)(
                              "#EventEditor_Event_CreatorHome_AdminLinkTaglineLabel",
                              d ? (0, e.jsx)("a", { href: d }) : void 0,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              !o &&
                (0, e.jsx)("div", {
                  className: it.SaveWarningCtn,
                  children: (0, s.we)("#Sale_SaveFirst_CreatorHome"),
                }),
              (0, e.jsx)("br", {}),
            ],
          });
        }
        function Yi(a) {
          const { editModel: t } = a,
            [n, i, o] = (0, O.q3)(() => [
              t.GetGID(),
              t.GetClanAccountID(),
              t.BVisible() || t.BUnlisted(),
            ]),
            { creatorHome: l } = (0, dt.FV)(i),
            d = l
              ? l.GetCreatorHomeURL(null) + "admin/creatorhome_link"
              : void 0,
            c = (l == null ? void 0 : l.GetLinkedEventGID()) == n;
          return (0, e.jsxs)("div", {
            className: (0, b.A)(
              it.SelectedExplanationCtn,
              (!o || !c) && it.Warning,
            ),
            children: [
              !o &&
                (0, e.jsx)("div", {
                  children: (0, s.we)("#EventEditor_Event_CreatorHome_Hidden"),
                }),
              o &&
                !c &&
                (0, e.jsx)("div", {
                  children: (0, s.oW)(
                    "#EventEditor_Event_CreatorHome_NotSelected",
                    (0, e.jsx)("b", {}),
                    d ? (0, e.jsx)("a", { href: d }) : void 0,
                  ),
                }),
              o &&
                c &&
                (0, e.jsx)("div", {
                  children: (0, s.oW)(
                    "#EventEditor_Event_CreatorHome_Selected",
                    d ? (0, e.jsx)("a", { href: d }) : void 0,
                  ),
                }),
            ],
          });
        }
        var tc = u(30976),
          ac = u(84865);
        function Un(a) {
          const { editModel: t, mode: n } = a,
            [i, o] = (0, O.q3)(() => [t.GetGID(), t.GetEventType()]);
          return i
            ? (0, e.jsx)(ac.sn, {
                children: (0, e.jsx)(sr, {
                  children: (0, e.jsx)(nc, { editModel: t, mode: n }),
                }),
              })
            : o == L.ajI
              ? (0, e.jsx)(Qi, { editModel: t })
              : (0, e.jsx)("div", {
                  className: (0, b.A)(Ce.SaleContainer, "SaleContainer"),
                  children: (0, s.we)("#Sale_SaveFirst"),
                });
        }
        function nc(a) {
          const { editModel: t, mode: n } = a,
            [i, o, l, r, d, _, c] = (0, O.q3)(() => {
              var De;
              return [
                t.GetEventType(),
                t.GetEventModel().jsondata.sale_presenters,
                t.GetEventModel().jsondata,
                t.GetEventModel().clanSteamID,
                t.GetGID(),
                ((De = t.GetEventModel().jsondata.sale_presenters) == null
                  ? void 0
                  : De.length) > 0,
                t.BVisible(),
              ];
            }),
            { creatorHome: g } = (0, dt.FV)(r.GetAccountID()),
            { bRequiresHostDisclaimer: h } = (0, we.lA)(r.GetAccountID(), d),
            v = kt.WN.includes(r.GetAccountID()),
            m = i == L.ajI;
          (0, E.useEffect)(() => {
            ct.oq.Get().EnsureLoaded(t),
              !ct.oq.Get().BHasExplicitSettings(t) &&
                t.GetSaleSectionCount() > 10 &&
                (0, ct.TA)();
          }, [t]);
          const x = E.useCallback((De) => {
            (0, ct.Nx)(De.strSectionId) && (0, ct.mi)(De.strSectionId);
          }, []);
          if (
            !t.BIsSourceEventSaleEnabled() &&
            l.clone_from_event_gid &&
            l.clone_from_sale_enabled &&
            (!g || !g.BHasClanAccountFlagSet(la.Wv.Jn))
          )
            return (0, e.jsxs)("div", {
              className: (0, b.A)(Ce.SaleContainer, "SaleContainer"),
              children: [
                (0, e.jsx)("div", {
                  className: Jt.WarningStyles,
                  children: (0, s.we)("#Sale_CloneNotReady"),
                }),
                (0, e.jsx)(Di, { mode: n }),
              ],
            });
          let j = "#Sale_title",
            S = "doc/marketing/event_tools/sales/tools";
          n == Ka
            ? ((j = "#Sale_UpdateLandingPage_title"),
              (S = "doc/marketing/event_tools/updatelandingpages/tools"))
            : n == qa &&
              ((j = "#Sale_CreatorHome_title"),
              (S = "doc/marketing/event_tools/creatorhome/tools"));
          const y = (0, ge.m)(t.GetClanSteamID()),
            { bVisible: N } = (0, J.Yp)(t.GetEventModel()),
            { bVisible: A } = (0, J._5)(t.GetEventModel()),
            { bVisible: te } = (0, J.Ao)(t.GetEventModel()),
            oe = N || A || (te && y);
          return (0, e.jsxs)("div", {
            className: (0, b.A)(Ce.SaleContainer, "SaleContainer"),
            children: [
              !m && (0, e.jsx)(Di, { mode: n }),
              (0, e.jsxs)("div", {
                className: Q.EventEditorTextTitleCtn,
                children: [
                  (0, e.jsx)("span", {
                    className: (0, b.A)(Q.EventEditorTextTitle, Q.FlexGrow),
                    children: (0, s.we)(j),
                  }),
                  (0, e.jsx)(B.uU, {
                    href: D.TS.PARTNER_BASE_URL + S,
                    className: (0, b.A)(Q.doclink),
                    children: (0, e.jsx)("span", {
                      children: (0, s.we)("#Broadcast_documentation"),
                    }),
                  }),
                ],
              }),
              m && (0, e.jsx)(Qi, { editModel: t }),
              (0, e.jsxs)(mr, {
                children: [
                  !!(!v && (!h || _)) &&
                    (0, e.jsx)(gi, {
                      clanSteamID: r,
                      gidClanEvent: d,
                      rgSalePresenters: o,
                      bIsEventVisible: c,
                      fnCleanSaleEventPresenters: () => {
                        (t.GetEventModel().jsondata.sale_presenters = void 0),
                          t.SetDirty(C.IQ.jsondata_sales);
                      },
                      bPublishTab: !1,
                    }),
                  (0, e.jsx)(_r, {}),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)(rd, { children: (0, e.jsx)(ed, {}) }),
                      (0, e.jsx)(Zr, { editModel: t, onSelected: x }),
                      (0, e.jsx)(Br, { editModel: t }),
                      m &&
                        (0, e.jsx)(At, {
                          strSectionId: "SalePageEdit_CreatorHomeTutorial",
                          hasMinimize: !0,
                          strTitle: (0, s.we)("#Sale_PageCreatorHomeTutorial"),
                          children: (0, e.jsx)(ec, {}),
                        }),
                      oe &&
                        (0, e.jsx)(At, {
                          strSectionId: "SalePageEdit_Config",
                          hasMinimize: !0,
                          strTitle: (0, s.we)("#Sale_PageConfigOptions"),
                          children: (0, e.jsx)(Dr, {
                            salePage: N,
                            updateLandingPage: A,
                          }),
                        }),
                      (0, e.jsx)(sc, { ...a }),
                      (0, e.jsx)(At, {
                        strSectionId: "SalePageEdit_AllArtworkCtn",
                        hasMinimize: !0,
                        strTitle: (0, s.we)(
                          m
                            ? "#Sale_Artwork_Sections_Page"
                            : "#Sale_Artwork_Sections",
                        ),
                        children: (0, e.jsx)(ir, { editModel: t }),
                      }),
                      (t.BHasTag("contenthub") ||
                        t.GetEventModel().BUsesContentHubForItemSource()) &&
                        (0, e.jsx)(At, {
                          strSectionId: "SalePageEdit_ContentHub",
                          hasMinimize: !0,
                          strTitle: "Content Hub Settings",
                          strToolTip:
                            "Manage settings for content hubs, including overrides for specific hubs and hub-based sales.",
                          children: (0, e.jsx)(Nl, { editModel: t }),
                        }),
                      (0, e.jsx)(ic, { editModel: t }),
                      (0, e.jsx)(At, {
                        strSectionId: "SalePageEdit_SocialModule",
                        hasMinimize: !0,
                        strTitle: (0, s.we)("#Sale_DefaultSocialModule"),
                        children: (0, e.jsx)(Ed, { editModel: t }),
                      }),
                      (0, e.jsx)("div", { className: Ce.SectionDivider }),
                      !m &&
                        (0, e.jsx)(At, {
                          strSectionId: "SalePageEdit_BrowseMore",
                          strTitle: `(VO) ${(0, s.we)("#Sale_BrowseMore")}`,
                          valveOnlyClanSteamID: t.GetClanSteamID(),
                          requireAdmin: !0,
                          children: (0, e.jsx)(lc, { editModel: t }),
                        }),
                      !m &&
                        (0, e.jsx)(At, {
                          strSectionId: "SalePageEdit_SubMenuEditor",
                          hasMinimize: !0,
                          strTitle: "(VO) Sub Menu Editor",
                          valveOnlyClanSteamID: t.GetClanSteamID(),
                          dataToCopy: Nn.E.k_EventData_SubMenu,
                          children: (0, e.jsx)(Cd.vk, { editModel: t }),
                        }),
                      (0, e.jsx)(At, {
                        strSectionId: "SalePageEdit_CustomCSSCode",
                        hasMinimize: !0,
                        strTitle: "(VO) Custom CSS",
                        valveOnlyClanSteamID: t.GetClanSteamID(),
                        children: (0, e.jsx)(nd, { editModel: t }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function sc(a) {
          var t;
          const { editModel: n, mode: i } = a,
            [o, l, r, d] = (0, O.q3)(() => [
              n.GetEventType(),
              n.GetEventModel().clanSteamID,
              n.GetEventModel().GID,
              n.GetEventModel().jsondata.sale_creator_home_filter_listid,
            ]),
            _ = (0, tc.a)(l.GetAccountID(), d),
            {
              bLoading: c,
              strExternalSaleEventType: g,
              fnSetExternalSaleEventType: h,
            } = (0, we.g7)(l.GetAccountID(), r),
            v = (0, ud.iR)(n.GetEventModel());
          if (c) return (0, e.jsx)(z.t, { size: "small" });
          const m = o == L.ajI;
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(At, {
              strSectionId: "SalePageEdit_TaggedItems",
              hasMinimize: !0,
              strToolTip: (0, s.we)("#Sale_TagFilter_SectionTooltip"),
              strTitle: (0, s.we)(
                "#Sale_TaggedItemsSection",
                v
                  ? (t = _ == null ? void 0 : _.length) != null
                    ? t
                    : 0
                  : n.GetEventModel().GetTaggedItems().length,
              ),
              children: [
                v && (0, e.jsx)(yi.w7, { editModel: n }),
                !v && (0, e.jsx)(yi.PT, { editModel: n }),
                !m &&
                  (0, e.jsxs)(ge.E, {
                    clanSteamID: l,
                    children: [
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(pi, {
                        strExternalSaleEventType: g,
                        fnSetExternalSaleEventType: h,
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function ic(a) {
          var t;
          const { editModel: n } = a,
            i = n.GetCurEditLanguage(),
            o = n.GetEventModel(),
            [l, r, d, _] = (0, O.q3)(() => {
              let y = -1;
              const N = new Map();
              for (const [A, te] of o.GetSaleSections().entries())
                N.set(te.section_type, (N.get(te.section_type) || 0) + 1),
                  y == -1 && te.section_type == "tabs" && (y = A);
              return [o.GetSaleSections().length, N, y, (0, an.dy)()];
            }),
            [c, g] = E.useState(""),
            h = (y) => {
              var N, A;
              const te =
                (N = c == null ? void 0 : c.trim().toLowerCase()) != null
                  ? N
                  : "";
              if (
                te.length == 0 ||
                ((A = y.internal_section_title) != null &&
                  A.toLowerCase().includes(te)) ||
                y.section_type.includes(te)
              )
                return !0;
              const oe = (0, Ti.yO)(
                y,
                o,
                i,
                o.clanSteamID.GetAccountID(),
                yt.uF,
              );
              return typeof oe == "string" && oe.toLowerCase().includes(te);
            },
            v =
              _ !== void 0 ||
              ((t = c == null ? void 0 : c.trim()) == null
                ? void 0
                : t.length) > 0,
            m = o
              .GetSaleSections()
              .filter(
                (y, N) => (_ === void 0 || N < d || (0, Gi.bF)(_, y)) && h(y),
              ),
            x = rc(m),
            j = (y, N) => {
              var A;
              const te = kn.mj + y.unique_id,
                oe = (0, Ft.vx)(y.section_type) && r.get(y.section_type) > 1;
              return (0, e.jsx)(
                Kt,
                {
                  strSectionId: te,
                  children: (0, e.jsx)(Ft.m, {
                    ref:
                      N == m.length - 1
                        ? (De) => x(De, m[N].unique_id)
                        : void 0,
                    index: N,
                    saleSection: y,
                    isDuplicateSingleton: oe,
                    editModel: n,
                    editLanguage: i,
                  }),
                },
                kn.mj + ((A = y.unique_id) != null ? A : N),
              );
            },
            S = (y, N) => {
              (0, Ut.yY)(n.GetEventModel().jsondata.sale_sections, y, N),
                n.SetDirty(C.IQ.jsondata_sales);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: Ce.CustomSectionsTitle,
                children: [
                  (0, e.jsx)("div", {
                    className: Q.EventEditorTextTitle,
                    children: (0, s.we)("#Sale_Sections_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: Ce.EventEditorSectionSearchLabel,
                    children: (0, s.we)("#Sale_Sections_Search"),
                  }),
                  (0, e.jsx)(p.pd, {
                    type: "text",
                    value: c,
                    onChange: (y) => g(y.target.value),
                  }),
                ],
              }),
              l == 0
                ? (0, e.jsx)(oc, {})
                : (0, e.jsx)(Yt.A, {
                    items: m,
                    bDisabled: v,
                    onMove: S,
                    render: j,
                  }),
              (0, e.jsxs)("div", {
                id: "sale_editor_button_after_all_sections",
                className: Ce.AddSectionBtnCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, b.A)(
                      Q.SaleSectionHeader,
                      "SaleSectionHeader",
                    ),
                    children: (0, s.we)("#Sale_AddNewSection_Title"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, s.we)("#Sale_AddNewSection_Desc"),
                  }),
                  (0, e.jsx)(Ni, { editModel: n }),
                ],
              }),
            ],
          });
        }
        function oc(a) {
          return (0, e.jsxs)("div", {
            id: "NoSaleSections",
            className: (0, b.A)(Ce.SaleSection, Ce.InEditor),
            children: [
              (0, e.jsx)("div", {
                className: (0, b.A)(Q.SaleSectionHeader, "SaleSectionHeader"),
                children: (0, s.we)("#Sale_SectionListPlaceholder_Header"),
              }),
              (0, e.jsx)("div", {
                className: Ce.SaleSectionPlaceholder,
                children: (0, s.we)("#Sale_SectionListPlaceholder_Content"),
              }),
            ],
          });
        }
        function lc(a) {
          const { editModel: t } = a,
            n = t.GetEventModel().jsondata,
            [i, o, l, r] = (0, O.q3)(() => [
              n.sale_browsemore_url,
              n.sale_browsemore_color,
              n.sale_browsemore_bgcolor,
              n.sale_browse_more_button,
            ]),
            { openColorPicker: d } = (0, ya.p)(),
            _ = (m) => {
              d(m, {
                color: o,
                onChange: (x) => v(x, "sale_browsemore_color"),
              });
            },
            c = (m) => {
              const { sale_browsemore_bgcolor: x } = t.GetEventModel().jsondata;
              d(m, {
                color: x,
                onChange: (j) => v(j, "sale_browsemore_bgcolor"),
              });
            },
            g = (m) => {
              (t.GetEventModel().jsondata.sale_browse_more_button = m),
                t.SetDirty(C.IQ.jsondata_sales);
            },
            h = (m) => {
              const x = t.GetEventModel().jsondata;
              (x[m.target.name] = m.target.value),
                t.SetDirty(C.IQ.jsondata_sales);
            },
            v = (m, x) => {
              const j = t.GetEventModel().jsondata;
              (j[x] = m), t.SetDirty(C.IQ.jsondata_sales);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.RF, {
                onChange: g,
                label: (0, s.we)("#Sale_BrowseMore_Desc"),
                checked: r,
              }),
              r &&
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(p.pd, {
                      type: "text",
                      label: (0, s.we)("#Sale_BrowseMore_URL"),
                      name: "sale_browsemore_url",
                      placeholder: (0, s.we)("#Sale_BrowseMore_URL"),
                      value: i,
                      onChange: h,
                    }),
                    (0, e.jsx)(p.$n, {
                      onClick: _,
                      className: Q.EventEditorTextTitle,
                      style: { color: o, backgroundColor: l },
                      children: (0, s.we)("#Sale_Section_Label_Color"),
                    }),
                    (0, e.jsx)(p.$n, {
                      onClick: c,
                      className: Q.EventEditorTextTitle,
                      style: { color: o, backgroundColor: l },
                      children: (0, s.we)("#Sale_Section_Background_Color"),
                    }),
                    (0, e.jsx)(sd.A, {
                      text: (0, s.we)("#Sale_SeeAllSpecials"),
                      url: "",
                      color: o,
                      bgcolor: l,
                    }),
                  ],
                }),
            ],
          });
        }
        function rc(a) {
          const t = a.map((l) => l.unique_id).join(","),
            [n, i] = E.useState(t);
          return (
            E.useEffect(() => {
              i(t);
            }, [t]),
            (l, r) => {
              if (!l) return;
              const d = n.length == 0 && r > 0,
                _ = n + "," + r == t;
              (d || _) &&
                l.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          );
        }
        function dc(a, t) {
          const n = (0, Ta.I)({
            queryKey: ["useSaleSectionAggregateData", a, t],
            queryFn: async () => {
              const i = k.b.InitFromClanID(t),
                o = `${pa.TS.COMMUNITY_BASE_URL}gid/${i.ConvertTo64BitString()}/ajaxgetsalesectionstats?event_gid=${a}`,
                l = { event_gid: a };
              return (await le().get(o, { params: l })).data.results || [];
            },
            enabled: !!(a && t),
          });
          return n.isLoading ? null : n.data;
        }
        function cc(a) {
          const { editModel: t } = a,
            n = (0, K.f1)(),
            [i, o, l] = (0, O.q3)(() => [
              t.BHasSaleEnabled(),
              t.BHidden(),
              t.GetEventStartTime(),
            ]);
          return !i || o || l > n
            ? (0, e.jsx)("div", {
                children: "Sale Page not visible or started. No stats to share",
              })
            : (0, e.jsx)(uc, { ...a });
        }
        function uc(a) {
          const { editModel: t } = a,
            n = dc(t.GetGID(), t.GetClanAccountID());
          return n
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(p.$n, {
                    onClick: () => {
                      const i = [];
                      i.push([
                        "Feature",
                        "Date",
                        "Impression",
                        "Visits",
                        "Ownership Impression",
                        "Owner Visit",
                        "Wishlist",
                        "Add to Cart",
                        "Ignore",
                      ]),
                        n.forEach((l) => {
                          i.push([
                            "" + l.feature,
                            (0, s.TW)(l.rtdate + 1440 * 60),
                            "" + l.total_impressions,
                            "" + l.total_views,
                            "" + l.total_owner_impressions,
                            "" + l.total_owner_views,
                            "" + l.total_wishlists,
                            "" + l.total_add_to_carts,
                            "" + l.total_ignores,
                          ]);
                        });
                      const o =
                        (t.GetName() + "_stats").replace(" ", "_") + ".csv";
                      Ue.g.WriteCSVToFile(i, o);
                    },
                    children: "Export to CSV",
                  }),
                  (0, e.jsx)(hc, { rgStats: n }),
                  (0, e.jsx)(mc, { rgStats: n }),
                ],
              })
            : (0, e.jsx)(z.t, {});
        }
        function Ji(a, t) {
          return !t || t == 0 ? "" : "" + ((a * 100) / t).toFixed(1);
        }
        function $t(a) {
          return new Intl.NumberFormat((0, s.l4)(), {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(a);
        }
        function hc(a) {
          const { rgStats: t } = a,
            n = (0, E.useMemo)(() => {
              const i = new Map();
              return (
                t.forEach((o) => {
                  if (i.has(o.feature)) {
                    const l = i.get(o.feature);
                    (l.total_views += o.total_views),
                      (l.total_impressions += o.total_impressions),
                      (l.total_owner_views += o.total_owner_views),
                      (l.total_owner_impressions += o.total_owner_impressions),
                      (l.total_wishlists += o.total_wishlists),
                      (l.total_ignores += o.total_ignores),
                      (l.total_add_to_carts += o.total_add_to_carts),
                      i.set(o.feature, l);
                  } else i.set(o.feature, { ...o });
                }),
                Array.from(i.values()).sort(
                  (o, l) => l.total_impressions - o.total_impressions,
                )
              );
            }, [t]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("h3", { children: "Total For Entire Sale" }),
              (0, e.jsx)(Ki, { rgStats: n }),
            ],
          });
        }
        function Ki(a) {
          const { rgStats: t } = a;
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)("table", {
              children: [
                (0, e.jsxs)("thead", {
                  children: [
                    (0, e.jsx)("th", { children: "Feature" }),
                    (0, e.jsx)("th", { children: "Impressions" }),
                    (0, e.jsx)("th", { children: "Visits" }),
                    (0, e.jsx)("th", { children: "Impression to Visits" }),
                    (0, e.jsx)("th", { children: "Owner Impressions" }),
                    (0, e.jsx)("th", { children: "Owner Visits" }),
                    (0, e.jsx)("th", { children: "Wishlist" }),
                    (0, e.jsx)("th", { children: "Impression to Wishlist" }),
                    (0, e.jsx)("th", { children: "Add to Cart" }),
                    (0, e.jsx)("th", { children: "Ignore" }),
                  ],
                }),
                (0, e.jsx)("tbody", {
                  children: t.map((n) =>
                    (0, e.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, e.jsx)("td", { children: n.feature }),
                          (0, e.jsx)("td", {
                            children: $t(n.total_impressions),
                          }),
                          (0, e.jsx)("td", { children: $t(n.total_views) }),
                          (0, e.jsx)("td", {
                            children: Ji(n.total_views, n.total_impressions),
                          }),
                          (0, e.jsx)("td", {
                            children: $t(n.total_owner_impressions),
                          }),
                          (0, e.jsx)("td", {
                            children: $t(n.total_owner_views),
                          }),
                          (0, e.jsx)("td", { children: $t(n.total_wishlists) }),
                          (0, e.jsx)("td", {
                            children: Ji(
                              n.total_wishlists,
                              n.total_impressions,
                            ),
                          }),
                          (0, e.jsx)("td", {
                            children: $t(n.total_add_to_carts),
                          }),
                          (0, e.jsx)("td", { children: $t(n.total_ignores) }),
                        ],
                      },
                      n.feature + "_" + n.rtdate,
                    ),
                  ),
                }),
              ],
            }),
          });
        }
        function mc(a) {
          const { rgStats: t } = a,
            n = (0, E.useMemo)(() => {
              const i = new Set();
              return (
                t.forEach((o) => {
                  i.add(o.rtdate);
                }),
                Array.from(i).sort((o, l) => o - l)
              );
            }, [t]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("h1", { children: "By Each Date" }),
              n.map((i) => (0, e.jsx)(_c, { rgStats: t, rtDate: i }, "" + i)),
            ],
          });
        }
        function _c(a) {
          const { rgStats: t, rtDate: n } = a,
            i = (0, E.useMemo)(
              () =>
                t
                  .filter((o) => o.rtdate == n)
                  .sort((o, l) => l.total_impressions - o.total_impressions),
              [t, n],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("h3", {
                children: ["Stats for: ", (0, s.TW)(n + 1440 * 60)],
              }),
              (0, e.jsx)(Ki, { rgStats: i }),
            ],
          });
        }
        var pc = u(35076),
          vc = u(70377),
          Bt = u(25279);
        const cn = "vo_sale_store_capsules",
          Hn = [
            {
              type: "header_2x",
              artworkType: "sale_store_capsule_header",
              strDesignToken: "#EventEditor_SaleStoreCapsule_header_Design",
              strUsageToken: "#EventEditor_SaleStoreCapsule_header_Usage",
            },
            {
              type: "small_capsule_2x",
              artworkType: "sale_store_capsule_small",
              strDesignToken: "#EventEditor_SaleStoreCapsule_small_Design",
              strUsageToken: "#EventEditor_SaleStoreCapsule_small_Usage",
            },
            {
              type: "main_capsule_2x",
              artworkType: "sale_store_capsule_main",
              strDesignToken: "#EventEditor_SaleStoreCapsule_main_Design",
              strUsageToken: "#EventEditor_SaleStoreCapsule_main_Usage",
            },
            {
              type: "hero_capsule_2x",
              artworkType: "sale_store_capsule_vertical",
              strDesignToken: "#EventEditor_SaleStoreCapsule_vertical_Design",
              strUsageToken: "#EventEditor_SaleStoreCapsule_vertical_Usage",
            },
          ],
          gc = Hn.map((a) => a.artworkType);
        function Sc(a) {
          return "#EventEditor_ArtworkType_" + a.artworkType;
        }
        function Ec(a) {
          var t;
          return (t = Hn.find((n) => n.artworkType === a)) == null
            ? void 0
            : t.type;
        }
        function fc(a, t, n) {
          var i, o;
          return (o =
            (i = a == null ? void 0 : a[t]) == null ? void 0 : i[n]) != null
            ? o
            : null;
        }
        function xc(a, t) {
          return t
            ? `${wt.TS.STORE_ITEM_BASE_URL}steam/clans/${a}/${t}`
            : void 0;
        }
        function bc(a, t) {
          const n = a == null ? void 0 : a[t];
          return n
            ? Array.from(n.keys()).filter((i) => {
                var o;
                return !!((o = n[i]) != null && o.image);
              })
            : [];
        }
        function jc(a, t, n, i) {
          var o;
          const l = Ut.$Y(
            [...((o = a == null ? void 0 : a[t]) != null ? o : [])],
            L.bP9,
            null,
          );
          return (l[n] = i), { ...a, [t]: l };
        }
        function Cc(a, t) {
          const n = { ...a };
          return delete n[t], n;
        }
        var wc = u(5471),
          Dc = u(91261),
          yc = u(47155),
          Ba = u.n(yc);
        function qi(a) {
          return a.BHasSaleEnabled() && (0, J.Yp)(a).bVisible;
        }
        function Tc(a) {
          return qi(a.GetEventModel())
            ? ft.KN.Get().GetPartnerEventPermissions(a.GetClanSteamID())
                .valve_admin || a.BHasTag(cn)
            : !1;
        }
        function Ic(a) {
          const { editModel: t } = a,
            n = (0, E.useCallback)(
              (r, d, _) => {
                (0, $.h5)(() => {
                  const c = t.GetEventModel().jsondata;
                  (c.sale_store_capsules = jc(c.sale_store_capsules, r, d, _)),
                    t.SetDirty(C.IQ.jsondata_image);
                });
              },
              [t],
            ),
            i = (0, E.useCallback)(
              (r) => {
                (0, $.h5)(() => {
                  const d = t.GetEventModel().jsondata;
                  (d.sale_store_capsules = Cc(d.sale_store_capsules, r)),
                    t.SetDirty(C.IQ.jsondata_image);
                });
              },
              [t],
            ),
            o = (0, E.useCallback)(
              (r, d, _, c, g) => {
                const h = Ec(g);
                if (!h) {
                  (0, xa.wT)(
                    !1,
                    "Unexpected artwork type for a sale store capsule: " + g,
                  );
                  return;
                }
                const v = (0, vc.G)(r, d);
                v != null && v.image
                  ? n(h, _, v)
                  : (0, xa.wT)(
                      !1,
                      "Sale store capsule conversion produced no image: " + r,
                    );
              },
              [n],
            ),
            l = (0, O.q3)(() => !t.BHasTag(cn));
          return (0, e.jsxs)("div", {
            className: (0, b.A)(
              fe().ArtworkSelectorContainer,
              l && f().ValveOnlyBackground,
            ),
            children: [
              (0, e.jsx)("div", {
                className: fe().Title,
                children:
                  (l ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_SaleStoreCapsules_Title"),
              }),
              (0, e.jsxs)("div", {
                className: (0, b.A)(fe().SelectImageBlock, fe().Tips),
                children: [
                  (0, e.jsx)("p", {
                    children: (0, s.we)("#EventEditor_SaleStoreCapsules_Tip1"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, s.we)("#EventEditor_SaleStoreCapsules_Tip2"),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, b.A)(fe().SelectImageBlock, Ba().UploaderCtn),
                children: (0, e.jsx)(wc.a, {
                  rgRealmList: t.GetIncludedRealmList(),
                  rgSupportArtwork: [...gc],
                  strUploadAjaxURL: (0, pc.v)(t.GetClanSteamID()),
                  fnOnUploadSuccess: o,
                  bTwoPhaseUpload: !0,
                  bDirectTempStorageUpload: !0,
                }),
              }),
              Hn.map((r) =>
                (0, e.jsx)(
                  Ac,
                  {
                    editModel: t,
                    info: r,
                    fnSetCapsuleMedia: n,
                    fnClearCapsule: i,
                  },
                  r.type,
                ),
              ),
            ],
          });
        }
        function Ac(a) {
          const {
              editModel: t,
              info: n,
              fnSetCapsuleMedia: i,
              fnClearCapsule: o,
            } = a,
            l = (0, O.q3)(() => t.GetEventModel().jsondata.sale_store_capsules),
            r = t.GetClanAccountID(),
            d = (0, E.useCallback)(
              (g) => {
                var h;
                const v = fc(l, n.type, g);
                return v ? xc(r, (h = v.image_2x) != null ? h : v.image) : null;
              },
              [l, n.type, r],
            ),
            _ = (0, E.useMemo)(() => bc(l, n.type), [l, n.type]),
            c = Bt.Fj[n.artworkType];
          return (0, e.jsxs)("div", {
            className: Ba().CapsuleCtn,
            children: [
              (0, e.jsxs)("div", {
                className: Ba().CapsuleTitle,
                children: [
                  (0, s.we)(Sc(n)),
                  (0, e.jsxs)("span", {
                    className: Ba().CapsuleDimensions,
                    children: [
                      (0, Bt.qj)(c.width),
                      "px x ",
                      (0, Bt.qj)(c.height),
                      "px",
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, b.A)(fe().SelectImageBlock, fe().Tips),
                children: [
                  (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("b", {
                        children: (0, s.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, s.we)(n.strDesignToken),
                    ],
                  }),
                  (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("b", {
                        children: (0, s.we)("#selectimage_tip_usage_title"),
                      }),
                      ": ",
                      (0, s.we)(n.strUsageToken),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(Dc.z, {
                rgAssetLangs: _,
                fnGetAssetUrl: d,
                fnDeletAssetLang: (g) => i(n.type, g, null),
                fnDeleteAllAssets: () => o(n.type),
                imageClassname: Ba().CapsulePreview,
                bVerifyAssets: !0,
              }),
            ],
          });
        }
        var Na = u(34032),
          Gc = Object.defineProperty,
          Lc = Object.getOwnPropertyDescriptor,
          ke = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Lc(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && Gc(t, n, o), o;
          };
        class Ae {
          constructor(t) {
            (this.m_editModel = void 0),
              (0, $.Gn)(this),
              (this.m_editModel = t);
          }
          GetJSONData() {
            return this.m_editModel.GetEventModel().jsondata;
          }
          GetBroadcastAllowList() {
            return this.GetJSONData().broadcast_whitelist;
          }
          SetBroadcastEnabled(t) {
            this.GetJSONData().bBroadcastEnabled !== t &&
              ((this.GetJSONData().bBroadcastEnabled = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetBroadcastForceBanner(t) {
            this.GetJSONData().broadcast_force_banner !== t &&
              ((this.GetJSONData().broadcast_force_banner = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetChangeSetting(t) {
            this.GetJSONData().broadcastChatSetting !== t &&
              ((this.GetJSONData().broadcastChatSetting = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetTitleToken(t) {
            this.GetJSONData().default_broadcast_title !== t &&
              ((this.GetJSONData().default_broadcast_title = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetCustomTitleLocalize(t, n) {
            this.GetJSONData().localized_broadcast_title[t] !== n &&
              ((this.GetJSONData().localized_broadcast_title[t] = n),
              (this.GetJSONData().localized_broadcast_title = [
                ...this.GetJSONData().localized_broadcast_title,
              ]),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          AddAccountToWhiteList(t) {
            const n = this.GetJSONData().broadcast_whitelist;
            n.includes(t) ||
              (n.push(t),
              (this.GetJSONData().broadcast_whitelist = [
                ...this.GetJSONData().broadcast_whitelist,
              ]),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          DeleteWhiteListAccount(t) {
            let n = this.GetJSONData().broadcast_whitelist.indexOf(t);
            n < 0 ||
              (this.GetJSONData().broadcast_whitelist.splice(n, 1),
              this.GetJSONData().broadcast_language &&
                this.GetJSONData().broadcast_language.length > n &&
                this.GetJSONData().broadcast_language.splice(n, 1),
              this.GetJSONData().broadcast_priority &&
                this.GetJSONData().broadcast_priority.length > n &&
                this.GetJSONData().broadcast_priority.splice(n, 1),
              (this.GetJSONData().broadcast_whitelist = [
                ...this.GetJSONData().broadcast_whitelist,
              ]),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetWhiteListAccountLanguage(t, n) {
            let i = this.GetJSONData().broadcast_whitelist.indexOf(t);
            if (i < 0) return;
            const o = this.GetJSONData().broadcast_whitelist;
            if (i < o.length) {
              if (!this.GetJSONData().broadcast_language)
                if (n != L.xPp)
                  this.GetJSONData().broadcast_language = new Array();
                else return;
              const l = this.GetJSONData().broadcast_language;
              if (l.length < i && n == L.xPp) return;
              for (; l.length <= i; ) l.push(L.xPp);
              if (l[i] != n) {
                for (l[i] = n; l.length > 0 && l[l.length - 1] == L.xPp; )
                  l.pop();
                l.length == 0
                  ? (this.GetJSONData().broadcast_language = void 0)
                  : (this.GetJSONData().broadcast_language = [
                      ...this.GetJSONData().broadcast_language,
                    ]),
                  this.m_editModel.SetDirty(C.IQ.jsondata_broadcast);
              }
            }
          }
          SetWhiteListAccountPriority(t, n) {
            const i = this.GetJSONData().broadcast_whitelist.indexOf(t);
            if (i < 0) return;
            const o = (0, Ut.$Y)(
              this.GetJSONData().broadcast_priority || [],
              i + 1,
              "",
            );
            for (o[i] = n; o.length > 0 && !o[o.length - 1]; ) o.pop();
            (this.GetJSONData().broadcast_priority = o),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast);
          }
          GetWhiteListAccountPriority(t, n) {
            const i = this.GetJSONData().broadcast_whitelist.indexOf(t);
            return i < 0 ||
              !this.GetJSONData().broadcast_priority ||
              i >= this.GetJSONData().broadcast_priority.length
              ? n
              : this.GetJSONData().broadcast_priority[i] || n;
          }
          RemoveWhiteListAtIndex(t) {
            this.GetJSONData().broadcast_whitelist.length > t &&
              (this.GetJSONData().broadcast_whitelist.splice(t, 1),
              (this.GetJSONData().broadcast_whitelist = [
                ...this.GetJSONData().broadcast_whitelist,
              ]),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          ClearWhiteList() {
            this.GetJSONData().broadcast_whitelist.length > 0 &&
              ((this.GetJSONData().broadcast_whitelist = []),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          GetBroadcastContentType() {
            return this.GetJSONData().broadcast_content_type;
          }
          SetBroadcastContentType(t) {
            this.GetJSONData().broadcast_content_type != t &&
              ((this.GetJSONData().broadcast_content_type = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          GetPrerollVideo() {
            return this.GetJSONData().broadcast_preroll_vod_appid;
          }
          SetPrerollVODAppID(t) {
            this.GetJSONData().broadcast_preroll_vod_appid !== t &&
              ((this.GetJSONData().broadcast_preroll_vod_appid = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          GetPrerollTrailer() {
            return {
              strAppid: this.GetJSONData().broadcast_preroll_trailer_appid,
              strTrailerid: this.GetJSONData().broadcsat_preroll_trailer_id,
            };
          }
          SetPrerollTrailer(t, n) {
            (this.GetJSONData().broadcast_preroll_trailer_appid !== t ||
              this.GetJSONData().broadcsat_preroll_trailer_id !== n) &&
              ((this.GetJSONData().broadcast_preroll_trailer_appid = t),
              (this.GetJSONData().broadcsat_preroll_trailer_id = n),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetDropsEnabled(t) {
            this.GetJSONData().broadcast_item_drops_enabled != t &&
              (t
                ? ((this.GetJSONData().broadcast_item_drops_enabled = !0),
                  (this.GetJSONData().broadcast_item_drops_manual = !1),
                  (this.GetJSONData().broadcast_item_drops_min_watch_time_minutes = 30))
                : ((this.GetJSONData().broadcast_item_drops_enabled = void 0),
                  (this.GetJSONData().broadcast_item_drops_manual = void 0),
                  (this.GetJSONData().broadcast_item_drops_min_watch_time_minutes =
                    void 0),
                  (this.GetJSONData().broadcast_item_drops_details_clan_accountid =
                    void 0),
                  (this.GetJSONData().broadcast_item_drops_details_event_gid =
                    void 0)),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetItemDropManual(t) {
            this.GetJSONData().broadcast_item_drops_manual != t &&
              ((this.GetJSONData().broadcast_item_drops_manual = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetItemDropMinutes(t) {
            this.GetJSONData().broadcast_item_drops_min_watch_time_minutes !=
              t &&
              ((this.GetJSONData().broadcast_item_drops_min_watch_time_minutes =
                t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetItemDropDetailEvents(t, n) {
            (this.GetJSONData().broadcast_item_drops_details_clan_accountid !=
              t ||
              this.GetJSONData().broadcast_item_drops_details_event_gid != n) &&
              ((this.GetJSONData().broadcast_item_drops_details_event_gid = n),
              (this.GetJSONData().broadcast_item_drops_details_clan_accountid =
                t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetWidePlayerLayout(t) {
            this.GetJSONData().broadcast_display_wide_player != t &&
              ((this.GetJSONData().broadcast_display_wide_player = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetWidePlayerSupportChat(t) {
            this.GetJSONData().broadcast_dispaly_wide_player_allow_chat != t &&
              ((this.GetJSONData().broadcast_dispaly_wide_player_allow_chat =
                t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
          SetChatAnnouncementGiveawayGID(t) {
            this.GetJSONData().broadcast_chat_announcement_giveaway != t &&
              ((this.GetJSONData().broadcast_chat_announcement_giveaway = t),
              this.m_editModel.SetDirty(C.IQ.jsondata_broadcast));
          }
        }
        ke([$.sH], Ae.prototype, "m_editModel", 2),
          ke([$.XI], Ae.prototype, "SetBroadcastEnabled", 1),
          ke([$.XI], Ae.prototype, "SetBroadcastForceBanner", 1),
          ke([$.XI], Ae.prototype, "SetChangeSetting", 1),
          ke([$.XI], Ae.prototype, "SetTitleToken", 1),
          ke([$.XI], Ae.prototype, "SetCustomTitleLocalize", 1),
          ke([$.XI], Ae.prototype, "AddAccountToWhiteList", 1),
          ke([$.XI], Ae.prototype, "DeleteWhiteListAccount", 1),
          ke([$.XI], Ae.prototype, "SetWhiteListAccountLanguage", 1),
          ke([$.XI], Ae.prototype, "SetWhiteListAccountPriority", 1),
          ke([$.XI], Ae.prototype, "RemoveWhiteListAtIndex", 1),
          ke([$.XI], Ae.prototype, "ClearWhiteList", 1),
          ke([$.XI], Ae.prototype, "SetBroadcastContentType", 1),
          ke([$.XI], Ae.prototype, "SetPrerollVODAppID", 1),
          ke([$.XI], Ae.prototype, "SetPrerollTrailer", 1),
          ke([$.XI], Ae.prototype, "SetDropsEnabled", 1),
          ke([$.XI], Ae.prototype, "SetItemDropManual", 1),
          ke([$.XI], Ae.prototype, "SetItemDropMinutes", 1),
          ke([$.XI], Ae.prototype, "SetItemDropDetailEvents", 1),
          ke([$.XI], Ae.prototype, "SetWidePlayerLayout", 1),
          ke([$.XI], Ae.prototype, "SetWidePlayerSupportChat", 1),
          ke([$.XI], Ae.prototype, "SetChatAnnouncementGiveawayGID", 1);
        var zn = u(44894),
          Bc = u(98794),
          Nc = Object.defineProperty,
          Mc = (a, t, n) =>
            t in a
              ? Nc(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          Zi = (a, t, n) => Mc(a, typeof t != "symbol" ? t + "" : t, n);
        const Xi = class za {
          constructor() {
            Zi(this, "m_rgFriendsList", null);
          }
          GetFriendLiset() {
            return this.m_rgFriendsList;
          }
          async LoadFriendList() {
            var t, n;
            let i = null;
            if (this.m_rgFriendsList) return this.m_rgFriendsList;
            if (!D.iA.logged_in) return [];
            try {
              const o = await le().get(
                D.TS.COMMUNITY_BASE_URL + "actions/ajaxlistfriends",
              );
              if (
                (o == null ? void 0 : o.status) == 200 &&
                ((t = o.data) == null ? void 0 : t.success) == Ze.R &&
                (n = o.data) != null &&
                n.friends
              )
                return (
                  (this.m_rgFriendsList = o.data.friends), this.m_rgFriendsList
                );
              (this.m_rgFriendsList = []), (i = (0, Be.H)(o));
            } catch (o) {
              i = (0, Be.H)(o);
            }
            return (
              console.error(
                "CSimpleFriendsListStore.LoadFriendList failed: " +
                  (i == null ? void 0 : i.strErrorMsg),
                i,
              ),
              []
            );
          }
          static Get() {
            return (
              za.s_Singleton || (za.s_Singleton = new za()), za.s_Singleton
            );
          }
        };
        Zi(Xi, "s_Singleton");
        let $i = Xi;
        function Oc() {
          const [a, t] = E.useState($i.Get().GetFriendLiset());
          return (
            E.useEffect(() => {
              a || $i.Get().LoadFriendList().then(t);
            }, []),
            a
          );
        }
        var Pc = u(35098),
          Vn = u(24806),
          Rc = u(1885),
          kc = u(86836),
          ea = u.n(kc),
          Fc = u(25046),
          eo = u(29522);
        function Uc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            i = (l) => {},
            o = [
              {
                name: "Trailer",
                key: "overview",
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(Hc, { ...a }),
                }),
                onClick: i,
              },
              {
                name: "Deprecated VOD",
                key: "mature",
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(zc, { ...a }),
                }),
                onClick: i,
              },
            ];
          return (0, e.jsxs)(ge.E, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, b.A)(f().ValveOnlyBackground),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Broadcast_preroll_title"),
              }),
              (0, e.jsx)(An.V, { tabs: o, bDisableRouting: !0 }),
            ],
          });
        }
        function Hc(a) {
          var t;
          const { editModel: n, broadcastEditModel: i } = a,
            o = (0, O.q3)(() => (i == null ? void 0 : i.GetPrerollTrailer())),
            l = (0, eo.$5)(o.strAppid ? Number.parseInt(o.strAppid) : void 0),
            r = (0, Fc.BF)(
              l,
              o.strTrailerid ? Number.parseInt(o.strTrailerid) : void 0,
            ),
            d =
              (t = r == null ? void 0 : r.microtrailer) == null
                ? void 0
                : t[0].filename;
          return (0, e.jsxs)("div", {
            className: (0, b.A)(
              f().FlexColumnContainer,
              f().EventDefaultRowContainer,
            ),
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#Broadcast_preroll_trailer_desc"),
              }),
              (0, e.jsx)(p.pd, {
                type: "text",
                placeholder: (0, s.we)("#Broadcast_preroll_trailer_AppPrompt"),
                mustBeNumeric: !0,
                rangeMin: 1,
                value: o.strAppid || "",
                onChange: (_) => {
                  var c;
                  return i.SetPrerollTrailer(
                    _.target.value.trim(),
                    (c = o.strTrailerid) != null ? c : "",
                  );
                },
              }),
              (0, e.jsx)(p.pd, {
                type: "text",
                placeholder: (0, s.we)(
                  "#Broadcast_preroll_trailer_TrailerPrompt",
                ),
                mustBeNumeric: !0,
                rangeMin: 1,
                value: o.strTrailerid || "",
                onChange: (_) =>
                  i.SetPrerollTrailer(o.strAppid || "", _.target.value.trim()),
              }),
              r &&
                d &&
                (0, e.jsx)("a", {
                  href: `${D.TS.STORE_BASE_URL}trailer/assets/?trailer=${d.substring(0, d.lastIndexOf("/"))}`,
                  children: (0, s.we)("#Broadcast_preroll_trailer_link"),
                }),
            ],
          });
        }
        function zc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            i = (0, O.q3)(() => (n == null ? void 0 : n.GetPrerollVideo()));
          return (0, e.jsxs)("div", {
            className: (0, b.A)(
              f().FlexColumnContainer,
              f().EventDefaultRowContainer,
            ),
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#Broadcast_preroll_desc"),
              }),
              (0, e.jsx)(p.pd, {
                type: "text",
                placeholder: (0, s.we)("#Broadcast_preroll_prompt"),
                mustBeNumeric: !0,
                rangeMin: 1,
                value: i || "",
                onChange: (o) => n.SetPrerollVODAppID(o.target.value.trim()),
              }),
              !!i &&
                (0, e.jsx)("a", {
                  href: D.TS.PARTNER_BASE_URL + "apps/landing/" + i,
                  children: (0, s.we)("#Broadcast_preroll_app_link"),
                }),
            ],
          });
        }
        var Vc = Object.defineProperty,
          Wc = Object.getOwnPropertyDescriptor,
          bt = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Wc(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && Vc(t, n, o), o;
          };
        let ut = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                strCustomTitle: "",
                customTitleLanguage: L.Bhc,
                whitelistSteamID: "",
              });
          }
          GetBroadcastEditModel() {
            return new Ae(this.props.editModel);
          }
          OnBroadcastOptionChange(a) {
            this.GetBroadcastEditModel().SetBroadcastEnabled(a);
          }
          OnBroadcastForceBanner(a) {
            this.GetBroadcastEditModel().SetBroadcastForceBanner(a);
          }
          OnChatChange(a) {
            this.GetBroadcastEditModel().SetChangeSetting(a);
          }
          OnTitleChange(a) {
            this.GetBroadcastEditModel().SetTitleToken(a.data);
          }
          OnCustomTitleChange(a) {
            this.setState({ strCustomTitle: a.target.value });
          }
          OnCustomTitleLanguageChange(a) {
            this.setState({ customTitleLanguage: a.data });
          }
          AddTitle() {
            this.GetBroadcastEditModel().SetCustomTitleLocalize(
              this.state.customTitleLanguage,
              this.state.strCustomTitle,
            ),
              this.setState({ strCustomTitle: "" });
          }
          RemoveTitle(a) {
            this.GetBroadcastEditModel().SetCustomTitleLocalize(a, null);
          }
          OnSaleColorChange(a, t) {
            const n = this.props.editModel.GetEventModel().jsondata;
            (n[t] = a), this.props.editModel.SetDirty(C.IQ.jsondata_sales);
          }
          OnOpenGradientInnerColor(a) {
            this.OpenColorPopover(a, "broadcast_gradient_inner_color");
          }
          OnOpenGradientOuterColor(a) {
            this.OpenColorPopover(a, "broadcast_gradient_outer_color");
          }
          OpenColorPopover(a, t) {
            const n = this.props.editModel.GetEventModel().jsondata[t];
            let i = null;
            const o = () => (i == null ? void 0 : i.Hide());
            i = (0, en.lX)(
              (0, e.jsx)(ya.$, {
                color: n,
                onChange: (l) => this.OnSaleColorChange(l, t),
                onRequestClose: o,
              }),
              a,
              { bDisablePopTop: !0 },
            );
          }
          render() {
            const { editModel: a } = this.props,
              t = a.GetEventModel().jsondata,
              n = [
                "#Broadcast_default_title_dev",
                "#Broadcast_default_title_community",
                "#Broadcast_default_title_comp",
                "#Broadcast_default_title_speed",
                "#Broadcast_default_title_simple",
                "#Broadcast_default_title_dev_chat",
                "#Broadcast_default_title_ama",
              ].map((r) => ({ label: (0, s.we)(r), data: r })),
              i = [],
              o = s.A0.GetLanguageListForRealms([on.TU.k_ESteamRealmGlobal]);
            for (const r of o) {
              const _ = {
                label: (0, s.we)("#language_selection_" + (0, L.LgB)(r)),
                data: r,
              };
              i.push(_);
            }
            const l = Bc.i.map((r) =>
              (0, e.jsxs)(
                "div",
                {
                  className: (0, b.A)(f().FlexRowContainer, f().RadioOption),
                  children: [
                    (0, e.jsx)("input", {
                      type: "radio",
                      name: "BroadcastChat",
                      id: "EventEditor_BroadcastSChat_" + r,
                      value: r,
                      checked:
                        a.GetEventModel().GetBroadcastChatVisibility() === r,
                      onChange: () => this.OnChatChange(r),
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "EventEditor_BroadcastSChat_" + r,
                      children: (0, e.jsx)("span", {
                        children: (0, s.we)("#Broadcast_chat_" + r),
                      }),
                    }),
                  ],
                },
                "broadcastchatOptions_" + r,
              ),
            );
            return (0, e.jsxs)("div", {
              className: ye().EventEditorInputPaneContents,
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitleCtn,
                  children: [
                    (0, e.jsx)("span", {
                      className: (0, b.A)(
                        f().EventEditorTextTitle,
                        f().FlexGrow,
                      ),
                      children: (0, s.we)("#Broadcast_title"),
                    }),
                    (0, e.jsx)("a", {
                      target: D.TS.IN_CLIENT ? void 0 : "_blank",
                      href:
                        D.TS.PARTNER_BASE_URL +
                        "doc/marketing/event_tools/sales/livestream",
                      className: (0, b.A)(f().doclink),
                      children: (0, e.jsx)("span", {
                        children: (0, s.we)("#Broadcast_documentation"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().InputBorder,
                  children: (0, e.jsx)(p.RF, {
                    onChange: this.OnBroadcastOptionChange,
                    label: (0, s.we)("#Broadcast_option"),
                    checked: a.GetEventModel().BHasBroadcastEnabled(),
                  }),
                }),
                a.GetEventModel().BHasBroadcastEnabled() &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_title_title"),
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, b.A)(
                          f().FlexColumnContainer,
                          f().EventDefaultRowContainer,
                        ),
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, s.we)("#Broadcast_title_desc"),
                          }),
                          (0, e.jsx)(p.m, {
                            rgOptions: n,
                            selectedOption: n[0].data,
                            onChange: this.OnTitleChange,
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#Broadcast_option_customtitle",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: ea().customTitleOptionsCtn,
                            children: [
                              (0, e.jsxs)("div", {
                                className: (0, b.A)(
                                  f().FlexRowContainer,
                                  ea().CustomTitleCtn,
                                ),
                                children: [
                                  (0, e.jsx)("div", {
                                    style: { width: "400px" },
                                    children: (0, e.jsx)(p.pd, {
                                      placeholder: (0, s.we)(
                                        "#Broadcast_use_custom",
                                      ),
                                      onChange: this.OnCustomTitleChange,
                                      value: this.state.strCustomTitle,
                                    }),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: ea().LanguageContainer,
                                    children: (0, e.jsx)(p.m, {
                                      bDisableMouseOverlay: !0,
                                      strDropDownClassName: f().DropDownScroll,
                                      rgOptions: i,
                                      selectedOption:
                                        this.state.customTitleLanguage,
                                      onChange:
                                        this.OnCustomTitleLanguageChange,
                                    }),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: ea().AddTitleButton,
                                    children: (0, e.jsx)(p.jn, {
                                      onClick: () => this.AddTitle(),
                                      children: (0, s.we)(
                                        "#Broadcast_add_title",
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                              (0, e.jsx)("p", {
                                children: (0, s.we)(
                                  "#Sale_option_customtitle_entered",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: (0, b.A)(f().FlexColumnContainer),
                                children: t.localized_broadcast_title.map(
                                  (r, d) =>
                                    r
                                      ? (0, e.jsxs)(
                                          "div",
                                          {
                                            className: (0, b.A)(
                                              ea().TitleRowCtn,
                                              f().FlexRowContainer,
                                            ),
                                            children: [
                                              r,
                                              " (",
                                              (0, s.we)(
                                                "#language_selection_" +
                                                  (0, L.LgB)(d),
                                              ),
                                              ")",
                                              (0, e.jsx)("div", {
                                                style: { marginLeft: "auto" },
                                                children: (0, e.jsx)("img", {
                                                  className: da().RemoveIcon,
                                                  src: zn.A,
                                                  onClick: () =>
                                                    this.RemoveTitle(d),
                                                }),
                                              }),
                                            ],
                                          },
                                          d,
                                        )
                                      : null,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_background"),
                      }),
                      (0, e.jsx)(p.$n, {
                        onClick: this.OnOpenGradientOuterColor,
                        className: f().EventEditorTextTitle,
                        style: {
                          backgroundColor:
                            this.props.editModel.GetEventModel().jsondata
                              .broadcast_gradient_outer_color,
                        },
                        children: (0, s.we)("#Broadcast_GradientOuterColor"),
                      }),
                      (0, e.jsx)(p.$n, {
                        onClick: this.OnOpenGradientInnerColor,
                        className: f().EventEditorTextTitle,
                        style: {
                          backgroundColor:
                            this.props.editModel.GetEventModel().jsondata
                              .broadcast_gradient_inner_color,
                        },
                        children: (0, s.we)("#Broadcast_GradientInnerColor"),
                      }),
                      (0, e.jsx)(Qc, {
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)(Uc, {
                        editModel: a,
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_chat_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, b.A)(
                          f().FlexColumnContainer,
                          f().EventDefaultRowContainer,
                        ),
                        children: l,
                      }),
                      (0, e.jsx)(Jc, {
                        editModel: a,
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)(Kc, {
                        editModel: a,
                        broadcastEditModel: this.GetBroadcastEditModel(),
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_artwork"),
                      }),
                      (0, e.jsx)(In.t, {
                        clanSteamID: a.GetClanSteamID(),
                        rgSupportArtwork: ["broadcast_left", "broadcast_right"],
                        fnSetImageURL: a.SetImageURL,
                        bAllowPreviousClanImageSelection: !0,
                        rgRealmList: a.GetIncludedRealmList(),
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextTitle,
                        children: (0, s.we)("#Broadcast_artwork_options"),
                      }),
                      (0, e.jsx)("div", {
                        className: f().InputBorder,
                        children: (0, e.jsx)(p.RF, {
                          onChange: this.OnBroadcastForceBanner,
                          label: (0, s.we)("#Broadcast_artwork_banner"),
                          tooltip: (0, s.we)("#Broadcast_artwork_banner_hint"),
                          checked: a.GetEventModel().BHasBroadcastForceBanner(),
                        }),
                      }),
                      (0, e.jsx)(Ye.it, {
                        clanSteamID: a.GetClanSteamID(),
                        title: (0, s.we)(
                          "#EventEditor_ArtworkType_broadcast_left",
                        ),
                        artworkType: "broadcast_left",
                        appid: a.GetAppID(),
                        eventModel: a.GetEventModel(),
                        fnLangHasData: a.BHasTitleImage,
                        realms: a.GetIncludedRealmList(),
                        fnSetImageURL: a.SetImageURL,
                        fnGetImageHashAndExt: a.GetImageHashAndExt,
                        partnerEventStore: M.mh,
                      }),
                      (0, e.jsx)(Ye.it, {
                        clanSteamID: a.GetClanSteamID(),
                        title: (0, s.we)(
                          "#EventEditor_ArtworkType_broadcast_right",
                        ),
                        eventModel: a.GetEventModel(),
                        artworkType: "broadcast_right",
                        appid: a.GetAppID(),
                        fnLangHasData: a.BHasTitleImage,
                        realms: a.GetIncludedRealmList(),
                        fnSetImageURL: a.SetImageURL,
                        fnGetImageHashAndExt: a.GetImageHashAndExt,
                        partnerEventStore: M.mh,
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        bt([se.oI], ut.prototype, "OnBroadcastOptionChange", 1),
          bt([se.oI], ut.prototype, "OnBroadcastForceBanner", 1),
          bt([se.oI], ut.prototype, "OnChatChange", 1),
          bt([se.oI], ut.prototype, "OnTitleChange", 1),
          bt([se.oI], ut.prototype, "OnCustomTitleChange", 1),
          bt([se.oI], ut.prototype, "OnCustomTitleLanguageChange", 1),
          bt([se.oI], ut.prototype, "AddTitle", 1),
          bt([se.oI], ut.prototype, "RemoveTitle", 1),
          bt([se.oI], ut.prototype, "OnSaleColorChange", 1),
          bt([se.oI], ut.prototype, "OnOpenGradientInnerColor", 1),
          bt([se.oI], ut.prototype, "OnOpenGradientOuterColor", 1),
          (ut = bt([R.PA], ut));
        function Qc(a) {
          const { broadcastEditModel: t } = a,
            n = (0, O.q3)(() => t.GetBroadcastAllowList() || []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Broadcast_whitelist"),
              }),
              (0, e.jsxs)("div", {
                className: (0, b.A)(
                  f().FlexColumnContainer,
                  f().EventDefaultRowContainer,
                ),
                children: [
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#Broadcast_whitelist_desc"),
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.we)("#Broadcast_option_drag_ttip"),
                  }),
                  (0, e.jsx)("div", {
                    className: ye().BroadcastAccountList,
                    children: n.map((i) =>
                      (0, e.jsx)(
                        qc,
                        { accountid: i },
                        "broadcastaccountrow_" + i,
                      ),
                    ),
                  }),
                  (0, e.jsx)(Yc, { broadcastEditModel: t }),
                  (0, e.jsx)(Rc.jl, {
                    onButtonClick: async (i) => {
                      const o = new k.b(i);
                      return t.AddAccountToWhiteList(o.GetAccountID()), !0;
                    },
                    buttonText: (0, s.we)("#Broadcast_whitelist_adduser"),
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.PP)(
                      "#Broadcast_whitelist_friendcode",
                      (0, e.jsx)("a", {
                        target: "_blank",
                        href: D.TS.COMMUNITY_BASE_URL + "my/friends/add",
                        children: D.TS.COMMUNITY_BASE_URL + "my/friends/add",
                      }),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Yc(a) {
          const { broadcastEditModel: t } = a,
            n = Oc();
          return (0, e.jsxs)("div", {
            className: (0, b.A)(f().FlexRowWrapFlexStartContainer),
            children: [
              (0, e.jsx)("a", {
                onClick: () => t.AddAccountToWhiteList(D.iA.accountid),
                className: f().EditPreviewButton,
                children: (0, s.we)("#Broadcast_whitelist_addme"),
              }),
              (0, e.jsx)("a", {
                onClick: (i) =>
                  (0, en.lX)(
                    (0, e.jsx)("div", {
                      className: f().DropDownScroll,
                      children: (n || []).map((o) =>
                        (0, e.jsx)(
                          On.kt,
                          {
                            onSelected: () => {
                              const l = new k.b(o.steamid);
                              t.AddAccountToWhiteList(l.GetAccountID());
                            },
                            children: (0, e.jsxs)("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                (0, e.jsx)("img", {
                                  className: ea().WhitelistAvatar,
                                  src: o.avatar_url,
                                }),
                                o.persona_name,
                              ],
                            }),
                          },
                          o.steamid,
                        ),
                      ),
                    }),
                    i,
                  ),
                className: f().EditPreviewButton,
                children: (0, s.we)("#Broadcast_whitelist_addfriend"),
              }),
              (0, e.jsx)("a", {
                onClick: () => t.ClearWhiteList(),
                className: f().EditPreviewButton,
                children: (0, s.we)("#Broadcast_whitelist_clear"),
              }),
            ],
          });
        }
        function Jc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            [i, o, l, r, d, _] = (0, O.q3)(() => [
              t.GetEventModel().jsondata.broadcast_item_drops_enabled,
              t.GetEventModel().jsondata.broadcast_item_drops_manual,
              t.GetEventModel().jsondata
                .broadcast_item_drops_min_watch_time_minutes,
              t.GetEventModel().jsondata
                .broadcast_item_drops_details_clan_accountid,
              t.GetEventModel().jsondata.broadcast_item_drops_details_event_gid,
              t.GetEventModel().jsondata.broadcast_chat_announcement_giveaway ||
                0,
            ]);
          return (0, e.jsxs)(ge.E, {
            requireAdmin: !0,
            clanSteamID: t.GetClanSteamID(),
            className: (0, b.A)(f().ValveOnlyBackground),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: "(VO) " + (0, s.we)("#Broadcast_DropsTitle"),
              }),
              (0, e.jsx)(p.Yh, {
                onChange: (c) => n.SetDropsEnabled(c),
                label: (0, s.we)("#Broadcast_Drops_Enable"),
                checked: !!i,
              }),
              !!i &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(p.Yh, {
                      onChange: (c) => n.SetItemDropManual(c),
                      label: (0, s.we)("#Broadcast_Drops_IsManualDrops"),
                      checked: !!o,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "broadcast_min_mintes",
                      children: (0, s.we)("#Broadcast_Drops_Minute"),
                    }),
                    (0, e.jsx)("input", {
                      id: "broadcast_min_mintes",
                      type: "number",
                      min: "5",
                      value: l,
                      onChange: (c) =>
                        n.SetItemDropMinutes(Number.parseInt(c.target.value)),
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextSubTitle,
                      children: (0, s.we)("#Broadcast_Drops_Details"),
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "broadcast_detail_clan_account",
                      children: (0, s.we)("#Broadcast_Drops_Details_Account"),
                    }),
                    (0, e.jsx)("input", {
                      id: "broadcast_detail_clan_account",
                      type: "number",
                      min: "0",
                      value: r,
                      onChange: (c) =>
                        n.SetItemDropDetailEvents(
                          Number.parseInt(c.target.value),
                          d,
                        ),
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "broadcast_detail_clan_event_gid",
                      children: (0, s.we)("#Broadcast_Drops_Details_GID"),
                    }),
                    (0, e.jsx)("input", {
                      id: "broadcast_detail_clan_event_gid",
                      type: "text",
                      value: d,
                      onChange: (c) =>
                        n.SetItemDropDetailEvents(r, c.target.value),
                    }),
                  ],
                }),
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children:
                  "(VO) " +
                  (0, s.we)("#Broadcast_ChatAnnouncement_Giveaway_title"),
              }),
              (0, e.jsx)(p.pd, {
                type: "number",
                value: _,
                tooltip: (0, s.we)(
                  "#Broadcast_ChatAnnouncement_Giveaway_gid_ttip",
                ),
                label: (0, s.we)("#Broadcast_ChatAnnouncement_Giveaway_gid"),
                onChange: (c) =>
                  n.SetChatAnnouncementGiveawayGID(c.target.value),
              }),
            ],
          });
        }
        function Kc(a) {
          const { editModel: t, broadcastEditModel: n } = a,
            i = (0, O.q3)(
              () => t.GetEventModel().jsondata.broadcast_display_wide_player,
            ),
            o = (0, O.q3)(
              () =>
                t.GetEventModel().jsondata
                  .broadcast_dispaly_wide_player_allow_chat,
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Broadcast_WidePlayer"),
              }),
              (0, e.jsx)(p.Yh, {
                onChange: (l) => n.SetWidePlayerLayout(l),
                label: (0, s.we)("#Broadcast_WidePlayer_Use"),
                tooltip: (0, s.we)("#Broadcast_WidePlayer_ttip"),
                checked: !!i,
              }),
              (0, e.jsx)(p.Yh, {
                onChange: (l) => n.SetWidePlayerSupportChat(l),
                label: (0, s.we)("#Broadcast_WidePlayer_Chat_Use"),
                tooltip: (0, s.we)("#Broadcast_WidePlayer_Chat_ttip"),
                checked: !!o,
                disabled: !i,
              }),
              (0, e.jsxs)(ge.E, {
                requireAdmin: !0,
                clanSteamID: t.GetClanSteamID(),
                className: (0, b.A)(f().ValveOnlyBackground),
                children: [
                  (0, e.jsx)(je.he, {
                    toolTipContent: (0, s.we)("#Broadcast_ContentType_Desc"),
                    children: (0, e.jsx)("div", {
                      className: f().EventEditorTextTitle,
                      children: "(VO) " + (0, s.we)("#Broadcast_ContentType"),
                    }),
                  }),
                  (0, e.jsx)(Xc, {}),
                ],
              }),
            ],
          });
        }
        function qc(a) {
          const { accountid: t } = a,
            { isLoading: n, data: i } = (0, Pc.js)(t),
            o = () => {
              let _ = M.mh.GetEditModel();
              return new Ae(_);
            };
          let l = M.mh.GetEditModel().GetEventModel(),
            r = (0, O.q3)(() => l.jsondata.broadcast_whitelist.indexOf(t)),
            d = (0, O.q3)(() => {
              let _ = l.jsondata.broadcast_language,
                c = L.xPp;
              return (
                r >= 0 && _ && r < _.length && _[r] !== void 0 && (c = _[r]), c
              );
            });
          return n
            ? (0, e.jsx)(z.t, { size: "small", string: (0, s.we)("#Loading") })
            : i
              ? (0, e.jsxs)("div", {
                  className: (0, b.A)(da().FlexCenter, ea().AccountRow),
                  children: [
                    (0, e.jsxs)("a", {
                      className: (0, b.A)(
                        da().FlexCenter,
                        ye().BroadcastAccountInfo,
                      ),
                      href: i.GetCommunityProfileURL(),
                      target: "_blank",
                      children: [
                        i
                          ? (0, e.jsx)("img", {
                              style: { marginRight: "8px" },
                              src: i.avatar_url,
                            })
                          : null,
                        i ? i.m_strPlayerName : null,
                      ],
                    }),
                    (0, e.jsxs)(je.he, {
                      toolTipContent: (0, s.we)("#Broadcast_Language_hint"),
                      children: [
                        (0, e.jsxs)("span", {
                          children: [(0, s.we)("#EventEditor_Langauge"), ": "],
                        }),
                        (0, e.jsx)(Vn.Ng, {
                          bAllowUnsetOption: !0,
                          selectedLang: d,
                          fnOnLanguageChanged: (_) =>
                            o().SetWhiteListAccountLanguage(t, _),
                        }),
                      ],
                    }),
                    (0, e.jsx)(Zc, { accountid: t }),
                    (0, e.jsx)("img", {
                      className: (0, b.A)(da().FlexCenter, da().RemoveIcon),
                      src: zn.A,
                      onClick: () => o().DeleteWhiteListAccount(t),
                    }),
                  ],
                })
              : (0, e.jsx)("div", {
                  children: (0, s.we)("#Broadcast_FailedToLoadUser"),
                });
        }
        function Zc(a) {
          const t = M.mh.GetEditModel(),
            n = new Ae(t),
            i = (r) => {
              n.SetWhiteListAccountPriority(a.accountid, r.data);
            },
            o = [
              { label: (0, s.we)("#Broadcast_Priority_Primary"), data: Na.U7 },
              { label: (0, s.we)("#Broadcast_Priority_Featured"), data: Na._ },
              {
                label: (0, s.we)("#Broadcast_Priority_DefaultFeatured"),
                data: Na.zl,
              },
              { label: (0, s.we)("#Broadcast_Priority_General"), data: Na.mP },
            ],
            l = n.GetWhiteListAccountPriority(a.accountid, Na.mP);
          return (0, e.jsxs)(je.he, {
            toolTipContent: (0, s.we)("#Broadcast_Priority_hint"),
            className: ye().PrioritySelector,
            children: [
              (0, e.jsxs)("span", {
                children: [(0, s.we)("#Broadcast_Priority_label"), ": "],
              }),
              (0, e.jsx)(p.m, { rgOptions: o, selectedOption: l, onChange: i }),
            ],
          });
        }
        function Xc(a) {
          const t = M.mh.GetEditModel(),
            n = new Ae(t),
            i = [
              {
                label: (0, s.we)("#Broadcast_ContentType_Unknown"),
                data: void 0,
              },
              { label: (0, s.we)("#Broadcast_ContentType_Live"), data: "live" },
              {
                label: (0, s.we)("#Broadcast_ContentType_Premiere"),
                data: "premiere",
              },
              {
                label: (0, s.we)("#Broadcast_ContentType_Encore"),
                data: "encore",
              },
            ],
            o = n.GetBroadcastContentType();
          return (0, e.jsxs)(je.he, {
            toolTipContent: (0, s.we)("#Broadcast_ContentType_Desc"),
            className: ye().PrioritySelector,
            children: [
              (0, e.jsxs)("span", {
                children: [(0, s.we)("#Broadcast_ContentType"), ": "],
              }),
              (0, e.jsx)(p.m, {
                rgOptions: i,
                selectedOption: o,
                onChange: (l) => n.SetBroadcastContentType(l.data),
              }),
            ],
          });
        }
        var $c = u(85408),
          eu = u(75909),
          tu = Object.defineProperty,
          au = (a, t, n) =>
            t in a
              ? tu(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          un = (a, t, n) => au(a, typeof t != "symbol" ? t + "" : t, n);
        const to = class Va {
          constructor() {
            un(this, "m_mapAppIDToDLCs", new Map()),
              un(this, "m_mapAppIDToSoundTracks", new Map()),
              un(this, "m_mapPromise", new Map()),
              (0, $.Gn)(this);
          }
          GetDLCForAppID(t) {
            return this.m_mapAppIDToDLCs.get(t);
          }
          GetSoundTracksForAppID(t) {
            return this.m_mapAppIDToSoundTracks.get(t);
          }
          async LoadDLCAndSoundTracksForAppID(t, n) {
            return (
              this.m_mapPromise.has(t) ||
                this.m_mapPromise.set(
                  t,
                  this.InternalLoadDLCAndSoundTracksForAppID(t, n),
                ),
              this.m_mapPromise.get(t)
            );
          }
          async InternalLoadDLCAndSoundTracksForAppID(t, n) {
            if (!this.m_mapAppIDToDLCs.has(t) && t != 0)
              try {
                let i = {
                    origin: self.origin,
                    cc: D.TS.COUNTRY || "US",
                    l: D.TS.LANGUAGE,
                  },
                  o = "";
                (0, D.yK)() == "partnerweb"
                  ? (o = `${D.TS.PARTNER_BASE_URL}seasonpass/ajaxgetreleasedorupcomingdlc?parentappid=${t}`)
                  : (o = D.TS.STORE_BASE_URL + "dlc/" + t + "/ajaxgetdlclist");
                let l = await le().get(o, {
                    params: i,
                    cancelToken: n == null ? void 0 : n.token,
                  }),
                  r = Array();
                l.data.dlcs &&
                  l.data.dlcs.forEach((d) => {
                    r.push({
                      appid: d.appid,
                      name: d.name,
                      is_released_somewhere: !!d.is_released_somewhere,
                    });
                  }),
                  this.m_mapAppIDToDLCs.set(t, r),
                  (r = Array()),
                  l.data.soundtracks &&
                    l.data.soundtracks.forEach((d) => {
                      r.push({
                        appid: d.appid,
                        name: d.name,
                        is_released_somewhere: !!d.is_released_somewhere,
                      });
                    }),
                  this.m_mapAppIDToSoundTracks.set(t, r);
              } catch (i) {
                const o = (0, Be.H)(i);
                console.error(
                  "LoadDLCAndSoundTracksForAppID for appid: " +
                    t +
                    " hit: " +
                    o.strErrorMsg,
                  o,
                );
              }
            return {
              dlcs: this.m_mapAppIDToDLCs.has(t)
                ? this.m_mapAppIDToDLCs.get(t)
                : [],
              soundtracks: this.m_mapAppIDToSoundTracks.has(t)
                ? this.m_mapAppIDToSoundTracks.get(t)
                : [],
            };
          }
          static Get() {
            return (
              Va.s_Singleton || (Va.s_Singleton = new Va()), Va.s_Singleton
            );
          }
        };
        un(to, "s_Singleton");
        let Ma = to;
        function ao(a) {
          const [t, n] = useState(a),
            [i, o] = useState(Ma.Get().GetDLCForAppID(t));
          return (
            useEffect(() => {
              a &&
                (a != t || !i) &&
                Ma.Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    o(l.dlcs), n(a);
                  });
            }, [t, a, i]),
            i
          );
        }
        function D_(a) {
          const [t, n] = useState(a),
            [i, o] = useState(Ma.Get().GetSoundTracksForAppID(t));
          return (
            useEffect(() => {
              a &&
                (a != t || !i) &&
                Ma.Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    o(l.soundtracks), n(a);
                  });
            }, [t, a, i]),
            i
          );
        }
        function y_(a) {
          const t = ao(a);
          return useMemo(
            () =>
              (t == null
                ? void 0
                : t.filter((i) => !!i.is_released_somewhere)) || null,
            [t],
          );
        }
        function T_(a) {
          const t = ao(a);
          return useMemo(
            () =>
              (t == null
                ? void 0
                : t.filter((i) => !i.is_released_somewhere)) || null,
            [t],
          );
        }
        var no = u(38080),
          nu = u(27344),
          su = u(72805),
          iu = u(38745),
          H = u(30040),
          ou = u(22142),
          lu = Object.defineProperty,
          ru = Object.getOwnPropertyDescriptor,
          at = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? ru(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && lu(t, n, o), o;
          };
        let Nt = class extends E.Component {
          OnHeadlineChange(a) {
            const { section: t, lang: n } = this.props;
            t.SetHeadline(a.currentTarget.value || null, n);
          }
          OnBodyChange(a) {
            const { section: t, lang: n } = this.props;
            t.SetBody(a.currentTarget.value || null, n);
          }
          OnVideoChange(a) {
            const { section: t } = this.props;
            t.SetVideoLink(a.currentTarget.value || null);
          }
          OnRemoveSubSection(a) {
            const { section: t, fnRemoveSection: n } = this.props;
            (0, U.pg)(
              (0, e.jsx)(F.o0, {
                strTitle: (0, s.we)("#EventEmail_Template_EditTitle"),
                strDescription: (0, s.we)(
                  "#EventEmail_Template_RemoveSubSection",
                  (0, s.we)("#EventEmail_Template_Sub_" + a),
                ),
                onOK: () => {
                  t.RemoveSubSection(a), !t.BHasSomeSubSection() && n && n();
                },
              }),
              window,
            );
          }
          GenerateTemplateRemove(a) {
            let t = (0, s.we)("#EventEmail_Template_Sub_" + a);
            return (0, e.jsx)("div", {
              className: H.ImgCrossCtn,
              children: (0, e.jsx)(je.he, {
                toolTipContent: (0, s.we)("#EventEmail_Template_Remove", t),
                children: (0, e.jsx)("img", {
                  className: H.ImgCross,
                  src: zn.A,
                  onClick: () => this.OnRemoveSubSection(a),
                }),
              }),
            });
          }
          render() {
            const {
              section: a,
              additionalClassName: t,
              lang: n,
              bEditor: i,
              clanSteamID: o,
              appid: l,
              bTemplateEditable: r,
            } = this.props;
            return (0, e.jsxs)("div", {
              className: (0, b.A)(t, H.DevEmailEmailBackground, H.EmailSection),
              children: [
                a.BHasHeadline() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("headline"),
                      (0, e.jsx)("input", {
                        type: "text",
                        className: H.HeadlineInput,
                        placeholder: (0, s.we)("#EventEmail_EnterHeadline"),
                        value: a.GetHeadline(n),
                        onChange: this.OnHeadlineChange,
                      }),
                    ],
                  }),
                a.BHasBody() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("body"),
                      (0, e.jsx)("textarea", {
                        className: H.BodyInput,
                        placeholder: (0, s.we)("#EventEmail_EnterBodyCopy"),
                        value: a.GetBody(n),
                        rows: 8,
                        onChange: this.OnBodyChange,
                      }),
                    ],
                  }),
                a.BHasCallToAction() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("action"),
                      (0, e.jsx)(va, { appid: l, section: a }),
                    ],
                  }),
                a.BHasImage() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("img"),
                      (0, e.jsx)(du, {
                        section: a,
                        lang: n,
                        clanSteamID: o,
                        bEditor: i,
                        artworkType: r ? "email_centered" : "email_full",
                      }),
                    ],
                  }),
                a.BHasVideo() &&
                  (0, e.jsxs)(E.Fragment, {
                    children: [
                      r && this.GenerateTemplateRemove("youtube"),
                      (0, e.jsxs)("div", {
                        className: H.VideoCtn,
                        children: [
                          (0, e.jsx)("img", { src: a.GetYouTubeImageURL() }),
                          !!i &&
                            (0, e.jsxs)("div", {
                              className: H.VideoInputCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  children: (0, s.we)(
                                    "#EventEditor_InsertYouTube_Placholder",
                                  ),
                                }),
                                (0, e.jsx)("input", {
                                  type: "text",
                                  value: a.GetVideoURL(),
                                  onChange: this.OnVideoChange,
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, s.we)(
                                      "#EventEditor_InsertYouTube_UpdateThumbnail",
                                    ),
                                    (0, e.jsx)("a", {
                                      href: "https://support.google.com/youtube/answer/72431",
                                      target: "_blank",
                                      children: (0, s.we)(
                                        "#EventEditor_InsertYouTube_LearnHow",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        at([se.oI], Nt.prototype, "OnHeadlineChange", 1),
          at([se.oI], Nt.prototype, "OnBodyChange", 1),
          at([se.oI], Nt.prototype, "OnVideoChange", 1),
          at([se.oI], Nt.prototype, "OnRemoveSubSection", 1),
          (Nt = at([R.PA], Nt));
        let va = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.m_cancelSignal = le().CancelToken.source()),
              (this.state = { dlcs: void 0 });
          }
          async LoadDLCForApp() {
            this.setState({
              dlcs: (
                await Ma.Get().LoadDLCAndSoundTracksForAppID(
                  this.props.appid,
                  this.m_cancelSignal,
                )
              ).dlcs,
            });
          }
          componentDidMount() {
            this.LoadDLCForApp();
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EmailCallToAction cancelled");
          }
          BuildTextOptions() {
            let a = new Array();
            return (
              jt.uM.forEach((t) => {
                a.push(
                  (0, e.jsx)(
                    "option",
                    { value: t, children: (0, s.we)("#" + t) },
                    t,
                  ),
                );
              }),
              a
            );
          }
          BuildDestinationOptions() {
            let a = new Array();
            for (let t in jt.gs)
              if (!isNaN(Number(t))) {
                let n = jt.WH[t];
                a.push(
                  (0, e.jsx)(
                    "option",
                    { value: t, children: (0, s.we)("#" + n) },
                    n,
                  ),
                );
              }
            return (
              this.state.dlcs === void 0
                ? a.push(
                    (0, e.jsx)(
                      "option",
                      {
                        children: (0, e.jsx)(z.t, {
                          string: (0, s.we)("#EventEmail_LoadingDLC"),
                          size: "small",
                        }),
                      },
                      "CallToActionThrobber",
                    ),
                  )
                : this.state.dlcs.forEach((t) => {
                    a.push(
                      (0, e.jsx)(
                        "option",
                        {
                          value: t.appid,
                          children: (0, s.we)(
                            "#EventEmail_Destination_DLCPage",
                            t.name,
                            t.appid,
                          ),
                        },
                        "dlc" + t.appid,
                      ),
                    );
                  }),
              a
            );
          }
          OnButtonLocChange(a) {
            const { section: t } = this.props;
            jt.uM.forEach((n) => {
              n === a.target.value && t.SetButtonTextLock(n);
            });
          }
          OnDestinationChange(a) {
            const { section: t } = this.props;
            let n = Number(a.target.value);
            (0, $.h5)(() => {
              n < jt.gg
                ? (t.SetButtonDestination(n), t.SetButtonAppOverride(void 0))
                : (t.SetButtonDestination(jt.gs.k_EStorePage),
                  t.SetButtonAppOverride(n));
            });
          }
          OnChangeStorePageURL() {
            const { section: a } = this.props;
            (0, U.pg)(
              (0, e.jsx)(hn, {
                strExistingURL:
                  D.TS.STORE_BASE_URL + a.GetDestinationStorePath(),
                fnUpdateURLOnSuccess: a.SetButtonDestinationStoreURL,
              }),
              window,
            );
          }
          render() {
            const { section: a } = this.props;
            let t = this.BuildTextOptions(),
              n = this.BuildDestinationOptions(),
              i = a.BHasButtonAppIDOverride()
                ? a.GetButtonAppidOverride()
                : a.GetDestination();
            return (0, e.jsxs)("div", {
              className: H.ButtonSettingContainer,
              children: [
                (0, e.jsxs)("div", {
                  className: H.ButtonSettingRow,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, s.we)("#EventEmail_Section_ButtonText"),
                    }),
                    (0, e.jsx)("select", {
                      value: a.GetButtonTextLoc(),
                      onChange: this.OnButtonLocChange,
                      children: t,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, s.we)("#EventEmail_Section_Destination"),
                    }),
                    (0, e.jsx)("select", {
                      value: i,
                      onChange: this.OnDestinationChange,
                      children: n,
                    }),
                  ],
                }),
                a.BIsStoreSalesPage() &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsxs)("span", {
                        children: [
                          (0, s.we)("#EventEmail_Section_EnterSalesPage"),
                          " ",
                          (0, e.jsx)(Z.o, {
                            tooltip: (0, s.we)(
                              "#EventEmail_Section_EnterSalesPage_ttip",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("span", {
                        children:
                          D.TS.STORE_BASE_URL + a.GetDestinationStorePath(),
                      }),
                      (0, e.jsx)(p.jn, {
                        onClick: this.OnChangeStorePageURL,
                        children: (0, s.we)("#EventEmail_Section_UpdateURL"),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        at([se.oI], va.prototype, "OnButtonLocChange", 1),
          at([se.oI], va.prototype, "OnDestinationChange", 1),
          at([se.oI], va.prototype, "OnChangeStorePageURL", 1),
          (va = at([R.PA], va));
        let hn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                bIsValid: rt.e$.IsValidStoreURL(this.props.strExistingURL),
                strURL: this.props.strExistingURL
                  ? this.props.strExistingURL
                  : "",
              });
          }
          OnURLUpdate(a) {
            let t = a.currentTarget.value;
            this.setState({ bIsValid: rt.e$.IsValidStoreURL(t), strURL: t });
          }
          render() {
            const { fnUpdateURLOnSuccess: a, closeModal: t } = this.props;
            return (0, e.jsx)(F.o0, {
              strDescription: (0, s.we)(
                "#EventEmail_Section_EnterSalesPage_ttip",
              ),
              strTitle: (0, s.we)("#EventEmail_Section_UpdateURL"),
              onOK: () => {
                a(this.state.strURL), t();
              },
              onCancel: t,
              bOKDisabled: !this.state.bIsValid,
              children: (0, e.jsx)("div", {
                children: (0, e.jsx)("input", {
                  type: "test",
                  className: H.ButtonDestInputSaleURL,
                  value: this.state.strURL,
                  onChange: this.OnURLUpdate,
                }),
              }),
            });
          }
        };
        at([se.oI], hn.prototype, "OnURLUpdate", 1), (hn = at([R.PA], hn));
        function du(a) {
          const {
              clanSteamID: t,
              section: n,
              lang: i,
              bEditor: o,
              artworkType: l,
            } = a,
            [r, d] = E.useState(i),
            _ = M.mh.GetEditModel(),
            c = E.useCallback(
              (m, x, j) => {
                ze.zU.GetExtensionString(m) &&
                  n.SetImage(ze.zU.GetHashAndExt(m), j),
                  d(j);
              },
              [n],
            ),
            [g, h, v] = (0, O.q3)(() => [
              n.BHasSomeImage(),
              Bt.Fj[l],
              n.GetEmailImageURLWithFallback(r, t),
            ]);
          return (0, e.jsxs)("div", {
            className: H.ImagePreview,
            children: [
              (0, e.jsxs)("div", {
                className: H.FullImageCtn,
                children: [
                  (0, e.jsx)("img", {
                    width: v ? (0, Bt.qj)(h.width) : void 0,
                    height: v ? (0, Bt.qj)(h.height) : void 0,
                    src: v,
                  }),
                  !!o &&
                    (0, e.jsx)(ta, {
                      section: n,
                      clanSteamID: t,
                      lang: i,
                      artworkType: l,
                    }),
                ],
              }),
              g &&
                (0, e.jsx)(ou.h, {
                  clanSteamID: t,
                  langOverride: r,
                  fnGetImageHash: (m) => n.GetImageHash(m),
                  fnOnLanguagePreviewChange: (m) => d(m),
                  fnOnRemoveImage: (m) => n.SetImage(null, m),
                  fnOnArtworkLangChange: c,
                  realms: _.GetIncludedRealmList(),
                  fnLangHasData: _.BHasTitleImage,
                }),
            ],
          });
        }
        let ta = class extends E.Component {
          constructor(a) {
            super(a),
              (this.state = { bDownloadFromClanImageStore: !1 }),
              (this.m_clanImageUploader = void 0),
              this.RefreshUploader();
          }
          componentDidUpdate(a) {
            (a.clanSteamID.GetAccountID() !=
              this.props.clanSteamID.GetAccountID() ||
              a.artworkType != this.props.artworkType) &&
              this.RefreshUploader();
          }
          RefreshUploader() {
            this.m_clanImageUploader = new eu.VE(this.props.clanSteamID, [
              this.props.artworkType,
            ]);
          }
          async DoUpload() {
            const { section: a } = this.props;
            try {
              const t = await this.m_clanImageUploader.UploadAllImages();
              for (const n of t)
                if (!n.bSuccess || n.uploadResult.success !== 1)
                  (n.image.status = "failed"),
                    (n.image.message = n.uploadResult.message);
                else {
                  n.image.status = "success";
                  let i = ze.zU.GetExtensionString(n.uploadResult);
                  a.SetImage(n.uploadResult.image_hash + i, n.image.language);
                }
            } catch (t) {
              console.error("DoUpload failed:" + (0, Be.H)(t).strErrorMsg);
            }
          }
          async OnDropFiles(a) {
            if (a && a.length > 0) {
              const { lang: t } = this.props;
              let n = !0,
                i = Array.from(a);
              for (let o = 0; n && o < i.length; o++) {
                let l = i[o];
                (n = await this.m_clanImageUploader.AddImage(l, t)),
                  n ||
                    (console.error(
                      "ClanImagePicker.OnDropFiles: failed on i=" +
                        o +
                        " file=" +
                        l.name,
                    ),
                    (0, U.pg)(
                      (0, e.jsx)(F.KG, {
                        strDescription: (0, s.we)("#ImagePicker_Error", l.name),
                      }),
                      window,
                    ));
              }
              return n;
            }
            return !1;
          }
          RenderInstructions() {
            const { artworkType: a } = this.props;
            let t = Bt.Fj[a];
            return (0, e.jsxs)(E.Fragment, {
              children: [
                (0, e.jsx)("span", {
                  className: H.EmailInputText,
                  children: (0, s.we)("#EventEmail_SelectBrandingImage"),
                }),
                (0, e.jsx)("span", {
                  children: (0, s.we)(
                    "#EventEmail_ImageDimension",
                    (0, Bt.qj)(t.width),
                    (0, Bt.qj)(t.height),
                  ),
                }),
              ],
            });
          }
          async OnPreviousImageSelected(a, t) {
            this.state.bDownloadFromClanImageStore ||
              this.setState({ bDownloadFromClanImageStore: !0 }, async () => {
                const { lang: n } = this.props;
                try {
                  await this.m_clanImageUploader.AddExistingClanImage(a, n);
                } catch (i) {
                  let o = (0, Be.H)(i);
                  console.error("AddExistingClanImage: " + o.strErrorMsg, o),
                    (0, U.pg)(
                      (0, e.jsx)(F.KG, {
                        strDescription: (0, s.we)(
                          "#EventError_Code",
                          o.strErrorMsg,
                        ),
                      }),
                      window,
                    );
                }
                this.setState({ bDownloadFromClanImageStore: !1 });
              });
          }
          render() {
            const { section: a } = this.props;
            if (this.state.bDownloadFromClanImageStore)
              return (0, e.jsx)("div", {
                className: H.EditImageInputCtn,
                children: (0, e.jsx)(z.t, {
                  position: "center",
                  size: "medium",
                  string: (0, s.we)("#Loading"),
                }),
              });
            const { clanSteamID: t } = this.props;
            let n = (0, no.fY)(this.m_clanImageUploader, "emailartupload_");
            return (0, e.jsx)("div", {
              className: H.EditImageInputCtn,
              children: (0, e.jsxs)(iu.D, {
                onDropFiles: this.OnDropFiles,
                elAdditonalButtons: [
                  (0, e.jsx)(
                    su.Hd,
                    {
                      OnClanImageSelected: this.OnPreviousImageSelected,
                      clanSteamID: t,
                    },
                    "emailsecion",
                  ),
                ],
                renderDesciption: this.RenderInstructions,
                children: [
                  (0, e.jsx)("div", {
                    className: nu.UploadPreviewCtn,
                    children: n,
                  }),
                  (0, e.jsx)(no.PY, {
                    imageUploader: this.m_clanImageUploader,
                    fnOnUploadImageRequested: this.DoUpload,
                  }),
                ],
              }),
            });
          }
        };
        at([se.oI], ta.prototype, "DoUpload", 1),
          at([se.oI], ta.prototype, "OnDropFiles", 1),
          at([se.oI], ta.prototype, "RenderInstructions", 1),
          at([se.oI], ta.prototype, "OnPreviousImageSelected", 1),
          (ta = at([R.PA], ta));
        const cu =
            u.p +
            "images/applications/community/Logo_Steamworks.png?v=valveisgoodatcaching",
          uu =
            u.p +
            "images/applications/community/Logo_Steam_NoWords_Dark.png?v=valveisgoodatcaching",
          so =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAgCAYAAAAPHGYtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8FJREFUeNrsWltIVEEYXs28ZPebEVq+BBGZIl1ALc0LaDd9q8gi6yl66LGgh24PPddDPkVXlCDIzbByqcwoSsEsWB80NKxIpIhKKiTdvh/+iZ/D6ZxZ3KNnaT74dmbOzM6emf8652xCJBIJGPgTiWYLjHAMjHCMcAwmCUn0sXN37VuzFRNCKxgEq8DeG43Xz8dMOMBys78TwmJwNvgLnBNTyxFoBDvMXmvjILia66/AMXDEK+G0wiQvmz3XA8JBiRIO9q0HRU/MY47LDexBMR0cxg20WPoyUZRzM4z+Tod5trD5K1zD+DGN369EsQQcxfgGl7GLUGzlZg/Gd1j681DkcTOE/g+W/vkodthM3Y2x3VOSELjgAFgKfqObt2xoLXiW67vAzn9sWgopFzhTXO4Fn2n8/jGwGPwKNriM/QnWg6lgG7jZ0n8CrAHHLYqisAy8ZHP9FAnIj6l0E5cU8NZZ+sq4HAVbHOYotggmIDQ8ZoDikL8PcbMASjFDKMg0FCXcbMfYzw5TUV+dYNOUpdIuoBRRpYbkwp7zYpNRFPL1B1jsd4c5lCA+gQMs5G3gcQ/WdAvcDiazUtzl6/ngXDHGCSN+iL2JGto4iOKlEI5CAZimuVjlxx8JC1sDAWd5sKbb7LYIFTZWHtCwhEw6+wmu8vMTgqCNq1AuIiL67eINLSxbWZjQ5ABbT6xdG7mkdhtlUvUuVrj4eEKgGXdOcta2CbwnFvsUix12+K4UAAmnn336AnZ39R65NlKeHChHBicThZpWTniPNWX73q2xNtIBSz3iKceC01Gu13QRKt4MYp434LgI2mWYK82Ddcl7qmAXnBqFcFLpDCOY7We3Jl0bWcxGtiLHxfK5oYibs9BuI6K+QW2CJRbEyrWR2+oSwinleh/6whpTZHB8VNzvZ7emtPEImMtnGsJrLLbf4TuVQgHmcfZkZ1l3PHJt+axM7zStZojPNFa0+V04T8AvvMl7NRcr481h8IdonwazeMwhj4RzBlzKdHXBULQhjq1xlRDQjY/BJTWjuk9Yg5NLo0NflXAnFyz9a1lglLbmclxzQjrG2W1uM7570eZ+wxjfh+oKvvQRfBFPz+6ifdkmU+YBlw0tEoe+kE3//ShTalKkahvmuFjP3/MPJyNxg6Qox9OGnuO626uF38J/252DHoq5nFLxmy7PtR479F0BU7h+NRBnSKC/RsH81f+j6swrA32wmyXrDWLfary2nJX8jsJADwsn060dZRrEYUJgMNkxx8BYjoERjhGOgRHO/40/AgwA6Pwl5bmDALcAAAAASUVORK5CYII=",
          hu =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA4CAYAAABJ7S5PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEJGOUM2QTBGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEJGOUM2OUZGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI2RThDNjdERjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI2RThDNjdFRjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XKq1FgAAAwJJREFUeNrsm4tRhDAQhoNjA7RAC7QQSzhLiCVgCVgClnBXAlcClAAlYAlnMm7OHeSRF4HEy8yOzp0w7Mfun90kJrfbjTwGIU8PBD/j2fYGSZJs/YwpN8Yt55bBTzmu3Fqwi8nN7xkhfrGxDYdwuhKPqGgdANO5d3r3Y8Y5ujMI4dCgAQFbM4oaPHIEt8KBMOVYBn/IdgJRGQLANiAYlFsJEYO/z9ZAFOgC5hmECwjY2bnvCqwRcyCa0UXME4iTQwhLVo3F8g8IUOipi9nGIFILTTCGAGlTTIGgS+G0IYjCA4QCdOGENGOQM4cOCGFnPOU4BLF1NHRzgjqXGlTxptQhCF/a8CfdlzSCatyohNwOIS0mIZiI5dIUxSxB1B4BDBCBRGX67AxzkB0cxGTFKf2e6j5NmhdZuw9InY82LtCcKbfhn5b1gJyaGoCSB9mG8zDpeWv9gctQw5EjCF+jlvkLvZ0WRHrfMVMk+ar0fFqx5P/TzJfijb1EtgjVKi/V8ZQ4caMAQ1z4CmH879YshdM1h9FxK+Gzd259BL72yhqhWVmGZkRZI/gH10gj/6qbGquiEqNQblFQhakPC3VEF5k+ZFoagcZ7ZGnRm6SGIHSJKEXUmsiVFeoq5rRYXI+IDEatGgiq23pFoE0YcwoCdaRFQDNKpyMNydpKtGjERo2X3BugBxfJNxXBVz4WsNMqs5do0BXLEBdpmHMQAUZFrZM/JmJ5DgDCoLuCbjprNCGuSzoFEQCMs83itekBsqNpRkMM92GtQKCzVuUBZpTBZhNJuaBaG3DOksLDyDORqaeiSW47tDYglAoqjcNkqeeZxSoSnKXGCATznCJOIDgDASlRE//ls7ONZWMQO3ehtWv90e01KDjfhFQs6YB4BuWnE2qfkmOcbWihpd52v2X05suDtdJsa8prh9KrHQslLwCUNQIVR7504UxGJ958glCqLLmGyOW53OHD9uT3ONGF7HQOQ/pvVGKDuGZoRiGoxJ7bie6RKe0+HR5EjOPxX34wvgUYAA3Q5FQ1OsEYAAAAAElFTkSuQmCC";
        var io = u(71647),
          mu = Object.defineProperty,
          _u = Object.getOwnPropertyDescriptor,
          Oa = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? _u(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && mu(t, n, o), o;
          };
        const pu = {
          localized_headline: new Array(L.bP9),
          localized_body: new Array(L.bP9),
          localized_image: new Array(L.bP9),
          button_destination: jt.gs.k_EEventPage,
          button_loc_token: "EventEmail_Button_ClickForMoreDetails",
          video_link: "",
        };
        let Wn = class extends E.Component {
          GetEmailEditModel() {
            return new rt.pC(this.props.editModel);
          }
          render() {
            const { editModel: a } = this.props;
            let t = a.GetCurEditLanguage(),
              n = this.GetEmailEditModel(),
              i = [];
            n.GetSectionObjects().forEach((l, r) => {
              i.push(
                (0, e.jsx)(
                  Nt,
                  {
                    lang: t,
                    clanSteamID: a.GetClanSteamID(),
                    bEditor: a.BIsEmailEditable(),
                    appid: a.GetAppID(),
                    section: l,
                    additionalClassName: H.HeaderSection,
                    bTemplateEditable: !0,
                    fnRemoveSection: () => n.RemoveSection(r),
                  },
                  "email_editor_section_" + r,
                ),
              );
            });
            let o = n.GetLocalizedSubject(t);
            return (0, e.jsxs)("div", {
              className: H.EmailEditorContent,
              children: [
                (0, e.jsxs)("div", {
                  className: H.RightAlign,
                  children: [
                    (0, e.jsxs)("span", {
                      className: H.EmailOptionTitle,
                      children: [(0, s.we)("#LanguageTitle"), ": "],
                    }),
                    (0, e.jsx)(Vn.Ng, {
                      selectedLang: t,
                      fnLangHasData: n.BHasSomeLanguage,
                      fnOnLanguageChanged: (l) => a.SetCurEditLanguage(l),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, b.A)(f().FlexRowContainer, H.EmailSubjectCtn),
                  children: [
                    (0, e.jsx)("span", {
                      className: H.EmailOptionTitle,
                      children: (0, s.we)("#EventEmail_Subject"),
                    }),
                    (0, e.jsx)("input", {
                      type: "text",
                      value: o,
                      size: 90,
                      maxLength: 250,
                      onChange: (l) =>
                        this.GetEmailEditModel().SetLocalizedSubject(
                          a.GetCurEditLanguage(),
                          l.currentTarget.value,
                        ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, b.A)(H.EmailTemplate, H.DevEmailTemplate),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, b.A)(H.CenterAlign, H.DevEmail_TopHeader),
                      children: (0, e.jsx)("a", {
                        href: D.TS.PARTNER_BASE_URL,
                        children: (0, e.jsx)("img", {
                          src: cu,
                          className: H.DevEmail_TopLogo,
                        }),
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, b.A)(H.DevEmail_Content),
                      children: (0, e.jsx)("div", {
                        className: H.DevEmail_Subject,
                        children: o,
                      }),
                    }),
                    i,
                    (0, e.jsxs)("div", {
                      className: (0, b.A)(H.EmailSection, H.SupportCtn),
                      children: [
                        (0, e.jsx)("b", { children: "Have Questions?" }),
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)("a", { href: "#", children: "Contact us" }),
                        " and we'll get right back to you.",
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, b.A)(H.DevEmail_Content),
                      children: [
                        (0, e.jsx)("img", {
                          src: uu,
                          className: H.DevEmail_SignOff_Img,
                        }),
                        (0, e.jsx)("div", {
                          className: H.DevEmail_Signoff,
                          children: (0, e.jsxs)("div", {
                            children: [
                              "- ",
                              (0, s.we)("#EventEmail_Developer_SignOff2"),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, b.A)(H.DevEmail_Footer_Ctn),
                  children: [
                    (0, e.jsx)("span", {
                      className: H.DevEmail_Footer_Reason,
                      children: (0, s.we)(
                        "#EventEmail_Developer_Footer_Reason",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: H.DevEmail_Footer_SubSection,
                      children: [
                        (0, e.jsx)("img", { src: so, width: 103, height: 43 }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              className: H.DevEmail_Footer_Bold,
                              children: (0, e.jsxs)("strong", {
                                children: [
                                  (0, s.we)(
                                    "#EventEmail_Developer_Footer_Valve",
                                  ),
                                  (0, e.jsx)("br", {}),
                                  (0, s.we)(
                                    "#EventEmail_Developer_Footer_Valve2",
                                  ),
                                ],
                              }),
                            }),
                            (0, e.jsx)("div", {
                              className: H.DevEmail_Footer_Regular,
                              children: (0, s.we)(
                                "#EventEmail_Developer_Footer_Valve3",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              children: (0, e.jsxs)("a", {
                                className: f().FlexRowContainer,
                                href:
                                  (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                                  "https://twitter.com/steam_games",
                                target: D.TS.IN_CLIENT ? void 0 : "_blank",
                                children: [
                                  (0, e.jsx)("img", {
                                    src: hu,
                                    width: 33,
                                    height: 28,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: H.DevEmail_Follow,
                                    children: (0, s.we)(
                                      "#EventEmail_Developer_Footer_Follow",
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("button", {
                  className: (0, b.A)(f().Button, H.CenterAlign),
                  onClick: () => {
                    n.AddSection(pu);
                  },
                  children: (0, s.we)("#EventEmail_Template_AddSection"),
                }),
              ],
            });
          }
        };
        Wn = Oa([R.PA], Wn);
        let ga = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                capabilities: void 0,
                selectedCapability: void 0,
                nDuplicatesRemoved: 0,
              }),
              (this.m_cancelSignal = le().CancelToken.source()),
              (this.m_appFileInput = E.createRef()),
              (this.m_pubFileInput = E.createRef());
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("DevEventRecipientOptions cancelled");
          }
          async componentDidMount() {
            let a = await M.mh.GetPartnerCapabilities(this.m_cancelSignal),
              t = this.GetEmailEditModel(),
              n = { label: a[0].capability, value: a[0] };
            a.forEach((i) => {
              i.id === t.GetInternalTargetingPartnerCapability() &&
                (n = { label: i.capability, value: i });
            }),
              this.setState({ capabilities: a, selectedCapability: n });
          }
          GetEmailEditModel() {
            return new rt.pC(this.props.editModel);
          }
          async OnFileChoice(a, t) {
            let n = t.target.files;
            if (n && n.length > 0 && n[0]) {
              let i = this;
              this.setState({ readingFile: !0, file: n[0] }, () => {
                const o = new FileReader();
                (o.onload = function () {
                  const l = o.result
                      .toString()
                      .split(`
`)
                      .map((d) => Number.parseInt(d)),
                    r = new Set(l);
                  a == "app"
                    ? i.GetEmailEditModel().SetInternalAppIDs(Array.from(r))
                    : i
                        .GetEmailEditModel()
                        .SetInternalPublisherIDs(Array.from(r)),
                    i.setState({
                      readingFile: !1,
                      nDuplicatesRemoved: l.length - r.size,
                      file: null,
                    });
                }),
                  (o.onerror = function () {
                    console.error(
                      "DevEventRecipientOptions - Failed to read file",
                      o,
                    ),
                      i.setState({ readingFile: !1, file: null });
                  }),
                  o.readAsText(this.state.file);
              });
            }
            this.m_appFileInput.current &&
              this.m_appFileInput.current.value &&
              (this.m_appFileInput.current.value = null),
              this.m_pubFileInput.current &&
                this.m_pubFileInput.current.value &&
                (this.m_pubFileInput.current.value = null);
          }
          ShowTargets(a) {
            let t = this.GetEmailEditModel(),
              n =
                a == "app"
                  ? t.GetInternalTargetAppIDs()
                  : t.GetInternalTargetPublisherIDs();
            (0, U.pg)(
              (0, e.jsx)(F.o0, {
                strTitle: (0, s.we)(
                  a == "app"
                    ? "#EventEmail_Developer_ShowApps"
                    : "#EventEmail_Developer_ShowPublisher",
                  n.length,
                ),
                onOK: () => {},
                onCancel: () => {},
                bAlertDialog: !0,
                children: n.map((i) =>
                  (0, e.jsx)("div", { children: i }, a + "_" + i),
                ),
              }),
              window,
            );
          }
          ClearTargets(a) {
            const t = this.GetEmailEditModel();
            a == "app"
              ? t.SetInternalAppIDs([])
              : a == "publisher" && t.SetInternalPublisherIDs([]);
          }
          render() {
            if (!this.state.capabilities)
              return (0, e.jsx)(z.t, { string: (0, s.we)("#Loading") });
            let a = this.GetEmailEditModel();
            const t = this.state.capabilities.map((o) => ({
                value: o,
                label: o.capability,
              })),
              n = Bn.PubRights.map((o) =>
                (0, e.jsx)(
                  p.Yh,
                  {
                    onChange: (l) =>
                      a.UpdateInternalTargetPublisherRights(o.flag, l),
                    label: (0, s.we)("#PubRight_" + o.token),
                    tooltip: (0, s.we)("#PubRight_" + o.token + "_Tooltip"),
                    checked: a.BHasInternalTargetingPublisherRight(o.flag),
                  },
                  "PubRights" + o.flag,
                ),
              ),
              i = Bn.AppRights.filter(
                (o) =>
                  ![Ia.Download, Ia.UploadCDKeys, Ia.ManageCEG].includes(
                    o.token,
                  ),
              ).map((o) =>
                (0, e.jsx)(
                  p.Yh,
                  {
                    onChange: (l) => a.UpdateInternalTargetAppRights(o.flag, l),
                    label: (0, s.we)("#AppRight_" + o.token),
                    tooltip: (0, s.we)("#AppRight_" + o.token + "_Tooltip"),
                    checked: a.BHasInternalTargetingAppRight(o.flag),
                  },
                  "AppRights" + o.flag,
                ),
              );
            return (0, e.jsxs)("div", {
              className: H.RecipientCtn,
              children: [
                (0, e.jsx)("div", {
                  className: (0, b.A)(f().EventEditorTextTitle),
                  children: (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Recipients"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, b.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEmail_Recipients_desc"),
                    }),
                    (0, e.jsx)("table", {
                      className: H.DevEmail_RecipientTable,
                      children: (0, e.jsxs)("tbody", {
                        children: [
                          (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", {
                                children: (0, s.we)(
                                  "#EventEmail_Developer_IsUrgent",
                                ),
                              }),
                              (0, e.jsx)("td", {
                                children: (0, e.jsx)(p.Yh, {
                                  onChange: (o) =>
                                    a.SetInternalTargetPriority(o),
                                  label: (0, s.we)(
                                    "#EventEmail_Developer_IsUrgent_Desc",
                                  ),
                                  checked: a.BHasInternalTargetingPriority(),
                                }),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", {
                                children: (0, s.we)(
                                  "#EventEmail_Developer_PartnerCapability",
                                ),
                              }),
                              (0, e.jsx)("td", {
                                children: (0, e.jsx)(ca.Ay, {
                                  className: "react-select-container",
                                  classNamePrefix: "react-select",
                                  isSearchable: !0,
                                  isMulti: !1,
                                  value: this.state.selectedCapability,
                                  options: t,
                                  onChange: (o) =>
                                    this.setState(
                                      { selectedCapability: o },
                                      () =>
                                        this.GetEmailEditModel().SetInternalTargetPartnerCapability(
                                          o.value.id,
                                        ),
                                    ),
                                }),
                              }),
                            ],
                          }),
                          (0, e.jsx)("tr", {
                            children: (0, e.jsx)("th", {
                              colSpan: 2,
                              children: (0, s.we)(
                                "#EventEmail_Developer_RightDesc",
                              ),
                            }),
                          }),
                          (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", {
                                children: (0, s.we)(
                                  "#EventEmail_Developer_PublisherRights",
                                ),
                              }),
                              (0, e.jsx)("td", { children: n }),
                            ],
                          }),
                          (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", {
                                children: (0, s.we)(
                                  "#EventEmail_Developer_AppRights",
                                ),
                              }),
                              (0, e.jsx)("td", { children: i }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    this.state.readingFile &&
                      (0, e.jsx)(z.t, { size: "small" }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("b", {
                        children: (0, s.we)(
                          "#EventEmail_Developer_FilterOptional",
                        ),
                      }),
                    }),
                    this.state.nDuplicatesRemoved > 0 &&
                      (0, e.jsx)("div", {
                        className: Jt.WarningStylesBackground,
                        children: (0, e.jsx)("b", {
                          children: (0, s.we)(
                            "#EventEmail_Developer_DuplicateRemoved",
                            (0, Ct.D)(this.state.nDuplicatesRemoved),
                          ),
                        }),
                      }),
                    (0, e.jsxs)("div", {
                      className: H.TargetCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: H.TargetTypeTitle,
                          children: (0, e.jsx)("b", {
                            children: "App Targeting",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: H.TargetTypeCtn,
                          children: [
                            !!a.GetInternalTargetAppCount() &&
                              (0, e.jsxs)("div", {
                                className: H.TargetedListCtn,
                                children: [
                                  (0, e.jsxs)("div", {
                                    children: [
                                      a.GetInternalTargetAppCount(),
                                      " apps targeted.",
                                    ],
                                  }),
                                  (0, e.jsx)("button", {
                                    className: "btn_blue_steamui btn_medium",
                                    onClick: () => this.ShowTargets("app"),
                                    children: (0, e.jsx)("span", {
                                      children: (0, s.we)(
                                        "#EventEmail_Developer_ShowApps",
                                        a.GetInternalTargetAppCount(),
                                      ),
                                    }),
                                  }),
                                  (0, e.jsx)("button", {
                                    className: "btn_blue_steamui btn_medium",
                                    onClick: () => this.ClearTargets("app"),
                                    children: (0, e.jsx)("span", {
                                      children: (0, s.we)(
                                        "#EventEmail_Developer_ClearApps",
                                        a.GetInternalTargetAppCount(),
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: H.SelectListCtn,
                              children: [
                                (0, s.we)("#EventEmail_Developer_AddApps"),
                                (0, e.jsx)("label", {
                                  className: io.SelectImageButton,
                                  htmlFor: "internal_loadappid",
                                  children: (0, s.we)(
                                    "#EventEmail_Developer_SelectFile",
                                  ),
                                }),
                                (0, e.jsx)("input", {
                                  ref: this.m_appFileInput,
                                  id: "internal_loadappid",
                                  style: { display: "none" },
                                  type: "file",
                                  onSubmit: (o) => this.OnFileChoice("app", o),
                                  onChange: (o) => this.OnFileChoice("app", o),
                                  multiple: !1,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: H.TargetCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: H.TargetTypeTitle,
                          children: (0, e.jsx)("b", {
                            children: "Publisher Targeting",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: H.TargetTypeCtn,
                          children: [
                            a.GetInternalTargetPublisherCount() &&
                              (0, e.jsxs)("div", {
                                className: H.TargetedListCtn,
                                children: [
                                  (0, e.jsxs)("div", {
                                    children: [
                                      a.GetInternalTargetPublisherCount(),
                                      " publishers targeted.",
                                    ],
                                  }),
                                  (0, e.jsx)("button", {
                                    className: "btn_blue_steamui btn_medium",
                                    onClick: () =>
                                      this.ShowTargets("publisher"),
                                    children: (0, e.jsx)("span", {
                                      children: (0, s.we)(
                                        "#EventEmail_Developer_ShowPublisher",
                                        a.GetInternalTargetPublisherCount(),
                                      ),
                                    }),
                                  }),
                                  (0, e.jsx)("button", {
                                    className: "btn_blue_steamui btn_medium",
                                    onClick: () =>
                                      this.ClearTargets("publisher"),
                                    children: (0, e.jsx)("span", {
                                      children: (0, s.we)(
                                        "#EventEmail_Developer_ClearApps",
                                        a.GetInternalTargetAppCount(),
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: H.SelectListCtn,
                              children: [
                                (0, s.we)("#EventEmail_Developer_AddPublisher"),
                                (0, e.jsx)("label", {
                                  className: io.SelectImageButton,
                                  htmlFor: "internal_loadpubid",
                                  children: (0, s.we)(
                                    "#EventEmail_Developer_SelectFile",
                                  ),
                                }),
                                (0, e.jsx)("input", {
                                  ref: this.m_appFileInput,
                                  id: "internal_loadpubid",
                                  style: { display: "none" },
                                  type: "file",
                                  onSubmit: (o) =>
                                    this.OnFileChoice("publisher", o),
                                  onChange: (o) =>
                                    this.OnFileChoice("publisher", o),
                                  multiple: !1,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Oa([se.oI], ga.prototype, "OnFileChoice", 1),
          Oa([se.oI], ga.prototype, "ShowTargets", 1),
          Oa([se.oI], ga.prototype, "ClearTargets", 1),
          (ga = Oa([R.PA], ga));
        const vu =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAgCAYAAAAPHGYtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABo1JREFUeNrsWg1MVlUY/iDTElOcI9ZgZBorV8ywVFYGc05mZQbmMgoNk37NQq3IJZWoLf+l9eMqSQ1lpm4aWgStpauZYbl+wK3EssjKflYmtAyi59Hnbme3e7/v3o9PVtt9t2fnfPe+55x7z3Pe97znvV9cZ2dnKJD/pvTwqji5oLAPiuuAscBwYBDQR7dbgWZgP1APbN9UXXU8mN6uSVwkywEpyShKgTsMMiJJG1AJLAZJLcE0x5gckBKH4i5gCXBOlP3TesqACpAU+M9YkANieqN4GbgpRuPsYLcgqC2Y8i6QI2I4maNjPNYHwJhgL4qSHLmyzcCNUfTVAewGPtHvoUA2EG/o1DKoAEF/B1PvP1q7P0pidjFgwKR/YbPCdBQviSTKOOAR4Mlg6n1YDiYyBQUn92yffbwJXC/L4R6Va1ynFZ4B7FQITvkTyLATGci/xXQ5ZVEQw/NNkeo1wBxgr8D6awDZv026lF7AY8HUe7QcWE1/1I8AZ/lsvxYWMA3t6Q4n0jrw+y9ZIl1mHbAN157G73WoTzX2p1Rc/97D4XegiL4SSAR+VHCxBu0/ls5CFJdG6KoG+muk/wKKc130jkLvTofn4KKqAs4EGqCzyOV556IYCRyEzoMuOv0UDcfrPWpwrQD1nnw//H7dtJyJURBjRWBW+6UWMRTU23kNyNOlvUY7urrJHoi5GAUJuA8YpqwEX3wm8D7uD5DqKOCGCMgwus4No5fr8jh03ZOkU4axE130RkpnDnQud9HhgT5feoOhd772/1vNM6UVEIyNgpgTis5Ccoe/O+jwWm/V2233OGZFhDEYPPRV25kiipZUCHyGBfCz9J6hhapOEm5XfQHwi+r7Hfpnqmmjw8HZSYqMei9N5LMRnr/UflYEEbS8B2x6fI8kvcdgOznDoyDncUxOo+rvArcYZFlSaFy7yHbvCg9jDFTZjLFWq74HqMZLxhtWusV4+TyDnErc+ypM/024v9aDBZ+nSNN6V1rqdA/kTELbCzHGQeMayUo1lXj2g95WVGlp6+3kJPsk5j25LEsWA/swwAqU1iTSb19D4uWv7dmGZFxPwIO1hhnncyCHxEJ3h1ZWPdp0xOis1Fd7miktcsmmTJErJtGz5c4z0XYYdD8Kt6cDDykNZonjPoR+DqM47BSt8QEfBg55zJdN5QQZHR9FkSUX9JZAn5yle/Ptq0WSGGGsJ0Knst0UZsTfYOCCSVkQxuf7kWnAlzakhnFpm/A+DTpyhAwLdZK3Ae7BRbI8WuAYFJcBJPQ3T6E0BvwJoCWka7UzBHZbmSXQPeTA/BGgGEgTihl54IHmy/f6FvapTMMs4FNdZpQ1D/jQCAhOm2CMESiGWI+kstpy27jvFkh9A2xQBFaia7NVPuU7QyBXwRRLLQZNk2sqFlF8oANWOBrmZZK0h2XqfJMeRv1XDwTR7a0i0Pcl2uTzFbkxNF/ZhblntrzEg3VZZ7ocPEOOYfH9lFHZ4NJ2qebgbrTjgr9WVsf95UU/h1D7pHwNcIWmaSJITgYGmcG9woWY8SgalRFYGIGYHyLsN+wvQecl65kabZFO0mm2GlpFgX4maCGsVJrLkulh5rBJh3O6++26vMTrftnDw8o9oSo3/DbtTVwJV+HeMb0EQ+nlwD0+3n2fBx1OwgytuiaFsAXG/YYuzj83dbvlHMN7VaqeJ+s4OanAH4beUN0fjT4GObl6w4VNAAbooL/eV+JT4SeTk8+Hy3lpJXCD2yg/Wo56psx6iM+JqfegczOQ4kJ6nbEao5VsIylrCSOmSlsgwDNVqc2qUnWIjFNgMM9lzvZAd7fGWWEsds+Ws0tuaxY6YqT1nNId7S7tuC/lQzdLbXv6nJQOY3MNJ+N0VuK3pQsUznKFblHqyMk9fGeQ5vZxry5c+sbwBq3qa6vDpLdAp0LP1d+4ZWVCzBCbi2uEntuSnXKVzV6y0qtt8fi3iu/fsX9ihu5y5ZgOiEi/UoU+pwSpTe97ziKRYaVbUpQ+4QphFvkVnQPGKwLhSlgXxZj8ZFAeTH1kMVMgjMsftd3PVfi3TMm6zSLlauWWRkUxZnnwLce/5YSUiMzWOcKSVUoq8nzTIh+7TKT5lVqvB7BAgj94/D/cmuHe2rSvvBrDcU6SHRDTRXIMgnjGuDfk/J3GqxxXXmxC8J+1GLg1hxQGPyfM1UHL6z8/g7/jdgc5Zp4rdOpTrflHdivHZv6RnYfYbYEL60ZyAul++UeAAQDyv2dSS4HffQAAAABJRU5ErkJggg==";
        var gu = Object.defineProperty,
          Su = (a, t, n) =>
            t in a
              ? gu(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (a[t] = n),
          oo = (a, t, n) => Su(a, typeof t != "symbol" ? t + "" : t, n);
        const lo = (a) => {
            const [t, n] = (0, E.useState)(a ? void 0 : !1);
            return (
              (0, E.useEffect)(() => {
                const i = le().CancelToken.source();
                return (
                  a &&
                    (async () => {
                      const l = await Eu.Get().HintLoadIsAppReleaseInSteamChina(
                        a,
                        i,
                      );
                      i.token.reason || n(l);
                    })(),
                  () => i.cancel("useSteamChinaAppIsVisible: unmounting")
                );
              }, [a]),
              !!t
            );
          },
          ro = class Wa {
            constructor() {
              oo(this, "m_mapAppToSCVisibility", new Map());
            }
            BIsAppReleasedInSteamChina(t) {
              return !!this.m_mapAppToSCVisibility.get(t);
            }
            async HintLoadIsAppReleaseInSteamChina(t, n) {
              var i;
              if (this.m_mapAppToSCVisibility.has(t))
                return this.m_mapAppToSCVisibility.get(t);
              const o = D.TS.COMMUNITY_BASE_URL + `ogg/${t}/ajaxisvisibleinsc`;
              try {
                const l = await le().get(o, {
                  withCredentials: !0,
                  cancelToken: n.token,
                });
                if (
                  ((i = l == null ? void 0 : l.data) == null
                    ? void 0
                    : i.success) == Ze.R &&
                  !n.token.reason
                )
                  return (
                    this.m_mapAppToSCVisibility.set(t, !!l.data.visible),
                    !!l.data.visible
                  );
              } catch (l) {
                const r = (0, Be.H)(l);
                console.error(
                  "HintLoadIsAppReleaseInSteamChina: " + r.strErrorMsg,
                  r,
                );
              }
              return !1;
            }
            static Get() {
              return (
                Wa.s_Singleton || (Wa.s_Singleton = new Wa()), Wa.s_Singleton
              );
            }
          };
        oo(ro, "s_Singleton");
        let Eu = ro;
        function fu(a) {
          const { editModel: t } = a,
            n = (0, Xa.E)(),
            o = new rt.pC(t).GetSectionObj(0),
            [l, r] = (0, O.q3)(() => [o.GetHeadline(n), o.GetBody(n)]);
          return (0, e.jsx)("div", {
            className: H.EmailEditorContent,
            children: (0, e.jsx)("div", {
              className: H.EmailTemplate,
              children: (0, e.jsxs)("div", {
                className: (0, b.A)(H.DevEmailEmailBackground, H.EmailSection),
                children: [
                  (0, e.jsx)("p", {
                    children:
                      "This description and location information is automatically injected into the registration and reminder emails",
                  }),
                  (0, e.jsx)(p.JU, {
                    children: "Short Description For Email Rendering",
                  }),
                  (0, e.jsx)("textarea", {
                    className: H.BodyInput,
                    placeholder: "Come join us...",
                    value: l,
                    rows: 8,
                    onChange: (d) =>
                      o.SetHeadline(d.currentTarget.value || "", n),
                  }),
                  (0, e.jsx)(p.JU, {
                    children: "Event Location (address / building)",
                  }),
                  (0, e.jsx)("textarea", {
                    className: H.BodyInput,
                    placeholder: "10040 NE 4th Ave..",
                    value: r,
                    rows: 8,
                    onChange: (d) => o.SetBody(d.currentTarget.value || "", n),
                  }),
                ],
              }),
            }),
          });
        }
        var co = u(25515),
          xu = u(31501),
          bu = Object.defineProperty,
          ju = Object.getOwnPropertyDescriptor,
          ht = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? ju(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && bu(t, n, o), o;
          };
        const Cu = (0, R.PA)((a) => {
            const { editModel: t } = a,
              { bHasValidatedEmail: n } = (0, $c.n)();
            if (!ft.KN.Get().BShowEmailEditorTab(t.GetEventModel()))
              return null;
            const o = (0, Ca.H)() !== t.GetClanAccountID();
            return (0, e.jsxs)(E.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: H.EmailTabCtn,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, b.A)(f().EventEditorTextTitleCtn),
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, b.A)(
                            f().EventEditorTextTitle,
                            f().FlexGrow,
                          ),
                          children: (0, s.we)("#EventEmail_FeatureTitle"),
                        }),
                        (0, e.jsx)("a", {
                          href: "#",
                          className: (0, b.A)(f().doclink),
                          children: (0, e.jsx)("span", {
                            children: (0, s.we)(
                              "#selectimage_see_documentation",
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, b.A)(f().FlexColumnContainer),
                      children: (0, e.jsx)(p.RF, {
                        label: (0, s.we)("#EventEmail_EnableEmailOption"),
                        onChange: (l) => {
                          const { editModel: r } = a,
                            d = r.GetClanSteamID().GetAccountID();
                          (r.CreateOrGetEmailSettings(d).bEnable = l),
                            r.SetDirty(C.IQ.jsondata_email);
                        },
                        checked: t.BIsEmailEnabled(),
                      }),
                    }),
                  ],
                }),
                !!t.BIsEmailEnabled() &&
                  (0, e.jsxs)("div", {
                    className: ve.EventEditorInputPaneContainer,
                    children: [
                      o &&
                        (0, e.jsx)(xe.tH, {
                          children: (0, e.jsx)(Ra, { editModel: t }),
                        }),
                      o &&
                        (0, e.jsx)(xe.tH, {
                          children: (0, e.jsx)(Ht, {
                            editModel: t,
                            bHasValidatedEmail: n,
                          }),
                        }),
                      (0, e.jsx)(xe.tH, {
                        children:
                          (0, Ca.H)() === t.GetClanAccountID()
                            ? (0, e.jsx)(fu, { editModel: t })
                            : (0, e.jsx)(e.Fragment, {
                                children: D.UF.IS_VALVE_GROUP
                                  ? (0, e.jsx)(Wn, { editModel: t })
                                  : (0, e.jsx)(Du, { editModel: t }),
                              }),
                      }),
                      (0, e.jsx)(wu, { editModel: t }),
                      o &&
                        (0, e.jsx)(xe.tH, {
                          children: D.UF.IS_VALVE_GROUP
                            ? (0, e.jsx)(ga, { editModel: t })
                            : (0, e.jsxs)(E.Fragment, {
                                children: [
                                  (0, e.jsx)(Qn, { editModel: t }),
                                  (0, e.jsx)(mn, { editModel: t }),
                                ],
                              }),
                        }),
                    ],
                  }),
              ],
            });
          }),
          wu = (a) =>
            lo(a.editModel.GetAppID())
              ? (0, e.jsx)("div", {
                  className: Jt.WarningStylesBackground,
                  children: (0, s.we)("#EventEmail_SteamChina_Warning"),
                })
              : null;
        let Ht = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSettingUp: !1 }),
              (this.m_cancelSignal = le().CancelToken.source());
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventEmailControlBar cancelled");
          }
          FireTestEmail() {
            const { editModel: a } = this.props;
            M.mh
              .FireTestEmail(
                a.GetClanSteamID(),
                a.GetGID(),
                a.GetCurEditLanguage(),
                this.m_cancelSignal,
              )
              .then((t) => {
                (0, U.pg)(
                  (0, e.jsx)(F.o0, {
                    strTitle: (0, s.we)("#EventDisplay_Share_Success"),
                    onOK: () => {},
                    onCancel: () => {},
                    bAlertDialog: !0,
                    children: (0, s.we)("#EventEmail_TestEmailQueue"),
                  }),
                  window,
                );
              })
              .catch((t) => {
                (0, U.pg)(
                  (0, e.jsx)(F.KG, { children: (0, Be.H)(t).strErrorMsg }),
                  window,
                );
              });
          }
          OnTestEmail(a) {
            const { editModel: t } = this.props;
            a.preventDefault(),
              this.props.bHasValidatedEmail &&
              !t.BIsDirtyType(C.IQ.jsondata_email)
                ? (0, U.HT)(
                    (0, e.jsx)(F.o0, {
                      strTitle: (0, s.we)("#EventEmail_Test_Email"),
                      onOK: this.FireTestEmail,
                      onCancel: () => {},
                      children: (0, s.PP)(
                        "#EventEmail_Send_TestEmail_Desc",
                        (0, e.jsx)("a", {
                          target: D.TS.IN_CLIENT ? void 0 : "blank",
                          href: D.TS.STORE_BASE_URL + "account/",
                          children: D.TS.STORE_BASE_URL + "account/",
                        }),
                      ),
                    }),
                    (0, V.uX)(a),
                  )
                : t.BIsDirtyType(C.IQ.jsondata_email)
                  ? (0, U.pg)(
                      (0, e.jsx)(F.KG, {
                        children: (0, s.we)("#EventEmail_Test_Dirty"),
                      }),
                      window,
                    )
                  : (0, U.pg)(
                      (0, e.jsx)(F.KG, {
                        children: (0, s.PP)(
                          "#EventEmail_Test_Email_Fail",
                          (0, e.jsx)("a", {
                            target: D.TS.IN_CLIENT ? void 0 : "blank",
                            href: D.TS.STORE_BASE_URL + "account/",
                            children: D.TS.STORE_BASE_URL + "account/",
                          }),
                        ),
                      }),
                      window,
                    );
          }
          OnPrepareEmail(a) {
            (0, U.pg)(
              (0, e.jsx)(_n, { editModel: this.props.editModel }),
              (0, V.uX)(a),
            );
          }
          OnSetupAndFireEmailConfirm(a) {
            (0, U.HT)(
              (0, e.jsx)(F.o0, {
                strTitle: "(VO) Setup and Send Email",
                onOK: () =>
                  this.setState({ bSettingUp: !0 }, this.OnSetupAndFireEmail),
                onCancel: () => {},
                children: (0, e.jsx)("div", {
                  children:
                    "(VO) Be thoughtful. Talk to Alden or Adil if not sure. By pressing this, we will setup a database entry to fire this email in its current form and target. Double check the audience make sense and the localization looks good. This will also begin firing immediately.",
                }),
              }),
              (0, V.uX)(a),
            );
          }
          async OnSetupAndFireEmail() {
            const { editModel: a } = this.props;
            try {
              let t = D.UF.IS_VALVE_GROUP
                ? await M.mh.SetupInternalPartnerCommunication(
                    this.m_cancelSignal,
                    a.GetClanSteamID(),
                    a.GetGID(),
                    a.GetEmailSettings().internal_targeting,
                  )
                : await M.mh.SetupPartnerEmailCampaign(
                    a.GetClanSteamID(),
                    a.GetGID(),
                    this.m_cancelSignal,
                  );
              (0, U.pg)(
                (0, e.jsxs)(F.o0, {
                  strTitle: (0, s.we)("#EventDisplay_Share_Success"),
                  onOK: () => {},
                  onCancel: () => {},
                  bAlertDialog: !0,
                  children: [
                    (0, e.jsx)("div", {
                      children:
                        "Succesfully created the email on the server and saved it to the event. We are done!",
                    }),
                    !!t.warning &&
                      "However we hit the following warning: " + t.warning_msg,
                  ],
                }),
                window,
              );
            } catch (t) {
              let n = (0, Be.H)(t);
              console.error("OnSetupAndFireEmail failed: " + n.strErrorMsg),
                (0, U.pg)(
                  (0, e.jsx)(F.o0, {
                    strTitle: (0, s.we)("#Error_Message"),
                    onOK: () => {},
                    onCancel: () => {},
                    bAlertDialog: !0,
                    children: (0, e.jsxs)("div", {
                      children: [
                        "We hit the follwoing error: Error Code (",
                        n.errorCode,
                        ")",
                        (0, e.jsx)("br", {}),
                        "Error Message: ",
                        n.strErrorMsg,
                      ],
                    }),
                  }),
                  window,
                );
            } finally {
              this.setState({ bSettingUp: !1 });
            }
          }
          render() {
            const { editModel: a } = this.props,
              t = !!a.GetEmailSettings().locked,
              n = ft.KN.Get().GetPartnerEventPermissions(a.GetClanSteamID());
            return (0, e.jsxs)("div", {
              className: H.ControlBarCtn,
              children: [
                (0, e.jsxs)("a", {
                  onClick: this.OnTestEmail,
                  className: f().EditPreviewButton,
                  children: [
                    this.state.bSettingUp && (0, e.jsx)(z.t, { size: "small" }),
                    (0, s.we)("#EventEmail_Control_TestEmail"),
                  ],
                }),
                t &&
                  n.valve_admin &&
                  (0, e.jsx)("a", {
                    onClick: this.OnSetupAndFireEmailConfirm,
                    className: f().EditPreviewButton,
                    children: "(VO) Setup and Fire Email",
                  }),
                t &&
                  !n.valve_admin &&
                  (0, e.jsx)("div", {
                    children: (0, s.we)(
                      "#EventEmail_Ready_ValveRequiredToSend",
                    ),
                  }),
                !t &&
                  (0, e.jsx)("a", {
                    onClick: this.OnPrepareEmail,
                    className: f().EditPreviewButton,
                    children: (0, s.we)("#EventEmail_Control_Prepare"),
                  }),
              ],
            });
          }
        };
        ht([se.oI], Ht.prototype, "FireTestEmail", 1),
          ht([se.oI], Ht.prototype, "OnTestEmail", 1),
          ht([se.oI], Ht.prototype, "OnPrepareEmail", 1),
          ht([se.oI], Ht.prototype, "OnSetupAndFireEmailConfirm", 1),
          ht([se.oI], Ht.prototype, "OnSetupAndFireEmail", 1),
          (Ht = ht([R.PA], Ht));
        const Du = (0, R.PA)((a) => {
          const { editModel: t } = a,
            n = (y) => {
              var N;
              let A = Array(),
                te = (N = pt.A.Get().GetApp(y)) == null ? void 0 : N.GetName();
              return (
                jt.j3.forEach((oe) =>
                  A.push(
                    (0, e.jsx)(
                      "option",
                      { value: oe, children: (0, s.we)("#" + oe, te) },
                      oe,
                    ),
                  ),
                ),
                A
              );
            },
            i = (y) => {
              a.editModel.SetCurEditLanguage(y);
            },
            o = (y) => {
              jt.j3.forEach((N) => {
                N === y.target.value && new rt.pC(t).SetSubjectTextLoc(N);
              });
            };
          let l = new rt.pC(t),
            r = n(t.GetAppID()),
            d = t.GetCurEditLanguage();
          const _ = t.GetAppID(),
            [c] = (0, pe.t7)(_, { include_basic_info: !0 });
          if (!c)
            return (0, e.jsx)(z.t, {
              string: (0, s.we)("#Loading"),
              position: "center",
              size: "small",
            });
          let g = l.GetSectionObj(0),
            h = l.GetSectionObj(1),
            v = "#EventEmail_Reason_Played",
            m = !1,
            x = "#EventEmail_Footer_Reason_Played",
            j = c == null ? void 0 : c.GetStorePageURL(),
            S = c == null ? void 0 : c.GetName();
          if (!l.BIsTargetingGamePlayers()) {
            if (l.BIsTargetingGameFollowers())
              (v = "#EventEmail_Reason_Follow"),
                (m = !0),
                (x = "#EventEmail_Footer_Reason_Followed");
            else if (l.BIsTargetingGameWishlisters())
              (v = "#EventEmail_Reason_Wishlist"),
                (m = !0),
                (x = "#EventEmail_Footer_Reason_Wishlisted");
            else if (l.BIsTargetingSomeCreator()) {
              (v = "#EventEmail_Reason_Follow"),
                (m = !0),
                (x = "#EventEmail_Footer_Reason_Followed");
              let y = l.GetSomeCreatorTarget(),
                N = c.GetAllCreatorClanIDs().find((A) => A == y);
              if (N) {
                const A = k.b.InitFromClanID(N);
                let te = dt.pF.GetCreatorHome(A);
                if (te) {
                  let oe = "developer";
                  c.GetAllDeveloperCreatorClans().includes(N) ||
                    (c.GetAllPublisherCreatorClans().includes(N)
                      ? (oe = "publisher")
                      : (oe = "franchise")),
                    (j = te.GetCreatorHomeURL(oe)),
                    (S = te.GetName());
                }
              }
            }
          }
          return (0, e.jsxs)("div", {
            className: H.EmailEditorContent,
            children: [
              (0, e.jsxs)("div", {
                className: (0, b.A)(f().FlexRowContainer, H.EmailSubjectCtn),
                children: [
                  (0, e.jsx)("span", {
                    className: H.EmailOptionTitle,
                    children: (0, s.we)("#EventEmail_Subject"),
                  }),
                  (0, e.jsx)("select", {
                    className: H.EmailSubjectSelect,
                    value: l.GetSubjectTextLoc(),
                    onChange: o,
                    children: r,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: H.RightAlign,
                children: [
                  (0, e.jsxs)("span", {
                    className: H.EmailOptionTitle,
                    children: [(0, s.we)("#LanguageTitle"), ": "],
                  }),
                  (0, e.jsx)(Vn.Ng, {
                    selectedLang: d,
                    fnLangHasData: l.BHasSomeLanguage,
                    fnOnLanguageChanged: i,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: H.EmailTemplate,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, b.A)(H.EmailIconHeader, H.CenterAlign),
                    children: (0, e.jsx)("img", { src: vu }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, b.A)(
                      H.EmailBackground,
                      H.EmailReasonHeader,
                      H.EmailTextCtn,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: H.Hello,
                        children: (0, s.we)(
                          "#EventEmail_Hello",
                          (0, s.we)("#EventEmail_UserName"),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: H.Reason,
                        children: (0, s.we)(v, S),
                      }),
                      !m &&
                        (0, e.jsx)("a", {
                          className: H.GameLink,
                          href: j,
                          children: S,
                        }),
                    ],
                  }),
                  (0, e.jsx)(Nt, {
                    lang: d,
                    clanSteamID: t.GetClanSteamID(),
                    bEditor: t.BIsEmailEditable(),
                    appid: t.GetAppID(),
                    section: g,
                    additionalClassName: H.HeaderSection,
                  }),
                  (0, e.jsx)(Nt, {
                    lang: d,
                    clanSteamID: t.GetClanSteamID(),
                    bEditor: t.BIsEmailEditable(),
                    appid: t.GetAppID(),
                    section: h,
                    additionalClassName: H.HeaderSection,
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsxs)("div", {
                    className: H.Footer,
                    children: [
                      (0, e.jsx)("div", { children: (0, s.we)(x) }),
                      (0, e.jsx)("span", {
                        children: (0, s.we)("#EventEmail_Footer_Game", S),
                      }),
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Footer_OptOut_Desc_Game",
                        ),
                      }),
                      (0, e.jsxs)("span", {
                        children: [
                          (0, e.jsx)("a", {
                            href: "#",
                            children: (0, s.we)(
                              "#EventEmail_Footer_OptOut_Target",
                              S,
                            ),
                          }),
                          " " + (0, s.we)("#EventEmail_Footer_OptOut_Or") + " ",
                          (0, e.jsx)("a", {
                            href: "#",
                            children: (0, s.we)(
                              "#EventEmail_Footer_Optout_All",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, b.A)(H.FooterLegal, f().FlexRowContainer),
                    children: [
                      (0, e.jsx)("img", { src: so }),
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Footer_LegalWithAddress_Line1",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Footer_LegalWithAddress_Line2",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
        let mn = class extends E.Component {
          constructor() {
            super(...arguments), (this.state = {});
          }
          GetEmailEditModel() {
            return new rt.pC(this.props.editModel);
          }
          async componentDidMount() {
            let a = await J.ac.LoadClanInfoForClanSteamID(
              this.props.editModel.GetClanSteamID(),
            );
            this.setState({ clanInfo: a });
          }
          OnControlGroupSpinnerChange(a) {
            let t = Number.parseInt(a.target.value);
            this.GetEmailEditModel().SetControlGroupPercent(t);
          }
          render() {
            const { editModel: a } = this.props;
            if (
              !ft.KN.Get().GetPartnerEventPermissions(a.GetClanSteamID())
                .support_user
            )
              return null;
            if (!this.state.clanInfo)
              return (0, e.jsx)(z.t, {
                string: (0, s.we)("#Loading"),
                size: "medium",
              });
            const n = this.GetEmailEditModel();
            return (0, e.jsxs)("div", {
              className: (0, b.A)(f().ValveOnlyBackground, H.RecipientCtn),
              children: [
                (0, e.jsx)("div", {
                  className: (0, b.A)(f().EventEditorTextTitle),
                  children: (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Filter"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, b.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEmail_Filter_Desc"),
                    }),
                    !!this.state.clanInfo.is_ogg &&
                      (0, e.jsx)(p.RF, {
                        onChange: (i) =>
                          this.GetEmailEditModel().SetFilterIRTopN(i),
                        label: (0, s.we)("#EventEmail_Filter_IR"),
                        checked: n.BIsIRTopNFiltering(),
                      }),
                    !!this.state.clanInfo.is_ogg &&
                      (0, e.jsx)(p.RF, {
                        onChange: (i) =>
                          this.GetEmailEditModel().SetFilterWishlist(i),
                        label: (0, s.we)("#EventEmail_Filter_Wishlist"),
                        checked: n.BIsWishListFiltering(),
                      }),
                    (0, e.jsx)(p.pd, {
                      type: "number",
                      min: "0",
                      max: "99",
                      label: (0, s.we)("#EventEmail_Filter_ControlGroup"),
                      value: n.GetControlGroupPercent(),
                      onChange: this.OnControlGroupSpinnerChange,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        ht([se.oI], mn.prototype, "OnControlGroupSpinnerChange", 1),
          (mn = ht([R.PA], mn));
        let Qn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = { bLoadingCreator: !0 }),
              (this.m_cancelSignal = le().CancelToken.source());
          }
          async LoadCreatorHome() {
            this.state.bLoadingCreator ||
              this.setState({ bLoadingCreator: !0 });
            const { editModel: a } = this.props;
            pt.A.Get().QueueAppRequest(a.GetAppID(), {
              include_basic_info: !0,
            });
            let t = new Array();
            (
              await dt.pF.LoadCreatorHomeListForAppIncludeHiddden(
                a.GetAppID(),
                this.m_cancelSignal,
              )
            ).forEach((i) => {
              let o = k.b.InitFromClanID(i.clan_account_id);
              t.push(dt.pF.LoadCreatorHome(o, !1, this.m_cancelSignal));
            }),
              Promise.all(t).then((i) => {
                this.m_cancelSignal.token.reason ||
                  this.setState({ bLoadingCreator: !1 });
              });
          }
          componentDidMount() {
            this.LoadCreatorHome();
          }
          componentDidUpdate(a) {
            a.editModel.GetAppID() != this.props.editModel.GetAppID() &&
              this.LoadCreatorHome();
          }
          GetEmailEditModel() {
            return new rt.pC(this.props.editModel);
          }
          BuildCreatorHomeToggle(a) {
            let t = new Array(),
              n = new Array();
            if (this.state.bLoadingCreator)
              t.push((0, e.jsx)(z.t, {}, "EmailRecipientControls_creator"));
            else {
              const { editModel: i } = this.props;
              let o = new rt.pC(i);
              dt.pF
                .GetCreatorHomeListForAppIncludeHidden(i.GetAppID())
                .forEach((l) => {
                  let r = dt.pF.GetCreatorHomeByID(l);
                  if (
                    r &&
                    !n.some((d) => d.clan_account_id === r.GetClanAccountID())
                  ) {
                    let d = (0, e.jsxs)("a", {
                        target: D.TS.IN_CLIENT ? void 0 : "_blank",
                        href: r.GetCreatorHomeURL(l.type),
                        children: [
                          r.BIsHidden()
                            ? (0, s.we)("#EventEmail_CreatorHidden") + " "
                            : "",
                          r.GetName(),
                        ],
                      }),
                      _ = (0, e.jsx)(Pa, {
                        audience: r.GetNumFollowers(),
                        label: (0, s.PP)(
                          "#EventEmail_Recipients_follower_creator",
                          d,
                        ),
                      });
                    t.push(
                      (0, e.jsx)(
                        p.RF,
                        {
                          onChange: (c) =>
                            this.GetEmailEditModel().SetTargetingCreator(
                              c,
                              l.clan_account_id,
                            ),
                          label: _,
                          checked: o.BIsTargetingCreator(r.GetClanAccountID()),
                        },
                        "RecipientToggle_" + l.clan_account_id,
                      ),
                    ),
                      a.support_user &&
                        ((_ = (0, e.jsx)(Pa, {
                          valveOnly: !0,
                          label: (0, s.PP)(
                            "#EventEmail_Recipients_player_creator",
                            d,
                          ),
                        })),
                        t.push(
                          (0, e.jsx)(
                            "span",
                            {
                              className: (0, b.A)(f().ValveOnlyBackground),
                              children: (0, e.jsx)(p.RF, {
                                onChange: (c) =>
                                  this.GetEmailEditModel().SetTargetingCreatorPlayer(
                                    c,
                                    l.clan_account_id,
                                  ),
                                label: _,
                                checked: o.BIsTargetingCreatorPlayer(
                                  r.GetClanAccountID(),
                                ),
                              }),
                            },
                            "RecipientToggle_player_" + l.clan_account_id,
                          ),
                        ),
                        n.push(l));
                  }
                }),
                t.length == 0 &&
                  t.push(
                    (0, e.jsx)(
                      "div",
                      {
                        children: (0, s.PP)(
                          "#EventEmail_Recipients_NoCreatorHome",
                          (0, e.jsx)("a", {
                            href: "https://partner.steamgames.com/doc/store/creator_homepage",
                            children:
                              "https://partner.steamgames.com/doc/store/creator_homepage",
                          }),
                        ),
                      },
                      "creatorhome_plug",
                    ),
                  );
            }
            return t;
          }
          render() {
            const { editModel: a } = this.props;
            let t = new rt.pC(a);
            const n = ft.KN.Get().GetPartnerEventPermissions(
              a.GetClanSteamID(),
            );
            return (0, e.jsxs)("div", {
              className: H.RecipientCtn,
              children: [
                (0, e.jsx)("div", {
                  className: (0, b.A)(f().EventEditorTextTitle),
                  children: (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Recipients"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, b.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEmail_Recipients_desc"),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetTargetingExistingPlayer(i),
                      label: (0, s.we)("#EventEmail_Recipients_players"),
                      checked: t.BIsTargetingGamePlayers(),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetTargetingGameWishlist(i),
                      label: (0, s.we)("#EventEmail_Recipients_wishlist"),
                      checked: t.BIsTargetingGameWishlisters(),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetTargetingGameFollower(i),
                      label: (0, e.jsx)(Pa, {
                        label: (0, s.we)("#EventEmail_Recipients_follower"),
                        audience: J.ac.GetClanMemberCount(a.GetAppID()),
                      }),
                      checked: t.BIsTargetingGameFollowers(),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetExcludeGameOwners(i),
                      label: (0, e.jsx)(Pa, {
                        label: (0, s.we)(
                          "#EventEmail_Recipients_exclude_owners",
                        ),
                      }),
                      checked: t.BIsExcludingGameOwners(),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (i) =>
                        this.GetEmailEditModel().SetOwnersWithNoPlaytime(i),
                      label: (0, e.jsx)(Pa, {
                        label: (0, s.we)("#EventEmail_Recipients_no_playtime"),
                      }),
                      checked: t.BIsTargetingGameOwnersWithoutPlaytime(),
                    }),
                    this.BuildCreatorHomeToggle(n),
                  ],
                }),
              ],
            });
          }
        };
        Qn = ht([R.PA], Qn);
        class Pa extends E.Component {
          render() {
            const { valveOnly: t, label: n } = this.props;
            return (0, e.jsxs)("div", {
              className: H.TargetAndAudience,
              children: [
                (0, e.jsxs)("span", {
                  children: [t && (0, e.jsx)("span", { children: "(VO) " }), n],
                }),
                (0, e.jsx)("span", {
                  children:
                    this.props.audience !== void 0 &&
                    (0, Ct.D)(this.props.audience),
                }),
              ],
            });
          }
        }
        let _n = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                state: this.props.editModel.BIsDirty() ? "unsaved" : "loading",
              });
          }
          componentDidMount() {
            const { editModel: a } = this.props;
            if (this.state.state == "loading") {
              let t = (0, co.Lk)(a),
                n = (0, co.Z6)(a);
              this.setState({
                error: t,
                warning: n,
                state:
                  t.length > 0
                    ? "error"
                    : n.length > 0
                      ? "readywithwarning"
                      : "ready",
              });
            }
          }
          OnLockEmail() {
            const { editModel: a } = this.props;
            new rt.pC(a).LockEmail(),
              this.setState({ state: "saving" }, () => {
                M.mh.SaveModel(a.GetClanSteamID()).then((n) => {
                  this.setState({ state: "done" });
                });
              });
          }
          render() {
            switch (this.state.state) {
              case "loading":
                return (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)(z.t, {}),
                });
              case "ready":
                return (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Desc"),
                  onOK: this.OnLockEmail,
                  onCancel: this.props.closeModal,
                });
              case "readywithwarning":
                return (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Desc"),
                  onOK: this.OnLockEmail,
                  onCancel: this.props.closeModal,
                  closeModal: this.props.closeModal,
                  children: (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, s.we)(
                          "#EventEmail_Preparation_DescWarning",
                        ),
                      }),
                      (0, e.jsx)("ol", { children: this.state.warning }),
                    ],
                  }),
                });
              case "unsaved":
                return (0, e.jsx)(F.KG, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Unsaved"),
                  closeModal: this.props.closeModal,
                });
              case "saving":
                return (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)(
                    "#EventEmail_Preparation_InProcess",
                  ),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                  children: (0, e.jsx)(z.t, {}),
                });
              case "done":
                return (0, e.jsx)(F.o0, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Done"),
                  onOK: this.props.closeModal,
                  onCancel: this.props.closeModal,
                });
              default:
                return (0, e.jsx)(F.KG, {
                  strTitle: (0, s.we)("#EventEmail_Preparation_Title"),
                  strDescription: (0, s.we)("#EventEmail_Preparation_Error"),
                  closeModal: this.props.closeModal,
                  children: (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("ol", { children: this.state.error }),
                      this.state.warning.length > 0 &&
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("p", {
                              children: (0, s.we)(
                                "#EventEmail_Preparation_DescWarning",
                              ),
                            }),
                            (0, e.jsx)("ol", { children: this.state.warning }),
                          ],
                        }),
                    ],
                  }),
                });
            }
          }
        };
        ht([se.oI], _n.prototype, "OnLockEmail", 1), (_n = ht([R.PA], _n));
        const uo = 300;
        let Ra = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = { rtimeLastRefresh: 0, bRefreshing: !1 });
          }
          RefreshIfNeeded() {
            let a = Math.floor(Date.now() / 1e3);
            const { editModel: t } = this.props;
            !this.state.err_msg &&
              t.GetEventModel().jsondata.email_setting.force_feature_id &&
              this.state.rtimeLastRefresh + uo < a &&
              !this.state.bRefreshing &&
              this.setState({ bRefreshing: !0 }, this.RefreshStats);
          }
          async RefreshStats() {
            const { editModel: a } = this.props;
            let t =
                D.TS.COMMUNITY_BASE_URL + "eventemail/ajaxgetpartneremailstats",
              n = {
                clanid: a.GetClanSteamID().GetAccountID(),
                gidevent: a.GetGID(),
                sessionid: (0, D.KC)(),
              };
            try {
              let i = await le().get(t, { params: n, withCredentials: !0 });
              this.setState({ stats: i.data.result, bRefreshing: !1 });
            } catch (i) {
              this.setState({
                bRefreshing: !1,
                err_msg: (0, Be.H)(i).strErrorMsg,
              });
            }
          }
          componentDidMount() {
            this.RefreshIfNeeded(),
              (this.autoRefreshInterval = window.setInterval(
                this.RefreshIfNeeded,
                uo * 1e3,
              ));
          }
          componentDidUpdate(a) {
            this.props.editModel.GetGID() != a.editModel.GetGID() &&
              this.setState({ rtimeLastRefresh: 0 }, this.RefreshIfNeeded);
          }
          componentWillUnmount() {
            this.autoRefreshInterval &&
              (window.clearInterval(this.autoRefreshInterval),
              (this.autoRefreshInterval = void 0));
          }
          render() {
            var a, t, n, i, o, l, r, d, _, c;
            const { editModel: g } = this.props;
            if (!g.GetEventModel().jsondata.email_setting.force_feature_id)
              return (0, e.jsx)("div", {});
            if (this.state.err_msg)
              return (0, e.jsxs)("div", {
                className: ve.EventEditorInputPaneContents,
                children: [
                  (0, e.jsx)("div", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Stats_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, b.A)(
                      f().FlexColumnContainer,
                      f().EventDefaultRowContainer,
                    ),
                    children: (0, e.jsx)("span", {
                      className: xu.ErrorMessaage,
                      children: this.state.err_msg,
                    }),
                  }),
                ],
              });
            if (!this.state.stats)
              return (0, e.jsxs)("div", {
                className: ve.EventEditorInputPaneContents,
                children: [
                  (0, e.jsx)("div", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEmail_Stats_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, b.A)(
                      f().FlexColumnContainer,
                      f().EventDefaultRowContainer,
                    ),
                    children: (0, e.jsx)(z.t, {}),
                  }),
                ],
              });
            const h = this.state.stats;
            return (0, e.jsxs)("div", {
              className: ve.EventEditorInputPaneContents,
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitle,
                  children: [
                    (0, s.we)("#EventEmail_Stats_Title"),
                    this.state.bRefreshing &&
                      (0, e.jsx)(z.t, { size: "small" }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, b.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextSubTitle,
                      children: (0, s.we)(
                        "#EventEmail_Stats_State",
                        (0, s.we)("#EventEmail_Stats_State_" + h.state),
                      ),
                    }),
                    h.state == "sending" &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_Started",
                          (0, s.TW)(h.rtime_start_firing),
                        ),
                      }),
                    (h.state == "complete" || h.state == "aborted") &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_Completed",
                          (0, s.TW)(h.rtime_start_firing),
                          (0, s.TW)(h.rtime_stop_firing),
                        ),
                      }),
                    h.state == "window_closed" &&
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#EventEmail_Stats_WindowClosed",
                          (0, s.TW)(h.rtime_stop_firing),
                        ),
                      }),
                    !!h.rtime_last_update_time &&
                      (0, e.jsxs)(E.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Examined",
                              (t =
                                (a = h.accounts_examined) == null
                                  ? void 0
                                  : a.toLocaleString((0, Wt.J)())) != null
                                ? t
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Duplicates",
                              (i =
                                (n = h.accounts_duplicates) == null
                                  ? void 0
                                  : n.toLocaleString((0, Wt.J)())) != null
                                ? i
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Emailed",
                              (l =
                                (o = h.accounts_emailed) == null
                                  ? void 0
                                  : o.toLocaleString((0, Wt.J)())) != null
                                ? l
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Skipped",
                              (d =
                                (r = h.accounts_not_emailed) == null
                                  ? void 0
                                  : r.toLocaleString((0, Wt.J)())) != null
                                ? d
                                : 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#EventEmail_Stats_Failed",
                              (c =
                                (_ = h.accounts_email_failed) == null
                                  ? void 0
                                  : _.toLocaleString((0, Wt.J)())) != null
                                ? c
                                : 0,
                            ),
                          }),
                        ],
                      }),
                    (0, e.jsx)("div", {
                      children: (0, s.we)(
                        "#EventEmail_Stats_Last_Refresh_Time",
                        (0, s.Hq)(this.state.rtimeLastRefresh),
                      ),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        ht([se.oI], Ra.prototype, "RefreshIfNeeded", 1),
          ht([se.oI], Ra.prototype, "RefreshStats", 1),
          (Ra = ht([R.PA], Ra));
        var yu = u(38284),
          Tu = u(18735),
          Iu = u(58360),
          Au = u(4969),
          Gu = u.n(Au);
        function Lu(a) {
          const t = (0, Ta.I)({
            queryKey: ["demoappdetailsforbase", a],
            queryFn: async () => {
              var n;
              const i = `${wt.TS.COMMUNITY_BASE_URL}demos/ajaxgetappdemoinfo`,
                o = { appid: a, origin: self.origin },
                l = await le().get(i, { params: o });
              return (
                ((n = l == null ? void 0 : l.data) == null
                  ? void 0
                  : n.demos) || []
              );
            },
            enabled: !!a,
          });
          return t != null && t.isLoading ? null : t.data;
        }
        function I_(a, t) {
          return useMutation({
            mutationFn: async () => {
              var n;
              const i = `${Config.COMMUNITY_BASE_URL}demos/ajaxensuredemohasogg`,
                o = new FormData();
              o.append("sessionid", GetSessionID()),
                o.append("appid", "" + a),
                o.append("demo_appid", "" + t);
              const l = await axios.post(i, o, { withCredentials: !0 });
              return (
                ((n = l == null ? void 0 : l.data) == null
                  ? void 0
                  : n.ogg_clan_account_id) || null
              );
            },
          });
        }
        var Bu = Object.defineProperty,
          Nu = Object.getOwnPropertyDescriptor,
          ho = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Nu(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && Bu(t, n, o), o;
          };
        function Mu(a) {
          const t = lo(a.appid);
          return a.appid ? t : D.UF.IS_ALLOWED_SC;
        }
        const Ou = (0, R.PA)((a) => {
          const { editModel: t } = a;
          let n = (0, aa.JS)(t.GetEventType());
          const i = ft.KN.Get().GetPartnerEventPermissions(t.GetClanSteamID()),
            o = t.BHasTag("curator");
          return (0, e.jsxs)("div", {
            className: f().Columns,
            children: [
              (0, e.jsxs)("div", {
                className: (0, b.A)(f().LeftCol),
                children: [
                  (0, e.jsx)(ku, { editModel: t }),
                  (0, e.jsx)(Iu.u, { bHideEndRange: !n, editModel: t }),
                  !!t.BHasTag("steam_award_nomination_request") &&
                    (0, e.jsx)(yu.ks, {}),
                  (0, e.jsx)(pn, { editModel: t }),
                  (!o || i.valve_admin) && (0, e.jsx)(Pu, { editModel: t }),
                  (0, e.jsx)("div", { className: f().ClearThings }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, b.A)(ye().OptionsNotes, f().RightCol),
                children: [
                  (0, e.jsx)("span", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_Time_Zone"),
                  }),
                  (0, s.we)("#EventEditor_Time_ttip"),
                ],
              }),
            ],
          });
        });
        function Pu(a) {
          const { editModel: t } = a;
          let n = E.useRef(void 0);
          const i = E.useCallback(
              (x) => {
                t.GetAppID() == ae.DU && t.BHasTag("hide_library_overview") && x
                  ? (0, U.pg)(
                      (0, e.jsx)(F.o0, {
                        strTitle: (0, s.we)("#EventEditor_GenericAreYouSure"),
                        strDescription:
                          "Showing on the library home page will pin this event into the first spot in the 'Whats New' section for ALL Steam Library. Are you sure this is an Steam update that applies to all Steam Library users? Be thoughtful.",
                        onOK: () => t.ClearTags(["hide_library_overview"]),
                        onCancel: () => {
                          var j;
                          return (j = n == null ? void 0 : n.current) == null
                            ? void 0
                            : j.setState({ checked: !n.current.checked });
                        },
                      }),
                      window,
                    )
                  : t.SetTag("hide_library_overview", !x);
              },
              [t],
            ),
            o = (x) => {
              t.SetLibrarySpotlight(x);
            };
          let [l, r, d, _, c, g, h, v, m] = (0, O.q3)(() => [
            t.BIsAllowedOnLibraryOverview(),
            t.BIsAllowedOnLibraryDetail(),
            t.BIsAllowedOnStore(),
            t.GetCategoryAsString(),
            !t.GetEventModel().BHasTag("hide_library_detail"),
            !t.GetEventModel().BHasTag("hide_library_overview"),
            t.GetEventModel().BShowLibrarySpotlight(),
            !t.GetEventModel().BHasTag("hide_store"),
            t.GetEventModel().BHasTag("workshop"),
          ]);
          return (0, e.jsx)("div", {
            className: ye().EventEditorInputPaneContents,
            children: (0, e.jsxs)("div", {
              className: f().LeftCol,
              children: [
                (0, e.jsx)("div", {
                  className: f().EventEditorTextTitle,
                  children: (0, s.we)("#EventEditor_Options_Title"),
                }),
                (0, e.jsxs)("div", {
                  className: (0, b.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextSubTitle,
                      children: (0, s.PP)(
                        "#EventEditor_Options_Show_Warning",
                        (0, e.jsx)("a", {
                          href: "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B",
                          target: D.TS.IN_CLIENT ? void 0 : "_blank",
                          children: (0, s.we)(
                            "#EventEditor_Options_Show_WarningLink",
                          ),
                        }),
                      ),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (x) => t.SetTag("hide_store", !x),
                      label: (0, s.we)("#EventEditor_Options_Show_Store"),
                      checked: d ? v : !1,
                      description: d
                        ? void 0
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", _),
                      disabled: !d,
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: i,
                      label: (0, s.we)(
                        "#EventEditor_Options_Show_Library_Overview",
                      ),
                      checked: l ? g : !1,
                      description: l
                        ? (0, s.we)(
                            "#EventEditor_Options_Show_Library_Overview_Desc",
                          )
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", _),
                      disabled: !l,
                      ref: n,
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (x) => t.SetTag("hide_library_detail", !x),
                      label: (0, s.we)(
                        "#EventEditor_Options_Show_Library_Detail",
                      ),
                      checked: r ? c : !1,
                      description: r
                        ? void 0
                        : (0, s.we)("#EventEditor_Options_WontDisplayHere", _),
                      disabled: !r,
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextTitle,
                      children: (0, s.we)("#EventEditor_Options_Special_Desc"),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: o,
                      label: (0, s.we)(
                        "#EventEditor_Options_Library_Spotlight_Label",
                      ),
                      checked: h,
                      description: (0, s.we)(
                        "#EventEditor_Options_Library_Spotlight_Desc",
                      ),
                      disabled: !c || !r,
                    }),
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextTitle,
                      children: (0, s.we)("#EventEditor_Options_Desc"),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: (x) => t.SetTag("workshop", x),
                      label: (0, s.we)("#EventEditor_Options_Workshop_Label"),
                      checked: m,
                      description: (0, s.we)(
                        "#EventEditor_Options_Workshop_Desc",
                      ),
                    }),
                    !1,
                    (0, e.jsx)(Vu, { editModel: t }),
                    (0, e.jsx)(Hu, { editModel: t }),
                  ],
                }),
                (0, e.jsx)(Ru, { editModel: t }),
              ],
            }),
          });
        }
        function A_(a) {
          const { editModel: t } = a,
            n = Lu(t.GetAppID()),
            [i, o] = (0, O.q3)(() => [
              t.GetEventModel().BHasTag("show_library_demo_detail"),
              t.GetGID(),
            ]);
          if (n == null)
            return (0, e.jsx)(z.t, {
              string: (0, s.we)("#EventEditor_Options_LoadingDemoInfo"),
              position: "center",
              size: "small",
            });
          const l = n.filter((c) => c.is_released_somewhere && c.appid > 0),
            r = l.length > 0;
          let d = !1,
            _ = null;
          return (
            r
              ? o ||
                ((d = !0),
                (_ = (0, s.we)("#EventEditor_Options_SaveFirstToRepostDemo")))
              : ((d = !0),
                (_ = (0, s.we)("#EventEditor_Options_VisibleDemoTooltip"))),
            (0, e.jsx)(p.RF, {
              onChange: (c) => {
                t.SetDemoAppIDForRepost(l[0].appid),
                  t.SetTag("repost_source_possible", !0),
                  c
                    ? (t.SetTag("show_library_demo_detail", !0),
                      t.SetTag("clear_library_demo_detail", !1))
                    : (t.SetTag("show_library_demo_detail", !1),
                      t.BHasOriginalTag("show_library_demo_detail") &&
                        t.SetTag("clear_library_demo_detail", !0));
              },
              tooltip: d
                ? _
                : (0, s.we)("#EventEditor_Options_DemoRepostTooltop"),
              label: (0, s.we)("#EventEditor_Options_Demo_Library_Detail"),
              checked: i,
              description: (0, s.we)("#EventEditor_Options_Demo_Library_Desc"),
              disabled: d,
            })
          );
        }
        const Ru = (0, R.PA)((a) => {
          const { editModel: t } = a,
            n = ft.KN.Get().GetPartnerEventPermissions(t.GetClanSteamID());
          let i = E.useRef(void 0);
          const o = t.BHasSaleEnabled(),
            l = t.GetEventType(),
            [r] = (0, O.q3)(() => [
              t.GetEventModel().jsondata.country_restriction,
            ]);
          if (!n.valve_admin) return null;
          const d = (c) => {
              t.BHasSaleEnabled() && c && !t.BHasTag("mod_hide_store")
                ? (0, U.pg)(
                    (0, e.jsx)(F.o0, {
                      strTitle: (0, s.we)("#EventEditor_Options_Hide_Store"),
                      strDescription:
                        "There is an active sale on this event. Setting this flag will HIDE the sale page completely. Are you sure?",
                      onOK: () => t.AddTag("mod_hide_store"),
                      onCancel: () => i.current.SetChecked(!1, !1),
                    }),
                    window,
                  )
                : t.SetTag("mod_hide_store", c);
            },
            _ =
              t.GetAppID() == ae.qF
                ? "Deck"
                : t.GetAppID() == ae.IT
                  ? "Frame"
                  : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#EventEditor_Options_Moderation"),
              }),
              (0, e.jsxs)("div", {
                className: (0, b.A)(
                  f().FlexColumnContainer,
                  f().EventDefaultRowContainer,
                  f().ValveOnlyBackground,
                ),
                children: [
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("mod_hide_library_overview", c),
                    label: (0, s.we)(
                      "#EventEditor_Options_Hide_Library_Overview",
                    ),
                    checked: t
                      .GetEventModel()
                      .BHasTag("mod_hide_library_overview"),
                  }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("mod_hide_library_detail", c),
                    label: (0, s.we)(
                      "#EventEditor_Options_Hide_Library_Detail",
                    ),
                    checked: t
                      .GetEventModel()
                      .BHasTag("mod_hide_library_detail"),
                  }),
                  (0, e.jsx)(p.RF, {
                    onChange: d,
                    ref: i,
                    label: (0, s.we)("#EventEditor_Options_Hide_Store"),
                    checked: t.GetEventModel().BHasTag("mod_hide_store"),
                  }),
                  !!D.UF.IS_OGG &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetSteamStoreSpotlight(c),
                      label: "(VO) Allow Spotlight on Steam Store Product Page",
                      checked: t.BAllowedSteamStoreSpotlight(),
                      description:
                        "Allows the partner to upload a store spotlight artwork to be shown on the product page for upto a week from the event start.",
                    }),
                  !!(!D.UF.IS_OGG && o) &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsx)(p.RF, {
                        onChange: (c) =>
                          t.SetTag("hide_from_events_and_discount", c),
                        label: "(VO) Hide Sale From Events and Discount Page",
                        checked: t
                          .GetEventModel()
                          .BHasTag("hide_from_events_and_discount"),
                        description:
                          "By default we show sale pages on the events and discount store hub. Turning this on, we will not show this sale page there.",
                      }),
                    }),
                  !!qi(t.GetEventModel()) &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetTag(cn, c),
                      label:
                        "(VO) Let Partners Upload Store Capsules for this Sale",
                      checked: t.GetEventModel().BHasTag(cn),
                      description:
                        "Opens the store capsule uploader on the artwork tab to everyone who can edit this event. We can always reach it ourselves without this; turning it off hides it from them again but keeps whatever they uploaded.",
                    }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetLibraryHomeSpotlight(c),
                    label: "(VO) Force Spotlight on Library Home",
                    checked: t.BHasLibaryHomeSpotlight(),
                    disabled: !t.BHasSpotlightArtwork(),
                    description:
                      "Shows the spotlight artwork in the 'Whats New' section at the top of the library home for all owners.",
                  }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("blog", c),
                    label: "(VO) Mark as Blog for Valve Game Teams",
                    checked: t.GetEventModel().BHasTag("blog"),
                    description:
                      "Add the 'blog' tag to this post. Allowing game team website to filter news posts intended for their blog.",
                  }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("adult_only_content", c),
                    label: "(VO) Event Contains Adult Only Content",
                    checked: t.GetEventModel().BHasTag("adult_only_content"),
                    description:
                      "Set this to on if the post contains adult only content so that it can be filtered accordingly.",
                  }),
                  t.GetAppID() == ae.DU &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("steam_blog", c),
                          label: "(VO) Steam Official Blog",
                          checked: t.GetEventModel().BHasTag("steam_blog"),
                          description:
                            "When checked this event will surface on https://store.steampowered.com/news/app/593110. Make sure to set this before you publish, or it will have no effect.",
                        }),
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("skip_megaphone", c),
                          label: "(VO) Skip Lighting Up Steam Client Megaphone",
                          checked: t.GetEventModel().BHasTag("skip_megaphone"),
                          description:
                            "By default small event (patch notes) do not light up the megaphone in the Steam client. Enabling this flag does the same for all other event type.",
                        }),
                      ],
                    }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("forced_featured", c),
                    label: "(VO) Force Feature this event in the NewsHub",
                    checked: t.GetEventModel().BHasTag("forced_featured"),
                    description:
                      "Add the 'forced_featured' tag to this post. This will prioritize the event appearing in algorithmic featured newshub section.",
                  }),
                  !!t.GetEventModel().BIsOGGEvent() &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetTag("seasonal_sale_featuring", c),
                      label: "(VO) Feature this event during the Seasonal Sale",
                      checked: t
                        .GetEventModel()
                        .BHasTag("seasonal_sale_featuring"),
                      description:
                        "Add the 'seasonal_sale_featuring' tag to this post. This will push the event to appear on the front page during a seasonal sale. This assume the content is specific to in-game items on sale for the underlying game",
                    }),
                  t.GetClanAccountID() == kt.bv &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetTag("contenthub", c),
                      checked: t.GetEventModel().BHasTag("contenthub"),
                      label: "(VO) Tag as Content Hub",
                      description:
                        "Add the 'contenthub' tag to this event. Removes certain publishing restrictions for this event.",
                    }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("patchnotes", c),
                    checked: t.GetEventModel().BHasTag("patchnotes"),
                    label: "(VO) Tag as Patch Notes",
                    description:
                      "Add the 'patchnotes' tag to this event. Allows the event to show in certain contexts normally only showing Small Update/Patch Notes events such as Steam Client patch notes.",
                  }),
                  !!D.UF.IS_OGG &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => {
                        c &&
                          (t.setEventType(L.zeJ), t.SetSteamStoreSpotlight(c)),
                          t.SetTag("vo_marketing_message", c);
                      },
                      label: "(VO) Marketing Message Major Update",
                      disabled:
                        !t.GetEventModel().BHasTag("vo_marketing_message") &&
                        l != L.zeJ,
                      checked: t
                        .GetEventModel()
                        .BHasTag("vo_marketing_message"),
                      description:
                        "This will surface on the event editor the rules and requirements behind being featured in a marketing message to better align them with customer information." +
                        (l != L.zeJ
                          ? " This can only be enable for Major Update Type."
                          : ""),
                    }),
                  (0, e.jsx)(p.RF, {
                    onChange: (c) => t.SetTag("vo_prevent_delete", c),
                    label: "(VO) Prevent this event from being deleted.",
                    checked: t.GetEventModel().BHasTag("vo_prevent_delete"),
                    description:
                      "To prevent a partner or Valve from deleting this event because something is featuring it or depends on it.",
                  }),
                  (t.GetClanAccountID() == kt.GU ||
                    ((D.TS.EUNIVERSE == L.Rv || D.TS.EUNIVERSE == L.CII) &&
                      t.GetClanAccountID() == kt.mW)) &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetTag("steam_top_releases", c),
                      label: "(VO) Is Monthly Top Sellers?",
                      checked: t.GetEventModel().BHasTag("steam_top_releases"),
                      description:
                        "Add the 'steam_top_releases' tag to this post. This allows the Steam Top Release Charts to pull the official top releases events into those pages.",
                    }),
                  (t.GetClanAccountID() == kt.GU ||
                    ((D.TS.EUNIVERSE == L.Rv || D.TS.EUNIVERSE == L.CII) &&
                      t.GetClanAccountID() == kt.mW)) &&
                    (0, e.jsx)(p.RF, {
                      onChange: (c) => t.SetTag("steam_best_of_year", c),
                      label: "(VO) Is Best of Year?",
                      checked: t.GetEventModel().BHasTag("steam_best_of_year"),
                      description:
                        "Add the 'steam_best_of_year' tag to this post. This allows the Steam Best of Year to pull the official best of year events into those pages.",
                    }),
                  !!_ &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("p", {
                          children:
                            "Channels where we want to surface these events to. See for details: https://confluence.valve.org/pages/viewpage.action?pageId=214073964",
                        }),
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("stablechannel", c),
                          label: `(VO) Steam ${_} Stable Channel`,
                          checked: t.GetEventModel().BHasTag("stablechannel"),
                          description: `Surface this to users who are subscribed to Steam ${_} Stable Build. Only include Stable Steam ${_} Client or Stable SteamOS notes.`,
                        }),
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("betachannel", c),
                          label: `(VO) Steam ${_} Beta Channel`,
                          checked: t.GetEventModel().BHasTag("betachannel"),
                          description: `Surface this to users who are subscribed to Steam ${_} Beta Build. Only include Beta Steam ${_} Client or Stable SteamOS notes.`,
                        }),
                        (0, e.jsx)(p.RF, {
                          onChange: (c) => t.SetTag("previewchannel", c),
                          label: `(VO) Steam ${_} Preview Channel`,
                          checked: t.GetEventModel().BHasTag("previewchannel"),
                          description: `Surface this to users who are subscribed to Steam ${_} Preview Build. Only include Beta Steam ${_} Client or Beta SteamOS notes.`,
                        }),
                      ],
                    }),
                  (0, e.jsx)(p.pd, {
                    type: "text",
                    label: (0, s.we)("#EventEditor_Options_RegionRestrictions"),
                    placeholder: (0, s.we)(
                      "#EventEditor_Options_RegionRestrictions_placeholder",
                    ),
                    onChange: (c) => {
                      (t.GetEventModel().jsondata.country_restriction =
                        c.currentTarget.value),
                        t.SetDirty(C.IQ.description);
                    },
                    value: r,
                  }),
                ],
              }),
            ],
          });
        });
        let pn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSending: !1 }),
              (this.m_cancelSignal = le().CancelToken.source());
          }
          TestFireEvent() {
            const { editModel: a } = this.props;
            this.setState({ bSending: !0 }, () => {
              M.mh.FireTestEventNotifiation(
                a.GetClanSteamID(),
                a.GetGID(),
                this.m_cancelSignal,
              ),
                this.setState({ bSending: !1 });
            });
          }
          render() {
            const { editModel: a } = this.props;
            let t = a.GetEventType(),
              n = (0, aa.rQ)(t);
            const i =
              a.GetEventModel().BIsVisibleEvent() &&
              a.GetEventModel().GetStartTimeAndDateUnixSeconds() <
                Math.floor(Date.now() / 1e3);
            if (!n || i) return null;
            let o = a.GetVisibilityPublishingSetup(),
              r =
                a.GetStartTimeEditChoice() == C.z8.k_ENow ||
                o == C.Fl.event_start;
            return (0, e.jsx)("div", {
              className: (0, b.A)(ye().EventEditorInputPaneContents),
              children: (0, e.jsxs)("div", {
                className: (0, b.A)(f().LeftCol, Gu().ThemedCtn),
                children: [
                  (0, e.jsx)("div", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventEditor_Reminder_title"),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, b.A)(
                      f().FlexColumnContainer,
                      f().EventDefaultRowContainer,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextSubTitle,
                        children: (0, s.we)("#EventEditor_Reminder_desc"),
                      }),
                      (0, e.jsx)("div", {
                        className: f().EventEditorTextSubTitle,
                        children: (0, s.PP)(
                          "#EventEditor_Reminder_desc2",
                          (0, e.jsx)("a", {
                            href: D.TS.STORE_BASE_URL + "mobile?show=steamapp",
                            target: D.TS.IN_CLIENT ? void 0 : "_blank",
                            children: (0, s.we)(
                              "#EventEditor_Reminder_mobileapp",
                            ),
                          }),
                        ),
                      }),
                      this.state.bSending &&
                        (0, e.jsx)(z.t, { size: "small", position: "center" }),
                      (0, e.jsx)("button", {
                        className: f().Button,
                        onClick: this.TestFireEvent,
                        disabled: r,
                        children: (0, s.we)("#EventEditor_Reminder_testfire"),
                      }),
                      r &&
                        (0, e.jsx)("span", {
                          children: (0, s.we)("#EventEditor_Reminder_disable"),
                        }),
                    ],
                  }),
                ],
              }),
            });
          }
        };
        ho([se.oI], pn.prototype, "TestFireEvent", 1), (pn = ho([R.PA], pn));
        const ku = (0, R.PA)((a) => {
          const { editModel: t } = a;
          if (!t.BIsEventForOGGWithoutVisibleStorePage()) return null;
          const i = (o) => t.SetOptedInForOGGWithoutVisibleStorePage(o);
          return (0, e.jsx)("div", {
            className: ye().EventEditorInputPaneContents,
            children: (0, e.jsxs)("div", {
              className: f().LeftCol,
              children: [
                (0, e.jsxs)("div", {
                  className: f().EventEditorTextTitle,
                  children: [
                    (0, s.we)("#EventEditor_Options_VisibilityOptIn_Title"),
                    (0, e.jsx)("span", {
                      className: ye().RequiredFieldLabel,
                      children: (0, s.we)("#EventEditor_Required"),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: (0, b.A)(
                    f().FlexColumnContainer,
                    f().EventDefaultRowContainer,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: f().EventEditorTextSubTitle,
                      children: (0, s.we)(
                        "#EventEditor_Options_VisibilityOptIn_Description",
                        t.GetAppID(),
                      ),
                    }),
                    (0, e.jsx)(p.RF, {
                      onChange: i,
                      label: (0, s.we)(
                        "#EventEditor_Options_VisibilityOptIn_Label",
                      ),
                      checked: t.BOptedInForOGGWithoutVisibleStorePage(),
                    }),
                  ],
                }),
              ],
            }),
          });
        });
        function mo(a) {
          const t =
              a.BInRealmChina() &&
              s.A0.IsELanguageValidInRealm(
                a.GetCurEditLanguage(),
                on.TU.k_ESteamRealmChina,
              ),
            n =
              a.BInRealmGlobal() &&
              s.A0.IsELanguageValidInRealm(
                a.GetCurEditLanguage(),
                on.TU.k_ESteamRealmGlobal,
              );
          !t && !n && a.SetCurEditLanguage(a.BInRealmChina() ? L.ZLm : L.Bhc);
        }
        const Fu = (0, R.PA)((a) => {
            const { editModel: t } = a,
              n = (i) => {
                i
                  ? (t.AddTag("enable_steam_china"),
                    t.AddTag("disable_steam_global"))
                  : t.ClearTags(["enable_steam_china", "disable_steam_global"]),
                  mo(t);
              };
            return (0, e.jsx)(p.RF, {
              onChange: n,
              label: (0, s.we)("#EventEditor_Options_ShowInSteamChina"),
              description: (0, s.we)(
                "#EventEditor_Options_ShowInSteamChina_Desc",
              ),
              checked: t.BInRealmChina(),
            });
          }),
          Uu = (0, R.PA)((a) => {
            const { editModel: t } = a;
            if (t.BInRealmGlobal() && !t.BInRealmChina()) return null;
            const n = (i) => {
              i
                ? t.AddTag("disable_steam_global")
                : t.ClearTags(["disable_steam_global"]),
                mo(t);
            };
            return (0, e.jsx)(p.RF, {
              onChange: n,
              label: (0, s.we)("#EventEditor_Options_ShowInSteamGlobal"),
              description: (0, s.we)(
                "#EventEditor_Options_ShowInSteamGlobal_Desc",
              ),
              checked: !t.BInRealmGlobal(),
            });
          }),
          Hu = (0, R.PA)((a) => {
            const { editModel: t } = a,
              n = Mu(t.GetEventModel());
            return (0, e.jsxs)("div", {
              children: [
                n && (0, e.jsx)(Fu, { editModel: t }),
                (0, e.jsx)(Uu, { editModel: t }),
              ],
            });
          }),
          zu = (a) => {
            const [t] = (0, pe.t7)(a, pt.A.k_DataRequest_CommonOnly);
            return !!(t && t.HasContentDescriptorID(Tu.u7));
          },
          Vu = (0, R.PA)((a) => {
            const { editModel: t } = a;
            return zu(t.GetAppID())
              ? (0, e.jsx)(p.RF, {
                  onChange: (i) => t.SetTag("adult_only_content", i),
                  label: (0, s.we)(
                    "#EventEditor_Options_Has_Adult_Only_Content",
                  ),
                  checked: t.GetEventModel().BHasTag("adult_only_content"),
                  description: (0, s.we)(
                    "#EventEditor_Options_Has_Adult_Only_Content_Desc",
                  ),
                })
              : null;
          });
        var Wu = u(54601),
          Qu = u(6542),
          ka = u.n(Qu);
        function Yu(a) {
          const { editModel: t } = a,
            n = (0, O.q3)(() => ({
              bHidden: t.BHidden(),
              bUnlisted: t.BUnlisted(),
              bPublished: t.BPublished(),
            }));
          return (!n.bHidden || n.bUnlisted) && n.bPublished
            ? null
            : (0, e.jsx)(Ju, { ...a });
        }
        const Ju = (0, R.PA)((a) => {
          const { editModel: t, bTakePublishAction: n } = a,
            i = E.useRef(void 0),
            [o, l] = E.useState(!1),
            r = t.GetClanSteamID(),
            d = t.GetGID(),
            {
              bLoading: _,
              bPublishRequiresValveApproval: c,
              nAccountApproved: g,
            } = (0, we.g7)(r.GetAccountID(), d);
          E.useEffect(() => {
            n && i != null && i.current && i.current.click();
          }, [n]);
          const h = t.GetEventType() == L.ajI,
            v = r.GetAccountID() == (0, Ca.H)() || h,
            m = !v && (0, ge.m)(r, !0),
            x = (oe, De) => {
              (0, U.pg)(
                (0, e.jsx)(ja.i, {
                  editModel: t,
                  bUnlistedMode: De,
                  OnPublishSuccess: () => l(!0),
                  partnerEventEditorStore: M.mh,
                }),
                (0, V.uX)(oe),
              );
            },
            j = (oe) => {
              t.SetVisibilityPublishingSetup(C.Fl.immediate),
                (0, U.pg)(
                  (0, e.jsx)(ja.i, {
                    editModel: t,
                    OnPublishSuccess: () => l(!0),
                    partnerEventEditorStore: M.mh,
                    closeModal: () => {
                      t.ResetSetVisibilityStartTime();
                    },
                  }),
                  (0, V.uX)(oe),
                );
            };
          if (o)
            return (0, e.jsx)(he.OG, {
              eventModel: t.GetEventModel(),
              route: he.PH.k_eView,
            });
          const S = t.BHidden(),
            y = t.BPublished(),
            N = t.BUnlisted();
          if ((!S || N) && y) return null;
          if (_)
            return (0, e.jsx)(z.t, {
              string: (0, s.we)("#Loading"),
              size: "small",
            });
          const A = t.BAllowedToPublishStagedEvents(),
            te = c && !g;
          return (0, e.jsxs)("div", {
            className: (0, b.A)(f().FlexColumnContainer, ka().PublishOption),
            children: [
              (0, e.jsx)("div", {
                className: f().EventEditorTextTitle,
                children: (0, s.we)("#Button_Publish"),
              }),
              (0, e.jsxs)("div", {
                className: (0, b.A)(ka().PublishButtonCtn),
                children: [
                  te &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, s.we)(
                            "#EventEditor_Publish_PublicBlock_Title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, s.we)(
                            "#EventEditor_Publish_PublicBlock_Desc",
                          ),
                        }),
                      ],
                    }),
                  !y &&
                    !te &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !v &&
                          (0, e.jsx)(Yn, {
                            label: (0, s.we)("#Button_Publish"),
                            description: (0, s.we)("#EventEditor_Publish_Desc"),
                            refActionButton: i,
                            onClick: (oe) => x(oe, !1),
                          }),
                        (v || m) &&
                          (0, e.jsx)(B.e7, {
                            condition: m,
                            wrap: (oe) =>
                              (0, e.jsx)(ge.E, {
                                clanSteamID: r,
                                requireAdmin: !0,
                                children: oe,
                              }),
                            children: (0, e.jsx)(Yn, {
                              label: h
                                ? (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_CreatorHome",
                                  )
                                : (0, s.we)("#EventEditor_Publish_Unlisted"),
                              description: h
                                ? (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_CreatorHome_Desc",
                                  )
                                : (0, s.we)(
                                    "#EventEditor_Publish_Unlisted_Desc",
                                  ),
                              refActionButton: v ? i : void 0,
                              onClick: (oe) => x(oe, !0),
                            }),
                          }),
                      ],
                    }),
                  !!(y && S && !N && !te) &&
                    (0, e.jsx)(B.e7, {
                      condition: !A,
                      wrap: (oe) =>
                        (0, e.jsx)(je.he, {
                          toolTipContent: (0, s.we)(
                            "#EventEditor_Publish_Disable_ttip",
                          ),
                          children: oe,
                        }),
                      children: (0, e.jsx)(Yn, {
                        label: (0, s.we)("#EventEditor_Publish_VisibleNow"),
                        refActionButton: i,
                        disabled: !A,
                        onClick: j,
                      }),
                    }),
                ],
              }),
            ],
          });
        });
        function Yn(a) {
          const {
            label: t,
            description: n,
            tooltip: i,
            disabled: o,
            refActionButton: l,
            onClick: r,
          } = a;
          return (0, e.jsxs)("div", {
            children: [
              n &&
                (0, e.jsx)("div", { className: ka().Description, children: n }),
              (0, e.jsxs)(p.$n, {
                onClick: r,
                className: (0, b.A)(
                  ka().EventPublishButton,
                  "DialogButton Primary",
                  ka().PublishButton,
                ),
                ref: l,
                disabled: o,
                children: [t, i && (0, e.jsx)(Z.o, { tooltip: i })],
              }),
            ],
          });
        }
        var de = u(82267),
          _o = u.n(de),
          Fa = u(83963);
        class Mt {
          constructor() {
            (this.m_mapVisibilityUpdateRounds = new Map()),
              (this.m_mapVisibilityUpdateLoadPromises = new Map()),
              (this.m_mapVisibilityUpdateChangeCallback = new Map()),
              (this.m_mapVisibilityLaunchRounds = new Map()),
              (this.m_mapVisibilityLaunchLoadPromises = new Map()),
              (this.m_mapVisibilityLaunchChangeCallback = new Map());
          }
          GetVisibilityRounds(t, n) {
            return t == Fa.tw.I8
              ? this.m_mapVisibilityUpdateRounds.get(n)
              : this.m_mapVisibilityLaunchRounds.get(n);
          }
          GetVisibilityRoundsChangeCallback(t, n) {
            const i =
              t == Fa.tw.I8
                ? this.m_mapVisibilityUpdateChangeCallback
                : this.m_mapVisibilityLaunchChangeCallback;
            return i.has(n) || i.set(n, new Qa.lu()), i.get(n);
          }
          async LoadVisibilityRounds(t, n) {
            const i =
              t == Fa.tw.I8
                ? this.m_mapVisibilityUpdateLoadPromises
                : this.m_mapVisibilityLaunchLoadPromises;
            return (
              i.has(n) || i.set(n, this.InternalLoadVisibilityRounds(t, n)),
              i.get(n)
            );
          }
          async InternalLoadVisibilityRounds(t, n) {
            var i;
            let o = null;
            try {
              const l = `${D.TS.COMMUNITY_BASE_URL}ogg/${n}/ajaxgetappvisibilityrounds`,
                r = { type: t },
                d = await le().get(l, { params: r, withCredentials: !0 });
              if (
                (d == null ? void 0 : d.status) == 200 &&
                ((i = d == null ? void 0 : d.data) == null
                  ? void 0
                  : i.success) == Ze.R
              ) {
                const _ =
                    t == Fa.tw.I8
                      ? this.m_mapVisibilityUpdateRounds
                      : this.m_mapVisibilityLaunchRounds,
                  c = d.data.data || [];
                return (
                  _.set(n, c),
                  this.GetVisibilityRoundsChangeCallback(t, n).Dispatch(c),
                  c
                );
              }
              o = (0, Be.H)(d);
            } catch (l) {
              o = (0, Be.H)(l);
            }
            return (
              console.error(
                "CVisibilityRoundsStore.InternalLoadVisibilityRounds failed: " +
                  (o == null ? void 0 : o.strErrorMsg),
                o,
              ),
              null
            );
          }
          static Get() {
            return (
              Mt.s_Singleton ||
                ((Mt.s_Singleton = new Mt()), Mt.s_Singleton.Init()),
              Mt.s_Singleton
            );
          }
          Init() {}
        }
        function Ku(a, t) {
          const [n, i] = (0, E.useState)(Mt.Get().GetVisibilityRounds(a, t));
          return (
            (0, E.useEffect)(() => {
              (!n ||
                n.length == 0 ||
                n[0].appid != t ||
                n[0].feature_type != a) &&
                Mt.Get()
                  .LoadVisibilityRounds(a, t)
                  .then((o) => i(o));
            }, [t, n, a]),
            (0, se.hL)(Mt.Get().GetVisibilityRoundsChangeCallback(a, t), i),
            n
          );
        }
        var Jn = u(69168),
          qu = u(11823);
        const Zu = 100;
        function Xu(a) {
          var t;
          const { editModel: n } = a,
            [i, o, l] = (0, O.q3)(() => [
              n.GetEventState(),
              n.GetClanSteamID(),
              n.GetEventModel().jsondata.clone_from_event_gid,
            ]),
            r = (0, Gn.m)("EventReplacePublishingControls"),
            { rgClanEventData: d } = (0, W.SG)(o, Zu, r);
          return !l ||
            !((t = d == null ? void 0 : d.pages) != null && t.length) ||
            i != ae.zv.k_EEventStateUnpublished
            ? null
            : (0, e.jsxs)("div", {
                className: (0, b.A)(
                  f().FlexColumnContainer,
                  _o().PublishOption,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: f().EventEditorTextTitle,
                    children: (0, s.we)("#EventPublishing_Replace_To"),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, b.A)(f().RightColumnContainer),
                    children: [
                      (0, s.we)("#EventPublishing_Replace_To_Desc"),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(eh, { editModel: n }),
                      (0, e.jsx)($u, {
                        editModel: n,
                        rgEventSummaries: d.pages[0],
                      }),
                    ],
                  }),
                ],
              });
        }
        function $u(a) {
          const { editModel: t, rgEventSummaries: n } = a,
            [i, o] = (0, E.useState)(null),
            [l, r, d] = (0, se.uD)(),
            _ = (0, E.useMemo)(
              () =>
                n.map((c) => ({
                  value: c.gid,
                  label:
                    c.event_name +
                    ": " +
                    (0, s.TW)(c.rtime32_start_time) +
                    " @ " +
                    (0, _t.pg)(c.rtime32_start_time),
                })),
              [n],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.we)("#EventPublishing_Replace_Pick"),
              }),
              (0, e.jsx)(ca.Ay, {
                isSearchable: !0,
                isMulti: !1,
                isClearable: !0,
                className: _o().ItemSelect,
                options: _,
                value: _.find((c) => c.value === i),
                onChange: (c) => {
                  c && o(c.value);
                },
              }),
              (0, e.jsx)(p.$n, {
                disabled: !i,
                onClick: r,
                children: (0, s.we)("#EventPublishing_Replace_Selected"),
              }),
              (0, e.jsx)(Jn.E, {
                active: l,
                children: (0, e.jsx)(po, {
                  editModel: t,
                  gidTargetClanEvent: i,
                  closeModal: d,
                }),
              }),
            ],
          });
        }
        function po(a) {
          const { closeModal: t, editModel: n, gidTargetClanEvent: i } = a,
            o = (0, Xa.E)(),
            [l, r] = (0, E.useState)(),
            [d] = (0, E.useState)(() => new M.Nc()),
            [_, c] = (0, E.useState)(null),
            [g, h] = (0, E.useState)(!1),
            [v, m] = (0, E.useState)(!1),
            [x, j, S] = (0, O.q3)(() => [
              _ == null ? void 0 : _.GetClanSteamID(),
              _ == null ? void 0 : _.GetEventModel().GetNameWithFallback(o),
              _ == null ? void 0 : _.GetEventModel().GetLastUpdateTime(),
            ]);
          (0, E.useEffect)(() => {
            i &&
              (_ == null ? void 0 : _.GetGID()) != i &&
              d.LoadEditorModel(n.GetClanSteamID(), i).then((te) => {
                c(te);
              }),
              i &&
                !l &&
                M.Nc.GetLastUpdateTimeForEvent(
                  n.GetClanSteamID(),
                  i,
                  null,
                  null,
                ).then(r);
          }, [n, i, _, d, l]);
          const [y, N] = (0, E.useState)(!1),
            A = (0, xt.vs)();
          return A.bLoading
            ? (0, e.jsx)(xt.Hh, {
                state: A,
                strDialogTitle: (0, s.we)("#EventPublishing_Replace_To"),
                closeModal: t,
              })
            : y
              ? (0, e.jsx)(ja.t, {
                  editModel: _,
                  partnerEventEditorStore: d,
                  OnSuccess: () => {},
                  closeModal: t,
                  bReplaceEventMode: !0,
                  elSuccessDisplayLinks: (0, e.jsx)("a", {
                    href: `${pa.TS.COMMUNITY_BASE_URL}/gid/${x == null ? void 0 : x.ConvertTo64BitString()}/partnerevents/edit/${i}`,
                    children: (0, s.we)("#EventEdit_Replacing_Open"),
                  }),
                })
              : (0, e.jsx)(ri.o0, {
                  onCancel: t,
                  strTitle: (0, s.we)("#EventPublishing_Replace_To"),
                  strDescription: (0, s.we)(
                    "#EventPublishing_Replace_Dialog_Desc1",
                  ),
                  bOKDisabled: !g,
                  onOK: () => {
                    v || (_.ReplaceFrom(n), N(!0));
                  },
                  children:
                    _ && l
                      ? (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsxs)("ul", {
                              children: [
                                (0, e.jsx)("li", {
                                  children: (0, s.we)(
                                    "#EventPublishing_Replace_Dialog_Desc2",
                                    j,
                                  ),
                                }),
                                (0, e.jsx)("li", {
                                  children: (0, s.we)(
                                    "#EventPublishing_Replace_Dialog_Desc3",
                                    (0, s.TW)(S) + " @ " + (0, _t.pg)(S),
                                  ),
                                }),
                                (0, e.jsx)("li", {
                                  children: (0, s.we)(
                                    "#EventPublishing_Replace_Dialog_Desc4",
                                    l.persona_name,
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, s.we)("#Dialog_AreYouSure"),
                            }),
                            (0, e.jsx)(p.Yh, {
                              checked: g,
                              onChange: h,
                              label: (0, s.we)(
                                "#EventPublishing_Replace_Confirm",
                              ),
                            }),
                            !!pa.iA.is_support &&
                              (0, e.jsx)(qu.DA, {
                                curEventModelJson: n.GetEventModel().jsondata,
                                prevEventModelJson: _.GetEventModel().jsondata,
                                onShowCallback: () => m(!0),
                                onCancelCallback: () => m(!1),
                              }),
                          ],
                        })
                      : (0, e.jsx)(z.t, { string: (0, s.we)("#Loading") }),
                });
        }
        function eh(a) {
          const { editModel: t } = a,
            n = (0, Xa.E)(),
            [i] = (0, O.q3)(() => [
              t.GetEventModel().jsondata.clone_from_event_gid,
            ]),
            o = (0, W.RR)(i),
            [l, r, d] = (0, se.uD)();
          if (!i) return null;
          if (i && !o)
            return (0, e.jsx)(z.t, { string: (0, s.we)("#Loading") });
          const _ = o.BIsVisibleEvent() || o.BIsUnlistedEvent();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, s.PP)(
                  "#EventPublishing_Replace_CloneFrom",
                  (0, e.jsx)(_e.N_, {
                    to: `${i}`,
                    children: o.GetNameWithFallback(n),
                  }),
                ),
              }),
              (0, e.jsxs)(p.$n, {
                disabled: !_,
                onClick: r,
                children: [
                  (0, s.we)("#EventPublishing_Replace_CloneFrom_Replace"),
                  (0, e.jsx)(Z.o, {
                    tooltip: (0, s.we)(
                      _
                        ? "#EventPublishing_Replace_CloneFrom_Replace_ttip"
                        : "#EventPublishing_Replace_CloneFrom_Replace_ttip_fail",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)(Jn.E, {
                active: l,
                children: (0, e.jsx)(po, {
                  editModel: t,
                  gidTargetClanEvent: i,
                  closeModal: d,
                }),
              }),
            ],
          });
        }
        var th = u(68297),
          ah = u.n(th);
        function nh(a) {
          const { editModel: t } = a,
            [n] = (0, O.q3)(() => [t.BHasTag("vo_marketing_message")]);
          if (n) return (0, e.jsx)(ih, { ...a });
        }
        const sh = 3;
        function ih(a) {
          var t, n;
          const { editModel: i } = a,
            [o, l, r] = (0, O.q3)(() => [
              i.BHasTag("vo_marketing_message"),
              i.GetClanAccountID(),
              i.GetGID(),
            ]),
            d = (0, we.fj)(l, r),
            [_, c] = (0, E.useState)(() => {
              var j, S;
              return (S =
                (j = d == null ? void 0 : d.oPrivateData) == null
                  ? void 0
                  : j.jsonData) == null
                ? void 0
                : S.strMarketingMessageMajorUpdateHelpTicketReferenceCode;
            }),
            [g, h] = (0, E.useState)(null);
          (0, E.useEffect)(() => {
            var j, S, y, N;
            (S =
              (j = d == null ? void 0 : d.oPrivateData) == null
                ? void 0
                : j.jsonData) != null &&
              S.strMarketingMessageMajorUpdateHelpTicketReferenceCode &&
              c(
                (N =
                  (y = d == null ? void 0 : d.oPrivateData) == null
                    ? void 0
                    : y.jsonData) == null
                  ? void 0
                  : N.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
              );
          }, [
            (n =
              (t = d == null ? void 0 : d.oPrivateData) == null
                ? void 0
                : t.jsonData) == null
              ? void 0
              : n.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
          ]);
          const [v, m, x] = (0, se.uD)(!1);
          return (0, e.jsxs)("div", {
            className: ah().Ctn,
            children: [
              (0, e.jsx)("div", {
                className: Q.EventEditorTextTitle,
                children: (0, s.we)("#MM_MajorUpdate_Review_title"),
              }),
              (0, e.jsx)("div", {
                children: _
                  ? (0, e.jsx)("p", {
                      children: (0, s.oW)(
                        "#MM_MajorUpdate_Review_ticked_created",
                        (0, e.jsx)(B.uU, {
                          href: `${wt.TS.HELP_BASE_URL}en/wizard/HelpRequest/${_}`,
                          className: (0, b.A)(Q.EditPreviewButton, Q.Button),
                          bForceExternal: !0,
                        }),
                      ),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, s.we)(
                            "#MM_MajorUpdate_Review_desc",
                            sh,
                          ),
                        }),
                        (0, e.jsx)(_i, {
                          accountID: wt.iA.accountid,
                          partnerID: g,
                          fnSetPartnerID: h,
                          strLabel: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Partner",
                          ),
                          strTooltip: (0, s.we)(
                            "#EventEditor_SaleValveApproval_Request_Partner_ttip",
                          ),
                        }),
                        (0, e.jsx)(p.$n, {
                          onClick: m,
                          children: (0, s.we)("#MM_MajorUpdate_Review_create"),
                        }),
                        (0, e.jsx)(Jn.E, {
                          active: v,
                          children: (0, e.jsx)(oh, {
                            editModel: i,
                            nPartnerID: g,
                            closeModal: x,
                            fnSetTicketID: c,
                          }),
                        }),
                      ],
                    }),
              }),
            ],
          });
        }
        function oh(a) {
          const {
              editModel: t,
              nPartnerID: n,
              closeModal: i,
              fnSetTicketID: o,
            } = a,
            l = (0, xt.vs)();
          return (
            (0, E.useEffect)(() => {
              l.bLoading ||
                (l.fnSetLoading(!0),
                (async () => {
                  const d = t.GetClanSteamID(),
                    _ = t.GetGID(),
                    c = await lh(
                      d,
                      t.GetAppID(),
                      _,
                      "Requesting Marketing Message Major Update Review",
                      n,
                    );
                  c
                    ? (o(c.reference_code), l.fnSetSuccess(!0))
                    : (l.fnSetError(!0),
                      l.fnSetStrError(
                        (0, s.we)("#Login_Error_Network_Description"),
                      ));
                })());
            }, [n, t, l.bLoading, l, o]),
            (0, e.jsx)(xt.Hh, {
              state: l,
              strDialogTitle: (0, s.we)("#MM_MajorUpdate_Review_create"),
              closeModal: i,
            })
          );
        }
        async function lh(a, t, n, i, o) {
          const l =
              wt.TS.COMMUNITY_BASE_URL +
              "partnereventdata/ajaxrequestmarketingmessagemajorupdatereview",
            r = new URLSearchParams();
          r.append("sessionid", (0, D.KC)()),
            r.append("clanAccountID", "" + a.GetAccountID()),
            r.append("appid", "" + t),
            r.append("gidClanEvent", n),
            r.append("partnerID", "" + o),
            r.append("message", i);
          try {
            let d = await le().post(l, r, { withCredentials: !0 });
            return !d || d.status != 200 || d.data.success != Ze.R
              ? (console.error(
                  "CreateMarketingMessageMajorUpdateReviewRequestTicket failed.",
                  d && (0, Be.H)(d),
                ),
                d.data.success == Ze.Ze ? d.data : null)
              : d.data;
          } catch (d) {
            const _ = (0, Be.H)(d);
            console.error(
              "CreateMarketingMessageMajorUpdateReviewRequestTicket failed: " +
                _.strErrorMsg,
              _,
            );
          }
          return null;
        }
        var rh = Object.defineProperty,
          dh = Object.getOwnPropertyDescriptor,
          ch = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? dh(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && rh(t, n, o), o;
          };
        function uh(a) {
          const { editModel: t } = a,
            [n, i, o, l, r] = (0, O.q3)(() => [
              t.GetClanSteamID(),
              t.GetGID(),
              t.GetEventType(),
              t.GetEventModel().jsondata.sale_presenters,
              t.BVisible(),
            ]);
          return (0, e.jsx)("div", {
            className: (0, b.A)(de.PublishContainer),
            children: (0, e.jsx)("div", {
              className: (0, b.A)(Q.ReachBackground),
              children: (0, e.jsxs)("div", {
                className: ve.EventEditorInputPaneContents,
                children: [
                  (0, e.jsx)(gi, {
                    clanSteamID: n,
                    gidClanEvent: i,
                    rgSalePresenters: l,
                    fnCleanSaleEventPresenters: () => {
                      (t.GetEventModel().jsondata.sale_presenters = void 0),
                        t.SetDirty(C.IQ.jsondata_sales);
                    },
                    bPublishTab: !0,
                    bIsEventVisible: r,
                  }),
                  (0, e.jsx)(mh, { editModel: t }),
                  (0, e.jsxs)("div", {
                    className: (0, b.A)(
                      Q.FlexRowContainer,
                      de.PublishOptionsCtn,
                    ),
                    children: [
                      (0, e.jsx)(Yu, { editModel: t, bTakePublishAction: !1 }),
                      (0, e.jsx)(Xu, { editModel: t }),
                    ],
                  }),
                  (0, e.jsx)(nh, { editModel: t }),
                  (0, e.jsx)(Kn, { eventType: o, clanSteamID: n }),
                  (0, e.jsx)("div", { className: Q.ClearThings }),
                ],
              }),
            }),
          });
        }
        let Kn = class extends E.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                bLoadingClanInfo: !J.ac.BHasClanInfoLoaded(
                  this.props.clanSteamID,
                ),
              });
          }
          async componentDidMount() {
            this.state.bLoadingClanInfo &&
              (await J.ac.LoadClanInfoForClanSteamID(this.props.clanSteamID),
              this.setState({ bLoadingClanInfo: !1 }));
          }
          render() {
            if (this.props.eventType == L.ajI) return;
            if (this.state.bLoadingClanInfo)
              return (0, e.jsx)("div", {
                className: "ReachCtn",
                children: (0, e.jsx)(z.t, {}),
              });
            let a = M.mh.GetEditModel(),
              t = a.GetCategoryAsType();
            const n = ft.KN.Get().GetPartnerEventPermissions(
                this.props.clanSteamID,
              ),
              i = J.ac.GetClanInfoByClanAccountID(
                a.GetClanSteamID().GetAccountID(),
              );
            if (!n.can_edit) return (0, e.jsx)(E.Fragment, {});
            let o = a.BHasSaleEnabled() || i.is_ogg;
            const r =
              (a.BWillShowOnLibraryOverviewDueToSettings() ||
                a.BWillShowOnLibraryDetailDueToSettings()) &&
              (0, ae.Dn)(a.GetEventModel());
            return (0, e.jsxs)("div", {
              className: "ReachCtn",
              children: [
                (0, e.jsx)("div", {
                  className: Q.EventEditorTextTitle,
                  children: (0, s.we)("#EventReach_Title"),
                }),
                (0, e.jsxs)("div", {
                  className: de.ReachItems,
                  children: [
                    (0, e.jsx)("div", {
                      className: Q.EventEditorTextSubTitle,
                      children: (0, s.we)("#EventReach_SubTitle"),
                    }),
                    (0, e.jsx)("div", {
                      className: de.ReachColumnTitles,
                      children: (0, e.jsx)("div", {
                        className: de.ReachColumnName,
                        children: (0, s.we)("#EventReach_Location"),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: de.ReachItemList,
                      children: [
                        a.BWillShowOnStoreDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: de.ReachSubject,
                            children: [
                              (0, s.we)("#EventReach_GamePage"),
                              (0, e.jsx)(Z.o, {
                                tooltip: (0, s.we)("#EventReach_GamePage_ttip"),
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          className: de.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_GameNewsPg"),
                            (0, e.jsx)(Z.o, {
                              tooltip: (0, s.we)("#EventReach_GameNewsPg_ttip"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, b.A)(de.ReachSubject),
                          children: [
                            (0, s.we)("#EventReach_PersonalizedCalendar"),
                            (0, e.jsx)(Z.o, {
                              tooltip: (0, s.we)(
                                "#EventReach_PersonalizedCalendar_ttip",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: de.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_Community"),
                            (0, e.jsx)(Z.o, {
                              tooltip: (0, s.we)("#EventReach_Community_ttip"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: de.ReachSubject,
                          children: [
                            (0, s.we)("#EventReach_FriendActivity"),
                            (0, e.jsx)(Z.o, {
                              tooltip: (0, s.we)(
                                "#EventReach_FriendActivity_ttip",
                              ),
                            }),
                          ],
                        }),
                        a.BWillShowOnLibraryOverviewDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: (0, b.A)(de.ReachSubject),
                            children: [
                              (0, s.we)("#EventReach_LibraryHome"),
                              r &&
                                (0, e.jsxs)("span", {
                                  className: de.ReachPendingVisibilityText,
                                  children: [
                                    "  ",
                                    (0, s.we)(
                                      "#EventReach_LibraryVisibilityPendingModeration",
                                    ),
                                  ],
                                }),
                              (0, e.jsx)(Z.o, {
                                tooltip: (0, s.we)(
                                  "#EventReach_LibraryHome_ttip",
                                ),
                              }),
                            ],
                          }),
                        a.BWillShowOnLibraryDetailDueToSettings() &&
                          (0, e.jsxs)("div", {
                            className: (0, b.A)(de.ReachSubject),
                            children: [
                              (0, s.we)("#EventReach_LibraryDetail"),
                              r &&
                                (0, e.jsxs)("span", {
                                  className: de.ReachPendingVisibilityText,
                                  children: [
                                    "  ",
                                    (0, s.we)(
                                      "#EventReach_LibraryVisibilityPendingModeration",
                                    ),
                                  ],
                                }),
                              (0, e.jsx)(Z.o, {
                                tooltip: (0, s.we)(
                                  "#EventReach_LibraryDetail_ttip",
                                ),
                              }),
                            ],
                          }),
                        !!(
                          a.BIsAllowedInNotifications() &&
                          a.BIsVisibleBeforeStart()
                        ) &&
                          (0, e.jsxs)("div", {
                            className: (0, b.A)(de.ReachSubject, de.Future),
                            children: [
                              (0, s.we)("#EventReach_Future"),
                              " ",
                              (0, s.we)("#EventReach_Reminder"),
                              (0, e.jsx)(Z.o, {
                                tooltip: (0, s.we)("#EventReach_Reminder_ttip"),
                              }),
                            ],
                          }),
                        !!a.BIsAllowedInNotifications() &&
                          (0, e.jsxs)("div", {
                            className: (0, b.A)(de.ReachSubject, de.Future),
                            children: [
                              (0, s.we)("#EventReach_Future"),
                              " ",
                              (0, s.we)("#EventReach_EmailRollUp"),
                              (0, e.jsx)(Z.o, {
                                tooltip: (0, s.we)(
                                  "#EventReach_EmailRollUp_ttip",
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                    o &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: de.ReachColumnTitles,
                            children: (0, e.jsx)("div", {
                              className: de.ReachColumnName,
                              children: (0, s.we)(
                                "#EventReach_OptionalLocation",
                              ),
                            }),
                          }),
                          i.is_ogg &&
                            (0, e.jsxs)("div", {
                              className: de.ReachItemList,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: de.ReachSubject,
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: de.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(me.EQ, {
                                          bOn: a
                                            .GetEventModel()
                                            .BHasTag("workshop"),
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            de.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_Workshop",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(Z.o, {
                                      tooltip: (0, s.we)(
                                        "#EventReach_Workshop_ttip",
                                      ),
                                    }),
                                  ],
                                }),
                                t == L.zeJ && (0, e.jsx)(hh, {}),
                                (0, e.jsxs)("div", {
                                  className: (0, b.A)(de.ReachSubject),
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: de.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(me.EQ, {
                                          bOn: a
                                            .GetEventModel()
                                            .BShowLibrarySpotlight(),
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            de.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_LibraySpotLight",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(Z.o, {
                                      tooltip: (0, s.we)(
                                        "#EventReach_LibraySpotLight_ttip",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          a.BHasSaleEnabled() &&
                            (0, e.jsxs)("div", {
                              className: de.ReachItemList,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: de.ReachSubject,
                                  children: [
                                    (0, e.jsxs)("span", {
                                      className: de.ReachSubjectOptional,
                                      children: [
                                        (0, e.jsx)(me.EQ, {
                                          bOn: a.BHasSaleProductBanners(),
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            de.ReactSubjectOptionalText,
                                          children: (0, s.we)(
                                            "#EventReach_SaleBanner",
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(Z.o, {
                                      tooltip: (0, s.we)(
                                        "#EventReach_SaleBanner_ttip",
                                      ),
                                    }),
                                  ],
                                }),
                                !!(
                                  a.BHasSaleProductBanners() &&
                                  a.GetEventStartTime() &&
                                  a.GetEventEndTime()
                                ) &&
                                  (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsx)("br", {}),
                                      (0, e.jsx)("div", {
                                        children: (0, s.PP)(
                                          "#EventReact_SaleBannerDuration",
                                          (0, e.jsx)(_t.K4, {
                                            dateAndTime: a.GetEventStartTime(),
                                            bSingleLine: !0,
                                          }),
                                          (0, e.jsx)(_t.K4, {
                                            dateAndTime: Math.min(
                                              a.GetEventEndTime(),
                                              a.GetEventStartTime() +
                                                336 * 60 * 60,
                                            ),
                                            bSingleLine: !0,
                                          }),
                                        ),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
        };
        Kn = ch([R.PA], Kn);
        function hh(a) {
          const t = M.mh.GetEditModel(),
            n = Ku(Fa.tw.I8, t.GetAppID());
          return (0, e.jsxs)("div", {
            className: de.ReachSubject,
            children: [
              (0, e.jsxs)("span", {
                className: de.ReachSubjectOptional,
                children: [
                  n == null || n == null
                    ? (0, e.jsx)(z.t, {
                        size: "small",
                        string: (0, s.we)("#Loading"),
                      })
                    : (0, e.jsx)(me.EQ, {
                        bOn: n.some(
                          (i) => i.announcementid == t.GetAnnouncementGID(),
                        ),
                      }),
                  (0, e.jsx)("span", {
                    className: de.ReactSubjectOptionalText,
                    children: (0, s.we)("#EventReach_RecentlyUpdatedPg"),
                  }),
                ],
              }),
              (0, e.jsx)(Z.o, {
                tooltip: (0, s.we)("#EventReach_RecentlyUpdatedPg_ttip"),
              }),
            ],
          });
        }
        function mh(a) {
          const { editModel: t } = a,
            [n, i, o, l, r, d, _, c, g] = (0, O.q3)(() => [
              t.GetEventModel().GID,
              t.GetEventModel().AnnouncementGID,
              t.ComputeEditingModelTimeOverrides(),
              t.BHidden(),
              t.BPublished(),
              t.GetEventVisibilityStartTime(),
              t.GetVisibilitySetting(),
              t.GetEventModel().GetVisibilityStartTimeAndDateUnixSeconds(),
              t.GetEventType() == L.ajI,
            ]);
          let h;
          if (!r)
            if (t.GetStartTimeEditChoice() == C.z8.k_ESpecified)
              switch (_) {
                case C.Fl.event_start:
                  h = (0, e.jsx)("div", {
                    className: de.VisibilityNote,
                    children: (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#EventEditor_Status_WillBeVisible_EventStart",
                      ),
                    }),
                  });
                  break;
                case C.Fl.specified_time:
                  h = (0, e.jsx)("div", {
                    className: de.VisibilityNote,
                    children: (0, e.jsx)("p", {
                      children: (0, s.PP)(
                        "#EventEditor_Status_WillBeVisible_At",
                        (0, e.jsx)(_t.K4, { dateAndTime: c, bSingleLine: !0 }),
                      ),
                    }),
                  });
                  break;
                case C.Fl.immediate:
                default:
                  h = (0, e.jsxs)("div", {
                    className: de.VisibilityNote,
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, s.we)(
                          "#EventPublishing_Summary_Immediate",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, s.we)(
                          "#EventPublishing_Summary_ModerationNote",
                        ),
                      }),
                    ],
                  });
              }
            else
              h = (0, e.jsxs)("div", {
                className: de.VisibilityNote,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, s.we)("#EventPublishing_Summary_Immediate"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, s.we)(
                      "#EventPublishing_Summary_ModerationNote",
                    ),
                  }),
                ],
              });
          const v = (0, he.T7)(t.GetEventModel());
          return (0, e.jsxs)("div", {
            className: de.SummaryContainer,
            children: [
              (0, e.jsx)("div", {
                className: Q.EventEditorTextTitle,
                children: (0, s.we)("#EventPublishing_Summary"),
              }),
              (0, e.jsxs)("div", {
                className: de.SummaryItems,
                children: [
                  (0, e.jsxs)("div", {
                    className: de.StatusRow,
                    children: [
                      (0, e.jsx)("div", {
                        className: de.StatusText,
                        children: (0, e.jsx)(Qt.zm, { editModel: t }),
                      }),
                      r &&
                        !l &&
                        !g &&
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(he.tj, {
                            className: (0, b.A)(Q.Button, Q.Primary),
                            eventModel: t.GetEventModel(),
                            route: he.PH.k_eStoreView,
                            children: (0, s.we)("#EventEditor_ViewLive"),
                          }),
                        }),
                    ],
                  }),
                  !g &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsxs)("div", {
                          className: Q.FlexRowContainer,
                          children: [
                            (0, e.jsxs)("span", {
                              children: [
                                (0, e.jsxs)("b", {
                                  children: [
                                    (0, s.we)("#EventDisplay_TimeUpcoming"),
                                    ":",
                                  ],
                                }),
                                "\xA0",
                              ],
                            }),
                            (0, e.jsx)(_t.K4, {
                              dateAndTime: o.nOverrideStartTime,
                              bSingleLine: !0,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: Q.FlexRowContainer,
                          children: [
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsxs)("b", {
                                  children: [
                                    (0, s.we)(
                                      "#EventPublishing_Summary_VisibilityStart",
                                    ),
                                    ":",
                                  ],
                                }),
                                "\xA0",
                              ],
                            }),
                            !!(r && l) &&
                              (0, e.jsxs)("span", {
                                children: [
                                  (0, s.PP)(
                                    "#EventEditor_Visibility_AutoVisible",
                                    (0, e.jsx)(_t.K4, {
                                      dateAndTime: d,
                                      bSingleLine: !0,
                                    }),
                                  ),
                                  "\xA0",
                                  (0, s.we)("#EventEditor_Visibility_NoAction"),
                                ],
                              }),
                            h,
                          ],
                        }),
                        !!(n || i) &&
                          (0, e.jsx)("div", {
                            className: de.LinkRow,
                            children: (0, e.jsx)(Wu.V, {
                              eventLink: v,
                              labelOverride: "#EventEditor_Status_FutureURL",
                            }),
                          }),
                      ],
                    }),
                  g &&
                    (0, e.jsx)("div", {
                      className: Q.FlexRowContainer,
                      children: (0, e.jsx)(Yi, { editModel: t }),
                    }),
                ],
              }),
            ],
          });
        }
        function _h(a) {
          var t;
          const { bInitiatePublishDialog: n, clanSteamID: i } = a,
            o = (0, Gn.m)("EventInputPane"),
            l = (0, li.LU)(),
            r = l.GetEventModel();
          (0, E.useEffect)(() => {
            D.UF.IS_CURATOR && dt.pF.LoadCreatorHome(i, !1, o);
          }, [i, o]);
          const d = (0, E.useCallback)(() => {
              const N = dt.pF.GetCreatorHome(i);
              return D.iA.is_support &&
                D.UF.CAN_UPLOAD_IMAGES &&
                D.UF.IS_CURATOR &&
                N
                ? !(
                    N.BHasClanAccountFlagSet(la.Wv.bM) ||
                    N.BHasClanAccountFlagSet(la.Wv._x) ||
                    N.BHasClanAccountFlagSet(la.Wv.Jb) ||
                    N.GetNumFollowers() >= 15e3
                  )
                : !1;
            }, [i]),
            _ = (0, J.Yp)(r),
            c = (0, O.q3)(() => (0, ra.C7)()),
            g = (0, J._5)(r),
            h = (0, O.q3)(() => (0, ra.cA)()),
            v = (0, J.Ao)(r);
          (0, xa.wT)(
            [_.bVisible, g.bVisible, v.bVisible].filter(Boolean).length <= 1,
            "Sale, Update Landing Page, and Creator Home should be mutually exclusive",
          );
          const m = !ft.KN.Get().BShowEmailEditorTab(l.GetEventModel()),
            x = ft.KN.Get().GetPartnerEventPermissions(r.clanSteamID);
          J.ac.LoadClanInfoForClanSteamID(i);
          const j = !!(
              (t = J.ac.GetClanInfoByClanAccountID(i.GetAccountID())) != null &&
              t.has_rss_feed
            ),
            S = (N) =>
              window.sessionStorage.setItem(
                "editorCurrentTab",
                `?tab=${N.key}`,
              ),
            y = [
              {
                name: (0, s.we)("#EventEditor_Description_tab"),
                key: "description",
                status: (0, e.jsx)(Sa, { fnGetStatus: ra._P }),
                hidden: v.bVisible,
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(Vd, {
                    editModel: l,
                    bInitiatePublishDialog: n,
                    bCanManuallyTagAssociatedApps: j,
                  }),
                }),
                onClick: S,
              },
              {
                name:
                  (v.bValveOnly ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_CreatorHome_Title"),
                key: "creatorhome",
                hidden: !v.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(Un, { mode: qa, editModel: l }),
                }),
                onClick: S,
              },
              {
                name: (0, s.we)("#EventEditor_Visibility_Title"),
                key: "options",
                status: (0, e.jsx)(Sa, { fnGetStatus: ra.e5 }),
                hidden: v.bVisible,
                contents: (0, e.jsxs)(xe.tH, {
                  children: [
                    (0, e.jsx)(Ou, { editModel: l }),
                    (0, e.jsx)("div", { className: f().ClearThings }),
                  ],
                }),
                onClick: S,
              },
              {
                name: (0, s.we)("#EventEditor_Artwork"),
                key: "artwork",
                status: (0, e.jsx)(Sa, { fnGetStatus: ra.uu }),
                hidden: !D.UF.CAN_UPLOAD_IMAGES || v.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(xh, { editModel: l }),
                onClick: S,
              },
              {
                name: (0, s.we)("#Broadcast_tab"),
                key: "broadcast",
                hidden:
                  !D.UF.CAN_UPLOAD_IMAGES ||
                  l.GetClanAccountID() == (0, Ca.H)(),
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(ut, { editModel: l }),
                }),
                onClick: S,
              },
              {
                name:
                  (r.BHasEmailEnabled() ? "" : "(VO) ") +
                  (0, s.we)("#EventEmail_TabTitle"),
                key: "email",
                hidden: m,
                status:
                  l.GetClanAccountID() == (0, Ca.H)()
                    ? (0, e.jsx)(Sa, { fnGetStatus: ra.ER })
                    : void 0,
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(Cu, { editModel: l }),
                }),
                onClick: S,
              },
              {
                name:
                  (_.bValveOnly ? "(VO) " : "") + (0, s.we)("#Sale_TabTitle"),
                key: "sale",
                status: (0, e.jsx)(Sa, { fnGetStatus: () => c }),
                statusToolTip: c == null ? void 0 : c.ttip,
                hidden: !_.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(Un, { mode: Cl, editModel: l }),
                }),
                onClick: S,
              },
              {
                name:
                  (g.bValveOnly ? "(VO) " : "") +
                  (0, s.we)("#EventEditor_UpdateLandingPage_Title"),
                key: "updatelandingpage",
                status: (0, e.jsx)(Sa, { fnGetStatus: () => h }),
                statusToolTip: h == null ? void 0 : h.ttip,
                hidden: !g.bVisible,
                vo_warning:
                  d() && (0, s.we)("#EventEditor_CuratorImageWarning"),
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(Un, { mode: Ka, editModel: l }),
                }),
                onClick: S,
              },
              {
                name: (0, s.we)("#Button_Publish"),
                key: "publishing",
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(uh, { editModel: l }),
                }),
                onClick: S,
              },
              {
                name: "(VO) Debug",
                key: "debug",
                hidden: !x.valve_admin,
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(jl.Oq, { editModel: l }),
                }),
                onClick: S,
              },
              {
                name: "(VO) Stats",
                key: "stats",
                hidden: !x.valve_admin || !r.GID || !r.BHasSaleEnabled(),
                contents: (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(cc, { editModel: l }),
                }),
                onClick: S,
              },
            ];
          return (0, e.jsxs)(ph, {
            children: [
              (0, e.jsx)(An.V, { tabs: y }),
              (0, e.jsx)("div", { className: f().ClearThings }),
            ],
          });
        }
        function ph(a) {
          const [t, n] = E.useState();
          return (0, e.jsx)("div", {
            className: ye().EventEditorInputPaneContainer,
            children: (0, e.jsxs)(ld, {
              elContent: t,
              children: [
                (0, e.jsx)("div", {
                  className: ye().EventEditorInputPaneContents,
                  children: a.children,
                }),
                (0, e.jsx)("div", {
                  className: (0, b.A)(f().SaveBackground),
                  children: (0, e.jsx)(cd, { setAdditionalContentDiv: n }),
                }),
              ],
            }),
          });
        }
        const Sa = (0, R.PA)(function (t) {
            const n = t.fnGetStatus();
            if (!n) return null;
            const { text: i, complete: o, total: l } = n;
            return (0, e.jsx)(An.a, {
              statusType: o >= l ? "success" : "danger",
              children: i,
            });
          }),
          vo = (0, R.PA)((a) => {
            var t;
            (0, E.useEffect)(() => {
              J.ac.LoadOGGClanInfoForIdentifier(a.appid_or_vanity_str);
            }, [a.appid_or_vanity_str]);
            const {
                clanSteamID: n,
                gid: i,
                appid: o,
                bInitiatePublishDialog: l,
                appid_or_vanity_str: r,
              } = a,
              _ = !(D.UF.IS_CREATOR_HOME || D.UF.IS_CURATOR)
                ? (t = pt.A.Get().GetApp(o)) == null
                  ? void 0
                  : t.GetName()
                : D.UF.VANITY_ID,
              c = M.mh.GetEditModel();
            return (0, e.jsx)(li.A4, {
              editModel: c,
              children: (0, e.jsxs)("div", {
                className: (0, b.A)(ye().wrapper),
                children: [
                  (0, e.jsx)(dd, {
                    clanSteamID: n,
                    appid: o,
                    gid: i,
                    appid_or_vanity_str: r,
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, b.A)(
                      f().FlexColumnContainer,
                      ye().EventEditBelowTopBarContainer,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: ye().EventEditBelowTopBarGameName,
                        children: _,
                      }),
                      (0, e.jsxs)("div", {
                        className: ye().EventEditBelowTopBarRow,
                        children: [
                          (0, e.jsx)(vh, { editModel: c }),
                          (0, e.jsx)(je.Gq, {
                            toolTipContent: c.GetName(),
                            direction: "bottom",
                            children: (0, e.jsx)("div", {
                              className: ye().EventEditBelowTopBarEventName,
                              children: c.GetName(),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: ye().maincontent,
                    children: (0, e.jsx)(_h, {
                      appid_or_vanity_str: r,
                      appid: o,
                      gid: i,
                      bInitiatePublishDialog: l,
                      clanSteamID: n,
                    }),
                  }),
                  (0, e.jsx)("div", {}),
                ],
              }),
            });
          });
        function vh(a) {
          const { editModel: t } = a,
            [n, i, o, l, r, d] = (0, O.q3)(() => [
              t.GetEventModel().bOldAnnouncement,
              t.GetStrVanityOrAppID(),
              t.GetCategoryAsString(),
              t.GetAnnouncementGID(),
              t.BHasGid() ? t.GetGID() : "",
              t.BHasTag("vo_marketing_message"),
            ]),
            { bCanChange: _, strReasonText: c } = (0, Fe.NN)(t),
            g = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("span", {
                  children: [(0, s.we)("#EventEditor_TypeTitle"), " "],
                }),
                o,
                _ && (0, e.jsx)("img", { src: Il.A }),
                !_ && (0, e.jsx)(Z.o, { tooltip: c }),
              ],
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              _ &&
                (0, e.jsx)(_e.N_, {
                  className: (0, b.A)(
                    ye().EventEditBelowTopBarCategoryChoice,
                    ye().AllowHover,
                  ),
                  to: n ? ie.GY.MigrateCategory(i, l) : ie.GY.Category(i, r),
                  children: g,
                }),
              !_ &&
                (0, e.jsx)("div", {
                  className: ye().EventEditBelowTopBarCategoryChoice,
                  children: g,
                }),
            ],
          });
        }
        function gh() {
          const a = (0, di.il)(),
            t = M.mh.GetEditModel(),
            [n, i] = (0, E.useState)(!1);
          return (
            (0, E.useEffect)(() => {
              if (!(t != null && t.BTagsNeedResync())) return;
              let o = !1;
              return (
                (0, di.I9)(a, t)
                  .then((l) => {
                    !o &&
                      l.length > 0 &&
                      (0, ri.pY)(
                        (0, s.we)(
                          "#EventEditor_TagResyncIncomplete",
                          l.length,
                          l
                            .slice(0, 10)
                            .map((r) => r.type + " " + r.id)
                            .join(", "),
                        ),
                        window,
                      );
                  })
                  .catch((l) => {
                    console.error(
                      "Failed to rebuild the stripped tags for this event",
                      l,
                    ),
                      o || i(!0);
                  }),
                () => {
                  o = !0;
                }
              );
            }, [t, a]),
            {
              bResyncing: !!(t != null && t.BTagsNeedResync()) && !n,
              bFailed: n,
            }
          );
        }
        const Sh = (0, R.PA)(function (t) {
            const n = (0, E.useMemo)(() => new k.b(D.UF.CLANSTEAMID), []),
              { bResyncing: i, bFailed: o } = gh();
            return i
              ? (0, e.jsxs)("div", {
                  className: da().FlexCenter,
                  children: [
                    (0, e.jsx)(z.t, {}),
                    (0, e.jsx)("div", {
                      children: (0, s.we)("#EventEditor_TagResyncProgress"),
                    }),
                  ],
                })
              : o
                ? (0, e.jsx)(Qt.XW, {
                    strErrorMsg: (0, s.we)("#EventEditor_TagResyncFailed"),
                    appid_or_vanity_str: t.match.params.appid_or_vanity_str,
                  })
                : (0, e.jsx)(vo, {
                    appid_or_vanity_str: t.match.params.appid_or_vanity_str,
                    appid: D.UF.APPID,
                    gid: t.match.params.gid,
                    clanSteamID: n,
                    bInitiatePublishDialog: t.bInitiatePublishDialog,
                  });
          }),
          qn = (0, Ya.L)(Sh);
        class Eh extends E.Component {
          constructor(t) {
            super(t),
              (this.m_bRedirect = !1),
              (this.m_bRedirect =
                M.mh.GetEditModel() === void 0 ||
                M.mh.GetEditModel().GetCategoryAsType() == L.DRF);
          }
          render() {
            return this.m_bRedirect
              ? (0, e.jsx)(Re.rd, {
                  to: ie.GY.Category(
                    this.props.match.params.appid_or_vanity_str,
                    "",
                  ),
                })
              : (0, e.jsx)(qn, { ...this.props });
          }
        }
        function fh(a) {
          return a ? a.filter(Boolean).length : 0;
        }
        function xh(a) {
          const { editModel: t } = a,
            [n, i, o, l, r, d, _, c, g, h] = (0, O.q3)(() => [
              t.GetEventType(),
              !!t.GetEventModel().BHasTag("steam_best_of_year"),
              t.GetClanSteamID(),
              t.GetEventModel().vecTags,
              t.GetIncludedRealmList(),
              t.GetEventType() === L.HFK,
              fh(t.GetEventModel().jsondata.localized_spotlight_image),
              t.BAllowedSteamStoreSpotlight(),
              t.GetAppID(),
              Tc(t),
            ]),
            v = ["background", "capsule"];
          _ > 0
            ? v.push("spotlight")
            : D.UF.IS_OGG &&
              c &&
              (v.push("localized_store_app_spotlight"),
              v.push("localized_store_app_spotlight_mobile")),
            i && v.push("bestofyear_banner", "bestofyear_banner_mobile");
          const m = v.includes("spotlight"),
            x = v.includes("localized_store_app_spotlight"),
            j = v.includes("localized_store_app_spotlight_mobile");
          return (0, e.jsxs)(xe.tH, {
            children: [
              (0, e.jsxs)("div", {
                className: ye().ArtworkTipsCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: ye().ArtworkTips,
                    children: [
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, s.we)("#selectimage_tip3_title"),
                          }),
                          ": ",
                          (0, s.PP)(
                            "#selectimage_tip3",
                            (0, e.jsxs)("span", {
                              children: [
                                (0, e.jsx)("br", {}),
                                (0, e.jsx)("a", {
                                  target: D.TS.IN_CLIENT ? void 0 : "_blank",
                                  href: "https://partner.steamgames.com/doc/store/localization#supported_languages",
                                  children: (0, s.we)(
                                    "#selectimage_see_documentation",
                                  ),
                                }),
                              ],
                            }),
                          ),
                        ],
                      }),
                      (0, e.jsx)("p", {
                        children: (0, e.jsx)("a", {
                          href: "https://www.dropbox.com/scl/fo/cvkwbosmrimklcl9h0qko/AF5IPErKP-mQM_3YO1Dw2lA?rlkey=b3ad0izykq367g4luasrinw9z&dl=0",
                          download: !0,
                          children: (0, s.we)("#selectimage_downloadtemplate"),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("a", {
                    href: "https://partner.steamgames.com/doc/marketing/event_tools/event_examples",
                    className: ye().ArtworkDocs,
                    target: D.TS.IN_CLIENT ? void 0 : "_blank",
                    children: [
                      (0, e.jsx)("div", {
                        className: ye().ArtworkExampleCtn,
                        children: (0, e.jsx)("img", {
                          className: ye().ArtworkExampleThumbnail,
                          src: D.TS.IMG_URL + "events/thumb_library_home.jpg",
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: ye().ArtworkExampleTitle,
                        children: (0, s.we)("#selectimage_viewExamples"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(In.t, {
                clanSteamID: o,
                rgSupportArtwork: v,
                fnSetImageURL: t.SetImageURL,
                bAllowPreviousClanImageSelection: !0,
                rgRealmList: r,
              }),
              (0, e.jsx)(Ye.it, {
                clanSteamID: o,
                appid: g,
                eventModel: t.GetEventModel(),
                title: (0, s.we)("#EventEditor_ArtworkType_capsule"),
                artworkType: "capsule",
                fnLangHasData: t.BHasTitleImage,
                fnSetImageURL: t.SetImageURL,
                fnGetImageHashAndExt: t.GetImageHashAndExt,
                headerHint: (0, aa.bc)(n, l) ? Ye.uE.k_Required : void 0,
                elEventArtworkExample: (0, e.jsx)(wa, {
                  artworkType: "capsule",
                }),
                partnerEventStore: M.mh,
              }),
              (0, e.jsx)(Ye.it, {
                clanSteamID: o,
                appid: g,
                eventModel: t.GetEventModel(),
                title: (0, s.we)("#EventEditor_ArtworkType_background"),
                fnLangHasData: t.BHasTitleImage,
                fnSetImageURL: t.SetImageURL,
                fnGetImageHashAndExt: t.GetImageHashAndExt,
                artworkType: "background",
                headerHint: Ye.uE.k_Suggested,
                elEventArtworkExample: (0, e.jsx)(wa, {
                  artworkType: "background",
                }),
                partnerEventStore: M.mh,
              }),
              !!(d && (x || j || m)) &&
                (0, e.jsxs)("div", {
                  className: fe().ArtworkSelectorContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: fe().Title,
                      children: (0, s.we)(
                        "#EventEditor_ArtworkType_store_spotlight",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, b.A)(fe().SelectImageBlock, fe().Tips),
                      children: (0, s.we)(
                        "#EventEditor_ArtworkType_SpotlightNotSupport",
                        t.GetCategoryAsString(),
                      ),
                    }),
                    (0, e.jsx)("br", {}),
                  ],
                }),
              !!(x && !d) &&
                (0, e.jsx)(Ye.it, {
                  clanSteamID: o,
                  appid: g,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)(
                    "#EventEditor_ArtworkType_localized_store_app_spotlight",
                  ),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "localized_store_app_spotlight",
                  elEventArtworkExample: (0, e.jsx)(wa, {
                    artworkType: "localized_store_app_spotlight",
                  }),
                  headerHint: Ye.uE.k_Requested,
                  partnerEventStore: M.mh,
                }),
              !!(j && !d) &&
                (0, e.jsx)(Ye.it, {
                  clanSteamID: o,
                  appid: g,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)(
                    "#EventEditor_ArtworkType_localized_store_app_spotlight_mobile",
                  ),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "localized_store_app_spotlight_mobile",
                  elEventArtworkExample: (0, e.jsx)(wa, {
                    artworkType: "localized_store_app_spotlight_mobile",
                  }),
                  headerHint: Ye.uE.k_Requested,
                  partnerEventStore: M.mh,
                }),
              !!(m && !d) &&
                (0, e.jsx)(Ye.it, {
                  clanSteamID: o,
                  appid: g,
                  eventModel: t.GetEventModel(),
                  title: (0, s.we)("#EventEditor_ArtworkType_store_spotlight"),
                  fnLangHasData: t.BHasTitleImage,
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  artworkType: "spotlight",
                  headerHint: (0, aa.Ch)(n) ? Ye.uE.k_Suggested : void 0,
                  elEventArtworkExample: (0, e.jsx)(wa, {
                    artworkType: "spotlight",
                  }),
                  partnerEventStore: M.mh,
                }),
              !!D.UF.IS_OGG &&
                (0, e.jsx)(Ye.it, {
                  clanSteamID: o,
                  appid: g,
                  eventModel: t.GetEventModel(),
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  title: (0, s.we)("#EventEditor_ArtworkType_hero"),
                  fnLangHasData: t.BHasTitleImage,
                  artworkType: "hero",
                  partnerEventStore: M.mh,
                }),
              !!i &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(Ye.it, {
                      clanSteamID: o,
                      appid: g,
                      eventModel: t.GetEventModel(),
                      fnLangHasData: t.BHasTitleImage,
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_bestofyear_banner",
                      ),
                      artworkType: "bestofyear_banner",
                      partnerEventStore: M.mh,
                    }),
                    (0, e.jsx)(Ye.it, {
                      clanSteamID: o,
                      appid: g,
                      eventModel: t.GetEventModel(),
                      fnLangHasData: t.BHasTitleImage,
                      fnSetImageURL: t.SetImageURL,
                      fnGetImageHashAndExt: t.GetImageHashAndExt,
                      title: (0, s.we)(
                        "#EventEditor_ArtworkType_bestofyear_banner_mobile",
                      ),
                      artworkType: "bestofyear_banner_mobile",
                      partnerEventStore: M.mh,
                    }),
                  ],
                }),
              !!h && (0, e.jsx)(Ic, { editModel: t }),
            ],
          });
        }
        var vn = u(9608),
          bh = u(13018),
          jh = u(85528),
          Ua = u(75779);
        function Ch() {
          return typeof self != "undefined" ? self.origin : "community";
        }
        async function wh() {
          const a = new URLSearchParams(),
            t = Ch();
          t && a.set("origin", t);
          const n = `${pa.TS.STORE_BASE_URL}saleaction/ajaxgetuserdeckcompatcounts?${a}`,
            i = await fetch(n);
          if (!i.ok) throw new Error(`${n} answered ${i.status}`);
          const o = await i.json();
          if ((o == null ? void 0 : o.success) != Ze.R || !o.counts)
            throw new Error(
              `${n} answered EResult ${o == null ? void 0 : o.success}`,
            );
          return o.counts;
        }
        const Dh = 300 * 1e3;
        function yh() {
          return ["DeckCompatCounts"];
        }
        function Th() {
          return {
            queryKey: yh(),
            queryFn: () => wh(),
            staleTime: Dh,
            retry: !1,
          };
        }
        function Ih() {
          const { data: a } = (0, Ta.I)(Th());
          return a;
        }
        function Ah(a, t) {
          switch (t) {
            case Ua.sd:
              return a == null ? void 0 : a.playable;
            case Ua.V8:
              return a == null ? void 0 : a.unsupported;
            default:
              return a == null ? void 0 : a.verified;
          }
        }
        var Ve = u(70187),
          Gh = u(7379),
          Zn = u(64703),
          Lh = u(6878),
          go = u(47610),
          Bh = u(18860),
          Xn = u(5565);
        const Nh = E.Fragment;
        function Mh(a) {
          const {
              reservationPackageID: t,
              depositPackageID: n,
              bIsPreview: i,
              psuLessPackageID: o,
              strOutOfStockOverride: l,
              strDeliveryOverride: r,
              bDeliveryOverrideOnlyIfOutOfStock: d,
              section: _,
            } = a,
            { data: c } = (0, go.DR)(t),
            { data: g } = (0, go.DR)(o),
            h = (0, E.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + t,
                  reservation_package: t,
                  deposit_package: n,
                  localized_reservation_desc: (0, Ut.$Y)([], L.bP9, null),
                  localized_out_of_stock_override: (0, Ut.$Y)(
                    [l || null],
                    L.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, Ut.$Y)(
                    [r || null],
                    L.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!d,
                  psu_less_package: o,
                },
              ],
              [t, n, l, r, d, o],
            );
          if (!c || (o && !g))
            return (0, e.jsx)(z.t, {
              string: (0, s.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const v = !pa.iA.logged_in || !c.account_restricted_from_purchasing,
            m =
              c.reservation_state == Bh.G.k_EPurchaseReservationState_Reserved
                ? c
                : void 0;
          return (0, e.jsxs)(xe.tH, {
            children: [
              (0, e.jsx)(E.Suspense, {
                fallback: null,
                children: (0, e.jsx)(Nh, {
                  bIsPreview: !!i,
                  rgReservationDef: h,
                }),
              }),
              !!c.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: h[0].unique_id,
                  children: [
                    (0, e.jsx)(Xn.bk, {
                      reservationDef: h[0],
                      hardwareDetail: c,
                      bPSULessModel: !1,
                      reservedHardwareDetail: m,
                    }),
                    v &&
                      (0, e.jsx)(Xn.pc, {
                        section: _,
                        reservationDef: h[0],
                        hardwareDetail: c,
                        reservedHardwareDetail: m,
                      }),
                    g &&
                      (g == null ? void 0 : g.allow_purchase_in_country) &&
                      (0, e.jsx)(Xn.bk, {
                        reservationDef: h[0],
                        hardwareDetail: g,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        function G_(a) {
          var t, n, i;
          if (a != null && a.bDepositRequired) {
            if (
              a.rgDepositPackageInfo &&
              ((t = a.rgDepositPackageInfo) == null ? void 0 : t.length) > 0 &&
              a.rgDepositPackageInfo.filter((o) => o.bVisible).length == 0 &&
              a != null &&
              a.rgReservationPackageInfo &&
              ((n = a == null ? void 0 : a.rgReservationPackageInfo) == null
                ? void 0
                : n.length) > 0 &&
              (a == null
                ? void 0
                : a.rgReservationPackageInfo.filter((o) => o.bVisible)
                    .length) == 0
            )
              return !1;
          } else if (
            a != null &&
            a.rgReservationPackageInfo &&
            ((i = a == null ? void 0 : a.rgReservationPackageInfo) == null
              ? void 0
              : i.length) > 0 &&
            (a == null
              ? void 0
              : a.rgReservationPackageInfo.filter((o) => o.bVisible).length) ==
              0
          )
            return !1;
          return !0;
        }
        var Oh = u(21035),
          So = u(72865),
          Ph = u(73371),
          $n = u.n(Ph),
          Ea = u(53041),
          Rh = u(10026),
          kh = u.n(Rh),
          Fh = u(19298),
          Uh = u(11996),
          Hh = u(19047),
          Eo = u(89926),
          zh = u(32545),
          es = u.n(zh);
        function Vh(a) {
          const { appID: t, classOverride: n, styleOverride: i } = a,
            [o, l] = (0, E.useState)(!1),
            r = (0, Gn.m)("GameHoverFollowButton"),
            { elDialogElement: d, fnShowLogonDialog: _ } = (0, Eo.l)(),
            c = (0, Uh.Fh)(t),
            { mutateAsync: g } = (0, Hh.L)(t, !c, void 0),
            h = async (v) => {
              v.preventDefault(),
                v.stopPropagation(),
                D.iA.logged_in
                  ? (l(!0), await g(), r.token.reason || l(!1))
                  : _();
            };
          return (0, e.jsxs)(Fh.Z, {
            className: (0, b.A)(es().FollowButton, n),
            onClick: h,
            style: i,
            children: [
              c ? (0, e.jsx)(It.pPV, {}) : (0, e.jsx)(It.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, b.A)(
                  es().FollowButtonText,
                  o && es().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, s.we)(
                  c ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              d,
            ],
          });
        }
        function Wh(a) {
          const { appid: t, color: n, bgcolor: i } = a,
            o = (0, So.n9)();
          return (0, e.jsx)(Vh, {
            appID: t,
            classOverride: (0, b.A)(
              $n().FollowGameButtonNotTop,
              kh().BBCodeFollowButton,
            ),
            styleOverride: { color: n, backgroundColor: i },
          });
        }
        function Qh(a) {
          const t = Number(a.args.appid);
          if (!t) return null;
          const n = (0, Ea.O)(a.args.color, "black"),
            i = (0, Ea.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(Wh, { appid: t, color: n, bgcolor: i });
        }
        var Yh = u(20681),
          Jh = u(18657),
          fo = u.n(Jh),
          Kh = u(63026);
        function qh(a) {
          const { clanAccountID: t, color: n, bgcolor: i } = a;
          (0, Yh.mx)();
          const [o, l] = E.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, b.A)(fo().BBCodeFollowButton, o && fo().isHovered),
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1),
            children: (0, e.jsx)(Kh.Q, {
              nCreatorAccountID: t,
              classOverride: $n().FollowGameButtonNotTop,
              styleOverride: { color: n, backgroundColor: i },
              followType: "group",
            }),
          });
        }
        function Zh(a) {
          const { event: t } = a.context,
            n =
              Number(a.args.groupid) ||
              (t == null ? void 0 : t.clanSteamID.GetAccountID());
          if (!n) return null;
          const i = (0, Ea.O)(a.args.color, "black"),
            o = (0, Ea.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(qh, { clanAccountID: n, color: i, bgcolor: o });
        }
        var Xh = u(83482),
          $h = u(44267),
          em = u(9202),
          xo = u.n(em);
        function tm(a) {
          const { appid: t, color: n, bgcolor: i } = a,
            o = (0, So.n9)(),
            l = (0, eo.$5)(t),
            r = (0, Xh.L3)(o);
          return (0, e.jsx)("div", {
            className: xo().WishlistHoverCtn,
            children: (0, e.jsx)($h.E, {
              snr: r,
              id: l,
              classOverride: (0, b.A)(
                $n().WishlistButtonNotTop,
                xo().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: n, backgroundColor: i },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function am(a) {
          const t = Number(a.args.appid);
          if (!t) return null;
          const n = (0, Ea.O)(a.args.color, "black"),
            i = (0, Ea.O)(a.args.bgcolor, "white");
          return (0, e.jsx)(tm, { appid: t, color: n, bgcolor: i });
        }
        let ts = null;
        function nm() {
          return (
            ts == null &&
              (ts = new Map([
                ["wishlist", { Constructor: am, autocloses: !1 }],
                ["followgroup", { Constructor: Zh, autocloses: !1 }],
              ])),
            ts
          );
        }
        var sm = u(37656),
          Ot = u(29868);
        function bo(a) {
          return a < 10 ? "0" + a : a;
        }
        function im(a) {
          const { giveawayid: t } = a,
            n = (0, sm.w)(t),
            {
              bLoadingGiveawayInfo: i,
              winner_count: o,
              closed: l,
              seconds_until_drawing: r,
            } = n;
          return i
            ? null
            : (0, e.jsxs)("div", {
                className: Ot.countdownCtn,
                children: [
                  !!l &&
                    (0, e.jsx)("div", {
                      className: Ot.Closed,
                      children:
                        o > 0
                          ? (0, s.we)("#Giveaway_Closed", (0, Ct.D)(o))
                          : (0, s.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !l &&
                    (0, e.jsxs)(E.Fragment, {
                      children: [
                        r <= 0
                          ? (0, e.jsxs)("div", {
                              className: Ot.Throbber,
                              children: [
                                (0, e.jsx)(z.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, s.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Ot.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Ot.CountDownTime,
                                  children:
                                    bo(Math.floor(r / 60)) + ":" + bo(r % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Ot.CountDownText,
                                  children: [
                                    (0, s.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, s.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        o > 0 &&
                          (0, e.jsxs)("div", {
                            className: Ot.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Ot.WinnerCount,
                                children: (0, Ct.D)(o),
                              }),
                              (0, e.jsx)("div", {
                                className: Ot.WinnerText,
                                children: (0, s.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var as = u(57646);
        function om(a) {
          const t = Number(a.args.packageid);
          return t
            ? (0, e.jsx)(as.eF, {
                packageID: t,
                display_style: (0, as._w)(a.args.display),
              })
            : null;
        }
        function lm(a) {
          const t = Number(a.args.packageid),
            n = Number(a.args.compareid);
          return !t || !n
            ? null
            : (0, e.jsx)(as.hJ, { packageID: t, compareID: n });
        }
        var rm = u(88245),
          dm = u(35702),
          cm = u(39256),
          um = u(4720),
          hm = u(32630),
          mm = u(57810),
          _m = u(93691),
          jo = u(81416);
        function pm(a) {
          const { eventModel: t, nEventBadgeID: n } = a,
            i = (0, dm.fy)(n);
          if ((i == null ? void 0 : i.level) > 0) {
            let o = i.level;
            if (t != null && t.BHasSaleEnabled()) {
              const l = t.GetSaleSectionsByType("badge_progress");
              if ((l == null ? void 0 : l.length) == 1) {
                const r = l[0].badge_progress;
                if (
                  (r == null ? void 0 : r.event_badgeid) == n &&
                  r != null &&
                  r.granted_by_discovery_queue
                ) {
                  const d = r.levels[r.levels.length - 1].level;
                  return (0, e.jsx)(vm, {
                    eventModel: t,
                    nBadgeLevel: o,
                    nMaxLevel: d,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Ct.D)(o),
            });
          }
          return null;
        }
        function vm(a) {
          const { eventModel: t, nBadgeLevel: n, nMaxLevel: i } = a,
            o = E.useMemo(() => {
              const c = t
                .GetSaleSections()
                .filter((g) => g.section_type == "discoveryqueue");
              return (c == null ? void 0 : c.length) > 0 ? c[0] : null;
            }, [t]),
            { storePageFilter: l, eStoreDiscoveryQueueType: r } = E.useMemo(
              () => (0, hm.lx)(t, o),
              [t, o],
            ),
            d = (0, mm.Uf)(r, l),
            _ = Math.min(n + d, i);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Ct.D)(_),
          });
        }
        function gm(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, Ve.j$)(a.args, "eventid"));
          return D.iA.logged_in && n
            ? (0, e.jsx)(pm, { nEventBadgeID: n, eventModel: t })
            : null;
        }
        function Sm(a) {
          const { nDoorIndex: t, children: n } = a,
            i = (0, Zn.OM)(t),
            { fnOpenDoor: o } = (0, Zn.OC)(),
            [l, r] = E.useState(!1),
            [d, _] = E.useState(!1),
            { elDialogElement: c, fnShowLogonDialog: g } = (0, Eo.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(p.$n, {
                disabled: i,
                onClick: (h) => {
                  l ||
                    (D.iA.logged_in
                      ? (r(!0),
                        o(t, !0, null, !1)
                          .then((v) => {
                            v || _(!0), r(!1);
                          })
                          .catch(() => {
                            _(!0), r(!1);
                          }))
                      : g());
                },
                children: d
                  ? (0, e.jsx)("div", {
                      children: (0, s.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!l && (0, e.jsx)(z.t, { size: "small" }),
                        !!i && (0, e.jsx)(It.Jlk, {}),
                        n,
                      ],
                    }),
              }),
              c,
            ],
          });
        }
        function Em(a) {
          const t = Number.parseInt((0, Ve.j$)(a.args)) || 0;
          return t >= 0 && t < 32
            ? (0, e.jsx)(Sm, { nDoorIndex: t, children: a.children })
            : null;
        }
        const fm = (0, Re.y)(_m.H);
        function xm(a) {
          var t, n;
          const i = Number.parseInt((0, Ve.j$)(a.args)),
            { event: o, showErrorInfo: l } = a.context;
          if (i) {
            const r =
              (n =
                (t = o == null ? void 0 : o.jsondata) == null
                  ? void 0
                  : t.sale_sections) == null
                ? void 0
                : n.findIndex((d) => d.unique_id == i);
            if (r >= 0) {
              const d = o.GetDayIndexFromEventStart();
              return (0, e.jsx)(yt.Cs, {
                location: l ? yt.HY : yt.bs,
                children: (0, e.jsx)(fm, {
                  event: o,
                  section: o.jsondata.sale_sections[r],
                  activeTab: new um.y(null, d),
                  language: a.language,
                  nSaleDayIndex: d,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: l
                    ? jo.S.EPreviewMode_Enabled
                    : jo.S.EPreviewMode_Disabled,
                }),
              });
            } else if (l)
              return (0, e.jsxs)("div", {
                className: cm.ErrorDiv,
                children: ["Error could not find sale section ", i],
              });
          }
          return null;
        }
        let ns = null;
        function bm() {
          return (
            ns == null &&
              (ns = new Map([
                ...Array.from(nm().entries()),
                [
                  "itemdef",
                  {
                    Constructor: jm,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: Qh, autocloses: !1 }],
                ["deckcompatcount", { Constructor: Cm, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: wm, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: Gm, autocloses: !1 }],
                ["price", { Constructor: om, autocloses: !1 }],
                ["pricesavings", { Constructor: lm, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: Dm, autocloses: !1 }],
                ["chooseaccount", { Constructor: Tm, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: gm, autocloses: !1 }],
                ["optindoorquest", { Constructor: Em, autocloses: !1 }],
                ["classname", { Constructor: Im, autocloses: !1 }],
                ["localize", { Constructor: Am, autocloses: !1 }],
                ["salesection", { Constructor: xm, autocloses: !1 }],
                ["reservationbutton", { Constructor: Lm, autocloses: !1 }],
              ])),
            ns
          );
        }
        function jm(a) {
          const { event: t } = a.context,
            n = Number.parseInt((0, Ve.j$)(a.args, "appid")),
            i = Number.parseInt((0, Ve.j$)(a.args, "itemdefid")),
            o = Number.parseInt((0, Ve.j$)(a.args, "maxquantity")),
            l = (0, Ve.j$)(a.args, "calltoaction");
          return !(0, rm.gS)(n, i, !1) || !t
            ? (0, e.jsx)(z.t, {
                size: "small",
                position: "center",
                string: (0, s.we)("#Loading"),
              })
            : (0, e.jsx)(Oh.f, {
                language: a.language,
                clanAccountID: t.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: n, nItemDefID: i, max_quantity: o },
                strCallToAction: l,
              });
        }
        function Cm(a) {
          const t = Ih();
          if (!t) return (0, e.jsx)(z.t, { size: "small" });
          const n = Number.parseInt((0, Ve.j$)(a.args));
          return (0, e.jsx)("span", { children: (0, Ct.D)(Number(Ah(t, n))) });
        }
        function wm(a) {
          var t, n, i, o;
          const l = (0, Gh.j)(D.iA.accountid, "library");
          if (!l) return (0, e.jsx)(z.t, { size: "small" });
          const r = Number.parseInt((0, Ve.j$)(a.args));
          let d = ((t = l.verifiedList) == null ? void 0 : t.length) || 0;
          switch (r) {
            case Ua.sd:
              d = ((n = l.playableList) == null ? void 0 : n.length) || 0;
              break;
            case Ua.V8:
              d = ((i = l.unsupportedList) == null ? void 0 : i.length) || 0;
              break;
            case Ua.YX:
              d = ((o = l.unknownList) == null ? void 0 : o.length) || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Ct.D)(Number(d)) });
        }
        function Dm(a) {
          const t = Number.parseInt((0, Ve.j$)(a.args)),
            n =
              "hide" in a.args && !!Number.parseInt((0, Ve.j$)(a.args, "hide"));
          return t >= 0
            ? (0, e.jsx)(ym, { nDoorIndex: t, bHide: n, children: a.children })
            : null;
        }
        function ym(a) {
          const { nDoorIndex: t, bHide: n, children: i } = a,
            o = (0, Zn.OM)(t);
          return o == null
            ? null
            : (o && !n) || (!o && n)
              ? (0, e.jsx)(e.Fragment, { children: a.children })
              : null;
        }
        function Tm(a) {
          if (D.iA.logged_in) {
            const t = Number.parseInt((0, Ve.j$)(a.args)),
              n = Number.parseInt((0, Ve.j$)(a.args, "mod"));
            if (n > 0 && t < n && D.iA.accountid % n == t) return a.children;
          }
          return null;
        }
        function Im(a) {
          const t = (0, Ve.j$)(a.args);
          return (t == null ? void 0 : t.trim().length) > 0
            ? (0, e.jsx)("div", { className: t.trim(), children: a.children })
            : (0, e.jsx)(e.Fragment, { children: a.children });
        }
        function Am(a) {
          return (0, e.jsx)("span", {
            className: Lh.LocalizeBlock,
            children: (0, s.oW)(
              a.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function Gm(a) {
          let t = (0, Ve.j$)(a.args);
          return t
            ? (0, e.jsx)(im, { giveawayid: t })
            : (0, e.jsx)(E.Fragment, {});
        }
        function Lm(a) {
          const { showErrorInfo: t, event: n } = a.context,
            i = Number.parseInt((0, Ve.j$)(a.args)),
            o = E.useMemo(() => {
              var l;
              if (n)
                return (l = n.jsondata.sale_sections) == null
                  ? void 0
                  : l.find((r) => {
                      var d, _;
                      return (
                        r.section_type == "vo_internal" &&
                        (((d = r.internal_section_data) == null
                          ? void 0
                          : d.internal_type) == "reservation_widget" ||
                          ((_ = r.internal_section_data) == null
                            ? void 0
                            : _.internal_type) == "while_supplies_last")
                      );
                    });
            }, [n]);
          if (i && o) {
            const l = Number.parseInt((0, Ve.j$)(a.args, "depositpackageid")),
              r = Number.parseInt((0, Ve.j$)(a.args, "psulesspackageid")),
              d = (0, Ve.j$)(a.args, "out_of_stock_override"),
              _ = (0, Ve.j$)(a.args, "delivery_override"),
              c = (0, Ve.j$)(a.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(Mh, {
              section: o,
              reservationPackageID: i,
              depositPackageID: l,
              psuLessPackageID: r,
              strOutOfStockOverride: d,
              strDeliveryOverride: c || _,
              bDeliveryOverrideOnlyIfOutOfStock: !!c,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var Bm = u(46457),
          Nm = u(35395),
          L_ = u(83492),
          Mm = u(90783),
          Om = u(39567),
          Pm = Object.defineProperty,
          Rm = Object.getOwnPropertyDescriptor,
          km = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Rm(t, n) : t, l = a.length - 1, r;
              l >= 0;
              l--
            )
              (r = a[l]) && (o = (i ? r(t, n, o) : r(o)) || o);
            return i && o && Pm(t, n, o), o;
          };
        let ss = class extends vn.mn {
          constructor() {
            super(...arguments), (this.state = { bLoading: !0 });
          }
          GetRedirectRender() {
            return (0, e.jsx)(Re.rd, {
              push: !0,
              to: ie.GY.Edit(
                this.props.match.params.appid_or_vanity_str,
                this.state.redirectToGIDEvent,
              ),
            });
          }
          render() {
            let a = super.render();
            return a != null
              ? a
              : (0, e.jsx)(vo, {
                  appid: wt.UF.APPID,
                  appid_or_vanity_str:
                    this.props.match.params.appid_or_vanity_str,
                  gid: "",
                  clanSteamID: this.m_clanSteamID,
                });
          }
        };
        ss = km([R.PA], ss);
        const Fm = (0, Ya.L)(Um);
        function Um(a) {
          const t = M.mh.GetEditModel(),
            n = t.GetEventModel(),
            [i, o] = E.useState();
          if ((E.useEffect(() => ti(n, o), [n]), i))
            switch (i) {
              case "clone":
                return (0, e.jsx)(Re.rd, {
                  push: !0,
                  to: ie.GY.Edit(a.match.params.appid_or_vanity_str, ""),
                });
              case "edit":
                return (0, e.jsx)(he.OG, {
                  eventModel: n,
                  route: he.PH.k_eCommunityEdit,
                });
              case "view":
                return n.BIsVisibleEvent()
                  ? (0, e.jsx)(he.OG, { eventModel: n, route: he.PH.k_eView })
                  : (0, e.jsx)(he.OG, {
                      eventModel: n,
                      route: he.PH.k_eCommunityPreview,
                    });
              default:
                console.log(
                  "EventCloneLandingInternal - Unexpected Case - " + i,
                );
            }
          return (0, e.jsx)(he.tj, {
            eventModel: t.GetEventModel(),
            route: he.PH.k_eCommunityAdminPage,
            children: (0, s.we)("#EventDisplay_ReturnToDashboard"),
          });
        }
        function Hm(a) {
          const [t, n] = E.useState(!0),
            i = (0, Om.vb)(D.TS.LANGUAGE);
          return (
            E.useEffect(() => {
              jh.Vw.Init(new bh.D(D.TS.WEBAPI_BASE_URL)),
                ue.O3.Init(),
                M.mh.Init(),
                Promise.all([ft.KN.InitGlobal()]).then(() => n(!1));
            }, []),
            t || !i
              ? (0, e.jsx)(z.t, {
                  position: "center",
                  size: "medium",
                  string: (0, s.we)("#Loading"),
                })
              : (0, e.jsx)(xe.tH, {
                  children: (0, e.jsx)(Bm.d3, {
                    dictionary: bm(),
                    children: (0, e.jsxs)(Nm.I.Provider, {
                      value: { bCanUseLink: !0 },
                      children: [
                        (0, e.jsx)(Qt.EB, {}),
                        (0, e.jsxs)(Re.dO, {
                          children: [
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.Home(":appid_or_vanity_str"),
                              component: ii,
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.List(":appid_or_vanity_str"),
                              component: ii,
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.Create(":appid_or_vanity_str"),
                              component: Fe.A9,
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.Category(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (o) =>
                                (0, E.createElement)(Fe.A9, {
                                  ...o,
                                  key: o.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.EditRedirectToCategory(
                                ":appid_or_vanity_str",
                              ),
                              render: (o) => (0, e.jsx)(Eh, { ...o }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.Edit(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (o) =>
                                (0, E.createElement)(qn, {
                                  ...o,
                                  key: o.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.Clone(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (o) =>
                                (0, E.createElement)(Fm, {
                                  ...o,
                                  key: o.match.params.gid,
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.Publish(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (o) =>
                                (0, E.createElement)(qn, {
                                  ...o,
                                  key: o.match.params.gid,
                                  bInitiatePublishDialog: !0,
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.PreviewSale(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (o) =>
                                (0, E.createElement)(Tn, {
                                  ...o,
                                  key: o.match.params.gid,
                                  mode: "previewsale",
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.Preview(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)?",
                              ),
                              render: (o) =>
                                (0, E.createElement)(Tn, {
                                  ...o,
                                  key: o.match.params.gid,
                                  mode: "preview",
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.View(
                                ":appid_or_vanity_str",
                                ":gid(\\d+)",
                              ),
                              render: (o) =>
                                (0, E.createElement)(Tn, {
                                  ...o,
                                  key: o.match.params.gid,
                                  mode: "view",
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.Migrate(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (o) =>
                                (0, E.createElement)(ss, {
                                  ...o,
                                  key: o.match.params.oldAnnouncementGID,
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.MigrateCategory(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (o) =>
                                (0, E.createElement)(vn.pl, {
                                  ...o,
                                  key: o.match.params.oldAnnouncementGID,
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.ViewOldAnnouncement(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (o) =>
                                (0, E.createElement)(vn.Io, {
                                  ...o,
                                  key: o.match.params.oldAnnouncementGID,
                                  bClearDirty: !0,
                                  bPreview: !1,
                                }),
                            }),
                            (0, e.jsx)(Re.qh, {
                              exact: !0,
                              path: ie.GY.PreviewOldAnnouncement(
                                ":appid_or_vanity_str",
                                ":oldAnnouncementGID(\\d+)",
                              ),
                              render: (o) =>
                                (0, E.createElement)(vn.Io, {
                                  ...o,
                                  key: o.match.params.oldAnnouncementGID,
                                  bClearDirty: !0,
                                  bPreview: !0,
                                }),
                            }),
                            (0, e.jsx)(Re.qh, { component: Mm.a }),
                          ],
                        }),
                      ],
                    }),
                  }),
                })
          );
        }
      },
      6864: (Y, ot, u) => {
        "use strict";
        u.d(ot, { p: () => p, s: () => ne });
        var e = u(7850),
          E = u(90626),
          ie = u(19316),
          M = u(95695),
          Fe = u.n(M),
          L = u(85143),
          Ee = u(11243),
          le = u(18210),
          R = u(91126),
          _e = u.n(R),
          ae = u(56585),
          W = u(99412),
          X = u(35766),
          k = u(85599),
          J = u(36118);
        function ne(me) {
          var Q, f;
          const { editModel: s } = me,
            [Qe, D] = E.useState(W.xPp),
            [U, B] = E.useState(!1),
            [K, ue] = E.useState(null),
            pe = (Xe) => {
              const ce = Xe.target.value;
              if (ce === "all") D(W.xPp);
              else {
                const I = (0, W.sfN)(ce);
                D(I);
              }
            },
            Ie = s.GetClanSteamID(),
            F = s.GetGID(),
            z = (0, ae.Wj)(Ie, F),
            [, Ue] = E.useReducer((Xe) => Xe + 1, 0),
            Ge =
              z.isSuccess &&
              (Q = z.data) != null &&
              Q.crowdin_project_id &&
              (f = z.data) != null &&
              f.crowdin_file_id
                ? `https://valve.crowdin.com/editor/${z.data.crowdin_project_id}/${z.data.crowdin_file_id}`
                : null,
            Pe = (Xe) => {
              s.SetPushSourceToCrowdInAutomatically(Xe), Ue();
            },
            Ke = (0, ae.IW)(Ie.ConvertTo64BitString(), F, Qe),
            lt = () => {
              B(!0),
                Ke.mutateAsync()
                  .then(() => window.location.reload())
                  .catch((Xe) => {
                    ue(Xe.toString()), B(!1);
                  })
                  .then(() => {
                    ue(null);
                  });
            };
          return z.isLoading
            ? null
            : (0, e.jsxs)(L.E, {
                clanSteamID: me.editModel.GetClanSteamID(),
                children: [
                  (0, e.jsx)(X.mt, {
                    active: U,
                    children: (0, e.jsx)(k.t, {}),
                  }),
                  (0, e.jsxs)("div", {
                    className: _e().ValveCrowdInSyncCtn,
                    children: [
                      (0, e.jsx)(ie.J0, {
                        value: s.BPushUpdatesToCrowdInAutomatically(),
                        onChange: Pe,
                      }),
                      (0, e.jsxs)("div", {
                        className: _e().ValveCrowdInSyncLabel,
                        children: [
                          (0, le.we)(
                            "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                          ),
                          "\xA0(",
                          Ge
                            ? (0, e.jsx)("a", { href: Ge, children: Ge })
                            : (0, le.we)(
                                "#EventEditor_Localization_NotMappedToCrowdIn",
                              ),
                          ")",
                          (0, e.jsx)(Ee.o, {
                            tooltip: (0, le.we)(
                              "#EventEditor_Localization_Tooltip",
                            ),
                            className: M.tooltip_Ctn,
                          }),
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)("span", {
                            children: (0, le.we)(
                              "#EventEditor_Localization_RememberToSave",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)(p, { onChange: pe }),
                      (0, e.jsx)("div", {
                        className: Fe().EditPreviewButton,
                        onClick: lt,
                        children: (0, le.we)(
                          "#EventEditor_Localization_FetchLocalization",
                        ),
                      }),
                    ],
                  }),
                  K &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("div", {
                        className: _e().SyncPanelError,
                        children: [(0, e.jsx)(J.X, {}), " ", K],
                      }),
                    }),
                ],
              });
        }
        function p(me) {
          const Q = (0, le.O9)(!1);
          let f = Array.from(Q.entries());
          f.sort((Qe, D) => Qe[1].localeCompare(D[1]));
          const s = f.map(([Qe, D]) =>
            Qe !== "english"
              ? (0, e.jsx)("option", { value: Qe, children: D }, Qe)
              : "",
          );
          return (0, e.jsxs)("select", {
            onChange: me.onChange,
            children: [
              (0, e.jsx)("option", {
                value: "all",
                children: (0, le.we)("#EventEditor_Localization_AllLanguages"),
              }),
              s,
            ],
          });
        }
      },
      37656: (Y, ot, u) => {
        "use strict";
        u.d(ot, { w: () => D });
        var e = u(41735),
          E = u.n(e),
          ie = u(14947),
          M = u(65946),
          Fe = u(90626),
          L = u(27066),
          Ee = u(8323),
          le = u(54963),
          R = u(3166),
          _e = Object.defineProperty,
          ae = Object.getOwnPropertyDescriptor,
          W = (U, B, K) =>
            B in U
              ? _e(U, B, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: K,
                })
              : (U[B] = K),
          X = (U, B, K, ue) => {
            for (
              var pe = ue > 1 ? void 0 : ue ? ae(B, K) : B,
                Ie = U.length - 1,
                F;
              Ie >= 0;
              Ie--
            )
              (F = U[Ie]) && (pe = (ue ? F(B, K, pe) : F(pe)) || pe);
            return ue && pe && _e(B, K, pe), pe;
          },
          k = (U, B, K) => W(U, typeof B != "symbol" ? B + "" : B, K);
        const J = class Co {
          constructor() {
            k(this, "giveaway_id"),
              k(this, "seconds_until_drawing"),
              k(this, "rtime_start"),
              k(this, "rtime_end"),
              k(this, "closed"),
              k(this, "winner_count"),
              (0, ie.Gn)(this);
          }
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const B = new Co();
            return (
              (B.giveaway_id = this.giveaway_id),
              (B.seconds_until_drawing = this.seconds_until_drawing),
              (B.rtime_start = this.rtime_start),
              (B.rtime_end = this.rtime_end),
              (B.closed = this.closed),
              (B.winner_count = this.winner_count),
              B
            );
          }
        };
        X([ie.sH], J.prototype, "giveaway_id", 2),
          X([ie.sH], J.prototype, "seconds_until_drawing", 2),
          X([ie.sH], J.prototype, "rtime_start", 2),
          X([ie.sH], J.prototype, "rtime_end", 2),
          X([ie.sH], J.prototype, "closed", 2),
          X([ie.sH], J.prototype, "winner_count", 2);
        let ne = J;
        const p = class fa {
          constructor() {
            k(this, "m_mapGiveawayIDToNextDrawInfo", new Map()),
              k(this, "m_mapGiveawayIDAndInstanceToNextDrawInfo", new Map()),
              k(this, "m_bLoadedFromConfig", !1),
              k(this, "m_mapNextDrawChangeCallback", new Map()),
              (0, ie.Gn)(this);
          }
          GetKey(B, K) {
            return B + "_" + K;
          }
          GetInfoByInstance(B, K) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(B, K),
            );
          }
          GetNextDrawChangeCallback(B) {
            return (
              this.m_mapNextDrawChangeCallback.has(B) ||
                this.m_mapNextDrawChangeCallback.set(B, new Ee.lu()),
              this.m_mapNextDrawChangeCallback.get(B)
            );
          }
          CopyToGiveaway(B, K) {
            K.closed != B.closed && (K.closed = B.closed),
              K.giveaway_id != B.giveaway_id && (K.giveaway_id = B.giveaway_id),
              K.rtime_start != B.rtime_start && (K.rtime_start = B.rtime_start),
              K.rtime_end != B.rtime_end && (K.rtime_end = B.rtime_end),
              K.winner_count != B.winner_count &&
                (K.winner_count = B.winner_count),
              K.seconds_until_drawing != B.seconds_until_drawing &&
                (K.seconds_until_drawing = B.seconds_until_drawing);
          }
          async ReloadGiveaway(B, K) {
            if (!B) return null;
            let ue = R.TS.STORE_BASE_URL + "prizes/nextdraw/" + B,
              pe = null,
              Ie = { origin: self.origin };
            return (
              (pe = await E().get(ue, { params: Ie })),
              (0, ie.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(B) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(B, new ne()),
                  this.CopyToGiveaway(
                    pe.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(B),
                  ),
                  K !== void 0)
                ) {
                  const F = this.GetKey(B, K);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(F) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      F,
                      new ne(),
                    ),
                    this.CopyToGiveaway(
                      pe.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(F),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(B).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(B),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(B)
            );
          }
          static Get() {
            return (
              fa.s_Singleton ||
                ((fa.s_Singleton = new fa()), fa.s_Singleton.Init()),
              fa.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let B = (0, R.Tc)("giveawaynextdraw", "application_config");
              if (B && B.giveaway_id) {
                let K = new ne();
                this.CopyToGiveaway(B, K),
                  this.m_mapGiveawayIDToNextDrawInfo.set(B.giveaway_id, K);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        k(p, "s_Singleton"),
          X([ie.sH], p.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          X([ie.XI], p.prototype, "CopyToGiveaway", 1);
        let me = p;
        const Q = class is {
          constructor() {
            k(this, "m_intervalID"),
              k(this, "m_intervalCountDownID"),
              k(this, "m_myInstanceNumber", 0),
              (this.m_myInstanceNumber = is.s_GlobalInstance),
              (is.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(B, K) {
            if ((this.ClearRefreshInterval(), !B.closed)) {
              let ue =
                B.seconds_until_drawing <= 0 && B.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(K, ue);
            }
          }
          SetupCountDown(B, K) {
            B > 0 && (this.m_intervalCountDownID = window.setInterval(K, 1e3));
          }
        };
        k(Q, "s_GlobalInstance", 0),
          X([L.o], Q.prototype, "ClearRefreshInterval", 1),
          X([L.o], Q.prototype, "ClearCountDown", 1),
          X([L.o], Q.prototype, "SetupRefreshDataInterval", 1),
          X([L.o], Q.prototype, "SetupCountDown", 1);
        let f = Q;
        function s(U, B) {
          const K = me.Get().GetInfoByInstance(U, B.m_myInstanceNumber);
          (K.seconds_until_drawing -= 1),
            K.seconds_until_drawing == 0 && B.ClearCountDown();
        }
        function Qe(U, B) {
          const K = me.Get().GetInfoByInstance(U, B.m_myInstanceNumber);
          K &&
            K.BIsValid() &&
            K.seconds_until_drawing <= 0 &&
            !K.closed &&
            (B.ClearCountDown(),
            me
              .Get()
              .ReloadGiveaway(U, B.m_myInstanceNumber)
              .then((ue) => {
                B.SetupCountDown(ue.seconds_until_drawing, () => s(U, B));
              }));
        }
        function D(U) {
          const [B] = (0, Fe.useState)(new f()),
            K = (0, le.CH)();
          (0, Fe.useEffect)(
            () => (
              me
                .Get()
                .ReloadGiveaway(U, B.m_myInstanceNumber)
                .then((z) => {
                  B.SetupRefreshDataInterval(z, () => Qe(U, B)),
                    B.SetupCountDown(z.seconds_until_drawing, () => s(U, B)),
                    K();
                }),
              () => {
                B.ClearRefreshInterval(), B.ClearCountDown();
              }
            ),
            [B, U, K],
          );
          const ue = me.Get().GetInfoByInstance(U, B.m_myInstanceNumber),
            [pe, Ie, F] = (0, M.q3)(() => [
              ue == null ? void 0 : ue.winner_count,
              ue == null ? void 0 : ue.closed,
              ue == null ? void 0 : ue.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !ue || ue.giveaway_id == null || !ue.BStarted() || pe === void 0,
            winner_count: pe,
            closed: Ie,
            seconds_until_drawing: F,
          };
        }
      },
      1885: (Y, ot, u) => {
        "use strict";
        u.d(ot, { jl: () => lt, Bv: () => Ke });
        var e = u(7850),
          E = u(90626),
          ie = u(54963),
          M = u(41735),
          Fe = u.n(M),
          L = u(19316),
          Ee = u(18210),
          le = u(91640),
          R = u.n(le),
          _e = u(3166),
          ae = u(76559),
          W = u(82734),
          X = u(14947),
          k = u(35413),
          J = u(71742),
          ne = u(34592),
          p = Object.defineProperty,
          me = Object.getOwnPropertyDescriptor,
          Q = (ce, I, V) =>
            I in ce
              ? p(ce, I, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: V,
                })
              : (ce[I] = V),
          f = (ce, I, V, Z) => {
            for (
              var Oe = Z > 1 ? void 0 : Z ? me(I, V) : I,
                qe = ce.length - 1,
                tt;
              qe >= 0;
              qe--
            )
              (tt = ce[qe]) && (Oe = (Z ? tt(I, V, Oe) : tt(Oe)) || Oe);
            return Z && Oe && p(I, V, Oe), Oe;
          },
          s = (ce, I, V) => Q(ce, typeof I != "symbol" ? I + "" : I, V);
        class Qe {
          constructor() {
            s(this, "m_mapProfiles", new Map()),
              s(this, "m_mapProfilesLoading", new Map()),
              (0, X.Gn)(this);
          }
          async LoadProfiles(I, V) {
            (0, J.wT)(
              I.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let Z = I.filter(
              (He) =>
                !this.m_mapProfiles.has(He) &&
                !this.m_mapProfilesLoading.has(He),
            );
            if (Z.length == 0) return this.m_mapProfilesLoading.get(I[0]);
            let Oe = _e.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              qe = Fe().get(Oe, {
                params: { steamids: Z.join(",") },
                withCredentials: !0,
                cancelToken: V == null ? void 0 : V.token,
              });
            Z.forEach((He) => this.m_mapProfilesLoading.set(He, qe));
            let tt = await qe;
            tt.data &&
              tt.status == 200 &&
              tt.data.forEach((He) => {
                (He.avatar_hash = He.avatar_url),
                  (He.avatar_url_medium = (0, k.t)(He.avatar_url, "medium")),
                  (He.avatar_url_full = (0, k.t)(He.avatar_url, "full")),
                  (He.avatar_url = (0, k.t)(He.avatar_url)),
                  this.m_mapProfiles.set(He.steamid, He),
                  this.m_mapProfilesLoading.delete(He.steamid);
              });
          }
          GetProfile(I) {
            return this.m_mapProfiles.get(I);
          }
          GetProfileByAccountID(I) {
            return this.m_mapProfiles.get(
              ae.b.InitFromAccountID(I).ConvertTo64BitString(),
            );
          }
          GetProfileBySteamID(I) {
            return this.m_mapProfiles.get(I.ConvertTo64BitString());
          }
          BHasProfile(I) {
            return this.m_mapProfiles.has(I);
          }
          BHasProfileByAccountID(I) {
            return this.m_mapProfiles.has(
              ae.b.InitFromAccountID(I).ConvertTo64BitString(),
            );
          }
          BHasProfileBySteamID(I) {
            return this.m_mapProfiles.has(I.ConvertTo64BitString());
          }
          BHasAllProfilesBySteamID(I) {
            return !I.some((V) => !this.BHasProfileBySteamID(V));
          }
          GetProfileURLBySteamID(I) {
            const V = this.GetProfileBySteamID(I);
            return V && V.profile_url
              ? _e.TS.COMMUNITY_BASE_URL + "id/" + V.profile_url
              : _e.TS.COMMUNITY_BASE_URL +
                  "profiles/" +
                  I.ConvertTo64BitString();
          }
          GetPersonaNameBySteamID(I) {
            const V = this.GetProfileBySteamID(I);
            return V && V.persona_name ? V.persona_name : "";
          }
        }
        f([X.sH], Qe.prototype, "m_mapProfiles", 2);
        const D = new Qe();
        function U(ce) {
          const I = React.useMemo(
              () =>
                ce ? (typeof ce == "string" ? new CSteamID(ce) : ce) : null,
              [ce],
            ),
            [V, Z] = useState(!!I && !D.BHasProfileBySteamID(I));
          useEffect(() => {
            const qe = axios.CancelToken.source();
            return (
              I &&
                !D.BHasProfileBySteamID(I) &&
                D.LoadProfiles([I.ConvertTo64BitString()])
                  .catch((tt) => {
                    const He = GetMsgAndErrorCodeFromResponse(tt);
                    console.error(
                      "useUserProfile failed to load profile for " +
                        I.ConvertTo64BitString() +
                        ": " +
                        He.strErrorMsg,
                      He,
                    );
                  })
                  .finally(() => {
                    qe.token.reason || Z(!1);
                  }),
              () => qe.cancel("unmounting useUserProfile")
            );
          }, [ce]);
          const Oe = !!I && D.GetProfileBySteamID(I);
          return [V, Oe];
        }
        function B(ce) {
          const I = React.useMemo(
            () => (ce ? CSteamID.InitFromAccountID(ce) : null),
            [ce],
          );
          return U(I);
        }
        var K = u(72604),
          ue = u(36118),
          pe = u(41301),
          Ie = u(24660),
          F = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          Ue = (ce, I, V) =>
            I in ce
              ? F(ce, I, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: V,
                })
              : (ce[I] = V),
          Ge = (ce, I, V, Z) => {
            for (
              var Oe = Z > 1 ? void 0 : Z ? z(I, V) : I, qe = ce.length - 1, tt;
              qe >= 0;
              qe--
            )
              (tt = ce[qe]) && (Oe = (Z ? tt(I, V, Oe) : tt(Oe)) || Oe);
            return Z && Oe && F(I, V, Oe), Oe;
          },
          Pe = (ce, I, V) => Ue(ce, typeof I != "symbol" ? I + "" : I, V);
        class Ke extends E.Component {
          constructor() {
            super(...arguments),
              Pe(this, "state", {
                invite_token: "",
                input_search: "",
                friend_code_copied: !1,
                invite_copied: !1,
              });
          }
          async componentDidMount() {
            const I = await Fe().get(
              _e.TS.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: (0, _e.KC)() } },
            );
            if (I && I.data && I.data.tokens) {
              const V = I.data.tokens.filter((Z) => Z.valid);
              V.length
                ? this.setState({ invite_token: V[0].invite_token })
                : this.OnCreateInviteLink();
            } else this.OnCreateInviteLink();
          }
          async OnCreateInviteLink() {
            const I = new FormData();
            I.append("sessionid", (0, _e.KC)()),
              I.append("steamid_user", _e.iA.steamid),
              I.append("duration", (720 * 60 * 60).toString());
            const V = await Fe().post(
              _e.TS.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              I,
            );
            V &&
              V.data &&
              V.data.invite &&
              this.setState({ invite_token: V.data.invite.invite_token });
          }
          OnCopy(I, V) {
            I === "friend_code" &&
              (this.setState({ friend_code_copied: !0 }),
              setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
              I === "invite" &&
                (this.setState({ invite_copied: !0 }),
                setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
              (0, W.OG)(V);
          }
          async OnAddFriend(I) {
            const V = new FormData();
            V.append("sessionID", (0, _e.KC)()),
              V.append("steamid", I),
              V.append("accept_invite", "0");
            try {
              const Z = await Fe().post(
                _e.TS.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                V,
              );
              return Z && Z.data && Z.data.success == K.R;
            } catch {
              return !1;
            }
          }
          OnSearchChange(I) {
            this.setState({ input_search: I.target.value });
          }
          OnSearchKeyDown(I) {
            I.keyCode === pe.wd && this.OnSearchSubmit();
          }
          OnSearchSubmit() {
            window.open(
              _e.TS.COMMUNITY_BASE_URL +
                "search/users/#text=" +
                encodeURIComponent(this.state.input_search),
              "_self",
            );
          }
          render() {
            const I = _e.iA.short_url + "/" + this.state.invite_token;
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: R().HeaderBlock,
                  children: (0, Ee.we)("#ManageFriends_AddAFriend"),
                }),
                (0, e.jsxs)("div", {
                  className: R().Background,
                  children: [
                    (0, e.jsx)("h1", {
                      className: R().Heading,
                      children: (0, Ee.we)("#ManageFriends_YourFriendCode"),
                    }),
                    (0, e.jsxs)("div", {
                      className: R().CopyContainer,
                      children: [
                        (0, e.jsx)("h1", {
                          className: R().Text,
                          children: _e.iA.accountid,
                        }),
                        (0, e.jsx)(L.jn, {
                          autoFocus: !0,
                          className: R().Button,
                          onClick: () =>
                            this.OnCopy("friend_code", String(_e.iA.accountid)),
                          children: this.state.friend_code_copied
                            ? (0, Ee.we)("#ManageFriends_Copied")
                            : (0, Ee.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, e.jsx)("p", {
                      className: R().Body,
                      children: (0, Ee.we)("#ManageFriends_EnterFriendCode"),
                    }),
                    (0, e.jsx)(lt, {
                      onButtonClick: this.OnAddFriend,
                      buttonText: (0, Ee.we)("#ManageFriends_SendInvite"),
                      bDisableForSelf: !0,
                      bDisableForFriends: !0,
                      bShowStatus: !0,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: R().DimBackground,
                  children: [
                    (0, e.jsx)("h1", {
                      className: R().Heading,
                      children: (0, Ee.we)("#ManageFriends_OrSendQuickInvite"),
                    }),
                    (0, e.jsx)("p", {
                      className: R().Body,
                      children: (0, Ee.we)(
                        "#ManageFriends_QuickInviteDescription",
                      ),
                    }),
                    (0, e.jsx)("p", {
                      className: R().Body,
                      children: (0, Ee.we)("#ManageFriends_QuickInviteNote"),
                    }),
                    (0, e.jsxs)("div", {
                      className: R().CopyContainer,
                      children: [
                        !!this.state.invite_token &&
                          (0, e.jsx)("div", {
                            className: R().Link,
                            children: I,
                          }),
                        (0, e.jsx)(L.jn, {
                          className: R().Button,
                          onClick: () => this.OnCopy("invite", I),
                          children: this.state.invite_copied
                            ? (0, Ee.we)("#ManageFriends_Copied")
                            : (0, Ee.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, e.jsx)(L.$n, {
                      className: R().GenerateLinkButton,
                      onClick: this.OnCreateInviteLink,
                      children: (0, Ee.we)("#ManageFriends_CreateInviteLink"),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: R().Background,
                  children: [
                    (0, e.jsx)("h1", {
                      className: R().Heading,
                      children: (0, Ee.we)("#ManageFriends_OrSearch"),
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "598px",
                        position: "relative",
                      },
                      children: [
                        (0, e.jsx)("div", {
                          style: { width: "100%" },
                          children: (0, e.jsx)(L.pd, {
                            className: R().Input,
                            onKeyDown: this.OnSearchKeyDown,
                            value: this.state.input_search,
                            onChange: this.OnSearchChange,
                            placeholder: (0, Ee.we)(
                              "#ManageFriends_EnterProfileName",
                            ),
                          }),
                        }),
                        (0, e.jsx)("div", {
                          id: "searchIcon",
                          style: {
                            position: "absolute",
                            right: "10px",
                            cursor: "pointer",
                          },
                          onClick: this.OnSearchSubmit,
                          children: (0, e.jsx)(ue.eSy, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        Ge([ie.oI], Ke.prototype, "OnCreateInviteLink", 1),
          Ge([ie.oI], Ke.prototype, "OnCopy", 1),
          Ge([ie.oI], Ke.prototype, "OnAddFriend", 1),
          Ge([ie.oI], Ke.prototype, "OnSearchChange", 1),
          Ge([ie.oI], Ke.prototype, "OnSearchKeyDown", 1),
          Ge([ie.oI], Ke.prototype, "OnSearchSubmit", 1);
        class lt extends E.Component {
          constructor() {
            super(...arguments),
              Pe(this, "state", {
                input_friend_code: "",
                disable_send_invite: !1,
                searchResult: null,
                invite_status: "pending",
              }),
              Pe(this, "m_currentRequest", 0);
          }
          async OnFriendCodeChange(I) {
            const V = I.target.value.split(",")[0];
            this.setState({ input_friend_code: V, invite_status: "pending" }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(V),
                500,
              ));
          }
          async LoadProfile(I) {
            if (I) {
              const V = ae.b.InitFromAccountID(Number(I));
              await D.LoadProfiles([V.ConvertTo64BitString()]);
              const Z = D.GetProfile(V.ConvertTo64BitString());
              Z
                ? this.setState({
                    searchResult: Z,
                    disable_send_invite:
                      _e.iA.is_limited ||
                      (this.props.bDisableForFriends && Z.is_friend) ||
                      (this.props.bDisableForSelf &&
                        Z.steamid === _e.iA.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          }
          async OnActionClick(I) {
            const V = new FormData();
            V.append("sessionID", (0, _e.KC)()),
              V.append("steamid", I),
              V.append("accept_invite", "0"),
              this.setState({ disable_send_invite: !0 }),
              (await this.props.onButtonClick(I))
                ? (this.setState({
                    input_friend_code: "",
                    invite_status: "success",
                  }),
                  setTimeout(() => this.setState({ searchResult: null }), 3e3))
                : this.setState({
                    invite_status: "failure",
                    disable_send_invite: !1,
                  });
          }
          render() {
            return (0, e.jsxs)("div", {
              className: R().FriendCodeSelector,
              children: [
                (0, e.jsx)(L.pd, {
                  className: R().Input,
                  value: this.state.input_friend_code,
                  onChange: this.OnFriendCodeChange,
                  placeholder: (0, Ee.we)(
                    "#ManageFriends_EnterFriendCodePlaceholder",
                  ),
                }),
                (0, e.jsx)(Xe, {
                  searchResult: this.state.searchResult,
                  invite_status: this.state.invite_status,
                  bShowStatus: this.props.bShowStatus,
                  children: (0, e.jsx)(L.jn, {
                    className: R().SendInviteButton,
                    onClick: () =>
                      this.OnActionClick(this.state.searchResult.steamid),
                    disabled: this.state.disable_send_invite,
                    children: this.props.buttonText,
                  }),
                }),
              ],
            });
          }
        }
        Ge([ie.oI], lt.prototype, "OnFriendCodeChange", 1),
          Ge([ie.oI], lt.prototype, "LoadProfile", 1),
          Ge([ie.oI], lt.prototype, "OnActionClick", 1);
        const Xe = (ce) => {
          const {
              searchResult: I,
              invite_status: V,
              bShowStatus: Z,
              children: Oe,
            } = ce,
            qe = (0, _e.Qn)();
          return I
            ? (0, e.jsxs)("div", {
                className: R().ProfileCard,
                children: [
                  (0, e.jsxs)("div", {
                    className: R().UserContainer,
                    children: [
                      (0, e.jsx)("div", {
                        className: R().Image,
                        children: (0, e.jsx)("img", {
                          style: { width: "100%", height: "100%" },
                          src: I.avatar_url_full,
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: R().ProfileContent,
                        children: [
                          (0, e.jsx)("h1", {
                            className: R().Heading,
                            children: I.persona_name,
                          }),
                          (0, e.jsxs)("div", {
                            className: R().ProfileLink,
                            children: [
                              (0, e.jsx)(Ie.Ii, {
                                target: qe ? void 0 : "_blank",
                                href:
                                  _e.TS.COMMUNITY_BASE_URL +
                                  "profiles/" +
                                  I.steamid,
                                children: (0, Ee.we)(
                                  "#ManageFriends_ProfileLink",
                                ),
                              }),
                              (0, e.jsx)("br", {}),
                              (0, e.jsxs)("span", {
                                className: R().Body,
                                children: [
                                  I.real_name,
                                  (0, e.jsx)("br", {}),
                                  `${I.city}${I.city ? "," : ""} ${I.state}${I.state ? "," : ""} ${I.country}`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Oe,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: R().ProfileLink,
                    children: [
                      I.is_friend &&
                        (0, e.jsx)("div", {
                          children: (0, Ee.we)("#ManageFriends_IsFriend"),
                        }),
                      I.friends_in_common != 0 &&
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(Ie.Ii, {
                            target: qe ? void 0 : "_blank",
                            href:
                              _e.TS.COMMUNITY_BASE_URL +
                              "profiles/" +
                              I.steamid +
                              "/friendscommon",
                            children:
                              I.friends_in_common === 1
                                ? (0, Ee.we)(
                                    "#ManageFriends_FriendsInCommonSingular",
                                    I.friends_in_common,
                                  )
                                : (0, Ee.we)(
                                    "#ManageFriends_FriendsInCommon",
                                    I.friends_in_common,
                                  ),
                          }),
                        }),
                      Z &&
                        V === "failure" &&
                        (0, e.jsx)("div", {
                          className: R().Failure,
                          children: (0, Ee.we)("#ManageFriends_InviteFailure"),
                        }),
                      Z &&
                        V === "success" &&
                        (0, e.jsx)("div", {
                          className: R().Success,
                          children: (0, Ee.we)(
                            "#ManageFriends_InviteSuccess",
                            I.persona_name,
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        };
      },
      26251: (Y, ot, u) => {
        "use strict";
        u.d(ot, { Yg: () => s, t3: () => Qe });
        var e = u(7850),
          E = u(40323),
          ie = u.n(E),
          M = u(90626),
          Fe = u(99412),
          L = u(32093),
          Ee = u(38410),
          le = u(19316),
          R = u(95695),
          _e = u.n(R),
          ae = u(2801),
          W = u(88003),
          X = u(85599),
          k = u(34592),
          J = u(36707),
          ne = u(18210),
          p = u(20398),
          me = u(71421),
          Q = u(96471),
          f = u.n(Q);
        const s = (U) => {
            const B = (K, ue) => {
              K.preventDefault();
              const {
                  fnGetLocData: pe,
                  closeModal: Ie,
                  strFileNamePrefix: F,
                  lang: z,
                } = U,
                Ue = pe(),
                Ge = new p.s();
              let Pe = F ? F + "_localization" : "localization";
              switch (ue) {
                case "csv_row":
                  Ge.WriteLocalizationData_CSV_LanguageRows(Ue, Pe + ".csv");
                  break;
                case "csv_column":
                  Ge.WriteLocalizationData_CSV_LanguageColumns(Ue, Pe + ".csv");
                  break;
                case "csv_token":
                  Ge.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                    Ue,
                    Pe + ".csv",
                  );
                  break;
                case "xml":
                  Ge.WriteLocalizationData_XML_SingleLanguage(
                    Ue,
                    z,
                    Pe + "_" + (0, Fe.x6o)((0, Fe.LgB)(z)) + ".xml",
                  );
                  break;
              }
              Ie && Ie();
            };
            return (0, e.jsxs)(e.Fragment, {
              children: [
                !!U.bShowCSV &&
                  (0, e.jsxs)(M.Fragment, {
                    children: [
                      (0, e.jsx)(le.jn, {
                        onClick: (K) => B(K, "csv_row"),
                        children: (0, ne.we)(
                          "#Localization_Export_Btn_RowLanguages",
                        ),
                      }),
                      (0, e.jsx)(le.jn, {
                        onClick: (K) => B(K, "csv_column"),
                        children: (0, ne.we)(
                          "#Localization_Export_Btn_ColumnLanguages",
                        ),
                      }),
                      (0, e.jsx)(le.jn, {
                        onClick: (K) => B(K, "csv_token"),
                        children: (0, ne.we)(
                          "#Localization_Export_Btn_TokenLanguages",
                        ),
                      }),
                    ],
                  }),
                !!U.bShowXML &&
                  (0, e.jsx)(le.jn, {
                    onClick: (K) => B(K, "xml"),
                    children: (0, ne.we)("#Localization_Export_Btn_XML"),
                  }),
              ],
            });
          },
          Qe = (U) => {
            const [B, K] = (0, M.useState)(!1),
              ue = (F, z) => {
                K(!1),
                  console.log(
                    "ImportLocalizationAction: On Handle Parse error: " +
                      F.message,
                    F,
                  ),
                  (0, W.pg)(
                    (0, e.jsx)(ae.KG, {
                      children: (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, ne.we)("#Localization_Error_Input"),
                          }),
                          (0, e.jsx)("p", { children: F.message }),
                        ],
                      }),
                    }),
                    window,
                  );
              },
              pe = (F) => {
                K(!1);
                let z = "";
                F.forEach((Ue) => {
                  z.length > 0 && (z += ", "),
                    (z += (0, ne.we)("#Language_" + (0, Fe.LgB)(Ue)));
                }),
                  (0, W.pg)(
                    (0, e.jsx)(ae.o0, {
                      strTitle: (0, ne.we)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)("div", {
                        children:
                          z.length == 0
                            ? (0, ne.we)(
                                "#Localization_Success_ImportComplete_NoChange",
                              )
                            : (0, ne.we)(
                                "#Localization_Success_ImportComplete",
                                z,
                              ),
                      }),
                    }),
                    window,
                  );
              },
              Ie = async (F) => {
                let z = F.target.files;
                if (z && z.length > 0) {
                  K(!0);
                  let Ue = new Array(),
                    Ge = new p.s();
                  for (let Pe = 0; Pe < z.length; ++Pe)
                    if (z[Pe])
                      if (z[Pe].name.toLocaleLowerCase().endsWith(".csv")) {
                        ie().parse(z[0], {
                          header: !0,
                          complete: (Ke) => {
                            let Xe = new p.s().DetectAndFormatCSV(Ke);
                            if (!Xe) {
                              ue({
                                code: "",
                                message: "",
                                row: 0,
                                type: "filenameerror",
                              });
                              return;
                            }
                            const ce = ne.A0.GetLanguageListForRealms([
                                L.TU.k_ESteamRealmGlobal,
                              ]),
                              I = U.fnOnImportLocData(Xe, ce);
                            pe(I);
                          },
                          error: ue,
                        });
                        return;
                      } else if (
                        z[Pe].name.toLocaleLowerCase().endsWith(".xml")
                      ) {
                        let { language: Ke } = (0, Ee.jj)(z[Pe].name, Fe.xPp);
                        if (Ke == null || Ke == Fe.xPp) {
                          ue({
                            code: "",
                            message: (0, ne.we)(
                              "#Localization_Error_FileLangauage",
                              z[Pe].name,
                            ),
                            row: 0,
                            type: "filenameerror",
                          });
                          return;
                        }
                        try {
                          const lt =
                            await Ge.ReadLocalizationData_XML_SingleLanguage(
                              z[Pe],
                              Ke,
                            );
                          U.fnOnImportLocData(lt, [Ke]).forEach((ce) => {
                            Ue.indexOf(ce) == -1 && Ue.push(ce);
                          });
                        } catch (lt) {
                          let Xe = (0, k.H)(lt);
                          ue({
                            code: "",
                            message: (0, ne.we)(
                              "#Localization_Error_XMLParseError",
                              Xe.strErrorMsg,
                            ),
                            row: 0,
                            type: "parseerror",
                          });
                          return;
                        }
                      } else
                        ue({
                          code: "",
                          message: (0, ne.we)(
                            "#Localization_Error_FileExtention",
                            z[Pe].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                  pe(Ue);
                }
              };
            return (0, e.jsx)(me.he, {
              className: (0, J.A)(
                U.className ? U.className : R.EditPreviewButton,
              ),
              toolTipContent: U.strToolTip,
              children: (0, e.jsxs)("label", {
                className: Q.ImportButton,
                htmlFor: "importlocalization",
                children: [
                  B && (0, e.jsx)(X.t, { size: "small" }),
                  (0, e.jsx)("div", {
                    className: Q.Label,
                    children: (0, ne.we)(
                      U.strLabel ? U.strLabel : "#Localization_Import_Btn",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    id: "importlocalization",
                    className: Q.ImportButton,
                    style: { display: "none" },
                    type: "file",
                    onSubmit: Ie,
                    onChange: Ie,
                    multiple: !0,
                  }),
                ],
              }),
            });
          },
          D = (U) => {
            const {
                fnOnImportLocData: B,
                closeModal: K,
                sampleLocData: ue,
                sampleFilename: pe,
              } = U,
              Ie = (z, Ue) => {
                const Ge = B(z, Ue);
                return K(), Ge;
              },
              F = new CLocalizationImportExport();
            return jsxs(GenericDialog, {
              title: Localize("#ImportLoc_Title"),
              onCancel: K,
              closeModal: K,
              children: [
                jsxs(Dialog.Body, {
                  children: [
                    jsx("div", {
                      children: Localize("#ImportLoc_Description"),
                    }),
                    jsxs("div", {
                      className: locstyles.ImportLocSampleButtonCtn,
                      children: [
                        jsx("div", {
                          className: locstyles.SampleTitle,
                          children: Localize("#ImportLoc_SampleTitle"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            F.WriteLocalizationData_CSV_LanguageRows(
                              ue,
                              pe + "_row.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerRow"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            F.WriteLocalizationData_CSV_LanguageColumns(
                              ue,
                              pe + "_col.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerCol"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            F.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                              ue,
                              pe + "_token.csv",
                            ),
                          children: Localize("#ImportLoc_CSVTokenLang"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            F.WriteLocalizationData_XML_SingleLanguage(
                              ue,
                              k_ELanguage_English,
                              pe + "xml",
                            ),
                          children: Localize("#ImportLoc_XML"),
                        }),
                      ],
                    }),
                  ],
                }),
                jsx(Dialog.Footer, {
                  children: jsx(Qe, {
                    strLabel: Localize("#BuildNotes_ImportLocalization"),
                    fnOnImportLocData: Ie,
                  }),
                }),
              ],
            });
          };
      },
      20398: (Y, ot, u) => {
        "use strict";
        u.d(ot, { G: () => R, s: () => _e });
        var e = u(99412),
          E = u(32093),
          ie = u(41635),
          M = u(22880),
          Fe = u(18210),
          L = Object.defineProperty,
          Ee = (ae, W, X) =>
            W in ae
              ? L(ae, W, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: X,
                })
              : (ae[W] = X),
          le = (ae, W, X) => Ee(ae, typeof W != "symbol" ? W + "" : W, X);
        class R {
          constructor() {
            le(this, "m_mapTokens", new Map());
          }
          GetLocalization(W, X) {
            const k = this.m_mapTokens.get(W);
            if (!(!k || !k[X])) return k[X];
          }
          SetLocalization(W, X, k) {
            let J = this.m_mapTokens.get(W);
            J ||
              ((J = (0, ie.$Y)([], e.bP9, null)), this.m_mapTokens.set(W, J)),
              (J[X] = k);
          }
          GetSortedTokenList() {
            let W = [];
            return (
              this.m_mapTokens.forEach((X, k) => W.push(k)),
              W.sort((X, k) => X.localeCompare(k)),
              W
            );
          }
          GetLanguagesWithTokens() {
            let W = new Map();
            this.m_mapTokens.forEach((k) => {
              for (let J = 0; J < k.length; ++J)
                !W.has(J) &&
                  k[J] !== null &&
                  k[J] !== void 0 &&
                  k[J].trim().length > 0 &&
                  W.set(J, !0);
            });
            let X = new Array();
            return (
              W.forEach((k, J) => {
                k && X.push(J);
              }),
              X
            );
          }
          ClearLanguagesTokens(W) {
            W.forEach((X) => {
              this.m_mapTokens.forEach((k, J) => {
                X < k.length && k[X] !== null && (k[X] = null);
              });
            });
          }
          DebugPrintData() {
            const W = new Array();
            return (
              this.m_mapTokens.forEach((X, k) => W.push(`${k}=${X.join(",")}`)),
              W.join(`
`)
            );
          }
        }
        class _e {
          DetectAndFormatCSV(W) {
            var X, k, J, ne, p, me;
            let Q = null;
            return (
              ((k =
                (X = W == null ? void 0 : W.meta) == null
                  ? void 0
                  : X.fields) == null
                ? void 0
                : k.length) >= 3 &&
              W.meta.fields[0] === "field" &&
              W.meta.fields[1] === "language" &&
              W.meta.fields[2] === "value"
                ? (Q = this.ReadLocalizationData_CSV_TokenLanguageList(W))
                : ((ne =
                      (J = W == null ? void 0 : W.meta) == null
                        ? void 0
                        : J.fields) == null
                      ? void 0
                      : ne.length) >= 2 &&
                    W.meta.fields[0] === "field" &&
                    (0, e.sfN)(W.meta.fields[1], e.xPp) != e.xPp
                  ? (Q = this.ReadLocalizationData_CSV_LanguageColumns(W))
                  : ((me =
                      (p = W == null ? void 0 : W.meta) == null
                        ? void 0
                        : p.fields) == null
                      ? void 0
                      : me.length) >= 2 &&
                    W.meta.fields[0] === "language" &&
                    (Q = this.ReadLocalizationData_CSV_LanguageRows(W)),
              Q
            );
          }
          async ReadLocalizationData_XML_SingleLanguage(W, X) {
            let k = new R(),
              J = new DOMParser(),
              ne = await M.g.ReadFile(W),
              p = J.parseFromString(ne.toString(), "application/xml");
            for (let me = 0; me < p.documentElement.children.length; ++me) {
              const Q = p.documentElement.children.item(me);
              if (!Q.getAttribute("id"))
                throw "Can not find id for element. Probably malformed XML";
              const f = Q.getAttribute("id").toLocaleLowerCase(),
                s = Q.textContent;
              k.SetLocalization(f, X, s);
            }
            return k;
          }
          ReadLocalizationData_CSV_TokenLanguageList(W) {
            const X = new R();
            return (
              W.data.forEach((k) => {
                const J = k.field,
                  ne = (0, e.sfN)(k.language);
                X.SetLocalization(J, ne, k.value);
              }),
              X
            );
          }
          ReadLocalizationData_CSV_LanguageColumns(W) {
            const X = new R();
            return (
              W.data.forEach((k) => {
                const J = k.field;
                for (let ne = e.Bhc; ne < e.bP9; ++ne) {
                  const p = (0, e.x6o)((0, e.LgB)(ne));
                  X.SetLocalization(J, ne, k[p]);
                }
              }),
              X
            );
          }
          ReadLocalizationData_CSV_LanguageRows(W) {
            const X = new R();
            return (
              W.data.forEach((k) => {
                const J = (0, e.sfN)(k.language, e.bP9);
                if (J !== e.bP9)
                  for (const [ne, p] of Object.entries(k))
                    ne === "language" ||
                      typeof p != "string" ||
                      X.SetLocalization(ne, J, p);
              }),
              X
            );
          }
          GetExportLanguages() {
            return Fe.A0.GetLanguageListForRealms([E.TU.k_ESteamRealmGlobal]);
          }
          WriteLocalizationData_CSV_TokenAndLanguageColumns(W, X) {
            let k = new Array();
            W.GetSortedTokenList().forEach((ne) => {
              for (const p of this.GetExportLanguages()) {
                let me = { field: ne };
                (me.language = (0, e.x6o)((0, e.LgB)(p))),
                  (me.value = W.GetLocalization(ne, p)),
                  k.push(me);
              }
            }),
              M.g.WriteCSVToFile(k, X);
          }
          WriteLocalizationData_CSV_LanguageColumns(W, X) {
            let k = new Array();
            W.GetSortedTokenList().forEach((ne) => {
              let p = { field: ne };
              for (const me of this.GetExportLanguages())
                p[(0, e.x6o)((0, e.LgB)(me))] = W.GetLocalization(ne, me);
              k.push(p);
            }),
              M.g.WriteCSVToFile(k, X);
          }
          WriteLocalizationData_CSV_LanguageRows(W, X) {
            let k = new Array();
            for (const ne of this.GetExportLanguages())
              k.length <= ne - 1 && k.push({ language: "" }),
                k.push({ language: (0, e.x6o)((0, e.LgB)(ne)) });
            W.GetSortedTokenList().forEach((ne) => {
              for (const p of this.GetExportLanguages()) {
                const me = W.GetLocalization(ne, p);
                k[p][ne] = me;
              }
            }),
              M.g.WriteCSVToFile(k, X);
          }
          WriteLocalizationData_XML_SingleLanguage(W, X, k) {
            let J = document.implementation.createDocument(
              null,
              "content",
              null,
            );
            W.GetSortedTokenList().forEach((p) => {
              let me = J.createElement("string");
              me.setAttribute("id", p),
                me.appendChild(J.createTextNode(W.GetLocalization(p, X) || "")),
                J.documentElement.append(me);
            }),
              M.g.WriteXMLToFile(J, k);
          }
        }
      },
      49199: (Y) => {
        Y.exports = {
          TutoralCtn: "_2uGI1RkZsAgH5FJJPm48Mk",
          CreatorHomeEditCtn: "VbOoix4tAefx_Ubkf3VXl",
          SelectedExplanationCtn: "_2Kz-YjmWq9XV50Bq3pKfJd",
          AdminLinkCtn: "_26ME5VmoXDX5fdxtHMtJsX",
          LeftCol: "B2oAcAebO_bbVwXs3w_aF",
          RightCol: "_3h8IKAOLHOxucAap792BUn",
          EditLink: "_1dED5yJb9LJHtHR-wOyzjs",
          Label: "_1dpVUl_36BZE7zol5hXJtt",
          Tagline: "rug6IxzHTjfFtn_iUFpSu",
          AvatarImage: "_1eBqhQYUv9YYTswWfT8DIo",
          SaveWarningCtn: "acItF6ldLBfiep28ZGGai",
          ExplanationCtn: "_3rgjlem-dIfIrDEOWm6NLp",
          Warning: "jrKwhfgNFBea4v_qCpgy8",
        };
      },
      68297: (Y) => {
        Y.exports = { Ctn: "_3cNoLVtVVzke0LB8WeiaxS" };
      },
      78606: (Y) => {
        Y.exports = { HighlightBox: "_1C8qNhbbX8u5CxFNklZmlc" };
      },
      1743: (Y) => {
        Y.exports = { SearchResults: "_26iJ3c5EI_arYCNqRvcLNX" };
      },
      22230: (Y) => {
        Y.exports = {
          ValveOnlyGuidelineSummary: "G_5BBG-e-VdrVy_cH-T74",
          GuidelinesDoneCtn: "-bMPuCQgMEZkaXDe9xr-s",
          SignedBy: "aFTvaToeoa7vQ3T3g-gJn",
          GuidelinesNoticeCtn: "_2vRv873nmO8VDKcGv910N9",
          OpenGuidelinesBtnCtn: "_1xJdiPfxlTdNN2usH5IiPi",
          Text: "_1yrjmb8acKppoFMX4a89JM",
          ProcessButtons: "_3d-YuHWm4kFxhwoHUQvLY3",
          OrganizerInfoNeeded: "_1zDJ15qYWvZk2pOJT6Fpma",
          PresenterInfoCtn: "LtbslF-lKB5TuSodjwica",
          PresenterPreviewCtn: "_2Hk4rTxT-iClgcyX6vhQ-T",
          PresenterPreviewDesc: "_3pwOKm3mb1P6DMLSJV_irO",
          Intro: "yYvoXKxnt_cvDzZA4SWjg",
          State: "_3m-uJBKckbfIRJDTdOsxHc",
          AgreementsCtn: "_1TWapuESBrD691ajclNSk",
          ContactSectionCtn: "_3gDWxWwsVwJMSsDuwNdjWm",
          SectionTitle: "_3HeMoToqc_aBQ6fOQyGJv6",
        };
      },
      28796: (Y) => {
        Y.exports = {
          LivePreview: "eFYn5NNpjD2UUEaetVynq",
          Button: "_1_mHUKME5i3Y8zoNldiFoQ",
          DeviceDropdown: "_3k5_ki8-nxIYRWf3FJmYr7",
          Connected: "_1oL5XzL932fPV06pp5B5w7",
        };
      },
      6103: (Y) => {
        Y.exports = {
          Ctn: "BTMmbSI5WdBvCQVAgf3-i",
          ButtonIcon: "_21IZDNymOVDf4u4Ont7WVA",
          SalePageTOCPlacement: "_3swQ-bhpt-4JFhKZu9FvNW",
        };
      },
      47155: (Y) => {
        Y.exports = {
          UploaderCtn: "_1B1zXx3Ukh5fPY5eB6F2Ca",
          CapsuleCtn: "_3K7h_ivhFFa9wmqp1O_e5n",
          CapsuleTitle: "_1YilvBMh1lDdWYGq5MnmqO",
          CapsuleDimensions: "_2R7J4mdptFLnMorL9p9WuY",
          CapsulePreview: "_2eDmRg0urY8jNMPG7lpQ91",
        };
      },
      18368: (Y) => {
        Y.exports = {
          SocialShareCtn: "FFYZQ30ue3bMXnyIP5UrW",
          DefaultSocialOverrideMsg: "DdtTvlKvWgvmBUSKQLgf1",
          DefaultSocialImgCtn: "_10QpUx-xWFinl4cM4hpslY",
          Small: "_1I5VGNY5lZBCAPQRmiK5oV",
          SocialShareText: "_3AR23rWGeNb-oZhicgbdGr",
          SocialTitle: "_2AobCe1CkG1-bdYa01CFZU",
          SocialDesc: "_1Unfeuc-ubWDHNdJjT-Xhv",
          ErrorContainer: "_2FQ2lKY1ejk_P-O1Vkr45Z",
          ErrorText: "_1lC9RtUD5LH34BUY2oMEWR",
        };
      },
      88748: (Y) => {
        Y.exports = {
          WarningContainer: "_3KKQLT-cntemarSxLAOHU4",
          Warning: "_3j12-L_RkqFQTnTaY3jfxl",
          Buttons: "_1NXKvU6Jb0wmgRqjJNUvTo",
          TooltipIndicator: "_3q4PQbri3zpBCLZtr1RhjU",
        };
      },
      11113: (Y) => {
        Y.exports = {
          AssociatedBuildBody: "_1rnVUYtxCV0s6yyvpWQdNr",
          BuildDisplay: "_1HwK4xlcGUHwQQ8N0JlIOY",
          BuildUnlinked: "_1cg3t7W3zJ1d2fyZeemkqS",
          BuildLinkedBranch: "_2ssXJvILzS4NK3EGgXkahJ",
          BuildLinkedDefault: "fHJYYxIYA2NCGNolmgOMi",
          BuildIDLink: "_2-Syn-OgAW18RXr3Rz6YOD",
        };
      },
      86836: (Y) => {
        Y.exports = {
          AddTitleButton: "XKHg8utmcVGXt54ZWUTca",
          CustomTitleCtn: "_1qoSQ8xx3K6loQPzOE0HiB",
          LanguageContainer: "_3WmqO9SJ2x76duLZu9m2_w",
          customTitleOptionsCtn: "zhH_Vr0LaMN9JLW17_6Sg",
          TitleRowCtn: "_96im4Pfj3wp5vXCaqhDwZ",
          AccountRow: "_2uIyvmr0xlWuKw0K7c5XEB",
        };
      },
      54736: (Y) => {
        Y.exports = {
          DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
          EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
          EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
          EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
          EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
          AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
        };
      },
      31467: (Y) => {
        Y.exports = {
          DisplaySectionHeaderContainer: "_1xnIXWjdhCoRxuorR33Hja",
          DisplaySectionHeader: "_34f0ckwUpFDCDFOre5vKKc",
          DisplaySectionSubHeader: "_23nhJsiCnqk1JbRY4BqQYI",
          DisplaySectionEmpty: "_2BmSNGrjP-OITpT0J86b8v",
          EventDashboardDataCtn: "_1uPNGB9kdIqm4bvA3MWImI",
          LoadMoreEventsCtn: "_2asU2ngzNsnuUiOXlnE9gs",
          EventDashboardCtn: "_2WqPrwl1Lj6NrDCl6PxxBM",
          EventDashAdminToolsCtn: "_1OMO4Lb3thfoiLCtomeJ5l",
          EventDashboardSearchCtn: "_2Xt1OEvVr8cLVtuc0pJgwh",
          MainLists: "_2Yhqn7VDJjxvfEh06aKUZr",
          ManageButton: "_230VZeyDMcnXTFGA7wbiRz",
          Edit: "pvLmXgZ5uK2ammqFQVDtK",
          Delete: "_9SG7g0HWSikC38CnZUZPa",
          Clone: "_21_l8F0r9GZ8oNHQawRql9",
          View: "_3xhNUX1f66dkbO0jpbcrUB",
          Publish: "_2ewSqivponp2ZnRx--ccH",
          Section: "_16BNVQTv5mM5n7gkZtksG1",
          Unpublished: "_2MUzvx5CleYIyyUnHga8ex",
          AuditInfoItem: "_3zF56_7Le3QZgMK6daAhiC",
          AuditItemStatsCtn: "_2is7FNTYDmGf8I2LvURouk",
        };
      },
      30040: (Y) => {
        Y.exports = {
          CenterAlign: "cMmai1T2HLkMm53hworFg",
          ControlBarCtn: "_1RQ0BaFzyVrnbeaKB486g2",
          ButtonSettingContainer: "_3jwD2isodRqha0tS-q5TpD",
          ButtonSettingRow: "_1mF5pWZlkV-uvlPZeq-ATE",
          DevHeader: "_35PpKbsBORHxXvGWt2cUXd",
          EmailTabCtn: "fDsyXs0SX_yDzpvJgrj9Q",
          EmailInputText: "_1UcSgRiHZawoyZCBLSEYOw",
          EmailBackground: "bEP0PYdTho_Gl5g1z0hjx",
          DevEmailEmailBackground: "_20VcuDt9BKhha67F592sBU",
          EmailEditorContent: "_1nDhBmZLQlVzj3E7WKKhWq",
          EmailIconHeader: "_3LZBlwbB2tIXbCKqRcW8HK",
          FooterLegal: "bJOiiRXFyVnQ_XIwB8q71",
          EditImageInputCtn: "_1LyXpjatj6a2roksJ1w-Et",
          EmailInput: "_2D8ACkzapgcXt2i4mtVaUl",
          EmailOptionTitle: "_1zLvJ9yv1UricUaXbx0_S6",
          EmailSection: "_1zUIkI7AgdYO4GwG_NQHCK",
          EmailSubjectCtn: "BHpFDMbEwMQJp9qUbcnBp",
          EmailSubjectSelect: "_18xOZXw0zCpDoxyJ6IpE9O",
          EmailTemplate: "_18iTrIYTp7iRLbc4Gf8nPS",
          EmailTextCtn: "_1rQlPdfCXmfGtHnibyLU0q",
          HeadlineInput: "_2lHX9aoh5vq8UVFZpoUXLi",
          Footer: "_23AXhs6fxOH-ri30Ku83kQ",
          ImgCrossCtn: "_59gyFo1iYkpAzzfYIfPB",
          FullImageCtn: "uv6NVLDsJZRg2Vd6UPU57",
          BodyInput: "_3VRhYM6Jz6nfphcVyPLbHF",
          Hello: "Gd3d5QHNaw4ZwdI1OpckY",
          Reason: "_10TSvg1eJrb02iaDHClaMm",
          RecipientCtn: "_330DrT_T9AuTNElumsTjbO",
          GameLink: "_39DSSDvMsjSABWClwcIbZw",
          RightAlign: "zffsfYWrudjCkI4Dsh6SP",
          TargetAndAudience: "_3h8QMOnSMH3qwo0pouxQl1",
          VideoCtn: "_2mtrEAz9iqZDwFHWOFEWYs",
          VideoInputCtn: "_1ESNVZsJhsRKLGR6DIDgGv",
          ButtonDestInputSaleURL: "_3Lr4kQNl8EB90bYreCkavO",
          DevEmailTemplate: "sC9ZVo4LWRmp7sk7FL_1m",
          DevEmail_Content: "_25GtlukMBCGELygDEnZfrY",
          DevEmail_TopLogo: "_1dbBhgsGLkRM492mX7zkNQ",
          DevEmail_TopHeader: "_2lmZlTXR6-c1uaj5PbNgf3",
          DevEmail_Subject: "_37Wbo2nuC0l3mNcjGRZHyg",
          DevEmail_SignOff_Img: "KW2YG6hHfFQVuV4eJ3Ipz",
          DevEmail_Signoff: "_3iJuG0UcI4rSj5zJKaL5fc",
          DevEmail_Footer_Ctn: "RINyWReHxs1fxv1jgY7G4",
          DevEmail_Footer_Reason: "_1h_BmZOxsmD73ffKbjlIdO",
          DevEmail_Footer_SubSection: "_2gEsj3IHJae8fb06fRdJk_",
          DevEmail_Footer_Bold: "CSfHWKG5qt7_XeLCkaw8P",
          DevEmail_Footer_Regular: "_1dDJaK_qsXmQ27GlhTJhAA",
          DevEmail_Follow: "_1gwxy_hzPqUh-p_K4z_Edy",
          DevEmail_RecipientTable: "_2EDtiW4k-fQawJspq90nOy",
          TargetCtn: "_1Ts_ngj40ZiCo9Sc68jnwf",
          TargetTypeTitle: "_2EritTe1Kxna1Z6lA0jGtL",
          TargetTypeCtn: "_3TxAc5Yw0K8WYy6-rGW7Qn",
          TargetedListCtn: "_3NubRccs6p7sKSNLv5Qtmq",
          SelectListCtn: "_980o4njosOdbwYRFG-3CJ",
          SupportCtn: "_27guD_MAYlcodq6X9jXiyE",
        };
      },
      4969: (Y) => {
        Y.exports = {
          ThemedCtn: "_3JuTN3-LxaE1Kvz0sU14cv",
          CategoryOption: "_4ke28HUvwT2rIC2CU4462",
          CategoryTitle: "Dx6oJLmZ21r_VQlYV17ML",
          event_nomination_banner_ctn: "_1w12VaiWFhKBsTkQ0M7Mla",
          event_nomination_banner: "_2nEQSt0e5gAadvWMl-0IYD",
          event_nomination_banner_text: "_1gePUvogr9fXbuDaaMXFeP",
        };
      },
      6542: (Y) => {
        Y.exports = {
          PublishOption: "_6BF_4hDIQb4IUVMnPGyOc",
          Description: "_1zX1bcfpvl3eDzOofaa0Ld",
          PublishButton: "_3DS9nFmljPIAzK4YYNyJ7M",
          PublishButtonCtn: "dwVDG_w5nz5NZkVrF3Ymt",
          EventPublishButton: "_eYd_33i0Tu425frNF-D0",
        };
      },
      82267: (Y) => {
        Y.exports = {
          SummaryItems: "_12a_LkNOoLjY4U8GJXGiJr",
          ReachItems: "H_jRCccfsQh7wJDqpSFW",
          StatusRow: "SZwFXdjVvpVCLQbSx9W0N",
          StatusText: "_1NUKtMG9ZbBMEKZGUbo5dU",
          LinkRow: "_1WnQ1-TNrdTLC4CNy0LMal",
          PublishOptionsCtn: "_379kpZ55vVRtg4v3mmyzjh",
          PublishOption: "_2iQ1tjpuZUgm_7yak-mUME",
          VisibilityNote: "_2UnJcjbE6D6gpVyZQK1fpg",
          ReachSubject: "_3EQb8yhc8g_YREweH7REin",
          Future: "_5EyH71mHwoPLik7PPLwj6",
          ReachColumnTitles: "_6VhIV7p4e0V5K7UQS8rQ3",
          ReachColumnName: "_3ORkBJ_KuD1aaROllFDvmr",
          ReachSubjectOptional: "aXhwG7UbxYk72LUwo7nf3",
          ReactSubjectOptionalText: "_2CIfGSkukCcX90z7Zh50qn",
          ReachPendingVisibilityText: "n1wAjXJP9DpVKq6YYJXlu",
        };
      },
      86649: (Y) => {
        Y.exports = {
          TileContainer: "_1eeyC5eleIewWdIjFUHKZF",
          TileEventRow: "nCFimHHGxes3vcTixXyoM",
          ShowEventMetaDataSizes: "EU0bQ6RzkpH7YEV3PqpFi",
          ShowLibrarySpotlight: "_2cmpQqEtWhQKNVzgGRC1gf",
          TileImageCtn: "_1vi2yQBaJNZnrkCvcAkYPu",
          PartnerEventFeaturedHeader: "_2BHkjrXI8mj4iCap8XAl7C",
          EventStateUpcoming: "qfpNtFPUJlNjLktoUvJ0k",
          EventStateActive: "_3F1Bjy-j37LMI3EtJA1h2Q",
          EventStateRecent: "_2ge3pkXyDOZWz8-ARJz8UM",
          TileStats: "GZhweiVUpwbzoIjDE7u-Z",
          Spacer: "Lux3qW8DzWm72y25tK65P",
          TileImage: "_5NjHVepJ-MpagvcelrrLe",
          TileTextContainer: "_31yesbrR3TY0eFzQ5LMPfu",
          TileTextAppName: "_3x6bHYqsfNw0nz_4TDuSxI",
          TileTextEventType: "_2DMSloKwrNjr6coAQd8ZiI",
          TileHasSale: "_1trq1cVOPKvVg7fFpo7i1j",
          TileTextStartsIn: "_3jRSO6lxpLL9G3wo0SR_bn",
          TileTextSubTitle: "_3Sc1E4dUzfzO6of2iXaKtc",
          TileDescriptionContainer: "_2yxWDPnwMaM08JNkzITkA2",
          TileButtonContainer: "_1JNbDS8V61g_7Wpc_xtkEQ",
          TileAgeNotAppropriate: "_1EyzXBq7ZEaS5rLANMjygs",
          ManageButton: "_60IytO_Ke7DCDgSXKUCxJ",
          Edit: "_2h3YfZsHYE19rH00uHNKVS",
          Delete: "_8zmLUr-qx1Bzu4WqzkSj2",
          Clone: "_1QJ8IfR50ZDSYZqiwaHD6Z",
          View: "_1IvY3uUm_10hrO9weWkZ3L",
          Publish: "_1szIuk73YkbLwAB0TblZQB",
          CloneLangAlert: "_2U-5yBEKxtzmhHMrEKXA09",
          CloneLangListCtn: "_3Nj5xHseX0-Ki-jpnVPZzP",
          CloneCheckBox: "_28WRJt_EhqnDXXoRbzDKHq",
          MetaDataCtn: "_3EXNJZmBWQbV9eSwfrVIgH",
        };
      },
      31501: (Y) => {
        Y.exports = {
          ErrorMessaage: "_13sZcUrcBMNUU0KdAqKPUS",
          UpdatingMessage: "_3baPwwHaL5S0vl62s9YPRm",
        };
      },
      91126: (Y) => {
        Y.exports = {
          ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
          ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
          SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
        };
      },
      9295: (Y) => {
        Y.exports = {
          ManageLocCtn: "_1f5Ik3OrM66FNXPSlNh_zR",
          LocButtonsCtn: "bAoVO_tlg_jpl-uvQ9JFF",
          ManageLocContents: "_2k4C7NwMxpGzAuHjmqEURq",
          Header: "_1_uWHf6GPtvPfqvUQr-Alu",
        };
      },
      26917: (Y) => {
        Y.exports = { Waypoint: "_2pZVu5uwOWvVnfNisJPOB9" };
      },
      49285: (Y) => {
        Y.exports = {
          TableOfContentsContainer: "_3N5be2rmYYNMGufXaKpBSb",
          TableOfContents: "_3tLgun3y-qOlJAVcfwxowt",
          TOCEntry: "_1fzqunMp3Jq_h9SsiGwRGu",
          TOCEntryText: "_2GtCXeIDXaH3zjSXPON8Mc",
          SectionOnScreen: "_3xZOOBpCfl1mS9OS-_DVq4",
          TOCIndent: "_1fP_E_5IswSiXZj42jqqWq",
          Header: "_1GAZYe3epNmQSdQq0rhZBQ",
        };
      },
      32545: (Y) => {
        Y.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
          BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
          "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
          "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
          "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
          "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
          "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
          "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
          "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
          "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
          focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
          hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
        };
      },
      10026: (Y) => {
        Y.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (Y) => {
        Y.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (Y) => {
        Y.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      92451: (Y) => {
        Y.exports = { DialogCtn: "e7i0Hs6j09gCdPXXjl7Lk" };
      },
      11833: (Y) => {
        Y.exports = {
          ApprovalRequiredCtn: "_2pKjCSfT0Aa7Wx8_VoNJzc",
          PendingApproval: "_27C9CXtP6vYFYNpAhDJciM",
          Approved: "_2W3o61eSl990XjaneBlzaE",
          PublishWithRestrictions: "_32dufkQ3fNn_8sJusL-nd_",
          Right: "_2lUXdTnEBjAXrbGOs8rZVb",
          Title: "Oc0UNBEG4L2poFTcpQzwx",
          RequireText: "OZlfJDOJer5NjUxcJJf7Z",
        };
      },
      47534: (Y) => {
        Y.exports = {
          SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
          SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
          SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
          SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
          ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
          AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
        };
      },
      9202: (Y) => {
        Y.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
          BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
          "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
          "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
          "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
          "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
          "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
          "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
          "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
          "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
          "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
          focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
          hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
        };
      },
      91640: (Y) => {
        Y.exports = {
          "duration-app-launch": "800ms",
          Heading: "_3kTQIYYiQiVR_DeJepkOwJ",
          Body: "_2s393FLIe2l5quVJHoS53K",
          HeaderBlock: "X9bYNT3rKpg6L1Cgq45pG",
          Background: "_1xwi06sEKXpwIpZcgHle_h",
          DimBackground: "_2N55HNCo3jLIzL6RNNlRUo",
          Input: "_1BUtyMrOPfXVpnfK-Z5OnA",
          CopyContainer: "_1HjkZ3ooQw-4TV518YPtvp",
          Text: "_1ehqRyqgPLFNoFwFifHPPR",
          Link: "_18Sc08YQfmAIVx8H1h8A1V",
          Button: "_2772E6skxrFIemLRdp0EKv",
          GenerateLinkButton: "T52tUwptWdakIKgaAVn3i",
          ProfileCard: "_28a_CNvDls7VgWoPW2-9Kz",
          UserContainer: "_29w-2Eb_kk-viSqGW8RTn2",
          Image: "_1n4lDOfOQzOhvshIPt1UWT",
          ProfileContent: "_1qz9xLw5YttjO8gVfuMwS",
          ProfileLink: "_1tEt0fYckNbFAqGLEfrsfj",
          Failure: "UoMCo-OvninFBFozRomeh",
          Success: "zNkywkFbUJio86FBwBWwx",
          FriendCodeSelector: "_3nmSpgo_T_V0-Er7h8J2Ar",
          SendInviteButton: "kcAlkPA1uhcWs_5eatvVd",
          BackgroundAnimation: "_3yBb7Zq-JsZsUC7j0xfwNs",
          "ItemFocusAnim-darkerGrey-nocolor": "_3mEJMPBWqIai6TZ5Asmwzc",
          "ItemFocusAnim-darkerGrey": "_1bq8dQKi1_Y3Cx4SqKPEbe",
          "ItemFocusAnim-darkGreySettings": "_3HZYqGe5_hsFFJcgBTMMSW",
          "ItemFocusAnim-darkGrey": "qqYMXWoOu5it3a3atTegO",
          "ItemFocusAnim-grey": "ULAazkgE1qcpwKYFDQ6cA",
          "ItemFocusAnim-translucent-white-10": "_2_8edxNWb8zuaY6iv3wJSx",
          "ItemFocusAnim-translucent-white-20": "_1TV5evTLXXGDV16o8ltkb7",
          "ItemFocusAnimBorder-darkGrey": "_2N1KfmpWvdxv64J5Rs82CX",
          "ItemFocusAnim-green": "_3UU3hyYWsBPGsxljxX3hbB",
          focusAnimation: "_2u4UlTYeTMTUGVGicBx0My",
          hoverAnimation: "_16_WHz1Oh5Jy0J3qvG4rto",
        };
      },
      96471: (Y) => {
        Y.exports = {
          Label: "_1LhItwhLHspVcQdfcbd2Sg",
          ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
          SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
          ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
        };
      },
      16345: (Y) => {
        Y.exports = {
          SuggestContainer: "_2gBFqL_6eXiRN7TI_GDjzF",
          Results: "_3eXNgAtnlHBfgWZbxO2n3h",
          EmptyResults: "_3w0K5X735sKAZhhifZGs84",
          ResultSectionHeader: "_1KK1sGDuxehec0lBB_4lpU",
          ResultRow: "_16oSf0MiTpUTJe7YQpCV2A",
          AvatarImage: "_3dr2A8wfoYU0kJtS9ACoR1",
          GameName: "_3CWrph5moGF_F746uM5tdI",
          Label: "I1zVikvORZt41zc-QTAsw",
        };
      },
      26759: (Y, ot, u) => {
        "use strict";
        u.d(ot, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
      },
    },
  ]);
})();
