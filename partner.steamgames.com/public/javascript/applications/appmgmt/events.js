/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [4268],
    {
      21482: (W, R, t) => {
        "use strict";
        t.r(R), t.d(R, { default: () => ce });
        var e = t(7850),
          K = t(41735),
          U = t.n(K),
          S = t(90626),
          u = t(99412),
          w = t(72604),
          j = t(32093),
          _ = t(73259),
          y = t(76559),
          F = t(58483),
          H = t(98534),
          v = t(58534),
          V = t(25792),
          z = t(33168),
          A = t(24806),
          D = t(26251),
          J = t(2801),
          f = t(88003),
          d = t(85599),
          c = t(41635),
          L = t(36707),
          r = t(18210),
          ie = t(20398),
          oe = t(34592),
          N = t(3166),
          s = t(58962),
          Be = t.n(s);
        function G(a, i, n) {
          const o = a && a.length > n ? [...a] : (0, c.$Y)(a || [], n + 1, "");
          return (o[n] = i), o;
        }
        function p(a, i) {
          return (a && a.length > i && a[i]) || "";
        }
        function ne(a, i) {
          let o = !1,
            B = !1;
          for (let l = u.Bhc; l < u.bP9; l++) {
            const P = p(a, l).trim(),
              g = p(i, l).trim();
            if (!P && !g) continue;
            const E = (0, r.we)("#Language_" + (0, u.LgB)(l));
            if (((o = !0), !P))
              return (0, r.we)("#BuildNotes_Error_MissingTitle", E);
            if (!g) return (0, r.we)("#BuildNotes_Error_MissingDescription", E);
            if (P.length > _.dm)
              return (0, r.we)("#BuildNotes_Error_TitleTooLong", E);
            if (g.length > 32768)
              return (0, r.we)("#BuildNotes_Error_DescriptionTooLong", E);
            l === u.Bhc && (B = !0);
          }
          return o
            ? B
              ? null
              : (0, r.we)("#BuildNotes_Error_NoEnglishProvided")
            : (0, r.we)("#BuildNotes_Error_NoLanguagesProvided");
        }
        async function re(a, i, n) {
          if (ne(i, n)) return null;
          const o = null;
          if (o) return o;
          const B = !!p(i, u.ZLm).trim(),
            l = new FormData();
          l.append("sessionid", (0, N.KC)()),
            l.append("appid", "" + a),
            l.append("post_steam_china", "" + B),
            l.append("titles", JSON.stringify(i)),
            l.append("descriptions", JSON.stringify(n)),
            l.append("build_id", "" + T.Get().GetPostedBuildVersion()),
            l.append("build_branch", T.Get().GetBuildBranch());
          const P =
            N.TS.PARTNER_BASE_URL + "partnerevents/ajaxpublishpatchnotes";
          try {
            const g = await U().post(P, l, { withCredentials: !0 });
            if (g?.data?.success == w.R) return g.data;
            console.error(
              "buildpatchnotes: OnSubmitCreateEvent error code  " +
                g?.data?.success +
                " msg: " +
                g?.data?.msg,
            );
          } catch (g) {
            const E = (0, oe.H)(g);
            console.error(
              "buildpatchnotes: OnSubmitCreateEvent " + E.strErrorMsg,
              E,
            );
          }
          return null;
        }
        function le(a, i) {
          let n = new _.lh();
          (n.GID = "PreviewPartnerEventRow_0"),
            (n.clanSteamID = new y.b(N.iA.steamid)),
            (n.postTime = Date.now() / 1e3),
            (n.startTime = Date.now() / 1e3),
            (n.createTime = Date.now() / 1e3),
            (n.type = u.Fwr);
          for (let o = u.Bhc; o < u.bP9; o++)
            n.name.set(o, p(a, o)), n.description.set(o, p(i, o));
          return n;
        }
        function de() {
          const a = new URLSearchParams(window.location.search);
          a.delete("submittedbuild"), a.delete("buildbranch");
          const i = a.toString(),
            n =
              window.location.origin +
              window.location.pathname +
              (i ? "?" + i : "") +
              window.location.hash;
          window.history.replaceState({}, "", n);
        }
        class T {
          m_nBuildVersion;
          m_bSteamChina;
          m_strBuildBranch;
          static s_Singleton;
          static Get() {
            return (
              this.s_Singleton ||
                ((this.s_Singleton = new T()), this.s_Singleton.Init()),
              this.s_Singleton
            );
          }
          Init() {
            const i = (0, N.Tc)("build_notes", "application_config");
            (this.m_nBuildVersion = i?.build_version || 0),
              (this.m_bSteamChina = i?.steam_china || !1),
              (this.m_strBuildBranch = i?.build_branch || ""),
              (this.m_strBuildBranch = this.m_strBuildBranch
                .trim()
                .toLocaleLowerCase()),
              this.m_strBuildBranch === "default" &&
                (this.m_strBuildBranch = "");
          }
          GetPostedBuildVersion() {
            return this.m_nBuildVersion;
          }
          BShouldShowPatchNotesEditor() {
            return this.GetPostedBuildVersion() > 0;
          }
          BCanSubmitSteamChinaPatchNotes() {
            return this.m_bSteamChina;
          }
          GetBuildBranch() {
            return this.m_strBuildBranch;
          }
        }
        function ce(a) {
          const [i, n] = S.useState(u.Bhc),
            [o, B] = S.useState(null),
            [l, P] = S.useState(null),
            [g, E] = S.useState(null),
            [x, C] = S.useState("editing"),
            [$, Y] = S.useState(null);
          if (!T.Get().BShouldShowPatchNotesEditor()) return null;
          const O = (h) => n(h),
            Q = () => E(le(o, l)),
            m = (h) => !!(p(o, h) || p(l, h)),
            Z = () => E(null),
            X = async () => {
              E(null), C("submitting");
              const h = await re(a.appId, o, l);
              h ? (Y(h.clan_event_gid), de(), C("submitted")) : C("failed");
            },
            M = (h, I) => {
              const ae = new Array();
              let k = o,
                q = l;
              for (const b of I) {
                const ee = h.GetLocalization("Title", b) || "",
                  te = h.GetLocalization("Description", b) || "";
                (ee || te) && ae.push(b),
                  ee && (k = G(k, ee, b)),
                  te && (q = G(q, te, b));
              }
              return B(k), P(q), ae;
            },
            se = T.Get().BCanSubmitSteamChinaPatchNotes()
              ? [j.TU.k_ESteamRealmChina, j.TU.k_ESteamRealmGlobal]
              : [j.TU.k_ESteamRealmGlobal],
            Pe = ne(o, l),
            Ee =
              N.TS.COMMUNITY_BASE_URL +
              "ogg/" +
              a.appId +
              "/partnerevents/create/";
          return (0, e.jsxs)(V.tH, {
            children: [
              (0, e.jsxs)("div", {
                className: s.BuildNoteCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: s.BuildTitle,
                    children: (0, r.we)(
                      "#BuildNotes_Title",
                      T.Get().GetPostedBuildVersion(),
                      T.Get().GetBuildBranch() || "default",
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    className: s.SplitPanel,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s.DescriptionPanel,
                        children: [
                          (0, e.jsx)("div", {
                            className: s.BuildSubTitle,
                            children: (0, r.we)("#BuildNotes_SubTitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: s.InfoText,
                            children: (0, r.we)("#BuildNotes_Desc1"),
                          }),
                          (0, e.jsx)("div", {
                            className: s.InfoText,
                            children: (0, r.PP)("#BuildNotes_Desc2"),
                          }),
                          (0, e.jsx)("a", {
                            href: Ee,
                            children: (0, e.jsx)(v.$n, {
                              children: (0, r.we)("#BuildNotes_OpenFullEditor"),
                            }),
                          }),
                        ],
                      }),
                      x === "editing" &&
                        (0, e.jsx)(ue, {
                          sError: Pe,
                          eLanguage: i,
                          realms: se,
                          fnHasLanguage: m,
                          fnSetLanguage: O,
                          fnGetTitle: (h) => p(o, h),
                          fnSetTitle: (h, I) => B(G(o, I, h)),
                          fnGetDescription: (h) => p(l, h),
                          fnSetDescription: (h, I) => P(G(l, I, h)),
                          fnOnPreviewEvent: Q,
                          fnApplyLoc: M,
                        }),
                      x === "submitting" && (0, e.jsx)(ge, {}),
                      x === "failed" &&
                        (0, e.jsx)(me, {
                          fnOnReturnToEditor: () => C("editing"),
                        }),
                      x === "submitted" &&
                        (0, e.jsx)(_e, { appId: a.appId, eventGid: $ }),
                    ],
                  }),
                ],
              }),
              !!(g && x === "editing") &&
                (0, e.jsx)(he, {
                  event: g,
                  eLanguage: i,
                  realms: se,
                  fnOnClose: Z,
                  fnOnSubmitEvent: X,
                  fnHasLanguage: m,
                  fnSetLanguage: O,
                }),
            ],
          });
        }
        const ue = (a) => {
            const {
                sError: i,
                eLanguage: n,
                realms: o,
                fnHasLanguage: B,
                fnSetLanguage: l,
                fnGetTitle: P,
                fnSetTitle: g,
                fnGetDescription: E,
                fnSetDescription: x,
                fnOnPreviewEvent: C,
                fnApplyLoc: $,
              } = a,
              Y = (0, F.LJ)();
            let O = "";
            if (o.includes(j.TU.k_ESteamRealmChina)) {
              const m = P(u.ZLm).trim() !== "";
              O = (0, r.we)(
                m
                  ? "#BuildNotes_SteamChina_Provided"
                  : "#BuildNotes_SteamChina_NotProvided",
              );
            }
            const Q = () => {
              const m = new ie.G(),
                Z = (0, r.we)("#BuildNotes_SampleTitle"),
                X = (0, r.we)("#BuildNotes_SampleDescription");
              for (let M = u.Bhc; M < u.bP9; M++)
                m.SetLocalization("Title", M, Z),
                  m.SetLocalization("Description", M, X);
              (0, f.pg)(
                (0, e.jsx)(D.zZ, {
                  sampleLocData: m,
                  sampleFilename: "patchnote_loc_sample",
                  fnOnImportLocData: $,
                }),
                window,
              );
            };
            return (0, e.jsxs)("div", {
              className: s.RightPanel,
              children: [
                (0, e.jsxs)("div", {
                  className: s.EditTopBar,
                  children: [
                    (0, e.jsx)("div", {
                      className: s.EditTitle,
                      children: (0, r.we)("#BuildNotes_PatchnotesTitle"),
                    }),
                    (0, e.jsxs)("div", {
                      className: s.LangPicker,
                      children: [
                        (0, e.jsx)(v.$n, {
                          onClick: Q,
                          children: (0, r.we)("#BuildNotes_ImportLocalization"),
                        }),
                        (0, e.jsx)(A.Ng, {
                          selectedLang: n,
                          fnOnLanguageChanged: l,
                          fnLangHasData: B,
                          realms: o,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)(v.pd, {
                  value: P(n),
                  placeholder: (0, r.we)("#BuildNotes_TitlePlaceholder"),
                  onChange: (m) => g(n, m.currentTarget.value),
                  maxLength: _.dm,
                }),
                (0, e.jsx)("div", {
                  className: s.EditTitle,
                  children: (0, r.we)("#BuildNotes_PatchnotesDesc"),
                }),
                (0, e.jsx)(H.I, {
                  fnGetCurText: () => E(n),
                  fnOnTextChange: (m) => x(n, m.currentTarget.value),
                  fnSetText: (m) => x(n, m),
                  strPlaceholder: (0, r.we)("#BuildNotes_DescPlaceholder"),
                  emoticonStore: Y,
                  bSupportHTMLImport: !0,
                  showFormatHelp: "PartnerEvents",
                  classNameForTextArea: s.BBCodeEditor,
                }),
                (0, e.jsxs)("div", {
                  className: s.SubmitButtonCtn,
                  children: [
                    !i &&
                      (0, e.jsx)(v.jn, {
                        onClick: C,
                        children: (0, r.we)("#BuildNotes_Preview"),
                      }),
                    !!i &&
                      (0, e.jsx)("div", { className: s.ErrorMsg, children: i }),
                    !!(!i && O) &&
                      (0, e.jsx)("div", {
                        className: s.SteamChinaMsg,
                        children: O,
                      }),
                  ],
                }),
              ],
            });
          },
          he = (a) => {
            const {
              event: i,
              eLanguage: n,
              realms: o,
              fnOnClose: B,
              fnOnSubmitEvent: l,
              fnHasLanguage: P,
              fnSetLanguage: g,
            } = a;
            return (0, e.jsxs)(J.of, {
              children: [
                (0, e.jsxs)("div", {
                  className: s.PreviewHeader,
                  children: [
                    (0, e.jsx)(A.Ng, {
                      selectedLang: n,
                      fnOnLanguageChanged: g,
                      fnFilterLanguage: P,
                      realms: o,
                    }),
                    (0, e.jsxs)("div", {
                      className: s.SubmitButtonCtn,
                      children: [
                        (0, e.jsx)(v.$n, {
                          onClick: B,
                          children: (0, r.we)("#BuildNotes_Close"),
                        }),
                        (0, e.jsx)(v.jn, {
                          onClick: l,
                          children: (0, r.we)("#BuildNotes_PostNotes"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  children: (0, e.jsx)(z.H, {
                    event: i,
                    fnClose: B,
                    langOverride: n,
                    isPreview: !0,
                  }),
                }),
              ],
            });
          },
          ge = (a) =>
            (0, e.jsxs)("div", {
              className: (0, L.A)(s.RightPanel, s.SubmitPanel),
              children: [
                (0, e.jsx)(d.t, { className: s.SubmitThrobber }),
                (0, e.jsx)("div", {
                  className: s.SubmitText,
                  children: (0, r.we)("#BuildNotes_Submitting"),
                }),
              ],
            }),
          me = (a) =>
            (0, e.jsxs)("div", {
              className: (0, L.A)(s.RightPanel, s.FailedPanel),
              children: [
                (0, e.jsx)("div", {
                  className: s.FailedText,
                  children: (0, r.we)("#BuildNotes_FailedDescription"),
                }),
                (0, e.jsx)("div", {
                  className: s.FailedButton,
                  children: (0, e.jsx)(v.$n, {
                    onClick: a.fnOnReturnToEditor,
                    children: (0, r.we)("#BuildNotes_ReturnToEditor"),
                  }),
                }),
              ],
            }),
          _e = (a) => {
            const { appId: i, eventGid: n } = a,
              o = `${N.TS.STORE_BASE_URL}news/app/${i}/view/${n}`;
            return (0, e.jsxs)("div", {
              className: (0, L.A)(s.RightPanel, s.SuccessPanel),
              children: [
                (0, e.jsx)("div", {
                  className: s.SuccessText,
                  children: (0, r.we)("#BuildNotes_Success"),
                }),
                (0, e.jsx)("a", {
                  href: o,
                  className: s.ViewEventButton,
                  children: (0, e.jsx)(v.$n, {
                    children: (0, r.we)("#BuildNotes_ViewPublished"),
                  }),
                }),
              ],
            });
          };
      },
      24981: (W, R, t) => {
        "use strict";
        t.r(R), t.d(R, { SaleRoutes: () => D, default: () => J });
        var e = t(7850),
          K = t(90783),
          U = t(58732),
          S = t(17083),
          u = t(92757),
          w = t(26485),
          j = t(3166);
        class _ {
          static s_PageStore;
          m_mapSalePage = new Map();
          m_rgUnmigratedSalesPage = new Array();
          GetUnmigratedSalesPages() {
            return this.m_rgUnmigratedSalesPage;
          }
          GetAllSalePages() {
            return Array.from(this.m_mapSalePage.values());
          }
          GetPageByID(d) {
            return this.m_mapSalePage.get(d);
          }
          static Get() {
            return (
              _.s_PageStore ||
                ((_.s_PageStore = new _()), _.s_PageStore.Init()),
              _.s_PageStore
            );
          }
          Init() {
            let d = (0, j.Tc)("old_sale_pages", "application_config");
            this.ValidateStoreDefault(d) &&
              d.forEach((c) => {
                this.m_mapSalePage.set(c.pageid, c),
                  c.migrated_clan_account_id ||
                    this.m_rgUnmigratedSalesPage.push(c);
              });
          }
          ValidateStoreDefault(d) {
            const c = d;
            return c &&
              Array.isArray(c) &&
              c.length > 0 &&
              typeof c[0] == "object"
              ? typeof c[0].pageid == "string"
              : !1;
          }
        }
        var y = t(72429),
          F = t(85599),
          H = t(76149);
        function v(f) {
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("h2", { children: "Unmigrated Sales Pages" }),
              (0, e.jsx)("hr", {}),
              _.Get()
                .GetUnmigratedSalesPages()
                .map((d) => (0, e.jsx)(V, { pageid: d.pageid }, d.pageid)),
            ],
          });
        }
        function V(f) {
          let d = _.Get().GetPageByID(f.pageid);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { children: d.pageid }),
              (0, e.jsx)(S.N_, {
                to: D.SaleMigrationPageDebug(d.pageid),
                children: "Debug Data",
              }),
            ],
          });
        }
        function z(f) {
          const { pageid: d } = f,
            c = _.Get().GetPageByID(d),
            L = (0, H.gS)(c.accountid);
          return L
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(S.N_, {
                    to: D.SaleMigrationTool(),
                    children: "< Return to Migration Toolset",
                  }),
                  (0, e.jsxs)("h2", { children: ["Debug: ", f.pageid] }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsxs)("div", { children: ["Name: ", c.display_name] }),
                  (0, e.jsxs)("div", {
                    children: ["Creator: ", c.accountid, " - ", L.persona],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      "Last Modified: ",
                      c.last_modified,
                      c.last_modified != 0 &&
                        (0, e.jsx)(y.K4, {
                          dateAndTime: c.last_modified,
                          bSingleLine: !0,
                        }),
                    ],
                  }),
                  (0, e.jsx)("h1", { children: "Sale Page Body Raw" }),
                  (0, e.jsx)(w.G, { data: c }),
                ],
              })
            : (0, e.jsx)(F.t, { string: "Loading User Info" });
        }
        var A = t(20634);
        const D = {
          SaleDashboardView: () => "/(dashboard)?/",
          SaleMigrationTool: () => "/migration/",
          SaleMigrationPageDebug: (f) => `/migration/debug/${f}/`,
        };
        function J(f) {
          return (0, e.jsx)(S.Kd, {
            basename: (0, U.C)() + "sales/",
            children: (0, e.jsxs)(u.dO, {
              children: [
                (0, e.jsx)(u.qh, {
                  exact: !0,
                  path: U.B.DiagData(),
                  render: (d) =>
                    (0, e.jsx)(w.z, {
                      ...d,
                      strConfigID: "application_config",
                    }),
                }),
                (0, e.jsx)(u.qh, {
                  exact: !0,
                  path: D.SaleDashboardView(),
                  component: A.h,
                }),
                (0, e.jsx)(u.qh, {
                  exact: !0,
                  path: D.SaleMigrationTool(),
                  component: v,
                }),
                (0, e.jsx)(u.qh, {
                  exact: !0,
                  path: D.SaleMigrationPageDebug(":pageid"),
                  render: (d) =>
                    (0, e.jsx)(z, { pageid: d.match.params.pageid }),
                }),
                (0, e.jsx)(u.qh, { component: K.a }),
              ],
            }),
          });
        }
      },
      58962: (W) => {
        W.exports = {
          BuildNoteCtn: "cZP-58cHflQCLG6CHvwKG",
          SplitPanel: "_2TINcVLR2kmBWAVOOtG0cF",
          DescriptionPanel: "_2N1THxFjyQb75AY6b7SpZX",
          RightPanel: "EN_YgGmWh95hbxn-2pmD5",
          BuildTitle: "_-2I9CETSXyA66SWcV5iEv",
          BuildSubTitle: "_2lG_bxKnQtJIUYWD19KGoy",
          InfoText: "_3-WB4tkYQI0EftRXikEI4t",
          EditTopBar: "bJHHP4182a1PZlP-rurGN",
          LangPicker: "_1P7AcuhlijPijxLhFPngFp",
          EditTitle: "_2o-fIjMrt8xP5BFnQuwu_p",
          SubmitButtonCtn: "Vj8rXBuNz4JT-2Y8QgK36",
          BBCodeEditor: "_2gIbttbPBWi6pXxhPzfmD5",
          ErrorMsg: "_2yUUHPTbyDbnoX2gCflGh-",
          SteamChinaMsg: "_3EFpCoez_gInT6uBoW-MLR",
          PreviewHeader: "_3GODeMU9hr5NrqreP7TL3E",
          SubmitPanel: "_2WB1wNg29mL3fTTeWX9HJU",
          SubmitThrobber: "_2rWSmSZSQLbv7D2bBBc6PO",
          SuccessPanel: "_3jQwVKtYzS0V9pBPwJTUW6",
          ViewEventButton: "_3zUBg8T8MJnKb-eS1s3sK6",
          FailedPanel: "_1H8COg73O0FBzdyTrSg2pu",
          FailedText: "pu4VYcHm6vt6RCeDA73L0",
          FailedButton: "soZLp0uToUv-yRJFwckG9",
        };
      },
    },
  ]);
})();
