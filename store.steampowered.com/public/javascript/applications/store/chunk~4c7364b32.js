/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [94932],
    {
      37589: (Q, U, r) => {
        r.d(U, { Y: () => P, j: () => B });
        var I = r(7850),
          S = r(90626),
          m = r(2259),
          s = r(18938);
        function P(d) {
          const v = (0, m.OO)(d, d.options);
          return (0, I.jsx)("span", { ref: v, style: { fontSize: 0 } });
        }
        const B = S.forwardRef(function (v, G) {
          const { onLeave: p, onEnter: T, options: C, ...R } = v,
            y = (0, m.OO)(v, v.options),
            L = (0, s.Ue)(y, G);
          return (0, I.jsx)("div", { ref: L, ...R });
        });
      },
      1123: (Q, U, r) => {
        r.d(U, { Ey: () => M, Rp: () => K });
        var I = r(32093);
        const m = JSON.parse(
          `{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}`,
        ).h;
        var s = r(79024),
          P = r(90900),
          B = r(52438);
        function d(u, A) {
          switch (u.preference_state) {
            case s.CY.__:
            case s.CY.PK:
              return !0;
            case s.CY.rE:
              return !1;
            case s.CY.UI:
            default:
              switch (A) {
                case "youtube":
                  return u.third_party_content?.youtube;
                case "vimeo":
                  return u.third_party_content?.vimeo;
                case "sketchfab":
                  return u.third_party_content?.sketchfab;
                case "generic":
                  return !1;
              }
          }
        }
        function v(u) {
          switch (u.preference_state) {
            case s.CY.__:
            case s.CY.PK:
              return !1;
            default:
              return !0;
          }
        }
        function G(u, A, D, w) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => p(u, A, D, w),
          };
        }
        async function p(u, A, D, w) {
          if ((0, I.nA)(w))
            return { version: s.ie.mO, preference_state: s.CY.__ };
          if (A) {
            const n = (await s.T4.GetCookiePreferences(u, {}))
              .Body()
              .toObject().preferences;
            if (n && n.version !== void 0 && n.version != s.ie.CL) return n;
          }
          try {
            const t = (0, B.j_)(P.J_);
            if (t) {
              const n = JSON.parse(t);
              if (n && n.version !== void 0 && n.version != s.ie.CL) return n;
            }
          } catch {}
          return D in m.eucountries || D in m.eeacountries || D === "CH"
            ? { version: s.ie.mO, preference_state: s.CY._H }
            : { version: s.ie.mO, preference_state: s.CY.__ };
        }
        var T = r(80902),
          C = r(68312),
          R = r(72609);
        function y(u) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => p(u, R.iA.logged_in, R.TS.COUNTRY, R.TS.EREALM),
          };
        }
        function L() {
          const u = (0, C.KV)();
          return (0, T.I)(y(u));
        }
        function K(u) {
          const { data: A } = L();
          return A ? d(A, u) : void 0;
        }
        function M() {
          const { data: u } = L();
          return u ? !v(u) : void 0;
        }
      },
      84676: (Q, U, r) => {
        r.d(U, {
          G6: () => C,
          Gg: () => L,
          Ow: () => y,
          Sq: () => G,
          YM: () => w,
          eR: () => p,
          ik: () => T,
          mZ: () => K,
          t7: () => R,
          zX: () => u,
        });
        var I = r(41735),
          S = r.n(I),
          m = r(90626),
          s = r(72604),
          P = r(56062),
          B = r(30096),
          d = r(10142);
        function v(t, n, l = !0) {
          const h = l
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            E = l || CStoreItemCache.Get().BHasStoreItem(t, n, h) ? t : null,
            [a, e] = C(E, n, h),
            [i, o] = useState(null),
            [c, f] = C(i, n, h);
          useEffect(() => {
            a?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              o(a.GetParentAppID());
          }, [a]);
          let _ = a?.GetShortDescription()
            ? StripBBCodeTags(a.GetShortDescription())
            : "";
          (!_ || _.length === 0) &&
            c &&
            (_ = c?.GetShortDescription()
              ? StripBBCodeTags(c.GetShortDescription())
              : "");
          const g = e == T && (!i || f == T);
          return [_, g];
        }
        const G = 1,
          p = 2,
          T = 3;
        function C(t, n, l, h) {
          const E = (0, m.useRef)(void 0),
            a = (0, m.useRef)(void 0),
            e = (0, B.CH)();
          E.current = t;
          const [i, o] = (0, m.useState)(void 0),
            {
              include_assets: c,
              include_release: f,
              include_platforms: _,
              include_all_purchase_options: g,
              include_screenshots: b,
              include_trailers: N,
              include_ratings: V,
              include_tag_count: Y,
              include_reviews: F,
              include_basic_info: W,
              include_supported_languages: H,
              include_full_description: j,
              include_included_items: z,
              include_assets_without_overrides: X,
              apply_user_filters: O,
              include_links: Z,
              include_extra_details: J,
            } = l;
          if (
            ((0, m.useEffect)(() => {
              const k = {
                include_assets: c,
                include_release: f,
                include_platforms: _,
                include_all_purchase_options: g,
                include_screenshots: b,
                include_trailers: N,
                include_ratings: V,
                include_tag_count: Y,
                include_reviews: F,
                include_basic_info: W,
                include_supported_languages: H,
                include_full_description: j,
                include_included_items: z,
                include_assets_without_overrides: X,
                apply_user_filters: O,
                include_links: Z,
                include_extra_details: J,
              };
              let $ = null;
              return (
                !t ||
                  t < 0 ||
                  d.A.Get().BHasStoreItem(t, n, k) ||
                  (i !== void 0 && h && h == a.current) ||
                  (h !== a.current && (o(void 0), (a.current = h)),
                  ($ = S().CancelToken.source()),
                  d.A.Get()
                    .QueueStoreItemRequest(t, n, k)
                    .then((ee) => {
                      !$?.token.reason && E.current === t && o(ee == s.R), e();
                    })),
                () => $?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              t,
              n,
              h,
              i,
              c,
              f,
              _,
              g,
              b,
              N,
              V,
              Y,
              F,
              W,
              H,
              j,
              z,
              X,
              O,
              Z,
              J,
              e,
            ]),
            !t)
          )
            return [null, p];
          if (i === !1) return [void 0, p];
          if (d.A.Get().BIsStoreItemMissing(t, n)) return [void 0, p];
          if (!d.A.Get().BHasStoreItem(t, n, l)) return [void 0, G];
          const x = d.A.Get().GetStoreItemWithLegacyVisibilityCheck(t, n);
          return x ? [x, T] : [null, p];
        }
        function R(t, n, l) {
          return C(t, P.c6.qI, n, l);
        }
        function y(t, n, l) {
          return C(t, P.c6.xO, n, l);
        }
        function L(t, n, l) {
          return C(t, P.c6.RD, n, l);
        }
        function K(t, n, l) {
          const [h, E] = C(t, n, l);
          let a;
          h?.GetStoreItemType() == P.c6.RD &&
            !h.GetAssets()?.GetHeaderURL() &&
            h?.GetIncludedAppIDs().length == 1 &&
            (a = h.GetIncludedAppIDs()[0]);
          const [e, i] = R(a, l);
          return a && e?.BIsVisible() ? [e, i] : [h, E];
        }
        function M(t, n, l, h) {
          const E = (0, B.CH)(),
            {
              include_assets: a,
              include_release: e,
              include_platforms: i,
              include_all_purchase_options: o,
              include_screenshots: c,
              include_trailers: f,
              include_ratings: _,
              include_tag_count: g,
              include_reviews: b,
              include_basic_info: N,
              include_supported_languages: V,
              include_full_description: Y,
              include_included_items: F,
              include_assets_without_overrides: W,
              apply_user_filters: H,
              include_links: j,
              include_extra_details: z,
            } = l;
          return (
            (0, m.useEffect)(() => {
              if (!t || t.length == 0) return;
              const O = {
                  include_assets: a,
                  include_release: e,
                  include_platforms: i,
                  include_all_purchase_options: o,
                  include_screenshots: c,
                  include_trailers: f,
                  include_ratings: _,
                  include_tag_count: g,
                  include_reviews: b,
                  include_basic_info: N,
                  include_supported_languages: V,
                  include_full_description: Y,
                  include_included_items: F,
                  include_assets_without_overrides: W,
                  apply_user_filters: H,
                  include_links: j,
                  include_extra_details: z,
                },
                Z = t.filter(
                  (k) =>
                    !(
                      d.A.Get().BHasStoreItem(k, n, O) ||
                      d.A.Get().BIsStoreItemMissing(k, n)
                    ),
                );
              if (Z.length == 0) return;
              const J = S().CancelToken.source(),
                x = Z.map((k) => d.A.Get().QueueStoreItemRequest(k, n, O));
              return (
                Promise.all(x).then(() => {
                  J.token.reason || E();
                }),
                () => J.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [t, n, h, E, a, e, i, o, c, f, _, g, b, N, V, Y, F, W, H, j, z]),
            t
              ? t.every(
                  (O) =>
                    d.A.Get().BHasStoreItem(O, n, l) ||
                    d.A.Get().BIsStoreItemMissing(O, n),
                )
                ? t.every((O) =>
                    d.A.Get().GetStoreItemWithLegacyVisibilityCheck(O, n),
                  )
                  ? T
                  : p
                : G
              : p
          );
        }
        function u(t, n, l) {
          return M(t, P.c6.qI, n, l);
        }
        function A(t, n, l) {
          return M(t, EStoreItemType.k_EStoreItemType_Bundle, n, l);
        }
        function D(t, n, l) {
          return M(t, EStoreItemType.k_EStoreItemType_Package, n, l);
        }
        function w() {
          m.useEffect(
            () => (
              d.A.Get().SetReturnUnavailableItems(!0),
              () => d.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      32608: (Q, U, r) => {
        r.d(U, { N1: () => n, VC: () => A, fm: () => E, gZ: () => l });
        var I = r(7850),
          S = r(90626),
          m = r(41635),
          s = r(30096),
          P = r(36707),
          B = r(85599),
          d = r(1123),
          v = r(18210),
          G = r(37589),
          p = r(18938),
          T = r(2259),
          C = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          y = (a, e, i, o) => {
            for (
              var c = o > 1 ? void 0 : o ? R(e, i) : e, f = a.length - 1, _;
              f >= 0;
              f--
            )
              (_ = a[f]) && (c = (o ? _(e, i, c) : _(c)) || c);
            return o && c && C(e, i, c), c;
          },
          L = ((a) => (
            (a[(a.NotLoaded = 0)] = "NotLoaded"),
            (a[(a.Loading = 1)] = "Loading"),
            (a[(a.Loaded = 2)] = "Loaded"),
            a
          ))(L || {});
        let K = 0,
          M = [];
        function u(a) {
          if (K == 2) {
            a && a();
            return;
          }
          if (K == 0) {
            let e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            let i = document.getElementsByTagName("script")[0];
            i.parentNode?.insertBefore(e, i),
              (window.onYouTubeIframeAPIReady = w);
          }
          a && (M.includes(a) || M.push(a));
        }
        function A(a = !0) {
          const e = (0, d.Rp)("youtube");
          (0, S.useEffect)(() => {
            e && a && u();
          }, [e, a]);
        }
        function D(a) {
          m.x9(M, a);
        }
        function w() {
          K = 2;
          for (let a of M) a();
          M = [];
        }
        const t = class q extends S.Component {
          m_strPlayerID = "";
          m_player = null;
          m_playerContainer = null;
          m_bPlayerReady = !1;
          static s_nPlayerIndex = 0;
          constructor(e) {
            super(e),
              (this.m_strPlayerID = "YoutubePlayer_" + q.s_nPlayerIndex++),
              (this.state = { bYoutubeLoaded: !1 });
          }
          componentWillUnmount() {
            this.DestroyPlayer(), D(this.OnYoutubeScriptsReady);
          }
          shouldComponentUpdate(e, i) {
            if (!this.m_player) return !1;
            const o = this.props;
            return o.autoplay != e.autoplay ||
              o.controls != e.controls ||
              o.showInfo != e.showInfo ||
              o.video != e.video
              ? (this.CreatePlayer(e), !1)
              : ((o.width != e.width || o.height != e.height) &&
                  this.m_bPlayerReady &&
                  e.width &&
                  e.height &&
                  this.m_player.setSize(e.width, e.height),
                o.forcePause != e.forcePause);
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
              } catch {
              } finally {
                this.m_player = null;
              }
          }
          BindPlayerContainer(e) {
            this.m_playerContainer != e &&
              ((this.m_playerContainer = e),
              this.DestroyPlayer(),
              this.m_playerContainer && u(this.OnYoutubeScriptsReady));
          }
          OnYoutubeScriptsReady() {
            this.CreatePlayer(this.props);
          }
          CreatePlayer(e) {
            if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
            const i = e.autoplay === !1 ? 0 : 1,
              o = e.showInfo === !0 ? 1 : 0,
              c = e.controls === !0 ? 1 : 0,
              f = e.showFullscreenBtn === !0 ? 1 : 0,
              _ = e.playsInline === !0 ? 1 : 0;
            let g = {
                width: e.width !== void 0 ? String(e.width) : void 0,
                height: e.height !== void 0 ? String(e.height) : void 0,
                videoId: e.video,
                host: "https://www.youtube-nocookie.com",
                playerVars: {
                  autoplay: i,
                  showinfo: o,
                  autohide: 1,
                  fs: f,
                  modestbranding: 1,
                  rel: 0,
                  playsinline: _,
                  iv_load_policy: 3,
                  controls: c,
                  start: e.startSeconds,
                },
                events: {
                  onReady: this.OnPlayerReady,
                  onStateChange: this.OnPlayerStateChange,
                  onError: this.OnError,
                },
              },
              b = this.m_playerContainer.firstElementChild;
            (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(b, g));
          }
          OnPlayerReady(e) {
            if (
              ((this.m_bPlayerReady = !0),
              this.props.onVideoInfoChanged && this.m_player)
            ) {
              let i = this.m_player.getVideoData(),
                o = { strAuthor: "", strTitle: "", strVideoID: "" };
              i.author && (o.strAuthor = i.author),
                i.title && (o.strTitle = i.title),
                i.video_id && (o.strVideoID = i.video_id),
                this.props.onVideoInfoChanged(o);
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
                break;
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
            return (0, I.jsx)(l, {
              video: this.props.video,
              children: (0, I.jsx)(
                G.j,
                {
                  onLeave: this.props.autopause
                    ? this.OnPlayerLeftView
                    : void 0,
                  ref: this.BindPlayerContainer,
                  className: (0, P.A)("YoutubePlayer", this.props.classnames),
                  children: (0, I.jsx)(B.t, {
                    className: "YoutubePlayerThrobber",
                  }),
                },
                this.m_strPlayerID,
              ),
            });
          }
        };
        y([s.oI], t.prototype, "BindPlayerContainer", 1),
          y([s.oI], t.prototype, "OnYoutubeScriptsReady", 1),
          y([s.oI], t.prototype, "CreatePlayer", 1),
          y([s.oI], t.prototype, "OnPlayerReady", 1),
          y([s.oI], t.prototype, "OnPlayerStateChange", 1),
          y([s.oI], t.prototype, "OnError", 1),
          y([s.oI], t.prototype, "OnPlayerLeftView", 1),
          y([s.oI], t.prototype, "PlayVideo", 1);
        let n = t;
        function l(a) {
          const { video: e, children: i } = a;
          return (0, d.Rp)("youtube")
            ? i
            : (0, I.jsx)("a", {
                href: `https://www.youtube.com/watch?v=${e}`,
                children: (0, v.we)("#EventCalendar_WatchYouTubeVideo"),
              });
        }
        function h(a) {
          const e = new URLSearchParams({
            autoplay: a.autoplay ? "1" : "0",
            controls: a.controls ? "1" : "0",
            fs: a.showFullscreenBtn ? "1" : "0",
            playsinline: a.playsInline ? "1" : "0",
            rel: "0",
            iv_load_policy: "3",
            modestbranding: "1",
            enablejsapi: "1",
          });
          return (
            a.startSeconds && e.set("start", String(a.startSeconds)),
            `https://www.youtube-nocookie.com/embed/${encodeURIComponent(a.video)}?${e.toString()}`
          );
        }
        function E(a) {
          const { video: e, autopause: i, className: o } = a,
            c = S.useRef(null),
            f = S.useRef(null),
            _ = S.useCallback(() => c.current?.pauseVideo(), []),
            g = (0, T.OO)({ onLeave: i ? _ : void 0 }),
            b = (0, p.Ue)(f, g);
          return (
            S.useEffect(() => {
              const N = () => {
                f.current && (c.current = new YT.Player(f.current, {}));
              };
              return (
                i && u(N),
                () => {
                  D(N), (c.current = null);
                }
              );
            }, [i]),
            (0, I.jsx)("iframe", {
              ref: b,
              className: o,
              src: h(a),
              title: e,
              allow: "autoplay; encrypted-media; picture-in-picture; web-share",
              allowFullScreen: !0,
              frameBorder: 0,
            })
          );
        }
      },
    },
  ]);
})();
