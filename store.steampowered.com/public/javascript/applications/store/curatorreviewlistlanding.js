/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [20716],
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
      e.exports = {
        BreadContainer: "GkVFIKIAijTGzfSc4BEQl",
        HeaderContent: "_2nPcyDvQVywsCXSLbgnUQp",
      };
    },
    17083: (e, t, a) => {
      "use strict";
      a.d(t, { N_: () => _, k2: () => C });
      var n = a(92757),
        i = a(42891),
        r = a(90626),
        s = a(29248),
        o = a(58584),
        l = a(81115),
        u = a(68841);
      r.Component;
      r.Component;
      var c = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, s.yJ)(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        m = r.forwardRef;
      void 0 === m && (m = p);
      var h = m(function (e, t) {
        var a = e.innerRef,
          n = e.navigate,
          i = e.onClick,
          s = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          u = s.target,
          c = (0, o.A)({}, s, {
            onClick: function (e) {
              try {
                i && i(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (u && "_self" !== u) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), n());
            },
          });
        return (c.ref = (p !== m && t) || a), r.createElement("a", c);
      });
      var _ = m(function (e, t) {
          var a = e.component,
            i = void 0 === a ? h : a,
            _ = e.replace,
            y = e.to,
            f = e.innerRef,
            C = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return r.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var a = e.history,
              n = d(c(y, e.location), e.location),
              l = n ? a.createHref(n) : "",
              h = (0, o.A)({}, C, {
                href: l,
                navigate: function () {
                  var t = c(y, e.location),
                    n = (0, s.AO)(e.location) === (0, s.AO)(d(t));
                  (_ || n ? a.replace : a.push)(t);
                },
              });
            return (
              p !== m ? (h.ref = t || f) : (h.innerRef = f),
              r.createElement(i, h)
            );
          });
        }),
        y = function (e) {
          return e;
        },
        f = r.forwardRef;
      void 0 === f && (f = y);
      var C = f(function (e, t) {
        var a = e["aria-current"],
          i = void 0 === a ? "page" : a,
          s = e.activeClassName,
          p = void 0 === s ? "active" : s,
          m = e.activeStyle,
          h = e.className,
          C = e.exact,
          g = e.isActive,
          I = e.location,
          v = e.sensitive,
          S = e.strict,
          b = e.style,
          A = e.to,
          w = e.innerRef,
          R = (0, l.A)(e, [
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
        return r.createElement(n.XZ.Consumer, null, function (e) {
          e || (0, u.A)(!1);
          var a = I || e.location,
            s = d(c(A, a), a),
            l = s.pathname,
            N = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            P = N
              ? (0, n.B6)(a.pathname, {
                  path: N,
                  exact: C,
                  sensitive: v,
                  strict: S,
                })
              : null,
            x = !!(g ? g(P, a) : P),
            G = "function" == typeof h ? h(x) : h,
            T = "function" == typeof b ? b(x) : b;
          x &&
            ((G = (function () {
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
            })(G, p)),
            (T = (0, o.A)({}, T, m)));
          var B = (0, o.A)(
            { "aria-current": (x && i) || null, className: G, style: T, to: s },
            R,
          );
          return (
            y !== f ? (B.ref = t || w) : (B.innerRef = w), r.createElement(_, B)
          );
        });
      });
    },
    81886: (e, t, a) => {
      "use strict";
      a.d(t, { fp: () => i, vm: () => r });
      var n = a(95578);
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
        i = a(90626),
        r = a(40236),
        s = a(8871);
      function o(e) {
        const t = (0, r.OO)(e, e.options);
        return (0, n.jsx)("span", { ref: t, style: { fontSize: 0 } });
      }
      const l = i.forwardRef(function (e, t) {
        const { onLeave: a, onEnter: i, options: o, ...l } = e,
          u = (0, r.OO)(e, e.options),
          c = (0, s.Ue)(u, t);
        return (0, n.jsx)("div", { ref: c, ...l });
      });
    },
    85693: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => u });
      var n = a(7850),
        i = a(45699),
        r = a(76217),
        s = a(17083),
        o = a(52038),
        l = a(2108);
      function u(e) {
        const { crumbs: t, className: a, bHideLastArrow: u } = e;
        return t && 0 != t.length
          ? (0, n.jsxs)("div", {
              className: (0, o.A)(l.BreadContainer, a),
              children: [
                (0, n.jsx)(r.Z, {
                  className: "blockbg",
                  "flow-children": "row",
                  children: t.map((e, a) => {
                    const r = new Array();
                    return (
                      e.url.startsWith("http")
                        ? r.push(
                            (0, n.jsx)(
                              i.Ii,
                              { href: e.url, children: e.name },
                              "anchor_" + e.name,
                            ),
                          )
                        : r.push(
                            (0, n.jsx)(
                              s.N_,
                              { to: e.url, children: e.name },
                              "link_" + e.name,
                            ),
                          ),
                      (!u || a < t.length - 1) &&
                        r.push(
                          (0, n.jsx)(
                            "span",
                            { children: " > " },
                            e.name + "span",
                          ),
                        ),
                      r
                    );
                  }),
                }),
                (0, n.jsx)("div", { style: { clear: "left" } }),
              ],
            })
          : null;
      }
    },
    98735: (e, t, a) => {
      "use strict";
      a.d(t, { Ey: () => h, Rp: () => m });
      var n = a(2160);
      const i = JSON.parse(
        '{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d\'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}',
      ).h;
      var r = a(98841),
        s = a(38861),
        o = a(91933);
      async function l(e, t, a, l) {
        if ((0, n.nA)(l))
          return { version: r.ie.mO, preference_state: r.CY.__ };
        if (t) {
          const t = (await r.T4.GetCookiePreferences(e, {}))
            .Body()
            .toObject().preferences;
          if (t && void 0 !== t.version && t.version != r.ie.CL) return t;
        }
        try {
          const e = (0, o.j_)(s.J_);
          if (e) {
            const t = JSON.parse(e);
            if (t && void 0 !== t.version && t.version != r.ie.CL) return t;
          }
        } catch (e) {}
        return a in i.eucountries || a in i.eeacountries || "CH" === a
          ? { version: r.ie.mO, preference_state: r.CY._H }
          : { version: r.ie.mO, preference_state: r.CY.__ };
      }
      var u = a(80902),
        c = a(23809),
        d = a(66418);
      function p() {
        const e = (0, c.KV)();
        return (0, u.I)(
          (function (e) {
            return {
              queryKey: ["CookiePreferences"],
              queryFn: () => l(e, d.iA.logged_in, d.TS.COUNTRY, d.TS.EREALM),
            };
          })(e),
        );
      }
      function m(e) {
        const { data: t } = p();
        return t
          ? (function (e, t) {
              switch (e.preference_state) {
                case r.CY.__:
                case r.CY.PK:
                  return !0;
                case r.CY.rE:
                  return !1;
                case r.CY.UI:
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
        const { data: e } = p();
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
    70995: (e, t, a) => {
      "use strict";
      a.d(t, { Lg: () => u, XU: () => d });
      const n = 20,
        i = /^.*youtube[^v]+v=(.{11}).*/,
        r = /^.*youtu\.be\/(.{11}).*/,
        s = /^.*youtube.*\/embed\/(.{11}).*/,
        o = /^.*[?&]t=([^&]+)(?:&|$)/,
        l = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function u(e) {
        return !!c(e);
      }
      function c(e) {
        const t = e?.length < n ? void 0 : i.exec(e) || r.exec(e) || s.exec(e);
        return t?.[1];
      }
      function d(e) {
        const t = c(e);
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
    4796: (e, t, a) => {
      "use strict";
      a.d(t, { $5: () => v, TB: () => I, ac: () => C });
      var n = a(7860),
        i = a(75233),
        r = a(14947),
        s = a(90626),
        o = a(17720),
        l = a(81393),
        u = a(78327),
        c = a(67165),
        d = (a(26161), a(29197), a(33951)),
        p = a(63340);
      const m = new WeakSet();
      function h(e = n.L) {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return;
        if (m.has(e)) return;
        const t = (0, u.Fd)("groupvanityinfo", "application_config");
        (void 0 === t && "complete" != document.readyState) ||
          (m.add(e), _(t) && (0, d.aA)(e, t));
      }
      function _(e) {
        const t = e;
        return (
          !!(
            t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "object" == typeof t[0]
          ) &&
          "number" == typeof t[0].clanAccountID &&
          ("number" == typeof t[0].appid || "string" == typeof t[0].vanity_url)
        );
      }
      function y(e) {
        return "string" == typeof e ? parseInt(e) : e;
      }
      function f(e) {
        return "string" == typeof e ? Number.parseInt(e) : e;
      }
      const C = new (class {
        m_queryClient = n.L;
        m_boxCacheVersion = r.sH.box(0);
        m_bWatchingCache = !1;
        m_bBumpScheduled = !1;
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          h(this.m_queryClient),
            this.m_bWatchingCache ||
              ((this.m_bWatchingCache = !0),
              this.m_queryClient.getQueryCache().subscribe((e) => {
                ("added" != e?.type &&
                  "updated" != e?.type &&
                  "removed" != e?.type) ||
                  ((0, d.yT)(e.query?.queryKey) &&
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
          this.LazyInit(), _(e) && (0, d.aA)(this.m_queryClient, e);
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
          return Boolean((0, d.Gt)(f(e), this.ReadCache()));
        }
        RegisterClanData(e) {
          this.LazyInit(), (0, d.aA)(this.m_queryClient, e);
        }
        async LoadOGGClanInfoForAppID(e) {
          return (
            this.LazyInit(),
            (e = y(e)),
            (0, l.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e ? null : (0, d.AB)(e, this.m_queryClient).catch(() => null)
          );
        }
        async LoadOGGClanInfoForIdentifier(e) {
          return this.LazyInit(), (0, d.Rc)(e, this.m_queryClient, "store");
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          return this.LazyInit(), (0, d.Rc)(e, this.m_queryClient, "group");
        }
        async LoadClanInfoForClanSteamID(e) {
          return this.LoadClanInfoForClanAccountID(e.GetAccountID());
        }
        async LoadClanInfoForClanAccountID(e) {
          return this.LazyInit(), (0, d.MR)(f(e), this.m_queryClient);
        }
        GetOGGClanInfo(e) {
          const t = this.ReadCache();
          return "string" == typeof e ? (0, d.fy)(e, t) : (0, d.ko)(e, t);
        }
        GetClanSteamIDForAppID(e) {
          const t = (0, d.ko)(y(e), this.ReadCache());
          return t ? o.b.InitFromClanID(t.clanAccountID) : void 0;
        }
        GetClanVanityForAppID(e) {
          return (0, d.ko)(y(e), this.ReadCache())?.vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          return (0, d.Gt)(e.GetAccountID(), this.ReadCache())?.vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.BHasClanInfoLoadedByAccountID(e);
        }
        GetClanMemberCount(e) {
          return (0, d.ko)(y(e), this.ReadCache())?.member_count ?? 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            (0, l.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            (0, d.Gt)(f(e), this.ReadCache())
          );
        }
        GetCreatorStoreURL(e) {
          let t = c.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let a = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            u.TS.COMMUNITY_BASE_URL +
            (a.vanity_url
              ? "groups/" + a.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      })();
      function g() {
        const e = (0, i.jE)();
        return h(e), e;
      }
      function I(e) {
        g();
        const { data: t, isPending: a } = (0, d.TB)(e ? f(e) : void 0);
        return [Boolean(e) && a, t ?? void 0];
      }
      function v(e) {
        const t = g();
        (0, s.useEffect)(() => {
          e &&
            (0, d.MR)(f(e), t).catch((t) =>
              console.error(`Failed to hint load clan info ${e}`, t),
            );
        }, [e, t]);
      }
      (0, p.V)("g_ClanStore", C);
    },
    55263: (e, t, a) => {
      "use strict";
      a.d(t, {
        G6: () => m,
        Gg: () => y,
        Ow: () => _,
        Sq: () => c,
        YM: () => I,
        eR: () => d,
        ik: () => p,
        mZ: () => f,
        t7: () => h,
        zX: () => g,
      });
      var n = a(41735),
        i = a.n(n),
        r = a(90626),
        s = a(37085),
        o = a(95578),
        l = a(84933),
        u = a(16021);
      const c = 1,
        d = 2,
        p = 3;
      function m(e, t, a, n) {
        const o = (0, r.useRef)(void 0),
          m = (0, r.useRef)(void 0),
          h = (0, l.CH)();
        o.current = e;
        const [_, y] = (0, r.useState)(void 0),
          {
            include_assets: f,
            include_release: C,
            include_platforms: g,
            include_all_purchase_options: I,
            include_screenshots: v,
            include_trailers: S,
            include_ratings: b,
            include_tag_count: A,
            include_reviews: w,
            include_basic_info: R,
            include_supported_languages: N,
            include_full_description: P,
            include_included_items: x,
            include_assets_without_overrides: G,
            apply_user_filters: T,
            include_links: B,
            include_extra_details: L,
            include_optin_registration_tags: M,
          } = a;
        if (
          ((0, r.useEffect)(() => {
            const a = {
              include_assets: f,
              include_release: C,
              include_platforms: g,
              include_all_purchase_options: I,
              include_screenshots: v,
              include_trailers: S,
              include_ratings: b,
              include_tag_count: A,
              include_reviews: w,
              include_basic_info: R,
              include_supported_languages: N,
              include_full_description: P,
              include_included_items: x,
              include_assets_without_overrides: G,
              apply_user_filters: T,
              include_links: B,
              include_extra_details: L,
              include_optin_registration_tags: M,
            };
            let r = null;
            return (
              !e ||
                e < 0 ||
                u.A.Get().BHasStoreItem(e, t, a) ||
                (void 0 !== _ && n && n == m.current) ||
                (n !== m.current && (y(void 0), (m.current = n)),
                (r = i().CancelToken.source()),
                u.A.Get()
                  .QueueStoreItemRequest(e, t, a)
                  .then((t) => {
                    r?.token.reason || o.current !== e || y(t == s.R), h();
                  })),
              () => r?.cancel("useStoreItemCache: unmounting")
            );
          }, [
            e,
            t,
            n,
            _,
            f,
            C,
            g,
            I,
            v,
            S,
            b,
            A,
            w,
            R,
            N,
            P,
            x,
            G,
            T,
            B,
            L,
            M,
            h,
          ]),
          !e)
        )
          return [null, d];
        if (!1 === _) return [void 0, d];
        if (u.A.Get().BIsStoreItemMissing(e, t)) return [void 0, d];
        if (!u.A.Get().BHasStoreItem(e, t, a)) return [void 0, c];
        const j = u.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return j ? [j, p] : [null, d];
      }
      function h(e, t, a) {
        return m(e, o.c6.qI, t, a);
      }
      function _(e, t, a) {
        return m(e, o.c6.xO, t, a);
      }
      function y(e, t, a) {
        return m(e, o.c6.RD, t, a);
      }
      function f(e, t, a) {
        const [n, i] = m(e, t, a);
        let r;
        n?.GetStoreItemType() != o.c6.RD ||
          n.GetAssets()?.GetHeaderURL() ||
          1 != n?.GetIncludedAppIDs().length ||
          (r = n.GetIncludedAppIDs()[0]);
        const [s, l] = h(r, a);
        return r && s?.BIsVisible() ? [s, l] : [n, i];
      }
      function C(e, t, a, n) {
        const s = (0, l.CH)(),
          {
            include_assets: o,
            include_release: m,
            include_platforms: h,
            include_all_purchase_options: _,
            include_screenshots: y,
            include_trailers: f,
            include_ratings: C,
            include_tag_count: g,
            include_reviews: I,
            include_basic_info: v,
            include_supported_languages: S,
            include_full_description: b,
            include_included_items: A,
            include_assets_without_overrides: w,
            apply_user_filters: R,
            include_links: N,
            include_extra_details: P,
            include_optin_registration_tags: x,
          } = a;
        if (
          ((0, r.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const a = {
                include_assets: o,
                include_release: m,
                include_platforms: h,
                include_all_purchase_options: _,
                include_screenshots: y,
                include_trailers: f,
                include_ratings: C,
                include_tag_count: g,
                include_reviews: I,
                include_basic_info: v,
                include_supported_languages: S,
                include_full_description: b,
                include_included_items: A,
                include_assets_without_overrides: w,
                apply_user_filters: R,
                include_links: N,
                include_extra_details: P,
                include_optin_registration_tags: x,
              },
              n = e.filter(
                (e) =>
                  !(
                    u.A.Get().BHasStoreItem(e, t, a) ||
                    u.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == n.length) return;
            const r = i().CancelToken.source(),
              l = n.map((e) => u.A.Get().QueueStoreItemRequest(e, t, a));
            return (
              Promise.all(l).then(() => {
                r.token.reason || s();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [
            e,
            t,
            n,
            s,
            o,
            m,
            h,
            _,
            y,
            f,
            C,
            g,
            I,
            v,
            S,
            b,
            A,
            w,
            R,
            N,
            P,
            x,
          ]),
          !e)
        )
          return d;
        if (
          !e.every(
            (e) =>
              u.A.Get().BHasStoreItem(e, t, a) ||
              u.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return c;
        return e.every((e) =>
          u.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? p
          : d;
      }
      function g(e, t, a) {
        return C(e, o.c6.qI, t, a);
      }
      function I() {
        r.useEffect(
          () => (
            u.A.Get().SetReturnUnavailableItems(!0),
            () => u.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    26161: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => r });
      var n = a(22837),
        i = a(66418);
      const r = () => (i.TS.EUNIVERSE === n.Rv ? 2581 : 45267781);
    },
    48211: (e, t, a) => {
      "use strict";
      a.d(t, { N1: () => S, VC: () => g, fm: () => w, gZ: () => b });
      var n,
        i = a(34629),
        r = a(7850),
        s = a(90626),
        o = a(62490),
        l = a(84933),
        u = a(52038),
        c = a(22797),
        d = a(98735),
        p = a(61859),
        m = a(23338),
        h = a(8871),
        _ = a(40236);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(n || (n = {}));
      let y = n.NotLoaded,
        f = [];
      function C(e) {
        if (y != n.Loaded) {
          if (y == n.NotLoaded) {
            let e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            let t = document.getElementsByTagName("script")[0];
            t.parentNode?.insertBefore(e, t),
              (window.onYouTubeIframeAPIReady = v);
          }
          e && (f.includes(e) || f.push(e));
        } else e && e();
      }
      function g(e = !0) {
        const t = (0, d.Rp)("youtube");
        (0, s.useEffect)(() => {
          t && e && C();
        }, [t, e]);
      }
      function I(e) {
        o.x9(f, e);
      }
      function v() {
        y = n.Loaded;
        for (let e of f) e();
        f = [];
      }
      class S extends s.Component {
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
          this.DestroyPlayer(), I(this.OnYoutubeScriptsReady);
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
          e.forcePause != this.props.forcePause && this.ApplyForcePause();
        }
        ApplyForcePause() {
          this.m_player &&
            this.m_bPlayerReady &&
            (this.props.forcePause
              ? "function" == typeof this.m_player.pauseVideo &&
                this.m_player.pauseVideo()
              : "function" == typeof this.m_player.playVideo &&
                this.m_player.playVideo());
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
          e &&
            this.m_playerContainer != e &&
            ((this.m_playerContainer = e),
            this.DestroyPlayer(),
            C(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const t = !1 === e.autoplay ? 0 : 1,
            a = !0 === e.showInfo ? 1 : 0,
            n = !0 === e.controls ? 1 : 0,
            i = !0 === e.showFullscreenBtn ? 1 : 0,
            r = !0 === e.playsInline ? 1 : 0;
          let s = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              host: "https://www.youtube-nocookie.com",
              playerVars: {
                autoplay: t,
                showinfo: a,
                autohide: 1,
                fs: i,
                modestbranding: 1,
                rel: 0,
                playsinline: r,
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
          if (
            ((this.m_bPlayerReady = !0),
            this.props.onVideoInfoChanged && this.m_player)
          ) {
            let e = this.m_player.getVideoData(),
              t = { strAuthor: "", strTitle: "", strVideoID: "" };
            e.author && (t.strAuthor = e.author),
              e.title && (t.strTitle = e.title),
              e.video_id && (t.strVideoID = e.video_id),
              this.props.onVideoInfoChanged(t);
          }
          this.props.width &&
            this.props.height &&
            this.m_player?.setSize(this.props.width, this.props.height),
            this.props.forcePause
              ? this.ApplyForcePause()
              : this.props.autoplay && this.m_player?.playVideo(),
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
          return (0, r.jsx)(b, {
            video: this.props.video,
            children: (0, r.jsx)(
              m.j,
              {
                onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
                ref: this.BindPlayerContainer,
                className: (0, u.A)("YoutubePlayer", this.props.classnames),
                children: (0, r.jsx)(c.t, {
                  className: "YoutubePlayerThrobber",
                }),
              },
              this.m_strPlayerID,
            ),
          });
        }
      }
      function b(e) {
        const { video: t, children: a } = e;
        return (0, d.Rp)("youtube")
          ? a
          : (0, r.jsx)("a", {
              href: `https://www.youtube.com/watch?v=${t}`,
              children: (0, p.we)("#EventCalendar_WatchYouTubeVideo"),
            });
      }
      function A(e) {
        const t = new URLSearchParams({
          autoplay: e.autoplay ? "1" : "0",
          controls: e.controls ? "1" : "0",
          fs: e.showFullscreenBtn ? "1" : "0",
          playsinline: e.playsInline ? "1" : "0",
          rel: "0",
          iv_load_policy: "3",
          modestbranding: "1",
          enablejsapi: "1",
        });
        return (
          e.startSeconds && t.set("start", String(e.startSeconds)),
          `https://www.youtube-nocookie.com/embed/${encodeURIComponent(e.video)}?${t.toString()}`
        );
      }
      function w(e) {
        const { video: t, autopause: a, className: n } = e,
          i = s.useRef(null),
          o = s.useRef(null),
          l = s.useCallback(() => i.current?.pauseVideo(), []),
          u = (0, _.OO)({ onLeave: a ? l : void 0 }),
          c = (0, h.Ue)(o, u);
        return (
          s.useEffect(() => {
            const e = () => {
              o.current && (i.current = new YT.Player(o.current, {}));
            };
            return (
              a && C(e),
              () => {
                I(e), (i.current = null);
              }
            );
          }, [a]),
          (0, r.jsx)("iframe", {
            ref: c,
            className: n,
            src: A(e),
            title: t,
            allow: "autoplay; encrypted-media; picture-in-picture; web-share",
            allowFullScreen: !0,
            frameBorder: 0,
          })
        );
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
    94743: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => h, r: () => m });
      var n = a(7850),
        i = a(90626),
        r = a(26296),
        s = a(12155),
        o = a(48211),
        l = a(52038),
        u = a(61859),
        c = a(70758),
        d = a.n(c),
        p = a(98735);
      const m = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, s] = i.useState(0);
          i.useEffect(() => s(0), [e.video]);
          const o = i.useRef(void 0);
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return (0, n.jsx)(r.o, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return (0, n.jsx)("img", { src: e.altImg, className: e.className });
          {
            const i =
                "https://img.youtube.com/vi/" + e.video + "/" + t[a] + ".jpg",
              r = () => {
                a + 1 < t.length && s(a + 1);
              },
              u = () => {
                o.current && o.current.naturalHeight < 91 && r();
              };
            return (0, n.jsx)("img", {
              ref: o,
              onLoad: u,
              onError: r,
              src: i,
              className: (0, l.A)(d().YoutubePreviewImage, e.className),
            });
          }
        },
        h = (e) => {
          const [t, a] = i.useState(!1);
          (0, o.VC)(!!e.preloadYoutubeScripts);
          const r = (0, p.Rp)("youtube");
          if (t && r)
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
              onClick: r ? t : void 0,
              children: [
                (0, n.jsx)(m, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: e.altImgWithFallback,
                  altImg: e.altImg,
                  video: e.video,
                }),
                r &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: "YoutubePreviewPlay",
                        children: (0, n.jsx)(s.IOc, {}),
                      }),
                      (0, n.jsx)("div", {
                        className: "VideoHintText",
                        children: (0, u.we)("#EventCalendar_WatchYouTubeVideo"),
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
        i = a(75844),
        r = a(90626),
        s = a(15759),
        o = a(22837),
        l = a(45699),
        u = a(76217),
        c = a(70995),
        d = a(76682),
        p = a(29008),
        m = a(75152),
        h = a(38390),
        _ = a(17720),
        y = a(55963),
        f = a(4434),
        C = a(41735),
        g = a.n(C),
        I = a(78327),
        v = a(68797),
        S = a(37085);
      function b(e, t) {
        const [a, n] = (0, r.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          i = (0, f.m)("useFilteredAppViaContentHub");
        return (
          (0, r.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !a &&
              (async function (e, t) {
                const a =
                    I.TS.STORE_BASE_URL +
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
                let i = null;
                const r = new Set();
                try {
                  const e = await g().get(a, { params: n });
                  if (e?.data?.success == S.R)
                    return e.data.appids.forEach((e) => r.add(e)), r;
                  i = (0, v.H)(e);
                } catch (e) {
                  i = (0, v.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + i?.strErrorMsg,
                    i,
                  ),
                  r
                );
              })(e, t).then((e) => {
                i.token.reason || n(e);
              });
          }, [a, i.token.reason, e, t]),
          a
        );
      }
      var A = a(6626),
        w = a(30894),
        R = a(16021),
        N = a(62792),
        P = a(55263),
        x = a(39020),
        G = a(39777),
        T = a(33380),
        B = a.n(T),
        L = a(12155),
        M = a(52038),
        j = a(70758);
      const D = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function E(e) {
        const t = D.exec(e);
        return t && t.length > 1 ? t[1] : null;
      }
      function F(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: i,
            autoplay: s,
            bIsClipID: o,
            time: l,
            width: u,
            height: c,
          } = e,
          [d, p] = r.useState(Boolean(t)),
          m = null != s && null != s && s;
        if (d)
          return (0, n.jsxs)("div", {
            className: (0, M.A)(
              "YoutubePreviewContainer",
              j.YoutubePreviewImage,
              e.imageClassnames,
            ),
            onClick: () => p(!1),
            children: [
              (0, n.jsx)("img", {
                className: (0, M.A)(
                  "YoutubePreviewImage",
                  j.YoutubePreviewImage,
                ),
                src:
                  t ||
                  I.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, n.jsx)("div", {
                className: "YoutubePreviewPlay",
                children: (0, n.jsx)(L.IOc, {}),
              }),
            ],
          });
        let h = (0, I.xv)().replace("https://", "");
        const _ = h.indexOf("/");
        _ >= 0 && (h = h.substring(0, _));
        let y = o
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (y += `&parent=${h}&autoplay=${m}&muted=${Boolean(i)}`),
          l &&
            (y += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(l)}`),
          (0, n.jsxs)("div", {
            className: (0, M.A)("YoutubePlayer", B().TwitchPlayer),
            children: [
              (0, n.jsx)("img", {
                className: (0, M.A)(
                  "YoutubePreviewContainer",
                  j.YoutubePreviewImage,
                  e.imageClassnames,
                ),
                src:
                  I.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, n.jsx)("iframe", {
                src: y,
                allowFullScreen: !0,
                frameBorder: 0,
                width: u || 460,
                height: c || 300,
              }),
            ],
          })
        );
      }
      var k = a(99032),
        V = a(22687),
        Y = a(22797),
        O = a(10224),
        U = a(94743),
        H = a(61859),
        W = a(61336),
        K = a(62014),
        z = a.n(K),
        q = a(85693),
        Z = a(22584);
      function J(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: i } = (0, I.Tc)(
            "curator_header",
            "application_config",
          );
        return (0, n.jsx)(u.Z, {
          className: "page_content_ctn",
          "flow-children": "column",
          autoFocus: !0,
          children: (0, n.jsxs)("div", {
            className: "page_content " + Z.HeaderContent,
            children: [
              (0, n.jsx)(q.r, {
                className: Z.BreadContainer,
                crumbs: (0, I.Tc)("breadcrumbs", "application_config"),
              }),
              (0, n.jsxs)(u.Z, {
                className: "list_header_area",
                "flow-children": "row",
                children: [
                  (0, n.jsx)("div", {
                    className: "curator_avatar_image",
                    children: (0, n.jsx)(l.Ii, {
                      href: a,
                      children: (0, n.jsx)("img", {
                        className: "curator_avatar",
                        src: i,
                      }),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "curator_details",
                    children: (0, n.jsx)(l.Ii, {
                      className: "pageheader curator_name",
                      href: a,
                      children: (0, H.we)(
                        "#SteamCurator_List_Header_List",
                        t.group_name,
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var X = a(32630),
        Q = a(42834),
        $ = a(64087),
        ee = a(67165);
      const te = function (e) {
        return (0, n.jsx)(ae, { listid: e.listid });
      };
      function ae(e) {
        const t = parseInt(
            (0, I.Tc)("curator_account_id", "application_config"),
          ),
          a = (0, A.m1)(t),
          i = (0, A.ME)(a?.clanSteamID, e.listid);
        if (((0, x.vb)(I.TS.LANGUAGE), !i)) return null;
        const r = a.is_ogg,
          s = a.is_creator_home && !a.is_ogg,
          o = r
            ? "#SteamCurator_MoreDLC"
            : s
              ? "#SteamCurator_MoreProducts"
              : "#SteamCurator_MoreReviews";
        return (0, n.jsxs)(X.Ay, {
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
                    (0, n.jsx)(re, { listDetails: i }),
                    (0, A.cc)(i)
                      ? (0, n.jsx)(ne, { listDetails: i })
                      : (0, n.jsx)(ie, { listDetails: i, rgListItems: i.apps }),
                    (0, n.jsxs)("div", {
                      className: z().CuratorMoreCtn,
                      children: [
                        (0, n.jsx)("h2", {
                          children: (0, H.we)("#SteamCurator_ExploreMoreTitle"),
                        }),
                        (0, n.jsx)(l.Ii, {
                          href: a.vanity_url,
                          children: (0, H.PP)(o, a.group_name),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function ne(e) {
        const { listDetails: t } = e,
          [a, i] = (0, r.useState)(null),
          s = new _.b(t.sale_clan_steamid),
          { eventModel: o } = (0, h.B9)(
            s.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          l = (0, r.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          u = b(o, l);
        return (
          (0, r.useEffect)(() => {
            if (o)
              if (o.BUsesContentHubForItemSource())
                u && i(t.apps?.filter((e) => u.has(e.recommended_app?.appid)));
              else {
                const e = o.GetSaleFeaturedApps();
                i(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, o, u]),
          (0, n.jsx)(ie, { listDetails: t, rgListItems: a })
        );
      }
      function ie(e) {
        const { listDetails: t, rgListItems: a } = e,
          [i, s] = (0, r.useState)(0),
          [o, c] = (0, r.useState)(null),
          d = (0, f.m)("CuratorAppListDisplay");
        if (
          (r.useEffect(() => {
            a &&
              (s(a?.length || 0),
              w.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  R.A.Get()
                    .QueueMultipleAppRequests(e, k.jy)
                    .then(() => {
                      d.token.reason ||
                        c(
                          a.filter(
                            (e) =>
                              !(0, k.Li)(
                                R.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      d.token.reason || c([]);
                    });
                }));
          }, [a, d]),
          null == o)
        )
          return (0, n.jsx)(Y.t, {
            string: (0, H.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const p = t.list_type == A.QV;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(u.Z, {
              className: (0, M.A)(z().CuratorList, p && z().CuratorListGrid),
              "flow-children": "grid",
              children: o.map((e, a) =>
                (0, n.jsx)(
                  se,
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
                      (0, H.Yp)("#SteamCurator_Hidden", i - o.length),
                      " ",
                    ],
                  }),
                  (0, n.jsx)(l.Ii, {
                    href: I.TS.STORE_BASE_URL + "account/preferences/",
                    children: (0, H.we)("#SteamCurator_Setting"),
                  }),
                ],
              }),
          ],
        });
      }
      function re(e) {
        const { listDetails: t } = e,
          a = (0, A.fq)(t),
          i = (0, I.Tc)("showlisttitle", "application_config"),
          r = (0, I.Tc)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, c.XU)(t.list_jsondata.youtube_link),
          u = t.list_jsondata.youtube_link && E(t.list_jsondata.youtube_link),
          d = (0, o.sfN)(I.TS.LANGUAGE),
          p = H.NT.GetWithFallback(t.localized_flat_title, d),
          m = H.NT.GetWithFallback(t.localized_flat_blurb, d),
          h = H.NT.GetWithFallback(t.localized_flat_link, d),
          _ =
            a &&
            a.GetImageURL(
              (0, O.c5)() ? "product_mobile_banner" : "product_banner",
              d,
            );
        return (0, n.jsxs)("div", {
          className: z().TopReviewInfo,
          children: [
            Boolean(_) &&
              (0, n.jsx)(l.Ii, {
                href: (0, ee.n4)(a),
                children: (0, n.jsx)("img", {
                  className: z().SaleBanner,
                  src: _,
                }),
              }),
            i && p && (0, n.jsx)("div", { className: z().Title, children: p }),
            i && m && (0, n.jsx)("div", { className: z().Blurb, children: m }),
            Boolean(r > 0) && (0, n.jsx)("div", { style: { height: r } }),
            s &&
              (0, n.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, n.jsx)(U.l, {
                  video: s.strVideoID,
                  startSeconds: s.nStartSeconds,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            Boolean(u) &&
              (0, n.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, n.jsx)(F, {
                  videoid: u,
                  posterURL: "",
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            h && (0, n.jsx)(ue, { url: h }),
          ],
        });
      }
      const se = (0, i.PA)((e) => {
        const { item: t, listDetails: a, bAutoFocus: i } = e,
          s = parseInt((0, I.Tc)("curator_account_id", "application_config")),
          o = (0, A.m1)(s),
          [l] = (0, P.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          p = (0, r.useMemo)(
            () => ({
              id: l?.GetID(),
              type: (0, N._4)(l?.GetStoreItemType(), l?.GetAppType()),
            }),
            [l],
          ),
          m = (0, d.rt)(p);
        if (!o || !l) return null;
        const {
            appid: h,
            link_url: _,
            blurb: y,
            time_recommended: f,
            recommendation_state: C,
          } = t.recommended_app,
          g = o.is_creator_home && !o.is_ogg,
          v = a.list_jsondata.app_data?.[h],
          S = _ && (0, c.XU)(_),
          b = _ && E(_),
          w = y != A.F6 && y,
          R = l.BHasDemo(),
          x = v?.img_url,
          G = `curator_clanid=${o.clanAccountID}&curator_listid=${a.listid}`,
          T = l.GetStorePageURL() + "/?curator_clanid=" + o.clanAccountID;
        return (0, n.jsxs)(u.Z, {
          className: z().CuratorReview,
          autoFocus: i,
          children: [
            (0, n.jsx)("div", {
              className: z().CapsuleCtn,
              children: Boolean(S || b)
                ? (0, n.jsx)(oe, {
                    strVideoID: S?.strVideoID || b,
                    nStartSeconds: S?.nStartSeconds,
                    id: m,
                    strImgOverrideUrl: x,
                    bShowDemoButton: R,
                    strExtraParams: G,
                    bTwitchVideo: Boolean(b),
                  })
                : (0, n.jsx)(V.W, {
                    imageType: "header",
                    capsule: p,
                    bShowDemoButton: R,
                    strExtraParams: G,
                    bPreferAssetWithoutOverride: !1,
                  }),
            }),
            (0, n.jsxs)("div", {
              className: z().ReviewTextSection,
              children: [
                (0, n.jsx)("a", {
                  className: z().GameTitle,
                  href: T,
                  children: l.GetName(),
                }),
                (0, n.jsxs)("div", {
                  className: z().RecommendationTypeAndDate,
                  children: [
                    (0, n.jsx)(le, { type: C }),
                    (0, n.jsx)("div", {
                      className: z().ReviewDate,
                      children:
                        g || !Boolean(f)
                          ? (0, H.we)(
                              "#EventModTile_ReleaseDate",
                              l.GetFormattedSteamReleaseDate(),
                            )
                          : (0, H.$z)(f),
                    }),
                  ],
                }),
                Boolean(w) &&
                  (0, n.jsx)("div", {
                    className: z().ReviewBlurb,
                    children: (0, H.we)("#SteamCurator_ReviewTextQuoted", w),
                  }),
                Boolean(_) && (0, n.jsx)(ue, { url: _ }),
              ],
            }),
          ],
        });
      });
      function oe(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            id: i,
            strImgOverrideUrl: r,
            bShowDemoButton: s,
            strExtraParams: o,
            bTwitchVideo: l,
          } = e,
          { data: u } = (0, G.lv)(i);
        return (0, n.jsxs)("div", {
          className: z().YouTubeCapsule,
          children: [
            (0, n.jsx)("div", {
              className: z().YouTubeCtn,
              children: l
                ? (0, n.jsx)(F, {
                    videoid: t,
                    posterURL: u ? (0, Q.b0)(u, "header") : void 0,
                    imageClassnames: z().YouTubePreviewImage,
                    autoplay: !0,
                  })
                : (0, n.jsx)(U.l, {
                    video: t,
                    startSeconds: a,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: z().YouTubePreviewImage,
                    altImg: r,
                  }),
            }),
            (0, n.jsxs)("div", {
              className: z().YouTubeCapsuleBottomBar,
              children: [
                (0, n.jsx)("div", {
                  className: z().GameImageCtn,
                  children: (0, n.jsx)(p.Q, {
                    id: i,
                    bShowDemoButton: s,
                    nDelayShowMs: 300,
                    strExtraParams: o,
                    hoverProps: {
                      direction: "overlay-center",
                      style: { minWidth: "300px" },
                    },
                    children: (0, n.jsx)("img", {
                      className: z().GameImage,
                      src: u ? (0, Q.b0)(u, "library_capsule") : void 0,
                    }),
                  }),
                }),
                (0, n.jsx)(m.q, { id: i, strClassName: z().FullWidth }),
              ],
            }),
          ],
        });
      }
      function le(e) {
        switch (e.type) {
          case $.tV.$D:
            return (0, n.jsx)("div", {
              className: z().Recommended,
              children: (0, H.we)("#SteamCurator_Recommended"),
            });
          case $.tV.qP:
            return (0, n.jsx)("div", {
              className: z().NotRecommended,
              children: (0, H.we)("#SteamCurator_NotRecommended"),
            });
          case $.tV.y8:
            return (0, n.jsx)("div", {
              className: z().Informational,
              children: (0, H.we)("#SteamCurator_Informational"),
            });
          default:
            return null;
        }
      }
      function ue(e) {
        let t = (0, y.OZ)(e.url);
        (0, s.p)(t) &&
          (t =
            (I.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            I.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, W.wm)(e.url),
          i = (0, c.Lg)(e.url);
        return (0, n.jsxs)("div", {
          className: z().FullReviewLink,
          children: [
            (0, n.jsx)(l.Ii, {
              className: z().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
              children: (0, H.we)(
                i
                  ? "#SteamCurator_WatchFullReview"
                  : "#SteamCurator_ReadFullReview",
              ),
            }),
            (0, n.jsx)("div", {
              className: z().FullReviewDomain,
              children: (0, H.we)(
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
