/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [68904],
  {
    81886: (e, a, t) => {
      t.d(a, { fp: () => n, vm: () => i });
      var r = t(48210);
      function n(e) {
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
      function i(e) {
        return (
          null != e &&
          (e == r.uE.HT ||
            e == r.uE._i ||
            e == r.uE.Sv ||
            e == r.uE.Ov ||
            e == r.uE.ue ||
            e == r.uE.Hk ||
            e == r.uE.RA ||
            e == r.uE.Wz ||
            e == r.uE.Vi ||
            e == r.uE.pl)
        );
      }
    },
    23338: (e, a, t) => {
      t.d(a, { Y: () => s, j: () => l });
      var r = t(7850),
        n = t(90626),
        i = t(40236),
        o = t(8871);
      function s(e) {
        const a = (0, i.OO)(e, e.options);
        return (0, r.jsx)("span", { ref: a, style: { fontSize: 0 } });
      }
      const l = n.forwardRef(function (e, a) {
        const { onLeave: t, onEnter: n, options: s, ...l } = e,
          u = (0, i.OO)(e, e.options),
          d = (0, o.Ue)(u, a);
        return (0, r.jsx)("div", { ref: d, ...l });
      });
    },
    52505: (e, a, t) => {
      t.d(a, { Ey: () => h, Rp: () => p });
      var r = t(98841),
        n = t(2160),
        i = t(8527),
        o = t(38861);
      const s = JSON.parse(
        '{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d\'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}',
      ).h;
      var l = t(91933);
      async function u(e) {
        if ((0, n.nA)(i.TS.EREALM))
          return { version: r.ie.mO, preference_state: r.CY.__ };
        if (i.iA.logged_in) {
          const a = (await r.T4.GetCookiePreferences(e, {}))
            .Body()
            .toObject().preferences;
          if (a && void 0 !== a.version && a.version != r.ie.CL) return a;
        }
        try {
          const e = (0, l.j_)(o.J_);
          if (e) {
            const a = JSON.parse(e);
            if (a && void 0 !== a.version && a.version != r.ie.CL) return a;
          }
        } catch (e) {}
        const a = i.TS.COUNTRY;
        return a in s.eucountries || a in s.eeacountries || "CH" === a
          ? { version: r.ie.mO, preference_state: r.CY._H }
          : { version: r.ie.mO, preference_state: r.CY.__ };
      }
      var d = t(80902),
        c = t(23809);
      function y() {
        const e = (0, c.KV)();
        return (0, d.I)(
          (function (e) {
            return { queryKey: ["CookiePreferences"], queryFn: () => u(e) };
          })(e),
        );
      }
      function p(e) {
        const { data: a } = y();
        return a
          ? (function (e, a) {
              switch (e.preference_state) {
                case r.CY.__:
                case r.CY.PK:
                  return !0;
                case r.CY.rE:
                  return !1;
                case r.CY.UI:
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
      function h() {
        const { data: e } = y();
        return e
          ? !(function (e) {
              switch (e.preference_state) {
                case r.CY.__:
                case r.CY.PK:
                  return !1;
                default:
                  return !0;
              }
            })(e)
          : void 0;
      }
    },
    57876: (e, a, t) => {
      t.d(a, { Xh: () => d, cU: () => c, tf: () => p, wl: () => y });
      var r = t(22837),
        n = t(71150),
        i = t(48210),
        o = t(30894),
        s = t(16021),
        l = t(62792),
        u = t(78327);
      const d = {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_tag_count: 20,
        include_basic_info: !0,
        include_trailers: !0,
        include_reviews: !0,
        include_screenshots: !0,
        include_supported_languages: !0,
      };
      class c {
        m_setAlreadyAdded = new Set();
        Reset() {
          this.m_setAlreadyAdded = new Set();
        }
        BHasAppID(e) {
          return this.m_setAlreadyAdded.has("a" + e);
        }
        BHasPackageID(e) {
          return this.m_setAlreadyAdded.has("s" + e);
        }
        BHasBundleID(e) {
          return this.m_setAlreadyAdded.has("b" + e);
        }
        BHasStoreItemKey(e) {
          return this.m_setAlreadyAdded.has(
            this.ConvertStoreItemKeyToUniqueKey(e),
          );
        }
        AddStoreItemKey(e) {
          this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(e));
        }
        ConvertStoreItemKeyToUniqueKey(e) {
          switch (e.item_type) {
            default:
            case "app":
              return "a" + e.id;
            case "sub":
              return "s" + e.id;
            case "bundle":
              return "b" + e.id;
          }
        }
      }
      const y = 4;
      function p(e, a, t, r, n, i) {
        const o = new Array(),
          u = new Array(),
          d = new Array(),
          c = new Array();
        if (!e || 0 == e.length) return o;
        const p = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let i of e) {
          let e = i.id,
            y = l.by.k_NotRejected;
          switch (i.item_type) {
            case "sub":
              const n = s.A.Get().GetPackage(e);
              if (1 !== n?.GetIncludedAppIDs()?.length) {
                y = b(e, a, r, !0);
                break;
              }
              e = n.GetIncludedAppIDs()[0];
            case "app":
              y = I(e, a, t, r, !0);
              break;
            case "bundle":
              y = g(e, a, r, !0);
          }
          if (
            (y == l.by.k_NotRejected
              ? ((i.rejected = l.by.k_NotRejected),
                o.push({ ...i, priority: 1 }))
              : p.includes(y)
                ? ((i.rejected = l.by.k_NotRejected), u.push(i))
                : ((i.rejected = y),
                  y == l.by.k_RejectIgnoredGame ? d.push(i) : c.push(i)),
            o.length > n)
          )
            break;
        }
        return (
          o.length < n &&
            (h(o, u, i, 2),
            o.length < i &&
              a.enforce_minimum &&
              (h(o, d, i, 3), h(o, c, i, y))),
          o
        );
      }
      function h(e, a, t, r) {
        for (let n = 0; e.length < t && n < a.length; ++n)
          e.push({ ...a[n], priority: r });
      }
      function m(e, a) {
        const t = o.Fm.Get();
        if (a.only_current_platform && t.BHasPlatformPreferenceSet()) {
          if (
            !(
              (e.GetPlatforms()?.windows && t.BIsPreferredPlatform("win")) ||
              (e.GetPlatforms()?.mac && t.BIsPreferredPlatform("mac")) ||
              (e.GetPlatforms()?.steamos_linux &&
                t.BIsPreferredPlatform("linux"))
            )
          )
            return l.by.k_RejectWrongPlatform;
        }
        if (!a.prepurchase && e.BIsComingSoon())
          return l.by.k_RejectNoComingSoon;
        const r = e.GetPlatforms();
        return !a.virtual_reality &&
          r &&
          r.vr_support &&
          r.vr_support.vrhmd_only
          ? l.by.k_RejectNoVR
          : e.GetAllCreatorClanIDs()?.some((e) => t.BIsIgnoringCurator(e))
            ? l.by.k_RejectCreatorClan
            : l.by.k_NotRejected;
      }
      function _(e, a) {
        if (a.localized) {
          const a = (0, r.sfN)(u.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(a))
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function I(e, a, t, r, u) {
        const d = s.A.Get().GetApp(e);
        if (!d) return l.by.k_RejectNotLoaded;
        const c = m(d, a);
        if (c != l.by.k_NotRejected) return c;
        const y = o.Fm.Get();
        if (y.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (y.BExcludeTagIDs(d.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (y.BExcludesContentDescriptor(d.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!a.early_access && d.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const p = d.GetAppType();
        if (!a.software && p == i.uE.Sv) return l.by.k_RejectSoftware;
        if (a.games_already_in_library && y.BIsGameOwned(e))
          return l.by.k_RejectInLibrary;
        if (a.games_not_in_library && !y.BIsGameOwned(e))
          return l.by.k_RejectNotInLibrary;
        if (!a.video && [i.uE.Wz, i.uE.gQ, i.uE.ID].includes(p))
          return l.by.k_RejectVideo;
        if (a.has_discount) {
          const e = d.GetBestPurchaseOption();
          if (!e || !e.discount_pct) return l.by.k_RejectNoDiscount;
        }
        return "adultonly" != t &&
          a.no_ao_content &&
          (d.HasContentDescriptorID(n.u7) || d.HasContentDescriptorID(n.T4))
          ? l.by.k_RejectAO
          : p == i.uE.ue &&
              a.games_already_in_library &&
              y.BIsGameOwned(d.GetParentAppID() || 0)
            ? l.by.k_RejectInLibrary
            : u
              ? (p == i.uE.ue && r.BHasAppID(d.GetParentAppID() || 0)) ||
                r.BHasAppID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : a.has_trailer && !d.BHasTrailers(!1)
                  ? l.by.k_RejectNoTrailer
                  : _(d, a)
              : l.by.k_NotRejected;
      }
      function f(e, a) {
        const t = o.Fm.Get();
        let r = !1;
        for (let a of e) {
          if (t.BIsGameIgnored(a)) return l.by.k_RejectIgnoredGame;
          t.BIsGameOwned(a) && (r = !0);
        }
        return a.games_not_in_library && r
          ? l.by.k_RejectInLibrary
          : a.games_not_in_library && !r
            ? l.by.k_RejectNotInLibrary
            : l.by.k_NotRejected;
      }
      function b(e, a, t, r) {
        const n = s.A.Get().GetPackage(e);
        if (!n) return l.by.k_RejectNotLoaded;
        const i = m(n, a);
        if (i != l.by.k_NotRejected) return i;
        const u = f(n.GetIncludedAppIDs(), a);
        if (u != l.by.k_NotRejected) return u;
        const d = o.Fm.Get();
        return a.games_already_in_library && d.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : d.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : r
              ? t.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : _(n, a)
              : l.by.k_NotRejected;
      }
      function g(e, a, t, r) {
        const n = s.A.Get().GetBundle(e);
        if (!n) return l.by.k_RejectNotLoaded;
        const i = m(n, a);
        if (i != l.by.k_NotRejected) return i;
        const o = f(n.GetIncludedAppIDs(), a);
        return o != l.by.k_NotRejected
          ? o
          : r
            ? t.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : _(n, a)
            : l.by.k_NotRejected;
      }
    },
    70995: (e, a, t) => {
      t.d(a, { Lg: () => u, XU: () => c });
      const r = 20,
        n = /^.*youtube[^v]+v=(.{11}).*/,
        i = /^.*youtu\.be\/(.{11}).*/,
        o = /^.*youtube.*\/embed\/(.{11}).*/,
        s = /^.*[?&]t=([^&]+)(?:&|$)/,
        l = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function u(e) {
        return !!d(e);
      }
      function d(e) {
        const a = e?.length < r ? void 0 : n.exec(e) || i.exec(e) || o.exec(e);
        return a?.[1];
      }
      function c(e) {
        const a = d(e);
        if (!a) return;
        const t = (function (e) {
            const a = s.exec(e);
            return a?.[1];
          })(e),
          r = t
            ? (function (e) {
                const a = l.exec(e);
                if (!(a?.[1] || a?.[2] || a?.[3] || a?.[4])) return;
                if (a?.[4]) return parseInt(a?.[4]);
                let t = 0;
                return (
                  a?.[1] && (t += 3600 * parseInt(a[1])),
                  a?.[2] && (t += 60 * parseInt(a[2])),
                  a?.[3] && (t += parseInt(a[3])),
                  t
                );
              })(t)
            : void 0;
        return { strVideoID: a, nStartSeconds: r };
      }
    },
    48211: (e, a, t) => {
      t.d(a, { N1: () => b, VC: () => I, gZ: () => g });
      var r,
        n = t(34629),
        i = t(7850),
        o = t(90626),
        s = t(62490),
        l = t(84933),
        u = t(52038),
        d = t(22797),
        c = t(52505),
        y = t(61859),
        p = t(23338);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(r || (r = {}));
      let h = r.NotLoaded,
        m = [];
      function _(e) {
        if (h != r.Loaded) {
          if (h == r.NotLoaded) {
            let e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            let a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = f);
          }
          e && (m.includes(e) || m.push(e));
        } else e && e();
      }
      function I(e = !0) {
        const a = (0, c.Rp)("youtube");
        (0, o.useEffect)(() => {
          a && e && _();
        }, [a, e]);
      }
      function f() {
        h = r.Loaded;
        for (let e of m) e();
        m = [];
      }
      class b extends o.Component {
        m_strPlayerID = "";
        m_player = null;
        m_playerContainer = null;
        m_bPlayerReady = !1;
        static s_nPlayerIndex = 0;
        constructor(e) {
          super(e),
            (this.m_strPlayerID = "YoutubePlayer_" + b.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), s.x9(m, e);
        }
        shouldComponentUpdate(e, a) {
          if (!this.m_player) return !1;
          const t = this.props;
          return t.autoplay != e.autoplay ||
            t.controls != e.controls ||
            t.showInfo != e.showInfo ||
            t.video != e.video
            ? (this.CreatePlayer(e), !1)
            : ((t.width == e.width && t.height == e.height) ||
                (this.m_bPlayerReady &&
                  e.width &&
                  e.height &&
                  this.m_player.setSize(e.width, e.height)),
              t.forcePause != e.forcePause);
        }
        componentDidUpdate(e) {
          e.forcePause != this.props.forcePause &&
            (this.props.forcePause
              ? this.m_player.pauseVideo()
              : this.m_player.playVideo());
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
            this.m_playerContainer && _(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const a = !1 === e.autoplay ? 0 : 1,
            t = !0 === e.showInfo ? 1 : 0,
            r = !0 === e.controls ? 1 : 0,
            n = !0 === e.showFullscreenBtn ? 1 : 0,
            i = !0 === e.playsInline ? 1 : 0;
          let o = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              host: "https://www.youtube-nocookie.com",
              playerVars: {
                autoplay: a,
                showinfo: t,
                autohide: 1,
                fs: n,
                modestbranding: 1,
                rel: 0,
                playsinline: i,
                iv_load_policy: 3,
                controls: r,
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
          if (((this.m_bPlayerReady = !0), this.props.onVideoInfoChanged)) {
            let e = this.m_player.getVideoData(),
              a = { strAuthor: "", strTitle: "", strVideoID: "" };
            e.author && (a.strAuthor = e.author),
              e.title && (a.strTitle = e.title),
              e.video_id && (a.strVideoID = e.video_id),
              this.props.onVideoInfoChanged(a);
          }
          this.props.width &&
            this.props.height &&
            this.m_player.setSize(this.props.width, this.props.height),
            this.props.autoplay && this.m_player.playVideo(),
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
          return (0, i.jsx)(g, {
            video: this.props.video,
            children: (0, i.jsx)(
              p.j,
              {
                onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
                ref: this.BindPlayerContainer,
                className: (0, u.A)("YoutubePlayer", this.props.classnames),
                children: (0, i.jsx)(d.t, {
                  className: "YoutubePlayerThrobber",
                }),
              },
              this.m_strPlayerID,
            ),
          });
        }
      }
      function g(e) {
        const { video: a, children: t } = e;
        return (0, c.Rp)("youtube")
          ? t
          : (0, i.jsx)("a", {
              href: `https://www.youtube.com/watch?v=${a}`,
              children: (0, y.we)("#EventCalendar_WatchYouTubeVideo"),
            });
      }
      (0, n.Cg)([l.oI], b.prototype, "BindPlayerContainer", null),
        (0, n.Cg)([l.oI], b.prototype, "OnYoutubeScriptsReady", null),
        (0, n.Cg)([l.oI], b.prototype, "CreatePlayer", null),
        (0, n.Cg)([l.oI], b.prototype, "OnPlayerReady", null),
        (0, n.Cg)([l.oI], b.prototype, "OnPlayerStateChange", null),
        (0, n.Cg)([l.oI], b.prototype, "OnError", null),
        (0, n.Cg)([l.oI], b.prototype, "OnPlayerLeftView", null),
        (0, n.Cg)([l.oI], b.prototype, "PlayVideo", null);
    },
  },
]);
