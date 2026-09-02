/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [2455],
    {
      69787: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { Dx: () => c, Un: () => o, cn: () => Y });
        var e = a(90626);
        const c = (0, e.createContext)(null),
          o = () => (0, e.useContext)(c);
        function Y(M, ee) {
          return M ? M + "?t=" + ee : null;
        }
      },
      39376: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { Dn: () => Ie, O4: () => k, Ut: () => oe, p0: () => Ne });
        var e = a(41735),
          c = a.n(e),
          o = a(90626),
          Y = a(72604),
          M = a(44420),
          ee = a(34592),
          U = a(3166),
          L = a(10349);
        class ne {
          m_mapAppIDToPaymentPartners = new Map();
          m_mapAppIDToPromise = new Map();
          m_mapPackageIDToPaymentPartners = new Map();
          m_mapPackageIDToPromise = new Map();
          m_mapBundleIDToPaymentPartners = new Map();
          m_mapBundleIDToPromise = new Map();
          GetInfoForApp(O) {
            return this.m_mapAppIDToPaymentPartners.get(O);
          }
          BHasInfoForApp(O) {
            return this.m_mapAppIDToPaymentPartners.has(O);
          }
          GetInfoForPackage(O) {
            return this.m_mapPackageIDToPaymentPartners.get(O);
          }
          BHasInfoForPackage(O) {
            return this.m_mapPackageIDToPaymentPartners.has(O);
          }
          GetInfoForBundle(O) {
            return this.m_mapBundleIDToPaymentPartners.get(O);
          }
          BHasInfoForBundle(O) {
            return this.m_mapBundleIDToPaymentPartners.has(O);
          }
          GetInfoForStoreItem(O, E) {
            switch (E) {
              case M.c6.qI:
                return this.GetInfoForApp(O);
              case M.c6.RD:
                return this.GetInfoForPackage(O);
              case M.c6.xO:
                return this.GetInfoForBundle(O);
              default:
                return null;
            }
          }
          BHasInfoForStoreItem(O, E) {
            switch (E) {
              case M.c6.qI:
                return this.BHasInfoForApp(O);
              case M.c6.RD:
                return this.BHasInfoForPackage(O);
              case M.c6.xO:
                return this.BHasInfoForBundle(O);
              default:
                return !1;
            }
          }
          async LoadAppPartnerInfo(O) {
            return (
              this.m_mapAppIDToPromise.has(O) ||
                this.m_mapAppIDToPromise.set(
                  O,
                  this.InternalLoadAppPartnerInfo(O, null, null),
                ),
              this.m_mapAppIDToPromise.get(O)
            );
          }
          async LoadPackagePartnerInfo(O) {
            return (
              this.m_mapPackageIDToPromise.has(O) ||
                this.m_mapPackageIDToPromise.set(
                  O,
                  this.InternalLoadAppPartnerInfo(null, O, null),
                ),
              this.m_mapPackageIDToPromise.get(O)
            );
          }
          async LoadBundlePartnerInfo(O) {
            return (
              this.m_mapBundleIDToPromise.has(O) ||
                this.m_mapBundleIDToPromise.set(
                  O,
                  this.InternalLoadAppPartnerInfo(null, null, O),
                ),
              this.m_mapBundleIDToPromise.get(O)
            );
          }
          async LoadStoreItemPartnerInfo(O, E) {
            switch (E) {
              case M.c6.qI:
                return this.LoadAppPartnerInfo(O);
              case M.c6.RD:
                return this.LoadPackagePartnerInfo(O);
              case M.c6.xO:
                return this.LoadBundlePartnerInfo(O);
              default:
                return null;
            }
          }
          async InternalLoadAppPartnerInfo(O, E, Q) {
            let g = null;
            try {
              const w = { appid: O, packageid: E, bundleid: Q },
                Z =
                  U.TS.PARTNER_BASE_URL + "promotion/dailydeals/ajaxgetpartner",
                v = await c().get(Z, { params: w, withCredentials: !0 });
              if (v?.status == 200 && v.data?.success == Y.R)
                return O
                  ? (this.m_mapAppIDToPaymentPartners.set(
                      O,
                      v.data.partnerinfo,
                    ),
                    this.m_mapAppIDToPaymentPartners.get(O))
                  : E
                    ? (this.m_mapPackageIDToPaymentPartners.set(
                        E,
                        v.data.partnerinfo,
                      ),
                      this.m_mapPackageIDToPaymentPartners.get(E))
                    : (this.m_mapBundleIDToPaymentPartners.set(
                        Q,
                        v.data.partnerinfo,
                      ),
                      this.m_mapBundleIDToPaymentPartners.get(Q));
              g = (0, ee.H)(v);
            } catch (w) {
              g = (0, ee.H)(w);
            }
            return (
              console.error(
                "CPartnerPaymentStore.LoadAppPartnerInfo failed: " +
                  g?.strErrorMsg,
                g,
              ),
              null
            );
          }
          static s_Singleton;
          static Get() {
            return (
              ne.s_Singleton || (ne.s_Singleton = new ne()), ne.s_Singleton
            );
          }
          constructor() {}
        }
        function k(q) {
          return Ie(q, M.c6.qI);
        }
        function y(q) {
          return Ie(q, EStoreItemType.k_EStoreItemType_Package);
        }
        function $(q) {
          return Ie(q, EStoreItemType.k_EStoreItemType_Bundle);
        }
        function oe(q) {
          return Ie(q.id, (0, L.gy)(q));
        }
        function Ie(q, O) {
          const [E, Q] = o.useState(() => ne.Get().GetInfoForStoreItem(q, O));
          return (
            o.useEffect(() => {
              q
                ? !ne.Get().BHasInfoForStoreItem(q, O) || E == null
                  ? ne.Get().LoadStoreItemPartnerInfo(q, O).then(Q)
                  : ne.Get().BHasInfoForStoreItem(q, O) &&
                    E != ne.Get().GetInfoForStoreItem(q, O) &&
                    Q(ne.Get().GetInfoForStoreItem(q, O))
                : Q(null);
            }, [q, O, E]),
            E
          );
        }
        function Ne(q) {
          const [O, E] = (0, o.useState)(null);
          return (
            (0, o.useEffect)(() => {
              if (q?.length > 0) {
                const Q = q.map((g) =>
                  ne.Get().LoadStoreItemPartnerInfo(g, M.c6.qI),
                );
                Promise.all(Q).then(() => {
                  const g = new Map();
                  q.forEach((w) => {
                    ne.Get().BHasInfoForApp(w) &&
                      g.set(w, ne.Get().GetInfoForApp(w));
                  }),
                    E(g);
                });
              }
            }, [q]),
            O
          );
        }
      },
      33654: (re, Ue, a) => {
        "use strict";
        a.d(Ue, {
          Gx: () => M,
          _w: () => ne,
          ap: () => o,
          cG: () => L,
          iN: () => ee,
          pc: () => U,
          sq: () => Y,
        });
        var e = a(7850),
          c = a(18210);
        function o(k) {
          if (!k || k.trim().length == 0) return null;
          try {
            return JSON.parse(k);
          } catch {
            return null;
          }
        }
        function Y(k, y) {
          const $ = new Set();
          return k.filter((oe) => {
            const Ie = y(oe);
            return $.has(Ie) ? !1 : ($.add(Ie), !0);
          });
        }
        function M(...k) {
          return [...new Set(k.flat())];
        }
        function ee(k) {
          const { href: y, children: $ } = k;
          return y
            ? (0, e.jsx)("a", { ...k, children: $ })
            : (0, e.jsx)(e.Fragment, { children: $ });
        }
        function U(k, y) {
          const $ = {
              sText: (0, c.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable",
              ),
              sTooltip: (0, c.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description",
              ),
              bPrereleaseOrReleased: !1,
            },
            oe = {
              sText: (0, c.we)(
                "#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive",
              ),
              sTooltip: void 0,
              bPrereleaseOrReleased: !1,
            },
            Ie = {
              released: {
                sText: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released",
                ),
                sTooltip: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_released_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              prerelease: {
                sText: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease",
                ),
                sTooltip: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description",
                ),
                bPrereleaseOrReleased: !0,
              },
              ownersonly: {
                sText: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly",
                ),
                sTooltip: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              preloadonly: {
                sText: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly",
                ),
                sTooltip: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
              disabled: {
                sText: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled",
                ),
                sTooltip: (0, c.we)(
                  "#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description",
                ),
                bPrereleaseOrReleased: !1,
              },
            };
          let Ne = $;
          return k in Ie ? (Ne = Ie[k]) : y || (Ne = oe), Ne;
        }
        function L(k) {
          if (k.type == "seasonalsale") {
            const y = k.name.toLowerCase();
            if (y.includes("spring")) return "#dd71d4";
            if (y.includes("summer")) return "#29c6ec";
            if (y.includes("autumn")) return "#ac240c";
            if (y.includes("winter")) return "#01704f";
          }
        }
        function ne(k) {
          let y = 0;
          for (let Ne = 0; Ne < k.length; Ne++)
            y = k.charCodeAt(Ne) + ((y << 5) - y);
          const $ = y % 360,
            oe = 50 + (y % 50),
            Ie = 40 + (y % 30);
          return `hsl(${$}, ${oe}%, ${Ie}%, 0.25)`;
        }
      },
      42415: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { i: () => ie, q: () => N });
        var e = a(7850),
          c = a(44420),
          o = a(65946),
          Y = a(90626),
          M = a(76559),
          ee = a(813),
          U = a(33512),
          L = a(63854),
          ne = a(35038),
          k = a(20194);
        function y(T, K) {
          const F = (0, L.a)(),
            X = (0, Y.useMemo)(() => M.b.InitFromClanID(T), [T]),
            D = (0, k.I)({
              queryKey: ["eventdraftrecent", T, K],
              queryFn: async () => {
                const _ = ne.w.Init(U.FF);
                return (
                  _.Body().set_steamid(X.ConvertTo64BitString()),
                  K && _.Body().set_rtime_oldest_date(K),
                  (await U.oH.GetDraftAndRecentPartnerEventSnippet(F, _))
                    .Body()
                    .toObject().snippets
                );
              },
              enabled: !!T,
            });
          return (0, Y.useMemo)(
            () =>
              D.isLoading || !D.data
                ? null
                : D.data.sort((_, x) =>
                    _.hidden && x.hidden
                      ? _.published && !x.published
                        ? -1
                        : x.published && !_.published
                          ? 1
                          : (x.rtime32_start_time ?? 0) -
                            (_.rtime32_start_time ?? 0)
                      : _.hidden
                        ? -1
                        : x.hidden
                          ? 1
                          : x.rtime32_start_time - _.rtime32_start_time,
                  ),
            [D.data, D.isLoading],
          );
        }
        var $ = a(7582),
          oe = a(10349),
          Ie = a(40358),
          Ne = a(68094),
          q = a(36707),
          O = a(58534),
          E = a(56330),
          Q = a(85599),
          g = a(18210),
          w = a(98609),
          Z = a(11243),
          v = a(71421);
        function ie(T) {
          const { oEditableMessage: K } = T,
            [F] = (0, o.q3)(() => [K.GetStoreItemKey()]);
          return !F || F.item_type != "app"
            ? (0, e.jsx)("div", {
                className: E.ErrorStylesWithIcon,
                children:
                  "Error: Major Update does not support anything but targeting app",
              })
            : (0, e.jsx)(V, { oEditableMessage: K, idKey: F });
        }
        function V(T) {
          const { oEditableMessage: K, idKey: F } = T,
            [X, D] = (0, o.q3)(() => [
              K.GetUpdateEventClanAccountID(),
              K.GetUpdateEventGID(),
            ]),
            { data: z } = (0, Ie.J$)(
              (0, Ne.Jz)({ item_type: (0, oe.JK)(F.item_type), id: F.id }),
            ),
            _ = (0, Y.useMemo)(() => M.b.InitFromClanID(X), [X]),
            x = z?.type != c.uE.Vi ? z?.related_items?.parent_appid : void 0;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(N, {
                appid: x || F.id,
                selectedEventGID: D,
                fnSetUpdateEvent: K.SetUpdateEvent,
                label: (0, g.we)("#EventDropDown_MM_FeaturedEvent"),
                tooltip: (0, g.we)("#EventDropDown_MM_FeaturedEvent_ttip"),
                strUrlLearnMore:
                  "https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates",
              }),
              !!X &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("a", {
                      href: `${w.TS.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/edit/${D}`,
                      target: "_blank",
                      children: "open event for edit",
                    }),
                    "\xA0 \xA0",
                    (0, e.jsx)(v.Gq, {
                      toolTipContent:
                        "Once the event is published, go here to verify it is not awaiting moderation review. Games in the moderator review queue are not visible in the library",
                      children: (0, e.jsx)("a", {
                        href: `${w.TS.STORE_BASE_URL}events_admin/?selectedTags=vo_marketing_message&excludedTags=mod_reviewed&excludedTags=auto_migrated`,
                        target: "_blank",
                        children: "open event moderation tool",
                      }),
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("br", {}),
                  ],
                }),
            ],
          });
        }
        function N(T) {
          const {
              appid: K,
              selectedEventGID: F,
              fnSetUpdateEvent: X,
              label: D,
              tooltip: z,
              strUrlLearnMore: _,
              bFilterOutDrafts: x,
            } = T,
            S = (0, $.f1)(),
            { clanInfo: B, bLoadingClanInfo: J } = (0, ee.vF)(K),
            de = y(B?.clanAccountID, S - 720 * 60 * 60),
            ge = (0, Y.useMemo)(
              () => (x ? de?.filter((R) => !R.hidden) : de),
              [de, x],
            ),
            Ae = (0, Y.useMemo)(
              () =>
                ge
                  ? ge.map((R) => {
                      const Te = R.hidden
                        ? R.published
                          ? "#EventDropDown_HiddenPublish"
                          : "#EventDropDown_Hidden"
                        : "#EventDropDown_Visible";
                      return {
                        label: (0, g.we)(
                          Te,
                          (0, g.TW)(R.rtime32_start_time),
                          R.event_name,
                        ),
                        data: R,
                      };
                    })
                  : [],
              [ge],
            ),
            Fe = ge?.find((R) => R.gid === F);
          return !ge && (J || B?.appid)
            ? (0, e.jsx)(Q.t, {
                string: (0, g.we)("#Loading"),
                size: "small",
                position: "center",
              })
            : !ge || ge.length == 0
              ? (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)(O.JU, {
                      children: [D, " ", (0, e.jsx)(Z.o, { tooltip: z })],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, q.A)(E.ErrorStylesWithIcon, "ErrorCtn"),
                      children: (0, g.oW)(
                        "#EventDropDown_NoEventFound",
                        (0, e.jsx)("a", {
                          href: `${w.TS.COMMUNITY_BASE_URL}ogg/${K}/partnerevents`,
                          target: "_blank",
                        }),
                      ),
                    }),
                  ],
                })
              : (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!_ &&
                      (0, e.jsx)("a", {
                        href: _,
                        target: "_blank",
                        style: { float: "right" },
                        children: (0, g.we)(
                          "#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink",
                        ),
                      }),
                    (0, e.jsx)(O.m, {
                      label: D,
                      tooltip: z,
                      selectedOption: Fe,
                      onChange: (R) => X(B.clanAccountID, R.data.gid),
                      rgOptions: Ae,
                    }),
                  ],
                });
        }
      },
      2272: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { AS: () => S, KZ: () => de, c$: () => Oe });
        var e = a(7850),
          c = a(99412),
          o = a(41635),
          Y = a(86048),
          M = a(64868),
          ee = a(51614),
          U = a(69787),
          L = a(34604),
          ne = a(28410),
          k = a(90626),
          y = a(51746),
          $ = a(75806),
          oe = a(58534),
          Ie = a(25792),
          Ne = a(48127),
          q = a(249),
          O = a(1880),
          E = a(69168),
          Q = a(88003),
          g = a(83085),
          w = a(50660),
          Z = a(36118),
          v = a(85599),
          ie = a(71421),
          V = a(36707),
          N = a(82734),
          T = a(18210),
          K = a(82363),
          F = a(43104),
          X = a.n(F),
          D = a(14295),
          z = a(17616),
          _ = a(2259),
          x = a(3166);
        function S(Se) {
          const {
              src: ye,
              inLink: Me,
              setAttrs: W,
              focusView: pe,
              removeNode: xe,
              activeLanguage: ke,
              allowAnimations: He,
              mapValues: De,
              fnUpdateDocument: Pe,
              selected: be,
            } = Se,
            [Ke, Xe] = (0, Y.OP)(),
            [et, Qe] = (0, Y.OP)(),
            Ye = (0, M.DF)(Ke || et, 250),
            [st, Ve, tt] = (0, M.uD)(),
            kt = (0, ne.FD)(),
            ft = k.useCallback(() => {
              pe(), tt();
            }, [pe, tt]),
            _t = k.useMemo(
              () =>
                kt.find(
                  (Et) => (0, L.q3)(Et).toLowerCase() === ye.toLowerCase(),
                ),
              [ye, kt],
            ),
            Lt = _t ? (0, L.q3)(_t) : null,
            {
              elLocalizedImageGroupDialog: ut,
              elLocalizedImageGroupControl: is,
            } = B(_t, ke, pe),
            ot = (0, U.Un)(),
            $e = (Et) => {
              const Qt = Et.currentTarget;
              Qt.paused ? Qt.play() : Qt.pause();
            };
          let Yt;
          if (_t) {
            const Et = (0, L.IP)(_t, He, ke);
            if (Et) {
              const Qt = (0, L.Bv)(_t, ke),
                ps = (0, V.A)(F.ExtraAssetImg, be && F.Selected);
              Yt =
                Et.usage == L.nO
                  ? (0, e.jsx)(
                      "video",
                      {
                        className: ps,
                        src: (0, U.cn)(Et.url, ot),
                        title: Lt,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        onClick: $e,
                      },
                      Lt,
                    )
                  : (0, e.jsx)(
                      "img",
                      {
                        className: ps,
                        src: (0, U.cn)(Et.url, ot),
                        alt: Qt,
                        title: Lt,
                      },
                      Lt,
                    );
            } else
              Yt = (0, e.jsx)("span", {
                className: F.ExtraAssetError,
                children: (0, T.we)(
                  "#StoreAdmin_GameDescription_MissingImageLanguage",
                  ye,
                ),
              });
          } else
            Yt = (0, e.jsx)("span", {
              className: F.ExtraAssetError,
              children: (0, T.we)(
                "#StoreAdmin_GameDescription_MissingImage",
                ye,
              ),
            });
          const Nt = (Et, Qt) => {
              if (Qt) {
                const ps = new Map();
                for (const [Ks, $s] of De) {
                  const Ss = new RegExp(`${Lt}(?!\\w)`, "g"),
                    vs = $s.Value.replace(Ss, `${Et}`);
                  ps.set(Ks, vs);
                }
                Pe(ps);
              } else W({ src: Et });
            },
            [As, Gt] = k.useState(0),
            [Is, zs] = k.useState(0),
            Rt = (0, _.wY)((Et) =>
              Gt(Et.target.offsetLeft + Et.borderBoxSize[0].inlineSize),
            ),
            Ds = (0, _.wY)((Et) => zs(Et.borderBoxSize[0].inlineSize)),
            Vs = Is + 16 >= As,
            nn = Vs ? As : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              st &&
                (0, e.jsx)(ge, {
                  editAsset: Lt,
                  bReplace: !0,
                  onAssetSelected: Nt,
                  hideModal: ft,
                }),
              ut,
              (0, e.jsxs)("div", {
                ref: Rt,
                className: (0, V.A)({
                  [F.ExtraAssetImgTag]: !0,
                  [F.ExtraAssetControlsContainer]: !0,
                  [F.Hovered]: Ye,
                  [F.InDeprecatedLink]: Me,
                }),
                title: "",
                ...Xe,
                children: [
                  Me && (0, e.jsx)(J, {}),
                  (0, e.jsxs)("div", {
                    ref: Ds,
                    className: (0, V.A)(
                      F.ExtraAssetControls,
                      Vs && F.SmallImage,
                    ),
                    style: { left: nn },
                    ...Qe,
                    children: [
                      is,
                      (0, e.jsx)(w.ff, {
                        onClick: Ve,
                        tooltip: (0, T.we)(
                          "#StoreAdmin_GameDescription_ReplaceImage",
                        ),
                        children: (0, e.jsx)(q.ffu, {}),
                      }),
                      (0, e.jsx)(w.ff, {
                        onClick: xe,
                        tooltip: (0, T.we)(
                          "#StoreAdmin_GameDescription_RemoveImage",
                        ),
                        children: (0, e.jsx)(Z.X, {}),
                      }),
                    ],
                  }),
                  Yt,
                ],
              }),
            ],
          });
        }
        function B(Se, ye, Me) {
          const [W, pe, xe] = (0, M.uD)(),
            ke = k.useCallback(() => {
              Me?.(), xe();
            }, [Me, xe]);
          let He, De;
          return (
            (0, L.pN)(Se)
              ? ((He =
                  W &&
                  (0, e.jsx)(Fe, {
                    selectedAsset: Se,
                    hideModal: ke,
                    activeLanguage: ye,
                  })),
                (De = (0, e.jsx)(w.ff, {
                  onClick: pe,
                  tooltip: (0, T.we)(
                    "#StoreAdmin_GameDescription_EditImageDetails",
                  ),
                  children: (0, e.jsx)(Z.vCk, { className: "SVGIcon_Button" }),
                })))
              : (0, L.i$)(Se) &&
                (De = (0, e.jsx)(w.ff, {
                  onClick: () => {},
                  tooltip: (0, T.we)(
                    "#StoreAdmin_GameDescription_EditImageDetails_Legacy",
                  ),
                  children: (0, e.jsx)(Z.R2D, {}),
                })),
            {
              elLocalizedImageGroupDialog: He,
              elLocalizedImageGroupControl: De,
            }
          );
        }
        function J() {
          return (0, e.jsx)("span", {
            className: F.ImageLinkDisabledWarning,
            children: (0, e.jsx)("span", {
              className: F.TopBar,
              children: (0, e.jsx)(ie.Gq, {
                toolTipContent: (0, T.we)(
                  "#StoreAdmin_GameDescription_ImageLinkDisabled_Description",
                ),
                children: (0, e.jsx)("span", {
                  className: F.TopBarContent,
                  children: "Disabled",
                }),
              }),
            }),
          });
        }
        function de(Se) {
          const { nodeType: ye } = Se,
            { view: Me } = (0, w.wU)(),
            [W, pe, xe] = (0, M.uD)(),
            ke = k.useCallback(() => {
              xe(), Me.focus();
            }, [xe, Me]),
            He = k.useCallback(
              (De) => {
                Me.dispatch(
                  Me.state.tr.insert(
                    Me.state.selection.to,
                    ye.createChecked({ src: De }),
                  ),
                ),
                  ke();
              },
              [Me, ye, ke],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              W && (0, e.jsx)(ge, { onAssetSelected: He, hideModal: ke }),
              (0, e.jsx)(w.ff, {
                onClick: pe,
                toggled: W,
                tooltip: "#StoreAdmin_GameDescription_InsertImage",
                children: (0, e.jsx)(q._V3, {}),
              }),
            ],
          });
        }
        function ge(Se) {
          const {
              editAsset: ye,
              bReplace: Me,
              onAssetSelected: W,
              hideModal: pe,
            } = Se,
            xe = (0, ne.FD)(!0),
            [ke, He] = k.useState(ye),
            [De, Pe] = (0, g.Y0)(pe, L.SG),
            [be, Ke] = k.useState(!1),
            [Xe, et] = k.useState(""),
            Qe = k.useCallback(
              (Ye, st) => {
                Ye && (W(Ye, st), pe());
              },
              [W, pe],
            );
          return (0, e.jsxs)(E.E, {
            active: !0,
            children: [
              De,
              (0, e.jsx)(Q.x_, {
                onEscKeypress: pe,
                children: (0, e.jsxs)(oe.U9, {
                  classNameContent: F.ExtraAssetDialogContent,
                  children: [
                    (0, e.jsx)(oe.Y9, {
                      children: (0, T.we)(
                        "#StoreAdmin_GameDescription_SelectImage",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: F.ExtraAssetsDialogDescription,
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, T.we)(
                            "#StoreAdmin_GameDescription_ExistingImages",
                          ),
                        }),
                        (0, e.jsxs)("div", {
                          className: F.UploadButtonContainer,
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, T.we)(
                                "#StoreAdmin_ExtraAssetUpload_UploadNew",
                              ),
                            }),
                            (0, e.jsx)(oe.jn, {
                              className: F.UploadButton,
                              onClick: Pe,
                              children: (0, T.we)(
                                "#StoreAdmin_ExtraAssetUpload_BrowseForFile",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: F.ExtraAssetSearch,
                      children: (0, e.jsx)(oe.pd, {
                        type: "text",
                        value: Xe,
                        bShowClearAction: !0,
                        onChange: (Ye) => et(Ye.currentTarget.value || ""),
                        placeholder: (0, T.we)(
                          "#StoreAdmin_ExtraAssetUpload_SearchPlaceholder",
                        ),
                      }),
                    }),
                    (0, e.jsx)(oe.nB, {
                      className: F.ExtraAssetsGridDialog,
                      children: (0, e.jsx)("div", {
                        className: (0, V.A)(
                          F.ExtraAssetsGrid,
                          F.ExtraAssetsChooser,
                        ),
                        children: xe
                          .filter((Ye) => (0, L.q3)(Ye).includes(Xe))
                          .map((Ye) =>
                            (0, e.jsx)(
                              Ae,
                              {
                                extraAsset: Ye,
                                onSelectAsset: He,
                                onChooseAsset: (st) => Qe(st, be),
                                selected: (0, L.q3)(Ye) == ke,
                              },
                              (0, L.q3)(Ye),
                            ),
                          ),
                      }),
                    }),
                    (0, e.jsxs)(oe.wi, {
                      children: [
                        Me &&
                          (0, e.jsx)(oe.Yh, {
                            className: F.ReplaceAllCheck,
                            checked: be,
                            onChange: Ke,
                            label: (0, T.we)(
                              "#StoreAdmin_ExtraAssetUpload_ReplaceAll",
                            ),
                            tooltip: (0, T.we)(
                              "#StoreAdmin_ExtraAssetUpload_ReplaceAll_ttip",
                            ),
                          }),
                        (0, e.jsx)(oe.CB, {
                          onCancel: pe,
                          onOK: (Ye) => {
                            Ye.preventDefault(), Qe(ke, be);
                          },
                          bOKDisabled: !ke,
                          strOKText: (0, T.we)(
                            "#StoreAdmin_GameDescription_UseThisImage",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function Ae(Se) {
          const {
              extraAsset: ye,
              onSelectAsset: Me,
              onChooseAsset: W,
              selected: pe,
            } = Se,
            xe = k.useRef(null),
            ke = (0, L.q3)(ye);
          return (
            k.useLayoutEffect(() => {
              pe &&
                xe.current?.scrollIntoView({
                  block: "nearest",
                  inline: "nearest",
                });
            }, []),
            (0, e.jsx)("div", {
              ref: xe,
              className: (0, V.A)(F.ExtraAssetChoice, pe && F.Selected),
              title: ke,
              onClick: (He) => Me(ke),
              onDoubleClick: (He) => W(ke),
              children: (0, e.jsx)(we, { extraAsset: ye, controls: !1 }),
            })
          );
        }
        function Fe(Se) {
          const { selectedAsset: ye, activeLanguage: Me, hideModal: W } = Se;
          if ((Te(!ye, W), !!ye))
            return (0, e.jsx)(E.E, {
              active: !0,
              children: (0, e.jsx)(Q.x_, {
                onEscKeypress: W,
                children: (0, e.jsxs)(oe.U9, {
                  classNameContent: F.LocalizeAssetDialogContent,
                  children: [
                    (0, e.jsx)(oe.Y9, {
                      children: (0, T.we)(
                        "#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Title",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: F.LocalizeAssetsDialogDescription,
                      children: (0, e.jsx)("div", {
                        children: (0, T.we)(
                          "#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Desc",
                        ),
                      }),
                    }),
                    (0, e.jsxs)(oe.nB, {
                      children: [
                        (0, e.jsx)(fe, { onlyExtraAsset: ye }),
                        (0, e.jsx)(Ie.tH, {
                          children: (0, e.jsx)(R, {
                            extraAsset: ye,
                            activeLanguage: Me,
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)(oe.wi, {
                      children: (0, e.jsx)(oe.jn, {
                        onClick: W,
                        children: (0, T.we)("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              }),
            });
        }
        function R(Se) {
          const { extraAsset: ye, activeLanguage: Me } = Se,
            W = (0, L.wN)(ye),
            pe = (0, U.Un)(),
            xe = k.useCallback(
              (Ke) => (0, U.cn)((0, L.IP)(ye, !0, Ke)?.url, pe),
              [ye, pe],
            ),
            [ke, He] = k.useState(void 0),
            [De, Pe, be] = (0, M.uD)();
          return W
            ? (0, e.jsxs)("div", {
                children: [
                  De &&
                    (0, e.jsx)(Ze, {
                      extraAsset: ye,
                      deleteLang: ke,
                      hideModal: be,
                    }),
                  (0, e.jsx)($.z, {
                    rgAssetLangs: W,
                    initialLang: Me,
                    showDeleteAll: !1,
                    imageClassname: F.DisplayLocImage,
                    fnGetAssetUrl: xe,
                    fnDeletAssetLang: (Ke) => {
                      He(Ke), Pe();
                    },
                    fnDeleteAllAssets: () => {
                      He(void 0), Pe();
                    },
                  }),
                ],
              })
            : null;
        }
        function Te(Se, ye) {
          k.useEffect(() => {
            Se && ye();
          }, [Se, ye]);
        }
        function Oe(Se) {
          const { asset_mtime: ye, assets_list: Me } = Se,
            W = new Map(Me),
            pe = (0, ne.FD)(!0),
            xe = k.useMemo(() => o.WD(pe.filter(L.pN), L.K7), [pe]),
            ke = k.useMemo(
              () =>
                pe
                  .filter(L.pN)
                  .map((Qe) => ({
                    key: (0, L.K7)(Qe),
                    caption: (0, L.K7)(Qe),
                    mapAltText: Qe.alt_text,
                  })),
              [pe],
            ),
            He = (0, z.gU)(),
            [De, Pe, be] = (0, M.uD)(),
            { mutateAsync: Ke, isPending: Xe } = Le(),
            et = async (Qe, Ye) =>
              (await Ke({ strExtraAssetFileName: Qe, mapAltText: Ye })) !== !1;
          return (0, e.jsxs)(U.Dx.Provider, {
            value: ye,
            children: [
              De &&
                (0, e.jsx)(K.B, {
                  entries: ke,
                  isLoading: !1,
                  hideModal: be,
                  mutateAltTextAsync: et,
                  isMutatePending: Xe,
                  fnGetImage: (Qe, Ye) =>
                    (0, e.jsx)(we, {
                      extraAsset: xe.get(Qe),
                      caption: !1,
                      controls: !1,
                      primaryLanguage: Ye,
                      mapAssetsList: W,
                    }),
                }),
              pe.some(L.pN) &&
                (0, e.jsxs)("div", {
                  className: F.AltTextBtn,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, T.we)("#StoreAdmin_CustomImages_Title"),
                    }),
                    (0, e.jsx)(oe.jn, {
                      onClick: Pe,
                      children: (0, T.we)("#StoreAdmin_EditAltText_Button"),
                    }),
                  ],
                }),
              (0, e.jsx)("div", {
                className: F.ExtraAssetsPageList,
                children: (0, e.jsx)("div", {
                  className: F.ExtraAssetsGrid,
                  children: [...pe].map((Qe) =>
                    (0, e.jsx)(
                      we,
                      { extraAsset: Qe, primaryLanguage: He, mapAssetsList: W },
                      (0, L.q3)(Qe),
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(fe, {}),
            ],
          });
        }
        function fe(Se) {
          const { onlyExtraAsset: ye } = Se,
            Me = (0, ne.Y7)(),
            W = (0, D.L)(),
            pe = (Ke) => {
              const Xe = Ke
                ? [...Ke].reverse().find((et) => et.bSuccess)?.uploadResult
                : null;
              Xe && Me(Xe);
            },
            xe = (0, ne.FD)(),
            ke = k.useMemo(() => xe.filter(L.pN), [xe]),
            He = _e(ke);
          k.useEffect(() => {
            const Ke = (Xe) => ({
              baseFilename: (0, L.K7)(Xe),
              languages: (0, L.i$)(Xe) ? [c.Bhc] : (0, L.wN)(Xe),
            });
            W.SetExistingAssetGroups(ke.map(Ke), He),
              W.SetOnlyAssetGroup(ye ? Ke(ye) : null);
          }, [W, ke, ye, He]);
          const De = me(ye),
            { rgRealmList: Pe } = (0, ne.aJ)();
          let be;
          return (
            ye && !De
              ? (be = (0, T.we)(
                  "#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalNoSize",
                ))
              : ye && De
                ? (be = (0, T.we)(
                    "#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalWithSize",
                    De.width,
                    De.height,
                  ))
                : (be = (0, T.we)(
                    "#StoreAdmin_ExtraAssetUpload_Instructions_Base",
                  )),
            (0, e.jsx)("div", {
              children: (0, e.jsx)(Ne.O9, {
                imageUploader: W,
                rgRealmList: Pe,
                fnUploadComplete: pe,
                elOverrideDragAndDropText: be,
                elAdditonalButtons: (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: F.InstructionsForLocAssets,
                    children: (0, T.we)(
                      "#StoreAdmin_ExtraAssetUpload_Instructions_Note",
                    ),
                  }),
                }),
              }),
            })
          );
        }
        function _e(Se) {
          const [ye, Me] = k.useState(void 0),
            W = (0, U.Un)();
          return (
            k.useEffect(() => {
              const pe = Se.map(async (xe) => {
                let ke = (0, L.IP)(xe, !1, c.xPp);
                return (
                  ke || (ke = (0, L.IP)(xe, !0, c.xPp)),
                  (0, y.II)(
                    await (0, y.S2)((0, U.cn)(ke?.url, W), ke?.usage == L.nO),
                  )
                );
              });
              Promise.all(pe).then(Me);
            }, [Se, W]),
            ye
          );
        }
        function me(Se) {
          const ye = k.useMemo(() => (Se ? [Se] : []), [Se]),
            Me = _e(ye);
          return Me?.length > 0 ? Me[0] : void 0;
        }
        function we(Se) {
          const {
              extraAsset: ye,
              caption: Me = !0,
              controls: W = !0,
              primaryLanguage: pe,
              mapAssetsList: xe,
            } = Se,
            ke = k.useRef(void 0),
            He = (0, Y.BZ)(ke),
            [De, Pe, be] = (0, M.uD)(),
            Ke = (0, U.Un)(),
            Xe = (0, L.q3)(ye);
          let et;
          if ((0, L.i$)(ye)) {
            const ot = (0, L.IP)(ye, !1);
            et = ot ? [ot] : [];
          } else {
            const ot = pe == c.ZLm ? c.NFp : c.Bhc,
              $e = (0, L.wN)(ye).sort((Yt, Nt) => Ce(pe, ot, Yt, Nt));
            et = Array.from({ length: Math.min(3, $e.length) }).map((Yt, Nt) =>
              (0, L.IP)(ye, Nt == 0, $e[Nt]),
            );
          }
          const Qe = () => {
              window.open((0, U.cn)(et[0]?.url, Ke));
            },
            Ye = () => (0, N.OG)(Xe),
            st = (0, ne.TQ)(),
            {
              elLocalizedImageGroupDialog: Ve,
              elLocalizedImageGroupControl: tt,
            } = B(ye, null, null),
            kt = (ot) => {
              const $e = ot.currentTarget;
              $e.paused ? $e.play() : $e.pause();
            },
            ft = xe
              ? Array.from(xe).reduce(
                  (ot, [$e, Yt]) => (Yt.includes(Xe) ? [...ot, $e] : ot),
                  [],
                )
              : [],
            _t = 3,
            Lt = new Intl.ListFormat(T.pf.GetPreferredLocales(), {
              style: "long",
              type: "conjunction",
            }),
            ut = ft.map((ot) => (0, T.we)("#Language_" + ot)),
            is =
              ft.length <= 3
                ? Lt.format(ut)
                : Lt.format([
                    ...ut.slice(0, _t - 1),
                    (0, T.we)(
                      "#StoreAdmin_GameDescription_AssetsInUseOthers",
                      ft.length - _t + 1,
                    ),
                  ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              Ve,
              (0, e.jsxs)("div", {
                ref: ke,
                className: (0, V.A)(
                  F.ExtraAssetStack,
                  F.ExtraAssetControlsContainer,
                  He && F.Hovered,
                ),
                title: Xe,
                children: [
                  De && (0, e.jsx)(Ze, { extraAsset: ye, hideModal: be }),
                  W &&
                    (0, e.jsxs)("div", {
                      className: F.ExtraAssetControls,
                      title: "",
                      children: [
                        tt,
                        (0, e.jsx)(w.ff, {
                          onClick: Qe,
                          tooltip: (0, T.we)(
                            "#StoreAdmin_GameDescription_OpenInNewWindow",
                          ),
                          children: (0, e.jsx)(q.glU, {}),
                        }),
                        !st &&
                          (0, e.jsx)(w.ff, {
                            onClick: Ye,
                            tooltip: (0, T.we)(
                              "#StoreAdmin_GameDescription_CopyNameToClipboard",
                            ),
                            children: (0, e.jsx)(q.QRo, {}),
                          }),
                        ft.length == 0 &&
                          (0, e.jsx)(w.ff, {
                            onClick: Pe,
                            tooltip: (0, T.we)(
                              "#StoreAdmin_GameDescription_DeleteAsset",
                            ),
                            children: (0, e.jsx)(Z.X, {}),
                          }),
                        ft.length > 0 &&
                          (0, e.jsx)(w.ff, {
                            onClick: () => {},
                            tooltip: (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, T.we)(
                                  "#StoreAdmin_GameDescription_AssetsInUse1",
                                  is,
                                ),
                                (0, e.jsx)("br", {}),
                                (0, e.jsx)("br", {}),
                                (0, T.we)(
                                  "#StoreAdmin_GameDescription_AssetsInUse2",
                                ),
                              ],
                            }),
                            children: ft.length,
                          }),
                      ],
                    }),
                  (0, e.jsx)("div", {
                    className: F.StackedImageCtn,
                    children: et.map((ot, $e) =>
                      ot.usage == L.nO
                        ? (0, e.jsx)(
                            "video",
                            {
                              className: (0, V.A)(
                                F.StackedImage,
                                F[`Image-${$e}`],
                              ),
                              src: ot.url + "?t=" + Ke,
                              onDoubleClick: W ? Qe : void 0,
                              muted: !0,
                              loop: !0,
                              playsInline: !0,
                              autoPlay: !0,
                              onClick: kt,
                            },
                            ot.url + $e,
                          )
                        : (0, e.jsx)(
                            "img",
                            {
                              className: (0, V.A)(
                                F.StackedImage,
                                F[`Image-${$e}`],
                              ),
                              src: ot.url + "?t=" + Ke,
                              onDoubleClick: W ? Qe : void 0,
                            },
                            ot.url + $e,
                          ),
                    ),
                  }),
                  Me &&
                    (0, e.jsx)("div", {
                      className: F.ExtraAssetName,
                      children: (0, L.K7)(ye),
                    }),
                ],
              }),
            ],
          });
        }
        function Ce(Se, ye, Me, W) {
          if (Se != null) {
            if (Me == Se && W != Se) return -1;
            if (Me != Se && W == Se) return 1;
            if (Me == ye && W != ye) return -1;
            if (Me != ye && W == ye) return 1;
          }
          return Me - W;
        }
        function Ze(Se) {
          const { extraAsset: ye, deleteLang: Me, hideModal: W } = Se,
            { mutate: pe, isPending: xe, isSuccess: ke } = Be(),
            He = xe || ke;
          return (
            k.useEffect(() => {
              ke && W();
            }, [ke, W]),
            (0, e.jsx)(E.E, {
              active: !0,
              children: (0, e.jsx)(O.o0, {
                onOK: () => pe({ extraAsset: ye, eLang: Me }),
                bOKDisabled: He,
                strOKButtonText: (0, T.we)(
                  "#StoreAdmin_GameDescription_DeleteAsset",
                ),
                strTitle: (0, T.we)("#StoreAdmin_GameDescription_DeleteAsset"),
                strDescription: He
                  ? (0, e.jsx)(v.t, { position: "center", size: "medium" })
                  : (0, T.we)(
                      "#StoreAdmin_GameDescription_DeleteAsset_Confirm",
                    ),
                onCancel: W,
              }),
            })
          );
        }
        function Be() {
          const Se = (0, ne.Z3)("ajaxmodifyextraassets"),
            ye = (0, ne.Y7)();
          return (0, ee.n)({
            mutationFn: async ({ extraAsset: Me, eLang: W }) => {
              const pe = new FormData();
              pe.append("sessionid", (0, x.KC)()),
                pe.append("action", "delete"),
                pe.append("name", (0, L.K7)(Me)),
                (0, L.pN)(Me) &&
                  W != null &&
                  W != c.xPp &&
                  pe.append("lang", (0, c.LgB)(W));
              const xe = await fetch(Se, { method: "post", body: pe }),
                ke = await xe.json();
              if (!xe.ok) throw ke.errors?.join(" ") || "Error deleting asset";
              return ke;
            },
            onSuccess: (Me) => {
              ye(Me.rgExtraAssets);
            },
            onError: (Me) => {
              console.error(
                (0, T.we)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof Me == "string" ? Me : Me.message,
                ),
              );
            },
          });
        }
        function Le() {
          const Se = (0, ne.Z3)("ajaxmodifyextraassets"),
            ye = (0, ne.Y7)();
          return (0, ee.n)({
            mutationFn: async ({
              strExtraAssetFileName: W,
              mapAltText: pe,
            }) => {
              if (!W || !pe) return !1;
              const xe = new FormData();
              xe.append("sessionid", (0, x.KC)()),
                xe.append("action", "alt_text"),
                xe.append("name", W),
                xe.append(
                  "alt_text",
                  JSON.stringify(
                    Object.entries(pe).map(([De, Pe]) => ({
                      lang: De,
                      text: Pe,
                    })),
                  ),
                );
              const ke = await fetch(Se, { method: "post", body: xe }),
                He = await ke.json();
              if (!ke.ok) throw He.errors?.join(" ") || "Error deleting asset";
              return He;
            },
            onSuccess: (W) => {
              W !== !1 && ye(W.rgExtraAssets);
            },
            onError: (W) => {
              console.error(
                (0, T.we)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof W == "string" ? W : W.message,
                ),
              );
            },
          });
        }
      },
      14295: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { L: () => D });
        var e = a(90626),
          c = a(99412),
          o = a(14947),
          Y = a(3166),
          M = a(72849),
          ee = a(25279),
          U = a(9472),
          L = a(51746),
          ne = a(18210),
          k = a(38410),
          y = a(11243),
          $ = a(19730),
          oe = Object.defineProperty,
          Ie = Object.getOwnPropertyDescriptor,
          Ne = (z, _, x, S) => {
            for (
              var B = S > 1 ? void 0 : S ? Ie(_, x) : _, J = z.length - 1, de;
              J >= 0;
              J--
            )
              (de = z[J]) && (B = (S ? de(_, x, B) : de(B)) || B);
            return S && B && oe(_, x, B), B;
          };
        class q extends U.q {
          m_bLockedToSpecificAsset;
          m_fnGetImageOptions;
          m_nMaxFileSize;
          m_rgCurrentImageOptionKey = void 0;
          constructor(_, x, S, B, J, de, ge) {
            const Ae = (0, L.II)(de);
            super(S, B, J, de.src, Ae),
              (0, o.Gn)(this),
              (this.m_bLockedToSpecificAsset = _),
              (this.m_fnGetImageOptions = x),
              (this.m_nMaxFileSize = ge);
          }
          IsValidAssetType(_, x) {
            const S = this.GetCurrentImageOption(),
              B = S?.width ?? 0,
              J = S?.height ?? 0,
              de = x && x != this.fileType,
              ge = this.IsFileTypeSupported(this.fileType),
              Ae = this.BIsVideo() ? 1 : 0,
              Fe =
                B > 0 && J > 0
                  ? Math.abs(this.width - B) <= Ae &&
                    Math.abs(this.height - J) <= Ae
                  : !0,
              R = S?.bMismatchedNewSizes;
            let Te = "";
            ge
              ? de
                ? (Te = (0, ne.we)(
                    "#ImageUpload_InvalidFormat",
                    (0, L.EG)(x) ?? "",
                  ))
                : S?.groupName.trim().length > 0
                  ? this.file.size > this.m_nMaxFileSize &&
                    (Te = (0, ne.we)(
                      "#ImageUpload_ExceedsMaxFileSize",
                      (0, $.dm)(this.m_nMaxFileSize),
                    ))
                  : (Te = (0, ne.we)("#ImageUpload_EmptyBaseName"))
              : (Te = (0, ne.we)("#ImageUpload_InvalidFormatSelected"));
            const Oe = [],
              fe = [];
            return (
              !Fe && S
                ? fe.push(
                    (0, ne.we)("#ImageUpload_InvalidResolution", S.groupName),
                  )
                : R &&
                  S &&
                  fe.push(
                    (0, ne.we)(
                      "#ImageUpload_MismatchedResolution",
                      S.groupName,
                    ),
                  ),
              (S?.rgExistingLanguages?.length ?? 0) > 1 &&
                this.language &&
                S?.rgExistingLanguages.includes(this.language) &&
                Oe.push(
                  (0, ne.we)(
                    "#ImageUpload_ReplaceLanguage",
                    (0, ne.we)("#Language_" + (0, c.LgB)(this.language)),
                  ),
                ),
              {
                error: Te,
                messages: Oe,
                warnings: fe,
                needsCrop: !1,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BIsOriginalMinimumDimensions(_) {
            return !0;
          }
          FileTypeMatchesImageTypes(_) {
            return !0;
          }
          BIsVideo() {
            return ee.Ho.includes(this.fileType);
          }
          BSupportsLanguages() {
            return !0;
          }
          GetResizeDimension() {}
          get ImageOptions() {
            const _ = this.filename.lastIndexOf("."),
              x = _ != -1 ? this.filename.slice(0, _) : this.filename,
              S = this.m_fnGetImageOptions();
            return (
              this.m_bLockedToSpecificAsset ||
                S.find((B) => B.groupName == x) ||
                S.push({
                  sKey: x,
                  fnGetLabelText: () => x,
                  width: this.width,
                  height: this.height,
                  bEnforceDimensions: !1,
                  groupName: x,
                  bMismatchedNewSizes: !1,
                  rgExistingLanguages: [],
                }),
              S
            );
          }
          GetCurrentImageOptionKey() {
            return this.m_rgCurrentImageOptionKey;
          }
          GetCurrentImageOption() {
            const _ = this.m_fnGetImageOptions();
            if (this.m_rgCurrentImageOptionKey)
              return _.find((B) => B.sKey == this.m_rgCurrentImageOptionKey);
            const x = _.find(
              (S) =>
                S.groupName == (0, k.jj)(this.filename, c.xPp).baseFilename,
            );
            if (x) return x;
            if (_.length == 1) return _[0];
          }
          SetCurrentImageOption(_) {
            this.m_rgCurrentImageOptionKey = _?.sKey;
          }
          GetImageOptionLabel() {
            return e.createElement(
              "span",
              null,
              (0, ne.we)("#ImageUpload_ImageGroup"),
              e.createElement(y.o, {
                tooltip: (0, ne.we)("#ImageUpload_ImageGroup_ttip"),
              }),
            );
          }
          IsFileTypeSupported(_) {
            switch (_) {
              case M.bg.iS:
              case M.bg.dU:
              case M.bg.wD:
              case M.bg.CK:
              case M.bg.nn:
              case M.bg.pJ:
                return !0;
              default:
                return !1;
            }
          }
        }
        Ne([o.sH], q.prototype, "m_rgCurrentImageOptionKey", 2),
          Ne([o.EW], q.prototype, "ImageOptions", 1),
          Ne([o.XI], q.prototype, "SetCurrentImageOption", 1);
        var O = a(41735),
          E = a.n(O),
          Q = a(28410),
          g = a(7742),
          w = a(72604),
          Z = a(41635),
          v = a(71742),
          ie = a(27066),
          V = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          T = (z, _, x, S) => {
            for (
              var B = S > 1 ? void 0 : S ? N(_, x) : _, J = z.length - 1, de;
              J >= 0;
              J--
            )
              (de = z[J]) && (B = (S ? de(_, x, B) : de(B)) || B);
            return S && B && V(_, x, B), B;
          };
        const K = 100 * 1024 * 1024,
          F = 6 * 1024 * 1024;
        class X extends k.ss {
          m_cancel = void 0;
          m_urls;
          m_regexInvalidFilenameCharacters;
          m_filesToUpload = o.sH.array();
          m_onlyAssetGroup = void 0;
          m_rgExistingAssetGroups = void 0;
          m_rgImageSizes = void 0;
          constructor(_, x) {
            super(),
              (0, o.Gn)(this),
              (this.m_urls = _),
              (this.m_regexInvalidFilenameCharacters = x);
          }
          GetErrorsFromErrorResponse(_) {
            let x;
            const S = _?.response?.data?.errors;
            return (
              S
                ? (x = [
                    ...S.map((B, J) =>
                      e.createElement("span", { key: `error${J}` }, B),
                    ),
                    S?.length > 0
                      ? e.createElement("br", { key: "br" })
                      : void 0,
                    e.createElement(
                      "a",
                      {
                        href: "https://partner.steamgames.com/doc/store/page/assets#error",
                        key: "a",
                      },
                      (0, ne.we)(
                        "#StoreAdmin_ExtraAssetUpload_UnknownUploadFailure",
                      ),
                    ),
                  ])
                : console.error(
                    "CExtraAssetsImageUploader.UploadSingleImage failed with unknown error",
                    _,
                  ),
              x
            );
          }
          GetUploadImages() {
            return this.m_filesToUpload;
          }
          ClearImages() {
            this.m_filesToUpload = o.sH.array();
          }
          DeleteUploadImage(_) {
            const x = this.m_filesToUpload.findIndex(
              (S) => _.file == S.file && _.uploadTime == S.uploadTime,
            );
            x >= 0 &&
              (this.m_filesToUpload.splice(x, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]));
          }
          SetExistingAssetGroups(_, x) {
            (this.m_rgExistingAssetGroups = _), (this.m_rgImageSizes = x);
          }
          SetOnlyAssetGroup(_) {
            this.m_onlyAssetGroup = _;
          }
          async AddImageForLanguage(_, x) {
            if ((0, L.aL)(_.type) || (0, L.Uz)(_.type)) {
              const S = await (0, L.zB)(_, (0, L.Uz)(_.type));
              if (S) {
                const B = _.name
                    .toLowerCase()
                    .replace(this.m_regexInvalidFilenameCharacters, "_"),
                  J = new q(
                    !this.m_onlyAssetGroup,
                    () => this.GetImageOptions(),
                    _,
                    B,
                    x,
                    S,
                    K,
                  );
                return (
                  (this.m_filesToUpload = [...this.m_filesToUpload, J]), !0
                );
              }
            } else
              console.error(
                "AddImageForLanguage failed to determine file type, not image, video or subtitle",
                _,
                _.type,
              );
            return !1;
          }
          async UploadAllImages(_, x) {
            this.m_cancel = E().CancelToken.source();
            const S = 4,
              B = 300 * 1e3,
              J = (0, k.$l)(this.GetUploadImages(), _, x),
              de = J.map(
                (_e) => _e.GetCurrentImageOption()?.groupName ?? _e.filename,
              );
            let ge = 0;
            const Ae = new Map(),
              Fe = new Map();
            let R = 0;
            const Te = async () => {
              for (; R < J.length; ) {
                const _e = R++,
                  me = J[_e],
                  we = de[_e];
                (me.status = "uploading"), ge++;
                try {
                  const Ce = await this.StartImageUpload(
                    me,
                    we,
                    this.m_cancel.token,
                  );
                  if (Ce.bSuccess) {
                    const Ze = (0, g.x0)();
                    Ae.set(Ce.nRequestId, (Le) => Ze.resolve(Le));
                    const Be = new Promise((Le, Se) =>
                      setTimeout(() => Se(), B),
                    );
                    try {
                      const Le = await Promise.race([Be, Ze.promise]);
                      Fe.set(Ce.nRequestId, {
                        bSuccess: Le == w.R,
                        uploadImage: me,
                        strGroupName: we,
                        elErrorMessage:
                          Le == w.R
                            ? void 0
                            : (0, ne.we)("#MediaConvert_InternalError"),
                      });
                    } catch {
                      Fe.set(Ce.nRequestId, {
                        bSuccess: !1,
                        uploadImage: me,
                        strGroupName: we,
                        elErrorMessage: (0, ne.we)(
                          "#StoreAdmin_ExtraAssetUpload_Timeout",
                        ),
                      });
                    } finally {
                      Ae.delete(Ce.nRequestId);
                    }
                  } else
                    Oe.push({ bSuccess: !1, image: me, uploadResult: [] }),
                      (me.status = Ce.bSuccess ? "success" : "failed"),
                      (me.message =
                        !Ce.bSuccess && Ce.elErrorMessage
                          ? Ce.elErrorMessage
                          : "");
                } finally {
                  ge--;
                }
              }
            };
            Array.from({ length: Math.floor(S) }, () => Te());
            const Oe = [];
            for (;;) {
              if (Ae.size > 0) {
                const me = Array.from(Ae.keys()),
                  { bSuccess: we, rgStatus: Ce } = await this.CheckUploadStatus(
                    me,
                    this.m_cancel.token,
                  );
                if (we) {
                  for (const [Ze, Be] of Z.qQ(me, Ce))
                    if (Be != w._9) {
                      const Le = Ae.get(Ze);
                      Ae.delete(Ze), Le?.(Be);
                    }
                }
              }
              const _e = new Map(Fe);
              Fe.clear();
              for (const [
                me,
                {
                  bSuccess: we,
                  uploadImage: Ce,
                  strGroupName: Ze,
                  elErrorMessage: Be,
                },
              ] of _e) {
                if (!we) {
                  (Ce.status = "failed"),
                    (Ce.message = Be),
                    Oe.push({ bSuccess: !1, image: Ce, uploadResult: [] });
                  continue;
                }
                const Le = await this.CompleteUpload(
                  me,
                  Ze,
                  Ce.language,
                  this.m_cancel.token,
                );
                (Ce.status = Le.bSuccess ? "success" : "failed"),
                  (Ce.message = Le.bSuccess ? "" : Le.elErrorMessage),
                  Oe.push({
                    bSuccess: Le.bSuccess,
                    image: Ce,
                    uploadResult: [],
                  });
              }
              if (R >= J.length && ge == 0 && Fe.size == 0) break;
              this.m_cancel.token.throwIfRequested(), await (0, g.yI)(1e3);
            }
            const { rgExtraAssets: fe } = await this.GetExtraAssets(
              this.m_cancel.token,
            );
            return (
              Oe.filter((_e) => _e.bSuccess).forEach(
                (_e) => (_e.uploadResult = fe),
              ),
              Oe
            );
          }
          async StartImageUpload(_, x, S) {
            let B;
            if (_.file.size > F) {
              const J = new FormData();
              J.append("sessionid", (0, Y.KC)()),
                J.append("name", x),
                J.append("file_size", "" + _.file.size);
              const de = await this.MakePost(
                this.m_urls.strGetUploadUrlForAsset,
                J,
                { "Content-Type": "multipart/form-data" },
                "GetUploadUrl",
                S,
              );
              if (!de.bSuccess) return de;
              B = de.data;
              const ge = (0, L.N1)(
                { "Content-Type": "application/octet-stream" },
                B.headers_for_upload,
              );
              if (
                !(await E()
                  .put(B.upload_url, _.file, { headers: ge, cancelToken: S })
                  .then((Fe) => Fe.status == 200 || Fe.status == 201)
                  .catch(() => !1))
              )
                return (
                  console.warn(
                    "CExtraAssetsImageUploader put to CDNStorage url failed",
                    B.upload_url,
                  ),
                  { bSuccess: !1 }
                );
            }
            {
              const J = new FormData();
              J.append("sessionid", (0, Y.KC)()),
                J.append("asset_type", "extra_asset_v2"),
                J.append("name", x),
                B
                  ? J.append("temp_file_id", B.temp_file_id)
                  : J.append("file", _.file);
              const de = await this.MakePost(
                this.m_urls.strBeginConvert,
                J,
                { "Content-Type": "multipart/form-data" },
                "BeginUploadUrl",
                S,
              );
              if (!de.bSuccess) return de;
              const ge = de.data.request_id;
              return (
                (_.status = "processing"), { bSuccess: !0, nRequestId: ge }
              );
            }
          }
          async CheckUploadStatus(_, x) {
            const S = new FormData();
            S.append("sessionid", (0, Y.KC)()),
              S.append("request_ids", _.join(","));
            const B = await this.MakePost(
              this.m_urls.strCheckConvertStatus,
              S,
              void 0,
              "CheckUploadStatus",
              x,
            );
            return B.bSuccess ? { bSuccess: !0, rgStatus: B.data.status } : B;
          }
          async CompleteUpload(_, x, S, B) {
            const J = new FormData();
            J.append("sessionid", (0, Y.KC)()),
              J.append("request_id", _.toString()),
              J.append("name", x),
              J.append("asset_type", "extra_asset_v2"),
              S != c.xPp && J.append("language", (0, c.LgB)(S));
            const de = await this.MakePost(
              this.m_urls.strCompleteConvert,
              J,
              void 0,
              "CompleteUpload",
              B,
            );
            return de.bSuccess
              ? ((0, v.wT)(
                  de.data?.complete,
                  "CompleteUpload shouldn't be run until all uploads are complete",
                ),
                { bSuccess: !0 })
              : de;
          }
          async GetExtraAssets(_) {
            const x = new FormData();
            x.append("sessionid", (0, Y.KC)());
            const S = await this.MakePost(
              this.m_urls.strGetExtraAssets,
              x,
              void 0,
              "GetExtraAssets",
              _,
            );
            return S.bSuccess
              ? { bSuccess: !0, rgExtraAssets: S.data?.rgExtraAssets }
              : S;
          }
          async MakePost(_, x, S, B, J) {
            let de;
            try {
              const ge = await E().post(_, x, {
                withCredentials: !0,
                headers: S,
                cancelToken: J,
              });
              if (ge.status == 200 && typeof ge.data == "object") de = ge.data;
              else
                return (
                  console.warn(`CExtraAssetsImageUploader ${B} failed`, _),
                  { bSuccess: !1 }
                );
            } catch (ge) {
              const Ae = this.GetErrorsFromErrorResponse(ge);
              return (
                console.warn(`CExtraAssetsImageUploader ${B} failed`, _, Ae),
                { bSuccess: !1, elErrorMessage: Ae }
              );
            }
            return { bSuccess: !0, data: de };
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, ne.we)("#ImageUpload_CancelRequest"));
          }
          GetImageOptions() {
            const _ = (R, Te, Oe, fe, _e, me) => ({
                baseFilename: R,
                language: Te,
                bNew: Oe,
                size: { width: fe, height: _e },
                fileSize: me,
              }),
              x = [];
            for (const R of this.m_filesToUpload.filter(
              (Te) => Te.status == "pending" || (0, U.o)(Te.status),
            ))
              if (this.m_onlyAssetGroup)
                x.push(
                  _(
                    this.m_onlyAssetGroup.baseFilename,
                    R.language ?? c.Bhc,
                    !0,
                    R.width,
                    R.height,
                    R.file.size,
                  ),
                );
              else {
                const Te = (0, k.jj)(R.filename).baseFilename,
                  Oe = R.GetCurrentImageOptionKey() ?? Te;
                x.push(
                  _(
                    Oe,
                    R.language ?? c.Bhc,
                    !0,
                    R.width,
                    R.height,
                    R.file.size,
                  ),
                ),
                  Oe != Te &&
                    x.push(_(Te, c.xPp, !0, R.width, R.height, R.file.size));
              }
            const S = (R, Te) =>
              R.languages.map((Oe) =>
                _(R.baseFilename, Oe, !1, Te?.width ?? 0, Te?.height ?? 0, 0),
              );
            let B = this.m_rgExistingAssetGroups ?? [],
              J = this.m_rgImageSizes ?? [];
            if (this.m_onlyAssetGroup) {
              const R = B.findIndex(
                (Te) => Te.baseFilename == this.m_onlyAssetGroup.baseFilename,
              );
              (0, v.wT)(
                R != -1,
                "onlyAssetGroup isn't in the existing assets list",
              ),
                (B = [B[R]]),
                (J = [J[R]]);
            }
            const de = Z.qQ(B, J).flatMap(([R, Te]) => S(R, Te)),
              Ae = x.concat(de).reduce((R, Te) => {
                const Oe = R.get(Te.baseFilename) ?? [];
                return Oe.push(Te), R.set(Te.baseFilename, Oe), R;
              }, new Map()),
              Fe = [];
            for (const R of Ae.keys()) {
              const Te = Ae.get(R).filter((Le) => Le.language != c.xPp),
                Oe = new Set(Te.map((Le) => Le.language)).size,
                fe =
                  Oe > 1
                    ? (0, ne.Yp)(
                        "#StoreAdmin_ExtraAssetUpload_LocalizeGroup",
                        Oe,
                        R,
                      )
                    : R,
                _e = new Map();
              for (let Le of Te.filter((Se) => !Se.bNew).concat(
                Te.filter((Se) => Se.bNew),
              ))
                _e.set(Le.language, Le);
              const me = Array.from(_e.values()).filter((Le) => !Le.bNew),
                we = me.length > 0 ? me[0].size : void 0,
                Ce = Te.filter((Le) => Le.bNew).at(0)?.size,
                Ze = Te.filter((Le) => Le.bNew).some(
                  (Le) =>
                    Le.size.width != Ce.width || Le.size.height != Ce.height,
                ),
                Be = {
                  sKey: R,
                  fnGetLabelText: () => fe,
                  width: we?.width ?? 0,
                  height: we?.height ?? 0,
                  bEnforceDimensions: !1,
                  groupName: R,
                  bMismatchedNewSizes: Ze,
                  rgExistingLanguages: Te.filter((Le) => !Le.bNew).map(
                    (Le) => Le.language,
                  ),
                };
              Fe.push(Be);
            }
            return (
              Fe.sort((R, Te) =>
                R.sKey < Te.sKey ? -1 : R.sKey > Te.sKey ? 1 : 0,
              ),
              Fe
            );
          }
        }
        T([o.sH], X.prototype, "m_filesToUpload", 2),
          T([o.sH], X.prototype, "m_onlyAssetGroup", 2),
          T([o.sH], X.prototype, "m_rgExistingAssetGroups", 2),
          T([o.sH], X.prototype, "m_rgImageSizes", 2),
          T([ie.o], X.prototype, "GetUploadImages", 1),
          T([ie.o], X.prototype, "ClearImages", 1),
          T([ie.o], X.prototype, "DeleteUploadImage", 1),
          T([o.XI], X.prototype, "SetExistingAssetGroups", 1),
          T([o.XI], X.prototype, "SetOnlyAssetGroup", 1),
          T([ie.o], X.prototype, "AddImageForLanguage", 1);
        function D() {
          const z = (0, Q.Z3)("ajaxgetextraassets"),
            _ = (0, Q.Z3)("ajaxgetuploadurlforasset"),
            x = (0, Q.Z3)("ajaxbeginconvertassetasync"),
            S = (0, Q.Z3)("ajaxcheckconvertassetsstatus"),
            B = (0, Q.Z3)("ajaxtrytocompleteconvertasset"),
            J = e.useMemo(
              () => ({
                strGetExtraAssets: z,
                strGetUploadUrlForAsset: _,
                strBeginConvert: x,
                strCheckConvertStatus: S,
                strCompleteConvert: B,
              }),
              [z, _, x, S, B],
            ),
            { regexInvalidFilenameCharacters: de } = (0, Q.L4)();
          return e.useMemo(() => new X(J, de), [J, de]);
        }
      },
      34604: (re, Ue, a) => {
        "use strict";
        a.d(Ue, {
          Bv: () => oe,
          FZ: () => y,
          IP: () => $,
          K7: () => Ne,
          SG: () => O,
          TQ: () => q,
          ar: () => L,
          i$: () => M,
          nO: () => Y,
          pN: () => ee,
          q3: () => U,
          wN: () => Ie,
        });
        var e = a(99412),
          c = a(69787);
        const o = 0,
          Y = 1;
        function M(E) {
          return E && !ee(E);
        }
        function ee(E) {
          return E && "extra_asset_name" in E;
        }
        function U(E) {
          if (E) return M(E) ? E.name : E.extra_asset_name;
        }
        function L(E, Q) {
          if (!E?.encodings) return null;
          if (E.encodings.some((Z) => Z.extension.startsWith("poster."))) {
            let Z;
            if (
              (Q
                ? ((Z = E.encodings.find(
                    (v) => !v.extension.startsWith("poster."),
                  )),
                  document
                    .createElement("video")
                    .canPlayType("video/webm;codecs=vp9") &&
                    (Z = E.encodings?.find((v) => v.extension === "webm") ?? Z))
                : (Z = E.encodings.find((v) =>
                    v.extension.startsWith("poster."),
                  )),
              Z)
            )
              return { url: Z.url, usage: ne(Z.extension) };
          }
          const w = E.encodings[0];
          return w ? { url: w.url, usage: ne(w.extension) } : null;
        }
        function ne(E) {
          switch (E) {
            case "mp4":
            case "webm":
              return Y;
          }
          return o;
        }
        function k(E, Q) {
          if (!E || Object.keys(E).length == 0) return null;
          if (Object.keys(E).length == 1) return Object.values(E).at(0);
          let g = E[(0, e.LgB)(Q)];
          if (g) return g;
          const w = Q == e.ZLm ? e.NFp : e.Bhc;
          return (g = E[(0, e.LgB)(w)]), g || (Q == e.xPp ? E[0] : null);
        }
        function y(E, Q = e.Bhc, g = 0) {
          const w = $(E, !1, Q);
          return w ? (0, c.cn)(w.url, g) : null;
        }
        function $(E, Q, g = e.Bhc) {
          if (!E) return;
          if (M(E)) return { url: E.url, usage: o };
          const w = k(E.images, g);
          return w ? L(w, Q) : null;
        }
        function oe(E, Q = e.Bhc) {
          return E ? (M(E) ? E.name : E.alt_text?.[(0, e.LgB)(Q)]) : void 0;
        }
        function Ie(E) {
          return (
            (E?.images && Object.keys(E.images).map((Q) => (0, e.sfN)(Q))) ?? []
          );
        }
        function Ne(E) {
          return E
            ? (M(E) ? E.name : E.extra_asset_name).replace(
                /^\{STEAM_APP_IMAGE\}\/extras\//,
                "",
              )
            : void 0;
        }
        function q(E) {
          return `{STEAM_APP_IMAGE}/extras/${E}`;
        }
        const O =
          "image/png, image/jpeg, image/gif, image/webp, video/mp4, video/webm";
      },
      17616: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { KC: () => q, eE: () => v, gU: () => Z, jy: () => Ne });
        var e = a(7850),
          c = a(90626),
          o = a(58534),
          Y = a(8323),
          M = a(36707),
          ee = a(86048),
          U = a(64868),
          L = a(98609),
          ne = a(97982),
          k = a.n(ne),
          y = a(99412),
          $ = a(50109);
        const oe = "v_StoreAdminLanguageChange",
          Ie = c.createContext(void 0);
        function Ne(ie) {
          const [V, N] = c.useState(),
            T = c.useMemo(
              () => ({ strActiveLanguage: V, setActiveLanguage: N }),
              [V],
            );
          return (
            c.useEffect(() => {
              V &&
                window.LocChangeControlsToLanguage &&
                window.LocChangeControlsToLanguage(V);
            }, [V]),
            (0, ee.l6)(
              window,
              oe,
              c.useCallback((K) => {
                K.detail.strLanguage && N(K.detail.strLanguage);
              }, []),
            ),
            (0, e.jsx)(Ie.Provider, { value: T, children: ie.children })
          );
        }
        function q(ie, V, N, T) {
          const K = c.useMemo(() => Array.from(ie.keys()), [ie]),
            [F] = c.useState(() => {
              const J = new Map(V);
              return new Map(K.map((de) => [de, (0, Y.Jc)(J.get(de) || "")]));
            }),
            X = c.useContext(Ie),
            [D, z] = c.useState(() => w(F.size ? F : ie)),
            _ = X?.strActiveLanguage ?? D,
            x = c.useCallback(
              (J) => {
                X?.setActiveLanguage(J), z(J);
              },
              [X],
            ),
            S = (0, e.jsx)(O, {
              mapLanguages: ie,
              mapValues: F,
              strActiveLanguage: _,
              setActiveLanguage: x,
            }),
            B =
              !!(N && T) &&
              (0, e.jsx)(Q, {
                rgLanguages: K,
                mapValues: F,
                namePrefix: N,
                rgPath: T,
              });
          return {
            strActiveLanguage: _,
            mapValues: F,
            rctLanguageSelect: S,
            rgLanguages: K.map(y.sfN),
            rctHiddenInputs: B,
            setActiveLanguage: x,
          };
        }
        function O(ie) {
          const {
              mapLanguages: V,
              mapValues: N,
              strActiveLanguage: T,
              setActiveLanguage: K,
            } = ie,
            F = c.useMemo(() => {
              let D = [];
              return (
                V.forEach((z, _) => {
                  D.push({
                    data: _,
                    label: (0, e.jsx)(E, {
                      strLocLanguage: z,
                      value: N.get(_),
                    }),
                  });
                }),
                D
              );
            }, [V, N]),
            X = c.useCallback((D) => K(D.data), [K]);
          return (0, e.jsx)(o.m, {
            strClassName: ne.LanguageSelect,
            onChange: X,
            selectedOption: T,
            rgOptions: F,
          });
        }
        function E(ie) {
          const { strLocLanguage: V, value: N } = ie,
            [T, K] = c.useState(() => !!N?.Value?.trim()),
            F = c.useCallback((X) => K(!!X.trim()), []);
          return (
            (0, U.x2)(N, F),
            c.useEffect(() => F(N.Value), [F, N]),
            (0, e.jsx)("span", {
              className: (0, M.A)(ne.LanguageOption, T && ne.HasValue),
              children: V,
            })
          );
        }
        function Q(ie) {
          const { rgLanguages: V, mapValues: N, namePrefix: T, rgPath: K } = ie;
          return V.map((F) =>
            (0, e.jsx)(
              g,
              { language: F, value: N.get(F), namePrefix: T, rgPath: K },
              F,
            ),
          );
        }
        const g = c.memo(function (V) {
          const { language: N, value: T, namePrefix: K, rgPath: F } = V,
            X = (0, U.gc)(T) || "",
            D = K + [...F, N].map((z) => `[${z}]`).join("");
          return (0, e.jsx)("input", { type: "hidden", name: D, value: X });
        });
        function w(ie) {
          return ie.has(L.TS.LANGUAGE)
            ? L.TS.LANGUAGE
            : ie.has("english")
              ? "english"
              : ie.keys().next().value;
        }
        function Z() {
          const ie = c.useContext(Ie);
          return (0, y.sfN)(ie?.strActiveLanguage, y.Bhc);
        }
        function v(ie) {
          const {
              strActiveLanguage: V,
              mapValues: N,
              rctLanguageSelect: T,
              setActiveLanguage: K,
            } = q(ie, [], null, null),
            F = (0, y.sfN)(V, y.Bhc);
          return (
            c.useEffect(() => {
              $.O.Get().SetCurEditLanguage(F);
            }, [F]),
            (0, U.hL)($.O.Get().GetCallback(), (X) => K((0, y.LgB)(X))),
            {
              strActiveLanguage: V,
              eActiveLang: F,
              rctLanguageSelect: T,
              mapValues: N,
            }
          );
        }
      },
      77181: (re, Ue, a) => {
        "use strict";
        a.r(Ue), a.d(Ue, { StoreAppPageHeader: () => ks, default: () => Ms });
        var e = a(7850),
          c = a(38585),
          o = a(64868),
          Y = a(98724),
          M = a(52893),
          ee = a(8145),
          U = a(57053),
          L = a(71742);
        class ne {
          m_nodes = [];
          m_schema;
          m_bConvertNewlinesToBR;
          m_fnProcessText;
          constructor(d, f, j) {
            (this.m_schema = d),
              (this.m_bConvertNewlinesToBR = f?.bConvertNewlinesToBR ?? !1);
            const I = j && "mark" in j;
            this.m_fnProcessText = I ? void 0 : f?.fnProcessText;
          }
          AppendText(d, f) {
            d.length &&
              (this.m_bConvertNewlinesToBR
                ? this.m_nodes.push(...this.GenerateBreaksForNewlines(d))
                : this.m_nodes.push(...this.TextNode(d)));
          }
          AppendNode(d) {
            this.m_nodes.push(d);
          }
          GetElements() {
            return this.m_nodes;
          }
          GenerateBreaksForNewlines(d) {
            const f = [];
            let j = 0;
            for (
              let I = d.indexOf(
                `
`,
                j,
              );
              I !== -1;
              I = d.indexOf(
                `
`,
                j,
              )
            )
              j != I && f.push(...this.TextNode(d.substring(j, I))),
                f.push(this.m_schema.nodes.hard_break.createChecked()),
                (j = I + 1);
            return j < d.length && f.push(...this.TextNode(d.substring(j))), f;
          }
          TextNode(d) {
            const f = this.m_fnProcessText && this.m_fnProcessText(d);
            return f || [this.m_schema.text(d)];
          }
        }
        function k(p) {
          return p
            .filter((d) => d.isText)
            .map((d) => d.text)
            .join();
        }
        function y(p) {
          let d = "";
          return (
            p.descendants((f) => {
              f.isText && (d += f.text);
            }),
            d
          );
        }
        class $ extends ee.Al {
          m_schemaConfig;
          m_mapPMBBNodes = new Map();
          m_bUseBackslashEscapes;
          constructor(d, f) {
            super(d.bbcode_dictionary, (j) => {
              const I = j?.tag && d.bbcode_dictionary.get(j.tag);
              return new ne(
                d.pm_schema,
                f,
                I && "Constructor" in I ? I.Constructor : void 0,
              );
            }),
              (this.m_schemaConfig = d),
              (this.m_bUseBackslashEscapes = f?.bUseBackslashEscapes ?? !0),
              this.m_schemaConfig.bbcode_dictionary.forEach((j) => {
                "node" in j.Constructor &&
                  this.m_mapPMBBNodes.set(
                    j.Constructor.node.name,
                    j.Constructor,
                  );
              });
          }
          get schema() {
            return this.m_schemaConfig.pm_schema;
          }
          ParseBBCode(d) {
            const f = this.Parse(
              d,
              this.BBNodeToPMNode.bind(this),
              this.m_bUseBackslashEscapes,
            );
            return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
              {},
              this.ConvertLineBreaksToParagraphs(U.FK.fromArray(f)),
            );
          }
          TryCreateNode(d, f, j) {
            let I = U.FK.from(f),
              se;
            if (
              !d.node.validContent(I) &&
              (d.node.isInline ||
                (I = U.FK.from(
                  f.filter((H) =>
                    H.isText && H.text.match(/^\s*$/)
                      ? !1
                      : !(
                          H.type == this.schema.nodes.hard_break &&
                          !d.node.validContent(U.FK.from(H))
                        ),
                  ),
                )),
              !d.node.validContent(I))
            ) {
              const H = d.acceptNode;
              se = [];
              let ae = [],
                te = !1,
                ce = !1;
              for (let ve = 0; ve < I.childCount; ve++) {
                const Re = I.child(ve),
                  je = U.FK.from(Re),
                  We = d.node.validContent(je);
                !ce && (We || H?.validContent(je))
                  ? (We || (te = !0), ae.push(Re))
                  : ((ce = !0), se.push(Re));
              }
              if ((console.assert(!te || !!H), te && H)) {
                H.isBlock &&
                  ae.length > 1 &&
                  ae[ae.length - 1].type == this.schema.nodes.hard_break &&
                  (ae = ae.slice(0, -1));
                const ve = this.m_mapPMBBNodes.get(H.name);
                (0, L.wT)(
                  ve,
                  `Indicated acceptNode type ${H.name} for ${d.node.name} missing`,
                );
                let Re;
                try {
                  ve
                    ? (Re = this.TryCreateNode(ve, ae, void 0))
                    : (Re = H.createChecked(void 0, ae));
                } catch (je) {
                  console.error(je), (Re = []), (se = [...ae, ...se]);
                }
                I = U.FK.from(Re);
              } else I = U.FK.from(ae);
            }
            try {
              const H =
                d.node.createAndFill(j, I) || d.node.createChecked(j, I);
              return se ? [H, ...se] : H;
            } catch {
              return (
                (0, L.wT)(
                  !1,
                  `Invalid content for node type ${d.node.name}, removing and promoting children.`,
                ),
                f
              );
            }
          }
          BBNodeToPMNode(d, f, ...j) {
            let I = d.BBArgsToAttrs ? d.BBArgsToAttrs(f.args || {}) : void 0;
            try {
              if (
                ("convertContentToAttr" in d &&
                  d.convertContentToAttr &&
                  ((!I || !I[d.convertContentToAttr]) &&
                    (I = { ...(I || {}), [d.convertContentToAttr]: k(j) }),
                  "node" in d && (j = [])),
                "node" in d)
              )
                return this.TryCreateNode(d, j, I);
              {
                const se = d.mark.create(I);
                return j.map((H) => this.RecursivelyApplyMark(H, se));
              }
            } catch (se) {
              return (
                console.error(`Error parsing [${f.tagname}] tag: ${se}`, se), []
              );
            }
          }
          RecursivelyApplyMark(d, f) {
            if (d.isText || d.type.allowsMarkType(f.type))
              return d.mark([...d.marks, f]);
            {
              const j = [];
              return (
                d.descendants(
                  (I) => (j.push(this.RecursivelyApplyMark(I, f)), !1),
                ),
                d.type.create(d.attrs, j, d.marks)
              );
            }
          }
          ConvertLineBreaksToParagraphs(d) {
            const f = new Map(),
              j = this.m_schemaConfig.pm_schema;
            this.m_mapPMBBNodes.forEach((H) => {
              H.acceptNode && f.set(H.acceptNode.name, H.node);
            });
            const I = [],
              se = {
                nodes: [],
                nodeType: void 0,
                reset() {
                  (this.nodes = []), (this.nodeType = void 0);
                },
                accumulate(H, ae) {
                  return (
                    this.nodeType && H != this.nodeType && this.emit(),
                    (this.nodeType = H),
                    this.nodes.push(ae),
                    !0
                  );
                },
                emit(H = !1) {
                  const ae = this.nodeType || (H ? j.nodes.paragraph : void 0);
                  ae &&
                    (I.push(ae.createChecked({}, this.nodes)), this.reset());
                },
              };
            return (
              d.forEach((H) => {
                const ae = H.type == j.nodes.hard_break,
                  te = U.FK.from(H);
                if (ae || j.topNodeType.validContent(te)) {
                  const ce = ae && se.nodes.length > 0;
                  se.emit(),
                    ae
                      ? ce || I.push(j.nodes.paragraph.createChecked())
                      : I.push(H);
                } else {
                  let ce;
                  if (
                    (j.nodes.paragraph.validContent(te)
                      ? (ce = j.nodes.paragraph)
                      : (ce = f.get(H.type.name)),
                    ce)
                  )
                    se.accumulate(ce, H);
                  else {
                    (0, L.wT)(
                      !1,
                      `Couldn't accept ${H.type.name} at root of document, converting to paragraph`,
                    );
                    const ve = y(H);
                    ve && se.accumulate(j.nodes.paragraph, j.text(ve));
                  }
                }
              }),
              (se.nodes.length || !I.length) && se.emit(!0),
              U.FK.from(I)
            );
          }
        }
        function oe(p, d, f) {
          const j = {
            schema: d.pm_schema,
            config: d.pm_to_bbcode_config,
            bUseBackslashEscapes: f?.bUseBackslashEscapes ?? !0,
          };
          return Ie(j, p, [], !1);
        }
        function Ie(p, d, f, j) {
          const { schema: I, config: se } = p;
          let H = d.marks,
            ae = "";
          const te = se.mapNodes.get(d.type),
            { tag: ce, args: ve } = E(te, d);
          ce == "emoticon"
            ? (ae += ":")
            : ce && (ae += (0, ee.CS)(ce, ve, te?.bVerbatimArgs));
          const Re = j || !!te?.bVerbatimContent;
          let je = !1;
          return (
            d.content.forEach((We) => {
              if (
                (([ae, H] = q(se, H, We.marks, ae)),
                ([ae, H] = O(se, H, We.marks, ae)),
                We.type.isText)
              ) {
                const Ge = We.text || "";
                ae += Re || !p.bUseBackslashEscapes ? Ge : (0, ee.vE)(Ge);
              } else if (We.type == I.nodes.hard_break)
                ae += `
`;
              else {
                const Ge = Ne(se, We);
                Ge &&
                  je &&
                  (ae += `
`),
                  (ae += Ie(p, We, H, Re)),
                  (je = Ge);
                return;
              }
              je = !1;
            }),
            ([ae] = q(se, H, f, ae)),
            ce == "emoticon" ? (ae += ":") : ce && (ae += (0, ee.op)(ce)),
            ae
          );
        }
        function Ne(p, d) {
          return d.type.isBlock && !E(p.mapNodes.get(d.type), d).tag;
        }
        function q(p, d, f, j) {
          const I = [];
          for (const H of d) f.indexOf(H) === -1 && I.push(H);
          if (!I.length) return [j, d];
          const se = d.slice();
          for (
            ;
            I.length &&
            ((0, L.wT)(se.length, "no marks left to close"), !!se.length);
          ) {
            const H = se.pop(),
              ae = p.mapMarks.get(H.type),
              { tag: te } = Q(ae, H);
            j += (0, ee.op)(te);
            const ce = I.indexOf(H);
            ce != -1 && I.splice(ce, 1);
          }
          return [j, se];
        }
        function O(p, d, f, j) {
          let I;
          for (const se of f)
            if (d.indexOf(se) === -1) {
              I || (I = d.slice());
              const H = p.mapMarks.get(se.type);
              if (((0, L.wT)(H, "mark missing bbtag"), H)) {
                I.push(se);
                const { args: ae, tag: te } = Q(H, se);
                j += (0, ee.CS)(te, ae);
              }
            }
          return [j, I ?? d];
        }
        function E(p, d) {
          if (p && p.AttrsToBBArgs) {
            const { tag: f = p.tag, args: j = {} } = p.AttrsToBBArgs(
              d.attrs,
              d,
            );
            return { tag: f, args: j };
          }
          return { tag: p?.tag, args: {} };
        }
        function Q(p, d) {
          if (p && p.AttrsToBBArgs) {
            const { tag: f = p.tag, args: j = {} } = p.AttrsToBBArgs(
              d.attrs,
              d,
            );
            return { tag: f, args: j };
          }
          return { tag: p?.tag, args: {} };
        }
        const g = new M.hs("CProseMirrorState - OnChange");
        class w {
          m_bbcode;
          m_currentDoc;
          m_bHasUncomittedChanges = !1;
          m_schemaConfig;
          m_bbcodeParser;
          m_bUseBackslashEscapes;
          m_onStateChangedCallbacks = new c.l();
          m_fnCommitChanges;
          m_view;
          m_state;
          constructor(d, f, j, I) {
            const { parser: se, bUseBackslashEscapes: H = !0 } = I ?? {};
            (this.m_schemaConfig = d),
              (this.m_bUseBackslashEscapes = H),
              (this.m_bbcodeParser = new $(d, {
                ...se,
                bUseBackslashEscapes: H,
              })),
              (this.m_bbcode = f),
              (this.m_fnCommitChanges = j),
              (this.m_state = this.ConstructState());
          }
          CommitChanges() {
            this.m_currentDoc &&
              this.m_bHasUncomittedChanges &&
              ((this.m_bbcode = oe(this.m_currentDoc, this.m_schemaConfig, {
                bUseBackslashEscapes: this.m_bUseBackslashEscapes,
              })),
              this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
              (this.m_bHasUncomittedChanges = !1));
          }
          BHasUncomittedChanges() {
            return this.m_bHasUncomittedChanges;
          }
          UpdateState(d) {
            const f = d(this.m_view?.state.tr || this.m_state.tr);
            !f ||
              !f.docChanged ||
              (this.m_view
                ? this.m_view.dispatch(f)
                : (this.m_state = this.m_state.apply(f)));
          }
          get state() {
            return this.m_state;
          }
          get schemaConfig() {
            return this.m_schemaConfig;
          }
          get bbcodeParser() {
            return this.m_bbcodeParser;
          }
          get OnStateChangedCallbacks() {
            return this.m_onStateChangedCallbacks;
          }
          ConstructState() {
            const d = new M.k_({
                key: g,
                view: (j) => (
                  console.assert(!this.m_view),
                  (this.m_view = j),
                  {
                    update: (I, se) => this.OnStateChange(se, I.state),
                    destroy: () => (this.m_view = void 0),
                  }
                ),
              }),
              f = [(0, Y.b6)(), d];
            return M.$t.create({
              schema: this.m_schemaConfig.pm_schema,
              doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
              plugins: f,
            });
          }
          InstallPlugin(d) {
            const f = this.m_view ? this.m_view.state : this.m_state;
            return (
              f.plugins.includes(d) ||
                ((this.m_state = f.reconfigure({ plugins: [...f.plugins, d] })),
                this.m_view?.updateState(this.m_state)),
              () => {
                const j = this.m_view ? this.m_view.state : this.m_state;
                (this.m_state = j.reconfigure({
                  plugins: j.plugins.filter((I) => I != d),
                })),
                  this.m_view?.updateState(this.m_state);
              }
            );
          }
          OnStateChange(d, f) {
            (this.m_state = f),
              d.doc &&
                d.doc != f.doc &&
                ((this.m_currentDoc = f.doc),
                (this.m_bHasUncomittedChanges = !0),
                this.m_onStateChangedCallbacks.Dispatch(
                  this.m_currentDoc,
                  d.doc,
                ));
          }
          ReplaceDocument(d) {
            this.m_bbcode != d &&
              this.UpdateState((f) => {
                this.m_bbcode = d;
                const j = this.m_bbcodeParser.ParseBBCode(d);
                return (
                  (f = this.m_state.tr
                    .replaceWith(0, this.m_state.doc.content.size, j)
                    .scrollIntoView()),
                  f
                );
              });
          }
        }
        function Z(p, d) {
          (0, o.hL)(p?.OnStateChangedCallbacks, d);
        }
        var v = a(90626);
        function ie(p, d) {
          const { msAutosaveTimeout: f = 1e3, msMaxInterval: j = f * 10 } =
              d || {},
            [I, se] = v.useState(!1),
            H = v.useRef(0);
          return (
            Z(
              p,
              v.useCallback(() => {
                (H.current = performance.now()), se(!0);
              }, []),
            ),
            v.useEffect(() => {
              if (!I || !p) return;
              const ae = performance.now(),
                te = (ve = !1) => {
                  ce = void 0;
                  const Re = performance.now(),
                    je = Re - H.current;
                  ve || je >= f || Re - ae >= j
                    ? (console.log("Committing changes"),
                      p.CommitChanges(),
                      se(!1))
                    : (ce = window.setTimeout(te, f - je));
                };
              let ce = window.setTimeout(te, f);
              return () => {
                ce && (window.clearTimeout(ce), te(!0));
              };
            }, [I, p, f, j]),
            { bDirty: I }
          );
        }
        var V = a(72739),
          N = a(74685);
        const T = v.memo(function (d) {
          const { specs: f } = d,
            [j, I] = v.useState([]),
            se = v.useRef(0),
            H = v.useCallback(
              (te) => (
                I((ce) => [...ce, { id: se.current++, nodeView: te }]),
                () => I((ce) => ce.filter((ve) => ve.nodeView != te))
              ),
              [],
            ),
            ae = v.useMemo(() => {
              const te = {};
              return (
                f
                  .filter(Boolean)
                  .forEach(
                    (ce) =>
                      (te[ce.type.name] = (ve, Re, je) =>
                        new F(ce, ve, Re, je, H)),
                  ),
                new M.k_({ props: { nodeViews: te } })
              );
            }, [f, H]);
          return (
            (0, N.c$)(ae),
            j.map(({ id: te, nodeView: ce }) =>
              (0, e.jsx)(K, { nodeView: ce }, te),
            )
          );
        });
        function K(p) {
          const {
              element: d,
              spec: f,
              getProps: j,
              onPropsChanged: I,
              actions: se,
              isSelected: H,
            } = p.nodeView,
            [ae, te] = v.useReducer((ce) => ce + 1, 0);
          return (
            v.useEffect(() => I.Register(te).Unregister, [I, te]),
            V.createPortal(
              v.createElement(f.component, { ...j(), selected: H(), ...se }),
              d,
            )
          );
        }
        class F {
          dom;
          contentDOM;
          onPropsChanged;
          node;
          selected;
          reactHost;
          destroy;
          constructor(d, f, j, I, se) {
            this.node = f;
            const H = j.dom.ownerDocument,
              ae = H.createElement(d.type.isInline ? "span" : "div");
            this.dom = ae;
            let te = ae;
            d.bEditableContent &&
              ((te = this.reactHost =
                H.createElement(d.type.isInline ? "span" : "div")),
              (te.contentEditable = "false"),
              ae.appendChild(te),
              (this.contentDOM = H.createElement(
                d.type.inlineContent ? "span" : "div",
              )),
              ae.appendChild(this.contentDOM));
            const { selection: ce } = j.state;
            this.selected = I() >= ce.from && I() + f.nodeSize <= ce.to;
            const ve = (We) => {
                const Ge = We(j.state.tr, f, I());
                Ge && j.dispatch(Ge);
              },
              Re = {
                update: ve,
                setAttrs: (We, Ge) =>
                  ve((ct, mt, rt) => ct.setNodeMarkup(rt, Ge, We)),
                removeNode: () =>
                  ve((We, Ge, ct) => We.delete(ct, ct + Ge.nodeSize)),
                focusView: () => {
                  window.setTimeout(() => j.focus(), 1);
                },
              },
              je = new c.l();
            (this.destroy = se({
              element: te,
              spec: d,
              getProps: () => d.readProps(this.node),
              isSelected: () => this.selected,
              onPropsChanged: je,
              actions: Re,
            })),
              (this.onPropsChanged = je.Dispatch.bind(je));
          }
          update(d, f, j) {
            return d.type != this.node.type
              ? !1
              : ((this.node = d), this.onPropsChanged(), !0);
          }
          ignoreMutation(d) {
            return this.contentDOM && this.contentDOM.contains(d.target)
              ? !1
              : this.reactHost
                ? !0
                : d.type != "selection";
          }
          stopEvent(d) {
            return !!this.reactHost && this.reactHost.contains(d.target);
          }
          selectNode() {
            (this.selected = !0), this.onPropsChanged();
          }
          deselectNode() {
            (this.selected = !1), this.onPropsChanged();
          }
        }
        function X(p) {
          return (d, f, j) => d.replaceWith(j, j + f.nodeSize, p);
        }
        var D = a(2272),
          z = a(34604),
          _ = a(28410),
          x = a(83085),
          S = a(19298),
          B = a(52951),
          J = a(74875),
          de = a(29287),
          ge = a(74827),
          Ae = a(25792),
          Fe = a(33645),
          R = a.n(Fe),
          Te = a(38539),
          Oe = a(4188),
          fe = a(36707);
        function _e(p, d, f = 0) {
          return () => [p, { class: d }, f];
        }
        function me(p, d, f = 0) {
          return [p, { class: d }, f];
        }
        function we(p, d) {
          return () => [
            d,
            { class: R().PreservedUnsupportedTag },
            ["span", { class: R().Tag }, `[${p}]`],
            ["span", 0],
            ["span", { class: R().Tag }, `[/${p}]`],
          ];
        }
        function Ce(p) {
          return {
            tag: `h${p}`,
            BBArgsToAttrs: (d) => ({ level: p, align: d.align || "left" }),
            AttrsToBBArgs: (d) => {
              let f = { tag: `h${d.level}`, args: {} };
              return (
                d.align &&
                  d.align != "left" &&
                  f.args &&
                  (f.args.align = d.align),
                f
              );
            },
          };
        }
        function Ze(p) {
          return {
            tag: `h${p}`,
            getAttrs(d) {
              return { level: p, align: d.style.textAlign || "left" };
            },
          };
        }
        const Be = {
            paragraph: {
              attrs: { align: { default: "left" } },
              content: "inline*",
              group: "block",
              parseDOM: [
                {
                  tag: "p",
                  getAttrs(p) {
                    return { align: p.style.textAlign || "left" };
                  },
                },
              ],
              toDOM(p) {
                const d = { class: (0, fe.A)("pm_paragraph", R().Paragraph) };
                return (
                  p.attrs.align &&
                    p.attrs.align != "left" &&
                    (d.style = `text-align: ${p.attrs.align}`),
                  ["p", d, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (p) => ({ align: p.align }),
                AttrsToBBArgs: (p) => {
                  let d = { args: {} };
                  return (
                    p.align && p.align != "left" && (d.args.align = p.align), d
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(Ze),
              toDOM(p) {
                const d = {
                  class:
                    `BB_Header${p.attrs.level} ` +
                    R()[`Header${p.attrs.level}`],
                };
                return (
                  p.attrs.align &&
                    p.attrs.align != "left" &&
                    (d.style = `text-align: ${p.attrs.align}`),
                  ["h" + p.attrs.level, d, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(Ce),
            },
            image: {
              inline: !0,
              attrs: {
                src: {},
                alt: { default: null },
                title: { default: null },
                style: { default: void 0 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "img[src]",
                  getAttrs(p) {
                    return {
                      src: p.getAttribute("src"),
                      title: p.getAttribute("title"),
                      alt: p.getAttribute("alt"),
                      style: p.getAttribute("style"),
                    };
                  },
                },
              ],
              toDOM(p) {
                const { src: d, alt: f, title: j, style: I } = p.attrs;
                return [
                  "img",
                  {
                    src: d,
                    alt: f,
                    title: j,
                    class: (0, fe.A)(R().Image, {
                      [R().Image_Inline]: I === "inline",
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (p) => ({
                  src: p.src,
                  style: p.style ?? void 0,
                }),
                AttrsToBBArgs: (p) => ({
                  args: { src: p.src, ...(p.style ? { style: p.style } : {}) },
                }),
                convertContentToAttr: "src",
              },
            },
            video: {
              inline: !0,
              attrs: {
                webm: { default: "" },
                mp4: { default: "" },
                poster: { default: "" },
                autoplay: { default: !0 },
                controls: { default: !1 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "video",
                  getAttrs(p) {
                    if (p.tagName !== "video") return;
                    const d = p;
                    let f = "",
                      j = "";
                    for (const I of d.querySelectorAll("source"))
                      I.type == "video/mp4"
                        ? (f = I.src)
                        : I.type == "video/webm" && (j = I.src);
                    return {
                      mp4: f,
                      webm: j,
                      poster: d.poster || "",
                      autoplay: !!d.autoplay,
                      controls: !!d.controls,
                    };
                  },
                },
              ],
              toDOM(p) {
                const {
                    webm: d,
                    mp4: f,
                    poster: j,
                    autoplay: I,
                    controls: se,
                  } = p.attrs,
                  H = [];
                return (
                  d && H.push(["source", { src: d, type: "video/webm" }]),
                  f && H.push(["source", { src: f, type: "video/mp4" }]),
                  [
                    "video",
                    {
                      poster: j,
                      autoPlay: !!I,
                      controls: !!se,
                      loop: !se && !!I,
                    },
                    ...H,
                  ]
                );
              },
              bbCode: {
                tag: "video",
                BBArgsToAttrs: (p) => ({
                  webm: p.webm,
                  mp4: p.mp4,
                  poster: p.poster,
                  autoplay: p.autoplay == "true",
                  controls: p.controls == "true",
                }),
                AttrsToBBArgs: (p) => ({
                  args: {
                    webm: p.webm || "",
                    mp4: p.mp4 || "",
                    poster: p.poster || "",
                    autoplay: p.autoplay ? "true" : "false",
                    controls: p.controls ? "true" : "false",
                  },
                }),
              },
            },
            bullet_list: {
              ...Oe.fF,
              content: "list_item+",
              group: "block",
              toDOM: _e("ul", R().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ...Oe.o8,
              content: "list_item+",
              group: "block",
              toDOM: _e("ol", R().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ...Oe.Aw,
              content: "paragraph block*",
              toDOM: _e("li", R().ListItem),
              bbCode: { tag: "*", autocloses: !0 },
            },
            code_block: {
              content: "inline*",
              marks: "",
              group: "block",
              code: !0,
              defining: !0,
              parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
              toDOM() {
                return [
                  "pre",
                  { class: R().CodeBlock },
                  ["code", { class: R().Code }, 0],
                ];
              },
              bbCode: { tag: "code" },
            },
          },
          Le = {
            strong: {
              parseDOM: [
                { tag: "strong" },
                {
                  tag: "b",
                  getAttrs: (p) => p.style.fontWeight != "normal" && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (p) => p.type.name == "strong",
                },
                {
                  style: "font-weight",
                  getAttrs: (p) => /^(bold(er)?|[5-9]\d{2,})$/.test(p) && null,
                },
              ],
              toDOM: _e("b", (0, fe.A)("BB_Bold", R().Bold)),
              bbCode: { tag: "b" },
            },
            italic: {
              parseDOM: [
                { tag: "i" },
                { tag: "em" },
                { style: "font-style=italic" },
                {
                  style: "font-style=normal",
                  clearMark: (p) => p.type.name == "em",
                },
              ],
              toDOM: _e("i", (0, fe.A)("BB_Italic", R().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: _e("u", (0, fe.A)("BB_Underline", R().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: _e("span", (0, fe.A)("BB_Strike", R().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: _e("code", (0, fe.A)("BB_Code", R().Code)),
              bbCode: { tag: "c" },
            },
            link: {
              attrs: { href: {}, title: { default: null } },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs(p) {
                    return {
                      href: p.getAttribute("href"),
                      title: p.getAttribute("title"),
                    };
                  },
                },
              ],
              toDOM(p) {
                const { href: d, title: f } = p.attrs;
                return ["a", { href: d, title: f, class: "BB_Link" }, 0];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (p) => ({ href: p[""] }),
                AttrsToBBArgs: (p) => ({ args: { "": p.href } }),
                convertContentToAttr: "href",
              },
            },
          },
          Se = { nodes: Be, marks: Le },
          W = {
            node: {},
            marks: {
              color: {
                attrs: { color: {} },
                parseDOM: [{ style: "color", getAttrs: (p) => ({ color: p }) }],
                toDOM(p) {
                  return [
                    "span",
                    {
                      style: `color: ${p.attrs.color}`,
                      class: (0, fe.A)("BB_Color", R().Color),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "color",
                  BBArgsToAttrs: (p) => ({ color: p[""] }),
                  AttrsToBBArgs: (p) => ({ args: { "": p.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
              bgcolor: {
                attrs: { color: {} },
                parseDOM: [
                  { style: "bgcolor", getAttrs: (p) => ({ color: p }) },
                ],
                toDOM(p) {
                  return [
                    "span",
                    {
                      style: `background-color: ${p.attrs.color}`,
                      class: (0, fe.A)("BB_BGColor", R().BGColor),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "bgcolor",
                  BBArgsToAttrs: (p) => ({ color: p[""] }),
                  AttrsToBBArgs: (p) => ({ args: { "": p.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
            },
          },
          pe = { NoBorder: "noborder", EqualCells: "equalcells" },
          xe = Te.of({
            tableGroup: "block",
            cellContent: "paragraph block*",
            cellAttributes: {
              class: {
                default: R().TableCell,
                setDOMAttr: (p, d) => {
                  d.class = p;
                },
              },
            },
          }),
          ke = {
            BBArgsToAttrs: (p) => {
              const d = {};
              return (
                p.colspan && (d.colspan = parseInt(p.colspan)),
                p.rowspan && (d.rowspan = parseInt(p.rowspan)),
                p.colwidth &&
                  (d.colwidth = p.colwidth.split(",").map((f) => parseInt(f))),
                d
              );
            },
            AttrsToBBArgs: (p) => {
              const d = {};
              return (
                p.colspan &&
                  p.colspan != 1 &&
                  (d.colspan = p.colspan.toString()),
                p.rowspan &&
                  p.rowspan != 1 &&
                  (d.rowspan = p.rowspan.toString()),
                p.colwidth && (d.colwidth = p.colwidth.join(",")),
                { args: d }
              );
            },
          },
          He = {
            table: {
              ...xe.table,
              toDOM: (p) =>
                me(
                  "table",
                  (0, fe.A)(
                    R().Table,
                    p.attrs.noborder && R().NoBorder,
                    p.attrs.equalcells && R().EqualCells,
                  ),
                  ["tbody", 0],
                ),
              attrs: {
                [pe.NoBorder]: { default: !1 },
                [pe.EqualCells]: { default: !0 },
              },
              bbCode: {
                tag: "table",
                BBArgsToAttrs: (p) => ({
                  noborder: !!p.noborder,
                  equalcells: !!p.equalcells,
                }),
                AttrsToBBArgs: (p, d) => {
                  const f = {};
                  p.noborder && (f.noborder = "1"),
                    p.equalcells && (f.equalcells = "1");
                  const j = d.child(0);
                  if (j) {
                    let I = [];
                    for (let se = 0; se < j.childCount; se++) {
                      const H = j.child(se).attrs;
                      H.colwidth ? I.push(...H.colwidth) : I.push(void 0);
                    }
                    f.colwidth = I.join(",");
                  }
                  return { args: f };
                },
              },
            },
            table_row: {
              ...xe.table_row,
              toDOM: _e("tr", R().TableRow),
              bbCode: { tag: "tr" },
            },
            table_cell: { ...xe.table_cell, bbCode: { ...ke, tag: "td" } },
            table_header: { ...xe.table_header, bbCode: { ...ke, tag: "th" } },
          },
          De = v.memo(function (d) {
            const { schema: f } = d,
              j = !!("table" in f.nodes && f.nodes.table.spec.tableRole);
            return (
              (0, N.c$)(
                v.useMemo(() => (j ? Te.AL({ View: Pe }) : void 0), [j]),
              ),
              (0, N.c$)(v.useMemo(() => (j ? Te.LF() : void 0), [j])),
              null
            );
          });
        class Pe extends Te.Qg {
          constructor(d, f) {
            super(d, f), this.SetTableClass(d);
          }
          update(d) {
            return super.update(d) ? (this.SetTableClass(d), !0) : !1;
          }
          SetTableClass(d) {
            this.table.className = (0, fe.A)(
              R().Table,
              d.attrs[pe.NoBorder] && R().NoBorder,
              d.attrs[pe.EqualCells] && R().EqualCells,
            );
          }
        }
        var be = a(18210),
          Ke = a(54963),
          Xe = a(73309);
        const et = (0, Ae.Nr)(function (d) {
          const {
              pmState: f,
              className: j,
              refOnUpdate: I,
              refView: se,
              bSpellcheckEnabled: H = !0,
              bSingleLine: ae,
              panelProps: te,
              children: ce,
            } = d,
            [ve, Re] = v.useState(),
            [je, We] = v.useState();
          v.useEffect(() => {
            !f || !ve || We(new de.Lz(ve, { state: f.state }));
          }, [f, ve]),
            v.useEffect(() => () => je?.destroy(), [je]),
            (0, Ke.D5)(se, je);
          const { refDiv: Ge, onActivate: ct, onGamepadDirection: mt } = Qe(je),
            rt = (0, Ke.Ue)(Ge, Re);
          if (!f) return null;
          const { schemaConfig: Dt, bbcodeParser: lt } = f;
          return (0, e.jsxs)(N.Ot, {
            view: je,
            pmState: f,
            children: [
              (0, e.jsx)(
                S.Z,
                {
                  className: (0, fe.A)({
                    ["" + j]: !!j,
                    [Xe.Container]: !0,
                    [Xe.SingleLine]: !!ae,
                  }),
                  ref: rt,
                  spellCheck: H,
                  focusable: !0,
                  onActivate: ct,
                  onOKActionDescription: (0, be.we)("#UserGameNotes_Edit"),
                  onGamepadDirection: mt,
                  ...te,
                },
                `editordiv_${H}`,
              ),
              (0, e.jsx)(N.KF, {
                refOnUpdate: I,
                schema: Dt.pm_schema,
                bSingleLine: ae,
              }),
              (0, e.jsx)(Ye, { parser: lt, schema: Dt.pm_schema }),
              (0, e.jsx)(De, { schema: Dt.pm_schema }),
              ce,
            ],
          });
        });
        function Qe(p) {
          const d = v.useRef(null),
            f = (0, J.FN)(),
            j = v.useCallback(() => {
              if ((f.ShowVirtualKeyboard(), !p)) return;
              if (!p.hasFocus()) {
                p.focus();
                let ae = p.dom.childNodes,
                  te = d.current?.scrollTop ?? 0;
                for (let ce = 0; ce < ae.length; ++ce) {
                  let ve = ae[ce],
                    Re = ve.offsetTop;
                  if (Re !== void 0 && Re >= te) {
                    let je = ve.getBoundingClientRect();
                    (0, ge.bQ)(p, je.left, je.top);
                    break;
                  }
                }
              }
            }, [f, p]),
            I = v.useCallback((H) => H.currentTarget == H.target, []),
            se = (0, B.ak)(d, void 0, void 0, I);
          return { refDiv: d, onActivate: j, onGamepadDirection: se };
        }
        const Ye = v.memo(function (d) {
          const { parser: f, schema: j } = d;
          return (
            (0, N.c$)(
              v.useMemo(
                () =>
                  new M.k_({
                    props: {
                      transformPasted: (I, se) => st(f, j.nodes.hard_break, I),
                    },
                  }),
                [f, j],
              ),
            ),
            null
          );
        });
        function st(p, d, f) {
          let j = !1;
          if (
            (f.content.forEach((se) => {
              se.type == d && (j = !0);
            }),
            !j)
          )
            return f;
          const I = p.ConvertLineBreaksToParagraphs(f.content);
          return U.Ji.maxOpen(I);
        }
        var Ve = a(249),
          tt = a(58534),
          kt = a(2801),
          ft = a(88003);
        function _t(p) {
          const {
              closeModal: d,
              strTitle: f,
              onOK: j,
              strOKText: I,
              onCancel: se,
              strCancelText: H,
              bOKDisabled: ae,
              bCancelDisabled: te,
              strClassNameContent: ce = "GenericFormDialog",
              children: ve,
            } = p,
            Re = v.useCallback(() => {
              se && se(), d();
            }, [se, d]),
            je = te ? () => {} : Re;
          return (0, e.jsx)(ft.x_, {
            onEscKeypress: je,
            children: (0, e.jsxs)(tt.U9, {
              onSubmit: j,
              classNameContent: ce,
              children: [
                (0, e.jsx)(tt.Y9, { children: f }),
                ve,
                (0, e.jsx)(tt.wi, {
                  children: (0, e.jsx)(tt.CB, {
                    strOKText: I,
                    bOKDisabled: ae,
                    onCancel: je,
                    strCancelText: H,
                    bCancelDisabled: te,
                  }),
                }),
              ],
            }),
          });
        }
        function Lt(p, d) {
          const [f, j] = React.useState(void 0),
            I = React.useCallback(
              (te) => {
                const ce = te.state.selection;
                let ve = "",
                  Re = "",
                  { from: je, to: We } = ce;
                const Ge = FindMarkAtPosition(te.state, p.marks.link, ce.$from),
                  ct = !!Ge;
                Ge
                  ? ((Re = Ge.mark.attrs.href),
                    ce.empty
                      ? ((ve = Ge.slice.content.textBetween(
                          0,
                          Ge.slice.content.size,
                        )),
                        (je = Ge.from),
                        (We = Ge.to))
                      : ((je = Math.max(Ge.from, ce.from)),
                        (We = Math.min(Ge.to, ce.to)),
                        (ve = Ge.slice.content.textBetween(
                          je - Ge.from,
                          We - Ge.from,
                        ))))
                  : te.state.selection.empty ||
                    ((ve = te.state.doc.cut(
                      te.state.selection.from,
                      te.state.selection.to,
                    ).textContent),
                    ve.match(/^https?:\/\//) && (Re = ve));
                let mt = {};
                if (d)
                  for (const rt in d) {
                    const Dt = d[rt],
                      lt = Ge ? Dt.fnReadValue(Ge.mark) : Dt.defaultValue;
                    mt[rt] = lt;
                  }
                j({
                  view: te,
                  strLinkText: ve,
                  strLinkHref: Re,
                  bIsUpdate: ct,
                  addtlAttrs: d,
                  addtlAttrsValues: mt,
                  from: je,
                  to: We,
                });
              },
              [p.marks.link, d],
            ),
            se = f?.view,
            H = React.useCallback(() => {
              window.setTimeout(() => se.focus(), 1), j(void 0);
            }, [se]),
            ae =
              f &&
              jsx(SimpleModal, {
                active: !0,
                children: jsx(ut, { schema: p, closeModal: H, ...f }),
              });
          return [I, ae];
        }
        const ut = v.memo(function (d) {
          const {
              schema: f,
              strLinkText: j,
              strLinkHref: I,
              bIsUpdate: se,
              addtlAttrs: H,
              addtlAttrsValues: ae,
              closeModal: te,
              view: ce,
              from: ve,
              to: Re,
            } = d,
            [je, We] = v.useState(j),
            [Ge, ct] = v.useState(I),
            mt = v.useRef(null),
            rt = v.useRef(null),
            [Dt, lt] = v.useState(ae),
            Ot = () => {
              let Bt = ce.state.tr;
              const Ut = { href: Ge };
              for (const ls in Dt) Ut[ls] = Dt[ls];
              const gs = f.marks.link?.create(Ut),
                ss = f.text(je || Ge, [gs]);
              try {
                (Bt = Bt.replaceRangeWith(ve, Re, ss)),
                  (Bt = Bt.setSelection(
                    M.U3.create(Bt.doc, ve + ss.nodeSize, ve + ss.nodeSize),
                  )),
                  ce.dispatch(Bt);
              } catch (ls) {
                console.error("Error during link insertion", ls);
              }
              te();
            };
          v.useLayoutEffect(() => {
            mt.current?.value?.length
              ? rt.current?.value?.length
                ? (mt.current.Focus(), mt.current.element.select())
                : rt.current.Focus()
              : mt.current?.Focus();
          }, []);
          const Tt = se
              ? (0, be.we)("#FormattingToolbar_EditLink")
              : (0, be.we)("#FormattingToolbar_InsertLink"),
            ts = se
              ? (0, be.we)("#Button_Save")
              : (0, be.we)("#FormattingToolbar_InsertLink");
          return (0, e.jsxs)(_t, {
            onOK: Ot,
            closeModal: te,
            strTitle: Tt,
            strOKText: ts,
            bOKDisabled: Ge.length == 0,
            children: [
              (0, e.jsx)(tt.pd, {
                ref: mt,
                value: je,
                onChange: (Bt) => We(Bt.currentTarget.value),
                label: (0, be.we)("#FormattingToolbar_LinkText"),
              }),
              (0, e.jsx)(tt.pd, {
                ref: rt,
                value: Ge,
                placeholder: "https://",
                onChange: (Bt) => ct(Bt.currentTarget.value),
                label: (0, be.we)("#FormattingToolbar_LinkAddress"),
                mustBeURL: !0,
              }),
              H && (0, e.jsx)(is, { addtlAttrs: H, values: Dt, setValues: lt }),
            ],
          });
        });
        function is(p) {
          const { addtlAttrs: d, values: f, setValues: j } = p;
          return (0, e.jsx)(e.Fragment, {
            children: Object.keys(d).map((I) =>
              (0, e.jsx)(
                ot,
                {
                  attrName: I,
                  fnRender: d[I].fnRenderEditor,
                  value: f[I],
                  setValues: j,
                },
                I,
              ),
            ),
          });
        }
        const ot = v.memo(function (d) {
          const { attrName: f, fnRender: j, value: I, setValues: se } = d,
            H = v.useCallback(
              (ae) => se((te) => ({ ...te, [f]: ae })),
              [f, se],
            );
          return j(I, H);
        });
        var $e = a(50660);
        function Yt(p) {
          const { schema: d, addtlAttrs: f, children: j } = p,
            { callbacks: I, view: se } = useToolbarContext(),
            [H, ae] = React.useState(() =>
              IsMarkActive(se.state, d.marks.link),
            ),
            te = React.useCallback(
              (Re) => ae(IsMarkActive(Re.state, d.marks.link)),
              [d],
            );
          useCallbackList(I, te);
          const [ce, ve] = useInsertLinkModal(d, f);
          return jsxs(Fragment, {
            children: [
              ve,
              jsx(ToggleButton, {
                onClick: () => ce(se),
                toggled: H,
                tooltip: "#FormattingToolbar_InsertLink",
                keyboardShortcut: "Mod-k",
                children: j,
              }),
            ],
          });
        }
        var Nt = a(98609),
          As = a(64388),
          Gt = a(28922),
          Is = a(64238),
          zs = a(88376),
          Rt = a.n(zs),
          Ds = a(66243),
          Vs = a(36118);
        function nn(p) {
          const {
            strTitle: d,
            strDescription: f,
            className: j,
            children: I,
            navID: se,
            ...H
          } = p;
          return jsxs(ModalDialog, {
            className: classNames(j, styles.ModalConfirmDialog),
            onClose: H.onClose,
            navID: se,
            children: [
              d &&
                jsxs(Panel, {
                  className: styles.Header,
                  children: [
                    jsx("h2", { children: d }),
                    jsx("button", {
                      onClick: H.onClose,
                      children: jsx(SVG.X_Line_Better, {}),
                    }),
                  ],
                }),
              f &&
                jsx(Panel, {
                  className: styles.Description,
                  children: jsx("div", { children: f }),
                }),
              I,
              jsx(Et, { ...H }),
            ],
          });
        }
        function Et(p) {
          const { strOKLabel: d, strCancelLabel: f, onOK: j, onClose: I } = p;
          return (0, e.jsxs)(S.Z, {
            className: Rt().Buttons,
            children: [
              !!d && (0, e.jsx)(Ds.n9, { onClick: j ?? I, children: d }),
              !!f && (0, e.jsx)(Ds.Oh, { onClick: I, children: f }),
            ],
          });
        }
        function Qt(p, d, f) {
          const [j, I] = v.useState(void 0),
            se = v.useRef(null),
            H = v.useCallback(
              (ce) => {
                se.current = ce;
                const { state: ve } = ce,
                  Re = ve.selection;
                let { from: je, to: We, empty: Ge } = Re;
                const ct = d ? p.marks.color : p.marks.bgcolor;
                let mt = "",
                  rt = "";
                const Dt = Ge ? Re.$from : ve.doc.resolve(je),
                  lt = (0, ge.vn)(ve, ct, Dt),
                  Ot = !!lt;
                Ot
                  ? ((mt = lt.mark.attrs.color),
                    Ge
                      ? ((rt = lt.slice.content.textBetween(
                          0,
                          lt.slice.content.size,
                        )),
                        (je = lt.from),
                        (We = lt.to))
                      : ((je = Math.max(lt.from, je)),
                        (We = Math.min(lt.to, We)),
                        (rt = lt.slice.content.textBetween(
                          je - lt.from,
                          We - lt.from,
                        ))))
                  : Ge || (rt = ve.doc.cut(je, We).textContent);
                let Tt = {};
                if (f)
                  for (const ts in f) {
                    const Bt = f[ts],
                      Ut = lt ? Bt.fnReadValue(lt.mark) : Bt.defaultValue;
                    Tt[ts] = Ut;
                  }
                I({
                  viewRef: se,
                  strColor: mt,
                  strTargetText: rt,
                  bIsUpdate: Ot,
                  addtlAttrs: f,
                  addtlAttrsValues: Tt,
                  from: je,
                  to: We,
                });
              },
              [f, d, p.marks.bgcolor, p.marks.color],
            ),
            ae = v.useCallback(() => {
              const ce = se.current;
              window.setTimeout(() => {
                ce && !ce.isDestroyed && ce.focus();
              }, 1),
                I(void 0);
            }, []),
            te =
              j &&
              (0, e.jsx)(kt.EN, {
                active: !0,
                children: (0, e.jsx)($s, {
                  schema: p,
                  bColor: d,
                  closeModal: ae,
                  ...j,
                }),
              });
          return [H, te];
        }
        function ps(p) {
          if (p.startsWith("rgb")) {
            const d = p.match(/\d+/g);
            if (!d || d.length < 3) return "#000000";
            const [f, j, I] = d.map(Number);
            return (
              "#" +
              [f, j, I]
                .map((se) => {
                  const H = se.toString(16);
                  return H.length === 1 ? "0" + H : H;
                })
                .join("")
            );
          }
          return p;
        }
        function Ks(p) {
          const d = p.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
          );
          if (d) {
            let [, f, j, I, se] = d;
            const H = parseInt(f, 10),
              ae = parseInt(j, 10),
              te = parseInt(I, 10);
            return `#${((1 << 24) + (H << 16) + (ae << 8) + te).toString(16).slice(1)}`;
          }
          return "#7e3232";
        }
        const $s = v.memo(function (d) {
          const {
              schema: f,
              strColor: j,
              bIsUpdate: I,
              strTargetText: se,
              bColor: H,
              addtlAttrs: ae,
              addtlAttrsValues: te,
              closeModal: ce,
              viewRef: ve,
              from: Re,
              to: je,
            } = d,
            [We, Ge] = v.useState(j),
            ct = v.useRef(null),
            [mt, rt] = v.useState(te),
            Dt = v.useCallback(() => {
              try {
                const Tt = ve.current;
                if (!Tt || Tt.isDestroyed) {
                  console.warn(
                    "Editor view is destroyed; skipping color insert",
                  );
                  return;
                }
                const { state: ts, dispatch: Bt } = Tt,
                  Ut = H ? f.marks.color : f.marks.bgcolor;
                if (!Ut) {
                  console.log("debug: no markType");
                  return;
                }
                if (!We || !/^#[0-9a-fA-F]{6}$/.test(We)) {
                  console.log("debug: invalid color text: " + We);
                  return;
                }
                const gs = Math.max(0, Math.min(Re, ts.doc.content.size)),
                  ss = Math.max(0, Math.min(je, ts.doc.content.size));
                if (gs > ss) {
                  console.error("Invalid selection range:", Re, je);
                  return;
                }
                const ls = Ut.create({ color: We, ...mt });
                let Vt = ts.tr;
                Re === je
                  ? (Vt = Vt.addStoredMark(ls))
                  : ((Vt = Vt.removeMark(Re, je, Ut)),
                    (Vt = Vt.addMark(Re, je, ls)),
                    (Vt = Vt.setSelection(M.U3.create(Vt.doc, je)))),
                  Bt(Vt.scrollIntoView());
              } catch (Tt) {
                console.error(Tt);
              } finally {
                requestAnimationFrame(() => ce());
              }
            }, [mt, H, ce, We, Re, f.marks.bgcolor, f.marks.color, je, ve]);
          v.useLayoutEffect(() => {
            ct.current?.value?.length
              ? ct.current.focus()
              : ct.current?.focus();
          }, []);
          const lt = (0, be.we)(
              H ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
            ),
            Ot = I
              ? (0, be.we)("#Button_Save")
              : (0, be.we)(
                  H ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
                );
          return (0, e.jsxs)(As.s, {
            onClose: ce,
            strTitle: lt,
            children: [
              (0, e.jsx)(Gt.s, {
                color: We,
                disableAlpha: !0,
                onChange: (Tt) => Ge(Ks(Tt)),
              }),
              (0, e.jsx)(Et, {
                strOKLabel: Ot,
                strCancelLabel: (0, be.we)("#Button_Cancel"),
                onOK: () => {
                  We && We.length > 0 && Dt();
                },
                onClose: ce,
              }),
            ],
          });
        });
        function Ss(p) {
          const { schema: d, bColor: f, addtlAttrs: j, children: I } = p,
            { callbacks: se, view: H } = (0, $e.wU)(),
            [ae, te] = v.useState(() =>
              (0, ge.Cd)(H.state, f ? d.marks.color : d.marks.bgcolor),
            ),
            ce = v.useCallback(
              (je) =>
                te((0, ge.Cd)(je.state, f ? d.marks.color : d.marks.bgcolor)),
              [f, d],
            );
          (0, Ke.hL)(se, ce);
          const [ve, Re] = Qt(d, f, j);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              Re,
              (0, e.jsx)($e.ff, {
                onClick: () => ve(H),
                toggled: ae,
                tooltip: f
                  ? "#FormattingToolbar_Color"
                  : "#FormattingToolbar_BgColor",
                children: I,
              }),
            ],
          });
        }
        function vs() {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($e.cQ, {
                tooltip: "#FormattingToolbar_Undo",
                keyboardShortcut: "Mod-z",
                command: Y.tN,
                children: (0, e.jsx)(Ve.VnB, {}),
              }),
              (0, e.jsx)($e.cQ, {
                tooltip: "#FormattingToolbar_Redo",
                keyboardShortcut:
                  Nt.TS.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
                command: Y.ZS,
                children: (0, e.jsx)(Ve.Bal, {}),
              }),
            ],
          });
        }
        function bn(p) {
          const { schema: d } = p;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($e.GY, {
                tooltip: "#FormattingToolbar_Bold",
                keyboardShortcut: "Mod-b",
                mark: d.marks.strong,
                children: (0, e.jsx)(Ve.l4n, {}),
              }),
              (0, e.jsx)($e.GY, {
                tooltip: "#FormattingToolbar_Italic",
                keyboardShortcut: "Mod-i",
                mark: d.marks.italic,
                children: (0, e.jsx)(Ve.UKJ, {}),
              }),
              (0, e.jsx)($e.GY, {
                tooltip: "#FormattingToolbar_Underline",
                keyboardShortcut: "Mod-u",
                mark: d.marks.underline,
                children: (0, e.jsx)(Ve.Gj3, {}),
              }),
              "strike" in d.marks &&
                (0, e.jsx)($e.GY, {
                  tooltip: "#FormattingToolbar_Strike",
                  keyboardShortcut: "Mod-Shift-x",
                  mark: d.marks.strike,
                  children: (0, e.jsx)(Ve.tI4, {}),
                }),
              "code" in d.marks &&
                (0, e.jsx)($e.GY, {
                  tooltip: "#FormattingToolbar_InlineCode",
                  keyboardShortcut: "Ctrl-Shift-c",
                  mark: d.marks.code,
                  children: (0, e.jsx)(Ve.bmT, {}),
                }),
              "color" in d.marks &&
                (0, e.jsx)(Ss, {
                  schema: d,
                  bColor: !0,
                  children: (0, e.jsx)(Ve.r7n, {}),
                }),
              "bgcolor" in d.marks &&
                (0, e.jsx)(Ss, {
                  schema: d,
                  bColor: !1,
                  children: (0, e.jsx)(Ve.FId, {}),
                }),
            ],
          });
        }
        function an(p) {
          const { schema: d } = p;
          return (0, e.jsx)($e.u3, {
            tooltip: "#FormattingToolbar_Paragraph",
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: d.nodes.paragraph,
            children: (0, e.jsx)(Ve.iYj, {}),
          });
        }
        function Xs(p) {
          const { nodeTypes: d, attrs: f, children: j, ...I } = p,
            { callbacks: se, view: H } = (0, $e.wU)(),
            [ae, te] = v.useState(() => (0, ge.Ce)(H.state, d, f)),
            ce = v.useCallback((je) => te((0, ge.Ce)(je.state, d, f)), [d, f]);
          (0, Ke.hL)(se, ce);
          const ve = v.useMemo(() => (0, ge.c4)(d, f ?? {}), [d, f]),
            Re = !!ae;
          return (0, e.jsx)($e.cQ, {
            ...I,
            command: ve,
            toggled: Re,
            children: j,
          });
        }
        function Ys(p) {
          const { schema: d } = p;
          let f = d.nodes.paragraph,
            j = d.nodes.heading;
          const I = v.useMemo(() => [f, j], [f, j]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Xs, {
                tooltip: "#FormattingToolbar_AlignLeft",
                keyboardShortcut: "Ctrl-Shift-L",
                nodeTypes: I,
                attrs: { align: "left" },
                children: (0, e.jsx)(Ve.K6w, {}),
              }),
              (0, e.jsx)(Xs, {
                tooltip: "#FormattingToolbar_AlignCenter",
                keyboardShortcut: "Ctrl-Shift-E",
                nodeTypes: I,
                attrs: { align: "center" },
                children: (0, e.jsx)(Ve.q8c, {}),
              }),
              (0, e.jsx)(Xs, {
                tooltip: "#FormattingToolbar_AlignRight",
                keyboardShortcut: "Ctrl-Shift-R",
                nodeTypes: I,
                attrs: { align: "right" },
                children: (0, e.jsx)(Ve.dWO, {}),
              }),
            ],
          });
        }
        function es(p) {
          const { schema: d, maxLevel: f = 1, levels: j } = p,
            I = f + j - 1;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              f <= 1 &&
                (0, e.jsx)($e.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel1",
                  keyboardShortcut: "Ctrl-Shift-1",
                  nodeType: d.nodes.heading,
                  attrs: { level: 1 },
                  children: (0, e.jsx)(Ve.jRw, {}),
                }),
              f <= 2 &&
                I >= 2 &&
                (0, e.jsx)($e.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel2",
                  keyboardShortcut: "Ctrl-Shift-2",
                  nodeType: d.nodes.heading,
                  attrs: { level: 2 },
                  children: (0, e.jsx)(Ve.qOW, {}),
                }),
              f <= 3 &&
                I >= 3 &&
                (0, e.jsx)($e.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel3",
                  keyboardShortcut: "Ctrl-Shift-3",
                  nodeType: d.nodes.heading,
                  attrs: { level: 3 },
                  children: (0, e.jsx)(Ve.x7X, {}),
                }),
              f <= 4 &&
                I >= 4 &&
                (0, e.jsx)($e.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel4",
                  keyboardShortcut: "Ctrl-Shift-4",
                  nodeType: d.nodes.heading,
                  attrs: { level: 4 },
                  children: (0, e.jsx)(Ve.qzO, {}),
                }),
              f <= 5 &&
                I >= 5 &&
                (0, e.jsx)($e.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel5",
                  keyboardShortcut: "Ctrl-Shift-5",
                  nodeType: d.nodes.heading,
                  attrs: { level: 5 },
                  children: (0, e.jsx)(Ve.jXA, {}),
                }),
            ],
          });
        }
        function hs(p) {
          const { schema: d, showIndentButtonsAsNeeded: f = !1 } = p,
            { callbacks: j, view: I } = (0, $e.wU)(),
            { bullet_list: se, ordered_list: H, list_item: ae } = d.nodes,
            te = v.useMemo(() => Oe.T2(ae), [ae]),
            ce = v.useMemo(() => Oe.$B(ae), [ae]),
            [ve, Re] = v.useState(() => te(I.state) || ce(I.state));
          return (
            (0, Ke.hL)(
              j,
              v.useCallback(
                (je) => {
                  Re(te(je.state) || ce(je.state));
                },
                [te, ce],
              ),
            ),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(rn, {
                  tooltip: "#FormattingToolbar_BulletedList",
                  keyboardShortcut: "Ctrl-Shift-8",
                  list_type: se,
                  list_item: ae,
                  children: (0, e.jsx)(Ve.JPq, {}),
                }),
                H &&
                  (0, e.jsx)(rn, {
                    tooltip: "#FormattingToolbar_OrderedList",
                    keyboardShortcut: "Ctrl-Shift-7",
                    list_type: H,
                    list_item: ae,
                    children: (0, e.jsx)(Ve.jE0, {}),
                  }),
                (!f || ve) &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)($e.cQ, {
                        tooltip: "#FormattingToolbar_OutdentList",
                        keyboardShortcut: "Mod-[",
                        command: te,
                        children: (0, e.jsx)(Ve.LSz, {}),
                      }),
                      (0, e.jsx)($e.cQ, {
                        tooltip: "#FormattingToolbar_IndentList",
                        keyboardShortcut: "Mod-[",
                        command: ce,
                        children: (0, e.jsx)(Ve.ycU, {}),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function rn(p) {
          const { list_type: d, list_item: f, children: j, ...I } = p,
            { callbacks: se, view: H } = (0, $e.wU)(),
            ae = v.useCallback((je) => (0, ge.wt)(je.state, d) !== void 0, [d]),
            [te, ce] = v.useState(() => ae(H)),
            ve = v.useMemo(() => Oe.Sd(d), [d]),
            Re = v.useMemo(() => Oe.T2(f), [f]);
          return (
            (0, Ke.hL)(
              se,
              v.useCallback(
                (je) => {
                  ce(ae(je));
                },
                [ae],
              ),
            ),
            (0, e.jsx)($e.cQ, {
              ...I,
              toggled: te,
              command: te ? Re : ve,
              children: j,
            })
          );
        }
        function zt(p) {
          const { schema: d, addtlAttrs: f } = p;
          return jsx(LinkMarkButton, {
            schema: d,
            addtlAttrs: f,
            children: jsx(GamepadUISVG.TextLink, {}),
          });
        }
        function as(p) {
          const { bSpellcheckEnabled: d, setSpellcheckEnabled: f } = p;
          return jsx(ToggleButton, {
            tooltip: d
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: d,
            onClick: () => f(!d),
            children: jsx(GamepadUISVG.SpellCheck, {}),
          });
        }
        class Cn {
          m_ProseMirrorSchema;
          m_mapBBCodeDictionary = new Map();
          m_PMToBBCodeConfig = { mapNodes: new Map(), mapMarks: new Map() };
          get pm_schema() {
            return this.m_ProseMirrorSchema;
          }
          get bbcode_dictionary() {
            return this.m_mapBBCodeDictionary;
          }
          get pm_to_bbcode_config() {
            return this.m_PMToBBCodeConfig;
          }
          ConvertAttrToBBCodeArgs(d, f) {
            const j = this.m_PMToBBCodeConfig.mapNodes.get(d.type);
            return j && j.AttrsToBBArgs ? j.AttrsToBBArgs(f, d).args || {} : {};
          }
          constructor(d, f) {
            const j = {
                doc: { content: "block+" },
                text: { group: "inline" },
                hard_break: {
                  inline: !0,
                  group: "inline",
                  selectable: !1,
                  linebreakReplacement: !0,
                  parseDOM: [{ tag: "br" }],
                  toDOM() {
                    return ["br"];
                  },
                },
              },
              I = new Map(),
              se = new Map(),
              H = f ? new Set(f) : void 0;
            for (const te in d.nodes) {
              const { bbCode: ce, ...ve } = d.nodes[te],
                Re = on(ce, H);
              Re && ((j[te] = ve), I.set(te, Re));
            }
            const ae = {};
            for (const te in d.marks) {
              const { bbCode: ce, ...ve } = d.marks[te];
              (!H || H.has(ce.tag)) && ((ae[te] = ve), se.set(te, ce));
            }
            (this.m_ProseMirrorSchema = new U.Sj({ nodes: j, marks: ae })),
              I.forEach((te, ce) => {
                const ve = this.m_ProseMirrorSchema.nodes[ce],
                  Re = d.nodes[ce],
                  je = Array.isArray(te) ? te : [te];
                let We;
                Re.content == "list_item+"
                  ? (We = this.m_ProseMirrorSchema.nodes.list_item)
                  : Re.content?.indexOf("paragraph") != -1 &&
                    (We = this.m_ProseMirrorSchema.nodes.paragraph),
                  je.forEach(
                    ({
                      tag: Dt,
                      BBArgsToAttrs: lt,
                      AttrsToBBArgs: Ot,
                      convertContentToAttr: Tt,
                      bVerbatimArgs: ts,
                      bVerbatimContent: Bt,
                      ...Ut
                    }) => {
                      this.m_mapBBCodeDictionary.set(Dt, {
                        Constructor: {
                          node: ve,
                          BBArgsToAttrs: lt,
                          convertContentToAttr: Tt,
                          acceptNode: We,
                        },
                        skipFollowingNewline: !0,
                        ...Ut,
                      });
                    },
                  );
                const {
                  tag: Ge,
                  AttrsToBBArgs: ct,
                  bVerbatimArgs: mt,
                  bVerbatimContent: rt,
                } = je[0];
                this.m_PMToBBCodeConfig.mapNodes.set(ve, {
                  tag: Ge,
                  AttrsToBBArgs: ct,
                  bVerbatimArgs: mt,
                  bVerbatimContent: rt,
                });
              }),
              se.forEach((te, ce) => {
                const ve = this.m_ProseMirrorSchema.marks[ce],
                  { tag: Re, BBArgsToAttrs: je, AttrsToBBArgs: We, ...Ge } = te;
                this.m_mapBBCodeDictionary.set(Re, {
                  Constructor: { mark: ve, BBArgsToAttrs: je },
                  ...Ge,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(ve, {
                    tag: Re,
                    AttrsToBBArgs: We,
                  });
              });
          }
        }
        function on(p, d) {
          if (d)
            if (Array.isArray(p)) {
              const f = p.filter((j) => d.has(j.tag));
              return f.length > 0 ? f : void 0;
            } else return d.has(p.tag) ? p : void 0;
          else return p;
        }
        const {
            paragraph: ln,
            heading: An,
            bullet_list: Sn,
            list_item: vn,
            image: yn,
          } = Se.nodes,
          {
            strong: jn,
            italic: Pn,
            underline: En,
            link: Ht,
            strike: Ts,
          } = Se.marks;
        function ws(p) {
          return new Cn({
            nodes: {
              paragraph: ln,
              heading: {
                ...An,
                attrs: { level: { default: 2 }, align: { default: "left" } },
                parseDOM: [1, 2, 3, 4, 5, 6]
                  .map((d) => ({
                    tag: `h${d}`,
                    getAttrs(f) {
                      return { level: 2, align: f.style.textAlign || "left" };
                    },
                  }))
                  .concat(
                    [1, 2, 3, 4, 5, 6].map((d) => ({
                      tag: `span[data-ccp-parastyle="heading ${d}"]`,
                      getAttrs(f) {
                        return { level: 2, align: f.style.textAlign || "left" };
                      },
                    })),
                  ),
                bbCode: [2].map(Ce),
              },
              bullet_list: Sn,
              list_item: vn,
              image: { ...yn, toDOM: (d) => ["img", { src: p(d.attrs.src) }] },
              table: {
                content: "tr+",
                group: "block",
                toDOM: we("table", "div"),
                bbCode: { tag: "table" },
              },
              tr: {
                content: "(th | td)+",
                toDOM: we("tr", "div"),
                bbCode: { tag: "tr" },
              },
              th: {
                content: "paragraph block*",
                toDOM: we("th", "span"),
                bbCode: { tag: "th" },
              },
              td: {
                content: "paragraph block*",
                toDOM: we("td", "span"),
                bbCode: { tag: "td" },
              },
            },
            marks: {
              strong: jn,
              italic: Pn,
              underline: En,
              strike: Ts,
              link: {
                ...Ht,
                toDOM: (d, f) => [
                  "a",
                  {
                    ...Ht.toDOM(d, f)[1],
                    title: (0, be.we)(
                      "#StoreAdmin_GameDescription_LinksDisabled",
                    ),
                  },
                  0,
                ],
                parseDOM: void 0,
              },
            },
          });
        }
        var Yn = a(8323),
          In = a(40365),
          It = a(80968),
          cn = a(99412);
        const dn = new Yn.lu(),
          Dn = { parser: { bConvertNewlinesToBR: !0 } };
        function Ms(p) {
          const {
              language: d,
              languages: f,
              rctToolbarControls: j,
              mapValues: I,
              editorType: se,
              rctAboveEditor: H,
            } = p,
            ae = I.get(d),
            [te, ce] = v.useState(),
            ve = v.useRef(void 0),
            Re = Bn((0, cn.sfN)(d)),
            [je] = v.useState(() => new Map()),
            We = v.useCallback(
              (Ot) => {
                je.has(Ot) ||
                  je.set(Ot, new w(Re, Ot.Value, (Tt) => Ot.Set(Tt), Dn));
              },
              [Re, je],
            ),
            [Ge, ct] = v.useState();
          v.useEffect(() => {
            We(ae), ct(je.get(ae));
          }, [Re, je, We, ae]);
          const mt = (0, o.gc)(ae);
          v.useEffect(() => {
            je.get(ae).ReplaceDocument(mt);
          }, [ae, mt, je]),
            ie(Ge, { msAutosaveTimeout: 5e3 }),
            v.useEffect(() => {
              window.DisableTooltipMutationObserver &&
                window.DisableTooltipMutationObserver(),
                (window.PHPReactPreSubmitCallbacks = dn);
            }, []),
            (0, o.hL)(dn, () => Ge?.CommitChanges()),
            v.useEffect(() => {
              ve.current && ve.current();
            }, [te, ae]);
          const rt = (0, cn.sfN)(d),
            Dt = se != "awards",
            lt = v.useCallback((Ot) => Tn(Ge, I, We, Ot), [We, I, Ge]);
          return (0, e.jsx)(wn, {
            imageNodeType: Re.pm_schema.nodes.image,
            activeLanguage: rt,
            languages: f,
            children: (0, e.jsx)(kn, {
              editorType: se,
              view: te,
              refUpdateToolbar: ve,
              rctToolbarControls: j,
              schema: Re.pm_schema,
              rctAboveEditor: H,
              children: (0, e.jsx)(et, {
                panelProps: {
                  lang: (0, be.d$)(d),
                  onBlur: () => Ge?.CommitChanges(),
                },
                className: It.EditorPanel,
                pmState: Ge,
                refOnUpdate: ve,
                refView: ce,
                children: (0, e.jsx)(Rn, {
                  schema: Re,
                  activeLanguage: rt,
                  mapValues: I,
                  allowAnimations: Dt,
                  updateDocument: lt,
                }),
              }),
            }),
          });
        }
        function Tn(p, d, f, j) {
          p?.CommitChanges();
          for (const [I, se] of j) {
            const H = d.get(I);
            H && H.Value != se && (f(H), H.Set(se));
          }
        }
        function wn(p) {
          const {
              imageNodeType: d,
              activeLanguage: f,
              languages: j,
              children: I,
            } = p,
            se = (0, _.cz)(),
            H = v.useCallback(
              (te) => {
                let ce,
                  ve = new Promise((je, We) => {
                    ce = {
                      file: te,
                      onComplete: (Ge) => {
                        je(d.createChecked({ src: Ge }));
                      },
                      onCancel: () => je(void 0),
                      activeLanguage: f,
                      languages: j,
                    };
                  });
                const Re = se(ce);
                return ve.finally(() => Re()), ve;
              },
              [d, se, f, j],
            ),
            ae = v.useCallback(async (te) => {
              const ce = new URL(
                `${Nt.TS.PARTNER_BASE_URL}gfxproxy/externalgfx/`,
              );
              return (
                ce.searchParams.append("url", te),
                await (await fetch(ce, { method: "GET" })).blob()
              );
            }, []);
          return (0, e.jsx)(x.Xv, {
            ProcessFileUpload: H,
            FetchImageURL: ae,
            children: (0, e.jsxs)("div", { children: ["	", I] }),
          });
        }
        var Mn = ((p) => (
          (p[(p.k_PreviewDesktop = 1)] = "k_PreviewDesktop"),
          (p[(p.k_PreviewMobile = 2)] = "k_PreviewMobile"),
          (p[(p.k_PreviewGamepad = 3)] = "k_PreviewGamepad"),
          p
        ))(Mn || {});
        function kn(p) {
          const {
              editorType: d,
              view: f,
              refUpdateToolbar: j,
              rctToolbarControls: I,
              schema: se,
              children: H,
              rctAboveEditor: ae,
            } = p,
            [te, ce] = v.useState(!1),
            [ve, Re] = v.useState(1),
            je = v.useCallback(
              (ct) =>
                ct.borderBoxSize.length > 0 &&
                ce(ct.borderBoxSize[0].blockSize > 300),
              [],
            ),
            We = (0, In.wY)(je),
            Ge = d === "awards" && ve === 3;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ln, {
                view: f,
                refUpdateToolbar: j,
                sticky: te,
                rctToolbarControls: I,
                schema: se,
                ePreviewMode: ve,
                setPreviewMode: Re,
              }),
              (0, e.jsxs)("div", {
                className: (0, fe.A)({
                  [It.AboutTheGameArea]: !0,
                  [It.PreviewDesktop]: ve === 1,
                  [It.PreviewMobile]: ve === 2,
                  [It.PreviewGamepad]: ve === 3,
                  [It.Awards]: d === "awards",
                }),
                ref: We,
                children: [
                  ae,
                  Ge &&
                    (0, e.jsx)("div", {
                      className: It.PreviewInfo,
                      children: (0, be.we)(
                        "#StoreAdmin_GameDescription_Awards_Gamepad_Unsupported",
                      ),
                    }),
                  H,
                ],
              }),
            ],
          });
        }
        function ks(p) {
          return (0, e.jsxs)("h2", {
            className: It.StoreAppPageHeader,
            children: [
              p.children,
              (0, e.jsx)("div", { className: It.GradientRule }),
            ],
          });
        }
        function Bn(p) {
          const d = (0, _.FD)(),
            f = v.useRef(d);
          f.current = d;
          const j = v.useRef(p);
          j.current = p;
          const I = v.useRef(void 0);
          if (!I.current) {
            const se = (H) => {
              const ae = f.current.find((ce) => (0, z.q3)(ce) === H);
              return (0, z.IP)(ae, !0, j.current)?.url;
            };
            I.current = ws(se);
          }
          return I.current;
        }
        function Ln(p) {
          const {
            view: d,
            refUpdateToolbar: f,
            rctToolbarControls: j,
            schema: I,
            sticky: se,
            ePreviewMode: H,
            setPreviewMode: ae,
          } = p;
          return (0, e.jsxs)($e.bI, {
            refUpdateToolbar: f,
            view: d,
            children: [
              (0, e.jsxs)($e.Ez, {
                className: (0, fe.A)(
                  It.GameDescriptionEditorToolbar,
                  se && It.Sticky,
                ),
                children: [
                  (0, e.jsx)(vs, {}),
                  (0, e.jsx)($e.XQ, {}),
                  (0, e.jsx)(bn, { schema: I }),
                  (0, e.jsx)($e.XQ, {}),
                  (0, e.jsx)(an, { schema: I }),
                  (0, e.jsx)(es, { schema: I, maxLevel: 2, levels: 1 }),
                  (0, e.jsx)($e.XQ, {}),
                  (0, e.jsx)(hs, { schema: I, showIndentButtonsAsNeeded: !0 }),
                  "image" in I.nodes &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)($e.XQ, {}),
                        (0, e.jsx)(D.KZ, { nodeType: I.nodes.image }),
                      ],
                    }),
                  (0, e.jsx)($e.XQ, {}),
                  (0, e.jsx)(Ys, { schema: I }),
                  (0, e.jsx)($e.XQ, {}),
                  (0, e.jsx)($e.hK, {}),
                  j,
                ],
              }),
              (0, e.jsx)(Nn, { ePreviewMode: H, setPreviewMode: ae }),
            ],
          });
        }
        function Nn(p) {
          const { ePreviewMode: d, setPreviewMode: f } = p;
          return (0, e.jsxs)("div", {
            className: It.PreviewModeCtn,
            children: [
              (0, e.jsx)("div", {
                className: It.PreviewModeTitle,
                children: (0, be.we)("#StoreAdmin_GameDescription_PreviewMode"),
              }),
              (0, e.jsx)("div", {
                className: (0, fe.A)(It.PreviewItem, {
                  [It.SelectedPreview]: d === 1,
                }),
                onClick: () => f(1),
                children: (0, be.we)(
                  "#StoreAdmin_GameDescription_PreviewMode_Deskop",
                ),
              }),
              (0, e.jsx)("div", {
                className: (0, fe.A)(It.PreviewItem, {
                  [It.SelectedPreview]: d === 2,
                }),
                onClick: () => f(2),
                children: (0, be.we)(
                  "#StoreAdmin_GameDescription_PreviewMode_Mobile",
                ),
              }),
              (0, e.jsx)("div", {
                className: (0, fe.A)(It.PreviewItem, {
                  [It.SelectedPreview]: d === 3,
                }),
                onClick: () => f(3),
                children: (0, be.we)(
                  "#StoreAdmin_GameDescription_PreviewMode_Gamepad",
                ),
              }),
            ],
          });
        }
        function Rn(p) {
          const {
              schema: d,
              activeLanguage: f,
              mapValues: j,
              allowAnimations: I,
              updateDocument: se,
            } = p,
            H = v.useMemo(
              () => [
                {
                  type: d.pm_schema.nodes.image,
                  component: D.AS,
                  readProps: (ae) => ({
                    src: ae.attrs.src,
                    inLink: ae.marks.some(
                      (te) => te.type == d.pm_schema.marks.link,
                    ),
                    activeLanguage: f,
                    mapValues: j,
                    allowAnimations: I,
                    fnUpdateDocument: se,
                  }),
                },
              ],
              [d, f, I, j, se],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(T, { specs: H }),
              (0, e.jsx)(x.pw, { nodeType: d.pm_schema.nodes.image }),
            ],
          });
        }
      },
      82363: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { B: () => q });
        var e = a(7850),
          c = a(90626),
          o = a(58534),
          Y = a(28410),
          M = a(69168),
          ee = a(88003),
          U = a(85599),
          L = a(36707),
          ne = a(18210),
          k = a(64868),
          y = a(27539),
          $ = a.n(y),
          oe = a(99412),
          Ie = a(14947),
          Ne = a(17616);
        function q(g) {
          const {
              hideModal: w,
              entries: Z,
              isLoading: v,
              fnRefetch: ie,
              mutateAltTextAsync: V,
              isMutatePending: N,
              fnGetImage: T,
            } = g,
            { bAppHasSteamChinaToolsEnabled: K } = (0, Y.aJ)(),
            F = c.useMemo(() => (0, ne.O9)(K), [K]),
            {
              strActiveLanguage: X,
              eActiveLang: D,
              rctLanguageSelect: z,
              mapValues: _,
            } = (0, Ne.eE)(F),
            [x, S] = c.useState(new Map()),
            [B, J] = c.useState(new Map());
          c.useEffect(() => {
            const me = new Map(),
              we = new Map();
            for (const Ce of Z)
              me.set(Ce.key, structuredClone(Ce)),
                we.set(Ce.key, structuredClone(Ce));
            S(me), J(we);
          }, [Z]);
          const de = c.useCallback(() => {
            for (const me of F.keys()) {
              const we = Array.from(x.values()).some(
                (Ce) => Ce.mapAltText && me in Ce.mapAltText,
              );
              _.get(me).Set(we ? "yes" : "");
            }
          }, [_, x, F]);
          c.useEffect(() => de(), [de]);
          const ge = (0, k.CH)(),
            Ae = (me) => x.get(me)?.mapAltText?.[X] ?? "",
            Fe = (me, we) => {
              let Ce = x.get(me);
              Ce || ((Ce = {}), x.set(me, Ce)),
                Ce.mapAltText || (Ce.mapAltText = {}),
                we.trim().length > 0
                  ? (Ce.mapAltText[X] = we)
                  : delete Ce.mapAltText[X],
                de(),
                ge();
            },
            R = Ie.sH.set(),
            Te = async () => {
              try {
                R.clear();
                for (const [me, we] of x.entries()) {
                  if (E(we.mapAltText, B.get(me).mapAltText)) continue;
                  const Ce = { ...we.mapAltText };
                  for (const Be of Object.keys(B.get(me).mapAltText ?? {}))
                    Be in we.mapAltText || (Ce[Be] = "");
                  (await V(me, Ce)) ? B.set(me, { ...we }) : R.add(me);
                }
                ie?.(), R.size == 0 && w();
              } catch (me) {
                console.error("Some mutations failed", me);
              }
            },
            Oe = N || v,
            fe = () => {
              Oe || w();
            },
            _e = Array.from(x.values()).some((me) => me.caption != null);
          return (0, e.jsx)(M.E, {
            active: !0,
            children: (0, e.jsx)(ee.x_, {
              onEscKeypress: fe,
              bDisableBackgroundDismiss: Oe,
              children: (0, e.jsxs)(o.U9, {
                classNameContent: y.AltTextDialogContent,
                children: [
                  (0, e.jsx)(o.Y9, {
                    children: (0, ne.we)("#StoreAdmin_EditAltText_Title"),
                  }),
                  (0, e.jsxs)("div", {
                    className: y.AltTextDialogDescription,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, ne.we)(
                              "#StoreAdmin_EditAltText_Desc",
                            ),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, ne.we)(
                              "#StoreAdmin_EditAltText_Desc2",
                            ),
                          }),
                        ],
                      }),
                      z,
                    ],
                  }),
                  (0, e.jsxs)(o.nB, {
                    children: [
                      (0, e.jsxs)("table", {
                        className: (0, L.A)(y.AltTextGrid),
                        children: [
                          (0, e.jsx)("thead", {
                            className: (0, L.A)(y.AltTextHeader),
                            children: (0, e.jsxs)("tr", {
                              children: [
                                (0, e.jsx)("th", {
                                  className: (0, L.A)(y.AltTextImage),
                                }),
                                _e &&
                                  (0, e.jsx)("th", {
                                    className: (0, L.A)(y.AltTextName),
                                    children: (0, ne.we)(
                                      "#StoreAdmin_EditAltText_ColAssetName",
                                    ),
                                  }),
                                (0, e.jsx)("th", {
                                  className: (0, L.A)(y.AltTextInput),
                                  children: (0, ne.we)(
                                    "#StoreAdmin_EditAltText_ColAltText",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("tbody", {
                            children:
                              !Oe &&
                              Array.from(x.values()).map((me) =>
                                (0, e.jsx)(
                                  O,
                                  {
                                    lang: D,
                                    caption: me.caption,
                                    image: T(me.key, D),
                                    altText: Ae(me.key),
                                    setAltText: (we) => Fe(me.key, we),
                                    failedMutate: R.has(me.key),
                                    showCaptionColumn: _e,
                                  },
                                  `${me.key}-${D}`,
                                ),
                              ),
                          }),
                        ],
                      }),
                      Oe && (0, e.jsx)(U.t, {}),
                    ],
                  }),
                  (0, e.jsxs)(o.wi, {
                    children: [
                      R.size > 0 &&
                        (0, e.jsx)("div", {
                          className: y.AltTextMutateFailed,
                          children: (0, ne.we)(
                            "#StoreAdmin_EditAltText_MutateFailed",
                          ),
                        }),
                      (0, e.jsx)(o.CB, {
                        onCancel: fe,
                        onOK: (me) => {
                          me.preventDefault(), Te();
                        },
                        bOKDisabled: Oe || Q(x, B),
                        bCancelDisabled: Oe,
                        strOKText: (0, ne.we)("#StoreAdmin_EditAltText_Save"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function O(g) {
          const {
              lang: w,
              image: Z,
              caption: v,
              altText: ie,
              setAltText: V,
              failedMutate: N,
              showCaptionColumn: T,
            } = g,
            [K, F] = c.useState(ie),
            X = K === "#decorative-only",
            [D, z] = c.useState(X ? "" : ie),
            _ = (x, S) => {
              F(x), V(x), S || z(x);
            };
          return (0, e.jsxs)("tr", {
            className: y.AltTextRow,
            children: [
              (0, e.jsx)("td", { className: y.AltTextImage, children: Z }),
              T &&
                (0, e.jsxs)("td", {
                  className: y.AltTextName,
                  children: [
                    v,
                    N &&
                      (0, e.jsx)("div", {
                        className: y.AltTextFailed,
                        children: (0, ne.we)(
                          "#StoreAdmin_EditAltText_EntryMutateFailed",
                        ),
                      }),
                  ],
                }),
              (0, e.jsxs)("td", {
                className: y.AltTextInput,
                children: [
                  (0, e.jsx)(o.pd, {
                    type: "text",
                    placeholder: X
                      ? (0, ne.we)(
                          "#StoreAdmin_EditAltText_PlaceholderDecorative",
                        )
                      : (0, ne.we)(
                          "#StoreAdmin_EditAltText_Placeholder",
                          (0, ne.we)(`#Language_${(0, oe.LgB)(w)}`),
                        ),
                    value: X ? "" : K,
                    onChange: (x) => _(x.target.value, !1),
                    disabled: X,
                  }),
                  (0, e.jsx)(o.Yh, {
                    checked: X,
                    onChange: (x) => _(x ? "#decorative-only" : D, !0),
                    label: (0, ne.we)("#StoreAdmin_EditAltText_Presentational"),
                    tooltip: (0, ne.we)(
                      "#StoreAdmin_EditAltText_Presentational_ttip",
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function E(g, w) {
          const Z = g ? Object.keys(g) : [],
            v = w ? Object.keys(w) : [];
          return Z.length !== v.length ? !1 : Z.every((ie) => g[ie] === w[ie]);
        }
        function Q(g, w) {
          if (g.size !== w.size) return !1;
          for (const [Z, v] of g) {
            const ie = w.get(Z);
            if (!ie || !E(v.mapAltText, ie.mapAltText)) return !1;
          }
          return !0;
        }
      },
      28410: (re, Ue, a) => {
        "use strict";
        a.d(Ue, {
          _M: () => D,
          aJ: () => ge,
          FD: () => _,
          L4: () => x,
          Z3: () => S,
          cz: () => J,
          TQ: () => Ae,
          gg: () => Fe,
          Y7: () => de,
        });
        var e = a(7850),
          c = a(32093),
          o = a(71742),
          Y = a(34604),
          M = a(90626),
          ee = a(58534),
          U = a(22633),
          L = a(1880),
          ne = a(69168),
          k = a(85599),
          y = a(36707),
          $ = a(18210),
          oe = a(76349),
          Ie = a(64868),
          Ne = a(38410),
          q = a(99412),
          O = a(48127),
          E = a(69787),
          Q = a(14295);
        function g(fe) {
          const { rgUploads: _e } = fe,
            me = M.useMemo(() => new Set(), []),
            we = _e.findIndex(({ id: Le }) => !me.has(Le)),
            Ce = (0, Ie.CH)(),
            Ze = (Le) => {
              me.add(Le), Ce();
            },
            Be = (Le) => {
              me.delete(Le), Ce();
            };
          return _e.map(({ id: Le, upload: Se }, ye) =>
            (0, e.jsx)(
              w,
              {
                active: ye == we,
                upload: Se,
                fnUploadPrepared: () => Ze(Le),
                fnUploadComplete: () => Be(Le),
              },
              Le,
            ),
          );
        }
        function w(fe) {
          const {
              upload: _e,
              active: me,
              fnUploadPrepared: we,
              fnUploadComplete: Ce,
            } = fe,
            [Ze, Be] = M.useState(!1),
            [Le, Se] = M.useState(void 0);
          M.useEffect(() => {
            me &&
              (N(_e.file) ||
                Se(
                  (0, $.we)(
                    "#StoreAdmin_UploadError_UnsupportedFileType",
                    _e.file.name,
                  ),
                )),
              Be(me);
          }, [me, _e]);
          const [ye, Me] = M.useState(!1),
            W = (0, Q.L)(),
            pe = de(),
            xe = async (ke, He) => {
              we(), Me(!0);
              try {
                if (!(await W.AddImageForLanguage(_e.file, He))) {
                  Se((0, $.we)("#StoreAdmin_UploadError_UnableToGetFileInfo"));
                  return;
                }
                const be = (await W.UploadAllImages())[0];
                if (!be || !be.bSuccess) {
                  Se(
                    be?.image?.message
                      ? (0, $.PP)(
                          "#StoreAdmin_UploadError_Generic",
                          be.image.message,
                        )
                      : (0, $.we)("#StoreAdmin_UploadError_Unknown"),
                  );
                  return;
                }
                pe(be.uploadResult), _e.onComplete((0, Y.TQ)(ke));
              } finally {
                Me(!1), Ce();
              }
            };
          return Ze
            ? Le
              ? (0, e.jsx)(ne.E, {
                  active: !0,
                  children: (0, e.jsx)(L.o0, {
                    bAlertDialog: !0,
                    strTitle: (0, $.we)("#Error_Generic"),
                    strDescription: Le,
                    strOKButtonText: (0, $.we)("#Button_OK"),
                    closeModal: () => _e.onCancel(),
                  }),
                })
              : (0, e.jsx)(Z, { upload: _e, isUploading: ye, doUpload: xe })
            : null;
        }
        function Z(fe) {
          const { upload: _e, isUploading: me, doUpload: we } = fe,
            { file: Ce, onCancel: Ze } = _e,
            { rgExtraAssets: Be, regexInvalidFilenameCharacters: Le } = x(),
            Se = M.useCallback(
              (Ve) => Ve?.replace(Le, "_").toLowerCase() ?? "",
              [Le],
            ),
            { baseFilename: ye, language: Me } = (0, Ne.jj)(Ce.name, q.xPp),
            [W, pe] = M.useState(() => Se(ye)),
            xe = M.useMemo(() => Se(W), [W, Se]),
            ke = (0, O.Gr)(_e.languages),
            He = K(
              ke.map((Ve) => Ve.data),
              Me,
              _e.activeLanguage,
            ),
            [De, Pe] = M.useState(He),
            [be, Ke] = M.useState(void 0),
            Xe = Ce.name;
          M.useEffect(() => {
            Ke(() => {
              if (!xe) return;
              const { baseFilename: Ve } = (0, Ne.jj)(xe),
                tt = Be.find((ft) => (0, Y.K7)(ft) == Ve);
              return tt
                ? (0, Y.i$)(tt)
                  ? tt
                  : tt.images?.[(0, q.LgB)(De)]
                : void 0;
            });
          }, [Xe, xe, Be, De]);
          const et = V(xe) && !me ? () => we(xe, De) : void 0,
            Qe = (Ve) => {
              Ve.preventDefault(), et && et();
            },
            Ye = M.useCallback(() => {
              _e.onComplete((0, Y.TQ)(xe));
            }, [_e, xe]),
            st = be
              ? (0, $.we)("#StoreAdmin_ExtraAssetUpload_UploadAndReplace")
              : (0, $.we)("#Button_Upload");
          return (0, e.jsx)(U.mt, {
            active: !0,
            onDismiss: Ze,
            className: oe.UploadModal,
            children: (0, e.jsxs)(ee.U9, {
              onSubmit: Qe,
              children: [
                (0, e.jsx)(ee.Y9, {
                  children: (0, $.we)("#StoreAdmin_ExtraAssetUpload_UploadNew"),
                }),
                (0, e.jsxs)(ee.nB, {
                  children: [
                    (0, e.jsx)(v, {
                      file: Ce,
                      isVideo: T(Ce),
                      duplicate: be,
                      bShowThrobber: me,
                      onUseDuplicate: Ye,
                    }),
                    (0, e.jsx)(ie, {
                      name: W,
                      validatedName: xe,
                      setName: pe,
                      disabled: me,
                    }),
                    ke.length > 1 &&
                      (0, e.jsx)(ee.m, {
                        rgOptions: ke,
                        selectedOption: De,
                        onChange: (Ve) => Pe(Ve.data),
                      }),
                  ],
                }),
                (0, e.jsx)(ee.wi, {
                  children: (0, e.jsx)(ee.CB, {
                    onOK: et,
                    strOKText: st,
                    bOKDisabled: !et,
                    onCancel: Ze,
                  }),
                }),
              ],
            }),
          });
        }
        function v(fe) {
          const {
              file: _e,
              isVideo: me,
              duplicate: we,
              bShowThrobber: Ce,
              onUseDuplicate: Ze,
            } = fe,
            Be = M.useMemo(() => URL.createObjectURL(_e), [_e]),
            Le = (0, E.Un)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              we &&
                (0, e.jsx)("div", {
                  className: oe.DuplicateMessage,
                  children: (0, $.we)(
                    "#StoreAdmin_ExtraAssetUpload_FileNameInuse",
                  ),
                }),
              (0, e.jsxs)("div", {
                className: (0, y.A)(oe.SideBySideComparison, Ce && oe.Loading),
                children: [
                  Ce &&
                    (0, e.jsx)("div", {
                      className: oe.ThrobberContainer,
                      children: (0, e.jsx)(k.t, {
                        position: "center",
                        size: "xlarge",
                      }),
                    }),
                  we &&
                    (0, e.jsxs)("div", {
                      className: (0, y.A)(
                        oe.ImgPreviewContainer,
                        oe.DuplicatePreview,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: oe.ImageLabel,
                          children: (0, $.we)(
                            "#StoreAdmin_ExtraAssetUpload_Original",
                          ),
                        }),
                        (0, e.jsx)("img", {
                          src:
                            "name" in we
                              ? (0, Y.FZ)(we, q.Bhc, Le)
                              : (0, E.cn)((0, Y.ar)(we, !1)?.url, Le),
                          className: oe.ImgPreview,
                        }),
                      ],
                    }),
                  (0, e.jsxs)("div", {
                    className: oe.ImgPreviewContainer,
                    children: [
                      we &&
                        (0, e.jsx)("div", {
                          className: oe.ImageLabel,
                          children: (0, $.we)(
                            "#StoreAdmin_ExtraAssetUpload_Replacement",
                          ),
                        }),
                      !me &&
                        (0, e.jsx)("img", {
                          src: Be,
                          className: oe.ImgPreview,
                        }),
                      me &&
                        (0, e.jsx)("video", {
                          src: Be,
                          className: oe.ImgPreview,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          autoPlay: !0,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function ie(fe) {
          const { name: _e, setName: me, validatedName: we, disabled: Ce } = fe,
            Ze = M.useCallback((Be) => Be && Be.element.select(), []);
          return (0, e.jsx)("div", {
            children: (0, e.jsx)(ee.pd, {
              value: _e,
              onChange: (Be) => me(Be.currentTarget.value),
              label: (0, $.we)("#StoreAdmin_ExtraAssetUpload_EnterAName"),
              ref: Ze,
              disabled: Ce,
              description: (0, $.PP)(
                "#StoreAdmin_ExtraAssetUpload_WillBeSavedAsFilename",
                (0, e.jsx)("b", { children: we }),
              ),
            }),
          });
        }
        function V(fe) {
          return fe && fe.length > 0;
        }
        function N(fe) {
          switch (fe.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            case "image/webp":
              return "webp";
            case "video/mp4":
              return "mp4";
            case "video/webm":
              return "webm";
            default:
              return;
          }
        }
        function T(fe) {
          return fe.type.startsWith("video/");
        }
        function K(fe, _e, me) {
          return fe?.length == 1 ? fe[0] : _e != q.xPp ? _e : me;
        }
        var F = a(17616),
          X = a(67705);
        function D(fe) {
          const { children: _e } = fe,
            [me, we] = M.useState([]),
            Ce = M.useRef(0),
            Ze = M.useCallback(
              (Be) => (
                we((Le) => [...Le, { upload: Be, id: Ce.current++ }]),
                () => we((Le) => Le.filter((Se) => Se.upload != Be))
              ),
              [],
            );
          return (0, e.jsx)(z, {
            queueExtraAssetUpload: Ze,
            children: (0, e.jsx)(Oe, {
              children: (0, e.jsxs)(F.jy, {
                children: [(0, e.jsx)(g, { rgUploads: me }), _e],
              }),
            }),
          });
        }
        function z(fe) {
          const { children: _e, queueExtraAssetUpload: me } = fe,
            [we, Ce] = M.useState(void 0),
            [Ze, Be] = M.useState([]),
            [Le, Se] = M.useState(!1);
          M.useEffect(() => {
            let W = (0, X.Tc)("rgGamePageConfig", "application_config");
            W ||
              (console.error(
                "Missing config data for game edit page - some components may not work",
              ),
              (W = {
                rgExtraAssetsData: {
                  rgExtraAssets: [],
                  rgInvalidFilenameCharacters: [],
                },
                strGameControllerURLFormat: "",
                bAppHasSteamChinaToolsEnabled: !1,
              })),
              Ce(W),
              Be(W.rgExtraAssetsData.rgExtraAssets),
              Se(W.bAppHasSteamChinaToolsEnabled);
          }, []);
          const ye = M.useMemo(() => {
              if (we)
                return (
                  we.rgExtraAssetsData.rgInvalidFilenameCharacters.forEach(
                    (W) =>
                      (0, o.wT)(
                        W.length == 1,
                        `Expected single-character replacements, "${W} is not`,
                      ),
                  ),
                  new RegExp(
                    `[${we.rgExtraAssetsData.rgInvalidFilenameCharacters.map((W) => `\\${W}`)}]`,
                    "g",
                  )
                );
            }, [we]),
            Me = M.useMemo(
              () => ({
                rgExtraAssetsData: {
                  rgExtraAssets: Ze,
                  regexInvalidFilenameCharacters: ye,
                },
                strGameControllerURLFormat: we?.strGameControllerURLFormat,
                queueExtraAssetUpload: me,
                onExtraAssetsUpdated: Be,
                storeItemID: we?.nStoreItemID,
                eStoreItemType: we?.eStoreItemType,
                bAppHasSteamChinaToolsEnabled: Le,
              }),
              [we, Ze, ye, me, Le],
            );
          return we ? (0, e.jsx)(R, { value: Me, children: _e }) : null;
        }
        function _(fe = !1) {
          const _e = M.useContext(R).rgExtraAssetsData.rgExtraAssets;
          return M.useMemo(() => (fe ? [..._e].reverse() : _e), [_e, fe]);
        }
        function x() {
          return M.useContext(R).rgExtraAssetsData;
        }
        function S(fe) {
          return M.useContext(R).strGameControllerURLFormat.replace(
            ":method:",
            fe,
          );
        }
        function B() {
          const fe = React.useContext(R);
          return { type: fe.eStoreItemType, id: fe.storeItemID };
        }
        function J() {
          return M.useContext(R).queueExtraAssetUpload;
        }
        function de() {
          return M.useContext(R).onExtraAssetsUpdated;
        }
        function ge() {
          const fe = M.useContext(R),
            _e = M.useMemo(
              () =>
                fe.bAppHasSteamChinaToolsEnabled
                  ? [c.TU.k_ESteamRealmGlobal, c.TU.k_ESteamRealmChina]
                  : [c.TU.k_ESteamRealmGlobal],
              [fe.bAppHasSteamChinaToolsEnabled],
            );
          return {
            bAppHasSteamChinaToolsEnabled: fe.bAppHasSteamChinaToolsEnabled,
            rgRealmList: _e,
          };
        }
        function Ae() {
          return M.useContext(Te).bUseRichEditor;
        }
        function Fe() {
          return M.useContext(Te).setUseRichEditor;
        }
        const R = M.createContext(void 0),
          Te = M.createContext(void 0);
        function Oe(fe) {
          const _e = "storeEditorDisableRichEditor",
            [me, we] = M.useState(() => !localStorage.getItem(_e)),
            Ce = M.useCallback((Be) => {
              Be ? localStorage.removeItem(_e) : localStorage.setItem(_e, "1"),
                we(Be);
            }, []),
            Ze = M.useMemo(
              () => ({ bUseRichEditor: me, setUseRichEditor: Ce }),
              [me, Ce],
            );
          return (0, e.jsx)(Te.Provider, { value: Ze, children: fe.children });
        }
      },
      12175: (re, Ue, a) => {
        "use strict";
        a.r(Ue), a.d(Ue, { default: () => sl });
        var e = a(7850),
          c = a(90626),
          o = a(18210),
          Y = a(93763),
          M = a(36118),
          ee = a(17479),
          U = a(36707),
          L = a(249),
          ne = a(53906),
          k = a(71421),
          y = a(3166);
        function $(n) {
          const t = n.strSecondaryCategory
              ? `${y.TS.STORE_BASE_URL}search/?controllersupport=${n.strCategory}%2C${n.strSecondaryCategory}`
              : `${y.TS.STORE_BASE_URL}search/?controllersupport=${n.strCategory}`,
            s = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, U.A)(
                    ee.ImgSection,
                    n.bHightlightRow && ee.HighlightRow,
                    n.bHighlightGPRequired && ee.GamepadRequired,
                  ),
                  children: n.tagImage,
                }),
                (0, e.jsxs)("div", {
                  className: (0, U.A)(
                    ee.LocSection,
                    n.bHighlightText && ee.HighlightText,
                    n.bHightlightRow && ee.HighlightRow,
                    n.bHighlightGPRequired && ee.GamepadRequired,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, U.A)(
                        ee.LocString,
                        n.bHighlightText && ee.HighlightText,
                        n.bHightlightRow && ee.HighlightRow,
                        n.bHighlightGPRequired && ee.GamepadRequired,
                        n.bPersonalized && ee.Personalized,
                      ),
                      children: (0, o.we)(n.strLocalizationToken),
                    }),
                    n.strTooltipString &&
                      (0, e.jsx)(k.he, {
                        toolTipContent: (0, o.we)(n.strTooltipString),
                        className: ee.ToolTipContainer,
                        children: (0, e.jsx)("span", {
                          className: ee.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return n.strCategory
            ? (0, e.jsx)("a", { href: t, className: ee.InfoRow, children: s })
            : (0, e.jsx)("div", { className: ee.InfoRow, children: s });
        }
        function oe(n) {
          return (0, e.jsx)("div", {
            className: ee.PreviewContainer,
            children: (0, e.jsx)(E, { bPreview: !0, ...n }),
          });
        }
        function Ie(n) {
          return jsx(Fragment, {
            children:
              (n.bPartialXboxControllerSupport ||
                n.bFullXboxControllerSupport) &&
              jsx("div", {
                className: styles.StoreSidebarContainer,
                children: jsx(E, { ...n }),
              }),
          });
        }
        function Ne() {
          return (0, e.jsx)($, {
            tagImage: (0, e.jsx)(L.Moo, {
              className: (0, U.A)(ee.Tilt, ee.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function q() {
          return (0, e.jsxs)("div", {
            className: (0, U.A)(ee.PurchaseNoticeContainer),
            children: [
              (0, e.jsx)(L.Kz1, {
                className: (0, U.A)(ee.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, e.jsx)("div", {
                className: (0, U.A)(ee.PurchaseNoticeLabel),
                children: (0, o.we)(
                  "#Store_ControllerSupport_GamepadPreferred",
                ),
              }),
            ],
          });
        }
        function O(n) {
          const { bNoKeyboardSupport: t, bGamepadPreferred: s } = n;
          return (0, e.jsxs)("div", {
            className: (0, U.A)(ee.NoticeContainer),
            children: [t && (0, e.jsx)(Ne, {}), s && !t && (0, e.jsx)(q, {})],
          });
        }
        function E(n) {
          const {
            bControllerSupportWizardComplete: t,
            bPS4ControllerSupport: s,
            bPS5ControllerSupport: r,
            bPS4ControllerBTSupport: i,
            bPS5ControllerBTSupport: l,
            bFullXboxControllerSupport: u,
            bPartialXboxControllerSupport: m,
            bSteamInputAPISupport: h,
            bHasOther: C,
            bHasPS4: b,
            bHasPS5: A,
            bHasXbox: P,
            bPreview: G,
          } = n;
          let ue = [];
          if (s && r && i && l) {
            const ze = (0, e.jsx)(L.pcV, {
                className: ee.SmallerSVG,
                controllerType: ne._X,
                partial: !u,
                role: "presentation",
              }),
              he = b || A;
            ue.push(
              (0, e.jsx)(
                $,
                {
                  tagImage: ze,
                  strLocalizationToken: he
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: he,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (s) {
              const ze = (0, e.jsx)(L.pcV, {
                className: ee.SmallerSVG,
                controllerType: ne._X,
                partial: !u,
                role: "presentation",
              });
              i
                ? ue.push(
                    (0, e.jsx)(
                      $,
                      {
                        tagImage: ze,
                        strLocalizationToken: b
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: b,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : ue.push(
                    (0, e.jsx)(
                      $,
                      {
                        tagImage: ze,
                        strLocalizationToken: b
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: b,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (r) {
              const ze = (0, e.jsx)(L.pcV, {
                className: ee.SmallerSVG,
                controllerType: ne.HD,
                partial: !u,
                role: "presentation",
              });
              l
                ? ue.push(
                    (0, e.jsx)(
                      $,
                      {
                        tagImage: ze,
                        strLocalizationToken: A
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: A,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : ue.push(
                    (0, e.jsx)(
                      $,
                      {
                        tagImage: ze,
                        strLocalizationToken: A
                          ? "#Store_ControllerSupport_PS5_USB_Personalized"
                          : "#Store_ControllerSupport_PS5_USB",
                        bPersonalized: A,
                        strCategory: "57",
                      },
                      "5",
                    ),
                  );
            }
          }
          return (0, e.jsx)(e.Fragment, {
            children:
              (m || u) &&
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: ee.ControllerSupportLevelString,
                    children: (0, o.we)(
                      u
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, e.jsx)($, {
                    tagImage: (0, e.jsx)(L.pcV, {
                      className: ee.SmallerSVG,
                      controllerType: ne.Oh,
                      partial: !u,
                      role: "presentation",
                    }),
                    strLocalizationToken: P
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: P,
                    strCategory: "18",
                  }),
                  ue,
                  h &&
                    (0, e.jsx)($, {
                      tagImage: (0, e.jsx)(L.kdM, {
                        className: ee.BiggerSVG,
                        bGreyOutRightSide: !u,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!G && !t) || (!h && C && !P)) &&
                    (0, e.jsx)($, {
                      tagImage: (0, e.jsx)(L.vet, {
                        className: ee.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        C || b || A
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: C || b || A,
                    }),
                  (0, e.jsx)(O, { ...n }),
                ],
              }),
          });
        }
        const Q = null;
        var g = a(58534),
          w = a(2801),
          Z = a(31623);
        function v(n, t) {
          const s = document.getElementById(n);
          s && s.setAttribute("value", t ? "true" : "");
        }
        async function ie(n) {
          v("gamepadsupport_input_1", n.bPartialXboxControllerSupport),
            v("gamepadsupport_input_2", n.bFullXboxControllerSupport),
            v("controllersupport_input_3", n.bPS4ControllerSupport),
            v("controllersupport_input_4", n.bPS4ControllerBTSupport),
            v("controllersupport_input_5", n.bPS5ControllerSupport),
            v("controllersupport_input_6", n.bPS5ControllerBTSupport),
            v("controllersupport_input_7", n.bSteamInputAPISupport),
            v("controllersupport_input_8", n.bNoKeyboardSupport),
            v("controllersupport_input_8_input", n.bNoKeyboardSupport),
            v("controllersupport_input_9", n.bGamepadPreferred),
            v("controllersupport_input_10", !0);
          const t = document.getElementById("submitBtn");
          t && t.click();
        }
        var V = ((n) => (
          (n[(n.k_eMouseKBOnly = 0)] = "k_eMouseKBOnly"),
          (n[(n.k_eGamepadAndMouse = 1)] = "k_eGamepadAndMouse"),
          (n[(n.k_eGamepadPreferred = 2)] = "k_eGamepadPreferred"),
          (n[(n.k_eGamepadRequired = 3)] = "k_eGamepadRequired"),
          n
        ))(V || {});
        function N(n) {
          const {
              nPageNum: t,
              currentValues: s,
              setCurrentValues: r,
              setSkipToEnd: i,
            } = n,
            l = [
              {
                id: 0,
                locString: "#ControllerSupportModal_PgOne_MouseKBOnly",
                settings: {
                  bFullXboxControllerSupport: !1,
                  bPartialXboxControllerSupport: !1,
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                  bSteamInputAPISupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !1,
                },
                bSkipToEnd: !0,
              },
              {
                id: 1,
                locString: "#ControllerSupportModal_PgOne_GamepadAndMouse",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !1,
                },
              },
              {
                id: 2,
                locString: "#ControllerSupportModal_PgOne_GamepadPreferred",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !0,
                },
              },
              {
                id: 3,
                locString: "#ControllerSupportModal_PgOne_GamepadRequired",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !0,
                  bGamepadPreferred: !1,
                },
              },
            ],
            u = () =>
              s.bNoKeyboardSupport
                ? 3
                : s.bGamepadPreferred
                  ? 2
                  : s.bFullXboxControllerSupport ||
                      s.bPartialXboxControllerSupport
                    ? 1
                    : 0,
            m = u(),
            h = (A) => {
              const P = l.find((G) => G.id == A);
              r({ ...s, ...P?.settings }), i(P.bSkipToEnd ?? !1);
            };
          c.useEffect(() => {
            m == 0 && i(!0);
          }, [m, i]);
          const C = (0, e.jsx)("div", {
              children: (0, e.jsx)(g.zW, {
                labelId: null,
                value: u(),
                onChange: h,
                children: l.map((A) =>
                  (0, e.jsxs)(
                    g.a,
                    {
                      value: A.id,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, U.A)(
                            Z.RadioButton,
                            m == A.id && Z.Selected,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: Z.OptionLabel,
                          children: (0, o.we)(A.locString),
                        }),
                      ],
                    },
                    A.id,
                  ),
                ),
              }),
            }),
            b = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#ControllerSupportModal_PgOne_Instructions",
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#ControllerSupportModal_PgOne_Instructions_VR",
                  ),
                }),
              ],
            });
          return (0, e.jsx)(J, {
            strStepName: (0, o.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgOne_Header",
            strInstructionsToken: b,
            strQuestionToken: "#ControllerSupportModal_PgOne_Question",
            leftColumnContent: C,
          });
        }
        var T = ((n) => (
          (n[(n.k_eFullXboxControllerSupport = 0)] =
            "k_eFullXboxControllerSupport"),
          (n[(n.k_ePartialXboxControllerSupport = 1)] =
            "k_ePartialXboxControllerSupport"),
          n
        ))(T || {});
        function K(n) {
          const {
              nPageNum: t,
              currentValues: s,
              setCurrentValues: r,
              setSkipToEnd: i,
            } = n,
            l = c.useMemo(
              () => [
                {
                  id: 0,
                  locString: "#ControllerSupportModal_PgTwo_FullController",
                  settings: {
                    bFullXboxControllerSupport: !0,
                    bPartialXboxControllerSupport: !1,
                  },
                  bSkipToEnd: !1,
                },
                {
                  id: 1,
                  locString: "#ControllerSupportModal_PgTwo_PartialController",
                  settings: {
                    bFullXboxControllerSupport: !1,
                    bPartialXboxControllerSupport: !0,
                  },
                },
              ],
              [],
            ),
            u = c.useCallback(
              () => (s.bFullXboxControllerSupport ? 0 : 1),
              [s],
            ),
            m = c.useCallback(
              (A) => {
                const P = l.find((G) => G.id == A);
                r({ ...s, ...P?.settings }), i(P.bSkipToEnd ?? !1);
              },
              [s, l, r, i],
            ),
            h = u(),
            C = (0, e.jsx)("div", {
              children: (0, e.jsx)(g.zW, {
                labelId: null,
                value: u(),
                onChange: m,
                children: l.map((A) =>
                  (0, e.jsxs)(
                    g.a,
                    {
                      value: A.id,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, U.A)(
                            Z.RadioButton,
                            h == A.id && Z.Selected,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: Z.OptionLabel,
                          children: (0, o.we)(A.locString),
                        }),
                      ],
                    },
                    A.id,
                  ),
                ),
              }),
            }),
            b = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#ControllerSupportModal_PgTwo_Instructions",
                  ),
                }),
                (0, e.jsxs)("ol", {
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, o.we)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt1",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, o.we)(
                        "#ControllerSupportModal_PgThree_Instructions_pt1",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, o.we)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt4",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, o.we)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt5",
                      ),
                    }),
                  ],
                }),
              ],
            });
          return (0, e.jsx)(J, {
            stepIMG: (0, e.jsx)(L.xIk, { type: "xbox" }),
            strStepName: (0, o.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgTwo_Header",
            strInstructionsToken: b,
            strQuestionToken: "#ControllerSupportModal_PgTwo_Question",
            leftColumnContent: C,
          });
        }
        function F(n) {
          const { nPageNum: t, currentValues: s, setCurrentValues: r } = n,
            i = [
              {
                id: 0,
                locString: "#ControllerSupportModal_PgThree_Ps4",
                settings: { bPS4ControllerSupport: !0 },
                invertedSettings: {
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                },
                bValue: s.bPS4ControllerSupport,
              },
              {
                id: 1,
                locString: "#ControllerSupportModal_PgThree_Ps4BT",
                settings: {
                  bPS4ControllerBTSupport: !0,
                  bPS4ControllerSupport: !0,
                },
                invertedSettings: { bPS4ControllerBTSupport: !1 },
                bValue: s.bPS4ControllerBTSupport,
              },
              {
                id: 2,
                locString: "#ControllerSupportModal_PgThree_Ps5",
                settings: { bPS5ControllerSupport: !0 },
                invertedSettings: {
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                },
                bValue: s.bPS5ControllerSupport,
              },
              {
                id: 3,
                locString: "#ControllerSupportModal_PgThree_Ps5BT",
                settings: {
                  bPS5ControllerBTSupport: !0,
                  bPS5ControllerSupport: !0,
                },
                invertedSettings: { bPS5ControllerBTSupport: !1 },
                bValue: s.bPS5ControllerBTSupport,
              },
              {
                id: 4,
                locString: "#ControllerSupportModal_PgThree_None",
                settings: {
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                },
                invertedSettings: { bPS4ControllerSupport: !0 },
                bValue:
                  !s.bPS4ControllerSupport &&
                  !s.bPS4ControllerBTSupport &&
                  !s.bPS5ControllerSupport &&
                  !s.bPS5ControllerBTSupport,
              },
            ],
            l = (h) => {
              r({ ...s, ...h });
            },
            u = (0, e.jsx)("div", {
              children: i.map((h) =>
                (0, e.jsx)(
                  g.Yh,
                  {
                    checked: h.bValue,
                    onChange: (C) => l(C ? h.settings : h.invertedSettings),
                    label: (0, o.we)(h.locString),
                  },
                  h.id,
                ),
              ),
            }),
            m = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#ControllerSupportModal_PgThree_Instructions",
                  ),
                }),
                (0, e.jsx)("ol", {
                  children: (0, e.jsx)("li", {
                    children: (0, o.we)(
                      "#ControllerSupportModal_PgThree_Instructions_pt1",
                    ),
                  }),
                }),
                (0, e.jsx)("p", {
                  children: (0, o.oW)(
                    "#ControllerSupportModal_PgThree_Instructions_note",
                    (0, e.jsx)("span", { style: { fontWeight: "bold" } }),
                  ),
                }),
              ],
            });
          return (0, e.jsx)(J, {
            stepIMG: (0, e.jsx)(L.xIk, { type: "ps4" }),
            strStepName: (0, o.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgThree_Header",
            strInstructionsToken: m,
            strQuestionToken: "#ControllerSupportModal_PgThree_Question",
            leftColumnContent: u,
          });
        }
        var X = ((n) => (
          (n[(n.k_eSteamInputAPISupport = 0)] = "k_eSteamInputAPISupport"),
          (n[(n.k_eNoSteamInputAPISupport = 1)] = "k_eNoSteamInputAPISupport"),
          n
        ))(X || {});
        function D(n) {
          const {
              nPageNum: t,
              currentValues: s,
              setCurrentValues: r,
              setSkipToEnd: i,
            } = n,
            l = [
              {
                id: 0,
                locString: "#ControllerSupportModal_PgFour_SIAPI",
                settings: { bSteamInputAPISupport: !0 },
                bSkipToEnd: !1,
              },
              {
                id: 1,
                locString: "#ControllerSupportModal_PgFour_NoSIAPI",
                settings: { bSteamInputAPISupport: !1 },
                bSkipToEnd: !1,
              },
            ],
            u = () => (s.bSteamInputAPISupport ? 0 : 1),
            m = (A) => {
              const P = l.find((G) => G.id == A);
              r({ ...s, ...P?.settings }), i(P.bSkipToEnd ?? !1);
            },
            h = u(),
            C = (0, e.jsx)("div", {
              children: (0, e.jsx)(g.zW, {
                labelId: null,
                value: h,
                onChange: m,
                classNames: Z.RadioGroup,
                children: l.map((A) =>
                  (0, e.jsxs)(
                    g.a,
                    {
                      value: A.id,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, U.A)(
                            Z.RadioButton,
                            h == A.id && Z.Selected,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: Z.OptionLabel,
                          children: (0, o.we)(A.locString),
                        }),
                      ],
                    },
                    A.id,
                  ),
                ),
              }),
            }),
            b = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#ControllerSupportModal_PgFour_Instructions",
                  ),
                }),
                (0, e.jsxs)("ol", {
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, o.we)(
                        "#ControllerSupportModal_PgFour_Instructions_pt1",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, o.we)(
                        "#ControllerSupportModal_PgFour_Instructions_pt2",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, o.we)(
                        "#ControllerSupportModal_PgFour_Instructions_pt3",
                      ),
                    }),
                  ],
                }),
                (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#ControllerSupportModal_PgFour_Instructions_note",
                  ),
                }),
              ],
            });
          return (0, e.jsx)(J, {
            strStepName: (0, o.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgFour_Header",
            strInstructionsToken: b,
            strQuestionToken: "#ControllerSupportModal_PgFour_Question",
            leftColumnContent: C,
          });
        }
        function z(n) {
          const { currentValues: t } = n,
            s = (0, e.jsx)("div", {
              children:
                (t.bFullXboxControllerSupport ||
                  t.bPartialXboxControllerSupport) &&
                (0, e.jsx)(oe, { ...n.currentValues }),
            }),
            r =
              t.bFullXboxControllerSupport || t.bPartialXboxControllerSupport
                ? "#ControllerSupportModal_PgFive_Question"
                : "#ControllerSupportModal_PgFive_QuestionNoController";
          return (0, e.jsx)(J, {
            strStepName: (0, o.we)("#ControllerSupportModal_StepString", 5),
            strStepSubHeaderToken: "#ControllerSupportModal_PgFive_Header",
            strInstructionsToken: void 0,
            strQuestionToken: r,
            leftColumnContent: s,
          });
        }
        function _(n) {
          const { appid: t, onClose: s, onCommit: r, params: i } = n,
            [l, u] = c.useState(i),
            [m, h] = c.useState(i),
            [C, b] = c.useState(!1),
            A = 5,
            [P, G] = c.useState(0),
            ue = c.useCallback(() => {
              ie(m), r(!1);
            }, [r, m]),
            ze = () => {
              h(l);
              let it = P - 1;
              C && P == 4 && (it = 0), G(it);
            },
            he = () => {
              u(m), G(C ? A - 1 : P + 1);
            };
          let Ee;
          switch (P) {
            default:
            case 0: {
              Ee = (0, e.jsx)(N, {
                nPageNum: P,
                currentValues: m,
                setCurrentValues: h,
                setSkipToEnd: b,
              });
              break;
            }
            case 1:
              Ee = (0, e.jsx)(K, {
                nPageNum: P,
                currentValues: m,
                setCurrentValues: h,
                setSkipToEnd: b,
              });
              break;
            case 2:
              Ee = (0, e.jsx)(F, {
                nPageNum: P,
                currentValues: m,
                setCurrentValues: h,
                setSkipToEnd: b,
              });
              break;
            case 3:
              Ee = (0, e.jsx)(D, {
                nPageNum: P,
                currentValues: m,
                setCurrentValues: h,
                setSkipToEnd: b,
              });
              break;
            case 4:
              Ee = (0, e.jsx)(z, { currentValues: m });
              break;
          }
          const Pt = (0, e.jsx)(B, {
              nPageIdx: P,
              nPages: A,
              strHeaderText: (0, o.we)("#ControllerSupportModal_Title"),
            }),
            Wt = P == A - 1;
          return (0, e.jsx)(x.Provider, {
            value: m,
            children: (0, e.jsx)(de, {
              fnNext: Wt ? () => ue() : he,
              fnBack: P > 0 ? ze : s,
              header: Pt,
              strOkButtonLabel: Wt ? "Save and Exit" : "Next",
              children: Ee,
            }),
          });
        }
        const x = c.createContext(null);
        function S() {
          return React.useContext(x);
        }
        function B(n) {
          const { nPages: t, nPageIdx: s, strHeaderText: r } = n,
            i = (100 * (s + 1)) / (t + 1);
          return (0, e.jsxs)("div", {
            className: (0, U.A)(Z.ModalHeader),
            children: [
              !1,
              (0, e.jsx)("div", {
                className: Z.WizardTitle,
                children: (0, o.we)(r),
              }),
              (0, e.jsx)("div", {
                className: (0, U.A)(
                  Z.ProgressBar,
                  s == t - 1 && Z.ProgressBarComplete,
                ),
                children:
                  s < t - 1 &&
                  (0, e.jsx)("div", {
                    className: (0, U.A)(Z.ProgressBarFillComponent),
                    style: { width: i + "%" },
                  }),
              }),
            ],
          });
        }
        const J = c.memo(function (t) {
          const {
            strStepName: s,
            strStepSubHeaderToken: r,
            stepIMG: i,
            strInstructionsToken: l,
            strQuestionToken: u,
            leftColumnContent: m,
            rightColumnContent: h,
          } = t;
          return (0, e.jsxs)("div", {
            className: Z.WizardContainer,
            children: [
              (0, e.jsxs)("div", {
                className: Z.StepRow,
                children: [
                  i &&
                    (0, e.jsxs)("div", {
                      className: Z.StepImgContainer,
                      children: [" ", i, " "],
                    }),
                  (0, e.jsxs)("div", {
                    className: Z.StepLabel,
                    children: [s, (0, e.jsx)(g.iK, { children: (0, o.we)(r) })],
                  }),
                ],
              }),
              l &&
                (0, e.jsx)("div", {
                  className: Z.StepInstruction,
                  children: l,
                }),
              (0, e.jsx)("div", {
                className: Z.ControlsQuestion,
                children: (0, o.oW)(
                  u,
                  (0, e.jsx)("span", { style: { fontWeight: "bold" } }),
                ),
              }),
              (0, e.jsxs)(g.dR, {
                children: [
                  (0, e.jsx)(g.VP, { children: m }),
                  (0, e.jsx)(g.VP, { children: h }),
                ],
              }),
            ],
          });
        });
        function de(n) {
          const {
            fnNext: t,
            fnBack: s,
            children: r,
            header: i,
            strOkButtonLabel: l,
          } = n;
          return (0, e.jsxs)(w.mt, {
            active: !0,
            className: Z.ControllerWizardModal,
            children: [
              i,
              (0, e.jsx)(g.nB, { className: Z.WizardBody, children: r }),
              (0, e.jsx)(g.CB, {
                className: Z.WizardButtons,
                bCancelDisabled: !s,
                onCancel: s,
                strCancelText: "Back",
                onOK: t,
                strOKText: l,
              }),
            ],
          });
        }
        function ge(n) {
          const { unAppID: t } = n,
            [s, r] = c.useState(!1),
            i = c.useCallback(() => r(!0), []),
            l = c.useCallback(() => r(!1), []),
            u =
              n.bControllerSupportWizardComplete &&
              (n.bFullXboxControllerSupport || n.bPartialXboxControllerSupport);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              s &&
                (0, e.jsx)(_, { appid: t, onClose: l, onCommit: l, params: n }),
              (0, e.jsxs)(g.nB, {
                children: [
                  (0, e.jsx)("div", {
                    className: Y.DescText,
                    children: (0, o.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_Desc",
                    ),
                  }),
                  n.bControllerSupportWizardComplete &&
                    (0, e.jsx)("div", {
                      className: Y.DescText,
                      children: (0, o.we)(
                        "#App_Landing_ControllerSupport_WizardPrompt_CustomerView",
                      ),
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, U.A)(Y.ReleaseDateInfoCtn),
                children: [
                  (0, e.jsxs)("div", {
                    className: Y.ReleaseDateContent,
                    children: [
                      !n.bControllerSupportWizardComplete &&
                        (0, e.jsx)(Ae, { onClick: i }),
                      n.bControllerSupportWizardComplete &&
                        !u &&
                        (0, e.jsx)(Fe, { onClick: i }),
                      n.bControllerSupportWizardComplete &&
                        u &&
                        (0, e.jsx)(oe, { ...n }),
                    ],
                  }),
                  n.bControllerSupportWizardComplete &&
                    u &&
                    (0, e.jsxs)("div", {
                      className: Y.EditButton,
                      onClick: i,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, U.A)(Y.Spacer, Y.Top),
                        }),
                        (0, e.jsx)("div", {
                          className: Y.EditButtonIcon,
                          children: (0, e.jsx)(M.ffu, {}),
                        }),
                        (0, e.jsx)("div", {
                          className: (0, U.A)(Y.Spacer, Y.Bottom),
                        }),
                      ],
                    }),
                ],
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("div", {
                className: Y.DescText,
                children: (0, o.we)(
                  "#App_Landing_ControllerSupport_WizardPrompt_Upcoming",
                ),
              }),
            ],
          });
        }
        function Ae(n) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)(g.nB, {
              children: [
                (0, e.jsx)(g.a3, {
                  children: (0, e.jsx)("div", {
                    className: Y.StatusText,
                    children: (0, o.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_StatusNotStarted",
                    ),
                  }),
                }),
                (0, e.jsxs)(g.jn, {
                  className: Y.StartWizardButton,
                  onClick: n.onClick,
                  children: [
                    " ",
                    (0, o.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
                    ),
                    " ",
                  ],
                }),
              ],
            }),
          });
        }
        function Fe(n) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)(g.nB, {
              children: [
                (0, e.jsx)(g.a3, {
                  children: (0, e.jsx)("div", {
                    className: Y.StatusText,
                    children: (0, o.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_StatusNoController",
                    ),
                  }),
                }),
                (0, e.jsxs)(g.$n, {
                  className: Y.StartWizardButton,
                  onClick: n.onClick,
                  children: [
                    " ",
                    (0, o.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
                    ),
                    " ",
                  ],
                }),
              ],
            }),
          });
        }
        var R = a(17616),
          Te = a(50660),
          Oe = a(64868),
          fe = a(18938),
          _e = a(97982);
        function me(n) {
          const { language: t, rctToolbarControls: s, mapValues: r } = n,
            i = r.get(t),
            l = c.createRef();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(we, {
                refTextArea: l,
                value: i,
                rctToolbarControls: s,
              }),
              (0, e.jsx)(Ze, { language: t, value: i, refTextArea: l }),
            ],
          });
        }
        function we(n) {
          const { refTextArea: t, value: s, rctToolbarControls: r } = n,
            i = c.useCallback(
              (u, m) => {
                Be(t.current, s, u, m);
              },
              [t, s],
            ),
            l = c.useCallback(
              (u, m) => {
                Be(t.current, s, u, m, (h) =>
                  h.replace(
                    /(\r\n|\n|\r)/gm,
                    `\r
[*]`,
                  ),
                );
              },
              [t, s],
            );
          return (0, e.jsxs)(Te.Ez, {
            children: [
              (0, e.jsx)(Ce, {
                fnInsertText: i,
                tooltip: (0, o.we)("#FormattingToolbar_Bold"),
                start: "[b]",
                end: "[/b]",
                children: (0, e.jsx)(L.l4n, {}),
              }),
              (0, e.jsx)(Ce, {
                fnInsertText: i,
                tooltip: (0, o.we)("#FormattingToolbar_Italic"),
                start: "[i]",
                end: "[/i]",
                children: (0, e.jsx)(L.UKJ, {}),
              }),
              (0, e.jsx)(Ce, {
                fnInsertText: i,
                tooltip: (0, o.we)("#FormattingToolbar_Underline"),
                start: "[u]",
                end: "[/u]",
                children: (0, e.jsx)(L.Gj3, {}),
              }),
              (0, e.jsx)(Te.XQ, {}),
              (0, e.jsx)(Ce, {
                fnInsertText: l,
                tooltip: (0, o.we)("#FormattingToolbar_BulletedList"),
                start: "[list][*]",
                end: "[/list]",
                children: (0, e.jsx)(L.JPq, {}),
              }),
              (0, e.jsx)(Ce, {
                fnInsertText: i,
                tooltip: (0, o.we)("#FormattingToolbar_HeadingLevel2"),
                start: "[h2]",
                end: "[/h2]",
                children: (0, e.jsx)(L.qOW, {}),
              }),
              (0, e.jsx)(Te.XQ, {}),
              (0, e.jsx)(Ce, {
                fnInsertText: i,
                tooltip: (0, o.we)("#FormattingToolbar_InsertLink"),
                start: "[url]",
                end: "[/url]",
                children: (0, e.jsx)(L.YqK, {}),
              }),
              (0, e.jsx)(Ce, {
                fnInsertText: i,
                tooltip: (0, o.we)("#EventEditor_InsertImage"),
                start: "[img]",
                end: "[/img]",
                children: (0, e.jsx)(L._V3, {}),
              }),
              (0, e.jsx)(Te.hK, {}),
              r,
            ],
          });
        }
        function Ce(n) {
          const {
            fnInsertText: t,
            tooltip: s,
            start: r,
            end: i,
            children: l,
          } = n;
          return (0, e.jsx)(Te.ff, {
            onClick: () => t(r, i),
            tooltip: s,
            children: l,
          });
        }
        function Ze(n) {
          const { language: t, value: s, refTextArea: r } = n,
            i = c.useCallback((m) => s.Set(m.currentTarget.value), [s]),
            l = (0, Oe.gc)(s),
            u = c.useCallback(
              (m) => {
                (0, fe.cZ)(r, m?.textarea);
              },
              [r],
            );
          return (0, e.jsx)(g.Cl, {
            className: _e.TextArea,
            ref: u,
            nMinHeight: 96,
            value: l,
            onChange: i,
            lang: (0, o.d$)(t),
          });
        }
        function Be(n, t, s, r, i) {
          if (n.selectionStart || n.selectionStart === 0) {
            const l = n.selectionStart,
              u = n.selectionEnd,
              m = n.value.substring(0, l),
              h = n.value.substring(l, u),
              C = n.value.substring(u, n.value.length),
              b = i ? i(h) : h,
              A = b.length - h.length,
              P = n.scrollTop;
            Le(t, m + s + b + r + C, () => {
              n.focus(),
                (n.selectionStart = l + s.length),
                (n.selectionEnd = u + s.length + A),
                (n.scrollTop = P);
            });
          } else Le(t, n.value + s + " " + r, () => n.focus());
        }
        function Le(n, t, s) {
          n.Set(t), window.setTimeout(s, 1);
        }
        var Se = a(28410),
          ye = a(77181),
          Me = a(25792),
          W = a(99412),
          pe = a(69787);
        const xe = c.lazy(() => Promise.resolve().then(a.bind(a, 77181)));
        function ke(n) {
          const {
              rgLanguages: t,
              value: s,
              strNamePrefix: r,
              rgPath: i,
              editorType: l,
              asset_mtime: u,
            } = n,
            m = c.useMemo(() => new Map(t), [t]),
            h = c.useMemo(() => Array.from(m.keys()).map(W.sfN), [m]),
            {
              strActiveLanguage: C,
              mapValues: b,
              rctLanguageSelect: A,
              rctHiddenInputs: P,
            } = (0, R.KC)(m, s, r, i),
            G = He(),
            ue = (0, Se.TQ)(),
            ze =
              l == "aboutthegame"
                ? (0, e.jsx)(ye.StoreAppPageHeader, {
                    children: (0, o.we)(
                      "#StoreAdmin_GameDescription_AboutThisGame",
                    ),
                  })
                : void 0;
          return (0, e.jsxs)("div", {
            className: _e.LocTextAreaContainer,
            children: [
              l == "aboutthegame" && (0, e.jsx)(De, {}),
              l == "aboutthegame" && !ue && (0, e.jsx)(Pe, {}),
              (0, e.jsxs)(
                Me.tH,
                {
                  children: [
                    " ",
                    (0, e.jsx)(c.Suspense, {
                      fallback: null,
                      children: (0, e.jsx)(pe.Dx.Provider, {
                        value: u,
                        children: (0, e.jsx)(G, {
                          language: C,
                          mapValues: b,
                          languages: h,
                          rctToolbarControls: A,
                          editorType: l,
                          rctAboveEditor: ze,
                        }),
                      }),
                    }),
                  ],
                },
                ue ? "richeditor" : "bbcode",
              ),
              P,
            ],
          });
        }
        function He() {
          return (0, Se.TQ)() ? xe : me;
        }
        function De() {
          const n = (0, Se.TQ)(),
            t = (0, Se.gg)();
          return (0, e.jsx)(g.Yh, {
            style: { width: "fit-content" },
            checked: n,
            label: (0, o.we)("#StoreAdmin_GameDescription_UseRichEditor"),
            onChange: t,
          });
        }
        function Pe() {
          return (0, e.jsxs)("div", {
            children: [
              (0, o.PP)(
                "#StoreAdmin_GameDescription_PlainEditorImageInstructions1",
                (0, e.jsx)(L.QRo, { className: "inline_svg" }),
              ),
              (0, e.jsx)("br", {}),
              (0, o.we)(
                "#StoreAdmin_GameDescription_PlainEditorImageInstructions2",
              ),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
            ],
          });
        }
        var be = a(2272),
          Ke = a(65596),
          Xe = a(65620),
          et = a(92757),
          Qe = a(96135),
          Ye = a(72609),
          st = a(77411),
          Ve = a(76559),
          tt = a(813),
          kt = a(16512),
          ft = a(63854),
          _t = ((n) => (
            (n[(n.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (n[(n.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            n
          ))(_t || {}),
          Lt = a(10142),
          ut = a(84676),
          is = a(79804),
          ot = a(95695),
          $e = a.n(ot),
          Yt = a(45247),
          Nt = a(91512),
          As = a(21418),
          Gt = a(85599),
          Is = a(41635),
          zs = a(19042),
          Rt = a.n(zs);
        function Ds(n) {
          const { rgCreatorHomes: t, groupvanityinfo: s } = n,
            [r, i] = (0, c.useState)(!0);
          return (
            (0, c.useEffect)(() => {
              s
                ? (async () => (await tt.ac.AddGroupVanities(s), i(!1)))()
                : i(!1);
            }, [s]),
            r
              ? null
              : (0, e.jsxs)(Me.tH, {
                  children: [
                    (0, e.jsxs)("div", {
                      className: "instructions",
                      children: [
                        (0, e.jsxs)("h2", {
                          children: [
                            (0, o.we)("#Create_Home_Title"),
                            " ",
                            (0, e.jsx)("span", {
                              className: "small",
                              children: (0, e.jsx)("a", {
                                href: `${Ye.TS.STORE_BASE_URL}news/group/4145017/view/4578559379959234050`,
                                target: "_blank",
                                children: (0, o.we)(
                                  "#AssetRequest_General_SeeDocs",
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("hr", {}),
                        !t || t.length == 0
                          ? (0, e.jsx)("div", {
                              className: Rt().PageSelect,
                              children: (0, o.oW)(
                                "#Create_Home_None",
                                (0, e.jsx)("a", {
                                  href: `${Ye.TS.PARTNER_BASE_URL}doc/store/creator_homepage`,
                                  target: "_blank",
                                }),
                                (0, e.jsx)("a", {
                                  href: `${Ye.TS.PARTNER_BASE_URL}doc/store/franchise_pages`,
                                  target: "_blank",
                                }),
                              ),
                            })
                          : (0, e.jsx)(nn, { ...n, baseGameAppID: n.appid }),
                      ],
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("br", {}),
                  ],
                })
          );
        }
        function Vs(n, t) {
          if (n >= t) return [];
          const s = [];
          for (let r = n; r < t; r++) s.push(r);
          return s;
        }
        function nn(n) {
          const {
              rgCreatorHomes: t,
              oInputFeatured: s,
              creatorNames: r,
              baseGameAppID: i,
            } = n,
            [l, u] = (0, c.useState)(() => {
              if (s) return s;
              for (const C of r.rgFrachises) {
                const b = t.find((A) => A.linkname == C);
                if (b)
                  return {
                    clan_account_id: new Ve.b(b.clan_steamid).GetAccountID(),
                    sort_order: "salesrank",
                    featured_appids: void 0,
                  };
              }
              return { clan_account_id: 0 };
            }),
            m = (0, c.useCallback)(
              (C, b) => {
                l.clan_account_id == _t.k_CreatorHomeAll
                  ? u({
                      ...l,
                      featured_appids: [...(l.featured_appids || []), b],
                      featured_creator_clan_account_id: [
                        ...(l.featured_creator_clan_account_id || []),
                        C,
                      ],
                    })
                  : u({
                      ...l,
                      featured_appids: [...(l.featured_appids || []), b],
                    });
              },
              [l],
            ),
            h = (0, c.useMemo)(() => {
              if (l.clan_account_id == _t.k_CreatorHomeAll) {
                const C = new Set();
                t.forEach((A) =>
                  C.add(new Ve.b(A.clan_steamid).GetAccountID()),
                );
                const b = new Array();
                return (
                  C.forEach((A) => {
                    const P = tt.ac.GetClanInfoByClanAccountID(A);
                    b.push({
                      name: P?.group_name || "" + A,
                      key: "clanid" + A,
                      contents: (0, e.jsx)(Me.tH, {
                        children: (0, e.jsx)(an, {
                          creatorHomeClanAccountID: A,
                          fnAddAppToFeaturedAppList: m,
                          baseGameAppID: i,
                          rgFeaturedList: l.featured_appids,
                        }),
                      }),
                    });
                  }),
                  b
                );
              }
              return null;
            }, [i, m, l.clan_account_id, l.featured_appids, t]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { children: (0, o.we)("#Create_Home_Desc") }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("div", {
                className: ot.EventEditorTextTitle,
                children: (0, o.we)("#Create_Home_SelectedSource"),
              }),
              (0, e.jsx)(bn, {
                rgCreatorHomes: t,
                oFeatured: l,
                fnSetFeatured: u,
              }),
              (0, e.jsx)("div", {
                style: { display: "flex", flexDirection: "column" },
                className: ot.EventDefaultRowContainer,
                children: l.clan_account_id
                  ? (0, e.jsx)(e.Fragment, {
                      children:
                        l.clan_account_id > 0
                          ? (0, e.jsx)(an, {
                              creatorHomeClanAccountID: l.clan_account_id,
                              fnAddAppToFeaturedAppList: m,
                              baseGameAppID: i,
                              rgFeaturedList: l.featured_appids,
                            })
                          : (0, e.jsx)(As.V, { tabs: h }),
                    })
                  : (0, e.jsx)("span", {
                      children: (0, o.we)("#Create_Home_Selected_None"),
                    }),
              }),
              (0, e.jsxs)("div", {
                className: Rt().SelectedSource,
                children: [
                  !!(
                    l.clan_account_id ||
                    l.featured_creator_clan_account_id?.length > 0
                  ) &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(Ks, {
                          rgFeaturedList: l.featured_appids,
                          strFeaturedFirstAppToken: l.featured_first_app_token,
                          rgFeaturedClanList:
                            l.featured_creator_clan_account_id,
                          fnSetFeatureAppAndClans: (C, b, A) => {
                            u({
                              ...l,
                              featured_appids: C,
                              featured_creator_clan_account_id: b,
                              featured_first_app_token: A,
                            });
                          },
                        }),
                        (0, e.jsx)(Xs, { oFeatured: l, fnSetFeatured: u }),
                      ],
                    }),
                  (0, e.jsx)(Et, { oFeatured: l }),
                ],
              }),
            ],
          });
        }
        function Et(n) {
          const { oFeatured: t } = n,
            [s, r] = (0, c.useState)(() => t?.featured_appids?.length || 0);
          (0, c.useEffect)(() => {
            s < (t?.featured_appids?.length || 0) &&
              r(t.featured_appids.length);
          }, [t, s]);
          const i = Vs(t?.featured_appids?.length || 0, s),
            l =
              !t?.featured_first_app_token ||
              t?.featured_first_app_token == "#Featured_App_None";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("input", {
                type: "hidden",
                name: "app[featured_creator_home][clan_account_id]",
                value: t?.clan_account_id || 0,
              }),
              (0, e.jsx)(
                "input",
                {
                  type: "hidden",
                  name: "app[featured_creator_home][featured_first_app_token]",
                  value: l ? void 0 : t?.featured_first_app_token,
                },
                l ? "empty" : "feating",
              ),
              t?.clan_account_id
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: "app[featured_creator_home][sort_order]",
                        value: t.sort_order || "salesrank",
                      }),
                      t.featured_appids?.map((u, m) =>
                        (0, e.jsxs)(
                          c.Fragment,
                          {
                            children: [
                              (0, e.jsx)("input", {
                                type: "hidden",
                                name: `app[featured_creator_home][featured_appids][${m}]`,
                                value: u,
                              }),
                              (0, e.jsx)("input", {
                                type: "hidden",
                                name: `app[featured_creator_home][featured_creator_clan_account_id][${m}]`,
                                value: t.featured_creator_clan_account_id?.[m],
                              }),
                            ],
                          },
                          "app" + u,
                        ),
                      ),
                    ],
                  })
                : (0, e.jsx)("input", {
                    type: "hidden",
                    name: "app[featured_creator_home][sort_order]",
                    value: void 0,
                  }),
              i.map((u) =>
                (0, e.jsxs)(
                  c.Fragment,
                  {
                    children: [
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[featured_creator_home][featured_appids][${u}]`,
                        value: void 0,
                      }),
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[featured_creator_home][featured_creator_clan_account_id][${u}]`,
                        value: void 0,
                      }),
                    ],
                  },
                  "nullinput" + u,
                ),
              ),
            ],
          });
        }
        const Qt = { include_assets: !0, include_release: !0 };
        function ps(n) {
          const {
              creatorHomeClanAccountID: t,
              rgFeaturedList: s,
              fnAddAppToFeaturedAppList: r,
              baseGameAppID: i,
            } = n,
            l = (0, ft.a)(),
            [u, m] = (0, c.useState)(null),
            h = (0, kt.id)(l, t, !0),
            C = (0, ut.zX)(h, Qt),
            b = (0, c.useMemo)(
              () =>
                C != ut.Sq && h
                  ? h
                      .filter((A) => A != i)
                      .map((A) => {
                        const P = Lt.A.Get().GetApp(A);
                        return {
                          value: A,
                          label: `${P ? P.GetName() : ""} (Appid: ${A})`,
                        };
                      })
                  : [],
              [h, C, i],
            );
          return !h || C == ut.Sq
            ? (0, e.jsx)(Gt.t, { size: "small", string: (0, o.we)("#Loading") })
            : (0, e.jsxs)("div", {
                className: Rt().ManualFeatures,
                children: [
                  (0, e.jsx)("div", {
                    className: "DialogLabel",
                    children: (0, o.we)("#Create_Home_ManuallyFeature"),
                  }),
                  (0, e.jsx)("div", {
                    children: (0, o.we)("#Create_Home_Select_App_Desc"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Rt().FeatureSelectItemCtn,
                    children: [
                      (0, e.jsx)(st.Ay, {
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isSearchable: !0,
                        isMulti: !1,
                        placeholder: (0, o.we)("#Create_Home_Select_App"),
                        options: b,
                        value: b.find((A) => A.value === u),
                        onChange: (A) => m(A.value),
                        controlShouldRenderValue: !!u,
                      }),
                      (0, e.jsx)(g.jn, {
                        disabled: !u,
                        onClick: () => {
                          (!s || s.findIndex((A) => A === u) == -1) && r(t, u),
                            m(null);
                        },
                        children: (0, o.we)("#Create_Home_Add_App"),
                      }),
                    ],
                  }),
                ],
              });
        }
        function Ks(n) {
          const {
            rgFeaturedList: t,
            rgFeaturedClanList: s,
            fnSetFeatureAppAndClans: r,
            strFeaturedFirstAppToken: i,
          } = n;
          return (0, e.jsxs)("div", {
            className: Rt().ManualFeatures,
            children: [
              (0, e.jsx)("div", {
                className: "DialogLabel",
                children: (0, o.we)("#Create_Home_App_Featured"),
              }),
              (0, e.jsxs)("div", {
                style: { display: "flex", flexDirection: "column" },
                className: ot.EventDefaultRowContainer,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, o.we)("#Create_Home_App_Featured_Desc"),
                  }),
                  !t || t.length == 0
                    ? (0, e.jsx)("div", {
                        children: (0, o.we)("#Create_Home_No_Featured"),
                      })
                    : (0, e.jsx)(Nt.A, {
                        items: t || [],
                        render: (l, u) =>
                          (0, e.jsx)(
                            Ss,
                            {
                              appid: l,
                              creatorClanID: s?.[u],
                              elEditor:
                                u == 0
                                  ? (0, e.jsx)($s, {
                                      strFeaturedFirstAppToken: i,
                                      fnSetFeaturedFirstAppToken: (m) =>
                                        r(t, s, m),
                                    })
                                  : void 0,
                            },
                            "row" + l,
                          ),
                        onDelete: (l) => {
                          const u = [...t];
                          u.splice(l, 1);
                          let m;
                          s && ((m = [...s]), m.splice(l, 1)), r(u, m, i);
                        },
                        onMove: (l, u) => {
                          const m = [...t];
                          (0, Is.yY)(m, l, u);
                          let h;
                          s && ((h = [...s]), (0, Is.yY)(h, l, u)), r(m, h, i);
                        },
                      }),
                ],
              }),
            ],
          });
        }
        function $s(n) {
          const { strFeaturedFirstAppToken: t, fnSetFeaturedFirstAppToken: s } =
              n,
            r = (0, c.useMemo)(() => {
              const i = new Array();
              return (
                i.push({ label: (0, o.we)("#Featured_App_None"), data: null }),
                i.push({
                  label: (0, o.we)("#Featured_App_Reason_Next"),
                  data: "#Featured_App_Reason_Next",
                }),
                i.push({
                  label: (0, o.we)("#Featured_App_Reason_Franchise"),
                  data: "#Featured_App_Reason_Franchise",
                }),
                i.push({
                  label: (0, o.we)("#Featured_App_Reason_Similar"),
                  data: "#Featured_App_Reason_Similar",
                }),
                i.push({
                  label: (0, o.we)("#Featured_App_Reason_Upcoming"),
                  data: "#Featured_App_Reason_Upcoming",
                }),
                i.push({
                  label: (0, o.we)("#Featured_App_Reason_YouMight"),
                  data: "#Featured_App_Reason_YouMight",
                }),
                i.push({
                  label: (0, o.we)("#Featured_App_Reason_LatestEdition"),
                  data: "#Featured_App_Reason_LatestEdition",
                }),
                i
              );
            }, []);
          return (0, e.jsx)("div", {
            className: Rt().PageSelect,
            children: (0, e.jsx)(g.m, {
              label: (0, o.we)("#Featured_App_Name"),
              tooltip: (0, o.we)("#Featured_App_Tooltip"),
              rgOptions: r,
              selectedOption: t || null,
              onChange: (i) => {
                s(i.data);
              },
            }),
          });
        }
        function Ss(n) {
          const { appid: t, elEditor: s, creatorClanID: r } = n,
            [i] = (0, ut.t7)(t, Qt),
            l = (0, c.useMemo)(() => ({ id: t, type: "game" }), [t]),
            u = (0, c.useMemo)(() => vs(r), [r]);
          return (0, e.jsxs)("div", {
            className: Rt().AppRowCtn,
            children: [
              i
                ? (0, e.jsx)("div", {
                    className: Rt().CapsuleCtn,
                    children: (0, e.jsx)(Yt.W, {
                      capsule: l,
                      imageType: "header",
                      bShowParentApp: !1,
                      bHideStoreHover: !0,
                      bPreferAssetWithoutOverride: !1,
                    }),
                  })
                : (0, e.jsxs)("div", {
                    className: Rt().MissingCapsuleCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, o.we)("#Create_Home_Missing_Capsule"),
                      }),
                      (0, e.jsxs)("div", { children: ["appid: (", t, ")"] }),
                    ],
                  }),
              !!u &&
                (0, e.jsxs)("div", {
                  className: Rt().CreatorHomeCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, o.we)("#Create_Home_App_FeaturedSource"),
                    }),
                    (0, e.jsx)(is.hA, {
                      creatorID: u,
                      bShowTagline: !1,
                      bHideCreatorType: !0,
                      bSmallFormat: !0,
                      bHideFollowButton: !0,
                    }),
                  ],
                }),
              s,
            ],
          });
        }
        function vs(n) {
          return n
            ? {
                name:
                  tt.ac.GetClanInfoByClanAccountID(n)?.group_name || `(${n})`,
                clan_account_id: n,
                type: "developer",
              }
            : null;
        }
        function bn(n) {
          const { rgCreatorHomes: t, oFeatured: s, fnSetFeatured: r } = n,
            i = (0, c.useMemo)(() => {
              const l = new Set();
              t.forEach((m) => l.add(new Ve.b(m.clan_steamid).GetAccountID()));
              const u = new Array();
              return (
                u.push({
                  label: (0, o.we)("#Create_Home_None_Selected"),
                  data: _t.k_CreatorHomeNone,
                  tooltip: (0, o.we)("#Create_Home_None_Selected_ttip"),
                }),
                l.forEach((m) => {
                  const h = tt.ac.GetClanInfoByClanAccountID(m);
                  u.push({ label: h?.group_name || `(${m})`, data: m });
                }),
                u.length > 2 &&
                  u.push({
                    label: (0, o.we)("#Create_Home_All_Creators") + " (?)",
                    data: _t.k_CreatorHomeAll,
                    tooltip: (0, o.we)("#Create_Home_All_Creators_ttip"),
                  }),
                u
              );
            }, [t]);
          return (0, e.jsx)("div", {
            className: Rt().PageSelect,
            children: (0, e.jsx)(g.m, {
              rgOptions: i,
              selectedOption: s?.clan_account_id || 0,
              onChange: (l) => {
                l.data != s?.clan_account_id &&
                  r({
                    clan_account_id: l.data,
                    featured_appids: void 0,
                    featured_creator_clan_account_id: void 0,
                    sort_order: "salesrank",
                  });
              },
            }),
          });
        }
        function an(n) {
          const { creatorHomeClanAccountID: t } = n,
            [s, r] = (0, c.useState)(() => vs(t));
          return (
            (0, c.useEffect)(() => {
              s?.clan_account_id != t && r(vs(t));
            }, [t, s?.clan_account_id]),
            (0, e.jsxs)("div", {
              className: Rt().SelectedSource,
              children: [
                (0, e.jsx)(is.hA, {
                  creatorID: s,
                  bShowTagline: !0,
                  bHideCreatorType: !0,
                  bSmallFormat: !0,
                  bHideFollowButton: !0,
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)(ps, { ...n }),
              ],
            })
          );
        }
        function Xs(n) {
          const { oFeatured: t, fnSetFeatured: s } = n;
          return (0, e.jsxs)(g.G5, {
            children: [
              (0, e.jsx)("br", {}),
              (0, e.jsx)("div", {
                className: "DialogLabel",
                children: (0, o.we)("#Create_Home_SortBy"),
              }),
              (0, e.jsxs)("div", {
                style: { display: "flex", flexDirection: "column" },
                className: ot.EventDefaultRowContainer,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, o.we)("#Create_Home_SortBy_Desc"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Rt().SortOptionsCtn,
                    children: [
                      (0, e.jsx)(g.Od, {
                        checked: t.sort_order == "salesrank",
                        controlled: !0,
                        onChange: (r) =>
                          r && s({ ...t, sort_order: "salesrank" }),
                        label: (0, o.we)("#Create_Home_SortBy_Sales"),
                        tooltip: (0, o.we)("#Create_Home_SortBy_Sales_ttip"),
                      }),
                      (0, e.jsx)(g.Od, {
                        checked: t.sort_order == "releasedate",
                        controlled: !0,
                        onChange: (r) =>
                          r && s({ ...t, sort_order: "releasedate" }),
                        label: (0, o.we)("#Create_Home_SortBy_Release"),
                        tooltip: (0, o.we)("#Create_Home_SortBy_Release_ttip"),
                      }),
                      (0, e.jsx)(g.Od, {
                        checked: t.sort_order == "tags",
                        controlled: !0,
                        onChange: (r) => r && s({ ...t, sort_order: "tags" }),
                        label: (0, o.we)("#Create_Home_SortBy_Tag"),
                        tooltip: (0, o.we)("#Create_Home_SortBy_Tag_ttip"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var Ys = a(71742),
          es = a(72604),
          hs = a(20194),
          rn = a(41735),
          zt = a.n(rn),
          as = a(67705);
        function Cn(n) {
          const { data: t, isLoading: s } = (0, hs.I)({
            queryKey: ["useAppDLCListPartnerSite", n],
            queryFn: async () => {
              const r = `${Ye.TS.PARTNER_BASE_URL}apps/ajaxgetdlc`,
                i = { appid: n, sessionid: (0, as.KC)() },
                l = await zt().get(r, { params: i });
              if (l?.data?.success != es.R)
                throw (
                  "Fail to load DLC list for appid " +
                  n +
                  " with error: " +
                  l?.data?.message
                );
              return l.data.dlcids || [];
            },
            enabled: !!n,
          });
          return s ? null : t;
        }
        var on = a(61266),
          ln = a(69515);
        function An(n) {
          const { rgDLCSettings: t, parentAppID: s, dlcAppID: r } = n,
            [i, l] = (0, c.useState)(() => t);
          return (0, e.jsxs)(on.m, {
            children: [
              (0, e.jsx)("h2", {
                children: (0, o.we)("#DLC_Dependency_Title"),
              }),
              (0, e.jsx)("hr", {}),
              (0, e.jsx)("p", { children: (0, o.we)("#DLC_Dependency_Desc") }),
              (0, e.jsx)(En, {
                parentAppID: s,
                dlcAppID: r,
                fnSelectedDLCAppID: (u) => {
                  i.findIndex((m) => m.dlc_appid == u) == -1 &&
                    l([...i, { dlc_appid: u, config: "dlc_required" }]);
                },
              }),
              (0, e.jsx)(yn, { rgDLCInfo: i, fnSetDLCInfo: l }),
              (0, e.jsx)(Sn, { rgDLCInfo: i }),
            ],
          });
        }
        function Sn(n) {
          const { rgDLCInfo: t } = n,
            [s, r] = (0, c.useState)(() => t?.length || 0);
          (0, c.useEffect)(() => {
            t?.length > s && r(t.length);
          }, [s, t]);
          const i = (0, c.useMemo)(() => {
            const l = new Array();
            for (let u = t.length || 0; u < s; ++u)
              l.push(
                (0, e.jsx)(
                  "input",
                  {
                    type: "hidden",
                    name: `app[dlc_dependency][${u}]`,
                    value: void 0,
                  },
                  "dependancy_del" + u,
                ),
              );
            return l;
          }, [s, t]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              t?.map((l, u) =>
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[dlc_dependency][${u}][dlc_appid]`,
                        value: l.dlc_appid,
                      }),
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[dlc_dependency][${u}][config]`,
                        value: l.config,
                      }),
                    ],
                  },
                  "dependency_input" + l.dlc_appid + "_" + u,
                ),
              ),
              i,
            ],
          });
        }
        const vn = { include_assets: !0, include_release: !0 };
        function yn(n) {
          const { rgDLCInfo: t, fnSetDLCInfo: s } = n;
          return (0, e.jsx)(Nt.A, {
            items: t,
            render: (r, i) =>
              (0, e.jsx)(
                Pn,
                {
                  dependency: r,
                  index: i,
                  fnSetDLCInfo: (l) => {
                    const u = [...t];
                    (0, Ys.wT)(
                      u[i].dlc_appid == l.dlc_appid,
                      "AppID don't match, what gives",
                    ),
                      console.log(),
                      (u[i].config = l.config),
                      s(u);
                  },
                },
                "row" + r.dlc_appid,
              ),
            onDelete: (r) => {
              const i = [...t];
              i.splice(r, 1), s(i);
            },
            onReorder: (r) => s([...r]),
          });
        }
        const jn = [
          {
            label: (0, o.we)("#DLC_Dependency_Require"),
            tooltip: (0, o.we)("#DLC_Dependency_Require_ttip"),
            data: "dlc_required",
          },
          {
            label: (0, o.we)("#DLC_Dependency_Recommended"),
            tooltip: (0, o.we)("#DLC_Dependency_Recommended_ttip"),
            data: "dlc_recommended",
          },
        ];
        function Pn(n) {
          const { dependency: t, fnSetDLCInfo: s } = n;
          return (0, e.jsx)(Ss, {
            appid: t.dlc_appid,
            elEditor: (0, e.jsx)("div", {
              className: ln.RelationshipType,
              children: (0, e.jsx)(g.m, {
                label: (0, o.we)("#DLC_Dependency_Relationship"),
                rgOptions: jn,
                selectedOption: t.config,
                onChange: (r) => {
                  if (t.config != r.data) {
                    const i = { ...t };
                    (i.config = r.data), s(i);
                  }
                },
              }),
            }),
          });
        }
        function En(n) {
          const { parentAppID: t, fnSelectedDLCAppID: s, dlcAppID: r } = n,
            [i, l] = (0, c.useState)(null),
            u = Cn(t),
            m = (0, ut.zX)(u, vn),
            h = (0, c.useMemo)(
              () =>
                m != ut.Sq && u
                  ? u
                      .filter((C) => C != r)
                      .map((C) => {
                        const b = Lt.A.Get().GetApp(C);
                        return {
                          value: C,
                          label: `${b ? b.GetName() : ""} (Appid: ${C})`,
                        };
                      })
                  : [],
              [m, u, r],
            );
          return !u || m == ut.Sq
            ? (0, e.jsx)(Gt.t, { size: "small", string: (0, o.we)("#Loading") })
            : (0, e.jsxs)("div", {
                className: ln.SelectorRow,
                children: [
                  (0, e.jsx)(st.Ay, {
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isSearchable: !0,
                    isMulti: !1,
                    placeholder: (0, o.we)("#Create_Home_Select_App"),
                    options: h,
                    value: h.find((C) => C.value === i),
                    onChange: (C) => l(C.value),
                  }),
                  (0, e.jsx)(g.$n, {
                    disabled: !i,
                    onClick: () => {
                      s(i), l(void 0);
                    },
                    children: (0, o.we)("#DLC_Dependency_Select"),
                  }),
                ],
              });
        }
        var Ht = a(71714),
          Ts = a(88003),
          ws = a(82734);
        const Yn = 0,
          In = 1,
          It = 2,
          cn = 3,
          dn = 4,
          Dn = 5;
        var Ms = a(44420),
          Tn = a(16119);
        function wn(n) {
          const { rgDLC: t, parentappid: s } = n,
            [r, i] = c.useState(t ? [...t] : []),
            [l, u] = c.useState([]);
          c.useEffect(() => {
            i(n?.rgDLC ? [...n.rgDLC] : []);
          }, [n]);
          const m = (A) => {
            const P = [...r];
            (P[A].bDeleted = !0), i(P);
          };
          c.useEffect(() => {
            const A = Array();
            let P = 0;
            for (
              r.forEach((G) => {
                G.bDeleted ||
                  (A.push(
                    c.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${P}][appid]`,
                      value: G.appid,
                    }),
                  ),
                  A.push(
                    c.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${P}][itemid]`,
                      value: G.itemid,
                    }),
                  ),
                  A.push(
                    c.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${P}][highlight]`,
                      value: P == 0 && G.highlight ? G.highlight : "",
                    }),
                  ),
                  A.push(
                    c.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${P}][highlight_reason]`,
                      value:
                        P == 0 && G.highlight_reason ? G.highlight_reason : "",
                    }),
                  ),
                  P++);
              });
              P < t.length;
            ) {
              let G = c.createElement("input", {
                type: "hidden",
                name: `app[related_items][dlc][${P}]`,
                value: "",
              });
              A.push(G), P++;
            }
            u(A);
          }, [t.length, r]);
          const h = (A, P) => {
              if (isNaN(A) || isNaN(P)) return;
              const G = [...r];
              G.splice(P, 0, G.splice(A, 1)[0]), i(G);
            },
            C = (A, P) => {
              const G = [...r];
              (G[A].highlight = P.highlight),
                (G[A].highlight_reason = P.highlight_reason),
                i(G);
            },
            b = (0, e.jsx)(g.$n, {
              className: Ht.AddDLCButton,
              onClick: (A) =>
                (0, Ts.pg)(
                  (0, e.jsx)(Mn, {
                    rgDLCItems: r,
                    parentAppID: s,
                    onSelected: (P, G, ue, ze) => {
                      const he = { itemid: "" + G, appid: "" + P, name: ue },
                        Ee = ze ? [he, ...r] : [...r, he];
                      i(Ee);
                    },
                  }),
                  (0, ws.uX)(A),
                ),
              children: (0, o.we)("#StoreAdmin_Add_DLC") + "...",
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              b,
              (0, e.jsx)(Nt.A, {
                items: r,
                onDelete: (A) => m(A),
                onMove: (A, P) => h(A, P),
                render: (A, P) =>
                  (0, e.jsx)(
                    kn,
                    { item: A, index: P, fnUpdateHighlight: C },
                    A?.itemid ?? A?.appid,
                  ),
              }),
              ...l,
            ],
          });
        }
        function Mn(n) {
          const {
              closeModal: t,
              rgDLCItems: s,
              onSelected: r,
              parentAppID: i,
            } = n,
            l = Ms.c6.qI,
            [u, m] = c.useState(null),
            h = (A, P) => {
              m({ appid: A, itemid: P });
            },
            [C] = (0, ut.G6)(u?.appid, l, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            b = c.useCallback(
              (A) => {
                r(u?.appid, u?.itemid, C?.GetName(), A);
              },
              [u, r, C],
            );
          return (0, e.jsxs)(w.eV, {
            title: (0, o.we)("#StoreAdmin_Add_DLC"),
            closeModal: t,
            className: Ht.AddDLCDialog,
            children: [
              (0, e.jsx)(g.nB, {
                children: (0, e.jsxs)("div", {
                  className: Ht.AppSelectCtn,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, o.we)("#StoreAdmin_Add_DLC_Desc"),
                    }),
                    (0, e.jsx)(Tn.h, {
                      fnSetItemID: h,
                      itemType: l,
                      fnFilterID: (A) =>
                        s.findIndex((P) => parseInt(P.appid) == A) == -1,
                      bIncludeRetired: !1,
                      bOnlyDLC: !0,
                      rgParentAppIDs: [i],
                      bRunQueryOnLoad: !0,
                    }),
                    !!u?.appid &&
                      (0, e.jsxs)("div", {
                        className: Ht.DLCDisplayContainer,
                        children: [
                          (0, e.jsx)("div", {
                            children: C?.GetName()
                              ? C.GetName() + " (" + C.GetID() + ")"
                              : u.appid,
                          }),
                          (0, e.jsx)("img", {
                            src:
                              C?.GetAssets().GetSmallCapsuleURL() ||
                              C?.GetAssets().GetHeaderURL(),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, e.jsxs)(g.wi, {
                className: Ht.AddDLCFooter,
                children: [
                  (0, e.jsx)(g.jn, {
                    disabled: !u,
                    onClick: () => {
                      b(!0), t && t();
                    },
                    children: (0, o.we)("#StoreAdmin_Add_To_Top"),
                  }),
                  (0, e.jsx)(g.$n, {
                    disabled: !u,
                    onClick: () => {
                      b(!1), t && t();
                    },
                    children: (0, o.we)("#StoreAdmin_Add_To_Bottom"),
                  }),
                  (0, e.jsx)(g.$n, {
                    onClick: () => {
                      t && t();
                    },
                    children: (0, o.we)("#Button_Cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function kn(n) {
          const { item: t, index: s, fnUpdateHighlight: r } = n,
            i = !t.bRetired && !t.bUnlisted,
            l = s == 0 && i,
            u = c.useMemo(
              () => [
                {
                  label: (0, o.we)("#StoreAdmin_Highlight_NoneSelected"),
                  data: "",
                },
                { label: (0, o.we)("#StoreAdmin_Highlight_New"), data: In },
                {
                  label: (0, o.we)("#StoreAdmin_Highlight_ComingSoon"),
                  data: It,
                },
                {
                  label: (0, o.we)("#StoreAdmin_Highlight_PlayerFavorite"),
                  data: cn,
                },
                {
                  label: (0, o.we)("#StoreAdmin_Highlight_Recommended"),
                  data: dn,
                },
                {
                  label: (0, o.we)("#StoreAdmin_Highlight_NewPlayer"),
                  data: Dn,
                },
              ],
              [],
            ),
            m = () => {
              (t.highlight = !t.highlight), r(s, t);
            },
            h = (b) => {
              (t.highlight_reason = b.data), r(s, t);
            };
          if (!t) return null;
          const C = (0, U.A)(
            Ht.DLCItem,
            t.bDeleted && Ht.DLCItemDeleted,
            !i && Ht.DLCItemNotHighlightEligible,
          );
          return (0, e.jsxs)("div", {
            className: C,
            children: [
              (0, e.jsx)("a", {
                href: y.TS.PARTNER_BASE_URL + "apps/landing/" + t.appid,
                children: t.name || t.appid,
              }),
              t.bRetired &&
                (0, e.jsxs)("span", {
                  className: Ht.LabelNotHighlightEligible,
                  children: ["(", (0, o.we)("#StoreAdmin_Retired"), ")"],
                }),
              !t.bRetired &&
                t.bUnlisted &&
                (0, e.jsxs)("span", {
                  className: Ht.LabelNotHighlightEligible,
                  children: ["(", (0, o.we)("#StoreAdmin_Unlisted"), ")"],
                }),
              l &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(g.Yh, {
                      className: Ht.Highlight,
                      checked: t.highlight,
                      onClick: m,
                      label: (0, o.we)("#StoreAdmin_Highlight_Checkbox"),
                    }),
                    t.highlight &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: Ht.HighlightDropDownLabel,
                            children: (0, o.we)("#StoreAdmin_Highlight_Reason"),
                          }),
                          (0, e.jsx)("div", {
                            className: Ht.HighlightDropDown,
                            children: (0, e.jsx)(g.ZU, {
                              rgOptions: u,
                              onChange: h,
                              selectedOption: t.highlight_reason
                                ? parseInt("" + t.highlight_reason)
                                : "",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          });
        }
        var ks = a(30935);
        function Bn(n) {
          const { rgPinnedBundles: t, rgEnabledBundles: s } = n,
            [r, i] = (0, c.useState)(t),
            l = s.filter(
              (u) => r.findIndex((m) => m.bundleid === u.bundleid) === -1,
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Nn, {
                pinnedBundles: r,
                unpinnedBundles: l,
                setPinnedBundles: i,
              }),
              (0, e.jsx)(Ln, {
                pinnedBundles: r,
                nInitialPinnedBundles: t.length,
              }),
            ],
          });
        }
        function Ln(n) {
          const { pinnedBundles: t, nInitialPinnedBundles: s } = n;
          let r = 0,
            i = [];
          for (; r < Math.max(s, t.length); ) {
            if (r < t.length) {
              const l = t[r];
              i.push({ index: r, value: l.bundleid });
            } else i.push({ index: r, value: "" });
            r++;
          }
          return (0, e.jsx)("div", {
            className: ks.PinnedBundlesHiddenInputs,
            children: i.map((l) =>
              (0, e.jsx)(
                "input",
                {
                  type: "hidden",
                  name: `app[pinned_bundles][${l.index}]`,
                  value: l.value,
                },
                l.index,
              ),
            ),
          });
        }
        function Nn(n) {
          const {
              pinnedBundles: t,
              unpinnedBundles: s,
              setPinnedBundles: r,
            } = n,
            i = (m) => {
              const h = [...t];
              h.splice(m, 1), r(h);
            },
            l = (m, h) => {
              const C = new Array(...t),
                [b] = C.splice(m, 1);
              C.splice(h, 0, b), r(C);
            },
            u = (m) => {
              const h = s.find((b) => b.bundleid === m.value);
              if (h === void 0) return;
              const C = t.concat([h]);
              r(C);
            };
          return (0, e.jsxs)("div", {
            className: ks.PinnedBundlesEditor,
            children: [
              (0, e.jsx)(Rn, { unpinnedBundles: s, onChange: u }),
              (0, e.jsx)(p, { pinnedBundles: t, onDelete: i, onMove: l }),
            ],
          });
        }
        function Rn(n) {
          const { unpinnedBundles: t, onChange: s } = n,
            r = t.map((i) => ({ value: i.bundleid, label: i.name }));
          return (0, e.jsx)(st.Ay, {
            className: "react-select-container",
            classNamePrefix: "react-select",
            isSearchable: !0,
            isMulti: !1,
            placeholder: (0, o.we)("#PinnedBundles_Placeholder"),
            options: r,
            onChange: s,
            controlShouldRenderValue: !1,
            noOptionsMessage: () => (0, o.we)("#PinnedBundles_NoOptions"),
          });
        }
        function p(n) {
          const { pinnedBundles: t, onDelete: s, onMove: r } = n;
          if (t.length === 0)
            return (0, e.jsx)("div", {
              className: ks.EmptyPinnedBundleList,
              children: (0, o.we)("#PinnedBundles_NoPinnedBundles"),
            });
          const i = (l, u) =>
            (0, e.jsx)("div", {
              className: ks.PinnedBundleRow,
              children: (0, e.jsxs)("a", {
                href: `${y.TS.PARTNER_BASE_URL}bundles/view/${l.bundleid}`,
                children: [l.name, " (", l.bundleid, ")"],
              }),
            });
          return (0, e.jsx)(Nt.A, {
            items: t,
            onDelete: s,
            onMove: r,
            render: i,
          });
        }
        var d = a(93357);
        function f() {
          const n = new Map();
          return (
            (0, as.Tc)("current_prices", "application_config").forEach((s) => {
              n.set(s.packageid, s);
            }),
            n
          );
        }
        function j() {
          const [n, t] = (0, c.useState)(() => f());
          return n;
        }
        var I = a(54806),
          se = a(58632),
          H = a.n(se),
          ae = a(34592),
          te = a(98609);
        const ce = 20,
          ve = 900 * 1e3,
          Re = "PackagePriceChanges",
          je = new Map();
        async function We(n) {
          const t = { packageids: n.join(",") },
            s = await zt().get(
              `${te.TS.PARTNER_BASE_URL}pricing/admin/packagepricechanges`,
              { params: t, withCredentials: !0 },
            );
          if (!s || s.status != 200 || s.data?.success != es.R)
            throw `Load package price changes failed ${((0, ae.H))(s).strErrorMsg}`;
          const r = new Map();
          return (
            s.data.packages?.forEach((i) => r.set(i.packageid, i)),
            n.map(
              (i) =>
                r.get(i) || { packageid: i, total_changes: 0, changes: [] },
            )
          );
        }
        const Ge = new (H())((n) => We(n), { cache: !1, maxBatchSize: ce });
        function ct(n, t) {
          const s = new Map();
          return (
            t.forEach((r, i) => {
              r.data
                ? s.set(r.data.packageid, r.data)
                : r.isError &&
                  s.set(n[i], { packageid: n[i], bLoadFailed: !0 });
            }),
            s.size > 0 ? s : je
          );
        }
        function mt(n) {
          const t = (0, c.useMemo)(
              () => Array.from(new Set(n)).filter(Boolean),
              [n],
            ),
            s = (0, c.useCallback)((r) => ct(t, r), [t]);
          return (0, I.E)({
            queries: t.map((r) => ({
              queryKey: [Re, r],
              queryFn: () => Ge.load(r),
              staleTime: ve,
              retry: 1,
            })),
            combine: s,
          });
        }
        class rt {
          m_mapPackageToPartners = new Map();
          GetMap() {
            return this.m_mapPackageToPartners;
          }
          static s_Singleton;
          static Get() {
            return (
              rt.s_Singleton ||
                ((rt.s_Singleton = new rt()), rt.s_Singleton.Init()),
              rt.s_Singleton
            );
          }
          constructor() {}
          Init() {
            (0, as.Tc)(
              "package_to_paid_partners",
              "application_config",
            ).forEach((s) => {
              this.m_mapPackageToPartners.has(s.packageid) ||
                this.m_mapPackageToPartners.set(s.packageid, new Array()),
                this.m_mapPackageToPartners.get(s.packageid).push(s.partnerid);
            });
          }
        }
        function Dt() {
          const [n, t] = (0, c.useState)(() => rt.Get().GetMap());
          return n;
        }
        function lt(n) {
          const t = Dt();
          return useMemo(() => {
            if (n) {
              const s = new Set();
              return (
                n.forEach((r) => {
                  if (t.has(r)) {
                    const i = t.get(r);
                    i.length <= 3 && i.forEach((l) => s.add(l));
                  }
                }),
                Array.from(s.values())
              );
            }
            return [];
          }, [n, t]);
        }
        var Ot = a(8323),
          Tt = a(54963),
          ts = Object.defineProperty,
          Bt = Object.getOwnPropertyDescriptor,
          Ut = (n, t, s, r) => {
            for (
              var i = r > 1 ? void 0 : r ? Bt(t, s) : t, l = n.length - 1, u;
              l >= 0;
              l--
            )
              (u = n[l]) && (i = (r ? u(t, s, i) : u(i)) || i);
            return r && i && ts(t, s, i), i;
          };
        const gs = class sn {
          m_rgMapProposal = new Map();
          m_nTotalItems = 0;
          m_proposalAddRemoveCallback = new Ot.lu();
          GetProposals() {
            return Array.from(this.m_rgMapProposal.values());
          }
          GetProposalListChange() {
            return this.m_proposalAddRemoveCallback;
          }
          async LoadMoreProposal() {
            return (
              this.m_proposalAddRemoveCallback.Dispatch(this.GetProposals()), !1
            );
          }
          async RejectProposal(t, s, r) {
            let i = null;
            try {
              const l = new FormData();
              l.append("sessionid", (0, as.KC)()),
                l.append("packageid", "" + t),
                l.append("json", "1"),
                l.append("reason_code", s.join(",") || ""),
                l.append("email_message", r);
              const u = `${te.TS.PARTNER_BASE_URL}packages/rejectpricing`,
                m = await zt().post(u, l, { withCredentials: !0 });
              if (m.status == 200 && m.data?.success == es.R)
                return (
                  console.log(
                    `Proposal for package ${t} successfully rejected`,
                  ),
                  this.m_rgMapProposal.delete(t),
                  this.m_proposalAddRemoveCallback.Dispatch(
                    this.GetProposals(),
                  ),
                  !0
                );
              i = (0, ae.H)(m);
            } catch (l) {
              i = (0, ae.H)(l);
            }
            return (
              console.error(
                "CPriceProposalReviewRequiredStore::RejectProposal failed with " +
                  i.strErrorMsg,
                i,
              ),
              !1
            );
          }
          async AcceptProposal(t, s, r) {
            let i = null;
            try {
              const l = new FormData();
              l.append("sessionid", (0, as.KC)()),
                l.append("packageid", "" + t),
                l.append("json", "1"),
                l.append("proposalkey", "" + r),
                l.append("partner_will_publish", s ? "1" : "0");
              const u = `${te.TS.PARTNER_BASE_URL}packages/approvepricing`,
                m = await zt().post(u, l, { withCredentials: !0 });
              if (m.status == 200 && m.data?.success == es.R)
                return (
                  console.log(
                    `Proposal for package ${t} successfully accepted`,
                    m.data.output,
                  ),
                  this.m_rgMapProposal.delete(t),
                  this.m_proposalAddRemoveCallback.Dispatch(
                    this.GetProposals(),
                  ),
                  null
                );
              if (((i = (0, ae.H)(m)), m?.data?.output))
                return (
                  console.log(
                    "CPriceProposalReviewRequiredStore::AcceptProposal message information:",
                    m.data.output,
                    i.strErrorMsg,
                  ),
                  m.data.output
                );
            } catch (l) {
              i = (0, ae.H)(l);
            }
            return (
              console.error(
                "CPriceProposalReviewRequiredStore::AcceptProposal failed with " +
                  i.strErrorMsg,
                i,
              ),
              "generic failure"
            );
          }
          static s_Singleton;
          static Get() {
            return (
              sn.s_Singleton || (sn.s_Singleton = new sn()), sn.s_Singleton
            );
          }
          constructor() {
            const t = (0, as.Tc)("proposed_prices", "application_config");
            this.ValidateInputDefault(t) &&
              t.forEach((s) => this.m_rgMapProposal.set(s.packageid, s)),
              (this.m_nTotalItems = (0, as.Tc)(
                "total_proposed_prices",
                "application_config",
              ));
          }
          ValidateInputDefault(t) {
            const s = t;
            return s && Array.isArray(s) && s.length > 0 && s[0].packageid > 0;
          }
        };
        Ut([Tt.oI], gs.prototype, "LoadMoreProposal", 1),
          Ut([Tt.oI], gs.prototype, "RejectProposal", 1),
          Ut([Tt.oI], gs.prototype, "AcceptProposal", 1);
        let ss = gs;
        function ls() {
          const [n, t] = (0, c.useState)(() => ss.Get().GetProposals());
          return (0, Tt.hL)(ss.Get().GetProposalListChange(), t), n;
        }
        function Vt() {
          return {
            fnLoadMoreProposal: ss.Get().LoadMoreProposal,
            fnRejectProposal: ss.Get().RejectProposal,
            fnAcceptProposal: ss.Get().AcceptProposal,
          };
        }
        var Ja = a(45737),
          Qn = a.n(Ja),
          Za = a(179),
          Jt = a(34104),
          ys = a(33220),
          Jn = a(12932);
        const un = { include_release: !0 };
        var Zn = a(31069),
          ns = a(3301),
          qa = a(90247);
        const mn = (0, Jt.yv)(),
          cl = (0, Jt.X5)(),
          pn = (0, qa.R$)();
        function qn(n) {
          const t = new Array();
          return (
            mn.forEach((s) => {
              n.proposed_prices.base_amounts.some(
                (r) => r.amount.currency_code == s,
              ) || t.push((0, ys.M1)(s));
            }),
            pn.forEach((s) => {
              const r = (0, ns.de)(s);
              n.proposed_prices.region_amounts.some((i) => i.name == r) ||
                t.push((0, ns.k8)(s));
            }),
            t
          );
        }
        function er(n) {
          const t = new Array();
          return (
            n.proposed_prices.base_amounts.forEach((s) => {
              mn.includes(s.amount.currency_code) ||
                (console.log(
                  "Unexpected currency code: " + s.amount.currency_code,
                  s,
                ),
                t.push(
                  `Currency Code: "${s.amount.currency_code}" with price in cents ${s.amount.amount}`,
                ));
            }),
            n.proposed_prices.region_amounts.forEach((s) => {
              pn.includes((0, ns.uF)(s.name.toUpperCase())) ||
                (console.log(
                  `Unexpected region code: ${s.name} and currency code ${s.amount.currency_code} with price in cents ${s.amount.amount}`,
                ),
                t.push(s.name));
            }),
            t
          );
        }
        function ea(n, t, s) {
          if (t) {
            const r = (0, ns.k8)(t);
            return n?.current_costs?.region_amounts?.find((i) => i.region == r)
              ?.amount.amount;
          }
          return n?.current_costs?.base_amounts?.find(
            (r) => r.currency_code == s,
          )?.amount;
        }
        function ta(n, t, s, r, i, l) {
          r.price * Zn.Ur < t.amount.amount
            ? i.push({
                strCurrency: s
                  ? (0, ns.k8)(s)
                  : (0, ys.pd)(t.amount.currency_code),
                nAmountCents: t.amount.amount,
                nPercent: Math.floor((t.amount.amount / r.price) * 100) - 100,
                nProposedPrice: t.amount.amount,
                nGuidancePrice: r.price,
                nOriginalPrice: ea(n, s, t.amount.currency_code),
              })
            : r.price * Zn.yk > t.amount.amount &&
              l.push({
                strCurrency: s
                  ? (0, ns.k8)(s)
                  : (0, ys.pd)(t.amount.currency_code),
                nAmountCents: t.amount.amount,
                nPercent: 100 - Math.floor((t.amount.amount / r.price) * 100),
                nProposedPrice: t.amount.amount,
                nGuidancePrice: r.price,
                nOriginalPrice: ea(n, s, t.amount.currency_code),
              });
        }
        function sa(n, t, s, r) {
          const i = new Array(),
            l = new Array(),
            u = t.get(r.packageid);
          return (
            r.proposed_prices.base_amounts.map((m) => {
              const h =
                s.GetRecommendPrice(n, m.amount.currency_code) ||
                s.GetScaledRecommendedPrice(n, m.amount.currency_code);
              ta(u, m, null, h, i, l);
            }),
            r.proposed_prices.region_amounts.map((m) => {
              const h = (0, ns.uF)(m.name),
                C =
                  s.GetRecommendPrice(n, Jt.CS, h) ||
                  s.GetScaledRecommendedPrice(n, Jt.CS, h);
              ta(u, m, h, C, i, l);
            }),
            {
              rgAboveThreshold: i.sort((m, h) => h.nPercent - m.nPercent),
              rgBelowThreshold: l.sort((m, h) => h.nPercent - m.nPercent),
            }
          );
        }
        function na(n) {
          const t = Math.floor(Date.now() / 1e3);
          return n.BIsReleased() && n.GetReleaseDateRTime() + 720 * 60 * 60 > t;
        }
        var Je = a(2897),
          aa = a(91916),
          hn = a(59490),
          ra = a(1706),
          dt = a(15348);
        const tr = 720 * 60 * 60;
        function sr(n) {
          const { packageID: t, priceChanges: s } = n,
            r = s?.changes?.[0];
          return (0, e.jsxs)("div", {
            className: dt.PriceChangeSummary,
            children: [
              (0, e.jsx)(nr, { priceChanges: s }),
              (0, e.jsx)("a", {
                href: `${te.TS.PARTNER_BASE_URL}packages/pricehistory/${t}`,
                target: "_blank",
                rel: "noreferrer",
                children: "Show Package Price History",
              }),
              !!r && (0, e.jsx)(ar, { priceChanges: s }),
            ],
          });
        }
        function nr(n) {
          const { priceChanges: t } = n;
          if (!t)
            return (0, e.jsx)("div", {
              className: dt.Pending,
              children: "Looking up published price changes...",
            });
          if (t.bLoadFailed)
            return (0, e.jsx)("div", {
              className: dt.LoadFailed,
              children: "Could not load published price changes",
            });
          const s = t.changes?.[0];
          if (!s)
            return (0, e.jsx)("div", {
              className: dt.Pending,
              children: "No previously published price change",
            });
          const r = Date.now() / 1e3 - s.time < tr;
          return (0, e.jsx)(k.m9, {
            toolTipContent: (0, e.jsx)(rr, { priceChanges: t }),
            direction: "right",
            nDelayShowMS: 150,
            children: (0, e.jsxs)("div", {
              className: (0, U.A)(dt.LastChange, r && dt.RecentChange),
              children: [
                "Price last published ",
                (0, o.TW)(s.time),
                " (",
                (0, o.Nm)(s.time),
                ")",
              ],
            }),
          });
        }
        function ar(n) {
          const { priceChanges: t } = n,
            s = t.total_changes || 0;
          return (0, e.jsxs)("div", {
            className: dt.ChangeCount,
            children: [
              s,
              " published price ",
              s == 1 ? "change" : "changes",
              " total",
            ],
          });
        }
        function rr(n) {
          const { priceChanges: t } = n,
            s = t.changes || [];
          return (0, e.jsxs)("div", {
            className: dt.PriceChangeToolTip,
            children: [
              (0, e.jsx)("div", {
                className: dt.ToolTipTitle,
                children: "Recent published price changes",
              }),
              (0, e.jsxs)("table", {
                className: dt.ChangeTable,
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      className: dt.ChangeHeader,
                      children: [
                        (0, e.jsx)("th", { children: "Published" }),
                        (0, e.jsx)("th", { children: "USD" }),
                        (0, e.jsx)("th", { children: "Change" }),
                        (0, e.jsx)("th", { children: "Currencies" }),
                        (0, e.jsx)("th", { children: "By" }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: s.map((r, i) =>
                      (0, e.jsx)(or, { change: r }, `${r.time}_${i}`),
                    ),
                  }),
                ],
              }),
              t.total_changes > s.length &&
                (0, e.jsxs)("div", {
                  className: dt.ToolTipFooter,
                  children: [
                    "Showing the last ",
                    s.length,
                    " of ",
                    t.total_changes,
                    " published changes",
                  ],
                }),
              (0, e.jsx)("div", {
                className: dt.ToolTipFooter,
                children:
                  "Open the package price history for the full per-currency detail.",
              }),
            ],
          });
        }
        function or(n) {
          const { change: t } = n;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("tr", {
                className: dt.ChangeRow,
                children: [
                  (0, e.jsxs)("td", {
                    children: [
                      (0, o.TW)(t.time),
                      (0, e.jsx)("div", {
                        className: dt.TimeSince,
                        children: (0, o.Nm)(t.time),
                      }),
                    ],
                  }),
                  (0, e.jsx)("td", {
                    className: dt.Price,
                    children: t.usd_amount
                      ? (0, ra.x)(t.usd_amount, Jt.CS)
                      : "--",
                  }),
                  (0, e.jsx)("td", { children: (0, e.jsx)(ir, { change: t }) }),
                  (0, e.jsxs)("td", {
                    className: dt.Currencies,
                    children: [
                      t.currency_count || 0,
                      !!t.country_count &&
                        (0, e.jsxs)("span", {
                          children: [" +", t.country_count, " country"],
                        }),
                    ],
                  }),
                  (0, e.jsx)("td", {
                    children: (0, e.jsx)(hn.p, { accountID: t.account }),
                  }),
                ],
              }),
              !!t.notes &&
                (0, e.jsx)("tr", {
                  className: dt.ChangeRow,
                  children: (0, e.jsx)("td", {
                    className: dt.Notes,
                    colSpan: 5,
                    children: t.notes,
                  }),
                }),
            ],
          });
        }
        function ir(n) {
          const { change: t } = n;
          if (!t.usd_amount)
            return (0, e.jsx)("span", {
              className: dt.NoChange,
              children: "no USD price",
            });
          if (t.first_published)
            return (0, e.jsx)("span", {
              className: dt.FirstPrice,
              children: "first published price",
            });
          if (!t.usd_previous)
            return (0, e.jsx)("span", {
              className: dt.NoChange,
              children: "previous USD price unknown",
            });
          if (t.usd_amount == t.usd_previous)
            return (0, e.jsx)("span", {
              className: dt.NoChange,
              children: "USD unchanged",
            });
          const s = t.usd_amount > t.usd_previous,
            r = Math.round(
              ((t.usd_amount - t.usd_previous) / t.usd_previous) * 100,
            );
          return (0, e.jsxs)("span", {
            className: s ? dt.Increase : dt.Decrease,
            children: [
              s ? "\u25B2" : "\u25BC",
              " ",
              Math.abs(r),
              "% from ",
              (0, ra.x)(t.usd_previous, Jt.CS),
            ],
          });
        }
        var fs = a(73191),
          oa = a(14358);
        function lr(n) {
          const { proposal: t, mapCurrentPrices: s, oGuideline: r } = n,
            { fnAcceptProposal: i } = Vt(),
            [l, u] = (0, c.useState)(!1),
            [m, h] = (0, c.useState)(null),
            [C] = (0, ut.Gg)(t.packageid, un);
          return l
            ? (0, e.jsx)("div", {
                children: (0, e.jsx)(Gt.t, {
                  string: "Accepting",
                  size: "small",
                  position: "center",
                }),
              })
            : (0, e.jsxs)("div", {
                className: oa.ActionsCtn,
                children: [
                  (0, e.jsxs)(g.$n, {
                    onClick: async () => {
                      u(!0),
                        i(t.packageid, t.partner_will_publish, t.proposal_key)
                          .then(h)
                          .finally(() => u(!1));
                    },
                    children: ["Publish Proposal ", m ? " (FORCE)" : ""],
                  }),
                  !!m &&
                    (0, e.jsxs)("div", {
                      children: [
                        "Publish failed with: ",
                        m,
                        ", publish again to bypass check",
                      ],
                    }),
                  (0, e.jsx)(g.$n, {
                    onClick: (b) => {
                      const A = new Array();
                      qn(t).length > 0 && A.push("currency_missing");
                      const P = t.proposed_prices.base_amounts.find(
                          (ue) => ue.amount.currency_code == Jt.CS,
                        )?.amount.amount,
                        G = sa(P, s, r, t);
                      (G.rgAboveThreshold.length > 0 ||
                        G.rgBelowThreshold.length > 0) &&
                        A.push("out_of_guideline"),
                        C && na(C) && A.push("within_30_days"),
                        (0, Ts.pg)(
                          (0, e.jsx)(cr, { proposal: t, errors: A }),
                          (0, ws.uX)(b),
                        );
                    },
                    children: "Reject...",
                  }),
                ],
              });
        }
        const ia = new Map([
          ["within_30_days", "Within 30 Days of Release"],
          ["currency_missing", "Missing one or more currency"],
          ["out_of_guideline", "One or more currency out of expected range"],
        ]);
        function cr(n) {
          const { proposal: t, closeModal: s, errors: r } = n,
            [i, l] = (0, c.useState)(() => r),
            [u, m] = (0, c.useState)(""),
            { fnRejectProposal: h } = Vt(),
            C = `Reject pricing proposal for package ${t.packageid}`,
            b = (0, fs.vs)();
          return b.bLoading
            ? (0, e.jsx)(fs.Hh, { state: b, strDialogTitle: C, closeModal: s })
            : (0, e.jsxs)(w.o0, {
                strTitle: C,
                strDescription:
                  "Select the appropriate reasons for rejecting this price proposal. Each will surface to the user in the reject email.",
                bDisableBackgroundDismiss: !0,
                onCancel: s,
                onOK: () => {
                  b.fnSetLoading(!0),
                    h(t.packageid, i, u)
                      .then((A) => {
                        A
                          ? b.fnSetSuccess(!0)
                          : (b.fnSetError(!0),
                            b.fnSetStrError(
                              "Failed to reject; check console for details",
                            ));
                      })
                      .catch((A) => {
                        b.fnSetError(!0),
                          b.fnSetStrError(
                            "Failed to reject; check console for details",
                          );
                      });
                },
                children: [
                  (0, e.jsx)(g.JU, { children: "Rejection type:" }),
                  Array.from(ia.keys()).map((A) =>
                    (0, e.jsx)(
                      g.Yh,
                      {
                        checked: i.includes(A),
                        onChange: (P) => {
                          const G = i.filter((ue) => ue != A);
                          P && G.push(A), l(G);
                        },
                        label: ia.get(A),
                      },
                      "check" + A,
                    ),
                  ),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)(g.JU, {
                    children:
                      "Optionally include custom message text in rejection email",
                  }),
                  (0, e.jsx)("textarea", {
                    onChange: (A) => m(A.target.value),
                    value: u,
                    className: oa.NotesField,
                  }),
                ],
              });
        }
        var xt = a(23708),
          Ft = a(80613),
          pt = a.n(Ft),
          le = a(75245),
          Bs = a(35038);
        const dl = 0,
          ul = 1,
          ml = 3,
          pl = 4,
          hl = 5,
          gl = 6,
          fl = 7,
          _l = 8,
          xl = 9,
          bl = 10,
          Cl = 11,
          Al = 12,
          Sl = 13,
          vl = 14,
          yl = 15,
          jl = 16,
          Pl = 17,
          El = 18,
          Il = 19,
          Dl = 20,
          Tl = 21,
          wl = 22,
          Ml = 23,
          kl = 24,
          Bl = 25,
          Ll = 26,
          Nl = 27,
          Rl = 28,
          Ol = 29,
          Fl = 30,
          Hl = 31,
          Ul = 32,
          Wl = 33,
          Gl = 34,
          zl = 35,
          Vl = 36,
          Kl = 37,
          $l = 38,
          Xl = 39,
          Yl = 40,
          Ql = 41,
          Jl = 42,
          Zl = 43,
          ql = 44,
          ec = 45,
          tc = 46,
          sc = 47,
          nc = 48,
          ac = 49,
          rc = 50,
          oc = 51,
          ic = 52,
          lc = 53,
          cc = 54,
          la = 55,
          dc = 56,
          uc = 57,
          mc = 58,
          pc = 59,
          hc = 60,
          gc = 61,
          fc = 62,
          _c = 63,
          xc = 64,
          bc = 65,
          Cc = 66,
          Ac = 67,
          Sc = 68,
          vc = 69,
          yc = 70,
          jc = 71,
          Pc = 72,
          Ec = 73,
          Ic = 74,
          Dc = 75,
          Tc = 76,
          wc = 77,
          Mc = 78,
          kc = 79,
          Bc = 80,
          Lc = 81,
          Nc = 82,
          Rc = 83,
          Oc = 84,
          Fc = 85,
          Hc = 86,
          Uc = 87,
          Wc = 88,
          Gc = 89,
          zc = 90,
          Vc = 91,
          Kc = 92,
          $c = 93,
          Xc = 94,
          Yc = 95,
          Qc = 96,
          Jc = 97,
          Zc = 98,
          qc = 99,
          ed = 100,
          td = 101,
          sd = 102,
          nd = 103,
          ad = 104,
          rd = 105,
          od = 106,
          id = 107,
          ld = 108,
          cd = 109,
          dd = 110,
          ud = 111,
          md = 112,
          pd = 0,
          hd = 101,
          gd = 102,
          fd = 103,
          _d = 104,
          xd = 105,
          bd = 106,
          Cd = 107,
          Ad = 108,
          Sd = 109,
          vd = 110,
          yd = 111,
          jd = 112,
          Pd = 113,
          Ed = 114,
          Id = 115,
          Dd = 116,
          Td = 117,
          wd = 118,
          Md = 119,
          kd = 120,
          Bd = 121,
          Ld = 122,
          Nd = 123,
          Rd = 124,
          Od = 125,
          Fd = 126,
          Hd = 127,
          Ud = 128,
          Wd = 129,
          Gd = 130,
          zd = 131,
          Vd = 132,
          Kd = 133,
          $d = 134,
          Xd = 201,
          Yd = 202,
          Qd = 203,
          Jd = 204,
          Zd = 205,
          qd = 206,
          eu = 207,
          tu = 208,
          su = 209,
          nu = 210,
          au = 211,
          ru = 212,
          ou = 213,
          iu = 214,
          lu = 215,
          cu = 216,
          du = 217,
          uu = 301,
          mu = 302,
          pu = 303,
          hu = 304,
          gu = 305,
          fu = 306,
          _u = 307,
          xu = 308,
          bu = 320,
          Cu = 321,
          Au = 350,
          Su = 351,
          vu = 352,
          yu = 353,
          ju = 354,
          Pu = 355,
          Eu = 356,
          Iu = 360,
          Du = 361,
          Tu = 362,
          wu = 363,
          Mu = 364,
          ku = 365,
          Bu = 370,
          Lu = 371,
          Nu = 372,
          Ru = 373,
          Ou = 374,
          Fu = 375,
          Hu = 376,
          Uu = 380,
          Wu = 381,
          Gu = 401,
          zu = 402,
          Vu = 403,
          Ku = 404,
          $u = 405,
          Xu = 406,
          Yu = 407,
          Qu = 408,
          Ju = 409,
          Zu = 410,
          qu = 411,
          em = 412,
          tm = 413,
          sm = 414,
          nm = 415,
          am = 416,
          rm = 417,
          om = 418,
          im = 419,
          lm = 501,
          cm = 601,
          dm = 602,
          um = 603,
          mm = 701,
          pm = 702,
          hm = 703,
          gm = 704,
          fm = 705,
          _m = 706,
          xm = 707,
          bm = 708,
          Cm = 709,
          Am = 801,
          Sm = 802,
          vm = 803,
          ym = 804,
          jm = 805,
          Pm = 806,
          Em = 807,
          Im = 808,
          Dm = 809,
          Tm = 810,
          wm = 811,
          Mm = 812,
          km = 813,
          Bm = 814,
          Lm = 815,
          Nm = 816,
          Rm = 901,
          Om = 902,
          Fm = 903,
          Hm = 904,
          Um = 905,
          Wm = 906,
          Gm = 907,
          zm = 908,
          Vm = 909,
          Km = 910,
          $m = 911,
          Xm = 912,
          Ym = 913,
          Qm = 914,
          Jm = 915,
          Zm = 916,
          qm = 917,
          ep = 918,
          tp = 919,
          ca = 920,
          sp = 921,
          np = 922,
          ap = 923,
          rp = 924,
          op = 925,
          ip = 926,
          lp = 927,
          cp = 928,
          dp = 929,
          up = 930,
          mp = 931,
          pp = 932,
          hp = 933,
          gp = 934,
          fp = 935,
          _p = 936,
          xp = 937,
          bp = 938,
          Cp = 939,
          Ap = 940,
          Sp = 941,
          vp = 942,
          yp = 943,
          jp = 944,
          Pp = 945,
          Ep = 1001,
          Ip = 1002,
          Dp = 1003,
          Tp = 1004,
          wp = 1005,
          Mp = 1006,
          kp = 1007,
          Bp = 1101,
          Lp = 1201,
          Np = 1202,
          Rp = 1203,
          Op = 1301,
          Fp = 1500,
          Hp = 1600,
          Up = 1700,
          Wp = 1701,
          Gp = 1702,
          zp = 1703;
        function Vp(n) {
          return "unknown EHelpRequestType ( " + n + " )";
        }
        function Kp(n) {
          return "unknown EHelpRequestState ( " + n + " )";
        }
        function $p(n) {
          return "unknown EHelpRequestReviewState ( " + n + " )";
        }
        function Xp(n) {
          return "unknown EHelpRequestStatsRollupInterval ( " + n + " )";
        }
        function Yp(n) {
          return "unknown EHelpRequestStatsResponderType ( " + n + " )";
        }
        function Qp(n) {
          return "unknown EHelpIssue ( " + n + " )";
        }
        function Jp(n) {
          return "unknown EHelpRequestEscalationLevel ( " + n + " )";
        }
        function Zp(n) {
          return "unknown EHelpRequestMsgType ( " + n + " )";
        }
        function qp(n) {
          return "unknown EHelpRequestAction ( " + n + " )";
        }
        function eh(n) {
          return "unknown EHelpRequestSortOrder ( " + n + " )";
        }
        function th(n) {
          return "unknown EHelpRequestPOPType ( " + n + " )";
        }
        function sh(n) {
          return "unknown EAnnouncementPlacement ( " + n + " )";
        }
        function nh(n) {
          return "unknown ETickerCategoryLanguageRule ( " + n + " )";
        }
        function ah(n) {
          return "unknown EPreapprovalResolution ( " + n + " )";
        }
        function rh(n) {
          return "unknown EHelpRequestFeedbackCategory ( " + n + " )";
        }
        function oh(n) {
          return "unknown EHelpRequestFeedbackTargetType ( " + n + " )";
        }
        function ih(n) {
          return "unknown EFeedbackState ( " + n + " )";
        }
        function lh(n) {
          return "unknown ESupportActionSource ( " + n + " )";
        }
        function ch(n) {
          return "unknown ERefundSupportAction ( " + n + " )";
        }
        class bt extends Ft.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.quicktext_id || le.Sg(bt.M()),
              Ft.Message.initialize(this, t, 0, -1, [6, 10, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: le.qM.readUint32,
                      bw: le.gp.writeUint32,
                    },
                    requires_update: {
                      n: 2,
                      br: le.qM.readBool,
                      bw: le.gp.writeBool,
                    },
                    title: {
                      n: 3,
                      br: le.qM.readString,
                      bw: le.gp.writeString,
                    },
                    hidden: { n: 4, br: le.qM.readBool, bw: le.gp.writeBool },
                    approved: { n: 5, br: le.qM.readBool, bw: le.gp.writeBool },
                    help_request_types: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: le.qM.readUint32,
                      pbr: le.qM.readPackedUint32,
                      bw: le.gp.writeRepeatedUint32,
                    },
                    content: { n: 7, c: ht },
                    button_text: {
                      n: 8,
                      br: le.qM.readString,
                      bw: le.gp.writeString,
                    },
                    replacement: {
                      n: 9,
                      br: le.qM.readBool,
                      bw: le.gp.writeBool,
                    },
                    payment_methods: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: le.qM.readUint32,
                      pbr: le.qM.readPackedUint32,
                      bw: le.gp.writeRepeatedUint32,
                    },
                    appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: le.qM.readUint32,
                      pbr: le.qM.readPackedUint32,
                      bw: le.gp.writeRepeatedUint32,
                    },
                    escalation_level: {
                      n: 12,
                      br: le.qM.readEnum,
                      bw: le.gp.writeEnum,
                    },
                    partner_only: {
                      n: 13,
                      br: le.qM.readBool,
                      bw: le.gp.writeBool,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = le.w0(bt.M())), bt.sm_mbf;
          }
          toObject(t = !1) {
            return bt.toObject(t, this);
          }
          static toObject(t, s) {
            return le.BT(bt.M(), t, s);
          }
          static fromObject(t) {
            return le.Uq(bt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (pt().BinaryReader)(t),
              r = new bt();
            return bt.deserializeBinaryFromReader(r, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return le.zj(bt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (pt().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            le.i0(bt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (pt().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        }
        class ht extends Ft.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ht.prototype.content || le.Sg(ht.M()),
              Ft.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    content: {
                      n: 1,
                      br: le.qM.readString,
                      bw: le.gp.writeString,
                    },
                    major_revision: {
                      n: 2,
                      br: le.qM.readUint32,
                      bw: le.gp.writeUint32,
                    },
                    minor_revision: {
                      n: 3,
                      br: le.qM.readUint32,
                      bw: le.gp.writeUint32,
                    },
                    author: {
                      n: 4,
                      br: le.qM.readUint32,
                      bw: le.gp.writeUint32,
                    },
                    last_update: {
                      n: 5,
                      br: le.qM.readUint32,
                      bw: le.gp.writeUint32,
                    },
                    language: {
                      n: 6,
                      br: le.qM.readInt32,
                      bw: le.gp.writeInt32,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = le.w0(ht.M())), ht.sm_mbf;
          }
          toObject(t = !1) {
            return ht.toObject(t, this);
          }
          static toObject(t, s) {
            return le.BT(ht.M(), t, s);
          }
          static fromObject(t) {
            return le.Uq(ht.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (pt().BinaryReader)(t),
              r = new ht();
            return ht.deserializeBinaryFromReader(r, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return le.zj(ht.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (pt().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            le.i0(ht.M(), t, s);
          }
          serializeBase64String() {
            var t = new (pt().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        }
        class Ct extends Ft.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ct.prototype.quicktext_id || le.Sg(Ct.M()),
              Ft.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: le.qM.readUint32,
                      bw: le.gp.writeUint32,
                    },
                    language: {
                      n: 2,
                      br: le.qM.readString,
                      bw: le.gp.writeString,
                    },
                    from_sql: { n: 3, br: le.qM.readBool, bw: le.gp.writeBool },
                  },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = le.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(t = !1) {
            return Ct.toObject(t, this);
          }
          static toObject(t, s) {
            return le.BT(Ct.M(), t, s);
          }
          static fromObject(t) {
            return le.Uq(Ct.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (pt().BinaryReader)(t),
              r = new Ct();
            return Ct.deserializeBinaryFromReader(r, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return le.zj(Ct.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (pt().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            le.i0(Ct.M(), t, s);
          }
          serializeBase64String() {
            var t = new (pt().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        }
        class At extends Ft.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              At.prototype.quicktext || le.Sg(At.M()),
              Ft.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    quicktext: { n: 1, c: bt },
                    english_reference: { n: 2, c: ht },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = le.w0(At.M())), At.sm_mbf;
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, s) {
            return le.BT(At.M(), t, s);
          }
          static fromObject(t) {
            return le.Uq(At.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (pt().BinaryReader)(t),
              r = new At();
            return At.deserializeBinaryFromReader(r, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return le.zj(At.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (pt().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            le.i0(At.M(), t, s);
          }
          serializeBase64String() {
            var t = new (pt().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        }
        class St extends Ft.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              St.prototype.appid || le.Sg(St.M()),
              Ft.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    appid: {
                      n: 1,
                      br: le.qM.readUint32,
                      bw: le.gp.writeUint32,
                    },
                    log_type: {
                      n: 2,
                      br: le.qM.readString,
                      bw: le.gp.writeString,
                    },
                    version_string: {
                      n: 3,
                      br: le.qM.readString,
                      bw: le.gp.writeString,
                    },
                    log_contents: {
                      n: 4,
                      br: le.qM.readString,
                      bw: le.gp.writeString,
                    },
                    request_id: {
                      n: 5,
                      br: le.qM.readUint64String,
                      bw: le.gp.writeUint64String,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = le.w0(St.M())), St.sm_mbf;
          }
          toObject(t = !1) {
            return St.toObject(t, this);
          }
          static toObject(t, s) {
            return le.BT(St.M(), t, s);
          }
          static fromObject(t) {
            return le.Uq(St.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (pt().BinaryReader)(t),
              r = new St();
            return St.deserializeBinaryFromReader(r, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return le.zj(St.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (pt().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            le.i0(St.M(), t, s);
          }
          serializeBase64String() {
            var t = new (pt().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        }
        class vt extends Ft.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              vt.prototype.id || le.Sg(vt.M()),
              Ft.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    id: {
                      n: 1,
                      br: le.qM.readUint64String,
                      bw: le.gp.writeUint64String,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = le.w0(vt.M())), vt.sm_mbf;
          }
          toObject(t = !1) {
            return vt.toObject(t, this);
          }
          static toObject(t, s) {
            return le.BT(vt.M(), t, s);
          }
          static fromObject(t) {
            return le.Uq(vt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (pt().BinaryReader)(t),
              r = new vt();
            return vt.deserializeBinaryFromReader(r, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return le.zj(vt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (pt().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            le.i0(vt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (pt().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        }
        class yt extends Ft.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              yt.prototype.appid || le.Sg(yt.M()),
              Ft.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    appid: {
                      n: 1,
                      br: le.qM.readUint32,
                      bw: le.gp.writeUint32,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = le.w0(yt.M())), yt.sm_mbf;
          }
          toObject(t = !1) {
            return yt.toObject(t, this);
          }
          static toObject(t, s) {
            return le.BT(yt.M(), t, s);
          }
          static fromObject(t) {
            return le.Uq(yt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (pt().BinaryReader)(t),
              r = new yt();
            return yt.deserializeBinaryFromReader(r, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return le.zj(yt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (pt().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            le.i0(yt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (pt().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        }
        class jt extends Ft.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.request_id || le.Sg(jt.M()),
              Ft.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    request_id: {
                      n: 1,
                      br: le.qM.readUint64String,
                      bw: le.gp.writeUint64String,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = le.w0(jt.M())), jt.sm_mbf;
          }
          toObject(t = !1) {
            return jt.toObject(t, this);
          }
          static toObject(t, s) {
            return le.BT(jt.M(), t, s);
          }
          static fromObject(t) {
            return le.Uq(jt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (pt().BinaryReader)(t),
              r = new jt();
            return jt.deserializeBinaryFromReader(r, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return le.zj(jt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (pt().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            le.i0(jt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (pt().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        }
        var da;
        ((n) => {
          function t(s, r, i) {
            return s.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, Bs.I8)(Ct, r, i),
              At,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          n.GetQuickText = t;
        })(da || (da = {}));
        var ua;
        ((n) => {
          function t(r, i, l) {
            return r.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, Bs.I8)(St, i, l),
              vt,
              { ePrivilege: 1 },
            );
          }
          n.UploadUserApplicationLog = t;
          function s(r, i, l) {
            return r.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, Bs.I8)(yt, i, l),
              jt,
              { ePrivilege: 1 },
            );
          }
          n.GetApplicationLogDemand = s;
        })(ua || (ua = {}));
        var dr = a(75233),
          js = a(51614);
        function ur(n, t, s) {
          return (0, hs.I)({
            queryKey: ["PartnerTickets", n, t, s],
            queryFn: async () => {
              const r = { nPublisherId: n, eHelpIssue: t, eHelpRequestType: s };
              return (
                await zt().get(
                  `${te.TS.PARTNER_BASE_URL}admin/ajaxfetchsupportticketforpartner`,
                  { params: r, withCredentials: !0 },
                )
              ).data.tickets;
            },
          });
        }
        function mr(n, t, s, r, i) {
          const l = (0, dr.jE)();
          return (0, js.n)({
            mutationFn: async (u) => {
              i.fnSetLoading(!0);
              const m = new FormData();
              m.append("help_issue", "" + s),
                m.append("help_request_type", "" + r),
                m.append("appid", "" + u.appid),
                m.append("initial_text", u.strRequestTitle),
                m.append("issue_text", u.strRequestBody),
                m.append("sessionid", (0, as.KC)()),
                m.append("steamid", n),
                m.append("publisherid_selected", "" + t);
              const h = await zt().post(
                `${te.TS.PARTNER_BASE_URL}admin/ajaxcreatesupportticketforrequest/`,
                m,
              );
              if (h?.data?.success != es.R)
                throw (
                  (h?.data?.message && i.fnSetStrError(h?.data?.message),
                  h?.data?.message || "create ticket failed generic")
                );
            },
            onSuccess() {
              i.fnSetSuccess(!0);
            },
            onError() {
              i.fnSetError(!0);
            },
            onSettled() {
              l.invalidateQueries({ queryKey: ["PartnerTickets", t, s, r] });
            },
          });
        }
        var gn = a(56330),
          ma = a.n(gn),
          pr = a(77428),
          hr = a.n(pr),
          gr = a(55298);
        function fr(n) {
          const { partnerID: t, setTicketCount: s } = n,
            { data: r } = ur(t, ca, la),
            [i, l] = (0, c.useState)(2);
          return (
            (0, c.useEffect)(() => {
              r?.length > 0 && s(r?.length);
            }, [r, s]),
            !r || r.length == 0
              ? null
              : (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("br", {}),
                    (0, e.jsxs)("h3", {
                      children: ["Tickets ", r.length, ":"],
                    }),
                    r
                      .slice(0, i)
                      .map((u) =>
                        (0, e.jsx)(xr, { helpReq: u }, u.help_requestid),
                      ),
                    i < r.length &&
                      (0, e.jsxs)("a", {
                        href: "#",
                        onClick: () => l(r.length),
                        children: ["Show all ", r.length, " Tickets"],
                      }),
                  ],
                })
          );
        }
        function _r(n) {
          return n.startsWith("HT") && n.length === 14
            ? `${n.slice(0, 2)}-${n.slice(2, 6)}-${n.slice(6, 10)}-${n.slice(10)}`
            : n;
        }
        function xr(n) {
          const { helpReq: t } = n,
            s = (0, gr.qh)();
          return s
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, U.A)({
                      [hr().ValveAccountTicket]:
                        s.findIndex((r) => r.id === t.accountid) >= 0,
                    }),
                    children: [
                      s.findIndex((r) => r.id == t.assigned_agent_accountid) >=
                      0
                        ? (0, e.jsxs)(e.Fragment, {
                            children: [
                              "Owned By: ",
                              (0, e.jsx)(hn.p, {
                                accountID: t.assigned_agent_accountid,
                              }),
                              ",",
                            ],
                          })
                        : (0, e.jsxs)(e.Fragment, {
                            children: [
                              "Created by: ",
                              (0, e.jsx)(hn.p, { accountID: t.accountid }),
                              ",",
                            ],
                          }),
                      "Created on ",
                      (0, o.TW)(t.time_created),
                    ],
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("p", { children: t.issue_text }),
                  (0, e.jsx)("div", {}),
                  !!(
                    t.time_last_response &&
                    t.time_last_response > t.time_created
                  ) &&
                    (0, e.jsxs)("div", {
                      children: [
                        "Last Update ",
                        (0, o.TW)(t.time_last_response),
                      ],
                    }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("a", {
                    href: `${te.TS.HELP_BASE_URL}en/ticketmaster/ticket/${_r(t.reference_code)}`,
                    target: "_blank",
                    children: "Open Ticket",
                  }),
                ],
              })
            : (0, e.jsx)(Gt.t, { size: "small" });
        }
        function br(n) {
          const {
              nAccountIDProposer: t,
              packageID: s,
              mapPartnerPaidByPackage: r,
            } = n,
            i = r.get(s);
          return i
            ? (0, e.jsx)(g.$n, {
                onClick: (l) =>
                  (0, Ts.pg)(
                    (0, e.jsx)(Cr, {
                      nAccountIDProposer: t,
                      packageID: s,
                      partnerID: i[0],
                    }),
                    (0, ws.uX)(l),
                  ),
                children: "Create Ticket",
              })
            : (0, e.jsx)("div", {
                className: gn.WarningStylesBackground,
                children:
                  "Warning: Package isn't associated with a partner... Cannot create ticket",
              });
        }
        const pa = {};
        function Cr(n) {
          const {
              partnerID: t,
              packageID: s,
              closeModal: r,
              nAccountIDProposer: i,
            } = n,
            [l] = (0, aa.UA)(t),
            [u] = (0, ut.Gg)(s, pa),
            m = (0, c.useMemo)(
              () => Ve.b.InitFromAccountID(i).ConvertTo64BitString(),
              [i],
            ),
            [h, C] = (0, c.useState)(() => u?.GetAppID() || 0),
            [b] = (0, ut.t7)(h, pa),
            [A, P] = (0, c.useState)(`Question about pricing for package ${s}`),
            [G, ue] = (0, c.useState)("");
          (0, c.useEffect)(() => {
            u && h == 0 && C(u.GetAppID());
          }, [u, h]);
          const ze = (0, fs.vs)(),
            he = mr(m, t, ca, la, ze);
          return ze.bLoading
            ? (0, e.jsx)(fs.Hh, {
                state: ze,
                strDialogTitle: "Create Ticket for Partner",
                closeModal: r,
              })
            : (0, e.jsxs)(w.o0, {
                strTitle: "Create Ticket for Partner",
                strDescription: `Create a pricing ticket for partner ${l?.name} (${t}) for Package ${s}. App ${b?.GetName() || ""} with ${h}. Please update ticket title and body`,
                bOKDisabled: !h || A.trim().length == 0 || G.trim().length == 0,
                onOK: () =>
                  he.mutate({
                    appid: h,
                    strRequestTitle: A,
                    strRequestBody: G,
                  }),
                bAllowFullSize: !0,
                onCancel: r,
                bDisableBackgroundDismiss: G.trim().length > 0,
                children: [
                  (0, e.jsx)(g.pd, {
                    type: "text",
                    label: "Ticket Title",
                    placeholder: "Enter Ticket Title",
                    value: A,
                    onChange: (Ee) => P(Ee.currentTarget.value || ""),
                  }),
                  (0, e.jsx)(g.JU, { children: "Enter Ticket Body" }),
                  (0, e.jsx)("textarea", {
                    value: G,
                    onChange: (Ee) => ue(Ee.currentTarget.value),
                    cols: 80,
                    rows: 20,
                  }),
                  (0, e.jsx)(g.pd, {
                    type: "number",
                    label: "AppID to Associate with Ticket",
                    value: h,
                    onChange: (Ee) =>
                      C(Number.parseInt(Ee.currentTarget.value) || 0),
                  }),
                ],
              });
        }
        var Ar = a(84346);
        function ha(n) {
          const {
              proposal: t,
              mapPartnerPaidByPackage: s,
              mapPriceChanges: r,
            } = n,
            [i] = (0, ut.Gg)(t.packageid, un),
            [l] = (0, ut.Gg)(i?.GetIncludedAppIDsOrSelf()?.[0], un),
            u = `${te.TS.PARTNER_BASE_URL}store/packagelanding/${t.packageid}`;
          return (0, e.jsxs)("div", {
            className: (0, U.A)(xt.PackageInfoColumn, Je.PackageInfoColumn),
            children: [
              (0, e.jsxs)("div", {
                className: xt.PackageName,
                children: [
                  i
                    ? (0, e.jsxs)("span", {
                        children: [
                          (0, e.jsx)("a", { href: u, children: i.GetName() }),
                          " ",
                          `(${t.packageid})`,
                        ],
                      })
                    : (0, e.jsx)("a", {
                        href: u,
                        children: `Package ${t.packageid}`,
                      }),
                  l?.GetAppType() == Ms.uE._i &&
                    (0, e.jsx)("span", { children: " (DLC)" }),
                  l?.GetAppType() == Ms.uE.RA &&
                    (0, e.jsx)("span", { children: " (MOD)" }),
                  l?.GetAppType() == Ms.uE.Hk &&
                    (0, e.jsx)("span", { children: " (HARDWARE)" }),
                ],
              }),
              (0, e.jsx)("div", {
                className: xt.ReleaseDate,
                children:
                  i && i.BIsVisible()
                    ? "Release On: " +
                      (i.GetReleaseDateRTime()
                        ? (0, o.TW)(i.GetReleaseDateRTime())
                        : " No Release date")
                    : "Store Visibility: Hidden",
              }),
              (0, e.jsx)(sr, {
                packageID: t.packageid,
                priceChanges: r.get(t.packageid),
              }),
              (0, e.jsx)("div", {
                className: xt.SubmissionBy,
                children: (0, e.jsx)(hn.p, { accountID: t.account }),
              }),
              (0, e.jsx)(lr, { ...n }),
              (0, e.jsx)(br, {
                nAccountIDProposer: t.account_proposer,
                packageID: t.packageid,
                mapPartnerPaidByPackage: s,
              }),
              (0, e.jsx)(Sr, {
                packageID: t.packageid,
                mapPartnerPaidByPackage: s,
              }),
            ],
          });
        }
        function Sr(n) {
          const { packageID: t, mapPartnerPaidByPackage: s } = n,
            r = s.get(t);
          return r
            ? (0, e.jsx)("div", {
                children: r.map((i) =>
                  (0, e.jsx)(vr, { partnerID: i }, "partner" + i),
                ),
              })
            : null;
        }
        function vr(n) {
          const { partnerID: t } = n,
            [s] = (0, aa.UA)(t);
          return s
            ? (0, e.jsxs)("a", {
                href: `${te.TS.PARTNER_BASE_URL}admin/reviewpricesubmissions/?publisherID=${s.partnerid}`,
                children: [s.name, " (", s.partnerid, ")"],
              })
            : null;
        }
        function ga(n) {
          const { amountInCents: t, className: s } = n;
          return t
            ? (0, e.jsx)("div", { className: s, children: Kt(t) })
            : (0, e.jsx)("div", { className: s });
        }
        function Kt(n) {
          return n
            ? (n / 100).toLocaleString((0, Ar.J)(), {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : "";
        }
        function fa(n) {
          return (0, e.jsx)("thead", {
            children: (0, e.jsxs)("tr", {
              children: [
                mn.map((t) =>
                  (0, e.jsx)(
                    "td",
                    {
                      children: (0, e.jsx)(k.he, {
                        toolTipContent: (0, ys.Ug)(t),
                        children: (0, ys.M1)(t),
                      }),
                    },
                    "header" + t,
                  ),
                ),
                pn.map((t) =>
                  (0, e.jsx)(
                    "td",
                    {
                      children: (0, e.jsx)(k.he, {
                        toolTipContent: (0, ns.j4)(t),
                        children: (0, ns.de)(t),
                      }),
                    },
                    "header_region" + t,
                  ),
                ),
              ],
            }),
          });
        }
        function _a(n) {
          const { proposal: t, oGuideline: s, mapCurrentPrices: r } = n,
            i = r.get(t.packageid),
            l = t.proposed_prices.base_amounts.find(
              (u) => u.amount.currency_code == Jt.CS,
            )?.amount.amount;
          return (0, e.jsxs)("tr", {
            children: [
              mn.map((u) => {
                const m =
                  s.GetRecommendPrice(l, u) ||
                  s.GetScaledRecommendedPrice(l, u);
                return (0, e.jsx)(
                  yr,
                  { eCurrencyCode: u, proposal: t, curPrice: i, guidePrice: m },
                  t.packageid + "-" + u,
                );
              }),
              pn.map((u) => {
                const m = (0, ns.bS)(u),
                  h =
                    s.GetRecommendPrice(l, m, u) ||
                    s.GetScaledRecommendedPrice(l, m, u);
                return (0, e.jsx)(
                  jr,
                  {
                    eCurrencyCode: m,
                    eRegionCode: u,
                    proposal: t,
                    curPrice: i,
                    guidePrice: h,
                  },
                  t.packageid + "-" + u,
                );
              }),
            ],
          });
        }
        function yr(n) {
          const {
              eCurrencyCode: t,
              curPrice: s,
              proposal: r,
              guidePrice: i,
            } = n,
            l = r.proposed_prices.base_amounts.find(
              (m) => m.amount.currency_code == t,
            ),
            u = s?.current_costs?.base_amounts.find(
              (m) => m.currency_code == t,
            );
          return (0, e.jsx)(xa, {
            proposed: l,
            originalAmount: u,
            guidePrice: i,
          });
        }
        function jr(n) {
          const { eRegionCode: t, curPrice: s, proposal: r, guidePrice: i } = n,
            l = (0, ns.de)(t),
            u = r.proposed_prices.region_amounts.find((h) => h.name == l),
            m = s?.current_costs?.region_amounts.find((h) => h.region == l);
          return (0, e.jsx)(xa, {
            proposed: u,
            originalAmount: m?.amount,
            guidePrice: i,
          });
        }
        function xa(n) {
          const { proposed: t, originalAmount: s, guidePrice: r } = n;
          let i, l;
          if (t)
            if (r && r.price > t.amount.amount) {
              i = xt.outofmatrixlower;
              const u = Kt(r.price),
                m = Math.floor(100 - (t.amount.amount / r.price) * 100);
              l = `Suggested price ${u} - ${m}% \u25BC`;
            } else if (r && r.price < t.amount.amount) {
              i = xt.outofmatrix;
              const u = Kt(r.price),
                m = Math.floor((t.amount.amount / r.price) * 100 - 100);
              l = `Suggested price ${u} - ${m}% \u25B2`;
            } else
              s
                ? s.amount > t.amount.amount
                  ? (i = xt.priceChangedLower)
                  : s.amount < t.amount.amount && (i = xt.priceChangedHigher)
                : (i = xt.priceChangedNew);
          return (0, e.jsxs)("td", {
            className: xt.FullCurrencyColumn,
            children: [
              (0, e.jsx)(k.he, {
                toolTipContent: l,
                children: (0, e.jsx)(ga, {
                  className: i,
                  amountInCents: t?.amount.amount,
                }),
              }),
              s?.amount != t?.amount.amount &&
                (0, e.jsx)(ga, { amountInCents: s?.amount }),
              !s && (0, e.jsx)("div", { children: "--" }),
            ],
          });
        }
        const ba = 2e4;
        function Pr(n) {
          const {
              rgProposals: t,
              oGuideline: s,
              mapCurrentPrices: r,
              mapPartnerPaidByPackage: i,
              mapPriceChanges: l,
            } = n,
            [u, m] = (0, c.useState)(!1),
            [h, C] = (0, c.useState)(!0);
          return (0, e.jsxs)("div", {
            className: (0, U.A)(Je.PriceDeltaCtn),
            children: [
              (0, e.jsxs)(Jn.qx, {
                title: "Reasons Auto-Publish is blocked",
                children: [
                  (0, e.jsx)("p", {
                    children:
                      "This page will surface the reason why the package did not auto-publish and may require work to correct",
                  }),
                  (0, e.jsxs)("ol", {
                    className: Je.Legend,
                    children: [
                      (0, e.jsx)("li", {
                        className: Je.Missing,
                        children: "Missing Currencies",
                      }),
                      (0, e.jsx)("li", {
                        className: Je.Outside,
                        children:
                          "Outside of acceptable threshold (above 100% or below 50% of guideline)",
                      }),
                      (0, e.jsx)("li", {
                        className: Je.CustomUsd,
                        children:
                          "USD Price doesn't match any guideline price point",
                      }),
                      (0, e.jsx)("li", {
                        className: Je.AboveAutoPublish,
                        children: "USD Price above 200$ USD",
                      }),
                      (0, e.jsx)("li", {
                        className: Je.CloseToLaunch,
                        children:
                          "Raising Price during 30 days during launch window",
                      }),
                      (0, e.jsx)("li", {
                        className: Je.CountrySpecific,
                        children: "Has Country specific pricing",
                      }),
                    ],
                  }),
                  (0, e.jsxs)("p", {
                    children: [
                      "You can filter the list by choosing ",
                      (0, e.jsx)("a", {
                        href: `${te.TS.PARTNER_BASE_URL}admin/reviewpricesubmissions/?myPartners=1`,
                        children: "my partners",
                      }),
                      " view",
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(g.Yh, {
                label: "Show All Price Comparison Rows",
                tooltip:
                  "Displays the price comparison rows for all of the section below.",
                checked: u,
                onChange: m,
              }),
              (0, e.jsx)(g.Yh, {
                label: "Show Prices with Open Tickets",
                tooltip:
                  "Displays the price comparison rows for those with open tickets against them.",
                checked: h,
                onChange: C,
              }),
              (0, e.jsxs)("div", {
                className: (0, U.A)(Je.RowCtn),
                children: [
                  (0, e.jsx)("div", {
                    className: Je.PackageInfoColumn,
                    children: "Package Info",
                  }),
                  (0, e.jsx)("div", {
                    className: Je.FailuresCtn,
                    children: "Errors Blocking Auto Submission:",
                  }),
                ],
              }),
              t.map((b) =>
                (0, e.jsx)(
                  "div",
                  {
                    children: (0, e.jsx)(Er, {
                      oGuideline: s,
                      proposal: b,
                      mapCurrentPrices: r,
                      mapPartnerPaidByPackage: i,
                      mapPriceChanges: l,
                      bForceShowComparisonRows: u,
                      bShowWithOpenTickets: h,
                    }),
                  },
                  "delta_" + b.packageid,
                ),
              ),
            ],
          });
        }
        function Er(n) {
          const { bShowWithOpenTickets: t } = n,
            [s, r] = (0, c.useState)(0);
          return s > 0 && !t
            ? null
            : (0, e.jsxs)("div", {
                className: Je.ProposalCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: Je.RowCtn,
                    children: [
                      (0, e.jsx)(ha, { ...n }),
                      (0, e.jsx)(Ir, { ...n, setOpenTicketCount: r }),
                      (0, e.jsx)(Br, { ...n }),
                    ],
                  }),
                  (0, e.jsx)(Nr, { ...n }),
                ],
              });
        }
        function Ir(n) {
          const { proposal: t, setOpenTicketCount: s } = n,
            r = n.mapPartnerPaidByPackage.get(t.packageid)?.[0] || 0;
          return (0, e.jsxs)("div", {
            className: Je.FailuresCtn,
            children: [
              (0, e.jsx)(Tr, { ...n }),
              (0, e.jsx)(wr, { ...n }),
              (0, e.jsx)(Lr, { ...n }),
              (0, e.jsx)(Mr, { ...n }),
              (0, e.jsx)(Dr, { ...n }),
              (0, e.jsx)(fr, { partnerID: r, setTicketCount: s }),
            ],
          });
        }
        function Dr(n) {
          const { proposal: t, mapCurrentPrices: s } = n,
            r = t.proposed_prices.base_amounts.find(
              (l) => l.amount.currency_code == Jt.CS,
            )?.amount.amount,
            i = s
              .get(t.packageid)
              ?.current_costs.base_amounts.find(
                (l) => l.currency_code == Jt.CS,
              )?.amount;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              r > ba &&
                (0, e.jsxs)("div", {
                  className: Je.AboveAutoPublish,
                  children: [
                    "USD Price $",
                    Kt(r),
                    " is above $200 USD Threshold",
                  ],
                }),
              !!(i && r > 2 * i) &&
                (0, e.jsxs)("div", {
                  className: Je.AboveAutoPublish,
                  children: [
                    "USD price $",
                    Kt(r),
                    " is more than twice existing USD Price $",
                    Kt(i),
                  ],
                }),
            ],
          });
        }
        function Tr(n) {
          const { proposal: t } = n,
            s = (0, c.useMemo)(() => qn(t), [t]);
          return s?.length > 0
            ? (0, e.jsxs)("div", {
                className: Je.MissingCurrency,
                children: [
                  (0, e.jsxs)("div", {
                    className: Je.Title,
                    children: ["Missing ", s.length, " currencies: "],
                  }),
                  s.map(ys.t_).join(", "),
                ],
              })
            : null;
        }
        function wr(n) {
          const { proposal: t } = n,
            s = (0, c.useMemo)(() => er(t), [t]);
          return s?.length > 0
            ? (0, e.jsxs)("div", {
                className: Je.MissingCurrency,
                children: [
                  (0, e.jsxs)("div", {
                    className: Je.Title,
                    children: ["Unexpected ", s.length, " currencies: "],
                  }),
                  s.join(", "),
                ],
              })
            : null;
        }
        function Mr(n) {
          const { proposal: t, oGuideline: s } = n,
            r = t.proposed_prices.base_amounts.find(
              (l) => l.amount.currency_code == Jt.CS,
            )?.amount.amount,
            i = s.GetRecommendPrice(r, Jt.CS);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !i &&
                (0, e.jsxs)("div", {
                  className: Je.MatrixGap,
                  children: [
                    "$",
                    Kt(r),
                    " USD Price doesn't align with any matrix price point. Will compare proposal to scaled guideline.",
                  ],
                }),
              (0, e.jsx)(kr, { ...n, USDPriceCents: r }),
            ],
          });
        }
        function Ca(n) {
          const { thresholdData: t, strDirection: s } = n;
          let r = null;
          return (
            t.nOriginalPrice == t.nProposedPrice && (r = Je.EqualPrices),
            (0, e.jsxs)("tr", {
              className: Je.ThresholdRow,
              children: [
                (0, e.jsx)("td", {
                  className: Je.CurrencyName,
                  children: t.strCurrency,
                }),
                (0, e.jsx)("td", {
                  className: (0, U.A)(Je.OriginalPrice, r),
                  children: t.nOriginalPrice ? `${Kt(t.nOriginalPrice)}` : "--",
                }),
                (0, e.jsx)("td", {
                  className: (0, U.A)(Je.ProposedPrice, r),
                  children: `${Kt(t.nProposedPrice)}`,
                }),
                (0, e.jsx)("td", {
                  className: Je.RecommendedPrice,
                  children: `${Kt(t.nGuidancePrice)}`,
                }),
                (0, e.jsx)("td", {
                  className: Je.PercentDiff,
                  children: `${t.nPercent}% ${s}`,
                }),
              ],
            })
          );
        }
        function Aa(n) {
          const { strGuidanceMessage: t, strDirection: s } = n;
          return (0, e.jsxs)("thead", {
            children: [
              (0, e.jsx)("tr", {
                children: (0, e.jsxs)("td", {
                  colSpan: 5,
                  className: (0, U.A)(
                    Je.WarningTitle,
                    s == "above" ? Je.WarningAbove : Je.WarningBelow,
                  ),
                  children: [
                    (0, e.jsx)("b", {
                      children: s == "above" ? "\u25B2" : "\u25BC",
                    }),
                    " ",
                    t,
                  ],
                }),
              }),
              (0, e.jsxs)("tr", {
                className: (0, U.A)(Je.ThresholdRow, Je.ThresholdHeader),
                children: [
                  (0, e.jsx)("td", {
                    className: Je.CurrencyName,
                    children: "Currency",
                  }),
                  (0, e.jsx)("td", {
                    className: Je.OriginalPrice,
                    children: "Current",
                  }),
                  (0, e.jsx)("td", {
                    className: Je.ProposedPrice,
                    children: "Proposed",
                  }),
                  (0, e.jsx)("td", {
                    className: Je.RecommendedPrice,
                    children: "Recommended",
                  }),
                  (0, e.jsx)("td", {
                    className: Je.PercentDiff,
                    children: "% diff",
                  }),
                ],
              }),
            ],
          });
        }
        function kr(n) {
          const {
              proposal: t,
              oGuideline: s,
              USDPriceCents: r,
              mapCurrentPrices: i,
            } = n,
            { rgAboveThreshold: l, rgBelowThreshold: u } = (0, c.useMemo)(
              () => sa(r, i, s, t),
              [r, i, s, t],
            );
          if (l.length > 0 || u.length > 0) {
            const m = Kt(r);
            return (0, e.jsxs)(e.Fragment, {
              children: [
                r > ba &&
                  (0, e.jsxs)("div", {
                    className: Je.AutoPublishCeiling,
                    children: [
                      "USD price $",
                      Kt(r),
                      " is above the auto-publish threshold of $80 USD",
                    ],
                  }),
                (0, e.jsxs)("div", {
                  className: Je.CurrencyWarningsCtn,
                  children: [
                    l.length > 0 &&
                      (0, e.jsxs)("table", {
                        className: Je.ThresholdMiniTable,
                        children: [
                          (0, e.jsx)(Aa, {
                            strGuidanceMessage: `${l.length} currencies above guidance threshold for USD $ ${m}`,
                            strDirection: "above",
                          }),
                          (0, e.jsx)("tbody", {
                            children: l.map((h) =>
                              (0, e.jsx)(
                                Ca,
                                { thresholdData: h, strDirection: "\u25B2" },
                                t.packageid + "_" + h.strCurrency,
                              ),
                            ),
                          }),
                        ],
                      }),
                    u.length > 0 &&
                      (0, e.jsxs)("table", {
                        className: Je.ThresholdMiniTable,
                        children: [
                          (0, e.jsx)(Aa, {
                            strGuidanceMessage: `${u.length} currencies below guidance threshold for USD $ ${m}`,
                            strDirection: "below",
                          }),
                          (0, e.jsx)("tbody", {
                            children: u.map((h) =>
                              (0, e.jsx)(
                                Ca,
                                { thresholdData: h, strDirection: "\u25BC" },
                                t.packageid + "_" + h.strCurrency,
                              ),
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          return null;
        }
        function Br(n) {
          const { proposal: t } = n;
          return t.proposed_prices.country_amounts?.length > 0
            ? (0, e.jsxs)("div", {
                children: [
                  "Package has Country price overrides for Countries:",
                  t.proposed_prices.country_amounts
                    .map((s) => s.name)
                    .join(","),
                ],
              })
            : null;
        }
        function Lr(n) {
          const { proposal: t } = n,
            [s] = (0, ut.Gg)(t.packageid, un);
          return s && na(s)
            ? (0, e.jsxs)("div", {
                className: Je.ReleaseDateCallout,
                children: [
                  "This game released less than 30 days ago, on ",
                  (0, o.TW)(s.GetReleaseDateRTime()),
                ],
              })
            : null;
        }
        function Nr(n) {
          const { bForceShowComparisonRows: t } = n,
            [s, r] = (0, c.useState)(!1);
          return !s && !t
            ? (0, e.jsx)(g.Yh, {
                label: "Show Price Comparison Row",
                onChange: () => r(!0),
              })
            : (0, e.jsxs)("div", {
                className: (0, U.A)(xt.FullCurrencyTable),
                children: [(0, e.jsx)(fa, {}), (0, e.jsx)(_a, { ...n })],
              });
        }
        function Rr(n) {
          const {
            rgProposals: t,
            oGuideline: s,
            mapCurrentPrices: r,
            mapPartnerPaidByPackage: i,
            mapPriceChanges: l,
          } = n;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ur, {}),
              (0, e.jsx)(Or, { oGuideline: s }),
              (0, e.jsx)("hr", {}),
              (0, e.jsx)("hr", {}),
              t.map((u) =>
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(Fr, {
                        oGuideline: s,
                        proposal: u,
                        mapCurrentPrices: r,
                        mapPartnerPaidByPackage: i,
                        mapPriceChanges: l,
                      }),
                    ],
                  },
                  u.packageid,
                ),
              ),
            ],
          });
        }
        function Or(n) {
          return (0, e.jsxs)("div", {
            className: (0, U.A)(xt.RowCtn, xt.CurrencyHeaderRow),
            children: [
              (0, e.jsx)("div", {
                className: xt.PackageInfoColumn,
                children: "Package Info",
              }),
              (0, e.jsx)(fa, {}),
            ],
          });
        }
        function Fr(n) {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: xt.RowCtn,
                children: [(0, e.jsx)(ha, { ...n }), (0, e.jsx)(_a, { ...n })],
              }),
              (0, e.jsx)(Hr, { ...n }),
            ],
          });
        }
        function Hr(n) {
          const { proposal: t } = n,
            s = t.proposed_prices.country_amounts;
          return s?.length > 0
            ? (0, e.jsxs)("div", {
                className: xt.RowCtn,
                children: [
                  (0, e.jsx)("div", { children: "^^^^" }),
                  s.map((r) =>
                    (0, e.jsxs)(
                      "div",
                      {
                        children: [
                          r.name,
                          "/",
                          (0, ys.pd)(r.amount.currency_code),
                          " @ ",
                          Kt(r.account),
                        ],
                      },
                      `country_${t.packageid}_${r.amount.currency_code}`,
                    ),
                  ),
                ],
              })
            : null;
        }
        function Ur(n) {
          return (0, e.jsx)(Jn.qx, {
            title: "Legend",
            tooltip: "Explains the color scheme per proposed pricing color",
            bStartMinimized: !0,
            children: (0, e.jsxs)("div", {
              className: xt.pricingLegend,
              children: [
                (0, e.jsx)("div", {
                  className: xt.priceChangedLower,
                  children: "Price Decreases",
                }),
                (0, e.jsx)("div", {
                  className: xt.priceChangedHigher,
                  children: "Price Increases",
                }),
                (0, e.jsx)("div", {
                  className: xt.priceChangedNew,
                  children: "Price is New",
                }),
                (0, e.jsx)("div", {
                  className: xt.outofmatrix,
                  children:
                    "Price is higher than guideline. Mouseover to see suggested price.",
                }),
                (0, e.jsx)("div", {
                  className: xt.outofmatrixlower,
                  children:
                    "Price is lower than guideline. Mouseover to see suggested price.",
                }),
              ],
            }),
          });
        }
        function Wr(n) {
          const [t] = (0, c.useState)(
              () => (0, as.Tc)("filter_name", "application_config") || "",
            ),
            s = ls(),
            r = (0, d.cT)(),
            i = j(),
            l = Dt(),
            u = (0, c.useMemo)(() => s.map((P) => P.packageid), [s]),
            m = mt(u),
            [h, C] = (0, Za.QD)("tab", "delta");
          if (!r)
            return (0, e.jsx)(Gt.t, { string: "Loading Pricing Guidelines" });
          const b = (P) => C(P.key),
            A = [
              {
                name: "Price Delta",
                key: "delta",
                contents: (0, e.jsx)(Me.tH, {
                  children: (0, e.jsx)(Pr, {
                    rgProposals: s,
                    oGuideline: r,
                    mapCurrentPrices: i,
                    mapPartnerPaidByPackage: l,
                    mapPriceChanges: m,
                  }),
                }),
                onClick: b,
              },
              {
                name: "Submissions Raw Table",
                key: "raw",
                contents: (0, e.jsx)(Me.tH, {
                  children: (0, e.jsx)(Rr, {
                    rgProposals: s,
                    oGuideline: r,
                    mapCurrentPrices: i,
                    mapPartnerPaidByPackage: l,
                    mapPriceChanges: m,
                  }),
                }),
                onClick: b,
              },
            ];
          return (0, e.jsx)(on.m, {
            children: (0, e.jsx)(Me.tH, {
              children: (0, e.jsxs)("div", {
                className: (0, U.A)(Qn().AdminPageCtn, Qn().WidePageCtn),
                children: [
                  (0, e.jsx)("h1", {
                    children: "Package Prices Submissions Reviews",
                  }),
                  (0, e.jsx)("p", { children: t }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)(As.V, { tabs: A, startingTab: h }),
                ],
              }),
            }),
          });
        }
        var nt = a(26673),
          Sa = a(83516);
        const Ls = "0",
          Ns = "1",
          Rs = "2",
          cs = "3",
          ds = "4";
        function va(n) {
          return (
            !!n && Object.values(n).some((t) => t && t.trim().length !== 0)
          );
        }
        function Os(n) {
          switch (n.kind) {
            case Ls:
              return (0, o.we)(
                "#StoreAdmin_PurchaseOptionsOrder_InvalidKindError",
              );
            case cs:
              return va(n.header)
                ? null
                : (0, o.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingHeaderError",
                  );
            case Ns:
              return n.package_id
                ? null
                : (0, o.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingPackageError",
                  );
            case Rs:
              return n.bundle_id
                ? null
                : (0, o.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingBundleError",
                  );
            case ds:
              return va(n.dropdown_title)
                ? !n.dropdown_items || n.dropdown_items.length < 2
                  ? (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_MissingDropdownItemsError",
                    )
                  : null
                : (0, o.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingDropdownTitleError",
                  );
          }
        }
        const _s = (0, c.createContext)(null);
        function Gr(n, t) {
          if (n.length === 0) return !1;
          for (const s of n)
            switch (s.kind) {
              case Rs:
                return !1;
              case cs:
                continue;
              case Ls:
                return !1;
              case Ns:
                return t.includes(s.package_id);
              case ds:
                return (
                  s.dropdown_items &&
                  s.dropdown_items.length > 0 &&
                  s.dropdown_items[0].kind === "package" &&
                  t.includes(s.dropdown_items[0].package_id)
                );
            }
          return !1;
        }
        function zr(n) {
          const {
              appid: t,
              rgBaseGamePackageIds: s,
              rgAllBundles: r,
              rgAllPackages: i,
              rgValidLanguages: l,
            } = n,
            [u, m] = (0, c.useState)(n.bManualPurchaseOptionsOrder),
            [h, C] = (0, c.useState)(n.rgPurchaseOptionsOrder),
            [b, A] = (0, c.useMemo)(() => {
              const he = new Set(),
                Ee = new Set();
              for (const it of h)
                switch (it.kind) {
                  case Ns:
                    Ee.add(it.package_id);
                    break;
                  case Rs:
                    he.add(it.bundle_id && it.bundle_id);
                    break;
                  case ds:
                    for (const tn of it.dropdown_items ?? [])
                      Ee.add(tn.package_id);
                    break;
                }
              const Pt = i
                  .filter((it) => !Ee.has(it.packageid))
                  .map((it) => ({
                    value: it.packageid,
                    label: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      it.name,
                      it.packageid,
                    ),
                  })),
                Wt = r
                  .filter((it) => !he.has(it.bundleid))
                  .map((it) => ({
                    value: it.bundleid,
                    label: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      it.name,
                      it.bundleid,
                    ),
                  }));
              return [Pt, Wt];
            }, [r, i, h]),
            P = (0, c.useMemo)(
              () =>
                l.map((he) => {
                  const Ee = (0, o.we)(`#Language_${he}`);
                  return { value: he, label: Ee };
                }),
              [l],
            ),
            G = s.length === 0 || Gr(h, s),
            ue = h.some((he) => Os(he) !== null) || !G,
            ze = {
              appid: t,
              rgUnusedBundles: A,
              rgUnusedPackages: b,
              rgValidLanguages: P,
              bHasErrors: ue,
              rgAllPackages: i,
              rgAllBundles: r,
            };
          return (0, e.jsxs)("div", {
            className: nt.PurchaseOptionsOrderEditor,
            children: [
              (0, e.jsx)("h2", {
                children: (0, o.we)("#StoreAdmin_PurchaseOptionsOrder_Title"),
              }),
              (0, e.jsx)("p", {
                children: (0, o.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_Description",
                ),
              }),
              (0, e.jsxs)("div", {
                className: nt.PurchaseOptionsManualToggleCtn,
                children: [
                  (0, e.jsx)(Sa._H, { value: u, onChange: (he) => m(he) }),
                  (0, e.jsx)("div", {
                    className: nt.Label,
                    children: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_ToggleLabel",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: "app[purchase_options_order][method]",
                    value: u ? "manual" : "original",
                  }),
                ],
              }),
              (0, e.jsxs)(_s.Provider, {
                value: ze,
                children: [
                  u &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !G &&
                          (0, e.jsxs)("div", {
                            className: nt.PurchaseOptionError,
                            children: [
                              (0, e.jsx)(L.Q9b, { className: nt.Exclamation }),
                              (0, o.we)(
                                "#StoreAdmin_PurchaseOptionsOrder_FirstItemMustBeBaseGame",
                              ),
                              "\xA0 ",
                              s.join(", "),
                            ],
                          }),
                        (0, e.jsx)(qr, {
                          appid: n.appid,
                          items: h,
                          setItems: C,
                          component: $r,
                          noItemsPlaceholder: (0, e.jsx)("p", {
                            className: nt.NoPurchaseOptions,
                            children: (0, o.we)(
                              "#StoreAdmin_PurchaseOptionsOrder_NoPurchaseOptionsPlaceholder",
                            ),
                          }),
                          emptyItem: () => ({ kind: Ls }),
                          addText: (0, o.we)(
                            "#StoreAdmin_PurchaseOptionsOrder_Add",
                          ),
                        }),
                      ],
                    }),
                  (0, e.jsx)(Vr, {
                    rgOptions: h,
                    rgOriginalOptions: n.rgPurchaseOptionsOrder,
                  }),
                ],
              }),
            ],
          });
        }
        function Vr(n) {
          const { rgOptions: t, rgOriginalOptions: s } = n;
          if ((0, c.useContext)(_s).bHasErrors) return null;
          const i = [];
          for (let l = 0; l < Math.max(t.length, s.length); l++)
            l < t.length
              ? i.push(
                  (0, e.jsx)(
                    "div",
                    {
                      children: (0, e.jsx)(Kr, {
                        option: t[l],
                        originalOption: s[l] ?? null,
                        index: l,
                      }),
                    },
                    l,
                  ),
                )
              : i.push(
                  (0, e.jsx)(
                    "input",
                    {
                      type: "hidden",
                      name: `app[purchase_options_order][order][${l}]`,
                      value: "",
                    },
                    l,
                  ),
                );
          return (0, e.jsx)(e.Fragment, { children: i });
        }
        function Kr(n) {
          const { option: t, originalOption: s, index: r } = n,
            i = `app[purchase_options_order][order][${r}]`;
          if (
            (0, c.useContext)(_s).bHasErrors ||
            !s ||
            (t.kind === s.kind && t.kind !== ds && t.kind !== cs)
          )
            return null;
          if (t.kind === ds && s.kind === ds) {
            let u = [];
            if (t.dropdown_items.length < s.dropdown_items.length)
              for (
                let m = t.dropdown_items.length;
                m < s.dropdown_items.length;
                m++
              )
                u.push(
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: `${i}[dropdown_items][${m}]`,
                    value: "",
                  }),
                );
            for (const [m, h] of Object.entries(s.dropdown_title ?? {}))
              h.trim().length !== 0 &&
                ((t.dropdown_title && t.dropdown_title[m].trim().length > 0) ||
                  u.push(
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `${i}[dropdown_title][${m}]`,
                      value: "",
                    }),
                  ));
            for (const [m, h] of Object.entries(s.description ?? {}))
              h.trim().length !== 0 &&
                ((t.description && t.description[m].trim().length > 0) ||
                  u.push(
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `${i}[description][${m}]`,
                      value: "",
                    }),
                  ));
            return (0, e.jsx)(e.Fragment, { children: u });
          }
          if (t.kind === cs && s.kind === cs) {
            let u = [];
            for (const [m, h] of Object.entries(s.header ?? {}))
              h.trim().length !== 0 &&
                ((t.header && t.header[m].trim().length > 0) ||
                  u.push(
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `${i}[header][${m}]`,
                      value: "",
                    }),
                  ));
            return (0, e.jsx)(e.Fragment, { children: u });
          }
          switch (s.kind) {
            case Ns:
              return (0, e.jsx)("input", {
                type: "hidden",
                name: `${i}[package_id]`,
                value: "",
              });
            case Rs:
              return (0, e.jsx)("input", {
                type: "hidden",
                name: `${i}[bundle_id]`,
                value: "",
              });
            case cs:
              return (0, e.jsx)("input", {
                type: "hidden",
                name: `${i}[header]`,
                value: "",
              });
            case ds:
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: `${i}[dropdown_title]`,
                    value: "",
                  }),
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: `${i}[description]`,
                    value: "",
                  }),
                  s.dropdown_items?.map((u, m) =>
                    (0, e.jsx)(
                      "input",
                      {
                        type: "hidden",
                        name: `${i}[dropdown_items][${m}]`,
                        value: "",
                      },
                      m,
                    ),
                  ),
                ],
              });
            case Ls:
              return null;
          }
        }
        function $r(n) {
          const { index: t, item: s, setItem: r, removeItem: i } = n,
            l = (0, c.useContext)(_s),
            u = (C) => {
              let b = structuredClone(s);
              (b.kind = C.target.value), r(b);
            },
            m = [
              {
                value: Ns,
                label: (0, o.we)("#StoreAdmin_PurchaseOptionsOrder_Package"),
              },
              {
                value: Rs,
                label: (0, o.we)("#StoreAdmin_PurchaseOptionsOrder_Bundle"),
              },
              {
                value: cs,
                label: (0, o.we)("#StoreAdmin_PurchaseOptionsOrder_Header"),
              },
              {
                value: ds,
                label: (0, o.we)("#StoreAdmin_PurchaseOptionsOrder_Dropdown"),
              },
            ];
          let h;
          switch (s.kind) {
            case Ls:
              h = (0, e.jsx)(Xr, { item: s, index: t });
              break;
            case Ns:
              h = (0, e.jsx)(Yr, { item: s, setItem: r, index: t });
              break;
            case Rs:
              h = (0, e.jsx)(Qr, { item: s, setItem: r, index: t });
              break;
            case cs:
              h = (0, e.jsx)(Jr, { item: s, setItem: r, index: t });
              break;
            case ds:
              h = (0, e.jsx)(Zr, { item: s, setItem: r, index: t });
              break;
          }
          return (0, e.jsxs)("div", {
            className: nt.PurchaseOption,
            children: [
              !l.bHasErrors &&
                (0, e.jsx)("input", {
                  type: "hidden",
                  name: `app[purchase_options_order][order][${t}][kind]`,
                  value: s.kind,
                }),
              (0, e.jsxs)("div", {
                className: nt.PurchaseOptionFirstLine,
                children: [
                  (0, e.jsxs)("select", {
                    onChange: u,
                    value: s.kind,
                    children: [
                      (0, e.jsx)("option", { hidden: !0, value: Ls }),
                      m.map((C, b) =>
                        (0, e.jsx)(
                          "option",
                          { value: C.value, children: C.label },
                          b,
                        ),
                      ),
                    ],
                  }),
                  (0, e.jsx)("a", {
                    className: nt.RemovePurchaseOption,
                    onClick: i,
                    children: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_Remove",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: nt.PurchaseOptionDetails,
                children: h,
              }),
            ],
          });
        }
        function Qs(n) {
          return n.message === null
            ? null
            : (0, e.jsxs)("div", {
                className: nt.PurchaseOptionError,
                children: [
                  (0, e.jsx)(L.Q9b, { className: nt.Exclamation }),
                  n.message,
                ],
              });
        }
        function Xr(n) {
          const t = Os(n.item);
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)(Qs, { message: t }),
          });
        }
        function Yr(n) {
          const { item: t, index: s, setItem: r } = n,
            i = (0, c.useContext)(_s),
            l = (h) => {
              const C = structuredClone(t);
              (C.package_id = h.value), r(C);
            },
            u = i.rgAllPackages.find((h) => h.packageid === t.package_id),
            m = {
              value: t.package_id,
              label: u
                ? u.name
                : (0, o.we)("#StoreAdmin_PurchaseOptionsOrder_Loading"),
            };
          return (0, e.jsxs)("div", {
            className: nt.PackageOption,
            children: [
              (0, e.jsx)(Qs, { message: Os(t) }),
              (0, e.jsx)(st.Ay, {
                className: "react-select-container",
                classNamePrefix: "react-select",
                isSearchable: !0,
                isMulti: !1,
                name: i.bHasErrors
                  ? void 0
                  : `app[purchase_options_order][order][${s}][package_id]`,
                placeholder: (0, o.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder",
                ),
                options: i.rgUnusedPackages,
                value: m,
                onChange: l,
              }),
            ],
          });
        }
        function Qr(n) {
          const t = (0, c.useContext)(_s),
            { item: s, setItem: r, index: i } = n,
            l = (m) => {
              const h = structuredClone(s);
              (h.bundle_id = m.value), r(h);
            };
          let u;
          if (s.bundle_id) {
            const m = t.rgAllBundles.find((h) => h.bundleid === s.bundle_id);
            u = {
              value: s.bundle_id,
              label: (0, o.we)(
                "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                m.name,
                s.bundle_id,
              ),
            };
          }
          return (0, e.jsxs)("div", {
            className: nt.BundleOption,
            children: [
              (0, e.jsx)(Qs, { message: Os(s) }),
              (0, e.jsx)(st.Ay, {
                className: "react-select-container",
                classNamePrefix: "react-select",
                isSearchable: !0,
                isMulti: !1,
                value: u,
                name: t.bHasErrors
                  ? void 0
                  : `app[purchase_options_order][order][${i}][bundle_id]`,
                placeholder: (0, o.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_BundlePlaceholder",
                ),
                options: t.rgUnusedBundles,
                onChange: l,
              }),
            ],
          });
        }
        function Jr(n) {
          const t = (0, c.useContext)(_s),
            { index: s, item: r, setItem: i } = n,
            [l, u] = (0, c.useState)("english"),
            m = (r.header && r.header[l]) || "",
            h = (b) => {
              const A = b.target.value;
              let P = structuredClone(r);
              P.header === void 0 && (P.header = {}), (P.header[l] = A), i(P);
            },
            C = (b) => {
              const A = b.target.value;
              u(A);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Qs, { message: Os(r) }),
              (0, e.jsxs)("div", {
                className: nt.PurchaseOptionHeader,
                children: [
                  (0, e.jsx)("input", {
                    type: "hidden",
                    value: cs,
                    name: `app[purchase_options_order][order][${s}][kind]`,
                  }),
                  (0, e.jsx)("input", {
                    type: "text",
                    onInput: h,
                    value: m,
                    name: `app[purchase_options_order][order][${s}][header][${l}]`,
                    className: nt.HeaderText,
                    placeholder: "Header text",
                  }),
                  t.rgValidLanguages.map((b, A) =>
                    b.value === l
                      ? null
                      : r.header && r.header[b.value]
                        ? (0, e.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: `app[purchase_options_order][order][${s}][header][${b.value}]`,
                              value: r.header[b.value],
                            },
                            A,
                          )
                        : null,
                  ),
                  (0, e.jsx)("select", {
                    value: l,
                    onChange: C,
                    className: nt.HeaderLanguage,
                    children: t.rgValidLanguages.map((b, A) =>
                      (0, e.jsx)(
                        "option",
                        { value: b.value, children: b.label },
                        A,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Zr(n) {
          const t = (0, c.useContext)(_s),
            { item: s, setItem: r, index: i } = n,
            [l, u] = (0, c.useState)("english"),
            [m, h] = (0, c.useState)("english"),
            C = (he) => {
              const Ee = structuredClone(s);
              Ee.dropdown_title || (Ee.dropdown_title = {}),
                (Ee.dropdown_title[l] = he.target.value),
                r(Ee);
            },
            b = (he) => {
              const Ee = structuredClone(s);
              Ee.description || (Ee.description = {}),
                (Ee.description[m] = he.target.value),
                r(Ee);
            },
            A = (he) => {
              const Ee = structuredClone(s);
              Ee.dropdown_items || (Ee.dropdown_items = []);
              let Pt = { kind: "package", package_id: he.value[1] };
              Ee.dropdown_items.push(Pt), r(Ee);
            },
            P = t.rgUnusedPackages.map((he) => ({
              value: ["package", he.value],
              label: he.label,
            })),
            G = (he) => {
              if (he.package_id) {
                const Ee = t.rgAllPackages.find(
                  (Pt) => Pt.packageid === he.package_id,
                );
                return (0, e.jsx)("div", {
                  className: nt.DropdownOptionRow,
                  children: (0, e.jsx)("a", {
                    href: `${y.TS.PARTNER_BASE_URL}store/packagelanding/${he.package_id}`,
                    children: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      Ee.name,
                      he.package_id,
                    ),
                  }),
                });
              } else if (he.bundle_id) {
                const Ee = t.rgAllBundles.find(
                  (Pt) => Pt.bundleid === he.bundle_id,
                );
                return (0, e.jsx)("div", {
                  className: nt.DropdownOptionRow,
                  children: (0, e.jsx)("a", {
                    href: `${y.TS.PARTNER_BASE_URL}bundles/view/${he.bundle_id}`,
                    children: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      Ee.name,
                      he.bundle_id,
                    ),
                  }),
                });
              } else return null;
            },
            ue = (he) => {
              const Ee = structuredClone(s);
              Ee.dropdown_items || (Ee.dropdown_items = []),
                Ee.dropdown_items.splice(he, 1),
                r(Ee);
            },
            ze = (he, Ee) => {
              const Pt = structuredClone(s);
              Pt.dropdown_items || (Pt.dropdown_items = []);
              const [Wt] = Pt.dropdown_items.splice(he, 1);
              Pt.dropdown_items.splice(Ee, 0, Wt), r(Pt);
            };
          return (0, e.jsxs)("div", {
            className: nt.DropdownOption,
            children: [
              (0, e.jsx)(Qs, { message: Os(s) }),
              (0, e.jsxs)("div", {
                className: nt.TitleLine,
                children: [
                  (0, e.jsx)("label", {
                    children: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownTitleLabel",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    type: "text",
                    className: nt.TitleInput,
                    name: `app[purchase_options_order][order][${i}][dropdown_title][${l}]`,
                    value: (s.dropdown_title && s.dropdown_title[l]) || "",
                    placeholder: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownTitlePlaceholder",
                    ),
                    onChange: C,
                  }),
                  t.rgValidLanguages.map((he, Ee) =>
                    he.value === l
                      ? null
                      : s.dropdown_title &&
                          s.dropdown_title[he.value] &&
                          s.dropdown_title[he.value].trim().length > 0
                        ? (0, e.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: `app[purchase_options_order][order][${i}][dropdown_title][${he.value}]`,
                              value: s.dropdown_title[he.value],
                            },
                            Ee,
                          )
                        : null,
                  ),
                  (0, e.jsx)("select", {
                    value: l,
                    onChange: (he) => u(he.target.value),
                    className: nt.HeaderLanguage,
                    children: t.rgValidLanguages.map((he, Ee) =>
                      (0, e.jsx)(
                        "option",
                        { value: he.value, children: he.label },
                        Ee,
                      ),
                    ),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: nt.DescriptionLine,
                children: [
                  (0, e.jsx)("label", {
                    children: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionLabel",
                    ),
                  }),
                  (0, e.jsx)("select", {
                    value: m,
                    onChange: (he) => h(he.target.value),
                    className: nt.HeaderLanguage,
                    children: t.rgValidLanguages.map((he, Ee) =>
                      (0, e.jsx)(
                        "option",
                        { value: he.value, children: he.label },
                        Ee,
                      ),
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                type: "text",
                className: nt.DescriptionInput,
                name: `app[purchase_options_order][order][${i}][description][${m}]`,
                value: (s.description && s.description[m]) || "",
                onChange: b,
                placeholder: (0, o.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionPlaceholder",
                ),
              }),
              t.rgValidLanguages.map((he, Ee) =>
                he.value === m
                  ? null
                  : s.description &&
                      s.description[he.value] &&
                      s.description[he.value].trim().length > 0
                    ? (0, e.jsx)(
                        "input",
                        {
                          type: "hidden",
                          name: `app[purchase_options_order][order][${i}][description][${he.value}]`,
                          value: s.description[he.value],
                        },
                        Ee,
                      )
                    : null,
              ),
              (0, e.jsxs)("div", {
                className: nt.DropdownItemsCtn,
                children: [
                  (0, e.jsx)("label", {
                    children: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownItemsLabel",
                    ),
                  }),
                  (0, e.jsx)(st.Ay, {
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isSearchable: !0,
                    isMulti: !1,
                    placeholder: (0, o.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder",
                    ),
                    options: P,
                    onChange: A,
                    controlShouldRenderValue: !1,
                  }),
                  (0, e.jsx)(Nt.A, {
                    render: G,
                    onDelete: ue,
                    onMove: ze,
                    items: s.dropdown_items ?? [],
                  }),
                  (s.dropdown_items ?? []).map((he, Ee) =>
                    (0, e.jsxs)(
                      "div",
                      {
                        children: [
                          (0, e.jsx)("input", {
                            type: "hidden",
                            name: `app[purchase_options_order][order][${i}][dropdown_items][${Ee}][kind]`,
                            value: "package",
                          }),
                          (0, e.jsx)("input", {
                            type: "hidden",
                            name: `app[purchase_options_order][order][${i}][dropdown_items][${Ee}][package_id]`,
                            value: he.package_id,
                          }),
                        ],
                      },
                      Ee,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
        function qr(n) {
          const {
              items: t,
              setItems: s,
              component: r,
              emptyItem: i,
              noItemsPlaceholder: l,
              addText: u,
            } = n,
            m = (P) => () => {
              if (P === 0) return;
              let G = [...t];
              const [ue] = G.splice(P, 1);
              G.splice(P - 1, 0, ue), s(G);
            },
            h = (P) => () => {
              if (P === t.length - 1) return;
              let G = [...t];
              const [ue] = G.splice(P, 1);
              G.splice(P + 1, 0, ue), s(G);
            },
            C = () => (s(t.concat([i()])), !1),
            b = (P) => (G) => {
              let ue = [...t];
              (ue[P] = G), s(ue);
            },
            A = (P) => () => {
              let G = [...t];
              G.splice(P, 1), s(G);
            };
          return (0, e.jsxs)("div", {
            className: nt.ReorderableListWithArrows,
            children: [
              t.length > 0 &&
                t.map((P, G) =>
                  (0, e.jsx)(
                    eo,
                    {
                      index: G,
                      item: P,
                      setItem: b(G),
                      removeItem: A(G),
                      component: r,
                      moveUp: m(G),
                      moveDown: h(G),
                    },
                    "reorderable-" + G,
                  ),
                ),
              t.length === 0 && l,
              (0, e.jsx)("a", { onClick: C, children: u }),
            ],
          });
        }
        function eo(n) {
          const {
            index: t,
            item: s,
            setItem: r,
            moveUp: i,
            moveDown: l,
            removeItem: u,
          } = n;
          return (0, e.jsxs)("div", {
            className: nt.ReorderableListElement,
            children: [
              (0, e.jsxs)("div", {
                className: nt.ReorderableListUpAndDownCtn,
                children: [
                  (0, e.jsx)("div", { onClick: () => i(), children: "\u25B2" }),
                  (0, e.jsx)("div", { onClick: () => l(), children: "\u25BC" }),
                ],
              }),
              (0, e.jsx)("div", {
                className: nt.ReorderableListElementContents,
                children: (0, e.jsx)(n.component, {
                  index: t,
                  item: s,
                  setItem: r,
                  removeItem: u,
                }),
              }),
            ],
          });
        }
        var Fs = a(78699),
          On = a(7582),
          ya = a(24806),
          us = a(1880),
          Hs = a(32093),
          fn = a(50109),
          to = a(43308),
          Ps = a(69168),
          so = a(72865),
          no = a(83482),
          ao = a(1431),
          Fn = a.n(ao);
        const ro = { include_assets: !0, include_basic_info: !0 };
        function oo(n) {
          const { appid: t } = n,
            [s] = (0, ut.t7)(t, ro),
            r = (0, so.n9)();
          return !s || !t
            ? null
            : (0, e.jsx)("div", {
                className: Fn().StoreItemCtn,
                children: (0, e.jsx)("div", {
                  className: Fn().StoreItemRow,
                  children: (0, e.jsxs)("a", {
                    href: (0, no.wJ)(s.GetStorePageURL(), r),
                    children: [
                      (0, e.jsx)("img", {
                        src: s.GetAssets().GetSmallCapsuleURL(),
                      }),
                      (0, e.jsxs)("div", {
                        className: Fn().StoreItemDescription,
                        children: [s.GetShortDescription(), " "],
                      }),
                    ],
                  }),
                }),
              });
        }
        function ja(n) {
          const {
              text: t,
              placeholderToken: s,
              kvName: r,
              onChangeText: i,
              bOnlyDisplay: l,
              rgRealms: u,
              className: m,
            } = n,
            h = (0, fn.E)(),
            C = o.A0.GetLanguageListForRealms(u),
            b = new Array();
          r &&
            C.forEach((P) => {
              b.push(
                (0, e.jsx)(
                  "input",
                  {
                    type: "hidden",
                    name: `${r}[${(0, W.LgB)(P, "english")}]`,
                    value: (0, Fs.VX)(t, P),
                  },
                  r + "_" + P,
                ),
              );
            });
          const A = (0, Fs.VX)(t, h) || "";
          return (0, e.jsxs)("div", {
            className: m,
            children: [
              l
                ? (0, e.jsx)("div", {
                    children: A || (0, e.jsx)("i", { children: s }),
                  })
                : (0, e.jsx)("input", {
                    type: "text",
                    placeholder: (0, o.we)(s || "#KVInputBox_Default"),
                    value: A,
                    onChange: (P) => i(P.currentTarget.value, h),
                  }),
              b,
            ],
          });
        }
        var Js = a(11243),
          Pa = a(35102),
          io = a(36500),
          Us = a.n(io),
          lo = a(64442),
          gt = a.n(lo),
          co = a(14947);
        class ms {
          m_mapAppIDToDLCs = new Map();
          m_mapAppIDToSoundTracks = new Map();
          m_mapPromise = new Map();
          GetDLCForAppID(t) {
            return this.m_mapAppIDToDLCs.get(t);
          }
          GetSoundTracksForAppID(t) {
            return this.m_mapAppIDToSoundTracks.get(t);
          }
          async LoadDLCAndSoundTracksForAppID(t, s) {
            return (
              this.m_mapPromise.has(t) ||
                this.m_mapPromise.set(
                  t,
                  this.InternalLoadDLCAndSoundTracksForAppID(t, s),
                ),
              this.m_mapPromise.get(t)
            );
          }
          async InternalLoadDLCAndSoundTracksForAppID(t, s) {
            if (!this.m_mapAppIDToDLCs.has(t) && t != 0)
              try {
                let r = {
                    origin: self.origin,
                    cc: y.TS.COUNTRY || "US",
                    l: y.TS.LANGUAGE,
                  },
                  i = "";
                (0, y.yK)() == "partnerweb"
                  ? (i = `${y.TS.PARTNER_BASE_URL}seasonpass/ajaxgetreleasedorupcomingdlc?parentappid=${t}`)
                  : (i = y.TS.STORE_BASE_URL + "dlc/" + t + "/ajaxgetdlclist");
                let l = await zt().get(i, { params: r, cancelToken: s?.token }),
                  u = Array();
                l.data.dlcs &&
                  l.data.dlcs.forEach((m) => {
                    u.push({
                      appid: m.appid,
                      name: m.name,
                      is_released_somewhere: !!m.is_released_somewhere,
                    });
                  }),
                  this.m_mapAppIDToDLCs.set(t, u),
                  (u = Array()),
                  l.data.soundtracks &&
                    l.data.soundtracks.forEach((m) => {
                      u.push({
                        appid: m.appid,
                        name: m.name,
                        is_released_somewhere: !!m.is_released_somewhere,
                      });
                    }),
                  this.m_mapAppIDToSoundTracks.set(t, u);
              } catch (r) {
                const i = (0, ae.H)(r);
                console.error(
                  "LoadDLCAndSoundTracksForAppID for appid: " +
                    t +
                    " hit: " +
                    i.strErrorMsg,
                  i,
                );
              }
            return {
              dlcs: this.m_mapAppIDToDLCs.has(t)
                ? this.m_mapAppIDToDLCs.get(t)
                : [],
              soundtracks: this.m_mapAppIDToSoundTracks.has(t)
                ? this.m_mapAppIDToSoundTracks.get(t)
                : [],
            };
          }
          static s_Singleton;
          static Get() {
            return (
              ms.s_Singleton || (ms.s_Singleton = new ms()), ms.s_Singleton
            );
          }
          constructor() {
            (0, co.Gn)(this);
          }
        }
        function Hn(n) {
          const [t, s] = (0, c.useState)(n),
            [r, i] = (0, c.useState)(ms.Get().GetDLCForAppID(t));
          return (
            (0, c.useEffect)(() => {
              n &&
                (n != t || !r) &&
                ms
                  .Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    i(l.dlcs), s(n);
                  });
            }, [t, n, r]),
            r
          );
        }
        function uo(n) {
          const [t, s] = (0, c.useState)(n),
            [r, i] = (0, c.useState)(ms.Get().GetSoundTracksForAppID(t));
          return (
            (0, c.useEffect)(() => {
              n &&
                (n != t || !r) &&
                ms
                  .Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    i(l.soundtracks), s(n);
                  });
            }, [t, n, r]),
            r
          );
        }
        function dh(n) {
          const t = Hn(n);
          return useMemo(
            () => t?.filter((r) => !!r.is_released_somewhere) || null,
            [t],
          );
        }
        function uh(n) {
          const t = Hn(n);
          return useMemo(
            () => t?.filter((r) => !r.is_released_somewhere) || null,
            [t],
          );
        }
        function Un(n) {
          const {
              appid: t,
              setAppID: s,
              rgExcludeAppIDs: r,
              seasonPassID: i,
              bOnlyShowReleaseDLC: l,
              strLocalizedLabel: u,
              strLocalizedTooltip: m,
              fnResetAppID: h,
            } = n,
            C = Hn(i.parentAppID),
            b = uo(i.parentAppID),
            A = (0, c.useMemo)(
              () => [
                ...(C?.filter((ue) => !l || !!ue.is_released_somewhere) || []),
                ...(b?.filter((ue) => !l || !!ue.is_released_somewhere) || []),
              ],
              [C, b, l],
            ),
            P = (0, c.useMemo)(
              () => A?.filter((ue) => !r || !r.includes(ue.appid)),
              [A, r],
            ),
            G = (0, c.useMemo)(
              () =>
                P
                  ? P.map((ue) => ({
                      label: (0, e.jsx)(po, { appInfo: ue }),
                      data: ue.appid,
                    }))
                  : [],
              [P],
            );
          return P
            ? G.length == 0 && l
              ? (0, e.jsx)("div", {
                  className: (0, U.A)(gn.ErrorStylesWithIcon, "ErrorCtn"),
                  children: (0, o.we)("#SeasonPass_NoDLC"),
                })
              : (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(g.m, {
                      label: u || (0, o.we)("#SeasonPass_ShipDLC"),
                      tooltip: m || (0, o.we)("#SeasonPass_ShipDLC_ttip"),
                      selectedOption: t,
                      onChange: (ue) => s(ue.data),
                      rgOptions: G,
                    }),
                    !!(t && h) &&
                      (0, e.jsx)(g.$n, {
                        onClick: h,
                        children: (0, o.we)(
                          "#SeasonPass_CustomerComingSoonDLC_clear",
                        ),
                      }),
                  ],
                })
            : (0, e.jsx)(Gt.t, {
                size: "small",
                position: "center",
                string: (0, o.we)("#Loading"),
              });
        }
        const mo = { include_release: !0 };
        function po(n) {
          const { appInfo: t } = n,
            [s] = (0, ut.t7)(t.appid, mo);
          return s
            ? (0, e.jsxs)("span", {
                children: [
                  t.name,
                  " - (",
                  s.BIsComingSoon()
                    ? (0, o.we)("#SeasonPass_Customer_ComingSoon_Mark")
                    : (0, o.TW)(s.GetReleaseDateRTime()),
                  ")",
                ],
              })
            : (0, e.jsx)("span", { children: t.name });
        }
        function Ea(n) {
          const {
              mileStone: t,
              index: s,
              bCreate: r,
              bAppHasSteamChinaToolsEnabled: i,
              rgShippedMilestoneIDs: l,
            } = n,
            [u, m, h] = (0, Oe.uD)(),
            C = c.useMemo(() => (0, o.O9)(i), [i]),
            b = c.useMemo(
              () => (0, Fs.mn)(t?.milestone_desc || { english: "" }),
              [t?.milestone_desc],
            ),
            A = c.useMemo(
              () => ["seasonpass", "commitments", "" + s, "milestone_desc"],
              [s],
            ),
            P = (0, R.KC)(C, b, "app", r ? void 0 : A);
          return (
            (0, c.useEffect)(() => {
              if (u) {
                const G = (0, W.sfN)(P.strActiveLanguage, W.Bhc);
                fn.O.Get().SetCurEditLanguage(G);
              }
            }, [P.strActiveLanguage, u]),
            (0, Oe.hL)(fn.O.Get().GetCallback(), (G) => {
              P.setActiveLanguage((0, W.LgB)(G));
            }),
            (0, e.jsxs)("div", {
              className: (0, U.A)(gt().EditBtn, Us().BtnCtn),
              children: [
                u && (0, e.jsx)(ho, { hideModal: h, bCreate: r, ...n, ...P }),
                !r && P.rctHiddenInputs,
                (0, e.jsxs)(g.$n, {
                  onClick: m,
                  children: [
                    (0, o.we)(r ? "#SeasonPass_ItemNew" : "#Button_Edit"),
                    r &&
                      (0, e.jsx)(Js.o, {
                        tooltip: (0, o.we)("#SeasonPass_ItemNew_desc"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function ho(n) {
          const {
              hideModal: t,
              seasonPassID: s,
              mileStone: r,
              milestoneID: i,
              onSave: l,
              strActiveLanguage: u,
              rgLanguages: m,
              rctLanguageSelect: h,
              mapValues: C,
              bAppHasSteamChinaToolsEnabled: b,
              bCreate: A,
              rgShippedMilestoneIDs: P,
            } = n,
            G = (0, On.f1)(),
            [ue, ze] = (0, c.useState)(r?.internal_desc || ""),
            [he, Ee] = (0, c.useState)(r?.expected_delivery || G + 1440 * 60),
            [Pt, Wt] = (0, c.useState)(r?.display_format || "date_quarter"),
            [it, tn] = (0, c.useState)(r?.localized_title || { english: "" }),
            [Xa] = (0, c.useState)(r?.milestone_desc || {}),
            [$n, nl] = (0, c.useState)(r?.coming_soon_appid),
            [bs, al] = (0, c.useState)(!!r?.backfilled_release),
            Ya = (0, c.useRef)(void 0),
            [rl, ol] = (0, c.useState)(!1),
            il = (0, c.useMemo)(
              () =>
                b
                  ? [Hs.TU.k_ESteamRealmGlobal, Hs.TU.k_ESteamRealmChina]
                  : [Hs.TU.k_ESteamRealmGlobal],
              [b],
            ),
            ll = (0, o.we)(r ? "#SeasonPass_Update" : "#SeasonPass_Create"),
            Qa = P?.includes(i);
          return (0, e.jsx)(Ps.E, {
            active: !0,
            children: (0, e.jsx)(us.o0, {
              strTitle: ll,
              strDescription: (0, o.we)("#SeasonPass_Create_desc"),
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strOKButtonText: (0, o.we)(
                r ? "#Button_Update" : "#Button_Create",
              ),
              bOKDisabled: it.english.length < 3,
              onOK: () => {
                const Cs = {};
                C.forEach((qt, Xn) => {
                  Cs[Xn] = qt.Value;
                }),
                  l({
                    milestone_id: i,
                    internal_desc: ue,
                    expected_delivery: he,
                    submit_time: G,
                    submit_accountid: Ye.iA.accountid,
                    display_format: Pt,
                    localized_title: it,
                    milestone_desc: Cs,
                    milestone_image: void 0,
                    backfilled_release: bs,
                    coming_soon_appid: $n,
                  }),
                  A && C.forEach((qt, Xn) => C.get(Xn).Set("")),
                  t();
              },
              onCancel: () => {
                C.forEach((Cs, qt) => {
                  Xa?.[qt] ? C.get(qt).Set(Xa[qt]) : C.get(qt).Set("");
                }),
                  t();
              },
              children: (0, e.jsxs)("div", {
                className: gt().EditMilestoneDialog,
                children: [
                  (0, e.jsxs)("h3", {
                    children: [
                      (0, o.we)("#SeasonPass_CustomerTitle"),
                      (0, e.jsx)("span", {
                        className: "DialogInputRequirementLabel",
                        children: (0, o.we)("#Steamworks_Generic_Required"),
                      }),
                    ],
                  }),
                  (0, e.jsx)("p", {
                    children: (0, o.we)("#SeasonPass_CustomerSubtitle"),
                  }),
                  (0, e.jsx)(ja, {
                    text: it,
                    className: gt().MilestoneTitleField,
                    onChangeText: (Cs, qt) => {
                      (0, Fs.pV)(it, qt, Cs), tn({ ...it });
                    },
                    kvName: void 0,
                    rgRealms: il,
                  }),
                  (0, e.jsxs)("h3", {
                    children: [
                      (0, o.we)("#SeasonPass_CustomerDescription_Title"),
                      (0, e.jsx)("span", {
                        className: "DialogInputRequirementLabel",
                        children: (0, o.we)("#Steamworks_Generic_Required"),
                      }),
                    ],
                  }),
                  (0, e.jsx)("p", {
                    children: (0, o.we)(
                      "#SeasonPass_CustomerDescription_Subtitle",
                    ),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, o.we)(
                      "#SeasonPass_CustomerDescription_Images",
                    ),
                  }),
                  (0, e.jsx)(ye.default, {
                    language: u,
                    languages: m,
                    editorType: "milestone",
                    rctToolbarControls: h,
                    mapValues: C,
                    rctAboveEditor: (0, e.jsx)(oo, {
                      appid: r?.completed_appid || $n,
                    }),
                  }),
                  !Qa &&
                    (0, e.jsx)(Un, {
                      appid: $n,
                      setAppID: nl,
                      rgExcludeAppIDs: null,
                      seasonPassID: s,
                      strLocalizedLabel: (0, o.we)(
                        "#SeasonPass_CustomerComingSoonDLC",
                      ),
                      strLocalizedTooltip: (0, o.we)(
                        "#SeasonPass_CustomerComingSoonDLC_ttip",
                      ),
                    }),
                  !Qa &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsxs)("div", {
                          className: gt().DatePickerRow,
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsx)("h3", {
                                  children: (0, o.we)(
                                    bs
                                      ? "#SeasonPass_Backfill_date"
                                      : "#SeasonPass_Delivery",
                                  ),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, o.we)(
                                    bs
                                      ? "#SeasonPass_Backfill_date_ttip"
                                      : "#SeasonPass_Delivery_ttip",
                                  ),
                                }),
                                (0, e.jsx)(to.K, {
                                  nEarliestTime: bs ? 0 : G,
                                  fnGetTimeToUpdate: () => he,
                                  fnSetTimeToUpdate: Ee,
                                  fnIsValidDateTime: () =>
                                    bs ? he < G : G < he,
                                  strInvalidDateTimeLocalizedMsg: bs
                                    ? (0, o.we)(
                                        "#SeasonPass_BackFill_invalid_date",
                                      )
                                    : void 0,
                                }),
                              ],
                            }),
                            !bs &&
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, e.jsx)("h3", {
                                    children: (0, o.we)(
                                      "#SeasonPass_CustomerDisplay",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    children: (0, o.we)(
                                      "#SeasonPass_CustomerDisplay_ttip",
                                    ),
                                  }),
                                  (0, e.jsx)(Pa.Ll, {
                                    value: Pt,
                                    onChange: Wt,
                                    rgComingSoonOptionOverride: Pa.ut,
                                    rtSteamReleaseDate: he,
                                    bExpandedDisplay: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, e.jsx)(g.Yh, {
                          ref: Ya,
                          label: (0, o.we)("#SeasonPass_Backfill_check"),
                          tooltip: (0, o.we)("#SeasonPass_Backfill_check_ttip"),
                          onChange: (Cs) => {
                            let qt = !(!Cs && he < G);
                            ol(!qt),
                              qt ? al(Cs) : Ya.current.SetChecked(!0, !1);
                          },
                          checked: bs,
                        }),
                        rl &&
                          (0, e.jsx)("div", {
                            className: gn.WarningStylesWithIcon,
                            children: (0, o.we)("#SeasonPass_Backfill_warning"),
                          }),
                      ],
                    }),
                  (0, e.jsx)("br", {}),
                ],
              }),
            }),
          });
        }
        var go = a(11512),
          fo = a(92264);
        function _o(n) {
          const { milestoneID: t, rgPublishedMilestoneIDs: s, onDelete: r } = n,
            [i, l, u] = (0, Oe.uD)();
          return !s || s?.includes(t)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, U.A)(gt().EditBtn, Us().BtnCtn),
                children: [
                  (0, e.jsx)(Ps.E, {
                    active: i,
                    children: (0, e.jsx)(us.o0, {
                      strTitle: (0, o.we)("#Button_Delete"),
                      strDescription: (0, o.we)("#Dialog_AreYouSure"),
                      onOK: r,
                      bDestructiveWarning: !0,
                      bDisableBackgroundDismiss: !1,
                      closeModal: u,
                    }),
                  }),
                  (0, e.jsx)(g.$n, {
                    onClick: l,
                    children: (0, o.we)("#Button_Delete"),
                  }),
                ],
              });
        }
        var Ia = a(42415);
        function xo(n) {
          const {
              hideModal: t,
              inputMilestone: s,
              setCurrentMilestone: r,
              seasonPassID: i,
              rgExcludedAppIDs: l,
            } = n,
            u = !s.completed_appid,
            m = !s.completed_event_gid,
            [h, C] = (0, c.useState)(null),
            [b, A] = (0, c.useState)(null);
          return (0, e.jsx)(Ps.E, {
            active: !0,
            children: (0, e.jsxs)(us.o0, {
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strTitle: (0, o.we)("#SeasonPass_PostShipLink"),
              strDescription: (0, o.we)("#SeasonPass_PostShipLink_Desc"),
              closeModal: t,
              bOKDisabled: !h && !b,
              onOK: () => {
                const P = { ...s };
                u && h && (P.completed_appid = h),
                  m && b && (P.completed_event_gid = b),
                  r(P);
              },
              children: [
                u &&
                  (0, e.jsxs)("div", {
                    className: gt().OptionDetails,
                    children: [
                      (0, e.jsx)(g.JU, {
                        children: (0, o.we)("#SeasonPass_UpdateLaunch_dlc"),
                      }),
                      (0, e.jsx)(Un, {
                        appid: h,
                        setAppID: C,
                        rgExcludeAppIDs: l,
                        seasonPassID: i,
                        bOnlyShowReleaseDLC: !0,
                      }),
                    ],
                  }),
                m &&
                  (0, e.jsxs)("div", {
                    className: gt().OptionDetails,
                    children: [
                      (0, e.jsxs)(g.JU, {
                        children: [
                          (0, o.we)("#SeasonPass_UpdateLaunch_update"),
                          (0, e.jsx)(Js.o, {
                            tooltip: (0, o.we)("#SeasonPass_AddLaunchEvent"),
                          }),
                        ],
                      }),
                      (0, e.jsx)(Ia.q, {
                        appid: i.parentAppID,
                        selectedEventGID: b,
                        fnSetUpdateEvent: (P, G) => A(G),
                        bFilterOutDrafts: !0,
                      }),
                      !!Ye.iA.is_support &&
                        (0, e.jsx)("div", {
                          className: $e().ValveOnlyBackground,
                          children: (0, e.jsxs)("div", {
                            children: ["Selected GID: ", b],
                          }),
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
        const bo = { include_release: !0, include_included_items: !0 };
        function Co(n) {
          const {
              inputMilestone: t,
              setCurrentMilestone: s,
              seasonPassID: r,
              rgAllMilestones: i,
              index: l,
              rgShippedMilestoneIDs: u,
            } = n,
            [m] = (0, ut.t7)(t.completed_appid, bo),
            [h, C, b] = (0, Oe.uD)(),
            [A, P, G] = (0, Oe.uD)(),
            ue = !!u.includes(t.milestone_id),
            ze = !!(ue && (!t.completed_appid || !t.completed_event_gid));
          return (0, e.jsxs)("div", {
            className: gt().StatusRow,
            children: [
              !!ue &&
                (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: gt().CheckMark,
                    children: "\u2713",
                  }),
                }),
              !!t.completed_appid &&
                (0, e.jsxs)("a", {
                  href: `${te.TS.STORE_BASE_URL}app/${t.completed_appid}`,
                  target: "_blank",
                  children: [m?.GetName() || "", " (", t.completed_appid, ")"],
                }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${l}][completed_appid]`,
                value: t.completed_appid ? t.completed_appid : "",
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${l}][completed_event_gid]`,
                value: t.completed_event_gid ? "" + t.completed_event_gid : "",
              }),
              !!t.completed_event_gid &&
                (0, e.jsx)("a", {
                  href: `${te.TS.STORE_BASE_URL}news/app/${r.parentAppID}/view/${t.completed_event_gid}`,
                  target: "_blank",
                  children: (0, o.we)("#SeasonPass_ViewLaunchEvent"),
                }),
              !ue &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    h &&
                      (0, e.jsx)(Ao, {
                        inputMilestone: t,
                        setCurrentMilestone: s,
                        rgExcludedAppIDs: Da(i, r, t.milestone_id),
                        seasonPassID: r,
                        hideModal: b,
                      }),
                    (0, e.jsx)(g.$n, {
                      onClick: C,
                      children: (0, o.we)(
                        t.completed_appid ||
                          t.completed_event_gid ||
                          t.backfilled_release
                          ? "#SeasonPass_UpdateLaunch_Edit"
                          : "#SeasonPass_UpdateLaunch",
                      ),
                    }),
                  ],
                }),
              !!ze &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    A &&
                      (0, e.jsx)(xo, {
                        setCurrentMilestone: s,
                        inputMilestone: t,
                        hideModal: G,
                        rgExcludedAppIDs: Da(i, r, t.milestone_id),
                        seasonPassID: r,
                      }),
                    (0, e.jsx)(k.Gq, {
                      toolTipContent: (0, o.we)(
                        "#SeasonPass_PostShipLink_Button_ttip",
                      ),
                      children: (0, e.jsxs)(g.$n, {
                        onClick: P,
                        children: [
                          (0, o.we)("#SeasonPass_PostShipLink_Button"),
                          (0, e.jsx)(Js.o, { tooltip: void 0 }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function Da(n, t, s) {
          const r = new Array();
          return (
            r.push(t.dlcAppID),
            n.forEach((i) => {
              i.milestone_id != s &&
                i.completed_appid &&
                r.push(i.completed_appid);
            }),
            r
          );
        }
        function Ao(n) {
          const {
              hideModal: t,
              inputMilestone: s,
              setCurrentMilestone: r,
              seasonPassID: i,
              rgExcludedAppIDs: l,
            } = n,
            [u, m] = (0, c.useState)(s.completed_appid),
            [h, C] = (0, c.useState)(s.completed_event_gid),
            [b, A] = (0, c.useState)(() => !!s.completed_appid),
            [P, G] = (0, c.useState)(!!s.completed_event_gid);
          return (0, e.jsx)(Ps.E, {
            active: !0,
            children: (0, e.jsx)(us.o0, {
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strTitle: (0, o.PP)(
                "#SeasonPass_UpdateLaunch_title",
                s.localized_title?.[te.TS.LANGUAGE] ||
                  s.localized_title?.english,
              ),
              strDescription: (0, o.we)(
                s.backfilled_release
                  ? "#SeasonPass_UpdateLaunch_desc_backfill"
                  : "#SeasonPass_UpdateLaunch_desc",
              ),
              closeModal: t,
              bOKDisabled: b && !u,
              onOK: () => {
                r({ ...s, completed_appid: u, completed_event_gid: h });
              },
              children: (0, e.jsxs)("div", {
                className: (0, U.A)(gt().ShippingTheMilestone),
                children: [
                  (0, e.jsx)("div", {
                    className: (0, U.A)(gt().ShippingType),
                    children: (0, e.jsxs)(g.G5, {
                      children: [
                        (0, e.jsx)(g.lr, {
                          children: (0, o.we)(
                            "#SeasonPass_UpdateLaunch_radio_label",
                          ),
                        }),
                        (0, e.jsx)(g.Od, {
                          checked: !b,
                          onChange: (ue) => ue && A(!1),
                          label: (0, o.we)(
                            "#SeasonPass_UpdateLaunch_radio_label_1",
                          ),
                        }),
                        (0, e.jsx)(g.Od, {
                          checked: b,
                          onChange: (ue) => ue && A(!0),
                          label: (0, o.we)(
                            "#SeasonPass_UpdateLaunch_radio_label_2",
                          ),
                          tooltip: (0, o.we)(
                            "#SeasonPass_UpdateLaunch_radio_label_2_ttip",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)("br", {}),
                  !!(!b || P) &&
                    (0, e.jsxs)("div", {
                      className: gt().OptionDetails,
                      children: [
                        (0, e.jsxs)(g.JU, {
                          children: [
                            (0, o.we)("#SeasonPass_UpdateLaunch_update"),
                            (0, e.jsx)(Js.o, {
                              tooltip: (0, o.we)("#SeasonPass_AddLaunchEvent"),
                            }),
                          ],
                        }),
                        (0, e.jsx)(Ia.q, {
                          appid: i.parentAppID,
                          selectedEventGID: h,
                          fnSetUpdateEvent: (ue, ze) => C(ze),
                          bFilterOutDrafts: !0,
                        }),
                        !!Ye.iA.is_support &&
                          (0, e.jsx)("div", {
                            className: $e().ValveOnlyBackground,
                            children: (0, e.jsxs)("div", {
                              children: ["Selected GID: ", h],
                            }),
                          }),
                      ],
                    }),
                  b &&
                    (0, e.jsxs)("div", {
                      className: gt().OptionDetails,
                      children: [
                        (0, e.jsx)(g.JU, {
                          children: (0, o.we)("#SeasonPass_UpdateLaunch_dlc"),
                        }),
                        (0, e.jsx)(Un, {
                          appid: u,
                          setAppID: m,
                          rgExcludeAppIDs: l,
                          seasonPassID: i,
                          bOnlyShowReleaseDLC: !0,
                          fnResetAppID: () => {
                            A(!1), m(void 0);
                          },
                        }),
                      ],
                    }),
                  b &&
                    !P &&
                    (0, e.jsx)("div", {
                      className: gt().OptionDetails,
                      children: (0, e.jsx)(g.Yh, {
                        label: (0, o.we)("#SeaosnPass_OptionalEvents"),
                        checked: P,
                        onChange: (ue) => G(ue),
                      }),
                    }),
                ],
              }),
            }),
          });
        }
        function So(n) {
          const {
            seasonPassData: t,
            seasonPassID: s,
            rgPublishedMilestoneIDs: r,
            bAppHasSteamChinaToolsEnabled: i,
            fnDeleteMilestoneByID: l,
            rgShippedMilestoneIDs: u,
          } = n;
          return (0, e.jsxs)("div", {
            className: gt().MilestoneTable,
            children: [
              (0, e.jsx)(g.JU, {
                children: (0, o.we)("#SeasonPass_Milestone_table"),
              }),
              (0, e.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", {
                          children: (0, o.we)("#SeasonPass_Milestone_Title"),
                        }),
                        (0, e.jsx)("th", {}),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: t?.commitments?.map((m, h) =>
                      (0, e.jsx)(
                        vo,
                        {
                          inputMilestone: m,
                          index: h,
                          seasonPassID: s,
                          rgAllMilestones: t.commitments,
                          bAppHasSteamChinaToolsEnabled: i,
                          rgPublishedMilestoneIDs: r,
                          rgShippedMilestoneIDs: u,
                          fnDeleteMilestone: () => l(m.milestone_id),
                        },
                        "row" + m.milestone_id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Ta(n) {
          const { milestone: t, index: s } = n;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${s}][milestone_id]`,
                value: t ? t.milestone_id : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${s}][internal_desc]`,
                value: t ? t.internal_desc : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${s}][submit_time]`,
                value: t ? t.submit_time : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${s}][submit_accountid]`,
                value: t ? t.submit_accountid : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${s}][expected_delivery]`,
                value: t ? t.expected_delivery : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${s}][display_format]`,
                value: t ? t.display_format : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${s}][backfilled_release]`,
                value: t ? String(!!t.backfilled_release) : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${s}][coming_soon_appid]`,
                value: t ? t.coming_soon_appid : void 0,
              }),
              !t &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `app[seasonpass][commitments][${s}][localized_title]`,
                      value: void 0,
                    }),
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `app[seasonpass][commitments][${s}][milestone_desc]`,
                      value: void 0,
                    }),
                  ],
                }),
            ],
          });
        }
        function vo(n) {
          const {
              inputMilestone: t,
              index: s,
              seasonPassID: r,
              rgAllMilestones: i,
              bAppHasSteamChinaToolsEnabled: l,
              rgPublishedMilestoneIDs: u,
              fnDeleteMilestone: m,
              rgShippedMilestoneIDs: h,
            } = n,
            [C, b] = (0, c.useState)(t),
            A = (0, On.sB)(),
            P = !!h.includes(C.milestone_id),
            G = !P && C.expected_delivery < A,
            ue = (0, c.useMemo)(
              () =>
                l
                  ? [Hs.TU.k_ESteamRealmGlobal, Hs.TU.k_ESteamRealmChina]
                  : [Hs.TU.k_ESteamRealmGlobal],
              [l],
            ),
            ze = (0, fn.E)(),
            he = o.A0.GetELanguageFallback(ze);
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: (0, U.A)({
                    [gt().TitlePreviewRow]: !0,
                    [gt().Shipped]: P,
                  }),
                  children: [
                    (0, e.jsx)(Ta, { milestone: C, index: s }),
                    (0, e.jsx)(ja, {
                      text: C.localized_title,
                      className: gt().Title,
                      onChangeText: null,
                      kvName: `app[seasonpass][commitments][${s}][localized_title]`,
                      bOnlyDisplay: !0,
                      placeholderToken: (0, o.we)(
                        "#SeasonPass_NoLang_Fallback",
                        (0, o.we)("#Language_" + (0, W.LgB)(ze)),
                        (0, o.we)("#Language_" + (0, W.LgB)(he)),
                      ),
                      rgRealms: ue,
                    }),
                    P
                      ? (0, e.jsx)("div", {
                          className: (0, U.A)(gt().Date, gt().Released),
                          children: (0, o.we)("#SeasonPass_Released"),
                        })
                      : (0, e.jsx)(e.Fragment, {
                          children: C?.backfilled_release
                            ? (0, e.jsx)("div", {
                                className: gt().PublishReminder,
                                children: (0, o.we)(
                                  "#SeasonPass_Backfill_require_publish",
                                ),
                              })
                            : (0, e.jsxs)("div", {
                                className: (0, U.A)(gt().Date),
                                children: [
                                  (0, e.jsxs)(k.he, {
                                    toolTipContent:
                                      (0, o.we)("#SeasonPass_Delivery") +
                                      ": " +
                                      (0, o.TW)(C.expected_delivery) +
                                      " @ " +
                                      (0, fo.KC)(C.expected_delivery),
                                    children: [
                                      (0, o.we)("#SeasonPass_Coming"),
                                      (0, e.jsx)("br", {}),
                                      (0, go.M)(
                                        C.display_format,
                                        C.expected_delivery,
                                        null,
                                        !0,
                                      ),
                                    ],
                                  }),
                                  G &&
                                    (0, e.jsx)("div", {
                                      className: (0, U.A)(
                                        G ? ma().ErrorStylesWithIcon : void 0,
                                      ),
                                      children: (0, o.we)(
                                        "#SeasonPass_PassDueNote",
                                      ),
                                    }),
                                ],
                              }),
                        }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: gt().BtnCtn,
                  children: [
                    (0, e.jsx)(Co, {
                      inputMilestone: C,
                      setCurrentMilestone: b,
                      seasonPassID: r,
                      rgAllMilestones: i,
                      index: s,
                      rgShippedMilestoneIDs: h,
                    }),
                    (0, e.jsx)(Ea, {
                      milestoneID: C.milestone_id,
                      mileStone: C,
                      onSave: b,
                      index: s,
                      bAppHasSteamChinaToolsEnabled: l,
                      rgShippedMilestoneIDs: h,
                      seasonPassID: r,
                    }),
                    (0, e.jsx)(_o, {
                      milestoneID: C.milestone_id,
                      onDelete: m,
                      rgPublishedMilestoneIDs: u,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function yo(n) {
          const {
              seasonPassID: t,
              seasonPassData: s,
              rgPublishedMilestoneIDs: r,
              rgShippedMilestoneIDs: i,
            } = n,
            [l, u] = (0, c.useState)(s || { commitments: [] }),
            { bAppHasSteamChinaToolsEnabled: m } = (0, Se.aJ)(),
            [h, C] = (0, c.useState)(s?.commitments?.length || 0),
            b = (0, c.useMemo)(() => {
              let G = 0;
              do G = Math.floor(Math.random() * 9e4) + 1e4;
              while (
                l?.commitments?.findIndex((ue) => ue.milestone_id == G) >= 0
              );
              return G;
            }, [l]),
            A = (0, c.useCallback)(
              (G) =>
                !!l.commitments?.some(
                  (ue) =>
                    (0, Fs.nU)(ue.localized_title, G) ||
                    (0, Fs.nU)(ue.milestone_desc, G),
                ),
              [l.commitments],
            ),
            P = [];
          if (h > l.commitments?.length)
            for (let G = l.commitments?.length; G < h; G++)
              P.push((0, e.jsx)(Ta, { index: G, milestone: null }, G));
          return (0, e.jsxs)("div", {
            className: Us().EditorCtn,
            children: [
              (0, e.jsx)(ya.yk, { fnLangHasData: A }),
              (0, e.jsx)(jo, {
                seasonPassID: t,
                nNextMilestoneID: b,
                index: l?.commitments?.length || 0,
                fnAppendSeasonPass: (G) => {
                  u({ ...l, commitments: [...(l.commitments || []), G] }),
                    C(
                      Math.max(h, l.commitments ? l.commitments.length + 1 : 1),
                    );
                },
                bAppHasSteamChinaToolsEnabled: m,
                rgShippedMilestoneIDs: i,
              }),
              (0, e.jsx)(Po, { seasonPassData: l, rgShippedMilestoneIDs: i }),
              (0, e.jsx)(So, {
                seasonPassID: t,
                seasonPassData: l,
                bAppHasSteamChinaToolsEnabled: m,
                rgPublishedMilestoneIDs: r,
                rgShippedMilestoneIDs: i,
                fnDeleteMilestoneByID: (G) => {
                  const ue = l.commitments.findIndex(
                    (ze) => ze.milestone_id == G,
                  );
                  ue >= 0 &&
                    (l.commitments.splice(ue, 1),
                    u({ ...l, commitments: [...l.commitments] }));
                },
              }),
              P,
              !!Ye.iA.is_support &&
                (0, e.jsx)("div", {
                  className: $e().ValveOnlyBackground,
                  children: (0, e.jsx)(g.$n, {
                    onClick: (G) =>
                      (0, Ts.pg)(
                        (0, e.jsx)(us.o0, {
                          strTitle: "Clear?",
                          strDescription: "Are you sure?",
                          onOK: () => u({ commitments: [] }),
                        }),
                        (0, ws.uX)(G),
                      ),
                    children: "(VO) Clear All Milestones (in memory)",
                  }),
                }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
            ],
          });
        }
        function jo(n) {
          const {
            seasonPassID: t,
            fnAppendSeasonPass: s,
            nNextMilestoneID: r,
            index: i,
            bAppHasSteamChinaToolsEnabled: l,
            rgShippedMilestoneIDs: u,
          } = n;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, U.A)("instructions"),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, U.A)("title2"),
                    children: [
                      (0, o.we)("#SeasonPass_Title"),
                      " ",
                      (0, e.jsx)("span", {
                        className: "small",
                        children: (0, e.jsx)("a", {
                          href: `${te.TS.PARTNER_BASE_URL}doc/store/seasonpass`,
                          target: "_blank",
                          children: (0, o.we)("#AssetRequest_General_SeeDocs"),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("br", { style: { clear: "left" } }),
                  (0, e.jsx)("div", { className: "grayRule", children: " " }),
                  (0, e.jsxs)("div", {
                    className: "instructions_table",
                    children: [
                      (0, e.jsxs)("div", {
                        className: "instructions_table_row",
                        children: [
                          (0, e.jsx)("div", {
                            className: "instructions_table_cell left",
                            children: (0, e.jsx)("strong", {
                              children: (0, o.we)(
                                "#Appmgmg_Generic_Title_Overview",
                              ),
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: "instructions_table_cell",
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, o.we)("#SeasonPass_Desc"),
                              }),
                              (0, e.jsx)("p", {
                                children: (0, o.we)("#SeasonPass_Desc2"),
                              }),
                              (0, e.jsx)("p", {
                                children: (0, o.we)("#SeasonPass_Desc3"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: "instructions_table_row",
                        children: [
                          (0, e.jsx)("div", {
                            className: "instructions_table_cell left",
                            children: (0, e.jsx)("strong", {
                              children: (0, o.we)(
                                "#Appmgmg_Generic_Title_Releasing",
                              ),
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: "instructions_table_cell",
                            children: (0, e.jsxs)("p", {
                              children: [
                                " ",
                                (0, o.oW)(
                                  "#SeasonPass_Desc_Releasing",
                                  (0, e.jsx)("a", {
                                    href: `${te.TS.PARTNER_BASE_URL}doc/store/seasonpass#release`,
                                    target: "_blank",
                                  }),
                                ),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: Us().CreationButtonRow,
                children: [
                  (0, e.jsx)("span", {
                    className: Us().LangBox,
                    children: (0, e.jsx)(ya.iN, {}),
                  }),
                  (0, e.jsx)("div", {
                    className: Us().MilestoneButton,
                    children: (0, e.jsx)(Ea, {
                      onSave: s,
                      milestoneID: r,
                      index: i,
                      bCreate: !0,
                      bAppHasSteamChinaToolsEnabled: l,
                      rgShippedMilestoneIDs: u,
                      seasonPassID: t,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Po(n) {
          const { seasonPassData: t, rgShippedMilestoneIDs: s } = n,
            r = (0, On.sB)(),
            [i, l, u] = (0, c.useMemo)(() => {
              const m =
                  t?.commitments?.filter(
                    (b) => !b.completed_time && !s.includes(b.milestone_id),
                  ) || [],
                h = m.filter(
                  (b) =>
                    b.expected_delivery < r + 10080 * 60 &&
                    !b.backfilled_release,
                ),
                C = m.filter(
                  (b) => b.expected_delivery < r && !b.backfilled_release,
                );
              return [m.length > 0, h.length > 0, C.length > 0];
            }, [t, r, s]);
          return i
            ? (0, e.jsx)(e.Fragment, {
                children:
                  u &&
                  (0, e.jsx)("div", {
                    className: ma().ErrorStylesWithIcon,
                    children: (0, o.we)("#SeasonPass_PassDue"),
                  }),
              })
            : null;
        }
        var Ws = a(47534),
          Wn = a(24660);
        function Eo(n) {
          const { rgSocialMedia: t } = n,
            [s, r] = c.useState(t ? [...t] : []),
            [i, l] = c.useState(s.length),
            u = c.useCallback(
              (m) => {
                m.length > i && l(m.length), r(m);
              },
              [i],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(Io, { ...n, rgSocialMediaItems: s, fnSetItems: u }),
              (0, e.jsx)(ko, { items: s, maxSeen: i }),
            ],
          });
        }
        function Io(n) {
          const {
              rgSocialMediaItems: t,
              fnSetItems: s,
              rgSupportedSocialMediaTypes: r,
              rgValidationData: i,
            } = n,
            l = c.useMemo(
              () =>
                r
                  .filter(
                    (b) =>
                      t.findIndex((A) => A.type === b.type) === -1 ||
                      b.type === "qq" ||
                      b.type === "qqlink",
                  )
                  .map((b) => ({
                    label: (0, o.we)(`#StoreAdmin_SocialMedia_Type_${b.type}`),
                    data: b.type,
                  }))
                  .sort((b, A) => (b.label < A.label ? -1 : 1)),
              [r, t],
            ),
            u = (b) => {
              let A = t.slice();
              A.splice(b, 1), s(A);
            },
            m = (b, A) => {
              let P = t.slice();
              (0, Is.yY)(P, b, A), s(P);
            },
            h = (b, A) => {
              const P = t.map((G, ue) => (ue === b ? { ...G, link: A } : G));
              s(P);
            },
            C = (b) => {
              let A = t.slice();
              A.push({ type: b, link: "" }), s(A);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Do, { options: l, onAddLink: C }),
              (0, e.jsx)(Nt.A, {
                items: t,
                onDelete: u,
                onMove: m,
                render: (b, A) =>
                  (0, e.jsx)(
                    wo,
                    {
                      item: b,
                      onUpdateLink: (P) => h(A, P),
                      validationData: i[b.type],
                    },
                    b.type,
                  ),
              }),
            ],
          });
        }
        function Do(n) {
          const { options: t, onAddLink: s } = n,
            r = (i) => {
              const l = i.data;
              l && s(l);
            };
          return (0, e.jsx)("div", {
            className: Ws.AddLinkDropDown,
            children: (0, e.jsx)(g.ZU, {
              strDefaultLabel: (0, o.we)("#StoreAdmin_SocialMedia_Add"),
              controlled: !0,
              rgOptions: t,
              onChange: r,
              selectedOption: null,
            }),
          });
        }
        function To(n, t) {
          let s = !0,
            r = "";
          return (
            t.prefix
              ? (n.type === "mastodon"
                  ? (r = (0, o.we)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      t.prefix.join(", "),
                    ))
                  : (r = (0, o.we)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      t.prefix.join(", "),
                    )),
                n.link &&
                  ((s = !1),
                  t.prefix.forEach((i) => {
                    n.link.startsWith(i) && (s = !0);
                  })))
              : t.number
                ? ((r = (0, o.we)("#StoreAdmin_SocialMedia_ValidationNumber")),
                  n.link && (s = /^\d+$/.test(n.link)))
                : t.text
                  ? (r = (0, o.we)("#StoreAdmin_SocialMedia_ValidationText"))
                  : t.regex &&
                    n.type === "tumblr" &&
                    (r = (0, o.we)("#StoreAdmin_SocialMedia_ValidationTumblr")),
            { bValid: s, strTooltip: r }
          );
        }
        function wo(n) {
          const { item: t, onUpdateLink: s, validationData: r } = n;
          let i;
          r.number
            ? (i = (0, o.we)("#StoreAdmin_SocialMedia_EnterNumber"))
            : r.text
              ? (i = (0, o.we)("#StoreAdmin_SocialMedia_EnterName"))
              : (i = (0, o.we)("#StoreAdmin_SocialMedia_EnterLink"));
          const { bValid: l, strTooltip: u } = To(t, r);
          return (0, e.jsxs)("div", {
            className: Ws.SocialMediaRow,
            children: [
              (0, e.jsx)("div", {
                className: Ws.SocialMediaType,
                children: (0, o.we)(`#StoreAdmin_SocialMedia_Type_${t.type}`),
              }),
              (0, e.jsx)(Wn.BA, {
                className: Ws.SocialMediaLink,
                type: "text",
                value: t.link,
                placeholder: i,
                onChange: (m) => s(m.target.value),
              }),
              u &&
                (0, e.jsx)(k.he, {
                  className: Ws.SocialMediaTooltip,
                  toolTipContent: u,
                  children: "(?)",
                }),
              !l &&
                (0, e.jsx)("div", {
                  className: Ws.ValidationError,
                  children: u,
                }),
            ],
          });
        }
        function Mo(n, t) {
          let s = Array(),
            r = 0;
          for (
            n.forEach((i) => {
              i.link &&
                (s.push(
                  c.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${r}][type]`,
                    value: i.type,
                  }),
                ),
                s.push(
                  c.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${r}][link]`,
                    value: i.link,
                  }),
                ),
                r++);
            });
            r < t;
          )
            s.push(
              c.createElement("input", {
                type: "hidden",
                name: `app[content][ordered_social_links][${r}]`,
                value: "",
              }),
            ),
              r++;
          return (
            [
              "discord_server",
              "youtube",
              "facebook",
              "twitter",
              "twitch",
            ].forEach((i) => {
              s.push(
                c.createElement("input", {
                  type: "hidden",
                  name: `app[content][links][${i}]`,
                  value: "",
                }),
              );
            }),
            s
          );
        }
        function ko(n) {
          const { items: t, maxSeen: s } = n,
            r = c.useMemo(() => Mo(t, s), [t, s]);
          return (0, e.jsxs)(e.Fragment, { children: [...r] });
        }
        var Zt = a(23256);
        function Bo(n) {
          const {
              rgAntiCheatData: t,
              rgSupportedAntiCheatOptions: s,
              rgLanguages: r,
              rgSupportedAntiCheatBootProtections: i,
            } = n,
            l = c.useMemo(() => new Map(r), [r]),
            u = (0, c.useMemo)(
              () =>
                Object.entries(s).map(([Ee, Pt]) => ({
                  label: (0, o.we)(`#StoreAdmin_AntiCheat_Type_${Ee}`),
                  data: Ee,
                })),
              [s],
            ),
            m = (Ee) => {
              Ee.data &&
                (C(Ee.data),
                Ee.data !== "none" &&
                  Ee.data !== "unspecified" &&
                  Ee.data !== "other" &&
                  A(s[Ee.data].kernel));
            },
            [h, C] = (0, c.useState)(t.type),
            [b, A] = (0, c.useState)(t.kernel),
            [P, G] = (0, c.useState)(t.uninstall),
            [ue, ze] = (0, c.useState)(t.bootprotect),
            he = h !== "none" && h !== "unspecified";
          return (0, e.jsxs)("div", {
            className: "section",
            id: "anti_cheat",
            children: [
              (0, e.jsx)("h2", {
                children: (0, o.we)("#StoreAdmin_AntiCheat_Header"),
              }),
              (0, e.jsx)("div", { className: "grayRule" }),
              (0, e.jsx)("p", {
                children: (0, o.we)("#StoreAdmin_AntiCheat_Description"),
              }),
              (0, e.jsx)("p", {
                children: (0, o.we)("#StoreAdmin_AntiCheat_Description2"),
              }),
              (0, e.jsx)(Zs, {
                label: (0, o.we)("#StoreAdmin_AntiCheat_ServiceLabel"),
                children: (0, e.jsx)(Ro, {
                  options: u,
                  selectedOption: h,
                  onSelectionChanged: m,
                }),
              }),
              h === "other" &&
                (0, e.jsx)(Oo, { values: t.otherNameLoc, mapLanguages: l }),
              he && (0, e.jsx)(Fo, { checked: b, onChange: A }),
              he && b && (0, e.jsx)(Ho, { checked: P, onChange: G }),
              he &&
                (0, e.jsx)(Wo, {
                  supported: i,
                  currentValue: ue,
                  onChange: ze,
                }),
              (0, e.jsx)(zo, {
                selectedOption: h !== "unspecified" ? h : "",
                kernelMode: he ? b : !1,
                uninstallsCompletely: he && b ? P : !1,
                bootProtection: ue != "none" ? ue : "",
              }),
            ],
          });
        }
        function Zs(n) {
          const { label: t, children: s } = n;
          return (0, e.jsxs)("div", {
            className: "formrow flexRow",
            children: [
              t
                ? (0, e.jsx)("div", { className: "formlabel", children: t })
                : (0, e.jsx)("div", {
                    className: "formlabel",
                    children: "\xA0",
                  }),
              (0, e.jsx)("div", {
                className: "formdata settingsBlock",
                children: (0, e.jsx)("div", { className: "left", children: s }),
              }),
            ],
          });
        }
        function Lo(n) {
          const { children: t } = n;
          return (0, e.jsx)("div", {
            className: Zt.FormRowIndent,
            children: t,
          });
        }
        function No(n) {
          const { children: t } = n;
          return (0, e.jsx)("div", {
            className: Zt.FormRowHeader,
            children: t,
          });
        }
        function Ro(n) {
          const { options: t, selectedOption: s, onSelectionChanged: r } = n;
          return (0, e.jsx)("div", {
            className: Zt.AntiCheatDropDown,
            children: (0, e.jsx)(g.ZU, {
              controlled: !0,
              rgOptions: t,
              onChange: r,
              selectedOption: s,
            }),
          });
        }
        function Oo(n) {
          const { values: t, mapLanguages: s } = n,
            {
              strActiveLanguage: r,
              mapValues: i,
              rctLanguageSelect: l,
              rctHiddenInputs: u,
            } = (0, R.KC)(s, t, "app", ["game", "3panticheat", "othernameloc"]),
            m = i.get(r),
            h = (0, Oe.gc)(m);
          return (0, e.jsxs)(Zs, {
            children: [
              (0, e.jsx)("div", {
                className: Zt.LanguageSelector,
                children: l,
              }),
              (0, e.jsx)(g.pd, {
                className: Zt.OtherSerivceName,
                type: "text",
                value: h,
                placeholder: "Enter the service name",
                onChange: (C) => m.Set(C.target.value),
                maxLength: 256,
              }),
              u,
            ],
          });
        }
        function Fo(n) {
          const { checked: t, onChange: s } = n;
          return (0, e.jsxs)(Zs, {
            children: [
              (0, e.jsx)(g.Yh, {
                className: (0, U.A)(Zt.KernelMode, Zt.CheckboxLabel),
                label: (0, o.we)("#StoreAdmin_AntiCheat_KernelModeLabel"),
                checked: t,
                onChange: s,
              }),
              (0, e.jsx)("div", {
                className: Zt.CheckboxDescription,
                children: (0, o.we)(
                  "#StoreAdmin_AntiCheat_KernelModelDescription_Other",
                ),
              }),
            ],
          });
        }
        function Ho(n) {
          const { checked: t, onChange: s } = n;
          return (0, e.jsxs)(Zs, {
            children: [
              (0, e.jsx)(g.Yh, {
                className: Zt.CheckboxLabel,
                label: (0, o.we)(
                  "#StoreAdmin_AntiCheat_UninstallCompletelyLabel",
                ),
                checked: t,
                onChange: s,
              }),
              (0, e.jsx)("div", {
                className: Zt.CheckboxDescription,
                children: (0, o.we)(
                  "#StoreAdmin_AntiCheat_UninstallCompletelyDescription",
                ),
              }),
            ],
          });
        }
        function Uo(n) {
          return n == "none"
            ? (0, o.we)("#StoreAdmin_AntiCheat_BootProtection_None")
            : n == "secureboot_tpm2"
              ? (0, o.we)("#StoreAdmin_AntiCheat_BootProtection_SecureBootTPM2")
              : n;
        }
        function Wo(n) {
          const { supported: t, currentValue: s, onChange: r } = n;
          if (t.length == 0) return null;
          let i = t.map((m) => ({ label: Uo(m), data: m })),
            l = t.find((m) => m == s) ? s : t[0];
          const u = (m) => {
            m.data && r(m.data);
          };
          return (0, e.jsx)(Zs, {
            children: (0, e.jsxs)(Lo, {
              children: [
                (0, e.jsxs)(No, {
                  children: [
                    (0, o.we)("#StoreAdmin_AntiCheat_BootProtectionLabel"),
                    " ",
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Zt.FormRowDescription,
                  children: (0, o.we)(
                    "#StoreAdmin_AntiCheat_BootProtectionDescription",
                  ),
                }),
                (0, e.jsx)("div", {
                  className: Zt.AntiCheatDropDown,
                  children: (0, e.jsx)(g.ZU, {
                    controlled: !0,
                    rgOptions: i,
                    onChange: u,
                    selectedOption: l,
                  }),
                }),
              ],
            }),
          });
        }
        function Go(n, t, s, r) {
          let i = Array();
          return (
            i.push(
              c.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][type]",
                value: n,
              }),
            ),
            i.push(
              c.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][kernel]",
                value: t ? "1" : "",
              }),
            ),
            i.push(
              c.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][uninst]",
                value: s ? "1" : "",
              }),
            ),
            i.push(
              c.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][othername]",
                value: "",
              }),
            ),
            i.push(
              c.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][bootprotect]",
                value: r,
              }),
            ),
            i
          );
        }
        function zo(n) {
          const {
              selectedOption: t,
              kernelMode: s,
              uninstallsCompletely: r,
              bootProtection: i,
            } = n,
            l = c.useMemo(() => Go(t, s, r, i), [t, s, r, i]);
          return (0, e.jsxs)(e.Fragment, { children: [...l] });
        }
        var rs = a(30041),
          Gn = a(22633);
        function Vo(n) {
          const [t, s] = c.useState(n),
            r = (h, C) => {
              let b = [...t];
              (b[h] = C), s(b);
            },
            i = (h) => {
              let C = [...t];
              C.splice(h, 1), s(C);
            };
          return {
            items: t,
            setItem: r,
            deleteItem: i,
            appendItem: (h) => {
              s(t.concat([h]));
            },
            moveItem: (h, C) => {
              let b = [...t],
                A = t[h];
              h < C
                ? (b.splice(C + 1, 0, A), b.splice(h, 1))
                : (b.splice(h, 1), b.splice(C, 0, A)),
                s(b);
            },
            getState: (h) => ({
              item: t[h],
              setItem: (C) => r(h, C),
              deleteItem: () => i(h),
            }),
          };
        }
        function Ko(n) {
          const [t, s] = c.useState(!1);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Gn.mt, {
                active: t,
                onDismiss: () => s(!1),
                children: (0, e.jsx)(Xo, {
                  originalItems: n.rgItems,
                  onDismiss: () => s(!1),
                  packageid: n.packageid,
                }),
              }),
              (0, e.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      className: "tr heading",
                      children: [
                        (0, e.jsx)("th", {
                          children: (0, o.we)(
                            "#StoreAdmin_NonAppContent_TableHeader_Name",
                          ),
                        }),
                        (0, e.jsx)("th", {
                          children: (0, o.we)(
                            "#StoreAdmin_NonAppContent_TableHeader_Visible",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsxs)("tbody", {
                    children: [
                      n.rgItems.length === 0 &&
                        (0, e.jsx)("tr", {
                          children: (0, e.jsx)("td", {
                            colSpan: 2,
                            children: (0, o.we)(
                              "#StoreAdmin_NonAppContent_NoNonAppItems",
                            ),
                          }),
                        }),
                      n.rgItems.length > 0 &&
                        n.rgItems.map((r, i) =>
                          (0, e.jsx)($o, { item: r, language: n.language }, i),
                        ),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)("button", {
                  className: (0, U.A)("btnv6_blue_hoverfade btn_small"),
                  onClick: () => s(!0),
                  children: (0, e.jsx)("span", {
                    children: (0, o.we)("#StoreAdmin_NonAppContent_Edit"),
                  }),
                }),
              }),
            ],
          });
        }
        function $o(n) {
          const { item: t, language: s } = n;
          let r = (0, o.we)("#StoreAdmin_NonAppContent_MissingLanguage");
          t.localized_title &&
            (r =
              t.localized_title[s] ??
              t.localized_title.english ??
              (0, o.we)("#StoreAdmin_NonAppContent_MissingLanguage"));
          let i = (0, o.we)("#StoreAdmin_NonAppContent_MissingLanguage");
          return (
            t.localized_description &&
              (i =
                t.localized_description[s] ??
                t.localized_description.english ??
                (0, o.we)("#StoreAdmin_NonAppContent_MissingLanguage")),
            (0, e.jsxs)("tr", {
              className: "tr highlightHover",
              children: [
                (0, e.jsx)("td", { className: "td", children: r }),
                (0, e.jsx)("td", {
                  className: "td",
                  children: (0, o.we)(
                    t.visible === "1"
                      ? "#StoreAdmin_NonAppContent_Editor_Yes"
                      : "#StoreAdmin_NonAppContent_Editor_No",
                  ),
                }),
              ],
            })
          );
        }
        function Xo(n) {
          const { originalItems: t, packageid: s, onDismiss: r } = n,
            i = [];
          for (const ze of t)
            i.push({
              localized_title: ze.localized_title ?? {},
              localized_description: ze.localized_description ?? {},
              visible: ze.visible,
            });
          const l = Vo(i),
            [u, m] = c.useState("editor"),
            [h, C] = c.useState(null),
            b = () => {
              l.appendItem({
                localized_title: {},
                localized_description: {},
                visible: "0",
              });
            },
            A = Qo(s),
            P = async () => {
              m("throbber"),
                await A.mutateAsync(l.items)
                  .then((ze) => {
                    ze.success !== 1
                      ? C(ze.errors[0] || "Unknown error")
                      : C(null);
                  })
                  .catch((ze) => {
                    throw (C(ze.message), ze);
                  })
                  .finally(() => {
                    m("message");
                  });
            },
            G = () => {
              m("editor"), r();
            },
            ue = () => {
              window.location.reload();
            };
          return u === "editor"
            ? (0, e.jsxs)("div", {
                className: rs.NonAppContentsEditor,
                children: [
                  (0, e.jsx)("h1", {
                    children: (0, o.we)(
                      "#StoreAdmin_NonAppContent_Editor_Header",
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    className: rs.NonAppContentsEditorScrollArea,
                    children: [
                      l.items.length > 0 &&
                        (0, e.jsx)(Nt.A, {
                          onMove: l.moveItem,
                          rowClassName: rs.ItemEditorRow,
                          items: l.items,
                          render: (ze, he) =>
                            (0, e.jsx)(Yo, { state: l.getState(he) }),
                          onDelete: l.deleteItem,
                        }),
                      l.items.length === 0 &&
                        (0, e.jsx)("div", {
                          children: (0, o.we)(
                            "#StoreAdmin_NonAppContent_Editor_NoNonAppItems",
                            (0, o.we)(
                              "#StoreAdmin_NonAppContent_Editor_AddItemButton",
                            ),
                          ),
                        }),
                      (0, e.jsx)("button", {
                        className: (0, U.A)(
                          "btn_green_white_innerfade",
                          rs.AddItemButton,
                        ),
                        onClick: b,
                        children: (0, o.we)(
                          "#StoreAdmin_NonAppContent_Editor_AddItemButton",
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: rs.EditorButtons,
                    children: [
                      (0, e.jsx)("button", {
                        className: "btn_green_white_innerfade",
                        onClick: P,
                        children: (0, o.we)("#StoreAdmin_NonAppContent_Save"),
                      }),
                      (0, e.jsx)("button", {
                        onClick: G,
                        children: (0, o.we)("#StoreAdmin_NonAppContent_Cancel"),
                      }),
                    ],
                  }),
                ],
              })
            : u === "throbber"
              ? (0, e.jsx)(Gt.t, { size: "large" })
              : h === null
                ? (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("h1", {
                        children: (0, o.we)(
                          "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Header",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, o.we)(
                          "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description",
                        ),
                      }),
                      (0, e.jsx)("button", {
                        onClick: ue,
                        children: (0, o.we)(
                          "#StoreAdmin_NonAppContent_Editor_OK",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("h1", {
                        children: (0, o.we)(
                          "#StoreAdmin_NonAppContent_Editor_Error_Header",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, o.we)(
                          "#StoreAdmin_NonAppContent_Editor_Error_Description",
                        ),
                      }),
                      (0, e.jsx)("p", { children: h }),
                      (0, e.jsx)("button", {
                        onClick: ue,
                        children: (0, o.we)(
                          "#StoreAdmin_NonAppContent_Editor_OK",
                        ),
                      }),
                    ],
                  });
        }
        function Yo(n) {
          const { state: t } = n,
            { item: s, setItem: r, deleteItem: i } = t,
            [l, u] = c.useState("english"),
            m = (0, o.O9)(!1),
            h = (ue) => {
              u(ue.target.value);
            },
            C = (ue) => {
              (s.localized_title[l] = ue.target.value), r(s);
            },
            b = (ue) => {
              (s.localized_description[l] = ue.target.value), r(s);
            },
            A = (ue) => {
              (s.visible = ue ? "1" : "0"), r(s);
            };
          let P = "";
          s.localized_title &&
            s.localized_title[l] &&
            (P = s.localized_title[l]);
          let G = "";
          return (
            s.localized_description &&
              s.localized_description[l] &&
              (G = s.localized_description[l]),
            (0, e.jsxs)("div", {
              className: rs.ItemEditorRowContents,
              children: [
                (0, e.jsxs)("div", {
                  className: rs.ItemEditorRowNameAndLanguageEditor,
                  children: [
                    (0, e.jsx)("input", {
                      className: rs.InputTitle,
                      type: "text",
                      placeholder: (0, o.we)(
                        "#StoreAdmin_NonAppContent_Editor_TitlePlaceholder",
                      ),
                      value: P,
                      onChange: C,
                      maxLength: 120,
                    }),
                    (0, e.jsx)("select", {
                      onChange: h,
                      children: (0, o.vR)(m, (ue, ze) =>
                        (0, e.jsx)("option", { value: ze, children: ue }, ze),
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: rs.ItemEditorRowVisibleToggle,
                  children: [
                    (0, e.jsx)(Sa._H, {
                      value: s.visible === "1",
                      onChange: A,
                    }),
                    " ",
                    (0, e.jsx)("span", {
                      children: (0, o.we)(
                        "#StoreAdmin_NonAppContent_Editor_Visible",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: rs.ItemEditorRowDescriptionEditor,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, o.we)(
                        "#StoreAdmin_NonAppContent_Editor_Description",
                      ),
                    }),
                    (0, e.jsx)("textarea", {
                      placeholder: (0, o.we)(
                        "#StoreAdmin_NonAppContent_Editor_DescriptionPlaceholder",
                      ),
                      maxLength: 300,
                      rows: 5,
                      onChange: b,
                      value: G,
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Qo(n) {
          return (0, js.n)({
            mutationKey: ["save_nonapp_contents", n],
            mutationFn: async (t) => {
              const s = new FormData();
              s.append("sessionid", (0, y.KC)());
              const r = "nonapp_contents";
              for (let C = 0; C < t.length; C++) {
                const b = t[C];
                for (const A of Object.keys(b.localized_title ?? []))
                  s.append(
                    `${r}[${C}][localized_title][${A}]`,
                    b.localized_title[A],
                  );
                for (const A of Object.keys(b.localized_description ?? []))
                  s.append(
                    `${r}[${C}][localized_description][${A}]`,
                    b.localized_description[A],
                  );
                s.append(`${r}[${C}][visible]`, b.visible);
              }
              t.length === 0 && s.append(r, "");
              const i = `${y.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${n}`,
                l = await zt().post(i, s);
              if (l.status !== 200) return l.data;
              if (l.data.success != 1) throw l.data;
              const u = new FormData();
              u.append("sessionid", (0, y.KC)()),
                u.append("changenotes", "Change non-app items in package");
              const m = `${y.TS.PARTNER_BASE_URL}admin/store/packagepublish/${n}`,
                h = await zt().post(m, u);
              if (h.status !== 200) return h.data;
              if (l.data.success != 1) throw l.data;
              return { success: 1, errors: [] };
            },
          });
        }
        var Jo = a(36671),
          $t = a.n(Jo);
        function Zo(n) {
          const { packageid: t } = n,
            [s, r] = c.useState(n.bShowCapsuleArt),
            [i, l] = c.useState(n.bHideItemPrefixes),
            [u, m] = c.useState(null),
            h = qo(t),
            [C, b] = c.useState(null),
            A = (Ee) => {
              m("edit");
            },
            P = (Ee) => {
              r(Ee.target.checked);
            },
            G = (Ee) => {
              l(Ee.target.checked);
            },
            ue = () => {
              r(n.bShowCapsuleArt), m(null);
            },
            ze = async () => {
              m("working"),
                await h
                  .mutateAsync({ bShowCapsuleArt: s, bHideItemPrefix: i })
                  .then((Ee) => {
                    Ee.success !== 1
                      ? b(Ee.errors[0] || "Unknown error")
                      : b(null);
                  })
                  .catch((Ee) => {
                    throw (b(Ee.message), Ee);
                  })
                  .finally(() => {
                    m("message");
                  });
            },
            he = () => {
              window.location.reload();
            };
          return (0, e.jsxs)("div", {
            className: $t().PackagePurchaseDisplayContainer,
            children: [
              (0, e.jsxs)(Gn.mt, {
                active: u !== null,
                onDismiss: ue,
                children: [
                  u === "edit" &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, o.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        !n.bHideShowCapsuleCheckbox &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, o.we)(
                                  "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                                ),
                              }),
                              (0, e.jsxs)("label", {
                                children: [
                                  (0, e.jsx)("input", {
                                    type: "checkbox",
                                    checked: s,
                                    onChange: P,
                                  }),
                                  (0, e.jsx)("span", {
                                    className: $t().checkbox_label,
                                    children: (0, o.we)(
                                      "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, e.jsx)("p", {
                          children: (0, o.we)(
                            "#StoreAdmin_EditPackageDisplay_HidePrefix_Description",
                          ),
                        }),
                        (0, e.jsxs)("label", {
                          children: [
                            (0, e.jsx)("input", {
                              type: "checkbox",
                              checked: i,
                              onChange: G,
                            }),
                            (0, e.jsx)("span", {
                              className: $t().checkbox_label,
                              children: (0, o.we)(
                                "#StoreAdmin_EditPackageDisplay_HidePrefix_Label",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: $t().PackagePurchaseDisplayButtonBar,
                          children: [
                            (0, e.jsx)("button", {
                              className: "btn_green_white_innerfade btn_medium",
                              onClick: ze,
                              disabled:
                                s === n.bShowCapsuleArt &&
                                i === n.bHideItemPrefixes,
                              children: (0, o.we)(
                                "#StoreAdmin_ShowCapsuleArt_SaveAndPublish",
                              ),
                            }),
                            (0, e.jsx)("button", {
                              className: "btnv6_blue_hoverfade btn_medium",
                              onClick: ue,
                              children: (0, o.we)(
                                "#StoreAdmin_ShowCapsuleArt_Cancel",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  u === "working" &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, o.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, e.jsx)(Gt.t, { size: "large" }),
                      ],
                    }),
                  u === "message" &&
                    C === null &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, o.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, o.we)(
                            "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description",
                          ),
                        }),
                        (0, e.jsx)("button", {
                          onClick: he,
                          children: (0, o.we)(
                            "#StoreAdmin_NonAppContent_Editor_OK",
                          ),
                        }),
                      ],
                    }),
                  u === "message" &&
                    C !== null &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, o.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, o.we)(
                            "#StoreAdmin_NonAppContent_Editor_Error_Description",
                          ),
                        }),
                        (0, e.jsx)("p", { children: C }),
                        (0, e.jsx)("button", {
                          onClick: he,
                          children: (0, o.we)(
                            "#StoreAdmin_NonAppContent_Editor_OK",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              !n.bHideShowCapsuleCheckbox &&
                (0, e.jsxs)("div", {
                  className: $t().PackagePurchaseDisplayCheckOption,
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      className: $t().PackagePurchaseDisplayCheckbox,
                      checked: s,
                      onChange: A,
                    }),
                    (0, e.jsx)(k.Gq, {
                      toolTipContent: (0, o.we)(
                        "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                      ),
                      children: (0, e.jsxs)("div", {
                        className: $t().PackagePurchaseDisplayLabel,
                        children: [
                          (0, e.jsx)("span", {
                            children: (0, o.we)(
                              "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                            ),
                          }),
                          " (?)",
                        ],
                      }),
                    }),
                  ],
                }),
              n.bHideShowCapsuleCheckbox &&
                (0, e.jsxs)("div", {
                  className: $t().PackagePurchaseDisplayCheckOption,
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      className: $t().PackagePurchaseDisplayCheckbox,
                      checked: s,
                      disabled: !0,
                    }),
                    (0, e.jsx)(k.Gq, {
                      toolTipContent: (0, o.we)(
                        "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                      ),
                      children: (0, e.jsxs)("div", {
                        className: $t().PackagePurchaseDisplayLabel,
                        children: [
                          (0, e.jsx)("span", {
                            children: (0, o.we)(
                              "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                            ),
                          }),
                          " (?)",
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)("span", {
                            children: (0, o.we)(
                              "#StoreAdmin_EditPackageDisplay_UseEditStorePackage",
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: $t().PackagePurchaseDisplayCheckOption,
                children: [
                  (0, e.jsx)("input", {
                    type: "checkbox",
                    className: $t().PackagePurchaseDisplayCheckbox,
                    checked: i,
                    onChange: A,
                  }),
                  (0, e.jsx)(k.Gq, {
                    toolTipContent: (0, o.we)(
                      "#StoreAdmin_EditPackageDisplay_HidePrefix_Description",
                    ),
                    children: (0, e.jsxs)("div", {
                      className: $t().PackagePurchaseDisplayLabel,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, o.we)(
                            "#StoreAdmin_EditPackageDisplay_HidePrefix_Label",
                          ),
                        }),
                        " (?)",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function qo(n) {
          return (0, js.n)({
            mutationKey: ["save_show_capsule_art_toggle", n],
            mutationFn: async (t) => {
              const s = new FormData();
              s.append("sessionid", (0, y.KC)()),
                s.append(
                  "show_capsule_art_in_purchase_option",
                  t.bShowCapsuleArt ? "1" : "0",
                ),
                s.append(
                  "hide_shared_prefix_on_items",
                  t.bHideItemPrefix ? "1" : "0",
                );
              const r = `${y.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${n}`,
                i = await zt().post(r, s);
              if (i.status !== 200) return i.data;
              if (i.data.success != 1) throw i.data;
              const l = new FormData();
              l.append("sessionid", (0, y.KC)()),
                l.append(
                  "changenotes",
                  "Configure package purchase display options.",
                ),
                l.append("packages[0]", "" + n);
              const u = `${y.TS.PARTNER_BASE_URL}store/ajaxpublishpackages`,
                m = await zt().post(u, l);
              if (m.status !== 200) return m.data;
              if (i.data.success != 1) throw i.data;
              return { success: 1, errors: [] };
            },
          });
        }
        var Es = a(72671),
          ei = a(29757),
          ti = a(53107);
        function zn(n) {
          const [t, s] = (0, c.useState)([]),
            [r, i] = (0, c.useState)(!1),
            { itemid: l, apptype: u, altasset: m, altpostfix: h } = n;
          (0, c.useEffect)(
            () => (
              (window.ShowImageConfirmationDialog = (A) => {
                s(A), i(!0);
              }),
              () => {
                delete window.ShowImageConfirmationDialog;
              }
            ),
            [],
          );
          const C = () => {
              i(!1);
            },
            b = c.useCallback(() => {
              window.SubmitImageUpload(l, u, m, h, !0), C();
            }, [m, h, u, l]);
          return (0, e.jsx)(Me.tH, {
            children: (0, e.jsx)(Ps.E, {
              active: r,
              children: (0, e.jsx)(si, {
                rgImages: t,
                fnOnSuccess: b,
                fnCloseDialog: C,
              }),
            }),
          });
        }
        function wa(n) {
          let t = [];
          switch (n) {
            case "Small Capsule":
              t = ["LegibleLogo", "NoAdditionalText"];
              break;
            case "Main Capsule":
              t = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Package Header":
            case "Header Capsule":
              t = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Library Capsule":
            case "Vertical Capsule":
            case "Library Header":
              t = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Library Hero":
              t = ["NoLogo"];
              break;
            case "Library Logo":
              t = ["TransparentBG", "NoAdditionalText"];
              break;
            default:
              (0, Ys.wT)(!1, `Unknown uploaded image provided: ${n}`);
          }
          return t;
        }
        function si(n) {
          const { rgImages: t, fnOnSuccess: s, fnCloseDialog: r } = n,
            [i, l] = (0, c.useState)({}),
            u = (0, c.useCallback)(
              (C, b, A) => l({ ...i, [C]: { ...i[C], [b]: A } }),
              [i],
            );
          let m = !0;
          t.forEach((C) => {
            wa(C.image_def.name).forEach((A) => {
              if (!i[C.image_def.name] || !i[C.image_def.name][A]) {
                m = !1;
                return;
              }
            });
          });
          const h = t.map((C) =>
            (0, e.jsx)(ni, { image: C, onCheckboxChange: u }, C.image_def.name),
          );
          return (0, e.jsxs)(us.o0, {
            className: Es.ImageConfirmationDialog,
            strTitle: (0, o.we)(
              "#StoreAdmin_GraphicalAssets_ConfirmDialog_Title",
            ),
            bOKDisabled: !m,
            closeModal: r,
            strOKButtonText: (0, o.we)(
              "#StoreAdmin_GraphicalAssets_ConfirmDialog_ConfirmBtn",
            ),
            onOK: s,
            bDestructiveWarning: !m,
            bDisableBackgroundDismiss: !0,
            children: [
              (0, e.jsx)("div", {
                className: Es.ConfirmationDescription,
                children: (0, o.oW)(
                  "#StoreAdmin_GraphicalAssets_ConfirmDialog_Desc",
                  (0, e.jsx)(ti.uU, {
                    href: `${Ye.TS.PARTNER_BASE_URL}doc/store/assets/rules`,
                  }),
                ),
              }),
              h,
            ],
          });
        }
        function ni(n) {
          const { image: t, onCheckboxChange: s } = n,
            r = wa(t.image_def.name);
          let i = [];
          for (const l of r)
            i.push(
              (0, e.jsx)(
                ei.Yh,
                {
                  onChange: (u) => s(t.image_def.name, l, u),
                  label: (0, o.we)(
                    `#StoreAdmin_GraphicalAssets_ConfirmDialog_${l}`,
                  ),
                },
                `${t.image_def.name}_Checkbox_${l}`,
              ),
            );
          return (0, e.jsxs)("div", {
            className: Es.ImageTypeConfirmationCtn,
            children: [
              (0, e.jsx)("div", {
                className: Es.ImageTitle,
                children: t.image_def.name,
              }),
              (0, e.jsx)("div", {
                className: Es.ImageCtn,
                children: (0, e.jsx)("img", {
                  className: Es.ImageSrc,
                  src: t.image_src,
                }),
              }),
              (0, e.jsx)("div", { className: Es.ImageCheckboxes, children: i }),
            ],
          });
        }
        var Gs = a(64407);
        function ai(n) {
          const t = (0, ft.a)(),
            s = (0, hs.I)({
              queryKey: ["usePartnerActiveCreatorClans", n],
              queryFn: async () => {
                const r = Bs.w.Init(Gs.fD);
                r.Body().set_partnerid(n);
                const i = await Gs.w5.GetDevPagesForPartner(t, r);
                return i.GetEResult() == es.R
                  ? i
                      .Body()
                      .results()
                      .map((l) => l.toObject())
                  : (console.error(
                      `usePartnerActiveCreatorClans on PartnerID ${n} failed with EResult: ${i.GetEResult()}`,
                    ),
                    []);
              },
              enabled: n > 0,
            });
          return s.isLoading ? null : s.data;
        }
        const Ma = "useCreatorHomeClanLinksByApp";
        function ka(n) {
          const t = (0, ft.a)(),
            s = (0, hs.I)({
              queryKey: [Ma, n],
              queryFn: async () => {
                const r = Bs.w.Init(Gs.iz);
                r.Body().set_appid(n);
                const i = await Gs.w5.GetDevPageLinks(t, r);
                return i.GetEResult() == es.R
                  ? i
                      .Body()
                      .links()
                      .map((l) => l.toObject())
                  : (console.error(
                      `useCreatorHomeClanLinksByApp on AppID ${n} failed with ${i.GetEResult()}`,
                    ),
                    []);
              },
              enabled: n > 0,
            });
          return s.isLoading ? null : s.data;
        }
        var ri = a(39376),
          Ba = a(33654),
          La = a(40562),
          oi = a(40497);
        function ii(n, t, s) {
          const r = Na();
          return (0, js.n)({
            mutationFn: async ({ clanAccountID: i, bReuseExistingClan: l }) => {
              const u = Ve.b.InitFromClanID(i),
                m = {
                  appid: t,
                  remove: !1,
                  update_json_only: !1,
                  skip_clan_permissions: l,
                  partner_id: n,
                  link: {
                    appid: t,
                    clan_steamid: u.ConvertTo64BitString(),
                    relation: La.VY.wQ,
                    linkname: s,
                    json: null,
                  },
                };
              return await r.mutateAsync(m);
            },
          });
        }
        function li(n, t, s) {
          const r = Na();
          return (0, js.n)({
            mutationFn: async () => {
              const i = Ve.b.InitFromClanID(t),
                l = {
                  appid: n,
                  remove: !0,
                  update_json_only: !1,
                  link: {
                    appid: n,
                    clan_steamid: i.ConvertTo64BitString(),
                    relation: La.VY.wQ,
                    linkname: s,
                    json: null,
                  },
                };
              return await r.mutateAsync(l);
            },
          });
        }
        function Na() {
          const n = (0, ft.a)();
          return (0, js.n)({
            mutationFn: async (t) => {
              const s = Bs.w.Init(Gs.dC);
              s.Body().set_appid(t.appid),
                s.Body().set_remove(t.remove),
                s.Body().set_update_json_only(t.update_json_only),
                s.Body().set_skip_clan_permissions(t.skip_clan_permissions),
                s.Body().set_partner_id(t.partner_id),
                s.Body().link().set_appid(t.link.appid),
                s.Body().link().set_clan_steamid(t.link.clan_steamid),
                s.Body().link().set_relation(t.link.relation),
                s.Body().link().set_linkname(t.link.linkname),
                s.Body().link().set_json(t.link.json);
              const r = await Gs.w5.SetDevPageLink(n, s);
              return r.GetEResult() == es.R
                ? (oi.L.invalidateQueries({ queryKey: [Ma, t.appid] }), !0)
                : (console.error(
                    `useSetDevPageLink on AppID ${t.appid} failed with ${r.GetEResult()}`,
                  ),
                  !1);
            },
          });
        }
        function Ra(n) {
          const [t, s, r] = (0, Oe.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.$n, {
                onClick: s,
                children: (0, o.we)("#Button_Unlink"),
              }),
              (0, e.jsx)(Ps.E, {
                active: t,
                children: (0, e.jsx)(ci, { ...n, closeModal: r }),
              }),
            ],
          });
        }
        function ci(n) {
          const {
              pageLink: t,
              clanAccountID: s,
              clanName: r,
              closeModal: i,
            } = n,
            l = li(t.appid, s, t.linkname),
            u = (0, fs.vs)();
          return u.bLoading
            ? (0, e.jsx)(fs.Hh, {
                state: u,
                strDialogTitle: (0, o.we)("#Button_Unlink"),
                closeModal: i,
              })
            : (0, e.jsx)(us.o0, {
                onCancel: i,
                strTitle: (0, o.we)("#Button_Unlink"),
                strDescription: (0, o.we)(
                  "#AppLanding_Creator_UnlinkDesc",
                  r || s,
                  t.linkname,
                ),
                onOK: () => {
                  u.fnSetLoading(!0),
                    l
                      .mutateAsync()
                      .then(() => (m) => {
                        m
                          ? u.fnSetStrSuccess(
                              (0, o.we)("#EventDisplay_Share_Success"),
                            )
                          : u.fnSetStrError(
                              (0, o.we)("#Error_ErrorCommunicatingWithNetwork"),
                            );
                      })
                      .catch((m) => {
                        u.fnSetStrError(
                          (0, o.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                          console.error(
                            `unlinking failed appid ${t.appid} with error ${((0, ae.H))(m).strErrorMsg} `,
                          );
                      });
                },
                children: (0, o.we)("#Dialog_AreYouSure"),
              });
        }
        var di = a(30533),
          qs = a.n(di);
        function ui() {
          const n = (0, hs.I)({
            queryKey: ["useClanLinkableForMeViaCreatorHome", te.iA.accountid],
            queryFn: async () => {
              const t = `${te.TS.PARTNER_BASE_URL}creatorhome/ajaxgetgroupsforuser`,
                s = { sessionid: (0, y.KC)() },
                r = await zt().get(t, { params: s });
              return r?.status == 200 && r.data?.success == es.R
                ? r.data.rgClanAccountIDs
                : (console.error(
                    "useClanLinkableForMeViaCreatorHome:",
                    r?.status,
                  ),
                  []);
            },
            enabled: te.iA.logged_in,
          });
          return n.isLoading ? null : n.data;
        }
        var mi = a(63251),
          _n = a.n(mi);
        function pi(n) {
          const { nAppID: t, nPartnerID: s } = n,
            [r, i, l] = (0, Oe.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(g.$n, {
                onClick: i,
                children: (0, o.we)("#Button_Link"),
              }),
              (0, e.jsx)(Ps.E, {
                active: r,
                children: (0, e.jsx)(hi, { closeModal: l, ...n }),
              }),
            ],
          });
        }
        function hi(n) {
          const { nAppID: t, nPartnerID: s, linkname: r, closeModal: i } = n,
            l = ii(s, t, r),
            [u, m] = (0, c.useState)(null),
            h = ai(s),
            C = ui(),
            { rgOptions: b, setExistingLinks: A } = (0, c.useMemo)(() => {
              if (!h || !C) return { rgOptions: null, setExistingLinks: null };
              const G = new Set(h.map((he) => he.clan_accountid)),
                ue = new Set([...C, ...h.map((he) => he.clan_accountid)]);
              return {
                rgOptions: Array.from(ue).map((he) => ({
                  label: (0, e.jsx)(gi, {
                    clanAccountID: he,
                    bExistingLink: G.has(he),
                  }),
                  data: he,
                })),
                setExistingLinks: G,
              };
            }, [h, C]),
            P = (0, fs.vs)();
          return !h || !C
            ? (0, e.jsx)(us.o0, {
                strTitle: (0, o.we)("#Button_Link"),
                bAlertDialog: !0,
                closeModal: i,
                children: (0, e.jsx)(Gt.t, { string: (0, o.we)("#Loading") }),
              })
            : P.bLoading
              ? (0, e.jsx)(fs.Hh, {
                  state: P,
                  strDialogTitle: (0, o.we)("#Button_Link"),
                  closeModal: i,
                })
              : (0, e.jsxs)(us.o0, {
                  onCancel: i,
                  bAllowFullSize: !0,
                  strTitle: (0, o.we)("#AppLAnding_Creator_LinkingTitle", r),
                  strDescription: (0, o.we)(
                    "#AppLAnding_Creator_LinkingDesc",
                    r,
                  ),
                  bOKDisabled: !u,
                  onOK: async () => {
                    P.fnSetLoading(!0);
                    const G = {
                      clanAccountID: u,
                      bReuseExistingClan: A.has(u),
                    };
                    await l
                      .mutateAsync(G)
                      .then((ue) => {
                        ue
                          ? (P.fnSetStrSuccess(
                              (0, o.we)("#EventDisplay_Share_Success"),
                            ),
                            P.fnSetSuccess(!0))
                          : (P.fnSetStrError(
                              (0, o.we)("#Error_ErrorCommunicatingWithNetwork"),
                            ),
                            P.fnSetError(!0));
                      })
                      .catch((ue) => {
                        P.fnSetStrError(
                          (0, o.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                          P.fnSetError(!0),
                          console.error(
                            `unlinking failed appid ${t} with error ${((0, ae.H))(ue).strErrorMsg} `,
                          );
                      });
                  },
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, o.we)("#AppLanding_Creator_LinkingNote"),
                    }),
                    (0, e.jsx)("div", {
                      className: _n().DropDown,
                      children: (0, e.jsx)(g.m, {
                        strDropDownClassName: _n().DropDownScroll,
                        strDefaultLabel: (0, o.we)(
                          "#AppLanding_Creator_Choice",
                        ),
                        rgOptions: b,
                        onChange: (G) => m(G.data),
                      }),
                    }),
                  ],
                });
        }
        function gi(n) {
          const { clanAccountID: t, bExistingLink: s } = n,
            [r, i] = (0, tt.TB)(t),
            l = i ? i.group_name + `(${t})` : "" + t;
          return (0, e.jsx)(k.Gq, {
            toolTipContent: s
              ? (0, o.we)("#AppLanding_Creator_Existing")
              : void 0,
            children: (0, e.jsxs)("div", {
              className: _n().DropDownItem,
              children: [
                (0, e.jsx)("img", {
                  className: _n().Avatar,
                  src: i?.avatar_full_url,
                }),
                l,
                " ",
                s ? "*" : "",
              ],
            }),
          });
        }
        var fi = a(62178);
        function _i(n) {
          const {
              nAppID: t,
              nPrimaryPartnerID: s,
              strName: r,
              strKvTargetName: i,
            } = n,
            [l, u] = (0, c.useState)(() => r),
            m = Ci(t, s),
            C = ka(t)?.find(
              (b) =>
                b.linkname.trim().toLocaleLowerCase() ==
                r.trim().toLocaleLowerCase(),
            );
          return (0, e.jsxs)("div", {
            className: qs().Ctn,
            children: [
              (0, e.jsx)(k.Gq, {
                toolTipContent: C && (0, o.we)("#AppLanding_CreatorLocked"),
                children: (0, e.jsx)("input", {
                  type: "text",
                  size: 30,
                  value: l,
                  onChange: (b) => {
                    C || u(b.currentTarget.value || "");
                  },
                }),
              }),
              (0, e.jsx)("input", {
                name: i,
                type: "hidden",
                value: l,
                onChange: () => {},
              }),
              !!(C && r?.toLocaleLowerCase() === l?.toLocaleLowerCase()) &&
                (0, e.jsx)(bi, { pageLink: C, strKvTargetName: i }),
              !C &&
                l?.trim().length > 0 &&
                (0, e.jsx)(pi, {
                  nPartnerID: m,
                  nAppID: t,
                  linkname: l.trim(),
                }),
              l?.toLocaleLowerCase() !== r?.toLocaleLowerCase() &&
                (0, e.jsx)("span", {
                  children: (0, o.we)("#AppLanding_Creator_SaveRequires"),
                }),
            ],
          });
        }
        const xi = { direction: "right", style: { minWidth: "350px" } };
        function Oa(n, t) {
          const s = (0, c.useMemo)(
              () => new Ve.b(n.clan_steamid).GetAccountID(),
              [n],
            ),
            { creatorHome: r } = (0, kt.FV)(s),
            [i, l] = (0, tt.TB)(s),
            u = (0, c.useMemo)(() => {
              let h = "developer";
              return (
                t.includes("[publisher")
                  ? (h = "publisher")
                  : t.includes("[franchise") && (h = "franchise"),
                { clan_account_id: s, name: l?.group_name, type: h }
              );
            }, [s, t, l]),
            m = r?.GetCreatorHomeURL(u.type);
          return { clanAccountID: s, clanInfo: l, strURL: m };
        }
        function bi(n) {
          const { pageLink: t, strKvTargetName: s } = n,
            { clanAccountID: r, clanInfo: i, strURL: l } = Oa(t, s);
          return (0, e.jsxs)("div", {
            className: qs().CreatorNameCtn,
            children: [
              (0, e.jsx)("div", {
                className: qs().CreatorCtn,
                children: (0, o.PP)(
                  "#AppLanding_CreatorLinked",
                  (0, e.jsx)(Fa, { clanAccountID: r, strURL: l, clanInfo: i }),
                ),
              }),
              (0, e.jsx)(Ra, {
                pageLink: t,
                clanAccountID: r,
                clanName: i?.group_name || "" + r,
              }),
            ],
          });
        }
        function Fa(n) {
          const { clanAccountID: t, clanInfo: s, strURL: r } = n;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ba.iN, {
                href: r,
                target: "_blank",
                children: s?.group_name || t,
              }),
              (0, e.jsx)(fi.J, {
                className: qs().HoverCtn,
                hoverProps: xi,
                hoverContent: (0, e.jsx)(is.ux, { clanInfo: s }),
                children: (0, e.jsx)(Ba.iN, {
                  href: r,
                  target: "_blank",
                  children: (0, e.jsx)("img", {
                    className: qs().Avatar,
                    src: s?.avatar_full_url,
                  }),
                }),
              }),
            ],
          });
        }
        function Ci(n, t) {
          const [s, r] = (0, c.useState)(() => (t > 0 ? t : null)),
            i = (0, ri.O4)(s > 0 ? null : n);
          return (
            (0, c.useEffect)(() => {
              !s && i?.length > 0 && r(i[0].partner_id);
            }, [i, s]),
            s
          );
        }
        var Ai = a(82363);
        function Si(n) {
          const [t, s, r] = (0, Oe.uD)(),
            { rgScreenshots: i, refetch: l, isFetching: u } = vi(t),
            { mutateAsync: m, isPending: h } = yi(),
            C = c.useMemo(
              () =>
                i?.map((P, G) => ({ key: G, mapAltText: P.alt_text })) ?? [],
              [i],
            ),
            b = async (P, G) => (await m({ nIndex: P, mapAltText: G })) !== !1,
            A = (P, G) => {
              const ue = (0, W.LgB)(G),
                ze = (0, W.LgB)(G == W.ZLm ? W.NFp : W.Bhc);
              return ue in i[P].urls
                ? i[P].urls[ue]
                : ze in i[P].urls
                  ? i[P].urls[ze]
                  : null;
            };
          return (0, e.jsxs)("div", {
            children: [
              t &&
                (0, e.jsx)(Ai.B, {
                  entries: C,
                  isLoading: u || h,
                  hideModal: r,
                  fnRefetch: l,
                  mutateAltTextAsync: b,
                  isMutatePending: h,
                  fnGetImage: (P, G) => (0, e.jsx)("img", { src: A(P, G) }),
                }),
              (0, e.jsx)(g.$n, {
                onClick: s,
                children: (0, o.we)("#StoreAdmin_EditAltText_Button"),
              }),
            ],
          });
        }
        function vi(n) {
          const t = (0, Se.Z3)("screenshots"),
            {
              data: s,
              refetch: r,
              isFetching: i,
            } = (0, hs.I)({
              queryKey: ["StoreAppScreenshots", t],
              queryFn: async () => {
                const l = await fetch(t);
                try {
                  return await l.json();
                } catch {
                  return null;
                }
              },
              enabled: n,
              refetchOnMount: "always",
              staleTime: 0,
            });
          return { rgScreenshots: s, refetch: r, isFetching: i };
        }
        function yi() {
          const n = (0, Se.Z3)("quickupdateajax");
          return (0, js.n)({
            mutationFn: async ({ nIndex: t, mapAltText: s }) => {
              if (t == null || !s) return !1;
              const r = new FormData();
              r.append("sessionid", (0, y.KC)());
              for (const [u, m] of Object.entries(s))
                r.append(`app[assets][screenshots][${t}][alt_text][${u}]`, m);
              const i = await fetch(n, { method: "post", body: r }),
                l = await i.json();
              if (!i.ok) throw "Error modifying screenshot";
              return l;
            },
            onError: (t) => {
              console.error(
                (0, o.we)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof t == "string" ? t : t.message,
                ),
              );
            },
          });
        }
        var ji = a(72611),
          Ha = a.n(ji);
        function Pi(n) {
          const {
              nAppID: t,
              rgAllCreatorHomeNames: s,
              nPrimaryPartnerID: r,
            } = n,
            i = ka(t),
            l = (0, c.useMemo)(
              () =>
                i
                  ? i
                      .filter(
                        (u) =>
                          !s.some(
                            (m) =>
                              u.linkname.trim().toLocaleLowerCase() ==
                              m.trim().toLocaleLowerCase(),
                          ),
                      )
                      .sort((u, m) =>
                        u.linkname.localeCompare(m.linkname, void 0, {
                          sensitivity: "base",
                        }),
                      )
                  : [],
              [i, s],
            );
          return l.length == 0
            ? null
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h3", {
                    children: (0, o.we)("#AppLinding_Creator_Broken"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, o.we)("#AppLinding_Creator_Broken_desc"),
                  }),
                  l.map((u) =>
                    (0, e.jsx)(Ei, { pageLink: u }, "dp_" + u.linkname),
                  ),
                ],
              });
        }
        function Ei(n) {
          const { pageLink: t } = n,
            { clanAccountID: s, clanInfo: r, strURL: i } = Oa(t, "developer");
          return (0, e.jsxs)("div", {
            className: Ha().CreatorNameCtn,
            children: [
              (0, e.jsx)(Ra, {
                pageLink: t,
                clanAccountID: s,
                clanName: r?.group_name || "" + s,
              }),
              (0, e.jsx)("div", {
                className: Ha().CreatorCtn,
                children: (0, o.PP)(
                  "#AppLanding_Creator_Broken_Link",
                  (0, e.jsx)(e.Fragment, { children: t.linkname }),
                  (0, e.jsx)(Fa, { clanAccountID: s, strURL: i, clanInfo: r }),
                ),
              }),
            ],
          });
        }
        var Ii = a(64916),
          Di = a(63404),
          Xt = a.n(Di);
        const Ti = {
            bAccessibilityDifficultyLevels:
              "#Accessibility_Feature_AdjustableDifficulty",
            bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
            bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
            bAccessibilityBackgroundVolumeControls:
              "#Accessibility_Feature_CustomVolumeControls",
            bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
            bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
            bAccessibilityResizableUI:
              "#Accessibility_Feature_AdjustableTextSize",
            bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
            bAccessibilityColorAlternatives:
              "#Accessibility_Feature_ColorAlternatives",
            bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
            bAccessibilityKeyboardOnlyOption:
              "#Accessibility_Feature_KeyboardOnlyOption",
            bAccessibilityMouseOnlyOption:
              "#Accessibility_Feature_MouseOnlyOption",
            bAccessibilityTouchOnlyOption:
              "#Accessibility_Feature_TouchOnlyOption",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "#Accessibility_Feature_WithoutQuickTimeEvents",
            bAccessibilityChatTexttoSpeech:
              "#Accessibility_Feature_TextToSpeech",
            bAccessibilityChatSpeechtoText:
              "#Accessibility_Feature_SpeechToText",
            bAccessibilityPlayableAtYourOwnPace:
              "#Accessibility_Feature_PlayableAtYourOwnPace",
            bAccessibilityPlayableWithoutVision:
              "#Accessibility_Feature_PlayableWithoutVision",
            bAccessibilityContrastControls:
              "#Accessibility_Feature_ContrastControls",
          },
          wi = {
            bAccessibilityDifficultyLevels: "adjustable_difficulty",
            bAccessibilitySaveAnytime: "save_anytime",
            bAccessibilityNarratedMenus: "narrated_game_menus",
            bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
            bAccessibilityStereoSound: "stereo_sound",
            bAccessibilitySurroundSound: "surround_sound",
            bAccessibilityResizableUI: "adjustable_text_size",
            bAccessibilitySubtitles: "subtitle_options",
            bAccessibilityColorAlternatives: "color_alternatives",
            bAccessibilityCameraComfort: "camera_comfort",
            bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
            bAccessibilityMouseOnlyOption: "mouse_only_option",
            bAccessibilityTouchOnlyOption: "touch_only_option",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "playable_without_timed_input",
            bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
            bAccessibilityChatSpeechtoText: "chat_speech_to_text",
            bAccessibilityPlayableAtYourOwnPace: "playable_at_your_own_pace",
            bAccessibilityPlayableWithoutVision: "playable_without_vision",
            bAccessibilityContrastControls: "contrast_controls",
          };
        var Mi = ((n) => (
          (n.Gameplay = "gameplay"),
          (n.Visual = "visual"),
          (n.Audio = "audio"),
          (n.Input = "input"),
          n
        ))(Mi || {});
        const ki = {
            bAccessibilityDifficultyLevels: "gameplay",
            bAccessibilitySaveAnytime: "gameplay",
            bAccessibilityNarratedMenus: "audio",
            bAccessibilityBackgroundVolumeControls: "audio",
            bAccessibilityStereoSound: "audio",
            bAccessibilitySurroundSound: "audio",
            bAccessibilityResizableUI: "visual",
            bAccessibilitySubtitles: "visual",
            bAccessibilityColorAlternatives: "visual",
            bAccessibilityCameraComfort: "visual",
            bAccessibilityPlayableWithoutVision: "visual",
            bAccessibilityContrastControls: "visual",
            bAccessibilityKeyboardOnlyOption: "input",
            bAccessibilityMouseOnlyOption: "input",
            bAccessibilityTouchOnlyOption: "input",
            bAccessibilityPlayableWithoutQuicktimeEvents: "input",
            bAccessibilityChatTexttoSpeech: "input",
            bAccessibilityChatSpeechtoText: "input",
            bAccessibilityPlayableAtYourOwnPace: "input",
          },
          Bi = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function mh(n) {
          return {
            bAccessibilityResizableUI: n.includes(
              k_EStoreCategoryAccessibilityResizableUI,
            ),
            bAccessibilitySubtitles: n.includes(
              k_EStoreCategoryAccessibilitySubtitles,
            ),
            bAccessibilityColorAlternatives: n.includes(
              k_EStoreCategoryAccessibilityColorAlternatives,
            ),
            bAccessibilityCameraComfort: n.includes(
              k_EStoreCategoryAccessibilityCameraComfort,
            ),
            bAccessibilityBackgroundVolumeControls: n.includes(
              k_EStoreCategoryAccessibilityBackgroundVolumeControls,
            ),
            bAccessibilityStereoSound: n.includes(
              k_EStoreCategoryAccessibilityStereoSound,
            ),
            bAccessibilitySurroundSound: n.includes(
              k_EStoreCategoryAccessibilitySurroundSound,
            ),
            bAccessibilityNarratedMenus: n.includes(
              k_EStoreCategoryAccessibilityNarratedMenus,
            ),
            bAccessibilityChatSpeechtoText: n.includes(
              k_EStoreCategoryAccessibilityChatSpeechtoText,
            ),
            bAccessibilityChatTexttoSpeech: n.includes(
              k_EStoreCategoryAccessibilityChatTexttoSpeech,
            ),
            bAccessibilityPlayableWithoutQuicktimeEvents: n.includes(
              k_EStoreCategoryAccessibilityPlayableWithoutQuicktimeEvents,
            ),
            bAccessibilityKeyboardOnlyOption: n.includes(
              k_EStoreCategoryAccessibilityKeyboardOnlyOption,
            ),
            bAccessibilityMouseOnlyOption: n.includes(
              k_EStoreCategoryAccessibilityMouseOnlyOption,
            ),
            bAccessibilityTouchOnlyOption: n.includes(
              k_EStoreCategoryAccessibilityTouchOnlyOption,
            ),
            bAccessibilityDifficultyLevels: n.includes(
              k_EStoreCategoryAccessibilityDifficultyLevels,
            ),
            bAccessibilitySaveAnytime: n.includes(
              k_EStoreCategoryAccessibilitySaveAnytime,
            ),
            bAccessibilityPlayableAtYourOwnPace: n.includes(
              k_EStoreCategoryAccessibilityPlayableAtYourOwnPace,
            ),
            bAccessibilityPlayableWithoutVision: n.includes(
              k_EStoreCategoryAccessibilityPlayableWithoutVision,
            ),
            bAccessibilityContrastControls: n.includes(
              k_EStoreCategoryAccessibilityContrastControls,
            ),
          };
        }
        function Li(n) {
          const [t, s] = (0, c.useState)(n.initialOpen ?? !1),
            r = c.useId(),
            i = Object.entries(n.features)
              .filter(([m, h]) => h)
              .map(([m]) => m);
          if (i.length === 0) return null;
          const l = {};
          i.forEach((m) => {
            const h = ki[m];
            (l[h] ??= []), l[h].push(m);
          });
          const u = Object.keys(l).length > 1;
          return (0, e.jsxs)("details", {
            className: Xt().Details,
            open: t,
            onToggle: (m) => s(m.currentTarget.open),
            children: [
              (0, e.jsxs)(Wn.f_, {
                className: Xt().Summary,
                children: [
                  (0, e.jsx)("div", {
                    className: Xt().ImageContainer,
                    children: (0, e.jsx)(Ni, {
                      className: Xt().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, e.jsxs)("span", {
                    className: Xt().FeatureNameContainer,
                    id: r,
                    children: [
                      (0, e.jsx)("span", {
                        className: Xt().FeatureName,
                        children: t
                          ? (0, o.we)("#AccessibilityFeatures")
                          : (0, o.we)(
                              "#AccessibilityFeaturesWithCount",
                              i.length,
                            ),
                      }),
                      (0, e.jsx)("a", {
                        className: Xt().InfoLink,
                        href: `${y.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("ul", {
                className: Xt().FeatureList,
                "aria-labelledby": r,
                children: [
                  u &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        l.gameplay &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(xn, {
                              group: "gameplay",
                              features: l.gameplay,
                              open: t,
                            }),
                          }),
                        l.visual &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(xn, {
                              group: "visual",
                              features: l.visual,
                              open: t,
                            }),
                          }),
                        l.audio &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(xn, {
                              group: "audio",
                              features: l.audio,
                              open: t,
                            }),
                          }),
                        l.input &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(xn, {
                              group: "input",
                              features: l.input,
                              open: t,
                            }),
                          }),
                      ],
                    }),
                  !u &&
                    i.map((m) =>
                      (0, e.jsx)(
                        "li",
                        { children: (0, e.jsx)(Ua, { feature: m, open: t }) },
                        m,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function Ni(n) {
          return (0, e.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ...n,
            children: [
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
                fillRule: "evenodd",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
                fillRule: "evenodd",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
                fillRule: "evenodd",
              }),
            ],
          });
        }
        function xn(n) {
          const t = c.useId();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: Xt().GroupLabel,
                id: t,
                children: (0, o.we)(Bi[n.group]),
              }),
              (0, e.jsx)("ul", {
                className: Xt().FeatureGroupItems,
                "aria-labelledby": t,
                children: n.features.map((s) =>
                  (0, e.jsx)(
                    "li",
                    { children: (0, e.jsx)(Ua, { feature: s, open: n.open }) },
                    s,
                  ),
                ),
              }),
            ],
          });
        }
        function Ua(n) {
          return (0, e.jsx)(Wn.Ii, {
            href: `${y.TS.STORE_BASE_URL}category/${wi[n.feature]}`,
            className: Xt().InfoRow,
            focusable: n.open,
            children: (0, e.jsx)("span", {
              className: Xt().FeatureNameContainer,
              children: (0, e.jsx)("span", {
                className: Xt().FeatureName,
                children: (0, o.we)(Ti[n.feature]),
              }),
            }),
          });
        }
        var qe = a(77127);
        function Ri() {
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Gameplay",
                ),
              }),
              (0, e.jsxs)("div", {
                className: qe.Instructions,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_WizardPrompt_Desc",
                    ),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, o.oW)(
                      "#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Instructions",
                      (0, e.jsx)("a", {
                        href: `${y.TS.PARTNER_BASE_URL}doc/accessibility_features#gameplay`,
                        target: "_blank",
                      }),
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: qe.Question,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Question",
                ),
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc",
                ),
                id: "bAccessibilityDifficultyLevels",
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc",
                ),
                id: "bAccessibilitySaveAnytime",
              }),
            ],
          });
        }
        function Oi() {
          const { currentValues: n, fnSetValue: t } = xs(),
            s = c.useId();
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus",
                ),
              }),
              (0, e.jsx)("div", {
                className: qe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, o.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Instructions",
                    (0, e.jsx)("a", {
                      href: "https://learn.microsoft.com/windows/win32/winauto/entry-uiauto-win32",
                      target: "_blank",
                    }),
                    (0, e.jsx)("a", {
                      href: `${y.TS.PARTNER_BASE_URL}doc/accessibility_features#narrated_menus`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: s,
                className: qe.Question,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Question",
                ),
              }),
              (0, e.jsx)(en, {
                labelId: s,
                options: [
                  {
                    id: "yes",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Yes",
                    ),
                  },
                  {
                    id: "no",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (n.bAccessibilityNarratedMenus) return "yes";
                  if (n.bAccessibilityNarratedMenus === !1) return "no";
                },
                fnSetValues: (r) => {
                  r === "yes" && t("bAccessibilityNarratedMenus", !0),
                    r === "no" && t("bAccessibilityNarratedMenus", !1);
                },
              }),
            ],
          });
        }
        function Wa() {
          const { currentValues: n, fnSetValue: t } = xs(),
            s = c.useId();
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision",
                ),
              }),
              (0, e.jsx)("div", {
                className: qe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Instructions",
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: s,
                className: qe.Question,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Question",
                ),
              }),
              (0, e.jsx)(en, {
                labelId: s,
                options: [
                  {
                    id: "yes",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Yes",
                    ),
                  },
                  {
                    id: "no",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (n.bAccessibilityPlayableWithoutVision) return "yes";
                  if (n.bAccessibilityPlayableWithoutVision === !1) return "no";
                },
                fnSetValues: (r) => {
                  r === "yes" && t("bAccessibilityPlayableWithoutVision", !0),
                    r === "no" && t("bAccessibilityPlayableWithoutVision", !1);
                },
              }),
            ],
          });
        }
        function Fi() {
          const { currentValues: n, fnSetValue: t } = xs(),
            s = c.useId();
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls",
                ),
              }),
              (0, e.jsx)("div", {
                className: qe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, o.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Instructions",
                    (0, e.jsx)("a", {
                      href: `${y.TS.PARTNER_BASE_URL}doc/accessibility_features#volume_controls`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: s,
                className: qe.Question,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Question",
                ),
              }),
              (0, e.jsx)(en, {
                labelId: s,
                options: [
                  {
                    id: "yes",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Yes",
                    ),
                  },
                  {
                    id: "no",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (n.bAccessibilityBackgroundVolumeControls) return "yes";
                  if (n.bAccessibilityBackgroundVolumeControls === !1)
                    return "no";
                },
                fnSetValues: (r) => {
                  r === "yes" &&
                    t("bAccessibilityBackgroundVolumeControls", !0),
                    r === "no" &&
                      t("bAccessibilityBackgroundVolumeControls", !1);
                },
              }),
            ],
          });
        }
        function Hi() {
          const { currentValues: n, fnSetValue: t } = xs(),
            s = c.useId();
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio",
                ),
              }),
              (0, e.jsx)("div", {
                className: qe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Instructions",
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: s,
                className: qe.Question,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Question",
                ),
              }),
              (0, e.jsx)(en, {
                labelId: s,
                options: [
                  {
                    id: "surround",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_SurroundSound",
                    ),
                  },
                  {
                    id: "stereo",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_StereoSound",
                    ),
                  },
                  {
                    id: "none",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_None",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () =>
                  n.bAccessibilitySurroundSound
                    ? "surround"
                    : n.bAccessibilityStereoSound
                      ? "stereo"
                      : "none",
                fnSetValues: (r) => {
                  r === "surround" &&
                    (t("bAccessibilitySurroundSound", !0),
                    t("bAccessibilityStereoSound", !0)),
                    r === "stereo" &&
                      (t("bAccessibilitySurroundSound", !1),
                      t("bAccessibilityStereoSound", !0)),
                    r === "none" &&
                      (t("bAccessibilitySurroundSound", !1),
                      t("bAccessibilityStereoSound", !1));
                },
              }),
            ],
          });
        }
        function Ga() {
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Visual",
                ),
              }),
              (0, e.jsx)("div", {
                className: qe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, o.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Visual_Instructions",
                    (0, e.jsx)("a", {
                      href: `${y.TS.PARTNER_BASE_URL}doc/accessibility_features#visual_recommendations`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: qe.Question,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Visual_Question",
                ),
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc",
                ),
                id: "bAccessibilityResizableUI",
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc",
                ),
                id: "bAccessibilitySubtitles",
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc",
                ),
                id: "bAccessibilityColorAlternatives",
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc",
                ),
                id: "bAccessibilityContrastControls",
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc",
                ),
                id: "bAccessibilityCameraComfort",
              }),
            ],
          });
        }
        function Ui() {
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Input",
                ),
              }),
              (0, e.jsx)("div", {
                className: qe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, o.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Input_Instructions",
                    (0, e.jsx)("a", {
                      href: `${y.TS.PARTNER_BASE_URL}doc/accessibility_features#input_recommendations`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: qe.Question,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Input_Question",
                ),
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc",
                ),
                id: "bAccessibilityKeyboardOnlyOption",
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc",
                ),
                id: "bAccessibilityMouseOnlyOption",
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc",
                ),
                id: "bAccessibilityTouchOnlyOption",
              }),
            ],
          });
        }
        function za() {
          const { currentValues: n, fnSetValue: t } = xs(),
            s = c.useId();
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents",
                ),
              }),
              (0, e.jsx)("div", {
                className: qe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Instructions",
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: s,
                className: qe.Question,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Question",
                ),
              }),
              (0, e.jsx)(en, {
                labelId: s,
                options: [
                  {
                    id: "no",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_No",
                    ),
                  },
                  {
                    id: "playable_without_quick_time_events",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoQTE",
                    ),
                  },
                  {
                    id: "playable_at_your_own_pace",
                    name: (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoTimedInput",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (n.bAccessibilityPlayableAtYourOwnPace)
                    return "playable_at_your_own_pace";
                  if (n.bAccessibilityPlayableWithoutQuicktimeEvents)
                    return "playable_without_quick_time_events";
                  if (
                    n.bAccessibilityPlayableAtYourOwnPace === !1 &&
                    n.bAccessibilityPlayableWithoutQuicktimeEvents === !1
                  )
                    return "no";
                },
                fnSetValues: (r) => {
                  r === "playable_at_your_own_pace" &&
                    (t("bAccessibilityPlayableAtYourOwnPace", !0),
                    t("bAccessibilityPlayableWithoutQuicktimeEvents", !0)),
                    r === "playable_without_quick_time_events" &&
                      (t("bAccessibilityPlayableAtYourOwnPace", !1),
                      t("bAccessibilityPlayableWithoutQuicktimeEvents", !0)),
                    r === "no" &&
                      (t("bAccessibilityPlayableAtYourOwnPace", !1),
                      t("bAccessibilityPlayableWithoutQuicktimeEvents", !1));
                },
              }),
            ],
          });
        }
        function Wi() {
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText",
                ),
              }),
              (0, e.jsx)("div", {
                className: qe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, o.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Instructions",
                    (0, e.jsx)("a", {
                      href: `${y.TS.PARTNER_BASE_URL}doc/accessibility_features#tts`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: qe.Question,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Question",
                ),
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc",
                ),
                id: "bAccessibilityChatTexttoSpeech",
              }),
              (0, e.jsx)(at, {
                name: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText",
                ),
                description: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc",
                ),
                id: "bAccessibilityChatSpeechtoText",
              }),
            ],
          });
        }
        function Vn() {
          return (0, e.jsxs)("div", {
            className: qe.WizardContainer,
            children: [
              (0, e.jsx)(os, {
                subtitle: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Summary",
                ),
              }),
              (0, e.jsx)("div", {
                className: qe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, o.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Summary_Instructions",
                  ),
                }),
              }),
              (0, e.jsxs)(g.dR, {
                children: [
                  (0, e.jsxs)(g.VP, {
                    children: [
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc",
                        ),
                        id: "bAccessibilityDifficultyLevels",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc",
                        ),
                        id: "bAccessibilitySaveAnytime",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls_Desc",
                        ),
                        id: "bAccessibilityBackgroundVolumeControls",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus_Desc",
                        ),
                        id: "bAccessibilityNarratedMenus",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound_Desc",
                        ),
                        id: "bAccessibilityStereoSound",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound_Desc",
                        ),
                        id: "bAccessibilitySurroundSound",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc",
                        ),
                        id: "bAccessibilityResizableUI",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc",
                        ),
                        id: "bAccessibilitySubtitles",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc",
                        ),
                        id: "bAccessibilityColorAlternatives",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc",
                        ),
                        id: "bAccessibilityContrastControls",
                      }),
                    ],
                  }),
                  (0, e.jsxs)(g.VP, {
                    children: [
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc",
                        ),
                        id: "bAccessibilityCameraComfort",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision_Desc",
                        ),
                        id: "bAccessibilityPlayableWithoutVision",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc",
                        ),
                        id: "bAccessibilityKeyboardOnlyOption",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc",
                        ),
                        id: "bAccessibilityMouseOnlyOption",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc",
                        ),
                        id: "bAccessibilityTouchOnlyOption",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents_Desc",
                        ),
                        id: "bAccessibilityPlayableWithoutQuicktimeEvents",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace_Desc",
                        ),
                        id: "bAccessibilityPlayableAtYourOwnPace",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc",
                        ),
                        id: "bAccessibilityChatTexttoSpeech",
                      }),
                      (0, e.jsx)(at, {
                        name: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText",
                        ),
                        description: (0, o.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc",
                        ),
                        id: "bAccessibilityChatSpeechtoText",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        const Va = { 2: [Wa, Ga, za] },
          Ka = 2;
        function Gi(n, t, s, r) {
          return (0, c.useMemo)(() => {
            if (n) return [Vn];
            if (!r)
              return [
                Ri,
                Oi,
                Wa,
                Fi,
                Hi,
                Ga,
                Ui,
                za,
                t ? Wi : void 0,
                Vn,
              ].filter((l) => !!l);
            const i = new Set();
            for (let l = s + 1; l <= Ka; l++)
              if (l in Va) for (const u of Va[l]) i.add(u);
            return [...i, Vn];
          }, [n, t, s, r]);
        }
        const $a = c.createContext(void 0);
        function xs() {
          return c.useContext($a);
        }
        function zi(n) {
          const t = c.useMemo(
            () => ({
              currentValues: n.currentValues,
              fnSetValue: n.fnSetValue,
              nPageIndex: n.nPageIndex,
              bEditMode: n.bEditMode,
            }),
            [n.currentValues, n.fnSetValue, n.nPageIndex, n.bEditMode],
          );
          return (0, e.jsx)($a.Provider, { value: t, children: n.children });
        }
        function Vi(n) {
          const {
              close: t,
              features: s,
              editMode: r,
              changedMode: i,
              isMultiplayer: l,
              nLastVersionCompleted: u,
            } = n,
            [m, h] = (0, c.useState)(0),
            C = Gi(
              r,
              l ||
                s.bAccessibilityChatSpeechtoText ||
                s.bAccessibilityChatTexttoSpeech,
              u,
              i,
            ),
            [b, A] = c.useState(s),
            P = () => h((Wt) => Wt - 1),
            G = () => h((Wt) => Wt + 1);
          let ue = P;
          m === 0 && (ue = t);
          let ze = G,
            he = (0, o.we)("#Wizard_NextButton");
          m === C.length - 1 &&
            ((ze = () => {
              $i(b), t();
            }),
            (he = (0, o.we)("#Wizard_SaveAndExitButton")));
          const Ee = (Wt, it) => {
              A((tn) => ({ ...tn, [Wt]: it }));
            },
            Pt = C[m];
          return (0, e.jsxs)(Gn.mt, {
            active: !0,
            className: qe.WizardModal,
            children: [
              (0, e.jsxs)(zi, {
                fnSetValue: Ee,
                currentValues: b,
                nPageIndex: m,
                bEditMode: r,
                children: [
                  (0, e.jsx)(Ki, { nPages: C.length }),
                  (0, e.jsx)(g.nB, {
                    className: qe.WizardBody,
                    children: (0, e.jsx)(Pt, {}),
                  }),
                ],
              }),
              (0, e.jsx)(g.CB, {
                className: qe.WizardButtons,
                onCancel: ue,
                strCancelText: (0, o.we)("#Wizard_BackButton"),
                onOK: ze,
                strOKText: he,
              }),
            ],
          });
        }
        function Ki(n) {
          const { nPages: t } = n,
            { nPageIndex: s } = xs(),
            r = (100 * (s + 1)) / (t + 1);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: qe.WizardTitle,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Title",
                ),
              }),
              (0, e.jsx)("div", {
                className: (0, U.A)(
                  qe.ProgressBar,
                  s == t - 1 && qe.ProgressBarComplete,
                ),
                children:
                  s < t - 1 &&
                  (0, e.jsx)("div", {
                    className: (0, U.A)(qe.ProgressBarFillComponent),
                    style: { width: r + "%" },
                  }),
              }),
            ],
          });
        }
        function os(n) {
          const { nPageIndex: t, bEditMode: s } = xs();
          return s
            ? null
            : (0, e.jsx)("div", {
                className: qe.StepRow,
                children: (0, e.jsxs)("div", {
                  className: qe.StepLabel,
                  children: [
                    (0, o.we)("#Wizard_StepNumber", t + 1),
                    n.subtitle && (0, e.jsx)(g.iK, { children: n.subtitle }),
                  ],
                }),
              });
        }
        function at(n) {
          const { currentValues: t, fnSetValue: s } = xs();
          return (0, e.jsx)(g.Yh, {
            label: (0, e.jsxs)("div", {
              className: qe.CheckboxComplexLabel,
              children: [
                (0, e.jsxs)("span", {
                  children: [
                    n.name,
                    " ",
                    n.tooltip &&
                      (0, e.jsx)(Js.o, {
                        customTooltip: !0,
                        tooltip: (0, e.jsx)(k.zQ, {
                          className: qe.WizardTooltip,
                          children: n.tooltip,
                        }),
                      }),
                  ],
                }),
                (0, e.jsx)("p", { children: n.description }),
              ],
            }),
            checked: t[n.id],
            onChange: (r) => s(n.id, r),
          });
        }
        function en(n) {
          const t = n.fnCalculateSelectedOption();
          return (0, e.jsx)(g.zW, {
            labelId: n.labelId,
            value: t,
            onChange: n.fnSetValues,
            children: n.options.map((s) =>
              (0, e.jsxs)(
                g.a,
                {
                  value: s.id,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, U.A)(
                        qe.RadioButton,
                        t == s.id && qe.Selected,
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: qe.OptionLabel,
                      children: (0, o.we)(s.name),
                    }),
                  ],
                },
                s.id,
              ),
            ),
          });
        }
        function wt(n, t) {
          const s = document.querySelector(
            `[name="app[classification][category][category_${n}]"]`,
          );
          (0, Ys.wT)(s, "Missing category input for", n),
            s && s.setAttribute("value", t ? "true" : "");
        }
        function $i(n) {
          wt(64, n.bAccessibilityResizableUI),
            wt(65, n.bAccessibilitySubtitles),
            wt(66, n.bAccessibilityColorAlternatives),
            wt(67, n.bAccessibilityCameraComfort),
            wt(68, n.bAccessibilityBackgroundVolumeControls),
            wt(69, n.bAccessibilityStereoSound),
            wt(70, n.bAccessibilitySurroundSound),
            wt(71, n.bAccessibilityNarratedMenus),
            wt(72, n.bAccessibilityChatSpeechtoText),
            wt(73, n.bAccessibilityChatTexttoSpeech),
            wt(74, n.bAccessibilityPlayableWithoutQuicktimeEvents),
            wt(75, n.bAccessibilityKeyboardOnlyOption),
            wt(76, n.bAccessibilityMouseOnlyOption),
            wt(77, n.bAccessibilityTouchOnlyOption),
            wt(78, n.bAccessibilityDifficultyLevels),
            wt(79, n.bAccessibilitySaveAnytime),
            wt(80, n.bAccessibilityPlayableAtYourOwnPace),
            wt(81, n.bAccessibilityPlayableWithoutVision),
            wt(82, n.bAccessibilityContrastControls),
            document
              .querySelector('[name="app[content][accessibilitywizard][v1]"]')
              ?.setAttribute("value", "true"),
            document
              .querySelector('[name="app[content][accessibilitywizard][v2]"]')
              ?.setAttribute("value", "true");
          const t = document.getElementById("submitBtn");
          t && t.click();
        }
        var Xi = a(70019),
          Mt = a.n(Xi),
          Yi = ((n) => (
            (n[(n.Closed = 0)] = "Closed"),
            (n[(n.Wizard = 1)] = "Wizard"),
            (n[(n.Edit = 2)] = "Edit"),
            (n[(n.Changed = 3)] = "Changed"),
            n
          ))(Yi || {});
        function Qi(n) {
          const {
              isMultiplayer: t,
              bWizardCompleted: s,
              nLastVersionCompleted: r,
              ...i
            } = n,
            l = Object.entries(i).some(
              ([h, C]) => h.startsWith("bAccessibility") && C,
            ),
            [u, m] = c.useState(0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              u !== 0 &&
                (0, e.jsx)(Vi, {
                  editMode: u === 2,
                  changedMode: u === 3,
                  close: () => m(0),
                  features: i,
                  isMultiplayer: t,
                  nLastVersionCompleted: r,
                }),
              (0, e.jsx)(Ji, {
                bWizardCompleted: s,
                nLastVersionCompleted: r,
                bHasAnyAccessibilityFeatures: l,
                setModalState: m,
                features: n,
              }),
            ],
          });
        }
        function Ji(n) {
          const {
            bHasAnyAccessibilityFeatures: t,
            bWizardCompleted: s,
            nLastVersionCompleted: r,
            setModalState: i,
            features: l,
          } = n;
          return t || s
            ? (0, e.jsx)(qi, {
                bHasAnyAccessibilityFeatures: t,
                onEdit: () => i(2),
                onStart: () => i(1),
                onChanged: () => i(3),
                features: l,
                nLastVersionCompleted: r,
              })
            : (0, e.jsx)(Zi, { onStart: () => i(1) });
        }
        function Zi(n) {
          return (0, e.jsxs)(g.nB, {
            children: [
              (0, e.jsx)(g.a3, {
                className: Mt().AccessibilityFeatureDescription,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_WizardPrompt_Desc",
                ),
              }),
              (0, e.jsx)(g.jn, {
                className: Mt().StartWizardButton,
                onClick: n.onStart,
                children: (0, o.we)(
                  "#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton",
                ),
              }),
            ],
          });
        }
        function qi(n) {
          return (0, e.jsxs)(g.nB, {
            children: [
              (0, e.jsx)(g.a3, {
                className: Mt().AccessibilityFeatureDescription,
                children: n.bHasAnyAccessibilityFeatures
                  ? (0, o.we)("#App_Landing_AccessibilityFeatures_Summary")
                  : (0, o.we)(
                      "#App_Landing_AccessibilityFeatures_Summary_NoFeatures",
                    ),
              }),
              n.bHasAnyAccessibilityFeatures &&
                (0, e.jsx)(el, { features: n.features, onEdit: n.onEdit }),
              (0, e.jsx)("div", {
                className: Mt().ButtonRow,
                children: (0, e.jsx)(g.jn, {
                  className: Mt().StartWizardButton,
                  onClick: n.onStart,
                  children: (0, o.we)(
                    "#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton",
                  ),
                }),
              }),
              Ka > n.nLastVersionCompleted &&
                (0, e.jsxs)("div", {
                  className: Mt().Updates,
                  children: [
                    (0, e.jsx)("div", {
                      className: Mt().NewBugContainer,
                      children: (0, e.jsx)("span", {
                        className: Mt().New,
                        children: (0, o.we)("#Callout_NEW"),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, o.we)(
                            "#App_Landing_AccessibilityFeatures_WizardPrompt_Update_Desc",
                          ),
                        }),
                        (0, e.jsxs)("div", {
                          className: Mt().UpdateButtonContainer,
                          children: [
                            (0, e.jsx)(g.jn, {
                              className: Mt().UpdatesWizardButton,
                              onClick: n.onChanged,
                              children: (0, o.we)(
                                "#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              children: (0, o.we)(
                                "#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton_Desc",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function el(n) {
          return (0, e.jsxs)("div", {
            className: Mt().AccessibilityFeatureInfoCtn,
            children: [
              (0, e.jsx)("div", {
                className: Mt().AccessibilityFeatureContent,
                children: (0, e.jsx)("div", {
                  className: Mt().PreviewContainer,
                  children: (0, e.jsx)(Li, {
                    features: n.features,
                    initialOpen: !0,
                  }),
                }),
              }),
              (0, e.jsxs)("div", {
                className: Mt().EditButton,
                onClick: n.onEdit,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, U.A)(Mt().Spacer, Mt().Top),
                  }),
                  (0, e.jsx)("div", {
                    className: Mt().EditButtonIcon,
                    children: (0, e.jsx)(M.ffu, {}),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, U.A)(Mt().Spacer, Mt().Bottom),
                  }),
                ],
              }),
            ],
          });
        }
        var Kn = a(82791),
          tl = a(90783);
        function sl(n) {
          return (0, e.jsxs)(et.dO, {
            children: [
              (0, e.jsx)(et.qh, {
                path: Xe.bI.GameEdit(`:action(${Xe.a3.join("|")})`, ":itemid"),
                children: (0, e.jsx)(Se._M, {
                  children: (0, e.jsx)(Qe.X, {
                    config: {
                      "storeadmin-releasedateinfo": (t) =>
                        (0, e.jsx)(Ke.M, { bIsGameEdit: !0, ...t }),
                      "storeadmin-controllersupportinfo": (t) =>
                        (0, e.jsx)(ge, { ...t }),
                      "storeadmin-app-description-editor": (t) =>
                        (0, e.jsx)(ke, { ...t }),
                      "storeadmin-app-extraassetslist": (t) =>
                        (0, e.jsx)(be.c$, { ...t }),
                      "storeadmin-season-pass-survey": (t) =>
                        (0, e.jsx)(yo, { ...t }),
                      "storeadmin-creator-home-display-edit": (t) =>
                        (0, e.jsx)(Ds, { ...t }),
                      "storeadmin-dlc-edit": (t) => (0, e.jsx)(wn, { ...t }),
                      "storeadmin-dlc-dependancy-edit": (t) =>
                        (0, e.jsx)(An, { ...t }),
                      "storeadmin-social-media-edit": (t) =>
                        (0, e.jsx)(Eo, { ...t }),
                      "storeadmin-anticheat-edit": (t) =>
                        (0, e.jsx)(Bo, { ...t }),
                      "storeadmin-graphicalassets-confirmdialog": (t) =>
                        (0, e.jsx)(zn, { ...t }),
                      "storeadmin-pinnedbundles-edit": (t) =>
                        (0, e.jsx)(Bn, { ...t }),
                      "storeadmin-purchaseoptionsorder-edit": (t) =>
                        (0, e.jsx)(zr, { ...t }),
                      "storeadmin-accessibilityfeatures": (t) =>
                        (0, e.jsx)(Qi, { ...t }),
                      "storeadmin-creator-home-edit": (t) =>
                        (0, e.jsx)(_i, { ...t }),
                      "storeadmin-app-screenshot-alttext": (t) =>
                        (0, e.jsx)(Si, { ...t }),
                      "storeadmin-creator-home-fixup": (t) =>
                        (0, e.jsx)(Pi, { ...t }),
                      "storeadmin-editions-editor": (t) =>
                        (0, e.jsx)(Ii.H, { ...t }),
                    },
                  }),
                }),
              }),
              (0, e.jsx)(et.qh, {
                path: Xe.bI.PackageEdit(
                  `:action(${Xe._h.join("|")})`,
                  ":itemid",
                ),
                children: (0, e.jsx)(Qe.X, {
                  config: {
                    "storeadmin-graphicalassets-confirmdialog": (t) =>
                      (0, e.jsx)(zn, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(et.qh, {
                path: Xe.bI.BundleEdit(
                  `:action(${Xe.Cg.join("|")})`,
                  ":itemid",
                ),
                children: (0, e.jsx)(Qe.X, {
                  config: {
                    "storeadmin-graphicalassets-confirmdialog": (t) =>
                      (0, e.jsx)(zn, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(et.qh, {
                path: Xe.bI.ReviewPriceProposals(),
                component: Wr,
              }),
              (0, e.jsx)(et.qh, {
                path: Xe.bI.PackageLanding(":packageid"),
                children: (0, e.jsx)(Qe.X, {
                  config: {
                    "packagelanding-nonappcontents-edit": (t) =>
                      (0, e.jsx)(Ko, { ...t }),
                    "packagelanding-packagepurchasedisplay": (t) =>
                      (0, e.jsx)(Zo, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(et.qh, {
                path: Xe.bI.FrontPageEdit(":clusterid"),
                children: (0, e.jsx)(Qe.X, {
                  config: {
                    "storeadmin-colors": (t) => (0, e.jsx)(Kn.Y, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(et.qh, {
                path: Xe.bI.FrontPageSteamChinaEdit(":clusterid"),
                children: (0, e.jsx)(Qe.X, {
                  config: {
                    "storeadmin-colors": (t) => (0, e.jsx)(Kn.Y, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(et.qh, {
                path: Xe.bI.ContentHubEditor(":suffix", ":clusterid"),
                children: (0, e.jsx)(Qe.X, {
                  config: {
                    "storeadmin-colors": (t) => (0, e.jsx)(Kn.Y, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(et.qh, { component: tl.a }),
            ],
          });
        }
      },
      16119: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { h: () => q });
        var e = a(7850),
          c = a(41735),
          o = a.n(c),
          Y = a(90626),
          M = a(72604),
          ee = a(44420),
          U = a(84676),
          L = a(58534),
          ne = a(8323),
          k = a(36707),
          y = a(18210),
          $ = a(3166),
          oe = a(52249),
          Ie = a.n(oe),
          Ne = a(85705);
        function q(E) {
          const {
              fnSetItemID: Q,
              strLabel: g,
              itemType: w,
              fnFilterID: Z,
              className: v,
              tooltip: ie,
              autoFocus: V,
              bIncludeRetired: N,
              bShowDLCToggle: T,
              bOnlyDLC: K,
              bRunQueryOnLoad: F,
              rgParentAppIDs: X,
            } = E,
            [D, z] = Y.useState(""),
            [_, x] = Y.useState(!1),
            [S, B] = Y.useState(!1),
            [J] = Y.useState(new ne.LU()),
            [de, ge] = Y.useState(new Array()),
            [Ae, Fe] = Y.useState(new Array()),
            [R, Te] = Y.useState(new Array()),
            Oe = Y.createRef(),
            fe = Y.createRef(),
            _e = (0, Y.useCallback)(
              async (Be, Le) => {
                B(!0);
                let Se = { json: 1, term: Be, bexcluderetired: !N },
                  ye = `${$.TS.PARTNER_BASE_URL}appsearch/suggestapps`;
                switch (w) {
                  case ee.c6.RD:
                    ye = `${$.TS.PARTNER_BASE_URL}admin/store/suggestpackage`;
                    break;
                  case ee.c6.xO:
                    ye = `${$.TS.PARTNER_BASE_URL}bundles/suggestbundle`;
                    break;
                  default:
                    K
                      ? (Se.includedlc = !0)
                      : Le === !1 && (Se.includedlc = !1),
                      X &&
                        ((Se.bfilterappids = !0),
                        (Se.rgParentAppIds = JSON.stringify(X)));
                    break;
                }
                const Me = await o().get(ye, {
                  params: Se,
                  withCredentials: !0,
                });
                Me?.status == 200 && Me.data?.success == M.R
                  ? Z
                    ? (ge(Me.data.matches?.filter((W) => Z(W.id)) || []),
                      Fe(
                        Me.data.package_matches?.filter((W) =>
                          Z(W.packageid),
                        ) || [],
                      ),
                      Te(
                        Me.data.bundle_matches?.filter((W) => Z(W.bundleid)) ||
                          [],
                      ))
                    : (ge(Me.data.matches || []),
                      Fe(Me.data.package_matches || []),
                      Te(Me.data.bundle_matches || []))
                  : (ge([]), Fe([]), Te([])),
                  B(!1);
              },
              [Z, w, N, K, X],
            ),
            me = (0, Y.useCallback)(
              (Be) => {
                x(Be), _e(Oe.current?.value, Be);
              },
              [_e, Oe],
            ),
            we = (0, Y.useCallback)(
              (Be) => {
                const Le = Be?.target?.value?.toLocaleLowerCase() ?? "";
                z(Le);
                const Se = 1e3,
                  ye = fe.current?.checked;
                J.Schedule(Se, () => _e(Le, ye));
              },
              [_e, J, fe],
            );
          Y.useEffect(() => {
            F && _e(D);
          }, []);
          let Ce;
          switch (w) {
            case ee.c6.RD:
              Ce = (0, y.we)("#StoreAdmin_Search_Placeholder_package");
              break;
            case ee.c6.xO:
              Ce = (0, y.we)("#StoreAdmin_Search_Placeholder_bundle");
              break;
            default:
              Ce = (0, y.we)("#StoreAdmin_Search_Placeholder");
          }
          const Ze = T && !K && w == ee.c6.qI;
          return (0, e.jsxs)("div", {
            className: v,
            children: [
              (0, e.jsxs)("div", {
                className: oe.AppSearchInputContainer,
                children: [
                  (0, e.jsx)(L.pd, {
                    type: "text",
                    ref: Oe,
                    className: oe.SearchInput,
                    label: g,
                    tooltip: ie,
                    placeholder: Ce,
                    onChange: we,
                    value: D,
                    bAlwaysShowClearAction: D.length > 0,
                    focusOnMount: V,
                  }),
                  Ze &&
                    (0, e.jsx)(L.Yh, {
                      ref: fe,
                      checked: _,
                      onChange: me,
                      className: oe.AppSearchDLCCheckbox,
                      label: (0, y.we)("#StoreAdmin_Search_IncludeDLC"),
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: oe.Results,
                children: [
                  S &&
                    (0, e.jsx)("div", {
                      className: oe.LoadingContainer,
                      children: (0, e.jsx)(Ne.k, { size: "small" }),
                    }),
                  de?.length > 0 &&
                    de.map((Be) =>
                      (0, e.jsx)(
                        O,
                        {
                          name: Be.match,
                          id: Be.id,
                          is_visible: !0,
                          type: ee.c6.qI,
                          fnSetItemID: () => {
                            ge([]), Q(Be.id, Be.itemid);
                          },
                        },
                        Be.id,
                      ),
                    ),
                  Ae?.length > 0 &&
                    Ae.map((Be) =>
                      (0, e.jsx)(
                        O,
                        {
                          name: Be.name,
                          id: Be.packageid,
                          type: ee.c6.RD,
                          is_visible: Be.is_visible,
                          fnSetItemID: () => {
                            Fe([]), Q(Be.packageid);
                          },
                        },
                        Be.packageid,
                      ),
                    ),
                  R?.length > 0 &&
                    R.map((Be) =>
                      (0, e.jsx)(
                        O,
                        {
                          name: Be.name,
                          id: Be.bundleid,
                          type: ee.c6.xO,
                          is_visible: Be.is_visible,
                          fnSetItemID: () => {
                            Te([]), Q(Be.bundleid);
                          },
                        },
                        Be.bundleid,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function O(E) {
          const { name: Q, id: g, type: w, is_visible: Z, fnSetItemID: v } = E,
            [ie] = (0, U.G6)(g, w, { include_assets: !0 });
          let V = "#DailyDeals_HeaderArtMissing";
          switch (w) {
            case ee.c6.RD:
              V = "#DailyDeals_PackageHeaderArtMissing";
              break;
            case ee.c6.xO:
              V = "#DailyDeals_BundleHeaderArtMissing";
              break;
          }
          return (0, e.jsxs)("div", {
            className: oe.ResultRow,
            onClick: () => v(),
            children: [
              (0, e.jsx)("div", {
                className: (0, k.A)(oe.AvatarImageCtn, "AvatarImageCtn"),
                children: (0, e.jsx)("img", {
                  src: ie?.GetAssets()?.GetHeaderURL(),
                  className: oe.AvatarImage,
                  alt: (0, y.we)(V),
                }),
              }),
              (0, e.jsxs)("div", {
                className: oe.GameName,
                children: [
                  !Z &&
                    (0, e.jsxs)("span", {
                      children: [(0, y.we)("#Sale_FeaturingHidden"), " "],
                    }),
                  Q,
                  w == ee.c6.RD ? ` (${g})` : "",
                ],
              }),
            ],
          });
        }
      },
      74685: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { KF: () => Z, Ot: () => w, c$: () => v, Hd: () => ie });
        var e = a(7850),
          c = a(12362),
          o = a(15024),
          Y = a(7502),
          M = a(52893),
          ee = a(90626),
          U = a(98724),
          L = a(79216),
          ne = a(4188),
          k = a(74827);
        function y(V) {
          const { nodes: N, marks: T } = V,
            K = (0, c.st)(
              c.I$,
              (X, D) => (
                D &&
                  D(
                    X.tr
                      .replaceSelectionWith(N.hard_break.createChecked())
                      .scrollIntoView(),
                  ),
                !0
              ),
            ),
            F = {
              "Mod-z": U.tN,
              "Mod-y": U.ZS,
              "Shift-Mod-z": U.ZS,
              Backspace: L.dv,
              Escape: c.hy,
              "Mod-Enter": K,
              "Shift-Enter": K,
              "Mod-b": (0, c.wh)(T.strong),
              "Mod-i": (0, c.wh)(T.italic),
              "Mod-u": (0, c.wh)(T.underline),
              "Mod-Shift-x": (0, c.wh)(T.strike),
              "Ctrl-Shift-s": (0, c.wh)(T.strike),
              Enter: (0, ne.wn)(N.list_item),
              "Mod-[": (0, ne.T2)(N.list_item),
              "Mod-]": (0, ne.$B)(N.list_item),
              "Ctrl-Shift-1": (0, c.y_)(N.heading, { level: 1 }),
              "Ctrl-Shift-2": (0, c.y_)(N.heading, { level: 2 }),
              "Ctrl-Shift-3": (0, c.y_)(N.heading, { level: 3 }),
              "Ctrl-Shift-4": (0, c.y_)(N.heading, { level: 4 }),
              "Ctrl-Shift-5": (0, c.y_)(N.heading, { level: 5 }),
              "Ctrl-Shift-7": (0, c.y_)(N.ordered_list),
              "Ctrl-Shift-8": (0, c.y_)(N.bullet_list),
              "Ctrl-Shift-0": (0, c.y_)(N.paragraph),
            };
          return (
            T.code && (F["Ctrl-Shift-c"] = (0, c.wh)(T.code)),
            N.code_block && (F["Alt-Ctrl-Shift-c"] = (0, c.y_)(N.code_block)),
            N.horizontal_rule &&
              (F["Mod-_"] = (X, D) => (
                D &&
                  D(
                    X.tr
                      .replaceSelectionWith(N.horizontal_rule.create())
                      .scrollIntoView(),
                  ),
                !0
              )),
            (0, Y.w)(F)
          );
        }
        function $(V, N) {
          return new L.fV(V, (T, K, F, X) =>
            T.tr.replaceWith(F, X, N.create()),
          );
        }
        function oe(V) {
          const { nodes: N, marks: T } = V;
          return (0, L.sM)({
            rules: [
              (0, L.tG)(
                /^(\d+)\.\s$/,
                N.ordered_list,
                (K) => ({ order: parseInt(K[1]) }),
                (K, F) => F.childCount + F.attrs.order == parseInt(K[1]),
              ),
              (0, L.tG)(/^\s*([-+*])\s$/, N.bullet_list),
              (0, k.OX)(/(?<!\w)\*([^*]+)\*/, T.strong),
              (0, k.OX)(/(?<!\w)_([^_]+)_/, T.italic),
              (0, k.OX)(/(?<!\w)~([^~]+)~/, T.strike),
              (0, k.OX)(/(?<!\w)`([^`]+)`/, T.code),
              (0, L.JJ)(/^```$/, N.code_block),
              (0, L.JJ)(/^(#{1,5})\s$/, N.heading, (K) => ({
                level: K[1].length,
              })),
              N.horizontal_rule && $(/^(\*\*\*|---|___)$/, N.horizontal_rule),
            ].filter(Boolean),
          });
        }
        var Ie = a(45772),
          Ne = a(74763);
        const q = new M.k_({
            props: {
              handlePaste(V, N, T) {
                const K = N.clipboardData
                  ?.getData("text/plain")
                  .replace(/\n/g, " ");
                if (K) {
                  const F = V.state.tr.insertText(K);
                  V.dispatch(F);
                }
                return !0;
              },
            },
          }),
          O = {
            Enter: () => !0,
            "Shift-Enter": () => !0,
            "Mod-Enter": () => !0,
          };
        function E(V) {
          return new Plugin({
            filterTransaction(N, T) {
              return N.doc.textContent.length <= V;
            },
          });
        }
        function Q(V) {
          const { nMaxChars: N } = V;
          return (
            useInstallPlugin(useMemo(() => E(N), [N])), jsx(React.Fragment, {})
          );
        }
        const g = ee.createContext(void 0);
        function w(V) {
          const { view: N, pmState: T, children: K } = V,
            F = ee.useMemo(() => ({ view: N, pmState: T }), [N, T]);
          return (0, e.jsx)(g.Provider, { value: F, children: K });
        }
        const Z = ee.memo(function (N) {
          const { schema: T, refOnUpdate: K, bSingleLine: F } = N;
          return (
            v(
              ee.useMemo(
                () =>
                  K &&
                  new M.k_({
                    view: (X) => ({
                      update: (...D) => K.current && K.current(...D),
                    }),
                  }),
                [K],
              ),
            ),
            v(ee.useMemo(() => (0, Y.w)(F ? O : {}), [F])),
            v(F ? q : void 0),
            v(ee.useMemo(() => (0, o.z)(), [])),
            v(ee.useMemo(() => y(T), [T])),
            v(ee.useMemo(() => (0, Y.w)(c.RV), [])),
            v(ee.useMemo(() => oe(T), [T])),
            null
          );
        });
        function v(V) {
          const { pmState: N } = ee.useContext(g);
          ee.useEffect(() => {
            if (!(!N || !V)) return N.InstallPlugin(V);
          }, [V, N]);
        }
        function ie() {
          return ee.useContext(g)?.view;
        }
      },
      74827: (re, Ue, a) => {
        "use strict";
        a.d(Ue, {
          Cd: () => M,
          Ce: () => ne,
          OX: () => Ie,
          bQ: () => Ne,
          c4: () => oe,
          gj: () => L,
          vn: () => ee,
          wt: () => y,
        });
        var e = a(79216),
          c = a(52893);
        function o(q, O) {
          const E = q.state;
          if (!q.state.plugins.includes(O)) {
            const Q = [...q.state.plugins, O];
            q.updateState(E.reconfigure({ plugins: Q }));
          }
        }
        function Y(q, O) {
          if (!q.isDestroyed) {
            const E = q.state,
              Q = E.plugins.filter((g) => g !== O);
            q.updateState(E.reconfigure({ plugins: Q }));
          }
        }
        function M(q, O) {
          const { from: E, $from: Q, to: g, empty: w } = q.selection;
          return w
            ? !!O.isInSet(q.storedMarks || Q.marks())
            : q.doc.rangeHasMark(E, g, O);
        }
        function ee(q, O, E) {
          const { parent: Q } = E,
            g = Q.childAfter(E.parentOffset),
            w = g.node?.marks.find((T) => T.type == O);
          if (!w) return;
          let Z = E.index() - 1,
            v = E.start() + g.offset;
          for (; Z >= 0 && w.isInSet(Q.child(Z).marks); )
            (v -= Q.child(Z).nodeSize), (Z -= 1);
          let ie = E.index() + 1,
            V = E.start() + g.offset + g.node.nodeSize;
          for (; ie < Q.childCount && w.isInSet(Q.child(ie).marks); )
            (V += Q.child(ie).nodeSize), (ie += 1);
          const N = q.doc.slice(v, V);
          return { from: v, to: V, slice: N, mark: w };
        }
        function U(q, O, E) {
          if (q.type !== O) return !1;
          if (E === void 0) return !0;
          for (const Q in E) if (E[Q] !== q.attrs[Q]) return !1;
          return !0;
        }
        function L(q, O, E) {
          let { $from: Q, to: g } = q.selection;
          for (let w = Q.depth; w > 0; w--) {
            if (g > Q.end(w)) return !1;
            const Z = Q.node(w);
            if (U(Z, O, E)) return !0;
          }
          return !1;
        }
        function ne(q, O, E) {
          for (let Q of O) if (L(q, Q, E)) return Q;
          return null;
        }
        function k(q, O, E) {
          const { $from: Q, to: g } = q.selection;
          for (let w = Q.sharedDepth(g); w > 0; w--) {
            const Z = Q.node(w);
            if (Z.type === O) return !!Z.attrs[E];
          }
          return !1;
        }
        function y(q, O, E) {
          const { $from: Q, to: g } = q.selection;
          for (let w = Q.sharedDepth(g); w > 0; w--) {
            const Z = Q.node(w);
            if (E === void 0 ? Z.type === O : Z.hasMarkup(O, E))
              return Q.before(w);
          }
        }
        function $(q, O) {
          return (E, Q) => {
            const g = y(E, q);
            if (g === void 0) return !1;
            if (Q) {
              const w = E.doc.nodeAt(g);
              if ((console.assert(!!w), !w)) return !1;
              Q(E.tr.setNodeMarkup(g, q, { ...w.attrs, [O]: !w.attrs[O] }));
            }
            return !0;
          };
        }
        function oe(q, O) {
          return (E, Q) => {
            const { $from: g } = E.selection;
            let w = null,
              Z = 0;
            for (let v = g.depth; v > 0; v--) {
              const ie = g.node(v);
              if (q.includes(ie.type)) {
                (w = ie), (Z = g.before(v));
                break;
              }
            }
            return w
              ? (Q && Q(E.tr.setNodeMarkup(Z, w.type, { ...w.attrs, ...O })),
                !0)
              : !1;
          };
        }
        function Ie(q, O, E = {}) {
          return new e.fV(q, (Q, g, w, Z) => {
            const v = E instanceof Function ? E(g) : E,
              ie = Q.tr;
            if (g[1]) {
              const V = w + g[0].indexOf(g[1]),
                N = V + g[1].length;
              N < Z && ie.delete(N, Z),
                V > w && ie.delete(w, V),
                (Z = w + g[1].length);
            }
            return ie.addMark(w, Z, O.create(v)), ie.removeStoredMark(O), ie;
          });
        }
        function Ne(q, O, E) {
          const Q = { left: O, top: E },
            g = q.posAtCoords(Q);
          if (g?.pos) {
            const w = q.state.doc.resolve(g.pos);
            q.dispatch(q.state.tr.setSelection(c.U3.near(w)));
          }
        }
      },
      95414: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { j: () => $, u: () => oe });
        var e = a(7850),
          c = a(90626),
          o = a(24660),
          Y = a(83482),
          M = a(72865),
          ee = a(77200),
          U = a(53113),
          L = a(68094),
          ne = a(72609),
          k = a(3166);
        function y(Ie) {
          if (Ie) {
            if ("appid" in Ie) return "app";
            if ("bundleid" in Ie) return "bundle";
            if ("packageid" in Ie) return "sub";
          }
        }
        function $(Ie) {
          const {
              id: Ne,
              hoverClassName: q,
              fnGetIDOverride: O,
              fnHoverState: E,
              disableScreenshots: Q,
              children: g,
            } = Ie,
            w = c.useRef(null),
            Z = c.useCallback(
              (ie) => {
                const V = y(Ne);
                V &&
                  (E && E(!0),
                  window.GameHover &&
                    (w.current &&
                      Q &&
                      (w.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(O ? O() : w.current, ie, "global_hover", {
                      type: V,
                      id: (0, L.G$)(Ne).id,
                      v6: 1,
                    })));
              },
              [E, O, Q, Ne],
            ),
            v = c.useCallback(
              (ie) => {
                y(Ne) &&
                  (E && ie.relatedTarget && E(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      O ? O() : w.current,
                      ie,
                      "global_hover",
                    ));
              },
              [Ne, E, O],
            );
          return (0, e.jsx)("div", {
            ref: w,
            className: q,
            onMouseEnter: Z,
            onMouseLeave: v,
            onFocus: Z,
            onBlur: v,
            children: g,
          });
        }
        function oe(Ie) {
          const {
              id: Ne,
              strExtraParams: q,
              fnOnClickOverride: O,
              strOverrideURL: E,
            } = Ie,
            Q = (0, M.n9)(),
            g = (0, ee.w)(),
            w = (0, U.NT)(
              E ||
                (Ne && "creatorid" in Ne
                  ? (0, Y.It)(
                      `${ne.TS.STORE_BASE_URL}curator/${((0, L.G$))(Ne).id}${q ? `?${q}` : ""}`,
                      Q,
                      g,
                    )
                  : (0, Y.It)(
                      `${ne.TS.STORE_BASE_URL}${y(Ne)}/${((0, L.G$))(Ne).id}${q ? `?${q}` : ""}`,
                      Q,
                      g,
                    )),
            );
          return (0, e.jsx)($, {
            ...Ie,
            children: (0, e.jsx)(o.Ii, {
              className: Ie.className,
              href: O ? void 0 : w,
              target: ne.TS.IN_CLIENT || O ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: O,
              children: Ie.children,
            }),
          });
        }
      },
      64388: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { s: () => Q });
        var e = a(7850),
          c = a(19298),
          o = a(64238),
          Y = a.n(o),
          M = a(36118),
          ee = a(24660),
          U = a(38566),
          L = a(54130),
          ne = a(90626),
          k = a(3166),
          y = a(88208);
        const $ = Object.assign(oe, { Root: Ie, Content: q });
        function oe(g) {
          const { children: w, className: Z, ...v } = g;
          return (0, e.jsx)($.Root, {
            ...v,
            children: (0, e.jsx)($.Content, { className: Z, children: w }),
          });
        }
        function Ie(g) {
          const {
              onClose: w,
              className: Z,
              navID: v,
              children: ie,
              allowScrollBehind: V,
              ...N
            } = g,
            [T, K] = ne.useState(!1),
            F = ne.useCallback((D) => {
              D &&
                (D.showModal(),
                D.ownerDocument.defaultView &&
                  K(
                    D.ownerDocument.body.scrollHeight >
                      D.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            X = ne.useCallback(
              (D) => {
                D.target == D.currentTarget && w("backdropclick");
              },
              [w],
            );
          return (0, e.jsx)(Ne, {
            navID: v ?? "ModalDialog",
            onClose: w,
            children: (0, e.jsx)("dialog", {
              ref: F,
              className: Y()(y.ModalDialog, !V && T && y.PreventScroll, Z),
              onClose: () => w("onclose"),
              onClick: X,
              ...N,
              children: (0, e.jsx)(L.q, { children: ie }),
            }),
          });
        }
        function Ne(g) {
          const { navID: w, onClose: Z, children: v } = g,
            ie = ne.useCallback(() => Z("cancelbutton"), [Z]),
            V = ne.useRef(void 0);
          return (
            (0, ee.O7)(V, !0, !0),
            (0, k.Qn)()
              ? (0, e.jsx)(U.D6, {
                  navID: w ?? "ModalDialog",
                  onCancelButton: ie,
                  modal: !0,
                  navTreeRef: V,
                  children: v,
                })
              : (0, e.jsx)(e.Fragment, { children: v })
          );
        }
        function q(g) {
          const { className: w, children: Z } = g;
          return (0, e.jsx)("div", {
            className: Y()(y.ModalDialogContent, w),
            onClick: (v) => v.stopPropagation(),
            children: Z,
          });
        }
        var O = a(83217),
          E = a.n(O);
        function Q(g) {
          const {
            onClose: w,
            className: Z,
            navID: v,
            children: ie,
            strTitle: V,
            ...N
          } = g;
          return (0, e.jsx)($, {
            onClose: w,
            navID: v ?? "SimpleModalDialog",
            ...N,
            children: (0, e.jsxs)("div", {
              className: Y()(Z, E().SimpleModalDialog),
              children: [
                " ",
                (0, e.jsxs)(c.Z, {
                  className: E().SimpleModalDialogHeader,
                  children: [
                    V &&
                      (0, e.jsx)("h2", {
                        className: E().SimpleModalDialogTitle,
                        children: V,
                      }),
                    (0, e.jsx)("button", {
                      onClick: (T) => (w("xclick"), T.preventDefault(), !1),
                      className: E().XButton,
                      children: (0, e.jsx)(M.tmm, {}),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: E().SimpleModalContentCtn,
                  children: ie,
                }),
              ],
            }),
          });
        }
      },
      78699: (re, Ue, a) => {
        "use strict";
        a.d(Ue, {
          Uh: () => M,
          VX: () => c,
          mn: () => U,
          nU: () => Y,
          pV: () => o,
        });
        var e = a(99412);
        function c(k, y) {
          const $ = (0, e.LgB)(y);
          return k ? k[$] : "";
        }
        function o(k, y, $) {
          const oe = (0, e.LgB)(y);
          return k[oe] != $ ? ((k[oe] = $), !0) : !1;
        }
        function Y(k, y) {
          const $ = (0, e.LgB)(y);
          return !!k?.[$];
        }
        function M(k) {
          if (!k) return 0;
          let y = 0;
          for (let $ = e.Bhc; $ < e.bP9; ++$) {
            const oe = (0, e.LgB)($);
            k[oe] && (y += 1);
          }
          return y;
        }
        function ee(k) {
          const y = new Map();
          for (let $ = k_ELanguage_English; $ < k_ELanguage_MAX; ++$) {
            const oe = ELanguagePchLanguage($);
            k[oe] && y.set(oe, k[oe]);
          }
          return y;
        }
        function U(k) {
          const y = new Array();
          for (let $ = e.Bhc; $ < e.bP9; ++$) {
            const oe = (0, e.LgB)($);
            k[oe] && y.push([oe, k[oe]]);
          }
          return y;
        }
        function L(k) {
          const y = InitLocalizableString([]);
          if (!k) return y;
          for (let $ = k_ELanguage_English; $ < k_ELanguage_MAX; ++$)
            Y(k, $) && (y[$] = c(k, $));
          return y;
        }
        function ne(k) {
          const y = {};
          if (!k) return y;
          for (
            let $ = k_ELanguage_English;
            $ < k_ELanguage_MAX && $ < k.length;
            ++$
          )
            k[$] && o(y, $, k[$]);
          return y;
        }
      },
      75806: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { z: () => g });
        var e = a(7850),
          c = a(41735),
          o = a.n(c),
          Y = a(90626),
          M = a(99412),
          ee = a(25279),
          U = a(6658),
          L = a(50109),
          ne = a(45737),
          k = a.n(ne),
          y = a(36118),
          $ = a(18210),
          oe = a(8743),
          Ie = a.n(oe),
          Ne = a(85599),
          q = a(11952);
        function O(V) {
          const { rgAssetURL: N, rgLang: T, bIsImage: K } = V,
            [F, X] = (0, Y.useState)([]);
          if (
            ((0, Y.useEffect)(() => {
              let z = !1;
              const _ = K ? E : Q;
              return (
                Promise.all(N.map((x) => _(x))).then((x) => {
                  z || X(x);
                }),
                () => {
                  z = !0;
                }
              );
            }, [N, K]),
            !F)
          )
            return (0, e.jsx)(Ne.t, {
              size: "small",
              string: "Checking Assets...",
            });
          const D = F.map((z, _) => (z ? -1 : _)).filter((z) => z !== -1);
          return D.length === 0
            ? (0, e.jsx)(q._, {
                bDone: !0,
                name: "Uploaded assets verified",
                tooltip:
                  "In the background we verified the assets by downloading from the CDN to verify they are present",
              })
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(q._, {
                    bDone: !1,
                    name: `${D.length} Asset(s) uploaded failed to fetch`,
                  }),
                  D.map((z) => ({ url: N[z], lang: T[z] })).map((z) =>
                    (0, e.jsx)(
                      q._,
                      {
                        bDone: !1,
                        name: `${(0, M.LgB)(z.lang)} - Not found`,
                        tooltip: `${z.url} not downloadable from the CDN`,
                      },
                      z.url,
                    ),
                  ),
                ],
              });
        }
        function E(V) {
          return new Promise((N) => {
            const T = new Image();
            (T.onload = () => N(!0)), (T.onerror = () => N(!1)), (T.src = V);
          });
        }
        function Q(V) {
          return new Promise((N) => {
            const T = document.createElement("video");
            (T.preload = "metadata"),
              (T.onloadedmetadata = () => N(!0)),
              (T.onerror = () => N(!1)),
              (T.src = V);
          });
        }
        function g(V) {
          const {
              rgAssetLangs: N,
              initialLang: T,
              fnGetAssetUrl: K,
              fnDeletAssetLang: F,
              imageClassname: X,
              fnDeleteAllAssets: D,
              showDeleteAll: z = !0,
              bVerifyAssets: _,
              bVideoAsset: x,
            } = V,
            [S, B] = Y.useState(T ?? L.O.Get().GetCurEditLanguage() ?? N[0]),
            [J, de] = Y.useState(K(S)),
            ge = Y.useMemo(() => [...N].sort(), [N]);
          Y.useEffect(() => {
            const R = K(S);
            R ? de(R) : ge.length > 0 ? B(ge[0]) : de(null);
          }, [S, K, ge]);
          const Ae = () => {
              D ? D() : ge.forEach((R) => F(R));
            },
            Fe = (0, Y.useMemo)(() => N.map((R) => K(R)), [K, N]);
          return (0, e.jsxs)("div", {
            className: k().UploadedImageDisplayCtn,
            children: [
              (0, e.jsx)("div", {
                className: k().UploaderLeftCol,
                children: (0, e.jsx)(Z, { curAssetURL: J, imageClassname: X }),
              }),
              (0, e.jsx)("div", {
                className: k().UploaderRightCol,
                children: (0, e.jsxs)("div", {
                  className: k().SectionCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: k().LangCountTitle,
                      children: (0, $.we)("#ImageUpload_LocalizedAssets"),
                    }),
                    (0, e.jsx)("div", {
                      className: k().LangSelectCtn,
                      children: ge.map((R) =>
                        (0, e.jsx)(
                          w,
                          {
                            language: R,
                            selectedLanguage: S,
                            setSelectedLanguage: B,
                            deleteLanguage: F,
                          },
                          R,
                        ),
                      ),
                    }),
                    z &&
                      !!ge.length &&
                      (0, e.jsx)("a", {
                        href: "#",
                        className: k().DeleteAll,
                        onClick: (R) => {
                          Ae(), R.preventDefault();
                        },
                        children: (0, $.we)("#Button_DeleteAll"),
                      }),
                    !!_ &&
                      (0, e.jsx)(O, {
                        rgAssetURL: Fe,
                        rgLang: N,
                        bIsImage: !x,
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        function w(V) {
          const {
              language: N,
              selectedLanguage: T,
              setSelectedLanguage: K,
              deleteLanguage: F,
            } = V,
            X = (0, M.LgB)(N);
          return (0, e.jsxs)(
            "div",
            {
              className: k().UploaderImgLang,
              children: [
                (0, e.jsx)("a", {
                  href: "#",
                  onClick: (D) => {
                    D.preventDefault(), K(N);
                  },
                  children:
                    N === T
                      ? (0, e.jsx)("span", {
                          className: k().LangSelected,
                          children: "" + X,
                        })
                      : (0, e.jsx)("span", { children: "" + X }),
                }),
                (0, e.jsx)("a", {
                  href: "#",
                  onClick: (D) => {
                    D.preventDefault(), F(N);
                  },
                  children: (0, e.jsx)(y.X, {}),
                }),
              ],
            },
            "image" + X,
          );
        }
        function Z(V) {
          const { curAssetURL: N, imageClassname: T } = V;
          if (!N)
            return (0, e.jsx)("div", {
              className: Ie().ArtNoArt,
              children: (0, $.we)("#ImageDisplay_NoAssetUploaded"),
            });
          const K = (0, U.yh)(N);
          return ee.Ho.includes(K)
            ? (0, e.jsx)(v, { ...V })
            : ee.x.includes(K)
              ? (0, e.jsx)(ie, {
                  className: T || Ie().ArtPreview,
                  strTextURL: N,
                })
              : (0, e.jsx)("img", { className: T || Ie().ArtPreview, src: N });
        }
        function v(V) {
          const { curAssetURL: N, imageClassname: T } = V,
            K = Y.useRef(void 0);
          return (
            Y.useEffect(() => {
              K.current && (K.current.load(), K.current.play());
            }, [N]),
            (0, e.jsx)("video", {
              ref: K,
              className: T || Ie().ArtPreview,
              autoPlay: !0,
              loop: !0,
              controls: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: N }),
            })
          );
        }
        function ie(V) {
          const { strTextURL: N, className: T } = V,
            [K, F] = Y.useState("");
          return (
            Y.useEffect(() => {
              o()
                .get(N)
                .then((X) => {
                  F(X.data);
                })
                .catch((X) => {
                  console.error(X);
                });
            }, [N]),
            (0, e.jsx)("textarea", {
              className: T,
              value: K,
              readOnly: !0,
              rows: 20,
            })
          );
        }
      },
      11952: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { _: () => U });
        var e = a(7850),
          c = a(71421),
          o = a(48576),
          Y = a.n(o),
          M = a(36707),
          ee = a(36118);
        function U(L) {
          const { bDone: ne, name: k, tooltip: y } = L;
          return (0, e.jsxs)("div", {
            className: Y().StatusLineItemCtn,
            children: [
              (0, e.jsx)("span", {
                className: (0, M.A)(
                  Y().StatusIcon,
                  ne ? Y().StatusIconDone : Y().StatusNotDone,
                ),
                children: ne ? (0, e.jsx)(ee.Jlk, {}) : (0, e.jsx)(ee.X, {}),
              }),
              (0, e.jsx)(c.he, { toolTipContent: y, children: k }),
            ],
          });
        }
      },
      79804: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { hA: () => X, ux: () => z });
        var e = a(7850),
          c = a(16512),
          o = a(19619),
          Y = a(71742),
          M = a(18210),
          ee = a(3166),
          U = a(25792),
          L = a(85599),
          ne = a(90626),
          k = a(56524),
          y = a.n(k),
          $ = a(19298),
          oe = a(95695),
          Ie = a.n(oe),
          Ne = a(51079),
          q = a(24660),
          O = a(72609),
          E = a(32093);
        function Q(_) {
          const { href: x, children: S, bAllowFocuseableAnchor: B, ...J } = _;
          return O.TS.EREALM === E.TU.k_ESteamRealmChina
            ? (0, e.jsx)("div", { ...J, children: S })
            : B
              ? (0, e.jsx)(q.Ii, { href: x, ...J, children: S })
              : (0, e.jsx)("a", { href: x, ...J, children: S });
        }
        var g = a(36707),
          w = a(19730),
          Z = a(53113);
        function v(_) {
          const {
            strURL: x,
            strName: S,
            strAvatarURL: B,
            nFollowers: J,
            strCreatorType: de,
            strTagLine: ge,
            strMemberListURL: Ae,
            followButton: Fe,
            bSmallFormat: R,
            bMinimalDisplay: Te,
          } = _;
          return (0, e.jsx)(Ne.Ay, {
            feature: "salecreatorhome",
            children: (0, e.jsxs)($.Z, {
              className: (0, g.A)(
                y().DevSummaryCtn,
                R ? y().SmallFormat : y().LargeFormat,
                Te ? y().MinimalDisplay : "",
              ),
              "flow-children": "row",
              children: [
                !!de &&
                  (0, e.jsx)("span", { className: y().Title, children: de }),
                (0, e.jsxs)("div", {
                  className: y().DevSummaryWidgetCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: y().DevSummaryBackground,
                      style: { backgroundImage: `url(${B} )` },
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, g.A)(y().DevSummaryContent),
                      children: [
                        (0, e.jsxs)("div", {
                          className: Ie().FlexRowContainer,
                          children: [
                            (0, e.jsx)(Q, {
                              href: (0, Z.k2)(x),
                              className: y().AvatarLink,
                              bAllowFocuseableAnchor: !0,
                              children: (0, e.jsx)("img", {
                                className: (0, g.A)(y().Avatar, "Avatar_Trgt"),
                                src: B,
                              }),
                            }),
                            (0, e.jsxs)("div", {
                              className: (0, g.A)(
                                Ie().FlexColumnContainer,
                                y().CreatorDescCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: (0, g.A)(
                                    y().CreatorTitleCtn,
                                    Ie().FlexColumnContainer,
                                  ),
                                  children: [
                                    (0, e.jsx)(Q, {
                                      href: (0, Z.k2)(x),
                                      className: y().CreatorNameName,
                                      children: S,
                                    }),
                                    !!ge &&
                                      (0, e.jsx)("div", {
                                        className: (0, g.A)(
                                          Ie().FlexColumnContainer,
                                          y().CreatorTagline,
                                        ),
                                        children: ge,
                                      }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  className: (0, g.A)({
                                    [Ie().FlexColumnContainer]: R,
                                    [Ie().FlexRowContainer]: !R,
                                    [y().SocialFollowersCtn]: !0,
                                  }),
                                  children: (0, e.jsxs)("div", {
                                    className: (0, g.A)(y().FollowBtnCtn),
                                    children: [
                                      Fe,
                                      (0, e.jsxs)("div", {
                                        className: (0, g.A)({
                                          [y().Followers]: !0,
                                        }),
                                        children: [
                                          (0, e.jsx)("span", {
                                            children: (0, M.we)(
                                              "#CreatorHome_JustFollowers",
                                            ),
                                          }),
                                          (0, e.jsx)("span", {
                                            className: y().FollowerCount,
                                            children: (0, w.Dq)(J),
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
                        !!Ae &&
                          (0, e.jsx)("a", {
                            href: Ae,
                            target: "_blank",
                            className: y().MembersListLink,
                            children: (0, M.we)("#ClanMembershipList"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var ie = a(54698);
        function V(_) {
          const { data: x } = useStoreItemBasicInfo(_ ? { appid: _ } : void 0);
          return React.useMemo(() => {
            if (!_) return [];
            if (!x) return;
            const S = [],
              B = new Set(),
              J = [
                ["developer", GetCreatorClanAccountIDs(x.developers)],
                ["publisher", GetCreatorClanAccountIDs(x.publishers)],
                ["franchise", GetCreatorClanAccountIDs(x.franchises)],
              ];
            for (const [de, ge] of J)
              for (const Ae of ge)
                B.has(Ae) ||
                  (B.add(Ae),
                  S.push({
                    appid: _,
                    name: "",
                    clan_account_id: Ae,
                    type: de,
                  }));
            return S;
          }, [_, x]);
        }
        function N(_) {
          const { rgCreators: x, renderCreator: S } = _,
            [B, J] = React.useState(0);
          if (!x.length) return null;
          if (x.length == 1) return jsx(Fragment, { children: S(x[0]) });
          const de = B % x.length;
          return jsxs("div", {
            className: creatorstyle.CreatorCarouselCtn,
            children: [
              S(x[de]),
              jsx("div", {
                className: creatorstyle.CreatorCarouselCrumbs,
                children: x.map((ge, Ae) =>
                  jsx(
                    FocusableDiv,
                    {
                      className: creatorstyle.CreatorCarouselCrumb,
                      onClick: () => J(Ae),
                      "aria-label": F(ge.type),
                      children: jsx(CarouselBreadcrumb, {
                        bIsActive: Ae == de,
                      }),
                    },
                    ge.clan_account_id,
                  ),
                ),
              }),
            ],
          });
        }
        function T(_) {
          const { creatorID: x, bSmallFormat: S } = _,
            { data: B } = useCreatorHomeByClanAccountID(x.clan_account_id);
          return B
            ? jsx(CreatorHomeEmbedDisplay, {
                strURL: GetCreatorHomeURL(B, x.type),
                strName: B.name ?? "",
                strAvatarURL: B.avatar_url_full_size ?? "",
                nFollowers: B.followers ?? 0,
                strCreatorType: F(x.type),
                followButton: jsx(CuratorFollowButton, {
                  clanAccountID: x.clan_account_id,
                  followType: "creatorhome",
                }),
                bSmallFormat: S,
              })
            : null;
        }
        function K(_) {
          const { appid: x, bSmallFormat: S } = _,
            B = V(x);
          return B
            ? jsx(N, {
                rgCreators: B,
                renderCreator: (J) => jsx(T, { creatorID: J, bSmallFormat: S }),
              })
            : jsx("div", {
                className: creatorstyle.DevSummaryWidgetCtn,
                children: jsx(Throbber, {}),
              });
        }
        function F(_) {
          switch (_) {
            case "publisher":
              return (0, M.we)("#CreatorHome_PublishedBy");
            case "franchise":
              return (0, M.we)("#CreatorHome_InFranchise");
          }
          return (0, M.we)("#CreatorHome_DevelopedBy");
        }
        function X(_) {
          const {
              creatorID: x,
              bShowTagline: S,
              bHideCreatorType: B,
              bSmallFormat: J,
              bHideFollowButton: de,
              bAddLinkToMemberList: ge,
              bMinimalDisplay: Ae,
            } = _,
            { creatorHome: Fe } = (0, c.FV)(x.clan_account_id),
            [R] = (0, o.L2)();
          return R || !Fe
            ? (0, e.jsx)("div", {
                className: k.DevSummaryWidgetCtn,
                children: (0, e.jsx)(L.t, {
                  string: (0, M.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              })
            : (0, e.jsx)(U.tH, {
                children: (0, e.jsx)(v, {
                  strURL: Fe.GetCreatorHomeURL(x.type),
                  strName: Fe.GetName(),
                  strAvatarURL: Fe.GetAvatarURLFullSize(),
                  nFollowers: Fe.GetNumFollowers(),
                  strCreatorType: B ? void 0 : F(x.type),
                  strTagLine: S ? Fe.GetTagLine() : void 0,
                  strMemberListURL: ge
                    ? ee.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      Fe.GetClanSteamID().ConvertTo64BitString() +
                      "/members/"
                    : void 0,
                  followButton: de
                    ? void 0
                    : (0, e.jsx)(ie.of, {
                        clanAccountID: x.clan_account_id,
                        creatorID: x,
                      }),
                  bSmallFormat: J,
                  bMinimalDisplay: Ae,
                }),
              });
        }
        function D(_) {
          const { appid: x, bSmallFormat: S } = _,
            B = useUniqueCreatorHomesForApp(x);
          return B
            ? jsx(ErrorBoundary, {
                children: jsx(CreatorHomeCarousel, {
                  rgCreators: B,
                  renderCreator: (J) =>
                    jsx(X, { creatorID: J, bSmallFormat: S }),
                }),
              })
            : jsx("div", {
                className: creatorstyle.DevSummaryWidgetCtn,
                children: jsx(Throbber, {}),
              });
        }
        function z(_) {
          const { clanInfo: x, bAddLinkToMemberList: S } = _;
          if (
            ((0, Y.wT)(
              x && x.clanAccountID,
              "CuratorHoverContent expect clanInfo, not supplied",
            ),
            !x)
          )
            return null;
          const B = {
            clan_account_id: x.clanAccountID,
            name: x.group_name,
            type: "developer",
          };
          return (0, e.jsx)("div", {
            className: k.CuratorHoverCtn,
            children: (0, e.jsx)(X, {
              creatorID: B,
              bSmallFormat: !0,
              bShowTagline: !0,
              bHideCreatorType: !0,
              bAddLinkToMemberList: S,
            }),
          });
        }
      },
      45247: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { W: () => Be });
        var e = a(7850),
          c = a(24660),
          o = a(19298),
          Y = a(20169),
          M = a(44420),
          ee = a(88743),
          U = a(94352),
          L = a(95414);
        function ne() {
          return { width: 460, height: 215 };
        }
        function k() {
          return { width: 616, height: 353 };
        }
        function y() {
          return { width: 231, height: 87 };
        }
        var $ = a(46727),
          oe = a(84607),
          Ie = a(41188),
          Ne = a(77459),
          q = a(72609);
        const O = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function E(W, pe) {
          let xe = "0000000000000000000000000000000000000000";
          typeof W == "string" ? (xe = W) : W && (xe = Q(W) || xe);
          let ke = ".jpg";
          xe === "0000000000000000000000000000000000000000" && (xe = O),
            xe.length == 44 && ((ke = xe.slice(-4)), (xe = xe.slice(0, 40)));
          let He = q.TS.AVATAR_BASE_URL;
          switch (
            (He ||
              ((He = q.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (He += xe.slice(0, 2) + "/")),
            (He += xe),
            pe)
          ) {
            case "X-Small":
            case "Small":
              break;
            case "Medium":
            case "MediumLarge":
              He += "_medium";
              break;
            case "Large":
            case "X-Large":
            case "FillArea":
              He += "_full";
              break;
          }
          return (He += ke), He;
        }
        function Q(W) {
          return W
            ? (typeof W[Symbol.iterator] == "function"
                ? Array.from(W)
                : Object.values(W).filter((xe) => typeof xe == "number")
              )
                .map((xe) => xe.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
        var g = a(40358),
          w = a(90626),
          Z = a(47729),
          v = a(18654),
          ie = a.n(v),
          V = a(29245),
          N = a(48357),
          T = a(81081),
          K = a(36707);
        function F(W) {
          const {
              id: pe,
              bHidePrice: xe,
              bShowInLibraryInsteadOfPrice: ke,
              bHidePlatforms: He,
              strClassName: De,
              creatorAccountID: Pe,
              bShowName: be,
              onlyOneDiscountPct: Ke,
              bShowAddToCart: Xe,
              bShowWishlistButton: et,
            } = W,
            Qe = (0, w.useRef)(null),
            [Ye, st] = (0, w.useState)(!1),
            { data: Ve } = (0, g.J$)(pe);
          if (
            ((0, w.useEffect)(() => {
              Qe.current && st(Qe.current.offsetWidth < 370);
            }, [Qe]),
            !pe || !("appid" in pe || "bundleid" in pe || "packageid" in pe))
          )
            return null;
          const tt = !!(et && Ve?.item_type == M.c6.qI),
            kt = !!(!Pe && !Xe && !tt && He && xe);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !kt &&
                (0, e.jsxs)("div", {
                  ref: Qe,
                  className: (0, K.A)(
                    ie().CapsuleBottomBar,
                    "CapsuleBottomBar",
                    De,
                  ),
                  children: [
                    Pe && (0, e.jsx)(D, { creatorAccountID: Pe, ...W }),
                    Xe &&
                      (0, e.jsx)(Z.h, {
                        id: pe,
                        className: (0, K.A)(
                          ie().MaxActionButtonWidth,
                          ie().AddToCartButton,
                        ),
                      }),
                    tt &&
                      "appid" in pe &&
                      (0, e.jsx)(T.r, {
                        appid: pe.appid,
                        className: (0, K.A)(
                          ie().MaxActionButtonWidth,
                          ie().AddToWishlistButton,
                        ),
                      }),
                    !He &&
                      (0, e.jsx)(V.Q, {
                        id: pe,
                        bMinimizePlatforms: Ye,
                        bHideWindows: !0,
                      }),
                    !xe &&
                      (0, e.jsx)("span", {
                        className: ie().BottomBarPriceInfo,
                        children: (0, e.jsx)(N.NF, {
                          id: pe,
                          bShowInLibrary: ke,
                          onlyOneDiscountPct: Ke,
                        }),
                      }),
                  ],
                }),
              be && (0, e.jsx)(X, { id: pe }),
            ],
          });
        }
        function X(W) {
          const { id: pe } = W,
            { data: xe } = (0, g.J$)(pe);
          return xe?.name
            ? (0, e.jsx)("div", {
                className: ie().CapsuleName,
                children: xe.name,
              })
            : null;
        }
        function D(W) {
          const { creatorAccountID: pe, strClassName: xe } = W,
            ke = (0, w.useMemo)(() => ({ creatorid: pe }), [pe]),
            { data: He } = (0, g.J$)(ke),
            { data: De } = (0, g.lv)(ke);
          if (!He) return null;
          const Pe = E(De?.clan_avatar, "Medium"),
            be = He.name || "";
          return (0, e.jsxs)("div", {
            className: (0, K.A)(ie().BottomCreatorRow, xe),
            children: [
              (0, e.jsx)("img", {
                className: (0, K.A)(ie().CreatorLogo),
                src: Pe,
                alt: be,
              }),
              (0, e.jsx)("span", { className: ie().CreatorName, children: be }),
            ],
          });
        }
        var z = a(21721),
          _ = a(87249),
          x = a(29522),
          S = a(72865),
          B = a(24179),
          J = a(83482),
          de = a(33924),
          ge = a(78069),
          Ae = a(54603),
          Fe = a(21770),
          R = a(77200),
          Te = a(18210),
          Oe = a(53113),
          fe = a(3166),
          _e = a(91291),
          me = a.n(_e),
          we = a(3348),
          Ce = a(47875);
        const Ze = "capsule_index_";
        function Be(W) {
          const {
              capsule: pe,
              bShowParentApp: xe,
              elElementToAppendToHover: ke,
              index: He,
              navKey: De,
              bHideStoreHover: Pe,
              onlyOneDiscountPct: be,
              bPreferDemoStorePage: Ke,
              bShowEarlyAccessBanner: Xe,
            } = W,
            et = (0, fe.Qn)(),
            [Qe, Ye] = w.useState(!1),
            st = (0, ee.rt)(pe),
            { data: Ve } = (0, g.J$)(st),
            tt = (0, x.$5)(xe ? Ve?.related_items?.parent_appid : void 0),
            { data: kt } = (0, g.J$)(tt);
          if (!Ve || !st) return null;
          const ft = !!kt && !!tt,
            _t = (0, e.jsx)(Se, {
              ...W,
              strExtraParams: W.strExtraParams,
              id: st,
              bIsHovered: Qe,
              bHasParentAppToDisplay: ft,
              onlyOneDiscountPct: be,
              bShowEarlyAccessBanner: Xe,
              bUsePanel: !Pe && !et,
            });
          return (0, e.jsxs)(o.Z, {
            className: (0, K.A)({
              [ie().OuterCapsuleContainer]: !0,
              [Ze + He]: He == 0,
            }),
            navEntryPreferPosition: Y.iU.PREFERRED_CHILD,
            navKey: De,
            children: [
              (0, e.jsxs)(Ae.oj, {
                appid: Ve.appid,
                children: [
                  Pe
                    ? (0, e.jsx)("div", {
                        onMouseEnter: () => Ye(!0),
                        onMouseLeave: () => Ye(!1),
                        children: _t,
                      })
                    : (0, e.jsx)(U.Q, {
                        className: ie().CapsuleContainer,
                        id: st,
                        elElementToAppend: W.elElementToAppendToHover,
                        bShowDemoButton: W.bShowDemoButton,
                        bPreferDemoStorePage: W.bPreferDemoStorePage,
                        bShowDeckCompatibilityDialog:
                          W.bShowDeckCompatibilityDialog,
                        bHidePrice: W.bHidePrice,
                        bUseSubscriptionLayout: W.bUseSubscriptionLayout,
                        strExtraParams: W.strExtraParams,
                        nCreatorAccountID: W.creatorAccountID,
                        nWidthMultiplier: W.nWidthMultiplier,
                        bShowIgnoreButton: W.bShowIgnoreButton,
                        bShowDescription: W.bShowDescriptionInHover,
                        children: _t,
                      }),
                  !!ke && (0, e.jsx)(e.Fragment, { children: ke }),
                ],
              }),
              ft &&
                (0, e.jsx)(Le, {
                  strExtraParams: W.strExtraParams,
                  parentID: tt,
                  parentStoreItemDefaultInfo: kt,
                  childAppType: Ve.type,
                  bPreferDemoStorePage: !!Ke,
                }),
            ],
          });
        }
        function Le(W) {
          const {
              strExtraParams: pe,
              parentID: xe,
              parentStoreItemDefaultInfo: ke,
              childAppType: He,
              bPreferDemoStorePage: De,
            } = W,
            Pe = (0, S.n9)(),
            be = (0, fe.Qn)(),
            { data: Ke } = (0, g.lv)(xe);
          return Ke
            ? (0, e.jsx)(c.ml, {
                className: ie().CapsuleParentInfo,
                ...(0, ge.S)(ke, Pe, be, De, pe),
                children: (0, e.jsxs)(Ae.oj, {
                  appid: ke.appid,
                  children: [
                    (0, e.jsx)("div", {
                      className: ie().ParentType,
                      children: (0, Te.we)(
                        He == M.uE.Ov
                          ? "#SalePage_ParentApp_SoundTrack"
                          : "#SalePage_ParentApp_DLC",
                      ),
                    }),
                    (0, e.jsx)(L.u, {
                      id: xe,
                      strExtraParams: pe,
                      children: (0, e.jsx)("img", {
                        loading: "lazy",
                        className: de.AppCapsuleImage,
                        alt: ke.name || "",
                        src: (0, z.b0)(Ke, "small_capsule"),
                        ...y(),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function Se(W) {
          const {
              id: pe,
              bHideStatusBanners: xe,
              bUsePanel: ke,
              strExtraParams: He,
              index: De,
              imageType: Pe,
              bHasParentAppToDisplay: be,
              bIsHovered: Ke,
              strDoubleCapsuleMessage: Xe,
              bPreferDemoStorePage: et,
              bShowEarlyAccessBanner: Qe,
              bPreferAssetWithoutOverride: Ye,
            } = W,
            st = (0, S.n9)(),
            Ve = (0, R.w)(),
            tt = (0, x._Z)(pe),
            { data: kt } = (0, g.J$)(pe);
          if (!kt) return null;
          const ft = ke
              ? void 0
              : (0, Oe.NT)(
                  (0, J.It)(
                    `${(0, Ce._)(kt, et)}${He ? `?${He}` : ""}`,
                    st,
                    Ve,
                  ),
                ),
            _t = ke ? o.Z : c.Ii,
            Lt = !!Xe;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, K.A)({ [me().TwoWidthCtn]: Lt }),
                children: [
                  (0, e.jsxs)(_t, {
                    href: ft,
                    style: { display: "block", cursor: "pointer" },
                    className: (0, K.A)({ [me().TwoWidthCapsule]: Lt }),
                    preferredFocus: be,
                    focusable: !0,
                    children: [
                      (0, e.jsx)($.V, {
                        appids: tt,
                        hide_status_banners: xe,
                        show_early_access: Qe,
                      }),
                      Pe != "none" &&
                        (0, e.jsx)(oe.a, {
                          imageType: Pe,
                          id: pe,
                          bPreferAssetWithoutOverride: Ye,
                        }),
                      (0, e.jsx)(Fe.J, { id: pe }),
                      (0, e.jsx)(_.mj, {
                        id: pe,
                        active: Ke,
                        bIsHoverMode: !0,
                      }),
                    ],
                  }),
                  Lt &&
                    (0, e.jsx)(ye, {
                      id: pe,
                      strDoubleCapsuleMessage: Xe,
                      index: De,
                    }),
                ],
              }),
              (0, e.jsx)(Me, { ...W }),
            ],
          });
        }
        function ye(W) {
          const { id: pe, strDoubleCapsuleMessage: xe, index: ke } = W,
            { data: He } = (0, g.by)(pe),
            { data: De } = (0, g.xz)(pe);
          return (0, e.jsxs)("div", {
            className: (0, K.A)(me().TwoWidthSideInfo, "TwoWidthSideInfo"),
            children: [
              (0, e.jsx)("div", { className: me().Reason, children: xe }),
              (0, e.jsx)("div", {
                className: me().StoreSaleItemRelease,
                children: (0, e.jsx)("span", {
                  children: He ? (0, we.CC)(He) : "",
                }),
              }),
              (0, e.jsx)(Ie.n, {
                bHideTitle: !0,
                rgTagIDs: De?.map((Pe) => Pe.tagid) || [],
                instanceNum: ke,
              }),
            ],
          });
        }
        function Me(W) {
          const {
              id: pe,
              bHidePriceIfOwned: xe,
              bHideStatusBanners: ke,
              bUseSubscriptionLayout: He,
              elElementToAppendToHover: De,
              bHidePrice: Pe,
              bHidePlatforms: be,
              creatorAccountID: Ke,
              bIsHovered: Xe,
              onlyOneDiscountPct: et,
              strDoubleCapsuleMessage: Qe,
            } = W,
            { data: Ye } = (0, g.J$)(pe),
            { bIsOwned: st } = (0, B.ZJ)(pe),
            Ve = st && !ke;
          if (He && Ye && Ye.item_type == M.c6.qI && Ye.appid)
            return (0, e.jsx)(Ne.E, { appid: Ye.appid, bIsMuted: Xe });
          if (De) return null;
          const tt = !!(st && xe);
          return (0, e.jsx)(F, {
            id: pe,
            bHidePrice: Pe,
            bShowInLibraryInsteadOfPrice: tt,
            bHidePlatforms: be,
            creatorAccountID: Ke,
            bShowName: W.bShowName,
            onlyOneDiscountPct: et,
            bShowWishlistButton: !!Qe,
          });
        }
      },
      81081: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { _: () => w, r: () => g });
        var e = a(7850),
          c = a(44420),
          o = a(29522),
          Y = a(40358),
          M = a(72865),
          ee = a(24179),
          U = a(54528),
          L = a(96362),
          ne = a(90626),
          k = a(83482),
          y = a(18654),
          $ = a.n(y),
          oe = a(85705),
          Ie = a(36118),
          Ne = a(71421),
          q = a(36707),
          O = a(18210),
          E = a(3166),
          Q = a(89926);
        function g(ie) {
          const { appid: V, className: N, bTextMode: T } = ie,
            K = (0, o.$5)(V),
            { data: F } = (0, Y.J$)(K),
            { data: X } = (0, Y.by)(K);
          return (0, e.jsx)(w, {
            appid: V,
            bIsFree: !!F?.is_free,
            bIsComingSoon: !!X?.is_coming_soon,
            bTextMode: T,
            className: N,
          });
        }
        function w(ie) {
          const [V, N] = ne.useState(!1),
            T = (0, M.n9)(),
            {
              appid: K,
              bIsFree: F,
              bIsComingSoon: X,
              className: D,
              bTextMode: z,
            } = ie,
            _ = (0, o.$5)(K),
            { bIsOwned: x } = (0, ee.ZJ)(_),
            S = (0, U.bB)(K),
            { mutateAsync: B } = (0, L.s)(K, !S, (0, k.L3)(T)),
            { elDialogElement: J, fnShowLogonDialog: de } = (0, Q.l)(),
            ge = async () => {
              if (!E.iA.logged_in) {
                de();
                return;
              }
              V || (N(!0), await B(), N(!1));
            };
          if (x || (!X && F))
            return F ? (0, e.jsx)(Z, { possibleDemoAppID: K }) : null;
          let Ae = null;
          return (
            V && !z
              ? (Ae = (0, e.jsx)(oe.k, { size: 18 }))
              : S
                ? S &&
                  (Ae = z ? (0, O.we)("#OnWishlist") : (0, e.jsx)(Ie.qnF, {}))
                : (Ae = z
                    ? (0, O.we)("#wishlist_add_to_wishlist")
                    : (0, e.jsx)(Ie.T4m, {})),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(Ne.he, {
                  toolTipContent: (0, O.we)("#AddToWishlist_ttip"),
                  children: (0, e.jsx)("div", {
                    className: (0, q.A)($().WishList, D),
                    onClick: ge,
                    children: Ae,
                  }),
                }),
                J,
              ],
            })
          );
        }
        function Z(ie) {
          const { possibleDemoAppID: V, className: N } = ie,
            T = (0, o.$5)(V),
            { data: K } = (0, Y.J$)(T);
          return K &&
            (K.type == c.uE.ue || K.type == c.uE.Vi) &&
            K.related_items?.parent_appid
            ? (0, e.jsx)(v, {
                parentAppID: K.related_items?.parent_appid,
                className: N,
              })
            : null;
        }
        function v(ie) {
          const { parentAppID: V, className: N } = ie,
            T = (0, o.$5)(V),
            { data: K } = (0, Y.J$)(T),
            { data: F } = (0, Y.by)(T);
          return !K || !F
            ? null
            : (0, e.jsx)(w, {
                appid: V,
                bIsComingSoon: !!F.is_coming_soon,
                bIsFree: !!K.is_free,
                className: N,
              });
        }
      },
      59490: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { p: () => L });
        var e = a(7850),
          c = a(90626),
          o = a(76559),
          Y = a(54407),
          M = a(15736),
          ee = a.n(M),
          U = a(3166);
        function L(ne) {
          const {
              accountID: k,
              bHideWhenNotAvailable: y,
              bHideName: $,
              bLink: oe = !0,
            } = ne,
            [Ie] = (0, Y.KT)(k),
            Ne = (0, Y.KM)(k),
            q = c.useMemo(() => o.b.InitFromAccountID(k), [k]),
            O = `${U.TS.COMMUNITY_BASE_URL}profiles/${q.ConvertTo64BitString()}`,
            E = oe ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: Ie
              ? (0, e.jsxs)(E, {
                  href: oe ? O : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: M.SmallAvatar,
                      src: Ie.avatar_url,
                      "data-miniprofile": "s" + q.ConvertTo64BitString(),
                    }),
                    !$ &&
                      (0, e.jsx)("span", {
                        children: Ne
                          ? `${Ne} (${Ie.persona_name})`
                          : Ie.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !y && (0, e.jsx)("span", { children: k }),
                }),
          });
        }
      },
      83085: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { Xv: () => E, pw: () => Q, Y0: () => g });
        var e = a(7850),
          c = a(71742),
          o = a(74432),
          Y = a(74685),
          M = a(52893),
          ee = a(29287),
          U = a(90626);
        function L(X, D = "PlaceholderPlugin") {
          const [z, _] = U.useState([]),
            [x] = U.useState(
              () =>
                new M.k_({
                  key: new M.hs(D),
                  state: {
                    init() {
                      return ee.zF.empty;
                    },
                    apply(Ae, Fe) {
                      Fe = Fe.map(Ae.mapping, Ae.doc);
                      const R = Ae.getMeta(this) || [];
                      for (const Te of R)
                        if (Te?.add) {
                          const { id: Oe, data: fe } = Te.add,
                            _e = (Ce, Ze) => {
                              const Be = document.createElement(X);
                              return (
                                _((Le) => [
                                  ...Le,
                                  { id: Oe, element: Be, data: fe },
                                ]),
                                Be
                              );
                            },
                            me = (Ce) => {
                              _((Ze) => Ze.filter((Be) => Be.element != Ce));
                            },
                            we = ee.NZ.widget(Te.add.pos, _e, {
                              id: Oe,
                              destroy: me,
                            });
                          Fe = Fe.add(Ae.doc, [we]);
                        } else
                          Te?.remove &&
                            (Fe = Fe.remove(
                              Fe.find(
                                void 0,
                                void 0,
                                (Oe) => Oe.id == Te.remove.id,
                              ),
                            ));
                      return Fe;
                    },
                  },
                  props: {
                    decorations(Ae) {
                      return this.getState(Ae);
                    },
                  },
                }),
            );
          (0, Y.c$)(x);
          const S = (0, Y.Hd)(),
            B = U.useRef(0),
            J = U.useCallback(
              (Ae, Fe, R) => {
                const Te = `${D}_${B.current++}`;
                let Oe = R || S.state.tr;
                Fe === void 0 &&
                  (Oe.selection.empty || Oe.deleteSelection(),
                  (Fe = Oe.selection.from));
                const fe = R?.getMeta(x) || [];
                return (
                  Oe.setMeta(x, [
                    ...fe,
                    { add: { id: Te, pos: Fe, data: Ae } },
                  ]),
                  R || S.dispatch(Oe),
                  Te
                );
              },
              [x, D, S],
            ),
            de = U.useCallback(
              (Ae) => {
                const R = x
                  .getState(S.state)
                  ?.find(void 0, void 0, (Te) => Te.id == Ae);
                return R?.length ? R[0].from : void 0;
              },
              [S, x],
            ),
            ge = U.useCallback(
              (Ae, Fe) => {
                const R = de(Ae);
                return R
                  ? (Fe
                      ? S.dispatch(
                          S.state.tr
                            .replaceWith(R, R, Fe)
                            .setMeta(x, [{ remove: { id: Ae } }]),
                        )
                      : S.dispatch(
                          S.state.tr.setMeta(x, [{ remove: { id: Ae } }]),
                        ),
                    !0)
                  : !1;
              },
              [x, de, S],
            );
          return {
            placeholderElements: z,
            createPlaceholder: J,
            findPlaceholder: de,
            replacePlaceholder: ge,
          };
        }
        var ne = a(72739),
          k = a(1880),
          y = a(69168),
          $ = a(85599),
          oe = a(8323),
          Ie = a(18210),
          Ne = a(95603),
          q = a(64868),
          O = a(73309);
        function E(X) {
          const {
              children: D,
              ProcessFileUpload: z,
              FetchImageURL: _,
              bAllowImageHotLinking: x = !1,
            } = X,
            [S] = U.useState(() => ({ manager: new v(z, _, x) })),
            { manager: B } = S;
          return (
            B.SetProps(z, _, x),
            (0, e.jsxs)(V.Provider, {
              value: S,
              children: [
                (0, e.jsx)(T, { manager: B }),
                (0, e.jsx)(K, { manager: B, children: D }),
              ],
            })
          );
        }
        const Q = U.memo(function (D) {
          const { nodeType: z } = D,
            _ = N(),
            {
              placeholderElements: x,
              createPlaceholder: S,
              replacePlaceholder: B,
            } = L("span", "FileUploadPlaceholder");
          F(_, z);
          const J = (0, Y.Hd)();
          return (
            U.useEffect(() => _.RegisterEditor(J, S, B), [_, J, S, B]),
            (0, e.jsx)(e.Fragment, {
              children: x.map(({ id: de, element: ge, data: Ae }) =>
                (0, e.jsx)(Z, { element: ge, data: Ae }, de),
              ),
            })
          );
        });
        function g(X, D) {
          const z = N(),
            _ = U.useCallback(
              (x) => {
                for (const S of x) z.UploadFile(S);
                X && X();
              },
              [z, X],
            );
          return (0, Ne.Ss)(_, { multiple: !0, accept: D });
        }
        class w extends Error {
          constructor(D) {
            super(D);
          }
        }
        function Z(X) {
          const { element: D, data: z } = X,
            _ = "file" in z ? z.file : void 0,
            x = U.useMemo(() => _ && URL.createObjectURL(_), [_]),
            S = "url" in z ? z.url : x,
            B = _?.type.startsWith("video/");
          return ne.createPortal(
            (0, e.jsxs)("span", {
              className: O.FileUploadPlaceholder,
              children: [
                (0, e.jsx)("div", {
                  className: O.ThrobberCtn,
                  children: (0, e.jsxs)("div", {
                    className: O.ThrobberRow,
                    children: [
                      (0, e.jsx)("div", {
                        className: O.Throbber,
                        children: (0, e.jsx)($.t, {
                          size: "medium",
                          position: "center",
                        }),
                      }),
                      (0, Ie.we)("#Prosemirror_FileUpload_Uploading"),
                    ],
                  }),
                }),
                !B && (0, e.jsx)("img", { src: S, className: O.PendingImage }),
                B &&
                  (0, e.jsx)("video", {
                    src: S,
                    className: O.PendingImage,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    autoPlay: !0,
                  }),
              ],
            }),
            D,
          );
        }
        class v {
          m_fnProcessFileUpload;
          m_fnFetchImageURL;
          m_bAllowImageHotLinking;
          m_errors = (0, oe.Jc)([]);
          m_view;
          m_fnCreatePlaceholder;
          m_fnReplacePlaceholder;
          constructor(D, z, _) {
            (this.m_fnProcessFileUpload = D),
              (this.m_fnFetchImageURL = z),
              (this.m_bAllowImageHotLinking = _);
          }
          SetProps(D, z, _) {
            (this.m_fnProcessFileUpload = D),
              (this.m_fnFetchImageURL = z),
              (this.m_bAllowImageHotLinking = _),
              (0, c.wT)(
                !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
                "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
              );
          }
          RegisterEditor(D, z, _) {
            return (
              (0, c.wT)(!this.m_view, "Duplicate registration"),
              (this.m_view = D),
              (this.m_fnCreatePlaceholder = z),
              (this.m_fnReplacePlaceholder = _),
              () => {
                this.m_view == D &&
                  this.m_fnCreatePlaceholder == z &&
                  this.m_fnReplacePlaceholder == _ &&
                  ((this.m_view = void 0),
                  (this.m_fnCreatePlaceholder = void 0),
                  (this.m_fnReplacePlaceholder = void 0));
              }
            );
          }
          AddError(D) {
            this.m_errors.Set([...this.m_errors.Value, D]);
          }
          GetErrors() {
            return this.m_errors;
          }
          ClearErrors() {
            this.m_errors.Set([]);
          }
          GetViewPosition(D, z) {
            return this.m_view?.posAtCoords({ left: D, top: z })?.pos;
          }
          async UploadFile(D, z) {
            (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
              this.AddError(
                "Upload File: No editor registered to handle file upload",
              );
            const _ = this.m_fnCreatePlaceholder({ file: D }, z);
            return this.ProcessFile(D, _);
          }
          BAllowImageHotLinking() {
            return this.m_bAllowImageHotLinking;
          }
          QueueUploadFileByURL(D, z, _) {
            if (
              ((!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
                this.AddError(
                  "QueueUploadFile: No editor registered to handle file upload",
                ),
              console.log(`QueueUploadFileByURL: ${D} at pos ${z}`),
              D.startsWith("data:"))
            ) {
              const x = this.m_fnCreatePlaceholder({ url: D }, z, _);
              return this.ProcessDataURL(D, x), !0;
            } else if (this.m_fnFetchImageURL) {
              const x = this.m_fnCreatePlaceholder({ url: D }, z, _);
              return this.FetchURLAndProcess(D, x), !0;
            } else
              return (
                (0, c.wT)(
                  this.m_bAllowImageHotLinking,
                  "A URL was posted but we don't have a fnFetchImageURL to process it",
                ),
                !1
              );
          }
          async ProcessDataURL(D, z) {
            const [_, x] = D.split(","),
              S = _.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
            if (!S || S.groups.encoding != "base64") {
              this.AddError(`Unable to data URL, unexpected format: ${_}`);
              return;
            }
            const B = S?.groups.mimetype,
              J = ie(B);
            if (!J) {
              this.AddError(`Unsupported MIME type for image: ${B}`);
              return;
            }
            const de = atob(x),
              ge = new Uint8Array(de.length);
            for (let R = 0; R < de.length; R++) ge[R] = de.charCodeAt(R);
            const Ae = await o.C(ge.buffer),
              Fe = new File([ge], `upload_${Ae}.${J}`, { type: B });
            await this.ProcessFile(Fe, z);
          }
          async FetchURLAndProcess(D, z) {
            try {
              const _ = new URL(D),
                x = await this.m_fnFetchImageURL(D),
                S = new File(
                  [x],
                  decodeURIComponent(
                    _.pathname?.replace(/^.*\//, "") || "image",
                  ),
                  { type: x.type },
                );
              await this.ProcessFile(S, z);
            } catch {
              this.AddError(`Unable to process URL: ${D}`),
                this.m_fnReplacePlaceholder(z);
            }
          }
          async ProcessFile(D, z) {
            let _;
            try {
              console.log(`Processing file upload: "${D.name}"`),
                (_ = await this.m_fnProcessFileUpload(D));
            } catch (x) {
              x instanceof w
                ? this.AddError(x.message)
                : this.AddError(`Error proccessing file upload: ${x}`);
            }
            _
              ? this.m_fnReplacePlaceholder(z, _)
              : this.m_fnReplacePlaceholder(z);
          }
        }
        function ie(X) {
          switch (X) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            case "image/webp":
              return "webp";
            case "video/mp4":
              return "mp4";
            case "video/webm":
              return "webm";
            default:
              return;
          }
        }
        const V = U.createContext(void 0);
        function N() {
          return U.useContext(V).manager;
        }
        const T = U.memo(function (D) {
          const { manager: z } = D,
            _ = (0, q.gc)(z.GetErrors());
          return _.length
            ? (0, e.jsx)(y.E, {
                active: !0,
                children: (0, e.jsx)(k.o0, {
                  bAlertDialog: !0,
                  strTitle: (0, Ie.we)("#Error_Generic"),
                  strDescription: _.map((x, S) =>
                    (0, e.jsx)("div", { children: x }, S),
                  ),
                  strOKButtonText: (0, Ie.we)("#Button_OK"),
                  onOK: () => z.ClearErrors(),
                  onCancel: () => z.ClearErrors(),
                }),
              })
            : null;
        });
        function K(X) {
          const { manager: D, children: z } = X,
            _ = U.useCallback(
              (B, J) => {
                for (const de of B)
                  D.UploadFile(de, D.GetViewPosition(J.clientX, J.clientY));
              },
              [D],
            ),
            [x, S] = (0, Ne.hk)(_);
          return U.cloneElement(z, { ...x, ...z.props });
        }
        function F(X, D) {
          (0, Y.c$)(
            U.useMemo(
              () =>
                new M.k_({
                  props: {
                    handlePaste(z, _, x) {
                      const S = [];
                      if (
                        (x.content.descendants((B, J) => {
                          if (B.type == D) {
                            const de = B.attrs.src;
                            (de.startsWith("data:") ||
                              !X.BAllowImageHotLinking()) &&
                              S.push({ url: de, pos: J });
                          }
                        }),
                        S.length)
                      ) {
                        let B = z.state.tr;
                        B.selection.empty || B.deleteSelection();
                        let J = B.selection.from,
                          de = 0;
                        for (const ge of S) {
                          const Ae = x.content.cut(de, ge.pos - 1);
                          B.insert(J, Ae),
                            (J += Ae.size),
                            X.QueueUploadFileByURL(ge.url, J, B),
                            (de = ge.pos + 1);
                        }
                        return (
                          B.insert(J, x.content.cut(de)),
                          B.scrollIntoView(),
                          z.dispatch(B),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(z, _) {
                        if (_.clipboardData?.files?.length > 0) {
                          _.preventDefault();
                          for (const x of _.clipboardData.files)
                            X.UploadFile(x);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [D, X],
            ),
          );
        }
      },
      50660: (re, Ue, a) => {
        "use strict";
        a.d(Ue, {
          Ez: () => g,
          GY: () => Z,
          XQ: () => E,
          bI: () => q,
          cQ: () => v,
          ff: () => ie,
          hK: () => Q,
          u3: () => w,
          wU: () => Ne,
        });
        var e = a(7850),
          c = a(19298),
          o = a(74827),
          Y = a(12362),
          M = a(90626),
          ee = a(58534),
          U = a(71421),
          L = a(8323),
          ne = a(36707),
          k = a(18210),
          y = a(54963),
          $ = a(98609),
          oe = a(73309),
          Ie = a.n(oe);
        const Ne = () => M.useContext(O);
        function q(X) {
          const { view: D, refUpdateToolbar: z, children: _ } = X,
            x = M.useRef(void 0);
          x.current || (x.current = new L.lu());
          const S = x.current;
          M.useEffect(
            () => (
              (0, y.cZ)(z, () => S.Dispatch(D)), () => (0, y.cZ)(z, void 0)
            ),
            [S, D, z],
          );
          const B = M.useMemo(() => ({ callbacks: S, view: D }), [S, D]);
          return D ? (0, e.jsx)(O.Provider, { value: B, children: _ }) : null;
        }
        const O = M.createContext(void 0);
        function E() {
          return (0, e.jsx)("div", { className: oe.Gap });
        }
        function Q() {
          return (0, e.jsx)("div", { className: oe.Spacer });
        }
        function g(X) {
          return (0, e.jsx)("div", {
            className: (0, ne.A)(X.className, oe.ToolbarRowOverflowContainer),
            children: (0, e.jsx)(c.Z, {
              className: oe.ToolbarRow,
              "flow-children": "row",
              children: X.children,
            }),
          });
        }
        function w(X) {
          const { nodeType: D, attrs: z, children: _, ...x } = X,
            { callbacks: S, view: B } = Ne(),
            [J, de] = M.useState(() => (0, o.gj)(B.state, D, z)),
            ge = M.useCallback((Fe) => de((0, o.gj)(Fe.state, D, z)), [D, z]);
          (0, y.hL)(S, ge);
          const Ae = M.useMemo(() => Y.y_(D, z), [z, D]);
          return (0, e.jsx)(v, { ...x, command: Ae, toggled: J, children: _ });
        }
        function Z(X) {
          const { mark: D, children: z, ..._ } = X,
            { callbacks: x, view: S } = Ne(),
            [B, J] = M.useState(() => (0, o.Cd)(S.state, D)),
            de = M.useCallback((Ae) => J((0, o.Cd)(Ae.state, D)), [D]);
          (0, y.hL)(x, de);
          const ge = M.useMemo(() => Y.wh(D), [D]);
          return (0, e.jsx)(v, { ..._, command: ge, toggled: B, children: z });
        }
        function v(X) {
          const { command: D, toggled: z, children: _, ...x } = X,
            { view: S, callbacks: B } = Ne(),
            [J, de] = M.useState(() => D(S.state));
          (0, y.hL)(
            B,
            M.useCallback((Ae) => de(D(Ae.state)), [D]),
          ),
            M.useEffect(() => de(D(S.state)), [D, S]);
          const ge = !J && !z;
          return (0, e.jsx)(V, {
            ...x,
            children: (0, e.jsx)(ee.$n, {
              className: (0, ne.A)(oe.CommandButton, z && oe.Toggled),
              onMouseDown: (Ae) => {
                Ae.preventDefault(), D(S.state, S.dispatch, S);
              },
              disabled: ge,
              focusable: !ge,
              children: _,
            }),
          });
        }
        function ie(X) {
          const {
            onClick: D,
            toggled: z,
            disabled: _,
            children: x,
            className: S,
            ...B
          } = X;
          return (0, e.jsx)(V, {
            ...B,
            children: (0, e.jsx)(ee.$n, {
              className: (0, ne.A)(oe.CommandButton, z && oe.Toggled, S),
              onMouseDown: (J) => {
                J.button === 0 && (J.preventDefault(), D(J));
              },
              disabled: _ === !0,
              children: x,
            }),
          });
        }
        function V(X) {
          const { tooltip: D, keyboardShortcut: z, children: _ } = X;
          if (!D) return _;
          const x = z ? (0, e.jsx)(N, { tooltip: D, keyboardShortcut: z }) : D;
          return (0, e.jsx)(U.Gq, {
            toolTipContent: x,
            direction: "bottom",
            children: _,
          });
        }
        function N(X) {
          const { tooltip: D, keyboardShortcut: z } = X;
          return (0, e.jsxs)("div", {
            className: oe.TooltipWithShortcut,
            children: [
              (0, e.jsx)("div", {
                children: typeof D == "string" ? (0, k.we)(D) : D,
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(T, { keyboardShortcut: z }),
              }),
            ],
          });
        }
        function T(X) {
          const { keyboardShortcut: D } = X,
            z = D.split("-"),
            _ = z.pop() ?? "";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              z.map((x, S) =>
                (0, e.jsxs)(
                  M.Fragment,
                  {
                    children: [
                      (0, e.jsx)(K, {
                        children: (0, e.jsx)(F, { modifier: x }),
                      }),
                      " + ",
                    ],
                  },
                  S,
                ),
              ),
              (0, e.jsx)(K, { children: _.toUpperCase() }),
            ],
          });
        }
        function K(X) {
          return (0, e.jsx)("span", {
            className: oe.KeyCap,
            children: X.children,
          });
        }
        function F(X) {
          const { modifier: D } = X;
          switch (D) {
            case "Mod":
              return $.TS.PLATFORM == "macos" ? "\u2318" : "Ctrl";
            case "Shift":
              return $.TS.PLATFORM == "macos", "Shift";
            case "Ctrl":
              return $.TS.PLATFORM == "macos" ? "Control" : "Ctrl";
            case "Alt":
              return $.TS.PLATFORM == "macos" ? "Option" : "Alt";
          }
          return null;
        }
      },
      91512: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { A: () => q });
        var e = a(7850),
          c = a(90626),
          o = a(54963);
        const Y =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
        var M = a(44894),
          ee = a(41635),
          U = a(41609),
          L = a.n(U),
          ne = a(64641),
          k = a.n(ne),
          y = a(36118),
          $ = a(41735),
          oe = a.n($),
          Ie = a(13854),
          Ne = a(36707);
        function q(E) {
          const {
              items: Q,
              render: g,
              onDelete: w,
              onEdit: Z,
              onReorder: v,
              onMove: ie,
              bDisabled: V,
              rowClassName: N,
            } = E,
            [T, K] = c.useState(!1),
            [F, X] = c.useState(void 0),
            [D, z] = c.useState(void 0),
            [_, x] = c.useState(-1),
            [S, B] = c.useState(void 0),
            [J, de] = c.useState(0),
            [ge, Ae] = c.useState(0),
            [Fe, R] = c.useState(void 0),
            [Te, Oe] = c.useState(""),
            fe = c.useRef(void 0),
            _e = c.useRef([]),
            me = c.useRef([]),
            we = c.useMemo(() => oe().CancelToken.source(), []),
            Ce = () => {
              fe.current?.firstElementChild &&
                (de(
                  fe.current.firstElementChild.getBoundingClientRect().height,
                ),
                Ae(fe.current.firstElementChild.getBoundingClientRect().width));
            };
          c.useEffect(() => {
            Ce();
          }, []),
            c.useEffect(
              () => () => we.cancel("ReorderableList unmounting"),
              [we],
            );
          const Ze = (De, Pe) => {
              const be = _e.current[De]?.current;
              if (!be) {
                console.error(
                  "start element grab missing element at index " + De,
                );
                return;
              }
              K(!0), x(De), R(void 0), B(De);
              const Ke = Pe.clientX - be.getBoundingClientRect().left;
              X(Ke);
              const Xe = Pe.clientY - be.getBoundingClientRect().top;
              z(Xe),
                (be.style.position = "fixed"),
                (be.style.left = Pe.clientX - Ke + "px"),
                (be.style.top = Pe.clientY - Xe + "px"),
                (be.style.zIndex = "1");
            },
            Be = c.useCallback(
              (De) => {
                const Pe = _e.current[_]?.current;
                if (!Pe) {
                  console.error("update grab element missing element");
                  return;
                }
                (Pe.style.left = De.clientX - F + "px"),
                  (Pe.style.top = De.clientY - D + "px");
              },
              [_, F, D],
            ),
            Le = c.useCallback(() => {
              const De = _e.current[_]?.current;
              De
                ? ((De.style.position = ""), (De.style.zIndex = ""))
                : console.error("end element drag missing element"),
                K(!1),
                x(-1),
                R(void 0),
                B(void 0);
            }, [_]),
            Se = (De, Pe) => {
              we.token.reason ||
                (fe.current.firstElementChild?.getBoundingClientRect().height >
                  0 &&
                  J !=
                    fe.current.firstElementChild.getBoundingClientRect()
                      .height &&
                  Ce(),
                Ze(Pe, De),
                De.preventDefault());
            },
            ye = (De, Pe) => {
              const be = Ie.OQ(Pe > De ? Pe - 1 : Pe, 0, Q.length - 1);
              De != be &&
                (ie ? ie(De, be) : (0, ee.yY)(Q, De, be), He(be), v && v(Q));
            },
            Me = (De) => {
              !T || we.token.reason || (Le(), ye(_, S));
            },
            W = c.useCallback(
              (De) => {
                if (!T || we.token.reason) return;
                const Pe = De.clientY;
                let be;
                for (let Ke = 0; Ke < me.current.length; Ke++) {
                  const Xe = me.current[Ke].current.getBoundingClientRect().top,
                    et = me.current[Ke].current.getBoundingClientRect().bottom,
                    Qe = (Xe + et * 2) / 3;
                  if (Pe < Qe) {
                    be = Ke;
                    break;
                  }
                }
                B(be ?? me.current.length), Be(De);
              },
              [T, we, Be],
            );
          (0, o.l6)(window, "mousemove", T ? W : void 0),
            (0, o.l6)(window, "mouseup", T ? Me : void 0),
            c.useEffect(() => {
              for (let De = _e.current.length; De < Q.length; De++)
                _e.current.push(c.createRef()), me.current.push(c.createRef());
            }, [Q.length]);
          const pe = (De) => {
              R(void 0);
              const Pe = Te?.trim(),
                be = Number.parseInt(Pe);
              if (Pe.length == 0 || isNaN(be)) return;
              const Ke = be - 1;
              De != Ke && ye(De, Ke);
            },
            xe = (De, Pe) => {
              De.key === "Enter" && (pe(Pe), De.currentTarget.blur());
            },
            [ke, He] = c.useState(void 0);
          return (0, e.jsx)("div", {
            className: L().WhitelistCtn,
            ref: fe,
            children: Q.map((De, Pe) =>
              (0, e.jsxs)(
                "div",
                {
                  ref: me.current[Pe],
                  children: [
                    Pe == S && (0, e.jsx)(O, { width: ge }),
                    (0, e.jsx)("div", {
                      ref: _e.current[Pe],
                      className: L().DragGhost,
                      children:
                        Pe == _ &&
                        (0, e.jsxs)("div", {
                          className: (0, Ne.A)(L().WhitelistRow, N),
                          children: [
                            (0, e.jsx)("img", {
                              className: (0, Ne.A)(
                                L().WhitelistAvatar,
                                L().Grabbing,
                              ),
                              src: Y,
                            }),
                            (0, e.jsx)("input", {
                              className: (0, Ne.A)(
                                L().WhitelistNumber,
                                L().Disabled,
                                L().Grabbing,
                              ),
                              type: "text",
                              value: (S > Pe ? S - 1 : S) + 1,
                              disabled: !0,
                            }),
                            g(De, Pe),
                          ],
                        }),
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, Ne.A)(
                        L().WhitelistRow,
                        N,
                        T && L().DragActive,
                        Pe == _ && L().BeingDragged,
                        ke == Pe && L().Dropped,
                      ),
                      onAnimationEnd: () => He(void 0),
                      children: [
                        (0, e.jsx)("img", {
                          className: (0, Ne.A)(
                            L().WhitelistAvatar,
                            L().Grabbable,
                            V && L().DisabledGrab,
                          ),
                          src: Y,
                          onMouseDown: V ? void 0 : (be) => Se(be, Pe),
                        }),
                        (0, e.jsx)("input", {
                          className: (0, Ne.A)(
                            L().WhitelistNumber,
                            V && L().Disabled,
                          ),
                          type: "text",
                          value: Fe == Pe ? Te : Pe + 1,
                          disabled: V || Pe == _,
                          onChange: (be) => Oe(be.target.value),
                          onKeyDown: (be) => xe(be, Pe),
                          onFocus: (be) => {
                            R(Pe), Oe(be.target.value);
                          },
                          onBlur: () => pe(Pe),
                        }),
                        g(De, Pe),
                        Pe != _ &&
                          !!(Z || w) &&
                          (0, e.jsxs)("div", {
                            className: L().ButtonCtn,
                            children: [
                              !!Z &&
                                (0, e.jsx)("div", {
                                  className: k().RemoveIcon,
                                  onClick: (be) => Z(Pe, be),
                                  children: (0, e.jsx)(y.ffu, {}),
                                }),
                              !!w &&
                                (0, e.jsx)("img", {
                                  className: k().RemoveIcon,
                                  src: M.A,
                                  onClick: (be) => w(Pe, be),
                                }),
                            ],
                          }),
                      ],
                    }),
                    S == Q.length &&
                      Pe == Q.length - 1 &&
                      (0, e.jsx)(O, { width: ge }),
                  ],
                },
                Pe,
              ),
            ),
          });
        }
        function O(E) {
          const { width: Q } = E;
          return (0, e.jsx)("div", {
            className: L().DragHighlightContainer,
            children: (0, e.jsx)("div", {
              className: L().DragHighlight,
              style: { width: Q },
            }),
          });
        }
      },
      51079: (re, Ue, a) => {
        "use strict";
        a.d(Ue, { Ay: () => U });
        var e = a(7850),
          c = a(90626),
          o = a(83482),
          Y = a(3166),
          M = a(72865),
          ee = a(77200);
        function U(k) {
          const { children: y, ...$ } = k,
            oe = (0, M.n9)(),
            Ie = c.useMemo(
              () => ({ ...o.Ay.GetDefaultParams(), ...oe, ...$ }),
              [
                oe,
                $.domain,
                $.controller,
                $.method,
                $.submethod,
                $.feature,
                $.depth,
              ],
            );
          return (0, e.jsx)(M.nn, { ...Ie, children: y });
        }
        function L(k) {
          const { children: y } = k,
            $ = React.useMemo(() => CStoreNavEvents.ParseSNR(Config.SNR), []);
          return jsx(NavEventContext, {
            ...CStoreLegacyNavEvents.GetDefaultParams(),
            ...$,
            children: y,
          });
        }
        function ne(k) {
          const { children: y } = k,
            $ = React.useMemo(
              () => GetOptionalConfigJSON("rgUTMParams", "application_config"),
              [],
            );
          return jsx(L, {
            children: jsx(StoreUTMContext, { ...($ || {}), children: y }),
          });
        }
      },
      77127: (re) => {
        re.exports = {
          "duration-app-launch": "800ms",
          ProgressBar: "_2H35Exdt_TEmnht61LT9o",
          ProgressBarComplete: "ch7u6iAsb2ympJBJjGMoi",
          ProgressBarFillComponent: "_3i0WE7KIdK23MdG8F-EDns",
          WizardModal: "_16ywt-UaM5pXRZAZ59hFqb",
          GameName: "_11vp-bH8bgBrQCbqtuK439",
          WizardButtons: "_3dsdpW7Qfs3LWOkzgMJJhJ",
          WizardContainer: "_2wuBak_ecUSy1__ByQUkLA",
          WizardTitle: "_1_VaMIoHomh0nkSL5a0OfP",
          StepRow: "CggdGMWnkepTgIdPa8qF0",
          StepLabel: "_2zme0St18-D_jyf9u4x71k",
          RadioButton: "_11VhNInHVvEffMe2vf2Gg9",
          Selected: "QEXaA3fx7EU29BoZu31SA",
          OptionLabel: "_3QKLY00ZQqv8hxmvbGg8-6",
          CheckboxComplexLabel: "_15L6_SM-oLsYhwZf6E6Ii9",
          Question: "_17VRokV9gQrl4MOm03kxGV",
          Instructions: "_2N-j8qfNmHJEMMz1pXbdvC",
          WizardTooltip: "_2RXE_aA8kQtPJymKYYSMAl",
          BackgroundAnimation: "C8N8hRwMeVp1tGShuVkOh",
          "ItemFocusAnim-darkerGrey-nocolor": "_3OSHg17hDa1n_a1p8YV6NJ",
          "ItemFocusAnim-darkerGrey": "_3vw4cd5iGVZPXAkYQdwc1O",
          "ItemFocusAnim-darkGreySettings": "_35jKmGtukgtSVCv-o2sAWJ",
          "ItemFocusAnim-darkGrey": "_2p57_OuvuARn5uJAZrKT9D",
          "ItemFocusAnim-grey": "_1IsFUDfyU05AFfhOv9ZaFq",
          "ItemFocusAnim-translucent-white-10": "_1-27hJIgX5EtEpiO8ruDs1",
          "ItemFocusAnim-translucent-white-20": "Hy84D3TIRbj_PA180MPvA",
          "ItemFocusAnimBorder-darkGrey": "WijGZOjm_kfdR-fupsAlg",
          "ItemFocusAnim-green": "_16nOxlLQEWjquxC-Yr4mAY",
          focusAnimation: "_1IV9IFCrYGSzJ9sS2CXScW",
          hoverAnimation: "_1UU6b6HTIjjrWrTkpCewNw",
        };
      },
      70019: (re) => {
        re.exports = {
          AccessibilityFeatureDescription: "k6qQ5DLbV9P6dfFuuQpnR",
          AccessibilityFeatureInfoCtn: "Jwl4gCBBBKG2avQH1KE4f",
          GameEditCtn: "Jafw2l9EIfZgvxXAq7oSs",
          AccessibilityFeatureContent: "_2O3bOye9ePb-fkhbamPamK",
          EditButton: "_1aweU2y3d4e3510d3nNqjP",
          Spacer: "_2H1h4op2he4A9SRW-5xU9A",
          Top: "_3YANuSYfijJQ5Jq5-sUfaQ",
          Bottom: "_3U8po-ZE4D_KXUQ32LJT0c",
          EditButtonIcon: "_2t7TJZb12JsMs-PxroqLQ9",
          StartWizardButton: "_1VzLAfLRNEbppzyyYS8ueA",
          ButtonRow: "_1L2BTYNuiNzNkV3fxuFZ4A",
          PreviewContainer: "_1z9Dg4jsYlNummQKgczgWN",
          Updates: "cCbxuWUtmnc8zsLas0fCR",
          UpdateButtonContainer: "oQ2jrb8UigZeb9afK7uuf",
          NewBugContainer: "_2lvnBM3dEA_54CApZ1werw",
          New: "_2M8-7e6mSLUYg6EP9U-fr-",
          UpdatesWizardButton: "_2b8NFL_UzE4xC7a-M9SXbC",
        };
      },
      31623: (re) => {
        re.exports = {
          "duration-app-launch": "800ms",
          ControllerWizardModal: "_2M4zwA7Ac68En7AUUHEpuK",
          GameName: "_1wayRCM9VO944GbqtTisWi",
          WizardButtons: "ja88t0u0UmDMjZ2vKEXyg",
          WizardContainer: "_1j_e5epqt09WxhZOjyi9D1",
          WizardBody: "_2Agdmn90d9rLK0COHBJ9Ya",
          Column: "_35X7XjU8DZ2H27V0SBSAoo",
          ColumnLabel: "_3xAxLUcHgDWrN3L54mLJYv",
          ReleaseColumnFooter: "_3qIJUe57BhaB_-fSLUg9Hx",
          ColumnContent: "upSjacqUkxiBsrt6N42gC",
          BlueNote: "_3FlXrEk2woo6dOboR90dCn",
          PublishNowWarning: "GSVWx_w2LMo3SAhwSgY-n",
          ErrorBox: "_1h88U0C26maKtvTHQw0f4Z",
          HTMLErrorBoxAppear: "XREUsZ2A3RyF2E-vQKQwp",
          CloudConflictModalContent: "Qq753teqS-0zB67wi3MP5",
          DialogChoiceDescription: "_37mGYoLJCV-kP2sFOgvZhh",
          RadioButton: "_1Cqgv4c_2wNORC7k0gp6O0",
          Selected: "_1iGfirXEzQZDHkJVHJCe25",
          OptionLabel: "_1CKHmXyuOvgsgsfZWRwdkk",
          ProgressBar: "_2FcBzeH5LVz2CQQWk-coqU",
          ProgressBarComplete: "_231x-l7fB13puyRZJDW46L",
          ProgressBarFillComponent: "a63k2U08nK9HrNLtO-4xe",
          WizardTitle: "_3acfYDihepdLalPwwfH_1O",
          StepRow: "_4NsQgqhsg7-hwuKwFSkt1",
          StepLabel: "_3Q7KPqZcxMH4I4NbiI4ZLQ",
          StepImgContainer: "_27_A1alE6d3sduux3CAyY_",
          StepInstruction: "T9eBinyQ2hCY8oy4WO8g9",
          ControlsQuestion: "_86lVB7cXYqg7s4LChbRyM",
          BackgroundAnimation: "_25lkDWhF0bwre6OQT8g7w0",
          "ItemFocusAnim-darkerGrey-nocolor": "_2UZY54l1AJ5zxBJhmYf490",
          "ItemFocusAnim-darkerGrey": "hlnkWGoujK0WgKsCnBOcK",
          "ItemFocusAnim-darkGreySettings": "_3uPCzxcRrrgoi-gsTfxgRQ",
          "ItemFocusAnim-darkGrey": "_2u7cTUci-zR4zqevKlTsfz",
          "ItemFocusAnim-grey": "_3PcMUvLdjJe0fnIkVlDHNa",
          "ItemFocusAnim-translucent-white-10": "_1uSV29xzSfh0VWP4fBLSwy",
          "ItemFocusAnim-translucent-white-20": "_3513-n6v2aZcqIN2F_qPf_",
          "ItemFocusAnimBorder-darkGrey": "_13L0noPDezrKNjkT3uxNet",
          "ItemFocusAnim-green": "_2LoYY8XGA4qLFMRZw7KUHR",
          focusAnimation: "uwLjAG7MPbb5kNpkfltgX",
          hoverAnimation: "_25AiV9rkMnY1kH88BkJPaW",
        };
      },
      93763: (re) => {
        re.exports = {
          ReleaseDateInfoCtn: "_2ocuoWlOpeAh97xq7WrkIM",
          GameEditCtn: "_2o3d5bRhxhkhFeFhW8godg",
          ReleaseDateContent: "_14jgI2A7iky0kJHGTv5bRH",
          EditButton: "_1FeuJt2eGQs_Rst-XDLFm4",
          Spacer: "_1kzzU_wSbmdyI7oLSsyg-u",
          Top: "_3M26MlsJeORKy1BwxAXZum",
          Bottom: "_1qVhcuP_Q7ETKhqOIF-6nf",
          EditButtonIcon: "_1EzMvfRFX_4r0BoWZP0nDJ",
          LabelField: "_15-FOPma_SgLfRiaMDz00K",
          Label: "TlwzuMCaMLu_NamMk-aqI",
          BigField: "_1q70c9TQOGTE8nIj0PZzFs",
          Set: "_462we5kglLCfOmKOQ-yFJ",
          DescText: "_1DrWiEkEcbt3HstR0OiF2H",
          StatusText: "_3j0F2jA1hGH2uFa5CQJUU1",
          StartWizardButton: "_3aJmqkMNOKlgJpR8MjiixB",
          ControllerSupportLevelString: "_29_hhzfHe7mcOGymGIBMk8",
          InfoRow: "_2EuSdla3Jwg3xI_Dgo_qHu",
          LocSection: "glzO-PzgvCa6Skefap3ex",
          HighlightRow: "_1o45fKVcOJe0ZqBEGcY7iq",
          HighlightRowRed: "_1hL1r05CyflWZetU6qrC1c",
          LocString: "_29T_Phs4gpEQr5w3liXu9f",
          HighlightText: "_3r2CUk5i9BqNQMQQQUrr0D",
          ImgSection: "_2iy3BWZdA1i5GxeKdEXw5h",
          ImgContainer: "_3fVMxj4lcjRb2Ig3TUcYBP",
          PreviewContainer: "_1WiJc86Iy8Vg1PQk6AofW4",
        };
      },
      72611: (re) => {
        re.exports = {
          CreatorNameCtn: "_38XTY1uRQtSGN-NA3nbbGg",
          CreatorCtn: "_2Z2NpZBAp01VIPZcHEkMvW",
          HoverCtn: "-TMA8muDrEsq9vwMsGs8Z",
        };
      },
      19042: (re) => {
        re.exports = {
          CapsuleCtn: "c-RZpHTXb06OJeUNz4WEW",
          MissingCapsuleCtn: "_364X0fngRQGCfxG4VyRk_D",
          AppRowCtn: "_2VXPIaz6YEo5TPJqSn_yE5",
          PageSelect: "_12MnhNSqHX_n83jqCGQrF-",
          ManualFeatures: "_1WxdPIk2Wp9e2_EPCvDXs0",
          SortOptionsCtn: "_1sM7lJwWxP9zl748WJgn_8",
          CreatorHomeCtn: "d77JrwhwWgQ2752O6hs9q",
          FeatureSelectItemCtn: "_3gmDKxSYF9DEWwP-L7l_W6",
        };
      },
      63251: (re) => {
        re.exports = {
          DropDown: "_2bdfWkqeuk3tQIDuq_G7QG",
          DropDownItem: "_2Py3SQ62-egkfSgwVRn6pS",
          DropDownScroll: "_3oak6w26GsyC0GUyUNlKhd",
          Avatar: "-Fm68k4tG1jrT2Jfr0gbx",
        };
      },
      30533: (re) => {
        re.exports = {
          Ctn: "_1ZAQLoxm9d3f6xrGzbfNqv",
          CreatorCtn: "_3E1g0g32lII6LOwFavs-pL",
          CreatorNameCtn: "_19ddIB98Eino8bn5wXuKtY",
          HoverCtn: "_2BgPwOwyt6_vzsU2JpcvFM",
          Avatar: "_2aKMBhqBnmiLCGD_hcZSx3",
        };
      },
      69515: (re) => {
        re.exports = {
          SelectorRow: "_2gPHlYO9IsXSVwCXObPaQe",
          RelationshipType: "_2Rm9HP6ML30Cji08Vj2td2",
        };
      },
      71714: (re) => {
        re.exports = {
          DLCItem: "_1sgY-MVMUccmrZgX7D5bAw",
          Highlight: "tsusJIGDyi0szvTLG_58g",
          DeleteDLCItem: "_3W4Twu_YWCADotnJq1XNad",
          HighlightDropDownLabel: "_1ydvIIXwFV5dgYKnwBTgR4",
          HighlightDropDown: "_1ipl4yg58fGYR0_j3G2nLH",
          DLCItemDeleted: "_3NI0dNLBy2votX-G41EHUK",
          DLCItemNotHighlightEligible: "_2tZBwJXOOBOJ0g1pDXTXcg",
          LabelNotHighlightEligible: "_1mAhoxKDY4ru5NgKwHsibi",
          AddDLCDialog: "_3QmO_KfxjsLCYJ3Km0vtXg",
          AddDLCFooter: "_20wuD-AQWC90hxbP9iGsQu",
          AppSelectCtn: "_32YZCQQ7Pe-_dwX6LIf3pl",
          DLCDisplayContainer: "_3cg2WBZbQuwOGVBJr4DDWz",
          AddDLCButton: "_2p7IttiJElSQxs_diHKzci",
        };
      },
      43104: (re) => {
        re.exports = {
          ExtraAssetImgTag: "_2JQ4QGd4mIBR58A-9bDHdq",
          ExtraAssetError: "_4aB4b9buM8DFxojRymZ_5",
          ExtraAssetImg: "_1W2-3_i4cuGzBmocT-ZAk5",
          Selected: "QRTy6qng-IEOMiXMxwVtY",
          "extra-asset-blink": "_2D6wlj_wFTjjLOi2f7N1tq",
          InDeprecatedLink: "sakeS4kMEd2FGp4Da4Xrt",
          ExtraAssetControlsContainer: "_3-tWPanUj6QJND7dPTlrgc",
          ExtraAssetControls: "_3LTnCSzSad_SJbC1nruDT8",
          SmallImage: "_3AYhN4DOm37hwrJw5_EKNa",
          ImageLinkDisabledWarning: "_2oUv4hHSs2-8LXtBPcyRRy",
          TopBar: "_1WOD0JTMh8GPXMSA_p8BNb",
          TopBarContent: "_1nOxfVQISFWWwmO7v_u77O",
          Hovered: "_2h_sqCtLa_VIfPxPT1ojpD",
          ExtraAssetDialogContent: "_2zFGXU_GHLOWey5_sOi8kq",
          ExtraAssetsDialogDescription: "_11Ohp1dBE7FzghG4yzgqoA",
          UploadButtonContainer: "_31BKf0Ts8oSM_mv61BOp2G",
          UploadButton: "_35DNlmVRsyVbi56Xf_jj9A",
          StandaloneUploadButton: "NK3X0iAqHHQskiywniNiD",
          ExtraAssetsGridDialog: "aaxZ2xZ0gE7RMvrheWWmj",
          ExtraAssetSearch: "_33MsM-ZTqbPsW8e03kSUKY",
          ExtraAssetsGrid: "_2Uzyt8kZcr-0KU1aoTkiuj",
          ExtraAssetsPageList: "_39FaN2oioTXV-lkAOG0jfE",
          ExtraAssetsChooser: "_12hVxV1z_asvDHFqo9ScMk",
          ExtraAssetChoice: "_13xCWTST4J-cgOyz6kwfIJ",
          ExtraAssetStack: "doWjXy-F7LwBxlzCUBAGC",
          AltTextBtn: "_1JdiJTPLBYcAxWzLqjYV5P",
          StackedImageCtn: "_3gElE6VZJ9uU4-RaFC8Ra8",
          StackedImage: "_2hABNX3YzXj9JYRLANr-hg",
          "Image-0": "_3cPT5-4vXp4iE6v0qwHc23",
          "Image-1": "_2BP4s6zHDy_5HIqCoVQqIg",
          "Image-2": "y5NNNiOOneEJF6_a7pq8O",
          ExtraAssetName: "_1v6uTQuGLshmZKWXULJOSr",
          InstructionsForLocAssets: "_1SZZIXmXR7Rw30KxYPB-tJ",
          LocalizeAssetDialogContent: "_1yX-VOaM5vG__71wYRKXpF",
          DisplayLocImage: "_3DKy0FBx7VieVYhRL6ykCt",
          LocalizeAssetsDialogDescription: "_2AS-5DvwKtFXZy1pWhENnE",
          LocalizedAssetMain: "RzrYxmOI_AsfjKkcxy234",
          LanguageColumn: "_2TmGHFx_V1QDQrc-3q_8-f",
          LanguageWarning: "qpAjL-lahF8IHh9Nd93Ff",
          LocalizeAssetImage: "_1AS4JMOtff-hCq2TVtvwG0",
          Large: "_3CEcLwkihaLGNenomwOCbk",
          LocalizeAssetKeyImage: "_3Ec8F-CYK-STI2Vqw-I5ml",
          LocalizedAssetCtn: "_2m5BQtwFQfI-w9rxOgxzzT",
          LocalizeAssetItem: "_2Si9uGdC2JFc48CXIZ4T1N",
          img: "_2LTUOhg1K-ZG-zE8KHXEbA",
          Name: "lGJk6OffakeBbm9rvukuH",
          LocalizedAssetUploadWarning: "_26-vmpZD8b_p2ApFLrcji8",
          LocalizedAssetUploadButton: "FrlNPlPwQkjgzk604bAC4",
        };
      },
      76349: (re) => {
        re.exports = {
          SideBySideComparison: "_22Yf4CsBMkYFBcTEBh4ifm",
          ThrobberContainer: "_1ohypTL81epoo-2xTCJp8M",
          Loading: "_1rTERXdhbmJz94-Cb07emK",
          ImgPreviewContainer: "_15tW0aE5WXrWrGgguKGlWn",
          ImgPreview: "xUnBDVbIvtL7vyAS4rn2t",
          DuplicatePreview: "_14-dbrekvOWYS09OPByyHh",
        };
      },
      97982: (re) => {
        re.exports = {
          LocTextAreaContainer: "_3oZ2A8CpTx8VWK_eJhZYh",
          LanguageSelect: "_26sgpEoBg_73b96Dm9zA__",
          LanguageOption: "_3-BbOrMwYQUVRDtsxZto7i",
          HasValue: "AX8gskcTCWl_aI-UYAJAf",
          TextArea: "_374NqqdR-vuq2spxuRXCB9",
        };
      },
      80968: (re) => {
        re.exports = {
          EditorPanel: "_2SgPxDudv7oRkzlHsNm4_O",
          AboutTheGameArea: "_3EAE8BxFPnb_g0Ct5b4QzW",
          Awards: "_26nsky_SK1122q1xYQ0VZu",
          PreviewDesktop: "_3bpOE-B9MDag6KQR0eBkuM",
          PreviewMobile: "_2WpGoEdbqT778yiAcOF1LI",
          GradientRule: "_1dK_q5EmTZgebmJeCzHq1s",
          PreviewGamepad: "_2m49NX6vFS6SVkkvgmwGY0",
          StoreAppPageHeader: "_1aQY7Yz23XDN0N4IVctriG",
          PreviewModeCtn: "_3j8IamPUv5fQG3BCS5x5g5",
          PreviewModeTitle: "_1xyaZdEQi0iZWRnsgSmNsE",
          PreviewItem: "uX4wgaxy3MACLqRDZkAQT",
          SelectedPreview: "_3GPQSHrcPD7sKpOP2Ne8E3",
          PreviewInfo: "_2SAasZGqd4LlNB-qPiE38o",
          GameDescriptionEditorToolbar: "_14dow-GSmyLacYWBXCNV1l",
          Sticky: "_2YccUEt5UoKig0cAk4W6DK",
        };
      },
      27539: (re) => {
        re.exports = {
          AltTextDialogContent: "FSO6VV5iXmPANFhTj7Bzp",
          AltTextDialogDescription: "VsXbYkSe5CrbxkE5GhQfI",
          AltTextGrid: "_1DSTal-SoqU7Zf0nk0FmRl",
          AltTextHeader: "DxwrrF6sruBZ-N_Q98dP9",
          AltTextImage: "_3_3Dqx1hIyrpPPlER58SWu",
          AltTextName: "iIe8caS0kpCFy1oLCOUCE",
          AltTextInput: "_160Whafs351qmmXz5c-5_b",
          AltTextRow: "_1okAG3zavPs6wvi1wP1-tW",
          AltTextFailed: "_3Az0YOAE-dFfsOyEkDyEoR",
          AltTextMutateFailed: "tyh1ewxCBrVfWQeIlU505",
        };
      },
      23256: (re) => {
        re.exports = {
          AntiCheatDropDown: "_1Ein4m5qBonpTJl1GbVcV_",
          OtherSerivceName: "_2wW0IMGaGmFIjizuMml3mB",
          KernelMode: "iAq_jMg3JrFT_qjIU6gSL",
          CheckboxLabel: "XRMda0yOh0NFnSf3EVLP1",
          CheckboxDescription: "_10omFg-YbEQjz9R0VzeuSC",
          LanguageSelector: "_2aIJUMbzwAYBpQHVa8E2Pg",
          FormRowIndent: "_2NE-O2O0DHfvjzxSZ2fmDO",
          FormRowHeader: "_2uZk1PvTdbBPuMfDFzAGNW",
          FormRowDescription: "_3pHVbh8Pxwbpxlxeej0oG3",
        };
      },
      72671: (re) => {
        re.exports = {
          ImageConfirmationDialog: "_2Dn55ck2zVwRbA9GNFu_yZ",
          ConfirmationDescription: "_3JFBzNNPRVAejRvp2bu5hF",
          ImageTypeConfirmationCtn: "_3C-PQ-bC6JWcozpVTRwYuU",
          ImageTitle: "_1Hb-MsBU3Ssa4GqbaZQNkc",
          ImageCtn: "kbtD90I1ou1gx_xO8tcXC",
          ImageSrc: "_1Md62ii5C2Q4QaiqWoEdhf",
          ImageCheckboxes: "_3eo-7msJ5jV20gub1qOBn",
        };
      },
      30041: (re) => {
        re.exports = {
          NonAppContentsEditor: "_1WoYFMMlYaGcrH1OlNAeb6",
          AddItemButton: "_1xbvS9FSWE8T43H5V6tnLs",
          NonAppContentsEditorScrollArea: "_1dJujt1qEcM8WgH2bsRGtX",
          EditorButtons: "_1WySz_wiyGNuQgIN2UIHuR",
          ItemEditorRow: "_1xiTQEBFDACW6ssXe_rkaa",
          ItemEditorRowContents: "_2oGxJ3wpmY3NkzAlmhzPeu",
          ItemEditorRowNameAndLanguageEditor: "_2QqnI_s10DOvb-HPBd-QeA",
          ItemEditorRowVisibleToggle: "_1NH9ZOrC3ltObbXnTj7Wn0",
          ItemEditorRowDescriptionEditor: "L9MKw629aEVZfhOrL8HFX",
        };
      },
      36671: (re) => {
        re.exports = {
          PackagePurchaseDisplayContainer: "_1pD-mB7FB4bkfagrMUC9cD",
          PackagePurchaseDisplayButtonBar: "_1XFrrNb_d41kTB7sg9Q_EQ",
          PackagePurchaseDisplayCheckOption: "uXkDV0VRgXEoAuNG58Fzd",
          PackagePurchaseDisplayArtLabel: "_2yayatEjpsnHa5NQ9oPlic",
          checkbox_label: "_1AiEeUD__3Hwc4fhAmw9o4",
        };
      },
      30935: (re) => {
        re.exports = { EmptyPinnedBundleList: "_1iAXEFHnXUjh793_HsWLka" };
      },
      15348: (re) => {
        re.exports = {
          PriceChangeSummary: "_378al6U3fz_xo26XB9TSaC",
          Pending: "_9BqgpQmpdILuSOBqbvGmK",
          LoadFailed: "_34U8ZCDShWlVmzkBSW2w1J",
          LastChange: "_2l-Xyo8VbJ2d3XET3FSMDA",
          RecentChange: "_396joK-7sdGrUxSlkMFOSC",
          ChangeCount: "oj-LqimPIvXVMzu4i_Srk",
          PriceChangeToolTip: "_1ju10cCVVFddbi9j4GydW7",
          ToolTipTitle: "_3xk6dJPcAPoyNGwRBsSLYI",
          ToolTipFooter: "_2lvPhgL4d8BhTp9kzGmqJ9",
          ChangeTable: "_1KVZXL9V7gdtPB4judbmZT",
          ChangeHeader: "Tgry6kDtqoo8oLIhLwRlk",
          ChangeRow: "_1OZc-hjI5dkOl7-5ULCXgQ",
          TimeSince: "_1kFp7JsD4NPIjtLyWXzHd_",
          Price: "pCW6qPXp-OAuvel2qwIcT",
          Currencies: "_3xGwebW9ut7kgLyLjTcBpx",
          Notes: "_3SUWUxCuHwN3dYEIbtAbja",
          Increase: "_3hxpTm3SvfgEuBOwXHA3lD",
          Decrease: "wU80squkMRYFMGxr9CTrZ",
          NoChange: "yUgWUJgZHovMaAGLLtLA_",
          FirstPrice: "_24W_O9CqcOeCKh_efWoYl9",
        };
      },
      14358: (re) => {
        re.exports = {
          RadioButtons: "_1o8PeYV1JEHw28jdq0-cZs",
          ActionsCtn: "_3tmYmIJendBOkxYfR5pMSJ",
          NotesField: "hmIKAOq3IUq5OZJGCGodY",
        };
      },
      77428: (re) => {
        re.exports = { ValveAccountTicket: "_1gAPWjNZ0dtQiyMfDmxtd" };
      },
      2897: (re) => {
        re.exports = {
          PriceDeltaCtn: "FR0Jbt4UFGpCZeakQYuXa",
          PackageInfoColumn: "_1sw3lFWbKOrwVBjyMmIVFE",
          ProposalCtn: "_2aZ0dHJvCBWY-dISFYuHx7",
          RowCtn: "_3Fj4_LN49SJ2FIDkn5Ar_x",
          InlineDiv: "_19_mEBDtOirVDKNF0sbPMT",
          FailuresCtn: "_1Z31Ten-n1dAC5fhblKIfC",
          MatrixGap: "_3vOjxVYu8bLFNAaHbstgFp",
          Legend: "_14hkGjE6JlGYtfCi24GIcv",
          Missing: "_1Prze41qAKK3Yf2ywGaP4x",
          Outside: "gYYAD-UX0KTtpP8A7wose",
          CustomUsd: "Ru7OVKpEg2-4T6i2fJPVP",
          AboveAutoPublish: "_18NNA8ajB8j6lCIlkk8_uk",
          MissingCurrency: "_1aHJaADVcfWKEoJd3rHyzS",
          Title: "_3vH34cEyQM0jTB1rtzMc19",
          CurrencyWarningsCtn: "_2H_McBAV-1DEhfPhYqmTG8",
          AutoPublishCeiling: "_1x66lPK7LljczLFs4Z0w2Y",
          ThresholdMiniTable: "_1Qz3SUdF4Z2HAIlSWPA08n",
          WarningTitle: "_1jnFS4SBVwvvKVzrE6v9ly",
          WarningAbove: "_2QdKNR-tKnTQ9LEnQ8bVV-",
          WarningBelow: "_1Yk633c4Lzb0M0bpPNgg7e",
          ThresholdRow: "_1WR81oD47ZQYIwkubRtLJ0",
          ThresholdHeader: "IROvk26OnXM-2kx4vbPtO",
          CurrencyName: "_1ErxFwG9fg34T9vaBCjMyh",
          EqualPrices: "_3tHg_ZoTA9Y-7U0t2Cxfyx",
          OriginalPrice: "_2oPTCoNk1ZzEt4AhH3P2D-",
          ProposedPrice: "mbBO-p8uSR3ZCnGWTrGpO",
          RecommendedPrice: "_30pJDSHiHiCXSW4SNk0nnP",
          PercentDiff: "_1d_jmwlFfcaSfpvHzyFrhM",
          ReleaseDateCallout: "_1Xzwu7hrwrG-4QWc1zMbsx",
        };
      },
      23708: (re) => {
        re.exports = {
          RowCtn: "_2Kb5slnuUjyEZh0EM01mpa",
          CurrencyHeaderRow: "_1MTZXU0O3Ez0HuYIUZ7DRL",
          priceChangedNew: "_3omSD7bzihAQsvjW816OTH",
          priceChangedHigher: "kPaeu3zbh3qS1FSWF0PXM",
          priceChangedLower: "ExSF3NJhFrNmaalRumcyU",
          outofmatrix: "_1v_REU9nI-QU5hVkmSREZ2",
          pricingerror: "_1flav3IaDWEjl67mhiTjtL",
          outofmatrixlower: "_1yBYLNIGGvEetpwa3M9DVx",
          pricingLegend: "_31Qzh5kyW8c3aceh-aaOLD",
          PackageInfoColumn: "_1v90IxHlEuTMEzzaQS4DkY",
          PackageName: "_3Ry84c5vN70mLVtPYtg6sv",
          Column: "_3yvRGn0SGj1ZMfxDBlsunE",
          SubmissionBy: "_1OTJ0XMxu7F_2yNy3A2qKA",
          MissingReleaseDate: "_2smrPeVLLyicNuwt3hgBAd",
          FullCurrencyColumn: "_1VlWukpBKxbYmmlJrC6r5m",
        };
      },
      26673: (re) => {
        re.exports = {
          ReorderableListWithArrows: "j49UFcs3c3QniMgfBfbUC",
          ReorderableListElement: "_1ziKQJEFC5xIspudN0mQWr",
          ReorderableListUpAndDownCtn: "_117rbiRaxL2gx6MMmEAfbw",
          ReorderableListElementContents: "QKoy-F4c1lg1WVGHxrLPo",
          PurchaseOption: "_2svu-POqLeuRkmBTgwfmiS",
          PurchaseOptionFirstLine: "_3tZOw-_UErk1L8tZXBjBlc",
          RemovePurchaseOption: "_2_34o9MpxAxSaACc_87Gki",
          PurchaseOptionDetails: "_1fKMWxi9ifFxXkEqUGVwzK",
          PurchaseOptionHeader: "_2YRHmK-lnhG05fMug_YyNZ",
          HeaderText: "_1kHpaHBh_NR1YhLy8EhFi7",
          PurchaseOptionsOrderEditor: "_2XMlI9jS0J1yB1LCS0c1SU",
          PurchaseOptionsManualToggleCtn: "_3_8N_22yAQCd1zvyNKqfht",
          NoPurchaseOptions: "HXFLodBVYcS6nS9eLv0HH",
          PurchaseOptionError: "_3RSMcw9mJDbrvzPfuNnhcB",
          Exclamation: "_3MdVQ7CJpuGgd3bkTFABRm",
          PackageOption: "vuttoObFteUS46kZgAGlL",
          DropdownOption: "jMf54NQ9Nyft2Si8tbZhL",
          TitleLine: "_4P8QXdBrnelSxwtLHVLOE",
          TitleInput: "_2hzGnHNQA7JBBJz0jCHV2-",
          DescriptionLine: "_3XNwKrWW3qelYLfsIgwHx1",
          DescriptionInput: "ZQb6AVSuWych63E6kWW5F",
          DropdownItemsCtn: "_1tiRg0IxiQHqYoCUkNxKWQ",
        };
      },
      36500: (re) => {
        re.exports = {
          EditorCtn: "_3qyd9aiwL32kAuGY_Rhzm0",
          HeaderCtn: "_2SsIaBHCvUU5Hyt5uQxA_p",
          Row: "wscFtfHuH_NvN1lnfHM6i",
          MilestoneButton: "_1qXO7rz_wCXLWRo_houCbh",
          BtnCtn: "ZrIN9N9KK84LosHTnHAal",
          LangBox: "oHsool0rU2gYfVTjIVrGt",
          CreationButtonRow: "BsMGgRExOtnnHfrfRMeJ7",
        };
      },
      64442: (re) => {
        re.exports = {
          BtnCtn: "_15Uzhk19FXMyjsNEpD2w__",
          MilestoneTable: "_32pGw8RvFp8N1tj1ZZFD3V",
          Date: "_3eoKJfAU5YNpujekRJ29Lt",
          Released: "aiYALRtbutTsqpA3EVxIS",
          EditBtn: "_3GPoiDQhG2AWZ8zqnefzZt",
          StatusRow: "hs6Pa5T0Gbw8pd9VpJNAs",
          CheckMark: "_2gpgDFHrtGUVaBKuGQRQfZ",
          EditMilestoneDialog: "_1b7pp2idI0It1Wtbh4K5Ck",
          ShippingTheMilestone: "_1ujBS0HyFpqMeEUdjrLrMr",
          ShippingType: "pXgsjv7B10bT5brNV7MFz",
          MilestoneTitleField: "_2J6DntV8BgxcP9CSCueNZu",
          OptionDetails: "_3IQkWWzfVA9kOWtxTMekyW",
          DatePickerRow: "_3ZMVdS_YE75SaKzbxL0ifx",
          TitlePreviewRow: "_82lvRm6zNUSuia5C-0KVb",
          Shipped: "_1jDNm9kCJcNIl38lakfF51",
          PublishReminder: "_1FnrHyPuXP7yRZRvgoNvLi",
        };
      },
      52249: (re) => {
        re.exports = {
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
      88376: (re) => {
        re.exports = {
          ModalConfirmDialog: "_1MwR7dU-J2CeRWYt9WfUJw",
          Header: "Y9lJcGdHP6m4TRcgHnzj2",
          Buttons: "_1Wq4E7gdTa-fjWrhWFQG7b",
        };
      },
      88208: (re) => {
        re.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      83217: (re) => {
        re.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      8743: (re) => {
        re.exports = {
          ArtPreview: "_3793xvP87t1rZYbAQDC1pG",
          ArtNoArt: "_3WxfzmFYwb-rh8sn5VMFMl",
        };
      },
      48576: (re) => {
        re.exports = {
          StatusLineItemCtn: "V5SWm2fiBKJqCbPn7bpC0",
          StatusIcon: "_1DFlt9vB8DfZc84ZeQcrgT",
          StatusIconDone: "K_JWTc7pXC9lechbL_JMT",
          StatusNotDone: "zl6s26pUkMfMXmoMlJstY",
        };
      },
      33924: (re) => {
        re.exports = {
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
      91291: (re) => {
        re.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
          TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
          TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
          Reason: "_2h0GKAYcXRP10ryZHFn79d",
          StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
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
      47534: (re) => {
        re.exports = {
          SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
          SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
          SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
          SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
          ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
          AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
        };
      },
      15736: (re) => {
        re.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      73309: (re) => {
        re.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          Container: "_30v-6zb_axOypIUr5VRHE1",
          SingleLine: "_2i9qH2AM6Wg5660Tkf_fTt",
          ToolbarRowOverflowContainer: "nXEH21nf47u2OH7BjQKei",
          ToolbarRow: "LCeIT0gmFTY8fdfaVgk4j",
          Gap: "_19z0fjj7o0n9vAjVjvYZNU",
          Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
          CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
          Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
          FileUploadPlaceholder: "_2P-FBc3tZWGeeBFplDSb9g",
          ThrobberCtn: "_3QpIkO3kkVZmnulwmiZRHH",
          ThrobberRow: "VIY8ZV4g4NpEMnF-_pHOh",
          Throbber: "_12t6JmDCFT6MqtNVrSi5NJ",
          PendingImage: "_2HezQYTfmFfdRmuB8l9QPI",
          FileUploadDragDrop: "_1WRaNQqBKcUp67ntgoyEeQ",
          FileUploadDropFilesMessage: "I2CE9X_I0GBNYbJf7VYBg",
          TooltipWithShortcut: "zT2msZmm-jBeLe4Dt7smo",
          KeyCap: "_3mZEV9CXrIn4FITvJk3Xy-",
          BackgroundAnimation: "_32I7Uh1ZWySd7VGW50f5IC",
          "ItemFocusAnim-darkerGrey-nocolor": "_3dzJEyM6opBkmIeARAGlYr",
          "ItemFocusAnim-darkerGrey": "_2dbsn-sR5AlFKEgCU0FBbT",
          "ItemFocusAnim-darkGreySettings": "_2gCU5HJBuDk1vxRMJhwFGE",
          "ItemFocusAnim-darkGrey": "_39KmlfhlZwkINJt9fdyKbw",
          "ItemFocusAnim-grey": "_1X5Siupo5N_ZVuGesoYV0t",
          "ItemFocusAnim-translucent-white-10": "_3aZcpOjRI-YzMZmhCRiFjd",
          "ItemFocusAnim-translucent-white-20": "_310j_Q-iB-at4-cmQSi1Mt",
          "ItemFocusAnimBorder-darkGrey": "_38WlDUfHs-IiaRcWKFpWyA",
          "ItemFocusAnim-green": "_3Hq7gKwAuHvmYuBWXBx8mC",
          focusAnimation: "_1k4kLxHBHs5edlnWmN-Cos",
          hoverAnimation: "_3OZh2Bm4JsNC3bNfskysCA",
        };
      },
      41609: (re) => {
        re.exports = {
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
      1431: (re) => {
        re.exports = {
          StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
          StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
          StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
        };
      },
      63404: (re) => {
        re.exports = {
          narrowWidth: "500px",
          Details: "_8DSX9d1ihrMSeZUFC9elD",
          Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
          FeatureList: "TwihVkmmqI5XLg6P4fpwF",
          CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
          FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
          GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
          FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
          InfoRow: "_1RmibngWLogcFmO93kGFgq",
          FeatureName: "ny6hWVK6ii05H200KRhds",
          ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
          InfoLink: "_2xmH7agKi37v9kwFHi093S",
        };
      },
      17479: (re) => {
        re.exports = {
          narrowWidth: "500px",
          ReleaseDateInfoCtn: "_3_BM0Yr1nZHLRCU-YScHph",
          GameEditCtn: "_2atDY79LoAg6W2I3f_ghoe",
          ReleaseDateContent: "_3EqL95FAclb4_KUCViyIy",
          EditButton: "_1nt4AvPVzCcmifUL2j41GY",
          Spacer: "D6yaJy1vHTj3skoSwQCmn",
          Top: "_17TBmwVnz8B0fYk9NMgjcC",
          Bottom: "_1mdhhjdhefzfINtpGJDw_F",
          EditButtonIcon: "_23n7mGKR9t2rn_appk4hc4",
          LabelField: "_1yV1XMUdZdavVgSZ6SzXKj",
          Label: "_2aDfpXF8ktFHq439q_1vAi",
          BigField: "_3K2oJx5qEZyMkC2O7Ib77p",
          Set: "_1CXRFvJ5iqKqlENSWgeHPP",
          DescText: "_3FFbGIjpM4z0O1HfqwwsvR",
          StatusText: "jBW2mrF7D6RVhT2u_ZRXB",
          StartWizardButton: "_1hwFIOidJj1HaD2_cI4NRD",
          ControllerSupportLevelString: "_1mfBI5XbiaKU9vS5WkJALu",
          InfoRow: "_2xZaMR-NKc0LbkeM50cZq8",
          LocSection: "_3KAysk4dlhWETa6ixz7V2j",
          HighlightText: "_2Qr-aCeNvCUkoGKh3ikniD",
          GamepadRequired: "xAMFa9akLaRN7hfkTC8_h",
          Personalized: "_1g3WgidGN68CDX4XQPGnl6",
          HighlightRow: "N97okiqePUqGpdeNrIxUU",
          LocString: "_3FBEGAfvLQj4qYjstmZAPE",
          ImgSection: "dxuI55RF56-dzbuXjj2W0",
          SmallerSVG: "_1LWvkVSCiVeG4Yf5uxtQ28",
          BiggerSVG: "WRiytnKTtULWCkwFVJoTx",
          PreviewContainer: "_13bOrUeolqp9EyK3or-cLt",
          StoreSidebarContainer: "_1CTHwmZmi5YE4kovZH_UIl",
          PurchaseNoticeContainer: "_166hsSkQYxKraMJIx7td91",
          PurchaseNoticeImage: "_3UK9OHyZ3r9rA55mgsnZPD",
          NoticeContainer: "_2IS5rvIlv3ARam8O7b_-po",
          ControllerRequiredImage: "_3YEJ5NoOg1YObev3TXdMi",
          Tilt: "_1NEHd7t-JVZYdk68QMEph-",
          ToolTipControl: "_3vt5rw82YhkhWtu5ld9QeP",
          ToolTipContainer: "_3PRdiJdKKfTnwLnTfbCkEz",
        };
      },
    },
  ]);
})();
