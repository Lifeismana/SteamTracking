/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9236],
    {
      94381: (y, de, o) => {
        "use strict";
        o.d(de, { S: () => G });
        var e = o(7850),
          P = o(68031),
          k = o(31857);
        function te(O) {
          return (0, e.jsx)(k.I, {
            ...O,
            viewBoxSize: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var ie = o(21895),
          Q = o(64238),
          ue = o.n(Q),
          H = o(80549);
        function G(O) {
          const {
              checked: oe,
              onChange: R,
              disabled: ne,
              children: J,
              ref: L,
              variant: N,
              color: V,
              align: le = "center",
              ...K
            } = O,
            W = oe === "indeterminate",
            p = W ? ve : te,
            S = () => {
              ne || (R && R(W ? !0 : !oe));
            },
            F = (ge) => {
              ne ||
                (ge.key === " " &&
                  (S(), ge.preventDefault(), ge.stopPropagation()));
            },
            Y = (0, H.f)("Checkbox", N);
          return (0, e.jsxs)(P.s, {
            align: le,
            ref: L,
            role: "checkbox",
            "aria-checked": W ? "mixed" : oe,
            "data-state": h(oe),
            className: ue()(ie.Root, ie[`Variant-${Y}`], ne && ie.Disabled),
            onClick: S,
            tabIndex: 0,
            onKeyDown: F,
            cursor: "default",
            "aria-disabled": ne,
            "data-accent-color": V,
            ...K,
            children: [
              (0, e.jsx)("div", {
                className: ie.Checkbox,
                children: oe && (0, e.jsx)(p, { className: ie.Icon }),
              }),
              J,
            ],
          });
        }
        function h(O) {
          return O === "indeterminate" ? O : O ? "checked" : "unchecked";
        }
        function ve(O) {
          return (0, e.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      31857: (y, de, o) => {
        "use strict";
        o.d(de, { I: () => Q });
        var e = o(7850),
          P = o(69289),
          k = o(8928),
          te = o(16619),
          ie = o.n(te);
        function Q(H) {
          const { viewBoxSize: G = 20, ...h } = H,
            ve = h.size ? void 0 : te.IconSizeDefault;
          return (0, e.jsx)("svg", {
            viewBox: `0 0 ${G} ${G}`,
            ...(0, P.mz)({ className: ve, ...h }, ue),
          });
        }
        const ue = [
          ...k.L,
          {
            prop: "size",
            responsive: !0,
            className: (H) => te[`IconSize-${H}`],
          },
          {
            prop: "color",
            className: te.Color,
            cssProperty: (H) => ["--icon-color", (0, P.w7)(H)],
          },
          {
            prop: "hitSlop",
            className: te.HitSlop,
            cssProperty: (H) => [
              "--hit-slop-custom",
              typeof H == "string" ? H : "",
            ],
          },
          k.h.find(({ prop: H }) => H === "cursor"),
        ];
      },
      71698: (y, de, o) => {
        "use strict";
        o.d(de, { H: () => te, s: () => ie });
        var e = o(90626),
          P = o(41623);
        let k = 0;
        function te(Q, ue) {
          (0, e.useEffect)(() => {
            if (!(Q || ue))
              return (
                k++,
                () => {
                  --k == 0 && (0, P.s)();
                }
              );
          }, [Q, ue]);
        }
        function ie(Q) {
          const [ue, H] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const G = window.setTimeout(() => H(!0), Q);
            return () => window.clearTimeout(G);
          }, [Q]),
            te(ue);
        }
      },
      37656: (y, de, o) => {
        "use strict";
        o.d(de, { w: () => K });
        var e = o(41735),
          P = o.n(e),
          k = o(14947),
          te = o(65946),
          ie = o(90626),
          Q = o(27066),
          ue = o(8323),
          H = o(30096),
          G = o(3166),
          h = Object.defineProperty,
          ve = Object.getOwnPropertyDescriptor,
          O = (W, p, S, F) => {
            for (
              var Y = F > 1 ? void 0 : F ? ve(p, S) : p, ge = W.length - 1, fe;
              ge >= 0;
              ge--
            )
              (fe = W[ge]) && (Y = (F ? fe(p, S, Y) : fe(Y)) || Y);
            return F && Y && h(p, S, Y), Y;
          };
        const oe = class Ln {
          constructor() {
            (0, k.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const p = new Ln();
            return (
              (p.giveaway_id = this.giveaway_id),
              (p.seconds_until_drawing = this.seconds_until_drawing),
              (p.rtime_start = this.rtime_start),
              (p.rtime_end = this.rtime_end),
              (p.closed = this.closed),
              (p.winner_count = this.winner_count),
              p
            );
          }
        };
        O([k.sH], oe.prototype, "giveaway_id", 2),
          O([k.sH], oe.prototype, "seconds_until_drawing", 2),
          O([k.sH], oe.prototype, "rtime_start", 2),
          O([k.sH], oe.prototype, "rtime_end", 2),
          O([k.sH], oe.prototype, "closed", 2),
          O([k.sH], oe.prototype, "winner_count", 2);
        let R = oe;
        const ne = class tt {
          constructor() {
            (0, k.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(p, S) {
            return p + "_" + S;
          }
          GetInfoByInstance(p, S) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(p, S),
            );
          }
          GetNextDrawChangeCallback(p) {
            return (
              this.m_mapNextDrawChangeCallback.has(p) ||
                this.m_mapNextDrawChangeCallback.set(p, new ue.lu()),
              this.m_mapNextDrawChangeCallback.get(p)
            );
          }
          CopyToGiveaway(p, S) {
            S.closed != p.closed && (S.closed = p.closed),
              S.giveaway_id != p.giveaway_id && (S.giveaway_id = p.giveaway_id),
              S.rtime_start != p.rtime_start && (S.rtime_start = p.rtime_start),
              S.rtime_end != p.rtime_end && (S.rtime_end = p.rtime_end),
              S.winner_count != p.winner_count &&
                (S.winner_count = p.winner_count),
              S.seconds_until_drawing != p.seconds_until_drawing &&
                (S.seconds_until_drawing = p.seconds_until_drawing);
          }
          async ReloadGiveaway(p, S) {
            if (!p) return null;
            let F = G.TS.STORE_BASE_URL + "prizes/nextdraw/" + p,
              Y = null,
              ge = { origin: self.origin };
            return (
              (Y = await P().get(F, { params: ge })),
              (0, k.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(p) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(p, new R()),
                  this.CopyToGiveaway(
                    Y.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(p),
                  ),
                  S !== void 0)
                ) {
                  const fe = this.GetKey(p, S);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(fe) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      fe,
                      new R(),
                    ),
                    this.CopyToGiveaway(
                      Y.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(fe),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(p).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(p),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(p)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              tt.s_Singleton ||
                ((tt.s_Singleton = new tt()), tt.s_Singleton.Init()),
              tt.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let p = (0, G.Tc)("giveawaynextdraw", "application_config");
              if (p && p.giveaway_id) {
                let S = new R();
                this.CopyToGiveaway(p, S),
                  this.m_mapGiveawayIDToNextDrawInfo.set(p.giveaway_id, S);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        O([k.sH], ne.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          O([k.XI], ne.prototype, "CopyToGiveaway", 1);
        let J = ne;
        const L = class fn {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = fn.s_GlobalInstance),
              (fn.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(p, S) {
            if ((this.ClearRefreshInterval(), !p.closed)) {
              let F =
                p.seconds_until_drawing <= 0 && p.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(S, F);
            }
          }
          SetupCountDown(p, S) {
            p > 0 && (this.m_intervalCountDownID = window.setInterval(S, 1e3));
          }
        };
        O([Q.o], L.prototype, "ClearRefreshInterval", 1),
          O([Q.o], L.prototype, "ClearCountDown", 1),
          O([Q.o], L.prototype, "SetupRefreshDataInterval", 1),
          O([Q.o], L.prototype, "SetupCountDown", 1);
        let N = L;
        function V(W, p) {
          const S = J.Get().GetInfoByInstance(W, p.m_myInstanceNumber);
          (S.seconds_until_drawing -= 1),
            S.seconds_until_drawing == 0 && p.ClearCountDown();
        }
        function le(W, p) {
          const S = J.Get().GetInfoByInstance(W, p.m_myInstanceNumber);
          S &&
            S.BIsValid() &&
            S.seconds_until_drawing <= 0 &&
            !S.closed &&
            (p.ClearCountDown(),
            J.Get()
              .ReloadGiveaway(W, p.m_myInstanceNumber)
              .then((F) => {
                p.SetupCountDown(F.seconds_until_drawing, () => V(W, p));
              }));
        }
        function K(W) {
          const [p] = (0, ie.useState)(new N()),
            S = (0, H.CH)();
          (0, ie.useEffect)(
            () => (
              J.Get()
                .ReloadGiveaway(W, p.m_myInstanceNumber)
                .then((ke) => {
                  p.SetupRefreshDataInterval(ke, () => le(W, p)),
                    p.SetupCountDown(ke.seconds_until_drawing, () => V(W, p)),
                    S();
                }),
              () => {
                p.ClearRefreshInterval(), p.ClearCountDown();
              }
            ),
            [p, W, S],
          );
          const F = J.Get().GetInfoByInstance(W, p.m_myInstanceNumber),
            [Y, ge, fe] = (0, te.q3)(() => [
              F?.winner_count,
              F?.closed,
              F?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !F || F.giveaway_id == null || !F.BStarted() || Y === void 0,
            winner_count: Y,
            closed: ge,
            seconds_until_drawing: fe,
          };
        }
      },
      91576: (y, de, o) => {
        "use strict";
        o.d(de, { _: () => Xa });
        var e = o(7850),
          P = o(99412),
          k = o(19298),
          te = o(20169),
          ie = o(28604),
          Q = o(36631),
          ue = o(64387);
        function H(a) {
          const { strURL: t } = a;
          return t
            ? (0, e.jsx)("div", {
                className: ue.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var G = o(65946),
          h = o(90626),
          ve = o(73259),
          O = o(25792),
          oe = o(52393),
          R = o.n(oe),
          ne = o(95695),
          J = o.n(ne),
          L = o(36707),
          N = o(3166),
          V = o(82054),
          le = o(68266);
        function K(a) {
          const { event: t, bIsPreview: n } = a;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)(O.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, L.A)(
                    R().SaleBackground,
                    R()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    R().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: n
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    s && (0, e.jsx)("source", { src: s, type: "video/webm" }),
                    r &&
                      !N.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: r, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function W(a) {
          const { event: t, language: n, children: s, bIsPreview: r } = a,
            i = h.useRef(null),
            c = (0, le.m0)(t, "sale_header", n),
            [u] = (0, G.q3)(() => [t.jsondata.sale_sub_menu]);
          h.useEffect(() => {
            if (!c) return;
            const I = new Image();
            (I.onload = () => {
              const x = (100 * I.width) / 950 + "%";
              i.current && i.current.style.setProperty("--background-scale", x);
            }),
              (I.src = c);
          }, [c]);
          const d = t.jsondata.sale_sections?.some(
              (I) => I.section_type === "contenthubmaincarousel",
            ),
            m =
              t.jsondata.item_source_type === ve.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                d),
            v = c ? `url(${c})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              u
                ? (0, e.jsx)(V.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: u,
                    styleVariation: V.g.k_SubMenu,
                  })
                : (0, e.jsx)(H, { strURL: c }),
              (0, e.jsx)("div", {
                className: (0, L.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: m,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, L.A)(
                    R()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    R().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: t.jsondata.sale_background_color,
                  },
                  ref: i,
                  children: [
                    c && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, L.A)(
                            J().SalePageBackground,
                            J().BackgroundImage,
                            J().Blur,
                          ),
                          src: c,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, L.A)(
                            J().SalePageBackground,
                            J().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: v,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(K, { event: t, bIsPreview: r }),
                    (0, e.jsx)(e.Fragment, { children: s }),
                  ],
                }),
              }),
            ],
          });
        }
        var p = o(26589),
          S = o(39905),
          F = o(50909),
          Y = o.n(F);
        function ge(a) {
          const { eventModel: t } = a,
            { data: n } = (0, p.h)(t.clanSteamID.GetAccountID());
          if (
            !n ||
            (!n.can_edit && !n.support_user) ||
            (0, N.yK)() == "community"
          )
            return;
          const s = t.GetAllTags(),
            r = [];
          if (
            (s.includes("hide_store") &&
              r.push(
                S.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            s.includes("mod_hide_store") &&
              n.support_user &&
              r.push(S.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              s.includes("contenthub") &&
              r.push(
                S.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && r.length == 0))
          )
            return (0, e.jsx)("div", {
              className: Y().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: Y().WarningText,
                      children: S.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  r.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: Y().WarningText,
                      children: [
                        S.Z.LocalizePlural(
                          "#Sale_SaleEventIsHidden_Reason",
                          r.length,
                        ),
                        (0, e.jsx)("ul", {
                          children: r.map((i) =>
                            (0, e.jsx)("li", { children: i }, i),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            });
        }
        var fe = o(76789),
          ke = o.n(fe),
          l = o(18210);
        function nt(a) {
          const { eventModel: t, language: n } = a,
            [s, r] = (0, G.q3)(() => [
              t.jsondata.sale_logo_url,
              l.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: ke().SalePageLogoCtn,
                  href: N.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(pt, { ...a }),
                })
              : (0, e.jsx)("div", {
                  className: (0, L.A)(ke().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(pt, { ...a }),
                })
            : null;
        }
        function pt(a) {
          const { eventModel: t, language: n } = a,
            s = (0, le.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var Nt = o(72865),
          In = o(71347),
          at = o.n(In),
          ft = o(53107);
        function Ot(a) {
          const { rgPresenters: t } = a;
          if (!t || t.length == 0) return null;
          const n = (0, P.sfN)(N.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, L.A)(
                  at().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: S.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(He, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, L.A)(
                  at().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: S.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((s, r) =>
                      (0, e.jsxs)(
                        h.Fragment,
                        {
                          children: [
                            (0, e.jsx)(He, { presentor: s, lang: n }),
                            t.length > 2 && ", ",
                          ],
                        },
                        s.url,
                      ),
                    ),
                  (0, e.jsx)(He, { presentor: t[t.length - 1], lang: n }),
                ),
              });
        }
        function He(a) {
          const { presentor: t, lang: n } = a,
            s = (0, Nt.aL)(t.url);
          return (0, e.jsx)(ft.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: at().PresenterLabel,
            children: l.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var We = o(60480),
          Me = o(92757),
          Ve = o(18994),
          It = o(86515),
          Ut = o(64703),
          Rt = o(61478);
        function Ft(a) {
          const { event: t, broadcastEmbedContext: n } = a,
            s = !!t?.jsondata?.broadcast_display_wide_player,
            r = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(Rt.B, {
                event: t,
                broadcastEmbedContext: n,
                bWideBroadcastDisplay: s,
                bWideBroadcastPermitChat: r,
              }),
          });
        }
        var ot = o(24808);
        function zt(a) {
          const {
            event: t,
            fnOnChangeDayIndex: n,
            addtionalAdminButtons: s,
          } = a;
          return (0, e.jsx)(ot.g, {
            eventModel: t,
            fnOnUpdateSaleDayIndex: n,
            addtionalAdminButtons: s,
            bSupportsSticky: !0,
          });
        }
        var Qe = o(179),
          Ne = o(50109),
          _e = o(30096),
          xt = o(98609),
          Je = o(57673);
        const st = new Map();
        function Ht(a, t) {
          const n = a.findIndex((s) => s.section_type === "tabs");
          if (n >= 0 && t !== void 0) {
            const s = a[n],
              r = s.tabs?.findIndex((i) => i.unique_id === t);
            if (r !== void 0 && r >= 0 && s.tabs)
              return {
                selectedTabBackgroundDef: s.tabs[r].tab_background_img_groups,
                nTabSaleSectionIndex: n,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function Wt(a, t, n) {
          const s = new Map(),
            r = new Map(),
            i = new Map();
          let c,
            u,
            d = 0;
          const { selectedTabBackgroundDef: m, nTabSaleSectionIndex: v } = Ht(
            t,
            n,
          );
          if (a?.enabled) {
            const I = a.groups?.length;
            if (
              (a.groups?.forEach((D, x) => {
                if (d >= t.length || t[d].section_type == "tabs") return;
                const w = new Array();
                for (
                  let b = 0;
                  b < (D?.num_sections || 0) &&
                  d < t.length &&
                  t[d].section_type != "tabs";
                  ++b, ++d
                ) {
                  const B = t[d].unique_id;
                  w.push(B),
                    r.set(B, D.background_id),
                    b === 0 && i.set(B, D.background_id);
                }
                if (
                  (s.set(D.background_id, {
                    nBackgroundGroupID: D.background_id,
                    sectionUniqueIDs: w,
                    nSaleSectionLastIndex: d - 1,
                    nUniqueIDNextSaleSection:
                      d < t.length && (v === void 0 || d < v)
                        ? t[d].unique_id
                        : void 0,
                  }),
                  x + 1 == I && a.last_group_until_cover_section_until_end)
                )
                  for (
                    let b = d;
                    b < t.length &&
                    (!m || !m.enabled || b < v) &&
                    !(t[b].section_type == "tabs" && m?.enabled);
                    ++b
                  ) {
                    const B = t[b].unique_id;
                    r.set(B, D.background_id);
                  }
              }),
              d < t.length && (v === void 0 || d < v) && (c = t[d].unique_id),
              m?.enabled && v !== void 0)
            ) {
              let D = v;
              const x = m.groups.length;
              for (
                m.groups.forEach((w, _) => {
                  if (D >= t.length) return;
                  const b = new Array();
                  for (
                    let E = 0;
                    E < w.num_sections && D < t.length;
                    ++E, ++D
                  ) {
                    const M = t[D],
                      Z = M.unique_id;
                    (0, Je.bF)(n, M)
                      ? (b.push(Z),
                        r.set(Z, w.background_id),
                        E === 0 && i.set(Z, w.background_id))
                      : --E;
                  }
                  let j = D;
                  for (; j < t.length && !(0, Je.bF)(n, t[j]); ) j += 1;
                  if (
                    (s.set(w.background_id, {
                      nBackgroundGroupID: w.background_id,
                      sectionUniqueIDs: b,
                      nSaleSectionLastIndex: D - 1,
                      nUniqueIDNextSaleSection:
                        j < t.length ? t[j].unique_id : void 0,
                    }),
                    _ + 1 == x && m.last_group_until_cover_section_until_end)
                  )
                    for (let E = D; E < t.length; ++E) {
                      const M = t[E];
                      if (M.section_type == "tabs" && m?.enabled) break;
                      (0, Je.bF)(n, M) && r.set(M.unique_id, w.background_id);
                    }
                });
                D < t.length && !(0, Je.bF)(n, t[D]);
              )
                D++;
              D < t.length && (u = t[D].unique_id);
            }
          } else t?.length > 0 && (c = t[0].unique_id);
          return {
            mapGroupToSections: s,
            nFirstSaleSectionIDWithoutGroup: c,
            mapSectionToGroup: r,
            mapFirstSectionToGroup: i,
            selectedTabBackgroundDef: m,
            nTabSaleSectionIndex: v,
            nFirstTabSectionIDWithoutGroup: u,
          };
        }
        var re = o(29630),
          Vt = o(68434),
          Ct = o(15181),
          rt = o(41635),
          Ge = o(81416);
        function jt(a, t, n, s) {
          let i = a.jsondata.sale_background_img_groups.groups.find(
            (c) => c.background_id === t.groupID,
          );
          return (
            !i &&
              s >= 0 &&
              (i = a
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((d) => d.unique_id == s)
                ?.tab_background_img_groups?.groups?.find(
                  (d) => d.background_id == t.groupID,
                )),
            (0, e.jsx)(
              Dt,
              {
                eventModel: a,
                displayDef: i,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  i &&
                  i.randomize_section_order &&
                  n !== Ge.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(Kt, {
                        clanEventGID: a.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Kt(a) {
          const { clanEventGID: t, elSaleSections: n } = a,
            [s, r] = (0, Vt.M)(`sale_section_seed_${t}`, (0, Ct.m)());
          if (!n || n.length === 0) return null;
          if (n.length > 1 && s !== void 0) {
            const i = (0, Ct.A)(s);
            return (0, e.jsx)(e.Fragment, { children: rt.fW(n, 0, i) });
          }
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function Dt(a) {
          const {
              displayDef: t,
              children: n,
              eventModel: s,
              derivedGroupInfo: r,
            } = a,
            i = (0, Ne.E)(),
            c = h.useCallback(
              (x, w) => {
                st.set(r.nBackgroundGroupID, w);
              },
              [r],
            ),
            u = (0, _e.w6)(c);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let d;
          if (t.localized_background_art) {
            const x = (0, P.LgB)(i),
              w =
                x in t.localized_background_art
                  ? x
                  : l.A0.GetLanguageFallback(xt.TS.LANGUAGE),
              _ = t.localized_background_art[w];
            _ && (d = re.zU.GenerateURLFromHashAndExt(s.clanSteamID, _));
          }
          let m = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              m += "to bottom,";
              break;
            case "left-to-right":
              m += "to right,";
              break;
            case "top-left-to-bottom-right":
              m += "to bottom right,";
              break;
            case "single-color":
              m = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((m += " " + t.background_color1),
              (m += ", " + t.background_color2),
              (m += ")"))
            : (m = null);
          const v =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            I = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            D = {
              backgroundImage: m ? `url(${d}), ${m}` : `url(${d})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: I ? t.position_setting : void 0,
              backgroundColor: v ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: u,
            style: D,
            id: "background_group_" + t.background_id,
            children: n,
          });
        }
        var St = o(9807),
          it = o(4720),
          Yt = o(64641),
          Xe = o.n(Yt),
          Ke = o(36118),
          Ye = o(85599),
          Ie = o(71421);
        function Re(a) {
          return typeof a == "string" || typeof a == "number"
            ? a
            : JSON.stringify(a);
        }
        class bt {
          Keyify = (t) => Re(t);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(t) {
            return this.m_mapVisible.has(this.Keyify(t));
          }
          SortKey(t, n) {
            const s = this.m_mapVisible.get(this.Keyify(t)) || 0,
              r = this.m_mapVisible.get(this.Keyify(n)) || 0;
            return s - r;
          }
          BMarkAppVisibile(t, n) {
            const s = this.EnsureOwnerSetExists(t),
              r = this.Keyify(n);
            return (
              s.add(r),
              this.IsAlreadyVisible(n)
                ? (this.m_mapVisible.set(
                    r,
                    (this.m_mapVisible.get(r) ?? 0) + 1,
                  ),
                  !1)
                : (this.m_mapVisible.set(r, 1), !0)
            );
          }
          BMarkAppNotVisible(t, n) {
            if (!this.IsAlreadyVisible(n)) return !1;
            const s = this.EnsureOwnerSetExists(t),
              r = this.Keyify(n);
            return s.has(r) ? (this.DecrementAppVisibility(r), !0) : !1;
          }
          MarkAllAppsNotVisible(t) {
            this.m_mapOwners.has(t) &&
              (this.m_mapOwners
                .get(t)
                .forEach(this.DecrementAppVisibility.bind(this)),
              this.m_mapOwners.delete(t));
          }
          EnsureOwnerSetExists(t) {
            let n = this.m_mapOwners.get(t);
            return (
              n ||
                (this.m_mapOwners.set(t, new Set()),
                (n = this.m_mapOwners.get(t))),
              n
            );
          }
          DecrementAppVisibility(t) {
            const n = (this.m_mapVisible.get(t) ?? 0) - 1;
            n > 0 ? this.m_mapVisible.set(t, n) : this.m_mapVisible.delete(t);
          }
        }
        var Ze = o(71742),
          lt = o(53113),
          Et = o(64377),
          wt = o(7638);
        function yt(a, t) {
          if (!a || !a.BIsClanAccount()) return !1;
          const n = wt.KN.Get().GetPartnerEventPermissions(a);
          return n ? (t ? n.valve_admin : n.valve_admin || n.support_user) : !1;
        }
        function Zt(a) {
          const { clanSteamID: t, id: n } = a;
          return yt(t, a.requireAdmin)
            ? (0, e.jsx)("div", {
                id: n,
                className: (0, L.A)(
                  a.className,
                  a.requireAdmin
                    ? ne.ValveOnlyAdminBackground
                    : ne.ValveOnlyBackground,
                ),
                children: a.children,
              })
            : null;
        }
        var U = o(16412),
          se = o(96538),
          be = o(88003),
          Qt = o(12932),
          ct = o(46777),
          Jt = o(79118),
          dt = o(16346),
          Xt = o(61257),
          _t = o(56718),
          $t = o(27828),
          $e = o.n($t);
        function qt(a) {
          return `rgba(${a.rgb.r}, ${a.rgb.g}, ${a.rgb.b}, ${a.rgb.a})`;
        }
        function en(a) {
          const t = parseInt(a.slice(1), 16),
            n = (t >> 16) & 255,
            s = (t >> 8) & 255,
            r = t & 255;
          return `rgba(${n}, ${s}, ${r}, 1)`;
        }
        function tn(a) {
          const { color: t, onChange: n, strTitle: s, disableAlpha: r } = a,
            [i, c] = (0, h.useState)(() => t || "rgba(255, 255, 255, 1)"),
            u = (0, h.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(S.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const v = (await new window.EyeDropper().open()).sRGBHex,
                  I = en(v);
                c(I), n(I);
              } catch (d) {
                console.warn(S.Z.Localize("#Sale_EyeDropperFailed"), d);
              }
            }, [n]);
          return (0, e.jsxs)("div", {
            className: $e().ColorPickerDialog,
            children: [
              !!s && (0, e.jsx)(U.JU, { children: s }),
              (0, e.jsx)(Xt.xk, {
                onChange: (d) => {
                  const m = qt(d);
                  c(m), n(m);
                },
                color: i,
                disableAlpha: r,
                className: $e().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: $e().EyeDropperCtn,
                children: (0, e.jsx)(Ie.Gq, {
                  toolTipContent: S.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(U.$n, {
                    className: $e().EyeDropperBtn,
                    onClick: u,
                    children: (0, e.jsx)(_t.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function nn(a) {
          const {
              color: t,
              onChange: n,
              onRequestClose: s,
              disableAlpha: r,
              strTitle: i,
            } = a,
            c = (0, h.useRef)(null);
          return (
            (0, h.useEffect)(() => {
              const u = c.current?.ownerDocument ?? document,
                d = (v) => {
                  c.current && !c.current.contains(v.target) && s();
                },
                m = (v) => {
                  v.key === "Escape" && s();
                };
              return (
                u.addEventListener("pointerdown", d, !0),
                u.addEventListener("keydown", m, !0),
                () => {
                  u.removeEventListener("pointerdown", d, !0),
                    u.removeEventListener("keydown", m, !0);
                }
              );
            }, [s]),
            (0, e.jsx)("div", {
              ref: c,
              children: (0, e.jsx)(tn, {
                color: t,
                disableAlpha: r,
                strTitle: i ?? S.Z.Localize("#Button_Color"),
                onChange: n,
              }),
            })
          );
        }
        function an() {
          return {
            openColorPicker: (0, h.useCallback)((t, n) => {
              let s = null;
              const r = () => s?.Hide();
              s = (0, dt.lX)(
                (0, e.jsx)(nn, {
                  color: n.color,
                  disableAlpha: n.disableAlpha,
                  strTitle: n.strTitle,
                  onChange: n.onChange,
                  onRequestClose: r,
                }),
                t,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
        var ut = o(13447),
          Ae = o.n(ut),
          on = o(32190),
          At = o.n(on),
          Be = o(76559),
          Bt = o(75909),
          Ee = o(53424),
          Gt = o(72604),
          sn = o(41735),
          rn = o.n(sn),
          qe = o(14947),
          Te = o(9046),
          ln = Object.defineProperty,
          cn = Object.getOwnPropertyDescriptor,
          dn = (a, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? cn(t, n) : t, i = a.length - 1, c;
              i >= 0;
              i--
            )
              (c = a[i]) && (r = (s ? c(t, n, r) : c(r)) || r);
            return s && r && ln(t, n, r), r;
          };
        const g = class Pn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, qe.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, n, s, r) {
            let i =
                N.TS.COMMUNITY_BASE_URL +
                "gid/" +
                n.ConvertTo64BitString() +
                "/hasclanimagefile",
              c = { image_hash_and_ext: s, lang: "" + r };
            return (
              (await rn().get(i, { params: c, cancelToken: t && t.token })).data
                .success == Gt.R
            );
          }
          SetPrimaryImageForImageGroup(t, n) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != t.imageid ||
              n != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: t,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = n),
              (this.m_curLocImageGroup.localized_images = (0, rt.$Y)(
                this.m_curLocImageGroup.localized_images,
                P.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            return this.m_curLocImageGroup?.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(t, n) {
            if (this.m_curLocImageGroup) {
              let s = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[n]
                ? this.m_curLocImageGroup.localized_images[n]
                : re.zU.GenerateURLFromHashAndExt(
                    t,
                    re.zU.GetHashAndExt(s) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const n = this.m_curLocImageGroup.primaryImage,
              s = Be.b.InitFromClanID(n.clanAccountID),
              r = re.zU.GetHashAndExt(n) ?? "",
              i = [];
            for (let u = P.Bhc; u < P.bP9; ++u)
              i.push(Pn.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, u));
            const c = await Promise.all(i);
            (0, qe.h5)(() => {
              for (let u = P.Bhc; u < P.bP9; ++u)
                c[u] &&
                  (this.m_curLocImageGroup.localized_images[u] =
                    re.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      Te.wI.full,
                      u,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, n, s) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = s
                ? re.zU.GenerateURLFromHashAndExtAndLang(
                    n,
                    s,
                    Te.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, n) {
            if (!this.m_curLocImageGroup) return;
            let s = this.m_curLocImageGroup.primaryImage;
            if (s?.image_hash == t) {
              const r = Be.b.InitFromClanID(s.clanAccountID),
                i = re.zU.GetHashAndExt(s);
              i &&
                (this.m_curLocImageGroup.localized_images[n] =
                  re.zU.GenerateURLFromHashAndExtAndLang(
                    r,
                    i,
                    Te.wI.full,
                    n,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
            }
          }
          GetAllLocalizedGroupImages() {
            return (
              (this.m_curLocImageGroup &&
                this.m_curLocImageGroup.localized_images) ||
              []
            );
          }
          GetAllLocalizedGroupImageHashAndExts() {
            return this.GetAllLocalizedGroupImages()
              .filter(Boolean)
              .map((s) => re.zU.GetHashAndExtFromURL(s));
          }
        };
        dn([qe.sH], g.prototype, "m_curLocImageGroup", 2);
        let f = g;
        const C = new f();
        var A = o(38410),
          T = o(34592),
          z = o(75844),
          q = o(32093),
          xe = o(72849),
          we = o(64),
          me = o(72739),
          Ce = o(82734);
        function Le(a, t) {
          const n = h.useRef(void 0),
            s = h.useCallback(
              (c) => {
                c.currentTarget.files.length > 0 &&
                  (a(c.currentTarget.files), (c.currentTarget.value = ""));
              },
              [a],
            ),
            r = h.useCallback(() => n.current.click(), []);
          return [
            me.createPortal(
              (0, e.jsx)("form", {
                onSubmit: gn,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...t,
                  type: "file",
                  ref: n,
                  onChange: s,
                }),
              }),
              window.document.body,
            ),
            r,
          ];
        }
        function Fe(a) {
          const [t, n] = h.useState(!1),
            s = h.useCallback((d) => {
              ((d.dataTransfer.files && d.dataTransfer.files[0]) ||
                (d.dataTransfer.types && d.dataTransfer.types[0] == "Files")) &&
                n(!0);
            }, []),
            r = h.useCallback((d) => {
              Ce.NO(d) && n(!1);
            }, []),
            i = h.useCallback(() => n(!1), []),
            c = t ? gn : void 0,
            u = h.useCallback(
              (d) => {
                d.dataTransfer.files?.length &&
                  (a(d.dataTransfer.files, d),
                  d.preventDefault(),
                  d.stopPropagation()),
                  n(!1);
              },
              [a],
            );
          return [
            {
              onDragEnter: s,
              onDragLeave: r,
              onDragEnd: i,
              onDragOver: c,
              onDrop: u,
            },
            t,
          ];
        }
        async function un(a, t = 1e3) {
          return await new Promise((n, s) => {
            const r = new Image();
            (r.src = a),
              (r.onload = () => n("success")),
              (r.onerror = () => n("error")),
              t > 0 && window.setTimeout(() => n("timeout"), t);
          });
        }
        function gn(a) {
          a.preventDefault();
        }
        function io(a) {
          switch (a.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const t = a.name.match(/(?<=\.)[^.]+$/);
              return t ? t[0] : void 0;
          }
        }
        var kn = o(71647),
          et = o.n(kn);
        function Mn(a) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = a,
            [i, c] = Fe(t),
            [u, d] = Le(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, L.A)(
              c ? et().DragAndDropContainerDragging : et().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!n && n(),
              (0, e.jsx)("div", {
                children: r || (0, l.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: et().ImageUploadBar,
                children: [
                  u,
                  (0, e.jsxs)("label", {
                    onClick: d,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, l.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: et().SelectImageButton,
                        children: (0, l.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              s,
              a.children,
            ],
          });
        }
        var Nn = o(21254),
          On = o(27344),
          je = o.n(On),
          Un = o(9472);
        function Rn(a) {
          const {
              imageUploader: t,
              fnUploadComplete: n,
              elOverrideDragAndDropText: s,
              forceResolution: r,
              elAdditonalButtons: i,
              rgRealmList: c,
            } = a,
            [u, d] = (0, G.q3)(() => [
              t.GetUploadImages(),
              Ne.O.Get().GetCurEditLanguage(),
            ]),
            m = h.useCallback(
              async (D) => {
                let x = Array.from(D),
                  w = !0;
                for (let _ = 0; _ < x.length; _++) {
                  const b = x[_],
                    { language: j } = (0, A.jj)(b?.name, d);
                  try {
                    const B = (0, A.PD)(j, d, c);
                    (w = await t.AddImageForLanguage(b, B)),
                      w ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            _ +
                            " file=" +
                            b.name,
                        ),
                        (0, be.pg)(
                          (0, e.jsx)(se.KG, {
                            strDescription: (0, l.we)(
                              "#ImagePicker_Error",
                              b.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (B) {
                    let E = (0, T.H)(B);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + E.strErrorMsg,
                      E,
                    ),
                      (0, be.pg)(
                        (0, e.jsx)(se.KG, {
                          strDescription: (0, l.we)(
                            "#EventError_Code",
                            E.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return w;
              },
              [d, t, c],
            ),
            v = h.useMemo(
              () =>
                i instanceof Array
                  ? i
                  : [
                      (0, e.jsx)(
                        h.Fragment,
                        { children: i },
                        "elAdditonalButtons",
                      ),
                    ],
              [i],
            );
          (0, G.q3)(() =>
            u.map((D) => ({ a: D.GetCurrentImageOption(), b: D.language })),
          );
          const I = async () => {
            const D = await t.UploadAllImages(r);
            n?.(D);
          };
          return (0, e.jsxs)(Mn, {
            onDropFiles: m,
            elAdditonalButtons: v,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(h.Fragment, {
                children: (0, e.jsx)("div", {
                  className: je().UploadPreviewCtn,
                  children: u.map((D) =>
                    (0, e.jsx)(
                      xn,
                      {
                        asset: D,
                        forceResolution: r,
                        fnOnRemove: () => t.DeleteUploadImage(D),
                        languageRealms: c,
                      },
                      "arttabupload_" + D.filename + "_" + D.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Fn, { imageUploader: t, fnOnUploadImageRequested: I }),
            ],
          });
        }
        function Fn(a) {
          const { imageUploader: t, fnOnUploadImageRequested: n } = a,
            [s] = (0, G.q3)(() => [t.GetUploadImages()]),
            r = s.some((c) => c.status == "pending"),
            i = s.some(
              (c) =>
                c.status == "waiting" ||
                c.status == "uploading" ||
                c.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: je().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)(U.$n, {
                  style: { margin: "8px" },
                  onClick: n,
                  disabled: !r,
                  children: (0, l.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)(U.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: i,
                  children: (0, l.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function lo(a, t, n, s, r) {
          let i = new Array();
          return (
            a.GetUploadImages().forEach((c) => {
              i.push(
                jsx(
                  xn,
                  {
                    asset: c,
                    forceResolution: n,
                    forceFileType: s,
                    fnOnRemove: () => a.DeleteUploadImage(c),
                    languageRealms: r,
                  },
                  t + c.file + "_" + c.uploadTime,
                ),
              );
            }),
            i
          );
        }
        const xn = (0, z.PA)(zn);
        function zn(a) {
          const t = (x) => {
              if (x instanceof we.M7) {
                x.ResetImage();
                const w = window,
                  _ = (0, e.jsx)(Nn.q, {
                    ownerWin: w,
                    uploadFile: x,
                    forceResolution: a.forceResolution,
                    fileType: a.forceFileType || xe.bg.dU,
                  });
                (0, be.HT)(_, w, "CropModal", {
                  strTitle: (0, l.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  x.fileType,
                  JSON.stringify(x.GetCurrentImageOption()),
                );
            },
            { asset: n, fnOnRemove: s, languageRealms: r } = a,
            i = n.ImageOptions?.map((x) => {
              let w = x?.fnGetLabelText(),
                _;
              x.bEnforceDimensions && (w += ` - ${x.width}x${x.height}`),
                x.bDeprecated &&
                  ((w += ` ${(0, l.we)("#ImageUpload_Deprecated")}`),
                  (_ = (0, l.we)("#ImageUpload_Deprecated_ttip")));
              let b;
              return (
                (n.BIsOriginalMinimumDimensions(x) &&
                  n.FileTypeMatchesImageTypes(x)) ||
                  (b = je().ImageDimensionTooSmall),
                { label: w, data: x, strOptionClass: b, tooltip: _ }
              );
            }).filter((x) => !x.data.bHiddenFromDropdown),
            c = {
              pending: (0, l.we)("#ImageUpload_Pending"),
              waiting: (0, l.we)("#ImageUpload_Waiting"),
              uploading: (0, l.we)("#ImageUpload_Uploading"),
              processing: (0, l.we)("#ImageUpload_Processing"),
              success: (0, l.we)("#ImageUpload_SuccessCard"),
              failed: (0, l.we)("#ImageUpload_Failed"),
            },
            u = n.BSupportsLanguages()
              ? Vn(
                  l.A0.GetLanguageListForRealms(
                    r ?? [q.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            d = n.IsValidAssetType(a.forceResolution, a.forceFileType),
            m = n.status == "pending";
          let v = c[n.status];
          n.status == "pending" &&
            (d.needsCrop
              ? (v = (0, l.we)("#ImageUpload_NeedsCrop"))
              : d.error && (v = (0, l.we)("#ImageUpload_Invalid")));
          let I;
          const D = n.GetCurrentImageOption();
          return (
            D && (I = i?.find((x) => x.data.sKey == D.sKey)?.data),
            I || (I = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: je().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: je().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(Ke.sED, {}),
                }),
                (0, e.jsx)(Hn, { asset: n }),
                u &&
                  (0, e.jsx)(U.m, {
                    strDropDownClassName: J().DropDownScroll,
                    rgOptions: u,
                    selectedOption: n.language,
                    onChange: (x) => (n.language = x.data),
                    disabled: !m,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)(U.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: I,
                    onChange: (x) => n.SetCurrentImageOption(x.data),
                    disabled: !m,
                  }),
                m &&
                  d.warnings?.map((x, w) =>
                    (0, e.jsx)(
                      "div",
                      { className: je().UploadPreviewWarning, children: x },
                      `warning${w}`,
                    ),
                  ),
                m &&
                  d.messages?.map((x, w) =>
                    (0, e.jsx)(
                      "div",
                      { className: je().UploadPreviewMessage, children: x },
                      `message${w}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, L.A)({
                    [J().FlexColumnContainer]: !0,
                    [je().UploadPreviewError]: n.status == "failed",
                  }),
                  children: [
                    v,
                    (0, Un.o)(n.status) &&
                      (0, e.jsx)("div", {
                        className: Xe().FlexCenter,
                        children: (0, e.jsx)(Ye.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: je().UploadPreviewError,
                  children: n.message,
                }),
                m &&
                  d.error &&
                  (0, e.jsx)("div", {
                    className: je().UploadPreviewError,
                    children: d.error,
                  }),
                m &&
                  d.needsCrop &&
                  (0, e.jsx)(U.jn, {
                    onClick: () => t(n),
                    children: (0, l.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function Hn(a) {
          const { asset: t } = a;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: je().PreviewImgCtn,
                onClick: (n) =>
                  (0, be.pg)((0, e.jsx)(Wn, { asset: t }), (0, Ce.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: je().PreviewImgInfo,
                    children: [t.width, " x ", t.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: t.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: je().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: je().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function Wn(a) {
          const { asset: t, closeModal: n } = a;
          return (0, e.jsx)(se.o0, {
            bAlertDialog: !0,
            closeModal: n,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: t.dataUrl }),
            }),
          });
        }
        function Vn(a) {
          const t = [],
            n = new Array();
          for (const s of a) {
            if (s == P.X51) continue;
            const r = (0, l.we)("#Language_" + (0, P.LgB)(s));
            n.push({ label: r, data: s });
          }
          return (
            n.sort((s, r) => s.label.localeCompare(r.label)),
            n.forEach((s) => t.push({ label: s.label, data: s.data })),
            n
          );
        }
        var Tt = ((a) => (
          (a[(a.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (a[(a.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (a[(a.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (a[(a.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          a
        ))(Tt || {});
        function Cn(a, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${a.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(a)}`
            : `${k_ClanImageReplacementToken}/${a.clanAccountID}/${ClanImageUtils.GetHashAndExt(a)}`;
        }
        function co(a, t, n) {
          let s = "";
          const r = Cn(t);
          if (n == 4)
            (s = "[video webm="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (s += r),
              (s += " mp4="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (s += r),
              (s += " autoplay=true controls=false][/video]");
          else if (n == 2) s = "[img]" + r + "[/img]";
          else {
            const i = Cn(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          a.InsertText(s);
        }
        var Kn = o(55436),
          Yn = o(53732),
          De = o.n(Yn),
          jn = o(49460);
        function Zn(a) {
          const { fnSetImageSearch: t } = a,
            n = (0, h.useRef)(null);
          return (0, e.jsx)("div", {
            className: jn.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: n,
              className: jn.SearchInput,
              type: "text",
              placeholder: (0, l.we)("#ImagePicker_Search"),
              onChange: (s) => t(s.currentTarget.value),
              onKeyDown: (s) => {
                s.key == "Escape" &&
                  (t(""), n.current && (n.current.value = ""));
              },
            }),
          });
        }
        const Qn = h.memo(function (t) {
          const {
            fileNameSearch: n,
            clanAccountID: s,
            imageInsertCallBack: r,
            fnOnExpandImage: i,
            showImageActions: c = !0,
            InternalOpenLocalizeImageGroup: u,
          } = t;
          return (0, e.jsx)(Dn, {
            clanAccountID: s,
            fileNameSearch: n,
            children: (d, m) =>
              d.map((v) =>
                (0, e.jsx)(
                  Jn,
                  {
                    clanImage: v,
                    searchStringHilight: m,
                    imageInsertCallBack: r,
                    showImageActions: c,
                    fnOnOpenLocalizedImageGroup: u,
                    OnImageClick: i,
                  },
                  v.imageid,
                ),
              ),
          });
        });
        function Dn(a) {
          const { clanAccountID: t, fileNameSearch: n, children: s } = a,
            r = (0, Ee.n9)(t),
            i = n.trim().toLowerCase() || "",
            c = Ee.pU.GetFilteredClanImagesList(r, i);
          if (c.length == 0) {
            const u = Be.b.InitFromClanID(t);
            let d = Ee.pU.GetLoadState(u);
            return d && d.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: De().ResultNotification,
                    children:
                      i.length > 0
                        ? (0, l.we)("#ImagePicker_EmptySearch")
                        : (0, l.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : d && d.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: De().ErrorCode,
                      children: (0, l.we)("#ImagePicker_Error", d.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: De().ResultNotification,
                      children: (0, l.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return s(c, i);
        }
        function uo(a) {
          const {
            clanAccountID: t,
            fileNameSearch: n,
            onImageSelected: s,
            selectedItem: r,
          } = a;
          return jsx(Dn, {
            clanAccountID: t,
            fileNameSearch: n,
            children: (i) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: i.map((c) =>
                  jsx(
                    $n,
                    { clanImage: c, selected: c == r, onImageSelected: s },
                    c.imageid,
                  ),
                ),
              }),
          });
        }
        function Jn(a) {
          const {
              clanImage: t,
              searchStringHilight: n,
              imageInsertCallBack: s,
              OnImageClick: r,
              showImageActions: i,
              fnOnOpenLocalizedImageGroup: c,
            } = a,
            [u, d] = h.useState(!1),
            m = () => s(t, Tt.k_eInsertFullImage),
            v = () => s(t, Tt.k_eInsertVideo),
            I = () => s(t, Tt.k_eInsertThumbnail),
            D = (ee) => {
              t.url &&
                (ee.dataTransfer.setData("text", t.url),
                Ee.pU.GetClanImageDragListener().forEach((he) => {
                  let ye = Be.b.InitFromClanID(t.clanAccountID);
                  he(ye, !0);
                }));
            },
            x = (ee) => {
              t.url &&
                Ee.pU.GetClanImageDragListener().forEach((he) => {
                  let ye = Be.b.InitFromClanID(t.clanAccountID);
                  he(ye, !1);
                });
            },
            w = (ee) => {
              (0, be.pg)(
                (0, e.jsx)(se.o0, {
                  strTitle: (0, l.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: b,
                  onCancel: j,
                  closeModal: j,
                  children: (0, e.jsxs)(h.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, l.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, l.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, Ce.uX)(ee) ?? window,
              );
            },
            _ = (ee) => {
              console.log("ClanImageWrapper on delete error: " + ee),
                (0, be.pg)(
                  (0, e.jsx)(se.KG, {
                    strTitle: (0, l.we)("#Error_FailureNotice"),
                    strDescription: (0, l.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: ee }),
                  }),
                  window,
                );
            },
            b = () => {
              d(!0);
              let ee = Be.b.InitFromClanID(t.clanAccountID);
              Ee.pU
                .DeleteClanImage(ee, t)
                .then((he) => {
                  he.success != Gt.R && _((0, T.H)(he).strErrorMsg), d(!1);
                })
                .catch((he) => {
                  _((0, T.H)(he).strErrorMsg), d(!1);
                }),
                j();
            },
            j = () => {},
            B = () => {
              r && r(t);
            },
            E = t.file_name ? t.file_name : "",
            M = (0, Kn.r)(n, E, String(t.imageid), De().Hilight),
            Z = re.zU.BIsClanImageVideo(t),
            X = i && !u && !Z,
            ae = i && !u && !Z,
            Oe = i && !u && Z,
            $ = i && !u && !Z;
          return (0, e.jsx)(Et.K, {
            placeholderHeight: "100vh",
            className: De().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: De().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: De().ImageWrapper,
                  style: {
                    backgroundImage: Z ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: D,
                  onDragEnd: x,
                  onDoubleClick: m,
                  onClick: B,
                  children: (0, e.jsx)(Sn, {
                    clanImage: t,
                    className: De().VideoBackground,
                  }),
                }),
                X &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: m,
                    children: (0, l.we)("#ImagePicker_FullSize"),
                  }),
                u &&
                  (0, e.jsx)(Ye.t, {
                    size: "medium",
                    className: De().FloatingThrobber,
                  }),
                ae &&
                  (0, e.jsx)("span", {
                    className: De().Thumb,
                    onClick: I,
                    children: (0, l.we)("#ImagePicker_Thumbnail"),
                  }),
                $ &&
                  c &&
                  (0, e.jsx)(Xn, {
                    bDeleting: u,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: c,
                  }),
                Oe &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: v,
                    children: (0, l.we)("#ImagePicker_Video"),
                  }),
                !u &&
                  (0, e.jsx)("span", {
                    className: De().Delete,
                    onClick: w,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: De().ImageWrapperFilename,
                  title: E,
                  children: M,
                }),
              ],
            }),
          });
        }
        function Xn(a) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: n,
              bDeleting: s,
            } = a,
            r = (0, wt.Ec)(t.clanAccountID);
          return s || !r.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, L.A)(De().Localized, J().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, l.we)("#ImagePicker_Localized"),
              });
        }
        function Sn(a) {
          const { clanImage: t, className: n } = a;
          return re.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: n,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == xe.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function $n(a) {
          const { clanImage: t, onImageSelected: n, selected: s } = a;
          return jsxs("div", {
            className: classnames(
              styles.ClanImageGridItem,
              s && styles.Selected,
            ),
            onClick: () => n(t, !1),
            onDoubleClick: () => n(t, !0),
            title: t.file_name,
            children: [
              jsx("div", {
                className: styles.ImgCtn,
                children: ClanImageUtils.BIsClanImageVideo(t)
                  ? jsx(Sn, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function qn(a) {
          const { clanSteamID: t, closeModal: n, OnClanImageSelected: s } = a,
            r = h.useCallback(
              (u, d) => {
                s?.(u, d), n?.();
              },
              [s, n],
            ),
            [i, c] = h.useState("");
          return (0, e.jsxs)(se.o0, {
            strTitle: (0, l.we)("#ImagePicker_Images"),
            strDescription: (0, l.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: n,
            onCancel: n,
            children: [
              (0, e.jsx)(Zn, { fnSetImageSearch: c }),
              (0, e.jsx)(Qn, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: i,
                imageInsertCallBack: r,
                showImageActions: !1,
              }),
            ],
          });
        }
        function ea(a) {
          const { clanSteamID: t, OnClanImageSelected: n } = a;
          return (0, e.jsxs)("div", {
            className: et().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, l.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: et().SelectImageButton,
                    children: (0, l.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (s) => {
                  (0, be.pg)(
                    (0, e.jsx)(qn, { clanSteamID: t, OnClanImageSelected: n }),
                    (0, Ce.uX)(s) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function ta(a) {
          const {
              clanSteamID: t,
              rgSupportArtwork: n,
              localizedPrimaryImage: s,
              bAllowPreviousClanImageSelection: r,
              fnSetImageURL: i,
              rgRealmList: c,
            } = a,
            [u] = (0, G.q3)(() => [Ne.O.Get().GetCurEditLanguage()]),
            d = (0, Bt.zO)(t, n, s),
            m = a.uploaderOverride || d,
            [v, I] = h.useState(!1),
            D = h.useCallback(
              async (_, b) => {
                if (!v) {
                  I(!0);
                  try {
                    const { language: j } = (0, A.jj)(_.file_name ?? "", u),
                      B = (0, A.PD)(j, u, c);
                    await m.AddExistingClanImage(_, B);
                  } catch (j) {
                    let B = (0, T.H)(j);
                    console.error("AddExistingClanImage: " + B.strErrorMsg, B),
                      (0, be.pg)(
                        (0, e.jsx)(se.KG, {
                          strDescription: (0, l.we)(
                            "#EventError_Code",
                            B.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  I(!1);
                }
              },
              [v, m, u, c],
            ),
            x = h.useMemo(
              () =>
                r
                  ? [
                      [
                        (0, e.jsx)(
                          ea,
                          { clanSteamID: t, OnClanImageSelected: D },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [D, r, t],
            ),
            w = (_) => {
              for (const b of _) {
                const j = b.uploadResult;
                if (j?.origimagehash) {
                  const B = (0, A.PD)(j.language, u, c);
                  C.AddLocalizeImageUploaded(j.origimagehash, B);
                } else {
                  const B = Ee.pU.GetClanImageByImageHash(
                      t,
                      j?.image_hash ?? "",
                    ),
                    E = b.image.GetCurrentImageOption();
                  if (B && E) {
                    const M = (0, A.PD)(b.image.language, u, c);
                    i(E.artworkType, B, M);
                  }
                }
              }
            };
          return (0, e.jsx)(Rn, {
            ...a,
            imageUploader: m,
            rgRealmList: c,
            elAdditonalButtons: v
              ? [
                  (0, e.jsx)(
                    Ye.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, l.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : x,
            fnUploadComplete: w,
          });
        }
        var gt = o(25279),
          bn = o(84676),
          na = o(25359),
          ce = o.n(na),
          aa = o(24806);
        function En(a) {
          const {
              clanImage: t,
              closeModal: n,
              lang: s,
              fnOnArtworkLangChange: r,
              realms: i,
              fnLangHasData: c,
            } = a,
            [u, d] = (0, h.useState)(s),
            m = Be.b.InitFromClanID(t.clanAccountID),
            v = (0, G.q3)(() =>
              re.zU.GenerateURLFromHashAndExt(m, re.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(se.o0, {
            strTitle: (0, l.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, l.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, u),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, L.A)(J().FlexColumnContainer, ce().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: ce().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: ce().ArtworkPreview,
                    src: v,
                  }),
                }),
                (0, e.jsx)(aa.Ng, {
                  selectedLang: u,
                  fnLangHasData: c,
                  fnOnLanguageChanged: d,
                  realms: i,
                }),
              ],
            }),
          });
        }
        var Lt = o(56330);
        function mn(a) {
          if (!a) return a;
          const t = a.lastIndexOf(".");
          return t === -1 ? a : a.substring(0, t);
        }
        var oa = o(58483),
          sa = o(82385),
          ra = o(82206),
          ia = o(95174),
          la = o(9709),
          hn = o(64868),
          ca = o(44894);
        const da =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var ua = o(11243);
        function ga(a) {
          const {
            clanSteamID: t,
            fnGetImageHash: n,
            fnLangHasData: s,
            fnOnRemoveImage: r,
          } = a;
          (0, Ee.mr)(t.GetAccountID());
          const i = h.useMemo(() => {
              let m = new Array();
              const v = l.A0.GetLanguageListForRealms([
                q.TU.k_ESteamRealmGlobal,
                q.TU.k_ESteamRealmChina,
              ]);
              for (const I of v) {
                const D = n(I);
                if (D) {
                  const x = (0, P.LgB)(I),
                    w = (0, l.we)("#Language_" + x);
                  m.push({ lang: I, strLang: x, locLang: w, imgHash: D });
                }
              }
              return (
                (m = m.sort((I, D) =>
                  I.locLang > D.locLang ? 1 : I.locLang < D.locLang ? -1 : 0,
                )),
                m
              );
            }, [n]),
            [c, u, d] = (0, hn.uD)();
          return (0, e.jsxs)("div", {
            className: ce().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: ce().SelectImageTitle,
                children: (0, l.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: ce().LanguageListContainer,
                children: i.map((m) =>
                  (0, e.jsx)(
                    ma,
                    { langData: m, ...a },
                    "lang_select_" + t.GetAccountID() + " " + m.strLang,
                  ),
                ),
              }),
              !!r &&
                (0, e.jsxs)(U.$n, {
                  onClick: u,
                  children: [
                    (0, l.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(ua.o, {
                      tooltip: (0, l.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(se.EN, {
                active: c,
                children: (0, e.jsx)(se.o0, {
                  strTitle: (0, l.we)("#Dialog_AreYouSure"),
                  strDescription: (0, l.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: d,
                  onOK: () => {
                    for (let m = 0; m < P.bP9; m++) s && r && s(m) && r(m);
                  },
                }),
              }),
            ],
          });
        }
        function ma(a) {
          const {
              clanSteamID: t,
              langData: n,
              langOverride: s,
              fnOnLanguagePreviewChange: r,
              fnOnArtworkLangChange: i,
              fnOnRemoveImage: c,
            } = a,
            [u, d] = (0, G.q3)(() => {
              const m = Ee.pU.GetClanImageByImageHash(t, n.imgHash);
              let v = "";
              m &&
                (v = re.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  re.zU.GetHashAndExt(m),
                  Te.wI.full,
                  n.lang,
                ));
              let I = ce().LanguageSelectorSelected;
              return (
                s != n.lang &&
                  (I = n.imgHash
                    ? ce().LanguageSelector
                    : ce().LanguageSelectorNoData),
                [v, I]
              );
            });
          return (0, e.jsxs)("div", {
            id: n.strLang,
            className: ce().LanguageContainer,
            onClick: (m) => {
              let v = (0, P.sfN)(m.currentTarget.id);
              r(v);
            },
            children: [
              (0, e.jsx)("div", { className: d, children: n.locLang }),
              (0, e.jsxs)("span", {
                className: ce().LanguageOptions,
                children: [
                  !!u &&
                    (0, e.jsx)("a", {
                      href: u,
                      target: "_blank",
                      children: (0, e.jsx)(Ie.he, {
                        toolTipContent: (0, l.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: Ke.YNO(),
                      }),
                    }),
                  !!i && (0, e.jsx)(ha, { ...a }),
                  !!c && (0, e.jsx)(va, { fnOnRemoveImage: c, langData: n }),
                ],
              }),
            ],
          });
        }
        function ha(a) {
          const {
              clanSteamID: t,
              langData: n,
              fnOnArtworkLangChange: s,
              fnGetImageHash: r,
              fnLangHasData: i,
              realms: c,
            } = a,
            [u, d, m] = (0, hn.uD)(),
            v = (0, G.q3)(() => {
              const I = r(n.lang);
              return (
                (0, Ze.wT)(
                  !I || !I.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + I,
                ),
                Ee.pU.GetClanImageByImageHash(t, I)
              );
            });
          if (!v) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ie.he, {
                toolTipContent: (0, l.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: da,
                  onClick: () => d(),
                }),
              }),
              (0, e.jsx)(O.tH, {
                children: (0, e.jsx)(se.EN, {
                  active: u,
                  children: (0, e.jsx)(En, {
                    clanImage: v,
                    lang: n.lang,
                    fnOnArtworkLangChange: s,
                    fnLangHasData: i,
                    realms: c,
                    closeModal: m,
                  }),
                }),
              }),
            ],
          });
        }
        function va(a) {
          const { fnOnRemoveImage: t, langData: n } = a,
            [s, r, i] = (0, hn.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ie.he, {
                toolTipContent: (0, l.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: ca.A,
                  onClick: r,
                }),
              }),
              (0, e.jsx)(O.tH, {
                children: (0, e.jsx)(se.EN, {
                  active: s,
                  children: (0, e.jsx)(se.o0, {
                    strTitle: (0, l.we)("#selectimage_remove_image"),
                    strDescription: (0, l.we)(
                      "#selectimage_remove_details",
                      (0, l.we)("#Language_" + (0, P.LgB)(n.lang)),
                    ),
                    onOK: () => {
                      t(n.lang);
                    },
                    closeModal: i,
                  }),
                }),
              }),
            ],
          });
        }
        var vn = o(13465),
          pa = o(21659),
          fa = o(15496),
          Se = o.n(fa),
          Ia = o(88812);
        function xa(a) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: c,
            } = a,
            u = (0, pa.c5)(),
            d = h.useCallback(
              (j) => {
                j.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            m = c || (0, P.sfN)(N.TS.LANGUAGE),
            [v, I, D] = (0, G.q3)(() => [
              t.GetSummaryWithFallback(m),
              t.GetNameWithFallback(m),
              t.BShowLibrarySpotlightText(),
            ]);
          let x = "spotlight",
            w = Te.wI.spotlight_main;
          (t.appid == 2434320 || N.TS.EUNIVERSE == P.Rv) &&
            ((x = u
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (w = Te.wI.full));
          let _ =
            (0, Ia.WC)(n !== void 0 ? void 0 : t, x, m, w) ??
            (n !== void 0 ? [n] : []);
          i && _ && (_ = i(_));
          const b = v.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(h.Fragment, {
            children: (0, e.jsx)("div", {
              className: Se().MajorEvent_Ctn,
              ref: a.containerRef,
              children: (0, e.jsxs)(k.Z, {
                className: (0, L.A)(
                  Se().AppDetailsSpotlightContainer,
                  Se().MajorEventContainer,
                ),
                onActivate: d,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: Se().MajorEventBackground,
                    children: (0, e.jsx)(vn.c, {
                      className: Se().MajorEventImageBackgroundBlur,
                      rgSources: _,
                      onIncrementalError: (j, B, E) => r && r(B),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: Se().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(vn.c, {
                        className: Se().MajorEventImage,
                        rgSources: _,
                        onIncrementalError: (j, B, E) => r && r(B),
                      }),
                      (0, e.jsx)("div", {
                        className: Se().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: Se().MajoreEventImageContentContainer,
                        children:
                          D &&
                          (0, e.jsxs)("div", {
                            className: Se().MajorEventContent,
                            children: [
                              (0, e.jsx)(vn.c, {
                                className: Se().MajorEventSpotlightBackground,
                                rgSources: _,
                                onIncrementalError: (j, B, E) => r && r(B),
                              }),
                              (0, e.jsxs)("div", {
                                className: Se().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Se().MajorEventTitle,
                                    children: I,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Se().MajorEventSummary,
                                    children: b,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: Se().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Ca = o(79949),
          pe = o.n(Ca);
        function ja(a) {
          const {
              langOverride: t,
              artworkType: n,
              fnOnLanguagePreviewChange: s,
              clanSteamID: r,
              eventModel: i,
              partnerEventStore: c,
              fnOnRemoveImage: u,
              fnOnArtworkLangChange: d,
              realms: m,
              fnLangHasData: v,
              fnGetImageHashAndExt: I,
            } = a,
            D = I(n, t),
            x = D
              ? re.zU.GenerateURLFromHashAndExtAndLang(r, D, Te.wI.full, t)
              : "",
            [w] = (0, G.q3)(() => [ya(n, I)]);
          return w == 0
            ? (0, e.jsxs)("div", {
                className: ce().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(wn, {
                      imgURL:
                        N.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(yn, {
                      imgURL:
                        N.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: i,
                      partnerEventStore: c,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(n) &&
                    (0, e.jsx)(Da, {
                      langOverride: t,
                      artworkType: n,
                      eventModel: i,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, l.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: ce().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(wn, {
                      imgURL: x,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(yn, {
                      imgURL: x,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: c,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Pt, { imgURL: x, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Pt, { imgURL: x, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Pt, { imgURL: x, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(ba, {
                      imgURL: x,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(Ea, { imgURL: x }),
                  n === "sale_overlay" && (0, e.jsx)(wa, { imgURL: x }),
                  Te.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: la.PreviewImg,
                      src: C.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(mt, { imgURL: x }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(mt, { imgURL: x }),
                  n === "sale_logo" && (0, e.jsx)(mt, { imgURL: x }),
                  n === "bestofyear_banner" && (0, e.jsx)(mt, { imgURL: x }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(mt, { imgURL: x }),
                  (0, e.jsx)(ga, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: u,
                    fnOnArtworkLangChange: d,
                    realms: m,
                    fnLangHasData: v,
                    fnGetImageHash: (_) => mn(I(n, _) ?? ""),
                  }),
                ],
              });
        }
        function go(a) {
          const { artworkType: t } = a,
            n = ArtworkTypeMap[t];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + t),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [n.width, " X ", n.height],
              }),
            ],
          });
        }
        function Da(a) {
          const { artworkType: t, langOverride: n, eventModel: s } = a,
            r = gt.Fj[t],
            i = h.useMemo(
              () =>
                Sa(
                  (0, l.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Pt, { lang: n, imgURL: i, event: s });
        }
        function Sa(a, t) {
          const r = document.createElement("canvas");
          (r.width = 780), (r.height = 200);
          const i = r.getContext("2d"),
            c = 20;
          for (let m = 0; m < 200; m += c)
            for (let v = 0; v < 780; v += c)
              (i.fillStyle =
                (v / c + m / c) % 2 === 0 ? "#a405e3ff" : "#000000"),
                i.fillRect(v, m, c, c);
          const u = i.createLinearGradient(0, 0, 780, 0);
          u.addColorStop(0, "rgba(32,32,32,0.8)"),
            u.addColorStop(1, "rgba(60,60,60,0.8)"),
            (i.fillStyle = u),
            i.fillRect(0, 0, 780, 200);
          const d = i.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            d.addColorStop(0, "rgba(0,0,0,0)"),
            d.addColorStop(1, "rgba(0,0,0,0.6)"),
            (i.fillStyle = d),
            i.fillRect(0, 0, 780, 200),
            (i.fillStyle = "#fff"),
            (i.font = "32px Arial"),
            (i.textAlign = "center"),
            (i.textBaseline = "middle"),
            i.fillText(a, 780 / 2, 200 / 2 - 20),
            t &&
              ((i.font = "18px Arial"), i.fillText(t, 780 / 2, 200 / 2 + 25)),
            r.toDataURL("image/png")
          );
        }
        function wn(a) {
          const { imgURL: t, eventModel: n, langOverride: s } = a,
            r = (0, Ne.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(ia.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function yn(a) {
          const { lang: t, eventModel: n, partnerEventStore: s } = a,
            r = (0, oa.LJ)(),
            [i, c, u, d, m] = (0, G.q3)(() => [
              n.GetNameWithFallback(t),
              n.GetDescriptionWithFallback(t),
              n.GetSubTitleWithLanguageFallback(t),
              n.type,
              n.AnnouncementGID,
            ]);
          let v = c
            ? (0, e.jsx)(ra.fh, {
                text: c || "",
                partnerEventStore: s,
                showErrorInfo: !1,
                event: n,
                languageOverride: Ne.O.Get().GetCurEditLanguage(),
              })
            : (0, l.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: pe().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: pe().ExampleSectionTitle,
                children: (0, l.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, L.A)(
                  pe().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: pe().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: pe().MainImageCtn,
                      children: (0, e.jsx)("img", { src: a.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: pe().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: pe().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: pe().TextTitle,
                            children:
                              i ||
                              (0, l.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: pe().TextSubTitle,
                            children:
                              u ||
                              (0, l.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: pe().TextBody,
                            children: v,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              d != P.Fwr &&
                (0, e.jsxs)(h.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: pe().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: pe().ExampleSectionTitle,
                      children: (0, l.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, L.A)(
                        pe().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: pe().DetailExample2,
                        children: (0, e.jsx)(
                          sa.He,
                          {
                            event: n,
                            emoticonStore: r,
                            partnerEventStore: s,
                            headerClassnames: "editor",
                            langOverride: t,
                            bDisableBroadcastPlayer: !0,
                          },
                          m,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const Pt = (a) => {
            const [t] = (0, bn.t7)(a.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: pe().SpotlightExample,
              children: (0, e.jsx)(xa, {
                event: a.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: a.imgURL,
                langOverride: a.lang,
              }),
            });
          },
          ba = (a) => {
            const t = [
              (0, e.jsx)("img", { src: a.imgURL }, "img"),
              (0, e.jsx)("div", { className: ce().BroadcastPreview }, "video"),
            ];
            return (
              a.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: pe().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          Ea = (a) =>
            (0, e.jsx)("div", {
              className: pe().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: a.imgURL,
              }),
            }),
          wa = (a) =>
            (0, e.jsx)("div", {
              className: pe().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: a.imgURL,
              }),
            }),
          mt = (a) =>
            (0, e.jsx)("div", {
              className: pe().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: a.imgURL,
              }),
            });
        function ya(a, t) {
          let n = 0;
          for (let s = P.Bhc; s < P.bP9; ++s)
            (t(a, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var _a = Object.defineProperty,
          Aa = Object.getOwnPropertyDescriptor,
          _n = (a, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? Aa(t, n) : t, i = a.length - 1, c;
              i >= 0;
              i--
            )
              (c = a[i]) && (r = (s ? c(t, n, r) : c(r)) || r);
            return s && r && _a(t, n, r), r;
          };
        const Ba =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Ga = ((a) => (
          (a[(a.k_None = 0)] = "k_None"),
          (a[(a.k_Suggested = 1)] = "k_Suggested"),
          (a[(a.k_Required = 2)] = "k_Required"),
          (a[(a.k_Requested = 3)] = "k_Requested"),
          a
        ))(Ga || {});
        function Ta(a) {
          const {
              artworkType: t,
              headerHint: n,
              appid: s,
              fnToggleMinimize: r,
              realms: i,
              eventModel: c,
              fnLangHasData: u,
              fnGetImageHashAndExt: d,
              fnSetImageURL: m,
              partnerEventStore: v,
            } = a,
            [I] = (0, bn.t7)(s, { include_assets: !0 }),
            [D, x] = (0, G.q3)(() => [
              c?.GetEventType(),
              c?.BHasTag("vo_marketing_message"),
            ]),
            w = D == P.ajI;
          let _ = null;
          n === 2
            ? (_ = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, l.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (_ = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, l.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (_ = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, l.we)("#EventEditor_Requested"),
                }));
          let b = null;
          t === "capsule"
            ? w
              ? (b = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (b = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!x &&
                      (0, e.jsxs)("div", {
                        className: ce().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, l.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${N.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, l.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (b = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, l.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, l.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (b = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (b = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, l.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, l.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (b = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, l.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (b = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: J().EventElementRequired,
                              children: (0, l.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, l.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, l.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, l.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, l.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, l.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, l.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, l.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : t === "hero"
                        ? I &&
                          (b = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, l.we)("#selectimage_tip_hero_1"),
                              }),
                              !I.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Lt.ErrorStylesBackground,
                                  children: (0, l.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : t === "localized_image_group" ||
                            t === "link_capsule" ||
                            t === "sale_section_title" ||
                            t === "schedule_track_art" ||
                            t === "localized_background_art"
                          ? (b = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, l.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, l.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Ba,
                                      target: N.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, l.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (b = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: J().EventElementOptional,
                                    children: (0, l.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, l.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, l.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (b = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: J().EventElementOptional,
                                      children: (0, l.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, l.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, l.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, l.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (b = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, l.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, l.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, l.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, l.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (b = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: J().EventElementOptional,
                                          children: (0, l.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, l.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, l.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (b = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: J().EventElementRequired,
                                          children: (0, l.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, l.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, l.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const j = gt.Fj[a.artworkType].width,
            B = gt.Fj[a.artworkType].height;
          return (0, e.jsxs)("div", {
            id: a.id,
            className: ce().ArtworkSelectorContainer,
            children: [
              !!a.title &&
                (0, e.jsxs)("div", {
                  className: ce().Title,
                  onDoubleClick: r,
                  children: [
                    a.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    _,
                    r &&
                      (0, e.jsx)(U.$n, {
                        onClick: r,
                        children: (0, e.jsx)(Ie.he, {
                          toolTipContent: (0, l.we)(
                            a.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: a.bIsMinimized
                            ? (0, e.jsx)(Ke.hz4, {})
                            : (0, e.jsx)(Ke.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !a.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, L.A)(ce().SelectImageBlock, ce().Tips),
                  children: [
                    b,
                    !!(j && B) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, l.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, l.PP)(
                            "#selectimage_tip1",
                            (0, gt.qj)(j),
                            (0, gt.qj)(B),
                          ),
                        ],
                      }),
                    !!a.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Lt.WarningStylesWithIcon,
                          children: a.strWarning,
                        }),
                      }),
                    a.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    a.elAdditionalControls,
                    !!a.fnRemoveAllArtwork &&
                      (0, e.jsx)(U.$n, {
                        onClick: (E) => {
                          (0, be.pg)(
                            (0, e.jsx)(La, {
                              fnRemoveAllArtwork: a.fnRemoveAllArtwork,
                            }),
                            (0, Ce.uX)(E) ?? window,
                          );
                        },
                        children: (0, l.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !a.bIsMinimized &&
                (0, e.jsx)(Pa, {
                  clanSteamID: a.clanSteamID,
                  title: a.title ?? "",
                  eventModel: c,
                  artworkType: a.artworkType,
                  realms: i,
                  appid: s,
                  fnGetImageHashAndExt: d,
                  fnSetImageURL: m,
                  fnLangHasData: u,
                  partnerEventStore: v,
                }),
            ],
          });
        }
        function La(a) {
          const { fnRemoveAllArtwork: t, closeModal: n } = a;
          return (0, e.jsx)(se.o0, {
            strTitle: (0, l.we)("#Sale_RemoveAll"),
            strDescription: (0, l.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), n?.();
            },
            onCancel: n,
          });
        }
        function Pa(a) {
          const {
              artworkType: t,
              realms: n,
              clanSteamID: s,
              fnLangHasData: r,
              fnGetImageHashAndExt: i,
              fnSetImageURL: c,
              eventModel: u,
              appid: d,
              partnerEventStore: m,
            } = a,
            v = t === "localized_image_group",
            [I, D] = h.useState((0, Ne.E)()),
            [x, w] = h.useState(new Array()),
            _ = h.useCallback(
              (j, B, E) => {
                let M = [];
                x.find((X) => X.clanImage.imageid == j.imageid)
                  ? (M = x.map((X) =>
                      X.clanImage.imageid == j.imageid
                        ? { clanImage: j, lang: B }
                        : X,
                    ))
                  : E && (M = x.concat({ clanImage: j, lang: B })),
                  w(M);
              },
              [x],
            ),
            b = h.useCallback(
              (j, B, E) => {
                (0, qe.h5)(() => {
                  mn(i(t, B) ?? "") == j.image_hash && c(t, null, B),
                    c(t, j, E),
                    _(j, E, !1);
                });
              },
              [i, t, c, _],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(U.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${N.TS.PARTNER_BASE_URL}admin/game/editbyappid/${d}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, l.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(kt, {
                    list: x,
                    fnOnArtworkLanguageChange: b,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, L.A)(
                        ce().SelectImageBlock,
                        ce().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(ja, {
                        eventModel: u,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (j) => {
                          j != I && D(j);
                        },
                        langOverride: I,
                        fnOnArtworkLangChange: v ? null : b,
                        artworkType: t,
                        fnOnRemoveImage: v ? null : (j) => c(t, null, j),
                        realms: n,
                        fnLangHasData: r,
                        fnGetImageHashAndExt: i,
                        partnerEventStore: m,
                      }),
                    }),
                  }),
                ],
              });
        }
        let kt = class extends h.Component {
          ShowLangChangeDialog(a, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, be.pg)(
              (0, e.jsx)(En, {
                clanImage: a,
                lang: t,
                fnOnArtworkLangChange: n,
                fnLangHasData: r,
                realms: s,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let a = new Array();
            const { list: t } = this.props;
            return (
              t.forEach((n) => {
                const { clanImage: s, lang: r } = n;
                let i = (0, l.we)("#Language_" + (0, P.LgB)(r));
                a.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: J().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, l.we)(
                            "#ImageUpload_Success_Mapping",
                            s.file_name ?? "",
                            i,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(s, r),
                          children: (0, l.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + n.clanImage.imageid + "_" + r,
                  ),
                );
              }),
              a
            );
          }
          render() {
            const { list: a } = this.props;
            if (!a || a.length == 0) return (0, e.jsx)("div", {});
            let t = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: ce().UploadSuccess,
              children: t,
            });
          }
        };
        _n([_e.oI], kt.prototype, "ShowLangChangeDialog", 1),
          (kt = _n([z.PA], kt));
        var ka = o(6658);
        function Ma(a) {
          const {
              clanSteamID: t,
              appid: n,
              eventModel: s,
              realms: r,
              loc_images: i,
              artworkType: c,
              fnLangHasData: u,
              closeModal: d,
              fnSetImageURL: m,
              partnerEventStore: v,
            } = a,
            [I, D] = (0, h.useState)(!1),
            x = (0, Bt.zO)(t, c),
            w = t.GetAccountID(),
            [_] = (0, G.q3)(() => [
              x.GetFilesToUpload().length - x.GetCompletedFiles(),
            ]);
          (0, h.useEffect)(() => {
            D(!1),
              C.ClearImageGroup(),
              i?.forEach((E, M) => {
                const Z = Be.b.InitFromClanID(w);
                if (C.GetAllLocalizedGroupImages().length == 0) {
                  const X = E && re.zU.GetHashFromHashAndExt(E),
                    ae = X && Ee.pU.GetClanImageByImageHash(Z, X);
                  ae && C.SetPrimaryImageForImageGroup(ae, c);
                }
                C.SetLocalizedImageGroupAtLang(M, Z, E ?? null);
              }),
              D(!0);
          }, [i, w, c]);
          const b = (0, h.useCallback)(
              (E, M, Z = P.Bhc) => {
                const X = Be.b.InitFromClanID(w),
                  ae = re.zU.GetHashAndExt(M ?? null);
                if (C.GetAllLocalizedGroupImages().length == 0) {
                  const Oe = ae && re.zU.GetHashFromHashAndExt(ae),
                    $ = Oe && Ee.pU.GetClanImageByImageHash(X, Oe);
                  $ && C.SetPrimaryImageForImageGroup($, E);
                }
                C.SetLocalizedImageGroupAtLang(Z, X, ae);
              },
              [w],
            ),
            j = (0, h.useCallback)((E, M) => {
              const X = C.GetLocalizedImageGroupForEdit()?.localized_images[M];
              return X && X.split("/").pop();
            }, []),
            B = () => {
              const E = C.GetLocalizedImageGroupForEdit();
              for (let M = P.Bhc; M < P.bP9; ++M) {
                const Z = E?.localized_images[M];
                if (Z) {
                  const X = Z.split("/").pop() || "";
                  m(
                    c,
                    {
                      image_hash: mn(X),
                      clanAccountID: w,
                      file_type: (0, ka.yh)(X) ?? xe.bg.w3,
                      imageid: 0,
                    },
                    M,
                  );
                } else m(c, null, M);
              }
              C.ClearImageGroup(), a.onOK ? a.onOK() : d?.();
            };
          return (0, e.jsxs)(se.o0, {
            onCancel: d,
            closeModal: d,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, L.A)(Lt.NotTooWideModal, Lt.ImageManageDialog),
            strTitle: a.strLocalizedTitle || (0, l.we)("#ImagePickerLoc_Title"),
            strDescription: a.strLocalizedDescription,
            bOKDisabled: _ > 0,
            onOK: B,
            strOKButtonText:
              _ > 0 ? (0, l.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              I
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(ta, {
                        clanSteamID: t,
                        rgSupportArtwork: [c],
                        fnSetImageURL: b,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: x,
                      }),
                      (0, e.jsx)(Ta, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: c,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => C.ClearImageGroup(),
                        fnSetImageURL: b,
                        fnGetImageHashAndExt: j,
                        fnLangHasData: u,
                        partnerEventStore: v,
                      }),
                    ],
                  })
                : (0, e.jsx)(Ye.t, {
                    size: "medium",
                    position: "center",
                    string: (0, l.we)("#Loading"),
                  }),
              a.children,
            ],
          });
        }
        function Na(a) {
          const { setting: t, fnUpdateSetting: n, label: s } = a,
            r = h.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(U.JU, {
                children: s || (0, l.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(U.m, {
                strDropDownClassName: ne.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "no-repeat",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var Oa = o(94381);
        function Ua(a) {
          const {
              closeModal: t,
              imgGroup: n,
              fnUpdateImageGroup: s,
              eventModel: r,
            } = a,
            { openColorPicker: i } = an(),
            [c, u] = (0, h.useState)(() => n),
            [d, m, v, I, D, x, w, _] = (0, G.q3)(() => [
              c.repeat_setting,
              c.scaling_setting,
              c.background_color1,
              c.background_color2,
              c.gradient_setting,
              c.position_setting,
              r.GetIncludedRealmList(),
              c.randomize_section_order,
            ]),
            [b] = (0, h.useState)(() => Ra(c.localized_background_art ?? {}));
          return (0, e.jsxs)(Ma, {
            strLocalizedTitle: (0, l.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, l.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: Jt.O3,
            artworkType: "localized_background_art",
            realms: w,
            loc_images: b,
            fnLangHasData: (j) => !!b[j],
            fnGetImageHash: (j, B) => b[B],
            fnSetImageURL: async (j, B, E) => {
              u((M) => {
                const Z = { ...M.localized_background_art },
                  X = re.zU.GetHashAndExt(B);
                return (
                  X ? (Z[(0, P.LgB)(E)] = X) : delete Z[(0, P.LgB)(E)],
                  { ...M, localized_background_art: Z }
                );
              });
            },
            onOK: () => {
              u((j) => (s(j), t && setTimeout(t, 1), { ...j }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Ae().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ae().ImageOptions,
                    children: [
                      (0, e.jsx)(Na, {
                        setting: d,
                        fnUpdateSetting: (j) => {
                          u(
                            j !== "no-repeat"
                              ? {
                                  ...c,
                                  repeat_setting: j,
                                  scaling_setting: "auto",
                                }
                              : { ...c, repeat_setting: j },
                          );
                        },
                        label: (0, l.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(Fa, {
                        scaling_setting: m ?? "contain",
                        disable: d !== "no-repeat",
                        fnUpdateSetting: (j) => u({ ...c, scaling_setting: j }),
                      }),
                      m != "cover" &&
                        (0, e.jsx)(Ha, {
                          position_settings: x,
                          fnUpdateSetting: (j) =>
                            u({ ...c, position_setting: j }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Ae().ColorOptions,
                    children: [
                      (0, e.jsx)(U.JU, {
                        children: (0, l.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: At().ColorCtn,
                        children: [
                          (0, e.jsx)(U.$n, {
                            style: { backgroundColor: v },
                            onClick: (j) =>
                              i(j, {
                                color: v ?? "",
                                onChange: (B) =>
                                  u({ ...c, background_color1: B }),
                              }),
                            children: (0, l.we)(
                              v === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(U.$n, {
                            onClick: () =>
                              u({ ...c, background_color1: void 0 }),
                            children: (0, l.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Ae().SwapColorsCtn,
                        children: (0, e.jsx)(U.$n, {
                          onClick: () =>
                            u({
                              ...c,
                              background_color1: I,
                              background_color2: v,
                            }),
                          children: (0, l.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      D !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: At().ColorCtn,
                          children: [
                            (0, e.jsx)(U.$n, {
                              style: { backgroundColor: I },
                              onClick: (j) =>
                                i(j, {
                                  color: I ?? "",
                                  onChange: (B) =>
                                    u({ ...c, background_color2: B }),
                                }),
                              children: (0, l.we)(
                                I === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(U.$n, {
                              onClick: () =>
                                u({ ...c, background_color2: void 0 }),
                              children: (0, l.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(za, {
                        gradient: D ?? "top-to-bottom",
                        fnUpdateSetting: (j) =>
                          u({ ...c, gradient_setting: j }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(Zt, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(Oa.S, {
                  checked: !!_,
                  onChange: (j) => {
                    c.randomize_section_order = j;
                  },
                  children: (0, l.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function Ra(a) {
          const t = rt.$Y([], P.bP9, null);
          for (const n in a) {
            const s = (0, P.sfN)(n);
            s != P.xPp && (t[s] = a[n]);
          }
          return t;
        }
        function Fa(a) {
          const {
              scaling_setting: t,
              fnUpdateSetting: n,
              label: s,
              disable: r,
            } = a,
            i = h.useMemo(() => {
              const c = [];
              return (
                c.push({
                  label: (0, l.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                c.push({
                  label: (0, l.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                c.push({
                  label: (0, l.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                c
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(U.JU, {
                children: s || (0, l.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(U.m, {
                strDropDownClassName: ne.DropDownScroll,
                disabled: r,
                rgOptions: i,
                selectedOption: t || "cover",
                onChange: (c) => n(c.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function za(a) {
          const { gradient: t, fnUpdateSetting: n, label: s } = a,
            r = h.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(U.JU, {
                children: s || (0, l.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(U.m, {
                strDropDownClassName: ne.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "top-to-bottom",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Ha(a) {
          const { position_settings: t, fnUpdateSetting: n, label: s } = a,
            r = h.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(U.JU, {
                children: s || (0, l.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(U.m, {
                strDropDownClassName: ne.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "unset",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Wa(a) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: n,
              fnSetBackgroundImgGroupEditMode: s,
              bShowAsValveOnly: r,
            } = a,
            [i, c] = (0, h.useState)(t.BIsBackgroundImageEnabled()),
            [u, d, m] = (0, _e.uD)(),
            v = (0, G.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, L.A)(Ae().Ctn, r && ne.ValveOnlyBackground),
            children: (0, e.jsxs)(O.tH, {
              children: [
                (0, e.jsx)(U.Yh, {
                  label: (0, l.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (I) => {
                    c(I), t.SetBackgroundImageEnabled(I);
                  },
                }),
                i
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(U.Yh, {
                          label: (0, l.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, l.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: n,
                          onChange: s,
                        }),
                        (0, e.jsx)(U.Yh, {
                          label: (0, l.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, l.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: v,
                          onChange: (I) =>
                            t.SetSalePageLastCoverSectionUntilEnd(I),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(U.$n, {
                          onClick: d,
                          children: (0, l.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(se.EN, {
                          active: u,
                          children: (0, e.jsx)(se.o0, {
                            strTitle: (0, l.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, l.we)(
                              "#BackgroundGroups_ClearAllSettings_Desc",
                            ),
                            bDestructiveWarning: !0,
                            onOK: () => {
                              t.ClearAllBackgroundImageGroupSettings(), c(!1);
                            },
                            closeModal: m,
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("p", {
                      children: (0, l.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${xt.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, l.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const pn = h.forwardRef(function (t, n) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: r,
              groupIndex: i,
              imgGroup: c,
              eventModel: u,
              nTabIndex: d,
            } = t,
            m = (0, Ne.E)(),
            [v, I, D, x] = (0, G.q3)(() => [
              c && s.mapGroupToSections.get(c.background_id),
              (c &&
                s.mapGroupToSections.get(c.background_id)?.sectionUniqueIDs) ??
                [],
              d != null
                ? r?.GetTabLastCoverSectionUntilEnd(d)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              d != null ? r?.GetTabGroupCount(d) : r?.GetSalePageGroupCount(),
            ]),
            w = D && i + 1 === x,
            [_, b, j] = (0, _e.uD)(),
            [B, E, M] = (0, _e.uD)();
          let Z;
          v?.nUniqueIDNextSaleSection &&
            (Z = (0, ct.h_)(
              Q.HY,
              r.GetSaleSectionByID(v?.nUniqueIDNextSaleSection),
              m,
              u,
              v.nSaleSectionLastIndex + 1,
            ));
          let X;
          if (v && I?.length > 1) {
            const ae = I[I.length - 1];
            X = (0, ct.h_)(
              Q.HY,
              r?.GetSaleSectionByID(ae),
              m,
              u,
              v.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(Qt.qx, {
            bStartMinimized: !1,
            title: (0, l.we)(
              d != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              i + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: n,
              children: [
                (0, e.jsx)(U.$n, {
                  onClick: b,
                  children: (0, l.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(se.EN, {
                  active: _,
                  children: (0, e.jsx)(Ua, {
                    imgGroup: c,
                    closeModal: j,
                    eventModel: u,
                    fnUpdateImageGroup: (ae) =>
                      d != null
                        ? r.SetTabBackgroundGroup(d, i, ae)
                        : r.SetSalePageBackgroundGroup(i, ae),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: Ae().EditorTitle,
                  children: (0, l.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    I.map((ae) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, ct.h_)(
                            Q.W3,
                            r.GetSaleSectionByID(ae),
                            m,
                            u,
                            r.GetSaleSectionIndexByID(ae, !0),
                          ),
                        },
                        "li_" + ae,
                      ),
                    ),
                    !!w &&
                      (0, e.jsx)("li", {
                        children: (0, l.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!X &&
                  (0, e.jsx)(U.$n, {
                    onClick: () =>
                      d != null
                        ? r.SetTabBackgroundGroup(d, i, {
                            ...c,
                            num_sections: c.num_sections - 1,
                          })
                        : r.SetSalePageBackgroundGroup(i, {
                            ...c,
                            num_sections: c.num_sections - 1,
                          }),
                    children: (0, l.we)("#BackgroundGroups_Reduce", X),
                  }),
                !!Z &&
                  (0, e.jsx)(U.$n, {
                    onClick: () =>
                      d != null
                        ? r.SetTabBackgroundGroup(d, i, {
                            ...c,
                            num_sections: c.num_sections + 1,
                          })
                        : r.SetSalePageBackgroundGroup(i, {
                            ...c,
                            num_sections: c.num_sections + 1,
                          }),
                    children: (0, l.we)("#BackgroundGroups_Extend", Z),
                  }),
                i > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(U.$n, {
                        onClick: E,
                        children: (0, l.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(se.EN, {
                        active: B,
                        children: (0, e.jsx)(se.o0, {
                          strTitle: (0, l.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, l.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            d != null
                              ? r.RemoveTabBackgroundGroup(d, i)
                              : r.RemoveSalePageBackgroundGroup(i),
                          closeModal: M,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function Va(a) {
          const { backgroundImageEditModel: t, nTabID: n } = a;
          return (0, e.jsx)("div", {
            className: Ae().CtnEditor,
            children: (0, e.jsx)(U.$n, {
              onClick: (s) =>
                n !== void 0 && n >= 0
                  ? t?.AddTabBackgroundGroup(n)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, l.we)(
                n !== void 0 && n >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function Ka(a) {
          const {
              nTabID: t,
              nSectionUniqueID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = a,
            i = s.mapFirstSectionToGroup.get(n);
          return n == s.nFirstSaleSectionIDWithoutGroup ||
            n == s.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(Va, { backgroundImageEditModel: r, nTabID: t })
            : i
              ? (0, e.jsx)(Ya, { ...a, groupID: i })
              : null;
        }
        function Ya(a) {
          const {
              groupID: t,
              nTabID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = a,
            i =
              n && n >= 0
                ? s.selectedTabBackgroundDef.groups
                : r.GetSalePageGroupDefinition().groups,
            c = i.findIndex((_) => _.background_id === t),
            u = i[c],
            [d, m] = (0, h.useState)(!1);
          (0, h.useEffect)(() => {
            if (!d) return;
            const _ = (0, be.pg)(
              (0, e.jsx)(se.o0, {
                bAlertDialog: !0,
                closeModal: () => m(!1),
                children: (0, e.jsx)(pn, {
                  backgroundImageEditModel: r,
                  groupIndex: c,
                  imgGroup: u,
                  imgGroupDerivedMapping: s,
                  eventModel: r.GetEventModel(),
                  nTabIndex: n,
                }),
              }),
              window,
            );
            return () => {
              _.then((b) => b.Close());
            };
          }, [d, r, u, c, n, s]);
          const v = (0, G.q3)(() => st.get(t)),
            [I, D] = (0, h.useState)(null),
            x = h.useCallback((_, b) => {
              D(b);
            }, []),
            w = (0, _e.w6)(x);
          return (0, e.jsxs)("div", {
            className: Ae().CtnEditor,
            ref: w,
            children: [
              !!(v && I && I > v) &&
                (0, e.jsx)(U.$n, {
                  onClick: (_) => m(!0),
                  children: (0, l.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(pn, {
                backgroundImageEditModel: r,
                groupIndex: c,
                imgGroup: u,
                imgGroupDerivedMapping: s,
                eventModel: r.GetEventModel(),
                nTabIndex: n,
              }),
            ],
          });
        }
        var Za = o(81557),
          An = o.n(Za);
        function Qa(a) {
          const { imgGroupDerivedMapping: t } = a,
            [n, s] = (0, h.useState)(!1);
          (0, h.useEffect)(() => {
            if (!n) return;
            const v = (0, be.pg)(
              (0, e.jsx)(se.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Bn, { ...a }),
              }),
              window,
            );
            return () => {
              v.then((I) => I.Close());
            };
          }, [n, a]);
          const r = (0, G.q3)(() => {
              const v = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (v) {
                const I = t.mapGroupToSections.get(v);
                if (I) return st.get(I?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [i, c] = (0, h.useState)(null),
            u = h.useCallback((v, I) => {
              c(I);
            }, []),
            d = (0, _e.w6)(u),
            m = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, L.A)(Ae().CtnEditor, An().TabCtn),
            ref: d,
            children: [
              m &&
                (0, e.jsx)(U.$n, {
                  onClick: (v) => s(!0),
                  children: (0, l.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Bn, { ...a }),
            ],
          });
        }
        function Bn(a) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: n,
              nTabID: s,
            } = a,
            [r, i] = (0, h.useState)(null),
            [c, u, d, m] = (0, G.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(O.tH, {
            children: [
              (0, e.jsx)(U.Yh, {
                label: (0, l.we)("#BackgroundGroups_TaSetting"),
                checked: u,
                onChange: (v) => {
                  if (
                    ((0, Ze.wT)(t, "edit model mising"),
                    (0, Ze.wT)(s !== void 0, "tab setting missing"),
                    s !== void 0 && t)
                  ) {
                    const I = t.SetTabEnabled(s, v);
                    (0, Ze.wT)(
                      !!I,
                      `Failed to create model TabID ${s}backgroundModel`,
                    ),
                      i(I);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${s}.`,
                    );
                },
              }),
              !!u &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(U.Yh, {
                      label: (0, l.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, l.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: c,
                      onChange: (v) => t.SetTabLastCoverSectionUntilEnd(s, v),
                    }),
                    (0, e.jsx)(pn, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (d || r)?.groups[0],
                      imgGroupDerivedMapping: n,
                      eventModel: m,
                      nTabIndex: s,
                      classNameHeader: An().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var ht = o(85692),
          Ja = o(25533);
        function Xa(a) {
          const {
              promotionName: t,
              eventModel: n,
              bIsPreview: s,
              language: r,
              backgroundImageEditModel: i,
              addtionalAdminButtons: c,
              bDynamicallyCreatedSale: u,
            } = a,
            [d, m] = h.useState(n?.GetDayIndexFromEventStart()),
            [v, I] = h.useState(null),
            D = (0, G.q3)(() => n.jsondata.sale_header_disable_top_margin),
            x = $a(n, d),
            [w, _] = (0, h.useState)(!1);
          h.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !v &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, N.yK)() == "community"
            ) {
              const M = document.getElementsByTagName("HEAD")[0],
                Z = document.createElement("style");
              (Z.innerText = (0, lt.L$)(n.jsondata.sale_custom_css)),
                I(Z),
                M.appendChild(Z);
            }
            const E = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Ze.wT)(
                E.length <= 1,
                "Must have at most one react_landing_background",
              ),
              E.length >= 1 && (E[0].style.backgroundImage = ""),
              () => {
                v && (v.remove(), I(null));
              }
            );
          }, [n, v, s]);
          const b = n?.jsondata,
            j = h.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(N.UF.CLANACCOUNTID),
                nAppIDVOD: Number(b?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? b?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  b?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, b, r, t],
            ),
            B = (0, G.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1);
          if (!n || d === void 0)
            return (0, e.jsx)("div", {
              className: Xe().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(Ye.t, {
                size: "medium",
                string: (0, l.we)("#Loading"),
              }),
            });
          {
            const E =
                n.jsondata.localized_sale_logo &&
                n.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              M = n.BUsesContentHubForItemSource(),
              Z = n
                .GetSaleSections()
                .some((Pe) => Pe.section_type === "contenthubtitle"),
              X = M && Z;
            let ae,
              Oe = !0;
            E
              ? (ae = 0)
              : n.BUsesContentHubForItemSource()
                ? (ae = 20)
                : n.GetEventType() == P.ajI
                  ? ((ae = 0), (Oe = !1))
                  : (ae = n.jsondata.sale_header_offset || 0);
            const $ = Oe && n.jsondata.sale_header_offset === 530,
              he = !It.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              ye = s
                ? !w && i?.BIsBackgroundImageEnabled()
                  ? Ge.S.EPreviewMode_EditBackground
                  : Ge.S.EPreviewMode_Enabled
                : Ge.S.EPreviewMode_Disabled,
              ze = B || n.GetEventType() != P.ajI,
              Ue = yt(n.clanSteamID),
              vt = M ? te.Yo.NoTransform : te.Yo.NoTransformSparseContent,
              Mt = (0, L.A)(
                R().SaleOuterContainer,
                D && R().SaleOuterTopMargin,
                $ && R().SaleNewSizing,
                R()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                E && R().SalePageLogoSet,
                X && R().ContentHub,
              );
            return (0, e.jsx)(O.tH, {
              children: (0, e.jsx)(ie.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(Q.Cs, {
                  location: s ? Q.HY : Q.bs,
                  children: (0, e.jsxs)(W, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    children: [
                      he && (0, e.jsx)(ie.Sn, {}),
                      (0, e.jsx)(ge, { eventModel: n }),
                      !!i &&
                        (ze || Ue) &&
                        (0, e.jsx)(Wa, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: w,
                          fnSetBackgroundImgGroupEditMode: _,
                          bShowAsValveOnly: !ze,
                        }),
                      (0, e.jsxs)(k.Z, {
                        style: X ? void 0 : { marginTop: `${ae || 0}px` },
                        className: Mt,
                        scrollIntoViewType: vt,
                        children: [
                          (0, e.jsx)(nt, { eventModel: n, language: r }),
                          (0, e.jsx)(Ot, {
                            rgPresenters: n.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(Ft, {
                            event: n,
                            broadcastEmbedContext: j,
                          }),
                          (0, e.jsx)(eo, {
                            ePreviewMode: ye,
                            event: n,
                            backgroundImageEditModel: i,
                            language: r,
                            promotionName: t,
                            nSaleDayIndex: d,
                            broadcastEmbedContext: j,
                            selectedTab: x,
                          }),
                          !u &&
                            (0, e.jsx)(zt, {
                              event: n,
                              addtionalAdminButtons: c,
                              fnOnChangeDayIndex: (Pe) => {
                                Pe != d &&
                                  ((n.m_overrideCurrentDay = Pe), m(Pe));
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }
        }
        function $a(a, t) {
          const [n] = (0, Qe.QD)(Ve.jD, void 0);
          return h.useMemo(() => {
            const r = a
              .GetSaleSectionFirstMatchByType("tabs")
              ?.tabs?.filter((i) => !i.hide);
            if (r && r.length > 0) {
              let i = n > 0 ? r.find((u) => u.unique_id == n) : void 0;
              i || (i = r[0]);
              const c = i === r[0];
              return new it.y(i, t, c);
            }
          }, [a, t, n]);
        }
        function Gn() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function qa(a) {
          const {
              event: t,
              language: n,
              nSaleDayIndex: s,
              ePreviewMode: r,
              selectedTab: i,
              backgroundImageEditModel: c,
            } = a,
            [u, d] = h.useState((0, Ve.rp)()),
            m = h.useMemo(() => new bt(), []),
            v = h.useCallback(() => d((0, Ve.rp)()), []);
          h.useEffect(
            () => (
              window.addEventListener("resize", v),
              () => window.removeEventListener("resize", v)
            ),
            [v],
          ),
            h.useEffect(() => {
              let $ = "";
              const ee = () => {
                  const ye = Gn();
                  if (ye && ye != $) {
                    const ze = document.getElementById(ye);
                    ze && (($ = ye), ze.scrollIntoView({ block: "start" }));
                  }
                },
                he = setTimeout(() => ee(), 150);
              return (
                window.addEventListener("hashchange", ee),
                () => {
                  clearTimeout(he),
                    window.removeEventListener("hashchange", ee);
                }
              );
            }, []);
          const I = (0, Me.W6)(),
            D = ($, ee) => {
              (0, Qe.ip)(I, { ...(ee || {}), [Ve.jD]: $.toString() });
            },
            [x, w] = (0, Qe.QD)("controller"),
            [_, b] = (0, G.q3)(() => {
              const $ =
                  We.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                ee = t.GetSaleSectionIncludingFooterSections($);
              return [
                Wt(
                  t.jsondata.sale_background_img_groups,
                  ee,
                  i && i.GetActiveTabUniqueID(),
                ),
                ee,
              ];
            });
          let j = !1;
          const B = new it.y(void 0, s),
            E = [{ elements: [], activeTab: B }];
          let M = null;
          const Z = (0, N.Qn)(),
            X = (0, ht.ty)(),
            ae = h.useMemo(() => {
              const $ = Gn();
              if (!$) return;
              const ee = b.findIndex((he) => he.section_anchor === $);
              return ee > -1 ? ee : void 0;
            }, [b]);
          b.forEach(($, ee) => {
            const he = E[E.length - 1].activeTab;
            if (he && !he.ShouldShowSection($)) return;
            const ye = It.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              ze = u && !ye && !t.jsondata.content_hub_restricted_width;
            let Ue = (0, Ge.I)($, r, t, n, Z);
            if (Ue === void 0) return;
            if (!Ue)
              if ((0, St.su)($) && !N.iA.logged_in)
                j ||
                  ((Ue = (0, e.jsx)(St.CC, {
                    section: $,
                    event: t,
                    language: n,
                  })),
                  (j = !0));
              else {
                const so = $.diable_tab_id_filtering
                  ? new it.y(void 0, he && he.GetSaleDay())
                  : he;
                $.section_type == "tabs" &&
                  $.tabs?.some(
                    (ro) => ro.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  E.push({ activeTab: i, elements: [] }),
                  (Ue = (0, e.jsx)(Ja.H, {
                    ...a,
                    section: $,
                    activeTab: so,
                    appVisibilityTracker: m,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: D,
                    expanded: ze,
                    controllerCategory: x,
                    setControllerCategory: w,
                  }));
              }
            X &&
              (Ue = (0, e.jsx)(oo, { nSectionID: $.unique_id, children: Ue }));
            const vt = E && E.length && E[E.length - 1];
            let Mt = (0, e.jsx)(
              ao,
              {
                section: $,
                nActiveTabID:
                  vt && vt.activeTab && vt.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: ee,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: _,
                backgroundImageEditModel: c,
                bExpanded: ze,
                children: (0, e.jsx)(Et._, {
                  enabled: !ae || ee > ae,
                  children: Ue,
                }),
              },
              "SaleSectionIndex_" + $.unique_id + "_" + ee,
            );
            const Pe = _.mapSectionToGroup.get($.unique_id);
            M &&
              M.groupID != Pe &&
              (E[E.length - 1].elements.push(
                jt(t, M, r, i && i?.GetActiveTabUniqueID()),
              ),
              (M = null)),
              Pe
                ? (M ||
                    (M = {
                      groupID: Pe,
                      elSaleSections: [],
                      derivedGroupInfo: _.mapGroupToSections.get(Pe),
                    }),
                  M.elSaleSections.push(Mt))
                : E[E.length - 1].elements.push(Mt);
          }),
            M &&
              (E[E.length - 1].elements.push(
                jt(t, M, r, i && i?.GetActiveTabUniqueID()),
              ),
              (M = null));
          const Oe = E.map(($, ee) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, L.A)(
                  R().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: $.elements,
              },
              "TabSection_" + ee,
            ),
          );
          return (0, e.jsx)(k.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Oe,
          });
        }
        const eo = (0, Me.y)(qa);
        function to(a) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: n,
            children: s,
          } = a;
          return t && n != null
            ? (0, e.jsx)(no, {
                visibility_by_door_index_state: t,
                door_index_visibility: n,
                children: s,
              })
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function no(a) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: n,
              children: s,
            } = a,
            r = (0, Ut.OM)(n);
          return (t == "hide_when_open_door_index" && r) ||
            (t == "show_when_open_door_index" && !r)
            ? null
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function Tn({ children: a, onChange: t }) {
          const n = h.useRef(null);
          return (
            (0, h.useEffect)(() => {
              t(!!h.Children.toArray(a).filter(Boolean).length);
            }, [a, t]),
            a
          );
        }
        function ao(a) {
          const {
              section: t,
              saleSectionIndex: n,
              nActiveTabID: s,
              ePreviewMode: r,
              salePageBackgroundDerivedConfig: i,
              backgroundImageEditModel: c,
              bExpanded: u,
              children: d,
            } = a,
            m = t.section_anchor
              ? t.section_anchor
              : Ve.mj + (t.unique_id || n),
            v = t.section_type != "tabs",
            [I, D] = (0, h.useState)(!0);
          return I
            ? (0, e.jsx)(O.tH, {
                children: (0, e.jsx)(to, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: v
                    ? (0, e.jsx)(k.Z, {
                        navKey: m,
                        id: m,
                        className: (0, L.A)({
                          [R().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: u,
                          [t.single_item_style || ""]: !0,
                          [R().SaleSectionBackgroundImageGroupEdit]:
                            r == Ge.S.EPreviewMode_EditBackground,
                          [R().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          r === Ge.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  d,
                                  (0, e.jsx)(Ka, {
                                    nSectionUniqueID: t.unique_id || n,
                                    nTabID: s,
                                    salePageBackgroundDerivedConfig: i,
                                    backgroundImageEditModel: c,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(Tn, { onChange: D, children: d }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          r === Ge.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: m,
                                className: (0, L.A)({
                                  [R().SaleSectionCtn]: !0,
                                  [R().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [R().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  d,
                                  (0, e.jsx)(Qa, {
                                    backgroundImageEditModel: c,
                                    nTabID: s,
                                    imgGroupDerivedMapping: i,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(Tn, { onChange: D, children: d }),
                      }),
                }),
              })
            : null;
        }
        function oo(a) {
          const { nSectionID: t, children: n } = a,
            [s, r] = h.useState(!1),
            [i, c] = h.useState(!1);
          h.useEffect(() => {
            ht.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const u = (0, G.q3)(() => ht.TU.Get().GetMouseOverSectionID()),
            d = t && t == u,
            m = () => ht.TU.Get().JumpToSection(t),
            v = h.useRef(null);
          return (
            (0, ht.lM)((I) =>
              t != I ? !1 : (v.current?.scrollIntoView(), c(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: v,
              className: (0, L.A)({
                [R().SaleSectionLivePreview]: !0,
                [R().Hover]: !!d,
                [R().JumpedTo]: !!i,
              }),
              onAnimationEnd: () => c(!1),
              onMouseEnter: () => r(!0),
              onMouseLeave: () => r(!1),
              children: [
                s &&
                  (0, e.jsx)(Ie.Gq, {
                    toolTipContent: (0, l.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: R().JumpToButton,
                      onClick: m,
                      children: (0, e.jsx)(Ke.ffu, {}),
                    }),
                  }),
                n,
              ],
            })
          );
        }
      },
      12932: (y, de, o) => {
        "use strict";
        o.d(de, { qx: () => ne });
        var e = o(7850),
          P = o(16412),
          k = o(18210),
          te = o(36118),
          ie = o(90626),
          Q = o(36707),
          ue = o(95695),
          H = o.n(ue),
          G = o(25792),
          h = o(64734),
          ve = o.n(h),
          O = o(65946),
          oe = o(11243);
        function R(L) {
          const {
              title: N,
              tooltip: V,
              getMinimized: le,
              toggleMinimized: K,
              className: W,
              children: p,
              elAdditionalButtons: S,
            } = L,
            F = (0, O.q3)(() => le());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, Q.A)(
                  W,
                  h.SectionTitleHeader,
                  h.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, Q.A)(
                      ue.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [N, !!V && (0, e.jsx)(oe.o, { tooltip: V })],
                  }),
                  (0, e.jsxs)("div", {
                    className: h.SectionTitleButtons,
                    children: [
                      S,
                      (0, e.jsx)(J, { bIsMinimized: F, fnToggleMinimize: K }),
                    ],
                  }),
                ],
              }),
              !F && (0, e.jsx)(G.tH, { children: p }),
            ],
          });
        }
        function ne(L) {
          const [N, V] = ie.useState(!!L.bStartMinimized);
          return (0, e.jsx)(R, {
            ...L,
            getMinimized: () => N,
            toggleMinimized: () => V(!N),
            children: L.children,
          });
        }
        function J(L) {
          const { bIsMinimized: N, fnToggleMinimize: V } = L,
            le = N ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(P.$n, {
            "data-tooltip-text": (0, k.we)(le),
            onClick: V,
            children: L.bIsMinimized
              ? (0, e.jsx)(te.hz4, {})
              : (0, e.jsx)(te.Xjb, {}),
          });
        }
      },
      46636: (y, de, o) => {
        "use strict";
        o.r(de), o.d(de, { default: () => L });
        var e = o(7850),
          P = o(90626),
          k = o(24660),
          te = o(19298),
          ie = o(7967),
          Q = o(20169),
          ue = o(64377),
          H = o(36707),
          G = o(3166),
          h = o(51239);
        class ve {
          m_rgSections;
          GetSections() {
            return this.m_rgSections;
          }
          static s_singleton;
          static Get() {
            return (
              ve.s_singleton || (ve.s_singleton = new ve()), ve.s_singleton
            );
          }
          constructor() {
            this.m_rgSections = (0, G.Tc)("categories", "application_config");
          }
        }
        function O() {
          const N = ve.Get(),
            [V, le] = (0, P.useState)(N.GetSections());
          return { sections: V };
        }
        function oe() {
          const { sections: N } = O(),
            V = P.useRef(null);
          return (
            P.useEffect(() => {
              V.current && V.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(te.Z, {
              className: h.CategorySectionsCtn,
              navRef: V,
              children: N.map((le, K) =>
                (0, e.jsx)(
                  R,
                  { section: le, autoFocus: K == 0 },
                  "section" + le.name,
                ),
              ),
            })
          );
        }
        function R(N) {
          const { section: V, autoFocus: le } = N,
            K = (0, G.Qn)(),
            W = (0, e.jsxs)("div", {
              className: h.CategorySection,
              children: [
                (0, e.jsx)("span", {
                  className: h.CategorySectionName,
                  children: V.name,
                }),
                (0, e.jsx)(ie.MS, {
                  className: h.CategoriesCtn,
                  scrollDirection: "x",
                  navEntryPreferPosition: Q.iU.MAINTAIN_X,
                  navKey: "cat_section" + V.name,
                  children: V.categories.map((p, S) =>
                    (0, e.jsx)(
                      ne,
                      { category: p, autoFocus: le && S === 0 },
                      "category" + p.name,
                    ),
                  ),
                }),
              ],
            });
          return K
            ? W
            : (0, e.jsx)(ue.K, { placeholderHeight: "150px", children: W });
        }
        function ne(N) {
          const { category: V, autoFocus: le } = N;
          return (0, e.jsx)(te.Z, {
            focusableIfEmpty: !0,
            autoFocus: le,
            navKey: "cat_panel" + V.name,
            children: (0, e.jsxs)(k.Ii, {
              href: G.TS.STORE_BASE_URL + V.url,
              className: (0, H.A)({
                [h.Category]: !0,
                [h.TopLevelCategory]: V.is_toplevel_genre,
              }),
              children: [
                (0, e.jsx)(J, { ...N }),
                (0, e.jsx)("div", { className: h.CategoryGradient }),
                (0, e.jsx)("span", {
                  className: h.CategoryName,
                  children: (0, e.jsx)("span", { children: V.name }),
                }),
              ],
            }),
          });
        }
        function J(N) {
          let { category: V } = N;
          return (0, e.jsx)("div", {
            className: h.GridOuter,
            children: (0, e.jsx)("div", {
              className: h.Grid,
              children: (0, e.jsx)("img", {
                src: G.TS.STORE_BASE_URL + V.image_url,
              }),
            }),
          });
        }
        const L = oe;
      },
      17809: (y, de, o) => {
        "use strict";
        o.d(de, { d: () => dn });
        var e = o(7850),
          P = o(19367),
          k = o(90626),
          te = o(3685),
          ie = o(85528),
          Q = o(7638),
          ue = o(79118),
          H = o(18210),
          G = o(3166),
          h = o(75779),
          ve = o(80902),
          O = o(72604),
          oe = o(72609);
        function R() {
          return typeof self < "u" ? self.origin : "store";
        }
        async function ne() {
          const g = new URLSearchParams(),
            f = R();
          f && g.set("origin", f);
          const C = `${oe.TS.STORE_BASE_URL}saleaction/ajaxgetuserdeckcompatcounts?${g}`,
            A = await fetch(C);
          if (!A.ok) throw new Error(`${C} answered ${A.status}`);
          const T = await A.json();
          if (T?.success != O.R || !T.counts)
            throw new Error(`${C} answered EResult ${T?.success}`);
          return T.counts;
        }
        const J = 300 * 1e3;
        function L() {
          return ["DeckCompatCounts"];
        }
        function N() {
          return {
            queryKey: L(),
            queryFn: () => ne(),
            staleTime: J,
            retry: !1,
          };
        }
        function V() {
          const { data: g } = (0, ve.I)(N());
          return g;
        }
        function le(g, f) {
          switch (f) {
            case h.sd:
              return g?.playable;
            case h.V8:
              return g?.unsupported;
            default:
              return g?.verified;
          }
        }
        var K = o(70187),
          W = o(7379),
          p = o(64703),
          S = o(6878),
          F = o(99412),
          Y = o(47610),
          ge = o(18860),
          fe = o(41635),
          ke = o(25792),
          l = o(85599),
          nt = o(5565);
        const pt = k.Fragment;
        function Nt(g) {
          const {
              reservationPackageID: f,
              depositPackageID: C,
              bIsPreview: A,
              psuLessPackageID: T,
              strOutOfStockOverride: z,
              strDeliveryOverride: q,
              bDeliveryOverrideOnlyIfOutOfStock: xe,
              section: we,
            } = g,
            { data: me } = (0, Y.DR)(f),
            { data: Ce } = (0, Y.DR)(T),
            Le = (0, k.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + f,
                  reservation_package: f,
                  deposit_package: C,
                  localized_reservation_desc: (0, fe.$Y)([], F.bP9, null),
                  localized_out_of_stock_override: (0, fe.$Y)(
                    [z || null],
                    F.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, fe.$Y)(
                    [q || null],
                    F.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!xe,
                  psu_less_package: T,
                },
              ],
              [f, C, z, q, xe, T],
            );
          if (!me || (T && !Ce))
            return (0, e.jsx)(l.t, {
              string: (0, H.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const Fe = !oe.iA.logged_in || !me.account_restricted_from_purchasing,
            un =
              me.reservation_state == ge.G.k_EPurchaseReservationState_Reserved
                ? me
                : void 0;
          return (0, e.jsxs)(ke.tH, {
            children: [
              (0, e.jsx)(k.Suspense, {
                fallback: null,
                children: (0, e.jsx)(pt, {
                  bIsPreview: !!A,
                  rgReservationDef: Le,
                }),
              }),
              !!me.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Le[0].unique_id,
                  children: [
                    (0, e.jsx)(nt.bk, {
                      reservationDef: Le[0],
                      hardwareDetail: me,
                      bPSULessModel: !1,
                      reservedHardwareDetail: un,
                    }),
                    Fe &&
                      (0, e.jsx)(nt.pc, {
                        section: we,
                        reservationDef: Le[0],
                        hardwareDetail: me,
                        reservedHardwareDetail: un,
                      }),
                    Ce &&
                      Ce?.allow_purchase_in_country &&
                      (0, e.jsx)(nt.bk, {
                        reservationDef: Le[0],
                        hardwareDetail: Ce,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        function In(g) {
          if (g?.bDepositRequired) {
            if (
              g.rgDepositPackageInfo &&
              g.rgDepositPackageInfo?.length > 0 &&
              g.rgDepositPackageInfo.filter((f) => f.bVisible).length == 0 &&
              g?.rgReservationPackageInfo &&
              g?.rgReservationPackageInfo?.length > 0 &&
              g?.rgReservationPackageInfo.filter((f) => f.bVisible).length == 0
            )
              return !1;
          } else if (
            g?.rgReservationPackageInfo &&
            g?.rgReservationPackageInfo?.length > 0 &&
            g?.rgReservationPackageInfo.filter((f) => f.bVisible).length == 0
          )
            return !1;
          return !0;
        }
        var at = o(21035),
          ft = o(72865),
          Ot = o(73371),
          He = o.n(Ot),
          We = o(36707),
          Me = o(53041),
          Ve = o(10026),
          It = o.n(Ve),
          Ut = o(19298),
          Rt = o(11996),
          Ft = o(19047),
          ot = o(36118),
          zt = o(47689),
          Qe = o(89926),
          Ne = o(32545),
          _e = o.n(Ne);
        function xt(g) {
          const { appID: f, classOverride: C, styleOverride: A } = g,
            [T, z] = (0, k.useState)(!1),
            q = (0, zt.m)("GameHoverFollowButton"),
            { elDialogElement: xe, fnShowLogonDialog: we } = (0, Qe.l)(),
            me = (0, Rt.Fh)(f),
            { mutateAsync: Ce } = (0, Ft.L)(f, !me, void 0),
            Le = async (Fe) => {
              Fe.preventDefault(),
                Fe.stopPropagation(),
                G.iA.logged_in
                  ? (z(!0), await Ce(), q.token.reason || z(!1))
                  : we();
            };
          return (0, e.jsxs)(Ut.Z, {
            className: (0, We.A)(_e().FollowButton, C),
            onClick: Le,
            style: A,
            children: [
              me ? (0, e.jsx)(ot.pPV, {}) : (0, e.jsx)(ot.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, We.A)(
                  _e().FollowButtonText,
                  T && _e().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, H.we)(
                  me ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              xe,
            ],
          });
        }
        function Je(g) {
          const { appid: f, color: C, bgcolor: A } = g,
            T = (0, ft.n9)();
          return (0, e.jsx)(xt, {
            appID: f,
            classOverride: (0, We.A)(
              He().FollowGameButtonNotTop,
              It().BBCodeFollowButton,
            ),
            styleOverride: { color: C, backgroundColor: A },
          });
        }
        function st(g) {
          const f = Number(g.args.appid);
          if (!f) return null;
          const C = (0, Me.O)(g.args.color, "black"),
            A = (0, Me.O)(g.args.bgcolor, "white");
          return (0, e.jsx)(Je, { appid: f, color: C, bgcolor: A });
        }
        var Ht = o(20681),
          Wt = o(18657),
          re = o.n(Wt),
          Vt = o(63026);
        function Ct(g) {
          const { clanAccountID: f, color: C, bgcolor: A } = g;
          (0, Ht.mx)();
          const [T, z] = k.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, We.A)(re().BBCodeFollowButton, T && re().isHovered),
            onMouseEnter: () => z(!0),
            onMouseLeave: () => z(!1),
            children: (0, e.jsx)(Vt.Q, {
              nCreatorAccountID: f,
              classOverride: He().FollowGameButtonNotTop,
              styleOverride: { color: C, backgroundColor: A },
              followType: "group",
            }),
          });
        }
        function rt(g) {
          const { event: f } = g.context,
            C = Number(g.args.groupid) || f?.clanSteamID.GetAccountID();
          if (!C) return null;
          const A = (0, Me.O)(g.args.color, "black"),
            T = (0, Me.O)(g.args.bgcolor, "white");
          return (0, e.jsx)(Ct, { clanAccountID: C, color: A, bgcolor: T });
        }
        var Ge = o(83482),
          jt = o(44267),
          Kt = o(9202),
          Dt = o.n(Kt),
          St = o(29522);
        function it(g) {
          const { appid: f, color: C, bgcolor: A } = g,
            T = (0, ft.n9)(),
            z = (0, St.$5)(f),
            q = (0, Ge.L3)(T);
          return (0, e.jsx)("div", {
            className: Dt().WishlistHoverCtn,
            children: (0, e.jsx)(jt.E, {
              snr: q,
              id: z,
              classOverride: (0, We.A)(
                He().WishlistButtonNotTop,
                Dt().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: C, backgroundColor: A },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Yt(g) {
          const f = Number(g.args.appid);
          if (!f) return null;
          const C = (0, Me.O)(g.args.color, "black"),
            A = (0, Me.O)(g.args.bgcolor, "white");
          return (0, e.jsx)(it, { appid: f, color: C, bgcolor: A });
        }
        let Xe = null;
        function Ke() {
          return (
            Xe == null &&
              (Xe = new Map([
                ["wishlist", { Constructor: Yt, autocloses: !1 }],
                ["followgroup", { Constructor: rt, autocloses: !1 }],
              ])),
            Xe
          );
        }
        var Ye = o(37656),
          Ie = o(29868),
          Re = o(24642);
        function bt(g) {
          return g < 10 ? "0" + g : g;
        }
        function Ze(g) {
          const { giveawayid: f } = g,
            C = (0, Ye.w)(f),
            {
              bLoadingGiveawayInfo: A,
              winner_count: T,
              closed: z,
              seconds_until_drawing: q,
            } = C;
          return A
            ? null
            : (0, e.jsxs)("div", {
                className: Ie.countdownCtn,
                children: [
                  !!z &&
                    (0, e.jsx)("div", {
                      className: Ie.Closed,
                      children:
                        T > 0
                          ? (0, H.we)("#Giveaway_Closed", (0, Re.D)(T))
                          : (0, H.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !z &&
                    (0, e.jsxs)(k.Fragment, {
                      children: [
                        q <= 0
                          ? (0, e.jsxs)("div", {
                              className: Ie.Throbber,
                              children: [
                                (0, e.jsx)(l.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, H.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Ie.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Ie.CountDownTime,
                                  children:
                                    bt(Math.floor(q / 60)) + ":" + bt(q % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Ie.CountDownText,
                                  children: [
                                    (0, H.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, H.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        T > 0 &&
                          (0, e.jsxs)("div", {
                            className: Ie.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Ie.WinnerCount,
                                children: (0, Re.D)(T),
                              }),
                              (0, e.jsx)("div", {
                                className: Ie.WinnerText,
                                children: (0, H.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var lt = o(57646);
        function Et(g) {
          const f = Number(g.args.packageid);
          return f
            ? (0, e.jsx)(lt.eF, {
                packageID: f,
                display_style: (0, lt._w)(g.args.display),
              })
            : null;
        }
        function wt(g) {
          const f = Number(g.args.packageid),
            C = Number(g.args.compareid);
          return !f || !C
            ? null
            : (0, e.jsx)(lt.hJ, { packageID: f, compareID: C });
        }
        var yt = o(88245),
          Zt = o(35702),
          U = o(16412),
          se = o(92757),
          be = o(39256),
          Qt = o(4720),
          ct = o(75110),
          Jt = o(57810),
          dt = o(36631),
          Xt = o(25533),
          _t = o(81416);
        function $t(g) {
          const { eventModel: f, nEventBadgeID: C } = g,
            A = (0, Zt.fy)(C);
          if (A?.level > 0) {
            let T = A.level;
            if (f?.BHasSaleEnabled()) {
              const z = f.GetSaleSectionsByType("badge_progress");
              if (z?.length == 1) {
                const q = z[0].badge_progress;
                if (q?.event_badgeid == C && q?.granted_by_discovery_queue) {
                  const xe = q.levels[q.levels.length - 1].level;
                  return (0, e.jsx)($e, {
                    eventModel: f,
                    nBadgeLevel: T,
                    nMaxLevel: xe,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Re.D)(T),
            });
          }
          return null;
        }
        function $e(g) {
          const { eventModel: f, nBadgeLevel: C, nMaxLevel: A } = g,
            T = k.useMemo(() => {
              const me = f
                .GetSaleSections()
                .filter((Ce) => Ce.section_type == "discoveryqueue");
              return me?.length > 0 ? me[0] : null;
            }, [f]),
            { storePageFilter: z, eStoreDiscoveryQueueType: q } = k.useMemo(
              () => (0, ct.lx)(f, T),
              [f, T],
            ),
            xe = (0, Jt.Uf)(q, z),
            we = Math.min(C + xe, A);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Re.D)(we),
          });
        }
        function qt(g) {
          const { event: f } = g.context,
            C = Number.parseInt((0, K.j$)(g.args, "eventid"));
          return G.iA.logged_in && C
            ? (0, e.jsx)($t, { nEventBadgeID: C, eventModel: f })
            : null;
        }
        function en(g) {
          const { nDoorIndex: f, children: C } = g,
            A = (0, p.OM)(f),
            { fnOpenDoor: T } = (0, p.OC)(),
            [z, q] = k.useState(!1),
            [xe, we] = k.useState(!1),
            { elDialogElement: me, fnShowLogonDialog: Ce } = (0, Qe.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(U.$n, {
                disabled: A,
                onClick: (Le) => {
                  z ||
                    (G.iA.logged_in
                      ? (q(!0),
                        T(f, !0, null, !1)
                          .then((Fe) => {
                            Fe || we(!0), q(!1);
                          })
                          .catch(() => {
                            we(!0), q(!1);
                          }))
                      : Ce());
                },
                children: xe
                  ? (0, e.jsx)("div", {
                      children: (0, H.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!z && (0, e.jsx)(l.t, { size: "small" }),
                        !!A && (0, e.jsx)(ot.Jlk, {}),
                        C,
                      ],
                    }),
              }),
              me,
            ],
          });
        }
        function tn(g) {
          const f = Number.parseInt((0, K.j$)(g.args)) || 0;
          return f >= 0 && f < 32
            ? (0, e.jsx)(en, { nDoorIndex: f, children: g.children })
            : null;
        }
        const nn = (0, se.y)(Xt.H);
        function an(g) {
          const f = Number.parseInt((0, K.j$)(g.args)),
            { event: C, showErrorInfo: A } = g.context;
          if (f) {
            const T = C?.jsondata?.sale_sections?.findIndex(
              (z) => z.unique_id == f,
            );
            if (T >= 0) {
              const z = C.GetDayIndexFromEventStart();
              return (0, e.jsx)(dt.Cs, {
                location: A ? dt.HY : dt.bs,
                children: (0, e.jsx)(nn, {
                  event: C,
                  section: C.jsondata.sale_sections[T],
                  activeTab: new Qt.y(null, z),
                  language: g.language,
                  nSaleDayIndex: z,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: A
                    ? _t.S.EPreviewMode_Enabled
                    : _t.S.EPreviewMode_Disabled,
                }),
              });
            } else if (A)
              return (0, e.jsxs)("div", {
                className: be.ErrorDiv,
                children: ["Error could not find sale section ", f],
              });
          }
          return null;
        }
        let ut = null;
        function Ae() {
          return (
            ut == null &&
              (ut = new Map([
                ...Array.from(Ke().entries()),
                [
                  "itemdef",
                  {
                    Constructor: on,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: st, autocloses: !1 }],
                ["deckcompatcount", { Constructor: At, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: Be, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: qe, autocloses: !1 }],
                ["price", { Constructor: Et, autocloses: !1 }],
                ["pricesavings", { Constructor: wt, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: Bt, autocloses: !1 }],
                ["chooseaccount", { Constructor: Gt, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: qt, autocloses: !1 }],
                ["optindoorquest", { Constructor: tn, autocloses: !1 }],
                ["classname", { Constructor: sn, autocloses: !1 }],
                ["localize", { Constructor: rn, autocloses: !1 }],
                ["salesection", { Constructor: an, autocloses: !1 }],
                ["reservationbutton", { Constructor: Te, autocloses: !1 }],
              ])),
            ut
          );
        }
        function on(g) {
          const { event: f } = g.context,
            C = Number.parseInt((0, K.j$)(g.args, "appid")),
            A = Number.parseInt((0, K.j$)(g.args, "itemdefid")),
            T = Number.parseInt((0, K.j$)(g.args, "maxquantity")),
            z = (0, K.j$)(g.args, "calltoaction");
          return !(0, yt.gS)(C, A, !1) || !f
            ? (0, e.jsx)(l.t, {
                size: "small",
                position: "center",
                string: (0, H.we)("#Loading"),
              })
            : (0, e.jsx)(at.f, {
                language: g.language,
                clanAccountID: f.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: C, nItemDefID: A, max_quantity: T },
                strCallToAction: z,
              });
        }
        function At(g) {
          const f = V();
          if (!f) return (0, e.jsx)(l.t, { size: "small" });
          const C = Number.parseInt((0, K.j$)(g.args));
          return (0, e.jsx)("span", { children: (0, Re.D)(Number(le(f, C))) });
        }
        function Be(g) {
          const f = (0, W.j)(G.iA.accountid, "library");
          if (!f) return (0, e.jsx)(l.t, { size: "small" });
          const C = Number.parseInt((0, K.j$)(g.args));
          let A = f.verifiedList?.length || 0;
          switch (C) {
            case h.sd:
              A = f.playableList?.length || 0;
              break;
            case h.V8:
              A = f.unsupportedList?.length || 0;
              break;
            case h.YX:
              A = f.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Re.D)(Number(A)) });
        }
        function Bt(g) {
          const f = Number.parseInt((0, K.j$)(g.args)),
            C =
              "hide" in g.args && !!Number.parseInt((0, K.j$)(g.args, "hide"));
          return f >= 0
            ? (0, e.jsx)(Ee, { nDoorIndex: f, bHide: C, children: g.children })
            : null;
        }
        function Ee(g) {
          const { nDoorIndex: f, bHide: C, children: A } = g,
            T = (0, p.OM)(f);
          return T == null
            ? null
            : (T && !C) || (!T && C)
              ? (0, e.jsx)(e.Fragment, { children: g.children })
              : null;
        }
        function Gt(g) {
          if (G.iA.logged_in) {
            const f = Number.parseInt((0, K.j$)(g.args)),
              C = Number.parseInt((0, K.j$)(g.args, "mod"));
            if (C > 0 && f < C && G.iA.accountid % C == f) return g.children;
          }
          return null;
        }
        function sn(g) {
          const f = (0, K.j$)(g.args);
          return f?.trim().length > 0
            ? (0, e.jsx)("div", { className: f.trim(), children: g.children })
            : (0, e.jsx)(e.Fragment, { children: g.children });
        }
        function rn(g) {
          return (0, e.jsx)("span", {
            className: S.LocalizeBlock,
            children: (0, H.oW)(
              g.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function qe(g) {
          let f = (0, K.j$)(g.args);
          return f
            ? (0, e.jsx)(Ze, { giveawayid: f })
            : (0, e.jsx)(k.Fragment, {});
        }
        function Te(g) {
          const { showErrorInfo: f, event: C } = g.context,
            A = Number.parseInt((0, K.j$)(g.args)),
            T = k.useMemo(() => {
              if (C)
                return C.jsondata.sale_sections?.find(
                  (z) =>
                    z.section_type == "vo_internal" &&
                    (z.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      z.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [C]);
          if (A && T) {
            const z = Number.parseInt((0, K.j$)(g.args, "depositpackageid")),
              q = Number.parseInt((0, K.j$)(g.args, "psulesspackageid")),
              xe = (0, K.j$)(g.args, "out_of_stock_override"),
              we = (0, K.j$)(g.args, "delivery_override"),
              me = (0, K.j$)(g.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(Nt, {
              section: T,
              reservationPackageID: A,
              depositPackageID: z,
              psuLessPackageID: q,
              strOutOfStockOverride: xe,
              strDeliveryOverride: me || we,
              bDeliveryOverrideOnlyIfOutOfStock: !!me,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var ln = o(71698),
          cn = o(82206);
        function dn(g) {
          const { bSalePage: f } = g,
            [C, A] = k.useState(Q.KN.IsInitialized());
          return (
            (0, ln.H)(C, f),
            k.useEffect(() => {
              ie.Vw.Init(new te.D(G.TS.WEBAPI_BASE_URL)),
                ue.O3.Init(),
                Q.KN.InitGlobal().then(() => A(!0));
            }, []),
            k.useEffect(() => {
              const T = (0, H.l4)();
              T && P.locale(T);
            }, []),
            C
              ? f
                ? (0, e.jsx)(cn.d3, { dictionary: Ae(), children: g.children })
                : g.children
              : null
          );
        }
      },
      11811: (y, de, o) => {
        "use strict";
        o.r(de), o.d(de, { default: () => N });
        var e = o(7850),
          P = o(71698),
          k = o(90626),
          te = o(73259),
          ie = o(76559),
          Q = o(79118),
          ue = o(91576),
          H = o(64641),
          G = o.n(H),
          h = o(85599),
          ve = o(18210),
          O = o(3166),
          oe = o(17809),
          R = o(65946),
          ne = o(85692),
          J = o(41032),
          L = o(51079);
        function N(W) {
          const { eventModel: p } = W;
          return (0, e.jsx)(oe.d, {
            bSalePage: !0,
            children: (0, e.jsx)(V, { ...W, overrideEventModel: p }),
          });
        }
        function V(W) {
          const { promotionName: p, language: S, overrideEventModel: F } = W,
            [Y, ge] = k.useState(
              F ?? Q.O3.GetClanEventFromAnnouncementGID(O.P9.ANNOUNCEMENT_GID),
            );
          k.useEffect(() => {
            if (!F && Y?.AnnouncementGID != O.P9.ANNOUNCEMENT_GID) {
              const l = new ie.b(O.UF.CLANSTEAMID);
              Q.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                l,
                O.P9.ANNOUNCEMENT_GID,
                null,
              ).then(ge);
            }
          }, [Y, F]),
            K(Y, ge);
          const fe = (0, ne.ty)();
          if (((0, P.s)(1500), !Y))
            return (0, e.jsx)("div", {
              className: G().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(h.t, {
                size: "medium",
                string: (0, ve.we)("#Loading"),
              }),
            });
          const ke =
            (Y.visibility_state !== te.zv.k_EEventStateVisible &&
              Y.visibility_state !== te.zv.k_EEventStateUnlisted) ||
            fe;
          return (0, e.jsx)(le, {
            eventModel: Y,
            children: (0, e.jsx)(L.oJ, {
              children: (0, e.jsx)(L.Ay, {
                curator_clanid: Y?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(ue._, {
                  promotionName: p,
                  language: S,
                  eventModel: Y,
                  bIsPreview: ke,
                }),
              }),
            }),
          });
        }
        function le(W) {
          const { eventModel: p, children: S } = W,
            F = p.GetContentHubType() == "adultonly";
          return (0, e.jsx)(J.QA, {
            eAdultOnlyMediaBehavior: F ? "allowed" : "masked",
            children: S,
          });
        }
        function K(W, p) {
          const S = (0, R.q3)(() => ne.TU.Get().GetEventModelJson()),
            [F, Y] = k.useState();
          k.useEffect(() => {
            if (!S || S == F) return;
            Y(S);
            const ge = te.lh.FromJSON(S);
            (ge.rtime32_last_modified = Math.floor(new Date().getTime() / 1e3)),
              p(ge);
          }, [W, p, F, S]);
        }
      },
      21895: (y) => {
        y.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      16619: (y) => {
        y.exports = {
          Color: "_2Vc3a-PM4tOhJcD72NEq1U",
          IconSizeDefault: "_20lX82QaoUw-iHboSsmZBI",
          "IconSize-1": "_1zRMg9IjPqEIAejKQDDLYW",
          "IconSize-2": "_3dn_hJnXYKfl38rjqz4y91",
          "IconSize-3": "_2aoIykgGddbEHeCGgMR79l",
          "IconSize-4": "_1Ypu_MleveHHMyLy8PVNy",
          "IconSize-5": "e8vp9esm_uAhUEdfq5zjr",
          "IconSize-6": "hXAsxCohKrk8qBq6Enfgt",
          "IconSize-7": "_5TifSVb5dMP2wAaHIDqM_",
          "IconSize-8": "_32KP-QSJpecoxuWZfWkqmy",
          "IconSize-9": "_3TcYJ4xwprVIVhcdzwF17m",
          HitSlop: "_1tiFDvBjIAQRZDbVwz8k2u",
        };
      },
      32545: (y) => {
        y.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
          BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
          "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
          "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
          "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
          "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
          "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
          "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
          "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
          "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
          focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
          hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
        };
      },
      50909: (y) => {
        y.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (y) => {
        y.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SalePageLogoCtn: "_3Rukhd1HqXzPiBrK5hwPT-",
          BackgroundAnimation: "_1xc_h6g1jbrfqXQXHDA2eY",
          "ItemFocusAnim-darkerGrey-nocolor": "_32Qiunpe7Bq8tRMP7zANIV",
          "ItemFocusAnim-darkerGrey": "_1jLvKsCp-1NNukUKFcJBiF",
          "ItemFocusAnim-darkGreySettings": "_2oonpIg6GiNC1fFwAuTeY1",
          "ItemFocusAnim-darkGrey": "_25MzDFkbrWeDNWxcpYDDqL",
          "ItemFocusAnim-grey": "_24xCtEhvscRzLJyaNWLeUa",
          "ItemFocusAnim-translucent-white-10": "_191r_XeIDZJjVtYMrw4vZN",
          "ItemFocusAnim-translucent-white-20": "_3PT6d0B4zsV60BfrKuIA1r",
          "ItemFocusAnimBorder-darkGrey": "_1Z9KMCmIY9huHpqwfwRypj",
          "ItemFocusAnim-green": "_1WZWN5W96O7pMURRF2eleh",
          focusAnimation: "_2hRoGMM5UsM8oeV-txHPNu",
          hoverAnimation: "_1YMbPvrOkuzyOJDFmv_N8s",
        };
      },
      71347: (y) => {
        y.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (y) => {
        y.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (y) => {
        y.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      10026: (y) => {
        y.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (y) => {
        y.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (y) => {
        y.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      32190: (y) => {
        y.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (y) => {
        y.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (y) => {
        y.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (y) => {
        y.exports = {
          ImageWrapperContainer: "_2or51Nzh1oEwvdNjKQ1XsS",
          ImageWrapper: "_34WcpEIVKr8Z72GaesGoR4",
          VideoBackground: "_3IizOeZqT1lZaoPEmdVxG",
          ImageWrapperFilename: "_3_vYFjDjTuDvhsL10XO9BU",
          ResultNotification: "_1X95b1CVvEsEa5dfoR5Pfv",
          ErrorCode: "_-7Alg3skQ6oFTYIpKTHsI",
          Hilight: "_3lBJMYeg4_hihNl0QTX1Qi",
          ImageButton: "_2MUWDtjaZWaMDdJaQr4o5a",
          Thumb: "_3M02zvAfoMwX5XlzlvFkc3",
          Full: "_1RN-YKVciU9zYHOYX6OV0",
          Delete: "_1X87fLS_CT0g2Vu5-fClUZ",
          FloatingThrobber: "_2EHZ15YQSAK_T5SCxVobtG",
          Localized: "_3FFrtt5Of4jP9unTFjYiHs",
          ClanImageGrid: "_3J5Yc20Wkz7gjSxxWcHst",
          ClanImageGridItem: "_1vXdD6QZTKcjYoRTOAuOeX",
          Selected: "_3JVN2Ta1MlQnuMnqPo0XR8",
          ImgCtn: "_248ADrw9QzPyhcxjqlaykT",
          Name: "TzsVI0_4scOG258SCeyqz",
        };
      },
      9709: (y) => {
        y.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (y) => {
        y.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (y) => {
        y.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (y) => {
        y.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      25359: (y) => {
        y.exports = {
          EventEditorArtworkCtn: "_3etoSeNgIJIJoQjVvKBkdK",
          ArtworkPreview: "_1fBG8S7L5v1-Ll8UMASqW5",
          EventEditorArtworkBarContainer: "TLT1tvLtG6-1EdFGwToo1",
          EventEditorButton: "_2EbfH5kGhG6VdMYM0aSFsw",
          EventEditorInputPaneTopRow: "_3loSsH7QVVzJW4dbA_k8pH",
          EventCoverImageCtn: "vcULy1uwr1V-xetzQ3t5_",
          DragTarget: "_2qaqHaHt0FsJ5g6E50Rpbn",
          DragOnTopOfMe: "_1-0mEm0at-4Czr10kmQ82K",
          EventEditorArtworkTextCtn: "wbzVx6PSPvY3jxjmybwT7",
          EventEditorDragTargetArea: "_352Z7ynHHExwu7pbLG0mi3",
          EventEditorArtworkTitle: "_1BtkzIs3COLhdqubhPqTJa",
          EventEditorArtworkSubTitle: "_3NsjbDpfSxc8ZHhYE5TuTv",
          EventEditorArtworkResolution: "pScoegXLiCfPTrVdDHgRc",
          ReassignCtn: "_2kzxUHYwRnfLZc2qUJp54m",
          ImagePreviewContainer: "_4M__i4jyU9-VJE6K30Rat",
          NoneSet: "csDC3rD7ooQ8gGXZhh594",
          TitleSafePreview: "_2Gel5eBC4smzhCMPJN4poX",
          TitleSafeCaption: "_2oU3ulhvWy8BrTtr-wLTHL",
          LanguageSelector: "_33sdnBObDSgcIemY_8d188",
          LanguageSelectorSelected: "_35iac6gVYl3NbfLM5oGhAp",
          LanguageSelectorNoData: "_2MrExNFgrVVmzV4_XxWk7m",
          LanguageContainer: "_1GqYxNpFolOmvCXZZ5SqS9",
          LanguageOptions: "_1OF4inXEccSHpEi-94BNyB",
          LanguageListContainer: "_2NKwVWWJzUopyzUpm5K8PU",
          SelectImageContainerTopRow: "_33RDQ6gt9hW0N3baDbAfnl",
          SelectImageContainerBottomRow: "_3Mstp8zLfqhPc0yqJGve2N",
          TextTitle: "_1b_OxtjP85MZc-IlQfnnHR",
          TextSubTitle: "EqzVNygGbzsiBalSQOtWy",
          SelectImageEqualColumns: "Qz0mmjcnBMcs99N6fgVCv",
          SelectImageBlock: "X_wtWeV0nNEF-9Rz0wZRL",
          MainPreviewBlock: "_3kAV8hXf4G70C4tDE8HDjI",
          Tips: "_2jAkKq9D5KKOH2cgMu59yN",
          ExamplesCtn: "WiG3FOkzY58mDmTzVy40z",
          SelectImageExampleImg: "_3Lcquzc_EacniSS2QxdUHx",
          SelectImageLanguagesCtn: "_27huHYrHSwivfUIglfRube",
          SelectImageTitle: "lJEQ6yKHtjwXClD4NVqUY",
          ArtworkSelectorContainer: "_2dxWXru9IFUHuJgzC9_WwQ",
          Title: "_2HiqsrLG8k4zf4raXVygUP",
          SaleHeaderExampleCtn: "_2Nwi2WWTWdc4JkMEiHDFFK",
          SaleHeaderExampleCol: "_2s4zAjRHJabF47kK9uxCY6",
          BroadcastPreview: "_3NxzN3dNq98rjVdkyQ9QIH",
          AssetExampleSpotlightCtn: "_29B1UOzVRMVZSd22IyP43x",
          BackgroundConfigCtn: "_3SVRvFP-sXikNXmksKkDQ7",
          OptionCtn: "_2XnObldRTEs5T4Sswyv5Fo",
          ButtonRow: "_2W9rAanKV4V6A7Exx4sWGF",
          BackgroundColorBtn: "_2YD-avez2pqO4MJHAO5_v0",
          BackgroundColorResetBtn: "baRhk4ouyxcNfo_um5C76",
          UploadSuccess: "inXVzuN-asDe-A5jnsvvV",
          HighlightBox: "_3qTodEPOW76BNBFtgX0AUa",
        };
      },
      79949: (y) => {
        y.exports = {
          MultipleExampleContainer: "_3HrpHSdcqC7wp8s07bOS2l",
          ExampleSectionTitle: "MxxIR01BbdH_tAWmTbjoz",
          DetailPageExample: "_3Mi3a8sT7hZn6-L_TPm3gr",
          DetailExample: "TYQJH_hhcEuSRvl75g6GA",
          DetailExample2: "HQAziOChjZK2M_cKTNA8",
          MainImageCtn: "_1mRJSs13tWFRJ55fG6WrK8",
          ExampleBodyPosition: "_2wNW_eWECTcvaYU7AYXXY2",
          ExampleContentCtn: "_2bAs9Bkh1K8PYVhcLLerfA",
          TextTitle: "_3fulSVNkgCeQyqxT0FjHOp",
          TextSubTitle: "_3ThX6fPp7MJY_TrTP_RCRY",
          TextBody: "_2nG13rbAd05OnozWt7nQWL",
          SpotlightExample: "_3KsBV1q-e0ZnxgK9GdUiON",
          ExampleSpacer: "oAEZygc5smKi6PjD-981",
          BroadcastPreviewContainer: "_3aLcrZxS4I4KVtUF0BdHds",
          SaleHeaderPreviewContainer: "GORXZE3lrdjE-QiVxXceW",
        };
      },
      15496: (y) => {
        y.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          ReadMoreLink: "_2mvgc6dpEDHRJlTWhGDz7h",
          MajorEventContainer: "dVJB2r43CGIAgr-Xtt4P3",
          MajorEventImageContainer: "_1PkTBeZJVs3WI8US0zffEx",
          MajorEventImage: "_25fL1JQcG1kh_9L5danMxc",
          BottomShadow: "_1ueE9cjv0hzERo311Gr6qL",
          MajoreEventImageContentContainer: "_3mREW5LJ_7jyeol7BtXcym",
          MajorEventImageTemplate: "lQR9_4nAXfydIY7zwOzSF",
          MajorEventBackground: "_388IuJImOHcpIL9kvqJdet",
          MajorEventImageBackgroundBlur: "_3sVs6YBElnuTON_cY_6ne5",
          MajorEventHeader: "_1HL2nt3zhHJo3RkMzmD-Gb",
          PartnerEventLargeImage_Title: "bYwbk-ycz_n2JnQgyrgDx",
          EventType: "_3zVyXPaFJl95Q5qnxtDpuB",
          GameIconAndName: "IltgR1LrH0neRnKq0TLxy",
          GameIcon: "_3Dkj3XaiQV2I1d2m-RRA_L",
          MajorEventSpotlightBackground: "_1ahePoGx6gPXhapzZw2L21",
          MajorEventContent: "_2nr7NuawYs9NhC8OUkY0fK",
          MajorEventTextCtn: "Ojdg2vBD3O1oroxYVU2zB",
          MajorEventTitle: "nEBZT02OOnxIbyIl9Dk44",
          MajorEventSummary: "HPngOFPPykmeXFSxcC1Zv",
          MajorEvent_Ctn: "_2_kU7nUB6wwDu-LsbQZmNc",
          AppDetailsSpotlightContainer: "_1zDJ1bfFg-UkuAluUAoGKj",
          BackgroundAnimation: "_2zmvTGYcnxB2bhgSNFXnSi",
          "ItemFocusAnim-darkerGrey-nocolor": "_2DCLV3hUeBViGvq3yTsiQE",
          "ItemFocusAnim-darkerGrey": "_1iMoXsAEHqrsXXcoaw1SIy",
          "ItemFocusAnim-darkGreySettings": "_23bSFoV4nDLAGl_G32zEdY",
          "ItemFocusAnim-darkGrey": "_1_Uo-zxJJlBTZyvRjgeG4_",
          "ItemFocusAnim-grey": "_3AjpDoqzZuBj6F7fMiO2Q-",
          "ItemFocusAnim-translucent-white-10": "_3PpKBwmAjZpmyTB-ooDvNd",
          "ItemFocusAnim-translucent-white-20": "_2k5z_bdbdZRy3o_pIFzFBF",
          "ItemFocusAnimBorder-darkGrey": "DuzyT2w758OaPfDpfQkO6",
          "ItemFocusAnim-green": "kF7es13166bQnCHSRaw6l",
          focusAnimation: "_3lfKCkcI6nWWMWFgLOGbyh",
          hoverAnimation: "_24fZDwdgB8kUq2hGCnbx88",
        };
      },
      9202: (y) => {
        y.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
          BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
          "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
          "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
          "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
          "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
          "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
          "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
          "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
          "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
          "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
          focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
          hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
        };
      },
      64734: (y) => {
        y.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      51239: (y) => {
        y.exports = {
          "duration-app-launch": "800ms",
          CategorySectionsCtn: "YuXdszLjIFoat_EbTkm8U",
          CategorySection: "_2MUQ8QBrMaSxsdhqhiN6tG",
          CategorySectionName: "_2VnsyILlZj23L2UgP3ZsMm",
          CategoriesCtn: "_3yuPyNw3DpZ_ICakOPcu4u",
          Category: "_1uwcZwdwT2vRgumGDlZbtk",
          Grid: "_3anY0OeVUh2enLVFNx50N1",
          CategoryGradient: "_27LrTrejiaFAMHuA0df3qP",
          CategoryName: "_3VNsED3Ez-vqDraw_8QWsp",
          TopLevelCategory: "_2ZYjRLgkQLHW5_cstUffIp",
          BackgroundAnimation: "_10Bfh_1KHpFNk8qNyewY_F",
          "ItemFocusAnim-darkerGrey-nocolor": "_3LFS9sVPAAjvuyGeJ1peaT",
          "ItemFocusAnim-darkerGrey": "_1S59zff-jnAxDy8rr0hHlS",
          "ItemFocusAnim-darkGreySettings": "_34Uv5_hzQOvOrw1Unrblim",
          "ItemFocusAnim-darkGrey": "Hh_85_Fjw1YP9H4vzXEu_",
          "ItemFocusAnim-grey": "_2-9pWSpKgjrjUj71iLnJo7",
          "ItemFocusAnim-translucent-white-10": "W_bdqnE_ztejA8mOAYb6D",
          "ItemFocusAnim-translucent-white-20": "_2rFvANRdudDnTxPKgIBcZd",
          "ItemFocusAnimBorder-darkGrey": "_2b9hABAip8cwkuxxNVwPSw",
          "ItemFocusAnim-green": "_3Jf28OMYy3a68jmK-GOBsc",
          focusAnimation: "MlTzZ1Co7fkjpq6p2zQ0",
          hoverAnimation: "_19RLtomnrOIiHhk5GWSMdR",
        };
      },
      44894: (y, de, o) => {
        "use strict";
        o.d(de, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
