/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [596],
  {
    79821: (e, t, a) => {
      a.d(t, { Kl: () => n, Yj: () => l, iH: () => s, zV: () => d });
      const n = [
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "emoticon",
          "dynamiclink",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "*",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
          "video",
          "vod",
          "youtubeorvideo",
          "giveawayeligible",
          "claimitem",
          "packagepurchaseable",
          "actiondialog",
          "uploadfilebutton",
          "docimg",
          "meetsteamsessiongroup",
          "meetsteamscheduleview",
          "center",
          "c",
          "expand",
          "remindme",
          "calendarevent",
          "color",
          "bgcolor",
          "userpolls",
        ],
        s = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        i = [
          "img",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ];
      n.filter((e) => !i.includes(e));
      let r;
      function o(e) {
        return e
          ? e.map((e) => ("*" == e ? "\\*" : e)).join("|")
          : (r || (r = o(n)), r);
      }
      function l(e, t = null, a = " ") {
        const n = new RegExp(
          "\\[(" + o(t) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
          "gi",
        );
        return e.replace(n, a);
      }
      function d(e, t = null, a = "") {
        const n = "\\[\\/?(?:" + o(t) + "){1,}.*?]";
        return e.replace(new RegExp(n, "gi"), a);
      }
    },
    7221: (e, t, a) => {
      a.d(t, { pb: () => s, wI: () => n });
      var n;
      !(function (e) {
        (e.full = ""),
          (e.background_main = "_960x311"),
          (e.background_mini = "_480x156"),
          (e.capsule_main = "_400x225"),
          (e.spotlight_main = "_1054x230");
      })(n || (n = {}));
      const s = [
        "localized_image_group",
        "link_capsule",
        "product_mobile_banner_override",
        "product_banner_override",
        "sale_section_title",
        "schedule_track_art",
        "localized_background_art",
      ];
    },
    3577: (e, t, a) => {
      function n() {
        let e, t;
        return {
          promise: new Promise((a, n) => {
            (e = a), (t = n);
          }),
          resolve: e,
          reject: t,
        };
      }
      a.d(t, { x0: () => n });
    },
    12611: (e, t, a) => {
      a.d(t, { eg: () => s, lw: () => n, qR: () => i });
      const n = "{STEAM_CLAN_IMAGE}",
        s = "{STEAM_CLAN_LOC_IMAGE}",
        i = "{STEAM_APP_IMAGE}";
    },
    62641: (e, t, a) => {
      a.d(t, {
        FZ: () => de,
        A4: () => B,
        iy: () => C,
        ZA: () => k,
        Dn: () => R,
        CU: () => Z,
        Ay: () => K,
        ye: () => X,
        Fo: () => te,
        G$: () => ae,
        Xx: () => H,
        DJ: () => re,
        G6: () => ne,
        zv: () => x,
        IS: () => N,
        GE: () => P,
        yX: () => M,
        w: () => se,
        EE: () => O,
        Zf: () => W,
        jR: () => V,
        Ac: () => ce,
        lh: () => ue,
        Hc: () => ie,
        mz: () => Y,
        qQ: () => $,
        MW: () => Q,
        W2: () => q,
        Pm: () => ee,
        qR: () => J,
        _B: () => U,
        j3: () => pe,
        Yw: () => z,
        zK: () => L,
        DU: () => j,
        cB: () => oe,
      });
      var n = a(34629),
        s = a(79821),
        i = a(2160),
        r = a(14947);
      const o = {
        bBroadcastEnabled: !1,
        broadcastChatSetting: "hide",
        default_broadcast_title: "#Broadcast_default_title_dev",
        localized_broadcast_title: new Array(31),
        localized_broadcast_left_image: new Array(31),
        localized_broadcast_right_image: new Array(31),
        broadcast_whitelist: [],
      };
      var l = a(17720),
        d = a(27666),
        c = a(7221),
        _ = a(27939),
        m = a(68359),
        u = a(4796),
        p = a(8092),
        h = a(44165),
        g = a(16021),
        v = a(81393),
        E = a(61859),
        y = a(25489),
        f = a(27543),
        I = a(41338),
        b = a(14771),
        G = a(78327),
        S = a(6419);
      (0, n.Cg)(
        [S.o],
        class {
          m_eventModel;
          m_entry;
          constructor(e, t) {
            (this.m_eventModel = e), (this.m_entry = t);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }.prototype,
        "GetEventStartTime",
        null,
      );
      var A = a(61336);
      const T = 99999;
      const w = [13, 14, 17, 18, 19, 22, 23, 24, 35, 25, 26, 28, 15, 32, 10];
      function C(e) {
        return (
          w.some((t) => t == e.GetEventType()) &&
          !e.BHasTag("steam_award_nomination_request") &&
          !e.BHasTag("curator")
        );
      }
      const D = [20, 31, 34];
      function B(e) {
        return !D.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      new Set([9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35]);
      const j = 593110,
        L = [j, 766, 221410],
        F = [12, 34];
      function k(e) {
        return !F.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      function R(e) {
        const t = 60 * b.Kp.PerDay;
        return (
          e.BIsVisibleEvent() &&
          e.BIsOGGEvent() &&
          (e.rtime32_last_modified ?? 0) > h.HD.GetTimeNowWithOverride() - t &&
          !H(e)
        );
      }
      function H(e) {
        return e.BHasTag("mod_reviewed") && !e.BHasTag("mod_require_rereview");
      }
      var x;
      function U(e) {
        switch (e) {
          case "links":
          case "itemdef":
            return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
          case "contenthubspecials":
            return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
          default:
            return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
        }
      }
      !(function (e) {
        (e[(e.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (e[(e.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (e[(e.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (e[(e.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted");
      })(x || (x = {}));
      const z = "bordered";
      var O, P, M, N, W, V;
      function q(e) {
        return e && !!e.show_as_carousel && !e.enable_faceted_browsing;
      }
      function $(e) {
        return e.carousel_rows || 1;
      }
      function Q(e) {
        return e.cap_item_count || 0;
      }
      function Y(e) {
        return e.cap_section_row_count && e.cap_section_row_count > 0
          ? e.cap_section_row_count
          : "trailercarousel" == e.section_type
            ? 1
            : e.cap_section_content
              ? 4
              : 0;
      }
      function J(e) {
        return Boolean(e?.store_filter)
          ? JSON.stringify(e.store_filter)
          : void 0;
      }
      function X(e) {
        switch (e) {
          case "items":
          case "trailercarousel":
          case "crosspromotesalepage":
          case "creator_list":
          case "calendar":
            return !0;
        }
        return !1;
      }
      function K(e) {
        switch (e) {
          case "items":
          case "crosspromotesalepage":
          case "creator_list":
            return !0;
        }
        return !1;
      }
      function Z(e, t = !1) {
        return (
          !(
            !e ||
            !(function (e) {
              switch (e) {
                case "items":
                case "trailercarousel":
                case "crosspromotesalepage":
                case "creator_list":
                case "calendar":
                case "events":
                case "sale_events":
                case "contenthubspecials":
                  return !0;
              }
              return !1;
            })(e.section_type)
          ) &&
          (t
            ? !!e.sale_tag_filter?.clauses?.length || !!e.smart_section
            : !!e.smart_section && null != e.smart_section_type)
        );
      }
      function ee(e) {
        return Z(e) ? e?.smart_section_type : void 0;
      }
      function te(e, t) {
        if (!e.BIsNextFest() || X(t.section_type) || Z(t)) return !1;
        return (
          ((e.jsondata.sale_ml_recommender_delay_hours &&
            (e.startTime ?? 0) +
              e.jsondata.sale_ml_recommender_delay_hours * b.Kp.PerHour -
              new Date().getTime() / 1e3) ??
            0) > 0
        );
      }
      function ae(e, t) {
        return !!t.use_random_order || !!te(e, t);
      }
      !(function (e) {
        (e[(e.k_EStoreFilterClauseTypeOr = 0)] = "k_EStoreFilterClauseTypeOr"),
          (e[(e.k_EStoreFilterClauseTypeAnd = 1)] =
            "k_EStoreFilterClauseTypeAnd"),
          (e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
            "k_EStoreFilterClauseTypeStoreTag"),
          (e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
            "k_EStoreFilterClauseTypeFeatureTag"),
          (e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
            "k_EStoreFilterClauseTypeLanguage"),
          (e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
            "k_EStoreFilterClauseTypeContentDescriptor"),
          (e[(e.k_EStoreFilterClauseTypePrice = 6)] =
            "k_EStoreFilterClauseTypePrice"),
          (e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
            "k_EStoreFilterClauseTypeAppType");
      })(O || (O = {})),
        (function (e) {
          (e[(e.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (e[(e.k_ELanguage = 1)] = "k_ELanguage"),
            (e[(e.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (e[(e.k_EUserPreference = 3)] = "k_EUserPreference"),
            (e[(e.k_EPrice = 4)] = "k_EPrice"),
            (e[(e.k_EAppType = 5)] = "k_EAppType");
        })(P || (P = {})),
        (function (e) {
          (e[(e.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (e[(e.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (e[(e.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems");
        })(M || (M = {})),
        (function (e) {
          (e[(e.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (e[(e.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (e[(e.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually");
        })(N || (N = {})),
        (function (e) {
          (e.Steam = "Steam"),
            (e.Facebook = "Facebook"),
            (e.Twitter = "Twitter"),
            (e.Reddit = "Reddit");
        })(W || (W = {})),
        (function (e) {
          (e.Summary = "summary"),
            (e.SummaryLargeImage = "summary_large_image");
        })(V || (V = {}));
      const ne = {
        capsules: [],
        events: [],
        links: [],
        localized_label: new Array(31),
        localized_label_image: new Array(31),
        default_label: "#Sale_default_label",
        section_type: "unselected_empty",
      };
      var se;
      function ie(e) {
        return {
          arrowFill: e?.sale_carousel_arrow_color,
          arrowStyle: e?.sale_carousel_arrow_style,
          breadcrumbActiveColor: e?.sale_carousel_active_breadcrumb_color,
          breadcrumbColor: e?.sale_carousel_breadcrumb_color,
          breadcrumbStyle: e?.sale_carousel_breadcrumb_style,
        };
      }
      !(function (e) {
        (e[(e.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (e[(e.k_EContentHub = 1)] = "k_EContentHub");
      })(se || (se = {}));
      const re = {
          localized_subtitle: new Array(31),
          localized_summary: new Array(31),
          localized_title_image: new Array(31),
          localized_capsule_image: new Array(31),
          bSaleEnabled: !1,
          sale_show_creator: !1,
          sale_sections: [],
          sale_browsemore_text: "",
          sale_browsemore_url: "",
          sale_browsemore_color: "",
          sale_browsemore_bgcolor: "",
          localized_sale_header: new Array(31),
          localized_sale_overlay: new Array(31),
          localized_sale_product_banner: new Array(31),
          localized_sale_product_mobile_banner: new Array(31),
          localized_sale_logo: new Array(31),
          sale_font: "",
          sale_background_color: "",
          sale_header_offset: 530,
          referenced_appids: [],
          ...o,
          bScheduleEnabled: !1,
          scheduleEntries: [],
        },
        oe = "old_announce_",
        le = [
          "workshop",
          "patchnotes",
          "contenthub",
          "skip_megaphone",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
          "enable_steam_china",
          "disable_steam_global",
          "adult_only_content",
          "stablechannel",
          "betachannel",
          "previewchannel",
        ],
        de = [
          "steam_blog_featured",
          "workshop",
          "steam_blog",
          "blog",
          "audience_followers",
          "steamvr",
          "patchnotes",
          "steam_library_beta",
          "hide_library_overview",
          "mod_hide_library_overview",
          "hide_library_detail",
          "mod_hide_library_detail",
          "hide_store",
          "mod_hide_store",
          "halloween2019candidate",
          "halloween2019",
          "halloween2019reviewed",
          "horror",
          "cute",
          "halloween",
          "mod_reviewed",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "curator",
          "curator_group_members",
          "curator_public",
          "mod_require_rereview",
          "auto_rssfeed",
          "auto_migrated",
          "enable_steam_china",
          "disable_steam_global",
          "skip_megaphone",
          "seasonal_sale_featuring",
          "show_library_demo_detail",
          "clear_library_demo_detail",
          "repost_source_possible",
          "autocreate_promotools",
          "vo_marketing_message",
        ],
        ce = [
          "patchnotes",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "mod_hide_library_overview",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "halloween",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
        ],
        _e = [20, 31, 34],
        me = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35];
      class ue {
        constructor() {
          (0, r.Gn)(this);
        }
        GID = void 0;
        AnnouncementGID = void 0;
        clanSteamID = new l.b();
        forumTopicGID = void 0;
        type = 1;
        appid = 0;
        name = new Map();
        description = new Map();
        timestamp_loc_updated = new Map();
        createTime = void 0;
        startTime = void 0;
        endTime = void 0;
        visibilityStartTime = void 0;
        visibilityEndTime = void 0;
        m_nBuildID = void 0;
        m_strBuildBranch = void 0;
        postTime = void 0;
        visibility_state = x.k_EEventStateUnpublished;
        broadcaster = void 0;
        jsondata = re;
        nCommentCount = 0;
        nVotesUp = 0;
        nVotesDown = 0;
        comment_type;
        gidfeature;
        gidfeature2;
        featured_app_tagid;
        bOldAnnouncement = !1;
        announcementClanSteamID = void 0;
        loadedAllLanguages = !1;
        bLoaded = !1;
        deleteInProgress = !1;
        vecTags = new Array();
        creator_steamid;
        last_update_steamid = void 0;
        rtime32_last_modified = void 0;
        rtime32_last_solr_search_col_updated = void 0;
        rtime32_last_local_modification = void 0;
        rtime32_moderator_reviewed = void 0;
        video_preview_type = void 0;
        video_preview_id = void 0;
        has_live_stream;
        live_stream_viewer_count;
        m_overrideCurrentDay = void 0;
        BIsPartnerEvent() {
          return !this.bOldAnnouncement && Boolean(this.GID);
        }
        static FromJSON(e) {
          let t = new ue(),
            a = JSON.parse(e);
          return (
            Object.assign(t, a),
            (t.name = new Map(a.name)),
            (t.description = new Map(a.description)),
            (t.vecTags = new Array(a.vecTags)),
            (t.clanSteamID = new l.b(a.clanSteamID)),
            (0, v.wT)(
              t.clanSteamID && t.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " + t.clanSteamID.ConvertTo64BitString(),
            ),
            a.broadcaster &&
              ((t.broadcaster = new l.b(a.broadcaster)),
              (0, v.wT)(
                t.broadcaster && t.broadcaster.BIsValid(),
                "Invalid Broadcast SteamID: " +
                  t.broadcaster.ConvertTo64BitString(),
              )),
            t
          );
        }
        toJSON(e) {
          let t = new Object();
          return (
            Object.assign(t, this),
            (t.name = Array.from(this.name)),
            (t.description = Array.from(this.description)),
            (t.tags = Array.from(this.vecTags)),
            (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
            this.broadcaster &&
              (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
            t
          );
        }
        clone(e = !1) {
          let t = new ue();
          if (
            ((t.GID = this.GID),
            (t.AnnouncementGID = this.AnnouncementGID),
            (t.clanSteamID = this.clanSteamID),
            (t.bOldAnnouncement = this.bOldAnnouncement),
            (t.nCommentCount = this.nCommentCount),
            (t.nVotesUp = this.nVotesUp),
            (t.nVotesDown = this.nVotesDown),
            (t.forumTopicGID = this.forumTopicGID),
            (t.comment_type = this.comment_type),
            (t.gidfeature = this.gidfeature),
            (t.gidfeature2 = this.gidfeature2),
            (t.featured_app_tagid = this.featured_app_tagid),
            (t.creator_steamid = this.creator_steamid),
            (t.last_update_steamid = this.last_update_steamid),
            (t.rtime32_last_modified = this.rtime32_last_modified),
            (t.rtime32_last_solr_search_col_updated =
              this.rtime32_last_solr_search_col_updated),
            (t.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
            (t.type = this.type),
            (t.appid = this.appid),
            (t.name = new Map()),
            this.name.forEach((e, a) => {
              t.name.set(a, e);
            }),
            (t.description = new Map()),
            this.description.forEach((e, a) => {
              t.description.set(a, e);
            }),
            (t.timestamp_loc_updated = new Map()),
            this.timestamp_loc_updated.forEach((e, a) => {
              t.timestamp_loc_updated.set(a, e);
            }),
            (t.createTime = Math.floor(Date.now() / 1e3)),
            (t.startTime = this.startTime),
            (t.endTime = this.endTime),
            (t.visibilityStartTime = this.visibilityStartTime),
            (t.visibilityEndTime = this.visibilityEndTime),
            (t.postTime = this.postTime),
            (t.visibility_state = this.visibility_state),
            (t.loadedAllLanguages = this.loadedAllLanguages),
            (t.bLoaded = this.bLoaded),
            (t.broadcaster = this.broadcaster
              ? new l.b(this.broadcaster.ConvertTo64BitString())
              : void 0),
            (t.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
            (t.vecTags = new Array()),
            e
              ? ((t.m_nBuildID = this.m_nBuildID),
                (t.m_strBuildBranch = this.m_strBuildBranch),
                this.vecTags.forEach((e) => t.vecTags.push(e)))
              : this.vecTags.forEach((e) => {
                  le.includes(e) && t.vecTags.push(e);
                }),
            t.jsondata.email_setting)
          ) {
            let e = 100;
            for (let a of t.jsondata.email_setting.sections)
              a.unique_id || ((a.unique_id = `email_section_${e}`), e++);
          }
          return t;
        }
        GetLastReferencedSaleDayFromCapsules(e, t) {
          let a = t;
          return (
            e?.forEach((e) => {
              void 0 !== e.visibility_index &&
                (a =
                  void 0 === a
                    ? e.visibility_index
                    : Math.max(a, e.visibility_index));
            }),
            a
          );
        }
        GetLastReferencedSaleDay() {
          let e;
          for (const t of this.GetSaleSections())
            if ("tabs" === t.section_type) {
              if ((t.tabs?.length ?? 0) > 0)
                for (const a of t.tabs ?? [])
                  e = this.GetLastReferencedSaleDayFromCapsules(a.capsules, e);
            } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
          return (
            (this.jsondata.sale_num_headers ?? 0) > 1 &&
              (null == e || e < (this.jsondata.sale_num_headers ?? 0)) &&
              (e = this.jsondata.sale_num_headers),
            e
          );
        }
        GetDayIndexFromEventStart() {
          let e = 0;
          const t = h.HD.GetTimeNowWithOverride();
          void 0 !== this.startTime &&
            t >= this.startTime &&
            (e = Math.floor((t - this.startTime) / 86400)),
            void 0 !== this.m_overrideCurrentDay &&
              this.m_overrideCurrentDay >= 0 &&
              (e = this.m_overrideCurrentDay);
          const a = this.GetLastReferencedSaleDay() || 0;
          return Math.min(e, a);
        }
        GetNameWithFallback(e) {
          const t = E.A0.GetELanguageFallback(e);
          return this.name.get(e) || this.name.get(t);
        }
        GetGameTitle(e) {
          return g.A.Get().GetApp(this.appid)?.GetName();
        }
        BInRealmGlobal() {
          return !this.BHasTag("disable_steam_global");
        }
        BInRealmChina() {
          return this.BHasTag("enable_steam_china");
        }
        BIsLanguageValidForRealms(e) {
          return (
            !(
              !this.BInRealmGlobal() ||
              !E.A0.IsELanguageValidInRealm(e, i.TU.k_ESteamRealmGlobal)
            ) ||
            !(
              !this.BInRealmChina() ||
              !E.A0.IsELanguageValidInRealm(e, i.TU.k_ESteamRealmChina)
            )
          );
        }
        GetImgArray(e) {
          let t = [];
          if (
            (("background" !== e && "localized_title_image" != e) ||
              (t = this.jsondata.localized_title_image),
            "capsule" === e)
          )
            t = this.jsondata.localized_capsule_image;
          else if ("spotlight" === e)
            t = this.jsondata.localized_spotlight_image;
          else if ("email_full" === e || "email_centered" === e)
            t = this.jsondata.email_setting
              ? this.jsondata.email_setting.sections[0].localized_image
              : [];
          else if ("broadcast_left" === e)
            t = this.jsondata.localized_broadcast_left_image;
          else if ("broadcast_right" === e)
            t = this.jsondata.localized_broadcast_right_image;
          else if ("sale_header" === e)
            if ((this.jsondata.sale_num_headers ?? 0) > 1) {
              const e = Math.min(
                (this.jsondata.sale_num_headers ?? 0) - 1,
                this.GetDayIndexFromEventStart(),
              );
              t = this.jsondata.localized_per_day_sales_header?.[e];
            } else t = this.jsondata.localized_sale_header;
          else
            "sale_logo" === e
              ? (t = this.jsondata.localized_sale_logo)
              : "sale_overlay" === e
                ? (t = this.jsondata.localized_sale_overlay)
                : c.pb.includes(e)
                  ? (t = m.R.GetAllLocalizedGroupImageHashAndExts())
                  : "product_banner" === e
                    ? (t = this.jsondata.localized_sale_product_banner)
                    : "product_mobile_banner" === e
                      ? (t = this.jsondata.localized_sale_product_mobile_banner)
                      : "bestofyear_banner" === e
                        ? (t = this.jsondata.localized_bestofyear_banner)
                        : "bestofyear_banner_mobile" === e
                          ? (t =
                              this.jsondata.localized_bestofyear_banner_mobile)
                          : "localized_store_app_spotlight" === e
                            ? (t = this.jsondata.localized_store_app_spotlight)
                            : "localized_store_app_spotlight_mobile" === e &&
                              (t =
                                this.jsondata
                                  .localized_store_app_spotlight_mobile);
          return t;
        }
        GetImageURL(e, t = 0, a = c.wI.full) {
          const n = this.GetImgArray(e),
            s = n && n.length > t && null != n[t];
          return s && n[t]?.startsWith("http")
            ? n[t]
            : s
              ? d.z.GenerateURLFromHashAndExt(this.clanSteamID, n[t] ?? "", a)
              : void 0;
        }
        GetImageHash(e, t = 0) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t]
            ? a[t].substr(0, a[t].length - 4)
            : null;
        }
        GetImageHashAndExt(e, t = 0) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t] ? a[t] : null;
        }
        BHasSomeImage(e) {
          let t = this.GetImgArray(e);
          return !!t && t.some((e) => null != e && e.length > 0);
        }
        BHasImage(e, t) {
          let a = this.GetImgArray(e);
          return !!a && a.length > t && null != a[t];
        }
        BHasAnnouncementGID() {
          return (
            null !== this.AnnouncementGID &&
            void 0 !== this.AnnouncementGID &&
            this.AnnouncementGID.length > 1
          );
        }
        GetAnnouncementGID() {
          return this.AnnouncementGID;
        }
        BHasForumTopicGID() {
          return (
            null !== this.forumTopicGID &&
            void 0 !== this.forumTopicGID &&
            this.forumTopicGID.length > 1
          );
        }
        GetForumTopicURL() {
          if (!this.BHasForumTopicGID()) return "";
          if (this.appid)
            return (
              G.TS.COMMUNITY_BASE_URL +
              "app/" +
              this.appid +
              "/eventcomments/" +
              this.forumTopicGID
            );
          {
            const e = u.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && e.vanity_url)
              return (
                G.TS.COMMUNITY_BASE_URL +
                "groups/" +
                e.vanity_url +
                "/eventcomments/" +
                this.forumTopicGID
              );
          }
          return (
            G.TS.COMMUNITY_BASE_URL +
            "gid/" +
            this.clanSteamID.ConvertTo64BitString() +
            "/eventcomments/" +
            this.forumTopicGID
          );
        }
        BIsEventInFuture() {
          return h.HD.GetTimeNowWithOverride() < (this.startTime ?? 0);
        }
        BHasEventEnded() {
          return (this.endTime ?? 0) < h.HD.GetTimeNowWithOverride();
        }
        UpdateVoteCount(e, t) {
          "up" == e
            ? (this.nVotesUp = (0, y.OQ)(
                this.nVotesUp + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ))
            : "down" == e &&
              (this.nVotesDown = (0, y.OQ)(
                this.nVotesDown + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ));
        }
        GetImageFromBeginningOfDescription(e, t) {
          let a = this.GetDescriptionWithFallback(e);
          if (a) {
            let e = a.indexOf("[img]");
            if (-1 !== e && e < t) {
              e += 5;
              let t = a.indexOf("[/img]", e);
              if (-1 != t) {
                let n = a.substring(e, t).trim();
                if (0 != n.length) return d.z.ReplacementTokenToClanImageURL(n);
              }
            }
          }
          return null;
        }
        GetAppIDOrReferenceAppID() {
          return this.appid
            ? this.appid
            : this.jsondata?.referenced_appids?.[0];
        }
        GetImageURLWithFallback(e, t, a = c.wI.full, n = !0) {
          const s = this.GetImageURL(e, t, a);
          if (s && s.trim().length > 0) return s;
          const i = E.A0.GetELanguageFallback(t);
          if (t != i) {
            const t = this.GetImageURL(e, i, a);
            if (t && t.trim().length > 0) return t;
          }
          const r = u.ac.GetClanInfoByClanAccountID(
            this.clanSteamID.GetAccountID(),
          );
          if ("capsule" == e) {
            let e = this.GetImageFromBeginningOfDescription(
              t,
              Number.MAX_VALUE,
            );
            if (e && (n || (0, A.ZF)(e))) return e;
            let a = this.appid;
            if (!a && r && ((r.is_creator_home && !r.is_ogg) || r.is_curator)) {
              if (!this.jsondata?.referenced_appids?.length)
                return r.avatar_full_url;
              a = this.jsondata.referenced_appids[0];
            }
            g.A.Get().QueueAppRequest(a, { include_assets: !0 });
            const s = g.A.Get().GetApp(a);
            return s &&
              s.BContainDataRequest({ include_assets: !0 }) &&
              s.GetAssets()
              ? s.GetAssets()?.GetMainCapsuleURL()
              : r?.avatar_full_url
                ? r.avatar_full_url
                : G.TS.STORE_ICON_BASE_URL + a + "/header.jpg";
          }
          return "background" == e &&
            r &&
            ((r.is_creator_home && !r.is_ogg) || r.is_curator)
            ? r.creator_page_bg_url
            : this.GetFallbackArtworkScreenshot();
        }
        GetFallbackArtworkScreenshot() {
          if (this.appid) {
            g.A.Get().QueueAppRequest(this.appid, { include_screenshots: !0 });
            const e = g.A.Get().GetApp(this.appid);
            let t = Number(
                this.bOldAnnouncement
                  ? this.AnnouncementGID
                  : null == this.GID
                    ? 0
                    : this.GID,
              ),
              a = e?.GetScreenshots(e.BHasAgeSafeScreenshots());
            return a && a.length > 1 ? ((t %= a.length), a[t]) : "";
          }
          if (this.clanSteamID && 36 != this.GetEventType()) {
            const e = u.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && ((e.is_creator_home && !e.is_ogg) || e.is_curator))
              return e.avatar_full_url;
          }
          return "";
        }
        BImageNeedScreenshotFallback(e, t) {
          let a = this.GetImageURL(e, t);
          if (!a || 0 == a.length) {
            const n = E.A0.GetELanguageFallback(t);
            t != n && (a = this.GetImageURL(e, n));
          }
          return !a || 0 == a.length;
        }
        GetImageForSizeAsArrayWithFallback(e, t, a, n) {
          let s = new Array();
          if (!this.BImageNeedScreenshotFallback(e, t)) {
            const n = this.GetImageURLWithFallback(e, t, a);
            if ((n && s.push(n), a != c.wI.full)) {
              const a = this.GetImageURLWithFallback(e, t, c.wI.full);
              a && s.push(a);
            }
          }
          const i = this.GetFallbackArtworkScreenshot();
          return i && !n && s.push(i), s;
        }
        GetDescriptionWithFallback(e) {
          const t = E.A0.GetELanguageFallback(e);
          return this.description.get(e) || this.description.get(t);
        }
        BIsImageSafeForAllAges(e, t) {
          const a = u.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            ),
            n = E.A0.GetELanguageFallback(t);
          return (
            null != this.GetImageURL(e, t) ||
            (t != n && null != this.GetImageURL(e, n)) ||
            (this.appid &&
              g.A.Get().GetApp(this.appid)?.BHasAgeSafeScreenshots()) ||
            (!this.appid &&
              a &&
              ((a.is_creator_home && !a.is_ogg) || a.is_curator))
          );
        }
        BIsVisibleEvent() {
          let e = Math.floor(h.HD.GetTimeNowWithOverride());
          return (
            this.visibility_state == x.k_EEventStateUnlisted ||
            (this.visibility_state == x.k_EEventStateVisible &&
              e > (this.visibilityStartTime ?? 0) &&
              ((this.visibilityEndTime ?? 0) < 10 ||
                e < (this.visibilityEndTime ?? 0)))
          );
        }
        BIsStagedEvent() {
          return this.visibility_state == x.k_EEventStateStaged;
        }
        BIsUnlistedEvent() {
          return this.visibility_state == x.k_EEventStateUnlisted;
        }
        GetStartTimeAndDateUnixSeconds() {
          return this.startTime ?? 0;
        }
        GetEndTimeAndDateUnixSeconds() {
          return this.endTime ?? 0;
        }
        GetPostTimeAndDateUnixSeconds() {
          return this.postTime ?? 0;
        }
        GetVisibilityStartTimeAndDateUnixSeconds() {
          return this.visibilityStartTime ?? 0;
        }
        BIsEventActionEnabled() {
          return (
            !!this.jsondata.action_end_time &&
            (this.jsondata.action_end_time > h.HD.GetTimeNowWithOverride() ||
              (1575396e3 == this.jsondata.action_end_time &&
                1606845600 > h.HD.GetTimeNowWithOverride()))
          );
        }
        BHasSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return !1;
          let t = this.jsondata.localized_subtitle[e];
          return null != t && "" != t;
        }
        GetSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return "";
          let t = this.jsondata.localized_subtitle[e];
          return t || "";
        }
        GetSubTitleWithLanguageFallback(e) {
          return this.jsondata
            ? E.NT.GetWithFallback(this.jsondata.localized_subtitle, e)
            : "";
        }
        GetSubTitleWithSummaryFallback(e) {
          return (
            E.NT.GetWithFallback(this.jsondata?.localized_subtitle, e) ||
            ue.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
          );
        }
        GetSummaryWithFallback(e, t) {
          return (
            E.NT.GetWithFallback(this.jsondata?.localized_summary, e) ||
            ue.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
          );
        }
        GetSummary(e) {
          return E.NT.Get(this.jsondata?.localized_summary ?? [], e);
        }
        BHasSummary(e) {
          return Boolean(this.GetSummary(e));
        }
        static GenerateSummaryFromText(e, t) {
          return e && 0 != e.trim().length
            ? ((e = (0, s.Yj)(e, [
                "img",
                "h1",
                "h2",
                "h3",
                "spoiler",
                "table",
                "previewyoutube",
                "looping_media",
                "roomeffect",
                "sticker",
              ])),
              (e = (0, s.zV)(e, ["p"], " ")),
              (e = (0, s.zV)(e)),
              (e = (0, I.aX)(e)),
              (0, I.bC)(e, t || 180))
            : "";
        }
        BHasTag(e) {
          return -1 != this.vecTags.indexOf(e);
        }
        BHasTagStartingWith(e) {
          return this.vecTags.some((t) => t?.startsWith(e));
        }
        BIsOGGEvent() {
          return Boolean(this.appid) && this.appid > 0;
        }
        BShowLibrarySpotlight(e) {
          if (!e) return Boolean(this.jsondata.library_spotlight);
          if (!this.jsondata.library_spotlight) return !1;
          if (_e.includes(this.type)) return !1;
          const t = new Date().getTime() / 1e3;
          return (
            !(me.includes(this.type) && this.endTime && t > this.endTime) &&
            !(this.startTime && t > this.startTime + 60 * b.Kp.PerDay)
          );
        }
        BShowLibrarySpotlightText() {
          return Boolean(this.jsondata.library_spotlight_text);
        }
        BHasBroadcastEnabled() {
          return !!this.jsondata.bBroadcastEnabled;
        }
        BEventCanShowBroadcastWidget(e) {
          if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
          const t = h.HD.GetTimeNowWithOverride(),
            a = this.endTime ? this.endTime : t + 3600;
          return (
            this.BHasBroadcastEnabled() &&
            !!this.jsondata.broadcast_whitelist &&
            this.jsondata.broadcast_whitelist.length > 0 &&
            (e || ((this.startTime ?? 0) - 600 <= t && t < a))
          );
        }
        BHasBroadcastForceBanner() {
          return !!this.jsondata.broadcast_force_banner;
        }
        BSaleShowBroadcastAtTopOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "broadcast" == e.section_type,
            )
          );
        }
        BSaleShowCuratorRecommendationAtBottomOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "curator_recommendation" == e.section_type,
            )
          );
        }
        GetBroadcastChatVisibility() {
          return this.jsondata.broadcastChatSetting || "hide";
        }
        GetBroadcastTitle(e) {
          return (
            E.NT.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
            (0, E.we)(
              this.jsondata.default_broadcast_title ??
                "#Broadcast_default_title_dev",
            )
          );
        }
        GetBroadcastWhitelist() {
          return this.jsondata.broadcast_whitelist ?? [];
        }
        GetBroadcastWhitelistAsSteamIDs() {
          return (
            this.jsondata.broadcast_whitelist?.map((e) =>
              l.b.InitFromAccountID(e).ConvertTo64BitString(),
            ) ?? []
          );
        }
        BIsBroadcastAccountIDWhiteListed(e) {
          return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
        }
        BHasSaleEnabled() {
          return !!this.jsondata.bSaleEnabled;
        }
        BHasSaleVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_vanity_id)
          );
        }
        GetSaleVanity() {
          return this.jsondata.sale_vanity_id ?? "";
        }
        BHasSaleUpdateLandingPageVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_update_landing_page_vanity_id)
          );
        }
        GetSaleUpdateLandingPageVanity() {
          return this.jsondata.sale_update_landing_page_vanity_id ?? "";
        }
        GetSaleURL() {
          if (!this.jsondata.bSaleEnabled) return null;
          if (this.jsondata.sale_update_landing_page_vanity_id)
            return (
              G.TS.STORE_BASE_URL +
              `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
            );
          if (!Boolean(this.jsondata.sale_vanity_id))
            return (
              G.TS.STORE_BASE_URL +
              "newshub/" +
              (this.appid
                ? "app/" + this.appid
                : "group/" + this.clanSteamID.GetAccountID()) +
              "/view/" +
              this.GID
            );
          if (this.BUsesContentHubForItemSource()) {
            const e = this.jsondata.source_content_hub;
            return e
              ? "string" == typeof e
                ? G.TS.STORE_BASE_URL + "category/" + e
                : "category" == e.type
                  ? G.TS.STORE_BASE_URL + "category/" + e.category
                  : "tags" == e.type
                    ? G.TS.STORE_BASE_URL +
                      "tags/" +
                      ((0, E.l4)() || "en") +
                      "/" +
                      e.tagid
                    : "freetoplay" == e.type
                      ? G.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                      : "earlyaccess" == e.type
                        ? G.TS.STORE_BASE_URL + "genre/Early%20Access/"
                        : G.TS.STORE_BASE_URL + e.type
              : G.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
          }
          if (!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath) {
            if (p.pF.BHasCreatorHomeLoaded(this.clanSteamID)) {
              const e = p.pF.GetCreatorHome(this.clanSteamID);
              return (
                e?.GetCreatorHomeURL("developer") +
                "sale/" +
                this.jsondata.sale_vanity_id
              );
            }
            return (
              G.TS.STORE_BASE_URL +
              "curator/" +
              this.clanSteamID.GetAccountID() +
              "/sale/" +
              this.jsondata.sale_vanity_id
            );
          }
          return G.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
        }
        BHasEmailEnabled() {
          return (
            !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
          );
        }
        GetSaleSections() {
          return this.jsondata.sale_sections ?? [];
        }
        GenerateDynamicSaleSections(e, t, a, n) {
          const s = [],
            i = {
              section_type: "unselected_empty",
              capsules: [],
              events: [],
              links: [],
              localized_label: [],
              default_label: "",
            };
          let r = 100009;
          return (
            e &&
              s.push({
                ...i,
                section_type: "footer_self_creator_home",
                unique_id: r++,
                curator_clan_id: this.clanSteamID.GetAccountID(),
              }),
            t &&
              s.push({
                ...i,
                section_type: "footer_browse_more",
                unique_id: r++,
              }),
            n &&
              s.push(this.GenerateDynamicCreatorHomeItemBrowserSection(r++, i)),
            a &&
              s.push({
                ...i,
                section_type: "footer_default_social_share",
                unique_id: r++,
              }),
            s
          );
        }
        GetSaleSectionIncludingFooterSections() {
          const e = this.jsondata?.sale_show_creator,
            t = this.jsondata.sale_browse_more_button,
            a =
              0 == this.GetSaleSectionsByType("social_share").length &&
              !this.jsondata.sale_default_social_media_disabled,
            n = 36 == this.GetEventType();
          return e || t || a || n
            ? [
                ...this.GetSaleSections(),
                ...this.GenerateDynamicSaleSections(!!e, !!t, a, n),
              ]
            : this.GetSaleSections();
        }
        GetSaleSectionByID(e) {
          if (e > T) {
            return this.GenerateDynamicSaleSections(!0, !0, !0, !0).find(
              (t) => t.unique_id == e,
            );
          }
          return this.jsondata.sale_sections?.find((t) => t.unique_id == e);
        }
        GetSaleSectionCount() {
          return this.jsondata.sale_sections?.length ?? 0;
        }
        GetSaleSectionsByType(e) {
          return (
            this.jsondata.sale_sections?.filter((t) => t.section_type == e) ??
            []
          );
        }
        GetLastUpdateTime() {
          return this.rtime32_last_modified ?? 0;
        }
        GetLastUpdaterSteamIDStr() {
          return this.last_update_steamid ?? "";
        }
        GetSaleSectionFirstMatchByType(e) {
          const t = this.jsondata.sale_sections?.length ?? 0;
          if (0 != t)
            for (let a = 0; a < t; ++a)
              if (this.jsondata.sale_sections[a].section_type === e)
                return this.jsondata.sale_sections[a];
        }
        static AccumulateCapsuleListIDs(e, t, a, n) {
          e &&
            e.forEach((e) => {
              if (e) {
                e.type && t.has(e.type) && ((n && !n(e.id)) || a.add(e.id));
              }
            });
        }
        GetSaleItemOfType(e, t) {
          if (!this.jsondata.sale_sections) return new Set();
          const a = new Set(e),
            n = new Set();
          if (
            ((0, v.wT)(
              !this.jsondata.bOptimizedForSize,
              "Cannot find all items in optimized json",
            ),
            this.jsondata.bOptimizedForSize && "dev" == G.TS.WEB_UNIVERSE)
          )
            throw new Error(
              "GetSaleOfItemType called on a truncated jsondata.",
            );
          return (
            this.jsondata.tagged_items?.forEach((e) => {
              ue.AccumulateCapsuleListIDs([e.capsule], a, n, t);
            }),
            this.jsondata.sale_sections.forEach((e) => {
              if (X(e.section_type))
                ue.AccumulateCapsuleListIDs(e.capsules, a, n, t);
              else if ("tabs" === e.section_type && e.tabs)
                for (const s of e.tabs)
                  ue.AccumulateCapsuleListIDs(s.capsules, a, n, t);
            }),
            n
          );
        }
        GetSaleItemCountOfType(e, t) {
          return this.GetSaleItemOfType(e, t).size;
        }
        GetSaleFeaturedAppsCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemosCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundlesCount(e) {
          return this.GetSaleItemCountOfType(["bundle"], e);
        }
        GetSaleFeaturedPackagesCount(e) {
          return this.GetSaleItemCountOfType(["sub"], e);
        }
        GetSaleFeaturedApps(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemos(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundles(e) {
          return this.GetSaleItemOfType(["bundle"], e);
        }
        GetSaleFeaturedPackages(e) {
          return this.GetSaleItemOfType(["sub"], e);
        }
        GetTaggedItems() {
          return this.jsondata.tagged_items || [];
        }
        BHasScheduleEnabled() {
          return this.jsondata.bScheduleEnabled;
        }
        GetEventType() {
          return this.type;
        }
        GetEventTypeAsString() {
          return (0, f.rG)(this.type);
        }
        GetCategoryAsString(e) {
          return this.BHasTag("steam_award_nomination_request")
            ? (0, E.we)("#PartnerEvent_SteamAwardNominations")
            : this.BHasTag("steam_award_vote_request")
              ? (0, E.we)("#PartnerEvent_SteamAwardVoteRequest")
              : this.BHasTag("steam_game_festival_artist_statement")
                ? (0, E.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                : this.BHasTag("steam_game_festival_office_hour")
                  ? (0, E.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                  : this.BHasTag("steam_game_festival_broadcast") ||
                      (this.BHasTagStartingWith("sale_nextfest_") &&
                        11 == this.type)
                    ? (0, E.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                    : this.BHasTag("vo_marketing_message") && e
                      ? (0, E.we)("#PartnerEvent_MM_MajorUpdate")
                      : this.GetEventTypeAsString();
        }
        GetAllTags() {
          return this.vecTags;
        }
        BMatchesAllTags(e) {
          let t = !0;
          return (
            e?.forEach((e) => {
              this.vecTags.includes(e) || (t = !1);
            }),
            t
          );
        }
        BAllowedSteamStoreSpotlight() {
          return Boolean(this.jsondata.store_spotlight);
        }
        BHasLibaryHomeSpotlight() {
          return Boolean(this.jsondata.library_home_spotlight);
        }
        BHasSaleProductBanners() {
          return (
            !!this.jsondata.bSaleEnabled &&
            (this.BHasSomeImage("product_banner") ||
              this.BHasSomeImage("product_banner_override"))
          );
        }
        GetSteamAwardCategory() {
          return this.jsondata.steam_award_category_suggestion ?? 0;
        }
        GetSteamAwardNomineeCategories() {
          return this.jsondata.steam_award_category_voteids ?? [];
        }
        BIsLockedToGameOwners() {
          return Boolean(
            this.jsondata.ownership_requirement_info?.bLockedToAppOwners,
          );
        }
        GetRequiredAppIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
            : [];
        }
        GetRequiredPackageIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
            : [];
        }
        BUseSubscriptionLayout() {
          return !!this.jsondata.sale_use_subscription_layout;
        }
        BIsLockedToPartnerAppRights() {
          return Boolean(
            this.jsondata.app_right_requirement_info?.bLockedToPartnerAppRights,
          );
        }
        GetRequiredPartnerAppRights() {
          return this.jsondata.app_right_requirement_info;
        }
        GetValveAccessLog() {
          return Array.isArray(this.jsondata.valve_access_log)
            ? this.jsondata.valve_access_log
            : [];
        }
        BUsesContentHubForItemSource() {
          return (
            this.jsondata.item_source_type === se.k_EContentHub &&
            Boolean(this.jsondata.source_content_hub)
          );
        }
        GetContentHubType() {
          return this.BUsesContentHubForItemSource()
            ? null == this.jsondata.source_content_hub
              ? "games"
              : "string" == typeof this.jsondata.source_content_hub
                ? "category"
                : this.jsondata.source_content_hub.type
            : void 0;
        }
        GetContentHubCategory() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? this.jsondata.source_content_hub
              : this.jsondata.source_content_hub.category;
        }
        GetContentHubTag() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? 0
              : this.jsondata.source_content_hub.tagid;
        }
        GetContentHub() {
          return "string" == typeof this.jsondata.source_content_hub
            ? { type: "category", category: this.jsondata.source_content_hub }
            : this.jsondata.source_content_hub;
        }
        BContentHubDiscountedOnly() {
          return !!this.jsondata.content_hub_discounted_only;
        }
        BIsBackgroundImageGroupingEnabled() {
          return !!this.jsondata.sale_background_img_groups?.enabled;
        }
        GetSalePageGroupDefinition() {
          return this.jsondata.sale_background_img_groups;
        }
        GetSalePageBackgroundImageGroupCount() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
            : 0;
        }
        GetAllSalePageGroups() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups
            : [];
        }
        GetSalePageBackgroundGroup(e) {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups?.[e]
            : void 0;
        }
        GetIncludedRealmList() {
          const e = new Array();
          return (
            this.BInRealmGlobal() && e.push(i.TU.k_ESteamRealmGlobal),
            this.BInRealmChina() && e.push(i.TU.k_ESteamRealmChina),
            (0, v.wT)(
              e.length > 0,
              `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
            ),
            e
          );
        }
        BIsValidForRealm(e) {
          return this.GetIncludedRealmList().includes(e);
        }
        BIsNextFest() {
          const e = this.jsondata.sale_vanity_id;
          return (
            new l.b(this.clanSteamID).GetAccountID() == _.GU &&
            e &&
            e.toLowerCase().startsWith("nextfest")
          );
        }
        GenerateDynamicCreatorHomeItemBrowserSection(e, t) {
          return {
            ...t,
            section_type: "sale_item_browser",
            unique_id: e,
            item_browse_section_data: {
              enable_search: !0,
              tabs: [
                "all_released",
                "popularpurchased",
                "all_upcoming",
                "discounted",
              ],
              prefer_assets_without_overrides: !1,
            },
            prefer_assets_without_overrides: !1,
            enable_faceted_browsing:
              (p.pF.GetCreatorHome(this.clanSteamID)?.GetAppIDList().length ??
                0) >= 7,
            min_capsule_matches_for_facet_values: 5,
            max_facet_values_for_facet: 5,
            background_gradient_top: "#0000006b",
            background_gradient_bottom: "#0000006b",
            facet_sort_order: 1,
            cap_item_count: 24,
            show_more_count: 48,
            facet_auto_generate_options: {
              only_facets: [
                { loc_token: "#App_Taxonomy_Survey_QSuperGenreTitle" },
                {
                  loc_token: "#AppTypeLabelTitle",
                  only_values: [
                    "#AppTypeLabel_game",
                    "#AppTypeLabel_dlc",
                    "#AppTypeLabel_demo",
                    "#AppTypeLabel_music",
                  ],
                  initially_selected_values: ["#AppTypeLabel_game"],
                },
                { loc_token: "#Sale_Preferences" },
              ],
              initially_expanded_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
              prioritized_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
            },
          };
        }
      }
      function pe(e) {
        return e?.replace(/[()]/g, "\\$&");
      }
      (0, n.Cg)([r.sH], ue.prototype, "GID", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "AnnouncementGID", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "forumTopicGID", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "type", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "appid", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "name", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "description", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "timestamp_loc_updated", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "startTime", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "endTime", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "visibilityStartTime", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "visibilityEndTime", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "m_nBuildID", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "m_strBuildBranch", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "postTime", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "visibility_state", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "broadcaster", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "jsondata", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "nCommentCount", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "nVotesUp", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "nVotesDown", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "bOldAnnouncement", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "announcementClanSteamID", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "loadedAllLanguages", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "bLoaded", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "deleteInProgress", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "vecTags", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "last_update_steamid", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "rtime32_last_modified", void 0),
        (0, n.Cg)(
          [r.sH],
          ue.prototype,
          "rtime32_last_solr_search_col_updated",
          void 0,
        ),
        (0, n.Cg)(
          [r.sH],
          ue.prototype,
          "rtime32_last_local_modification",
          void 0,
        ),
        (0, n.Cg)([r.sH], ue.prototype, "rtime32_moderator_reviewed", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "video_preview_type", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "video_preview_id", void 0),
        (0, n.Cg)([r.sH], ue.prototype, "m_overrideCurrentDay", void 0);
    },
    38390: (e, t, a) => {
      a.d(t, { B9: () => d, RR: () => l, hE: () => c });
      var n = a(90626),
        s = a(6379),
        i = a(4434),
        r = a(17720),
        o = (a(78327), a(17690), a(61859));
      a(41735), a(68797);
      function l(e) {
        const [t, a] = (0, n.useState)(() => s.O3.GetClanEventModel(e)),
          r = (0, i.m)("usePartnerEventByEventGID");
        return (
          (0, n.useEffect)(() => {
            e &&
              t?.GID != e &&
              (s.O3.Init(),
              s.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                [e],
                [],
                r,
              ).then((t) => {
                1 != t?.length || t[0].GID != e || r.token.reason || a(t[0]);
              }));
          }, [e, t, r]),
          t
        );
      }
      function d(e, t, a) {
        const [o, l] = (0, n.useState)(t ? s.O3.GetClanEventModel(t) : void 0),
          [d, c] = (0, n.useState)(!!e && !!t),
          [_, m] = (0, n.useState)(),
          [u, p] = (0, n.useState)(1),
          h = (0, i.m)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, n.useEffect)(() => {
            (async () => {
              try {
                if (o?.GID != t && t && e) {
                  s.O3.Init();
                  const n = r.b.InitFromClanID(e);
                  let i;
                  try {
                    i =
                      await s.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                        n,
                        t,
                        0,
                        a,
                      );
                  } catch (e) {
                    m(e?.response?.data?.err_msg),
                      p(e?.response?.data?.success || 2);
                  }
                  h.token.reason || l(i);
                }
              } finally {
                c(!1);
              }
            })();
          }, [e, t, o, a, h]),
          { eventModel: o, bLoading: d, sErrorMessage: _, eResult: u }
        );
      }
      function c(e) {
        let t = "" + e;
        const a = o.A0.GetELanguageFallback(e);
        return e != a && (t += "_" + a), t;
      }
    },
    27666: (e, t, a) => {
      a.d(t, { z: () => m });
      var n = a(7221),
        s = a(22837),
        i = a(3577),
        r = a(12611),
        o = a(17720),
        l = a(81393),
        d = a(68797),
        c = a(82817),
        _ = a(8527);
      const m = {
        GetBaseURL: () => `${_.TS.CLAN_CDN_ASSET_URL}images/`,
        GetBaseURLV2: () => `${_.TS.CLAN_CDN_ASSET_URL}locimages/`,
        ReplacementTokenToClanImageURL(e) {
          return (e = e.replace(r.lw, this.GetBaseURL())).replace(
            "http://",
            "https://",
          );
        },
        ExtractHashFromBBCodeURL(e) {
          const t =
            /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^\.]*)$/.exec(
              e,
            );
          return t?.groups
            ? [t.groups.filename, parseInt(t.groups.clanid)]
            : [void 0, void 0];
        },
        GetExtensionString: (e) =>
          (null != e.file_type ? (0, c.EG)(e.file_type) : null) ?? ".jpg",
        GetHashAndExt(e) {
          return e ? e.image_hash + this.GetExtensionString(e) : null;
        },
        GetThumbHashAndExt(e) {
          return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
        },
        GetHashFromHashAndExt(e) {
          let t = e.substring(e.lastIndexOf("."));
          return e.substring(0, e.length - t.length);
        },
        GetExtStringFromHashAndExt: (e) => e.substring(e.lastIndexOf(".")),
        GenerateURLFromHashAndExt(e, t, a = n.wI.full) {
          return this.GenerateURLFromHashAndExtAndLang(e, t, a, -1, void 0);
        },
        GenerateURLFromHashAndExtAndLang(e, t, a = n.wI.full, i, r) {
          e instanceof o.b && (e = e.GetAccountID());
          let l = this.GetBaseURL();
          const d = null != i && -1 != i;
          if (a != n.wI.full || d) {
            let n = t.substring(t.lastIndexOf(".")),
              o = t.substring(0, t.length - n.length);
            return d && 0 != i && "localized_image_group" == r
              ? l + e + "/" + o + "/" + (0, s.x6)((0, s.Lg)(i)) + n
              : l + e + "/" + o + a + n;
          }
          return l + e + "/" + t;
        },
        GetHashAndExtFromURL(e) {
          let t = this.GetBaseURL();
          return e?.startsWith(t)
            ? -1 == (e = e.substring(t.length)).indexOf("/")
              ? null
              : (e = e.substring(e.indexOf("/") + 1))
            : null;
        },
        GenerateEditableURLFromHashAndExt(e, t, a) {
          let n =
            _.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/showclanimage/?image_hash_and_ext=" +
            t;
          return a && (n += "&lang=" + a), n;
        },
        GetMimeType: (e) => (0, c.ab)(e),
        async AsyncGetImageResolution(e, t, a, n, s) {
          const i = t + this.GetExtensionString({ file_type: a }),
            r = this.GenerateEditableURLFromHashAndExt(e, i);
          return await this.AsyncGetImageResolutionInternal(r, n, s);
        },
        async AsyncGetImageResolutionInternal(e, t, a) {
          const n = (0, i.x0)();
          let s = new Image();
          (s.crossOrigin = "anonymous"),
            (s.onerror = (t) => {
              const s = { success: 2 };
              a ||
                ((s.err_msg =
                  "Load fail on url " +
                  e +
                  " with error: " +
                  (0, d.H)(t).strErrorMsg),
                console.error(s.err_msg)),
                (s.success = 2),
                n.resolve(s);
            }),
            (s.onload = () => {
              const t = { success: 2 };
              (t.width = s.width),
                (t.height = s.height),
                (0, l.wT)(
                  t.width > 0 && t.height > 0,
                  "unexpected image resolution discovered for strURL: " + e,
                ),
                (t.success = 1),
                n.resolve(t);
            }),
            (s.src = e),
            t.token.promise.catch(() => {
              const e = { success: 2 };
              return (s.onload = () => {}), (e.success = 52), e;
            });
          const r = new Promise((e, t) => setTimeout(() => t(), 1e4));
          let o;
          try {
            o = await Promise.race([r, n.promise]);
          } catch {
            o = { success: 16, err_msg: "We timed out processing images" };
          }
          return o;
        },
        BIsClanImageVideo: (e) => 4 == e.file_type || 5 == e.file_type,
      };
    },
    68359: (e, t, a) => {
      a.d(t, { R: () => u });
      var n = a(34629),
        s = a(41735),
        i = a.n(s),
        r = a(14947),
        o = a(17720),
        l = a(62490),
        d = a(78327),
        c = a(7221),
        _ = a(27666);
      class m {
        m_curLocImageGroup = null;
        m_curLocImageGroupType = null;
        constructor() {
          (0, r.Gn)(this),
            "dev" == d.TS.WEB_UNIVERSE && (window.g_ClanImageStore = this);
        }
        static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, a, n) {
          let s =
              d.TS.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/hasclanimagefile",
            r = { image_hash_and_ext: a, lang: "" + n };
          return (
            1 ==
            (await i().get(s, { params: r, cancelToken: e && e.token })).data
              .success
          );
        }
        SetPrimaryImageForImageGroup(e, t) {
          (this.m_curLocImageGroup &&
            this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
            t == this.m_curLocImageGroupType) ||
            ((this.m_curLocImageGroup = {
              primaryImage: e,
              localized_images: [],
            }),
            (this.m_curLocImageGroupType = t),
            (this.m_curLocImageGroup.localized_images = (0, l.$Y)(
              this.m_curLocImageGroup.localized_images,
              31,
              null,
            )));
        }
        GetPrimaryImageForImageGroup() {
          return this.m_curLocImageGroup?.primaryImage;
        }
        ClearImageGroup() {
          (this.m_curLocImageGroup = null),
            (this.m_curLocImageGroupType = null);
        }
        GetLocalizedImageGroupForEdit() {
          return this.m_curLocImageGroup;
        }
        GetLocalizedImageGroupForEditAsURL(e, t) {
          if (this.m_curLocImageGroup) {
            let a = this.m_curLocImageGroup.primaryImage;
            return this.m_curLocImageGroup.localized_images[t]
              ? this.m_curLocImageGroup.localized_images[t]
              : _.z.GenerateURLFromHashAndExt(e, _.z.GetHashAndExt(a) ?? "");
          }
          return null;
        }
        async DetermineAvailableLocalizationForGroup(e) {
          if (!this.m_curLocImageGroup) return;
          const t = this.m_curLocImageGroup.primaryImage,
            a = o.b.InitFromClanID(t.clanAccountID),
            n = _.z.GetHashAndExt(t) ?? "",
            s = [];
          for (let t = 0; t < 31; ++t)
            s.push(m.BDoesClanImageFileExistsOnCDNOrOrigin(e, a, n, t));
          const i = await Promise.all(s);
          (0, r.h5)(() => {
            for (let e = 0; e < 31; ++e)
              i[e] &&
                (this.m_curLocImageGroup.localized_images[e] =
                  _.z.GenerateURLFromHashAndExtAndLang(
                    a,
                    n,
                    c.wI.full,
                    e,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
          });
        }
        SetLocalizedImageGroupAtLang(e, t, a) {
          this.m_curLocImageGroup &&
            (this.m_curLocImageGroup.localized_images[e] = a
              ? _.z.GenerateURLFromHashAndExtAndLang(
                  t,
                  a,
                  c.wI.full,
                  e,
                  this.m_curLocImageGroupType ?? void 0,
                )
              : null);
        }
        AddLocalizeImageUploaded(e, t) {
          if (!this.m_curLocImageGroup) return;
          let a = this.m_curLocImageGroup.primaryImage;
          if (a?.image_hash == e) {
            const e = o.b.InitFromClanID(a.clanAccountID),
              n = _.z.GetHashAndExt(a);
            n &&
              (this.m_curLocImageGroup.localized_images[t] =
                _.z.GenerateURLFromHashAndExtAndLang(
                  e,
                  n,
                  c.wI.full,
                  t,
                  this.m_curLocImageGroupType ?? void 0,
                ));
          }
        }
        GetAllLocalizedGroupImages() {
          return (
            (this.m_curLocImageGroup &&
              this.m_curLocImageGroup.localized_images) ||
            []
          );
        }
        GetAllLocalizedGroupImageHashAndExts() {
          return this.GetAllLocalizedGroupImages()
            .filter(Boolean)
            .map((e) => _.z.GetHashAndExtFromURL(e));
        }
      }
      (0, n.Cg)([r.sH], m.prototype, "m_curLocImageGroup", void 0);
      const u = new m();
    },
    6379: (e, t, a) => {
      a.d(t, { ZQ: () => S, O3: () => A, MX: () => T, dB: () => w });
      var n = a(34629),
        s = a(41735),
        i = a.n(s),
        r = a(14947),
        o = a(31561),
        l = a(22837),
        d = a(62641),
        c = a(17720),
        _ = a(55563),
        m = a(62490),
        u = a(81393),
        p = a(68797),
        h = a(6144),
        g = a(41338),
        v = a(78327),
        E = a(90626),
        y = a(84933),
        f = a(38390);
      function I(e) {
        return (
          (null == e.gid || null == e.gid || "0" == e.gid) &&
          !!e.announcement_body &&
          "0" != e.announcement_body.gid
        );
      }
      function b(e) {
        return I(e) ? d.cB + e.announcement_body?.gid : e.gid;
      }
      class G {
        appid;
        date;
        can_play;
        playtime;
        announcementid;
        constructor(e) {
          (0, u.wT)(
            "number" == typeof e.appid,
            "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
          ),
            (this.appid = e.appid),
            (this.date = e.date),
            (this.can_play = e.can_play),
            (this.playtime = e.playtime),
            (this.announcementid = e.announcementid);
        }
      }
      class S {
        constructor(e = !1) {
          (0, r.Gn)(this), (this.m_bOnlySummary = e);
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
        m_QueuedEventTimeout = new h.LU();
        m_PendingInfoPromise;
        m_PendingInfoResolve;
        m_bLoadedFromConfig = !1;
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, _.v)("PartnerEventStore");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                if (e) {
                  let t = new c.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    this.m_mapExistingEvents.set(
                      d.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let t = (0, v.Fd)("partnereventstore", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((e) => {
                if (e) {
                  let t = new c.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    !this.m_mapExistingEvents.has(
                      d.cB + e.announcement_body.gid,
                    ) &&
                    this.m_mapExistingEvents.set(
                      d.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let a = (0, v.Fd)("partnereventadjacents", "application_config");
            this.ValidateAdjacentEvent(a) &&
              (("dev" != v.TS.WEB_UNIVERSE && "beta" != v.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: CPartnerEventStore loading adjacents gids payload: " +
                    a.length,
                ),
              a.forEach((e) => {
                e &&
                  this.m_mapAdjacentAnnouncementGIDs.set(
                    e.announcementGID,
                    e.adjacents,
                  );
              })),
              "dev" == v.TS.WEB_UNIVERSE &&
                console.log(
                  "PartnerEventStore Loaded events: " +
                    this.m_mapExistingEvents.size +
                    " with adjacent info: " +
                    this.m_mapExistingEvents.size,
                ),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              t[0] &&
              "object" == typeof t[0]
            ) &&
            ("string" == typeof t[0].gid ||
              ("object" == typeof t[0].announcement_body &&
                "string" == typeof t[0].announcement_body.gid))
          );
        }
        ValidateAdjacentEvent(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].announcementGID &&
              Array.isArray(t[0].adjacents) &&
            (0 == t[0].adjacents.length || "string" == typeof t[0].adjacents[0])
          );
        }
        GetPartnerEventChangeCallback(e) {
          let t = this.m_mapEventUpdateCallback.get(e);
          return (
            t ||
              (this.m_mapEventUpdateCallback.set(e, new h.lu()),
              (t = this.m_mapEventUpdateCallback.get(e))),
            t
          );
        }
        GetClanEventGIDs(e) {
          let t = this.m_mapClanToGIDs.get(e.GetAccountID());
          return t || [];
        }
        GetClanEventGIDsForApp(e) {
          let t = this.m_mapAppIDToGIDs.get(e);
          return t || [];
        }
        GetClanEventModel(e) {
          return this.m_mapExistingEvents.get(e);
        }
        BHasClanEventModel(e) {
          return this.m_mapExistingEvents.has(e);
        }
        BHasClanAnnouncementGID(e) {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            const t = this.m_mapAnnouncementBodyToEvent.get(e);
            return !!t && this.BHasClanEventModel(t);
          }
          return !1;
        }
        GetClanEventGIDFromAnnouncementGID(e) {
          return this.m_mapAnnouncementBodyToEvent.get(e);
        }
        GetClanEventFromAnnouncementGID(e) {
          const t = this.m_mapAnnouncementBodyToEvent.get(e);
          return t ? this.m_mapExistingEvents.get(t) : void 0;
        }
        DefaultEventSortFunction(e, t) {
          return e.startTime == t.startTime
            ? (0, g.kd)(e.GID ?? "", t.GID ?? "")
            : (t.startTime ?? 0) - (e.startTime ?? 0);
        }
        RegisterClanEvents(e) {
          if (e)
            for (const t of e) {
              const e = b(t);
              if (!this.m_mapExistingEvents.has(e)) {
                const e = new c.b(t.clan_steamid);
                this.InsertEventModelFromClanEventData(e, t);
              }
            }
        }
        GetRankedClanEvents(e, t) {
          let a = [],
            n = e
              ? this.GetClanEventGIDs(e)
              : t
                ? this.GetClanEventGIDsForApp(t)
                : void 0;
          if (!n || 0 == n.length) return a;
          for (let e of n) {
            let t = this.GetClanEventModel(e);
            t && a.push(t);
          }
          return a.sort(this.DefaultEventSortFunction), a;
        }
        InsertEventModelFromClanEventData(e, t) {
          const a = (function (e, t) {
            let a = new d.lh();
            if (
              ((a.clanSteamID = e),
              (0, u.wT)(
                a.clanSteamID && a.clanSteamID.BIsValid(),
                "Invalid Clan SteamID: " +
                  a.clanSteamID.ConvertTo64BitString() +
                  " " +
                  v.TS.EUNIVERSE,
              ),
              (a.GID = b(t)),
              (a.bOldAnnouncement = I(t)),
              (a.appid = t.appid ?? 0),
              (a.createTime = t.rtime_created),
              (a.startTime = t.rtime32_start_time),
              (a.endTime = t.rtime32_end_time),
              (a.visibilityStartTime = t.rtime32_visibility_start),
              (a.visibilityEndTime = t.rtime32_visibility_end),
              (a.loadedAllLanguages = !1),
              (a.type = t.event_type ?? 1),
              (a.nVotesUp = t.votes_up ?? 0),
              (a.nVotesDown = t.votes_down ?? 0),
              (a.comment_type = t.comment_type),
              (a.gidfeature = t.gidfeature),
              (a.gidfeature2 = t.gidfeature2),
              (a.featured_app_tagid = t.featured_app_tagid),
              (a.vecTags = new Array()),
              (a.creator_steamid = t.creator_steamid),
              (a.last_update_steamid = t.last_update_steamid),
              (a.rtime32_last_modified = t.rtime32_last_modified),
              (a.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
              (a.video_preview_type = t.video_preview_type),
              (a.video_preview_id = t.video_preview_id),
              (a.has_live_stream = t.has_live_stream),
              (a.live_stream_viewer_count = t.live_stream_viewer_count),
              (a.m_nBuildID = t.build_id),
              (a.m_strBuildBranch = t.build_branch),
              t.announcement_body)
            ) {
              let e = t.announcement_body;
              (a.AnnouncementGID = e.gid),
                a.name.set(e.language, e.headline),
                a.description.set(e.language, e.body),
                a.timestamp_loc_updated.clear(),
                (a.forumTopicGID = e.forum_topic_id),
                (a.nCommentCount = e.commentcount),
                (a.postTime = e.posttime),
                a.bOldAnnouncement && !e.hidden && (a.startTime = e.posttime),
                (a.announcementClanSteamID = new c.b(e.clanid)),
                e.tags &&
                  e.tags.length > 0 &&
                  e.tags.forEach((e) => a.vecTags.push(e)),
                !a.rtime32_last_solr_search_col_updated &&
                  a.rtime32_last_modified &&
                  ((a.rtime32_last_solr_search_col_updated =
                    a.rtime32_last_modified),
                  (a.rtime32_last_modified = e.updatetime));
            } else
              (a.AnnouncementGID = "0"),
                (a.forumTopicGID = t.forum_topic_id),
                a.name.clear(),
                a.description.clear(),
                a.timestamp_loc_updated.clear(),
                (a.postTime = t.rtime32_start_time),
                (a.nCommentCount = t.comment_count ?? 0),
                a.name.set(0, t.event_name ?? ""),
                a.description.set(0, t.event_notes ?? "");
            t.broadcaster_accountid &&
              (a.broadcaster = new c.b(t.broadcaster_accountid));
            const n = d.DJ;
            try {
              a.jsondata = {
                ...n,
                ...(t.jsondata ? JSON.parse(t.jsondata) : void 0),
              };
            } catch (e) {
              const t = (0, p.H)(e);
              throw (
                (console.error(
                  "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                    t.strErrorMsg,
                  t,
                ),
                e)
              );
            }
            if (
              ((a.jsondata.localized_capsule_image = (0, m.$Y)(
                a.jsondata.localized_capsule_image || [],
                31,
                null,
              )),
              (a.jsondata.localized_title_image = (0, m.$Y)(
                a.jsondata.localized_title_image || [],
                31,
                null,
              )),
              (a.jsondata.localized_subtitle = (0, m.$Y)(
                a.jsondata.localized_subtitle || [],
                31,
                null,
              )),
              (a.jsondata.localized_summary = (0, m.$Y)(
                a.jsondata.localized_summary || [],
                31,
                null,
              )),
              (a.jsondata.localized_broadcast_title = (0, m.$Y)(
                a.jsondata.localized_broadcast_title || [],
                31,
                null,
              )),
              (a.jsondata.localized_broadcast_left_image = (0, m.$Y)(
                a.jsondata.localized_broadcast_left_image || [],
                31,
                null,
              )),
              (a.jsondata.localized_broadcast_right_image = (0, m.$Y)(
                a.jsondata.localized_broadcast_right_image || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_header = (0, m.$Y)(
                a.jsondata.localized_sale_header || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_overlay = (0, m.$Y)(
                a.jsondata.localized_sale_overlay || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_product_banner = (0, m.$Y)(
                a.jsondata.localized_sale_product_banner || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_product_mobile_banner = (0, m.$Y)(
                a.jsondata.localized_sale_product_mobile_banner || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_logo = (0, m.$Y)(
                a.jsondata.localized_sale_logo || [],
                31,
                null,
              )),
              void 0 !== a.jsondata.sale_num_headers &&
                a.jsondata.localized_per_day_sales_header)
            )
              for (let e = 0; e < a.jsondata.sale_num_headers; ++e)
                a.jsondata.localized_per_day_sales_header[e] = (0, m.$Y)(
                  a.jsondata.localized_per_day_sales_header[e],
                  31,
                  null,
                );
            return (
              a.jsondata.sale_sections &&
                a.jsondata.sale_sections.forEach((e, t) => {
                  e.localized_label &&
                    (e.localized_label = (0, m.$Y)(
                      e.localized_label,
                      31,
                      null,
                    )),
                    "trailercarousel" === e.section_type &&
                      (e.show_as_carousel = !1),
                    (a.jsondata.sale_sections[t] = { ...d.G6, ...e });
                }),
              a.jsondata.email_setting &&
                a.jsondata.email_setting.sections &&
                a.jsondata.email_setting.sections.forEach((e) => {
                  void 0 !== e.localized_headline &&
                    null !== e.localized_headline &&
                    (e.localized_headline = (0, m.$Y)(
                      e.localized_headline,
                      31,
                      null,
                    )),
                    void 0 !== e.localized_body &&
                      null !== e.localized_body &&
                      (e.localized_body = (0, m.$Y)(
                        e.localized_body,
                        31,
                        null,
                      )),
                    void 0 !== e.localized_image &&
                      null !== e.localized_image &&
                      (e.localized_image = (0, m.$Y)(
                        e.localized_image,
                        31,
                        null,
                      ));
                }),
              a.jsondata.localized_title_image.forEach((e, t) => {
                if (null != e && "http" == e.substr(0, 4)) {
                  let n = e.lastIndexOf("/"),
                    s = e.substr(n + 1);
                  a.jsondata.localized_title_image[t] = s;
                }
              }),
              t.published
                ? t.unlisted
                  ? (a.visibility_state = d.zv.k_EEventStateUnlisted)
                  : t.hidden
                    ? (a.visibility_state = d.zv.k_EEventStateStaged)
                    : (a.visibility_state = d.zv.k_EEventStateVisible)
                : (a.visibility_state = d.zv.k_EEventStateUnpublished),
              a
            );
          })(e, t);
          return (
            this.InsertUniqueEventGID(e.GetAccountID(), a.appid, a.GID),
            this.m_mapExistingEvents.set(a.GID, a),
            a.AnnouncementGID &&
              a.AnnouncementGID.length > 1 &&
              this.m_mapAnnouncementBodyToEvent.set(a.AnnouncementGID, a.GID),
            (a.bLoaded = !0),
            a
          );
        }
        HelperInitializeNumSalesHeaderArray(e) {
          if ((e.jsondata.sale_num_headers ?? 0) > 1) {
            e.jsondata.localized_per_day_sales_header = [];
            for (let t = 0; t < (e.jsondata.sale_num_headers ?? 0); ++t)
              e.jsondata.localized_per_day_sales_header.push(
                (0, m.$Y)([], 31, null),
              );
            e.m_overrideCurrentDay = 0;
          } else e.m_overrideCurrentDay = void 0;
        }
        GetAllClanEvents(e) {
          let t = new Array();
          return (
            this.m_mapClanToGIDs.has(e.GetAccountID()) &&
              this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
                let a = this.m_mapExistingEvents.get(e);
                a && t.push(a);
              }),
            t
          );
        }
        async QueueLoadPartnerEvent(e, t, a) {
          if (this.m_mapExistingEvents.has(t)) return;
          this.m_rgQueuedEventsClanIDs.push(e),
            this.m_rgQueuedEventsUniqueIDs.push(t),
            this.m_rgQueuedEventsForEditFlags.push(Boolean(a)),
            this.m_PendingInfoPromise ||
              (this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              ));
          const n = this.m_PendingInfoPromise,
            s = () => {
              const e = this.m_PendingInfoResolve,
                t = this.m_rgQueuedEventsClanIDs,
                a = this.m_rgQueuedEventsUniqueIDs,
                n = this.m_rgQueuedEventsForEditFlags;
              (this.m_PendingInfoPromise = void 0),
                (this.m_rgQueuedEventsClanIDs = new Array()),
                (this.m_rgQueuedEventsUniqueIDs = new Array()),
                (this.m_rgQueuedEventsForEditFlags = new Array()),
                this.InternalLoadPartnerEventList(t, a, n).then(() => e?.());
            };
          if (this.m_rgQueuedEventsClanIDs.length >= 30)
            this.m_QueuedEventTimeout.Cancel(), s();
          else if (!this.m_QueuedEventTimeout.IsScheduled()) {
            const e = 50;
            this.m_QueuedEventTimeout.Schedule(e, s);
          }
          return n;
        }
        async InternalLoadPartnerEventList(e, t, a) {
          let n = a.some((e) => e);
          const s =
              v.TS.STORE_BASE_URL +
              (n
                ? "events/ajaxgeteventdetailsforedit/"
                : "events/ajaxgeteventdetails/"),
            r = (0, f.hE)((0, l.sf)(v.TS.LANGUAGE)),
            o = {
              clanid_list: e.join(","),
              uniqueid_list: t.join(","),
              lang_list: r,
              origin: self.origin,
            };
          try {
            const e = await i().get(s, { params: o, withCredentials: n });
            this.RegisterClanEvents(e.data.events);
          } catch (e) {
            let t = (0, p.H)(e);
            console.error("GetEventDetails hit error " + t.strErrorMsg, t);
          }
        }
        async LoadAdjacentPartnerEvents(e, t, a, n, s, i, r) {
          return this.InternalLoadAdjacentPartnerEvents(
            e,
            void 0,
            t,
            a,
            n,
            s,
            i,
            r,
          );
        }
        async LoadAdjacentPartnerEventsByAnnouncement(e, t, a, n, s, i, r) {
          return this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e,
            t,
            a,
            n,
            s,
            i,
            r,
          );
        }
        async LoadAdjacentPartnerEventsByEvent(e, t, a, n, s, i, r) {
          const o = t || e.clanSteamID;
          return e.bOldAnnouncement
            ? this.InternalLoadAdjacentPartnerEvents(
                void 0,
                e.AnnouncementGID,
                o,
                a,
                n,
                s,
                i,
                r,
              )
            : this.InternalLoadAdjacentPartnerEvents(
                e.GID,
                e.AnnouncementGID,
                o,
                a,
                n,
                s,
                i,
                r,
              );
        }
        async InternalLoadAdjacentPartnerEvents(e, t, a, n, s, o, d, _) {
          let m = new Array();
          if (t && this.m_mapAdjacentAnnouncementGIDs.has(t)) {
            let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
              a = new Array();
            if (
              (e?.forEach((e) => {
                if (this.m_mapAnnouncementBodyToEvent.has(e)) {
                  let t = this.m_mapAnnouncementBodyToEvent.get(e);
                  t &&
                    this.m_mapExistingEvents.get(t) &&
                    m.push(this.m_mapExistingEvents.get(t));
                } else a.push(e);
              }),
              a.length > 0)
            ) {
              (
                await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  void 0,
                  a,
                  _,
                )
              ).forEach((e) => m.push(e));
            }
          } else {
            let h =
              v.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
            const g = (0, f.hE)((0, l.sf)(v.TS.LANGUAGE));
            d?.only_summaries &&
              !this.m_bOnlySummary &&
              ((0, u.wT)(
                this.m_bOnlySummary,
                "Only Summary: Incorrect parameter passed in, unsetting",
              ),
              (d.only_summaries = void 0));
            let E = {
              clan_accountid: a ? a.GetAccountID() : void 0,
              appid: n,
              count_before: s,
              count_after: o,
              gidevent: e,
              gidannouncement: t,
              lang_list: g,
              rtime_oldestevent: d ? d.rtime_oldestevent : void 0,
              require_tags:
                d && d.require_tags ? d.require_tags.join(",") : void 0,
              exclude_tags:
                d && d.exclude_tags ? d.exclude_tags.join(",") : void 0,
              require_no_tags: d ? d.require_no_tags : void 0,
              event_type_filter:
                d && d.event_type_filter
                  ? d.event_type_filter.join(",")
                  : void 0,
              exclude_event_types:
                d && d.exclude_event_types
                  ? d.exclude_event_types.join(",")
                  : void 0,
              only_summaries: d && !!d.only_summaries,
              origin: self.origin,
            };
            try {
              let s = await i().get(h, { params: E, cancelToken: _?.token });
              if (1 == s?.data?.success)
                (0, r.h5)(() => {
                  for (let e of s.data.events) {
                    let t = b(e);
                    if (!this.m_mapExistingEvents.has(t)) {
                      let t = new c.b(e.clan_steamid);
                      this.InsertEventModelFromClanEventData(a || t, e);
                    }
                    m.push(this.m_mapExistingEvents.get(t));
                  }
                  if (0 == m.length)
                    if (e && this.BHasClanEventModel(e))
                      this.m_mapExistingEvents.get(e) &&
                        m.push(this.m_mapExistingEvents.get(e));
                    else if (t && this.BHasClanAnnouncementGID(t)) {
                      const e = this.GetClanEventFromAnnouncementGID(t);
                      e && m.push(e);
                    }
                });
              else {
                let e = (0, p.H)(s?.data);
                console.error(
                  "LoadAdjacentPartnerEvents Success but empty response:" +
                    n +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    e.strErrorMsg,
                  e,
                );
              }
            } catch (e) {
              let t = (0, p.H)(e);
              52 != t.errorCode &&
                console.error(
                  "LoadAdjacentPartnerEvents hit error on appid:" +
                    n +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    t.strErrorMsg,
                  t,
                );
            }
          }
          return m;
        }
        async LoadPartnerEventsPageable(e, t, a = 0, n = 0, s) {
          let o = new Array(),
            l = v.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
            d = {
              clan_accountid: e ? e.GetAccountID() : void 0,
              appid: t,
              offset: a,
              count: n,
              l: v.TS.LANGUAGE,
              origin: self.origin,
              exclude_tags: s && s.length > 0 ? s?.join(",") : void 0,
            };
          try {
            let e = await i().get(l, { params: d });
            (0, r.h5)(() => {
              for (let t of e.data.events) {
                let e = b(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new c.b(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                o.push(this.m_mapExistingEvents.get(e));
              }
            });
          } catch (e) {
            console.error(
              "LoadClanEventInDateRange hit error " + (0, p.H)(e).strErrorMsg,
            );
          }
          return o;
        }
        async GetBestEventsForCurrentUser(e, t, a) {
          let n = new Array(),
            s = {
              l: v.TS.LANGUAGE,
              include_steam_blog: !0,
              filter_to_played_within_days: e,
              include_only_game_updates: t,
            },
            o = v.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
            l = await i().get(o, {
              params: s,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
          if (!l.data?.events) {
            let e = l.data?.err_msg || "";
            throw new Error(
              `GetBestEventsForCurrentUser request failed (${e})`,
            );
          }
          return (
            (0, r.h5)(() => {
              for (let e of l.data.events) {
                let t = b(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new c.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                let a = {
                  nAppPriority: e.nAppPriority,
                  bPossibleTakeOver: e.bPossibleTakeOver,
                  event: this.m_mapExistingEvents.get(t),
                };
                n.push(a);
              }
            }),
            n
          );
        }
        async LoadImportantEventsAroundToday(e, t, a, n, s, o) {
          let l = new Array(),
            d = new Array();
          d.push({ priority: 0, appids: t }),
            a && d.push({ priority: 1, appids: a }),
            n && d.push({ priority: 2, appids: n });
          let _ = {
              count: e,
              strAppIDPriority: JSON.stringify({ prioritized_apps: d }),
              filterToEventTypes: o ? o.toString() : "",
              l: v.TS.LANGUAGE,
            },
            m = v.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
            u = await i().get(m, {
              params: _,
              withCredentials: !0,
              cancelToken: s.token,
            });
          return (
            (0, r.h5)(() => {
              for (let e of u.data.events) {
                let t = b(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new c.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                l.push(this.m_mapExistingEvents.get(t));
              }
            }),
            l
          );
        }
        InsertUniqueEventGID(e, t, a) {
          let n = this.m_mapClanToGIDs.get(e);
          n ||
            (this.m_mapClanToGIDs.set(e, new Array()),
            (n = this.m_mapClanToGIDs.get(e)));
          let s = this.m_mapAppIDToGIDs.get(t);
          s ||
            (this.m_mapAppIDToGIDs.set(t, new Array()),
            (s = this.m_mapAppIDToGIDs.get(t))),
            -1 == n.indexOf(a) && (n.push(a), s.push(a));
        }
        ResetModel() {}
        async DeleteClanEvent(e, t) {
          this.m_mapExistingEvents.has(t) &&
            (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
          let a = new URLSearchParams();
          a.append("sessionid", v.TS.SESSIONID),
            a.append("bDelete", "1"),
            a.append("gid", t);
          const n = await i().post(
            v.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/ajaxcreateupdatedeletepartnerevents/",
            a,
          );
          return this.RemoveGIDFromList(e, t), n.data;
        }
        RemoveGIDFromList(e, t) {
          if (
            (this.m_mapExistingEvents.delete(t),
            this.m_mapClanToGIDs.has(e.GetAccountID()))
          ) {
            let a = this.m_mapClanToGIDs.get(e.GetAccountID()),
              n = a.indexOf(t);
            n >= 0 && a.splice(n, 1);
          }
        }
        FlushEventFromCache(e, t) {
          if (e && this.m_mapExistingEvents.has(e)) {
            if (!t) {
              t = this.m_mapExistingEvents.get(e).AnnouncementGID;
            }
            this.m_mapExistingEvents.delete(e);
          }
          if (
            t &&
            (this.m_mapExistingEvents.has(d.cB + t) &&
              this.m_mapExistingEvents.delete(d.cB + t),
            this.m_mapAnnouncementBodyToEvent.has(t))
          ) {
            const e = this.m_mapAnnouncementBodyToEvent.get(t);
            e &&
              this.m_mapExistingEvents.has(e) &&
              this.m_mapExistingEvents.delete(e),
              this.m_mapAnnouncementBodyToEvent.delete(t);
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
          e,
          t,
          a,
          n,
          s,
          r = !1,
        ) {
          let o = (0, f.hE)(r ? 0 : (0, l.sf)(v.TS.LANGUAGE)),
            d = {
              appid: t,
              clan_accountid: e ? e.GetAccountID() : void 0,
              announcement_gid: n,
              event_gid: a,
              lang_list: o,
              last_modified_time: s || 0,
              origin: self.origin,
              for_edit: r,
              only_summary: this.m_bOnlySummary,
            },
            _ = null,
            m = null;
          if (r) {
            const a = (0, v.yK)();
            "community" === a
              ? ((m = v.TS.COMMUNITY_BASE_URL),
                (m += e ? "gid/" + e.ConvertTo64BitString() : "ogg/" + t),
                (m += "/"))
              : (m =
                  "partnerweb" === a
                    ? v.TS.PARTNER_BASE_URL + "sales/"
                    : v.TS.STORE_BASE_URL + "events/"),
              (m += "ajaxgetpartnereventforedit"),
              (_ = { params: d, withCredentials: !0 });
          } else
            (m = v.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
              (_ = { params: d, withCredentials: !1 });
          let p = (await i().get(m, _)).data.event,
            h = b(p);
          if (
            !this.m_mapExistingEvents.has(h) ||
            (this.m_mapExistingEvents.get(h).rtime32_last_modified ?? 0) <
              (p.rtime32_last_modified ?? 0) ||
            (this.m_mapExistingEvents.get(h).rtime32_moderator_reviewed ?? 0) <
              (p.rtime_mod_reviewed ?? 0)
          ) {
            (0, u.wT)(
              p.clan_steamid,
              "ClanSteamID is missing from data we received",
            );
            let e = new c.b(p.clan_steamid);
            this.InsertEventModelFromClanEventData(e, p);
          }
          return this.m_mapExistingEvents.get(h);
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
          e,
          t,
          a,
          n,
          s,
          i,
        ) {
          if (a && this.m_mapExistingEvents.has(a))
            return this.m_mapExistingEvents.get(a);
          if (n) {
            if (this.m_mapExistingEvents.has(d.cB + n))
              return this.m_mapExistingEvents.get(d.cB + n);
            if (this.m_mapAnnouncementBodyToEvent.has(n)) {
              const e = this.m_mapAnnouncementBodyToEvent.get(n);
              if (e && this.m_mapExistingEvents.has(e))
                return this.m_mapExistingEvents.get(e);
            }
          }
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            t,
            a,
            n,
            s,
            i,
          );
        }
        async LoadPartnerEventFromAnnoucementGID(e, t, a, n) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            void 0,
            t,
            a,
            n,
          );
        }
        async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, a, n) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            void 0,
            t,
            a,
            n,
          );
        }
        async LoadPartnerEventFromClanEventGID(e, t, a, n) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            t,
            void 0,
            a,
            n,
          );
        }
        async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, a, n) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            t,
            void 0,
            a,
            n,
          );
        }
        async LoadPartnerEventGeneric(e, t, a, n, s) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            t,
            a,
            n,
            s,
          );
        }
        async LoadHiddenPartnerEvent(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            t,
            void 0,
            0,
            !0,
          );
        }
        async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            void 0,
            t,
            0,
            !0,
          );
        }
        async HintLoadImportantUpdates() {
          const e = (0, o.tB)(36e5);
          if (e != this.m_tsUpdatedAppsQueryTime) {
            this.m_tsUpdatedAppsQueryTime = e;
            const t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
              a = v.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
              n = await i().get(a, { params: t, withCredentials: !0 });
            n.data.apps &&
              n.data.apps.length > 0 &&
              (0, r.h5)(() => {
                const e = new Map(n.data.apps?.map((e) => [e.appid, new G(e)]));
                this.m_mapUpdatedApps = e;
              });
          }
          return this.m_mapUpdatedApps;
        }
        GetAppImportantUpdate(e) {
          return (
            this.HintLoadImportantUpdates().catch((e) => {
              console.log("UpdatedApps failed to load: ", e.response?.data);
            }),
            this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
          );
        }
        async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
          let a =
            v.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/announcements/ajaxgetlocalization/" +
            t;
          return (await i().get(a)).data.localization;
        }
        async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, a) {
          const n = new Array(),
            s = v.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
            o = (0, f.hE)((0, l.sf)(v.TS.LANGUAGE));
          let d = null,
            _ = null;
          if (e) {
            let t = new Array();
            e.forEach((e) => {
              this.m_mapExistingEvents.has(e)
                ? n.push(this.m_mapExistingEvents.get(e))
                : t.push(e);
            }),
              t.sort(),
              (d = t);
          }
          if (t) {
            let e = new Array();
            t.forEach((t) => {
              if (
                this.m_mapAnnouncementBodyToEvent.has(t) &&
                this.m_mapAnnouncementBodyToEvent.get(t) &&
                this.m_mapExistingEvents.has(
                  this.m_mapAnnouncementBodyToEvent.get(t),
                )
              ) {
                let e = this.m_mapAnnouncementBodyToEvent.get(t);
                if (e) {
                  const t = this.m_mapExistingEvents.get(e);
                  t && n.push(t);
                }
              } else e.push(t);
            }),
              e.sort(),
              (_ = e);
          }
          if (!d && !_) return n;
          const m = new Array();
          for (; (d?.length ?? 0) > 0 || (_?.length ?? 0) > 0; ) {
            let e = {
              event_gids:
                (d?.length ?? 0) > 0 ? d?.splice(0, 100).join(",") : void 0,
              announcement_gids:
                (_?.length ?? 0) > 0 ? _?.splice(0, 100).join(",") : void 0,
              lang_list: o,
              origin: self.origin,
            };
            m.push(
              i().get(s, { params: e, cancelToken: a ? a.token : void 0 }),
            );
          }
          try {
            const e = await Promise.all([...m]);
            let t = 0;
            (0, r.h5)(() =>
              e.forEach((e) => {
                if (e && e.data && e.data.events)
                  for (let t of e.data.events) {
                    let e = b(t);
                    if (!this.m_mapExistingEvents.has(e)) {
                      let e = new c.b(t.clan_steamid);
                      this.InsertEventModelFromClanEventData(e, t);
                    }
                    n.push(this.m_mapExistingEvents.get(e));
                  }
                else {
                  const t = (0, p.H)(e);
                  console.error(
                    "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                      t.strErrorMsg,
                    t,
                  );
                }
                t += 1;
              }),
            );
          } catch (e) {
            const t = (0, p.H)(e);
            console.error(
              "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                t.strErrorMsg,
              t,
            );
          }
          return n;
        }
        async SavePartnerEventSaleAssets(e, t, a, n) {
          let s = null;
          if (!this.m_mapExistingEvents.has(t)) return !1;
          try {
            const r = `${v.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
              o = new FormData();
            o.append("sessionid", v.TS.SESSIONID),
              o.append("gidclanevent", t),
              o.append("json", JSON.stringify(a)),
              o.append("pageStyles", JSON.stringify(n));
            const l = await i().post(r, o, { withCredentials: !0 });
            if (1 == l?.data?.success) {
              const e = this.m_mapExistingEvents.get(t);
              if (e && e.jsondata)
                for (const t in a)
                  if (a.hasOwnProperty(t) && a[t]) {
                    const n = t,
                      s = a[n];
                    void 0 !== s && void 0 !== n && (e.jsondata[n] = s);
                  }
              return this.GetPartnerEventChangeCallback(t).Dispatch(e), !0;
            }
            s = (0, p.H)(l);
          } catch (e) {
            s = (0, p.H)(e);
          }
          return (
            console.error(
              "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                s?.strErrorMsg,
              s,
            ),
            !1
          );
        }
        BIsSummaryOnlyStore() {
          return this.m_bOnlySummary;
        }
      }
      (0, n.Cg)([r.sH], S.prototype, "m_mapExistingEvents", void 0),
        (0, n.Cg)([r.sH], S.prototype, "m_mapAnnouncementBodyToEvent", void 0),
        (0, n.Cg)([r.sH], S.prototype, "m_mapClanToGIDs", void 0),
        (0, n.Cg)([r.sH], S.prototype, "m_mapAppIDToGIDs", void 0),
        (0, n.Cg)([r.sH], S.prototype, "m_mapUpdatedApps", void 0),
        (0, n.Cg)([r.XI], S.prototype, "Init", null),
        (0, n.Cg)([y.oI], S.prototype, "GetPartnerEventChangeCallback", null),
        (0, n.Cg)([r.XI], S.prototype, "RegisterClanEvents", null),
        (0, n.Cg)(
          [r.XI],
          S.prototype,
          "InsertEventModelFromClanEventData",
          null,
        ),
        (0, n.Cg)([r.XI], S.prototype, "DeleteClanEvent", null),
        (0, n.Cg)([r.XI], S.prototype, "RemoveGIDFromList", null),
        (0, n.Cg)([r.XI], S.prototype, "FlushEventFromCache", null),
        (0, n.Cg)([y.oI], S.prototype, "SavePartnerEventSaleAssets", null);
      const A = new S();
      window.g_PartnerEventStore = A;
      const T = new S(!0);
      function w(e, t, a = !1) {
        const [n, s] = (0, E.useState)(() => A.GetClanEventModel(t)),
          [i, r] = (0, E.useState)(!0),
          o = (0, E.useMemo)(() => c.b.InitFromClanID(e), [e]);
        return (
          (0, E.useEffect)(() => {
            !n &&
              e > 0 &&
              (A.Init(),
              A.LoadPartnerEventFromClanEventGIDAndClanSteamID(o, t, 0, a)
                .then(s)
                .finally(() => r(!1)));
          }, [o, t, n, e, a]),
          (0, y.hL)(a ? A.GetPartnerEventChangeCallback(t) : void 0, s),
          { eventModel: n, bLoading: i }
        );
      }
      window.g_PartnerEventSummaryStore = T;
    },
    55563: (e, t, a) => {
      function n(e) {
        return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
      }
      a.d(t, { v: () => n });
    },
    82817: (e, t, a) => {
      a.d(t, {
        EG: () => i,
        II: () => _,
        Uz: () => d,
        aL: () => l,
        ab: () => s,
        zB: () => c,
      });
      var n = a(3577);
      function s(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg") || t.endsWith(".jpeg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function i(e) {
        switch (e) {
          case 1:
            return ".jpg";
          case 2:
            return ".gif";
          case 3:
            return ".png";
          case 5:
            return ".webm";
          case 4:
            return ".mp4";
          case 7:
            return ".srt";
          case 6:
            return ".vtt";
          case 10:
            return ".webp";
        }
      }
      function r(e) {
        const t = (0, n.x0)(),
          a = new Image();
        return (
          (a.onload = () => t.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              t.resolve(void 0);
          }),
          (a.src = e),
          t.promise
        );
      }
      function o(e) {
        const t = (0, n.x0)(),
          a = document.createElement("video");
        return (
          (a.preload = "metadata"),
          a.addEventListener("loadedmetadata", () => t.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              t.resolve(void 0);
          }),
          (a.src = e),
          t.promise
        );
      }
      function l(e) {
        return e.startsWith("image/");
      }
      function d(e) {
        return e.startsWith("video/");
      }
      async function c(e, t) {
        if (t) return o(URL.createObjectURL(e));
        {
          const t = (0, n.x0)(),
            a = new FileReader();
          (a.onload = () => t.resolve(a.result ?? void 0)),
            (a.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                a.error,
              ),
                t.resolve(void 0);
            }),
            a.readAsDataURL(e);
          const s = await t.promise;
          if (!s) return;
          return r(s.toString());
        }
      }
      function _(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
    },
    27543: (e, t, a) => {
      a.d(t, { JS: () => s, rG: () => i });
      var n = a(61859);
      function s(e) {
        switch (e) {
          case 29:
          case 27:
          case 2:
          case 4:
          case 5:
          case 6:
          case 8:
          case 7:
          case 9:
          case 11:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
          case 35:
          case 25:
          case 26:
          case 31:
          case 32:
          case 1:
          case 34:
            return !0;
        }
        return !1;
      }
      function i(e) {
        let t = "#PartnerEvent_" + e,
          a = (0, n.we)(t);
        return a != t ? a : (0, n.we)("#PartnerEvent_Other");
      }
    },
  },
]);
