/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [716],
  {
    2108: (e) => {
      e.exports = { BreadContainer: "YaL4BAoqywnKnb5jbU_il" };
    },
    33380: (e) => {
      e.exports = {
        VideoReviewCtn: "V6zz2NPPxfnGjAchCe56r",
        YouTubePreviewImage: "_3joL1ZVcmC-6lCOLfjuIq7",
        TwitchPlayer: "_1Q0Ym9jG7UCFeD3c9LbOSy",
      };
    },
    70758: (e) => {
      e.exports = {
        YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
        YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
      };
    },
    62014: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        CuratorListCtn: "_2gWFdH7drZgtMXI_JjbaEe",
        CuratorMoreCtn: "_16t3PcvDZGiwAgEfjIWfND",
        TopReviewInfo: "_3SZBzK03VjBtPI7wx3Z1Pt",
        SaleBanner: "_1wbf-cPcI2i7efNOekBbhu",
        Title: "_1MhFdjaeyR9X7HgdfjSXqG",
        Blurb: "rrcHStOnbRfOfaohgKQ55",
        VideoReviewCtn: "RojwrkrnYMOZ6Ab8k-v1r",
        YouTubePreviewImage: "eObSf_yyzMWHlRgVTfVWa",
        CuratorList: "_1VI6Grz2uioikkf0a6Tw0k",
        CuratorListGrid: "qJM6j2qrVRIXCMuuxmhQA",
        CuratorReview: "_31hoQDSYDcWbwweAx-nymb",
        CapsuleCtn: "MY9Lke1NKqCw4L796pl4u",
        YouTubeCapsule: "_1siEspisMPcFe74Nhb8Y1h",
        YouTubeCtn: "_1uz1Wrv0OB4A4PzZFy-7ze",
        YouTubeCapsuleBottomBar: "_1d9MpJzvsoRCYuymkRgyB7",
        GameImageCtn: "_220F7CEs1Z6JO8qX1VpEin",
        GameImage: "_7gTF4ahFWgDDx5lj6B81t",
        FullWidth: "_3ditFur3nylrloT3tIcfyH",
        ReviewTextSection: "_1597WAIOnVRCDEZFRnmiOg",
        GameTitle: "nl2T_2iAiLU-LBJ0Vlt1g",
        RecommendationTypeAndDate: "_2lz6uYceCiIZbZ9gceZI-p",
        Recommended: "_3v9QioBsRmE5yW7CqZmejk",
        NotRecommended: "_3iOGokAKIIBxl8O2K4ReUO",
        Informational: "_261FhJXj3ppl0_SvJBDLeL",
        ReviewDate: "HCiYl0KEiRyfIc-3K7r51",
        ReviewBlurb: "_1y_bxMLn9yOlKneJzFSPkc",
        FullReviewLink: "_3_8G-9J9Ck495Bbx1AtzXb",
        FullReviewAnchor: "_3pWCNXNZaWp_KqFU6n38sy",
        FullReviewDomain: "_2R37NZqjmxkImiPnoElHtm",
        BackgroundAnimation: "_3mJ9erLLVEMyDp_3pY3KTp",
        "ItemFocusAnim-darkerGrey-nocolor": "_1ulNFI0sHkRk8TBa3fDFoS",
        "ItemFocusAnim-darkerGrey": "OAwSuqlAeZPXQNLFz_zLx",
        "ItemFocusAnim-darkGreySettings": "_1vwA5-HGmaz4WDUPfeIMXw",
        "ItemFocusAnim-darkGrey": "_16cDR36DBbspxGZ8MxxB4Z",
        "ItemFocusAnim-grey": "oS4oWYqe5S8U6CukOBsBi",
        "ItemFocusAnim-translucent-white-10": "_1jj4yrDY55YFShmQZ8VANk",
        "ItemFocusAnim-translucent-white-20": "TqUMJDChgbfs4XXKTa2UZ",
        "ItemFocusAnimBorder-darkGrey": "_35LQt0hozt0Fu6IHh1i9gW",
        "ItemFocusAnim-green": "_2cU5wBvJhWpmq45gjPgBx_",
        focusAnimation: "XfHabgjmzuwMo5SRyzbkv",
        hoverAnimation: "_2qskIW3iRVBxrrqQ3Sel07",
      };
    },
    22584: (e) => {
      e.exports = { BreadContainer: "GkVFIKIAijTGzfSc4BEQl" };
    },
    17083: (e, t, a) => {
      "use strict";
      a.d(t, { N_: () => _, k2: () => g });
      var n = a(92757),
        r = a(42891),
        i = a(90626),
        o = a(29248),
        s = a(58584),
        l = a(81115),
        c = a(68841);
      i.Component;
      i.Component;
      var u = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, o.yJ)(e, null, null, t) : e;
        },
        m = function (e) {
          return e;
        },
        p = i.forwardRef;
      void 0 === p && (p = m);
      var h = p(function (e, t) {
        var a = e.innerRef,
          n = e.navigate,
          r = e.onClick,
          o = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          c = o.target,
          u = (0, s.A)({}, o, {
            onClick: function (e) {
              try {
                r && r(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), n());
            },
          });
        return (u.ref = (m !== p && t) || a), i.createElement("a", u);
      });
      var _ = p(function (e, t) {
          var a = e.component,
            r = void 0 === a ? h : a,
            _ = e.replace,
            y = e.to,
            f = e.innerRef,
            g = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return i.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var a = e.history,
              n = d(u(y, e.location), e.location),
              l = n ? a.createHref(n) : "",
              h = (0, s.A)({}, g, {
                href: l,
                navigate: function () {
                  var t = u(y, e.location),
                    n = (0, o.AO)(e.location) === (0, o.AO)(d(t));
                  (_ || n ? a.replace : a.push)(t);
                },
              });
            return (
              m !== p ? (h.ref = t || f) : (h.innerRef = f),
              i.createElement(r, h)
            );
          });
        }),
        y = function (e) {
          return e;
        },
        f = i.forwardRef;
      void 0 === f && (f = y);
      var g = f(function (e, t) {
        var a = e["aria-current"],
          r = void 0 === a ? "page" : a,
          o = e.activeClassName,
          m = void 0 === o ? "active" : o,
          p = e.activeStyle,
          h = e.className,
          g = e.exact,
          I = e.isActive,
          S = e.location,
          b = e.sensitive,
          A = e.strict,
          v = e.style,
          C = e.to,
          w = e.innerRef,
          G = (0, l.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return i.createElement(n.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var a = S || e.location,
            o = d(u(C, a), a),
            l = o.pathname,
            R = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            N = R
              ? (0, n.B6)(a.pathname, {
                  path: R,
                  exact: g,
                  sensitive: b,
                  strict: A,
                })
              : null,
            j = !!(I ? I(N, a) : N),
            B = "function" == typeof h ? h(j) : h,
            P = "function" == typeof v ? v(j) : v;
          j &&
            ((B = (function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(B, m)),
            (P = (0, s.A)({}, P, p)));
          var L = (0, s.A)(
            { "aria-current": (j && r) || null, className: B, style: P, to: o },
            G,
          );
          return (
            y !== f ? (L.ref = t || w) : (L.innerRef = w), i.createElement(_, L)
          );
        });
      });
    },
    81886: (e, t, a) => {
      "use strict";
      a.d(t, { fp: () => r, vm: () => i });
      var n = a(96171);
      function r(e) {
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
          (e == n.uE.HT ||
            e == n.uE._i ||
            e == n.uE.Sv ||
            e == n.uE.Ov ||
            e == n.uE.ue ||
            e == n.uE.Hk ||
            e == n.uE.RA ||
            e == n.uE.Wz ||
            e == n.uE.Vi ||
            e == n.uE.pl)
        );
      }
    },
    23338: (e, t, a) => {
      "use strict";
      a.d(t, { Y: () => s, j: () => l });
      var n = a(7850),
        r = a(90626),
        i = a(40236),
        o = a(8871);
      function s(e) {
        const t = (0, i.OO)(e, e.options);
        return (0, n.jsx)("span", { ref: t, style: { fontSize: 0 } });
      }
      const l = r.forwardRef(function (e, t) {
        const { onLeave: a, onEnter: r, options: s, ...l } = e,
          c = (0, i.OO)(e, e.options),
          u = (0, o.Ue)(c, t);
        return (0, n.jsx)("div", { ref: u, ...l });
      });
    },
    85693: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => c });
      var n = a(7850),
        r = a(45699),
        i = a(76217),
        o = a(17083),
        s = a(52038),
        l = a(2108);
      function c(e) {
        const { crumbs: t, className: a, bHideLastArrow: c } = e;
        return t && 0 != t.length
          ? (0, n.jsxs)("div", {
              className: (0, s.A)(l.BreadContainer, a),
              children: [
                (0, n.jsx)(i.Z, {
                  className: "blockbg",
                  "flow-children": "row",
                  children: t.map((e, a) => {
                    const i = new Array();
                    return (
                      e.url.startsWith("http")
                        ? i.push(
                            (0, n.jsx)(
                              r.Ii,
                              { href: e.url, children: e.name },
                              "anchor_" + e.name,
                            ),
                          )
                        : i.push(
                            (0, n.jsx)(
                              o.N_,
                              { to: e.url, children: e.name },
                              "link_" + e.name,
                            ),
                          ),
                      (!c || a < t.length - 1) &&
                        i.push(
                          (0, n.jsx)(
                            "span",
                            { children: " > " },
                            e.name + "span",
                          ),
                        ),
                      i
                    );
                  }),
                }),
                (0, n.jsx)("div", { style: { clear: "left" } }),
              ],
            })
          : null;
      }
    },
    52505: (e, t, a) => {
      "use strict";
      a.d(t, { Ey: () => h, Rp: () => p });
      var n = a(98841),
        r = a(2160),
        i = a(8527),
        o = a(38861);
      const s = JSON.parse(
        '{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d\'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}',
      ).h;
      var l = a(91933);
      async function c(e) {
        if ((0, r.nA)(i.TS.EREALM))
          return { version: n.ie.mO, preference_state: n.CY.__ };
        if (i.iA.logged_in) {
          const t = (await n.T4.GetCookiePreferences(e, {}))
            .Body()
            .toObject().preferences;
          if (t && void 0 !== t.version && t.version != n.ie.CL) return t;
        }
        try {
          const e = (0, l.j_)(o.J_);
          if (e) {
            const t = JSON.parse(e);
            if (t && void 0 !== t.version && t.version != n.ie.CL) return t;
          }
        } catch (e) {}
        const t = i.TS.COUNTRY;
        return t in s.eucountries || t in s.eeacountries || "CH" === t
          ? { version: n.ie.mO, preference_state: n.CY._H }
          : { version: n.ie.mO, preference_state: n.CY.__ };
      }
      var u = a(80902),
        d = a(23809);
      function m() {
        const e = (0, d.KV)();
        return (0, u.I)(
          (function (e) {
            return { queryKey: ["CookiePreferences"], queryFn: () => c(e) };
          })(e),
        );
      }
      function p(e) {
        const { data: t } = m();
        return t
          ? (function (e, t) {
              switch (e.preference_state) {
                case n.CY.__:
                case n.CY.PK:
                  return !0;
                case n.CY.rE:
                  return !1;
                case n.CY.UI:
                default:
                  switch (t) {
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
            })(t, e)
          : void 0;
      }
      function h() {
        const { data: e } = m();
        return e
          ? !(function (e) {
              switch (e.preference_state) {
                case n.CY.__:
                case n.CY.PK:
                  return !1;
                default:
                  return !0;
              }
            })(e)
          : void 0;
      }
    },
    57876: (e, t, a) => {
      "use strict";
      a.d(t, { Xh: () => u, cU: () => d, tf: () => p, wl: () => m });
      var n = a(22837),
        r = a(71150),
        i = a(96171),
        o = a(30894),
        s = a(16021),
        l = a(62792),
        c = a(78327);
      const u = {
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
      class d {
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
      const m = 4;
      function p(e, t, a, n, r, i) {
        const o = new Array(),
          c = new Array(),
          u = new Array(),
          d = new Array();
        if (!e || 0 == e.length) return o;
        const p = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let i of e) {
          let e = i.id,
            m = l.by.k_NotRejected;
          switch (i.item_type) {
            case "sub":
              const r = s.A.Get().GetPackage(e);
              if (1 !== r?.GetIncludedAppIDs()?.length) {
                m = I(e, t, n, !0);
                break;
              }
              e = r.GetIncludedAppIDs()[0];
            case "app":
              m = f(e, t, a, n, !0);
              break;
            case "bundle":
              m = S(e, t, n, !0);
          }
          if (
            (m == l.by.k_NotRejected
              ? ((i.rejected = l.by.k_NotRejected),
                o.push({ ...i, priority: 1 }))
              : p.includes(m)
                ? ((i.rejected = l.by.k_NotRejected), c.push(i))
                : ((i.rejected = m),
                  m == l.by.k_RejectIgnoredGame ? u.push(i) : d.push(i)),
            o.length > r)
          )
            break;
        }
        return (
          o.length < r &&
            (h(o, c, i, 2),
            o.length < i &&
              t.enforce_minimum &&
              (h(o, u, i, 3), h(o, d, i, m))),
          o
        );
      }
      function h(e, t, a, n) {
        for (let r = 0; e.length < a && r < t.length; ++r)
          e.push({ ...t[r], priority: n });
      }
      function _(e, t) {
        const a = o.Fm.Get();
        if (t.only_current_platform && a.BHasPlatformPreferenceSet()) {
          if (
            !(
              (e.GetPlatforms()?.windows && a.BIsPreferredPlatform("win")) ||
              (e.GetPlatforms()?.mac && a.BIsPreferredPlatform("mac")) ||
              (e.GetPlatforms()?.steamos_linux &&
                a.BIsPreferredPlatform("linux"))
            )
          )
            return l.by.k_RejectWrongPlatform;
        }
        if (!t.prepurchase && e.BIsComingSoon())
          return l.by.k_RejectNoComingSoon;
        const n = e.GetPlatforms();
        return !t.virtual_reality &&
          n &&
          n.vr_support &&
          n.vr_support.vrhmd_only
          ? l.by.k_RejectNoVR
          : e.GetAllCreatorClanIDs()?.some((e) => a.BIsIgnoringCurator(e))
            ? l.by.k_RejectCreatorClan
            : l.by.k_NotRejected;
      }
      function y(e, t) {
        if (t.localized) {
          const t = (0, n.sfN)(c.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function f(e, t, a, n, c) {
        const u = s.A.Get().GetApp(e);
        if (!u) return l.by.k_RejectNotLoaded;
        const d = _(u, t);
        if (d != l.by.k_NotRejected) return d;
        const m = o.Fm.Get();
        if (m.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (m.BExcludeTagIDs(u.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (m.BExcludesContentDescriptor(u.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && u.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const p = u.GetAppType();
        if (!t.software && p == i.uE.Sv) return l.by.k_RejectSoftware;
        if (t.games_already_in_library && m.BIsGameOwned(e))
          return l.by.k_RejectInLibrary;
        if (t.games_not_in_library && !m.BIsGameOwned(e))
          return l.by.k_RejectNotInLibrary;
        if (!t.video && [i.uE.Wz, i.uE.gQ, i.uE.ID].includes(p))
          return l.by.k_RejectVideo;
        if (t.has_discount) {
          const e = u.GetBestPurchaseOption();
          if (!e || !e.discount_pct) return l.by.k_RejectNoDiscount;
        }
        return "adultonly" != a &&
          t.no_ao_content &&
          (u.HasContentDescriptorID(r.u7) || u.HasContentDescriptorID(r.T4))
          ? l.by.k_RejectAO
          : p == i.uE.ue &&
              t.games_already_in_library &&
              m.BIsGameOwned(u.GetParentAppID() || 0)
            ? l.by.k_RejectInLibrary
            : c
              ? (p == i.uE.ue && n.BHasAppID(u.GetParentAppID() || 0)) ||
                n.BHasAppID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : t.has_trailer && !u.BHasTrailers(!1)
                  ? l.by.k_RejectNoTrailer
                  : y(u, t)
              : l.by.k_NotRejected;
      }
      function g(e, t) {
        const a = o.Fm.Get();
        let n = !1;
        for (let t of e) {
          if (a.BIsGameIgnored(t)) return l.by.k_RejectIgnoredGame;
          a.BIsGameOwned(t) && (n = !0);
        }
        return t.games_not_in_library && n
          ? l.by.k_RejectInLibrary
          : t.games_not_in_library && !n
            ? l.by.k_RejectNotInLibrary
            : l.by.k_NotRejected;
      }
      function I(e, t, a, n) {
        const r = s.A.Get().GetPackage(e);
        if (!r) return l.by.k_RejectNotLoaded;
        const i = _(r, t);
        if (i != l.by.k_NotRejected) return i;
        const c = g(r.GetIncludedAppIDs(), t);
        if (c != l.by.k_NotRejected) return c;
        const u = o.Fm.Get();
        return t.games_already_in_library && u.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : n
              ? a.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : y(r, t)
              : l.by.k_NotRejected;
      }
      function S(e, t, a, n) {
        const r = s.A.Get().GetBundle(e);
        if (!r) return l.by.k_RejectNotLoaded;
        const i = _(r, t);
        if (i != l.by.k_NotRejected) return i;
        const o = g(r.GetIncludedAppIDs(), t);
        return o != l.by.k_NotRejected
          ? o
          : n
            ? a.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : y(r, t)
            : l.by.k_NotRejected;
      }
    },
    70995: (e, t, a) => {
      "use strict";
      a.d(t, { Lg: () => c, XU: () => d });
      const n = 20,
        r = /^.*youtube[^v]+v=(.{11}).*/,
        i = /^.*youtu\.be\/(.{11}).*/,
        o = /^.*youtube.*\/embed\/(.{11}).*/,
        s = /^.*[?&]t=([^&]+)(?:&|$)/,
        l = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function c(e) {
        return !!u(e);
      }
      function u(e) {
        const t = e?.length < n ? void 0 : r.exec(e) || i.exec(e) || o.exec(e);
        return t?.[1];
      }
      function d(e) {
        const t = u(e);
        if (!t) return;
        const a = (function (e) {
            const t = s.exec(e);
            return t?.[1];
          })(e),
          n = a
            ? (function (e) {
                const t = l.exec(e);
                if (!(t?.[1] || t?.[2] || t?.[3] || t?.[4])) return;
                if (t?.[4]) return parseInt(t?.[4]);
                let a = 0;
                return (
                  t?.[1] && (a += 3600 * parseInt(t[1])),
                  t?.[2] && (a += 60 * parseInt(t[2])),
                  t?.[3] && (a += parseInt(t[3])),
                  a
                );
              })(a)
            : void 0;
        return { strVideoID: t, nStartSeconds: n };
      }
    },
    62734: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => i });
      var n = a(81393);
      var r = a(78327);
      class i {
        m_HomeView = void 0;
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          return this.m_HomeView?.home;
        }
        static s_globalSingletonStore;
        static Get() {
          var e;
          return (
            i.s_globalSingletonStore ||
              ((e = "CHomeViewStore.s_globalSingletonStore"),
              (0, n.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (i.s_globalSingletonStore = new i()),
              "dev" == r.TS.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = i.s_globalSingletonStore)),
            i.s_globalSingletonStore
          );
        }
        constructor() {
          "dev" === r.TS.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const e = (0, r.Tc)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = (0, r.Tc)(
            "home_view_setting_override",
            "application_config",
          );
          this.ValidateHomeViewDataOverride(t) &&
            this.SetHomeViewSettingOverride(t);
        }
        ValidateHomeViewData(e) {
          const t = e;
          return (
            t && "object" == typeof t.home && "object" == typeof t.main_cluster
          );
        }
        SetHomeViewSetting(e) {
          this.m_HomeView = e;
        }
        ValidateHomeViewDataOverride(e) {
          const t = e;
          return (
            t &&
            (!t.all || "object" == typeof t.all) &&
            (!t.maincap || "object" == typeof t.maincap)
          );
        }
        SetHomeViewSettingOverride(e) {
          this.m_HomeView
            ? (this.m_HomeView.home = {
                ...this.m_HomeView.home,
                ...e?.all,
                ...e?.maincap,
              })
            : (this.m_HomeView = { home: { ...e?.all, ...e?.maincap } });
        }
      }
    },
    6626: (e, t, a) => {
      "use strict";
      a.d(t, {
        F6: () => A,
        ME: () => w,
        QV: () => S,
        RA: () => C,
        cc: () => R,
        fq: () => N,
        m1: () => G,
      });
      var n = a(34629),
        r = a(41735),
        i = a.n(r),
        o = a(14947),
        s = a(90626),
        l = a(22837),
        c = a(37085),
        u = a(17720),
        d = a(4796),
        m = a(30894),
        p = a(6379),
        h = a(99032),
        _ = a(62490),
        y = a(81393),
        f = a(68797),
        g = a(84933),
        I = a(78327);
      const S = 1;
      function b(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, y.wT)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const A = "0";
      function v(e, t) {
        (t.localized_flat_title = (0, _.$Y)([], l.bP9, null)),
          (t.localized_flat_blurb = (0, _.$Y)([], l.bP9, null)),
          (t.localized_flat_link = (0, _.$Y)([], l.bP9, null)),
          t.title !== A && (t.localized_flat_title[e] = t.title),
          t.blurb !== A && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== A && (t.localized_flat_link[e] = t.link),
          t.title_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_title[e.language] = e.localized_string);
          }),
          t.blurb_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_blurb[e.language] = e.localized_string);
          }),
          t.link_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_link[e.language] = e.localized_string);
          });
      }
      class C {
        m_mapList = new Map();
        m_mapEventGIDToLists = new Map();
        m_mapListIDToClanAccount = new Map();
        GetListDetails(e) {
          return this.m_mapList.get(e);
        }
        GetAllSaleCurationLists(e) {
          return this.m_mapEventGIDToLists.get(e) || [];
        }
        GetClanAccountFromListID(e) {
          return this.m_mapListIDToClanAccount.get(e);
        }
        async LoadListDetails(e, t, a) {
          if (this.m_mapList.has(t)) return this.m_mapList.get(t);
          const n =
              I.TS.STORE_BASE_URL +
              "curator/" +
              e.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            r = { listid: t };
          try {
            const o = await i().get(n, { params: r, cancelToken: a?.token });
            if (o?.data?.success == c.R) {
              const a = { ...o.data.list_details };
              return (
                (0, y.wT)(t == a?.listid, "Wanted" + t + "but got" + a?.listid),
                b(a),
                v(o.data.curation_language, a),
                this.m_mapList.set(t, a),
                this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                a
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(
              "CCuratorListStore.LoadListDetails: error on load: " +
                t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async LoadMyFollowedSaleCurationLists(e, t, a) {
          if (
            !I.iA.logged_in ||
            (m.Fm.Get().BIsLoaded() &&
              0 == m.Fm.Get().GetFollowedCuratorCount())
          )
            return [];
          const n = I.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: m.Fm.Get().BIsLoaded()
                ? m.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                : void 0,
            };
          return this.InternalLoadSaleCuratorLists(
            n,
            r,
            "CCuratorListStore.LoadMyFollowedSaleCurationLists",
            e,
            t,
            a,
          );
        }
        async LoadAllSaleCurationLists(e, t, a) {
          if (this.m_mapEventGIDToLists.has(t))
            return this.m_mapEventGIDToLists.get(t);
          const n = I.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
            };
          return this.InternalLoadSaleCuratorLists(
            n,
            r,
            "CCuratorListStore.LoadAllSaleCurationLists",
            e,
            t,
            a,
          );
        }
        async InternalLoadSaleCuratorLists(e, t, a, n, r, s) {
          try {
            const a = await i().get(e, { params: t, cancelToken: s?.token });
            if (a?.data?.success == c.R) {
              const e = new Array();
              return (
                (0, o.h5)(() => {
                  a.data.matches &&
                    a.data.matches.forEach((t) => {
                      t.multi_detail_lists.forEach((a) => {
                        this.m_mapListIDToClanAccount.set(
                          a.listid,
                          t.clan_account_id,
                        ),
                          b(a),
                          v(t.curation_language, a),
                          this.m_mapList.set(a.listid, a),
                          e.push(a);
                      });
                    }),
                    this.m_mapEventGIDToLists.set(r, e);
                }),
                e
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(a + ": error on load: " + t.strErrorMsg, t);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return C.s_Singleton || (C.s_Singleton = new C()), C.s_Singleton;
        }
        constructor() {
          (0, o.Gn)(this),
            "dev" == I.TS.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, I.Tc)("curatorlistdata", "application_config");
          ("dev" != I.TS.WEB_UNIVERSE && "beta" != I.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " + e?.length,
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, o.h5)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    b(t),
                      v(e.curation_language, t),
                      this.m_mapList.set(t.listid, t);
                  });
                });
              });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "object" == typeof t[0]
            ? "number" == typeof t[0].curation_language &&
                t[0].multi_detail_lists &&
                Array.isArray(t[0].multi_detail_lists) &&
                "string" == typeof t[0].multi_detail_lists[0].listid &&
                "number" == typeof t[0].multi_detail_lists[0].list_type &&
                "number" == typeof t[0].multi_detail_lists[0].list_state
            : t && Array.isArray(t) && 0 == t.length;
        }
      }
      function w(e, t) {
        const a = (0, g.CH)();
        return (
          (0, s.useEffect)(() => {
            if (C.Get().GetListDetails(t) || !e) return;
            const n = i().CancelToken.source();
            return (
              (async () => {
                const r = await C.Get().LoadListDetails(e, t);
                if (!n.token.reason)
                  if (r?.apps?.length) {
                    const e = [];
                    for (const t of r.apps) {
                      const a = t?.recommended_app?.appid;
                      a && e.push({ id: a, type: "game" });
                    }
                    (0, h.H2)(e, {
                      ...h.jy,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      a();
                  } else console.error("Found no list data");
              })(),
              () => n.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          C.Get().GetListDetails(t)
        );
      }
      function G(e) {
        const t = e && d.ac.GetClanInfoByClanAccountID(e),
          [a, n] = (0, s.useState)(!!t);
        return (
          (0, s.useEffect)(() => {
            if (a && e) {
              const t = u.b.InitFromClanID(e);
              d.ac.LoadClanInfoForClanSteamID(t).finally(() => {
                n(!0);
              });
            }
          }, [a, e]),
          t
        );
      }
      function R(e) {
        return Boolean(e?.sale_clan_event_gid) && Boolean(e?.sale_clan_steamid);
      }
      function N(e) {
        const t = (0, g.CH)(),
          a = R(e) ? e.sale_clan_event_gid : null,
          n = a && p.O3.GetClanEventModel(a);
        return (
          (0, s.useEffect)(() => {
            if (n || !R(e)) return;
            const r = i().CancelToken.source();
            return (
              (async () => {
                p.O3.Init(),
                  await p.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new u.b(e.sale_clan_steamid),
                    a,
                    0,
                  ),
                  r.token.reason || t();
              })(),
              () => r.cancel("unmounting CuratorList")
            );
          }, [e, a, n, t]),
          n
        );
      }
      (0, n.Cg)([o.sH], C.prototype, "m_mapList", void 0);
    },
    99032: (e, t, a) => {
      "use strict";
      a.d(t, {
        AX: () => S,
        H2: () => f,
        Li: () => I,
        S7: () => h,
        a9: () => b,
        jy: () => g,
        nt: () => y,
        sd: () => p,
        tJ: () => _,
      });
      var n = a(57876),
        r = a(62792),
        i = a(81886),
        o = a(22837),
        s = a(96171),
        l = a(30894),
        c = a(16021),
        u = a(78327),
        d = a(62734),
        m = a(81393);
      function p(e) {
        return c.A.Get().BIsStoreItemMissing(e.id, (0, r.SW)(e.type));
      }
      function h(e, t, a) {
        const n = new Array();
        return (
          e?.forEach((e) => n.push({ id: e, type: "game" })),
          t?.forEach((e) => n.push({ id: e, type: "sub" })),
          a?.forEach((e) => n.push({ id: e, type: "bundle" })),
          n
        );
      }
      function _(e) {
        const t = c.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return t?.GetBestPurchaseOption()?.discount_pct > 0;
      }
      function y(e) {
        if (!d.f.Get().GetHomeView()?.localized) return !0;
        const t = c.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return l.Fm.Get().BIsAnyLanguageEnabled(
          t.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function f(e, t, a) {
        if (!e || 0 == e.length) return [];
        const n = e.filter((e) => (0, i.fp)(e.type)).map((e) => e.id),
          r = e.filter((e) => "sub" === e.type).map((e) => e.id),
          o = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = n.filter((e) => !c.A.Get().BHasApp(e, t)),
            a = r.filter((e) => !c.A.Get().BHasApp(e, t)),
            i = o.filter((e) => !c.A.Get().BHasApp(e, t));
          (e.length > 0 || a.length > 0 || i.length > 0) &&
            (await Promise.all([
              c.A.Get().QueueMultipleAppRequests(e, t),
              c.A.Get().QueueMultiplePackageRequests(a, t),
              c.A.Get().QueueMultipleBundleRequests(i, t),
            ]));
        }
        const s = new Set();
        o?.forEach((e) => {
          const t = c.A.Get().GetBundle(e);
          t?.GetIncludedAppIDs().forEach((e) => s.add(e));
        }),
          r?.forEach((e) => {
            const t = c.A.Get().GetPackage(e);
            t?.GetIncludedAppIDs().forEach((e) => s.add(e));
          });
        const l = Array.from(s).filter((e) => !c.A.Get().BHasApp(e, t));
        if (
          (l.length > 0 && (await c.A.Get().QueueMultipleAppRequests(l, t)),
          n.forEach((e) => s.add(e)),
          a)
        ) {
          const e = Array.from(s)
            .map((e) => {
              const t = c.A.Get().GetApp(e);
              return t?.GetParentAppID()
                ? (s.add(t.GetParentAppID()), t.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((e) => !c.A.Get().BHasApp(e, t));
          e.length > 0 && (await c.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(s).filter((e) => {
          const t = c.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const g = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function I(e) {
        const t = l.Fm.Get();
        (0, m.wT)(t.BIsLoaded(), "Dynamic Store not loaded");
        const a = e?.GetAllLanguagesWithSomeSupport() || [],
          n = d.f.Get().GetHomeView()?.localized;
        return (
          !e ||
          (e.GetStoreItemType() == s.c6.qI &&
            (t.BIsGameIgnored(e.GetAppID()) ||
              t.BIsGameIgnored(e.GetParentAppID()))) ||
          t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
          t.BExcludeTagIDs(e.GetTagIDs()) ||
          e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)) ||
          (n &&
            !(
              0 == a.length ||
              e.BHasSomeLanguageSupport(o.Bhc) ||
              t.BIsAnyLanguageEnabled(a)
            ))
        );
      }
      async function S(e, t, a, i) {
        let o = 0,
          s = 0;
        const d = [];
        await f(e, n.Xh, t);
        for (const n of e) {
          const e = c.A.Get().GetStoreItem(n.id, (0, r.SW)(n.type));
          if (!e) {
            o++;
            continue;
          }
          const u = e
            .GetIncludedAppIDs()
            .map((e) => c.A.Get().GetApp(e))
            .filter(Boolean);
          if ((u.push(e), t)) {
            const e = new Set(u.map((e) => e.GetParentAppID()).filter(Boolean)),
              t = Array.from(e)
                .map((e) => c.A.Get().GetApp(e))
                .filter(Boolean);
            t && u.push(...t);
          }
          u.some(i || I)
            ? (s++, a && (l.Fm.Get().BIsStoreItemOwned(e) || a.push(n)))
            : d.push(n);
        }
        return (
          "dev" === u.TS.WEB_UNIVERSE &&
            0 === d.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                o +
                " failed to load, " +
                s +
                " hidden by user filter.",
            ),
          d
        );
      }
      async function b(e, t, a, n, i, o, s) {
        let u = await S(
          e,
          t,
          s,
          i
            ? (e) =>
                !e ||
                l.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                l.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : I,
        );
        const d = [];
        for (const e of u) {
          const t = c.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
          if (!t) continue;
          const i = t?.GetIncludedAppIDsOrSelf();
          let u = !1;
          a && (u = u || i.every((e) => l.Fm.Get().BIsGameOwned(e))),
            n && (u = u || i.every((e) => l.Fm.Get().BIsGameWishlisted(e))),
            o && (u = u || i.every((e) => l.Fm.Get().BIsGameIgnored(e))),
            u ? s && s.push(e) : d.push(e);
        }
        return d;
      }
    },
    48211: (e, t, a) => {
      "use strict";
      a.d(t, { N1: () => I, VC: () => f, gZ: () => S });
      var n,
        r = a(34629),
        i = a(7850),
        o = a(90626),
        s = a(62490),
        l = a(84933),
        c = a(52038),
        u = a(22797),
        d = a(52505),
        m = a(61859),
        p = a(23338);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(n || (n = {}));
      let h = n.NotLoaded,
        _ = [];
      function y(e) {
        if (h != n.Loaded) {
          if (h == n.NotLoaded) {
            let e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            let t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t),
              (window.onYouTubeIframeAPIReady = g);
          }
          e && (_.includes(e) || _.push(e));
        } else e && e();
      }
      function f(e = !0) {
        const t = (0, d.Rp)("youtube");
        (0, o.useEffect)(() => {
          t && e && y();
        }, [t, e]);
      }
      function g() {
        h = n.Loaded;
        for (let e of _) e();
        _ = [];
      }
      class I extends o.Component {
        m_strPlayerID = "";
        m_player = null;
        m_playerContainer = null;
        m_bPlayerReady = !1;
        static s_nPlayerIndex = 0;
        constructor(e) {
          super(e),
            (this.m_strPlayerID = "YoutubePlayer_" + I.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), s.x9(_, e);
        }
        shouldComponentUpdate(e, t) {
          if (!this.m_player) return !1;
          const a = this.props;
          return a.autoplay != e.autoplay ||
            a.controls != e.controls ||
            a.showInfo != e.showInfo ||
            a.video != e.video
            ? (this.CreatePlayer(e), !1)
            : ((a.width == e.width && a.height == e.height) ||
                (this.m_bPlayerReady &&
                  e.width &&
                  e.height &&
                  this.m_player.setSize(e.width, e.height)),
              a.forcePause != e.forcePause);
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
            this.m_playerContainer && y(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const t = !1 === e.autoplay ? 0 : 1,
            a = !0 === e.showInfo ? 1 : 0,
            n = !0 === e.controls ? 1 : 0,
            r = !0 === e.showFullscreenBtn ? 1 : 0,
            i = !0 === e.playsInline ? 1 : 0;
          let o = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              host: "https://www.youtube-nocookie.com",
              playerVars: {
                autoplay: t,
                showinfo: a,
                autohide: 1,
                fs: r,
                modestbranding: 1,
                rel: 0,
                playsinline: i,
                iv_load_policy: 3,
                controls: n,
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
              t = { strAuthor: "", strTitle: "", strVideoID: "" };
            e.author && (t.strAuthor = e.author),
              e.title && (t.strTitle = e.title),
              e.video_id && (t.strVideoID = e.video_id),
              this.props.onVideoInfoChanged(t);
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
          return (0, i.jsx)(S, {
            video: this.props.video,
            children: (0, i.jsx)(
              p.j,
              {
                onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
                ref: this.BindPlayerContainer,
                className: (0, c.A)("YoutubePlayer", this.props.classnames),
                children: (0, i.jsx)(u.t, {
                  className: "YoutubePlayerThrobber",
                }),
              },
              this.m_strPlayerID,
            ),
          });
        }
      }
      function S(e) {
        const { video: t, children: a } = e;
        return (0, d.Rp)("youtube")
          ? a
          : (0, i.jsx)("a", {
              href: `https://www.youtube.com/watch?v=${t}`,
              children: (0, m.we)("#EventCalendar_WatchYouTubeVideo"),
            });
      }
      (0, r.Cg)([l.oI], I.prototype, "BindPlayerContainer", null),
        (0, r.Cg)([l.oI], I.prototype, "OnYoutubeScriptsReady", null),
        (0, r.Cg)([l.oI], I.prototype, "CreatePlayer", null),
        (0, r.Cg)([l.oI], I.prototype, "OnPlayerReady", null),
        (0, r.Cg)([l.oI], I.prototype, "OnPlayerStateChange", null),
        (0, r.Cg)([l.oI], I.prototype, "OnError", null),
        (0, r.Cg)([l.oI], I.prototype, "OnPlayerLeftView", null),
        (0, r.Cg)([l.oI], I.prototype, "PlayVideo", null);
    },
    94743: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => h, r: () => p });
      var n = a(7850),
        r = a(90626),
        i = a(26296),
        o = a(12155),
        s = a(48211),
        l = a(52038),
        c = a(61859),
        u = a(70758),
        d = a.n(u),
        m = a(52505);
      const p = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, o] = r.useState(0);
          r.useEffect(() => o(0), [e.video]);
          const s = r.useRef(void 0);
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return (0, n.jsx)(i.o, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return (0, n.jsx)("img", { src: e.altImg, className: e.className });
          {
            const r =
                "https://img.youtube.com/vi/" + e.video + "/" + t[a] + ".jpg",
              i = () => {
                a + 1 < t.length && o(a + 1);
              },
              c = () => {
                s.current && s.current.naturalHeight < 91 && i();
              };
            return (0, n.jsx)("img", {
              ref: s,
              onLoad: c,
              onError: i,
              src: r,
              className: (0, l.A)(d().YoutubePreviewImage, e.className),
            });
          }
        },
        h = (e) => {
          const [t, a] = r.useState(!1);
          (0, s.VC)(!!e.preloadYoutubeScripts);
          const i = (0, m.Rp)("youtube");
          if (t && i)
            return (0, n.jsx)(s.N1, {
              ...e,
              classnames: (0, l.A)(d().YoutubePlayer, e.classnames),
            });
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                a(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return (0, n.jsxs)("div", {
              className: (0, l.A)(
                "YoutubePreviewContainer",
                d().YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: i ? t : void 0,
              children: [
                (0, n.jsx)(p, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: e.altImgWithFallback,
                  altImg: e.altImg,
                  video: e.video,
                }),
                i &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: "YoutubePreviewPlay",
                        children: (0, n.jsx)(o.IOc, {}),
                      }),
                      (0, n.jsx)("div", {
                        className: "VideoHintText",
                        children: (0, c.we)("#EventCalendar_WatchYouTubeVideo"),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
    },
    49271: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, { CuratorReviewListContainer: () => ae, default: () => te });
      var n = a(7850),
        r = a(75844),
        i = a(90626),
        o = a(15759),
        s = a(22837),
        l = a(45699),
        c = a(12447),
        u = a(76217),
        d = a(70995),
        m = a(38390),
        p = a(17720),
        h = a(55963),
        _ = a(4434),
        y = a(41735),
        f = a.n(y),
        g = a(78327),
        I = a(68797),
        S = a(37085);
      function b(e, t) {
        const [a, n] = (0, i.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          r = (0, _.m)("useFilteredAppViaContentHub");
        return (
          (0, i.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !a &&
              (async function (e, t) {
                const a =
                    g.TS.STORE_BASE_URL +
                    "contenthub/ajaxfilterappsbycontenthub",
                  n = {
                    hubtype: e.GetContentHubType(),
                    category: e.GetContentHubCategory(),
                    tagid: e.GetContentHubTag(),
                    prune_list_optin_name: e.jsondata.prune_list_optin_name,
                    optin_tagid: e.jsondata.optin_tagid,
                    optin_prune_tagid: e.jsondata.optin_prune_tagid,
                    optin_only: e.jsondata.optin_only,
                    applist: t.sort().join(","),
                  };
                let r = null;
                const i = new Set();
                try {
                  const e = await f().get(a, { params: n });
                  if (e?.data?.success == S.R)
                    return e.data.appids.forEach((e) => i.add(e)), i;
                  r = (0, I.H)(e);
                } catch (e) {
                  r = (0, I.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + r?.strErrorMsg,
                    r,
                  ),
                  i
                );
              })(e, t).then((e) => {
                r.token.reason || n(e);
              });
          }, [a, r.token.reason, e, t]),
          a
        );
      }
      var A = a(6626),
        v = a(30894),
        C = a(16021),
        w = a(62792),
        G = a(55263),
        R = a(39020),
        N = a(39777),
        j = a(33380),
        B = a.n(j),
        P = a(12155),
        L = a(52038),
        T = a(70758);
      const D = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function E(e) {
        const t = D.exec(e);
        return t && t.length > 1 ? t[1] : null;
      }
      function k(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: r,
            autoplay: o,
            bIsClipID: s,
            time: l,
            width: c,
            height: u,
          } = e,
          [d, m] = i.useState(Boolean(t)),
          p = null != o && null != o && o;
        if (d)
          return (0, n.jsxs)("div", {
            className: (0, L.A)(
              "YoutubePreviewContainer",
              T.YoutubePreviewImage,
              e.imageClassnames,
            ),
            onClick: () => m(!1),
            children: [
              (0, n.jsx)("img", {
                className: (0, L.A)(
                  "YoutubePreviewImage",
                  T.YoutubePreviewImage,
                ),
                src:
                  t ||
                  g.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, n.jsx)("div", {
                className: "YoutubePreviewPlay",
                children: (0, n.jsx)(P.IOc, {}),
              }),
            ],
          });
        let h = (0, g.xv)().replace("https://", "");
        const _ = h.indexOf("/");
        _ >= 0 && (h = h.substring(0, _));
        let y = s
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (y += `&parent=${h}&autoplay=${p}&muted=${Boolean(r)}`),
          l &&
            (y += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(l)}`),
          (0, n.jsxs)("div", {
            className: (0, L.A)("YoutubePlayer", B().TwitchPlayer),
            children: [
              (0, n.jsx)("img", {
                className: (0, L.A)(
                  "YoutubePreviewContainer",
                  T.YoutubePreviewImage,
                  e.imageClassnames,
                ),
                src:
                  g.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, n.jsx)("iframe", {
                src: y,
                allowFullScreen: !0,
                frameBorder: 0,
                width: c || 460,
                height: u || 300,
              }),
            ],
          })
        );
      }
      var x = a(706),
        M = a(99032),
        F = a(75152),
        V = a(22687),
        H = a(22797),
        O = a(10224),
        Y = a(94743),
        U = a(61859),
        W = a(61336),
        K = a(62014),
        z = a.n(K),
        Z = a(85693),
        q = a(22584);
      function J(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = (0, g.Tc)(
            "curator_header",
            "application_config",
          );
        return (0, n.jsx)(u.Z, {
          className: "page_content_ctn",
          "flow-children": "column",
          autoFocus: !0,
          children: (0, n.jsx)("div", {
            className: "page_content",
            children: (0, n.jsxs)(u.Z, {
              className: "list_header_area",
              "flow-children": "row",
              children: [
                (0, n.jsx)("div", {
                  className: "curator_avatar_image",
                  children: (0, n.jsx)(l.Ii, {
                    href: a,
                    children: (0, n.jsx)("img", {
                      className: "curator_avatar",
                      src: r,
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "curator_details",
                  children: [
                    (0, n.jsx)(Z.r, {
                      className: q.BreadContainer,
                      crumbs: (0, g.Tc)("breadcrumbs", "application_config"),
                    }),
                    (0, n.jsx)(l.Ii, {
                      className: "pageheader curator_name",
                      href: a,
                      children: (0, U.we)(
                        "#SteamCurator_List_Header_List",
                        t.group_name,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var Q = a(32630),
        X = a(35380),
        $ = a(42834),
        ee = a(64087);
      const te = function (e) {
        return (0, n.jsx)(c.u, {
          navID: "StoreCuratorPageRoot",
          children: (0, n.jsx)(ae, { listid: e.listid }),
        });
      };
      function ae(e) {
        const t = parseInt(
            (0, g.Tc)("curator_account_id", "application_config"),
          ),
          a = (0, A.m1)(t),
          r = (0, A.ME)(a?.clanSteamID, e.listid);
        return (
          (0, R.vb)(g.TS.LANGUAGE),
          r
            ? (0, n.jsxs)(Q.Ay, {
                feature: "curatorlistcapsule",
                children: [
                  (0, n.jsx)(J, { clanInfo: a }),
                  (0, n.jsx)("div", {
                    className: "page_content_ctn grayscale",
                    children: (0, n.jsx)("div", {
                      className: "page_content",
                      children: (0, n.jsxs)("div", {
                        className: z().CuratorListCtn,
                        children: [
                          (0, n.jsx)(ie, { listDetails: r }),
                          (0, A.cc)(r)
                            ? (0, n.jsx)(ne, { listDetails: r })
                            : (0, n.jsx)(re, {
                                listDetails: r,
                                rgListItems: r.apps,
                              }),
                          (0, n.jsxs)("div", {
                            className: z().CuratorMoreCtn,
                            children: [
                              (0, n.jsx)("h2", {
                                children: (0, U.we)(
                                  "#SteamCurator_ExploreMoreTitle",
                                ),
                              }),
                              (0, n.jsx)(l.Ii, {
                                href: a.vanity_url,
                                children: (0, U.PP)(
                                  "#SteamCurator_MoreReviews",
                                  a.group_name,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : null
        );
      }
      function ne(e) {
        const { listDetails: t } = e,
          [a, r] = (0, i.useState)(null),
          o = new p.b(t.sale_clan_steamid),
          { eventModel: s } = (0, m.B9)(
            o.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          l = (0, i.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          c = b(s, l);
        return (
          (0, i.useEffect)(() => {
            if (s)
              if (s.BUsesContentHubForItemSource())
                c && r(t.apps?.filter((e) => c.has(e.recommended_app?.appid)));
              else {
                const e = s.GetSaleFeaturedApps();
                r(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, s, c]),
          (0, n.jsx)(re, { listDetails: t, rgListItems: a })
        );
      }
      function re(e) {
        const { listDetails: t, rgListItems: a } = e,
          [r, o] = (0, i.useState)(0),
          [s, c] = (0, i.useState)(null),
          d = (0, _.m)("CuratorAppListDisplay");
        if (
          (i.useEffect(() => {
            a &&
              (o(a?.length || 0),
              v.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  C.A.Get()
                    .QueueMultipleAppRequests(e, M.jy)
                    .then(() => {
                      d.token.reason ||
                        c(
                          a.filter(
                            (e) =>
                              !(0, M.Li)(
                                C.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      d.token.reason || c([]);
                    });
                }));
          }, [a, d]),
          null == s)
        )
          return (0, n.jsx)(H.t, {
            string: (0, U.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = t.list_type == A.QV;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(u.Z, {
              className: (0, L.A)(z().CuratorList, m && z().CuratorListGrid),
              "flow-children": "grid",
              children: s.map((e, a) =>
                (0, n.jsx)(
                  oe,
                  { item: e, listDetails: t, bAutoFocus: 0 == a },
                  "rec_" + e.recommended_app.appid,
                ),
              ),
            }),
            Boolean(100 > s.length) &&
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("span", {
                    children: [
                      (0, U.Yp)("#SteamCurator_Hidden", r - s.length),
                      " ",
                    ],
                  }),
                  (0, n.jsx)(l.Ii, {
                    href: g.TS.STORE_BASE_URL + "account/preferences/",
                    children: (0, U.we)("#SteamCurator_Setting"),
                  }),
                ],
              }),
          ],
        });
      }
      function ie(e) {
        const { listDetails: t } = e,
          a = (0, A.fq)(t),
          r = (0, g.Tc)("showlisttitle", "application_config"),
          i = (0, g.Tc)("titleareaheight", "application_config"),
          o =
            t.list_jsondata.youtube_link &&
            (0, d.XU)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && E(t.list_jsondata.youtube_link),
          u = (0, s.sfN)(g.TS.LANGUAGE),
          m = U.NT.GetWithFallback(t.localized_flat_title, u),
          p = U.NT.GetWithFallback(t.localized_flat_blurb, u),
          h = U.NT.GetWithFallback(t.localized_flat_link, u),
          _ =
            a &&
            a.GetImageURL(
              (0, O.c5)() ? "product_mobile_banner" : "product_banner",
              u,
            );
        return (0, n.jsxs)("div", {
          className: z().TopReviewInfo,
          children: [
            Boolean(_) &&
              (0, n.jsx)(l.Ii, {
                href: a.GetSaleURL(),
                children: (0, n.jsx)("img", {
                  className: z().SaleBanner,
                  src: _,
                }),
              }),
            r && m && (0, n.jsx)("div", { className: z().Title, children: m }),
            r && p && (0, n.jsx)("div", { className: z().Blurb, children: p }),
            Boolean(i > 0) && (0, n.jsx)("div", { style: { height: i } }),
            o &&
              (0, n.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, n.jsx)(Y.l, {
                  video: o.strVideoID,
                  startSeconds: o.nStartSeconds,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            Boolean(c) &&
              (0, n.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, n.jsx)(k, {
                  videoid: c,
                  posterURL: "",
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            h && (0, n.jsx)(ce, { url: h }),
          ],
        });
      }
      const oe = (0, r.PA)((e) => {
        const { item: t, listDetails: a, bAutoFocus: r } = e,
          o = parseInt((0, g.Tc)("curator_account_id", "application_config")),
          s = (0, A.m1)(o),
          [l] = (0, G.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          c = (0, i.useMemo)(
            () => ({
              id: l?.GetID(),
              type: (0, w._4)(l?.GetStoreItemType(), l?.GetAppType()),
            }),
            [l],
          ),
          m = (0, X.rt)(c);
        if (!s || !l) return null;
        const {
            appid: p,
            link_url: h,
            blurb: _,
            time_recommended: y,
            recommendation_state: f,
          } = t.recommended_app,
          I = s.is_creator_home && !s.is_ogg,
          S = a.list_jsondata.app_data?.[p],
          b = h && (0, d.XU)(h),
          v = h && E(h),
          C = _ != A.F6 && _,
          R = l.BHasDemo(),
          N = S?.img_url,
          j = `curator_clanid=${s.clanAccountID}&curator_listid=${a.listid}`,
          B = l.GetStorePageURL() + "/?curator_clanid=" + s.clanAccountID;
        return (0, n.jsxs)(u.Z, {
          className: z().CuratorReview,
          autoFocus: r,
          children: [
            (0, n.jsx)("div", {
              className: z().CapsuleCtn,
              children: Boolean(b || v)
                ? (0, n.jsx)(se, {
                    strVideoID: b?.strVideoID || v,
                    nStartSeconds: b?.nStartSeconds,
                    id: m,
                    strImgOverrideUrl: N,
                    bShowDemoButton: R,
                    strExtraParams: j,
                    bTwitchVideo: Boolean(v),
                  })
                : (0, n.jsx)(V.W, {
                    imageType: "header",
                    capsule: c,
                    bShowDemoButton: R,
                    strExtraParams: j,
                    bPreferAssetWithoutOverride: !1,
                  }),
            }),
            (0, n.jsxs)("div", {
              className: z().ReviewTextSection,
              children: [
                (0, n.jsx)("a", {
                  className: z().GameTitle,
                  href: B,
                  children: l.GetName(),
                }),
                (0, n.jsxs)("div", {
                  className: z().RecommendationTypeAndDate,
                  children: [
                    (0, n.jsx)(le, { type: f }),
                    (0, n.jsx)("div", {
                      className: z().ReviewDate,
                      children:
                        I || !Boolean(y)
                          ? (0, U.we)(
                              "#EventModTile_ReleaseDate",
                              l.GetFormattedSteamReleaseDate(),
                            )
                          : (0, U.$z)(y),
                    }),
                  ],
                }),
                Boolean(C) &&
                  (0, n.jsx)("div", {
                    className: z().ReviewBlurb,
                    children: (0, U.we)("#SteamCurator_ReviewTextQuoted", C),
                  }),
                Boolean(h) && (0, n.jsx)(ce, { url: h }),
              ],
            }),
          ],
        });
      });
      function se(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            id: r,
            strImgOverrideUrl: i,
            bShowDemoButton: o,
            strExtraParams: s,
            bTwitchVideo: l,
          } = e,
          { data: c } = (0, N.lv)(r);
        return (0, n.jsxs)("div", {
          className: z().YouTubeCapsule,
          children: [
            (0, n.jsx)("div", {
              className: z().YouTubeCtn,
              children: l
                ? (0, n.jsx)(k, {
                    videoid: t,
                    posterURL: c ? (0, $.b0)(c, "header") : void 0,
                    imageClassnames: z().YouTubePreviewImage,
                    autoplay: !0,
                  })
                : (0, n.jsx)(Y.l, {
                    video: t,
                    startSeconds: a,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: z().YouTubePreviewImage,
                    altImg: i,
                  }),
            }),
            (0, n.jsxs)("div", {
              className: z().YouTubeCapsuleBottomBar,
              children: [
                (0, n.jsx)("div", {
                  className: z().GameImageCtn,
                  children: (0, n.jsx)(x.Q, {
                    id: r,
                    bShowDemoButton: o,
                    nDelayShowMs: 300,
                    strExtraParams: s,
                    hoverProps: {
                      direction: "overlay-center",
                      style: { minWidth: "300px" },
                    },
                    children: (0, n.jsx)("img", {
                      className: z().GameImage,
                      src: c ? (0, $.b0)(c, "library_capsule") : void 0,
                    }),
                  }),
                }),
                (0, n.jsx)(F.q, { id: r, strClassName: z().FullWidth }),
              ],
            }),
          ],
        });
      }
      function le(e) {
        switch (e.type) {
          case ee.tV.$D:
            return (0, n.jsx)("div", {
              className: z().Recommended,
              children: (0, U.we)("#SteamCurator_Recommended"),
            });
          case ee.tV.qP:
            return (0, n.jsx)("div", {
              className: z().NotRecommended,
              children: (0, U.we)("#SteamCurator_NotRecommended"),
            });
          case ee.tV.y8:
            return (0, n.jsx)("div", {
              className: z().Informational,
              children: (0, U.we)("#SteamCurator_Informational"),
            });
          default:
            return null;
        }
      }
      function ce(e) {
        let t = (0, h.OZ)(e.url);
        (0, o.p)(t) &&
          (t =
            (g.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            g.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, W.wm)(e.url),
          r = (0, d.Lg)(e.url);
        return (0, n.jsxs)("div", {
          className: z().FullReviewLink,
          children: [
            (0, n.jsx)(l.Ii, {
              className: z().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
              children: (0, U.we)(
                r
                  ? "#SteamCurator_WatchFullReview"
                  : "#SteamCurator_ReadFullReview",
              ),
            }),
            (0, n.jsx)("div", {
              className: z().FullReviewDomain,
              children: (0, U.we)(
                "#SteamCurator_ReviewLinkHostnameBracketed",
                a,
              ),
            }),
          ],
        });
      }
    },
  },
]);
