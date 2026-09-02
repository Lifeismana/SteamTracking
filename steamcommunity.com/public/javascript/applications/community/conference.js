/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8521, 8396],
    {
      5306: (A, de, s) => {
        "use strict";
        s.r(de), s.d(de, { ConferenceRoutes: () => Pe, default: () => un });
        var e = s(7850),
          K = s(92757),
          ke = s(20076),
          ue = s(29630),
          I = s(99412),
          $ = s(76559),
          me = s(90395),
          S = s(3166),
          Ue = s(14947);
        class M {
          constructor() {
            this.m_mapConferences = Ue.sH.map();
          }
          GetConferenceInfo(t) {
            return this.m_mapConferences.get(t);
          }
          static Get() {
            return (
              M.s_Singleton ||
                ((M.s_Singleton = new M()), M.s_Singleton.Init()),
              M.s_Singleton
            );
          }
          async Init() {
            let t = (0, S.Tc)("conferenceinfo", "application_config");
            if (this.ValidateStoreDefault(t)) {
              const n = (0, I.sfN)(S.TS.LANGUAGE),
                a = (0, me.CJ)(t.clan_faq_about_page),
                r = me.pN.Get().GetFAQPublishedContent(a, n),
                l = {
                  strConferenceID: t.vanity,
                  rtStartTime: t.start_rtime,
                  rtEndTime: t.end_rtime,
                  clanSteamID: new $.b(t.event_group_steamid),
                  broadcastSteamID: new $.b(t.broadcast_steamid),
                  bPartnerOnly: t.partner_only,
                  faqAboutPage: r,
                  strLocalizedLogos: null,
                  strLocalizedMobileLogos: null,
                  globalQandASessionID: t.global_qanda_session_id,
                  youtubeVideoID: t.youtubeVideoID,
                };
              this.m_mapConferences.set(t.vanity, l);
              const d = await (0, ue.Er)(
                  t.localized_logo,
                  n,
                  r == null ? void 0 : r.timestamp,
                ),
                u = await (0, ue.Er)(
                  t.localized_mobile_logo,
                  n,
                  r == null ? void 0 : r.timestamp,
                );
              this.m_mapConferences.set(t.vanity, {
                ...l,
                strLocalizedLogos: typeof d == "string" ? [d] : d,
                strLocalizedMobileLogos: typeof u == "string" ? [u] : u,
              });
            }
          }
          ValidateStoreDefault(t) {
            const n = t;
            return n && typeof n == "object"
              ? typeof n.event_group_steamid == "string" &&
                  typeof n.start_rtime == "number" &&
                  typeof n.end_rtime == "number"
              : !1;
          }
        }
        var U = s(7582),
          L = s(25792),
          V = s(72429),
          ve = s(13465),
          Ve = s(21418),
          c = s(18210),
          q = s(65946),
          j = s(90626),
          Oe = s(9398),
          We = s(23240),
          he = s(90711),
          Qe = s(25317),
          f = s(36707),
          Ye = s(88619),
          Ke = s(53120),
          ze = s(54089);
        function Je(o) {
          const { conferenceInfo: t } = o,
            n = t.broadcastSteamID.ConvertTo64BitString();
          return (0, e.jsx)(L.tH, {
            children: (0, e.jsx)(We.default, {
              steamIDBroadcast: n,
              watchLocation: he.nn.CJ,
              bStartMuted: !0,
            }),
          });
        }
        function Ce(o) {
          const { conferenceInfo: t } = o,
            n = (0, q.q3)(() => t.broadcastSteamID.ConvertTo64BitString());
          return (0, e.jsx)("div", {
            className: (0, f.A)(
              Ye.BroadcastChatCtn,
              o.className ? `${o.className}` : "",
            ),
            children: (0, e.jsx)(L.tH, {
              children: (0, e.jsx)(Oe.I, {
                emoticonStore: Qe.MX,
                watchLocation: he.nn.CJ,
                steamID: n,
                globalChat: !0,
                bPartnerMemberOnlyChat: t.bPartnerOnly,
                bInvertLayout: !0,
              }),
            }),
          });
        }
        function fe(o) {
          const { conferenceInfo: t } = o,
            [n, a] = j.useState(!1);
          return n
            ? null
            : (0, e.jsxs)("div", {
                className: Ke.broadcast_floating,
                children: [
                  (0, e.jsx)(ze.BroadcastEmbeddablePopoutHeader, {
                    steamIDBroadcast: t.broadcastSteamID.ConvertTo64BitString(),
                    OnPreventPopup: () => a(!0),
                  }),
                  (0, e.jsx)(Je, { conferenceInfo: t }),
                ],
              });
        }
        var ge = s(26485);
        function Xe(o) {
          const { conferenceInfo: t } = o;
          return null;
        }
        var xe = s(67628),
          Ze = s(71462),
          w = s(36118),
          F = s(71421),
          ne = s(36174),
          E = s(98241),
          ae = s(7638);
        class O {
          constructor() {
            this.m_inFlight = null;
          }
          async LoadInitialCalendarData(t, n) {
            return (
              this.m_inFlight ||
                (this.m_inFlight = this.InternalLoadInitialCalendarData(t, n)),
              this.m_inFlight
            );
          }
          async InternalLoadInitialCalendarData(t, n) {
            ae.KN.IsInitialized() || ae.KN.InitGlobal(),
              (0, E.Zr)({
                collectionid: n,
                bSectionByDay: !0,
                rtCalendarEnd: t,
              });
            const a = (0, E.v0)(),
              r = (0, S.Tc)("conference_calendar", "application_config");
            r && (await a.RegisterCalendarEventsAndModels(r)),
              a.SetFilteredView((l) => !0);
          }
          static Get() {
            return O.m_singleton || (O.m_singleton = new O()), O.m_singleton;
          }
        }
        var Se = s(98112),
          $e = s(18614),
          z = s(77495),
          qe = s(19316),
          _e = s(91424),
          et = s(41735),
          tt = s.n(et),
          _ = s(75844),
          p = s(49789),
          nt = s(90825),
          J = s(9046),
          oe = s(813),
          B = s(63694),
          b = s(81673),
          at = s(40976),
          ot = s(16346),
          st = s(6469),
          lt = s(74618),
          G = s(34360),
          je = s(82734),
          it = s(53113),
          se = s(2801),
          le = s(88003),
          rt = s(72978),
          i = s.n(rt),
          H = s(56492),
          ct = s(89926),
          dt = s(35675);
        function ut(o) {
          const { closeModal: t } = o,
            n = () => {
              (0, E.v0)().m_visibilityStore.SetGameSourceAllowed(
                b.FD.k_ECurator,
                !0,
              ),
                t && t();
            },
            a = () => {
              (0,
              E.v0)().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(
                !0,
              ),
                t && t();
            };
          return (0, e.jsx)(se.o0, {
            strTitle: (0, c.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Title",
            ),
            strDescription: (0, c.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_Description",
            ),
            strOKButtonText: (0, c.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton",
            ),
            strCancelButtonText: (0, c.we)(
              "#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton",
            ),
            onOK: n,
            onCancel: a,
          });
        }
        function mt(o) {
          o ||
            ((0, E.dP)() &&
              ((0,
              E.v0)().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
                (0, E.v0)().m_visibilityStore.BIsGameSourceAllowed(
                  b.FD.k_ECurator,
                ) ||
                (0, le.pg)((0, e.jsx)(ut, {}), window)));
        }
        const vt = (0, _.PA)((o) => {
          const { eventModel: t, calendarEvent: n, history: a } = o,
            r = (y) => {
              let v = n.GetEntityName();
              (0, le.pg)(
                (0, e.jsx)(se.o0, {
                  strTitle: (0, c.we)("#EventCalendar_MuteApp_Title", v),
                  strDescription: (0, c.we)(
                    "#EventCalendar_MuteApp_details",
                    v,
                  ),
                  onOK: () =>
                    (0, E.v0)().UpdateEventBlockFromCalendarEvent(n, !1),
                  children: (0, e.jsx)("a", {
                    href: S.TS.STORE_BASE_URL + "account/emailoptout/app",
                    target: S.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, c.we)("#EventCalendar_ManageMutedSources"),
                  }),
                }),
                (0, je.uX)(y),
              );
            },
            l = () => {
              (0, E.v0)().UpdateEventBlockFromCalendarEvent(n, !0);
            },
            d = () => {
              const y = u().MapClanEventTypeToGroup(t.GetEventType());
              u().SetEventTypeGroupAllowed(y, !1);
            },
            u = () => (0, E.v0)().m_visibilityStore,
            m = (y, v, C, D = !0) => {
              u().BIsGameSourceAllowed(v) &&
                (D &&
                  y.push(
                    (0, e.jsx)(
                      G.kt,
                      {
                        disabled: !0,
                        onSelected: () => {},
                        children: (0, c.we)("#EventCalender_Reason_" + v),
                      },
                      `item-source-${C}-${v}`,
                    ),
                  ),
                y.push(
                  (0, e.jsx)(
                    G.kt,
                    {
                      onSelected: () => {
                        u().SetGameSourceAllowed(v, !1);
                      },
                      children: (0, c.we)("#EventCalender_Hide_Reason_" + v),
                    },
                    `item-hidesource-${C}-${v}`,
                  ),
                ));
            },
            g = (0, H.Bw)(t, H.PH.k_eStoreNewsHub, "allowRelative"),
            T = () => {
              g.startsWith("http") ? (window.location.href = g) : a.push(g);
            },
            P = (y) => {
              let v = [];
              const C = n.GetSource(),
                D = n.unique_id,
                N = (0, S.Y2)(),
                R = (0, E.v0)();
              R.BIsGlobalCalendar() &&
                (C &&
                  C & p.bK.k_eLibrary &&
                  (u().BIsGameSourceAllowed(b.FD.k_ERecent) && n.appInfo
                    ? (v.push(
                        (0, e.jsx)(
                          G.kt,
                          {
                            disabled: !0,
                            onSelected: () => {},
                            children: (0, c.we)(
                              "#EventCalender_LastPlayed",
                              (0, c.Hq)(
                                U.HD.GetTimeNowWithOverride() -
                                  n.appInfo.last_played,
                              ),
                            ),
                          },
                          `item-source-${D}-lastplayed`,
                        ),
                      ),
                      m(v, b.FD.k_ERecent, D, !1))
                    : m(v, b.FD.k_ELibrary, D)),
                C && C & p.bK.k_eWishlist && m(v, b.FD.k_EWishlist, D),
                C && C & p.bK.k_eFollowing && m(v, b.FD.k_EFollowing, D),
                !N && C && C & p.bK.k_eCurator && m(v, b.FD.k_ECurator, D),
                C && C & p.bK.k_eRecommended && m(v, b.FD.k_ERecommended, D),
                C && C & p.bK.k_eSteam && m(v, b.FD.k_ESteam, D),
                C && C & p.bK.k_eFeatured && m(v, b.FD.k_EFeatured, D)),
                v.push(
                  (0, e.jsx)(
                    G.kt,
                    {
                      onSelected: d,
                      children: (0, c.we)(
                        "#EVentCalendar_Hide_EventType",
                        (0, c.we)(
                          "#EventCalendar_EventTypeGroup_" +
                            u().MapClanEventTypeToGroup(t.GetEventType()),
                        ),
                      ),
                    },
                    t.GID + "hidetype",
                  ),
                ),
                S.iA.logged_in &&
                  (lt.S.Get().BIsEventBlocked(n)
                    ? v.push(
                        (0, e.jsx)(
                          G.kt,
                          {
                            onSelected: l,
                            children: (0, e.jsx)(F.he, {
                              toolTipContent: (0, c.we)(
                                "#EventCalendar_UnMuteApp_ttip",
                              ),
                              children: (0, c.we)(
                                "#EventCalendar_UnMuteApp_Title",
                                n.GetEntityName(),
                              ),
                            }),
                          },
                          t.GID + "unmuteapp",
                        ),
                      )
                    : v.push(
                        (0, e.jsx)(
                          G.kt,
                          {
                            onSelected: r,
                            children: (0, e.jsx)(F.he, {
                              toolTipContent: (0, c.we)(
                                "#EventCalendar_MuteApp_ttip",
                              ),
                              children: (0, c.we)(
                                "#EventCalendar_MuteApp_Title",
                                n.GetEntityName(),
                              ),
                            }),
                          },
                          t.GID + "muteapp",
                        ),
                      )),
                !t.BIsOGGEvent() &&
                  !N &&
                  v.push((0, e.jsx)(ht, { eventModel: t, calendarEvent: n })),
                R.BIsSingleSourceCalendar() ||
                  v.push(
                    (0, e.jsx)(
                      G.kt,
                      {
                        onSelected: T,
                        children: (0, c.we)(
                          "#EventCalendar_Goto_SpecificCalendar",
                          n.GetEntityName(),
                        ),
                      },
                      t.GID + "goto",
                    ),
                  ),
                t.appid &&
                  v.push(
                    (0, e.jsx)(
                      G.kt,
                      {
                        onSelected: () =>
                          (window.location.href = (0, it.k2)(
                            S.TS.STORE_BASE_URL + "app/" + t.appid,
                          )),
                        children: (0, c.we)("#EventDisplay_ViewStorePage"),
                      },
                      t.GID + "goto",
                    ),
                  ),
                (0, ot.lX)((0, e.jsx)(G.tz, { children: v }), y);
            };
          return (0, e.jsx)("div", {
            className: (0, f.A)(i().FooterStat, i().Options),
            onClick: P,
            children: (0, e.jsx)(w.faJ, {}),
          });
        });
        function ht(o) {
          const { eventModel: t, calendarEvent: n } = o,
            a = (0, dt.eT)(t.clanSteamID.GetAccountID()),
            { elDialogElement: r, fnShowLogonDialog: l } = (0, ct.l)(),
            d = j.useCallback(async () => {
              S.iA.logged_in
                ? (await st.Fm.Get().UpdateFollowOrIgnoreCurator(
                    t.clanSteamID,
                    !0,
                    !a,
                  ),
                  mt(!!a))
                : l();
            }, [a, t.clanSteamID, l]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(
                G.kt,
                {
                  onSelected: d,
                  children: (0, e.jsx)(F.he, {
                    toolTipContent: (0, c.we)(
                      a
                        ? "#EventCalendar_UnFollowCurator_ttip"
                        : "#EventCalendar_FollowCurator_ttip",
                    ),
                    children: (0, c.we)(
                      a
                        ? "#EventCalendar_UnFollowCurator"
                        : "#EventCalendar_FollowCurator",
                      n.GetEntityName(),
                    ),
                  }),
                },
                t.GID + "followcurator",
              ),
              r,
            ],
          });
        }
        const Ct = (0, K.y)(vt);
        var ft = s(20035),
          gt = s(85741),
          xt = s(68266),
          St = s(42888),
          jt = s(88812),
          Ie = s(94380),
          pe = s(21659),
          It = s(39239),
          Ee = s(32608),
          pt = s(70758),
          ie = s.n(pt),
          be = s(1123);
        const Te = (o) => {
            const t = ["maxresdefault", "mqdefault", "default"],
              [n, a] = j.useState(0);
            j.useEffect(() => a(0), [o.video]);
            const r = j.useRef(void 0);
            if (o.altImgWithFallback && o.altImgWithFallback.length > 0)
              return (0, e.jsx)(It.o, {
                className: o.className,
                srcs: o.altImgWithFallback,
              });
            if (o.altImg)
              return (0, e.jsx)("img", {
                src: o.altImg,
                className: o.className,
              });
            {
              const l =
                  "https://img.youtube.com/vi/" + o.video + "/" + t[n] + ".jpg",
                d = () => {
                  n + 1 < t.length && a(n + 1);
                },
                u = () => {
                  r.current && r.current.naturalHeight < 91 && d();
                };
              return (0, e.jsx)("img", {
                ref: r,
                onLoad: u,
                onError: d,
                src: l,
                className: (0, f.A)(ie().YoutubePreviewImage, o.className),
              });
            }
          },
          Et = (o) => {
            const [t, n] = j.useState(!1);
            (0, Ee.VC)(!!o.preloadYoutubeScripts);
            const a = (0, be.Rp)("youtube");
            if (!t || !a) {
              const r = (l) => {
                o.onPlayerActivated && o.onPlayerActivated(),
                  n(!0),
                  l.stopPropagation(),
                  l.preventDefault();
              };
              return (0, e.jsxs)("div", {
                className: (0, f.A)(
                  "YoutubePreviewContainer",
                  ie().YoutubePreviewImage,
                  o.imageClassnames,
                ),
                onClick: a ? r : void 0,
                children: [
                  (0, e.jsx)(Te, {
                    className: "YoutubePreviewImage",
                    altImgWithFallback: o.altImgWithFallback,
                    altImg: o.altImg,
                    video: o.video,
                  }),
                  a &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("div", {
                          className: "YoutubePreviewPlay",
                          children: (0, e.jsx)(w.IOc, {}),
                        }),
                        (0, e.jsx)("div", {
                          className: "VideoHintText",
                          children: (0, c.we)(
                            "#EventCalendar_WatchYouTubeVideo",
                          ),
                        }),
                      ],
                    }),
                ],
              });
            } else
              return (0, e.jsx)(Ee.N1, {
                ...o,
                classnames: (0, f.A)(ie().YoutubePlayer, o.classnames),
              });
          };
        var re = s(19730),
          bt = s(71684),
          Tt = s(29522),
          yt = s(40358);
        function Dt(o) {
          var t, n;
          const {
              eventModel: a,
              calendarEvent: r,
              bSuppressHoverEffects: l,
              mode: d,
              bHideGameTitle: u,
              fnOnClicked: m,
            } = o,
            [g, T] = j.useState(!1),
            P = (0, Tt.$5)(a.GetAppIDOrReferenceAppID());
          (0, yt.lv)(P);
          const y = (0, gt.Mg)(a);
          (0, oe.$5)((t = r.clanInfo) == null ? void 0 : t.clanid);
          const v = (0, I.sfN)(S.TS.LANGUAGE),
            C = "capsule",
            [D, N, R, ee, Q, X, mn, vn, hn, Cn, fn] = (0, q.q3)(() => [
              a.has_live_stream,
              a.GetEventType(),
              a.GetAllTags(),
              a.GetCategoryAsString(),
              a.GetNameWithFallback(v),
              a.BImageNeedScreenshotFallback(C, v),
              a.appid,
              a.GID,
              a.GetStartTimeAndDateUnixSeconds(),
              a.GetSubTitleWithLanguageFallback(v),
              a.GetSummaryWithFallback(v),
            ]),
            [gn, xn] = j.useState(() =>
              (0, pe.c5)() && N == I.zeJ ? J.wI.full : J.wI.capsule_main,
            ),
            Sn = (0, be.Ey)(),
            jn = !!(X && mn && y),
            In =
              (n = (0, xt.m0)(jn ? void 0 : a, C, v, gn, Sn)) != null ? n : y,
            pn = ce(a, d),
            En = (0, St.uU)(vn),
            Fe = i()[`EventType${N}`],
            bn = R.map((te) => i()[`Tag-${te}`]),
            Tn = (0, f.A)(
              i().TileContainer,
              Fe,
              D && i().TileVideoIcon,
              l ? i().DisableHovers : i().EnableHovers,
              g && i().VideoPlayerReady,
              pn && i().HasVideo,
              En && i().HasBeenRead,
              d === "wide" && i().WideMode,
              d === "carousel" && i().CarouselMode,
              d === "upcoming" && i().UpcomingMode,
              ...bn,
            );
          let k = Cn,
            Z = fn;
          k === Z && (Z = void 0), k === Q && (k = void 0);
          const Le = (0, nt.j3)(In),
            Be = (0, e.jsx)(wt, {
              setVideoPlayerReady: T,
              calendarEvent: r,
              eventModel: a,
              mode: d,
              artworkType: C,
              strCapsuleImgURLForBackground: Le,
              fnSetCoverSize: xn,
            }),
            yn = g && d !== "carousel",
            Me = l && N != I.zeJ && !yn,
            Dn = Me && Be,
            Nn = !Me && Be,
            An =
              N !== I.uYK && N !== I.Fwr && U.HD.GetTimeNowWithOverride() < hn,
            Y = d !== "wide" || l,
            He =
              An &&
              (0, e.jsx)("div", {
                className: (0, f.A)(i().ReminderContainer, Y && i().OnlyIcon),
                children: (0, e.jsx)(Ie.j, {
                  eventModel: a,
                  lang: v,
                  bShowStartTime: !0,
                  bOnlyShowIcon: Y,
                  bExpandLeft: Y,
                }),
              }),
            Re = !!(N !== I.Fwr && Z),
            wn = !!(k && (!Re || !Nt(k, Z)));
          return (0, e.jsxs)("div", {
            className: Tn,
            children: [
              (0, e.jsx)(ft.C, { event: a, recordNewsHubStats: !0 }),
              (0, e.jsx)(H.tj, {
                eventModel: a,
                route: H.PH.k_eView,
                children: (0, e.jsxs)("div", {
                  className: i().Tile,
                  onClick: (te) => {
                    B.V.RecordAppInteractionEvent(r.appid, B.E.k_eClickThrough),
                      !(0, H.sY)() &&
                        (m(a), te.stopPropagation(), te.preventDefault());
                  },
                  children: [
                    N === I.zeJ &&
                      (0, e.jsx)("div", {
                        className: (0, f.A)(
                          i().TileBackgroundImage,
                          X && i().FallbackImage,
                        ),
                        style: { backgroundImage: `url(${Le})` },
                      }),
                    (0, e.jsxs)("div", {
                      className: i().MainContentContainer,
                      children: [
                        Nn,
                        (0, e.jsxs)("div", {
                          className: i().TileTextContainer,
                          children: [
                            N == I.Fwr &&
                              (0, e.jsx)("div", {
                                className: i().PatchIconCtn,
                                children: (0, e.jsx)(w.vjL, {}),
                              }),
                            (0, e.jsxs)("div", {
                              className: i().EventTitleCtn,
                              children: [
                                Dn,
                                !u &&
                                  (0, e.jsxs)("div", {
                                    className: i().GameSource,
                                    children: [
                                      (0, e.jsx)(Pt, { ...o }),
                                      r && (0, e.jsx)(Lt, { calendarEvent: r }),
                                    ],
                                  }),
                                (0, e.jsx)("div", {
                                  className: i().EventName,
                                  children: Q,
                                }),
                                (0, e.jsxs)("div", {
                                  className: i().EventTypeAndDateCtn,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: (0, f.A)(
                                        i().TileTextCategoryType,
                                        Fe,
                                      ),
                                      children: ee,
                                    }),
                                    (0, e.jsx)(Ft, {
                                      eventModel: a,
                                      className: (0, f.A)(
                                        Y && i().LeaveRoomForReminder,
                                      ),
                                    }),
                                    Y && He,
                                  ],
                                }),
                                wn &&
                                  (0, e.jsx)("div", {
                                    className: i().EventSubTitle,
                                    children: k,
                                  }),
                                Re &&
                                  (0, e.jsx)("div", {
                                    className: (0, f.A)(
                                      i().EventSummaryDefault,
                                      k ? i().SubTitleShown : "",
                                    ),
                                    children: Z,
                                  }),
                              ],
                            }),
                            !Y && He,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, e.jsx)(Ht, { ...o }),
            ],
          });
        }
        function Nt(o, t) {
          const n = (l) => l.replace(/\W+/g, "").toLocaleLowerCase(),
            a = n(o);
          return n(t).startsWith(a);
        }
        function ce(o, t) {
          const { video_preview_type: n, video_preview_id: a, type: r } = o;
          return !(t === "upcoming" || !a || r === I.Fwr || n !== "youtube");
        }
        function At(o) {
          const { eventModel: t, fnSetVideoStateReady: n, mode: a } = o,
            { video_preview_id: r, type: l } = o.eventModel,
            d = o.calendarEvent.appid,
            u = (0, I.sfN)(S.TS.LANGUAGE),
            m = (0, pe.c5)() && l == I.zeJ ? J.wI.full : J.wI.capsule_main,
            g = (0, jt.WC)(t, "capsule", u, m, !0);
          if (a === "carousel")
            return (0, e.jsx)(Te, {
              altImgWithFallback: g,
              video: r,
              className: i().YoutubePreviewImage,
            });
          const T = () => {
            B.V.RecordAppInteractionEvent(d, B.E.k_ePlayedVideo), n(!0);
          };
          return (0, e.jsx)(Et, {
            video: r,
            altImgWithFallback: g,
            autoplay: !0,
            autopause: !0,
            showFullscreenBtn: !0,
            controls: !0,
            imageClassnames: i().YoutubePreviewImage,
            onPlayerActivated: T,
            preloadYoutubeScripts: !0,
            playsInline: !0,
          });
        }
        function wt(o) {
          const {
              eventModel: t,
              calendarEvent: n,
              mode: a,
              artworkType: r,
              strCapsuleImgURLForBackground: l,
              setVideoPlayerReady: d,
              fnSetCoverSize: u,
            } = o,
            m = (0, I.sfN)(S.TS.LANGUAGE),
            g = ce(t, a),
            T = !ce(t, a) && a !== "upcoming",
            [P, y, v, C, D, N] = (0, q.q3)(() => [
              t.GetEventType(),
              t.has_live_stream,
              t.has_live_stream,
              t.clanSteamID.GetAccountID(),
              n.GetGameCapsule(),
              t.BImageNeedScreenshotFallback(r, m),
            ]);
          j.useEffect(() => {
            if (l) {
              const X = new Image();
              (X.src = l),
                (X.onerror = () => {
                  u(J.wI.full);
                });
            }
          }, [l, u]);
          const [, R] = (0, oe.TB)(C),
            ee = R && !R.is_ogg;
          let Q = t.GetSummaryWithFallback(m);
          return (
            t.GetSubTitleWithLanguageFallback(m) === Q && (Q = void 0),
            (0, e.jsxs)("div", {
              className: i().CoverImageCtn,
              children: [
                g &&
                  (0, e.jsx)(At, {
                    eventModel: t,
                    mode: a,
                    calendarEvent: n,
                    fnSetVideoStateReady: d,
                  }),
                T &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      P === I.Fwr &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: i().GameCapsuleCtn,
                              children: (0, e.jsx)("div", {
                                className: (0, f.A)({
                                  [i().AppBannerLogo]: !0,
                                  [i().FallbackImage]: N,
                                  [i().ClanSource]: ee,
                                }),
                                style: { backgroundImage: `url(${D})` },
                              }),
                            }),
                            (0, e.jsx)("div", {
                              className: i().GameShortDescription,
                              children: Q,
                            }),
                          ],
                        }),
                      P !== I.Fwr &&
                        (0, e.jsxs)("div", {
                          className: (0, f.A)({
                            [i().EventCapsuleCtn]: !0,
                            [i().LiveBroadcastPreview]: v,
                          }),
                          children: [
                            (0, e.jsx)("div", {
                              className: (0, f.A)({
                                [i().TileImage]: !0,
                                [i().FallbackImage]: N,
                                [i().ClanSource]: ee,
                              }),
                              style: { backgroundImage: `url(${l})` },
                            }),
                            v &&
                              (0, e.jsx)("div", {
                                className: i().TileCoverImagePlayable,
                              }),
                            y &&
                              (0, e.jsx)("div", {
                                className: i().TileCoverLiveIcon,
                                children: (0, c.we)(
                                  "#home_page_live_broadcast",
                                ),
                              }),
                            v &&
                              (0, e.jsx)("div", {
                                className: "VideoHintText",
                                children: (0, c.we)(
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
        const Gt = (0, _.PA)((o) => {
            const {
                eventModel: t,
                calendarEvent: n,
                bSuppressHoverEffects: a,
                history: r,
              } = o,
              l = (0, H.Bw)(t, H.PH.k_eStoreNewsHub, "allowRelative"),
              d = (T) => {
                l.startsWith("http") ? (window.location.href = l) : r.push(l),
                  T.stopPropagation(),
                  T.preventDefault();
              },
              u = n.GetEntityName(),
              m = n.GetGameIcon(),
              g = (0, f.A)(
                i().GameTitleContainer,
                a ? i().DisableHovers : i().EnableHovers,
              );
            return (0, e.jsx)(L.tH, {
              children: (0, e.jsx)("div", {
                className: i().TileTextHeader,
                children: (0, e.jsxs)("div", {
                  className: g,
                  onClick: d,
                  children: [
                    (0, e.jsx)("img", { className: i().AppIcon, src: m }),
                    (0, e.jsxs)("div", {
                      className: i().TileTextAppName,
                      children: [u, " "],
                    }),
                  ],
                }),
              }),
            });
          }),
          Pt = (0, K.y)(Gt),
          Ft = (0, _.PA)((o) => {
            const { eventModel: t, calendarEvent: n, className: a } = o,
              r = (0, E.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
              l = t ? t.GetStartTimeAndDateUnixSeconds() : n.start_time,
              d = t && (0, bt.JS)(t.type) && t.GetEndTimeAndDateUnixSeconds();
            if (d && l < r && r < d) {
              const u = d - r,
                m = (0, c.Hq)(u, !0);
              return (0, e.jsxs)("div", {
                className: (0, f.A)(i().LiveText, a),
                children: [
                  (0, e.jsx)(V.gS, {
                    rtFullDate: l,
                    stylesmodule: i(),
                    children: (0, e.jsx)("div", {
                      className: i().LiveNow,
                      children: (0, c.we)("#EventCalendar_LiveNow"),
                    }),
                  }),
                  (0, e.jsx)(V.gS, {
                    rtFullDate: d,
                    stylesmodule: i(),
                    children: (0, c.we)("#EventCalendar_TimeLeft", m),
                  }),
                ],
              });
            } else if (l < r) {
              const u = r - l,
                m = u < 24 * 3600 ? (0, c.Hq)(u, !1, !0) : (0, c._l)(l);
              return (0, e.jsx)(V.gS, {
                className: a,
                rtFullDate: l,
                stylesmodule: i(),
                children: (0, e.jsx)("div", {
                  className: i().PastDateText,
                  children: m,
                }),
              });
            } else {
              const u = new Date(r * 1e3);
              u.setHours(0, 0, 0, 1);
              const m = u.getTime() / 1e3,
                g = Math.floor((l - m) / (24 * 3600)),
                T =
                  g > 1 && g <= 5 ? (0, c.cc)(new Date(l * 1e3)) : (0, c._l)(l),
                P = (0, V.pg)(l);
              return (0, e.jsx)(V.gS, {
                className: a,
                rtFullDate: l,
                stylesmodule: i(),
                children: (0, e.jsx)("div", {
                  className: i().FutureDateText,
                  children: (0, c.we)(
                    "#EventCalendar_WillStartAtDateTime",
                    T,
                    P,
                  ),
                }),
              });
            }
          }),
          Lt = (0, _.PA)((o) => {
            const t = o.calendarEvent.GetSource(),
              n = [],
              a = (0, E.v0)().m_visibilityStore;
            t & p.bK.k_eLibrary && a.BIsGameSourceAllowed(b.FD.k_ELibrary)
              ? n.push({
                  id: p.bK.k_eLibrary,
                  name: "#EventCalendar_GameSource_inLibrary",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_library",
                  styles: i().LibrarySource,
                })
              : t & p.bK.k_eWishlist && a.BIsGameSourceAllowed(b.FD.k_EWishlist)
                ? n.push({
                    id: p.bK.k_eWishlist,
                    name: "#EventCalendar_GameSource_onWishlist",
                    ttip: "#EventCalendar_GameSource_EventExplanation_ttip_wishlist",
                    styles: i().WishlistSource,
                  })
                : t & p.bK.k_eRecommended &&
                    a.BIsGameSourceAllowed(b.FD.k_ERecommended)
                  ? n.push({
                      id: p.bK.k_eRecommended,
                      name: "#EventCalendar_GameSource_recommended_Verbose",
                      ttip: "#EventCalendar_GameSource_EventExplanation_ttip_recommended",
                      styles: i().RecommendedSource,
                    })
                  : t & p.bK.k_eFeatured &&
                    a.BIsGameSourceAllowed(b.FD.k_EFeatured) &&
                    n.push({
                      id: p.bK.k_eFeatured,
                      name: "#EventCalendar_GameSource_featured",
                      ttip: "#EventCalendar_GameSource_ttip_featured",
                      styles: i().FeaturedSource,
                    }),
              t & p.bK.k_eFollowing &&
                a.BIsGameSourceAllowed(b.FD.k_EFollowing) &&
                n.push({
                  id: p.bK.k_eFollowing,
                  name: "#EventCalendar_GameSource_followed",
                  ttip: "#EventCalendar_GameSource_EventExplanation_ttip_following",
                  styles: i().FollowingSource,
                });
            const r = n.map((l, d) => {
              const u = o.calendarEvent.unique_id;
              return Bt(
                `item-source-${u}-${l.id}`,
                l.name,
                l.ttip,
                l.styles,
                d + 1 < n.length,
              );
            });
            return (0, e.jsx)("div", {
              className: i().SourceList,
              children: r,
            });
          }),
          Bt = (o, t, n, a, r) =>
            (0, e.jsx)(
              F.he,
              {
                className: (0, f.A)(i().Source, a),
                toolTipContent: (0, c.we)(n),
                children: (0, c.we)(t) + (r ? ", " : ""),
              },
              o,
            );
        function Mt(o, t) {
          return o.BIsUserLoggedIn()
            ? S.iA.is_limited
              ? i().Vote_LimitedUser
              : t === !0
                ? i().Vote_Positive
                : t === !1
                  ? i().Vote_Negative
                  : i().Vote_Ready
            : i().Vote_NotLoggedIn;
        }
        function Ht(o) {
          const { eventModel: t } = o,
            n = ae.KN.Get(),
            [, a] = (0, oe.TB)(t.clanSteamID.GetAccountID()),
            r = () => {
              n.GetPreviouslyLoadedVote(t) !== !0 &&
                (0, at.W)(t, n) &&
                (n.Vote(t, !0, tt().CancelToken.source()),
                B.V.RecordAppInteractionEvent(t.appid, B.E.k_eThumbsUp));
            },
            l = () => {
              B.V.RecordAppInteractionEvent(t.appid, B.E.k_eDiscussions);
            },
            [d, u, m, g] = (0, q.q3)(() => [
              Math.max(0, t.nVotesUp - t.nVotesDown),
              n.GetPreviouslyLoadedVote(t),
              t.GetForumTopicURL(a == null ? void 0 : a.vanity_url),
              t.nCommentCount,
            ]),
            T = Mt(n, u),
            P = !(0, S.Y2)() && m,
            y =
              t.live_stream_viewer_count > 0
                ? t.live_stream_viewer_count
                : void 0;
          return (0, e.jsx)("div", {
            className: i().Footer,
            children: (0, e.jsxs)("div", {
              className: i().FooterRightSide,
              children: [
                !!y &&
                  (0, e.jsx)("div", {
                    className: i().TileViewerCount,
                    children: (0, re.Dq)(y),
                  }),
                (0, e.jsxs)("div", {
                  className: (0, f.A)(i().FooterStat, i().Vote, T),
                  onClick: r,
                  children: [
                    (0, e.jsx)(w.bfp, { className: i().RateIcon }),
                    (0, e.jsx)("span", { children: (0, re.Dq)(Number(d)) }),
                  ],
                }),
                P &&
                  (0, e.jsx)("div", {
                    className: i().FooterStat,
                    children: (0, e.jsxs)("a", {
                      href: m,
                      className: i().CommentIconCtn,
                      target: "_blank",
                      onClick: l,
                      children: [
                        (0, e.jsx)(w._h6, { className: i().CommentIcon }),
                        (0, e.jsx)("span", { children: (0, re.Dq)(Number(g)) }),
                      ],
                    }),
                  }),
                (0, e.jsx)(Ct, { ...o }),
              ],
            }),
          });
        }
        var Rt = s(19188),
          ye = s(179),
          kt = s(54963);
        const Ut = "emclan",
          Vt = "emgid";
        function De(o) {
          const { displayLocation: t, fnChangeModalEvent: n } = o,
            [a, r] = j.useState(null),
            [l, d] = (0, ye.QD)(Vt, null),
            [u, m] = (0, ye.QD)(Ut, null);
          return (
            (0, kt.hL)(n, (g, T) => {
              d(g), m($.b.InitFromClanID(T).ConvertTo64BitString());
            }),
            j.useEffect(() => {
              if (l != null && u != null) {
                const g = new $.b(u);
                z.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  g,
                  l,
                  0,
                ).then(r);
              }
            }, [l, u]),
            a
              ? (0, e.jsx)(Rt.N, {
                  appid: a.appid,
                  trackingLocation: t,
                  announcementGID: a.GetAnnouncementGID(),
                  partnerEventStore: z.O3,
                  eventModel: a,
                  showAppHeader: !0,
                  closeModal: () => {
                    r(null), m(null), d(null);
                  },
                })
              : null
          );
        }
        var Ot = s(34736),
          Wt = s(85599),
          Qt = s(47689),
          Ne = s(8323),
          Yt = s(92264),
          x = s(63585);
        const Ae = 10;
        function Kt(o) {
          const t = (0, E.v0)(),
            n = (0, U.P_)(Ae),
            a = t.GetActiveEventsAt(n) || [],
            [r] = j.useState(new Ne.lu()),
            l = j.useCallback(
              (d, u) => (0, _e.Y)(z.O3.GetClanEventModel(d), window),
              [],
            );
          return t.GetNumEventsLoaded() == 0
            ? (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_No_Schedule_Yet"),
              })
            : (0, e.jsxs)("div", {
                className: x.EventsScheduleCtn,
                children: [
                  (0, e.jsx)(De, {
                    displayLocation: Se.Tc.My,
                    fnChangeModalEvent: r,
                  }),
                  (0, e.jsx)(Zt, { rgActiveEvents: a, fnDisplayModalEvent: l }),
                  (0, e.jsx)(Jt, {
                    rgActiveEvents: a,
                    fnDisplayModalEvent: l,
                    rtNow: n,
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)(qe.$n, {
                    onClick: (d) =>
                      (0, le.pg)((0, e.jsx)(_t, {}), (0, je.uX)(d)),
                    children: (0, c.we)("#Conference_NeedHelp"),
                  }),
                ],
              });
        }
        function zt(o) {
          return (0, e.jsx)(we, { ...o, children: (0, e.jsx)(Kt, { ...o }) });
        }
        function Jt(o) {
          const { rgActiveEvents: t, rtNow: n } = o,
            r = (0, E.v0)()
              .GetCalendarItemsInTimeRange(n + 1)
              .rgCalendarItems.filter(
                (l) => !t.some((d) => d.GID == l.unique_id),
              )
              .sort((l, d) => l.start_time - d.start_time);
          return r.length == 0
            ? (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_No_More_Schedule"),
              })
            : (0, e.jsxs)("div", {
                className: x.UpcomingEventsCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: x.SectionTitle,
                    children: (0, c.we)("#Conference_ScheduleNext"),
                  }),
                  (0, e.jsx)("div", {
                    className: x.EventSchedCtn,
                    children: r.map((l, d) =>
                      (0, e.jsx)(
                        Xt,
                        {
                          bDisplayAsUpNext: d == 0 && t.length >= 1,
                          calendarItem: l,
                          fnDisplayModalEvent: o.fnDisplayModalEvent,
                          rtNow: n,
                        },
                        l.unique_id,
                      ),
                    ),
                  }),
                ],
              });
        }
        function Xt(o) {
          const {
              calendarItem: t,
              bDisplayAsUpNext: n,
              fnDisplayModalEvent: a,
              rtNow: r,
            } = o,
            l = z.O3.GetClanEventModel(t.unique_id),
            d = (0, I.sfN)(S.TS.LANGUAGE),
            u = l.GetStartTimeAndDateUnixSeconds(),
            m = (0, ne.JD)(new Date(r * 1e3), new Date(u * 1e3));
          return (0, e.jsxs)("div", {
            className: x.EventItemCtn,
            onClick: () => a(l.GID, l.clanSteamID.GetAccountID()),
            children: [
              (0, e.jsx)("div", {
                className: x.Title,
                children: l.GetNameWithFallback(d),
              }),
              (0, e.jsxs)("div", {
                className: x.SessionTime,
                children: [
                  !m && (0, e.jsx)("div", { children: (0, c.TW)(u, !0) }),
                  (0, e.jsx)("div", {
                    children:
                      n && m
                        ? (0, c.we)(
                            "#Conference_StartInMin",
                            Math.max(1, Math.floor((u - r) / 60)),
                          )
                        : (0, c.we)(
                            "#Conference_StartsAt",
                            (0, Yt.KC)(u, { bForce24HourClock: !1 }),
                          ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, f.A)(x.ReminderContainer, x.OnlyIcon),
                children: (0, e.jsx)(Ie.j, {
                  eventModel: l,
                  lang: d,
                  bOnlyShowIcon: !0,
                  bExpandLeft: !0,
                  bShowStartTime: !1,
                }),
              }),
            ],
          });
        }
        function Zt(o) {
          const { rgActiveEvents: t, fnDisplayModalEvent: n } = o;
          if (!t || t.length == 0) return null;
          const a = t[0],
            r = (0, I.sfN)(S.TS.LANGUAGE),
            l = $e.m.ParseEventModelPresenters(a, r);
          return (0, e.jsxs)("div", {
            className: x.ActiveEventCtn,
            children: [
              (0, e.jsxs)("div", {
                className: x.LiveNote,
                children: [
                  (0, e.jsx)("div", { className: x.LiveIcon }),
                  "Live Now!",
                ],
              }),
              (0, e.jsx)("div", {
                className: x.Title,
                children: a.GetNameWithFallback(r),
              }),
              !!l &&
                l.map((d) =>
                  (0, e.jsx)(
                    Ot.fI,
                    {
                      name: d.name,
                      title: d.title,
                      photo: d.photo,
                      company: d.company,
                      bioString: d.bio,
                      children: (0, e.jsx)("div", { children: d.name }),
                    },
                    "presenter_" + d.name,
                  ),
                ),
              (0, e.jsx)("div", {
                className: x.EventDescription,
                children: a.GetSummaryWithFallback(r),
              }),
              (0, e.jsx)("div", {
                className: x.ReadMoreBtn,
                onClick: () => n(a.GID, a.clanSteamID.GetAccountID()),
                children: (0, c.we)("#EventEmail_Button_ClickForMoreDetails"),
              }),
            ],
          });
        }
        function $t(o) {
          const { conferenceInfo: t } = o,
            n = (0, E.v0)(),
            a = (0, U.P_)(Ae),
            r = n.GetActiveEventsAt(a) || [],
            [l] = j.useState(new Ne.lu()),
            d = n
              .GetCalendarItemsInTimeRange(t.rtStartTime - 1, a)
              .rgCalendarItems.filter(
                (u) => r.length == 0 || r[0].GID != u.unique_id,
              )
              .sort((u, m) => u.start_time - m.start_time);
          return d.length == 0
            ? (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_NoPastEvents"),
              })
            : (0, e.jsxs)("div", {
                className: x.PastEventsCtn,
                children: [
                  (0, e.jsx)(De, {
                    displayLocation: Se.Tc.My,
                    fnChangeModalEvent: l,
                  }),
                  d.map((u) => {
                    const m = z.O3.GetClanEventModel(u.unique_id);
                    return (0, e.jsx)(
                      Dt,
                      {
                        eventModel: m,
                        calendarEvent: u,
                        bSuppressHoverEffects: !1,
                        mode: "wide",
                        fnOnClicked: () =>
                          l.Dispatch(m.GID, m.clanSteamID.GetAccountID()),
                      },
                      "row" + u.unique_id,
                    );
                  }),
                ],
              });
        }
        function qt(o) {
          return (0, e.jsx)(we, { ...o, children: (0, e.jsx)($t, { ...o }) });
        }
        function we(o) {
          const { conferenceInfo: t } = o,
            n = (0, Qt.m)("WithCalendarStore"),
            [a, r] = (0, j.useState)(!0);
          return (
            (0, j.useEffect)(() => {
              n.token.reason ||
                O.Get()
                  .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
                  .finally(() => {
                    n.token.reason || r(!1);
                  });
            }, [t.rtEndTime, t.strConferenceID, n]),
            a
              ? (0, e.jsx)(Wt.t, {})
              : (0, e.jsx)(e.Fragment, { children: o.children })
          );
        }
        function _t(o) {
          const { closeModal: t } = o;
          return (0, e.jsxs)(se.o0, {
            strTitle: (0, c.we)("#Conference_NeedHelp"),
            bAlertDialog: !0,
            onCancel: t,
            onOK: t,
            children: [
              (0, e.jsx)("div", {
                children: (0, c.we)("#Conference_NeedHelp_Desc1"),
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsxs)("div", {
                    className: x.HelpDialogDetailsCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#Conference_NeedHelp_BroadcastChatQ",
                        ),
                      }),
                      (0, e.jsxs)("ul", {
                        className: x.HelpRequirements,
                        children: [
                          (0, e.jsx)("li", {
                            children: (0, c.we)("#Conference_NeedHelp_ChatA1"),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, c.PP)(
                              "#Conference_NeedHelp_BroadcastChatA1",
                              (0, e.jsx)("a", {
                                href: "https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A",
                                children: (0, c.we)(
                                  "#Conferenec_NeedHelp_LimitedAccounts",
                                ),
                              }),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: x.HelpDialogDetailsCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)("#Conference_NeedHelp_QandAQ"),
                      }),
                      (0, e.jsx)("ul", {
                        children: (0, e.jsx)("li", {
                          children: (0, c.we)("#Conference_NeedHelp_ChatA1"),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: x.HelpDialogDetailsCtn,
                    children: [
                      (0, e.jsx)("span", {
                        children: (0, c.we)(
                          "#Conference_NeedHelp_StillHaveQuestions",
                        ),
                      }),
                      (0, e.jsx)("a", {
                        href: "https://help.steampowered.com/wizard/HelpWithPublishing?issueid=933",
                        children: (0, c.we)(
                          "#Conference_NeedHelp_CreateTicket",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var h = s(44104),
          en = s(6532),
          tn = s(73662);
        const Ge = 30;
        function nn(o) {
          const { conferenceInfo: t, bShowYouTube: n } = o,
            [a, r] = j.useState(!1),
            d =
              (0, U.P_)(ne.Kp.PerMinute) < t.rtStartTime - Ge * ne.Kp.PerMinute;
          return (0, e.jsxs)("div", {
            className: h.ConferenceHome,
            children: [
              (0, e.jsx)("div", {
                className: (0, f.A)(h.LeftCol, a ? "Active" : "Hidden"),
                children: (0, e.jsxs)("div", {
                  className: h.AgendaCtn,
                  children: [
                    (0, e.jsx)(zt, { conferenceInfo: t }),
                    (0, e.jsxs)("div", {
                      className: h.AgendaToggle,
                      onClick: () => {
                        r(!a);
                      },
                      children: [
                        (0, e.jsx)(F.he, {
                          toolTipContent: (0, c.we)("#QAndA_HideSchedule"),
                          children: (0, e.jsx)("div", {
                            className: h.CollapseBtn,
                            children: (0, e.jsx)(w.F2T, { angle: 0 }),
                          }),
                        }),
                        (0, e.jsx)(F.he, {
                          toolTipContent: (0, c.we)("#QAndA_ShowSchedule"),
                          children: (0, e.jsxs)("div", {
                            className: h.CalendarBtn,
                            children: [
                              (0, e.jsx)(w.VvS, {}),
                              (0, e.jsx)("div", {
                                className: h.CalendarText,
                                children: "See Event Schedule",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, e.jsxs)("div", {
                className: h.MainCol,
                children: [
                  n &&
                    (0, e.jsx)(en.A, {
                      videoID: t.youtubeVideoID,
                      classNameAlign: "",
                      classNameSize: tn.sizeFull,
                      bAutoPlay: !0,
                      bShowVideoImmediately: !0,
                    }),
                  d
                    ? (0, e.jsx)("div", {
                        className: h.InteractionCtn,
                        children: (0, e.jsx)("div", {
                          className: h.PreEventNote,
                          children: (0, c.we)("#Conference_ChatHidden", Ge),
                        }),
                      })
                    : (0, e.jsx)(an, { conferenceInfo: t }),
                ],
              }),
            ],
          });
        }
        function an(o) {
          const { conferenceInfo: t } = o,
            [n, a] = j.useState(window.innerWidth > 910),
            [r, l] = j.useState(!0),
            d =
              S.TS.COMMUNITY_BASE_URL +
              "broadcast/chatonly/" +
              t.broadcastSteamID.ConvertTo64BitString(),
            u =
              S.TS.COMMUNITY_BASE_URL +
              "questions/" +
              S.UF.VANITY_ID +
              "/view/" +
              t.globalQandASessionID;
          return (0, e.jsxs)("div", {
            className: h.InteractionCtn,
            children: [
              (0, e.jsxs)("div", {
                className: h.TabControlsCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, f.A)(
                      h.InnerChatTab,
                      h.ChatTab,
                      n ? h.Active : "",
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: h.TabTitle,
                        onClick: () => {
                          a(!0), l(!1);
                        },
                        children: (0, c.we)("#Conference_Tab_Chat"),
                      }),
                      (0, e.jsx)(F.he, {
                        toolTipContent: (0, c.we)("#QAndA_PopOutChat_ttip"),
                        children: (0, e.jsx)("a", {
                          className: h.Popout,
                          href: d,
                          target: "_blank",
                          children: (0, e.jsx)(w.YNO, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, f.A)(
                      h.InnerChatTab,
                      h.QATab,
                      r ? h.Active : "",
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: h.TabTitle,
                        onClick: () => {
                          a(!1), l(!0);
                        },
                        children: (0, c.we)("#Conference_Tab_QandA"),
                      }),
                      (0, e.jsx)(F.he, {
                        toolTipContent: (0, c.we)("#QAndA_PopOutQAndA_ttip"),
                        children: (0, e.jsx)("a", {
                          className: h.Popout,
                          href: u,
                          target: "_blank",
                          children: (0, e.jsx)(w.YNO, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(F.he, {
                    toolTipContent: (0, c.we)("#QAndA_ChatToggle_ShowBoth"),
                    children: (0, e.jsx)("div", {
                      className: h.ShowBothTabs,
                      onClick: () => {
                        a(!0), l(!0);
                      },
                      children: (0, e.jsx)(w.QQ4, {}),
                    }),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: h.ChatStack,
                children: [
                  !!((n && r) || (!r && !n)) &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("div", {
                          className: h.ChatColumn,
                          children: (0, e.jsx)(Ce, {
                            conferenceInfo: t,
                            className: h.ChatCtn,
                          }),
                        }),
                        (0, e.jsx)("div", {
                          className: h.QAColumn,
                          children: (0, e.jsx)(xe.u6, {
                            gidSession: t.globalQandASessionID,
                          }),
                        }),
                      ],
                    }),
                  !!(n && !r) &&
                    (0, e.jsx)(Ce, { conferenceInfo: t, className: h.ChatCtn }),
                  !!(!n && r) &&
                    (0, e.jsx)(xe.u6, { gidSession: t.globalQandASessionID }),
                ],
              }),
            ],
          });
        }
        function on(o) {
          const { conferenceInfo: t } = o;
          if (!t.faqAboutPage)
            return (0, e.jsx)("div", {
              children: (0, c.we)("#Conference_NoAbout"),
            });
          const { title: n, content: a, timestamp: r } = t.faqAboutPage;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { className: h.AboutTitle, children: n }),
              (0, e.jsx)(Ze.u, { text: a, bShowErrorInfo: !1, version: "0" }),
            ],
          });
        }
        function sn(o) {
          const { conferenceInfo: t } = o;
          return (0, e.jsx)(qt, { conferenceInfo: t });
        }
        var W = s(61937);
        function ln(o) {
          const { strVanity: t } = o,
            n = M.Get().GetConferenceInfo(t);
          return n
            ? (0, e.jsx)(L.tH, {
                children: (0, e.jsx)("div", {
                  className: W.ConferencePageCtn,
                  children: (0, e.jsx)(rn, { conferenceInfo: n }),
                }),
              })
            : (0, e.jsx)("div", { children: (0, c.we)("#Conference_Invalid") });
        }
        function rn(o) {
          const { conferenceInfo: t } = o,
            n = (l) =>
              window.sessionStorage.setItem(
                "conferenceCurrentTab",
                `?tab=${l.key}`,
              ),
            a = [],
            r = (0, U.f1)();
          return (
            r < t.rtEndTime &&
              a.push({
                name: (0, c.we)("#Conference_tab_Home"),
                key: "live",
                contents: (0, e.jsx)(L.tH, {
                  children: (0, e.jsx)(nn, {
                    bShowYouTube: !!t.youtubeVideoID,
                    conferenceInfo: t,
                  }),
                }),
                onClick: n,
              }),
            a.push({
              name: (0, c.we)("#Conference_tab_Past"),
              key: "past",
              contents: (0, e.jsxs)(L.tH, {
                children: [
                  (0, e.jsx)(sn, { conferenceInfo: t }),
                  !t.youtubeVideoID &&
                    r < t.rtEndTime &&
                    (0, e.jsx)(fe, { conferenceInfo: t }),
                ],
              }),
              onClick: n,
            }),
            a.push({
              name: (0, c.we)("#Conference_tab_Info"),
              key: "about",
              contents: (0, e.jsxs)(L.tH, {
                children: [
                  (0, e.jsx)(on, { conferenceInfo: t }),
                  !t.youtubeVideoID &&
                    r < t.rtEndTime &&
                    (0, e.jsx)(fe, { conferenceInfo: t }),
                ],
              }),
              onClick: n,
            }),
            a.push({
              name: "(VO/Internal) Debug",
              key: "debug",
              hidden: !0,
              contents: (0, e.jsx)(L.tH, {
                children: (0, e.jsx)(Xe, { conferenceInfo: t }),
              }),
              onClick: n,
            }),
            (0, e.jsxs)("div", {
              className: W.ConferenceContentsCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: W.ConferenceHeaderCtn,
                  children: [
                    (0, e.jsx)(ve.c, {
                      className: W.LogoImage,
                      rgSources: t.strLocalizedLogos,
                    }),
                    (0, e.jsx)(ve.c, {
                      className: W.LogoImageMobile,
                      rgSources: t.strLocalizedMobileLogos,
                    }),
                    (0, e.jsx)("div", {
                      className: W.ConferenceDateRange,
                      children: (0, e.jsx)(V.X0, {
                        rtStartDate: t.rtStartTime,
                        rtEndDate: t.rtEndTime,
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(Ve.V, { tabs: a }),
              ],
            })
          );
        }
        var cn = s(90783);
        const Pe = {
          LandingPage: (o) => `/(conference|steamworksvirtualconference)/${o}`,
        };
        function dn(o) {
          return (0, e.jsxs)(K.dO, {
            children: [
              (0, e.jsx)(K.qh, {
                path: Pe.LandingPage(":vanity_str"),
                render: (t) =>
                  (0, e.jsx)(ke.X, {
                    config: {
                      "conference-root": () => {
                        const { vanity_str: n } = t.match.params;
                        return (0, e.jsx)(ln, {
                          strVanity: n.toLocaleLowerCase(),
                        });
                      },
                    },
                  }),
              }),
              (0, e.jsx)(K.qh, { component: cn.a }),
            ],
          });
        }
        const un = dn;
      },
      88619: (A) => {
        A.exports = { BroadcastChatCtn: "_28b1vPJH7sip9Uh_p3OJvD" };
      },
      63585: (A) => {
        A.exports = {
          narrowWidth: "500px",
          UpcomingEventsCtn: "_2bWupCdqo2ydQKY6NnkUB6",
          SectionTitle: "_7MpRs3COqajm5Yq2cyHCk",
          EventSchedCtn: "Tn2UrQKNb5TtPYtu9eJOo",
          EventItemCtn: "z6qIMnRuBMfsKvkgAMr4X",
          Title: "_2EqgH8ow9heADdpLvDdJFn",
          SessionTime: "_IkarZfcdwDZIzHBUAup1",
          ActiveEventCtn: "_2lP0CenzIHyncnSquDOYX2",
          LiveNote: "_3zSJmWuHhBAbq80HWDxRZg",
          LiveIcon: "_38GJhGq-WQnIwnn8cr7h5p",
          EventDescription: "_3hKDoSYfjaFvieDQXVYs82",
          ReadMoreBtn: "_2z4bawzux4DqU5n4BaSssW",
          EventsScheduleCtn: "_33-478dIs2y89VpwjBKd5Q",
          ReminderContainer: "_2vLZTXCwfColAphn-AKL29",
          OnlyIcon: "_3fZISAQ1UOTiyviS_bMh3-",
          PastEventsCtn: "_3pfjFJ9WVi45La-eVD1EBw",
          HelpDialogDetailsCtn: "_1IQeQq6EP-VdV6AZAJ3Rug",
          HelpRequirements: "_3yMlxXljDQU9oAEzydEHBB",
        };
      },
      44104: (A) => {
        A.exports = {
          narrowWidth: "500px",
          ConferenceHome: "_3tSqDwD1rkt0nwIB8025VK",
          LeftCol: "_19xFd3vdYEozXiTDzOEto9",
          AgendaToggle: "_1rjE02_5_HPWGT3UJXQKL2",
          CollapseBtn: "_2RCNdz1kCYXgL3wheg5ts6",
          CalendarBtn: "_22bby_AsedipJlq0-5qtmY",
          CalendarText: "kxtN0yE4qv3o_wwBWnnLs",
          MainCol: "_1qlknQargwyqHQhwj_8oum",
          InteractionCtn: "_39uHL_Fe3PpolZLRdah_VU",
          BroadcastCtn: "_240cuck3u91loqxwvTCj-",
          videoContainerSizer: "twsjQDioroj0pL68fDPZh",
          Hidden: "aE3VL3T6yQRMd_AKTrhue",
          ChatColumn: "_2ldId97FtoJ0M0Sw45iEC6",
          ChatTitle: "_3CjWmRtkS-bipkNJfDvGal",
          QAColumn: "_1RCLwKL1eycfalZ4MrKxB9",
          PreEventNote: "__FhrYr6JkEOLBHADuZP0",
          TabControlsCtn: "_1HJDDlNR32Jt_Ia9XJhZKH",
          Close: "_3cKbt74603iNN2a2pFoDL",
          ShowBothTabs: "fZBE8Pcls5-xbHBmWaIzC",
          ChatTab: "_3WoUgyFb6zejRRjTzMR36x",
          QATab: "_1An5OJv3NQypTb4kDdjRYq",
          InnerChatTab: "_1g3oabV2KUxjOJOaAzfEUp",
          TabTitle: "_24i11is7XyYPV89pSY3xBt",
          Popout: "QHxXWore8H11Ach3U2g5V",
          Active: "_3PSCm3SaHjGjYbM2kBZwKt",
          ChatStack: "_1ogmvaT56600iCAZCN3hj3",
          AboutTitle: "_3yWGoYvgAyD6vP018TFBNb",
        };
      },
      61937: (A) => {
        A.exports = {
          narrowWidth: "500px",
          ConferencePageCtn: "oP_SPwwzov5nQN2TQUAEf",
          ConferenceContentsCtn: "_1HPPRdXNo8sgT-dXQ9h-5l",
          ConferenceHeaderCtn: "_1AbLqPiq2KJuEV09TbddQW",
          LogoImage: "_3i2i50OjRZCY5qTtlLvN7G",
          LogoImageMobile: "_3iVf9n6tpBlwoSdiOW3Jhf",
          ConferenceDateRange: "_2FSEt04eUDUO8y1rLtlEat",
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
      70758: (A) => {
        A.exports = {
          YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
          YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
        };
      },
    },
  ]);
})();
