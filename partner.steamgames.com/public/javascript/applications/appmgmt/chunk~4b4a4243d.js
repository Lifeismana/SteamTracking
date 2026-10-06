/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [58758],
    {
      39376: (O, B, e) => {
        "use strict";
        e.d(B, { Dn: () => E, O4: () => s, Ut: () => C, p0: () => h });
        var t = e(41735),
          u = e.n(t),
          D = e(90626),
          v = e(72604),
          M = e(3367),
          p = e(34592),
          g = e(3166),
          I = e(10349);
        class f {
          m_mapAppIDToPaymentPartners = new Map();
          m_mapAppIDToPromise = new Map();
          m_mapPackageIDToPaymentPartners = new Map();
          m_mapPackageIDToPromise = new Map();
          m_mapBundleIDToPaymentPartners = new Map();
          m_mapBundleIDToPromise = new Map();
          GetInfoForApp(o) {
            return this.m_mapAppIDToPaymentPartners.get(o);
          }
          BHasInfoForApp(o) {
            return this.m_mapAppIDToPaymentPartners.has(o);
          }
          GetInfoForPackage(o) {
            return this.m_mapPackageIDToPaymentPartners.get(o);
          }
          BHasInfoForPackage(o) {
            return this.m_mapPackageIDToPaymentPartners.has(o);
          }
          GetInfoForBundle(o) {
            return this.m_mapBundleIDToPaymentPartners.get(o);
          }
          BHasInfoForBundle(o) {
            return this.m_mapBundleIDToPaymentPartners.has(o);
          }
          GetInfoForStoreItem(o, n) {
            switch (n) {
              case M.c6.qI:
                return this.GetInfoForApp(o);
              case M.c6.RD:
                return this.GetInfoForPackage(o);
              case M.c6.xO:
                return this.GetInfoForBundle(o);
              default:
                return null;
            }
          }
          BHasInfoForStoreItem(o, n) {
            switch (n) {
              case M.c6.qI:
                return this.BHasInfoForApp(o);
              case M.c6.RD:
                return this.BHasInfoForPackage(o);
              case M.c6.xO:
                return this.BHasInfoForBundle(o);
              default:
                return !1;
            }
          }
          async LoadAppPartnerInfo(o) {
            return (
              this.m_mapAppIDToPromise.has(o) ||
                this.m_mapAppIDToPromise.set(
                  o,
                  this.InternalLoadAppPartnerInfo(o, null, null),
                ),
              this.m_mapAppIDToPromise.get(o)
            );
          }
          async LoadPackagePartnerInfo(o) {
            return (
              this.m_mapPackageIDToPromise.has(o) ||
                this.m_mapPackageIDToPromise.set(
                  o,
                  this.InternalLoadAppPartnerInfo(null, o, null),
                ),
              this.m_mapPackageIDToPromise.get(o)
            );
          }
          async LoadBundlePartnerInfo(o) {
            return (
              this.m_mapBundleIDToPromise.has(o) ||
                this.m_mapBundleIDToPromise.set(
                  o,
                  this.InternalLoadAppPartnerInfo(null, null, o),
                ),
              this.m_mapBundleIDToPromise.get(o)
            );
          }
          async LoadStoreItemPartnerInfo(o, n) {
            switch (n) {
              case M.c6.qI:
                return this.LoadAppPartnerInfo(o);
              case M.c6.RD:
                return this.LoadPackagePartnerInfo(o);
              case M.c6.xO:
                return this.LoadBundlePartnerInfo(o);
              default:
                return null;
            }
          }
          async InternalLoadAppPartnerInfo(o, n, c) {
            let _ = null;
            try {
              const x = { appid: o, packageid: n, bundleid: c },
                S =
                  g.TS.PARTNER_BASE_URL + "promotion/dailydeals/ajaxgetpartner",
                A = await u().get(S, { params: x, withCredentials: !0 });
              if (A?.status == 200 && A.data?.success == v.R)
                return o
                  ? (this.m_mapAppIDToPaymentPartners.set(
                      o,
                      A.data.partnerinfo,
                    ),
                    this.m_mapAppIDToPaymentPartners.get(o))
                  : n
                    ? (this.m_mapPackageIDToPaymentPartners.set(
                        n,
                        A.data.partnerinfo,
                      ),
                      this.m_mapPackageIDToPaymentPartners.get(n))
                    : (this.m_mapBundleIDToPaymentPartners.set(
                        c,
                        A.data.partnerinfo,
                      ),
                      this.m_mapBundleIDToPaymentPartners.get(c));
              _ = (0, p.H)(A);
            } catch (x) {
              _ = (0, p.H)(x);
            }
            return (
              console.error(
                "CPartnerPaymentStore.LoadAppPartnerInfo failed: " +
                  _?.strErrorMsg,
                _,
              ),
              null
            );
          }
          static s_Singleton;
          static Get() {
            return f.s_Singleton || (f.s_Singleton = new f()), f.s_Singleton;
          }
          constructor() {}
        }
        function s(a) {
          return E(a, M.c6.qI);
        }
        function l(a) {
          return E(a, EStoreItemType.k_EStoreItemType_Package);
        }
        function i(a) {
          return E(a, EStoreItemType.k_EStoreItemType_Bundle);
        }
        function C(a) {
          return E(a.id, (0, I.gy)(a));
        }
        function E(a, o) {
          const [n, c] = D.useState(() => f.Get().GetInfoForStoreItem(a, o));
          return (
            D.useEffect(() => {
              a
                ? !f.Get().BHasInfoForStoreItem(a, o) || n == null
                  ? f.Get().LoadStoreItemPartnerInfo(a, o).then(c)
                  : f.Get().BHasInfoForStoreItem(a, o) &&
                    n != f.Get().GetInfoForStoreItem(a, o) &&
                    c(f.Get().GetInfoForStoreItem(a, o))
                : c(null);
            }, [a, o, n]),
            n
          );
        }
        function h(a) {
          const [o, n] = (0, D.useState)(null);
          return (
            (0, D.useEffect)(() => {
              if (a?.length > 0) {
                const c = a.map((_) =>
                  f.Get().LoadStoreItemPartnerInfo(_, M.c6.qI),
                );
                Promise.all(c).then(() => {
                  const _ = new Map();
                  a.forEach((x) => {
                    f.Get().BHasInfoForApp(x) &&
                      _.set(x, f.Get().GetInfoForApp(x));
                  }),
                    n(_);
                });
              }
            }, [a]),
            o
          );
        }
      },
      33654: (O, B, e) => {
        "use strict";
        e.d(B, {
          Gx: () => M,
          _w: () => f,
          ap: () => D,
          cG: () => I,
          iN: () => p,
          pc: () => g,
          sq: () => v,
        });
        var t = e(7850),
          u = e(18210);
        function D(s) {
          if (!s || s.trim().length == 0) return null;
          try {
            return JSON.parse(s);
          } catch {
            return null;
          }
        }
        function v(s, l) {
          const i = new Set();
          return s.filter((C) => {
            const E = l(C);
            return i.has(E) ? !1 : (i.add(E), !0);
          });
        }
        function M(...s) {
          return [...new Set(s.flat())];
        }
        function p(s) {
          const { href: l, children: i } = s;
          return l
            ? (0, t.jsx)("a", { ...s, children: i })
            : (0, t.jsx)(t.Fragment, { children: i });
        }
        function g(s, l) {
          const i = {
              sText: (0, u.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable",
              ),
              sTooltip: (0, u.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
            C = {
              sText: (0, u.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive",
              ),
              sTooltip: void 0,
              bPrereleaseOrReleased: !1,
            },
            E = {
              released: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              prerelease: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              ownersonly: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              preloadonly: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              disabled: {
                sText: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled",
                ),
                sTooltip: (0, u.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
            };
          let h = i;
          return s in E ? (h = E[s]) : l || (h = C), h;
        }
        function I(s) {
          if (s.type == "seasonalsale") {
            const l = s.name.toLowerCase();
            if (l.includes("spring")) return "#dd71d4";
            if (l.includes("summer")) return "#29c6ec";
            if (l.includes("autumn")) return "#ac240c";
            if (l.includes("winter")) return "#01704f";
          }
        }
        function f(s) {
          let l = 0;
          for (let h = 0; h < s.length; h++)
            l = s.charCodeAt(h) + ((l << 5) - l);
          const i = l % 360,
            C = 50 + (l % 50),
            E = 40 + (l % 30);
          return `hsl(${i}, ${C}%, ${E}%, 0.25)`;
        }
      },
      42415: (O, B, e) => {
        "use strict";
        e.d(B, { i: () => S, q: () => j });
        var t = e(7850),
          u = e(3367),
          D = e(65946),
          v = e(90626),
          M = e(76559),
          p = e(813),
          g = e(27862),
          I = e(63854);
        function f(y, d) {
          const { data: m } = (0, g.l)((0, I.a)(), y, d);
          return m ?? null;
        }
        var s = e(7582),
          l = e(10349),
          i = e(40358),
          C = e(68094),
          E = e(36707),
          h = e(58534),
          a = e(56330),
          o = e(85599),
          n = e(18210),
          c = e(98609),
          _ = e(11243),
          x = e(71421);
        function S(y) {
          const { oEditableMessage: d } = y,
            [m] = (0, D.q3)(() => [d.GetStoreItemKey()]);
          return !m || m.item_type != "app"
            ? (0, t.jsx)("div", {
                className: a.ErrorStylesWithIcon,
                children:
                  "Error: Major Update does not support anything but targeting app",
              })
            : (0, t.jsx)(A, { oEditableMessage: d, idKey: m });
        }
        function A(y) {
          const { oEditableMessage: d, idKey: m } = y,
            [r, P] = (0, D.q3)(() => [
              d.GetUpdateEventClanAccountID(),
              d.GetUpdateEventGID(),
            ]),
            { data: L } = (0, i.J$)(
              (0, C.Jz)({ item_type: (0, l.JK)(m.item_type), id: m.id }),
            ),
            H = (0, v.useMemo)(() => M.b.InitFromClanID(r), [r]),
            F = L?.type != u.uE.Vi ? L?.related_items?.parent_appid : void 0;
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(j, {
                appid: F || m.id,
                selectedEventGID: P,
                fnSetUpdateEvent: d.SetUpdateEvent,
                label: (0, n.we)("#EventDropDown_MM_FeaturedEvent"),
                tooltip: (0, n.we)("#EventDropDown_MM_FeaturedEvent_ttip"),
                strUrlLearnMore:
                  "https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates",
              }),
              !!r &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("a", {
                      href: `${c.TS.COMMUNITY_BASE_URL}gid/${H.ConvertTo64BitString()}/partnerevents/edit/${P}`,
                      target: "_blank",
                      children: "open event for edit",
                    }),
                    "\xA0 \xA0",
                    (0, t.jsx)(x.Gq, {
                      toolTipContent:
                        "Once the event is published, go here to verify it is not awaiting moderation review. Games in the moderator review queue are not visible in the library",
                      children: (0, t.jsx)("a", {
                        href: `${c.TS.STORE_BASE_URL}events_admin/?selectedTags=vo_marketing_message&excludedTags=mod_reviewed&excludedTags=auto_migrated`,
                        target: "_blank",
                        children: "open event moderation tool",
                      }),
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("br", {}),
                  ],
                }),
            ],
          });
        }
        function j(y) {
          const {
              appid: d,
              selectedEventGID: m,
              fnSetUpdateEvent: r,
              label: P,
              tooltip: L,
              strUrlLearnMore: H,
              bFilterOutDrafts: F,
            } = y,
            U = (0, s.f1)(),
            { clanInfo: T, bLoadingClanInfo: b } = (0, p.vF)(d),
            N = f(T?.clanAccountID, U - 720 * 60 * 60),
            z = (0, v.useMemo)(
              () => (F ? N?.filter((G) => !G.hidden) : N),
              [N, F],
            ),
            X = (0, v.useMemo)(
              () =>
                z
                  ? z.map((G) => {
                      const Z = G.hidden
                        ? G.published
                          ? "#EventDropDown_HiddenPublish"
                          : "#EventDropDown_Hidden"
                        : "#EventDropDown_Visible";
                      return {
                        label: (0, n.we)(
                          Z,
                          (0, n.TW)(G.rtime32_start_time),
                          G.event_name,
                        ),
                        data: G,
                      };
                    })
                  : [],
              [z],
            ),
            V = z?.find((G) => G.gid === m);
          return !z && (b || T?.appid)
            ? (0, t.jsx)(o.t, {
                string: (0, n.we)("#Loading"),
                size: "small",
                position: "center",
              })
            : !z || z.length == 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(h.JU, {
                      children: [P, " ", (0, t.jsx)(_.o, { tooltip: L })],
                    }),
                    (0, t.jsx)("div", {
                      className: (0, E.A)(a.ErrorStylesWithIcon, "ErrorCtn"),
                      children: (0, n.oW)(
                        "#EventDropDown_NoEventFound",
                        (0, t.jsx)("a", {
                          href: `${c.TS.COMMUNITY_BASE_URL}ogg/${d}/partnerevents`,
                          target: "_blank",
                        }),
                      ),
                    }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    !!H &&
                      (0, t.jsx)("a", {
                        href: H,
                        target: "_blank",
                        style: { float: "right" },
                        children: (0, n.we)(
                          "#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink",
                        ),
                      }),
                    (0, t.jsx)(h.m, {
                      label: P,
                      tooltip: L,
                      selectedOption: V,
                      onChange: (G) => r(T.clanAccountID, G.data.gid),
                      rgOptions: X,
                    }),
                  ],
                });
        }
      },
      16119: (O, B, e) => {
        "use strict";
        e.d(B, { h: () => a });
        var t = e(7850),
          u = e(41735),
          D = e.n(u),
          v = e(90626),
          M = e(72604),
          p = e(3367),
          g = e(84676),
          I = e(58534),
          f = e(8323),
          s = e(36707),
          l = e(18210),
          i = e(3166),
          C = e(52249),
          E = e.n(C),
          h = e(85705);
        function a(n) {
          const {
              fnSetItemID: c,
              strLabel: _,
              itemType: x,
              fnFilterID: S,
              className: A,
              tooltip: j,
              autoFocus: y,
              bIncludeRetired: d,
              bShowDLCToggle: m,
              bOnlyDLC: r,
              bRunQueryOnLoad: P,
              rgParentAppIDs: L,
            } = n,
            [H, F] = v.useState(""),
            [U, T] = v.useState(!1),
            [b, N] = v.useState(!1),
            [z] = v.useState(new f.LU()),
            [X, V] = v.useState(new Array()),
            [G, Z] = v.useState(new Array()),
            [Y, q] = v.useState(new Array()),
            ee = v.createRef(),
            $ = v.createRef(),
            ne = (0, v.useCallback)(
              async (k, _e) => {
                N(!0);
                let ce = { json: 1, term: k, bexcluderetired: !d },
                  fe = `${i.TS.PARTNER_BASE_URL}appsearch/suggestapps`;
                switch (x) {
                  case p.c6.RD:
                    fe = `${i.TS.PARTNER_BASE_URL}admin/store/suggestpackage`;
                    break;
                  case p.c6.xO:
                    fe = `${i.TS.PARTNER_BASE_URL}bundles/suggestbundle`;
                    break;
                  default:
                    r
                      ? (ce.includedlc = !0)
                      : _e === !1 && (ce.includedlc = !1),
                      L &&
                        ((ce.bfilterappids = !0),
                        (ce.rgParentAppIds = JSON.stringify(L)));
                    break;
                }
                const le = await D().get(fe, {
                  params: ce,
                  withCredentials: !0,
                });
                le?.status == 200 && le.data?.success == M.R
                  ? S
                    ? (V(le.data.matches?.filter((ge) => S(ge.id)) || []),
                      Z(
                        le.data.package_matches?.filter((ge) =>
                          S(ge.packageid),
                        ) || [],
                      ),
                      q(
                        le.data.bundle_matches?.filter((ge) =>
                          S(ge.bundleid),
                        ) || [],
                      ))
                    : (V(le.data.matches || []),
                      Z(le.data.package_matches || []),
                      q(le.data.bundle_matches || []))
                  : (V([]), Z([]), q([])),
                  N(!1);
              },
              [S, x, d, r, L],
            ),
            ie = (0, v.useCallback)(
              (k) => {
                T(k), ne(ee.current?.value, k);
              },
              [ne, ee],
            ),
            ae = (0, v.useCallback)(
              (k) => {
                const _e = k?.target?.value?.toLocaleLowerCase() ?? "";
                F(_e);
                const ce = 1e3,
                  fe = $.current?.checked;
                z.Schedule(ce, () => ne(_e, fe));
              },
              [ne, z, $],
            );
          v.useEffect(() => {
            P && ne(H);
          }, []);
          let oe;
          switch (x) {
            case p.c6.RD:
              oe = (0, l.we)("#StoreAdmin_Search_Placeholder_package");
              break;
            case p.c6.xO:
              oe = (0, l.we)("#StoreAdmin_Search_Placeholder_bundle");
              break;
            default:
              oe = (0, l.we)("#StoreAdmin_Search_Placeholder");
          }
          const Ae = m && !r && x == p.c6.qI;
          return (0, t.jsxs)("div", {
            className: A,
            children: [
              (0, t.jsxs)("div", {
                className: C.AppSearchInputContainer,
                children: [
                  (0, t.jsx)(I.pd, {
                    type: "text",
                    ref: ee,
                    className: C.SearchInput,
                    label: _,
                    tooltip: j,
                    placeholder: oe,
                    onChange: ae,
                    value: H,
                    bAlwaysShowClearAction: H.length > 0,
                    focusOnMount: y,
                  }),
                  Ae &&
                    (0, t.jsx)(I.Yh, {
                      ref: $,
                      checked: U,
                      onChange: ie,
                      className: C.AppSearchDLCCheckbox,
                      label: (0, l.we)("#StoreAdmin_Search_IncludeDLC"),
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: C.Results,
                children: [
                  b &&
                    (0, t.jsx)("div", {
                      className: C.LoadingContainer,
                      children: (0, t.jsx)(h.k, { size: "small" }),
                    }),
                  X?.length > 0 &&
                    X.map((k) =>
                      (0, t.jsx)(
                        o,
                        {
                          name: k.match,
                          id: k.id,
                          is_visible: !0,
                          type: p.c6.qI,
                          fnSetItemID: () => {
                            V([]), c(k.id, k.itemid);
                          },
                        },
                        k.id,
                      ),
                    ),
                  G?.length > 0 &&
                    G.map((k) =>
                      (0, t.jsx)(
                        o,
                        {
                          name: k.name,
                          id: k.packageid,
                          type: p.c6.RD,
                          is_visible: k.is_visible,
                          fnSetItemID: () => {
                            Z([]), c(k.packageid);
                          },
                        },
                        k.packageid,
                      ),
                    ),
                  Y?.length > 0 &&
                    Y.map((k) =>
                      (0, t.jsx)(
                        o,
                        {
                          name: k.name,
                          id: k.bundleid,
                          type: p.c6.xO,
                          is_visible: k.is_visible,
                          fnSetItemID: () => {
                            q([]), c(k.bundleid);
                          },
                        },
                        k.bundleid,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function o(n) {
          const { name: c, id: _, type: x, is_visible: S, fnSetItemID: A } = n,
            [j] = (0, g.G6)(_, x, { include_assets: !0 });
          let y = "#DailyDeals_HeaderArtMissing";
          switch (x) {
            case p.c6.RD:
              y = "#DailyDeals_PackageHeaderArtMissing";
              break;
            case p.c6.xO:
              y = "#DailyDeals_BundleHeaderArtMissing";
              break;
          }
          return (0, t.jsxs)("div", {
            className: C.ResultRow,
            onClick: () => A(),
            children: [
              (0, t.jsx)("div", {
                className: (0, s.A)(C.AvatarImageCtn, "AvatarImageCtn"),
                children: (0, t.jsx)("img", {
                  src: j?.GetAssets()?.GetHeaderURL(),
                  className: C.AvatarImage,
                  alt: (0, l.we)(y),
                }),
              }),
              (0, t.jsxs)("div", {
                className: C.GameName,
                children: [
                  !S &&
                    (0, t.jsxs)("span", {
                      children: [(0, l.we)("#Sale_FeaturingHidden"), " "],
                    }),
                  c,
                  x == p.c6.RD ? ` (${_})` : "",
                ],
              }),
            ],
          });
        }
      },
      98929: (O, B, e) => {
        "use strict";
        e.d(B, { F: () => D });
        var t = e(24089),
          u = e.n(t);
        function D() {
          return t.TextEntry;
        }
      },
      7125: (O, B, e) => {
        "use strict";
        e.d(B, { k: () => a });
        var t = e(7850),
          u = e(90626),
          D = e(64238),
          v = e.n(D),
          M = e(3877),
          p = e(98929),
          g = e(60351),
          I = e(86946),
          f = e(63029),
          s = e(18938),
          l = e(24660),
          i = e(80549),
          C = e(3166),
          E = e(58017),
          h = e(64415);
        function a(o) {
          const { extracted: n, remaining: c } = (0, g.A4)(o),
            {
              value: _,
              onTextChange: x,
              onTextClear: S,
              clearable: A,
              onChange: j,
              radius: y,
              variant: d,
              size: m,
              beforeContent: r,
              afterContent: P,
              inputRef: L,
              ref: H,
              disabled: F,
              gamepadFocusable: U = !0,
              status: T,
              ...b
            } = c,
            N = (0, C.Qn)(),
            z = (oe) => {
              F || (x(oe.target.value), j && j(oe));
            },
            X = () => {
              x(""), S && S();
            },
            V = !!_ && A,
            G = V
              ? (0, t.jsx)(f.g, { onClick: X, cursor: "pointer", hitSlop: !0 })
              : P,
            Z = (0, i.f)("TextInput", d),
            Y = {
              ...n,
              variant: Z,
              size: m,
              radius: y,
              status: T,
              beforeContent: r,
              afterContent: G,
              ref: H,
              disabled: F,
            },
            q = (0, u.useRef)(null),
            ee = (oe) => {
              q.current && oe.target !== q.current && q.current.focus();
            },
            $ = U && N,
            ne = $ ? l.BA : "input",
            ae =
              $ && V && !F
                ? {
                    onSecondaryButton: X,
                    actionDescriptionMap: {
                      [h.pR.SECONDARY]: E.T.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, t.jsx)(I.j, {
            cursor: "text",
            ...Y,
            onClick: ee,
            children: (0, t.jsx)(ne, {
              ref: (0, s.Ue)(L, q),
              type: "text",
              "aria-disabled": F,
              readOnly: F,
              className: v()((0, M.T)(), (0, p.F)()),
              value: _ || "",
              onChange: z,
              ...ae,
              ...b,
            }),
          });
        }
      },
      8145: (O, B, e) => {
        "use strict";
        e.d(B, { op: () => f, CS: () => p, vE: () => s, Al: () => M });
        const t = 0,
          u = 1,
          D = 2,
          v = 3;
        class M {
          m_fnAccumulatorFactory;
          m_dictComponents;
          constructor(a, o) {
            a instanceof Map
              ? (this.m_dictComponents = a)
              : (this.m_dictComponents = new Map(Object.entries(a))),
              (this.m_fnAccumulatorFactory = o);
          }
          Parse(a, o, n = !0) {
            const c = C(a || "", n);
            return this.Parse_BuildElements(c, o);
          }
          Parse_BuildElements(a, o) {
            let n = this.m_fnAccumulatorFactory(void 0);
            const c = [],
              _ = () => (c.length < 1 ? void 0 : c[c.length - 1]),
              x = this.m_dictComponents,
              S = (d) => !!(d.tag && x.get(d.tag)?.autocloses);
            let A = !1,
              j = !0;
            const y = (d, m) => {
              let r = m.text.toLowerCase();
              if (d && d.node.tag === r && x.get(d.node.tag)) {
                const P = x.get(d.node.tag),
                  L = {
                    tagname: d.node.tag,
                    args: d.node.args,
                    rawargs: d.node.rawargs,
                  },
                  H = o(P.Constructor, L, ...n.GetElements());
                (n = d.accumulator),
                  Array.isArray(H)
                    ? H.forEach((F) => n.AppendNode(F))
                    : n.AppendNode(H),
                  (A = !!P.skipFollowingNewline),
                  (j = d.bWrapTextForCopying);
              } else if (d) {
                const P = d.accumulator;
                P.AppendText("[" + d.node.text + "]", !1),
                  n.GetElements().forEach((L) => P.AppendNode(L)),
                  P.AppendText("[/" + m.text + "]", !1),
                  (n = P),
                  (j = d.bWrapTextForCopying);
              }
            };
            for (
              a.forEach((d, m) => {
                if (d.type == u) {
                  const r = A ? d.text.replace(/^[\t\r ]*\n/g, "") : d.text;
                  n.AppendText(r, j), (A = !1);
                } else if (d.type == D) {
                  const r = x.get(d.tag);
                  if (!r) n.AppendText("[" + d.text + "]", c.length == 0);
                  else {
                    const P = _();
                    if (P !== void 0) {
                      const L = x.get(P.node.tag);
                      L &&
                        L.autocloses &&
                        d.tag === P.node.tag &&
                        y(c.pop(), P.node);
                    }
                    c.push({ accumulator: n, node: d, bWrapTextForCopying: j }),
                      (n = this.m_fnAccumulatorFactory(d)),
                      (A = !!r.skipInternalNewline),
                      (j = r.allowWrapTextForCopying ?? !1);
                  }
                } else if (d.type == v) {
                  let r = d.text.toLowerCase();
                  for (; _() && _().node.tag !== r && S(_().node); ) {
                    const P = c.pop();
                    y(P, P.node);
                  }
                  if (_()?.node.tag == r) {
                    const P = c.pop();
                    y(P, d);
                  } else n.AppendText("[/" + d.text + "]", c.length == 0);
                }
              });
              c.length > 0;
            ) {
              const d = c.pop();
              y(d, d.node);
            }
            return n.GetElements();
          }
        }
        function p(h, a, o = !1) {
          let n = "[" + h;
          a?.[""] && (n += `=${o ? "" + a[""] : g("" + a[""])}`);
          for (const c in a) c !== "" && (n += ` ${I(c)}=${g("" + a[c])}`);
          return (n += "]"), n;
        }
        function g(h) {
          return `"${h.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function I(h) {
          return h.replace(/(\\| |\])/g, "\\$1");
        }
        function f(h) {
          return `[/${h}]`;
        }
        function s(h) {
          return h.replace(/(\\|\[)/g, "\\$1");
        }
        function l(h, a, o = t) {
          const { type: n, text: c = "" } = a;
          if (n == D) {
            let _ = c.indexOf("=");
            const x = c.indexOf(" ");
            x != -1 && (_ == -1 || x < _) && (_ = x);
            let S,
              A,
              j = "";
            _ > 0
              ? ((S = c.substr(0, _).toLocaleLowerCase()),
                (j = c.substr(_)),
                (A = E(j)))
              : ((A = {}), (S = c.toLocaleLowerCase())),
              h.push({ type: n, text: c, tag: S, args: A, rawargs: j });
          } else n != t && h.push({ type: n, text: c });
          return { type: o, text: "" };
        }
        function i(h) {
          let a = "";
          return (
            h.type == v ? (a = "[/") : h.type == D && (a = "["),
            { type: u, text: a + (h.text ?? "") }
          );
        }
        function C(h, a) {
          const o = [];
          let n = { type: t, text: "" },
            c = !1,
            _ = !1,
            x = !1;
          for (let S = 0; S < h.length; S++) {
            const A = h[S];
            switch (n.type) {
              case t:
                A == "["
                  ? ((n.type = D), (_ = !0))
                  : ((n.type = u), A == "\\" && a ? (c = !c) : (n.text += A));
                break;
              case D:
              case v:
                if (A == "/" && _) (n.type = v), (n.text = ""), (_ = !1);
                else if (A == "[" && !c) (n = l(o, i(n), D)), (_ = !0);
                else if (A == "]" && !c) {
                  const j =
                      n.type == D && n.text?.toLocaleLowerCase() == "noparse",
                    y = n.type == v && n.text?.toLocaleLowerCase() == "noparse";
                  _ || (x && !y)
                    ? ((n = i(n)), (n.text += A))
                    : j
                      ? (x = !0)
                      : y && (x = !1),
                    (n = l(o, n)),
                    (_ = !1);
                } else
                  A == "\\" && a
                    ? ((n.text += A), (c = !c), (_ = !1))
                    : ((n.text += A), (c = !1), (_ = !1));
                break;
              case u:
                A == "[" && !c
                  ? ((n = l(o, n, D)), (_ = !0))
                  : A == "\\" && a
                    ? (c && (n.text += A), (c = !c))
                    : ((n.text += A), (c = !1));
                break;
            }
          }
          return (
            n.type != t &&
              (n.type == D || n.type == v
                ? o.push(i(n))
                : o.push({ type: n.type, text: n.text ?? "" })),
            o
          );
        }
        function E(h) {
          if (!h || h.length < 1) return {};
          const a = {};
          let o = "",
            n = "",
            c;
          ((A) => {
            (A[(A.PRE_NAME = 0)] = "PRE_NAME"),
              (A[(A.IN_NAME = 1)] = "IN_NAME"),
              (A[(A.POST_NAME = 2)] = "POST_NAME"),
              (A[(A.IN_VALUE = 3)] = "IN_VALUE"),
              (A[(A.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(c || (c = {}));
          let _ = 0,
            x = 0;
          h[0] == "=" && (_ = 2);
          let S = !1;
          for (x++; x < h.length; x++) {
            const A = h[x];
            let j = !0,
              y = !1;
            switch (_) {
              case 0:
                if (A == "=") return {};
                if (A == " ") continue;
                _ = 1;
                break;
              case 1:
                (A == "=" || A == " ") &&
                  !S &&
                  (A == " " ? ((_ = 0), (y = !0)) : (_ = 2), (j = !1));
                break;
              case 2:
                A == " "
                  ? ((_ = 0), (j = !1), (y = !0))
                  : A == '"'
                    ? ((_ = 4), (j = !1))
                    : (_ = 3);
                break;
              case 3:
              case 4:
                ((A == " " && _ != 4 && !S) || (A == '"' && _ == 4 && !S)) &&
                  ((_ = 0), (j = !1), (y = !0));
                break;
            }
            if (j)
              if (A == "\\" && !S) S = !0;
              else if (((S = !1), _ == 1)) o += A;
              else if (_ == 3 || _ == 4) n += A;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + _,
                );
            y && ((a[o] = n), (o = ""), (n = ""));
          }
          return _ != 0 && (a[o] = n), a;
        }
      },
      29950: (O, B, e) => {
        "use strict";
        e.d(B, { J: () => t });
        function t(u) {
          if (!u) return u;
          const D = u.trim(),
            v = D.replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return v.startsWith("javascript:") ||
            v.startsWith("data:") ||
            v.startsWith("vbscript:")
            ? ""
            : D;
        }
      },
      27862: (O, B, e) => {
        "use strict";
        e.d(B, { l: () => I });
        var t = e(35038),
          u = e(33512),
          D = e(72609),
          v = e(20117),
          M = e(92441),
          p = e(20194);
        function g(s, l, i) {
          return (0, M.j)({
            queryKey: ["eventdraftrecent", l, i],
            queryFn: async () => {
              const C = t.w.Init(u.FF);
              return (
                C.Body().set_steamid(
                  v.b2.InitFromClanID(l, D.TS.EUNIVERSE).ConvertTo64BitString(),
                ),
                i && C.Body().set_rtime_oldest_date(i),
                (await u.oH.GetDraftAndRecentPartnerEventSnippet(s, C))
                  .Body()
                  .toObject().snippets ?? []
              );
            },
            select: f,
            enabled: !!l,
          });
        }
        function I(s, l, i) {
          return (0, p.I)(g(s, l, i));
        }
        function f(s) {
          return [...s].sort((l, i) =>
            l.hidden != i.hidden
              ? l.hidden
                ? -1
                : 1
              : l.hidden && l.published != i.published
                ? l.published
                  ? -1
                  : 1
                : (i.rtime32_start_time ?? 0) - (l.rtime32_start_time ?? 0),
          );
        }
      },
      84607: (O, B, e) => {
        "use strict";
        e.d(B, { a: () => f });
        var t = e(7850),
          u = e(89667),
          D = e(72838),
          v = e(42240),
          M = e(39239),
          p = e(36707),
          g = e(76532),
          I = e.n(g);
        function f(s) {
          const {
              id: l,
              imageType: i,
              bPreferAssetWithoutOverride: C,
              strAdditionalClassName: E,
              bNoShadow: h,
            } = s,
            { storeItemAsset: a, storeItemDefaultInfo: o } = (0, u.q)(l, i, C);
          if (i === "library" || i == "vertical")
            return (0, t.jsx)(D.G, {
              id: l,
              bPreferAssetWithoutOverride: C,
              bNoShadow: h,
            });
          let n = "";
          if (
            (i === "main"
              ? (n = I().MainCapsuleImageContainer)
              : (n = I().HeaderCapsuleImageContainer),
            a === void 0 || !o)
          )
            return (0, t.jsx)("div", {
              className: (0, p.A)(n, "CapsuleImageCtn", E),
            });
          if (a == null) return null;
          let c = (0, v.N)(a, i === "header");
          return (0, t.jsx)("div", {
            className: (0, p.A)(n, "CapsuleImageCtn", E),
            children: (0, t.jsx)(M.o, {
              lazyLoad: !0,
              srcs: c,
              className: (0, p.A)(I().CapsuleImage),
              alt: o.name,
            }),
          });
        }
      },
      42240: (O, B, e) => {
        "use strict";
        e.d(B, { M: () => D, N: () => u });
        var t = e(21721);
        function u(M, p) {
          let g = [];
          return M && v(g, M, p), g.filter((I) => !!I);
        }
        function D(M, p) {
          let g = (0, t.b0)(M, "hero_capsule"),
            I = (0, t.b0)(M, "library_capsule");
          return { strStoreVerticalURL: g, strLibraryVerticalURL: I };
        }
        function v(M, p, g) {
          const I = (0, t.b0)(p, "header_2x") ?? (0, t.b0)(p, "header"),
            f = (0, t.b0)(p, "main_capsule_2x") ?? (0, t.b0)(p, "main_capsule");
          g ? M.push(I, f) : M.push(f, I);
        }
      },
      86298: (O, B, e) => {
        "use strict";
        e.d(B, { S: () => I });
        var t = e(39905),
          u = e(47875),
          D = e(83482),
          v = e(71742),
          M = e(82734),
          p = e(53113),
          g = e(98735);
        function I(f, s, l, i, C, E) {
          if (!l) return;
          if (!(0, g.nz)(f.item_type)) {
            (0, v.wT)(
              !1,
              "StoreItemWidgetSalePageAction: unexpected type: " + f.item_type,
            );
            return;
          }
          const a = (0, D.wJ)(`${(0, u._)(f, i)}${C ? `?${C}` : ""}`, s);
          return {
            onClick: (n) => {
              let c = (0, M.uX)(n) || window;
              E
                ? E(n)
                : a.startsWith("steam://") || (c.location.href = (0, p.NT)(a));
            },
            onOKActionDescription: t.Z.Localize("#Sale_Gamepad_Action_Select"),
          };
        }
      },
      72838: (O, B, e) => {
        "use strict";
        e.d(B, { G: () => C });
        var t = e(7850),
          u = e(72609),
          D = e(3367),
          v = e(89667),
          M = e(90626),
          p = e(76532),
          g = e.n(p),
          I = e(39239),
          f = e(36707),
          s = e(42240),
          l = e(83164),
          i = e.n(l);
        function C(E) {
          const {
              id: h,
              bPreferLibrary: a,
              bPreferAssetWithoutOverride: o,
              bNoShadow: n,
            } = E,
            c = n ? g().NoShadow : "",
            { storeItemDefaultInfo: _, storeItemAsset: x } = (0, v.q)(
              h,
              "vertical",
              o,
            ),
            [S, A] = M.useState(0);
          if (!_ || !x)
            return (0, t.jsx)("div", {
              className: g().HeroCapsuleImageContainer,
            });
          const { strStoreVerticalURL: j, strLibraryVerticalURL: y } = (0, s.M)(
            x,
            _,
          );
          if (j && (!a || !y))
            return (0, t.jsxs)("div", {
              className: (0, f.A)(
                g().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
              children: [
                (0, t.jsx)("img", {
                  src: j,
                  className: g().CapsuleImage,
                  alt: _.name,
                }),
                _.type == D.uE._i &&
                  (0, t.jsx)("img", {
                    className: i().CornerSash,
                    src: `${u.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                    alt: "DLC",
                  }),
              ],
            });
          if (y)
            return (0, t.jsxs)("div", {
              className: (0, f.A)(
                g().LibraryFallbackAssetImageContainer,
                g().VerticalCapsule,
                a ? g().ForceLibrarySizing : "",
                c,
              ),
              children: [
                (0, t.jsx)("div", {
                  className: g().FallbackBackground,
                  style: { backgroundImage: `url(${y})` },
                }),
                (0, t.jsx)("img", {
                  src: y,
                  className: g().CapsuleImage,
                  alt: _.name,
                }),
              ],
            });
          const d = (0, s.N)(x, !0),
            m = d.length - 1,
            r = (P) => {
              const L = d.indexOf(P);
              L >= m && L < d.length - 1 && A(L + 1);
            };
          if (S < d.length) {
            const P = d[S];
            return (0, t.jsxs)("div", {
              className: (0, f.A)(g().LibraryFallbackAssetImageContainer, c),
              children: [
                (0, t.jsx)("div", {
                  className: g().FallbackBackground,
                  style: { backgroundImage: `url(${P})` },
                }),
                (0, t.jsx)(I.o, {
                  lazyLoad: !0,
                  srcs: d,
                  className: g().CapsuleImage,
                  alt: _.name,
                  onImageError: r,
                }),
              ],
            });
          }
          return (0, t.jsx)("div", {
            className: g().HeroCapsuleImageContainer,
          });
        }
      },
      95414: (O, B, e) => {
        "use strict";
        e.d(B, { j: () => i, u: () => C });
        var t = e(7850),
          u = e(90626),
          D = e(24660),
          v = e(83482),
          M = e(72865),
          p = e(77200),
          g = e(53113),
          I = e(68094),
          f = e(72609),
          s = e(3166);
        function l(E) {
          if (E) {
            if ("appid" in E) return "app";
            if ("bundleid" in E) return "bundle";
            if ("packageid" in E) return "sub";
          }
        }
        function i(E) {
          const {
              id: h,
              hoverClassName: a,
              fnGetIDOverride: o,
              fnHoverState: n,
              disableScreenshots: c,
              children: _,
            } = E,
            x = u.useRef(null),
            S = u.useCallback(
              (j) => {
                const y = l(h);
                y &&
                  (n && n(!0),
                  window.GameHover &&
                    (x.current &&
                      c &&
                      (x.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(o ? o() : x.current, j, "global_hover", {
                      type: y,
                      id: (0, I.G$)(h).id,
                      v6: 1,
                    })));
              },
              [n, o, c, h],
            ),
            A = u.useCallback(
              (j) => {
                l(h) &&
                  (n && j.relatedTarget && n(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      o ? o() : x.current,
                      j,
                      "global_hover",
                    ));
              },
              [h, n, o],
            );
          return (0, t.jsx)("div", {
            ref: x,
            className: a,
            onMouseEnter: S,
            onMouseLeave: A,
            onFocus: S,
            onBlur: A,
            children: _,
          });
        }
        function C(E) {
          const {
              id: h,
              strExtraParams: a,
              fnOnClickOverride: o,
              strOverrideURL: n,
            } = E,
            c = (0, M.n9)(),
            _ = (0, p.w)(),
            x = (0, g.NT)(
              n ||
                (h && "creatorid" in h
                  ? (0, v.It)(
                      `${f.TS.STORE_BASE_URL}curator/${((0, I.G$))(h).id}${a ? `?${a}` : ""}`,
                      c,
                      _,
                    )
                  : (0, v.It)(
                      `${f.TS.STORE_BASE_URL}${l(h)}/${((0, I.G$))(h).id}${a ? `?${a}` : ""}`,
                      c,
                      _,
                    )),
            );
          return (0, t.jsx)(i, {
            ...E,
            children: (0, t.jsx)(D.Ii, {
              className: E.className,
              href: o ? void 0 : x,
              target: f.TS.IN_CLIENT || o ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: o,
              children: E.children,
            }),
          });
        }
      },
      88743: (O, B, e) => {
        "use strict";
        e.d(B, { K7: () => p, dE: () => M, rt: () => D, zl: () => v });
        var t = e(90626),
          u = e(3367);
        function D(s) {
          return (0, t.useMemo)(() => g(s), [s?.id, s?.type]);
        }
        function v(s, l) {
          return (0, t.useMemo)(() => f(s, l), [s, l]);
        }
        function M(s, l) {
          return (0, t.useMemo)(() => I(s, l), [s, l]);
        }
        function p(s, l) {
          let i = "app";
          return (
            l == u.c6.xO ? (i = "bundle") : l == u.c6.RD && (i = "sub"),
            (0, t.useMemo)(() => I(s, i), [s, i])
          );
        }
        function g(s) {
          if (!(!s || !s.id)) {
            if (!s.type) return { appid: s.id };
            switch (s.type) {
              case "sub":
                return { packageid: s.id };
              case "bundle":
                return { bundleid: s.id };
              default:
                return { appid: s.id };
            }
          }
        }
        function I(s, l) {
          switch (l) {
            case "sub":
              return { packageid: s };
            case "bundle":
              return { bundleid: s };
            default:
              return { appid: s };
          }
        }
        function f(s, l) {
          switch (l) {
            case "sub":
              return { packageid: s };
            case "bundle":
              return { bundleid: s };
            default:
              return { appid: s };
          }
        }
      },
      23627: (O, B, e) => {
        "use strict";
        e.d(B, { K: () => M });
        var t = e(7850),
          u = e(18210),
          D = e(66901),
          v = e.n(D);
        function M() {
          return (0, t.jsx)("div", {
            className: D.bordered_live_stream_icon,
            children: (0, u.we)("#home_page_live_broadcast"),
          });
        }
      },
      46727: (O, B, e) => {
        "use strict";
        e.d(B, { V: () => y });
        var t = e(7850),
          u = e(72609),
          D = e(39905),
          v = e(20194),
          M = e(75233),
          p = e(67705),
          g = e(34032);
        async function I() {
          let r = (0, p.Fd)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, g.h7)(r)) {
            const P = new Set();
            return (
              r.filtered.forEach((L) => {
                L.appid && P.add(L.appid);
              }),
              Array.from(P)
            );
          }
          return [];
        }
        var f = e(14616),
          s = e(40358),
          l = e(90626);
        function i() {
          return (0, v.I)(h());
        }
        function C(r) {
          const { data: P } = i(),
            L = useStoreItemKeyFromAppID(r),
            { data: H } = useStoreItemDefaultInfo(L);
          return !!(
            P &&
            (P.has(r) ||
              (H?.related_items?.parent_appid &&
                P.has(H.related_items.parent_appid)))
          );
        }
        function E(r) {
          const { data: P } = i(),
            [L, H] = (0, l.useState)(!1),
            F = (0, M.jE)(),
            U = (0, f.eG)();
          return (
            (0, l.useEffect)(() => {
              if (!r || r.length == 0 || !P) return H(!1);
              (async () => {
                const b = await Promise.all(
                  r
                    .filter((N) => !!N)
                    .map((N) => F.fetchQuery((0, s.us)(U, { appid: N }))),
                );
                H(
                  b.some(
                    (N) =>
                      (N && N.appid && P.has(N.appid)) ||
                      (N?.related_items?.parent_appid &&
                        P.has(N.related_items.parent_appid)),
                  ),
                );
              })();
            }, [r, U, F, P]),
            L
          );
        }
        function h() {
          return {
            queryKey: a(),
            queryFn: async () => {
              const r = await I();
              return new Set(r);
            },
          };
        }
        function a() {
          return ["BroadcastApps"];
        }
        var o = e(24179),
          n = e(54528);
        const c =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
        var _ = e(76532),
          x = e.n(_),
          S = e(36118),
          A = e(36707),
          j = e(23627);
        function y(r) {
          const { appids: P, hide_status_banners: L, show_early_access: H } = r,
            { data: F } = (0, o.$Y)(),
            { data: U } = (0, n.F0)(),
            T = P.length > 0 && P.every((G) => F && F.has(G)),
            b = P.length > 0 && P.every((G) => U && U.has(G)),
            N = E(P),
            z = T && !L,
            X = b && !L,
            V = !L && H;
          return (0, t.jsxs)("div", {
            className: (0, A.A)(x().CapsuleDecorators, "CapsuleDecorators"),
            children: [
              z &&
                (0, t.jsxs)("span", {
                  className: (0, A.A)(x().Banner, x().Blue),
                  children: [
                    (0, t.jsx)("img", {
                      src: (0, u.YJ)(c),
                      className: x().LinesImg,
                      alt: D.Z.Localize("#Sale_InLibrary"),
                    }),
                    D.Z.Localize("#Sale_InLibrary"),
                  ],
                }),
              X &&
                (0, t.jsxs)("span", {
                  className: x().Banner,
                  children: [
                    (0, t.jsx)(S.qnF, { className: x().LinesImg }),
                    D.Z.Localize("#Sale_OnWishlist"),
                  ],
                }),
              V && !z && !X && (0, t.jsx)(d, { appids: P }),
              N && (0, t.jsx)(j.K, {}),
            ],
          });
        }
        function d(r) {
          const { appids: P } = r;
          return m(P)
            ? (0, t.jsx)("span", {
                className: (0, A.A)(x().Banner, x().EarlyAccessGradient),
                children: D.Z.Localize("#Sale_EarlyAccess"),
              })
            : null;
        }
        function m(r) {
          const [P, L] = (0, l.useState)(!1),
            H = (0, M.jE)(),
            F = (0, f.eG)();
          return (
            (0, l.useEffect)(() => {
              if (!r || r.length == 0) return L(!1);
              (async () => {
                const T = await Promise.all(
                  r.map((b) => H.fetchQuery((0, s.us)(F, { appid: b }))),
                );
                L(T.some((b) => b && b.is_early_access));
              })();
            }, [r, F, H]),
            P
          );
        }
      },
      64774: (O, B, e) => {
        "use strict";
        e.d(B, { _: () => x, r: () => _ });
        var t = e(7850),
          u = e(3367),
          D = e(29522),
          v = e(40358),
          M = e(72865),
          p = e(24179),
          g = e(54528),
          I = e(96362),
          f = e(90626),
          s = e(83482),
          l = e(76532),
          i = e.n(l),
          C = e(85705),
          E = e(36118),
          h = e(71421),
          a = e(36707),
          o = e(18210),
          n = e(3166),
          c = e(89926);
        function _(j) {
          const { appid: y, className: d, bTextMode: m } = j,
            r = (0, D.$5)(y),
            { data: P } = (0, v.J$)(r),
            { data: L } = (0, v.by)(r);
          return (0, t.jsx)(x, {
            appid: y,
            bIsFree: !!P?.is_free,
            bIsComingSoon: !!L?.is_coming_soon,
            bTextMode: m,
            className: d,
          });
        }
        function x(j) {
          const [y, d] = f.useState(!1),
            m = (0, M.n9)(),
            {
              appid: r,
              bIsFree: P,
              bIsComingSoon: L,
              className: H,
              bTextMode: F,
            } = j,
            U = (0, D.$5)(r),
            { bIsOwned: T } = (0, p.ZJ)(U),
            b = (0, g.bB)(r),
            { mutateAsync: N } = (0, I.s)(r, !b, (0, s.L3)(m)),
            { elDialogElement: z, fnShowLogonDialog: X } = (0, c.l)(),
            V = async () => {
              if (!n.iA.logged_in) {
                X();
                return;
              }
              y || (d(!0), await N(), d(!1));
            };
          if (T || (!L && P))
            return P ? (0, t.jsx)(S, { possibleDemoAppID: r }) : null;
          let G = null;
          return (
            y && !F
              ? (G = (0, t.jsx)(C.k, { size: 18 }))
              : b
                ? b &&
                  (G = F ? (0, o.we)("#OnWishlist") : (0, t.jsx)(E.qnF, {}))
                : (G = F
                    ? (0, o.we)("#wishlist_add_to_wishlist")
                    : (0, t.jsx)(E.T4m, {})),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(h.he, {
                  toolTipContent: (0, o.we)("#AddToWishlist_ttip"),
                  children: (0, t.jsx)("div", {
                    className: (0, a.A)(i().WishList, H),
                    onClick: V,
                    children: G,
                  }),
                }),
                z,
              ],
            })
          );
        }
        function S(j) {
          const { possibleDemoAppID: y, className: d } = j,
            m = (0, D.$5)(y),
            { data: r } = (0, v.J$)(m);
          return r &&
            (r.type == u.uE.ue || r.type == u.uE.Vi) &&
            r.related_items?.parent_appid
            ? (0, t.jsx)(A, {
                parentAppID: r.related_items?.parent_appid,
                className: d,
              })
            : null;
        }
        function A(j) {
          const { parentAppID: y, className: d } = j,
            m = (0, D.$5)(y),
            { data: r } = (0, v.J$)(m),
            { data: P } = (0, v.by)(m);
          return !r || !P
            ? null
            : (0, t.jsx)(x, {
                appid: y,
                bIsComingSoon: !!P.is_coming_soon,
                bIsFree: !!r.is_free,
                className: d,
              });
        }
      },
      89667: (O, B, e) => {
        "use strict";
        e.d(B, { q: () => v });
        var t = e(71742),
          u = e(3367),
          D = e(40358);
        function v(p, g, I = !1) {
          const { data: f } = (0, D.J$)(p),
            { data: s } = (0, D.lv)(p, I);
          let l;
          f &&
            f.included_appids?.length == 1 &&
            !M(s, g) &&
            f.item_type &&
            [u.c6.RD, u.c6.xO].includes(f.item_type) &&
            (l = { appid: f.included_appids[0] });
          const { data: i } = (0, D.J$)(l),
            { data: C } = (0, D.lv)(l, I),
            E = i?.visible ? i : f;
          return {
            storeItemAsset: i?.visible ? C : s,
            storeItemDefaultInfo: E,
          };
        }
        function M(p, g) {
          if (!p) return !1;
          switch (g) {
            case "header":
              return !!p.header;
            case "main":
              return !!p.main_capsule;
            case "vertical":
            case "library":
              return !!p.hero_capsule || !!p.library_capsule;
            default:
              return (0, t.z_)(g, `Unhandled imageType: ${g}`), !1;
          }
        }
      },
      61024: (O, B, e) => {
        "use strict";
        e.d(B, { C: () => s, M: () => l });
        var t = e(7850),
          u = e(19298),
          D = e(64238),
          v = e.n(D),
          M = e(88376),
          p = e.n(M),
          g = e(76962),
          I = e(66243),
          f = e(36118);
        function s(i) {
          const {
            strTitle: C,
            strDescription: E,
            className: h,
            children: a,
            navID: o,
            ...n
          } = i;
          return (0, t.jsxs)(g.y, {
            className: v()(h, p().ModalConfirmDialog),
            onClose: n.onClose,
            navID: o,
            children: [
              C &&
                (0, t.jsxs)(u.Z, {
                  className: p().Header,
                  children: [
                    (0, t.jsx)("h2", { children: C }),
                    (0, t.jsx)("button", {
                      onClick: n.onClose,
                      children: (0, t.jsx)(f.tmm, {}),
                    }),
                  ],
                }),
              E &&
                (0, t.jsx)(u.Z, {
                  className: p().Description,
                  children: (0, t.jsx)("div", { children: E }),
                }),
              a,
              (0, t.jsx)(l, { ...n }),
            ],
          });
        }
        function l(i) {
          const { strOKLabel: C, strCancelLabel: E, onOK: h, onClose: a } = i;
          return (0, t.jsxs)(u.Z, {
            className: p().Buttons,
            children: [
              !!C && (0, t.jsx)(I.n9, { onClick: h ?? a, children: C }),
              !!E && (0, t.jsx)(I.Oh, { onClick: a, children: E }),
            ],
          });
        }
      },
      76962: (O, B, e) => {
        "use strict";
        e.d(B, { y: () => l });
        var t = e(7850),
          u = e(24660),
          D = e(38566),
          v = e(54130),
          M = e(64238),
          p = e.n(M),
          g = e(90626),
          I = e(3166),
          f = e(88208),
          s = e.n(f);
        const l = Object.assign(i, { Root: C, Content: h });
        function i(a) {
          const { children: o, className: n, ...c } = a;
          return (0, t.jsx)(l.Root, {
            ...c,
            children: (0, t.jsx)(l.Content, { className: n, children: o }),
          });
        }
        function C(a) {
          const {
              onClose: o,
              className: n,
              navID: c,
              children: _,
              allowScrollBehind: x,
              ...S
            } = a,
            [A, j] = g.useState(!1),
            y = g.useCallback((m) => {
              m &&
                (m.showModal(),
                m.ownerDocument.defaultView &&
                  j(
                    m.ownerDocument.body.scrollHeight >
                      m.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            d = g.useCallback(
              (m) => {
                m.target == m.currentTarget && o("backdropclick");
              },
              [o],
            );
          return (0, t.jsx)(E, {
            navID: c ?? "ModalDialog",
            onClose: o,
            children: (0, t.jsx)("dialog", {
              ref: y,
              className: p()(f.ModalDialog, !x && A && f.PreventScroll, n),
              onClose: () => o("onclose"),
              onClick: d,
              ...S,
              children: (0, t.jsx)(v.q, { children: _ }),
            }),
          });
        }
        function E(a) {
          const { navID: o, onClose: n, children: c } = a,
            _ = g.useCallback(() => n("cancelbutton"), [n]),
            x = g.useRef(void 0);
          return (
            (0, u.O7)(x, !0, !0),
            (0, I.Qn)()
              ? (0, t.jsx)(D.D6, {
                  navID: o ?? "ModalDialog",
                  onCancelButton: _,
                  modal: !0,
                  navTreeRef: x,
                  children: c,
                })
              : (0, t.jsx)(t.Fragment, { children: c })
          );
        }
        function h(a) {
          const { className: o, children: n } = a;
          return (0, t.jsx)("div", {
            className: p()(f.ModalDialogContent, o),
            onClick: (c) => c.stopPropagation(),
            children: n,
          });
        }
      },
      60399: (O, B, e) => {
        "use strict";
        e.d(B, { XC: () => i });
        var t = e(7850),
          u = e(90626),
          D = e(36118),
          v = e(36707),
          M = e(71568);
        function p(h, a, o, n) {
          u.useEffect(() => {
            const c = (_) => {
              _.key === h &&
                (a(_), o && _.preventDefault(), n && _.stopPropagation());
            };
            return (
              document.addEventListener("keydown", c),
              () => document.removeEventListener("keydown", c)
            );
          }, [h, a, o, n]);
        }
        function g(h, a) {
          const o = useBrowserContext();
          React.useEffect(() => {
            const n = (c) => {
              c.key === h && a(c);
            };
            return (
              o.ownerWindow.addEventListener("keydown", n),
              () => o.ownerWindow.removeEventListener("keydown", n)
            );
          }, [h, a, o.ownerWindow]);
        }
        var I = e(2801),
          f = e(75358),
          s = e.n(f),
          l = e(18210);
        function i() {
          const [h, a] = u.useState(void 0),
            o = u.useCallback(() => a(void 0), []),
            n = (0, t.jsx)(I.EN, {
              active: h !== void 0,
              children: (0, t.jsx)(C, { closeModal: o, rgImageURL: h }),
            });
          return [a, n];
        }
        function C(h) {
          const { closeModal: a, rgImageURL: o } = h,
            [n, c] = u.useState(0),
            _ = o?.length ?? 0,
            x = u.useCallback(() => {
              n == 0 ? c(_ - 1) : c(n - 1);
            }, [n, _]),
            S = u.useCallback(() => {
              o && n + 1 >= _ ? c(0) : c(n + 1);
            }, [n, o, _]);
          return (0, t.jsxs)(I.eV, {
            title: (0, l.we)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: a,
            bHideCloseIcon: !0,
            modalClassName: s().PopupScreenshotModal,
            children: [
              (0, t.jsx)(E, {
                index: n,
                numElements: o?.length || 0,
                fnForward: S,
                fnBackwards: x,
                fnClose: a,
                bCircular: !0,
              }),
              (0, t.jsx)("div", {
                className: s().PopupScreenshotContainer,
                children: (0, t.jsx)("img", {
                  className: s().PopupScreenshot,
                  src: o?.[n],
                  alt: "",
                }),
              }),
            ],
          });
        }
        function E(h) {
          const {
            index: a,
            numElements: o,
            fnForward: n,
            fnBackwards: c,
            fnClose: _,
            bCircular: x,
          } = h;
          p("ArrowLeft", () => c?.(), !0, !0),
            p("Left", () => c?.(), !0, !0),
            p("ArrowRight", () => n?.(), !0, !0),
            p("Right", () => n?.(), !0, !0),
            p("Escape", () => _ && _(), !0, !0),
            p("Esc", () => _ && _(), !0, !0);
          let S = o > 1;
          return (0, t.jsxs)("div", {
            className: s().ButtonCtn,
            children: [
              S &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      className: (0, v.A)(
                        s().ButtonIcon,
                        a === 0 && !x ? s().Disabled : null,
                      ),
                      onClick: c,
                      "aria-label": (0, l.we)("#Carousel_Prev"),
                      children: (0, t.jsx)(D.V5W, { angle: 270 }),
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      className: (0, v.A)(
                        s().ButtonIcon,
                        a === o - 1 && !x ? s().Disabled : null,
                      ),
                      onClick: n,
                      "aria-label": (0, l.we)("#Carousel_Next"),
                      children: (0, t.jsx)(D.V5W, { angle: 90 }),
                    }),
                  ],
                }),
              (0, t.jsx)("button", {
                type: "button",
                className: s().ButtonIcon,
                onClick: _,
                "aria-label": (0, l.we)("#Button_Close"),
                children: (0, t.jsx)(D.X, {}),
              }),
            ],
          });
        }
      },
      34032: (O, B, e) => {
        "use strict";
        e.d(B, { PH: () => l, TT: () => M, h7: () => i, mY: () => s });
        var t = e(14947),
          u = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          v = (C, E, h, a) => {
            for (
              var o = a > 1 ? void 0 : a ? D(E, h) : E, n = C.length - 1, c;
              n >= 0;
              n--
            )
              (c = C[n]) && (o = (a ? c(E, h, o) : c(o)) || o);
            return a && o && u(E, h, o), o;
          };
        class M {
          constructor() {
            (0, t.Gn)(this);
          }
          accountid;
          steamid;
          appid;
          hub_popular;
          popular;
          relay_broadcast_id;
          rowversion;
          thumbnail_http_address;
          nAppIDVOD;
          title = void 0;
          viewer_count = void 0;
          whitelist_rank;
          gamedata_subtitle = void 0;
          store_title;
          left_panel;
          right_panel;
          snr;
          broadcast_chat_visibility;
          default_selection_priority = 0;
          current_selection_priority = 0;
        }
        v([t.sH], M.prototype, "title", 2),
          v([t.sH], M.prototype, "viewer_count", 2),
          v([t.sH], M.prototype, "gamedata_subtitle", 2),
          v([t.sH], M.prototype, "current_selection_priority", 2);
        const p = "primary",
          g = "featured",
          I = "default_featured",
          f = "general";
        var s = ((C) => (
          (C[(C.k_ePrimary = 3)] = "k_ePrimary"),
          (C[(C.k_eFeatured = 2)] = "k_eFeatured"),
          (C[(C.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (C[(C.k_eGeneral = 0)] = "k_eGeneral"),
          C
        ))(s || {});
        function l(C) {
          switch (C) {
            case p:
              return 3;
            case g:
              return 2;
            case I:
              return 1;
            case f:
            default:
              return 0;
          }
        }
        function i(C) {
          const E = C;
          return E &&
            typeof E.success == "number" &&
            E.filtered &&
            Array.isArray(E.filtered) &&
            E.broadcast_chat_visibility
            ? E.filtered.length == 0
              ? !0
              : typeof E.filtered[0].accountid == "string"
            : !1;
        }
      },
      78699: (O, B, e) => {
        "use strict";
        e.d(B, {
          Uh: () => M,
          VX: () => u,
          mn: () => g,
          nU: () => v,
          pV: () => D,
        });
        var t = e(99412);
        function u(s, l) {
          const i = (0, t.LgB)(l);
          return s ? s[i] : "";
        }
        function D(s, l, i) {
          const C = (0, t.LgB)(l);
          return s[C] != i ? ((s[C] = i), !0) : !1;
        }
        function v(s, l) {
          const i = (0, t.LgB)(l);
          return !!s?.[i];
        }
        function M(s) {
          if (!s) return 0;
          let l = 0;
          for (let i = t.Bhc; i < t.bP9; ++i) {
            const C = (0, t.LgB)(i);
            s[C] && (l += 1);
          }
          return l;
        }
        function p(s) {
          const l = new Map();
          for (let i = k_ELanguage_English; i < k_ELanguage_MAX; ++i) {
            const C = ELanguagePchLanguage(i);
            s[C] && l.set(C, s[C]);
          }
          return l;
        }
        function g(s) {
          const l = new Array();
          for (let i = t.Bhc; i < t.bP9; ++i) {
            const C = (0, t.LgB)(i);
            s[C] && l.push([C, s[C]]);
          }
          return l;
        }
        function I(s) {
          const l = InitLocalizableString([]);
          if (!s) return l;
          for (let i = k_ELanguage_English; i < k_ELanguage_MAX; ++i)
            v(s, i) && (l[i] = u(s, i));
          return l;
        }
        function f(s) {
          const l = {};
          if (!s) return l;
          for (
            let i = k_ELanguage_English;
            i < k_ELanguage_MAX && i < s.length;
            ++i
          )
            s[i] && D(l, i, s[i]);
          return l;
        }
      },
      813: (O, B, e) => {
        "use strict";
        e.d(B, { TB: () => _, ac: () => n, vF: () => A });
        var t = e(40497),
          u = e(75233),
          D = e(14947),
          v = e(90626),
          M = e(76559),
          p = e(71742),
          g = e(3166),
          I = e(16512),
          f = e(33512),
          s = e(55483),
          l = e(77291);
        const i = new WeakSet();
        function C(m = t.L) {
          if (typeof window > "u" || typeof document > "u" || i.has(m)) return;
          const r = (0, g.Fd)("groupvanityinfo", "application_config");
          (r === void 0 && document.readyState != "complete") ||
            (i.add(m), E(r) && (0, s.aA)(m, r));
        }
        function E(m) {
          const r = m;
          return r &&
            Array.isArray(r) &&
            r.length > 0 &&
            typeof r[0] == "object"
            ? typeof r[0].clanAccountID == "number" &&
                (typeof r[0].appid == "number" ||
                  typeof r[0].vanity_url == "string")
            : !1;
        }
        function h(m) {
          return typeof m == "string" ? parseInt(m) : m;
        }
        function a(m) {
          return typeof m == "string" ? Number.parseInt(m) : m;
        }
        class o {
          m_queryClient = t.L;
          m_boxCacheVersion = D.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            C(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((r) => {
                  (r?.type != "added" &&
                    r?.type != "updated" &&
                    r?.type != "removed") ||
                    ((0, s.yT)(r.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, D.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(r) {
            this.LazyInit(), E(r) && (0, s.aA)(this.m_queryClient, r);
          }
          BHasClanInfoLoaded(r) {
            return (
              (0, p.wT)(
                r.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, p.wT)(
                r.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(r.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(r) {
            return !!(0, s.Gt)(a(r), this.ReadCache());
          }
          RegisterClanData(r) {
            this.LazyInit(), (0, s.aA)(this.m_queryClient, r);
          }
          async LoadOGGClanInfoForAppID(r) {
            return (
              this.LazyInit(),
              (r = h(r)),
              (0, p.wT)(
                r != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              r == 0 ? null : (0, s.AB)(r, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(r) {
            return this.LazyInit(), (0, s.Rc)(r, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(r) {
            return this.LazyInit(), (0, s.Rc)(r, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(r) {
            return this.LoadClanInfoForClanAccountID(r.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(r) {
            return this.LazyInit(), (0, s.MR)(a(r), this.m_queryClient);
          }
          GetOGGClanInfo(r) {
            const P = this.ReadCache();
            return typeof r == "string" ? (0, s.fy)(r, P) : (0, s.ko)(r, P);
          }
          GetClanSteamIDForAppID(r) {
            const P = (0, s.ko)(h(r), this.ReadCache());
            return P ? M.b.InitFromClanID(P.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(r) {
            return (0, s.ko)(h(r), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(r) {
            return (0, s.Gt)(r.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(r) {
            return this.BHasClanInfoLoadedByAccountID(r);
          }
          GetClanMemberCount(r) {
            return (0, s.ko)(h(r), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(r) {
            return (
              (0, p.wT)(
                !!r,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, s.Gt)(a(r), this.ReadCache())
            );
          }
          GetCreatorStoreURL(r) {
            let P = I.pF.GetCreatorHome(r);
            if (P) return P.GetCreatorHomeURL("developer");
            let L = this.GetClanInfoByClanAccountID(r.GetAccountID());
            return (
              g.TS.COMMUNITY_BASE_URL +
              (L.vanity_url
                ? "groups/" + L.vanity_url
                : "gid/" + r.ConvertTo64BitString())
            );
          }
        }
        const n = new o();
        (0, l.V)("g_ClanStore", n);
        function c() {
          const m = (0, u.jE)();
          return C(m), m;
        }
        function _(m) {
          c();
          const { data: r, isPending: P } = (0, s.TB)(m ? a(m) : void 0);
          return [!!m && P, r ?? void 0];
        }
        function x(m) {
          const r = c();
          useEffect(() => {
            m &&
              FetchClanInfoByAccountID(a(m), r).catch((P) =>
                console.error(`Failed to hint load clan info ${m}`, P),
              );
          }, [m, r]);
        }
        function S(m) {
          return c(), useClanInfoByVanityQuery(m).data ?? null;
        }
        function A(m) {
          c();
          const r = m ? h(m) : void 0,
            { data: P, isPending: L } = (0, s.vF)(r);
          return { bLoadingClanInfo: !!r && L, clanInfo: P ?? null };
        }
        function j(m, r) {
          if (m.BIsOGGEvent()) return { bVisible: !1 };
          if (m.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (m.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            m.jsondata.clone_from_event_gid &&
            m.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (m.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const L = g_CreatorHomeStore.GetCreatorHome(m.clanSteamID);
          return L &&
            L.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : r
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function y(m, r) {
          return m.BIsOGGEvent()
            ? m.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : r
                  ? m.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function d(m) {
          return m.BIsOGGEvent()
            ? { bVisible: !1 }
            : m.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : m.BHasSaleEnabled()
                ? { bVisible: !0 }
                : m.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      75806: (O, B, e) => {
        "use strict";
        e.d(B, { z: () => _ });
        var t = e(7850),
          u = e(41735),
          D = e.n(u),
          v = e(90626),
          M = e(99412),
          p = e(25279),
          g = e(6658),
          I = e(50109),
          f = e(45737),
          s = e.n(f),
          l = e(36118),
          i = e(18210),
          C = e(8743),
          E = e.n(C),
          h = e(85599),
          a = e(11952);
        function o(y) {
          const { rgAssetURL: d, rgLang: m, bIsImage: r } = y,
            [P, L] = (0, v.useState)([]);
          if (
            ((0, v.useEffect)(() => {
              let F = !1;
              const U = r ? n : c;
              return (
                Promise.all(d.map((T) => U(T))).then((T) => {
                  F || L(T);
                }),
                () => {
                  F = !0;
                }
              );
            }, [d, r]),
            !P)
          )
            return (0, t.jsx)(h.t, {
              size: "small",
              string: "Checking Assets...",
            });
          const H = P.map((F, U) => (F ? -1 : U)).filter((F) => F !== -1);
          return H.length === 0
            ? (0, t.jsx)(a._, {
                bDone: !0,
                name: "Uploaded assets verified",
                tooltip:
                  "In the background we verified the assets by downloading from the CDN to verify they are present",
              })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(a._, {
                    bDone: !1,
                    name: `${H.length} Asset(s) uploaded failed to fetch`,
                  }),
                  H.map((F) => ({ url: d[F], lang: m[F] })).map((F) =>
                    (0, t.jsx)(
                      a._,
                      {
                        bDone: !1,
                        name: `${(0, M.LgB)(F.lang)} - Not found`,
                        tooltip: `${F.url} not downloadable from the CDN`,
                      },
                      F.url,
                    ),
                  ),
                ],
              });
        }
        function n(y) {
          return new Promise((d) => {
            const m = new Image();
            (m.onload = () => d(!0)), (m.onerror = () => d(!1)), (m.src = y);
          });
        }
        function c(y) {
          return new Promise((d) => {
            const m = document.createElement("video");
            (m.preload = "metadata"),
              (m.onloadedmetadata = () => d(!0)),
              (m.onerror = () => d(!1)),
              (m.src = y);
          });
        }
        function _(y) {
          const {
              rgAssetLangs: d,
              initialLang: m,
              fnGetAssetUrl: r,
              fnDeletAssetLang: P,
              imageClassname: L,
              fnDeleteAllAssets: H,
              showDeleteAll: F = !0,
              bVerifyAssets: U,
              bVideoAsset: T,
            } = y,
            [b, N] = v.useState(m ?? I.O.Get().GetCurEditLanguage() ?? d[0]),
            [z, X] = v.useState(r(b)),
            V = v.useMemo(() => [...d].sort(), [d]);
          v.useEffect(() => {
            const Y = r(b);
            Y ? X(Y) : V.length > 0 ? N(V[0]) : X(null);
          }, [b, r, V]);
          const G = () => {
              H ? H() : V.forEach((Y) => P(Y));
            },
            Z = (0, v.useMemo)(() => d.map((Y) => r(Y)), [r, d]);
          return (0, t.jsxs)("div", {
            className: s().UploadedImageDisplayCtn,
            children: [
              (0, t.jsx)("div", {
                className: s().UploaderLeftCol,
                children: (0, t.jsx)(S, { curAssetURL: z, imageClassname: L }),
              }),
              (0, t.jsx)("div", {
                className: s().UploaderRightCol,
                children: (0, t.jsxs)("div", {
                  className: s().SectionCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: s().LangCountTitle,
                      children: (0, i.we)("#ImageUpload_LocalizedAssets"),
                    }),
                    (0, t.jsx)("div", {
                      className: s().LangSelectCtn,
                      children: V.map((Y) =>
                        (0, t.jsx)(
                          x,
                          {
                            language: Y,
                            selectedLanguage: b,
                            setSelectedLanguage: N,
                            deleteLanguage: P,
                          },
                          Y,
                        ),
                      ),
                    }),
                    F &&
                      !!V.length &&
                      (0, t.jsx)("a", {
                        href: "#",
                        className: s().DeleteAll,
                        onClick: (Y) => {
                          G(), Y.preventDefault();
                        },
                        children: (0, i.we)("#Button_DeleteAll"),
                      }),
                    !!U &&
                      (0, t.jsx)(o, { rgAssetURL: Z, rgLang: d, bIsImage: !T }),
                  ],
                }),
              }),
            ],
          });
        }
        function x(y) {
          const {
              language: d,
              selectedLanguage: m,
              setSelectedLanguage: r,
              deleteLanguage: P,
            } = y,
            L = (0, M.LgB)(d);
          return (0, t.jsxs)(
            "div",
            {
              className: s().UploaderImgLang,
              children: [
                (0, t.jsx)("a", {
                  href: "#",
                  onClick: (H) => {
                    H.preventDefault(), r(d);
                  },
                  children:
                    d === m
                      ? (0, t.jsx)("span", {
                          className: s().LangSelected,
                          children: "" + L,
                        })
                      : (0, t.jsx)("span", { children: "" + L }),
                }),
                (0, t.jsx)("a", {
                  href: "#",
                  onClick: (H) => {
                    H.preventDefault(), P(d);
                  },
                  children: (0, t.jsx)(l.X, {}),
                }),
              ],
            },
            "image" + L,
          );
        }
        function S(y) {
          const { curAssetURL: d, imageClassname: m } = y;
          if (!d)
            return (0, t.jsx)("div", {
              className: E().ArtNoArt,
              children: (0, i.we)("#ImageDisplay_NoAssetUploaded"),
            });
          const r = (0, g.yh)(d);
          return p.Ho.includes(r)
            ? (0, t.jsx)(A, { ...y })
            : p.x.includes(r)
              ? (0, t.jsx)(j, { className: m || E().ArtPreview, strTextURL: d })
              : (0, t.jsx)("img", { className: m || E().ArtPreview, src: d });
        }
        function A(y) {
          const { curAssetURL: d, imageClassname: m } = y,
            r = v.useRef(void 0);
          return (
            v.useEffect(() => {
              r.current && (r.current.load(), r.current.play());
            }, [d]),
            (0, t.jsx)("video", {
              ref: r,
              className: m || E().ArtPreview,
              autoPlay: !0,
              loop: !0,
              controls: !0,
              muted: !0,
              children: (0, t.jsx)("source", { src: d }),
            })
          );
        }
        function j(y) {
          const { strTextURL: d, className: m } = y,
            [r, P] = v.useState("");
          return (
            v.useEffect(() => {
              D()
                .get(d)
                .then((L) => {
                  P(L.data);
                })
                .catch((L) => {
                  console.error(L);
                });
            }, [d]),
            (0, t.jsx)("textarea", {
              className: m,
              value: r,
              readOnly: !0,
              rows: 20,
            })
          );
        }
      },
      11952: (O, B, e) => {
        "use strict";
        e.d(B, { _: () => g });
        var t = e(7850),
          u = e(71421),
          D = e(48576),
          v = e.n(D),
          M = e(36707),
          p = e(36118);
        function g(I) {
          const { bDone: f, name: s, tooltip: l } = I;
          return (0, t.jsxs)("div", {
            className: v().StatusLineItemCtn,
            children: [
              (0, t.jsx)("span", {
                className: (0, M.A)(
                  v().StatusIcon,
                  f ? v().StatusIconDone : v().StatusNotDone,
                ),
                children: f ? (0, t.jsx)(p.Jlk, {}) : (0, t.jsx)(p.X, {}),
              }),
              (0, t.jsx)(u.he, { toolTipContent: l, children: s }),
            ],
          });
        }
      },
      31172: (O, B, e) => {
        "use strict";
        e.d(B, { hA: () => L, ux: () => F });
        var t = e(7850),
          u = e(90626),
          D = e(85599),
          v = e(18210);
        function M(U) {
          const { data: T, isPending: b } = useStoreItemBasicInfo(
            U ? { appid: U } : void 0,
          );
          return React.useMemo(() => {
            if (!U) return [];
            if (!T) return b ? void 0 : [];
            const N = [],
              z = new Set(),
              X = [
                ["developer", GetCreatorClanAccountIDs(T.developers)],
                ["publisher", GetCreatorClanAccountIDs(T.publishers)],
                ["franchise", GetCreatorClanAccountIDs(T.franchises)],
              ];
            for (const [V, G] of X)
              for (const Z of G)
                z.has(Z) ||
                  (z.add(Z),
                  N.push({ appid: U, name: "", clan_account_id: Z, type: V }));
            return N;
          }, [U, T, b]);
        }
        function p(U) {
          const { rgCreators: T, renderCreator: b } = U,
            [N, z] = React.useState(0);
          if (!T.length) return null;
          if (T.length == 1) return jsx(Fragment, { children: b(T[0]) });
          const X = N % T.length;
          return jsxs("div", {
            className: styles.CreatorCarouselCtn,
            children: [
              b(T[X]),
              jsx("div", {
                className: styles.CreatorCarouselCrumbs,
                children: T.map((V, G) =>
                  jsx(
                    FocusableDiv,
                    {
                      className: styles.CreatorCarouselCrumb,
                      onClick: () => z(G),
                      "aria-label": f(V.type),
                      children: jsx(CarouselBreadcrumb, { bIsActive: G == X }),
                    },
                    V.clan_account_id,
                  ),
                ),
              }),
            ],
          });
        }
        function g(U) {
          const { creatorID: T, bSmallFormat: b } = U,
            { data: N } = useCreatorHomeByClanAccountID(T.clan_account_id);
          return N
            ? jsx(CreatorHomeEmbedDisplay, {
                strURL: GetCreatorHomeURL(N, T.type),
                strName: N.name ?? "",
                strAvatarURL: N.avatar_url_full_size ?? "",
                nFollowers: N.followers ?? 0,
                strCreatorType: f(T.type),
                followButton: jsx(CuratorFollowButton, {
                  clanAccountID: T.clan_account_id,
                  followType: "creatorhome",
                }),
                bSmallFormat: b,
              })
            : null;
        }
        function I(U) {
          const { appid: T, bSmallFormat: b, renderCreator: N } = U,
            z = M(T);
          return z
            ? jsx(p, {
                rgCreators: z,
                renderCreator:
                  N ?? ((X) => jsx(g, { creatorID: X, bSmallFormat: b })),
              })
            : jsx("div", {
                className: creatorstyle.DevSummaryWidgetCtn,
                children: jsx(Throbber, {}),
              });
        }
        function f(U) {
          switch (U) {
            case "publisher":
              return (0, v.we)("#CreatorHome_PublishedBy");
            case "franchise":
              return (0, v.we)("#CreatorHome_InFranchise");
          }
          return (0, v.we)("#CreatorHome_DevelopedBy");
        }
        var s = e(16512),
          l = e(19619),
          i = e(71742),
          C = e(3166),
          E = e(25792),
          h = e(99371),
          a = e.n(h),
          o = e(19298),
          n = e(95695),
          c = e.n(n),
          _ = e(51079),
          x = e(24660),
          S = e(72609),
          A = e(32093);
        function j(U) {
          const { href: T, children: b, bAllowFocuseableAnchor: N, ...z } = U;
          return S.TS.EREALM === A.TU.k_ESteamRealmChina
            ? (0, t.jsx)("div", { ...z, children: b })
            : N
              ? (0, t.jsx)(x.Ii, { href: T, ...z, children: b })
              : (0, t.jsx)("a", { href: T, ...z, children: b });
        }
        var y = e(36707),
          d = e(19730),
          m = e(53113);
        function r(U) {
          const {
            strURL: T,
            strName: b,
            strAvatarURL: N,
            nFollowers: z,
            strCreatorType: X,
            strTagLine: V,
            strMemberListURL: G,
            followButton: Z,
            bSmallFormat: Y,
            bMinimalDisplay: q,
          } = U;
          return (0, t.jsx)(_.Ay, {
            feature: "salecreatorhome",
            children: (0, t.jsxs)(o.Z, {
              className: (0, y.A)(
                a().DevSummaryCtn,
                Y ? a().SmallFormat : a().LargeFormat,
                q ? a().MinimalDisplay : "",
              ),
              "flow-children": "row",
              children: [
                !!X &&
                  (0, t.jsx)("span", { className: a().Title, children: X }),
                (0, t.jsxs)("div", {
                  className: a().DevSummaryWidgetCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: a().DevSummaryBackground,
                      style: { backgroundImage: `url(${N} )` },
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, y.A)(a().DevSummaryContent),
                      children: [
                        (0, t.jsxs)("div", {
                          className: c().FlexRowContainer,
                          children: [
                            (0, t.jsx)(j, {
                              href: (0, m.k2)(T),
                              className: a().AvatarLink,
                              bAllowFocuseableAnchor: !0,
                              children: (0, t.jsx)("img", {
                                className: (0, y.A)(a().Avatar, "Avatar_Trgt"),
                                src: N,
                                alt: "",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: (0, y.A)(
                                c().FlexColumnContainer,
                                a().CreatorDescCtn,
                              ),
                              children: [
                                (0, t.jsxs)("div", {
                                  className: (0, y.A)(
                                    a().CreatorTitleCtn,
                                    c().FlexColumnContainer,
                                  ),
                                  children: [
                                    (0, t.jsx)(j, {
                                      href: (0, m.k2)(T),
                                      className: a().CreatorNameName,
                                      children: b,
                                    }),
                                    !!V &&
                                      (0, t.jsx)("div", {
                                        className: (0, y.A)(
                                          c().FlexColumnContainer,
                                          a().CreatorTagline,
                                        ),
                                        children: V,
                                      }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: (0, y.A)({
                                    [c().FlexColumnContainer]: Y,
                                    [c().FlexRowContainer]: !Y,
                                    [a().SocialFollowersCtn]: !0,
                                  }),
                                  children: (0, t.jsxs)("div", {
                                    className: (0, y.A)(a().FollowBtnCtn),
                                    children: [
                                      Z,
                                      (0, t.jsxs)("div", {
                                        className: (0, y.A)({
                                          [a().Followers]: !0,
                                        }),
                                        children: [
                                          (0, t.jsx)("span", {
                                            children: (0, v.we)(
                                              "#CreatorHome_JustFollowers",
                                            ),
                                          }),
                                          (0, t.jsx)("span", {
                                            className: a().FollowerCount,
                                            children: (0, d.Dq)(z),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !!G &&
                          (0, t.jsx)("a", {
                            href: G,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: a().MembersListLink,
                            children: (0, v.we)("#ClanMembershipList"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var P = e(1e3);
        function L(U) {
          const {
              creatorID: T,
              bShowTagline: b,
              bHideCreatorType: N,
              bSmallFormat: z,
              bHideFollowButton: X,
              bAddLinkToMemberList: V,
              bMinimalDisplay: G,
            } = U,
            { creatorHome: Z, isFetching: Y } = (0, s.FV)(T.clan_account_id),
            [q] = (0, l.L2)();
          return q || (!Z && Y)
            ? (0, t.jsx)("div", {
                className: a().DevSummaryWidgetCtn,
                children: (0, t.jsx)(D.t, {
                  string: (0, v.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              })
            : Z
              ? (0, t.jsx)(E.tH, {
                  children: (0, t.jsx)(r, {
                    strURL: Z.GetCreatorHomeURL(T.type),
                    strName: Z.GetName(),
                    strAvatarURL: Z.GetAvatarURLFullSize(),
                    nFollowers: Z.GetNumFollowers(),
                    strCreatorType: N ? void 0 : f(T.type),
                    strTagLine: b ? Z.GetTagLine() : void 0,
                    strMemberListURL: V
                      ? C.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        Z.GetClanSteamID().ConvertTo64BitString() +
                        "/members/"
                      : void 0,
                    followButton: X
                      ? void 0
                      : (0, t.jsx)(P.of, {
                          clanAccountID: T.clan_account_id,
                          creatorID: T,
                        }),
                    bSmallFormat: z,
                    bMinimalDisplay: G,
                  }),
                })
              : null;
        }
        function H(U) {
          const { appid: T, bSmallFormat: b } = U;
          return jsx(ErrorBoundary, {
            children: jsx(CreatorHomeCarouselForApp, {
              appid: T,
              bSmallFormat: b,
              renderCreator: (N) => jsx(L, { creatorID: N, bSmallFormat: b }),
            }),
          });
        }
        function F(U) {
          const { clanInfo: T, bAddLinkToMemberList: b } = U;
          if (
            ((0, i.wT)(
              T && T.clanAccountID,
              "CuratorHoverContent expect clanInfo, not supplied",
            ),
            !T)
          )
            return null;
          const N = {
            clan_account_id: T.clanAccountID,
            name: T.group_name,
            type: "developer",
          };
          return (0, t.jsx)("div", {
            className: a().CuratorHoverCtn,
            children: (0, t.jsx)(L, {
              creatorID: N,
              bSmallFormat: !0,
              bShowTagline: !0,
              bHideCreatorType: !0,
              bAddLinkToMemberList: b,
            }),
          });
        }
      },
      45247: (O, B, e) => {
        "use strict";
        e.d(B, { W: () => _e });
        var t = e(7850),
          u = e(24660),
          D = e(19298),
          v = e(20169),
          M = e(3367),
          p = e(88743),
          g = e(98735),
          I = e(24237),
          f = e(86298),
          s = e(95414);
        function l() {
          return { width: 460, height: 215 };
        }
        function i() {
          return { width: 616, height: 353 };
        }
        function C() {
          return { width: 231, height: 87 };
        }
        var E = e(46727),
          h = e(84607),
          a = e(41188),
          o = e(77459),
          n = e(72609);
        const c = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function _(w, J) {
          let Q = "0000000000000000000000000000000000000000";
          typeof w == "string" ? (Q = w) : w && (Q = x(w) || Q);
          let te = ".jpg";
          Q === "0000000000000000000000000000000000000000" && (Q = c),
            Q.length == 44 && ((te = Q.slice(-4)), (Q = Q.slice(0, 40)));
          let R = n.TS.AVATAR_BASE_URL;
          switch (
            (R ||
              ((R = n.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (R += Q.slice(0, 2) + "/")),
            (R += Q),
            J)
          ) {
            case "X-Small":
            case "Small":
              break;
            case "Medium":
            case "MediumLarge":
              R += "_medium";
              break;
            case "Large":
            case "X-Large":
            case "FillArea":
              R += "_full";
              break;
          }
          return (R += te), R;
        }
        function x(w) {
          return w
            ? (typeof w[Symbol.iterator] == "function"
                ? Array.from(w)
                : Object.values(w).filter((Q) => typeof Q == "number")
              )
                .map((Q) => Q.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
        var S = e(40358),
          A = e(90626),
          j = e(26591),
          y = e(76532),
          d = e.n(y),
          m = e(29245),
          r = e(48357),
          P = e(64774),
          L = e(36707);
        function H(w) {
          const {
              id: J,
              bHidePrice: Q,
              bShowInLibraryInsteadOfPrice: te,
              bHidePlatforms: R,
              strClassName: W,
              creatorAccountID: K,
              bShowName: se,
              onlyOneDiscountPct: re,
              bShowAddToCart: ue,
              bShowWishlistButton: he,
            } = w,
            de = (0, A.useRef)(null),
            [me, Ce] = (0, A.useState)(!1),
            { data: De } = (0, S.J$)(J);
          if (
            ((0, A.useEffect)(() => {
              de.current && Ce(de.current.offsetWidth < 370);
            }, [de]),
            !J || !("appid" in J || "bundleid" in J || "packageid" in J))
          )
            return null;
          const ve = !!(he && De?.item_type == M.c6.qI),
            Ie = !!(!K && !ue && !ve && R && Q);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !Ie &&
                (0, t.jsxs)("div", {
                  ref: de,
                  className: (0, L.A)(
                    d().CapsuleBottomBar,
                    "CapsuleBottomBar",
                    W,
                  ),
                  children: [
                    K && (0, t.jsx)(U, { creatorAccountID: K, ...w }),
                    ue &&
                      (0, t.jsx)(j.h, {
                        id: J,
                        className: (0, L.A)(
                          d().MaxActionButtonWidth,
                          d().AddToCartButton,
                        ),
                      }),
                    ve &&
                      "appid" in J &&
                      (0, t.jsx)(P.r, {
                        appid: J.appid,
                        className: (0, L.A)(
                          d().MaxActionButtonWidth,
                          d().AddToWishlistButton,
                        ),
                      }),
                    !R &&
                      (0, t.jsx)(m.Q, {
                        id: J,
                        bMinimizePlatforms: me,
                        bHideWindows: !0,
                      }),
                    !Q &&
                      (0, t.jsx)("span", {
                        className: d().BottomBarPriceInfo,
                        children: (0, t.jsx)(r.NF, {
                          id: J,
                          bShowInLibrary: te,
                          onlyOneDiscountPct: re,
                        }),
                      }),
                  ],
                }),
              se && (0, t.jsx)(F, { id: J }),
            ],
          });
        }
        function F(w) {
          const { id: J } = w,
            { data: Q } = (0, S.J$)(J);
          return Q?.name
            ? (0, t.jsx)("div", {
                className: d().CapsuleName,
                children: Q.name,
              })
            : null;
        }
        function U(w) {
          const { creatorAccountID: J, strClassName: Q } = w,
            te = (0, A.useMemo)(() => ({ creatorid: J }), [J]),
            { data: R } = (0, S.J$)(te),
            { data: W } = (0, S.lv)(te);
          if (!R) return null;
          const K = _(W?.clan_avatar, "Medium"),
            se = R.name || "";
          return (0, t.jsxs)("div", {
            className: (0, L.A)(d().BottomCreatorRow, Q),
            children: [
              (0, t.jsx)("img", {
                className: (0, L.A)(d().CreatorLogo),
                src: K,
                alt: se,
              }),
              (0, t.jsx)("span", { className: d().CreatorName, children: se }),
            ],
          });
        }
        var T = e(21721),
          b = e(87249),
          N = e(29522),
          z = e(72865),
          X = e(24179),
          V = e(32994),
          G = e(83482),
          Z = e(33924),
          Y = e(21770),
          q = e(77200),
          ee = e(18210),
          $ = e(53113),
          ne = e(3166),
          ie = e(91291),
          ae = e.n(ie),
          oe = e(3348),
          Ae = e(47875);
        const k = "capsule_index_";
        function _e(w) {
          const {
              capsule: J,
              bShowParentApp: Q,
              elElementToAppendToHover: te,
              index: R,
              navKey: W,
              bHideStoreHover: K,
              onlyOneDiscountPct: se,
              bPreferDemoStorePage: re,
              bShowEarlyAccessBanner: ue,
            } = w,
            he = (0, ne.Qn)(),
            [de, me] = A.useState(!1),
            [Ce, De] = A.useState(!1),
            [ve, Ie] = A.useState(!1),
            Pe = A.useRef(!1);
          A.useEffect(() => {
            if (Ce && !Pe.current) {
              const Be = window.setTimeout(() => {
                (Pe.current = !0), Ie(!0);
              }, 500);
              return () => window.clearTimeout(Be);
            }
            return Ie(Ce || de), () => {};
          }, [Ce, de]);
          const { data: Me } = (0, V.lI)(),
            xe = !!Me?.preferences?.disable_microtrailers,
            pe = (0, p.rt)(J),
            { data: Ee } = (0, S.J$)(pe),
            ye = (0, N.$5)(Q ? Ee?.related_items?.parent_appid : void 0),
            { data: Le } = (0, S.J$)(ye);
          if (!Ee || !pe) return null;
          const Se = !!Le && !!ye,
            Oe = (0, t.jsx)(fe, {
              ...w,
              strExtraParams: w.strExtraParams,
              id: pe,
              bIsHovered: ve && !xe,
              bHasParentAppToDisplay: Se,
              onlyOneDiscountPct: se,
              bShowEarlyAccessBanner: ue,
              bUsePanel: !K && !he,
            });
          return (0, t.jsxs)(D.Z, {
            className: (0, L.A)({
              [d().OuterCapsuleContainer]: !0,
              [d().TrailerActive]: ve && !xe && he,
              [k + R]: R == 0,
            }),
            navEntryPreferPosition: v.iU.PREFERRED_CHILD,
            navKey: W,
            onFocusWithin: w.imageType != "library" ? De : void 0,
            children: [
              (0, t.jsxs)(g.oj, {
                appid: Ee.appid,
                children: [
                  K
                    ? (0, t.jsx)("div", {
                        onMouseEnter: () => me(!0),
                        onMouseLeave: () => me(!1),
                        children: Oe,
                      })
                    : (0, t.jsx)(I.Q, {
                        className: d().CapsuleContainer,
                        id: pe,
                        elElementToAppend: w.elElementToAppendToHover,
                        bShowDemoButton: w.bShowDemoButton,
                        bPreferDemoStorePage: w.bPreferDemoStorePage,
                        bShowDeckCompatibilityDialog:
                          w.bShowDeckCompatibilityDialog,
                        eHardwareCompatibilityDisplay:
                          w.eHardwareCompatibilityDisplay,
                        bHidePrice: w.bHidePrice,
                        bUseSubscriptionLayout: w.bUseSubscriptionLayout,
                        strExtraParams: w.strExtraParams,
                        nCreatorAccountID: w.creatorAccountID,
                        nWidthMultiplier: w.nWidthMultiplier,
                        bShowIgnoreButton: w.bShowIgnoreButton,
                        bShowDescription: w.bShowDescriptionInHover,
                        children: Oe,
                      }),
                  !!te && (0, t.jsx)(t.Fragment, { children: te }),
                ],
              }),
              Se &&
                (0, t.jsx)(ce, {
                  strExtraParams: w.strExtraParams,
                  parentID: ye,
                  parentStoreItemDefaultInfo: Le,
                  childAppType: Ee.type,
                  bPreferDemoStorePage: !!re,
                }),
            ],
          });
        }
        function ce(w) {
          const {
              strExtraParams: J,
              parentID: Q,
              parentStoreItemDefaultInfo: te,
              childAppType: R,
              bPreferDemoStorePage: W,
            } = w,
            K = (0, z.n9)(),
            se = (0, ne.Qn)(),
            { data: re } = (0, S.lv)(Q);
          return re
            ? (0, t.jsx)(u.ml, {
                className: d().CapsuleParentInfo,
                ...(0, f.S)(te, K, se, W, J),
                children: (0, t.jsxs)(g.oj, {
                  appid: te.appid,
                  children: [
                    (0, t.jsx)("div", {
                      className: d().ParentType,
                      children: (0, ee.we)(
                        R == M.uE.Ov
                          ? "#SalePage_ParentApp_SoundTrack"
                          : "#SalePage_ParentApp_DLC",
                      ),
                    }),
                    (0, t.jsx)(s.u, {
                      id: Q,
                      strExtraParams: J,
                      children: (0, t.jsx)("img", {
                        loading: "lazy",
                        className: Z.AppCapsuleImage,
                        alt: te.name || "",
                        src: (0, T.b0)(re, "small_capsule"),
                        ...C(),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function fe(w) {
          const {
              id: J,
              bHideStatusBanners: Q,
              bUsePanel: te,
              strExtraParams: R,
              index: W,
              imageType: K,
              bHasParentAppToDisplay: se,
              bIsHovered: re,
              strDoubleCapsuleMessage: ue,
              bPreferDemoStorePage: he,
              bShowEarlyAccessBanner: de,
              bPreferAssetWithoutOverride: me,
            } = w,
            Ce = (0, z.n9)(),
            De = (0, q.w)(),
            ve = (0, ne.Qn)(),
            Ie = (0, N._Z)(J),
            { data: Pe } = (0, S.J$)(J);
          if (!Pe) return null;
          const Me = te
              ? void 0
              : (0, $.NT)(
                  (0, G.It)(`${(0, Ae._)(Pe, he)}${R ? `?${R}` : ""}`, Ce, De),
                ),
            xe = te ? D.Z : u.Ii,
            pe = re && ve,
            Ee = !!ue;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, L.A)({ [ae().TwoWidthCtn]: Ee }),
                children: [
                  (0, t.jsxs)(xe, {
                    href: Me,
                    style: {
                      display: "block",
                      cursor: "pointer",
                      position: ve ? "relative" : void 0,
                      zIndex: pe ? 4 : void 0,
                    },
                    className: (0, L.A)({ [ae().TwoWidthCapsule]: Ee }),
                    preferredFocus: se,
                    focusable: !0,
                    noFocusRing: pe,
                    children: [
                      (0, t.jsx)(E.V, {
                        appids: Ie,
                        hide_status_banners: Q,
                        show_early_access: de,
                      }),
                      K != "none" &&
                        (0, t.jsx)(h.a, {
                          imageType: K,
                          id: J,
                          bPreferAssetWithoutOverride: me,
                        }),
                      (0, t.jsx)(Y.J, { id: J }),
                      (0, t.jsx)("div", {
                        className: (0, L.A)({ [ae().FadeIn]: pe }),
                        children: (0, t.jsx)(b.mj, {
                          id: J,
                          active: re,
                          bIsHoverMode: !0,
                          eGrowOnActivate: pe
                            ? b.C0.k_ETrailerGrowAmount_Implicit
                            : void 0,
                        }),
                      }),
                    ],
                  }),
                  Ee &&
                    (0, t.jsx)(le, {
                      id: J,
                      strDoubleCapsuleMessage: ue,
                      index: W,
                    }),
                ],
              }),
              (0, t.jsx)(ge, { ...w }),
            ],
          });
        }
        function le(w) {
          const { id: J, strDoubleCapsuleMessage: Q, index: te } = w,
            { data: R } = (0, S.by)(J),
            { data: W } = (0, S.xz)(J);
          return (0, t.jsxs)("div", {
            className: (0, L.A)(ae().TwoWidthSideInfo, "TwoWidthSideInfo"),
            children: [
              (0, t.jsx)("div", { className: ae().Reason, children: Q }),
              (0, t.jsx)("div", {
                className: ae().StoreSaleItemRelease,
                children: (0, t.jsx)("span", {
                  children: R ? (0, oe.CC)(R) : "",
                }),
              }),
              (0, t.jsx)(a.n, {
                bHideTitle: !0,
                rgTagIDs: W?.map((K) => K.tagid) || [],
                instanceNum: te,
              }),
            ],
          });
        }
        function ge(w) {
          const {
              id: J,
              bHidePriceIfOwned: Q,
              bHideStatusBanners: te,
              bUseSubscriptionLayout: R,
              elElementToAppendToHover: W,
              bHidePrice: K,
              bHidePlatforms: se,
              creatorAccountID: re,
              bIsHovered: ue,
              onlyOneDiscountPct: he,
              strDoubleCapsuleMessage: de,
            } = w,
            { data: me } = (0, S.J$)(J),
            { bIsOwned: Ce } = (0, X.ZJ)(J),
            De = Ce && !te;
          if (R && me && me.item_type == M.c6.qI && me.appid)
            return (0, t.jsx)(o.E, { appid: me.appid, bIsMuted: ue });
          if (W) return null;
          const ve = !!(Ce && Q);
          return (0, t.jsx)(H, {
            id: J,
            bHidePrice: K,
            bShowInLibraryInsteadOfPrice: ve,
            bHidePlatforms: se,
            creatorAccountID: re,
            bShowName: w.bShowName,
            onlyOneDiscountPct: he,
            bShowWishlistButton: !!de,
          });
        }
      },
      59490: (O, B, e) => {
        "use strict";
        e.d(B, { p: () => I });
        var t = e(7850),
          u = e(90626),
          D = e(76559),
          v = e(54407),
          M = e(15736),
          p = e.n(M),
          g = e(3166);
        function I(f) {
          const {
              accountID: s,
              bHideWhenNotAvailable: l,
              bHideName: i,
              bLink: C = !0,
            } = f,
            [E] = (0, v.KT)(s),
            h = (0, v.KM)(s),
            a = u.useMemo(() => D.b.InitFromAccountID(s), [s]),
            o = `${g.TS.COMMUNITY_BASE_URL}profiles/${a.ConvertTo64BitString()}`,
            n = C ? "a" : "span";
          return (0, t.jsx)(t.Fragment, {
            children: E
              ? (0, t.jsxs)(n, {
                  href: C ? o : void 0,
                  children: [
                    (0, t.jsx)("img", {
                      className: M.SmallAvatar,
                      src: E.avatar_url,
                      "data-miniprofile": "s" + a.ConvertTo64BitString(),
                    }),
                    !i &&
                      (0, t.jsx)("span", {
                        children: h
                          ? `${h} (${E.persona_name})`
                          : E.persona_name,
                      }),
                  ],
                })
              : (0, t.jsx)(t.Fragment, {
                  children: !l && (0, t.jsx)("span", { children: s }),
                }),
          });
        }
      },
      21770: (O, B, e) => {
        "use strict";
        e.d(B, { J: () => z });
        var t = e(7850),
          u = e(21690),
          D = e(36707),
          v = e(3166),
          M = e(58855),
          p = e(39905),
          g = e(40358),
          I = e(64238),
          f = e.n(I),
          s = e(90626),
          l = e(34713),
          i = e.n(l),
          C = e(55546),
          E = e(75779),
          h = e(71742),
          a = e(26356);
        function o(V) {
          const { data: G } = useStoreItemSupportedPlatforms(V.id);
          return jsx(c, { platforms: G });
        }
        function n(V) {
          const { id: G, ...Z } = V,
            { data: Y } = (0, g.qI)(G);
          return (0, t.jsx)(_, { ...Z, platforms: Y });
        }
        const c = s.memo(function (G) {
            const { platforms: Z } = G;
            if (!Z) return null;
            const { windows: Y, mac: q, steamos_linux: ee, vr_support: $ } = Z;
            return (0, t.jsxs)("span", {
              className: i().SupportedPlatforms,
              children: [
                Y && (0, t.jsx)(x, {}),
                q && (0, t.jsx)(S, {}),
                ee && (0, t.jsx)(A, {}),
                $?.vrhmd && (0, t.jsx)(j, {}),
              ],
            });
          }),
          _ = s.memo(function (G) {
            const { platforms: Z, eHWCompat: Y, size: q = "small" } = G;
            let ee;
            if (Y == a.iA)
              return (
                (0, h.wT)(
                  !1,
                  "SteamHWCompatIndicator called for k_ESteamHWCompatibility_None",
                ),
                null
              );
            if (Y == a.c9) {
              const $ = Z?.steam_os_compat_category;
              if ($ === void 0) return null;
              switch ($) {
                case C.Hi:
                  ee = N;
                  break;
                case C.u_:
                  ee = T;
                  break;
                case C.xs:
                  ee = b;
                  break;
                default:
                  return (
                    (0, h.z_)($, `Unhandled steam os category: ${$}`), null
                  );
              }
            } else {
              let $;
              if (
                (Y == a.JR
                  ? ($ = Z?.steam_machine_compat_category)
                  : Y == a.bY
                    ? ($ = Z?.steam_frame_compat_category)
                    : ($ = Z?.steam_deck_compat_category),
                $ === void 0)
              )
                return null;
              switch ($) {
                case E.I2:
                  ee = F;
                  break;
                case E.sd:
                  ee = U;
                  break;
                case E.V8:
                  ee = T;
                  break;
                case E.YX:
                  ee = b;
                  break;
                default:
                  return (
                    (0, h.z_)($, `Unhandled deck compat category: ${$}`), null
                  );
              }
            }
            return (0, t.jsxs)("span", {
              className: f()(
                i().DeckCompat,
                q == "small" && i().Small,
                q == "fill" && i().Fill,
              ),
              children: [
                Y == a.ZJ && (0, t.jsx)(P, {}),
                Y == a.JR && (0, t.jsx)(L, {}),
                Y == a.bY && (0, t.jsx)(H, {}),
                (0, t.jsx)(ee, {}),
              ],
            });
          });
        function x() {
          return (0, t.jsx)("span", {
            className: f()(i().PlatformIndicator, i().Windows),
            title: p.Z.Localize("#Platform_Windows"),
            children: (0, t.jsx)(y, {}),
          });
        }
        function S() {
          return (0, t.jsx)("span", {
            className: f()(i().PlatformIndicator, i().Mac),
            title: p.Z.Localize("#Platform_Mac"),
            children: (0, t.jsx)(d, {}),
          });
        }
        function A() {
          return (0, t.jsx)("span", {
            className: f()(i().PlatformIndicator, i().SteamOS),
            title: p.Z.Localize("#Platform_Linux"),
            children: (0, t.jsx)(m, {}),
          });
        }
        function j() {
          return (0, t.jsx)("span", {
            className: i().PlatformIndicator,
            title: p.Z.Localize("#Platform_VR"),
            children: (0, t.jsx)(r, {}),
          });
        }
        function y() {
          return (0, t.jsxs)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            className: "SVGIcon_Button SVGIcon_WindowsLogo",
            width: "100%",
            height: "100%",
            viewBox: "0 0 128 128",
            enableBackground: "new 0 0 128 128",
            children: [
              (0, t.jsx)("rect", {
                fill: "currentColor",
                width: "60.834",
                height: "60.835",
              }),
              (0, t.jsx)("rect", {
                x: "67.165",
                fill: "currentColor",
                width: "60.835",
                height: "60.835",
              }),
              (0, t.jsx)("rect", {
                y: "67.164",
                fill: "currentColor",
                width: "60.834",
                height: "60.836",
              }),
              (0, t.jsx)("rect", {
                x: "67.165",
                y: "67.164",
                fill: "currentColor",
                width: "60.835",
                height: "60.836",
              }),
            ],
          });
        }
        function d() {
          return (0, t.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, t.jsx)("path", {
                d: "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
              }),
              (0, t.jsx)("path", {
                d: "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
              }),
            ],
          });
        }
        function m() {
          return (0, t.jsxs)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#FFFFFF",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
              }),
            ],
          });
        }
        function r() {
          return (0, t.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, t.jsx)("path", {
                d: "M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z",
                fill: "currentColor",
              }),
              (0, t.jsx)("path", {
                d: "M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function P() {
          return (0, t.jsx)("span", {
            title: p.Z.Localize(
              "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
            ),
            className: f()(i().SteamDeckCompatLogo),
            children: (0, t.jsx)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                opacity: "0.84",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z",
                fill: "white",
              }),
            }),
          });
        }
        function L() {
          return (0, t.jsx)("span", {
            title: p.Z.Localize(
              "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: f()(i().SteamDeckCompatLogo),
            children: (0, t.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function H() {
          return (0, t.jsx)("span", {
            title: p.Z.Localize(
              "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: f()(i().SteamDeckCompatLogo),
            children: (0, t.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  d: "M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function F() {
          return (0, t.jsx)("span", {
            title: p.Z.Localize("#SteamDeckVerified_Category_Verified"),
            className: i().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: f()(i().SteamDeckCompatVerified),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function U() {
          return (0, t.jsx)("span", {
            title: p.Z.Localize("#SteamDeckVerified_Category_Playable"),
            className: i().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: f()(i().SteamDeckCompatPlayable),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function T() {
          return (0, t.jsx)("span", {
            title: p.Z.Localize("#SteamDeckVerified_Category_Unsupported"),
            className: i().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: f()(i().SteamDeckCompatUnsupported),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function b() {
          return (0, t.jsx)("span", {
            title: p.Z.Localize("#SteamDeckVerified_Category_Unknown"),
            className: i().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: f()(i().SteamDeckCompatUnknown),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function N() {
          return (0, t.jsx)("span", {
            title: p.Z.Localize("#SteamOSCompatibility_Category_Compatible"),
            className: i().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: f()(i().SteamOSCompatCompatible),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function z(V) {
          const { bAllowOutsideOfDeck: G } = V;
          return !(0, v.Qn)() && !G ? null : (0, t.jsx)(X, { ...V });
        }
        function X(V) {
          const { className: G, id: Z } = V,
            [Y, q] = (0, u.FD)();
          let ee = q;
          if ((q == a.iA && (ee = a.ZJ), !Z)) return null;
          let $;
          return (
            q == a.bY && ($ = M.CompatIconFrame),
            (0, t.jsx)("div", {
              className: (0, D.A)(M.CompatIcon, $, G),
              children: (0, t.jsx)(n, { id: Z, eHWCompat: ee }),
            })
          );
        }
      },
      39239: (O, B, e) => {
        "use strict";
        e.d(B, { i: () => I, o: () => g });
        var t = e(7850),
          u = e(90626),
          D = e(18210),
          v = e(67523),
          M = e.n(v),
          p = e(80150);
        function g(f) {
          const {
              className: s,
              srcs: l,
              lazyLoad: i,
              width: C,
              height: E,
              alt: h,
              crossOrigin: a,
            } = f,
            [o, n] = u.useState(l.length),
            [c, _] = u.useState(0);
          u.useEffect(() => {
            o != l.length && (n(l.length), _(0));
          }, [o, l.length]);
          const x = u.useCallback(() => {
            f.onImageError && f.onImageError(f.srcs[c]),
              c + 1 < f.srcs.length && _(c + 1);
          }, [c, f]);
          return l.length == 0
            ? null
            : (0, t.jsx)("img", {
                className: s,
                src: l[c],
                crossOrigin: a,
                onError: x,
                loading: i ? "lazy" : void 0,
                width: C,
                height: E,
                alt: h,
              });
        }
        function I(f) {
          const [s, l] = u.useState(!1),
            {
              className: i,
              src: C,
              lazyLoad: E,
              width: h,
              height: a,
              alt: o,
              crossOrigin: n,
            } = f;
          return s
            ? (0, t.jsxs)("div", {
                className: v.ErrorDiv,
                children: [
                  (0, t.jsx)("p", {
                    children: (0, D.we)("#Image_ErrorTitle", C),
                  }),
                  (0, t.jsx)("ul", {
                    children: (0, t.jsx)("li", {
                      children: (0, D.we)("#Image_Error_msg1"),
                    }),
                  }),
                  (0, t.jsx)("p", {
                    children: (0, D.we)("#Image_Error_suggestion"),
                  }),
                ],
              })
            : (0, t.jsx)(p.o, {
                className: i,
                src: C,
                onError: () => l(!0),
                crossOrigin: n,
                loading: E ? "lazy" : void 0,
                width: h,
                height: a,
                alt: o,
              });
        }
      },
      80150: (O, B, e) => {
        "use strict";
        e.d(B, { o: () => i });
        var t = e(7850),
          u = e(90626),
          D = e(36118),
          v = e(36707),
          M = e(60399),
          p = e(21659),
          g = e(21038),
          I = e.n(g);
        const f = 1.3,
          s = 3,
          l = 256;
        function i(C) {
          const [E, h] = (0, u.useState)(!1),
            [a, o] = (0, u.useState)({
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: 0,
              displayHeight: 0,
            }),
            n = (0, u.useRef)(null),
            [c, _] = (0, M.XC)();
          return (
            (0, u.useEffect)(() => {
              a.naturalWidth > a.displayWidth * f &&
                a.naturalHeight > a.displayHeight * f &&
                a.naturalWidth > l &&
                a.naturalWidth / a.naturalHeight < s &&
                h(!0);
            }, [a]),
            E
              ? (0, t.jsxs)("span", {
                  className: g.PreviewCtn,
                  children: [
                    _,
                    (0, t.jsx)("span", {
                      className: g.SVG,
                      children: (0, t.jsx)(D.YNO, {}),
                    }),
                    (0, t.jsx)("img", {
                      ...C,
                      className: (0, v.A)({
                        ...(C.className && { [C.className]: !0 }),
                      }),
                      onClick: (x) => {
                        C.src && c([C.src]);
                      },
                    }),
                  ],
                })
              : (0, t.jsx)("img", {
                  ...C,
                  ref: n,
                  onLoad: (x) => {
                    if (!x.currentTarget.closest("a") && !(0, p.c5)()) {
                      const {
                        naturalWidth: S,
                        naturalHeight: A,
                        width: j,
                        height: y,
                      } = x.currentTarget;
                      o({
                        naturalWidth: S,
                        naturalHeight: A,
                        displayWidth: j,
                        displayHeight: y,
                      });
                    }
                  },
                })
          );
        }
      },
      91512: (O, B, e) => {
        "use strict";
        e.d(B, { A: () => a });
        var t = e(7850),
          u = e(90626),
          D = e(54963);
        const v =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
        var M = e(44894),
          p = e(41635),
          g = e(41609),
          I = e.n(g),
          f = e(64641),
          s = e.n(f),
          l = e(36118),
          i = e(41735),
          C = e.n(i),
          E = e(13854),
          h = e(36707);
        function a(n) {
          const {
              items: c,
              render: _,
              onDelete: x,
              onEdit: S,
              onReorder: A,
              onMove: j,
              bDisabled: y,
              rowClassName: d,
            } = n,
            [m, r] = u.useState(!1),
            [P, L] = u.useState(void 0),
            [H, F] = u.useState(void 0),
            [U, T] = u.useState(-1),
            [b, N] = u.useState(void 0),
            [z, X] = u.useState(0),
            [V, G] = u.useState(0),
            [Z, Y] = u.useState(void 0),
            [q, ee] = u.useState(""),
            $ = u.useRef(void 0),
            ne = u.useRef([]),
            ie = u.useRef([]),
            ae = u.useMemo(() => C().CancelToken.source(), []),
            oe = () => {
              $.current?.firstElementChild &&
                (X($.current.firstElementChild.getBoundingClientRect().height),
                G($.current.firstElementChild.getBoundingClientRect().width));
            };
          u.useEffect(() => {
            oe();
          }, []),
            u.useEffect(
              () => () => ae.cancel("ReorderableList unmounting"),
              [ae],
            );
          const Ae = (R, W) => {
              const K = ne.current[R]?.current;
              if (!K) {
                console.error(
                  "start element grab missing element at index " + R,
                );
                return;
              }
              r(!0), T(R), Y(void 0), N(R);
              const se = W.clientX - K.getBoundingClientRect().left;
              L(se);
              const re = W.clientY - K.getBoundingClientRect().top;
              F(re),
                (K.style.position = "fixed"),
                (K.style.left = W.clientX - se + "px"),
                (K.style.top = W.clientY - re + "px"),
                (K.style.zIndex = "1");
            },
            k = u.useCallback(
              (R) => {
                const W = ne.current[U]?.current;
                if (!W) {
                  console.error("update grab element missing element");
                  return;
                }
                (W.style.left = R.clientX - P + "px"),
                  (W.style.top = R.clientY - H + "px");
              },
              [U, P, H],
            ),
            _e = u.useCallback(() => {
              const R = ne.current[U]?.current;
              R
                ? ((R.style.position = ""), (R.style.zIndex = ""))
                : console.error("end element drag missing element"),
                r(!1),
                T(-1),
                Y(void 0),
                N(void 0);
            }, [U]),
            ce = (R, W) => {
              ae.token.reason ||
                ($.current.firstElementChild?.getBoundingClientRect().height >
                  0 &&
                  z !=
                    $.current.firstElementChild.getBoundingClientRect()
                      .height &&
                  oe(),
                Ae(W, R),
                R.preventDefault());
            },
            fe = (R, W) => {
              const K = E.OQ(W > R ? W - 1 : W, 0, c.length - 1);
              R != K && (j ? j(R, K) : (0, p.yY)(c, R, K), te(K), A && A(c));
            },
            le = (R) => {
              !m || ae.token.reason || (_e(), fe(U, b));
            },
            ge = u.useCallback(
              (R) => {
                if (!m || ae.token.reason) return;
                const W = R.clientY;
                let K;
                for (let se = 0; se < ie.current.length; se++) {
                  const re = ie.current[se].current.getBoundingClientRect().top,
                    ue = ie.current[se].current.getBoundingClientRect().bottom,
                    he = (re + ue * 2) / 3;
                  if (W < he) {
                    K = se;
                    break;
                  }
                }
                N(K ?? ie.current.length), k(R);
              },
              [m, ae, k],
            );
          (0, D.l6)(window, "mousemove", m ? ge : void 0),
            (0, D.l6)(window, "mouseup", m ? le : void 0),
            u.useEffect(() => {
              for (let R = ne.current.length; R < c.length; R++)
                ne.current.push(u.createRef()), ie.current.push(u.createRef());
            }, [c.length]);
          const w = (R) => {
              Y(void 0);
              const W = q?.trim(),
                K = Number.parseInt(W);
              if (W.length == 0 || isNaN(K)) return;
              const se = K - 1;
              R != se && fe(R, se);
            },
            J = (R, W) => {
              R.key === "Enter" && (w(W), R.currentTarget.blur());
            },
            [Q, te] = u.useState(void 0);
          return (0, t.jsx)("div", {
            className: I().WhitelistCtn,
            ref: $,
            children: c.map((R, W) =>
              (0, t.jsxs)(
                "div",
                {
                  ref: ie.current[W],
                  children: [
                    W == b && (0, t.jsx)(o, { width: V }),
                    (0, t.jsx)("div", {
                      ref: ne.current[W],
                      className: I().DragGhost,
                      children:
                        W == U &&
                        (0, t.jsxs)("div", {
                          className: (0, h.A)(I().WhitelistRow, d),
                          children: [
                            (0, t.jsx)("img", {
                              className: (0, h.A)(
                                I().WhitelistAvatar,
                                I().Grabbing,
                              ),
                              src: v,
                            }),
                            (0, t.jsx)("input", {
                              className: (0, h.A)(
                                I().WhitelistNumber,
                                I().Disabled,
                                I().Grabbing,
                              ),
                              type: "text",
                              value: (b > W ? b - 1 : b) + 1,
                              disabled: !0,
                            }),
                            _(R, W),
                          ],
                        }),
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, h.A)(
                        I().WhitelistRow,
                        d,
                        m && I().DragActive,
                        W == U && I().BeingDragged,
                        Q == W && I().Dropped,
                      ),
                      onAnimationEnd: () => te(void 0),
                      children: [
                        (0, t.jsx)("img", {
                          className: (0, h.A)(
                            I().WhitelistAvatar,
                            I().Grabbable,
                            y && I().DisabledGrab,
                          ),
                          src: v,
                          onMouseDown: y ? void 0 : (K) => ce(K, W),
                        }),
                        (0, t.jsx)("input", {
                          className: (0, h.A)(
                            I().WhitelistNumber,
                            y && I().Disabled,
                          ),
                          type: "text",
                          value: Z == W ? q : W + 1,
                          disabled: y || W == U,
                          onChange: (K) => ee(K.target.value),
                          onKeyDown: (K) => J(K, W),
                          onFocus: (K) => {
                            Y(W), ee(K.target.value);
                          },
                          onBlur: () => w(W),
                        }),
                        _(R, W),
                        W != U &&
                          !!(S || x) &&
                          (0, t.jsxs)("div", {
                            className: I().ButtonCtn,
                            children: [
                              !!S &&
                                (0, t.jsx)("div", {
                                  className: s().RemoveIcon,
                                  onClick: (K) => S(W, K),
                                  children: (0, t.jsx)(l.ffu, {}),
                                }),
                              !!x &&
                                (0, t.jsx)("img", {
                                  className: s().RemoveIcon,
                                  src: M.A,
                                  onClick: (K) => x(W, K),
                                }),
                            ],
                          }),
                      ],
                    }),
                    b == c.length &&
                      W == c.length - 1 &&
                      (0, t.jsx)(o, { width: V }),
                  ],
                },
                W,
              ),
            ),
          });
        }
        function o(n) {
          const { width: c } = n;
          return (0, t.jsx)("div", {
            className: I().DragHighlightContainer,
            children: (0, t.jsx)("div", {
              className: I().DragHighlight,
              style: { width: c },
            }),
          });
        }
      },
      51079: (O, B, e) => {
        "use strict";
        e.d(B, { Ay: () => g });
        var t = e(7850),
          u = e(90626),
          D = e(83482),
          v = e(3166),
          M = e(72865),
          p = e(77200);
        function g(s) {
          const { children: l, ...i } = s,
            C = (0, M.n9)(),
            E = u.useMemo(
              () => ({ ...D.Ay.GetDefaultParams(), ...C, ...i }),
              [
                C,
                i.domain,
                i.controller,
                i.method,
                i.submethod,
                i.feature,
                i.depth,
              ],
            );
          return (0, t.jsx)(M.nn, { ...E, children: l });
        }
        function I(s) {
          const { children: l } = s,
            i = React.useMemo(() => CStoreNavEvents.ParseSNR(Config.SNR), []);
          return jsx(NavEventContext, {
            ...CStoreLegacyNavEvents.GetDefaultParams(),
            ...i,
            children: l,
          });
        }
        function f(s) {
          const { children: l } = s,
            i = React.useMemo(
              () => GetOptionalConfigJSON("rgUTMParams", "application_config"),
              [],
            );
          return jsx(I, {
            children: jsx(StoreUTMContext, { ...(i || {}), children: l }),
          });
        }
      },
      19730: (O, B, e) => {
        "use strict";
        e.d(B, { Dq: () => M, NO: () => p, dm: () => v });
        var t = e(84346),
          u = e(39905);
        function D(g, I) {
          const f = I.bUseBinary1K ? 1024 : 1e3,
            s = f * f,
            l = s * f,
            i = l * f;
          return g > i
            ? { nNum: g / i, strPrefix: "Tera" }
            : g > l
              ? { nNum: g / l, strPrefix: "Giga" }
              : g > s
                ? { nNum: g / s, strPrefix: "Mega" }
                : g > f
                  ? { nNum: g / f, strPrefix: "Kilo" }
                  : { nNum: g, strPrefix: "" };
        }
        function v(g, I, f, s) {
          let l = I;
          typeof l == "number"
            ? (l = {
                nDigitsAfterDecimal: I,
                bUseBinary1K: f || f === void 0,
                bValueIsInBytes: !s,
                bValueIsRate: s,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (l = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...l,
              });
          const { nNum: i, strPrefix: C } = D(g, l),
            E = `#${C}${l.bValueIsInBytes ? "bytes" : "bits"}${l.bValueIsRate ? "_PerSecond" : ""}`;
          return u.Z.Localize(
            E,
            i.toLocaleString((0, t.J)(), {
              minimumFractionDigits: l.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: l.nDigitsAfterDecimal,
            }),
          );
        }
        function M(g, I = 0) {
          let f;
          return (
            I && (f = { maximumFractionDigits: I }),
            g ? g.toLocaleString((0, t.J)(), f) : "" + g
          );
        }
        function p(g) {
          return g > 1e9
            ? Math.trunc(g / 1e9).toString() + "B"
            : g > 1e6
              ? Math.trunc(g / 1e6).toString() + "M"
              : g > 1e3
                ? Math.trunc(g / 1e3).toString() + "K"
                : g.toString();
        }
      },
      52249: (O) => {
        O.exports = {
          Results: "_3mK1PrFPrbrn2M-BbAWsmL",
          LoadingContainer: "K7yNfrxTJs0QuoFtUfy0z",
          ResultRow: "_1QyQulOsH0dGeFUVgSa9ki",
          GameName: "_353QhAGCSYbIguu7o4DJgs",
          Label: "_3MUfh3QKRNr6qY0vEz3p04",
          AvatarImageCtn: "_3h9l9X-3dBSAhMflfovg2K",
          AvatarImage: "PBBKP18ULuCWFwYcEIOdW",
          AppSearchInputContainer: "oxxmBMFO82IJEm1H341Wd",
          AppSearchDLCCheckbox: "_1aduni8VCqZVqqDxyXb-pY",
        };
      },
      24089: (O) => {
        O.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      33645: (O) => {
        O.exports = {
          Bold: "_3cln317VYhwhE1fSeMCG48",
          Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
          Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
          TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
          Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
          Answer: "syKgzmlrcUIJHIBfWsn4h",
          Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
          Header2: "_6-VR2WCBCDupCcUN5INQM",
          Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
          Header4: "_3VHY5vmO07MFpoOgTB9eOi",
          Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
          CenterSpan: "zCnp-VELUMybbfxOD-ze9",
          SmallText: "WBzrd438Bd8Z3J-j_iglW",
          Underline: "GrhFWtBdrSZP611s1UqqT",
          Strike: "_3pK7sh9FYdigMXxcUVI4DY",
          Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
          Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
          SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
          DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
          BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
          QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
          PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
          Code: "_2ODaX8lO7DKLKke76c2Wya",
          CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
          List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
          OrderedList: "DojPxwyYpx3hwuPIaJPCq",
          ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
          HR: "-xPK0REpludHjRG8xQfih",
          Table: "_2CAsiFd9UHbUOqzd0e7ioe",
          NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
          TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
          TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
          EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
          ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
          ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
          EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
          ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
          ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
          LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
          Image: "_3K0NuxYUYncdQ-cNK7udMn",
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      83164: (O) => {
        O.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
      },
      66901: (O) => {
        O.exports = { bordered_live_stream_icon: "NSb2xMcNnPEMjPi1dr8KB" };
      },
      88376: (O) => {
        O.exports = {
          ModalConfirmDialog: "_1MwR7dU-J2CeRWYt9WfUJw",
          Header: "Y9lJcGdHP6m4TRcgHnzj2",
          Buttons: "_1Wq4E7gdTa-fjWrhWFQG7b",
        };
      },
      88208: (O) => {
        O.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      75358: (O) => {
        O.exports = {
          PopupScreenshotModal: "_39-iZ5ATgVu0Ji6MD3vGTs",
          PopupScreenshotContainer: "_1yPgn1HBK5eQLrfrG38h1X",
          PopupScreenshot: "_173h7V5UqdDhN-J2O-AKVt",
          ButtonCtn: "_3-4JG-Z1QyDXZaEByxvMvS",
          ButtonIcon: "_15gRxd1hdAQxSunAfg1PZ8",
          Disabled: "_3Mh6I7hT8HViCO91Q5Iech",
        };
      },
      34713: (O) => {
        O.exports = {
          SupportedPlatforms: "_33rQKLUJRiKbr34oQgUJSd",
          PlatformIndicator: "_1POD5IsW1vYfv9B_TuSiBd",
          Windows: "_3xTrz2wDDtzNFR58CQfSNa",
          SteamOS: "_1z6ASwnrVeCtYcPfPjiZZd",
          Mac: "_1FiaJi5I3_8ky2ppYqGqfr",
          DeckCompat: "GFz2Vhq20J9x6lqpaKy2G",
          Fill: "_39zOL0i8BdQ_RV-xE0zXDz",
          SteamDeckCompatLogo: "_2xju2qqP5744ItNt2uvbdT",
          SteamDeckCompatIcon: "_28xj3TU4bHvjyeVhlzCmRV",
          SteamDeckCompatVerified: "_3-OPVQMD-qkvAyt3Jntn9t",
          SteamDeckCompatPlayable: "_1EMxxDePjZh_-E7AH0yDym",
          SteamDeckCompatUnsupported: "_2qziiy9xhD4mLc1OgxQAAy",
          SteamDeckCompatUnknown: "I6YFAbL_5IYOTtedVwwPV",
          SteamOSCompatCompatible: "_2fVV0WviM21gsBt1Iz-Htx",
        };
      },
      8743: (O) => {
        O.exports = {
          ArtPreview: "_3793xvP87t1rZYbAQDC1pG",
          ArtNoArt: "_3WxfzmFYwb-rh8sn5VMFMl",
        };
      },
      48576: (O) => {
        O.exports = {
          StatusLineItemCtn: "V5SWm2fiBKJqCbPn7bpC0",
          StatusIcon: "_1DFlt9vB8DfZc84ZeQcrgT",
          StatusIconDone: "K_JWTc7pXC9lechbL_JMT",
          StatusNotDone: "zl6s26pUkMfMXmoMlJstY",
        };
      },
      33924: (O) => {
        O.exports = {
          OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
          OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
          OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
          EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
          OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
          EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
          ShowInWideMode: "RLbLb742gN095uDUITtIB",
          EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
          HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
          OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
          HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
          OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
          OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
          PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
          EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
          OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
          MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
          OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
          UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
          OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
          EventType: "_2BWwVF5N-3fDuJRblB6gHb",
          AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
          CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
          AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
          AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
          AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
        };
      },
      91291: (O) => {
        O.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
          TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
          TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
          Reason: "_2h0GKAYcXRP10ryZHFn79d",
          StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
          FadeIn: "_1xh0S-u1cc7_ADm8OLsN-i",
          fadeIn: "cEYXuP-T4izqJqayIpH0D",
          BackgroundAnimation: "_2_vb1-Pr1-2Gblfyxj023k",
          "ItemFocusAnim-darkerGrey-nocolor": "op3gqmHyESfHpHgPheRVq",
          "ItemFocusAnim-darkerGrey": "_12l58v9-cJk-169Qesl-e5",
          "ItemFocusAnim-darkGreySettings": "_2cAK7l3w0qC8uv5uzKjusc",
          "ItemFocusAnim-darkGrey": "_2uLjKVdzQQCodi_XH5ZPfi",
          "ItemFocusAnim-grey": "_3Za5duiaOuAcNrQJeEpjxD",
          "ItemFocusAnim-translucent-white-10": "_3wyVPtc4dD1Msi7wqRvJq3",
          "ItemFocusAnim-translucent-white-20": "_2v6guEab39IMo3I1kfiwXc",
          "ItemFocusAnimBorder-darkGrey": "_3SS0MMDROpRbR_hYLVjAcl",
          "ItemFocusAnim-green": "_3qjU-9ZS6bDpjjMAOYUhGm",
          focusAnimation: "_3-bYSIZZNIWgiOR__mB2jd",
          hoverAnimation: "_39oPHCcA4NgTm53rnykAtP",
        };
      },
      15736: (O) => {
        O.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      58855: (O) => {
        O.exports = {
          CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA",
          CompatIconFrame: "_3E70dZ6hSfFCmskaIzbgJp",
        };
      },
      67523: (O) => {
        O.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
      },
      21038: (O) => {
        O.exports = {
          PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
          SVG: "_3Mns5ZEBThi10kv9zwdCRr",
        };
      },
      41609: (O) => {
        O.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
    },
  ]);
})();
