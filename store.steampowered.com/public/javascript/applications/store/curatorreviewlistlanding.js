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
      a.d(t, { N_: () => h, k2: () => g });
      var n = a(92757),
        r = a(42891),
        i = a(90626),
        s = a(29248),
        o = a(58584),
        l = a(81115),
        c = a(68841);
      i.Component;
      i.Component;
      var u = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, s.yJ)(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        m = i.forwardRef;
      void 0 === m && (m = p);
      var _ = m(function (e, t) {
        var a = e.innerRef,
          n = e.navigate,
          r = e.onClick,
          s = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          c = s.target,
          u = (0, o.A)({}, s, {
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
        return (u.ref = (p !== m && t) || a), i.createElement("a", u);
      });
      var h = m(function (e, t) {
          var a = e.component,
            r = void 0 === a ? _ : a,
            h = e.replace,
            f = e.to,
            y = e.innerRef,
            g = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return i.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var a = e.history,
              n = d(u(f, e.location), e.location),
              l = n ? a.createHref(n) : "",
              _ = (0, o.A)({}, g, {
                href: l,
                navigate: function () {
                  var t = u(f, e.location),
                    n = (0, s.AO)(e.location) === (0, s.AO)(d(t));
                  (h || n ? a.replace : a.push)(t);
                },
              });
            return (
              p !== m ? (_.ref = t || y) : (_.innerRef = y),
              i.createElement(r, _)
            );
          });
        }),
        f = function (e) {
          return e;
        },
        y = i.forwardRef;
      void 0 === y && (y = f);
      var g = y(function (e, t) {
        var a = e["aria-current"],
          r = void 0 === a ? "page" : a,
          s = e.activeClassName,
          p = void 0 === s ? "active" : s,
          m = e.activeStyle,
          _ = e.className,
          g = e.exact,
          I = e.isActive,
          S = e.location,
          b = e.sensitive,
          A = e.strict,
          v = e.style,
          C = e.to,
          G = e.innerRef,
          w = (0, l.A)(e, [
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
            s = d(u(C, a), a),
            l = s.pathname,
            R = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            B = R
              ? (0, n.B6)(a.pathname, {
                  path: R,
                  exact: g,
                  sensitive: b,
                  strict: A,
                })
              : null,
            N = !!(I ? I(B, a) : B),
            j = "function" == typeof _ ? _(N) : _,
            L = "function" == typeof v ? v(N) : v;
          N &&
            ((j = (function () {
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
            })(j, p)),
            (L = (0, o.A)({}, L, m)));
          var P = (0, o.A)(
            { "aria-current": (N && r) || null, className: j, style: L, to: s },
            w,
          );
          return (
            f !== y ? (P.ref = t || G) : (P.innerRef = G), i.createElement(h, P)
          );
        });
      });
    },
    81886: (e, t, a) => {
      "use strict";
      a.d(t, { fp: () => r, vm: () => i });
      var n = a(48210);
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
      a.d(t, { Y: () => o, j: () => l });
      var n = a(7850),
        r = a(90626),
        i = a(40236),
        s = a(8871);
      function o(e) {
        const t = (0, i.OO)(e, e.options);
        return (0, n.jsx)("span", { ref: t, style: { fontSize: 0 } });
      }
      const l = r.forwardRef(function (e, t) {
        const { onLeave: a, onEnter: r, options: o, ...l } = e,
          c = (0, i.OO)(e, e.options),
          u = (0, s.Ue)(c, t);
        return (0, n.jsx)("div", { ref: u, ...l });
      });
    },
    85693: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => c });
      var n = a(7850),
        r = a(45699),
        i = a(76217),
        s = a(17083),
        o = a(52038),
        l = a(2108);
      function c(e) {
        const { crumbs: t, className: a, bHideLastArrow: c } = e;
        return t && 0 != t.length
          ? (0, n.jsxs)("div", {
              className: (0, o.A)(l.BreadContainer, a),
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
                              s.N_,
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
      a.d(t, { Ey: () => _, Rp: () => m });
      var n = a(98841),
        r = a(2160),
        i = a(8527),
        s = a(38861);
      const o = JSON.parse(
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
          const e = (0, l.j_)(s.J_);
          if (e) {
            const t = JSON.parse(e);
            if (t && void 0 !== t.version && t.version != n.ie.CL) return t;
          }
        } catch (e) {}
        const t = i.TS.COUNTRY;
        return t in o.eucountries || t in o.eeacountries || "CH" === t
          ? { version: n.ie.mO, preference_state: n.CY._H }
          : { version: n.ie.mO, preference_state: n.CY.__ };
      }
      var u = a(80902),
        d = a(23809);
      function p() {
        const e = (0, d.KV)();
        return (0, u.I)(
          (function (e) {
            return { queryKey: ["CookiePreferences"], queryFn: () => c(e) };
          })(e),
        );
      }
      function m(e) {
        const { data: t } = p();
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
      function _() {
        const { data: e } = p();
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
      a.d(t, { Xh: () => u, cU: () => d, tf: () => m, wl: () => p });
      var n = a(22837),
        r = a(71150),
        i = a(48210),
        s = a(30894),
        o = a(16021),
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
      const p = 4;
      function m(e, t, a, n, r, i) {
        const s = new Array(),
          c = new Array(),
          u = new Array(),
          d = new Array();
        if (!e || 0 == e.length) return s;
        const m = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let i of e) {
          let e = i.id,
            p = l.by.k_NotRejected;
          switch (i.item_type) {
            case "sub":
              const r = o.A.Get().GetPackage(e);
              if (1 !== r?.GetIncludedAppIDs()?.length) {
                p = I(e, t, n, !0);
                break;
              }
              e = r.GetIncludedAppIDs()[0];
            case "app":
              p = y(e, t, a, n, !0);
              break;
            case "bundle":
              p = S(e, t, n, !0);
          }
          if (
            (p == l.by.k_NotRejected
              ? ((i.rejected = l.by.k_NotRejected),
                s.push({ ...i, priority: 1 }))
              : m.includes(p)
                ? ((i.rejected = l.by.k_NotRejected), c.push(i))
                : ((i.rejected = p),
                  p == l.by.k_RejectIgnoredGame ? u.push(i) : d.push(i)),
            s.length > r)
          )
            break;
        }
        return (
          s.length < r &&
            (_(s, c, i, 2),
            s.length < i &&
              t.enforce_minimum &&
              (_(s, u, i, 3), _(s, d, i, p))),
          s
        );
      }
      function _(e, t, a, n) {
        for (let r = 0; e.length < a && r < t.length; ++r)
          e.push({ ...t[r], priority: n });
      }
      function h(e, t) {
        const a = s.Fm.Get();
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
      function f(e, t) {
        if (t.localized) {
          const t = (0, n.sfN)(c.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function y(e, t, a, n, c) {
        const u = o.A.Get().GetApp(e);
        if (!u) return l.by.k_RejectNotLoaded;
        const d = h(u, t);
        if (d != l.by.k_NotRejected) return d;
        const p = s.Fm.Get();
        if (p.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (p.BExcludeTagIDs(u.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (p.BExcludesContentDescriptor(u.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && u.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const m = u.GetAppType();
        if (!t.software && m == i.uE.Sv) return l.by.k_RejectSoftware;
        if (t.games_already_in_library && p.BIsGameOwned(e))
          return l.by.k_RejectInLibrary;
        if (t.games_not_in_library && !p.BIsGameOwned(e))
          return l.by.k_RejectNotInLibrary;
        if (!t.video && [i.uE.Wz, i.uE.gQ, i.uE.ID].includes(m))
          return l.by.k_RejectVideo;
        if (t.has_discount) {
          const e = u.GetBestPurchaseOption();
          if (!e || !e.discount_pct) return l.by.k_RejectNoDiscount;
        }
        return "adultonly" != a &&
          t.no_ao_content &&
          (u.HasContentDescriptorID(r.u7) || u.HasContentDescriptorID(r.T4))
          ? l.by.k_RejectAO
          : m == i.uE.ue &&
              t.games_already_in_library &&
              p.BIsGameOwned(u.GetParentAppID() || 0)
            ? l.by.k_RejectInLibrary
            : c
              ? (m == i.uE.ue && n.BHasAppID(u.GetParentAppID() || 0)) ||
                n.BHasAppID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : t.has_trailer && !u.BHasTrailers(!1)
                  ? l.by.k_RejectNoTrailer
                  : f(u, t)
              : l.by.k_NotRejected;
      }
      function g(e, t) {
        const a = s.Fm.Get();
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
        const r = o.A.Get().GetPackage(e);
        if (!r) return l.by.k_RejectNotLoaded;
        const i = h(r, t);
        if (i != l.by.k_NotRejected) return i;
        const c = g(r.GetIncludedAppIDs(), t);
        if (c != l.by.k_NotRejected) return c;
        const u = s.Fm.Get();
        return t.games_already_in_library && u.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : n
              ? a.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : f(r, t)
              : l.by.k_NotRejected;
      }
      function S(e, t, a, n) {
        const r = o.A.Get().GetBundle(e);
        if (!r) return l.by.k_RejectNotLoaded;
        const i = h(r, t);
        if (i != l.by.k_NotRejected) return i;
        const s = g(r.GetIncludedAppIDs(), t);
        return s != l.by.k_NotRejected
          ? s
          : n
            ? a.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : f(r, t)
            : l.by.k_NotRejected;
      }
    },
    70995: (e, t, a) => {
      "use strict";
      a.d(t, { Lg: () => c, XU: () => d });
      const n = 20,
        r = /^.*youtube[^v]+v=(.{11}).*/,
        i = /^.*youtu\.be\/(.{11}).*/,
        s = /^.*youtube.*\/embed\/(.{11}).*/,
        o = /^.*[?&]t=([^&]+)(?:&|$)/,
        l = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function c(e) {
        return !!u(e);
      }
      function u(e) {
        const t = e?.length < n ? void 0 : r.exec(e) || i.exec(e) || s.exec(e);
        return t?.[1];
      }
      function d(e) {
        const t = u(e);
        if (!t) return;
        const a = (function (e) {
            const t = o.exec(e);
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
        ME: () => G,
        QV: () => S,
        RA: () => C,
        cc: () => R,
        fq: () => B,
        m1: () => w,
      });
      var n = a(34629),
        r = a(41735),
        i = a.n(r),
        s = a(14947),
        o = a(90626),
        l = a(22837),
        c = a(37085),
        u = a(17720),
        d = a(4796),
        p = a(30894),
        m = a(6379),
        _ = a(99032),
        h = a(62490),
        f = a(81393),
        y = a(68797),
        g = a(84933),
        I = a(78327);
      const S = 1;
      function b(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, f.wT)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const A = "0";
      function v(e, t) {
        (t.localized_flat_title = (0, h.$Y)([], l.bP9, null)),
          (t.localized_flat_blurb = (0, h.$Y)([], l.bP9, null)),
          (t.localized_flat_link = (0, h.$Y)([], l.bP9, null)),
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
            const s = await i().get(n, { params: r, cancelToken: a?.token });
            if (s?.data?.success == c.R) {
              const a = { ...s.data.list_details };
              return (
                (0, f.wT)(t == a?.listid, "Wanted" + t + "but got" + a?.listid),
                b(a),
                v(s.data.curation_language, a),
                this.m_mapList.set(t, a),
                this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                a
              );
            }
          } catch (e) {
            const t = (0, y.H)(e);
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
            (p.Fm.Get().BIsLoaded() &&
              0 == p.Fm.Get().GetFollowedCuratorCount())
          )
            return [];
          const n = I.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: p.Fm.Get().BIsLoaded()
                ? p.Fm.Get().GetFollowedCuratorsAccountID().join(",")
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
        async InternalLoadSaleCuratorLists(e, t, a, n, r, o) {
          try {
            const a = await i().get(e, { params: t, cancelToken: o?.token });
            if (a?.data?.success == c.R) {
              const e = new Array();
              return (
                (0, s.h5)(() => {
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
            const t = (0, y.H)(e);
            console.error(a + ": error on load: " + t.strErrorMsg, t);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return C.s_Singleton || (C.s_Singleton = new C()), C.s_Singleton;
        }
        constructor() {
          (0, s.Gn)(this),
            "dev" == I.TS.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, I.Tc)("curatorlistdata", "application_config");
          ("dev" != I.TS.WEB_UNIVERSE && "beta" != I.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " + e?.length,
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, s.h5)(() => {
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
      function G(e, t) {
        const a = (0, g.CH)();
        return (
          (0, o.useEffect)(() => {
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
                    (0, _.H2)(e, {
                      ..._.jy,
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
      function w(e) {
        const t = e && d.ac.GetClanInfoByClanAccountID(e),
          [a, n] = (0, o.useState)(!!t);
        return (
          (0, o.useEffect)(() => {
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
      function B(e) {
        const t = (0, g.CH)(),
          a = R(e) ? e.sale_clan_event_gid : null,
          n = a && m.O3.GetClanEventModel(a);
        return (
          (0, o.useEffect)(() => {
            if (n || !R(e)) return;
            const r = i().CancelToken.source();
            return (
              (async () => {
                m.O3.Init(),
                  await m.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
      (0, n.Cg)([s.sH], C.prototype, "m_mapList", void 0);
    },
    55263: (e, t, a) => {
      "use strict";
      a.d(t, {
        G6: () => m,
        Gg: () => f,
        Ow: () => h,
        Sq: () => u,
        YM: () => S,
        eR: () => d,
        ik: () => p,
        mZ: () => y,
        t7: () => _,
        zX: () => I,
      });
      var n = a(41735),
        r = a.n(n),
        i = a(90626),
        s = a(37085),
        o = a(48210),
        l = a(84933),
        c = a(16021);
      const u = 1,
        d = 2,
        p = 3;
      function m(e, t, a, n) {
        const o = (0, i.useRef)(void 0),
          m = (0, i.useRef)(void 0),
          _ = (0, l.CH)();
        o.current = e;
        const [h, f] = (0, i.useState)(void 0),
          {
            include_assets: y,
            include_release: g,
            include_platforms: I,
            include_all_purchase_options: S,
            include_screenshots: b,
            include_trailers: A,
            include_ratings: v,
            include_tag_count: C,
            include_reviews: G,
            include_basic_info: w,
            include_supported_languages: R,
            include_full_description: B,
            include_included_items: N,
            include_assets_without_overrides: j,
            apply_user_filters: L,
            include_links: P,
          } = a;
        if (
          ((0, i.useEffect)(() => {
            const a = {
              include_assets: y,
              include_release: g,
              include_platforms: I,
              include_all_purchase_options: S,
              include_screenshots: b,
              include_trailers: A,
              include_ratings: v,
              include_tag_count: C,
              include_reviews: G,
              include_basic_info: w,
              include_supported_languages: R,
              include_full_description: B,
              include_included_items: N,
              include_assets_without_overrides: j,
              apply_user_filters: L,
              include_links: P,
            };
            let i = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, a) ||
                (void 0 !== h && n && n == m.current) ||
                (n !== m.current && (f(void 0), (m.current = n)),
                (i = r().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, a)
                  .then((t) => {
                    i?.token.reason || o.current !== e || f(t == s.R), _();
                  })),
              () => i?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, n, h, y, g, I, S, b, A, v, C, G, w, R, B, N, j, L, P, _]),
          !e)
        )
          return [null, d];
        if (!1 === h) return [void 0, d];
        if (c.A.Get().BIsStoreItemMissing(e, t)) return [void 0, d];
        if (!c.A.Get().BHasStoreItem(e, t, a)) return [void 0, u];
        const T = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return T ? [T, p] : [null, d];
      }
      function _(e, t, a) {
        return m(e, o.c6.qI, t, a);
      }
      function h(e, t, a) {
        return m(e, o.c6.xO, t, a);
      }
      function f(e, t, a) {
        return m(e, o.c6.RD, t, a);
      }
      function y(e, t, a) {
        const [n, r] = m(e, t, a);
        let i;
        n?.GetStoreItemType() != o.c6.RD ||
          n.GetAssets()?.GetHeaderURL() ||
          1 != n?.GetIncludedAppIDs().length ||
          (i = n.GetIncludedAppIDs()[0]);
        const [s, l] = _(i, a);
        return i && s?.BIsVisible() ? [s, l] : [n, r];
      }
      function g(e, t, a, n) {
        const s = (0, l.CH)(),
          {
            include_assets: o,
            include_release: m,
            include_platforms: _,
            include_all_purchase_options: h,
            include_screenshots: f,
            include_trailers: y,
            include_ratings: g,
            include_tag_count: I,
            include_reviews: S,
            include_basic_info: b,
            include_supported_languages: A,
            include_full_description: v,
            include_included_items: C,
            include_assets_without_overrides: G,
            apply_user_filters: w,
            include_links: R,
          } = a;
        if (
          ((0, i.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const a = {
                include_assets: o,
                include_release: m,
                include_platforms: _,
                include_all_purchase_options: h,
                include_screenshots: f,
                include_trailers: y,
                include_ratings: g,
                include_tag_count: I,
                include_reviews: S,
                include_basic_info: b,
                include_supported_languages: A,
                include_full_description: v,
                include_included_items: C,
                include_assets_without_overrides: G,
                apply_user_filters: w,
                include_links: R,
              },
              n = e.filter(
                (e) =>
                  !(
                    c.A.Get().BHasStoreItem(e, t, a) ||
                    c.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == n.length) return;
            const i = r().CancelToken.source(),
              l = n.map((e) => c.A.Get().QueueStoreItemRequest(e, t, a));
            return (
              Promise.all(l).then(() => {
                i.token.reason || s();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, n, s, o, m, _, h, f, y, g, I, S, b, A, v, C, G, w, R]),
          !e)
        )
          return d;
        if (
          !e.every(
            (e) =>
              c.A.Get().BHasStoreItem(e, t, a) ||
              c.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return u;
        return e.every((e) =>
          c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? p
          : d;
      }
      function I(e, t, a) {
        return g(e, o.c6.qI, t, a);
      }
      function S() {
        i.useEffect(
          () => (
            c.A.Get().SetReturnUnavailableItems(!0),
            () => c.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    99032: (e, t, a) => {
      "use strict";
      a.d(t, {
        AX: () => S,
        H2: () => y,
        Li: () => I,
        S7: () => _,
        a9: () => b,
        jy: () => g,
        nt: () => f,
        sd: () => m,
        tJ: () => h,
      });
      var n = a(57876),
        r = a(62792),
        i = a(81886),
        s = a(22837),
        o = a(48210),
        l = a(30894),
        c = a(16021),
        u = a(78327),
        d = a(62734),
        p = a(81393);
      function m(e) {
        return c.A.Get().BIsStoreItemMissing(e.id, (0, r.SW)(e.type));
      }
      function _(e, t, a) {
        const n = new Array();
        return (
          e?.forEach((e) => n.push({ id: e, type: "game" })),
          t?.forEach((e) => n.push({ id: e, type: "sub" })),
          a?.forEach((e) => n.push({ id: e, type: "bundle" })),
          n
        );
      }
      function h(e) {
        const t = c.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return t?.GetBestPurchaseOption()?.discount_pct > 0;
      }
      function f(e) {
        if (!d.f.Get().GetHomeView()?.localized) return !0;
        const t = c.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return l.Fm.Get().BIsAnyLanguageEnabled(
          t.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function y(e, t, a) {
        if (!e || 0 == e.length) return [];
        const n = e.filter((e) => (0, i.fp)(e.type)).map((e) => e.id),
          r = e.filter((e) => "sub" === e.type).map((e) => e.id),
          s = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = n.filter((e) => !c.A.Get().BHasApp(e, t)),
            a = r.filter((e) => !c.A.Get().BHasApp(e, t)),
            i = s.filter((e) => !c.A.Get().BHasApp(e, t));
          (e.length > 0 || a.length > 0 || i.length > 0) &&
            (await Promise.all([
              c.A.Get().QueueMultipleAppRequests(e, t),
              c.A.Get().QueueMultiplePackageRequests(a, t),
              c.A.Get().QueueMultipleBundleRequests(i, t),
            ]));
        }
        const o = new Set();
        s?.forEach((e) => {
          const t = c.A.Get().GetBundle(e);
          t?.GetIncludedAppIDs().forEach((e) => o.add(e));
        }),
          r?.forEach((e) => {
            const t = c.A.Get().GetPackage(e);
            t?.GetIncludedAppIDs().forEach((e) => o.add(e));
          });
        const l = Array.from(o).filter((e) => !c.A.Get().BHasApp(e, t));
        if (
          (l.length > 0 && (await c.A.Get().QueueMultipleAppRequests(l, t)),
          n.forEach((e) => o.add(e)),
          a)
        ) {
          const e = Array.from(o)
            .map((e) => {
              const t = c.A.Get().GetApp(e);
              return t?.GetParentAppID()
                ? (o.add(t.GetParentAppID()), t.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((e) => !c.A.Get().BHasApp(e, t));
          e.length > 0 && (await c.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(o).filter((e) => {
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
        (0, p.wT)(t.BIsLoaded(), "Dynamic Store not loaded");
        const a = e?.GetAllLanguagesWithSomeSupport() || [],
          n = d.f.Get().GetHomeView()?.localized;
        return (
          !e ||
          (e.GetStoreItemType() == o.c6.qI &&
            (t.BIsGameIgnored(e.GetAppID()) ||
              t.BIsGameIgnored(e.GetParentAppID()))) ||
          t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
          t.BExcludeTagIDs(e.GetTagIDs()) ||
          e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)) ||
          (n &&
            !(
              0 == a.length ||
              e.BHasSomeLanguageSupport(s.Bhc) ||
              t.BIsAnyLanguageEnabled(a)
            ))
        );
      }
      async function S(e, t, a, i) {
        let s = 0,
          o = 0;
        const d = [];
        await y(e, n.Xh, t);
        for (const n of e) {
          const e = c.A.Get().GetStoreItem(n.id, (0, r.SW)(n.type));
          if (!e) {
            s++;
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
            ? (o++, a && (l.Fm.Get().BIsStoreItemOwned(e) || a.push(n)))
            : d.push(n);
        }
        return (
          "dev" === u.TS.WEB_UNIVERSE &&
            0 === d.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                s +
                " failed to load, " +
                o +
                " hidden by user filter.",
            ),
          d
        );
      }
      async function b(e, t, a, n, i, s, o) {
        let u = await S(
          e,
          t,
          o,
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
            s && (u = u || i.every((e) => l.Fm.Get().BIsGameIgnored(e))),
            u ? o && o.push(e) : d.push(e);
        }
        return d;
      }
    },
    48211: (e, t, a) => {
      "use strict";
      a.d(t, { N1: () => I, VC: () => y, gZ: () => S });
      var n,
        r = a(34629),
        i = a(7850),
        s = a(90626),
        o = a(62490),
        l = a(84933),
        c = a(52038),
        u = a(22797),
        d = a(52505),
        p = a(61859),
        m = a(23338);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(n || (n = {}));
      let _ = n.NotLoaded,
        h = [];
      function f(e) {
        if (_ != n.Loaded) {
          if (_ == n.NotLoaded) {
            let e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            let t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t),
              (window.onYouTubeIframeAPIReady = g);
          }
          e && (h.includes(e) || h.push(e));
        } else e && e();
      }
      function y(e = !0) {
        const t = (0, d.Rp)("youtube");
        (0, s.useEffect)(() => {
          t && e && f();
        }, [t, e]);
      }
      function g() {
        _ = n.Loaded;
        for (let e of h) e();
        h = [];
      }
      class I extends s.Component {
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
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), o.x9(h, e);
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
            this.m_playerContainer && f(this.OnYoutubeScriptsReady));
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
          let s = {
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
            o = this.m_playerContainer.firstElementChild;
          (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(o, s));
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
              m.j,
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
              children: (0, p.we)("#EventCalendar_WatchYouTubeVideo"),
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
      a.d(t, { l: () => _, r: () => m });
      var n = a(7850),
        r = a(90626),
        i = a(26296),
        s = a(12155),
        o = a(48211),
        l = a(52038),
        c = a(61859),
        u = a(70758),
        d = a.n(u),
        p = a(52505);
      const m = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, s] = r.useState(0);
          r.useEffect(() => s(0), [e.video]);
          const o = r.useRef(void 0);
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
                a + 1 < t.length && s(a + 1);
              },
              c = () => {
                o.current && o.current.naturalHeight < 91 && i();
              };
            return (0, n.jsx)("img", {
              ref: o,
              onLoad: c,
              onError: i,
              src: r,
              className: (0, l.A)(d().YoutubePreviewImage, e.className),
            });
          }
        },
        _ = (e) => {
          const [t, a] = r.useState(!1);
          (0, o.VC)(!!e.preloadYoutubeScripts);
          const i = (0, p.Rp)("youtube");
          if (t && i)
            return (0, n.jsx)(o.N1, {
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
                (0, n.jsx)(m, {
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
                        children: (0, n.jsx)(s.IOc, {}),
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
        a.d(t, { CuratorReviewListContainer: () => te, default: () => ee });
      var n = a(7850),
        r = a(75844),
        i = a(90626),
        s = a(15759),
        o = a(22837),
        l = a(45699),
        c = a(76217),
        u = a(70995),
        d = a(38390),
        p = a(17720),
        m = a(55963),
        _ = a(4434),
        h = a(41735),
        f = a.n(h),
        y = a(78327),
        g = a(68797),
        I = a(37085);
      function S(e, t) {
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
                    y.TS.STORE_BASE_URL +
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
                  if (e?.data?.success == I.R)
                    return e.data.appids.forEach((e) => i.add(e)), i;
                  r = (0, g.H)(e);
                } catch (e) {
                  r = (0, g.H)(e);
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
      var b = a(6626),
        A = a(30894),
        v = a(16021),
        C = a(62792),
        G = a(55263),
        w = a(39020),
        R = a(39777),
        B = a(33380),
        N = a.n(B),
        j = a(12155),
        L = a(52038),
        P = a(70758);
      const T = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function D(e) {
        const t = T.exec(e);
        return t && t.length > 1 ? t[1] : null;
      }
      function E(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: r,
            autoplay: s,
            bIsClipID: o,
            time: l,
            width: c,
            height: u,
          } = e,
          [d, p] = i.useState(Boolean(t)),
          m = null != s && null != s && s;
        if (d)
          return (0, n.jsxs)("div", {
            className: (0, L.A)(
              "YoutubePreviewContainer",
              P.YoutubePreviewImage,
              e.imageClassnames,
            ),
            onClick: () => p(!1),
            children: [
              (0, n.jsx)("img", {
                className: (0, L.A)(
                  "YoutubePreviewImage",
                  P.YoutubePreviewImage,
                ),
                src:
                  t ||
                  y.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, n.jsx)("div", {
                className: "YoutubePreviewPlay",
                children: (0, n.jsx)(j.IOc, {}),
              }),
            ],
          });
        let _ = (0, y.xv)().replace("https://", "");
        const h = _.indexOf("/");
        h >= 0 && (_ = _.substring(0, h));
        let f = o
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (f += `&parent=${_}&autoplay=${m}&muted=${Boolean(r)}`),
          l &&
            (f += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(l)}`),
          (0, n.jsxs)("div", {
            className: (0, L.A)("YoutubePlayer", N().TwitchPlayer),
            children: [
              (0, n.jsx)("img", {
                className: (0, L.A)(
                  "YoutubePreviewContainer",
                  P.YoutubePreviewImage,
                  e.imageClassnames,
                ),
                src:
                  y.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, n.jsx)("iframe", {
                src: f,
                allowFullScreen: !0,
                frameBorder: 0,
                width: c || 460,
                height: u || 300,
              }),
            ],
          })
        );
      }
      var k = a(29008),
        x = a(99032),
        M = a(75152),
        F = a(22687),
        V = a(22797),
        H = a(10224),
        O = a(94743),
        Y = a(61859),
        U = a(61336),
        W = a(62014),
        K = a.n(W),
        z = a(85693),
        Z = a(22584);
      function q(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = (0, y.Tc)(
            "curator_header",
            "application_config",
          );
        return (0, n.jsx)(c.Z, {
          className: "page_content_ctn",
          "flow-children": "column",
          autoFocus: !0,
          children: (0, n.jsx)("div", {
            className: "page_content",
            children: (0, n.jsxs)(c.Z, {
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
                    (0, n.jsx)(z.r, {
                      className: Z.BreadContainer,
                      crumbs: (0, y.Tc)("breadcrumbs", "application_config"),
                    }),
                    (0, n.jsx)(l.Ii, {
                      className: "pageheader curator_name",
                      href: a,
                      children: (0, Y.we)(
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
      var J = a(32630),
        Q = a(35380),
        X = a(42834),
        $ = a(64087);
      const ee = function (e) {
        return (0, n.jsx)(te, { listid: e.listid });
      };
      function te(e) {
        const t = parseInt(
            (0, y.Tc)("curator_account_id", "application_config"),
          ),
          a = (0, b.m1)(t),
          r = (0, b.ME)(a?.clanSteamID, e.listid);
        return (
          (0, w.vb)(y.TS.LANGUAGE),
          r
            ? (0, n.jsxs)(J.Ay, {
                feature: "curatorlistcapsule",
                children: [
                  (0, n.jsx)(q, { clanInfo: a }),
                  (0, n.jsx)("div", {
                    className: "page_content_ctn grayscale",
                    children: (0, n.jsx)("div", {
                      className: "page_content",
                      children: (0, n.jsxs)("div", {
                        className: K().CuratorListCtn,
                        children: [
                          (0, n.jsx)(re, { listDetails: r }),
                          (0, b.cc)(r)
                            ? (0, n.jsx)(ae, { listDetails: r })
                            : (0, n.jsx)(ne, {
                                listDetails: r,
                                rgListItems: r.apps,
                              }),
                          (0, n.jsxs)("div", {
                            className: K().CuratorMoreCtn,
                            children: [
                              (0, n.jsx)("h2", {
                                children: (0, Y.we)(
                                  "#SteamCurator_ExploreMoreTitle",
                                ),
                              }),
                              (0, n.jsx)(l.Ii, {
                                href: a.vanity_url,
                                children: (0, Y.PP)(
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
      function ae(e) {
        const { listDetails: t } = e,
          [a, r] = (0, i.useState)(null),
          s = new p.b(t.sale_clan_steamid),
          { eventModel: o } = (0, d.B9)(
            s.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          l = (0, i.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          c = S(o, l);
        return (
          (0, i.useEffect)(() => {
            if (o)
              if (o.BUsesContentHubForItemSource())
                c && r(t.apps?.filter((e) => c.has(e.recommended_app?.appid)));
              else {
                const e = o.GetSaleFeaturedApps();
                r(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, o, c]),
          (0, n.jsx)(ne, { listDetails: t, rgListItems: a })
        );
      }
      function ne(e) {
        const { listDetails: t, rgListItems: a } = e,
          [r, s] = (0, i.useState)(0),
          [o, u] = (0, i.useState)(null),
          d = (0, _.m)("CuratorAppListDisplay");
        if (
          (i.useEffect(() => {
            a &&
              (s(a?.length || 0),
              A.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  v.A.Get()
                    .QueueMultipleAppRequests(e, x.jy)
                    .then(() => {
                      d.token.reason ||
                        u(
                          a.filter(
                            (e) =>
                              !(0, x.Li)(
                                v.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      d.token.reason || u([]);
                    });
                }));
          }, [a, d]),
          null == o)
        )
          return (0, n.jsx)(V.t, {
            string: (0, Y.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const p = t.list_type == b.QV;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(c.Z, {
              className: (0, L.A)(K().CuratorList, p && K().CuratorListGrid),
              "flow-children": "grid",
              children: o.map((e, a) =>
                (0, n.jsx)(
                  ie,
                  { item: e, listDetails: t, bAutoFocus: 0 == a },
                  "rec_" + e.recommended_app.appid,
                ),
              ),
            }),
            Boolean(100 > o.length) &&
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("span", {
                    children: [
                      (0, Y.Yp)("#SteamCurator_Hidden", r - o.length),
                      " ",
                    ],
                  }),
                  (0, n.jsx)(l.Ii, {
                    href: y.TS.STORE_BASE_URL + "account/preferences/",
                    children: (0, Y.we)("#SteamCurator_Setting"),
                  }),
                ],
              }),
          ],
        });
      }
      function re(e) {
        const { listDetails: t } = e,
          a = (0, b.fq)(t),
          r = (0, y.Tc)("showlisttitle", "application_config"),
          i = (0, y.Tc)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, u.XU)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && D(t.list_jsondata.youtube_link),
          d = (0, o.sfN)(y.TS.LANGUAGE),
          p = Y.NT.GetWithFallback(t.localized_flat_title, d),
          m = Y.NT.GetWithFallback(t.localized_flat_blurb, d),
          _ = Y.NT.GetWithFallback(t.localized_flat_link, d),
          h =
            a &&
            a.GetImageURL(
              (0, H.c5)() ? "product_mobile_banner" : "product_banner",
              d,
            );
        return (0, n.jsxs)("div", {
          className: K().TopReviewInfo,
          children: [
            Boolean(h) &&
              (0, n.jsx)(l.Ii, {
                href: a.GetSaleURL(),
                children: (0, n.jsx)("img", {
                  className: K().SaleBanner,
                  src: h,
                }),
              }),
            r && p && (0, n.jsx)("div", { className: K().Title, children: p }),
            r && m && (0, n.jsx)("div", { className: K().Blurb, children: m }),
            Boolean(i > 0) && (0, n.jsx)("div", { style: { height: i } }),
            s &&
              (0, n.jsx)("div", {
                className: K().VideoReviewCtn,
                children: (0, n.jsx)(O.l, {
                  video: s.strVideoID,
                  startSeconds: s.nStartSeconds,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: K().YouTubePreviewImage,
                }),
              }),
            Boolean(c) &&
              (0, n.jsx)("div", {
                className: K().VideoReviewCtn,
                children: (0, n.jsx)(E, {
                  videoid: c,
                  posterURL: "",
                  imageClassnames: K().YouTubePreviewImage,
                }),
              }),
            _ && (0, n.jsx)(le, { url: _ }),
          ],
        });
      }
      const ie = (0, r.PA)((e) => {
        const { item: t, listDetails: a, bAutoFocus: r } = e,
          s = parseInt((0, y.Tc)("curator_account_id", "application_config")),
          o = (0, b.m1)(s),
          [l] = (0, G.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          d = (0, i.useMemo)(
            () => ({
              id: l?.GetID(),
              type: (0, C._4)(l?.GetStoreItemType(), l?.GetAppType()),
            }),
            [l],
          ),
          p = (0, Q.rt)(d);
        if (!o || !l) return null;
        const {
            appid: m,
            link_url: _,
            blurb: h,
            time_recommended: f,
            recommendation_state: g,
          } = t.recommended_app,
          I = o.is_creator_home && !o.is_ogg,
          S = a.list_jsondata.app_data?.[m],
          A = _ && (0, u.XU)(_),
          v = _ && D(_),
          w = h != b.F6 && h,
          R = l.BHasDemo(),
          B = S?.img_url,
          N = `curator_clanid=${o.clanAccountID}&curator_listid=${a.listid}`,
          j = l.GetStorePageURL() + "/?curator_clanid=" + o.clanAccountID;
        return (0, n.jsxs)(c.Z, {
          className: K().CuratorReview,
          autoFocus: r,
          children: [
            (0, n.jsx)("div", {
              className: K().CapsuleCtn,
              children: Boolean(A || v)
                ? (0, n.jsx)(se, {
                    strVideoID: A?.strVideoID || v,
                    nStartSeconds: A?.nStartSeconds,
                    id: p,
                    strImgOverrideUrl: B,
                    bShowDemoButton: R,
                    strExtraParams: N,
                    bTwitchVideo: Boolean(v),
                  })
                : (0, n.jsx)(F.W, {
                    imageType: "header",
                    capsule: d,
                    bShowDemoButton: R,
                    strExtraParams: N,
                    bPreferAssetWithoutOverride: !1,
                  }),
            }),
            (0, n.jsxs)("div", {
              className: K().ReviewTextSection,
              children: [
                (0, n.jsx)("a", {
                  className: K().GameTitle,
                  href: j,
                  children: l.GetName(),
                }),
                (0, n.jsxs)("div", {
                  className: K().RecommendationTypeAndDate,
                  children: [
                    (0, n.jsx)(oe, { type: g }),
                    (0, n.jsx)("div", {
                      className: K().ReviewDate,
                      children:
                        I || !Boolean(f)
                          ? (0, Y.we)(
                              "#EventModTile_ReleaseDate",
                              l.GetFormattedSteamReleaseDate(),
                            )
                          : (0, Y.$z)(f),
                    }),
                  ],
                }),
                Boolean(w) &&
                  (0, n.jsx)("div", {
                    className: K().ReviewBlurb,
                    children: (0, Y.we)("#SteamCurator_ReviewTextQuoted", w),
                  }),
                Boolean(_) && (0, n.jsx)(le, { url: _ }),
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
            bShowDemoButton: s,
            strExtraParams: o,
            bTwitchVideo: l,
          } = e,
          { data: c } = (0, R.lv)(r);
        return (0, n.jsxs)("div", {
          className: K().YouTubeCapsule,
          children: [
            (0, n.jsx)("div", {
              className: K().YouTubeCtn,
              children: l
                ? (0, n.jsx)(E, {
                    videoid: t,
                    posterURL: c ? (0, X.b0)(c, "header") : void 0,
                    imageClassnames: K().YouTubePreviewImage,
                    autoplay: !0,
                  })
                : (0, n.jsx)(O.l, {
                    video: t,
                    startSeconds: a,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: K().YouTubePreviewImage,
                    altImg: i,
                  }),
            }),
            (0, n.jsxs)("div", {
              className: K().YouTubeCapsuleBottomBar,
              children: [
                (0, n.jsx)("div", {
                  className: K().GameImageCtn,
                  children: (0, n.jsx)(k.Q, {
                    id: r,
                    bShowDemoButton: s,
                    nDelayShowMs: 300,
                    strExtraParams: o,
                    hoverProps: {
                      direction: "overlay-center",
                      style: { minWidth: "300px" },
                    },
                    children: (0, n.jsx)("img", {
                      className: K().GameImage,
                      src: c ? (0, X.b0)(c, "library_capsule") : void 0,
                    }),
                  }),
                }),
                (0, n.jsx)(M.q, { id: r, strClassName: K().FullWidth }),
              ],
            }),
          ],
        });
      }
      function oe(e) {
        switch (e.type) {
          case $.tV.$D:
            return (0, n.jsx)("div", {
              className: K().Recommended,
              children: (0, Y.we)("#SteamCurator_Recommended"),
            });
          case $.tV.qP:
            return (0, n.jsx)("div", {
              className: K().NotRecommended,
              children: (0, Y.we)("#SteamCurator_NotRecommended"),
            });
          case $.tV.y8:
            return (0, n.jsx)("div", {
              className: K().Informational,
              children: (0, Y.we)("#SteamCurator_Informational"),
            });
          default:
            return null;
        }
      }
      function le(e) {
        let t = (0, m.OZ)(e.url);
        (0, s.p)(t) &&
          (t =
            (y.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            y.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, U.wm)(e.url),
          r = (0, u.Lg)(e.url);
        return (0, n.jsxs)("div", {
          className: K().FullReviewLink,
          children: [
            (0, n.jsx)(l.Ii, {
              className: K().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
              children: (0, Y.we)(
                r
                  ? "#SteamCurator_WatchFullReview"
                  : "#SteamCurator_ReadFullReview",
              ),
            }),
            (0, n.jsx)("div", {
              className: K().FullReviewDomain,
              children: (0, Y.we)(
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
