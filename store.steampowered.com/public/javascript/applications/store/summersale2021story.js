/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [57819],
    {
      25729: (D, v, s) => {
        "use strict";
        s.d(v, {
          E4: () => x,
          PB: () => B,
          PU: () => d,
          VZ: () => A,
          _l: () => c,
          cZ: () => l,
          iG: () => f,
          ib: () => b,
          x4: () => N,
        });
        var r = s(41735),
          P = s.n(r),
          C = s(14947),
          y = s(90626),
          m = s(72604),
          _ = s(27386),
          o = s(31224),
          e = s(34592),
          O = s(3166),
          I = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          E = (S, t, g, n) => {
            for (
              var a = n > 1 ? void 0 : n ? M(t, g) : t, i = S.length - 1, h;
              i >= 0;
              i--
            )
              (h = S[i]) && (a = (n ? h(t, g, a) : h(a)) || a);
            return n && a && I(t, g, a), a;
          };
        const T = class R {
          m_mapGenreToStickerResponse = new Map();
          m_eStoryBadgeGranted = _.GPz.d7;
          m_strLocalizedStoryHeader;
          m_strLocalizedStoryHeaderMobile;
          static s_Singleton;
          static Get() {
            return R.s_Singleton || (R.s_Singleton = new R()), R.s_Singleton;
          }
          constructor() {
            (0, C.Gn)(this);
            const t = (0, O.Tc)("summerstory", "application_config");
            if (t) {
              if (t.story_choices) {
                const g = t.story_choices;
                g.sort((n, a) => n.time_chosen - a.time_chosen),
                  g.forEach((n) => {
                    this.m_mapGenreToStickerResponse.set(n.genre, n);
                  });
              }
              t.badge_granted && (this.m_eStoryBadgeGranted = t.badge_granted),
                t.header && (this.m_strLocalizedStoryHeader = t.header),
                t.header_mobile &&
                  (this.m_strLocalizedStoryHeaderMobile = t.header_mobile);
            }
          }
          GetStoryBadgeGranted() {
            return this.m_eStoryBadgeGranted;
          }
          GetLocalizedStoryHeader() {
            return this.m_strLocalizedStoryHeader;
          }
          GetLocalizedStoryHeaderMobile() {
            return this.m_strLocalizedStoryHeaderMobile;
          }
          GetAllGenreChoices() {
            return this.m_mapGenreToStickerResponse;
          }
          GetClaimForGenre(t) {
            return this.m_mapGenreToStickerResponse.get(t);
          }
          async LoadClaimForGenre(t, g) {
            if (this.m_mapGenreToStickerResponse.has(t) || !O.iA.logged_in)
              return;
            this.m_mapGenreToStickerResponse.set(t, {});
            let n = null;
            try {
              const i = await P().get(
                O.TS.STORE_BASE_URL + "promotion/ajaxhasclaimedgenresticker",
                { params: { genre: t }, cancelToken: g?.token },
              );
              if (
                i?.status == 200 &&
                i.data?.success == m.R &&
                i.data?.results
              ) {
                const h = i.data.results;
                this.m_mapGenreToStickerResponse.set(t, h);
                return;
              }
              n = { response: i };
            } catch (i) {
              n = i;
            }
            const a = (0, e.H)(n);
            console.error(
              "Could not check claim on genre",
              t,
              a.strErrorMsg,
              a,
            );
          }
          async MakeClaimForGenre(t, g, n) {
            if (!O.iA.logged_in) return m.Dy;
            const a = new FormData();
            a.append("genre", t.toString()),
              a.append("choice", g.toString()),
              a.append("sessionid", (0, O.KC)());
            let i = null;
            try {
              const p = await P().post(
                O.TS.STORE_BASE_URL + "promotion/ajaxclaimstickerforgenre",
                a,
                { withCredentials: !0, cancelToken: n?.token },
              );
              if (
                p?.status == 200 &&
                p.data?.success == m.R &&
                p.data?.results
              ) {
                const k = p.data.results,
                  j = this.m_mapGenreToStickerResponse.get(t);
                return (
                  (j.choice = g),
                  (j.sticker_def = k.claimed_sticker_def),
                  (j.has_completed_story = k.has_completed_story),
                  p.data.success
                );
              }
              i = { response: p };
            } catch (p) {
              i = p;
            }
            const h = (0, e.H)(i);
            return (
              console.error(
                "Could not make claim on genre",
                t,
                h.strErrorMsg,
                h,
              ),
              i?.data?.success || m.zi
            );
          }
        };
        E([C.sH], T.prototype, "m_mapGenreToStickerResponse", 2),
          E([C.sH], T.prototype, "m_eStoryBadgeGranted", 2);
        let u = T;
        function c() {
          return u.Get().GetStoryBadgeGranted();
        }
        function l() {
          return u.Get().GetLocalizedStoryHeader();
        }
        function b() {
          return u.Get().GetLocalizedStoryHeaderMobile();
        }
        function f() {
          return u.Get().GetAllGenreChoices();
        }
        function N(S) {
          const t = y.useRef(null);
          return (
            y.useEffect(() => {
              const a = P().CancelToken.source();
              return (
                (t.current = a), () => a.cancel("useGenreClaim: unmounting")
              );
            }, []),
            u.Get().LoadClaimForGenre(S, t.current),
            [
              u.Get().GetClaimForGenre(S),
              async (a) => {
                await u.Get().MakeClaimForGenre(S, a, t.current);
              },
            ]
          );
        }
        const L = 1658760;
        function d(S) {
          const [t] = N(S);
          return t?.sticker_def
            ? `${O.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${L}/${t.sticker_def.item_image_small}`
            : null;
        }
        function A(S) {
          return !S || S >= G.length ? null : G[S];
        }
        function x() {
          return G.slice(1);
        }
        const G = [
          null,
          {
            eGenre: o.oT.XR,
            strPageTitle: "#Summer21_Story_Action_Title",
            strPageNumber: "#Summer21_Story_Action_Pg",
            strPageText: "#Summer21_Story_Action_Intro",
            strOptionA: "#Summer21_Story_Action_Choice1",
            strPageNumberA: "#Summer21_Story_Action_Outcome1_Pg",
            strResultA: "#Summer21_Story_Action_Outcome1",
            strOptionB: "#Summer21_Story_Action_Choice2",
            strPageNumberB: "#Summer21_Story_Action_Outcome2_Pg",
            strResultB: "#Summer21_Story_Action_Outcome2",
            strSalePage: "summer2021_action",
            strBackgroundColor: "#c5483f",
            strGenreName: "#Summer21_Story_Action_Genre",
          },
          {
            eGenre: o.oT.x7,
            strPageTitle: "#Summer21_Story_Adventure_Title",
            strPageNumber: "#Summer21_Story_Adventure_Pg",
            strPageText: "#Summer21_Story_Adventure_Intro",
            strOptionA: "#Summer21_Story_Adventure_Choice1",
            strPageNumberA: "#Summer21_Story_Adventure_Outcome1_Pg",
            strResultA: "#Summer21_Story_Adventure_Outcome1",
            strOptionB: "#Summer21_Story_Adventure_Choice2",
            strPageNumberB: "#Summer21_Story_Adventure_Outcome2_Pg",
            strResultB: "#Summer21_Story_Adventure_Outcome2",
            strSalePage: "summer2021_adventure_casual",
            strBackgroundColor: "#657F5B",
            strGenreName: "#Summer21_Story_Adventure_Genre",
          },
          {
            eGenre: o.oT.r,
            strPageTitle: "#Summer21_Story_RPG_Title",
            strPageNumber: "#Summer21_Story_RPG_Pg",
            strPageText: "#Summer21_Story_RPG_Intro",
            strOptionA: "#Summer21_Story_RPG_Choice1",
            strPageNumberA: "#Summer21_Story_RPG_Outcome1_Pg",
            strResultA: "#Summer21_Story_RPG_Outcome1",
            strOptionB: "#Summer21_Story_RPG_Choice2",
            strPageNumberB: "#Summer21_Story_RPG_Outcome2_Pg",
            strResultB: "#Summer21_Story_RPG_Outcome2",
            strSalePage: "summer2021_rpg",
            strBackgroundColor: "#bf673b",
            strGenreName: "#Summer21_Story_RPG_Genre",
          },
          {
            eGenre: o.oT.mj,
            strPageTitle: "#Summer21_Story_Strategy_Title",
            strPageNumber: "#Summer21_Story_Strategy_Pg",
            strPageText: "#Summer21_Story_Strategy_Intro",
            strOptionA: "#Summer21_Story_Strategy_Choice1",
            strPageNumberA: "#Summer21_Story_Strategy_Outcome1_Pg",
            strResultA: "#Summer21_Story_Strategy_Outcome1",
            strOptionB: "#Summer21_Story_Strategy_Choice2",
            strPageNumberB: "#Summer21_Story_Strategy_Outcome2_Pg",
            strResultB: "#Summer21_Story_Strategy_Outcome2",
            strSalePage: "summer2021_strategy",
            strBackgroundColor: "#E3B343",
            strGenreName: "#Summer21_Story_Strategy_Genre",
          },
          {
            eGenre: o.oT.W,
            strPageTitle: "#Summer21_Story_Sim_Title",
            strPageNumber: "#Summer21_Story_Sim_Pg",
            strPageText: "#Summer21_Story_Sim_Intro",
            strOptionA: "#Summer21_Story_Sim_Choice1",
            strPageNumberA: "#Summer21_Story_Sim_Outcome1_Pg",
            strResultA: "#Summer21_Story_Sim_Outcome1",
            strOptionB: "#Summer21_Story_Sim_Choice2",
            strPageNumberB: "#Summer21_Story_Sim_Outcome2_Pg",
            strResultB: "#Summer21_Story_Sim_Outcome2",
            strSalePage: "summer2021_simulation",
            strBackgroundColor: "#437882",
            strGenreName: "#Summer21_Story_Sim_Genre",
          },
          {
            eGenre: o.oT.zE,
            strPageTitle: "#Summer21_Story_Sports_Title",
            strPageNumber: "#Summer21_Story_Sports_Pg",
            strPageText: "#Summer21_Story_Sports_Intro",
            strOptionA: "#Summer21_Story_Sports_Choice1",
            strPageNumberA: "#Summer21_Story_Sports_Outcome1_Pg",
            strResultA: "#Summer21_Story_Sports_Outcome1",
            strOptionB: "#Summer21_Story_Sports_Choice2",
            strPageNumberB: "#Summer21_Story_Sports_Outcome2_Pg",
            strResultB: "#Summer21_Story_Sports_Outcome2",
            strSalePage: "summer2021_sports_racing",
            strBackgroundColor: "#E3B343",
            strGenreName: "#Summer21_Story_Sports_Genre",
          },
          {
            eGenre: o.oT.xJ,
            strPageTitle: "#Summer21_Story_Horror_Title",
            strPageNumber: "#Summer21_Story_Horror_Pg",
            strPageText: "#Summer21_Story_Horror_Intro",
            strOptionA: "#Summer21_Story_Horror_Choice1",
            strPageNumberA: "#Summer21_Story_Horror_Outcome1_Pg",
            strResultA: "#Summer21_Story_Horror_Outcome1",
            strOptionB: "#Summer21_Story_Horror_Choice2",
            strPageNumberB: "#Summer21_Story_Horror_Outcome2_Pg",
            strResultB: "#Summer21_Story_Horror_Outcome2",
            strSalePage: "summer2021_horror",
            strBackgroundColor: "#657F5B",
            strGenreName: "#Summer21_Story_Horror_Genre",
          },
          {
            eGenre: o.oT.hK,
            strPageTitle: "#Summer21_Story_Survival_Title",
            strPageNumber: "#Summer21_Story_Survival_Pg",
            strPageText: "#Summer21_Story_Survival_Intro",
            strOptionA: "#Summer21_Story_Survival_Choice1",
            strPageNumberA: "#Summer21_Story_Survival_Outcome1_Pg",
            strResultA: "#Summer21_Story_Survival_Outcome1",
            strOptionB: "#Summer21_Story_Survival_Choice2",
            strPageNumberB: "#Summer21_Story_Survival_Outcome2_Pg",
            strResultB: "#Summer21_Story_Survival_Outcome2",
            strSalePage: "summer2021_survival",
            strBackgroundColor: "#bf673b",
            strGenreName: "#Summer21_Story_Survival_Genre",
          },
          {
            eGenre: o.oT.Bk,
            strPageTitle: "#Summer21_Story_Open_Title",
            strPageNumber: "#Summer21_Story_Open_Pg",
            strPageText: "#Summer21_Story_Open_Intro",
            strOptionA: "#Summer21_Story_Open_Choice1",
            strPageNumberA: "#Summer21_Story_Open_Outcome1_Pg",
            strResultA: "#Summer21_Story_Open_Outcome1",
            strOptionB: "#Summer21_Story_Open_Choice2",
            strPageNumberB: "#Summer21_Story_Open_Outcome2_Pg",
            strResultB: "#Summer21_Story_Open_Outcome2",
            strSalePage: "summer2021_open_world",
            strBackgroundColor: "#657F5B",
            strGenreName: "#Summer21_Story_Open_Genre",
          },
          {
            eGenre: o.oT.PQ,
            strPageTitle: "#Summer21_Story_SciFi_Title",
            strPageNumber: "#Summer21_Story_SciFi_Pg",
            strPageText: "#Summer21_Story_SciFi_Intro",
            strOptionA: "#Summer21_Story_SciFi_Choice1",
            strPageNumberA: "#Summer21_Story_SciFi_Outcome1_Pg",
            strResultA: "#Summer21_Story_SciFi_Outcome1",
            strOptionB: "#Summer21_Story_SciFi_Choice2",
            strPageNumberB: "#Summer21_Story_SciFi_Outcome2_Pg",
            strResultB: "#Summer21_Story_SciFi_Outcome2",
            strSalePage: "summer2021_scifi",
            strBackgroundColor: "#986280",
            strGenreName: "#Summer21_Story_SciFi_Genre",
          },
          {
            eGenre: o.oT.QB,
            strPageTitle: "#Summer21_Story_Mystery_Title",
            strPageNumber: "#Summer21_Story_Mystery_Pg",
            strPageText: "#Summer21_Story_Mystery_Intro",
            strOptionA: "#Summer21_Story_Mystery_Choice1",
            strPageNumberA: "#Summer21_Story_Mystery_Outcome1_Pg",
            strResultA: "#Summer21_Story_Mystery_Outcome1",
            strOptionB: "#Summer21_Story_Mystery_Choice2",
            strPageNumberB: "#Summer21_Story_Mystery_Outcome2_Pg",
            strResultB: "#Summer21_Story_Mystery_Outcome2",
            strSalePage: "summer2021_mystery",
            strBackgroundColor: "#B24939",
            strGenreName: "#Summer21_Story_Mystery_Genre",
          },
          {
            eGenre: o.oT.LK,
            strPageTitle: "#Summer21_Story_Space_Title",
            strPageNumber: "#Summer21_Story_Space_Pg",
            strPageText: "#Summer21_Story_Space_Intro",
            strOptionA: "#Summer21_Story_Space_Choice1",
            strPageNumberA: "#Summer21_Story_Space_Outcome1_Pg",
            strResultA: "#Summer21_Story_Space_Outcome1",
            strOptionB: "#Summer21_Story_Space_Choice2",
            strPageNumberB: "#Summer21_Story_Space_Outcome2_Pg",
            strResultB: "#Summer21_Story_Space_Outcome2",
            strSalePage: "summer2021_space",
            strBackgroundColor: "#437882",
            strGenreName: "#Summer21_Story_Space_Genre",
          },
          {
            eGenre: o.oT.Ou,
            strPageTitle: "#Summer21_Story_Roguelike_Title",
            strPageNumber: "#Summer21_Story_Roguelike_Pg",
            strPageText: "#Summer21_Story_Roguelike_Intro",
            strOptionA: "#Summer21_Story_Roguelike_Choice1",
            strPageNumberA: "#Summer21_Story_Roguelike_Outcome1_Pg",
            strResultA: "#Summer21_Story_Roguelike_Outcome1",
            strOptionB: "#Summer21_Story_Roguelike_Choice2",
            strPageNumberB: "#Summer21_Story_Roguelike_Outcome2_Pg",
            strResultB: "#Summer21_Story_Roguelike_Outcome2",
            strSalePage: "summer2021_roguelike",
            strBackgroundColor: "#B24939",
            strGenreName: "#Summer21_Story_Roguelike_Genre",
          },
          {
            eGenre: o.oT.Bc,
            strPageTitle: "#Summer21_Story_Anime_Title",
            strPageNumber: "#Summer21_Story_Anime_Pg",
            strPageText: "#Summer21_Story_Anime_Intro",
            strOptionA: "#Summer21_Story_Anime_Choice1",
            strPageNumberA: "#Summer21_Story_Anime_Outcome1_Pg",
            strResultA: "#Summer21_Story_Anime_Outcome1",
            strOptionB: "#Summer21_Story_Anime_Choice2",
            strPageNumberB: "#Summer21_Story_Anime_Outcome2_Pg",
            strResultB: "#Summer21_Story_Anime_Outcome2",
            strSalePage: "summer2021_anime",
            strBackgroundColor: "#986280",
            strGenreName: "#Summer21_Story_Anime_Genre",
          },
        ];
        function B() {
          y.useEffect(() => {
            const S = document.createElement("link");
            (S.rel = "stylesheet"),
              (S.href =
                "https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP&family=Noto+Serif+KR&family=Noto+Serif+SC:wght@500&family=Noto+Serif+TC&family=Jomhuria&&family=Big+Shoulders+Display:wght@800&display=swap"),
              document.head.appendChild(S);
          }, []);
        }
      },
      16255: (D, v, s) => {
        "use strict";
        s.r(v), s.d(v, { default: () => M });
        var r = s(7850),
          P = s(27386),
          C = s(31224),
          y = s(25729),
          m = s(36707),
          _ = s(18210),
          o = s(3166),
          e = s(42919),
          O = s.n(e);
        const M = () => {
            (0, y.PB)();
            const u = (0, y.iG)(),
              c = (0, y.E4)(),
              l = (0, y.cZ)(),
              b = (0, y.ib)(),
              f = [],
              N = [];
            c.forEach((d) => {
              const A = d.eGenre,
                x = o.TS.STORE_BASE_URL + "sale/" + d.strSalePage;
              let G = (0, _.PP)(
                "#Summer_21_Story_Enter",
                (0, r.jsx)("span", { children: (0, _.we)(d.strGenreName) }),
              );
              if (u.has(A)) {
                let B = "";
                u.get(A).choice == C.f$.rg
                  ? (B = d.strResultA + "_Summary")
                  : u.get(A).choice == C.f$.kE &&
                    (B = d.strResultB + "_Summary"),
                  f.push(
                    (0, r.jsx)(
                      T,
                      {
                        strSubheader: G,
                        bClaimed: !0,
                        strBackgroundColor: d.strBackgroundColor,
                        eGenre: d.eGenre,
                        strTitle: d.strPageTitle,
                        strSaleURL: x,
                        strSummary: B,
                      },
                      A,
                    ),
                  );
              } else {
                let B = "";
                N.length || (B = "next"),
                  N.push(
                    (0, r.jsx)(
                      T,
                      {
                        strID: B,
                        strSubheader: G,
                        strBackgroundColor: "#7C5F5A",
                        bClaimed: !1,
                        eGenre: d.eGenre,
                        strTitle: d.strPageTitle,
                        strSaleURL: x,
                        strSummary: "#Summer_21_Story_Next_Intro",
                      },
                      A,
                    ),
                  );
              }
            });
            let L = f.concat(N);
            return (0, r.jsx)("div", {
              className: (0, m.A)(e.PageOuterContainer, o.TS.LANGUAGE),
              children: (0, r.jsxs)("div", {
                className: e.PageInnerContainer,
                children: [
                  (0, r.jsxs)("a", {
                    href: o.TS.STORE_BASE_URL,
                    children: [
                      l &&
                        (0, r.jsx)("img", {
                          className: e.LocalizedHeaderImg,
                          src: l,
                        }),
                      b &&
                        (0, r.jsx)("img", {
                          className: e.LocalizedHeaderMobileImg,
                          src: b,
                        }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: e.PageInnerBG,
                    children: [
                      (0, r.jsxs)("div", {
                        className: e.PageInnerContent,
                        children: [
                          (0, r.jsxs)("div", {
                            className: e.HeaderContainer,
                            children: [
                              (0, r.jsx)("div", {
                                className: e.HeaderPrefix,
                                children: (0, _.we)(
                                  "#Summer_21_Overview_Title_Prefix",
                                ),
                              }),
                              (0, _.we)("#Summer_21_Overview_Title"),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: (0, m.A)(e.HeaderDesc, e.Noto),
                            children: (0, _.we)(
                              "#Summer_21_Overview_Description1",
                            ),
                          }),
                          (0, r.jsx)("div", {
                            className: (0, m.A)(e.HeaderDesc, e.Noto),
                            children: (0, _.we)(
                              "#Summer_21_Overview_Description3",
                            ),
                          }),
                          (0, r.jsx)("div", {
                            className: (0, m.A)(e.HeaderDesc, e.Noto),
                            children: (0, _.we)(
                              "#Summer_21_Overview_Description4",
                            ),
                          }),
                          (0, r.jsxs)("a", {
                            id: "wallpapers",
                            href:
                              o.TS.MEDIA_CDN_URL +
                              "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                            className: (0, m.A)(
                              e.HeaderDesc,
                              e.Noto,
                              e.Wallpapers,
                            ),
                            children: [
                              "*",
                              (0, _.we)("#Summer21_Story_DownloadWallpaper"),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: (0, m.A)(e.HeaderIntro, e.Noto),
                            children: (0, _.we)(
                              "#Summer_21_Overview_Description2",
                            ),
                          }),
                          (0, r.jsx)("div", {
                            className: (0, m.A)(e.HeaderIntro, e.Noto),
                            children: (0, _.we)("#Summer_21_Story_Intro"),
                          }),
                          (0, r.jsx)("div", {
                            className: (0, m.A)(e.ListHeader, e.Noto),
                            children: (0, _.we)("#Summer_21_Story_Next"),
                          }),
                          (0, r.jsx)("div", {
                            className: (0, m.A)(e.GenreListContainer),
                            children: L,
                          }),
                        ],
                      }),
                      (0, r.jsx)(E, {}),
                    ],
                  }),
                ],
              }),
            });
          },
          E = (u) => {
            const c = (0, y._l)();
            let l;
            if (c == P.GPz.zI)
              l = {
                badge_name: "#Summer21_Badge_Outcome1_Title",
                badge_desc: "#Summer21_Badge_Outcome1_Description",
                badge_class: e.Badge_51,
              };
            else if (c == P.GPz.sG)
              l = {
                badge_name: "#Summer21_Badge_Outcome2_Title",
                badge_desc: "#Summer21_Badge_Outcome2_Description",
                badge_class: e.Badge_52,
              };
            else if (c == P.GPz.Ms)
              l = {
                badge_name: "#Summer21_Badge_Outcome3_Title",
                badge_desc: "#Summer21_Badge_Outcome3_Description",
                badge_class: e.Badge_53,
              };
            else if (c == P.GPz.WK)
              l = {
                badge_name: "#Summer21_Badge_Outcome4_Title",
                badge_desc: "#Summer21_Badge_Outcome4_Description",
                badge_class: e.Badge_54,
              };
            else if (c == P.GPz.ER)
              l = {
                badge_name: "#Summer21_Badge_Outcome5_Title",
                badge_desc: "#Summer21_Badge_Outcome5_Description",
                badge_class: e.Badge_55,
              };
            else return null;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className: (0, m.A)(
                    e.HeaderDesc,
                    e.Noto,
                    e.CompletedSummaryText,
                  ),
                  children: (0, _.we)("#Summer21_Badge_Unlocked_Description"),
                }),
                (0, r.jsxs)("div", {
                  id: "badge",
                  className: (0, m.A)(e.BadgeContainer, e.Noto),
                  children: [
                    (0, r.jsxs)("div", {
                      className: e.Column,
                      children: [
                        (0, r.jsx)("div", {
                          className: e.SubHeader,
                          children: (0, _.we)("#Summer21_Badge_Prelude"),
                        }),
                        (0, r.jsx)("div", {
                          className: e.BadgeName,
                          children: (0, _.we)(l.badge_name),
                        }),
                        (0, r.jsx)("div", {
                          className: e.BadgeDesc,
                          children: (0, _.we)(l.badge_desc),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: e.Column,
                      children: [
                        (0, r.jsx)("a", {
                          className: (0, m.A)(e.BadgeImg, l.badge_class),
                          href: o.TS.COMMUNITY_BASE_URL + "my/badges/" + c,
                        }),
                        (0, r.jsx)("div", {
                          className: e.BadgeText,
                          children: (0, _.we)("#Summer21_Badge_Congrats1"),
                        }),
                        (0, r.jsx)("div", {
                          className: e.BadgeText,
                          children: (0, _.we)("#Summer21_Badge_Congrats2"),
                        }),
                        (0, r.jsx)("a", {
                          className: e.BadgeLink,
                          href: o.TS.COMMUNITY_BASE_URL + "my/edit/avatar/" + c,
                          children: (0, _.we)("#Summer21_Badge_View"),
                        }),
                        (0, r.jsx)("a", {
                          className: e.FrameExample,
                          href: o.TS.COMMUNITY_BASE_URL + "my/edit/avatar/" + c,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: (0, m.A)(e.TheEnd, e.Noto),
                  children: (0, _.we)("#Summer21_Story_End"),
                }),
              ],
            });
          },
          T = (u) => {
            const c = (0, y.PU)(u.eGenre);
            return (0, r.jsxs)("a", {
              id: u.strID,
              href: u.strSaleURL,
              style: { backgroundColor: `${u.strBackgroundColor}` },
              className: (0, m.A)(e.GenreContainer, e.Claimed),
              children: [
                (0, r.jsxs)("div", {
                  className: e.LeftColumn,
                  children: [
                    (0, r.jsx)("div", {
                      className: (0, m.A)(e.GenreSubheader, e.Noto),
                      children: u.strSubheader,
                    }),
                    (0, r.jsx)("div", {
                      className: e.GenreTitle,
                      children: (0, _.we)(u.strTitle),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, m.A)(e.GenreStory, e.Noto),
                      children: (0, _.we)(u.strSummary),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: e.RightColumn,
                  children: [
                    c &&
                      (0, r.jsx)("div", {
                        className: e.StickerPreview,
                        style: { backgroundImage: `url(${c})` },
                      }),
                    !u.bClaimed &&
                      (0, r.jsx)("div", {
                        className: (0, m.A)(e.StickerPreview, e.Unclaimed),
                      }),
                  ],
                }),
              ],
            });
          };
      },
      42919: (D) => {
        D.exports = {
          PageOuterContainer: "A1molY3lA3epFeiK9C18X",
          LocalizedHeaderImg: "_2ef14902HuOYwW9X2ZmOBM",
          LocalizedHeaderMobileImg: "_3NX2aMrxYB2eC6k0FEticr",
          PageInnerBG: "dkYvUoJVKlaSYTRR6wZ0Y",
          PageInnerContent: "_20TiAcFAkd9np-ptymBKRe",
          GenreListContainer: "_17we18AIwvK4bFfGQbI41U",
          HeaderContainer: "_1gPQkVavA-LOCR3b-IKcB",
          HeaderPrefix: "_3hjBUHcKMn2idQO_5Ia3Ni",
          GenreTitle: "_25hmlvprjx7XlKaIdRsG5R",
          ListHeader: "jZV6eX02cAULi9JfIksaR",
          HeaderIntro: "_3STDK2l490h73KtHqWLkGJ",
          HeaderDesc: "_3EetibYgOfZgSMouAZUzKU",
          Wallpapers: "_3j1mtlKbdtWmEOO73SxFWN",
          Noto: "_1S5tjVuHYHJscKClAwWb3a",
          GenreContainer: "_2JuP7L8n3icg43_wS3FIDg",
          GenreSubheader: "_1hagULjKLFtESNF4z9sB9L",
          LeftColumn: "_1BzJCbD0qCE8mwDfA1lNfI",
          RightColumn: "_2l_lu9q_KJ01uSoJhMsuJw",
          GenreStory: "_3cVcC0BAT4OHbZZRjAzEc_",
          StickerPreview: "_1AsdNRYXgqD4kbyiL5LH_I",
          Unclaimed: "oT-hELNuFFfKlmFqvx9ue",
          CompletedSummaryText: "_24Z9tBamfDCSidYyUWNqm5",
          TheEnd: "_2b58zwoq3jyRstHU3eN1vE",
          BadgeContainer: "_2wlN6Tx0UyAVdkbjCArjGC",
          BadgeName: "_3EwgFn4j6yiTeoyPFFiSiX",
          SubHeader: "-Ej5OKTtQyBuAYsE_uEuK",
          BadgeText: "_2Vbv_zIpsBEFgfzIdLjSgB",
          BadgeDesc: "_37uOV7jr2jliYKlTRPhfzR",
          BadgeImg: "x74En7wZjtpuyro1DP82z",
          BadgeLink: "_2qaiZlONpv3PnKbKbYqHD6",
          FrameExample: "_1q5L20SehgaXZx9TmYSfHV",
          Badge_51: "_1iE6US6GTFPFroJXMBgnja",
          Badge_52: "_2tJdQHqm8mz8o-cKuEc9zk",
          Badge_53: "_2kvVuCP6Ia4K8Nfeo55a_Z",
          Badge_54: "_2VzkL8Wl9rKj2WlN-9xcix",
          Badge_55: "_11CXt5o0CnU3swZRXwFmgp",
          Column: "_1TnJ8vhRS0DBDf6on8h4zW",
        };
      },
    },
  ]);
})();
