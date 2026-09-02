/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [2414],
    {
      94381: (R, we, o) => {
        "use strict";
        o.d(we, { S: () => C });
        var e = o(7850),
          U = o(68031),
          ne = o(31857);
        function ae(O) {
          return (0, e.jsx)(ne.I, {
            ...O,
            viewBoxSize: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var q = o(21895),
          ie = o(64238),
          le = o.n(ie),
          Y = o(80549);
        function C(O) {
          const {
              checked: V,
              onChange: k,
              disabled: F,
              children: K,
              ref: Q,
              variant: ge,
              color: Te,
              align: Ie = "center",
              ...lt
            } = O,
            Ye = V === "indeterminate",
            mt = Ye ? $ : ae,
            L = () => {
              F || (k && k(Ye ? !0 : !V));
            },
            J = (me) => {
              F ||
                (me.key === " " &&
                  (L(), me.preventDefault(), me.stopPropagation()));
            },
            X = (0, Y.f)("Checkbox", ge);
          return (0, e.jsxs)(U.s, {
            align: Ie,
            ref: Q,
            role: "checkbox",
            "aria-checked": Ye ? "mixed" : V,
            "data-state": b(V),
            className: le()(q.Root, q[`Variant-${X}`], F && q.Disabled),
            onClick: L,
            tabIndex: 0,
            onKeyDown: J,
            cursor: "default",
            "aria-disabled": F,
            "data-accent-color": Te,
            ...lt,
            children: [
              (0, e.jsx)("div", {
                className: q.Checkbox,
                children: V && (0, e.jsx)(mt, { className: q.Icon }),
              }),
              K,
            ],
          });
        }
        function b(O) {
          return O === "indeterminate" ? O : O ? "checked" : "unchecked";
        }
        function $(O) {
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
      31857: (R, we, o) => {
        "use strict";
        o.d(we, { I: () => ie });
        var e = o(7850),
          U = o(69289),
          ne = o(8928),
          ae = o(16619),
          q = o.n(ae);
        function ie(Y) {
          const { viewBoxSize: C = 20, ...b } = Y,
            $ = b.size ? void 0 : ae.IconSizeDefault;
          return (0, e.jsx)("svg", {
            viewBox: `0 0 ${C} ${C}`,
            ...(0, U.mz)({ className: $, ...b }, le),
          });
        }
        const le = [
          ...ne.L,
          {
            prop: "size",
            responsive: !0,
            className: (Y) => ae[`IconSize-${Y}`],
          },
          {
            prop: "color",
            className: ae.Color,
            cssProperty: (Y) => ["--icon-color", (0, U.w7)(Y)],
          },
          {
            prop: "hitSlop",
            className: ae.HitSlop,
            cssProperty: (Y) => [
              "--hit-slop-custom",
              typeof Y == "string" ? Y : "",
            ],
          },
          ne.h.find(({ prop: Y }) => Y === "cursor"),
        ];
      },
      21042: (R, we, o) => {
        "use strict";
        o.d(we, { Sm: () => Y, U: () => ie, oR: () => $, r3: () => b });
        var e = o(73259),
          U = o(76559),
          ne = o(7582),
          ae = o(90626),
          q = o(7638);
        function ie(O, V, k) {
          const F = new e.lh();
          return (
            (F.type = V),
            (F.clanSteamID = U.b.InitFromClanID(O)),
            (F.GID = "fakeevent_" + le++),
            (F.visibility_state = e.zv.k_EEventStateUnlisted),
            (F.visibilityStartTime = (0, ne.sB)() - 1),
            (F.jsondata.bSaleEnabled = !0),
            (F.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (F.jsondata.sale_vanity_id = k),
            (F.jsondata.sale_header_offset = 0),
            (F.jsondata.sale_header_disable_top_margin = !1),
            F
          );
        }
        let le = 1234;
        function Y(O, V) {
          return {
            unique_id: le++,
            capsules: [],
            events: [],
            links: [],
            section_type: O,
            localized_label: [],
            default_label: V,
          };
        }
        const C = "socialcontent_";
        function b() {
          return {
            platforms: [
              { label: e.Zf.Steam, checked: !0 },
              { label: e.Zf.Facebook, checked: !0 },
              { label: e.Zf.Twitter, checked: !0 },
              { label: e.Zf.Reddit, checked: !0 },
            ],
            doorsEnabled: !1,
            content_options: [
              {
                unique_id: C + Math.floor(Math.random() * 1e6),
                door: void 0,
                twitter_card: e.jR.SummaryLargeImage,
                localized_option_fields: {
                  localized_header: [],
                  title: [],
                  description: [],
                  image: [],
                },
              },
            ],
          };
        }
        function $() {
          const [O, V] = ae.useState(() => !q.KN.BIsInited());
          return (
            ae.useEffect(() => {
              (async () => (await Promise.all([q.KN.InitGlobal()]), V(!1)))();
            }, []),
            O
          );
        }
      },
      91576: (R, we, o) => {
        "use strict";
        o.d(we, { _: () => $n });
        var e = o(7850),
          U = o(99412),
          ne = o(19298),
          ae = o(20169),
          q = o(28604),
          ie = o(36631),
          le = o(64387);
        function Y(r) {
          const { strURL: t } = r;
          return t
            ? (0, e.jsx)("div", {
                className: le.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var C = o(65946),
          b = o(90626),
          $ = o(73259),
          O = o(25792),
          V = o(52393),
          k = o.n(V),
          F = o(95695),
          K = o.n(F),
          Q = o(36707),
          ge = o(3166),
          Te = o(82054),
          Ie = o(68266);
        function lt(r) {
          const { event: t, bIsPreview: a } = r;
          let s = t.jsondata.sale_background_video_webm,
            i = t.jsondata.sale_background_video_mp4;
          return i || s
            ? (0, e.jsx)(O.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, Q.A)(
                    k().SaleBackground,
                    k()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    k().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: a
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    s && (0, e.jsx)("source", { src: s, type: "video/webm" }),
                    i &&
                      !ge.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: i, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function Ye(r) {
          const { event: t, language: a, children: s, bIsPreview: i } = r,
            l = b.useRef(null),
            u = (0, Ie.m0)(t, "sale_header", a),
            [v] = (0, C.q3)(() => [t.jsondata.sale_sub_menu]);
          b.useEffect(() => {
            if (!u) return;
            const w = new Image();
            (w.onload = () => {
              const S = (100 * w.width) / 950 + "%";
              l.current && l.current.style.setProperty("--background-scale", S);
            }),
              (w.src = u);
          }, [u]);
          const f = t.jsondata.sale_sections?.some(
              (w) => w.section_type === "contenthubmaincarousel",
            ),
            I =
              t.jsondata.item_source_type === $.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                f),
            j = u ? `url(${u})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              v
                ? (0, e.jsx)(Te.j, {
                    event: t,
                    language: a,
                    bIsPreview: i,
                    subMenu: v,
                    styleVariation: Te.g.k_SubMenu,
                  })
                : (0, e.jsx)(Y, { strURL: u }),
              (0, e.jsx)("div", {
                className: (0, Q.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: I,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, Q.A)(
                    k()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    k().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: t.jsondata.sale_background_color,
                  },
                  ref: l,
                  children: [
                    u && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, Q.A)(
                            K().SalePageBackground,
                            K().BackgroundImage,
                            K().Blur,
                          ),
                          src: u,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, Q.A)(
                            K().SalePageBackground,
                            K().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: j,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(lt, { event: t, bIsPreview: i }),
                    (0, e.jsx)(e.Fragment, { children: s }),
                  ],
                }),
              }),
            ],
          });
        }
        var mt = o(26589),
          L = o(39905),
          J = o(50909),
          X = o.n(J);
        function me(r) {
          const { eventModel: t } = r,
            { data: a } = (0, mt.h)(t.clanSteamID.GetAccountID());
          if (
            !a ||
            (!a.can_edit && !a.support_user) ||
            (0, ge.yK)() == "community"
          )
            return;
          const s = t.GetAllTags(),
            i = [];
          if (
            (s.includes("hide_store") &&
              i.push(
                L.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            s.includes("mod_hide_store") &&
              a.support_user &&
              i.push(L.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              s.includes("contenthub") &&
              i.push(
                L.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && i.length == 0))
          )
            return (0, e.jsx)("div", {
              className: X().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: X().WarningText,
                      children: L.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  i.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: X().WarningText,
                      children: [
                        L.Z.LocalizePlural(
                          "#Sale_SaleEventIsHidden_Reason",
                          i.length,
                        ),
                        (0, e.jsx)("ul", {
                          children: i.map((l) =>
                            (0, e.jsx)("li", { children: l }, l),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            });
        }
        var De = o(76789),
          Ee = o.n(De),
          d = o(18210);
        function ze(r) {
          const { eventModel: t, language: a } = r,
            [s, i] = (0, C.q3)(() => [
              t.jsondata.sale_logo_url,
              d.NT.GetWithFallback(t.jsondata.localized_sale_logo, a),
            ]);
          return i && i?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: Ee().SalePageLogoCtn,
                  href: ge.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(He, { ...r }),
                })
              : (0, e.jsx)("div", {
                  className: (0, Q.A)(Ee().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(He, { ...r }),
                })
            : null;
        }
        function He(r) {
          const { eventModel: t, language: a } = r,
            s = (0, Ie.m0)(t, "sale_logo", a);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var Ne = o(72865),
          at = o(71347),
          ct = o.n(at),
          dt = o(53107);
        function ht(r) {
          const { rgPresenters: t } = r;
          if (!t || t.length == 0) return null;
          const a = (0, U.sfN)(ge.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, Q.A)(
                  ct().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: L.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(nt, { presentor: t[0], lang: a }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, Q.A)(
                  ct().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: L.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((s, i) =>
                      (0, e.jsxs)(
                        b.Fragment,
                        {
                          children: [
                            (0, e.jsx)(nt, { presentor: s, lang: a }),
                            t.length > 2 && ", ",
                          ],
                        },
                        s.url,
                      ),
                    ),
                  (0, e.jsx)(nt, { presentor: t[t.length - 1], lang: a }),
                ),
              });
        }
        function nt(r) {
          const { presentor: t, lang: a } = r,
            s = (0, Ne.aL)(t.url);
          return (0, e.jsx)(dt.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: ct().PresenterLabel,
            children: d.NT.GetWithFallback(t.localized_presenter_name, a),
          });
        }
        var Pe = o(60480),
          pt = o(92757),
          E = o(18994),
          ee = o(86515),
          ft = o(64703),
          Ze = o(61478);
        function jt(r) {
          const { event: t, broadcastEmbedContext: a } = r,
            s = !!t?.jsondata?.broadcast_display_wide_player,
            i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(Ze.B, {
                event: t,
                broadcastEmbedContext: a,
                bWideBroadcastDisplay: s,
                bWideBroadcastPermitChat: i,
              }),
          });
        }
        var ke = o(24808);
        function Ge(r) {
          const {
            event: t,
            fnOnChangeDayIndex: a,
            addtionalAdminButtons: s,
          } = r;
          return (0, e.jsx)(ke.g, {
            eventModel: t,
            fnOnUpdateSaleDayIndex: a,
            addtionalAdminButtons: s,
            bSupportsSticky: !0,
          });
        }
        var Le = o(179),
          We = o(50109),
          Ve = o(30096),
          ea = o(98609),
          rt = o(57673);
        const Ot = new Map();
        function ta(r, t) {
          const a = r.findIndex((s) => s.section_type === "tabs");
          if (a >= 0 && t !== void 0) {
            const s = r[a],
              i = s.tabs?.findIndex((l) => l.unique_id === t);
            if (i !== void 0 && i >= 0 && s.tabs)
              return {
                selectedTabBackgroundDef: s.tabs[i].tab_background_img_groups,
                nTabSaleSectionIndex: a,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function ja(r, t, a) {
          const s = new Map(),
            i = new Map(),
            l = new Map();
          let u,
            v,
            f = 0;
          const { selectedTabBackgroundDef: I, nTabSaleSectionIndex: j } = ta(
            t,
            a,
          );
          if (r?.enabled) {
            const w = r.groups?.length;
            if (
              (r.groups?.forEach((B, S) => {
                if (f >= t.length || t[f].section_type == "tabs") return;
                const P = new Array();
                for (
                  let M = 0;
                  M < (B?.num_sections || 0) &&
                  f < t.length &&
                  t[f].section_type != "tabs";
                  ++M, ++f
                ) {
                  const z = t[f].unique_id;
                  P.push(z),
                    i.set(z, B.background_id),
                    M === 0 && l.set(z, B.background_id);
                }
                if (
                  (s.set(B.background_id, {
                    nBackgroundGroupID: B.background_id,
                    sectionUniqueIDs: P,
                    nSaleSectionLastIndex: f - 1,
                    nUniqueIDNextSaleSection:
                      f < t.length && (j === void 0 || f < j)
                        ? t[f].unique_id
                        : void 0,
                  }),
                  S + 1 == w && r.last_group_until_cover_section_until_end)
                )
                  for (
                    let M = f;
                    M < t.length &&
                    (!I || !I.enabled || M < j) &&
                    !(t[M].section_type == "tabs" && I?.enabled);
                    ++M
                  ) {
                    const z = t[M].unique_id;
                    i.set(z, B.background_id);
                  }
              }),
              f < t.length && (j === void 0 || f < j) && (u = t[f].unique_id),
              I?.enabled && j !== void 0)
            ) {
              let B = j;
              const S = I.groups.length;
              for (
                I.groups.forEach((P, G) => {
                  if (B >= t.length) return;
                  const M = new Array();
                  for (
                    let N = 0;
                    N < P.num_sections && B < t.length;
                    ++N, ++B
                  ) {
                    const W = t[B],
                      oe = W.unique_id;
                    (0, rt.bF)(a, W)
                      ? (M.push(oe),
                        i.set(oe, P.background_id),
                        N === 0 && l.set(oe, P.background_id))
                      : --N;
                  }
                  let D = B;
                  for (; D < t.length && !(0, rt.bF)(a, t[D]); ) D += 1;
                  if (
                    (s.set(P.background_id, {
                      nBackgroundGroupID: P.background_id,
                      sectionUniqueIDs: M,
                      nSaleSectionLastIndex: B - 1,
                      nUniqueIDNextSaleSection:
                        D < t.length ? t[D].unique_id : void 0,
                    }),
                    G + 1 == S && I.last_group_until_cover_section_until_end)
                  )
                    for (let N = B; N < t.length; ++N) {
                      const W = t[N];
                      if (W.section_type == "tabs" && I?.enabled) break;
                      (0, rt.bF)(a, W) && i.set(W.unique_id, P.background_id);
                    }
                });
                B < t.length && !(0, rt.bF)(a, t[B]);
              )
                B++;
              B < t.length && (v = t[B].unique_id);
            }
          } else t?.length > 0 && (u = t[0].unique_id);
          return {
            mapGroupToSections: s,
            nFirstSaleSectionIDWithoutGroup: u,
            mapSectionToGroup: i,
            mapFirstSectionToGroup: l,
            selectedTabBackgroundDef: I,
            nTabSaleSectionIndex: j,
            nFirstTabSectionIDWithoutGroup: v,
          };
        }
        var xe = o(29630),
          Ct = o(68434),
          pe = o(15181),
          re = o(41635),
          $e = o(81416);
        function aa(r, t, a, s) {
          let l = r.jsondata.sale_background_img_groups.groups.find(
            (u) => u.background_id === t.groupID,
          );
          return (
            !l &&
              s >= 0 &&
              (l = r
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((f) => f.unique_id == s)
                ?.tab_background_img_groups?.groups?.find(
                  (f) => f.background_id == t.groupID,
                )),
            (0, e.jsx)(
              ya,
              {
                eventModel: r,
                displayDef: l,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  l &&
                  l.randomize_section_order &&
                  a !== $e.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(Ca, {
                        clanEventGID: r.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Ca(r) {
          const { clanEventGID: t, elSaleSections: a } = r,
            [s, i] = (0, Ct.M)(`sale_section_seed_${t}`, (0, pe.m)());
          if (!a || a.length === 0) return null;
          if (a.length > 1 && s !== void 0) {
            const l = (0, pe.A)(s);
            return (0, e.jsx)(e.Fragment, { children: re.fW(a, 0, l) });
          }
          return (0, e.jsx)(e.Fragment, { children: a });
        }
        function ya(r) {
          const {
              displayDef: t,
              children: a,
              eventModel: s,
              derivedGroupInfo: i,
            } = r,
            l = (0, We.E)(),
            u = b.useCallback(
              (S, P) => {
                Ot.set(i.nBackgroundGroupID, P);
              },
              [i],
            ),
            v = (0, Ve.w6)(u);
          if (!a || (Array.isArray(a) && a.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: a });
          let f;
          if (t.localized_background_art) {
            const S = (0, U.LgB)(l),
              P =
                S in t.localized_background_art
                  ? S
                  : d.A0.GetLanguageFallback(ea.TS.LANGUAGE),
              G = t.localized_background_art[P];
            G && (f = xe.zU.GenerateURLFromHashAndExt(s.clanSteamID, G));
          }
          let I = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              I += "to bottom,";
              break;
            case "left-to-right":
              I += "to right,";
              break;
            case "top-left-to-bottom-right":
              I += "to bottom right,";
              break;
            case "single-color":
              I = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((I += " " + t.background_color1),
              (I += ", " + t.background_color2),
              (I += ")"))
            : (I = null);
          const j =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            w = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            B = {
              backgroundImage: I ? `url(${f}), ${I}` : `url(${f})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: w ? t.position_setting : void 0,
              backgroundColor: j ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: v,
            style: B,
            id: "background_group_" + t.background_id,
            children: a,
          });
        }
        var Ft = o(9807),
          Bt = o(4720),
          Mt = o(64641),
          qe = o.n(Mt),
          yt = o(36118),
          Re = o(85599),
          wt = o(71421);
        function na(r) {
          return typeof r == "string" || typeof r == "number"
            ? r
            : JSON.stringify(r);
        }
        class ra {
          Keyify = (t) => na(t);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(t) {
            return this.m_mapVisible.has(this.Keyify(t));
          }
          SortKey(t, a) {
            const s = this.m_mapVisible.get(this.Keyify(t)) || 0,
              i = this.m_mapVisible.get(this.Keyify(a)) || 0;
            return s - i;
          }
          BMarkAppVisibile(t, a) {
            const s = this.EnsureOwnerSetExists(t),
              i = this.Keyify(a);
            return (
              s.add(i),
              this.IsAlreadyVisible(a)
                ? (this.m_mapVisible.set(
                    i,
                    (this.m_mapVisible.get(i) ?? 0) + 1,
                  ),
                  !1)
                : (this.m_mapVisible.set(i, 1), !0)
            );
          }
          BMarkAppNotVisible(t, a) {
            if (!this.IsAlreadyVisible(a)) return !1;
            const s = this.EnsureOwnerSetExists(t),
              i = this.Keyify(a);
            return s.has(i) ? (this.DecrementAppVisibility(i), !0) : !1;
          }
          MarkAllAppsNotVisible(t) {
            this.m_mapOwners.has(t) &&
              (this.m_mapOwners
                .get(t)
                .forEach(this.DecrementAppVisibility.bind(this)),
              this.m_mapOwners.delete(t));
          }
          EnsureOwnerSetExists(t) {
            let a = this.m_mapOwners.get(t);
            return (
              a ||
                (this.m_mapOwners.set(t, new Set()),
                (a = this.m_mapOwners.get(t))),
              a
            );
          }
          DecrementAppVisibility(t) {
            const a = (this.m_mapVisible.get(t) ?? 0) - 1;
            a > 0 ? this.m_mapVisible.set(t, a) : this.m_mapVisible.delete(t);
          }
        }
        var At = o(71742),
          Tt = o(53113),
          be = o(64377),
          zt = o(7638);
        function Ht(r, t) {
          if (!r || !r.BIsClanAccount()) return !1;
          const a = zt.KN.Get().GetPartnerEventPermissions(r);
          return a ? (t ? a.valve_admin : a.valve_admin || a.support_user) : !1;
        }
        function St(r) {
          const { clanSteamID: t, id: a } = r;
          return Ht(t, r.requireAdmin)
            ? (0, e.jsx)("div", {
                id: a,
                className: (0, Q.A)(
                  r.className,
                  r.requireAdmin
                    ? F.ValveOnlyAdminBackground
                    : F.ValveOnlyBackground,
                ),
                children: r.children,
              })
            : null;
        }
        var Z = o(16412),
          ve = o(96538),
          _e = o(88003),
          sa = o(12932),
          Nt = o(46777),
          oa = o(79118),
          wa = o(16346),
          ia = o(61257),
          la = o(56718),
          Aa = o(27828),
          kt = o.n(Aa);
        function Sa(r) {
          return `rgba(${r.rgb.r}, ${r.rgb.g}, ${r.rgb.b}, ${r.rgb.a})`;
        }
        function ca(r) {
          const t = parseInt(r.slice(1), 16),
            a = (t >> 16) & 255,
            s = (t >> 8) & 255,
            i = t & 255;
          return `rgba(${a}, ${s}, ${i}, 1)`;
        }
        function Ea(r) {
          const { color: t, onChange: a, strTitle: s, disableAlpha: i } = r,
            [l, u] = (0, b.useState)(() => t || "rgba(255, 255, 255, 1)"),
            v = (0, b.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(L.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const j = (await new window.EyeDropper().open()).sRGBHex,
                  w = ca(j);
                u(w), a(w);
              } catch (f) {
                console.warn(L.Z.Localize("#Sale_EyeDropperFailed"), f);
              }
            }, [a]);
          return (0, e.jsxs)("div", {
            className: kt().ColorPickerDialog,
            children: [
              !!s && (0, e.jsx)(Z.JU, { children: s }),
              (0, e.jsx)(ia.xk, {
                onChange: (f) => {
                  const I = Sa(f);
                  u(I), a(I);
                },
                color: l,
                disableAlpha: i,
                className: kt().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: kt().EyeDropperCtn,
                children: (0, e.jsx)(wt.Gq, {
                  toolTipContent: L.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(Z.$n, {
                    className: kt().EyeDropperBtn,
                    onClick: v,
                    children: (0, e.jsx)(la.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function Ce(r) {
          const {
              color: t,
              onChange: a,
              onRequestClose: s,
              disableAlpha: i,
              strTitle: l,
            } = r,
            u = (0, b.useRef)(null);
          return (
            (0, b.useEffect)(() => {
              const v = u.current?.ownerDocument ?? document,
                f = (j) => {
                  u.current && !u.current.contains(j.target) && s();
                },
                I = (j) => {
                  j.key === "Escape" && s();
                };
              return (
                v.addEventListener("pointerdown", f, !0),
                v.addEventListener("keydown", I, !0),
                () => {
                  v.removeEventListener("pointerdown", f, !0),
                    v.removeEventListener("keydown", I, !0);
                }
              );
            }, [s]),
            (0, e.jsx)("div", {
              ref: u,
              children: (0, e.jsx)(Ea, {
                color: t,
                disableAlpha: i,
                strTitle: l ?? L.Z.Localize("#Button_Color"),
                onChange: a,
              }),
            })
          );
        }
        function vt() {
          return {
            openColorPicker: (0, b.useCallback)((t, a) => {
              let s = null;
              const i = () => s?.Hide();
              s = (0, wa.lX)(
                (0, e.jsx)(Ce, {
                  color: a.color,
                  disableAlpha: a.disableAlpha,
                  strTitle: a.strTitle,
                  onChange: a.onChange,
                  onRequestClose: i,
                }),
                t,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
        var _a = o(13447),
          Qe = o.n(_a),
          Lt = o(32190),
          Pt = o.n(Lt),
          Ke = o(76559),
          Yt = o(75909),
          Ue = o(53424),
          da = o(72604),
          xt = o(41735),
          Et = o.n(xt),
          Gt = o(14947),
          st = o(9046),
          Da = Object.defineProperty,
          Ba = Object.getOwnPropertyDescriptor,
          Wt = (r, t, a, s) => {
            for (
              var i = s > 1 ? void 0 : s ? Ba(t, a) : t, l = r.length - 1, u;
              l >= 0;
              l--
            )
              (u = r[l]) && (i = (s ? u(t, a, i) : u(i)) || i);
            return s && i && Da(t, a, i), i;
          };
        const Rt = class on {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, Gt.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, a, s, i) {
            let l =
                ge.TS.COMMUNITY_BASE_URL +
                "gid/" +
                a.ConvertTo64BitString() +
                "/hasclanimagefile",
              u = { image_hash_and_ext: s, lang: "" + i };
            return (
              (await Et().get(l, { params: u, cancelToken: t && t.token })).data
                .success == da.R
            );
          }
          SetPrimaryImageForImageGroup(t, a) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != t.imageid ||
              a != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: t,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = a),
              (this.m_curLocImageGroup.localized_images = (0, re.$Y)(
                this.m_curLocImageGroup.localized_images,
                U.bP9,
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
          GetLocalizedImageGroupForEditAsURL(t, a) {
            if (this.m_curLocImageGroup) {
              let s = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[a]
                ? this.m_curLocImageGroup.localized_images[a]
                : xe.zU.GenerateURLFromHashAndExt(
                    t,
                    xe.zU.GetHashAndExt(s) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const a = this.m_curLocImageGroup.primaryImage,
              s = Ke.b.InitFromClanID(a.clanAccountID),
              i = xe.zU.GetHashAndExt(a) ?? "",
              l = [];
            for (let v = U.Bhc; v < U.bP9; ++v)
              l.push(on.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, i, v));
            const u = await Promise.all(l);
            (0, Gt.h5)(() => {
              for (let v = U.Bhc; v < U.bP9; ++v)
                u[v] &&
                  (this.m_curLocImageGroup.localized_images[v] =
                    xe.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      i,
                      st.wI.full,
                      v,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, a, s) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = s
                ? xe.zU.GenerateURLFromHashAndExtAndLang(
                    a,
                    s,
                    st.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, a) {
            if (!this.m_curLocImageGroup) return;
            let s = this.m_curLocImageGroup.primaryImage;
            if (s?.image_hash == t) {
              const i = Ke.b.InitFromClanID(s.clanAccountID),
                l = xe.zU.GetHashAndExt(s);
              l &&
                (this.m_curLocImageGroup.localized_images[a] =
                  xe.zU.GenerateURLFromHashAndExtAndLang(
                    i,
                    l,
                    st.wI.full,
                    a,
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
              .map((s) => xe.zU.GetHashAndExtFromURL(s));
          }
        };
        Wt([Gt.sH], Rt.prototype, "m_curLocImageGroup", 2);
        let ua = Rt;
        const Oe = new ua();
        var ot = o(38410),
          Ut = o(34592),
          ga = o(75844),
          et = o(32093),
          Vt = o(72849),
          Ma = o(64),
          Ta = o(72739),
          _t = o(82734);
        function Na(r, t) {
          const a = b.useRef(void 0),
            s = b.useCallback(
              (u) => {
                u.currentTarget.files.length > 0 &&
                  (r(u.currentTarget.files), (u.currentTarget.value = ""));
              },
              [r],
            ),
            i = b.useCallback(() => a.current.click(), []);
          return [
            Ta.createPortal(
              (0, e.jsx)("form", {
                onSubmit: Dt,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...t,
                  type: "file",
                  ref: a,
                  onChange: s,
                }),
              }),
              window.document.body,
            ),
            i,
          ];
        }
        function ma(r) {
          const [t, a] = b.useState(!1),
            s = b.useCallback((f) => {
              ((f.dataTransfer.files && f.dataTransfer.files[0]) ||
                (f.dataTransfer.types && f.dataTransfer.types[0] == "Files")) &&
                a(!0);
            }, []),
            i = b.useCallback((f) => {
              _t.NO(f) && a(!1);
            }, []),
            l = b.useCallback(() => a(!1), []),
            u = t ? Dt : void 0,
            v = b.useCallback(
              (f) => {
                f.dataTransfer.files?.length &&
                  (r(f.dataTransfer.files, f),
                  f.preventDefault(),
                  f.stopPropagation()),
                  a(!1);
              },
              [r],
            );
          return [
            {
              onDragEnter: s,
              onDragLeave: i,
              onDragEnd: l,
              onDragOver: u,
              onDrop: v,
            },
            t,
          ];
        }
        async function ka(r, t = 1e3) {
          return await new Promise((a, s) => {
            const i = new Image();
            (i.src = r),
              (i.onload = () => a("success")),
              (i.onerror = () => a("error")),
              t > 0 && window.setTimeout(() => a("timeout"), t);
          });
        }
        function Dt(r) {
          r.preventDefault();
        }
        function Xa(r) {
          switch (r.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const t = r.name.match(/(?<=\.)[^.]+$/);
              return t ? t[0] : void 0;
          }
        }
        var Kt = o(71647),
          It = o.n(Kt);
        function La(r) {
          const {
              onDropFiles: t,
              renderDesciption: a,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: i,
            } = r,
            [l, u] = ma(t),
            [v, f] = Na(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...l,
            className: (0, Q.A)(
              u ? It().DragAndDropContainerDragging : It().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!a && a(),
              (0, e.jsx)("div", {
                children: i || (0, d.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: It().ImageUploadBar,
                children: [
                  v,
                  (0, e.jsxs)("label", {
                    onClick: f,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, d.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: It().SelectImageButton,
                        children: (0, d.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              s,
              r.children,
            ],
          });
        }
        var Pa = o(21254),
          Ga = o(27344),
          Be = o.n(Ga),
          Ra = o(9472);
        function ha(r) {
          const {
              imageUploader: t,
              fnUploadComplete: a,
              elOverrideDragAndDropText: s,
              forceResolution: i,
              elAdditonalButtons: l,
              rgRealmList: u,
            } = r,
            [v, f] = (0, C.q3)(() => [
              t.GetUploadImages(),
              We.O.Get().GetCurEditLanguage(),
            ]),
            I = b.useCallback(
              async (B) => {
                let S = Array.from(B),
                  P = !0;
                for (let G = 0; G < S.length; G++) {
                  const M = S[G],
                    { language: D } = (0, ot.jj)(M?.name, f);
                  try {
                    const z = (0, ot.PD)(D, f, u);
                    (P = await t.AddImageForLanguage(M, z)),
                      P ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            G +
                            " file=" +
                            M.name,
                        ),
                        (0, _e.pg)(
                          (0, e.jsx)(ve.KG, {
                            strDescription: (0, d.we)(
                              "#ImagePicker_Error",
                              M.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (z) {
                    let N = (0, Ut.H)(z);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + N.strErrorMsg,
                      N,
                    ),
                      (0, _e.pg)(
                        (0, e.jsx)(ve.KG, {
                          strDescription: (0, d.we)(
                            "#EventError_Code",
                            N.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return P;
              },
              [f, t, u],
            ),
            j = b.useMemo(
              () =>
                l instanceof Array
                  ? l
                  : [
                      (0, e.jsx)(
                        b.Fragment,
                        { children: l },
                        "elAdditonalButtons",
                      ),
                    ],
              [l],
            );
          (0, C.q3)(() =>
            v.map((B) => ({ a: B.GetCurrentImageOption(), b: B.language })),
          );
          const w = async () => {
            const B = await t.UploadAllImages(i);
            a?.(B);
          };
          return (0, e.jsxs)(La, {
            onDropFiles: I,
            elAdditonalButtons: j,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(b.Fragment, {
                children: (0, e.jsx)("div", {
                  className: Be().UploadPreviewCtn,
                  children: v.map((B) =>
                    (0, e.jsx)(
                      pa,
                      {
                        asset: B,
                        forceResolution: i,
                        fnOnRemove: () => t.DeleteUploadImage(B),
                        languageRealms: u,
                      },
                      "arttabupload_" + B.filename + "_" + B.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Zt, { imageUploader: t, fnOnUploadImageRequested: w }),
            ],
          });
        }
        function Zt(r) {
          const { imageUploader: t, fnOnUploadImageRequested: a } = r,
            [s] = (0, C.q3)(() => [t.GetUploadImages()]),
            i = s.some((u) => u.status == "pending"),
            l = s.some(
              (u) =>
                u.status == "waiting" ||
                u.status == "uploading" ||
                u.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: Be().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)(Z.$n, {
                  style: { margin: "8px" },
                  onClick: a,
                  disabled: !i,
                  children: (0, d.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)(Z.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: l,
                  children: (0, d.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function Ja(r, t, a, s, i) {
          let l = new Array();
          return (
            r.GetUploadImages().forEach((u) => {
              l.push(
                jsx(
                  pa,
                  {
                    asset: u,
                    forceResolution: a,
                    forceFileType: s,
                    fnOnRemove: () => r.DeleteUploadImage(u),
                    languageRealms: i,
                  },
                  t + u.file + "_" + u.uploadTime,
                ),
              );
            }),
            l
          );
        }
        const pa = (0, ga.PA)(Ua);
        function Ua(r) {
          const t = (S) => {
              if (S instanceof Ma.M7) {
                S.ResetImage();
                const P = window,
                  G = (0, e.jsx)(Pa.q, {
                    ownerWin: P,
                    uploadFile: S,
                    forceResolution: r.forceResolution,
                    fileType: r.forceFileType || Vt.bg.dU,
                  });
                (0, _e.HT)(G, P, "CropModal", {
                  strTitle: (0, d.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  S.fileType,
                  JSON.stringify(S.GetCurrentImageOption()),
                );
            },
            { asset: a, fnOnRemove: s, languageRealms: i } = r,
            l = a.ImageOptions?.map((S) => {
              let P = S?.fnGetLabelText(),
                G;
              S.bEnforceDimensions && (P += ` - ${S.width}x${S.height}`),
                S.bDeprecated &&
                  ((P += ` ${(0, d.we)("#ImageUpload_Deprecated")}`),
                  (G = (0, d.we)("#ImageUpload_Deprecated_ttip")));
              let M;
              return (
                (a.BIsOriginalMinimumDimensions(S) &&
                  a.FileTypeMatchesImageTypes(S)) ||
                  (M = Be().ImageDimensionTooSmall),
                { label: P, data: S, strOptionClass: M, tooltip: G }
              );
            }).filter((S) => !S.data.bHiddenFromDropdown),
            u = {
              pending: (0, d.we)("#ImageUpload_Pending"),
              waiting: (0, d.we)("#ImageUpload_Waiting"),
              uploading: (0, d.we)("#ImageUpload_Uploading"),
              processing: (0, d.we)("#ImageUpload_Processing"),
              success: (0, d.we)("#ImageUpload_SuccessCard"),
              failed: (0, d.we)("#ImageUpload_Failed"),
            },
            v = a.BSupportsLanguages()
              ? za(
                  d.A0.GetLanguageListForRealms(
                    i ?? [et.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            f = a.IsValidAssetType(r.forceResolution, r.forceFileType),
            I = a.status == "pending";
          let j = u[a.status];
          a.status == "pending" &&
            (f.needsCrop
              ? (j = (0, d.we)("#ImageUpload_NeedsCrop"))
              : f.error && (j = (0, d.we)("#ImageUpload_Invalid")));
          let w;
          const B = a.GetCurrentImageOption();
          return (
            B && (w = l?.find((S) => S.data.sKey == B.sKey)?.data),
            w || (w = l?.[0]?.data),
            (0, e.jsxs)("div", {
              className: Be().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: Be().UploadPreviewDelete,
                  onClick: () => s(a),
                  children: (0, e.jsx)(yt.sED, {}),
                }),
                (0, e.jsx)(Oa, { asset: a }),
                v &&
                  (0, e.jsx)(Z.m, {
                    strDropDownClassName: K().DropDownScroll,
                    rgOptions: v,
                    selectedOption: a.language,
                    onChange: (S) => (a.language = S.data),
                    disabled: !I,
                  }),
                l &&
                  l?.length > 1 &&
                  (0, e.jsx)(Z.m, {
                    label: a.GetImageOptionLabel(),
                    rgOptions: l,
                    selectedOption: w,
                    onChange: (S) => a.SetCurrentImageOption(S.data),
                    disabled: !I,
                  }),
                I &&
                  f.warnings?.map((S, P) =>
                    (0, e.jsx)(
                      "div",
                      { className: Be().UploadPreviewWarning, children: S },
                      `warning${P}`,
                    ),
                  ),
                I &&
                  f.messages?.map((S, P) =>
                    (0, e.jsx)(
                      "div",
                      { className: Be().UploadPreviewMessage, children: S },
                      `message${P}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, Q.A)({
                    [K().FlexColumnContainer]: !0,
                    [Be().UploadPreviewError]: a.status == "failed",
                  }),
                  children: [
                    j,
                    (0, Ra.o)(a.status) &&
                      (0, e.jsx)("div", {
                        className: qe().FlexCenter,
                        children: (0, e.jsx)(Re.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Be().UploadPreviewError,
                  children: a.message,
                }),
                I &&
                  f.error &&
                  (0, e.jsx)("div", {
                    className: Be().UploadPreviewError,
                    children: f.error,
                  }),
                I &&
                  f.needsCrop &&
                  (0, e.jsx)(Z.jn, {
                    onClick: () => t(a),
                    children: (0, d.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function Oa(r) {
          const { asset: t } = r;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: Be().PreviewImgCtn,
                onClick: (a) =>
                  (0, _e.pg)((0, e.jsx)(Fa, { asset: t }), (0, _t.uX)(a)),
                children: [
                  (0, e.jsxs)("span", {
                    className: Be().PreviewImgInfo,
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
                className: Be().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: Be().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function Fa(r) {
          const { asset: t, closeModal: a } = r;
          return (0, e.jsx)(ve.o0, {
            bAlertDialog: !0,
            closeModal: a,
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
        function za(r) {
          const t = [],
            a = new Array();
          for (const s of r) {
            if (s == U.X51) continue;
            const i = (0, d.we)("#Language_" + (0, U.LgB)(s));
            a.push({ label: i, data: s });
          }
          return (
            a.sort((s, i) => s.label.localeCompare(i.label)),
            a.forEach((s) => t.push({ label: s.label, data: s.data })),
            a
          );
        }
        var tt = ((r) => (
          (r[(r.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (r[(r.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (r[(r.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (r[(r.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          r
        ))(tt || {});
        function Qt(r, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${r.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(r)}`
            : `${k_ClanImageReplacementToken}/${r.clanAccountID}/${ClanImageUtils.GetHashAndExt(r)}`;
        }
        function $a(r, t, a) {
          let s = "";
          const i = Qt(t);
          if (a == 4)
            (s = "[video webm="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (s += i),
              (s += " mp4="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (s += i),
              (s += " autoplay=true controls=false][/video]");
          else if (a == 2) s = "[img]" + i + "[/img]";
          else {
            const l = Qt(t, !0);
            s = "[url=" + i + "][img]" + l + "[/img][/url]";
          }
          r.InsertText(s);
        }
        var Ha = o(55436),
          Xt = o(53732),
          Me = o.n(Xt),
          je = o(49460);
        function Ya(r) {
          const { fnSetImageSearch: t } = r,
            a = (0, b.useRef)(null);
          return (0, e.jsx)("div", {
            className: je.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: a,
              className: je.SearchInput,
              type: "text",
              placeholder: (0, d.we)("#ImagePicker_Search"),
              onChange: (s) => t(s.currentTarget.value),
              onKeyDown: (s) => {
                s.key == "Escape" &&
                  (t(""), a.current && (a.current.value = ""));
              },
            }),
          });
        }
        const Wa = b.memo(function (t) {
          const {
            fileNameSearch: a,
            clanAccountID: s,
            imageInsertCallBack: i,
            fnOnExpandImage: l,
            showImageActions: u = !0,
            InternalOpenLocalizeImageGroup: v,
          } = t;
          return (0, e.jsx)(fa, {
            clanAccountID: s,
            fileNameSearch: a,
            children: (f, I) =>
              f.map((j) =>
                (0, e.jsx)(
                  n,
                  {
                    clanImage: j,
                    searchStringHilight: I,
                    imageInsertCallBack: i,
                    showImageActions: u,
                    fnOnOpenLocalizedImageGroup: v,
                    OnImageClick: l,
                  },
                  j.imageid,
                ),
              ),
          });
        });
        function fa(r) {
          const { clanAccountID: t, fileNameSearch: a, children: s } = r,
            i = (0, Ue.n9)(t),
            l = a.trim().toLowerCase() || "",
            u = Ue.pU.GetFilteredClanImagesList(i, l);
          if (u.length == 0) {
            const v = Ke.b.InitFromClanID(t);
            let f = Ue.pU.GetLoadState(v);
            return f && f.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: Me().ResultNotification,
                    children:
                      l.length > 0
                        ? (0, d.we)("#ImagePicker_EmptySearch")
                        : (0, d.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : f && f.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: Me().ErrorCode,
                      children: (0, d.we)("#ImagePicker_Error", f.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: Me().ResultNotification,
                      children: (0, d.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return s(u, l);
        }
        function m(r) {
          const {
            clanAccountID: t,
            fileNameSearch: a,
            onImageSelected: s,
            selectedItem: i,
          } = r;
          return jsx(fa, {
            clanAccountID: t,
            fileNameSearch: a,
            children: (l) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: l.map((u) =>
                  jsx(
                    h,
                    { clanImage: u, selected: u == i, onImageSelected: s },
                    u.imageid,
                  ),
                ),
              }),
          });
        }
        function n(r) {
          const {
              clanImage: t,
              searchStringHilight: a,
              imageInsertCallBack: s,
              OnImageClick: i,
              showImageActions: l,
              fnOnOpenLocalizedImageGroup: u,
            } = r,
            [v, f] = b.useState(!1),
            I = () => s(t, tt.k_eInsertFullImage),
            j = () => s(t, tt.k_eInsertVideo),
            w = () => s(t, tt.k_eInsertThumbnail),
            B = (he) => {
              t.url &&
                (he.dataTransfer.setData("text", t.url),
                Ue.pU.GetClanImageDragListener().forEach((Ae) => {
                  let Je = Ke.b.InitFromClanID(t.clanAccountID);
                  Ae(Je, !0);
                }));
            },
            S = (he) => {
              t.url &&
                Ue.pU.GetClanImageDragListener().forEach((Ae) => {
                  let Je = Ke.b.InitFromClanID(t.clanAccountID);
                  Ae(Je, !1);
                });
            },
            P = (he) => {
              (0, _e.pg)(
                (0, e.jsx)(ve.o0, {
                  strTitle: (0, d.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: M,
                  onCancel: D,
                  closeModal: D,
                  children: (0, e.jsxs)(b.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, d.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, d.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, _t.uX)(he) ?? window,
              );
            },
            G = (he) => {
              console.log("ClanImageWrapper on delete error: " + he),
                (0, _e.pg)(
                  (0, e.jsx)(ve.KG, {
                    strTitle: (0, d.we)("#Error_FailureNotice"),
                    strDescription: (0, d.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: he }),
                  }),
                  window,
                );
            },
            M = () => {
              f(!0);
              let he = Ke.b.InitFromClanID(t.clanAccountID);
              Ue.pU
                .DeleteClanImage(he, t)
                .then((Ae) => {
                  Ae.success != da.R && G((0, Ut.H)(Ae).strErrorMsg), f(!1);
                })
                .catch((Ae) => {
                  G((0, Ut.H)(Ae).strErrorMsg), f(!1);
                }),
                D();
            },
            D = () => {},
            z = () => {
              i && i(t);
            },
            N = t.file_name ? t.file_name : "",
            W = (0, Ha.r)(a, N, String(t.imageid), Me().Hilight),
            oe = xe.zU.BIsClanImageVideo(t),
            ce = l && !v && !oe,
            fe = l && !v && !oe,
            ut = l && !v && oe,
            de = l && !v && !oe;
          return (0, e.jsx)(be.K, {
            placeholderHeight: "100vh",
            className: Me().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: Me().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: Me().ImageWrapper,
                  style: {
                    backgroundImage: oe ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: B,
                  onDragEnd: S,
                  onDoubleClick: I,
                  onClick: z,
                  children: (0, e.jsx)(g, {
                    clanImage: t,
                    className: Me().VideoBackground,
                  }),
                }),
                ce &&
                  (0, e.jsx)("span", {
                    className: Me().Full,
                    onClick: I,
                    children: (0, d.we)("#ImagePicker_FullSize"),
                  }),
                v &&
                  (0, e.jsx)(Re.t, {
                    size: "medium",
                    className: Me().FloatingThrobber,
                  }),
                fe &&
                  (0, e.jsx)("span", {
                    className: Me().Thumb,
                    onClick: w,
                    children: (0, d.we)("#ImagePicker_Thumbnail"),
                  }),
                de &&
                  u &&
                  (0, e.jsx)(c, {
                    bDeleting: v,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: u,
                  }),
                ut &&
                  (0, e.jsx)("span", {
                    className: Me().Full,
                    onClick: j,
                    children: (0, d.we)("#ImagePicker_Video"),
                  }),
                !v &&
                  (0, e.jsx)("span", {
                    className: Me().Delete,
                    onClick: P,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: Me().ImageWrapperFilename,
                  title: N,
                  children: W,
                }),
              ],
            }),
          });
        }
        function c(r) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: a,
              bDeleting: s,
            } = r,
            i = (0, zt.Ec)(t.clanAccountID);
          return s || !i.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, Q.A)(Me().Localized, K().ValveOnlyBackground),
                onClick: () => a?.(t),
                children: "(VO) " + (0, d.we)("#ImagePicker_Localized"),
              });
        }
        function g(r) {
          const { clanImage: t, className: a } = r;
          return xe.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: a,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == Vt.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function h(r) {
          const { clanImage: t, onImageSelected: a, selected: s } = r;
          return jsxs("div", {
            className: classnames(
              styles.ClanImageGridItem,
              s && styles.Selected,
            ),
            onClick: () => a(t, !1),
            onDoubleClick: () => a(t, !0),
            title: t.file_name,
            children: [
              jsx("div", {
                className: styles.ImgCtn,
                children: ClanImageUtils.BIsClanImageVideo(t)
                  ? jsx(g, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function p(r) {
          const { clanSteamID: t, closeModal: a, OnClanImageSelected: s } = r,
            i = b.useCallback(
              (v, f) => {
                s?.(v, f), a?.();
              },
              [s, a],
            ),
            [l, u] = b.useState("");
          return (0, e.jsxs)(ve.o0, {
            strTitle: (0, d.we)("#ImagePicker_Images"),
            strDescription: (0, d.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: a,
            onCancel: a,
            children: [
              (0, e.jsx)(Ya, { fnSetImageSearch: u }),
              (0, e.jsx)(Wa, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: l,
                imageInsertCallBack: i,
                showImageActions: !1,
              }),
            ],
          });
        }
        function x(r) {
          const { clanSteamID: t, OnClanImageSelected: a } = r;
          return (0, e.jsxs)("div", {
            className: It().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, d.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: It().SelectImageButton,
                    children: (0, d.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (s) => {
                  (0, _e.pg)(
                    (0, e.jsx)(p, { clanSteamID: t, OnClanImageSelected: a }),
                    (0, _t.uX)(s) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function A(r) {
          const {
              clanSteamID: t,
              rgSupportArtwork: a,
              localizedPrimaryImage: s,
              bAllowPreviousClanImageSelection: i,
              fnSetImageURL: l,
              rgRealmList: u,
            } = r,
            [v] = (0, C.q3)(() => [We.O.Get().GetCurEditLanguage()]),
            f = (0, Yt.zO)(t, a, s),
            I = r.uploaderOverride || f,
            [j, w] = b.useState(!1),
            B = b.useCallback(
              async (G, M) => {
                if (!j) {
                  w(!0);
                  try {
                    const { language: D } = (0, ot.jj)(G.file_name ?? "", v),
                      z = (0, ot.PD)(D, v, u);
                    await I.AddExistingClanImage(G, z);
                  } catch (D) {
                    let z = (0, Ut.H)(D);
                    console.error("AddExistingClanImage: " + z.strErrorMsg, z),
                      (0, _e.pg)(
                        (0, e.jsx)(ve.KG, {
                          strDescription: (0, d.we)(
                            "#EventError_Code",
                            z.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  w(!1);
                }
              },
              [j, I, v, u],
            ),
            S = b.useMemo(
              () =>
                i
                  ? [
                      [
                        (0, e.jsx)(
                          x,
                          { clanSteamID: t, OnClanImageSelected: B },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [B, i, t],
            ),
            P = (G) => {
              for (const M of G) {
                const D = M.uploadResult;
                if (D?.origimagehash) {
                  const z = (0, ot.PD)(D.language, v, u);
                  Oe.AddLocalizeImageUploaded(D.origimagehash, z);
                } else {
                  const z = Ue.pU.GetClanImageByImageHash(
                      t,
                      D?.image_hash ?? "",
                    ),
                    N = M.image.GetCurrentImageOption();
                  if (z && N) {
                    const W = (0, ot.PD)(M.image.language, v, u);
                    l(N.artworkType, z, W);
                  }
                }
              }
            };
          return (0, e.jsx)(ha, {
            ...r,
            imageUploader: I,
            rgRealmList: u,
            elAdditonalButtons: j
              ? [
                  (0, e.jsx)(
                    Re.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, d.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : S,
            fnUploadComplete: P,
          });
        }
        var y = o(25279),
          H = o(84676),
          T = o(25359),
          _ = o.n(T),
          ue = o(24806);
        function se(r) {
          const {
              clanImage: t,
              closeModal: a,
              lang: s,
              fnOnArtworkLangChange: i,
              realms: l,
              fnLangHasData: u,
            } = r,
            [v, f] = (0, b.useState)(s),
            I = Ke.b.InitFromClanID(t.clanAccountID),
            j = (0, C.q3)(() =>
              xe.zU.GenerateURLFromHashAndExt(I, xe.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(ve.o0, {
            strTitle: (0, d.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, d.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => i?.(t, s, v),
            onCancel: a,
            closeModal: a,
            children: (0, e.jsxs)("div", {
              className: (0, Q.A)(K().FlexColumnContainer, _().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: _().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: _().ArtworkPreview,
                    src: j,
                  }),
                }),
                (0, e.jsx)(ue.Ng, {
                  selectedLang: v,
                  fnLangHasData: u,
                  fnOnLanguageChanged: f,
                  realms: l,
                }),
              ],
            }),
          });
        }
        var te = o(56330);
        function ye(r) {
          if (!r) return r;
          const t = r.lastIndexOf(".");
          return t === -1 ? r : r.substring(0, t);
        }
        var Xe = o(58483),
          va = o(82385),
          Va = o(82206),
          ln = o(95174),
          cn = o(9709),
          Ka = o(64868),
          dn = o(44894);
        const un =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var gn = o(11243);
        function mn(r) {
          const {
            clanSteamID: t,
            fnGetImageHash: a,
            fnLangHasData: s,
            fnOnRemoveImage: i,
          } = r;
          (0, Ue.mr)(t.GetAccountID());
          const l = b.useMemo(() => {
              let I = new Array();
              const j = d.A0.GetLanguageListForRealms([
                et.TU.k_ESteamRealmGlobal,
                et.TU.k_ESteamRealmChina,
              ]);
              for (const w of j) {
                const B = a(w);
                if (B) {
                  const S = (0, U.LgB)(w),
                    P = (0, d.we)("#Language_" + S);
                  I.push({ lang: w, strLang: S, locLang: P, imgHash: B });
                }
              }
              return (
                (I = I.sort((w, B) =>
                  w.locLang > B.locLang ? 1 : w.locLang < B.locLang ? -1 : 0,
                )),
                I
              );
            }, [a]),
            [u, v, f] = (0, Ka.uD)();
          return (0, e.jsxs)("div", {
            className: _().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: _().SelectImageTitle,
                children: (0, d.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: _().LanguageListContainer,
                children: l.map((I) =>
                  (0, e.jsx)(
                    hn,
                    { langData: I, ...r },
                    "lang_select_" + t.GetAccountID() + " " + I.strLang,
                  ),
                ),
              }),
              !!i &&
                (0, e.jsxs)(Z.$n, {
                  onClick: v,
                  children: [
                    (0, d.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(gn.o, {
                      tooltip: (0, d.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(ve.EN, {
                active: u,
                children: (0, e.jsx)(ve.o0, {
                  strTitle: (0, d.we)("#Dialog_AreYouSure"),
                  strDescription: (0, d.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: f,
                  onOK: () => {
                    for (let I = 0; I < U.bP9; I++) s && i && s(I) && i(I);
                  },
                }),
              }),
            ],
          });
        }
        function hn(r) {
          const {
              clanSteamID: t,
              langData: a,
              langOverride: s,
              fnOnLanguagePreviewChange: i,
              fnOnArtworkLangChange: l,
              fnOnRemoveImage: u,
            } = r,
            [v, f] = (0, C.q3)(() => {
              const I = Ue.pU.GetClanImageByImageHash(t, a.imgHash);
              let j = "";
              I &&
                (j = xe.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  xe.zU.GetHashAndExt(I),
                  st.wI.full,
                  a.lang,
                ));
              let w = _().LanguageSelectorSelected;
              return (
                s != a.lang &&
                  (w = a.imgHash
                    ? _().LanguageSelector
                    : _().LanguageSelectorNoData),
                [j, w]
              );
            });
          return (0, e.jsxs)("div", {
            id: a.strLang,
            className: _().LanguageContainer,
            onClick: (I) => {
              let j = (0, U.sfN)(I.currentTarget.id);
              i(j);
            },
            children: [
              (0, e.jsx)("div", { className: f, children: a.locLang }),
              (0, e.jsxs)("span", {
                className: _().LanguageOptions,
                children: [
                  !!v &&
                    (0, e.jsx)("a", {
                      href: v,
                      target: "_blank",
                      children: (0, e.jsx)(wt.he, {
                        toolTipContent: (0, d.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: yt.YNO(),
                      }),
                    }),
                  !!l && (0, e.jsx)(pn, { ...r }),
                  !!u && (0, e.jsx)(fn, { fnOnRemoveImage: u, langData: a }),
                ],
              }),
            ],
          });
        }
        function pn(r) {
          const {
              clanSteamID: t,
              langData: a,
              fnOnArtworkLangChange: s,
              fnGetImageHash: i,
              fnLangHasData: l,
              realms: u,
            } = r,
            [v, f, I] = (0, Ka.uD)(),
            j = (0, C.q3)(() => {
              const w = i(a.lang);
              return (
                (0, At.wT)(
                  !w || !w.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + w,
                ),
                Ue.pU.GetClanImageByImageHash(t, w)
              );
            });
          if (!j) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(wt.he, {
                toolTipContent: (0, d.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: un,
                  onClick: () => f(),
                }),
              }),
              (0, e.jsx)(O.tH, {
                children: (0, e.jsx)(ve.EN, {
                  active: v,
                  children: (0, e.jsx)(se, {
                    clanImage: j,
                    lang: a.lang,
                    fnOnArtworkLangChange: s,
                    fnLangHasData: l,
                    realms: u,
                    closeModal: I,
                  }),
                }),
              }),
            ],
          });
        }
        function fn(r) {
          const { fnOnRemoveImage: t, langData: a } = r,
            [s, i, l] = (0, Ka.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(wt.he, {
                toolTipContent: (0, d.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: dn.A,
                  onClick: i,
                }),
              }),
              (0, e.jsx)(O.tH, {
                children: (0, e.jsx)(ve.EN, {
                  active: s,
                  children: (0, e.jsx)(ve.o0, {
                    strTitle: (0, d.we)("#selectimage_remove_image"),
                    strDescription: (0, d.we)(
                      "#selectimage_remove_details",
                      (0, d.we)("#Language_" + (0, U.LgB)(a.lang)),
                    ),
                    onOK: () => {
                      t(a.lang);
                    },
                    closeModal: l,
                  }),
                }),
              }),
            ],
          });
        }
        var Za = o(13465),
          vn = o(21659),
          xn = o(15496),
          Fe = o.n(xn),
          In = o(88812);
        function bn(r) {
          const {
              event: t,
              spotlightURLOverride: a,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: i,
              fnFilterImageURLsForKnownFailures: l,
              langOverride: u,
            } = r,
            v = (0, vn.c5)(),
            f = b.useCallback(
              (D) => {
                D.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            I = u || (0, U.sfN)(ge.TS.LANGUAGE),
            [j, w, B] = (0, C.q3)(() => [
              t.GetSummaryWithFallback(I),
              t.GetNameWithFallback(I),
              t.BShowLibrarySpotlightText(),
            ]);
          let S = "spotlight",
            P = st.wI.spotlight_main;
          (t.appid == 2434320 || ge.TS.EUNIVERSE == U.Rv) &&
            ((S = v
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (P = st.wI.full));
          let G =
            (0, In.WC)(a !== void 0 ? void 0 : t, S, I, P) ??
            (a !== void 0 ? [a] : []);
          l && G && (G = l(G));
          const M = j.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(b.Fragment, {
            children: (0, e.jsx)("div", {
              className: Fe().MajorEvent_Ctn,
              ref: r.containerRef,
              children: (0, e.jsxs)(ne.Z, {
                className: (0, Q.A)(
                  Fe().AppDetailsSpotlightContainer,
                  Fe().MajorEventContainer,
                ),
                onActivate: f,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: Fe().MajorEventBackground,
                    children: (0, e.jsx)(Za.c, {
                      className: Fe().MajorEventImageBackgroundBlur,
                      rgSources: G,
                      onIncrementalError: (D, z, N) => i && i(z),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: Fe().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(Za.c, {
                        className: Fe().MajorEventImage,
                        rgSources: G,
                        onIncrementalError: (D, z, N) => i && i(z),
                      }),
                      (0, e.jsx)("div", {
                        className: Fe().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: Fe().MajoreEventImageContentContainer,
                        children:
                          B &&
                          (0, e.jsxs)("div", {
                            className: Fe().MajorEventContent,
                            children: [
                              (0, e.jsx)(Za.c, {
                                className: Fe().MajorEventSpotlightBackground,
                                rgSources: G,
                                onIncrementalError: (D, z, N) => i && i(z),
                              }),
                              (0, e.jsxs)("div", {
                                className: Fe().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Fe().MajorEventTitle,
                                    children: w,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Fe().MajorEventSummary,
                                    children: M,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: Fe().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var jn = o(79949),
          Se = o.n(jn);
        function Cn(r) {
          const {
              langOverride: t,
              artworkType: a,
              fnOnLanguagePreviewChange: s,
              clanSteamID: i,
              eventModel: l,
              partnerEventStore: u,
              fnOnRemoveImage: v,
              fnOnArtworkLangChange: f,
              realms: I,
              fnLangHasData: j,
              fnGetImageHashAndExt: w,
            } = r,
            B = w(a, t),
            S = B
              ? xe.zU.GenerateURLFromHashAndExtAndLang(i, B, st.wI.full, t)
              : "",
            [P] = (0, C.q3)(() => [_n(a, w)]);
          return P == 0
            ? (0, e.jsxs)("div", {
                className: _().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(qa, {
                      imgURL:
                        ge.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: l,
                    }),
                  a === "background" &&
                    (0, e.jsx)(en, {
                      imgURL:
                        ge.TS.IMG_URL +
                        "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: l,
                      partnerEventStore: u,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(a) &&
                    (0, e.jsx)(yn, {
                      langOverride: t,
                      artworkType: a,
                      eventModel: l,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, d.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: _().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(qa, {
                      imgURL: S,
                      eventModel: l,
                      langOverride: t,
                    }),
                  a === "background" &&
                    (0, e.jsx)(en, {
                      imgURL: S,
                      lang: t,
                      eventModel: l,
                      partnerEventStore: u,
                    }),
                  a === "spotlight" &&
                    (0, e.jsx)(xa, { imgURL: S, event: l, lang: t }),
                  a === "localized_store_app_spotlight" &&
                    (0, e.jsx)(xa, { imgURL: S, event: l, lang: t }),
                  a === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(xa, { imgURL: S, event: l, lang: t }),
                  (a === "broadcast_left" || a === "broadcast_right") &&
                    (0, e.jsx)(An, {
                      imgURL: S,
                      side: a === "broadcast_right" ? "right" : "left",
                    }),
                  a === "sale_header" && (0, e.jsx)(Sn, { imgURL: S }),
                  a === "sale_overlay" && (0, e.jsx)(En, { imgURL: S }),
                  st.pb.includes(a) &&
                    (0, e.jsx)("img", {
                      className: cn.PreviewImg,
                      src:
                        Oe.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
                    }),
                  a === "product_banner" && (0, e.jsx)(Jt, { imgURL: S }),
                  a === "product_mobile_banner" &&
                    (0, e.jsx)(Jt, { imgURL: S }),
                  a === "sale_logo" && (0, e.jsx)(Jt, { imgURL: S }),
                  a === "bestofyear_banner" && (0, e.jsx)(Jt, { imgURL: S }),
                  a === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(Jt, { imgURL: S }),
                  (0, e.jsx)(mn, {
                    langOverride: t,
                    clanSteamID: i,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: v,
                    fnOnArtworkLangChange: f,
                    realms: I,
                    fnLangHasData: j,
                    fnGetImageHash: (G) => ye(w(a, G) ?? ""),
                  }),
                ],
              });
        }
        function lr(r) {
          const { artworkType: t } = r,
            a = ArtworkTypeMap[t];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + t),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [a.width, " X ", a.height],
              }),
            ],
          });
        }
        function yn(r) {
          const { artworkType: t, langOverride: a, eventModel: s } = r,
            i = y.Fj[t],
            l = b.useMemo(
              () =>
                wn(
                  (0, d.we)("#EventEditor_ArtworkType_" + t),
                  `${i.width} X ${i.height}`,
                ),
              [i.height, i.width, t],
            );
          return (0, e.jsx)(xa, { lang: a, imgURL: l, event: s });
        }
        function wn(r, t) {
          const i = document.createElement("canvas");
          (i.width = 780), (i.height = 200);
          const l = i.getContext("2d"),
            u = 20;
          for (let I = 0; I < 200; I += u)
            for (let j = 0; j < 780; j += u)
              (l.fillStyle =
                (j / u + I / u) % 2 === 0 ? "#a405e3ff" : "#000000"),
                l.fillRect(j, I, u, u);
          const v = l.createLinearGradient(0, 0, 780, 0);
          v.addColorStop(0, "rgba(32,32,32,0.8)"),
            v.addColorStop(1, "rgba(60,60,60,0.8)"),
            (l.fillStyle = v),
            l.fillRect(0, 0, 780, 200);
          const f = l.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            f.addColorStop(0, "rgba(0,0,0,0)"),
            f.addColorStop(1, "rgba(0,0,0,0.6)"),
            (l.fillStyle = f),
            l.fillRect(0, 0, 780, 200),
            (l.fillStyle = "#fff"),
            (l.font = "32px Arial"),
            (l.textAlign = "center"),
            (l.textBaseline = "middle"),
            l.fillText(r, 780 / 2, 200 / 2 - 20),
            t &&
              ((l.font = "18px Arial"), l.fillText(t, 780 / 2, 200 / 2 + 25)),
            i.toDataURL("image/png")
          );
        }
        function qa(r) {
          const { imgURL: t, eventModel: a, langOverride: s } = r,
            i = (0, We.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(ln.u, {
              event: a,
              imageURLOverride: t,
              langOverride: s ?? i,
            }),
          });
        }
        function en(r) {
          const { lang: t, eventModel: a, partnerEventStore: s } = r,
            i = (0, Xe.LJ)(),
            [l, u, v, f, I] = (0, C.q3)(() => [
              a.GetNameWithFallback(t),
              a.GetDescriptionWithFallback(t),
              a.GetSubTitleWithLanguageFallback(t),
              a.type,
              a.AnnouncementGID,
            ]);
          let j = u
            ? (0, e.jsx)(Va.fh, {
                text: u || "",
                partnerEventStore: s,
                showErrorInfo: !1,
                event: a,
                languageOverride: We.O.Get().GetCurEditLanguage(),
              })
            : (0, d.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Se().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Se().ExampleSectionTitle,
                children: (0, d.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, Q.A)(
                  Se().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: Se().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: Se().MainImageCtn,
                      children: (0, e.jsx)("img", { src: r.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: Se().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: Se().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Se().TextTitle,
                            children:
                              l ||
                              (0, d.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Se().TextSubTitle,
                            children:
                              v ||
                              (0, d.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: Se().TextBody,
                            children: j,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              f != U.Fwr &&
                (0, e.jsxs)(b.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Se().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Se().ExampleSectionTitle,
                      children: (0, d.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, Q.A)(
                        Se().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Se().DetailExample2,
                        children: (0, e.jsx)(
                          va.He,
                          {
                            event: a,
                            emoticonStore: i,
                            partnerEventStore: s,
                            headerClassnames: "editor",
                            langOverride: t,
                            bDisableBroadcastPlayer: !0,
                          },
                          I,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const xa = (r) => {
            const [t] = (0, H.t7)(r.event.appid, { include_assets: !0 });
            if (!t) return null;
            const a = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Se().SpotlightExample,
              children: (0, e.jsx)(bn, {
                event: r.event,
                strDisplayName: a ?? "",
                gameIconUrl: s,
                spotlightURLOverride: r.imgURL,
                langOverride: r.lang,
              }),
            });
          },
          An = (r) => {
            const t = [
              (0, e.jsx)("img", { src: r.imgURL }, "img"),
              (0, e.jsx)("div", { className: _().BroadcastPreview }, "video"),
            ];
            return (
              r.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Se().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          Sn = (r) =>
            (0, e.jsx)("div", {
              className: Se().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: r.imgURL,
              }),
            }),
          En = (r) =>
            (0, e.jsx)("div", {
              className: Se().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: r.imgURL,
              }),
            }),
          Jt = (r) =>
            (0, e.jsx)("div", {
              className: Se().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: r.imgURL,
              }),
            });
        function _n(r, t) {
          let a = 0;
          for (let s = U.Bhc; s < U.bP9; ++s)
            (t(r, s)?.length ?? 0) > 0 && (a += 1);
          return a;
        }
        var Dn = Object.defineProperty,
          Bn = Object.getOwnPropertyDescriptor,
          tn = (r, t, a, s) => {
            for (
              var i = s > 1 ? void 0 : s ? Bn(t, a) : t, l = r.length - 1, u;
              l >= 0;
              l--
            )
              (u = r[l]) && (i = (s ? u(t, a, i) : u(i)) || i);
            return s && i && Dn(t, a, i), i;
          };
        const Mn =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Tn = ((r) => (
          (r[(r.k_None = 0)] = "k_None"),
          (r[(r.k_Suggested = 1)] = "k_Suggested"),
          (r[(r.k_Required = 2)] = "k_Required"),
          (r[(r.k_Requested = 3)] = "k_Requested"),
          r
        ))(Tn || {});
        function Nn(r) {
          const {
              artworkType: t,
              headerHint: a,
              appid: s,
              fnToggleMinimize: i,
              realms: l,
              eventModel: u,
              fnLangHasData: v,
              fnGetImageHashAndExt: f,
              fnSetImageURL: I,
              partnerEventStore: j,
            } = r,
            [w] = (0, H.t7)(s, { include_assets: !0 }),
            [B, S] = (0, C.q3)(() => [
              u?.GetEventType(),
              u?.BHasTag("vo_marketing_message"),
            ]),
            P = B == U.ajI;
          let G = null;
          a === 2
            ? (G = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, d.we)("#EventEditor_Required"),
              }))
            : a === 1
              ? (G = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, d.we)("#EventEditor_Suggested"),
                }))
              : a === 3 &&
                (G = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, d.we)("#EventEditor_Requested"),
                }));
          let M = null;
          t === "capsule"
            ? P
              ? (M = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, d.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, d.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, d.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, d.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (M = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!S &&
                      (0, e.jsxs)("div", {
                        className: _().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, d.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${ge.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, d.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, d.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, d.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, d.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, d.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (M = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, d.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, d.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (M = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, d.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, d.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (M = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, d.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, d.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (M = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, d.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (M = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: K().EventElementRequired,
                              children: (0, d.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, d.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, d.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, d.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, d.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, d.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, d.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, d.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : t === "hero"
                        ? w &&
                          (M = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, d.we)("#selectimage_tip_hero_1"),
                              }),
                              !w.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: te.ErrorStylesBackground,
                                  children: (0, d.we)(
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
                          ? (M = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, d.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, d.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Mn,
                                      target: ge.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, d.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (M = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: K().EventElementOptional,
                                    children: (0, d.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, d.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, d.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (M = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: K().EventElementOptional,
                                      children: (0, d.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, d.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, d.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, d.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (M = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, d.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, d.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, d.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, d.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (M = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: K().EventElementOptional,
                                          children: (0, d.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, d.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, d.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (M = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: K().EventElementRequired,
                                          children: (0, d.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, d.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, d.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const D = y.Fj[r.artworkType].width,
            z = y.Fj[r.artworkType].height;
          return (0, e.jsxs)("div", {
            id: r.id,
            className: _().ArtworkSelectorContainer,
            children: [
              !!r.title &&
                (0, e.jsxs)("div", {
                  className: _().Title,
                  onDoubleClick: i,
                  children: [
                    r.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    G,
                    i &&
                      (0, e.jsx)(Z.$n, {
                        onClick: i,
                        children: (0, e.jsx)(wt.he, {
                          toolTipContent: (0, d.we)(
                            r.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: r.bIsMinimized
                            ? (0, e.jsx)(yt.hz4, {})
                            : (0, e.jsx)(yt.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !r.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, Q.A)(_().SelectImageBlock, _().Tips),
                  children: [
                    M,
                    !!(D && z) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, d.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, d.PP)(
                            "#selectimage_tip1",
                            (0, y.qj)(D),
                            (0, y.qj)(z),
                          ),
                        ],
                      }),
                    !!r.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: te.WarningStylesWithIcon,
                          children: r.strWarning,
                        }),
                      }),
                    r.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    r.elAdditionalControls,
                    !!r.fnRemoveAllArtwork &&
                      (0, e.jsx)(Z.$n, {
                        onClick: (N) => {
                          (0, _e.pg)(
                            (0, e.jsx)(kn, {
                              fnRemoveAllArtwork: r.fnRemoveAllArtwork,
                            }),
                            (0, _t.uX)(N) ?? window,
                          );
                        },
                        children: (0, d.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !r.bIsMinimized &&
                (0, e.jsx)(Ln, {
                  clanSteamID: r.clanSteamID,
                  title: r.title ?? "",
                  eventModel: u,
                  artworkType: r.artworkType,
                  realms: l,
                  appid: s,
                  fnGetImageHashAndExt: f,
                  fnSetImageURL: I,
                  fnLangHasData: v,
                  partnerEventStore: j,
                }),
            ],
          });
        }
        function kn(r) {
          const { fnRemoveAllArtwork: t, closeModal: a } = r;
          return (0, e.jsx)(ve.o0, {
            strTitle: (0, d.we)("#Sale_RemoveAll"),
            strDescription: (0, d.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), a?.();
            },
            onCancel: a,
          });
        }
        function Ln(r) {
          const {
              artworkType: t,
              realms: a,
              clanSteamID: s,
              fnLangHasData: i,
              fnGetImageHashAndExt: l,
              fnSetImageURL: u,
              eventModel: v,
              appid: f,
              partnerEventStore: I,
            } = r,
            j = t === "localized_image_group",
            [w, B] = b.useState((0, We.E)()),
            [S, P] = b.useState(new Array()),
            G = b.useCallback(
              (D, z, N) => {
                let W = [];
                S.find((ce) => ce.clanImage.imageid == D.imageid)
                  ? (W = S.map((ce) =>
                      ce.clanImage.imageid == D.imageid
                        ? { clanImage: D, lang: z }
                        : ce,
                    ))
                  : N && (W = S.concat({ clanImage: D, lang: z })),
                  P(W);
              },
              [S],
            ),
            M = b.useCallback(
              (D, z, N) => {
                (0, Gt.h5)(() => {
                  ye(l(t, z) ?? "") == D.image_hash && u(t, null, z),
                    u(t, D, N),
                    G(D, N, !1);
                });
              },
              [l, t, u, G],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(Z.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${ge.TS.PARTNER_BASE_URL}admin/game/editbyappid/${f}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, d.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Ia, {
                    list: S,
                    fnOnArtworkLanguageChange: M,
                    realms: a,
                    fnLangHasData: i,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, Q.A)(
                        _().SelectImageBlock,
                        _().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Cn, {
                        eventModel: v,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (D) => {
                          D != w && B(D);
                        },
                        langOverride: w,
                        fnOnArtworkLangChange: j ? null : M,
                        artworkType: t,
                        fnOnRemoveImage: j ? null : (D) => u(t, null, D),
                        realms: a,
                        fnLangHasData: i,
                        fnGetImageHashAndExt: l,
                        partnerEventStore: I,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Ia = class extends b.Component {
          ShowLangChangeDialog(r, t) {
            const {
              fnOnArtworkLanguageChange: a,
              realms: s,
              fnLangHasData: i,
            } = this.props;
            (0, _e.pg)(
              (0, e.jsx)(se, {
                clanImage: r,
                lang: t,
                fnOnArtworkLangChange: a,
                fnLangHasData: i,
                realms: s,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let r = new Array();
            const { list: t } = this.props;
            return (
              t.forEach((a) => {
                const { clanImage: s, lang: i } = a;
                let l = (0, d.we)("#Language_" + (0, U.LgB)(i));
                r.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: K().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, d.we)(
                            "#ImageUpload_Success_Mapping",
                            s.file_name ?? "",
                            l,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(s, i),
                          children: (0, d.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + a.clanImage.imageid + "_" + i,
                  ),
                );
              }),
              r
            );
          }
          render() {
            const { list: r } = this.props;
            if (!r || r.length == 0) return (0, e.jsx)("div", {});
            let t = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: _().UploadSuccess,
              children: t,
            });
          }
        };
        tn([Ve.oI], Ia.prototype, "ShowLangChangeDialog", 1),
          (Ia = tn([ga.PA], Ia));
        var Pn = o(6658);
        function Gn(r) {
          const {
              clanSteamID: t,
              appid: a,
              eventModel: s,
              realms: i,
              loc_images: l,
              artworkType: u,
              fnLangHasData: v,
              closeModal: f,
              fnSetImageURL: I,
              partnerEventStore: j,
            } = r,
            [w, B] = (0, b.useState)(!1),
            S = (0, Yt.zO)(t, u),
            P = t.GetAccountID(),
            [G] = (0, C.q3)(() => [
              S.GetFilesToUpload().length - S.GetCompletedFiles(),
            ]);
          (0, b.useEffect)(() => {
            B(!1),
              Oe.ClearImageGroup(),
              l?.forEach((N, W) => {
                const oe = Ke.b.InitFromClanID(P);
                if (Oe.GetAllLocalizedGroupImages().length == 0) {
                  const ce = N && xe.zU.GetHashFromHashAndExt(N),
                    fe = ce && Ue.pU.GetClanImageByImageHash(oe, ce);
                  fe && Oe.SetPrimaryImageForImageGroup(fe, u);
                }
                Oe.SetLocalizedImageGroupAtLang(W, oe, N ?? null);
              }),
              B(!0);
          }, [l, P, u]);
          const M = (0, b.useCallback)(
              (N, W, oe = U.Bhc) => {
                const ce = Ke.b.InitFromClanID(P),
                  fe = xe.zU.GetHashAndExt(W ?? null);
                if (Oe.GetAllLocalizedGroupImages().length == 0) {
                  const ut = fe && xe.zU.GetHashFromHashAndExt(fe),
                    de = ut && Ue.pU.GetClanImageByImageHash(ce, ut);
                  de && Oe.SetPrimaryImageForImageGroup(de, N);
                }
                Oe.SetLocalizedImageGroupAtLang(oe, ce, fe);
              },
              [P],
            ),
            D = (0, b.useCallback)((N, W) => {
              const ce =
                Oe.GetLocalizedImageGroupForEdit()?.localized_images[W];
              return ce && ce.split("/").pop();
            }, []),
            z = () => {
              const N = Oe.GetLocalizedImageGroupForEdit();
              for (let W = U.Bhc; W < U.bP9; ++W) {
                const oe = N?.localized_images[W];
                if (oe) {
                  const ce = oe.split("/").pop() || "";
                  I(
                    u,
                    {
                      image_hash: ye(ce),
                      clanAccountID: P,
                      file_type: (0, Pn.yh)(ce) ?? Vt.bg.w3,
                      imageid: 0,
                    },
                    W,
                  );
                } else I(u, null, W);
              }
              Oe.ClearImageGroup(), r.onOK ? r.onOK() : f?.();
            };
          return (0, e.jsxs)(ve.o0, {
            onCancel: f,
            closeModal: f,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, Q.A)(te.NotTooWideModal, te.ImageManageDialog),
            strTitle: r.strLocalizedTitle || (0, d.we)("#ImagePickerLoc_Title"),
            strDescription: r.strLocalizedDescription,
            bOKDisabled: G > 0,
            onOK: z,
            strOKButtonText:
              G > 0 ? (0, d.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              w
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(A, {
                        clanSteamID: t,
                        rgSupportArtwork: [u],
                        fnSetImageURL: M,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: i ?? [],
                        uploaderOverride: S,
                      }),
                      (0, e.jsx)(Nn, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: u,
                        title: null,
                        appid: a,
                        realms: i,
                        fnRemoveAllArtwork: () => Oe.ClearImageGroup(),
                        fnSetImageURL: M,
                        fnGetImageHashAndExt: D,
                        fnLangHasData: v,
                        partnerEventStore: j,
                      }),
                    ],
                  })
                : (0, e.jsx)(Re.t, {
                    size: "medium",
                    position: "center",
                    string: (0, d.we)("#Loading"),
                  }),
              r.children,
            ],
          });
        }
        function Rn(r) {
          const { setting: t, fnUpdateSetting: a, label: s } = r,
            i = b.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, d.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                l.push({
                  label: (0, d.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                l.push({
                  label: (0, d.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                l.push({
                  label: (0, d.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                l.push({
                  label: (0, d.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Z.JU, {
                children: s || (0, d.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(Z.m, {
                strDropDownClassName: F.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "no-repeat",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var Un = o(94381);
        function On(r) {
          const {
              closeModal: t,
              imgGroup: a,
              fnUpdateImageGroup: s,
              eventModel: i,
            } = r,
            { openColorPicker: l } = vt(),
            [u, v] = (0, b.useState)(() => a),
            [f, I, j, w, B, S, P, G] = (0, C.q3)(() => [
              u.repeat_setting,
              u.scaling_setting,
              u.background_color1,
              u.background_color2,
              u.gradient_setting,
              u.position_setting,
              i.GetIncludedRealmList(),
              u.randomize_section_order,
            ]),
            [M] = (0, b.useState)(() => Fn(u.localized_background_art ?? {}));
          return (0, e.jsxs)(Gn, {
            strLocalizedTitle: (0, d.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, d.we)("#BackgroundGroups_DialogDesc"),
            appid: i.appid,
            eventModel: i,
            clanSteamID: i.clanSteamID,
            closeModal: t,
            partnerEventStore: oa.O3,
            artworkType: "localized_background_art",
            realms: P,
            loc_images: M,
            fnLangHasData: (D) => !!M[D],
            fnGetImageHash: (D, z) => M[z],
            fnSetImageURL: async (D, z, N) => {
              v((W) => {
                const oe = { ...W.localized_background_art },
                  ce = xe.zU.GetHashAndExt(z);
                return (
                  ce ? (oe[(0, U.LgB)(N)] = ce) : delete oe[(0, U.LgB)(N)],
                  { ...W, localized_background_art: oe }
                );
              });
            },
            onOK: () => {
              v((D) => (s(D), t && setTimeout(t, 1), { ...D }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Qe().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Qe().ImageOptions,
                    children: [
                      (0, e.jsx)(Rn, {
                        setting: f,
                        fnUpdateSetting: (D) => {
                          v(
                            D !== "no-repeat"
                              ? {
                                  ...u,
                                  repeat_setting: D,
                                  scaling_setting: "auto",
                                }
                              : { ...u, repeat_setting: D },
                          );
                        },
                        label: (0, d.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(zn, {
                        scaling_setting: I ?? "contain",
                        disable: f !== "no-repeat",
                        fnUpdateSetting: (D) => v({ ...u, scaling_setting: D }),
                      }),
                      I != "cover" &&
                        (0, e.jsx)(Yn, {
                          position_settings: S,
                          fnUpdateSetting: (D) =>
                            v({ ...u, position_setting: D }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Qe().ColorOptions,
                    children: [
                      (0, e.jsx)(Z.JU, {
                        children: (0, d.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Pt().ColorCtn,
                        children: [
                          (0, e.jsx)(Z.$n, {
                            style: { backgroundColor: j },
                            onClick: (D) =>
                              l(D, {
                                color: j ?? "",
                                onChange: (z) =>
                                  v({ ...u, background_color1: z }),
                              }),
                            children: (0, d.we)(
                              j === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(Z.$n, {
                            onClick: () =>
                              v({ ...u, background_color1: void 0 }),
                            children: (0, d.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Qe().SwapColorsCtn,
                        children: (0, e.jsx)(Z.$n, {
                          onClick: () =>
                            v({
                              ...u,
                              background_color1: w,
                              background_color2: j,
                            }),
                          children: (0, d.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      B !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Pt().ColorCtn,
                          children: [
                            (0, e.jsx)(Z.$n, {
                              style: { backgroundColor: w },
                              onClick: (D) =>
                                l(D, {
                                  color: w ?? "",
                                  onChange: (z) =>
                                    v({ ...u, background_color2: z }),
                                }),
                              children: (0, d.we)(
                                w === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(Z.$n, {
                              onClick: () =>
                                v({ ...u, background_color2: void 0 }),
                              children: (0, d.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(Hn, {
                        gradient: B ?? "top-to-bottom",
                        fnUpdateSetting: (D) =>
                          v({ ...u, gradient_setting: D }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(St, {
                clanSteamID: i.clanSteamID,
                children: (0, e.jsx)(Un.S, {
                  checked: !!G,
                  onChange: (D) => {
                    u.randomize_section_order = D;
                  },
                  children: (0, d.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function Fn(r) {
          const t = re.$Y([], U.bP9, null);
          for (const a in r) {
            const s = (0, U.sfN)(a);
            s != U.xPp && (t[s] = r[a]);
          }
          return t;
        }
        function zn(r) {
          const {
              scaling_setting: t,
              fnUpdateSetting: a,
              label: s,
              disable: i,
            } = r,
            l = b.useMemo(() => {
              const u = [];
              return (
                u.push({
                  label: (0, d.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                u.push({
                  label: (0, d.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                u.push({
                  label: (0, d.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                u
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Z.JU, {
                children: s || (0, d.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(Z.m, {
                strDropDownClassName: F.DropDownScroll,
                disabled: i,
                rgOptions: l,
                selectedOption: t || "cover",
                onChange: (u) => a(u.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Hn(r) {
          const { gradient: t, fnUpdateSetting: a, label: s } = r,
            i = b.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, d.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                l.push({
                  label: (0, d.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                l.push({
                  label: (0, d.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Z.JU, {
                children: s || (0, d.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(Z.m, {
                strDropDownClassName: F.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "top-to-bottom",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Yn(r) {
          const { position_settings: t, fnUpdateSetting: a, label: s } = r,
            i = b.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, d.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                l.push({
                  label: (0, d.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                l.push({
                  label: (0, d.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                l.push({
                  label: (0, d.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                l.push({
                  label: (0, d.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Z.JU, {
                children: s || (0, d.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(Z.m, {
                strDropDownClassName: F.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "unset",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Wn(r) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: a,
              fnSetBackgroundImgGroupEditMode: s,
              bShowAsValveOnly: i,
            } = r,
            [l, u] = (0, b.useState)(t.BIsBackgroundImageEnabled()),
            [v, f, I] = (0, Ve.uD)(),
            j = (0, C.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, Q.A)(Qe().Ctn, i && F.ValveOnlyBackground),
            children: (0, e.jsxs)(O.tH, {
              children: [
                (0, e.jsx)(Z.Yh, {
                  label: (0, d.we)("#BackgroundGroups_Setting"),
                  checked: l,
                  onChange: (w) => {
                    u(w), t.SetBackgroundImageEnabled(w);
                  },
                }),
                l
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(Z.Yh, {
                          label: (0, d.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, d.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: a,
                          onChange: s,
                        }),
                        (0, e.jsx)(Z.Yh, {
                          label: (0, d.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, d.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: j,
                          onChange: (w) =>
                            t.SetSalePageLastCoverSectionUntilEnd(w),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(Z.$n, {
                          onClick: f,
                          children: (0, d.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(ve.EN, {
                          active: v,
                          children: (0, e.jsx)(ve.o0, {
                            strTitle: (0, d.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, d.we)(
                              "#BackgroundGroups_ClearAllSettings_Desc",
                            ),
                            bDestructiveWarning: !0,
                            onOK: () => {
                              t.ClearAllBackgroundImageGroupSettings(), u(!1);
                            },
                            closeModal: I,
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("p", {
                      children: (0, d.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${ea.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, d.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const Qa = b.forwardRef(function (t, a) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: i,
              groupIndex: l,
              imgGroup: u,
              eventModel: v,
              nTabIndex: f,
            } = t,
            I = (0, We.E)(),
            [j, w, B, S] = (0, C.q3)(() => [
              u && s.mapGroupToSections.get(u.background_id),
              (u &&
                s.mapGroupToSections.get(u.background_id)?.sectionUniqueIDs) ??
                [],
              f != null
                ? i?.GetTabLastCoverSectionUntilEnd(f)
                : i?.GetSalePageLastCoverSectionUntilEnd(),
              f != null ? i?.GetTabGroupCount(f) : i?.GetSalePageGroupCount(),
            ]),
            P = B && l + 1 === S,
            [G, M, D] = (0, Ve.uD)(),
            [z, N, W] = (0, Ve.uD)();
          let oe;
          j?.nUniqueIDNextSaleSection &&
            (oe = (0, Nt.h_)(
              ie.HY,
              i.GetSaleSectionByID(j?.nUniqueIDNextSaleSection),
              I,
              v,
              j.nSaleSectionLastIndex + 1,
            ));
          let ce;
          if (j && w?.length > 1) {
            const fe = w[w.length - 1];
            ce = (0, Nt.h_)(
              ie.HY,
              i?.GetSaleSectionByID(fe),
              I,
              v,
              j.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(sa.qx, {
            bStartMinimized: !1,
            title: (0, d.we)(
              f != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              l + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: a,
              children: [
                (0, e.jsx)(Z.$n, {
                  onClick: M,
                  children: (0, d.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(ve.EN, {
                  active: G,
                  children: (0, e.jsx)(On, {
                    imgGroup: u,
                    closeModal: D,
                    eventModel: v,
                    fnUpdateImageGroup: (fe) =>
                      f != null
                        ? i.SetTabBackgroundGroup(f, l, fe)
                        : i.SetSalePageBackgroundGroup(l, fe),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: Qe().EditorTitle,
                  children: (0, d.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    w.map((fe) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, Nt.h_)(
                            ie.W3,
                            i.GetSaleSectionByID(fe),
                            I,
                            v,
                            i.GetSaleSectionIndexByID(fe, !0),
                          ),
                        },
                        "li_" + fe,
                      ),
                    ),
                    !!P &&
                      (0, e.jsx)("li", {
                        children: (0, d.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!ce &&
                  (0, e.jsx)(Z.$n, {
                    onClick: () =>
                      f != null
                        ? i.SetTabBackgroundGroup(f, l, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          })
                        : i.SetSalePageBackgroundGroup(l, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          }),
                    children: (0, d.we)("#BackgroundGroups_Reduce", ce),
                  }),
                !!oe &&
                  (0, e.jsx)(Z.$n, {
                    onClick: () =>
                      f != null
                        ? i.SetTabBackgroundGroup(f, l, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          })
                        : i.SetSalePageBackgroundGroup(l, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          }),
                    children: (0, d.we)("#BackgroundGroups_Extend", oe),
                  }),
                l > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(Z.$n, {
                        onClick: N,
                        children: (0, d.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(ve.EN, {
                        active: z,
                        children: (0, e.jsx)(ve.o0, {
                          strTitle: (0, d.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, d.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            f != null
                              ? i.RemoveTabBackgroundGroup(f, l)
                              : i.RemoveSalePageBackgroundGroup(l),
                          closeModal: W,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function Vn(r) {
          const { backgroundImageEditModel: t, nTabID: a } = r;
          return (0, e.jsx)("div", {
            className: Qe().CtnEditor,
            children: (0, e.jsx)(Z.$n, {
              onClick: (s) =>
                a !== void 0 && a >= 0
                  ? t?.AddTabBackgroundGroup(a)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, d.we)(
                a !== void 0 && a >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function Kn(r) {
          const {
              nTabID: t,
              nSectionUniqueID: a,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: i,
            } = r,
            l = s.mapFirstSectionToGroup.get(a);
          return a == s.nFirstSaleSectionIDWithoutGroup ||
            a == s.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(Vn, { backgroundImageEditModel: i, nTabID: t })
            : l
              ? (0, e.jsx)(Zn, { ...r, groupID: l })
              : null;
        }
        function Zn(r) {
          const {
              groupID: t,
              nTabID: a,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: i,
            } = r,
            l =
              a && a >= 0
                ? s.selectedTabBackgroundDef.groups
                : i.GetSalePageGroupDefinition().groups,
            u = l.findIndex((G) => G.background_id === t),
            v = l[u],
            [f, I] = (0, b.useState)(!1);
          (0, b.useEffect)(() => {
            if (!f) return;
            const G = (0, _e.pg)(
              (0, e.jsx)(ve.o0, {
                bAlertDialog: !0,
                closeModal: () => I(!1),
                children: (0, e.jsx)(Qa, {
                  backgroundImageEditModel: i,
                  groupIndex: u,
                  imgGroup: v,
                  imgGroupDerivedMapping: s,
                  eventModel: i.GetEventModel(),
                  nTabIndex: a,
                }),
              }),
              window,
            );
            return () => {
              G.then((M) => M.Close());
            };
          }, [f, i, v, u, a, s]);
          const j = (0, C.q3)(() => Ot.get(t)),
            [w, B] = (0, b.useState)(null),
            S = b.useCallback((G, M) => {
              B(M);
            }, []),
            P = (0, Ve.w6)(S);
          return (0, e.jsxs)("div", {
            className: Qe().CtnEditor,
            ref: P,
            children: [
              !!(j && w && w > j) &&
                (0, e.jsx)(Z.$n, {
                  onClick: (G) => I(!0),
                  children: (0, d.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Qa, {
                backgroundImageEditModel: i,
                groupIndex: u,
                imgGroup: v,
                imgGroupDerivedMapping: s,
                eventModel: i.GetEventModel(),
                nTabIndex: a,
              }),
            ],
          });
        }
        var Qn = o(81557),
          an = o.n(Qn);
        function Xn(r) {
          const { imgGroupDerivedMapping: t } = r,
            [a, s] = (0, b.useState)(!1);
          (0, b.useEffect)(() => {
            if (!a) return;
            const j = (0, _e.pg)(
              (0, e.jsx)(ve.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(nn, { ...r }),
              }),
              window,
            );
            return () => {
              j.then((w) => w.Close());
            };
          }, [a, r]);
          const i = (0, C.q3)(() => {
              const j = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (j) {
                const w = t.mapGroupToSections.get(j);
                if (w) return Ot.get(w?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [l, u] = (0, b.useState)(null),
            v = b.useCallback((j, w) => {
              u(w);
            }, []),
            f = (0, Ve.w6)(v),
            I = !!(i >= 0 && l && l > i);
          return (0, e.jsxs)("div", {
            className: (0, Q.A)(Qe().CtnEditor, an().TabCtn),
            ref: f,
            children: [
              I &&
                (0, e.jsx)(Z.$n, {
                  onClick: (j) => s(!0),
                  children: (0, d.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(nn, { ...r }),
            ],
          });
        }
        function nn(r) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: a,
              nTabID: s,
            } = r,
            [i, l] = (0, b.useState)(null),
            [u, v, f, I] = (0, C.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              a.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(O.tH, {
            children: [
              (0, e.jsx)(Z.Yh, {
                label: (0, d.we)("#BackgroundGroups_TaSetting"),
                checked: v,
                onChange: (j) => {
                  if (
                    ((0, At.wT)(t, "edit model mising"),
                    (0, At.wT)(s !== void 0, "tab setting missing"),
                    s !== void 0 && t)
                  ) {
                    const w = t.SetTabEnabled(s, j);
                    (0, At.wT)(
                      !!w,
                      `Failed to create model TabID ${s}backgroundModel`,
                    ),
                      l(w);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${s}.`,
                    );
                },
              }),
              !!v &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(Z.Yh, {
                      label: (0, d.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, d.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: u,
                      onChange: (j) => t.SetTabLastCoverSectionUntilEnd(s, j),
                    }),
                    (0, e.jsx)(Qa, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (f || i)?.groups[0],
                      imgGroupDerivedMapping: a,
                      eventModel: I,
                      nTabIndex: s,
                      classNameHeader: an().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var $t = o(85692),
          Jn = o(25533);
        function $n(r) {
          const {
              promotionName: t,
              eventModel: a,
              bIsPreview: s,
              language: i,
              backgroundImageEditModel: l,
              addtionalAdminButtons: u,
              bDynamicallyCreatedSale: v,
            } = r,
            [f, I] = b.useState(a?.GetDayIndexFromEventStart()),
            [j, w] = b.useState(null),
            B = (0, C.q3)(() => a.jsondata.sale_header_disable_top_margin),
            S = qn(a, f),
            [P, G] = (0, b.useState)(!1);
          b.useEffect(() => {
            if (
              a.jsondata.sale_custom_css &&
              !j &&
              s &&
              a.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, ge.yK)() == "community"
            ) {
              const W = document.getElementsByTagName("HEAD")[0],
                oe = document.createElement("style");
              (oe.innerText = (0, Tt.L$)(a.jsondata.sale_custom_css)),
                w(oe),
                W.appendChild(oe);
            }
            const N = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, At.wT)(
                N.length <= 1,
                "Must have at most one react_landing_background",
              ),
              N.length >= 1 && (N[0].style.backgroundImage = ""),
              () => {
                j && (j.remove(), w(null));
              }
            );
          }, [a, j, s]);
          const M = a?.jsondata,
            D = b.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(ge.UF.CLANACCOUNTID),
                nAppIDVOD: Number(M?.broadcast_preroll_vod_appid),
                event: a,
                bIsPreview: s,
                language: i,
                accountIDs: s ? M?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  M?.broadcast_chat_announcement_giveaway,
              }),
              [s, a, M, i, t],
            ),
            z = (0, C.q3)(() => l?.BIsBackgroundImageEnabled() ?? !1);
          if (!a || f === void 0)
            return (0, e.jsx)("div", {
              className: qe().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(Re.t, {
                size: "medium",
                string: (0, d.we)("#Loading"),
              }),
            });
          {
            const N =
                a.jsondata.localized_sale_logo &&
                a.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              W = a.BUsesContentHubForItemSource(),
              oe = a
                .GetSaleSections()
                .some((it) => it.section_type === "contenthubtitle"),
              ce = W && oe;
            let fe,
              ut = !0;
            N
              ? (fe = 0)
              : a.BUsesContentHubForItemSource()
                ? (fe = 20)
                : a.GetEventType() == U.ajI
                  ? ((fe = 0), (ut = !1))
                  : (fe = a.jsondata.sale_header_offset || 0);
            const de = ut && a.jsondata.sale_header_offset === 530,
              Ae = !ee.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  a.GetContentHubType(),
                  a.GetContentHubCategory(),
                  a.GetContentHubTag(),
                ),
              Je = s
                ? !P && l?.BIsBackgroundImageEnabled()
                  ? $e.S.EPreviewMode_EditBackground
                  : $e.S.EPreviewMode_Enabled
                : $e.S.EPreviewMode_Disabled,
              bt = z || a.GetEventType() != U.ajI,
              gt = Ht(a.clanSteamID),
              qt = W ? ae.Yo.NoTransform : ae.Yo.NoTransformSparseContent,
              ba = (0, Q.A)(
                k().SaleOuterContainer,
                B && k().SaleOuterTopMargin,
                de && k().SaleNewSizing,
                k()[`CustomStyle_${a.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                N && k().SalePageLogoSet,
                ce && k().ContentHub,
              );
            return (0, e.jsx)(O.tH, {
              children: (0, e.jsx)(q.EU, {
                eventModel: a,
                language: i,
                children: (0, e.jsx)(ie.Cs, {
                  location: s ? ie.HY : ie.bs,
                  children: (0, e.jsxs)(Ye, {
                    event: a,
                    language: i,
                    bIsPreview: !!s,
                    children: [
                      Ae && (0, e.jsx)(q.Sn, {}),
                      (0, e.jsx)(me, { eventModel: a }),
                      !!l &&
                        (bt || gt) &&
                        (0, e.jsx)(Wn, {
                          backgroundImageEditModel: l,
                          bBackgroundImgGroupEditMode: P,
                          fnSetBackgroundImgGroupEditMode: G,
                          bShowAsValveOnly: !bt,
                        }),
                      (0, e.jsxs)(ne.Z, {
                        style: ce ? void 0 : { marginTop: `${fe || 0}px` },
                        className: ba,
                        scrollIntoViewType: qt,
                        children: [
                          (0, e.jsx)(ze, { eventModel: a, language: i }),
                          (0, e.jsx)(ht, {
                            rgPresenters: a.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(jt, {
                            event: a,
                            broadcastEmbedContext: D,
                          }),
                          (0, e.jsx)(tr, {
                            ePreviewMode: Je,
                            event: a,
                            backgroundImageEditModel: l,
                            language: i,
                            promotionName: t,
                            nSaleDayIndex: f,
                            broadcastEmbedContext: D,
                            selectedTab: S,
                          }),
                          !v &&
                            (0, e.jsx)(Ge, {
                              event: a,
                              addtionalAdminButtons: u,
                              fnOnChangeDayIndex: (it) => {
                                it != f &&
                                  ((a.m_overrideCurrentDay = it), I(it));
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
        function qn(r, t) {
          const [a] = (0, Le.QD)(E.jD, void 0);
          return b.useMemo(() => {
            const i = r
              .GetSaleSectionFirstMatchByType("tabs")
              ?.tabs?.filter((l) => !l.hide);
            if (i && i.length > 0) {
              let l = a > 0 ? i.find((v) => v.unique_id == a) : void 0;
              l || (l = i[0]);
              const u = l === i[0];
              return new Bt.y(l, t, u);
            }
          }, [r, t, a]);
        }
        function rn() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function er(r) {
          const {
              event: t,
              language: a,
              nSaleDayIndex: s,
              ePreviewMode: i,
              selectedTab: l,
              backgroundImageEditModel: u,
            } = r,
            [v, f] = b.useState((0, E.rp)()),
            I = b.useMemo(() => new ra(), []),
            j = b.useCallback(() => f((0, E.rp)()), []);
          b.useEffect(
            () => (
              window.addEventListener("resize", j),
              () => window.removeEventListener("resize", j)
            ),
            [j],
          ),
            b.useEffect(() => {
              let de = "";
              const he = () => {
                  const Je = rn();
                  if (Je && Je != de) {
                    const bt = document.getElementById(Je);
                    bt && ((de = Je), bt.scrollIntoView({ block: "start" }));
                  }
                },
                Ae = setTimeout(() => he(), 150);
              return (
                window.addEventListener("hashchange", he),
                () => {
                  clearTimeout(Ae),
                    window.removeEventListener("hashchange", he);
                }
              );
            }, []);
          const w = (0, pt.W6)(),
            B = (de, he) => {
              (0, Le.ip)(w, { ...(he || {}), [E.jD]: de.toString() });
            },
            [S, P] = (0, Le.QD)("controller"),
            [G, M] = (0, C.q3)(() => {
              const de =
                  Pe.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                he = t.GetSaleSectionIncludingFooterSections(de);
              return [
                ja(
                  t.jsondata.sale_background_img_groups,
                  he,
                  l && l.GetActiveTabUniqueID(),
                ),
                he,
              ];
            });
          let D = !1;
          const z = new Bt.y(void 0, s),
            N = [{ elements: [], activeTab: z }];
          let W = null;
          const oe = (0, ge.Qn)(),
            ce = (0, $t.ty)(),
            fe = b.useMemo(() => {
              const de = rn();
              if (!de) return;
              const he = M.findIndex((Ae) => Ae.section_anchor === de);
              return he > -1 ? he : void 0;
            }, [M]);
          M.forEach((de, he) => {
            const Ae = N[N.length - 1].activeTab;
            if (Ae && !Ae.ShouldShowSection(de)) return;
            const Je = ee.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              bt = v && !Je && !t.jsondata.content_hub_restricted_width;
            let gt = (0, $e.I)(de, i, t, a, oe);
            if (gt === void 0) return;
            if (!gt)
              if ((0, Ft.su)(de) && !ge.iA.logged_in)
                D ||
                  ((gt = (0, e.jsx)(Ft.CC, {
                    section: de,
                    event: t,
                    language: a,
                  })),
                  (D = !0));
              else {
                const or = de.diable_tab_id_filtering
                  ? new Bt.y(void 0, Ae && Ae.GetSaleDay())
                  : Ae;
                de.section_type == "tabs" &&
                  de.tabs?.some(
                    (ir) => ir.unique_id == l?.GetActiveTabUniqueID(),
                  ) &&
                  N.push({ activeTab: l, elements: [] }),
                  (gt = (0, e.jsx)(Jn.H, {
                    ...r,
                    section: de,
                    activeTab: or,
                    appVisibilityTracker: I,
                    selectedTab: l,
                    setTabUniqueIDQueryParam: B,
                    expanded: bt,
                    controllerCategory: S,
                    setControllerCategory: P,
                  }));
              }
            ce &&
              (gt = (0, e.jsx)(sr, { nSectionID: de.unique_id, children: gt }));
            const qt = N && N.length && N[N.length - 1];
            let ba = (0, e.jsx)(
              rr,
              {
                section: de,
                nActiveTabID:
                  qt && qt.activeTab && qt.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: he,
                ePreviewMode: i,
                salePageBackgroundDerivedConfig: G,
                backgroundImageEditModel: u,
                bExpanded: bt,
                children: (0, e.jsx)(be._, {
                  enabled: !fe || he > fe,
                  children: gt,
                }),
              },
              "SaleSectionIndex_" + de.unique_id + "_" + he,
            );
            const it = G.mapSectionToGroup.get(de.unique_id);
            W &&
              W.groupID != it &&
              (N[N.length - 1].elements.push(
                aa(t, W, i, l && l?.GetActiveTabUniqueID()),
              ),
              (W = null)),
              it
                ? (W ||
                    (W = {
                      groupID: it,
                      elSaleSections: [],
                      derivedGroupInfo: G.mapGroupToSections.get(it),
                    }),
                  W.elSaleSections.push(ba))
                : N[N.length - 1].elements.push(ba);
          }),
            W &&
              (N[N.length - 1].elements.push(
                aa(t, W, i, l && l?.GetActiveTabUniqueID()),
              ),
              (W = null));
          const ut = N.map((de, he) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, Q.A)(
                  k().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: de.elements,
              },
              "TabSection_" + he,
            ),
          );
          return (0, e.jsx)(ne.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: ut,
          });
        }
        const tr = (0, pt.y)(er);
        function ar(r) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: a,
            children: s,
          } = r;
          return t && a != null
            ? (0, e.jsx)(nr, {
                visibility_by_door_index_state: t,
                door_index_visibility: a,
                children: s,
              })
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function nr(r) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: a,
              children: s,
            } = r,
            i = (0, ft.OM)(a);
          return (t == "hide_when_open_door_index" && i) ||
            (t == "show_when_open_door_index" && !i)
            ? null
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function sn({ children: r, onChange: t }) {
          const a = b.useRef(null);
          return (
            (0, b.useEffect)(() => {
              t(!!b.Children.toArray(r).filter(Boolean).length);
            }, [r, t]),
            r
          );
        }
        function rr(r) {
          const {
              section: t,
              saleSectionIndex: a,
              nActiveTabID: s,
              ePreviewMode: i,
              salePageBackgroundDerivedConfig: l,
              backgroundImageEditModel: u,
              bExpanded: v,
              children: f,
            } = r,
            I = t.section_anchor ? t.section_anchor : E.mj + (t.unique_id || a),
            j = t.section_type != "tabs",
            [w, B] = (0, b.useState)(!0);
          return w
            ? (0, e.jsx)(O.tH, {
                children: (0, e.jsx)(ar, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: j
                    ? (0, e.jsx)(ne.Z, {
                        navKey: I,
                        id: I,
                        className: (0, Q.A)({
                          [k().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: v,
                          [t.single_item_style || ""]: !0,
                          [k().SaleSectionBackgroundImageGroupEdit]:
                            i == $e.S.EPreviewMode_EditBackground,
                          [k().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          i === $e.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  f,
                                  (0, e.jsx)(Kn, {
                                    nSectionUniqueID: t.unique_id || a,
                                    nTabID: s,
                                    salePageBackgroundDerivedConfig: l,
                                    backgroundImageEditModel: u,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(sn, { onChange: B, children: f }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          i === $e.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: I,
                                className: (0, Q.A)({
                                  [k().SaleSectionCtn]: !0,
                                  [k().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [k().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  f,
                                  (0, e.jsx)(Xn, {
                                    backgroundImageEditModel: u,
                                    nTabID: s,
                                    imgGroupDerivedMapping: l,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(sn, { onChange: B, children: f }),
                      }),
                }),
              })
            : null;
        }
        function sr(r) {
          const { nSectionID: t, children: a } = r,
            [s, i] = b.useState(!1),
            [l, u] = b.useState(!1);
          b.useEffect(() => {
            $t.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const v = (0, C.q3)(() => $t.TU.Get().GetMouseOverSectionID()),
            f = t && t == v,
            I = () => $t.TU.Get().JumpToSection(t),
            j = b.useRef(null);
          return (
            (0, $t.lM)((w) =>
              t != w ? !1 : (j.current?.scrollIntoView(), u(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: j,
              className: (0, Q.A)({
                [k().SaleSectionLivePreview]: !0,
                [k().Hover]: !!f,
                [k().JumpedTo]: !!l,
              }),
              onAnimationEnd: () => u(!1),
              onMouseEnter: () => i(!0),
              onMouseLeave: () => i(!1),
              children: [
                s &&
                  (0, e.jsx)(wt.Gq, {
                    toolTipContent: (0, d.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: k().JumpToButton,
                      onClick: I,
                      children: (0, e.jsx)(yt.ffu, {}),
                    }),
                  }),
                a,
              ],
            })
          );
        }
      },
      4370: (R, we, o) => {
        "use strict";
        o.d(we, { A: () => ie, X: () => le });
        var e = o(7850),
          U = o(17083),
          ne = o(24660);
        function ae(Y) {
          return !!(Y.metaKey || Y.altKey || Y.ctrlKey || Y.shiftKey);
        }
        function q(Y) {
          const { navigate: C, onClick: b, ...$ } = Y,
            { target: O } = $,
            V = (k) => {
              try {
                b && b(k);
              } catch (F) {
                throw (k.preventDefault(), F);
              }
              !k.defaultPrevented &&
                k.button === 0 &&
                (!O || O === "_self") &&
                !ae(k) &&
                (k.preventDefault(), C());
            };
          return (0, e.jsx)(ne.Ii, { ...$, onClick: V });
        }
        function ie(Y) {
          return (0, e.jsx)(U.k2, { component: q, ...Y });
        }
        function le(Y) {
          return (0, e.jsx)(U.N_, { component: q, ...Y });
        }
      },
      12932: (R, we, o) => {
        "use strict";
        o.d(we, { qx: () => F });
        var e = o(7850),
          U = o(16412),
          ne = o(18210),
          ae = o(36118),
          q = o(90626),
          ie = o(36707),
          le = o(95695),
          Y = o.n(le),
          C = o(25792),
          b = o(64734),
          $ = o.n(b),
          O = o(65946),
          V = o(11243);
        function k(Q) {
          const {
              title: ge,
              tooltip: Te,
              getMinimized: Ie,
              toggleMinimized: lt,
              className: Ye,
              children: mt,
              elAdditionalButtons: L,
            } = Q,
            J = (0, O.q3)(() => Ie());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, ie.A)(
                  Ye,
                  b.SectionTitleHeader,
                  b.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, ie.A)(
                      le.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [ge, !!Te && (0, e.jsx)(V.o, { tooltip: Te })],
                  }),
                  (0, e.jsxs)("div", {
                    className: b.SectionTitleButtons,
                    children: [
                      L,
                      (0, e.jsx)(K, { bIsMinimized: J, fnToggleMinimize: lt }),
                    ],
                  }),
                ],
              }),
              !J && (0, e.jsx)(C.tH, { children: mt }),
            ],
          });
        }
        function F(Q) {
          const [ge, Te] = q.useState(!!Q.bStartMinimized);
          return (0, e.jsx)(k, {
            ...Q,
            getMinimized: () => ge,
            toggleMinimized: () => Te(!ge),
            children: Q.children,
          });
        }
        function K(Q) {
          const { bIsMinimized: ge, fnToggleMinimize: Te } = Q,
            Ie = ge ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(U.$n, {
            "data-tooltip-text": (0, ne.we)(Ie),
            onClick: Te,
            children: Q.bIsMinimized
              ? (0, e.jsx)(ae.hz4, {})
              : (0, e.jsx)(ae.Xjb, {}),
          });
        }
      },
      27638: (R, we, o) => {
        "use strict";
        o.d(we, { Y: () => ne });
        var e = o(90626);
        function U(ae) {
          const { title: q, bodyClassName: ie, children: le } = ae;
          return (
            React.useEffect(() => {
              const Y = document.title;
              return (
                (document.title = q),
                () => {
                  document.title = Y;
                }
              );
            }, [q]),
            ne(ie),
            le
          );
        }
        function ne(ae) {
          e.useEffect(() => {
            if (!ae) return;
            const q = [];
            for (const ie of ae.split(/ /))
              document.body.classList.contains(ie) || q.push(ie);
            return (
              document.body.classList.add(...q),
              () => document.body.classList.remove(...q)
            );
          }, [ae]);
        }
      },
      6479: (R, we, o) => {
        "use strict";
        o.r(we), o.d(we, { SteamChartsRoutes: () => je, default: () => Wa });
        var e = o(7850),
          U = o(58732),
          ne = o(80902),
          ae = o(99412),
          q = o(72604),
          ie = o(35038),
          le = o(80613),
          Y = o.n(le),
          C = o(75245),
          b = o(56062);
        class $ extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              $.prototype.country_code || C.Sg($.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    country_code: {
                      n: 1,
                      br: C.qM.readString,
                      bw: C.gp.writeString,
                    },
                    context: { n: 2, c: b.TS },
                    data_request: { n: 3, c: b.gn },
                    start_date: {
                      n: 4,
                      br: C.qM.readUint32,
                      bw: C.gp.writeUint32,
                    },
                    page_start: {
                      n: 5,
                      br: C.qM.readInt32,
                      bw: C.gp.writeInt32,
                    },
                    page_count: {
                      n: 6,
                      d: 20,
                      br: C.qM.readInt32,
                      bw: C.gp.writeInt32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = C.w0($.M())), $.sm_mbf;
          }
          toObject(n = !1) {
            return $.toObject(n, this);
          }
          static toObject(n, c) {
            return C.BT($.M(), n, c);
          }
          static fromObject(n) {
            return C.Uq($.M(), n);
          }
          static deserializeBinary(n) {
            let c = new (Y().BinaryReader)(n),
              g = new $();
            return $.deserializeBinaryFromReader(g, c);
          }
          static deserializeBinaryFromReader(n, c) {
            return C.zj($.MBF(), n, c);
          }
          serializeBinary() {
            var n = new (Y().BinaryWriter)();
            return $.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, c) {
            C.i0($.M(), n, c);
          }
          serializeBase64String() {
            var n = new (Y().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Request";
          }
        }
        class O extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              O.prototype.start_date || C.Sg(O.M()),
              le.Message.initialize(this, n, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    start_date: {
                      n: 1,
                      br: C.qM.readUint32,
                      bw: C.gp.writeUint32,
                    },
                    ranks: { n: 2, c: V, r: !0, q: !0 },
                    next_page_start: {
                      n: 3,
                      br: C.qM.readInt32,
                      bw: C.gp.writeInt32,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = C.w0(O.M())), O.sm_mbf;
          }
          toObject(n = !1) {
            return O.toObject(n, this);
          }
          static toObject(n, c) {
            return C.BT(O.M(), n, c);
          }
          static fromObject(n) {
            return C.Uq(O.M(), n);
          }
          static deserializeBinary(n) {
            let c = new (Y().BinaryReader)(n),
              g = new O();
            return O.deserializeBinaryFromReader(g, c);
          }
          static deserializeBinaryFromReader(n, c) {
            return C.zj(O.MBF(), n, c);
          }
          serializeBinary() {
            var n = new (Y().BinaryWriter)();
            return O.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, c) {
            C.i0(O.M(), n, c);
          }
          serializeBase64String() {
            var n = new (Y().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response";
          }
        }
        class V extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              V.prototype.rank || C.Sg(V.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    rank: { n: 1, br: C.qM.readInt32, bw: C.gp.writeInt32 },
                    appid: { n: 2, br: C.qM.readInt32, bw: C.gp.writeInt32 },
                    item: { n: 3, c: b.vB },
                    last_week_rank: {
                      n: 4,
                      br: C.qM.readInt32,
                      bw: C.gp.writeInt32,
                    },
                    consecutive_weeks: {
                      n: 5,
                      br: C.qM.readInt32,
                      bw: C.gp.writeInt32,
                    },
                    first_top100: {
                      n: 6,
                      br: C.qM.readBool,
                      bw: C.gp.writeBool,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = C.w0(V.M())), V.sm_mbf;
          }
          toObject(n = !1) {
            return V.toObject(n, this);
          }
          static toObject(n, c) {
            return C.BT(V.M(), n, c);
          }
          static fromObject(n) {
            return C.Uq(V.M(), n);
          }
          static deserializeBinary(n) {
            let c = new (Y().BinaryReader)(n),
              g = new V();
            return V.deserializeBinaryFromReader(g, c);
          }
          static deserializeBinaryFromReader(n, c) {
            return C.zj(V.MBF(), n, c);
          }
          serializeBinary() {
            var n = new (Y().BinaryWriter)();
            return V.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, c) {
            C.i0(V.M(), n, c);
          }
          serializeBase64String() {
            var n = new (Y().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank";
          }
        }
        class k extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              k.prototype.language || C.Sg(k.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    language: {
                      n: 1,
                      br: C.qM.readString,
                      bw: C.gp.writeString,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = C.w0(k.M())), k.sm_mbf;
          }
          toObject(n = !1) {
            return k.toObject(n, this);
          }
          static toObject(n, c) {
            return C.BT(k.M(), n, c);
          }
          static fromObject(n) {
            return C.Uq(k.M(), n);
          }
          static deserializeBinary(n) {
            let c = new (Y().BinaryReader)(n),
              g = new k();
            return k.deserializeBinaryFromReader(g, c);
          }
          static deserializeBinaryFromReader(n, c) {
            return C.zj(k.MBF(), n, c);
          }
          serializeBinary() {
            var n = new (Y().BinaryWriter)();
            return k.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, c) {
            C.i0(k.M(), n, c);
          }
          serializeBase64String() {
            var n = new (Y().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Request";
          }
        }
        class F extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              F.prototype.countries || C.Sg(F.M()),
              le.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: { countries: { n: 1, c: K, r: !0, q: !0 } },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = C.w0(F.M())), F.sm_mbf;
          }
          toObject(n = !1) {
            return F.toObject(n, this);
          }
          static toObject(n, c) {
            return C.BT(F.M(), n, c);
          }
          static fromObject(n) {
            return C.Uq(F.M(), n);
          }
          static deserializeBinary(n) {
            let c = new (Y().BinaryReader)(n),
              g = new F();
            return F.deserializeBinaryFromReader(g, c);
          }
          static deserializeBinaryFromReader(n, c) {
            return C.zj(F.MBF(), n, c);
          }
          serializeBinary() {
            var n = new (Y().BinaryWriter)();
            return F.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, c) {
            C.i0(F.M(), n, c);
          }
          serializeBase64String() {
            var n = new (Y().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response";
          }
        }
        class K extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              K.prototype.country_code || C.Sg(K.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    country_code: {
                      n: 1,
                      br: C.qM.readString,
                      bw: C.gp.writeString,
                    },
                    name: { n: 2, br: C.qM.readString, bw: C.gp.writeString },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = C.w0(K.M())), K.sm_mbf;
          }
          toObject(n = !1) {
            return K.toObject(n, this);
          }
          static toObject(n, c) {
            return C.BT(K.M(), n, c);
          }
          static fromObject(n) {
            return C.Uq(K.M(), n);
          }
          static deserializeBinary(n) {
            let c = new (Y().BinaryReader)(n),
              g = new K();
            return K.deserializeBinaryFromReader(g, c);
          }
          static deserializeBinaryFromReader(n, c) {
            return C.zj(K.MBF(), n, c);
          }
          serializeBinary() {
            var n = new (Y().BinaryWriter)();
            return K.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, c) {
            C.i0(K.M(), n, c);
          }
          serializeBase64String() {
            var n = new (Y().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response_Country";
          }
        }
        var Q;
        ((m) => {
          function n(g, h, p) {
            return g.SendMsg(
              "StoreTopSellers.GetWeeklyTopSellers#1",
              (0, ie.I8)($, h, p),
              O,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetWeeklyTopSellers = n;
          function c(g, h, p) {
            return g.SendMsg(
              "StoreTopSellers.GetCountryList#1",
              (0, ie.I8)(k, h, p),
              F,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetCountryList = c;
        })(Q || (Q = {}));
        var ge = o(84192),
          Te = o(71742),
          Ie = o(3166);
        const lt = 20;
        class Ye {
          m_WebAPI;
          m_Storage;
          m_promiseInitialize;
          m_rtCurrentWeek;
          constructor(n, c) {
            (this.m_WebAPI = n), (this.m_Storage = c);
          }
          async Initialize(n) {
            return (
              this.m_promiseInitialize ||
                (this.m_promiseInitialize = new Promise((c, g) => {
                  let h;
                  (Ie.TS.EUNIVERSE == ae.Rv || Ie.TS.EUNIVERSE == ae.CII) &&
                    (h = 1539068400),
                    this.LoadCountryList()
                      .then(() =>
                        this.LoadCurrentWeekStart(h, n).then((p) => {
                          (this.m_rtCurrentWeek = p), c();
                        }),
                      )
                      .catch(g);
                })),
              this.m_promiseInitialize
            );
          }
          m_rgCountryList;
          static k_nCountryListMaxCacheTime = 1e3 * 60 * 60 * 24;
          async LoadCountryList() {
            if (!this.m_rgCountryList) {
              const n = "TopSellersCountryList_" + Ie.TS.LANGUAGE;
              if (
                ((this.m_rgCountryList = await this.m_Storage.GetObject(n)),
                !this.m_rgCountryList ||
                  this.m_rgCountryList.dtTimeStored +
                    Ye.k_nCountryListMaxCacheTime <
                    Date.now())
              ) {
                const c = ie.w.Init(k);
                c.Body().set_language(Ie.TS.LANGUAGE);
                const g = await Q.GetCountryList(
                  this.m_WebAPI.GetServiceTransport(),
                  c,
                );
                if (g.GetEResult() == q.R) {
                  let h = g
                    .Body()
                    .countries()
                    .map((p) => p.toObject());
                  h.sort((p, x) => (p.name < x.name ? -1 : 1)),
                    (this.m_rgCountryList = {
                      rgCountryCodes: h,
                      dtTimeStored: Date.now(),
                    }),
                    this.m_Storage.StoreObject(n, this.m_rgCountryList);
                } else
                  this.m_rgCountryList = {
                    rgCountryCodes: [
                      { country_code: "US", name: "United States" },
                    ],
                    dtTimeStored: 0,
                  };
              }
            }
            return this.m_rgCountryList;
          }
          BIsValidTopSellersCountry(n) {
            return !!this.ValidateCountryCode(n);
          }
          ValidateCountryCode(n) {
            return (
              (0, Te.wT)(
                this.m_rgCountryList,
                "Country list should already be loaded",
              ),
              this.m_rgCountryList.rgCountryCodes.find(
                (c) => c.country_code == n,
              )
                ? n
                : ""
            );
          }
          GetCurrentWeek() {
            return this.m_rtCurrentWeek;
          }
          async LoadCurrentWeekStart(n, c) {
            const g = this.ValidateCountryCode(c);
            let h = ie.w.Init($);
            (0, ge.rV)(h),
              (0, ge.Bn)(h, ht),
              g && h.Body().set_country_code(g),
              n && h.Body().set_start_date(n),
              h.Body().set_page_count(lt);
            let p = await Q.GetWeeklyTopSellers(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              h,
            );
            if (p.GetEResult() != q.R) throw "error loading top sellers";
            return p.Body().start_date();
          }
        }
        const mt = "TopSellers";
        function L(m, n) {
          const { data: c } = (0, ne.I)({
            queryKey: [mt, "Initialization"],
            queryFn: () =>
              m
                .Initialize(n)
                .then(() => ({
                  rtCurrentWeek: m.GetCurrentWeek(),
                  bCountryListInitialized: !0,
                })),
            staleTime: 1 / 0,
          });
          return c || { rtCurrentWeek: void 0, bCountryListInitialized: !1 };
        }
        var J = o(6469),
          X = o(79809);
        function me(m) {
          let n = 50;
          return (
            m < 2009 ? (n = 5) : m < 2014 ? (n = 10) : m < 2018 && (n = 25), n
          );
        }
        class De {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopMonthlyReleases(n, c) {
            let g = ie.w.Init(X.GM);
            const h = new Date(n, c, 15);
            g.Body().set_rtime_month(Math.floor(h.getTime() / 1e3)),
              g.Body().set_include_dlc(!0);
            const p = me(n);
            g.Body().set_top_results_limit(p);
            let x = await X.ZG.GetMonthTopAppReleases(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              g,
            );
            if (x.GetEResult() != q.R) {
              if (x.GetEResult() == q.S7) return { bSQLError: !0 };
              if (x.GetEResult() == q.p) return {};
              throw "error loading top releases";
            }
            return x.Body().toObject();
          }
        }
        const Ee = "useMonthlyTopRelease";
        function d(m, n, c) {
          const { data: g } = (0, ne.I)({
            queryKey: [Ee, n, c],
            queryFn: () => m.LoadTopMonthlyReleases(n, c),
          });
          return g;
        }
        var ze = o(72609);
        class He {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopYearlyReleases(n) {
            let c = ie.w.Init(X.FN);
            const g = new Date(n, 1, 15);
            c.Body().set_rtime_year(Math.floor(g.getTime() / 1e3)),
              c.Body().set_include_dlc(!0);
            const h =
              (ze.iA.is_support, this.m_WebAPI.GetAnonymousServiceTransport());
            let p = await X.ZG.GetYearTopAppReleases(h, c);
            if (p.GetEResult() != q.R) {
              if (p.GetEResult() == q.S7) return { bSQLError: !0 };
              if (p.GetEResult() == q.p) return {};
              throw "error loading top releases";
            }
            const x = p.Body().toObject();
            return ze.iA.is_support && x.top_app_list.length == 0, x;
          }
        }
        function Ne() {
          const m = {
              top_app_list: [],
              top_combined_app_and_dlc_releases: [],
              top_dlc_releases: [],
            },
            n = [
              EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
              EAppNewReleaseRank.k_EAppNewReleaseRank_Gold,
              EAppNewReleaseRank.k_EAppNewReleaseRank_Silver,
              EAppNewReleaseRank.k_EAppNewReleaseRank_Bronze,
            ],
            c = [
              {
                appid: 400,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_Sellers,
              },
              {
                appid: 440,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_Played,
              },
              {
                appid: 620,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_SteamDeck_Played,
              },
              {
                appid: 583950,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_Controller_Played,
              },
              {
                appid: 546560,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_VR_Played,
              },
            ];
          for (const h of c)
            for (const p of n)
              m.top_app_list.push({ ...h, app_release_rank: p }),
                m.top_app_list.push({ ...h, appid: 730, app_release_rank: p }),
                m.top_app_list.push({ ...h, appid: 540, app_release_rank: p });
          const g = Math.round(new Date().getTime() / 1e3);
          for (const h of n)
            m.top_combined_app_and_dlc_releases.push(
              { appid: 400, app_release_rank: h, rtime_release: g },
              { appid: 440, app_release_rank: h, rtime_release: g },
              { appid: 620, app_release_rank: h, rtime_release: g },
              { appid: 583950, app_release_rank: h, rtime_release: g },
            );
          return m;
        }
        const at = "useYearlyTopRelease";
        function ct(m, n) {
          const { data: c } = (0, ne.I)({
            queryKey: [at, n],
            queryFn: () => m.LoadTopYearlyReleases(n),
          });
          return c;
        }
        class dt {
          m_DynamicUserStore;
          m_TopSellersStore;
          m_TopMonthlyReleasesStore;
          m_TopYearlyReleasesStore;
          m_WebAPI;
          async Initialize(n, c) {
            (this.m_WebAPI = n),
              (this.m_TopSellersStore = new Ye(this.m_WebAPI, c)),
              (this.m_TopMonthlyReleasesStore = new De(this.m_WebAPI)),
              (this.m_TopYearlyReleasesStore = new He(this.m_WebAPI)),
              (this.m_DynamicUserStore = await J.Fm.Get().HintLoad());
          }
          get TopSellersStore() {
            return this.m_TopSellersStore;
          }
          get TopMonthlyReleasesStore() {
            return this.m_TopMonthlyReleasesStore;
          }
          get TopYearlyReleasesStore() {
            return this.m_TopYearlyReleasesStore;
          }
          get DynamicUserStore() {
            return this.m_DynamicUserStore;
          }
        }
        const ht = {
          include_basic_info: !0,
          include_assets: !0,
          include_trailers: !0,
          include_release: !0,
          include_reviews: !0,
          include_platforms: !0,
          include_screenshots: !0,
          include_tag_count: 20,
        };
        var nt = o(89921),
          Pe = o.n(nt),
          pt = o(74812),
          E = o.n(pt),
          ee = o(90626),
          ft = o(24805),
          Ze = o(7582),
          jt = o(34121),
          ke = o(10142),
          Ge = o(84676),
          Le = o(36118),
          We = o(92298),
          Ve = o.n(We),
          ea = o(19367),
          rt = o.n(ea),
          Ot = o(16346),
          ta = o(34360),
          ja = o(95863),
          xe = o.n(ja),
          Ct = o(71421),
          pe = o(36707),
          re = o(18210),
          $e = o(92264);
        function aa(m) {
          const { toolTipContent: n } = m,
            c = Ca({ ...m });
          return (0, e.jsx)(Ct.Gq, {
            toolTipContent: n,
            children: (0, e.jsx)("div", {
              className: (0, pe.A)(xe().CalendarBtn),
              onClick: (g) =>
                c(g, { bDisableMouseOverlay: !0, bAlwaysOnTop: !0 }),
              children: (0, e.jsx)(Le.VvS, { color: "#c6d4df" }),
            }),
          });
        }
        function Ca(m) {
          return (0, ee.useCallback)(
            (c, g) => {
              const h = (0, e.jsx)(ya, { ...m });
              (0, Ot.lX)(h, c, g);
            },
            [m],
          );
        }
        function ya(m) {
          const { value: n, fnOnUpdate: c, minDate: g, maxDate: h } = m,
            p = (0, ee.useRef)(void 0),
            x = (0, ee.useRef)(null),
            A = (0, ee.useCallback)(
              (T) => {
                const _ = rt().unix(g),
                  ue = rt().unix(h);
                return (
                  T.isSameOrAfter(_, "month") && T.isSameOrBefore(ue, "month")
                );
              },
              [g, h],
            ),
            y = (0, ee.useCallback)(
              (T) => {
                c(T.unix()), p.current.Hide();
              },
              [c],
            ),
            H = (0, ee.useMemo)(() => {
              if (!rt().locales().includes("YearMonthPickerContextMenu")) {
                const T = Array.from({ length: 12 }, (ue, se) =>
                    (0, re.Gj)(new Date(2020, se, 1)),
                  ),
                  _ = Array.from({ length: 12 }, (ue, se) =>
                    (0, $e.oL)(new Date(2020, se, 1)),
                  );
                rt().defineLocale("YearMonthPickerContextMenu", {
                  months: T,
                  monthsShort: _,
                });
              }
              return rt()().clone().locale("YearMonthPickerContextMenu");
            }, []);
          return (0, e.jsx)(ta.tz, {
            refInstance: p,
            children: (0, e.jsx)(ta.kt, {
              onSelected: () => {},
              className: xe().PickerContainer,
              children: (0, e.jsx)("div", {
                onClick: (T) => {
                  T.preventDefault(), T.stopPropagation();
                },
                children: (0, e.jsx)(Ve(), {
                  ref: x,
                  value: H,
                  onChange: y,
                  dateFormat: "YYYY-MM",
                  timeFormat: !1,
                  closeOnSelect: !0,
                  isValidDate: A,
                  input: !1,
                  locale: "YearMonthPickerContextMenu",
                }),
              }),
            }),
          });
        }
        var Ft = o(31032),
          Bt = o(47515),
          Mt = o(85599),
          qe = o(41672),
          yt = o(27221),
          Re = o.n(yt);
        const wt = 25;
        function na(m) {
          const {
              rgAppIDs: n,
              children: c,
              nMonth: g,
              bTallCapsule: h,
              bBlurCapsules: p,
            } = m,
            x = (0, ee.useMemo)(() => {
              let A = 0,
                y = [...n];
              for (; y.length < 25; ) y.push(n[A % n.length]), A++;
              return y.map((H) => ke.A.Get().GetApp(H)).filter(Boolean);
            }, [n]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, pe.A)({
                  [Re().ImagesCtn]: !0,
                  [Re().TallCapsules]: h,
                  [Re().BlurCapsules]: p,
                  [Re().AnnualChart]: !g,
                }),
                children: (0, e.jsx)("div", {
                  className: Re().AllImagesCtn,
                  children: (0, e.jsx)("div", {
                    className: Re().AllImages,
                    children: (0, e.jsx)("div", {
                      className: (0, pe.A)({
                        [Re().ImageTint]: !0,
                        [`Month${g}`]: !0,
                        [Re().Wide2]: x.length <= 10,
                        [Re().Wide3]: x.length <= 20,
                      }),
                      children: x.map((A, y) =>
                        h
                          ? (0, e.jsx)(
                              "img",
                              { src: A.GetAssets().GetHeroCapsuleURL() },
                              "bg_" + A.GetAppID() + "+" + y,
                            )
                          : (0, e.jsx)(
                              "img",
                              { src: A.GetAssets().GetHeaderURL() },
                              "bg_" + A.GetAppID() + "+" + y,
                            ),
                      ),
                    }),
                  }),
                }),
              }),
              c,
            ],
          });
        }
        function ra(m) {
          const n = m > 1e12,
            c = new Date(n ? m : m * 1e3),
            g = {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            },
            h = new Intl.DateTimeFormat("en-US", g).format(c),
            p = new Date(
              c.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
            ),
            x = p.getMonth(),
            A = p.getFullYear(),
            y = p.getDate(),
            H = p.getHours();
          let T, _;
          for (
            y > 15 || (y === 15 && H >= 10) ? (T = x - 1) : (T = x - 2);
            T < 0;
          )
            (T += 12), (_ = (_ ?? A) - 1);
          _ = _ ?? A;
          const ue = new Date(Date.UTC(_, T, 15, 17, 0));
          return Math.floor(ue.getTime() / 1e3);
        }
        function At(m) {
          const [n, c] = m.split("_");
          let g = parseInt(c, 10),
            p = {
              january: 0,
              february: 1,
              march: 2,
              april: 3,
              may: 4,
              june: 5,
              july: 6,
              august: 7,
              september: 8,
              october: 9,
              november: 10,
              december: 11,
            }[n.toLowerCase()];
          if (p === void 0) return { dtMidMonth: null, dtTestMonth: null };
          let x = p,
            A = g;
          return (
            p == 11 ? ((x = 0), (A += 1)) : (x += 1),
            { dtMidMonth: new Date(g, p, 15), dtTestMonth: new Date(A, x, 15) }
          );
        }
        function Tt(m, n) {
          const c = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
          ];
          if (n < 0 || n > 11)
            throw new Error("Invalid month index. Must be between 0 and 11.");
          return `${c[n]}_${m}`;
        }
        var be = o(21042),
          zt = o(56330),
          Ht = o(91576),
          St = o(98609),
          Z = o(41635),
          ve = o(87853),
          _e = o.n(ve);
        function sa(m) {
          let n = _e().PlatinumSection;
          switch (m) {
            case X.s4.NH:
              n = _e().GoldSection;
              break;
            case X.s4.U1:
              n = _e().SilverSection;
              break;
            case X.s4.DB:
              n = _e().BronzeSection;
              break;
          }
          return n;
        }
        function Nt(m, n, c, g, h, p, x, A) {
          n?.length > 25 &&
            m.jsondata.sale_sections.push({
              ...(0, be.Sm)("items", "#Sale_default_label_148"),
              capsules: n.map((y) => ({
                id: y,
                type: g.has(y) ? "dlc" : "game",
              })),
              capsules_per_row_array: [1],
              show_as_carousel: !1,
              carousel_rows: 1,
              single_item_style: "library",
              use_random_order: !0,
              cap_section_content: !1,
              cap_section_row_count: n.length,
              disable_background: !0,
              enable_faceted_browsing: !0,
              min_capsule_matches_for_facet_values: 5,
              max_facet_values_for_facet: 5,
              facet_sort_order: 1,
              cap_item_count: 0,
              facets: c,
              show_on_tabs: p ? [p] : void 0,
              prefer_assets_without_overrides: h,
              show_deck_compability_details: !!x,
              show_as_demos: !!A,
              prefer_demo_store_page: !!A,
            });
        }
        function oa(m, n, c, g, h, p, x, A) {
          if (St.iA.logged_in) {
            const y = J.Fm.Get(),
              H = n.filter((_) => y.BIsGameWishlisted(_));
            H?.length > 0 &&
              m.jsondata.sale_sections.push({
                ...(0, be.Sm)("items", "#Sale_OnWishlist"),
                capsules: H.map((_) => ({
                  id: _,
                  type: g.has(_) ? "dlc" : "game",
                })),
                capsules_per_row_array: H.length < 3 ? [2] : [5],
                carousel_rows: 1,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array: H.length < 3 ? ["grid"] : ["tall"],
                random_from_entire_set: !0,
                show_on_tabs: p ? [p] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!x,
                show_as_demos: !!A,
                prefer_demo_store_page: !!A,
              });
            const T = n.filter(
              (_) => y.BIsGameRecommended(_) && !y.BIsGameIgnored(_),
            );
            if (T?.length > 0) {
              const _ = T.length;
              m.jsondata.sale_sections.push({
                ...(0, be.Sm)("items", "#Sale_default_label_RecommendedForYou"),
                capsules: T.map((ue) => ({
                  id: ue,
                  type: g.has(ue) ? "dlc" : "game",
                })),
                capsules_per_row_array: _ == 2 ? [2] : [3, 2],
                carousel_rows: 2,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array:
                  _ == 2 ? ["grid"] : ["tall", "grid"],
                show_on_tabs: p ? [p] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!x,
                show_as_demos: !!A,
                prefer_demo_store_page: !!A,
              });
            }
            if (A) {
              const _ = c.filter((ue) => {
                if (!y.BIsGameOwned(ue)) {
                  const se = ke.A.Get().GetApp(ue);
                  return y.BIsGameOwned(se.GetParentAppID());
                }
                return !1;
              });
              _.length > 0 &&
                m.jsondata.sale_sections.push({
                  ...(0, be.Sm)("dlc_for_you", "#Sale_default_label_246"),
                  capsules: _.map((ue) => ({ id: ue, type: "dlc" })),
                  dlc_for_you_data: {
                    group_by_parent_app: !0,
                    hide_dlc_stats: !0,
                    parent_app_page_size: 5,
                    hide_dlc_grouping: !0,
                  },
                  capsules_per_row_array: [3],
                  show_as_carousel: !0,
                  disable_background: !0,
                  show_on_tabs: p ? [p] : void 0,
                  prefer_assets_without_overrides: h,
                });
            }
          }
        }
        function wa(m, n) {
          const c = J.Fm.Get(),
            g = [],
            h = [],
            p = [],
            x = [],
            A = [];
          for (const y of m)
            c.BIsGameIgnored(y) ||
              (c.BIsGameRecommended(y)
                ? g.push(y)
                : c.BIsGameWishlisted(y)
                  ? h.push(y)
                  : n[1]?.includes(y)
                    ? p.push(y)
                    : n[2]?.includes(y)
                      ? x.push(y)
                      : A.push(y));
          return [
            ...(0, Z.fW)(g),
            ...(0, Z.fW)(h),
            ...(0, Z.fW)(p),
            ...(0, Z.fW)(x),
            ...(0, Z.fW)(A),
          ];
        }
        function ia(m, n, c, g, h, p, x, A) {
          m.jsondata.sale_sections.push({
            ...(0, be.Sm)("trailercarousel", ""),
            capsules: wa(n, c).map((y) => ({
              id: y,
              type: g.has(y) ? "dlc" : "game",
            })),
            use_random_order: !1,
            disable_background: !0,
            trailer_carousel_auto_advance_msec: 1e4,
            show_on_tabs: p ? [p] : void 0,
            prefer_assets_without_overrides: h,
            show_deck_compability_details: !!x,
            show_as_demos: !!A,
            prefer_demo_store_page: !!A,
          });
        }
        var la = o(50974);
        function Aa(m, n, c, g, h) {
          const p = (0, be.U)(la.wv, ae.DRF, m),
            x = !1,
            A = [...h, ...c],
            y = new Set(h);
          if (
            ((p.jsondata.sale_sections = []),
            c.length > 9 && ia(p, c, g, y, x),
            c?.length > 25)
          )
            for (let H in g) {
              const T = g[H];
              p.jsondata.sale_sections.push({
                ...(0, be.Sm)("items", "#SteamCharts_Monthly_Rank_" + H),
                capsules: T.map((_) => ({
                  id: _,
                  type: y.has(_) ? "dlc" : "game",
                })),
                capsules_per_row_array: [4],
                capsule_style_per_row_array: H == "1" ? ["tall"] : ["grid"],
                show_as_carousel: !1,
                use_random_order: !0,
                border_width: 1,
                default_subtitle:
                  "#SteamCharts_Monthly_Rank_" + H + "_subtitle",
                sale_section_classname: sa(Number.parseInt(H)),
                prefer_assets_without_overrides: x,
              });
            }
          else {
            const H = Object.values(c).flat();
            p.jsondata.sale_sections.push({
              ...(0, be.Sm)("items", "#SteamCharts_Monthly_Rank_All"),
              capsules: H.map((T) => ({
                id: T,
                type: y.has(T) ? "dlc" : "game",
              })),
              capsules_per_row_array:
                c?.length > 9 ? (c?.length > 15 ? [3] : [2]) : [1],
              single_item_style: c?.length < 9 ? "library" : "bordered",
              show_as_carousel: !1,
              use_random_order: !0,
              sale_section_classname: _e().AllTiers,
              prefer_assets_without_overrides: x,
            });
          }
          return (
            oa(p, A, h, y, x),
            Nt(p, c, n, y, x),
            p.jsondata.sale_sections.push({
              ...(0, be.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, be.r3)(),
            }),
            p
          );
        }
        function kt(m, n, c, g, h) {
          const { data: p } = (0, ne.I)({
            queryKey: ["useMonthEventModel", m],
            queryFn: () => {
              try {
                return Aa(m, n, c, g, h);
              } catch (x) {
                return (
                  console.error(`Montly new release: ${m} failed: `, x), null
                );
              }
            },
          });
          return p;
        }
        function Sa(m) {
          const {
              rgFilteredDLCsAppIDs: n,
              rgFilteredCombinedAppsAndDLC: c,
              promotionName: g,
              rgFilteredAppIDByTier: h,
              facets: p,
            } = m,
            x = kt(g, p, c, h, n),
            A = (0, ae.sfN)(St.TS.LANGUAGE),
            y = (0, be.oR)();
          return !x || y
            ? x === null
              ? (0, e.jsx)("div", {
                  className: zt.ErrorStylesWithIcon,
                  children: (0, re.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(Mt.t, {
                  string: (0, re.we)("#Loading"),
                  position: "center",
                })
            : (0, e.jsx)(Ht._, {
                eventModel: x,
                language: A,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              });
        }
        function ca(m, n, c, g) {
          (0, ee.useEffect)(() => {
            if (m == null && g != Ge.Sq && c) {
              const h = Ea(c);
              h?.length > 0
                ? ke.A.Get()
                    .HintLoadStoreApps(h, ft.Xh)
                    .then(() => n(h))
                : n([]);
            }
          }, [g, c, m, n]);
        }
        function Ea(m) {
          const n = J.Fm.Get(),
            c = m
              .filter((g) => {
                if (!n.BIsGameOwned(g)) {
                  const h = ke.A.Get().GetApp(g);
                  return (
                    h && h.BIsVisible() && n.BIsGameOwned(h.GetParentAppID())
                  );
                }
                return !1;
              })
              .map((g) => ke.A.Get().GetApp(g).GetParentAppID())
              .filter(Boolean);
          return Array.from(new Set(c));
        }
        var Ce = o(19298),
          vt = o(92757);
        const _a = ["topnewreleases", "bestofyear"];
        function Qe(m) {
          return m.split(/[?#]/)[0];
        }
        function Lt(m) {
          const n = Qe(m);
          return n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n;
        }
        function Pt(m) {
          if (!m) return !1;
          const n = U.B.SteamCharts(),
            c = Qe(m);
          if (Lt(c) == Lt(n)) return !0;
          if (!c.startsWith(n)) return !1;
          const g = c.slice(n.length).split("/")[0];
          return !_a.includes(g);
        }
        function Ke() {
          const m = (0, vt.W6)();
          return ee.useCallback(
            (n, c) => {
              if (Pt(n)) {
                c?.bReplace
                  ? window.location.replace(n)
                  : window.location.assign(n);
                return;
              }
              c?.bReplace ? m.replace(n, c?.state) : m.push(n, c?.state);
            },
            [m],
          );
        }
        var Yt = o(24660),
          Ue = o(4370);
        function da(m, n) {
          const c = Lt(window.location.pathname),
            g = Lt(m);
          return n ? c == g : c == g || c.startsWith(g + "/");
        }
        function xt(m) {
          const {
              to: n,
              exact: c,
              activeClassName: g,
              className: h,
              children: p,
              ...x
            } = m,
            A = typeof n == "string" ? n : void 0;
          return Pt(A)
            ? (0, e.jsx)(Yt.Ii, {
                href: A,
                className: (0, pe.A)(h, da(A, !!c) ? g : void 0),
                ...x,
                children: p,
              })
            : (0, e.jsx)(Ue.A, {
                to: n,
                exact: c,
                activeClassName: g,
                className: h,
                ...x,
                children: p,
              });
        }
        function Et(m) {
          const { to: n, children: c, ...g } = m,
            h = typeof n == "string" ? n : void 0;
          return Pt(h)
            ? (0, e.jsx)(Yt.Ii, { href: h, ...g, children: c })
            : (0, e.jsx)(Ue.X, { to: n, ...g, children: c });
        }
        function Gt(m) {
          const { salePageName: n, TopMonthlyReleasesStore: c } = m,
            g = (0, Ze.f1)(),
            { dtMidMonth: h, dtTestMonth: p } = At(n);
          return !h ||
            Math.floor(p.getTime() / 1e3) > g ||
            h.getFullYear() < Rt ||
            (h.getFullYear() == Rt && h.getMonth() < ua)
            ? (0, e.jsx)("div", {
                children: (0, re.we)(
                  "#DateTimePicker_Fallback_Invalid_DateTime",
                ),
              })
            : (0, e.jsx)(Ba, {
                TopMonthlyReleasesStore: c,
                nMonth: h.getMonth(),
                nYear: h.getFullYear(),
                promotionName: n,
              });
        }
        const st = { ...ft.Xh, apply_user_filters: !0 };
        function Da(m, n, c, g) {
          const h = d(m, n, c),
            p = (0, ee.useMemo)(
              () =>
                h
                  ? Array.from(
                      new Set([
                        ...(h.top_dlc_releases?.map((T) => T.appid) || []),
                        ...(h.top_combined_app_and_dlc_releases?.map(
                          (T) => T.appid,
                        ) || []),
                      ]),
                    )
                  : (g && g(null), []),
              [h, g],
            ),
            x = (0, Ge.zX)(p, st),
            A = (0, ee.useMemo)(
              () =>
                !h || x == Ge.Sq
                  ? []
                  : h.top_dlc_releases
                      ?.filter((T) => !ke.A.Get().BIsAppMissing(T.appid))
                      .map((T) => T.appid),
              [h, x],
            ),
            { rgFilteredCombinedAppsAndDLC: y, rgFilteredAppIDByTier: H } = (0,
            ee.useMemo)(() => {
              if (!h || x == Ge.Sq)
                return {
                  rgFilteredCombinedAppsAndDLC: [],
                  rgFilteredAppIDByTier: [],
                };
              const T = h?.top_combined_app_and_dlc_releases || [],
                _ = [];
              return {
                rgFilteredCombinedAppsAndDLC: T.filter(
                  (se) => !ke.A.Get().BIsAppMissing(se.appid),
                ).map((se) => {
                  const te = se.app_release_rank;
                  return _[te] || (_[te] = []), _[te].push(se.appid), se.appid;
                }),
                rgFilteredAppIDByTier: _,
              };
            }, [x, h]);
          return {
            rgAppIDs: p,
            rgMonthlyReleases: h,
            rgFilteredAppIDByTier: H,
            rgFilteredCombinedAppsAndDLC: y,
            rgFilteredDLCsAppIDs: A,
            loadState: x,
          };
        }
        function Ba(m) {
          const {
              TopMonthlyReleasesStore: n,
              nYear: c,
              nMonth: g,
              promotionName: h,
            } = m,
            [p, x] = (0, ee.useState)(null),
            [A, y] = (0, ee.useState)(null),
            {
              rgAppIDs: H,
              rgMonthlyReleases: T,
              rgFilteredAppIDByTier: _,
              rgFilteredCombinedAppsAndDLC: ue,
              rgFilteredDLCsAppIDs: se,
              loadState: te,
            } = Da(n, c, g);
          return (
            (0, ee.useEffect)(() => {
              p ||
                (0, jt.$R)({ bForceFeatureTagForFullController: !1 }).then(x);
            }, [p]),
            ca(A, y, se, te),
            !T || te == Ge.Sq || !p || A == null || !H
              ? (0, e.jsxs)(Ce.Z, {
                  className: Pe().ChartPage,
                  children: [
                    (0, e.jsx)(ot, { nMonth: g, nYear: c }),
                    (0, e.jsx)(Mt.t, {
                      string: (0, re.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : H.length == 0
                ? (0, e.jsxs)(Ce.Z, {
                    className: Pe().ChartPage,
                    children: [
                      (0, e.jsx)(ot, { nMonth: g, nYear: c }),
                      (0, e.jsx)("div", {
                        className: Pe().NoticeBox,
                        children: (0, re.we)(
                          T.bSQLError
                            ? "#Error_ErrorCommunicatingWithNetwork"
                            : "#SteamCharts_NewMonth_NoRelease",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(Ce.Z, {
                    className: Pe().ChartPage,
                    children: [
                      (0, e.jsx)(na, {
                        rgAppIDs: ue,
                        nMonth: g,
                        bBlurCapsules: !0,
                        children: (0, e.jsx)(ot, { nMonth: g, nYear: c }),
                      }),
                      (0, e.jsx)(Sa, {
                        promotionName: h,
                        rgFilteredCombinedAppsAndDLC: ue,
                        rgFilteredAppIDByTier: _,
                        rgFilteredDLCsAppIDs: se,
                        facets: p,
                      }),
                    ],
                  })
          );
        }
        function Wt(m, n) {
          return (0, re.we)(
            "#SteamCharts_Monthly_Title_wMonthAndYear",
            (0, re.we)("#Sale_Reservation_MonthNoun_" + (m + 1)),
            n,
          );
        }
        const Rt = 2003,
          ua = 8,
          Oe = 1063584e3;
        function ot(m) {
          const { nMonth: n, nYear: c } = m,
            g = Ke(),
            h = (0, Ft.yk)() || (0, Bt.tx)(window),
            p = (0, Ze.f1)(),
            x = n > 0 ? c : c - 1,
            A = n > 0 ? n - 1 : 11,
            y = Tt(x, A),
            H = c > Rt || n > ua,
            T = n < 11 ? c : c + 1,
            _ = n < 11 ? n + 1 : 0,
            ue = Tt(T, _),
            se = new Date(_ == 11 ? c + 1 : c, _ == 11 ? 0 : _ + 1, 15),
            te = Math.floor(se.getTime() / 1e3) < p,
            ye = (0, ee.useCallback)(
              (Xe) => {
                h.active_modal ||
                  (Xe && te
                    ? g(je.TopNewReleases(ue))
                    : !Xe && H && g(je.TopNewReleases(y)));
              },
              [h.active_modal, te, H, g, ue, y],
            );
          return (
            (0, qe.E)("ArrowLeft", () => ye(!1), !0, !0),
            (0, qe.E)("Left", () => ye(!1), !0, !0),
            (0, qe.E)("ArrowRight", () => ye(!0), !0, !0),
            (0, qe.E)("Right", () => ye(!0), !0, !0),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, pe.A)(E().HeaderCtn, E().WithSubtitle),
                  children: (0, e.jsx)("h1", { children: Wt(n, c) }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, pe.A)(E().PageSubtitle),
                  children: [
                    (0, re.we)("#SteamCharts_Monthly_SubTitle", me(c)),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("span", {
                      children: (0, re.we)(
                        "#SteamCharts_Monthly_PublishSchedule",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)(Ce.Z, {
                  className: (0, pe.A)(E().ChartRangeCtn),
                  children: [
                    (0, e.jsx)(Ct.Gq, {
                      toolTipContent: Wt(A, x),
                      children: (0, e.jsx)("div", {
                        className: (0, pe.A)({
                          [E().ChartNavCtn]: !0,
                          [E().Disabled]: !H,
                        }),
                        children: H
                          ? (0, e.jsx)(Et, {
                              to: H ? je.TopNewReleases(y) : void 0,
                              className: E().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: E().ChartNavPrev,
                                children: "\xA0",
                              }),
                            })
                          : (0, e.jsx)("div", {
                              className: E().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: E().ChartNavPrev,
                                children: "\xA0",
                              }),
                            }),
                      }),
                    }),
                    (0, e.jsx)(Ct.Gq, {
                      toolTipContent: Wt(_, T),
                      children: (0, e.jsx)("div", {
                        className: (0, pe.A)({
                          [E().ChartNavCtn]: !0,
                          [E().Disabled]: !te,
                        }),
                        children: te
                          ? (0, e.jsx)(Et, {
                              to: je.TopNewReleases(ue),
                              className: E().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: E().ChartNavNext,
                                children: "\xA0",
                              }),
                            })
                          : (0, e.jsx)("div", {
                              className: E().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: E().ChartNavNext,
                                children: "\xA0",
                              }),
                            }),
                      }),
                    }),
                    (0, e.jsx)(aa, {
                      toolTipContent: (0, re.we)(
                        "#SteamCharts_Monthly_Calendar",
                      ),
                      minDate: Oe,
                      maxDate: ra(p),
                      value: Math.floor(
                        new Date(c, n, 15, 12, 0, 0).getTime() / 1e3,
                      ),
                      fnOnUpdate: (Xe) => {
                        const va = new Date(Xe * 1e3),
                          Va = Tt(va.getFullYear(), va.getMonth());
                        g(je.TopNewReleases(Va));
                      },
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Ut(m) {
          if (!m) return "";
          const n = new Date(m * 1e3);
          return `${n.getUTCFullYear()}-${n.getUTCMonth() + 1}-${n.getUTCDate()}`;
        }
        function ga(m) {
          return m || "global";
        }
        var et = o(25792),
          Vt = o(27638),
          Ma = o(77187),
          Ta = o(65946);
        const _t = 2,
          Na = 60,
          ma = 2022;
        function ka(m, n) {
          const c = new Date(m * 1e3),
            g = "America/Los_Angeles",
            h = Number(
              new Intl.DateTimeFormat("en-US", {
                timeZone: g,
                year: "numeric",
              }).format(c),
            ),
            x =
              new Date(
                new Intl.DateTimeFormat("en-US", {
                  timeZone: g,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                  .formatToParts(new Date(Date.UTC(h, 11, 31)))
                  .reduce((A, y) => ((A[y.type] = y.value), A), {}).year +
                  "-12-31T10:00:00",
              ).getTime() -
              n * 24 * 60 * 60 * 1e3;
          return c.getTime() >= x;
        }
        function Dt(m, n, c) {
          const g = n * 1e3,
            p = new Date(g).getUTCFullYear();
          return (
            m >= ma &&
            m < p + 1 &&
            (m != p || (c && St.iA.is_support && ka(n, Na)) || ka(n, _t))
          );
        }
        function Xa(m, n) {
          const c = new Date().getUTCFullYear(),
            g = [];
          for (let h = c, p = 0; h >= ma && p < n; h--, p++)
            Dt(h, m, !1) ? g.push(h) : p--;
          return g;
        }
        var Kt = o(22275);
        function It(m) {
          const {
            TopSellersStore: n,
            TopMonthlyReleasesStore: c,
            DynamicUserStore: g,
            children: h,
          } = m;
          (0, Vt.Y)(E().SteamChartsPage);
          const p = La(g);
          let x = ee.useMemo(() => ({ content_descriptors_excluded: p }), [p]);
          const A = ee.useRef(null);
          return (
            ee.useEffect(() => {
              A.current && A.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsxs)(Ce.Z, {
              className: E().SteamChartsRootPanel,
              navRef: A,
              children: [
                (0, e.jsx)("div", {
                  className: E().SteamChartsRootPosition,
                  children: (0, e.jsx)("div", {
                    className: E().AlignWithMenu,
                    children: (0, e.jsxs)(Ce.Z, {
                      className: E().SteamChartsMenu,
                      children: [
                        (0, e.jsx)(Ce.Z, {
                          className: E().MenuGroup,
                          children: (0, e.jsx)("div", {
                            className: E().MenuLinks,
                            children: (0, e.jsxs)(xt, {
                              to: je.Overview(),
                              exact: !0,
                              activeClassName: E().ActiveLink,
                              children: [
                                (0, e.jsx)("span", {
                                  className: (0, pe.A)(E().MenuItemIcon),
                                  children: (0, e.jsx)(Le.ww0, {}),
                                }),
                                (0, re.we)("#SteamCharts_Menu_Overview"),
                              ],
                            }),
                          }),
                        }),
                        (0, e.jsx)(et.tH, { children: (0, e.jsx)(Pa, {}) }),
                        (0, e.jsx)(et.tH, {
                          children: (0, e.jsx)(Ga, { TopSellersStore: n }),
                        }),
                        (0, e.jsx)(et.tH, {
                          children: (0, e.jsx)(Be, {
                            TopMonthlyReleasesStore: c,
                          }),
                        }),
                        (0, e.jsx)(et.tH, { children: (0, e.jsx)(Ra, {}) }),
                      ],
                    }),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, pe.A)(
                    E().SteamChartsShell,
                    "SteamChartsShell",
                  ),
                  children: (0, e.jsx)("div", {
                    className: E().SteamChartsContent,
                    children: (0, e.jsx)(Ma.E2, {
                      defaultOptions: x,
                      children: (0, e.jsx)(et.tH, { children: h }),
                    }),
                  }),
                }),
              ],
            })
          );
        }
        function La(m) {
          return (0, Ta.q3)(() => m.ExcludedContentDescriptor);
        }
        function Pa() {
          return (0, e.jsxs)(Ce.Z, {
            className: E().MenuGroup,
            children: [
              (0, e.jsx)("div", {
                className: E().MenuHeader,
                children: (0, re.we)("#SteamCharts_Menu_LiveCharts"),
              }),
              (0, e.jsxs)(Ce.Z, {
                className: E().MenuLinks,
                children: [
                  (0, e.jsxs)(xt, {
                    className: E().MenuItemIcon,
                    to: je.TopSelling(Ie.TS.COUNTRY),
                    activeClassName: E().ActiveLink,
                    children: [
                      (0, e.jsx)(Le.t1X, {}),
                      (0, re.we)("#SteamCharts_Menu_TopSelling"),
                    ],
                  }),
                  (0, e.jsxs)(xt, {
                    className: E().MenuItemIcon,
                    to: je.MostPlayed(),
                    activeClassName: E().ActiveLink,
                    children: [
                      (0, e.jsx)(Le.N3h, {}),
                      (0, re.we)("#SteamCharts_Menu_MostPlayed"),
                    ],
                  }),
                  (0, e.jsxs)(xt, {
                    className: E().MenuItemIcon,
                    to: je.MostPlayedOnSteamDeck(),
                    activeClassName: E().ActiveLink,
                    children: [
                      (0, e.jsx)(Le.lRD, {}),
                      (0, re.we)("#SteamCharts_Menu_MostPlayedOnDeck"),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Ga(m) {
          const { TopSellersStore: n } = m,
            { rtCurrentWeek: c, bCountryListInitialized: g } = L(
              n,
              Ie.TS.COUNTRY,
            );
          if (!c || !g) return null;
          const h = ga(
            n.BIsValidTopSellersCountry(Ie.TS.COUNTRY) ? Ie.TS.COUNTRY : "",
          );
          let p = [];
          for (let x = 0; x < 3; x++) {
            const A = c - x * 60 * 60 * 24 * 7;
            p.push(
              (0, e.jsxs)(
                xt,
                {
                  to: je.TopSellers(h, Ut(A)),
                  activeClassName: E().ActiveLink,
                  fnCanTakeFocus: Kt.Nw,
                  children: [
                    (0, e.jsx)("span", {
                      className: (0, pe.A)(E().MenuItemIcon),
                      children: (0, e.jsx)(Le.VvS, { color: "#C3D3D8" }),
                    }),
                    (0, re.$z)(A, { timeZone: "UTC" }),
                  ],
                },
                A,
              ),
            );
          }
          return (0, e.jsxs)(Ce.Z, {
            className: (0, pe.A)(E().MenuGroup, E().Weekly),
            children: [
              (0, e.jsx)("div", {
                className: E().MenuHeader,
                children: (0, re.we)("#SteamCharts_Menu_WeeklyCharts"),
              }),
              (0, e.jsx)(Ce.Z, { className: E().MenuLinks, children: p }),
            ],
          });
        }
        function Be(m) {
          const n = (0, Ze.f1)(),
            c = ra(n),
            g = [c, c - 720 * 60 * 60, c - 1440 * 60 * 60];
          return (0, e.jsxs)(Ce.Z, {
            className: (0, pe.A)(E().MenuGroup, E().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: E().MenuHeader,
                children: (0, re.we)("#SteamCharts_Menu_MonthlyCharts"),
              }),
              (0, e.jsx)(Ce.Z, {
                className: E().MenuLinks,
                children: g.map((h) => {
                  const p = new Date(h * 1e3),
                    x = Tt(p.getFullYear(), p.getMonth()),
                    A = je.TopNewReleases(x),
                    y = window.location.pathname === A;
                  return (0, e.jsxs)(
                    xt,
                    {
                      className: y ? E().ActiveLink : "",
                      to: A,
                      fnCanTakeFocus: Kt.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, pe.A)(E().MenuItemIcon),
                          children: (0, e.jsx)(Le.VvS, { color: "#C3D3D8" }),
                        }),
                        (0, $e.CC)(h),
                      ],
                    },
                    "month_" + h,
                  );
                }),
              }),
            ],
          });
        }
        function Ra(m) {
          const n = (0, Ze.f1)(),
            c = (0, ee.useMemo)(() => Xa(n, 3), [n]);
          return (0, e.jsxs)(Ce.Z, {
            className: (0, pe.A)(E().MenuGroup, E().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: E().MenuHeader,
                children: (0, re.we)("#SteamCharts_Menu_YearlyCharts"),
              }),
              (0, e.jsx)(Ce.Z, {
                className: E().MenuLinks,
                children: c.map((g) => {
                  const h = je.BestOfYear("" + g),
                    p = window.location.pathname === h;
                  return (0, e.jsxs)(
                    Et,
                    {
                      className: (0, pe.A)(p ? E().ActiveLink : ""),
                      to: h,
                      fnCanTakeFocus: Kt.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, pe.A)(E().MenuItemIcon),
                          children: (0, e.jsx)(Le.VvS, { color: "#C3D3D8" }),
                        }),
                        g,
                      ],
                    },
                    g,
                  );
                }),
              }),
            ],
          });
        }
        var ha = o(68312),
          Zt = o(51079),
          Ja = o(179);
        function pa(m, n, c) {
          const g = (0, be.U)(la.yT, ae.DRF, "" + m),
            h = !0,
            p = { ...(0, be.Sm)("tabs", ""), tabs: [] };
          return (
            c.forEach((x, A) => {
              p.tabs.push({
                unique_id: A + 1,
                default_label: x.strTabTitleToken,
                localized_label: [],
                capsules: [],
              });
            }),
            (g.jsondata.sale_sections = [p]),
            c.forEach((x, A) => {
              const {
                  rgFilteredCombinedAppsAndDLC: y,
                  rgFilteredAppIDByTier: H,
                  rgFilteredDLCsAppIDs: T,
                } = x,
                _ = new Set(T),
                ue = [...T, ...y];
              g.jsondata.sale_sections.push({
                ...(0, be.Sm)("text_section", ""),
                text_section_contents: [
                  (0, re.we)(x.strTabSubTitleToken, m, m + 1),
                ],
                show_on_tabs: [A + 1],
                show_deck_compability_details: !!x.bShowDeckCompat,
                prefer_assets_without_overrides: h,
              });
              for (let se in H) {
                const te = H[se];
                g.jsondata.sale_sections.push({
                  ...(0, be.Sm)("items", "#SteamCharts_Yearly_Rank_" + se),
                  capsules: te.map((ye) => ({
                    id: ye,
                    type: _.has(ye) ? "dlc" : "game",
                  })),
                  capsules_per_row_array:
                    se == "3" ? [4] : se == "0" ? [4] : [3],
                  capsule_style_per_row_array: se == "0" ? ["tall"] : ["grid"],
                  show_as_carousel: !1,
                  use_random_order: !0,
                  border_width: 1,
                  default_subtitle:
                    "#SteamCharts_Yearly_Rank_" + se + "_subtitle",
                  show_on_tabs: [p.tabs[A].unique_id],
                  sale_section_classname: sa(Number.parseInt(se)),
                  prefer_assets_without_overrides: h,
                  show_deck_compability_details: !!x.bShowDeckCompat,
                  show_as_demos: !!x.bShowDemoInfo,
                  prefer_demo_store_page: !!x.bShowDemoInfo,
                });
              }
              oa(
                g,
                ue,
                T,
                _,
                h,
                p.tabs[A].unique_id,
                !!x.bShowDeckCompat,
                !!x.bShowDemoInfo,
              ),
                ia(
                  g,
                  y,
                  H,
                  _,
                  h,
                  p.tabs[A].unique_id,
                  !!x.bShowDeckCompat,
                  !!x.bShowDemoInfo,
                ),
                Nt(
                  g,
                  y,
                  n,
                  _,
                  h,
                  p.tabs[A].unique_id,
                  !!x.bShowDeckCompat,
                  !!x.bShowDemoInfo,
                );
            }),
            g.jsondata.sale_sections.push({
              ...(0, be.Sm)("text_section", ""),
              text_section_contents: [
                (0, re.we)("#SteamCharts_Yearly_FAQ") +
                  `
[url=${St.TS.HELP_BASE_URL}faqs/view/6C17-2BC1-2A01-9B76]${(0, re.we)("#SteamCharts_Yearly_FAQ_link")}[/url]`,
              ],
            }),
            g.jsondata.sale_sections.push({
              ...(0, be.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, be.r3)(),
            }),
            g
          );
        }
        function Ua(m, n, c) {
          const { data: g } = (0, ne.I)({
            queryKey: ["useYearEventModel", m],
            queryFn: () => {
              try {
                return pa(m, n, c);
              } catch (h) {
                return (
                  console.error(`Yearly new release: ${m} failed: `, h), null
                );
              }
            },
          });
          return g;
        }
        function Oa(m) {
          const { rgTabsData: n, nYear: c, facets: g } = m,
            h = Ua(c, g, n),
            p = (0, ae.sfN)(St.TS.LANGUAGE),
            x = (0, be.oR)();
          return !h || x
            ? h === null
              ? (0, e.jsx)("div", {
                  className: zt.ErrorStylesWithIcon,
                  children: (0, re.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(Mt.t, {
                  string: (0, re.we)("#Loading"),
                  position: "center",
                })
            : (0, e.jsx)(Ht._, {
                eventModel: h,
                language: p,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              });
        }
        function Fa(m) {
          const { salePageName: n, TopYearlyReleasesStore: c } = m,
            g = (0, Ze.f1)(),
            h = Number.parseInt(n),
            p = Ke();
          return Dt(h, g, !0)
            ? (0, e.jsx)(Ha, { nYear: h, TopYearlyReleasesStore: c })
            : (p(je.Overview(), { bReplace: !0 }),
              (0, e.jsx)("div", {
                children: (0, re.we)("#SteamCharts_Yearly_Unavailable"),
              }));
        }
        const za = {
          ...ft.Xh,
          apply_user_filters: !0,
          include_assets_without_overrides: !0,
        };
        function tt(m, n, c, g) {
          const h = g?.filter((y) => y.type == m),
            p = [],
            x = [],
            A = h
              ?.filter((y) => !ke.A.Get().BIsAppMissing(y.appid))
              .map((y) => {
                let H = y.app_release_rank;
                return (
                  H == X.s4.xE && (H = 0),
                  p[H] || (p[H] = []),
                  p[H].push(y.appid),
                  ke.A.Get().GetApp(y.appid)?.GetAppType() == b.uE._i &&
                    x.push(y.appid),
                  y.appid
                );
              });
          return {
            strTabTitleToken: n,
            strTabSubTitleToken: c,
            rgFilteredCombinedAppsAndDLC: A,
            rgFilteredAppIDByTier: p,
            rgFilteredDLCsAppIDs: x,
          };
        }
        function Qt(m, n) {
          const c = m + 1,
            g = new Date(Date.UTC(c, 0, n, 1, 0, 0)),
            h = new Intl.DateTimeFormat("en-US", {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: !1,
            }).formatToParts(g),
            p = (A) => Number(h.find((y) => y.type === A).value),
            x = Date.UTC(
              p("year"),
              p("month") - 1,
              p("day"),
              p("hour"),
              p("minute"),
              p("second"),
            );
          return Math.floor(x / 1e3);
        }
        function $a(m, n, c) {
          const g = (0, Ze.f1)(),
            h = g < Qt(n, 1),
            p = g < Qt(n, 15),
            x = ct(m, n),
            A = (0, ee.useMemo)(
              () =>
                x
                  ? Array.from(
                      new Set([
                        ...(x.top_dlc_releases?.map((T) => T.appid) || []),
                        ...(x.top_combined_app_and_dlc_releases?.map(
                          (T) => T.appid,
                        ) || []),
                        ...(x.top_app_list?.map((T) => T.appid) || []),
                      ]),
                    )
                  : (c && c(null), []),
              [x, c],
            ),
            y = (0, Ge.zX)(A, za),
            H = (0, ee.useMemo)(() => {
              if (!x || y == Ge.Sq) return [];
              const T = x?.top_combined_app_and_dlc_releases || [],
                _ = [],
                ue = T.filter((ye) => !ke.A.Get().BIsAppMissing(ye.appid)).map(
                  (ye) => {
                    let Xe = ye.app_release_rank;
                    return (
                      Xe == X.s4.xE && (Xe = 0),
                      _[Xe] || (_[Xe] = []),
                      _[Xe].push(ye.appid),
                      ye.appid
                    );
                  },
                );
              let se = [
                  {
                    strTabTitleToken: "#SteamCharts_Yearly_Tab_NewReleases",
                    strTabSubTitleToken: p
                      ? "#SteamCharts_Yearly_Tab_NewReleases_desc_pre"
                      : "#SteamCharts_Yearly_Tab_NewReleases_desc",
                    rgFilteredDLCsAppIDs:
                      x.top_dlc_releases
                        ?.filter((ye) => !ke.A.Get().BIsAppMissing(ye.appid))
                        .map((ye) => ye.appid) || [],
                    rgFilteredCombinedAppsAndDLC: ue,
                    rgFilteredAppIDByTier: _,
                  },
                ],
                te = tt(
                  X.Cm.Hm,
                  "#SteamCharts_Yearly_Tab_TopSellers",
                  h
                    ? "#SteamCharts_Yearly_Tab_TopSellers_desc_pre"
                    : "#SteamCharts_Yearly_Tab_TopSellers_desc",
                  x.top_app_list,
                );
              return (
                te.rgFilteredCombinedAppsAndDLC?.length > 0 && se.push(te),
                (te = tt(
                  X.Cm.UM,
                  "#SteamCharts_Yearly_Tab_MostPlayed",
                  "#SteamCharts_Yearly_Tab_MostPlayed_desc",
                  x.top_app_list,
                )),
                te.rgFilteredCombinedAppsAndDLC?.length > 0 && se.push(te),
                (te = tt(
                  X.Cm.IJ,
                  "#SteamCharts_Yearly_Tab_SteamDeck",
                  "#SteamCharts_Yearly_Tab_SteamDeck_desc",
                  x.top_app_list,
                )),
                te.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((te.bShowDeckCompat = !0), se.push(te)),
                (te = tt(
                  X.Cm.lu,
                  "#SteamCharts_Yearly_Tab_Controller",
                  "#SteamCharts_Yearly_Tab_Controller_desc",
                  x.top_app_list,
                )),
                te.rgFilteredCombinedAppsAndDLC?.length > 0 && se.push(te),
                (te = tt(
                  X.Cm.$L,
                  "#SteamCharts_Yearly_Tab_VR",
                  "#SteamCharts_Yearly_Tab_VR_desc",
                  x.top_app_list,
                )),
                te.rgFilteredCombinedAppsAndDLC?.length > 0 && se.push(te),
                (te = tt(
                  X.Cm.e,
                  "#SteamCharts_Yearly_Tab_Demo",
                  "#SteamCharts_Yearly_Tab_Demo_desc",
                  x.top_app_list,
                )),
                te.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((te.bShowDemoInfo = !0), se.push(te)),
                se
              );
            }, [x, y, h, p]);
          return {
            rgAppIDs: A,
            rgYearlyReleases: x,
            rgTabsData: H,
            loadState: y,
          };
        }
        function Ha(m) {
          const { nYear: n, TopYearlyReleasesStore: c } = m,
            [g, h] = (0, ee.useState)(null),
            [p, x] = (0, ee.useState)(null),
            {
              rgAppIDs: A,
              rgYearlyReleases: y,
              rgTabsData: H,
              loadState: T,
            } = $a(c, n);
          return (
            (0, ee.useEffect)(() => {
              p ||
                (0, jt.$R)({ bForceFeatureTagForFullController: !1 }).then(x);
            }, [p]),
            ca(g, h, H?.[0]?.rgFilteredDLCsAppIDs, T),
            !y || T == Ge.Sq || !p || g == null || !A
              ? (0, e.jsxs)(Ce.Z, {
                  className: Pe().ChartPage,
                  children: [
                    (0, e.jsx)(Xt, { nYear: n }),
                    (0, e.jsx)(Mt.t, {
                      string: (0, re.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : A.length == 0
                ? (0, e.jsxs)(Ce.Z, {
                    className: Pe().ChartPage,
                    children: [
                      (0, e.jsx)(Xt, { nYear: n }),
                      (0, e.jsx)("div", {
                        className: Pe().NoticeBox,
                        children: (0, re.we)(
                          "#Error_ErrorCommunicatingWithNetwork",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(Ce.Z, {
                    className: Pe().ChartPage,
                    children: [
                      (0, e.jsx)(na, {
                        rgAppIDs: H[0].rgFilteredCombinedAppsAndDLC,
                        bTallCapsule: !0,
                        bBlurCapsules: !1,
                        children: (0, e.jsx)(Xt, { nYear: n }),
                      }),
                      (0, e.jsx)(Oa, { facets: p, nYear: n, rgTabsData: H }),
                    ],
                  })
          );
        }
        function Xt(m) {
          const { nYear: n } = m,
            c = Ke(),
            g = (0, Ze.f1)(),
            [h] = (0, Ja.QD)("tab", 1),
            p = n + 1,
            x = Dt(p, g, !0),
            A = n - 1,
            y = Dt(A, g, !0),
            H = (0, Ft.yk)() || (0, Bt.tx)(window),
            T = (0, ee.useCallback)(
              (ue) => {
                H.active_modal ||
                  (ue && x
                    ? c(je.BestOfYear("" + p))
                    : !ue && y && c(je.BestOfYear("" + A)));
              },
              [H.active_modal, x, y, c, p, A],
            );
          (0, qe.E)("ArrowLeft", () => T(!1), !0, !0),
            (0, qe.E)("Left", () => T(!1), !0, !0),
            (0, qe.E)("ArrowRight", () => T(!0), !0, !0),
            (0, qe.E)("Right", () => T(!0), !0, !0);
          const _ = h != 1 ? `?tab=${h}` : "";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: E().YearlyHeaderCtn,
                children: [
                  (0, e.jsx)("svg", {
                    viewBox: "0 0 100 100",
                    className: E().Triangle,
                    children: (0, e.jsx)("polygon", {
                      points: "50,35 100,100 0,100",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, pe.A)(E().HeaderCtn, E().WithSubtitle),
                    children: (0, e.jsx)("h1", {
                      children: (0, re.we)("#SteamCharts_Yearly_Title", n),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, pe.A)(E().PageSubtitle),
                    children: [
                      (0, re.we)("#SteamCharts_Yearly_SubTitle", 100),
                      (0, e.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)(Ce.Z, {
                className: (0, pe.A)(E().ChartRangeCtn, E().AnnualChart),
                children: [
                  (0, e.jsx)(Ct.Gq, {
                    toolTipContent: (0, re.we)("#SteamCharts_Yearly_Title", A),
                    children: (0, e.jsx)("div", {
                      className: (0, pe.A)({
                        [E().ChartNavCtn]: !0,
                        [E().Disabled]: !y,
                      }),
                      children: y
                        ? (0, e.jsx)(Et, {
                            to: je.BestOfYear("" + A) + _,
                            className: E().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: E().ChartNavPrev,
                              children: "\xA0",
                            }),
                          })
                        : (0, e.jsx)("div", {
                            className: E().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: E().ChartNavPrev,
                              children: "\xA0",
                            }),
                          }),
                    }),
                  }),
                  (0, e.jsx)(Ct.Gq, {
                    toolTipContent: (0, re.we)("#SteamCharts_Yearly_Title", p),
                    children: (0, e.jsx)("div", {
                      className: (0, pe.A)({
                        [E().ChartNavCtn]: !0,
                        [E().Disabled]: !x,
                      }),
                      children: x
                        ? (0, e.jsx)(Et, {
                            to: je.BestOfYear("" + p) + _,
                            className: E().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: E().ChartNavNext,
                              children: "\xA0",
                            }),
                          })
                        : (0, e.jsx)("div", {
                            className: E().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: E().ChartNavNext,
                              children: "\xA0",
                            }),
                          }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        var Me = o(90783);
        const je = {
          Overview: () => `${U.B.SteamCharts()}`,
          MostPlayed: () => `${U.B.SteamCharts()}mostplayed`,
          MostPlayedOnSteamDeck: (m) =>
            `${U.B.SteamCharts()}steamdecktopplayed${m ? "/" + m : ""}`,
          TopSelling: (m) => `${U.B.SteamCharts()}topselling/${m}`,
          TopSellers: (m, n) =>
            `${U.B.SteamCharts()}topsellers/${m}${n ? "/" + n : ""}`,
          TopNewReleases: (m) => `${U.B.SteamCharts()}topnewreleases/${m}`,
          BestOfYear: (m) => `${U.B.SteamCharts()}bestofyear/${m}`,
        };
        async function Ya(m, n) {
          const c = new dt();
          return await c.Initialize(m, n), c;
        }
        function Wa(m) {
          const [n, c] = (0, ee.useState)(void 0),
            g = (0, ha.TR)(),
            h = (0, ha.rX)();
          if (
            ((0, ee.useEffect)(() => {
              Ya(g, h).then((T) => c(T));
            }, [g, h]),
            !n)
          )
            return null;
          const p = je,
            {
              TopSellersStore: x,
              DynamicUserStore: A,
              TopMonthlyReleasesStore: y,
              TopYearlyReleasesStore: H,
            } = n;
          return (0, e.jsxs)(It, {
            TopSellersStore: x,
            DynamicUserStore: A,
            TopMonthlyReleasesStore: y,
            children: [
              (0, e.jsx)(fa, {}),
              (0, e.jsx)(Zt.Ay, {
                domain: "store.steampowered.com",
                controller: "steamcharts",
                children: (0, e.jsx)(ee.Suspense, {
                  fallback: null,
                  children: (0, e.jsxs)(vt.dO, {
                    children: [
                      (0, e.jsx)(vt.qh, {
                        path: `${p.TopNewReleases(":salePagename")}`,
                        render: (T) => {
                          const {
                            match: {
                              params: { salePagename: _ },
                            },
                          } = T;
                          return (0, e.jsx)(Zt.Ay, {
                            method: "monthlytopreleases",
                            children: (0, e.jsx)(et.tH, {
                              children: (0, e.jsx)(Gt, {
                                salePageName: _,
                                TopMonthlyReleasesStore: y,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(vt.qh, {
                        path: `${p.BestOfYear(":salePagename")}`,
                        render: (T) => {
                          const {
                            match: {
                              params: { salePagename: _ },
                            },
                          } = T;
                          return (0, e.jsx)(Zt.Ay, {
                            method: "bestofyear",
                            children: (0, e.jsx)(et.tH, {
                              children: (0, e.jsx)(Fa, {
                                salePageName: _,
                                TopYearlyReleasesStore: H,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(vt.qh, { children: (0, e.jsx)(Me.a, {}) }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function fa() {
          const { pathname: m } = (0, vt.zy)();
          return (
            ee.useEffect(() => {
              typeof window.ScrollToTopStoreMobileAware < "u"
                ? window.ScrollToTopStoreMobileAware()
                : window.scrollTo(0, 0);
            }, [m]),
            null
          );
        }
      },
      21895: (R) => {
        R.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      16619: (R) => {
        R.exports = {
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
      50909: (R) => {
        R.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (R) => {
        R.exports = {
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
      71347: (R) => {
        R.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (R) => {
        R.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (R) => {
        R.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      95863: (R) => {
        R.exports = {
          narrowWidth: "500px",
          CalendarBtn: "_6LCq5awwJWbT0WLusE-as",
          PickerContainer: "_3YV5gmu_9QoN0IYGWX7N0E",
        };
      },
      32190: (R) => {
        R.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (R) => {
        R.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (R) => {
        R.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (R) => {
        R.exports = {
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
      9709: (R) => {
        R.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (R) => {
        R.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (R) => {
        R.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (R) => {
        R.exports = {
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
      25359: (R) => {
        R.exports = {
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
      79949: (R) => {
        R.exports = {
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
      15496: (R) => {
        R.exports = {
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
      64734: (R) => {
        R.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      89921: (R) => {
        R.exports = {
          ChartPage: "_1A7NagdRz58_o8HPHMa3eE",
          NoticeBox: "Wz_vOPow_bEtEb4cgCPEi",
        };
      },
      27221: (R) => {
        R.exports = {
          narrowWidth: "500px",
          ImagesCtn: "_3C3Hy1Ldb_j8FpXikuio9T",
          BlurCapsules: "ZhjPEOG0gzrTqrcqmNZsY",
          AllImages: "_1DF4gfqbWS61FaehmUYkuU",
          AnnualChart: "RLK6pXS_oOr0O7-PifqTy",
          ImageTint: "_1uXifcwYEEZepZq9GX0pf0",
          AllImagesCtn: "Y8NVLbtTPQh9gVfG4V_tl",
          FadeInTiles: "_3HscHWkOLtsK-kzGBMVI2Y",
          TallCapsules: "_3KtoWhNtwhnMPl7e0OxGBj",
          Wide2: "_11TDFqeudgrq4D6KFL1Hs3",
        };
      },
      87853: (R) => {
        R.exports = {
          PlatinumSection: "_2M6w2tE1mq1K57VNXnkzkT",
          GoldSection: "_2XQYX2jtslkhZFeU8dsDIp",
          SilverSection: "_2KzJEuTfwQGu9Qw4v4HY7R",
          BronzeSection: "aAu4zZKXrAiL6gzPT_bZG",
          AllTiers: "_3MBqFIUsuhw30AtrWEE_mX",
        };
      },
      74812: (R) => {
        R.exports = {
          SteamChartsPage: "_2aYDMWWN9bAVaHmPfFHXWA",
          SteamChartsRootPanel: "_3GQ1HSHen1-JyKYkhmWt9a",
          SteamChartsShell: "_2rArjHHk-sJxtm0AQK-ifY",
          SteamChartsContent: "_2uKyXTgmlwRhfDB9pAKD76",
          PageSubtitle: "_3wxTKWJdN8vIdXKlu-ZHZX",
          TopDeckSubtitle: "_1l72-mnPYU9Ton0UyCrTgL",
          HeaderCtn: "_1kLTg9HHfMgVo8gDstT8uR",
          WithSubtitle: "_kbFJdSwEh7bc98Yq_gZ2",
          YearlyHeaderCtn: "_23MzHKxNYqVS4XAaaE8YQK",
          Triangle: "_3022w3NEiudslTNnPMWd8Z",
          SteamChartsRootPosition: "_2tAk2uCRwLsaOcFMF0VAr9",
          AlignWithMenu: "_2-hIBICcMkAAkFzWEvp5uM",
          SteamChartsMenu: "KSZ9hmL_XbHI_tlSUQylO",
          SteamLogo: "_3qWYYrOe1bQhTJwm0zc4E3",
          MenuGroup: "_2X7eT07iC6SQRu_uj4Web3",
          Weekly: "jC5Vq_nM-w0wUMREt340Y",
          MenuLinks: "Lj-O1sumeRPMtyePxydGf",
          Monthly: "_2mbn0MybOi1zQDV9iYg5X-",
          MenuHeader: "_19bojcj07vGvbhrAJ4T55c",
          ActiveLink: "_3kEWJGuSEOp09T1ZND24zk",
          ChartRangeCtn: "wLFBOAfa7yijnxFGxj9xs",
          AnnualChart: "_2HgYqWURygpji4_HPSk_sw",
          ChartRangeText: "vlHd8EhkUPvzcN2Xn4Y0j",
          ShortDate: "_2AQqwf9WZKu7d8zUGYJ5VR",
          LongDate: "_1V5zBbE55eaOW2YYdG-bDd",
          ChartNavCtn: "_1tUsAmcZXj8lDhFYLPtWSX",
          ChartNavHitArea: "_1PJCAo5GkI9HNCJX88goY5",
          Disabled: "_2VVBwS-S1js1QLzT90jv1S",
          ChartNavPrev: "PFs4U4cBAxm-GI1zMSV7q",
          ChartNavNext: "_27ASBphHd61RCZhLfsKIZ5",
        };
      },
      17083: (R, we, o) => {
        "use strict";
        o.d(we, { N_: () => K, k2: () => Ye });
        var e = o(92757),
          U = o(42891),
          ne = o(90626),
          ae = o(29248),
          q = o(58584),
          ie = o(81115),
          le = o(68841),
          Y = (function (L) {
            (0, U.A)(J, L);
            function J() {
              for (
                var me, De = arguments.length, Ee = new Array(De), d = 0;
                d < De;
                d++
              )
                Ee[d] = arguments[d];
              return (
                (me = L.call.apply(L, [this].concat(Ee)) || this),
                (me.history = (0, ae.zR)(me.props)),
                me
              );
            }
            var X = J.prototype;
            return (
              (X.render = function () {
                return ne.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              J
            );
          })(ne.Component),
          C = (function (L) {
            (0, U.A)(J, L);
            function J() {
              for (
                var me, De = arguments.length, Ee = new Array(De), d = 0;
                d < De;
                d++
              )
                Ee[d] = arguments[d];
              return (
                (me = L.call.apply(L, [this].concat(Ee)) || this),
                (me.history = (0, ae.TM)(me.props)),
                me
              );
            }
            var X = J.prototype;
            return (
              (X.render = function () {
                return ne.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              J
            );
          })(ne.Component),
          b = function (J, X) {
            return typeof J == "function" ? J(X) : J;
          },
          $ = function (J, X) {
            return typeof J == "string" ? (0, ae.yJ)(J, null, null, X) : J;
          },
          O = function (J) {
            return J;
          },
          V = ne.forwardRef;
        typeof V > "u" && (V = O);
        function k(L) {
          return !!(L.metaKey || L.altKey || L.ctrlKey || L.shiftKey);
        }
        var F = V(function (L, J) {
            var X = L.innerRef,
              me = L.navigate,
              De = L.onClick,
              Ee = (0, ie.A)(L, ["innerRef", "navigate", "onClick"]),
              d = Ee.target,
              ze = (0, q.A)({}, Ee, {
                onClick: function (Ne) {
                  try {
                    De && De(Ne);
                  } catch (at) {
                    throw (Ne.preventDefault(), at);
                  }
                  !Ne.defaultPrevented &&
                    Ne.button === 0 &&
                    (!d || d === "_self") &&
                    !k(Ne) &&
                    (Ne.preventDefault(), me());
                },
              });
            return (
              O !== V ? (ze.ref = J || X) : (ze.ref = X),
              ne.createElement("a", ze)
            );
          }),
          K = V(function (L, J) {
            var X = L.component,
              me = X === void 0 ? F : X,
              De = L.replace,
              Ee = L.to,
              d = L.innerRef,
              ze = (0, ie.A)(L, ["component", "replace", "to", "innerRef"]);
            return ne.createElement(e.XZ.Consumer, null, function (He) {
              He || (0, le.A)(!1);
              var Ne = He.history,
                at = $(b(Ee, He.location), He.location),
                ct = at ? Ne.createHref(at) : "",
                dt = (0, q.A)({}, ze, {
                  href: ct,
                  navigate: function () {
                    var nt = b(Ee, He.location),
                      Pe = (0, ae.AO)(He.location) === (0, ae.AO)($(nt)),
                      pt = De || Pe ? Ne.replace : Ne.push;
                    pt(nt);
                  },
                });
              return (
                O !== V ? (dt.ref = J || d) : (dt.innerRef = d),
                ne.createElement(me, dt)
              );
            });
          });
        if (0) var Q, ge;
        var Te = function (J) {
            return J;
          },
          Ie = ne.forwardRef;
        typeof Ie > "u" && (Ie = Te);
        function lt() {
          for (var L = arguments.length, J = new Array(L), X = 0; X < L; X++)
            J[X] = arguments[X];
          return J.filter(function (me) {
            return me;
          }).join(" ");
        }
        var Ye = Ie(function (L, J) {
          var X = L["aria-current"],
            me = X === void 0 ? "page" : X,
            De = L.activeClassName,
            Ee = De === void 0 ? "active" : De,
            d = L.activeStyle,
            ze = L.className,
            He = L.exact,
            Ne = L.isActive,
            at = L.location,
            ct = L.sensitive,
            dt = L.strict,
            ht = L.style,
            nt = L.to,
            Pe = L.innerRef,
            pt = (0, ie.A)(L, [
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
          return ne.createElement(e.XZ.Consumer, null, function (E) {
            E || (0, le.A)(!1);
            var ee = at || E.location,
              ft = $(b(nt, ee), ee),
              Ze = ft.pathname,
              jt = Ze && Ze.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              ke = jt
                ? (0, e.B6)(ee.pathname, {
                    path: jt,
                    exact: He,
                    sensitive: ct,
                    strict: dt,
                  })
                : null,
              Ge = !!(Ne ? Ne(ke, ee) : ke),
              Le = typeof ze == "function" ? ze(Ge) : ze,
              We = typeof ht == "function" ? ht(Ge) : ht;
            Ge && ((Le = lt(Le, Ee)), (We = (0, q.A)({}, We, d)));
            var Ve = (0, q.A)(
              {
                "aria-current": (Ge && me) || null,
                className: Le,
                style: We,
                to: ft,
              },
              pt,
            );
            return (
              Te !== Ie ? (Ve.ref = J || Pe) : (Ve.innerRef = Pe),
              ne.createElement(K, Ve)
            );
          });
        });
        if (0) var mt;
      },
      44894: (R, we, o) => {
        "use strict";
        o.d(we, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
