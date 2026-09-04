/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [9539],
    {
      30541: (ce, he, n) => {
        "use strict";
        n.a(
          ce,
          async (p, C) => {
            try {
              n.d(he, {
                A$I: () => j.A$I,
                Ikc: () => j.Ikc,
                Whr: () => j.Whr,
                YOg: () => j.YOg,
                YjP: () => j.YjP,
                ZSL: () => j.ZSL,
                aig: () => j.aig,
                auy: () => j.auy,
                euz: () => j.euz,
                k5n: () => j.k5n,
                rLB: () => j.rLB,
                uEf: () => j.uEf,
              });
              var e = n(18210),
                J = n(10410),
                V = n(62617),
                j = n(68980);
              const B = {
                "es-419": "es",
                "pt-br": "pt",
                "zh-cn": "zhCN",
                "zh-tw": "zhTW",
              };
              async function F() {
                const K = (0, e.l4)(),
                  I = K in B ? B[K] : K,
                  b = J[I];
                V.$W(b());
              }
              await F(), C();
            } catch (B) {
              C(B);
            }
          },
          1,
        );
      },
      3959: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let M = function (o) {
                if ($.includes(o)) return $.indexOf(o);
              },
              G = function (o) {
                return `${o.statID}.${o.bitID}`;
              },
              z = function (o) {
                return o[1].type === "ACHIEVEMENTS";
              },
              v = function (o) {
                return o[1].type !== "ACHIEVEMENTS";
              },
              S = function () {
                return (0, I.useContext)(i);
              },
              q = function (o, t = !1) {
                const d = (0, J.I)({
                  queryKey: [T, k, o, t],
                  queryFn: async () => {
                    let a = t ? { version: "live" } : {};
                    const f = `${x.TS.PARTNER_BASE_URL}achievements/ajaxgetstatsschema/${o}`,
                      X = await F().get(f, { params: a, withCredentials: !0 });
                    if (X?.data?.success == e.R) return X.data.schema;
                    throw new Error(
                      `failed to load ${t ? "live" : "draft"} stat schema for app id ${o}`,
                    );
                  },
                });
                return d.isLoading ? null : d.data;
              },
              H = function (o, t = !1) {
                return q(o, t)?.groups;
              },
              P = function (o, t, d = !1) {
                return H(o, d)?.[t];
              },
              oe = function (o) {
                const t = H(o);
                return t
                  ? Object.keys(t)
                      .map((a) => ({
                        groupid: a,
                        sortid: c.auy.number().default(0).parse(t[a].order),
                        ...t[a],
                      }))
                      .sort((a, f) => a.sortid - f.sortid)
                      .map((a) => a)
                  : [];
              },
              W = function (o, t = !1) {
                const d = q(o, t);
                return d?.stats
                  ? Object.entries(d.stats)
                      .filter(v)
                      .map(([a, f]) => ({ ...f, statID: a }))
                  : void 0;
              },
              ee = function (o, t = !1) {
                const d = q(o, t);
                return d?.stats
                  ? Object.entries(d.stats)
                      .filter(z)
                      .flatMap(([a, f]) =>
                        Object.entries(f.bits).map(([X, ie]) => ({
                          ...ie,
                          statID: a,
                          bitID: X,
                        })),
                      )
                  : void 0;
              },
              te = function (o, t, d = !1) {
                const a = q(o, d);
                return a?.stats
                  ? Object.entries(a.stats)
                      .filter(z)
                      .flatMap(([f, X]) =>
                        Object.entries(X.bits)
                          .filter(
                            ([ie, ge]) =>
                              (!t && !ge.groupid) || t === ge.groupid,
                          )
                          .map(([ie, ge]) => ({ ...ge, statID: f, bitID: ie })),
                      )
                  : void 0;
              },
              D = function (o) {
                const t = (0, J.I)({
                  queryKey: [T, se, o],
                  queryFn: async () => {
                    const d = `${x.TS.PARTNER_BASE_URL}achievements/ajaxgetlanguagelist/${o}`,
                      a = await F().get(d, { withCredentials: !0 });
                    if (a?.data?.success == e.R)
                      return a.data.languages.sort((f, X) =>
                        f.localeCompare(X),
                      );
                    throw new Error(
                      `failed to load language list for app id ${o}`,
                    );
                  },
                });
                return t.isLoading ? ["english"] : t.data;
              },
              Y = function (o) {
                const t = (0, V.jE)();
                return (0, j.n)({
                  mutationFn: async (a) => await y(o, a),
                  onSuccess: async () => {
                    await t.invalidateQueries({ queryKey: [T, se, o] });
                  },
                });
              },
              le = function (o) {
                const t = (0, J.I)({
                  queryKey: [T, A, o],
                  queryFn: async () => {
                    const d = `${x.TS.PARTNER_BASE_URL}achievements/ajaxgetlanguageoptionslist/${o}`,
                      a = await F().get(d, { withCredentials: !0 });
                    if (a?.data?.success == e.R)
                      return a.data.languages.sort((f, X) =>
                        f.localeCompare(X),
                      );
                    throw new Error(
                      `failed to load language options list for app id ${o}`,
                    );
                  },
                });
                return t.isLoading ? ["english"] : t.data;
              },
              N = function (o) {
                const t = (0, J.I)({
                  queryKey: [T, Z, o],
                  queryFn: async () => {
                    const d = `${x.TS.PARTNER_BASE_URL}achievements/ajaxgetdlc/${o}`,
                      a = await F().get(d, { withCredentials: !0 });
                    if (a?.data?.success == e.R) return a.data.dlc;
                    throw new Error(`failed to load dlc for app id ${o}`);
                  },
                });
                return t.isLoading ? [] : t.data;
              },
              fe = function (o) {
                const t = (0, J.I)({
                  queryKey: [T, ae, o],
                  queryFn: async () => {
                    const d = `${x.TS.PARTNER_BASE_URL}achievements/ajaxgetappinfo/${o}`,
                      a = await F().get(d, { withCredentials: !0 });
                    if (a?.data?.success == e.R) return a.data.app;
                    if (a?.data?.success == e.Qo)
                      return {
                        appid: o.toString(),
                        type: "Game",
                        releasestate: "unavailable",
                        name: "",
                        is_public: !1,
                        is_released_somewhere: !1,
                        image: "",
                      };
                    throw new Error(`failed to load app info for app id ${o}`);
                  },
                });
                return t.isLoading ? null : t.data;
              },
              re = function (o, t) {
                const d = H(o),
                  a = t in d ? d[t] : void 0,
                  f = a?.dlcappid,
                  X = fe(o);
                return {
                  app: N(o)?.find((me) => f == me.appid) ?? X,
                  archived: a?.archived == "1",
                  developeronly: a?.developeronly == "1",
                };
              },
              w = function (o, t) {
                const d = (0, V.jE)();
                return (0, j.n)({
                  mutationFn: async (f) => await u(o, t, f),
                  onSuccess: async () => {
                    await d.invalidateQueries({ queryKey: [T, k, o, !1] });
                  },
                });
              },
              L = function (o) {
                const t = (0, V.jE)();
                return (0, j.n)({
                  mutationFn: async (a) => {
                    for (const f of a)
                      if ((await u(o, f.groupid, f.group)) === void 0)
                        return !1;
                    return !0;
                  },
                  onSuccess: async () => {
                    await t.invalidateQueries({ queryKey: [T, k, o, !1] });
                  },
                });
              },
              O = function (o, t) {
                const d = (0, V.jE)();
                return (0, j.n)({
                  mutationFn: async () => {
                    try {
                      const f = `${x.TS.PARTNER_BASE_URL}achievements/ajaxdeletegroup/${o}`,
                        X = new FormData();
                      if (
                        (X.append("appid", o.toString()),
                        X.append("groupid", t),
                        (await F().post(f, X, { withCredentials: !0 }))?.data
                          ?.success == e.R)
                      )
                        return !0;
                      throw new Error(
                        `failed to delete group with group id ${t}`,
                      );
                    } catch (f) {
                      const X = (0, b.H)(f);
                      console.error(
                        "StatGroupDelete failed: ",
                        X.strErrorMsg,
                        X,
                      );
                    }
                    return !1;
                  },
                  onSuccess: async () => {
                    await d.invalidateQueries({ queryKey: [T, k, o, !1] });
                  },
                });
              },
              U = function (o) {
                const t = H(o),
                  d = (0, V.jE)();
                return (0, j.n)({
                  mutationFn: async (f) => await Q(o, f),
                  onSuccess: async () => {
                    await d.invalidateQueries({ queryKey: [T, k, o, !1] });
                  },
                });
              },
              E = function (o) {
                const t = (0, V.jE)();
                return (0, j.n)({
                  mutationFn: async (a) => {
                    const { groupid: f, api_names: X } = a;
                    return await R(o, f, X);
                  },
                  onSuccess: async () => {
                    await t.invalidateQueries({ queryKey: [T, k, o, !1] });
                  },
                });
              },
              ve = function (o) {
                const t = useQueryClient();
                return useMutation({
                  mutationFn: async (a) => {
                    for (const f of a)
                      if (
                        !(await _(
                          o,
                          f.statid,
                          f.bitid,
                          f.requestType,
                          f.base64image,
                        ))
                      )
                        return !1;
                    return !0;
                  },
                  onSuccess: async () => {
                    await t.invalidateQueries({ queryKey: [T, k, o, !1] });
                  },
                });
              },
              h = function (o, t, d) {
                const a = (0, V.jE)();
                return (0, j.n)({
                  mutationFn: async (X) =>
                    await pe(o, { statID: t, bitID: d, ...X }),
                  onSuccess: async () => {
                    await a.invalidateQueries({ queryKey: [T, k, o, !1] });
                  },
                });
              },
              r = function (o, t, d) {
                const a = (0, V.jE)();
                return (0, j.n)({
                  mutationFn: async () => await m(o, { statID: t, bitID: d }),
                  onSuccess: async () => {
                    await a.invalidateQueries({ queryKey: [T, k, o, !1] });
                  },
                });
              },
              s = function (o) {
                const t = (0, V.jE)();
                return (0, j.n)({
                  mutationFn: async (a) => {
                    for (const f of a.addOrUpdate ?? [])
                      if ((await pe(o, f)).success != e.R) return !1;
                    for (const f of a.delete ?? [])
                      if (!(await m(o, f))) return !1;
                    return !0;
                  },
                  onSuccess: async () => {
                    await t.invalidateQueries({ queryKey: [T, k, o, !1] });
                  },
                });
              };
            n.d(he, {
              $j: () => P,
              Bx: () => r,
              Er: () => L,
              F0: () => O,
              FK: () => te,
              FM: () => oe,
              J3: () => W,
              L3: () => S,
              Q4: () => H,
              SN: () => s,
              Xe: () => fe,
              aR: () => i,
              iF: () => U,
              kb: () => ee,
              kk: () => Y,
              l7: () => $,
              mb: () => w,
              nf: () => G,
              q4: () => h,
              sJ: () => N,
              ts: () => D,
              vd: () => le,
              yu: () => l,
              zG: () => E,
            });
            var e = n(72604),
              J = n(20194),
              V = n(75233),
              j = n(51614),
              B = n(41735),
              F = n.n(B),
              K = n(74761),
              I = n(90626),
              b = n(34592),
              x = n(3166),
              c = n(30541),
              g = p([c]);
            c = (g.then ? (await g)() : g)[0];
            var l = ((o) => (
              (o[(o.Client = 0)] = "Client"),
              (o[(o.GameServer = 1)] = "GameServer"),
              (o[(o.OfficialGameServer = 2)] = "OfficialGameServer"),
              o
            ))(l || {});
            const $ = ["Client", "GameServer", "OfficialGameServer"],
              i = (0, I.createContext)(null),
              T = "Stats",
              k = "StatSchema",
              se = "AppLanguageList";
            async function y(o, t) {
              const d = `${x.TS.PARTNER_BASE_URL}achievements/ajaxsetlanguagelist/${o}`,
                a = new FormData();
              a.append("languages", JSON.stringify(t));
              try {
                if (
                  (await F().post(d, a, { withCredentials: !0 }))?.data
                    ?.success == e.R
                )
                  return !0;
                throw new Error("failed to set language list");
              } catch (f) {
                const X = (0, b.H)(f);
                console.error("updateLanguageList failed: ", X.strErrorMsg, X);
              }
            }
            const A = "AppLanguageOptionsList",
              Z = "AppDLCList",
              ae = "AppInfo",
              ue = "StatGroupMutator";
            async function u(o, t, d) {
              const a = `${x.TS.PARTNER_BASE_URL}achievements/ajaxcreateorupdategroup/${o}`,
                f = new FormData();
              f.append("groupid", t),
                f.append("name", JSON.stringify(d.name)),
                d.dlcappid && f.append("requiredappid", d.dlcappid),
                f.append("isarchived", d.archived == "1" ? "true" : "false"),
                f.append(
                  "isdeveloperonly",
                  d.developeronly == "1" ? "true" : "false",
                ),
                f.append("order", d.order ?? "-1");
              try {
                const X = await F().post(a, f, { withCredentials: !0 });
                if (X?.data?.success == e.R) return X.data.groupid;
                throw new Error(`failed to save group id ${t}`);
              } catch (X) {
                const ie = (0, b.H)(X);
                console.error(
                  "useStatGroupMutation failed: ",
                  ie.strErrorMsg,
                  ie,
                );
              }
            }
            async function Q(o, t) {
              const d = new FormData();
              d.append("appid", o.toString()),
                d.append("groupids", JSON.stringify(t));
              try {
                const a = `${x.TS.PARTNER_BASE_URL}achievements/ajaxreordergroups/${o}`;
                if (
                  (await F().post(a, d, { withCredentials: !0 }))?.data
                    ?.success == e.R
                )
                  return !0;
                throw new Error("failed to reorder groups");
              } catch (a) {
                const f = (0, b.H)(a);
                console.error("reorderGroups failed: ", f.strErrorMsg, f);
              }
              return !1;
            }
            async function R(o, t, d) {
              const a = new FormData();
              a.append("appid", o.toString()),
                a.append("groupid", (t ?? 0).toString()),
                a.append("names", JSON.stringify(d));
              try {
                const f = `${x.TS.PARTNER_BASE_URL}achievements/ajaxmoveachievements/${o}`;
                if (
                  (await F().post(f, a, { withCredentials: !0 }))?.data
                    ?.success == e.R
                )
                  return !0;
                throw new Error(`failed to move achievements to group ${t}`);
              } catch (f) {
                const X = (0, b.H)(f);
                console.error(
                  "moveAchievementsGroup failed: ",
                  X.strErrorMsg,
                  X,
                );
              }
              return !1;
            }
            var ne = ((o) => (
              (o.Achieved = "achievement"),
              (o.Unachieved = "achievement_gray"),
              o
            ))(ne || {});
            async function _(o, t, d, a, f) {
              const [X, ie, ge] = f.match(/data:(image\/\w+);base64,(.*)/),
                me = K.hp.from(ge, "base64"),
                Se = ie === "image/png" ? "png" : "jpg",
                Ge = `${o.toString()}_${t}_${d}_${a == "achievement" ? "a" : "g"}.${Se}`,
                He = new File([me], Ge, { type: ie }),
                we = new FormData();
              we.append("appID", o.toString()),
                we.append("statID", t),
                we.append("bit", d),
                we.append("requestType", a.toString()),
                we.append("image", He);
              try {
                const Ve = `${x.TS.PARTNER_BASE_URL}images/uploadachievement`;
                if (
                  (await F().post(Ve, we, { withCredentials: !0 }))?.data
                    ?.success == e.R
                )
                  return !0;
                throw new Error(
                  `failed to save achievement image with stat id ${t} and bit id ${d}`,
                );
              } catch (Ve) {
                const xe = (0, b.H)(Ve);
                console.error(
                  "AchievementImageUpload failed: ",
                  xe.strErrorMsg,
                  xe,
                );
              }
              return !1;
            }
            async function de(o, t, d, a, f) {
              let X = !0;
              if (
                (a &&
                  a.startsWith("data:") &&
                  (X = X && (await _(o, t, d, "achievement", a))),
                f &&
                  f.startsWith("data:") &&
                  (X = X && (await _(o, t, d, "achievement_gray", f))),
                !X)
              )
                throw new Error(
                  `Failed to save images for achievement with stat id ${t} and bit id ${d}`,
                );
            }
            async function pe(o, t) {
              const {
                statID: d,
                bitID: a,
                achievement: f,
                icon: X,
                icon_gray: ie,
              } = t;
              if (!f && d && a)
                return (
                  await de(o, d, a, X, ie),
                  { success: e.R, statid: d, bitid: a }
                );
              const ge = new FormData();
              d && ge.append("statid", d),
                a && ge.append("bitid", a),
                f.groupid && ge.append("groupid", f.groupid),
                ge.append("name", f.name),
                f.progress &&
                  (ge.append("progressstat", f.progress.value.operand1),
                  ge.append("progressmin", f.progress.min_val),
                  ge.append("progressmax", f.progress.max_val)),
                f.permission && ge.append("setby", f.permission.toString()),
                f.archived == "1" && ge.append("isarchived", "true"),
                f.display &&
                  (f.display.hidden == "1" && ge.append("hidden", "true"),
                  f.display.name &&
                    ge.append("displayname", JSON.stringify(f.display.name)),
                  f.display.desc &&
                    ge.append("displaydesc", JSON.stringify(f.display.desc)));
              try {
                const me = `${x.TS.PARTNER_BASE_URL}achievements/ajaxcreateorupdateachievement/${o}`,
                  Se = await F().post(me, ge, { withCredentials: !0 });
                if (Se?.data?.success == e.R) {
                  const Ge = Se.data.statid,
                    He = Se.data.bitid;
                  return await de(o, Ge, He, X, ie), Se.data;
                }
                throw new Error(
                  `failed to save achievement with stat id ${d} and bit id ${a}`,
                );
              } catch (me) {
                const Se = (0, b.H)(me);
                console.error(
                  "useStatAchievementMutation failed: ",
                  Se.strErrorMsg,
                  Se,
                );
              }
            }
            async function m(o, t) {
              const { statID: d, bitID: a } = t;
              try {
                const f = `${x.TS.PARTNER_BASE_URL}achievements/ajaxdeleteachievement/${o}`,
                  X = new FormData();
                if (
                  (X.append("appid", o.toString()),
                  X.append("statid", d),
                  X.append("bitid", a),
                  (await F().post(f, X, { withCredentials: !0 }))?.data
                    ?.success == e.R)
                )
                  return !0;
                throw new Error(
                  `failed to delete achievement with stat id ${d} and bit id ${a}`,
                );
              } catch (f) {
                const X = (0, b.H)(f);
                console.error("AchievementDelete failed: ", X.strErrorMsg, X);
              }
              return !1;
            }
            C();
          } catch ($) {
            C($);
          }
        });
      },
      45037: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let P = function (r, s, o, t, d) {
                return (t && r in t) || (o && r in o && se(s[r], o[r], d));
              },
              oe = function () {
                const {
                    generateUnachievedImages: r,
                    setGenerateUnachievedImages: s,
                  } = (0, z.Mt)(),
                  { appID: o } = (0, K.L3)(),
                  t = (0, K.kb)(o),
                  d = (0, K.FM)(o),
                  a = (0, K.ts)(o),
                  [f, X] = (0, I.useState)(!1),
                  ie = "dull-7",
                  ge = "blue-8";
                return (0, e.jsxs)(J.s, {
                  direction: "column",
                  gap: "3",
                  children: [
                    (0, e.jsxs)(J.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      marginTop: "3",
                      background: ie,
                      children: [
                        (0, e.jsx)(V.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Definitions_Title",
                          ),
                        }),
                        (0, e.jsx)(V.EY, {
                          contrast: "description",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Definitions_Description",
                          ),
                        }),
                        (0, e.jsxs)(J.s, {
                          direction: "row",
                          align: "center",
                          gap: "2",
                          marginTop: "2",
                          marginBottom: "2",
                          children: [
                            (0, e.jsxs)(j.$, {
                              color: "dull",
                              onClick: () => {
                                (0, $.le)(o, t);
                              },
                              children: [
                                (0, e.jsx)(R, {}),
                                "\xA0",
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_Export_Definitions",
                                ),
                              ],
                            }),
                            (0, e.jsxs)(V.EY, {
                              color: ge,
                              children: [
                                "(",
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_N_Achievements",
                                  t.length,
                                ),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)(J.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      background: ie,
                      children: [
                        (0, e.jsx)(V.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Localization_Title",
                          ),
                        }),
                        (0, e.jsx)(V.EY, {
                          contrast: "description",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Localization_Description",
                          ),
                        }),
                        (0, e.jsxs)(J.s, {
                          direction: "row",
                          align: "center",
                          gap: "3",
                          marginTop: "2",
                          marginBottom: "2",
                          children: [
                            (0, e.jsxs)(J.s, {
                              direction: "row",
                              align: "center",
                              gap: "2",
                              children: [
                                (0, e.jsxs)(j.$, {
                                  color: "dull",
                                  onClick: () => {
                                    X(!0);
                                  },
                                  children: [
                                    (0, e.jsx)(E, {}),
                                    "\xA0",
                                    (0, g.we)(
                                      "#AchievementEditor_Bulk_Localization_Languages_Button",
                                    ),
                                  ],
                                }),
                                (0, e.jsxs)(V.EY, {
                                  color: ge,
                                  children: [
                                    "(",
                                    (0, g.we)(
                                      "#AchievementEditor_Bulk_N_Languages",
                                      a.length,
                                    ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            (0, e.jsxs)(J.s, {
                              direction: "row",
                              align: "center",
                              gap: "2",
                              children: [
                                (0, e.jsxs)(j.$, {
                                  color: "dull",
                                  onClick: () => {
                                    (0, $.CD)(o, t, a);
                                  },
                                  children: [
                                    (0, e.jsx)(R, {}),
                                    "\xA0",
                                    (0, g.we)(
                                      "#AchievementEditor_Bulk_Export_Localization",
                                    ),
                                  ],
                                }),
                                (0, e.jsxs)(V.EY, {
                                  color: ge,
                                  children: [
                                    "(",
                                    (0, g.we)(
                                      "#AchievementEditor_Bulk_N_Achievements",
                                      t.length,
                                    ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(V.EY, {
                          contrast: "description",
                          children: (0, g.oW)(
                            "#AchievementEditor_Bulk_Localization_Tip",
                            (0, e.jsx)(V.EY, { contrast: "subtitle" }),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)(J.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      background: ie,
                      children: [
                        (0, e.jsx)(V.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_GroupLocalization_Title",
                          ),
                        }),
                        (0, e.jsx)(V.EY, {
                          contrast: "description",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_GroupLocalization_Description",
                          ),
                        }),
                        (0, e.jsxs)(J.s, {
                          direction: "row",
                          align: "center",
                          gap: "2",
                          marginTop: "2",
                          marginBottom: "2",
                          children: [
                            (0, e.jsxs)(j.$, {
                              color: "dull",
                              onClick: () => {
                                (0, $.jF)(o, d, a);
                              },
                              children: [
                                (0, e.jsx)(R, {}),
                                "\xA0",
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_Export_GroupLocalization",
                                ),
                              ],
                            }),
                            (0, e.jsxs)(V.EY, {
                              color: ge,
                              children: [
                                "(",
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_N_Groups",
                                  d.length,
                                ),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)(J.s, {
                      direction: "column",
                      gap: "1",
                      padding: "3",
                      background: ie,
                      children: [
                        (0, e.jsx)(V.EY, {
                          contrast: "title",
                          weight: "heavy",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Icons_Title",
                          ),
                        }),
                        (0, e.jsx)(V.EY, {
                          contrast: "description",
                          children: (0, g.we)(
                            "#AchievementEditor_Bulk_Icons_Description",
                          ),
                        }),
                        (0, e.jsx)(J.s, {
                          direction: "row",
                          align: "center",
                          gap: "3",
                          marginTop: "2",
                          marginBottom: "2",
                          children: (0, e.jsx)(B.S, {
                            checked: r,
                            onChange: (me) => s(me),
                            children: (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, g.we)(
                                  "#AchievementEditor_Bulk_Options_GenerateIcons",
                                ),
                                (0, e.jsx)("span", {
                                  children: (0, g.we)(
                                    "#AchievementEditor_Bulk_Options_GenerateIcons_Description",
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    f && (0, e.jsx)(G.Jt, { onClose: () => X(!1) }),
                  ],
                });
              },
              W = function (r) {
                const { onClose: s, setHasChanges: o } = r;
                return (0, e.jsx)(z.FU, {
                  onClose: s,
                  setHasChanges: o,
                  children: (0, e.jsx)(te, {}),
                });
              },
              ee = function (r) {
                const { title: s, description: o, children: t } = r;
                return (0, e.jsxs)("div", {
                  className: l.BulkEditSection,
                  children: [
                    (0, e.jsx)("h2", { children: s }),
                    (0, e.jsx)("p", { children: o }),
                    t,
                  ],
                });
              },
              te = function () {
                const {
                  files: r,
                  hasData: s,
                  acceptedTypes: o,
                  fileInputRef: t,
                  uploadFiles: d,
                  openFilePicker: a,
                  save: f,
                  isSaving: X,
                  saveSucceeded: ie,
                  onClose: ge,
                } = (0, z.Mt)();
                return (0, e.jsxs)("div", {
                  className: (0, c.A)(l.Takeover, l.BulkEdit),
                  children: [
                    ie &&
                      (0, e.jsx)(v.TM, {
                        hideCancelButton: !0,
                        onOk: ge,
                        children: (0, g.we)(
                          "#AchievementEditor_Bulk_Save_Confirm",
                        ),
                      }),
                    (0, e.jsx)(oe, {}),
                    (0, e.jsxs)("div", {
                      className: l.TakeoverBody,
                      children: [
                        (0, e.jsx)(i.z, {
                          className: l.BulkUploadFileDropBox,
                          accept: o,
                          multiple: !0,
                          fileInputRef: t,
                          onUpload: d,
                          children: (0, e.jsx)("div", {
                            className: l.UploadPlaceholder,
                            children: (0, g.we)(
                              "#AchievementEditor_Bulk_UploadBox",
                            ),
                          }),
                        }),
                        (0, e.jsx)("div", {
                          className: l.ButtonContainer,
                          children: (0, e.jsx)(j.$, {
                            color: "dull",
                            onClick: a,
                            children: (0, g.we)(
                              "#AchievementEditor_Bulk_Upload_SelectFiles",
                            ),
                          }),
                        }),
                        r.length > 0 &&
                          (0, e.jsx)(ee, {
                            title: (0, g.we)(
                              "#AchievementEditor_Bulk_Files_Title",
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_Bulk_Files_Description",
                            ),
                            children: (0, e.jsx)(w, {}),
                          }),
                        s &&
                          (0, e.jsxs)(ee, {
                            title: (0, g.we)(
                              "#AchievementEditor_Bulk_Pending_Title",
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_Bulk_Pending_Description",
                            ),
                            children: [
                              (0, e.jsx)(F.az, {
                                className: l.LanguageSelect,
                                background: "dull-7",
                                padding: "2",
                                children: (0, e.jsx)(G.Mq, {}),
                              }),
                              (0, e.jsx)(A, {}),
                              (0, e.jsx)(y, {}),
                            ],
                          }),
                      ],
                    }),
                    s &&
                      (0, e.jsx)(v.Aj, {
                        pending: X,
                        hideCancel: !0,
                        onSave: f,
                      }),
                  ],
                });
              },
              se = function (r, s, o) {
                if (!r) return !0;
                const t = (X, ie) => (X < ie ? -1 : X > ie ? 1 : 0),
                  d = (0, $.pC)(r, o).sort((X, ie) => t(X.field, ie.field)),
                  a = D(s, o).sort((X, ie) => t(X.field, ie.field));
                return !T()(d, a);
              },
              D = function (r, s) {
                const o = s.reduce((t, d) => ((t[d] = ""), t), {});
                return r.map((t) => ({ ...o, ...t }));
              },
              y = function () {
                const {
                    definitions: r,
                    localization: s,
                    images: o,
                    confirmDelete: t,
                    setConfirmDelete: d,
                  } = (0, z.Mt)(),
                  {
                    csv: a,
                    achievements: f,
                    added: X,
                    modified: ie,
                    unmodified: ge,
                    deleted: me,
                  } = r,
                  { localization: Se } = s ?? {},
                  { appID: Ge } = (0, K.L3)(),
                  He = (0, K.ts)(Ge),
                  we = (ye) => P(ye, f, Se, o, He),
                  Ve = [...ie, ...ge.filter(we)],
                  xe = ge.filter((ye) => !we(ye));
                return (0, e.jsxs)("div", {
                  className: l.ResultsContainer,
                  children: [
                    (0, e.jsx)("h3", {
                      children: (0, g.we)(
                        "#AchievementEditor_Bulk_Pending_Achievements",
                      ),
                    }),
                    (0, e.jsx)(Y, {}),
                    (0, e.jsxs)("div", {
                      className: l.ImportedAchievements,
                      children: [
                        X &&
                          !!X.length &&
                          (0, e.jsx)(N, {
                            className: (0, c.A)(l.ChangeBorder, l.Added),
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Added_Title",
                              X.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Added_Description",
                            ),
                            children: X.map((ye, Ne) =>
                              (0, e.jsx)(
                                re,
                                {
                                  data: a[ye],
                                  localization: Se?.[ye],
                                  images: o?.[ye],
                                },
                                Ne,
                              ),
                            ),
                          }),
                        Ve &&
                          !!Ve.length &&
                          (0, e.jsx)(N, {
                            className: (0, c.A)(l.ChangeBorder, l.Modified),
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Modified_Title",
                              Ve.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Modified_Description",
                            ),
                            children: Ve.map((ye, Ne) =>
                              (0, e.jsx)(
                                re,
                                {
                                  achievement: f[ye],
                                  data: a?.[ye] || (0, $.oK)(f[ye]),
                                  localization: Se?.[ye],
                                  images: o?.[ye],
                                },
                                Ne,
                              ),
                            ),
                          }),
                        me &&
                          !!me.length &&
                          (0, e.jsx)(N, {
                            className: (0, c.A)(l.ChangeBorder, l.Deleted),
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Removed_Title",
                              me.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Removed_Description",
                            ),
                            headerChildren: (0, e.jsx)(k.j, {
                              cursor: "pointer",
                              maxWidth: "max-content",
                              onClick: () => d(!t),
                              children: (0, e.jsx)(B.S, {
                                variant: "dark",
                                color: "red",
                                checked: t,
                                onChange: (ye) => d(ye),
                                children: (0, g.we)(
                                  "#AchievementEditor_AchievementCsvImport_Removed_Confirm",
                                ),
                              }),
                            }),
                            children: me.map((ye, Ne) =>
                              (0, e.jsx)(
                                re,
                                {
                                  achievement: f[ye],
                                  data: (0, $.oK)(f[ye]),
                                  localization: Se?.[ye],
                                  images: o?.[ye],
                                },
                                Ne,
                              ),
                            ),
                          }),
                        xe &&
                          !!xe.length &&
                          (0, e.jsx)(ae, {
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Unmodified_Title",
                              xe.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Unmodified_Description",
                            ),
                            children: xe.map((ye, Ne) =>
                              (0, e.jsx)(
                                re,
                                {
                                  achievement: f[ye],
                                  data: (0, $.oK)(f[ye]),
                                  localization: Se?.[ye],
                                  images: o?.[ye],
                                },
                                Ne,
                              ),
                            ),
                          }),
                      ],
                    }),
                  ],
                });
              },
              Y = function () {
                return (0, e.jsxs)("div", {
                  className: l.LegendContainer,
                  children: [
                    (0, e.jsx)("div", { className: l.LegendChangeIcon }),
                    (0, e.jsx)("p", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementCsvImport_Pending_Legend",
                      ),
                    }),
                  ],
                });
              },
              A = function () {
                const { groupLocalization: r } = (0, z.Mt)(),
                  { currentLanguage: s } = (0, K.L3)().localization,
                  { csv: o, groups: t, modified: d, unmodified: a } = r ?? {};
                if (!o) return null;
                const f = (X) =>
                  (0, e.jsxs)("div", {
                    className: l.ImportedGroups,
                    children: [
                      (0, e.jsxs)("div", {
                        className: l.TableHeader,
                        children: [
                          (0, e.jsx)("div", {
                            children: (0, g.we)(
                              "#AchievementEditor_GroupCsvImport_Header_GroupID",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, g.we)(
                              "#AchievementEditor_Group_Field_Name",
                            ),
                          }),
                        ],
                      }),
                      X.map((ie) => {
                        const ge = (0, $.NJ)(o[ie], t[ie]),
                          me = (0, G.ZM)(t[ie]?.name, s) != (0, G.ZM)(ge, s);
                        return (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              (0, e.jsx)("div", { children: ie }),
                              (0, e.jsx)("div", {
                                className: (0, c.A)(me && l.ModifiedField),
                                children: (0, e.jsx)(G.VU, { text: ge }),
                              }),
                            ],
                          },
                          ie,
                        );
                      }),
                    ],
                  });
                return (0, e.jsxs)("div", {
                  className: l.ResultsContainer,
                  children: [
                    (0, e.jsx)("h3", {
                      children: (0, g.we)(
                        "#AchievementEditor_Bulk_Pending_Groups",
                      ),
                    }),
                    (0, e.jsx)(Y, {}),
                    (0, e.jsxs)(J.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        !!d?.length &&
                          (0, e.jsx)(u, {
                            className: (0, c.A)(l.ChangeBorder, l.Modified),
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Modified_Title",
                              d.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_GroupCsvImport_Modified_Description",
                            ),
                            children: f(d),
                          }),
                        !!a?.length &&
                          (0, e.jsx)(u, {
                            collapsible: !0,
                            title: (0, g.we)(
                              "#AchievementEditor_AchievementCsvImport_Unmodified_Title",
                              a.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_GroupCsvImport_Unmodified_Description",
                            ),
                            children: f(a),
                          }),
                      ],
                    }),
                  ],
                });
              },
              le = function (r) {
                const { title: s, description: o, headerChildren: t } = r;
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(V.EY, {
                      size: "4",
                      contrast: "title",
                      children: s,
                    }),
                    (0, e.jsx)(V.EY, { children: o }),
                    t,
                  ],
                });
              },
              Z = function (r) {
                const { className: s, children: o } = r;
                return (0, e.jsx)("div", {
                  className: (0, c.A)(l.ImportedAchievementsTableContainer, s),
                  children: o,
                });
              },
              N = function (r) {
                const { children: s, className: o, ...t } = r;
                return (0, e.jsxs)(Z, {
                  ...r,
                  children: [
                    (0, e.jsx)("div", {
                      className: l.ImportedAchievementsTableHeader,
                      children: (0, e.jsx)(le, { ...t }),
                    }),
                    (0, e.jsxs)("div", {
                      className: l.ImportedAchievementsTable,
                      children: [(0, e.jsx)(fe, {}), s],
                    }),
                  ],
                });
              },
              ae = function (r) {
                const { children: s, className: o, ...t } = r,
                  [d, a] = (0, I.useState)(!0);
                return (0, e.jsxs)(Z, {
                  ...r,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, c.A)(
                        l.ImportedAchievementsTableHeader,
                        l.CollapsibleAchievementsTableHeader,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(le, { ...t }),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)("div", {
                            className: l.ExpandButton,
                            onClick: () => a(!d),
                            children: (0, e.jsx)(x.DK4, { angle: d ? 90 : 0 }),
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, c.A)(
                        l.ImportedAchievementsTable,
                        d && l.Collapsed,
                      ),
                      children: [(0, e.jsx)(fe, {}), s],
                    }),
                  ],
                });
              },
              fe = function () {
                return (0, e.jsxs)("div", {
                  className: l.TableHeader,
                  children: [
                    (0, e.jsx)("div", {}),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_NameDescription",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_ApiName",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_Group",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_SetBy",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AchievementEditor_AchievementsTable_Header_Availability",
                      ),
                    }),
                  ],
                });
              },
              re = function (r) {
                const {
                    achievement: s,
                    data: o,
                    localization: t,
                    images: d,
                  } = r,
                  {
                    api_name: a,
                    groupid: f,
                    archived: X,
                    spoiler: ie,
                    permission: ge,
                    progress_stat_name: me,
                    progress_stat_min: Se,
                    progress_stat_max: Ge,
                  } = o ?? {},
                  He = (0, $.B6)(
                    s?.display?.name?.token,
                    t?.find((be) => be.field == "name"),
                  ),
                  we = (0, $.B6)(
                    s?.display?.desc?.token,
                    t?.find((be) => be.field == "description"),
                  ),
                  { localization: Ve } = (0, K.L3)(),
                  { currentLanguage: xe } = Ve;
                function ye(be, Xe, ke) {
                  return (0, c.A)(
                    ke,
                    be == Xe && s !== void 0 ? void 0 : l.ModifiedField,
                  );
                }
                const Ne = s?.display?.hidden == "1",
                  Ye = s?.archived == "1",
                  Je = ye(
                    (0, G.ZM)(s?.display?.name, xe),
                    (0, G.ZM)(t ? He : s?.display?.name, xe),
                  ),
                  $e = ye(
                    (0, G.ZM)(s?.display?.desc, xe),
                    (0, G.ZM)(t ? we : s?.display?.desc, xe),
                  );
                return (0, e.jsxs)("div", {
                  className: l.CompactAchievementRow,
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        d?.achieved?.image
                          ? (0, e.jsx)(M.O, {
                              image: d?.achieved?.image,
                              size: 32,
                              className: l.ModifiedIcon,
                            })
                          : (0, e.jsx)(M.T, {
                              achievement: s,
                              size: 32,
                              className: l.UnmodifiedIcon,
                            }),
                        d?.unachieved?.image
                          ? (0, e.jsx)(M.O, {
                              image: d?.unachieved?.image,
                              size: 32,
                              className: l.ModifiedIcon,
                            })
                          : (0, e.jsx)(M.T, {
                              achievement: s,
                              achieved: !1,
                              size: 32,
                              className: l.UnmodifiedIcon,
                            }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: l.NameColumn,
                      children: [
                        (0, e.jsx)("div", {
                          className: Je,
                          children: (0, e.jsx)(G.VU, {
                            text: t ? He : s?.display?.name,
                          }),
                        }),
                        (0, e.jsx)("div", {
                          className: $e,
                          children: (0, e.jsx)(G.VU, {
                            text: t ? we : s?.display?.desc,
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: l.ApiColumn,
                      children: [
                        (0, e.jsx)("div", {
                          className: ye(a, s?.name),
                          children: a,
                        }),
                        me &&
                          (0, e.jsxs)("div", {
                            className: l.ProgressColumn,
                            children: [
                              (0, e.jsx)("span", {
                                className: ye(me, s?.progress?.value?.operand1),
                                children: me,
                              }),
                              ": ",
                              (0, e.jsx)("span", {
                                className: ye(
                                  Se.toString(),
                                  s?.progress?.min_val,
                                ),
                                children: Se,
                              }),
                              " - ",
                              (0, e.jsx)("span", {
                                className: ye(
                                  Ge.toString(),
                                  s?.progress?.max_val,
                                ),
                                children: Ge,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: ye(f, s?.groupid ?? ""),
                      children: (0, e.jsx)(ue, {
                        groupid: f,
                        oldgroupid: s?.groupid,
                        isnew: !s,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: ye(ge, s?.permission ?? K.yu.Client),
                      children: K.yu[ge],
                    }),
                    (0, e.jsxs)("div", {
                      className: l.VisibilityColumn,
                      children: [
                        (ie || Ne) &&
                          (0, e.jsx)("div", {
                            className: ye(ie, Ne),
                            children: ie
                              ? (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(_, {}),
                                    " ",
                                    (0, g.we)(
                                      "#AchievementEditor_Achievement_Edit_Spoiler",
                                    ),
                                  ],
                                })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(ve, {}),
                                    " ",
                                    (0, g.we)(
                                      "#AchievementEditor_Achievement_Edit_Visible",
                                    ),
                                  ],
                                }),
                          }),
                        (X || Ye) &&
                          (0, e.jsx)("div", {
                            className: ye(X, Ye),
                            children: X
                              ? (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(de, {}),
                                    " ",
                                    (0, g.we)(
                                      "#AchievementEditor_Achievement_Edit_Archived",
                                    ),
                                  ],
                                })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(pe, {}),
                                    " ",
                                    (0, g.we)(
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
              ue = function (r) {
                const { groupid: s, oldgroupid: o, isnew: t } = r,
                  { appID: d } = (0, K.L3)(),
                  a = (0, K.Q4)(d),
                  f = !s || s == "" ? v.z0 : s,
                  X = (0, v.fw)(f, a?.[f]),
                  ie = (0, v.fw)(o, a?.[o]),
                  ge =
                    f == v.z0
                      ? (0, g.we)(
                          "#AchievementEditor_Group_CoreGameAchievements_Heading",
                        )
                      : (0, e.jsx)(G.VU, { text: a?.[f]?.name });
                if (X.visible) {
                  if ((t || f != o) && X.hasprogress)
                    return (0, e.jsxs)(q.he, {
                      className: l.Warning,
                      toolTipContent: (0, g.we)(
                        "#AchievementEditor_Group_CreateAchievement_WarnLiveGroup",
                      ),
                      style: { alignItems: "baseline" },
                      children: [
                        (0, e.jsx)(v.BA, { className: l.WarningGlobeIcon }),
                        ge,
                      ],
                    });
                } else
                  return ie?.visible
                    ? (0, e.jsxs)(q.he, {
                        className: l.Warning,
                        toolTipContent: (0, g.we)(
                          "#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement",
                        ),
                        style: { alignItems: "baseline" },
                        children: [(0, e.jsx)(_, { hideTitle: !0 }), ge],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(_, { className: l.UnreleasedText }),
                          ge,
                        ],
                      });
                return (0, e.jsx)(e.Fragment, { children: ge });
              },
              u = function (r) {
                const {
                    title: s,
                    description: o,
                    icon: t,
                    collapsible: d = !1,
                    className: a,
                    children: f,
                  } = r,
                  [X, ie] = (0, I.useState)(d);
                return (0, e.jsxs)("div", {
                  className: (0, c.A)(l.ResultsSection, a),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, c.A)(
                        l.ResultsSectionHeader,
                        d && l.CollapsibleResultsSectionHeader,
                      ),
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)(J.s, {
                              direction: "row",
                              gap: "1",
                              align: "center",
                              children: [
                                t,
                                (0, e.jsx)(V.EY, {
                                  size: "4",
                                  contrast: "title",
                                  children: s,
                                }),
                              ],
                            }),
                            (0, e.jsx)(V.EY, { children: o }),
                          ],
                        }),
                        d &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)("div", {
                              className: l.ExpandButton,
                              onClick: () => ie(!X),
                              children: (0, e.jsx)(x.DK4, {
                                angle: X ? 90 : 0,
                              }),
                            }),
                          }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, c.A)(
                        l.ResultsSectionBody,
                        X && l.Collapsed,
                      ),
                      children: f,
                    }),
                  ],
                });
              },
              w = function () {
                const { errors: r, successes: s } = (0, z.Mt)();
                return r.length == 0 && s.length == 0
                  ? null
                  : (0, e.jsxs)(J.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        r.length > 0 &&
                          (0, e.jsx)(u, {
                            icon: (0, e.jsx)(h, {}),
                            title: (0, g.Yp)(
                              "#AchievementEditor_Bulk_Errors_Count_Title",
                              r.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_Bulk_Errors_Description",
                            ),
                            children: r.map((o) =>
                              (0, e.jsx)(Q, { result: o }, o.filename),
                            ),
                          }),
                        s.length > 0 &&
                          (0, e.jsx)(u, {
                            collapsible: !0,
                            title: (0, g.Yp)(
                              "#AchievementEditor_Bulk_Successes_Count_Title",
                              s.length,
                            ),
                            description: (0, g.we)(
                              "#AchievementEditor_Bulk_Successes_Description",
                            ),
                            children: s.map((o) =>
                              (0, e.jsx)(
                                "div",
                                {
                                  className: l.FileSuccessRow,
                                  children: (0, e.jsx)(L, { result: o }),
                                },
                                o.filename,
                              ),
                            ),
                          }),
                      ],
                    });
              },
              L = function (r) {
                const { result: s } = r,
                  { filename: o, imageErrors: t } = s,
                  { removeFile: d } = (0, z.Mt)(),
                  a = s.image?.result?.image ?? t?.[0]?.image,
                  f = a
                    ? (0, e.jsx)("div", {
                        className: l.FileImage,
                        children: (0, e.jsx)("img", {
                          src: a.image,
                          alt: a.filenameWithoutExtension,
                        }),
                      })
                    : (0, e.jsx)(F.az, {
                        height: "24px",
                        aspectRatio: "1/1",
                        children: (0, e.jsx)(x.ZHH, {}),
                      });
                return (0, e.jsxs)(J.s, {
                  direction: "row",
                  gap: "1",
                  padding: "1",
                  justify: "between",
                  align: "center",
                  background: "dull-8",
                  children: [
                    (0, e.jsxs)(J.s, {
                      direction: "row",
                      gap: "2",
                      justify: "start",
                      align: "center",
                      children: [
                        f,
                        (0, e.jsx)(V.EY, {
                          weight: "heavy",
                          size: "4",
                          contrast: "title",
                          whiteSpace: "pre-wrap",
                          children: o,
                        }),
                      ],
                    }),
                    (0, e.jsx)(v.et, { onClick: () => d(o) }),
                  ],
                });
              },
              O = function (r) {
                const {
                  kind: s,
                  errors: o,
                  csvErrors: t,
                  imageErrors: d,
                } = r.result;
                if (t) {
                  const a =
                    s == "grouplocalization"
                      ? (0, g.we)(
                          "#AchievementEditor_GroupCsvImport_Header_GroupID",
                        )
                      : (0, g.we)(
                          "#AchievementEditor_Achievement_Edit_ApiName",
                        );
                  return (0, e.jsx)(U, {
                    keyHeader: a,
                    errorStrings: o,
                    csvErrors: t,
                  });
                }
                return d
                  ? (0, e.jsxs)("div", {
                      children: [
                        o &&
                          o.map((a, f) =>
                            (0, e.jsx)(
                              "div",
                              { className: l.FileError, children: a },
                              f,
                            ),
                          ),
                        d.map((a, f) =>
                          (0, e.jsx)(
                            "div",
                            { className: l.FileError, children: a.error },
                            f,
                          ),
                        ),
                      ],
                    })
                  : (0, e.jsx)("div", {
                      children:
                        o &&
                        o.map((a, f) =>
                          (0, e.jsx)(
                            "div",
                            { className: l.FileError, children: a },
                            f,
                          ),
                        ),
                    });
              },
              Q = function (r) {
                const { result: s } = r;
                return (0, e.jsxs)("div", {
                  className: l.FileErrorList,
                  children: [
                    (0, e.jsx)(L, { result: s }),
                    (0, e.jsx)(O, { result: s }),
                  ],
                });
              },
              U = function (r) {
                const { keyHeader: s, errorStrings: o, csvErrors: t } = r;
                return (0, e.jsxs)("div", {
                  className: l.CsvErrorsTable,
                  children: [
                    (0, e.jsxs)("div", {
                      className: l.TableHeader,
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, g.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Line",
                          ),
                        }),
                        (0, e.jsx)("div", { children: s }),
                        (0, e.jsx)("div", {
                          children: (0, g.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Field",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, g.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Input",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, g.we)(
                            "#AchievementEditor_AchievementCsvImport_Header_Error",
                          ),
                        }),
                      ],
                    }),
                    o &&
                      o.map((d, a) =>
                        (0, e.jsx)(
                          "div",
                          { className: l.FileError, children: d },
                          a,
                        ),
                      ),
                    t
                      .sort(m)
                      .map((d, a) =>
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              (0, e.jsx)("div", { children: d.line }),
                              (0, e.jsx)("div", { children: d.key }),
                              (0, e.jsx)("div", { children: d.field }),
                              (0, e.jsx)("div", { children: d.input }),
                              (0, e.jsx)("div", { children: d.message }),
                            ],
                          },
                          `${d.key}.${d.field}.${a}`,
                        ),
                      ),
                  ],
                });
              },
              R = function (r) {
                const { className: s } = r;
                return (0, e.jsx)("div", {
                  className: (0, c.A)(l.AchievementDetailIcon, s),
                  children: (0, e.jsx)(x.MwB, {}),
                });
              },
              E = function (r) {
                const { className: s } = r;
                return (0, e.jsx)("div", {
                  className: (0, c.A)(l.AchievementDetailIcon, s),
                  children: (0, e.jsx)(x.f5X, {}),
                });
              },
              _ = function (r) {
                const { className: s, hideTitle: o = !1 } = r;
                return (0, e.jsx)("div", {
                  className: (0, c.A)(l.AchievementDetailIcon, s),
                  title: o
                    ? void 0
                    : (0, g.we)("#AchievementEditor_Achievement_Edit_Hidden"),
                  children: (0, e.jsx)(b.ZyV, {}),
                });
              },
              ve = function (r) {
                const { className: s, hideTitle: o = !1 } = r;
                return (0, e.jsx)("div", {
                  className: (0, c.A)(l.AchievementDetailIcon, s),
                  title: o
                    ? void 0
                    : (0, g.we)("#AchievementEditor_Achievement_Edit_Visible"),
                  children: (0, e.jsx)(b.rxV, {}),
                });
              },
              de = function (r) {
                const { className: s, hideTitle: o = !1 } = r;
                return (0, e.jsx)("div", {
                  className: (0, c.A)(l.AchievementDetailIcon, s),
                  title: o
                    ? void 0
                    : (0, g.we)("#AchievementEditor_Achievement_Edit_Archived"),
                  children: (0, e.jsx)(x.c_I, {}),
                });
              },
              pe = function (r) {
                const { className: s } = r;
                return (0, e.jsx)("div", {
                  className: (0, c.A)(l.AchievementDetailIcon, s),
                  children: (0, e.jsx)(x.$VH, {}),
                });
              },
              h = function (r) {
                const { className: s } = r;
                return (0, e.jsx)("div", {
                  className: (0, c.A)(l.AchievementDetailIcon, s),
                  children: (0, e.jsx)(x.eTF, { color: "var(--color-error)" }),
                });
              },
              m = function (r, s) {
                let o = (r.line ?? 0) - (s.line ?? 0);
                return (
                  o != 0 ||
                    ((o = r.key.localeCompare(s.key)), o != 0) ||
                    (o = r.field.localeCompare(s.field)),
                  o
                );
              };
            n.d(he, { V: () => W });
            var e = n(7850),
              J = n(68031),
              V = n(15252),
              j = n(79611),
              B = n(94381),
              F = n(60351),
              K = n(3959),
              I = n(90626),
              b = n(249),
              x = n(36118),
              c = n(36707),
              g = n(18210),
              l = n(70427),
              ne = n.n(l),
              $ = n(12157),
              M = n(65678),
              G = n(1421),
              z = n(77437),
              v = n(82006),
              i = n(91988),
              S = n(33551),
              T = n.n(S),
              k = n(86946),
              q = n(71421),
              H = p([K, $, M, G, z, v]);
            ([K, $, M, G, z, v] = H.then ? (await H)() : H), C();
          } catch (P) {
            C(P);
          }
        });
      },
      77437: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let I = function (y) {
                return y.errors?.length > 0 || y.fieldErrors?.length > 0;
              },
              g = function (y) {
                const Y = y.toUpperCase(),
                  A = [c, x].find((Z) => Y.endsWith(Z));
                return {
                  apiName: A ? y.substring(0, y.length - A.length) : y,
                  isAchieved: A != c,
                };
              },
              G = function (y, Y) {
                return Y.reduce((A, le) => {
                  const Z = M.includes(le.kind);
                  return [
                    ...A.filter(
                      (ae) =>
                        ae.filename != le.filename &&
                        !(Z && ae.kind == le.kind),
                    ),
                    le,
                  ];
                }, y);
              },
              z = function (y) {
                return {
                  csv: {},
                  achievements: (0, B.K1)(y),
                  added: [],
                  modified: [],
                  deleted: [],
                  unmodified: y.map((Y) => Y.name),
                };
              },
              v = function (y, Y) {
                const A = y.find(
                  (le) => le.success && le.definitions,
                )?.definitions;
                return A
                  ? {
                      csv: A.csv ?? {},
                      achievements: A.achievements ?? (0, B.K1)(Y),
                      added: A.added ?? [],
                      modified: A.modified ?? [],
                      deleted: A.deleted ?? [],
                      unmodified: A.unmodified ?? [],
                    }
                  : z(Y);
              },
              i = function (y, Y) {
                const A = y.find(
                  (Z) => Z.success && Z.localization,
                )?.localization;
                if (!A) return;
                const le = Object.keys(A.localization ?? {})
                  .filter((Z) => !S(Z, Y))
                  .reduce((Z, N) => ((Z[N] = A.localization[N]), Z), {});
                return { ...A, localization: le };
              },
              S = function (y, Y) {
                if (!(y in Y.achievements) && !(y in Y.csv))
                  return (0, j.we)(
                    "#AchievementEditor_Localization_Error_NoAchievement",
                  );
                if (Y.deleted.includes(y))
                  return (0, j.we)(
                    "#AchievementEditor_Localization_Error_MissingFromDefinitions",
                  );
              },
              T = function (y, Y) {
                return !y.success || !y.localization
                  ? []
                  : Object.keys(y.localization.localization ?? {})
                      .map((A) => ({ apiName: A, message: S(A, Y) }))
                      .filter((A) => !!A.message)
                      .map((A) => ({
                        key: A.apiName,
                        field: "api_name",
                        message: A.message,
                      }));
              },
              k = function (y) {
                return y.find((Y) => Y.success && Y.groupLocalization)
                  ?.groupLocalization;
              },
              q = function (y, Y) {
                if (y in Y.achievements || y in Y.csv) return y;
                const A = y.toUpperCase();
                return (
                  [...Object.keys(Y.achievements), ...Object.keys(Y.csv)].find(
                    (Z) => Z.toUpperCase() == A,
                  ) ?? y
                );
              },
              H = function (y, Y) {
                if (!y.success || !y.image) return;
                const A = q(y.image.apiName, Y);
                if (!(A in Y.achievements) && !(A in Y.csv))
                  return (0, j.we)(
                    "#AchievementEditor_Image_Error_NoAchievement",
                    y.image.apiName,
                  );
                if (Y.deleted.includes(A))
                  return (0, j.we)(
                    "#AchievementEditor_Image_Error_AchievementMissingFromCsv",
                    A,
                  );
              },
              P = function (y, Y, A) {
                const le = y
                    .filter((N) => N.success && N.image && !H(N, Y))
                    .map((N) => ({
                      ...N.image,
                      apiName: q(N.image.apiName, Y),
                    })),
                  Z = new Set(le.map((N) => N.apiName));
                return Array.from(Z).reduce((N, ae) => {
                  const fe = le.filter((w) => w.apiName == ae),
                    re = fe.filter((w) => w.isAchieved).pop(),
                    ue = fe.filter((w) => !w.isAchieved).pop(),
                    u = A ? re?.generatedUnachieved : void 0;
                  return (
                    (N[ae] = {
                      achieved: re?.result,
                      unachieved:
                        ue?.result ??
                        (u
                          ? { success: !0, filename: "GENERATED", image: u }
                          : void 0),
                    }),
                    N
                  );
                }, {});
              },
              oe = function (y, Y) {
                const A = (N) => H(N, Y),
                  le = (N) => T(N, Y),
                  Z = (N) => !!A(N) || le(N).length > 0;
                return {
                  errors: [
                    ...y.filter((N) => !N.success),
                    ...y.filter(Z).map((N) => {
                      const ae = A(N);
                      return {
                        ...N,
                        success: !1,
                        imageErrors: ae
                          ? [{ ...N.image.result, success: !1, error: ae }]
                          : void 0,
                        csvErrors: ae ? void 0 : le(N),
                      };
                    }),
                  ],
                  successes: y.filter((N) => N.success && !Z(N)),
                };
              },
              W = function (y, Y, A, le) {
                const Z = (u) => ({
                    icon: A[u]?.achieved?.image?.image,
                    icon_gray: A[u]?.unachieved?.image?.image,
                  }),
                  N = (u) => {
                    const { statID: w, bitID: L } = y.achievements[u];
                    return { statID: w, bitID: L };
                  },
                  ae = y.added.map((u) => ({
                    achievement: (0, B.f4)(y.csv[u], Y?.localization?.[u]),
                    ...Z(u),
                  })),
                  re = Array.from(
                    new Set([
                      ...y.modified,
                      ...Object.keys(Y?.localization ?? {}).filter(
                        (u) => !y.added.includes(u) && u in y.achievements,
                      ),
                    ]),
                  ).map((u) => {
                    const w = y.achievements[u];
                    return {
                      ...N(u),
                      achievement: (0, B.f4)(
                        y.csv[u] ?? (0, B.oK)(w),
                        Y?.localization?.[u],
                        w,
                      ),
                      ...Z(u),
                    };
                  }),
                  ue = Object.keys(A)
                    .filter((u) => y.unmodified.includes(u))
                    .map((u) => ({ ...N(u), ...Z(u) }));
                return {
                  addOrUpdate: [...ae, ...re, ...ue],
                  delete: le ? y.deleted.map(N) : [],
                };
              },
              ee = function (y) {
                return (y?.modified ?? []).map((Y) => {
                  const A = y.groups[Y];
                  return {
                    groupid: Y,
                    group: { ...A, name: (0, B.NJ)(y.csv[Y], A) },
                  };
                });
              },
              se = function () {
                return (0, V.useContext)(te);
              },
              D = function (y) {
                const { onClose: Y, setHasChanges: A, children: le } = y,
                  { appID: Z } = (0, J.L3)(),
                  N = (0, J.kb)(Z),
                  ae = (0, V.useMemo)(() => N ?? [], [N]),
                  fe = (0, J.FM)(Z),
                  re = (0, J.J3)(Z),
                  ue = (0, J.vd)(Z),
                  u = (0, J.SN)(Z),
                  w = (0, J.Er)(Z),
                  [L, O] = (0, V.useState)([]),
                  [Q, U] = (0, V.useState)(!0),
                  [R, E] = (0, V.useState)(!1),
                  [_, ve] = (0, V.useState)(!1),
                  de = (0, V.useRef)(void 0),
                  pe = (0, V.useMemo)(() => v(L, ae), [L, ae]),
                  h = (0, V.useMemo)(() => i(L, pe), [L, pe]),
                  m = (0, V.useMemo)(() => k(L), [L]),
                  r = (0, V.useMemo)(() => P(L, pe, Q), [L, pe, Q]),
                  { errors: s, successes: o } = (0, V.useMemo)(
                    () => oe(L, pe),
                    [L, pe],
                  ),
                  t = L.some((ie) => ie.success);
                (0, V.useEffect)(() => {
                  A(t);
                }, [t, A]);
                const X = {
                  files: L,
                  definitions: pe,
                  localization: h,
                  groupLocalization: m,
                  images: r,
                  errors: s,
                  successes: o,
                  hasData: t,
                  generateUnachievedImages: Q,
                  setGenerateUnachievedImages: U,
                  confirmDelete: R,
                  setConfirmDelete: E,
                  uploadFiles: async (ie) => {
                    const ge = [];
                    for (const me of ie) {
                      const Se = ne.find((Ge) => Ge.accept.includes(me.type));
                      if (!Se) {
                        ge.push({
                          filename: me.name,
                          success: !1,
                          errors: [
                            (0, j.we)(
                              "#AchievementEditor_Image_Error_UnknownContentType",
                            ),
                          ],
                        });
                        continue;
                      }
                      ge.push(
                        await Se.process(me, {
                          groups: fe,
                          stats: re,
                          achievements: ae,
                          validLanguages: ue,
                        }),
                      );
                    }
                    O((me) => G(me, ge)), de.current && (de.current.value = "");
                  },
                  removeFile: (ie) =>
                    O((ge) => ge.filter((me) => me.filename != ie)),
                  openFilePicker: () => de.current?.click(),
                  fileInputRef: de,
                  acceptedTypes: $,
                  save: async () => {
                    await w.mutateAsync(ee(m)),
                      await u.mutateAsync(W(pe, h, r, R)),
                      ve(!0);
                  },
                  isSaving: u.isPending || w.isPending,
                  saveSucceeded: _,
                  onClose: Y,
                };
                return (0, e.jsx)(te, { value: X, children: le });
              };
            n.d(he, { FU: () => D, Mt: () => se });
            var e = n(7850),
              J = n(3959),
              V = n(90626),
              j = n(18210),
              B = n(12157),
              F = n(50233),
              K = p([J, B]);
            [J, B] = K.then ? (await K)() : K;
            async function b(y, Y) {
              const A = await (0, B.Wk)(y);
              if (A.errors)
                return { filename: y.name, success: !1, errors: A.errors };
              if ((0, B.Yc)(A)) {
                const { groups: le, stats: Z, achievements: N } = Y,
                  ae = (0, B.Rr)(A, le, Z, N),
                  fe = I(ae);
                return {
                  filename: y.name,
                  kind: "definitions",
                  success: !fe,
                  errors: ae.errors,
                  csvErrors: ae.fieldErrors,
                  definitions: fe ? void 0 : ae,
                };
              }
              if ((0, B.Lq)(A)) {
                const le = (0, B.EO)(A),
                  Z = I(le);
                return {
                  filename: y.name,
                  kind: "localization",
                  success: !Z,
                  errors: le.errors,
                  csvErrors: le.fieldErrors,
                  localization: Z ? void 0 : le,
                };
              }
              if ((0, B.JP)(A)) {
                const { groups: le, validLanguages: Z } = Y,
                  N = (0, B.OB)(A, le, Z),
                  ae = I(N);
                return {
                  filename: y.name,
                  kind: "grouplocalization",
                  success: !ae,
                  errors: N.errors,
                  csvErrors: N.fieldErrors,
                  groupLocalization: ae ? void 0 : N,
                };
              }
              return {
                filename: y.name,
                success: !1,
                errors: [
                  (0, j.we)("#AchievementEditor_Bulk_CsvHandlerNotFound"),
                ],
              };
            }
            const x = "_ACHIEVED",
              c = "_UNACHIEVED";
            async function l(y) {
              const A = (await (0, F.Tc)({ files: [y], forceSquare: !0 }))[0];
              if (!A.success)
                return {
                  filename: y.name,
                  kind: "image",
                  success: !1,
                  imageErrors: [A],
                };
              const { apiName: le, isAchieved: Z } = g(
                  A.image.filenameWithoutExtension,
                ),
                N = Z
                  ? {
                      image: await (0, F.I7)(A.image.image),
                      imageType: F.bi,
                      filenameWithoutExtension: "GENERATED",
                    }
                  : void 0;
              return {
                filename: y.name,
                kind: "image",
                success: !0,
                image: {
                  apiName: le,
                  isAchieved: Z,
                  result: A,
                  generatedUnachieved: N,
                },
              };
            }
            const ne = [
                { accept: ["text/csv"], process: b },
                { accept: ["image/png", "image/jpeg"], process: l },
              ],
              $ = Array.from(new Set(ne.flatMap((y) => y.accept))),
              M = ["definitions", "localization", "grouplocalization"],
              te = (0, V.createContext)(null);
            C();
          } catch (I) {
            C(I);
          }
        });
      },
      12157: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let l = function (h) {
                return h.reduce((m, r) => ((m[r.name] = r), m), {});
              },
              ne = function (h) {
                const { groups: m, stats: r, achievements: s } = h,
                  o = new Set(m.map((t) => t.groupid));
                return x.superRefine((t, d) => {
                  if (
                    (t.groupid &&
                      !o.has(t.groupid) &&
                      a(
                        "groupid",
                        (0, F.we)(
                          "#AchievementEditor_Validator_Error_GroupDoesNotExist",
                        ),
                      ),
                    t.progress_stat_name === void 0 ||
                      t.progress_stat_name == "")
                  )
                    return;
                  function a(X, ie) {
                    d.addIssue({
                      code: "custom",
                      path: [X],
                      input: t[X],
                      message: ie,
                    });
                  }
                  const f = r.find((X) => X.name == t.progress_stat_name);
                  if (f === void 0) {
                    a(
                      "progress_stat_name",
                      (0, F.we)(
                        "#AchievementEditor_Validator_Error_StatDoesNotExist",
                      ),
                    );
                    return;
                  }
                  t.permission != (f.permission ?? j.yu.Client) &&
                    a(
                      "permission",
                      (0, F.we)(
                        "#AchievementEditor_Validator_Error_AchievementStatDifferentPermissions",
                      ),
                    ),
                    f.type == "INT" &&
                      (V.Whr().safeParse(t.progress_stat_min).success ||
                        a(
                          "progress_stat_min",
                          (0, F.we)(
                            "#AchievementEditor_Validator_Error_MinMaxMustBeInteger",
                          ),
                        ),
                      V.Whr().safeParse(t.progress_stat_max).success ||
                        a(
                          "progress_stat_max",
                          (0, F.we)(
                            "#AchievementEditor_Validator_Error_MinMaxMustBeInteger",
                          ),
                        ));
                  {
                    const X =
                        f.type == "INT" ? V.ZSL.zH.int32 : V.ZSL.zH.float32,
                      ie = [
                        V.auy.number().default(X[0]).parse(f.min),
                        V.auy.number().default(X[1]).parse(f.max),
                      ],
                      ge = [
                        V.aig().parse(t.progress_stat_min),
                        V.aig().parse(t.progress_stat_max),
                      ];
                    ge[0] < ie[0] &&
                      a(
                        "progress_stat_min",
                        (0, F.we)(
                          "#AchievementEditor_Validator_Error_MinLessThanStatMin",
                        ),
                      ),
                      ge[1] > ie[1] &&
                        a(
                          "progress_stat_max",
                          (0, F.we)(
                            "#AchievementEditor_Validator_Error_MaxGreaterThanStatMax",
                          ),
                        ),
                      ge[0] >= ge[1] &&
                        a(
                          "progress_stat_max",
                          (0, F.we)(
                            "#AchievementEditor_Validator_Error_MinGreaterThanMax",
                          ),
                        );
                  }
                });
              },
              $ = function (h, m, r, s) {
                const o = h.reduce((t, d) => {
                  const a = String(d[r]);
                  return (t[a] = (t[a] ?? 0) + 1), t;
                }, {});
                h.forEach((t, d) => {
                  o[String(t[r])] > 1 &&
                    m.addIssue({
                      code: "custom",
                      path: [d, r],
                      input: t[r],
                      message: s,
                    });
                });
              },
              M = function (h) {
                const { stats: m, achievements: r } = h;
                return V.YOg(ne(h))
                  .superRefine((s, o) =>
                    $(
                      s,
                      o,
                      "api_name",
                      (0, F.we)(
                        "#AchievementEditor_AchievementCsvImport_Error_DuplicateApiName",
                      ),
                    ),
                  )
                  .transform((s) => {
                    const o = s.map((f) => f.api_name),
                      t = s.reduce((f, X) => ((f[X.api_name] = X), f), {}),
                      d = l(r);
                    let a = {
                      csv: t,
                      achievements: d,
                      added: o.filter((f) => !r.some((X) => X.name == f)),
                      deleted: r
                        .map((f) => f.name)
                        .filter((f) => !o.includes(f)),
                      modified: [],
                      unmodified: [],
                    };
                    return o
                      .filter(
                        (f) => !a.added.includes(f) && !a.deleted.includes(f),
                      )
                      .reduce(
                        (f, X) => (
                          k(t[X], d[X])
                            ? f.unmodified.push(X)
                            : f.modified.push(X),
                          f
                        ),
                        a,
                      );
                  });
              },
              G = function (h) {
                return {
                  api_name: h.name,
                  groupid: h.groupid ?? "",
                  permission: h.permission ?? j.yu.Client,
                  spoiler: h.display?.hidden == "1",
                  archived: h.archived == "1",
                  progress_stat_name: h.progress?.value?.operand1 ?? "",
                  progress_stat_min: parseFloat(h.progress?.min_val ?? "0"),
                  progress_stat_max: parseFloat(h.progress?.max_val ?? "0"),
                };
              },
              z = function (h, m) {
                if (!h) return {};
                const r = (0, I.II)(h, m),
                  { token: s, ...o } = r;
                return o;
              },
              v = function (h, m) {
                const { api_name: r, field: s, ...o } = m ?? {};
                return { token: h, ...o };
              },
              i = function (h) {
                return h.reduce((m, r) => ((m[r] = ""), m), {});
              },
              S = function (h, m) {
                const r = i(m);
                return [
                  {
                    api_name: h.name,
                    field: "name",
                    ...r,
                    ...z(h.display?.name, m),
                  },
                  {
                    api_name: h.name,
                    field: "description",
                    ...r,
                    ...z(h.display?.desc, m),
                  },
                ];
              },
              k = function (h, m) {
                return J()(h, G(m));
              },
              q = function () {
                return {
                  api_name: (0, F.we)("#AchievementEditor_Csv_Hint_ApiName"),
                  groupid: (0, F.we)("#AchievementEditor_Csv_Hint_GroupID"),
                  permission: (0, F.we)(
                    "#AchievementEditor_Csv_Hint_Permission",
                    j.l7.join(", "),
                  ),
                  spoiler: (0, F.we)("#AchievementEditor_Csv_Hint_Bool"),
                  archived: (0, F.we)("#AchievementEditor_Csv_Hint_Bool"),
                  progress_stat_name: (0, F.we)(
                    "#AchievementEditor_Csv_Hint_ProgressStatName",
                  ),
                  progress_stat_min: (0, F.we)(
                    "#AchievementEditor_Csv_Hint_ProgressStatMin",
                  ),
                  progress_stat_max: (0, F.we)(
                    "#AchievementEditor_Csv_Hint_ProgressStatMax",
                  ),
                };
              },
              H = function () {
                return {
                  api_name: (0, F.we)("#AchievementEditor_Csv_Hint_LocApiName"),
                  field: (0, F.we)("#AchievementEditor_Csv_Hint_LocField"),
                  groupid: (0, F.we)("#AchievementEditor_Csv_Hint_LocGroupID"),
                };
              },
              P = function (h, m, r) {
                const s = m.reduce(
                  (o, t) => ((o[t] = r[t] ? `${t} (${r[t]})` : t), o),
                  {},
                );
                return {
                  fields: m.map((o) => s[o]),
                  rows: h.map((o) =>
                    Object.keys(o).reduce(
                      (t, d) => ((t[s[d] ?? d] = o[d]), t),
                      {},
                    ),
                  ),
                };
              },
              oe = function (h) {
                return h.replace(/\s*\(.*$/, "").trim();
              },
              te = function () {
                return [
                  {
                    api_name: ee[0],
                    groupid: "",
                    permission: j.yu.Client,
                    spoiler: !1,
                    archived: !1,
                    progress_stat_name: "",
                    progress_stat_min: 0,
                    progress_stat_max: 0,
                  },
                  {
                    api_name: ee[1],
                    groupid: "",
                    permission: j.yu.Client,
                    spoiler: !0,
                    archived: !1,
                    progress_stat_name: "",
                    progress_stat_min: 0,
                    progress_stat_max: 0,
                  },
                ];
              },
              se = function (h) {
                const m = i(h),
                  r = [
                    {
                      name: "First Victory",
                      description: "Win your first match.",
                    },
                    {
                      name: "100 Wins",
                      description: "Win 100 different matches.",
                    },
                  ];
                return ee.map((s, o) => [
                  { api_name: s, field: "name", ...m, english: r[o].name },
                  {
                    api_name: s,
                    field: "description",
                    ...m,
                    english: r[o].description,
                  },
                ]);
              },
              D = function (h, m) {
                const r = `${h}-achievements-definitions.csv`,
                  s = (m.length > 0 ? m.map(G) : te()).map((d) => ({
                    ...d,
                    permission: j.yu[d.permission ?? j.yu.Client],
                  })),
                  { fields: o, rows: t } = P(s, Object.keys(x.shape), q());
                B.g.WriteCSVToFile(t, r, !0, o);
              },
              y = function (h, m, r) {
                const s = `${h}-achievements-localization.csv`,
                  o = (m.length > 0 ? m.map((a) => S(a, r)) : se(r)).reduce(
                    (a, f) => (a.push(...f), a),
                    [],
                  ),
                  { fields: t, rows: d } = P(
                    o,
                    [...Object.keys(c.shape), ...r],
                    H(),
                  );
                B.g.WriteCSVToFile(d, s, !0, t);
              },
              Y = function (h, m, r) {
                if (!m) return {};
                const s = m.find((a) => a.field == "name"),
                  o = m.find((a) => a.field == "description"),
                  t = (0, K.EV)(
                    r?.display?.name?.token,
                    r?.name,
                    "name",
                    h ?? r?.name,
                  ),
                  d = (0, K.EV)(
                    r?.display?.desc?.token,
                    r?.name,
                    "desc",
                    h ?? r?.name,
                  );
                return {
                  name: s ? v(t, s) : void 0,
                  desc: o ? v(d, o) : void 0,
                };
              },
              A = function (h, m, r) {
                return {
                  name: h.api_name,
                  groupid: h.groupid,
                  permission: h.permission,
                  archived: h.archived ? "1" : "0",
                  display: {
                    hidden: h.spoiler ? "1" : "0",
                    name: void 0,
                    desc: void 0,
                    icon: void 0,
                    icon_gray: void 0,
                    ...Y(h?.api_name, m, r),
                  },
                  progress: h.progress_stat_name
                    ? {
                        value: {
                          operation: "",
                          operand1: h.progress_stat_name,
                        },
                        min_val: h.progress_stat_min.toString(),
                        max_val: h.progress_stat_max.toString(),
                      }
                    : void 0,
                };
              },
              le = function (h, m, r) {
                const s = V.auy.number().safeParse(m.path[0])?.data,
                  o = s !== void 0 && h.data.length > s,
                  t = o ? h.data[s][r] : void 0,
                  d = m.path.length > 1 ? m.path[1] : r,
                  a = !o || !(d in h.data[s]) ? "" : h.data[s][d];
                return {
                  line: s === void 0 ? void 0 : s + 2,
                  key: t,
                  field: d,
                  input: a,
                  message: m.message,
                };
              },
              Z = function (h, m, r) {
                return {
                  errors: m
                    ?.filter((s) => s.path.length <= 1)
                    .map((s) => s.message),
                  fieldErrors: m
                    ?.filter((s) => s.path.length > 1)
                    .map((s) => le(h, s, r)),
                };
              },
              N = function (h) {
                const m = new Set(h.fields);
                return Object.keys(x.shape).every((r) => m.has(r));
              },
              ae = function (h, m, r, s) {
                const t = M({ groups: m, stats: r, achievements: s }).safeParse(
                  h.data,
                );
                return { ...t.data, ...Z(h, t.error?.issues, "api_name") };
              },
              fe = function (h) {
                const m = new Set(h.fields);
                return Object.keys(c.shape).every((r) => m.has(r));
              },
              re = function (h) {
                const r = V.YOg(g).safeParse(h.data);
                return {
                  localization:
                    r.data?.reduce(
                      (s, o) => (
                        o.api_name in s || (s[o.api_name] = []),
                        s[o.api_name].push(o),
                        s
                      ),
                      {},
                    ) ?? {},
                  ...Z(h, r.error?.issues, "api_name"),
                };
              },
              w = function (h) {
                return h.reduce((m, r) => ((m[r.groupid] = r), m), {});
              },
              L = function (h) {
                const m = h?.name;
                return typeof m == "string" ? { english: m } : (m ?? {});
              },
              O = function (h) {
                return Object.keys(h)
                  .filter((m) => m == "token" || !!h[m])
                  .reduce((m, r) => ((m[r] = h[r]), m), {});
              },
              Q = function (h, m) {
                return { groupid: h.groupid, ...i(m), ...z(h.name, m) };
              },
              U = function (h, m) {
                const { groupid: r, ...s } = h;
                return O({ ...L(m), ...s });
              },
              R = function (h, m) {
                return J()(U(h, m), O(L(m)));
              },
              E = function (h) {
                const { groups: m, validLanguages: r } = h,
                  s = new Set(m.map((o) => o.groupid));
                return u.superRefine((o, t) => {
                  function d(a, f) {
                    t.addIssue({
                      code: "custom",
                      path: [a],
                      input: o[a],
                      message: f,
                    });
                  }
                  o.groupid == K.z0
                    ? d(
                        "groupid",
                        (0, F.we)(
                          "#AchievementEditor_GroupCsvImport_Error_DefaultGroup",
                        ),
                      )
                    : s.has(o.groupid) ||
                      d(
                        "groupid",
                        (0, F.we)(
                          "#AchievementEditor_Validator_Error_GroupDoesNotExist",
                        ),
                      ),
                    Object.keys(o)
                      .filter((a) => a != "groupid" && !r.includes(a))
                      .forEach((a) =>
                        d(
                          a,
                          (0, F.we)(
                            "#AchievementEditor_GroupCsvImport_Error_UnknownLanguage",
                            a,
                          ),
                        ),
                      ),
                    o.english ||
                      d(
                        "english",
                        (0, F.we)(
                          "#AchievementEditor_GroupCsvImport_Error_NameRequired",
                        ),
                      );
                });
              },
              _ = function (h) {
                const { groups: m } = h;
                return V.YOg(E(h))
                  .superRefine((r, s) =>
                    $(
                      r,
                      s,
                      "groupid",
                      (0, F.we)(
                        "#AchievementEditor_GroupCsvImport_Error_DuplicateGroupID",
                      ),
                    ),
                  )
                  .transform((r) => {
                    const s = r.reduce((t, d) => ((t[d.groupid] = d), t), {}),
                      o = w(m);
                    return Object.keys(s).reduce(
                      (t, d) => (
                        R(s[d], o[d])
                          ? t.unmodified.push(d)
                          : t.modified.push(d),
                        t
                      ),
                      { csv: s, groups: o, modified: [], unmodified: [] },
                    );
                  });
              },
              ve = function (h) {
                const m = new Set(h.fields);
                return (
                  Object.keys(ue.shape).every((r) => m.has(r)) &&
                  !m.has("api_name")
                );
              },
              de = function (h, m, r) {
                const o = _({ groups: m, validLanguages: r }).safeParse(h.data);
                return { ...o.data, ...Z(h, o.error?.issues, "groupid") };
              },
              pe = function (h, m, r) {
                const s = `${h}-achievement-groups-localization.csv`,
                  o = m.map((a) => Q(a, r)),
                  { fields: t, rows: d } = P(
                    o,
                    [...Object.keys(ue.shape), ...r],
                    H(),
                  );
                B.g.WriteCSVToFile(d, s, !0, t);
              };
            n.d(he, {
              B6: () => v,
              CD: () => y,
              EO: () => re,
              JP: () => ve,
              K1: () => l,
              Lq: () => fe,
              NJ: () => U,
              OB: () => de,
              Rr: () => ae,
              Wk: () => T,
              Yc: () => N,
              f4: () => A,
              jF: () => pe,
              le: () => D,
              oK: () => G,
              pC: () => S,
            });
            var e = n(33551),
              J = n.n(e),
              V = n(30541),
              j = n(3959),
              B = n(22880),
              F = n(18210),
              K = n(82006),
              I = n(1421),
              b = p([V, j, K, I]);
            [V, j, K, I] = b.then ? (await b)() : b;
            const x = V.Ikc({
                api_name: V.YjP().min(1),
                groupid: V.YjP().optional(),
                permission: V.k5n(
                  Object.keys(j.yu).filter((h) => typeof h == "string"),
                ).transform((h) => j.yu[h]),
                spoiler: V.uEf(),
                archived: V.uEf(),
                progress_stat_name: V.YjP(),
                progress_stat_min: V.auy.number(),
                progress_stat_max: V.auy.number(),
              }),
              c = V.Ikc({
                api_name: V.YjP().min(1),
                field: V.euz(["name", "description"]),
              }),
              g = c.catchall(V.YjP());
            async function T(h) {
              const m = await B.g.ParseCSVFile(h, oe);
              return m.errors && m.errors.length > 0
                ? {
                    fields: void 0,
                    data: void 0,
                    errors: m.errors.map((r) => r.message),
                  }
                : { fields: m.meta.fields, data: m.data, errors: void 0 };
            }
            const W = "EXAMPLE_",
              ee = [`${W}FIRST_WIN`, `${W}HUNDRED_WINS`],
              ue = V.Ikc({ groupid: V.YjP().min(1) }),
              u = ue.catchall(V.YjP());
            C();
          } catch (x) {
            C(x);
          }
        });
      },
      65678: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let x = function (g) {
                const {
                    size: l = 64,
                    achievement: ne,
                    achieved: $ = !0,
                    showWarningOnEmpty: M = !0,
                    children: G,
                    className: z,
                  } = g,
                  { cdnRoot: v } = (0, B.L3)(),
                  i = $ ? ne?.display?.icon : ne?.display?.icon_gray,
                  S = b[l],
                  T = (0, F.A)(
                    S,
                    J.AchievementImageContainer,
                    !i && J.AchievementMissingImage,
                    z,
                  );
                return i
                  ? (0, e.jsxs)("div", {
                      className: T,
                      children: [(0, e.jsx)("img", { src: v + i }), G],
                    })
                  : (0, e.jsx)("div", {
                      className: T,
                      title: (0, K.we)(
                        "#AchievementEditor_AchievementImage_WarningMissingImage",
                      ),
                      children: (0, e.jsx)("div", {
                        children: M && (0, e.jsx)(j.Jru, {}),
                      }),
                    });
              },
              c = function (g) {
                const {
                    size: l = 64,
                    image: ne,
                    showNewIcon: $ = !1,
                    children: M,
                    className: G,
                  } = g,
                  z = b[l];
                return (0, e.jsxs)("div", {
                  className: (0, F.A)(z, J.AchievementImageContainer, G),
                  children: [
                    (0, e.jsx)("img", {
                      src: ne.image,
                      alt: ne.filenameWithoutExtension,
                    }),
                    $ && (0, e.jsx)(j.FEq, { className: J.NewIcon }),
                    M,
                  ],
                });
              };
            n.d(he, { O: () => c, T: () => x });
            var e = n(7850),
              J = n(70402),
              V = n.n(J),
              j = n(36118),
              B = n(3959),
              F = n(36707),
              K = n(18210),
              I = p([B]);
            B = (I.then ? (await I)() : I)[0];
            const b = {
              32: J.Size32,
              64: J.Size64,
              128: J.Size128,
              256: J.Size256,
            };
            C();
          } catch (b) {
            C(b);
          }
        });
      },
      71986: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let te = function (Z) {
                const {
                    achievements: N,
                    compact: ae = !1,
                    editable: fe = !0,
                    contentBefore: re,
                    headerContentBefore: ue,
                    setBulkMove: u,
                  } = Z,
                  w = (0, z.A)(
                    S.GroupAchievementList,
                    ae ? S.Compact : void 0,
                    re === void 0 ? void 0 : S.HasBeforeContent,
                  );
                return (0, e.jsxs)("div", {
                  className: w,
                  children: [
                    (0, e.jsxs)("div", {
                      className: S.Headers,
                      children: [
                        re !== void 0 &&
                          (0, e.jsx)("div", {
                            className: S.ContentBefore,
                            children: ue !== void 0 && ue(),
                          }),
                        (0, e.jsx)("div", {
                          children:
                            !ae &&
                            (0, e.jsx)(e.Fragment, {
                              children: (0, e.jsx)(J.$, {
                                size: "1",
                                onClick: u,
                                children: (0, e.jsxs)(V.s, {
                                  direction: "row",
                                  gap: "2",
                                  align: "center",
                                  children: [
                                    (0, e.jsx)(M.MG, {
                                      width: "1em",
                                      height: "1em",
                                      style: {
                                        verticalAlign: "middle",
                                        display: "inline-block",
                                        outline: "1px solid currentColor",
                                      },
                                    }),
                                    (0, v.we)(
                                      "#AchievementEditor_AchievementsTable_Header_BulkMove",
                                    ),
                                  ],
                                }),
                              }),
                            }),
                        }),
                        (0, e.jsx)("div", {
                          className: S.Name,
                          children: ae
                            ? (0, v.we)(
                                "#AchievementEditor_Achievement_Edit_DisplayName",
                              )
                            : (0, v.we)(
                                "#AchievementEditor_AchievementsTable_Header_NameDescription",
                              ),
                        }),
                        (0, e.jsx)("div", {
                          className: S.ApiName,
                          children: (0, v.we)(
                            "#AchievementEditor_AchievementsTable_Header_ApiName",
                          ),
                        }),
                        !ae &&
                          (0, e.jsx)("div", {
                            children: (0, v.we)(
                              "#AchievementEditor_AchievementsTable_Header_SetBy",
                            ),
                          }),
                        !ae &&
                          (0, e.jsx)("div", {
                            className: S.Availability,
                            children: (0, v.we)(
                              "#AchievementEditor_AchievementsTable_Header_Availability",
                            ),
                          }),
                        (0, e.jsx)("div", {}),
                      ],
                    }),
                    N.map((L) =>
                      (0, e.jsx)(
                        se,
                        {
                          achievement: L,
                          compact: ae,
                          editable: fe,
                          contentBefore: re,
                        },
                        `ach_${L.statID}_${L.bitID}`,
                      ),
                    ),
                  ],
                });
              },
              se = function (Z) {
                const {
                    achievement: N,
                    compact: ae,
                    editable: fe,
                    contentBefore: re,
                  } = Z,
                  ue = (0, H.YZ)(N.statID, N.bitID),
                  { appID: u } = (0, c.L3)(),
                  w = (0, c.$j)(u, N.groupid),
                  L = (0, H.fw)(N.groupid, w),
                  [O, Q] = g.useState(!1),
                  [U, R] = g.useState(!1),
                  E = (de) => {
                    Q(!1);
                  },
                  _ = () => {
                    Q(!1);
                  },
                  ve = ae ? 32 : 64;
                return (0, e.jsxs)("div", {
                  children: [
                    O
                      ? (0, e.jsx)(Y, {
                          achievement: N,
                          onSave: E,
                          onCancel: _,
                        })
                      : (0, e.jsxs)(e.Fragment, {
                          children: [
                            re !== void 0 &&
                              (0, e.jsxs)("div", {
                                className: S.ContentBefore,
                                children: [re(N), " "],
                              }),
                            (0, e.jsxs)("div", {
                              className: S.Images,
                              children: [
                                (0, e.jsx)(i.T, {
                                  achievement: N,
                                  achieved: !0,
                                  size: ve,
                                }),
                                !ae &&
                                  (0, e.jsx)(i.T, {
                                    achievement: N,
                                    achieved: !1,
                                    size: ve,
                                  }),
                              ],
                            }),
                            (0, e.jsxs)(V.s, {
                              direction: "column",
                              children: [
                                (0, e.jsx)(j.EY, {
                                  weight: "heavy",
                                  contrast: "title",
                                  children: (0, e.jsx)(k.VU, {
                                    text: N.display?.name,
                                  }),
                                }),
                                !ae &&
                                  (0, e.jsx)(j.EY, {
                                    children: (0, e.jsx)(k.VU, {
                                      text: N.display?.desc,
                                    }),
                                  }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: S.ApiName,
                              children: [
                                (0, e.jsx)("div", { children: N.name }),
                                !ae &&
                                  (0, e.jsx)("div", {
                                    children: N.progress
                                      ? `${N.progress.value.operand1} ${N.progress.min_val} - ${N.progress.max_val}`
                                      : "",
                                  }),
                              ],
                            }),
                            !ae &&
                              (0, e.jsx)("div", {
                                className: S.Permission,
                                children: c.yu[N.permission ?? 0],
                              }),
                            !ae &&
                              (0, e.jsxs)("div", {
                                className: S.Availability,
                                children: [
                                  N.display?.hidden == "1" &&
                                    (0, e.jsx)("div", {
                                      children: (0, v.we)(
                                        "#AchievementEditor_Achievement_Edit_Spoiler",
                                      ),
                                    }),
                                  N.archived == "1" &&
                                    (0, e.jsx)("div", {
                                      children: (0, v.we)(
                                        "#AchievementEditor_Achievement_Edit_Archived",
                                      ),
                                    }),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: S.EditButtons,
                              children: [
                                !ae &&
                                  fe &&
                                  (0, e.jsxs)("div", {
                                    children: [
                                      (0, e.jsx)(H.lg, {
                                        onClick: () => {
                                          Q(!0);
                                        },
                                      }),
                                      (0, e.jsx)(H.et, {
                                        onClick: () => {
                                          R(!0);
                                        },
                                      }),
                                    ],
                                  }),
                                (0, e.jsxs)("div", {
                                  className: S.IDText,
                                  children: [
                                    !!ue &&
                                      (0, e.jsx)(e.Fragment, {
                                        children: (0, e.jsxs)(G.he, {
                                          toolTipContent:
                                            "Global achievement rate",
                                          style: {
                                            verticalAlign: "middle",
                                            whiteSpace: "nowrap",
                                          },
                                          children: [
                                            (0, e.jsx)(H.BA, {
                                              className: S.GlobalRateIcon,
                                            }),
                                            (0, H.Z7)(ue.global_unlock_percent),
                                          ],
                                        }),
                                      }),
                                    (0, e.jsx)(G.he, {
                                      toolTipContent: (0, e.jsx)(B.az, {
                                        background: "dull-5",
                                        padding: "2",
                                        children: (0, e.jsx)(W.or, { ...L }),
                                      }),
                                      direction: "bottom",
                                      style: {
                                        verticalAlign: "middle",
                                        whiteSpace: "nowrap",
                                      },
                                      children: (0, e.jsx)(W.C6, {
                                        hidden: !L?.visible,
                                        className: S.GroupVisibility,
                                        omitText: !0,
                                      }),
                                    }),
                                    (0, v.we)(
                                      "#AchievementEditor_AchievementsTable_Header_ID",
                                    ),
                                    ": ",
                                    N.statID,
                                    ".",
                                    N.bitID,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    U &&
                      (0, e.jsx)(D, {
                        achievement: N,
                        hideModal: () => {
                          R(!1);
                        },
                      }),
                  ],
                });
              },
              D = function (Z) {
                const { achievement: N, hideModal: ae } = Z,
                  { appID: fe } = (0, c.L3)(),
                  re = (0, H.YZ)(N.statID, N.bitID),
                  ue = re && re.global_unlock_percent > 0,
                  u = (0, c.Bx)(fe, N.statID, N.bitID),
                  w = async () => {
                    await u.mutateAsync(), ae();
                  };
                return (0, e.jsx)(ne.EN, {
                  active: !0,
                  children: (0, e.jsx)(ne.x_, {
                    onEscKeypress: ae,
                    children: (0, e.jsxs)(l.U9, {
                      className: S.AchievementDeleteDialog,
                      children: [
                        (0, e.jsx)(l.Y9, {
                          children: (0, v.we)(
                            "#AchievementEditor_Achievement_Delete_Dialog_Title",
                          ),
                        }),
                        (0, e.jsxs)(l.nB, {
                          children: [
                            ue &&
                              (0, e.jsxs)(V.s, {
                                direction: "row",
                                gap: "1",
                                align: "center",
                                style: { color: "var(--color-error)" },
                                children: [
                                  (0, e.jsx)(H.id, {}),
                                  (0, v.we)(
                                    "#AchievementEditor_Achievement_Delete_Warn_LiveAchievement",
                                  ),
                                ],
                              }),
                            (0, e.jsxs)("div", {
                              className: S.AchievementBox,
                              children: [
                                (0, e.jsx)("div", {
                                  children: (0, e.jsx)(i.T, {
                                    achievement: N,
                                    achieved: !0,
                                  }),
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_ApiName",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", { children: N.name }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_DisplayName",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", {
                                          children:
                                            (0, k.ZM)(
                                              N.display?.name,
                                              "english",
                                            ) ??
                                            (0, k.ZM)(N.display?.name, "token"),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_Description",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", {
                                          children:
                                            (0, k.ZM)(
                                              N.display?.desc,
                                              "english",
                                            ) ??
                                            (0, k.ZM)(N.display?.desc, "token"),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(l.wi, {
                          children: (0, e.jsx)(H.Aj, {
                            saveText: (0, v.we)(
                              "#AchievementEditor_Achievement_Delete_Dialog_Delete",
                            ),
                            saveColor: "red",
                            onCancel: ae,
                            onSave: w,
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
              y = function (Z) {
                return (0, e.jsx)(A, { bNewAchievement: !0, ...Z });
              },
              Y = function (Z) {
                return (0, e.jsx)(A, { bNewAchievement: !1, ...Z });
              },
              A = function (Z) {
                const {
                    onSave: N,
                    onCancel: ae,
                    bNewAchievement: fe,
                    achievement: re,
                    groupid: ue,
                  } = Z,
                  { appID: u, cdnRoot: w } = (0, c.L3)(),
                  L = (0, c.J3)(u),
                  O = (0, c.Q4)(u),
                  Q = (0, H.YZ)(re?.statID, re?.bitID),
                  U = (0, c.ts)(u),
                  {
                    value: R,
                    setValue: E,
                    isValid: _,
                    issues: ve,
                  } = (0, oe.$q)(re?.name, (0, oe.Cm)(x.YjP().nonempty()), !0),
                  [de, pe] = g.useState(re?.permission ?? c.yu.Client),
                  [h, m] = g.useState(re?.display?.hidden == "1"),
                  [r, s] = g.useState(re?.archived == "1"),
                  [o, t] = g.useState(re?.groupid ?? ue),
                  [d, a] = g.useState(
                    re?.display?.name ?? { token: `${R}_NAME` },
                  ),
                  [f, X] = g.useState(
                    re?.display?.desc ?? { token: `${R}_DESC` },
                  ),
                  ie = O?.[re?.groupid ?? ue],
                  ge = (0, H.fw)(o, ie),
                  me = (0, H.fw)(o, O?.[o]),
                  [Se, Ge] = g.useState(re?.progress ?? void 0),
                  He = Se
                    ? L.find((Fe) => Fe.name == Se.value.operand1)
                    : void 0,
                  we = (0, q.E)(He),
                  Ve =
                    !Se ||
                    we.validator(
                      x
                        .Ikc({
                          min_val: x.auy.number(),
                          max_val: x.auy.number(),
                        })
                        .safeParse(Se).data,
                    ).success,
                  xe = _ && Ve,
                  [ye, Ne] = g.useState(
                    re?.display?.icon
                      ? {
                          image: w + re?.display?.icon,
                          imageType: P.bi,
                          filenameWithoutExtension: re?.display?.icon,
                        }
                      : void 0,
                  ),
                  [Ye, Je] = g.useState(
                    re?.display?.icon_gray
                      ? {
                          image: w + re?.display?.icon_gray,
                          imageType: P.bi,
                          filenameWithoutExtension: re?.display?.icon_gray,
                        }
                      : void 0,
                  ),
                  $e = async (Fe) => {
                    if ((Ne(Fe), !Ye)) {
                      const Qe = await (0, P.I7)(Fe.image);
                      Je({
                        image: Qe,
                        imageType: P.bi,
                        filenameWithoutExtension: "",
                      });
                    }
                  },
                  be = async () => {
                    const Fe = await (0, P.I7)(ye.image);
                    Je({
                      image: Fe,
                      imageType: P.bi,
                      filenameWithoutExtension: "",
                    });
                  },
                  Xe = (Fe) => {
                    if (Fe && Fe.value.operand1) {
                      Ge(Fe);
                      const Qe = L.find((ze) => ze.name == Fe.value.operand1);
                      Qe && pe(Qe.permission);
                    } else Ge(void 0), pe(re?.permission ?? c.yu.Client);
                  },
                  ke = (0, c.q4)(
                    u,
                    fe ? null : re.statID,
                    fe ? null : re.bitID,
                  ),
                  qe = async () => {
                    const Fe = (0, H.EV)(
                        re?.display?.name?.token,
                        re?.name,
                        "name",
                        R,
                      ),
                      Qe = (0, H.EV)(
                        re?.display?.desc?.token,
                        re?.name,
                        "desc",
                        R,
                      ),
                      ze = (0, k.II)(re?.display?.name, U),
                      Ae = (0, k.II)(re?.display?.desc, U),
                      Ce = (0, k.II)(d, U),
                      Ie = (0, k.II)(f, U);
                    let je = {
                      ...re,
                      name: R,
                      groupid: o,
                      permission: de,
                      archived: r ? "1" : "0",
                      display: {
                        ...re?.display,
                        name: { ...ze, ...Ce, token: Fe },
                        desc: { ...Ae, ...Ie, token: Qe },
                        hidden: h ? "1" : "0",
                      },
                      progress: Se,
                    };
                    await ke
                      .mutateAsync({
                        achievement: je,
                        icon: ye?.image,
                        icon_gray: Ye?.image,
                      })
                      .then(({ statid: Te, bitid: Le }) => {
                        N && N(je);
                      })
                      .catch((Te) => {});
                  };
                let Ze;
                return (
                  fe && me.visible && me.hasprogress
                    ? (Ze = (0, e.jsx)(H.lh, {
                        text: (0, v.we)(
                          "#AchievementEditor_Group_CreateAchievement_WarnLiveGroup",
                        ),
                      }))
                    : ge.visible &&
                        !me.visible &&
                        (Q?.global_unlock_percent ?? 0) > 0
                      ? (Ze = (0, e.jsx)(H.lh, {
                          text: (0, v.we)(
                            "#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement",
                          ),
                        }))
                      : re?.groupid != ue &&
                        me.visible &&
                        me.hasprogress &&
                        (Ze = (0, e.jsx)(H.lh, {
                          text: (0, v.we)(
                            "#AchievementEditor_Achievement_Edit_Group_Warn_BreakCompletion",
                          ),
                        })),
                  (0, e.jsx)("div", {
                    className: S.AchievementEditDialog,
                    children: (0, e.jsxs)("form", {
                      children: [
                        (0, e.jsx)("div", {
                          className: S.EditTitle,
                          children: (0, e.jsx)("h1", {
                            children: fe
                              ? (0, v.we)(
                                  "#AchievementEditor_Achievement_Edit_Title_New",
                                )
                              : (0, v.we)(
                                  "#AchievementEditor_Achievement_Edit_Title_Edit",
                                ),
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: S.EditContent,
                          children: [
                            (0, e.jsx)("div", {
                              style: { paddingRight: "10px" },
                              children: (0, e.jsx)("div", {
                                children: (0, e.jsxs)(F.x, {
                                  columns: "repeat(2, max-content)",
                                  gapX: "3",
                                  margin: "0",
                                  padding: "0",
                                  paddingTop: "2",
                                  children: [
                                    (0, e.jsxs)(V.s, {
                                      direction: "column",
                                      gap: "1",
                                      wrap: "wrap",
                                      width: "min-content",
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, e.jsx)(j.EY, {
                                            size: "2",
                                            children: (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_Icons_Achieved",
                                            ),
                                          }),
                                        }),
                                        (0, e.jsx)(le, {
                                          icon: ye,
                                          setIcon: $e,
                                          achievement: re,
                                        }),
                                      ],
                                    }),
                                    (0, e.jsxs)(V.s, {
                                      direction: "column",
                                      gap: "1",
                                      wrap: "wrap",
                                      width: "min-content",
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, e.jsx)(j.EY, {
                                            size: "2",
                                            children: (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_Icons_Unachieved",
                                            ),
                                          }),
                                        }),
                                        (0, e.jsx)(le, {
                                          icon: Ye,
                                          setIcon: Je,
                                          achievement: re,
                                        }),
                                        !!ye &&
                                          (0, e.jsx)(J.$, {
                                            color: "dull",
                                            onClick: be,
                                            children: (0, v.we)(
                                              "#AchievementEditor_Achievement_Edit_Icons_Button_Generate",
                                            ),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsx)(oe.WL, {
                                  label: (0, v.we)(
                                    "#AchievementEditor_Achievement_Edit_ApiName",
                                  ),
                                  placeholder: (0, v.we)(
                                    "#AchievementEditor_Achievement_Edit_ApiName_Placeholder",
                                  ),
                                  value: R,
                                  isValid: _,
                                  setValue: E,
                                  issues: ve,
                                  autoFocus: re?.name === void 0,
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("h2", {
                                      children: [
                                        (0, v.we)(
                                          "#AchievementEditor_Achievement_Edit_SetBy",
                                        ),
                                        !!Se &&
                                          (0, e.jsxs)(j.EY, {
                                            contrast: "description",
                                            children: [
                                              (0, e.jsx)("div", {
                                                className: S.InlineSVG,
                                                children: (0, e.jsx)($.c_I, {}),
                                              }),
                                              (0, v.we)(
                                                "#AchievementEditor_Achievement_Edit_SetByProgressStat",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                    Se
                                      ? (0, e.jsx)(b.j, {
                                          disabled: !0,
                                          children: c.yu[de ?? c.yu.Client],
                                        })
                                      : (0, e.jsx)(K.l6, {
                                          options: Object.values(c.yu).filter(
                                            (Fe) => typeof Fe == "number",
                                          ),
                                          getOptionLabel: (Fe) => c.yu[Fe],
                                          selectedValue: de,
                                          onSelectionChange: (Fe) => {
                                            pe(Fe ?? c.yu.Client);
                                          },
                                        }),
                                  ],
                                }),
                                (0, e.jsx)(q.O, {
                                  appID: u,
                                  progress: Se,
                                  setProgress: Xe,
                                  ...we,
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: S.LocHeader,
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, v.we)(
                                            "#AchievementEditor_Achievement_Edit_DisplayName",
                                          ),
                                        }),
                                        (0, e.jsx)(k.Mq, { locstring: d }),
                                      ],
                                    }),
                                    (0, e.jsx)(k.Pk, { value: d, setValue: a }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: S.LocHeader,
                                      children: [
                                        (0, e.jsx)("h2", {
                                          children: (0, v.we)(
                                            "#AchievementEditor_Achievement_Edit_Description",
                                          ),
                                        }),
                                        (0, e.jsx)(k.Mq, { locstring: f }),
                                      ],
                                    }),
                                    (0, e.jsx)(k.Pk, {
                                      multiline: !0,
                                      value: f,
                                      setValue: X,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsx)("h2", {
                                      children: (0, v.we)(
                                        "#AchievementEditor_Achievement_Edit_Group",
                                      ),
                                    }),
                                    Ze,
                                    (0, e.jsx)(H.yo, {
                                      selectedValue: o ?? H.z0,
                                      onSelectionChange: t,
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsx)("h2", {
                                      children: (0, v.we)(
                                        "#AchievementEditor_Achievement_Edit_Status",
                                      ),
                                    }),
                                    (0, e.jsxs)(V.s, {
                                      direction: "column",
                                      gap: "1",
                                      justify: "between",
                                      children: [
                                        (0, e.jsx)(G.he, {
                                          toolTipContent: (0, v.we)(
                                            "#AchievementEditor_Achievement_Edit_Spoiler_Tooltip",
                                          ),
                                          style: {
                                            verticalAlign: "middle",
                                            maxWidth: "300px",
                                            whiteSpace: "normal",
                                          },
                                          children: (0, e.jsx)(V.s, {
                                            direction: "column",
                                            flexGrow: "1",
                                            padding: "1",
                                            align: "start",
                                            className: S.Cursor,
                                            children: (0, e.jsx)(I.S, {
                                              checked: h,
                                              onChange: m,
                                              align: "start",
                                              children: (0, e.jsxs)(V.s, {
                                                direction: "column",
                                                children: [
                                                  (0, e.jsx)(j.EY, {
                                                    weight: "heavy",
                                                    children: (0, v.we)(
                                                      "#AchievementEditor_Achievement_Edit_Spoiler",
                                                    ),
                                                  }),
                                                  (0, e.jsx)(j.EY, {
                                                    children: (0, v.we)(
                                                      "#AchievementEditor_Achievement_Edit_SpoilerDesc",
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                        (0, e.jsx)(G.he, {
                                          toolTipContent: (0, v.we)(
                                            "#AchievementEditor_Achievement_Edit_Archived_Tooltip",
                                          ),
                                          style: {
                                            verticalAlign: "middle",
                                            maxWidth: "300px",
                                            whiteSpace: "normal",
                                          },
                                          children: (0, e.jsx)(V.s, {
                                            direction: "column",
                                            flexGrow: "1",
                                            padding: "1",
                                            align: "start",
                                            className: S.Cursor,
                                            children: (0, e.jsx)(I.S, {
                                              checked: r,
                                              onChange: s,
                                              align: "start",
                                              children: (0, e.jsxs)(V.s, {
                                                direction: "column",
                                                children: [
                                                  (0, e.jsx)(j.EY, {
                                                    weight: "heavy",
                                                    children: (0, v.we)(
                                                      "#AchievementEditor_Achievement_Edit_Archived",
                                                    ),
                                                  }),
                                                  (0, e.jsx)(j.EY, {
                                                    children: (0, v.we)(
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
                        (0, e.jsx)(H.Aj, {
                          saveDisabled: !xe,
                          onSave: qe,
                          onCancel: ae,
                        }),
                      ],
                    }),
                  })
                );
              },
              le = function (Z) {
                const { icon: N, setIcon: ae, achievement: fe } = Z,
                  re = (0, g.useRef)(null);
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(P._Q, {
                      className: S.AchievementUploadBox,
                      onUpload: ae,
                      fileInputRef: re,
                      children: N
                        ? (0, e.jsx)(i.O, { image: N, size: 128 })
                        : (0, e.jsx)(i.T, {
                            achievement: fe,
                            achieved: !0,
                            size: 128,
                            showWarningOnEmpty: !1,
                          }),
                    }),
                    (0, e.jsx)(j.EY, {
                      color: "accent-7",
                      children: (0, v.we)(
                        "#AchievementEditor_Achievement_Edit_Icons_DragHelp",
                      ),
                    }),
                    (0, e.jsx)(J.$, {
                      color: "dull",
                      onClick: () => re.current.click(),
                      children: (0, v.we)(
                        "#AchievementEditor_Achievement_Edit_Icons_Button_SelectFile",
                      ),
                    }),
                  ],
                });
              };
            n.d(he, { i: () => y, p: () => te });
            var e = n(7850),
              J = n(79611),
              V = n(68031),
              j = n(15252),
              B = n(60351),
              F = n(95994),
              K = n(58952),
              I = n(94381),
              b = n(86946),
              x = n(30541),
              c = n(3959),
              g = n(90626),
              l = n(58534),
              ne = n(2801),
              $ = n(36118),
              M = n(20525),
              G = n(71421),
              z = n(36707),
              v = n(18210),
              i = n(65678),
              S = n(15008),
              T = n.n(S),
              k = n(1421),
              q = n(79619),
              H = n(82006),
              P = n(50233),
              oe = n(30263),
              W = n(71693),
              ee = p([x, c, i, k, q, H, W]);
            ([x, c, i, k, q, H, W] = ee.then ? (await ee)() : ee), C();
          } catch (te) {
            C(te);
          }
        });
      },
      27852: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let H = function (ee) {
                const { appId: te } = ee,
                  se = (0, g.Tc)("icon_cdn_root", "application_config"),
                  [D, y] = (0, K.useState)("english"),
                  [Y, A] = (0, K.useState)(""),
                  [le, Z] = (0, K.useState)(!1),
                  [N, ae] = (0, K.useState)(!1),
                  fe = (0, T.On)(te),
                  re = (0, F.vd)(te),
                  ue = {
                    appID: te,
                    cdnRoot: se,
                    localization: { currentLanguage: D, setCurrentLanguage: y },
                    filter: Y,
                    existingAchievements: fe.data,
                  },
                  [u, w] = (0, K.useState)(!1),
                  [L, O] = (0, K.useState)(),
                  [Q, U] = (0, K.useState)(!1),
                  [R, E] = (0, K.useState)("main"),
                  _ = {
                    main: {
                      label: "Manage Achievements",
                      render: () =>
                        (0, e.jsx)(z._e, {
                          reordering: le,
                          setReordering: Z,
                          creatingNewGroup: N,
                          setCreatingNewGroup: ae,
                        }),
                    },
                    bulk: {
                      label: "Bulk Import/Export",
                      render: () =>
                        (0, e.jsx)(ne.V, {
                          onClose: () => E("main"),
                          setHasChanges: U,
                        }),
                    },
                  },
                  ve = (de) => {
                    R == "bulk" && Q ? (O(de), w(!0)) : E(de);
                  };
                return (0, e.jsxs)(F.aR, {
                  value: ue,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, x.A)(
                        $.EditorContainer,
                        "noOpinionatedGlobalStyles",
                      ),
                      children: [
                        (0, e.jsx)(W, {}),
                        (0, e.jsx)(P, {
                          options: Object.keys(_),
                          getOptionLabel: (de) => _[de].label,
                          selectedOption: R,
                          onChange: ve,
                        }),
                        R == "main" &&
                          (0, e.jsx)(oe, {
                            filter: Y,
                            setFilter: A,
                            showFilter: R == "main",
                            reordering: le,
                            setReordering: Z,
                            showReorder: R == "main",
                            creatingNewGroup: N,
                            setCreatingNewGroup: ae,
                            showCreateNewGroup: R == "main",
                          }),
                        _[R].render(),
                      ],
                    }),
                    u &&
                      (0, e.jsx)(i.TM, {
                        onCancel: () => w(!1),
                        onOk: () => {
                          w(!1), U(!1), E(L), O(void 0);
                        },
                        okText: "Confirm",
                        children: (0, c.we)(
                          "#AchievementEditor_TabBar_BulkUnsavedConfirm",
                        ),
                      }),
                  ],
                });
              },
              P = function (ee) {
                const {
                  options: te,
                  getOptionLabel: se,
                  selectedOption: D,
                  onChange: y,
                } = ee;
                return (0, e.jsx)("div", {
                  className: $.TabBar,
                  children: te.map((Y) =>
                    Y == D
                      ? (0, e.jsx)(
                          "div",
                          { className: $.Selected, children: se ? se(Y) : Y },
                          Y,
                        )
                      : (0, e.jsx)(
                          "div",
                          { onClick: () => y(Y), children: se ? se(Y) : Y },
                          Y,
                        ),
                  ),
                });
              },
              oe = function (ee) {
                const {
                    filter: te,
                    setFilter: se,
                    showFilter: D,
                    reordering: y,
                    setReordering: Y,
                    showReorder: A,
                    creatingNewGroup: le,
                    setCreatingNewGroup: Z,
                    showCreateNewGroup: N,
                  } = ee,
                  ae = (0, v.DG)(),
                  fe = Object.values(ae).every((u) => u.set == u.total),
                  [re, ue] = (0, K.useState)(!1);
                return (0, e.jsxs)("div", {
                  className: $.Toolbar,
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        D &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)("h3", {
                              children: (0, c.we)(
                                "#AchievementEditor_Toolbar_Filter_Title",
                              ),
                            }),
                          }),
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)("h3", {
                            children: (0, e.jsxs)(J.s, {
                              direction: "row",
                              gap: "1",
                              align: "center",
                              children: [
                                (0, c.we)("#LanguageTitle"),
                                !fe &&
                                  (0, e.jsx)(k.he, {
                                    toolTipContent: (0, c.we)(
                                      "#AchievementEditor_Toolbar_Localization_WarnIncomplete",
                                    ),
                                    style: { height: "1.2em" },
                                    children: (0, e.jsx)(i.id, {
                                      color: "var(--color-warning)",
                                    }),
                                  }),
                                (0, e.jsx)(k.he, {
                                  toolTipContent: (0, c.we)(
                                    "#AchievementEditor_Toolbar_Localization_Edit",
                                  ),
                                  style: { height: "1.2em" },
                                  children: (0, e.jsx)(i.lg, {
                                    onClick: () => ue(!0),
                                    className: $.LanguageEditButton,
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
                        D &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)(V.k, {
                              variant: "inset",
                              placeholder: (0, c.we)(
                                "#AchievementEditor_Toolbar_Filter_Placeholder",
                              ),
                              value: te,
                              onTextChange: se,
                              clearable: !0,
                            }),
                          }),
                        (0, e.jsx)("div", { children: (0, e.jsx)(v.Mq, {}) }),
                        (0, e.jsxs)(J.s, {
                          direction: "row",
                          gap: "3",
                          justify: "end",
                          children: [
                            N &&
                              !le &&
                              (0, e.jsx)(k.he, {
                                toolTipContent: (0, c.we)(
                                  "#AchievementEditor_Button_CreateNewGroup_Tooltip",
                                ),
                                style: {
                                  verticalAlign: "middle",
                                  maxWidth: "300px",
                                  whiteSpace: "normal",
                                },
                                children: (0, e.jsxs)(j.$, {
                                  variant: "vibrant",
                                  disabled: y,
                                  onClick: () => Z(!0),
                                  children: [
                                    (0, e.jsx)(G.OMN, {
                                      width: "14",
                                      height: "14",
                                      fill: "currentColor",
                                      className: $.ButtonIcon,
                                    }),
                                    " ",
                                    (0, c.we)(
                                      "#AchievementEditor_Button_CreateNewGroup",
                                    ),
                                  ],
                                }),
                              }),
                            A &&
                              !y &&
                              (0, e.jsx)(k.he, {
                                toolTipContent: (0, c.we)(
                                  "#AchievementEditor_Reorder_Description",
                                ),
                                style: {
                                  verticalAlign: "middle",
                                  maxWidth: "300px",
                                  whiteSpace: "normal",
                                },
                                children: (0, e.jsx)(i.mc, {
                                  onClick: () => Y(!0),
                                  title: (0, c.we)(
                                    "#AchievementEditor_ReorderGroups",
                                  ),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    re && (0, e.jsx)(v.Jt, { onClose: () => ue(!1) }),
                  ],
                });
              },
              W = function (ee) {
                const { appID: te } = (0, F.L3)(),
                  se = S.iA.steamid,
                  D = `${l.TS.COMMUNITY_BASE_URL}profiles/${se}/achievements/${te}`;
                return (0, e.jsxs)("div", {
                  className: $.HeaderContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: b().AdminHeader,
                      children: (0, e.jsxs)("div", {
                        className: b().PageTitleFlexCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: b().PageTitle,
                            children: (0, c.we)("#AchievementEditor_title"),
                          }),
                          (0, e.jsx)(B.Y, {
                            href: `${l.TS.PARTNER_BASE_URL}doc/features/achievements`,
                            children: (0, c.we)(
                              "#AssetRequest_General_SeeDocs",
                            ),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: $.Instructions,
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, c.we)(
                                  "#AchievementEditor_Description_Title_Overview",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, c.we)(
                                "#AchievementEditor_Description_Overview",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, c.we)(
                                  "#AchievementEditor_Description_Title_Requirements",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: $.Important,
                              children: (0, c.oW)(
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
                                (0, c.we)(
                                  "#AchievementEditor_Description_Title_Design",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, c.we)(
                                "#AchievementEditor_Description_Design",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, c.we)(
                                  "#AchievementEditor_Header_GroupList",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, c.we)(
                                "#AchievementEditor_Description_GroupList",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, c.we)(
                                  "#AchievementEditor_Description_Title_Testing",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, c.oW)(
                                "#AchievementEditor_Description_Testing",
                                (0, e.jsx)("a", { href: D }),
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, c.we)(
                                  "#AchievementEditor_Description_Title_Releasing",
                                ),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("div", {
                              children: (0, c.oW)(
                                "#AchievementEditor_Description_Releasing",
                                (0, e.jsx)("a", {
                                  href: `${l.TS.PARTNER_BASE_URL}admin/game/editbyappid/${te}?activetab=tab_basic#feature_section`,
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
            n.r(he), n.d(he, { default: () => H });
            var e = n(7850),
              J = n(68031),
              V = n(7125),
              j = n(79611),
              B = n(86336),
              F = n(3959),
              K = n(90626),
              I = n(45737),
              b = n.n(I),
              x = n(36707),
              c = n(18210),
              g = n(3166),
              l = n(98609),
              ne = n(45037),
              $ = n(5088),
              M = n.n($),
              G = n(249),
              z = n(71693),
              v = n(1421),
              i = n(82006),
              S = n(72609),
              T = n(13623),
              k = n(71421),
              q = p([F, ne, z, v, i]);
            ([F, ne, z, v, i] = q.then ? (await q)() : q), C();
          } catch (H) {
            C(H);
          }
        });
      },
      71693: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let H = function (O, Q, U) {
                if (!Q) return { included: O, excluded: [] };
                const R = Q.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&"),
                  E = new RegExp(`.*${R ?? ""}.*`, "i"),
                  _ = (ve) => {
                    const de = (0, T.ZM)(ve.display?.name, U ?? "english"),
                      pe = (0, T.ZM)(ve.display?.desc, U ?? "english");
                    return (
                      !R ||
                      R === "" ||
                      !!ve.name.match(E) ||
                      !!de?.match(E) ||
                      !!pe?.match(E)
                    );
                  };
                return (O ?? []).reduce(
                  (ve, de) => (
                    _(de) ? ve.included.push(de) : ve.excluded.push(de), ve
                  ),
                  { included: [], excluded: [] },
                );
              },
              P = function (O) {
                const {
                    reordering: Q,
                    setReordering: U,
                    creatingNewGroup: R,
                    setCreatingNewGroup: E,
                  } = O,
                  { appID: _ } = (0, x.L3)(),
                  ve = (0, x.kb)(_),
                  de = (0, x.FM)(_);
                return Q
                  ? (0, e.jsx)("div", {
                      children: (0, e.jsxs)("div", {
                        className: i.GroupList,
                        children: [
                          (0, e.jsx)("div", {
                            className: i.GroupReorderDescription,
                            children: (0, G.we)(
                              "#AchievementEditor_Reorder_Description",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: i.SortDefaultGroup,
                            children: [
                              (0, e.jsx)(ee, { groupid: null, group: null }),
                              (0, e.jsx)("div", {
                                className: i.OverlayContent,
                                children: (0, e.jsx)("h2", {
                                  children: (0, G.we)(
                                    "#AchievementEditor_Reorder_NotDefault",
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, e.jsx)(oe, {
                            groups: de,
                            onSave: () => U(!1),
                            onCancel: () => U(!1),
                          }),
                        ],
                      }),
                    })
                  : (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsxs)("div", {
                          className: i.GroupList,
                          children: [
                            !!ve &&
                              (0, e.jsx)(W, { groupid: null, group: null }),
                            !!de &&
                              de.map((pe) =>
                                (0, e.jsx)(
                                  W,
                                  { groupid: pe.groupid, group: pe },
                                  pe.groupid,
                                ),
                              ),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          children: R
                            ? (0, e.jsx)(
                                W,
                                {
                                  groupid: "",
                                  group: null,
                                  bNewGroup: !0,
                                  onSave: () => E(!1),
                                  onCancel: () => E(!1),
                                },
                                "kg_newgroup",
                              )
                            : !Q &&
                              (0, e.jsxs)(V.$, {
                                variant: "vibrant",
                                onClick: () => E(!0),
                                children: [
                                  (0, e.jsx)(l.OMN, {
                                    width: "14",
                                    height: "14",
                                    fill: "currentColor",
                                    className: i.Icon,
                                  }),
                                  " ",
                                  (0, G.we)(
                                    "#AchievementEditor_Button_CreateNewGroup",
                                  ),
                                ],
                              }),
                        }),
                      ],
                    });
              },
              oe = function (O) {
                const { groups: Q, onSave: U, onCancel: R } = O,
                  { appID: E } = (0, x.L3)(),
                  [_, ve] = c.useState(Q),
                  de = (0, x.iF)(E),
                  pe = async () => {
                    await de.mutateAsync(_.map((m) => m.groupid)), U();
                  },
                  h = function (m) {
                    if (!m.destination) return;
                    let r = [..._];
                    const [s] = r.splice(m.source.index, 1);
                    r.splice(m.destination.index, 0, s), ve(r);
                  };
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(J.JY, {
                      onDragEnd: h,
                      children: (0, e.jsx)(J.gL, {
                        droppableId: "droppable",
                        isDropDisabled: !1,
                        isCombineEnabled: !1,
                        ignoreContainerClipping: !1,
                        direction: "vertical",
                        children: (m) =>
                          (0, e.jsxs)("div", {
                            className: i.GroupSorter,
                            ...m.droppableProps,
                            ref: m.innerRef,
                            children: [
                              _.map((r, s) =>
                                (0, e.jsx)(
                                  J.sx,
                                  {
                                    draggableId: r.groupid,
                                    index: s,
                                    children: (o) =>
                                      (0, e.jsx)(ee, {
                                        groupid: r.groupid,
                                        group: r,
                                        ref: o?.innerRef,
                                        ...o?.draggableProps,
                                        ...o?.dragHandleProps,
                                      }),
                                  },
                                  r.groupid,
                                ),
                              ),
                              m.placeholder,
                            ],
                          }),
                      }),
                    }),
                    (0, e.jsx)(k.Aj, {
                      pending: de.isPending,
                      onSave: pe,
                      onCancel: R,
                    }),
                  ],
                });
              },
              W = function (O) {
                const {
                    groupid: Q,
                    group: U,
                    bNewGroup: R,
                    onSave: E,
                    onCancel: _,
                  } = O,
                  { appID: ve, filter: de, localization: pe } = (0, x.L3)(),
                  { currentLanguage: h } = pe,
                  m = (0, x.FK)(ve, Q),
                  r = (0, k.fw)(Q, U),
                  s = (0, k.$P)(),
                  o =
                    r.visible &&
                    Object.values(s).some(
                      (ye) => (ye.global_unlock_percent ?? 0) > 0,
                    ),
                  [t, d] = c.useState(R),
                  [a, f] = c.useState(!1),
                  [X, ie] = c.useState(!1),
                  [ge, me] = c.useState(!1),
                  [Se, Ge] = c.useState(!1),
                  He = X
                    ? void 0
                    : [
                        {
                          key: "edit",
                          label: (0, G.we)(
                            "#AchievementEditor_Group_Tools_Edit",
                          ),
                          icon: () => (0, e.jsx)($.ffu, {}),
                          action: () => d(!0),
                        },
                        {
                          key: "delete",
                          label: (0, G.we)(
                            "#AchievementEditor_Group_Tools_Delete",
                          ),
                          icon: () => (0, e.jsx)($.X, {}),
                          action: () => f(!0),
                        },
                      ].filter((ye) =>
                        ye.key == "edit" || ye.key == "delete" ? !!Q : !0,
                      ),
                  we = async () => {
                    d(!1), E && E();
                  },
                  Ve = () => {
                    d(!1), _ && _();
                  };
                let xe = (0, e.jsx)(V.$, {
                  variant: "vibrant",
                  onClick: () => me(!0),
                  children: (0, e.jsxs)(j.s, {
                    children: [
                      (0, e.jsx)(l.OMN, {
                        width: "14",
                        height: "14",
                        fill: "currentColor",
                        className: i.Icon,
                      }),
                      " ",
                      (0, G.we)("#AchievementEditor_Group_CreateAchievement"),
                    ],
                  }),
                });
                return (
                  o &&
                    (xe = (0, e.jsxs)(j.s, {
                      direction: "row",
                      gap: "2",
                      align: "center",
                      children: [
                        xe,
                        (0, e.jsxs)(j.s, {
                          align: "center",
                          gap: "1",
                          children: [
                            (0, e.jsx)(k.id, { color: "var(--color-amber-9)" }),
                            (0, e.jsxs)(B.EY, {
                              color: "amber-9",
                              children: [
                                " ",
                                (0, G.we)(
                                  "#AchievementEditor_Group_CreateAchievement_WarnLiveGroup",
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })),
                  t
                    ? R
                      ? (0, e.jsx)(ae, { onSave: we, onCancel: Ve })
                      : (0, e.jsx)(fe, {
                          groupid: Q,
                          group: U,
                          onSave: we,
                          onCancel: Ve,
                        })
                    : (0, e.jsxs)(se, {
                        groupid: Q,
                        group: U,
                        actions: He,
                        collapsed: Se,
                        setCollapsed: Ge,
                        children: [
                          !Se &&
                            (0, e.jsx)("div", {
                              className: i.AchievementsFullDisplay,
                              children: X
                                ? (0, e.jsx)(Y, {
                                    groupid: Q,
                                    achievements: m,
                                    filter: de,
                                    currentLanguage: h,
                                    onClose: () => ie(!1),
                                  })
                                : (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsx)(y, {
                                        achievements: m,
                                        filter: de,
                                        currentLanguage: h,
                                        setBulkMove: () => ie(!0),
                                      }),
                                      (0, e.jsx)("div", {
                                        children: ge
                                          ? (0, e.jsx)(v.i, {
                                              achievement: null,
                                              groupid: Q,
                                              onSave: (ye) => me(!1),
                                              onCancel: () => me(!1),
                                            })
                                          : xe,
                                      }),
                                    ],
                                  }),
                            }),
                          a &&
                            (0, e.jsx)(L, {
                              groupid: Q,
                              group: U,
                              hideModal: () => {
                                f(!1);
                              },
                            }),
                        ],
                      })
                );
              },
              ee = function (O) {
                const { className: Q, ...U } = O;
                return (0, e.jsx)(se, {
                  className: (0, M.A)(i.CompactGroupContainer, Q),
                  ...U,
                });
              },
              te = function (O) {
                return `group-${O}`;
              },
              se = function (O) {
                const {
                    groupid: Q,
                    group: U,
                    actions: R,
                    children: E,
                    className: _,
                    collapsed: ve,
                    setCollapsed: de,
                    ...pe
                  } = O,
                  m = (0, k.fw)(Q, U).visible ? i.Released : i.Unreleased;
                return (0, e.jsx)("div", {
                  id: te(Q),
                  className: (0, M.A)(i.Group, _, m),
                  ...pe,
                  children: (0, e.jsxs)("div", {
                    className: i.GroupDisplay,
                    children: [
                      (0, e.jsx)(D, {
                        groupid: Q,
                        group: U,
                        actions: R,
                        collapsed: ve,
                        setCollapsed: de,
                      }),
                      E,
                    ],
                  }),
                });
              },
              D = function (O) {
                const {
                    groupid: Q,
                    group: U,
                    actions: R,
                    collapsed: E,
                    setCollapsed: _,
                  } = O,
                  { appID: ve } = (0, x.L3)(),
                  de = U?.dlcappid,
                  pe = (0, x.Xe)(ve),
                  m = (0, x.sJ)(ve)?.find((r) => de == r.appid);
                return (0, e.jsxs)("div", {
                  className: i.GroupHeader,
                  children: [
                    (0, e.jsx)(le, { info: m ?? pe }),
                    (0, e.jsxs)("div", {
                      className: i.GroupHeaderContent,
                      children: [
                        !Q &&
                          (0, e.jsxs)("div", {
                            className: i.CoreGroup,
                            children: [
                              (0, e.jsx)("h1", {
                                children: (0, G.we)(
                                  "#AchievementEditor_Group_CoreGameAchievements_Heading",
                                ),
                              }),
                              (0, e.jsx)("p", {
                                children: (0, G.we)(
                                  "#AchievementEditor_Group_CoreGameAchievements_Description",
                                ),
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          className: i.GroupData,
                          children: [
                            !!Q &&
                              (0, e.jsx)("div", {
                                children: (0, e.jsx)("h2", {
                                  children: (0, e.jsx)(T.VU, {
                                    text: U?.name,
                                    missingStringLocToken:
                                      "#AchievementEditor_Group_MissingName",
                                  }),
                                }),
                              }),
                            (0, e.jsx)(N, {
                              archived: U?.archived == "1",
                              developeronly: U?.developeronly == "1",
                              app: m ?? pe,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: i.EditButtons,
                      children: [
                        (0, e.jsxs)(j.s, {
                          direction: "row",
                          gap: "3",
                          children: [
                            !!R &&
                              R.length > 0 &&
                              (0, e.jsx)(A, { actions: R }),
                            E !== void 0 &&
                              _ &&
                              (0, e.jsx)(F.az, {
                                className: i.CollapseButton,
                                onClick: () => _(!E),
                                children: (0, e.jsx)($.F2T, {
                                  fill: "currentColor",
                                  angle: E ? 0 : -90,
                                }),
                              }),
                          ],
                        }),
                        !!Q &&
                          (0, e.jsxs)("div", {
                            className: i.IDText,
                            children: ["ID: ", Q],
                          }),
                      ],
                    }),
                  ],
                });
              },
              y = function (O) {
                const {
                    achievements: Q,
                    filter: U,
                    currentLanguage: R,
                    setBulkMove: E,
                  } = O,
                  _ = H(Q, U, R);
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    _.included.length > 0 &&
                      (0, e.jsx)(v.p, {
                        achievements: _.included,
                        setBulkMove: E,
                      }),
                    _.excluded.length > 0 &&
                      (0, e.jsxs)("div", {
                        className: i.FilterFooter,
                        children: [
                          (0, e.jsx)($.dJT, {}),
                          (0, G.Yp)(
                            "#AchievementEditor_Group_Filtered_Achievements",
                            _.excluded.length,
                          ),
                        ],
                      }),
                    (!Q || Q.length == 0) &&
                      (0, e.jsx)("div", {
                        className: i.Empty,
                        children: (0, G.we)(
                          "#AchievementEditor_Group_EmptyGroup_Description",
                        ),
                      }),
                  ],
                });
              },
              Y = function (O) {
                const {
                    groupid: Q,
                    onClose: U,
                    achievements: R,
                    filter: E,
                    currentLanguage: _,
                  } = O,
                  { appID: ve } = (0, x.L3)(),
                  de = H(R, E, _),
                  [pe, h] = (0, c.useState)(void 0),
                  [m, r] = (0, c.useState)([]),
                  s = (0, x.Q4)(ve) || {};
                let o = new Set(m);
                const t = pe === k.Gl,
                  d = re(void 0, void 0, !0),
                  a = s[Q],
                  f = s[pe],
                  X = (0, k.fw)(Q, a);
                let ie = (0, k.fw)(pe, f);
                t && (ie = d.visibility);
                let ge;
                X.visible && !ie.visible
                  ? (ge = (0, e.jsx)(k.lh, {
                      text: (0, G.we)(
                        "#AchievementEditor_Group_MoveAchievements_Warn_HidingAchievements",
                      ),
                    }))
                  : a?.dlcappid != (t ? d.editAppID : f?.dlcappid) &&
                    ie.visible &&
                    ie.hasprogress &&
                    (ge = (0, e.jsx)(k.lh, {
                      text: (0, G.we)(
                        "#AchievementEditor_Group_MoveAchievements_Warn_BreakCompletion",
                      ),
                    }));
                const [me, Se] = c.useState(de.included.length == m.length),
                  Ge = (0, x.zG)(ve),
                  He = (xe, ye) => {
                    ye ? o.add(xe) : o.delete(xe), r([...o]);
                    const Ne = o.size == de.included.length;
                    (o.size == de.included.length) != me && Se(!me);
                  },
                  we = (xe) => {
                    for (const ye of de.included) {
                      const Ne = (0, x.nf)(ye);
                      xe ? o.add(Ne) : o.delete(Ne);
                    }
                    r([...o]), Se(xe);
                  },
                  Ve = async () => {
                    let xe = pe;
                    t && (xe = await d.save());
                    const ye = {
                      groupid: xe,
                      api_names: R.filter((Ne) => o.has((0, x.nf)(Ne))).map(
                        (Ne) => Ne.name,
                      ),
                    };
                    await Ge.mutateAsync(ye),
                      setTimeout(() => {
                        document
                          .getElementById(te(xe))
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                      }, 200),
                      U();
                  };
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    de.included.length > 0 &&
                      (0, e.jsx)(v.p, {
                        achievements: de.included,
                        compact: !0,
                        editable: !1,
                        headerContentBefore: () =>
                          (0, e.jsx)("div", {
                            className: i.MoveAchievementCheckbox,
                            children: (0, e.jsx)(K.S, {
                              checked: me,
                              onChange: we,
                            }),
                          }),
                        contentBefore: (xe) => {
                          const ye = (0, x.nf)(xe);
                          return (0, e.jsx)("div", {
                            className: i.MoveAchievementCheckbox,
                            children: (0, e.jsx)(K.S, {
                              checked: o.has(ye),
                              onChange: (Ne) => He(ye, Ne),
                            }),
                          });
                        },
                      }),
                    de.excluded.length > 0 &&
                      (0, e.jsxs)("div", {
                        className: i.FilterFooter,
                        children: [
                          (0, e.jsx)($.dJT, {}),
                          (0, G.Yp)(
                            "#AchievementEditor_Group_Filtered_Achievements",
                            de.excluded.length,
                          ),
                        ],
                      }),
                    (!R || R.length == 0) &&
                      (0, e.jsx)("div", {
                        className: i.Empty,
                        children: (0, G.we)(
                          "#AchievementEditor_Group_EmptyGroup_Description",
                        ),
                      }),
                    (0, e.jsxs)(j.s, {
                      direction: t ? "column" : "row",
                      justify: t ? void 0 : "between",
                      align: t ? void 0 : "end",
                      gap: "1",
                      className: i.MoveFooter,
                      children: [
                        (0, e.jsxs)(j.s, {
                          direction: "column",
                          gap: "1",
                          children: [
                            (0, G.we)(
                              "#AchievementEditor_Group_MoveAchievements_GroupSelect_Label",
                              o.size,
                            ),
                            ":",
                            (0, e.jsx)(j.s, {
                              direction: "column",
                              align: "baseline",
                              gap: "1",
                              children: (0, e.jsx)(k.yo, {
                                variant: "inset",
                                selectedValue: pe,
                                filter: (0, k.zy)(Q),
                                onSelectionChange: h,
                                allowCreate: !0,
                              }),
                            }),
                            t &&
                              (0, e.jsx)(w, {
                                bHideSaveCancelButtons: !0,
                                onCancel: () => {},
                                onSave: () => {},
                                state: d,
                              }),
                          ],
                        }),
                        (0, e.jsxs)(j.s, {
                          direction: "row",
                          gap: "1",
                          justify: "end",
                          children: [
                            ge,
                            (0, e.jsx)(k.VZ, {
                              saveDisabled: m.length == 0 || pe == null,
                              saveText: (0, G.we)(
                                "#AchievementEditor_Group_MoveAchievements_MoveButton",
                              ),
                              onCancel: U,
                              onSave: Ve,
                              pending: Ge.isPending,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              },
              A = function (O) {
                const { actions: Q } = O,
                  U = (0, I.WM)({
                    rgOptions: Q.map((R, E) => E),
                    selectedValue: void 0,
                    onSelectionChange: (R) => {
                      R !== void 0 && Q[R].action();
                    },
                  });
                return (0, e.jsxs)(I.l6.Root, {
                  state: U,
                  children: [
                    (0, e.jsx)(I.l6.Trigger, {
                      render: (R) =>
                        (0, e.jsxs)("div", {
                          className: (0, M.A)(i.EditButton),
                          ...R,
                          children: [
                            (0, G.we)("#AchievementEditor_Options"),
                            "\xA0",
                            (0, e.jsx)("div", {
                              className: (0, M.A)(
                                i.SmallIconButton,
                                i.OptionsSVG,
                              ),
                              children: (0, e.jsx)($.GB9, {}),
                            }),
                          ],
                        }),
                    }),
                    (0, e.jsx)(I.l6.Options, {
                      children: Q.map((R, E) =>
                        (0, e.jsx)(
                          I.l6.Option,
                          {
                            value: E,
                            children: (0, e.jsxs)("div", {
                              className: i.SelectIconOption,
                              children: [R?.icon(), R.label],
                            }),
                          },
                          E,
                        ),
                      ),
                    }),
                  ],
                });
              },
              le = function (O) {
                const { info: Q } = O,
                  { image: U, type: R, releasestate: E, name: _ } = Q || {},
                  ve = {
                    ...Q,
                    appid: Q?.appid ? parseInt(Q.appid) : 0,
                    releasestate: E,
                  };
                return (0, e.jsxs)("div", {
                  className: i.AppTile,
                  children: [
                    (0, e.jsx)("div", {
                      className: i.AppTileImage,
                      children: U
                        ? (0, e.jsx)("img", { src: U })
                        : (0, e.jsx)("div", { children: _ }),
                    }),
                    R && E && (0, e.jsx)(z.b, { app: ve }),
                  ],
                });
              },
              Z = function (O) {
                const { hidden: Q, className: U, omitText: R = !1 } = O;
                return (0, e.jsx)("div", {
                  className: (0, M.A)(
                    i.GroupVisibilitySummary,
                    Q ? i.UnreleasedText : i.ReleasedText,
                    U,
                  ),
                  children: Q
                    ? (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(l.ZyV, {}),
                          !R &&
                            (0, G.we)(
                              "#AchievementEditor_Group_Field_Visibility_Value_Hidden",
                            ),
                        ],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(l.rxV, {}),
                          !R &&
                            (0, G.we)(
                              "#AchievementEditor_Group_Field_Visibility_Value_Visible",
                            ),
                        ],
                      }),
                });
              },
              N = function (O) {
                const { archived: Q = !1, developeronly: U = !1, app: R } = O,
                  E = Q || U || !R?.is_released_somewhere,
                  _ = (0, M.A)(i.Unreleased, i.Label);
                return (0, e.jsxs)("div", {
                  className: i.GroupVisibilityInfo,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, M.A)(
                        i.GroupVisibilitySummary,
                        E ? i.UnreleasedText : i.ReleasedText,
                      ),
                      children: (0, e.jsx)(Z, { hidden: E }),
                    }),
                    E &&
                      (0, e.jsxs)("div", {
                        className: i.GroupVisibilityLabels,
                        children: [
                          !R?.is_released_somewhere &&
                            (0, e.jsx)("div", {
                              className: _,
                              children: (0, G.PP)(
                                "#AchievementEditor_Group_Field_Restrictions_Value_OwnersReleaseStatus",
                                (0, e.jsx)("strong", {
                                  children: R?.name ?? "",
                                }),
                                (0, G.we)(
                                  "#AchievementEditor_Group_Field_Restrictions_App_Unreleased",
                                ),
                              ),
                            }),
                          Q &&
                            (0, e.jsxs)("div", {
                              className: _,
                              children: [
                                (0, e.jsx)($.KVe, {}),
                                " ",
                                (0, G.we)(
                                  "#AchievementEditor_Group_Field_IsArchived",
                                ),
                                " ",
                                (0, e.jsx)(k.NT, {
                                  helpText:
                                    "#AchievementEditor_Group_Tooltip_Archived",
                                }),
                              ],
                            }),
                          U &&
                            (0, e.jsxs)("div", {
                              className: _,
                              children: [
                                (0, e.jsx)(l.bmT, {}),
                                " ",
                                (0, G.we)(
                                  "#AchievementEditor_Group_Field_DeveloperOnly",
                                ),
                                " ",
                                (0, e.jsx)(k.NT, {
                                  helpText:
                                    "#AchievementEditor_Group_Tooltip_DeveloperOnly",
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                });
              },
              ae = function (O) {
                return (0, e.jsx)(ue, { bNewGroup: !0, ...O });
              },
              fe = function (O) {
                return (0, e.jsx)(ue, { bNewGroup: !1, ...O });
              },
              re = function (O, Q, U) {
                const { appID: R } = (0, x.L3)(),
                  [E, _] = c.useState(Q?.name ?? {}),
                  [ve, de] = c.useState(Q?.dlcappid),
                  [pe, h] = c.useState(Q?.archived == "1"),
                  [m, r] = c.useState(U || Q?.developeronly == "1"),
                  s = (0, c.useMemo)(
                    () => ({
                      ...Q,
                      name: E,
                      dlcappid: ve,
                      archived: pe ? "1" : "0",
                      developeronly: m ? "1" : "0",
                    }),
                    [E, ve, pe, m, Q],
                  ),
                  o = (0, x.mb)(R, U ? "0" : O),
                  t = (0, k.fw)(O, s),
                  d = () => {
                    _(Q?.name),
                      de(Q?.dlcappid),
                      h(Q?.archived == "1"),
                      r(U || Q?.developeronly == "1");
                  },
                  a = async () => {
                    let X;
                    return (
                      await o
                        .mutateAsync(s)
                        .then((ie) => {
                          X = ie;
                        })
                        .catch((ie) => {}),
                      X
                    );
                  },
                  f = o.isPending;
                return {
                  editGroupName: E,
                  setEditGroupName: _,
                  editAppID: ve,
                  setEditAppID: de,
                  editIsArchived: pe,
                  setEditIsArchived: h,
                  editDeveloperOnly: m,
                  setEditDeveloperOnly: r,
                  isNewGroup: U ?? !1,
                  visibility: t,
                  reset: d,
                  save: a,
                  isPending: f,
                };
              },
              ue = function (O) {
                const { groupid: Q, group: U, bNewGroup: R } = O,
                  E = re(Q, U, R),
                  _ = (0, c.useRef)(null);
                return (
                  (0, c.useEffect)(() => {
                    _?.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                    });
                  }, []),
                  (0, e.jsx)(w, { ref: _, ...O, state: E })
                );
              },
              u = function (O) {
                const { value: Q, setValue: U } = O,
                  { appID: R } = (0, x.L3)(),
                  E = (0, x.sJ)(R),
                  _ = (0, c.useCallback)(
                    (pe) => {
                      if ((pe ?? "0") == "0")
                        return `(${R}) ${(0, G.we)("#AchievementEditor_Group_Field_Restrictions_Value_AllPlayers")}`;
                      const h = E.find((m) => m.appid == pe)?.name;
                      return `(${pe}) ${h}`;
                    },
                    [E, R],
                  ),
                  ve = Array.from(
                    new Set(
                      E.sort((pe, h) =>
                        (pe.name ?? "").localeCompare(h.name ?? ""),
                      ).map((pe) => pe.appid),
                    ),
                  ),
                  de = ["0"].concat(ve);
                return E.length < 20
                  ? (0, e.jsx)(I.l6, {
                      options: de,
                      getOptionLabel: _,
                      selectedValue: Q ?? "0",
                      onSelectionChange: U,
                    })
                  : (0, e.jsx)(b.G3, {
                      options: de,
                      getOptionLabel: _,
                      selectedValue: Q ?? "0",
                      onSelectionChange: U,
                      placeholder: "",
                      filterPlaceholder: "",
                    });
              },
              w = function (O) {
                const {
                    state: Q,
                    groupid: U,
                    bHideSaveCancelButtons: R,
                    onSave: E,
                    onCancel: _,
                    ref: ve,
                  } = O,
                  { appID: de } = (0, x.L3)(),
                  pe = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                  pe?.current?.focus();
                }, []);
                const {
                    editGroupName: h,
                    setEditGroupName: m,
                    editAppID: r,
                    setEditAppID: s,
                    editIsArchived: o,
                    setEditIsArchived: t,
                    editDeveloperOnly: d,
                    setEditDeveloperOnly: a,
                    isNewGroup: f,
                    visibility: X,
                    isPending: ie,
                  } = Q,
                  ge = Q.editAppID !== void 0,
                  me = async () => {
                    (await Q.save()) !== void 0 && E && E();
                  },
                  Se = () => {
                    Q.reset(), _ && _();
                  },
                  Ge = X.visible ? i.Released : i.Unreleased;
                return (0, e.jsxs)("div", {
                  ref: ve,
                  className: (0, M.A)(i.Group, i.Editing, Ge),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, M.A)(i.ReleaseStatusBar, Ge),
                    }),
                    (0, e.jsx)("div", {
                      className: i.GroupDisplay,
                      children: (0, e.jsx)("div", {
                        className: i.GroupHeader,
                        children: (0, e.jsxs)("div", {
                          className: i.GroupHeaderContent,
                          children: [
                            !U &&
                              !f &&
                              (0, e.jsxs)("div", {
                                className: i.CoreGroup,
                                children: [
                                  (0, e.jsx)("h1", {
                                    children: (0, G.we)(
                                      "#AchievementEditor_Group_CoreGameAchievements_Heading",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    children: (0, G.we)(
                                      "#AchievementEditor_Group_CoreGameAchievements_Description",
                                    ),
                                  }),
                                ],
                              }),
                            (0, e.jsx)("div", {
                              children: f
                                ? (0, e.jsx)("div", {
                                    className: i.EditTitle,
                                    children: (0, e.jsx)("h1", {
                                      children: (0, G.we)(
                                        "#AchievementEditor_AchievementsTable_Header_CreateGroup",
                                      ),
                                    }),
                                  })
                                : (0, e.jsx)("div", {
                                    className: i.EditTitle,
                                    children: (0, e.jsx)("h1", {
                                      children: (0, G.we)(
                                        "#AchievementEditor_Group_Tools_Edit",
                                      ),
                                    }),
                                  }),
                            }),
                            (0, e.jsxs)("div", {
                              className: i.GroupData,
                              children: [
                                (0, e.jsxs)("div", {
                                  children: [
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, G.we)(
                                          "#AchievementEditor_Group_Field_Restrictions",
                                        ),
                                        ":",
                                      ],
                                    }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, G.we)(
                                              "#AchievementEditor_Group_Edit_Field_Restrictions_Description",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)(u, {
                                          value: r,
                                          setValue: s,
                                        }),
                                        (0, e.jsx)(le, { info: X.app }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: i.VisibilityColumn,
                                  children: [
                                    (!!U || f) &&
                                      (0, e.jsxs)("div", {
                                        children: [
                                          (0, e.jsxs)(j.s, {
                                            children: [
                                              (0, e.jsxs)(j.s, {
                                                flexGrow: "1",
                                                children: [
                                                  (0, G.we)(
                                                    "#AchievementEditor_Group_Field_Name",
                                                  ),
                                                  ":",
                                                ],
                                              }),
                                              ge &&
                                                (0, e.jsx)(j.s, {
                                                  children: (0, e.jsx)("p", {
                                                    children:
                                                      'May sometimes be displayed with "DLC" prefix',
                                                  }),
                                                }),
                                            ],
                                          }),
                                          (0, e.jsxs)("div", {
                                            children: [
                                              (0, e.jsxs)("div", {
                                                children: [
                                                  (0, G.we)(
                                                    "#AchievementEditor_Group_Edit_Field_Name_Description",
                                                  ),
                                                  " ",
                                                  (0, e.jsx)(T.Mq, {
                                                    locstring: h,
                                                  }),
                                                ],
                                              }),
                                              (0, e.jsx)(T.Pk, {
                                                autofocus: !0,
                                                value: h,
                                                setValue: m,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    (0, e.jsxs)("div", {
                                      children: [
                                        (0, e.jsx)("div", {
                                          children: (0, G.we)(
                                            "#AchievementEditor_Group_Field_DeveloperOnly",
                                          ),
                                        }),
                                        (0, e.jsx)("div", {
                                          children: (0, e.jsx)(F.az, {
                                            background: "dull-9",
                                            flexGrow: "1",
                                            padding: "1",
                                            radius: "sm",
                                            children: (0, e.jsx)(K.S, {
                                              checked: d,
                                              onChange: a,
                                              children: (0, G.we)(
                                                "#AchievementEditor_Group_Field_DeveloperOnly",
                                              ),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    !f &&
                                      (0, e.jsxs)("div", {
                                        children: [
                                          (0, e.jsxs)("div", {
                                            children: [
                                              (0, G.we)(
                                                "#AchievementEditor_Group_Field_Archive",
                                              ),
                                              ":",
                                            ],
                                          }),
                                          (0, e.jsx)("div", {
                                            children: (0, e.jsx)(F.az, {
                                              background: "dull-9",
                                              flexGrow: "1",
                                              padding: "1",
                                              radius: "sm",
                                              children: (0, e.jsx)(K.S, {
                                                checked: o,
                                                onChange: t,
                                                children: (0, G.we)(
                                                  "#AchievementEditor_Group_Field_IsArchived",
                                                ),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    (0, e.jsxs)("div", {
                                      className: i.VisibilitySection,
                                      children: [
                                        (0, e.jsxs)("div", {
                                          children: [
                                            (0, G.we)(
                                              "#AchievementEditor_Group_Field_Visibility",
                                            ),
                                            ":",
                                          ],
                                        }),
                                        (0, e.jsx)("div", {
                                          children: (0, e.jsx)(N, { ...X }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            !R &&
                              (0, e.jsx)(k.Aj, {
                                onSave: me,
                                onCancel: Se,
                                pending: ie,
                              }),
                          ],
                        }),
                      }),
                    }),
                  ],
                });
              },
              L = function (O) {
                const { groupid: Q, group: U, hideModal: R } = O,
                  { appID: E } = (0, x.L3)(),
                  _ = (0, x.F0)(E, Q),
                  ve = (0, x.FK)(E, Q),
                  de = (0, k.fw)(Q, U),
                  pe = !ve || ve.length === 0,
                  h = async () => {
                    await _.mutateAsync(), R();
                  };
                return (0, e.jsx)(ne.EN, {
                  active: !0,
                  children: (0, e.jsx)(ne.x_, {
                    onEscKeypress: R,
                    children: (0, e.jsxs)(g.U9, {
                      className: i.GroupDeleteDialog,
                      children: [
                        (0, e.jsx)(g.Y9, {
                          children: (0, G.we)(
                            "#AchievementEditor_Group_Delete_Dialog_Title",
                          ),
                        }),
                        (0, e.jsxs)(g.nB, {
                          children: [
                            !pe &&
                              (0, e.jsxs)(j.s, {
                                direction: "row",
                                gap: "2",
                                padding: "2",
                                align: "center",
                                background: "red-7",
                                style: {
                                  color: "var(--color-text-light-title)",
                                },
                                children: [
                                  (0, e.jsx)(k.id, {}),
                                  (0, e.jsx)(B.EY, {
                                    contrast: "title",
                                    children: (0, G.we)(
                                      "#AchievementEditor_Group_Delete_Dialog_WarnNonEmptyGroup",
                                    ),
                                  }),
                                ],
                              }),
                            (0, e.jsxs)(j.s, {
                              direction: "column",
                              gap: "1",
                              padding: "2",
                              className: i.GroupBox,
                              children: [
                                (0, e.jsxs)(B.EY, {
                                  children: [
                                    (0, G.we)(
                                      "#AchievementEditor_Group_Field_Name",
                                    ),
                                    ": ",
                                    (0, T.ZM)(U?.name, "english") ??
                                      U?.name.token,
                                  ],
                                }),
                                (0, e.jsx)(N, { ...de }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(g.wi, {
                          children: (0, e.jsx)(k.Aj, {
                            saveText: (0, G.we)(
                              "#AchievementEditor_Group_Delete_Dialog_Delete",
                            ),
                            saveColor: "red",
                            saveDisabled: !pe,
                            onCancel: R,
                            onSave: h,
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              };
            n.d(he, { C6: () => Z, _e: () => P, or: () => N });
            var e = n(7850),
              J = n(89558),
              V = n(79611),
              j = n(68031),
              B = n(15252),
              F = n(60351),
              K = n(94381),
              I = n(58952),
              b = n(74769),
              x = n(3959),
              c = n(90626),
              g = n(58534),
              l = n(249),
              ne = n(2801),
              $ = n(36118),
              M = n(36707),
              G = n(18210),
              z = n(77959),
              v = n(71986),
              i = n(1103),
              S = n.n(i),
              T = n(1421),
              k = n(82006),
              q = p([x, v, T, k]);
            ([x, v, T, k] = q.then ? (await q)() : q), C();
          } catch (H) {
            C(H);
          }
        });
      },
      1421: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let S = function () {
                const { appID: W } = (0, c.L3)(),
                  ee = (0, c.ts)(W),
                  te = (0, c.Q4)(W) || {},
                  se = (0, c.kb)(W) || [];
                return [
                  ...se.map((Y) => Y.display?.name),
                  ...se.map((Y) => Y.display?.desc),
                  ...Object.keys(te).map((Y) => te[Y].name),
                ].reduce(
                  (Y, A) => (
                    Object.keys(Y).forEach((le) => {
                      const Z = Y[le];
                      (Z.total = Z.total + 1),
                        (H(A, le)?.length ?? 0) > 0 && (Z.set = Z.set + 1),
                        (Y[le] = Z);
                    }),
                    Y
                  ),
                  ee.reduce((Y, A) => ((Y[A] = { set: 0, total: 0 }), Y), {}),
                );
              },
              T = function (W) {
                const { locstring: ee } = W,
                  { appID: te, localization: se } = (0, c.L3)(),
                  { currentLanguage: D, setCurrentLanguage: y } = se,
                  Y = (0, c.ts)(te),
                  A = ee === void 0,
                  le = S(),
                  Z = A ? le : {},
                  N = (0, J.WM)({
                    rgOptions: Y,
                    selectedValue: D,
                    onSelectionChange: y,
                  }),
                  ae = (fe, re = !1) => {
                    const ue = A
                        ? Z[fe].set === Z[fe].total
                        : (H(ee, fe)?.length ?? 0) > 0,
                      u = ue ? G.Provided : G.Missing,
                      w = A ? ` (${Z[fe].set} / ${Z[fe].total})` : "";
                    return (0, e.jsxs)("span", {
                      className: u,
                      children: [
                        re &&
                          (ue
                            ? (0, e.jsx)(ne.Jlk, { color: "var(--text-color)" })
                            : (0, e.jsx)(l.eTF, {
                                color: "var(--text-color)",
                              })),
                        " ",
                        (0, M.we)(`#Language_${fe}`),
                        w,
                      ],
                    });
                  };
                return (0, e.jsx)("div", {
                  className: (0, $.A)(G.LocSelect, ee ? G.Inline : null),
                  children: (0, e.jsxs)(J.l6.Root, {
                    variant: ee ? "underline" : "default",
                    size: "2",
                    state: N,
                    children: [
                      (0, e.jsx)(J.l6.Trigger, { children: ae(D) }),
                      (0, e.jsx)(J.l6.Options, {
                        children: N.rgOptions.map((fe) =>
                          (0, e.jsx)(
                            J.l6.Option,
                            { value: fe, children: ae(fe.toString(), !0) },
                            fe.toString(),
                          ),
                        ),
                      }),
                    ],
                  }),
                });
              },
              k = function (W, ee) {
                return W
                  ? typeof W == "string"
                    ? { english: W }
                    : Object.keys(W).reduce(
                        (se, D) => (
                          (D == "token" || ee.includes(D)) && (se[D] = W[D]), se
                        ),
                        {},
                      )
                  : {};
              },
              q = function (W) {
                const {
                    value: ee,
                    setValue: te,
                    multiline: se = !1,
                    autofocus: D = !1,
                  } = W,
                  { currentLanguage: y } = (0, c.L3)().localization,
                  { appID: Y } = (0, c.L3)(),
                  A = (0, c.ts)(Y),
                  le = k(ee, A),
                  Z = (N) => {
                    const ae = { ...le, [y]: N };
                    te(ae);
                  };
                return (0, e.jsx)("div", {
                  className: (0, $.A)(G.LocTextInput, le[y] ? void 0 : G.Empty),
                  children: se
                    ? (0, e.jsx)(V.f, {
                        autoFocus: D,
                        resize: "vertical",
                        value: le[y],
                        onTextChange: Z,
                      })
                    : (0, e.jsx)(j.k, {
                        autoFocus: D,
                        value: le[y],
                        onTextChange: Z,
                      }),
                });
              },
              H = function (W, ee) {
                if (W !== void 0)
                  return typeof W == "string"
                    ? ee === "english"
                      ? W
                      : void 0
                    : W && ee in W && W[ee] != ""
                      ? W[ee]
                      : void 0;
              },
              P = function (W) {
                const { text: ee, missingStringLocToken: te } = W,
                  { currentLanguage: se } = (0, c.L3)().localization,
                  D = H(ee, se);
                return (
                  D ||
                  (0, e.jsxs)("span", {
                    className: (0, $.A)(G.Missing, G.LocText),
                    children: [
                      (0, e.jsx)(l.eTF, { color: "var(--text-color)" }),
                      " ",
                      (0, M.we)(
                        te ?? "#AchievementEditor_Localization_MissingString",
                        (0, M.we)(`#Language_${se}`),
                      ),
                    ],
                  })
                );
              },
              oe = function (W) {
                const { onClose: ee } = W,
                  { appID: te } = (0, c.L3)(),
                  se = (0, c.ts)(te),
                  D = (0, c.vd)(te),
                  y = (0, c.kk)(te),
                  [Y, A] = (0, g.useState)(new Set(se)),
                  le = D.reduce(
                    (ue, u) => ((ue[u] = (0, M.we)(`#Language_${u}`)), ue),
                    {},
                  ),
                  Z = [...D].sort((ue, u) => le[ue].localeCompare(le[u])),
                  N = (0, g.useCallback)(async () => {
                    (await y.mutateAsync(Array.from(Y))) && ee();
                  }, [y, ee, Y]),
                  ae = Z.slice(0, Math.round(Z.length / 2)),
                  fe = Z.slice(ae.length),
                  re = (ue, u) => {
                    A((w) =>
                      u
                        ? new Set(Array.from([...w, ue]))
                        : new Set(Array.from(w).filter((L) => L != ue)),
                    );
                  };
                return (0, e.jsxs)(x.s, {
                  onClose: ee,
                  strTitle: (0, M.we)(
                    "#AchievementEditor_AppLanguageEdit_Title",
                  ),
                  children: [
                    (0, e.jsxs)(B.x, {
                      columns: "repeat(2, 1fr)",
                      gap: "3",
                      paddingY: "3",
                      children: [
                        (0, e.jsx)(F.az, {
                          gridColumn: "1/-1",
                          minWidth: "100%",
                          width: "0",
                          children: (0, e.jsx)(K.EY, {
                            contrast: "description",
                            children: (0, M.we)(
                              "#AchievementEditor_AppLanguageEdit_Description",
                            ),
                          }),
                        }),
                        [ae, fe].map((ue, u) =>
                          (0, e.jsx)(
                            I.s,
                            {
                              direction: "column",
                              gap: "2",
                              children: ue.map((w) =>
                                (0, e.jsx)(
                                  b.S,
                                  {
                                    disabled: w == "english",
                                    checked: w == "english" || Y.has(w),
                                    onChange: (L) => re(w, L),
                                    children: le[w],
                                  },
                                  w,
                                ),
                              ),
                            },
                            u,
                          ),
                        ),
                      ],
                    }),
                    (0, e.jsx)(v.VZ, {
                      pending: y.isPending,
                      onSave: N,
                      onCancel: ee,
                    }),
                  ],
                });
              };
            n.d(he, {
              DG: () => S,
              II: () => k,
              Jt: () => oe,
              Mq: () => T,
              Pk: () => q,
              VU: () => P,
              ZM: () => H,
            });
            var e = n(7850),
              J = n(58952),
              V = n(1522),
              j = n(7125),
              B = n(95994),
              F = n(60351),
              K = n(15252),
              I = n(68031),
              b = n(94381),
              x = n(64388),
              c = n(3959),
              g = n(90626),
              l = n(249),
              ne = n(36118),
              $ = n(36707),
              M = n(18210),
              G = n(6629),
              z = n.n(G),
              v = n(82006),
              i = p([c, v]);
            ([c, v] = i.then ? (await i)() : i), C();
          } catch (S) {
            C(S);
          }
        });
      },
      79619: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let i = function (P) {
                const oe =
                    P?.type == "INT"
                      ? G.transform(z.decode)
                      : ne.transform($.decode),
                  W =
                    P?.type == "INT"
                      ? [0, F.ZSL.zH.int32[1]]
                      : [0, F.ZSL.zH.float32[1]],
                  ee = oe.default(0).parse(P?.min),
                  te = oe.default(W[1]).parse(P?.max),
                  se = P?.type == "INT" ? F.aig().int() : F.aig(),
                  D = (0, g.Cm)(
                    F.Ikc({ min_val: se.min(ee), max_val: se.max(te) })
                      .optional()
                      .refine((y) => y === void 0 || y.min_val < y.max_val, {
                        error: (0, b.we)(
                          "#AchievementEditor_Validator_Error_MinGreaterThanMax",
                        ),
                      }),
                  );
                return {
                  hasStat: P !== void 0,
                  hasMin: P?.min !== void 0,
                  hasMax: P?.max !== void 0,
                  min: ee,
                  max: te,
                  type: P?.type,
                  validator: D,
                };
              },
              S = function (P) {
                const {
                    appID: oe,
                    progress: W,
                    setProgress: ee,
                    hasStat: te,
                    hasMin: se,
                    hasMax: D,
                    min: y,
                    max: Y,
                    type: A = "FLOAT",
                    validator: le,
                  } = P,
                  Z = (0, I.useId)(),
                  N = (0, K.J3)(oe);
                function ae(ue) {
                  if (ue === void 0) {
                    ee(void 0);
                    return;
                  }
                  const u = N.find((w) => w.name == ue);
                  ee({
                    min_val: u?.min,
                    max_val: u?.max,
                    value: { operand1: ue, operation: "statvalue" },
                  });
                }
                function fe(ue) {
                  const u = {
                    value: W.value,
                    min_val: ue[0].toString(),
                    max_val: ue[1].toString(),
                  };
                  ee(u);
                }
                function re(ue) {
                  if (!ue) return;
                  const u = "\u221E",
                    w = N.find((L) => L.name == ue);
                  return `${w.name} (${w.type} ${w.min ?? 0} - ${w.max ?? u})`;
                }
                return (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(g.ox, {
                      labelId: Z,
                      label: (0, b.we)(
                        "#AchievementEditor_Achievement_Edit_ProgressStat",
                      ),
                      description: (0, b.we)(
                        "#AchievementEditor_Achievement_Edit_ProgressStat_Description",
                      ),
                      children: (0, e.jsx)(J.G3, {
                        "aria-labelledby": Z,
                        options: N.map((ue) => ue.name),
                        getOptionLabel: re,
                        selectedValue: W?.value?.operand1,
                        onSelectionChange: ae,
                        placeholder: "",
                        filterPlaceholder: "",
                        clearable: !0,
                      }),
                    }),
                    te &&
                      (0, e.jsx)(T, {
                        showSlider: se && D,
                        min: y,
                        max: Y,
                        integer: A == "INT",
                        validator: le,
                        value: [
                          F.auy.number().default(y).parse(W?.min_val),
                          F.auy.number().default(Y).parse(W?.max_val),
                        ],
                        setValue: fe,
                      }),
                  ],
                });
              },
              T = function (P) {
                const {
                    showSlider: oe = !1,
                    min: W,
                    max: ee,
                    validator: te,
                    integer: se,
                    value: D,
                  } = P,
                  y = (0, I.useId)(),
                  Y = se ? F.aig().int() : F.aig(),
                  A = te({ min_val: D[0], max_val: D[1] });
                return (0, e.jsx)(g.qF, {
                  labelId: y,
                  label: (0, b.we)(
                    "#AchievementEditor_Achievement_Edit_ProgressStatRange",
                  ),
                  isValid: A.success,
                  issues: A.success ? void 0 : A.issues?.map((le) => le),
                  children: oe
                    ? (0, e.jsx)(k, { ...P })
                    : (0, e.jsx)(q, { ...P }),
                });
              },
              k = function (P) {
                const {
                    min: oe,
                    max: W,
                    integer: ee,
                    value: te,
                    setValue: se,
                  } = P,
                  D = ee ? 1 : 0.1,
                  y = [B.OQ(te[0], oe, W), B.OQ(te[1], oe, W)];
                return (0, e.jsxs)("div", {
                  className: x.MinMaxRangeContainer,
                  children: [
                    (0, e.jsx)(q, { ...P }),
                    (0, e.jsx)(V.F, {
                      value: y,
                      onValueChange: se,
                      min: oe,
                      max: W,
                      step: D,
                    }),
                  ],
                });
              },
              q = function (P) {
                const { value: oe, setValue: W, integer: ee } = P;
                return (0, e.jsxs)("div", {
                  className: x.MinMax,
                  children: [
                    (0, e.jsx)(g.wI, {
                      children: (0, e.jsx)(H, {
                        placeholder: (0, b.we)(
                          "#AchievementEditor_Achievement_Edit_Stat_Min_Placeholder",
                        ),
                        value: oe[0],
                        integer: ee,
                        onValueChange: (te) => W([te, oe[1]]),
                      }),
                    }),
                    (0, e.jsx)("span", { children: " - " }),
                    (0, e.jsx)(g.wI, {
                      children: (0, e.jsx)(H, {
                        placeholder: (0, b.we)(
                          "#AchievementEditor_Achievement_Edit_Stat_Max_Placeholder",
                        ),
                        value: oe[1],
                        integer: ee,
                        onValueChange: (te) => W([oe[0], te]),
                      }),
                    }),
                  ],
                });
              },
              H = function (P) {
                const { defaultValue: oe = 0, integer: W = !1, ...ee } = P,
                  te = W ? v : M;
                function se(y) {
                  const Y = te.safeDecode(y);
                  return Y.success ? Y.data : void 0;
                }
                const D = (y, Y) => !y || (Y !== j.C && !isNaN(Y));
                return (0, e.jsx)(j.I, {
                  valueToString: (y) => te.safeEncode(y).data,
                  valueFromString: se,
                  checkValidText: D,
                  ...ee,
                });
              };
            n.d(he, { E: () => i, O: () => S });
            var e = n(7850),
              J = n(74769),
              V = n(9656),
              j = n(99631),
              B = n(13854),
              F = n(30541),
              K = n(3959),
              I = n(90626),
              b = n(18210),
              x = n(14223),
              c = n.n(x),
              g = n(30263),
              l = p([F, K]);
            [F, K] = l.then ? (await l)() : l;
            const ne = F.YjP().regex(/^-?\d+(?:\.\d*)?$/),
              $ = {
                decode: (P) => Number.parseFloat(P),
                encode: (P) => P.toString(),
              },
              M = F.rLB(ne, F.aig(), $),
              G = F.YjP().regex(F.A$I.nd),
              z = {
                decode: (P) => Number.parseInt(P, 10),
                encode: (P) => P.toString(),
              },
              v = F.rLB(G, F.Whr(), z);
            C();
          } catch (ne) {
            C(ne);
          }
        });
      },
      82006: (ce, he, n) => {
        "use strict";
        n.a(ce, async (p, C) => {
          try {
            let i = function (u) {
                const {
                  saveText: w,
                  saveColor: L,
                  cancelText: O,
                  onSave: Q,
                  onCancel: U,
                  pending: R,
                  saveDisabled: E = !1,
                  hideCancel: _ = !1,
                } = u;
                return (0, e.jsxs)("div", {
                  className: I.SaveCloseButtons,
                  children: [
                    (0, e.jsx)(J.$, {
                      color: L ?? "green",
                      variant: "vibrant",
                      onClick: Q,
                      loading: R,
                      disabled: E || R,
                      children: (0, e.jsx)("span", {
                        children: w || (0, K.we)("#Button_Save"),
                      }),
                    }),
                    !_ &&
                      (0, e.jsx)(J.$, {
                        color: "dull",
                        onClick: U,
                        disabled: R,
                        children: (0, e.jsx)("span", {
                          children: O || (0, K.we)("#Button_Cancel"),
                        }),
                      }),
                  ],
                });
              },
              S = function (u) {
                const { className: w } = u;
                return (0, e.jsx)(V.az, {
                  className: (0, g.A)(I.Icon, w),
                  children: (0, e.jsx)(x.qzq, {}),
                });
              },
              T = function (u) {
                const { color: w = "currentColor" } = u;
                return (0, e.jsx)(V.az, {
                  className: I.Icon,
                  children: (0, e.jsx)(c.eTF, { color: w }),
                });
              },
              k = function (u) {
                const { color: w = "var(--color-unreleased)" } = u;
                return (0, e.jsx)(V.az, {
                  className: I.Icon,
                  children: (0, e.jsx)(c.ZyV, { color: w }),
                });
              },
              q = function (u) {
                return (0, e.jsx)("div", {
                  className: I.ButtonContainer,
                  children: (0, e.jsx)(i, { ...u }),
                });
              },
              H = function (u) {
                const { title: w, onClick: L } = u;
                return (0, e.jsxs)(J.$, {
                  color: "dull",
                  icon: !0,
                  onClick: L,
                  children: [
                    (0, e.jsx)("div", {
                      className: I.ButtonIcon,
                      children: (0, e.jsx)(P, { width: "18", height: "18" }),
                    }),
                    (0, K.we)("#AchievementEditor_ReorderGroups"),
                  ],
                });
              },
              P = function (u) {
                return (0, e.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                  ...u,
                  children: (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M17 10.3477L14.7471 12.5557L11.0938 8.97559V27.0244L14.7471 23.4443L17 25.6523L9.5 33L2 25.6523L4.25293 23.4443L7.90625 27.0234V8.97656L4.25293 12.5557L2 10.3477L9.5 3L17 10.3477ZM34 30L21.0303 30.0303V26.0303L34 26V30ZM34 16V20H21V16H34ZM34 10H21V6H34V10Z",
                  }),
                });
              },
              oe = function (u) {
                const { title: w, onClick: L, className: O } = u;
                return (0, e.jsx)("div", {
                  title: w,
                  className: (0, g.A)(I.SmallIconButton, I.EditButton, O),
                  children: (0, e.jsx)(J.$, {
                    variant: "ghost",
                    icon: !0,
                    onClick: L,
                    children: (0, e.jsx)(x.ffu, {}),
                  }),
                });
              },
              W = function (u) {
                const { title: w, onClick: L } = u;
                return (0, e.jsx)("div", {
                  title: w,
                  className: (0, g.A)(I.SmallIconButton, I.DeleteButton),
                  children: (0, e.jsx)(J.$, {
                    variant: "ghost",
                    icon: !0,
                    onClick: L,
                    children: (0, e.jsx)(x.X, {}),
                  }),
                });
              },
              ee = function (u) {
                const { helpText: w } = u;
                return (0, e.jsx)(ne.he, {
                  toolTipContent: w,
                  children: (0, e.jsx)(x._VW, {}),
                });
              },
              te = function (u) {
                const { text: w } = u;
                return (0, e.jsxs)(j.s, {
                  direction: "row",
                  gap: "1",
                  align: "center",
                  style: { color: "var(--color-warning)" },
                  children: [(0, e.jsx)(T, {}), " ", w],
                });
              },
              D = function (u) {
                const { groupID: w, group: L, showVisibility: O = !1 } = u,
                  { visible: Q } = N(w, L),
                  { existingAchievements: U } = (0, l.L3)(),
                  R =
                    w === se || w === void 0
                      ? (0, K.we)(
                          "#AchievementEditor_Group_CoreGameAchievements_Heading",
                        )
                      : ((0, z.ZM)(L?.name, "english") ?? L?.name?.token),
                  _ =
                    U?.groups
                      .find((de) => de.id.toString() == w)
                      ?.achievements.some(
                        (de) => (de.global_unlock_percent ?? 0) > 0,
                      ) ?? !1;
                let ve;
                return (
                  O &&
                    (Q
                      ? _ && (ve = (0, e.jsx)(S, {}))
                      : (ve = (0, e.jsx)(k, {}))),
                  (0, e.jsxs)(j.s, {
                    direction: "row",
                    gap: "1",
                    align: "center",
                    children: [ve, R],
                  })
                );
              },
              Y = function (u) {
                const {
                    selectedValue: w,
                    onSelectionChange: L,
                    filter: O,
                    allowCreate: Q,
                    variant: U,
                    placeholder: R = (0, K.we)(
                      "#AchievementEditor_Group_SelectGroupPlaceholder",
                    ),
                  } = u,
                  { appID: E } = (0, l.L3)(),
                  _ = (0, l.Q4)(E) || {},
                  ve = [se, ...Object.keys(_)],
                  de = O === void 0 ? ve : ve.filter(O);
                Q && de.splice(0, 0, y);
                const [pe, h] = F.useState(w ?? void 0),
                  m = (s) => {
                    h(s), L(s);
                  },
                  r = (s) =>
                    s == y
                      ? (0, K.we)("#AchievementEditor_Group_SelectGroup_Create")
                      : (0, e.jsx)(D, {
                          groupID: s,
                          group: _[s],
                          showVisibility: !0,
                        });
                return (0, e.jsx)(B.l6, {
                  selectedValue: pe,
                  variant: U,
                  onSelectionChange: m,
                  options: de,
                  placeholder: R,
                  getOptionLabel: r,
                });
              },
              A = function (u) {
                return (w) => w != u && (!!u || w != se);
              },
              le = function (u, w, L, O) {
                const Q = L == "name" ? "NAME" : "DESC";
                return !u || u == `${w}_${Q}` ? `${O}_${Q}` : u;
              },
              Z = function (u) {
                const {
                  okText: w,
                  cancelText: L,
                  onOk: O,
                  onCancel: Q,
                  okColor: U,
                  hideCancelButton: R = !1,
                  children: E,
                } = u;
                return (0, e.jsx)($.EN, {
                  active: !0,
                  children: (0, e.jsx)($.x_, {
                    bHideCloseIcon: !0,
                    children: (0, e.jsxs)(M.U9, {
                      children: [
                        (0, e.jsx)(M.nB, { children: E }),
                        (0, e.jsx)(M.wi, {
                          children: (0, e.jsx)(q, {
                            saveText: w ?? "OK",
                            saveColor: U,
                            onSave: O,
                            cancelText: L,
                            onCancel: Q,
                            hideCancel: R,
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
              N = function (u, w) {
                const { appID: L, existingAchievements: O } = (0, l.L3)(),
                  Q = w?.dlcappid,
                  U = (0, l.Xe)(L),
                  E = (0, l.sJ)(L)?.find((m) => Q == m.appid),
                  _ = w?.archived == "1",
                  ve = w?.developeronly == "1",
                  de = (E ?? U)?.is_released_somewhere,
                  h =
                    O?.groups
                      .find((m) => m.id.toString() == (u ?? se))
                      ?.achievements.some(
                        (m) => (m.global_unlock_percent ?? 0) > 0,
                      ) ?? !1;
                return {
                  archived: _,
                  developeronly: ve,
                  is_released_somewhere: de,
                  hasprogress: h,
                  app: E ?? U,
                  visible: !_ && !ve && de,
                };
              },
              ae = function () {
                const { existingAchievements: u } = (0, l.L3)();
                return (0, F.useMemo)(() => {
                  if (u)
                    return u.groups.reduce(
                      (L, O) => (
                        O.achievements.forEach((Q) => {
                          L[Q.internal_key] = Q;
                        }),
                        L
                      ),
                      {},
                    );
                }, [u]);
              },
              fe = function (u, w) {
                const L = ae();
                if (L === void 0 || u === void 0 || w === void 0) return;
                const O = re(u, w);
                return L[O];
              },
              re = function (u, w) {
                const L = typeof u == "string" ? Number.parseInt(u) : u,
                  O = typeof w == "string" ? Number.parseInt(w) : w;
                return (L << 8) | O;
              },
              ue = function (u) {
                return ((u ?? 0) / 100).toLocaleString((0, G.J)(), {
                  style: "percent",
                  maximumFractionDigits: 1,
                });
              };
            n.d(he, {
              $P: () => ae,
              Aj: () => q,
              BA: () => S,
              EV: () => le,
              Gl: () => y,
              NT: () => ee,
              TM: () => Z,
              VZ: () => i,
              YZ: () => fe,
              Z7: () => ue,
              et: () => W,
              fw: () => N,
              id: () => T,
              lg: () => oe,
              lh: () => te,
              mc: () => H,
              yo: () => Y,
              z0: () => se,
              zy: () => A,
            });
            var e = n(7850),
              J = n(79611),
              V = n(60351),
              j = n(68031),
              B = n(58952),
              F = n(90626),
              K = n(18210),
              I = n(79964),
              b = n.n(I),
              x = n(36118),
              c = n(249),
              g = n(36707),
              l = n(3959),
              ne = n(71421),
              $ = n(2801),
              M = n(58534),
              G = n(84346),
              z = n(1421),
              v = p([l, z]);
            [l, z] = v.then ? (await v)() : v;
            const se = "0",
              y = "newgroup";
            C();
          } catch (i) {
            C(i);
          }
        });
      },
      91988: (ce, he, n) => {
        "use strict";
        n.d(he, { z: () => j });
        var p = n(7850),
          C = n(90626),
          e = n(3952),
          J = n.n(e),
          V = n(36707);
        function j(B) {
          const {
              className: F,
              onUpload: K,
              accept: I,
              multiple: b = !1,
              fileInputRef: x,
              children: c,
            } = B,
            [g, l] = (0, C.useState)(!1),
            [ne, $] = (0, C.useState)(!1),
            M = (S) => {
              S.preventDefault(), l(!0);
              const T = [...S.dataTransfer.items];
              if (!b && T.length > 1) {
                $(!0), (S.dataTransfer.effectAllowed = "none");
                return;
              }
              for (const k of T)
                if (!I.includes(k.type)) {
                  $(!0),
                    (S.dataTransfer.effectAllowed = "none"),
                    console.log(k.type);
                  return;
                }
            },
            G = (S) => {
              ne && (S.dataTransfer.dropEffect = "none"), S.preventDefault();
            },
            z = () => {
              l(!1), $(!1);
            },
            v = async (S) => {
              S.preventDefault(), l(!1);
              let T = ne;
              $(!1), !T && K(S.dataTransfer.files);
            },
            i = async (S) => {
              K(S.target.files);
            };
          return (0, p.jsxs)("div", {
            className: (0, V.A)(e.DragBox, g && e.Dragging, ne && e.Invalid, F),
            onDragEnter: M,
            onDragOver: G,
            onDragLeave: z,
            onDrop: v,
            children: [
              c,
              x &&
                (0, p.jsx)("input", {
                  type: "file",
                  style: { display: "none" },
                  name: "upload",
                  accept: I.join(","),
                  multiple: b,
                  ref: x,
                  onChange: i,
                }),
            ],
          });
        }
      },
      50233: (ce, he, n) => {
        "use strict";
        n.d(he, { I7: () => V, Tc: () => K, _Q: () => I, bi: () => J });
        var p = n(7850),
          C = n(18210),
          e = n(91988);
        const J = 1;
        async function V(b) {
          return new Promise((x) => {
            const c = new Image();
            (c.onload = () => {
              const g = document.createElement("canvas");
              (g.width = c.width), (g.height = c.height);
              const l = g.getContext("2d");
              (l.filter = "grayscale(100%)"),
                l.drawImage(c, 0, 0, c.width, c.height);
              const ne = g.toDataURL("image/png");
              x(ne);
            }),
              (c.src = b);
          });
        }
        function j(b, x, c, g) {
          const l = new FileReader();
          (l.onload = (ne) => {
            const $ = new Image();
            ($.onload = () => {
              const M = document.createElement("canvas");
              let G = $.width,
                z = $.height;
              G > z
                ? G > x && ((z *= x / G), (G = x))
                : z > c && ((G *= c / z), (z = c)),
                (M.width = G),
                (M.height = z),
                M.getContext("2d").drawImage($, 0, 0, G, z);
              const i = M.toDataURL(b.type);
              g(i);
            }),
              ($.src = ne.target?.result);
          }),
            l.readAsDataURL(b);
        }
        function B(b) {
          const x = b.lastIndexOf(".");
          return x !== -1 && x > b.lastIndexOf("/") ? b.slice(0, x) : b;
        }
        async function F(b, x = 0, c = 0, g = !1) {
          return new Promise((l, ne) => {
            b || l({ success: !1, filename: b.name });
            const $ = new FileReader();
            ($.onloadend = () => {
              const M = b.type,
                G = b.name;
              if (
                ((M === "image/png" || G.endsWith(".png")) &&
                  $.result.toString().startsWith("data:image/png;base64,")) ||
                ((M === "image/jpeg" ||
                  G.endsWith(".jpg") ||
                  G.endsWith(".jpeg")) &&
                  ($.result.toString().startsWith("data:image/jpeg;base64,") ||
                    $.result.toString().startsWith("data:image/jpg;base64,")))
              ) {
                const z = new Image();
                (z.onload = () => {
                  g && z.width != z.height
                    ? (console.error(
                        "Image width and height don't match, must be square",
                      ),
                      l({
                        success: !1,
                        filename: b.name,
                        error: (0, C.we)(
                          "#AchievementEditor_Image_Error_NotSquare",
                        ),
                        image: {
                          image: z.src,
                          imageType: J,
                          filenameWithoutExtension: B(G),
                        },
                      }))
                    : x > 0 && (z.width < x || z.height < x)
                      ? (console.error("Image too small"),
                        l({
                          success: !1,
                          filename: b.name,
                          error: (0, C.we)(
                            "#AchievementEditor_Image_Error_TooSmall",
                          ),
                          image: {
                            image: z.src,
                            imageType: J,
                            filenameWithoutExtension: B(G),
                          },
                        }))
                      : c > 0 && (z.width > c || z.height > c)
                        ? j(b, c, c, (v) => {
                            l({
                              success: !0,
                              filename: b.name,
                              image: {
                                image: v,
                                imageType: J,
                                filenameWithoutExtension: B(G),
                              },
                            });
                          })
                        : l({
                            success: !0,
                            filename: b.name,
                            image: {
                              image: $.result,
                              imageType: J,
                              filenameWithoutExtension: B(G),
                            },
                          });
                }),
                  (z.src = $.result);
              } else
                console.error("unknown content types: " + M),
                  l({
                    success: !1,
                    filename: b.name,
                    error: (0, C.we)(
                      "#AchievementEditor_Image_Error_UnknownContentType",
                    ),
                  });
            }),
              $.readAsDataURL(b);
          });
        }
        async function K(b) {
          const {
            files: x,
            forceSquare: c,
            maxDimension: g,
            minDimension: l,
          } = b;
          return await Promise.all(x.map(($) => F($, l, g, c)));
        }
        function I(b) {
          const {
              className: x,
              allowMultiple: c,
              fileInputRef: g,
              onUpload: l,
              onBulkUpload: ne,
              children: $,
            } = b,
            M = async (z) => {
              const v = await K({ ...b, files: Array.from(z) });
              l
                ? v[0].success && l(v[0].image)
                : ne(v.filter((i) => i.success).map((i) => i.image));
            },
            G = ["image/png", "image/jpeg"];
          return (0, p.jsx)(e.z, {
            onUpload: M,
            className: x,
            accept: G,
            multiple: c,
            fileInputRef: g,
            children: $,
          });
        }
      },
      30263: (ce, he, n) => {
        "use strict";
        n.d(he, {
          $q: () => K,
          Cm: () => I,
          WL: () => b,
          ox: () => c,
          qF: () => g,
          wI: () => x,
        });
        var p = n(7850),
          C = n(7125),
          e = n(15252),
          J = n(90626),
          V = n(36118),
          j = n(36707),
          B = n(95415),
          F = n.n(B);
        function K(l, ne, $) {
          const [M, G] = (0, J.useState)(ne(l)),
            z = (v) => {
              const i = ne(v);
              ($ || M.success) && G(i);
            };
          return {
            value: M.data,
            setValue: z,
            isValid: M.success,
            issues: M.issues,
          };
        }
        function I(l) {
          return (ne) => {
            const $ = l.safeParse(ne);
            return {
              success: $.success,
              data: $.data,
              input: ne,
              issues: $.success
                ? void 0
                : $.error?.issues.map((M) => M.message),
            };
          };
        }
        function b(l) {
          const {
              label: ne,
              value: $,
              setValue: M,
              isValid: G,
              issues: z,
              ...v
            } = l,
            i = (0, J.useId)(),
            [S, T] = (0, J.useState)(!1),
            k = (H) => {
              T(!0), M(H);
            },
            q = () => {
              T(!0);
            };
          return (0, p.jsx)(g, {
            labelId: i,
            label: ne,
            isValid: !S || G,
            issues: z,
            children: (0, p.jsx)(x, {
              children: (0, p.jsx)(C.k, {
                value: $,
                onTextChange: k,
                onBlur: q,
                "aria-labelledby": i,
                ...v,
              }),
            }),
          });
        }
        function x(l) {
          const { children: ne } = l;
          return (0, p.jsx)("div", {
            className: B.ValidatedControl,
            children: ne,
          });
        }
        function c(l) {
          const { label: ne, description: $, labelId: M, children: G } = l;
          return (0, p.jsxs)("div", {
            children: [
              ne && (0, p.jsx)("h2", { id: M, children: ne }),
              $ && (0, p.jsx)(e.EY, { contrast: "description", children: $ }),
              G,
            ],
          });
        }
        function g(l) {
          const {
            label: ne,
            description: $,
            labelId: M,
            issues: G,
            isValid: z,
            children: v,
          } = l;
          return (0, p.jsxs)("div", {
            className: (0, j.A)(
              B.ValidatedInputContainer,
              z ? void 0 : B.Invalid,
            ),
            children: [
              (0, p.jsx)(c, {
                label: ne,
                description: $,
                labelId: M,
                children: v,
              }),
              !z &&
                G !== void 0 &&
                (typeof G == "string"
                  ? (0, p.jsxs)("span", {
                      className: B.ErrorDetail,
                      children: [
                        (0, p.jsx)(V.eTF, { color: "var(--color-invalid)" }),
                        " ",
                        G,
                      ],
                    })
                  : G.map((i, S) =>
                      (0, p.jsxs)(
                        "span",
                        {
                          className: B.ErrorDetail,
                          children: [
                            (0, p.jsx)(V.eTF, {
                              color: "var(--color-invalid)",
                            }),
                            " ",
                            i,
                          ],
                        },
                        S,
                      ),
                    )),
            ],
          });
        }
      },
      33654: (ce, he, n) => {
        "use strict";
        n.d(he, {
          Gx: () => V,
          _w: () => K,
          ap: () => e,
          cG: () => F,
          iN: () => j,
          pc: () => B,
          sq: () => J,
        });
        var p = n(7850),
          C = n(18210);
        function e(I) {
          if (!I || I.trim().length == 0) return null;
          try {
            return JSON.parse(I);
          } catch {
            return null;
          }
        }
        function J(I, b) {
          const x = new Set();
          return I.filter((c) => {
            const g = b(c);
            return x.has(g) ? !1 : (x.add(g), !0);
          });
        }
        function V(...I) {
          return [...new Set(I.flat())];
        }
        function j(I) {
          const { href: b, children: x } = I;
          return b
            ? (0, p.jsx)("a", { ...I, children: x })
            : (0, p.jsx)(p.Fragment, { children: x });
        }
        function B(I, b) {
          const x = {
              sText: (0, C.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable",
              ),
              sTooltip: (0, C.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
            c = {
              sText: (0, C.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive",
              ),
              sTooltip: void 0,
              bPrereleaseOrReleased: !1,
            },
            g = {
              released: {
                sText: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released",
                ),
                sTooltip: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              prerelease: {
                sText: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease",
                ),
                sTooltip: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              ownersonly: {
                sText: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly",
                ),
                sTooltip: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              preloadonly: {
                sText: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly",
                ),
                sTooltip: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              disabled: {
                sText: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled",
                ),
                sTooltip: (0, C.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
            };
          let l = x;
          return I in g ? (l = g[I]) : b || (l = c), l;
        }
        function F(I) {
          if (I.type == "seasonalsale") {
            const b = I.name.toLowerCase();
            if (b.includes("spring")) return "#dd71d4";
            if (b.includes("summer")) return "#29c6ec";
            if (b.includes("autumn")) return "#ac240c";
            if (b.includes("winter")) return "#01704f";
          }
        }
        function K(I) {
          let b = 0;
          for (let l = 0; l < I.length; l++)
            b = I.charCodeAt(l) + ((b << 5) - b);
          const x = b % 360,
            c = 50 + (b % 50),
            g = 40 + (b % 30);
          return `hsl(${x}, ${c}%, ${g}%, 0.25)`;
        }
      },
      77959: (ce, he, n) => {
        "use strict";
        n.d(he, { b: () => $, a: () => c });
        var p = n(7850),
          C = n(40358),
          e = n(90626),
          J = n(98609);
        function V(v, i) {
          if (!(!v?.asset_url_format || typeof v[i] != "string"))
            return (
              J.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              v.asset_url_format.replace("${FILENAME}", v[i])
            );
        }
        var j = n(71421),
          B = n(36707),
          F = n(18210),
          K = n(3166),
          I = n(28325),
          b = n(6777),
          x = n(33654);
        function c(v) {
          const i = e.useMemo(() => z(), []);
          return (0, p.jsx)(b.$, {
            title: (0, F.we)("#Dashboard_RecentApps_Title"),
            headerElement: (0, p.jsx)(l, {}),
            children: (0, p.jsxs)("div", {
              className: I.AppTileContainer,
              children: [
                !i.length && (0, p.jsx)(g, {}),
                i.map((S) => (0, p.jsx)(ne, { app: S }, S.appid)),
              ],
            }),
          });
        }
        function g(v) {
          const i = K.TS.PARTNER_BASE_URL + "apps/";
          return (0, p.jsxs)("div", {
            className: I.NoRecentApps,
            children: [
              (0, F.we)("#Dashboard_RecentApps_NoRecent"),
              " ",
              (0, p.jsxs)("a", {
                href: i,
                target: "_blank",
                children: [" ", (0, F.we)("#Dashboard_RecentApps_ViewAll")],
              }),
            ],
          });
        }
        function l(v) {
          const i = K.TS.PARTNER_BASE_URL + "apps/";
          return (0, p.jsx)("div", {
            className: I.ViewAppsContainer,
            children: (0, p.jsx)("div", {
              className: I.ViewAppsLink,
              children: (0, p.jsx)("a", {
                href: i,
                children: (0, F.we)("#Dashboard_RecentApps_ViewAllShort"),
              }),
            }),
          });
        }
        function ne(v) {
          const { app: i } = v,
            S = i.appid,
            { data: T } = (0, C.lv)({ appid: S }),
            k = K.TS.PARTNER_BASE_URL + "apps/landing/" + S,
            q = V(T, "header");
          return (0, p.jsxs)("div", {
            className: I.AppTile,
            children: [
              q &&
                (0, p.jsx)(j.he, {
                  toolTipContent: i.name,
                  children: (0, p.jsx)("div", {
                    className: I.AppTileImage,
                    children: (0, p.jsx)("a", {
                      href: k,
                      target: "_blank",
                      children: (0, p.jsx)("img", { src: q }),
                    }),
                  }),
                }),
              !q &&
                (0, p.jsx)("div", {
                  className: I.AppTileImagePlaceholder,
                  children: (0, p.jsx)("a", {
                    href: k,
                    target: "_blank",
                    children: i.name,
                  }),
                }),
              (0, p.jsx)($, { app: i }),
            ],
          });
        }
        function $(v) {
          const { app: i } = v,
            S = i.appid,
            { data: T } = (0, C.J$)({ appid: S });
          return (0, p.jsxs)("div", {
            className: I.AppLabels,
            children: [
              (0, p.jsx)(M, { appType: i.type }),
              (0, p.jsx)(G, {
                releaseState: i.releasestate,
                hasStoreItem: T?.visible,
              }),
            ],
          });
        }
        function M(v) {
          const { appType: i } = v;
          let S = null,
            T = null;
          return (
            i == "Game"
              ? (S = (0, F.we)("#Dashboard_RecentApps_Game"))
              : i == "DLC"
                ? ((S = (0, F.we)("#Dashboard_RecentApps_DLC")), (T = I.DLC))
                : i == "Beta"
                  ? ((S = (0, F.we)("#Dashboard_RecentApps_Playtest")),
                    (T = I.Playtest))
                  : i == "Demo"
                    ? ((S = (0, F.we)("#Dashboard_RecentApps_Demo")),
                      (T = I.Demo))
                    : i == "Music" &&
                      ((S = (0, F.we)("#Dashboard_RecentApps_Music")),
                      (T = I.Music)),
            !!S &&
              (0, p.jsx)("div", {
                className: (0, B.A)(I.AppType, T),
                children: S,
              })
          );
        }
        function G(v) {
          const { releaseState: i, hasStoreItem: S } = v,
            T = (0, x.pc)(i, S);
          return (
            i != "released" &&
            (0, p.jsx)("div", {
              className: (0, B.A)(I.AppRelease),
              children: T.sText,
            })
          );
        }
        function z() {
          const v = (0, K.Tc)("rgRecentApps", "application_config"),
            i = v ? Object.keys(v).map((q) => v[q]) : [],
            S = (0, K.Tc)("rgRecentUnreleasedApps", "application_config"),
            T = S ? Object.keys(S).map((q) => S[q]) : [],
            k = (0, x.Gx)(i, T);
          return k.sort((q, H) => q.nOrder - H.nOrder), k;
        }
      },
      6777: (ce, he, n) => {
        "use strict";
        n.d(he, { $: () => j });
        var p = n(7850),
          C = n(90626),
          e = n(18210),
          J = n(6853),
          V = n.n(J);
        const j = C.forwardRef((B, F) => {
          const {
            title: K,
            count: I,
            description: b,
            children: x,
            beta: c,
            headerElement: g,
          } = B;
          return (0, p.jsxs)("div", {
            className: J.Section,
            ref: F,
            children: [
              (0, p.jsxs)("div", {
                className: J.Header,
                children: [
                  (0, p.jsxs)("div", {
                    className: J.Title,
                    children: [
                      K,
                      I != null &&
                        (0, p.jsx)("span", { className: J.Count, children: I }),
                      c &&
                        (0, p.jsx)("span", {
                          className: J.BetaCallout,
                          children: (0, e.we)("#NewToolTitleSuffix_Beta"),
                        }),
                    ],
                  }),
                  g,
                ],
              }),
              b && (0, p.jsx)("div", { className: J.Body, children: b }),
              x,
            ],
          });
        });
      },
      13623: (ce, he, n) => {
        "use strict";
        n.d(he, { On: () => v });
        var p = n(72609),
          C = n(68312),
          e = n(20194),
          J = n(72604),
          V = n(59514);
        const j = 0,
          B = {
            GlobalProgressAsc: function (q, H) {
              return (
                (q.global_unlock_percent ?? 0) - (H.global_unlock_percent ?? 0)
              );
            },
            GlobalProgressDesc: function (q, H) {
              return (
                (H.global_unlock_percent ?? 0) - (q.global_unlock_percent ?? 0)
              );
            },
          },
          F = 10;
        function K(q) {
          return q?.global_unlock_percent === void 0
            ? !1
            : q.global_unlock_percent <= F;
        }
        function I(q) {
          return (q?.groups_achievable?.total ?? 0) != 0;
        }
        function b() {
          return new Intl.DateTimeFormat(GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: !0,
          });
        }
        function x(q) {
          return b().format(new Date(q * 1e3));
        }
        function c(q) {
          return q >= 17891964e-1;
        }
        function g(q, ...H) {
          return ["achievements", q, ...H];
        }
        const l = (q) => g(q, "schema");
        function ne(q, H) {
          if (!(H === void 0 || H === ""))
            return `${p.TS.BASE_URL_SHARED_CDN}community_assets/images/apps/${q}/${H}`;
        }
        async function $(q, H, P) {
          const oe = await V.xtC.GetGameAchievements(q, {
            appid: H,
            language: P,
          });
          if (oe.GetEResult() !== J.R)
            throw (
              (console.error(
                "Received error from GetGameAchievements",
                oe.GetEResult(),
              ),
              new Error(`Error from GetGameAchievements: ${oe.GetEResult()}`))
            );
          const W = {};
          W[j] = {
            id: j,
            archived: !1,
            developeronly: !1,
            ispublic: !0,
            dlcappid: 0,
            order: -1,
            achievements: [],
          };
          const ee = oe.Body().groups().toString();
          oe
            .Body()
            .groups()
            .forEach((D) => {
              const y = D.groupid();
              W[y] = {
                id: y,
                name: D.localized_name(),
                archived: D.archived() ?? !1,
                ispublic: D.ispublic() ?? !0,
                developeronly: D.developeronly() ?? !1,
                dlcappid: D.dlcappid() ?? 0,
                order: D.order() ?? 0,
                achievements: [],
              };
            }),
            oe
              .Body()
              .toObject()
              ?.achievements?.forEach((D) => {
                const y = D.groupid ?? j;
                W[y].achievements.push({
                  internal_key: D.internal_key ?? 0,
                  api_name: D.internal_name ?? "",
                  name: D.localized_name,
                  description: D.localized_desc,
                  hidden: D.hidden ?? !1,
                  archived: D.archived ?? !1,
                  icon_achieved: ne(H, D.icon),
                  icon_unachieved: ne(H, D.icon_gray),
                  global_unlock_percent:
                    D.player_percent_unlocked === void 0
                      ? void 0
                      : Number.parseFloat(D.player_percent_unlocked),
                  groupid: D.groupid ?? j,
                  min_progress: D.min_progress_int ?? D.min_progress_float,
                  max_progress: D.max_progress_int ?? D.max_progress_float,
                });
              });
          const te = Object.values(W)
            .filter((D) => D.achievements.length > 0)
            .sort((D, y) => D.order - y.order);
          return (
            te.forEach((D) => D.achievements.sort(B.GlobalProgressDesc)),
            {
              appid: H,
              language: P,
              groups: te,
              schema_hash: oe.Body()?.schema_hash() ?? 0,
              schema_version: oe.Body()?.schema_version() ?? 0,
            }
          );
        }
        function M(q, H) {
          return g(q, "user_achievements", H);
        }
        async function G(q, H, P) {
          if (P == "" || P == "0")
            return {
              appid: H,
              steamid: P,
              achievements: {},
              groups: {},
              schema_hash: 0,
            };
          const oe = await PlayerService.GetUserAchievements(q, {
            appid: H,
            steamid: P,
          });
          if (
            oe.GetEResult() === k_EResultAccessDenied ||
            oe.GetEResult() === k_EResultAccountNotFound
          )
            return {
              appid: H,
              steamid: P,
              achievements: {},
              groups: {},
              schema_hash: 0,
            };
          if (oe.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from GetUserAchievements",
                oe.GetEResult(),
              ),
              new Error(`Error from GetUserAchievements: ${oe.GetEResult()}`))
            );
          const W = (oe.Body()?.achievements() ?? []).reduce((te, se) => {
              const D = se.internal_key();
              return (
                (te[D] = {
                  internal_key: D,
                  unlocked: se.unlocked(),
                  unlock_time: se.unlock_time(),
                  progress: se.progress_int() ?? se.progress_float(),
                }),
                te
              );
            }, {}),
            ee = (oe.Body()?.groups() ?? []).reduce((te, se) => {
              const D = se.groupid();
              return (
                (te[D] = {
                  groupid: D,
                  is_achievable: se.is_achievable(),
                  completion_achievements: se.completed_achievements() ?? 0,
                }),
                te
              );
            }, {});
          return {
            appid: H,
            steamid: P,
            achievements: W,
            groups: ee,
            schema_hash: oe.Body()?.schema_hash() ?? 0,
          };
        }
        function z(q, H) {
          return {
            queryKey: l(H),
            queryFn: async () => {
              const P = p.TS.LANGUAGE;
              return $(q, H, P);
            },
            staleTime: 3600 * 1e3,
          };
        }
        function v(q) {
          const H = (0, C.KV)();
          return (0, e.I)(z(H, q));
        }
        function i(q, H, P) {
          return {
            queryKey: GetUserAchievementsQueryKey(H, P),
            queryFn: async () => GetUserAchievements(q, H, P),
            staleTime: 600 * 1e3,
          };
        }
        function S(q, H) {
          const P = useActiveServiceTransport();
          return useQuery(i(P, q, H));
        }
        function T(q, H) {
          const P = useActiveServiceTransport(),
            oe = v(q),
            W = useQuery({ ...i(P, q, H ?? ""), enabled: !!H }),
            ee = !!H,
            te = oe.data,
            se = ee ? W.data : void 0,
            D = te != null && (!ee || se !== void 0),
            y = () => (D ? GetAchievementsSummary(te.groups, se) : void 0),
            Y = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                q,
                "summary",
                H ?? "",
                oe.dataUpdatedAt,
                ee ? W.dataUpdatedAt : 0,
              ),
              queryFn: () => {
                const fe = y();
                if (fe === void 0)
                  throw new Error("No achievements schema to summarize");
                return fe;
              },
              initialData: y,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: D,
            }),
            A = ee ? [oe, W] : [oe],
            le = A.find((fe) => fe.data === void 0),
            Z = le?.isPending ?? !1,
            N = A.find((fe) => fe.isError),
            ae = le ? void 0 : Y.data;
          return {
            isPending: Z,
            isError: !Z && ae === void 0,
            error: N?.error ?? null,
            data: ae,
          };
        }
        async function k(q, H) {
          const P = GetAppAchievementsQueryKey(H);
          await q.invalidateQueries({ queryKey: P });
        }
      },
      79611: (ce, he, n) => {
        "use strict";
        n.d(he, { $: () => v, v: () => i });
        var p = n(7850),
          C = n(64238),
          e = n.n(C),
          J = n(69041),
          V = n(8928),
          j = n(69289),
          B = n(3877),
          F = n(73406),
          K = n(60351),
          I = n(68031),
          b = n(80549);
        function x(S) {
          const {
              size: T = "3",
              loading: k = !0,
              children: q,
              color: H,
              variant: P,
              ...oe
            } = S,
            W = (0, b.f)("LoadingSpinner", P);
          return q || !k
            ? (0, p.jsxs)(K.az, {
                position: "relative",
                ...oe,
                width: "fit-content",
                children: [
                  (0, p.jsx)("div", {
                    "data-visibility": !k,
                    className: F.ChildContainer,
                    children: q,
                  }),
                  k &&
                    (0, p.jsx)(I.s, {
                      position: "absolute",
                      inset: "0",
                      justify: "center",
                      align: "center",
                      children: (0, p.jsx)(c, {
                        size: T,
                        color: H,
                        variant: W,
                      }),
                    }),
                ],
              })
            : (0, p.jsx)(c, { size: T, color: H, variant: W, ...oe });
        }
        function c(S) {
          const { className: T, color: k, ...q } = (0, j.mz)(S, g);
          return (0, p.jsx)("div", {
            "data-accent-color": k,
            className: e()(T, F.Spinner),
            ...q,
          });
        }
        const g = [
          ...V.L,
          { prop: "size", responsive: !0, className: (S) => F[`Size-${S}`] },
          { prop: "variant", className: (S) => F[`Variant-${S}`] },
        ];
        var l = n(24660),
          ne = n(3166);
        function $(S) {
          const {
              variant: T,
              size: k = "2",
              minWidth: q = "fit-content",
              color: H,
              loading: P,
              children: oe,
              onClick: W,
              icon: ee,
              focusable: te,
              navProps: se,
              ...D
            } = S,
            y = (0, ne.Qn)(),
            Y = P
              ? (0, p.jsx)(x, {
                  size: k,
                  color: H,
                  variant: "bright",
                  children: oe,
                })
              : oe,
            A = P ? void 0 : W,
            le = te ?? se?.focusable ?? !!A,
            Z = (0, b.f)("Button", T),
            N = {
              type: "button",
              ...(0, j.mz)(
                {
                  ...D,
                  variant: Z,
                  size: k,
                  minWidth: q,
                  color: H,
                  className: e()(J.Button, ee && J.Icon),
                  onClick: A,
                },
                z,
              ),
              children: Y,
            };
          return y && (le || se)
            ? (0, p.jsx)(l.fu, { ...N, ...(se || {}), focusable: le })
            : (0, p.jsx)("button", { ...N });
        }
        function M(S) {
          const {
              variant: T,
              size: k = "2",
              minWidth: q = "fit-content",
              disabled: H,
              icon: P,
              focusable: oe,
              navProps: W,
              ...ee
            } = S,
            te = (0, ne.Qn)(),
            se = (0, b.f)("Button", T),
            D = H ? G : void 0,
            y = (0, j.mz)(
              {
                onClick: D,
                "aria-disabled": H,
                ...ee,
                variant: se,
                size: k,
                minWidth: q,
                className: e()(J.Button, P && J.Icon, (0, B.T)()),
              },
              z,
            );
          return te && (oe || W)
            ? (0, p.jsx)(l.Ii, { ...y, ...(W || {}), focusable: oe })
            : (0, p.jsx)("a", { ...y });
        }
        function G(S) {
          S.preventDefault();
        }
        const z = [
            ...V.L,
            { prop: "size", responsive: !0, className: (S) => J[`Size-${S}`] },
            { prop: "variant", className: (S) => J[`Variant-${S}`] },
            { prop: "color", dataProperty: (S) => ["accent-color", `${S}`] },
            {
              prop: "width",
              className: J.Width,
              cssProperty: "--width",
              responsive: !0,
            },
            {
              prop: "minWidth",
              className: J.MinWidth,
              cssProperty: "--min-width",
              responsive: !0,
            },
          ],
          v = $,
          i = M;
      },
      99631: (ce, he, n) => {
        "use strict";
        n.d(he, { C: () => J, I: () => V });
        var p = n(7850),
          C = n(90626),
          e = n(7125);
        const J = Symbol("CoercingTextInputNotParseable");
        function V(j) {
          const {
              value: B,
              onValueChange: F,
              valueToString: K,
              valueFromString: I,
              checkValidText: b,
              onBlur: x,
              onKeyDown: c,
              ...g
            } = j,
            [l, ne] = (0, C.useState)(null),
            $ = l ?? (B === void 0 ? "" : K(B)),
            M = (i) => {
              const S = I(i);
              S !== J && i === K(S)
                ? (ne(null), F(S))
                : (!b || b(i, S)) && ne(i);
            },
            G = () => {
              if (l !== null) {
                const i = I(l);
                i !== J && F(i), ne(null);
              }
            },
            z = (i) => {
              G(), x && x(i);
            },
            v = (i) => {
              i.key === "Enter" && G(), c && c(i);
            };
          return (0, p.jsx)(e.k, {
            value: $,
            onTextChange: M,
            onKeyDown: v,
            onBlur: z,
            ...g,
          });
        }
      },
      74769: (ce, he, n) => {
        "use strict";
        n.d(he, { G3: () => Z });
        var p = n(7850),
          C = n(90626),
          e = n(86946),
          J = n(12204),
          V = n(15252),
          j = n(7125),
          B = n(63029),
          F = n(92142),
          K = n(92148),
          I = n(59366),
          b = n(60351),
          x = n(76854),
          c = n(68031),
          g = n(36707),
          l = n(39790),
          ne = n(94381),
          $ = n(71742),
          M = n(82277),
          G = n.n(M),
          z = n(80549),
          v = n(3166);
        function i(u) {
          const {
              children: w,
              state: L,
              placement: O = "bottom-end",
              popoverWidth: Q = "dropdown",
              popoverMaxHeight: U,
              ...R
            } = u,
            [E, _] = (0, C.useState)(void 0);
          (0, C.useEffect)(() => _(void 0), [L.bOpen]);
          const ve = (0, v.Qn)(),
            de = (0, C.useRef)(null),
            pe = (0, C.useRef)(null),
            h = (0, C.useMemo)(
              () => L.rgFilteredOptions.findIndex((s) => s === L.selectedValue),
              [L.selectedValue, L.rgFilteredOptions],
            ),
            m = (0, F.T)({
              open: L.bOpen,
              onOpenChange: L.setOpen,
              width: Q,
              maxHeight: U,
              placement: O,
              gutter: "4",
              activeIndex: L.activeIndex,
              setActiveIndex: L.setActiveIndex,
              selectedIndex: h,
              setSelectedIndex: (s) =>
                L.onItemSelectionChange(L.rgFilteredOptions[s]),
              interactions: { click: !0, virtualItemFocus: !ve },
              role: "combobox",
              scroll: !1,
            }),
            r = {
              ...L,
              ...R,
              focusedValue: E,
              onFocusChange: _,
              refPopover: de,
              refScrollElement: pe,
              setOpen: (s) => {
                if (s) {
                  let o = null;
                  L.multiselect
                    ? (o = Array.isArray(L.selectedValue)
                        ? L.selectedValue[0]
                        : null)
                    : (o = L.selectedValue),
                    _(o),
                    L.onInputChange("");
                }
                L.setOpen(s);
              },
              onIndexSelected: (s) => {
                const o = m.elementsRef.current;
                o && o[s] && o[s].click();
              },
              popoverPlacement: m.floating.placement,
            };
          return (0, p.jsx)(re.Provider, {
            value: r,
            children: (0, p.jsx)(F.k.Root, { state: m, children: w }),
          });
        }
        function S(u) {
          const {
              refPopover: w,
              inputValue: L,
              onInputChange: O,
              activeIndex: Q,
              popoverPlacement: U,
              multiselect: R,
              setActiveIndex: E,
              setOpen: _,
              filterPlaceholder: ve,
              onIndexSelected: de,
              refScrollElement: pe,
            } = ue("<Combobox.Options>"),
            h = (t) => {
              t && t.focus({ preventScroll: !0 });
            },
            m = (t) => {
              t.key === "Enter" &&
                Q !== null &&
                (de(Q),
                R || (E(null), _(!1)),
                t.preventDefault(),
                t.stopPropagation());
            },
            r = U.startsWith("top"),
            s = (0, p.jsx)(b.az, {
              overflow: "auto",
              ref: pe,
              style: { overscrollBehavior: "contain" },
              children: u.children,
            }),
            o = (t) => {
              (t.key === "Home" || t.key === "End") && t.stopPropagation();
            };
          return (0, p.jsx)(F.k.Positioner, {
            ref: w,
            children: (0, p.jsxs)(c.s, {
              direction: "column",
              maxHeight: "var(--popover-max-height)",
              children: [
                r && s,
                (0, p.jsx)(b.az, {
                  flexShrink: "0",
                  className: (0, g.A)(M.FilterBorder, r ? M.Top : M.Bottom),
                  children: (0, p.jsx)(j.k, {
                    margin: "3",
                    variant: "inset",
                    radius: "sm",
                    value: L,
                    onTextChange: O,
                    onKeyDown: m,
                    onKeyDownCapture: o,
                    placeholder: ve,
                    inputRef: h,
                    autoComplete: "off",
                  }),
                }),
                !r && s,
              ],
            }),
          });
        }
        const T = (0, C.createContext)(null);
        function k(u) {
          const { items: w, renderItem: L, overscan: O = 5, ...Q } = u,
            {
              bOpen: U,
              refPopover: R,
              refScrollElement: E,
            } = ue("<ComboboxVirtualizedOptions>"),
            [_, ve] = (0, C.useState)(!1),
            de = U && !!R.current && !!E.current;
          (0, C.useEffect)(() => {
            de !== _ && ve(de);
          }, [de, _]);
          const pe = (0, K.Te)({
            count: _ ? w.length : Math.min(w.length, 3),
            getScrollElement: () => E.current,
            enabled: U,
            measureElement: I.ZO,
            ...Q,
          });
          return (0, p.jsx)(S, {
            children: (0, p.jsx)(T, {
              value: pe,
              children: (0, p.jsx)(b.az, {
                height: `${pe.getTotalSize()}px`,
                position: "relative",
                width: "100%",
                children: pe.getVirtualItems().map((h) => L(w[h.index], h, pe)),
              }),
            }),
          });
        }
        function q(u) {
          const { virtualItem: w, children: L } = u,
            O = (0, C.useContext)(T);
          return (
            (0, $.wT)(O, "Virtual item rendered outside of a virtualizer!"),
            (0, p.jsx)(b.az, {
              position: "absolute",
              width: "100%",
              style: { top: 0, left: 0, transform: `translateY(${w.start}px)` },
              ref: O.measureElement,
              "data-index": w.index,
              children: L,
            })
          );
        }
        function H(u) {
          const { virtualItem: w, ...L } = u;
          return (0, p.jsx)(q, {
            virtualItem: w,
            children: (0, p.jsx)(oe, { ...L }),
          });
        }
        function P(u) {
          const { virtualItem: w, children: L } = u;
          return (0, p.jsx)(q, { virtualItem: w, children: L });
        }
        function oe(u) {
          const { value: w, children: L, disabled: O } = u,
            {
              onItemSelectionChange: Q,
              selectedValue: U,
              multiselect: R,
              maxSelected: E,
            } = ue("<ComboboxTrigger>");
          let _ = !1,
            ve = !1;
          R
            ? ((_ = Array.isArray(U) && U.includes(w)),
              (ve = !!E && Array.isArray(U) && U.length >= E))
            : (_ = w === U);
          const de = O || (ve && !_);
          return (0, p.jsxs)(F.k.Item, {
            onSelect: () => Q(w),
            selected: _,
            disabled: de,
            children: [
              R &&
                (0, p.jsxs)(c.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, p.jsx)(ne.S, { checked: _, variant: "dark" }),
                    L,
                  ],
                }),
              !R && L,
            ],
          });
        }
        function W(u) {
          const { children: w, beforeContent: L, render: O } = u,
            {
              bOpen: Q,
              setOpen: U,
              inputValue: R,
              onInputChange: E,
              selectedValue: _,
              focusedValue: ve,
              refScrollElement: de,
              onItemSelectionChange: pe,
              activeIndex: h,
              setActiveIndex: m,
              onFocusChange: r,
              rgFilteredOptions: s,
              onSelectionChange: o,
              multiselect: t,
              onClear: d,
              refPopover: a,
              clearable: f,
              filterPlaceholder: X,
              onIndexSelected: ie,
              popoverPlacement: ge,
              maxSelected: me,
              variant: Se,
              ...Ge
            } = ue("<ComboboxTrigger>"),
            He = { tabIndex: 0, children: w },
            we = t ? Array.isArray(_) && _.length > 0 : !!_,
            Ve =
              we && f
                ? (0, p.jsx)(B.g, {
                    onClick: d,
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : (0, p.jsx)(J.V, {}),
            xe = (0, z.f)("Combobox", Se),
            ye = (0, p.jsx)(e.j, {
              beforeContent: L,
              afterContent: Ve,
              hasValue: we,
              cursor: "pointer",
              tabIndex: 0,
              variant: xe,
              ...Ge,
            }),
            Ne = (0, x.Q)(O, ye, He, void 0);
          return (0, p.jsx)(F.k.Anchor, { children: Ne });
        }
        function ee(u) {
          return (0, p.jsx)(V.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            ...u,
          });
        }
        function te(u) {
          return (0, p.jsx)(V.EY, {
            contrast: "description",
            truncate: !0,
            ...u,
          });
        }
        function se(u, w) {
          if (typeof w == "string")
            return w.toLocaleLowerCase().includes(u.toLocaleLowerCase());
          try {
            return JSON.stringify(w)
              .toLocaleLowerCase()
              .includes(u.toLocaleLowerCase());
          } catch {}
          return (
            console.error(
              "Could not use default option filter on provided Comboxbox option. Custom filter function required.",
            ),
            !1
          );
        }
        function D(u) {
          return y(u, !1);
        }
        function y(u, w) {
          const {
              rgOptions: L,
              filter: O = se,
              filterPlaceholder: Q,
              selectedValue: U,
              onSelectionChange: R,
              maxSelected: E,
            } = u,
            [_, ve] = (0, C.useState)(""),
            [de, pe] = (0, C.useState)(!1),
            [h, m] = (0, C.useState)(null),
            r = (0, C.useMemo)(() => L.filter((ie) => O(_, ie)), [_, L, O]),
            s = typeof h == "number",
            o = r.length > 0,
            t = (0, C.useCallback)(
              (ie) => {
                ie && !s && o && m(0), ve(ie);
              },
              [s, o],
            ),
            d = (0, C.useCallback)(
              (ie) => {
                ie || t(""), pe(ie);
              },
              [t],
            ),
            a = (0, C.useCallback)(
              (ie) => {
                R(ie), w || d(!1);
              },
              [w, R, d],
            ),
            f = (ie) => {
              a(w ? [] : null), ie.stopPropagation(), ie.preventDefault();
            },
            X = (0, C.useCallback)(
              (ie) => {
                if (!w) a(ie);
                else if (!U) a([ie]);
                else {
                  const ge = U,
                    me = ge.indexOf(ie);
                  if (me === -1) a(ge.concat(ie));
                  else return a(ge.slice(0, me).concat(ge.slice(me + 1)));
                }
              },
              [a, U, w],
            );
          return {
            activeIndex: h,
            setActiveIndex: m,
            rgFilteredOptions: r,
            selectedValue: U,
            onSelectionChange: a,
            onItemSelectionChange: X,
            onClear: f,
            inputValue: _,
            onInputChange: t,
            bOpen: de,
            setOpen: d,
            filterPlaceholder: Q,
            multiselect: w,
            maxSelected: E,
          };
        }
        const Y = {
          Root: i,
          Option: oe,
          Options: S,
          VirtualizedOptions: k,
          VirtualizedOption: H,
          VirtualizedContent: P,
          Trigger: W,
          DefaultOptionFilter: se,
          Value: ee,
          Placeholder: te,
        };
        function A(u) {
          return u
            ? typeof u == "string"
              ? u
              : typeof u == "number"
                ? u.toString()
                : (console.error(
                    "Could not use default option labeler on Combobox option value. Custom labeler requried",
                    u,
                  ),
                  "")
            : "";
        }
        function le(u) {
          const {
              selectedValue: w,
              onSelectionChange: L,
              options: O,
              filter: Q,
              filterPlaceholder: U,
              placeholder: R,
              getOptionLabel: E = A,
              ..._
            } = u,
            ve = (0, C.useCallback)(
              (h, m) => (Q ? Q(h, m) : se(h, E(m))),
              [Q, E],
            ),
            de = D({
              onSelectionChange: L,
              selectedValue: w,
              rgOptions: O,
              filter: ve,
              filterPlaceholder: U,
            }),
            pe = w != null;
          return (0, p.jsxs)(Z.Root, {
            state: de,
            ..._,
            children: [
              (0, p.jsxs)(Z.Trigger, {
                children: [
                  pe && (0, p.jsx)(Z.Value, { children: E(w) }),
                  !pe && (0, p.jsx)(Z.Placeholder, { children: R }),
                ],
              }),
              (0, p.jsx)(Z.Options, {
                children: de.rgFilteredOptions.map((h) =>
                  (0, p.jsx)(oe, { value: h, children: E(h) }, E(h)),
                ),
              }),
            ],
          });
        }
        const Z = Object.assign(le, Y);
        function N(u) {
          return y(u, !0);
        }
        function ae(u) {
          const {
              selectedValue: w,
              onSelectionChange: L,
              options: O,
              filter: Q,
              filterPlaceholder: U,
              placeholder: R,
              getOptionLabel: E = A,
              maxSelected: _,
              ...ve
            } = u,
            de = (0, C.useCallback)(
              (r, s) => (Q ? Q(r, s) : se(r, E(s))),
              [Q, E],
            ),
            pe = N({
              onSelectionChange: L,
              selectedValue: w,
              rgOptions: O,
              filter: de,
              filterPlaceholder: U,
              maxSelected: _,
            }),
            h = Array.isArray(w) && w.length > 0;
          let m = "";
          if (h) {
            const r = w.map((s) => E(s));
            "ListFormat" in Intl
              ? (m = new Intl.ListFormat((0, l.ZO)().strISOCode).format(r))
              : (m = r.join(", "));
          }
          return (0, p.jsxs)(Z.Root, {
            state: pe,
            ...ve,
            children: [
              (0, p.jsxs)(Z.Trigger, {
                children: [
                  h && (0, p.jsx)(Z.Value, { children: m }),
                  !h && (0, p.jsx)(Z.Placeholder, { children: R }),
                ],
              }),
              (0, p.jsx)(Z.Options, {
                children: pe.rgFilteredOptions.map((r) =>
                  (0, p.jsx)(Z.Option, { value: r, children: E(r) }, E(r)),
                ),
              }),
            ],
          });
        }
        const fe = Object.assign(ae, Y),
          re = (0, C.createContext)(null);
        function ue(u) {
          const w = (0, C.useContext)(re);
          return (
            w || console.error(`${u} must be used within a <Combobox>!`), w
          );
        }
      },
      98929: (ce, he, n) => {
        "use strict";
        n.d(he, { F: () => e });
        var p = n(24089),
          C = n.n(p);
        function e() {
          return p.TextEntry;
        }
      },
      9656: (ce, he, n) => {
        "use strict";
        n.d(he, { F: () => I });
        var p = n(7850),
          C = n(90626),
          e = n(71742),
          J = n(13854),
          V = n(75),
          j = n.n(V),
          B = n(76854);
        const F = Object.assign(K, { Root: x, Track: g, Range: l, Handle: ne });
        function K(z) {
          const {
              value: v,
              onValueChange: i,
              onValueSettled: S,
              min: T,
              ...k
            } = z,
            q = [v],
            H = (0, C.useCallback)((oe) => i(oe[0]), [i]),
            P = (0, C.useCallback)((oe) => S?.(oe[0]), [S]);
          return (0, p.jsxs)(x, {
            ...k,
            min: T,
            onValueChange: H,
            onValueSettled: P,
            value: q,
            children: [
              (0, p.jsx)(g, { children: (0, p.jsx)(l, { start: T, end: v }) }),
              (0, p.jsx)(ne, {}),
            ],
          });
        }
        function I(z) {
          const { value: v } = z;
          return (0, p.jsxs)(x, {
            ...z,
            children: [
              (0, p.jsx)(g, {
                children: (0, p.jsx)(l, { start: v[0], end: v[1] }),
              }),
              (0, p.jsx)(ne, {}),
              (0, p.jsx)(ne, {}),
            ],
          });
        }
        const b = (0, C.createContext)(null);
        function x(z) {
          const { children: v, color: i, ...S } = z,
            {
              min: T,
              max: k,
              onValueChange: q,
              value: H,
              step: P = 1,
              onValueSettled: oe,
            } = z,
            W = (0, C.useRef)(null),
            ee = (0, C.useRef)(null),
            [te] = (0, C.useState)(() => new Set()),
            [se, D] = (0, C.useState)(!1);
          return (0, p.jsx)(b.Provider, {
            value: { ...S, handles: te, bDragActive: se },
            children: (0, p.jsx)("div", {
              className: V.SliderRoot,
              "data-accent-color": i,
              ref: W,
              onPointerDown: (y) => {
                if (W.current) {
                  if (
                    (y.target.setPointerCapture(y.pointerId),
                    typeof H != "number")
                  ) {
                    const Y = W.current.getBoundingClientRect(),
                      A = $(y.clientX - Y.left, [0, Y.width], [T, k]);
                    ee.current = { activeValueIndex: c(H, A), bMoved: !1 };
                  } else ee.current = { activeValueIndex: 0, bMoved: !1 };
                  D(!0);
                }
              },
              onPointerUp: (y) => {
                const Y = y.target;
                Y.hasPointerCapture(y.pointerId) &&
                  (Y.releasePointerCapture(y.pointerId),
                  oe && ee.current?.bMoved && oe(H),
                  D(!1));
              },
              onPointerMove: (y) => {
                if (
                  y.target.hasPointerCapture(y.pointerId) &&
                  W.current &&
                  ee.current
                ) {
                  const A = W.current.getBoundingClientRect(),
                    le = $(y.clientX - A.left, [0, A.width], [T, k]),
                    Z = M({ value: le, min: T, max: k, step: P }),
                    N = [...H];
                  (N[ee.current.activeValueIndex] = Z),
                    N.sort((ae, fe) => ae - fe),
                    (ee.current.activeValueIndex = N.indexOf(Z)),
                    (ee.current.bMoved = !0),
                    q(N);
                }
              },
              onClick: (y) => {
                if (!W.current || ee.current?.bMoved) return;
                const Y = W.current.getBoundingClientRect(),
                  A = $(y.clientX - Y.left, [0, Y.width], [T, k]),
                  le = M({ value: A, min: T, max: k, step: P }),
                  Z = c(H, A),
                  N = [...H];
                (N[Z] = le), q(N), oe && oe(N);
              },
              children: (0, p.jsx)("div", { className: V.Inner, children: v }),
            }),
          });
        }
        function c(z, v) {
          if (z.length <= 1) return z.length - 1;
          let i = 0,
            S = Math.abs(v - z[0]);
          for (let T = 1; T < z.length; T++) {
            const k = Math.abs(z[T] - v);
            k < S && ((i = T), (S = k));
          }
          return i;
        }
        function g(z) {
          const { render: v, ...i } = z;
          return (0, B.Q)(
            v,
            (0, p.jsx)("div", { className: V.SliderTrack }),
            i,
            void 0,
          );
        }
        function l(z) {
          const { start: v, end: i, render: S } = z,
            T = (0, C.useContext)(b);
          (0, e.wT)(T, "SliderRange must be used within a SliderRoot!");
          const { min: k, max: q } = T,
            H = G(v, k, q),
            P = 100 - G(i, k, q);
          return (0, B.Q)(
            S,
            (0, p.jsx)("div", {
              className: V.SliderRange,
              style: { "--pct-left": `${H}%`, "--pct-right": `${P}%` },
            }),
            {},
            void 0,
          );
        }
        function ne(z) {
          const { render: v } = z,
            i = (0, C.useContext)(b);
          (0, e.wT)(i, "SliderHandle must be used within a SliderRoot!");
          const {
              min: S,
              max: T,
              handles: k,
              value: q,
              step: H = 1,
              onValueChange: P,
              onValueSettled: oe,
            } = i,
            [W, ee] = (0, C.useState)(null),
            [te, se] = (0, C.useState)(-1);
          (0, C.useEffect)(
            () =>
              W ? (k.add(W), se(k.size - 1), () => k.delete(W)) : () => {},
            [W, k],
          );
          const D = te > -1,
            Y = { "--handle-pct": `${G(D ? q[te] : S, S, T)}%` },
            A = (Z) => {
              switch (Z.key) {
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowDown": {
                  const N = Z.key === "ArrowRight" || Z.key === "ArrowUp",
                    ae = H * (N ? 1 : -1),
                    fe = M({ value: q[te] + ae, min: S, max: T, step: H }),
                    re = [...q];
                  (re[te] = fe),
                    P(re),
                    oe && oe(re),
                    Z.preventDefault(),
                    Z.stopPropagation();
                  break;
                }
                case "PageUp":
                case "PageDown": {
                  const N = Z.key === "PageUp",
                    ae = Math.round((T - S) / 10) * (N ? 1 : -1),
                    fe = M({ value: q[te] + ae, min: S, max: T, step: H }),
                    re = [...q];
                  (re[te] = fe),
                    P(re),
                    oe && oe(re),
                    Z.preventDefault(),
                    Z.stopPropagation();
                  break;
                }
              }
            };
          D || (Y.display = "none");
          const le = {
            ref: ee,
            role: "slider",
            "aria-valuenow": q[te],
            "aria-valuemin": S,
            "aria-valuemax": T,
            tabIndex: 0,
            onKeyDown: A,
          };
          return (0, B.Q)(
            v,
            (0, p.jsx)("span", { className: V.SliderHandle, style: Y }),
            le,
            { value: q[te], bDragActive: i.bDragActive },
          );
        }
        function $(z, v, i) {
          if (v[0] === v[1] || i[0] === i[1]) return i[0];
          const T = ((i[1] - i[0]) / (v[1] - v[0])) * (z - v[0]) + i[0];
          return J.OQ(T, i[0], i[1]);
        }
        function M(z) {
          const { value: v, min: i, max: S, step: T } = z,
            q = Math.round((v - i) / T) / (1 / T);
          return J.OQ(q + i, i, S);
        }
        function G(z, v, i) {
          return ((z - v) / (i - v)) * 100;
        }
      },
      1522: (ce, he, n) => {
        "use strict";
        n.d(he, { f: () => F });
        var p = n(7850),
          C = n(3877),
          e = n(98929),
          J = n(86946),
          V = n(64238),
          j = n.n(V),
          B = n(80549);
        function F(K) {
          const {
              rows: I = 3,
              resize: b = "none",
              ref: x,
              value: c,
              onTextChange: g,
              onChange: l,
              disabled: ne,
              variant: $,
              ...M
            } = K,
            G = (i) => {
              ne || (g(i.target.value), l && l(i));
            },
            z = (0, B.f)("TextArea", $),
            v = (0, J.w)({
              ...M,
              className: j()((0, C.T)(), (0, e.F)()),
              style: { resize: b },
              cursor: "text",
              disabled: ne,
              variant: z,
            });
          return (0, p.jsx)("textarea", {
            ref: x,
            ...v,
            value: c || "",
            onChange: G,
            rows: I,
            readOnly: ne,
            "aria-disabled": ne,
          });
        }
      },
      7125: (ce, he, n) => {
        "use strict";
        n.d(he, { k: () => g });
        var p = n(7850),
          C = n(90626),
          e = n(64238),
          J = n.n(e),
          V = n(3877),
          j = n(98929),
          B = n(60351),
          F = n(86946),
          K = n(63029),
          I = n(18938),
          b = n(24660),
          x = n(80549),
          c = n(3166);
        function g(l) {
          const { extracted: ne, remaining: $ } = (0, B.A4)(l),
            {
              value: M,
              onTextChange: G,
              onTextClear: z,
              clearable: v,
              onChange: i,
              radius: S,
              variant: T,
              size: k,
              beforeContent: q,
              afterContent: H,
              inputRef: P,
              ref: oe,
              disabled: W,
              gamepadFocusable: ee = !0,
              status: te,
              ...se
            } = $,
            D = (0, c.Qn)(),
            y = (re) => {
              W || (G(re.target.value), i && i(re));
            },
            Y = () => {
              G(""), z && z();
            },
            A =
              M && v
                ? (0, p.jsx)(K.g, {
                    onClick: Y,
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : H,
            le = (0, x.f)("TextInput", T),
            Z = {
              ...ne,
              variant: le,
              size: k,
              radius: S,
              status: te,
              beforeContent: q,
              afterContent: A,
              ref: oe,
              disabled: W,
            },
            N = (0, C.useRef)(null),
            ae = (re) => {
              N.current && re.target !== N.current && N.current.focus();
            },
            fe = ee && D ? b.BA : "input";
          return (0, p.jsx)(F.j, {
            cursor: "text",
            ...Z,
            onClick: ae,
            children: (0, p.jsx)(fe, {
              ref: (0, I.Ue)(P, N),
              type: "text",
              "aria-disabled": W,
              readOnly: W,
              className: J()((0, V.T)(), (0, j.F)()),
              value: M || "",
              onChange: y,
              ...se,
            }),
          });
        }
      },
      95994: (ce, he, n) => {
        "use strict";
        n.d(he, { x: () => I });
        var p = n(7850),
          C = n(70182),
          e = n(64238),
          J = n.n(e),
          V = n(8928),
          j = n(69289),
          B = n(75180),
          F = n.n(B),
          K = n(3166);
        function I(x) {
          const { as: c = "div", ref: g, focusable: l, navProps: ne, ...$ } = x,
            M = (0, K.Qn)(),
            G = (0, j.mz)({ ...$, className: J()(B.Grid, x.className) }, b),
            z = l ?? ne?.focusable ?? !!$.onClick,
            v = (0, p.jsx)(c, { ref: g, ...G });
          return M
            ? (0, p.jsx)(C.J, {
                "flow-children": "grid",
                ...(ne || {}),
                focusable: z,
                children: v,
              })
            : v;
        }
        const b = [
          ...V.h,
          {
            prop: "display",
            responsive: !0,
            className: B.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: B.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: B.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: B.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: B.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: B.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: B.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: B.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: B.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: B.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: B.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: B.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: B.Gap,
            cssProperty: (x) => ["--grid-gap", `var(--spacing-${x})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: B.Gap,
            cssProperty: (x) => ["--grid-gap-x", `var(--spacing-${x})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: B.Gap,
            cssProperty: (x) => ["--grid-gap-y", `var(--spacing-${x})`],
          },
        ];
      },
      86336: (ce, he, n) => {
        "use strict";
        n.d(he, { Y: () => F });
        var p = n(7850),
          C = n(50122),
          e = n.n(C),
          J = n(15252),
          V = n(69289),
          j = n(24660),
          B = n(3166);
        function F(b) {
          const { underline: x = "auto", focusable: c, navProps: g, ...l } = b,
            ne = (0, B.Qn)(),
            $ = c ?? g?.focusable ?? !!l.href,
            M = (0, V.mz)({ ...l, underline: x, className: C.TextLink }, K);
          return ne && ($ || g)
            ? (0, p.jsx)(j.Ii, { ...M, ...(g || {}), focusable: $ })
            : (0, p.jsx)("a", { ...M });
        }
        const K = [
          ...J.Ae,
          { prop: "underline", className: (b) => C[`Underline-${b}`] },
        ];
        function I(b) {
          const { underline: x = "auto", focusable: c, navProps: g, ...l } = b,
            ne = useInGamepadUI(),
            $ = c ?? g?.focusable ?? !!l.onClick,
            M = jsx("span", {
              role: "button",
              ...useResolveProps(
                { ...l, underline: x, className: styles.TextLinkButton },
                K,
              ),
            });
          return ne && ($ || g)
            ? jsx(FocusElement, { ...(g || {}), focusable: $, children: M })
            : M;
        }
      },
      64388: (ce, he, n) => {
        "use strict";
        n.d(he, { s: () => G });
        var p = n(7850),
          C = n(19298),
          e = n(64238),
          J = n.n(e),
          V = n(36118),
          j = n(24660),
          B = n(38566),
          F = n(54130),
          K = n(90626),
          I = n(3166),
          b = n(88208);
        const x = Object.assign(c, { Root: g, Content: ne });
        function c(z) {
          const { children: v, className: i, ...S } = z;
          return (0, p.jsx)(x.Root, {
            ...S,
            children: (0, p.jsx)(x.Content, { className: i, children: v }),
          });
        }
        function g(z) {
          const {
              onClose: v,
              className: i,
              navID: S,
              children: T,
              allowScrollBehind: k,
              ...q
            } = z,
            [H, P] = K.useState(!1),
            oe = K.useCallback((ee) => {
              ee &&
                (ee.showModal(),
                ee.ownerDocument.defaultView &&
                  P(
                    ee.ownerDocument.body.scrollHeight >
                      ee.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            W = K.useCallback(
              (ee) => {
                ee.target == ee.currentTarget && v("backdropclick");
              },
              [v],
            );
          return (0, p.jsx)(l, {
            navID: S ?? "ModalDialog",
            onClose: v,
            children: (0, p.jsx)("dialog", {
              ref: oe,
              className: J()(b.ModalDialog, !k && H && b.PreventScroll, i),
              onClose: () => v("onclose"),
              onClick: W,
              ...q,
              children: (0, p.jsx)(F.q, { children: T }),
            }),
          });
        }
        function l(z) {
          const { navID: v, onClose: i, children: S } = z,
            T = K.useCallback(() => i("cancelbutton"), [i]),
            k = K.useRef(void 0);
          return (
            (0, j.O7)(k, !0, !0),
            (0, I.Qn)()
              ? (0, p.jsx)(B.D6, {
                  navID: v ?? "ModalDialog",
                  onCancelButton: T,
                  modal: !0,
                  navTreeRef: k,
                  children: S,
                })
              : (0, p.jsx)(p.Fragment, { children: S })
          );
        }
        function ne(z) {
          const { className: v, children: i } = z;
          return (0, p.jsx)("div", {
            className: J()(b.ModalDialogContent, v),
            onClick: (S) => S.stopPropagation(),
            children: i,
          });
        }
        var $ = n(83217),
          M = n.n($);
        function G(z) {
          const {
            onClose: v,
            className: i,
            navID: S,
            children: T,
            strTitle: k,
            ...q
          } = z;
          return (0, p.jsx)(x, {
            onClose: v,
            navID: S ?? "SimpleModalDialog",
            ...q,
            children: (0, p.jsxs)("div", {
              className: J()(i, M().SimpleModalDialog),
              children: [
                " ",
                (0, p.jsxs)(C.Z, {
                  className: M().SimpleModalDialogHeader,
                  children: [
                    k &&
                      (0, p.jsx)("h2", {
                        className: M().SimpleModalDialogTitle,
                        children: k,
                      }),
                    (0, p.jsx)("button", {
                      onClick: (H) => (v("xclick"), H.preventDefault(), !1),
                      className: M().XButton,
                      children: (0, p.jsx)(V.tmm, {}),
                    }),
                  ],
                }),
                (0, p.jsx)("div", {
                  className: M().SimpleModalContentCtn,
                  children: T,
                }),
              ],
            }),
          });
        }
      },
      70427: (ce) => {
        ce.exports = {
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
      70402: (ce) => {
        ce.exports = {
          Size32: "agHuyuV8ihlarNHATSszd",
          Size64: "_1uacLAj2YkREOmwRZ9R4bJ",
          Size128: "_2Wyg29PZJAdWb-Nlktyn0c",
          Size256: "P3dp1clsVi3M-AJL4J1T1",
          AchievementImageContainer: "_tQ4WDxUJeDoCXy59CF0I",
          NewIcon: "_2ovKL6EYPJO2z_M2YLgW0I",
          AchievementMissingImage: "_1hswY_5QcX-V-2WWGdc2P1",
        };
      },
      15008: (ce) => {
        ce.exports = {
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
      5088: (ce) => {
        ce.exports = {
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
      1103: (ce) => {
        ce.exports = {
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
      6629: (ce) => {
        ce.exports = {
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
      14223: (ce) => {
        ce.exports = {
          MinMaxRangeContainer: "_BuNcDG_B3ZZqi9CJOn2r",
          MinMax: "_3zQd26Cgraf05sScvTPJ2F",
        };
      },
      79964: (ce) => {
        ce.exports = {
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
      3952: (ce) => {
        ce.exports = {
          DragBox: "_3ap_hrz6rd5dEZsu8cnXJ0",
          Dragging: "_2ZYfPxfw7ufPbPAb6bZOcq",
          Invalid: "_2xMKMSvFqnwUlpit8WK4B8",
        };
      },
      95415: (ce) => {
        ce.exports = {
          ValidatedInputContainer: "_22dxHS1peKgjat8FzJHd2x",
          Invalid: "_2riY6QZ83fjIFiYdBYGtcp",
          Warning: "qpy-N0lAR2xK3KsCbFdUf",
          ValidatedControl: "_3FBZTFD4pgCIfMtwDzXOxt",
          ErrorDetail: "_2sRzko2FZ5TO_QeLm3qqYT",
        };
      },
      28325: (ce) => {
        ce.exports = {
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
      6853: (ce) => {
        ce.exports = {
          Section: "_1FrGxLLJNyWZswyE9TGS3N",
          Body: "_1CaApUvC8ichAOgldt6XZm",
          Header: "WnpaUxHTbHM6dHV4JNyog",
          Title: "f3pCBilbcCpf8q3EUD2fp",
          Count: "tYEaq1iQcl91w3W4gzbeX",
          BetaCallout: "_3F09B-c90Mi_ABQSFt8qlI",
        };
      },
      82277: (ce) => {
        ce.exports = {
          FilterBorder: "_3xFYpKNlOZ6xjQ529ZgRbr",
          Top: "_310cGk80jWCZr6LxeueX_5",
          Bottom: "nLYMJhpffeKLN_8VkTcD_",
        };
      },
      69041: (ce) => {
        ce.exports = {
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
      24089: (ce) => {
        ce.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      73406: (ce) => {
        ce.exports = {
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
      75: (ce) => {
        ce.exports = {
          SliderRoot: "Ib6RCjwueJUjl7aWNipFW",
          Inner: "-nNjOur8lh62cpxs1Jnth",
          SliderTrack: "_32V6MAuLhIp8s5_OPJxur1",
          SliderRange: "_1S38a0lsWaX1bdlroIEyXQ",
          SliderHandle: "_1VoJsIZhjVss7lO_vZxCFC",
        };
      },
      75180: (ce) => {
        ce.exports = {
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
      50122: (ce) => {
        ce.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      88208: (ce) => {
        ce.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      83217: (ce) => {
        ce.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      45737: (ce) => {
        ce.exports = {
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
