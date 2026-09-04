/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [41402],
    {
      90046: (l, L, i) => {
        "use strict";
        i.d(L, { D1: () => T, lS: () => g, lz: () => A, nK: () => b });
        var t = i(7850),
          _ = i(32093),
          e = i(56062),
          p = i(90626);
        function k(a) {
          switch (a) {
            case "discord_server":
              return e.jL.Eb;
            case "youtube":
              return e.jL.lQ;
            case "facebook":
              return e.jL.GO;
            case "twitter":
              return e.jL.jG;
            case "twitch":
              return e.jL.F7;
            case "reddit":
              return e.jL.uw;
            case "instagram":
              return e.jL.sP;
            case "tumblr":
              return e.jL.u5;
            case "qq":
              return e.jL.EK;
            case "qqlink":
              return e.jL.M0;
            case "qqchannel":
              return e.jL.$3;
            case "bilibili":
              return e.jL.Ow;
            case "weibo":
              return e.jL.Ib;
            case "wechat":
              return e.jL.Or;
            case "tieba":
              return e.jL.db;
            case "tiktok":
              return e.jL.Yu;
            case "douyin":
              return e.jL.qe;
            case "bluesky":
              return e.jL.H5;
            case "mastodon":
              return e.jL.Xm;
            case "threads":
              return e.jL.DB;
            case "vk":
              return e.jL.a$;
            case "telegram":
              return e.jL.JN;
            case "linkedin":
              return e.jL.EM;
            case "rednote":
              return e.jL.Lk;
          }
          return e.jL.I0;
        }
        function v(a) {
          switch (a) {
            case EStoreLinkType.k_EStoreLinkType_Discord:
              return "discord_server";
            case EStoreLinkType.k_EStoreLinkType_YouTube:
              return "youtube";
            case EStoreLinkType.k_EStoreLinkType_Facebook:
              return "facebook";
            case EStoreLinkType.k_EStoreLinkType_Twitter:
              return "twitter";
            case EStoreLinkType.k_EStoreLinkType_Twitch:
              return "twitch";
            case EStoreLinkType.k_EStoreLinkType_Reddit:
              return "reddit";
            case EStoreLinkType.k_EStoreLinkType_Instagram:
              return "instagram";
            case EStoreLinkType.k_EStoreLinkType_Tumblr:
              return "tumblr";
            case EStoreLinkType.k_EStoreLinkType_QQ:
              return "qq";
            case EStoreLinkType.k_EStoreLinkType_QQLink:
              return "qqlink";
            case EStoreLinkType.k_EStoreLinkType_Bilibili:
              return "bilibili";
            case EStoreLinkType.k_EStoreLinkType_Weibo:
              return "weibo";
            case EStoreLinkType.k_EStoreLinkType_WeChat:
              return "wechat";
            case EStoreLinkType.k_EStoreLinkType_Tieba:
              return "tieba";
            case EStoreLinkType.k_EStoreLinkType_Tiktok:
              return "tiktok";
            case EStoreLinkType.k_EStoreLinkType_Douyin:
              return "douyin";
            case EStoreLinkType.k_EStoreLinkType_Bluesky:
              return "bluesky";
            case EStoreLinkType.k_EStoreLinkType_Mastodon:
              return "mastodon";
            case EStoreLinkType.k_EStoreLinkType_Threads:
              return "threads";
            case EStoreLinkType.k_EStoreLinkType_VK:
              return "vk";
            case EStoreLinkType.k_EStoreLinkType_Telegram:
              return "telegram";
            case EStoreLinkType.k_EStoreLinkType_LinkedIn:
              return "linkedin";
          }
          return "unknown social media type";
        }
        var S = i(40358),
          E = i(95695),
          c = i.n(E),
          o = i(36118),
          m = i(36707),
          j = i(18210),
          I = i(53113),
          x = i(72609),
          C = i(71421),
          B = i(12443),
          u = i.n(B);
        function g(a) {
          const { appid: r } = a;
          return (0, t.jsx)("div", {
            className: u().AppSocialLinksCtn,
            children: (0, t.jsx)(f, { appid: r }),
          });
        }
        function f(a) {
          const { appid: r } = a,
            { data: n } = (0, S.bg)({ appid: r });
          return !n || n.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: (0, m.A)(
                      c().EventEditorTextTitle,
                      "EventEditorTextTitle",
                    ),
                    children: (0, j.we)("#EventDisplay_SocialTitle"),
                  }),
                  (0, t.jsx)(T, { id: "" + r, rgSocialMedia: n }),
                ],
              });
        }
        function b(a) {
          return (0, p.useMemo)(
            () =>
              a
                ? a.map((r) => {
                    const n = { link_type: k(r.type) };
                    return (
                      n.link_type == e.jL.EK || n.link_type == e.jL.Or
                        ? (n.text = r.link)
                        : (n.url = r.link),
                      n
                    );
                  })
                : [],
            [a],
          );
        }
        function A(a) {
          const { gidClanEvent: r, rgSocial: n, bIsCreatorHomeEvent: y } = a,
            d = b(n);
          return !d || d.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: (0, m.A)(
                      c().EventEditorTextTitle,
                      "EventEditorTextTitle",
                    ),
                    children: y
                      ? (0, j.we)("#EventDisplay_Sale_SocialTitle_Dev")
                      : (0, j.we)("#EventDisplay_Sale_SocialTitle"),
                  }),
                  (0, t.jsx)(T, { id: r, rgSocialMedia: d }),
                ],
              });
        }
        const D = [
          e.jL.EK,
          e.jL.$3,
          e.jL.M0,
          e.jL.Ow,
          e.jL.Ib,
          e.jL.qe,
          e.jL.Lk,
        ];
        function T(a) {
          const { id: r, rgSocialMedia: n, className: y } = a,
            d = x.TS.EREALM === _.TU.k_ESteamRealmChina;
          return (0, t.jsx)("div", {
            className: (0, m.A)(u().AppSocialLinks, y),
            children: n
              .filter((s) => !d || D.includes(s.link_type || e.jL.I0))
              .map((s) =>
                s.url
                  ? (0, t.jsx)(
                      O,
                      { social: s },
                      "app_social_link_" + r + "_" + s.link_type,
                    )
                  : (0, t.jsx)(
                      M,
                      { social: s },
                      "app_social_text_" + r + "_" + s.link_type + "_" + s.text,
                    ),
              ),
          });
        }
        function O(a) {
          const { social: r } = a;
          return r.url
            ? (0, t.jsx)("a", {
                href: (0, I.NT)(r.url, !0),
                target: x.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, t.jsx)(C.he, {
                  toolTipContent: r.url,
                  children: (0, t.jsx)(h, { social: r }),
                }),
              })
            : null;
        }
        function M(a) {
          const { social: r } = a;
          return (0, t.jsxs)("div", {
            className: u().AppSocialLinkWithText,
            children: [
              (0, t.jsx)(C.he, {
                toolTipContent: r.text,
                children: (0, t.jsx)(h, { social: r }),
              }),
              (0, t.jsx)("div", {
                className: u().AppSocialText,
                children: r.text,
              }),
            ],
          });
        }
        function h(a) {
          const { social: r } = a;
          return (0, t.jsx)(w, {
            linkType: r.link_type || e.jL.I0,
            className: u().AppSocialLinkIcon,
          });
        }
        function w(a) {
          const { linkType: r, ...n } = a;
          switch (r) {
            case e.jL.lQ:
              return (0, t.jsx)(o.agV, { ...n });
            case e.jL.GO:
              return (0, t.jsx)(o.ZnA, { ...n });
            case e.jL.jG:
              return (0, t.jsx)(o.oy, { ...n });
            case e.jL.F7:
              return (0, t.jsx)(o.ofN, { ...n });
            case e.jL.Eb:
              return (0, t.jsx)(o.Bki, { ...n });
            case e.jL.EK:
            case e.jL.M0:
            case e.jL.$3:
              return (0, t.jsx)(o.$vK, { ...n });
            case e.jL.a$:
              return (0, t.jsx)(o.OSJ, { ...n });
            case e.jL.Ow:
              return (0, t.jsx)(o.nm_, { ...n });
            case e.jL.Ib:
              return (0, t.jsx)(o.tIO, { ...n });
            case e.jL.uw:
              return (0, t.jsx)(o.Vt2, { ...n });
            case e.jL.sP:
              return (0, t.jsx)(o.Vgk, { ...n });
            case e.jL.u5:
              return (0, t.jsx)(o.VSd, { ...n });
            case e.jL.db:
              return (0, t.jsx)(o.ccb, { ...n });
            case e.jL.Yu:
              return (0, t.jsx)(o.rNt, { ...n });
            case e.jL.JN:
              return (0, t.jsx)(o.g$j, { ...n });
            case e.jL.EM:
              return (0, t.jsx)(o.BQz, { ...n });
            case e.jL.Or:
              return (0, t.jsx)(o.jdP, { ...n });
            case e.jL.qe:
              return (0, t.jsx)(o.bKN, { ...n });
            case e.jL.H5:
              return (0, t.jsx)(o.sDU, { ...n });
            case e.jL.Xm:
              return (0, t.jsx)(o.MbF, { ...n });
            case e.jL.DB:
              return (0, t.jsx)(o.emH, { ...n });
            case e.jL.Lk:
              return (0, t.jsx)(o.Yoo, { ...n });
            case e.jL.wu:
            case e.jL.I0:
              return "invalid social media type";
          }
        }
      },
      57106: (l, L, i) => {
        "use strict";
        i.r(L), i.d(L, { default: () => k });
        var t = i(7850),
          _ = i(90046),
          e = i(28194),
          p = i.n(e);
        function k(v) {
          const { clanAccountID: S, items: E } = v,
            c = (0, _.nK)(E);
          return c
            ? (0, t.jsx)(_.D1, {
                id: "social_" + S,
                rgSocialMedia: c,
                className: p().Ctn,
              })
            : null;
        }
      },
      95695: (l) => {
        l.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
          BackgroundAnimation: "_3jOnURPodgSJ0VVO2lchIh",
          "ItemFocusAnim-darkerGrey-nocolor": "_2J2q_u-IE_3MWcK8YJwYX5",
          "ItemFocusAnim-darkerGrey": "hml57jb3ouTfP1qbnI4_V",
          "ItemFocusAnim-darkGreySettings": "_1ex6ItU2bR-tAYkBYAfqnF",
          "ItemFocusAnim-darkGrey": "_3ILf95Fdqnqg9OfLO3lrZH",
          "ItemFocusAnim-grey": "_159SLrXx_wC4ZI3ZLaz1A_",
          "ItemFocusAnim-translucent-white-10": "_2LlOq5G2PXnoXnElUH9sZS",
          "ItemFocusAnim-translucent-white-20": "oskDWTSKtzqVUSfD5nKvN",
          "ItemFocusAnimBorder-darkGrey": "_22jWCdivanrS6yxyLk3zMH",
          "ItemFocusAnim-green": "_3JEJrM-AMsqF1VHbRBXYvZ",
          focusAnimation: "KS3LLxXLFm_S6AWOrqeVo",
          hoverAnimation: "_9UqiMHhWNZyuE_A0XwG9N",
        };
      },
      12443: (l) => {
        l.exports = {
          AppSocialLinksCtn: "_1wKUEA0cYqeUELXMe3Tp6T",
          AppSocialLinks: "YMmXzjieZthpAehitId4M",
          AppSocialLinkIcon: "OlwlyAPTdpJ7OieZmqzhc",
          AppSocialLinkWithText: "_3BKcmMK-HSkKmQqRCx9HdA",
          AppSocialText: "bJf5nxr6o9SG4mWXm7qz-",
        };
      },
      28194: (l) => {
        l.exports = { Ctn: "_2ZSkHhlXwxpsIInroemxBn" };
      },
    },
  ]);
})();
