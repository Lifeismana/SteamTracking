/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [14632],
    {
      48421: (V, z, m) => {
        m.d(z, { B9: () => B, RR: () => Q, hE: () => U });
        var b = m(90626),
          T = m(72604),
          g = m(77495),
          R = m(47689),
          w = m(76559),
          A = m(3166),
          P = m(67529),
          M = m(18210),
          W = m(41735),
          k = m.n(W),
          O = m(34592);
        function l(u) {
          return useObserver(() => [u.m_nBuildID, u.m_strBuildBranch]);
        }
        function s(u, _ = 0, y) {
          const [C, L] = useState(
              g_PartnerEventStore.GetClanEventFromAnnouncementGID(u),
            ),
            j = useCancelTokenSource("usePartnerEventByAnnouncementGID");
          return (
            useEffect(() => {
              if (C?.AnnouncementGID != u) {
                g_PartnerEventStore.Init();
                const D = new CSteamID(CommunityConfig.CLANSTEAMID);
                g_PartnerEventStore
                  .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(D, u, _, y)
                  .then((S) => {
                    S && !j.token.reason && L(S);
                  });
              }
            }, [u, _, y, C, j]),
            C
          );
        }
        function Q(u) {
          const [_, y] = (0, b.useState)(() => g.O3.GetClanEventModel(u)),
            C = (0, R.m)("usePartnerEventByEventGID");
          return (
            (0, b.useEffect)(() => {
              u &&
                _?.GID != u &&
                (g.O3.Init(),
                g.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  [u],
                  [],
                  C,
                ).then((L) => {
                  L?.length == 1 && L[0].GID == u && !C.token.reason && y(L[0]);
                }));
            }, [u, _, C]),
            _
          );
        }
        function r(u) {
          const _ = useCancelTokenSource("usePreloadPartnerEventsByEventGID"),
            y = useQuery({
              queryKey: ["PreloadPartnerEventsByEventGID"],
              queryFn: () => (
                g_PartnerEventStore.Init(),
                g_PartnerEventStore.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  u,
                  [],
                  _,
                )
              ),
            });
          return { bIsLoading: y.isLoading, events: y.data };
        }
        function B(u, _, y) {
          const [C, L] = (0, b.useState)(
              _ ? g.O3.GetClanEventModel(_) : void 0,
            ),
            [j, D] = (0, b.useState)(!!u && !!_),
            [S, x] = (0, b.useState)(),
            [F, $] = (0, b.useState)(T.R),
            G = (0, R.m)("usePartnerEventByClanAccountAndEventGID");
          return (
            (0, b.useEffect)(() => {
              (async () => {
                try {
                  if (C?.GID != _ && _ && u) {
                    g.O3.Init();
                    const e = w.b.InitFromClanID(u);
                    let n;
                    try {
                      n =
                        await g.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                          e,
                          _,
                          0,
                          y,
                        );
                    } catch (a) {
                      x(a?.response?.data?.err_msg),
                        $(a?.response?.data?.success || T.zi);
                    }
                    G.token.reason || L(n);
                  }
                } finally {
                  D(!1);
                }
              })();
            }, [u, _, C, y, G]),
            { eventModel: C, bLoading: j, sErrorMessage: S, eResult: F }
          );
        }
        function N(u, _ = []) {
          const [y, C] = useState(void 0),
            L = useCancelTokenSource("useLatestPatchNoteForApp");
          return (
            useEffect(() => {
              u &&
                (!y || y?.appid != u) &&
                (g_PartnerEventStore.Init(),
                g_PartnerEventStore
                  .LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    u,
                    0,
                    1,
                    { require_tags: ["patchnotes", ..._] },
                    L,
                  )
                  .then((j) => {
                    j?.length && !L.token.reason && C(j[0]);
                  }));
            }, [u, L, _, y]),
            y
          );
        }
        function K(u, _ = []) {
          const y = useCancelTokenSource("useLatestPatchNoteForSource"),
            C = typeof u == "number" ? u : k_nAppIdInvalid,
            L = typeof u == "object" ? u : void 0,
            j = useCallback(async () => {
              if (!_?.length) return null;
              g_PartnerEventStore.Init();
              const S = await g_PartnerEventStore.LoadAdjacentPartnerEvents(
                void 0,
                L,
                C,
                0,
                1,
                { require_tags: ["patchnotes", ..._] },
                y,
              );
              return S?.length ? S[0] : null;
            }, [C, y, L, _]),
            D = ["LatestPatchNote2", C, L, _, y];
          return useQuery({ queryKey: D, queryFn: j });
        }
        function U(u) {
          let _ = "" + u;
          const y = M.A0.GetELanguageFallback(u);
          return u != y && (_ += "_" + y), _;
        }
        async function Y(u, _, y, C) {
          const L = new Array(),
            j = {
              clan_accountid: u ? u.GetAccountID() : void 0,
              gidevent: _,
              count_before: 0,
              count_after: y,
              lang_list: U(PchLanguageToELanguage(Config.LANGUAGE)),
              origin: self.origin,
              only_summaries: !0,
            },
            D = Config.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/",
            S = await axios.get(D, { params: j, cancelToken: C?.token });
          if (S?.data?.success == k_EResultOK) {
            const x = _ == null ? S.data.events : S.data.events.slice(1);
            for (let F of x)
              !F.gid || !((F.jsondata?.length ?? 0) > 0) || L.push(F);
          } else {
            const x = GetMsgAndErrorCodeFromResponse(S?.data);
            throw (
              (console.error(
                "LoadAdjacentPartnerEvents Success but empty response: clanAccount:" +
                  (u ? u.GetAccountID() : 0) +
                  " " +
                  x.strErrorMsg,
                x,
              ),
              S?.data)
            );
          }
          return L;
        }
        function J(u, _, y) {
          const {
            data: C,
            error: L,
            fetchNextPage: j,
            hasNextPage: D,
            isFetching: S,
            isFetchingNextPage: x,
            status: F,
            refetch: $,
          } = useInfiniteQuery({
            queryKey: ["ClanEventSummaries", u, _],
            queryFn: ({ pageParam: G }) => Y(u, G, _, y),
            initialPageParam: void 0,
            getNextPageParam: (G) =>
              G.length > 0 ? G[G.length - 1].gid : void 0,
          });
          return {
            rgClanEventData: C,
            bHasNextPage: D,
            fnFetchNextPage: j,
            bIsFetching: S,
            bIsFetchingNextPage: x,
            clanEventSummaryStatus: F,
            clanEventSummaryLoadError: L,
            fnRefetch: $,
          };
        }
      },
      38884: (V, z, m) => {
        m.d(z, { E0: () => W, oE: () => k });
        var b = m(71742),
          T = m(3166),
          g = m(76559),
          R = m(73259),
          w = m(34592),
          A = m(99412),
          P = m(41635);
        function M(O) {
          return (
            (O.gid == null || O.gid == null || O.gid == "0") &&
            !!O.announcement_body &&
            O.announcement_body.gid != "0"
          );
        }
        function W(O) {
          return M(O) ? R.cB + O.announcement_body?.gid : O.gid;
        }
        function k(O, l) {
          let s = new R.lh();
          if (
            ((s.clanSteamID = O),
            (0, b.wT)(
              s.clanSteamID && s.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                s.clanSteamID.ConvertTo64BitString() +
                " " +
                T.TS.EUNIVERSE,
            ),
            (s.GID = W(l)),
            (s.bOldAnnouncement = M(l)),
            (s.appid = l.appid ?? 0),
            (s.createTime = l.rtime_created),
            (s.startTime = l.rtime32_start_time),
            (s.endTime = l.rtime32_end_time),
            (s.visibilityStartTime = l.rtime32_visibility_start),
            (s.visibilityEndTime = l.rtime32_visibility_end),
            (s.loadedAllLanguages = !1),
            (s.type = l.event_type ?? A.DRF),
            (s.nVotesUp = l.votes_up ?? 0),
            (s.nVotesDown = l.votes_down ?? 0),
            (s.comment_type = l.comment_type),
            (s.gidfeature = l.gidfeature),
            (s.gidfeature2 = l.gidfeature2),
            (s.featured_app_tagid = l.featured_app_tagid),
            (s.vecTags = new Array()),
            (s.creator_steamid = l.creator_steamid),
            (s.last_update_steamid = l.last_update_steamid),
            (s.rtime32_last_modified = l.rtime32_last_modified),
            (s.rtime32_moderator_reviewed = l.rtime_mod_reviewed),
            (s.video_preview_type = l.video_preview_type),
            (s.video_preview_id = l.video_preview_id),
            (s.has_live_stream = l.has_live_stream),
            (s.live_stream_viewer_count = l.live_stream_viewer_count),
            (s.m_nBuildID = l.build_id),
            (s.m_strBuildBranch = l.build_branch),
            l.announcement_body)
          ) {
            let r = l.announcement_body;
            (s.AnnouncementGID = r.gid),
              s.name.set(r.language, r.headline),
              s.description.set(r.language, r.body),
              s.timestamp_loc_updated.clear(),
              (s.forumTopicGID = r.forum_topic_id),
              (s.nCommentCount = r.commentcount),
              (s.postTime = r.posttime),
              s.bOldAnnouncement && !r.hidden && (s.startTime = r.posttime),
              (s.announcementClanSteamID = new g.b(r.clanid)),
              r.tags &&
                r.tags.length > 0 &&
                r.tags.forEach((B) => s.vecTags.push(B)),
              !s.rtime32_last_solr_search_col_updated &&
                s.rtime32_last_modified &&
                ((s.rtime32_last_solr_search_col_updated =
                  s.rtime32_last_modified),
                (s.rtime32_last_modified = r.updatetime));
          } else
            (s.AnnouncementGID = "0"),
              (s.forumTopicGID = l.forum_topic_id),
              s.name.clear(),
              s.description.clear(),
              s.timestamp_loc_updated.clear(),
              (s.postTime = l.rtime32_start_time),
              (s.nCommentCount = l.comment_count ?? 0),
              s.name.set(A.Bhc, l.event_name ?? ""),
              s.description.set(A.Bhc, l.event_notes ?? "");
          l.broadcaster_accountid &&
            (s.broadcaster = new g.b(l.broadcaster_accountid));
          const Q = R.DJ;
          try {
            s.jsondata = {
              ...Q,
              ...(l.jsondata ? JSON.parse(l.jsondata) : void 0),
            };
          } catch (r) {
            const B = (0, w.H)(r);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  B.strErrorMsg,
                B,
              ),
              r)
            );
          }
          if (
            ((s.jsondata.localized_capsule_image = (0, P.$Y)(
              s.jsondata.localized_capsule_image || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_title_image = (0, P.$Y)(
              s.jsondata.localized_title_image || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_subtitle = (0, P.$Y)(
              s.jsondata.localized_subtitle || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_summary = (0, P.$Y)(
              s.jsondata.localized_summary || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_broadcast_title = (0, P.$Y)(
              s.jsondata.localized_broadcast_title || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_broadcast_left_image = (0, P.$Y)(
              s.jsondata.localized_broadcast_left_image || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_broadcast_right_image = (0, P.$Y)(
              s.jsondata.localized_broadcast_right_image || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_sale_header = (0, P.$Y)(
              s.jsondata.localized_sale_header || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_sale_overlay = (0, P.$Y)(
              s.jsondata.localized_sale_overlay || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_sale_product_banner = (0, P.$Y)(
              s.jsondata.localized_sale_product_banner || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_sale_product_mobile_banner = (0, P.$Y)(
              s.jsondata.localized_sale_product_mobile_banner || [],
              A.bP9,
              null,
            )),
            (s.jsondata.localized_sale_logo = (0, P.$Y)(
              s.jsondata.localized_sale_logo || [],
              A.bP9,
              null,
            )),
            s.jsondata.sale_num_headers !== void 0 &&
              s.jsondata.localized_per_day_sales_header)
          )
            for (let r = 0; r < s.jsondata.sale_num_headers; ++r)
              s.jsondata.localized_per_day_sales_header[r] = (0, P.$Y)(
                s.jsondata.localized_per_day_sales_header[r],
                A.bP9,
                null,
              );
          return (
            s.jsondata.sale_sections &&
              s.jsondata.sale_sections.forEach((r, B) => {
                r.localized_label &&
                  (r.localized_label = (0, P.$Y)(
                    r.localized_label,
                    A.bP9,
                    null,
                  )),
                  r.section_type === "trailercarousel" &&
                    (r.show_as_carousel = !1),
                  (s.jsondata.sale_sections[B] = { ...R.G6, ...r });
              }),
            s.jsondata.email_setting &&
              s.jsondata.email_setting.sections &&
              s.jsondata.email_setting.sections.forEach((r) => {
                r.localized_headline !== void 0 &&
                  r.localized_headline !== null &&
                  (r.localized_headline = (0, P.$Y)(
                    r.localized_headline,
                    A.bP9,
                    null,
                  )),
                  r.localized_body !== void 0 &&
                    r.localized_body !== null &&
                    (r.localized_body = (0, P.$Y)(
                      r.localized_body,
                      A.bP9,
                      null,
                    )),
                  r.localized_image !== void 0 &&
                    r.localized_image !== null &&
                    (r.localized_image = (0, P.$Y)(
                      r.localized_image,
                      A.bP9,
                      null,
                    ));
              }),
            s.jsondata.localized_title_image.forEach((r, B) => {
              if (r != null && r.substr(0, 4) == "http") {
                let N = r.lastIndexOf("/"),
                  K = r.substr(N + 1);
                s.jsondata.localized_title_image[B] = K;
              }
            }),
            (s.bLoaded = !0),
            l.published
              ? l.unlisted
                ? (s.visibility_state = R.zv.k_EEventStateUnlisted)
                : l.hidden
                  ? (s.visibility_state = R.zv.k_EEventStateStaged)
                  : (s.visibility_state = R.zv.k_EEventStateVisible)
              : (s.visibility_state = R.zv.k_EEventStateUnpublished),
            s
          );
        }
      },
      77495: (V, z, m) => {
        m.d(z, { MX: () => x, O3: () => S, ZQ: () => D, dB: () => F });
        var b = m(41735),
          T = m.n(b),
          g = m(14947),
          R = m(31561),
          w = m(99412),
          A = m(72604),
          P = m(73259),
          M = m(76559),
          W = m(49984),
          k = m(41635),
          O = m(71742),
          l = m(34592),
          s = m(8323),
          Q = m(48473),
          r = m(3166),
          B = m(90626),
          N = m(30096),
          K = m(48421),
          U = m(38884),
          Y = m(77291),
          J = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          _ = (G, t, e, n) => {
            for (
              var a = n > 1 ? void 0 : n ? u(t, e) : t, i = G.length - 1, d;
              i >= 0;
              i--
            )
              (d = G[i]) && (a = (n ? d(t, e, a) : d(a)) || a);
            return n && a && J(t, e, a), a;
          };
        const y = null;
        class C {
          appid;
          date;
          can_play;
          playtime;
          announcementid;
          constructor(t) {
            (0, O.wT)(
              typeof t.appid == "number",
              "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
            ),
              (this.appid = t.appid),
              (this.date = t.date),
              (this.can_play = t.can_play),
              (this.playtime = t.playtime),
              (this.announcementid = t.announcementid);
          }
        }
        const L = null,
          j = null;
        class D {
          constructor(t = !1) {
            (0, g.Gn)(this), (this.m_bOnlySummary = t);
          }
          m_bOnlySummary = !1;
          m_mapExistingEvents = new Map();
          m_mapEventUpdateCallback = new Map();
          m_mapAnnouncementBodyToEvent = new Map();
          m_mapClanToGIDs = new Map();
          m_mapAppIDToGIDs = new Map();
          m_mapAdjacentAnnouncementGIDs = new Map();
          m_mapUpdatedApps = new Map();
          m_tsUpdatedAppsQueryTime = 0;
          m_rgQueuedEventsClanIDs = new Array();
          m_rgQueuedEventsUniqueIDs = new Array();
          m_rgQueuedEventsForEditFlags = new Array();
          m_QueuedEventTimeout = new s.LU();
          m_PendingInfoPromise;
          m_PendingInfoResolve;
          m_bLoadedFromConfig = !1;
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let t = (0, W.v)("PartnerEventStore");
              this.ValidateStoreDefault(t) &&
                t.forEach((a) => {
                  if (a) {
                    let i = new M.b(a.clan_steamid);
                    const d = this.InsertEventModelFromClanEventData(i, a);
                    a.announcement_body &&
                      this.m_mapExistingEvents.set(
                        P.cB + a.announcement_body.gid,
                        d,
                      );
                  }
                });
              let e = (0, r.Fd)("partnereventstore", "application_config");
              this.ValidateStoreDefault(e) &&
                e.forEach((a) => {
                  if (a) {
                    let i = new M.b(a.clan_steamid);
                    const d = this.InsertEventModelFromClanEventData(i, a);
                    a.announcement_body &&
                      !this.m_mapExistingEvents.has(
                        P.cB + a.announcement_body.gid,
                      ) &&
                      this.m_mapExistingEvents.set(
                        P.cB + a.announcement_body.gid,
                        d,
                      );
                  }
                });
              let n = (0, r.Fd)("partnereventadjacents", "application_config");
              this.ValidateAdjacentEvent(n) &&
                n.forEach((a) => {
                  a &&
                    this.m_mapAdjacentAnnouncementGIDs.set(
                      a.announcementGID,
                      a.adjacents,
                    );
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          ValidateStoreDefault(t) {
            const e = t;
            return e &&
              Array.isArray(e) &&
              e.length > 0 &&
              e[0] &&
              typeof e[0] == "object"
              ? typeof e[0].gid == "string" ||
                  (typeof e[0].announcement_body == "object" &&
                    typeof e[0].announcement_body.gid == "string")
              : !1;
          }
          ValidateAdjacentEvent(t) {
            const e = t;
            return e &&
              Array.isArray(e) &&
              e.length > 0 &&
              typeof e[0] == "object"
              ? typeof e[0].announcementGID == "string" &&
                  Array.isArray(e[0].adjacents) &&
                  (e[0].adjacents.length == 0 ||
                    typeof e[0].adjacents[0] == "string")
              : !1;
          }
          GetPartnerEventChangeCallback(t) {
            let e = this.m_mapEventUpdateCallback.get(t);
            return (
              e ||
                (this.m_mapEventUpdateCallback.set(t, new s.lu()),
                (e = this.m_mapEventUpdateCallback.get(t))),
              e
            );
          }
          GetClanEventGIDs(t) {
            let e = this.m_mapClanToGIDs.get(t.GetAccountID());
            return e || [];
          }
          GetClanEventGIDsForApp(t) {
            let e = this.m_mapAppIDToGIDs.get(t);
            return e || [];
          }
          GetClanEventModel(t) {
            return this.m_mapExistingEvents.get(t);
          }
          BHasClanEventModel(t) {
            return this.m_mapExistingEvents.has(t);
          }
          BHasClanAnnouncementGID(t) {
            if (this.m_mapAnnouncementBodyToEvent.has(t)) {
              const e = this.m_mapAnnouncementBodyToEvent.get(t);
              return !!e && this.BHasClanEventModel(e);
            }
            return !1;
          }
          GetClanEventGIDFromAnnouncementGID(t) {
            return this.m_mapAnnouncementBodyToEvent.get(t);
          }
          GetClanEventFromAnnouncementGID(t) {
            const e = this.m_mapAnnouncementBodyToEvent.get(t);
            return e ? this.m_mapExistingEvents.get(e) : void 0;
          }
          DefaultEventSortFunction(t, e) {
            return t.startTime == e.startTime
              ? (0, Q.kd)(t.GID ?? "", e.GID ?? "")
              : (e.startTime ?? 0) - (t.startTime ?? 0);
          }
          RegisterClanEvents(t) {
            if (t)
              for (const e of t) {
                const n = (0, U.E0)(e);
                if (!this.m_mapExistingEvents.has(n)) {
                  const a = new M.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(a, e);
                }
              }
          }
          GetRankedClanEvents(t, e) {
            let n = [],
              a = t
                ? this.GetClanEventGIDs(t)
                : e
                  ? this.GetClanEventGIDsForApp(e)
                  : void 0;
            if (!a || a.length == 0) return n;
            for (let i of a) {
              let d = this.GetClanEventModel(i);
              d && n.push(d);
            }
            return n.sort(this.DefaultEventSortFunction), n;
          }
          InsertEventModelFromClanEventData(t, e) {
            const n = (0, U.oE)(t, e);
            return (
              this.InsertUniqueEventGID(t.GetAccountID(), n.appid, n.GID),
              this.m_mapExistingEvents.set(n.GID, n),
              n.AnnouncementGID &&
                n.AnnouncementGID.length > 1 &&
                this.m_mapAnnouncementBodyToEvent.set(n.AnnouncementGID, n.GID),
              n
            );
          }
          HelperInitializeNumSalesHeaderArray(t) {
            if ((t.jsondata.sale_num_headers ?? 0) > 1) {
              t.jsondata.localized_per_day_sales_header = [];
              for (let e = 0; e < (t.jsondata.sale_num_headers ?? 0); ++e)
                t.jsondata.localized_per_day_sales_header.push(
                  (0, k.$Y)([], w.bP9, null),
                );
              t.m_overrideCurrentDay = 0;
            } else t.m_overrideCurrentDay = void 0;
          }
          GetAllClanEvents(t) {
            let e = new Array();
            return (
              this.m_mapClanToGIDs.has(t.GetAccountID()) &&
                this.m_mapClanToGIDs.get(t.GetAccountID()).forEach((n) => {
                  let a = this.m_mapExistingEvents.get(n);
                  a && e.push(a);
                }),
              e
            );
          }
          async QueueLoadPartnerEvent(t, e, n) {
            if (this.m_mapExistingEvents.has(e)) return;
            this.m_rgQueuedEventsClanIDs.push(t),
              this.m_rgQueuedEventsUniqueIDs.push(e),
              this.m_rgQueuedEventsForEditFlags.push(!!n),
              this.m_PendingInfoPromise ||
                (this.m_PendingInfoPromise = new Promise(
                  (o) => (this.m_PendingInfoResolve = o),
                ));
            const a = this.m_PendingInfoPromise,
              i = () => {
                const o = this.m_PendingInfoResolve,
                  c = this.m_rgQueuedEventsClanIDs,
                  h = this.m_rgQueuedEventsUniqueIDs,
                  p = this.m_rgQueuedEventsForEditFlags;
                (this.m_PendingInfoPromise = void 0),
                  (this.m_rgQueuedEventsClanIDs = new Array()),
                  (this.m_rgQueuedEventsUniqueIDs = new Array()),
                  (this.m_rgQueuedEventsForEditFlags = new Array()),
                  this.InternalLoadPartnerEventList(c, h, p).then(() => o?.());
              };
            return (
              this.m_rgQueuedEventsClanIDs.length >= 30
                ? (this.m_QueuedEventTimeout.Cancel(), i())
                : this.m_QueuedEventTimeout.IsScheduled() ||
                  this.m_QueuedEventTimeout.Schedule(50, i),
              a
            );
          }
          async InternalLoadPartnerEventList(t, e, n) {
            let a = n.some((c) => c);
            const i =
                r.TS.STORE_BASE_URL +
                (a
                  ? "events/ajaxgeteventdetailsforedit/"
                  : "events/ajaxgeteventdetails/"),
              d = (0, K.hE)((0, w.sfN)(r.TS.LANGUAGE)),
              o = {
                clanid_list: t.join(","),
                uniqueid_list: e.join(","),
                lang_list: d,
                origin: self.origin,
              };
            try {
              const c = await T().get(i, { params: o, withCredentials: a });
              this.RegisterClanEvents(c.data.events);
            } catch (c) {
              let h = (0, l.H)(c);
              console.error("GetEventDetails hit error " + h.strErrorMsg, h);
            }
          }
          async LoadAdjacentPartnerEvents(t, e, n, a, i, d, o) {
            return this.InternalLoadAdjacentPartnerEvents(
              t,
              void 0,
              e,
              n,
              a,
              i,
              d,
              o,
            );
          }
          async LoadAdjacentPartnerEventsByAnnouncement(t, e, n, a, i, d, o) {
            return this.InternalLoadAdjacentPartnerEvents(
              void 0,
              t,
              e,
              n,
              a,
              i,
              d,
              o,
            );
          }
          async LoadAdjacentPartnerEventsByEvent(t, e, n, a, i, d, o) {
            const c = e || t.clanSteamID;
            return t.bOldAnnouncement
              ? this.InternalLoadAdjacentPartnerEvents(
                  void 0,
                  t.AnnouncementGID,
                  c,
                  n,
                  a,
                  i,
                  d,
                  o,
                )
              : this.InternalLoadAdjacentPartnerEvents(
                  t.GID,
                  t.AnnouncementGID,
                  c,
                  n,
                  a,
                  i,
                  d,
                  o,
                );
          }
          async InternalLoadAdjacentPartnerEvents(t, e, n, a, i, d, o, c) {
            let h = new Array();
            if (!e || !this.m_mapAdjacentAnnouncementGIDs.has(e)) {
              let p =
                r.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
              const E = (0, K.hE)((0, w.sfN)(r.TS.LANGUAGE));
              o?.only_summaries &&
                !this.m_bOnlySummary &&
                ((0, O.wT)(
                  this.m_bOnlySummary,
                  "Only Summary: Incorrect parameter passed in, unsetting",
                ),
                (o.only_summaries = void 0));
              let v = {
                clan_accountid: n ? n.GetAccountID() : void 0,
                appid: a,
                count_before: i,
                count_after: d,
                gidevent: t,
                gidannouncement: e,
                lang_list: E,
                rtime_oldestevent: o ? o.rtime_oldestevent : void 0,
                require_tags:
                  o && o.require_tags ? o.require_tags.join(",") : void 0,
                exclude_tags:
                  o && o.exclude_tags ? o.exclude_tags.join(",") : void 0,
                require_no_tags: o ? o.require_no_tags : void 0,
                event_type_filter:
                  o && o.event_type_filter
                    ? o.event_type_filter.join(",")
                    : void 0,
                exclude_event_types:
                  o && o.exclude_event_types
                    ? o.exclude_event_types.join(",")
                    : void 0,
                only_summaries: o && !!o.only_summaries,
                origin: self.origin,
              };
              try {
                let f = await T().get(p, { params: v, cancelToken: c?.token });
                if (f?.data?.success == A.R)
                  (0, g.h5)(() => {
                    for (let I of f.data.events) {
                      let H = (0, U.E0)(I);
                      if (!this.m_mapExistingEvents.has(H)) {
                        let X = new M.b(I.clan_steamid);
                        this.InsertEventModelFromClanEventData(n || X, I);
                      }
                      h.push(this.m_mapExistingEvents.get(H));
                    }
                    if (h.length == 0) {
                      if (t && this.BHasClanEventModel(t))
                        this.m_mapExistingEvents.get(t) &&
                          h.push(this.m_mapExistingEvents.get(t));
                      else if (e && this.BHasClanAnnouncementGID(e)) {
                        const I = this.GetClanEventFromAnnouncementGID(e);
                        I && h.push(I);
                      }
                    }
                  });
                else {
                  let I = (0, l.H)(f?.data);
                  console.error(
                    "LoadAdjacentPartnerEvents Success but empty response:" +
                      a +
                      " clanAccount:" +
                      (n ? n.GetAccountID() : 0) +
                      " " +
                      I.strErrorMsg,
                    I,
                  );
                }
              } catch (f) {
                let I = (0, l.H)(f);
                I.errorCode != A.e9 &&
                  console.error(
                    "LoadAdjacentPartnerEvents hit error on appid:" +
                      a +
                      " clanAccount:" +
                      (n ? n.GetAccountID() : 0) +
                      " " +
                      I.strErrorMsg,
                    I,
                  );
              }
            } else {
              let p = this.m_mapAdjacentAnnouncementGIDs.get(e),
                E = new Array();
              p?.forEach((v) => {
                if (this.m_mapAnnouncementBodyToEvent.has(v)) {
                  let f = this.m_mapAnnouncementBodyToEvent.get(v);
                  f &&
                    this.m_mapExistingEvents.get(f) &&
                    h.push(this.m_mapExistingEvents.get(f));
                } else E.push(v);
              }),
                E.length > 0 &&
                  (
                    await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                      void 0,
                      E,
                      c,
                    )
                  ).forEach((f) => h.push(f));
            }
            return h;
          }
          async LoadPartnerEventsPageable(t, e, n = 0, a = 0, i) {
            let d = new Array(),
              o = r.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
              c = {
                clan_accountid: t ? t.GetAccountID() : void 0,
                appid: e,
                offset: n,
                count: a,
                l: r.TS.LANGUAGE,
                origin: self.origin,
                exclude_tags: i && i.length > 0 ? i?.join(",") : void 0,
              };
            try {
              let h = await T().get(o, { params: c });
              (0, g.h5)(() => {
                for (let p of h.data.events) {
                  let E = (0, U.E0)(p);
                  if (!this.m_mapExistingEvents.has(E)) {
                    let v = new M.b(p.clan_steamid);
                    this.InsertEventModelFromClanEventData(v, p);
                  }
                  d.push(this.m_mapExistingEvents.get(E));
                }
              });
            } catch (h) {
              console.error(
                "LoadClanEventInDateRange hit error " + (0, l.H)(h).strErrorMsg,
              );
            }
            return d;
          }
          async GetBestEventsForCurrentUser(t, e, n) {
            let a = new Array(),
              i = {
                l: r.TS.LANGUAGE,
                include_steam_blog: !0,
                filter_to_played_within_days: t,
                include_only_game_updates: e,
              },
              d = r.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
              o = await T().get(d, {
                params: i,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
            if (!o.data?.events) {
              let c = o.data?.err_msg || "";
              throw new Error(
                `GetBestEventsForCurrentUser request failed (${c})`,
              );
            }
            return (
              (0, g.h5)(() => {
                for (let c of o.data.events) {
                  let h = (0, U.E0)(c);
                  if (!this.m_mapExistingEvents.has(h)) {
                    let E = new M.b(c.clan_steamid);
                    this.InsertEventModelFromClanEventData(E, c);
                  }
                  let p = {
                    nAppPriority: c.nAppPriority,
                    bPossibleTakeOver: c.bPossibleTakeOver,
                    event: this.m_mapExistingEvents.get(h),
                  };
                  a.push(p);
                }
              }),
              a
            );
          }
          async LoadImportantEventsAroundToday(t, e, n, a, i, d) {
            let o = new Array(),
              c = new Array();
            c.push({ priority: 0, appids: e }),
              n && c.push({ priority: 1, appids: n }),
              a && c.push({ priority: 2, appids: a });
            let h = {
                count: t,
                strAppIDPriority: JSON.stringify({ prioritized_apps: c }),
                filterToEventTypes: d ? d.toString() : "",
                l: r.TS.LANGUAGE,
              },
              p = r.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
              E = await T().get(p, {
                params: h,
                withCredentials: !0,
                cancelToken: i.token,
              });
            return (
              (0, g.h5)(() => {
                for (let v of E.data.events) {
                  let f = (0, U.E0)(v);
                  if (!this.m_mapExistingEvents.has(f)) {
                    let I = new M.b(v.clan_steamid);
                    this.InsertEventModelFromClanEventData(I, v);
                  }
                  o.push(this.m_mapExistingEvents.get(f));
                }
              }),
              o
            );
          }
          InsertUniqueEventGID(t, e, n) {
            let a = this.m_mapClanToGIDs.get(t);
            a ||
              (this.m_mapClanToGIDs.set(t, new Array()),
              (a = this.m_mapClanToGIDs.get(t)));
            let i = this.m_mapAppIDToGIDs.get(e);
            i ||
              (this.m_mapAppIDToGIDs.set(e, new Array()),
              (i = this.m_mapAppIDToGIDs.get(e))),
              a.indexOf(n) == -1 && (a.push(n), i.push(n));
          }
          ResetModel() {}
          async DeleteClanEvent(t, e) {
            this.m_mapExistingEvents.has(e) &&
              (this.m_mapExistingEvents.get(e).deleteInProgress = !0);
            let n = new URLSearchParams();
            n.append("sessionid", (0, r.KC)()),
              n.append("bDelete", "1"),
              n.append("gid", e);
            const a = await T().post(
              r.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                t.ConvertTo64BitString() +
                "/ajaxcreateupdatedeletepartnerevents/",
              n,
            );
            return this.RemoveGIDFromList(t, e), a.data;
          }
          RemoveGIDFromList(t, e) {
            if (
              (this.m_mapExistingEvents.delete(e),
              this.m_mapClanToGIDs.has(t.GetAccountID()))
            ) {
              let n = this.m_mapClanToGIDs.get(t.GetAccountID()),
                a = n.indexOf(e);
              a >= 0 && n.splice(a, 1);
            }
          }
          FlushEventFromCache(t, e) {
            if (
              (t &&
                this.m_mapExistingEvents.has(t) &&
                (e || (e = this.m_mapExistingEvents.get(t).AnnouncementGID),
                this.m_mapExistingEvents.delete(t)),
              e &&
                (this.m_mapExistingEvents.has(P.cB + e) &&
                  this.m_mapExistingEvents.delete(P.cB + e),
                this.m_mapAnnouncementBodyToEvent.has(e)))
            ) {
              const n = this.m_mapAnnouncementBodyToEvent.get(e);
              n &&
                this.m_mapExistingEvents.has(n) &&
                this.m_mapExistingEvents.delete(n),
                this.m_mapAnnouncementBodyToEvent.delete(e);
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            t,
            e,
            n,
            a,
            i,
            d = !1,
          ) {
            let o = (0, K.hE)(d ? w.Bhc : (0, w.sfN)(r.TS.LANGUAGE)),
              c = {
                appid: e,
                clan_accountid: t ? t.GetAccountID() : void 0,
                announcement_gid: a,
                event_gid: n,
                lang_list: o,
                last_modified_time: i || 0,
                origin: self.origin,
                for_edit: d,
                only_summary: this.m_bOnlySummary,
              },
              h = null,
              p = null;
            if (d) {
              const E = (0, r.yK)();
              E === "community"
                ? ((p = r.TS.COMMUNITY_BASE_URL),
                  (p += t ? "gid/" + t.ConvertTo64BitString() : "ogg/" + e),
                  (p += "/"))
                : E === "partner"
                  ? (p = r.TS.PARTNER_BASE_URL + "sales/")
                  : (p = r.TS.STORE_BASE_URL + "events/"),
                (p += "ajaxgetpartnereventforedit"),
                (h = { params: c, withCredentials: !0 });
            } else
              (p = r.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
                (h = { params: c, withCredentials: !1 });
            try {
              let E = await T().get(p, h);
              if (E.data.success !== A.R) return;
              let v = E.data.event,
                f = (0, U.E0)(v);
              if (
                !this.m_mapExistingEvents.has(f) ||
                (this.m_mapExistingEvents.get(f).rtime32_last_modified ?? 0) <
                  (v.rtime32_last_modified ?? 0) ||
                (this.m_mapExistingEvents.get(f).rtime32_moderator_reviewed ??
                  0) < (v.rtime_mod_reviewed ?? 0)
              ) {
                (0, O.wT)(
                  v.clan_steamid,
                  "ClanSteamID is missing from data we received",
                );
                let I = new M.b(v.clan_steamid);
                this.InsertEventModelFromClanEventData(I, v);
              }
              return this.m_mapExistingEvents.get(f);
            } catch {
              return;
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            t,
            e,
            n,
            a,
            i,
            d,
          ) {
            if (n && this.m_mapExistingEvents.has(n))
              return this.m_mapExistingEvents.get(n);
            if (a) {
              if (this.m_mapExistingEvents.has(P.cB + a))
                return this.m_mapExistingEvents.get(P.cB + a);
              if (this.m_mapAnnouncementBodyToEvent.has(a)) {
                const o = this.m_mapAnnouncementBodyToEvent.get(a);
                if (o && this.m_mapExistingEvents.has(o))
                  return this.m_mapExistingEvents.get(o);
              }
            }
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              t,
              e,
              n,
              a,
              i,
              d,
            );
          }
          async LoadPartnerEventFromAnnoucementGID(t, e, n, a) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              t,
              void 0,
              e,
              n,
              a,
            );
          }
          async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(t, e, n, a) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              t,
              void 0,
              void 0,
              e,
              n,
              a,
            );
          }
          async LoadPartnerEventFromClanEventGID(t, e, n, a) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              t,
              e,
              void 0,
              n,
              a,
            );
          }
          async LoadPartnerEventFromClanEventGIDAndClanSteamID(t, e, n, a) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              t,
              void 0,
              e,
              void 0,
              n,
              a,
            );
          }
          async LoadPartnerEventGeneric(t, e, n, a, i) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              t,
              e,
              n,
              a,
              i,
            );
          }
          async LoadHiddenPartnerEvent(t, e) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              t,
              void 0,
              e,
              void 0,
              0,
              !0,
            );
          }
          async LoadHiddenPartnerEventByAnnouncementGID(t, e) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              t,
              void 0,
              void 0,
              e,
              0,
              !0,
            );
          }
          async HintLoadImportantUpdates() {
            const e = (0, R.tB)(36e5);
            if (e != this.m_tsUpdatedAppsQueryTime) {
              this.m_tsUpdatedAppsQueryTime = e;
              const n = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
                a = r.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
                i = await T().get(a, { params: n, withCredentials: !0 });
              i.data.apps &&
                i.data.apps.length > 0 &&
                (0, g.h5)(() => {
                  const d = new Map(
                    i.data.apps?.map((o) => [o.appid, new C(o)]),
                  );
                  this.m_mapUpdatedApps = d;
                });
            }
            return this.m_mapUpdatedApps;
          }
          GetAppImportantUpdate(t) {
            return (
              this.HintLoadImportantUpdates().catch((e) => {
                console.log("UpdatedApps failed to load: ", e.response?.data);
              }),
              this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(t)
            );
          }
          async LoadClanEventLocalizationFromAnnouncementGID(t, e) {
            let n =
              r.TS.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/announcements/ajaxgetlocalization/" +
              e;
            return (await T().get(n)).data.localization;
          }
          async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(t, e, n) {
            const a = new Array(),
              i = r.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
              d = (0, K.hE)((0, w.sfN)(r.TS.LANGUAGE));
            let o = null,
              c = null;
            if (t) {
              let E = new Array();
              t.forEach((v) => {
                this.m_mapExistingEvents.has(v)
                  ? a.push(this.m_mapExistingEvents.get(v))
                  : E.push(v);
              }),
                E.sort(),
                (o = E);
            }
            if (e) {
              let E = new Array();
              e.forEach((v) => {
                if (
                  this.m_mapAnnouncementBodyToEvent.has(v) &&
                  this.m_mapAnnouncementBodyToEvent.get(v) &&
                  this.m_mapExistingEvents.has(
                    this.m_mapAnnouncementBodyToEvent.get(v),
                  )
                ) {
                  let f = this.m_mapAnnouncementBodyToEvent.get(v);
                  if (f) {
                    const I = this.m_mapExistingEvents.get(f);
                    I && a.push(I);
                  }
                } else E.push(v);
              }),
                E.sort(),
                (c = E);
            }
            if (!o && !c) return a;
            const h = new Array(),
              p = 100;
            for (; (o?.length ?? 0) > 0 || (c?.length ?? 0) > 0; ) {
              let E = {
                event_gids:
                  (o?.length ?? 0) > 0 ? o?.splice(0, p).join(",") : void 0,
                announcement_gids:
                  (c?.length ?? 0) > 0 ? c?.splice(0, p).join(",") : void 0,
                lang_list: d,
                origin: self.origin,
              };
              h.push(
                T().get(i, { params: E, cancelToken: n ? n.token : void 0 }),
              );
            }
            try {
              const E = await Promise.all([...h]);
              let v = 0;
              (0, g.h5)(() =>
                E.forEach((f) => {
                  if (f && f.data && f.data.events)
                    for (let I of f.data.events) {
                      let H = (0, U.E0)(I);
                      if (!this.m_mapExistingEvents.has(H)) {
                        let X = new M.b(I.clan_steamid);
                        this.InsertEventModelFromClanEventData(X, I);
                      }
                      a.push(this.m_mapExistingEvents.get(H));
                    }
                  else {
                    const I = (0, l.H)(f);
                    console.error(
                      "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                        I.strErrorMsg,
                      I,
                    );
                  }
                  v += 1;
                }),
              );
            } catch (E) {
              const v = (0, l.H)(E);
              console.error(
                "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                  v.strErrorMsg,
                v,
              );
            }
            return a;
          }
          async SavePartnerEventSaleAssets(t, e, n, a) {
            let i = null;
            if (!this.m_mapExistingEvents.has(e)) return !1;
            try {
              const d = `${r.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${t}`,
                o = new FormData();
              o.append("sessionid", (0, r.KC)()),
                o.append("gidclanevent", e),
                o.append("json", JSON.stringify(n)),
                o.append("pageStyles", JSON.stringify(a));
              const c = await T().post(d, o, { withCredentials: !0 });
              if (c?.data?.success == A.R) {
                const h = this.m_mapExistingEvents.get(e);
                if (h && h.jsondata) {
                  for (const p in n)
                    if (n.hasOwnProperty(p) && n[p]) {
                      const E = p,
                        v = n[E];
                      v !== void 0 && E !== void 0 && (h.jsondata[E] = v);
                    }
                }
                return this.GetPartnerEventChangeCallback(e).Dispatch(h), !0;
              }
              i = (0, l.H)(c);
            } catch (d) {
              i = (0, l.H)(d);
            }
            return (
              console.error(
                "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                  i?.strErrorMsg,
                i,
              ),
              !1
            );
          }
          BIsSummaryOnlyStore() {
            return this.m_bOnlySummary;
          }
        }
        _([g.sH], D.prototype, "m_mapExistingEvents", 2),
          _([g.sH], D.prototype, "m_mapAnnouncementBodyToEvent", 2),
          _([g.sH], D.prototype, "m_mapClanToGIDs", 2),
          _([g.sH], D.prototype, "m_mapAppIDToGIDs", 2),
          _([g.sH], D.prototype, "m_mapUpdatedApps", 2),
          _([g.XI], D.prototype, "Init", 1),
          _([N.oI], D.prototype, "GetPartnerEventChangeCallback", 1),
          _([g.XI], D.prototype, "RegisterClanEvents", 1),
          _([g.XI], D.prototype, "InsertEventModelFromClanEventData", 1),
          _([g.XI], D.prototype, "DeleteClanEvent", 1),
          _([g.XI], D.prototype, "RemoveGIDFromList", 1),
          _([g.XI], D.prototype, "FlushEventFromCache", 1),
          _([N.oI], D.prototype, "SavePartnerEventSaleAssets", 1);
        const S = new D();
        (0, Y.V)("g_PartnerEventStore", S);
        const x = new D(!0);
        (0, Y.V)("g_PartnerEventSummaryStore", x);
        function F(G, t, e = !1) {
          const [n, a] = (0, B.useState)(() => S.GetClanEventModel(t)),
            [i, d] = (0, B.useState)(!0),
            o = (0, B.useMemo)(() => M.b.InitFromClanID(G), [G]);
          return (
            (0, B.useEffect)(() => {
              !n &&
                G > 0 &&
                (S.Init(),
                S.LoadPartnerEventFromClanEventGIDAndClanSteamID(o, t, 0, e)
                  .then(a)
                  .finally(() => d(!1)));
            }, [o, t, n, G, e]),
            (0, N.hL)(e ? S.GetPartnerEventChangeCallback(t) : void 0, a),
            { eventModel: n, bLoading: i }
          );
        }
        function $() {
          return { fnSaveSaleAssets: S.SavePartnerEventSaleAssets };
        }
      },
      49984: (V, z, m) => {
        m.d(z, { v: () => b });
        function b(T) {
          return window.StoreDefaults ? window.StoreDefaults[T] : void 0;
        }
      },
    },
  ]);
})();
