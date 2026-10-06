/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [23027],
    {
      15252: (R, U, t) => {
        "use strict";
        t.d(U, { Ae: () => S, EY: () => D, U6: () => _ });
        var e = t(7850),
          P = t(1039),
          I = t(69289),
          d = t(8928),
          F = t(64238),
          s = t.n(F),
          O = t(65274),
          p = t.n(O);
        function D(h) {
          const { as: g = "span", ref: A, className: f, ...a } = h,
            l = g;
          return (0, e.jsx)(l, {
            ref: A,
            ...(0, I.mz)({ ...a, className: s()(O.Text, f) }, S),
          });
        }
        const _ = [
            {
              prop: "weight",
              responsive: !0,
              className: O.TextWeight,
              cssProperty: (h) => ["--text-weight", `var(--font-weight-${h})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: O.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (h, g, A) => [
                "--text-color",
                (0, I.To)(h, (0, P.I)(g.contrast, A) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (h, g, A) => [
                "--text-color",
                (0, I.To)((0, P.I)(g.color, A) ?? "text-body", h),
              ],
            },
            { prop: "truncate", className: O.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: O.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: O.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          S = [
            ..._,
            ...d.L,
            {
              prop: "size",
              responsive: !0,
              className: (h) => O[`TextSize-${h}`],
            },
          ];
      },
      86336: (R, U, t) => {
        "use strict";
        t.d(U, { W: () => S, Y: () => D });
        var e = t(7850),
          P = t(50122),
          I = t.n(P),
          d = t(15252),
          F = t(69289),
          s = t(24660),
          O = t(70182),
          p = t(3166);
        function D(h) {
          const { underline: g = "auto", focusable: A, navProps: f, ...a } = h,
            l = (0, p.Qn)(),
            L = A ?? f?.focusable ?? !!a.href,
            b = (0, F.mz)({ ...a, underline: g, className: P.TextLink }, _);
          return l && (L || f)
            ? (0, e.jsx)(s.Ii, { ...b, ...(f || {}), focusable: L })
            : (0, e.jsx)("a", { ...b });
        }
        const _ = [
          ...d.Ae,
          { prop: "underline", className: (h) => P[`Underline-${h}`] },
        ];
        function S(h) {
          const { underline: g = "auto", focusable: A, navProps: f, ...a } = h,
            l = (0, p.Qn)(),
            L = A ?? f?.focusable ?? !!a.onClick,
            b = (0, e.jsx)("span", {
              role: "button",
              ...(0, F.mz)(
                { ...a, underline: g, className: P.TextLinkButton },
                _,
              ),
            });
          return l && (L || f)
            ? (0, e.jsx)(O.J, { ...(f || {}), focusable: L, children: b })
            : b;
        }
      },
      15860: (R, U, t) => {
        "use strict";
        t.d(U, { L: () => s, c: () => F });
        var e = t(27386),
          P = t(76617),
          I = t(58632),
          d = t.n(I);
        function F(O, p) {
          return new (d())(
            async (D) => {
              const _ = [...D],
                S = await e.xtC.GetPlayerLinkDetails(O, { steamids: _ }),
                h = new Map();
              return (
                S.Body()
                  .accounts()
                  .forEach((g) => {
                    const A = g.toObject();
                    h.set(A.public_data.steamid, A);
                  }),
                _.map((g) => h.get(g) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...p },
          );
        }
        function s(O) {
          return (0, P.V)("PlayerLinkDetails", () => F(O));
        }
      },
      95174: (R, U, t) => {
        "use strict";
        t.d(U, { u: () => pe, z: () => se });
        var e = t(7850),
          P = t(9046),
          I = t(99412),
          d = t(19298),
          F = t(68266),
          s = t(56492),
          O = t(72609),
          p = t(86298),
          D = t(80702),
          _ = t(21721),
          S = t(95995),
          h = t(29522),
          g = t(40358),
          A = t(72865),
          f = t(41032),
          a = t(65946),
          l = t(68031),
          L = t(90626),
          b = t(73259),
          k = t(33924),
          u = t.n(k),
          N = t(28515),
          x = t(76532),
          E = t.n(x),
          y = t(18057),
          H = t(13465),
          z = t(36118),
          B = t(36707),
          X = t(3166);
        const te = 30;
        function pe(ce) {
          const {
              event: Q,
              imageURLOverride: J,
              bShowAssociatedApp: $,
              langOverride: Z,
              onClick: ae,
              eEventRount: G,
              bHidePrices: q,
              nSummaryMaxLength: ne,
            } = ce,
            re = (0, f.Zj)(Q.appid),
            Be = (0, N.n)(),
            de = Z || (0, I.sfN)(O.TS.LANGUAGE),
            ge =
              (0, F.m0)(
                J !== void 0 ? void 0 : Q,
                "capsule",
                de,
                P.wI.capsule_main,
              ) ?? J,
            fe =
              (0, F.m0)(J !== void 0 ? void 0 : Q, "capsule", de, P.wI.full) ??
              J,
            [De, Te, xe, he] = (0, a.q3)(() => [
              Q.GetNameWithFallback(de) || "",
              Q.GetCategoryAsString(),
              Q.GetSummaryWithFallback(de, ne),
              Q.GetSubTitleWithLanguageFallback(de) || "",
            ]),
            Re = (0, h.$5)(Q.appid),
            { data: me } = (0, g.lv)(Re),
            oe = [];
          if ((ge && oe.push(ge), fe && fe !== ge && oe.push(fe), me)) {
            const Ae = (0, _.b0)(me, "main_capsule");
            Ae && oe.push(Ae);
          }
          const [Ie, ye] = (0, L.useState)(ge),
            Fe = (Ae, Ve, Oe) => {
              Oe >= oe.length && ye(void 0), ye(oe[Oe + 1]);
            };
          if (!Q)
            return (0, e.jsx)("div", { className: u().OtherEvents_EventCtn });
          const We = Q ? Q.GetStartTimeAndDateUnixSeconds() : 0;
          let Ee = he;
          return (
            he && (he.length > te || De.length > te) && (Ee = void 0),
            (0, e.jsxs)("div", {
              className: u().EventSizer,
              children: [
                (0, e.jsxs)(s.tj, {
                  className: (0, B.A)(
                    u().OtherEvents_EventCtn,
                    "OtherEvents_EventCtn",
                    u().HoversEnabled,
                  ),
                  eventModel: Q,
                  route: G || s.PH.k_eView,
                  onClick: ae,
                  preferredFocus: !0,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, B.A)(
                        u().EventSummaryContainer,
                        u().HideInWideMode,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: u().EventSummaryType,
                          children: Te,
                        }),
                        (0, e.jsx)("div", {
                          className: u().EventSummaryText,
                          children: xe,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: u().OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: Ie ? `url(${(0, b.j3)(Ie)})` : "none",
                      },
                    }),
                    (0, e.jsxs)("div", {
                      className: u().OtherEvents_ContentCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, B.A)(
                            u().OtherEvents_MainImageCtn,
                            re && u().MaskImages,
                          ),
                          children: (0, e.jsx)(H.c, {
                            rgSources: oe,
                            onIncrementalError: Fe,
                            className: u().OtherEvents_MainImage,
                            alt: "",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: u().OtherEvents_TextCtn,
                          children: [
                            (0, e.jsx)("div", {
                              className: u().OtherEvents_TextTitle,
                              children: De,
                            }),
                            !!Ee &&
                              (0, e.jsx)("div", {
                                className: u().OtherEvents_SubTitle,
                                children: Ee,
                              }),
                            (0, e.jsxs)(l.s, {
                              direction: "row",
                              gap: "3",
                              align: "center",
                              children: [
                                (0, e.jsx)("div", {
                                  className: (0, B.A)(
                                    u().EventType,
                                    u().ShowInWideMode,
                                  ),
                                  children: Te,
                                }),
                                We > Be
                                  ? (0, e.jsx)("div", {
                                      className: (0, B.A)(
                                        u().UpcomingCtn,
                                        "UpcomingCtn",
                                      ),
                                      children: (0, e.jsx)(y.K4, {
                                        bSingleLine: !0,
                                        dateAndTime:
                                          Q.GetStartTimeAndDateUnixSeconds(),
                                      }),
                                    })
                                  : (0, e.jsx)(y.K4, {
                                      bSingleLine: !0,
                                      bOnlyDate: !0,
                                      dateAndTime:
                                        Q.GetStartTimeAndDateUnixSeconds(),
                                    }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: (0, B.A)(
                                u().EventSummaryText,
                                u().ShowInWideMode,
                              ),
                              children: xe,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !!($ && Q.appid) &&
                  (0, e.jsx)(se, { appid: Q.appid, bHidePrice: q }),
              ],
            })
          );
        }
        function se(ce) {
          const { appid: Q, bHidePrice: J } = ce,
            $ = (0, h.$5)(Q),
            { data: Z } = (0, g.J$)($),
            { data: ae } = (0, g.lv)($),
            { data: G } = (0, g.Q_)($),
            q = (0, A.n9)(),
            ne = (0, X.Qn)();
          if (!ae || !Z) return null;
          const re = G && G.hide_discount_pct_for_compliance;
          return (0, e.jsx)(S.A, {
            appID: Q,
            children: (0, e.jsxs)(d.Z, {
              className: (0, B.A)(u().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, p.S)(Z, q, ne, !1),
              children: [
                (0, e.jsx)(D.Q, {
                  id: $,
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px" },
                  },
                  children: (0, e.jsx)("img", {
                    className: (0, B.A)(u().AppCapsuleImage, u().CapsuleShadow),
                    src: (0, _.b0)(ae, "small_capsule"),
                    alt: Z.name,
                  }),
                }),
                !J &&
                  !Z.is_free &&
                  (0, e.jsxs)("span", {
                    className: (0, B.A)(
                      u().AppCapsulePrice,
                      G?.discount_pct ? E().Discounted : "",
                    ),
                    children: [
                      !!(G?.discount_pct && re) &&
                        (0, e.jsx)("div", {
                          className: E().DiscountIconCtn,
                          children: (0, e.jsx)(z.XH_, {}),
                        }),
                      !!(G?.discount_pct && !re) &&
                        (0, e.jsx)("span", {
                          className: E().StoreSaleDiscountBox,
                          children: `-${G?.discount_pct}%`,
                        }),
                      G &&
                        G.final_price_in_cents &&
                        (0, e.jsx)("span", {
                          className: E().StoreSalePriceBox,
                          children: G.formatted_final_price,
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
      },
      95414: (R, U, t) => {
        "use strict";
        t.d(U, { j: () => h, u: () => g });
        var e = t(7850),
          P = t(90626),
          I = t(24660),
          d = t(83482),
          F = t(72865),
          s = t(77200),
          O = t(53113),
          p = t(68094),
          D = t(72609),
          _ = t(3166);
        function S(A) {
          if (A) {
            if ("appid" in A) return "app";
            if ("bundleid" in A) return "bundle";
            if ("packageid" in A) return "sub";
          }
        }
        function h(A) {
          const {
              id: f,
              hoverClassName: a,
              fnGetIDOverride: l,
              fnHoverState: L,
              disableScreenshots: b,
              children: k,
            } = A,
            u = P.useRef(null),
            N = P.useCallback(
              (E) => {
                const y = S(f);
                y &&
                  (L && L(!0),
                  window.GameHover &&
                    (u.current &&
                      b &&
                      (u.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(l ? l() : u.current, E, "global_hover", {
                      type: y,
                      id: (0, p.G$)(f).id,
                      v6: 1,
                    })));
              },
              [L, l, b, f],
            ),
            x = P.useCallback(
              (E) => {
                S(f) &&
                  (L && E.relatedTarget && L(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      l ? l() : u.current,
                      E,
                      "global_hover",
                    ));
              },
              [f, L, l],
            );
          return (0, e.jsx)("div", {
            ref: u,
            className: a,
            onMouseEnter: N,
            onMouseLeave: x,
            onFocus: N,
            onBlur: x,
            children: k,
          });
        }
        function g(A) {
          const {
              id: f,
              strExtraParams: a,
              fnOnClickOverride: l,
              strOverrideURL: L,
            } = A,
            b = (0, F.n9)(),
            k = (0, s.w)(),
            u = (0, O.NT)(
              L ||
                (f && "creatorid" in f
                  ? (0, d.It)(
                      `${D.TS.STORE_BASE_URL}curator/${((0, p.G$))(f).id}${a ? `?${a}` : ""}`,
                      b,
                      k,
                    )
                  : (0, d.It)(
                      `${D.TS.STORE_BASE_URL}${S(f)}/${((0, p.G$))(f).id}${a ? `?${a}` : ""}`,
                      b,
                      k,
                    )),
            );
          return (0, e.jsx)(h, {
            ...A,
            children: (0, e.jsx)(I.Ii, {
              className: A.className,
              href: l ? void 0 : u,
              target: D.TS.IN_CLIENT || l ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: l,
              children: A.children,
            }),
          });
        }
      },
      64774: (R, U, t) => {
        "use strict";
        t.d(U, { _: () => u, r: () => k });
        var e = t(7850),
          P = t(78192),
          I = t(29522),
          d = t(40358),
          F = t(72865),
          s = t(24179),
          O = t(54528),
          p = t(96362),
          D = t(90626),
          _ = t(83482),
          S = t(76532),
          h = t.n(S),
          g = t(85705),
          A = t(36118),
          f = t(71421),
          a = t(36707),
          l = t(18210),
          L = t(3166),
          b = t(89926);
        function k(E) {
          const { appid: y, className: H, bTextMode: z } = E,
            B = (0, I.$5)(y),
            { data: X } = (0, d.J$)(B),
            { data: te } = (0, d.by)(B);
          return (0, e.jsx)(u, {
            appid: y,
            bIsFree: !!X?.is_free,
            bIsComingSoon: !!te?.is_coming_soon,
            bTextMode: z,
            className: H,
          });
        }
        function u(E) {
          const [y, H] = D.useState(!1),
            z = (0, F.n9)(),
            {
              appid: B,
              bIsFree: X,
              bIsComingSoon: te,
              className: pe,
              bTextMode: se,
            } = E,
            ce = (0, I.$5)(B),
            { bIsOwned: Q } = (0, s.ZJ)(ce),
            J = (0, O.bB)(B),
            { mutateAsync: $ } = (0, p.s)(B, !J, (0, _.L3)(z)),
            { elDialogElement: Z, fnShowLogonDialog: ae } = (0, b.l)(),
            G = async () => {
              if (!L.iA.logged_in) {
                ae();
                return;
              }
              y || (H(!0), await $(), H(!1));
            };
          if (Q || (!te && X))
            return X ? (0, e.jsx)(N, { possibleDemoAppID: B }) : null;
          let q = null;
          return (
            y && !se
              ? (q = (0, e.jsx)(g.k, { size: 18 }))
              : J
                ? J &&
                  (q = se ? (0, l.we)("#OnWishlist") : (0, e.jsx)(A.qnF, {}))
                : (q = se
                    ? (0, l.we)("#wishlist_add_to_wishlist")
                    : (0, e.jsx)(A.T4m, {})),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(f.he, {
                  toolTipContent: (0, l.we)("#AddToWishlist_ttip"),
                  children: (0, e.jsx)("div", {
                    className: (0, a.A)(h().WishList, pe),
                    onClick: G,
                    children: q,
                  }),
                }),
                Z,
              ],
            })
          );
        }
        function N(E) {
          const { possibleDemoAppID: y, className: H } = E,
            z = (0, I.$5)(y),
            { data: B } = (0, d.J$)(z);
          return B &&
            (B.type == P.uE.ue || B.type == P.uE.Vi) &&
            B.related_items?.parent_appid
            ? (0, e.jsx)(x, {
                parentAppID: B.related_items?.parent_appid,
                className: H,
              })
            : null;
        }
        function x(E) {
          const { parentAppID: y, className: H } = E,
            z = (0, I.$5)(y),
            { data: B } = (0, d.J$)(z),
            { data: X } = (0, d.by)(z);
          return !B || !X
            ? null
            : (0, e.jsx)(u, {
                appid: y,
                bIsComingSoon: !!X.is_coming_soon,
                bIsFree: !!B.is_free,
                className: H,
              });
        }
      },
      76617: (R, U, t) => {
        "use strict";
        t.d(U, { V: () => p });
        function e(D) {
          return Object.prototype.toString.call(D) === "[object Object]";
        }
        function P(D) {
          if (!e(D)) return !1;
          const _ = D.constructor;
          if (typeof _ > "u") return !0;
          const S = _.prototype;
          return !(
            !e(S) || !Object.prototype.hasOwnProperty.call(S, "isPrototypeOf")
          );
        }
        function I(...D) {
          return JSON.stringify(D, (_, S) => {
            if (P(S)) {
              const h = {};
              return (
                Object.keys(S)
                  .sort()
                  .forEach((g) => {
                    h[g] = S[g];
                  }),
                h
              );
            }
            return S;
          });
        }
        var d = t(90626),
          F = t(7850);
        const s = (0, d.createContext)({ instances: {}, factories: {} });
        function O(D) {
          const { name: _, fnFactory: S, children: h } = D,
            g = React.useContext(s),
            [A] = useState({}),
            f = useMemo(
              () => ({
                instances: A,
                factories: { ...g.factories, [_]: S },
                parent: g,
              }),
              [A, _, g],
            );
          return jsx(s.Provider, { value: f, children: h });
        }
        function p(D, _) {
          const S = (0, d.useContext)(s),
            h = typeof D == "string" ? D : I(...D);
          let g = S;
          for (; g; ) {
            if (h in g.instances) return g.instances[h];
            if (h in g.factories) break;
            g = g.parent;
          }
          const f = (g?.factories[h] ?? _)();
          return ((g ?? S).instances[h] = f), f;
        }
      },
      7582: (R, U, t) => {
        "use strict";
        t.d(U, { HD: () => p, f1: () => A, s4: () => f, sB: () => g });
        var e = t(19367),
          P = t.n(e),
          I = t(90626),
          d = t(59432),
          F = t(47689),
          s = t(77291);
        class O {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, d.mm)();
          }
          set nOverrideDateNow(l) {
            (0, d.ai)(l);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, d.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, d.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, d.mm)();
          }
          ParseDevOverrides(l) {
            if (!l || l.length == 0) return;
            new URLSearchParams(l[0] == "?" ? l.substring(1) : l).has("t");
          }
        }
        const p = new O();
        (0, s.V)("g_EventCalendarDevFeatures", p);
        function D(a = 1) {
          const [l, L] = React.useState(() => h()),
            b = useCancelTokenSource("useTimeNowWithOverride"),
            k = React.useCallback(() => {
              b.token.reason || L(h());
            }, []);
          return (
            React.useEffect(() => {
              const u = 1e3 * a,
                N = Date.now() % u,
                x = u - N,
                E = window.setTimeout(k, x);
              return () => {
                window.clearTimeout(E);
              };
            }, [l, a, k]),
            l
          );
        }
        const S = Math.floor(new Date().getTime() / 1e3);
        function h() {
          const a = Math.floor(Date.now() / 1e3);
          return p.nOverrideDateNow ? p.nOverrideDateNow + (a - S) : a;
        }
        function g() {
          return p.nOverrideDateNow ?? S;
        }
        function A() {
          return I.useMemo(() => g(), []);
        }
        function f() {
          return I.useMemo(() => p.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      35098: (R, U, t) => {
        "use strict";
        t.d(U, { DW: () => h, js: () => _, mK: () => l, tb: () => a });
        var e = t(90626),
          P = t(80902),
          I = t(54806),
          d = t(99412),
          F = t(68312),
          s = t(15369),
          O = t(5858),
          p = t(76559),
          D = t(15860);
        function _(u) {
          const N = (0, F.KV)(),
            x = e.useContext(f);
          return (0, P.I)(l(x, N, u));
        }
        function S(u) {
          const N = React.useRef(void 0),
            x = _(u);
          return x.data
            ? x
            : (N.current ||
                (N.current = new CPersonaStateImpl(
                  typeof u == "string"
                    ? new CSteamID(u)
                    : CSteamID.InitFromAccountID(u),
                )),
              { ...x, data: N.current });
        }
        function h(u) {
          const N = (0, F.KV)(),
            x = e.useContext(f);
          return (0, I.E)({ queries: u.map((E) => l(x, N, E)) });
        }
        function g(u) {
          return ReactQueryClient.getQueryData(["PlayerSummary", u]);
        }
        function A(u) {
          const { loadPersonaState: N, children: x } = u,
            E = React.useMemo(() => ({ loadPersonaState: N }), [N]);
          return React.createElement(f.Provider, { value: E }, x);
        }
        const f = e.createContext({
          loadPersonaState: async (u, N) => {
            if (u == null) return null;
            const x = await b(N).load(
              p.b.InitFromAccountID(u).ConvertTo64BitString(),
            );
            return k(p.b.InitFromAccountID(u), x);
          },
        });
        function a() {
          return e.useContext(f);
        }
        function l(u, N, x) {
          const E = typeof x == "string" ? new p.b(x).GetAccountID() : x;
          return {
            queryKey: ["PlayerSummary", E],
            queryFn: () => u.loadPersonaState(E, N),
            enabled: !!E,
          };
        }
        let L;
        function b(u) {
          return (L ??= (0, D.c)(u));
        }
        function k(u, N) {
          let x = new O.Z(u);
          const E = N?.public_data,
            y = N?.private_data;
          return (
            (x.m_bInitialized = !!N),
            (x.m_ePersonaState = y?.persona_state ?? d.cU3),
            (x.m_strAvatarHash = E?.sha_digest_avatar
              ? (0, s.Kx)(E.sha_digest_avatar)
              : O.dV),
            (x.m_strPlayerName = E?.persona_name ?? u.ConvertTo64BitString()),
            (x.m_strAccountName = y?.account_name),
            y?.persona_state_flags &&
              (x.m_unPersonaStateFlags = y?.persona_state_flags),
            y?.game_id && (x.m_gameid = y?.game_id),
            y?.game_server_ip_address &&
              (x.m_unGameServerIP = y?.game_server_ip_address),
            y?.lobby_steam_id && (x.m_game_lobby_id = y?.lobby_steam_id),
            y?.game_extra_info && (x.m_strGameExtraInfo = y?.game_extra_info),
            E?.profile_url && (x.m_strProfileURL = E.profile_url),
            x
          );
        }
      },
      86390: (R, U, t) => {
        "use strict";
        t.d(U, { Cg: () => h, pZ: () => A, vg: () => g });
        var e = t(7850),
          P = t(90626),
          I = t(88003),
          d = t(18210),
          F = t(3166),
          s = t(34004),
          O = t(6740),
          p = t(3685),
          D = t(8059),
          _ = t(96538);
        function S(a) {
          return (0, e.jsx)(I.x_, {
            onEscKeypress: a.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(f, {
              redirectURL: a.redirectURL,
              guestOption: a.guestOption,
            }),
          });
        }
        function h(a) {
          const { redirectURL: l = window.location.href } = a;
          return (0, e.jsx)(_.EN, {
            active: !0,
            children: (0, e.jsx)(S, { redirectURL: l }),
          });
        }
        function g() {
          (0, I.pg)(
            (0, e.jsx)(S, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, d.we)("#Login_SignInTitle") },
          );
        }
        function A(a, l) {
          (0, I.pg)(
            (0, e.jsx)(S, { ownerWin: window, redirectURL: a, guestOption: l }),
            window,
            { strTitle: (0, d.we)("#Login_SignInTitle") },
          );
        }
        function f(a) {
          const { redirectURL: l, guestOption: L } = a,
            [b] = (0, P.useState)(
              new p.D(F.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [k, u] = (0, P.useState)(!1),
            N = (x) => {
              x == D.wI.k_PrimaryDomainFail ? u(!0) : window.location.assign(l);
            };
          return (0, e.jsx)("div", {
            children: k
              ? (0, e.jsx)(s.Fn, {})
              : (0, e.jsx)(s.YN, {
                  autoFocus: !0,
                  transport: b,
                  platform: O.SS.tS,
                  onComplete: N,
                  redirectUrl: l,
                  theme: "modal",
                  children: L && (0, e.jsx)(s.Mk, { redirectURL: l }),
                }),
          });
        }
      },
      37643: (R, U, t) => {
        "use strict";
        t.r(U), t.d(U, { default: () => Mt });
        var e = t(7850),
          P = t(58732),
          I = t(92757),
          d = t(90626),
          F = t(85415),
          s = t.n(F),
          O = t(24660),
          p = t(19298),
          D = t(95414),
          _ = t(76035),
          S = t(98609),
          h = t(82734),
          g = t(3166),
          A = t(16412),
          f = t(36118),
          a = t(18210),
          l = t(36707),
          L = t(96538),
          b = t(88003),
          k = t(27386),
          u = t(86390),
          N = t(34041),
          x = t(85599),
          E = t(84676),
          y = t(72604),
          H = t(51079),
          z = t(18994),
          B = t(68538),
          X = t(77495),
          te = t(76559),
          pe = t(90537),
          se = t(95174),
          ce = t(10142),
          Q = t(72849),
          J = t(91424),
          $ = t(30096),
          Z = t(71568),
          ae = t(28124),
          G = t(98144),
          q = t(29522),
          ne = t(40358),
          re = t(21721);
        const Be = {
          include_basic_info: !0,
          include_assets_without_overrides: !0,
        };
        function de(r) {
          const {
              category: n,
              fnShowPicker: i,
              rgPrevLaborOfLoveWinners: c,
            } = r,
            [o, m] = d.useState("");
          if (!(0, _.jT)(n.voteid).data)
            return (0, e.jsx)(x.t, {
              size: "medium",
              position: "center",
              msDelayAppear: 200,
            });
          let C = (0, a.we)("#Steamawards_Nominate_ThisYear");
          return (
            n.flag == N.Xs.bV &&
              (C = (0, a.we)("#Steamawards_Nominate_PastYear")),
            (0, e.jsxs)("div", {
              className: s().NominationPickerCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: s().TopRow,
                  children: [
                    (0, e.jsx)("div", {
                      className: s().TopBarText,
                      children: C,
                    }),
                    (0, e.jsx)("div", {
                      className: s().SearchBarCtn,
                      children: (0, e.jsx)(A.pd, {
                        focusOnMount: !0,
                        onChange: (w) =>
                          m(w.currentTarget.value.toLocaleLowerCase()),
                        value: o,
                        className: s().SearchBar,
                        placeholder: (0, a.we)("#Steamawards_Nominate_Search"),
                        bShowClearAction: !0,
                      }),
                    }),
                    (0, e.jsx)(O.fu, {
                      className: s().CloseButton,
                      onClick: () => i(!1),
                      children: (0, a.we)("#Button_Close"),
                    }),
                  ],
                }),
                o.trim().length > 0
                  ? (0, e.jsx)(De, {
                      strSearch: o,
                      category: n,
                      rgPrevLaborOfLoveWinners: c,
                    })
                  : (0, e.jsx)(ge, { category: n, fnShowPicker: i }),
                (0, e.jsx)("div", {
                  className: s().BottomRow,
                  children: (0, e.jsx)(me, {
                    unAppID: _.Fq,
                    eSteamAwardCategoryID: n.voteid,
                    eNominatonSource: N.Ji.HW,
                    fnShowPicker: i,
                  }),
                }),
              ],
            })
          );
        }
        function ge(r) {
          const { category: n, fnShowPicker: i } = r,
            c = (0, _.jT)(n.voteid),
            o = (0, _.cO)(),
            m = (0, g.Qn)(),
            j = d.useMemo(() => {
              let C = [];
              return c.data.played_app
                .map((T) => ({ appID: T.appid, nPlaytime: T.playtime }))
                .filter((T) =>
                  o.data?.some(
                    (K) => K.appid == T.appID && K.category_id != n.voteid,
                  )
                    ? (C.push(T), !1)
                    : !0,
                )
                .concat(C);
            }, [n.voteid, o.data, c.data.played_app]);
          return (0, e.jsxs)("div", {
            className: s().CarouselView,
            children: [
              c.data?.played_app?.length
                ? (0, e.jsxs)("div", {
                    className: (0, l.A)(s().RecommendationRow, s().Games),
                    children: [
                      (0, e.jsx)("div", {
                        className: s().RecommendationRowTitle,
                        children: (0, a.we)(
                          "#Steamawards_Nominate_GamesYouPlayed",
                        ),
                      }),
                      (0, e.jsx)(he, {
                        eSteamAwardCategoryID: n.voteid,
                        eNominatonSource: N.Ji.MU,
                        rgGameCarouselItems: j,
                      }),
                    ],
                  })
                : (0, e.jsx)(fe, {
                    eSteamAwardCategoryID: n.voteid,
                    fnShowPicker: i,
                  }),
              !m &&
                c.data?.suggested_events?.length > 0 &&
                (0, e.jsxs)("div", {
                  className: (0, l.A)(s().RecommendationRow, s().Events),
                  children: [
                    (0, e.jsx)("div", {
                      className: s().RecommendationRowTitle,
                      children: (0, a.we)("#Steamawards_Nominate_Events"),
                    }),
                    (0, e.jsx)(oe, { rgEvents: c.data.suggested_events }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: (0, l.A)(s().RecommendationRow, s().Games),
                children: [
                  (0, e.jsx)("div", {
                    className: s().RecommendationRowTitle,
                    children: (0, a.we)("#Steamawards_Nominate_Recommended"),
                  }),
                  c.data?.suggested_apps &&
                    (0, e.jsx)(he, {
                      eSteamAwardCategoryID: n.voteid,
                      eNominatonSource: N.Ji.qP,
                      rgGameCarouselItems: c.data.suggested_apps.map((C) => ({
                        appID: C.appid,
                      })),
                    }),
                ],
              }),
            ],
          });
        }
        function fe(r) {
          const { eSteamAwardCategoryID: n, fnShowPicker: i } = r;
          return (0, e.jsxs)("div", {
            className: (0, l.A)(s().RecommendationRow, s().NoEligibleGamesCtn),
            children: [
              (0, e.jsx)("div", {
                className: s().RecommendationRowTitle,
                children: (0, a.we)("#Steamawards_Nominate_NoEligibleGames"),
              }),
              (0, e.jsx)("div", {
                className: s().RecommendationRowSubtitle,
                children: (0, a.we)(
                  "#Steamawards_Nominate_NoEligibleGames_cont",
                ),
              }),
              (0, e.jsx)(me, {
                unAppID: _.Fq,
                eSteamAwardCategoryID: n,
                eNominatonSource: N.Ji.HW,
                fnShowPicker: i,
              }),
            ],
          });
        }
        function De(r) {
          const { strSearch: n, category: i, rgPrevLaborOfLoveWinners: c } = r,
            o = (0, _.lE)(n, i, c),
            m = d.useRef(void 0),
            j = (0, g.Qn)();
          return (
            d.useEffect(() => {
              m?.current && j && m.current.scrollIntoView();
            }, [o, j]),
            (0, e.jsx)("div", {
              className: s().SearchContainer,
              ref: m,
              children: o.isLoading
                ? (0, e.jsx)(x.t, {
                    className: s().SearchThrobber,
                    size: "large",
                    position: "center",
                    msDelayAppear: 200,
                  })
                : (0, e.jsx)(e.Fragment, {
                    children:
                      o.data?.length > 0
                        ? (0, e.jsx)(p.Z, {
                            className: s().SearchResultsContainer,
                            children: o.data.map((C) =>
                              (0, e.jsx)(
                                Te,
                                {
                                  eSteamAwardCategoryID: i.voteid,
                                  eNominatonSource: N.Ji.RU,
                                  appSuggestion: C,
                                },
                                C.id,
                              ),
                            ),
                          })
                        : (0, e.jsx)("div", {
                            className: s().NoResultsCtn,
                            children: (0, a.we)(
                              "#Steamawards_Search_NoResults",
                            ),
                          }),
                  }),
            })
          );
        }
        function Te(r) {
          const {
              appSuggestion: n,
              eSteamAwardCategoryID: i,
              eNominatonSource: c,
            } = r,
            o = parseInt(n.id),
            m = (0, q.$5)(o);
          return (0, e.jsxs)(p.Z, {
            className: s().SearchResultApp,
            children: [
              (0, e.jsx)(D.u, {
                id: m,
                children: (0, e.jsx)("img", { src: n.small_cap }),
              }),
              (0, e.jsx)(me, {
                eSteamAwardCategoryID: i,
                eNominatonSource: c,
                unAppID: o,
              }),
            ],
          });
        }
        function xe(r) {
          let n = 1;
          return (
            r.innerWidth >= 1080
              ? (n = 4)
              : r.innerWidth >= 800
                ? (n = 3)
                : r.innerWidth >= 600 && (n = 2),
            n
          );
        }
        function he(r) {
          const {
              rgGameCarouselItems: n,
              eSteamAwardCategoryID: i,
              eNominatonSource: c,
            } = r,
            o = (0, E.zX)(
              n?.map((V) => V.appID),
              Be,
            ),
            j = (0, Z.R7)()?.ownerWindow || window,
            [C, w] = d.useState(() => xe(j)),
            T = (0, g.Qn)(),
            W = d.useCallback(
              (V) => {
                w(xe(j));
              },
              [j],
            ),
            K = (0, $.wY)(W);
          if (o == E.Sq) return null;
          const Y = n.filter((V) => ce.A.Get().BHasApp(V.appID));
          return (0, e.jsx)("div", {
            ref: K,
            className: s().SuggestionCarousel,
            children: (0, e.jsx)(H.Ay, {
              feature: "steamawards_nominate",
              children: (0, e.jsx)(B.F, {
                gap: 12,
                hideArrows: !(0, z.rp)(),
                visibleElements: C,
                useTestScrollbar: !0,
                bLazyRenderChildren: !0,
                hidePips: T,
                screenIsWide: (0, z.rp)(),
                children: Y.map((V) =>
                  (0, e.jsx)(
                    Re,
                    {
                      eNominatonSource: c,
                      eSteamAwardCategoryID: i,
                      appID: V.appID,
                      nPlaytime: V.nPlaytime,
                    },
                    V.appID,
                  ),
                ),
              }),
            }),
          });
        }
        function Re(r) {
          const {
              appID: n,
              eSteamAwardCategoryID: i,
              eNominatonSource: c,
              nPlaytime: o,
            } = r,
            m = (0, q.$5)(n),
            { data: j } = (0, ne.J$)(m),
            { data: C } = (0, ne.gy)(m);
          if (!j) return null;
          let w = null;
          return (
            o && (w = (o / 60).toFixed(1)),
            (0, e.jsxs)("div", {
              className: s().GameCarouselItemCtn,
              children: [
                w &&
                  (0, e.jsx)("div", {
                    className: s().PlaytimeIndicator,
                    children: (0, a.we)("#Steamawards_Playtime_Hours", w),
                  }),
                (0, e.jsx)(D.u, {
                  id: m,
                  children: (0, e.jsx)("img", {
                    className: ae.AppCapsuleImage,
                    src: (0, re.b0)(C, "small_capsule"),
                    alt: j.name || "",
                  }),
                }),
                (0, e.jsx)(me, {
                  unAppID: n,
                  eNominatonSource: c,
                  eSteamAwardCategoryID: i,
                }),
              ],
            })
          );
        }
        function me(r) {
          const {
              unAppID: n,
              eSteamAwardCategoryID: i,
              eNominatonSource: c,
              fnShowPicker: o,
            } = r,
            m = (0, _.cO)(),
            C = (0, Z.R7)()?.ownerWindow || window,
            w = n === _.Fq,
            T = d.useMemo(
              () => m.data?.find((ue) => ue.category_id == i)?.appid === n,
              [i, m.data, n],
            ),
            W = d.useCallback(
              (ee) => {
                let ue = (0, a.we)(
                  "#Steamawards_Nominate_Error_Generic",
                  n,
                  ee ?? "Unknown",
                );
                ee == y.p &&
                  (ue = (0, a.we)("#Steamawards_Nominate_Error_NoMatch", n)),
                  (0, L.pY)(ue, C);
              },
              [C, n],
            ),
            K = d.useCallback(() => {
              n === _.Fq && o && o(!1);
            }, [o, n]),
            Y = (0, _.$d)(n, i, c, W, K);
          let V = (0, a.we)("#Steamawards_Nominate"),
            _e = null,
            we = (ee) => {
              if (T) {
                ee.preventDefault();
                return;
              }
              if ((0, G.UserEligibleToNominateOrVote)(!1)) Y.mutate();
              else {
                console.log(
                  "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                );
                return;
              }
            };
          return (
            w
              ? ((V = (0, a.we)("#Steamawards_Skip_Btn")),
                (_e = (0, e.jsx)(f.MOk, {})))
              : T && (V = (0, a.we)("#Steamawards_Nominated")),
            (0, e.jsxs)(A.$n, {
              onClick: we,
              className: (0, l.A)(s().NominateGameButton, T && s().Nominated),
              children: [_e, V],
            })
          );
        }
        function oe(r) {
          const { rgEvents: n } = r,
            [i, c] = d.useState(!1),
            m = (0, Z.R7)()?.ownerWindow || window,
            [j, C] = d.useState(4),
            w = d.useCallback(
              (W) => {
                let K = 1;
                m.innerWidth >= 1080
                  ? (K = 4)
                  : m.innerWidth >= 920
                    ? (K = 3)
                    : m.innerWidth >= 600 && (K = 2),
                  C(K);
              },
              [m],
            ),
            T = (0, $.wY)(w);
          return (
            d.useEffect(() => {
              if (i) return;
              (async () => {
                n.forEach((Y) => {
                  X.O3.QueueLoadPartnerEvent(Y.clanid, Y.event_gid, !1);
                });
                const K = n.map((Y) =>
                  X.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    te.b.InitFromClanID(Y.clanid),
                    Y.event_gid,
                    0,
                    !1,
                  ),
                );
                await Promise.all(K), c(!0);
              })();
            }, [n, i]),
            n.length
              ? i
                ? (0, e.jsx)("div", {
                    ref: T,
                    className: s().EventCarousel,
                    children: (0, e.jsx)(H.Ay, {
                      feature: "steamawards_event",
                      children: (0, e.jsx)(B.F, {
                        gap: 12,
                        hideArrows: !(0, z.rp)(),
                        visibleElements: j,
                        useTestScrollbar: !0,
                        bLazyRenderChildren: !0,
                        className: s().GameCarousel,
                        screenIsWide: (0, z.rp)(),
                        children: n.map((W) =>
                          (0, e.jsx)(
                            Ie,
                            { gidEvent: W.event_gid },
                            W.event_gid,
                          ),
                        ),
                      }),
                    }),
                  })
                : (0, e.jsx)(x.t, {
                    className: s().EventCarousel,
                    size: "xlarge",
                    position: "center",
                  })
              : null
          );
        }
        function Ie(r) {
          const { gidEvent: n } = r,
            i = X.O3.GetClanEventModel(n),
            c = (0, pe.Y)();
          if (!i) return null;
          const o = (m) => {
            c.RecordEventRead(i, Q.Tc.HX),
              (0, J.Y)(i, h.uX(m)),
              m.stopPropagation(),
              m.preventDefault();
          };
          return (0, e.jsx)(se.u, {
            event: i,
            bShowAssociatedApp: !0,
            bHidePrices: !0,
            onClick: o,
          });
        }
        var ye = t(179),
          Fe = t(35098),
          We = t(19367),
          Ee = t.n(We),
          Ae = t(7582);
        function Ve(r) {
          const { steamID: n, nYear: i } = r,
            [c] = (0, ye.QD)("k", null),
            o = !!((n && n != S.iA.steamid) || c),
            m = Ee()("2025-12-01T10:00:00-08:00").unix(),
            j = Ae.HD.GetTimeNowWithOverride(),
            C = !o && j <= m;
          return (
            d.useEffect(() => {
              X.O3.Init();
            }, []),
            (0, e.jsx)(H.Ay, {
              method: "nominations",
              children: (0, e.jsxs)(p.Z, {
                className: s().NominationsPageContent,
                children: [
                  o
                    ? (0, e.jsx)(ze, { bEnableNominating: C, steamid: n })
                    : (0, e.jsx)(Oe, { year: i }),
                  !o &&
                    (0, e.jsxs)("div", {
                      className: (0, l.A)(
                        s().SectionContent,
                        s().ProgressAndShareCtn,
                      ),
                      children: [
                        (0, e.jsx)(Ye, {}),
                        (0, e.jsx)(rt, { nYear: i }),
                      ],
                    }),
                  (0, e.jsx)(Xe, { bEnableNominating: C }),
                  (0, e.jsxs)("div", {
                    className: s().BackgroundDark,
                    children: [!o && (0, e.jsx)($e, {}), (0, e.jsx)(st, {})],
                  }),
                ],
              }),
            })
          );
        }
        function Oe(r) {
          return (0, e.jsx)("div", {
            className: s().NominationsHeaderCtn,
            children: (0, e.jsx)("div", {
              className: s().FAQHeaderArea,
              children: (0, e.jsxs)("div", {
                className: s().FAQHeaderCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: s().FAQSaletitle,
                    children: (0, a.PP)(
                      "#Steamawards_Title",
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: s().FAQComingsoon,
                    children: (0, a.we)("#Steamawards_NominateNow"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().FAQComingsoon,
                    children: (0, a.we)("#Steamawards_LevelUpNow", r.year),
                  }),
                  (0, e.jsx)("div", {
                    className: s().FAQComingsoon,
                    children: (0, a.we)("#Steamawards_VoteWinter"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().FAQComingsoon,
                    children: (0, a.we)("#Steamawards_WinnersAnnounced"),
                  }),
                ],
              }),
            }),
          });
        }
        function ze(r) {
          const { steamid: n, bEnableNominating: i } = r,
            c = (0, Fe.js)(n);
          return (0, e.jsx)("div", {
            className: s().NominationsHeaderCtn,
            children: (0, e.jsxs)("div", {
              className: (0, l.A)(s().FAQHeaderArea, s().FriendsHeader),
              children: [
                (0, e.jsxs)("div", {
                  className: s().FriendsHeaderCtn,
                  children: [
                    (0, e.jsx)("img", { src: c.data?.avatar_url_full }),
                    (0, e.jsxs)("div", {
                      className: s().FriendsTitleCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, l.A)(s().FriendsTitle, s().Gold),
                          children: (0, a.we)("#Steamawards_TheSteamAwards"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FriendsTitle,
                          children: (0, a.we)(
                            "#Steamawards_FriendsNominations",
                            c.data?.m_strPlayerName,
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                i &&
                  (0, e.jsx)("div", {
                    className: s().HeaderButtonCtn,
                    children: (0, e.jsx)("a", {
                      href: `${g.TS.STORE_BASE_URL}steamawards/nominations`,
                      className: (0, l.A)(s().NominateGameButton, s().White),
                      children: (0, a.we)(
                        "#Steamawards_MakeYourOwnNominations_Btn",
                      ),
                    }),
                  }),
              ],
            }),
          });
        }
        function Ye(r) {
          const n = (0, _.cO)(),
            i = (0, _.Jo)(_.Ri);
          if (!i.data?.votes) return null;
          const c = !n.data || n.data.length == 0 ? "0" : "" + n.data.length;
          return (0, e.jsx)(p.Z, {
            className: (0, l.A)(s().NominationProgressCtn),
            children: (0, e.jsx)("div", {
              className: s().ProgressTitle,
              children: (0, a.PP)(
                "#Steamawards_TotalNominations",
                c,
                i.data?.votes?.length,
              ),
            }),
          });
        }
        function Xe(r) {
          const { bEnableNominating: n } = r,
            i = (0, _.Jo)(_.Ri);
          if (!i.data) return null;
          const c = i.data.votes.map((o) =>
            (0, e.jsx)(
              Ze,
              {
                bEnableNominating: n,
                category: o,
                rgPrevLaborOfLoveWinners: i.data.labor_of_love_winners,
              },
              o.voteid,
            ),
          );
          return (0, e.jsx)(p.Z, {
            className: (0, l.A)(s().SectionContent, s().SteamAwardCategories),
            children: c,
          });
        }
        function Ze(r) {
          const {
              category: n,
              bEnableNominating: i,
              rgPrevLaborOfLoveWinners: c,
            } = r,
            { currentNomination: o } = (0, _.Vz)(n.voteid),
            [m, j] = d.useState(!1),
            C = n.internal_name,
            w =
              g.TS.BASE_URL_STORE_CDN_ASSETS +
              "promo/steamawards2024/backgrounds/" +
              C +
              ".jpg?v=3";
          return (0, e.jsxs)(p.Z, {
            className: (0, l.A)(
              s().SteamAwardCategory,
              o && s().Nominated,
              m && s().PickerOpen,
            ),
            children: [
              (0, e.jsx)("div", {
                className: (0, l.A)(s().SteamAwardCategoryBackground),
                style: { backgroundImage: `url( ${w} )` },
              }),
              (0, e.jsx)("div", {
                className: (0, l.A)(s().SteamAwardCategoryBlurryBackground),
                style: { backgroundImage: `url( ${w} )` },
              }),
              (0, e.jsxs)("div", {
                className: s().CategoryRow,
                children: [
                  (0, e.jsxs)("div", {
                    className: s().LeftColumn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().CategoryTitleRow,
                        children: [
                          i &&
                            (0, e.jsx)("div", {
                              className: s().Checkbox,
                              children:
                                o &&
                                (0, e.jsx)(f.X4B, {
                                  color: "#ffffff",
                                  highlightColor: "#ffffff",
                                }),
                            }),
                          (0, e.jsx)("div", {
                            className: s().CategoryTitle,
                            children: n.localization.title_award,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: s().CategoryDescription,
                        children: n.localization.award_description,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, l.A)(s().RightColumn, m && s().PickerOpen),
                    children: [
                      (0, e.jsx)("div", {
                        className: s().CapsuleBlurryContainer,
                        children: o
                          ? (0, e.jsx)(ke, { nomination: o, bBlurry: !0 })
                          : (0, e.jsx)(He, {}),
                      }),
                      (0, e.jsx)("div", {
                        className: s().CapsuleContainer,
                        children: o
                          ? (0, e.jsx)(ke, { nomination: o, bBlurry: !1 })
                          : (0, e.jsx)(He, {}),
                      }),
                      i &&
                        (0, e.jsx)(Je, {
                          fnShowPicker: j,
                          has_nomination: !!o,
                        }),
                    ],
                  }),
                ],
              }),
              m &&
                (0, e.jsx)(de, {
                  fnShowPicker: j,
                  category: n,
                  rgPrevLaborOfLoveWinners: c,
                }),
            ],
          });
        }
        function ke(r) {
          const { nomination: n, bBlurry: i } = r,
            c = (0, q.$5)(n.appid),
            { data: o } = (0, ne.J$)(c),
            { data: m } = (0, ne.gy)(c);
          return o
            ? i
              ? (0, e.jsx)("img", { src: (0, re.b0)(m, "header"), alt: o.name })
              : (0, e.jsx)(D.u, {
                  className: s().NominatedGameCapsule,
                  id: c,
                  children: (0, e.jsx)("img", {
                    src: (0, re.b0)(m, "header"),
                    alt: o.name,
                  }),
                })
            : null;
        }
        function He() {
          return (0, e.jsx)("div", { className: s().NominatedGameCapsule });
        }
        function Je(r) {
          const { has_nomination: n, fnShowPicker: i } = r;
          let c = (0, a.we)("#Steamawards_Nominate_Btn"),
            o = s().ActionNominate,
            m = () => i(!0);
          return (
            S.iA.logged_in
              ? n &&
                ((c = (0, a.we)("#Steamawards_Edit_Btn")), (o = s().ActionEdit))
              : ((c = (0, a.we)("#Steamawards_Login_Btn")),
                (o = s().ActionLogin),
                (m = () => (0, u.vg)())),
            (0, e.jsx)("div", {
              className: (0, l.A)(s().NominateBtnCtn, o),
              children: (0, e.jsx)(A.$n, {
                onClick: m,
                className: (0, l.A)(s().NominateButton),
                children: c,
              }),
            })
          );
        }
        function $e() {
          const r = (0, _.ed)(k.GPz.Mt);
          let n = 0;
          const i = r.data?.quests?.map(
            (o) => (
              o.completed && n++,
              (0, e.jsx)(
                tt,
                { eStoreQuestID: o.questid, completed: o.completed },
                o.questid,
              )
            ),
          );
          let c = [];
          for (let o = 1; o < 5; o++)
            c.push((0, e.jsx)(qe, { nBadgeLevel: o, bCompleted: n >= o }, o));
          return (0, e.jsxs)("div", {
            className: (0, l.A)(s().BadgeSectionCtn, s().SectionContent),
            children: [
              S.iA.logged_in &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: s().BadgeSectionTitle,
                      children: (0, a.we)("#Steamawards_Badge_SectionTitle"),
                    }),
                    (0, e.jsx)("div", {
                      className: s().BadgeTasksCtn,
                      children: i,
                    }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: s().BadgeStatusCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: s().BadgeStatusTitle,
                    children: (0, a.we)("#Steamawards_Badge_BadgeTitle"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().BadgeStatusDesc,
                    children: (0, a.we)("#Steamawards_Badge_BadgeDesc"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().BadgeImageRow,
                    children: c,
                  }),
                ],
              }),
            ],
          });
        }
        function qe(r) {
          const { nBadgeLevel: n, bCompleted: i } = r;
          return (0, e.jsxs)("div", {
            className: (0, l.A)(s().BadgeItem, i && s().Active),
            children: [
              (0, e.jsx)("div", {
                className: s().BadgeImage,
                children: (0, e.jsx)("img", {
                  src:
                    g.TS.BASE_URL_STORE_CDN_ASSETS +
                    `promo/steamawards2025/level_0${n}.webp`,
                }),
              }),
              (0, e.jsx)("div", {
                className: s().BadgeDesc,
                children: (0, a.we)(`#Steamawards_Badge_BadgeTask${n}`),
              }),
            ],
          });
        }
        function et(r) {
          switch (r) {
            case 610:
              return (0, a.we)("#Steamawards_Task1");
            case 611:
              return (0, a.we)("#Steamawards_Task2");
            case 612:
              return (0, a.we)("#Steamawards_Task3");
            case 613:
              return (0, a.we)("#Steamawards_Task4");
            default:
              return "Unknown Task";
          }
        }
        function tt(r) {
          const { eStoreQuestID: n, completed: i } = r;
          return (0, e.jsxs)("div", {
            className: s().BadgeTask,
            children: [
              (0, e.jsx)("div", {
                className: s().Checkbox,
                children: i ? (0, e.jsx)(f.Jlk, {}) : null,
              }),
              (0, e.jsx)("div", { className: s().TaskTitle, children: et(n) }),
            ],
          });
        }
        function st() {
          const r = g.TS.COMMUNITY_BASE_URL + "my/badges/";
          return (0, e.jsx)("div", {
            className: (0, l.A)(s().NominationsFAQ, s().SectionContent),
            children: (0, e.jsxs)("div", {
              className: s().NominationsFAQCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: s().LeftCol,
                  children: [
                    (0, e.jsx)("h3", {
                      className: s().FaqSectionTitle,
                      children: (0, a.we)("#Steamawards_FAQ_Title_Badges"),
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)("#Steamawards_FAQ_XP_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)("#Steamawards_FAQ_XP_A"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)("#Steamawards_FAQ_BadgesAll_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.PP)(
                            "#Steamawards_FAQ_BadgesAll_A_wLink",
                            (0, e.jsx)("a", {
                              href: r,
                              children: (0, a.we)(
                                "#Steamawards_FAQ_BadgesAll_A_YourBadges",
                              ),
                            }),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)("#Steamawards_FAQ_ReviewsPrev_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)("#Steamawards_FAQ_ReviewsPrev_A"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_BadgeSkipping_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_BadgeSkipping_A1",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_BadgeSkipping_A2",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: s().RightCol,
                  children: [
                    (0, e.jsx)("h3", {
                      className: s().FaqSectionTitle,
                      children: (0, a.we)("#Steamawards_FAQ_Title_Nominations"),
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_WhoCanNominate_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_WhoCanNominate_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_HowToNominate_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_HowToNominate_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)("#Steamawards_FAQ_WhichGames_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)("#Steamawards_FAQ_WhichGames_A1"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)("#Steamawards_FAQ_WhichGames_A2"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)("#Steamawards_FAQ_WhichGames_A3"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_NominateMultiple_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_NominateMultiple_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_EditNominations_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_EditNominations_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_HowShareFriends_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_HowShareFriends_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_WinnersSelected_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_WinnersSelected_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().FAQ_Q,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_WhyParticipate_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: s().FAQ_A,
                          children: (0, a.we)(
                            "#Steamawards_FAQ_WhyParticipate_A",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function at(r, n) {
          (0, b.pg)((0, e.jsx)(nt, { nYear: r }), n);
        }
        function nt(r) {
          const { closeModal: n, nYear: i } = r,
            c = (0, _.np)(),
            o = (0, _._C)(),
            [m, j] = (0, d.useState)(!1);
          if (!c.data) return null;
          const [C, w] = c.data;
          let T = "";
          w.code &&
            (T =
              g.TS.STORE_BASE_URL +
              `steamawards/nominations/${i}/` +
              S.iA.steamid +
              "?k=" +
              w.code);
          const W = () => {
            navigator.clipboard.writeText(T), j(!0);
          };
          return (0, e.jsx)(L.o0, {
            closeModal: n,
            bAlertDialog: !0,
            strCancelButtonText: (0, a.we)("#Steamawards_Close_Btn"),
            strTitle: (0, a.we)("#Steamawards_ShareLink_Title"),
            children: (0, e.jsxs)(p.Z, {
              className: s().ShareModalBody,
              "flow-children": "column",
              children: [
                (0, e.jsx)("p", {
                  className: (0, l.A)(s().ShareModalText, s().IntroText),
                  children: (0, a.we)("#Steamawards_ShareModal_Description"),
                }),
                T &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(A.JU, {
                        children: (0, a.we)("#YIR_ShareModal_YourLink"),
                      }),
                      (0, e.jsxs)("div", {
                        className: s().UrlContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().Url,
                            children: T,
                          }),
                          (0, e.jsx)(A.jn, {
                            className: s().Button,
                            onClick: W,
                            children: (0, a.we)(
                              m
                                ? "#YIR_ShareModal_CopyLink_Success"
                                : "#YIR_ShareModal_CopyLink",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("p", {
                        className: s().ShareModalText,
                        children: (0, a.we)(
                          "#Steamawards_ShareModal_Description2",
                        ),
                      }),
                    ],
                  }),
                (0, e.jsx)(A.$n, {
                  className: s().GenerateShareLinkBtn,
                  onClick: () => o.mutate(),
                  children: (0, a.we)(
                    T
                      ? "#Steamawards_GenerateLink_Btn_Renew"
                      : "#Steamawards_GenerateLink_Btn",
                  ),
                }),
              ],
            }),
          });
        }
        function rt(r) {
          const { nYear: n } = r,
            i = (0, _.cO)();
          return !S.iA.logged_in || !i.data || i.data.length == 0
            ? (0, e.jsx)("div", {
                className: s().ShareLinkCtn,
                children: (0, e.jsx)("div", {
                  className: s().ProgressTitle,
                  children: (0, a.we)("#Steamawards_GenerateLink_Fallback"),
                }),
              })
            : (0, e.jsx)("div", {
                className: s().ShareLinkCtn,
                children: (0, e.jsxs)(O.Ii, {
                  className: s().ShareBtn,
                  onClick: (c) => {
                    c.preventDefault(),
                      c.stopPropagation(),
                      at(n, (0, h.uX)(c));
                  },
                  children: [
                    (0, e.jsx)(f.SYj, {}),
                    (0, e.jsx)("span", {
                      children: (0, a.we)("#Steamawards_ShareLink_Btn"),
                    }),
                  ],
                }),
              });
        }
        var ot = t(4775),
          v = t.n(ot),
          it = t(81944),
          Ue = t(72865),
          lt = t(25792),
          ct = t(7414),
          dt = t(76867),
          mt = t(41032);
        const Se = {
          include_basic_info: !0,
          include_assets_without_overrides: !0,
          include_trailers: !0,
        };
        function _t() {
          const r = d.useContext(_.AD);
          return r
            ? (0, e.jsxs)(p.Z, {
                className: v().VotingPageContent,
                children: [
                  (0, e.jsx)(ut, {
                    bIsVotingOpen: r.bVotingOpen,
                    bIsVotingPast: r.bVotingPast,
                  }),
                  (0, e.jsxs)("div", {
                    className: v().VotingArea,
                    children: [
                      r.bHasStickerRewards &&
                        (0, e.jsx)(vt, {
                          unSaleAppID: r.config.appid,
                          bIsVotingOpen: r.bVotingOpen,
                          bIsVotingPast: r.bVotingPast,
                        }),
                      (0, e.jsx)(ht, {
                        bIsVotingOpen: r.bVotingOpen,
                        bIsVotingPast: r.bVotingPast,
                        unSaleAppID: r.config.appid,
                      }),
                    ],
                  }),
                  (0, e.jsx)(xt, {}),
                ],
              })
            : null;
        }
        function ut(r) {
          const { bIsVotingOpen: n, bIsVotingPast: i } = r,
            c = d.useContext(_.AD),
            o = (0, _.CF)();
          let m;
          return (
            n
              ? (m = (0, a.we)("#Steamawards_Voting_Header_VoteNow"))
              : i
                ? (m = (0, a.we)("#Steamawards_Voting_Header_WinnersUp"))
                : (m = (0, a.we)(
                    "#Steamawards_Voting_Header_VoteSoon_New",
                    je(c.rtVoteStart),
                  )),
            (0, e.jsx)(p.Z, {
              children: (0, e.jsx)("div", {
                className: (0, l.A)(v().HeaderCtn, o.HeaderCtn),
                children: (0, e.jsx)("div", {
                  className: v().HeaderContent,
                  children: (0, e.jsxs)("div", {
                    className: v().TextColumn,
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, l.A)(v().EventTitle, o.EventTitle),
                        children: (0, a.PP)(
                          "#Steamawards_Title_WithYear",
                          c.nYear,
                          (0, e.jsx)("br", {}),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, l.A)(
                          v().InfoText,
                          v().Large,
                          o.InfoText,
                          o.Large,
                        ),
                        children: m,
                      }),
                      i
                        ? (0, e.jsx)(e.Fragment, {
                            children: (0, e.jsx)("div", {
                              className: (0, l.A)(v().InfoText, o.InfoText),
                              children: (0, a.PP)(
                                "#Steamawards_Voting_Header_Winners",
                                c.nYear,
                              ),
                            }),
                          })
                        : (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("div", {
                                className: (0, l.A)(v().InfoText, o.InfoText),
                                children: (0, a.we)(
                                  "#Steamawards_Voting_Header_Finalists",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: (0, l.A)(v().InfoText, o.InfoText),
                                children: (0, a.we)(
                                  "#Steamawards_Voting_Header_HowTo",
                                  je(c.rtVoteEnd),
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: (0, l.A)(v().InfoText, o.InfoText),
                                children: (0, a.we)(
                                  "#Steamawards_Voting_Header_Dates_New",
                                  je(c.rtVoteEnd),
                                ),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
              }),
            })
          );
        }
        function vt(r) {
          const { unSaleAppID: n, bIsVotingOpen: i, bIsVotingPast: c } = r,
            o = (0, _.Jo)(n),
            m = (0, _.a8)(n),
            j = (0, _.CF)();
          if (!o.data) return null;
          const C = o.data.votes.map((T) =>
            (0, e.jsx)(gt, { unSaleAppID: n, definition: T }, T.voteid),
          );
          let w = null;
          return (
            c
              ? (w = (0, a.PP)(
                  "#Steamawards_Progress_Title_Past",
                  m.data?.length ?? 0,
                  o.data.votes.length,
                ))
              : i
                ? g.iA.logged_in
                  ? m.data?.length > 0
                    ? (w = (0, a.PP)(
                        "#Steamawards_Progress_Title",
                        m.data?.length,
                        o.data.votes.length,
                      ))
                    : (w = (0, a.PP)(
                        "#Steamawards_Progress_Title_None",
                        o.data.votes.length,
                      ))
                  : (w = (0, a.we)("#Steamawards_Progress_Title_LoggedOut"))
                : (w = (0, a.PP)(
                    "#Steamawards_Progress_Title_Soon",
                    o.data.votes.length,
                  )),
            (0, e.jsxs)(p.Z, {
              className: (0, l.A)(
                v().ProgressCtn,
                v().SectionContent,
                j.ProgressCtn,
              ),
              children: [
                (0, e.jsx)("div", { className: v().Title, children: w }),
                (0, e.jsx)("div", { className: v().StickerRow, children: C }),
              ],
            })
          );
        }
        function gt(r) {
          const { definition: n, unSaleAppID: i } = r,
            c = (0, _.Mn)(i, n.voteid),
            o = () =>
              (window.location.href =
                "#" + n.localization.title.replace(/\s/g, "")),
            m = (0, _.PV)(i, n.voteid),
            j = (0, _.CF)(),
            C = `${g.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${c ? m?.item_image_small : m?.item_image_large}`,
            w = `${g.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${m?.item_image_small}`;
          return (0, e.jsxs)("div", {
            className: (0, l.A)(v().CategoryStickerCtn, j.CategoryStickerCtn),
            children: [
              (0, e.jsx)("img", {
                className: (0, l.A)(
                  v().CategoryStickerHover,
                  j.CategoryStickerHover,
                ),
                src: w,
              }),
              (0, e.jsx)(p.Z, {
                className: (0, l.A)(v().CategorySticker, !c && v().Inactive),
                onActivate: o,
                style: { backgroundImage: `url( '${C}' )` },
              }),
            ],
          });
        }
        function ht(r) {
          const { unSaleAppID: n, bIsVotingOpen: i, bIsVotingPast: c } = r,
            m = (0, _.Jo)(n).data.votes.map((j) =>
              (0, e.jsx)(
                At,
                {
                  bIsVotingOpen: i,
                  bIsVotingPast: c,
                  unSaleAppID: n,
                  definition: j,
                },
                j.voteid,
              ),
            );
          return (0, e.jsx)(p.Z, {
            id: "Categories",
            className: (0, l.A)(v().CategoryList, v().SectionContent),
            children: m,
          });
        }
        function At(r) {
          const {
              definition: n,
              unSaleAppID: i,
              bIsVotingOpen: c,
              bIsVotingPast: o,
            } = r,
            m = (0, E.zX)(
              n.app_discounts.map((M) => M.appid),
              Se,
            ),
            j = (0, _.Mn)(i, n.voteid),
            C = d.useRef(0),
            w = (0, Z.R7)(),
            T = d.useContext(_.AD),
            [W, K] = d.useState([]),
            [Y, V] = d.useState(0),
            [_e, we] = d.useState(!1),
            [ee, ue] = d.useState(0),
            [Qe, Lt] = d.useState(!j && !o),
            [Bt, Rt] = d.useState(),
            [Ce, Ft] = d.useState(669),
            Ge =
              g.TS.BASE_URL_STORE_CDN_ASSETS +
              "promo/steamawards2024/backgrounds/" +
              n.internal_name +
              ".jpg?v=1",
            Wt = g.TS.IMG_URL + "promo/steamawards2023/placeholder_main.png",
            Ne = w?.ownerWindow || window,
            Ut = d.useCallback((M) => {
              Ft(M.contentRect.height);
            }, []),
            bt = (0, $.wY)(Ut),
            Me = d.useCallback(() => {
              let M = "-20% 0px -50% 0px";
              if (Ne.innerHeight <= Ce) M = "0px 0px 0px 0px";
              else {
                const ve = Ne.innerHeight / Ce,
                  le = Math.min(
                    ve * 40 + ve * Ce - (Ce + 40),
                    Ne.innerHeight * 0.65,
                  );
                M = `-${Math.min(Ce * 0.4, Ne.innerHeight * 0.1)}px 0px -${le}px 0px`;
              }
              Rt(M);
            }, [Ne.innerHeight, Ce]);
          d.useEffect(
            () => (
              window.addEventListener("resize", Me),
              () => window.removeEventListener("resize", Me)
            ),
          ),
            d.useEffect(() => {
              const M = async () => {
                let Pe = [];
                if (g.iA.logged_in) {
                  const ve = await Promise.all(
                    n.app_discounts?.map(async (le) => {
                      const Le = [le.appid, g.iA.accountid].toString(),
                        Yt = await (0, ct.sx)(Le);
                      return { appid: le.appid, hash: Yt };
                    }),
                  );
                  ve.sort((le, Le) => (le.hash > Le.hash ? 1 : -1)),
                    (Pe = ve.map((le) => le.appid));
                } else Pe = n.app_discounts.map((ve) => ve.appid);
                K(Pe), V(Pe[C.current]), Me();
              };
              W.length || M();
            }, [n.app_discounts, Me, W]);
          const Qt = d.useCallback(() => {
              if (!ee) {
                let M = C.current + 1;
                M >= W.length && (M = 0), (C.current = M), V(W[C.current]);
              }
            }, [W, ee]),
            Kt = d.useCallback((M) => {
              we(M);
            }, []),
            Vt = d.useCallback((M) => {
              ue(M), V(M);
            }, []),
            kt = d.useCallback(() => {
              ue(0), V(W[C.current]);
            }, [W]);
          if (m == E.Sq)
            return (0, e.jsx)(x.t, {
              position: "center",
              size: "large",
              msDelayAppear: 300,
            });
          const Ht = W?.map((M) =>
              (0, e.jsx)(
                ft,
                {
                  eCategory: n.voteid,
                  unSaleAppID: i,
                  bCurrentlyActive: Y === M,
                  unAppID: M,
                  bIsVotingOpen: c,
                  bIsCurrentVoteApp: j == M,
                  fnOnMouseLeaveApp: kt,
                  fnOnMouseEnterApp: Vt,
                },
                M,
              ),
            ),
            Gt = W?.map((M) =>
              (0, e.jsx)(
                pt,
                {
                  bHoveringApp: M == ee,
                  unAppID: M,
                  bPlayMicrotrailers: _e,
                  bCurrentlyActive: Y === M,
                  fnOnVideoEnd: Qt,
                },
                M,
              ),
            ),
            zt = 500;
          let Ke = (0, e.jsx)(e.Fragment, { children: Gt });
          return (
            n.winner_appid && o
              ? (Ke = (0, e.jsx)(Ct, { unAppID: n.winner_appid }))
              : j && (Ke = (0, e.jsx)(jt, { unAppID: j })),
            (0, e.jsx)(lt.tH, {
              children: (0, e.jsx)(it.J, {
                thresholds: [0.4],
                rootMargin: Bt,
                trigger: "repeated",
                onVisibilityChange: Kt,
                children: (0, e.jsxs)(p.Z, {
                  ref: bt,
                  className: (0, l.A)(
                    v().SteamAwardCategory,
                    j && v().CategoryVoted,
                    _e && v().Active,
                  ),
                  children: [
                    (0, e.jsx)("a", {
                      id: n.localization.title.replace(/\s/g, ""),
                      className: v().Anchor,
                    }),
                    (0, e.jsx)("div", {
                      className: (0, l.A)(v().SteamAwardCategoryBackground),
                      style: { backgroundImage: `url( ${Ge} )` },
                    }),
                    (0, e.jsx)("div", {
                      className: (0, l.A)(
                        v().SteamAwardCategoryBlurryBackground,
                      ),
                      style: { backgroundImage: `url( ${Ge} )` },
                    }),
                    (0, e.jsxs)("div", {
                      className: v().CategoryRow,
                      children: [
                        (0, e.jsxs)("div", {
                          className: v().LeftColumn,
                          children: [
                            (0, e.jsxs)("div", {
                              className: v().CategoryTitleRow,
                              children: [
                                (0, e.jsx)("div", {
                                  className: v().CategoryYear,
                                  children: (0, a.PP)(
                                    "#Steamawards_Title_WithYear_NoBreaks",
                                    T.nYear,
                                  ),
                                }),
                                (0, e.jsx)("div", {
                                  className: v().CategoryTitle,
                                  children: n.localization.title_award,
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: v().CategoryDescription,
                              children: n.localization.award_description,
                            }),
                            (j || o) &&
                              (0, e.jsx)(A.$n, {
                                className: v().HideShowBtn,
                                onClick: () => Lt(!Qe),
                                children: Qe
                                  ? (0, a.we)("#Steamawards_HideFinalists_Btn")
                                  : (0, a.we)("#Steamawards_ShowFinalists_Btn"),
                              }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: (0, l.A)(v().RightColumn),
                          children: (0, e.jsxs)("div", {
                            className: v().CapsuleContainer,
                            children: [Ke, (0, e.jsx)("img", { src: Wt })],
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)(dt.M, {
                      timeout: zt,
                      unmountOnExit: !0,
                      mountOnEnter: !0,
                      in: Qe,
                      classNames: {
                        enter: v().Enter,
                        enterActive: v().EnterActive,
                        exit: v().Exit,
                        exitActive: v().ExitActive,
                      },
                      children: (M) =>
                        (0, e.jsxs)("div", {
                          ref: M,
                          className: v().FinalistsCtn,
                          children: [
                            (0, e.jsxs)("div", {
                              className: v().FinalistsIntro,
                              children: [
                                (0, e.jsx)("div", {
                                  children: o
                                    ? (0, a.we)(
                                        "#Steamawards_Voting_Finalists_Past",
                                      )
                                    : (0, a.we)(
                                        "#Steamawards_Voting_Finalists",
                                      ),
                                }),
                                (0, e.jsx)("div", {
                                  className: v().FinalistsLine,
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: v().FinalistsRow,
                              children: Ht,
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              }),
            })
          );
        }
        function jt(r) {
          const { unAppID: n } = r,
            [i] = (0, E.t7)(n, Se),
            c = (0, Ue.aL)(i?.GetStorePageURL(), "nominee_capsule");
          return i
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: v().CurrentVoteBanner,
                    children: (0, a.we)("#Steamawards_Voting_YourVote"),
                  }),
                  (0, e.jsx)("a", {
                    href: c,
                    children: (0, e.jsx)("img", {
                      src: i.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                    }),
                  }),
                ],
              })
            : null;
        }
        function Ct(r) {
          const { unAppID: n } = r,
            [i] = (0, E.t7)(n, Se),
            c = (0, Ue.aL)(i?.GetStorePageURL(), "winner_capsule");
          return i
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: v().CurrentVoteBanner,
                    children: (0, a.we)("#Steamawards_Voting_Winner"),
                  }),
                  (0, e.jsx)("a", {
                    className: v().WinnerCapsule,
                    href: c,
                    children: (0, e.jsx)("img", {
                      src: i.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                    }),
                  }),
                ],
              })
            : null;
        }
        function pt(r) {
          const {
              unAppID: n,
              bCurrentlyActive: i,
              fnOnVideoEnd: c,
              bPlayMicrotrailers: o,
              bHoveringApp: m,
            } = r,
            [j] = (0, E.t7)(n, Se),
            C = d.useRef(void 0),
            w = (0, mt.dy)();
          d.useEffect(() => {
            C.current && (i && o ? C.current.play() : C.current.pause());
          }, [i, o]);
          const T = j?.GetMicroTrailer(w);
          return !j || !T?.strWebMURL
            ? null
            : (0, e.jsxs)("video", {
                className: (0, l.A)(v().MicrotrailerVideo, i && v().Active),
                poster: j.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                onEnded: c,
                ref: C,
                preload: "auto",
                loop: m,
                playsInline: !0,
                muted: !0,
                children: [
                  (0, e.jsx)("source", {
                    src: T.strWebMURL,
                    type: "video/webm",
                  }),
                  !g.TS.IN_CLIENT &&
                    (0, e.jsx)("source", {
                      src: T.strMP4URL,
                      type: "video/mp4",
                    }),
                ],
              });
        }
        function ft(r) {
          const {
              unAppID: n,
              unSaleAppID: i,
              eCategory: c,
              bCurrentlyActive: o,
              fnOnMouseEnterApp: m,
              fnOnMouseLeaveApp: j,
              bIsVotingOpen: C,
              bIsCurrentVoteApp: w,
            } = r,
            [T] = (0, E.t7)(n, Se),
            W = (0, _.ZB)(n, c, i),
            K = (0, Ue.aL)(T?.GetStorePageURL(), "nominee_capsule"),
            Y = (0, _.Vz)(c),
            V = Y && Y.currentNomination?.appid === n,
            _e = d.useCallback(() => {
              if ((0, G.UserEligibleToNominateOrVote)(!0)) w || W.mutate();
              else {
                console.log(
                  "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                );
                return;
              }
            }, [w, W]);
          if (!T) return null;
          const we = w
            ? (0, a.we)("#Steamawards_Voting_Action_Voted")
            : (0, a.we)("#Steamawards_Voting_Action_Vote");
          return (0, e.jsxs)(p.Z, {
            className: (0, l.A)(
              v().FinalistGameCtn,
              o ? v().CurrentlyFeatured : "",
              w ? v().MyVote : "",
            ),
            onMouseEnter: () => m(n),
            onBlur: j,
            onFocus: () => m(n),
            onMouseLeave: j,
            children: [
              (0, e.jsxs)("a", {
                href: K,
                className: v().CapsuleLink,
                children: [
                  (0, e.jsx)("img", {
                    src: T.GetAssetsWithoutOverrides().GetHeroCapsuleURL(),
                    className: v().Capsule,
                  }),
                  (0, e.jsx)("div", {
                    className: v().Highlight,
                    children: "\xA0",
                  }),
                ],
              }),
              C &&
                (0, e.jsx)(A.$n, {
                  onClick: _e,
                  className: v().ActionButton,
                  children: we,
                }),
              V &&
                (0, e.jsx)("div", {
                  className: v().YourNomination,
                  children: (0, a.we)("#Steamawards_Voting_Action_YourNominee"),
                }),
            ],
          });
        }
        function xt() {
          const r = d.useContext(_.AD),
            n = (0, _.CF)(),
            i = g.TS.HELP_BASE_URL + "faqs/view/71D3-35C2-AD96-AA3A",
            c =
              "#Steamawards_Voting_FAQ_6_Q" + (r.nYear >= 2024 ? "_2024" : ""),
            o =
              "#Steamawards_Voting_FAQ_6_A" + (r.nYear >= 2024 ? "_2024" : "");
          let m = [
            (0, e.jsx)(
              ie,
              {
                strQuestion: (0, a.we)("#Steamawards_Voting_FAQ_1_Q"),
                strAnswer: (0, a.oW)(
                  "#Steamawards_Voting_FAQ_1_A",
                  (0, e.jsx)("a", { href: i, children: ", " }),
                ),
              },
              "FAQ_1",
            ),
          ];
          return (
            r.bHasStickerRewards &&
              m.push(
                (0, e.jsx)(
                  ie,
                  {
                    strQuestion: (0, a.we)("#Steamawards_Voting_FAQ_2_Q"),
                    strAnswer: (0, a.we)("#Steamawards_Voting_FAQ_2_A"),
                  },
                  "FAQ_2",
                ),
              ),
            (m = [
              ...m,
              (0, e.jsx)(
                ie,
                {
                  strQuestion: (0, a.we)("#Steamawards_Voting_FAQ_3_Q"),
                  strAnswer: (0, a.we)(
                    "#Steamawards_Voting_FAQ_3_A_New",
                    je(r.rtVoteStart),
                    je(r.rtVoteEnd),
                  ),
                },
                "FAQ_3",
              ),
              (0, e.jsx)(
                ie,
                {
                  strQuestion: (0, a.we)("#Steamawards_Voting_FAQ_7_Q"),
                  strAnswer: (0, a.we)("#Steamawards_Voting_FAQ_7_A"),
                },
                "FAQ_4",
              ),
              (0, e.jsx)(
                ie,
                {
                  strQuestion: (0, a.we)("#Steamawards_Voting_FAQ_8_Q"),
                  strAnswer: (0, a.we)("#Steamawards_Voting_FAQ_8_A"),
                },
                "FAQ_5",
              ),
              (0, e.jsx)(
                ie,
                {
                  strQuestion: (0, a.we)("#Steamawards_Voting_FAQ_4_Q"),
                  strAnswer: (0, a.we)(
                    "#Steamawards_Voting_FAQ_4_A_New",
                    je(r.rtVoteEnd),
                  ),
                },
                "FAQ_6",
              ),
              (0, e.jsx)(
                ie,
                {
                  strQuestion: (0, a.we)("#Steamawards_Voting_FAQ_5_Q"),
                  strAnswer: (0, a.we)("#Steamawards_Voting_FAQ_5_A"),
                },
                "FAQ_7",
              ),
              (0, e.jsx)(
                ie,
                { strQuestion: (0, a.we)(c), strAnswer: (0, a.we)(o) },
                "FAQ_8",
              ),
            ]),
            (0, e.jsxs)("div", {
              className: (0, l.A)(v().FAQWrapper, v().SectionContent),
              children: [
                (0, e.jsx)("div", {
                  className: (0, l.A)(v().FaqSectionTitle, n.FaqSectionTitle),
                  children: (0, a.we)("#Steamawards_Voting_FAQ_Title"),
                }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(v().FAQCtn, n.FAQCtn),
                  children: m,
                }),
              ],
            })
          );
        }
        function ie(r) {
          const { strQuestion: n, strAnswer: i } = r,
            c = (0, _.CF)();
          return (0, e.jsxs)(p.Z, {
            className: (0, l.A)(v().FaqEntry, c.FaqEntry),
            children: [
              (0, e.jsx)("div", {
                className: (0, l.A)(v().FAQ_Q, c.FAQ_Q),
                children: n,
              }),
              (0, e.jsx)("div", {
                className: (0, l.A)(v().FAQ_A, c.FAQ_A),
                children: i,
              }),
            ],
          });
        }
        function je(r) {
          return new Date(r * 1e3).toLocaleString(a.pf.GetPreferredLocales(), {
            day: "numeric",
            month: "short",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          });
        }
        var Et = t(26019),
          St = t.n(Et),
          wt = t(79870),
          Nt = t.n(wt),
          Pt = t(66701),
          Dt = t.n(Pt);
        function Tt(r) {
          const { nYear: n } = r,
            i = (0, Ae.f1)(),
            c = (0, _.RE)(),
            o = Ot(n),
            m = d.useMemo(() => {
              if (!c || !c.definitions?.votes?.length) return null;
              const j = c.definitions.votes[0].start_time,
                C = c.definitions.votes[0].end_time,
                w = i >= j && i < C,
                T = i >= C,
                W = c.definitions.votes.some((K) => !!K.item_type);
              return {
                config: c,
                bVotingOpen: w,
                bVotingPast: T,
                yearStyles: o,
                nYear: n,
                rtVoteStart: j,
                rtVoteEnd: C,
                bHasStickerRewards: W,
              };
            }, [n, i, c, o]);
          return m
            ? (0, e.jsx)(H.Ay, {
                method: "steamawards",
                children: (0, e.jsx)(_.AD.Provider, {
                  value: m,
                  children: (0, e.jsx)(_t, {}),
                }),
              })
            : null;
        }
        const be = { 2023: St(), 2024: Nt(), 2025: Dt() },
          It = Object.values(be).reduce((r, n) => ({ ...r, ...n }), {}),
          yt = 2023;
        function Ot(r) {
          const [n, i] = d.useState({});
          return (
            d.useEffect(() => {
              let o = be[r];
              o || (o = be[yt]), i({ ...It, ...o });
            }, [r]),
            n
          );
        }
        const Mt = () =>
          (0, e.jsx)(H.Ay, {
            controller: "steamawards",
            children: (0, e.jsxs)(I.dO, {
              children: [
                (0, e.jsx)(I.qh, {
                  path: P.B.SteamAwardNominations(),
                  render: (r) =>
                    (0, e.jsx)(Ve, {
                      nYear: parseInt(r.match.params.year),
                      steamID: r.match.params.steamid,
                      ...r,
                    }),
                }),
                (0, e.jsx)(I.qh, {
                  path: P.B.SteamAwards(),
                  render: (r) =>
                    (0, e.jsx)(Tt, { nYear: parseInt(r.match.params.year) }),
                }),
              ],
            }),
          });
      },
      65274: (R) => {
        R.exports = {
          Text: "f6hU22EA7Z8peFWZVBJU",
          Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
          "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
          "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
          "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
          "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
          "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
          "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
          "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
          "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
          "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
          TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
          TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
          LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
          WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
        };
      },
      50122: (R) => {
        R.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      33924: (R) => {
        R.exports = {
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
      28124: () => {},
      85415: (R) => {
        R.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          NominationsPageContent: "w8AKcU3i8ClK1UzQzqzI",
          SectionContent: "_20IkdxpCDwL8VLda92dq2Y",
          SteamAwardCategories: "_192O0SfNHIDsbHXq5iRgCM",
          NominationCategory: "_2G4S0SFOCuBF1c4Bx-dELf",
          BackgroundDark: "_1tIgRv45QmeUOQXrV9mdMq",
          NominationsHeaderCtn: "_1TnKc86XFqFWZThfWLgaRw",
          FAQHeaderArea: "_2Mwx1ICH6jNzJoeIPhhFDv",
          FAQHeaderCtn: "_3Jx_3njrOqCGvmBb5b53I6",
          FriendsHeader: "_27LlNtlWucjFwSNWY-Sbyb",
          FAQSaletitle: "_3s_6VHcgaXEyyUZ16zweVp",
          FAQComingsoon: "_1cG2WETjKlQ8Z5EC0lw0i9",
          NominationsFAQCtn: "_296AV5WTzSw4KsXXNtA2_x",
          FaqSectionTitle: "_1XIaoVZxTy-yIN4iv4QqL1",
          LeftCol: "Swdwp186ooghtuQCkEqml",
          RightCol: "_2RbOCvYEtWD-qpyXmp3Ye7",
          FaqEntry: "_3QrF1mai6HX6dr7jJijnTT",
          FAQ_Q: "_3Mou7FjFlqrR-kKuTt9N8g",
          FAQ_A: "-K9ED0JWohLoxFufaRmWt",
          SteamAwardCategory: "_3i1u-y7pjl-qc98gufdZUu",
          PickerOpen: "_1rSWia4DrhNXjIAW9m_H7R",
          SteamAwardCategoryBackground: "_35LJC3vUDhyY8YWBfRTzRB",
          Nominated: "_4GIBs4zFQvYzih0mbwMoB",
          SteamAwardCategoryBlurryBackground: "_3obFcpxM1lY5DMX8dIuroo",
          CategoryRow: "_1n-khJ_oWP9-ADtdauxmaP",
          LeftColumn: "_3Od-8EtYzDWL-rqzXdco_3",
          CategoryTitleRow: "_21wHFSOia958bDDSKRAnuz",
          Checkbox: "_33AlTMfX070fpO5wsAbYCj",
          CategoryTitle: "_3nVYk2PImiZU57xx8MxH-X",
          CategoryDescription: "_3mFT207sfDAaxfn-HB15sj",
          RightColumn: "_1g7X8N5RaLG09kZx1u2fbV",
          NominateBtnCtn: "_1HYrGX2M4CebVc7ClAyqi5",
          NominateButton: "_3yYqk-nDDM0DcyB3Id8NjD",
          PickerShown: "_2O-paI1bSbPTq6FALASFAe",
          ActionLogin: "_3s5xsmskAdOpXRyYWej0pj",
          ActionEdit: "_2p6oT45t7Kjk11DKng_WDR",
          CapsuleContainer: "_1fSqpH3qLOnMPsLvsocjDD",
          CapsuleBlurryContainer: "_1NTFi-9ML6rmzzrsR1dDt4",
          SectionTitle: "_2pyDiHU7ljm9ZRO_MWsJwr",
          BadgeSectionCtn: "_2lMcC-ffwNaKEZXfHcIZ2R",
          BadgeTasksCtn: "lVHOaGMQxyd0Pv3gC9QUj",
          BadgeTask: "_3nxfLmk626DE9RgzkJKLsD",
          TaskTitle: "uZMkLwiiLuPCt8EGWV29h",
          BadgeStatusCtn: "_2y8n9AG3gE8R7p0vnCu11y",
          BadgeStatusTitle: "_2sMYOvGVozOqLO6WXFCAMk",
          BadgeStatusDesc: "_3L4e0hBb8fmEtnQ8yFIoZe",
          BadgeImageRow: "_2MLgogShQSsdXcjJVnCrs_",
          BadgeItem: "PJRtCS56eG2Y0_F_VSsx7",
          BadgeImage: "_2sB2cTqit-_ethQFZRSqSN",
          Active: "_20Ol8bIY8KcNPBctmmB8zn",
          NominationPickerCtn: "_3I1Ga7kMZPDXXbOfgfBTDj",
          CarouselView: "_3mKDmumAiG1vMlU0jWpTe0",
          BottomRow: "a3_pmPQJhnwuVtzHgSyu8",
          TopRow: "_1ARPXpnwKMwds0ED6n65hh",
          CloseButton: "_2kep5HQu4ssXfj5IcG2_Zk",
          TopBarText: "_1CNpmoVrp_326dsK0CmqNS",
          SearchBarCtn: "_2sWS-29Gf-VMMR6kq1I0bN",
          RecommendationRow: "_3Xwn8eFK1QXh1ckrOXov07",
          RecommendationRowTitle: "_2Q0KQMyl8fMBpSMgOn0jsf",
          RecommendationRowSubtitle: "xKXQL9kh2IaXx62pUvaM8",
          Events: "kigvxizh8JmTyh5cyzSEA",
          Games: "IpzhVl6SWsWj5Vcmktozv",
          NoEligibleGamesCtn: "_2AqJTwluya2l8sHRS0Nrne",
          SearchContainer: "KBqkfDknFrTcr7ETAE2OW",
          SearchThrobber: "i4KlSZuYm2iFdxbjUegqJ",
          SearchResultsContainer: "_3M2mdkv-ZvUKBkLPH46U8S",
          SearchResultApp: "_3cbS4zsH_qv-1ZcwaA-4Tt",
          NominateGameButton: "CEmahjyiRmgWZlXL6XEpv",
          GameCarouselItemCtn: "_1Em3_QE0y0zfLhSA7n0NDm",
          PlaytimeIndicator: "_3t0T2BFkpBYduyOOwxnBI2",
          BadgeSectionTitle: "_3G1iNhfSRJ9NLuaxjN8MRA",
          White: "_17enANXtRLMRK09o9OKDdF",
          NoResultsCtn: "_2IlW9sfsAiruuo0GxHGgwl",
          ShareLinkCtn: "_15-jFxRvrZDrlMsnc5flU3",
          FriendsHeaderCtn: "_1T9FWlr19WP72HpE5wYup8",
          FriendsTitleCtn: "_3we3-2_E8Qgoj9vpaFu9JG",
          FriendsTitle: "oaA8CcFGe_Kz-3D-qR28Z",
          ProgressAndShareCtn: "_3FdxnzdLCLEUpdpoJJThYZ",
          ProgressTitle: "_3x6HhTNw3LbAwygEgTzwDr",
          ShareBtn: "_1t4jW207kK9lq0dm7UwBIq",
          HeaderButtonCtn: "WSKzFdd9sj_fIAKnqmiOT",
          Gold: "_3f-rIyt2OF08sZWkdxcuzG",
          EventCarousel: "_1ggzska8h4zQPvkSiT3642",
          ShareModalBody: "_3gj5bE9dm_7GXn87PPWJ7q",
          ShareModalText: "_1xonFOaYYv3jpu4vluDcs6",
          IntroText: "_3_Vb7QOOCe07PD_0t4UL0",
          Button: "_2Ynf3ZGFeViNrevWHYC6a-",
          UrlContainer: "_3CXjxVNiKxUH_xCflrU0fv",
          Url: "_3YxsXALKJ70zL3MTTWqibh",
          GenerateShareLinkBtn: "_23i3vxhJO5yZFZ8UkYUHfq",
          BackgroundAnimation: "_2LOnSlelExzMt5V4a0dNMM",
          "ItemFocusAnim-darkerGrey-nocolor": "_1HvhiBok8gSNZxjvKJodk_",
          "ItemFocusAnim-darkerGrey": "_27N4Tx9ZkLoouSi6u2L0Rj",
          "ItemFocusAnim-darkGreySettings": "_3BuduqT5jtwJUrO_Rlx9pN",
          "ItemFocusAnim-darkGrey": "_1t5LnzcxRDUwMaXczWLvT9",
          "ItemFocusAnim-grey": "UvYtyIHWLaxtSAiaOZoaD",
          "ItemFocusAnim-translucent-white-10": "_2Ze0Xg_Rmw0Fw4dtnjqu06",
          "ItemFocusAnim-translucent-white-20": "_6KKdX8p_ia-DW2BgO6XxL",
          "ItemFocusAnimBorder-darkGrey": "_2VHjMLLOWNhhfZTRb8KGKl",
          "ItemFocusAnim-green": "_3qPaUa-qxMzbOWeav6OXLP",
          focusAnimation: "_2YJq7kaNhJ2mQ-Kc9fGZdd",
          hoverAnimation: "_1Ic0fzk_zPsp6jbxsdCaeZ",
        };
      },
      26019: (R) => {
        R.exports = {
          HeaderCtn: "_1oXTW_jpUID161hkqtu59M",
          EventTitle: "_3xLoBdLse_J3sDGG1p-yXS",
          InfoText: "_2ajjx_6sFyPgZhqB5H3ZnC",
          Large: "TDUFDP_Bl5TP_b5lgQUzr",
          FAQCtn: "_21i-Qc2WCMVQJPd0uWk5t4",
          FAQ_Q: "dwrawv-PnUTEQ1WVRwb1A",
          FAQ_A: "_2EmOv2BukDb5pXZiDipwMd",
          ProgressCtn: "_10nGaDuKJPA3cGdfbd7NPA",
          CategoryStickerCtn: "bI10T2_lqnfiIng7NCXzs",
          CategoryStickerHover: "_10SrgdoAjwiz9kvKG9lBKZ",
          FaqSectionTitle: "_3iDsXG7lNe9DQrxH1NNhwu",
        };
      },
      79870: (R) => {
        R.exports = {
          HeaderCtn: "_1GMPkxVZv0yXnOWg0EPh6C",
          EventTitle: "_2tLWKoQISyrtT5cRa7Bthz",
          InfoText: "_3FtbGRpd5Nc_3f0NWPSmPD",
          Large: "_3lWFGFpuyI0hO8I3yb_rNn",
          FAQCtn: "_3VrYL1Qsqq2VRPBJkD_HaR",
          FAQ_Q: "_3RNM6O7oImIghEzoU__8Xv",
          FAQ_A: "Eq7UcjWcQdQ6tRTSkwOAX",
          ProgressCtn: "_33gp2xeb7nySC065zyyBA4",
          CategoryStickerCtn: "BLVGwcLwZotI2A0JYeAmO",
          CategoryStickerHover: "_3gQFhFaB86zoAkrwBD3DlC",
          FaqSectionTitle: "_1M-Tp2eIsHzDqKVdeyNwEE",
        };
      },
      66701: (R) => {
        R.exports = {
          HeaderCtn: "_1LNVToRGS4KgtDmwChCdO-",
          EventTitle: "SHcWFaCZK_WUravI9p1Lm",
          InfoText: "_3Rnea2kVxFT3chmOmqisne",
          Large: "_2jbNvt46h0RqPVOeAwcb8o",
          FAQCtn: "_3UcPLvxpWKhkpPp5vuNZ4T",
          FaqEntry: "_8B-oP4jghkxueOwLkY5FR",
          FAQ_Q: "_3PJmH1yq33fNNGz3U9m-G0",
          FAQ_A: "_2CZcny1e2NwmV-B3klLJiN",
          ProgressCtn: "_3NRXvKouZmkfv0SJaRwm3z",
          CategoryStickerCtn: "_3aAMtCHlbBv9NIEZdV0q4E",
          CategoryStickerHover: "MofbE6cz8noD7aLG-RuYg",
          FaqSectionTitle: "_1KImUETUAUTMVe-r0tBhbv",
        };
      },
      4775: (R) => {
        R.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          VotingPageContent: "_1HBQ3phQnNEooQ3rlXJWEU",
          SectionContent: "zKwKtEP3BYYZy9vgcUrYt",
          HeaderCtn: "_13RFBrxHyoARje0nMxX8tH",
          HeaderContent: "_1o6dhi3wA_BGCQuKqQs9Ms",
          TextColumn: "PsKAPvFalwTAqd-O5tpBs",
          FriendsHeader: "_2pdEK8BhZO9Fsk7gBzJcYG",
          EventTitle: "_2mq56csinWHiVtUbhcbIOM",
          InfoText: "_1fILAMegJPwehj7zLNiCnz",
          Large: "_2mg9K9HjkOCk8oaDZr8nkp",
          FaqSectionTitle: "_1EC9jX-4aGWknZdkL2jXz_",
          FAQWrapper: "_3k0Nep9QQO6OOkrJKij0rN",
          FAQCtn: "_2771UKLz1V9nHv-LmzpMxN",
          FaqEntry: "_2ajVjokAhuY_AzHO1fxS-N",
          FAQ_Q: "_1HaJqKTqlf4p0CRH0hJkFP",
          FAQ_A: "_3471NyjBfuVEY6GEgzQvTL",
          CategoryList: "_1XPN-o00qToVhhqCl0uCTs",
          SteamAwardCategory: "_1XBoC_51pQmCRN5avridVk",
          Anchor: "VcuHpIeUsOyyyT_KdUjAm",
          Active: "_1O8sHGuQHPL5zH5Sb46LPO",
          SteamAwardCategoryBackground: "_1ZcFSopSc0cwMRbi5HSVry",
          SteamAwardCategoryBlurryBackground: "L4OcSCmIVcuUl12bXB0TX",
          CategoryVoted: "_1t5sSouAYZGCwMwKgvAnnK",
          FinalistGameCtn: "_1BgO7N4S-tDGDCVnQbvKkq",
          MyVote: "_280DKBVL06EUXmV8oW_Stf",
          FinalistsRow: "gyb_bFa1822peSfG3BTXg",
          CurrentlyFeatured: "_26AMuDHs36difPA2OiqXtX",
          CapsuleLink: "_2jKUwrwbrF2t4kX3B82jyy",
          Highlight: "_2U0iDjf7-xhJmnwL85CgAL",
          CategoryRow: "_2coYuktGYgHFSf2bVXdpq_",
          LeftColumn: "_3Jr5t3bKaU_ex0uuo649cF",
          CategoryTitleRow: "xuEPVrSwJC-vQEtreQvnm",
          CategoryYear: "mRgEVFiqQRKYg192KYX8p",
          CategoryTitle: "_3Ly3DC2P8CDiJ7Xasn2ebQ",
          CategoryDescription: "JP2ZzubSDTJPbrIuVD2dj",
          RightColumn: "p_hWPrN8iGC3gBczTo-6t",
          HideShowBtn: "_15hKKH8LRiReglaS1WuEv3",
          CapsuleContainer: "_1hsDa2rFPpjzMu9rjU82U2",
          MicrotrailerVideo: "_3vYc4xomNAmkqKxT6BWe7-",
          CurrentVoteBanner: "_1jM-nBkKTkN_b8SE_j6ZlE",
          FinalistsCtn: "e6QP7VDRKVVFuD2RnEOjR",
          Enter: "_2bR4vh-7XndeYuAbZ9m3mi",
          EnterActive: "HzogqjfTp-YZfCxAYW1fk",
          "open-finalists": "_28Ukz2J5tkhC8hlAaMrh4a",
          Exit: "_1ihgKIWB0hGadYHxkDnfkc",
          ExitActive: "_2PHm0gzC_ah6_cbZ3Oy37F",
          "close-finalists": "_16yj_nglGTyrUl6zzC-jbj",
          FinalistsIntro: "_1tf4a4qNCkQo4ge5yBdOKV",
          FinalistsLine: "_1Se69bGQiI6RkGrQPuVBAa",
          Capsule: "bfZUvnddL__eLX2GmRP-F",
          ActionButton: "_38mJcOp4-kSzGLzkPdUCp",
          YourNomination: "_2KubnqoAbzyD4ZXRpsMPHy",
          WinnerInfoCtn: "_33Gx5kCJIh6ENRNdv04f9b",
          WinnerText: "joZ0rl06vZjm-lcXLbuSO",
          WinnerName: "_3ycfW5X-9UvOmi_kWZgnNU",
          WinnerCapsule: "_3ELJccHCME0WPJAkoGrxJt",
          VotingArea: "n6ZgKyivXpFdb4SqlA64M",
          ProgressCtn: "_2vUweIYz36Cfi6nm57qY0E",
          Title: "_3BVrSWCKUqUJI-Y9JHyPzu",
          StickerRow: "_1zyzM5BB2snSZ78ORI-3no",
          CategoryStickerCtn: "_1-Z8yTrwnOFgH8CFXjAh50",
          CategorySticker: "_1draD7X6gu1HpgfRr0k3bO",
          Inactive: "_1N55FNJtt9fgD3oEKh1ulo",
          CategoryStickerHover: "_16qkH83hzNBjI3OfNA2yPZ",
          BackgroundAnimation: "_1seXoMt6Gw5ShAn1fMGCk1",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Pfbc5UJLub15f3GMuUOpu",
          "ItemFocusAnim-darkerGrey": "_1zD-uKidolXqoKdiqmbZmN",
          "ItemFocusAnim-darkGreySettings": "_1CaH5L10wLn4wyijOgOTH6",
          "ItemFocusAnim-darkGrey": "_3Hclo3bSXjWjLg7ak63JZU",
          "ItemFocusAnim-grey": "_276KuR-DDgs7rfFECDuv2Q",
          "ItemFocusAnim-translucent-white-10": "_1yYdEMizQD0Hu99aKPdShy",
          "ItemFocusAnim-translucent-white-20": "_8CBvtVkjTgCz2X_r9V8wT",
          "ItemFocusAnimBorder-darkGrey": "_3Buhs9OTFb_CFYf4_t6djI",
          "ItemFocusAnim-green": "_436DEQij8XRuUbarXlQ7H",
          focusAnimation: "_2oswwg33QBrwNVBaVy2Cz0",
          hoverAnimation: "ux33-vIaysS2_ZFy8EmtK",
        };
      },
      61738: (R, U, t) => {
        var e = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function P(d) {
          var F = I(d);
          return t(F);
        }
        function I(d) {
          if (!t.o(e, d)) {
            var F = new Error("Cannot find module '" + d + "'");
            throw ((F.code = "MODULE_NOT_FOUND"), F);
          }
          return e[d];
        }
        (P.keys = function () {
          return Object.keys(e);
        }),
          (P.resolve = I),
          (R.exports = P),
          (P.id = 61738);
      },
    },
  ]);
})();
