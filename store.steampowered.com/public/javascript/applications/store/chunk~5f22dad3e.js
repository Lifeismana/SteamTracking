/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [68904],
  {
    81886: (e, a, n) => {
      n.d(a, { fp: () => i, vm: () => r });
      var t = n(91297);
      function i(e) {
        return (
          !!e &&
          ("game" === e ||
            "dlc" === e ||
            "software" === e ||
            "music" === e ||
            "application" === e ||
            "demo" === e ||
            "hardware" === e ||
            "mod" === e ||
            "video" == e ||
            "beta" === e ||
            "advertising" === e)
        );
      }
      function r(e) {
        return (
          null != e &&
          (e == t.uE.HT ||
            e == t.uE._i ||
            e == t.uE.Sv ||
            e == t.uE.Ov ||
            e == t.uE.ue ||
            e == t.uE.Hk ||
            e == t.uE.RA ||
            e == t.uE.Wz ||
            e == t.uE.Vi ||
            e == t.uE.pl)
        );
      }
    },
    23338: (e, a, n) => {
      n.d(a, { Y: () => s, j: () => l });
      var t = n(7850),
        i = n(90626),
        r = n(40236),
        o = n(8871);
      function s(e) {
        const a = (0, r.OO)(e, e.options);
        return (0, t.jsx)("span", { ref: a, style: { fontSize: 0 } });
      }
      const l = i.forwardRef(function (e, a) {
        const { onLeave: n, onEnter: i, options: s, ...l } = e,
          u = (0, r.OO)(e, e.options),
          d = (0, o.Ue)(u, a);
        return (0, t.jsx)("div", { ref: d, ...l });
      });
    },
    98735: (e, a, n) => {
      n.d(a, { Ey: () => y, Rp: () => h });
      const t = JSON.parse(
        '{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d\'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}',
      ).h;
      var i = n(98841),
        r = n(38861),
        o = n(91933);
      async function s(e, a, n, s) {
        if (s) return { version: i.ie.mO, preference_state: i.CY.__ };
        if (a) {
          const a = (await i.T4.GetCookiePreferences(e, {}))
            .Body()
            .toObject().preferences;
          if (a && void 0 !== a.version && a.version != i.ie.CL) return a;
        }
        try {
          const e = (0, o.j_)(r.J_);
          if (e) {
            const a = JSON.parse(e);
            if (a && void 0 !== a.version && a.version != i.ie.CL) return a;
          }
        } catch (e) {}
        return n in t.eucountries || n in t.eeacountries || "CH" === n
          ? { version: i.ie.mO, preference_state: i.CY._H }
          : { version: i.ie.mO, preference_state: i.CY.__ };
      }
      var l = n(80902),
        u = n(23809),
        d = n(66418);
      function c() {
        const e = (0, u.KV)();
        return (0, l.I)(
          (function (e) {
            return {
              queryKey: ["CookiePreferences"],
              queryFn: () => s(e, d.iA.logged_in, d.TS.COUNTRY, d.TS.EREALM),
            };
          })(e),
        );
      }
      function h(e) {
        const { data: a } = c();
        return a
          ? (function (e, a) {
              switch (e.preference_state) {
                case i.CY.__:
                case i.CY.PK:
                  return !0;
                case i.CY.rE:
                  return !1;
                case i.CY.UI:
                default:
                  switch (a) {
                    case "youtube":
                      return e.third_party_content?.youtube;
                    case "vimeo":
                      return e.third_party_content?.vimeo;
                    case "sketchfab":
                      return e.third_party_content?.sketchfab;
                    case "generic":
                      return !1;
                  }
              }
            })(a, e)
          : void 0;
      }
      function y() {
        const { data: e } = c();
        return e
          ? !(function (e) {
              switch (e.preference_state) {
                case i.CY.__:
                case i.CY.PK:
                  return !1;
                default:
                  return !0;
              }
            })(e)
          : void 0;
      }
    },
    70995: (e, a, n) => {
      n.d(a, { Lg: () => u, XU: () => c });
      const t = 20,
        i = /^.*youtube[^v]+v=(.{11}).*/,
        r = /^.*youtu\.be\/(.{11}).*/,
        o = /^.*youtube.*\/embed\/(.{11}).*/,
        s = /^.*[?&]t=([^&]+)(?:&|$)/,
        l = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function u(e) {
        return !!d(e);
      }
      function d(e) {
        const a = e?.length < t ? void 0 : i.exec(e) || r.exec(e) || o.exec(e);
        return a?.[1];
      }
      function c(e) {
        const a = d(e);
        if (!a) return;
        const n = (function (e) {
            const a = s.exec(e);
            return a?.[1];
          })(e),
          t = n
            ? (function (e) {
                const a = l.exec(e);
                if (!(a?.[1] || a?.[2] || a?.[3] || a?.[4])) return;
                if (a?.[4]) return parseInt(a?.[4]);
                let n = 0;
                return (
                  a?.[1] && (n += 3600 * parseInt(a[1])),
                  a?.[2] && (n += 60 * parseInt(a[2])),
                  a?.[3] && (n += parseInt(a[3])),
                  n
                );
              })(n)
            : void 0;
        return { strVideoID: a, nStartSeconds: t };
      }
    },
    4796: (e, a, n) => {
      n.d(a, { $5: () => A, TB: () => g, ac: () => f });
      var t = n(7860),
        i = n(75233),
        r = n(14947),
        o = n(90626),
        s = n(17720),
        l = n(81393),
        u = n(78327),
        d = n(67165),
        c = (n(26161), n(29197), n(28210), n(33951)),
        h = n(63340);
      const y = new WeakSet();
      function p(e = t.L) {
        if ("undefined" == typeof window) return;
        if (y.has(e)) return;
        const a = (0, u.Fd)("groupvanityinfo", "application_config");
        (void 0 === a && "complete" != document.readyState) ||
          (y.add(e), C(a) && (0, c.aA)(e, a));
      }
      function C(e) {
        const a = e;
        return (
          !!(
            a &&
            Array.isArray(a) &&
            a.length > 0 &&
            "object" == typeof a[0]
          ) &&
          "number" == typeof a[0].clanAccountID &&
          ("number" == typeof a[0].appid || "string" == typeof a[0].vanity_url)
        );
      }
      function m(e) {
        return "string" == typeof e ? parseInt(e) : e;
      }
      function I(e) {
        return "string" == typeof e ? Number.parseInt(e) : e;
      }
      const f = new (class {
        m_queryClient = t.L;
        m_boxCacheVersion = r.sH.box(0);
        m_bWatchingCache = !1;
        m_bBumpScheduled = !1;
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          p(this.m_queryClient),
            this.m_bWatchingCache ||
              ((this.m_bWatchingCache = !0),
              this.m_queryClient.getQueryCache().subscribe((e) => {
                ("added" != e?.type &&
                  "updated" != e?.type &&
                  "removed" != e?.type) ||
                  ((0, c.yT)(e.query?.queryKey) &&
                    this.ScheduleCacheVersionBump());
              }));
        }
        ScheduleCacheVersionBump() {
          this.m_bBumpScheduled ||
            ((this.m_bBumpScheduled = !0),
            queueMicrotask(() => {
              (this.m_bBumpScheduled = !1),
                (0, r.h5)(() =>
                  this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
                );
            }));
        }
        ReadCache() {
          return (
            this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
          );
        }
        AddGroupVanities(e) {
          this.LazyInit(), C(e) && (0, c.aA)(this.m_queryClient, e);
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, l.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, l.wT)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.BHasClanInfoLoadedByAccountID(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return Boolean((0, c.Gt)(I(e), this.ReadCache()));
        }
        RegisterClanData(e) {
          this.LazyInit(), (0, c.aA)(this.m_queryClient, e);
        }
        async LoadOGGClanInfoForAppID(e) {
          return (
            this.LazyInit(),
            (e = m(e)),
            (0, l.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e ? null : (0, c.AB)(e, this.m_queryClient).catch(() => null)
          );
        }
        async LoadOGGClanInfoForIdentifier(e) {
          return this.LazyInit(), (0, c.Rc)(e, this.m_queryClient, "store");
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          return this.LazyInit(), (0, c.Rc)(e, this.m_queryClient, "group");
        }
        async LoadClanInfoForClanSteamID(e) {
          return this.LoadClanInfoForClanAccountID(e.GetAccountID());
        }
        async LoadClanInfoForClanAccountID(e) {
          return this.LazyInit(), (0, c.MR)(I(e), this.m_queryClient);
        }
        GetOGGClanInfo(e) {
          const a = this.ReadCache();
          return "string" == typeof e ? (0, c.fy)(e, a) : (0, c.ko)(e, a);
        }
        GetClanSteamIDForAppID(e) {
          const a = (0, c.ko)(m(e), this.ReadCache());
          return a ? s.b.InitFromClanID(a.clanAccountID) : void 0;
        }
        GetClanVanityForAppID(e) {
          return (0, c.ko)(m(e), this.ReadCache())?.vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          return (0, c.Gt)(e.GetAccountID(), this.ReadCache())?.vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.BHasClanInfoLoadedByAccountID(e);
        }
        GetClanMemberCount(e) {
          return (0, c.ko)(m(e), this.ReadCache())?.member_count ?? 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            (0, l.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            (0, c.Gt)(I(e), this.ReadCache())
          );
        }
        GetCreatorStoreURL(e) {
          let a = d.pF.GetCreatorHome(e);
          if (a) return a.GetCreatorHomeURL("developer");
          let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            u.TS.COMMUNITY_BASE_URL +
            (n.vanity_url
              ? "groups/" + n.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      })();
      function S() {
        const e = (0, i.jE)();
        return p(e), e;
      }
      function g(e) {
        S();
        const { data: a, isPending: n } = (0, c.TB)(e ? I(e) : void 0);
        return [Boolean(e) && n, a ?? void 0];
      }
      function A(e) {
        const a = S();
        (0, o.useEffect)(() => {
          e &&
            (0, c.MR)(I(e), a).catch((a) =>
              console.error(`Failed to hint load clan info ${e}`, a),
            );
        }, [e, a]);
      }
      (0, h.V)("g_ClanStore", f);
    },
    48211: (e, a, n) => {
      n.d(a, { N1: () => S, VC: () => I, gZ: () => g });
      var t,
        i = n(34629),
        r = n(7850),
        o = n(90626),
        s = n(62490),
        l = n(84933),
        u = n(52038),
        d = n(22797),
        c = n(98735),
        h = n(61859),
        y = n(23338);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(t || (t = {}));
      let p = t.NotLoaded,
        C = [];
      function m(e) {
        if (p != t.Loaded) {
          if (p == t.NotLoaded) {
            let e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            let a = document.getElementsByTagName("script")[0];
            a.parentNode?.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = f);
          }
          e && (C.includes(e) || C.push(e));
        } else e && e();
      }
      function I(e = !0) {
        const a = (0, c.Rp)("youtube");
        (0, o.useEffect)(() => {
          a && e && m();
        }, [a, e]);
      }
      function f() {
        p = t.Loaded;
        for (let e of C) e();
        C = [];
      }
      class S extends o.Component {
        m_strPlayerID = "";
        m_player = null;
        m_playerContainer = null;
        m_bPlayerReady = !1;
        static s_nPlayerIndex = 0;
        constructor(e) {
          super(e),
            (this.m_strPlayerID = "YoutubePlayer_" + S.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), s.x9(C, e);
        }
        shouldComponentUpdate(e, a) {
          if (!this.m_player) return !1;
          const n = this.props;
          return n.autoplay != e.autoplay ||
            n.controls != e.controls ||
            n.showInfo != e.showInfo ||
            n.video != e.video
            ? (this.CreatePlayer(e), !1)
            : ((n.width == e.width && n.height == e.height) ||
                (this.m_bPlayerReady &&
                  e.width &&
                  e.height &&
                  this.m_player.setSize(e.width, e.height)),
              n.forcePause != e.forcePause);
        }
        componentDidUpdate(e) {
          e.forcePause != this.props.forcePause &&
            (this.props.forcePause
              ? this.m_player?.pauseVideo()
              : this.m_player?.playVideo());
        }
        DestroyPlayer() {
          if (this.m_player)
            try {
              this.m_player.stopVideo && this.m_player.stopVideo(),
                this.m_player.destroy && this.m_player.destroy();
            } catch (e) {
            } finally {
              this.m_player = null;
            }
        }
        BindPlayerContainer(e) {
          this.m_playerContainer != e &&
            ((this.m_playerContainer = e),
            this.DestroyPlayer(),
            this.m_playerContainer && m(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const a = !1 === e.autoplay ? 0 : 1,
            n = !0 === e.showInfo ? 1 : 0,
            t = !0 === e.controls ? 1 : 0,
            i = !0 === e.showFullscreenBtn ? 1 : 0,
            r = !0 === e.playsInline ? 1 : 0;
          let o = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              host: "https://www.youtube-nocookie.com",
              playerVars: {
                autoplay: a,
                showinfo: n,
                autohide: 1,
                fs: i,
                modestbranding: 1,
                rel: 0,
                playsinline: r,
                iv_load_policy: 3,
                controls: t,
                start: e.startSeconds,
              },
              events: {
                onReady: this.OnPlayerReady,
                onStateChange: this.OnPlayerStateChange,
                onError: this.OnError,
              },
            },
            s = this.m_playerContainer.firstElementChild;
          (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(s, o));
        }
        OnPlayerReady(e) {
          if (
            ((this.m_bPlayerReady = !0),
            this.props.onVideoInfoChanged && this.m_player)
          ) {
            let e = this.m_player.getVideoData(),
              a = { strAuthor: "", strTitle: "", strVideoID: "" };
            e.author && (a.strAuthor = e.author),
              e.title && (a.strTitle = e.title),
              e.video_id && (a.strVideoID = e.video_id),
              this.props.onVideoInfoChanged(a);
          }
          this.props.width &&
            this.props.height &&
            this.m_player?.setSize(this.props.width, this.props.height),
            this.props.autoplay && this.m_player?.playVideo(),
            this.props.onPlayerReady && this.props.onPlayerReady();
        }
        OnPlayerStateChange(e) {
          switch (e.data) {
            case YT.PlayerState.UNSTARTED:
              break;
            case YT.PlayerState.BUFFERING:
              this.props.onBuffering && this.props.onBuffering();
              break;
            case YT.PlayerState.PLAYING:
              this.props.onPlaying && this.props.onPlaying();
              break;
            case YT.PlayerState.PAUSED:
              this.props.onPaused && this.props.onPaused();
              break;
            case YT.PlayerState.ENDED:
              this.props.onMovieEnd && this.props.onMovieEnd();
          }
        }
        OnError(e) {
          console.log("Youtube: Playback failed", e),
            this.props.onError && this.props.onError(e);
        }
        OnPlayerLeftView() {
          this.props.autopause &&
            this.m_player &&
            this.m_bPlayerReady &&
            this.m_player.pauseVideo();
        }
        PlayVideo(e) {
          this.m_player &&
            this.m_bPlayerReady &&
            (e && this.m_player.seekTo(0, !0), this.m_player.playVideo());
        }
        render() {
          return (0, r.jsx)(g, {
            video: this.props.video,
            children: (0, r.jsx)(
              y.j,
              {
                onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
                ref: this.BindPlayerContainer,
                className: (0, u.A)("YoutubePlayer", this.props.classnames),
                children: (0, r.jsx)(d.t, {
                  className: "YoutubePlayerThrobber",
                }),
              },
              this.m_strPlayerID,
            ),
          });
        }
      }
      function g(e) {
        const { video: a, children: n } = e;
        return (0, c.Rp)("youtube")
          ? n
          : (0, r.jsx)("a", {
              href: `https://www.youtube.com/watch?v=${a}`,
              children: (0, h.we)("#EventCalendar_WatchYouTubeVideo"),
            });
      }
      (0, i.Cg)([l.oI], S.prototype, "BindPlayerContainer", null),
        (0, i.Cg)([l.oI], S.prototype, "OnYoutubeScriptsReady", null),
        (0, i.Cg)([l.oI], S.prototype, "CreatePlayer", null),
        (0, i.Cg)([l.oI], S.prototype, "OnPlayerReady", null),
        (0, i.Cg)([l.oI], S.prototype, "OnPlayerStateChange", null),
        (0, i.Cg)([l.oI], S.prototype, "OnError", null),
        (0, i.Cg)([l.oI], S.prototype, "OnPlayerLeftView", null),
        (0, i.Cg)([l.oI], S.prototype, "PlayVideo", null);
    },
  },
]);
