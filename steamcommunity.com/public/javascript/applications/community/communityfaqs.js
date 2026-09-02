/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [3781],
    {
      56585: (W, be, o) => {
        "use strict";
        o.d(be, {
          IB: () => f,
          IW: () => O,
          Wj: () => x,
          X0: () => A,
          r$: () => B,
          yW: () => p,
        });
        var e = o(7850),
          q = o(72604),
          y = o(35038),
          m = o(88942),
          R = o(61739),
          S = o(68312),
          re = o(98112),
          ge = o(90626);
        function G(_) {
          const t = (0, S.KV)(),
            se = (0, m.I)({
              queryKey: _.queryKey,
              queryFn: async () => _.queryFn(t, ..._.args),
            });
          return _.children(se);
        }
        function x(_, t) {
          const se = (0, S.KV)();
          return (0, m.I)({
            queryKey: [
              "crowdin_metadata_for_clan_event",
              _.ConvertTo64BitString(),
              t,
            ],
            queryFn: async () => {
              const ae = y.w.Init(re.$5);
              ae.Body().set_steamid(_.ConvertTo64BitString()),
                ae.Body().set_itemid(t);
              const L = await re.BE.GetClanEventCrowdInMetadata(se, ae);
              return L.GetEResult() != q.R ? null : L.Body().toObject();
            },
          });
        }
        async function J(_, t) {
          const se = y.w.Init(re.hA);
          se.Body().set_steamid(t);
          const ae = await re.BE.GetClanCrowdInMetadata(_, se);
          if (ae.GetEResult() === q.p)
            return {
              crowdin_project_id: null,
              crowdin_directory_id: null,
              push_by_default: !1,
            };
          if (ae.GetEResult() !== q.R) throw ae.GetEResult();
          return ae.Body().toObject();
        }
        function f(_) {
          const t = (0, S.KV)();
          return (0, m.I)({
            queryKey: ["clan_crowdin_mapping", _],
            queryFn: async () => await J(t, _),
          });
        }
        function A(_) {
          return G({
            queryKey: ["clan_crowdin_mapping", _.clanSteamId],
            queryFn: J,
            args: [_.clanSteamId],
            children: _.children,
          });
        }
        const p = (0, ge.createContext)(null);
        function B(_) {
          const t = f(_.clanInfo.clanSteamID.ConvertTo64BitString());
          let se = !1;
          return (
            t.isSuccess && (se = t.data.push_by_default),
            (0, e.jsx)(p.Provider, {
              value: {
                clanSteamId: _.clanInfo.clanSteamID,
                bPushToCrowdInByDefault: se,
              },
              children: _.children,
            })
          );
        }
        async function E(_, t, se, ae) {
          const L = y.w.Init(re.v7);
          L.Body().set_language(ae),
            L.Body().set_steamid(t),
            L.Body().set_itemid(se);
          const me = await re.BE.FetchTranslationFromCrowdIn(_, L);
          if (me.GetEResult() != q.R)
            throw new Error(
              `Error from FetchLocalizationForClanEventFromCrowdIn: ${me.GetErrorMessage()} (${me.GetEResult()})`,
            );
          return me.Body().toObject();
        }
        function O(_, t, se) {
          const ae = (0, S.KV)();
          return (0, R.n)({
            mutationKey: ["fetch_translation_for_clan_event", _, t, se],
            mutationFn: async function () {
              return await E(ae, _, t, se);
            },
            retry: !1,
          });
        }
      },
      84647: (W, be, o) => {
        "use strict";
        o.r(be), o.d(be, { FAQRoutes: () => Ge, default: () => Zt });
        var e = o(7850),
          q = o(75844),
          y = o(90626),
          m = o(99412),
          R = o(90395),
          S = o(19316),
          re = o(92757),
          ge = o(17083),
          G = o(3166),
          x = ((a) => (
            (a.k_eView = "view"),
            (a.k_eCommunityView = "communityview"),
            (a.k_eCommunityEdit = "edit"),
            (a.k_eCommunityDashboard = "dashboard"),
            (a.k_eCommunityPreview = "preview"),
            a
          ))(x || {});
        const J = (a) => {
          const { route: i, faqid: r } = a,
            l = f(i, r);
          return a.bForceRedirect
            ? (0, e.jsx)(re.rd, { push: !0, to: l })
            : a.bForceAnchor
              ? (0, e.jsx)("a", {
                  href: G.TS.COMMUNITY_BASE_URL.slice(0, -1) + l,
                  className: a.className,
                  children: a.children,
                })
              : (0, e.jsx)(ge.N_, {
                  to: l,
                  className: a.className,
                  children: a.children,
                });
        };
        function f(a, i) {
          let r = "/faqs/" + G.UF.VANITY_ID + "/";
          switch (a) {
            case "view":
            case "communityview":
              r += "view/" + (0, R.Wj)(i);
              break;
            case "edit":
              r += "edit/" + (0, R.Wj)(i);
              break;
            case "dashboard":
              r += "dashboard";
              break;
            case "preview":
              r += "preview/" + (0, R.Wj)(i);
              break;
          }
          return r;
        }
        var A = o(2801),
          p = o(88003),
          B = o(36118),
          E = o(85599),
          O = o(71421),
          _ = o(36707),
          t = o(18210),
          se = o(48473),
          ae = o(11259),
          L = o.n(ae),
          me = o(14947),
          I = o(72604),
          s = o(37739),
          n = o.n(s),
          d = o(76559),
          h = o(95695),
          g = o.n(h),
          D = o(26251),
          P = o(47689),
          H = o(82734),
          te = o(92264),
          F = o(20398),
          N = o(93084),
          T = o(35098);
        const Z = "title",
          Q = "content";
        function U(a, i) {
          var r, l;
          let c = new F.G();
          for (let u = m.Bhc; u < m.bP9; ++u)
            (a.BHasSomeTextForLanguage(u) || m.Bhc == i) &&
              (c.SetLocalization(
                Z,
                u,
                (r = a.GetDraftTitle(u)) != null ? r : "",
              ),
              c.SetLocalization(
                Q,
                u,
                (l = a.GetDraftContent(u)) != null ? l : "",
              ));
          return c;
        }
        function b(a, i, r) {
          const l = new Set(),
            c = i.GetSortedTokenList();
          return (
            (0, me.h5)(() => {
              r.forEach((u) => {
                let v = !1;
                c.forEach((C) => {
                  const w = i.GetLocalization(C, u) || "";
                  if (C === Z) {
                    const j = a.GetDraftTitle(u);
                    (w || (j && j.length > 0)) &&
                      (a.SetDraftTitle(u, w), (v = !0));
                  }
                  if (C === Q) {
                    const j = a.GetDraftContent(u);
                    (w || (j && j.length > 0)) &&
                      (a.SetDraftContent(u, w), (v = !0));
                  }
                }),
                  l.add(u);
              });
            }),
            Array.from(l)
          );
        }
        const ve = (a) => {
            const { draft: i, eLanguage: r } = a;
            return (0, e.jsxs)("div", {
              className: h.FlexRowContainer,
              children: [
                (0, e.jsx)(we, { draft: i, eLanguage: r }),
                (0, e.jsx)(D.t3, {
                  strToolTip: (0, t.we)("#FAQEditor_Loc_Import_ttip"),
                  strLabel: (0, t.we)("#EventEditor_Loc_Import_Short"),
                  fnOnImportLocData: (l, c) => b(i, l, c),
                }),
              ],
            });
          },
          pe = (a) => {
            const { draft: i } = a;
            return (0, e.jsxs)("div", {
              className: h.FlexRowContainer,
              children: [
                (0, e.jsx)("div", {
                  className: h.EditPreviewButton,
                  onClick: (r) => {
                    (0, p.pg)(
                      (0, e.jsx)(Ae, {
                        direction: "export",
                        draft: i,
                        children: " ",
                      }),
                      (0, H.uX)(r),
                    );
                  },
                  children: (0, t.we)("#EventEditor_Loc_Export_Short"),
                }),
                (0, e.jsx)("div", {
                  className: h.EditPreviewButton,
                  onClick: (r) => {
                    (0, p.pg)(
                      (0, e.jsx)(Ae, {
                        direction: "import",
                        draft: i,
                        children: " ",
                      }),
                      (0, H.uX)(r),
                    );
                  },
                  children: (0, t.we)("#EventEditor_Loc_Import_Short"),
                }),
              ],
            });
          },
          Ae = (a) => {
            const { closeModal: i, direction: r, draft: l } = a,
              [c, u] = y.useState(!1),
              [v, C] = y.useState(new Array()),
              w = c || v.length == 0,
              j = async () => {
                u(!0);
                try {
                  r == "import"
                    ? await R.pN
                        .Get()
                        .ImportNonEnglishDraftsFromCrowdin(l.GetFAQID(), v)
                    : await R.pN
                        .Get()
                        .ExportEnglishDraftToCrowdin(l.GetFAQID());
                } catch (je) {
                  console.error(je);
                }
                u(!1);
              },
              ne = (0, t.we)(
                r == "import"
                  ? "#EventEditor_Loc_CrowdinIntegration_ImportTitle"
                  : "#EventEditor_Loc_CrowdinIntegration_ExportTitle",
              ),
              ie = (0, t.we)(
                r == "import"
                  ? "#EventEditor_Loc_Import_Crowdin_Confirm"
                  : "#EventEditor_Loc_Export_Crowdin_Confirm",
              ),
              Y =
                r == "import"
                  ? (0, e.jsx)(ue, {
                      draft: l,
                      rgAllLanguages: K,
                      rgLanguagesSelected: v,
                      fnSelectLanguages: C,
                    })
                  : null;
            return (0, e.jsx)(A.o0, {
              className: N.LanguageListDialog,
              closeModal: i,
              strTitle: ne,
              strDescription: ie,
              onOK: j,
              bOKDisabled: c,
              children: c ? (0, e.jsx)(E.t, { position: "center" }) : Y,
            });
          },
          we = (a) => {
            const { draft: i, eLanguage: r } = a;
            return (0, e.jsx)(O.he, {
              toolTipContent: (0, t.we)("#FAQEditor_Loc_Export_ttip"),
              children: (0, e.jsx)("div", {
                className: h.EditPreviewButton,
                onClick: (l) => {
                  (0, p.pg)(
                    (0, e.jsx)(A.o0, {
                      strTitle: (0, t.we)("#EventEditor_Loc_Export"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)(D.Yg, {
                        fnGetLocData: () => U(i, r),
                        bShowXML: !0,
                        bShowCSV: !0,
                        strFileNamePrefix: "faq",
                        lang: r,
                      }),
                    }),
                    (0, H.uX)(l),
                  );
                },
                children: (0, t.we)("#EventEditor_Loc_Export_Short"),
              }),
            });
          },
          k = [
            0, 9, 8, 12, 14, 21, 2, 3, 20, 24, 13, 17, 16, 5, 6, 7, 15, 23, 11,
            4, 19, 25, 18, 1, 10, 28, 26, 22, 27, 29, 30, 31,
          ],
          K = [
            m.Uu1,
            m.NFp,
            m.A4L,
            m.m2$,
            m.iQT,
            m.L3y,
            m.egf,
            m.xcz,
            m.FH6,
            m.dZ5,
            m.K91,
            m.dFE,
            m.OFl,
            m.Pn1,
            m.JBx,
            m._Q1,
            m.QT4,
            m.Lzz,
            m.kG6,
            m.GXE,
            m.HkE,
            m.FHN,
            m.wWt,
            m.$ys,
            m.RhO,
            m.JOj,
            m.kSD,
            m.Ze9,
            m.Vlm,
          ],
          ue = (a) => {
            const {
                draft: i,
                rgAllLanguages: r,
                rgLanguagesSelected: l,
                fnSelectLanguages: c,
              } = a,
              u = (w, j) => {
                const ne = l.includes(j);
                if (w && !ne) {
                  const ie = l.slice();
                  ie.push(j), c(ie);
                } else if (!w && ne) {
                  const ie = l.filter((Y) => Y !== j);
                  c(ie);
                }
              },
              v = (w) => {
                c(w ? r.slice() : []);
              },
              C = r
                .sort((w, j) => k[w] - k[j])
                .map((w) =>
                  (0, e.jsx)(
                    z,
                    {
                      draft: i,
                      eLang: w,
                      bInitialState: l.includes(w),
                      fnOnChecked: u,
                    },
                    "langrow" + w + i.GetFAQID(),
                  ),
                );
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: N.ChecklistHeader,
                  children: [
                    (0, e.jsx)("div", {
                      className: N.Language,
                      children: (0, t.we)("#FAQCrowdin_LanguageHeader"),
                    }),
                    (0, e.jsx)("div", {
                      className: N.Timestamp,
                      children: (0, t.we)("#FAQCrowdin_DraftTimestampHeader"),
                    }),
                  ],
                }),
                (0, e.jsx)(S.Yh, {
                  className: N.CheckAll,
                  label: (0, t.we)("#FAQCrowdin_SelectAllCheckboxes"),
                  onChange: v,
                }),
                (0, e.jsx)("div", {
                  className: N.ChecklistRows,
                  children:
                    C != null
                      ? C
                      : (0, e.jsx)("div", {
                          children: (0, t.we)("#FAQCrowdin_NoDraftFound"),
                        }),
                }),
              ],
            });
          },
          z = (a) => {
            var i;
            const { draft: r, eLang: l, bInitialState: c, fnOnChecked: u } = a,
              v = r.GetLastSavedDraftVersion(l),
              C = v
                ? d.b.InitFromAccountID(Number.parseInt(v.author_account_id))
                : null,
              { data: w } = (0, T.js)(C == null ? void 0 : C.GetAccountID()),
              j = v
                ? (0, t.we)(
                    "#FAQCrowdin_SavedAtTimeByAuthor",
                    (0, t.TW)(v.timestamp) +
                      " @ " +
                      (0, te.KC)(v.timestamp, { bForce24HourClock: !1 }),
                    (i = w == null ? void 0 : w.m_strPlayerName) != null
                      ? i
                      : v.author_account_id,
                  )
                : (0, t.we)("#FAQCrowdin_NoDraftFound"),
              ne = (0, e.jsxs)("div", {
                className: N.LanguageCheckboxLabel,
                children: [
                  (0, e.jsx)("div", {
                    className: N.Language,
                    children: (0, t.we)("#Language_" + (0, m.LgB)(l)),
                  }),
                  (0, e.jsx)("div", { className: N.Timestamp, children: j }),
                ],
              });
            return (0, e.jsx)(S.Yh, {
              className: N.LanguageCheckbox,
              label: ne,
              checked: c,
              onChange: (ie) => u(ie, l),
            });
          };
        function de(a) {
          const [i, r] = (0, R.cf)(),
            [l, c] = y.useState(0),
            [u, v] = y.useState(!1),
            [C, w] = y.useState(!1),
            [j, ne] = y.useState(null),
            ie = (0, P.m)("CrowdinImportDialog"),
            Y = y.useRef([]),
            je = async () => {
              v(!0);
              for (let _e = 0; _e < i.length; _e++) {
                c(_e);
                const Ue = i[_e],
                  ke = [],
                  Xe = 5;
                for (let ze = 0; ze < K.length; ze += Xe) {
                  const Jt = K.slice(ze, ze + Xe);
                  ke.push(
                    R.pN
                      .Get()
                      .ImportNonEnglishDraftsFromCrowdin(Ue.faq_id, Jt, ie),
                  );
                }
                await Promise.all(ke),
                  R.pN.Get().BHasLiveEnglishVersion(Ue.faq_id)
                    ? ((Y.current[_e] = R.pN
                        .Get()
                        .GetNonEnglishDraftsToPublish(Ue.faq_id)),
                      console.log(
                        "Going to publish FAQ",
                        Ue.faq_id,
                        Y.current[_e].map((ze) => (0, m.LgB)(ze)),
                      ))
                    : console.log("No live english version for:", Ue.faq_id);
              }
              for (let _e = 0; _e < Y.current.length; _e++) {
                const Ue = i[_e],
                  ke = Y.current[_e];
                if ((ke == null ? void 0 : ke.length) > 0) {
                  c(_e);
                  const Xe = await R.pN
                    .Get()
                    .PublishDraftByLanguage(Ue.faq_id, ke);
                  if (ie.token.reason) return;
                  if (Xe != I.R) {
                    ne((0, t.we)("#FAQDashboard_PublishFailed"));
                    return;
                  }
                }
              }
              w(!0), v(!1);
            };
          if (j)
            return (0, e.jsx)(A.o0, {
              strTitle: (0, t.we)("#FAQDashboard_CrowdinToolTitle"),
              strDescription: j,
              bAlertDialog: !0,
              bDestructiveWarning: !0,
              closeModal: a.closeModal,
            });
          if (C)
            return (0, e.jsx)(A.o0, {
              strTitle: (0, t.we)("#FAQDashboard_CrowdinToolTitle"),
              strDescription: (0, t.we)("#FAQDashboard_PublishComplete"),
              bAlertDialog: !0,
              closeModal: a.closeModal,
            });
          const M = (100 * (l + 0.5)) / i.length,
            $ = i[l].internal_name;
          return (0, e.jsx)(A.eV, {
            title: (0, t.we)("#FAQDashboard_CrowdinToolTitle"),
            ...a,
            onCancel: () => ie.cancel("CrowdinImportDialog cancelled"),
            children: (0, e.jsxs)(S.nB, {
              children: [
                (0, e.jsxs)(S.a3, {
                  children: [
                    (0, t.we)(
                      "#FAQDashboard_CrowdinToolInstructionsWithCount",
                      i.length,
                    ),
                    (0, e.jsx)("div", {
                      className: N.Warning,
                      children: (0, t.we)("#FAQDashboard_CrowdinToolWarning"),
                    }),
                  ],
                }),
                (0, e.jsxs)(S.a3, {
                  children: [
                    (0, e.jsx)(S.$n, {
                      onClick: je,
                      disabled: u,
                      children: (0, t.we)("#FAQDashboard_UpdateAllFAQsButton"),
                    }),
                    u &&
                      (0, e.jsx)(Ee, { nProgressPct: M, strCurrentLabel: $ }),
                    Y.current.length > 0 &&
                      (0, e.jsx)(ce, {
                        rgUpdatedLanguagesForAllFAQs: Y.current,
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function Ee(a) {
          const { nProgressPct: i, strCurrentLabel: r } = a;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: N.ImportProgressBar,
                children: (0, e.jsx)("div", {
                  className: N.ProgressMarker,
                  style: { width: i + "%" },
                }),
              }),
              (0, e.jsx)("div", {
                className: N.CurrentFAQ,
                children: (0, t.we)("#FAQDashboard_CrowdinToolProgress", r),
              }),
            ],
          });
        }
        function ce(a) {
          const { rgUpdatedLanguagesForAllFAQs: i } = a,
            [r, l] = (0, R.cf)();
          return (0, e.jsxs)("div", {
            className: N.ImportResults,
            children: [
              (0, e.jsx)("div", {
                className: N.ImportResultLabel,
                children: (0, t.we)("#FAQDashboard_CrowdinToolResultsLabel"),
              }),
              i.map((c, u) => {
                const v = r[u];
                if (c.length == 0) return null;
                const C = c.map((w) => (0, m.wwZ)(w)).join(",");
                return (0, e.jsx)(
                  "div",
                  {
                    children: (0, e.jsxs)("div", {
                      className: N.ImportResult,
                      children: [
                        (0, e.jsx)(O.he, {
                          toolTipContent: v.internal_name,
                          strTooltipClassname: n().HoverAboveModal,
                          nAllowOffscreenPx: 4e4,
                          className: N.UrlCode,
                          children: v.url_code + ": ",
                        }),
                        (0, e.jsx)(O.he, {
                          toolTipContent: C,
                          strTooltipClassname: n().HoverAboveModal,
                          nAllowOffscreenPx: 4e4,
                          direction: "left",
                          className: N.LanguageList,
                          children: C,
                        }),
                      ],
                    }),
                  },
                  v.faq_id,
                );
              }),
            ],
          });
        }
        var ee = o(72429),
          V = o(55351),
          xe = o.n(V),
          X = o(3063),
          oe = o.n(X);
        const fe = (a) => {
          const { rtTimestamp: i, bShowAsWarning: r } = a;
          if (!i)
            return (0, e.jsx)("div", {
              className: oe().Never,
              children: (0, t.we)("#FAQDashboard_TimeNever"),
            });
          const l = Date.now() / 1e3 - i,
            c = l < 24 * 3600 ? (0, t.Hq)(l, !1, !0) : (0, t.$z)(i);
          return (0, e.jsx)(ee.gS, {
            className: r && oe().Warning,
            rtFullDate: i,
            stylesmodule: xe(),
            children: c,
          });
        };
        var Ne = ((a) => (
          (a[(a.k_EFaqID = 0)] = "k_EFaqID"),
          (a[(a.k_EName = 1)] = "k_EName"),
          (a[(a.k_EDraftTimestamp = 2)] = "k_EDraftTimestamp"),
          (a[(a.k_EUpdatedDrafts = 3)] = "k_EUpdatedDrafts"),
          (a[(a.k_EStaleDrafts = 4)] = "k_EStaleDrafts"),
          (a[(a.k_EPublished = 5)] = "k_EPublished"),
          (a[(a.k_ENeedPublish = 6)] = "k_ENeedPublish"),
          (a[(a.k_EGlobalVisible = 7)] = "k_EGlobalVisible"),
          (a[(a.k_ESteamChinaVisible = 8)] = "k_ESteamChinaVisible"),
          a
        ))(Ne || {});
        const Fe = (0, q.PA)((a) => {
            const [i, r] = (0, R.cf)(),
              [l, c] = y.useState(1),
              v = i
                .map((C) => {
                  const w = C.per_language_info.find(
                      (M) => M.language == m.Bhc,
                    ),
                    j = (w == null ? void 0 : w.last_update_timestamp) || 0,
                    ne = Array.from(
                      C.per_language_info.filter(
                        (M) =>
                          M.language != m.Bhc && M.last_update_timestamp >= j,
                      ),
                    ).length,
                    ie = Array.from(
                      C.per_language_info.filter(
                        (M) => M.last_update_timestamp < j,
                      ),
                    ).length,
                    Y = Array.from(
                      C.per_language_info.filter(
                        (M) =>
                          M.last_publish_timestamp >= M.last_update_timestamp,
                      ),
                    ).length,
                    je = Array.from(
                      C.per_language_info.filter(
                        (M) =>
                          M.last_publish_timestamp < M.last_update_timestamp,
                      ),
                    ).length;
                  return [
                    C.faq_id,
                    C.internal_name,
                    j,
                    ne,
                    ie,
                    Y,
                    je,
                    C.visible_in_global_realm,
                    C.visible_in_china_realm,
                  ];
                })
                .sort((C, w) =>
                  l == 1 ? (0, se.lY)(C[1], w[1]) : w[l] - C[l],
                );
            return (
              (0, y.useEffect)(() => {
                R.pN.Get().RemoveAllDirtyDrafts();
              }, []),
              (0, e.jsx)("div", {
                className: L().FAQDashboardPage,
                children: (0, e.jsxs)("div", {
                  className: L().FAQDashboard,
                  children: [
                    (0, e.jsx)(Qe, {}),
                    (0, e.jsx)(Te, { eCurrentSortColumn: l, SetSortColumn: c }),
                    i.length == 0 &&
                      (0, e.jsx)("div", {
                        className: L().ErrorMsg,
                        children: (0, t.we)("#FAQDashboard_Empty"),
                      }),
                    v.map((C) => (0, e.jsx)(Ve, { rgColumns: C }, C[0])),
                    !r &&
                      (0, e.jsx)(E.t, { position: "center", size: "xlarge" }),
                  ],
                }),
              })
            );
          }),
          Qe = (a) => {
            const i = y.useCallback(
                () =>
                  (0, p.mK)((0, e.jsx)(Le, {}), window, {
                    strTitle: (0, t.we)("#FAQDashboard_CreateFAQButton"),
                  }),
                [],
              ),
              r = y.useCallback(
                () =>
                  (0, p.mK)(
                    (0, e.jsx)(de, { bDisableBackgroundDismiss: !0 }),
                    window,
                    { strTitle: (0, t.we)("#FAQDashboard_CrowdinToolTitle") },
                  ),
                [],
              );
            return (0, e.jsxs)("div", {
              className: L().DashboardHeader,
              children: [
                (0, e.jsx)("div", {
                  className: L().DashboardHeaderTitle,
                  children: (0, t.we)("#FAQDashboard_Header"),
                }),
                (0, e.jsxs)("div", {
                  className: L().DashboardHeaderButtonCtn,
                  children: [
                    (0, e.jsx)(S.$n, {
                      onClick: r,
                      children: (0, t.we)("#FAQDashboard_CrowdinToolButton"),
                    }),
                    (0, e.jsx)(S.jn, {
                      onClick: i,
                      children: (0, t.we)("#FAQDashboard_CreateFAQButton"),
                    }),
                  ],
                }),
              ],
            });
          },
          Le = (a) => {
            const [i, r] = y.useState("");
            return (0, e.jsxs)(A.o0, {
              onOK: () => {
                R.pN.Get().CreateFAQ(i);
              },
              bOKDisabled: i.length == 0,
              closeModal: a.closeModal,
              className: L().CreateFAQDialog,
              children: [
                (0, e.jsx)(S.Y9, {
                  children: (0, t.we)("#FAQDashboard_CreateFAQButton"),
                }),
                (0, e.jsx)(S.nB, {
                  children: (0, e.jsxs)(S.a3, {
                    children: [
                      (0, t.we)("#FAQDashboard_CreateFAQInstructions"),
                      (0, e.jsx)("input", {
                        type: "text",
                        className: L().NameInput,
                        value: i,
                        placeholder: (0, t.we)("#FAQDashboard_NamePlaceHolder"),
                        onFocus: (c) => c.target.select(),
                        onChange: (c) => r(c.currentTarget.value),
                        maxLength: 120,
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          Te = (a) =>
            (0, e.jsxs)("div", {
              className: L().DashboardListHeaderRow,
              children: [
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_NameColumn",
                  bIsNameColumn: !0,
                  eThisColumn: 1,
                  ...a,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_DraftTimetampColumn",
                  eThisColumn: 2,
                  ...a,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_UpdatedLanguagesColumn",
                  eThisColumn: 3,
                  ...a,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_StaleLanguagesColumn",
                  eThisColumn: 4,
                  ...a,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_PublishedLanguagesColumn",
                  eThisColumn: 5,
                  ...a,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_NeedPublishColumn",
                  eThisColumn: 6,
                  ...a,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_VisibilityColumn",
                  eThisColumn: 7,
                  ...a,
                }),
                (0, e.jsx)(le, {
                  strLabelLocToken: "#FAQDashboard_SteamChinaVisibilityColumn",
                  eThisColumn: 8,
                  ...a,
                }),
              ],
            }),
          le = (a) => {
            const {
                strLabelLocToken: i,
                bIsNameColumn: r,
                eThisColumn: l,
                eCurrentSortColumn: c,
                SetSortColumn: u,
              } = a,
              v = (0, _.A)(
                L().EntryColumn,
                L().ClickableHeader,
                r ? L().NameCol : L().DataCol,
                c == l && L().Selected,
              );
            return (0, e.jsxs)(O.he, {
              toolTipContent: (0, t.we)(i + "_ttip"),
              direction: "top",
              className: v,
              onClick: () => u(l),
              children: [
                (0, t.we)(i),
                (0, e.jsx)("div", {
                  className: L().DownArrow,
                  children: (0, e.jsx)(B.GB9, {}),
                }),
              ],
            });
          },
          Ce = (a) => {
            const { nCount: i, nTotal: r, nGoal: l } = a;
            return (0, e.jsx)("div", {
              className: i == l ? L().GoodCount : L().BadCount,
              children: i + " / " + r,
            });
          },
          Se = (a) => {
            const { bIsVisible: i } = a;
            return (0, e.jsx)("div", {
              className: i ? L().Visible : L().Hidden,
              children: (0, t.we)(
                i ? "#FAQDashboard_Visible" : "#FAQDashboard_Invisible",
              ),
            });
          },
          Ve = (a) => {
            const [i, r, l, c, u, v, C, w, j] = a.rgColumns,
              ne = v + C,
              ie = c + u;
            return (0, e.jsxs)(J, {
              route: x.k_eCommunityEdit,
              faqid: i,
              className: L().DashboardEntry,
              children: [
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().NameCol),
                  children: (0, e.jsx)("div", {
                    className: L().EntryInternalName,
                    children: r,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(fe, { rtTimestamp: l }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Ce, {
                    nCount: c,
                    nTotal: ie,
                    nGoal: ie,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Ce, { nCount: u, nTotal: ie, nGoal: 0 }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Ce, {
                    nCount: v,
                    nTotal: ne,
                    nGoal: ne,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Ce, { nCount: C, nTotal: ne, nGoal: 0 }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Se, { bIsVisible: w }),
                }),
                (0, e.jsx)("div", {
                  className: (0, _.A)(L().EntryColumn, L().DataCol),
                  children: (0, e.jsx)(Se, { bIsVisible: j }),
                }),
              ],
            });
          },
          We = (a) => {
            y.useEffect(
              () => (
                (window.onbeforeunload = () => {
                  var r;
                  const l = R.pN.Get().GetLoadedDraftObjs();
                  return ((r =
                    l == null ? void 0 : l.filter((u) => u.BNeedsSaving())) ==
                  null
                    ? void 0
                    : r.length) > 0
                    ? (0, t.we)("#EventEditor_UnsavedChanges")
                    : null;
                }),
                () => {
                  window.onbeforeunload = () => {};
                }
              ),
              [],
            );
            const i = (r) => {
              var l, c;
              const u = R.pN.Get().GetLoadedDraftObjs();
              return ((l =
                u == null ? void 0 : u.filter((C) => C.BNeedsSaving())) == null
                ? void 0
                : l.length) > 0 &&
                (r.pathname == Ge.DashboardFAQ(G.UF.VANITY_ID) ||
                  ((c = r.pathname) != null &&
                    c.startsWith(Ge.ViewFAQ(G.UF.VANITY_ID, "").slice(0, -1))))
                ? (0, t.we)("#EventEditor_UnsavedChanges")
                : !0;
            };
            return (0, e.jsx)(re.XG, { message: i });
          };
        var Re = o(89084),
          ye = o(9046),
          Be = o(35524),
          Me = o(50109),
          dt = o(45638),
          Oe = o(25792),
          ct = o(4748),
          ut = o(63280),
          De = o.n(ut),
          He = o(74916),
          Ke = o(34592);
        const ht = (a) => {
            const i = (r) => {
              (0, p.pg)((0, e.jsx)(gt, { draft: a.draft }), (0, H.uX)(r));
            };
            return (0, e.jsx)(O.he, {
              toolTipContent: (0, t.we)("#FAQEditor_DeleteAction_ttip"),
              children: (0, e.jsx)("div", {
                className: (0, _.A)(h.EditPreviewButton, h.Delete),
                onClick: i,
                children: (0, t.we)("#FAQEditor_DeleteAction"),
              }),
            });
          },
          gt = (a) => {
            const { draft: i } = a,
              r = () => a.closeModal && a.closeModal(),
              [l, c] = y.useState(!1),
              [u, v] = y.useState(void 0);
            let C = (0, e.jsx)("div", {
              children: (0, t.we)("#FAQEditor_DeleteDesc"),
            });
            return (
              l
                ? (C = (0, e.jsx)(E.t, {
                    position: "center",
                    size: "medium",
                    string: (0, t.we)("#FAQEditor_DeletingInProgress"),
                  }))
                : u &&
                  (C = (0, e.jsx)("div", {
                    children: (0, t.we)(
                      "Error_Description",
                      u,
                      (0, t.we)("#Error_GenericFailureDescription"),
                    ),
                  })),
              (0, e.jsx)(Oe.tH, {
                children: (0, e.jsx)(A.x_, {
                  onEscKeypress: r,
                  children: (0, e.jsxs)(S.UC, {
                    children: [
                      (0, e.jsx)(S.Y9, {
                        children: (0, t.we)("#FAQEditor_DeleteAction"),
                      }),
                      (0, e.jsx)(S.nB, {
                        children: (0, e.jsx)(S.a3, { children: C }),
                      }),
                      (0, e.jsx)(S.wi, {
                        children: (0, e.jsx)(S.CB, {
                          onCancel: r,
                          bOKDisabled: !!(l || u),
                          strOKText: (0, t.we)("#FAQEditor_DeleteAction"),
                          strCancelText:
                            l || u ? (0, t.we)("#Button_OK") : void 0,
                          onOK: async () => {
                            c(!0),
                              R.pN
                                .Get()
                                .DeleteFAQ(i.GetFAQID())
                                .then((w) => {
                                  if (w == I.R) {
                                    const j =
                                      G.TS.COMMUNITY_BASE_URL.substr(
                                        0,
                                        G.TS.COMMUNITY_BASE_URL.length - 1,
                                      ) + f(x.k_eCommunityDashboard);
                                    window.location.href = j;
                                  }
                                  v(w);
                                })
                                .catch((w) => {
                                  const j = (0, Ke.H)(w);
                                  console.error(
                                    "FAQDeleteDialog: hit error: " +
                                      j.strErrorMsg,
                                    j,
                                  ),
                                    v(I.zi);
                                })
                                .finally(() => c(!1));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          },
          mt = (0, q.PA)((a) => {
            const { draft: i, bDisabled: r } = a,
              l = i.BNeedsSaving(),
              c = (u) => {
                r ||
                  (0, p.pg)(
                    l
                      ? (0, e.jsx)(A.KG, {
                          strDescription: (0, t.we)(
                            "#FAQPublish_SaveRequire_ttip",
                          ),
                        })
                      : (0, e.jsx)(ft, { draft: a.draft }),
                    (0, H.uX)(u),
                  );
              };
            return (0, e.jsx)(O.he, {
              toolTipContent: (0, t.we)(
                l ? "#FAQPublish_SaveRequire_ttip" : "#FAQPublish_Publish_ttip",
              ),
              children: (0, e.jsx)("div", {
                className: (0, _.A)(h.EditPreviewButton, r && h.Disabled),
                onClick: c,
                children: (0, t.we)("#FAQPublish_Publish"),
              }),
            });
          }),
          ft = (a) => {
            var i;
            const { draft: r } = a,
              l = () => a.closeModal && a.closeModal(),
              [c, u] = y.useState(!1),
              [v, C] = y.useState(void 0),
              [w, j] = y.useState(void 0),
              [ne, ie] = (0, R.g5)(r.GetFAQID()),
              [Y, je] = y.useState(new Array());
            let M = null;
            if (!ie)
              M = (0, e.jsx)(E.t, {
                size: "small",
                position: "center",
                string: (0, t.we)("#FAQPublish_PublishWait"),
              });
            else if (c)
              M = (0, e.jsx)(E.t, {
                position: "center",
                size: "medium",
                string: (0, t.we)("#FAQPublish_Publishing"),
              });
            else if (v)
              M = (0, e.jsx)("div", {
                children: (0, t.we)("#FAQPublish_Success"),
              });
            else if (w)
              M = (0, e.jsx)("div", {
                children: (0, t.we)(
                  "#Error_Description",
                  w,
                  (0, t.we)("#Error_GenericFailureDescription"),
                ),
              });
            else if (!ne)
              M = (0, e.jsx)("div", {
                children: (0, t.we)("#FAQPublish_LoadError"),
              });
            else {
              const $ =
                (i = ne.per_language_info) == null
                  ? void 0
                  : i
                      .filter(
                        (_e) =>
                          _e.last_publish_timestamp < _e.last_update_timestamp,
                      )
                      .map((_e) => _e.language);
              M = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    children: (0, t.we)("#FAQPublish_Desc"),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("div", {
                    children: (0, t.we)("#FAQPublish_Desc2"),
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(ue, {
                    draft: r,
                    rgAllLanguages: $,
                    rgLanguagesSelected: Y,
                    fnSelectLanguages: je,
                  }),
                ],
              });
            }
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsx)(A.x_, {
                onEscKeypress: l,
                children: (0, e.jsxs)(S.UC, {
                  className: N.LanguageListDialog,
                  children: [
                    (0, e.jsx)(S.Y9, {
                      children: (0, t.we)("#FAQPublish_Publish"),
                    }),
                    (0, e.jsx)(S.nB, {
                      children: (0, e.jsx)(S.a3, { children: M }),
                    }),
                    (0, e.jsx)(S.wi, {
                      children: (0, e.jsx)(S.CB, {
                        onCancel: l,
                        bOKDisabled: !!(c || v || w || Y.length == 0),
                        strOKText: (0, t.we)("#FAQPublish_Publish"),
                        strCancelText:
                          c || v || w ? (0, t.we)("#Button_OK") : void 0,
                        onOK: async () => {
                          u(!0),
                            R.pN
                              .Get()
                              .PublishDraftByLanguage(r.GetFAQID(), Y)
                              .then(($) => {
                                $ == I.R && C(!0), j($);
                              })
                              .catch(($) => {
                                const _e = (0, Ke.H)($);
                                console.error(
                                  "FAQPublishDialog: hit error: " +
                                    _e.strErrorMsg,
                                  _e,
                                ),
                                  j(I.zi);
                              })
                              .finally(() => u(!1));
                        },
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          _t = (a) => {
            const i = (r) => {
              (0, p.pg)((0, e.jsx)(pt, { draft: a.draft }), (0, H.uX)(r));
            };
            return (0, e.jsx)(O.he, {
              toolTipContent: (0, t.we)("#FAQEditor_ChangeVisible_ttip"),
              children: (0, e.jsx)("div", {
                className: h.EditPreviewButton,
                onClick: i,
                children: (0, t.we)("#FAQEditor_EditVisible"),
              }),
            });
          },
          pt = (a) => {
            const { draft: i } = a,
              r = () => a.closeModal && a.closeModal(),
              [l, c] = y.useState(!1),
              [u, v] = y.useState(void 0),
              [C, w] = y.useState(void 0),
              j = R.pN.Get().GetFAQArticleSummary(i.GetFAQID()),
              [ne, ie] = y.useState(j.visible_in_global_realm),
              [Y, je] = y.useState(j.visible_in_china_realm);
            let M = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  children: (0, t.we)("#FAQEditor_ChangeVisible_Desc"),
                }),
                (0, e.jsx)(S.Yh, {
                  label: (0, t.we)("#FAQEditor_VisibleInGlobal"),
                  checked: ne,
                  onChange: ($) => ie($),
                }),
                (0, e.jsx)(S.Yh, {
                  label: (0, t.we)("#FAQEditor_VisibleInChina"),
                  checked: Y,
                  tooltip: (0, t.we)("#FAQEditor_VisibleInChina_ttip"),
                  onChange: ($) => je($),
                }),
              ],
            });
            return (
              l
                ? (M = (0, e.jsx)(E.t, {
                    position: "center",
                    size: "medium",
                    string: (0, t.we)("#FAQEditor_ChangeVisible_InProgress"),
                  }))
                : u
                  ? (M = (0, e.jsx)("div", {
                      children: (0, t.we)("#FAQEditor_ChangeVisible_Success"),
                    }))
                  : C &&
                    (M = (0, e.jsx)("div", {
                      children: (0, t.we)(
                        "Error_Description",
                        C,
                        (0, t.we)("#Error_GenericFailureDescription"),
                      ),
                    })),
              (0, e.jsx)(Oe.tH, {
                children: (0, e.jsx)(A.x_, {
                  onEscKeypress: r,
                  children: (0, e.jsxs)(S.UC, {
                    children: [
                      (0, e.jsx)(S.Y9, {
                        children: (0, t.we)("#FAQEditor_ChangeVisible"),
                      }),
                      (0, e.jsx)(S.nB, {
                        children: (0, e.jsx)(S.a3, { children: M }),
                      }),
                      (0, e.jsx)(S.wi, {
                        children: (0, e.jsx)(S.CB, {
                          onCancel: r,
                          bOKDisabled: !!(l || u || C),
                          strOKText: (0, t.we)("#FAQEditor_ChangeVisible"),
                          strCancelText:
                            l || u || C ? (0, t.we)("#Button_OK") : void 0,
                          onOK: async () => {
                            c(!0),
                              R.pN
                                .Get()
                                .UpdateVisibility(i.GetFAQID(), ne, Y)
                                .then(($) => {
                                  $ == I.R && v(!0), w($);
                                })
                                .catch(($) => {
                                  const _e = (0, Ke.H)($);
                                  console.error(
                                    "FAQChangeVisibilityDialog: hit error: " +
                                      _e.strErrorMsg,
                                    _e,
                                  ),
                                    w(I.zi);
                                })
                                .finally(() => c(!1));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          };
        var he = o(35707),
          vt = o(6864),
          tt = o(68312),
          At = o(61739),
          Et = o(88942),
          nt = o(35038);
        const Ct = (0, q.PA)((a) => {
            var i, r, l, c, u;
            const { draft: v, eLanguage: C } = a,
              w = v.GetFAQID(),
              [j, ne] = (0, R.g5)(w);
            if (!ne) return null;
            const ie =
                (r =
                  (i = j == null ? void 0 : j.per_language_info) == null
                    ? void 0
                    : i.find((M) => M.language == m.Bhc)) == null
                  ? void 0
                  : r.last_update_timestamp,
              Y =
                (l = j == null ? void 0 : j.per_language_info) == null
                  ? void 0
                  : l.some(
                      (M) => M.last_publish_timestamp < M.last_update_timestamp,
                    ),
              je =
                (u =
                  (c = j == null ? void 0 : j.per_language_info) == null
                    ? void 0
                    : c
                        .slice()
                        .sort((M, $) => k[M.language] - k[$.language])) == null
                  ? void 0
                  : u.map((M) =>
                      (0, e.jsx)(
                        Lt,
                        { info: M, rtEnglishUpdateTime: ie },
                        M.language,
                      ),
                    );
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsxs)("div", {
                className: he.LeftMenu,
                children: [
                  (0, e.jsxs)("div", {
                    className: he.Section,
                    children: [
                      (0, e.jsxs)("div", {
                        className: he.SectionTitle,
                        children: [
                          (0, t.we)("#FAQDashboard_VisibilityColumn"),
                          " ",
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: he.SectionContents,
                        children: [
                          (0, e.jsxs)("div", {
                            className: he.VisibilityCtn,
                            children: [
                              (0, e.jsxs)("div", {
                                className: (0, _.A)(he.StatusRow, he.Global),
                                children: [
                                  (0, t.we)(
                                    "#FAQDashboard_VisibleInGlobalRealmLabel",
                                  ),
                                  "\xA0",
                                  (0, e.jsx)(Se, {
                                    bIsVisible: j.visible_in_global_realm,
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, _.A)(he.StatusRow, he.China),
                                children: [
                                  (0, t.we)(
                                    "#FAQDashboard_VisibleInChinaRealmLabel",
                                  ),
                                  "\xA0",
                                  (0, e.jsx)(Se, {
                                    bIsVisible: j.visible_in_china_realm,
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                className: he.StatusBtnCtn,
                                children: (0, e.jsx)(_t, { draft: v }),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: he.PublishCtn,
                            children: [
                              Y
                                ? (0, e.jsx)("div", {
                                    className: he.PublishStatus,
                                    children: (0, t.we)(
                                      "#FAQStatus_DraftVersionsDesc",
                                    ),
                                  })
                                : (0, e.jsx)("div", {
                                    className: he.PublishStatus,
                                    children: (0, t.we)(
                                      "#FAQStatus_NothingToPublish",
                                    ),
                                  }),
                              (0, e.jsx)("div", {
                                className: he.PublishBtn,
                                children: (0, e.jsx)(mt, {
                                  draft: v,
                                  bDisabled: !Y,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: he.Section,
                    children: [
                      (0, e.jsx)("div", {
                        className: he.SectionTitle,
                        children: (0, t.we)(
                          "#FAQDashboard_LocalizationSection",
                        ),
                      }),
                      G.iA.is_support && (0, e.jsx)(xt, { draft: v }),
                      (0, e.jsxs)("div", {
                        className: he.SectionContents,
                        children: [
                          (0, e.jsx)("div", {
                            className: he.SectionDescription,
                            children: (0, t.we)(
                              "#FAQDashboard_LocalizationSectionDesc",
                            ),
                          }),
                          (0, e.jsx)(ve, { draft: v, eLanguage: C }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: he.SectionContents,
                        children: [
                          (0, e.jsx)("div", {
                            className: he.SectionDescription,
                            children: (0, t.we)(
                              "#EventEditor_Loc_CrowdinIntegration_Desc",
                            ),
                          }),
                          (0, e.jsx)(pe, { draft: v }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: he.Section,
                    children: [
                      (0, e.jsx)("div", {
                        className: he.SectionTitle,
                        children: (0, t.we)(
                          "#FAQStatus_LocalizedVersionStatusHeader",
                        ),
                      }),
                      (0, e.jsxs)("table", {
                        className: he.FaqStatusTable,
                        children: [
                          (0, e.jsx)("thead", {
                            children: (0, e.jsxs)("tr", {
                              children: [
                                (0, e.jsx)("th", {
                                  children: (0, t.we)("#LanguageTitle"),
                                }),
                                (0, e.jsx)("th", {
                                  children: (0, t.we)("#FAQStatus_LastUpdated"),
                                }),
                                (0, e.jsx)("th", {
                                  children: (0, t.we)(
                                    "#FAQStatus_LastPublished",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("tbody", { children: je }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: he.Section,
                    children: (0, e.jsx)(ht, { draft: v }),
                  }),
                ],
              }),
            });
          }),
          xt = (0, q.PA)((a) => {
            const { draft: i } = a,
              r = Dt(i.GetFAQID()),
              l = jt(G.UF.CLANSTEAMID, i.GetFAQID()),
              [c, u] = (0, y.useState)(m.xPp),
              [v, C] = (0, y.useState)(!1),
              w = (je) => {
                const M = je.target.value;
                if (M === "all") u(m.xPp);
                else {
                  const $ = (0, m.sfN)(M);
                  u($);
                }
              },
              j = async (je) => {
                const M = i.GetJsonData();
                let $;
                M.length === 0 ? ($ = {}) : ($ = JSON.parse(M)),
                  ($.pushToCrowdIn = je.target.checked),
                  await i.UpdateJsonData($);
              },
              ne = async (je) => {
                const M = i.GetJsonData();
                let $;
                M.length === 0 ? ($ = {}) : ($ = JSON.parse(M)),
                  ($.localizeDraft = je.target.checked),
                  await i.UpdateJsonData($);
              },
              ie = async () => {
                C(!0), await r.mutateAsync(c), C(!1), window.location.reload();
              };
            let Y = "";
            return (
              l.isSuccess &&
                l.data.crowdin_file_id &&
                (Y = `https://valve.crowdin.com/editor/${l.data.crowdin_project_id}/${l.data.crowdin_file_id}`),
              null
            );
            return (0, e.jsxs)("div", {
              className: he.SectionContents,
              children: [
                !1,
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      id: "localize_draft",
                      checked: i.BLocalizeDraft(),
                      onChange: ne,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "localize_draft",
                      children: (0, t.we)(
                        "#FAQDashboard_CrowdIn_LocalizeDraft",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      id: "push_to_crowdin",
                      checked: i.BPushToCrowdIn(),
                      onChange: j,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "push_to_crowdin",
                      children: (0, t.we)(
                        i.BLocalizeDraft()
                          ? "#FAQDashboard_CrowdIn_PushOnSave"
                          : "#FAQDashboard_CrowdIn_PushOnPublish",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    Y.length > 0 &&
                      (0, e.jsx)("a", {
                        href: Y,
                        target: "_blank",
                        children: Y,
                      }),
                    Y.length === 0 &&
                      (0, e.jsx)(e.Fragment, {
                        children: "(Not yet pushed to CrowdIn)",
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(vt.p, { onChange: w }),
                    "\xA0",
                    !v &&
                      (0, e.jsx)("button", {
                        onClick: ie,
                        children: (0, t.we)("#FAQDashboard_CrowdIn_Fetch"),
                      }),
                    v && (0, e.jsx)(E.t, { size: "small" }),
                  ],
                }),
              ],
            });
          }),
          Lt = (0, q.PA)((a) => {
            const { info: i, rtEnglishUpdateTime: r } = a,
              l = !!r && r > i.last_update_timestamp,
              c = i.last_update_timestamp > i.last_publish_timestamp;
            return (0, e.jsxs)("tr", {
              children: [
                (0, e.jsx)("td", {
                  children: (0, t.we)("#Language_" + (0, m.LgB)(i.language)),
                }),
                (0, e.jsx)("td", {
                  children: (0, e.jsx)(fe, {
                    rtTimestamp: i.last_update_timestamp,
                    bShowAsWarning: l,
                  }),
                }),
                (0, e.jsx)("td", {
                  children: (0, e.jsx)(fe, {
                    rtTimestamp: i.last_publish_timestamp,
                    bShowAsWarning: c,
                  }),
                }),
              ],
            });
          });
        function Dt(a) {
          const i = (0, tt.KV)();
          return (0, At.n)({
            mutationKey: ["fetch_faq_translation", a],
            mutationFn: async (r) => {
              const l = nt.w.Init(He.PS);
              return (
                l.Body().set_faq_id(a),
                l.Body().set_language(r),
                l.Body().set_steamid(G.UF.CLANSTEAMID),
                (await He.RD.FetchLocalizationFromCrowdIn(i, l)).GetEResult()
              );
            },
          });
        }
        function jt(a, i) {
          const r = (0, tt.KV)();
          return (0, Et.I)({
            queryKey: ["get_faq_crowdin_metadata", a, i],
            queryFn: async () => {
              const l = nt.w.Init(He.lk);
              return (
                l.Body().set_faq_id(i),
                l.Body().set_steamid(a),
                (await He.RD.GetCrowdInMetadata(r, l)).Body().toObject()
              );
            },
          });
        }
        var Ye = o(32093),
          bt = o(24806),
          wt = o(26759),
          qe = o(54736),
          St = o(59461),
          It = o(51520);
        const Ft = (0, q.PA)((a) => {
            const { draft: i } = a,
              r = i.BNeedsSaving();
            return (0, e.jsx)("div", {
              className: "btn_green_steamui btn_medium",
              onClick: (l) =>
                (0, p.pg)((0, e.jsx)(Tt, { draft: a.draft }), (0, H.uX)(l)),
              children: (0, e.jsxs)("span", {
                children: [
                  !r &&
                    (0, e.jsx)("img", { className: It.SavedImage, src: St.A }),
                  (0, t.we)(r ? "#Button_Save" : "#Button_Saved"),
                ],
              }),
            });
          }),
          Tt = (a) => {
            const { draft: i, closeModal: r } = a,
              [l, c] = y.useState(!0),
              [u, v] = y.useState(void 0);
            y.useEffect(() => {
              (async () => {
                c(!0);
                try {
                  const j = await i.SaveDrafts();
                  v(j);
                } catch (j) {
                  v(I.zi),
                    console.log(
                      "FAQSaveProgressDialog hit exception " +
                        (0, Ke.H)(j).strErrorMsg,
                    );
                } finally {
                  c(!1);
                }
              })();
            }, [i]);
            const C = y.useId();
            return (0, e.jsxs)(A.eV, {
              "aria-labelledby": C,
              bAllowFullSize: !0,
              onCancel: r,
              closeModal: r,
              children: [
                (0, e.jsx)(S.Y9, {
                  id: C,
                  children: l
                    ? (0, e.jsx)("div", {
                        children: (0, t.we)("#FAQSave_Saving"),
                      })
                    : (0, e.jsxs)("div", {
                        children: [
                          (0, t.we)(
                            u == I.R
                              ? "#FAQSave_SaveSuccess"
                              : "#FAQSave_Error",
                          ),
                          " ",
                        ],
                      }),
                }),
                (0, e.jsx)(S.nB, {
                  children: l
                    ? (0, e.jsx)(E.t, { size: "medium", position: "center" })
                    : (0, e.jsx)("div", {
                        children:
                          u == I.R
                            ? (0, e.jsx)("div", {
                                children: (0, t.we)(
                                  "#FAQSave_SaveSuccess_desc",
                                ),
                              })
                            : (0, e.jsx)("div", {
                                children: (0, t.we)(
                                  "#Error_Description",
                                  u,
                                  (0, t.we)("#Error_GenericFailureDescription"),
                                ),
                              }),
                      }),
                }),
                (0, e.jsx)(S.wi, {
                  children:
                    !l &&
                    (0, e.jsx)(S.jn, {
                      onClick: r,
                      children: (0, t.we)("#Button_OK"),
                    }),
                }),
              ],
            });
          };
        var yt = o(66444),
          $e = o.n(yt);
        const st = (0, q.PA)((a) => {
            const { draft: i, bPreview: r } = a,
              l = i.BHasPublished();
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsxs)("div", {
                className: (0, _.A)({
                  [qe.EventEditorTopBarContainer]: !0,
                  [qe.EventUnPublished]: !r && !l,
                  [qe.EventPublished]: !r && l,
                  [$e().FAQPreview]: r,
                }),
                children: [
                  (0, e.jsx)(J, {
                    route: r ? x.k_eCommunityEdit : x.k_eCommunityDashboard,
                    faqid: i.GetFAQID(),
                    className: g().EditPreviewButton,
                    children: (0, t.we)(
                      r ? "#FAQEditor_EditFAQ" : "#EventDisplay_EventsDashBtn",
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("div", {
                        className: $e().EditorInternalNameLabel,
                        children: (0, t.we)(
                          r
                            ? "#FAQEditor_InternalName_Preview"
                            : "#FAQEditor_InternalName",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: $e().EditorInternalName,
                        children: [
                          i.GetFAQInternalName(),
                          (0, e.jsx)("img", {
                            src: wt.A,
                            onClick: (c) =>
                              (0, p.pg)(
                                (0, e.jsx)(Pt, { draft: i }),
                                (0, H.uX)(c),
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: g().EventOptions,
                    children: [
                      (0, e.jsx)(bt.Ng, {
                        selectedLang: Me.O.Get().GetCurEditLanguage(),
                        fnOnLanguageChanged: Me.O.Get().SetCurEditLanguage,
                        fnLangHasData: i.BHasSomeTextForLanguage,
                        fnIsLangSupported: (c) => !0,
                        fnLastUpdateRTime: i.GetLastTimeLanguageUpdated,
                        realms: [
                          Ye.TU.k_ESteamRealmGlobal,
                          Ye.TU.k_ESteamRealmChina,
                        ],
                      }),
                      !r &&
                        (0, e.jsx)(J, {
                          route: x.k_eCommunityPreview,
                          faqid: i.GetFAQID(),
                          className: g().EditPreviewButton,
                          children: (0, t.we)("#Button_Preview"),
                        }),
                    ],
                  }),
                ],
              }),
            });
          }),
          Pt = (a) => {
            const { closeModal: i, draft: r } = a,
              [l, c] = y.useState(r.GetFAQInternalName() || ""),
              [u, v] = y.useState(!1),
              [C, w] = y.useState(I.R),
              [j, ne] = y.useState(!1),
              ie = async () => {
                v(!0),
                  R.pN
                    .Get()
                    .UpdateInternalName(r.GetFAQID(), l)
                    .then((Y) => w(Y))
                    .finally(() => {
                      ne(!0);
                    });
              };
            return (0, e.jsxs)(A.eV, {
              title: (0, t.we)("#FAQEditor_ChangeInternalName"),
              bAllowFullSize: !0,
              onCancel: i,
              closeModal: i,
              children: [
                (0, e.jsxs)(S.nB, {
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, t.we)("#FAQEditor_ChangeInternalName_desc"),
                    }),
                    (0, e.jsx)("input", {
                      type: "text",
                      value: l,
                      placeholder: (0, t.we)("#FAQEditor_ChangeInternalName"),
                      onFocus: (Y) => Y.target.select(),
                      onChange: (Y) => c(Y.currentTarget.value),
                      maxLength: 240,
                      disabled: u,
                    }),
                    !!(u && !j) &&
                      (0, e.jsx)(E.t, {
                        string: (0, t.we)("#Updating"),
                        position: "center",
                        size: "medium",
                      }),
                    j &&
                      (0, e.jsx)("span", {
                        children:
                          C == I.R
                            ? (0, t.we)("#EventDisplay_Share_Success")
                            : (0, t.we)(
                                "#Error_Description",
                                C,
                                (0, t.we)("#Error_GenericFailureDescription"),
                              ),
                      }),
                  ],
                }),
                (0, e.jsx)(S.wi, {
                  children: (0, e.jsx)(S.CB, {
                    bOKDisabled: l.trim().length == 0 || u,
                    onCancel: i,
                    strCancelText: j
                      ? (0, t.we)("#Button_Close")
                      : (0, t.we)("#Button_Cancel"),
                    onOK: ie,
                  }),
                }),
              ],
            });
          },
          at = (0, q.PA)((a) => {
            const { draft: i, eLanguage: r } = a,
              l = i.GetFAQID(),
              [c, u] = (0, R.g5)(l),
              v = u && c.per_language_info.find((j) => j.language == r),
              w =
                u &&
                ((G.TS.EREALM == Ye.TU.k_ESteamRealmGlobal &&
                  c.visible_in_global_realm) ||
                  (G.TS.EREALM == Ye.TU.k_ESteamRealmChina &&
                    c.visible_in_china_realm)) &&
                !!(v != null && v.last_publish_timestamp);
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsx)("div", {
                className: (0, _.A)(g().SaveBackground),
                children: (0, e.jsxs)("div", {
                  className: g().FlexRowWrapFlexStartContainer,
                  style: { width: "unset", justifyContent: "center" },
                  children: [
                    (0, e.jsx)(Ft, { draft: i }),
                    !!w &&
                      (0, e.jsx)("div", {
                        className: g().EditPreviewButton,
                        children: (0, e.jsx)("a", {
                          href: G.TS.HELP_BASE_URL + "faqs/view/" + c.url_code,
                          children: (0, t.we)("#FAQEditir_ViewLiveFAQ"),
                        }),
                      }),
                  ],
                }),
              }),
            });
          });
        var Nt = o(77495);
        const Rt = (0, q.PA)((a) => {
            const { faqid: i } = a,
              [r, l] = (0, R.z5)(i),
              c = y.useRef(void 0);
            if (l) {
              if (!r)
                return (0, e.jsx)(Ot, {
                  strError: (0, t.we)("#FAQEditor_NoFAQFound"),
                });
            } else
              return (0, e.jsx)(E.t, {
                position: "center",
                size: "xlarge",
                string: (0, t.we)("#Loading"),
              });
            const u = Me.O.Get().GetCurEditLanguage();
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)(st, { draft: r }),
                (0, e.jsxs)("div", {
                  className: De().FAQEditPage,
                  children: [
                    (0, e.jsx)("div", {
                      className: De().FAQMenuCtn,
                      children: (0, e.jsx)(Ct, { draft: r, eLanguage: u }),
                    }),
                    (0, e.jsx)("div", {
                      className: De().FAQEditorCtn,
                      children: (0, e.jsx)("div", {
                        className: De().FAQEditor,
                        children: (0, e.jsxs)("div", {
                          className: (0, _.A)(g().Columns, De().Columns),
                          children: [
                            (0, e.jsxs)("div", {
                              className: (0, _.A)(g().LeftCol, De().LeftCol),
                              children: [
                                (0, e.jsx)(Bt, { draft: r, eLanguage: u }),
                                (0, e.jsx)(Mt, {
                                  bbcodeEditorRef: c,
                                  draft: r,
                                  eLanguage: u,
                                }),
                              ],
                            }),
                            (0, e.jsx)(Qt, {
                              draft: r,
                              bbcodeEditorRef: c,
                              className: (0, _.A)(g().RightCol, De().RightCol),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(at, { draft: r, eLanguage: u }),
              ],
            });
          }),
          Qt = (a) => {
            const i = (0, y.useMemo)(() => new d.b(G.UF.CLANSTEAMID), []);
            if (!G.UF.CAN_UPLOAD_IMAGES) return null;
            const { draft: r, bbcodeEditorRef: l } = a;
            return (0, e.jsx)(Oe.tH, {
              children: (0, e.jsxs)("div", {
                className: a.className,
                children: [
                  (0, e.jsx)("div", {
                    children: (0, t.we)("#FAQEditor_ImageTitle"),
                  }),
                  (0, e.jsx)(ct.G, {
                    bShowLightBox: !0,
                    appid: void 0,
                    clanSteamID: i,
                    imageInsertCallBack: (c, u) =>
                      l.current &&
                      (0, Re.fW)(l == null ? void 0 : l.current, c, u),
                    fnSetImageURL: () => {},
                    rgRealmList: r.GetIncludedRealmList(),
                    fnLangHasData: r.BHasSomeTextForLanguage,
                    fnGetImageHash: (c, u) => {
                      if (ye.pb.includes(c)) {
                        const v = Be.R.GetAllLocalizedGroupImages();
                        return v && v.length > u && v[u] != null ? v[u] : null;
                      }
                      return null;
                    },
                    partnerEventStore: Nt.O3,
                  }),
                ],
              }),
            });
          },
          Bt = (0, q.PA)((a) => {
            const { draft: i, eLanguage: r } = a;
            return (0, e.jsxs)("div", {
              className: De().EditorTitleField,
              children: [
                (0, e.jsx)("div", {
                  className: De().EditorLabel,
                  children: (0, t.we)("#FAQEditor_TitleLabel"),
                }),
                (0, e.jsx)("input", {
                  type: "text",
                  className: De().EditorTitleFieldInput,
                  value: i.GetDraftTitle(r) || "",
                  placeholder: (0, t.we)("#FAQEditor_TitlePlaceHolder"),
                  onFocus: (c) => c.target.select(),
                  onChange: (c) => i.SetDraftTitle(r, c.currentTarget.value),
                  maxLength: 120,
                }),
              ],
            });
          }),
          Mt = (0, q.PA)((a) => {
            const { draft: i, eLanguage: r, bbcodeEditorRef: l } = a;
            return (0, e.jsxs)("div", {
              className: De().EditorPane,
              children: [
                (0, e.jsx)("div", {
                  className: De().EditorLabel,
                  children: (0, t.we)("#FAQEditor_ContentLabel"),
                }),
                (0, e.jsx)(dt.I, {
                  ref: l,
                  fnGetCurText: () => i.GetDraftContent(r) || "",
                  fnOnTextChange: (c) =>
                    i.SetDraftContent(r, c.currentTarget.value),
                  fnSetText: (c) => i.SetDraftContent(r, c),
                  strPlaceholder: (0, t.we)("#FAQEditor_ContentPlaceHolder"),
                  bSupportHTMLImport: !0,
                  showFormatHelp: "PartnerEvents",
                  className: De().TextPaneContainer,
                  classNameForTextArea: De().EditorPaneTextArea,
                }),
              ],
            });
          }),
          Ot = (a) =>
            (0, e.jsxs)("div", {
              className: De().ErrorCtn,
              children: [
                (0, e.jsx)("div", {
                  className: De().ErrorMsg,
                  children: a.strError,
                }),
                (0, e.jsx)(J, {
                  route: x.k_eCommunityDashboard,
                  className: De().EscapeLink,
                  children: (0, t.we)("#FAQEditor_GoToDashboard"),
                }),
              ],
            });
        var Gt = o(71462),
          Pe = o(28735);
        const it = (a) => {
            const {
                title: i,
                content: r,
                bIsPreview: l,
                elSideBars: c,
                version: u,
              } = a,
              v = (0, re.zy)();
            return (
              y.useEffect(() => {
                var C, w, j;
                const ne =
                  (w = v == null ? void 0 : v.hash) == null
                    ? void 0
                    : w.substr(
                        ((C = v == null ? void 0 : v.hash) == null
                          ? void 0
                          : C.substr(0, 1)) === "#"
                          ? 1
                          : 0,
                      );
                ne &&
                  ((j = document.getElementById(ne)) == null ||
                    j.scrollIntoView({ block: "start", behavior: "smooth" }));
              }, [v]),
              (0, e.jsxs)("div", {
                className: (0, _.A)(Pe.FAQViewPage, G.TS.LANGUAGE),
                children: [
                  (0, e.jsx)("a", {
                    className: Pe.SupportTitle,
                    href: `${G.TS.HELP_BASE_URL}`,
                    children: (0, t.we)("#FAQViewer_SteamSupport"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Pe.Columns,
                    children: [
                      (0, e.jsxs)("div", {
                        className: (0, _.A)(Pe.LeftCol),
                        children: [
                          (0, e.jsx)("div", { className: Pe.TopColorBar }),
                          (0, e.jsxs)("div", {
                            className: Pe.FAQTopicCtn,
                            children: [
                              (0, e.jsx)("div", {
                                className: Pe.FAQTitle,
                                role: "heading",
                                "aria-level": 1,
                                children: i,
                              }),
                              (0, e.jsx)("div", {
                                className: Pe.FAQContent,
                                children: (0, e.jsx)(Gt.u, {
                                  text: r,
                                  bShowErrorInfo: l,
                                  version: u || "0",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Pe.RightCol,
                        children: (0, e.jsx)("div", {
                          className: Pe.SectionCtn,
                          children: c,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          Ze = (a) =>
            (0, e.jsx)("div", {
              className: Pe.FAQViewPage,
              children: a.children,
            });
        var rt = o(38129),
          ot = o(20572),
          Ie = o(66891);
        const Ut = (a) => {
            const { faqContent: i } = a,
              [r, l] = (0, R.W)(i.faq_id, i.version, i.language);
            return R.pN.Get().BHasFAQEdit()
              ? (0, e.jsxs)("div", {
                  className: (0, _.A)(Ie.Section, h.ValveOnlyBackground),
                  children: [
                    (0, e.jsx)("div", {
                      className: Ie.TopicHeader,
                      children: (0, t.we)("#FAQViewer_AdminLinks"),
                    }),
                    (0, e.jsx)("div", {
                      className: ot.InfoRow,
                      children: (0, t.PP)(
                        "#FAQViewer_Admin_LastUpdate",
                        r != null && r.author_account_id
                          ? (0, e.jsx)(rt.p, {
                              accountID: Number.parseInt(r.author_account_id),
                            })
                          : (0, t.we)("#FAQViewer_UnknownUser"),
                        (0, e.jsx)("span", {
                          children:
                            (0, t.TW)(i.timestamp) +
                            "@" +
                            (0, te.KC)(i.timestamp, { bForce24HourClock: !1 }),
                        }),
                      ),
                    }),
                    (0, e.jsx)(kt, { faqContent: i }),
                    (0, e.jsx)(J, {
                      faqid: i.faq_id,
                      route: x.k_eCommunityEdit,
                      bForceAnchor: !0,
                      children: (0, t.we)("#FAQViewer_GotoEditor"),
                    }),
                  ],
                })
              : null;
          },
          kt = (a) => {
            const { faqContent: i } = a,
              [r, l] = (0, R.z5)(i.faq_id);
            if (
              !r ||
              !l ||
              r.GetLastTimeLanguageUpdated(i.language) <= i.timestamp
            )
              return null;
            const c = r.GetLastSavedDraftVersion(i.language);
            return (0, e.jsx)("div", {
              className: ot.InfoRow,
              children: (0, t.PP)(
                "#FAQViewer_DraftNewer",
                (0, e.jsx)(rt.p, {
                  accountID: Number.parseInt(c.author_account_id),
                }),
                (0, e.jsx)("span", {
                  children:
                    (0, t.TW)(c.timestamp) +
                    "@" +
                    (0, te.KC)(c.timestamp, { bForce24HourClock: !1 }),
                }),
              ),
            });
          },
          zt = (a) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: (0, _.A)(Ie.Section, Ie.NeedHelp),
                  children: [
                    (0, e.jsx)("div", {
                      className: Ie.LeftCol,
                      children: (0, e.jsx)(B._VW, { role: "presentation" }),
                    }),
                    (0, e.jsxs)("div", {
                      className: Ie.RightCol,
                      children: [
                        (0, e.jsx)("div", {
                          className: Ie.TopicHeader,
                          children: (0, t.we)(
                            "#FAQViewer_SideBar_ProblemWithSteam_Title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, t.we)(
                            "#FAQViewer_SideBar_ProblemWithSteam_Desc",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: Ie.CenterButtonCtn,
                          children: (0, e.jsx)("a", {
                            href: G.TS.HELP_BASE_URL,
                            className: h.EditPreviewButton,
                            children: (0, t.we)(
                              "#FAQViewer_SideBar_ProblemWithSteam_Link",
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !(0, G.Y2)() &&
                  (0, e.jsxs)("div", {
                    className: (0, _.A)(Ie.Section, Ie.CommunityHelp),
                    children: [
                      (0, e.jsx)("div", {
                        className: Ie.LeftCol,
                        children: (0, e.jsx)(B.ROZ, { role: "presentation" }),
                      }),
                      (0, e.jsxs)("div", {
                        className: Ie.RightCol,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ie.TopicHeader,
                            children: (0, t.we)(
                              "#FAQViewer_SideBar_CommunityHelp_Title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, t.we)(
                              "#FAQViewer_SideBar_CommunityHelp_Desc",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: Ie.CenterButtonCtn,
                            children: (0, e.jsx)("a", {
                              href: G.TS.COMMUNITY_BASE_URL + "discussions",
                              className: h.EditPreviewButton,
                              children: (0, t.we)(
                                "#FAQViewer_SideBar_CommunityHelp_Link",
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
        var Vt = o(25651),
          et = o.n(Vt);
        const Wt = (a) => {
            const { faqid: i } = a,
              [r, l] = (0, R.Kv)(i, (0, m.sfN)(G.TS.LANGUAGE));
            if (l) {
              if (!r)
                return (0, e.jsx)(Ze, {
                  children: (0, e.jsx)(lt, {
                    strError: (0, t.we)("#FAQViewer_NoFAQFound"),
                  }),
                });
            } else
              return (0, e.jsx)(Ze, {
                children: (0, e.jsx)(E.t, {
                  position: "center",
                  size: "xlarge",
                  string: (0, t.we)("#Loading"),
                }),
              });
            return (0, e.jsx)(it, {
              title: r.title,
              content: r.content,
              version: r.version,
              elSideBars: [
                (0, e.jsx)(zt, { faqContent: r }, "sidebar"),
                (0, e.jsx)(Ut, { faqContent: r }, "adminbar"),
              ],
            });
          },
          lt = (a) => {
            var i;
            const r =
              G.TS.COMMUNITY_BASE_URL +
              (G.UF.APPID
                ? "app/" + ((i = G.UF.VANITY_ID) != null ? i : G.UF.APPID)
                : "gid/" + G.UF.CLANSTEAMID);
            return (0, e.jsxs)("div", {
              className: et().ErrorCtn,
              children: [
                (0, e.jsx)("div", {
                  className: et().ErrorMsg,
                  children: a.strError,
                }),
                (0, e.jsx)("a", {
                  className: et().EscapeLink,
                  href: r,
                  children: (0, t.we)("#FAQViewer_GoToHomepage"),
                }),
              ],
            });
          },
          Ht = (0, q.PA)((a) => {
            const { faqid: i } = a,
              [r, l] = (0, R.z5)(i),
              c = Me.O.Get().GetCurEditLanguage();
            if (l) {
              if (!r)
                return (0, e.jsx)(Ze, {
                  children: (0, e.jsx)(lt, {
                    strError: (0, t.we)("#FAQViewer_NoFAQFound"),
                  }),
                });
            } else
              return (0, e.jsx)(Ze, {
                children: (0, e.jsx)(E.t, {
                  position: "center",
                  size: "xlarge",
                  string: (0, t.we)("#Loading"),
                }),
              });
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(st, { draft: r, bPreview: !0 }),
                (0, e.jsx)(it, {
                  title: r.GetDraftTitleWithFallback(c, G.TS.EREALM),
                  content: r.GetDraftContentWithFallback(c, G.TS.EREALM),
                  version: "" + r.GetLastTimeLanguageUpdated(c),
                }),
                (0, e.jsx)(at, { draft: r, eLanguage: c }),
              ],
            });
          });
        var Kt = o(7638),
          Je = o(20076),
          Yt = o(90783);
        const Ge = {
            ViewFAQ: (a, i) => `/faqs/${a}/view/${i}*`,
            EditFAQ: (a, i) => `/faqs/${a}/edit/${i}*`,
            DashboardFAQ: (a) => `/faqs/${a}/dashboard`,
            PreviewFAQ: (a, i) => `/faqs/${a}/preview/${i}*`,
          },
          Zt = (0, q.PA)((a) => {
            const [i, r] = y.useState(!0);
            return (
              y.useEffect(() => {
                (async () => (await Kt.KN.InitGlobal(), r(!1)))();
              }, []),
              i
                ? (0, e.jsx)(E.t, {
                    position: "center",
                    size: "medium",
                    string: (0, t.we)("#Loading"),
                  })
                : (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(We, {}),
                      (0, e.jsxs)(re.dO, {
                        children: [
                          (0, e.jsx)(re.qh, {
                            path: Ge.ViewFAQ(":vanity_str", ":faqid"),
                            render: (l) =>
                              (0, e.jsx)(Je.X, {
                                config: {
                                  "faqs-root": () => {
                                    const { faqid: c } = l.match.params,
                                      u = (0, R.CJ)(c);
                                    return (0, e.jsx)(Wt, { faqid: u });
                                  },
                                },
                              }),
                          }),
                          (0, e.jsx)(re.qh, {
                            path: Ge.EditFAQ(":vanity_str", ":faqid"),
                            render: (l) =>
                              (0, e.jsx)(Je.X, {
                                config: {
                                  "faqs-root": () => {
                                    const { faqid: c } = l.match.params;
                                    if (c) {
                                      const u = (0, R.CJ)(c);
                                      return u
                                        ? (0, e.jsx)(Rt, { faqid: u })
                                        : (0, e.jsx)(re.rd, {
                                            push: !0,
                                            to: f(x.k_eCommunityDashboard),
                                          });
                                    } else return (0, e.jsx)(Fe, {});
                                  },
                                },
                              }),
                          }),
                          (0, e.jsx)(re.qh, {
                            path: Ge.DashboardFAQ(":vanity_str"),
                            render: (l) =>
                              (0, e.jsx)(Je.X, {
                                config: {
                                  "faqs-root": () => (0, e.jsx)(Fe, {}),
                                },
                              }),
                          }),
                          (0, e.jsx)(re.qh, {
                            path: Ge.PreviewFAQ(":vanity_str", ":faqid"),
                            render: (l) =>
                              (0, e.jsx)(Je.X, {
                                config: {
                                  "faqs-root": () => {
                                    const { faqid: c } = l.match.params,
                                      u = (0, R.CJ)(c);
                                    return (0, e.jsx)(Ht, { faqid: u });
                                  },
                                },
                              }),
                          }),
                          (0, e.jsx)(re.qh, { component: Yt.a }),
                        ],
                      }),
                    ],
                  })
            );
          });
      },
      6864: (W, be, o) => {
        "use strict";
        o.d(be, { p: () => O, s: () => E });
        var e = o(7850),
          q = o(90626),
          y = o(19316),
          m = o(95695),
          R = o.n(m),
          S = o(85143),
          re = o(11243),
          ge = o(18210),
          G = o(91126),
          x = o.n(G),
          J = o(56585),
          f = o(99412),
          A = o(35766),
          p = o(85599),
          B = o(36118);
        function E(_) {
          var t, se;
          const { editModel: ae } = _,
            [L, me] = q.useState(f.xPp),
            [I, s] = q.useState(!1),
            [n, d] = q.useState(null),
            h = (Z) => {
              const Q = Z.target.value;
              if (Q === "all") me(f.xPp);
              else {
                const U = (0, f.sfN)(Q);
                me(U);
              }
            },
            g = ae.GetClanSteamID(),
            D = ae.GetGID(),
            P = (0, J.Wj)(g, D),
            [, H] = q.useReducer((Z) => Z + 1, 0),
            te =
              P.isSuccess &&
              (t = P.data) != null &&
              t.crowdin_project_id &&
              (se = P.data) != null &&
              se.crowdin_file_id
                ? `https://valve.crowdin.com/editor/${P.data.crowdin_project_id}/${P.data.crowdin_file_id}`
                : null,
            F = (Z) => {
              ae.SetPushSourceToCrowdInAutomatically(Z), H();
            },
            N = (0, J.IW)(g.ConvertTo64BitString(), D, L),
            T = () => {
              s(!0),
                N.mutateAsync()
                  .then(() => window.location.reload())
                  .catch((Z) => {
                    d(Z.toString()), s(!1);
                  })
                  .then(() => {
                    d(null);
                  });
            };
          return P.isLoading
            ? null
            : (0, e.jsxs)(S.E, {
                clanSteamID: _.editModel.GetClanSteamID(),
                children: [
                  (0, e.jsx)(A.mt, {
                    active: I,
                    children: (0, e.jsx)(p.t, {}),
                  }),
                  (0, e.jsxs)("div", {
                    className: x().ValveCrowdInSyncCtn,
                    children: [
                      (0, e.jsx)(y.J0, {
                        value: ae.BPushUpdatesToCrowdInAutomatically(),
                        onChange: F,
                      }),
                      (0, e.jsxs)("div", {
                        className: x().ValveCrowdInSyncLabel,
                        children: [
                          (0, ge.we)(
                            "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                          ),
                          "\xA0(",
                          te
                            ? (0, e.jsx)("a", { href: te, children: te })
                            : (0, ge.we)(
                                "#EventEditor_Localization_NotMappedToCrowdIn",
                              ),
                          ")",
                          (0, e.jsx)(re.o, {
                            tooltip: (0, ge.we)(
                              "#EventEditor_Localization_Tooltip",
                            ),
                            className: m.tooltip_Ctn,
                          }),
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)("span", {
                            children: (0, ge.we)(
                              "#EventEditor_Localization_RememberToSave",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)(O, { onChange: h }),
                      (0, e.jsx)("div", {
                        className: R().EditPreviewButton,
                        onClick: T,
                        children: (0, ge.we)(
                          "#EventEditor_Localization_FetchLocalization",
                        ),
                      }),
                    ],
                  }),
                  n &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("div", {
                        className: x().SyncPanelError,
                        children: [(0, e.jsx)(B.X, {}), " ", n],
                      }),
                    }),
                ],
              });
        }
        function O(_) {
          const t = (0, ge.O9)(!1);
          let se = Array.from(t.entries());
          se.sort((L, me) => L[1].localeCompare(me[1]));
          const ae = se.map(([L, me]) =>
            L !== "english"
              ? (0, e.jsx)("option", { value: L, children: me }, L)
              : "",
          );
          return (0, e.jsxs)("select", {
            onChange: _.onChange,
            children: [
              (0, e.jsx)("option", {
                value: "all",
                children: (0, ge.we)("#EventEditor_Localization_AllLanguages"),
              }),
              ae,
            ],
          });
        }
      },
      26251: (W, be, o) => {
        "use strict";
        o.d(be, { Yg: () => ae, t3: () => L });
        var e = o(7850),
          q = o(40323),
          y = o.n(q),
          m = o(90626),
          R = o(99412),
          S = o(32093),
          re = o(38410),
          ge = o(19316),
          G = o(95695),
          x = o.n(G),
          J = o(2801),
          f = o(88003),
          A = o(85599),
          p = o(34592),
          B = o(36707),
          E = o(18210),
          O = o(20398),
          _ = o(71421),
          t = o(96471),
          se = o.n(t);
        const ae = (I) => {
            const s = (n, d) => {
              n.preventDefault();
              const {
                  fnGetLocData: h,
                  closeModal: g,
                  strFileNamePrefix: D,
                  lang: P,
                } = I,
                H = h(),
                te = new O.s();
              let F = D ? D + "_localization" : "localization";
              switch (d) {
                case "csv_row":
                  te.WriteLocalizationData_CSV_LanguageRows(H, F + ".csv");
                  break;
                case "csv_column":
                  te.WriteLocalizationData_CSV_LanguageColumns(H, F + ".csv");
                  break;
                case "csv_token":
                  te.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                    H,
                    F + ".csv",
                  );
                  break;
                case "xml":
                  te.WriteLocalizationData_XML_SingleLanguage(
                    H,
                    P,
                    F + "_" + (0, R.x6o)((0, R.LgB)(P)) + ".xml",
                  );
                  break;
              }
              g && g();
            };
            return (0, e.jsxs)(e.Fragment, {
              children: [
                !!I.bShowCSV &&
                  (0, e.jsxs)(m.Fragment, {
                    children: [
                      (0, e.jsx)(ge.jn, {
                        onClick: (n) => s(n, "csv_row"),
                        children: (0, E.we)(
                          "#Localization_Export_Btn_RowLanguages",
                        ),
                      }),
                      (0, e.jsx)(ge.jn, {
                        onClick: (n) => s(n, "csv_column"),
                        children: (0, E.we)(
                          "#Localization_Export_Btn_ColumnLanguages",
                        ),
                      }),
                      (0, e.jsx)(ge.jn, {
                        onClick: (n) => s(n, "csv_token"),
                        children: (0, E.we)(
                          "#Localization_Export_Btn_TokenLanguages",
                        ),
                      }),
                    ],
                  }),
                !!I.bShowXML &&
                  (0, e.jsx)(ge.jn, {
                    onClick: (n) => s(n, "xml"),
                    children: (0, E.we)("#Localization_Export_Btn_XML"),
                  }),
              ],
            });
          },
          L = (I) => {
            const [s, n] = (0, m.useState)(!1),
              d = (D, P) => {
                n(!1),
                  console.log(
                    "ImportLocalizationAction: On Handle Parse error: " +
                      D.message,
                    D,
                  ),
                  (0, f.pg)(
                    (0, e.jsx)(J.KG, {
                      children: (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, E.we)("#Localization_Error_Input"),
                          }),
                          (0, e.jsx)("p", { children: D.message }),
                        ],
                      }),
                    }),
                    window,
                  );
              },
              h = (D) => {
                n(!1);
                let P = "";
                D.forEach((H) => {
                  P.length > 0 && (P += ", "),
                    (P += (0, E.we)("#Language_" + (0, R.LgB)(H)));
                }),
                  (0, f.pg)(
                    (0, e.jsx)(J.o0, {
                      strTitle: (0, E.we)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                      children: (0, e.jsx)("div", {
                        children:
                          P.length == 0
                            ? (0, E.we)(
                                "#Localization_Success_ImportComplete_NoChange",
                              )
                            : (0, E.we)(
                                "#Localization_Success_ImportComplete",
                                P,
                              ),
                      }),
                    }),
                    window,
                  );
              },
              g = async (D) => {
                let P = D.target.files;
                if (P && P.length > 0) {
                  n(!0);
                  let H = new Array(),
                    te = new O.s();
                  for (let F = 0; F < P.length; ++F)
                    if (P[F])
                      if (P[F].name.toLocaleLowerCase().endsWith(".csv")) {
                        y().parse(P[0], {
                          header: !0,
                          complete: (N) => {
                            let Z = new O.s().DetectAndFormatCSV(N);
                            if (!Z) {
                              d({
                                code: "",
                                message: "",
                                row: 0,
                                type: "filenameerror",
                              });
                              return;
                            }
                            const Q = E.A0.GetLanguageListForRealms([
                                S.TU.k_ESteamRealmGlobal,
                              ]),
                              U = I.fnOnImportLocData(Z, Q);
                            h(U);
                          },
                          error: d,
                        });
                        return;
                      } else if (
                        P[F].name.toLocaleLowerCase().endsWith(".xml")
                      ) {
                        let { language: N } = (0, re.jj)(P[F].name, R.xPp);
                        if (N == null || N == R.xPp) {
                          d({
                            code: "",
                            message: (0, E.we)(
                              "#Localization_Error_FileLangauage",
                              P[F].name,
                            ),
                            row: 0,
                            type: "filenameerror",
                          });
                          return;
                        }
                        try {
                          const T =
                            await te.ReadLocalizationData_XML_SingleLanguage(
                              P[F],
                              N,
                            );
                          I.fnOnImportLocData(T, [N]).forEach((Q) => {
                            H.indexOf(Q) == -1 && H.push(Q);
                          });
                        } catch (T) {
                          let Z = (0, p.H)(T);
                          d({
                            code: "",
                            message: (0, E.we)(
                              "#Localization_Error_XMLParseError",
                              Z.strErrorMsg,
                            ),
                            row: 0,
                            type: "parseerror",
                          });
                          return;
                        }
                      } else
                        d({
                          code: "",
                          message: (0, E.we)(
                            "#Localization_Error_FileExtention",
                            P[F].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                  h(H);
                }
              };
            return (0, e.jsx)(_.he, {
              className: (0, B.A)(
                I.className ? I.className : G.EditPreviewButton,
              ),
              toolTipContent: I.strToolTip,
              children: (0, e.jsxs)("label", {
                className: t.ImportButton,
                htmlFor: "importlocalization",
                children: [
                  s && (0, e.jsx)(A.t, { size: "small" }),
                  (0, e.jsx)("div", {
                    className: t.Label,
                    children: (0, E.we)(
                      I.strLabel ? I.strLabel : "#Localization_Import_Btn",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    id: "importlocalization",
                    className: t.ImportButton,
                    style: { display: "none" },
                    type: "file",
                    onSubmit: g,
                    onChange: g,
                    multiple: !0,
                  }),
                ],
              }),
            });
          },
          me = (I) => {
            const {
                fnOnImportLocData: s,
                closeModal: n,
                sampleLocData: d,
                sampleFilename: h,
              } = I,
              g = (P, H) => {
                const te = s(P, H);
                return n(), te;
              },
              D = new CLocalizationImportExport();
            return jsxs(GenericDialog, {
              title: Localize("#ImportLoc_Title"),
              onCancel: n,
              closeModal: n,
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
                            D.WriteLocalizationData_CSV_LanguageRows(
                              d,
                              h + "_row.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerRow"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            D.WriteLocalizationData_CSV_LanguageColumns(
                              d,
                              h + "_col.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerCol"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            D.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                              d,
                              h + "_token.csv",
                            ),
                          children: Localize("#ImportLoc_CSVTokenLang"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            D.WriteLocalizationData_XML_SingleLanguage(
                              d,
                              k_ELanguage_English,
                              h + "xml",
                            ),
                          children: Localize("#ImportLoc_XML"),
                        }),
                      ],
                    }),
                  ],
                }),
                jsx(Dialog.Footer, {
                  children: jsx(L, {
                    strLabel: Localize("#BuildNotes_ImportLocalization"),
                    fnOnImportLocData: g,
                  }),
                }),
              ],
            });
          };
      },
      20398: (W, be, o) => {
        "use strict";
        o.d(be, { G: () => G, s: () => x });
        var e = o(99412),
          q = o(32093),
          y = o(41635),
          m = o(22880),
          R = o(18210),
          S = Object.defineProperty,
          re = (J, f, A) =>
            f in J
              ? S(J, f, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: A,
                })
              : (J[f] = A),
          ge = (J, f, A) => re(J, typeof f != "symbol" ? f + "" : f, A);
        class G {
          constructor() {
            ge(this, "m_mapTokens", new Map());
          }
          GetLocalization(f, A) {
            const p = this.m_mapTokens.get(f);
            if (!(!p || !p[A])) return p[A];
          }
          SetLocalization(f, A, p) {
            let B = this.m_mapTokens.get(f);
            B || ((B = (0, y.$Y)([], e.bP9, null)), this.m_mapTokens.set(f, B)),
              (B[A] = p);
          }
          GetSortedTokenList() {
            let f = [];
            return (
              this.m_mapTokens.forEach((A, p) => f.push(p)),
              f.sort((A, p) => A.localeCompare(p)),
              f
            );
          }
          GetLanguagesWithTokens() {
            let f = new Map();
            this.m_mapTokens.forEach((p) => {
              for (let B = 0; B < p.length; ++B)
                !f.has(B) &&
                  p[B] !== null &&
                  p[B] !== void 0 &&
                  p[B].trim().length > 0 &&
                  f.set(B, !0);
            });
            let A = new Array();
            return (
              f.forEach((p, B) => {
                p && A.push(B);
              }),
              A
            );
          }
          ClearLanguagesTokens(f) {
            f.forEach((A) => {
              this.m_mapTokens.forEach((p, B) => {
                A < p.length && p[A] !== null && (p[A] = null);
              });
            });
          }
          DebugPrintData() {
            const f = new Array();
            return (
              this.m_mapTokens.forEach((A, p) => f.push(`${p}=${A.join(",")}`)),
              f.join(`
`)
            );
          }
        }
        class x {
          DetectAndFormatCSV(f) {
            var A, p, B, E, O, _;
            let t = null;
            return (
              ((p =
                (A = f == null ? void 0 : f.meta) == null
                  ? void 0
                  : A.fields) == null
                ? void 0
                : p.length) >= 3 &&
              f.meta.fields[0] === "field" &&
              f.meta.fields[1] === "language" &&
              f.meta.fields[2] === "value"
                ? (t = this.ReadLocalizationData_CSV_TokenLanguageList(f))
                : ((E =
                      (B = f == null ? void 0 : f.meta) == null
                        ? void 0
                        : B.fields) == null
                      ? void 0
                      : E.length) >= 2 &&
                    f.meta.fields[0] === "field" &&
                    (0, e.sfN)(f.meta.fields[1], e.xPp) != e.xPp
                  ? (t = this.ReadLocalizationData_CSV_LanguageColumns(f))
                  : ((_ =
                      (O = f == null ? void 0 : f.meta) == null
                        ? void 0
                        : O.fields) == null
                      ? void 0
                      : _.length) >= 2 &&
                    f.meta.fields[0] === "language" &&
                    (t = this.ReadLocalizationData_CSV_LanguageRows(f)),
              t
            );
          }
          async ReadLocalizationData_XML_SingleLanguage(f, A) {
            let p = new G(),
              B = new DOMParser(),
              E = await m.g.ReadFile(f),
              O = B.parseFromString(E.toString(), "application/xml");
            for (let _ = 0; _ < O.documentElement.children.length; ++_) {
              const t = O.documentElement.children.item(_);
              if (!t.getAttribute("id"))
                throw "Can not find id for element. Probably malformed XML";
              const se = t.getAttribute("id").toLocaleLowerCase(),
                ae = t.textContent;
              p.SetLocalization(se, A, ae);
            }
            return p;
          }
          ReadLocalizationData_CSV_TokenLanguageList(f) {
            const A = new G();
            return (
              f.data.forEach((p) => {
                const B = p.field,
                  E = (0, e.sfN)(p.language);
                A.SetLocalization(B, E, p.value);
              }),
              A
            );
          }
          ReadLocalizationData_CSV_LanguageColumns(f) {
            const A = new G();
            return (
              f.data.forEach((p) => {
                const B = p.field;
                for (let E = e.Bhc; E < e.bP9; ++E) {
                  const O = (0, e.x6o)((0, e.LgB)(E));
                  A.SetLocalization(B, E, p[O]);
                }
              }),
              A
            );
          }
          ReadLocalizationData_CSV_LanguageRows(f) {
            const A = new G();
            return (
              f.data.forEach((p) => {
                const B = (0, e.sfN)(p.language, e.bP9);
                if (B !== e.bP9)
                  for (const [E, O] of Object.entries(p))
                    E === "language" ||
                      typeof O != "string" ||
                      A.SetLocalization(E, B, O);
              }),
              A
            );
          }
          GetExportLanguages() {
            return R.A0.GetLanguageListForRealms([q.TU.k_ESteamRealmGlobal]);
          }
          WriteLocalizationData_CSV_TokenAndLanguageColumns(f, A) {
            let p = new Array();
            f.GetSortedTokenList().forEach((E) => {
              for (const O of this.GetExportLanguages()) {
                let _ = { field: E };
                (_.language = (0, e.x6o)((0, e.LgB)(O))),
                  (_.value = f.GetLocalization(E, O)),
                  p.push(_);
              }
            }),
              m.g.WriteCSVToFile(p, A);
          }
          WriteLocalizationData_CSV_LanguageColumns(f, A) {
            let p = new Array();
            f.GetSortedTokenList().forEach((E) => {
              let O = { field: E };
              for (const _ of this.GetExportLanguages())
                O[(0, e.x6o)((0, e.LgB)(_))] = f.GetLocalization(E, _);
              p.push(O);
            }),
              m.g.WriteCSVToFile(p, A);
          }
          WriteLocalizationData_CSV_LanguageRows(f, A) {
            let p = new Array();
            for (const E of this.GetExportLanguages())
              p.length <= E - 1 && p.push({ language: "" }),
                p.push({ language: (0, e.x6o)((0, e.LgB)(E)) });
            f.GetSortedTokenList().forEach((E) => {
              for (const O of this.GetExportLanguages()) {
                const _ = f.GetLocalization(E, O);
                p[O][E] = _;
              }
            }),
              m.g.WriteCSVToFile(p, A);
          }
          WriteLocalizationData_XML_SingleLanguage(f, A, p) {
            let B = document.implementation.createDocument(
              null,
              "content",
              null,
            );
            f.GetSortedTokenList().forEach((O) => {
              let _ = B.createElement("string");
              _.setAttribute("id", O),
                _.appendChild(B.createTextNode(f.GetLocalization(O, A) || "")),
                B.documentElement.append(_);
            }),
              m.g.WriteXMLToFile(B, p);
          }
        }
      },
      11259: (W) => {
        W.exports = {
          FAQDashboardPage: "_59oO6wefB3rQ2vFht_b50",
          FAQDashboard: "tIxuPSrF_izJyj_xSBAu",
          DashboardHeader: "_1fVLwDLknGBvNqXvbz5ieq",
          DashboardHeaderTitle: "_14k5Nx2pbJlfrumOKYilwb",
          DashboardHeaderButtonCtn: "MuQkNExZZvUGyooMU1W63",
          DashboardCreateFAQButton: "_3VW3jphjSrFsWyh8CQ7qkl",
          CreateFAQDialog: "_2053etsNH77sMt0UGZ7Gkf",
          NameInput: "_3qsK9sWwA8-5XRJijxOyAq",
          ErrorMsg: "_1MkpMd3IngFLh9Lj1YdVaZ",
          DashboardListHeaderRow: "_1m9z-QOtKB83PPSMvFp2qj",
          EntryColumn: "_29DifZl5OcFsMPwjVeSKul",
          NameCol: "_1fuClf4BBhhdkGW2AiR9xz",
          DataCol: "_31hg_XZCfqD4KpN77UoWpB",
          ClickableHeader: "_2dUdD5Bxvl5g7AXm74jlY-",
          DownArrow: "_30b5IzshpNjcRcDjnbiHHV",
          Selected: "_3_SL2rzskqZJldo0NVDRPy",
          BadCount: "_1kNWcaTgntfwrNOrNOdLEs",
          Visible: "pbhW7T1VOciPsM4805I5i",
          Hidden: "_2sNUoEB66JUcm-Y3kKrdL8",
          GoodCount: "M3TAP-1MxenvBQsT-eXlR",
          DateToolTip: "Q8C5pKiJQWiQxpeE9g5A0",
          DashboardEntry: "kcPTyksATgiPUcmwAwGOe",
          EntryInternalName: "_1sL5ykMb1b1-WfHxwf8L1K",
        };
      },
      63280: (W) => {
        W.exports = {
          FAQEditPage: "_2QALaQ13bEoS_oLFjL1prx",
          FAQMenuCtn: "_1DISv1JGZ0pxbGtYHeBsJU",
          FAQEditorCtn: "sjpl-ow0jbdSysRG8jsFA",
          FAQEditor: "_3YIwjQZlP_YdCZH2DIj5f7",
          Columns: "_2O3puXm5doASD7CnAby6Uh",
          LeftCol: "_3TyuR_ycmrQIlt-wuVBtaD",
          RightCol: "_33CjP7i4tMRCeZEcf-utD8",
          EditorSaveButton: "_22iwdea7XXbiuZrrLZUU11",
          EditorLabel: "_3jk92bsX5BdG6dMFNGNNKa",
          EditorTitleField: "_37R-2WttVdEqucotluEzW_",
          EditorTitleFieldInput: "_2A5OEhQlo5sJWuhIqlkEJL",
          TextPaneContainer: "X8FYVDc-yIJ2Vmr_KQW2b",
          EditorPane: "B4ngKzLlL1gvAnj9Vdbt4",
          EditorPaneTextArea: "_1g6voAO3uBDdj9W9WjBB8z",
          ErrorCtn: "_1l94et1-5wPLcAMJ3Bx8qq",
          ErrorMsg: "_1LIvQOeIKBZzearuGAM7FW",
          EscapeLink: "_3tlrRmfmxrdkbJRk48aZDb",
        };
      },
      93084: (W) => {
        W.exports = {
          LanguageListDialog: "vp5PFufZdDer7tZRg3jrX",
          ChecklistHeader: "_1VzmzM94XEt-kbk5N0Xcwm",
          ChecklistRows: "_3qgdWDwppIPmVUI3_-IoWg",
          CheckAll: "_1I_jAq3MJfhGnx3-H9fkRc",
          LanguageCheckbox: "_1llVI6GfKRzbQRSS7bS9sI",
          LanguageCheckboxLabel: "_2S_PZcuwqHb1BUGrd6Xvnk",
          Language: "_13DIWnUBOf_d2HSzZWW_72",
          Warning: "hGncGWqE9kTLXhxQe4SJ2",
          ImportProgressBar: "_1s2UZCHSCadxdeXsd6fbj6",
          ProgressMarker: "_2q-TdYLM1Zgn9tPZ3_1wCx",
          CurrentFAQ: "_1MsSLkJk0mX4ITyxy8mpEJ",
          LanguageList: "_28hYlCdWipXh9xN8jgf8ZT",
          ImportResults: "_2FKxIYwCCRBm_BH0BsKyem",
          ImportResultLabel: "_1_icUC7cNPpNZvq_qgQ33D",
          ImportResult: "_3h1LkNfeVLc44BAuHSBudK",
          UrlCode: "MxoxU6nWqZvCxgOlJxTvE",
        };
      },
      35707: (W) => {
        W.exports = {
          LeftMenu: "_1txmemUH3rosQe71mZfr0q",
          Section: "_2j-hhYTlI8Ntg1JrTWINdL",
          SectionContents: "_3lz4JUNpNDnahEyzj1eZkK",
          SectionDescription: "_3L68i4ZAokqaCqqk7yhIau",
          SectionTitle: "_23FTZuq9MQrukHrWgZMKrp",
          VisibilityCtn: "_16zchT5YPTg-YRcLmO7T1N",
          StatusRow: "_272D2JP0YHWH_sY_IP2MJQ",
          Global: "_1DcbV58-8H0QRtU4wmimaO",
          China: "_2cUtBQSP-uCM363ee58k-t",
          StatusBtnCtn: "HJUHTdNtL70vwUqYSh-FD",
          PublishCtn: "_2syC3PimmI-5viillwUd6d",
          PublishStatus: "uvzu3hbcsBlAoiPdATNbf",
          PublishBtn: "_3P52vp7DdW5ZKRbKrEsr64",
          FaqStatusTable: "pCBfTw19y3z1htRCTD7Sk",
        };
      },
      3063: (W) => {
        W.exports = {
          Never: "_8rlUGGeBnYbuZpSoMtPGY",
          Warning: "pZM2L30-1FOU9cbzqy1AQ",
        };
      },
      66444: (W) => {
        W.exports = {
          FAQUnPublished: "erZyIOjQA9q0Wv28vQPiN",
          FAQPublished: "_13Wz0jEDJuyCYIYT-3Nk8X",
          EditorInternalNameLabel: "_3fAcXrEhyNYZKLFAviS1gi",
          EditorInternalName: "_3A9ciQBxaVrGEWI6kD4zod",
        };
      },
      25651: (W) => {
        W.exports = {
          ErrorCtn: "_2Dpwh3MWbH9ND0PlNK8G7M",
          ErrorMsg: "_2dTNxR8PrLvqBwSUnhUVh5",
          EscapeLink: "_19BjjT3X_AZgLiL1pFYCDG",
        };
      },
      54736: (W) => {
        W.exports = {
          DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
          EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
          EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
          EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
          EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
          AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
        };
      },
      51520: (W) => {
        W.exports = {
          SavedImage: "_1y3QVgsz4daj3E3S5wzwt-",
          SaveButtonCtn: "_2Edwnbc-tjinTT_s7zIKTd",
          SaveButton: "_2hloqzkRkAWkw50l4XPN-N",
          HaventSavedInAShortTime: "_3xoBR2gVk2F0Bmejh20Yhl",
          HaventSavedInALongTime: "_1bg505mDp3agK0eHP0NoxI",
          Pulse: "_3oWE-wt1PQ7Rv2IJ0vCmO",
          SaveSuccessNotification: "_1gabCN13JTZzv2A2fXqGve",
          SaveSuccessTitle: "_1d5GXYH4AY9WFkoszJVzsQ",
          slideIn: "_2kGhkRiew8we__yyM1878e",
          slideOut: "_2oAIIbl5uoREv1Es4TZkUQ",
        };
      },
      91126: (W) => {
        W.exports = {
          ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
          ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
          SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
        };
      },
      28735: (W) => {
        W.exports = {
          FAQViewPage: "Ya530FSNxJ-2gfv0qDZYH",
          SupportTitle: "_2BcDfuiFQ7l7yWM5Sa57S0",
          Columns: "HGDD29L4B7rnyrKITC09v",
          LeftCol: "o2y9UpxW9WmUMsLua3flf",
          TopColorBar: "_2n5PMCTXeqy_BxVZeg6Avp",
          RightCol: "_2Ta3cow-y-8kUgXcCrCP97",
          SectionCtn: "_2wa31Vkjhr311VBcF_ynDO",
          FAQTopicCtn: "_38QJomTcPqyUVRdLpfVjGA",
          FAQTitle: "_3aInU3KIhHHBWOSOjNvcVa",
          FAQContent: "_2dSVnHyS9mTV4jJctbYCcy",
        };
      },
      20572: (W) => {
        W.exports = { InfoRow: "_3AG-7BbBE7Sw0efJrEb417" };
      },
      66891: (W) => {
        W.exports = {
          Section: "_3S-XzUnd8sYIE7sDuLmpPo",
          CommunityHelp: "_2TGFIDdCmMB614_-hieBc7",
          NeedHelp: "_1DywXfNVrbQvDpTJXgd18z",
          LeftCol: "_3gfCnqvp6FV0m9PqL9XMq",
          TopicHeader: "_3X6huZLPQI8y6LirxSv4Gy",
          CenterButtonCtn: "_3sZ58WE85Tqs8Bv8g-quYc",
        };
      },
      96471: (W) => {
        W.exports = {
          Label: "_1LhItwhLHspVcQdfcbd2Sg",
          ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
          SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
          ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
        };
      },
      40323: function (W, be) {
        var o, e, q; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((y, m) => {
          (e = []),
            (o = m),
            (q = typeof o == "function" ? o.apply(be, e) : o),
            q !== void 0 && (W.exports = q);
        })(this, function y() {
          var m =
              typeof self != "undefined"
                ? self
                : typeof window != "undefined"
                  ? window
                  : m !== void 0
                    ? m
                    : {},
            R,
            S = !m.document && !!m.postMessage,
            re = m.IS_PAPA_WORKER || !1,
            ge = {},
            G = 0,
            x = {};
          function J(s) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (n) {
                var d = L(n);
                (d.chunkSize = parseInt(d.chunkSize)),
                  n.step || n.chunk || (d.chunkSize = null),
                  (this._handle = new E(d)),
                  ((this._handle.streamer = this)._config = d);
              }.call(this, s),
              (this.parseChunk = function (n, d) {
                var h = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < h) {
                  let D = this._config.newline;
                  D ||
                    ((g = this._config.quoteChar || '"'),
                    (D = this._handle.guessLineEndings(n, g))),
                    (n = [...n.split(D).slice(h)].join(D));
                }
                this.isFirstChunk &&
                  I(this._config.beforeFirstChunk) &&
                  (g = this._config.beforeFirstChunk(n)) !== void 0 &&
                  (n = g),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var h = this._partialLine + n,
                  g =
                    ((this._partialLine = ""),
                    this._handle.parse(h, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((n = g.meta.cursor),
                    (h =
                      (this._finished ||
                        ((this._partialLine = h.substring(n - this._baseIndex)),
                        (this._baseIndex = n)),
                      g && g.data && (this._rowCount += g.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    re)
                  )
                    m.postMessage({
                      results: g,
                      workerId: x.WORKER_ID,
                      finished: h,
                    });
                  else if (I(this._config.chunk) && !d) {
                    if (
                      (this._config.chunk(g, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = g = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(g.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(g.errors)),
                      (this._completeResults.meta = g.meta)),
                    this._completed ||
                      !h ||
                      !I(this._config.complete) ||
                      (g && g.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    h || (g && g.meta.paused) || this._nextChunk(),
                    g
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (n) {
                I(this._config.error)
                  ? this._config.error(n)
                  : re &&
                    this._config.error &&
                    m.postMessage({
                      workerId: x.WORKER_ID,
                      error: n,
                      finished: !1,
                    });
              });
          }
          function f(s) {
            var n;
            (s = s || {}).chunkSize || (s.chunkSize = x.RemoteChunkSize),
              J.call(this, s),
              (this._nextChunk = S
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (d) {
                (this._input = d), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((n = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (n.withCredentials = this._config.withCredentials),
                    S ||
                      ((n.onload = me(this._chunkLoaded, this)),
                      (n.onerror = me(this._chunkError, this))),
                    n.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !S,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var d,
                      h = this._config.downloadRequestHeaders;
                    for (d in h) n.setRequestHeader(d, h[d]);
                  }
                  var g;
                  this._config.chunkSize &&
                    ((g = this._start + this._config.chunkSize - 1),
                    n.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + g,
                    ));
                  try {
                    n.send(this._config.downloadRequestBody);
                  } catch (D) {
                    this._chunkError(D.message);
                  }
                  S && n.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                n.readyState === 4 &&
                  (n.status < 200 || 400 <= n.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || n.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((d) =>
                            (d = d.getResponseHeader("Content-Range")) !== null
                              ? parseInt(d.substring(d.lastIndexOf("/") + 1))
                              : -1)(n)),
                      this.parseChunk(n.responseText)));
              }),
              (this._chunkError = function (d) {
                (d = n.statusText || d), this._sendError(new Error(d));
              });
          }
          function A(s) {
            (s = s || {}).chunkSize || (s.chunkSize = x.LocalChunkSize),
              J.call(this, s);
            var n,
              d,
              h = typeof FileReader != "undefined";
            (this.stream = function (g) {
              (this._input = g),
                (d = g.slice || g.webkitSlice || g.mozSlice),
                h
                  ? (((n = new FileReader()).onload = me(
                      this._chunkLoaded,
                      this,
                    )),
                    (n.onerror = me(this._chunkError, this)))
                  : (n = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var g = this._input,
                  D =
                    (this._config.chunkSize &&
                      ((D = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (g = d.call(g, this._start, D))),
                    n.readAsText(g, this._config.encoding));
                h || this._chunkLoaded({ target: { result: D } });
              }),
              (this._chunkLoaded = function (g) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(g.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(n.error);
              });
          }
          function p(s) {
            var n;
            J.call(this, (s = s || {})),
              (this.stream = function (d) {
                return (n = d), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var d, h;
                if (!this._finished)
                  return (
                    (d = this._config.chunkSize),
                    (n = d
                      ? ((h = n.substring(0, d)), n.substring(d))
                      : ((h = n), "")),
                    (this._finished = !n),
                    this.parseChunk(h)
                  );
              });
          }
          function B(s) {
            J.call(this, (s = s || {}));
            var n = [],
              d = !0,
              h = !1;
            (this.pause = function () {
              J.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                J.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (g) {
                (this._input = g),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                h && n.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  n.length ? this.parseChunk(n.shift()) : (d = !0);
              }),
              (this._streamData = me(function (g) {
                try {
                  n.push(
                    typeof g == "string"
                      ? g
                      : g.toString(this._config.encoding),
                  ),
                    d &&
                      ((d = !1),
                      this._checkIsFinished(),
                      this.parseChunk(n.shift()));
                } catch (D) {
                  this._streamError(D);
                }
              }, this)),
              (this._streamError = me(function (g) {
                this._streamCleanUp(), this._sendError(g);
              }, this)),
              (this._streamEnd = me(function () {
                this._streamCleanUp(), (h = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = me(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function E(s) {
            var n,
              d,
              h,
              g,
              D = Math.pow(2, 53),
              P = -D,
              H = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              te =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              F = this,
              N = 0,
              T = 0,
              Z = !1,
              Q = !1,
              U = [],
              b = { data: [], errors: [], meta: {} };
            function ve(k) {
              return s.skipEmptyLines === "greedy"
                ? k.join("").trim() === ""
                : k.length === 1 && k[0].length === 0;
            }
            function pe() {
              if (
                (b &&
                  h &&
                  (we(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      x.DefaultDelimiter +
                      "'",
                  ),
                  (h = !1)),
                s.skipEmptyLines &&
                  (b.data = b.data.filter(function (de) {
                    return !ve(de);
                  })),
                Ae())
              ) {
                let de = function (Ee, ce) {
                  I(s.transformHeader) && (Ee = s.transformHeader(Ee, ce)),
                    U.push(Ee);
                };
                var z = de;
                if (b)
                  if (Array.isArray(b.data[0])) {
                    for (var k = 0; Ae() && k < b.data.length; k++)
                      b.data[k].forEach(de);
                    b.data.splice(0, 1);
                  } else b.data.forEach(de);
              }
              function K(de, Ee) {
                for (
                  var ce = s.header ? {} : [], ee = 0;
                  ee < de.length;
                  ee++
                ) {
                  var V = ee,
                    xe = de[ee],
                    xe = ((X, oe) =>
                      ((fe) => (
                        s.dynamicTypingFunction &&
                          s.dynamicTyping[fe] === void 0 &&
                          (s.dynamicTyping[fe] = s.dynamicTypingFunction(fe)),
                        (s.dynamicTyping[fe] || s.dynamicTyping) === !0
                      ))(X)
                        ? oe === "true" ||
                          oe === "TRUE" ||
                          (oe !== "false" &&
                            oe !== "FALSE" &&
                            (((fe) => {
                              if (
                                H.test(fe) &&
                                ((fe = parseFloat(fe)), P < fe && fe < D)
                              )
                                return 1;
                            })(oe)
                              ? parseFloat(oe)
                              : te.test(oe)
                                ? new Date(oe)
                                : oe === ""
                                  ? null
                                  : oe))
                        : oe)(
                      (V = s.header
                        ? ee >= U.length
                          ? "__parsed_extra"
                          : U[ee]
                        : V),
                      (xe = s.transform ? s.transform(xe, V) : xe),
                    );
                  V === "__parsed_extra"
                    ? ((ce[V] = ce[V] || []), ce[V].push(xe))
                    : (ce[V] = xe);
                }
                return (
                  s.header &&
                    (ee > U.length
                      ? we(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            U.length +
                            " fields but parsed " +
                            ee,
                          T + Ee,
                        )
                      : ee < U.length &&
                        we(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            U.length +
                            " fields but parsed " +
                            ee,
                          T + Ee,
                        )),
                  ce
                );
              }
              var ue;
              b &&
                (s.header || s.dynamicTyping || s.transform) &&
                ((ue = 1),
                !b.data.length || Array.isArray(b.data[0])
                  ? ((b.data = b.data.map(K)), (ue = b.data.length))
                  : (b.data = K(b.data, 0)),
                s.header && b.meta && (b.meta.fields = U),
                (T += ue));
            }
            function Ae() {
              return s.header && U.length === 0;
            }
            function we(k, K, ue, z) {
              (k = { type: k, code: K, message: ue }),
                z !== void 0 && (k.row = z),
                b.errors.push(k);
            }
            I(s.step) &&
              ((g = s.step),
              (s.step = function (k) {
                (b = k),
                  Ae()
                    ? pe()
                    : (pe(),
                      b.data.length !== 0 &&
                        ((N += k.data.length),
                        s.preview && N > s.preview
                          ? d.abort()
                          : ((b.data = b.data[0]), g(b, F))));
              })),
              (this.parse = function (k, K, ue) {
                var z = s.quoteChar || '"',
                  z =
                    (s.newline || (s.newline = this.guessLineEndings(k, z)),
                    (h = !1),
                    s.delimiter
                      ? I(s.delimiter) &&
                        ((s.delimiter = s.delimiter(k)),
                        (b.meta.delimiter = s.delimiter))
                      : ((z = ((de, Ee, ce, ee, V) => {
                          var xe, X, oe, fe;
                          V = V || [
                            ",",
                            "	",
                            "|",
                            ";",
                            x.RECORD_SEP,
                            x.UNIT_SEP,
                          ];
                          for (var Ne = 0; Ne < V.length; Ne++) {
                            for (
                              var Fe,
                                Qe = V[Ne],
                                Le = 0,
                                Te = 0,
                                le = 0,
                                Ce =
                                  ((oe = void 0),
                                  new _({
                                    comments: ee,
                                    delimiter: Qe,
                                    newline: Ee,
                                    preview: 10,
                                  }).parse(de)),
                                Se = 0;
                              Se < Ce.data.length;
                              Se++
                            )
                              ce && ve(Ce.data[Se])
                                ? le++
                                : ((Fe = Ce.data[Se].length),
                                  (Te += Fe),
                                  oe === void 0
                                    ? (oe = Fe)
                                    : 0 < Fe &&
                                      ((Le += Math.abs(Fe - oe)), (oe = Fe)));
                            0 < Ce.data.length && (Te /= Ce.data.length - le),
                              (X === void 0 || Le <= X) &&
                                (fe === void 0 || fe < Te) &&
                                1.99 < Te &&
                                ((X = Le), (xe = Qe), (fe = Te));
                          }
                          return {
                            successful: !!(s.delimiter = xe),
                            bestDelimiter: xe,
                          };
                        })(
                          k,
                          s.newline,
                          s.skipEmptyLines,
                          s.comments,
                          s.delimitersToGuess,
                        )).successful
                          ? (s.delimiter = z.bestDelimiter)
                          : ((h = !0), (s.delimiter = x.DefaultDelimiter)),
                        (b.meta.delimiter = s.delimiter)),
                    L(s));
                return (
                  s.preview && s.header && z.preview++,
                  (n = k),
                  (d = new _(z)),
                  (b = d.parse(n, K, ue)),
                  pe(),
                  Z ? { meta: { paused: !0 } } : b || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return Z;
              }),
              (this.pause = function () {
                (Z = !0),
                  d.abort(),
                  (n = I(s.chunk) ? "" : n.substring(d.getCharIndex()));
              }),
              (this.resume = function () {
                F.streamer._halted
                  ? ((Z = !1), F.streamer.parseChunk(n, !0))
                  : setTimeout(F.resume, 3);
              }),
              (this.aborted = function () {
                return Q;
              }),
              (this.abort = function () {
                (Q = !0),
                  d.abort(),
                  (b.meta.aborted = !0),
                  I(s.complete) && s.complete(b),
                  (n = "");
              }),
              (this.guessLineEndings = function (de, z) {
                de = de.substring(0, 1048576);
                var z = new RegExp(O(z) + "([^]*?)" + O(z), "gm"),
                  ue = (de = de.replace(z, "")).split("\r"),
                  z = de.split(`
`),
                  de = 1 < z.length && z[0].length < ue[0].length;
                if (ue.length === 1 || de)
                  return `
`;
                for (var Ee = 0, ce = 0; ce < ue.length; ce++)
                  ue[ce][0] ===
                    `
` && Ee++;
                return Ee >= ue.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function O(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function _(s) {
            var n = (s = s || {}).delimiter,
              d = s.newline,
              h = s.comments,
              g = s.step,
              D = s.preview,
              P = s.fastMode,
              H = null,
              te = !1,
              F = s.quoteChar == null ? '"' : s.quoteChar,
              N = F;
            if (
              (s.escapeChar !== void 0 && (N = s.escapeChar),
              (typeof n != "string" || -1 < x.BAD_DELIMITERS.indexOf(n)) &&
                (n = ","),
              h === n)
            )
              throw new Error("Comment character same as delimiter");
            h === !0
              ? (h = "#")
              : (typeof h != "string" || -1 < x.BAD_DELIMITERS.indexOf(h)) &&
                (h = !1),
              d !==
                `
` &&
                d !== "\r" &&
                d !==
                  `\r
` &&
                (d = `
`);
            var T = 0,
              Z = !1;
            (this.parse = function (Q, U, b) {
              if (typeof Q != "string")
                throw new Error("Input must be a string");
              var ve = Q.length,
                pe = n.length,
                Ae = d.length,
                we = h.length,
                k = I(g),
                K = [],
                ue = [],
                z = [],
                de = (T = 0);
              if (!Q) return Le();
              if (P || (P !== !1 && Q.indexOf(F) === -1)) {
                for (var Ee = Q.split(d), ce = 0; ce < Ee.length; ce++) {
                  if (((z = Ee[ce]), (T += z.length), ce !== Ee.length - 1))
                    T += d.length;
                  else if (b) return Le();
                  if (!h || z.substring(0, we) !== h) {
                    if (k) {
                      if (((K = []), fe(z.split(n)), Te(), Z)) return Le();
                    } else fe(z.split(n));
                    if (D && D <= ce) return (K = K.slice(0, D)), Le(!0);
                  }
                }
                return Le();
              }
              for (
                var ee = Q.indexOf(n, T),
                  V = Q.indexOf(d, T),
                  xe = new RegExp(O(N) + O(F), "g"),
                  X = Q.indexOf(F, T);
                ;
              )
                if (Q[T] === F)
                  for (X = T, T++; ; ) {
                    if ((X = Q.indexOf(F, X + 1)) === -1)
                      return (
                        b ||
                          ue.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: K.length,
                            index: T,
                          }),
                        Fe()
                      );
                    if (X === ve - 1)
                      return Fe(Q.substring(T, X).replace(xe, F));
                    if (F === N && Q[X + 1] === N) X++;
                    else if (F === N || X === 0 || Q[X - 1] !== N) {
                      ee !== -1 && ee < X + 1 && (ee = Q.indexOf(n, X + 1));
                      var oe = Ne(
                        (V =
                          V !== -1 && V < X + 1 ? Q.indexOf(d, X + 1) : V) ===
                          -1
                          ? ee
                          : Math.min(ee, V),
                      );
                      if (Q.substr(X + 1 + oe, pe) === n) {
                        z.push(Q.substring(T, X).replace(xe, F)),
                          Q[(T = X + 1 + oe + pe)] !== F &&
                            (X = Q.indexOf(F, T)),
                          (ee = Q.indexOf(n, T)),
                          (V = Q.indexOf(d, T));
                        break;
                      }
                      if (
                        ((oe = Ne(V)),
                        Q.substring(X + 1 + oe, X + 1 + oe + Ae) === d)
                      ) {
                        if (
                          (z.push(Q.substring(T, X).replace(xe, F)),
                          Qe(X + 1 + oe + Ae),
                          (ee = Q.indexOf(n, T)),
                          (X = Q.indexOf(F, T)),
                          k && (Te(), Z))
                        )
                          return Le();
                        if (D && K.length >= D) return Le(!0);
                        break;
                      }
                      ue.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: K.length,
                        index: T,
                      }),
                        X++;
                    }
                  }
                else if (h && z.length === 0 && Q.substring(T, T + we) === h) {
                  if (V === -1) return Le();
                  (T = V + Ae), (V = Q.indexOf(d, T)), (ee = Q.indexOf(n, T));
                } else if (ee !== -1 && (ee < V || V === -1))
                  z.push(Q.substring(T, ee)),
                    (T = ee + pe),
                    (ee = Q.indexOf(n, T));
                else {
                  if (V === -1) break;
                  if ((z.push(Q.substring(T, V)), Qe(V + Ae), k && (Te(), Z)))
                    return Le();
                  if (D && K.length >= D) return Le(!0);
                }
              return Fe();
              function fe(le) {
                K.push(le), (de = T);
              }
              function Ne(le) {
                var Ce = 0;
                return (Ce =
                  le !== -1 && (le = Q.substring(X + 1, le)) && le.trim() === ""
                    ? le.length
                    : Ce);
              }
              function Fe(le) {
                return (
                  b ||
                    (le === void 0 && (le = Q.substring(T)),
                    z.push(le),
                    (T = ve),
                    fe(z),
                    k && Te()),
                  Le()
                );
              }
              function Qe(le) {
                (T = le), fe(z), (z = []), (V = Q.indexOf(d, T));
              }
              function Le(le) {
                if (s.header && !U && K.length && !te) {
                  var Ce = K[0],
                    Se = Object.create(null),
                    Ve = new Set(Ce);
                  let We = !1;
                  for (let Re = 0; Re < Ce.length; Re++) {
                    let ye = Ce[Re];
                    if (
                      Se[
                        (ye = I(s.transformHeader)
                          ? s.transformHeader(ye, Re)
                          : ye)
                      ]
                    ) {
                      let Be,
                        Me = Se[ye];
                      for (; (Be = ye + "_" + Me), Me++, Ve.has(Be); );
                      Ve.add(Be),
                        (Ce[Re] = Be),
                        Se[ye]++,
                        (We = !0),
                        ((H = H === null ? {} : H)[Be] = ye);
                    } else (Se[ye] = 1), (Ce[Re] = ye);
                    Ve.add(ye);
                  }
                  We && console.warn("Duplicate headers found and renamed."),
                    (te = !0);
                }
                return {
                  data: K,
                  errors: ue,
                  meta: {
                    delimiter: n,
                    linebreak: d,
                    aborted: Z,
                    truncated: !!le,
                    cursor: de + (U || 0),
                    renamedHeaders: H,
                  },
                };
              }
              function Te() {
                g(Le()), (K = []), (ue = []);
              }
            }),
              (this.abort = function () {
                Z = !0;
              }),
              (this.getCharIndex = function () {
                return T;
              });
          }
          function t(s) {
            var n = s.data,
              d = ge[n.workerId],
              h = !1;
            if (n.error) d.userError(n.error, n.file);
            else if (n.results && n.results.data) {
              var g = {
                abort: function () {
                  (h = !0),
                    se(n.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: ae,
                resume: ae,
              };
              if (I(d.userStep)) {
                for (
                  var D = 0;
                  D < n.results.data.length &&
                  (d.userStep(
                    {
                      data: n.results.data[D],
                      errors: n.results.errors,
                      meta: n.results.meta,
                    },
                    g,
                  ),
                  !h);
                  D++
                );
                delete n.results;
              } else
                I(d.userChunk) &&
                  (d.userChunk(n.results, g, n.file), delete n.results);
            }
            n.finished && !h && se(n.workerId, n.results);
          }
          function se(s, n) {
            var d = ge[s];
            I(d.userComplete) && d.userComplete(n), d.terminate(), delete ge[s];
          }
          function ae() {
            throw new Error("Not implemented.");
          }
          function L(s) {
            if (typeof s != "object" || s === null) return s;
            var n,
              d = Array.isArray(s) ? [] : {};
            for (n in s) d[n] = L(s[n]);
            return d;
          }
          function me(s, n) {
            return function () {
              s.apply(n, arguments);
            };
          }
          function I(s) {
            return typeof s == "function";
          }
          return (
            (x.parse = function (s, n) {
              var d = (n = n || {}).dynamicTyping || !1;
              if (
                (I(d) && ((n.dynamicTypingFunction = d), (d = {})),
                (n.dynamicTyping = d),
                (n.transform = !!I(n.transform) && n.transform),
                !n.worker || !x.WORKERS_SUPPORTED)
              )
                return (
                  (d = null),
                  x.NODE_STREAM_INPUT,
                  typeof s == "string"
                    ? ((s = ((h) =>
                        h.charCodeAt(0) !== 65279 ? h : h.slice(1))(s)),
                      (d = new (n.download ? f : p)(n)))
                    : s.readable === !0 && I(s.read) && I(s.on)
                      ? (d = new B(n))
                      : ((m.File && s instanceof File) ||
                          s instanceof Object) &&
                        (d = new A(n)),
                  d.stream(s)
                );
              ((d = (() => {
                var h;
                return (
                  !!x.WORKERS_SUPPORTED &&
                  ((h = (() => {
                    var g = m.URL || m.webkitURL || null,
                      D = y.toString();
                    return (
                      x.BLOB_URL ||
                      (x.BLOB_URL = g.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            D,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((h = new m.Worker(h)).onmessage = t),
                  (h.id = G++),
                  (ge[h.id] = h))
                );
              })()).userStep = n.step),
                (d.userChunk = n.chunk),
                (d.userComplete = n.complete),
                (d.userError = n.error),
                (n.step = I(n.step)),
                (n.chunk = I(n.chunk)),
                (n.complete = I(n.complete)),
                (n.error = I(n.error)),
                delete n.worker,
                d.postMessage({ input: s, config: n, workerId: d.id });
            }),
            (x.unparse = function (s, n) {
              var d = !1,
                h = !0,
                g = ",",
                D = `\r
`,
                P = '"',
                H = P + P,
                te = !1,
                F = null,
                N = !1,
                T =
                  ((() => {
                    if (typeof n == "object") {
                      if (
                        (typeof n.delimiter != "string" ||
                          x.BAD_DELIMITERS.filter(function (U) {
                            return n.delimiter.indexOf(U) !== -1;
                          }).length ||
                          (g = n.delimiter),
                        (typeof n.quotes != "boolean" &&
                          typeof n.quotes != "function" &&
                          !Array.isArray(n.quotes)) ||
                          (d = n.quotes),
                        (typeof n.skipEmptyLines != "boolean" &&
                          typeof n.skipEmptyLines != "string") ||
                          (te = n.skipEmptyLines),
                        typeof n.newline == "string" && (D = n.newline),
                        typeof n.quoteChar == "string" && (P = n.quoteChar),
                        typeof n.header == "boolean" && (h = n.header),
                        Array.isArray(n.columns))
                      ) {
                        if (n.columns.length === 0)
                          throw new Error("Option columns is empty");
                        F = n.columns;
                      }
                      n.escapeChar !== void 0 && (H = n.escapeChar + P),
                        n.escapeFormulae instanceof RegExp
                          ? (N = n.escapeFormulae)
                          : typeof n.escapeFormulae == "boolean" &&
                            n.escapeFormulae &&
                            (N = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(O(P), "g"));
              if (
                (typeof s == "string" && (s = JSON.parse(s)), Array.isArray(s))
              ) {
                if (!s.length || Array.isArray(s[0])) return Z(null, s, te);
                if (typeof s[0] == "object")
                  return Z(F || Object.keys(s[0]), s, te);
              } else if (typeof s == "object")
                return (
                  typeof s.data == "string" && (s.data = JSON.parse(s.data)),
                  Array.isArray(s.data) &&
                    (s.fields || (s.fields = (s.meta && s.meta.fields) || F),
                    s.fields ||
                      (s.fields = Array.isArray(s.data[0])
                        ? s.fields
                        : typeof s.data[0] == "object"
                          ? Object.keys(s.data[0])
                          : []),
                    Array.isArray(s.data[0]) ||
                      typeof s.data[0] == "object" ||
                      (s.data = [s.data])),
                  Z(s.fields || [], s.data || [], te)
                );
              throw new Error("Unable to serialize unrecognized input");
              function Z(U, b, ve) {
                var pe = "",
                  Ae =
                    (typeof U == "string" && (U = JSON.parse(U)),
                    typeof b == "string" && (b = JSON.parse(b)),
                    Array.isArray(U) && 0 < U.length),
                  we = !Array.isArray(b[0]);
                if (Ae && h) {
                  for (var k = 0; k < U.length; k++)
                    0 < k && (pe += g), (pe += Q(U[k], k));
                  0 < b.length && (pe += D);
                }
                for (var K = 0; K < b.length; K++) {
                  var ue = (Ae ? U : b[K]).length,
                    z = !1,
                    de = Ae
                      ? Object.keys(b[K]).length === 0
                      : b[K].length === 0;
                  if (
                    (ve &&
                      !Ae &&
                      (z =
                        ve === "greedy"
                          ? b[K].join("").trim() === ""
                          : b[K].length === 1 && b[K][0].length === 0),
                    ve === "greedy" && Ae)
                  ) {
                    for (var Ee = [], ce = 0; ce < ue; ce++) {
                      var ee = we ? U[ce] : ce;
                      Ee.push(b[K][ee]);
                    }
                    z = Ee.join("").trim() === "";
                  }
                  if (!z) {
                    for (var V = 0; V < ue; V++) {
                      0 < V && !de && (pe += g);
                      var xe = Ae && we ? U[V] : V;
                      pe += Q(b[K][xe], V);
                    }
                    K < b.length - 1 && (!ve || (0 < ue && !de)) && (pe += D);
                  }
                }
                return pe;
              }
              function Q(U, b) {
                var ve, pe;
                return U == null
                  ? ""
                  : U.constructor === Date
                    ? JSON.stringify(U).slice(1, 25)
                    : ((pe = !1),
                      N &&
                        typeof U == "string" &&
                        N.test(U) &&
                        ((U = "'" + U), (pe = !0)),
                      (ve = U.toString().replace(T, H)),
                      (pe =
                        pe ||
                        d === !0 ||
                        (typeof d == "function" && d(U, b)) ||
                        (Array.isArray(d) && d[b]) ||
                        ((Ae, we) => {
                          for (var k = 0; k < we.length; k++)
                            if (-1 < Ae.indexOf(we[k])) return !0;
                          return !1;
                        })(ve, x.BAD_DELIMITERS) ||
                        -1 < ve.indexOf(g) ||
                        ve.charAt(0) === " " ||
                        ve.charAt(ve.length - 1) === " ")
                        ? P + ve + P
                        : ve);
              }
            }),
            (x.RECORD_SEP = ""),
            (x.UNIT_SEP = ""),
            (x.BYTE_ORDER_MARK = "\uFEFF"),
            (x.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              x.BYTE_ORDER_MARK,
            ]),
            (x.WORKERS_SUPPORTED = !S && !!m.Worker),
            (x.NODE_STREAM_INPUT = 1),
            (x.LocalChunkSize = 10485760),
            (x.RemoteChunkSize = 5242880),
            (x.DefaultDelimiter = ","),
            (x.Parser = _),
            (x.ParserHandle = E),
            (x.NetworkStreamer = f),
            (x.FileStreamer = A),
            (x.StringStreamer = p),
            (x.ReadableStreamStreamer = B),
            m.jQuery &&
              ((R = m.jQuery).fn.parse = function (s) {
                var n = s.config || {},
                  d = [];
                return (
                  this.each(function (D) {
                    if (
                      !(
                        R(this).prop("tagName").toUpperCase() === "INPUT" &&
                        R(this).attr("type").toLowerCase() === "file" &&
                        m.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var P = 0; P < this.files.length; P++)
                      d.push({
                        file: this.files[P],
                        inputElem: this,
                        instanceConfig: R.extend({}, n),
                      });
                  }),
                  h(),
                  this
                );
                function h() {
                  if (d.length === 0) I(s.complete) && s.complete();
                  else {
                    var D,
                      P,
                      H,
                      te,
                      F = d[0];
                    if (I(s.before)) {
                      var N = s.before(F.file, F.inputElem);
                      if (typeof N == "object") {
                        if (N.action === "abort")
                          return (
                            (D = "AbortError"),
                            (P = F.file),
                            (H = F.inputElem),
                            (te = N.reason),
                            void (I(s.error) && s.error({ name: D }, P, H, te))
                          );
                        if (N.action === "skip") return void g();
                        typeof N.config == "object" &&
                          (F.instanceConfig = R.extend(
                            F.instanceConfig,
                            N.config,
                          ));
                      } else if (N === "skip") return void g();
                    }
                    var T = F.instanceConfig.complete;
                    (F.instanceConfig.complete = function (Z) {
                      I(T) && T(Z, F.file, F.inputElem), g();
                    }),
                      x.parse(F.file, F.instanceConfig);
                  }
                }
                function g() {
                  d.splice(0, 1), h();
                }
              }),
            re &&
              (m.onmessage = function (s) {
                (s = s.data),
                  x.WORKER_ID === void 0 && s && (x.WORKER_ID = s.workerId),
                  typeof s.input == "string"
                    ? m.postMessage({
                        workerId: x.WORKER_ID,
                        results: x.parse(s.input, s.config),
                        finished: !0,
                      })
                    : ((m.File && s.input instanceof File) ||
                        s.input instanceof Object) &&
                      (s = x.parse(s.input, s.config)) &&
                      m.postMessage({
                        workerId: x.WORKER_ID,
                        results: s,
                        finished: !0,
                      });
              }),
            ((f.prototype = Object.create(J.prototype)).constructor = f),
            ((A.prototype = Object.create(J.prototype)).constructor = A),
            ((p.prototype = Object.create(p.prototype)).constructor = p),
            ((B.prototype = Object.create(J.prototype)).constructor = B),
            x
          );
        });
      },
      59461: (W, be, o) => {
        "use strict";
        o.d(be, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=";
      },
      26759: (W, be, o) => {
        "use strict";
        o.d(be, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
      },
    },
  ]);
})();
