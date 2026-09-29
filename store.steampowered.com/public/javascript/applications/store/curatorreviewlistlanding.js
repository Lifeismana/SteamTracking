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
    17083: (e, t, n) => {
      "use strict";
      n.d(t, { N_: () => h, k2: () => g });
      var a = n(92757),
        i = n(42891),
        r = n(90626),
        s = n(29248),
        o = n(58584),
        l = n(81115),
        c = n(68841);
      r.Component;
      r.Component;
      var u = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, s.yJ)(e, null, null, t) : e;
        },
        m = function (e) {
          return e;
        },
        _ = r.forwardRef;
      void 0 === _ && (_ = m);
      var p = _(function (e, t) {
        var n = e.innerRef,
          a = e.navigate,
          i = e.onClick,
          s = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          c = s.target,
          u = (0, o.A)({}, s, {
            onClick: function (e) {
              try {
                i && i(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), a());
            },
          });
        return (u.ref = (m !== _ && t) || n), r.createElement("a", u);
      });
      var h = _(function (e, t) {
          var n = e.component,
            i = void 0 === n ? p : n,
            h = e.replace,
            f = e.to,
            v = e.innerRef,
            g = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return r.createElement(a.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var n = e.history,
              a = d(u(f, e.location), e.location),
              l = a ? n.createHref(a) : "",
              p = (0, o.A)({}, g, {
                href: l,
                navigate: function () {
                  var t = u(f, e.location),
                    a = (0, s.AO)(e.location) === (0, s.AO)(d(t));
                  (h || a ? n.replace : n.push)(t);
                },
              });
            return (
              m !== _ ? (p.ref = t || v) : (p.innerRef = v),
              r.createElement(i, p)
            );
          });
        }),
        f = function (e) {
          return e;
        },
        v = r.forwardRef;
      void 0 === v && (v = f);
      var g = v(function (e, t) {
        var n = e["aria-current"],
          i = void 0 === n ? "page" : n,
          s = e.activeClassName,
          m = void 0 === s ? "active" : s,
          _ = e.activeStyle,
          p = e.className,
          g = e.exact,
          C = e.isActive,
          I = e.location,
          y = e.sensitive,
          b = e.strict,
          x = e.style,
          w = e.to,
          A = e.innerRef,
          S = (0, l.A)(e, [
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
        return r.createElement(a.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var n = I || e.location,
            s = d(u(w, n), n),
            l = s.pathname,
            j = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            R = j
              ? (0, a.B6)(n.pathname, {
                  path: j,
                  exact: g,
                  sensitive: y,
                  strict: b,
                })
              : null,
            G = !!(C ? C(R, n) : R),
            B = "function" == typeof p ? p(G) : p,
            N = "function" == typeof x ? x(G) : x;
          G &&
            ((B = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(B, m)),
            (N = (0, o.A)({}, N, _)));
          var D = (0, o.A)(
            { "aria-current": (G && i) || null, className: B, style: N, to: s },
            S,
          );
          return (
            f !== v ? (D.ref = t || A) : (D.innerRef = A), r.createElement(h, D)
          );
        });
      });
    },
    81886: (e, t, n) => {
      "use strict";
      n.d(t, { fp: () => i, vm: () => r });
      var a = n(8747);
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
          (e == a.uE.HT ||
            e == a.uE._i ||
            e == a.uE.Sv ||
            e == a.uE.Ov ||
            e == a.uE.ue ||
            e == a.uE.Hk ||
            e == a.uE.RA ||
            e == a.uE.Wz ||
            e == a.uE.Vi ||
            e == a.uE.pl)
        );
      }
    },
    85693: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => c });
      var a = n(7850),
        i = n(45699),
        r = n(76217),
        s = n(17083),
        o = n(52038),
        l = n(2108);
      function c(e) {
        const { crumbs: t, className: n, bHideLastArrow: c } = e;
        return t && 0 != t.length
          ? (0, a.jsxs)("div", {
              className: (0, o.A)(l.BreadContainer, n),
              children: [
                (0, a.jsx)(r.Z, {
                  className: "blockbg",
                  "flow-children": "row",
                  children: t.map((e, n) => {
                    const r = new Array();
                    return (
                      e.url.startsWith("http")
                        ? r.push(
                            (0, a.jsx)(
                              i.Ii,
                              { href: e.url, children: e.name },
                              "anchor_" + e.name,
                            ),
                          )
                        : r.push(
                            (0, a.jsx)(
                              s.N_,
                              { to: e.url, children: e.name },
                              "link_" + e.name,
                            ),
                          ),
                      (!c || n < t.length - 1) &&
                        r.push(
                          (0, a.jsx)(
                            "span",
                            { children: " > " },
                            e.name + "span",
                          ),
                        ),
                      r
                    );
                  }),
                }),
                (0, a.jsx)("div", { style: { clear: "left" } }),
              ],
            })
          : null;
      }
    },
    4796: (e, t, n) => {
      "use strict";
      n.d(t, { $5: () => y, TB: () => I, ac: () => g });
      var a = n(7860),
        i = n(75233),
        r = n(14947),
        s = n(90626),
        o = n(17720),
        l = n(81393),
        c = n(78327),
        u = n(67165),
        d = (n(29197), n(33951)),
        m = n(63340);
      const _ = new WeakSet();
      function p(e = a.L) {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return;
        if (_.has(e)) return;
        const t = (0, c.Fd)("groupvanityinfo", "application_config");
        (void 0 === t && "complete" != document.readyState) ||
          (_.add(e), h(t) && (0, d.aA)(e, t));
      }
      function h(e) {
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
      function f(e) {
        return "string" == typeof e ? parseInt(e) : e;
      }
      function v(e) {
        return "string" == typeof e ? Number.parseInt(e) : e;
      }
      const g = new (class {
        m_queryClient = a.L;
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
          this.LazyInit(), h(e) && (0, d.aA)(this.m_queryClient, e);
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
          return Boolean((0, d.Gt)(v(e), this.ReadCache()));
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
          return this.LazyInit(), (0, d.MR)(v(e), this.m_queryClient);
        }
        GetOGGClanInfo(e) {
          const t = this.ReadCache();
          return "string" == typeof e ? (0, d.fy)(e, t) : (0, d.ko)(e, t);
        }
        GetClanSteamIDForAppID(e) {
          const t = (0, d.ko)(f(e), this.ReadCache());
          return t ? o.b.InitFromClanID(t.clanAccountID) : void 0;
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
            (0, d.Gt)(v(e), this.ReadCache())
          );
        }
        GetCreatorStoreURL(e) {
          let t = u.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            c.TS.COMMUNITY_BASE_URL +
            (n.vanity_url
              ? "groups/" + n.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      })();
      function C() {
        const e = (0, i.jE)();
        return p(e), e;
      }
      function I(e) {
        C();
        const { data: t, isPending: n } = (0, d.TB)(e ? v(e) : void 0);
        return [Boolean(e) && n, t ?? void 0];
      }
      function y(e) {
        const t = C();
        (0, s.useEffect)(() => {
          e &&
            (0, d.MR)(v(e), t).catch((t) =>
              console.error(`Failed to hint load clan info ${e}`, t),
            );
        }, [e, t]);
      }
      (0, m.V)("g_ClanStore", g);
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => _,
        Gg: () => f,
        Ow: () => h,
        Sq: () => u,
        YM: () => I,
        eR: () => d,
        ik: () => m,
        mZ: () => v,
        t7: () => p,
        zX: () => C,
      });
      var a = n(41735),
        i = n.n(a),
        r = n(90626),
        s = n(37085),
        o = n(8747),
        l = n(84933),
        c = n(16021);
      const u = 1,
        d = 2,
        m = 3;
      function _(e, t, n, a) {
        const o = (0, r.useRef)(void 0),
          _ = (0, r.useRef)(void 0),
          p = (0, l.CH)();
        o.current = e;
        const [h, f] = (0, r.useState)(void 0),
          {
            include_assets: v,
            include_release: g,
            include_platforms: C,
            include_all_purchase_options: I,
            include_screenshots: y,
            include_trailers: b,
            include_ratings: x,
            include_tag_count: w,
            include_reviews: A,
            include_basic_info: S,
            include_supported_languages: j,
            include_full_description: R,
            include_included_items: G,
            include_assets_without_overrides: B,
            apply_user_filters: N,
            include_links: D,
            include_extra_details: L,
            include_optin_registration_tags: T,
          } = n;
        if (
          ((0, r.useEffect)(() => {
            const n = {
              include_assets: v,
              include_release: g,
              include_platforms: C,
              include_all_purchase_options: I,
              include_screenshots: y,
              include_trailers: b,
              include_ratings: x,
              include_tag_count: w,
              include_reviews: A,
              include_basic_info: S,
              include_supported_languages: j,
              include_full_description: R,
              include_included_items: G,
              include_assets_without_overrides: B,
              apply_user_filters: N,
              include_links: D,
              include_extra_details: L,
              include_optin_registration_tags: T,
            };
            let r = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== h && a && a == _.current) ||
                (a !== _.current && (f(void 0), (_.current = a)),
                (r = i().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    r?.token.reason || o.current !== e || f(t == s.R), p();
                  })),
              () => r?.cancel("useStoreItemCache: unmounting")
            );
          }, [
            e,
            t,
            a,
            h,
            v,
            g,
            C,
            I,
            y,
            b,
            x,
            w,
            A,
            S,
            j,
            R,
            G,
            B,
            N,
            D,
            L,
            T,
            p,
          ]),
          !e)
        )
          return [null, d];
        if (!1 === h) return [void 0, d];
        if (c.A.Get().BIsStoreItemMissing(e, t)) return [void 0, d];
        if (!c.A.Get().BHasStoreItem(e, t, n)) return [void 0, u];
        const k = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return k ? [k, m] : [null, d];
      }
      function p(e, t, n) {
        return _(e, o.c6.qI, t, n);
      }
      function h(e, t, n) {
        return _(e, o.c6.xO, t, n);
      }
      function f(e, t, n) {
        return _(e, o.c6.RD, t, n);
      }
      function v(e, t, n) {
        const [a, i] = _(e, t, n);
        let r;
        a?.GetStoreItemType() != o.c6.RD ||
          a.GetAssets()?.GetHeaderURL() ||
          1 != a?.GetIncludedAppIDs().length ||
          (r = a.GetIncludedAppIDs()[0]);
        const [s, l] = p(r, n);
        return r && s?.BIsVisible() ? [s, l] : [a, i];
      }
      function g(e, t, n, a) {
        const s = (0, l.CH)(),
          {
            include_assets: o,
            include_release: _,
            include_platforms: p,
            include_all_purchase_options: h,
            include_screenshots: f,
            include_trailers: v,
            include_ratings: g,
            include_tag_count: C,
            include_reviews: I,
            include_basic_info: y,
            include_supported_languages: b,
            include_full_description: x,
            include_included_items: w,
            include_assets_without_overrides: A,
            apply_user_filters: S,
            include_links: j,
            include_extra_details: R,
            include_optin_registration_tags: G,
          } = n;
        if (
          ((0, r.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: o,
                include_release: _,
                include_platforms: p,
                include_all_purchase_options: h,
                include_screenshots: f,
                include_trailers: v,
                include_ratings: g,
                include_tag_count: C,
                include_reviews: I,
                include_basic_info: y,
                include_supported_languages: b,
                include_full_description: x,
                include_included_items: w,
                include_assets_without_overrides: A,
                apply_user_filters: S,
                include_links: j,
                include_extra_details: R,
                include_optin_registration_tags: G,
              },
              a = e.filter(
                (e) =>
                  !(
                    c.A.Get().BHasStoreItem(e, t, n) ||
                    c.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == a.length) return;
            const r = i().CancelToken.source(),
              l = a.map((e) => c.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(l).then(() => {
                r.token.reason || s();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [
            e,
            t,
            a,
            s,
            o,
            _,
            p,
            h,
            f,
            v,
            g,
            C,
            I,
            y,
            b,
            x,
            w,
            A,
            S,
            j,
            R,
            G,
          ]),
          !e)
        )
          return d;
        if (
          !e.every(
            (e) =>
              c.A.Get().BHasStoreItem(e, t, n) ||
              c.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return u;
        return e.every((e) =>
          c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? m
          : d;
      }
      function C(e, t, n) {
        return g(e, o.c6.qI, t, n);
      }
      function I() {
        r.useEffect(
          () => (
            c.A.Get().SetReturnUnavailableItems(!0),
            () => c.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    94743: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => p, r: () => _ });
      var a = n(7850),
        i = n(90626),
        r = n(26296),
        s = n(12155),
        o = n(48211),
        l = n(52038),
        c = n(61859),
        u = n(70758),
        d = n.n(u),
        m = n(98735);
      const _ = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [n, s] = i.useState(0);
          i.useEffect(() => s(0), [e.video]);
          const o = i.useRef(void 0);
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return (0, a.jsx)(r.o, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return (0, a.jsx)("img", { src: e.altImg, className: e.className });
          {
            const i =
                "https://img.youtube.com/vi/" + e.video + "/" + t[n] + ".jpg",
              r = () => {
                n + 1 < t.length && s(n + 1);
              },
              c = () => {
                o.current && o.current.naturalHeight < 91 && r();
              };
            return (0, a.jsx)("img", {
              ref: o,
              onLoad: c,
              onError: r,
              src: i,
              className: (0, l.A)(d().YoutubePreviewImage, e.className),
            });
          }
        },
        p = (e) => {
          const [t, n] = i.useState(!1);
          (0, o.VC)(!!e.preloadYoutubeScripts);
          const r = (0, m.Rp)("youtube");
          if (t && r)
            return (0, a.jsx)(o.N1, {
              ...e,
              classnames: (0, l.A)(d().YoutubePlayer, e.classnames),
            });
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                n(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return (0, a.jsxs)("div", {
              className: (0, l.A)(
                "YoutubePreviewContainer",
                d().YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: r ? t : void 0,
              children: [
                (0, a.jsx)(_, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: e.altImgWithFallback,
                  altImg: e.altImg,
                  video: e.video,
                }),
                r &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: "YoutubePreviewPlay",
                        children: (0, a.jsx)(s.IOc, {}),
                      }),
                      (0, a.jsx)("div", {
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
    49271: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, { CuratorReviewListContainer: () => ne, default: () => te });
      var a = n(7850),
        i = n(75844),
        r = n(90626),
        s = n(15759),
        o = n(22837),
        l = n(45699),
        c = n(76217),
        u = n(70995),
        d = n(76682),
        m = n(29008),
        _ = n(75152),
        p = n(38390),
        h = n(17720),
        f = n(55963),
        v = n(4434),
        g = n(41735),
        C = n.n(g),
        I = n(78327),
        y = n(68797),
        b = n(37085);
      function x(e, t) {
        const [n, a] = (0, r.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          i = (0, v.m)("useFilteredAppViaContentHub");
        return (
          (0, r.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !n &&
              (async function (e, t) {
                const n =
                    I.TS.STORE_BASE_URL +
                    "contenthub/ajaxfilterappsbycontenthub",
                  a = {
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
                  const e = await C().get(n, { params: a });
                  if (e?.data?.success == b.R)
                    return e.data.appids.forEach((e) => r.add(e)), r;
                  i = (0, y.H)(e);
                } catch (e) {
                  i = (0, y.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + i?.strErrorMsg,
                    i,
                  ),
                  r
                );
              })(e, t).then((e) => {
                i.token.reason || a(e);
              });
          }, [n, i.token.reason, e, t]),
          n
        );
      }
      var w = n(6626),
        A = n(30894),
        S = n(16021),
        j = n(62792),
        R = n(55263),
        G = n(39020),
        B = n(39777),
        N = n(33380),
        D = n.n(N),
        L = n(12155),
        T = n(52038),
        k = n(70758);
      const F = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function P(e) {
        const t = F.exec(e);
        return t && t.length > 1 ? t[1] : null;
      }
      function E(e) {
        const {
            posterURL: t,
            videoid: n,
            muted: i,
            autoplay: s,
            bIsClipID: o,
            time: l,
            width: c,
            height: u,
          } = e,
          [d, m] = r.useState(Boolean(t)),
          _ = null != s && null != s && s;
        if (d)
          return (0, a.jsxs)("div", {
            className: (0, T.A)(
              "YoutubePreviewContainer",
              k.YoutubePreviewImage,
              e.imageClassnames,
            ),
            onClick: () => m(!1),
            children: [
              (0, a.jsx)("img", {
                className: (0, T.A)(
                  "YoutubePreviewImage",
                  k.YoutubePreviewImage,
                ),
                src:
                  t ||
                  I.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, a.jsx)("div", {
                className: "YoutubePreviewPlay",
                children: (0, a.jsx)(L.IOc, {}),
              }),
            ],
          });
        let p = (0, I.xv)().replace("https://", "");
        const h = p.indexOf("/");
        h >= 0 && (p = p.substring(0, h));
        let f = o
          ? `https://clips.twitch.tv/embed?clip=${n}`
          : `https://player.twitch.tv/?video=${n}`;
        return (
          (f += `&parent=${p}&autoplay=${_}&muted=${Boolean(i)}`),
          l &&
            (f += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const n = Math.floor(e / 60);
              return `${t}h${n}m${(e -= n * e)}s`;
            })(l)}`),
          (0, a.jsxs)("div", {
            className: (0, T.A)("YoutubePlayer", D().TwitchPlayer),
            children: [
              (0, a.jsx)("img", {
                className: (0, T.A)(
                  "YoutubePreviewContainer",
                  k.YoutubePreviewImage,
                  e.imageClassnames,
                ),
                src:
                  I.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, a.jsx)("iframe", {
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
      var V = n(99032),
        Y = n(22687),
        H = n(22797),
        M = n(10224),
        q = n(94743),
        U = n(61859),
        O = n(61336),
        W = n(62014),
        z = n.n(W),
        Z = n(85693),
        X = n(22584);
      function Q(e) {
        const { clanInfo: t } = e,
          { curator_link: n, curator_medium_avatar: i } = (0, I.Tc)(
            "curator_header",
            "application_config",
          );
        return (0, a.jsx)(c.Z, {
          className: "page_content_ctn",
          "flow-children": "column",
          autoFocus: !0,
          children: (0, a.jsxs)("div", {
            className: "page_content " + X.HeaderContent,
            children: [
              (0, a.jsx)(Z.r, {
                className: X.BreadContainer,
                crumbs: (0, I.Tc)("breadcrumbs", "application_config"),
              }),
              (0, a.jsxs)(c.Z, {
                className: "list_header_area",
                "flow-children": "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "curator_avatar_image",
                    children: (0, a.jsx)(l.Ii, {
                      href: n,
                      children: (0, a.jsx)("img", {
                        className: "curator_avatar",
                        src: i,
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "curator_details",
                    children: (0, a.jsx)(l.Ii, {
                      className: "pageheader curator_name",
                      href: n,
                      children: (0, U.we)(
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
      var K = n(32630),
        $ = n(42834),
        J = n(64087),
        ee = n(67165);
      const te = function (e) {
        return (0, a.jsx)(ne, { listid: e.listid });
      };
      function ne(e) {
        const t = parseInt(
            (0, I.Tc)("curator_account_id", "application_config"),
          ),
          n = (0, w.m1)(t),
          i = (0, w.ME)(n?.clanSteamID, e.listid);
        if (((0, G.vb)(I.TS.LANGUAGE), !i)) return null;
        const r = n.is_ogg,
          s = n.is_creator_home && !n.is_ogg,
          o = r
            ? "#SteamCurator_MoreDLC"
            : s
              ? "#SteamCurator_MoreProducts"
              : "#SteamCurator_MoreReviews";
        return (0, a.jsxs)(K.Ay, {
          feature: "curatorlistcapsule",
          children: [
            (0, a.jsx)(Q, { clanInfo: n }),
            (0, a.jsx)("div", {
              className: "page_content_ctn grayscale",
              children: (0, a.jsx)("div", {
                className: "page_content",
                children: (0, a.jsxs)("div", {
                  className: z().CuratorListCtn,
                  children: [
                    (0, a.jsx)(re, { listDetails: i }),
                    (0, w.cc)(i)
                      ? (0, a.jsx)(ae, { listDetails: i })
                      : (0, a.jsx)(ie, { listDetails: i, rgListItems: i.apps }),
                    (0, a.jsxs)("div", {
                      className: z().CuratorMoreCtn,
                      children: [
                        (0, a.jsx)("h2", {
                          children: (0, U.we)("#SteamCurator_ExploreMoreTitle"),
                        }),
                        (0, a.jsx)(l.Ii, {
                          href: n.vanity_url,
                          children: (0, U.PP)(o, n.group_name),
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
      function ae(e) {
        const { listDetails: t } = e,
          [n, i] = (0, r.useState)(null),
          s = new h.b(t.sale_clan_steamid),
          { eventModel: o } = (0, p.B9)(
            s.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          l = (0, r.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          c = x(o, l);
        return (
          (0, r.useEffect)(() => {
            if (o)
              if (o.BUsesContentHubForItemSource())
                c && i(t.apps?.filter((e) => c.has(e.recommended_app?.appid)));
              else {
                const e = o.GetSaleFeaturedApps();
                i(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, o, c]),
          (0, a.jsx)(ie, { listDetails: t, rgListItems: n })
        );
      }
      function ie(e) {
        const { listDetails: t, rgListItems: n } = e,
          [i, s] = (0, r.useState)(0),
          [o, u] = (0, r.useState)(null),
          d = (0, v.m)("CuratorAppListDisplay");
        if (
          (r.useEffect(() => {
            n &&
              (s(n?.length || 0),
              A.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = n.map((e) => e.recommended_app.appid);
                  S.A.Get()
                    .QueueMultipleAppRequests(e, V.jy)
                    .then(() => {
                      d.token.reason ||
                        u(
                          n.filter(
                            (e) =>
                              !(0, V.Li)(
                                S.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      d.token.reason || u([]);
                    });
                }));
          }, [n, d]),
          null == o)
        )
          return (0, a.jsx)(H.t, {
            string: (0, U.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = t.list_type == w.QV;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c.Z, {
              className: (0, T.A)(z().CuratorList, m && z().CuratorListGrid),
              "flow-children": "grid",
              children: o.map((e, n) =>
                (0, a.jsx)(
                  se,
                  { item: e, listDetails: t, bAutoFocus: 0 == n },
                  "rec_" + e.recommended_app.appid,
                ),
              ),
            }),
            Boolean(100 > o.length) &&
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("span", {
                    children: [
                      (0, U.Yp)("#SteamCurator_Hidden", i - o.length),
                      " ",
                    ],
                  }),
                  (0, a.jsx)(l.Ii, {
                    href: I.TS.STORE_BASE_URL + "account/preferences/",
                    children: (0, U.we)("#SteamCurator_Setting"),
                  }),
                ],
              }),
          ],
        });
      }
      function re(e) {
        const { listDetails: t } = e,
          n = (0, w.fq)(t),
          i = (0, I.Tc)("showlisttitle", "application_config"),
          r = (0, I.Tc)("titleareaheight", "application_config"),
          s =
            t.list_jsondata.youtube_link &&
            (0, u.XU)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && P(t.list_jsondata.youtube_link),
          d = (0, o.sfN)(I.TS.LANGUAGE),
          m = U.NT.GetWithFallback(t.localized_flat_title, d),
          _ = U.NT.GetWithFallback(t.localized_flat_blurb, d),
          p = U.NT.GetWithFallback(t.localized_flat_link, d),
          h =
            n &&
            n.GetImageURL(
              (0, M.c5)() ? "product_mobile_banner" : "product_banner",
              d,
            );
        return (0, a.jsxs)("div", {
          className: z().TopReviewInfo,
          children: [
            Boolean(h) &&
              (0, a.jsx)(l.Ii, {
                href: (0, ee.n4)(n),
                children: (0, a.jsx)("img", {
                  className: z().SaleBanner,
                  src: h,
                }),
              }),
            i && m && (0, a.jsx)("div", { className: z().Title, children: m }),
            i && _ && (0, a.jsx)("div", { className: z().Blurb, children: _ }),
            Boolean(r > 0) && (0, a.jsx)("div", { style: { height: r } }),
            s &&
              (0, a.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, a.jsx)(q.l, {
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
            Boolean(c) &&
              (0, a.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, a.jsx)(E, {
                  videoid: c,
                  posterURL: "",
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            p && (0, a.jsx)(ce, { url: p }),
          ],
        });
      }
      const se = (0, i.PA)((e) => {
        const { item: t, listDetails: n, bAutoFocus: i } = e,
          s = parseInt((0, I.Tc)("curator_account_id", "application_config")),
          o = (0, w.m1)(s),
          [l] = (0, R.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          m = (0, r.useMemo)(
            () => ({
              id: l?.GetID(),
              type: (0, j._4)(l?.GetStoreItemType(), l?.GetAppType()),
            }),
            [l],
          ),
          _ = (0, d.rt)(m);
        if (!o || !l) return null;
        const {
            appid: p,
            link_url: h,
            blurb: f,
            time_recommended: v,
            recommendation_state: g,
          } = t.recommended_app,
          C = o.is_creator_home && !o.is_ogg,
          y = n.list_jsondata.app_data?.[p],
          b = h && (0, u.XU)(h),
          x = h && P(h),
          A = f != w.F6 && f,
          S = l.BHasDemo(),
          G = y?.img_url,
          B = `curator_clanid=${o.clanAccountID}&curator_listid=${n.listid}`,
          N = l.GetStorePageURL() + "/?curator_clanid=" + o.clanAccountID;
        return (0, a.jsxs)(c.Z, {
          className: z().CuratorReview,
          autoFocus: i,
          children: [
            (0, a.jsx)("div", {
              className: z().CapsuleCtn,
              children: Boolean(b || x)
                ? (0, a.jsx)(oe, {
                    strVideoID: b?.strVideoID || x,
                    nStartSeconds: b?.nStartSeconds,
                    id: _,
                    strImgOverrideUrl: G,
                    bShowDemoButton: S,
                    strExtraParams: B,
                    bTwitchVideo: Boolean(x),
                  })
                : (0, a.jsx)(Y.W, {
                    imageType: "header",
                    capsule: m,
                    bShowDemoButton: S,
                    strExtraParams: B,
                    bPreferAssetWithoutOverride: !1,
                  }),
            }),
            (0, a.jsxs)("div", {
              className: z().ReviewTextSection,
              children: [
                (0, a.jsx)("a", {
                  className: z().GameTitle,
                  href: N,
                  children: l.GetName(),
                }),
                (0, a.jsxs)("div", {
                  className: z().RecommendationTypeAndDate,
                  children: [
                    (0, a.jsx)(le, { type: g }),
                    (0, a.jsx)("div", {
                      className: z().ReviewDate,
                      children:
                        C || !Boolean(v)
                          ? (0, U.we)(
                              "#EventModTile_ReleaseDate",
                              l.GetFormattedSteamReleaseDate(),
                            )
                          : (0, U.$z)(v),
                    }),
                  ],
                }),
                Boolean(A) &&
                  (0, a.jsx)("div", {
                    className: z().ReviewBlurb,
                    children: (0, U.we)("#SteamCurator_ReviewTextQuoted", A),
                  }),
                Boolean(h) && (0, a.jsx)(ce, { url: h }),
              ],
            }),
          ],
        });
      });
      function oe(e) {
        const {
            strVideoID: t,
            nStartSeconds: n,
            id: i,
            strImgOverrideUrl: r,
            bShowDemoButton: s,
            strExtraParams: o,
            bTwitchVideo: l,
          } = e,
          { data: c } = (0, B.lv)(i);
        return (0, a.jsxs)("div", {
          className: z().YouTubeCapsule,
          children: [
            (0, a.jsx)("div", {
              className: z().YouTubeCtn,
              children: l
                ? (0, a.jsx)(E, {
                    videoid: t,
                    posterURL: c ? (0, $.b0)(c, "header") : void 0,
                    imageClassnames: z().YouTubePreviewImage,
                    autoplay: !0,
                  })
                : (0, a.jsx)(q.l, {
                    video: t,
                    startSeconds: n,
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
            (0, a.jsxs)("div", {
              className: z().YouTubeCapsuleBottomBar,
              children: [
                (0, a.jsx)("div", {
                  className: z().GameImageCtn,
                  children: (0, a.jsx)(m.Q, {
                    id: i,
                    bShowDemoButton: s,
                    nDelayShowMs: 300,
                    strExtraParams: o,
                    hoverProps: {
                      direction: "overlay-center",
                      style: { minWidth: "300px" },
                    },
                    children: (0, a.jsx)("img", {
                      className: z().GameImage,
                      src: c ? (0, $.b0)(c, "library_capsule") : void 0,
                    }),
                  }),
                }),
                (0, a.jsx)(_.q, { id: i, strClassName: z().FullWidth }),
              ],
            }),
          ],
        });
      }
      function le(e) {
        switch (e.type) {
          case J.tV.$D:
            return (0, a.jsx)("div", {
              className: z().Recommended,
              children: (0, U.we)("#SteamCurator_Recommended"),
            });
          case J.tV.qP:
            return (0, a.jsx)("div", {
              className: z().NotRecommended,
              children: (0, U.we)("#SteamCurator_NotRecommended"),
            });
          case J.tV.y8:
            return (0, a.jsx)("div", {
              className: z().Informational,
              children: (0, U.we)("#SteamCurator_Informational"),
            });
          default:
            return null;
        }
      }
      function ce(e) {
        let t = (0, f.OZ)(e.url);
        (0, s.p)(t) &&
          (t =
            (I.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            I.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const n = (0, O.wm)(e.url),
          i = (0, u.Lg)(e.url);
        return (0, a.jsxs)("div", {
          className: z().FullReviewLink,
          children: [
            (0, a.jsx)(l.Ii, {
              className: z().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
              children: (0, U.we)(
                i
                  ? "#SteamCurator_WatchFullReview"
                  : "#SteamCurator_ReadFullReview",
              ),
            }),
            (0, a.jsx)("div", {
              className: z().FullReviewDomain,
              children: (0, U.we)(
                "#SteamCurator_ReviewLinkHostnameBracketed",
                n,
              ),
            }),
          ],
        });
      }
    },
  },
]);
