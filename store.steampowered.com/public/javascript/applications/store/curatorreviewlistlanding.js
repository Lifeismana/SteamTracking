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
    17083: (e, a, t) => {
      "use strict";
      t.d(a, { N_: () => y, k2: () => _ });
      var n = t(92757),
        r = t(42891),
        i = t(90626),
        o = t(29248),
        s = t(58584),
        l = t(81115),
        c = t(68841);
      i.Component;
      i.Component;
      var u = function (e, a) {
          return "function" == typeof e ? e(a) : e;
        },
        d = function (e, a) {
          return "string" == typeof e ? (0, o.yJ)(e, null, null, a) : e;
        },
        m = function (e) {
          return e;
        },
        p = i.forwardRef;
      void 0 === p && (p = m);
      var h = p(function (e, a) {
        var t = e.innerRef,
          n = e.navigate,
          r = e.onClick,
          o = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          c = o.target,
          u = (0, s.A)({}, o, {
            onClick: function (e) {
              try {
                r && r(e);
              } catch (a) {
                throw (e.preventDefault(), a);
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
        return (u.ref = (m !== p && a) || t), i.createElement("a", u);
      });
      var y = p(function (e, a) {
          var t = e.component,
            r = void 0 === t ? h : t,
            y = e.replace,
            f = e.to,
            C = e.innerRef,
            _ = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return i.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var t = e.history,
              n = d(u(f, e.location), e.location),
              l = n ? t.createHref(n) : "",
              h = (0, s.A)({}, _, {
                href: l,
                navigate: function () {
                  var a = u(f, e.location),
                    n = (0, o.AO)(e.location) === (0, o.AO)(d(a));
                  (y || n ? t.replace : t.push)(a);
                },
              });
            return (
              m !== p ? (h.ref = a || C) : (h.innerRef = C),
              i.createElement(r, h)
            );
          });
        }),
        f = function (e) {
          return e;
        },
        C = i.forwardRef;
      void 0 === C && (C = f);
      var _ = C(function (e, a) {
        var t = e["aria-current"],
          r = void 0 === t ? "page" : t,
          o = e.activeClassName,
          m = void 0 === o ? "active" : o,
          p = e.activeStyle,
          h = e.className,
          _ = e.exact,
          I = e.isActive,
          g = e.location,
          v = e.sensitive,
          S = e.strict,
          b = e.style,
          A = e.to,
          w = e.innerRef,
          N = (0, l.A)(e, [
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
          var t = g || e.location,
            o = d(u(A, t), t),
            l = o.pathname,
            R = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            P = R
              ? (0, n.B6)(t.pathname, {
                  path: R,
                  exact: _,
                  sensitive: v,
                  strict: S,
                })
              : null,
            T = !!(I ? I(P, t) : P),
            x = "function" == typeof h ? h(T) : h,
            B = "function" == typeof b ? b(T) : b;
          T &&
            ((x = (function () {
              for (
                var e = arguments.length, a = new Array(e), t = 0;
                t < e;
                t++
              )
                a[t] = arguments[t];
              return a
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(x, m)),
            (B = (0, s.A)({}, B, p)));
          var L = (0, s.A)(
            { "aria-current": (T && r) || null, className: x, style: B, to: o },
            N,
          );
          return (
            f !== C ? (L.ref = a || w) : (L.innerRef = w), i.createElement(y, L)
          );
        });
      });
    },
    81886: (e, a, t) => {
      "use strict";
      t.d(a, { fp: () => r, vm: () => i });
      var n = t(95578);
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
    23338: (e, a, t) => {
      "use strict";
      t.d(a, { Y: () => s, j: () => l });
      var n = t(7850),
        r = t(90626),
        i = t(40236),
        o = t(8871);
      function s(e) {
        const a = (0, i.OO)(e, e.options);
        return (0, n.jsx)("span", { ref: a, style: { fontSize: 0 } });
      }
      const l = r.forwardRef(function (e, a) {
        const { onLeave: t, onEnter: r, options: s, ...l } = e,
          c = (0, i.OO)(e, e.options),
          u = (0, o.Ue)(c, a);
        return (0, n.jsx)("div", { ref: u, ...l });
      });
    },
    85693: (e, a, t) => {
      "use strict";
      t.d(a, { r: () => c });
      var n = t(7850),
        r = t(45699),
        i = t(76217),
        o = t(17083),
        s = t(52038),
        l = t(2108);
      function c(e) {
        const { crumbs: a, className: t, bHideLastArrow: c } = e;
        return a && 0 != a.length
          ? (0, n.jsxs)("div", {
              className: (0, s.A)(l.BreadContainer, t),
              children: [
                (0, n.jsx)(i.Z, {
                  className: "blockbg",
                  "flow-children": "row",
                  children: a.map((e, t) => {
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
                      (!c || t < a.length - 1) &&
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
    98735: (e, a, t) => {
      "use strict";
      t.d(a, { Ey: () => h, Rp: () => p });
      var n = t(2160);
      const r = JSON.parse(
        '{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d\'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}',
      ).h;
      var i = t(98841),
        o = t(38861),
        s = t(91933);
      async function l(e, a, t, l) {
        if ((0, n.nA)(l))
          return { version: i.ie.mO, preference_state: i.CY.__ };
        if (a) {
          const a = (await i.T4.GetCookiePreferences(e, {}))
            .Body()
            .toObject().preferences;
          if (a && void 0 !== a.version && a.version != i.ie.CL) return a;
        }
        try {
          const e = (0, s.j_)(o.J_);
          if (e) {
            const a = JSON.parse(e);
            if (a && void 0 !== a.version && a.version != i.ie.CL) return a;
          }
        } catch (e) {}
        return t in r.eucountries || t in r.eeacountries || "CH" === t
          ? { version: i.ie.mO, preference_state: i.CY._H }
          : { version: i.ie.mO, preference_state: i.CY.__ };
      }
      var c = t(80902),
        u = t(23809),
        d = t(66418);
      function m() {
        const e = (0, u.KV)();
        return (0, c.I)(
          (function (e) {
            return {
              queryKey: ["CookiePreferences"],
              queryFn: () => l(e, d.iA.logged_in, d.TS.COUNTRY, d.TS.EREALM),
            };
          })(e),
        );
      }
      function p(e) {
        const { data: a } = m();
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
      function h() {
        const { data: e } = m();
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
    70995: (e, a, t) => {
      "use strict";
      t.d(a, { Lg: () => c, XU: () => d });
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
        const a = e?.length < n ? void 0 : r.exec(e) || i.exec(e) || o.exec(e);
        return a?.[1];
      }
      function d(e) {
        const a = u(e);
        if (!a) return;
        const t = (function (e) {
            const a = s.exec(e);
            return a?.[1];
          })(e),
          n = t
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
        return { strVideoID: a, nStartSeconds: n };
      }
    },
    4796: (e, a, t) => {
      "use strict";
      t.d(a, { $5: () => v, TB: () => g, ac: () => _ });
      var n = t(7860),
        r = t(75233),
        i = t(14947),
        o = t(90626),
        s = t(17720),
        l = t(81393),
        c = t(78327),
        u = t(67165),
        d = (t(26161), t(29197), t(33951)),
        m = t(63340);
      const p = new WeakSet();
      function h(e = n.L) {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return;
        if (p.has(e)) return;
        const a = (0, c.Fd)("groupvanityinfo", "application_config");
        (void 0 === a && "complete" != document.readyState) ||
          (p.add(e), y(a) && (0, d.aA)(e, a));
      }
      function y(e) {
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
      function f(e) {
        return "string" == typeof e ? parseInt(e) : e;
      }
      function C(e) {
        return "string" == typeof e ? Number.parseInt(e) : e;
      }
      const _ = new (class {
        m_queryClient = n.L;
        m_boxCacheVersion = i.sH.box(0);
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
                (0, i.h5)(() =>
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
          this.LazyInit(), y(e) && (0, d.aA)(this.m_queryClient, e);
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
          return Boolean((0, d.Gt)(C(e), this.ReadCache()));
        }
        RegisterClanData(e) {
          this.LazyInit(), (0, d.aA)(this.m_queryClient, e);
        }
        async LoadOGGClanInfoForAppID(e) {
          return (
            this.LazyInit(),
            (e = f(e)),
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
          return this.LazyInit(), (0, d.MR)(C(e), this.m_queryClient);
        }
        GetOGGClanInfo(e) {
          const a = this.ReadCache();
          return "string" == typeof e ? (0, d.fy)(e, a) : (0, d.ko)(e, a);
        }
        GetClanSteamIDForAppID(e) {
          const a = (0, d.ko)(f(e), this.ReadCache());
          return a ? s.b.InitFromClanID(a.clanAccountID) : void 0;
        }
        GetClanVanityForAppID(e) {
          return (0, d.ko)(f(e), this.ReadCache())?.vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          return (0, d.Gt)(e.GetAccountID(), this.ReadCache())?.vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.BHasClanInfoLoadedByAccountID(e);
        }
        GetClanMemberCount(e) {
          return (0, d.ko)(f(e), this.ReadCache())?.member_count ?? 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            (0, l.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            (0, d.Gt)(C(e), this.ReadCache())
          );
        }
        GetCreatorStoreURL(e) {
          let a = u.pF.GetCreatorHome(e);
          if (a) return a.GetCreatorHomeURL("developer");
          let t = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            c.TS.COMMUNITY_BASE_URL +
            (t.vanity_url
              ? "groups/" + t.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      })();
      function I() {
        const e = (0, r.jE)();
        return h(e), e;
      }
      function g(e) {
        I();
        const { data: a, isPending: t } = (0, d.TB)(e ? C(e) : void 0);
        return [Boolean(e) && t, a ?? void 0];
      }
      function v(e) {
        const a = I();
        (0, o.useEffect)(() => {
          e &&
            (0, d.MR)(C(e), a).catch((a) =>
              console.error(`Failed to hint load clan info ${e}`, a),
            );
        }, [e, a]);
      }
      (0, m.V)("g_ClanStore", _);
    },
    26161: (e, a, t) => {
      "use strict";
      t.d(a, { H: () => i });
      var n = t(22837),
        r = t(30470);
      const i = () => (r.TS.EUNIVERSE === n.Rv ? 2581 : 45267781);
    },
    48211: (e, a, t) => {
      "use strict";
      t.d(a, { N1: () => S, VC: () => I, fm: () => w, gZ: () => b });
      var n,
        r = t(34629),
        i = t(7850),
        o = t(90626),
        s = t(62490),
        l = t(84933),
        c = t(52038),
        u = t(22797),
        d = t(98735),
        m = t(61859),
        p = t(23338),
        h = t(8871),
        y = t(40236);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(n || (n = {}));
      let f = n.NotLoaded,
        C = [];
      function _(e) {
        if (f != n.Loaded) {
          if (f == n.NotLoaded) {
            let e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            let a = document.getElementsByTagName("script")[0];
            a.parentNode?.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = v);
          }
          e && (C.includes(e) || C.push(e));
        } else e && e();
      }
      function I(e = !0) {
        const a = (0, d.Rp)("youtube");
        (0, o.useEffect)(() => {
          a && e && _();
        }, [a, e]);
      }
      function g(e) {
        s.x9(C, e);
      }
      function v() {
        f = n.Loaded;
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
          this.DestroyPlayer(), g(this.OnYoutubeScriptsReady);
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
            _(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const a = !1 === e.autoplay ? 0 : 1,
            t = !0 === e.showInfo ? 1 : 0,
            n = !0 === e.controls ? 1 : 0,
            r = !0 === e.showFullscreenBtn ? 1 : 0,
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
          return (0, i.jsx)(b, {
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
      function b(e) {
        const { video: a, children: t } = e;
        return (0, d.Rp)("youtube")
          ? t
          : (0, i.jsx)("a", {
              href: `https://www.youtube.com/watch?v=${a}`,
              children: (0, m.we)("#EventCalendar_WatchYouTubeVideo"),
            });
      }
      function A(e) {
        const a = new URLSearchParams({
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
          e.startSeconds && a.set("start", String(e.startSeconds)),
          `https://www.youtube-nocookie.com/embed/${encodeURIComponent(e.video)}?${a.toString()}`
        );
      }
      function w(e) {
        const { video: a, autopause: t, className: n } = e,
          r = o.useRef(null),
          s = o.useRef(null),
          l = o.useCallback(() => r.current?.pauseVideo(), []),
          c = (0, y.OO)({ onLeave: t ? l : void 0 }),
          u = (0, h.Ue)(s, c);
        return (
          o.useEffect(() => {
            const e = () => {
              s.current && (r.current = new YT.Player(s.current, {}));
            };
            return (
              t && _(e),
              () => {
                g(e), (r.current = null);
              }
            );
          }, [t]),
          (0, i.jsx)("iframe", {
            ref: u,
            className: n,
            src: A(e),
            title: a,
            allow: "autoplay; encrypted-media; picture-in-picture; web-share",
            allowFullScreen: !0,
            frameBorder: 0,
          })
        );
      }
      (0, r.Cg)([l.oI], S.prototype, "BindPlayerContainer", null),
        (0, r.Cg)([l.oI], S.prototype, "OnYoutubeScriptsReady", null),
        (0, r.Cg)([l.oI], S.prototype, "CreatePlayer", null),
        (0, r.Cg)([l.oI], S.prototype, "OnPlayerReady", null),
        (0, r.Cg)([l.oI], S.prototype, "OnPlayerStateChange", null),
        (0, r.Cg)([l.oI], S.prototype, "OnError", null),
        (0, r.Cg)([l.oI], S.prototype, "OnPlayerLeftView", null),
        (0, r.Cg)([l.oI], S.prototype, "PlayVideo", null);
    },
    94743: (e, a, t) => {
      "use strict";
      t.d(a, { l: () => h, r: () => p });
      var n = t(7850),
        r = t(90626),
        i = t(26296),
        o = t(12155),
        s = t(48211),
        l = t(52038),
        c = t(61859),
        u = t(70758),
        d = t.n(u),
        m = t(98735);
      const p = (e) => {
          const a = ["maxresdefault", "mqdefault", "default"],
            [t, o] = r.useState(0);
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
                "https://img.youtube.com/vi/" + e.video + "/" + a[t] + ".jpg",
              i = () => {
                t + 1 < a.length && o(t + 1);
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
          const [a, t] = r.useState(!1);
          (0, s.VC)(!!e.preloadYoutubeScripts);
          const i = (0, m.Rp)("youtube");
          if (a && i)
            return (0, n.jsx)(s.N1, {
              ...e,
              classnames: (0, l.A)(d().YoutubePlayer, e.classnames),
            });
          {
            const a = (a) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                t(!0),
                a.stopPropagation(),
                a.preventDefault();
            };
            return (0, n.jsxs)("div", {
              className: (0, l.A)(
                "YoutubePreviewContainer",
                d().YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: i ? a : void 0,
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
    49271: (e, a, t) => {
      "use strict";
      t.r(a),
        t.d(a, { CuratorReviewListContainer: () => te, default: () => ae });
      var n = t(7850),
        r = t(75844),
        i = t(90626),
        o = t(15759),
        s = t(22837),
        l = t(45699),
        c = t(76217),
        u = t(70995),
        d = t(76682),
        m = t(29008),
        p = t(75152),
        h = t(38390),
        y = t(17720),
        f = t(55963),
        C = t(4434),
        _ = t(41735),
        I = t.n(_),
        g = t(78327),
        v = t(68797),
        S = t(37085);
      function b(e, a) {
        const [t, n] = (0, i.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          r = (0, C.m)("useFilteredAppViaContentHub");
        return (
          (0, i.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !t &&
              (async function (e, a) {
                const t =
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
                    applist: a.sort().join(","),
                  };
                let r = null;
                const i = new Set();
                try {
                  const e = await I().get(t, { params: n });
                  if (e?.data?.success == S.R)
                    return e.data.appids.forEach((e) => i.add(e)), i;
                  r = (0, v.H)(e);
                } catch (e) {
                  r = (0, v.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + r?.strErrorMsg,
                    r,
                  ),
                  i
                );
              })(e, a).then((e) => {
                r.token.reason || n(e);
              });
          }, [t, r.token.reason, e, a]),
          t
        );
      }
      var A = t(6626),
        w = t(30894),
        N = t(16021),
        R = t(62792),
        P = t(55263),
        T = t(39020),
        x = t(39777),
        B = t(33380),
        L = t.n(B),
        j = t(12155),
        G = t(52038),
        M = t(70758);
      const D = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function F(e) {
        const a = D.exec(e);
        return a && a.length > 1 ? a[1] : null;
      }
      function E(e) {
        const {
            posterURL: a,
            videoid: t,
            muted: r,
            autoplay: o,
            bIsClipID: s,
            time: l,
            width: c,
            height: u,
          } = e,
          [d, m] = i.useState(Boolean(a)),
          p = null != o && null != o && o;
        if (d)
          return (0, n.jsxs)("div", {
            className: (0, G.A)(
              "YoutubePreviewContainer",
              M.YoutubePreviewImage,
              e.imageClassnames,
            ),
            onClick: () => m(!1),
            children: [
              (0, n.jsx)("img", {
                className: (0, G.A)(
                  "YoutubePreviewImage",
                  M.YoutubePreviewImage,
                ),
                src:
                  a ||
                  g.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, n.jsx)("div", {
                className: "YoutubePreviewPlay",
                children: (0, n.jsx)(j.IOc, {}),
              }),
            ],
          });
        let h = (0, g.xv)().replace("https://", "");
        const y = h.indexOf("/");
        y >= 0 && (h = h.substring(0, y));
        let f = s
          ? `https://clips.twitch.tv/embed?clip=${t}`
          : `https://player.twitch.tv/?video=${t}`;
        return (
          (f += `&parent=${h}&autoplay=${p}&muted=${Boolean(r)}`),
          l &&
            (f += `&time=${(function (e) {
              const a = Math.floor(e / 3600);
              e -= 60 * a * 60;
              const t = Math.floor(e / 60);
              return `${a}h${t}m${(e -= t * e)}s`;
            })(l)}`),
          (0, n.jsxs)("div", {
            className: (0, G.A)("YoutubePlayer", L().TwitchPlayer),
            children: [
              (0, n.jsx)("img", {
                className: (0, G.A)(
                  "YoutubePreviewContainer",
                  M.YoutubePreviewImage,
                  e.imageClassnames,
                ),
                src:
                  g.TS.COMMUNITY_CDN_URL +
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
      var k = t(99032),
        V = t(22687),
        Y = t(22797),
        O = t(10224),
        U = t(94743),
        H = t(61859),
        K = t(61336),
        W = t(62014),
        z = t.n(W),
        Z = t(85693),
        q = t(22584);
      function J(e) {
        const { clanInfo: a } = e,
          { curator_link: t, curator_medium_avatar: r } = (0, g.Tc)(
            "curator_header",
            "application_config",
          );
        return (0, n.jsx)(c.Z, {
          className: "page_content_ctn",
          "flow-children": "column",
          autoFocus: !0,
          children: (0, n.jsxs)("div", {
            className: "page_content " + q.HeaderContent,
            children: [
              (0, n.jsx)(Z.r, {
                className: q.BreadContainer,
                crumbs: (0, g.Tc)("breadcrumbs", "application_config"),
              }),
              (0, n.jsxs)(c.Z, {
                className: "list_header_area",
                "flow-children": "row",
                children: [
                  (0, n.jsx)("div", {
                    className: "curator_avatar_image",
                    children: (0, n.jsx)(l.Ii, {
                      href: t,
                      children: (0, n.jsx)("img", {
                        className: "curator_avatar",
                        src: r,
                      }),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "curator_details",
                    children: (0, n.jsx)(l.Ii, {
                      className: "pageheader curator_name",
                      href: t,
                      children: (0, H.we)(
                        "#SteamCurator_List_Header_List",
                        a.group_name,
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var X = t(32630),
        Q = t(42834),
        $ = t(64087),
        ee = t(67165);
      const ae = function (e) {
        return (0, n.jsx)(te, { listid: e.listid });
      };
      function te(e) {
        const a = parseInt(
            (0, g.Tc)("curator_account_id", "application_config"),
          ),
          t = (0, A.m1)(a),
          r = (0, A.ME)(t?.clanSteamID, e.listid);
        if (((0, T.vb)(g.TS.LANGUAGE), !r)) return null;
        const i = t.is_ogg,
          o = t.is_creator_home && !t.is_ogg,
          s = i
            ? "#SteamCurator_MoreDLC"
            : o
              ? "#SteamCurator_MoreProducts"
              : "#SteamCurator_MoreReviews";
        return (0, n.jsxs)(X.Ay, {
          feature: "curatorlistcapsule",
          children: [
            (0, n.jsx)(J, { clanInfo: t }),
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
                      : (0, n.jsx)(re, { listDetails: r, rgListItems: r.apps }),
                    (0, n.jsxs)("div", {
                      className: z().CuratorMoreCtn,
                      children: [
                        (0, n.jsx)("h2", {
                          children: (0, H.we)("#SteamCurator_ExploreMoreTitle"),
                        }),
                        (0, n.jsx)(l.Ii, {
                          href: t.vanity_url,
                          children: (0, H.PP)(s, t.group_name),
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
        const { listDetails: a } = e,
          [t, r] = (0, i.useState)(null),
          o = new y.b(a.sale_clan_steamid),
          { eventModel: s } = (0, h.B9)(
            o.GetAccountID(),
            a.sale_clan_event_gid,
          ),
          l = (0, i.useMemo)(
            () => (a.apps || []).map((e) => e.recommended_app.appid),
            [a],
          ),
          c = b(s, l);
        return (
          (0, i.useEffect)(() => {
            if (s)
              if (s.BUsesContentHubForItemSource())
                c && r(a.apps?.filter((e) => c.has(e.recommended_app?.appid)));
              else {
                const e = s.GetSaleFeaturedApps();
                r(a.apps?.filter((a) => e.has(a.recommended_app?.appid)));
              }
          }, [a, s, c]),
          (0, n.jsx)(re, { listDetails: a, rgListItems: t })
        );
      }
      function re(e) {
        const { listDetails: a, rgListItems: t } = e,
          [r, o] = (0, i.useState)(0),
          [s, u] = (0, i.useState)(null),
          d = (0, C.m)("CuratorAppListDisplay");
        if (
          (i.useEffect(() => {
            t &&
              (o(t?.length || 0),
              w.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = t.map((e) => e.recommended_app.appid);
                  N.A.Get()
                    .QueueMultipleAppRequests(e, k.jy)
                    .then(() => {
                      d.token.reason ||
                        u(
                          t.filter(
                            (e) =>
                              !(0, k.Li)(
                                N.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      d.token.reason || u([]);
                    });
                }));
          }, [t, d]),
          null == s)
        )
          return (0, n.jsx)(Y.t, {
            string: (0, H.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = a.list_type == A.QV;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(c.Z, {
              className: (0, G.A)(z().CuratorList, m && z().CuratorListGrid),
              "flow-children": "grid",
              children: s.map((e, t) =>
                (0, n.jsx)(
                  oe,
                  { item: e, listDetails: a, bAutoFocus: 0 == t },
                  "rec_" + e.recommended_app.appid,
                ),
              ),
            }),
            Boolean(100 > s.length) &&
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("span", {
                    children: [
                      (0, H.Yp)("#SteamCurator_Hidden", r - s.length),
                      " ",
                    ],
                  }),
                  (0, n.jsx)(l.Ii, {
                    href: g.TS.STORE_BASE_URL + "account/preferences/",
                    children: (0, H.we)("#SteamCurator_Setting"),
                  }),
                ],
              }),
          ],
        });
      }
      function ie(e) {
        const { listDetails: a } = e,
          t = (0, A.fq)(a),
          r = (0, g.Tc)("showlisttitle", "application_config"),
          i = (0, g.Tc)("titleareaheight", "application_config"),
          o =
            a.list_jsondata.youtube_link &&
            (0, u.XU)(a.list_jsondata.youtube_link),
          c = a.list_jsondata.youtube_link && F(a.list_jsondata.youtube_link),
          d = (0, s.sfN)(g.TS.LANGUAGE),
          m = H.NT.GetWithFallback(a.localized_flat_title, d),
          p = H.NT.GetWithFallback(a.localized_flat_blurb, d),
          h = H.NT.GetWithFallback(a.localized_flat_link, d),
          y =
            t &&
            t.GetImageURL(
              (0, O.c5)() ? "product_mobile_banner" : "product_banner",
              d,
            );
        return (0, n.jsxs)("div", {
          className: z().TopReviewInfo,
          children: [
            Boolean(y) &&
              (0, n.jsx)(l.Ii, {
                href: (0, ee.n4)(t),
                children: (0, n.jsx)("img", {
                  className: z().SaleBanner,
                  src: y,
                }),
              }),
            r && m && (0, n.jsx)("div", { className: z().Title, children: m }),
            r && p && (0, n.jsx)("div", { className: z().Blurb, children: p }),
            Boolean(i > 0) && (0, n.jsx)("div", { style: { height: i } }),
            o &&
              (0, n.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, n.jsx)(U.l, {
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
                children: (0, n.jsx)(E, {
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
        const { item: a, listDetails: t, bAutoFocus: r } = e,
          o = parseInt((0, g.Tc)("curator_account_id", "application_config")),
          s = (0, A.m1)(o),
          [l] = (0, P.t7)(a?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          m = (0, i.useMemo)(
            () => ({
              id: l?.GetID(),
              type: (0, R._4)(l?.GetStoreItemType(), l?.GetAppType()),
            }),
            [l],
          ),
          p = (0, d.rt)(m);
        if (!s || !l) return null;
        const {
            appid: h,
            link_url: y,
            blurb: f,
            time_recommended: C,
            recommendation_state: _,
          } = a.recommended_app,
          I = s.is_creator_home && !s.is_ogg,
          v = t.list_jsondata.app_data?.[h],
          S = y && (0, u.XU)(y),
          b = y && F(y),
          w = f != A.F6 && f,
          N = l.BHasDemo(),
          T = v?.img_url,
          x = `curator_clanid=${s.clanAccountID}&curator_listid=${t.listid}`,
          B = l.GetStorePageURL() + "/?curator_clanid=" + s.clanAccountID;
        return (0, n.jsxs)(c.Z, {
          className: z().CuratorReview,
          autoFocus: r,
          children: [
            (0, n.jsx)("div", {
              className: z().CapsuleCtn,
              children: Boolean(S || b)
                ? (0, n.jsx)(se, {
                    strVideoID: S?.strVideoID || b,
                    nStartSeconds: S?.nStartSeconds,
                    id: p,
                    strImgOverrideUrl: T,
                    bShowDemoButton: N,
                    strExtraParams: x,
                    bTwitchVideo: Boolean(b),
                  })
                : (0, n.jsx)(V.W, {
                    imageType: "header",
                    capsule: m,
                    bShowDemoButton: N,
                    strExtraParams: x,
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
                    (0, n.jsx)(le, { type: _ }),
                    (0, n.jsx)("div", {
                      className: z().ReviewDate,
                      children:
                        I || !Boolean(C)
                          ? (0, H.we)(
                              "#EventModTile_ReleaseDate",
                              l.GetFormattedSteamReleaseDate(),
                            )
                          : (0, H.$z)(C),
                    }),
                  ],
                }),
                Boolean(w) &&
                  (0, n.jsx)("div", {
                    className: z().ReviewBlurb,
                    children: (0, H.we)("#SteamCurator_ReviewTextQuoted", w),
                  }),
                Boolean(y) && (0, n.jsx)(ce, { url: y }),
              ],
            }),
          ],
        });
      });
      function se(e) {
        const {
            strVideoID: a,
            nStartSeconds: t,
            id: r,
            strImgOverrideUrl: i,
            bShowDemoButton: o,
            strExtraParams: s,
            bTwitchVideo: l,
          } = e,
          { data: c } = (0, x.lv)(r);
        return (0, n.jsxs)("div", {
          className: z().YouTubeCapsule,
          children: [
            (0, n.jsx)("div", {
              className: z().YouTubeCtn,
              children: l
                ? (0, n.jsx)(E, {
                    videoid: a,
                    posterURL: c ? (0, Q.b0)(c, "header") : void 0,
                    imageClassnames: z().YouTubePreviewImage,
                    autoplay: !0,
                  })
                : (0, n.jsx)(U.l, {
                    video: a,
                    startSeconds: t,
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
                  children: (0, n.jsx)(m.Q, {
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
                      src: c ? (0, Q.b0)(c, "library_capsule") : void 0,
                    }),
                  }),
                }),
                (0, n.jsx)(p.q, { id: r, strClassName: z().FullWidth }),
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
      function ce(e) {
        let a = (0, f.OZ)(e.url);
        (0, o.p)(a) &&
          (a =
            (g.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            g.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            a);
        const t = (0, K.wm)(e.url),
          r = (0, u.Lg)(e.url);
        return (0, n.jsxs)("div", {
          className: z().FullReviewLink,
          children: [
            (0, n.jsx)(l.Ii, {
              className: z().FullReviewAnchor,
              href: a,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
              children: (0, H.we)(
                r
                  ? "#SteamCurator_WatchFullReview"
                  : "#SteamCurator_ReadFullReview",
              ),
            }),
            (0, n.jsx)("div", {
              className: z().FullReviewDomain,
              children: (0, H.we)(
                "#SteamCurator_ReviewLinkHostnameBracketed",
                t,
              ),
            }),
          ],
        });
      }
    },
  },
]);
