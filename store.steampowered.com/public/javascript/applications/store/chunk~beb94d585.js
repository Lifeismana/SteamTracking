/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [33884],
    {
      48421: (J, U, u) => {
        u.d(U, { B9: () => R, RR: () => V, hE: () => Q });
        var B = u(90626),
          G = u(72604),
          I = u(79118),
          Y = u(47689),
          p = u(76559),
          z = u(3166),
          D = u(67529),
          j = u(18210),
          K = u(41735),
          P = u.n(K),
          N = u(34592);
        function x(i) {
          return useObserver(() => [i.m_nBuildID, i.m_strBuildBranch]);
        }
        function W(i, c = 0, g) {
          const [_, C] = useState(
              g_PartnerEventStore.GetClanEventFromAnnouncementGID(i),
            ),
            T = useCancelTokenSource("usePartnerEventByAnnouncementGID");
          return (
            useEffect(() => {
              if (_?.AnnouncementGID != i) {
                g_PartnerEventStore.Init();
                const w = new CSteamID(CommunityConfig.CLANSTEAMID);
                g_PartnerEventStore
                  .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(w, i, c, g)
                  .then((L) => {
                    L && !T.token.reason && C(L);
                  });
              }
            }, [i, c, g, _, T]),
            _
          );
        }
        function V(i) {
          const [c, g] = (0, B.useState)(() => I.O3.GetClanEventModel(i)),
            _ = (0, Y.m)("usePartnerEventByEventGID");
          return (
            (0, B.useEffect)(() => {
              i &&
                c?.GID != i &&
                (I.O3.Init(),
                I.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  [i],
                  [],
                  _,
                ).then((C) => {
                  C?.length == 1 && C[0].GID == i && !_.token.reason && g(C[0]);
                }));
            }, [i, c, _]),
            c
          );
        }
        function h(i) {
          const c = useCancelTokenSource("usePreloadPartnerEventsByEventGID"),
            g = useQuery({
              queryKey: ["PreloadPartnerEventsByEventGID"],
              queryFn: () => (
                g_PartnerEventStore.Init(),
                g_PartnerEventStore.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  i,
                  [],
                  c,
                )
              ),
            });
          return { bIsLoading: g.isLoading, events: g.data };
        }
        function R(i, c, g) {
          const [_, C] = (0, B.useState)(
              c ? I.O3.GetClanEventModel(c) : void 0,
            ),
            [T, w] = (0, B.useState)(!!i && !!c),
            [L, A] = (0, B.useState)(),
            [b, F] = (0, B.useState)(G.R),
            M = (0, Y.m)("usePartnerEventByClanAccountAndEventGID");
          return (
            (0, B.useEffect)(() => {
              (async () => {
                try {
                  if (_?.GID != c && c && i) {
                    I.O3.Init();
                    const S = p.b.InitFromClanID(i);
                    let t;
                    try {
                      t =
                        await I.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                          S,
                          c,
                          0,
                          g,
                        );
                    } catch (e) {
                      A(e?.response?.data?.err_msg),
                        F(e?.response?.data?.success || G.zi);
                    }
                    M.token.reason || C(t);
                  }
                } finally {
                  w(!1);
                }
              })();
            }, [i, c, _, g, M]),
            { eventModel: _, bLoading: T, sErrorMessage: L, eResult: b }
          );
        }
        function $(i, c = []) {
          const [g, _] = useState(void 0),
            C = useCancelTokenSource("useLatestPatchNoteForApp");
          return (
            useEffect(() => {
              i &&
                (!g || g?.appid != i) &&
                (g_PartnerEventStore.Init(),
                g_PartnerEventStore
                  .LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    i,
                    0,
                    1,
                    { require_tags: ["patchnotes", ...c] },
                    C,
                  )
                  .then((T) => {
                    T?.length && !C.token.reason && _(T[0]);
                  }));
            }, [i, C, c, g]),
            g
          );
        }
        function k(i, c = []) {
          const g = useCancelTokenSource("useLatestPatchNoteForSource"),
            _ = typeof i == "number" ? i : k_nAppIdInvalid,
            C = typeof i == "object" ? i : void 0,
            T = useCallback(async () => {
              if (!c?.length) return null;
              g_PartnerEventStore.Init();
              const L = await g_PartnerEventStore.LoadAdjacentPartnerEvents(
                void 0,
                C,
                _,
                0,
                1,
                { require_tags: ["patchnotes", ...c] },
                g,
              );
              return L?.length ? L[0] : null;
            }, [_, g, C, c]),
            w = ["LatestPatchNote2", _, C, c, g];
          return useQuery({ queryKey: w, queryFn: T });
        }
        function Q(i) {
          let c = "" + i;
          const g = j.A0.GetELanguageFallback(i);
          return i != g && (c += "_" + g), c;
        }
        async function O(i, c, g, _) {
          const C = new Array(),
            T = {
              clan_accountid: i ? i.GetAccountID() : void 0,
              gidevent: c,
              count_before: 0,
              count_after: g,
              lang_list: Q(PchLanguageToELanguage(Config.LANGUAGE)),
              origin: self.origin,
              only_summaries: !0,
            },
            w = Config.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/",
            L = await axios.get(w, { params: T, cancelToken: _?.token });
          if (L?.data?.success == k_EResultOK) {
            const A = c == null ? L.data.events : L.data.events.slice(1);
            for (let b of A)
              !b.gid || !((b.jsondata?.length ?? 0) > 0) || C.push(b);
          } else {
            const A = GetMsgAndErrorCodeFromResponse(L?.data);
            throw (
              (console.error(
                "LoadAdjacentPartnerEvents Success but empty response: clanAccount:" +
                  (i ? i.GetAccountID() : 0) +
                  " " +
                  A.strErrorMsg,
                A,
              ),
              L?.data)
            );
          }
          return C;
        }
        function Z(i, c, g) {
          const {
            data: _,
            error: C,
            fetchNextPage: T,
            hasNextPage: w,
            isFetching: L,
            isFetchingNextPage: A,
            status: b,
            refetch: F,
          } = useInfiniteQuery({
            queryKey: ["ClanEventSummaries", i, c],
            queryFn: ({ pageParam: M }) => O(i, M, c, g),
            initialPageParam: void 0,
            getNextPageParam: (M) =>
              M.length > 0 ? M[M.length - 1].gid : void 0,
          });
          return {
            rgClanEventData: _,
            bHasNextPage: w,
            fnFetchNextPage: T,
            bIsFetching: L,
            bIsFetchingNextPage: A,
            clanEventSummaryStatus: b,
            clanEventSummaryLoadError: C,
            fnRefetch: F,
          };
        }
      },
      79118: (J, U, u) => {
        u.d(U, { ZQ: () => A, O3: () => b, MX: () => F, dB: () => M });
        var B = u(41735),
          G = u.n(B),
          I = u(14947),
          Y = u(31561),
          p = u(99412),
          z = u(72604),
          D = u(73259),
          j = u(76559),
          K = u(49984),
          P = u(41635),
          N = u(71742),
          x = u(34592),
          W = u(8323),
          V = u(48473),
          h = u(3166),
          R = u(90626),
          $ = u(30096),
          k = u(48421);
        function Q(S) {
          return (
            (S.gid == null || S.gid == null || S.gid == "0") &&
            !!S.announcement_body &&
            S.announcement_body.gid != "0"
          );
        }
        function O(S) {
          return Q(S) ? D.cB + S.announcement_body?.gid : S.gid;
        }
        function Z(S, t) {
          let e = new D.lh();
          if (
            ((e.clanSteamID = S),
            (0, N.wT)(
              e.clanSteamID && e.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                e.clanSteamID.ConvertTo64BitString() +
                " " +
                h.TS.EUNIVERSE,
            ),
            (e.GID = O(t)),
            (e.bOldAnnouncement = Q(t)),
            (e.appid = t.appid ?? 0),
            (e.createTime = t.rtime_created),
            (e.startTime = t.rtime32_start_time),
            (e.endTime = t.rtime32_end_time),
            (e.visibilityStartTime = t.rtime32_visibility_start),
            (e.visibilityEndTime = t.rtime32_visibility_end),
            (e.loadedAllLanguages = !1),
            (e.type = t.event_type ?? p.DRF),
            (e.nVotesUp = t.votes_up ?? 0),
            (e.nVotesDown = t.votes_down ?? 0),
            (e.comment_type = t.comment_type),
            (e.gidfeature = t.gidfeature),
            (e.gidfeature2 = t.gidfeature2),
            (e.featured_app_tagid = t.featured_app_tagid),
            (e.vecTags = new Array()),
            (e.creator_steamid = t.creator_steamid),
            (e.last_update_steamid = t.last_update_steamid),
            (e.rtime32_last_modified = t.rtime32_last_modified),
            (e.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
            (e.video_preview_type = t.video_preview_type),
            (e.video_preview_id = t.video_preview_id),
            (e.has_live_stream = t.has_live_stream),
            (e.live_stream_viewer_count = t.live_stream_viewer_count),
            (e.m_nBuildID = t.build_id),
            (e.m_strBuildBranch = t.build_branch),
            t.announcement_body)
          ) {
            let n = t.announcement_body;
            (e.AnnouncementGID = n.gid),
              e.name.set(n.language, n.headline),
              e.description.set(n.language, n.body),
              e.timestamp_loc_updated.clear(),
              (e.forumTopicGID = n.forum_topic_id),
              (e.nCommentCount = n.commentcount),
              (e.postTime = n.posttime),
              e.bOldAnnouncement && !n.hidden && (e.startTime = n.posttime),
              (e.announcementClanSteamID = new j.b(n.clanid)),
              n.tags &&
                n.tags.length > 0 &&
                n.tags.forEach((r) => e.vecTags.push(r)),
              !e.rtime32_last_solr_search_col_updated &&
                e.rtime32_last_modified &&
                ((e.rtime32_last_solr_search_col_updated =
                  e.rtime32_last_modified),
                (e.rtime32_last_modified = n.updatetime));
          } else
            (e.AnnouncementGID = "0"),
              (e.forumTopicGID = t.forum_topic_id),
              e.name.clear(),
              e.description.clear(),
              e.timestamp_loc_updated.clear(),
              (e.postTime = t.rtime32_start_time),
              (e.nCommentCount = t.comment_count ?? 0),
              e.name.set(p.Bhc, t.event_name ?? ""),
              e.description.set(p.Bhc, t.event_notes ?? "");
          t.broadcaster_accountid &&
            (e.broadcaster = new j.b(t.broadcaster_accountid));
          const s = D.DJ;
          try {
            e.jsondata = {
              ...s,
              ...(t.jsondata ? JSON.parse(t.jsondata) : void 0),
            };
          } catch (n) {
            const r = (0, x.H)(n);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  r.strErrorMsg,
                r,
              ),
              n)
            );
          }
          if (
            ((e.jsondata.localized_capsule_image = (0, P.$Y)(
              e.jsondata.localized_capsule_image || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_title_image = (0, P.$Y)(
              e.jsondata.localized_title_image || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_subtitle = (0, P.$Y)(
              e.jsondata.localized_subtitle || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_summary = (0, P.$Y)(
              e.jsondata.localized_summary || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_broadcast_title = (0, P.$Y)(
              e.jsondata.localized_broadcast_title || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_broadcast_left_image = (0, P.$Y)(
              e.jsondata.localized_broadcast_left_image || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_broadcast_right_image = (0, P.$Y)(
              e.jsondata.localized_broadcast_right_image || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_sale_header = (0, P.$Y)(
              e.jsondata.localized_sale_header || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_sale_overlay = (0, P.$Y)(
              e.jsondata.localized_sale_overlay || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_sale_product_banner = (0, P.$Y)(
              e.jsondata.localized_sale_product_banner || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_sale_product_mobile_banner = (0, P.$Y)(
              e.jsondata.localized_sale_product_mobile_banner || [],
              p.bP9,
              null,
            )),
            (e.jsondata.localized_sale_logo = (0, P.$Y)(
              e.jsondata.localized_sale_logo || [],
              p.bP9,
              null,
            )),
            e.jsondata.sale_num_headers !== void 0 &&
              e.jsondata.localized_per_day_sales_header)
          )
            for (let n = 0; n < e.jsondata.sale_num_headers; ++n)
              e.jsondata.localized_per_day_sales_header[n] = (0, P.$Y)(
                e.jsondata.localized_per_day_sales_header[n],
                p.bP9,
                null,
              );
          return (
            e.jsondata.sale_sections &&
              e.jsondata.sale_sections.forEach((n, r) => {
                n.localized_label &&
                  (n.localized_label = (0, P.$Y)(
                    n.localized_label,
                    p.bP9,
                    null,
                  )),
                  n.section_type === "trailercarousel" &&
                    (n.show_as_carousel = !1),
                  (e.jsondata.sale_sections[r] = { ...D.G6, ...n });
              }),
            e.jsondata.email_setting &&
              e.jsondata.email_setting.sections &&
              e.jsondata.email_setting.sections.forEach((n) => {
                n.localized_headline !== void 0 &&
                  n.localized_headline !== null &&
                  (n.localized_headline = (0, P.$Y)(
                    n.localized_headline,
                    p.bP9,
                    null,
                  )),
                  n.localized_body !== void 0 &&
                    n.localized_body !== null &&
                    (n.localized_body = (0, P.$Y)(
                      n.localized_body,
                      p.bP9,
                      null,
                    )),
                  n.localized_image !== void 0 &&
                    n.localized_image !== null &&
                    (n.localized_image = (0, P.$Y)(
                      n.localized_image,
                      p.bP9,
                      null,
                    ));
              }),
            e.jsondata.localized_title_image.forEach((n, r) => {
              if (n != null && n.substr(0, 4) == "http") {
                let o = n.lastIndexOf("/"),
                  a = n.substr(o + 1);
                e.jsondata.localized_title_image[r] = a;
              }
            }),
            (e.bLoaded = !0),
            t.published
              ? t.unlisted
                ? (e.visibility_state = D.zv.k_EEventStateUnlisted)
                : t.hidden
                  ? (e.visibility_state = D.zv.k_EEventStateStaged)
                  : (e.visibility_state = D.zv.k_EEventStateVisible)
              : (e.visibility_state = D.zv.k_EEventStateUnpublished),
            e
          );
        }
        var i = u(77291),
          c = Object.defineProperty,
          g = Object.getOwnPropertyDescriptor,
          _ = (S, t, e, s) => {
            for (
              var n = s > 1 ? void 0 : s ? g(t, e) : t, r = S.length - 1, o;
              r >= 0;
              r--
            )
              (o = S[r]) && (n = (s ? o(t, e, n) : o(n)) || n);
            return s && n && c(t, e, n), n;
          };
        const C = null;
        class T {
          appid;
          date;
          can_play;
          playtime;
          announcementid;
          constructor(t) {
            (0, N.wT)(
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
        const w = null,
          L = null;
        class A {
          constructor(t = !1) {
            (0, I.Gn)(this), (this.m_bOnlySummary = t);
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
          m_QueuedEventTimeout = new W.LU();
          m_PendingInfoPromise;
          m_PendingInfoResolve;
          m_bLoadedFromConfig = !1;
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let t = (0, K.v)("PartnerEventStore");
              this.ValidateStoreDefault(t) &&
                t.forEach((n) => {
                  if (n) {
                    let r = new j.b(n.clan_steamid);
                    const o = this.InsertEventModelFromClanEventData(r, n);
                    n.announcement_body &&
                      this.m_mapExistingEvents.set(
                        D.cB + n.announcement_body.gid,
                        o,
                      );
                  }
                });
              let e = (0, h.Fd)("partnereventstore", "application_config");
              this.ValidateStoreDefault(e) &&
                e.forEach((n) => {
                  if (n) {
                    let r = new j.b(n.clan_steamid);
                    const o = this.InsertEventModelFromClanEventData(r, n);
                    n.announcement_body &&
                      !this.m_mapExistingEvents.has(
                        D.cB + n.announcement_body.gid,
                      ) &&
                      this.m_mapExistingEvents.set(
                        D.cB + n.announcement_body.gid,
                        o,
                      );
                  }
                });
              let s = (0, h.Fd)("partnereventadjacents", "application_config");
              this.ValidateAdjacentEvent(s) &&
                s.forEach((n) => {
                  n &&
                    this.m_mapAdjacentAnnouncementGIDs.set(
                      n.announcementGID,
                      n.adjacents,
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
                (this.m_mapEventUpdateCallback.set(t, new W.lu()),
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
              ? (0, V.kd)(t.GID ?? "", e.GID ?? "")
              : (e.startTime ?? 0) - (t.startTime ?? 0);
          }
          RegisterClanEvents(t) {
            if (t)
              for (const e of t) {
                const s = O(e);
                if (!this.m_mapExistingEvents.has(s)) {
                  const n = new j.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(n, e);
                }
              }
          }
          GetRankedClanEvents(t, e) {
            let s = [],
              n = t
                ? this.GetClanEventGIDs(t)
                : e
                  ? this.GetClanEventGIDsForApp(e)
                  : void 0;
            if (!n || n.length == 0) return s;
            for (let r of n) {
              let o = this.GetClanEventModel(r);
              o && s.push(o);
            }
            return s.sort(this.DefaultEventSortFunction), s;
          }
          InsertEventModelFromClanEventData(t, e) {
            const s = Z(t, e);
            return (
              this.InsertUniqueEventGID(t.GetAccountID(), s.appid, s.GID),
              this.m_mapExistingEvents.set(s.GID, s),
              s.AnnouncementGID &&
                s.AnnouncementGID.length > 1 &&
                this.m_mapAnnouncementBodyToEvent.set(s.AnnouncementGID, s.GID),
              s
            );
          }
          HelperInitializeNumSalesHeaderArray(t) {
            if ((t.jsondata.sale_num_headers ?? 0) > 1) {
              t.jsondata.localized_per_day_sales_header = [];
              for (let e = 0; e < (t.jsondata.sale_num_headers ?? 0); ++e)
                t.jsondata.localized_per_day_sales_header.push(
                  (0, P.$Y)([], p.bP9, null),
                );
              t.m_overrideCurrentDay = 0;
            } else t.m_overrideCurrentDay = void 0;
          }
          GetAllClanEvents(t) {
            let e = new Array();
            return (
              this.m_mapClanToGIDs.has(t.GetAccountID()) &&
                this.m_mapClanToGIDs.get(t.GetAccountID()).forEach((s) => {
                  let n = this.m_mapExistingEvents.get(s);
                  n && e.push(n);
                }),
              e
            );
          }
          async QueueLoadPartnerEvent(t, e, s) {
            if (this.m_mapExistingEvents.has(e)) return;
            this.m_rgQueuedEventsClanIDs.push(t),
              this.m_rgQueuedEventsUniqueIDs.push(e),
              this.m_rgQueuedEventsForEditFlags.push(!!s),
              this.m_PendingInfoPromise ||
                (this.m_PendingInfoPromise = new Promise(
                  (a) => (this.m_PendingInfoResolve = a),
                ));
            const n = this.m_PendingInfoPromise,
              r = () => {
                const a = this.m_PendingInfoResolve,
                  l = this.m_rgQueuedEventsClanIDs,
                  v = this.m_rgQueuedEventsUniqueIDs,
                  E = this.m_rgQueuedEventsForEditFlags;
                (this.m_PendingInfoPromise = void 0),
                  (this.m_rgQueuedEventsClanIDs = new Array()),
                  (this.m_rgQueuedEventsUniqueIDs = new Array()),
                  (this.m_rgQueuedEventsForEditFlags = new Array()),
                  this.InternalLoadPartnerEventList(l, v, E).then(() => a?.());
              };
            return (
              this.m_rgQueuedEventsClanIDs.length >= 30
                ? (this.m_QueuedEventTimeout.Cancel(), r())
                : this.m_QueuedEventTimeout.IsScheduled() ||
                  this.m_QueuedEventTimeout.Schedule(50, r),
              n
            );
          }
          async InternalLoadPartnerEventList(t, e, s) {
            let n = s.some((l) => l);
            const r =
                h.TS.STORE_BASE_URL +
                (n
                  ? "events/ajaxgeteventdetailsforedit/"
                  : "events/ajaxgeteventdetails/"),
              o = (0, k.hE)((0, p.sfN)(h.TS.LANGUAGE)),
              a = {
                clanid_list: t.join(","),
                uniqueid_list: e.join(","),
                lang_list: o,
                origin: self.origin,
              };
            try {
              const l = await G().get(r, { params: a, withCredentials: n });
              this.RegisterClanEvents(l.data.events);
            } catch (l) {
              let v = (0, x.H)(l);
              console.error("GetEventDetails hit error " + v.strErrorMsg, v);
            }
          }
          async LoadAdjacentPartnerEvents(t, e, s, n, r, o, a) {
            return this.InternalLoadAdjacentPartnerEvents(
              t,
              void 0,
              e,
              s,
              n,
              r,
              o,
              a,
            );
          }
          async LoadAdjacentPartnerEventsByAnnouncement(t, e, s, n, r, o, a) {
            return this.InternalLoadAdjacentPartnerEvents(
              void 0,
              t,
              e,
              s,
              n,
              r,
              o,
              a,
            );
          }
          async LoadAdjacentPartnerEventsByEvent(t, e, s, n, r, o, a) {
            const l = e || t.clanSteamID;
            return t.bOldAnnouncement
              ? this.InternalLoadAdjacentPartnerEvents(
                  void 0,
                  t.AnnouncementGID,
                  l,
                  s,
                  n,
                  r,
                  o,
                  a,
                )
              : this.InternalLoadAdjacentPartnerEvents(
                  t.GID,
                  t.AnnouncementGID,
                  l,
                  s,
                  n,
                  r,
                  o,
                  a,
                );
          }
          async InternalLoadAdjacentPartnerEvents(t, e, s, n, r, o, a, l) {
            let v = new Array();
            if (!e || !this.m_mapAdjacentAnnouncementGIDs.has(e)) {
              let E =
                h.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
              const d = (0, k.hE)((0, p.sfN)(h.TS.LANGUAGE));
              a?.only_summaries &&
                !this.m_bOnlySummary &&
                ((0, N.wT)(
                  this.m_bOnlySummary,
                  "Only Summary: Incorrect parameter passed in, unsetting",
                ),
                (a.only_summaries = void 0));
              let m = {
                clan_accountid: s ? s.GetAccountID() : void 0,
                appid: n,
                count_before: r,
                count_after: o,
                gidevent: t,
                gidannouncement: e,
                lang_list: d,
                rtime_oldestevent: a ? a.rtime_oldestevent : void 0,
                require_tags:
                  a && a.require_tags ? a.require_tags.join(",") : void 0,
                exclude_tags:
                  a && a.exclude_tags ? a.exclude_tags.join(",") : void 0,
                require_no_tags: a ? a.require_no_tags : void 0,
                event_type_filter:
                  a && a.event_type_filter
                    ? a.event_type_filter.join(",")
                    : void 0,
                exclude_event_types:
                  a && a.exclude_event_types
                    ? a.exclude_event_types.join(",")
                    : void 0,
                only_summaries: a && !!a.only_summaries,
                origin: self.origin,
              };
              try {
                let f = await G().get(E, { params: m, cancelToken: l?.token });
                if (f?.data?.success == z.R)
                  (0, I.h5)(() => {
                    for (let y of f.data.events) {
                      let H = O(y);
                      if (!this.m_mapExistingEvents.has(H)) {
                        let X = new j.b(y.clan_steamid);
                        this.InsertEventModelFromClanEventData(s || X, y);
                      }
                      v.push(this.m_mapExistingEvents.get(H));
                    }
                    if (v.length == 0) {
                      if (t && this.BHasClanEventModel(t))
                        this.m_mapExistingEvents.get(t) &&
                          v.push(this.m_mapExistingEvents.get(t));
                      else if (e && this.BHasClanAnnouncementGID(e)) {
                        const y = this.GetClanEventFromAnnouncementGID(e);
                        y && v.push(y);
                      }
                    }
                  });
                else {
                  let y = (0, x.H)(f?.data);
                  console.error(
                    "LoadAdjacentPartnerEvents Success but empty response:" +
                      n +
                      " clanAccount:" +
                      (s ? s.GetAccountID() : 0) +
                      " " +
                      y.strErrorMsg,
                    y,
                  );
                }
              } catch (f) {
                let y = (0, x.H)(f);
                y.errorCode != z.e9 &&
                  console.error(
                    "LoadAdjacentPartnerEvents hit error on appid:" +
                      n +
                      " clanAccount:" +
                      (s ? s.GetAccountID() : 0) +
                      " " +
                      y.strErrorMsg,
                    y,
                  );
              }
            } else {
              let E = this.m_mapAdjacentAnnouncementGIDs.get(e),
                d = new Array();
              E?.forEach((m) => {
                if (this.m_mapAnnouncementBodyToEvent.has(m)) {
                  let f = this.m_mapAnnouncementBodyToEvent.get(m);
                  f &&
                    this.m_mapExistingEvents.get(f) &&
                    v.push(this.m_mapExistingEvents.get(f));
                } else d.push(m);
              }),
                d.length > 0 &&
                  (
                    await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                      void 0,
                      d,
                      l,
                    )
                  ).forEach((f) => v.push(f));
            }
            return v;
          }
          async LoadPartnerEventsPageable(t, e, s = 0, n = 0, r) {
            let o = new Array(),
              a = h.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
              l = {
                clan_accountid: t ? t.GetAccountID() : void 0,
                appid: e,
                offset: s,
                count: n,
                l: h.TS.LANGUAGE,
                origin: self.origin,
                exclude_tags: r && r.length > 0 ? r?.join(",") : void 0,
              };
            try {
              let v = await G().get(a, { params: l });
              (0, I.h5)(() => {
                for (let E of v.data.events) {
                  let d = O(E);
                  if (!this.m_mapExistingEvents.has(d)) {
                    let m = new j.b(E.clan_steamid);
                    this.InsertEventModelFromClanEventData(m, E);
                  }
                  o.push(this.m_mapExistingEvents.get(d));
                }
              });
            } catch (v) {
              console.error(
                "LoadClanEventInDateRange hit error " + (0, x.H)(v).strErrorMsg,
              );
            }
            return o;
          }
          async GetBestEventsForCurrentUser(t, e, s) {
            let n = new Array(),
              r = {
                l: h.TS.LANGUAGE,
                include_steam_blog: !0,
                filter_to_played_within_days: t,
                include_only_game_updates: e,
              },
              o = h.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
              a = await G().get(o, {
                params: r,
                withCredentials: !0,
                cancelToken: s ? s.token : void 0,
              });
            if (!a.data?.events) {
              let l = a.data?.err_msg || "";
              throw new Error(
                `GetBestEventsForCurrentUser request failed (${l})`,
              );
            }
            return (
              (0, I.h5)(() => {
                for (let l of a.data.events) {
                  let v = O(l);
                  if (!this.m_mapExistingEvents.has(v)) {
                    let d = new j.b(l.clan_steamid);
                    this.InsertEventModelFromClanEventData(d, l);
                  }
                  let E = {
                    nAppPriority: l.nAppPriority,
                    bPossibleTakeOver: l.bPossibleTakeOver,
                    event: this.m_mapExistingEvents.get(v),
                  };
                  n.push(E);
                }
              }),
              n
            );
          }
          async LoadImportantEventsAroundToday(t, e, s, n, r, o) {
            let a = new Array(),
              l = new Array();
            l.push({ priority: 0, appids: e }),
              s && l.push({ priority: 1, appids: s }),
              n && l.push({ priority: 2, appids: n });
            let v = {
                count: t,
                strAppIDPriority: JSON.stringify({ prioritized_apps: l }),
                filterToEventTypes: o ? o.toString() : "",
                l: h.TS.LANGUAGE,
              },
              E = h.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
              d = await G().get(E, {
                params: v,
                withCredentials: !0,
                cancelToken: r.token,
              });
            return (
              (0, I.h5)(() => {
                for (let m of d.data.events) {
                  let f = O(m);
                  if (!this.m_mapExistingEvents.has(f)) {
                    let y = new j.b(m.clan_steamid);
                    this.InsertEventModelFromClanEventData(y, m);
                  }
                  a.push(this.m_mapExistingEvents.get(f));
                }
              }),
              a
            );
          }
          InsertUniqueEventGID(t, e, s) {
            let n = this.m_mapClanToGIDs.get(t);
            n ||
              (this.m_mapClanToGIDs.set(t, new Array()),
              (n = this.m_mapClanToGIDs.get(t)));
            let r = this.m_mapAppIDToGIDs.get(e);
            r ||
              (this.m_mapAppIDToGIDs.set(e, new Array()),
              (r = this.m_mapAppIDToGIDs.get(e))),
              n.indexOf(s) == -1 && (n.push(s), r.push(s));
          }
          ResetModel() {}
          async DeleteClanEvent(t, e) {
            this.m_mapExistingEvents.has(e) &&
              (this.m_mapExistingEvents.get(e).deleteInProgress = !0);
            let s = new URLSearchParams();
            s.append("sessionid", (0, h.KC)()),
              s.append("bDelete", "1"),
              s.append("gid", e);
            const n = await G().post(
              h.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                t.ConvertTo64BitString() +
                "/ajaxcreateupdatedeletepartnerevents/",
              s,
            );
            return this.RemoveGIDFromList(t, e), n.data;
          }
          RemoveGIDFromList(t, e) {
            if (
              (this.m_mapExistingEvents.delete(e),
              this.m_mapClanToGIDs.has(t.GetAccountID()))
            ) {
              let s = this.m_mapClanToGIDs.get(t.GetAccountID()),
                n = s.indexOf(e);
              n >= 0 && s.splice(n, 1);
            }
          }
          FlushEventFromCache(t, e) {
            if (
              (t &&
                this.m_mapExistingEvents.has(t) &&
                (e || (e = this.m_mapExistingEvents.get(t).AnnouncementGID),
                this.m_mapExistingEvents.delete(t)),
              e &&
                (this.m_mapExistingEvents.has(D.cB + e) &&
                  this.m_mapExistingEvents.delete(D.cB + e),
                this.m_mapAnnouncementBodyToEvent.has(e)))
            ) {
              const s = this.m_mapAnnouncementBodyToEvent.get(e);
              s &&
                this.m_mapExistingEvents.has(s) &&
                this.m_mapExistingEvents.delete(s),
                this.m_mapAnnouncementBodyToEvent.delete(e);
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            t,
            e,
            s,
            n,
            r,
            o = !1,
          ) {
            let a = (0, k.hE)(o ? p.Bhc : (0, p.sfN)(h.TS.LANGUAGE)),
              l = {
                appid: e,
                clan_accountid: t ? t.GetAccountID() : void 0,
                announcement_gid: n,
                event_gid: s,
                lang_list: a,
                last_modified_time: r || 0,
                origin: self.origin,
                for_edit: o,
                only_summary: this.m_bOnlySummary,
              },
              v = null,
              E = null;
            if (o) {
              const d = (0, h.yK)();
              d === "community"
                ? ((E = h.TS.COMMUNITY_BASE_URL),
                  (E += t ? "gid/" + t.ConvertTo64BitString() : "ogg/" + e),
                  (E += "/"))
                : d === "partnerweb"
                  ? (E = h.TS.PARTNER_BASE_URL + "sales/")
                  : (E = h.TS.STORE_BASE_URL + "events/"),
                (E += "ajaxgetpartnereventforedit"),
                (v = { params: l, withCredentials: !0 });
            } else
              (E = h.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
                (v = { params: l, withCredentials: !1 });
            try {
              let d = await G().get(E, v);
              if (d.data.success !== z.R) return;
              let m = d.data.event,
                f = O(m);
              if (
                !this.m_mapExistingEvents.has(f) ||
                (this.m_mapExistingEvents.get(f).rtime32_last_modified ?? 0) <
                  (m.rtime32_last_modified ?? 0) ||
                (this.m_mapExistingEvents.get(f).rtime32_moderator_reviewed ??
                  0) < (m.rtime_mod_reviewed ?? 0)
              ) {
                (0, N.wT)(
                  m.clan_steamid,
                  "ClanSteamID is missing from data we received",
                );
                let y = new j.b(m.clan_steamid);
                this.InsertEventModelFromClanEventData(y, m);
              }
              return this.m_mapExistingEvents.get(f);
            } catch {
              return;
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            t,
            e,
            s,
            n,
            r,
            o,
          ) {
            if (s && this.m_mapExistingEvents.has(s))
              return this.m_mapExistingEvents.get(s);
            if (n) {
              if (this.m_mapExistingEvents.has(D.cB + n))
                return this.m_mapExistingEvents.get(D.cB + n);
              if (this.m_mapAnnouncementBodyToEvent.has(n)) {
                const a = this.m_mapAnnouncementBodyToEvent.get(n);
                if (a && this.m_mapExistingEvents.has(a))
                  return this.m_mapExistingEvents.get(a);
              }
            }
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              t,
              e,
              s,
              n,
              r,
              o,
            );
          }
          async LoadPartnerEventFromAnnoucementGID(t, e, s, n) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              t,
              void 0,
              e,
              s,
              n,
            );
          }
          async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(t, e, s, n) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              t,
              void 0,
              void 0,
              e,
              s,
              n,
            );
          }
          async LoadPartnerEventFromClanEventGID(t, e, s, n) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              t,
              e,
              void 0,
              s,
              n,
            );
          }
          async LoadPartnerEventFromClanEventGIDAndClanSteamID(t, e, s, n) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              t,
              void 0,
              e,
              void 0,
              s,
              n,
            );
          }
          async LoadPartnerEventGeneric(t, e, s, n, r) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              t,
              e,
              s,
              n,
              r,
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
            const e = (0, Y.tB)(36e5);
            if (e != this.m_tsUpdatedAppsQueryTime) {
              this.m_tsUpdatedAppsQueryTime = e;
              const s = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
                n = h.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
                r = await G().get(n, { params: s, withCredentials: !0 });
              r.data.apps &&
                r.data.apps.length > 0 &&
                (0, I.h5)(() => {
                  const o = new Map(
                    r.data.apps?.map((a) => [a.appid, new T(a)]),
                  );
                  this.m_mapUpdatedApps = o;
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
            let s =
              h.TS.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/announcements/ajaxgetlocalization/" +
              e;
            return (await G().get(s)).data.localization;
          }
          async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(t, e, s) {
            const n = new Array(),
              r = h.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
              o = (0, k.hE)((0, p.sfN)(h.TS.LANGUAGE));
            let a = null,
              l = null;
            if (t) {
              let d = new Array();
              t.forEach((m) => {
                this.m_mapExistingEvents.has(m)
                  ? n.push(this.m_mapExistingEvents.get(m))
                  : d.push(m);
              }),
                d.sort(),
                (a = d);
            }
            if (e) {
              let d = new Array();
              e.forEach((m) => {
                if (
                  this.m_mapAnnouncementBodyToEvent.has(m) &&
                  this.m_mapAnnouncementBodyToEvent.get(m) &&
                  this.m_mapExistingEvents.has(
                    this.m_mapAnnouncementBodyToEvent.get(m),
                  )
                ) {
                  let f = this.m_mapAnnouncementBodyToEvent.get(m);
                  if (f) {
                    const y = this.m_mapExistingEvents.get(f);
                    y && n.push(y);
                  }
                } else d.push(m);
              }),
                d.sort(),
                (l = d);
            }
            if (!a && !l) return n;
            const v = new Array(),
              E = 100;
            for (; (a?.length ?? 0) > 0 || (l?.length ?? 0) > 0; ) {
              let d = {
                event_gids:
                  (a?.length ?? 0) > 0 ? a?.splice(0, E).join(",") : void 0,
                announcement_gids:
                  (l?.length ?? 0) > 0 ? l?.splice(0, E).join(",") : void 0,
                lang_list: o,
                origin: self.origin,
              };
              v.push(
                G().get(r, { params: d, cancelToken: s ? s.token : void 0 }),
              );
            }
            try {
              const d = await Promise.all([...v]);
              let m = 0;
              (0, I.h5)(() =>
                d.forEach((f) => {
                  if (f && f.data && f.data.events)
                    for (let y of f.data.events) {
                      let H = O(y);
                      if (!this.m_mapExistingEvents.has(H)) {
                        let X = new j.b(y.clan_steamid);
                        this.InsertEventModelFromClanEventData(X, y);
                      }
                      n.push(this.m_mapExistingEvents.get(H));
                    }
                  else {
                    const y = (0, x.H)(f);
                    console.error(
                      "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                        y.strErrorMsg,
                      y,
                    );
                  }
                  m += 1;
                }),
              );
            } catch (d) {
              const m = (0, x.H)(d);
              console.error(
                "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                  m.strErrorMsg,
                m,
              );
            }
            return n;
          }
          async SavePartnerEventSaleAssets(t, e, s, n) {
            let r = null;
            if (!this.m_mapExistingEvents.has(e)) return !1;
            try {
              const o = `${h.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${t}`,
                a = new FormData();
              a.append("sessionid", (0, h.KC)()),
                a.append("gidclanevent", e),
                a.append("json", JSON.stringify(s)),
                a.append("pageStyles", JSON.stringify(n));
              const l = await G().post(o, a, { withCredentials: !0 });
              if (l?.data?.success == z.R) {
                const v = this.m_mapExistingEvents.get(e);
                if (v && v.jsondata) {
                  for (const E in s)
                    if (s.hasOwnProperty(E) && s[E]) {
                      const d = E,
                        m = s[d];
                      m !== void 0 && d !== void 0 && (v.jsondata[d] = m);
                    }
                }
                return this.GetPartnerEventChangeCallback(e).Dispatch(v), !0;
              }
              r = (0, x.H)(l);
            } catch (o) {
              r = (0, x.H)(o);
            }
            return (
              console.error(
                "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                  r?.strErrorMsg,
                r,
              ),
              !1
            );
          }
          BIsSummaryOnlyStore() {
            return this.m_bOnlySummary;
          }
        }
        _([I.sH], A.prototype, "m_mapExistingEvents", 2),
          _([I.sH], A.prototype, "m_mapAnnouncementBodyToEvent", 2),
          _([I.sH], A.prototype, "m_mapClanToGIDs", 2),
          _([I.sH], A.prototype, "m_mapAppIDToGIDs", 2),
          _([I.sH], A.prototype, "m_mapUpdatedApps", 2),
          _([I.XI], A.prototype, "Init", 1),
          _([$.oI], A.prototype, "GetPartnerEventChangeCallback", 1),
          _([I.XI], A.prototype, "RegisterClanEvents", 1),
          _([I.XI], A.prototype, "InsertEventModelFromClanEventData", 1),
          _([I.XI], A.prototype, "DeleteClanEvent", 1),
          _([I.XI], A.prototype, "RemoveGIDFromList", 1),
          _([I.XI], A.prototype, "FlushEventFromCache", 1),
          _([$.oI], A.prototype, "SavePartnerEventSaleAssets", 1);
        const b = new A();
        (0, i.V)("g_PartnerEventStore", b);
        const F = new A(!0);
        (0, i.V)("g_PartnerEventSummaryStore", F);
        function M(S, t, e = !1) {
          const [s, n] = (0, R.useState)(() => b.GetClanEventModel(t)),
            [r, o] = (0, R.useState)(!0),
            a = (0, R.useMemo)(() => j.b.InitFromClanID(S), [S]);
          return (
            (0, R.useEffect)(() => {
              !s &&
                S > 0 &&
                (b.Init(),
                b
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(a, t, 0, e)
                  .then(n)
                  .finally(() => o(!1)));
            }, [a, t, s, S, e]),
            (0, $.hL)(e ? b.GetPartnerEventChangeCallback(t) : void 0, n),
            { eventModel: s, bLoading: r }
          );
        }
        function q() {
          return { fnSaveSaleAssets: b.SavePartnerEventSaleAssets };
        }
      },
      49984: (J, U, u) => {
        u.d(U, { v: () => B });
        function B(G) {
          return window.StoreDefaults ? window.StoreDefaults[G] : void 0;
        }
      },
    },
  ]);
})();
