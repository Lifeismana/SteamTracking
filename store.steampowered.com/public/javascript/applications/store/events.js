/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [74268],
    {
      13532: (A, Ze, i) => {
        "use strict";
        i.d(Ze, { l: () => Ae, r: () => De });
        var t = i(7850),
          K = i(90626),
          M = i(39239),
          $ = i(36118),
          B = i(32608),
          Oe = i(36707),
          ce = i(18210),
          j = i(70758),
          I = i.n(j),
          N = i(1123);
        const De = (T) => {
            const ge = ["maxresdefault", "mqdefault", "default"],
              [L, de] = K.useState(0);
            K.useEffect(() => de(0), [T.video]);
            const q = K.useRef(void 0);
            if (T.altImgWithFallback && T.altImgWithFallback.length > 0)
              return (0, t.jsx)(M.o, {
                className: T.className,
                srcs: T.altImgWithFallback,
              });
            if (T.altImg)
              return (0, t.jsx)("img", {
                src: T.altImg,
                className: T.className,
              });
            {
              const H =
                  "https://img.youtube.com/vi/" +
                  T.video +
                  "/" +
                  ge[L] +
                  ".jpg",
                Pe = () => {
                  L + 1 < ge.length && de(L + 1);
                },
                mt = () => {
                  q.current && q.current.naturalHeight < 91 && Pe();
                };
              return (0, t.jsx)("img", {
                ref: q,
                onLoad: mt,
                onError: Pe,
                src: H,
                className: (0, Oe.A)(I().YoutubePreviewImage, T.className),
              });
            }
          },
          Ae = (T) => {
            const [ge, L] = K.useState(!1);
            (0, B.VC)(!!T.preloadYoutubeScripts);
            const de = (0, N.Rp)("youtube");
            if (!ge || !de) {
              const q = (H) => {
                T.onPlayerActivated && T.onPlayerActivated(),
                  L(!0),
                  H.stopPropagation(),
                  H.preventDefault();
              };
              return (0, t.jsxs)("div", {
                className: (0, Oe.A)(
                  "YoutubePreviewContainer",
                  I().YoutubePreviewImage,
                  T.imageClassnames,
                ),
                onClick: de ? q : void 0,
                children: [
                  (0, t.jsx)(De, {
                    className: "YoutubePreviewImage",
                    altImgWithFallback: T.altImgWithFallback,
                    altImg: T.altImg,
                    video: T.video,
                  }),
                  de &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", {
                          className: "YoutubePreviewPlay",
                          children: (0, t.jsx)($.IOc, {}),
                        }),
                        (0, t.jsx)("div", {
                          className: "VideoHintText",
                          children: (0, ce.we)(
                            "#EventCalendar_WatchYouTubeVideo",
                          ),
                        }),
                      ],
                    }),
                ],
              });
            } else
              return (0, t.jsx)(B.N1, {
                ...T,
                classnames: (0, Oe.A)(I().YoutubePlayer, T.classnames),
              });
          };
      },
      9733: (A, Ze, i) => {
        "use strict";
        i.r(Ze), i.d(Ze, { default: () => Ra });
        var t = i(7850),
          K = i(58732),
          M = i(92757),
          $ = i(76559),
          B = i(179),
          Oe = i(41735),
          ce = i.n(Oe),
          j = i(75844),
          I = i(90626),
          N = i(99412),
          De = i(32093),
          Ae = i(72849),
          T = i(813),
          ge = i(53025),
          L = i(25792),
          de = i(24808),
          q = i(19188),
          H = i(56492),
          Pe = i(90537),
          mt = i(55483),
          pe = i(19298),
          wn = i(20169),
          Tn = i(95174),
          yn = i(33924),
          Mt = i.n(yn),
          Nn = i(95695),
          ee = i.n(Nn),
          x = i(36707),
          d = i(18210);
        function jn(n) {
          const { events: e, clanAccountID: s, onViewAll: o, children: a } = n,
            { data: r } = (0, mt.TB)(s);
          return !e.length || !r
            ? null
            : (0, t.jsx)(L.tH, {
                children: (0, t.jsxs)("div", {
                  className: (0, x.A)(Mt().OtherEventsCtn, "OtherEventsCtn"),
                  children: [
                    (0, t.jsxs)("div", {
                      className: ee().EventSectionTitleCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: (0, x.A)(
                            ee().EventSectionTitle,
                            "EventSectionTitle",
                          ),
                          children: (0, d.PP)(
                            "#EventBrowse_MoreEventsTitle",
                            r.group_name,
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: ee().EventSectionSpacer,
                          children: "\xA0",
                        }),
                        o
                          ? (0, t.jsx)("div", {
                              className: ee().EventSectionMoreBtn,
                              onClick: o,
                              children: (0, d.we)("#EventBrowse_MoreEventsBtn"),
                            })
                          : (0, t.jsx)(H.tj, {
                              eventModel: e[0],
                              route: H.PH.k_eViewWebSiteHub,
                              className: ee().EventSectionMoreBtn,
                              children: (0, d.we)("#EventBrowse_MoreEventsBtn"),
                            }),
                      ],
                    }),
                    (0, t.jsx)(pe.Z, {
                      className: Mt().OtherEvents,
                      "flow-children": "row",
                      navEntryPreferPosition: wn.iU.PREFERRED_CHILD,
                      children: e.map((l) =>
                        (0, t.jsx)(Tn.u, { event: l }, l.AnnouncementGID),
                      ),
                    }),
                    a,
                  ],
                }),
              });
        }
        var Ot = i(41635),
          Ce = i(85599);
        const Pt = (0, j.PA)((n) => {
          const {
              clanAccountID: e,
              gidAnnouncement: s,
              partnerEventStore: o,
              trackingLocation: a,
              bViewAllShowInfiniteScroll: r,
            } = n,
            l = $.b.InitFromClanID(e),
            m = (0, Pe.Y)(),
            u = (0, I.useRef)(null),
            [g, S] = (0, I.useState)([]),
            [w, C] = (0, I.useState)(!0),
            [v, p] = (0, I.useState)(!1);
          return (
            (0, I.useEffect)(
              () => (
                (async () => {
                  u.current &&
                    u.current("PartnerEventRow Initializng new mount");
                  const G = ce().CancelToken.source();
                  u.current = G.cancel;
                  const _ = $.b.InitFromClanID(e),
                    V = { only_summaries: !0 };
                  let F = await o.LoadAdjacentPartnerEventsByAnnouncement(
                    s,
                    _,
                    null,
                    4,
                    4,
                    V,
                    G,
                  );
                  if (!G.token.reason) {
                    F = F || [];
                    let ne = F.filter((W) => W.GetAnnouncementGID() != s).map(
                      (W) => W.AnnouncementGID,
                    );
                    Ot.fW(ne);
                    const Ne = ne
                      .slice(0, 3)
                      .map((W) => o.GetClanEventFromAnnouncementGID(W))
                      .filter((W) => !!W);
                    if ((S(Ne), C(!1), a)) {
                      let W = !1;
                      if (o.BHasClanAnnouncementGID(s)) {
                        let X = o.GetClanEventFromAnnouncementGID(s);
                        X &&
                          X.BIsPartnerEvent() &&
                          X.BIsVisibleEvent() &&
                          (m.RecordEventRead(X, a), (W = !0));
                      }
                      Ne.length > 0 &&
                        (F.filter((X) => X.BIsPartnerEvent()).forEach((X) =>
                          m.RecordEventShown(X, a),
                        ),
                        (W = !0)),
                        W && m.Flush();
                    }
                  }
                })(),
                () => {
                  u.current && u.current("PartnerEventRow: unmounting");
                }
              ),
              [e, s, o, a, m],
            ),
            w
              ? (0, t.jsx)(Ce.t, { position: "center", size: "medium" })
              : (0, t.jsx)(jn, {
                  events: g,
                  clanAccountID: e,
                  onViewAll: r ? () => p(!0) : void 0,
                  children:
                    !!(v && g.length) &&
                    (0, t.jsx)(q.N, {
                      appid: g[0].appid,
                      clanSteamID: l,
                      announcementGID: g[0].AnnouncementGID,
                      closeModal: () => p(!1),
                      partnerEventStore: o,
                    }),
                })
          );
        });
        var ht = i(65647),
          Dn = i(90316),
          kt = i.n(Dn),
          An = i(34592),
          f = i(3166),
          Bn = i(9905),
          Gn = i.n(Bn),
          _n = i(54071),
          Q = i(10142),
          Ln = i(84676);
        const se = ge.$.Get(),
          Ut = ge.$.GetSummaryStore();
        function Fn() {
          document.body.classList.contains("events_hub") &&
            document.body.classList.remove("events_hub");
        }
        function Hn(n) {
          let e;
          if (n && n.appid) e = Q.A.Get().GetApp(n.appid)?.GetName();
          else if (n && n.clanSteamID) {
            const o = T.ac.GetClanInfoByClanAccountID(
              n.clanSteamID.GetAccountID(),
            );
            e = o && o.group_name;
          }
          const s = n && n.GetNameWithFallback((0, N.sfN)(f.TS.LANGUAGE));
          if (n && e && s) {
            const o = (0, d.we)(
              "#EventCalendar_TabTitle_GroupNameAndEventDetail",
              e,
              s,
            );
            document.title != o && (document.title = o);
          }
        }
        const Rn = (0, j.PA)((n) => {
            const {
                bInfiniteScroll: e,
                event_gid: s,
                announcement_gid: o,
                clansteamid: a,
                appid: r,
              } = n,
              [l, m] = (0, I.useState)(s ? se.GetClanEventModel(s) : void 0),
              [u] = (0, Ln.t7)(l?.appid, {
                include_assets: !0,
                include_release: !0,
                include_platforms: !0,
                include_screenshots: !0,
              }),
              [g, S] = (0, I.useState)(!1),
              w = (p, E) => {
                E.token.reason || (m(p), Hn(p));
              },
              C = (p) => {
                const E = (0, An.H)(p);
                console.error(
                  "StoreEventDetailView failed " + E.strErrorMsg,
                  E,
                ),
                  S(!0);
              };
            (0, I.useEffect)(Fn, []),
              (0, I.useEffect)(() => {
                const p = ce().CancelToken.source();
                return (
                  l ||
                    (s && !se.GetClanEventModel(s)
                      ? se
                          .LoadPartnerEventGeneric(a, r, s, void 0, 0)
                          .then((E) => w(E, p))
                          .catch(() => {
                            p.token.reason ||
                              se
                                .LoadPartnerEventGeneric(a, r, void 0, s, 0)
                                .then((E) => w(E, p))
                                .catch(C);
                          })
                      : o &&
                        !se.GetClanEventGIDFromAnnouncementGID(o) &&
                        se
                          .LoadPartnerEventGeneric(a, r, void 0, o, 0)
                          .then((E) => w(E, p))
                          .catch(C)),
                  () => {
                    p.cancel("StoreEventDetailView: unmounting");
                  }
                );
              }, [s, a, r, o, l]);
            const v = (0, H.Bw)(l, H.PH.k_eStoreNewsHub, "allowRelative");
            if (g || !l || (l?.appid && !u)) {
              const p = "lang_" + (0, N.wwZ)((0, N.sfN)(f.TS.LANGUAGE)),
                E = "";
              return (0, t.jsxs)("div", {
                className: (0, x.A)(
                  kt().EventDetailsPageContainer,
                  p,
                  ee().PartnerEventFont,
                  kt().NoTitleArtwork,
                ),
                children: [
                  (0, t.jsx)("div", { style: { height: "100px" } }),
                  (0, t.jsx)(ht.K8, { strImageURL: E }),
                  (0, t.jsx)(ht.P2, {
                    strImageURL: E,
                    body: g
                      ? (0, t.jsx)("div", {
                          className: Gn().ErrorMsg,
                          children: (0, d.PP)(
                            "#Events_FailedToFind",
                            (0, t.jsx)("a", {
                              href: f.TS.STORE_BASE_URL + "news/",
                              children: (0, d.we)(
                                "#EventDisplay_NewsHubSubtitle",
                              ),
                            }),
                          ),
                        })
                      : (0, t.jsx)(Ce.t, {
                          string: (0, d.we)("#Loading"),
                          size: "medium",
                          position: "center",
                        }),
                    postbody:
                      g && a
                        ? (0, t.jsx)(Pt, {
                            clanAccountID: a.GetAccountID(),
                            partnerEventStore: Ut,
                          })
                        : void 0,
                  }),
                ],
              });
            }
            return e
              ? (0, t.jsx)(L.tH, {
                  children: (0, t.jsx)(q.N, {
                    appid: l.appid,
                    trackingLocation: Ae.Tc.HX,
                    announcementGID: l.GetAnnouncementGID(),
                    partnerEventStore: se,
                    eventModel: l,
                    showAppHeader: !0,
                    closeModal: () => n.history.push(v),
                  }),
                })
              : (0, t.jsx)(L.tH, {
                  children: (0, t.jsx)(ht.jA, {
                    lang: (0, N.sfN)(f.TS.LANGUAGE),
                    partnerEventStore: se,
                    event: l,
                    adminPanel:
                      f.TS.EREALM === De.TU.k_ESteamRealmChina
                        ? (0, t.jsx)(_n.P, { eventModel: l })
                        : (0, t.jsx)(de.g, {
                            eventModel: l,
                            partnerEventStore: se,
                          }),
                    otherEventRow: (0, t.jsx)(Pt, {
                      clanAccountID: l.clanSteamID.GetAccountID(),
                      gidAnnouncement: l.AnnouncementGID,
                      partnerEventStore: Ut,
                    }),
                  }),
                });
          }),
          $e = (0, M.y)(Rn);
        var z = i(14947),
          fe = i(65946),
          Vt = i(31561),
          Mn = i(72604),
          On = i(41623),
          R = i(49789),
          vt = i(73259),
          Wt = i(50974),
          Se = i(9046),
          b = i(38581),
          y = i(81673),
          D = i(42507),
          Ee = i(7582),
          gt = i(74618),
          Y = i(79118),
          Kt = i(17083),
          Pn = i(92025),
          Yt = i(24660),
          Ie = i(16412),
          k = i(36118),
          ue = i(71421),
          ke = i(53107),
          Ue = i(71742),
          pt = i(82734),
          J = i(30096),
          Ve = i(88003),
          Be = i(6469),
          kn = Object.defineProperty,
          Un = Object.getOwnPropertyDescriptor,
          We = (n, e, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? Un(e, s) : e, r = n.length - 1, l;
              r >= 0;
              r--
            )
              (l = n[r]) && (a = (o ? l(e, s, a) : l(a)) || a);
            return o && a && kn(e, s, a), a;
          };
        const Ge = class ve {
          static s_newsCuratorStore;
          m_mapNewsCurators = new Map();
          m_bIsLoadComplete = !1;
          m_mapLangToNewsCurators = new Map();
          m_LoadingPromise = null;
          static Get() {
            return (
              ve.s_newsCuratorStore ||
                ((ve.s_newsCuratorStore = new ve()),
                (ve.s_newsCuratorStore.m_LoadingPromise =
                  ve.s_newsCuratorStore.Init()),
                (window.g_NewsCuratorStore = ve.s_newsCuratorStore)),
              ve.s_newsCuratorStore
            );
          }
          constructor() {
            (0, z.Gn)(this);
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
          GetCuratorsForLang(e) {
            return this.m_mapLangToNewsCurators.get(e);
          }
          GetNewsCuratorForAccount(e) {
            return this.m_mapNewsCurators.get(e);
          }
          BIsTrustedPressAccount(e) {
            return this.GetNewsCuratorForAccount(e) !== void 0;
          }
          async Init() {
            d.A0.GetLanguageListForRealms([f.TS.EREALM]).forEach((r) =>
              this.m_mapLangToNewsCurators.set(r, []),
            );
            const s = f.TS.STORE_BASE_URL + "events/ajaxgetnewscurators";
            let o = { origin: self.origin };
            const a = await ce().get(s, { params: o });
            (0, z.h5)(() => {
              a.data && a.data.success && this.HandleCuratorResponse(a.data),
                (this.m_bIsLoadComplete = !0);
            });
          }
          HandleCuratorResponse(e) {
            if (
              (e.groupvanityinfo && T.ac.RegisterClanData(e.groupvanityinfo),
              e.newscuratorinfo)
            )
              for (const s of e.newscuratorinfo) {
                if (this.m_mapNewsCurators.has(s.clanAccountID)) continue;
                this.m_mapNewsCurators.set(s.clanAccountID, s);
                const o = T.ac.GetClanInfoByClanAccountID(s.clanAccountID);
                o && this.m_mapLangToNewsCurators.get(o.rss_language)?.push(s);
              }
          }
        };
        We([z.sH], Ge.prototype, "m_mapNewsCurators", 2),
          We([z.sH], Ge.prototype, "m_bIsLoadComplete", 2),
          We([z.sH], Ge.prototype, "m_mapLangToNewsCurators", 2),
          We([z.EW], Ge.prototype, "allNewsCurators", 1),
          We([z.XI], Ge.prototype, "HandleCuratorResponse", 1);
        let _e = Ge;
        var Vn = i(8323),
          Wn = i(48473),
          Kn = i(16345),
          ae = i.n(Kn),
          Yn = Object.defineProperty,
          zn = Object.getOwnPropertyDescriptor,
          Jn = (n, e, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? zn(e, s) : e, r = n.length - 1, l;
              r >= 0;
              r--
            )
              (l = n[r]) && (a = (o ? l(e, s, a) : l(a)) || a);
            return o && a && Yn(e, s, a), a;
          };
        function qe(n) {
          const e = new Set();
          return (
            (n.indexOf("games") >= 0 || n.indexOf("dlc") >= 0) && e.add("apps"),
            n.indexOf("curators") >= 0 && e.add("curators"),
            e
          );
        }
        function Xn(n) {
          return n == "game" || n == "software"
            ? "games"
            : n == "dlc" || n == "music"
              ? "dlc"
              : null;
        }
        const Qn = 300;
        class zt extends I.Component {
          state = {
            strSearchString: "",
            rgAppSuggestions: null,
            rgCuratorSuggestions: null,
          };
          m_nHighestSentRequestID = 0;
          m_mapHighestReceivedRequestIDFromBackEnd = new Map([
            ["apps", 0],
            ["curators", 0],
          ]);
          m_timerForChange = new Vn.LU();
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
          async GetSuggestionsFromServer(e) {
            const s = qe(this.props.rgCorporaToSearch);
            s.has("apps") && this.GetAppSuggestionsFromServer(e),
              s.has("curators") && this.GetCuratorSuggestions(e);
          }
          async GetCuratorSuggestions(e) {
            const s = _e.Get().allNewsCurators,
              o = [];
            for (const a of s) {
              const r = T.ac.GetClanInfoByClanAccountID(a.clanAccountID),
                l = {
                  corpus: "curators",
                  id: a.clanAccountID,
                  name: r?.group_name,
                  img: r?.avatar_full_url,
                };
              if ((r?.group_name?.toLocaleLowerCase() || "").indexOf(e) >= 0) {
                if (
                  (this.props.fnFilterSuggestion &&
                    !this.props.fnFilterSuggestion(l)) ||
                  Be.Fm.Get().BIsIgnoringCurator(r.clanAccountID)
                )
                  continue;
                const u = Be.Fm.Get().BIsFollowingCurator(r.clanAccountID),
                  g = (0, t.jsx)(
                    Jt,
                    {
                      suggestion: l,
                      fnOnSelected: this.props.fnOnSelected,
                      bShowFollowingLabel: u,
                    },
                    "curatorsug_" + l.id,
                  );
                o.push(
                  this.props.fnDecorateSuggestion
                    ? this.props.fnDecorateSuggestion(l, g)
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
          async GetAppSuggestionsFromServer(e) {
            const s = this.m_nHighestSentRequestID,
              o = [];
            this.props.rgCorporaToSearch.indexOf("games") >= 0 &&
              (o.push("game"), o.push("software")),
              this.props.rgCorporaToSearch.indexOf("dlc") >= 0 &&
                (o.push("dlc"), o.push("music"));
            const a = {
                cc: f.TS.COUNTRY,
                l: f.TS.LANGUAGE,
                realm: De.TU.k_ESteamRealmGlobal,
                origin: self.origin,
                f: "jsonfull",
                term: e.replace(" ", "+"),
                require_type: o.join(","),
                excluded_tags: Be.Fm.Get().GetExcludedTagsSortedByID(),
                excluded_content_descriptors:
                  Be.Fm.Get().ExcludedContentDescriptor,
              },
              r = `${f.TS.STORE_BASE_URL}search/suggest`,
              l = await ce().get(r, { params: a, withCredentials: !0 });
            if (s < this.m_mapHighestReceivedRequestIDFromBackEnd.get("apps"))
              return;
            this.m_mapHighestReceivedRequestIDFromBackEnd.set("apps", s);
            let m;
            l?.data?.length &&
              (m = l.data.map((u) => {
                const g = { corpus: Xn(u.type), ...u, id: parseInt(u.id) };
                if (
                  this.props.fnFilterSuggestion &&
                  !this.props.fnFilterSuggestion(g)
                )
                  return null;
                const S = (0, t.jsx)(
                  Jt,
                  { suggestion: g, fnOnSelected: this.props.fnOnSelected },
                  g.type + g.id,
                );
                return this.props.fnDecorateSuggestion
                  ? this.props.fnDecorateSuggestion(g, S)
                  : S;
              })),
              this.setState({ rgAppSuggestions: m });
          }
          async UpdateSuggestions(e) {
            const s =
              e.target.value && e.target.value.trim().toLocaleLowerCase();
            if ((this.m_nHighestSentRequestID++, !s?.length)) {
              Array.from(qe(this.props.rgCorporaToSearch)).forEach((o) =>
                this.m_mapHighestReceivedRequestIDFromBackEnd.set(
                  o,
                  this.m_nHighestSentRequestID,
                ),
              ),
                this.m_timerForChange.Cancel(),
                this.setState({ strSearchString: "" }),
                this.ResetSuggestions();
              return;
            }
            this.setState({ strSearchString: s }),
              this.m_timerForChange.Schedule(Qn, () =>
                this.GetSuggestionsFromServer(s),
              );
          }
          ResetSuggestions() {
            this.setState({
              rgAppSuggestions: null,
              rgCuratorSuggestions: null,
            });
          }
          GetLimitedSuggestions() {
            let { rgAppSuggestions: e, rgCuratorSuggestions: s } = this.state;
            const o = 10;
            let a = e ? e.length : o,
              r = s ? s.length : o;
            return (
              a + r > o && (a = o - Math.min(r, 2)),
              (r = o - a),
              (e = e?.slice(0, a)),
              (s = s?.slice(0, r)),
              { rgAppSuggestions: e, rgCuratorSuggestions: s }
            );
          }
          render() {
            const {
                strLabel: e,
                focusOnMount: s,
                rgCorporaToSearch: o,
                strResultsClass: a,
              } = this.props,
              { strSearchString: r } = this.state,
              { rgAppSuggestions: l, rgCuratorSuggestions: m } =
                this.GetLimitedSuggestions(),
              u = r?.length > 0,
              g = l?.length > 0,
              S = m?.length > 0,
              w = qe(o).size > 1,
              C =
                w &&
                g &&
                (0, d.we)(
                  o.indexOf("dlc") >= 0
                    ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                    : "#EventCalendar_SearchResultsHeader_GameSection",
                ),
              v = Array.from(qe(o)).some(
                (E) =>
                  this.m_nHighestSentRequestID >
                  this.m_mapHighestReceivedRequestIDFromBackEnd.get(E),
              ),
              p = !S && !g && !v;
            return (0, t.jsxs)("div", {
              className: ae().SuggestContainer,
              children: [
                (0, t.jsx)(Ie.pd, {
                  type: "text",
                  label: e,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: u,
                  focusOnMount: s,
                }),
                u &&
                  (0, t.jsxs)("div", {
                    className: (0, x.A)(ae().Results, a),
                    children: [
                      g &&
                        (0, t.jsxs)(
                          "div",
                          {
                            children: [
                              w &&
                                (0, t.jsx)("div", {
                                  className: ae().ResultSectionHeader,
                                  children: C,
                                }),
                              l,
                            ],
                          },
                          "game-suggestions",
                        ),
                      S &&
                        (0, t.jsxs)(
                          "div",
                          {
                            children: [
                              w &&
                                (0, t.jsx)("div", {
                                  className: ae().ResultSectionHeader,
                                  children: (0, d.we)(
                                    "#EventCalendar_SearchResultsHeader_CuratorSection",
                                  ),
                                }),
                              m,
                            ],
                          },
                          "curator-suggestions",
                        ),
                      p &&
                        (0, t.jsx)(
                          "div",
                          {
                            className: ae().EmptyResults,
                            children: (0, d.we)(
                              "#EventCalendar_GameSearch_NoneFound",
                            ),
                          },
                          "empty-results",
                        ),
                      v && (0, t.jsx)(Ce.t, { size: "small" }),
                    ],
                  }),
              ],
            });
          }
        }
        Jn([J.oI], zt.prototype, "UpdateSuggestions", 1);
        const Jt = (n) =>
          (0, t.jsxs)(
            "div",
            {
              className: ae().ResultRow,
              onClick: () => n.fnOnSelected(n.suggestion),
              children: [
                (0, t.jsx)("img", {
                  src: n.suggestion.img,
                  className: ae().AvatarImage,
                }),
                (0, t.jsxs)("div", {
                  className: ae().GameName,
                  children: [" ", (0, Wn.EK)(n.suggestion.name), " "],
                }),
                n.bShowFollowingLabel &&
                  (0, t.jsx)("div", {
                    className: ae().Label,
                    children: (0, d.we)("#EventCalendar_FollowingCurator"),
                  }),
              ],
            },
            `suggestion-${n.suggestion.id}`,
          );
        var Ke = i(96538),
          Zn = i(60655),
          Xt = i(37934),
          $n = i(63292),
          oe = i.n($n);
        function qn(n) {
          const { closeModal: e } = n,
            s = () => {
              (0, b.v0)().m_visibilityStore.SetGameSourceAllowed(
                y.FD.k_ECurator,
                !0,
              ),
                e && e();
            },
            o = () => {
              (0,
              b.v0)().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(
                !0,
              ),
                e && e();
            };
          return (0, t.jsx)(Ke.o0, {
            strTitle: (0, d.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Title",
            ),
            strDescription: (0, d.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Description",
            ),
            strOKButtonText: (0, d.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton",
            ),
            strCancelButtonText: (0, d.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton",
            ),
            onOK: s,
            onCancel: o,
          });
        }
        function Qt(n) {
          n ||
            ((0, b.dP)() &&
              ((0,
              b.v0)().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
                (0, b.v0)().m_visibilityStore.BIsGameSourceAllowed(
                  y.FD.k_ECurator,
                ) ||
                (0, Ve.pg)((0, t.jsx)(qn, {}), window)));
        }
        const es = (n) =>
            (0, t.jsx)(Ke.x_, {
              onEscKeypress: n.closeModal,
              children: (0, t.jsx)(L.tH, {
                children: (0, t.jsxs)(Ie.UC, {
                  children: [
                    (0, t.jsx)(Ie.Y9, {
                      children: (0, d.we)("#EventCurator_BrowseDialog_Title"),
                    }),
                    (0, t.jsxs)(Ie.nB, {
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, d.we)(
                            "#EventCurator_BrowseDialog_Desc",
                          ),
                        }),
                        (0, t.jsx)(Zt, {}),
                      ],
                    }),
                    (0, t.jsx)(Ie.wi, {
                      children: (0, t.jsx)(Ie.jn, {
                        onClick: n.closeModal,
                        children: (0, d.we)("#Button_Dismiss"),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ts = (n) =>
            (0, t.jsx)(nn, {
              title: (0, d.we)("#EventCurator_BrowseDialog_Title"),
              description: (0, d.we)("#EventCurator_BrowseDialog_Desc"),
              children: (0, t.jsx)(Zt, {}),
            }),
          Zt = (n) => {
            const [e, s] = I.useState(_e.Get().IsLoaded());
            I.useEffect(() => {
              e || (async () => (await _e.Get().WaitForInitialLoad(), s(!0)))();
            }, [e]);
            let o = new Array();
            return (
              e &&
                d.pf
                  .GetELanguageFallbackOrder([De.TU.k_ESteamRealmGlobal])
                  .forEach((r) =>
                    o.push((0, t.jsx)(ns, { lang: r }, "curlang" + r)),
                  ),
              (0, t.jsx)(t.Fragment, {
                children: e
                  ? (0, t.jsx)(I.Fragment, { children: o })
                  : (0, t.jsx)(Ce.t, {
                      size: "medium",
                      position: "center",
                      string: (0, d.we)("#Loading"),
                    }),
              })
            );
          },
          ns = (n) => {
            const e = _e.Get().GetCuratorsForLang(n.lang);
            if (!e) return null;
            const s = e
              .map((a) => T.ac.GetClanInfoByClanAccountID(a.clanAccountID))
              .filter((a) => !!a);
            if (s.length == 0) return null;
            s.sort((a, r) => a.group_name.localeCompare(r.group_name));
            const o = s.map((a) =>
              (0, t.jsx)(
                $t,
                { clanInfo: a, layout: "row" },
                "curatorbrowse_" + a.clanAccountID,
              ),
            );
            return (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("div", {
                  className: oe().LanguageHeader,
                  children: (0, d.we)(
                    "#EventCurator_BrowseDialog_LangCurator",
                    (0, d.we)("#Language_" + (0, N.LgB)(n.lang)),
                  ),
                }),
                o,
              ],
            });
          },
          ss = (0, j.PA)((n) => {
            const e = T.ac.GetClanInfoByClanAccountID(n.clanid);
            if (!e) return (0, t.jsx)("div", { children: n.children });
            const s = {
                clan_account_id: e.clanAccountID,
                name: e.group_name,
                type: "developer",
              },
              o = (0, t.jsx)("div", {
                className: oe().CuratorHoverContainer,
                children: (0, t.jsx)(Zn.hA, {
                  creatorID: s,
                  bSmallFormat: !0,
                  bHideCreatorType: !0,
                  bHideFollowButton: !0,
                }),
              });
            return (0, t.jsx)(ue.m9, {
              toolTipContent: o,
              bTopmost: !0,
              children: n.children,
            });
          }),
          $t = (n) => {
            const [e, s] = I.useState(!1),
              o = () => {
                (0, Ve.pg)(
                  (0, t.jsx)(Ke.KG, {
                    strDescription: (0, d.we)(
                      "#EventCurator_NoEventsFound_Body",
                    ),
                    strTitle: (0, d.we)("#EventCurator_NoEventsFound_Title"),
                  }),
                  window,
                ),
                  s(!1);
              },
              a = () =>
                e
                  ? (0, t.jsx)(L.tH, {
                      children: (0, t.jsx)(q.N, {
                        onEventNotFound: o,
                        appid: 0,
                        clanSteamID: n.clanInfo.clanSteamID,
                        trackingLocation: Ae.Tc.qC,
                        eventModel: void 0,
                        announcementGID: void 0,
                        partnerEventStore: Y.O3,
                        showAppHeader: !0,
                        closeModal: () => s(!1),
                      }),
                    })
                  : null,
              { clanInfo: r, layout: l } = n,
              m = l === "row" ? oe().CuratorInfoRow : oe().CuratorInfoIcon,
              u = (0, t.jsx)(ss, {
                clanid: r.clanSteamID.GetAccountID(),
                children: (0, t.jsxs)("div", {
                  className: (0, x.A)(
                    ee().FlexRowContainer,
                    oe().CuratorInfoTitleCtn,
                  ),
                  onClick: () => s(!0),
                  children: [
                    (0, t.jsx)("img", {
                      className: oe().CuratorInfoImg,
                      src: r.avatar_full_url,
                      alt: r.group_name,
                    }),
                    (0, t.jsx)("div", {
                      className: oe().CuratorInfoName,
                      children: r.group_name,
                    }),
                  ],
                }),
              });
            return (0, t.jsxs)("div", {
              className: (0, x.A)(ee().FlexRowWrapSpaceBetweenContainer, m),
              children: [
                a(),
                (0, t.jsx)("div", { onClick: () => s(!0), children: u }),
                (0, t.jsx)("div", {
                  className: (0, x.A)(
                    ee().FlexRowContainer,
                    oe().CuratorInfoActionCtn,
                  ),
                  children: (0, t.jsx)(Xt.of, {
                    clanAccountID: r.clanAccountID,
                    className: oe().CuratorInfoFollow,
                    fnSuccessCallback: Qt,
                  }),
                }),
              ],
            });
          };
        var as = i(10686),
          c = i.n(as),
          os = i(19367),
          et = i.n(os);
        class Ct {
          m_dateLoadTime = Ee.HD.GetTimeNowWithOverrideAsDate();
          IsCurrentlyVisible(e) {
            return (
              (!e.startVisible || e.startVisible <= this.m_dateLoadTime) &&
              (!e.endVisible || e.endVisible >= this.m_dateLoadTime)
            );
          }
          static IsCurrentlyActive(e) {
            const s = Ee.HD.GetTimeNowWithOverrideAsDate();
            return (
              (!e.startEvent || e.startEvent <= s) &&
              (!e.endEvent || e.endEvent >= s)
            );
          }
          static LocalizeDateString(e) {
            if (!e.startEvent) return null;
            const s = { month: "long", day: "numeric" },
              o = e.startEvent.toLocaleDateString(
                d.pf.GetPreferredLocales(),
                s,
              );
            if (!e.endEvent) return o;
            const a = {
                month:
                  e.startEvent.getMonth() != e.endEvent.getMonth()
                    ? "long"
                    : void 0,
                day: "numeric",
              },
              r = e.endEvent.toLocaleDateString(d.pf.GetPreferredLocales(), a);
            return `${o} - ${r}`;
          }
          GetVisibleSpecialEvents() {
            return [
              {
                sLocToken: "#NewsHubSpecialEvent_GameFestival",
                startVisible: new Date(
                  et()("2020-06-16T14:00:00-07:00").unix() * 1e3,
                ),
                endVisible: new Date(
                  et()("2020-06-22T10:00:00-07:00").unix() * 1e3,
                ),
                startEvent: new Date(
                  et()("2020-06-16T10:00:00-07:00").unix() * 1e3,
                ),
                endEvent: new Date(
                  et()("2020-06-22T10:00:00-07:00").unix() * 1e3,
                ),
                newshubUrl: "news/collection/GameFestival2020",
              },
            ].filter((s) => this.IsCurrentlyVisible(s));
          }
        }
        const qt = new Ct();
        class rs extends I.Component {
          render() {
            const { specialEvent: e } = this.props,
              s = window.location.href === f.TS.STORE_BASE_URL + e.newshubUrl,
              o = Ct.IsCurrentlyActive(e),
              a = Ct.LocalizeDateString(e);
            return (0, t.jsx)(Kt.N_, {
              to: "/" + e.newshubUrl,
              children: (0, t.jsxs)("div", {
                className: (0, x.A)(
                  c().SpecialEvent,
                  s && c().SpecialEventOnPage,
                  o && c().SpecialEventActive,
                ),
                children: [
                  (0, t.jsx)("div", {
                    className: c().SpecialEventTitle,
                    children: (0, d.we)(e.sLocToken),
                  }),
                  a &&
                    (0, t.jsx)("div", {
                      className: c().SpecialEventTime,
                      children: a,
                    }),
                ],
              }),
            });
          }
        }
        class is extends I.Component {
          render() {
            const e = qt.GetVisibleSpecialEvents();
            return e.length === 0
              ? null
              : (0, t.jsxs)("div", {
                  className: c().SpecialEventListGroup,
                  children: [
                    (0, t.jsx)("div", {
                      className: c().SpecialEventListTitle,
                      children: (0, d.we)("#Events_SpecialEvents"),
                    }),
                    (0, t.jsx)("div", {
                      className: c().SpecialEventList,
                      children: e.map((s) =>
                        (0, t.jsx)(rs, { specialEvent: s }, s.sLocToken),
                      ),
                    }),
                  ],
                });
          }
        }
        var ls = i(68900),
          cs = i(12088),
          Z = i.n(cs);
        function en() {
          return (0, d.vl)(new Date());
        }
        const ds = (n) => {
            const e = f.TS.PUBLIC_SHARED_URL + "images/";
            return (0, t.jsxs)("div", {
              className: Z().LegalFooter,
              children: [
                (0, t.jsxs)("div", {
                  className: Z().mainmenu_links_china,
                  children: [
                    (0, t.jsx)("a", {
                      href: f.TS.STORE_BASE_URL + "about",
                      children: "\u5173\u4E8E\u84B8\u6C7D\u5E73\u53F0",
                    }),
                    "\xA0 | \xA0",
                    (0, t.jsx)("a", {
                      href: f.TS.STORE_BASE_URL + "steam_refunds",
                      children: "\u9000\u6B3E\u653F\u7B56",
                    }),
                    "\xA0 | \xA0",
                    (0, t.jsx)("a", {
                      href: f.TS.STORE_BASE_URL + "subscriber_agreement",
                      children:
                        "\u8F6F\u4EF6\u8BB8\u53EF\u670D\u52A1\u534F\u8BAE",
                    }),
                    "\xA0 | \xA0",
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("a", {
                      href: f.TS.STORE_BASE_URL + "privacy_agreement",
                      children:
                        "\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u653F\u7B56",
                    }),
                    "\xA0 | \xA0",
                    (0, t.jsx)("a", {
                      href: "https://about.steamchina.com/content_report.html",
                      target: "_blank",
                      rel: "noreferrer",
                      children:
                        "\u4E0D\u826F\u5185\u5BB9\u4E3E\u62A5\u6295\u8BC9",
                    }),
                    "\xA0 | \xA0",
                    (0, t.jsx)("a", {
                      href: "https://about.steamchina.com/infringement_report.html",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "\u4FB5\u6743\u6295\u8BC9",
                    }),
                    "\xA0 | \xA0",
                    (0, t.jsx)("a", {
                      href: "https://about.steamchina.com/parentguardianship_agreement.html",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "\u5BB6\u957F\u76D1\u62A4",
                    }),
                  ],
                }),
                (0, t.jsx)("div", { className: Z().mainmenu_line }),
                (0, t.jsxs)("div", {
                  className: Z().mainmenu_logos_china,
                  children: [
                    (0, t.jsx)("a", {
                      href: "https://www.wanmei.com/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: (0, t.jsx)("img", {
                        className: Z().mainmenu_china_pw_logo,
                        src: e + "footer/pw_logo_gy.svg?v=1",
                      }),
                    }),
                    (0, t.jsx)("a", {
                      href: "https://valvesoftware.com",
                      target: "_blank",
                      rel: "noreferrer",
                      children: (0, t.jsx)("img", {
                        className: Z().mainmenu_china_valve_logo,
                        src: e + "footer/valve_logo_gy.svg?v=1",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: Z().mainmenu_legal_china,
                  children: [
                    (0, t.jsxs)("div", {
                      className: Z().mainmenu_legal_valvelegal,
                      children: [
                        `\xA9 ${en()} Valve Corporation \u7248\u6743\u6240\u6709\uFF0C\u5B8C\u7F8E\u4E16\u754C\u5DF2\u83B7\u6388\u6743`,
                        (0, t.jsx)("br", {}),
                        "\u6240\u6709\u5546\u6807\u5747\u5C5E\u4E8E\u5176\u5728\u7F8E\u56FD\u6216\u5176\u4ED6\u56FD\u5BB6\u7684\u62E5\u6709\u8005\u3002",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: Z().mainmenu_legal_pwlegal,
                      children: [
                        "\xA9 \u5B8C\u7F8E\u4E16\u754C\u5F81\u5947(\u4E0A\u6D77)\u591A\u5A92\u4F53\u79D1\u6280\u6709\u9650\u516C\u53F8 \u7248\u6743\u6240\u6709\u3002",
                        (0, t.jsx)("br", {}),
                        "\u589E\u503C\u7535\u4FE1\u4E1A\u52A1\u7ECF\u8425\u8BB8\u53EF\u8BC1\u6CAAB2-20180406",
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          us = (n) =>
            (0, t.jsxs)("div", {
              className: Z().LegalFooter,
              children: [
                (0, t.jsx)("img", {
                  src:
                    f.TS.STORE_CDN_URL +
                    "public/images/footerLogo_valve_new.png",
                }),
                (0, t.jsx)("div", {
                  className: Z().FooterLegal,
                  children: (0, d.we)("#Legal_Footer_WithYear", en()),
                }),
              ],
            }),
          ms = (n) => ((0, f.Y2)() ? (0, t.jsx)(ds, {}) : (0, t.jsx)(us, {}));
        var Ye = i(35675),
          hs = Object.defineProperty,
          vs = Object.getOwnPropertyDescriptor,
          Le = (n, e, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? vs(e, s) : e, r = n.length - 1, l;
              r >= 0;
              r--
            )
              (l = n[r]) && (a = (o ? l(e, s, a) : l(a)) || a);
            return o && a && hs(e, s, a), a;
          };
        const tn = class Me {
          m_curDisplay = "desktop_navigation";
          m_fnGetRouterHistory = void 0;
          static s_GlobalStore;
          static Get() {
            return (
              Me.s_GlobalStore || (Me.s_GlobalStore = new Me()),
              Me.s_GlobalStore
            );
          }
          constructor() {
            (0, z.Gn)(this);
          }
          UpdateLocation(e, s) {
            this.m_fnGetRouterHistory = e;
            const o = (0, B.f3)(s, "optionpane");
            if (o)
              switch (o) {
                case "event_filter":
                case "browse_curator":
                case "desktop_navigation":
                  this.m_curDisplay != o && (this.m_curDisplay = o);
                  break;
              }
            else
              this.m_curDisplay != "desktop_navigation" &&
                (this.m_curDisplay = "desktop_navigation");
            return this.m_curDisplay;
          }
          SetDisplay(e) {
            (this.m_curDisplay = e),
              this.m_fnGetRouterHistory &&
                (0, B.Bm)(
                  this.m_fnGetRouterHistory(),
                  "optionpane",
                  this.m_curDisplay == "desktop_navigation"
                    ? void 0
                    : this.m_curDisplay,
                );
          }
          GetDisplay() {
            return this.m_curDisplay;
          }
          ShowBrowseCurator(e) {
            ye()
              ? Me.Get().SetDisplay("browse_curator")
              : (0, Ve.pg)((0, t.jsx)(es, {}), (0, pt.uX)(e));
          }
        };
        Le([z.sH], tn.prototype, "m_curDisplay", 2);
        let Fe = tn,
          ft = class extends I.Component {
            GetVisibilityStore() {
              return (0, b.v0)().m_visibilityStore;
            }
            OnEventTypeChange(n, e) {
              this.GetVisibilityStore().SetEventTypeGroupAllowed(n, e),
                this.props.fnOnFilterChange();
            }
            RenderEventTypeCheckbox(n) {
              const e = this.GetVisibilityStore().BIsEventTypeGroupAllowed(n);
              return (0, t.jsx)(
                ue.he,
                {
                  toolTipContent: (0, d.we)(
                    "#EventCalendar_EventTypeGroup_ttip_" + n,
                  ),
                  direction: "top",
                  children: (0, t.jsx)(st, {
                    label: (0, d.we)("#EventCalendar_EventTypeGroup_" + n),
                    checked: e,
                    onChange: (s) => this.OnEventTypeChange(n, s),
                  }),
                },
                `group-${n}`,
              );
            }
            OnGameSourceChange(n, e) {
              this.GetVisibilityStore().SetGameSourceAllowed(n, e),
                this.props.fnOnFilterChange();
            }
            RenderGameSourceCheckbox(n, e) {
              const s =
                this.GetVisibilityStore().BIsGameSourceAllowed(n) ||
                (n == y.FD.k_ELibrary &&
                  this.GetVisibilityStore().BIsGameSourceAllowed(
                    y.FD.k_ERecent,
                  ));
              return (0, t.jsx)(
                ue.he,
                {
                  direction: "top",
                  toolTipContent: e
                    ? (0, d.we)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : (0, d.we)("#EventCalendar_GameSource_ttip_" + n),
                  children: (0, t.jsx)(st, {
                    label: (0, d.we)("#EventCalendar_GameSource_" + n),
                    checked: s,
                    disabled: e,
                    onChange: (o) => this.OnGameSourceChange(n, o),
                  }),
                },
                `gs-${n}`,
              );
            }
            render() {
              const { bUserIsLoggedIn: n } = this.props,
                e = (0, b.v0)();
              let s = !0;
              if (e.BIsSingleGroupCalendar()) {
                let l = T.ac.GetClanInfoByClanAccountID(e.GetSingleGroupID());
                l && l.has_rss_feed && (s = !1);
              } else
                e.BIsCollectionCalendar() &&
                  (e.GetKey().collectionid == D.g.Press ||
                    e.GetKey().collectionid == D.g.Dev_Sales ||
                    e.GetKey().collectionid == D.g.Dev_AssociatedPress) &&
                  (s = !1);
              const o = bs(e),
                a = gt.S.Get().GetMutedSourceCount(),
                r =
                  e.BIsSingleSourceMuted() ||
                  (!e.BIsSingleSourceCalendar() && a > 0);
              return (0, t.jsxs)(nn, {
                title: (0, d.we)("#EventCalendar_FiltersTitle"),
                description: (0, d.we)(
                  e.BIsGlobalCalendar()
                    ? "#EventCalendar_FiltersDescription"
                    : "#EventCalendar_FiltersDescription_NonPersonalized",
                ),
                children: [
                  (0, t.jsxs)("div", {
                    className: c().FilterSection,
                    children: [
                      s &&
                        (0, t.jsxs)(tt, {
                          children: [
                            (0, t.jsx)(nt, {
                              children: (0, d.we)(
                                "#EventCalendar_FilterSubSection_EventTypeGroups",
                              ),
                            }),
                            this.RenderEventTypeCheckbox(y.xj.k_EEvents),
                            this.RenderEventTypeCheckbox(y.xj.k_EStreaming),
                            this.RenderEventTypeCheckbox(y.xj.k_EUpdates),
                            this.RenderEventTypeCheckbox(y.xj.k_EReleases),
                            this.RenderEventTypeCheckbox(y.xj.k_ESales),
                            this.RenderEventTypeCheckbox(y.xj.k_ENews),
                          ],
                        }),
                      !!e.BIsGlobalCalendar() &&
                        (0, t.jsxs)(tt, {
                          children: [
                            (0, t.jsx)(nt, {
                              children: (0, d.we)(
                                "#EventCalendar_FilterSubSection_GameSources",
                              ),
                            }),
                            this.RenderGameSourceCheckbox(y.FD.k_ELibrary, !n),
                            (0, t.jsx)("div", {
                              className: c().FilterSubOption,
                              children: this.RenderGameSourceCheckbox(
                                y.FD.k_ERecent,
                                !n,
                              ),
                            }),
                            this.RenderGameSourceCheckbox(y.FD.k_EWishlist, !n),
                            (0, Ye.xU)() &&
                              this.RenderGameSourceCheckbox(
                                y.FD.k_EFollowing,
                                !n,
                              ),
                            this.RenderGameSourceCheckbox(
                              y.FD.k_ERecommended,
                              !n,
                            ),
                            this.RenderGameSourceCheckbox(y.FD.k_ESteam),
                            Ee.HD.bIncludeFeaturedAsGameSource &&
                              this.RenderGameSourceCheckbox(y.FD.k_EFeatured),
                          ],
                        }),
                      !!(
                        (0, Ye.Us)() &&
                        (e.BIsGlobalCalendar() || e.BIsSingleAppCalendar())
                      ) &&
                        (0, t.jsxs)(tt, {
                          children: [
                            (0, t.jsx)(nt, {
                              children: (0, d.we)(
                                "#EventCalendar_FilterSubSection_CuratorSources",
                              ),
                            }),
                            this.RenderGameSourceCheckbox(y.FD.k_ECurator, !n),
                            (0, t.jsx)(St, {
                              onClick: Fe.Get().ShowBrowseCurator,
                              children: (0, d.we)(
                                "#EventCalendar_BrowseCurators",
                              ),
                            }),
                          ],
                        }),
                      o &&
                        (0, t.jsx)(gs, {
                          calendar: e,
                          onFilterChange: this.props.fnOnFilterChange,
                        }),
                      !!e.BIsSingleSourceMuted() &&
                        (0, t.jsx)("div", {
                          children: (0, d.we)(
                            e.BIsSingleGroupCalendar()
                              ? "#EventCalendar_SingleGroupIsMuted"
                              : "#EventCalendar_SingleAppIsMuted",
                          ),
                        }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: c().SideBarFilterNavLinks,
                    children: [
                      r &&
                        (0, t.jsx)(ke.uU, {
                          className: c().MutedSourcesGroup,
                          href: f.TS.STORE_BASE_URL + "account/emailoptout/app",
                          bDisableContextMenu: !0,
                          children: (0, t.jsxs)(St, {
                            children: [
                              (0, t.jsx)(k.fSs, { muted: !0 }),
                              (0, d.we)("#EventCalendar_ManageMutedSources"),
                              (0, t.jsx)("div", {
                                className: c().NumberDisplay,
                                children: a,
                              }),
                            ],
                          }),
                        }),
                      (0, t.jsx)(ke.uU, {
                        href: f.TS.STORE_BASE_URL + "account/preferences",
                        bDisableContextMenu: !0,
                        children: (0, t.jsxs)(St, {
                          children: [
                            (0, t.jsx)(k.nkJ, {}),
                            (0, d.we)("#EventCalendar_ManageStorePref"),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              });
            }
          };
        ft = Le([j.PA], ft);
        const tt = (0, ke.Ri)(c().FilterSubSection),
          nt = (0, ke.Ri)(c().FilterSubSectionTitle),
          St = (0, ke.Ri)(c().FilterLink);
        function gs(n) {
          const { calendar: e, onFilterChange: s } = n,
            [o, a] = (0, fe.q3)(() => [
              e
                .GetAllClans()
                .filter((r) => T.ac.GetClanInfoByClanAccountID(r)?.group_name),
              e.GetAllApps().filter((r) => Q.A.Get().GetApp(r)?.GetName()),
            ]);
          return (
            (0, Ue.wT)(
              e.BIsCollectionCalendar,
              "Attempted to render collection source filters for a non collection calendar",
            ),
            e.BIsCollectionCalendar()
              ? (0, t.jsxs)(tt, {
                  children: [
                    (0, t.jsx)(nt, {
                      children: (0, d.we)(
                        "#EventCalendar_FilterSubSection_CollectionSources",
                      ),
                    }),
                    o.map((r) =>
                      (0, t.jsx)(
                        ps,
                        { calendar: e, clanid: r, onFilterChange: s },
                        r,
                      ),
                    ),
                    a.map((r) =>
                      (0, t.jsx)(
                        Cs,
                        { calendar: e, appid: r, onFilterChange: s },
                        r,
                      ),
                    ),
                  ],
                })
              : null
          );
        }
        function ps(n) {
          const { calendar: e, clanid: s, onFilterChange: o } = n,
            a = (0, fe.q3)(() => e.m_visibilityStore.BIsClanVisible(s)),
            r = (l) => {
              e.m_visibilityStore.SetClanVisibility(s, l), o();
            };
          return (0, t.jsx)(st, {
            label: T.ac.GetClanInfoByClanAccountID(s)?.group_name,
            checked: a,
            onChange: r,
          });
        }
        function Cs(n) {
          const { calendar: e, appid: s, onFilterChange: o } = n,
            a = e.m_visibilityStore.BIsAppVisible(s),
            r = (l) => {
              e.m_visibilityStore.SetAppVisibility(s, l), o();
            };
          return (0, t.jsx)(st, {
            label: Q.A.Get().GetApp(s)?.GetName(),
            checked: a,
            onChange: r,
          });
        }
        function st(n) {
          return (0, t.jsx)("div", {
            className: c().FilterOption,
            children: (0, t.jsx)(Ie.Yh, { ...n }),
          });
        }
        const nn = (n) =>
          (0, t.jsxs)("div", {
            className: c().FilterControlPage,
            children: [
              (0, t.jsx)("div", {
                className: c().FiltersTitle,
                children: n.title,
              }),
              !!n.description &&
                (0, t.jsx)("div", {
                  className: c().FiltersDescription,
                  children: n.description,
                }),
              n.children,
            ],
          });
        function at(n) {
          Fe.Get().SetDisplay(n ? "event_filter" : "desktop_navigation");
        }
        const fs = (0, j.PA)(function (e) {
            const {
                bUserIsLoggedIn: s,
                nDisappearingHeaderVisibleHeight: o,
                bIsCollapsed: a,
                fnToggleCollapsed: r,
                fnOnFilterChange: l,
              } = e,
              m = ye(),
              u = (0, t.jsx)("div", {
                className: c().MobileCloseButton,
                onClick: () => {
                  at(!1), r();
                },
                children: (0, t.jsx)(k.i6V, {}),
              }),
              g = (0, f.Qn)(),
              S = a ? Math.max(0, o) : 0,
              w =
                m || g
                  ? null
                  : (0, t.jsx)("div", {
                      onClick: r,
                      className: c().CollapseButton,
                      children: (0, t.jsx)("div", {
                        style: { marginTop: `${S}px` },
                        className: c().DesktopButton,
                        children: (0, t.jsx)(k.F2T, { angle: a ? 180 : 0 }),
                      }),
                    }),
              C = m
                ? null
                : (0, t.jsx)("div", {
                    onClick: () => at(!1),
                    className: c().CollapseButton,
                    children: (0, t.jsx)("div", {
                      style: { marginTop: `${S}px` },
                      className: c().DesktopButton,
                      children: (0, t.jsx)(k.i6V, {}),
                    }),
                  }),
              v = Fe.Get().GetDisplay() != "desktop_navigation" ? C : w,
              p = a ? void 0 : { top: `${o}px` },
              E = (0, b.v0)();
            let G;
            switch (Fe.Get().GetDisplay()) {
              case "event_filter":
                G = (0, t.jsx)(ft, { bUserIsLoggedIn: s, fnOnFilterChange: l });
                break;
              case "browse_curator":
                G = (0, t.jsx)(ts, {});
                break;
              case "desktop_navigation":
                G = (0, t.jsx)(Ss, { ...e, fnOpenFilterSettings: at });
                break;
            }
            return (0, t.jsx)(I.Fragment, {
              children: (0, t.jsx)(pe.Z, {
                className: (0, x.A)(
                  c().SidebarContainer,
                  a && c().SidebarCollapsed,
                ),
                style: p,
                "flow-children": "column",
                children: a
                  ? v
                  : (0, t.jsxs)("div", {
                      className: c().Sidebar,
                      children: [
                        u,
                        v,
                        (0, t.jsx)("div", {
                          className: c().ControlPageContainer,
                          children: G,
                        }),
                      ],
                    }),
              }),
            });
          }),
          Ss = (0, j.PA)((n) => {
            const { bShouldIncludeLegalFooter: e, bShowUpcoming: s } = n,
              o =
                "Responsive_RequestMobileView" in window &&
                window.Responsive_RequestMobileView,
              a = (0, f.Qn)();
            return (0, t.jsxs)(I.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  className: c().SidebarBackground,
                  children: (0, t.jsx)(k.Qte, {}),
                }),
                (0, t.jsx)("div", {
                  className: c().SidebarTitle,
                  children: (0, d.PP)(
                    "#EventCalendar_Title",
                    (0, t.jsx)("br", {}),
                  ),
                }),
                (0, t.jsx)(It, { bIsUpcoming: s }),
                (0, t.jsx)(is, {}),
                (0, t.jsx)("div", {
                  className: c().SidePanelGameSearch,
                  children: (0, t.jsx)(ot, {
                    label: (0, d.we)("#EventCalendar_UniversalSearch"),
                  }),
                }),
                (0, t.jsx)(xs, { bIsUpcoming: s }),
                !a &&
                  (0, t.jsx)("div", {
                    className: c().FilterSettingsCtn,
                    children: (0, t.jsxs)("div", {
                      className: (0, x.A)(
                        c().FilterLink,
                        c().OpenFilterSettings,
                      ),
                      onClick: () => n.fnOpenFilterSettings(!0),
                      children: [
                        (0, t.jsx)(k.wB_, {}),
                        (0, d.we)("#EventCalendar_EditFilters"),
                      ],
                    }),
                  }),
                o &&
                  (0, t.jsx)("div", {
                    className: (0, x.A)(
                      c().SidebarLink,
                      c().ForceResponsiveLink,
                    ),
                    onClick: o,
                    children: (0, d.we)("#EventCalendar_ShowResponsiveView"),
                  }),
                e && (0, t.jsx)(ms, {}),
              ],
            });
          });
        let ot = class extends I.Component {
          DecorateSearchSuggestion(n, e) {
            if (n && n.id) {
              let s = "";
              return (
                n.corpus == "curators"
                  ? (s = "group/" + n.id)
                  : n.corpus == "games" &&
                    ((0, Ue.wT)(
                      (0, Pn.fp)(n.type),
                      "Unexpected app type " + n.type,
                    ),
                    (s = "app/" + n.id)),
                (0, t.jsx)(
                  Yt.Ii,
                  { href: `/${(0, H.LJ)()}/${s}/`, children: e },
                  `suggestion-${n.id}`,
                )
              );
            }
            return e;
          }
          render() {
            const n = ["games", "curators"];
            return (0, t.jsx)(zt, {
              strLabel: this.props.label,
              fnOnSelected: () => {},
              fnDecorateSuggestion: this.DecorateSearchSuggestion,
              rgCorporaToSearch: n,
              focusOnMount: this.props.focusOnMount,
            });
          }
        };
        ot = Le([j.PA], ot);
        const Wa = (n) => {
          const { strLabNumber: e, strForumURL: s } = n,
            o = Config.STORE_BASE_URL + "labs";
          return jsxs("div", {
            className: styles.SideSteamLabsBannerCtn,
            children: [
              jsxs("div", {
                className: styles.SteamLabsIdentifiers,
                children: [
                  jsx("a", {
                    className: styles.SteamLabsName,
                    href: o,
                    target: Config.IN_CLIENT ? void 0 : "_blank",
                    children: Localize("#SteamLabs"),
                  }),
                  jsx("div", {
                    className: styles.SteamLabsNumber,
                    children: Localize("#SteamLabs_ExperimentNumber", e),
                  }),
                ],
              }),
              jsx("a", {
                className: styles.SteamLabsButton,
                href: s,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: jsx(SVG.ChatBubble, {}),
              }),
            ],
          });
        };
        function Es() {
          if (!(0, b.v0)().BIsGlobalCalendar() || !f.iA.logged_in) return;
          const n =
              (0, b.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
            e = (0, b.v0)().GetCurrentlyLoadedEventCount(n);
          return e
            ? (0, b.v0)().BHitEventHorizon("forward")
              ? String(e.nCount)
              : e.nCount + "+"
            : void 0;
        }
        function re(n, e) {
          const s = (0, D.d)(n);
          if (((0, Ue.wT)(!!s, "Must define collection " + n), !s)) return null;
          let o = (0, b.v0)().GetCollectionID() == n,
            a;
          switch (n) {
            case D.g.Default:
              o = (0, b.v0)().BIsGlobalCalendar() && !e;
              break;
            case D.g.Upcoming:
              (o = (0, b.v0)().BIsGlobalCalendar() && e), (a = Es());
              break;
          }
          return {
            name: s.strName,
            shortName: s.strShortName,
            key: n,
            url: s.strUrl,
            subtitle: s.strSubtitle,
            onPage: o,
            count: a,
            bValveOnly: s.bIsValveOnly,
          };
        }
        function sn(n, e) {
          const s = new Array();
          return s.push(re(D.g.Default, n)), s.push(re(D.g.Upcoming, n)), s;
        }
        function an(n, e) {
          const s = new Array();
          return (
            s.push(re(D.g.Featured, n)),
            s.push(re(D.g.Steam, n)),
            Ee.HD.GetTimeNowWithOverride() < 1668160800 &&
              s.push(re(D.g.Halloween, n)),
            s
          );
        }
        function on(n, e) {
          const s = (0, b.v0)().BIsCollectionCalendar(),
            o = (0, H.LJ)(),
            a = new Array();
          if (((0, Ye.Us)() && a.push(re(D.g.Press, n)), e))
            for (const r of qt.GetVisibleSpecialEvents())
              a.push({
                name: (0, d.we)(r.sLocToken),
                url: r.newshubUrl,
                onPage: !1,
                key: "event_" + r.sLocToken,
              });
          return (
            a.push(re(D.g.Dev_Sales, n)),
            f.iA.is_support &&
              (a.push(re(D.g.Dev_All, n)),
              a.push(re(D.g.Dev_AssociatedPress, n))),
            a
          );
        }
        const Is = (n) => {
          const {
            shortName: e,
            name: s,
            url: o,
            onPage: a,
            count: r,
            bValveOnly: l,
          } = n.element;
          return !f.iA.is_support && l
            ? null
            : (0, t.jsx)(Kt.N_, {
                to: "/" + o,
                children: (0, t.jsxs)("div", {
                  className: (0, x.A)(
                    c().MobileNavButton,
                    a && c().MobileNavButtonActive,
                  ),
                  children: [
                    e || s,
                    r &&
                      (0, t.jsx)("div", {
                        className: c().MobileNavCount,
                        children: r,
                      }),
                  ],
                }),
              });
        };
        let rt = class extends I.Component {
          state = { bSearchExpanded: !1 };
          onExpandSearch(n) {
            this.setState({ bSearchExpanded: n });
          }
          render() {
            const { bSearchExpanded: n } = this.state,
              e = sn(this.props.bIsUpcoming, !1),
              s = an(this.props.bIsUpcoming, !1),
              o = on(this.props.bIsUpcoming, !1),
              a = [...e, ...s, ...o];
            return (0, t.jsxs)("div", {
              style: { transform: `translateY(${this.props.nTopOffset}px)` },
              className: c().MobileNavBannerCtn,
              children: [
                (0, t.jsx)("div", {
                  className: c().SettingsPanel,
                  onClick: this.props.fnToggleCollapsed,
                  children: (0, t.jsx)(k.wB_, {}),
                }),
                (0, t.jsx)("div", {
                  className: (0, x.A)(
                    c().SettingsPanel,
                    n && c().SearchExpanded,
                  ),
                  onClick: () => this.onExpandSearch(!n),
                  children: (0, t.jsx)(k.eSy, {}),
                }),
                n &&
                  (0, t.jsxs)(I.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: c().SearchDismiss,
                        onClick: () => this.onExpandSearch(!1),
                      }),
                      (0, t.jsx)("div", {
                        className: (0, x.A)(
                          c().SearchBox,
                          n && c().SearchExpanded,
                        ),
                        children: (0, t.jsx)(ot, { focusOnMount: !0 }),
                      }),
                    ],
                  }),
                (0, t.jsx)(ls.Z, {
                  className: c().MobileNavHScroll,
                  children: (0, t.jsx)("div", {
                    className: c().MobileNavBannerList,
                    children: a.map((r) =>
                      (0, t.jsx)(Is, { element: r }, r.key),
                    ),
                  }),
                }),
              ],
            });
          }
        };
        Le([J.oI], rt.prototype, "onExpandSearch", 1), (rt = Le([j.PA], rt));
        function Et(n) {
          const {
            key: e,
            name: s,
            subtitle: o,
            url: a,
            onPage: r,
            count: l,
            bValveOnly: m,
            icon: u,
          } = n.element;
          return !f.iA.is_support && m
            ? null
            : (0, t.jsx)(Yt.Ii, {
                href: "/" + a,
                children: (0, t.jsxs)("div", {
                  className: (0, x.A)({
                    [c().NewsChannel]: !0,
                    [c().NewsChannelOnPage]: r,
                    [ee().ValveOnlyBackground]: m,
                  }),
                  children: [
                    !!u &&
                      (0, t.jsx)("img", {
                        className: (0, x.A)(c().NewsChannelIcon),
                        src: u,
                      }),
                    (0, t.jsxs)("div", {
                      className: c().NewsChannelText,
                      children: [
                        (0, t.jsxs)("div", {
                          className: c().NewsChannelTitle,
                          children: [m && "(VO) ", s],
                        }),
                        o &&
                          (0, t.jsx)("div", {
                            className: c().NewsChannelSubtitle,
                            children: o,
                          }),
                      ],
                    }),
                    l !== void 0 &&
                      (0, t.jsx)("div", {
                        className: c().NewsChannelCount,
                        children: l,
                      }),
                  ],
                }),
              });
        }
        let It = class extends I.Component {
          render() {
            const n = sn(this.props.bIsUpcoming, !1),
              e = an(this.props.bIsUpcoming, !1);
            return (0, t.jsxs)("div", {
              className: c().NewsChannelGroup,
              children: [
                (0, t.jsx)("div", {
                  className: c().NewsChannelListTitle,
                  children: (0, d.we)("#EventCalendar_NewsChannels"),
                }),
                (0, t.jsx)("div", {
                  className: c().NewsChannelList,
                  children: n.map((s) => (0, t.jsx)(Et, { element: s }, s.key)),
                }),
                (0, t.jsx)("div", {
                  className: c().NewsChannelListTitle,
                  children: (0, d.we)("#EventCalendar_NewsChannels_Global"),
                }),
                (0, t.jsx)("div", {
                  className: c().NewsChannelList,
                  children: e.map((s) => (0, t.jsx)(Et, { element: s }, s.key)),
                }),
              ],
            });
          }
        };
        It = Le([j.PA], It);
        function xs(n) {
          const { bIsUpcoming: e } = n,
            s = on(e, !1);
          return s && s.length > 0
            ? (0, t.jsxs)("div", {
                className: (0, x.A)(c().NewsChannelGroup, c().DiscoverGroup),
                children: [
                  (0, t.jsx)("div", {
                    className: c().NewsChannelListTitle,
                    children: (0, d.we)("#EventCalendar_NewsChannels_Discover"),
                  }),
                  (0, t.jsx)("div", {
                    className: c().NewsChannelList,
                    children: s.map((o) =>
                      (0, t.jsx)(Et, { element: o }, o.key),
                    ),
                  }),
                ],
              })
            : null;
        }
        function bs(n) {
          return n.BIsCollectionCalendar() && n.GetCollectionID() === "steam";
        }
        var me = i(63694),
          ws = i(7638),
          Ts = i(40976),
          ys = i(16346),
          te = i(34360),
          Ns = i(53113),
          js = i(72978),
          h = i.n(js),
          rn = i(89926);
        const Ds = (0, j.PA)((n) => {
          const { eventModel: e, calendarEvent: s, history: o } = n,
            a = (C) => {
              let v = s.GetEntityName();
              (0, Ve.pg)(
                (0, t.jsx)(Ke.o0, {
                  strTitle: (0, d.we)("#EventCalendar_MuteApp_Title", v),
                  strDescription: (0, d.we)(
                    "#EventCalendar_MuteApp_details",
                    v,
                  ),
                  onOK: () =>
                    (0, b.v0)().UpdateEventBlockFromCalendarEvent(s, !1),
                  children: (0, t.jsx)("a", {
                    href: f.TS.STORE_BASE_URL + "account/emailoptout/app",
                    target: f.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, d.we)("#EventCalendar_ManageMutedSources"),
                  }),
                }),
                (0, pt.uX)(C),
              );
            },
            r = () => {
              (0, b.v0)().UpdateEventBlockFromCalendarEvent(s, !0);
            },
            l = () => {
              const C = m().MapClanEventTypeToGroup(e.GetEventType());
              m().SetEventTypeGroupAllowed(C, !1);
            },
            m = () => (0, b.v0)().m_visibilityStore,
            u = (C, v, p, E = !0) => {
              m().BIsGameSourceAllowed(v) &&
                (E &&
                  C.push(
                    (0, t.jsx)(
                      te.kt,
                      {
                        disabled: !0,
                        onSelected: () => {},
                        children: (0, d.we)("#EventCalender_Reason_" + v),
                      },
                      `item-source-${p}-${v}`,
                    ),
                  ),
                C.push(
                  (0, t.jsx)(
                    te.kt,
                    {
                      onSelected: () => {
                        m().SetGameSourceAllowed(v, !1);
                      },
                      children: (0, d.we)("#EventCalender_Hide_Reason_" + v),
                    },
                    `item-hidesource-${p}-${v}`,
                  ),
                ));
            },
            g = (0, H.Bw)(e, H.PH.k_eStoreNewsHub, "allowRelative"),
            S = () => {
              g.startsWith("http") ? (window.location.href = g) : o.push(g);
            },
            w = (C) => {
              let v = [];
              const p = s.GetSource(),
                E = s.unique_id,
                G = (0, f.Y2)(),
                _ = (0, b.v0)();
              _.BIsGlobalCalendar() &&
                (p &&
                  p & R.bK.k_eLibrary &&
                  (m().BIsGameSourceAllowed(y.FD.k_ERecent) && s.appInfo
                    ? (v.push(
                        (0, t.jsx)(
                          te.kt,
                          {
                            disabled: !0,
                            onSelected: () => {},
                            children: (0, d.we)(
                              "#EventCalender_LastPlayed",
                              (0, d.Hq)(
                                Ee.HD.GetTimeNowWithOverride() -
                                  s.appInfo.last_played,
                              ),
                            ),
                          },
                          `item-source-${E}-lastplayed`,
                        ),
                      ),
                      u(v, y.FD.k_ERecent, E, !1))
                    : u(v, y.FD.k_ELibrary, E)),
                p && p & R.bK.k_eWishlist && u(v, y.FD.k_EWishlist, E),
                p && p & R.bK.k_eFollowing && u(v, y.FD.k_EFollowing, E),
                !G && p && p & R.bK.k_eCurator && u(v, y.FD.k_ECurator, E),
                p && p & R.bK.k_eRecommended && u(v, y.FD.k_ERecommended, E),
                p && p & R.bK.k_eSteam && u(v, y.FD.k_ESteam, E),
                p && p & R.bK.k_eFeatured && u(v, y.FD.k_EFeatured, E)),
                v.push(
                  (0, t.jsx)(
                    te.kt,
                    {
                      onSelected: l,
                      children: (0, d.we)(
                        "#EVentCalendar_Hide_EventType",
                        (0, d.we)(
                          "#EventCalendar_EventTypeGroup_" +
                            m().MapClanEventTypeToGroup(e.GetEventType()),
                        ),
                      ),
                    },
                    e.GID + "hidetype",
                  ),
                ),
                f.iA.logged_in &&
                  (gt.S.Get().BIsEventBlocked(s)
                    ? v.push(
                        (0, t.jsx)(
                          te.kt,
                          {
                            onSelected: r,
                            children: (0, t.jsx)(ue.he, {
                              toolTipContent: (0, d.we)(
                                "#EventCalendar_UnMuteApp_ttip",
                              ),
                              children: (0, d.we)(
                                "#EventCalendar_UnMuteApp_Title",
                                s.GetEntityName(),
                              ),
                            }),
                          },
                          e.GID + "unmuteapp",
                        ),
                      )
                    : v.push(
                        (0, t.jsx)(
                          te.kt,
                          {
                            onSelected: a,
                            children: (0, t.jsx)(ue.he, {
                              toolTipContent: (0, d.we)(
                                "#EventCalendar_MuteApp_ttip",
                              ),
                              children: (0, d.we)(
                                "#EventCalendar_MuteApp_Title",
                                s.GetEntityName(),
                              ),
                            }),
                          },
                          e.GID + "muteapp",
                        ),
                      )),
                !e.BIsOGGEvent() &&
                  !G &&
                  v.push((0, t.jsx)(As, { eventModel: e, calendarEvent: s })),
                _.BIsSingleSourceCalendar() ||
                  v.push(
                    (0, t.jsx)(
                      te.kt,
                      {
                        onSelected: S,
                        children: (0, d.we)(
                          "#EventCalendar_Goto_SpecificCalendar",
                          s.GetEntityName(),
                        ),
                      },
                      e.GID + "goto",
                    ),
                  ),
                e.appid &&
                  v.push(
                    (0, t.jsx)(
                      te.kt,
                      {
                        onSelected: () =>
                          (window.location.href = (0, Ns.k2)(
                            f.TS.STORE_BASE_URL + "app/" + e.appid,
                          )),
                        children: (0, d.we)("#EventDisplay_ViewStorePage"),
                      },
                      e.GID + "goto",
                    ),
                  ),
                (0, ys.lX)((0, t.jsx)(te.tz, { children: v }), C);
            };
          return (0, t.jsx)("div", {
            className: (0, x.A)(h().FooterStat, h().Options),
            onClick: w,
            children: (0, t.jsx)(k.faJ, {}),
          });
        });
        function As(n) {
          const { eventModel: e, calendarEvent: s } = n,
            o = (0, Ye.eT)(e.clanSteamID.GetAccountID()),
            { elDialogElement: a, fnShowLogonDialog: r } = (0, rn.l)(),
            l = I.useCallback(async () => {
              f.iA.logged_in
                ? (await Be.Fm.Get().UpdateFollowOrIgnoreCurator(
                    e.clanSteamID,
                    !0,
                    !o,
                  ),
                  Qt(!!o))
                : r();
            }, [o, e.clanSteamID, r]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(
                te.kt,
                {
                  onSelected: l,
                  children: (0, t.jsx)(ue.he, {
                    toolTipContent: (0, d.we)(
                      o
                        ? "#EventCalendar_UnFollowCurator_ttip"
                        : "#EventCalendar_FollowCurator_ttip",
                    ),
                    children: (0, d.we)(
                      o
                        ? "#EventCalendar_UnFollowCurator"
                        : "#EventCalendar_FollowCurator",
                      s.GetEntityName(),
                    ),
                  }),
                },
                e.GID + "followcurator",
              ),
              a,
            ],
          });
        }
        const Bs = (0, M.y)(Ds);
        var Gs = i(20035),
          _s = i(85741),
          xt = i(68266),
          Ls = i(42888),
          Fs = i(88812),
          Hs = i(43193),
          ze = i(72429),
          xe = i(21659),
          ln = i(13532),
          bt = i(19730),
          Rs = i(71684),
          Ms = i(1123),
          Os = i(29522),
          Ps = i(40358);
        function ks(n) {
          const {
              eventModel: e,
              calendarEvent: s,
              bSuppressHoverEffects: o,
              mode: a,
              bHideGameTitle: r,
              fnOnClicked: l,
            } = n,
            [m, u] = I.useState(!1),
            g = (0, Os.$5)(e.GetAppIDOrReferenceAppID());
          (0, Ps.lv)(g);
          const S = (0, _s.Mg)(e);
          (0, T.$5)(s.clanInfo?.clanid);
          const w = (0, N.sfN)(f.TS.LANGUAGE),
            C = "capsule",
            [v, p, E, G, _, V, F, ne, Ne, W, X] = (0, fe.q3)(() => [
              e.has_live_stream,
              e.GetEventType(),
              e.GetAllTags(),
              e.GetCategoryAsString(),
              e.GetNameWithFallback(w),
              e.BImageNeedScreenshotFallback(C, w),
              e.appid,
              e.GID,
              e.GetStartTimeAndDateUnixSeconds(),
              e.GetSubTitleWithLanguageFallback(w),
              e.GetSummaryWithFallback(w),
            ]),
            [Bt, Gt] = I.useState(() =>
              (0, xe.c5)() && p == N.zeJ ? Se.wI.full : Se.wI.capsule_main,
            ),
            _t = (0, Ms.Ey)(),
            Lt = !!(V && F && S),
            Ft = (0, xt.m0)(Lt ? void 0 : e, C, w, Bt, _t) ?? S,
            Ht = wt(e, a),
            lt = (0, Ls.uU)(ne),
            ct = h()[`EventType${p}`],
            Rt = E.map((ut) => h()[`Tag-${ut}`]),
            dt = (0, x.A)(
              h().TileContainer,
              ct,
              v && h().TileVideoIcon,
              o ? h().DisableHovers : h().EnableHovers,
              m && h().VideoPlayerReady,
              Ht && h().HasVideo,
              lt && h().HasBeenRead,
              a === "wide" && h().WideMode,
              a === "carousel" && h().CarouselMode,
              a === "upcoming" && h().UpcomingMode,
              ...Rt,
            );
          let je = W,
            Qe = X;
          je === Qe && (Qe = void 0), je === _ && (je = void 0);
          const Sn = (0, vt.j3)(Ft),
            En = (0, t.jsx)(Ws, {
              setVideoPlayerReady: u,
              calendarEvent: s,
              eventModel: e,
              mode: a,
              artworkType: C,
              strCapsuleImgURLForBackground: Sn,
              fnSetCoverSize: Gt,
            }),
            Ma = m && a !== "carousel",
            In = o && p != N.zeJ && !Ma,
            Oa = In && En,
            Pa = !In && En,
            ka =
              p !== N.uYK && p !== N.Fwr && Ee.HD.GetTimeNowWithOverride() < Ne,
            Re = a !== "wide" || o,
            xn =
              ka &&
              (0, t.jsx)("div", {
                className: (0, x.A)(h().ReminderContainer, Re && h().OnlyIcon),
                children: (0, t.jsx)(Hs.j, {
                  eventModel: e,
                  lang: w,
                  bShowStartTime: !0,
                  bOnlyShowIcon: Re,
                  bExpandLeft: Re,
                }),
              }),
            bn = !!(p !== N.Fwr && Qe),
            Ua = !!(je && (!bn || !Us(je, Qe)));
          return (0, t.jsxs)("div", {
            className: dt,
            children: [
              (0, t.jsx)(Gs.C, { event: e, recordNewsHubStats: !0 }),
              (0, t.jsx)(H.tj, {
                eventModel: e,
                route: H.PH.k_eView,
                children: (0, t.jsxs)("div", {
                  className: h().Tile,
                  onClick: (ut) => {
                    me.V.RecordAppInteractionEvent(
                      s.appid,
                      me.E.k_eClickThrough,
                    ),
                      !(0, H.sY)() &&
                        (l(e), ut.stopPropagation(), ut.preventDefault());
                  },
                  children: [
                    p === N.zeJ &&
                      (0, t.jsx)("div", {
                        className: (0, x.A)(
                          h().TileBackgroundImage,
                          V && h().FallbackImage,
                        ),
                        style: { backgroundImage: `url(${Sn})` },
                      }),
                    (0, t.jsxs)("div", {
                      className: h().MainContentContainer,
                      children: [
                        Pa,
                        (0, t.jsxs)("div", {
                          className: h().TileTextContainer,
                          children: [
                            p == N.Fwr &&
                              (0, t.jsx)("div", {
                                className: h().PatchIconCtn,
                                children: (0, t.jsx)(k.vjL, {}),
                              }),
                            (0, t.jsxs)("div", {
                              className: h().EventTitleCtn,
                              children: [
                                Oa,
                                !r &&
                                  (0, t.jsxs)("div", {
                                    className: h().GameSource,
                                    children: [
                                      (0, t.jsx)(cn, { ...n }),
                                      s && (0, t.jsx)(zs, { calendarEvent: s }),
                                    ],
                                  }),
                                (0, t.jsx)("div", {
                                  className: h().EventName,
                                  children: _,
                                }),
                                (0, t.jsxs)("div", {
                                  className: h().EventTypeAndDateCtn,
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: (0, x.A)(
                                        h().TileTextCategoryType,
                                        ct,
                                      ),
                                      children: G,
                                    }),
                                    (0, t.jsx)(Ys, {
                                      eventModel: e,
                                      className: (0, x.A)(
                                        Re && h().LeaveRoomForReminder,
                                      ),
                                    }),
                                    Re && xn,
                                  ],
                                }),
                                Ua &&
                                  (0, t.jsx)("div", {
                                    className: h().EventSubTitle,
                                    children: je,
                                  }),
                                bn &&
                                  (0, t.jsx)("div", {
                                    className: (0, x.A)(
                                      h().EventSummaryDefault,
                                      je ? h().SubTitleShown : "",
                                    ),
                                    children: Qe,
                                  }),
                              ],
                            }),
                            !Re && xn,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)(Qs, { ...n }),
            ],
          });
        }
        function Us(n, e) {
          const s = (r) => r.replace(/\W+/g, "").toLocaleLowerCase(),
            o = s(n);
          return s(e).startsWith(o);
        }
        function wt(n, e) {
          const { video_preview_type: s, video_preview_id: o, type: a } = n;
          return !(e === "upcoming" || !o || a === N.Fwr || s !== "youtube");
        }
        function Vs(n) {
          const { eventModel: e, fnSetVideoStateReady: s, mode: o } = n,
            { video_preview_id: a, type: r } = n.eventModel,
            l = n.calendarEvent.appid,
            m = (0, N.sfN)(f.TS.LANGUAGE),
            u = (0, xe.c5)() && r == N.zeJ ? Se.wI.full : Se.wI.capsule_main,
            g = (0, Fs.WC)(e, "capsule", m, u, !0);
          if (o === "carousel")
            return (0, t.jsx)(ln.r, {
              altImgWithFallback: g,
              video: a,
              className: h().YoutubePreviewImage,
            });
          const S = () => {
            me.V.RecordAppInteractionEvent(l, me.E.k_ePlayedVideo), s(!0);
          };
          return (0, t.jsx)(ln.l, {
            video: a,
            altImgWithFallback: g,
            autoplay: !0,
            autopause: !0,
            showFullscreenBtn: !0,
            controls: !0,
            imageClassnames: h().YoutubePreviewImage,
            onPlayerActivated: S,
            preloadYoutubeScripts: !0,
            playsInline: !0,
          });
        }
        function Ws(n) {
          const {
              eventModel: e,
              calendarEvent: s,
              mode: o,
              artworkType: a,
              strCapsuleImgURLForBackground: r,
              setVideoPlayerReady: l,
              fnSetCoverSize: m,
            } = n,
            u = (0, N.sfN)(f.TS.LANGUAGE),
            g = wt(e, o),
            S = !wt(e, o) && o !== "upcoming",
            [w, C, v, p, E, G] = (0, fe.q3)(() => [
              e.GetEventType(),
              e.has_live_stream,
              e.has_live_stream,
              e.clanSteamID.GetAccountID(),
              s.GetGameCapsule(),
              e.BImageNeedScreenshotFallback(a, u),
            ]);
          I.useEffect(() => {
            if (r) {
              const ne = new Image();
              (ne.src = r),
                (ne.onerror = () => {
                  m(Se.wI.full);
                });
            }
          }, [r, m]);
          const [, _] = (0, T.TB)(p),
            V = _ && !_.is_ogg;
          let F = e.GetSummaryWithFallback(u);
          return (
            e.GetSubTitleWithLanguageFallback(u) === F && (F = void 0),
            (0, t.jsxs)("div", {
              className: h().CoverImageCtn,
              children: [
                g &&
                  (0, t.jsx)(Vs, {
                    eventModel: e,
                    mode: o,
                    calendarEvent: s,
                    fnSetVideoStateReady: l,
                  }),
                S &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      w === N.Fwr &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)("div", {
                              className: h().GameCapsuleCtn,
                              children: (0, t.jsx)("div", {
                                className: (0, x.A)({
                                  [h().AppBannerLogo]: !0,
                                  [h().FallbackImage]: G,
                                  [h().ClanSource]: V,
                                }),
                                style: { backgroundImage: `url(${E})` },
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: h().GameShortDescription,
                              children: F,
                            }),
                          ],
                        }),
                      w !== N.Fwr &&
                        (0, t.jsxs)("div", {
                          className: (0, x.A)({
                            [h().EventCapsuleCtn]: !0,
                            [h().LiveBroadcastPreview]: v,
                          }),
                          children: [
                            (0, t.jsx)("div", {
                              className: (0, x.A)({
                                [h().TileImage]: !0,
                                [h().FallbackImage]: G,
                                [h().ClanSource]: V,
                              }),
                              style: { backgroundImage: `url(${r})` },
                            }),
                            v &&
                              (0, t.jsx)("div", {
                                className: h().TileCoverImagePlayable,
                              }),
                            C &&
                              (0, t.jsx)("div", {
                                className: h().TileCoverLiveIcon,
                                children: (0, d.we)(
                                  "#home_page_live_broadcast",
                                ),
                              }),
                            v &&
                              (0, t.jsx)("div", {
                                className: "VideoHintText",
                                children: (0, d.we)(
                                  "#EventCalendar_WatchLiveBroadcast",
                                ),
                              }),
                          ],
                        }),
                    ],
                  }),
              ],
            })
          );
        }
        const Ks = (0, j.PA)((n) => {
            const {
                eventModel: e,
                calendarEvent: s,
                bSuppressHoverEffects: o,
                history: a,
              } = n,
              r = (0, H.Bw)(e, H.PH.k_eStoreNewsHub, "allowRelative"),
              l = (S) => {
                r.startsWith("http") ? (window.location.href = r) : a.push(r),
                  S.stopPropagation(),
                  S.preventDefault();
              },
              m = s.GetEntityName(),
              u = s.GetGameIcon(),
              g = (0, x.A)(
                h().GameTitleContainer,
                o ? h().DisableHovers : h().EnableHovers,
              );
            return (0, t.jsx)(L.tH, {
              children: (0, t.jsx)("div", {
                className: h().TileTextHeader,
                children: (0, t.jsxs)("div", {
                  className: g,
                  onClick: l,
                  children: [
                    (0, t.jsx)("img", { className: h().AppIcon, src: u }),
                    (0, t.jsxs)("div", {
                      className: h().TileTextAppName,
                      children: [m, " "],
                    }),
                  ],
                }),
              }),
            });
          }),
          cn = (0, M.y)(Ks),
          Ys = (0, j.PA)((n) => {
            const { eventModel: e, calendarEvent: s, className: o } = n,
              a = (0, b.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
              r = e ? e.GetStartTimeAndDateUnixSeconds() : s.start_time,
              l = e && (0, Rs.JS)(e.type) && e.GetEndTimeAndDateUnixSeconds();
            if (l && r < a && a < l) {
              const m = l - a,
                u = (0, d.Hq)(m, !0);
              return (0, t.jsxs)("div", {
                className: (0, x.A)(h().LiveText, o),
                children: [
                  (0, t.jsx)(ze.gS, {
                    rtFullDate: r,
                    stylesmodule: h(),
                    children: (0, t.jsx)("div", {
                      className: h().LiveNow,
                      children: (0, d.we)("#EventCalendar_LiveNow"),
                    }),
                  }),
                  (0, t.jsx)(ze.gS, {
                    rtFullDate: l,
                    stylesmodule: h(),
                    children: (0, d.we)("#EventCalendar_TimeLeft", u),
                  }),
                ],
              });
            } else if (r < a) {
              const m = a - r,
                u = m < 24 * 3600 ? (0, d.Hq)(m, !1, !0) : (0, d._l)(r);
              return (0, t.jsx)(ze.gS, {
                className: o,
                rtFullDate: r,
                stylesmodule: h(),
                children: (0, t.jsx)("div", {
                  className: h().PastDateText,
                  children: u,
                }),
              });
            } else {
              const m = new Date(a * 1e3);
              m.setHours(0, 0, 0, 1);
              const u = m.getTime() / 1e3,
                g = Math.floor((r - u) / (24 * 3600)),
                S =
                  g > 1 && g <= 5 ? (0, d.cc)(new Date(r * 1e3)) : (0, d._l)(r),
                w = (0, ze.pg)(r);
              return (0, t.jsx)(ze.gS, {
                className: o,
                rtFullDate: r,
                stylesmodule: h(),
                children: (0, t.jsx)("div", {
                  className: h().FutureDateText,
                  children: (0, d.we)(
                    "#EventCalendar_WillStartAtDateTime",
                    S,
                    w,
                  ),
                }),
              });
            }
          }),
          zs = (0, j.PA)((n) => {
            const e = n.calendarEvent.GetSource(),
              s = [],
              o = (0, b.v0)().m_visibilityStore;
            e & R.bK.k_eLibrary && o.BIsGameSourceAllowed(y.FD.k_ELibrary)
              ? s.push({
                  id: R.bK.k_eLibrary,
                  name: "#EventCalendar_GameSource_inLibrary",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_library",
                  styles: h().LibrarySource,
                })
              : e & R.bK.k_eWishlist && o.BIsGameSourceAllowed(y.FD.k_EWishlist)
                ? s.push({
                    id: R.bK.k_eWishlist,
                    name: "#EventCalendar_GameSource_onWishlist",
                    ttip: "#EventCalendar_GameSource_EventExplanation_ttip_wishlist",
                    styles: h().WishlistSource,
                  })
                : e & R.bK.k_eRecommended &&
                    o.BIsGameSourceAllowed(y.FD.k_ERecommended)
                  ? s.push({
                      id: R.bK.k_eRecommended,
                      name: "#EventCalendar_GameSource_recommended_Verbose",
                      ttip: "#EventCalendar_GameSource_EventExplanation_ttip_recommended",
                      styles: h().RecommendedSource,
                    })
                  : e & R.bK.k_eFeatured &&
                    o.BIsGameSourceAllowed(y.FD.k_EFeatured) &&
                    s.push({
                      id: R.bK.k_eFeatured,
                      name: "#EventCalendar_GameSource_featured",
                      ttip: "#EventCalendar_GameSource_ttip_featured",
                      styles: h().FeaturedSource,
                    }),
              e & R.bK.k_eFollowing &&
                o.BIsGameSourceAllowed(y.FD.k_EFollowing) &&
                s.push({
                  id: R.bK.k_eFollowing,
                  name: "#EventCalendar_GameSource_followed",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_following",
                  styles: h().FollowingSource,
                });
            const a = s.map((r, l) => {
              const m = n.calendarEvent.unique_id;
              return Js(
                `item-source-${m}-${r.id}`,
                r.name,
                r.ttip,
                r.styles,
                l + 1 < s.length,
              );
            });
            return (0, t.jsx)("div", {
              className: h().SourceList,
              children: a,
            });
          }),
          Js = (n, e, s, o, a) =>
            (0, t.jsx)(
              ue.he,
              {
                className: (0, x.A)(h().Source, o),
                toolTipContent: (0, d.we)(s),
                children: (0, d.we)(e) + (a ? ", " : ""),
              },
              n,
            );
        function Xs(n, e) {
          return n.BIsUserLoggedIn()
            ? f.iA.is_limited
              ? h().Vote_LimitedUser
              : e === !0
                ? h().Vote_Positive
                : e === !1
                  ? h().Vote_Negative
                  : h().Vote_Ready
            : h().Vote_NotLoggedIn;
        }
        function Qs(n) {
          const { eventModel: e } = n,
            s = ws.KN.Get(),
            [, o] = (0, T.TB)(e.clanSteamID.GetAccountID()),
            a = () => {
              s.GetPreviouslyLoadedVote(e) !== !0 &&
                (0, Ts.W)(e, s) &&
                (s.Vote(e, !0, ce().CancelToken.source()),
                me.V.RecordAppInteractionEvent(e.appid, me.E.k_eThumbsUp));
            },
            r = () => {
              me.V.RecordAppInteractionEvent(e.appid, me.E.k_eDiscussions);
            },
            [l, m, u, g] = (0, fe.q3)(() => [
              Math.max(0, e.nVotesUp - e.nVotesDown),
              s.GetPreviouslyLoadedVote(e),
              e.GetForumTopicURL(o?.vanity_url),
              e.nCommentCount,
            ]),
            S = Xs(s, m),
            w = !(0, f.Y2)() && u,
            C =
              e.live_stream_viewer_count > 0
                ? e.live_stream_viewer_count
                : void 0;
          return (0, t.jsx)("div", {
            className: h().Footer,
            children: (0, t.jsxs)("div", {
              className: h().FooterRightSide,
              children: [
                !!C &&
                  (0, t.jsx)("div", {
                    className: h().TileViewerCount,
                    children: (0, bt.Dq)(C),
                  }),
                (0, t.jsxs)("div", {
                  className: (0, x.A)(h().FooterStat, h().Vote, S),
                  onClick: a,
                  children: [
                    (0, t.jsx)(k.bfp, { className: h().RateIcon }),
                    (0, t.jsx)("span", { children: (0, bt.Dq)(Number(l)) }),
                  ],
                }),
                w &&
                  (0, t.jsx)("div", {
                    className: h().FooterStat,
                    children: (0, t.jsxs)("a", {
                      href: u,
                      className: h().CommentIconCtn,
                      target: "_blank",
                      onClick: r,
                      children: [
                        (0, t.jsx)(k._h6, { className: h().CommentIcon }),
                        (0, t.jsx)("span", { children: (0, bt.Dq)(Number(g)) }),
                      ],
                    }),
                  }),
                (0, t.jsx)(Bs, { ...n }),
              ],
            }),
          });
        }
        var Zs = i(2259);
        function $s(n, e, s) {
          const o = Array();
          o.push(e.QueueLoadPartnerEvent(n.clanid, n.unique_id)),
            n.appid && o.push(Q.A.Get().QueueAppRequest(n.appid, Je)),
            n.clanInfo &&
              o.push(T.ac.LoadClanInfoForClanAccountID(n.clanInfo.clanid)),
            Promise.all(o).then(() => {
              const a = e.GetClanEventModel(n.unique_id);
              a &&
              a.appid &&
              a.appid != n.appid &&
              !Q.A.Get().BHasApp(a.appid, Je)
                ? Q.A.Get().QueueAppRequest(a.appid, Je).then(s)
                : s();
            });
        }
        const Je = {
          include_assets: !0,
          include_release: !0,
          include_screenshots: !0,
        };
        function qs(n, e) {
          const s = e.GetClanEventModel(n.unique_id);
          return !(
            !s ||
            (n.appid && !Q.A.Get().BHasApp(n.appid, Je)) ||
            (s.appid &&
              s.appid != n.appid &&
              !Q.A.Get().BHasApp(s.appid, Je)) ||
            (n.clanInfo && !T.ac.HasLoadedClanAccountID(n.clanInfo.clanid))
          );
        }
        const ea = (0, j.PA)((n) => {
            const {
                calendarEvent: e,
                partnerEventStore: s,
                mode: o,
                forceParentUpdate: a,
              } = n,
              r = "500px",
              l = h()[`EventType${e.event_type}`],
              m = (0, x.A)(h().TileContainer, l),
              u = o === "carousel",
              g = () => {
                $s(e, s, a);
              },
              S = (0, Zs.OO)(
                { onEnter: g },
                { rootMargin: `${r} 0px ${r} 0px` },
              );
            return (0, t.jsxs)("div", {
              className: m,
              ref: S,
              children: [
                (0, t.jsx)("div", {
                  className: (0, x.A)(h().Tile, h().LoadingTile),
                  children: u && (0, t.jsx)(Ce.t, {}),
                }),
                (0, t.jsx)("div", { className: h().Footer }),
              ],
            });
          }),
          Tt = (0, j.PA)((n) => {
            const { partnerEventStore: e, calendarEvent: s, ...o } = n,
              a = e.GetClanEventModel(s.unique_id),
              r = qs(s, e),
              l = (0, J.CH)();
            return r
              ? (0, t.jsx)(ks, { eventModel: a, calendarEvent: s, ...o })
              : (0, t.jsx)(ea, {
                  calendarEvent: s,
                  partnerEventStore: e,
                  ...o,
                  forceParentUpdate: l,
                });
          });
        var ta = i(64377),
          na = i(17009),
          it = i.n(na),
          sa = i(33752),
          aa = i(47689),
          oa = i(68224),
          be = i.n(oa);
        const dn = "SteamNewsHub_SuggestCuratorsDismissed";
        function ra() {
          const n = JSON.parse(localStorage.getItem(dn));
          return n && n.bDismissed;
        }
        function ia() {
          const n = d.pf.GetELanguageFallbackOrder();
          n.find((s) => s === N.Bhc) === void 0 && n.push(N.Bhc);
          const e = new Array();
          for (const s of n) {
            const o = _e.Get().GetCuratorsForLang(s);
            if (!o) continue;
            const a = o.filter(
              (r) => !Be.Fm.Get().BIsIgnoringCurator(r.clanAccountID),
            );
            (0, Ot.fW)(a), e.push(...a);
          }
          return e;
        }
        function un(n) {
          const { bCanDismiss: e } = n,
            [s, o] = (0, I.useState)(() => ra()),
            [a, r] = (0, I.useState)(0),
            [l, m] = (0, I.useState)(null),
            u = (0, I.useRef)(void 0),
            g = (0, aa.m)("CuratorFeedSuggestRow"),
            S = (0, I.useCallback)(() => {
              if (!g.token.reason)
                if (!u.current) r(0);
                else {
                  const v = Math.floor(
                    Math.min(u.current.clientWidth, window.innerWidth) / 118,
                  );
                  r(Math.max(v - 1, 0));
                }
            }, [g.token.reason]);
          if (
            ((0, I.useEffect)(() => S(), [S]),
            (0, I.useEffect)(
              () => (
                l == null &&
                  (async () => (
                    await _e.Get().WaitForInitialLoad(), g.token.reason || m(ia)
                  ))(),
                window.addEventListener("resize", S),
                () => window.removeEventListener("resize", S)
              ),
              [g.token.reason, S, l],
            ),
            s)
          )
            return null;
          let w = l?.slice(0, a).map((C) => {
            const v = T.ac.GetClanInfoByClanAccountID(C.clanAccountID);
            return v
              ? (0, t.jsx)(
                  "div",
                  {
                    className: be().ClanInfo,
                    children: (0, t.jsx)($t, { clanInfo: v, layout: "icon" }),
                  },
                  v.clanAccountID,
                )
              : null;
          });
          return (0, t.jsx)(L.tH, {
            children: (0, t.jsx)("div", {
              className: be().FeedSuggestContainerBG,
              children: (0, t.jsxs)("div", {
                className: be().FeedSuggestContainer,
                children: [
                  (0, t.jsx)("div", {
                    className: be().FeedSuggestCaption,
                    children: (0, d.we)("#EventCurator_FeedCaption_Long"),
                  }),
                  e &&
                    (0, t.jsx)("div", {
                      className: be().DismissButton,
                      onClick: (C) => {
                        (0, Ve.pg)(
                          (0, t.jsx)(Ke.o0, {
                            strTitle: (0, d.we)("#EventCurator_DismissTitle"),
                            strDescription: (0, d.we)(
                              "#EventCurator_DismissBody",
                            ),
                            onOK: () => {
                              localStorage.setItem(
                                dn,
                                JSON.stringify({ bDismissed: !0 }),
                              ),
                                g.token.reason || o(!0);
                            },
                          }),
                          (0, pt.uX)(C),
                        );
                      },
                      children: (0, t.jsx)(k.i6V, {}),
                    }),
                  (0, t.jsxs)(pe.Z, {
                    className: be().RowContainer,
                    ref: u,
                    "flow-children": "row",
                    children: [
                      w || (0, t.jsx)(Ce.t, {}),
                      (0, t.jsx)("div", {
                        className: be().BrowseMore,
                        onClick: Fe.Get().ShowBrowseCurator,
                        children: (0, d.we)("#EventCurator_BrowseMore"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        var la = i(57688),
          O = i.n(la);
        const mn = (n) => {
          const {
              titleToken: e,
              subtitleToken: s,
              backgroundImg: o,
              headerImg: a,
              headerURL: r,
            } = n,
            l = o ? { backgroundImage: o } : {};
          return (0, t.jsx)("div", {
            className: (0, x.A)(
              O().CommonHeaderStyles,
              O().SimpleTitleHeaderCtn,
              n.largeHeader && O().LargeHeader,
            ),
            style: l,
            children: (0, t.jsxs)("div", {
              className: (0, x.A)(
                O().CollectionBannerGroup,
                a ? O().HeaderImg : O().NoHeaderImg,
              ),
              children: [
                !!(r && a) &&
                  (0, t.jsx)("a", {
                    href: r,
                    className: O().AppBannerLogoCtn,
                    children: (0, t.jsx)("img", {
                      className: O().AppBannerLogo,
                      src: a,
                    }),
                  }),
                !!(a && !r) &&
                  (0, t.jsx)("div", {
                    className: O().AppBannerLogoCtn,
                    children: (0, t.jsx)("img", {
                      className: O().AppBannerLogo,
                      src: a,
                    }),
                  }),
                (0, t.jsxs)("div", {
                  className: O().SimpleTitleCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: O().Title,
                      children: e.startsWith("#") ? (0, d.we)(e) : e,
                    }),
                    s &&
                      (0, t.jsx)("div", {
                        className: O().Subtitle,
                        children: s.startsWith("#") ? (0, d.we)(s) : s,
                      }),
                  ],
                }),
              ],
            }),
          });
        };
        function hn(n) {
          const e = (0, D.d)(n);
          return (
            (0, Ue.wT)(!!e, "Must define collection " + n),
            {
              collection: n,
              smallHeight: Number(O().simpleTitleSmallHeight),
              largeHeight: Number(O().simpleTitleLargeHeight),
              component: (s, o, a) =>
                (0, t.jsx)(mn, {
                  largeHeader: s,
                  titleToken: e?.strHeaderTitle ?? "",
                  subtitleToken: e?.strHeaderSubtitle,
                  headerImg: o,
                  headerURL: a,
                }),
            }
          );
        }
        function ca(n, e) {
          if (!n) return 0;
          const s = vn().find((o) => o.collection === n);
          return s ? (e ? s.largeHeight : s.smallHeight) : 0;
        }
        function da(n, e, s, o) {
          if (!n) return null;
          const a = vn().find((r) => r.collection === n);
          return a ? a.component(e, s, o) : null;
        }
        function ua(n, e) {
          return !n || !Y.O3.GetClanEventModel(n)
            ? 0
            : Number(
                e ? O().simpleTitleLargeHeight : O().simpleTitleSmallHeight,
              );
        }
        function ma(n, e) {
          if (!n) return null;
          let s = Y.O3.GetClanEventModel(n);
          return s ? (0, t.jsx)(ha, { bLargeHeader: e, eventModel: s }) : null;
        }
        function ha(n) {
          const { bLargeHeader: e, eventModel: s } = n;
          let o = (0, N.sfN)(f.TS.LANGUAGE);
          const a = (0, xt.m0)(s, "capsule", o, Se.wI.capsule_main);
          return (0, t.jsx)(mn, {
            largeHeader: e,
            titleToken: s.GetNameWithFallback(o) ?? "",
            subtitleToken: s.GetSubTitleWithSummaryFallback(o),
            headerImg: a,
          });
        }
        let Xe = null;
        function vn() {
          return (
            Xe ||
              ((Xe = new Array()),
              Xe.push(hn(D.g.Press)),
              Xe.push(hn(D.g.Halloween))),
            Xe
          );
        }
        var va = i(68538),
          ga = i(25738),
          he = i.n(ga),
          pa = Object.defineProperty,
          Ca = Object.getOwnPropertyDescriptor,
          yt = (n, e, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? Ca(e, s) : e, r = n.length - 1, l;
              r >= 0;
              r--
            )
              (l = n[r]) && (a = (o ? l(e, s, a) : l(a)) || a);
            return o && a && pa(e, s, a), a;
          };
        let Nt = class extends I.Component {
          render() {
            const {
              rgCalendarItems: n,
              bSuppressHoverEffects: e,
              strMultipleSourceTitle: s,
            } = this.props;
            if (!n || n.length == 0) return null;
            const o = n[0];
            if (!n.every((r) => r.appid === o.appid && r.clanid === o.clanid))
              return s
                ? (0, t.jsx)("div", {
                    className: he().EventTileCarouselTitleContainer,
                    children: (0, t.jsx)("div", {
                      className: he().EventTileCarouselTextTitle,
                      children: s,
                    }),
                  })
                : null;
            const a = !!(o.appid === 0 && f.iA.accountid);
            return (0, t.jsxs)("div", {
              className: he().EventTileCarouselTitleContainer,
              children: [
                (0, t.jsx)("div", {
                  className: he().EventTileCarouselTitle,
                  children: (0, t.jsx)(ja, {
                    calendarItem: o,
                    bSuppressHoverEffects: e,
                  }),
                }),
                a &&
                  (0, t.jsx)("div", {
                    className: he().EventTileCarouselFollow,
                    children: (0, t.jsx)(Xt.of, { clanAccountID: o.clanid }),
                  }),
              ],
            });
          }
        };
        Nt = yt([j.PA], Nt);
        let we = class extends I.Component {
          state = {
            bScreenIsWide: we.IsWideScreen(),
            nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow(),
          };
          componentDidMount() {
            window.addEventListener("resize", this.OnResize);
          }
          componentWillUnmount() {
            window.removeEventListener("resize", this.OnResize);
          }
          static IsWideScreen() {
            return window.innerWidth >= 910;
          }
          GetMaxCapsulesPerRow() {
            return we.IsWideScreen() ? 3 : window.innerWidth > 700 ? 2 : 1;
          }
          OnResize() {
            this.setState({
              bScreenIsWide: we.IsWideScreen(),
              nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow(),
            });
          }
          render() {
            const {
              rgCalendarItems: n,
              fnOnEventClick: e,
              bSuppressHoverEffects: s,
              bHideGameTitle: o,
              strMultipleSourceTitle: a,
            } = this.props;
            if (!n || n.length == 0) return null;
            const r = n.map((l) =>
              (0, t.jsx)(
                Tt,
                {
                  calendarEvent: l,
                  partnerEventStore: Y.O3,
                  fnOnClicked: e,
                  bSuppressHoverEffects: s,
                  mode: n.length > 1 ? "carousel" : "wide",
                  bHideGameTitle: o,
                },
                "ht-" + l.unique_id,
              ),
            );
            return (0, t.jsxs)("div", {
              className: he().CalendarRow,
              children: [
                (0, t.jsx)(Nt, {
                  rgCalendarItems: n,
                  bSuppressHoverEffects: s,
                  strMultipleSourceTitle: a,
                }),
                (0, t.jsx)("div", {
                  className: (0, x.A)(
                    he().EventTileCarousel,
                    "EventTileCarouselCtn",
                  ),
                  children: (0, t.jsx)(va.F, {
                    ...this.props,
                    hideArrows: !0,
                    visibleElements: Math.min(
                      this.state.nMaxCapsulesPerRow,
                      this.props.rgCalendarItems.length,
                    ),
                    className: he().HorizontalTiles,
                    useTestScrollbar: !0,
                    bLazyRenderChildren: !0,
                    disableEdgeWrap: !0,
                    screenIsWide: this.state.bScreenIsWide,
                    children: r,
                  }),
                }),
              ],
            });
          }
        };
        yt([J.oI], we.prototype, "OnResize", 1), (we = yt([j.PA], we));
        var fa = i(29342),
          ie = i.n(fa);
        const Sa = (n) => {
            let e = new Array();
            return (
              f.TS.SUPPORTED_LANGUAGES?.length
                ? (e = f.TS.SUPPORTED_LANGUAGES.map((s) => s.localizedName))
                : e.push((0, d.we)("#Language_" + f.TS.LANGUAGE)),
              (0, t.jsx)("div", {
                className: ie().LanguageList,
                children: e.join(", "),
              })
            );
          },
          Ea = (n) => {
            const e = "SteamNewsHub_LanguageDismissed",
              s = () => {
                const m = JSON.parse(localStorage.getItem(e));
                return m && m.bDismissed;
              },
              [o, a] = I.useState(s());
            if (o || (0, f.Y2)()) return null;
            const r = () => {
                a(!0),
                  localStorage.setItem(e, JSON.stringify({ bDismissed: !0 }));
              },
              l = f.TS.STORE_BASE_URL + "account/languagepreferences/";
            return (0, t.jsx)("div", {
              className: ie().LanguageFeedNoteBucket,
              children: (0, t.jsxs)("div", {
                className: ie().LanguageFeedNoteCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: ie().DismissButton,
                    onClick: r,
                    children: (0, t.jsx)(k.i6V, {}),
                  }),
                  (0, t.jsxs)("div", {
                    className: ie().BodyFlow,
                    children: [
                      (0, t.jsx)("div", {
                        className: ie().LeftColumn,
                        children: (0, t.jsx)(k.vCk, {}),
                      }),
                      (0, t.jsxs)("div", {
                        className: ie().RightColumn,
                        children: [
                          (0, t.jsx)("div", {
                            className: ie().Title,
                            children: (0, d.we)(
                              "#EventCalendar_NewsLanguage_Title",
                            ),
                          }),
                          (0, t.jsx)(Sa, {}),
                          (0, t.jsx)("div", {
                            className: ie().Text,
                            children: (0, d.PP)(
                              "#EventCalendar_NewsLanguage_Text",
                              (0, t.jsx)("a", {
                                href: l,
                                children: (0, d.we)(
                                  "#EventCalendar_NewsLanguage_TextInHyperlink",
                                ),
                              }),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
        var Ia = i(24642),
          xa = i(60480),
          gn = Object.defineProperty,
          ba = Object.getOwnPropertyDescriptor,
          wa = (n, e, s) =>
            e in n
              ? gn(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (n[e] = s),
          P = (n, e, s, o) => {
            for (
              var a = o > 1 ? void 0 : o ? ba(e, s) : e, r = n.length - 1, l;
              r >= 0;
              r--
            )
              (l = n[r]) && (a = (o ? l(e, s, a) : l(a)) || a);
            return o && a && gn(e, s, a), a;
          },
          Ta = (n, e, s) => wa(n, typeof e != "symbol" ? e + "" : e, s);
        const pn = "global_header";
        function Te() {
          const n = document.getElementById(pn);
          if (n && getComputedStyle(n).display != "none") return n;
          const e = document.getElementsByClassName("responsive_header");
          return (
            (0, Ue.wT)(
              e.length <= 1,
              "Must have at most one responsive_header",
            ),
            e.length == 1 ? e[0] : null
          );
        }
        function ye() {
          const n = Te();
          return (n && n.id != pn) || f.TS.IN_MOBILE_WEBVIEW;
        }
        function Cn() {
          return (
            ye() ||
            window.innerWidth <
              parseInt(c().strDesktopControlBarWidth) +
                parseInt(c().strMaxMobileWidth)
          );
        }
        let U = class extends I.Component {
          state = {
            bUserIsLoggedIn: f.iA.logged_in,
            nVisibleHeight: 0,
            nScrollTop: 0,
            bControlBarIsCollapsed: Cn(),
            bControlBarWasOpenedByUser: !1,
            nDisappearingHeaderTop: 0,
            nSteamNavHeaderHeight: 0,
            nMobileNavBannerHeight: 0,
            nHubBannerHeight: 0,
            nGroupHeaderHeight: 0,
            nLogInBannerHeight: 0,
            nAccumScrollUp: 0,
            nAccumScrollDown: 0,
          };
          m_cancelSignal = ce().CancelToken.source();
          componentDidMount() {
            this.InitEventCalendarStore(),
              this.UpdateDocumentUI(),
              window.addEventListener("resize", this.OnResize),
              window.addEventListener("scroll", this.OnScroll),
              this.setState({ nVisibleHeight: window.innerHeight }),
              window.scrollTo(0, 0),
              this.UpdateEventControlLocationAndVisibility(),
              f.TS.IN_MOBILE_WEBVIEW &&
                this.props.location &&
                this.props.history.length == 0 &&
                this.props.history.push(this.props.location),
              (0, On.s)();
          }
          componentDidUpdate(n, e) {
            (e.bUserIsLoggedIn != this.state.bUserIsLoggedIn ||
              JSON.stringify(n.filter_to_appids) !=
                JSON.stringify(this.props.filter_to_appids) ||
              JSON.stringify(n.filter_to_clanids) !=
                JSON.stringify(this.props.filter_to_clanids) ||
              n.filter_to_collection !== this.props.filter_to_collection ||
              n.filter_to_saleid !== this.props.filter_to_saleid ||
              n.filter_to_contenthub_hubtype !==
                this.props.filter_to_contenthub_hubtype ||
              n.filter_to_contenthub_category_or_language !==
                this.props.filter_to_contenthub_category_or_language ||
              n.filter_to_contenthub_tag_name !==
                this.props.filter_to_contenthub_tag_name ||
              n.section_by_day !== this.props.section_by_day) &&
              (window.scrollTo(0, 0), this.InitEventCalendarStore()),
              this.UpdateDocumentUI(),
              this.LoadEventToShowAsModal(),
              this.UpdateEventControlLocationAndVisibility();
          }
          UpdateEventControlLocationAndVisibility() {
            if (this.props.location) {
              const n = Fe.Get().UpdateLocation(
                () => this.props.history,
                this.props.location,
              );
              ((n != "desktop_navigation" &&
                this.state.bControlBarIsCollapsed) ||
                (n == "desktop_navigation" &&
                  !this.state.bControlBarIsCollapsed &&
                  ye())) &&
                this.ToggleControlBarCollapsed();
            }
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("component unmounted"),
              window.removeEventListener("resize", this.OnResize),
              window.removeEventListener("scroll", this.OnScroll),
              this.UpdateBodyScrollState(!0);
            const n = Te();
            n && (n.style.transform = "");
          }
          GetCurrentHubBannerHeight(n) {
            const e = n && !(0, xe.c5)();
            return (0, b.v0)().GetCollectionID()
              ? ca((0, b.v0)().GetCollectionID(), e)
              : (0, b.v0)().BIsSaleCalendar()
                ? ua((0, b.v0)().GetSaleID(), e)
                : (0, b.v0)().BIsSingleSourceCalendar()
                  ? parseInt(
                      e
                        ? c().strJumboHubBannerHeight
                        : c().strDesktopHubBannerHeight,
                    ) - 1
                  : 0;
          }
          BShowLogInBanner() {
            return !!(
              !this.state.bUserIsLoggedIn && (0, b.v0)().BIsGlobalCalendar()
            );
          }
          GetCurrentHeaderHeights(n) {
            const e = ye(),
              s = (0, xe.c5)();
            let o = 0;
            Te() &&
              ((o = parseInt(
                e
                  ? c().strMobileGlobalHeaderHeight
                  : c().strDesktopGlobalHeaderHeight,
              )),
              (o -= 1));
            const a =
                parseInt(
                  s
                    ? c().strMobileGroupHeaderHeight
                    : c().strDesktopGroupHeaderHeight,
                ) - 1,
              r = (e ? parseInt(c().strMobileNavBannerHeight) : 0) - 1,
              l = this.GetCurrentHubBannerHeight(n);
            let m = 0;
            return (
              this.BShowLogInBanner() &&
                (m = parseInt(
                  n && !s
                    ? c().strLogInBannerLargeHeight
                    : c().strLogInBannerSmallHeight,
                )),
              {
                nSteamNavHeaderHeight: o,
                nMobileNavBannerHeight: r,
                nHubBannerHeight: l,
                nGroupHeaderHeight: a,
                nLogInBannerHeight: m,
              }
            );
          }
          async LoadEventToShowAsModal() {
            const n = (0, B.f3)(this.props.location, "megaphone");
            if (!!n && n !== "0" && n !== "false") {
              (0, B.le)(this.props.history, "megaphone", null);
              const l = { exclude_tags: ["patchnotes", "skip_megaphone"] },
                m = await Y.O3.LoadAdjacentPartnerEvents(
                  null,
                  null,
                  vt.DU,
                  0,
                  1,
                  l,
                );
              if (m?.length == 1) {
                const u = m[0];
                (0, B.iV)(this.props.history, {
                  emclan: u.clanSteamID.ConvertTo64BitString(),
                  emgid: u.GID,
                });
              } else
                console.error(
                  "Could not find the most recent Steam Blog post.",
                );
            }
            const s = (0, B.f3)(this.props.location, "clientpatchnotes");
            if (!!s && s !== "0" && s !== "false") {
              (0, B.le)(this.props.history, "clientpatchnotes", null);
              const [l, m] = s === "beta" ? [null, Wt.Ro] : [vt.DU, null],
                u = { require_tags: ["patchnotes"] },
                g = await Y.O3.LoadAdjacentPartnerEvents(
                  null,
                  $.b.InitFromClanID(m),
                  l,
                  0,
                  1,
                  u,
                );
              if (g?.length == 1) {
                const S = g[0];
                (0, B.iV)(this.props.history, {
                  emclan: S.clanSteamID.ConvertTo64BitString(),
                  emgid: S.GID,
                });
              } else
                console.error(
                  "Could not find the most recent Steam client patch notes.",
                );
            }
            const a = (0, B.f3)(this.props.location, "emclan"),
              r = (0, B.f3)(this.props.location, "emgid");
            if (a && r) {
              const l = new $.b(a);
              if (
                this.state.modalEvent &&
                this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                  l.ConvertTo64BitString() &&
                this.state.modalEvent.GID == r
              )
                return;
              const m =
                await Y.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  l,
                  r,
                  0,
                );
              this.setState({ modalEvent: m });
            } else this.state.modalEvent && this.setState({ modalEvent: null });
          }
          BShowFutureView() {
            const n = (0, B.f3)(this.props.location, "upcoming");
            return n && n != "false";
          }
          BShowUpdatesOnly() {
            return !!(
              this.props.filter_to_appids &&
              this.props.filter_to_appids.length == 1 &&
              (0, B.f3)(this.props.location, "updates") == "true"
            );
          }
          UpdateDocumentUI() {
            let n, e;
            const s = (0, b.v0)();
            if (s.BIsGlobalCalendar()) {
              const a = (0, D.d)(
                this.BShowFutureView() ? D.g.Upcoming : D.g.Default,
              );
              n = a?.strHeaderTitle ?? a?.strName;
            } else if (s.BIsSingleAppCalendar()) {
              const a = s.GetSingleAppID();
              n = Q.A.Get().GetApp(a)?.GetName();
            } else if (s.BIsSingleGroupCalendar()) {
              const a = s.GetSingleGroupID(),
                r = a && T.ac.GetClanInfoByClanAccountID(a);
              n = r && r.group_name;
            } else if (s.BIsCollectionCalendar()) {
              const a = s.GetCollectionID(),
                r = (0, D.d)(a);
              n = r?.strHeaderTitle ?? r?.strName;
            } else if (s.BIsSaleCalendar()) {
              const a = Y.O3.GetClanEventModel(s.GetSaleID());
              if (a) {
                if (a.appid) n = Q.A.Get().GetApp(a.appid)?.GetName();
                else {
                  const r = a.clanSteamID?.GetAccountID(),
                    l = r && T.ac.GetClanInfoByClanAccountID(r);
                  n = l && l.group_name;
                }
                e = a && a.GetNameWithFallback((0, N.sfN)(f.TS.LANGUAGE));
              }
            }
            let o = (0, d.we)("#EventCalendar_TabTitle_Global");
            n &&
              (e
                ? (o = (0, d.we)(
                    "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                    n,
                    e,
                  ))
                : (o = (0, d.we)("#EventCalendar_TabTitle_GroupHub", n))),
              document.title != o && (document.title = o),
              document.body.classList.contains("events_hub") ||
                document.body.classList.add("events_hub");
          }
          OnResize() {
            this.setState((n) => {
              const e = window.innerHeight,
                s = !n.bControlBarWasOpenedByUser && Cn(),
                o = this.GetCurrentHeaderHeights(this.state.nScrollTop <= 0);
              return (
                this.UpdateBodyScrollState(s),
                { nVisibleHeight: e, bControlBarIsCollapsed: s, ...o }
              );
            });
          }
          OnScroll() {
            const n = Math.round(window.scrollY);
            this.setState((e) => {
              const s = e.nScrollTop <= 0,
                o = n <= 0;
              let { nHubBannerHeight: a, nLogInBannerHeight: r } = e;
              if (s != o) {
                const E = this.GetCurrentHeaderHeights(o);
                (a = E.nHubBannerHeight), (r = E.nLogInBannerHeight);
              }
              const l = n - e.nScrollTop;
              let m = Math.max(0, e.nAccumScrollUp - l),
                u = Math.max(0, e.nAccumScrollDown + l),
                g = e.nDisappearingHeaderTop;
              const S = 100,
                w = 80;
              let v = e.nDisappearingHeaderTop < 0;
              u > w && ((m = 0), (u = 0), (v = !0)),
                (m > S || o) && ((m = 0), (u = 0), (v = !1)),
                this.state.bControlBarIsCollapsed || (v = !1),
                e.modalEvent && (v = !0);
              const p = e.nSteamNavHeaderHeight + a + e.nMobileNavBannerHeight;
              if (((g = v ? -1 * p : 0), g !== e.nDisappearingHeaderTop)) {
                const E = Te();
                E && (E.style.transform = `translateY(${g}px)`);
              }
              return {
                nScrollTop: n,
                nAccumScrollUp: m,
                nAccumScrollDown: u,
                nDisappearingHeaderTop: g,
                nHubBannerHeight: a,
                nLogInBannerHeight: r,
              };
            });
          }
          async InitEventCalendarStore() {
            const n = {
                appids: this.props.filter_to_appids,
                clanaccountids: this.props.filter_to_clanids,
                collectionid: this.props.filter_to_collection,
                saleid: this.props.filter_to_saleid,
                hubtype: this.props.filter_to_contenthub_hubtype,
                category_or_language:
                  this.props.filter_to_contenthub_category_or_language,
                tag_name: this.props.filter_to_contenthub_tag_name,
                bSectionByDay: this.props.section_by_day,
              },
              e = (0, b.Zr)(n, this.props.initialFilters),
              s = (0, b.v0)(),
              o = gt.S.Get(),
              a = !!(this.state.bUserIsLoggedIn && f.iA.accountid),
              r = s.BIsGlobalCalendar() && a ? "local" : "session",
              l = s.BIsGlobalCalendar() ? "U" + f.iA.accountid : e;
            s.m_visibilityStore.Init(
              a,
              this.BShowUpdatesOnly(),
              s.BIsShowingFeaturedFeed(),
              l,
              r,
            );
            const m = !s.BIsCollectionCalendar();
            if (
              (s.SetFilteredView(
                (g) => s.m_visibilityStore.BShouldDisplayEvent(g),
                m,
              ),
              U.m_bInitialLoad)
            ) {
              const g = (0, f.Tc)("metadatainfo", "application_config");
              s.SetCollectionMetaData(
                s.ValidateCollectionMetadata(g) ? g : null,
              );
            }
            const u =
              U.m_bInitialLoad &&
              (0, f.Tc)("initialEvents", "application_config");
            u
              ? (await s.RegisterCalendarEventsAndModels(u),
                (U.m_bInitialLoad = !1))
              : await s.RegisterCalendarEventsAndModels({ success: Mn.R }),
              s.BIsSingleSourceCalendar() &&
                (s.BIsSingleAppCalendar()
                  ? Q.A.Get().QueueAppRequest(s.GetSingleAppID(), {
                      include_assets: !0,
                      include_platforms: !0,
                      include_basic_info: !0,
                      include_release: !0,
                    })
                  : T.ac.LoadClanInfoForClanSteamID(
                      $.b.InitFromClanID(s.GetSingleGroupID()),
                    )),
              this.OnResize();
          }
          UpdateBodyScrollState(n) {
            const e = !n && ye(),
              s = document.body;
            s &&
              (e
                ? s.classList.add(c().BodyNoScroll)
                : s.classList.remove(c().BodyNoScroll));
          }
          MobileNavOpenSettings() {
            this.ToggleControlBarCollapsed(), at(!0);
          }
          ToggleControlBarCollapsed() {
            this.setState((n) => {
              const e = !n.bControlBarIsCollapsed,
                s = n.bControlBarIsCollapsed,
                o = e ? n.nDisappearingHeaderTop : 0,
                a = Te();
              return (
                a && (a.style.transform = `translateY(${o}px)`),
                this.UpdateBodyScrollState(e),
                {
                  bControlBarIsCollapsed: e,
                  bControlBarWasOpenedByUser: s,
                  nDisappearingHeaderTop: o,
                }
              );
            });
          }
          OnControlBarChange() {
            window.scrollTo(0, 0);
          }
          CloseEventModal() {
            const n = Te();
            n &&
              (n.style.transform = `translateY(${this.state.nDisappearingHeaderTop}px)`),
              this.props.history.action === "PUSH"
                ? this.props.history.goBack()
                : (0, B.ip)(this.props.history, {
                    emclan: void 0,
                    emgid: void 0,
                  });
          }
          async OnEventClicked(n) {
            this.props.tracker.RecordEventRead(n, Ae.Tc.qC);
            const e =
                this.state.nSteamNavHeaderHeight +
                this.state.nHubBannerHeight +
                this.state.nMobileNavBannerHeight,
              s = Te();
            s && (s.style.transform = `translateY(${-1 * e}px)`),
              (0, B.ip)(this.props.history, {
                emclan: n.clanSteamID.ConvertTo64BitString(),
                emgid: n.GID,
              });
          }
          ToggleFutureView() {
            (0, B.Bm)(
              this.props.history,
              "upcoming",
              this.BShowFutureView() ? "false" : "true",
            );
          }
          ResetAllFilters() {
            (0, B.Bm)(this.props.history, "updates", void 0),
              (0, b.v0)().m_visibilityStore.InitDefaultCheckboxes(
                this.state.bUserIsLoggedIn,
                !1,
              );
          }
          render() {
            const n =
                this.state.nSteamNavHeaderHeight +
                this.state.nHubBannerHeight +
                this.state.nMobileNavBannerHeight +
                this.state.nLogInBannerHeight,
              s =
                this.state.nDisappearingHeaderTop +
                this.state.nSteamNavHeaderHeight,
              o = s + this.state.nMobileNavBannerHeight,
              a = o + this.state.nLogInBannerHeight,
              r = this.state.nVisibleHeight <= parseInt(c().strMinMobileHeight),
              l = r
                ? 0
                : this.state.nDisappearingHeaderTop +
                  this.state.nSteamNavHeaderHeight,
              m = r ? 0 : this.state.nDisappearingHeaderTop + n,
              u = (0, b.v0)().m_visibilityStore.BAreAnyEventsFiltered(
                this.state.bUserIsLoggedIn,
              )
                ? this.ResetAllFilters
                : null;
            return (0, t.jsx)(I.Fragment, {
              children: (0, t.jsxs)(pe.Z, {
                className: (0, x.A)(
                  c().EventCalendarContainer,
                  this.state.bControlBarIsCollapsed ? c().CollapsedMenu : "",
                ),
                "flow-children": "row",
                children: [
                  (0, t.jsx)(L.tH, {
                    children: this.state.modalEvent
                      ? (0, t.jsx)(q.N, {
                          appid: this.state.modalEvent.appid,
                          trackingLocation: Ae.Tc.qC,
                          announcementGID:
                            this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: Y.O3,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal,
                        })
                      : null,
                  }),
                  (0, t.jsx)(L.tH, {
                    children: (0, t.jsx)(fs, {
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: l,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShowUpcoming: this.BShowFutureView(),
                      bShouldIncludeLegalFooter: !ye(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange,
                    }),
                  }),
                  (0, t.jsx)(L.tH, {
                    children: (0, t.jsxs)(pe.Z, {
                      className: (0, x.A)(
                        c().ReserveControlSpace,
                        !this.state.bControlBarIsCollapsed &&
                          c().WideLeftGutter,
                      ),
                      "flow-children": "column",
                      children: [
                        (0, t.jsx)(L.tH, {
                          children:
                            this.state.nLogInBannerHeight > 0 &&
                            (0, t.jsx)(Ba, {
                              nTopOffset: o,
                              bLargeMode:
                                this.state.nScrollTop <= 0 && !(0, xe.c5)(),
                            }),
                        }),
                        (0, t.jsxs)(L.tH, {
                          children: [
                            this.state.nMobileNavBannerHeight > 0 &&
                              (0, t.jsx)(rt, {
                                bIsUpcoming: this.BShowFutureView(),
                                nTopOffset: s,
                                fnToggleCollapsed: this.MobileNavOpenSettings,
                              }),
                            (0, t.jsx)(ya, {
                              nTopOffset: a,
                              bLargeMode:
                                this.state.nScrollTop <= 0 && !(0, xe.c5)(),
                            }),
                          ],
                        }),
                        (0, t.jsx)(L.tH, {
                          children: (0, t.jsx)(jt, {
                            bShowFutureViewOnly: this.BShowFutureView(),
                            bShowUpdatesOnly: this.BShowUpdatesOnly(),
                            fnOnEventClick: this.OnEventClicked,
                            fnToggleSeeFuture: this.ToggleFutureView,
                            fnResetFilters: u,
                            nVisibleHeight: this.state.nVisibleHeight,
                            nScrollTop: this.state.nScrollTop,
                            nDisappearingHeaderVisibleHeight: m,
                            bUserIsLoggedIn: !!(
                              this.state.bUserIsLoggedIn && f.iA.accountid
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        Ta(U, "m_bInitialLoad", !0),
          P([J.oI], U.prototype, "OnResize", 1),
          P([J.oI], U.prototype, "OnScroll", 1),
          P([J.oI], U.prototype, "MobileNavOpenSettings", 1),
          P([J.oI], U.prototype, "ToggleControlBarCollapsed", 1),
          P([J.oI], U.prototype, "OnControlBarChange", 1),
          P([J.oI], U.prototype, "CloseEventModal", 1),
          P([J.oI], U.prototype, "OnEventClicked", 1),
          P([J.oI], U.prototype, "ToggleFutureView", 1),
          P([J.oI], U.prototype, "ResetAllFilters", 1),
          (U = P([j.PA], U));
        const He = (0, M.y)(function (e) {
          return (0, t.jsx)(U, { ...e, tracker: (0, Pe.Y)() });
        });
        function ya(n) {
          const e = (0, fe.q3)(() => (0, b.v0)()),
            [s, o, a, r, l, m, u, g] = (0, fe.q3)(() => [
              e.GetCollectionMetaData()?.clan_event_gid || void 0,
              e.GetCollectionID(),
              e.BHasCollectionMetaData(),
              e.BIsSaleCalendar(),
              e.GetSaleID(),
              e.BIsSingleSourceCalendar(),
              e.BIsSingleAppCalendar() ? e.GetSingleAppID() : void 0,
              e.BIsSingleGroupCalendar() ? e.GetSingleGroupID() : void 0,
            ]),
            [S, w] = I.useState(!1),
            C = (0, N.sfN)(f.TS.LANGUAGE);
          if (
            (I.useEffect(() => {
              a &&
                s &&
                !Y.O3.GetClanEventModel(s) &&
                (w(!0),
                (async () => {
                  const p = e.GetCollectionMetaData(),
                    E = $.b.InitFromClanID(p.clanid);
                  await Y.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    E,
                    p.clan_event_gid,
                    0,
                  ),
                    w(!1);
                })());
            }, [e, a, s]),
            o)
          ) {
            let v;
            return (
              a && !S && (v = Y.O3.GetClanEventModel(s)),
              (0, t.jsx)(Na, {
                ...n,
                collectionID: o,
                eventModel: v,
                language: C,
              })
            );
          }
          if (r) {
            const v = ma(l, n.bLargeMode);
            if (!v) return null;
            const p = (0, x.A)(c().HubBanner, it().WideBanner);
            return (0, t.jsx)("div", {
              style: { transform: `translateY(${n.nTopOffset}px)` },
              className: p,
              children: v,
            });
          }
          if (m) {
            const v = (0, x.A)(
              c().HubBanner,
              it().WideBanner,
              n.bLargeMode && c().LargeMode,
              n.bLargeMode && it().TallBanner,
            );
            return (0, t.jsx)("div", {
              style: { transform: `translateY(${n.nTopOffset}px)` },
              className: v,
              children: (0, t.jsx)(sa.W, {
                appId: u,
                clanId: g,
                bShowRSSFeed: !0,
              }),
            });
          }
          return null;
        }
        function Na(n) {
          const { collectionID: e, language: s, eventModel: o } = n;
          let a = (0, xt.m0)(o, "capsule", s, Se.wI.capsule_main),
            r = (0, xa.n4)(o) ?? void 0;
          const l = da(e, n.bLargeMode, a, r);
          if (!l) return null;
          const m = (0, x.A)(c().HubBanner, it().WideBanner);
          return (0, t.jsx)("div", {
            style: { transform: `translateY(${n.nTopOffset}px)` },
            className: m,
            children: l,
          });
        }
        let jt = class extends I.Component {
          GetCurrentSectionLayout() {
            let n = 0;
            return (0, b.v0)()
              .GetCalendarSections(this.props.bShowFutureViewOnly)
              .map((s) => {
                const o = Math.max(n, s.nTopOffset);
                return (
                  (n = o + s.nRenderedHeight), { section: s, nTopOfSection: o }
                );
              });
          }
          GetMergeEventsType() {
            const n = (0, b.v0)(),
              e = n.GetCollectionID();
            return n.BIsSingleSourceCalendar() || e === D.g.Steam
              ? "none"
              : n.BIsShowingFeaturedFeed()
                ? "full"
                : e
                  ? "samesource"
                  : "full";
          }
          GetCuratorSuggestionSettings(n) {
            if (f.iA.accountid && (0, Ye.Us)()) {
              if (n.BIsGlobalCalendar() && !this.props.bShowFutureViewOnly) {
                if (n.m_visibilityStore.BIsGameSourceAllowed(y.FD.k_ECurator))
                  return {
                    nInlineOffset: 1e3,
                    bInlineDismissable: !0,
                    bShowAtEnd: !0,
                  };
              } else if (n.GetCollectionID() === D.g.Press)
                return {
                  nInlineOffset: 1e3,
                  bInlineDismissable: !1,
                  bShowAtEnd: !1,
                };
            }
            return {
              nInlineOffset: void 0,
              bInlineDismissable: !1,
              bShowAtEnd: !1,
            };
          }
          render() {
            const n = (0, b.v0)(),
              {
                bShowFutureViewOnly: e,
                bShowUpdatesOnly: s,
                fnOnEventClick: o,
                fnToggleSeeFuture: a,
                fnResetFilters: r,
                nScrollTop: l,
                nDisappearingHeaderVisibleHeight: m,
              } = this.props,
              u = n.GetCalendarSections(e);
            if (u.length == 0) return null;
            const g = (0, xe.c5)(),
              S = n.m_visibilityStore.BAreAllEventsHidden(),
              w = l;
            let C = !0;
            const v = this.GetCuratorSuggestionSettings(n);
            let p;
            const E = S
              ? []
              : this.GetCurrentSectionLayout().map(
                  ({ section: W, nTopOfSection: X }, Bt) => {
                    const {
                        strId: Gt,
                        strSectionLabel: _t,
                        rtSectionStart: Lt,
                        rtSectionEnd: Ft,
                        bIsFutureSection: Ht,
                        nRenderedHeight: lt,
                      } = W,
                      ct = X < w,
                      Rt = (0, x.A)(c().PastSection, C && c().DarkerBackground);
                    lt > 0 &&
                      ((C = !C),
                      v.nInlineOffset !== void 0 &&
                        X >= v.nInlineOffset &&
                        p === void 0 &&
                        (p = Bt));
                    const dt = !e && Ht;
                    return (0, t.jsx)(
                      ta.K,
                      {
                        className: c().LazyCalendarSectionCtn,
                        placeholderHeight: lt,
                        rootMargin: "100% 0px 100% 0px",
                        children: (0, t.jsx)(le, {
                          bRenderStickyHeader: ct,
                          strSectionLabel: _t,
                          rtSectionStart: Lt,
                          rtSectionEnd: Ft,
                          strSectionClassname: Rt,
                          bUseHorizontalLayout: dt,
                          fnOnSeeFutureClick: a,
                          bShowEarliestFirst: e || dt,
                          section: W,
                          fnOnEventClick: o,
                          bSuppressHoverEffects: g,
                          strMergeEvents: this.GetMergeEventsType(),
                        }),
                      },
                      Gt,
                    );
                  },
                );
            p !== void 0 &&
              E.splice(
                p,
                0,
                (0, t.jsx)(
                  un,
                  { bCanDismiss: v.bInlineDismissable },
                  "CuratorSuggestions",
                ),
              ),
              n.GetCollectionID() === D.g.Press &&
                E.splice(0, 0, (0, t.jsx)(Ea, {}, "LanguageFeedRow"));
            const G = u[0].rtSectionStart,
              _ = (0, b.v0)().GetCurrentlyLoadedEventCount(0, G),
              V = (0, b.v0)().GetCurrentlyLoadedEventCount(G);
            let F =
                _ &&
                (_.nCount
                  ? "#EventCalendar_NoMorePastEvents"
                  : "#EventCalendar_NoPastEvents"),
              ne =
                r &&
                (0, t.jsx)(
                  ue.he,
                  {
                    toolTipContent: (0, d.we)(
                      "#EventCalendar_ResetFilters_ttip",
                    ),
                    className: (0, x.A)(c().BackToThePast, c().NoCount),
                    onClick: r,
                    children: (0, d.we)("#EventCalendar_ResetFiltersButton"),
                  },
                  "link-back",
                );
            S && this.props.fnResetFilters
              ? (F = "#EventCalendar_EmptyCalendar")
              : e
                ? ((F =
                    V &&
                    (V.nCount
                      ? "#EventCalendar_NoMoreFutureEvents"
                      : "#EventCalendar_NoFutureEvents")),
                  (ne =
                    _ &&
                    (0, t.jsxs)(
                      "div",
                      {
                        className: c().BackToThePast,
                        onClick: a,
                        children: [
                          (0, d.we)("#EventCalendar_PastEventsLink"),
                          (0, t.jsx)("span", {
                            className: c().SeeAllCount,
                            children: _.nCount + (_.bIsComplete ? "" : "+"),
                          }),
                        ],
                      },
                      "link-back",
                    )))
                : s &&
                  (F =
                    _ &&
                    (_.nCount
                      ? "#EventCalendar_NoMorePastUpdates"
                      : "#EventCalendar_NoPastUpdates"));
            let Ne = null;
            return (
              (S || n.BHitEventHorizon(e ? "forward" : "backward")) &&
                (Ne = (0, t.jsxs)(I.Fragment, {
                  children: [
                    (0, t.jsx)(
                      "div",
                      {
                        className: (0, x.A)(c().EndOfRows, c().CalendarRow),
                        children: (0, t.jsxs)("div", {
                          className: c().NoMoreRows,
                          children: [" ", (0, d.we)(F), " "],
                        }),
                      },
                      "no-more-events",
                    ),
                    v.bShowAtEnd &&
                      (0, t.jsx)(un, { bCanDismiss: !1 }, "CuratorSuggestions"),
                    ne,
                  ],
                })),
              (0, t.jsx)("div", {
                className: c().RowContainer,
                style: { transform: `translateY(${m - 1}px)` },
                children: (0, t.jsxs)("div", {
                  className: c().Rows,
                  children: [
                    s &&
                      (0, t.jsx)("div", {
                        className: c().UpdatePageBanner,
                        children: (0, d.we)("#EventCalendar_UpdatesViewHeader"),
                      }),
                    E,
                    Ne,
                  ],
                }),
              })
            );
          }
        };
        jt = P([j.PA], jt);
        let Dt = class extends I.Component {
          render() {
            const n = this.props.rgCalendarItems[0].start_time,
              e = (0, b.v0)().GetCurrentlyLoadedEventCount(n);
            return this.props.rgCalendarItems.length <= 1
              ? null
              : (0, t.jsxs)(
                  "div",
                  {
                    className: c().MobileSeeAllink,
                    onClick: this.props.fnOnSeeFutureClick,
                    children: [
                      (0, d.we)("#EventCalendar_FutureEventsLink"),
                      (0, t.jsx)("span", {
                        className: c().SeeAllCount,
                        children: e.nCount + (e.bIsComplete ? "" : "+"),
                      }),
                    ],
                  },
                  "see-all-link",
                );
          }
        };
        Dt = P([j.PA], Dt);
        let At = class extends I.Component {
          render() {
            const {
              rgCalendarItems: n,
              fnOnEventClick: e,
              fnOnSeeFutureClick: s,
              bSuppressHoverEffects: o,
            } = this.props;
            return !n || n.length == 0
              ? null
              : (0, t.jsx)("div", {
                  className: c().CalendarRow,
                  children: (0, t.jsxs)("div", {
                    className: (0, x.A)(
                      c().HorizontalTileContainer,
                      "HorizontalTileCtn",
                    ),
                    children: [
                      (0, t.jsx)(pe.Z, {
                        className: c().HorizontalTiles,
                        "flow-children": "row",
                        children: n.map((a) =>
                          (0, t.jsx)(
                            Tt,
                            {
                              calendarEvent: a,
                              partnerEventStore: Y.O3,
                              fnOnClicked: e,
                              bSuppressHoverEffects: o,
                              mode: n.length > 1 ? "upcoming" : "wide",
                              bHideGameTitle:
                                (0, b.v0)().BIsSingleSourceCalendar() &&
                                (0, b.v0)().BEventMatchCalendarSingleSource(a),
                            },
                            "ht-" + a.unique_id,
                          ),
                        ),
                      }),
                      (0, t.jsx)(Dt, {
                        rgCalendarItems: n,
                        fnOnSeeFutureClick: s,
                      }),
                    ],
                  }),
                });
          }
        };
        At = P([j.PA], At);
        const ja = (0, j.PA)((n) => {
          const { calendarItem: e, bSuppressHoverEffects: s } = n,
            o = Y.O3.GetClanEventModel(e.unique_id);
          return o
            ? (0, t.jsx)("div", {
                className: c().EventListTitle,
                children: (0, t.jsx)(cn, {
                  eventModel: o,
                  calendarEvent: e,
                  bSuppressHoverEffects: s,
                }),
              })
            : null;
        });
        var Da = ((n) => ((n[(n.eCurators = 1)] = "eCurators"), n))(Da || {});
        let le = class extends I.Component {
          m_ref = I.createRef();
          rtSectionStart = void 0;
          rtSectionEnd = void 0;
          constructor(n) {
            super(n),
              (0, z.Gn)(this),
              (this.rtSectionStart = n.rtSectionStart),
              (this.rtSectionEnd = n.rtSectionEnd);
          }
          componentDidMount() {
            this.UpdatePositioning();
          }
          componentDidUpdate() {
            this.UpdatePositioning(),
              (this.rtSectionStart = this.props.rtSectionStart),
              (this.rtSectionEnd = this.props.rtSectionEnd);
          }
          UpdatePositioning() {
            this.m_ref.current &&
              (0, z.h5)(() => {
                const { section: n } = this.props,
                  e = this.m_ref.current.getBoundingClientRect().height;
                n.nRenderedHeight != e && (n.nRenderedHeight = e);
                const s = this.m_ref.current.offsetTop;
                n.nTopOffset != s && (n.nTopOffset = s);
              });
          }
          get cachedCalendarItems() {
            return (0, b.v0)().GetCalendarItemsInTimeRange(
              (0, Vt.uP)(() => this.rtSectionStart),
              (0, Vt.uP)(() => this.rtSectionEnd),
            );
          }
          GetCarouselGroupTitle(n) {
            return n.BIsShowingFeaturedFeed()
              ? (0, d.we)("#EventCalendar_GroupTitle_FeaturedCurators")
              : n.BIsGlobalCalendar()
                ? (0, d.we)("#EventCalendar_GroupTitle_Curators")
                : "";
          }
          GenerateKeyFromItem(n, e) {
            return e.GetSource() & R.bK.k_eSteam
              ? e.clanid
              : !e.appid && n === "full"
                ? 1
                : e.clanid;
          }
          static IsTimestampInRange(n, e, s) {
            return !!n && e < n && n <= s;
          }
          GetTimestampEvents(n) {
            const e = new Array();
            if (
              !!1 ||
              !n.BIsSingleAppCalendar() ||
              this.props.bShowEarliestFirst
            )
              return e;
            const o = n.GetCalendarAppInfoForAppID(n.GetSingleAppID());
            return (
              o &&
                (le.IsTimestampInRange(
                  o.last_played,
                  this.props.rtSectionStart,
                  this.props.rtSectionEnd,
                ) &&
                  e.push({
                    rtTime: o.last_played,
                    component: (0, t.jsx)(
                      fn,
                      {
                        className: c().TimeEventLastPlayed,
                        locToken: "#EventCalendar_TimeEventLastPlayed",
                        time: o.last_played,
                      },
                      "TimeEventLastPlayed",
                    ),
                  }),
                le.IsTimestampInRange(
                  o.wishlist_added,
                  this.props.rtSectionStart,
                  this.props.rtSectionEnd,
                ) &&
                  e.push({
                    rtTime: o.wishlist_added,
                    component: (0, t.jsx)(
                      fn,
                      {
                        className: c().TimeEventWishlisted,
                        locToken: "#EventCalendar_TimeEventWishlisted",
                        time: o.wishlist_added,
                      },
                      "TimeEventWishlisted",
                    ),
                  })),
              e.sort(
                this.props.bShowEarliestFirst
                  ? (a, r) => r.rtTime - a.rtTime
                  : (a, r) => a.rtTime - r.rtTime,
              ),
              e
            );
          }
          AddTimestampEventsInInterval(n, e, s, o) {
            for (const a of n)
              le.IsTimestampInRange(a.rtTime, e, s) && o.push(a.component);
          }
          RenderEventList(n) {
            const {
                fnOnEventClick: e,
                bSuppressHoverEffects: s,
                strMergeEvents: o,
              } = this.props,
              a = (0, b.v0)();
            let r = null;
            if (o !== "none") {
              r = new Map();
              for (const C of n) {
                const v = this.GenerateKeyFromItem(o, C),
                  p = r.get(v);
                if (p) p.push(C);
                else {
                  const E = new Array();
                  E.push(C), r.set(v, E);
                }
              }
            }
            const l = new Array(),
              m = new Array(),
              u = o === "full" ? m : l,
              g = 3,
              S = this.GetTimestampEvents(a);
            let w = this.props.bShowEarliestFirst
              ? this.props.rtSectionStart
              : this.props.rtSectionEnd;
            for (const C of n) {
              let v = l;
              if (r) {
                const p = this.GenerateKeyFromItem(o, C),
                  E = r.get(p);
                if (!E) continue;
                if ((p === 1 && (v = u), E.length >= g)) {
                  const G = p === 1 ? this.GetCarouselGroupTitle(a) : "",
                    _ = !E.find((V) => V.clanid != C.clanid);
                  E.sort((V, F) =>
                    F.score != V.score
                      ? F.score - V.score
                      : F.start_time - V.start_time,
                  ),
                    v.push(
                      (0, t.jsx)(
                        "div",
                        {
                          className: c().CalendarEventListRow,
                          children: (0, t.jsx)("div", {
                            className: c().CalendarEventListContainer,
                            children: (0, t.jsx)(
                              we,
                              {
                                rgCalendarItems: E,
                                bSuppressHoverEffects: s,
                                fnOnEventClick: e,
                                bHideGameTitle: _,
                                strMultipleSourceTitle: G,
                              },
                              C.unique_id,
                            ),
                          }),
                        },
                        C.unique_id,
                      ),
                    ),
                    r.delete(p);
                  continue;
                }
              }
              v === l &&
                (this.AddTimestampEventsInInterval(
                  S,
                  Math.min(w, C.start_time),
                  Math.max(w, C.start_time),
                  l,
                ),
                (w = C.start_time)),
                v.push(
                  (0, t.jsx)(
                    "div",
                    {
                      className: c().CalendarRow,
                      children: (0, t.jsx)(Tt, {
                        calendarEvent: C,
                        partnerEventStore: Y.O3,
                        mode: "wide",
                        fnOnClicked: e,
                        bSuppressHoverEffects: s,
                        bHideGameTitle:
                          a.BIsSingleSourceCalendar() &&
                          a.BEventMatchCalendarSingleSource(C),
                      }),
                    },
                    C.unique_id,
                  ),
                );
            }
            return (
              this.props.bShowEarliestFirst
                ? this.AddTimestampEventsInInterval(
                    S,
                    w,
                    this.props.rtSectionEnd,
                    l,
                  )
                : this.AddTimestampEventsInInterval(
                    S,
                    this.props.rtSectionStart,
                    w,
                    l,
                  ),
              l.push(...m),
              l
            );
          }
          render() {
            const {
              bRenderStickyHeader: n,
              strSectionLabel: e,
              strSectionClassname: s,
              bUseHorizontalLayout: o,
              fnOnSeeFutureClick: a,
              bShowEarliestFirst: r,
              fnOnEventClick: l,
              bSuppressHoverEffects: m,
            } = this.props;
            let { rgCalendarItems: u, bIsComplete: g } =
              this.cachedCalendarItems;
            if (u.length == 0 && g)
              return (0, t.jsx)("div", { ref: this.m_ref, className: s });
            u.length && r && (u = u.slice().reverse());
            const S = 3;
            let w = null;
            u.length > 0 &&
              (w = (0, t.jsx)("div", {
                className: (0, x.A)(
                  c().GroupHeader,
                  c().CalendarRow,
                  n && c().HeaderAtTop,
                ),
                children: (0, t.jsxs)("div", {
                  className: c().GroupHeaderTitle,
                  children: [
                    (0, t.jsx)("span", { children: e }),
                    (0, t.jsx)("div", { className: c().GroupHeaderLine }),
                    o &&
                      u.length > S &&
                      (0, t.jsxs)("div", {
                        className: c().SeeAllLink,
                        onClick: a,
                        children: [
                          (0, d.we)("#EventCalendar_FutureEventsLink"),
                          (0, t.jsx)("span", {
                            className: c().SeeAllCount,
                            children: u.length + (g ? "" : "+"),
                          }),
                        ],
                      }),
                  ],
                }),
              }));
            const C =
              !Ee.HD.bRequireAllEventsLoadedInTimeBlock ||
              g ||
              (o && u.length >= S);
            let v = null;
            return (
              C &&
                (v = o
                  ? (0, t.jsx)(At, {
                      rgCalendarItems: u.slice(0, S),
                      fnOnEventClick: l,
                      fnOnSeeFutureClick: a,
                      bSuppressHoverEffects: m,
                    })
                  : this.RenderEventList(u)),
              (0, t.jsxs)("div", {
                ref: this.m_ref,
                className: s,
                children: [
                  w,
                  v,
                  !g &&
                    !o &&
                    (0, t.jsx)(Aa, {
                      bShowEarliestFirst: this.props.bShowEarliestFirst,
                    }),
                ],
              })
            );
          }
        };
        P([z.sH], le.prototype, "rtSectionStart", 2),
          P([z.sH], le.prototype, "rtSectionEnd", 2),
          P([z.EW], le.prototype, "cachedCalendarItems", 1),
          (le = P([j.PA], le));
        const Aa = (n) => {
            const e = (0, b.v0)().GetTimeEdgeForDirection(
              n.bShowEarliestFirst ? "forward" : "backward",
              void 0,
            );
            return (0, t.jsxs)("div", {
              className: c().Loading,
              children: [
                (0, t.jsx)(Ce.t, { size: "xlarge", position: "center" }),
                e &&
                  (0, t.jsxs)(I.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: c().LoadingProgress,
                        children: (0, d.we)(
                          "#EventCalendar_LoadEventsProgress",
                          (0, Ia.D)(Number((0, b.v0)().GetNumEventsLoaded())),
                          (0, d.lQ)(e),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: c().AdjustFiltersText,
                        children: (0, d.we)("#EventCalendar_LoadEventsFilters"),
                      }),
                    ],
                  }),
              ],
            });
          },
          Ba = (n) => {
            const { elDialogElement: e, fnShowLogonDialog: s } = (0, rn.l)();
            return (0, t.jsxs)("div", {
              className: (0, x.A)(
                c().LogInFeedRow,
                !n.bLargeMode && c().LogInSmallMode,
              ),
              style: { transform: `translateY(${n.nTopOffset}px)` },
              children: [
                (0, t.jsxs)("div", {
                  className: c().PromptCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: c().LogInFeedTitle,
                      children: (0, d.we)("#EventCalendar_SignIn_Title"),
                    }),
                    (0, t.jsx)("button", {
                      onClick: s,
                      className: c().LogInButton,
                      children: (0, d.we)("#Login_SignIn"),
                    }),
                    (0, t.jsx)("div", {
                      className: c().LogInFeedText,
                      children: (0, d.we)("#EventCalendar_SignIn_Text"),
                    }),
                  ],
                }),
                e,
              ],
            });
          },
          fn = (n) => {
            const { locToken: e, time: s, className: o } = n,
              a = s ? (0, d.$w)(new Date(s * 1e3), !0) : "",
              r = (0, d.we)(e, a);
            return (0, t.jsx)("div", {
              className: (0, x.A)(c().TimeEventRow, o),
              children: r,
            });
          };
        var Ga = i(17809),
          _a = i(39567),
          La = i(98609);
        const Fa = (n) => {
          const [e] = (0, B.QD)("byday", !1),
            [s] = (0, B.QD)("upcoming", !1);
          return (0, _a.vb)(La.TS.LANGUAGE)
            ? (0, t.jsx)(Ga.d, {
                bSalePage: !0,
                children: (0, t.jsxs)(M.dO, {
                  children: [
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.EventViewByApp(
                        ":appid(\\d+)",
                        ":event_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (a) =>
                        (0, t.jsx)(
                          $e,
                          {
                            ...a,
                            appid:
                              a.match.params.appid &&
                              Number.parseInt(a.match.params.appid),
                            event_gid: a.match.params.event_gid,
                            bInfiniteScroll:
                              a.match.params.viewtype == "inline",
                          },
                          "detailview_" + a.match.params.event_gid,
                        ),
                    }),
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.EventViewByGroup(
                        ":groupid(\\d+)",
                        ":event_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (a) =>
                        (0, t.jsx)(
                          $e,
                          {
                            ...a,
                            clansteamid: new $.b(a.match.params.groupid),
                            event_gid: a.match.params.event_gid,
                            bInfiniteScroll:
                              a.match.params.viewtype == "inline",
                          },
                          "detailview_" + a.match.params.event_gid,
                        ),
                    }),
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.OldAnnouncementViewByApp(
                        ":appid(\\d+)",
                        ":announcement_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (a) =>
                        (0, t.jsx)(
                          $e,
                          {
                            ...a,
                            appid:
                              a.match.params.appid &&
                              Number.parseInt(a.match.params.appid),
                            announcement_gid: a.match.params.announcement_gid,
                            bInfiniteScroll:
                              a.match.params.viewtype == "old_inline",
                          },
                          "detailoldview_" + a.match.params.announcement_gid,
                        ),
                    }),
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.OldAnnouncementViewByGroup(
                        ":groupid(\\d+)",
                        ":announcement_gid(\\d+)",
                        ":vanity?",
                      ),
                      render: (a) =>
                        (0, t.jsx)(
                          $e,
                          {
                            ...a,
                            clansteamid: new $.b(a.match.params.groupid),
                            announcement_gid: a.match.params.announcement_gid,
                            bInfiniteScroll:
                              a.match.params.viewtype == "old_inline",
                          },
                          "detailoldview_" + a.match.params.announcement_gid,
                        ),
                    }),
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.NewsHubApp(":appid(\\d+)", ":vanity?"),
                      render: (a) =>
                        (0, t.jsx)(
                          He,
                          {
                            ...a,
                            filter_to_appids: [Number(a.match.params.appid)],
                            section_by_day: e,
                          },
                          a.match.params.appid,
                        ),
                    }),
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
                      render: (a) =>
                        (0, t.jsx)(
                          He,
                          {
                            ...a,
                            filter_to_clanids: [Number(a.match.params.groupid)],
                            section_by_day: e,
                          },
                          a.match.params.groupid,
                        ),
                    }),
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.NewsHubCollection(":collectionid", ":vanity?"),
                      render: (a) =>
                        (0, t.jsx)(
                          He,
                          {
                            initialFilters: Ha(a.match.params.collectionid),
                            ...a,
                            filter_to_collection: a.match.params.collectionid,
                            section_by_day: e,
                          },
                          a.match.params.collectionid,
                        ),
                    }),
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.NewsHubSale(":saleid", ":vanity?"),
                      render: (a) =>
                        (0, t.jsx)(
                          He,
                          {
                            ...a,
                            filter_to_saleid: a.match.params.saleid,
                            section_by_day: e || s,
                          },
                          a.match.params.saleid,
                        ),
                    }),
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.NewsHubContentHub(
                        ":hubtype",
                        ":category_or_language?",
                        ":tag_name?",
                      ),
                      render: (a) =>
                        (0, t.jsx)(
                          He,
                          {
                            ...a,
                            filter_to_contenthub_hubtype:
                              a.match.params.hubtype,
                            filter_to_contenthub_category_or_language:
                              a.match.params.category_or_language,
                            filter_to_contenthub_tag_name:
                              a.match.params.tag_name,
                            section_by_day: e,
                          },
                          a.match.params.hubtype +
                            "_" +
                            a.match.params.category_or_language +
                            "_" +
                            a.match.params.tag_name,
                        ),
                    }),
                    (0, t.jsx)(M.qh, {
                      exact: !0,
                      path: K.B.NewsHub(),
                      render: (a) =>
                        (0, t.jsx)(He, { ...a, section_by_day: e }, "global"),
                    }),
                  ],
                }),
              })
            : null;
        };
        function Ha(n) {
          if (n === "steam" && new URLSearchParams().get("branch") !== "beta")
            return { rgHiddenClans: [Wt.Ro] };
        }
        const Ra = Fa;
      },
      63292: (A) => {
        A.exports = {
          LanguageHeader: "_3lQvIyPYpaHHXs7hQOWgDs",
          CuratorInfoRow: "_3tR2dfU_Wenr_xcshy1wUY",
          CuratorInfoImg: "_1BVHFIbcMgjId-0ciy-1ob",
          CuratorInfoName: "_2X1CS5jZKk28-_m8wP08G8",
          CuratorInfoTitleCtn: "_3odsmWB7MUrxxcucBMYcgN",
          CuratorInfoActionCtn: "_2y3rSYHLpo0MERj2EMWQQ9",
          CuratorInfoPreview: "_1EbwpNpOWS4nmsjolxyUhi",
          CuratorInfoIcon: "_3Y0jFDFWk_msMNnvpgfjwB",
          CuratorInfoFollow: "_1I_eQgAgorxHE60P5m2zqq",
          CuratorHoverContainer: "_38fVPOADgxGJbfbw7jz_uG",
          CuratorHoverToolTip: "rSTyUxh3-fZYKih45mKb1",
        };
      },
      68224: (A) => {
        A.exports = {
          FeedSuggestContainerBG: "_3ICp4Zk0uKS3wBOo3rcx-6",
          FeedSuggestContainer: "_1420TVzKCePW589d4gqd4d",
          FeedSuggestCaption: "_38Zh0nmnrxXlh3yhtCnIPn",
          RowContainer: "_39bJZgNeIUX9mSWi0r8tNT",
          ClanInfo: "_2gUTgIVt7XIFc01CxohM9B",
          DismissButton: "_3YtGjvmV0WmN0i3sdMqGz2",
          BrowseMore: "_2nWAPvq239PI0lGHmtFmgc",
        };
      },
      10686: (A) => {
        A.exports = {
          strMaxMobileWidth: "700px",
          strMinMobileHeight: "360px",
          strDesktopControlBarWidth: "300px",
          strDesktopGlobalHeaderHeight: "104px",
          strMobileGlobalHeaderHeight: "62px",
          strDesktopHubBannerHeight: "80px",
          strMobileHubBannerHeight: "80px",
          strJumboHubBannerHeight: "150px",
          strDesktopGroupHeaderHeight: "70px",
          strMobileGroupHeaderHeight: "37px",
          strMobileNavBannerHeight: "52px",
          strLogInBannerLargeHeight: "239px",
          strLogInBannerSmallHeight: "70px",
          HubBanner: "_2zTu0OPJoqo1BXb1J9pDJ2",
          LargeMode: "_3OnTrhLh97xov3GKenO-l_",
          CloseFilterPage: "_3XZe_jfTYppPFYW0hZ0LRl",
          ShowSettings: "_1qCUdL_PYKT0_bKFAFAWQa",
          ControlPageContainer: "_2LztMgS2eI0MWKHJ3v-l0H",
          FiltersTitle: "tQZ7I-5Bxpp4zpDf48imu",
          FiltersDescription: "_17nuaBuSlylN8eWUkcLsAv",
          SidebarContainer: "_15YLDKm80opUF5Tivo7UK-",
          SidebarCollapsed: "_3x2Igmho_SeKqPI3_cnWfG",
          CollapseButton: "_1RCioHSgo99b0iUemHy2OE",
          DesktopButton: "_2vMIlVM2BeWTC0m5_Ys2WN",
          SidebarBackground: "_1ZO60tnVO9UhZWFk1zLM4r",
          Sidebar: "_1nf0vlWuKk9Qn7ncHC5uhq",
          SidebarTitle: "_3uZE-tI5d1lF6NQwSrxauh",
          FilterControlPage: "_uX0hAa1v6coYNh6Al4D6",
          FilterOption: "_2LoObf7xShKZbZ1G71rR_3",
          FilterSubOption: "_2ctVaeTDGGfjh-pOjQ4ktO",
          SideBarFilterNavLinks: "fhYfjG7Ry-VB6uq75Ccbm",
          FilterLink: "_1zyVyzldzUj085oNa8Y0r1",
          NumberDisplay: "_23qmf5MYL9D2szWuV-txE2",
          FilterSettingsCtn: "_3CSX8aqaZna9ZM6WLxhZC3",
          OpenFilterSettings: "_3cMESjaODP5L2fXHzANkNT",
          SidebarBackLink: "_2NQEg_ngTN4otkyy-9VfGQ",
          MobileCloseButton: "_3Es2qlfJBkwe2Yqco9B1VL",
          FilterSection: "_34HOA5NqMETdKvOv8I0QPz",
          FilterSubSection: "_1Ko6oJ92gSqJKHJhVCi2Pc",
          FilterSubSectionTitle: "MeJhm7ZvNEcgMNrj4YyRg",
          ForceResponsiveLink: "_3dRqLQAbzE1yESy7-PmVZK",
          SidebarLink: "_2VFTM7o6Mn2fvJXYr9mSVo",
          SidebarManageMutedApps: "_2IWYfBr6LLolwVjYdZcBco",
          MutedSourcesGroup: "_2B7QL2HvQhNvxTElRnADjb",
          MutedSourcesCount: "_3nwCq_gduAro-qt7Kt3x6s",
          SidebarFooter: "_3sXsgTKq8xa1K7EYzNNOBq",
          FooterLegal: "_3YG_3Z8DhgeYtKBWrOkNAA",
          MobileButton: "_3cMvc6AfC8k2OaILY81XXB",
          BodyNoScroll: "_1d-cxT1sPNzIVcm8qsNT7o",
          EventCalendarContainer: "_1e3WbBz7-mqMKmK8HnpzFF",
          CollapsedMenu: "WXATz6O52NqxwM0VJR-rV",
          ReserveControlSpace: "_18npkDI3gKg9S7EeTFOj-2",
          WideLeftGutter: "ws9ANxmy2MKDDodGRGkqN",
          LogInFeedRow: "nydHEEVdYQNQyocchG2Kr",
          RowContainer: "_3yqpPRFLwr6ETVDgLGT37s",
          Loading: "_2XF_gSfLb9JlFYAqd0PRA8",
          LoadingProgress: "_2k5Q_MrQn9caFbIUp8eEdr",
          AdjustFiltersText: "gM9YyLCnVPfTKfy2_Hsue",
          Rows: "r3Dia2Yw2X-goqFn-_UPT",
          FutureSection: "_290nkT9By-jIKGFyKBcIn3",
          PastSection: "_3FpvGiwJqnukNOcrsKd_sN",
          DarkerBackground: "_1U2BW9tpHKOVi_TG0XvjT",
          EmptySectionText: "_3TwYr6FsLY9hGiZ2Ed5897",
          CalendarEventListRow: "_3m6GW1eCeaSg9ypsv0JVD9",
          CalendarEventListContainer: "_3QenzSfSDt0SQcUy8yeaD-",
          CalendarRow: "_398u23KF15gxmeH741ZSyL",
          EventListTitle: "_qpO2uX5bg1l7b0G2FbFI",
          GroupHeader: "_3j2deAP85R6gftsIWiHe7n",
          GroupHeaderTitle: "_2aVLRsz60HV81P8VKT3kQj",
          GroupHeaderLine: "bcTEUtZM5us_nPhh-83J9",
          SeeAllLink: "_28rp7N0KcAtfF3xtD0m2DZ",
          SeeAllCount: "IOckOLV5f75IljZ0DqXdX",
          HorizontalTileContainer: "muk0v4M7AjwCVox0Kk1Q6",
          HorizontalTiles: "_1YVOyhzWrYyfeINbwhHVqc",
          HeaderAtTop: "_2VZunYlTR5OcMdubo0AYh_",
          EndOfRows: "_1lK7p5C13fouRsvpdUxeya",
          BackToThePast: "_18uWsMJww9J9esJ56PvIGe",
          MobileSeeAllink: "_3yeVNRj7J_UtR-fgIDVAMr",
          NoCount: "_2qW89hLYPJtBAANjQ9kJR-",
          LiveText: "_14EbBf2Uz8VI7xVl0RuDue",
          UpdatePageBanner: "_1hWgY3UxRcdnjka_axlCxE",
          LoginPrompt: "_1EXXCsUBCckCnFzBip-EwP",
          LoginButton: "_1wuxXz1nGOaX_Hj3qnXchJ",
          SpecialEventListGroup: "_5UEq9U_QY0YTaXXOsSIV2",
          SpecialEventListTitle: "_2fFKiTlt1nFQb3dFvEaqWW",
          SpecialEventList: "_3AESvlyhJ0vmRThgNB6Ebb",
          SpecialEvent: "_2s-UQIMf5ZWwh4641BF6Vy",
          SpecialEventTitle: "_3xq6Fl5_4RS4LYFK0NJGY1",
          SpecialEventTime: "_3cGYpNuy_GrG8AK-OwuvIZ",
          NewsChannelGroup: "_3U5MYaJE0i8UYZ_pUzyNk7",
          NewsChannelListTitle: "_3X16Tg0OrHJJL36_8dwlHo",
          NewsChannelList: "_19CIwB_GEUli1IquP3CIHn",
          NewsChannel: "_1n4vpyqKJYF8lc1kW9fr8-",
          NewsChannelText: "_2NbubYs7clHa8InE5qSifq",
          NewsChannelCount: "_1HQl8PnDDWs3V4bob4bBNk",
          NewsChannelOnPage: "kJoC7bJXT-uU6GorEljio",
          NewsChannelTitle: "_11O61s8Pr7CrLbKxzm9VMK",
          NewsChannelSubtitle: "_3_CIMpiaZYsgSD9rEIImZh",
          DiscoverGroup: "kUY00QAjWvDLtDIbUN5A",
          NewsChannelIcon: "_2NCtvce1qaFUggZ9OFpf8N",
          SidePanelGameSearch: "_1LTVIwFRYJjiwzhWzSVOd4",
          MobileNavBannerCtn: "_20PrZ-yvcNH561NUmAH7_Y",
          SearchDismiss: "eIKAr3iSqLCgmFyiNryB2",
          SearchBox: "_2i8gkeopkt1mSdGiNXYmd-",
          SearchExpanded: "_3rn-PPTfKI7di5ILvkjVyy",
          SettingsPanel: "tifiV2QTtklqCycSc8RpW",
          MobileNavHScroll: "yps0ywc-By1zfTHujot5E",
          MobileNavBannerList: "_3xi45UCnCWYdn3vwsjNkYD",
          MobileNavButton: "_3kOf_98MdXe617YcQtkFO6",
          MobileNavCount: "_3m7pyQzrfOHXYdheEaL0oM",
          MobileNavButtonActive: "_2XXBax726YbJCKgIAAgPhM",
          CalendarEventList: "_3Pm1aWPIBv2SjplauZbDnI",
          LogInSmallMode: "_21ANYFXCED2fJk0gtzrBci",
          LogInFeedText: "_3HgPBoJHm2b4URrMDxMeAs",
          PromptCtn: "_19gywKI5KqBR4uSRoXMxmB",
          LogInFeedTitle: "cmQc676wTF0GVI4iDpw_g",
          LogInButton: "_35WTOIomH5SPesM-UbjHBB",
          LazyCalendarSectionCtn: "_1_BP6N2tGh4484bcmYnZeX",
          TimeEventRow: "_2JQL9twuHonw_iuvnsdVBi",
          TimeEventLastPlayed: "_1QplXJ_L-d0BqrYdzD7uSN",
          TimeEventWishlisted: "_3_HujJS7DVArS8dgqixpOJ",
        };
      },
      57688: (A) => {
        A.exports = {
          simpleTitleSmallHeight: "80",
          simpleTitleLargeHeight: "200",
          SimpleTitleHeaderCtn: "_3VhPz9bkSXYdTyrsNHyclF",
          CollectionBannerGroup: "XKrAaB35oi_F1FfPvgMIe",
          AppBannerLogoCtn: "_1Vrsgns9yWeU55IkUV47iw",
          SimpleTitleCtn: "zWLw0Q_JjKfhgFgSDvBu1",
          Title: "_1_MCH_a2eJssfIIs2ipZjw",
          Subtitle: "_2Ym_jx4AIkRhj7T0qvKwhx",
          LargeHeader: "_1Y7af9n7NgyJVP8OA1voO5",
          NoHeaderImg: "_1wnpWYTPyd-qnyinYlNKwa",
          AppBannerLogo: "QDuRwp2w0MLb6hWd0_HT8",
        };
      },
      72978: (A) => {
        A.exports = {
          narrowWidth: "500px",
          GameTitleContainer: "WHJ_WMTSDKqO4yn_MLrau",
          AppIcon: "_3gwk6hFh7bUc2K174mzjyQ",
          TileTextAppName: "_71phFKOzg8aQlBU1rCA2T",
          EnableHovers: "_2BniJe0boLDKV9lwtWTCtm",
          TileContainer: "_1E3Anhs34BXsWWWqH4RNPL",
          CoverImageCtn: "_3HF9tOy_soo1B_odf1XArk",
          GameShortDescription: "_3Se1TZA5yo9V-vrUszNDAI",
          LiveText: "RNDf0d63hDSUu28sIkteH",
          LiveNow: "EVDkYKG_ikfyfH16lmQ-1",
          FutureDateText: "_2xdhMrjKEposPfgPK9UPe-",
          PastDateText: "_4-fqVd8yRSHEAjj7Hkx_V",
          GameSource: "vfv1QjSe1vEobRaHWlf3",
          SourceList: "_3BIx7glwN6Q0_mUUMyFyHu",
          Source: "_2lYFqIB0i1IONPFV4BTvfl",
          RecommendedSource: "_3ayJyXzZoAWy8wXs6YlftR",
          SourceRecommended: "_1yaRLkRkzjuw8xLjPX-zlc",
          DateAndSourceLine: "_2xxMBw-_ndXEC-SIBejGuu",
          EventTypeAndDateCtn: "sUBHF-Qdb_RUPYOBkgO1a",
          LeaveRoomForReminder: "_3djUmSsXnHX2qN5HdooYJz",
          SmallAppName: "_1-Jl_evfBGuwaMNm1CNSR5",
          TileTextCategoryType: "_1LkWXJVxWYdKiKf2Mxq3zs",
          EventType28: "_1qGfEmcWJdG1dp2gDhH7oP",
          EventType10: "_22QY5O4_i6LqHbtIXgilEV",
          EventType11: "_2Gv13-3mXe6Q4QJmTs3mNX",
          EventType23: "_590_lEtmh8atjjKVBT9t7",
          EventType35: "_2wHiBVvtv56AMUWeVWRbuz",
          EventType13: "_2D0ZNOuC3rrY9bf_BY1msw",
          EventType14: "_2mVdtaB_oY5b1fladlbBaM",
          EventType15: "_2Xke62sWB6bPMJuv72Qkw8",
          Tile: "_3xvUZtQ1j-pu-l2xy-lFAq",
          MainContentContainer: "_2pq2vP5kJ_wI2nw-igwJXF",
          YoutubePreviewImage: "_1UgZvqy4xNDdu4gJ6tlT-Q",
          TileImage: "d8bPiEt0DUII_mRqek_ht",
          TileTextContainer: "_3IQK4rcEU5IYtZuW-Ogsgu",
          EventType12: "_2X_hMZpqI8fyqbeFPi4JPj",
          EventName: "_1M8-Pa3b3WboayCgd5VBJT",
          EventSubTitle: "_1JjUp7sfpntpaOqu1_lyvO",
          GameCapsuleCtn: "_3HJFiuJiM5fUKk0czInoZg",
          AppBannerLogo: "u8z1m_ainssHj7AbLKOZs",
          FallbackImage: "_9rv9PL7ZWe4vZofYqYl3M",
          ClanSource: "_17Iog8CXlR0s8DuWS0rD0n",
          TileTextHeader: "_3-0KOhYVQX2zIP3z-jCAdu",
          PatchIconCtn: "Fm9_5yqk4wkh8BTsDC7CU",
          EventTitleCtn: "_1h5cJPC1IYFGDEMbRAWSNy",
          Footer: "_1tdf14bc7ZlvhWfiLIlpEf",
          EventCapsuleCtn: "_27kWH1D3y2WfR8D-sD8Rw2",
          LiveBroadcastPreview: "_4UYuS9QM4MsN9y4q5Livc",
          TileBackgroundImage: "gGujG17QdIx5Nn89DjTl8",
          TileCoverImagePlayable: "_2eoFkqfZovVT02IaU8nRNn",
          TileCoverLiveIcon: "_dmbjH8bEtPkaRrVTzwov",
          ReminderContainer: "_1_taBomEIggVub90iRWW1Y",
          OnlyIcon: "iO5Eug6GGz9JIqPndBJIG",
          EventSummaryDefault: "_2g3JjlrRkzgUWXF57w3leW",
          Vote_NotLoggedIn: "_17oqR-EnZiAHLri2CKnxmC",
          Vote_LimitedUser: "_2FlPoqF3vz8s8KjjoZ7sXn",
          Vote_Positive: "ysX-kDvwrjduqk2LGUkUg",
          RateIcon: "_2se4HtRbAckWOfTCGHox0X",
          Vote_Negative: "_3LqNuO0ebCJ_aJo3YJYjdE",
          Vote_Ready: "_3issE2anPtdsqPA_3_72Z0",
          FooterRightSide: "_1Hhqg7g-POjV0ysalDN4YM",
          Options: "_3nZg0h8xaxxZeW0g870Htl",
          TileViewerCount: "pg-a3zK8HAVaAKqUDx7t-",
          FooterStat: "_3_86JJo-1O_KkOZwRl2uZ6",
          CommentIcon: "Wn7qAQikmqUtnSPDCnzi3",
          CommentIconCtn: "PR8xM_Lig1kieA79gLjOB",
          LoadingTile: "_24QfL3thPI_MZMIbgL7tmb",
          CarouselMode: "_144ghSsl2jkmXzzHxgtQtX",
          UpcomingMode: "_2vzY3sqcpyNcqGqlP6cLOv",
          TileVideoIcon: "aK0jlBL0B6MxMGC4n-WzB",
          DateAndTime: "_1gEM9daUydLT65bFx2wXwE",
          HasVideo: "qbgBAwp3iK3ESknHvr2SQ",
          SubTitleShown: "_5C13zntXVrSwbAGXNrmv6",
          VideoPlayerReady: "_1onQjxTJsTnadbj-DAgoPK",
        };
      },
      25738: (A) => {
        A.exports = {
          EventTileCarousel: "_1mKD0MQ507t89Ii7mxDqSO",
          HorizontalTiles: "_1mUGBQxkYbGPRBk1SDhMHi",
          EventTileCarouselTitleContainer: "_3I_aGTx-KPOMeeyG7MAhPl",
          EventTileCarouselTextTitle: "_1kQ9N4FGH5M9XE7WS_Tk4o",
          EventTileCarouselTitle: "_3X3hCmDBBr2dKG-77H4TuQ",
          EventTileCarouselFollow: "_1qgVA9sM06WHigo755qFWq",
        };
      },
      29342: (A) => {
        A.exports = {
          LanguageFeedNoteBucket: "r8580cv-HTxYA6k0N1n-U",
          LanguageFeedNoteCtn: "_3jTgs16YR8cjlIdBj-VfXM",
          BodyFlow: "_1JI7CLvlOj0UNyivvhIaO4",
          LeftColumn: "_3l03TsLKQ1kgJ9y9srfOtu",
          RightColumn: "XKuYh_bCSCQcXf-hL_G3Y",
          Title: "TzlhguvzJY0mbc-5KxGQW",
          LanguageList: "_1VBz-c24qcoV4360Y5ZW2b",
          Text: "_1SGbC-0D-qeX8p1wEKWHcN",
          DismissButton: "_3zHKDN908qfKPXxxiQRS1A",
        };
      },
      12088: (A) => {
        A.exports = {
          LegalFooter: "_2XzXRucgCsdN2x7oRwSJu0",
          FooterLegal: "_7TrXidlVTKkfcdujKCtM5",
          mainmenu_socials_china: "sfMZciSGx86izSy_6vXjH",
          mainmenu_social_box: "_1BGLVq8Z8sJY-fjcMuT2VP",
          mainmenu_line: "ykCRRQsIcQBjAwGpnQFG7",
          mainmenu_links_china: "_9ImS9D7NtBJGkHgcrwlUX",
          mainmenu_legal_china: "_3hCum12eFRKC9ukPg3-305",
          mainmenu_legal_pwlegal: "_3RFkMNbBZIBVARA4st-AjH",
          mainmenu_logos_china: "_3D_5cMcjUFurdWptDxoP3y",
          mainmenu_china_wechat_logo: "_2sDKMGZPUGhXYuJnr4RO2g",
          mainmenu_china_weibo_logo: "E2dhWjYyH6xGs7zJ2KHC8",
          mainmenu_china_pw_logo: "_2vnv_k5xmD37qKbr7I8pTr",
          mainmenu_china_valve_logo: "Ig7VEoh78RH53WEJS3MKv",
          mainmenu_footer_spacer: "_3w1gNL-euGEyq49PCOGvbQ",
          china_spacer: "_16fnFsYrB3xAg2va_37FfV",
        };
      },
      16345: (A) => {
        A.exports = {
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
      70758: (A) => {
        A.exports = {
          YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
          YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
        };
      },
      9905: (A) => {
        A.exports = { ErrorMsg: "_1ZEL9R8kTy3jJqcuU_IguM" };
      },
    },
  ]);
})();
