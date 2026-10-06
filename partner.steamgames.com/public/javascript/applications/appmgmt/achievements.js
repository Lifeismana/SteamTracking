/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [99539],
    {
      30541: (pe, me, n) => {
        "use strict";
        n.a(
          pe,
          async (d, Q) => {
            try {
              n.d(me, {
                A$I: () => L.A$I,
                Ikc: () => L.Ikc,
                Whr: () => L.Whr,
                YOg: () => L.YOg,
                YjP: () => L.YjP,
                ZSL: () => L.ZSL,
                aig: () => L.aig,
                auy: () => L.auy,
                euz: () => L.euz,
                k5n: () => L.k5n,
                rLB: () => L.rLB,
                uEf: () => L.uEf,
              });
              var e = n(18210),
                q = n(10410),
                m = n(62617),
                L = n(68980);
              const A = {
                "es-419": "es",
                "pt-br": "pt",
                "zh-cn": "zhCN",
                "zh-tw": "zhTW",
              };
              async function N() {
                const _ = (0, e.l4)(),
                  R = _ in A ? A[_] : _,
                  I = q[R];
                m.$W(I());
              }
              await N(), Q();
            } catch (A) {
              Q(A);
            }
          },
          1,
        );
      },
      3959: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let y = function (l) {
                return `${l.statID}.${l.bitID}`;
              },
              O = function (l) {
                return l[1].type === "ACHIEVEMENTS";
              },
              p = function (l) {
                return l[1].type !== "ACHIEVEMENTS";
              },
              C = function () {
                return (0, R.useContext)(r);
              },
              ve = function (l, x = !1) {
                return (0, q.I)({
                  queryKey: [U, E, l, x],
                  queryFn: async () => {
                    let P = x ? { version: "live" } : {};
                    const b = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetstatsschema/${l}`,
                      ie = await N().get(b, { params: P, withCredentials: !0 });
                    if (ie?.data?.success == e.R) return ie.data;
                    throw new Error(
                      `failed to load ${x ? "live" : "draft"} stat schema for app id ${l}`,
                    );
                  },
                });
              },
              M = function (l, x = !1) {
                const P = ve(l, x);
                return P.isLoading ? null : P.data?.schema;
              },
              ce = function (l) {
                const x = ve(l);
                return x.isLoading ? void 0 : x.data?.limits;
              },
              ye = function (l) {
                const x = de(l);
                return Object.keys(x ?? {}).length + 1;
              },
              T = function (l) {
                const x = ce(l),
                  P = ye(l);
                return !x || P < x.max_groups;
              },
              de = function (l, x = !1) {
                return M(l, x)?.groups;
              },
              ae = function (l, x, P = !1) {
                return de(l, P)?.[x];
              },
              le = function (l) {
                const x = de(l);
                return x
                  ? Object.keys(x)
                      .map((b) => ({
                        groupid: b,
                        sortid: v.auy.number().default(0).parse(x[b].order),
                        ...x[b],
                      }))
                      .sort((b, ie) => b.sortid - ie.sortid)
                      .map((b) => b)
                  : [];
              },
              re = function (l, x = !1) {
                const P = M(l, x);
                return P?.stats
                  ? Object.entries(P.stats)
                      .filter(p)
                      .map(([b, ie]) => ({ ...ie, statID: b }))
                  : void 0;
              },
              g = function (l, x = !1) {
                const P = M(l, x);
                return P?.stats
                  ? Object.entries(P.stats)
                      .filter(O)
                      .flatMap(([b, ie]) =>
                        Object.entries(ie.bits).map(([xe, Ye]) => ({
                          ...Ye,
                          statID: b,
                          bitID: xe,
                        })),
                      )
                  : void 0;
              },
              H = function (l, x, P = !1) {
                const b = M(l, P);
                return b?.stats
                  ? Object.entries(b.stats)
                      .filter(O)
                      .flatMap(([ie, xe]) =>
                        Object.entries(xe.bits)
                          .filter(
                            ([Ye, Ne]) =>
                              (!x && !Ne.groupid) || x === Ne.groupid,
                          )
                          .map(([Ye, Ne]) => ({
                            ...Ne,
                            statID: ie,
                            bitID: Ye,
                          })),
                      )
                  : void 0;
              },
              se = function (l) {
                const x = (0, q.I)({
                  queryKey: [U, $, l],
                  queryFn: async () => {
                    const P = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetlanguagelist/${l}`,
                      b = await N().get(P, { withCredentials: !0 });
                    if (b?.data?.success == e.R)
                      return b.data.languages.sort((ie, xe) =>
                        ie.localeCompare(xe),
                      );
                    throw new Error(
                      `failed to load language list for app id ${l}`,
                    );
                  },
                });
                return x.isLoading ? ["english"] : x.data;
              },
              Z = function (l) {
                const x = (0, m.jE)();
                return (0, L.n)({
                  mutationFn: async (b) => await W(l, b),
                  onSuccess: async () => {
                    await x.invalidateQueries({ queryKey: [U, $, l] });
                  },
                });
              },
              fe = function (l) {
                const x = (0, q.I)({
                  queryKey: [U, B, l],
                  queryFn: async () => {
                    const P = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetlanguageoptionslist/${l}`,
                      b = await N().get(P, { withCredentials: !0 });
                    if (b?.data?.success == e.R)
                      return b.data.languages.sort((ie, xe) =>
                        ie.localeCompare(xe),
                      );
                    throw new Error(
                      `failed to load language options list for app id ${l}`,
                    );
                  },
                });
                return x.isLoading ? ["english"] : x.data;
              },
              K = function (l) {
                const x = f(l);
                return x.isLoading ? [] : x.data;
              },
              f = function (l) {
                return (0, q.I)({
                  queryKey: [U, ue, l],
                  queryFn: async () => {
                    const x = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetdlc/${l}`,
                      P = await N().get(x, { withCredentials: !0 });
                    if (P?.data?.success == e.R) return P.data.dlc;
                    throw new Error(`failed to load dlc for app id ${l}`);
                  },
                });
              },
              G = function (l) {
                const x = (0, q.I)({
                  queryKey: [U, Y, l],
                  queryFn: async () => {
                    const P = `${a.TS.PARTNER_BASE_URL}achievements/ajaxgetappinfo/${l}`,
                      b = await N().get(P, { withCredentials: !0 });
                    if (b?.data?.success == e.R) return b.data.app;
                    if (b?.data?.success == e.Qo)
                      return {
                        appid: l.toString(),
                        type: "Game",
                        releasestate: "unavailable",
                        name: "",
                        is_public: !1,
                        is_released_somewhere: !1,
                        image: "",
                      };
                    throw new Error(`failed to load app info for app id ${l}`);
                  },
                });
                return x.isLoading ? null : x.data;
              },
              i = function (l, x) {
                const { strErrorMsg: P, errorCode: b } = (0, I.H)(x);
                console.error(`${l} failed: `, b, P, x);
                const ie = x,
                  xe = ie?.response?.data?.error ?? ie?.data?.error;
                return b == e.TE && xe
                  ? new Error(xe)
                  : b == e.VB
                    ? new Error(
                        (0, V.we)(
                          "#AchievementEditor_Achievement_Edit_ApiName_Error_Duplicate",
                        ),
                      )
                    : new Error(
                        (0, V.we)("#AchievementEditor_Error_RequestFailed"),
                      );
              },
              k = function (l, x) {
                const P = (0, m.jE)();
                return (0, L.n)({
                  mutationFn: async (ie) => await F(l, x, ie),
                  onSuccess: async () => {
                    await P.invalidateQueries({ queryKey: [U, E, l, !1] });
                  },
                });
              },
              X = function (l) {
                const x = (0, m.jE)();
                return (0, L.n)({
                  mutationFn: async (b) => {
                    for (const ie of b) await F(l, ie.groupid, ie.group);
                    return !0;
                  },
                  onSuccess: async () => {
                    await x.invalidateQueries({ queryKey: [U, E, l, !1] });
                  },
                });
              },
              te = function (l, x) {
                const P = (0, m.jE)();
                return (0, L.n)({
                  mutationFn: async () => {
                    const ie = `${a.TS.PARTNER_BASE_URL}achievements/ajaxdeletegroup/${l}`,
                      xe = new FormData();
                    return (
                      xe.append("appid", l.toString()),
                      xe.append("groupid", x),
                      await t("deleteStatGroup", ie, xe),
                      !0
                    );
                  },
                  onSuccess: async () => {
                    await P.invalidateQueries({ queryKey: [U, E, l, !1] });
                  },
                });
              },
              ge = function (l) {
                const x = de(l),
                  P = (0, m.jE)();
                return (0, L.n)({
                  mutationFn: async (ie) => await oe(l, ie),
                  onSuccess: async () => {
                    await P.invalidateQueries({ queryKey: [U, E, l, !1] });
                  },
                });
              },
              u = function (l) {
                const x = (0, m.jE)();
                return (0, L.n)({
                  mutationFn: async (b) => {
                    const { groupid: ie, api_names: xe } = b;
                    return await he(l, ie, xe);
                  },
                  onSuccess: async () => {
                    await x.invalidateQueries({ queryKey: [U, E, l, !1] });
                  },
                });
              },
              S = function (l, x, P) {
                const b = (0, m.jE)();
                return (0, L.n)({
                  mutationFn: async (xe) =>
                    await h(l, { statID: x, bitID: P, ...xe }),
                  onSuccess: async () => {
                    await b.invalidateQueries({ queryKey: [U, E, l, !1] });
                  },
                });
              },
              D = function (l, x, P) {
                const b = (0, m.jE)();
                return (0, L.n)({
                  mutationFn: async () => await w(l, { statID: x, bitID: P }),
                  onSuccess: async () => {
                    await b.invalidateQueries({ queryKey: [U, E, l, !1] });
                  },
                });
              },
              ne = function (l) {
                const x = (0, m.jE)();
                return (0, L.n)({
                  mutationFn: async (b) => {
                    for (const ie of b.addOrUpdate ?? []) await h(l, ie);
                    for (const ie of b.delete ?? []) await w(l, ie);
                    return !0;
                  },
                  onSuccess: async () => {
                    await x.invalidateQueries({ queryKey: [U, E, l, !1] });
                  },
                });
              };
            n.d(me, {
              $j: () => ae,
              Bx: () => D,
              Er: () => X,
              F0: () => te,
              FK: () => H,
              FM: () => le,
              GV: () => ye,
              J3: () => re,
              JI: () => T,
              L3: () => C,
              Q4: () => de,
              Rz: () => ce,
              SN: () => ne,
              Wu: () => f,
              Xe: () => G,
              aR: () => r,
              iF: () => ge,
              kb: () => g,
              kk: () => Z,
              l7: () => J,
              mb: () => k,
              nf: () => y,
              q4: () => S,
              sJ: () => K,
              ts: () => se,
              vd: () => fe,
              yu: () => ee,
              zG: () => u,
            });
            var e = n(72604),
              q = n(20194),
              m = n(75233),
              L = n(51614),
              A = n(41735),
              N = n.n(A),
              _ = n(74761),
              R = n(90626),
              I = n(34592),
              V = n(18210),
              a = n(3166),
              v = n(30541),
              c = d([v]);
            v = (c.then ? (await c)() : c)[0];
            var ee = ((l) => (
              (l[(l.Client = 0)] = "Client"),
              (l[(l.GameServer = 1)] = "GameServer"),
              (l[(l.OfficialGameServer = 2)] = "OfficialGameServer"),
              l
            ))(ee || {});
            const J = ["Client", "GameServer", "OfficialGameServer"],
              r = (0, R.createContext)(null),
              U = "Stats",
              E = "StatSchema",
              $ = "AppLanguageList";
            async function W(l, x) {
              const P = `${a.TS.PARTNER_BASE_URL}achievements/ajaxsetlanguagelist/${l}`,
                b = new FormData();
              return (
                b.append("languages", JSON.stringify(x)),
                await t("updateLanguageList", P, b),
                !0
              );
            }
            const B = "AppLanguageOptionsList",
              ue = "AppDLCList",
              Y = "AppInfo";
            async function t(l, x, P) {
              let b;
              try {
                b = await N().post(x, P, { withCredentials: !0 });
              } catch (ie) {
                throw i(l, ie);
              }
              if (b?.data?.success != e.R) throw i(l, b);
              return b.data;
            }
            const j = "StatGroupMutator";
            async function F(l, x, P) {
              const b = `${a.TS.PARTNER_BASE_URL}achievements/ajaxcreateorupdategroup/${l}`,
                ie = new FormData();
              return (
                ie.append("groupid", x),
                ie.append("name", JSON.stringify(P.name)),
                P.dlcappid && ie.append("requiredappid", P.dlcappid),
                ie.append("isarchived", P.archived == "1" ? "true" : "false"),
                ie.append(
                  "isdeveloperonly",
                  P.developeronly == "1" ? "true" : "false",
                ),
                ie.append("order", P.order ?? "-1"),
                (await t("addOrUpdateStatGroup", b, ie)).groupid
              );
            }
            async function oe(l, x) {
              const P = new FormData();
              P.append("appid", l.toString()),
                P.append("groupids", JSON.stringify(x));
              const b = `${a.TS.PARTNER_BASE_URL}achievements/ajaxreordergroups/${l}`;
              return await t("reorderGroups", b, P), !0;
            }
            async function he(l, x, P) {
              const b = new FormData();
              b.append("appid", l.toString()),
                b.append("groupid", (x ?? 0).toString()),
                b.append("names", JSON.stringify(P));
              const ie = `${a.TS.PARTNER_BASE_URL}achievements/ajaxmoveachievements/${l}`;
              return await t("moveAchievementsGroup", ie, b), !0;
            }
            var z = ((l) => (
              (l.Achieved = "achievement"),
              (l.Unachieved = "achievement_gray"),
              l
            ))(z || {});
            async function o(l, x, P, b, ie) {
              const [xe, Ye, Ne] = ie.match(/data:(image\/\w+);base64,(.*)/),
                Fe = _.hp.from(Ne, "base64"),
                we = Ye === "image/png" ? "png" : "jpg",
                Se = `${l.toString()}_${x}_${P}_${b == "achievement" ? "a" : "g"}.${we}`,
                Ve = new File([Fe], Se, { type: Ye }),
                He = new FormData();
              He.append("appID", l.toString()),
                He.append("statID", x),
                He.append("bit", P),
                He.append("requestType", b.toString()),
                He.append("image", Ve);
              const Je = `${a.TS.PARTNER_BASE_URL}images/uploadachievement`;
              await t("AchievementImageUpload", Je, He);
            }
            async function s(l, x, P, b, ie) {
              b &&
                b.startsWith("data:") &&
                (await o(l, x, P, "achievement", b)),
                ie &&
                  ie.startsWith("data:") &&
                  (await o(l, x, P, "achievement_gray", ie));
            }
            async function h(l, x) {
              const {
                statID: P,
                bitID: b,
                achievement: ie,
                icon: xe,
                icon_gray: Ye,
              } = x;
              if (!ie && P && b)
                return (
                  await s(l, P, b, xe, Ye),
                  { success: e.R, statid: P, bitid: b }
                );
              const Ne = new FormData();
              P && Ne.append("statid", P),
                b && Ne.append("bitid", b),
                ie.groupid && Ne.append("groupid", ie.groupid),
                Ne.append("name", ie.name),
                ie.progress &&
                  (Ne.append("progressstat", ie.progress.value.operand1),
                  Ne.append("progressmin", ie.progress.min_val),
                  Ne.append("progressmax", ie.progress.max_val)),
                ie.permission && Ne.append("setby", ie.permission.toString()),
                ie.archived == "1" && Ne.append("isarchived", "true"),
                ie.display &&
                  (ie.display.hidden == "1" && Ne.append("hidden", "true"),
                  ie.display.name &&
                    Ne.append("displayname", JSON.stringify(ie.display.name)),
                  ie.display.desc &&
                    Ne.append("displaydesc", JSON.stringify(ie.display.desc)));
              const Fe = `${a.TS.PARTNER_BASE_URL}achievements/ajaxcreateorupdateachievement/${l}`,
                we = await t("addOrUpdateAchievement", Fe, Ne);
              return await s(l, we.statid, we.bitid, xe, Ye), we;
            }
            async function w(l, x) {
              const { statID: P, bitID: b } = x,
                ie = `${a.TS.PARTNER_BASE_URL}achievements/ajaxdeleteachievement/${l}`,
                xe = new FormData();
              return (
                xe.append("appid", l.toString()),
                xe.append("statid", P),
                xe.append("bitid", b),
                await t("deleteAchievement", ie, xe),
                !0
              );
            }
            Q();
          } catch (J) {
            Q(J);
          }
        });
      },
      45037: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let ce = function (o, s, h, S, w) {
                return (S && o in S) || (h && o in h && le(s[o], h[o], w));
              },
              ye = function () {
                const {
                    generateUnachievedImages: o,
                    setGenerateUnachievedImages: s,
                  } = (0, O.Mt)(),
                  { appID: h } = (0, _.L3)(),
                  S = (0, _.kb)(h),
                  w = (0, _.FM)(h),
                  D = (0, _.ts)(h),
                  [ne, l] = (0, R.useState)(!1),
                  x = "dull-7",
                  P = "blue-8";
                return (0, e.jsxs)(q.s, {
                  direction: "column",
                  gap: "3",
                  children: [
                    (0, e.jsxs)(q.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      marginTop: "3",
                      background: x,
                      children: [
                        (0, e.jsx)(m.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, v.we)(
                            "#AchievementEditor_Bulk_Definitions_Title",
                          ),
                        }),
                        (0, e.jsx)(m.EY, {
                          contrast: "description",
                          children: (0, v.we)(
                            "#AchievementEditor_Bulk_Definitions_Description",
                          ),
                        }),
                        (0, e.jsxs)(q.s, {
                          direction: "row",
                          align: "center",
                          gap: "2",
                          marginTop: "2",
                          marginBottom: "2",
                          children: [
                            (0, e.jsxs)(L.$, {
                              color: "dull",
                              onClick: () => {
                                (0, z.le)(h, S);
                              },
                              children: [
                                (0, e.jsx)(F, {}),
                                "\xA0",
                                (0, v.we)(
                                  "#AchievementEditor_Bulk_Export_Definitions",
                                ),
                              ],
                            }),
                            (0, e.jsxs)(m.EY, {
                              color: P,
                              children: [
                                "(",
                                (0, v.we)(
                                  "#AchievementEditor_Bulk_N_Achievements",
                                  S.length,
                                ),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)(q.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      background: x,
                      children: [
                        (0, e.jsx)(m.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, v.we)(
                            "#AchievementEditor_Bulk_Localization_Title",
                          ),
                        }),
                        (0, e.jsx)(m.EY, {
                          contrast: "description",
                          children: (0, v.we)(
                            "#AchievementEditor_Bulk_Localization_Description",
                          ),
                        }),
                        (0, e.jsxs)(q.s, {
                          direction: "row",
                          align: "center",
                          gap: "3",
                          marginTop: "2",
                          marginBottom: "2",
                          children: [
                            (0, e.jsxs)(q.s, {
                              direction: "row",
                              align: "center",
                              gap: "2",
                              children: [
                                (0, e.jsxs)(L.$, {
                                  color: "dull",
                                  onClick: () => {
                                    l(!0);
                                  },
                                  children: [
                                    (0, e.jsx)(k, {}),
                                    "\xA0",
                                    (0, v.we)(
                                      "#AchievementEditor_Bulk_Localization_Languages_Button",
                                    ),
                                  ],
                                }),
                                (0, e.jsxs)(m.EY, {
                                  color: P,
                                  children: [
                                    "(",
                                    (0, v.we)(
                                      "#AchievementEditor_Bulk_N_Languages",
                                      D.length,
                                    ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            (0, e.jsxs)(q.s, {
                              direction: "row",
                              align: "center",
                              gap: "2",
                              children: [
                                (0, e.jsxs)(L.$, {
                                  color: "dull",
                                  onClick: () => {
                                    (0, z.CD)(h, S, D);
                                  },
                                  children: [
                                    (0, e.jsx)(F, {}),
                                    "\xA0",
                                    (0, v.we)(
                                      "#AchievementEditor_Bulk_Export_Localization",
                                    ),
                                  ],
                                }),
                                (0, e.jsxs)(m.EY, {
                                  color: P,
                                  children: [
                                    "(",
                                    (0, v.we)(
                                      "#AchievementEditor_Bulk_N_Achievements",
                                      S.length,
                                    ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(m.EY, {
                          contrast: "description",
                          children: (0, v.oW)(
                            "#AchievementEditor_Bulk_Localization_Tip",
                            (0, e.jsx)(m.EY, { contrast: "subtitle" }),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)(q.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      background: x,
                      children: [
                        (0, e.jsx)(m.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, v.we)(
                            "#AchievementEditor_Bulk_GroupLocalization_Title",
                          ),
                        }),
                        (0, e.jsx)(m.EY, {
                          contrast: "description",
                          children: (0, v.we)(
                            "#AchievementEditor_Bulk_GroupLocalization_Description",
                          ),
                        }),
                        (0, e.jsxs)(q.s, {
                          direction: "row",
                          align: "center",
                          gap: "2",
                          marginTop: "2",
                          marginBottom: "2",
                          children: [
                            (0, e.jsxs)(L.$, {
                              color: "dull",
                              onClick: () => {
                                (0, z.jF)(h, w, D);
                              },
                              children: [
                                (0, e.jsx)(F, {}),
                                "\xA0",
                                (0, v.we)(
                                  "#AchievementEditor_Bulk_Export_GroupLocalization",
                                ),
                              ],
                            }),
                            (0, e.jsxs)(m.EY, {
                              color: P,
                              children: [
                                "(",
                                (0, v.we)(
                                  "#AchievementEditor_Bulk_N_Groups",
                                  w.length,
                                ),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)(q.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      background: x,
                      children: [
                        (0, e.jsx)(m.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, v.we)(
                            "#AchievementEditor_Bulk_Icons_Title",
                          ),
                        }),
                        (0, e.jsx)(m.EY, {
                          contrast: "description",
                          children: (0, v.we)(
                            "#AchievementEditor_Bulk_Icons_Description",
                          ),
                        }),
                        (0, e.jsx)(q.s, {
                          direction: "row",
                          align: "center",
                          gap: "3",
                          marginTop: "2",
                          marginBottom: "2",
                          children: (0, e.jsx)(A.S, {
                            checked: o,
                            onChange: (b) => s(b),
                            children: (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, v.we)(
                                  "#AchievementEditor_Bulk_Options_GenerateIcons",
                                ),
                                (0, e.jsx)("span", {
                                  children: (0, v.we)(
                                    "#AchievementEditor_Bulk_Options_GenerateIcons_Description",
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    ne && (0, e.jsx)(y.Jt, { onClose: () => l(!1) }),
                  ],
                });
              },
              T = function (o) {
                const { onClose: s, setHasChanges: h } = o;
                return (0, e.jsx)(O.FU, {
                  onClose: s,
                  setHasChanges: h,
                  children: (0, e.jsx)(ae, {}),
                });
              },
              de = function (o) {
                const { title: s, description: h, children: S } = o;
                return (0, e.jsxs)("div", {
                  className: c.BulkEditSection,
                  children: [
                    (0, e.jsx)("h2", { children: s }),
                    (0, e.jsx)("p", { children: h }),
                    S,
                  ],
                });
              },
              ae = function () {
                const {
                    files: o,
                    hasData: s,
                    acceptedTypes: h,
                    fileInputRef: S,
                    uploadFiles: w,
                    openFilePicker: D,
                    save: ne,
                    isSaving: l,
                    saveError: x,
                    saveSucceeded: P,
                    onClose: b,
                  } = (0, O.Mt)(),
                  [ie, xe] = (0, R.useState)(void 0);
                return (0, e.jsxs)("div", {
                  className: (0, a.A)(c.Takeover, c.BulkEdit),
                  children: [
                    P &&
                      (0, e.jsx)(p.TM, {
                        hideCancelButton: !0,
                        onOk: b,
                        children: (0, v.we)(
                          "#AchievementEditor_Bulk_Save_Confirm",
                        ),
                      }),
                    (0, e.jsx)(ye, {}),
                    (0, e.jsxs)("div", {
                      className: c.TakeoverBody,
                      children: [
                        (0, e.jsx)(r.z, {
                          className: c.BulkUploadFileDropBox,
                          accept: h,
                          multiple: !0,
                          fileInputRef: S,
                          onUpload: w,
                          onError: xe,
                          children: (0, e.jsx)("div", {
                            className: c.UploadPlaceholder,
                            children: (0, v.we)(
                              "#AchievementEditor_Bulk_UploadBox",
                            ),
                          }),
                        }),
                        !!ie && (0, e.jsx)(p.r3, { text: ie }),
                        (0, e.jsx)("div", {
                          className: c.ButtonContainer,
                          children: (0, e.jsx)(L.$, {
                            color: "dull",
                            onClick: D,
                            children: (0, v.we)(
                              "#AchievementEditor_Bulk_Upload_SelectFiles",
                            ),
                          }),
                        }),
                        o.length > 0 &&
                          (0, e.jsx)(de, {
                            title: (0, v.we)(
                              "#AchievementEditor_Bulk_Files_Title",
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_Bulk_Files_Description",
                            ),
                            children: (0, e.jsx)(Y, {}),
                          }),
                        s &&
                          (0, e.jsxs)(de, {
                            title: (0, v.we)(
                              "#AchievementEditor_Bulk_Pending_Title",
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_Bulk_Pending_Description",
                            ),
                            children: [
                              (0, e.jsx)(N.az, {
                                className: c.LanguageSelect,
                                background: "dull-7",
                                padding: "2",
                                children: (0, e.jsx)(y.Mq, {}),
                              }),
                              (0, e.jsx)($, {}),
                              (0, e.jsx)(g, {}),
                            ],
                          }),
                      ],
                    }),
                    s &&
                      (0, e.jsx)(p.Aj, {
                        pending: l,
                        error: x,
                        hideCancel: !0,
                        onSave: ne,
                      }),
                  ],
                });
              },
              le = function (o, s, h) {
                if (!o) return !0;
                const S = (l, x) => (l < x ? -1 : l > x ? 1 : 0),
                  w = (0, z.pC)(o, h).sort((l, x) => S(l.field, x.field)),
                  D = re(s, h).sort((l, x) => S(l.field, x.field));
                return !U()(w, D);
              },
              re = function (o, s) {
                const h = s.reduce((S, w) => ((S[w] = ""), S), {});
                return o.map((S) => ({ ...h, ...S }));
              },
              g = function () {
                const {
                    definitions: o,
                    localization: s,
                    images: h,
                    confirmDelete: S,
                    setConfirmDelete: w,
                  } = (0, O.Mt)(),
                  {
                    csv: D,
                    achievements: ne,
                    added: l,
                    modified: x,
                    unmodified: P,
                    deleted: b,
                  } = o,
                  { localization: ie } = s ?? {},
                  { appID: xe } = (0, _.L3)(),
                  Ye = (0, _.ts)(xe),
                  Ne = (Se) => ce(Se, ne, ie, h, Ye),
                  Fe = [...x, ...P.filter(Ne)],
                  we = P.filter((Se) => !Ne(Se));
                return (0, e.jsxs)("div", {
                  className: c.ResultsContainer,
                  children: [
                    (0, e.jsx)("h3", {
                      children: (0, v.we)(
                        "#AchievementEditor_Bulk_Pending_Achievements",
                      ),
                    }),
                    (0, e.jsx)(H, {}),
                    (0, e.jsxs)("div", {
                      className: c.ImportedAchievements,
                      children: [
                        l &&
                          !!l.length &&
                          (0, e.jsx)(Z, {
                            className: (0, a.A)(c.ChangeBorder, c.Added),
                            title: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Added_Title",
                              l.length,
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Added_Description",
                            ),
                            children: l.map((Se, Ve) =>
                              (0, e.jsx)(
                                ue,
                                {
                                  data: D[Se],
                                  localization: ie?.[Se],
                                  images: h?.[Se],
                                },
                                Ve,
                              ),
                            ),
                          }),
                        Fe &&
                          !!Fe.length &&
                          (0, e.jsx)(Z, {
                            className: (0, a.A)(c.ChangeBorder, c.Modified),
                            title: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Modified_Title",
                              Fe.length,
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Modified_Description",
                            ),
                            children: Fe.map((Se, Ve) =>
                              (0, e.jsx)(
                                ue,
                                {
                                  achievement: ne[Se],
                                  data: D?.[Se] || (0, z.oK)(ne[Se]),
                                  localization: ie?.[Se],
                                  images: h?.[Se],
                                },
                                Ve,
                              ),
                            ),
                          }),
                        b &&
                          !!b.length &&
                          (0, e.jsx)(Z, {
                            className: (0, a.A)(c.ChangeBorder, c.Deleted),
                            title: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Removed_Title",
                              b.length,
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Removed_Description",
                            ),
                            headerChildren: (0, e.jsx)(E.j, {
                              cursor: "pointer",
                              maxWidth: "max-content",
                              onClick: () => w(!S),
                              children: (0, e.jsx)(A.S, {
                                variant: "dark",
                                color: "red",
                                checked: S,
                                onChange: (Se) => w(Se),
                                children: (0, v.we)(
                                  "#AchievementEditor_AchievementCsvImport_Removed_Confirm",
                                ),
                              }),
                            }),
                            children: b.map((Se, Ve) =>
                              (0, e.jsx)(
                                ue,
                                {
                                  achievement: ne[Se],
                                  data: (0, z.oK)(ne[Se]),
                                  localization: ie?.[Se],
                                  images: h?.[Se],
                                },
                                Ve,
                              ),
                            ),
                          }),
                        we &&
                          !!we.length &&
                          (0, e.jsx)(B, {
                            title: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Unmodified_Title",
                              we.length,
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Unmodified_Description",
                            ),
                            children: we.map((Se, Ve) =>
                              (0, e.jsx)(
                                ue,
                                {
                                  achievement: ne[Se],
                                  data: (0, z.oK)(ne[Se]),
                                  localization: ie?.[Se],
                                  images: h?.[Se],
                                },
                                Ve,
                              ),
                            ),
                          }),
                      ],
                    }),
                  ],
                });
              },
              H = function () {
                return (0, e.jsxs)("div", {
                  className: c.LegendContainer,
                  children: [
                    (0, e.jsx)("div", { className: c.LegendChangeIcon }),
                    (0, e.jsx)("p", {
                      children: (0, v.we)(
                        "#AchievementEditor_AchievementCsvImport_Pending_Legend",
                      ),
                    }),
                  ],
                });
              },
              $ = function () {
                const { groupLocalization: o } = (0, O.Mt)(),
                  { currentLanguage: s } = (0, _.L3)().localization,
                  { csv: h, groups: S, modified: w, unmodified: D } = o ?? {};
                if (!h) return null;
                const ne = (l) =>
                  (0, e.jsxs)("div", {
                    className: c.ImportedGroups,
                    children: [
                      (0, e.jsxs)("div", {
                        className: c.TableHeader,
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, v.we)(
                              "#AchievementEditor_GroupCsvImport_Header_GroupID",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, v.we)(
                              "#AchievementEditor_Group_Field_Name",
                            ),
                          }),
                        ],
                      }),
                      l.map((x) => {
                        const P = (0, z.NJ)(h[x], S[x]),
                          b = (0, y.ZM)(S[x]?.name, s) != (0, y.ZM)(P, s);
                        return (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              (0, e.jsx)("div", { children: x }),
                              (0, e.jsx)("div", {
                                className: (0, a.A)(b && c.ModifiedField),
                                children: (0, e.jsx)(y.VU, { text: P }),
                              }),
                            ],
                          },
                          x,
                        );
                      }),
                    ],
                  });
                return (0, e.jsxs)("div", {
                  className: c.ResultsContainer,
                  children: [
                    (0, e.jsx)("h3", {
                      children: (0, v.we)(
                        "#AchievementEditor_Bulk_Pending_Groups",
                      ),
                    }),
                    (0, e.jsx)(H, {}),
                    (0, e.jsxs)(q.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        !!w?.length &&
                          (0, e.jsx)(f, {
                            className: (0, a.A)(c.ChangeBorder, c.Modified),
                            title: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Modified_Title",
                              w.length,
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_GroupCsvImport_Modified_Description",
                            ),
                            children: ne(w),
                          }),
                        !!D?.length &&
                          (0, e.jsx)(f, {
                            collapsible: !0,
                            title: (0, v.we)(
                              "#AchievementEditor_AchievementCsvImport_Unmodified_Title",
                              D.length,
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_GroupCsvImport_Unmodified_Description",
                            ),
                            children: ne(D),
                          }),
                      ],
                    }),
                  ],
                });
              },
              se = function (o) {
                const { title: s, description: h, headerChildren: S } = o;
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(m.EY, {
                      size: "4",
                      contrast: "title",
                      children: s,
                    }),
                    (0, e.jsx)(m.EY, { children: h }),
                    S,
                  ],
                });
              },
              W = function (o) {
                const { className: s, children: h } = o;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(c.ImportedAchievementsTableContainer, s),
                  children: h,
                });
              },
              Z = function (o) {
                const { children: s, className: h, ...S } = o;
                return (0, e.jsxs)(W, {
                  ...o,
                  children: [
                    (0, e.jsx)("div", {
                      className: c.ImportedAchievementsTableHeader,
                      children: (0, e.jsx)(se, { ...S }),
                    }),
                    (0, e.jsxs)("div", {
                      className: c.ImportedAchievementsTable,
                      children: [(0, e.jsx)(fe, {}), s],
                    }),
                  ],
                });
              },
              B = function (o) {
                const { children: s, className: h, ...S } = o,
                  [w, D] = (0, R.useState)(!0);
                return (0, e.jsxs)(W, {
                  ...o,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, a.A)(
                        c.ImportedAchievementsTableHeader,
                        c.CollapsibleAchievementsTableHeader,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(se, { ...S }),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)("div", {
                            className: c.ExpandButton,
                            onClick: () => D(!w),
                            children: (0, e.jsx)(V.DK4, { angle: w ? 90 : 0 }),
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, a.A)(
                        c.ImportedAchievementsTable,
                        w && c.Collapsed,
                      ),
                      children: [(0, e.jsx)(fe, {}), s],
                    }),
                  ],
                });
              },
              fe = function () {
                return (0, e.jsxs)("div", {
                  className: c.TableHeader,
                  children: [
                    (0, e.jsx)("div", {}),
                    (0, e.jsx)("div", {
                      children: (0, v.we)(
                        "#AchievementEditor_AchievementsTable_Header_NameDescription",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, v.we)(
                        "#AchievementEditor_AchievementsTable_Header_ApiName",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, v.we)(
                        "#AchievementEditor_AchievementsTable_Header_Group",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, v.we)(
                        "#AchievementEditor_AchievementsTable_Header_SetBy",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, v.we)(
                        "#AchievementEditor_AchievementsTable_Header_Availability",
                      ),
                    }),
                  ],
                });
              },
              ue = function (o) {
                const {
                    achievement: s,
                    data: h,
                    localization: S,
                    images: w,
                  } = o,
                  {
                    api_name: D,
                    setid: ne,
                    archived: l,
                    spoiler: x,
                    permission: P,
                    progress_stat_name: b,
                    progress_stat_min: ie,
                    progress_stat_max: xe,
                  } = h ?? {},
                  Ye = (0, z.B6)(
                    s?.display?.name?.token,
                    S?.find((Qe) => Qe.field == "name"),
                  ),
                  Ne = (0, z.B6)(
                    s?.display?.desc?.token,
                    S?.find((Qe) => Qe.field == "description"),
                  ),
                  { localization: Fe } = (0, _.L3)(),
                  { currentLanguage: we } = Fe;
                function Se(Qe, Ze, $e) {
                  return (0, a.A)(
                    $e,
                    Qe == Ze && s !== void 0 ? void 0 : c.ModifiedField,
                  );
                }
                const Ve = s?.display?.hidden == "1",
                  He = s?.archived == "1",
                  Je = Se(
                    (0, y.ZM)(s?.display?.name, we),
                    (0, y.ZM)(S ? Ye : s?.display?.name, we),
                  ),
                  be = Se(
                    (0, y.ZM)(s?.display?.desc, we),
                    (0, y.ZM)(S ? Ne : s?.display?.desc, we),
                  );
                return (0, e.jsxs)("div", {
                  className: c.CompactAchievementRow,
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        w?.achieved?.image
                          ? (0, e.jsx)(J.O, {
                              image: w?.achieved?.image,
                              size: 32,
                              className: c.ModifiedIcon,
                            })
                          : (0, e.jsx)(J.T, {
                              achievement: s,
                              size: 32,
                              className: c.UnmodifiedIcon,
                            }),
                        w?.unachieved?.image
                          ? (0, e.jsx)(J.O, {
                              image: w?.unachieved?.image,
                              size: 32,
                              className: c.ModifiedIcon,
                            })
                          : (0, e.jsx)(J.T, {
                              achievement: s,
                              achieved: !1,
                              size: 32,
                              className: c.UnmodifiedIcon,
                            }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: c.NameColumn,
                      children: [
                        (0, e.jsx)("div", {
                          className: Je,
                          children: (0, e.jsx)(y.VU, {
                            text: S ? Ye : s?.display?.name,
                          }),
                        }),
                        (0, e.jsx)("div", {
                          className: be,
                          children: (0, e.jsx)(y.VU, {
                            text: S ? Ne : s?.display?.desc,
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: c.ApiColumn,
                      children: [
                        (0, e.jsx)("div", {
                          className: Se(D, s?.name),
                          children: D,
                        }),
                        b &&
                          (0, e.jsxs)("div", {
                            className: c.ProgressColumn,
                            children: [
                              (0, e.jsx)("span", {
                                className: Se(b, s?.progress?.value?.operand1),
                                children: b,
                              }),
                              ": ",
                              (0, e.jsx)("span", {
                                className: Se(
                                  ie.toString(),
                                  s?.progress?.min_val,
                                ),
                                children: ie,
                              }),
                              " - ",
                              (0, e.jsx)("span", {
                                className: Se(
                                  xe.toString(),
                                  s?.progress?.max_val,
                                ),
                                children: xe,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: Se(ne, s?.groupid ?? ""),
                      children: (0, e.jsx)(K, {
                        groupid: ne,
                        oldgroupid: s?.groupid,
                        isnew: !s,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: Se(P, s?.permission ?? _.yu.Client),
                      children: _.yu[P],
                    }),
                    (0, e.jsxs)("div", {
                      className: c.VisibilityColumn,
                      children: [
                        (x || Ve) &&
                          (0, e.jsx)("div", {
                            className: Se(x, Ve),
                            children: x
                              ? (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(X, {}),
                                    " ",
                                    (0, v.we)(
                                      "#AchievementEditor_Achievement_Edit_Spoiler",
                                    ),
                                  ],
                                })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(te, {}),
                                    " ",
                                    (0, v.we)(
                                      "#AchievementEditor_Achievement_Edit_Visible",
                                    ),
                                  ],
                                }),
                          }),
                        (l || He) &&
                          (0, e.jsx)("div", {
                            className: Se(l, He),
                            children: l
                              ? (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(oe, {}),
                                    " ",
                                    (0, v.we)(
                                      "#AchievementEditor_Achievement_Edit_Archived",
                                    ),
                                  ],
                                })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(ge, {}),
                                    " ",
                                    (0, v.we)(
                                      "#AchievementEditor_Achievement_Edit_Dearchived",
                                    ),
                                    " ",
                                  ],
                                }),
                          }),
                      ],
                    }),
                  ],
                });
              },
              K = function (o) {
                const { groupid: s, oldgroupid: h, isnew: S } = o,
                  { appID: w } = (0, _.L3)(),
                  D = (0, _.Q4)(w),
                  ne = !s || s == "" ? p.z0 : s,
                  l = (0, p.fw)(ne, D?.[ne]),
                  x = (0, p.fw)(h, D?.[h]),
                  P =
                    ne == p.z0
                      ? (0, v.we)(
                          "#AchievementEditor_Group_CoreGameAchievements_Heading",
                        )
                      : (0, e.jsx)(y.VU, { text: D?.[ne]?.name });
                if (l.visible) {
                  if ((S || ne != h) && l.hasprogress)
                    return (0, e.jsxs)(ve.he, {
                      className: c.Warning,
                      toolTipContent: (0, v.we)(
                        "#AchievementEditor_Group_CreateAchievement_WarnLiveGroup",
                      ),
                      style: { alignItems: "baseline" },
                      children: [
                        (0, e.jsx)(p.BA, { className: c.WarningGlobeIcon }),
                        P,
                      ],
                    });
                } else
                  return x?.visible
                    ? (0, e.jsxs)(ve.he, {
                        className: c.Warning,
                        toolTipContent: (0, v.we)(
                          "#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement",
                        ),
                        style: { alignItems: "baseline" },
                        children: [(0, e.jsx)(X, { hideTitle: !0 }), P],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(X, { className: c.UnreleasedText }),
                          P,
                        ],
                      });
                return (0, e.jsx)(e.Fragment, { children: P });
              },
              f = function (o) {
                const {
                    title: s,
                    description: h,
                    icon: S,
                    collapsible: w = !1,
                    className: D,
                    children: ne,
                  } = o,
                  [l, x] = (0, R.useState)(w);
                return (0, e.jsxs)("div", {
                  className: (0, a.A)(c.ResultsSection, D),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, a.A)(
                        c.ResultsSectionHeader,
                        w && c.CollapsibleResultsSectionHeader,
                      ),
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)(q.s, {
                              direction: "row",
                              gap: "1",
                              align: "center",
                              children: [
                                S,
                                (0, e.jsx)(m.EY, {
                                  size: "4",
                                  contrast: "title",
                                  children: s,
                                }),
                              ],
                            }),
                            (0, e.jsx)(m.EY, { children: h }),
                          ],
                        }),
                        w &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)("div", {
                              className: c.ExpandButton,
                              onClick: () => x(!l),
                              children: (0, e.jsx)(V.DK4, {
                                angle: l ? 90 : 0,
                              }),
                            }),
                          }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, a.A)(
                        c.ResultsSectionBody,
                        l && c.Collapsed,
                      ),
                      children: ne,
                    }),
                  ],
                });
              },
              Y = function () {
                const { errors: o, successes: s } = (0, O.Mt)();
                return o.length == 0 && s.length == 0
                  ? null
                  : (0, e.jsxs)(q.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        o.length > 0 &&
                          (0, e.jsx)(f, {
                            icon: (0, e.jsx)(he, {}),
                            title: (0, v.Yp)(
                              "#AchievementEditor_Bulk_Errors_Count_Title",
                              o.length,
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_Bulk_Errors_Description",
                            ),
                            children: o.map((h) =>
                              (0, e.jsx)(t, { result: h }, h.filename),
                            ),
                          }),
                        s.length > 0 &&
                          (0, e.jsx)(f, {
                            collapsible: !0,
                            title: (0, v.Yp)(
                              "#AchievementEditor_Bulk_Successes_Count_Title",
                              s.length,
                            ),
                            description: (0, v.we)(
                              "#AchievementEditor_Bulk_Successes_Description",
                            ),
                            children: s.map((h) =>
                              (0, e.jsx)(
                                "div",
                                {
                                  className: c.FileSuccessRow,
                                  children: (0, e.jsx)(G, { result: h }),
                                },
                                h.filename,
                              ),
                            ),
                          }),
                      ],
                    });
              },
              G = function (o) {
                const { result: s } = o,
                  { filename: h, imageErrors: S } = s,
                  { removeFile: w } = (0, O.Mt)(),
                  D = s.image?.result?.image ?? S?.[0]?.image,
                  ne = D
                    ? (0, e.jsx)("div", {
                        className: c.FileImage,
                        children: (0, e.jsx)("img", {
                          src: D.image,
                          alt: D.filenameWithoutExtension,
                        }),
                      })
                    : (0, e.jsx)(N.az, {
                        height: "24px",
                        aspectRatio: "1/1",
                        children: (0, e.jsx)(V.ZHH, {}),
                      });
                return (0, e.jsxs)(q.s, {
                  direction: "row",
                  gap: "1",
                  padding: "1",
                  justify: "between",
                  align: "center",
                  background: "dull-8",
                  children: [
                    (0, e.jsxs)(q.s, {
                      direction: "row",
                      gap: "2",
                      justify: "start",
                      align: "center",
                      children: [
                        ne,
                        (0, e.jsx)(m.EY, {
                          weight: "heavy",
                          size: "4",
                          contrast: "title",
                          whiteSpace: "pre-wrap",
                          children: h,
                        }),
                      ],
                    }),
                    (0, e.jsx)(p.et, { onClick: () => w(h) }),
                  ],
                });
              },
              i = function (o) {
                const {
                  kind: s,
                  errors: h,
                  csvErrors: S,
                  imageErrors: w,
                } = o.result;
                if (S) {
                  const D =
                    s == "grouplocalization"
                      ? (0, v.we)(
                          "#AchievementEditor_GroupCsvImport_Header_GroupID",
                        )
                      : (0, v.we)(
                          "#AchievementEditor_Achievement_Edit_ApiName",
                        );
                  return (0, e.jsx)(j, {
                    keyHeader: D,
                    errorStrings: h,
                    csvErrors: S,
                  });
                }
                return w
                  ? (0, e.jsxs)("div", {
                      children: [
                        h &&
                          h.map((D, ne) =>
                            (0, e.jsx)(
                              "div",
                              { className: c.FileError, children: D },
                              ne,
                            ),
                          ),
                        w.map((D, ne) =>
                          (0, e.jsx)(
                            "div",
                            { className: c.FileError, children: D.error },
                            ne,
                          ),
                        ),
                      ],
                    })
                  : (0, e.jsx)("div", {
                      children:
                        h &&
                        h.map((D, ne) =>
                          (0, e.jsx)(
                            "div",
                            { className: c.FileError, children: D },
                            ne,
                          ),
                        ),
                    });
              },
              t = function (o) {
                const { result: s } = o;
                return (0, e.jsxs)("div", {
                  className: c.FileErrorList,
                  children: [
                    (0, e.jsx)(G, { result: s }),
                    (0, e.jsx)(i, { result: s }),
                  ],
                });
              },
              j = function (o) {
                const { keyHeader: s, errorStrings: h, csvErrors: S } = o;
                return (0, e.jsxs)("div", {
                  className: c.CsvErrorsTable,
                  children: [
                    (0, e.jsxs)("div", {
                      className: c.TableHeader,
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, v.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Line",
                          ),
                        }),
                        (0, e.jsx)("div", { children: s }),
                        (0, e.jsx)("div", {
                          children: (0, v.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Field",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, v.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Input",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, v.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Error",
                          ),
                        }),
                      ],
                    }),
                    h &&
                      h.map((w, D) =>
                        (0, e.jsx)(
                          "div",
                          { className: c.FileError, children: w },
                          D,
                        ),
                      ),
                    S.sort(u).map((w, D) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          children: [
                            (0, e.jsx)("div", { children: w.line }),
                            (0, e.jsx)("div", { children: w.key }),
                            (0, e.jsx)("div", { children: w.field }),
                            (0, e.jsx)("div", { children: w.input }),
                            (0, e.jsx)("div", { children: w.message }),
                          ],
                        },
                        `${w.key}.${w.field}.${D}`,
                      ),
                    ),
                  ],
                });
              },
              F = function (o) {
                const { className: s } = o;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(c.AchievementDetailIcon, s),
                  children: (0, e.jsx)(V.MwB, {}),
                });
              },
              k = function (o) {
                const { className: s } = o;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(c.AchievementDetailIcon, s),
                  children: (0, e.jsx)(V.f5X, {}),
                });
              },
              X = function (o) {
                const { className: s, hideTitle: h = !1 } = o;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(c.AchievementDetailIcon, s),
                  title: h
                    ? void 0
                    : (0, v.we)("#AchievementEditor_Achievement_Edit_Hidden"),
                  children: (0, e.jsx)(I.ZyV, {}),
                });
              },
              te = function (o) {
                const { className: s, hideTitle: h = !1 } = o;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(c.AchievementDetailIcon, s),
                  title: h
                    ? void 0
                    : (0, v.we)("#AchievementEditor_Achievement_Edit_Visible"),
                  children: (0, e.jsx)(I.rxV, {}),
                });
              },
              oe = function (o) {
                const { className: s, hideTitle: h = !1 } = o;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(c.AchievementDetailIcon, s),
                  title: h
                    ? void 0
                    : (0, v.we)("#AchievementEditor_Achievement_Edit_Archived"),
                  children: (0, e.jsx)(V.c_I, {}),
                });
              },
              ge = function (o) {
                const { className: s } = o;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(c.AchievementDetailIcon, s),
                  children: (0, e.jsx)(V.$VH, {}),
                });
              },
              he = function (o) {
                const { className: s } = o;
                return (0, e.jsx)("div", {
                  className: (0, a.A)(c.AchievementDetailIcon, s),
                  children: (0, e.jsx)(V.eTF, { color: "var(--color-error)" }),
                });
              },
              u = function (o, s) {
                let h = (o.line ?? 0) - (s.line ?? 0);
                return (
                  h != 0 ||
                    ((h = o.key.localeCompare(s.key)), h != 0) ||
                    (h = o.field.localeCompare(s.field)),
                  h
                );
              };
            n.d(me, { V: () => T });
            var e = n(7850),
              q = n(68031),
              m = n(15252),
              L = n(75083),
              A = n(85367),
              N = n(60351),
              _ = n(3959),
              R = n(90626),
              I = n(249),
              V = n(36118),
              a = n(36707),
              v = n(18210),
              c = n(70427),
              ee = n.n(c),
              z = n(12157),
              J = n(65678),
              y = n(1421),
              O = n(77437),
              p = n(82006),
              r = n(91988),
              C = n(33551),
              U = n.n(C),
              E = n(86946),
              ve = n(71421),
              M = d([_, z, J, y, O, p]);
            ([_, z, J, y, O, p] = M.then ? (await M)() : M), Q();
          } catch (ce) {
            Q(ce);
          }
        });
      },
      77437: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let R = function (g) {
                return g.errors?.length > 0 || g.fieldErrors?.length > 0;
              },
              v = function (g) {
                const H = g.toUpperCase(),
                  $ = [a, V].find((W) => H.endsWith(W));
                return {
                  apiName: $ ? g.substring(0, g.length - $.length) : g,
                  isAchieved: $ != a,
                };
              },
              y = function (g, H) {
                return H.reduce(($, se) => {
                  const W = J.includes(se.kind);
                  return [
                    ...$.filter(
                      (B) =>
                        B.filename != se.filename && !(W && B.kind == se.kind),
                    ),
                    se,
                  ];
                }, g);
              },
              O = function (g) {
                return {
                  csv: {},
                  achievements: (0, A.K1)(g),
                  added: [],
                  modified: [],
                  deleted: [],
                  unmodified: g.map((H) => H.name),
                };
              },
              p = function (g, H) {
                const $ = g.find(
                  (se) => se.success && se.definitions,
                )?.definitions;
                return $
                  ? {
                      csv: $.csv ?? {},
                      achievements: $.achievements ?? (0, A.K1)(H),
                      added: $.added ?? [],
                      modified: $.modified ?? [],
                      deleted: $.deleted ?? [],
                      unmodified: $.unmodified ?? [],
                    }
                  : O(H);
              },
              r = function (g, H) {
                const $ = g.find(
                  (W) => W.success && W.localization,
                )?.localization;
                if (!$) return;
                const se = Object.keys($.localization ?? {})
                  .filter((W) => !C(W, H))
                  .reduce((W, Z) => ((W[Z] = $.localization[Z]), W), {});
                return { ...$, localization: se };
              },
              C = function (g, H) {
                if (!(g in H.achievements) && !(g in H.csv))
                  return (0, L.we)(
                    "#AchievementEditor_Localization_Error_NoAchievement",
                  );
                if (H.deleted.includes(g))
                  return (0, L.we)(
                    "#AchievementEditor_Localization_Error_MissingFromDefinitions",
                  );
              },
              U = function (g, H) {
                return !g.success || !g.localization
                  ? []
                  : Object.keys(g.localization.localization ?? {})
                      .map(($) => ({ apiName: $, message: C($, H) }))
                      .filter(($) => !!$.message)
                      .map(($) => ({
                        key: $.apiName,
                        field: "api_name",
                        message: $.message,
                      }));
              },
              E = function (g) {
                return g.find((H) => H.success && H.groupLocalization)
                  ?.groupLocalization;
              },
              ve = function (g, H) {
                if (g in H.achievements || g in H.csv) return g;
                const $ = g.toUpperCase();
                return (
                  [...Object.keys(H.achievements), ...Object.keys(H.csv)].find(
                    (W) => W.toUpperCase() == $,
                  ) ?? g
                );
              },
              M = function (g, H) {
                if (!g.success || !g.image) return;
                const $ = ve(g.image.apiName, H);
                if (!($ in H.achievements) && !($ in H.csv))
                  return (0, L.we)(
                    "#AchievementEditor_Image_Error_NoAchievement",
                    g.image.apiName,
                  );
                if (H.deleted.includes($))
                  return (0, L.we)(
                    "#AchievementEditor_Image_Error_AchievementMissingFromCsv",
                    $,
                  );
              },
              ce = function (g, H, $) {
                const se = g
                    .filter((Z) => Z.success && Z.image && !M(Z, H))
                    .map((Z) => ({
                      ...Z.image,
                      apiName: ve(Z.image.apiName, H),
                    })),
                  W = new Set(se.map((Z) => Z.apiName));
                return Array.from(W).reduce((Z, B) => {
                  const fe = se.filter((Y) => Y.apiName == B),
                    ue = fe.filter((Y) => Y.isAchieved).pop(),
                    K = fe.filter((Y) => !Y.isAchieved).pop(),
                    f = $ ? ue?.generatedUnachieved : void 0;
                  return (
                    (Z[B] = {
                      achieved: ue?.result,
                      unachieved:
                        K?.result ??
                        (f
                          ? { success: !0, filename: "GENERATED", image: f }
                          : void 0),
                    }),
                    Z
                  );
                }, {});
              },
              ye = function (g, H) {
                const $ = (Z) => M(Z, H),
                  se = (Z) => U(Z, H),
                  W = (Z) => !!$(Z) || se(Z).length > 0;
                return {
                  errors: [
                    ...g.filter((Z) => !Z.success),
                    ...g.filter(W).map((Z) => {
                      const B = $(Z);
                      return {
                        ...Z,
                        success: !1,
                        imageErrors: B
                          ? [{ ...Z.image.result, success: !1, error: B }]
                          : void 0,
                        csvErrors: B ? void 0 : se(Z),
                      };
                    }),
                  ],
                  successes: g.filter((Z) => Z.success && !W(Z)),
                };
              },
              T = function (g, H, $, se) {
                const W = (f) => ({
                    icon: $[f]?.achieved?.image?.image,
                    icon_gray: $[f]?.unachieved?.image?.image,
                  }),
                  Z = (f) => {
                    const { statID: Y, bitID: G } = g.achievements[f];
                    return { statID: Y, bitID: G };
                  },
                  B = g.added.map((f) => ({
                    achievement: (0, A.f4)(g.csv[f], H?.localization?.[f]),
                    ...W(f),
                  })),
                  ue = Array.from(
                    new Set([
                      ...g.modified,
                      ...Object.keys(H?.localization ?? {}).filter(
                        (f) => !g.added.includes(f) && f in g.achievements,
                      ),
                    ]),
                  ).map((f) => {
                    const Y = g.achievements[f];
                    return {
                      ...Z(f),
                      achievement: (0, A.f4)(
                        g.csv[f] ?? (0, A.oK)(Y),
                        H?.localization?.[f],
                        Y,
                      ),
                      ...W(f),
                    };
                  }),
                  K = Object.keys($)
                    .filter((f) => g.unmodified.includes(f))
                    .map((f) => ({ ...Z(f), ...W(f) }));
                return {
                  addOrUpdate: [...B, ...ue, ...K],
                  delete: se ? g.deleted.map(Z) : [],
                };
              },
              de = function (g) {
                return (g?.modified ?? []).map((H) => {
                  const $ = g.groups[H];
                  return {
                    groupid: H,
                    group: { ...$, name: (0, A.NJ)(g.csv[H], $) },
                  };
                });
              },
              le = function () {
                return (0, m.useContext)(ae);
              },
              re = function (g) {
                const { onClose: H, setHasChanges: $, children: se } = g,
                  { appID: W } = (0, q.L3)(),
                  Z = (0, q.kb)(W),
                  B = (0, m.useMemo)(() => Z ?? [], [Z]),
                  fe = (0, q.FM)(W),
                  ue = (0, q.J3)(W),
                  K = (0, q.vd)(W),
                  f = (0, q.SN)(W),
                  Y = (0, q.Er)(W),
                  [G, i] = (0, m.useState)([]),
                  [t, j] = (0, m.useState)(!0),
                  [F, k] = (0, m.useState)(!1),
                  [X, te] = (0, m.useState)(!1),
                  oe = (0, m.useRef)(void 0),
                  ge = (0, m.useMemo)(() => p(G, B), [G, B]),
                  he = (0, m.useMemo)(() => r(G, ge), [G, ge]),
                  u = (0, m.useMemo)(() => E(G), [G]),
                  o = (0, m.useMemo)(() => ce(G, ge, t), [G, ge, t]),
                  { errors: s, successes: h } = (0, m.useMemo)(
                    () => ye(G, ge),
                    [G, ge],
                  ),
                  S = G.some((x) => x.success);
                (0, m.useEffect)(() => {
                  $(S);
                }, [S, $]);
                const l = {
                  files: G,
                  definitions: ge,
                  localization: he,
                  groupLocalization: u,
                  images: o,
                  errors: s,
                  successes: h,
                  hasData: S,
                  generateUnachievedImages: t,
                  setGenerateUnachievedImages: j,
                  confirmDelete: F,
                  setConfirmDelete: k,
                  uploadFiles: async (x) => {
                    const P = [];
                    for (const b of x) {
                      const ie = ee.find((xe) => xe.accept.includes(b.type));
                      if (!ie) {
                        P.push({
                          filename: b.name,
                          success: !1,
                          errors: [
                            (0, L.we)(
                              "#AchievementEditor_Image_Error_UnknownContentType",
                            ),
                          ],
                        });
                        continue;
                      }
                      P.push(
                        await ie.process(b, {
                          groups: fe,
                          stats: ue,
                          achievements: B,
                          validLanguages: K,
                        }),
                      );
                    }
                    i((b) => y(b, P)), oe.current && (oe.current.value = "");
                  },
                  removeFile: (x) => i((P) => P.filter((b) => b.filename != x)),
                  openFilePicker: () => oe.current?.click(),
                  fileInputRef: oe,
                  acceptedTypes: z,
                  save: async () => {
                    try {
                      await Y.mutateAsync(de(u)),
                        await f.mutateAsync(T(ge, he, o, F)),
                        te(!0);
                    } catch {}
                  },
                  isSaving: f.isPending || Y.isPending,
                  saveError: Y.error?.message ?? f.error?.message,
                  saveSucceeded: X,
                  onClose: H,
                };
                return (0, e.jsx)(ae, { value: l, children: se });
              };
            n.d(me, { FU: () => re, Mt: () => le });
            var e = n(7850),
              q = n(3959),
              m = n(90626),
              L = n(18210),
              A = n(12157),
              N = n(50233),
              _ = d([q, A]);
            [q, A] = _.then ? (await _)() : _;
            async function I(g, H) {
              const $ = await (0, A.Wk)(g);
              if ($.errors)
                return { filename: g.name, success: !1, errors: $.errors };
              if ((0, A.Yc)($)) {
                const { groups: se, stats: W, achievements: Z } = H,
                  B = (0, A.Rr)($, se, W, Z),
                  fe = R(B);
                return {
                  filename: g.name,
                  kind: "definitions",
                  success: !fe,
                  errors: B.errors,
                  csvErrors: B.fieldErrors,
                  definitions: fe ? void 0 : B,
                };
              }
              if ((0, A.Lq)($)) {
                const se = (0, A.EO)($),
                  W = R(se);
                return {
                  filename: g.name,
                  kind: "localization",
                  success: !W,
                  errors: se.errors,
                  csvErrors: se.fieldErrors,
                  localization: W ? void 0 : se,
                };
              }
              if ((0, A.JP)($)) {
                const { groups: se, validLanguages: W } = H,
                  Z = (0, A.OB)($, se, W),
                  B = R(Z);
                return {
                  filename: g.name,
                  kind: "grouplocalization",
                  success: !B,
                  errors: Z.errors,
                  csvErrors: Z.fieldErrors,
                  groupLocalization: B ? void 0 : Z,
                };
              }
              return {
                filename: g.name,
                success: !1,
                errors: [
                  (0, L.we)("#AchievementEditor_Bulk_CsvHandlerNotFound"),
                ],
              };
            }
            const V = "_ACHIEVED",
              a = "_UNACHIEVED";
            async function c(g) {
              const $ = (await (0, N.Tc)({ files: [g], forceSquare: !0 }))[0];
              if (!$.success)
                return {
                  filename: g.name,
                  kind: "image",
                  success: !1,
                  imageErrors: [$],
                };
              const { apiName: se, isAchieved: W } = v(
                  $.image.filenameWithoutExtension,
                ),
                Z = W
                  ? {
                      image: await (0, N.I7)($.image.image),
                      imageType: N.bi,
                      filenameWithoutExtension: "GENERATED",
                    }
                  : void 0;
              return {
                filename: g.name,
                kind: "image",
                success: !0,
                image: {
                  apiName: se,
                  isAchieved: W,
                  result: $,
                  generatedUnachieved: Z,
                },
              };
            }
            const ee = [
                { accept: ["text/csv"], process: I },
                { accept: ["image/png", "image/jpeg"], process: c },
              ],
              z = Array.from(new Set(ee.flatMap((g) => g.accept))),
              J = ["definitions", "localization", "grouplocalization"],
              ae = (0, m.createContext)(null);
            Q();
          } catch (R) {
            Q(R);
          }
        });
      },
      12157: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let c = function (u) {
                return u.reduce((o, s) => ((o[s.name] = s), o), {});
              },
              ee = function (u) {
                const { groups: o, stats: s, achievements: h } = u,
                  S = new Set(o.map((w) => w.groupid));
                return V.superRefine((w, D) => {
                  if (
                    (w.setid &&
                      !S.has(w.setid) &&
                      ne(
                        "setid",
                        (0, N.we)(
                          "#AchievementEditor_Validator_Error_GroupDoesNotExist",
                        ),
                      ),
                    w.progress_stat_name === void 0 ||
                      w.progress_stat_name == "")
                  )
                    return;
                  function ne(x, P) {
                    D.addIssue({
                      code: "custom",
                      path: [x],
                      input: w[x],
                      message: P,
                    });
                  }
                  const l = s.find((x) => x.name == w.progress_stat_name);
                  if (l === void 0) {
                    ne(
                      "progress_stat_name",
                      (0, N.we)(
                        "#AchievementEditor_Validator_Error_StatDoesNotExist",
                      ),
                    );
                    return;
                  }
                  w.permission != (l.permission ?? L.yu.Client) &&
                    ne(
                      "permission",
                      (0, N.we)(
                        "#AchievementEditor_Validator_Error_AchievementStatDifferentPermissions",
                      ),
                    ),
                    l.type == "INT" &&
                      (m.Whr().safeParse(w.progress_stat_min).success ||
                        ne(
                          "progress_stat_min",
                          (0, N.we)(
                            "#AchievementEditor_Validator_Error_MinMaxMustBeInteger",
                          ),
                        ),
                      m.Whr().safeParse(w.progress_stat_max).success ||
                        ne(
                          "progress_stat_max",
                          (0, N.we)(
                            "#AchievementEditor_Validator_Error_MinMaxMustBeInteger",
                          ),
                        ));
                  {
                    const x =
                        l.type == "INT" ? m.ZSL.zH.int32 : m.ZSL.zH.float32,
                      P = [
                        m.auy.number().default(x[0]).parse(l.min),
                        m.auy.number().default(x[1]).parse(l.max),
                      ],
                      b = [
                        m.aig().parse(w.progress_stat_min),
                        m.aig().parse(w.progress_stat_max),
                      ];
                    b[0] < P[0] &&
                      ne(
                        "progress_stat_min",
                        (0, N.we)(
                          "#AchievementEditor_Validator_Error_MinLessThanStatMin",
                        ),
                      ),
                      b[1] > P[1] &&
                        ne(
                          "progress_stat_max",
                          (0, N.we)(
                            "#AchievementEditor_Validator_Error_MaxGreaterThanStatMax",
                          ),
                        ),
                      b[0] >= b[1] &&
                        ne(
                          "progress_stat_max",
                          (0, N.we)(
                            "#AchievementEditor_Validator_Error_MinGreaterThanMax",
                          ),
                        );
                  }
                });
              },
              z = function (u, o, s, h) {
                const S = u.reduce((w, D) => {
                  const ne = String(D[s]);
                  return (w[ne] = (w[ne] ?? 0) + 1), w;
                }, {});
                u.forEach((w, D) => {
                  S[String(w[s])] > 1 &&
                    o.addIssue({
                      code: "custom",
                      path: [D, s],
                      input: w[s],
                      message: h,
                    });
                });
              },
              J = function (u) {
                const { stats: o, achievements: s } = u;
                return m
                  .YOg(ee(u))
                  .superRefine((h, S) =>
                    z(
                      h,
                      S,
                      "api_name",
                      (0, N.we)(
                        "#AchievementEditor_AchievementCsvImport_Error_DuplicateApiName",
                      ),
                    ),
                  )
                  .transform((h) => {
                    const S = h.map((l) => l.api_name),
                      w = h.reduce((l, x) => ((l[x.api_name] = x), l), {}),
                      D = c(s);
                    let ne = {
                      csv: w,
                      achievements: D,
                      added: S.filter((l) => !s.some((x) => x.name == l)),
                      deleted: s
                        .map((l) => l.name)
                        .filter((l) => !S.includes(l)),
                      modified: [],
                      unmodified: [],
                    };
                    return S.filter(
                      (l) => !ne.added.includes(l) && !ne.deleted.includes(l),
                    ).reduce(
                      (l, x) => (
                        E(w[x], D[x])
                          ? l.unmodified.push(x)
                          : l.modified.push(x),
                        l
                      ),
                      ne,
                    );
                  });
              },
              y = function (u) {
                return {
                  api_name: u.name,
                  setid: u.groupid ?? "",
                  permission: u.permission ?? L.yu.Client,
                  spoiler: u.display?.hidden == "1",
                  archived: u.archived == "1",
                  progress_stat_name: u.progress?.value?.operand1 ?? "",
                  progress_stat_min: parseFloat(u.progress?.min_val ?? "0"),
                  progress_stat_max: parseFloat(u.progress?.max_val ?? "0"),
                };
              },
              O = function (u, o) {
                if (!u) return {};
                const s = (0, R.II)(u, o),
                  { token: h, ...S } = s;
                return S;
              },
              p = function (u, o) {
                const { api_name: s, field: h, ...S } = o ?? {};
                return { token: u, ...S };
              },
              r = function (u) {
                return u.reduce((o, s) => ((o[s] = ""), o), {});
              },
              C = function (u, o) {
                const s = r(o);
                return [
                  {
                    api_name: u.name,
                    field: "name",
                    ...s,
                    ...O(u.display?.name, o),
                  },
                  {
                    api_name: u.name,
                    field: "description",
                    ...s,
                    ...O(u.display?.desc, o),
                  },
                ];
              },
              E = function (u, o) {
                return q()(u, y(o));
              },
              ve = function () {
                return {
                  api_name: (0, N.we)("#AchievementEditor_Csv_Hint_ApiName"),
                  setid: (0, N.we)("#AchievementEditor_Csv_Hint_GroupID"),
                  permission: (0, N.we)(
                    "#AchievementEditor_Csv_Hint_Permission",
                    L.l7.join(", "),
                  ),
                  spoiler: (0, N.we)("#AchievementEditor_Csv_Hint_Bool"),
                  archived: (0, N.we)("#AchievementEditor_Csv_Hint_Bool"),
                  progress_stat_name: (0, N.we)(
                    "#AchievementEditor_Csv_Hint_ProgressStatName",
                  ),
                  progress_stat_min: (0, N.we)(
                    "#AchievementEditor_Csv_Hint_ProgressStatMin",
                  ),
                  progress_stat_max: (0, N.we)(
                    "#AchievementEditor_Csv_Hint_ProgressStatMax",
                  ),
                };
              },
              M = function () {
                return {
                  api_name: (0, N.we)("#AchievementEditor_Csv_Hint_LocApiName"),
                  field: (0, N.we)("#AchievementEditor_Csv_Hint_LocField"),
                  setid: (0, N.we)("#AchievementEditor_Csv_Hint_LocGroupID"),
                };
              },
              ce = function (u, o, s) {
                const h = o.reduce(
                  (S, w) => ((S[w] = s[w] ? `${w} (${s[w]})` : w), S),
                  {},
                );
                return {
                  fields: o.map((S) => h[S]),
                  rows: u.map((S) =>
                    Object.keys(S).reduce(
                      (w, D) => ((w[h[D] ?? D] = S[D]), w),
                      {},
                    ),
                  ),
                };
              },
              ye = function (u) {
                return u.replace(/\s*\(.*$/, "").trim();
              },
              ae = function () {
                return [
                  {
                    api_name: de[0],
                    setid: "",
                    permission: L.yu.Client,
                    spoiler: !1,
                    archived: !1,
                    progress_stat_name: "",
                    progress_stat_min: 0,
                    progress_stat_max: 0,
                  },
                  {
                    api_name: de[1],
                    setid: "",
                    permission: L.yu.Client,
                    spoiler: !0,
                    archived: !1,
                    progress_stat_name: "",
                    progress_stat_min: 0,
                    progress_stat_max: 0,
                  },
                ];
              },
              le = function (u) {
                const o = r(u),
                  s = [
                    {
                      name: "First Victory",
                      description: "Win your first match.",
                    },
                    {
                      name: "100 Wins",
                      description: "Win 100 different matches.",
                    },
                  ];
                return de.map((h, S) => [
                  { api_name: h, field: "name", ...o, english: s[S].name },
                  {
                    api_name: h,
                    field: "description",
                    ...o,
                    english: s[S].description,
                  },
                ]);
              },
              re = function (u, o) {
                const s = `${u}-achievements-definitions.csv`,
                  h = (o.length > 0 ? o.map(y) : ae()).map((D) => ({
                    ...D,
                    permission: L.yu[D.permission ?? L.yu.Client],
                  })),
                  { fields: S, rows: w } = ce(h, Object.keys(V.shape), ve());
                A.g.WriteCSVToFile(w, s, !0, S);
              },
              g = function (u, o, s) {
                const h = `${u}-achievements-localization.csv`,
                  S = (o.length > 0 ? o.map((ne) => C(ne, s)) : le(s)).reduce(
                    (ne, l) => (ne.push(...l), ne),
                    [],
                  ),
                  { fields: w, rows: D } = ce(
                    S,
                    [...Object.keys(a.shape), ...s],
                    M(),
                  );
                A.g.WriteCSVToFile(D, h, !0, w);
              },
              H = function (u, o, s) {
                if (!o) return {};
                const h = o.find((ne) => ne.field == "name"),
                  S = o.find((ne) => ne.field == "description"),
                  w = (0, _.EV)(
                    s?.display?.name?.token,
                    s?.name,
                    "name",
                    u ?? s?.name,
                  ),
                  D = (0, _.EV)(
                    s?.display?.desc?.token,
                    s?.name,
                    "desc",
                    u ?? s?.name,
                  );
                return {
                  name: h ? p(w, h) : void 0,
                  desc: S ? p(D, S) : void 0,
                };
              },
              $ = function (u, o, s) {
                return {
                  name: u.api_name,
                  groupid: u.setid,
                  permission: u.permission,
                  archived: u.archived ? "1" : "0",
                  display: {
                    hidden: u.spoiler ? "1" : "0",
                    name: void 0,
                    desc: void 0,
                    icon: void 0,
                    icon_gray: void 0,
                    ...H(u?.api_name, o, s),
                  },
                  progress: u.progress_stat_name
                    ? {
                        value: {
                          operation: "",
                          operand1: u.progress_stat_name,
                        },
                        min_val: u.progress_stat_min.toString(),
                        max_val: u.progress_stat_max.toString(),
                      }
                    : void 0,
                };
              },
              se = function (u, o) {
                const s = m.auy.number().safeParse(o.path[0])?.data;
                return s !== void 0 &&
                  Number.isInteger(s) &&
                  s >= 0 &&
                  s < u.data.length
                  ? s
                  : void 0;
              },
              W = function (u, o, s) {
                const h = se(u, o),
                  S = u.data[h],
                  w = o.path.length > 1 ? o.path[1] : s;
                return {
                  line: h + 2,
                  key: S[s],
                  field: w,
                  input: w in S ? S[w] : "",
                  message: o.message,
                };
              },
              Z = function (u, o, s) {
                const h = (S) => S.path.length > 1 && se(u, S) !== void 0;
                return {
                  errors: o?.filter((S) => !h(S)).map((S) => S.message),
                  fieldErrors: o?.filter(h).map((S) => W(u, S, s)),
                };
              },
              B = function (u) {
                const o = new Set(u.fields);
                return Object.keys(V.shape).every((s) => o.has(s));
              },
              fe = function (u, o, s, h) {
                const w = J({ groups: o, stats: s, achievements: h }).safeParse(
                  u.data,
                );
                return { ...w.data, ...Z(u, w.error?.issues, "api_name") };
              },
              ue = function (u) {
                const o = new Set(u.fields);
                return Object.keys(a.shape).every((s) => o.has(s));
              },
              K = function (u) {
                const s = m.YOg(v).safeParse(u.data);
                return {
                  localization:
                    s.data?.reduce(
                      (h, S) => (
                        S.api_name in h || (h[S.api_name] = []),
                        h[S.api_name].push(S),
                        h
                      ),
                      {},
                    ) ?? {},
                  ...Z(u, s.error?.issues, "api_name"),
                };
              },
              G = function (u) {
                return u.reduce((o, s) => ((o[s.groupid] = s), o), {});
              },
              i = function (u) {
                const o = u?.name;
                return typeof o == "string" ? { english: o } : (o ?? {});
              },
              t = function (u) {
                return Object.keys(u)
                  .filter((o) => o == "token" || !!u[o])
                  .reduce((o, s) => ((o[s] = u[s]), o), {});
              },
              j = function (u, o) {
                return { setid: u.groupid, ...r(o), ...O(u.name, o) };
              },
              F = function (u, o) {
                const { setid: s, ...h } = u;
                return t({ ...i(o), ...h });
              },
              k = function (u, o) {
                return q()(F(u, o), t(i(o)));
              },
              X = function (u) {
                const { groups: o, validLanguages: s } = u,
                  h = new Set(o.map((S) => S.groupid));
                return Y.superRefine((S, w) => {
                  function D(ne, l) {
                    w.addIssue({
                      code: "custom",
                      path: [ne],
                      input: S[ne],
                      message: l,
                    });
                  }
                  S.setid == _.z0
                    ? D(
                        "setid",
                        (0, N.we)(
                          "#AchievementEditor_GroupCsvImport_Error_DefaultGroup",
                        ),
                      )
                    : h.has(S.setid) ||
                      D(
                        "setid",
                        (0, N.we)(
                          "#AchievementEditor_Validator_Error_GroupDoesNotExist",
                        ),
                      ),
                    Object.keys(S)
                      .filter((ne) => ne != "setid" && !s.includes(ne))
                      .forEach((ne) =>
                        D(
                          ne,
                          (0, N.we)(
                            "#AchievementEditor_GroupCsvImport_Error_UnknownLanguage",
                            ne,
                          ),
                        ),
                      ),
                    S.english ||
                      D(
                        "english",
                        (0, N.we)(
                          "#AchievementEditor_GroupCsvImport_Error_NameRequired",
                        ),
                      );
                });
              },
              te = function (u) {
                const { groups: o } = u;
                return m
                  .YOg(X(u))
                  .superRefine((s, h) =>
                    z(
                      s,
                      h,
                      "setid",
                      (0, N.we)(
                        "#AchievementEditor_GroupCsvImport_Error_DuplicateGroupID",
                      ),
                    ),
                  )
                  .transform((s) => {
                    const h = s.reduce((w, D) => ((w[D.setid] = D), w), {}),
                      S = G(o);
                    return Object.keys(h).reduce(
                      (w, D) => (
                        k(h[D], S[D])
                          ? w.unmodified.push(D)
                          : w.modified.push(D),
                        w
                      ),
                      { csv: h, groups: S, modified: [], unmodified: [] },
                    );
                  });
              },
              oe = function (u) {
                const o = new Set(u.fields);
                return (
                  Object.keys(f.shape).every((s) => o.has(s)) &&
                  !o.has("api_name")
                );
              },
              ge = function (u, o, s) {
                const S = te({ groups: o, validLanguages: s }).safeParse(
                  u.data,
                );
                return { ...S.data, ...Z(u, S.error?.issues, "setid") };
              },
              he = function (u, o, s) {
                const h = `${u}-achievement-sets-localization.csv`,
                  S = o.map((ne) => j(ne, s)),
                  { fields: w, rows: D } = ce(
                    S,
                    [...Object.keys(f.shape), ...s],
                    M(),
                  );
                A.g.WriteCSVToFile(D, h, !0, w);
              };
            n.d(me, {
              B6: () => p,
              CD: () => g,
              EO: () => K,
              JP: () => oe,
              K1: () => c,
              Lq: () => ue,
              NJ: () => F,
              OB: () => ge,
              Rr: () => fe,
              Wk: () => U,
              Yc: () => B,
              f4: () => $,
              jF: () => he,
              le: () => re,
              oK: () => y,
              pC: () => C,
            });
            var e = n(33551),
              q = n.n(e),
              m = n(30541),
              L = n(3959),
              A = n(22880),
              N = n(18210),
              _ = n(82006),
              R = n(1421),
              I = d([m, L, _, R]);
            [m, L, _, R] = I.then ? (await I)() : I;
            const V = m.Ikc({
                api_name: m.YjP().min(1),
                setid: m.YjP().optional(),
                permission: m
                  .k5n(Object.keys(L.yu).filter((u) => typeof u == "string"))
                  .transform((u) => L.yu[u]),
                spoiler: m.uEf(),
                archived: m.uEf(),
                progress_stat_name: m.YjP(),
                progress_stat_min: m.auy.number(),
                progress_stat_max: m.auy.number(),
              }),
              a = m.Ikc({
                api_name: m.YjP().min(1),
                field: m.euz(["name", "description"]),
              }),
              v = a.catchall(m.YjP());
            async function U(u) {
              const o = await A.g.ParseCSVFile(u, ye);
              return o.errors && o.errors.length > 0
                ? {
                    fields: void 0,
                    data: void 0,
                    errors: o.errors.map((s) => s.message),
                  }
                : { fields: o.meta.fields, data: o.data, errors: void 0 };
            }
            const T = "EXAMPLE_",
              de = [`${T}FIRST_WIN`, `${T}HUNDRED_WINS`],
              f = m.Ikc({ setid: m.YjP().min(1) }),
              Y = f.catchall(m.YjP());
            Q();
          } catch (V) {
            Q(V);
          }
        });
      },
      65678: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let V = function (v) {
                const {
                    size: c = 64,
                    achievement: ee,
                    achieved: z = !0,
                    showWarningOnEmpty: J = !0,
                    children: y,
                    className: O,
                  } = v,
                  { cdnRoot: p } = (0, A.L3)(),
                  r = z ? ee?.display?.icon : ee?.display?.icon_gray,
                  C = I[c],
                  U = (0, N.A)(
                    C,
                    q.AchievementImageContainer,
                    !r && q.AchievementMissingImage,
                    O,
                  );
                return r
                  ? (0, e.jsxs)("div", {
                      className: U,
                      children: [(0, e.jsx)("img", { src: p + r }), y],
                    })
                  : (0, e.jsx)("div", {
                      className: U,
                      title: (0, _.we)(
                        "#AchievementEditor_AchievementImage_WarningMissingImage",
                      ),
                      children: (0, e.jsx)("div", {
                        children: J && (0, e.jsx)(L.Jru, {}),
                      }),
                    });
              },
              a = function (v) {
                const {
                    size: c = 64,
                    image: ee,
                    showNewIcon: z = !1,
                    children: J,
                    className: y,
                  } = v,
                  O = I[c];
                return (0, e.jsxs)("div", {
                  className: (0, N.A)(O, q.AchievementImageContainer, y),
                  children: [
                    (0, e.jsx)("img", {
                      src: ee.image,
                      alt: ee.filenameWithoutExtension,
                    }),
                    z && (0, e.jsx)(L.FEq, { className: q.NewIcon }),
                    J,
                  ],
                });
              };
            n.d(me, { O: () => a, T: () => V });
            var e = n(7850),
              q = n(70402),
              m = n.n(q),
              L = n(36118),
              A = n(3959),
              N = n(36707),
              _ = n(18210),
              R = d([A]);
            A = (R.then ? (await R)() : R)[0];
            const I = {
              32: q.Size32,
              64: q.Size64,
              128: q.Size128,
              256: q.Size256,
            };
            Q();
          } catch (I) {
            Q(I);
          }
        });
      },
      71986: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let ae = function (Z) {
                const {
                    achievements: B,
                    compact: fe = !1,
                    editable: ue = !0,
                    contentBefore: K,
                    headerContentBefore: f,
                    setBulkMove: Y,
                  } = Z,
                  G = (0, O.A)(
                    C.GroupAchievementList,
                    fe ? C.Compact : void 0,
                    K === void 0 ? void 0 : C.HasBeforeContent,
                  );
                return (0, e.jsxs)("div", {
                  className: G,
                  children: [
                    (0, e.jsxs)("div", {
                      className: C.Headers,
                      children: [
                        K !== void 0 &&
                          (0, e.jsx)("div", {
                            className: C.ContentBefore,
                            children: f !== void 0 && f(),
                          }),
                        (0, e.jsx)("div", {
                          children:
                            !fe &&
                            (0, e.jsx)(e.Fragment, {
                              children: (0, e.jsx)(q.$, {
                                size: "1",
                                onClick: Y,
                                children: (0, e.jsxs)(m.s, {
                                  direction: "row",
                                  gap: "2",
                                  align: "center",
                                  children: [
                                    (0, e.jsx)(J.MG, {
                                      width: "1em",
                                      height: "1em",
                                      style: {
                                        verticalAlign: "middle",
                                        display: "inline-block",
                                        outline: "1px solid currentColor",
                                      },
                                    }),
                                    (0, p.we)(
                                      "#AchievementEditor_AchievementsTable_Header_BulkMove",
                                    ),
                                  ],
                                }),
                              }),
                            }),
                        }),
                        (0, e.jsx)("div", {
                          className: C.Name,
                          children: fe
                            ? (0, p.we)(
                                "#AchievementEditor_Achievement_Edit_DisplayName",
                              )
                            : (0, p.we)(
                                "#AchievementEditor_AchievementsTable_Header_NameDescription",
                              ),
                        }),
                        (0, e.jsx)("div", {
                          className: C.ApiName,
                          children: (0, p.we)(
                            "#AchievementEditor_AchievementsTable_Header_ApiName",
                          ),
                        }),
                        !fe &&
                          (0, e.jsx)("div", {
                            children: (0, p.we)(
                              "#AchievementEditor_AchievementsTable_Header_SetBy",
                            ),
                          }),
                        !fe &&
                          (0, e.jsx)("div", {
                            className: C.Availability,
                            children: (0, p.we)(
                              "#AchievementEditor_AchievementsTable_Header_Availability",
                            ),
                          }),
                        (0, e.jsx)("div", {}),
                      ],
                    }),
                    B.map((i) =>
                      (0, e.jsx)(
                        le,
                        {
                          achievement: i,
                          compact: fe,
                          editable: ue,
                          contentBefore: K,
                        },
                        `ach_${i.statID}_${i.bitID}`,
                      ),
                    ),
                  ],
                });
              },
              le = function (Z) {
                const {
                    achievement: B,
                    compact: fe,
                    editable: ue,
                    contentBefore: K,
                  } = Z,
                  { existingAchievement: f, globalUnlockPercentage: Y } = (0,
                  M.YZ)(B.statID, B.bitID),
                  { appID: G } = (0, a.L3)(),
                  i = (0, a.$j)(G, B.groupid),
                  t = (0, M.fw)(B.groupid, i),
                  [j, F] = v.useState(!1),
                  [k, X] = v.useState(!1),
                  te = () => {
                    F(!1);
                  },
                  oe = () => {
                    F(!1);
                  },
                  ge = fe ? 32 : 64;
                return (0, e.jsxs)("div", {
                  children: [
                    j
                      ? (0, e.jsx)(H, {
                          achievement: B,
                          onSave: te,
                          onCancel: oe,
                        })
                      : (0, e.jsxs)(e.Fragment, {
                          children: [
                            K !== void 0 &&
                              (0, e.jsxs)("div", {
                                className: C.ContentBefore,
                                children: [K(B), " "],
                              }),
                            (0, e.jsxs)("div", {
                              className: C.Images,
                              children: [
                                (0, e.jsx)(r.T, {
                                  achievement: B,
                                  achieved: !0,
                                  size: ge,
                                }),
                                !fe &&
                                  (0, e.jsx)(r.T, {
                                    achievement: B,
                                    achieved: !1,
                                    size: ge,
                                  }),
                              ],
                            }),
                            (0, e.jsxs)(m.s, {
                              direction: "column",
                              children: [
                                (0, e.jsx)(L.EY, {
                                  weight: "heavy",
                                  contrast: "title",
                                  children: (0, e.jsx)(E.VU, {
                                    text: B.display?.name,
                                  }),
                                }),
                                !fe &&
                                  (0, e.jsx)(L.EY, {
                                    children: (0, e.jsx)(E.VU, {
                                      text: B.display?.desc,
                                    }),
                                  }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: C.ApiName,
                              children: [
                                (0, e.jsx)("div", { children: B.name }),
                                !fe &&
                                  (0, e.jsx)("div", {
                                    children: B.progress
                                      ? `${B.progress.value.operand1} ${B.progress.min_val} - ${B.progress.max_val}`
                                      : "",
                                  }),
                              ],
                            }),
                            !fe &&
                              (0, e.jsx)("div", {
                                className: C.Permission,
                                children: a.yu[B.permission ?? 0],
                              }),
                            !fe &&
                              (0, e.jsxs)("div", {
                                className: C.Availability,
                                children: [
                                  B.display?.hidden == "1" &&
                                    (0, e.jsx)("div", {
                                      children: (0, p.we)(
                                        "#AchievementEditor_Achievement_Edit_Spoiler",
                                      ),
                                    }),
                                  B.archived == "1" &&
                                    (0, e.jsx)("div", {
                                      children: (0, p.we)(
                                        "#AchievementEditor_Achievement_Edit_Archived",
                                      ),
                                    }),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: C.EditButtons,
                              children: [
                                !fe &&
                                  ue &&
                                  (0, e.jsxs)("div", {
                                    children: [
                                      (0, e.jsx)(M.lg, {
                                        onClick: () => {
                                          F(!0);
                                        },
                                      }),
                                      (0, e.jsx)(M.et, {
                                        onClick: () => {
                                          X(!0);
                                        },
                                      }),
                                    ],
                                  }),
                                (0, e.jsxs)("div", {
                                  className: C.IDText,
                                  children: [
                                    !!f &&
                                      (0, e.jsx)(e.Fragment, {
                                        children: (0, e.jsxs)(y.he, {
                                          toolTipContent: (0, p.we)(
                                            "#AchievementEditor_AchievementsTable_GlobalRate_Tooltip",
                                          ),
                                          style: {
                                            verticalAlign: "middle",
                                            whiteSpace: "nowrap",
                                          },
                                          children: [
                                            (0, e.jsx)(M.BA, {
                                              className: C.GlobalRateIcon,
                                            }),
                                            (0, M.Z7)(Y ?? 0),
                                          ],
                                        }),
                                      }),
                                    (0, e.jsx)(y.he, {
                                      toolTipContent: (0, e.jsx)(A.az, {
                                        background: "dull-5",
                                        padding: "2",
                                        children: (0, e.jsx)(T.or, { ...t }),
                                      }),
                                      direction: "bottom",
                                      style: {
                                        verticalAlign: "middle",
                                        whiteSpace: "nowrap",
                                      },
                                      children: (0, e.jsx)(T.C6, {
                                        hidden: !t?.visible,
                                        className: C.GroupVisibility,
                                        omitText: !0,
                                      }),
                                    }),
                                    (0, p.we)(
                                      "#AchievementEditor_AchievementsTable_Header_ID",
                                    ),
                                    ": ",
                                    B.statID,
                                    ".",
                                    B.bitID,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    k &&
                      (0, e.jsx)(re, {
                        achievement: B,
                        hideModal: () => {
                          X(!1);
                        },
                      }),
                  ],
                });
              },
              re = function (Z) {
                const { achievement: B, hideModal: fe } = Z,
                  { appID: ue } = (0, a.L3)(),
                  { existingAchievement: K, globalUnlockPercentage: f } = (0,
                  M.YZ)(B.statID, B.bitID),
                  Y = K && f > 0,
                  G = (0, a.Bx)(ue, B.statID, B.bitID),
                  i = () => G.mutate(void 0, { onSuccess: fe });
                return (0, e.jsx)(ee.EN, {
                  active: !0,
                  children: (0, e.jsx)(ee.x_, {
                    onEscKeypress: fe,
                    children: (0, e.jsxs)(c.U9, {
                      className: C.AchievementDeleteDialog,
                      children: [
                        (0, e.jsx)(c.Y9, {
                          children: (0, p.we)(
                            "#AchievementEditor_Achievement_Delete_Dialog_Title",
                          ),
                        }),
                        (0, e.jsxs)(c.nB, {
                          children: [
                            Y &&
                              (0, e.jsxs)(m.s, {
                                direction: "row",
                                gap: "1",
                                align: "center",
                                style: { color: "var(--color-error)" },
                                children: [
                                  (0, e.jsx)(M.id, {}),
                                  (0, p.we)(
                                    "#AchievementEditor_Achievement_Delete_Warn_LiveAchievement",
                                  ),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: C.AchievementBox,
                              children: [
                                (0, e.jsx)("div", {
                                  children: (0, e.jsx)(r.T, {
                                    achievement: B,
                                    achieved: !0,
                                  }),
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, p.we)(
                                              "#AchievementEditor_Achievement_Edit_ApiName",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", { children: B.name }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, p.we)(
                                              "#AchievementEditor_Achievement_Edit_DisplayName",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", {
                                          children:
                                            (0, E.ZM)(
                                              B.display?.name,
                                              "english",
                                            ) ??
                                            (0, E.ZM)(B.display?.name, "token"),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, p.we)(
                                              "#AchievementEditor_Achievement_Edit_Description",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", {
                                          children:
                                            (0, E.ZM)(
                                              B.display?.desc,
                                              "english",
                                            ) ??
                                            (0, E.ZM)(B.display?.desc, "token"),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(c.wi, {
                          children: (0, e.jsx)(M.Aj, {
                            saveText: (0, p.we)(
                              "#AchievementEditor_Achievement_Delete_Dialog_Delete",
                            ),
                            saveColor: "red",
                            pending: G.isPending,
                            error: G.error?.message,
                            onCancel: fe,
                            onSave: i,
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
              g = function (Z) {
                return (0, e.jsx)($, { bNewAchievement: !0, ...Z });
              },
              H = function (Z) {
                return (0, e.jsx)($, { bNewAchievement: !1, ...Z });
              },
              $ = function (Z) {
                const {
                    onSave: B,
                    onCancel: fe,
                    bNewAchievement: ue,
                    achievement: K,
                    groupid: f,
                  } = Z,
                  { appID: Y, cdnRoot: G } = (0, a.L3)(),
                  i = (0, a.J3)(Y) ?? [],
                  t = (0, a.Q4)(Y),
                  { globalUnlockPercentage: j } = (0, M.YZ)(
                    K?.statID,
                    K?.bitID,
                  ),
                  F = (0, a.ts)(Y),
                  k = (0, a.kb)(Y),
                  X = (0, v.useMemo)(
                    () =>
                      new Set(
                        (k ?? [])
                          .filter(
                            (Ge) =>
                              Ge.statID != K?.statID || Ge.bitID != K?.bitID,
                          )
                          .map((Ge) => Ge.name?.trim().toUpperCase()),
                      ),
                    [k, K?.statID, K?.bitID],
                  ),
                  te = (0, v.useMemo)(
                    () =>
                      (0, ye.Cm)(
                        V.YjP()
                          .refine((Ge) => Ge.trim().length > 0, {
                            error: (0, p.we)(
                              "#AchievementEditor_Achievement_Edit_ApiName_Error_Required",
                            ),
                          })
                          .refine((Ge) => !X.has(Ge.trim().toUpperCase()), {
                            error: (0, p.we)(
                              "#AchievementEditor_Achievement_Edit_ApiName_Error_Duplicate",
                            ),
                          }),
                      ),
                    [X],
                  ),
                  {
                    value: oe,
                    setValue: ge,
                    isValid: he,
                    issues: u,
                  } = (0, ye.$q)(K?.name, te, !0),
                  [o, s] = v.useState(K?.permission ?? a.yu.Client),
                  [h, S] = v.useState(K?.display?.hidden == "1"),
                  [w, D] = v.useState(K?.archived == "1"),
                  [ne, l] = v.useState(K?.groupid ?? f),
                  [x, P] = v.useState(
                    K?.display?.name ?? { token: `${oe}_NAME` },
                  ),
                  [b, ie] = v.useState(
                    K?.display?.desc ?? { token: `${oe}_DESC` },
                  ),
                  xe = t?.[K?.groupid ?? f],
                  Ye = (0, M.fw)(ne, xe),
                  Ne = (0, M.fw)(ne, t?.[ne]),
                  [Fe, we] = v.useState(K?.progress ?? void 0),
                  Se = Fe
                    ? i.find((Ge) => Ge.name == Fe.value.operand1)
                    : void 0,
                  Ve = (0, ve.E)(Se),
                  He =
                    !Fe ||
                    Ve.validator(
                      V.Ikc({
                        min_val: V.auy.number(),
                        max_val: V.auy.number(),
                      }).safeParse(Fe).data,
                    ).success,
                  Je = he && He,
                  [be, Qe] = v.useState(
                    K?.display?.icon
                      ? {
                          image: G + K?.display?.icon,
                          imageType: ce.bi,
                          filenameWithoutExtension: K?.name,
                        }
                      : void 0,
                  ),
                  [Ze, $e] = v.useState(void 0),
                  [ke, Ae] = v.useState(
                    K?.display?.icon_gray
                      ? {
                          image: G + K?.display?.icon_gray,
                          imageType: ce.bi,
                          filenameWithoutExtension: K?.name,
                        }
                      : void 0,
                  ),
                  Ce = async (Ge) => {
                    try {
                      $e(void 0),
                        Ae({
                          image: await (0, ce.I7)(Ge),
                          imageType: ce.bi,
                          filenameWithoutExtension: oe,
                        });
                    } catch {
                      $e(
                        (0, p.we)(
                          "#AchievementEditor_Image_Error_GrayscaleFailed",
                        ),
                      );
                    }
                  },
                  Te = async (Ge) => {
                    Qe(Ge), ke || (await Ce(Ge.image));
                  },
                  Le = () => Ce(be.image),
                  Re = (Ge) => {
                    if (Ge && Ge.value.operand1) {
                      we(Ge);
                      const ze = i.find((qe) => qe.name == Ge.value.operand1);
                      ze && s(ze.permission);
                    } else we(void 0), s(K?.permission ?? a.yu.Client);
                  },
                  je = (0, a.q4)(Y, ue ? null : K.statID, ue ? null : K.bitID),
                  Be = () => {
                    const Ge = oe.trim(),
                      ze = (0, M.EV)(
                        K?.display?.name?.token,
                        K?.name,
                        "name",
                        Ge,
                      ),
                      qe = (0, M.EV)(
                        K?.display?.desc?.token,
                        K?.name,
                        "desc",
                        Ge,
                      ),
                      Ue = (0, E.II)(K?.display?.name, F),
                      We = (0, E.II)(K?.display?.desc, F),
                      Ke = (0, E.II)(x, F),
                      De = (0, E.II)(b, F);
                    let Ie = {
                      ...K,
                      name: Ge,
                      groupid: ne,
                      permission: o,
                      archived: w ? "1" : "0",
                      display: {
                        ...K?.display,
                        name: { ...Ue, ...Ke, token: ze },
                        desc: { ...We, ...De, token: qe },
                        hidden: h ? "1" : "0",
                      },
                      progress: Fe,
                    };
                    je.mutate(
                      {
                        achievement: Ie,
                        icon: be?.image,
                        icon_gray: ke?.image,
                      },
                      {
                        onSuccess: () => {
                          B && B(Ie);
                        },
                      },
                    );
                  };
                let Xe;
                return (
                  ue && Ne.visible && Ne.hasprogress
                    ? (Xe = (0, e.jsx)(M.lh, {
                        text: (0, p.we)(
                          "#AchievementEditor_Group_CreateAchievement_WarnLiveGroup",
                        ),
                      }))
                    : Ye.visible && !Ne.visible && (j ?? 0) > 0
                      ? (Xe = (0, e.jsx)(M.lh, {
                          text: (0, p.we)(
                            "#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement",
                          ),
                        }))
                      : K?.groupid != f &&
                        Ne.visible &&
                        Ne.hasprogress &&
                        (Xe = (0, e.jsx)(M.lh, {
                          text: (0, p.we)(
                            "#AchievementEditor_Achievement_Edit_Group_Warn_BreakCompletion",
                          ),
                        })),
                  (0, e.jsx)("div", {
                    className: C.AchievementEditDialog,
                    children: (0, e.jsxs)("form", {
                      children: [
                        (0, e.jsx)("div", {
                          className: C.EditTitle,
                          children: (0, e.jsx)("h1", {
                            children: ue
                              ? (0, p.we)(
                                  "#AchievementEditor_Achievement_Edit_Title_New",
                                )
                              : (0, p.we)(
                                  "#AchievementEditor_Achievement_Edit_Title_Edit",
                                ),
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: C.EditContent,
                          children: [
                            (0, e.jsx)("div", {
                              style: { paddingRight: "10px" },
                              children: (0, e.jsx)("div", {
                                children: (0, e.jsxs)(N.x, {
                                  columns: "repeat(2, max-content)",
                                  gapX: "3",
                                  margin: "0",
                                  padding: "0",
                                  paddingTop: "2",
                                  children: [
                                    (0, e.jsxs)(m.s, {
                                      direction: "column",
                                      gap: "1",
                                      wrap: "wrap",
                                      width: "min-content",
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, e.jsx)(L.EY, {
                                            size: "2",
                                            children: (0, p.we)(
                                              "#AchievementEditor_Achievement_Edit_Icons_Achieved",
                                            ),
                                          }),
                                        }),
                                        (0, e.jsx)(W, {
                                          icon: be,
                                          setIcon: Te,
                                          achievement: K,
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)(m.s, {
                                      direction: "column",
                                      gap: "1",
                                      wrap: "wrap",
                                      width: "min-content",
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, e.jsx)(L.EY, {
                                            size: "2",
                                            children: (0, p.we)(
                                              "#AchievementEditor_Achievement_Edit_Icons_Unachieved",
                                            ),
                                          }),
                                        }),
                                        (0, e.jsx)(W, {
                                          icon: ke,
                                          setIcon: Ae,
                                          achievement: K,
                                        }),
                                        !!be &&
                                          (0, e.jsx)(q.$, {
                                            color: "dull",
                                            onClick: Le,
                                            children: (0, p.we)(
                                              "#AchievementEditor_Achievement_Edit_Icons_Button_Generate",
                                            ),
                                          }),
                                        !!Ze && (0, e.jsx)(M.r3, { text: Ze }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsx)(ye.WL, {
                                  label: (0, p.we)(
                                    "#AchievementEditor_Achievement_Edit_ApiName",
                                  ),
                                  placeholder: (0, p.we)(
                                    "#AchievementEditor_Achievement_Edit_ApiName_Placeholder",
                                  ),
                                  value: oe,
                                  isValid: he,
                                  setValue: ge,
                                  issues: u,
                                  autoFocus: K?.name === void 0,
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("h2", {
                                      children: [
                                        (0, p.we)(
                                          "#AchievementEditor_Achievement_Edit_SetBy",
                                        ),
                                        !!Fe &&
                                          (0, e.jsxs)(L.EY, {
                                            contrast: "description",
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: C.InlineSVG,
                                                children: (0, e.jsx)(z.c_I, {}),
                                              }),
                                              (0, p.we)(
                                                "#AchievementEditor_Achievement_Edit_SetByProgressStat",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                    Fe
                                      ? (0, e.jsx)(I.j, {
                                          disabled: !0,
                                          children: a.yu[o ?? a.yu.Client],
                                        })
                                      : (0, e.jsx)(_.l6, {
                                          options: Object.values(a.yu).filter(
                                            (Ge) => typeof Ge == "number",
                                          ),
                                          getOptionLabel: (Ge) => a.yu[Ge],
                                          selectedValue: o,
                                          onSelectionChange: (Ge) => {
                                            s(Ge ?? a.yu.Client);
                                          },
                                        }),
                                  ],
                                }),
                                (0, e.jsx)(ve.O, {
                                  appID: Y,
                                  progress: Fe,
                                  setProgress: Re,
                                  ...Ve,
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: C.LocHeader,
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, p.we)(
                                            "#AchievementEditor_Achievement_Edit_DisplayName",
                                          ),
                                        }),
                                        (0, e.jsx)(E.Mq, { locstring: x }),
                                      ],
                                    }),
                                    (0, e.jsx)(E.Pk, { value: x, setValue: P }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: C.LocHeader,
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, p.we)(
                                            "#AchievementEditor_Achievement_Edit_Description",
                                          ),
                                        }),
                                        (0, e.jsx)(E.Mq, { locstring: b }),
                                      ],
                                    }),
                                    (0, e.jsx)(E.Pk, {
                                      multiline: !0,
                                      value: b,
                                      setValue: ie,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsx)("h2", {
                                      children: (0, p.we)(
                                        "#AchievementEditor_Achievement_Edit_Group",
                                      ),
                                    }),
                                    Xe,
                                    (0, e.jsx)(M.yo, {
                                      selectedValue: ne ?? M.z0,
                                      onSelectionChange: l,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsx)("h2", {
                                      children: (0, p.we)(
                                        "#AchievementEditor_Achievement_Edit_Status",
                                      ),
                                    }),
                                    (0, e.jsxs)(m.s, {
                                      direction: "column",
                                      gap: "1",
                                      justify: "between",
                                      children: [
                                        (0, e.jsx)(y.he, {
                                          toolTipContent: (0, p.we)(
                                            "#AchievementEditor_Achievement_Edit_Spoiler_Tooltip",
                                          ),
                                          style: {
                                            verticalAlign: "middle",
                                            maxWidth: "300px",
                                            whiteSpace: "normal",
                                          },
                                          children: (0, e.jsx)(m.s, {
                                            direction: "column",
                                            flexGrow: "1",
                                            padding: "1",
                                            align: "start",
                                            className: C.Cursor,
                                            children: (0, e.jsx)(R.S, {
                                              checked: h,
                                              onChange: S,
                                              align: "start",
                                              children: (0, e.jsxs)(m.s, {
                                                direction: "column",
                                                children: [
                                                  (0, e.jsx)(L.EY, {
                                                    weight: "heavy",
                                                    children: (0, p.we)(
                                                      "#AchievementEditor_Achievement_Edit_Spoiler",
                                                    ),
                                                  }),
                                                  (0, e.jsx)(L.EY, {
                                                    children: (0, p.we)(
                                                      "#AchievementEditor_Achievement_Edit_SpoilerDesc",
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                        (0, e.jsx)(y.he, {
                                          toolTipContent: (0, p.we)(
                                            "#AchievementEditor_Achievement_Edit_Archived_Tooltip",
                                          ),
                                          style: {
                                            verticalAlign: "middle",
                                            maxWidth: "300px",
                                            whiteSpace: "normal",
                                          },
                                          children: (0, e.jsx)(m.s, {
                                            direction: "column",
                                            flexGrow: "1",
                                            padding: "1",
                                            align: "start",
                                            className: C.Cursor,
                                            children: (0, e.jsx)(R.S, {
                                              checked: w,
                                              onChange: D,
                                              align: "start",
                                              children: (0, e.jsxs)(m.s, {
                                                direction: "column",
                                                children: [
                                                  (0, e.jsx)(L.EY, {
                                                    weight: "heavy",
                                                    children: (0, p.we)(
                                                      "#AchievementEditor_Achievement_Edit_Archived",
                                                    ),
                                                  }),
                                                  (0, e.jsx)(L.EY, {
                                                    children: (0, p.we)(
                                                      "#AchievementEditor_Achievement_Edit_ArchivedDesc",
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(M.Aj, {
                          saveDisabled: !Je,
                          pending: je.isPending,
                          error: je.error?.message,
                          onSave: Be,
                          onCancel: fe,
                        }),
                      ],
                    }),
                  })
                );
              },
              W = function (Z) {
                const { icon: B, setIcon: fe, achievement: ue } = Z,
                  K = (0, v.useRef)(null),
                  [f, Y] = v.useState(void 0),
                  G = (i) => {
                    Y(void 0), fe(i);
                  };
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(ce._Q, {
                      className: C.AchievementUploadBox,
                      onUpload: G,
                      onError: Y,
                      forceSquare: !0,
                      maxDimension: se,
                      fileInputRef: K,
                      children: B
                        ? (0, e.jsx)(r.O, { image: B, size: 128 })
                        : (0, e.jsx)(r.T, {
                            achievement: ue,
                            achieved: !0,
                            size: 128,
                            showWarningOnEmpty: !1,
                          }),
                    }),
                    !!f && (0, e.jsx)(M.r3, { text: f }),
                    (0, e.jsx)(L.EY, {
                      color: "accent-7",
                      children: (0, p.we)(
                        "#AchievementEditor_Achievement_Edit_Icons_DragHelp",
                      ),
                    }),
                    (0, e.jsx)(q.$, {
                      color: "dull",
                      onClick: () => K.current.click(),
                      children: (0, p.we)(
                        "#AchievementEditor_Achievement_Edit_Icons_Button_SelectFile",
                      ),
                    }),
                  ],
                });
              };
            n.d(me, { i: () => g, p: () => ae });
            var e = n(7850),
              q = n(75083),
              m = n(68031),
              L = n(15252),
              A = n(60351),
              N = n(95994),
              _ = n(58952),
              R = n(85367),
              I = n(86946),
              V = n(30541),
              a = n(3959),
              v = n(90626),
              c = n(58534),
              ee = n(2801),
              z = n(36118),
              J = n(20525),
              y = n(71421),
              O = n(36707),
              p = n(18210),
              r = n(65678),
              C = n(15008),
              U = n.n(C),
              E = n(1421),
              ve = n(79619),
              M = n(82006),
              ce = n(50233),
              ye = n(30263),
              T = n(71693),
              de = d([V, a, r, E, ve, M, T]);
            [V, a, r, E, ve, M, T] = de.then ? (await de)() : de;
            const se = 256;
            Q();
          } catch (ae) {
            Q(ae);
          }
        });
      },
      27852: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let M = function (de) {
                const { appId: ae } = de,
                  le = (0, v.Tc)("icon_cdn_root", "application_config"),
                  [re, g] = (0, _.useState)("english"),
                  [H, $] = (0, _.useState)(""),
                  [se, W] = (0, _.useState)(!1),
                  [Z, B] = (0, _.useState)(!1),
                  fe = (0, U.On)(ae),
                  { data: ue } = (0, U.jw)(ae),
                  K = (0, N.vd)(ae),
                  f = {
                    appID: ae,
                    cdnRoot: le,
                    localization: {
                      currentLanguage: re,
                      setCurrentLanguage: g,
                    },
                    filter: H,
                    existingAchievements: fe.data,
                    existingAchievementUnlockPercentages: ue,
                  },
                  [Y, G] = (0, _.useState)(!1),
                  [i, t] = (0, _.useState)(),
                  [j, F] = (0, _.useState)(!1),
                  [k, X] = (0, _.useState)("main"),
                  te = {
                    main: {
                      label: (0, a.we)(
                        "#AchievementEditor_Tab_ManageAchievements",
                      ),
                      render: () =>
                        (0, e.jsx)(O._e, {
                          reordering: se,
                          setReordering: W,
                          creatingNewGroup: Z,
                          setCreatingNewGroup: B,
                        }),
                    },
                    bulk: {
                      label: (0, a.we)(
                        "#AchievementEditor_Tab_BulkImportExport",
                      ),
                      render: () =>
                        (0, e.jsx)(ee.V, {
                          onClose: () => X("main"),
                          setHasChanges: F,
                        }),
                    },
                  },
                  oe = (ge) => {
                    k == "bulk" && j ? (t(ge), G(!0)) : X(ge);
                  };
                return (0, e.jsxs)(N.aR, {
                  value: f,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, V.A)(
                        z.EditorContainer,
                        "noOpinionatedGlobalStyles",
                      ),
                      children: [
                        (0, e.jsx)(T, {}),
                        (0, e.jsx)(ce, {
                          options: Object.keys(te),
                          getOptionLabel: (ge) => te[ge].label,
                          selectedOption: k,
                          onChange: oe,
                        }),
                        k == "main" &&
                          (0, e.jsx)(ye, {
                            filter: H,
                            setFilter: $,
                            showFilter: k == "main",
                            reordering: se,
                            setReordering: W,
                            showReorder: k == "main",
                            creatingNewGroup: Z,
                            setCreatingNewGroup: B,
                            showCreateNewGroup: k == "main",
                          }),
                        te[k].render(),
                      ],
                    }),
                    Y &&
                      (0, e.jsx)(r.TM, {
                        onCancel: () => G(!1),
                        onOk: () => {
                          G(!1), F(!1), X(i), t(void 0);
                        },
                        okText: (0, a.we)("#Button_Confirm"),
                        children: (0, a.we)(
                          "#AchievementEditor_TabBar_BulkUnsavedConfirm",
                        ),
                      }),
                  ],
                });
              },
              ce = function (de) {
                const {
                  options: ae,
                  getOptionLabel: le,
                  selectedOption: re,
                  onChange: g,
                } = de;
                return (0, e.jsx)("div", {
                  className: z.TabBar,
                  children: ae.map((H) =>
                    H == re
                      ? (0, e.jsx)(
                          "div",
                          { className: z.Selected, children: le ? le(H) : H },
                          H,
                        )
                      : (0, e.jsx)(
                          "div",
                          { onClick: () => g(H), children: le ? le(H) : H },
                          H,
                        ),
                  ),
                });
              },
              ye = function (de) {
                const {
                    filter: ae,
                    setFilter: le,
                    showFilter: re,
                    reordering: g,
                    setReordering: H,
                    showReorder: $,
                    creatingNewGroup: se,
                    setCreatingNewGroup: W,
                    showCreateNewGroup: Z,
                  } = de,
                  B = (0, p.DG)(),
                  fe = Object.values(B).every((f) => f.set == f.total),
                  [ue, K] = (0, _.useState)(!1);
                return (0, e.jsxs)("div", {
                  className: z.Toolbar,
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        re &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)("h3", {
                              children: (0, a.we)(
                                "#AchievementEditor_Toolbar_Filter_Title",
                              ),
                            }),
                          }),
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)("h3", {
                            children: (0, e.jsxs)(q.s, {
                              direction: "row",
                              gap: "1",
                              align: "center",
                              children: [
                                (0, a.we)("#LanguageTitle"),
                                !fe &&
                                  (0, e.jsx)(E.he, {
                                    toolTipContent: (0, a.we)(
                                      "#AchievementEditor_Toolbar_Localization_WarnIncomplete",
                                    ),
                                    style: { height: "1.2em" },
                                    children: (0, e.jsx)(r.id, {
                                      color: "var(--color-warning)",
                                    }),
                                  }),
                                (0, e.jsx)(E.he, {
                                  toolTipContent: (0, a.we)(
                                    "#AchievementEditor_Toolbar_Localization_Edit",
                                  ),
                                  style: { height: "1.2em" },
                                  children: (0, e.jsx)(r.lg, {
                                    onClick: () => K(!0),
                                    className: z.LanguageEditButton,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, e.jsx)("div", {}),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        re &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)(m.k, {
                              variant: "inset",
                              placeholder: (0, a.we)(
                                "#AchievementEditor_Toolbar_Filter_Placeholder",
                              ),
                              value: ae,
                              onTextChange: le,
                              clearable: !0,
                            }),
                          }),
                        (0, e.jsx)("div", { children: (0, e.jsx)(p.Mq, {}) }),
                        (0, e.jsxs)(q.s, {
                          direction: "row",
                          gap: "3",
                          justify: "end",
                          children: [
                            Z &&
                              !se &&
                              (0, e.jsx)(E.he, {
                                toolTipContent: (0, a.we)(
                                  "#AchievementEditor_Button_CreateNewGroup_Tooltip",
                                ),
                                style: {
                                  verticalAlign: "middle",
                                  maxWidth: "300px",
                                  whiteSpace: "normal",
                                },
                                children: (0, e.jsxs)(L.$, {
                                  variant: "vibrant",
                                  disabled: g,
                                  onClick: () => W(!0),
                                  children: [
                                    (0, e.jsx)(y.OMN, {
                                      width: "14",
                                      height: "14",
                                      fill: "currentColor",
                                      className: z.ButtonIcon,
                                    }),
                                    " ",
                                    (0, a.we)(
                                      "#AchievementEditor_Button_CreateNewGroup",
                                    ),
                                  ],
                                }),
                              }),
                            $ &&
                              !g &&
                              (0, e.jsx)(E.he, {
                                toolTipContent: (0, a.we)(
                                  "#AchievementEditor_Reorder_Description",
                                ),
                                style: {
                                  verticalAlign: "middle",
                                  maxWidth: "300px",
                                  whiteSpace: "normal",
                                },
                                children: (0, e.jsx)(r.mc, {
                                  onClick: () => H(!0),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    ue && (0, e.jsx)(p.Jt, { onClose: () => K(!1) }),
                  ],
                });
              },
              T = function (de) {
                const { appID: ae } = (0, N.L3)(),
                  le = C.iA.steamid,
                  re = `${c.TS.COMMUNITY_BASE_URL}profiles/${le}/achievements/${ae}`,
                  g = `${c.TS.PARTNER_BASE_URL}doc/features/achievements`,
                  H = `${g}#5`,
                  $ = (0, N.Rz)(ae),
                  se = (0, N.kb)(ae)?.length ?? 0,
                  W = (0, N.GV)(ae);
                return (0, e.jsxs)("div", {
                  className: z.HeaderContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: I().AdminHeader,
                      children: (0, e.jsxs)("div", {
                        className: I().PageTitleFlexCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: I().PageTitle,
                            children: (0, a.we)("#AchievementEditor_title"),
                          }),
                          (0, e.jsx)(A.Y, {
                            href: g,
                            children: (0, a.we)(
                              "#AssetRequest_General_SeeDocs",
                            ),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: z.Instructions,
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Overview",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.we)(
                                "#AchievementEditor_Description_Overview",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Requirements",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: z.Important,
                              children: (0, a.oW)(
                                "#AchievementEditor_Description_Requirements",
                                (0, e.jsx)("a", {
                                  href: "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B",
                                }),
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Design",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.we)(
                                "#AchievementEditor_Description_Design",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Header_GroupList",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.we)(
                                "#AchievementEditor_Description_GroupList",
                              ),
                            }),
                          ],
                        }),
                        !!$ &&
                          (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, a.we)(
                                    "#AchievementEditor_Description_Title_Limit",
                                  ),
                                  ":",
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, a.we)(
                                    "#AchievementEditor_Description_Limit",
                                    se,
                                    $.max_achievements,
                                  ),
                                  !$.vetted &&
                                    (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        " ",
                                        (0, a.uH)(
                                          (0, a.we)(
                                            "#AchievementEditor_Description_Limit_Unvetted",
                                            $.max_achievements,
                                          ),
                                          (0, e.jsx)("a", { href: H }),
                                        ),
                                      ],
                                    }),
                                  " ",
                                  (0, a.we)(
                                    "#AchievementEditor_Description_Limit_Groups",
                                    W,
                                    $.max_groups,
                                  ),
                                ],
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Testing",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.oW)(
                                "#AchievementEditor_Description_Testing",
                                (0, e.jsx)("a", { href: re }),
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, a.we)(
                                  "#AchievementEditor_Description_Title_Releasing",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, a.oW)(
                                "#AchievementEditor_Description_Releasing",
                                (0, e.jsx)("a", {
                                  href: `${c.TS.PARTNER_BASE_URL}admin/game/editbyappid/${ae}?activetab=tab_basic#feature_section`,
                                }),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              };
            n.r(me), n.d(me, { default: () => M });
            var e = n(7850),
              q = n(68031),
              m = n(7125),
              L = n(75083),
              A = n(86336),
              N = n(3959),
              _ = n(90626),
              R = n(45737),
              I = n.n(R),
              V = n(36707),
              a = n(18210),
              v = n(3166),
              c = n(98609),
              ee = n(45037),
              z = n(5088),
              J = n.n(z),
              y = n(249),
              O = n(71693),
              p = n(1421),
              r = n(82006),
              C = n(72609),
              U = n(24541),
              E = n(71421),
              ve = d([N, ee, O, p, r]);
            ([N, ee, O, p, r] = ve.then ? (await ve)() : ve), Q();
          } catch (M) {
            Q(M);
          }
        });
      },
      71693: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let M = function (i, t, j) {
                if (!t) return { included: i, excluded: [] };
                const F = t.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&"),
                  k = new RegExp(`.*${F ?? ""}.*`, "i"),
                  X = (te) => {
                    const oe = (0, U.ZM)(te.display?.name, j ?? "english"),
                      ge = (0, U.ZM)(te.display?.desc, j ?? "english");
                    return (
                      !F ||
                      F === "" ||
                      !!te.name.match(k) ||
                      !!oe?.match(k) ||
                      !!ge?.match(k)
                    );
                  };
                return (i ?? []).reduce(
                  (te, oe) => (
                    X(oe) ? te.included.push(oe) : te.excluded.push(oe), te
                  ),
                  { included: [], excluded: [] },
                );
              },
              ce = function (i) {
                const {
                    reordering: t,
                    setReordering: j,
                    creatingNewGroup: F,
                    setCreatingNewGroup: k,
                  } = i,
                  { appID: X } = (0, V.L3)(),
                  te = (0, V.kb)(X),
                  oe = (0, V.FM)(X),
                  ge = (0, V.JI)(X);
                return t
                  ? (0, e.jsx)("div", {
                      children: (0, e.jsxs)("div", {
                        className: r.GroupList,
                        children: [
                          (0, e.jsx)("div", {
                            className: r.GroupReorderDescription,
                            children: (0, y.we)(
                              "#AchievementEditor_Reorder_Description",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: r.SortDefaultGroup,
                            children: [
                              (0, e.jsx)(de, { groupid: null, group: null }),
                              (0, e.jsx)("div", {
                                className: r.OverlayContent,
                                children: (0, e.jsx)("h2", {
                                  children: (0, y.we)(
                                    "#AchievementEditor_Reorder_NotDefault",
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, e.jsx)(ye, {
                            groups: oe,
                            onSave: () => j(!1),
                            onCancel: () => j(!1),
                          }),
                        ],
                      }),
                    })
                  : (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsxs)("div", {
                          className: r.GroupList,
                          children: [
                            !!te &&
                              (0, e.jsx)(T, { groupid: null, group: null }),
                            !!oe &&
                              oe.map((he) =>
                                (0, e.jsx)(
                                  T,
                                  { groupid: he.groupid, group: he },
                                  he.groupid,
                                ),
                              ),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          children: F
                            ? (0, e.jsx)(
                                T,
                                {
                                  groupid: "",
                                  group: null,
                                  bNewGroup: !0,
                                  onSave: () => k(!1),
                                  onCancel: () => k(!1),
                                },
                                "kg_newgroup",
                              )
                            : !t &&
                              (0, e.jsxs)(m.s, {
                                direction: "row",
                                gap: "2",
                                align: "center",
                                children: [
                                  (0, e.jsxs)(L.$, {
                                    variant: "vibrant",
                                    disabled: !ge,
                                    onClick: () => k(!0),
                                    children: [
                                      (0, e.jsx)(c.OMN, {
                                        width: "14",
                                        height: "14",
                                        fill: "currentColor",
                                        className: r.Icon,
                                      }),
                                      " ",
                                      (0, y.we)(
                                        "#AchievementEditor_Button_CreateNewGroup",
                                      ),
                                    ],
                                  }),
                                  !ge &&
                                    (0, e.jsx)(A.EY, {
                                      contrast: "description",
                                      children: (0, y.we)(
                                        "#AchievementEditor_Group_LimitReached",
                                      ),
                                    }),
                                ],
                              }),
                        }),
                      ],
                    });
              },
              ye = function (i) {
                const { groups: t, onSave: j, onCancel: F } = i,
                  { appID: k } = (0, V.L3)(),
                  [X, te] = a.useState(t),
                  oe = (0, V.iF)(k),
                  ge = () =>
                    oe.mutate(
                      X.map((u) => u.groupid),
                      { onSuccess: j },
                    ),
                  he = function (u) {
                    if (!u.destination) return;
                    let o = [...X];
                    const [s] = o.splice(u.source.index, 1);
                    o.splice(u.destination.index, 0, s), te(o);
                  };
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(q.JY, {
                      onDragEnd: he,
                      children: (0, e.jsx)(q.gL, {
                        droppableId: "droppable",
                        isDropDisabled: !1,
                        isCombineEnabled: !1,
                        ignoreContainerClipping: !1,
                        direction: "vertical",
                        children: (u) =>
                          (0, e.jsxs)("div", {
                            className: r.GroupSorter,
                            ...u.droppableProps,
                            ref: u.innerRef,
                            children: [
                              X.map((o, s) =>
                                (0, e.jsx)(
                                  q.sx,
                                  {
                                    draggableId: o.groupid,
                                    index: s,
                                    children: (h) =>
                                      (0, e.jsx)(de, {
                                        groupid: o.groupid,
                                        group: o,
                                        ref: h?.innerRef,
                                        ...h?.draggableProps,
                                        ...h?.dragHandleProps,
                                      }),
                                  },
                                  o.groupid,
                                ),
                              ),
                              u.placeholder,
                            ],
                          }),
                      }),
                    }),
                    (0, e.jsx)(E.Aj, {
                      pending: oe.isPending,
                      error: oe.error?.message,
                      onSave: ge,
                      onCancel: F,
                    }),
                  ],
                });
              },
              T = function (i) {
                const {
                    groupid: t,
                    group: j,
                    bNewGroup: F,
                    onSave: k,
                    onCancel: X,
                  } = i,
                  { appID: te, filter: oe, localization: ge } = (0, V.L3)(),
                  { currentLanguage: he } = ge,
                  u = (0, V.FK)(te, t),
                  o = (0, E.fw)(t, j),
                  s = (0, E.$P)(),
                  h =
                    o.visible &&
                    Object.values(s ?? {}).some(
                      (Se) => (Se.globalUnlockPercentage ?? 0) > 0,
                    ),
                  [S, w] = a.useState(F),
                  [D, ne] = a.useState(!1),
                  [l, x] = a.useState(!1),
                  [P, b] = a.useState(!1),
                  [ie, xe] = a.useState(!1),
                  Ye = l
                    ? void 0
                    : [
                        {
                          key: "edit",
                          label: (0, y.we)(
                            "#AchievementEditor_Group_Tools_Edit",
                          ),
                          icon: () => (0, e.jsx)(z.ffu, {}),
                          action: () => w(!0),
                        },
                        {
                          key: "delete",
                          label: (0, y.we)(
                            "#AchievementEditor_Group_Tools_Delete",
                          ),
                          icon: () => (0, e.jsx)(z.X, {}),
                          action: () => ne(!0),
                        },
                      ].filter((Se) =>
                        Se.key == "edit" || Se.key == "delete" ? !!t : !0,
                      ),
                  Ne = async () => {
                    w(!1), k && k();
                  },
                  Fe = () => {
                    w(!1), X && X();
                  };
                let we = (0, e.jsx)(L.$, {
                  variant: "vibrant",
                  onClick: () => b(!0),
                  children: (0, e.jsxs)(m.s, {
                    children: [
                      (0, e.jsx)(c.OMN, {
                        width: "14",
                        height: "14",
                        fill: "currentColor",
                        className: r.Icon,
                      }),
                      " ",
                      (0, y.we)("#AchievementEditor_Group_CreateAchievement"),
                    ],
                  }),
                });
                return (
                  h &&
                    (we = (0, e.jsxs)(m.s, {
                      direction: "row",
                      gap: "2",
                      align: "center",
                      children: [
                        we,
                        (0, e.jsxs)(m.s, {
                          align: "center",
                          gap: "1",
                          children: [
                            (0, e.jsx)(E.id, { color: "var(--color-amber-9)" }),
                            (0, e.jsxs)(A.EY, {
                              color: "amber-9",
                              children: [
                                " ",
                                (0, y.we)(
                                  "#AchievementEditor_Group_CreateAchievement_WarnLiveGroup",
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })),
                  S
                    ? F
                      ? (0, e.jsx)(B, { onSave: Ne, onCancel: Fe })
                      : (0, e.jsx)(fe, {
                          groupid: t,
                          group: j,
                          onSave: Ne,
                          onCancel: Fe,
                        })
                    : (0, e.jsxs)(le, {
                        groupid: t,
                        group: j,
                        actions: Ye,
                        collapsed: ie,
                        setCollapsed: xe,
                        children: [
                          !ie &&
                            (0, e.jsx)("div", {
                              className: r.AchievementsFullDisplay,
                              children: l
                                ? (0, e.jsx)(H, {
                                    groupid: t,
                                    achievements: u,
                                    filter: oe,
                                    currentLanguage: he,
                                    onClose: () => x(!1),
                                  })
                                : (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsx)(g, {
                                        achievements: u,
                                        filter: oe,
                                        currentLanguage: he,
                                        setBulkMove: () => x(!0),
                                      }),
                                      (0, e.jsx)("div", {
                                        children: P
                                          ? (0, e.jsx)(p.i, {
                                              achievement: null,
                                              groupid: t,
                                              onSave: (Se) => b(!1),
                                              onCancel: () => b(!1),
                                            })
                                          : we,
                                      }),
                                    ],
                                  }),
                            }),
                          D &&
                            (0, e.jsx)(G, {
                              groupid: t,
                              group: j,
                              hideModal: () => {
                                ne(!1);
                              },
                            }),
                        ],
                      })
                );
              },
              de = function (i) {
                const { className: t, ...j } = i;
                return (0, e.jsx)(le, {
                  className: (0, J.A)(r.CompactGroupContainer, t),
                  ...j,
                });
              },
              ae = function (i) {
                return `group-${i}`;
              },
              le = function (i) {
                const {
                    groupid: t,
                    group: j,
                    actions: F,
                    children: k,
                    className: X,
                    collapsed: te,
                    setCollapsed: oe,
                    ...ge
                  } = i,
                  u = (0, E.fw)(t, j).visible ? r.Released : r.Unreleased;
                return (0, e.jsx)("div", {
                  id: ae(t),
                  className: (0, J.A)(r.Group, X, u),
                  ...ge,
                  children: (0, e.jsxs)("div", {
                    className: r.GroupDisplay,
                    children: [
                      (0, e.jsx)(re, {
                        groupid: t,
                        group: j,
                        actions: F,
                        collapsed: te,
                        setCollapsed: oe,
                      }),
                      k,
                    ],
                  }),
                });
              },
              re = function (i) {
                const {
                    groupid: t,
                    group: j,
                    actions: F,
                    collapsed: k,
                    setCollapsed: X,
                  } = i,
                  te = (0, E.fw)(t, j);
                return (0, e.jsxs)("div", {
                  className: r.GroupHeader,
                  children: [
                    (0, e.jsx)(se, { ...te }),
                    (0, e.jsxs)("div", {
                      className: r.GroupHeaderContent,
                      children: [
                        !t &&
                          (0, e.jsxs)("div", {
                            className: r.CoreGroup,
                            children: [
                              (0, e.jsx)("h1", {
                                children: (0, y.we)(
                                  "#AchievementEditor_Group_CoreGameAchievements_Heading",
                                ),
                              }),
                              (0, e.jsx)("p", {
                                children: (0, y.we)(
                                  "#AchievementEditor_Group_CoreGameAchievements_Description",
                                ),
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          className: r.GroupData,
                          children: [
                            !!t &&
                              (0, e.jsx)("div", {
                                children: (0, e.jsx)("h2", {
                                  children: (0, e.jsx)(U.VU, {
                                    text: j?.name,
                                    missingStringLocToken:
                                      "#AchievementEditor_Group_MissingName",
                                  }),
                                }),
                              }),
                            (0, e.jsx)(Z, { ...te }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: r.EditButtons,
                      children: [
                        (0, e.jsxs)(m.s, {
                          direction: "row",
                          gap: "3",
                          children: [
                            !!F &&
                              F.length > 0 &&
                              (0, e.jsx)($, { actions: F }),
                            k !== void 0 &&
                              X &&
                              (0, e.jsx)(N.az, {
                                className: r.CollapseButton,
                                onClick: () => X(!k),
                                children: (0, e.jsx)(z.F2T, {
                                  fill: "currentColor",
                                  angle: k ? 0 : -90,
                                }),
                              }),
                          ],
                        }),
                        !!t &&
                          (0, e.jsxs)("div", {
                            className: r.IDText,
                            children: ["ID: ", t],
                          }),
                      ],
                    }),
                  ],
                });
              },
              g = function (i) {
                const {
                    achievements: t,
                    filter: j,
                    currentLanguage: F,
                    setBulkMove: k,
                  } = i,
                  X = M(t, j, F);
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    X.included.length > 0 &&
                      (0, e.jsx)(p.p, {
                        achievements: X.included,
                        setBulkMove: k,
                      }),
                    X.excluded.length > 0 &&
                      (0, e.jsxs)("div", {
                        className: r.FilterFooter,
                        children: [
                          (0, e.jsx)(z.dJT, {}),
                          (0, y.Yp)(
                            "#AchievementEditor_Group_Filtered_Achievements",
                            X.excluded.length,
                          ),
                        ],
                      }),
                    (!t || t.length == 0) &&
                      (0, e.jsx)("div", {
                        className: r.Empty,
                        children: (0, y.we)(
                          "#AchievementEditor_Group_EmptyGroup_Description",
                        ),
                      }),
                  ],
                });
              },
              H = function (i) {
                const {
                    groupid: t,
                    onClose: j,
                    achievements: F,
                    filter: k,
                    currentLanguage: X,
                  } = i,
                  { appID: te } = (0, V.L3)(),
                  oe = M(F, k, X),
                  [ge, he] = (0, a.useState)(void 0),
                  [u, o] = (0, a.useState)([]),
                  s = (0, V.Q4)(te) || {},
                  h = (0, V.JI)(te);
                let S = new Set(u);
                const w = ge === E.Gl,
                  D = ue(void 0, void 0, !0),
                  ne = s[t],
                  l = s[ge],
                  x = (0, E.fw)(t, ne);
                let P = (0, E.fw)(ge, l);
                w && (P = D.visibility);
                let b;
                x.visible && !P.visible
                  ? (b = (0, e.jsx)(E.lh, {
                      text: (0, y.we)(
                        "#AchievementEditor_Group_MoveAchievements_Warn_HidingAchievements",
                      ),
                    }))
                  : ne?.dlcappid != (w ? D.editAppID : l?.dlcappid) &&
                    P.visible &&
                    P.hasprogress &&
                    (b = (0, e.jsx)(E.lh, {
                      text: (0, y.we)(
                        "#AchievementEditor_Group_MoveAchievements_Warn_BreakCompletion",
                      ),
                    }));
                const [ie, xe] = a.useState(oe.included.length == u.length),
                  Ye = (0, V.zG)(te),
                  Ne = (Se, Ve) => {
                    Ve ? S.add(Se) : S.delete(Se), o([...S]);
                    const He = S.size == oe.included.length;
                    (S.size == oe.included.length) != ie && xe(!ie);
                  },
                  Fe = (Se) => {
                    for (const Ve of oe.included) {
                      const He = (0, V.nf)(Ve);
                      Se ? S.add(He) : S.delete(He);
                    }
                    o([...S]), xe(Se);
                  },
                  we = async () => {
                    try {
                      const Se = w ? await D.save() : ge,
                        Ve = {
                          groupid: Se,
                          api_names: F.filter((He) => S.has((0, V.nf)(He))).map(
                            (He) => He.name,
                          ),
                        };
                      await Ye.mutateAsync(Ve),
                        setTimeout(() => {
                          document
                            .getElementById(ae(Se))
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "nearest",
                            });
                        }, 200),
                        j();
                    } catch {}
                  };
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    oe.included.length > 0 &&
                      (0, e.jsx)(p.p, {
                        achievements: oe.included,
                        compact: !0,
                        editable: !1,
                        headerContentBefore: () =>
                          (0, e.jsx)("div", {
                            className: r.MoveAchievementCheckbox,
                            children: (0, e.jsx)(_.S, {
                              checked: ie,
                              onChange: Fe,
                            }),
                          }),
                        contentBefore: (Se) => {
                          const Ve = (0, V.nf)(Se);
                          return (0, e.jsx)("div", {
                            className: r.MoveAchievementCheckbox,
                            children: (0, e.jsx)(_.S, {
                              checked: S.has(Ve),
                              onChange: (He) => Ne(Ve, He),
                            }),
                          });
                        },
                      }),
                    oe.excluded.length > 0 &&
                      (0, e.jsxs)("div", {
                        className: r.FilterFooter,
                        children: [
                          (0, e.jsx)(z.dJT, {}),
                          (0, y.Yp)(
                            "#AchievementEditor_Group_Filtered_Achievements",
                            oe.excluded.length,
                          ),
                        ],
                      }),
                    (!F || F.length == 0) &&
                      (0, e.jsx)("div", {
                        className: r.Empty,
                        children: (0, y.we)(
                          "#AchievementEditor_Group_EmptyGroup_Description",
                        ),
                      }),
                    (0, e.jsxs)(m.s, {
                      direction: w ? "column" : "row",
                      justify: w ? void 0 : "between",
                      align: w ? void 0 : "end",
                      gap: "1",
                      className: r.MoveFooter,
                      children: [
                        (0, e.jsxs)(m.s, {
                          direction: "column",
                          gap: "1",
                          children: [
                            (0, y.we)(
                              "#AchievementEditor_Group_MoveAchievements_GroupSelect_Label",
                              S.size,
                            ),
                            ":",
                            (0, e.jsx)(m.s, {
                              direction: "column",
                              align: "baseline",
                              gap: "1",
                              children: (0, e.jsx)(E.yo, {
                                variant: "inset",
                                selectedValue: ge,
                                filter: (0, E.zy)(t),
                                onSelectionChange: he,
                                allowCreate: h,
                              }),
                            }),
                            w &&
                              (0, e.jsx)(Y, {
                                bHideSaveCancelButtons: !0,
                                onCancel: () => {},
                                onSave: () => {},
                                state: D,
                              }),
                          ],
                        }),
                        (0, e.jsxs)(m.s, {
                          direction: "row",
                          gap: "1",
                          justify: "end",
                          children: [
                            b,
                            (0, e.jsx)(E.VZ, {
                              saveDisabled: u.length == 0 || ge == null,
                              saveText: (0, y.we)(
                                "#AchievementEditor_Group_MoveAchievements_MoveButton",
                              ),
                              onCancel: j,
                              onSave: we,
                              pending: Ye.isPending || D.isPending,
                              error: Ye.error?.message ?? D.error,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              },
              $ = function (i) {
                const { actions: t } = i,
                  j = (0, R.WM)({
                    rgOptions: t.map((F, k) => k),
                    selectedValue: void 0,
                    onSelectionChange: (F) => {
                      F !== void 0 && t[F].action();
                    },
                  });
                return (0, e.jsxs)(R.l6.Root, {
                  state: j,
                  children: [
                    (0, e.jsx)(R.l6.Trigger, {
                      render: (F) =>
                        (0, e.jsxs)("div", {
                          className: (0, J.A)(r.EditButton),
                          ...F,
                          children: [
                            (0, y.we)("#AchievementEditor_Options"),
                            "\xA0",
                            (0, e.jsx)("div", {
                              className: (0, J.A)(
                                r.SmallIconButton,
                                r.OptionsSVG,
                              ),
                              children: (0, e.jsx)(z.GB9, {}),
                            }),
                          ],
                        }),
                    }),
                    (0, e.jsx)(R.l6.Options, {
                      children: t.map((F, k) =>
                        (0, e.jsx)(
                          R.l6.Option,
                          {
                            value: k,
                            children: (0, e.jsxs)("div", {
                              className: r.SelectIconOption,
                              children: [F?.icon(), F.label],
                            }),
                          },
                          k,
                        ),
                      ),
                    }),
                  ],
                });
              },
              se = function (i) {
                const { app: t, baseApp: j } = i,
                  { type: F, releasestate: k, name: X } = t || {},
                  te = t?.image || j?.image,
                  oe = {
                    ...t,
                    appid: t?.appid ? parseInt(t.appid) : 0,
                    releasestate: k,
                  };
                return (0, e.jsxs)("div", {
                  className: r.AppTile,
                  children: [
                    (0, e.jsx)("div", {
                      className: r.AppTileImage,
                      children: te
                        ? (0, e.jsx)("img", { src: te })
                        : (0, e.jsx)("div", { children: X }),
                    }),
                    F && k && (0, e.jsx)(O.b, { app: oe }),
                  ],
                });
              },
              W = function (i) {
                const { hidden: t, className: j, omitText: F = !1 } = i;
                return (0, e.jsx)("div", {
                  className: (0, J.A)(
                    r.GroupVisibilitySummary,
                    t ? r.UnreleasedText : r.ReleasedText,
                    j,
                  ),
                  children: t
                    ? (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(c.ZyV, {}),
                          !F &&
                            (0, y.we)(
                              "#AchievementEditor_Group_Field_Visibility_Value_Hidden",
                            ),
                        ],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(c.rxV, {}),
                          !F &&
                            (0, y.we)(
                              "#AchievementEditor_Group_Field_Visibility_Value_Visible",
                            ),
                        ],
                      }),
                });
              },
              Z = function (i) {
                const {
                    archived: t,
                    developeronly: j,
                    app: F,
                    baseApp: k,
                    noStorePage: X,
                    notDLCOfApp: te,
                    dlcappid: oe,
                  } = i,
                  ge = t || j || !F?.is_released_somewhere,
                  he = (0, J.A)(r.Unreleased, r.Label);
                return (0, e.jsxs)("div", {
                  className: r.GroupVisibilityInfo,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, J.A)(
                        r.GroupVisibilitySummary,
                        ge ? r.UnreleasedText : r.ReleasedText,
                      ),
                      children: (0, e.jsx)(W, { hidden: ge }),
                    }),
                    ge &&
                      (0, e.jsxs)("div", {
                        className: r.GroupVisibilityLabels,
                        children: [
                          !F?.is_released_somewhere &&
                            (0, e.jsx)("div", {
                              className: he,
                              children: (0, y.PP)(
                                "#AchievementEditor_Group_Field_Restrictions_Value_OwnersReleaseStatus",
                                (0, e.jsx)("strong", {
                                  children: F?.name ?? "",
                                }),
                                (0, y.we)(
                                  "#AchievementEditor_Group_Field_Restrictions_App_Unreleased",
                                ),
                              ),
                            }),
                          t &&
                            (0, e.jsxs)("div", {
                              className: he,
                              children: [
                                (0, e.jsx)(z.KVe, {}),
                                " ",
                                (0, y.we)(
                                  "#AchievementEditor_Group_Field_IsArchived",
                                ),
                                " ",
                                (0, e.jsx)(E.NT, {
                                  helpText:
                                    "#AchievementEditor_Group_Tooltip_Archived",
                                }),
                              ],
                            }),
                          j &&
                            (0, e.jsxs)("div", {
                              className: he,
                              children: [
                                (0, e.jsx)(c.bmT, {}),
                                " ",
                                (0, y.we)(
                                  "#AchievementEditor_Group_Field_DeveloperOnly",
                                ),
                                " ",
                                (0, e.jsx)(E.NT, {
                                  helpText:
                                    "#AchievementEditor_Group_Tooltip_DeveloperOnly",
                                }),
                              ],
                            }),
                        ],
                      }),
                    X &&
                      (0, e.jsx)(E.lh, {
                        text: (0, y.we)(
                          "#AchievementEditor_Group_Warn_NoStorePage",
                          F?.name ?? "",
                          k?.name ?? "",
                        ),
                      }),
                    te &&
                      (0, e.jsx)(E.lh, {
                        text: (0, y.we)(
                          "#AchievementEditor_Group_Warn_NotDLCOfApp",
                          oe ?? "",
                          k?.name ?? "",
                        ),
                      }),
                  ],
                });
              },
              B = function (i) {
                return (0, e.jsx)(K, { bNewGroup: !0, ...i });
              },
              fe = function (i) {
                return (0, e.jsx)(K, { bNewGroup: !1, ...i });
              },
              ue = function (i, t, j) {
                const { appID: F } = (0, V.L3)(),
                  [k, X] = a.useState(t?.name ?? {}),
                  [te, oe] = a.useState(t?.dlcappid),
                  [ge, he] = a.useState(t?.archived == "1"),
                  [u, o] = a.useState(j || t?.developeronly == "1"),
                  s = (0, a.useMemo)(
                    () => ({
                      ...t,
                      name: k,
                      dlcappid: te,
                      archived: ge ? "1" : "0",
                      developeronly: u ? "1" : "0",
                    }),
                    [k, te, ge, u, t],
                  ),
                  h = (0, V.mb)(F, j ? "0" : i),
                  S = (0, E.fw)(i, s),
                  w = () => {
                    X(t?.name),
                      oe(t?.dlcappid),
                      he(t?.archived == "1"),
                      o(j || t?.developeronly == "1");
                  },
                  D = async () => await h.mutateAsync(s),
                  ne = h.isPending;
                return {
                  editGroupName: k,
                  setEditGroupName: X,
                  editAppID: te,
                  setEditAppID: oe,
                  editIsArchived: ge,
                  setEditIsArchived: he,
                  editDeveloperOnly: u,
                  setEditDeveloperOnly: o,
                  isNewGroup: j ?? !1,
                  visibility: S,
                  reset: w,
                  save: D,
                  isPending: ne,
                  error: h.error?.message,
                };
              },
              K = function (i) {
                const { groupid: t, group: j, bNewGroup: F } = i,
                  k = ue(t, j, F),
                  X = (0, a.useRef)(null);
                return (
                  (0, a.useEffect)(() => {
                    X?.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                    });
                  }, []),
                  (0, e.jsx)(Y, { ref: X, ...i, state: k })
                );
              },
              f = function (i) {
                const { value: t, setValue: j } = i,
                  { appID: F } = (0, V.L3)(),
                  k = (0, V.sJ)(F),
                  X = (0, a.useMemo)(
                    () => new Map(k.map((he) => [he.appid, he.name])),
                    [k],
                  ),
                  te = (0, a.useCallback)(
                    (he) =>
                      (he ?? "0") == "0"
                        ? `(${F}) ${(0, y.we)("#AchievementEditor_Group_Field_Restrictions_Value_AllPlayers")}`
                        : `(${he}) ${X.get(he)}`,
                    [X, F],
                  ),
                  oe = Array.from(
                    new Set(
                      k
                        .sort((he, u) =>
                          (he.name ?? "").localeCompare(u.name ?? ""),
                        )
                        .map((he) => he.appid),
                    ),
                  ),
                  ge = ["0"].concat(oe);
                return k.length < 20
                  ? (0, e.jsx)(R.l6, {
                      options: ge,
                      getOptionLabel: te,
                      selectedValue: t ?? "0",
                      onSelectionChange: j,
                    })
                  : (0, e.jsx)(I.G3, {
                      options: ge,
                      getOptionLabel: te,
                      selectedValue: t ?? "0",
                      onSelectionChange: j,
                      placeholder: "",
                      filterPlaceholder: "",
                    });
              },
              Y = function (i) {
                const {
                    state: t,
                    groupid: j,
                    bHideSaveCancelButtons: F,
                    onSave: k,
                    onCancel: X,
                    ref: te,
                  } = i,
                  { appID: oe } = (0, V.L3)(),
                  ge = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
                  ge?.current?.focus();
                }, []);
                const {
                    editGroupName: he,
                    setEditGroupName: u,
                    editAppID: o,
                    setEditAppID: s,
                    editIsArchived: h,
                    setEditIsArchived: S,
                    editDeveloperOnly: w,
                    setEditDeveloperOnly: D,
                    isNewGroup: ne,
                    visibility: l,
                    isPending: x,
                  } = t,
                  P = t.editAppID !== void 0,
                  b = async () => {
                    try {
                      await t.save(), k && k();
                    } catch {}
                  },
                  ie = () => {
                    t.reset(), X && X();
                  },
                  xe = l.visible ? r.Released : r.Unreleased;
                return (0, e.jsxs)("div", {
                  ref: te,
                  className: (0, J.A)(r.Group, r.Editing, xe),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, J.A)(r.ReleaseStatusBar, xe),
                    }),
                    (0, e.jsx)("div", {
                      className: r.GroupDisplay,
                      children: (0, e.jsx)("div", {
                        className: r.GroupHeader,
                        children: (0, e.jsxs)("div", {
                          className: r.GroupHeaderContent,
                          children: [
                            !j &&
                              !ne &&
                              (0, e.jsxs)("div", {
                                className: r.CoreGroup,
                                children: [
                                  (0, e.jsx)("h1", {
                                    children: (0, y.we)(
                                      "#AchievementEditor_Group_CoreGameAchievements_Heading",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    children: (0, y.we)(
                                      "#AchievementEditor_Group_CoreGameAchievements_Description",
                                    ),
                                  }),
                                ],
                              }),
                            (0, e.jsx)("div", {
                              children: ne
                                ? (0, e.jsx)("div", {
                                    className: r.EditTitle,
                                    children: (0, e.jsx)("h1", {
                                      children: (0, y.we)(
                                        "#AchievementEditor_AchievementsTable_Header_CreateGroup",
                                      ),
                                    }),
                                  })
                                : (0, e.jsx)("div", {
                                    className: r.EditTitle,
                                    children: (0, e.jsx)("h1", {
                                      children: (0, y.we)(
                                        "#AchievementEditor_Group_Tools_Edit",
                                      ),
                                    }),
                                  }),
                            }),
                            (0, e.jsxs)("div", {
                              className: r.GroupData,
                              children: [
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, y.we)(
                                          "#AchievementEditor_Group_Field_Restrictions",
                                        ),
                                        ":",
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, y.we)(
                                              "#AchievementEditor_Group_Edit_Field_Restrictions_Description",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)(f, {
                                          value: o,
                                          setValue: s,
                                        }),
                                        (0, e.jsx)(se, { ...l }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: r.VisibilityColumn,
                                  children: [
                                    (!!j || ne) &&
                                      (0, e.jsxs)("div", {
                                        children: [
                                          (0, e.jsxs)(m.s, {
                                            children: [
                                              (0, e.jsxs)(m.s, {
                                                flexGrow: "1",
                                                children: [
                                                  (0, y.we)(
                                                    "#AchievementEditor_Group_Field_Name",
                                                  ),
                                                  ":",
                                                ],
                                              }),
                                              P &&
                                                (0, e.jsx)(m.s, {
                                                  children: (0, e.jsx)("p", {
                                                    children: (0, y.we)(
                                                      "#AchievementEditor_Group_Edit_Field_Name_DlcPrefix",
                                                    ),
                                                  }),
                                                }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            children: [
                                              (0, e.jsxs)("div", {
                                                children: [
                                                  (0, y.we)(
                                                    "#AchievementEditor_Group_Edit_Field_Name_Description",
                                                  ),
                                                  " ",
                                                  (0, e.jsx)(U.Mq, {
                                                    locstring: he,
                                                  }),
                                                ],
                                              }),
                                              (0, e.jsx)(U.Pk, {
                                                autofocus: !0,
                                                value: he,
                                                setValue: u,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsx)("div", {
                                          children: (0, y.we)(
                                            "#AchievementEditor_Group_Field_DeveloperOnly",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          children: (0, e.jsx)(N.az, {
                                            background: "dull-9",
                                            flexGrow: "1",
                                            padding: "1",
                                            radius: "sm",
                                            children: (0, e.jsx)(_.S, {
                                              checked: w,
                                              onChange: D,
                                              children: (0, y.we)(
                                                "#AchievementEditor_Group_Field_DeveloperOnly",
                                              ),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    !ne &&
                                      (0, e.jsxs)("div", {
                                        children: [
                                          (0, e.jsxs)("div", {
                                            children: [
                                              (0, y.we)(
                                                "#AchievementEditor_Group_Field_Archive",
                                              ),
                                              ":",
                                            ],
                                          }),
                                          (0, e.jsx)("div", {
                                            children: (0, e.jsx)(N.az, {
                                              background: "dull-9",
                                              flexGrow: "1",
                                              padding: "1",
                                              radius: "sm",
                                              children: (0, e.jsx)(_.S, {
                                                checked: h,
                                                onChange: S,
                                                children: (0, y.we)(
                                                  "#AchievementEditor_Group_Field_IsArchived",
                                                ),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    (0, e.jsxs)("div", {
                                      className: r.VisibilitySection,
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, y.we)(
                                              "#AchievementEditor_Group_Field_Visibility",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", {
                                          children: (0, e.jsx)(Z, { ...l }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            !F &&
                              (0, e.jsx)(E.Aj, {
                                onSave: b,
                                onCancel: ie,
                                pending: x,
                                error: t.error,
                              }),
                          ],
                        }),
                      }),
                    }),
                  ],
                });
              },
              G = function (i) {
                const { groupid: t, group: j, hideModal: F } = i,
                  { appID: k } = (0, V.L3)(),
                  X = (0, V.F0)(k, t),
                  te = (0, V.FK)(k, t),
                  oe = (0, E.fw)(t, j),
                  ge = !te || te.length === 0,
                  he = () => X.mutate(void 0, { onSuccess: F });
                return (0, e.jsx)(ee.EN, {
                  active: !0,
                  children: (0, e.jsx)(ee.x_, {
                    onEscKeypress: F,
                    children: (0, e.jsxs)(v.U9, {
                      className: r.GroupDeleteDialog,
                      children: [
                        (0, e.jsx)(v.Y9, {
                          children: (0, y.we)(
                            "#AchievementEditor_Group_Delete_Dialog_Title",
                          ),
                        }),
                        (0, e.jsxs)(v.nB, {
                          children: [
                            !ge &&
                              (0, e.jsxs)(m.s, {
                                direction: "row",
                                gap: "2",
                                padding: "2",
                                align: "center",
                                background: "red-7",
                                style: {
                                  color: "var(--color-text-light-title)",
                                },
                                children: [
                                  (0, e.jsx)(E.id, {}),
                                  (0, e.jsx)(A.EY, {
                                    contrast: "title",
                                    children: (0, y.we)(
                                      "#AchievementEditor_Group_Delete_Dialog_WarnNonEmptyGroup",
                                    ),
                                  }),
                                ],
                              }),
                            (0, e.jsxs)(m.s, {
                              direction: "column",
                              gap: "1",
                              padding: "2",
                              className: r.GroupBox,
                              children: [
                                (0, e.jsxs)(A.EY, {
                                  children: [
                                    (0, y.we)(
                                      "#AchievementEditor_Group_Field_Name",
                                    ),
                                    ": ",
                                    (0, U.ZM)(j?.name, "english") ??
                                      j?.name.token,
                                  ],
                                }),
                                (0, e.jsx)(Z, { ...oe }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(v.wi, {
                          children: (0, e.jsx)(E.Aj, {
                            saveText: (0, y.we)(
                              "#AchievementEditor_Group_Delete_Dialog_Delete",
                            ),
                            saveColor: "red",
                            saveDisabled: !ge,
                            pending: X.isPending,
                            error: X.error?.message,
                            onCancel: F,
                            onSave: he,
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              };
            n.d(me, { C6: () => W, _e: () => ce, or: () => Z });
            var e = n(7850),
              q = n(89558),
              m = n(68031),
              L = n(75083),
              A = n(15252),
              N = n(60351),
              _ = n(85367),
              R = n(58952),
              I = n(74769),
              V = n(3959),
              a = n(90626),
              v = n(58534),
              c = n(249),
              ee = n(2801),
              z = n(36118),
              J = n(36707),
              y = n(18210),
              O = n(77959),
              p = n(71986),
              r = n(1103),
              C = n.n(r),
              U = n(1421),
              E = n(82006),
              ve = d([V, p, U, E]);
            ([V, p, U, E] = ve.then ? (await ve)() : ve), Q();
          } catch (M) {
            Q(M);
          }
        });
      },
      1421: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let C = function () {
                const { appID: T } = (0, a.L3)(),
                  de = (0, a.ts)(T),
                  ae = (0, a.Q4)(T) || {},
                  le = (0, a.kb)(T) || [];
                return [
                  ...le.map((H) => H.display?.name),
                  ...le.map((H) => H.display?.desc),
                  ...Object.keys(ae).map((H) => ae[H].name),
                ].reduce(
                  (H, $) => (
                    Object.keys(H).forEach((se) => {
                      const W = H[se];
                      (W.total = W.total + 1),
                        (M($, se)?.length ?? 0) > 0 && (W.set = W.set + 1),
                        (H[se] = W);
                    }),
                    H
                  ),
                  de.reduce((H, $) => ((H[$] = { set: 0, total: 0 }), H), {}),
                );
              },
              U = function (T) {
                const { locstring: de } = T,
                  { appID: ae, localization: le } = (0, a.L3)(),
                  { currentLanguage: re, setCurrentLanguage: g } = le,
                  H = (0, a.ts)(ae),
                  $ = de === void 0,
                  se = C(),
                  W = $ ? se : {},
                  Z = (0, q.WM)({
                    rgOptions: H,
                    selectedValue: re,
                    onSelectionChange: g,
                  }),
                  B = (fe, ue = !1) => {
                    const K = $
                        ? W[fe].set === W[fe].total
                        : (M(de, fe)?.length ?? 0) > 0,
                      f = K ? y.Provided : y.Missing,
                      Y = $ ? ` (${W[fe].set} / ${W[fe].total})` : "";
                    return (0, e.jsxs)("span", {
                      className: f,
                      children: [
                        ue &&
                          (K
                            ? (0, e.jsx)(ee.Jlk, { color: "var(--text-color)" })
                            : (0, e.jsx)(c.eTF, {
                                color: "var(--text-color)",
                              })),
                        " ",
                        (0, J.we)(`#Language_${fe}`),
                        Y,
                      ],
                    });
                  };
                return (0, e.jsx)("div", {
                  className: (0, z.A)(y.LocSelect, de ? y.Inline : null),
                  children: (0, e.jsxs)(q.l6.Root, {
                    variant: de ? "underline" : "default",
                    size: "2",
                    state: Z,
                    children: [
                      (0, e.jsx)(q.l6.Trigger, { children: B(re) }),
                      (0, e.jsx)(q.l6.Options, {
                        children: Z.rgOptions.map((fe) =>
                          (0, e.jsx)(
                            q.l6.Option,
                            { value: fe, children: B(fe.toString(), !0) },
                            fe.toString(),
                          ),
                        ),
                      }),
                    ],
                  }),
                });
              },
              E = function (T, de) {
                return T
                  ? typeof T == "string"
                    ? { english: T }
                    : Object.keys(T).reduce(
                        (le, re) => (
                          (re == "token" || de.includes(re)) &&
                            (le[re] = T[re]),
                          le
                        ),
                        {},
                      )
                  : {};
              },
              ve = function (T) {
                const {
                    value: de,
                    setValue: ae,
                    multiline: le = !1,
                    autofocus: re = !1,
                  } = T,
                  { currentLanguage: g } = (0, a.L3)().localization,
                  { appID: H } = (0, a.L3)(),
                  $ = (0, a.ts)(H),
                  se = E(de, $),
                  W = (Z) => {
                    const B = { ...se, [g]: Z };
                    ae(B);
                  };
                return (0, e.jsx)("div", {
                  className: (0, z.A)(y.LocTextInput, se[g] ? void 0 : y.Empty),
                  children: le
                    ? (0, e.jsx)(m.f, {
                        autoFocus: re,
                        resize: "vertical",
                        value: se[g],
                        onTextChange: W,
                      })
                    : (0, e.jsx)(L.k, {
                        autoFocus: re,
                        value: se[g],
                        onTextChange: W,
                      }),
                });
              },
              M = function (T, de) {
                if (T !== void 0)
                  return typeof T == "string"
                    ? de === "english"
                      ? T
                      : void 0
                    : T && de in T && T[de] != ""
                      ? T[de]
                      : void 0;
              },
              ce = function (T) {
                const { text: de, missingStringLocToken: ae } = T,
                  { currentLanguage: le } = (0, a.L3)().localization,
                  re = M(de, le);
                return (
                  re ||
                  (0, e.jsxs)("span", {
                    className: (0, z.A)(y.Missing, y.LocText),
                    children: [
                      (0, e.jsx)(c.eTF, { color: "var(--text-color)" }),
                      " ",
                      (0, J.we)(
                        ae ?? "#AchievementEditor_Localization_MissingString",
                        (0, J.we)(`#Language_${le}`),
                      ),
                    ],
                  })
                );
              },
              ye = function (T) {
                const { onClose: de } = T,
                  { appID: ae } = (0, a.L3)(),
                  le = (0, a.ts)(ae),
                  re = (0, a.vd)(ae),
                  g = (0, a.kk)(ae),
                  [H, $] = (0, v.useState)(new Set(le)),
                  se = re.reduce(
                    (K, f) => ((K[f] = (0, J.we)(`#Language_${f}`)), K),
                    {},
                  ),
                  W = [...re].sort((K, f) => se[K].localeCompare(se[f])),
                  Z = (0, v.useCallback)(() => {
                    g.mutate(Array.from(H), { onSuccess: de });
                  }, [g, de, H]),
                  B = W.slice(0, Math.round(W.length / 2)),
                  fe = W.slice(B.length),
                  ue = (K, f) => {
                    $((Y) =>
                      f
                        ? new Set(Array.from([...Y, K]))
                        : new Set(Array.from(Y).filter((G) => G != K)),
                    );
                  };
                return (0, e.jsxs)(V.s, {
                  onClose: de,
                  strTitle: (0, J.we)(
                    "#AchievementEditor_AppLanguageEdit_Title",
                  ),
                  children: [
                    (0, e.jsxs)(A.x, {
                      columns: "repeat(2, 1fr)",
                      gap: "3",
                      paddingY: "3",
                      children: [
                        (0, e.jsx)(N.az, {
                          gridColumn: "1/-1",
                          minWidth: "100%",
                          width: "0",
                          children: (0, e.jsx)(_.EY, {
                            contrast: "description",
                            children: (0, J.we)(
                              "#AchievementEditor_AppLanguageEdit_Description",
                            ),
                          }),
                        }),
                        [B, fe].map((K, f) =>
                          (0, e.jsx)(
                            R.s,
                            {
                              direction: "column",
                              gap: "2",
                              children: K.map((Y) =>
                                (0, e.jsx)(
                                  I.S,
                                  {
                                    disabled: Y == "english",
                                    checked: Y == "english" || H.has(Y),
                                    onChange: (G) => ue(Y, G),
                                    children: se[Y],
                                  },
                                  Y,
                                ),
                              ),
                            },
                            f,
                          ),
                        ),
                      ],
                    }),
                    (0, e.jsx)(p.VZ, {
                      pending: g.isPending,
                      error: g.error?.message,
                      onSave: Z,
                      onCancel: de,
                    }),
                  ],
                });
              };
            n.d(me, {
              DG: () => C,
              II: () => E,
              Jt: () => ye,
              Mq: () => U,
              Pk: () => ve,
              VU: () => ce,
              ZM: () => M,
            });
            var e = n(7850),
              q = n(58952),
              m = n(1522),
              L = n(7125),
              A = n(95994),
              N = n(60351),
              _ = n(15252),
              R = n(68031),
              I = n(85367),
              V = n(47604),
              a = n(3959),
              v = n(90626),
              c = n(249),
              ee = n(36118),
              z = n(36707),
              J = n(18210),
              y = n(6629),
              O = n.n(y),
              p = n(82006),
              r = d([a, p]);
            ([a, p] = r.then ? (await r)() : r), Q();
          } catch (C) {
            Q(C);
          }
        });
      },
      79619: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let r = function (ce) {
                const ye =
                    ce?.type == "INT"
                      ? y.transform(O.decode)
                      : ee.transform(z.decode),
                  T =
                    ce?.type == "INT"
                      ? [0, N.ZSL.zH.int32[1]]
                      : [0, N.ZSL.zH.float32[1]],
                  de = ye.default(0).parse(ce?.min),
                  ae = ye.default(T[1]).parse(ce?.max),
                  le = ce?.type == "INT" ? N.aig().int() : N.aig(),
                  re = (0, v.Cm)(
                    N.Ikc({ min_val: le.min(de), max_val: le.max(ae) })
                      .optional()
                      .refine((g) => g === void 0 || g.min_val < g.max_val, {
                        error: (0, I.we)(
                          "#AchievementEditor_Validator_Error_MinGreaterThanMax",
                        ),
                      }),
                  );
                return {
                  hasStat: ce !== void 0,
                  hasMin: ce?.min !== void 0,
                  hasMax: ce?.max !== void 0,
                  min: de,
                  max: ae,
                  type: ce?.type,
                  validator: re,
                };
              },
              C = function (ce) {
                const {
                    appID: ye,
                    progress: T,
                    setProgress: de,
                    hasStat: ae,
                    hasMin: le,
                    hasMax: re,
                    min: g,
                    max: H,
                    type: $ = "FLOAT",
                    validator: se,
                  } = ce,
                  W = (0, R.useId)(),
                  Z = (0, _.J3)(ye) ?? [];
                function B(K) {
                  if (K === void 0) {
                    de(void 0);
                    return;
                  }
                  const f = Z.find((Y) => Y.name == K);
                  de({
                    min_val: f?.min,
                    max_val: f?.max,
                    value: { operand1: K, operation: "statvalue" },
                  });
                }
                function fe(K) {
                  const f = {
                    value: T.value,
                    min_val: K[0].toString(),
                    max_val: K[1].toString(),
                  };
                  de(f);
                }
                function ue(K) {
                  if (!K) return;
                  const f = "\u221E",
                    Y = Z.find((G) => G.name == K);
                  return `${Y.name} (${Y.type} ${Y.min ?? 0} - ${Y.max ?? f})`;
                }
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(v.ox, {
                      labelId: W,
                      label: (0, I.we)(
                        "#AchievementEditor_Achievement_Edit_ProgressStat",
                      ),
                      description: (0, I.we)(
                        "#AchievementEditor_Achievement_Edit_ProgressStat_Description",
                      ),
                      children: (0, e.jsx)(q.G3, {
                        "aria-labelledby": W,
                        options: Z.map((K) => K.name),
                        getOptionLabel: ue,
                        selectedValue: T?.value?.operand1,
                        onSelectionChange: B,
                        placeholder: "",
                        filterPlaceholder: "",
                        clearable: !0,
                      }),
                    }),
                    ae &&
                      (0, e.jsx)(U, {
                        showSlider: le && re,
                        min: g,
                        max: H,
                        integer: $ == "INT",
                        validator: se,
                        value: [
                          N.auy.number().default(g).parse(T?.min_val),
                          N.auy.number().default(H).parse(T?.max_val),
                        ],
                        setValue: fe,
                      }),
                  ],
                });
              },
              U = function (ce) {
                const {
                    showSlider: ye = !1,
                    min: T,
                    max: de,
                    validator: ae,
                    integer: le,
                    value: re,
                  } = ce,
                  g = (0, R.useId)(),
                  H = le ? N.aig().int() : N.aig(),
                  $ = ae({ min_val: re[0], max_val: re[1] });
                return (0, e.jsx)(v.qF, {
                  labelId: g,
                  label: (0, I.we)(
                    "#AchievementEditor_Achievement_Edit_ProgressStatRange",
                  ),
                  isValid: $.success,
                  issues: $.success ? void 0 : $.issues?.map((se) => se),
                  children: ye
                    ? (0, e.jsx)(E, { ...ce })
                    : (0, e.jsx)(ve, { ...ce }),
                });
              },
              E = function (ce) {
                const {
                    min: ye,
                    max: T,
                    integer: de,
                    value: ae,
                    setValue: le,
                  } = ce,
                  re = de ? 1 : 0.1,
                  g = [A.OQ(ae[0], ye, T), A.OQ(ae[1], ye, T)];
                return (0, e.jsxs)("div", {
                  className: V.MinMaxRangeContainer,
                  children: [
                    (0, e.jsx)(ve, { ...ce }),
                    (0, e.jsx)(m.F, {
                      value: g,
                      onValueChange: le,
                      min: ye,
                      max: T,
                      step: re,
                    }),
                  ],
                });
              },
              ve = function (ce) {
                const { value: ye, setValue: T, integer: de } = ce;
                return (0, e.jsxs)("div", {
                  className: V.MinMax,
                  children: [
                    (0, e.jsx)(v.wI, {
                      children: (0, e.jsx)(M, {
                        placeholder: (0, I.we)(
                          "#AchievementEditor_Achievement_Edit_Stat_Min_Placeholder",
                        ),
                        value: ye[0],
                        integer: de,
                        onValueChange: (ae) => T([ae, ye[1]]),
                      }),
                    }),
                    (0, e.jsx)("span", { children: " - " }),
                    (0, e.jsx)(v.wI, {
                      children: (0, e.jsx)(M, {
                        placeholder: (0, I.we)(
                          "#AchievementEditor_Achievement_Edit_Stat_Max_Placeholder",
                        ),
                        value: ye[1],
                        integer: de,
                        onValueChange: (ae) => T([ye[0], ae]),
                      }),
                    }),
                  ],
                });
              },
              M = function (ce) {
                const { defaultValue: ye = 0, integer: T = !1, ...de } = ce,
                  ae = T ? p : J;
                function le(g) {
                  const H = ae.safeDecode(g);
                  return H.success ? H.data : void 0;
                }
                const re = (g, H) => !g || (H !== L.C && !isNaN(H));
                return (0, e.jsx)(L.I, {
                  valueToString: (g) => ae.safeEncode(g).data,
                  valueFromString: le,
                  checkValidText: re,
                  ...de,
                });
              };
            n.d(me, { E: () => r, O: () => C });
            var e = n(7850),
              q = n(74769),
              m = n(9656),
              L = n(99631),
              A = n(13854),
              N = n(30541),
              _ = n(3959),
              R = n(90626),
              I = n(18210),
              V = n(14223),
              a = n.n(V),
              v = n(30263),
              c = d([N, _]);
            [N, _] = c.then ? (await c)() : c;
            const ee = N.YjP().regex(/^-?\d+(?:\.\d*)?$/),
              z = {
                decode: (ce) => Number.parseFloat(ce),
                encode: (ce) => ce.toString(),
              },
              J = N.rLB(ee, N.aig(), z),
              y = N.YjP().regex(N.A$I.nd),
              O = {
                decode: (ce) => Number.parseInt(ce, 10),
                encode: (ce) => ce.toString(),
              },
              p = N.rLB(y, N.Whr(), O);
            Q();
          } catch (ee) {
            Q(ee);
          }
        });
      },
      82006: (pe, me, n) => {
        "use strict";
        n.a(pe, async (d, Q) => {
          try {
            let U = function (i) {
                const {
                  saveText: t,
                  saveColor: j,
                  cancelText: F,
                  onSave: k,
                  onCancel: X,
                  pending: te,
                  error: oe,
                  saveDisabled: ge = !1,
                  hideCancel: he = !1,
                } = i;
                return (0, e.jsxs)("div", {
                  className: R.SaveCloseButtons,
                  children: [
                    !!oe && (0, e.jsx)(g, { text: oe }),
                    (0, e.jsx)(q.$, {
                      color: j ?? "green",
                      variant: "vibrant",
                      onClick: k,
                      loading: te,
                      disabled: ge || te,
                      children: (0, e.jsx)("span", {
                        children: t || (0, _.we)("#Button_Save"),
                      }),
                    }),
                    !he &&
                      (0, e.jsx)(q.$, {
                        color: "dull",
                        onClick: X,
                        disabled: te,
                        children: (0, e.jsx)("span", {
                          children: F || (0, _.we)("#Button_Cancel"),
                        }),
                      }),
                  ],
                });
              },
              E = function (i) {
                const { className: t } = i;
                return (0, e.jsx)(m.az, {
                  className: (0, v.A)(R.Icon, t),
                  children: (0, e.jsx)(V.qzq, {}),
                });
              },
              ve = function (i) {
                const { color: t = "currentColor" } = i;
                return (0, e.jsx)(m.az, {
                  className: R.Icon,
                  children: (0, e.jsx)(a.eTF, { color: t }),
                });
              },
              M = function (i) {
                const { color: t = "var(--color-unreleased)" } = i;
                return (0, e.jsx)(m.az, {
                  className: R.Icon,
                  children: (0, e.jsx)(a.ZyV, { color: t }),
                });
              },
              ce = function (i) {
                return (0, e.jsx)("div", {
                  className: R.ButtonContainer,
                  children: (0, e.jsx)(U, { ...i }),
                });
              },
              ye = function (i) {
                const { onClick: t } = i;
                return (0, e.jsxs)(q.$, {
                  color: "dull",
                  icon: !0,
                  onClick: t,
                  children: [
                    (0, e.jsx)("div", {
                      className: R.ButtonIcon,
                      children: (0, e.jsx)(T, { width: "18", height: "18" }),
                    }),
                    (0, _.we)("#AchievementEditor_ReorderGroups"),
                  ],
                });
              },
              T = function (i) {
                return (0, e.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                  ...i,
                  children: (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M17 10.3477L14.7471 12.5557L11.0938 8.97559V27.0244L14.7471 23.4443L17 25.6523L9.5 33L2 25.6523L4.25293 23.4443L7.90625 27.0234V8.97656L4.25293 12.5557L2 10.3477L9.5 3L17 10.3477ZM34 30L21.0303 30.0303V26.0303L34 26V30ZM34 16V20H21V16H34ZM34 10H21V6H34V10Z",
                  }),
                });
              },
              de = function (i) {
                const { title: t, onClick: j, className: F } = i;
                return (0, e.jsx)("div", {
                  title: t,
                  className: (0, v.A)(R.SmallIconButton, R.EditButton, F),
                  children: (0, e.jsx)(q.$, {
                    variant: "ghost",
                    icon: !0,
                    onClick: j,
                    children: (0, e.jsx)(V.ffu, {}),
                  }),
                });
              },
              ae = function (i) {
                const { title: t, onClick: j } = i;
                return (0, e.jsx)("div", {
                  title: t,
                  className: (0, v.A)(R.SmallIconButton, R.DeleteButton),
                  children: (0, e.jsx)(q.$, {
                    variant: "ghost",
                    icon: !0,
                    onClick: j,
                    children: (0, e.jsx)(V.X, {}),
                  }),
                });
              },
              le = function (i) {
                const { helpText: t } = i;
                return (0, e.jsx)(ee.he, {
                  toolTipContent: t,
                  children: (0, e.jsx)(V._VW, {}),
                });
              },
              re = function (i) {
                const { text: t } = i;
                return (0, e.jsxs)(L.s, {
                  direction: "row",
                  gap: "1",
                  align: "center",
                  style: { color: "var(--color-warning)" },
                  children: [(0, e.jsx)(ve, {}), " ", t],
                });
              },
              g = function (i) {
                const { text: t } = i;
                return (0, e.jsxs)(L.s, {
                  direction: "row",
                  gap: "1",
                  align: "center",
                  style: { color: "var(--color-error)" },
                  children: [(0, e.jsx)(ve, {}), " ", t],
                });
              },
              $ = function (i) {
                const { groupID: t, group: j, showVisibility: F = !1 } = i,
                  { visible: k } = ue(t, j),
                  {
                    existingAchievements: X,
                    existingAchievementUnlockPercentages: te,
                  } = (0, c.L3)(),
                  oe =
                    t === H || t === void 0
                      ? (0, _.we)(
                          "#AchievementEditor_Group_CoreGameAchievements_Heading",
                        )
                      : ((0, r.ZM)(j?.name, "english") ?? j?.name?.token),
                  he =
                    X?.groups
                      .find((o) => o.id.toString() == t)
                      ?.achievements.some(
                        (o) => (te?.percentages?.[o.internal_key] ?? 0) > 0,
                      ) ?? !1;
                let u;
                return (
                  F &&
                    (k
                      ? he && (u = (0, e.jsx)(E, {}))
                      : (u = (0, e.jsx)(M, {}))),
                  (0, e.jsxs)(L.s, {
                    direction: "row",
                    gap: "1",
                    align: "center",
                    children: [u, oe],
                  })
                );
              },
              W = function (i) {
                const {
                    selectedValue: t,
                    onSelectionChange: j,
                    filter: F,
                    allowCreate: k,
                    variant: X,
                    placeholder: te = (0, _.we)(
                      "#AchievementEditor_Group_SelectGroupPlaceholder",
                    ),
                  } = i,
                  { appID: oe } = (0, c.L3)(),
                  ge = (0, c.Q4)(oe) || {},
                  he = [H, ...Object.keys(ge)],
                  u = F === void 0 ? he : he.filter(F);
                k && u.splice(0, 0, se);
                const o = (s) =>
                  s == se
                    ? (0, _.we)("#AchievementEditor_Group_SelectGroup_Create")
                    : (0, e.jsx)($, {
                        groupID: s,
                        group: ge[s],
                        showVisibility: !0,
                      });
                return (0, e.jsx)(A.l6, {
                  selectedValue: t,
                  variant: X,
                  onSelectionChange: j,
                  options: u,
                  placeholder: te,
                  getOptionLabel: o,
                });
              },
              Z = function (i) {
                return (t) => t != i && (!!i || t != H);
              },
              B = function (i, t, j, F) {
                const k = j == "name" ? "NAME" : "DESC";
                return !i || i == `${t}_${k}` ? `${F}_${k}` : i;
              },
              fe = function (i) {
                const {
                  okText: t,
                  cancelText: j,
                  onOk: F,
                  onCancel: k,
                  okColor: X,
                  hideCancelButton: te = !1,
                  children: oe,
                } = i;
                return (0, e.jsx)(z.EN, {
                  active: !0,
                  children: (0, e.jsx)(z.x_, {
                    bHideCloseIcon: !0,
                    children: (0, e.jsxs)(J.U9, {
                      children: [
                        (0, e.jsx)(J.nB, { children: oe }),
                        (0, e.jsx)(J.wi, {
                          children: (0, e.jsx)(ce, {
                            saveText: t ?? (0, _.we)("#Button_OK"),
                            saveColor: X,
                            onSave: F,
                            cancelText: j,
                            onCancel: k,
                            hideCancel: te,
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
              ue = function (i, t) {
                const {
                    appID: j,
                    existingAchievements: F,
                    existingAchievementUnlockPercentages: k,
                  } = (0, c.L3)(),
                  X = t?.dlcappid,
                  te = (0, c.Xe)(j),
                  { data: oe } = (0, c.Wu)(j),
                  ge = oe?.find((D) => X == D.appid),
                  he = !!Number(X),
                  { data: u } = (0, O.J$)(he ? { appid: Number(X) } : void 0),
                  o = t?.archived == "1",
                  s = t?.developeronly == "1",
                  h = (ge ?? te)?.is_released_somewhere,
                  w =
                    F?.groups
                      .find((D) => D.id.toString() == (i ?? H))
                      ?.achievements.some(
                        (D) => (k?.percentages?.[D.internal_key] ?? 0) > 0,
                      ) ?? !1;
                return {
                  archived: o,
                  developeronly: s,
                  is_released_somewhere: h,
                  hasprogress: w,
                  app: ge ?? te,
                  baseApp: te,
                  noStorePage: !!u && u.success != p.R,
                  notDLCOfApp: he && !!oe && !ge,
                  dlcappid: X,
                  visible: !o && !s && h,
                };
              },
              K = function () {
                const {
                  existingAchievements: i,
                  existingAchievementUnlockPercentages: t,
                } = (0, c.L3)();
                return (0, N.useMemo)(
                  () =>
                    i
                      ? i.groups.reduce(
                          (F, k) => (
                            k.achievements.forEach((X) => {
                              F[X.internal_key] = {
                                existingAchievement: X,
                                globalUnlockPercentage:
                                  t?.percentages?.[X.internal_key],
                              };
                            }),
                            F
                          ),
                          {},
                        )
                      : {},
                  [i, t],
                );
              },
              f = function (i, t) {
                const j = K();
                if (j === void 0) return {};
                if (i === void 0 || t === void 0) return {};
                const F = Y(i, t);
                return j[F] ?? {};
              },
              Y = function (i, t) {
                const j = typeof i == "string" ? Number.parseInt(i) : i,
                  F = typeof t == "string" ? Number.parseInt(t) : t;
                return (j << 8) | F;
              },
              G = function (i) {
                return ((i ?? 0) / 100).toLocaleString((0, y.J)(), {
                  style: "percent",
                  maximumFractionDigits: 1,
                });
              };
            n.d(me, {
              $P: () => K,
              Aj: () => ce,
              BA: () => E,
              EV: () => B,
              Gl: () => se,
              NT: () => le,
              TM: () => fe,
              VZ: () => U,
              YZ: () => f,
              Z7: () => G,
              et: () => ae,
              fw: () => ue,
              id: () => ve,
              lg: () => de,
              lh: () => re,
              mc: () => ye,
              r3: () => g,
              yo: () => W,
              z0: () => H,
              zy: () => Z,
            });
            var e = n(7850),
              q = n(75083),
              m = n(60351),
              L = n(68031),
              A = n(58952),
              N = n(90626),
              _ = n(18210),
              R = n(79964),
              I = n.n(R),
              V = n(36118),
              a = n(249),
              v = n(36707),
              c = n(3959),
              ee = n(71421),
              z = n(2801),
              J = n(58534),
              y = n(84346),
              O = n(40358),
              p = n(72604),
              r = n(1421),
              C = d([c, r]);
            [c, r] = C.then ? (await C)() : C;
            const H = "0",
              se = "newgroup";
            Q();
          } catch (U) {
            Q(U);
          }
        });
      },
      91988: (pe, me, n) => {
        "use strict";
        n.d(me, { z: () => A });
        var d = n(7850),
          Q = n(90626),
          e = n(3952),
          q = n.n(e),
          m = n(36707),
          L = n(18210);
        function A(N) {
          const {
              className: _,
              onUpload: R,
              accept: I,
              multiple: V = !1,
              fileInputRef: a,
              onError: v,
              children: c,
            } = N,
            [ee, z] = (0, Q.useState)(!1),
            [J, y] = (0, Q.useState)(!1),
            O = (M) =>
              !V && M.length > 1
                ? !1
                : Array.from(M).every((ce) => I.includes(ce.type)),
            p = (M) => {
              v &&
                v(
                  !V && M.length > 1
                    ? (0, L.we)(
                        "#AchievementEditor_Upload_Error_SingleFileOnly",
                      )
                    : (0, L.we)(
                        "#AchievementEditor_Image_Error_UnknownContentType",
                      ),
                );
            },
            r = (M) => {
              M.preventDefault(), z(!0);
              const ce = [...M.dataTransfer.items];
              if (!V && ce.length > 1) {
                y(!0), (M.dataTransfer.effectAllowed = "none");
                return;
              }
              for (const ye of ce)
                if (!I.includes(ye.type)) {
                  y(!0),
                    (M.dataTransfer.effectAllowed = "none"),
                    console.log(ye.type);
                  return;
                }
            },
            C = (M) => {
              J && (M.dataTransfer.dropEffect = "none"), M.preventDefault();
            },
            U = () => {
              z(!1), y(!1);
            },
            E = async (M) => {
              M.preventDefault(), z(!1);
              let ce = J;
              if ((y(!1), ce)) {
                p(M.dataTransfer.files);
                return;
              }
              R(M.dataTransfer.files);
            },
            ve = async (M) => {
              if (!O(M.target.files)) {
                p(M.target.files);
                return;
              }
              R(M.target.files);
            };
          return (0, d.jsxs)("div", {
            className: (0, m.A)(e.DragBox, ee && e.Dragging, J && e.Invalid, _),
            onDragEnter: r,
            onDragOver: C,
            onDragLeave: U,
            onDrop: E,
            children: [
              c,
              a &&
                (0, d.jsx)("input", {
                  type: "file",
                  style: { display: "none" },
                  name: "upload",
                  accept: I.join(","),
                  multiple: V,
                  ref: a,
                  onChange: ve,
                }),
            ],
          });
        }
      },
      50233: (pe, me, n) => {
        "use strict";
        n.d(me, { I7: () => m, Tc: () => _, _Q: () => R, bi: () => q });
        var d = n(7850),
          Q = n(18210),
          e = n(91988);
        const q = 1;
        async function m(I) {
          return new Promise((V, a) => {
            const v = new Image();
            (v.onerror = () =>
              a(new Error("failed to decode image for grayscale conversion"))),
              (v.onload = () => {
                const c = document.createElement("canvas");
                (c.width = v.width), (c.height = v.height);
                const ee = c.getContext("2d");
                (ee.filter = "grayscale(100%)"),
                  ee.drawImage(v, 0, 0, v.width, v.height);
                const z = c.toDataURL("image/png");
                V(z);
              }),
              (v.src = I);
          });
        }
        function L(I, V, a, v, c) {
          const ee = new FileReader();
          (ee.onerror = c),
            (ee.onload = (z) => {
              const J = new Image();
              (J.onerror = c),
                (J.onload = () => {
                  const y = document.createElement("canvas");
                  let O = J.width,
                    p = J.height;
                  O > p
                    ? O > V && ((p *= V / O), (O = V))
                    : p > a && ((O *= a / p), (p = a)),
                    (y.width = O),
                    (y.height = p),
                    y.getContext("2d").drawImage(J, 0, 0, O, p);
                  const C = y.toDataURL(I.type);
                  v(C);
                }),
                (J.src = z.target?.result);
            }),
            ee.readAsDataURL(I);
        }
        function A(I) {
          const V = I.lastIndexOf(".");
          return V !== -1 && V > I.lastIndexOf("/") ? I.slice(0, V) : I;
        }
        async function N(I, V = 0, a = 0, v = !1) {
          return new Promise((c, ee) => {
            if (!I) {
              c({
                success: !1,
                filename: "",
                error: (0, Q.we)("#AchievementEditor_Image_Error_ReadFailed"),
              });
              return;
            }
            const z = () =>
                c({
                  success: !1,
                  filename: I.name,
                  error: (0, Q.we)("#AchievementEditor_Image_Error_ReadFailed"),
                }),
              J = new FileReader();
            (J.onerror = z),
              (J.onloadend = () => {
                const y = I.type,
                  O = I.name;
                if (
                  ((y === "image/png" || O.endsWith(".png")) &&
                    J.result.toString().startsWith("data:image/png;base64,")) ||
                  ((y === "image/jpeg" ||
                    O.endsWith(".jpg") ||
                    O.endsWith(".jpeg")) &&
                    (J.result
                      .toString()
                      .startsWith("data:image/jpeg;base64,") ||
                      J.result.toString().startsWith("data:image/jpg;base64,")))
                ) {
                  const p = new Image();
                  (p.onerror = z),
                    (p.onload = () => {
                      v && p.width != p.height
                        ? (console.error(
                            "Image width and height don't match, must be square",
                          ),
                          c({
                            success: !1,
                            filename: I.name,
                            error: (0, Q.we)(
                              "#AchievementEditor_Image_Error_NotSquare",
                            ),
                            image: {
                              image: p.src,
                              imageType: q,
                              filenameWithoutExtension: A(O),
                            },
                          }))
                        : V > 0 && (p.width < V || p.height < V)
                          ? (console.error("Image too small"),
                            c({
                              success: !1,
                              filename: I.name,
                              error: (0, Q.we)(
                                "#AchievementEditor_Image_Error_TooSmall",
                              ),
                              image: {
                                image: p.src,
                                imageType: q,
                                filenameWithoutExtension: A(O),
                              },
                            }))
                          : a > 0 && (p.width > a || p.height > a)
                            ? L(
                                I,
                                a,
                                a,
                                (r) => {
                                  c({
                                    success: !0,
                                    filename: I.name,
                                    image: {
                                      image: r,
                                      imageType: q,
                                      filenameWithoutExtension: A(O),
                                    },
                                  });
                                },
                                z,
                              )
                            : c({
                                success: !0,
                                filename: I.name,
                                image: {
                                  image: J.result,
                                  imageType: q,
                                  filenameWithoutExtension: A(O),
                                },
                              });
                    }),
                    (p.src = J.result);
                } else
                  console.error("unknown content types: " + y),
                    c({
                      success: !1,
                      filename: I.name,
                      error: (0, Q.we)(
                        "#AchievementEditor_Image_Error_UnknownContentType",
                      ),
                    });
              }),
              J.readAsDataURL(I);
          });
        }
        async function _(I) {
          const {
            files: V,
            forceSquare: a,
            maxDimension: v,
            minDimension: c,
          } = I;
          return await Promise.all(V.map((z) => N(z, c, v, a)));
        }
        function R(I) {
          const {
              className: V,
              allowMultiple: a,
              fileInputRef: v,
              onUpload: c,
              onBulkUpload: ee,
              onError: z,
              children: J,
            } = I,
            y = async (p) => {
              const r = await _({ ...I, files: Array.from(p) }),
                C = r.filter((U) => !U.success);
              C.length > 0 &&
                z &&
                z(
                  C.map((U) => U.error)
                    .filter((U) => !!U)
                    .join(" ") ||
                    (0, Q.we)("#AchievementEditor_Image_Error_ReadFailed"),
                ),
                c
                  ? r[0].success && c(r[0].image)
                  : ee(r.filter((U) => U.success).map((U) => U.image));
            },
            O = ["image/png", "image/jpeg"];
          return (0, d.jsx)(e.z, {
            onUpload: y,
            className: V,
            accept: O,
            multiple: a,
            fileInputRef: v,
            onError: z,
            children: J,
          });
        }
      },
      30263: (pe, me, n) => {
        "use strict";
        n.d(me, {
          $q: () => _,
          Cm: () => R,
          WL: () => I,
          ox: () => a,
          qF: () => v,
          wI: () => V,
        });
        var d = n(7850),
          Q = n(7125),
          e = n(15252),
          q = n(90626),
          m = n(36118),
          L = n(36707),
          A = n(95415),
          N = n.n(A);
        function _(c, ee, z) {
          const [J, y] = (0, q.useState)(ee(c)),
            O = (p) => {
              const r = ee(p);
              (z || r.success) && y(r);
            };
          return {
            value: J.success ? J.data : J.input,
            setValue: O,
            isValid: J.success,
            issues: J.issues,
          };
        }
        function R(c) {
          return (ee) => {
            const z = c.safeParse(ee);
            return {
              success: z.success,
              data: z.data,
              input: ee,
              issues: z.success
                ? void 0
                : z.error?.issues.map((J) => J.message),
            };
          };
        }
        function I(c) {
          const {
              label: ee,
              value: z,
              setValue: J,
              isValid: y,
              issues: O,
              ...p
            } = c,
            r = (0, q.useId)(),
            [C, U] = (0, q.useState)(!1),
            E = (M) => {
              U(!0), J(M);
            },
            ve = () => {
              U(!0);
            };
          return (0, d.jsx)(v, {
            labelId: r,
            label: ee,
            isValid: !C || y,
            issues: O,
            children: (0, d.jsx)(V, {
              children: (0, d.jsx)(Q.k, {
                value: z,
                onTextChange: E,
                onBlur: ve,
                "aria-labelledby": r,
                ...p,
              }),
            }),
          });
        }
        function V(c) {
          const { children: ee } = c;
          return (0, d.jsx)("div", {
            className: A.ValidatedControl,
            children: ee,
          });
        }
        function a(c) {
          const { label: ee, description: z, labelId: J, children: y } = c;
          return (0, d.jsxs)("div", {
            children: [
              ee && (0, d.jsx)("h2", { id: J, children: ee }),
              z && (0, d.jsx)(e.EY, { contrast: "description", children: z }),
              y,
            ],
          });
        }
        function v(c) {
          const {
            label: ee,
            description: z,
            labelId: J,
            issues: y,
            isValid: O,
            children: p,
          } = c;
          return (0, d.jsxs)("div", {
            className: (0, L.A)(
              A.ValidatedInputContainer,
              O ? void 0 : A.Invalid,
            ),
            children: [
              (0, d.jsx)(a, {
                label: ee,
                description: z,
                labelId: J,
                children: p,
              }),
              !O &&
                y !== void 0 &&
                (typeof y == "string"
                  ? (0, d.jsxs)("span", {
                      className: A.ErrorDetail,
                      children: [
                        (0, d.jsx)(m.eTF, { color: "var(--color-invalid)" }),
                        " ",
                        y,
                      ],
                    })
                  : y.map((r, C) =>
                      (0, d.jsxs)(
                        "span",
                        {
                          className: A.ErrorDetail,
                          children: [
                            (0, d.jsx)(m.eTF, {
                              color: "var(--color-invalid)",
                            }),
                            " ",
                            r,
                          ],
                        },
                        C,
                      ),
                    )),
            ],
          });
        }
      },
      33654: (pe, me, n) => {
        "use strict";
        n.d(me, {
          Gx: () => m,
          _w: () => _,
          ap: () => e,
          cG: () => N,
          iN: () => L,
          pc: () => A,
          sq: () => q,
        });
        var d = n(7850),
          Q = n(18210);
        function e(R) {
          if (!R || R.trim().length == 0) return null;
          try {
            return JSON.parse(R);
          } catch {
            return null;
          }
        }
        function q(R, I) {
          const V = new Set();
          return R.filter((a) => {
            const v = I(a);
            return V.has(v) ? !1 : (V.add(v), !0);
          });
        }
        function m(...R) {
          return [...new Set(R.flat())];
        }
        function L(R) {
          const { href: I, children: V } = R;
          return I
            ? (0, d.jsx)("a", { ...R, children: V })
            : (0, d.jsx)(d.Fragment, { children: V });
        }
        function A(R, I) {
          const V = {
              sText: (0, Q.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable",
              ),
              sTooltip: (0, Q.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
            a = {
              sText: (0, Q.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive",
              ),
              sTooltip: void 0,
              bPrereleaseOrReleased: !1,
            },
            v = {
              released: {
                sText: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released",
                ),
                sTooltip: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              prerelease: {
                sText: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease",
                ),
                sTooltip: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              ownersonly: {
                sText: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly",
                ),
                sTooltip: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              preloadonly: {
                sText: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly",
                ),
                sTooltip: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              disabled: {
                sText: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled",
                ),
                sTooltip: (0, Q.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
            };
          let c = V;
          return R in v ? (c = v[R]) : I || (c = a), c;
        }
        function N(R) {
          if (R.type == "seasonalsale") {
            const I = R.name.toLowerCase();
            if (I.includes("spring")) return "#dd71d4";
            if (I.includes("summer")) return "#29c6ec";
            if (I.includes("autumn")) return "#ac240c";
            if (I.includes("winter")) return "#01704f";
          }
        }
        function _(R) {
          let I = 0;
          for (let c = 0; c < R.length; c++)
            I = R.charCodeAt(c) + ((I << 5) - I);
          const V = I % 360,
            a = 50 + (I % 50),
            v = 40 + (I % 30);
          return `hsl(${V}, ${a}%, ${v}%, 0.25)`;
        }
      },
      77959: (pe, me, n) => {
        "use strict";
        n.d(me, { b: () => z, a: () => a });
        var d = n(7850),
          Q = n(40358),
          e = n(90626),
          q = n(98609);
        function m(p, r) {
          if (!(!p?.asset_url_format || typeof p[r] != "string"))
            return (
              q.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              p.asset_url_format.replace("${FILENAME}", p[r])
            );
        }
        var L = n(71421),
          A = n(36707),
          N = n(18210),
          _ = n(3166),
          R = n(28325),
          I = n(6777),
          V = n(33654);
        function a(p) {
          const r = e.useMemo(() => O(), []);
          return (0, d.jsx)(I.$, {
            title: (0, N.we)("#Dashboard_RecentApps_Title"),
            headerElement: (0, d.jsx)(c, {}),
            children: (0, d.jsxs)("div", {
              className: R.AppTileContainer,
              children: [
                !r.length && (0, d.jsx)(v, {}),
                r.map((C) => (0, d.jsx)(ee, { app: C }, C.appid)),
              ],
            }),
          });
        }
        function v(p) {
          const r = _.TS.PARTNER_BASE_URL + "apps/";
          return (0, d.jsxs)("div", {
            className: R.NoRecentApps,
            children: [
              (0, N.we)("#Dashboard_RecentApps_NoRecent"),
              " ",
              (0, d.jsxs)("a", {
                href: r,
                target: "_blank",
                children: [" ", (0, N.we)("#Dashboard_RecentApps_ViewAll")],
              }),
            ],
          });
        }
        function c(p) {
          const r = _.TS.PARTNER_BASE_URL + "apps/";
          return (0, d.jsx)("div", {
            className: R.ViewAppsContainer,
            children: (0, d.jsx)("div", {
              className: R.ViewAppsLink,
              children: (0, d.jsx)("a", {
                href: r,
                children: (0, N.we)("#Dashboard_RecentApps_ViewAllShort"),
              }),
            }),
          });
        }
        function ee(p) {
          const { app: r } = p,
            C = r.appid,
            { data: U } = (0, Q.lv)({ appid: C }),
            E = _.TS.PARTNER_BASE_URL + "apps/landing/" + C,
            ve = m(U, "header");
          return (0, d.jsxs)("div", {
            className: R.AppTile,
            children: [
              ve &&
                (0, d.jsx)(L.he, {
                  toolTipContent: r.name,
                  children: (0, d.jsx)("div", {
                    className: R.AppTileImage,
                    children: (0, d.jsx)("a", {
                      href: E,
                      target: "_blank",
                      children: (0, d.jsx)("img", { src: ve }),
                    }),
                  }),
                }),
              !ve &&
                (0, d.jsx)("div", {
                  className: R.AppTileImagePlaceholder,
                  children: (0, d.jsx)("a", {
                    href: E,
                    target: "_blank",
                    children: r.name,
                  }),
                }),
              (0, d.jsx)(z, { app: r }),
            ],
          });
        }
        function z(p) {
          const { app: r } = p,
            C = r.appid,
            { data: U } = (0, Q.J$)({ appid: C });
          return (0, d.jsxs)("div", {
            className: R.AppLabels,
            children: [
              (0, d.jsx)(J, { appType: r.type }),
              (0, d.jsx)(y, {
                releaseState: r.releasestate,
                hasStoreItem: U?.visible,
              }),
            ],
          });
        }
        function J(p) {
          const { appType: r } = p;
          let C = null,
            U = null;
          return (
            r == "Game"
              ? (C = (0, N.we)("#Dashboard_RecentApps_Game"))
              : r == "DLC"
                ? ((C = (0, N.we)("#Dashboard_RecentApps_DLC")), (U = R.DLC))
                : r == "Beta"
                  ? ((C = (0, N.we)("#Dashboard_RecentApps_Playtest")),
                    (U = R.Playtest))
                  : r == "Demo"
                    ? ((C = (0, N.we)("#Dashboard_RecentApps_Demo")),
                      (U = R.Demo))
                    : r == "Music" &&
                      ((C = (0, N.we)("#Dashboard_RecentApps_Music")),
                      (U = R.Music)),
            !!C &&
              (0, d.jsx)("div", {
                className: (0, A.A)(R.AppType, U),
                children: C,
              })
          );
        }
        function y(p) {
          const { releaseState: r, hasStoreItem: C } = p,
            U = (0, V.pc)(r, C);
          return (
            r != "released" &&
            (0, d.jsx)("div", {
              className: (0, A.A)(R.AppRelease),
              children: U.sText,
            })
          );
        }
        function O() {
          const p = (0, _.Tc)("rgRecentApps", "application_config"),
            r = p ? Object.keys(p).map((ve) => p[ve]) : [],
            C = (0, _.Tc)("rgRecentUnreleasedApps", "application_config"),
            U = C ? Object.keys(C).map((ve) => C[ve]) : [],
            E = (0, V.Gx)(r, U);
          return E.sort((ve, M) => ve.nOrder - M.nOrder), E;
        }
      },
      6777: (pe, me, n) => {
        "use strict";
        n.d(me, { $: () => L });
        var d = n(7850),
          Q = n(90626),
          e = n(18210),
          q = n(6853),
          m = n.n(q);
        const L = Q.forwardRef((A, N) => {
          const {
            title: _,
            count: R,
            description: I,
            children: V,
            beta: a,
            headerElement: v,
          } = A;
          return (0, d.jsxs)("div", {
            className: q.Section,
            ref: N,
            children: [
              (0, d.jsxs)("div", {
                className: q.Header,
                children: [
                  (0, d.jsxs)("div", {
                    className: q.Title,
                    children: [
                      _,
                      R != null &&
                        (0, d.jsx)("span", { className: q.Count, children: R }),
                      a &&
                        (0, d.jsx)("span", {
                          className: q.BetaCallout,
                          children: (0, e.we)("#NewToolTitleSuffix_Beta"),
                        }),
                    ],
                  }),
                  v,
                ],
              }),
              I && (0, d.jsx)("div", { className: q.Body, children: I }),
              V,
            ],
          });
        });
      },
      24541: (pe, me, n) => {
        "use strict";
        n.d(me, { On: () => g, jw: () => $ });
        var d = n(72609),
          Q = n(20194),
          e = n(90626);
        const q = "steamQueryPersist";
        function m(f) {
          return f.meta?.[q];
        }
        const L = e.createContext(void 0),
          A = L.Provider;
        function N(f) {
          const { area: Y, maxAgeSeconds: G, meta: i, ...t } = f,
            j = e.useContext(L),
            F = e.useMemo(() => _(i, Y, G), [i, Y, G]);
          return (0, Q.I)({ ...t, meta: F, persister: j?.GetPersister(Y) });
        }
        function _(f, Y, G) {
          return { ...f, [q]: { area: Y, maxAgeSeconds: G } };
        }
        async function R(f, Y) {
          const { area: G, maxAgeSeconds: i, meta: t, ...j } = Y,
            F = { ...j, meta: _(t, G, i), staleTime: 0 },
            k = f.getQueryState(j.queryKey);
          k &&
            k.fetchStatus !== "idle" &&
            (await f.fetchQuery(F).catch(() => {})),
            await f.fetchQuery(F);
        }
        const I = Date.now();
        function V(f) {
          return f > 0 && f < I;
        }
        var a = n(68312),
          v = n(72604),
          c = n(27386);
        const ee = 0;
        function z(f, ...Y) {
          return ["achievements", f, ...Y];
        }
        const J = (f) => z(f, "schema");
        function y(f, Y) {
          if (!(Y === void 0 || Y === ""))
            return `${d.TS.BASE_URL_SHARED_CDN}community_assets/images/apps/${f}/${Y}`;
        }
        async function O(f, Y, G) {
          const i = await c.xtC.GetGameAchievements(f, {
            appid: Y,
            language: G,
          });
          if (i.GetEResult() === v.p)
            return {
              appid: Y,
              language: G,
              groups: [],
              schema_hash: 0,
              schema_version: 0,
            };
          if (i.GetEResult() !== v.R)
            throw (
              (console.error(
                "Received error from GetGameAchievements",
                i.GetEResult(),
              ),
              new Error(`Error from GetGameAchievements: ${i.GetEResult()}`))
            );
          const t = {};
          t[ee] = {
            id: ee,
            archived: !1,
            developeronly: !1,
            ispublic: !0,
            dlcappid: 0,
            order: -1,
            achievements: [],
          };
          const j = i.Body().groups().toString();
          i
            .Body()
            .groups()
            .forEach((X) => {
              const te = X.groupid();
              t[te] = {
                id: te,
                name: X.localized_name(),
                archived: X.archived() ?? !1,
                ispublic: X.ispublic() ?? !0,
                developeronly: X.developeronly() ?? !1,
                dlcappid: X.dlcappid() ?? 0,
                order: X.order() ?? 0,
                achievements: [],
              };
            }),
            i
              .Body()
              .toObject()
              ?.achievements?.forEach((X) => {
                const te = X.groupid ?? ee;
                t[te].achievements.push({
                  internal_key: X.internal_key ?? 0,
                  api_name: X.internal_name ?? "",
                  name: X.localized_name,
                  description: X.localized_desc,
                  hidden: X.hidden ?? !1,
                  archived: X.archived ?? !1,
                  icon_achieved: y(Y, X.icon),
                  icon_unachieved: y(Y, X.icon_gray),
                  groupid: X.groupid ?? ee,
                  min_progress: X.min_progress_int ?? X.min_progress_float,
                  max_progress: X.max_progress_int ?? X.max_progress_float,
                });
              });
          const F = Object.values(t)
            .filter((X) => X.achievements.length > 0)
            .sort((X, te) => X.order - te.order);
          return {
            appid: Y,
            language: G,
            groups: F,
            schema_hash: i.Body()?.schema_hash() ?? 0,
            schema_version: i.Body()?.schema_version() ?? 0,
          };
        }
        const p = (f) => z(f, "globalpercentages");
        async function r(f, Y) {
          const G = await c.xtC.GetGlobalAchievementPercentages(f, {
            appid: Y,
          });
          if (G.GetEResult() === v.p) return { percentages: {} };
          if (G.GetEResult() !== v.R)
            throw (
              (console.error(
                "Received error from GetGlobalAchievementPercentages",
                G.GetEResult(),
              ),
              new Error(
                `Error from GetGlobalAchievementPercentages: ${G.GetEResult()}`,
              ))
            );
          return {
            percentages: G.Body()
              .achievements()
              .reduce((t, j) => {
                const F = j.internal_key();
                return (
                  F === void 0 || (t[F] = j.player_percent_unlocked() ?? 0.1), t
                );
              }, {}),
          };
        }
        function C(f, Y) {
          return z(f, "user_achievements", Y);
        }
        function U(f, Y, G, i) {
          const t = (G?.achievements() ?? []).reduce((F, k) => {
              const X = k.internal_key();
              return (
                (F[X] = {
                  internal_key: X,
                  unlocked: k.unlocked(),
                  unlock_time: k.unlock_time(),
                  progress: k.progress_int() ?? k.progress_float(),
                }),
                F
              );
            }, {}),
            j = (G?.groups() ?? []).reduce((F, k) => {
              const X = k.groupid(),
                te = k.is_completed(),
                oe = k.time_completed();
              return (
                (F[X] = {
                  groupid: X,
                  is_achievable: k.is_achievable(),
                  completed_achievements: k.completed_achievements() ?? 0,
                  is_completed: te === void 0 ? !1 : te,
                  time_completed: oe || void 0,
                }),
                F
              );
            }, {});
          return {
            appid: f,
            steamid: Y,
            achievements: t,
            groups: j,
            schema_hash: i,
          };
        }
        function E(f, Y) {
          if (!f) return Y;
          const G = { ...f.groups };
          for (const i of Object.values(Y.groups)) {
            const t = f.groups[i.groupid];
            G[i.groupid] = {
              ...i,
              is_completed: (t?.is_completed ?? !1) || i.is_completed,
              time_completed: t?.time_completed ?? i.time_completed,
            };
          }
          return {
            ...f,
            achievements: { ...f.achievements, ...Y.achievements },
            groups: G,
          };
        }
        class ve extends Error {
          constructor() {
            super("GetUserAchievements: server unreachable");
          }
        }
        function M(f) {
          const Y = f.Hdr().transport_error();
          return Y === k_ETransportError_RequestNotSent ||
            Y === k_ETransportError_ResponseNotReceived
            ? !0
            : f.GetEResult() === k_EResultNoConnection ||
                f.GetEResult() === k_EResultTimeout;
        }
        async function ce(f, Y, G) {
          if (G == "" || G == "0") return U(Y, G, void 0, 0);
          const i = await PlayerService.GetUserAchievements(f, {
            appid: Y,
            steamid: G,
          });
          if (
            i.GetEResult() === k_EResultAccessDenied ||
            i.GetEResult() === k_EResultAccountNotFound
          )
            return U(Y, G, void 0, 0);
          if (M(i)) throw new ve();
          if (i.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from GetUserAchievements",
                i.GetEResult(),
              ),
              new Error(`Error from GetUserAchievements: ${i.GetEResult()}`))
            );
          return U(Y, G, i.Body(), i.Body()?.schema_hash() ?? 0);
        }
        var ye = n(37901);
        const T = {};
        (T.arabic = () => n.e(94507).then(n.t.bind(n, 94507, 19))),
          (T.brazilian = () => n.e(29815).then(n.t.bind(n, 29815, 19))),
          (T.bulgarian = () => n.e(79200).then(n.t.bind(n, 79200, 19))),
          (T.czech = () => n.e(81142).then(n.t.bind(n, 81142, 19))),
          (T.danish = () => n.e(42394).then(n.t.bind(n, 42394, 19))),
          (T.dutch = () => n.e(80559).then(n.t.bind(n, 80559, 19))),
          (T.english = () => n.e(92885).then(n.t.bind(n, 92885, 19))),
          (T.finnish = () => n.e(22754).then(n.t.bind(n, 22754, 19))),
          (T.french = () => n.e(89627).then(n.t.bind(n, 89627, 19))),
          (T.german = () => n.e(8281).then(n.t.bind(n, 8281, 19))),
          (T.greek = () => n.e(53749).then(n.t.bind(n, 53749, 19))),
          (T.hungarian = () => n.e(88180).then(n.t.bind(n, 88180, 19))),
          (T.indonesian = () => n.e(13303).then(n.t.bind(n, 13303, 19))),
          (T.italian = () => n.e(28757).then(n.t.bind(n, 28757, 19))),
          (T.japanese = () => n.e(88468).then(n.t.bind(n, 88468, 19))),
          (T.koreana = () => n.e(82558).then(n.t.bind(n, 82558, 19))),
          (T.latam = () => n.e(3894).then(n.t.bind(n, 3894, 19))),
          (T.malay = () => n.e(35957).then(n.t.bind(n, 35957, 19))),
          (T.norwegian = () => n.e(43081).then(n.t.bind(n, 43081, 19))),
          (T.polish = () => n.e(63822).then(n.t.bind(n, 63822, 19))),
          (T.portuguese = () => n.e(16470).then(n.t.bind(n, 16470, 19))),
          (T.romanian = () => n.e(46488).then(n.t.bind(n, 46488, 19))),
          (T.russian = () => n.e(50272).then(n.t.bind(n, 50272, 19))),
          (T.sc_schinese = () => n.e(88794).then(n.t.bind(n, 88794, 19))),
          (T.schinese = () => n.e(15171).then(n.t.bind(n, 15171, 19))),
          (T.spanish = () => n.e(34341).then(n.t.bind(n, 34341, 19))),
          (T.swedish = () => n.e(61844).then(n.t.bind(n, 61844, 19))),
          (T.tchinese = () => n.e(71088).then(n.t.bind(n, 71088, 19))),
          (T.thai = () => n.e(49829).then(n.t.bind(n, 49829, 19))),
          (T.turkish = () => n.e(95917).then(n.t.bind(n, 95917, 19))),
          (T.ukrainian = () => n.e(15151).then(n.t.bind(n, 15151, 19))),
          (T.vietnamese = () => n.e(53460).then(n.t.bind(n, 53460, 19)));
        async function de(f) {
          if (T[f]) return T[f]();
        }
        const ae = (0, ye.l)(de);
        function le(f) {
          return {
            ...f,
            groups: f.groups.map((Y) =>
              Y.id === ee
                ? { ...Y, name: ae.Localize("#Achievements_Set_BaseGame") }
                : Y,
            ),
          };
        }
        function re(f, Y) {
          return {
            queryKey: J(Y),
            queryFn: async () => {
              const G = d.TS.LANGUAGE;
              return O(f, Y, G);
            },
            select: le,
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function g(f) {
          const Y = (0, a.KV)();
          return N(re(Y, f));
        }
        function H(f, Y) {
          return {
            queryKey: p(Y),
            queryFn: async () => r(f, Y),
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function $(f) {
          const Y = (0, a.KV)();
          return N(H(Y, f));
        }
        function se(f, Y) {
          const { data: G } = $(f);
          if (G) return G.percentages[Y] ?? void 0;
        }
        function W(f, Y, G) {
          return {
            queryKey: GetUserAchievementsQueryKey(Y, G),
            queryFn: async () => GetUserAchievements(f, Y, G),
            staleTime: 600 * 1e3,
            area: "achievements",
          };
        }
        function Z(f, Y, G) {
          const { fnFetchLocalUserAchievements: i } = useAchievementsHost(),
            t = !!i && !!Y && G.error instanceof ServerUnreachableError,
            j = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                f,
                "local_user_achievements",
                Y,
                G.errorUpdatedAt,
              ),
              queryFn: async () => (await i(f, Y)) ?? null,
              enabled: t,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
            }),
            F = t ? j.data : void 0,
            k = j.dataUpdatedAt;
          return useMemo(
            () =>
              F
                ? {
                    ...G,
                    data: MergeLocalUserAchievements(G.data, F),
                    dataUpdatedAt: Math.max(G.dataUpdatedAt, k),
                  }
                : G,
            [G, F, k],
          );
        }
        function B(f, Y) {
          const G = useActiveServiceTransport(),
            i = usePersistedQuery(W(G, f, Y));
          return Z(f, Y, i);
        }
        function fe(f, Y) {
          const G = useActiveServiceTransport(),
            i = g(f),
            t = $(f),
            j = usePersistedQuery({ ...W(G, f, Y ?? ""), enabled: !!Y }),
            F = Z(f, Y ?? "", j),
            k = !!Y,
            X = i.data,
            te = k ? F.data : void 0,
            oe = X != null && (!k || te !== void 0),
            ge = () => (oe ? GetAchievementsSummary(X, t.data, te) : void 0),
            he = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                f,
                "summary",
                Y ?? "",
                i.dataUpdatedAt,
                t.dataUpdatedAt,
                k ? F.dataUpdatedAt : 0,
              ),
              queryFn: () => {
                const w = ge();
                if (w === void 0)
                  throw new Error("No achievements schema to summarize");
                return w;
              },
              initialData: ge,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: oe,
            }),
            u = k ? [i, F] : [i],
            o = u.find((w) => w.data === void 0),
            s = o?.isPending ?? !1,
            h = u.find((w) => w.isError),
            S = o ? void 0 : he.data;
          return {
            isPending: s,
            isError: !s && S === void 0,
            error: h?.error ?? null,
            data: S,
          };
        }
        async function ue(f, Y, G, i) {
          await FetchPersistedQuery(f, W(Y, G, i));
        }
        async function K(f, Y, G) {
          await FetchPersistedQuery(f, re(Y, G));
        }
      },
      75083: (pe, me, n) => {
        "use strict";
        n.d(me, { $: () => ee, v: () => z });
        var d = n(7850),
          Q = n(64238),
          e = n.n(Q),
          q = n(69041),
          m = n(8928),
          L = n(69289),
          A = n(3877),
          N = n(86668),
          _ = n(24660),
          R = n(80549),
          I = n(3166);
        function V(J) {
          const {
              variant: y,
              size: O = "2",
              minWidth: p = "fit-content",
              color: r,
              loading: C,
              children: U,
              onClick: E,
              icon: ve,
              focusable: M,
              navProps: ce,
              ...ye
            } = J,
            T = (0, I.Qn)(),
            de = C
              ? (0, d.jsx)(N.k, {
                  size: O,
                  color: r,
                  variant: "bright",
                  children: U,
                })
              : U,
            ae = C ? void 0 : E,
            le = M ?? ce?.focusable ?? !!ae,
            re = (0, R.f)("Button", y),
            g = {
              type: "button",
              ...(0, L.mz)(
                {
                  ...ye,
                  variant: re,
                  size: O,
                  minWidth: p,
                  color: r,
                  className: e()(q.Button, ve && q.Icon),
                  onClick: ae,
                },
                c,
              ),
              children: de,
            };
          return T && (le || ce)
            ? (0, d.jsx)(_.fu, { ...g, ...(ce || {}), focusable: le })
            : (0, d.jsx)("button", { ...g });
        }
        function a(J) {
          const {
              variant: y,
              size: O = "2",
              minWidth: p = "fit-content",
              disabled: r,
              icon: C,
              focusable: U,
              navProps: E,
              ...ve
            } = J,
            M = (0, I.Qn)(),
            ce = (0, R.f)("Button", y),
            ye = r ? v : void 0,
            T = (0, L.mz)(
              {
                onClick: ye,
                "aria-disabled": r,
                ...ve,
                variant: ce,
                size: O,
                minWidth: p,
                className: e()(q.Button, C && q.Icon, (0, A.T)()),
              },
              c,
            );
          return M && (U || E)
            ? (0, d.jsx)(_.Ii, { ...T, ...(E || {}), focusable: U })
            : (0, d.jsx)("a", { ...T });
        }
        function v(J) {
          J.preventDefault();
        }
        const c = [
            ...m.L,
            { prop: "size", responsive: !0, className: (J) => q[`Size-${J}`] },
            { prop: "variant", className: (J) => q[`Variant-${J}`] },
            { prop: "color", dataProperty: (J) => ["accent-color", `${J}`] },
            {
              prop: "width",
              className: q.Width,
              cssProperty: "--width",
              responsive: !0,
            },
            {
              prop: "minWidth",
              className: q.MinWidth,
              cssProperty: "--min-width",
              responsive: !0,
            },
          ],
          ee = V,
          z = a;
      },
      99631: (pe, me, n) => {
        "use strict";
        n.d(me, { C: () => q, I: () => m });
        var d = n(7850),
          Q = n(90626),
          e = n(7125);
        const q = Symbol("CoercingTextInputNotParseable");
        function m(L) {
          const {
              value: A,
              onValueChange: N,
              valueToString: _,
              valueFromString: R,
              checkValidText: I,
              onBlur: V,
              onKeyDown: a,
              ...v
            } = L,
            [c, ee] = (0, Q.useState)(null),
            z = c ?? (A === void 0 ? "" : _(A)),
            J = (r) => {
              const C = R(r);
              C !== q && r === _(C)
                ? (ee(null), N(C))
                : (!I || I(r, C)) && ee(r);
            },
            y = () => {
              if (c !== null) {
                const r = R(c);
                r !== q && N(r), ee(null);
              }
            },
            O = (r) => {
              y(), V && V(r);
            },
            p = (r) => {
              r.key === "Enter" && y(), a && a(r);
            };
          return (0, d.jsx)(e.k, {
            value: z,
            onTextChange: J,
            onKeyDown: p,
            onBlur: O,
            ...v,
          });
        }
      },
      74769: (pe, me, n) => {
        "use strict";
        n.d(me, { G3: () => B, PT: () => K });
        var d = n(7850),
          Q = n(90626),
          e = n(86946),
          q = n(12204),
          m = n(15252),
          L = n(7125),
          A = n(63029),
          N = n(92142),
          _ = n(92148),
          R = n(59366),
          I = n(60351),
          V = n(76854),
          a = n(68031),
          v = n(36707),
          c = n(39790),
          ee = n(85367),
          z = n(71742),
          J = n(82277),
          y = n.n(J),
          O = n(80549),
          p = n(3166),
          r = n(58017),
          C = n(64415);
        function U(G) {
          const {
              children: i,
              state: t,
              placement: j = "bottom-end",
              popoverWidth: F = "dropdown",
              popoverMaxHeight: k,
              popoverPresentation: X,
              popoverLabel: te,
              ...oe
            } = G,
            [ge, he] = (0, Q.useState)(void 0);
          (0, Q.useEffect)(() => he(void 0), [t.bOpen]);
          const u = (0, p.Qn)(),
            o = (0, Q.useRef)(null),
            s = (0, Q.useRef)(null),
            h = (0, Q.useMemo)(
              () => t.rgFilteredOptions.findIndex((D) => D === t.selectedValue),
              [t.selectedValue, t.rgFilteredOptions],
            ),
            S = (0, N.T)({
              open: t.bOpen,
              onOpenChange: t.setOpen,
              width: F,
              maxHeight: k,
              placement: j,
              presentation: X,
              gutter: "4",
              activeIndex: t.activeIndex,
              setActiveIndex: t.setActiveIndex,
              selectedIndex: h,
              setSelectedIndex: (D) =>
                t.onItemSelectionChange(t.rgFilteredOptions[D]),
              interactions: { click: !0, virtualItemFocus: !u },
              role: "combobox",
              scroll: !1,
            }),
            w = {
              ...t,
              ...oe,
              focusedValue: ge,
              onFocusChange: he,
              refPopover: o,
              refScrollElement: s,
              setOpen: (D) => {
                if (D) {
                  let ne = null;
                  t.multiselect
                    ? (ne = Array.isArray(t.selectedValue)
                        ? t.selectedValue[0]
                        : null)
                    : (ne = t.selectedValue),
                    he(ne),
                    t.onInputChange("");
                }
                t.setOpen(D);
              },
              onIndexSelected: (D) => {
                const ne = S.elementsRef.current;
                ne && ne[D] && ne[D].click();
              },
              popoverPlacement: S.floating.placement,
              popoverPresentation: S.presentation,
              popoverLabel: te,
            };
          return (0, d.jsx)(f.Provider, {
            value: w,
            children: (0, d.jsx)(N.k.Root, { state: S, children: i }),
          });
        }
        function E(G) {
          const {
              refPopover: i,
              inputValue: t,
              onInputChange: j,
              activeIndex: F,
              popoverPlacement: k,
              popoverPresentation: X,
              popoverLabel: te,
              multiselect: oe,
              setActiveIndex: ge,
              setOpen: he,
              filterPlaceholder: u,
              onIndexSelected: o,
              refScrollElement: s,
            } = Y("<Combobox.Options>"),
            h = (l) => {
              l && l.focus({ preventScroll: !0 });
            },
            S = (l) => {
              l.key === "Enter" &&
                F !== null &&
                (o(F),
                oe || (ge(null), he(!1)),
                l.preventDefault(),
                l.stopPropagation());
            },
            w = X === "anchor" && k.startsWith("top"),
            D = (0, d.jsx)(I.az, {
              overflow: "auto",
              ref: s,
              style: { overscrollBehavior: "contain" },
              children: G.children,
            }),
            ne = (l) => {
              (l.key === "Home" || l.key === "End") && l.stopPropagation();
            };
          return (0, d.jsx)(N.k.Positioner, {
            ref: i,
            label: te,
            children: (0, d.jsxs)(a.s, {
              direction: "column",
              maxHeight: "var(--popover-max-height)",
              children: [
                w && D,
                (0, d.jsx)(I.az, {
                  flexShrink: "0",
                  className: (0, v.A)(J.FilterBorder, w ? J.Top : J.Bottom),
                  children: (0, d.jsx)(L.k, {
                    margin: "3",
                    variant: "inset",
                    radius: "sm",
                    value: t,
                    onTextChange: j,
                    onKeyDown: S,
                    onKeyDownCapture: ne,
                    placeholder: u,
                    inputRef: h,
                    autoComplete: "off",
                  }),
                }),
                !w && D,
              ],
            }),
          });
        }
        const ve = (0, Q.createContext)(null);
        function M(G) {
          const { items: i, renderItem: t, overscan: j = 5, ...F } = G,
            {
              bOpen: k,
              refPopover: X,
              refScrollElement: te,
            } = Y("<ComboboxVirtualizedOptions>"),
            [oe, ge] = (0, Q.useState)(!1),
            he = k && !!X.current && !!te.current;
          (0, Q.useEffect)(() => {
            he !== oe && ge(he);
          }, [he, oe]);
          const u = (0, _.Te)({
            count: oe ? i.length : Math.min(i.length, 3),
            getScrollElement: () => te.current,
            enabled: k,
            measureElement: R.ZO,
            ...F,
          });
          return (0, d.jsx)(E, {
            children: (0, d.jsx)(ve, {
              value: u,
              children: (0, d.jsx)(I.az, {
                height: `${u.getTotalSize()}px`,
                position: "relative",
                width: "100%",
                children: u.getVirtualItems().map((o) => t(i[o.index], o, u)),
              }),
            }),
          });
        }
        function ce(G) {
          const { virtualItem: i, children: t } = G,
            j = (0, Q.useContext)(ve);
          return (
            (0, z.wT)(j, "Virtual item rendered outside of a virtualizer!"),
            (0, d.jsx)(I.az, {
              position: "absolute",
              width: "100%",
              style: { top: 0, left: 0, transform: `translateY(${i.start}px)` },
              ref: j.measureElement,
              "data-index": i.index,
              children: t,
            })
          );
        }
        function ye(G) {
          const { virtualItem: i, ...t } = G;
          return (0, d.jsx)(ce, {
            virtualItem: i,
            children: (0, d.jsx)(de, { ...t }),
          });
        }
        function T(G) {
          const { virtualItem: i, children: t } = G;
          return (0, d.jsx)(ce, { virtualItem: i, children: t });
        }
        function de(G) {
          const { value: i, children: t, disabled: j } = G,
            {
              onItemSelectionChange: F,
              selectedValue: k,
              multiselect: X,
              maxSelected: te,
            } = Y("<ComboboxTrigger>");
          let oe = !1,
            ge = !1;
          X
            ? ((oe = Array.isArray(k) && k.includes(i)),
              (ge = !!te && Array.isArray(k) && k.length >= te))
            : (oe = i === k);
          const he = j || (ge && !oe);
          return (0, d.jsxs)(N.k.Item, {
            onSelect: () => F(i),
            selected: oe,
            disabled: he,
            children: [
              X &&
                (0, d.jsxs)(a.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, d.jsx)(ee.S, { checked: oe, variant: "dark" }),
                    t,
                  ],
                }),
              !X && t,
            ],
          });
        }
        function ae(G) {
          const { children: i, beforeContent: t, render: j } = G,
            {
              bOpen: F,
              setOpen: k,
              inputValue: X,
              onInputChange: te,
              selectedValue: oe,
              focusedValue: ge,
              refScrollElement: he,
              onItemSelectionChange: u,
              activeIndex: o,
              setActiveIndex: s,
              onFocusChange: h,
              rgFilteredOptions: S,
              onSelectionChange: w,
              multiselect: D,
              onClear: ne,
              refPopover: l,
              clearable: x,
              filterPlaceholder: P,
              onIndexSelected: b,
              popoverPlacement: ie,
              popoverPresentation: xe,
              popoverLabel: Ye,
              maxSelected: Ne,
              variant: Fe,
              ...we
            } = Y("<ComboboxTrigger>"),
            Se = { tabIndex: 0, children: i },
            Ve = D ? Array.isArray(oe) && oe.length > 0 : !!oe,
            He = Ve && x,
            Je = He
              ? (0, d.jsx)(A.g, { onClick: ne, cursor: "pointer", hitSlop: !0 })
              : (0, d.jsx)(q.V, {}),
            be = He
              ? {
                  onSecondaryButton: ne,
                  actionDescriptionMap: {
                    [C.pR.SECONDARY]: r.T.Localize("#Clear"),
                  },
                }
              : void 0,
            Qe = (0, O.f)("Combobox", Fe),
            Ze = (0, d.jsx)(e.j, {
              beforeContent: t,
              afterContent: Je,
              hasValue: Ve,
              cursor: "pointer",
              tabIndex: 0,
              variant: Qe,
              navProps: be,
              ...we,
            }),
            $e = (0, V.Q)(j, Ze, Se, void 0);
          return (0, d.jsx)(N.k.Anchor, { children: $e });
        }
        function le(G) {
          return (0, d.jsx)(m.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            ...G,
          });
        }
        function re(G) {
          return (0, d.jsx)(m.EY, {
            contrast: "description",
            truncate: !0,
            ...G,
          });
        }
        function g(G, i) {
          if (typeof i == "string")
            return i.toLocaleLowerCase().includes(G.toLocaleLowerCase());
          try {
            return JSON.stringify(i)
              .toLocaleLowerCase()
              .includes(G.toLocaleLowerCase());
          } catch {}
          return (
            console.error(
              "Could not use default option filter on provided Comboxbox option. Custom filter function required.",
            ),
            !1
          );
        }
        function H(G) {
          return $(G, !1);
        }
        function $(G, i) {
          const {
              rgOptions: t,
              filter: j = g,
              filterPlaceholder: F,
              selectedValue: k,
              onSelectionChange: X,
              maxSelected: te,
            } = G,
            [oe, ge] = (0, Q.useState)(""),
            [he, u] = (0, Q.useState)(!1),
            [o, s] = (0, Q.useState)(null),
            h = (0, Q.useMemo)(() => t.filter((b) => j(oe, b)), [oe, t, j]),
            S = typeof o == "number",
            w = h.length > 0,
            D = (0, Q.useCallback)(
              (b) => {
                b && !S && w && s(0), ge(b);
              },
              [S, w],
            ),
            ne = (0, Q.useCallback)(
              (b) => {
                b || D(""), u(b);
              },
              [D],
            ),
            l = (0, Q.useCallback)(
              (b) => {
                X(b), i || ne(!1);
              },
              [i, X, ne],
            ),
            x = (b) => {
              l(i ? [] : null), b?.stopPropagation(), b?.preventDefault();
            },
            P = (0, Q.useCallback)(
              (b) => {
                if (!i) l(b);
                else if (!k) l([b]);
                else {
                  const ie = k,
                    xe = ie.indexOf(b);
                  if (xe === -1) l(ie.concat(b));
                  else return l(ie.slice(0, xe).concat(ie.slice(xe + 1)));
                }
              },
              [l, k, i],
            );
          return {
            activeIndex: o,
            setActiveIndex: s,
            rgFilteredOptions: h,
            selectedValue: k,
            onSelectionChange: l,
            onItemSelectionChange: P,
            onClear: x,
            inputValue: oe,
            onInputChange: D,
            bOpen: he,
            setOpen: ne,
            filterPlaceholder: F,
            multiselect: i,
            maxSelected: te,
          };
        }
        const se = {
          Root: U,
          Option: de,
          Options: E,
          VirtualizedOptions: M,
          VirtualizedOption: ye,
          VirtualizedContent: T,
          Trigger: ae,
          DefaultOptionFilter: g,
          Value: le,
          Placeholder: re,
        };
        function W(G) {
          return G
            ? typeof G == "string"
              ? G
              : typeof G == "number"
                ? G.toString()
                : (console.error(
                    "Could not use default option labeler on Combobox option value. Custom labeler requried",
                    G,
                  ),
                  "")
            : "";
        }
        function Z(G) {
          const {
              selectedValue: i,
              onSelectionChange: t,
              options: j,
              filter: F,
              filterPlaceholder: k,
              placeholder: X,
              getOptionLabel: te = W,
              ...oe
            } = G,
            ge = (0, Q.useCallback)(
              (o, s) => (F ? F(o, s) : g(o, te(s))),
              [F, te],
            ),
            he = H({
              onSelectionChange: t,
              selectedValue: i,
              rgOptions: j,
              filter: ge,
              filterPlaceholder: k,
            }),
            u = i != null;
          return (0, d.jsxs)(B.Root, {
            state: he,
            ...oe,
            children: [
              (0, d.jsxs)(B.Trigger, {
                children: [
                  u && (0, d.jsx)(B.Value, { children: te(i) }),
                  !u && (0, d.jsx)(B.Placeholder, { children: X }),
                ],
              }),
              (0, d.jsx)(B.Options, {
                children: he.rgFilteredOptions.map((o) =>
                  (0, d.jsx)(de, { value: o, children: te(o) }, te(o)),
                ),
              }),
            ],
          });
        }
        const B = Object.assign(Z, se);
        function fe(G) {
          return $(G, !0);
        }
        function ue(G) {
          const {
              selectedValue: i,
              onSelectionChange: t,
              options: j,
              filter: F,
              filterPlaceholder: k,
              placeholder: X,
              getOptionLabel: te = W,
              maxSelected: oe,
              ...ge
            } = G,
            he = (0, Q.useCallback)(
              (h, S) => (F ? F(h, S) : g(h, te(S))),
              [F, te],
            ),
            u = fe({
              onSelectionChange: t,
              selectedValue: i,
              rgOptions: j,
              filter: he,
              filterPlaceholder: k,
              maxSelected: oe,
            }),
            o = Array.isArray(i) && i.length > 0;
          let s = "";
          if (o) {
            const h = i.map((S) => te(S));
            "ListFormat" in Intl
              ? (s = new Intl.ListFormat((0, c.ZO)().strISOCode).format(h))
              : (s = h.join(", "));
          }
          return (0, d.jsxs)(B.Root, {
            state: u,
            ...ge,
            children: [
              (0, d.jsxs)(B.Trigger, {
                children: [
                  o && (0, d.jsx)(B.Value, { children: s }),
                  !o && (0, d.jsx)(B.Placeholder, { children: X }),
                ],
              }),
              (0, d.jsx)(B.Options, {
                children: u.rgFilteredOptions.map((h) =>
                  (0, d.jsx)(B.Option, { value: h, children: te(h) }, te(h)),
                ),
              }),
            ],
          });
        }
        const K = Object.assign(ue, se),
          f = (0, Q.createContext)(null);
        function Y(G) {
          const i = (0, Q.useContext)(f);
          return (
            i || console.error(`${G} must be used within a <Combobox>!`), i
          );
        }
      },
      98929: (pe, me, n) => {
        "use strict";
        n.d(me, { F: () => e });
        var d = n(24089),
          Q = n.n(d);
        function e() {
          return d.TextEntry;
        }
      },
      86668: (pe, me, n) => {
        "use strict";
        n.d(me, { k: () => I });
        var d = n(7850),
          Q = n(73406),
          e = n.n(Q),
          q = n(69289),
          m = n(60351),
          L = n(64238),
          A = n.n(L),
          N = n(68031),
          _ = n(8928),
          R = n(80549);
        function I(v) {
          const {
              size: c = "3",
              loading: ee = !0,
              children: z,
              color: J,
              variant: y,
              ...O
            } = v,
            p = (0, R.f)("LoadingSpinner", y);
          return z || !ee
            ? (0, d.jsxs)(m.az, {
                position: "relative",
                ...O,
                width: "fit-content",
                children: [
                  (0, d.jsx)("div", {
                    "data-visibility": !ee,
                    className: Q.ChildContainer,
                    children: z,
                  }),
                  ee &&
                    (0, d.jsx)(N.s, {
                      position: "absolute",
                      inset: "0",
                      justify: "center",
                      align: "center",
                      children: (0, d.jsx)(V, {
                        size: c,
                        color: J,
                        variant: p,
                      }),
                    }),
                ],
              })
            : (0, d.jsx)(V, { size: c, color: J, variant: p, ...O });
        }
        function V(v) {
          const { className: c, color: ee, ...z } = (0, q.mz)(v, a);
          return (0, d.jsx)("div", {
            "data-accent-color": ee,
            className: A()(c, Q.Spinner),
            ...z,
          });
        }
        const a = [
          ..._.L,
          { prop: "size", responsive: !0, className: (v) => Q[`Size-${v}`] },
          { prop: "variant", className: (v) => Q[`Variant-${v}`] },
        ];
      },
      58952: (pe, me, n) => {
        "use strict";
        n.d(me, { WM: () => p, l6: () => ve, uh: () => T });
        var d = n(7850),
          Q = n(90626),
          e = n(92142),
          q = n(86946),
          m = n(12204),
          L = n(15252),
          A = n(63029),
          N = n(76854),
          _ = n(39790),
          R = n(85367),
          I = n(68031),
          V = n(80549),
          a = n(58017),
          v = n(64415);
        function c(le) {
          const {
              children: re,
              state: g,
              placement: H = "bottom-end",
              popoverWidth: $ = "dropdown",
              popoverMaxHeight: se,
              popoverPresentation: W,
              popoverLabel: Z,
              ...B
            } = le,
            [fe, ue] = (0, Q.useState)(null),
            [K, f] = (0, Q.useState)(null),
            Y = (0, Q.useMemo)(
              () =>
                g.rgOptions.findIndex((j) =>
                  g.multiselect
                    ? g.selectedValue.includes(j)
                    : j === g.selectedValue,
                ),
              [g.selectedValue, g.rgOptions, g.multiselect],
            ),
            G = (0, Q.useRef)(null),
            i = {
              ...g,
              ...B,
              focusedValue: fe,
              onFocusChange: ue,
              refPopover: G,
              popoverLabel: Z,
              setOpen: (j) => {
                j && ue(g.multiselect ? g.selectedValue[0] : g.selectedValue),
                  g.setOpen(j);
              },
              focusedIndex: K,
              onFocusedIndexChange: f,
            },
            t = (0, e.T)({
              open: g.bOpen,
              onOpenChange: g.setOpen,
              width: $,
              maxHeight: se,
              placement: H,
              presentation: W,
              selectedIndex: Y,
              setSelectedIndex: (j) => g.onItemSelectionChange(g.rgOptions[j]),
              activeIndex: K,
              setActiveIndex: f,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, d.jsx)(de.Provider, {
            value: i,
            children: (0, d.jsx)(e.k.Root, { state: t, children: re }),
          });
        }
        function ee(le) {
          const { refPopover: re, popoverLabel: g } = ae("<Select.Options>");
          return (0, d.jsx)(e.k.Positioner, {
            ref: re,
            label: g,
            children: le.children,
          });
        }
        function z(le) {
          const { value: re, children: g, disabled: H, ...$ } = le,
            {
              onItemSelectionChange: se,
              multiselect: W,
              selectedValue: Z,
              maxSelected: B,
            } = ae("<SelectTrigger>"),
            fe = typeof re == "string" ? re : void 0;
          let ue = !1,
            K = !1;
          W
            ? ((ue = Array.isArray(Z) && Z.includes(re)),
              (K = !!B && Array.isArray(Z) && Z.length >= B))
            : (ue = re === Z);
          const f = H || (K && !ue);
          return (0, d.jsxs)(e.k.Item, {
            label: fe,
            onSelect: () => se(re),
            selected: ue,
            disabled: f,
            ...$,
            children: [
              W &&
                (0, d.jsxs)(I.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, d.jsx)(R.S, { checked: ue, variant: "dark" }),
                    g,
                  ],
                }),
              !W && g,
            ],
          });
        }
        function J(le) {
          const { children: re, render: g } = le,
            {
              bOpen: H,
              setOpen: $,
              selectedValue: se,
              variant: W,
              size: Z,
              radius: B,
              status: fe,
              rgOptions: ue,
              multiselect: K,
              onClear: f,
              focusedValue: Y,
              onFocusChange: G,
              onSelectionChange: i,
              clearable: t,
              focusedIndex: j,
              onItemSelectionChange: F,
              onFocusedIndexChange: k,
              refPopover: X,
              popoverLabel: te,
              placeholder: oe,
              maxSelected: ge,
              ...he
            } = ae("<SelectTrigger>"),
            u = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => $(!H),
              children: re,
            },
            o = K ? Array.isArray(se) && se.length > 0 : !!se,
            s = o && t,
            h = s
              ? (0, d.jsx)(A.g, { onClick: f, cursor: "pointer", hitSlop: !0 })
              : (0, d.jsx)(m.V, {}),
            S = s
              ? {
                  onSecondaryButton: f,
                  actionDescriptionMap: {
                    [v.pR.SECONDARY]: a.T.Localize("#Clear"),
                  },
                }
              : void 0,
            w = (0, V.f)("Select", W),
            D = (0, d.jsx)(q.j, {
              afterContent: h,
              variant: w,
              size: Z,
              radius: B,
              status: fe,
              hasValue: o,
              tabIndex: 0,
              cursor: "pointer",
              navProps: S,
              ...he,
            }),
            ne = (0, N.Q)(g, D, u, void 0);
          return (0, d.jsx)(e.k.Anchor, { children: ne });
        }
        function y(le) {
          return (0, d.jsx)(L.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: le.children,
          });
        }
        function O(le) {
          return (0, d.jsx)(L.EY, {
            contrast: "description",
            truncate: !0,
            children: le.children,
          });
        }
        function p(le) {
          return r(le, !1);
        }
        function r(le, re) {
          const { onSelectionChange: g, selectedValue: H, ...$ } = le,
            [se, W] = (0, Q.useState)(!1),
            Z = (0, Q.useCallback)(
              (ue) => {
                g(ue), re || W(!1);
              },
              [g, re],
            ),
            B = (0, Q.useCallback)(
              (ue) => {
                Z(re ? [] : null), ue?.stopPropagation(), ue?.preventDefault();
              },
              [Z, re],
            ),
            fe = (0, Q.useCallback)(
              (ue) => {
                if (!re) Z(ue);
                else {
                  const K = H,
                    f = K.indexOf(ue);
                  if (f === -1) Z(K.concat(ue));
                  else return Z(K.slice(0, f).concat(K.slice(f + 1)));
                }
              },
              [Z, H, re],
            );
          return {
            onSelectionChange: Z,
            onItemSelectionChange: fe,
            onClear: B,
            bOpen: se,
            setOpen: W,
            multiselect: re,
            selectedValue: H,
            ...$,
          };
        }
        const C = {
          Root: c,
          Option: z,
          Options: ee,
          Trigger: J,
          Value: y,
          Placeholder: O,
        };
        function U(le) {
          return typeof le == "string"
            ? le
            : typeof le == "number"
              ? le.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  le,
                ),
                "");
        }
        function E(le) {
          const {
              selectedValue: re,
              onSelectionChange: g,
              options: H,
              placeholder: $,
              getOptionLabel: se = U,
              ...W
            } = le,
            Z = p({
              onSelectionChange: g,
              selectedValue: re,
              rgOptions: H,
              placeholder: $,
            }),
            B = re != null,
            fe = B ? se(re) : "";
          return (0, d.jsxs)(ve.Root, {
            state: Z,
            ...W,
            children: [
              (0, d.jsxs)(ve.Trigger, {
                children: [
                  B && (0, d.jsx)(ve.Value, { children: fe }),
                  !B && (0, d.jsx)(ve.Placeholder, { children: $ }),
                ],
              }),
              (0, d.jsx)(ve.Options, {
                children: Z.rgOptions.map((ue, K) =>
                  (0, d.jsx)(ve.Option, { value: ue, children: se(ue) }, K),
                ),
              }),
            ],
          });
        }
        const ve = Object.assign(E, C);
        function M(le) {
          return r(le, !0);
        }
        const ce = C;
        function ye(le) {
          const {
              selectedValue: re,
              onSelectionChange: g,
              options: H,
              placeholder: $,
              getOptionLabel: se = U,
              maxSelected: W,
              ...Z
            } = le,
            B = M({
              onSelectionChange: g,
              selectedValue: re,
              rgOptions: H,
              placeholder: $,
              maxSelected: W,
            }),
            fe = Array.isArray(re) && re.length > 0;
          let ue = "";
          if (fe) {
            const K = re.map((f) => se(f));
            "ListFormat" in Intl
              ? (ue = new Intl.ListFormat((0, _.ZO)().strISOCode).format(K))
              : (ue = K.join(", "));
          }
          return (0, d.jsxs)(T.Root, {
            state: B,
            ...Z,
            children: [
              (0, d.jsxs)(T.Trigger, {
                children: [
                  fe && (0, d.jsx)(T.Value, { children: ue }),
                  !fe && (0, d.jsx)(T.Placeholder, { children: $ }),
                ],
              }),
              (0, d.jsx)(T.Options, {
                children: B.rgOptions.map((K, f) =>
                  (0, d.jsx)(T.Option, { value: K, children: se(K) }, f),
                ),
              }),
            ],
          });
        }
        const T = Object.assign(ye, ce),
          de = (0, Q.createContext)(null);
        function ae(le) {
          const re = (0, Q.useContext)(de);
          return (
            re || console.error(`${le} must be used within a <Select>!`), re
          );
        }
      },
      9656: (pe, me, n) => {
        "use strict";
        n.d(me, { F: () => R });
        var d = n(7850),
          Q = n(90626),
          e = n(71742),
          q = n(13854),
          m = n(75),
          L = n.n(m),
          A = n(76854);
        const N = Object.assign(_, { Root: V, Track: v, Range: c, Handle: ee });
        function _(O) {
          const {
              value: p,
              onValueChange: r,
              onValueSettled: C,
              min: U,
              ...E
            } = O,
            ve = [p],
            M = (0, Q.useCallback)((ye) => r(ye[0]), [r]),
            ce = (0, Q.useCallback)((ye) => C?.(ye[0]), [C]);
          return (0, d.jsxs)(V, {
            ...E,
            min: U,
            onValueChange: M,
            onValueSettled: ce,
            value: ve,
            children: [
              (0, d.jsx)(v, { children: (0, d.jsx)(c, { start: U, end: p }) }),
              (0, d.jsx)(ee, {}),
            ],
          });
        }
        function R(O) {
          const { value: p } = O;
          return (0, d.jsxs)(V, {
            ...O,
            children: [
              (0, d.jsx)(v, {
                children: (0, d.jsx)(c, { start: p[0], end: p[1] }),
              }),
              (0, d.jsx)(ee, {}),
              (0, d.jsx)(ee, {}),
            ],
          });
        }
        const I = (0, Q.createContext)(null);
        function V(O) {
          const { children: p, color: r, ...C } = O,
            {
              min: U,
              max: E,
              onValueChange: ve,
              value: M,
              step: ce = 1,
              onValueSettled: ye,
            } = O,
            T = (0, Q.useRef)(null),
            de = (0, Q.useRef)(null),
            [ae] = (0, Q.useState)(() => new Set()),
            [le, re] = (0, Q.useState)(!1);
          return (0, d.jsx)(I.Provider, {
            value: { ...C, handles: ae, bDragActive: le },
            children: (0, d.jsx)("div", {
              className: m.SliderRoot,
              "data-accent-color": r,
              ref: T,
              onPointerDown: (g) => {
                if (T.current) {
                  if (
                    (g.target.setPointerCapture(g.pointerId),
                    typeof M != "number")
                  ) {
                    const H = T.current.getBoundingClientRect(),
                      $ = z(g.clientX - H.left, [0, H.width], [U, E]);
                    de.current = { activeValueIndex: a(M, $), bMoved: !1 };
                  } else de.current = { activeValueIndex: 0, bMoved: !1 };
                  re(!0);
                }
              },
              onPointerUp: (g) => {
                const H = g.target;
                H.hasPointerCapture(g.pointerId) &&
                  (H.releasePointerCapture(g.pointerId),
                  ye && de.current?.bMoved && ye(M),
                  re(!1));
              },
              onPointerMove: (g) => {
                if (
                  g.target.hasPointerCapture(g.pointerId) &&
                  T.current &&
                  de.current
                ) {
                  const $ = T.current.getBoundingClientRect(),
                    se = z(g.clientX - $.left, [0, $.width], [U, E]),
                    W = J({ value: se, min: U, max: E, step: ce }),
                    Z = [...M];
                  (Z[de.current.activeValueIndex] = W),
                    Z.sort((B, fe) => B - fe),
                    (de.current.activeValueIndex = Z.indexOf(W)),
                    (de.current.bMoved = !0),
                    ve(Z);
                }
              },
              onClick: (g) => {
                if (!T.current || de.current?.bMoved) return;
                const H = T.current.getBoundingClientRect(),
                  $ = z(g.clientX - H.left, [0, H.width], [U, E]),
                  se = J({ value: $, min: U, max: E, step: ce }),
                  W = a(M, $),
                  Z = [...M];
                (Z[W] = se), ve(Z), ye && ye(Z);
              },
              children: (0, d.jsx)("div", { className: m.Inner, children: p }),
            }),
          });
        }
        function a(O, p) {
          if (O.length <= 1) return O.length - 1;
          let r = 0,
            C = Math.abs(p - O[0]);
          for (let U = 1; U < O.length; U++) {
            const E = Math.abs(O[U] - p);
            E < C && ((r = U), (C = E));
          }
          return r;
        }
        function v(O) {
          const { render: p, ...r } = O;
          return (0, A.Q)(
            p,
            (0, d.jsx)("div", { className: m.SliderTrack }),
            r,
            void 0,
          );
        }
        function c(O) {
          const { start: p, end: r, render: C } = O,
            U = (0, Q.useContext)(I);
          (0, e.wT)(U, "SliderRange must be used within a SliderRoot!");
          const { min: E, max: ve } = U,
            M = y(p, E, ve),
            ce = 100 - y(r, E, ve);
          return (0, A.Q)(
            C,
            (0, d.jsx)("div", {
              className: m.SliderRange,
              style: { "--pct-left": `${M}%`, "--pct-right": `${ce}%` },
            }),
            {},
            void 0,
          );
        }
        function ee(O) {
          const { render: p } = O,
            r = (0, Q.useContext)(I);
          (0, e.wT)(r, "SliderHandle must be used within a SliderRoot!");
          const {
              min: C,
              max: U,
              handles: E,
              value: ve,
              step: M = 1,
              onValueChange: ce,
              onValueSettled: ye,
            } = r,
            [T, de] = (0, Q.useState)(null),
            [ae, le] = (0, Q.useState)(-1);
          (0, Q.useEffect)(
            () =>
              T ? (E.add(T), le(E.size - 1), () => E.delete(T)) : () => {},
            [T, E],
          );
          const re = ae > -1,
            H = { "--handle-pct": `${y(re ? ve[ae] : C, C, U)}%` },
            $ = (W) => {
              switch (W.key) {
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowDown": {
                  const Z = W.key === "ArrowRight" || W.key === "ArrowUp",
                    B = M * (Z ? 1 : -1),
                    fe = J({ value: ve[ae] + B, min: C, max: U, step: M }),
                    ue = [...ve];
                  (ue[ae] = fe),
                    ce(ue),
                    ye && ye(ue),
                    W.preventDefault(),
                    W.stopPropagation();
                  break;
                }
                case "PageUp":
                case "PageDown": {
                  const Z = W.key === "PageUp",
                    B = Math.round((U - C) / 10) * (Z ? 1 : -1),
                    fe = J({ value: ve[ae] + B, min: C, max: U, step: M }),
                    ue = [...ve];
                  (ue[ae] = fe),
                    ce(ue),
                    ye && ye(ue),
                    W.preventDefault(),
                    W.stopPropagation();
                  break;
                }
              }
            };
          re || (H.display = "none");
          const se = {
            ref: de,
            role: "slider",
            "aria-valuenow": ve[ae],
            "aria-valuemin": C,
            "aria-valuemax": U,
            tabIndex: 0,
            onKeyDown: $,
          };
          return (0, A.Q)(
            p,
            (0, d.jsx)("span", { className: m.SliderHandle, style: H }),
            se,
            { value: ve[ae], bDragActive: r.bDragActive },
          );
        }
        function z(O, p, r) {
          if (p[0] === p[1] || r[0] === r[1]) return r[0];
          const U = ((r[1] - r[0]) / (p[1] - p[0])) * (O - p[0]) + r[0];
          return q.OQ(U, r[0], r[1]);
        }
        function J(O) {
          const { value: p, min: r, max: C, step: U } = O,
            ve = Math.round((p - r) / U) / (1 / U);
          return q.OQ(ve + r, r, C);
        }
        function y(O, p, r) {
          return ((O - p) / (r - p)) * 100;
        }
      },
      1522: (pe, me, n) => {
        "use strict";
        n.d(me, { f: () => R });
        var d = n(7850),
          Q = n(3877),
          e = n(98929),
          q = n(86946),
          m = n(64238),
          L = n.n(m),
          A = n(80549),
          N = n(24660),
          _ = n(3166);
        function R(I) {
          const {
              rows: V = 3,
              resize: a = "none",
              ref: v,
              value: c,
              onTextChange: ee,
              onChange: z,
              disabled: J,
              variant: y,
              ...O
            } = I,
            p = (ve) => {
              J || (ee(ve.target.value), z && z(ve));
            },
            r = (0, A.f)("TextArea", y),
            C = (0, _.Qn)(),
            U = (0, q.w)({
              ...O,
              className: L()((0, Q.T)(), (0, e.F)()),
              style: { resize: a },
              cursor: "text",
              disabled: J,
              variant: r,
            }),
            E = C ? N.dO : "textarea";
          return (0, d.jsx)(E, {
            ref: v,
            ...U,
            value: c || "",
            onChange: p,
            rows: V,
            readOnly: J,
            "aria-disabled": J,
          });
        }
      },
      7125: (pe, me, n) => {
        "use strict";
        n.d(me, { k: () => ee });
        var d = n(7850),
          Q = n(90626),
          e = n(64238),
          q = n.n(e),
          m = n(3877),
          L = n(98929),
          A = n(60351),
          N = n(86946),
          _ = n(63029),
          R = n(18938),
          I = n(24660),
          V = n(80549),
          a = n(3166),
          v = n(58017),
          c = n(64415);
        function ee(z) {
          const { extracted: J, remaining: y } = (0, A.A4)(z),
            {
              value: O,
              onTextChange: p,
              onTextClear: r,
              clearable: C,
              onChange: U,
              radius: E,
              variant: ve,
              size: M,
              beforeContent: ce,
              afterContent: ye,
              inputRef: T,
              ref: de,
              disabled: ae,
              gamepadFocusable: le = !0,
              status: re,
              ...g
            } = y,
            H = (0, a.Qn)(),
            $ = (t) => {
              ae || (p(t.target.value), U && U(t));
            },
            se = () => {
              p(""), r && r();
            },
            W = !!O && C,
            Z = W
              ? (0, d.jsx)(_.g, { onClick: se, cursor: "pointer", hitSlop: !0 })
              : ye,
            B = (0, V.f)("TextInput", ve),
            fe = {
              ...J,
              variant: B,
              size: M,
              radius: E,
              status: re,
              beforeContent: ce,
              afterContent: Z,
              ref: de,
              disabled: ae,
            },
            ue = (0, Q.useRef)(null),
            K = (t) => {
              ue.current && t.target !== ue.current && ue.current.focus();
            },
            f = le && H,
            Y = f ? I.BA : "input",
            i =
              f && W && !ae
                ? {
                    onSecondaryButton: se,
                    actionDescriptionMap: {
                      [c.pR.SECONDARY]: v.T.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, d.jsx)(N.j, {
            cursor: "text",
            ...fe,
            onClick: K,
            children: (0, d.jsx)(Y, {
              ref: (0, R.Ue)(T, ue),
              type: "text",
              "aria-disabled": ae,
              readOnly: ae,
              className: q()((0, m.T)(), (0, L.F)()),
              value: O || "",
              onChange: $,
              ...i,
              ...g,
            }),
          });
        }
      },
      95994: (pe, me, n) => {
        "use strict";
        n.d(me, { x: () => R });
        var d = n(7850),
          Q = n(70182),
          e = n(64238),
          q = n.n(e),
          m = n(8928),
          L = n(69289),
          A = n(75180),
          N = n.n(A),
          _ = n(3166);
        function R(V) {
          const { as: a = "div", ref: v, focusable: c, navProps: ee, ...z } = V,
            J = (0, _.Qn)(),
            y = (0, L.mz)({ ...z, className: q()(A.Grid, V.className) }, I),
            O = c ?? ee?.focusable ?? !!z.onClick,
            p = (0, d.jsx)(a, { ref: v, ...y });
          return J
            ? (0, d.jsx)(Q.J, {
                "flow-children": "grid",
                ...(ee || {}),
                focusable: O,
                children: p,
              })
            : p;
        }
        const I = [
          ...m.h,
          {
            prop: "display",
            responsive: !0,
            className: A.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: A.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: A.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: A.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: A.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: A.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: A.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: A.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: A.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: A.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: A.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: A.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: A.Gap,
            cssProperty: (V) => ["--grid-gap", `var(--spacing-${V})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: A.Gap,
            cssProperty: (V) => ["--grid-gap-x", `var(--spacing-${V})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: A.Gap,
            cssProperty: (V) => ["--grid-gap-y", `var(--spacing-${V})`],
          },
        ];
      },
      86336: (pe, me, n) => {
        "use strict";
        n.d(me, { W: () => I, Y: () => _ });
        var d = n(7850),
          Q = n(50122),
          e = n.n(Q),
          q = n(15252),
          m = n(69289),
          L = n(24660),
          A = n(70182),
          N = n(3166);
        function _(V) {
          const { underline: a = "auto", focusable: v, navProps: c, ...ee } = V,
            z = (0, N.Qn)(),
            J = v ?? c?.focusable ?? !!ee.href,
            y = (0, m.mz)({ ...ee, underline: a, className: Q.TextLink }, R);
          return z && (J || c)
            ? (0, d.jsx)(L.Ii, { ...y, ...(c || {}), focusable: J })
            : (0, d.jsx)("a", { ...y });
        }
        const R = [
          ...q.Ae,
          { prop: "underline", className: (V) => Q[`Underline-${V}`] },
        ];
        function I(V) {
          const { underline: a = "auto", focusable: v, navProps: c, ...ee } = V,
            z = (0, N.Qn)(),
            J = v ?? c?.focusable ?? !!ee.onClick,
            y = (0, d.jsx)("span", {
              role: "button",
              ...(0, m.mz)(
                { ...ee, underline: a, className: Q.TextLinkButton },
                R,
              ),
            });
          return z && (J || c)
            ? (0, d.jsx)(A.J, { ...(c || {}), focusable: J, children: y })
            : y;
        }
      },
      76962: (pe, me, n) => {
        "use strict";
        n.d(me, { y: () => I });
        var d = n(7850),
          Q = n(24660),
          e = n(38566),
          q = n(54130),
          m = n(64238),
          L = n.n(m),
          A = n(90626),
          N = n(3166),
          _ = n(88208),
          R = n.n(_);
        const I = Object.assign(V, { Root: a, Content: c });
        function V(ee) {
          const { children: z, className: J, ...y } = ee;
          return (0, d.jsx)(I.Root, {
            ...y,
            children: (0, d.jsx)(I.Content, { className: J, children: z }),
          });
        }
        function a(ee) {
          const {
              onClose: z,
              className: J,
              navID: y,
              children: O,
              allowScrollBehind: p,
              ...r
            } = ee,
            [C, U] = A.useState(!1),
            E = A.useCallback((M) => {
              M &&
                (M.showModal(),
                M.ownerDocument.defaultView &&
                  U(
                    M.ownerDocument.body.scrollHeight >
                      M.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            ve = A.useCallback(
              (M) => {
                M.target == M.currentTarget && z("backdropclick");
              },
              [z],
            );
          return (0, d.jsx)(v, {
            navID: y ?? "ModalDialog",
            onClose: z,
            children: (0, d.jsx)("dialog", {
              ref: E,
              className: L()(_.ModalDialog, !p && C && _.PreventScroll, J),
              onClose: () => z("onclose"),
              onClick: ve,
              ...r,
              children: (0, d.jsx)(q.q, { children: O }),
            }),
          });
        }
        function v(ee) {
          const { navID: z, onClose: J, children: y } = ee,
            O = A.useCallback(() => J("cancelbutton"), [J]),
            p = A.useRef(void 0);
          return (
            (0, Q.O7)(p, !0, !0),
            (0, N.Qn)()
              ? (0, d.jsx)(e.D6, {
                  navID: z ?? "ModalDialog",
                  onCancelButton: O,
                  modal: !0,
                  navTreeRef: p,
                  children: y,
                })
              : (0, d.jsx)(d.Fragment, { children: y })
          );
        }
        function c(ee) {
          const { className: z, children: J } = ee;
          return (0, d.jsx)("div", {
            className: L()(_.ModalDialogContent, z),
            onClick: (y) => y.stopPropagation(),
            children: J,
          });
        }
      },
      47604: (pe, me, n) => {
        "use strict";
        n.d(me, { s: () => _ });
        var d = n(7850),
          Q = n(19298),
          e = n(64238),
          q = n.n(e),
          m = n(36118),
          L = n(76962),
          A = n(83217),
          N = n.n(A);
        function _(R) {
          const {
            onClose: I,
            className: V,
            navID: a,
            children: v,
            strTitle: c,
            wideMode: ee,
            ...z
          } = R;
          return (0, d.jsx)(L.y, {
            onClose: I,
            navID: a ?? "SimpleModalDialog",
            ...z,
            children: (0, d.jsxs)("div", {
              className: q()(V, N().SimpleModalDialog, ee && N().WideMode),
              children: [
                " ",
                (0, d.jsxs)(Q.Z, {
                  className: N().SimpleModalDialogHeader,
                  children: [
                    c &&
                      (0, d.jsx)("h2", {
                        className: N().SimpleModalDialogTitle,
                        children: c,
                      }),
                    (0, d.jsx)("button", {
                      onClick: (J) => (I("xclick"), J.preventDefault(), !1),
                      className: N().XButton,
                      children: (0, d.jsx)(m.tmm, {}),
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: N().SimpleModalContentCtn,
                  children: v,
                }),
              ],
            }),
          });
        }
      },
      22880: (pe, me, n) => {
        "use strict";
        n.d(me, { g: () => e });
        var d = n(40323),
          Q = n.n(d);
        class e {
          static ParseCSVFile(m, L) {
            return new Promise((A, N) => {
              const R = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: A,
                error: (I) => N({ errors: [I] }),
                transformHeader: L,
              };
              Q().parse(m, R);
            });
          }
          static ReadFile(m) {
            return new Promise((L, A) => {
              const N = new FileReader();
              (N.onload = (_) => L(N.result)), N.readAsText(m);
            });
          }
          static WriteFile(m, L) {
            let A = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(m, L);
            else {
              const N = window.URL.createObjectURL(m);
              A.href = N;
            }
            A.setAttribute("download", L), A.click();
            try {
              document.removeChild(A);
            } catch {}
          }
          static WriteCSVToFile(m, L, A, N) {
            const _ = N
                ? Q().unparse({ fields: N, data: m }, { header: !0 })
                : Q().unparse(m, { header: !0 }),
              R = A == !0 ? ["\uFEFF" + _] : [_];
            e.WriteFile(new Blob(R, { type: "text/csv:charset=utf-8;" }), L);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(m, L) {
            const A = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let N =
              "<" +
              A() +
              'xml version="1.0" encoding="UTF-8" ' +
              A() +
              `>
`;
            (N += new XMLSerializer().serializeToString(m)),
              e.WriteFile(
                new Blob([N], { type: "application/xml:charset=utf-8;" }),
                L,
              );
          }
        }
      },
      70427: (pe) => {
        pe.exports = {
          Released: "_5b1xKr2_wu1RuYuKMpr5D",
          ReleasedText: "_24itkeC4MEtyYRSpkJhaTL",
          Unreleased: "_3d8pNQbbaqjir817UiFN9G",
          UnreleasedText: "_2hifQgWDFIPCQTwebxuSTt",
          Warning: "_3QXTpGdlOK6E2gIpBmEFvF",
          Label: "_2CGFBQM2BThCLLPAoi4KIU",
          Important: "PXEH2634ebAHlFY4wcpCy",
          InlineSVG: "_3lh66ob7v6HY7TlxewVQ_b",
          TableHeader: "_6J8I921VyOxZPGLwYPLgy",
          SmallIconButton: "_2h2JK9tl2XKZk0tSncTAxp",
          EditButton: "_31NhGmT7TwTCM8J1HborFs",
          DeleteButton: "_2uGkwmOWceCBc--Z9q_75P",
          BulkMoveButton: "DcuEUbDC3fqQVZKzyaak3",
          SelectIconOption: "_2r3i0WyJ-gSpifyD0JQdZE",
          Takeover: "_9JFhB-CMLoXAyliexUHye",
          TakeoverBody: "_3MCO1BiXD95WdYgL9UTlSJ",
          Instructions: "s_iKU1jabRu1BJhz_7kb7",
          BulkEdit: "fkI7RYiO0vj6PTFql_JPy",
          BulkEditSection: "_3KKYVr6HVCNs5nzc_l522O",
          BulkEditHeader: "_2BivQamb3LEiQtwiyru4SU",
          BulkEditInstructions: "_196W2uTFyW8D5dFhidIkKr",
          FileTypesList: "_34PNksp_-K8y5qELr6Dz5U",
          BulkUploadFileDropBox: "_1x4OSiQxHCdtZVbOLKjgWY",
          ErrorsList: "G15vfap5Kp-eARgDZ_OGa",
          CsvErrorsTable: "_2HbwaZmNxM1yrWcVtuno3I",
          AchievementDetailIcon: "uZ3AltKSgLFNl_vfmvtna",
          ResultsContainer: "_2R-UIx-iBQjZAPggwvsZsZ",
          ImportedAchievements: "_3YMlJi-OOV8U7qQqGec18o",
          UnmodifiedIcon: "_2GKTn3FXf_DNKDbE4lmIaQ",
          ModifiedIcon: "_3rGiZ9Ykx3rDc8tyqpQAuO",
          ImportedAchievementsTableContainer: "_29B0fvUdb5aMIGyBKtnoVK",
          ChangeBorder: "_13i9BnOWIUGsO_L68Gmt4p",
          Added: "_3vUV2Z3AOriQUG64lctFyh",
          Deleted: "_2anivdc364kdpefGcYSHFi",
          Modified: "_3CMPqgjXysD-rlMrso3bS4",
          ModifiedField: "_3Qegweoddsf3tPpZrKM4sl",
          ImportedAchievementsTableHeader: "_2_AZ5DRLMDtCiLw-Dpo7F2",
          CollapsibleAchievementsTableHeader: "_2vSQTVO4_EZVJsY1ryu3Ts",
          ExpandButton: "_366gKECQVM1IOrdNaXX8dj",
          ImportedAchievementsTable: "_2eA_FYkORP-3wyqAIW4vVh",
          Collapsed: "_1dW017rmGGPV_eyahtHPFb",
          ImportedAchievementsTableGroup: "mPnD0No4hBce3faVedeiE",
          CompactAchievementRow: "_1Rfc1BDhzcC9knHNObmDyL",
          NameColumn: "ggNtyLN5jtwfSzQLEelNQ",
          ApiColumn: "_1tteA0CuHUJMKITKjbveBL",
          VisibilityColumn: "GlevOmet6O5-XYWcl9KHj",
          ProgressColumn: "_2woZ5CfAS4IuiI13yjBHeo",
          ImportedGroups: "_2z7MVqbC7xWxdhcBzYoVW8",
          ResultsSection: "_3BY0cyaNahGJISKkPcBei0",
          ResultsSectionHeader: "_2S3eJxNKMFeGae4Xt7aY1j",
          CollapsibleResultsSectionHeader: "JhQowPYpM0hwJNlXGUOgC",
          ResultsSectionBody: "_1j-e5L24aKdIk0A-K4lL9v",
          FileSuccessRow: "_3yDR_m8Cyv6_3PCJlNJlnH",
          FileImage: "_3Dige9dJ-b_rIXDViZ_Lll",
          FileErrorList: "_2taJcQaC6hSr1mlv2Mh46K",
          FileError: "_1ZSVlHQLDXbW7IhdEUp8eZ",
          WarningGlobeIcon: "F-0UNlG8kZ7QyEHZjAAI9",
          LegendContainer: "_1rNyRSz-GRGqRSKgm_hwu1",
          LegendChangeIcon: "Wr-XyB_FGwAFKOZRpMUIm",
          LanguageSelect: "inmRcjCWNUMxS_66r2X_f",
        };
      },
      70402: (pe) => {
        pe.exports = {
          Size32: "agHuyuV8ihlarNHATSszd",
          Size64: "_1uacLAj2YkREOmwRZ9R4bJ",
          Size128: "_2Wyg29PZJAdWb-Nlktyn0c",
          Size256: "P3dp1clsVi3M-AJL4J1T1",
          AchievementImageContainer: "_tQ4WDxUJeDoCXy59CF0I",
          NewIcon: "_2ovKL6EYPJO2z_M2YLgW0I",
          AchievementMissingImage: "_1hswY_5QcX-V-2WWGdc2P1",
        };
      },
      15008: (pe) => {
        pe.exports = {
          Released: "_2myyMAPhlMVaP37uxzXPFh",
          ReleasedText: "_2wL3wVC8JBbKMp7KF2PXX4",
          Unreleased: "h_BAL7y4NWxuSLNi51Bdt",
          UnreleasedText: "_36D99ASWP_P55MxbH5eyrP",
          Warning: "WvjS8fOiimkyfAlD43BAk",
          Label: "xo89MsO29kFQlnicz39nG",
          Important: "ii6EuMR7ADM4km0wBwC3N",
          InlineSVG: "_1gUqgXwJuV7eO_WtGSV5CS",
          TableHeader: "fkR3gwqgDvl_OI1NEuRe4",
          SmallIconButton: "_1WNIpnHPVGaIL4bRPDGZa5",
          EditButton: "_1xyTWpK8dMDIPdki40c4Q2",
          DeleteButton: "bjJujKkRt26gFHJ7ba-12",
          BulkMoveButton: "wua99I6nKE07YMn330SMV",
          SelectIconOption: "_1Ru87SimSXGrkpXkGPm0po",
          Takeover: "_2MCVWN_XpYpuFPa7NBBJya",
          TakeoverBody: "_36dlzt5NDXjQPWSOrNgK2L",
          Instructions: "_2potsZFPVY9tpE13ZrMpD4",
          GroupAchievementList: "_24OXR8ODkE5_gIR9MluOTZ",
          Compact: "vhTsl79uucCDx2Rs8c6vK",
          HasBeforeContent: "_2zQgs8oZJj726ax21e051Q",
          Name: "_3as6l-1WenMIjKiwCkLyeS",
          ApiName: "_3KIkxnhAh4xUSxucqbADHU",
          Availability: "_6_ZxB9gKyG20K_v_arYOz",
          ContentBefore: "_3xohUhLFi80Phvy5GoRljY",
          Images: "_3zVaxk4w57ttDqxvmiLrvm",
          Headers: "_21ihIUY5vYGxUEcrRYH5Ow",
          EditButtons: "_3_xATs245DMwG7jA8qTt9Q",
          IDText: "GEY1k-Qg6R9inQ7uidoBe",
          GroupVisibility: "_1pH7AJYw2zDYNUtdjc9QXv",
          AchievementEditDialog: "_1suW2rIqGtLWvdODlYsDrz",
          LocHeader: "_1F8CuRc2_T8-qbSTO9epBe",
          EditTitle: "_3wcUOx2qFE6nCRZ0cTB4Pf",
          EditContent: "_17VemE-e07xa1qfKTqnO3m",
          ButtonContainer: "_3yLE--noGD7Nrc4cG-8ASM",
          AchievementUploadBox: "mzXNhdj-spC15x3Eabw8p",
          AchievementDeleteDialog: "_l7sGBNB-aDG-B5Jw7K1c",
          AchievementBox: "_8DGXBBq00n5OrVKY4BxD3",
          InputWarning: "_1DsXtf0Yk0QV0MTZmNk_uT",
          GlobalRateIcon: "_2a7iS6INx62SSIlGvDrrK5",
          Cursor: "_3EMS8PhXqW2iLmobbD568y",
        };
      },
      5088: (pe) => {
        pe.exports = {
          Released: "_2uSJKNuBtUiaxyhtcvMIOP",
          ReleasedText: "_2nsqWrMNFHfdnV_JR37Qz3",
          Unreleased: "ZrKv3Jpr1tv8Z-ddi2Ml4",
          UnreleasedText: "_1GHiTH8wcPz8Pp0ti5sSem",
          Warning: "_1urY34zRwFShpEXjEqz3yY",
          Label: "_1yqsZdWQQKHh-nVlD4RuHM",
          Important: "_3X7HnN1pd0Dve8N5WGOFLD",
          InlineSVG: "_1HDzIgBxfTcuAqvk3X2ou5",
          TableHeader: "_2Tj9T5bd5VTxy21HJSsWxq",
          SmallIconButton: "qr0Fn0pmV_AU-X9lGjb7g",
          EditButton: "_3CccEH3mgAEi7wd48Nv-D9",
          DeleteButton: "_10H-EFN3Y_b80x82UwHj90",
          BulkMoveButton: "_1JSynpUkik7wyhh2ReMEQI",
          SelectIconOption: "_1qy3rjwuEUbQYxmvqgHIZm",
          Takeover: "_2hajWPJV98X6WZLcqmyldQ",
          TakeoverBody: "vHZ497nDU70y8xqvcJJ9i",
          Instructions: "_1p4PRHywBY_78rJ_89ODEY",
          EditorContainer: "_1Y8MzNAzO2fYkQQLmKU23O",
          HeaderContainer: "_3JPMXufgr4HTWfhvx6RXO1",
          Row: "_3uUyyKq85EF3g5m-3pBIc-",
          TabBar: "_3aA6Vxi9DRE2IdK93yFA3C",
          Selected: "BLpJ58J_SRVopLwSD1GZ2",
          Toolbar: "_1Dx_RICsqtiKMqlPr9e3WN",
          LanguageEditButton: "_2fJWKYmTd_QiqIL2_09a08",
          ButtonIcon: "_2k0lzahcD_wnNfW562LQf0",
        };
      },
      1103: (pe) => {
        pe.exports = {
          Released: "YrlnFZjNdzi5sAVb03V3r",
          ReleasedText: "C_ilbe1AoCgQRhk3Or3cU",
          Unreleased: "_2axtmxoCK6-gr-VwYd680F",
          UnreleasedText: "_1VEAMlvcbQltLTYY5eewMe",
          Warning: "_3AbDXec2ZVLz9gzx6YCH2B",
          Label: "_323hRrta7M4brbA6-T-FxA",
          Important: "ndOUWno5iHsnuw2IehBdd",
          InlineSVG: "_2XPjwd8pTShKzyXGrIeN5K",
          TableHeader: "P8FcDLDEE8LjMuln3wTRV",
          SmallIconButton: "_13Dy_lYbx9GKY97H0Z0VRS",
          EditButton: "_1vJU-v-MdIHvGoyC2ouWuV",
          DeleteButton: "_3vYNLqs7OzjdSMR4BijB3a",
          BulkMoveButton: "_1eucWqWTvU9_oEjWLMcKyk",
          SelectIconOption: "qvE8GQimc5jM3jGeS7Dr6",
          Takeover: "_1G66x2o26KxUMxjuSbnLRT",
          TakeoverBody: "at6q3fO5Pc98CzmEb9sO-",
          Instructions: "_2xkc5FGu7Qlt7LKZ0vAWDB",
          GroupListHeader: "lFtceEyCwIEO3Uh6cEuvx",
          GroupList: "_2rfxqsYitjPSqjcTsieQLV",
          GroupReorderDescription: "_1GUStLzFY9avHmQhd0GvjN",
          Group: "_3Wi_4KlXvz6XqQ9Eg4o8U2",
          GroupDisplay: "_2xUrpbUetPu_MBp2z2AFPk",
          GroupHeader: "_31oxiagAYavjr3pwhQnTyn",
          GroupHeaderContent: "_27Q-5fUh7F-AvKSLkmOMss",
          CoreGroup: "_33h8RC_ZyCJf7OE_7iHknu",
          GroupData: "_2VO17QYJ-mx0n1B5fClDfH",
          VisibilityColumn: "TYq2UKq6LmmuRtgPF_-ft",
          AchievementsFullDisplay: "CdBuxY_onNFkC-CJ4bMaC",
          Empty: "_3jkarZ1defJBltm_KLno5u",
          FilterFooter: "_14zPIalACsYKc75ohmDaZe",
          EditButtons: "_1Iho_oTyoIDN_OHsokhh2b",
          OptionsSVG: "PC1p1HVohvNpcoMQChMF9",
          IDText: "_2hJNPvKiT4GAJTLrOmqw0R",
          CollapseButton: "_3UgyfxPI8Sx0_tZ5DHBmRw",
          Editing: "_1Z3AkRTZ1ymTd8ejFjCMEq",
          AppTile: "_2mS-8XCLvIEU5uJNNB_eIi",
          GroupDeleteDialog: "_1meAV_A7H1u-BOHuUOgvta",
          GroupBox: "_2vt6Rs0bsDqVWnt0NE4lHT",
          AppTileImage: "_39_z7QweFoM7AfK_rrz02w",
          CompactGroupContainer: "_17NgH12KX6VldCenSGzQzl",
          GroupVisibilityInfo: "_9oQFplYy1CtRPv1h4400D",
          GroupVisibilitySummary: "hZ5rFKz1Ej1FhqyJtXteo",
          GroupVisibilityLabels: "kdJnVL3L2ta5clKt13XUH",
          MoveAchievementCheckbox: "_2gU98I05EZySaD8ipPKCto",
          MoveFooter: "_2ZAFBsrmvOlqT5KUdeOosO",
          GroupSorter: "x39ze-8f6OLf1lmi6xuSW",
          SortDefaultGroup: "_3T8K-SuIo-g8jM0psyX-eQ",
          OverlayContent: "_2pyLhJpZ61hXnV53X8_7nh",
          Icon: "_2gSsq-BEbcewxMLBg2h3Q8",
        };
      },
      6629: (pe) => {
        pe.exports = {
          Released: "W2UOJRTbrQzIu4RVJhj3_",
          ReleasedText: "_7YtUjVGRcByb2QHzL0VNp",
          Unreleased: "_3IiZE43dxAAkINf1FDiROM",
          UnreleasedText: "_1UDJsVP7Mb21EofVQKaw4h",
          Warning: "_1w_obF0lJq6izY8p5YY0RB",
          Label: "_3GQSHzQ_gLmxZXo_aRkgdu",
          Important: "M4CM-P-C9zxQOph-Ljy9k",
          InlineSVG: "_3AsL050udcay1HQYAdYH_X",
          TableHeader: "_4a7Mbpiw-nGsnrWwj3j0N",
          SmallIconButton: "_1VQU-cFK0lIxW8DdkpZDmZ",
          EditButton: "_3VRAarQMFwczpzi64b1kEP",
          DeleteButton: "_2AmnzUv21VRcxx6uQ-d8id",
          BulkMoveButton: "_2rmn-imVQyuyoCM7fQmMbV",
          SelectIconOption: "_10emwGGd6LIPdDUvJ94Kg9",
          Takeover: "_fJaaZ6kzhOOltlMqxW_N",
          TakeoverBody: "_9TSQV7FXR0Qb0do280FrI",
          Instructions: "_1MkTPp9nMtbWVM9ySp94xd",
          LocSelect: "TNP9N4Dpc8eyOwAINe5-q",
          Inline: "_22HVkYuDuat76NjKLWOEDu",
          LocText: "gcoVWF-iK2MXpCZRh7Tdm",
          LocTextInput: "fCEO0bgrLbLsl5AvbLWyF",
          Empty: "M_WD8ZjV0lCec6qL6D-fQ",
          Provided: "_1JFKP_q6whflboP72Ao52C",
          Missing: "_2AjU0CzoHHx3v0pwwr8le5",
          TextArea: "_3Nf1J7fM9X1bh9FPxaVC4_",
        };
      },
      14223: (pe) => {
        pe.exports = {
          MinMaxRangeContainer: "_BuNcDG_B3ZZqi9CJOn2r",
          MinMax: "_3zQd26Cgraf05sScvTPJ2F",
        };
      },
      79964: (pe) => {
        pe.exports = {
          Released: "_3dNgW7s9N5tXlrurCsF8dN",
          ReleasedText: "_1puXb3u61mMgIxUhdtr8y2",
          Unreleased: "_3rObkp4Qes5euhPZv3ZVZO",
          UnreleasedText: "AA-uAorKWF4I29mjLQVYs",
          Warning: "_3c7sBfF_5ZpNqKiDKOjnkP",
          Label: "_2w5GFz3RUKwVtQNXyTGkVj",
          Important: "dgn7GTx1UxcvhzdaBSmn_",
          InlineSVG: "_3XJbWGJZRS1RwvCv4_Uti5",
          TableHeader: "aa1fgxLMgEjs8mpSxDPbd",
          SmallIconButton: "_3u5DO-tRdDT90bK4xIe0mz",
          EditButton: "_2xJIwMB6gTGMKvvfrYUu7S",
          DeleteButton: "_9MxByVWXqoqAQD8-vFH_5",
          BulkMoveButton: "Dc4UN9b6GhIoCu38gxy8X",
          SelectIconOption: "_3sq_D2e-CrPG4EXpoCyo8X",
          Takeover: "CU3sRAdQTQgUdN19YohyI",
          TakeoverBody: "_1u619xZ85jz0jbmPAj3Fkk",
          Instructions: "eAXCYyP4Yo_obxJtxkQDw",
          SaveCloseButtons: "_3D4enyVLBjzX5hIkYjGqHt",
          ButtonContainer: "mxve6PMrinRTttvrTp7jw",
          Icon: "_3MrFpvB3KKnTm85gb6oa6Z",
          ButtonIcon: "_1YhOgpne8YpIF6j3GsUyCf",
        };
      },
      3952: (pe) => {
        pe.exports = {
          DragBox: "_3ap_hrz6rd5dEZsu8cnXJ0",
          Dragging: "_2ZYfPxfw7ufPbPAb6bZOcq",
          Invalid: "_2xMKMSvFqnwUlpit8WK4B8",
        };
      },
      95415: (pe) => {
        pe.exports = {
          ValidatedInputContainer: "_22dxHS1peKgjat8FzJHd2x",
          Invalid: "_2riY6QZ83fjIFiYdBYGtcp",
          Warning: "qpy-N0lAR2xK3KsCbFdUf",
          ValidatedControl: "_3FBZTFD4pgCIfMtwDzXOxt",
          ErrorDetail: "_2sRzko2FZ5TO_QeLm3qqYT",
        };
      },
      28325: (pe) => {
        pe.exports = {
          AppTileContainer: "_1MNwvHXvTQh_nlTEGVL-9G",
          NoRecentApps: "l73IMu5N0BMAEv5-wk3NU",
          ViewAppsContainer: "_3bhAuHTe2QDmn7qVPrbhTn",
          ViewAppsLink: "_1DXsI6kGhs4saDdMEB5Zhp",
          AppTile: "_1ET9Is2SXz9L6oBuMGkhyc",
          AppTileImage: "_2ib4C2NrFHUrt3df5FaIkA",
          AppTileImagePlaceholder: "_1v97yYXETM1gTfYqCF1MYJ",
          AppLabels: "_1gCoNWQfTPQf4Oo6uJLX9",
          AppType: "_2ZrhAQm3GQlhhKkqzdGwsF",
          DLC: "_3joD2YzY0xQ4OQFjl8vTK1",
          Playtest: "_2BpsHGvYJ2BpGraZ66oN_-",
          Demo: "_2RgXBp9gOVTZDwSY533Aiz",
          Music: "_1yUcqupOCPqJJkEMvpmNyu",
          AppRelease: "_1XsM2jNRjoVa7SfxlYIXAb",
        };
      },
      6853: (pe) => {
        pe.exports = {
          Section: "_1FrGxLLJNyWZswyE9TGS3N",
          Body: "_1CaApUvC8ichAOgldt6XZm",
          Header: "WnpaUxHTbHM6dHV4JNyog",
          Title: "f3pCBilbcCpf8q3EUD2fp",
          Count: "tYEaq1iQcl91w3W4gzbeX",
          BetaCallout: "_3F09B-c90Mi_ABQSFt8qlI",
        };
      },
      82277: (pe) => {
        pe.exports = {
          FilterBorder: "_3xFYpKNlOZ6xjQ529ZgRbr",
          Top: "_310cGk80jWCZr6LxeueX_5",
          Bottom: "nLYMJhpffeKLN_8VkTcD_",
        };
      },
      69041: (pe) => {
        pe.exports = {
          Button: "_0BH1ydyFmSnUvoVK2hIc",
          "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
          Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
          "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
          "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
          "Variant-basic": "AjHMNGqS56A5oRpfyYhEz",
          "Variant-dark": "_29OIX_G3reF-rRPFaaV2mW",
          "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
          "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
          "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
          "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
          Width: "_3sJrbUPuxxtvf7RM9OYpwU",
          MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
        };
      },
      24089: (pe) => {
        pe.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      73406: (pe) => {
        pe.exports = {
          Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
          LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
          "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
          "Size-2": "_4YMNfb67K5DdLQo1iUILX",
          "Size-3": "_389OPmdZoebw42_AlsUFxi",
          "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
          "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
          "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
          "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
          ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
        };
      },
      75: (pe) => {
        pe.exports = {
          SliderRoot: "Ib6RCjwueJUjl7aWNipFW",
          Inner: "-nNjOur8lh62cpxs1Jnth",
          SliderTrack: "_32V6MAuLhIp8s5_OPJxur1",
          SliderRange: "_1S38a0lsWaX1bdlroIEyXQ",
          SliderHandle: "_1VoJsIZhjVss7lO_vZxCFC",
        };
      },
      75180: (pe) => {
        pe.exports = {
          Grid: "_2IVd64AHN6R428cgcPqW7M",
          Display: "_2PUyyAEGuZenuwES7VJvQO",
          Columns: "_16FZUyKiH6Z7trthKypJwf",
          Rows: "_2QdiX1hDsJmlkrHmcCOMbV",
          AutoColumns: "Cr7YIMQn6_lDRU4-3BR8b",
          AutoRows: "_3kyzvGnYVLT0DW6nzP9n18",
          AutoFlow: "_3AvZKfpfaIQbfczVRBASsX",
          Areas: "_1-yfCTWkj4tOFfb3EKXx6N",
          Flow: "_1yUwWGTk4IX0IhdJiKfFBf",
          AlignContent: "_2Tglp6488nVBhU976Llfpe",
          JustifyContent: "TT1_g1XWXbbLgxOPIpczV",
          AlignItems: "_1ve3GjJA-d6MfYcIiXdqz0",
          JustifyItems: "_2LsmJGVn3g0GHmBPNWVn5T",
          Gap: "c0C2uHpDLCegllhH1rM3M",
        };
      },
      50122: (pe) => {
        pe.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      88208: (pe) => {
        pe.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      83217: (pe) => {
        pe.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      45737: (pe) => {
        pe.exports = {
          AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
          BaseUI: "_3ar6NZpkNtMK2pmiKMadXq",
          WidePageCtn: "uHgjQHyNygSKukDngfNQO",
          AdminHeader: "vrqqGANTuXeQs27RGumFj",
          Breadcrumbs: "_31raJsbMXVc33oW6c5hNxS",
          Required: "_1-jmJyKnLRFoN-GX0Oqor8",
          PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
          PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
          Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
          PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
          ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
          ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
          SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
          DividerHeading: "_2kKPmwgbsJ_P67Vo-HwwRf",
          ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
          LeftCol: "_1AqrivbzwCs57BXiugqpeA",
          ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
          Blue: "J7iYYml2Jf_PcaACW1hEr",
          ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
          Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
          ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
          SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
          warning: "_2HiNh3o5cgMEbzFKYBUjAy",
          IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
          RightCol: "_3kaQhRnhNh_awrnNX90rui",
          NoSticky: "JQNb8bHftBTAYpCXTx52v",
          SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
          Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
          TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
          DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
          Indent: "_7PV326-4cpZdmTCEdgC2l",
          DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
          FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
          MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
          UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
          UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
          MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
          BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
          UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
          LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
          LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
          UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
          LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
          DeleteAll: "rYuknI3K1VFknv90GNUTc",
          EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
          StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
          HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
          StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
          Stat: "_3OYQbVCq1yBuEx1XcDzG06",
          BigStat: "lYYwDDss378Sm0FKPBxPh",
          IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
          AdminVerticalTabs: "_38rhsxAONglYlA01yweB9r",
          RightPanel: "_1QYBs5PGw6PClZRx9WNL6z",
        };
      },
    },
  ]);
})();
